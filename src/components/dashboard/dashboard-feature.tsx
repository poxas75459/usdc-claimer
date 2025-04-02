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
    "39zYg5mwimbKqH9FaMm888zNWypR5CTPMrJLfFRWb2rv2FxMn8TFHoLZM1zeMN43AG2pXz5Uiu5nHhKUaG6q4UPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ciQTwUpEFSB3rKWUuio4fC7aUne8X28v7ioibFHg2kyQyNSWG7RVtBU5PzKaRfvaMvMfadKAFmarbwLdPVrDBsE",
  "key1": "2TZP5LU58MPnK91dahWQ7JzaBczKjasoNw51Em1A63eyN2SCLKMQnfwvoUNn74c8jRcmkAPtcRJWq2DxkYyG48BP",
  "key2": "37HhNSbrypLMzwPRsG8dPh7qSLRiZhDiynvCXoFToUgKAY9mCcRuxirMsDK5NkaEgcp8FTk7zA6xsP5CLmcvxXor",
  "key3": "SWhB82aVB4mVE82FpwuREtYgWh8PYRJAHT3GNUg9D1bRnFQnRGjGmL4qhTZ7mp6tL9kC4JwjHuMEvHjMedSyq4N",
  "key4": "3s4tUGvYKhLrS6H1vTkvLS4HwF3zyJesPKAC236Ct2yRGwoKdXyY2XYjJV3CjGkm3nW1s5EiGGk6JX7sRsaJ1dY3",
  "key5": "41KdhBBVdECUQpigBfD8CAEggvaMU1judQBjboquMjUcVDabdnVrHCtpfH2cQ6RLcRkpNPNEAFcMKycsUJUPKVb2",
  "key6": "4No7qXAbzxJQjBH3SC8ZDenE1TQBeZqieXhkcSbtqXucD3KHXzzgPfbGaX5p2oPGpQo1RVemCzWRqXhvkTAaRJiD",
  "key7": "4gRhfMH3wRkHETj4tcV2CqREBsencoAuf49qV7kTqbxQVZJ4GQi5XJj2DCcYiP5RKF4UxGW8XdpWz5FJyZmfc2M6",
  "key8": "4omH2uKFzkj58k8hvaKZQbZE58PpBtd3RG7NbzWc5vHqXNjGejM2wi2Cyxdu16PuyArrGwpoNuSMaxTYYPaxjT5Z",
  "key9": "fg2fgnQXA3crPtPMfZqyxdbBtaD84nkNtMaQGQR5eVy9Zqj6iqF9k4QXK9re8tqwz4BBWkrz6oynSzZ53Qj8mjv",
  "key10": "2Fj1wCHvwBgjqPCp8THpKC7C57q8H5uGFeEy6fi2E849f5jJjvWVFUuYjgs4kgQtZyFcgySrts7HF8TPtDdoPNjD",
  "key11": "25mQK5U2zAcCMgcSjneg5rPd3ZLMpKXomaHU35rmPTp8wjtTYwQbw1FH8rwyGDfpgj7zpmMMiXNEnjBbUbs7c2H6",
  "key12": "4SccSocf92Yz5P8NEVL5XKxVj3xWRCtuksYSt8RQvQF4AEcoHTBtQT1SrzDUqxB6xgWMuVk7HmtTYzh96LUEatM2",
  "key13": "4mDHBvana6fxamvfJyGvJ4aDSjH1oHGrsP3o6oHKvqFFRRvKeZmxpmePvBWA4gKbJ91kHVKVWFajn3gqUnUNMWs2",
  "key14": "2UZHBxriEKLPd1oCPYF8M1dX9g5UkuDrMNEgEFvNtmNUeXfvpD6PvpebtK2i4XQpQ66YbhE467dJKnc7DrL6W6XP",
  "key15": "4M5eCwq5K4EFKUqnvCvLkQdvriwF5itBnLSxtnRNec87aXQCP52NWoGG1oahthKDYq2Q7jdFNK4W5fQnx7hiwCLK",
  "key16": "3LAhW5fs8zci5J4BRxQ6kpk7VyHvjcqsqPbLQX9veGSt1YJvKgaDcTaQG1hoVEDuwcYhYiiNB3urtqHM8ZkfyG6G",
  "key17": "2jdXrGVDvN1PRTFKmj6TMS95B8kmwnK4pnPpBC4gzznVoZYVZhcqpcr7JAoUt5B9wySqDukjw7ntKBnETtYWRhjC",
  "key18": "4BPVjFxg4mk52Yrd1Cz7bj3kjYoyqf7pzHaQJVxuAjcfnFATBjpANqSoZaUFsJkYx7n3uT8PZjDTmghqS4erokGj",
  "key19": "2W9dUhQ1r7rxLoGvg4Ytb2VPdDqB4AbcdPcwhexssGKY1UgEg7G9MMJ7pktt8z7htkctThHTPVVfRVQkpPz7yjUG",
  "key20": "3fDVKrhuS8cJi1Sq8mfAEMk52vrvttUHAN4skdn2YQoWeYn5GuMyDE2fgzG6GzDqAwAzqkCj4i3tBhrBP8eZotmp",
  "key21": "2s8ZF9wpjoGXbPSAQcVSvjEWYxngrWYa4y2tWVot5nFjfudeXjuBSFgDdRB5CNBWxRcamY7iTKbqoWq3DJFK85uj",
  "key22": "5zhBAE428E9Cysbkd12sNgDXsuwUTA7kfsH8PzVeUoCYsgMx7JWaDPskupZukDuCLPW38561YRMCyNwXG8U6jZSj",
  "key23": "4MWrJXvg2dWm27RZMVLb3S3rtEpT3ntH1cRZ4D3hUX69vMzUuNmYnFkwW45H2BFC548QeodfQEjKnFLaMT7zhrVp",
  "key24": "4NCm3wgupZEeZWovJp6PQghQ6CgfZFDufqzfvo8dFiRYcYUatcARaVBnx4r1gHJGXKFxDKViQHX7zoWXdBtJojid",
  "key25": "fUpuwvk2wRcPZSEpDWnr6HyYbjJiPijZDBvWptkLvpg3ewGQwyJBK5FHJ8RvuKuU1QbmpN7gju1HDXz2tcQ5Sin",
  "key26": "5K9nZV4AGq7PSnLcq1De7Tw7MxEUBEGzc1RU5sLwZeyNevHfmvmEbGJiXN7So8gXAPKVXs1n6HTEpoq3Stsn7fRL",
  "key27": "44X7woZWk2Xx3Pmu6f276RmyudPmk26bptzG7Wd3Kz2WGp55gEBS6qFAxJv9jGyRMGbAv1z5Kxm2TJz91XNUvJgJ",
  "key28": "2bsdBj2HNYKWkQJwYNcP5yrshd4Sn54WEX69W39ZeKsQaNtEynex3BARP662MsLG4QXXFRJjjpG4jtbpmWzabdRh",
  "key29": "44Up7Jq6M8dRU5MxLp4GsZ4VM5gRPgqXfSevEzHxnmAGg9nM6meYnFZAkYSckVBQGvTq4P7CPv7PSm4KzYWcndgn",
  "key30": "o5HrzRYtiJYNC7q5QeKqTzD5oyYNxefmo3wD4F546vn4tEajs36Pzjujctjo6iUF2B7BeEt3WuUXQms8PnrKhnV",
  "key31": "2amCSHLiJkQrHiWKy8Bm7vZXErmhizz1Dn3nSmuiDQ2n4gDopV24ngcLeb4R7z5Pt3Ly7qjoC8AGUseD8BMgNVzy",
  "key32": "4oNiiJjiuTUgXhi6EV5N2ALdutYdJR2fC2bvQSYNUCthLnnfVDoJQUeZJJzTrUibB89hVxPuMcotpU2kmcTxJshX",
  "key33": "5YpmASDLXCUrUAv5X6cdGmskXXstbjPDd67J3WweWW7AVArxfJEUhieGfNQXBLoqHfZ79F4HKbqdqqKcQYvCXJVk",
  "key34": "7orNL9kpswdMbhMwu5fRDPYzXm9vBJnsR5M9mfXqg5rFBS1v7AqrJc92N47emRMGCpyL587wGc1HLy6Nr1CfcrJ",
  "key35": "5NfCKuApC95UZPfADm4TKYDMFArcvBZn9PvovxMWg6roLQjDZe6sjJ8g2Gc6X7hL8nZFWmAAsSqfA5qnR3HyTEpx",
  "key36": "2kJps4fNkbRiafZNSfjEv7FL7JyWPxpeAKp83fWqn389w95VyaYM5vkaaVJJ7aJQvFdDyBg4DuqytjHb9jeWtQkM",
  "key37": "WkVPMP6B5x9y3UTqEt7av3SeXvNM18fAsbnVmuQABZ77yRQjyPyAQ5UCKFHSScXyMUYDriJuctzc4x9yisJTSE3",
  "key38": "2ttNT7dD3oYoQiJGqqafpMVzErePWFMB4Jba1e8zzQw6MhZJ75sQ6mBotQyV6JQ6aVoTmxxkfQAEPPEMvxay34w3",
  "key39": "4VNGeC95wGBweiPeK8Y3E7JMTKzpg7Va6B5sYiQGoeRbQbSsFL7EV69K4gy5kjC2t1MxY9SUokUEXbhf1vukduD8",
  "key40": "2w6zydisjrUFRiYRWX45MY9Dky5pe4SWgMmnW8wQwW3YjSsHwZscpz7RHaLSdcwEZ3owDjRxyDirdZ274BB2bXZG",
  "key41": "B6sbRrQiqPdo2DneQafHt4PFJryY5kFsModPfZLjNZ3YPFgYvNVsbvS3N9vWKbAt38xnTWtDb2j37C91P1vZ2Yh",
  "key42": "4few6RAmqquHy3CvzWaTEkvz5qD4iLVXmdPFQeFsSP1zdjSeBFCc8yWW5ukrWVkJUJj3eyTCKWTCiGp5anu7kd1d",
  "key43": "2fWTwKD1Mf7GeVqgEqCdaMFtN7jPqudKqjYF6JVoWechKXtRpYUTgnYgcZoR9QBxMDdb4SKE3jYx7AFTcGht2Ynz",
  "key44": "WSwD6ur68QHK7v89zWWuV7xdXqhQ3kz3S8ugroY7euLWnNE86dKNMGP8YQRzGo6yzX6stnDpw1pDs7nB9pbaPEw",
  "key45": "45Gmv75opaqMq7tkJCWUqAz3f5NZ3uBmRVpqBrfyJ6FYCyvKUgRPr69VQSPq4cxW37Fy8XhXs4AR6knKaEujDuXv",
  "key46": "5FYqw2TbvXZbafV3HbkQy52SturCkAqXwtLbTLcEyZ68NQVqv3EZKsjri5oFnjEUwCmUQDmoz5vw9YAo6zTEz4tJ",
  "key47": "5MyNpWghkoQMrjAFastnPhk1gZJeDdS75Gxo6MMDyFuHSzRufF3eG8eykwn4mBUcCobXXWCb85jx6AKpseVweXRb",
  "key48": "34wGczHs8xp87wb36rGwdKbNs8sDXJYCGkXZniMUMK2xk99kDikLaFvTDm9sTPVpURXhWreyPDwMBUByVbN3Fmwu",
  "key49": "287nyEMhLED4zhiBUsmcb8XazqdqDgfzq5hd4FbMqFxiE3q2J5Y8W8qZjNLVjWeyenuNJzXAuCsC88BMticqvVMv"
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
