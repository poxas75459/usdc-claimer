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
    "2umNJ3VX2tJ6TSZUuakFJTMiNpDcwQrMZyKyrNFn4BAGWG5Pzixhg4jFhVFUUQ91RR7G8cYzkiUACqnGrTRfHVbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G4QPXhVLKu8mCmgr45LVqF9uRg7HB2yeQbZKU74Wfsddz5iF9K4c1EBMekYtXJPgP5gZQnVrMc8U4DLuFGrM98M",
  "key1": "3S26ngDtmhWD3LqwNrVJ5zWmgHnAw2sBWX1WewxgriYHHDHL3sWTbHVTh177iBH9TuNDnqchkAVig2AHkwh8sDuH",
  "key2": "53rY1b35TFNUikTFRfVQUKXRxyCuHNzU8JwsuXSgujvHRx5CTcgDME8bnJ4TJ7N5aGZdGxGe76dp2Uo4UgjdVL8p",
  "key3": "2VQrR3tAabHFXpyv8KDYbKQySKjbCoaKVRcSmtxW8vbhJFGii4stAGXfHNJZcwXTe1mJ8dj2AbjcYxLKeQc9ZYZW",
  "key4": "35jXBQ9FRMwH8zG1YiaUzqdvAMdGRMDjssn3JTVTwj5NoeaMmSQ7PeGLK6vE3rNExm6N1oPaVLcNU2MxQrvGPtwH",
  "key5": "Hi3GcWEw13KuE1eykzM5WAqgTVBfkux1opmgRL9GfK1ySXriV1WSLssBuTaMeLzVVCHKj65onVkPLaH8DnGVxLv",
  "key6": "3UDL1nfos9BR22ki27QeVVnWz4BYHKmNdDneDhQBB9J17Gbx6T8CSfMm5aXTsHtRQQXMTLvdmAYjV4KdE9qu2U2M",
  "key7": "3156CFSGfmFsuKxZjaV8uhhUq7c2ok5p1pmBVzCwJuV4xtkaeM4uFgvaFbj254MPp7yVEEs1LAhS8EFrAbt9SaPJ",
  "key8": "5jjQgqfrtrcnnFtDcZrmT1a1rYWy7vYwA6etg7dBwgTQpuDPWK1fKxtkqZixmzHqeeDaB5UB5Up2w9dXCCWpghkv",
  "key9": "36yw7hcLJjUywZspk5cmyhE4NosskAmdCTNapDLsAB7augyhX9UjhyNyKtdL2mKn2m2MQbr9Q37aJJneJDhauVXb",
  "key10": "tp7N4bNGnF2kT8zCn8mxQ4cSjvfXDYfYtKKuvGq4ThMU7qza511KTbikachDPwyrpVVuDXt69Dkev1XxeM1PJc9",
  "key11": "4fwJYFjf7hxBMph4Y86KgPy8bhBVA5LQ3D7kZkjQsG8CqECYT9mhezBW3zVRTHtvHze5PGX6bQLYThVsPtQYtNfy",
  "key12": "2MTKiErkVhC9nCS1ua1gXA1dFsW9Wd2guGdai2cpf8MzGkgJJG8kkAhu8uVbspLpbbZBFXLmVSVu6GSUpJytv22h",
  "key13": "1ZQcQbB1zEUhY3wfWyXBeuaJ6vKA1nSFYtVdptUi5jeeQRZ7SCuXWvQkHDbFgQW2ZqKgH7qZaUDU4KNX26pjSzL",
  "key14": "Xwzk46J4Smt3CzzyEWUVw6DkMauoi7X4JfjYFYqE8J5UrzfWXHzuUBHm1Awa4Xyaf91VkRhspw85jFqWTZzJTyT",
  "key15": "51MLBvuHrn3SsHoxvSzFKBnM1vojZvU2BrFgyc1SCaHzWrR1WyZBXaBSNgydz79LERt35cLSrtpKRfvrZTYoaJXz",
  "key16": "5WHbfNQ9v3q3txT2KjMHTnt8A4TAHayWoGjFsAHxQc1dG8ye9VkymLe9UUJD1yPdqQz1DWJYMV7ZND81Ebs3wA1Q",
  "key17": "4jgJuo5hHvrbFoLGLogBnJkQHbXTyyTPr8nx6wetuiDyXUENbtU4QuqiBZc4tK6YxzyMVX533j451oPkf1Y9CcGS",
  "key18": "37haf2z7JKZ9su2fCAPztyNTZ79qqPPiQd4mpx7dY1rEayePt6Eu4w8ddwoQxZdii2gVkgsnu1fqynEocB8CLGTW",
  "key19": "iTzjxD2Z8uMd4qpoMQuXt7qpt33K97JReD6FDzLHQZYCx43dwwy6LmtrLfwp9Zxuoc7Q6ad5s1v2RPy8v2eSxMv",
  "key20": "247pwbqfdkUauvR1q4a7CcHKHUkmYj7Lg86bKXAXAVzsXWU3abaqEsKq9UvyM8UYLBs7n2sigHLkk2MFY7gacLX5",
  "key21": "4fDxPEuj8d3fVacXUTpKZ81ymw1gFF1SxhJU9YHgRnpAGzihmr1ku2LqncLFwBUh48NTqWk8sWhKYK4pwJME9TvM",
  "key22": "4yRhvVQmUmi5M2HVLMSQE9hgFKuGqy7K7aUfGQ586Yk1y8nNS1R7eS9b9EXxaQi5y8mjPnQKvFynG1EWuB1bPvuD",
  "key23": "2YkZ8m1T9K1bZayurMVbJAJyi7RfjPSwihWdZdpkZ8WK53Ko19V4pwufUzpqn6tZjtSQdKhEyj8bm91pmtjvQB7W",
  "key24": "4yrsM64wAUcgdMUM6muTmAA52bF79ViC2rJEd4mNhs25nM4ZFYvgMpTRLmHKNGvyzU5QZz89626K6wVa8Rb3Rdve",
  "key25": "2p5EAC3AUae1eoRL3J7LsHfwkqS7sdrW1dDw2qxbXhr1Enuua4bqXtV1FnzYGPLMFFN2pKbTEoXhqSGZW7f4oT8p",
  "key26": "5sedu4iGkBz32W4nFkahwJ7BwFGnVfY1JjNKMQjo3PwCfDjhGkRi2FY8SJEcZ1qsDevAkWhc5BxJzaj22jUDewbj",
  "key27": "2PMVc83YXcMR3djrhziaDe9jt1GT58aaTiUTfHzrq6RhVj5ZA1siPqpJKRBVNm4W3FEZCwWfSDDedNdSiXUGdXMp",
  "key28": "oiqxpSuKtoEU9jzXHutnCCdWKBnjnkXTwYJrUUHj1fT1SovPvv7UcHNQZT1btCBRqr5DM7He1tGrMQvy7Lzu6Xj",
  "key29": "2xKgHsNy3fADsMoazHr3HEYipxwsiWvG4ioiD2GCm1DWYu3k6icpoYJZYWZueQePXqRPt5TJd8MfXRB6tSyGxbXp",
  "key30": "5U9bRKcgzDidqKxv7DjFBiuYAV4Vtpmj8ahuLnLCU1HGuV7tGJZ1Z2tJ6VNJnJKGav5dXBSxxUPoFrjiRB9TCd33",
  "key31": "2kNMDvaHZWnnr9oHLCEmJTkRGqdsZWdJiKuJGnBsamSXmT6koxy259esBUHEDfQz8gVbHUv2DSKa3SS4bEQhAnK3"
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
