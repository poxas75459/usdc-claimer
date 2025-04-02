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
    "2dMCbg9AVPMMimySKnGiDfoPCRzb4rJuWcQ7BfXScUm42oyMwF4BTYaTS6HPhdMU9mkbFupgCpfZBwquXyWrffKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KYCzpVfMuwbqmdKTVFvmNb7wCW8HUab3ioviJHFRSqGem8FzvmNPzrew2P1bFQoYcjxw7oCsXMpDZccSTJCein7",
  "key1": "4HoPLmjPb5JDZhB4yGuKcDDRSCR3duA2FMkHDruBawiYouuFWxyArYm7R9ygYXb6YpFDNLArn25mTrG6e4H2RsHm",
  "key2": "2HUHocwBgPFAjdm1nh41wy13qfCck6Njd4XB8MZz3Civwqv4kRbbWyzg8jSekNFf8xPhUPJ9GhcrVeM669WKYuJf",
  "key3": "3TsR5HZ9YPLsmeqe8wwuTd1MTKyg1p9TqSNNBzPuCVk18fN3sqahngkJARNxLzW7M9bn4wVBkKmtT5PL1ymMvvdP",
  "key4": "4NEyg7pXbboCWaqtPvFEZ8Yfuno5jV7nj1xW18yw6qw1x62ViJwSX2c2ZSUXwamsVHybyY33zELEVAA7P8z7kToo",
  "key5": "5iPbQHfdLHWLusvagGLi8xMFCLpuT6aRs63TAj4CP9S7ngTQA8rtUDwGX9KQpFxSooVfoMBaPpEzXS98nYpkA575",
  "key6": "3wbSHTRBqLrmVLdpPEQ3NaJHgfTLE833vQATf9vnKfEikdHfZRx485VZffijJsSdNto6QqpNbD7TuYasLzGdJF8i",
  "key7": "4iDEbhwB3KUfZ3hsR4ryJg8vX1MFNMKX91WrhYrBMtBpZyoebkPtj9moNhyRZDkHff44aEY2qsZ1ZmcsB6agEXdo",
  "key8": "3j2v3BBibhq7CbSjb9wAJZ8WWH1PsJD2Gf7jZYR8ABLJKa7KXDTCznCABAwy62pvZz6u9zphwjTCzy5x4H3FNob4",
  "key9": "4BB8UP4KpLJmB72dhs7d923SQ7fr2stA71sHKWgUurk1Ghfog1ViSz6VF1wNeqCkapQ5HAb5BQW5CZFs27hatDJ5",
  "key10": "2XkAXJuckGbPjE4QctaLxofQm3HWSFmVrfdnybugv8ao5nsB5gE2AqAPv9679U2NFQQBmrWTytz6Qd8eEXZvCJHc",
  "key11": "5FaVqur3WYfpxRWgC6JkwY2ZqECiduxp19W5hRDRQ1sS3aqguddZQgaTf3Qf9EYCQGL2CeZSvkj32GEMiJkFGPNo",
  "key12": "22eAGv2hHV2PVW2C4kSxpAQnvWjedVxgf6HxaJeQnJasBhhrbUfa3Cw2NP84tLcw6aycm9dPNFRgX5BSA7MC26SP",
  "key13": "2qmCHKLs3yGmMjKMq9VN8PGjefj9pbtx2wpBtDRa8LU86aecaKZJifiky37MmTpo4GrsiVZK9rwgRgY2B9C7ntMA",
  "key14": "2wDFdWFFwwNfz87jAppoKPgPh1BzgZFqzyZhFxD4eD8JyvvYwjNncsP4BwHPHFvki2hpPDaqVCMDoZzNRLK1VNKE",
  "key15": "WcTLe6k4cxWm4QwQ1fxtxhZRpktohY4wy63dzLoQbq6XV5hJBepEF64CrdU7wkYH3BAaNqa9Eut7teVv8DGV5vX",
  "key16": "Ju2fWienKcjVvSYk8eFTuKDxmaXsSBi5UezDkeAdnd9mC6kBc69xcE41qejSg37TqgC6mPoPTx1CmSPxFcM8goP",
  "key17": "22JHxZQC8fDS6ZCE5xRyKFxQteqjHVTzFsjk4gT3wWyxfEe8LoqWmzwAhnuEKjNPaxLYukwR1Fbbuy6hH5YuYxhj",
  "key18": "4eEMnw7zGEPx9qzENB1nUcA1va8hFZS9qQLCTXXxV7UPzbJMXuNhRWNTRJKaJcnhjvBgkP6hswZvLJoG6Zhvr6zs",
  "key19": "3v7eCugwZ9Ewj5h2yjKUnDRxXUEoadGq42QXW9sGryewjoWY2mNK9uVAeYMWiA3Umxt2tXLT95dmuBTtKUtK391E",
  "key20": "2cfazBxzYLSmRJ8gjrMnnbz4vxZGN7JbCHgkruZ2KFRQdeZmVLReucVScPaQXgYM2JB214JBoS5Rgyp5QwcAjVGz",
  "key21": "nJLY9Dp1wkbgFVZbLjU78wr4o3YWi5sxCzQkEQm3vLG98ZSehX9DMGqjkFCsPXp2UCjaMQ88d9BS8mcmxyCzLew",
  "key22": "5dX2S4juZxYXcHwwUePHAjr2zTSc9oXJvFuYk8UGqW8YyK9GcJeWAwHABk4asEWCRLxu6tHTwaZTwvwB9zFYeUJv",
  "key23": "2UWxPJdLo84RmXXXZ2yd6ecswpZEmHfaVJK5tBSvT4nWmkfM7Nm2X8oPu9mcdiAL72eB16H8ViXWstN4RQo2yz3u",
  "key24": "3mm6n2ASSk53pSWBfpbxXvqvVCDmAPHvUtBjByBCzjWnbNRi65BfNCwN7ZtVdwz7RW9q3AhYummQZyHUKbHnW9Wx",
  "key25": "2F4qQxR2LHXvqG4L6Ck8aqSB42KHW7bnRdByK9AzhAAzRs596m2YaHK1jMYXYn37h8NYdjjGkgbZ4WmpyMpZR8xn",
  "key26": "SoztbTo2awABeoesBVYgoE2kYvgGDwKoMCEPtJCkse3RSckgZD5LZkSnoXgm5QbEkUu4UJEd4kLBmKvowncWbYR",
  "key27": "cgsY9rZaHXnQM97sASRxAtFxpCshRX45aU5Fo1pqDJHPVR7cWjMTvxs3ZhHD8q2KLLQYtuJkMBhZqtyD3QU9qPz",
  "key28": "2MCxnrtYqhDefJnxeEmdXBF6gSKLTJXLqXkBpyJ6MSmjjvDjWBaqCfCvFvYqZyJFnZLbj12LXnoc5guj8mgp17so",
  "key29": "4nveSthDuYghxmWu3Vb2MvizwSUyidwdkRDoQdM8oNvdAsEhouy5tEZpyZ6s45sTBPhG7pMZ9vijRhR4cjdSdd3T"
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
