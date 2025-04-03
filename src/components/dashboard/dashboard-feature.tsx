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
    "5rxuD3s1qRkAMPEGkmqh5uXkm6DFPLRxwwWud7B8tjb4DKy51kN8onWgYykVXyDPnam2a29VnA59U4cdKhRwzDiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xPws4Xa6jWosp9LvEKKyQYB5CG4S7XwVFG4EBc86htacMca1RDHjGXCG3YHMepZTSjLfAUP46VYFxAUZ9zhDSpw",
  "key1": "5eb5SVZ7g9UY2WYRXjF9rxgUtfQ3qX7dZJpytYprmnRUeuoZJzeR3LGw3Q7KH3VxZfdjrrTzVTBTsMBvMggrqLhW",
  "key2": "5RowpALxCK3vHYuW8Zfrg4mp4uZGhszwQD5tcmiuKEqPraSjeuZXj42myYUEZxp1T2sWcfnzRFSpjc832pw5p3xg",
  "key3": "d1Dj5puVrqgALqkmSZK7tiXf8r3ne6S7pkDqJmLin3ozYrLhadjzrzPpcLSJdgbGAmgnfFd8yLdKU3U4E8Eit5J",
  "key4": "bofGVEdtk5Z6PzK3jv61MrWbG8NxNaaTA9MZFwh629zFCZaJUU33XTymW9hwi5Jm29GMzx89PFJmd8EJ3tjwTrS",
  "key5": "ks3AuxKwz5YKvxNFX9q87hUp9B9NPeK5Zg5Ajv12GVe7LD275XykJyhF53sDWJvLERCPN9MYFWoD3xupSNkveSQ",
  "key6": "5cXNcGW2M7X5YTM5dMQbwecUsMF6sHqJu5xUbxgqVueTZxRfqXB9ugUSrsXdubio3T7kSXP14WPJeV3jjpFjGVV6",
  "key7": "5ycYLpuDLB3K2y4JFZkrd1Tp7uFXmSbnhDzr1wmgRsD8TQmi3MqF9TCo8D6gSa4WYdpUzQqZDu2GnTy8oidQrqzE",
  "key8": "4xTVV77EpZ1YvkNRQj9Liu9NUqCy4pi2ES1LJSzfV27eUH3YtGTFk7JMWf5xAnkTYJhXDXc8jMT2t1evmVCj22vR",
  "key9": "4QbUCfE2CrFz888jVVfGtdtuUbc6P8r3QGMjvDAQ2jvbh1wLRRpiN5zZU62nsSNiSC1kgHrb8X7SpSLvfdBkjWkL",
  "key10": "8gfPoLtBmzPtQXhRy3SEMz91ZboTG1KXpEYTZCQoCR1RY9UF1ZouML6Jo2Hm9cU9QnK8L95vVG9Y9qZhf7LzKcb",
  "key11": "4sdixn3X4HQNYx7HekoqSADdskit5KfSetq4L3awJhjqLJGMZPQb3WRvq2m1fgVrAREUWmXisMq2TLqzjB5waKeg",
  "key12": "2FqPuUCvYSxHtZr6JGvXL3VNuJkZYxhpFsy9sdznwLihKXuxrVXappdsRKRCkCkiWD8jHE6fVtWxG5caPyra15gr",
  "key13": "4u7DhALQLXQw2xmULLDDxG6k5gobDhdKzjuB2zcn9ikkUbCY34iMNyScy5UMtuMtvDFuSTqvj22GBDprZXpt5vUz",
  "key14": "4QqqxWnQnCav91cgTnD4eTw6PNcS6nWyormVEZt9EnjpKAyJ3BaxTjBMPUzWaE8RqRMtzyezcDg4ZvUMMFckdvKg",
  "key15": "3eVuokhkLejsvjvairWymRzW2kfZ323WGgSNfNBfiUq2UxBvivDxk8EtfyL8PbnzvXF1vAvTeMQ71CYtyWJsGegT",
  "key16": "5cwwCQAowk88xKEz5ZMHgGcYRNzQUivnrc3M2zM6QHemswg9rjgWUrfLNiVH9iGGkHHDbS1XQfYR6ei5kt7NsUFz",
  "key17": "59TaHBjJtkrgxYsSZs8Ta23cs4EhcAFwzsqmp6bhL8CvTUfSmNchVGUxB1TnCa9hpwdh1HGMsVwpcJLaLuhVSMeq",
  "key18": "2XbuMMxCQX5hpLpHWH6YWuRii3C16TUJ8pvoiTkq6NUpTVPgvAERGmPvZpUR3UVUGNmHC8KNAVXtNZWe8htA9uvb",
  "key19": "5d7VtGVqzADQdVnvtUT4FZPr3zRUUbns8EeuPxiJRye54ccaZsnRWUzTUBVpiMcopz2BmcwUz7dyPt5yJYvY7mVX",
  "key20": "4bWW8DbyQitQ6UqRry85ry4zfyNdHf75cV6zbjTKRLxsHvgWyPYCFKgbUFMtn3iLwZpRuaQjJLRbpv3FLTh5iiXs",
  "key21": "2JVjWCZHNkZKNpges7hcgwM5uYVygSSJd8MNLMCSWuUgN2SZZ18mXpdTXbz8Nbgy6rr7zaoAW8oxq1mUzdSHJRvB",
  "key22": "4QMVJkScnWyXM4BntEpz6TkD7sbjWzRWhoc9Zge8qGS461aVtibWeN2dq34uZXcU6u72BEFup4BLtYSm3Zc4ceNq",
  "key23": "SgUEsbqARgQvoRzCfafhggGgSE6wW7MgY7GCAcYREsxU4m3Qx8LUqyti8f6DY5C66sA31FxoVWSwtwMvXHeC1TD",
  "key24": "2SjXd8twSDUSAmAoz3421rj5k5eWehwwCeMqXRAmN7enpWNMGtexFXbGyM6syU9nmDAM5NacMHFCMkKyAKwdS31J",
  "key25": "LKUx3Rfo2G41pU9SBL17iwGY8xm9K6NR6f2N9RjCReP8ny9LajVJEbvobJU2pmtDuGmzwD5cNqfaxbk9hM9S2JZ",
  "key26": "3VgWXNJcFt4y6jVy1SBiGuuLJWdWt9CMVNn3rEeFAjeeDJKGhaHvsJ6iCSNwxT6PNMwhgZPQYXHfL8Fg8pjAWHSp",
  "key27": "v7PCSNPKV1JEvtiZrqHn4KcnndrkgHVey9LzNjPELGESaBr3fqCMxDsoMm86mbF8ToqZWmq7rSyV5r8eoMiNbB5",
  "key28": "4gZgTiHQth9C967DdnCFesK57fututkQ5SQSt6gUfLwcWDYzcxFdKabZBKW3wNEBAfuR7hMrEGL7Rhw9SwWcZYEF",
  "key29": "2GLueAxkc9C46E5dhnQJ47ZHDcbVUw9pdZawLNTP8vXaanecbAR7RRYr7NBGSPRGZBcZhY2o9aFLdedcnwym2rfQ",
  "key30": "24zpM1LJ32zNH1vtE1GAV1RPTXBJfKqiPJxaBVTA1dBa7TehevAi7sLeQRCCHUUhPWn3esr4vU3adnHHkpmvvaoS",
  "key31": "3m4DajfwGM9apSQzRVfuSYMxx3Yx9TzMWGz7Q5zXqTQt3LnErGmBTFjHoCpyomJRPGJwt93ewHAEFxTWy5pKxRd3",
  "key32": "3MCaZxL1khsmTe1vFk28PzZYLumtGBhozoWMgtJZz9nrNfuCZbNofrYfyfcNg4ScA82DyYbFTuM27qV2EYz3K2dx",
  "key33": "26scdLhLjThjFTprReNASHstU6KF7vv9kTMpUD6thQDcjGqShkLXa8FZevZhneNM7GTxj57yRCZA9eVV2vMbsh18",
  "key34": "GPs8orSZ2x8kEBRJ1c5TEFhaez3xCuvLgQaEBNEZiS6GF7G3fNdnnMEHxSdLBV2zg3bz22YyYgR1kHNuyXc4GPt",
  "key35": "3n1Cq9fS9oXRgS9V3hF3L2VUii9VTc6Vs3idRAbDF7oi966AsU6eejDkfQNUdXT6dMDRC21qun1p7Lgh9pZGzrBf",
  "key36": "4ivjpU5sgQgXqGj1JxwgRFbDGyWZxBa1YCsdghY6fDJxZnrmVezPXSMwufKu5UNYqyav4zb7wyYPQKaQRJqmPvFr",
  "key37": "3B6EZQJ6bUXu6SQLY9oyvwkeNLDkYByFugHqeDemriu4sMDLaDJTYtDjeBy9AQW6h5odY2R3ubSRhHfL4WCSQwpz",
  "key38": "3YbkYDWJjYtnNgrpNGJ9xfQWz7p7SsY9WjY8cdxxnu88NJnGDSV45AknQ8Rp4CtZm1YU9UamvPqjnj3AB1Rt6oy",
  "key39": "4bfAaVVWKD38chm18i3m2dB6SjGX6mgbVja2HJXBx1t69VXmHeX4jCaBnMP3ZpMHWHTZgrtWmow2MGMbSXxUwM7Q",
  "key40": "2Msrd4Y2JmJkwoKUg6jum7apKH9CZgkZxmTkmUdJCuAPiCRRcNaREVFqBzqk1SWCScwTAuqizkLyRczWhMD51bnf"
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
