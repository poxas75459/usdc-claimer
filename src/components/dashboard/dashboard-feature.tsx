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
    "47ZrpA1iixLPzVEVvuxq6wZDYo3AaYDj7ourKjDTcmV5ZP4EMYRXMoMF5ELQWp5JvcG9hqnqSdTMfNCW5Zxj8RG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tmhmxaVWNrDVhxDw8n2bQdssjNG3ugp2ZwX8f5bYtAUtxN1HDYncvVy3TNoLVkbAEEsWZQr2zE9zeRDfBUcSZ13",
  "key1": "2UwfA2mUXE4M9q9Bje1ipyfPerCXdtENXWJM8GEhrLGrcTd1JW1xDwbDX9PEMWSMbVJhyQ2xU5drDYANhVC3Jhk5",
  "key2": "3akPwu2QdRdadPNpZJe6bKJbeJAX2PzEkLheA5BqV8bH1AJJ1odu3EzVGaQyjsPasqp5NHV9oXorAiZ6p5ixEWt5",
  "key3": "5cD5wwRbG5k1MwCnNYgQaFSsPzob2jB77vLNNJvJwujsgFBU3cog6zVuCeB7sNwHJMVwH7BLA9S1C2KG1NKRDCfX",
  "key4": "44d1zN12Sniy4UjCsnc1NAfAxyHducBMDwhANLXuhsvGbAPNjUmWk9qo9pdnDoMR9ZWrqdzrAFKodisPK71MsUDC",
  "key5": "4HhW9cL93yix1PgrWXDcqbQSiMcAkCK8PXavZUKTu3DX8BhHyywe8sHPcLwo4ndpE4xNYMGmVUysGRQMvVU7yU8Z",
  "key6": "29hXmCcxQ91JxFV874VPz3YS8VmBvzuds59R6cmztYE4ik63PHxCcfch8hXQ4T9YzpDpCocVrNr23qB2TTgqqQVF",
  "key7": "2kgsWs6Z8j4VbveJvoerm1Xy5ELHTtcZpfLdb9evT1k5evjH5Lofsk9vXV2HoxGnzCM4iCoTFs4a7RjMCT7LDMRZ",
  "key8": "34UX1NfSPQaEHHtoGqErrc76L2X3cNczzCtvri4KvGVsQmrsWkFeY2U94oz3Wo9ev42U1tvav6JphuGwbYvKCX2w",
  "key9": "5qsbVCc6zRnayGJMBFdwuUfVKCZxp7v3NQvNn697oLr458W4VaqZxjsQhjcB2u4RmucGNj1Qim9i16aqbV1tpjde",
  "key10": "5YQMZHcYRarRPGGt7vVoyCUbmjEwhSfu2fr74LhM1AdUax8Jr91wThw3sQqhdKeCFBq3uU9CCZ8ThE5ThJCKHqru",
  "key11": "4jA3oVKh32nZKw7xUj9BfD5ejGk9ymVXVddL3ixNPLpTfFdLPJZ58pkZ7YnnfefXJTJqivTe4oHs4FxVz4hFNPBi",
  "key12": "XGwa4T57gAypYYKwYgzRyv5sy6mwhjBRzAifZYATE4xAPFbMsd3cfd25Ketzsmof9tcNfEH4HkuB2PDS6JeS9AG",
  "key13": "4dv43rcHTLZWeWedr3PNeRAH5s5GChgJbaFFvL3jT3ibz67CdvhRVdgi1ogeAbqPfMGibZNZFb9aKdPf3H37bn69",
  "key14": "26J5hcqd1Uh6cuz9FeRxZy3URjPrZTMDSwxAKtaGncNE3y8GcuAdf2r8sRQURPwJjaKxBtujc8SSSgwkQv9wDKWT",
  "key15": "42REghQRcFaE4bC2MRMQjvJgbGFbRWgxwUBqobPMzC1YS7oKRyUUdYTHBwj5WzEhKSxDcHXnGbHJyGH67URej62J",
  "key16": "3MZSxpotBNjaejXnJzgUY2i4Bb578y2my3gAf1KK1jMyqXaviDCc4opnTMCWojAuNQsDTLWt9kTWefWKWSbtZvAZ",
  "key17": "wGCWLm1rMu147YDuDWbQn8T2zQdtgGHb2pVUgqv6ZiaBmYuZ3nVJn9DdDz6MMm4qb7uVSS1Vi4wGJVojGznYhX4",
  "key18": "4USHKMMThiUo6GeUzVuAykJ31Ta7ndwSuzVrnPV8Fsi8rQow6cZZLBdDic4X8F4sWtCmhSmyUVGf5HyVJrKLf7HE",
  "key19": "5NBbRgk1XMB4p58en7gxu2UT7MuRWpWbYgmtqg3fw965YVmd697aoT5HxZ1hnqaqiDNCpiphqmEUGvjEDRc318wb",
  "key20": "46jmhRPHuaMqXDGx5WdYxMPqcoccJe49jPGMkiPnjkNpMZjCXsGegkd5FweC27HPEbSrZTd1JTwyC1fzyhMHD3RG",
  "key21": "5BQWWePLUtULFB4gVnFoTN7vXX3Qmhjs9EjHqxG8EckfrhgFojwD2q5dZc2y3dTD5PQjgGegUSe8VWvzKw64iBG8",
  "key22": "377R4AYFFM3TTdVU1z3MbsBFJecTWnHpcATG23t4Hk4Ssmd4C2Sbm6hpmmdTdVofQsahTKWxevjghgK8XAcJJGoy",
  "key23": "31BJn4YE4LbMUMWTkWRouAaga9tcM1xRhzVP7YvrhhmEz318grhbxoKpCsApCzSBtsg6DcrukoPZ1wjJBTfZwYhp",
  "key24": "2zYNTSsD8pMCo7rCgpe4432xErzRuMXbe5BWeN6X2BvpqtBJ6zJr2ZAGiCsuvmAKuemGvdkzG26oc75uQdjGjfi4",
  "key25": "33UJDa5n9z6Vd3VWKdDJeGAwapzZVuwdx5aZqndB6tiuT7vztz1rv6utKifAcbbHooWbbMNXHZi3DunZ2URkh347",
  "key26": "3qXojBFgH8SjfDRHFucaZd76mbRqRMmafAiAatZqjyMYLBdoQCgDRBayMRfj6LyD71fxY9Xoe1eGJeV9g3RutzRh",
  "key27": "2ktY8tLuTtnA2udMfDk4y2A4H3HT9pbMMUjxSVKA4GXJpFDEqyESj1DRUsHnuNZeq4BRvGsribYtJwKioTra8SY8",
  "key28": "4GZ83CB6XXyhYnRGMQm8R1FEbGaDyqkkgjML9E6j9BkoF1MNuzJPYn6CGPygzSBww43PtDujstNKAPRxiHpdDDiL",
  "key29": "3zWFeYS9mQjQy2G2ox31EZ9eJLNnH3f7NreXHpytkHYwGPbCooT3zZvcULn3YX4JarBbQeK4aag1adLnvTwbnRN",
  "key30": "3G4Pa22PG1ngfSob5tjq29N4ukqkwftUkunXwCE2Ciu5rZL3pHSLfXBRjirPSfbPVzoGrGjjd2oFoq87KpUWr8A4",
  "key31": "3PvsNsW13o6hJXCEMr9hnJCEJeDY8L8Pijdr9d7VnCBhmRLn5Pgeu8ksHjkBTk4yk1vbUSZRUuR4TkjK9WXuREDH",
  "key32": "47DRQ8EbMyTjoQdJ9rurDoqeAsWoVEpUsyTWWVauT9QfjVkAyBUXd6LPs6qxbPdXH4fbxRG2dyMmQBQsNHAvAdNJ",
  "key33": "5Yb74DbdJ9o4rtWkHCU574EtPfwZxBYTYH1bVezrBfzr51EGnYVqBfPfuQWtUF7Cyp6v89wS2NpNnMGJwQUMFwMH",
  "key34": "38ZrFBeMp85nstmWCyGfKWVLr17aizEHcG6dJ6c1gaLpRx6FyTghu4SneD73D5hYUxuXSJ37DM856EE645JyCAZi",
  "key35": "3u7Z4mm9YfaEKkdzf3EPQPQCyPzf5giFwP4knSGb2M35D1tuVtyHvVYDaVGv9yqd1ZotuQCn45nR3dUF8B2RSoJk",
  "key36": "5uxrAB59cSND2i1MGA7hpoBcnj2JnRdXbNPfAuhGANAD4tb8C3zZDqb7g6jPCduJTpjWdQ6uj2gjZuzF221FU2hJ",
  "key37": "33qhDTMQWiNAkKbj46WDvEtyhZyMgwkBhtnS88pcpQrafX4T3SznnjjD8nTPw8qEH9P7d74UMkPeEvWF3v75wknB",
  "key38": "5N83xD5D11fo4t8bEYcVyPc5cwBuQUxyLhzn9izQsyrsnqHCu8BC1gnW7NCA3BPFF5kuXxmbNNEQEz3wjhKoHxwW",
  "key39": "43wKzxk4KZCsqCWgKPwe34TbJjR25kaEyoE5VLMx181ZEbLFzK395GFi3aSCY7qkZD8YmrducQqeQMxQ46QtShbU",
  "key40": "2AuZwV2p6H58aB9p7go5Pa3fFeUAHvKG72ctUpGSvZiqmZgEzqNSWrNjb5yChLBMfVnRsKq9Ydm2qrTd8WZZJQCH",
  "key41": "fMh7v2S59ASAEoUAkMaze6kktNWmHs3kemmf49VfRkuzeZ2AQwd47fdwVMyiyMQ6zNykyiY9C4dEWK5nGKjFeoH",
  "key42": "3PHHnYScgT8SqJg7xzdas2CFrTF4ckP1MqFdt9TtSC2wpi6ebmn2dkq7EJRBbbm4X2kHqktyGgfcZUyPYGJqBGYc",
  "key43": "39qJe92Ag8F6MQNDdM12ckoS42Q7hWgBdrkmFv6CtCnRtbLonwJYUMu6GRVAJuhjsgcKCoiyJMSuw6auYsY63A4D"
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
