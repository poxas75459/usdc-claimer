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
    "2Xdo7HyiMTcg6FhK78PtgLCMK6EFz7ZLV5hwVRgSgFzgeNoyymZro8rTPpeFCH8z1TLRuDvocCMQkKMv9UZN5jM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49gkRpLkXeqA1GrwRFbPKArLEKqUbMVhdRSvZ3LFDqX7Y2DArZkexnrHPCibdpkpJZvwZbgyJUzBvABU2J9iWxm7",
  "key1": "275PXWYRhYEc6cD8xjaxZ3MNNU2kWVMbjgypEgd2h8Xv9hVRJJQytAoJyRCvpywuND98egzoakm72DL1yn8TUsmz",
  "key2": "2okEzMbvVzsFKdBjYBqMMqH2XKor3quFqTMHMnyvuQtrfPneJ4FDSaiZezYFuQEgYpgeXkta8qdNubQdJPEKsYcy",
  "key3": "5N9x27FmoUB5D29E46E6DfAfMoPNWXK5T8G2Tw7yY7hzbhzzwQddixUN8zoyjs8p6TiCDmLrZszPDo6RgT9oyFHA",
  "key4": "ZyBAqfkUQK9dMy3GLgemYV6TUVqaGXB56rAVLNE9yUdfy6DzEdzRFZNE2jkRB42nHZ8L2ss9KJa8rYSt5Zv7Q6C",
  "key5": "2crRU6fJnrhN5quYvJnyfjw2ionu3HJbA3Q7ExW151AmWTbwuFLWS3UPRPUGnpMcNHnCtXitb2S4Qi6kL3Pt71Le",
  "key6": "4azHNDKC1UbVUtrSrtMb289JFHTrRamFLKJ44ZkSc43zLGUGfLLKe4xX5szQ5ZhVpoDGsXHdeq1yQQ4H18c3a8Xu",
  "key7": "f8HFSbewYE2DWXFekXj8cSbSVsME94hAYscU8m45j6NHi4rG7175m1EbpYdXRdio9cfrbiTBTa4NMq1ybuBBn5i",
  "key8": "23JGj3o96EJCy27uL6G1ip8Jtn5wE9rQB4EfLuHJDTPvL4XcJCXHYkknE5zwU8V5tnb5qmaXDxG6HohLK2den6Fg",
  "key9": "iwFx5iNsuCqEj9aGWz4iN8tkVrUjnYx6w3rgcANw8AvJybU9fNoWPsKxRdxz9xJv1cc1kjf442iWwA5r7ocBFFr",
  "key10": "szC8hkBAQ9cVx1o1hEu5RQWWAj3dd5gqriSEHZvFJCNMFbz9NjUmZgtTMd65MH9mGhuxTtjjEcxorFWwmCYiKQh",
  "key11": "3sTZeiwma8jf7BHJ4NuB32eE9FRGSy2uJvBaVghbxhA1zLMsfJizvMzB7X3JAabCmcA9forrabQUiCVNWdHDhST7",
  "key12": "31MjvZvg4CXCJzEPEwRgu1itrSMQzzsQ1LA5AnaNqKGLkCs6M32UgXQaJzaK5XW7LzDeZyCq2gLXdtFL84KjofZU",
  "key13": "LGKa4eZKH7KqNbi3jRBh5TpitHaXh7AYQcKigrZ2ycZvjAWDsr6xScDAvJUXiGsWy3cMgRJa5BwDVr15MHom62w",
  "key14": "54hMwGDeB7gSkS9TWJzci8wzuTvUPkWV9jD3njEGc8aYa4wNintH3sQzcvHHgjsuNpEkZzSf7uA2Cjv7BDuGXWtR",
  "key15": "4VCk9fMTDB4JCREwp9gt2c9LnF1UCFTMDDU3fpXRxuqaB6ttfGHpAUvnPWkhBuL6bg3Tr4FXbkvzAHgCwSwUkGw4",
  "key16": "2S7gTZ9WD2eipNTAz1rrM5HsvkQWenLHuPRiNseoNjHVybxyVSpdmP7xZQnx4qf2aceQtxqdWAyTjDHRnKh8HDaE",
  "key17": "42HZEPDMJC5cTDf8m35AGXQpD7cMcN9kDuuRwappCmUhAMAYyfULWM4uYmwYMWb5xXcZEvkQMYbw2Ryoa1bqKVWu",
  "key18": "4uzo6PjyTG7ovmLWEiUnLB4FLBn9Cf1jcaWa8NniauAURApmgXVAeQSksNmz8vSM8fqVkbsTYgxBVat71K2mjsqr",
  "key19": "Q9rRhkV4dvLmKcYa7axuetjAvD1Men8ReqThAApA2QB5msfa1vSH5mhcu1BFoPdi1rGiSUBBkj3g5HrQE7JGUnk",
  "key20": "2Wv75nrw6HuD8WmCGsX6VYEEgKf1c4bbtq6DizH2a8tR2TSznPSM9FzmZ5jjB22LGKVZSCqX4maujowiBLExnMgG",
  "key21": "3ShHMivPwAaCeYbMMFGTNE4sFJacThL6typ6ZVwo6MK87rb2Y6nMpjKVCV1nNSTZqM8rnJQCGTFKSMssqpkzp1Bx",
  "key22": "4tDbpjShQdyxnbfzdpVsKs7FdCJ2JRVGoUSMgzBSQrrTpRtbrto54Y888dyaRtH1pQgu7zY9mVLe1Gu5m1YSHf6U",
  "key23": "5bukpgRnU8ByyCU8tWLZ1sKUiw7GHPmzQLiUgFK3xsBLXGcDvrVgSrabNpUEN6FzXJKrUcndevdxQAxeEGtKH5zY",
  "key24": "5Bx2pVB9jDhbozDZ3YJTv5f2S3gsmJM7qJQDaqukMbNtBBevVc4hZiryJxdvXnU2h63ZKPtJch3jmJ2HhseavjaF",
  "key25": "5CZmwV42c1g54C654YexPPMhVkf85tzTJw7jcMsuNtjrXmFdWzsMZMa8E5VWFkGdCJhJ6xGBNCUKDv3FKPDCLeBE",
  "key26": "4kq86syfJtCiRabJcf5gYvchcpWvSLRdx5Tzo8cc4192wPdA23svfy1C5YW1fxAzncpeUNHAmTMDBgf9y5rfQC5K"
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
