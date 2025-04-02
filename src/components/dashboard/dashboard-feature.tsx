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
    "2YyjTwyyma2mqjYSYBou2ad5u7yRV69SQBsL6wtFuRBEJBM8VgM9eAV5uGpzwUJ48LgKxsqc5bEihsmNYZm8b56N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vBgHJXZQpB7hN948xvBdddMCxqP7KupZucJqFbhHTuwZmpzLHW69HHc8yEKwWspcZZqXckeczA85sc2iQ3UtBMX",
  "key1": "2WzaeEBkGub3xFC9UX6U7QA8p4hG3iuncbRsiVywah63QhCaaD13inGgMbu1r8jpD3mVmnbew41s94J6qbfZinAS",
  "key2": "2sS2JLKV1FewLRWN3xVQTAh4owzDS5dyD7aBNHk7FoMLWBNXwce7fQ45J1k1Bbs9tUzrQ9CXutuP23hx6fYDB9QN",
  "key3": "2YgvUdvVog9JtudasrcjmR5U8L7hFXrkHMTnWvtMY65SKfxd6yhrVsVKiFxf1Ue8t3Uaf13NXvXTgdJQY4sShBvh",
  "key4": "zVvd6mnpodQxjFDPdVrf9YaqKTddYrqwjodGqnQPNNX9nFfa8mRKynGFo2n2y88rbhiqyYGJBVvMoDwQe15bXNV",
  "key5": "2Cm5FrJminWyqLh5VtNUpT7coCh4VbRfBWCCm64W2Bad4oe4HfkaJE5JQN2wLK73PeKRmECwTRSow25ngSaU9siQ",
  "key6": "GPznRSkZNz3UgTjWidHm2ygtgPJdfga2VTSrQPiXgieV2L1fxPv35wzqSzSPF6D2HV6mym4WG4wpRLNkKWhsoiQ",
  "key7": "4B2z5639N3skrYS6FWUKag8CDfirCopwb4Tk8WrXegNbBgqZbNmBb69DEmdYqfhM8kAGwCzm9mxUnAwudY5BXw8g",
  "key8": "2f7D7w4sHSgkj3YEVcseTT6TWAoNcUBJb6TxZ7e5acfQH3nLs3XaozKZRD33gaesfn1eynMS32SsirUQWJ7cdG2",
  "key9": "E37CrkEctor3WREKmsNnRWQ2hupcnFXGv1QrC6MgBti88NhmAD589kQrGMXRWtcv8uWmhnqLENCesDkp8Ag447b",
  "key10": "381mmuE2AvzKnzWC8DFs3dUeusMwFkdqpH9GDdPVPP6zzGdhWbk73B5eRscm2DiBofLjJsvQZY2UTMbpgiDDmevj",
  "key11": "2SPn7ukdpbhNJDPXbaaDN8H7J8QgjsuYbNRNJ2qGWyjhXsQJ1ifMVqa7uo9HQmcJhhQYnUcYsTCPTbRTMijDK1t1",
  "key12": "32QniLg9PWAfZ6ZWf84a4ft6APbuEbEBSwuL3bVnDvnG3wDpYpB2QeFQ7kCuo7XYPkQ24HdG3MvBxcaSwPDg652N",
  "key13": "3YGEosdku4n9Xc5EguHSUDybDgT9GmdugqS9FTLVXmWAQcRSQV2HzLB3ADxdULzZ7RnGWZ1Zwk4Sjq53sbMLa9WU",
  "key14": "5pzTK9gSKWhSq7taCFMbkrqBcsvg1Z1zvCYLJNRe1ycquyHHRdba975D3e2zBQezAToR9SfFGr6aFdkGpz4Fp1Kq",
  "key15": "uNWKNfCwCaBNdkj6Jxsqgguzt93e5gTEGbtedx1TLTkNCm1cw5gEAxsBj7GJpNgMtcSuhQWn2ixaVnVZe9NBUjG",
  "key16": "51gU41Bqjb86q4nM8ZoJGeMPUpF77SrGr6wAC5EBMV16q37BHs51t3hFUXvPHFrkRdo3UutSw6AcTBBDPYowSyuJ",
  "key17": "vkckiQysy4mpq2AesKVtXg74QyUPoGfVrbd4yxhNQE8e5iryneRkcHy1JJcBkcPx281Ge59VpzrBCvE16gx5zy8",
  "key18": "hEpaJTF7zFD782Nf9YpFWX25QTrZ6xo1yfrv7Uq6jRY5rfAWu1UWNUEKQP1wPYQXBvHyUCwYbjXQwWLVdrVVL3a",
  "key19": "5W1GqtngzsqdKova1k9Nwz6yb6cf3omCc1FvbnHfXF9Y5yWKufk3N4mJPCM1kJtgJKGnXzQEBe8ZEEKSy7EE8Y98",
  "key20": "5cEj3vZUTLkRuFir1hCm2hRzV5E1P3T8eGR7fUTQdUdtfyrELjxZXQXgPyFhZyDoCHAwQJJKBKggNKLbvd6N8HVJ",
  "key21": "2PEKkkLgshsm7Z25nmy4PNmjiK8wpthPhcxHJE8KtDMn7FGnzBxqW4cpoD3vdxv3DvTN2PACqfw9o4eiHqBNPxoM",
  "key22": "2z7zn9r8McGAGr8yAWJ8C5WTGV8mYh2jeo67J3bCW1FP3TdkJGTKCM2X2bYfDD38mxtXSAn2ek99HXHGxMHUUUkw",
  "key23": "3KWCmSo28rpLHNDeqMoWMQwvyf56zFyfyXC4Fq7eDMpmM9hMEKos8zozfwQ9i67TjNYqxnTsDzqqzoWR9RWbq4Yw",
  "key24": "4tYgLmaK3ZFkhxDzca3qWEyzLQvCvHbioc826Nc4aounNJkdEz7623Km6VNb91HZudScGXRYsFFUePJcfvPVN6Zp",
  "key25": "64hBxayHPQpHvQj3zpmrVxEviRuRibiPMXyxLD8ERW6dERcGf6mX2PPF9QkJWdNBef26Kv25NufhEcbmxsvbCvof",
  "key26": "2xrWdYVHEyKK7FBBnCkXJGXdHjyzpqHyaaC8TUDJp8mUXWS6Dod9tGLsgjVoi4sStfiY8JDFJEtg86ekjZqV4aQ1",
  "key27": "4NpFe8wsfyxSb9ifbh2HGhBZ4MY2K2DzRycVW1XNubqeSkLUzFtuphVwWSBNwsfSUHeQxCowmxPL6ADM1KdXN3RB",
  "key28": "s9BJVqb3NrUxoDkJo4YGfcbhBELGa49rWoDPExx7vCbNsUKigQ9KHvEuLPcZMSdkR3UhLyg8iqsWWFxLPhxR5EK",
  "key29": "52jMdwYTZ8VhgK4hT2rrJTkE6XK8vxuCQQPHq9PHRSGP4ptrHgAMXqZ5KzEEh9TyoScrg6muKu3sc9jLRV1rrv8W",
  "key30": "2Ahi7aftWXB2Zn2X8ki1hbHBUV93XP3J15A6P4GBWVrcjYMBPPDQDVHLk6MCGzrL9eVd3kYPKg8j8n5K6Atip4fd",
  "key31": "2paF922dmDQG167Tz7sVkYdC8J59tKti91u1hCNKMMZ4hGhLRxVffm2ctXDWEAP5PaXV6xW85zKp8fwaawSNiKFU",
  "key32": "3MHhJNqfvyW3S1p98LSXk8GGUv5QsLa1KUZbZ9Kf41393eA8RabZtakuiD9y3iu4vu3ydbHDiL2FaJPCvfbqkWxv"
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
