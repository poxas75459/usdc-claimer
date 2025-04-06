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
    "4ZkV7UtF66qFDuEFuEZ5ziUaGkKX4uj4sKUorV6dV1sWNaweXssDmbHqfZ3HiNvTchWkwcjfpQF55Mj7XB3u3xed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d2fxu8qTwVRY931Nn7cKNzVkFJej9zPmuJZ1WEzfn6yMtcpSQ42xbTrvicCBLKjEAA1nH7zBhS2ZQkAFoo4L3Sm",
  "key1": "5HziTsbUxJ4RNuA1mj8uaf4rEHwL3QPCdPUqP1ZmFc7TrAZ8jq6gAJueo9xfrHZj56odGbEc156an6hr7GnegjXF",
  "key2": "4P538x9wUx7sJxvDmfm1p9cvDFWTc2dGes4uUTq3U1vEDLE3VA6FYKayygc2PDxiMkaSE5qCim1RMxZxp5KewH4L",
  "key3": "4DyE9Me6SU2tiRgvnJiaVjDmMJd8B8YBd6uXoqzkjhE3XVGwZRFMqBoQL43Dhv8TRnrLXGJBemXPppR5F9dSK6xg",
  "key4": "5UCDz92hrPcJ62VZhGEnjMP6hQiKH4iqJM59WiL2WK5FehodtenZJaPByptgBhiSHBiTpYcwGEB2pWSftqrFcP58",
  "key5": "4hMT3ujM981mdznDLEXz3SWCDcmLW2Ug4D62fgDuz5dd2tt8cVnuVzgMjXaC54XU3oh7ZnZBRJeYsdSaWkmDtJsX",
  "key6": "5ZVcseQxnLmtm1GsXb7fNmirZZUiQ26f64PVW7Bqg5AdDRRDWLtP4artMnuoMoa7Y8HxReVZcxNfx4M6TgTqpHTn",
  "key7": "4kTViYDNY8MkXriCdDYypCT8LRERQfv23zJdaSerAXpZ9oKGRbTaLN7dz7mLdutyzwRvttT6vxRysWuELdngEJZc",
  "key8": "4Sye1rBoY9XarqomrpKvACYJtt5ZLNj6jUoNXifhEZ4pZcc7j7qTvzv9PbxisiNvXo1v3AGX1X2vCZaksRAfYaHc",
  "key9": "M31ubYVhks9LckDN87ZCY5RNJqHwVqoew5KgbpNGqR9NoFRYx4j5AYB7SopgzhV1de3G6DqyuyPSQ5Mkt3UzvhM",
  "key10": "5zZ8urNdETG7J8rE6Rm3GZe4JaSLQQHmn3NeR1Dpm9Umyz6u93jNo1HB6LTu785x8yquSaCrkAwip8kPWirFUpXZ",
  "key11": "4EZy6jMPUUC6ix5RMT3DRcBXYzy6UWvrPqVsFfwwFyUK6wRiG2L61dNCWL9G9bmdyjnxiXkCTWj1W74KLP7dgama",
  "key12": "169sTyzuq2eT6tYGmorSa4nEHD85D2gy2hYTqgoAxM8j1wVLzxGBfsBoVkHT9CGAtvrAxmK3Yomq1kytVkQpmTV",
  "key13": "2BGYRkyUsRW5T2kXqAM1TZfuSwRq6KbwC5jvutXo85N7Vkog7rHA5qGwNiGZfTMEKERynRfCd1C9Yd8gUzXaYFm2",
  "key14": "3EeCZum6tpVgPntgkwcm4Ga6KnSVT3gfv6opS1gA5VFTNDtS9Mu1cCzWnGcrCiLRLzv6k7wdBRaGtoi9ripnhGmu",
  "key15": "3u83rv8LcUhKiMyjs3YZQQ4VWFoFRkmNQKyGYE19t1ssBr9xJunf9beRXrbXcvjSHcQzskE5nAv7rfFpybfs8WgA",
  "key16": "2Q2Sj86BabQFTVakrV3cU5sUgxsGfJ5K8Aqivvv2S3N4sTtLaWXQEtsJhhdes9uDv2rDvc3ua5t4jfvxpiawQsFK",
  "key17": "4bqp4fQvdhgrw2fxBCTDXXAwe5wwhvdyCbTnZZtEuzxW4WH59n3tUwNLZA7XikHvj4QFBnqrxKioaxo6NX255PNg",
  "key18": "4jFBDLaHuHXLLcn2CfAzTwJxY1jBRjCSbGbjokuKSx6LMPphPdNLu66NAhsF3RUb5mA4mAUQh61E2DJ2dJNgJvht",
  "key19": "5PxF6ALBpRtcUbZggHQFd1nzxz14BYdk49FWmbSmvptL5vZ2aBudXM9rANYPKrNuXGpudL5EVDZ97UGqY1Ebajgh",
  "key20": "35kcsFrZdMwF3QCPNyf4U1i8u1jjnjpqiy2gvn9gS2CfK45hmwN9njbd3ZiMVp8XF2PBimXAoFY52MQLHoer5FSy",
  "key21": "2j7H5CSST7oh9gcrNeghQhmA1aFriYNyNukDQw692AbPxkhCZvWBBGRqzX3ytp9qKPeSJuB7ssPjeyxvSbcxZEKs",
  "key22": "4eV5kM5HWRWCn2D7aHAQoq1y7mgmKb4ajNRBcfRqGwgtFypQqCKsfqyiZ7d8NwsVnATtCbAbPb8Qh2XB1wAKQ5c1",
  "key23": "5wNcTLqjRP3Mqqi9oFZZjF9Sj5xpdFMQzxytHSkG41b8A6VbrTtjJ7KEegNnMnnNNk2FB4PDA5nY2YN4j5eRRav5",
  "key24": "5vnF6gBT66Jg111d3vQGbg5YhgPyF3MPKn6rpQqNnpNjXVZuMmFxo3YWJP9i89v9H2UwbAMsu97G5sPrSL3gs4h9",
  "key25": "6391my24cCZFF2uJRfJUNxtcALXLUoe9G5KPxfQidgPREdeFuxaACdi46CDbg3rjLZBqbbjhmZXWpC6XmQ645dYT"
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
