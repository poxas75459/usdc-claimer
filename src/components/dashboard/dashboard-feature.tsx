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
    "4JouxZFFynRMHQ7o9z7GUZwqg2pCyVMGBCPkM2PxwWWcA4HSo8NdSvwPwLBSa5bH9raei125fVc63AKn6E1R5xX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QLgSdKCttCWTRUh1AVYQQdH5wnHLyoTGiDMSDByVKzbAMpmFiaKUPgacq5yzCQbyU28V5AavrqBUUo8DsqxdZNA",
  "key1": "2ntUVSnbaYY7tLoirUqpM8sM1VFRdDiVUGrZLMEt3E8JYzXtNqvgZ7zjCVXKSrWRgcRHxi7C4XbEq7coojaRMotL",
  "key2": "4ZZf4vhotmqjjEJ16WiwhR4JtjJKfWfuvG3d9TAdKosrT3fba33y8XfhMhnqpzPuCFK3MJKMaB42Ly9dT2hAoaEr",
  "key3": "gmBMRpsBNew52RR9qAak6buNAgas1ycmETuRQ3BqqECernoM46fvkW7Uqm1rfKAGNt1nFUmdCLvEm7MS75rHvNP",
  "key4": "3LxUysdzKHNgCwf25BPd8m4x1r5vZMZdvLHTpXQooQ5WDTuj4NUQyeYUA7aaUjYfJybHjLNtrAkXcYFHfPgRDhSk",
  "key5": "2RQG7VfQEurGhf6WXUgZyHfAJUwwLwXm1kUX9okMJf67gJW1BSNy5RfnHNU7SGLkAWKrw5DFcKCBLAsmNzdNPK2J",
  "key6": "5tJHwz8A39L1ETufr1L6zsmbdRZxHRdi147TYANQfYhvh7KW8NJuXUURLJyQfLZWNriPgVfY1iMmaMuHu6KcshPF",
  "key7": "4Kjt4FY8LXc3djsMELw3wPmG8QKWSaAMopqQyEFmroMDFTKxiFuGTafJ5a2p5oJp5uqkGCf9m6VxukdP9QmKsZWP",
  "key8": "63iq4Y1PPhw4Fa3nQzgXBpcFBRcCg269XLB2VycF1svrS1a5BPHQT5n4YmEMeGAFYsf9gz5JvSNX5mUcjcDfvF7C",
  "key9": "3TWBhJgao5GR2L1xkcyhCjZRMuPxsDWXEzb972SdkbV5fLDxhtD9uD7BmFiBBuZ3uYJEhk6CAZ4wVc4fwjXQHUWi",
  "key10": "4nRAxuK5iDtRzZFPfUk3bVYR7rJBysGhMfsztzWmukFM66tG1tapBT4nz6guCqhZJEH8fy29f1ysgUGgrDrwTzeS",
  "key11": "43KsrYbnGFgDMznNTMKej9TobSdaQsgg2q8SYKrkPfjB6or7tBJcH8GJEuQdinf9DDcvqV37FsHis5UKc84mYohp",
  "key12": "3ucgMZJFFRxs77oTF4PhauBEWT5zQgbVvoNHRvgEUy72nSFKtTiwHm8CrfcrRQCvot2R9gfqZkgwRSADZDqJ1GHG",
  "key13": "3e6GWu1j8zNtZKRstNp77kPQ2F8wihqRHBspcdWPiWz9uNvPkRVNue2ip6VQqkENHxJZAKXoW8H38cpKUbH4mvuP",
  "key14": "2MFuJ7TPU8hPEouRJSSUigUAGU89RMNw6WndbGaCYMyMujk8N7JLEYsKMUMsxQSMjPP7GAAQKc8w1NQSdNYeUAXG",
  "key15": "3P4yJEJHSc6scU38Bj4d3GREK6CS1nEerwP4LnpYJ45ZJNAfk1WjfEWrTsNBEUCUoFGxik4YfJgKUmFNVP2rQvdc",
  "key16": "2URAUC2ryZecdDFHea6eo76p16DLQmU4q2SpD3Xq7szF8tLAh5LTnj4koTphLgRQ9F1MtercK6YfjeVh8QLmNgVu",
  "key17": "5uD8muUnHr6d84qbKAhvJ3KxaaxpWuztDPMFDfFDWUWG1Nc1C7WM3yZJCXT9fWAtQeJftLZt7VJDfsCzis4Gz3fY",
  "key18": "5H3ysquxQSwMX11ooEGz7boGf5Ee1HovBvBpmpxSJhNwdTy5ENivf74ET4w9GadNZMq9YQDjbQ7XqWskK7NMVnT8",
  "key19": "5aCmXavDvj5FHW4Aug3585K9HKrzCaDGMiULh89ZueNvFxRhRnPNoknxPzznqSmfo2GrZRTWixtfx5VtM77jYGEa",
  "key20": "XacXrXrGWafu6uVftheDmaAExBPKidxw5ukbp2BjyLA6pukWhgkR9NKYPjoALnH7P7wcQd7DSBpim1W7m177qYJ",
  "key21": "e8JqnqpJFA6Tgm8e1ieUq3GmyJhGSrvHAtc7kqA1cRKKqUUGYgRnh9seg19U3FG5oqksXVBz6gGCM5DWDGDjn7b",
  "key22": "2xTrcG3YJzzEmEiqmB6R7cZseo9yCSvHeWk5xYuZbUEvEGp9e2ZyC2bUJcsdR1via9QVNPETGZWnBxvypbHyohXQ",
  "key23": "i2SK1Wn8dHunmVnEUUiqo8w17FkuHKYtDwrXiRPc3n99eMYpFzxT9vkksiaHWVvTm7QS9eTJtC6JvyPeEdsUVdz",
  "key24": "2D1C1tq1W3433LtnRPuY6XHR5DNfBBZjXP3vs6LDpRvENVvey4uiUEJtL8egFbrNEQ5u6ea1q3Vp7qbHwTdyGx2L",
  "key25": "AuNwjSS994QtXNs9WMwjnRwYmDawepRqe123tetMszP1o7t4Rc4nHhWv8PdTg3EyvczxBeNdK6ndJrMR7GAymxP",
  "key26": "5aAjuvFHnnW9pBBNvk9F96nTkLhgpiAtSgj7kAmzqDAf5fMuvhz9uVqoMUxfZ4577hRHCwu88eiuCDZ6qKSb2ep8",
  "key27": "3zUG3g751ZE9pZPkq5if16HtmrjGngbP2Wz12MnpyvsiNTXv5JQufPVTXjeps774xJKVFk46oBFBt2o8aTi65xwc",
  "key28": "5gaT3QGUFQzyt2MEH6U8V5D4RmJMcgPMKFsMBeJoDT5tToKbmkHzvioMBfFFHVpLRXJwtAfoXBYdSkKvTT7VjTo5"
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
