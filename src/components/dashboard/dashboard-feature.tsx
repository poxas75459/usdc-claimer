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
    "3uBHF93xszfg1GwoH4YPHqcd8xbkLPFz5iaazQ8D1qXGQpRDa86epBPV2pNngfkz3NfePrgcuCEz91cKhqBmqt3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eDFhXsmkjFWRVHfVGKFdS5bssUiCMLGyC8GgSaW7Z3m48XjoFxgGTipZRtNP8noV7hjqPsasB2By2Y75CYnbCrh",
  "key1": "43bX97U9xSacjeQzWuvkFwffhD18jJ93ZhWqRatrc6mTbQroGJPkBFLvjJKv8gg4YtiisqgY82TX5nFrGR5L5JxL",
  "key2": "2jbHYei5fLXjrbwz7p319EfTnnADzAra1LdDPiD4T7Qck8yiYv9mbVnuyQVXjn216WT2bc7GeZ1tCmrtcHDJHRka",
  "key3": "roGG9dtTcBgkAtr4YoBYfz6XobVMdYjdk5DRmsxHfkvRfYj4ozvyEWJEvSaCXQeQ3EzpBNL1ocZ6MdxaafqB8Bk",
  "key4": "4wpKuXg6xBMoRWo9vH8DHLz7Ridk2mMGMueGHVEppV6pxTjhALSvvHEHSPmsipFdHGr47HRbtTtfUwtFHbo5xaxn",
  "key5": "26nuXj2wAyB88D68R4WVJQPVD6u2vDCAgbx8XYeN5bMnjU6e4d4PYfg3793bGAKaF5sKLYeyBAhsbSNqLwr2hNkE",
  "key6": "4QK8BxPVYmAXZRK6bSmNFQfN6EsUqyiStddv3iCXoPkpphE2LVE1enLyChcy9mzZcbChmiHb3TSAZAZEmY8WAP7p",
  "key7": "eQidRt3NUAxTQcRkUM4UqKMJ9h5f9vqbcShD59kyhj3CitMz1RLBsb7Z6NWVu4rYKiGiS8aPsD3PFon8ys7t5QG",
  "key8": "3BzYqwPK7H866Bw67UDa7VCrxLdkiLuG6QR7ESWokK8kY7cWmDkHRTywGWy3Q1gmBBdBNrMKa8zsb54tPitmdBpi",
  "key9": "465dSgawMt3ARwsZzLu5aVLJKZGhAFYNqwsNnEWmNEh1ud2qkeMQgFKZpzQ2vPh21rzNYrV28Tu3jY1Gp66BHdvL",
  "key10": "5oNw1PvJCc5EmSiqy5YMJYnseFgNxY56QJyLoddCL69Zfr8hnqdqEa2DzWZf3jTGhACHn6unHiXkwE2bdQWMDh3m",
  "key11": "2yv76uYPsBQs7DutjAbmp6x9XTYrKPWzVPrzojR46XHUUsmvrMD9gFGStrziKAwsQodqUybZFUTcFHj6GPNmymaP",
  "key12": "2T6LRAgi3nom4i8xxmTPk18kDKAa6wvm2p4BiP7x2maJHuFEjwCYX92iMqRvfqzTNNitkgQgDTKqsQ65Q3m4mjYT",
  "key13": "2dSRs31UBxbR5X1wugzEfWTRH2tbt6mSyrfXJZnKWCVuUUXXptrr9hkZjTosM8R94AuZNuZqkYpgLszdYYtcWLDX",
  "key14": "5UdaDHSi7CTnGWbCEuEVeJFgf3iGcmzBiN7ujMJRPg79kc3FJZAbgXNbFMxbZYaa5xrjYPDfqyJNqihB2XJPKbZh",
  "key15": "4R29vdtQUne7fTPY2AjDTjgWGLgEhJGF9XMkvJEPhwt5Y5R2jCgPvgSi3m1UmLL1tLZKRmyXBujGfQg3xqocHPGX",
  "key16": "3EvSiqRsTgpRqiVf4SWaT7wfKNja89RRkt7Dm8ziyVJWaeoeVEXTKb3XtPBo1PFgPVeWzQU1oVGKmo5hHgbgzPtW",
  "key17": "5Wv8tDQcBWeMXSPhsbPXZtN6R7fcAwNzqTwUGHksMnTUyii9XBNW9RNAuvzZWk5bXRGs6gUBdsPA4NQvhKjkXQ99",
  "key18": "3nrJEeEdP5hXBssbpoPdAiQaGQCKE69bjJg3yv29TdoPutze4Exi4Rc47Hm5aoGesR7c3CszyVEG5faLopgaReXf",
  "key19": "WtTdgBZDaF8Y8hAdERSLytodgCvzvtxkrdpabtcmHeq7mzdgMue6Hm63eFm8oZGjcCuWVYZoHjyjzDozE6rnE5w",
  "key20": "4mmFo8UTLG2vgZKowivy3VXtghBRe8k6mcgGkaLcAdh3kAFyM2MNbtXU7wAFjaaRCUQvSjh7FKUnsHHedLxSYXbN",
  "key21": "3cYCszpow4XGt4neas3iige2fUf5c1XoNKXUTJZN2t4ffoq1iXjQmNm42XRu7wfDTg8xHPMGbvh8FCFojG92c4XK",
  "key22": "5Uqha22EfNdULnzTFJ7LXtmzX1kEpzoASzsEEnGLb6knfS7LeCoUmoz6g7SYfkiabkSb4v7UKWi8wvUK8MiRdrqG",
  "key23": "3DhU1rbpRJ8wrv2p5sYBNBuMUYhhTmoTyK1TMqmBZ79CZY9poXc628L3F3XYTZNYhNJCxm4CWHe4xtLdCCznabFS",
  "key24": "4nTMMy26ZV4gTSDp9JNiZF5JNWxc5LhyLf4AEdQ3wPyTr3Z1ZP7Fp1C9ZUCMLrqqTjG1BuBGCrw8JTb5RnkcVW3w",
  "key25": "U7X14uQEWbEgkw4HTd7cdSayfM8WWVvQ5SDpThzEV8VMA9ww6Vi2LZJVUCsi1GAPnTRjvSaBFDmmNH2Y4fmKCA7",
  "key26": "4n39rHFtnHGLyCUiCTrfNiCePapHJ4bFNWaGqmFXwZ2obvNHnspt9r7Fq9PzevujKKLKHypC8r916JnMn55ZFahS",
  "key27": "59SQcqVkaNnFGHi1so8AAjqAPmvvysjfMssNJHHU2sQB1HanuemUVLEACC86qPCYzB3iGnPpaVPUcWYP2rJA1GgR"
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
