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
    "5bLc22SCgPDXAAUipnrj7i2jCobtiEy7sKDbyaP6hTHMpdaH8aFLL7Tkq1NEDiCdmcdknG3oCKedFrGgBj2P154H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dsu8176QDB1WmFPtcb5vkzx2BGNd999cZetnDVLsy6gEcmnV1ydx4bxFpiy9xvTR69kc44B7PVRVWDhRqRZ7VsK",
  "key1": "5tsTe3sje7wxEEmzmKgnXJnHE6SSYBT9vPx92UWxs7XJcJvqFaKWS8PteG8r24ARQp97zZKbaouBVUMdJG6Zqwgh",
  "key2": "2GKFw9LDtaf9GofT61HWP9eZexXR1uEw99KPZz83p2Q1Cm4dvZTjmhZvVXHvJ2VM58bXNYYw4GdKRCmrbS2Cy1Sm",
  "key3": "bb7xYMp1NKZgfWDpFgYS6pQGTbFp3ttoFrT8Qpcj7tCs5HuwMWdKCGHDjGgNrmHMAQ1yEP9T6WzoSoSNNY47mor",
  "key4": "34y5EHFmNRYnyKjV11RHpxfAiE3SNHpwF1ypNbfGvgp8JVxb6a611EkUGiaeHpSGgjdW62taRQxPRW4gBxF28gv9",
  "key5": "4g6DjckqdYbDpoFQyGX85gU4L32TEQ6GMyY9AKE21KxT2af9Eb5nTEVSVRCGZ8vx3d4chZGGi6jFpmtqdmLyth8m",
  "key6": "4iZKyuyonGGa5Djbt5FhWjpcKEyPb3AKsTe6kCankjr9dfR5zJTZbb5H9iTzVD9DMhPf1HX4XabqQRGL7rpFQCuQ",
  "key7": "4jS1rRkHvcZiT9Nh4uHJeq1PxzVSBApacJQfvYVfVoCnJmdJCKtMF4XKKpBrK4WxsrNpEK3Zm94LccJPqiNWVkXv",
  "key8": "3tFUDHHyvmj43T44rvubh6VRFefFRkWutknNG3aKkDuhxMzwwnAgMfxKMNmwv4dtKA1cFUBB1r5icVp8VwJD7aP8",
  "key9": "5837MjRP7cqY4Kpm83zmAq39ZtLXuSNbo4ujae3dzBJ3ZeyNy6grbJrjFCQt4QPZfV1oBprUHkMEgG39ajnhonLy",
  "key10": "5Si9gwzogKFp4LZDzDyVXuBATiUQ57go255zxfhPu3nEhA6qDwjjiHaHLoVUtDY96qWP4KNwaZXfzkF3F474HBpG",
  "key11": "EiyTbcZLXHBDn8Uq5MaoQun16kHfLL5X3Wscnn8k3LQSFXitEBD2wTWWHrqWTcVJ3cLupemZBiZDqQLi38cJKXj",
  "key12": "4hRHqQAyY9nQcmTY7iWg5yPTcwF1JpXuemsSEBmTdzK59q5rt3JRZg4cpuYqKjciXgvAPwr7z1CaAQpjrKJNAC2r",
  "key13": "63k11auYCnYt28MWQD2cog7E4FTFet42yirz5QPESjcbxcjw7agi9Jtft4uD5x6T1Dk2Z4k29UtByTUgQi5FAtHM",
  "key14": "2xdefZkqSdH8cQwLZDXJRu5yjmaTfxLAuvnZ5NdnjcbpTti3NDVAnn2VdLEz7TmNPy9QTwseHsfQiFK2U98EYTea",
  "key15": "3a5T3dXvDsYJ3FfEPVLLnEy49PTbpUkJDUSdYEWf5DijdZ2CAS977xtbtuFuG4KzugfuQ1bwnkCQ2SZQkoZ91Mpn",
  "key16": "31b3MqPYe7LLieamgR797hrYnMEz8K2rqtXyt8NNK7pUUgMeMgWsZi6EirTM2a3DDDkWexJurxb9EotnwhxAVar8",
  "key17": "2yQCEXfCwFmsNdPabvyVKFhF9uLJCSWqJZwAdSKZjnXvVsnFQNrAkvRyGawK2TaaDRFubVvM1d654m2K9Z4tzwBc",
  "key18": "3ofkcj2duVfpFjuhdxbMtPx7MXxtxQk3RSS5KYdg9J1zVu16nWUZQ5kpJ4s7qEp98H92fANyzKFsZs24x5J3zhgU",
  "key19": "53jRfsCbbsEF1xBrXUDsK9LCK9yRrY43BBTVEJxqJSKh3aYDxY9ehVpPdEMWkjX7G5yPVpbe45ZUGKqeCL7AkrpG",
  "key20": "oLN3x2UpdfQYYm4ZzqmMv5akg3fNBByyRn1ftVyP6vDLeVHF6RKxkqoePHDQjhtMhTcvNuZ27DejAWNWZwEAEoB",
  "key21": "3mHE8fJCih4ZpXfgHf3yyr6fX2MZBwVNijzoiPQLPgKREbBK6Aw5oXB8KcBBhWkDZzJ1W8wVgV4mbFAH2W2ZvXGU",
  "key22": "HwP8ALwizdwAfaBx2ahUXL5YEwWeknzAVGEUp9E8f78QTRPwQQbDRq3E39PAc5PFWUCnRTfJqThD8kRj4jXZbXj",
  "key23": "5ZvHQM4sARQYZTFNmgiqZDqmGvuVULCkxsA7dFDjXm2yz1KgiAcV2coKVtJEiEJ5qwPvEDYF5EnN7o6kqWzY2VVp",
  "key24": "5CU3S3jRFFKN4apKrjsWnb2ygTWkaTs7sBXHSvFMasiN8jj5SXPA3AxzkjQ4q4ny17Lqx9UCAU4PQKfSCLnmLmpN",
  "key25": "2mN533E9ptw5DukNPinfR8fHKesfjcfJMT7afeMxd6KYNmZoHTp9diWQAqzMsA1rt68jRjAaGd6skQ4zQcyuHkKW",
  "key26": "43p5R4j9MjN63yyR3HxEmtCpSZWcmardjpkcjqx1FraePzaJ6c1EPYD1JjugF4uiGnSoWfW1ANxHQrUBY5czp8Dz",
  "key27": "nRjT2RPTDipMK8hJpqa5kQJQt8zBf4BuiwnVjcbKaanQePz2jrE8QcwExNYUtTSqU9DtAwdR3nUP9NRKf1oHteq",
  "key28": "WjagRRwXkMUqT45aoz4aY8pGYxpi6tD1qQ49HyrgJM43Yx3NmP9RWvx1KTADWNsWaRFmZJfXCLhnPitTRLF18aa",
  "key29": "5QL6JTyVCSHSNRdLcCRXSgCC9GB9WoH4CNn8u1tJAW2wR5WLEtFR92MWCwpA8pCWFWxhFk3CSyC5iz4t2UmvFMwf",
  "key30": "2yW8skw89EQ7wRdV8SmLDpYXjdfcgTm8B7rLjKTKmAovHUqZXxhCr1seLrDoBoYiJ2omxeWHgnCqbpe65KJitUFU",
  "key31": "4nzJDtY7GttUKWhZjYzwEqmsU19onAZw5p1hbdoW3j5RZbeYhtfBhQJWPdk5Lca7MQsnJ3kavcjX8qbBrgdybH6B"
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
