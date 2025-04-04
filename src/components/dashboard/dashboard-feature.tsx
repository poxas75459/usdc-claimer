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
    "2uJTaS8rhPFbTUHunVQ1cQ4KosDv42azfnee8aLihJTh6sRopTboKyGyNJnjPa2zZy36dRbgFoaSKi3R3G5CsSxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eQY8SdthcLK6hrvLzwcetMJKpqLJJeQuckTpZqbdtb7ZwYPR1zvA8juWWZXfUoSSv7D59rDGobsHh9D74wvPAtS",
  "key1": "2crQWLUjyYQjKBVQVPiqJGXjx1rU1oQTHT2SDnUngcfST8tziwCtqshGU18svR728a9Kn8inBVM2J8nJnDwgbBDf",
  "key2": "55NJ7gBkbdAhQSLcEa56JrWio8K5CuBw5rZsvWJqHgSTC5eGFxZTRMVZd8dg6jvFtsTSXVs7X5z3u5dprswpEzL7",
  "key3": "2GqXTnxxXTtDLtR6ZrYw8LZCu2ATNCUqxRWATmVJdzKhaXyNJE9YrVNkUcdNnrZtVriTyrLzWvsH7xMEGCbGzXbd",
  "key4": "5unewpeG84CYYzC7Ybtcid9fN5opLeP5cGquMffy4M3Gqfi6JZ76nrTGVajQP63NeNz7SJjAFHikTfoPnu5H1Rag",
  "key5": "49BboMB6LhLapgRgN4dCbY1soeq8hhJ1VH44RNtvN3uDH9sY7SSdMJEDrjjS7FA4Qbo6RtFrqFG5BvzoYAyuRKHS",
  "key6": "2GSDF6bctFnj4EMAxwk8eEgF8gLaSJTBcxaEaECAQWwELVNYgVNUeVeLAYvGtykjiTq5WrkhTcKZSdVYDeqoSdpH",
  "key7": "2G2xThvu5cR9L3vRmtKTBPWAAccaKZyXxFs7jp3sDRfukvEdFanwX6ebdhVtqkEMcYhs77a7j3H56meum6if2d6N",
  "key8": "g9bxEepyM9HoaqfJRNwrkSYRspSSwKEqDrV5xsnF6XgiTttZNpwQH1wEHCDQSxSRPr6cnAFUxVGHUCQYukxiob8",
  "key9": "413DyWoZz8QFVspXRuUGym118Tn24UiavHpY6jrwWW3imRMHuAHzEk9xonfoAck8CjLLknbkbYzUSLcryGEGp5rj",
  "key10": "4JWmrefns3HWAjJxXxrP7vNNJ37HoCKNz8vcduWVnKJ4YdNutsvEiUP2FZzQnbjuy2fvmKAnxjy2jCW7xYYfbZni",
  "key11": "3NP1Vmm8Z8idPqD42YVAbFUMg5NB7AeroQq4vsUGxpzec431dhFvFpaSoHPE3SokRa6QHAhmvhvPxY9HiVg1NyAp",
  "key12": "5pugotMrCaQnDCcffzGv4LpiK4CaX7gj6ETRQ9baE1UEeabPbixz7Aed9vm2zwXtDQP7toHxwfv61h2bJCUeyfQp",
  "key13": "4RjwTDUDzNe5GsE96prbVkpv3CiYPcxx9ZGHJx5FURXC1CfUMssKQnXr4zWdB42oZ4uK26DQqWzWbZPDwQzmsuVR",
  "key14": "5gCi1TR5FvaJYCDmFar4WF5wQCXxRZ1NvXjgnUm5gaw6KENtLhmC1fSMUWRo94HweYm3V5Rq3sYWP5Wz18Sz6ZTs",
  "key15": "xiDEsNQS1WovKusF9QxYAtAGXCriWcLgyzgUZh1wrqi5544Wtmod4rmhG23mVs7nHn4zoeiZaD2d9naQJ98PjLr",
  "key16": "4kCexQKd8Sx5aw6ZHQvZDe6vQeZmdfQyHjsCzXdb694pmtuqxgbGtD8GA6b9VpEgnA8cjnSLuzwusfdNBQiRbn3g",
  "key17": "3kM892bTBzmiciD5YHQQySYi9CrLPrCSwgRcM2PaqRcnieydWpSVW76bEJ2mpC6ttLUwFSvKdVFheyH4MUhY1T4G",
  "key18": "bJ2R3rtY65p2HpB7XaUtdufgNc5fvRiKWGqdb33BJTph7cL8KhhCo4CLiRWC26cXpaqQ1zEwzRfQXJbPkhp2UBa",
  "key19": "3rRDxAeEfQTpBtrr1WjnkjmJyCSPaufLBZT2sGVvSzuNgWqEwYH7GfRt2VyUz28dFUfbErPHkyNfRp6v7czZWgm6",
  "key20": "4pRzzL2JwuvMR3FEyzMDA9v2JgvZ4vD2R3vyZ2t1EqPen4CR14ZjHECorN1snFyfQEhUfdTg5WMUsz6oCfsAUTLF",
  "key21": "5GGoPQokD4Lbys8Gf9FKFPhYyDaabXWsJfCnQZx4EqcNrZEQd2YRz9VURXdMwAeY8DiJ5cJEz3YWWaM6Y4hVJYXB",
  "key22": "2uzYhcZ7C3vCtEuVGnL1jvv8CU2twLJmyjeHgDcscxqqHdepTVYNB5DWffya87m8MHwUbNp8AjqeEJHqN8ZqCgqK",
  "key23": "4mR5shpYGL7qwodaWfyR4nWntcGKRSR8D1Zx7oNm43jT8pVPm1RHTWDSHpYtmSzas5rdf1P3gyjuqJdJgXpW5dDw",
  "key24": "2cgkQrgeXifzhcfV6UwWFGF1CnjqSvAr2ZAPVuMi6kpePgKbCPxKag24D8SxbBgiAtdRK4rfgtDzbEAT7zEb54jx",
  "key25": "3bmKEgjC2XkMEmBc69Aw5pcdMD9m8HJycAUBBT5MPNjJwc74ozEf5kFVoqXhdpXu9tGSfdghTWgQXXiumYes3Ais",
  "key26": "5JJWS3Whos3fPCuBasGgNhLQ3bGvCjxYTNWjzjXMh5cqHVTikNrN1f2rUKd17MUNE8MGxFbNWbus9hP53Hkcetau"
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
