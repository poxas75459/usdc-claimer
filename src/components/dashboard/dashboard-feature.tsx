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
    "25LG5dvCjSdgcQZLy9aTbXANxvSt9v6epn2FpoTjmVgam9jfG4kxMPyfDEz2gAvCsj63xDZeeH4qJXpsyvkFhtFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u6GyLbH5jdDj3UhkXVov7a6BY9Fi6ATguEQvrpxc39aXU7XtDo2payFhLQswzBdvJHVExpKm6HUbxnSappWgYdc",
  "key1": "21u9c2M5XSNhG2NTACMMygBBDZcwYwX8mTKmfAAPqYpKw8jNEGy3V1Te8cBZhUCrCvFoihGEzDnZ6tWHT4LbeWEc",
  "key2": "38ZMynwPej1P43d3JmEgpjLqEM852hUacSHP6pii5kxye3mj1MiTKJDdE5nhTAvAYoN1T29sW3EbwQo2qk7hFsW5",
  "key3": "rdUWBZKPBYUaodC6ZuT4UaFVMFdTsJytr1zhQRZJBhBEVVMfQLcjyXDVMRGrigeFgFdakjgActhf1NuXUs2VVTh",
  "key4": "2gRyoygCbDCxNtpyZtZJ6jtuR6vAabPHqjk5MBU12wQX1iez45kMaQTssWxu2a76LmSS3uVvy7qqqHx44JbeSLay",
  "key5": "rC6qBnSekrmvuQBS13uDuf3co3pK8LfJBmCwEeyaXLW5K6DVegqUgvCNt2YBxwCAfF3B72pYX61Bvh84oTgyubF",
  "key6": "3R3gAK5uQBpyefS6biZ22TxgfZFDapNWFmHa9taaFWua5K5RPSn88wBiHo1U4TfiJUya8dPL84ep7jSh4GFRjqnx",
  "key7": "3tzS2LkF7yPu3d5u3Y5thCgbanmAed9QDQTXiA4W8sN7HZ2Eq4tCNZKabtyt6XgEcoMAAM17mQsCnNUg4d7atoJa",
  "key8": "5CiLich892kWu2TYRAwRCvuS72zBgXun9RrVsuekcJtn5e99wFiu2H3msNQnkNXaTaj6HnjmD7CpLxvi9PWfw7qw",
  "key9": "qa1cvGW419P3KdFK5UfH6R2RNVtupKc6HHk6Az2TH7GGNQ2RXvNtc2B6tXHEHj3CJKNJ2k8d4yGeo8ooF6LnGtp",
  "key10": "2dFzu8d4wptnUTUg6e11j4Rb92aa9iir4BVNwfPA16toj4Q7EZ3d2Ezyx4JnjpJ5XQEVSgsETpWNRrnFWngMY5mt",
  "key11": "2joKrLM2earGrXPPwgLwCSBG54KqGCbqPBR7VufUGRERLsrFUm4MFDqE7K7P2R9yLJv9ZVWtaRkx9ZiR2ieKqVYw",
  "key12": "2a4fwW8jwTDJ5q5mrBcazM3n2LPBmfj7eKKeGehpLhSEv2DEwsRF4odAFKSx236dk4WnqeMcrdZ5zAJoW68KcKqc",
  "key13": "28mzYppLhzQGyzQnsEu1TuMehMT7xemwjDYDZsuVxQiQUh4sHdhvGALAtZNwZBvAEga4wfph3GFwxJ2E6WNx84bd",
  "key14": "3NoZJG8ddhYU9nqjihUpsFBgg3iE9r4xXWRGAYs44x6qHKEjJyerzh9tShmZQAVMByNbsC3zxCm9F5qSFdjNubTF",
  "key15": "2Du9APfaiLsJdoSTFXamQRgYnWgG9BecfhvBuim1KjWHJ497BDT9dDM6KjRSwbJHhZSbq7cHDr4S8KNds2vkqNR5",
  "key16": "4uF1HXTiSNe17CpFDNSCn1pfJ5UxNoqNah1nRRgeJgtgwpQyrD8t6bVEXGX5FV68gQpeaiUjbR61spr41stpqDQ2",
  "key17": "3cMd3NG6dvToUKwcWAozPoTVzgxFRVp3FP6WWXQmNKCNbj2fiZ2spe3C2CmzAVBfTVt4D2rEUkJsCpUySnV1iN5z",
  "key18": "2MTiyvd7Q19xER4C83gM1v6v5XHz8ZDAKVHpdtcMCRVh3H5UcZ2QZfvTt7aAQBuoo661KJH3CGNdAqoj2CDUvJMa",
  "key19": "4bM9bW6G9skE3iNdtstHmBHgrYKJeX6bKZ59HR5s5PWTt3EoF5sEH86uP4MvT6gumih1kbo8WDNxCRuc5DHXnstz",
  "key20": "dnsQwvSwz8NREngYNUa9eEZGW6t94LKu9DR7WLuPYk14vNDgrCFdGUnfUpbCF3L4eY6qWM5EUnNJXMKDarr4tye",
  "key21": "4EiDesXHivpHX9Ro9kmtLN9bacysJ4JPmS9mfoa2esfQ6cSzBeKkEJP9CgUUhTsb6AVCHyQCjCSCBUeUYo6hNqrT",
  "key22": "5X4H1Umw4gRPct1Lo3KsKpUXAKLH9PrAzxABnJHJXg6qoTLGzXhK6YD6ofi9zEXZUorYHDKd5ANh3g67yVdEd6uo",
  "key23": "5Mn92ufNDJdkcSSveXDcYfYEEDVWL5MwcvuYqzcWRvY42EBnBtdCfV1t1jRwpFoGVFx2cX9795b5Pj1UR1XcUz5N",
  "key24": "4UgBMJ3AfVKpEvZezV1wVpGPnYHSS4qXby8qoZ9XhhQFidjVZw9qZHXTGsW38vAbQyCZirjtF9Ln6mtFb7EjNZcU",
  "key25": "2U9ifJcQcqorJbtFxar2k678xUpYCoKqCWPb1B2jVoJGSgAMzdVRrVcZJGH7K4VJmpQywSAa5ifUyHh9kTFJD4Nm",
  "key26": "4kktd9jtu6jYqCCLKEjCYXqL8HaenzqiPoYQidmn9PtRpeMc8bbBzzUVVh8kFCUJ2BB4Zdk6w13UXuAAg7hkD4Ts",
  "key27": "2YPQeUauouGFuQJjxRFPYKzc7t6NjWRR1VMwU9JemJeKVDXcApSdabX6pfo8hczMZhizQSTvQLun2wCjwC7qS2tv",
  "key28": "5sCUCBy9sxx9DUYRDAhDkhxfGLEYN5UEQpYNwW4d5v8HRmUqSmc4RRP1bq6fcE7s6ycD1rkVBYFELXyj4xREBY4P",
  "key29": "GKLCmJEEoybTAQfewyy4cM6aRgr6AByTo8N7MpfabZhVgqzMRPGBvTd1r8fdCGAN5sh8PzQSn6Z68B4ECUbXpjY",
  "key30": "2hxourMuujcAC48sDU4wCepeS9F1uJJDyci7ZMgLPkPPvcDicy4QAsd2q1YpAmkuNdKgh8NRM5fJtV5tTnhfpZaK",
  "key31": "Z4PxTzcbL6ymeweYm8Asr3jmWAu1pDX2HHnqGmomwV48WptqDv6NaXfjHxLEgv2sSiFoKs5qGhr6TWhmddT9F9V",
  "key32": "4vAViquSkfYjxpEsfippGkBwaxbv7YUBL2kMMDxuPJpHUSiHUAN6MquMFFCuDL4EFU26CSveBtdQXouedVPUSykU",
  "key33": "4zA5pwEszbM3zr8k9g4z2gV7FdoVGB2ztUbay2T4M17CLiHnAeMsAGCaEQh9saGaF2DiXHJBj4iQesYDotPJXXF1",
  "key34": "5cH2XNXHgMumhFYc4kcg2A7EeBKtCUY9eXUysYo8tJ3bbrzRkoSyijSwhmcXDgzh3x7iERM6vCQujfjMmkHGmTzG",
  "key35": "5yYi4dRr1oNfwfZpPZdGMAiwBJ3NKSfJJufiRXbA8JyAJxTmrgrY3jFL4jJbG4bQe5xeDmkWq2dSSsszSeSX7SNg",
  "key36": "jPnAoNRjoH6NS9WAU3uvor2eTLrFVAvJQiwEWFaY5e7BJJpxRgbrDxkiPcjnDrY9Ly6taN7yvxZ8cAVqYteMDuy",
  "key37": "WR165pJGQBUXvXzAizBVDc13j3d77bRGK4GaEUykBU2cF4fbNd5rmXCmAqKzxpCykLQp4L8x3BgkohoGqSjLDaZ"
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
