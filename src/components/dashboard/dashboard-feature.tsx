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
    "32s4RtM4WhLBm8cHD9sdBBKD4XHHBVaCixUbwvoNRwqy8zUhQ3b2CjtGUV5ASk7UNgedNX6ZgAUN8JW6WVr7ZkF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uyM5sLnHpa13rnx5arPTjgziScNzPf2XtpYG3RN7unoq4BuBXGgPBwd33mT62zPAZmGqspGsEHnaCufpihVQUrx",
  "key1": "34PdzKf4Hk9YY8i2e3P1TRUTudh47eVLxvqZ4VBDhG68Gy9v6gg5kmL3GtQCSwREQWiLCaCoCY3fwYVEPzmGGaJf",
  "key2": "C3is2ekjgeqtsn63z9QV542ZcvEaSNNLFbnyv71iazHp7jiPV5UuEgbujmMHsRCByNz2Hzn3n8Es6v2KXjF9hRm",
  "key3": "4XqiQvBV5ycYuEQz7Au4rELniajw5bU1NjA8zmuGGceXtpEBzBXmTVbnUrEUXv5bLAYJK4DciGLTxv2amm6eUJs5",
  "key4": "C7zhyvihUDingSXv5fmJ2gp5MuLukLSBQDBB6kaoV92PgeFzn6PVegm4wNZUmfsZrn8PYu6SZezeF8ucbF3rZ6j",
  "key5": "3idPMnBeyvRLnTTu3bT6paYHaFGu2aN9RvxCs7ht4KQjwVvq7etASwtihhLhtxutB38sQkNmvzQBao5E4XkiuMnK",
  "key6": "23NB7mHZ6KiwAWUmWxJPi2diDWa4RRZhHciUFMJXZL8moZQiX96HS9VC7FadmEG8PSiaNNRvYWoeSNgs7xwt51VU",
  "key7": "QmCdTz1WS1a3sTzduVTYNrk5hjMEZeHz8qXe9UHynbBfXFvttL7bqKPZuC1zBsYqFhBdSzMSYPkJ99rXcaF5n3h",
  "key8": "4fXEVU5afKvjd8JYfZ5XiZohSxYHofKJEa3j96Xwg4NxMgpWFjtAmYCUSr949B6wTekoz8egwMUAawNprSBVaSk5",
  "key9": "4ax2CBQADTBTnCGMndLGCvfiHQqfW4gWyEyUxdenh4AeC5Zfj8pjWEWX8JqFHe3Y6AfbVDRLrVhgRH7oZVrPHMbb",
  "key10": "cbQJFEecMWcVT1onA2d9BsNoE5Q6jaMokifeNhUmKdCJuHPK4YdjkWwC2tCjV2ZCTG1pecU9eT9UhzB4gUbhGaz",
  "key11": "5A3YZHove941t4JbHn9HRJZhvnbnGHVvN9R8kj6Ma6RZNFmSMPz9G9BVDqppc56WZ8R62UgKaFpTUvrB8PDspgi8",
  "key12": "36AuXFaebtRm6QR9SsM3sHE519nqeMRdoLobkrSr2mbCQgWNT1m1Pe5aT14Z5SRqdqRHmxhR678jpsK8AFuUkJML",
  "key13": "2ziYqKqJ4G8KeCUZ77dJgFhAA82oQLLfdAxvxRmYfUom4p6CDZi3ffMvbUxqFSTDvoxmZyDeCqvZ3kCV8vbmF3ec",
  "key14": "mR1b3aj61kmG2FLVZa5MCY71rcardi7wzZ4JdmeWU8vdPNy6cNnJ1FmUUuefVD4K8uHfZwT7McXeriMezZ3UU5G",
  "key15": "32sTbiF58HTbz6fwJdLXGhFUHxa8f9vLyXZaowSnFJM3EiEhGnEhoZ5H63jPs5GkMAtgz62EDQgxneQJUbvLVRve",
  "key16": "4M2XLvhxoETakwtyBduzvk8Z2mERjbJNVqPp97wnE9eDZiTK6RVAZYKKFgReWezTaUuPchXi8ob7tc4z7HMKJLTC",
  "key17": "24CPqSiM5WgKccpiTDGVis2LwfUu4draPGjwHkizuZQmSeeBhYS7vffbqXRDThq2WX6YPM7i7zUs3xywvMe7EQKb",
  "key18": "5jHhsTnyXs9bHWgymLQZmtyav3tW1jTo3bEH79Q2TQHrjZdcpNCeTDVBkTfJDm3iJyMAbDkW5q6gP5ZB9ptWQDeP",
  "key19": "2mXfPiywnxp9MXL8bUPK6cJsTSC5HduqsUJ78BV3hK1J1BKnt8NFbVNvE2SPQTemUqy3YpRtnLsmTwbCqmSwBrH",
  "key20": "5uHKVnwgiNipxrHXpowpUQZjgJMfio3XKuVfJSox5yVjq6gXXPkhqxo1PhXzc8tbaiUt5ghTurYXsZgxFug1abwK",
  "key21": "41V9EUo8yohmRaLq9q1RsiFDgbWi6GZjXVY6XbSwjV2kXdpgVwBNkm2DpfFAd1jaGSxYwtXhsv7XweAkx3CjKovc",
  "key22": "63KLMH2nheBfjeaMhoGovYgyMZVoGNafMXpcCAVRWCLfCbCnQuuRyt1eeBEzXuyi1SSP1Qec2sW885StfA9b2uJi",
  "key23": "5NUt6MUxc33wdAvcQz2Lu6zhmHBzjrDmWuzQBCUjSUoSaZ4L9JbibHWUi6JyU43ZH5Qugct4FcsAA1pbpksCubHb",
  "key24": "3W9fTuW8K2AaxUPqKK1RP4qF9S83WBpBqpqCfxHXK8MdKRcQ2G214QNaKFiR8UzkjUxJQryw7cUGxxT2M7JAsamv",
  "key25": "3Tv3Poy99d2UZSikHZ3ufoRWRMhiYmTz62wZyRjmYh761QH5XaBfPxe5DsEwNxBfntEi43CtK7sDekgU4GmU9gFc",
  "key26": "2cNQ1o8hz8yFpu9Gpepmwp9AaWMLejTAanyQwdCDuHJVLhA7fwVhGQoAowk6X8msNebDrUa6zxSWHpcsGXKA6ekJ",
  "key27": "2WmXXLR9ywx4C8iENLKkq5E6FrUFrWZiDJ1UzY1o3NRM7jjdhsrVQ15LMNCCEynjVCR1bVBZYc7KqjgH3A6abqKb",
  "key28": "3GiaGHZRE3uWPHiXkMsmv4wJ4MfUQ3aWKR8YaAaCopFM1XZqLrzz9BSg4yKvgZEFxANxZoiAVaLCeMbJgWJSBNM4",
  "key29": "4zKhC5vFaovSX9TZEAeJRzcnZgk1AeXppwYofohf1serJ2PRU166MQFGtdMjefQRsvjM1VhYBHLRrSTT5MbW2M4n",
  "key30": "2BEE9V3qvDF4vBdvCGhRfyvaBfNt2sANZf1ALRVwojRK4E19seqJPyjDLsGNCZWhKSuARTC1NsVoXoGhZvnWeN5W",
  "key31": "5PxdYtC5qeVyocyyj2AL17efgKn4KvbxLyGHNfz6gQVk5mpzh8wwgJFvv7DJtq3uxvTkPLzb2ibK2nzaj4M6Kvpn",
  "key32": "5XoiiCn7T7Da4QxWurtSEYfUQ1Nhtjr8UPNPzinXwym1VhwJ75p7RkVEkLxLCizGbMSMrpQZ8HxbqhK2d13WycPh",
  "key33": "4NH1ZBWc9URNQqfF6ktvCRnYWZRkaSDkmJcRGuKqcWhhYeea8nPqUrs9PotosXYoUd4opj15vx52vLuGk3ZNTBaD",
  "key34": "3NHFWaTw3QjzUhFFs3K5vK7nFfpfNguWyHqEDbYx54iBhA853FEaxssn2bccCLt4gZJ3ztfjboXsWC3gWv3qJupG",
  "key35": "4Qsm2WyyQrQ97Scpw5geuQegoZyTAJctTg7Wd8jcqUyCksrQYXVbpsdsys5p5zW721x1VMJ8Ls2QRJr3kM3BW5ev",
  "key36": "2QHw9GNm1wvRFfWnTgMmy5nemhSurWHXaeAPHhbEgPRn2HKVo9L9wqo25XXDTgAUFVsWJp1SSonr4T1u8KP5wckE",
  "key37": "31FkmAHyxAxE8UUqQYmRyLJZrgvfDaYg2n2amgHzGHDFxNo3WzQATutB4RMWNFudayCznBxNfNdhT4R9maoUgB9m",
  "key38": "5LiPHtxgheVv5sLPtLHLXQ7noeegCLhPAp3172kSwwGFhA3FNeXqqHGdCSVMDd8R5hzmF6Pkt6RYxdbCLVEFQMLt",
  "key39": "5utkz3kgz794y6sd8xNz5cLc9hb4d4PJ9rAkDyYp8bya4Dez1hE3B2HTHzFPUD3jgKeWHifmUGwBPr5g5kA3SgpG",
  "key40": "5FTdJJLW6jbQ42RgD68XyHSYecEDwKkwDG91ATtU9jQuRBdnrnyJLiFcLnUdx1y5rsSs46xLwjqb4r4kEaaoytFj",
  "key41": "66vUgoVXx97toJRFFhCPutYjXubUk2Y4Jkop98MY6iukXjSqZ5ybuhT8v4nTmvgKyrzPGMujLYf4rfCkaxMDRGYY"
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
