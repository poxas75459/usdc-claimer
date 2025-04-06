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
    "2w54aoxkSzJCVszgBa2ET9g6T8RGdsfEmF2bAJaBdGdsKUcjFQF5YQHCv2Q45nGeFDk7Jvf7hshyfuufSS6unFma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58AN8r2va3LX9Rg6o5tTurHbcBHqcpdMB161Ps96RBTWyrpEpsz2mXoQJ6YyneoBTbL64hqHEMv212L2F1CodAt3",
  "key1": "5eLyNYwbFNh9X5yMa8HCQgf7dHstAMSkk8C4MYWUpG2oBbsAeKkQwoiFbeYj41eCMNR4ASSremDpjRj7ky17fbia",
  "key2": "4QPeBqFMZ1qyCpYZFfQBe5u4avGxQ8hVTCppFHFHEQfwXq3JPoXKsSPVW7KzkqKRbk3RNFpMoXzMng8LBfqfnnwq",
  "key3": "3CvxWKDpju5kDgXMndcUGcHA12sr8LBNY976LYhjToyebrDR5suSYS8QJR91GPbPjsFKxmoK5SYUFFi6MpktXCdu",
  "key4": "3kucNSayaE5Tg9SSoExEG6emnb2BZRThemt9MUKLxidTzWv4QD5Wi7HTeP6kVHab7HSabSsvELuSg6SVePUWg12F",
  "key5": "2hACk1s37byy7Ax7sWZwaNVFS2wZum9pviovSj1TEGzVpzBUuqqEDHP3ErQydNqYcVcr451MCR9HX56TszAwePja",
  "key6": "51XAXAbEfqVeqTc6peq9KZibTEZx5iKBw5Z8Pnsopj3R33JY28ATT5Bvm85NmtLL9951jAGBBsiGxKWk8ATsBbkf",
  "key7": "2DczKxxqzXRvwVgsamKQTjVfkT5A8mkgEszW2pP2gGVQWtneGv4cmX9WvTd9qgVPETDb4mfZDiHdTDtx7dcwfC1H",
  "key8": "6iHv3npjpC7anx7kPXQEJGxX9yp2dDzjAYUprAhRFGkcuZHzARAt6uAij6TLoqmtLZzRTVzv7ADqz66XYAksGsC",
  "key9": "4YQLVfvsKmotcaTamyYeUHN8ad5P5C3CYa13kgwZYqoxEHiNDWrHaReiR9bcXM7CYHWSuFPUaaseSWApYpdy9hEw",
  "key10": "2Vd2Q543a3KN4b1iDxSwr6wxxKjfXTYL4GhjGZx38hYhDftFMLgzgQFWKNLrvnAJ9oGLbukMuXhCbXYvCtxLQvaz",
  "key11": "iBAKV9KnuBN1sRKjquEJpmbDw1LgfZhw5uRsCNaFDwx2StoB3tj1KjZdKkJ5UXjbGJBf7eqiwpQGVHYcWST73xu",
  "key12": "2LrA2BhiYWCCM3SnNb6kxcKCba8oxqMu33kgnGi9rW5gBiHq9Hq5Hj3thzFSLjiz4x4co2pc3xqppyKf2pmqEoE7",
  "key13": "2QvajPsKPqBFCAPoAR4UzJABbRHMRm4nT1U1E66L8n2QttRSzdY59bMAoCgKcK8QTwHWxfmt92AgzjNHxj4eqdZ4",
  "key14": "5DkGLMEmNPpTLDRZA7mhTjkATbzhP2YhQjGj1bPiyFJzV4LXpjnaTmD6RuGh5usnZVqDy91Fx14GR7uGMs4WNThQ",
  "key15": "5xdcaXw3gA28vW6EYqwj5DjbQt6zBNbbwPj16NvPL4YkQR1BKVQ7UmBdcTmETW1Jt5kN4UMm2x8mUumykVRFuiPq",
  "key16": "2TF3gxSwk1TSQj6Jq8VudPvZ5vcQGbHC9BtNj5Loo33QNDpYR6QSn2pGjuPeurhqEjpbmbpqHdumkXsBReps3qRF",
  "key17": "4jXyJRBc1e1U8cGSxfSnauErwL8qLsfLuu61bSkMCSgoPjEpDzoM7stpZUQxDYQ4JrAV1n1YUfb2c7nRu93PY3zU",
  "key18": "642wtkcRpJTqWukYDurxwEiV98WKXGoQCBbRxFLnbum3ofzmjH3GPB5AsgUQbBcFH1SRM1ZPxmXT6hr69J41nWBQ",
  "key19": "wic3Ai7KqZSV4erhuaJcWYY3pesNRgFoRBeaV5GrLWSkymh1Miw74wvshw5ngUUc7W6By9ir6nu81kCyP9zx4YQ",
  "key20": "5wwkX8bvhygAhkpTh43U6KwA1r8prGQqQtzQLZhMqsWaHWLJM8nzD54j51rB1jQzFfFZQQtQG4NwZ5t8pJjUw4ve",
  "key21": "64597K7CTzxfBsFbEN3aqQxvy5aVzrbdPTMkxGujRgcEJua23wM8U68cQqTKkB91wmypxNveoDDs55CFtThDieeP",
  "key22": "26M3LVy3P9kbuXnzaax7NUzHM8ga2jCisSLEzuyJMMPwNnsCt68jLjCBA6PuLBDN7SdRgTbyEFATZwKwBMQahcqG",
  "key23": "3wUyLWvxQ34iUP2Ak2gKF9kYq8VJYb2BoSqpNqBZJVgq9F2MV2hGf2yjagkoczT38o91tbjvKWxJeV7AG3D7WbCJ",
  "key24": "5PYRZ965uw1Y4CRJEG2M7bUg5J4D9HgR1idpbrxt4FsUYfGW4ecDicoJpp5PZo3Hg4jSqZuvJmgaRBgyrnbJ98uN",
  "key25": "1o283VxjDseZ977wAyvF5qdLpFhKEVKi9pw7VpqwyjELmp6asoqK9Na2XY3n8RGigJaJmUtgVc1nPM9qbuYvC94",
  "key26": "4iXWei7cgGJyLbdfjmgUyxYsZF68FnTgY69tmr5qc9cgv6jo9jLuVUnA7vPwGdeeeWA7gowtU5uQcX8ZRhyvbPgH",
  "key27": "3Hqogpb1NZL8oXNqNMdYcc4WbhvMZ2u1vo58XoS5gPwRSGwCL1Sz2SPzo4kwFmdLww6BrygQALfuM4jpqzwKu44j",
  "key28": "4dHnyBcGsWuWPjaRN6f5Ao9MJcHq2S7ZB5P2b6UaP4T7dvQS1sZMfhoPR4wYurfvuc9C6dpH9NngZmjmucWJHZDy"
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
