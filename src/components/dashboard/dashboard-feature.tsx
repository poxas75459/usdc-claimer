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
    "5B1XB1TYwJKjH2rsCsSLRHYQdbnt4eC1cehCnyqApEAZ9w78srVKffzZSW2unUNucA9ZusZ4axqcdiy6dSFHE64r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wpkLCMHBXneKRQDytsNkRR9Mrjb3eAC9GZzcqnCvMv2xJsaZJwbXSddgtk6n8oPxvcYniNcvpbNzqMunTUrCXgF",
  "key1": "4QJRaWgc5fd33CYJDZ3eyD1xzkPUHfAvFNN1AkhVvUaNgapNNiK3bvrVWfpPyFCxz2efvrd2uRZFeUMUbppHDpQV",
  "key2": "dFvng54xF4DnpkuDjw91zdf1uYtFjTft6NZb5kR4PwSLQSWUze1QdyPddXKZ1eCiqkVLkdLAdkYqMVGQkg5RDuW",
  "key3": "4FdS2PWkLb8FJ81h6Cf1rC5La4jUCSyBYQXvWUeM9EJMZbrgSLED5gszhwkeqgQnD1Zm5xA4KJRuGpsDWjezHkCH",
  "key4": "5F3kwc7ZRNBZ89qXAttBxoeNHUyqnzc5XgrWm9TAtXWx7uM5LbrouAg3YY8DDeGK6kAeuC2aVGe9wSYAkFc9XRFz",
  "key5": "5mZajDrjQc8Do6dx9L8oUrf5pszDJtzAsv4SZwDuKz6SZb4UcvHpstJmP2swvV8KnqUQ3QvH1YpVTk9xda3JNVbA",
  "key6": "2EHhsvhT7rQ9N4X2moqMWHzS4YayvQVUwrCnDzFMT9bwDKsBSAyKgpbsJc9R2ihuSCAqj6xt5Pjsq7D9NHtF1L6S",
  "key7": "2PDceFDMDCKHUFkPn5eXJj7Ck6fuBRfSFoHNFWk6e9mgsbM9mQuk4pc8FDKvDksURJzp2UQqU8VNHUuhPJ45gCHL",
  "key8": "2LaCJE3G2Wtv619k3R2ytg8aB4ywMKYi18WYPSMPQF2ZXpVfHvTbcVNz6Nr7BwunxeZX9xDg3WmidGyEeD3MXPby",
  "key9": "5kgcSaYiFoSEQNqN5aLzxxU1ZMNMmbz7A5LuUmMPepiQrnF8ALYpS3V7RNUBiF532pd4YXh8yEGU12mQ1gegGBzb",
  "key10": "k9APSLVTiFqfEypMNbTCsnLfQymkGjcXWPcTpUHTPu56VKBM9wJg9TrgxXvCeWeiP9aETrpwEnmjTW8QHYAX1aY",
  "key11": "3RHt2STWSUYdBdT37sC8xjHNGxxSE6ZhK5zg9w87mARB5SLCenRqfpHRwGC35yB5LiGMc7q6D2KffXEYNbS1c4Gr",
  "key12": "4SagsWnPu5z6J3tqp9hN6WBJR3Z789zn7oVyvYqdeoiMJbqxTWo7MniQQkxtbrUpCjkyrbi8Thi3ugioeVfK7LJc",
  "key13": "5AijKdCLsK8hBrFUEFt2PV5yAaSCrXMsuPrqdUGDuqgjKZhZnWuGwKAz3jCprUnc6XFjstfKH3Dv9U36VnSUuuHU",
  "key14": "2DQC3EhqnVMHcfAXPpdbLHFoe4aQj6s21iuEkyawXUi8QgFrRpXrimVKkKzvCBuM78jf673S2ezJAgAmJgmWT7Za",
  "key15": "3stDFvwLPk7Ndj4dZ6pfFH1kYC2WHz6JgCJf2o4H4rJWCvYFx5kBiCjfopYhKWuRkH6chSPTSPsmBhwKNhcMrJWF",
  "key16": "5EAtJf3fZ8KWXBfitJRAWboCezL6u7w2Gosdz2entN9P6SJwjKztuKFXPCz2EmLr6NorZ9EVmWqnJ3YvSQEiFXp3",
  "key17": "5ZKtMk6BeUbMMrWYHoANJrxPrDWGnGq1edma76eXeNP4oHgE9wQgUSDGQX9MHjo2TFNMveTC2CcBbbvN4w7crULt",
  "key18": "4LWBcvhTnRi7wioaS81g6QqDqqxmNQpYphpPXH2Y42cogTesyrBSRbiefnDNoea3z8RQvECxTSrDgcaQ3YEguPqC",
  "key19": "5xapaSxZpnMdYhaa2KVweqnfG7EgPxZjYZQRt9tdEFa4snHKwDVjBSJhwEcfT5eEPQzohru8ENjVEyuJ811J1F2t",
  "key20": "5UBgwVnGHMK5y1u9iaCPNjc7wzCrJvEu5oy1NJrkeSp466rSURagTziUC6fox6VX2U2wDri1nieYctHkNjzRZsUB",
  "key21": "27hJHnJtd2yR95mvhXUsL39WCEdkPyVAsC8yFJ5jPUdLzhFM4bbzAnf72qoJieyxVShTRQedPTsjTtyMMCfVSGSs",
  "key22": "65nr2de15Y5MPTyinYCUEvA89w6ZxzVgCtbWTS5pAHDpxzDRqwarhETp8ZjNnryhbaUDFR7S6y5CceaiT3cfgmSu",
  "key23": "5pAUksfCrteZSJJYuP44doyNjARt86kWBFzXDS9Woe1gVAbjd8HT6WDWrfXZCXoqM2z2p6UDfVrus5cDRC2itFya",
  "key24": "5mBy6Vusu24K493Pi6UrkMMg78GphabSLVCrYR17ZnDpGpNZPimXtgiBo152MDJ9gyMiG1t3RPpboTcfRpV8WdA5",
  "key25": "5smJD2Z6xnE7fThAbBVRNtwm2L5YfJeZXWb4t9ZGnWmRAich4oCJdJE9YMJEqab3eKdMZHcaYBDt7Ek5v6RH1VyY",
  "key26": "LXyXUXZ2XHUdxcq7NXj3AEV9cXg3PVQYjwkyyu9YS2tcSpxVuP412sQWzF7Q2i3MG7McujUHTryA2kgR6BaPM7Y"
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
