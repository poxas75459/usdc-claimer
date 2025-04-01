/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2wWVaJj6GkDUMcARdUtX8oSatkSzU2bikWCRq7T5Ed3dnEtHGvaRvZmxbMk3Hk5SwSXi5M8CDVoutRnA68XjNxga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66mXJmXP3q7gSVVcSPxAwbb2unwRLaBZJpUmAGfQX1WqHAzTK5w9BBkBK5Nm6gtnuLDiUbSDttp7wdaEyqk37dtn",
  "key1": "5pn3qpcMKBAFx72n9nFiofuaUps3aR1ywURvqjnexBaNVnKe1QmFDeSkYwPYurFcvNnKr4XMFEQc261kg2g6UD1U",
  "key2": "gCSysPVvemMKTF1C7dNB3nQGwKuWBizm6gcjTGGrKothYKQ6MxHeNSdb5ig3973uKvP26ivDemmcFAWBde1kZq5",
  "key3": "23zKE1x9JNnXKpnKSf88wha9EJhXM2yRuxaRJaqTncjMKKZ1CdZ3U6nVy7AcjKDDwkhvzozUYvEfQSD9JunBxWNa",
  "key4": "2sP37u83A4M3d4rjGA98xqEWqwyqii1nuvJvDmV5561uZZpGS9TCQ8HV55YDxmeYon2kFAkktf9SRZiduGo9DV9u",
  "key5": "4LGuRjmaB7VKQ2zrGF4nXskMfE2Rvi4rr8oMpemAXdx17PFT25MWFAycvAG6fq7T1sR4okjhYhiTxhQYEA1kHSWs",
  "key6": "4X7LuSokkRWYaA2Jkt8UFs8ZBoc9peP9WBEongH3ET6PhJq79oXxsTx3fLE4stLpdB6bDgAJB8ckuHywnw4w2THo",
  "key7": "2QRex4J2wZcZzRLyiTASeydnYWC7ASQoYHe7kiY3eFCZQkzP6H1MR2mGZXvM2oyPfcH7YAL3dG1yVJGTRsvrAz31",
  "key8": "2dFjiY6dPEDqLJ5kYdVEP12GqQQd3gH6DQc729kQTek9CJdizBdyw7dBr95bgF3rn2Q3YYZkurmxoBreyQKbJXF3",
  "key9": "KbCrRFNxTx2hg2WYZXiK9K5mQKPHBbBeBtVmUAtX3jpoCmRrf7kv82ZHJxDr1gUBFLLkBrk7TXDG4joc8tvygq9",
  "key10": "4GGFMZmHFYAXrnPpd2ptrC3gXAMHFrAYbKnqVDe64rXUN8TDVcY7JyDXcDDTmczm452jjcKnjwJbpnq2fHGxZ8DY",
  "key11": "VRvacJ9hmfUyfq3GiUbWGmC78j7SgiQ4RWZKdtgvwuKSRkkz8BAdDx5ePVHciBR2XCUSuqUAjjbiRSaqQmbtVSg",
  "key12": "5YzgDj5dhaBhYFpzZyJ2XShMaafKMJceKWGc8oRMgzKgMijjXk9C8z9SYZqwAWbxTmcPbc69qcM9nHScrcTNRFh",
  "key13": "gtuKHwn6cihCrVnEazQAf6je4JDXb2bDLNm94au7KmzBDKdUupLEuGWrRfo7oPqBNcKNVgyz2gPSzqFaTFzgE1C",
  "key14": "34pMBeb2R6a9KaRHr4CPiKjm7cVip1XoPc9f2fu9ZFeBQq3farFZpJSgXys7rcqfAhmnE6SnuzQM9Sg5wzRoKBU7",
  "key15": "3j3XBSLamSd8aKcpKCKjtBNi7RqbxuJUyCAC3kh5RntQLQecWHGSLDv38FHxwXxbAiQ8a6og7GXFuqxGWHYHkM4H",
  "key16": "4dPuxkfU8dV5mtunFeKvfBBRdEkx9TXFwsL25o8AbRTi2xwFff7peoFNa42xAMDjJtGpfZfUdh9qAWE461hu4B7q",
  "key17": "3vC1GteSKChVcZdTWE6tmS4PZeFxeeFRfE4fbcqjn4n3SWKYFYQrVZUm1F91G6w2kfLimFnBkYVayuvkFYuw8wzv",
  "key18": "5xZqGuB1K4tAaE5bDjfnEZN6MWx4Rzss9oVnF7U4eD2nAo1VYVd7BLokm3Tk8j5J1aFmmxbvefEdXwYgK2GroGqi",
  "key19": "2D1nc6mJ88UmPrsnMXFMTyuKy6B2h8uf55zbSB1iBHA3XvQyBDSv73qWEEyjmqCWKgDyQ6yzgF4McEhC63uYLXjh",
  "key20": "LN6Ld6qtvmigDPUh9zTyPEGusg6ciDrWfbovKZnY2MjSarU1MSCP9sNCZZkxM8vKU6yHAZgQpJGo8HbL7drzCSk",
  "key21": "5H21QHDduSa27maGRZaurxThwVpsm9nAvo79xGbRiohaPXp5n2z7NMy1bgJEVo2Bow4EvR5sqhiZXjgSSY4TSaSY",
  "key22": "5oJLNDS7PvK8SaB8K59aN6DfdzahqaeieLTvc6bTiVh46vRRriZ7dxBVUXMcw1yRr9eRkJHyvypScqT2XMq19foj",
  "key23": "4tYe4NoS5xrGbBdUYXjcp2szpz3Hnmaadt16yf9pimLJX5f7uwmgkKuQFW6xRt6m2Ybvr57PTLHPNv11Q7sgEGG9",
  "key24": "5eEkHjFzYVo42Yyf32oAmGmYQ7G8W2q7ZjVPi1D8zaMyE7Ux1B24Mzb67LMB6RqcWBQV1QZsGCrTfG24aMj3nPhB",
  "key25": "5kNu914F8n1oygeaS4HNAPatozuRskWyC6ox8V3yBWh6CSmqKwg6RsHZSeUotdGcgU6dUu7xWgfAUCQ7Qo9R5uiS",
  "key26": "23WF2T3Nb4trNWZHuVRCZo3nKTc7e9wfc9no7pEuqZ2XZ9TfeXfkcJmDAssiA7LUiRKAj1rczngSUnFja8uPG4rP",
  "key27": "5qytpv99MwEtMJG1ML5PiY9vaxeoPEaKaconqeqwJtxn7ZFFa4nA3AazSYDYtVyPiut9XwFnfFtCHFD7Nf8XMXvU",
  "key28": "27UYPoFRz8avSCKPtdQczM2q8kwsTJFey9dwxUtUUyBrXcCmD3SmDbGJGUJq86qCcDuMREa16YENqNpGdWh2g9qc",
  "key29": "5ASvEfNqFEtKcLpVpG2o7raYmdz71N93oWmUFA9pdikpkiBBWTG4kgfDit3KmA5CyqqrAQNP6rJmdv1UCH3WkDPZ",
  "key30": "3fBXVbrtTTQpqV4RTssmKnWJgn3mrGumJMaHsn6Ry5P68yYNTDsmQD1y5Vmrwr5i4GLs8tN3woj2QBh7HxEPvj7X",
  "key31": "R9q4hfoii3UaBNKiPydQbDMmj36Pzoo4MdKs6dWR61NMqZ79iuAM7BXJx5LdNLxNfB4dcYZF7X5cuaSa7bjcMCE",
  "key32": "55WqXoJgzoFrwBwrzoV6a59bz2pyqnEGZWRF4ckM6MB9kuFWVg3iX9qHwvLY6TXpRia76HZ5rx5o8isbnR43h2FF",
  "key33": "4QQ9fY9479bX9BskWeqjUmWvrgnpzvUMUj7ReC5MJB1T3jLwujosH9Cur9ywPLaXcHgWMFynx8N64VXprK9SnbHT",
  "key34": "jgvscdNMaT76WVWuNqiFDbQi4aTsyXq68B1YcHEhj4yygoduDBEeSiemTte1avcPTZTubieCHbbznCm6xdHM2Fb",
  "key35": "4KPt8gogRqorSf6iJEh9ksCvAyR3vdPQJZiqaiSathngibhKxXvkEySbubHqRSGmxotrn9YNvaAgtFecdiSKnZEb",
  "key36": "aq17pUyryNfJMR5cAZQQL4ev5as8NJ7pvpZnAp7JmgacVnc3MAnFY15KZoebDRmbbDWDMM1xvto436ijbZP8aC6",
  "key37": "5fERv3qLEe4amhHZQsRSHsHeXQGx3iP1adjvrjtxn7mTrND4HNxiAcWhSDotmwrHTsPCKSzH1cJ4XwTwbzK89Esm",
  "key38": "wC1yDDUASWUpyJNbJvAaVfqLN9hWfyf9LKaLeRWHiEgQnhw9yzFpb4PSx2Vx3paFnZmDfYeZVKeAV9Uv1GBCjoJ",
  "key39": "3HNeVEqACuh5sSusB8D3v5jKtEvoTUxCM8ffvxcQYUWP8wf2K8yCjfpNPFUDq3oE9fbWD5FMwCjmFVdLifcmtvUs",
  "key40": "5sUviZYJfrbX5dzNWZDBJuTrBd1Te4WhjYEkmGsLwCGoV5WkD6KEeqzzotQZoixSGWbXizx7jmrwWKwt4i5oYp5e",
  "key41": "58Q9MGxPtkSSdyzMtpeFtw8bJsRJLvdXcL7j1sgytCQTwTsyFAysNUqhW3q7STaLK2siJaccjh87Z7xCVzq25TRx",
  "key42": "2UqWjp42Kbqb2qyVs7PgYSTuL9TxJm86s7g8JK1sXeRWRnL6BV4LR3ayLfPiHvqWB8gG52TAisLGdCATHXcu6waG",
  "key43": "4JNetmevkoEecM4MujWHsKeW1sJn1gSjz1oHsuDzDXAGhQi9YEAVe2UAuAoYKSedpzgbo1mPmeJ1r9YERTHdKdFb",
  "key44": "9KaRM7ewhNP8XpVgJoMru22d7AsPUFcan4LHGWWAjY6vifYFVngExhyY6KoQJbuHgSmucSVMQo8qrU9ECy16wj3"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
