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
    "2c3o9NbKMWfsFQzi6S8QBeJNkGdznsRXyjf17t2W1dAhasuGVvVWJrQ8hjrqMgRUxjWg8t3Apeufe9k3DLc2VU86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39ZAVKhq8tDLUAZA3oP1SKVwuATpaLzrMwhWEH25RKbKztdPag13UBVfwfGUiNhppm6FYBU4E5J9FMe48WvauLDW",
  "key1": "hqaiQjVocnSfb2TZGBwtNK1bZQBcTobgwEbkftAxyeHT9GBvJ4wyheynzBg3KmbQrj3v12byY1d44Za6imZLcG5",
  "key2": "4Fqp79Kc7JdCuP1cc4yH1DBbj4pNeBvL5SvdkBDZEuzSHKpbovaaUCLyZwDtpY4QFAZUwZ6ypgrW6Fa1TVYraVPK",
  "key3": "QWLCtRcoPxUbUvjfXZ7jJpB37UEpPkT68KRVM8Pf2egxi1b5kDRwftsUwZ8Pckw5oDyxKkJNBA4sxENk6yd14yt",
  "key4": "4wRMfYAF5Tcv5MqbdqHkHoZamKkRp7vKzpenkanL8GCoQD5UJPVPbZtwXJ74gaSZ6VVGizAVUpB4DYfufu9mhGw9",
  "key5": "269LRgLYgWwn8w8ZC9ePvWNiCLk92mPcKBhQjp5BWH2bzrwyHcadekQYacdz4gpSGpN7jWUQmQihGkjoWmXz9fQg",
  "key6": "3sAcm1gEGSPZPJ9mPkVCehVV2N8Wzno96bHh1FTdR81w8ZfQxMD7HJzyV4d5oBzx2PgGiTLL5438fW9JPxrYBYWJ",
  "key7": "4UAbEZEhtzHtMBy9UhWVrRRpG7aTcKZ21eMxLFe5Ff58qQbUpAsEej3skd1yrWTGyF11iK6431gL9RffbaFijM8B",
  "key8": "3QsqVfTUdcvW7Cyym8j7pF6SZ5zkrNV9qguLFiC3ZNTtxkme73e2UU9aYWYdZbNiWcqW67QVf7c5ZcrxK9E61Ter",
  "key9": "HwaQPuZfrgz9r2gYNwe1VkQDb2cuykVuUbDMxMPCKvmuy6XGHTbuB2Fxo8a6WrRsGCF54ovnXz7YAwBfGVsYbNB",
  "key10": "3hW7uK92sXWVXwdZvA4VdTL6pjQgdSaGp2aEkxR2UGemoh4aXUxGdhL1PCCitjXE4aogMCQ1GemmcGf5ewBreoco",
  "key11": "23MYYrad48B7MxSzVuShd1BhtmxYUVowN9AXnnqsb4Wv7bKioVjw4MCmMRduiAgT4JRGj1i51p8f8R7RBGLjZVD4",
  "key12": "3v69vMfqu3uBNq7RAokjVPve5iR9wq2rTZ4Q7PAYq6jkj82rBXUM1pXMEDtuoeRuSNtYzaTSZuucB2LxyPyHC3S3",
  "key13": "32UnhtH4BQuHzD2nTBm16xg2qDx7z22Fh8gWVRy2RRuHCLyuokse3wbA2DTQouxkcjLpUUgefpx6p2PWGGhMRAKn",
  "key14": "4QKCndywLGHqpFYoviLXZucXu1z7JrzYNUm7ZLUsWgmHUn6yNPnDroQjUx8BPCijmPq5hGti8EKi7KSAovz1Kyxm",
  "key15": "Ki8EUCWN8nr9p7ErvWPTL1SAuXD6z76xv1t8TV4Z6NiFbNsSzJP9yTgMcw1yK4scWqVBRi2VgmJqD5VKG7HhJc9",
  "key16": "4rHsXgVH3iCFfb3LQzXNUo4Ud5vRqDENiyWbCGXf9yET8f3kZq2Qna7M6FfmFUe5o18pWWJMHFHbp9pjn2bcoEWZ",
  "key17": "2FWTEDVi6wgPNbZuM35zqu8YVJ1haRyCYT6YhYJ5e3LRXsufJQEtVipcwEvi21kq1R8VyZqTqVN9baV9hCBEPZZs",
  "key18": "2nfW9rtN6uDGZJM2KzbERxrbxfVNnTkhvwT6qorybFfVQrpZKmJTNbZvo3ohEvjHw5ZxpyBULKagEPWiNKogQdRB",
  "key19": "2owajRr8Xz8BKAykMYo3widEaBXBTHKmFJWkkom6NDi6rsALgWDiPTKPs7zL4JfJhibC6Lp82amW41YySsTvbdAE",
  "key20": "2J4TwuM6jFSZRdK9sdUN6fgvXSRtVo46uYFzpm5Y6sGYbVWHVu6pr1i6AVzCmbd2gBoi8yjqnA7fCc9v4pjcMYek",
  "key21": "2nxiXauGgkrJLQoEoxgCoteQzbPdwzCFHeKAPCTSfU6bBsjWpyAtvqeGH3x1wXvArVtba4Dac1b6v7xtwFzGuQTR",
  "key22": "2a7pYf8QVLsoF6B6jUf89zcQ2wC93rNGwjxGfRNMoWaFAizmhtPmbDES1ahrELM5PPFSztf2fD4aeag25LpRo5zm",
  "key23": "5SpB4SceknjqJzxJx9TpVMXE3gtuZM4n6mFCB2YfYxgG67gaZLr9XPB65KhS1CqWJzAo7eUZLjyKf8Y9K9Ar9hZW",
  "key24": "gkatvj8QJPsDbrXy5bsKX5RwJYGjvdc5Rngh8fsJ5GkCKzvRx3gS5FfzDzRYySd8CPQJVcv29YntDXcB3Bo3CyA",
  "key25": "3j5P2JcvyWpGT1f48xFU5iFdD2R22TNbqaSjdSRTMAZCnLNwMd2XG8JunZ28LYA5mTQC7cskauGr6LrrVfo9436N"
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
