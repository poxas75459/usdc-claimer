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
    "3H6r5pDNXmEPeVtEJRHiTb3s5M53ZC2metbsMWJDNAtwznTpcW2ore1zJfXF5WhQ9H2E16DswrPtLimiVtuHZSDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2at34ytYUouzh46SuqukXi54QVQMvXX1CzwwcXYDW4tB4WVZJpiJAHqKmZiJwTVL2rXDLvDpUi1fJEzyd5ucm54L",
  "key1": "5oMA3gY2cGxykz1AmG7Ndw34mKMyQnt36B9A7cEj9pa85PUfW77uRZvWTK3GSc4A75Na1N8GjnXcXiJKsDsNnA94",
  "key2": "2QfqVRpmTT395p3oRP6Mk5B1Etv8qqEJpAM5d5vEAnZHMtpUHz59cGLosxZCHbFs7726krPKUbtaymjbUuFcvMoH",
  "key3": "52VN1LShgY72DaJvoPZVZZVp35TGRKRJZK9P1fEwHsB2SChfyhBgDp8WAC8U9yKDY9Mz32quwdtDnXp4KsqTocjW",
  "key4": "5cEbTKg5rVfX5r3fF1tJLUHmo37M6qSxjiePTw6xeSbWREKFPJHSySRTF1zMUGTs57ecb9M8td1PX5w7iTCRNaDX",
  "key5": "3k2L7GLkUzWib7WpgdVpRzKrS4jS1fADXxEDasvnP8mAqHCHNaPcBYPT14Q1RE4fQqD6SvDXg3GUoXaTg7mHYroS",
  "key6": "2q6mjndtL2EdvPQiVZeemn4Wv33ygwXQcSdHXb2uHMpQS8zvQZhRmPnhPbHGGKSRsH7CTC5As1dsg6Eq7XwdZkwX",
  "key7": "ZZGT5ggZkxkzDPCUj6PzT5GLcWaEeMUH4jp7eQHAV1aj2s48F834y8R7Xezw2n1yo8mcCXhG5j5D7dN5iS23Lyh",
  "key8": "4CL1Dtc6ioRSqCnKSZ3JyqvGoXQqsFpujButjXQ7RgzrtUijB6mVrYe1d5bLemwoaURGWFYeHQ2DtENGiEST2ZTq",
  "key9": "3XH9e8p4WsW3vmLZawzWr6exRMW9V8F1tD7ewQ7z2H6yoq9XrGRHs7SeY1srcjkMiDkckTXYuB857rd7MGwQERJX",
  "key10": "5P3Z1ebjphDZrV75jcgsn6hhFDsDttrdpRPkyQzL6YVsh39k6TJtaJiiXnAAfz6CYCKitQUc5A1sYfrEtCFnFPWV",
  "key11": "2pJARCGG2cMjZxw3C4JqCUK8E9Q6t8LM24avQtkpCWgMdSNKkeGZ4HmYrpzqfSauWjftegsX4x4UZ3JzPdoNGsFE",
  "key12": "5Yk27ahstXqYwc633P38n8aNf7tpmjZnyQQFMn3YFUJVqHpdkVibCqqsxgqSi1NZ4KzoHKs1MBzymGdnP6LJAeWg",
  "key13": "3TRsw4fGSb4GQJh4MMafoZoxvMG7oKj7Kj6fSvrJEsUwDGjdbLT3AbjU3EDJPwgb8T2NMu4tJn1AS3DkyW4SWJib",
  "key14": "2Z9hSny2adozSM4kgUknRmZNP7AbMwi6gPGsbpnwhwtGurw4WuKenv9xLuj3nq4NBjtLUfDwCK5CJqcCCh2igkCs",
  "key15": "3KbAf8FkqdCVkbeEfQb9BhkHEUvescMsdT4nfxnFZY1ob8J71eGdEMrDaezh1jo5SbKgqkQXRARxZZSarj1wicpB",
  "key16": "2Ey48odqF6NmR8Wfz3Qj5FAw1f47qNVsaHHX8xVjCmfauceD76sRuv5VdLxvTzqxdXjUsXiH3DPTGDCG5xvrK6oo",
  "key17": "3u3Pgfd6bBwLYj1WGoZDWUV5PjGPCc8ccnkUTQaWWpAMK5YuimvmD5ci9NScpag4KYU5AL8F6MrAbeF9hMzfXf98",
  "key18": "36JYMb11SNaZpqXxbXwF4U8ob3CowSWRvRK2cRgBgBnLcom4oHU7S3ypZxqcRfXgTbprbgKZEvjn3yPcm1dkkjyP",
  "key19": "QfsnUeqdSS3LF6auZFGwgUcR5MqLRD5FB6rLHAxWUSTTWtS3ofkVsEZirzrd8JXqjSU8EZNnPzRgE6VoBPndxBg",
  "key20": "2kmQFKNVWzS9L6y2XpZcUoe68zD32T6BodeeYhNwaJdZ6Cgu4LjrZE2LAuWAXrt6eg9KptvPmuukWN7iA1mA9BR7",
  "key21": "3L6e3CxnRj5ZrFmef8bQAR1TA8ChLaxJfheqqxvKvVWRDueQSZD8EECeqQvD1U8pWHqfg3Bwd5X58tEPTofjQ5ya",
  "key22": "4qiDNCS1XZq252LaB7pzniS6nh5fARpxbgpsznnw5px2QzuBWscrXpHGpWjXQ7Sqzod1cHK2Nc8qGRLYHHqKzYdb",
  "key23": "A7SzZgZNsXdGZ7wDVanPUgdx2Q7SjyA2kdWqCRGwt5HAg9j5dACdfYqWHzRTUq4gvzTbr191aPXA3NV2wXn36hG",
  "key24": "3FXxjzNt2S2yWJLi6hPrckyjuNfVw3qxVoErfymcJGMt1qMtv3xvrvLy8FPWuVCEyoUFMMeTHugNPyB4TF8eLx5U",
  "key25": "G3VCTH3N7JbyqK4t54fYXLtn1KLEqfQ3tUN9bSqWET54siyJa49ou59LHEsAvMQgehn1m4jNvJpZndswnbuY2HK",
  "key26": "3kWWnhmeyyZa4MZvYTLoobkFgKTYeNZU2fTVTGWsnCZ3xPq2SAB4JiGJA4ktobuZmHBtHkN78dn235mVyT5LsiYm",
  "key27": "2bbWzUipNbGrsedtFEbf7LNGC7rxtLpPfSa4Nnij3S5q59ShDBUGzfhrmLfiijdQrQmP3S7bW1kdSL9pD3spaJVe",
  "key28": "49cHr8pzQ5WpHc3YLGUyrFNLACYyANocDdYnSqAWP6oR9ZidBB2Jf3raPvY5SF8VCxU4wvBDh2ATUtkb13Ei6h14",
  "key29": "4xresDNfXMQZ9GSL1LN6nWvK6i7T8QXXnGzZiFzaC39E7tYJEDEzNmh2vRr3Hei2NGiS2E9U31SWwb6TJbmpnaDe",
  "key30": "3MthCkhJmJ983w6XdRhXRsAMhATiq4VfyVpB8WMyx8Mmaib5LYza8jsZg83UEBuq4miHhSsB98DZSyGYodic7Rqb",
  "key31": "4S3yzdpPDR3QxAga7yochsoCefEs6RA3JAyJUYGj2DunGxNFQKmsD2i6AxX4SUZgmuxpVwcvLNn6VkfQ4aTNFTMp",
  "key32": "3s6z84pEcnAyK6azgsVem25eZTW4Z97Vp8SvFzX35M3kmh5bd71XcYueYEMibKNmVaMpKsNxgF6ECTG2BftJLoTG",
  "key33": "3fjpVJEnh6BdH1LrnpyuormxhbVZicUK5etVs2BPjLY2ePB8naD5nHPP7VRqs1bTgzg1PDb8BNgWZifkxhFWKjF9",
  "key34": "2jaCV6qCYBUEmo5fqRcSbBGaQbECNSgYEMTJyebcBQftnpPAc1G2BRNqKtY8Mp2YkYnPVPeGkFPS3qtucBVVFXfp",
  "key35": "5o9WWNDN5BCpegEFdV95h9sRGRGhajLCkQNvbjgc7ZGi2KXayzc9ZnhZaJfXGY9fptJJy9Vm1vo26dFNAqMWVmoy",
  "key36": "4o54G5ERKZ6Wmxz9PTb4MjrydLTq89H7HhgA1h6ZdcMHzEy6K1BwRxKHYzXSNW6QD27rAtGTs1Xtqoj1SUrsahcs",
  "key37": "5oF7M4oWNigMTzNzpFEYkKhkdpCFZqfdMgpm45Kmq6Wqm8BD3JiBWNafAEhC2Doo1RiM4hsULApZWTw9skReujC"
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
