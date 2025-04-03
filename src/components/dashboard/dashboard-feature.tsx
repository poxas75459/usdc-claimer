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
    "53pro9u2zMvxpwsoLahQdPgPGfMTaj8vdRMgtKahKEiFntGUyodPtnhCTS6tNXcTDqW37NfNBnswssjqxUfSvv4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n9maGL89QPMNxJAWjrwiq2zUfvgGk9a5aKkXHjkND25ecRVQzbMcRbwYhF2B53MrSnTKUeHJTLpqTzfknX1zGYs",
  "key1": "5Jt5z7mjxFYqo4kAw46j2V9fukhTqojtk87skccyngaqdoS2pMNxcFpFsEs3HHAyg2GEHuTpNuG7mxkNYn4nnRCA",
  "key2": "46uFGkrGWqCtgYucWGZSme8ZqzUWJnz6urKwri46oeZBx4Ay6QrYqvHKccHT3EUMQf3WUayvXSwWKNDpwgNpGX8E",
  "key3": "5EdFkSqUXv7PFNxjgFEgY7yBASJZqMBRoiV9zGhokNPr4RxYDdFpDBkk61YixqMNQicg1dngC56pLNixisn5Rh4f",
  "key4": "2TULHvHeR3majf6sxwVmwtnrSnSwTrbKMFmu9epEf68g7WTwVFF5kNPDLstoAio1qubTpxr61mcGJqbrfPVuRpAq",
  "key5": "5Hj87ugME8WMwTJcshdmiyy7FU8ZXWZLrKYiN2kGpCFjsRqxkmXaxRR7qcWEyBA5Ttg6A42zEugrNWWX8HNjo8Sm",
  "key6": "2mUE7Lkfw6BXC813vSghpFsP5vgx4mGXzuyBy798cQuJpcjPdZRTLcj5bvn95YC3E7QoEvKHQZFfYzGN2zRNKCAb",
  "key7": "gq2FTqTLPPVcsZoinqceNDMGi3XH3TA7XhrjioGgnBJhpB3QuM4bK23BxyuCsznta3RNA899ZsoMgs4VrvAK8cM",
  "key8": "sbdpCE6QPJuWtj4cCRTTG2Jgrui83Mr2b3hpj2BZ8j3MEb9yqhttYLztyS3r7niqsxWkTJNTjUEArh8rFs8VDzo",
  "key9": "4nxW5pivpCpYRXGaWitaJRYvro1B543LbjXJJLU5Q3uh8barFHU1tw4GieJmYjKdNScba87iDWFSWgVFhrH9doi4",
  "key10": "2MU9mLVJTHEKe3mAAY6FeqWtZ3rGfuxPnDBG7duvbrSo56oPF9qZjtzGsPZKBfFQydYtfQyeQScFyM4S9LnLK2R8",
  "key11": "5SAgpWbqLg8SMBiVjpDDY2G61o7yzrJCKYQ46BybrayFByunAEwxgNftUgpxzVyY5AehJCRZjeDwNTkqL33j3MVn",
  "key12": "56w5d5UwgyKUWdTvhbLYuAg2ockYtoiiEoeUR754RYZddkrqoSTBhHG6RhgEfQPCT1BDE6CREDzdJBccPhwMLoh2",
  "key13": "WFZrLUXBDwRHfSYMaHcSFEHzkqGfTGYAGu3yTpLtaxvKuTo2bPdn3GtEXKyVvjiaQ5aU6mnBjCiN3oQixGVFTBb",
  "key14": "4R2xGARrKDTADqmnv5SDJ8JS9pYzA5GAcRfmLECzyLXYxDRACmg6xhKcbtReHCN9efafPTxie2jpwo9uoyzP8fT",
  "key15": "5dH2USkiQ19NaE3L4oMc4tWH5C5xqRmjr3rx7VPPbZAg9XKd3u7bUwS3xVvJTTecQNUq79rPZ4Kyq6cJpxUQsf1n",
  "key16": "2iP6t5oHuVQQ8be22K4shJFWp9piAG3fHbVq48WoxPxFNZn5LphV6KvyMfiE7QSj7i3ah8Z5raetC14iQXWatmsH",
  "key17": "4jr4nB6XHGMtwqt38ovgfv3he3vQ7cJAgfyGVr9tehPJVC3LmAf1oiCxw2d7p9V72VxfRshyTiuEhEZuhTU5bhk4",
  "key18": "21iWpoHKz7f6wXj4tdnxQVErk7q4Srdjdq4L3oDPaj1NYL984joBkudy9BXRshU7uDPbCtb8oBSrHf49qr8QBVsy",
  "key19": "61yHLSRCRkpNeeUT3cexQRuZZBJcNeusMDU8Wj7bHRDnYtJEu4FdUo2vHfi1b7rrv8Gvv34ZdUbB6wtDRJz5CB1G",
  "key20": "HjUqfQPpS9DWEheddHBMuVfkYkAzmHDvyQr6QH27GXbWdtnbcTR95LLrR8z7BCZUSDhN6ctqgrR23thqh1Vx4sH",
  "key21": "aysvYMPP25cFkRutACcJuR35avDYQ7PsYSNcgdu4ZFeu2crkXj7ibMxrRrJ5dKfbcfESFwF5PU4TY5bPYDaz9Kr",
  "key22": "2gyPaJZEtJF3R36iFU2bstKm3CKCKYeVUPotj2coqEMFVaKCFuGhPbgEKXkvQJvMLBDuAehB5oMJaaFgcDrkYNTw",
  "key23": "4siB4EKqEo7PfLUMRQ2mTw5fkMXZERKoiJ5LvewabjtxYNEXdqQGgXwqgATBCwsaHpMuar9fmbGnLtT4BF2VjXbA",
  "key24": "RE4JeBLwP39ezoGxeoiM9hu5hCG7eU4FJWsFjL5rLyGfaSjvZWqkRRPP5QW1rDShPsdsoFdJiypq913ubnNsaAB",
  "key25": "44GanFW34xAAp3WptW2n7CoWJHGqJVnQbwwJfDUAqv8qDJDRr7YD7n8SqabLm6QMpPBDSAhzLitQove4H9sQwU5Y",
  "key26": "2fU4CcNdo5dVKVQrEK3ywSisfxqmdqx6UKTQXwd5uMEnuJirorFfm8qjvKN1TcNFsAD8r2QSXhD7v2fM1srKV28M",
  "key27": "263g21NbFqDXW9Y8Br67o3gwMSDPvhcSM6PYxjtHeAC3rQuaTw5MTp7eqKeSQiUkbyaxcNu5yZ3RC3YMmwC772Ww",
  "key28": "3zhn7UnKfQribhkPPsC6LWmYYN3JGZB9SAT4SpDcGxkaiNYNuPwBAnA1CakETxe1e7Mhyo4oEpb8hbRct88nVWPt",
  "key29": "3xDriLoodarFyQV9UVBTbm3AaXuRFPXJrM3MBHcWBCNFjRum3omPpghuDztA5N4AQJWZKVmRtgsA2PxfWp6RZAPH",
  "key30": "3aPhFPaCC6WMwXmRFd17xevxuEpGED9oT1j5FVckVhWzMqGrkBCezLHan3A8x3k6v7r19kMputUginKmk73LDbwt",
  "key31": "ZNw5MUznLwrfDv3MLTNMMTRAsh3ByYW4dXJfBmLi6YZytUTRnkstDxNKiHWawiyHE2ka4Dm4aJ5QiqBACmn3b6W",
  "key32": "UdXVsiC6qDHFaWyh82LWULchQXX7db23A7Pv8SNGfjspBRmLnP9xmaLofy2TLHfEKp8UCgBpDvwUtHf93VhNiVr",
  "key33": "uZ2WJoNnfNwD9yQ3nKVKsXHTVv3833FGzJhCc9zxGvwoh21Mzc8sz7sAnbMsigyNd4tXdY1V7nYzx89Ku5hJLby",
  "key34": "256Hy9TRWzVhEjDe4PJXQSTv8wsMtoCKraFX5dmp7jBzxqcBJF3FnsArXxZXrkRTCCuEi8MmQrgmws6x4vLoL6EV",
  "key35": "3BY3i2f4yWmxQP6E7ChvkzpM1TfyqNvyZNG6bVAedK68CwfnpoXwcxUjC8AdCDBbiXJ6sJ2FWLkgEknUAdm4sdCF",
  "key36": "2tGqhfpK8FYJMYQGVWpaxqWMWJzHfK3gpdSBqbEQQaCu6DNxvf4uYrNu9ZRR7aRm8TWTsGhAtoGooqa6dVDBXqYo",
  "key37": "4PXpXx4NCV3wg1wbciseRb1xwcBcjoS4FxWyPEzp5Nfi9ZhoxgQ8qL3DvDgj7XrJis2AXPnh1x46Uz3dKghJNrqn",
  "key38": "4aMs98UF8onQDkoNvuKxDLFRWghonKCbG1rPFFNso4rn1oVD7P1N9Q6VhNvek9g7sMa7yiVi7SdGxsMNpRzEKJrQ",
  "key39": "4wFuQ5ppuZje3NxTfKkpWXr7Y7XbzyyhA9LycHhUG2cqrXNyzEndgTRmg2xwZTFi5jGA4oCAtYyPkyGQYft4JfSx",
  "key40": "XVN725WnYMsq4prB3Lav9RtSWB9f628PXSEcSXzRLKz62QQNJauidKuCMiqKjjw1HD7Qh1fmfBTbj48P1JvNQJP"
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
