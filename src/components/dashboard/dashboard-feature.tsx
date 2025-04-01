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
    "3mAV1V2NmQw2HhHHZWPLcvJdQs7yzwycaHbsbjoX41f2dDCq9TQMXwmMDbU3nDa9wUCozcxq1Jm1Cgbcg81zkMkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4venoyVGr49GQLCKRpqAeCH3m6u6k3BN5kieJz8wom9hUU91HhV6AVXL1EGrRofvN2XniQtwU1YqUhp43sUMYUNP",
  "key1": "TkNb4wv719TTnXev2bPZTHVfraRtnDpdjo2szwSKstgdqesPd4A59dsScfwDtr1ZWTbnGYV5uV87MmVTZaBCX8C",
  "key2": "2uDfpnQ9xc5LXJUBumZkAq41LLr7CN1De43hNNHybHxLJg895NZC4kLTRe1Gs46MKd7G3HzDAs2n5nueWXLbgcHe",
  "key3": "2HaHMmNow8mBp1x9V9hmZvnWTnHPHWfbDzzk3qNCnxPHbgJvAi4kXJbJ2epVHSXJacxfU9A3Yg1N5CkP7ioGBZVX",
  "key4": "hvSD4XLKgSCCL72F5zW9sVwuD8YoG2xcPJp9FkZKXqkZYWztt4M1QSMRLvPyTBd2s6NXscnnkwe4AARcdWV6HvF",
  "key5": "4DyB7QSMEmzYYjwsRiyekkkpNosD8QKY9DPfyr3guKVJG1qykDex8PNtfAzBuC1h97eEcVr6w1W5KuNFnQAyYqQ6",
  "key6": "5zfon6iRtB4BGvXqHqv2ToPDci5BU2nfAVMi1FsHAT5M6ZkhJVqF1Vga78A5fV4XEKvDntsKssq6b9Gpzgkrx4Fy",
  "key7": "2xqckPX4W15HvZ57G2NKLcWbNYfRSGvaFxLNpZQbVyskb7v5Yq7ihZ86VPiTxDNr5UwfokQEvNBMcRBqqHepj1iC",
  "key8": "5VAYBnviRmd4Vw1gjLaMfkPAyLLEgwHmZuJZvPR6byAhH2iKcV9iDA5JvMdTrk5bKUsYScRa5PjoZDB2G7oaG1Hh",
  "key9": "3KbVuqzDsPa6CjZXY9ekvURNzwXHP1HBzj23AGS4ER5iGpHNMHhjtSH6TGEVMykyNAq8DNxPo7ae3caJBHME6c8U",
  "key10": "CBF9Uq2RQLEC4A3FtAUdBxxCXTjpwgSnNRtbnUbd6DMuXTV4JRR2oUZXR8hoGvSvZhvUAL7WNN1LshNPJKfyV84",
  "key11": "3okk68ur5igLwzcMxFZ3xG7rZZF3Psat49iB1ww8fd8MH8DjqvjjMuALJE9eWF2d3HcjsKQcRWuLQp6ob6CYKkcg",
  "key12": "E7W5FJNnuj9FtmoHvZ1wNASsiaijpznYaqLzzHmdwW9peGoGo29zcQKzCB47hNav4WhpJ8qX4x2VL87Qst4SKkf",
  "key13": "4VUDbXqA5whan11kUBeGhYEUNF6fbd8W15nDdDT7yfgtAoPyM1gpodHBw5XKH8ebSg95ALqPqLZUJBKcRV1aVVXQ",
  "key14": "3FDseBQmso5fnP3ju8785W81aXs9gFDLNiNBSPjjvrbE3sXHDmQ35R4RbsYbXjLMM5fcqgonfrxJkkTHeatXdLKb",
  "key15": "3Lj5MczRTJJEMtc3C3e3nGT3huzYjNnTM55xRTFze4nDMnXdxxCQrWqrxpZSvo5bAFRfzaQzb3fvytp97QusfvYf",
  "key16": "5BC7Bo6B3tvnegEqTr626WpagGfkmN9pfJNKU6iGMKLB8LKzfeDVPHCYC4t2ZUNa8WzygBQ5SJp8YfkctchHDHWS",
  "key17": "sb6aP5RghEFcdY86o7QMS7uB8Ktjjs2WkqJ86NZdn8w1ZkanrEYpcFaMbgXqzG51PGuj1ZnVYzYAvb1VKDPUyE3",
  "key18": "4c8eaJ85TTpzxBX7H77fzUx3ZbrsEKqD8rCQmf6ecQnAR81wKPMQfZJo8GcEr4VyWa8kFPP1ZwXd9WytXH7CDe1v",
  "key19": "4TStdZAjnngVDVb3EDzvRJ9t8d4qRMPFvHwZgKeqAZXQN4ke1EriChhoGSUXvUh2NrRUFjo2B8Cu1JdF6AEvtL9A",
  "key20": "2kXkF314uPaKUcDDYXTNU25UGu2fgy1QSkLAMjWKJwk4rfcDyBoibF3ttt6yNYw1AcL5WSAnKoZKDYKpiNgRYxg9",
  "key21": "3w1Azpek5EWefZkwijgmzPm4XET8pa8ir2BUbvxEh7B2QnRxxURYT2JdUHu1vFocHbeqb6EV5mMN87TMjVRDS3JL",
  "key22": "4WZVWy3KKfFvZP82W82TddQKMMghmXyGYrXpzEHLk99tzcps1Ju67k9jhqCQQU8yVXHWf9xPr6Am6ACrNEbBYrsG",
  "key23": "3wSdiJuTKDuDNxReCchVRjtDGd2RPssT9qqSqT7TX74AX1fW43bXZ5NC6rhN4U4PxWqWfkcuWhDDyfjaYyCBZ359",
  "key24": "3fASrSejH487N46VNCqkkeoQkvr32LkVDfigM9tPbueDgvGQoZSGBCna6gnxAVKhZvQCfosVczmnkKyVJ9Qj69pj",
  "key25": "25AfbMU6P7i6e8wwaGjrGVhydGiBoWraznsbEaQbPScLH2DkRE6R3ZR51hk7tuWJyff8vcN1pFEQjPm3M87XLkus",
  "key26": "3eNLZaDHoguGgX7sWbkSBZgHB9cem3LMdjDzQZsNWaTqC9RB2LS94rmpYmDsZqThyH5KGxxJ9fsr9TvNwhJfFH7U",
  "key27": "5pprk7fz9a4WiAGH1CEjgNuT857zrKa94kiiaEymKhDUwRpp3qfLW9PUeQkuTVq4FAAjqKD8RUiiGxchRZL7Ab1b",
  "key28": "676FT5VdcyLPWWTTrRcBfPkg3dfRLWe8b8p1GwdA6n35X844k623xtLKLhWKiLsFomLbMDD1ovtpqiankpVYE2bp",
  "key29": "49P6sfdGe3ANZbQVS6AFdvyFMzsQcpgDifPPU9kgpbSu96cbjNxNkXCN7z88FtDMB21FyP3dqQUGDAdkout5kr2Z",
  "key30": "3ZUxjoYX9zoQZcr2qnSVRUh6hEBk5UWEPWs8p4DepPpGYn9BF9RiWJfgUNjuoNdP2uaYZs6v86fu6QZJb1ekYQ5s",
  "key31": "9jvMaBKjzkDcXXQRmH58XjjPxXrgSjYLXcS4y3vawfx8NbH2uteCBNLWPYoDZ3euUzd62sRSXhKszUyxxcHuhmj"
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
