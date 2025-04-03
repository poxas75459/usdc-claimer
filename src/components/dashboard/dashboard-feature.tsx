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
    "4ihyHDFQAeQLwg7qtcjf4qmhodAiD3JSwMPA96pWwo2Lmpo6g9XRz6cbXvPUEviucXKRHGxNWvJpfgixGyxB1qbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wWt3k2wHvyY5hYJR8LhfBBSD7wxa1DFFGAeC3q1aAXSnmhA96NW4PLXAKvTLGXeanubxzzf1tAeeeY8fDX2Vgtj",
  "key1": "2Mx5q7jkrjshMEQLW5ckSNeKQwk6TKiYC2iP3EY6HE2dTb4arRLjzyraWpQziPJZRFFgJx6ejN5Tv4EJkQAyXmgq",
  "key2": "3H1y6ANTKkeGGxi51y26sDh3JewfYaPoeedWrXD2K8QXPjr6pxjJCb12g2ABJXHDdSC9nwxgGBL2PyUHDC6PT7Mb",
  "key3": "2Md9gmX13CjnbSBaGUVvNHG6zBA2ytbNSQsFsjqQy4y2YpPeK2sezPzWuVnWjkihoUHqFvqjUCgpevYx1AnFqi37",
  "key4": "WG9SrubHSf5zJDHbBGkE683djknbGQ1JubsgmhgM7NWfbKDPsubGvHAXJEh6bVwPcdgE5BriVMWL9E4egjxcz5n",
  "key5": "5sJu83hqMPFmV2HsJv4ofXSLEX29mx5nvLdaShEKqYudycfq3AEbUgCX1WFwmrnNDjjv5Z7hJJafiv3RZL6hMREo",
  "key6": "Wsv3zt15ihHVZdZji26opmas2ug8MDb6pDGeCQcTSenM1Gyuonu91PFFHQhWz1LQXMc3nsuwvaU4wmvXxQbp5Tv",
  "key7": "2XAWTfR2LhbaCjVgkpm8pQ9bTR3M1BHacWkhuQSdhnarNpNCRd8ncopQDAx3AJe2shsvZYj15akddEvJvwqLgsVx",
  "key8": "2s5JE6tUJL8frZwm1F56iHK9DYJ8UFEjzB5fCG2EoeHiPcfPWohaZxzwYbtPrYD1UwH6Cgban7FyS6DK44sL2Pzn",
  "key9": "4Xd2yvbyXKzXSxeu5NQdHtsfAfWXFh8zMZEfwAq1v6LAHrUqRzjESX5vTpmGGSfEXLKLxHo8pFqmo9sR3SvQZbPo",
  "key10": "55pP88YEwk7t7BWtN4ArSAVcCGrAPHs6mg6KMaxDmQvhmxvChc6qVMXL7tNWFJruy7kWXqJCkbWTzpmvSHTtzLK5",
  "key11": "2KQqRdQV3WTnXEaWsgMVFr56NABjWCqJ38GFcEH9hzQc5LLyKEEKcADuhuKJymuvwYpt3M3v7pzRehjj59Be39N6",
  "key12": "5op44sUm3d9HNS7mZrg5qyLWzBF1VL2sEiJQrvHN6tzZosd5VWDFcdgGoBUufEpwhqYhxe1kNMqv4a3HTn32AqP5",
  "key13": "65dhewbFNJdWKr6GnH5qyBp57ErxjRDq92tQeeiM929VaQWswSDPTrgyWuT1t17N5cmhEj4jbowcZyFpFVyYkN7t",
  "key14": "2tdK8JozrNBSAnk1ExEP87suiDR8YDHZELg1uWFZssxynhNgDx9f528NunprGxzhHaXcVa6E447WaBPCWYDuJRCZ",
  "key15": "2gEb8HemzesXcHvAUDoPDAcWXU9ku5eMCbcDxXs2KsXvpAizLP4ah8SKDDrb7h8dV9AAXcgyQ5JoLCB9RMoUYKxp",
  "key16": "5mzBBbEKDcBk8tn5SoPKmKsT27ryMPBBd5qLpKFPQh71drWvQjQgBis6hutopvMwsoz3D39RtN6N3dLTv6S8n44i",
  "key17": "4PeFxiNBafcJcrrdPrFy7i9hdorwr6Y86m5iiD7QdbCmpUHhUuVVkuz8Z31VGpptBtBADpcD2792n5TufDcndy1s",
  "key18": "Nbeifg23Fs9HTUHjurPXyjL4ZzBq8z3wSyfAhG4to133xsJ4xw2Ar9Rq8ERdFsZ8gB1EXTtoW7viq4dQmPD8fKD",
  "key19": "mNWzXaZSaYJHq9bvzqrFDpwSiS8TxQhUszkYpkDm3VDDDZGVraKKDGknVL1GH13bT6MtDTXZzxvbefQV7M6w2S8",
  "key20": "5ETgMU7AzdUoJngxHejjpGCkNUoaho4G5eSUkjddc8pCRCU83TTZjHX14KTegAhz1V4yuvWyx4o1ELYLkP5e56Tn",
  "key21": "4LaEHaEKQJXUrTYWPPu8qKNwJ43fk9THHr4ZesequDV3fLz4er1Hc88RcSMJos31aj6Dr81EWX2zKbLrzpDGSpJu",
  "key22": "419uM9CwUSxgRaBwDo8ZWv6uJRWAyitXa15vAhkm7rjdPyG1FprsZZmcm3EfmkVDsycqYRKyeS4Nf3ehAqYb4EJD",
  "key23": "2YyMfxwHPxv2HWR9Ea1gE82YQBproxvY2u4VQ7VENshdWYScFaLM8vF1v5dqB8dJdAdDrpYQPfALWuke4xptExFP",
  "key24": "21ZtDyfaAsdaNcptAFGCoMRX2UtA45KfrYuRmhKSrJgxownHPHhqdQ8khLjBsk4RTyjzZoJ6VDsZ6R61BrVk2BS2",
  "key25": "575t5hFqGaDMUJ4VEYJi3GcVnGmcDesWhxu3nrnZmxAxW6CLJiFJk7VXJUpyePQiF65TBrZJXT8uzcPCCEH71nx7",
  "key26": "3MXXroCrtB4i9QDBcWyMiVbNbqqQ6CaNAATwEeopGV1TYbEtL5cLEq1jbZAf8dnn33cmK4e8iStQFKjx2S6uymrq",
  "key27": "4LUuMCiupxS2Say4Bn7r5r1HyYT5ZpCoQ6g4aTruvP33kdCCWpo4zdiBzPWyC24coTKbsgLQ9zPSqVmfbbiH4fLt"
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
