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
    "5aQ7puLEvBCWY97paj9VYAKFvz1Q23zhysA7tdBTiWYGNHipMTWibk8TUwjBSJh4bBEgpNDcL59XDS18NFkQpkCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fPrmgiAy9uYpLUBmXCsbcmc1Pxwz5p3BhMwhKVrSiLvN6k5i5okZHqcKw1WxXxuC2xFjoNyx5gJ7ryjdVV7vuh8",
  "key1": "2mSP64ZoqAHy21aHnTjeBekLU2NoXb5URJ9mFbHYiqrkq5eZPRq5D4WuHeQmeBxiapovZudA4iK3nQMRzrxZCQgW",
  "key2": "35CdVfQ2wVJxWNnVu1vXCf78gBFfg3FWAk9psHKMimFXTGAtdwu1S6V5QmdWaZRBvmvF279nv6riMCzCa3RuR4W",
  "key3": "48rcxVk3Nh3ynHz8TrTSX7VzokpUouYaXMdpTpwZgXPYrmFH9nPHThK4vS7skTyg54T92zko4yhW9dfDW9DcN8Y",
  "key4": "2ZHhjpRHkNvt7Sktj4DZUS8juQFUtKpp3BWBS8nrktQEU9RvPUwFCTCaNE2htN6sVBPoQmexwb3a2aYdq9b7VRH",
  "key5": "35sw5pybmZKJ4CJwRaepGvzQocFpQegZYPP4mTWvtUHKLETeDiCUjRpfipnSwP1jPoxhVr6ad8EEo54Huy3Eu5cC",
  "key6": "5PvJNRrxw1z39FGLMfUFhrAKKjfT8X8hGuSQNEXuAminTvXHaZm85hbQ5FidAQZ9x2jdVdwqe7W4nZQb93W3g3T1",
  "key7": "3RMGKLBix75KxvotNP6xx1xQK5QijGTUh7xNqhJP2JrvUZuUifNCtRn3eCSLTpejSEyxWjswe4qVX6AFxmQFPv8s",
  "key8": "5pV9tmttFNVQuuRGRqYP2nKh7wU4cLGcnEBS6PVEycEPLjaZrVRm1b34za7DqgTg2Gbf7QuXRhPisqz516ekjm8h",
  "key9": "3tR5e1qYL7Ync8tAtYu59MTPQKwo2eRaP3KzzGN4DPB9G6hsuToUZVakfvCVKLegjAroikhRc8zC3XBgwVWuYDrz",
  "key10": "2a6tGkgwwZfEBuCG5aDzWrs9kv5He63iVa56nuBRyc5UX4mvPxEzi98sfXWLFvJWsKDKLc9uAkc8qj9pMbEU8fMz",
  "key11": "3dkwpWn8srEJJwQbzA3Hgb7XG58wKyMPYfviyQnT2fcb2duEgwToXy5G5TcFxLrVcDBHn7ERns4c3p1WASDN45dL",
  "key12": "3UXXcwY6V1sCm1pHW5M9LYU1LPoDozZGwpiGRyWbA8Kb6MiuKC74wGXo6cPjVZhTo9EYBk1NsbgFwcF47ZQLatrr",
  "key13": "59fKHrRrL18DFaZmGLym9SQ85ivjBTfgfg5by42y63H4Z1gXqUEVq2bjsWiLZHkiYDEK52uEcw4c1NC1cP11vN5s",
  "key14": "23gx7cfbBZFvRYdi4DoHbZkQg7J26i6CVuX3G3obPSLoGgtFj2rR3QzrVzzPkNia5EgZhTatiagrxor3FeMfBLv8",
  "key15": "ofAYtupQWFRbhfzQ99YoyTEeZaKfhhxeSJgtwt8yTVg6jChTKdJtW7dMLrGKLBdyPAWXa37vk9adW9iELKHFT1i",
  "key16": "qtdAyZ5hMBfzhcbx9sdwnmptkTTXyK6nmrAJezVLd6JwQdyBiicywLEaggZhpbqZGjVkewjE2WdY3ZGQC6TfUdL",
  "key17": "5Kw4RzYcFRgDvVauBXbmQa4myeEhE69oTkXK2eYqSvvwn7axXLBXqTRPZC1vVsaGhtrD72rsrAG6EVcHKzSdTKPQ",
  "key18": "5PU3DSHk6k3xmtS44rMDTnDDmre1YJKo6ovebvKhZqfZ9mVGtWrjTywwUE5PUBCo4W26gdRFuPZ9P1GjMxBVfpSq",
  "key19": "4jJu3fFAXNSECeNgcS4BPKvDpNEEFN6Q82rpQ2yRB1sCeh84J9kSPwmr4jpNzGV58M3kNELCEPBHkqg5YEbFzZxF",
  "key20": "57RkrVWCZxJcVeKGsSwVmQcywedGCjveS9V41CXbSiHiC7hDx3cCejLpytL1Vt2hYbNb7LG6NU8WPXd6M4e8KxLB",
  "key21": "Lq43WndGthZEqkVG56jhTyTqbUAHBcuK256uJ3e9dJ8MD9uzfRynuEvnu4gn99yag7DZ6MJYxejr7aHjBvznSLv",
  "key22": "27dfqrQqhmH1jrSFX35hErB8FP1yp3sPhLgUBi67tGYpfx1Rs3HrKhorAXfatiUzLP1gs5hmwdTmkvq2G9JgmwwJ",
  "key23": "4D4Jawezj2wCoPHMPZR5D7ZdD5mtuYtsQyU5xQCFjW5tsJCyk5nsC7zoK877aJHAfRUSnePAGsg8LBji2WsqrsUY",
  "key24": "oSGVwaMa8d8qSsYrJAWhBujpC8so8eUfTJ2YPMdrsQT4sebKgZsr4mXrVfxEFVsQpBNexua4W9Z9wCL7yzKA7C5",
  "key25": "3TEjbpZWabXGi7MzvvS9xoT5u6ynFiLGY2kEkLe533bYoKb7d6hiyi3NPrxoBU6c2KXBxgXErN6pGK3tZSGGfuk2",
  "key26": "5oJDpTaQ5MUmsZDNnqfFEHugtxZJtb2dRHrwGXCsP9Yoy3UPSmRfrZc46R5f5sZYzaWkMbjAhRvnDs3ESWgXy2pW",
  "key27": "32Ao9sELETKEtbtsyZh7oMVQkoAedHSiSGzVguheqBUULp8atZxVii8BHr6nUyHWGXhnWaxgjsSzZ58VKDFjpShi",
  "key28": "3RmjS6mHxMFZJZcnuQVfbsSWUaCiDpR5X9mZ9RMnKxCx1mRTXC3x5K5Mbbx1EPp3M6WdCAtzRYiVMgcE7D33tTV5",
  "key29": "ohRiCZbdvZrkJQiyKvzPkWeJuznPyfkfJfEHopW5ptgAsK6k196AZu5ip7BLh9Dtk9b7wxU9FHhW1Gpx9vyVs6L",
  "key30": "3oiMpWP1FoJoogRjn6nDzoH3D7iKXAiAQUiDao63rs67YbAE434zo1MSBmKtKkuYKSJc2e7vhn4xdV2wTE1JpS37",
  "key31": "2r78zEYqf5mXQrhBy2H6jfCgJ8QPzwJx282zzPVBs3ArFCTeuoQgNjAHiC8HFmhg5Qkbdxct89frj2mAtp9w1rva",
  "key32": "2HWqW2TdUM2TtnnS7txQdmc2CwAGyFtgHL8xry1cZjL2JyqwaNSaGmQPUEuYcr49bdr8zxNdWuWgY8zUy9Ey6nPU"
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
