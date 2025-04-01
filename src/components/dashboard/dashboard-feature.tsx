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
    "45gyrSYLKxU6jwX9jNtDpWW1rdbNc3atLHN5rwy9PevoSXmok64or3pBvJ64AnXp9u6HDXcwCXUFoFe5kKKG7iXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44o91ZLQERv1esuwcPR8XVVueJ3QQ8WFZZ9PKugLsqZnxz5UJ5qa4PHrobVmaq8AqLau9mJw7z8LX8W677EUzmqy",
  "key1": "4yBdDfXbvpN14uj9ZYWQ1wP2zSR51THbdira6QDiEq9UzmKtkxno6Su1JbpnAgYNDCTu2BHGD67XNYaHvEpPsM8i",
  "key2": "5mAs95rpgqUqHnp1Dmgk3REKw5FoJUT8KcDPFRksToyBo7mtaWByCyrXUWLRgeRsWeKV9d9pzFUE7VBQm8GhdQK6",
  "key3": "2YzsxTzBT5jdyM6r2KzCVJzbzPKuiFgjmzEi5JEhHwmdxnQsTVEy34YT4kNwMs7Zb8XzSFhjSStkHS2cwNLgC8Tf",
  "key4": "3FauJEq89gHLhEC6bxru6okzTZemv5DCK4bgTdzsgRDWwvWQUcjZgmVV4CjJ595pW7aK21sVsZuxbZTVFaifgV1N",
  "key5": "KrwBK37pwg2oMnXEbnWuS93dscK3cjPMNJ8ZUQzLLuwjk54XmdcYxfqwQ9gLrug4Pwvg1mBnfYNf6z75QPPGbr1",
  "key6": "47VGbAmkP3HjTnBoiYcMe3Pg7ub3V43hjViQMSpjJVQ9FtCjf9AEzdbiomWcGu61MAkTYnLYrVTjXCKUuSoQS5aN",
  "key7": "27uUHR3KRwQBxuKJGN59AwKQJoZakNiWuMEbM78XBWkTv8DYrwcUCE3V2jyyPTsESZYD3XiywCJ31s98GW1dJr4u",
  "key8": "29hqbkCXmS5zfD7iS8JZeAXjEQiPE7sbfMVY3dowz7a9iBgKa6y6KepjMCPKbGkJUVCsryhp7PFz5vEqsLXPH19u",
  "key9": "5BSkY98fHzQ21P8vkxteMDAb5tH2MQMHD7mmpxy3V7jRnFu3GzkMqvbuBmE3tfocAfjQN7whd7jiaVvYCSJx5prm",
  "key10": "4uYwM9DG9p1o46biZoREdubnkpVBxF7GPfFinegwjdEQLM6wt7jF9kwWPoiT8wCfmY6cGrsUUZbAF5GSCb3K7Kt8",
  "key11": "3AwGnUXEYMrJR3Hr3aSUmcgh9SQUJaaqCjJfQYEDygJXudbSkpaAHrTLWsReucVnR2j2LyehjqF4iELPQVaEkGbi",
  "key12": "3bKDHMPUZ4xVZof5XNXqxseNJMDaLCezq2Pyfr6npyyxWdiLXU5KJkz4iV4X7oo3w6N1JPq74gZ13iULpbEirzwU",
  "key13": "2bjDi1axrBP7JpZk54SEnphTcMDoWy2QPkzEcBFzVns9fPq1ukphHrT3u7JkTkzuV4FjVKgzURr4jabHJpYCo9zA",
  "key14": "2UKH2LQRGsumnnaN2S1iGLwct7PdzQCa7sX7RP2NtPeKuUbJkTxnUyuQv4KD4o3ERtbf6qdWMkzFdyk2jEErigjN",
  "key15": "5NvVqUKiQoA3WpkG1T75vsTqYQgNiNmBjf6RkcddUkqFAd7m5o1boVH1DEUkaV9bhJ2HBaMQU59hWkzag2EfdZvQ",
  "key16": "3trYKDs5RGEiyao89a98vWLpHKPQnn2sD2uvQK5s738VhJkV7J68ioH4JRKsivYwN7Y2MXgDSsxPxJFSQ3VcdXda",
  "key17": "3W4E5zBzev1a6HEvrvd4Dp4Z71NdVJ9ocaZVv9P1T9NjtAmdJ1haD7dxUe26WFehdMKmUa6jWWQojgoui37SLpV",
  "key18": "44oRVH3fNJ8os1fPuZWevWzffYfMj4yM5XrCAwk6Da5XuTwpW6bFsGk3Zv3MR3xAKCRJzXiHEaxXaLLG2NJrhicQ",
  "key19": "mgqVfnNHvRYcGcvkHHLvbd1SWKDhX2AHnQ2vvn8H9titVDS2iet8Em59tPMQmoyDZufbMMcG59TJGJjsf6ZVUNm",
  "key20": "2sVxe6mGsStyizCEgmAFnHMHzpvizFP3XmErsPtyHCGQ3P8XqcvME99brciti2MzFo1a6FeHJWJraBnWTGEavcnx",
  "key21": "3ZwrbCUXaST5M1oBbAQiTThUf6GujfuyKBssXqBdMTwjZYeTwRmwov2Dtofz1p9LjCGotxx3RZT1Y9M7zGwZWVHM",
  "key22": "67GG7bPNkDMfppefqSqkqNTxVTnaT8YkgtPbxZw8GW3Ri1yeyuNV1hvCoxN9vK3suv2kvuJt3sUnarnSYSauRooe",
  "key23": "5LFNAmSJGFZ2GTZC9oGRaUAGiaUw4weKoPow8rf3qGQrPuDmoss3zz3Jhyqbh1xYNtWa1CLjArhhirE3jUDSAJm1",
  "key24": "29uRB9apKLxzwFBEZNeCrzhEU4XyuCGZrBiizvicL6zzi8CDZbAnd2RpdNBLxYz1i2mwm61mYhYsEH5AoX5QSvzJ",
  "key25": "4htQXhHvRZuy8fXENS64o9eRMorNDQ5smi2UMxdqtrTAqs9Mod1gNPK4xeUKgV5uxK8YDQwnS23TC4Qf8yJoceRJ",
  "key26": "4HNR5wCi8BewTPRmQJSV2nSj9VFSd6ro4qg6AYFixQP6WTpd98dYXHg9m5S3T3fju1U9gBVc1UCBvjsodbtUy5C1",
  "key27": "23qABuKSV5NavsK6SC8J14q48akNhXQ2Fs9kpztrgDXjgyrTU5U8tCPZvfgTH31fxF348xbKcWJrvTwUZ8K2xYnE",
  "key28": "3hkfyyfuDhSda9cdFNfor1RKxpT5ukNyt1MgJoWkA2WFn7UxtpiAavqBGS2dwQXxvwgWwxzHdayctjc8heBfroxT",
  "key29": "4oMCmB96xMNndx3umeAM3h7cog4YTccuDmxqugceJVxM2Zy8BpSDWVVDMeXoPEnKZReSV7vamtnwBi1Km1M4Qw7P",
  "key30": "49SKC11yQBGtco1mR9Ef2AJ2V18PWXEDLMQTr4WnQHwtFFsfPkNEHxuaNraFVGKhseDYAYhj8pf865PciZeMvCDb",
  "key31": "24jd9Rr4BhQz8aaSRXt422QtomY5JfXVvemRPDs3AMLegpQW1MzHaD14tQyTtQUnnRr7BbqGb3vTTodJi7S5qPjT",
  "key32": "28jAh2GnbZJcPnHaGSJZwgacjHGCPztmanVyw3rhdTM8vjSxHfNHwS29bMPxaGtXMY2nYic9KgsD5KREKNDJdd8n",
  "key33": "5otzu2W4hYRzrSWZQMaUwjTnuWAABuyoQCASsw3bU7eRbrWau9R8NKXX4vgWhD3A2nqML1fV9TafF4ZFAJezezj3",
  "key34": "4abuBvHJA6d44KHQuBdPR9UoBVpK444Z1fsAFBXfaGKHGqrWidAEfMJfyKy6j1tHScZq8x2W44NLaryKq5WkmNtZ",
  "key35": "59U9mskm8GbeiMGeD55ZtHrw2uP5d8kVtVt2spUzm8rXPcJik4UH77gnK6QivotJmD9scm8jDYTrPmRahuqQyUSH",
  "key36": "46fHwRdb1XQRuLdinWLE8QKbMqUePJU7bQ1jRyBPwG4fZkmCvX3JaS5qMwjvtRGJvaPaxhEemKzTcLShr5rz69rZ",
  "key37": "4VRp3KGPwKfwgHD3Xa1g5uP6xUiashHyC9sJj73eLRdvrtB3Uw8gYgwQq2KtstiAeGpC6tg2AJPtR56P3A1bGPMZ",
  "key38": "5afZRhsTGe5MQc7oakeeTbxubtTbqxPrYppQaZZm5V9orgdivJjeNjeqeSjQF91mEGbdn617pKTp8d7wJZYe8qna"
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
