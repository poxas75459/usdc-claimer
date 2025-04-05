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
    "5hVJkfpqDW5WcWb9ACVepm8Q6F1z9HSqkRCNpvSrq2ugEG7JKQbBtviWdJ73f8bQqVkWXFP56NJEYNr5fhmGU3RB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PaiWxNkcS51LQzSBEL6cpq4u4hhRfNpRqEx7j53frYag9S6pftNH3Ubx9SzsmTdntL7kXSz9Mzg9LWSuWDmUQoG",
  "key1": "3uncicuGPjHNzq8c3oQb77KycAfQSZiWi6PgeD3eT1Bu2UmngpY73mQwoZkcrSAVpLTyzpUkAEV2WUas7jkTCtm5",
  "key2": "2ALZBZuiokxoB1LUPox3Fm2q6PbHFLePt3ADivCiVFPiK4CM5WtFzdfS7aZcjSdGGJJbrxRDbZb6TRKFk1Qppyu9",
  "key3": "5pc9tqzV225LeTmYe1p7nakwJaEfBmvMhxMPaybpc9ff1JTTijhyQHFBo4YypZ3kQpzQgjfAjoKf3u6Amg2TZk3u",
  "key4": "2tsxcjCVXJUBt2Ke7P21NTPjN7vHn4R3jrkFcfRswGKiLgXNX38mriiLfVRtk6Gw9ZZbHfykypgkPsMzF983Juyd",
  "key5": "53hUCKcaV4Zh3mRb78qMf32am4bYSEkpSwPocKcZ3zXxTJhSEea1YaQz81xbArJxthp1GRKuyCUBefDQnbo7HaKz",
  "key6": "4w8NK2Hs7esKyH9pCFRVKLAy4zh5JUi7ofeMhcJcVJz7Yd6fk6PHPnu5VsMG78AYHmju6d8aWxj4KP37ehd2NTfi",
  "key7": "479QpjJ1ntjaAVvUYSc7Cu9FQ2Zjijy9Fi6c2fdHVwibMUwi4ozoNeBqE6VdpFVdJcQjzepzgXknrT88TnLCP1Kx",
  "key8": "5WKg5iiFsv7LDHYoaBzBFMe7Qq2xkSybzq5bqPMTzDQotscneQdkWcUFBq56UjcxJPM7NLq5ATxm34T8kwxqJqSJ",
  "key9": "2XKN3PMQMML6fyYZ3PAG3saSbTL3gaFfEMeBKpNEddFkMinfzmpHtuKu1mT7H7KLFFRosRAwpFbMVvD2EAjJon15",
  "key10": "4hjZTCvzcvBskVK3RMFEpC2saHcicR36h9exSChF58P3xx2sowC4NXVajcSCgxLzMNpDGuhU9aqF7BqNTBdvo926",
  "key11": "4SSDZpt7m5ZM8ySVCgQELLN5bAxd1P5KLyk6vEH3mV14YgfpHGrwkWiEp6dRZX2CmvZB9JXTAzyYoJPFyV7XeL5m",
  "key12": "5xHM2Lx8cpa2BbjaGvSPAbJPcynoFJFURmXH7YsBzGQPuCCuJ1RYNfjn3FpmdNF2Sq3dLUMiD2KH8NNmQYDozfbH",
  "key13": "62cc4zraod4Dzje7ZrVwSE1EhksS8fzb4jQ2BBrakScYGmFpyJgDZzTBUBYypkiD7R8u5Hbe5zH42cPi9hXtVoVC",
  "key14": "5WANPBojpaTypo8zXBv758cux3D6CAHKi8bYzm7PXhYL12FYhTGa8YC37ios8xZCUAWkgD7D9dtmMfrrt3hV2x6d",
  "key15": "3TdQyDL1EHVo7MYxAcNWt2A6tb7xw6ecL7X93e4KshPhUBJ53Sss346VXRRNojnCULMzqDM9T7xXWo49FueXXEH9",
  "key16": "4EPiADUQUMxuP64JqXP8YxAiXW9EA14ZbooCq9s6pFG1Q3mBAbsftK5Cc8DPp1zRa3RMdZfVn8cjPtmXzh2E4rR1",
  "key17": "2j3nJFWNDz1WwEEQwrry6rzfNpDqCZts8NMpvwLX5MjPGNyLEy8pvNoeJcQMBGGetRxQFkinWw1jg7Hk4umPaHSi",
  "key18": "pTgzqJnqhUCmiRdouBWtKFXdRCop7V6ZmyQ6oT6TAugkgFmE2Mp6qq7hz8EWTwsH4hKhYDSCTu8oKFGR54VmmpT",
  "key19": "5eVR69XLbfDAjDweTaXbLCtq1qWC6RoNTgCrxCCRPLCnZSgKNdSwKiDwviZid74YnjQj6TmkRusmYEchNM3RP6Cp",
  "key20": "4duv2ioNnFGxLuyLLVMxFNtCQS37pzwsrBnWYkMWLbZWf9oWFP5zqGiXQ2qeuK2TXsjHxbh8cN29z7pqRj4DuqS",
  "key21": "5qFQFEJEDui2JomTjc6H4G4LreSSktNNuaFqCsPfFyT5aZKJi1Zxnc8bXny4AknLwKmeZF5PHKP8syDM9zkcB5Ud",
  "key22": "RKbVRXzsvALM6cnLLnwZiWm7aR5V5qmKNzQPQWVpjUdjngLHTYStQyshpdrorqoqWUzc59CpfHBvseVxWQYGSaN",
  "key23": "4WgJ6g9xn6yw8zDKMrSD5pDufutRGUdHwXL7dD5kLUSGE39i6gHfmB4VSooEW39mMZs8Y9GXdc7t4XKijJUXpdBf",
  "key24": "3jsbFiLRp2Ek9b6fkx8vBpdzHaKJCU1YCAKy7MpqbWKuSKdfSc1JGyK5xTLnkN2D4XDvsuwNAiz5EMB7GSVm2FDy",
  "key25": "tMBwVgyyztYBxz6qgXGN5QGGoREQSvP4LeZMe55sgXnqYPA9msaVW6Dbk9pJEn328JRznRDfFdsigoGE9DcwiXr",
  "key26": "5EQpRpDbFG6JmwVCzkxA3jyNGgSWrdQXig9WML3FgHEZRmGP1VJQV5uxRvt2w3RtAGYjxBJnNat42aikuQrVhZVH",
  "key27": "37sBznPKPBbhPafVZu6sWL9JaQv9VrWGzYvtXAej56nnBmRQXYMAh2Zqz5qyDyYCzGAxTNu3xJ2Hh2LYHM9fSWwZ",
  "key28": "4S1tTZuwUpEbdicpNqyZUXYrkKU8HzVr1jXhubuJgZDoZeqtUDvBQxufiT1hW6WDXRhHDkaU6yeUY58dWWY4eBBi",
  "key29": "5uEnpE2uCH7W5KLvexsrSWUnLvAouc8uszaMn4YECnojsix2YTf6XqMdydnCRMvNEvUQTgbk8aSoc2LGcdMTmEki",
  "key30": "2kULTRmBk1uUy2J5wz2DwVp65QW74oWcVfKhZLSMbySSDsDgTY9kXagiaVUV9HSHCek22V2bJk1kffRn82fQ2Jfc",
  "key31": "3HpBNXGteThQSmx5UtG5ZsBYj5t5fbG3WDVV6NfmRmXh1jKjRDARgtVcvaodAJZE2vAoNv8ACy4oKLdDhEtrcXRg",
  "key32": "2GYL9wQzhShHMQ21EQ34m1bydCwm9fYtWSSiKQhQPZK6u9nYdt5tcr4pgMpr2tgRuDndUneR9gP8o4gfP42HmAqn",
  "key33": "3B7ysSWFstDm4HzQAhfEzEV4G4uP54WjcHQCLa6Mw7XUz1RBoy1rUe7v8kjEyckGAw2yx1V9YAMhNu2i3j15DyhP",
  "key34": "3Gvp3sEM4HH12Au35qgwx3dYuYLeDT2zaLgF5wTyGBEXHLoSvqH9KNiujb8jvqJibdjZGbbZt61hmbkqnCHq3VHN",
  "key35": "3xL9TVSxycHFaaZ2zQqQR4XJjFkJ1bPvghULPtTinRr1Hho4SnFPaHqNGnxp3cMX4KmdaVEbufJnFDXhEfRrtuSW",
  "key36": "3iSNjjk2PmFFqv1AU59xMgAXaTyixzhDpvvzpharryU6Bxf8EWuRkJRYsZmd1chPxb1PzGczpH1hYH3MaUT6Bx1g",
  "key37": "3BqHiT218MWDEpb5KTNPD2Zfdwp9oubz4M4evw5Z5SmcNomRrBm7eFXtKXsHM2ndBiYPsXBSruX59Nc8BuTNts8B"
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
