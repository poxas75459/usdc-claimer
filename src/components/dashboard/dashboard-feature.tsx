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
    "3BuiBbGYkNTSmL4ib5tjwVJDha4ZMofax8VGs77VjZ4VoWx3MPQ8mW1UNo5zRZo7FfNo9S4ybB3rGiEd6GVnwAiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dUcEWUvfRfZRCu3v62r2o7dnjfuj9gJJPn9jXHiMiJSUz87AQPCtnWq7p1Ywm8829EXikJkCvsP7Cgg7KEtSu7s",
  "key1": "63hwTXdzrqA3Dhf572nZSxKgadhkMqVodWzxXmqHYQLvMhkpd9nEeQ2cwifogFLAEZX8RrdHcp99nFv6BufX52W5",
  "key2": "3ohyvHuB9uxZ3FnB7rwNDVaVmLWpbbYBCzuxDDHv16w5C6sna8xMpEEedvtKjmZyXjGz2hrig336uEvYpnW1qEPN",
  "key3": "36Xsjr9TPwEAfTyqBvE9J4BkDvZqutKXnCy5PUojiUabXJZSgGmaXRtKo2MVG7wGTFUvmKQA2oGGzDSqHY9SFahP",
  "key4": "2wu7aQTF3jDEfBwUmkzXPyANQTyP5kXU8kEDVh9d8Ve7wVJvuz3YGp4q4in8YDTrUVveBWgE6JzAx6CnCXQkGj28",
  "key5": "3w3Kx69D6PSNHnbm8LR1VQE6QFGuPPhFw3fVTz7Dka2MTJc9c8Jtr6r5g7HiqhozDTSddTtSWYLWTaSkWmyHxadA",
  "key6": "2Ugk726BcWxzzcMM395xrjSXhNY6qym2537wBY9Xas7H2ygB11Cy2GbaBue6n8LUVg22TGbPzjMsp7q2MFDz4whU",
  "key7": "gR7cjTPRsLcbBKbQ4ZN45axwfQvbqtazQAc636hMYTKwFxotSgjeRdozsctg1ZDwYDj9LTiFGLdJDY9vfinrfTS",
  "key8": "626SYdRZDnp81AwhpkVw11pnyoDojr1YyuHpzxXC5nZg5eFeLddQW99AEVZcVcsv8Re8EZrny9wkjDyUi9uBJpga",
  "key9": "GEXAWNy4L7x31ByHedtGsnLuzAL1Q2uHeBDAYvPr2k1NGwHkeMRgKKFp8cB2jr365jMf15V2MNUg2N7wSYMBQsq",
  "key10": "4wG355eKLbnvnobPDxweu7cTk4czBpct5fNaijvsto4fQHeF2Pte6GFpDhYjxz3wnt2nn84TNemGnFjh3B1pTjWy",
  "key11": "3S1LVCqTTCrJwtHUXAKZzVey8fVK1NEUVvvTm9j3L8ym6DNVptM6sAp6BTPkqz28BSAVMhTWTzLxypwXVNkHrrHV",
  "key12": "4hVm9cxz4koM5m56R4LaCGjxjA22XAyURoP5VrTyq3meX7UojbrZJDSkypqy841rruGpeYko5VRtEWCZy4mMwdWo",
  "key13": "3NA51FTunoAmSVJYYr7jUDWoFZjCVdH7em5ZuebuVGvjgYHqjbjtYVZPZuaFxcTSSTAUhF2t4djUQVBwAbqXX4ky",
  "key14": "NPA5qP3BwYL8yp7wQbs3Es5unrKTPYD2FLoPAdh2c7ASvWRw2KApmAp5aoeeN5SxZLhiGutg7Cp7sfNGgQqvFzF",
  "key15": "3DaAhS1YR4SsCX2ddXy5RNtumMQEsQfS9Gbia3xmJ14hbTv8TLYC72utzKNVCP5VVW9kgXLcaXwbwrLfVCKhz6Jp",
  "key16": "24L9UT41W361VfAkmPCvQLd69PQMC7QVAMp82bw89EhMEfip9J3QfJrjATdxB57ngy5yspdKrXx7u4diGYvE5bm4",
  "key17": "3JrEQVwQc2UjebtjkegUFakEV55DvRvt1KoWMu87iVTbeBsSizTh7c3XTknqoTk9mqFXJ4srzFbHrMSFBHtyqb7t",
  "key18": "3Td9bpBqHXNkCgnkzfDkTSsHuYJQUmUV7RdKCWK1iVztkaqCa5bQfRuxzYMa1Bd1u1QeiZyMVGGphpp91ZqAA4en",
  "key19": "3jqYVbmoEV128TBdmXZ9DJ3h2sfrS6ss9LZ4Jk1DCp4oRE4yorQV3fehwsjJ6C3EMFEb9kNNUFjsWEt3oKFcRjKf",
  "key20": "joeGdpXrSzcEXZzYo7qv57eFhVhqyfp1oqSms2Wcittqc3kEnF6vuD3uyddvG6e6eQX8d7rBotiVe9s2QhXqbBS",
  "key21": "52R3nftwvX13A2jPzMof8uxU4D2478vMWLYAgZZeWFBzSnzyDdxeVLbCAqfgMCwpYDBQijeMFVieRCwxt8hoo1xC",
  "key22": "47qBBAX88PN5RHEbXEkwvA2tUGpyCSAJsUtM8f8DjJCrLkuK4q5tGyqeUfR3EKx2wGFRtfdsqsNwyZkjoH9o8bcz",
  "key23": "3mZ1SkqEXFTqWtAma18YV6z8we1nfSUtrJNguN22HnM5QzXo5RG9ajgNLazEoyCWez9GVYtyMRDp2jhZPaNQ5V39",
  "key24": "4wefDyrNproFA7fCJYbwKVYMtE8mKAztbjjiyryLU5gkEy3bETwNEYt4T26xuApzX135UPcwdt1nPV7vxsJ4jvN4"
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
