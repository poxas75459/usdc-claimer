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
    "5ZbVJmmnvWAnz3N6f4PsyzRYMRRWSqpMFn9FfsTrthdTuQWSPUYoBCbkvghTcc7YXD8kbcbyWa94RLDjaZuwgkBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XgMEKsPJAKgG2QR7HpwgQP4WE8g5Dj1LxminEERxg2GpAWiv7y2VPUXhNLyRC7Zf4ycjgXyAke14xW3vz6swVu",
  "key1": "3dv7UEvMxbjFKsMkZHgK7Tww2jLGTPcxUfWFBvqadrDm15p4JMaTqZsfGdpeuLJh7pSYdK7j6DHCauQeTvJxviS4",
  "key2": "47XWEz5EPSwqQAbcdgBUus3udGmJFuVHog6fuPvPLuUWK3XNqwWvjJhBh3s1oiBN4SXEwLAZrmD5YYE6d49uQcJn",
  "key3": "2SpSC8ghdPBBngWhubu1CfZBxaZ5pfsvxWs47v327iucRdWwcUYUpo8BGKL5kqLu956RpAS6Zw3tHdmG2sp2JuXZ",
  "key4": "5K95ktJyDdmc2dhm6DsyCKWN63ggLZJDC1iGZiLbcirvg6PYeRBdThCzGvk1N6hQrfNQiVZ4bikSB1rCzToxvwZS",
  "key5": "38Z6Ks5HvJn17FHbAaqDtDhrMd4H81TiaJL7LAA7Xeya2kdfB9MdqWhdXZJbeRHwzqfqnuBudtfgMEuLSzEpmQw4",
  "key6": "QqHz1trZcmnzPTn5VeWQA5eVkzox5RodPQpwDoqqLrnGB6wCTveRDtRqWCzWavoFtyJhKmUmCm44VEu9eEdrcbG",
  "key7": "3kip7Nc2TWVe1PCdkFSKu9P7cAGPZB2y68AjLwbtL8MSn9XTFj4G6zoYoZu2Zhf3pFW17mqaziPkjNeC3hNzeEW3",
  "key8": "2jWwhhsMCP9fMXQ9NKM43BMXLDjHHQ8GB9wiUvxYgHZ663tV4V9UF1FTV88QktDa4KEauirWH4ZeoV5B5rx2Y9Nr",
  "key9": "2LdGskn2Ve4xdeTCoANpecnZh2u4FmzixF7hr5yo2V6FotitFkPUBFwHToPfYUdtnjnaNMAuQLCbngYs7Msvh4KW",
  "key10": "3crNBMFvkjdmKePftLjopC2s7oiXB7B8ssMCvWUihUCVcMsMgykcCg1d55awejbUvHwQ3kahsPNFmwJtv9WTQF81",
  "key11": "iuvJ8rZz9pDoj8jfhQVwFreUecsVePNZw9gMCouZcDHRBCa5dboEVFqpu53DvQsvo6tV5riCmT2wnsoH9NmdvYk",
  "key12": "5hfEqCaK7drVmV9pV8Az5jUHz1rx7qVaWFSHx7RdS8B1htCpLGfNuDc9JC8RyPCNCWRtgRL1bQnyubGEGV3RfHB5",
  "key13": "4gNxKifzGsXbFrJFvf9edEuSdDrNPwZu8mxxBPuMn7WG8fTuhbjv5pTP3BhriKVjf6DWrEwvovq4fmPcMfeXyRNU",
  "key14": "44P2PAcLCKtqJ43QrDDMjnss6GWQ6V5A3BNpgRSsvDymtyZubgcCLuLN59z7ntnpQ5ibMGZnLPNggt7ZcZCNS78z",
  "key15": "58LPYpPMiZQPBBEJABnt5pDfWutZrDqwPTCnYenzXTfCmBWbxMT75G7kF3Ss4nAc9MdcdDj9mPjqccdJCCPHMiSM",
  "key16": "4fh6eJjjuHgyn5d3w6WNz4oRBD5fix1q8YKvBewET6FRnXXZX8wYmhmK86J6Q7mae4GV6LY7ZUxrkPko7yJVDH7E",
  "key17": "28TrVNXetQzF4qobAkkDkFPMnUoVqD3nWqxfZWstBUm1o9sYGeycsNcixEHgGpcSy69zD3T1NPpX8pU2bThLDz8h",
  "key18": "2MHL89Nbso5h1jWTsAeCUcfNCXV6bsx8yeoU177UfFpeN1Uxw1MLaSgYQKPBV3Ms9RhaHsq6nY7Cp6h7LXtVppte",
  "key19": "jCggy5f4JV48PGxMcScEjeWggjJtywsHpGqxwxcW12wvVNo9vSLvAEY64zNGDy1BkASgrPfK6YR57uifninMK6t",
  "key20": "3mVEnSQ8r2pssFPgbKaAqG11V5wt2hvK6ZDp9vsBjuf7Ufi7UGmP8vF5eJC6xQ2dPe4gxhtKwjnM3UZTbsXCxH6f",
  "key21": "384D48cFSBbqLzPjh9cZ7HtEvuW7N3VTntnuRXoAhUQxCEcfHjqVu1x2qhPjniKKBmS66ht65jgXGB1U4KmMsHf2",
  "key22": "5kysFS9PvKPMnpxzXrUJ6FvAozKNSgFwPwwVEHZ9647uPoGbrC6QFsoxY43G7AKk9TE7ZsJ8G9cP1WgTbPkfkr3a",
  "key23": "2fia88Jbhr6tCTwGcUSaxXoa9iDQEgU6aZsBNivZ1m6k1okq9TRUipcRg8K7V3FUDMVqgZ89ZZsfuoZoaA7LYDU7",
  "key24": "gw9TFgU1F8dTfJEqGmWbBX1vmQmLX8JQr9HryRtDsGDeYixUcQgZC4gWviLTyYzX1WMzdGs44nveGxtmhB6zM2x",
  "key25": "5c1is9q6Y7NrFBzaQNfGHoFtao3VGMfbVQSo3a6v4AGBzZC2jvYXnV2aCttEkvpN3SBvVcfZAGYvcb83apAwPp8W",
  "key26": "5SGeg8d2eY4WZKuzqhsy5m2YUCcJemrcMMXt5Kiayj4fkPvQTNBfBngYZf6TpUVDPMHG2X4rUmtPpyNAcL1o4RSC",
  "key27": "4G2UzyckkUawux6LF9HSxfSSq8KnRBsykmpjmn6bjEew2F9e2gy9U4RsqEnKAcLcGvJSJgjxUXBg33snhWnB7o3z",
  "key28": "2ANY3LKngENF27WRcw56vHD4L8ZbmFEw7updCzsbQraA5vPH13tFTcRWC41Y51DdkL3Eb4ZT9wgwwkpm59doEX7h",
  "key29": "4yhs7vgZbpqe4FX21eD6nhhC1RXhfbQzRehqq57a1Y3uYue93XDNtgXttkZb9jiwAxe2q9RFAUa6iJe2faFC9BNj",
  "key30": "5gZWFTy9wBof1LQbBJPRK4uBpG1TCgJyEvf6UTVc1sue4XARBCsTyd7PJdJczNv6FFRTjr8rEpsAmzLq7Dx7ATMj",
  "key31": "34TReSta135rX9Nwj5GUpQp8XYdcwaCMPfEWtubdSPcMD5sT6XZJ369jr7iR9pmBikT5ZRGNd4B1bUegNMzMVksd",
  "key32": "j8Pm9iibNVTy6pdh4dkCYhphst1Kn9zxxXdzj7pxPpfn1mucjzvWu6xbTfrChwJmsMmbqF5Yeyh7Gc2iCezZG2o",
  "key33": "4rKTPxujiJrB57kxoiKeS2Awd3fBRMHAgL59Sf19wsnR5a2ofGDTZDb7HkEJkb3DS9S1mNhdhf2e7e2hkguC91no",
  "key34": "5sGwPZcV7c6YFPdmUrbf1JkNqLH5pK7t2Xc5dFQ7H4CVp1dtJGHW5sTo5R3QhKdK8XbLLHmLLRwtpM7mQ4BeXxPa",
  "key35": "4oDHEBARjGnKsK5DMptJtVXjCEgqs3PU66QXtfUQubhHzJt4qnbTpaVG5BhDWobbWz31iEqCB6t2DdoxYpogwoWM",
  "key36": "48oED1hkE84FEab71ppxS9376mp4GWTgQQXntYK9p8PwgvQ6LjWzFP6c7cuDa4g2ht8jCc59V28ciSaotUyDYMTP",
  "key37": "5zrgbmT93CKduLwNMKtRY5QzHV5KmTMpGCUSpH3PcCbQQ2LJzKGHCKmZx8BCpez7drkrLG1ciun14Qt6S6jqpVwb",
  "key38": "zBAQsjGkkpKcB9WuQEvqHHQLQgUKhssCC38haaXB4AwRjrwQCrXtmdZZX8juc9qGZYJvgHFpa9AbwUAwrsyVwMT",
  "key39": "34rLbaxHyXq28e4nNcjKLbjbem8zWsff9hGkB1xKBUS1pwZsDuaWMr7JQnHEzsiCWv6wTyGDRAqhjWoU8vtJgvfg",
  "key40": "5uq5dTLXfRFSQv2LVWwyKLFRQduGR3TRXn3Pu2HsUfAaqJhgE7SmEW1vn7Kh6n7SPbKJBsyy365Gme9ysmER5384",
  "key41": "59wxmYa28NwB2azPbkGLkzSj8nTerT9E1sTbbWL1crwWGPsyNJWKZX29kZBLzHLGNRYHMu1yEsmAoVPRs4FXFRrD",
  "key42": "VxmMd7ZPUdyvt5pFLeLBbYx9vZiwrr7N7RPVu7og7BmSUv8ivwWVsY3XC9AptxdY4V1gLGuWPHqC5sg7WuaD278",
  "key43": "22qaQrZ3VyxYPL9a1YP63fbc2vRKG8Sa5k9VGHSseYxfvBEwj4mnFLsSheT8sFc1GZuXatJhMjtLJkhXY9c17nur",
  "key44": "4C9vXpvAFUFUwwwEo77LA2JFf5hZkB6Rdq67dnF61CH8JfTP5PF9fGkT9wweg9HCxA5WgBWs2bHMDywhpCHibnan",
  "key45": "3YMry3ABezu2XkVutnudVqsu7gv7oq76mdPLFC9uDTTuqn1uUePwCSj686ZRT9Hh6WYHbUfXrJig3p78N5Yaxt6B",
  "key46": "52nV2TkhtvaSRwn2E3fxUY7eBH32uyaEZGZ3RyvwjbowRt7cz4CEZqhqZnJAPdjnhnyApeiDdsZfJSyXatfrDat"
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
