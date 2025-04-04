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
    "Kk8cfMt3k9VN78zmnJcpeaVZgcEvwc9Pa5WJfPi4rgU1Rgny76cL5uDNF9ebnFvC98HJgRM8XSng7PvHFci7Fhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k8LmH9PqVuDg3NeRQ4sMwKpZU2hy9SRM7sT7TZuHG26v77cdZRZdnrzDpHrq6Cf2FkesS39f5kErL8ZMZh9scUE",
  "key1": "5ciAzhUmeM9GgFeAmj9MyzqNxNwGfxRSf3ou76Ssv8x5jWHrcpEcwyaRKbgNZmJ9MniyfXf9rgZXTmdo2egQeZBT",
  "key2": "2MiKXKVf31bUUcstRzYCDES6EREu3LvTdqcP778f22j5G4ec9HT2X2bnktgpRcnKV2GWcLUwQMTdvd9mwoz9mSYZ",
  "key3": "2Hc4Rg27RVYsqK6xmRuDxgbdCyme87fycVq6XrrTwZ1nL5ftHJwFBkKNjpGEXBXiQhW3mgzkbgGPtgDv1jzoBvu8",
  "key4": "5mBPvCTPwCpnf1MvfzvgpSP45tAR8Mdn8XpmL7PFLPPnjgVGz6bbMQK5oNwuXv6dGMWdCVWjkSPTmZAfbSP1CcEm",
  "key5": "47wbLpmpyUvR7TMnxeU41r15Z7C7y9hFQeJfqyeFZWxgZi3pnoX3QSLfTvTBF4NcYy3xPdFPuH1wEY54jLvRsZer",
  "key6": "i1bJdN2N6w16Q2t5CohBChLvfSnaH7YjWFirbDekgNMTzgNEMSpECTcWXp5MgyWWphgNvEkxidVQ9okgrn44ECu",
  "key7": "3fdHrjnMULoqip9KEnwZ8oeHSbzr1zK79JYdKm26GHfmruLFjFDG5NMW8qFSfqVUsf4MvaLo4hZrvDH8zRhg9RTT",
  "key8": "4EGELRyCMrbYwEKbjidpnjiwmeG4XUfG4En5HPFJtHBnYr88LwKJEy3b8z8wC7ZYirHTcTCHc1mNeiwHoteekM5P",
  "key9": "4369hZJHHozoLPDzRGSRZ8ba5o8nBkX4CHyK2k6sZCKDTRRnAp1FBF7rEc9u3j9gupLCZ8iBWxBxjefj1XiXNT5o",
  "key10": "4nssxW4WFXvVAzPLQP3d4qX1AWXJJu6U6qmwsnRZDXfrST6Q3ncgr11fejAMfxhC8iQ2DsFtoe5FrYkuPoVtjGfn",
  "key11": "4iEbqgZG9uZkxDNF1DJBvGSTWdeRw7Dhsvod91Z3DJJSU4JUHtztF2QBt5CMNDbc52oUxJmk8qfQCs1E61dqYfBa",
  "key12": "2mDhgJExdc8DRx9zA5Syr2VeoHdzDSjfBa7oVR7SkDrGNSTcNDYACJDuFqdBXE4EW2DR6gUD1RHW8LaTCi8SUPQT",
  "key13": "3KQpUKM2Kss6yWxkXmojiwxnuWvGURVhcrW7webAAMshPz36uhNVTCCMWiqUwF8DZ3MjyqgWczLxGEgmExDpS8WQ",
  "key14": "5NgCuVtJUM68LAJGp4neLq7pMJZdF5a3QXYUXd7QmgD47f5iEvzVLeAAKrzXTCFQYREciEhgyfvBz2x2kLSfxHLL",
  "key15": "41VV3FiWMGzjqgFRgHfXVCyKy7G7m1rB7f3Nq8wb2sbHSsB1gsyG7gk6opxvukPRwefyubFufiqLDJ6gUC3Qhpfb",
  "key16": "36j9yiUuEieATxJC7d8QmSMJ6foBK8xKFVTj8brW2itQrBkVWugCndKJPkb3UHpkTBYzNWFAFGyxQHYiJdowyNxH",
  "key17": "3soFEuC7yUb5KccmAT3JYDzAxQhAEc3rGDeFh2PNBGr68HiusFWDK7G5RdKPmrVk2uBEAydXrYAQVGs1vERcSoQ6",
  "key18": "NTB8bniJAWghQJZke5RSW5KjHU2QPPfjv3Dtywtwbxi4KeHY1MYpnZz6xRh8Dzc836QA7M7MGwMJZEcn1YVRJC8",
  "key19": "3pE24z1vsxbDgvg41K9pCtJheYrWgytN17BR4MfQEjZ2rs3w1vnkfFhwv9wHGkdqCN68mFc5njJDcZQECdBMgBvd",
  "key20": "2ateEdnkry4t7LLMn4SuZUuiC4V1eSmAKjfogMUzVCLLNoCyd2Xe1s4oy4Q96d8H3E8feTUAXw3fC5ZP8FSCCZ9c",
  "key21": "zfWWyuJVSsvkMtQQ1KgqvtGnCvjcxQP2bfJvtWABE4gWMpWqDm29K6uTAoPpFCGY3Fe3RUjvkQrEHFaMYaV2Zjt",
  "key22": "39GbSn5DD38Fw2Td7WZsYP8m3SxzAT7VpMFzUiTm41ViaDkokcymBGNoVo1R4dJe1tc8yPSCNXKXMyWbzZBXFctH",
  "key23": "24RTMtp4riEsLKdK8tzjVTfL27CjHjMu7FqEQJ1eTJV13SCMvABi33feZdwtxnLQZwxUKGEk7DMnU6R8pAq6BgFr",
  "key24": "5avoePDmei69GQ7UCEFaGNipnxK9zUJyRLBfLEqfym5USg8a4bLaXbboJCfid4VyKCDxiL1Tbn4JBBwZ2E5pnC5K",
  "key25": "4FTy1eN271LvhYfFa9Lz7g3JWNxVsafDSxhfuz3W6fvbfZJu93qEVg1TmMvfxveDvHpSg6ZVnydZNgb5EQarDmXU",
  "key26": "3qdN9myojL4NxBWu6HPySAFti2VGyejP22wuzEnAwtU2rvx5nR4x6TTfWhZTiy82kQFu2wL3Dr9am7QipCXSMFvQ",
  "key27": "4kPzRPqWAoKavriCPheyQTLsLoFXtdzykc3idhnfRGY5P7ZjaMdb9QQUBFHiP16V4d39rsiMQ8YqJ1WWv2KKLB5S",
  "key28": "3LyHGpQ98Bb1ag91cz9ghBjUoKGMwjwxAFXM4T91tsvHxGW8w1A72srGzDYpQ8zJvvM2NC5mHcTWXnvVmnYwsner",
  "key29": "2ENiEZ7ZJmmhufVyQoT9G2FWf7tG3w3wbnxfs5BgtUpG4SX4hvzUQTLbMwjnRca5JWbGpCUnTbs9zFENc9ezXvkb",
  "key30": "4uFeAT4PkHNGTiesYeNp2FBg1FA1GJUFqENhZhfcswEJq5tFy6r8cogvY1My2zYuoYMuT6cWUe2E2xTNnbDgRXts",
  "key31": "5vhHfU3hoNrJhBjD1EZh5G1R82js6fApkKuXCqSY85KXBJhWJ7EcF1b1P5oWASaeExrwcCcTNAUdH5ZMvfKHQ8tx",
  "key32": "wNtVgzt7ZWe5ShguaaWoLBPVzQSwDRXGexyDyV5zAhVBVuntcoGaxNJqrL96vkfkRdE5bNnHw16HzZds7Krd2j2",
  "key33": "CXcCN6QTmPikMdsCe2cNHDJ4BhWDQ9UNwHRY96av8BQikDLJhEZqErshAUchmBkRrUGnHdH6i3NxgYTV5CxtsBc"
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
