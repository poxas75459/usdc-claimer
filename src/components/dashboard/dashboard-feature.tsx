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
    "5zSCzoxkFHY6PnQnXYuVgf4DQJ8onKN5Mm8fYBu9Je3uFewZ2sEJYKxrbN4LvQuwnDvD2mWWm7tRb33jRFECguvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "524Ln8q4EbUxS2aCq24dxvgtmeu4hXzF2L1PGt9q4ADbcnd2TfshMH66bh9BGxQkPpvsDHofANvYCRWDEDU7rzaE",
  "key1": "4jtv1S5nmz8TdGJ1nZfYLG7KyfbZcTHZ33KFjcUAuc8TJ1PAs9wJ87Z5xhqyaVH42V1yWS8LpjdW75ksdCjLWrqs",
  "key2": "32V1TsLJ8rbG6Uxv2fQSereRkgE7oamJ652w7iiPGGRqz7YmzxPTMeeECuzJSZu1DD6cwb4uc9PBFWHHpjQNFLBR",
  "key3": "4wyDHgzfVVFu1ZxSeHsZB54SiJpTAs1cRb845Y7rHKLZhZoCRhDeFf8NMsDRdzBsTkneLktPWsFLuxKAmzw6PVkL",
  "key4": "3brqJUg2N8WFauJckkC5CZ9YRnrFvXpjUxDEctLbb1RAveFW8T97HHZAYh7SKLAYLGU7SEiiGZhdTWuvVHsDZ4Kj",
  "key5": "4UDHHhfpURzMt4AycccjwA5uupAqxmSnsWh25dp872S7H6KKr8ugNYgdCTwUC8rFdDyrbyJUG66RFnx4W2ejySRM",
  "key6": "Ff1xHJA6qcTiaStk9xQKaPcXMXMJYy3zha1jsxdDHgTej8DiB4k7KWuhwuF1DsQnCUC61jrEYBt9RGtg42ywqSP",
  "key7": "5vbGkqTPXWrMGi95urhA1VPPjkw3VJj7tPVwAMaFzc5HY2fGbWtQy3tJQ7q3gtwnKqiVSCNMTHEbURPUVj7oFiRU",
  "key8": "Ce7d91MLpQMAfA2EMUAjFSGrRuY34vGc6tZKK6KyNbNgu6mnG9STk953NgwvmybsmSQiFRX7oSH3RetbJGeRxAQ",
  "key9": "4cVfD57D9uHeSRx746jjDPKhU6dkiHmhz9cHH9s1G7SrsaUTcUse1M3vGgAEk4MouANvLX9GZosQcimAWSiT3EV6",
  "key10": "5ySXf4JyQNaKbjnoBgyriKHynCFqP4issWswpaNFZEiV1UzofJc7BM1wNQ24zz6rjWZ4PLWtJjmH7mPCn7QReyev",
  "key11": "2aTwz3J86cRhYscpXhWLFavQJXp1prYWiFbhcr4BbnaCrTyAQhZXYzqRGcf3HcGk5LtMRQCTCuqNK2RY5n4rqaa2",
  "key12": "25SZmP1PP1qABdZBQYtSxHhS3HN6ETPxMNfa3yeHGnNfzGawnJqwCYwCz6oXCJbRi4VRamZ3FKeD9hTN5Nje8XBB",
  "key13": "4fe4yuv7AFStRDygggifP1yvY4GycuJ7pep1wFrh8GhmGenJ9NxzMX7WaCdW6LN6q3hf6NtU2E9AZsgmaa96cr8C",
  "key14": "3rVaG3VMbhygGcVeDiH9HE77uHiFo7W1UDawdq53FGcppY7GmwyFd26GxGKBynPqbZUsFAevCWWtpCMCgivq8oiS",
  "key15": "36JnNvewkw5rYFfV9NxwQXBacT1VB6gQfUDqRVkkazWHvtkNeFsEK1wRfXu8D7TmfxsKPLwp8Z4AZsBhdsqMJcsU",
  "key16": "3D62gcduXZ2Zq4njpgJMWJEZScfKnDdm367HuHUWidN7sJshtZvT6jEdD1wKEU3RanDYtUbPmzxuCjasBN7YKY2n",
  "key17": "2oDTpdgftX5xBB9ZR6DZ87Hu6HWUYRa4C7k2tW18VdeYa36sDQKgQd5dbXtPnHWLQZz95E5yRWixR1wwfDGmhLUu",
  "key18": "2c73t4rXMPT8zbEs2pHmu1cMBEGDzJWS66MjkSnJySeT8BUBRUaV84D5x1tvFtsfwvyMJ3ApZBoBx3AV2RTh9HMZ",
  "key19": "2ifmZMpHw9AawLHWAJoJmm8nv3r2cmaefEU4Uibmud266MwBNC9ZSHewufjxAfNoBD1DbpL9D36qLj3uAVgypQyh",
  "key20": "5XuxmNogw5dmvwLFsaiqXAvmgDiNMXGiT35gCsph7wuYC452fHqdQSehk4d1RKeMKtt917DHDsuqSuqbmecQbTQn",
  "key21": "2J6XbCwvZN7ENd5neLi3E3mMRE75RuUjjC62tzikdiENfBd79EREoacrE9ZpCK2EVCShSwJFzz4UuLBCnNYKEBeW",
  "key22": "5vfTZ8tFJiNr8N4oC6xqTryKhr4Jcchuf6f226LsqtLnkA1QGDE1bXBAkgtQQiR3QRy3nMr3h8FNHE7bD7693o1i",
  "key23": "45JvFQRYcPVEHB95mSL2NYRTzninYycby7LhahKipGzad3dKSMZoWMxRqnCEEyTgsy36Qj76z8AL3ms7V7DvVvBV",
  "key24": "2P9GXTgf8V8qYS2QRRqtDvZWQh2jp6yQVTcPwn6dc9mAJoAXfvtpveKzVuoi8tdD9iFHFpN6ARgL8f7cfJ17CBzS",
  "key25": "5PaZrnjHvyQ67BkwtVrk1pH5cydrdeZjfCzUxhns3cropEGu1TQ4j5UbwNmTAJFT1WHdJas6mD7Wm1LGS8aCjyH2",
  "key26": "4fh6kFhACiRN49mkbbp32tz9Lm5oQBiwZE2cpj8uqAGNieDmYpiPXofofbru9HxFj1n5o8FebFYrMS6RpSVYWhP4",
  "key27": "5qcxZeuEDqyqFK5GWiPwcuyeU2xuMRgNYzyzbcA3dork6T5hFtY5sR4CPPBfxdgtnsszLshk1vquNhac4VKhXtfi",
  "key28": "2oUd4ud7xeDKL7AW8yWETJ5H11Bmh9izJAthUwfaKd3B3ydz8B6Huce6NH3Mx6bNhRxUU7bAnCSv3DBKZTpH6mC6",
  "key29": "5DTxvntfFJJsV9KYcz8wB6QMJrwrB3iDjt8EJcRnfdJdJbRG3TZDJTMSmk3wFv8ca58yRnGeZcoSWBHR15dw9F63",
  "key30": "zJRZLb9gTwdPgcgS7rJ2AETTdi2JX2vvbZFqNqaSwYEsgJscdUWa8j6XnSn3UDNtxwm6BLwmh15CriFNYPCx7aU",
  "key31": "3997a4LzrexKDpUR4vuVoJVPeoZAVYWvwHu7ZNYqXmG7U6YE1JnCJNSwVU1wjiG44c4UvV71xhkKLZynQYYFvh43",
  "key32": "5KGAXR56cUJLaNtVXtsMkFA8u6aEXK5omD7reuQh8iw1u7B3w2DNBW2RHEjyNQh9QP1mst9RhCxLq4miCQ1Hq86c",
  "key33": "2ZS3t5u34qZe5ND4Aeu5obhdndtsfaBgw7sUyaDNatYCgsgkpsf1tiF3nSsWLiEYyjCMwUHHcQShJyascCMLum4h",
  "key34": "2MzpeBr4RVX1Ffrp7WdEud8wBtzZj4gPHmFP9mHMkPvgVZpJqxoL7rnoaWNQZT6KZocxJ2nvZWCd8ej7C7eYoqki",
  "key35": "3hbpytJSuajbmJ8T7RzvgxF5BjLHSYUUQUVPVvjJ5r6YrotT8US3d1XK2UtBF832Ari5e1QfRyybzWavVCzTuHjx",
  "key36": "SuBTYpwkhMqE5zBuVJAkRV5W9oDpdYuaJGNGdZoX7krWSV2hVzVGgtBsGUAzNLjXnUnFRjP6UFQhCibggMGcMyY",
  "key37": "3WEvWAyT4HLoRhssLkNbFrZ3YDu7W2LMX6RNNCNoyGhCE1iaJzSxA7bFeuw9qG4xrnPkhxukB7hYWDtCRTZ8DZj6",
  "key38": "1e963hwdp5tiL2ZZvNU5DWkzvFwLouP8DJGKGt27QZCuL45DDJohbTBRg2Euk26Dy5DiP1vZqZzzXevrMLSDvrN",
  "key39": "36n4TWLw4Zn9WPVfaXpMqXE678BvVddiroN8CFpkbvUYYzHnwKmfkLGCSTj6Zjqpb116A5gpMK5DBy2oujcpx5KQ"
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
