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
    "46PdZ1CnQBbNXtN1ExABAnmWLjzg9Ks8CfaMBg11PeGBnDaK1UfUZzE5LESQCVPourdDorYTdhecVDdjEE4MhbSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qPgDEvHpXiQ5nHEBEbzpJTa1A2TyBKbzJvYqgGpni77p9L6MeYBfcJd6r5jcvNoXYcuT98EDhgCATxjWSHrY1MG",
  "key1": "2Qsmxt5JfCTgX3DQyJwLRKHdtzXiBVEgHEfpyaB48Xard7pFhaYi7Nhzic7zpF6656a1JP6bkF9E5VLZxLuXeEc4",
  "key2": "wfKiWnJEdGLdHcrNMSpcX6Y3WApCSgbDpoMK8NgnvVtyG9CTTrCQ497MnceEqp6dtH5Xm3Wj9SxTcwGk24A9Eso",
  "key3": "3Ne4fBDLvfELNkHWvdAd4VPhMajBXq96xp4TLGv24Na7mSMAudurTTdheKUymGyVABqEF28u9P6gqYUkkihEriiH",
  "key4": "3uqJDBG5EhbqJbNUFFaRspcuzRpgRbYuCc1zKqbi2B939Anm4vgqQxvusRdX3W3sHoQLXGg3wkutNpbWYFg9gmmD",
  "key5": "3mZMSiDer2Bam1zitZ8NDMsWEdWHvNGwR9xnwZkFQ5wJX8KWQA19wpvNfCzGaWoWTLwkHP62wrRxCof9YuTAFFVT",
  "key6": "HxqdrCYBpnoa1nkXXqzYFNLVkXCyCeypVLajN6Y879C62r7rWF4vHKBiosWvvCrTWBaL4VaEE2smUtuXEAn9AVH",
  "key7": "3GKBTPznmSk3J4FfPjg3dQai8eEKXXYnDckPyaavdk6SyyRx3LWudTZssYmMJnMgYj2UDxbV6725zyCdEX8puJCK",
  "key8": "29eZLyrSddtgQj8wWfLUMsC6hwc8fk57cUZsYcHHc16vMMMvff7Cqg2vJw34g9ASSoe5vE2s1PYeB1fZnBrGKUA1",
  "key9": "3UExWuSkPY1nyX4fGwNe9ezRVBD2LNyNUmcCRdkBWxXg6cm1vtJDYMEKbn3JgJHRber8dN4YbsfyQHGMNRemuZ1P",
  "key10": "YHiVCVPvayPBDbrmAiVxGHC6WyvnG1gXr2QETBBqEkKgD3MQ7F2mujC4kNVbLzBf7reaexRmTBwkpGW3xRfCaBT",
  "key11": "2q6piJTGpy2CGZL9B4yRm5mHYTGmJRP4sJjmgxyScSAeg48w1dqbrC5iBtP4uvHpPsrwm8A7ZXqe9t84MvGh3CJb",
  "key12": "2SZQioK5SWRhhkUjdkgVEeTjtkgkpUFiVhqV3ZrxTwNWSWnuR1kYaYG6gMUAFYoQVhj8DmVgDsCXMAeHSvdX6Uf5",
  "key13": "2eF1s2zq5jttUKhqgfkjacTpDJgo1cDAZvBxhY3xX1WcekBNvk6PCqREnUCWmsZR4E7wp3Qzf45xGec9dL7TaaEE",
  "key14": "5W82WUPtAbUKQF3wPe279ouZYw5hLFNmXvu4HWuomPtmedSJhiDkgT76Bp9XRJ3fDbVruZgcszPfYPW4LmLXBRpV",
  "key15": "27P9pPuBWioACkNbsGyg9zNwP9RGJjLoZnx4nx1SeAEHPxsiCaqcYd29mwtH3kNqLQY9kUcJfQkUB9PJLWwfEaRH",
  "key16": "2Ai8YqQH3Cwhe5b8BjGBzVMnEpzuWkPSniDgRtxeXmqj7Y5FdKjy1JtuhKEMz3B4NkNTxipKvwviqD6ZjJ4GQPo5",
  "key17": "4GhC5Ex1zt1KpskAzaVqjMtQdYEYeG1DNKromZ3gHXNKAsToZYCxEtUbWu6RubLumH12DP62oBpQNXHHwU72NUEu",
  "key18": "5j3KsfPcuKxNCtjhe3Nkmp3zYpNKKKPgxLdHwHTrMyDyDz8Q2oUffurei4xFbhKxg1VFTjyipTPMXGBfuwXpwbNW",
  "key19": "aYfmLfTEbH7QeHnkQfoi9ztZYnQpBJMFteq263HVdUiikM9c4nJZDqpkzL5k7Q4MppenQsW1MCcFFY1MqTtR87F",
  "key20": "ko4YRmNSX7v5vv4Pj1moB3Chp7tnnJYYrv3Xf8yBZpktLqXSqhASBYoedvsjntvRqk2hVqzEkVjypxaaGQ14n4T",
  "key21": "4nv56GBGtokmjkV5Vpo4Y9ZDh2e1J1QfxLD3awJeMENSqjs7D69YgBXkDohw8BLtj4iBahq9QaV21JpYPWiKLM61",
  "key22": "21PNMfeVEUijZvZMWaKYJoGRyQyPXtRX6sLZtPEibCEeb9gtAS9zQsNkBP9TxmMubsM7jS4smg26fN6TF1eCPR5S",
  "key23": "5cGUreuxdiWuKXK9S5Guuxg7hUSqRAd17SWSGpBCV1LFvL8QK6ztRkbns7VyL7cJTTquwHaAC1CkEd3CWzaWqTM3",
  "key24": "3XbUdfMDrwekK2nsnYc5yGPT8sAuT5pE1X7E4AznrHwEW3YtQvWUhMjbmiWkbNUQhdBenQvvG5Ad9vi4JNHoaffy",
  "key25": "YMMPLVFEV2oRwmz3xr7XR4fhfZNvoUypEGd6Ajp6jkiXzS6qjSqFjx1fVoYUabx7gwe3KQtUXiakCQ9phVq2c3s",
  "key26": "5C7jw9pZke425x1vsZmTu81eBhsijRRoobZCGn12p7qBsmwR9zDZhPUqajNpqdWfm8mmXUzfHgjW2bJ7r9u4ooPS",
  "key27": "4qqAYzh1Pb4VN1vAuFLB532xCegiWZ4N69kCFQFEMvkX5iZzFiPtB5bdSB6WyvAiwjnBMGf9EaaovKmRqrYLKsfm",
  "key28": "JMMTwcqo2T6adehdj8o4SgycU9VjVHD27Mkq2yzaGRqdxLwMesr3AhVLjk9UnMvdiMEA4GrvfLk8FmZvYqhuu6T"
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
