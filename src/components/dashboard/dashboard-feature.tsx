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
    "3QKVUTvvusrQyuaGDeG6fzkdDQS6hYnjoH8HTgm6xEWfmTnnWm1GXdEEKVugc2krpSXEtWqWJrNbRwzfC1Rko4CT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PFPYs632p9AADZjmBgUaxUuby43QS6de1eZmajE3UeXyTDWcq9EQNctC6oEpAzmc59xoKSh8FeqBbHPKwzY1wyT",
  "key1": "4kgUEiaWk9mrytRrNBrBZujqaunDuqi35eN12FUpw1oZ3fjCBBs71s6YSs2vQbLtencF3WEBSWWYrYjcEztYLq3J",
  "key2": "4ppJgcuvYDghd3SpRBBHAyZLNHy5ceBPujHJsY9T5px7HXCCEARK2oxqHS9rhbGbwdRFe9zc4nFPdrntiLoCS74g",
  "key3": "2zh69eqnhbjZ7gzVDzwbPkCHfxSUDiCFNzSXwo7T2nwckievPCGF58cw3kKtzXkczdRzv8d8Y9rfYwU28C7oePc4",
  "key4": "3NsZ22Qph5N1BJFFjFRSBCpxCZEA3NFaTxs7jfR27Eu8vUajqiTeG2Fhz7yxR9Rmr7ME7cx5tuD5nMF7Ymhx4n3o",
  "key5": "4hWzUS7sBuXeniMNog7L551UtLBKf6v8hDpaFtjpdaq5ED7hdUU9GgHDx5csdxvRFjqRdhEWaiuueLEngJBK9j7C",
  "key6": "52dYp7zRUCAsMiemNC98JbCPhTHSvhy6vq4RNtt45R1UsLVb2BpgXPNTdEjDmnKvAj9goijQvS695kkAeWESmUdt",
  "key7": "kwZKX24DPU2RhgY8RaRzcD6NWiVqyMaJbsYXMKxCKj4Sopi7CHgMZJDzsfe6t8TJo3PV1P8jUxe4dnHBqYizhVr",
  "key8": "5AZdRGbqBeg3SX3aZM5akkDTDFfFYupPTtqTovQJL1GgUzpJNiv7EeQxFYtFSDBoXTm4vxFP2Y2pcBudM596R1Xk",
  "key9": "5wybVET2s8WzxjDu6W8QuHn9ifPrSdKK4sY7iCttGVVpo17ymFtLczfm1smVcJS4eceUNKrzqph29sH3TH2hhLXW",
  "key10": "HoKGxYSun3479CxsjCgXRcwH7pNGFXsrHU1BKUWt8UBTdToKed1N482E1Dk8ySda6H1EXZ111dmxFEYSU3qCX4s",
  "key11": "4emGR4rgJydQftvqKD7GFxdVJR9AUEF518aHynhRtaEkAQT8rtAoL2Vje8GHTBkRgNMtMCt3Y4CqYADuSTT16row",
  "key12": "2J4DPMhrFVd8DAxKu8rvUPJBPCGxpY6vuqMdYUdVSpwaM6xHoJQgkiHoeq7AtnZFCn5bqNaQjBkM3JMYWioryM7z",
  "key13": "4zuDgZXboaoYxiXczEH2caefUsdJhEPwsUaCQTnRA53Fafk4vBgzN7J1XyRPTpP7QF6e64Kchir7it3yw98soKt4",
  "key14": "3zFgas14AzGeVJfg5PNRKReN4bmG2XRKijLqgGSFtQU7873mtoZ2ZHYNqvdYCakk4rJWr6ibQGRziHWosUuEnKwH",
  "key15": "YAUgyJnV5xPvfg2DDXKSSEVNsJ9JRS1b9JoiyAi6Y8BwKnNDfxthrQkmgMHrgX9EiJY6xcF9cGxnBBM7Mme42Bh",
  "key16": "667dnpMcr7UL2eDhA4EA6czGdWY5r2Do7ccBbke8AUWLdW8DzravbgWbvvzN8Sc1DD9ZerNZovMJHFPoxCVvEMp",
  "key17": "2DQipPkaUPw2qxggiieme2TwWdSgLYkn6ABcg5czvXRiPErd96uJjAQdRQ4EaAvRrEedYYaaDnpRFrXjjFgmGDgV",
  "key18": "2Tno4C1Frqe7HDaPVG6CmzsE121qrQBu4zFmyH7NFuZx4D9exQT8SSAvJrfPVuZsfoD9PRLF3Ei9p49N6WfUu8PJ",
  "key19": "4QdTYHrcU1KR8iB28jnkWH1Tv1L1XXzuzkSQD5gTKVgXTsUqjH3yBwzdGcADiFwbhaPEzgm9WeaHkXpV5BVsQwPU",
  "key20": "4qMcc1F9CEdd8cqpfetJhupCTYKxH1KR6NxHpVGVDVjZBLcUaCo4ioGmJJsGDRNpjX4KKH82uJkS1JK8UiwwM3WU",
  "key21": "5zY55PPiRuTvQ8X63wv6TPcGAjUa4G4ddCfUsLy7j9eA5bwkV1USTewa9MuWk2LtcUxrWsQCFCRucm4pSBxWEFYu",
  "key22": "4QSeXM1exkwDs8rQCY2NpNeN5QZ11MkXLhLMoEGuPjbLrkfdnH8SoT3wasvu2o8bo2ZdNMnHcLoU7H7kya8ARYPi",
  "key23": "3yyTpKgdKPbputjthSicgbPwYkuV4pwJ5Jy3jqecu3qvqZvAuo3WDF9mSeWUTJmmk8g74eBP4AHEF2xsNWKTcpb2",
  "key24": "2iKU5a8uXN6kYWRETztW5qKxmKXHPyaDbk2J2VYRvRUq1sD5REdo6vJ6ZcE1z8KzGd5jJy4fCqWT2Bhqj7NWRRMg",
  "key25": "64CM5RWJuPmjnfnpNEevZKtgVzdFuJSZcwBp9dhxwd54sTit9BEKW2GjvjJCPFcXkokfZ2sokgRxbKD6Qo4KkGiM",
  "key26": "5AiS3HgDyCZhD4nRDgQix7kK6jzptLtZQxVbTDgqAHo245zwqd83BQUjp5eHXVMhJJWwxULZCEzJrTnk1qtj8cZn",
  "key27": "124Xkzp4dcAbdpQe4jGLdSLN1m7aAzba5VsfLDmTsVwSidsWcpHh4c5xK65xft2yCcrskC2Fo6JwTZP5QaU4qZbH",
  "key28": "3pmjArDii9dT56BJZuGXiHC9br14c2iuicKosjqFLbwnsHRDWLDFymShVZDmh5vTcBxQdg9jrAT9Xi9cyTW85rz8",
  "key29": "5ng5akZsVnsjh4zZE6ycB6XsLaHevn7siTcbWBhPVj3Fdau1FWbqtS5FQKMTzrnpxA21j7mmwf2j6yFFX1VEozWv",
  "key30": "wDMQpd7oqduQRjPArUGHsiup6MxBnsdtbppUhbeYNbfgTHsYgTkG62z162cDyLxZayw8CKTLF97vXhCeSmHcRWB",
  "key31": "428LsCPcPVep3cRgK843U1LwfVJXpFpDr41ECngQMQ4N92xnzCTervzSkSZEyNx2BMUoDd1fwM3Wx6HqyHo7aB9L",
  "key32": "RgNmtJQUrcTRNZTC64Fqp67nxXWsQjBCV8GXTeUCK6CcdjzHsrPYavYv57w4a4dYxmSw7v4a1CCYq8W46LBZ4pF",
  "key33": "4pAh5DTME4w2o9pfE3RwH5Ej7JqDUuj1n6cLmuYSS7gMJHC9n1XuUgbxbW9GUHY8NYHe1FV8DQJg1kj33iXgM5ud",
  "key34": "5Pz1z39ZVRmYeuGn6zw5nGrEyLne4GbK1XfftQRnQkBCeX33rf9RPBFErY1LvvWFctHYJ64z4W7VRAhWwwYcgfX6",
  "key35": "Mg8rLBE9K2uLTDgSJTUyvjkmnwJEGWMkhtUoeenbRrGY7N662a4jrDnUNpmeE9iCYTB1jMPZn6eM25Y9PhwyeRv",
  "key36": "4FqkhQJYxEKyugDNBFcz1Swd2ENGpGV9EvwHqugF9o872wsSsHFHQPN7pUE1yvYTXXCnsDegm335q4bk6fXhXF3g",
  "key37": "2DvM85S8RfAd5RJSKKdiyyaxdTCkZem3VjFH1sjrFRbg5Ac34jY62UfBqmYDxibbiv8nuPDeUoFouwpB6aBk6QE5",
  "key38": "52njTbWZ9h2iWsEBUfvVAtNzad7LkK4tpjb5UtAZcfCHy3F6iHjauxjgMtTrJqLSk1jPzkAhwZ3c4jLFYZ6ae7pa",
  "key39": "4qzZTTQDE2WbsLHU6KBjKepjMvKRFeX6diFVzyhvGzCBkMp9znbsCaD8bzbraJduceZ11cThs6W68Z2J7HHBuwEx",
  "key40": "5JNXRSF3t5aLSjFBcctvyHRYJmjy6ncyxa1MruJfrTNDQdqYJtKLt5Ziq99vcKwstXfovNT23YDinoEgDKeJvr3d",
  "key41": "uZE5MQPf7v6SLjffNhvpQP4QzfX4X7aA6EhGyvwAKrVieaJTQbJAhuac33CAoz4KyTecRKgU4jg1mruHGvbhYdK",
  "key42": "3tEs3DGskCXwfQSRDcWqiH9WQpxv9JHBPrhchsJPAfgJZTfYsXbQffuP1WnNt3Gv9gYBZ3mcP6Wwc9V9vfnbiY5E",
  "key43": "47zSJ5Q6jhwATk5q5pjrNPE1C8xMnFB5VqJ9396qnuWqncFep3SiVoGLdw4jgz1CJE7vPMejw2ACX9VKYmJ3GStr",
  "key44": "5wiEv5hxPGxki1yi2WbcVyaJ1bcBn9WV1zXmvpSp8TREFNXLDVjji4N4hT5x1XNBReHUDKFVM6enxBYhvm2G4Cy"
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
