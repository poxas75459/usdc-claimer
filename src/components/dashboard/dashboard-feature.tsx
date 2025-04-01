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
    "ccQHSdCJ7pjA3xEnt19DyTKwrDJWwkN8xKUznG1s63x6hnAcY3sgYuSdbP6dM6b1Pdf9PW1BZodNVYZYN9KckL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aeZPfRCjcqcjmBEBagD9WZQLfzMG1vMd7crZihqBUTx9u2cW2EnqKuGk4p4woqB3DBFcfNZy8K3yi7Uy2eCXw7a",
  "key1": "2tXv6RVVmoBEcfAaUUYJgnsaUSxMm2bHoxiGAZW2WLYvzvP7zKP91a2YtgHe1v7K7Xooae36HbAGbFBoopyLM6LZ",
  "key2": "39QVrzHrL5oa43aYVaqGE2rSvxteaA8q78tfiW7jyS8Xk71yfp8gpMLJF1sZr7prwKAz9hPa5yJX2PFR3tTv8jBB",
  "key3": "324JREvv7SbEQMCCxWWbSxaz1ZUR8ZpnUbNRQt5eHesUjexqStBc5uWnCmc46B36Y6koEKZsikeTzGCsgJfWPUDP",
  "key4": "7aPM7UYGjAWg5g9jvY95RLzGyRY9jzo4uVPCKAscvY5YrarsVN8T7wMVGtqBMJZYLH3PTJJCxP1mVCXFqqJgGD6",
  "key5": "K3RFoVnRpXuxWMWeZSNhWcrctMkkx9aX3TqLQVyCjnoQiRV72abLJeUuB1en9hohCAr57HYnHeqPCimcixpgmFz",
  "key6": "3n4jsuRaYEL52jq9SBtCM7FgGUb3zNHwXc5pnnhiRUSQQ8xPGPtiC4UNfK2zWVaFqL4zCz8cf5PUFpcZsN63xPUC",
  "key7": "3XKHK1kuMWJaXmRk3cfCtHpt1i4zq37rtgxPgpmC6zJiVK2FTNueE7FW699S5cy9y3SHSkCi1EFEA3EGfHASH43Y",
  "key8": "tqntHJEyrFSbXNkS3QS2R5r2LUPgyNnb6U9BbFqRTU8doyTuLiuE2V3cQzf33o7g1hBJg4YKumEFr4zVDGt3dBT",
  "key9": "5TSfqS417nxWeahnEPjwRBEDv2UaBw66vmtuDywypezRcDj4FvnGkvbdGdzmYN7xBdFV5D1YH7NAHTz5x1AcAEPB",
  "key10": "2hmHtibt5hYtM5QzEK73dLLTW5ym6cxFcc7PwigjyU6XAiMJ8gJd1JnfpSfASMVbJq3UkfhUbFoD88Nv8UEXE8B7",
  "key11": "2SE8rHBn46i5hxy4s68KAPnqExAZcUgLWxp1WdxbLmymqmcfJRswR1AjVB8KFWUFU9dWcCW91oXRDeTReeEU1rvA",
  "key12": "F3yC9KxXif75DrvTCChakixhTS2NkZ7rXy6SoYNWwjpak6Mo8VpQBFUoadC19wq2MAJnZ3rEKFaoUWPQPNRpgAP",
  "key13": "2foxkq9WQnSjNbCMzSitwAhsZMuvTQBjkny2zVYuMrxEqiAsteBAJEsWVPMCDr7pdJxdmhgPXrCVkqpnWMzH8fJC",
  "key14": "67nToW1GM5Jc8e5bb1BRB8gcPmg4j3BPdDPDGqfQeLe93zaDiDTBhZ4R22NTFNTpPstf5GoEWfXBz4oph4DGRRnL",
  "key15": "4qvCpBoWEX2eqZ5RuSNstnH4LscVPkA8QvqiA3Xqpy5wEf9G4b5Y9NGsTteYF2jAXfzD3eUM6p2Zhx6rkxrr68sJ",
  "key16": "4vreJDq1Y9b6ifYxUcxroFQqrkQ26zXP3r4kazTb7ZVv7nBwUejE3nq5ysHy3snTskKMBp3EbjDwrKVs4F82V5Bg",
  "key17": "2MLrKXUCudqtaBzujdQBmibcr4B8k96AezPLKqqmg1BCAPMMmDnwxx4gwseRoTpixZmB5iKR53SKA13BaxxSXGZX",
  "key18": "3S6pYzpr8R21oh8wLTW6qpASKkDv9NMFBgMs71ypvuVxndVo5bbheZxYfV9szUKxLZxP8L74jca3ozNxsDSQu8xT",
  "key19": "UUAVkseF23pzZ8pkpoGm41xdju7HnLkF8yzYo9f7UJvxUM6cgdVit6uE5RasThwgACa8VDHb41CyxN3uaEvnwKV",
  "key20": "5yxBjEg6F9rovLEKAnD7vWfTrZzXUWeYweTysWxNmviP2PeQeDoaLpft2sC4PftJgKp1emb7zwjgg146Yhek8Eov",
  "key21": "3XJJoEtn7UyrbeG8BouSaAVwEvsgSGRxWuTh17B6HoKg8BkDhzx6UsGRVg9m1xbxMdv1yaZKWD9QNeo4aLsfdJzC",
  "key22": "4pA6fnSQANu8TvhAdiqmnDfBkK6DguU72w7ijFEdubLprXnV8E8VgSZuxjmbwsu51ACzDNDb4MfC5sEuGRNB7FYN",
  "key23": "4h13KbK6aSGi4raPkbfWXAoWDxSXMfbrNZzEZ8Qd3LitLYD1x3n1Aj6qyy7yyg5dXrNRhsVPT4HkPyLJz8nvbkgq",
  "key24": "4NsxdR9eggafc5tngexcbuCeaRxjTtV7LoE99bk7kBNuyUnDbhMwrZ9uCuxz6peKffX1WXnTQYfA8iSbm71sS5t2",
  "key25": "67P6nMm1E8j13qaxQqDy3nu8SZ1C79EWtKwFymvZTaEf3KNCLiJ3ggZVoGy6hV7ehnpcG8viFBxVPtPwvqXn9fvS",
  "key26": "2Tat2eybLk3Ha46wTS7TDrojNaDCXvUXCNt3M6dy5EzztYsvqCntaU8sUPsGuoLNWkqr3LpDfPr55PREFd6YH7cW",
  "key27": "2FLXGiEUKtvng9dqD3g4dSQ4ovcZcFEkLEsf4mQhd3RExBuiY6s57TYtC6wWpMYrYb39Cs3CzZmYN3Tu72Ec3bFN",
  "key28": "2VgJkviP7eJa6vFva4XrzB7prhkGiYiPfJdEAZvyoSJbLXJnZs4MiQ2Z8hS6a96X55e82ZrPpgMKsyraNEpn5r5e",
  "key29": "4nKZ8N7zArkxAnpTqZaUTCmTkKaP9Cjrr9kbrT86YgNCvcsrvbzPGtD1Lt7AYKVBfp44QDdofzAEbf5hp5rmyqp",
  "key30": "5NWctCcvnjyuBdBNYMWLuCtgJCqCpiPpLMiCBiuY9f4vCWieGsCn4eKEkANLTcVYdpqEdRckEUis9cCiLrBLHUUp",
  "key31": "zchKkphv4p3jGX5ZNNjYwbaPUzdn3Q4uUA5ALqxVvMVsV3zaWwYjoxJZEQBw6cisX1czBffTDtnHcjNXhd4FkzE",
  "key32": "32ajPiyfVSaarYuPLHpg1PPqFVZG4k132NpTNpNhZjnpJEovHXHHNkaEJNScK1tRUZ5JPqajneL5XFnJWqiLpAHN",
  "key33": "55NXbbBcpE7poBFosVrKinJqpvfprhRhQBWMvadue9UFbKaFQdoR94PWc29Z9W6CtZwzqwkUZLLJpcka3TH88xec",
  "key34": "3YTzNREsGgJKmEKoTsaeEYM5bgB6TaXUU8yvqrucJEgEbMBhqTw7PRyiLC3iuYmLEB3m764NuSLAddd9QsyfrcgL",
  "key35": "2zggux7XeEUhDXdo6QWXCZ1Cv31fwQZsjrU6EjbdZgbVHYtxjQn7hR6eNwZSU5whg2f5uwS7MEEBP2h7vNbEYDwT",
  "key36": "63K8ppW7iZvb7hKuGaBmtVd9VgXtwV3Zm3iT2azgUTTfKHRAwnHV2yB9Cabc2MRZd9poWjFQpx95gAE9SJrokL7o",
  "key37": "5vNBxXcBdKzVHF4BMmZbDT2U8VMtQ1hWCXTSs44JPsNhN1KMjrmtrx5VPmj41mYC5hdaH78R5hbdbVMz73uMoDEe",
  "key38": "3ZhU7yg5tCmSPuXbQkmMU5xttMxxVi1r6pbkZynN9j2huGpUgCsE6iw1zJ6U1jK8imJWYmom6GcXnq7NbNuCvcAd",
  "key39": "5jH2nE2MgkUsGNtgPgTwMmzyDdQToVjwjL7MaK4jnLH93oKJSh3uLeAaydRk1zycE6cfhtVM83LXk176TJPUk3Pz",
  "key40": "3KfDSar5Qm4yAC4UCUwZXqGnYop4KeTFmGyFqAyCdFycn7H9U7SUUGbKrapaAQPCRba7416Jyc7QjzANcYhd8JGs",
  "key41": "3RADCd77BQJ5vdYrj9AnsccwU2kxY16h8e4NegmhfiJqwMo7JMVwdJbdQ91w5vws32HZBrCm2FrZkaGwg4M5CsJ6",
  "key42": "U9jqhWDrtXiqLDTERY2is8QJokEx2uyeC8reVaKschafoDYo3CCj67rTQ1G1QnPTBtrQFEnAsVsniT3vh8oT9s4",
  "key43": "2Tsib6FHSSNQdiSTUSJbedTKDDsLsEfnoCdvbYwEb24kt66j2CXhZr32FerrYZdBXfPfgkbATsQ54VZzfAtTn5b2",
  "key44": "Totj5c2LKjEcPhbs5g7W69T5g7n5LTWujtfGbButsF8hJhNGT1S95YBccBdqmJ8PQPPSa7Pkixtfo9HkvLburiV"
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
