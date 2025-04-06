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
    "S5EU1AJ5aZ7byWQi16WHtB7ZivSqKysjVGwzwLEKQcy1f2XnHkmg5o4iXLu5f9gJ7tGfrDkb7Rsd8Eu8SczfThk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ksqvftnAhE3XsbKvkMT2jTSGaZC18YPMzFEpsk6avqH1gvr3YSV9718KpRzgarMYG6dnDgiyUKWFjhugy8QDfRL",
  "key1": "4ZfrNMvzRnbGujMHB6Nyy2bptVMasVGutuyy6vpEsNhc3DnLqysRLdUs8JPMj9kbRME4pyzhRW6HdD3oatSShzXC",
  "key2": "34x7u1sui2GVh4hFnLrWrK1KWyfVYqQJi14Xh7rTRFd6KazkrmnvDjbvWri84phid44EBXSNWK8S7btKmMMdQ58i",
  "key3": "5oedWHsMRpZ1Pz5uXm1xUYMBJ3XbpZLTKRutDTqkH5zjxJz7N1j57wqUYKjpCYaY4SRtPW1q4DYWjs23XfjAgCX2",
  "key4": "sGeb3sSh8dpg6z3kuZQ2y27MiWgRP59S8TZnavCYBeUTkM3JW5a2wqs6RUPZm6tWTZmxY4QoHqaaydjiiCK5kKH",
  "key5": "2zFwGLwFsrTBzZFaSkdhGcp614RbctqwyvwTirVnCBLMicHEbWq9zFP8x5q2YcqZ8squfFb29H1rmqyTDJei1EzB",
  "key6": "5NSwKwkjEa1n8Yk9eriofBkepYS2sUuqsrDkGozwtjyMeHKw916HsNBiDQnaMMBHRggp2kSTodY9vz4yaaoN8MmZ",
  "key7": "2Ep9vvs2tb5UbNksbEHEftoVdgusmRTLfRUPhKma1teiiwQS7bkBVUe62ADnpRmzAku1i5zh6tSZJEdRmUytcxdH",
  "key8": "2yXBoiN6SK8UL2gc5MkE11cAAkekjaYJbmMwF7sToKMKeEPPH1hEwzD5V3UNyGVtw1sSpEi7my3Wg5WEPd2toSS2",
  "key9": "3CkNi8GidYXeM2sBp7PVQXngnzNqF7rD3NbMCYEUViikDWqGiuTWKtifVeAev2n6Hm7J83iucRTZcANaXCKrQmqb",
  "key10": "5VLbxKFVZMV1vGf4EFh69Mx1iqr81tcruNsfAmvmE3DaLfEhQYWhNsyPhbE62z4nFfzE64nFf3jMmZVnPQgmarwL",
  "key11": "5Yc635XYP7Sxh1mvPMnswnJwPu9zZH4Zbc1dTT7xSDmfy2qYKTkL1VcbaCEZGXMhSs6keGSHjpCB9gUMsAsW1YcU",
  "key12": "sG6SMayrvEyZTARYu6NKG7dsxiwPTCxjhB4Vi8CqVXMzcFV7Rd4pqnLWSZkXNBtw8vYDyUBaRa4Du15N9Q6osBR",
  "key13": "rep1c9iD6gtgohYDPLSDZYBikVRp6WgAYrcqrwG6NaH3NDPLJLKmMG2wLFW7qbCHP7hiGyZwjmjbJp8RtfNpHmW",
  "key14": "3ioKCn9KteAEM6aR5sPtyii3heaZSXebSbsHbnYhsHizvVS3FzXBA9mZ6zGMWS3HzdJPxuJJDmTBVsTtTeEd6kae",
  "key15": "3qCQ5jC895xTpzG3mxxmbA1AziqMjDBWwstCd7TeH73VAhUXd95oXz3VvGQpr5gnMK5y6QiECEaDfMZCtVYyZTXj",
  "key16": "2fRHiQXMeTGZcY2iXvs7xP3mpuy4NaYmRBJWTY5EvAJCEPtY7heWejTue3CEu24fu6d1MFYbckoGuckDcQ7993Fw",
  "key17": "2QWfyRYJ9VxByc5zL1KwbAnuN7ukgSFzacVkGp4KRGm9b8kYSkQJC8zZvemvMsnsjKqax8UCjRmfH7roPUrEzpjC",
  "key18": "4tccy3ufovKx3ozm8NRXojvZMTj53gqWxm9BpAd2uL1CBrbG5SNhwnb7FWZncKoEpwLdt1MHEye8CRckywsb2U51",
  "key19": "4rkbHM8E1vfGKG9W9fiiHJda6QMq2xugF1BEsJJ8ZDFaESUzVx1WqYRynHWfxvc6rtKkix8vX8RX4Js5fndPCx36",
  "key20": "3MHmj6tcLfvTz2aZvW9CuCiRs5bDTEkYL2k3XC7dderAvxPnK3osGXnyXG4LKayQ4otcV6ePfZo5jcqctwdU9ixk",
  "key21": "3QKh1Ku9pQDsZQTBHveToS5Mfih5TXFyYcKMaNbjLLRJEPuNG3rZn86kg9NKBt9bXFTFuFG8qvCDMCMymEtxDKRw",
  "key22": "4P72ZQMZ8oDr9sRvucptSVLbG8S3iwgwwse5JXcvNcTXwC3tRxW93koYuFqxMWzZm9AaBi5WMLQdztq2QTUTg2Kd",
  "key23": "4oPaGqJusEEBViaFQTK7bHUjg26CuSTPWMa68Nb9DSzuonZsr3kfevXqYKt21ET84PyD5EoGAyiMevpZcDWi4v9W",
  "key24": "m9MomTQWtNDREAk28rckPLgUEgATbdpxEQPREkqf5eFynDuJ3Q481RX34roHzyGAh4qtq7TtYSnTdLfJ6vKKgC8",
  "key25": "5DyadpBn8kZk25eadQNTGUBY6chHQ3JXFjNs9ehFV2DxoJBgWUTtbwYJWwFbPz4tjLKkEQZNPqKdwURwyszoFRmu",
  "key26": "Ce5XP7bYfXRgwjJqhFGMCrbSt7aZ5W7FG4fLLBPKgTnjzPfLjvua77qbwVmE9HUK3qUbSXfXFKCyR2DpGdUyCHW",
  "key27": "3Kj5FizDr9EVpfnYCuaTw2bbCALhH4WPkimiLvzcsSedXeedNWUktLX3wwi78eNKDYqtcZXVdXYLs6T6qebnWE2R",
  "key28": "NbXdKkrAJGeNKxcnJeZEPoYhhovGrDbcKNgiqXK1wSicwBhBMPoBWQzmhcukEUaq1BokmVFHW8kXP9nYmPgJyJX",
  "key29": "4JmNTnndt9aXgJ2XKnvZjumWPbFPqQGgLCbNavNB6VHqRbWAD4vuxxdZMMPEQBGEyvj5XKuCthzzjnq4G5daubiX",
  "key30": "381VNit425VtAnv9Rv39BT3Dg9d8SrkK8STwDS5sgWk3m8f3FNkdGK2p194qosnq9XKkiHjAwoka6Gaz8qnC11tF",
  "key31": "4sJJoKCqJi5RPStEJjHNPs9398jUX1mZGkvphTARf9ZbTNpK63VN7PJeC49FWhk6NWsDBLb53pSM2RZgkyYxTMhR",
  "key32": "9vRHdZPdthjiDKrVXRSJGeRJsSyDZLgsQRo7DGeLR4VBwZEaGwa2z7PEghLnpGJak2BxcwZtKKaaPwWT7qaaMhh",
  "key33": "5zuXddNbUVbzSPjGY6sWNjgAvP261MoxbhvmuhqcfuxfkwhrC2z43JMvorx69yM31Y9hJPcHMbeDWwNaXQpSuWA4",
  "key34": "2Hw6PRA5oXEyNbTdtJhefXWeoCxv2tXtj2JHwTuRYbjEGcEmut3Xv9nvmmytd9x8sfcC3Ry8We2jN7uVrQ9bGabf",
  "key35": "4aGmeQtmQw9HEYPn2sqVmGJsvSJUQ9RQn2nXNxdPniVrmPp4AjgaMDCPShwi155V824Wv5xRMWrHnEQE5eYZfe4A",
  "key36": "rWzAm7iedZhQg6Rey7pS26KmUeABoxbb6vfpWpmAzbFEGY8LTHDE7LrGCnmyqsxEK2tCfhY8eDsP5BX2Emob14Y",
  "key37": "41VhEirm8QnFHAGacugLrviU3GQxSVosBv4fFhBBTHM4FdxC1WmpEnDnc25xm9sm3yvgoRRDgCzpzNufdxbVSYvL",
  "key38": "5B2Ac8Zydpw62FwZrt5sgynZ7f4pie7gaskWViw5J9mCVCQtnP92HZpu3GUkQLGVZdA54hUeRBwxKQXr7FWjim6P",
  "key39": "52XPZLuAjPTNEm2D9ALP8CaEzedYnrK5T4GMnb6XzeCWimukC19nrHZTBXFBDSm7TyMovivvKJkZXmyxMEHcnkt4",
  "key40": "4YyJiF4B6xNzp2y9ptRk6FRQwPbgtn9YoShpWw7JJXqgdUKVEdoN5DbSBEJnzVUkXqSgNvsqf1a7YovrhNTPcg2P",
  "key41": "66RVeEQRNewNaXKfV3YexipqwbjzoPC1dQgNWZadPg7pxTHrwDbsJ4uGr9YrA9mC1ztLFnhnChBJBkDydyTAKKex",
  "key42": "ZuL7EhVtHn6YD2BC2wJscY9jZB9Vf7NRqDYxox6oZqfRy6Pk8f5mkae1mQL45UTMTYamya1QPukgUnDoMo4z54o",
  "key43": "4ouVA3KAayhWfJ1pCJkt4RoSuTLP5gMsMhH6mqPAFyJk1JKfW9p9LmF9SeK5nVvSp8rmASfNBJ2j7QhHP6bRdNTT"
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
