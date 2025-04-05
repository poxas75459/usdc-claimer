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
    "JBpVydNPc5RojmzMLAdqHqzvqWVAkDqU6dZns1XgVG8kcWAdzJWymmbPQTfCDqoqs5TWa4WYLZdNDugPyo1WkCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s9EpoMxz3hM5pip6JgbrSn7uV3XDBC974o6ZJfnXSfLQyuGwQEv85VRijADx9tjLpE6mqk2GktqbDa9gCjVB8md",
  "key1": "5m7ZKEEKEpzXYVeg9ztZxKX1GXYiHDJdCcy5DUgH17hx9vUMLXufE143wa25fAwoj8wck1HRHvMhGZeuwjxMo4P5",
  "key2": "3mDhmvv5h1qQEVNDswaNHAR3SweJbMUtjw55f2QWP24tvYXjAX3FhJBXAGmB6DdKEywjFXFo7DiofE4iHvKKK5jL",
  "key3": "4AaFnK3ndz8JDYBMQxTCLt9LfpX2oXtWj7FNTA3NErZxpbWUTwPkFxC4ubDVoEfVg9DdiaedT8P1EtbSPii2zcN3",
  "key4": "3cgo9xf34chKa28Rfk5bXAhH7V52oX9akxZHb38Mthcko5kGc3TcxwqXHzDmdfq5pywzbyFaR6bRvsxDkrKdATU9",
  "key5": "4WGgXbBgt2kUrkswpR8zwY14kGSmxfGJkGdsLDSwmGQ33XCJtsvjFRyb9JeNXRfdY8ePU6XqG5ddgLNbBjvPuJvx",
  "key6": "3qtZY6KikF2frxhrgYUzZMUStANdqXDi8EqSZLvESCKtTobHVAMTdNskosNZwoxLY5n3PU1Y6orrniPkR9qYTnBt",
  "key7": "HdoLdeswE5t7oH53VB4ByoZfrJYn1kpPSfdmuqHbi2smA9uG8GkQ3LvXNTDmZtJo9SgRLcgHX4DZX9BfUHtiudZ",
  "key8": "z1GX3RUNsEyt1f71PrtNB9vXLJWndiNdcNELcvLwmgW9PaUCfQaBNGuEc8oMvv61RMmpLuWvity4WogS4sJHhfu",
  "key9": "2i3Wp9jknucK5aCoWFjaCysfgdBBqr4ewm4zmqdXwNDVUBPybPDyuUN86iBZ89E72zxGFbL4ghP8Rsd7UKmrE5q",
  "key10": "4xShy9EDcZhmzfiN1UhAZtzcZt3aBkQjWE9kRTykZ4NK46tvbtcyhfR2ipfkH6hQWxn9AgDp5AZUPafJMmBeNRD6",
  "key11": "2sCwF8c2Zaw7kwZxsfdpRAFTaXAR6xW4CYohpkPgnjC9RQq6VMorYBn7v7g356vE8fS51qzMvm8D7SUDyB7Q1uyN",
  "key12": "bn53xLHoMQu6GaTBSSLFU1LgMEHs2QTxjWwmHg4f1wzXP7xEgPmZAFxDvh1xo2rjJgMXuPcjheqitbCGJs4V9Bo",
  "key13": "4oimoawXwQNjk8MQNdKGC3GuUcqkf3hdQY8Wt4vejg2DQAfnLm5muGYegr7MvbwpF1tW64M1NRmMkWf45yN8kntx",
  "key14": "H6jLw1mRoBdCjEUudUmGxaz9abhwgyiXepEgSfDmCnQeyktec5XcTr9J46zNJgeTVKEJUUhMWdsoSv1NoT94RnP",
  "key15": "2WjucvT2ExLd29jHDiHamukxj4DsyBgrbniFKWXmfMHLvu8mph1WUJaU4iXRZD1xHkYzPfcT9DAXN9pmZNDAs8kP",
  "key16": "2ohZuQMzRg2VGgUUXNzjvEUjyEb3QZDxot91n5UbbiizxDNizCLRAbMxr1rBMUwbK9kFZd3sUFVSZCjeedV43BeE",
  "key17": "4yZzgXq6UNZq74JEMJB7kZHmdXF87gxvLSQm6tvN74b5J8KhTr4BAECbfEgdnaW9eZ6bpcoFwudvYJ9Bo1o3ZPu8",
  "key18": "3eBFVyaeRo6MX2FGB8C3aAh2DR8G6AYV1pexLS3AHpzKV2vY5FYKQsieLLgx8sH1YpZdSgcyHfCxhh3t8CyPFzvX",
  "key19": "4KqMdzWfTeCyDiTCJ1gbhrbQ5JoZWs7yhSMLLesi29ceejRwG97CgKQ7byPTLEDkNT8KkTAqykLg8M9rvgkYmbL7",
  "key20": "7JsAakTFZMPr8ELdfEJ3YcVf56PC1XQFe9sVUVpNoA8JbgXsurAugXAoo9q1pNXBpirwj6KrE69hUPXzxNMajjT",
  "key21": "PYc5TZoQBAPGpYnbEYu6kHZFfVDX5gjdBn3YN7Ro5duwo4HSWwqgVZ4gzeY7dwfMaHsGENzpvGGEcM7fLTQggte",
  "key22": "3SrHp9qvvt84EpUdJqtep9qkiTjSn7rPm9jhW8kUhbZawHdAGUjSaVhVy3iu2vpXjHnkseicbBVNqwaBwfxFTRHz",
  "key23": "5mCHVGPBHE8RauSrzFo8gY2wrKLbn7U88sv5qXt2sEQECoAVr4chpndf2gPjFUfFTvL4HvQ56ZNhYZbC275yNVwj",
  "key24": "39bnt2jo7P9yjpTWSmHywqZ67WLqtLuYHGH9AZyRbmZ5quvP76JSg8ALSfTRmhT9NDpEQyAvn8kzFPrJrdeP7QBa",
  "key25": "8jTeEp5ZRzwCQQn7rzGBtcKiQ3hSV6SSUJkx55v3ChVjFTqEjmGNcUS7cnRdBWCoQoQXMaFXk59vTHtCCkGTwBy",
  "key26": "2YzBAtV6hXXvrmvLvyPB7G1GfTfwYHC49tw7UqNoXCx13cPg7oWHpkuhYzD2AveFbxF6HPVHk4ifcA1AGD5wH8eP",
  "key27": "2M9CXpkd5NZiSe674Mzedyih3zsJRy23hBnduFm8pkxZaQJXkVuN7bHdYCcE7N9udqQfxKZ9bHpSQdiMBqCps4zJ",
  "key28": "5s55HecavmtrHCF11XK1VcCaLQbic3S8YGpx23nHi1obZy4fsyzAeWUzHDT7Ny8VRmYvNN8SEayFekLpsYjnMain",
  "key29": "5eEwyQvt68ix5uERq7BtqHithkVoar5aduCAC2wgVaq598yY3fPHkFHSs5nw6sYqeq18JTwWFn3yRtZkCtdgujpW",
  "key30": "RNy5ESAYxptJhKN3JQkp19wUa5aq558vS6k9s7i74ngPiGGRteKzRP337YHGJT3hgbSGMN5x7j1SAruo7A1Y5mQ",
  "key31": "5uwQWvTnQnYwkpyxvSUvm78GL3ZHrrotXeqLSnxAUWs7RdPMX7EEUR4fXtUive13NCxKi6vTKphGYB5TUQmQ2dYm",
  "key32": "2u7DRF66eArWAf1Y4BTsCgC9jd2y1XWt8G8Kaiwae6X5DYZzhs4RkH4EDpd2J5eh2BXfCGL8rM4wBGuhA5zRnwYG",
  "key33": "5P1Rdbo2BC2aYmxU3kT9D3sP3aL21aG6fqwScU919QXMRCSJ32pyBSShPeZ2XmKxT2FZjo47jVdtj6bZuYjr71ry",
  "key34": "2AbhUexcFPpfsmzYFhrnuMR4hSmcTgVdBHzQUJZsKrkmKJoUATJowxvZHFzttcG7H1X1pRMNFmbLrx9nCWTQNgS5",
  "key35": "rTTMbXw7ksw7xDWEmZJ2KdVS7akHdmEe974J9Sxg8jV2TkRPZNHuHdU5iN32Nrkmj7bWaqsYrACFgCDnvLBkfYK",
  "key36": "8TamTjW5R9cw1Pc3Pja4KRWBo3LaLTwzMhPsRJKgVQrjw8h7M9eznyfnMCVXAYz9fzJ7Sc1aCfHFYj1YjdFxAMa",
  "key37": "43qvnqHLDNiDW5K7T4q4wow8KGjwkvYZc1ov5wEgBDw5o9Gw251rumAPT2nqEFW8GSdDX92NXqyEhk3fNutEqMUv",
  "key38": "J9ddcZboVJdgmXHkk1HNm5Z6GWFiSqvtgdp3fnfMNv1yzMh6DYHfCgZYwx47srB8rmBwE7v83N3R1bu3t1G8gjf",
  "key39": "57KXzKBnkkwTdyQB6pGjSS1aBWVRPCRmvGZ9inotcvGj3GXnmEUVZJSyc5rCXJUyAWL4HZ2Ht3zeg8mbYbxEyBgE"
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
