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
    "E81ko85ioSTHgaLCtPNRaEyELEeAQkM4FVi2QewwPWeum3AEmVfSEFndQboBwwFwBnptUZaXygyFG6tS5K7UUAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ovfDjfUo9SN3np9GfgXzmEM1pE3aPcaQzfBAvKooQ2Zty7xK5qQUXD4qBgfgE6gmpwpiLyRQJREWfdn4Uc5jJu",
  "key1": "594YvdNX6aKR3JJUdHSk4Csyv8dw3nyNZM8Rwd8AGtSvbtZyFu711pS2Y3KnfMPJzqamm7kdvJ8FCm65sNzH2x6t",
  "key2": "64sYsRXdv2CygnVwXiXaFoByanpeoJEuagM7x18PMrWnTCWDBGnCvfHD9yfFCJHomnz6xZRb9B2PWnnwMjLLYs8A",
  "key3": "3jHMfFnEfygxZGvuHAMzTwky99smCkSLWe8j6jL6TGzE2MymSVHsk7M9w6jTau3RKP9r7HsHHEGcEjhWHP6ULFCy",
  "key4": "2BhetwP61FK88EmJVbPwvXUFShpaCokzto7dqNU6mf1TRQCSZPKmBhm7VZKjRjLwzr9PfF3TMAnJfzw2wmp43PDN",
  "key5": "5r8E13YK6JfotEcCRZp3HQNk4topEf9fdwKNcWo5PLzsZsHk4AE1SPEQ2go4otVhEXd7uttpod52veBuDJR52DhF",
  "key6": "2y2DMvcPACRtejz7oNVb5a1uSwn2U5x1iyM9KtmMiuueEcLp4pAhD9fLo6q8Gx2ateyeVKJBauapHiGnQ5xZbcbn",
  "key7": "2SiwjbbPRnENQRU5piuTK8NZPrzzqC28NtRhDsa6a24uVVR61rTdknkyictTtiVDavjEy3EyCmB7SyJtmwqYek9P",
  "key8": "2G1EEHDvypxdB1JRhPpsPEYbVmakGRZV8nLQkJuXTt1zWLG6iRAwWVtWWTqAQcDYjCBLzPAD7C52gVew6L96Qpuk",
  "key9": "47d6BxkTbLYQCFU6cqFUUcUUgN5ukJ32o7Me93QnKbfoYysXQM9mTR77YgUt1aebP9HE4hRKLtwQ9heTsTVfKzeM",
  "key10": "tFo63e3CtmqnC2AThCr2ABKxevehK796PnbqXKg5QiWK6BkinzRLpEua9vAgAzgJDPFVfZ9usXaiujsSGDB3uwB",
  "key11": "2oEtUiwG2ppFs5N9uF4rJywjuK1anQMxMezErxpzx2ZfGgg7kN6czZDfNyoKTb2NKg9r2jH9j4PF9kVv3L2br59G",
  "key12": "E4n5tyT9JF4BwuD66mkjaLJQYDraEjzApkCynDXeiaunPmuLEbdquLbvRwnCWo8HfSDU36tyzjxjMHXjTAnkcMZ",
  "key13": "2kSNLUkKT1BrR2rL5fePLp9honMdyRDM3WAGUyoKghrzAjVJVdNoNatLwRMrhyWdAAL3M55YYVb57JP3E9NEueRi",
  "key14": "2a2tVWkMsodbacdG1TsFGMse26mA9kzt4d25ctRVpq9yj19BsGH9oWfrYAngmhdSK4PJQXgisPZYznBCh1a7PPGs",
  "key15": "5XMq4ahsZYZQoDVa8wgvtDGspV4hThYxEeYC1C7iTdmu3n6HG9ET8kRR3Wg1jGpMFUsfpetxn5jk494DyH8Kt6bF",
  "key16": "3Ls7TXJE26Lto6aiDV3YcMkPGLvuDWrRJJmaujP6pHrkUvYbux3K5EXGCsousvw1GJG2dyKMxWA5AW8yUqPgjUBj",
  "key17": "4DymHjtnEGVJH1sqeJPTX3FWQUdDAzm6tXuvNVfyofC9SUmGDwvLuk1skjrELhMn7Ybp11xLyF5Cec1ojJetjgCy",
  "key18": "55hz1Y5s2Y6JQ9W5SB2yszCQjw1YZ2RZawQg7Soq1Mn3PqjvphMnafqnVinnVHPuHQfKxLuNhLChYr6dyu1cwfm3",
  "key19": "8ESw4Rh4o25sHo5EZNKKY8iBdKQ1kboySLGbMjBVdPhtu1RwPFay3HV3tntAhkynGFkECyM9gj3VgbHTCeLt167",
  "key20": "5BjYid3h63grbmEbkYpm2MjwKNpQYruDCwp7TGfm3hYCybZznD84FuZ2HMEeTUbXshFa42RmCnAbSaT4d4Eq6BF3",
  "key21": "5fBhjoT71eNQunkQ3jpZyunZ48odKtZpk3eKPsiHkmE7hducMVUbshUX2dSvDTyNRHvBcUvNZQqMYYno5h75jTGy",
  "key22": "5zMjN6muUVNKtTJNEfSMyZjysgBRUp4JJEBhoxaSc4fRYMj4GCxUd7n5WmXGkP4FQVedggVKBRTPAAhc9zH6LqE5",
  "key23": "3b4qcdEsfsqm1LQSuMgqCpK9ya54RA4TtTvn7vre6rR35KuKJtb9kZMhYLpih5gFFZPCQrUvX1gDRdemcvVvngPv",
  "key24": "2G7QB8CK1yHcKcyW1TTj5LAN93HrNoKKH3B284AKe9QfLs3rSut632pMWA5i5eZadqXeQ3YvB1JyBipThsjHbeMW",
  "key25": "5kDsNwtKhZsjGdxGvTwAVpkR9Ca93VNUyphAJyyahnqqxwE7xbNdiapM9WG6JzXGQTSrxC7v5H85RRzGp7986Zp9"
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
