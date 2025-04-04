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
    "3C5AXAwe8Pxt3BWqainqR3z5N4fNiHkqaFqLgdy3KzVR71uFbyJgRpJi8PRFfv7jGs7m5mmypJmwGpgPWvpCpoxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GygtdcVMruCjenRrz1suR4izMndZGUb9UsFw53GeWHSNpMPnY6CXZEhuMuP9UDDYHk2eFZB5RBstiqsLwSnv89p",
  "key1": "2cFYZkE9fkyy46s9tU6qQEYBemdjZpbevnWCvt3wie2D2dzAHSuPVCsdgz32KfMDLKUVUF6EAfSSsWnB5dMebPpf",
  "key2": "5SxgEzZYS1mNQ8drHZx3ZXnceu7Bo3Q64Ak6fBusDoiYMYa9m29AJSSqRAUuvqjCrhJAY56JaAyXMEu9QnMfCk2t",
  "key3": "4eqf2yKkmj5y7EFA3cuFXgu4MXUU3Swm4d8abHbMKmQ9gRK4pKA4z2eRMcAfbCtCSMn8qtxgP1A5GjNNWJh4Xkfb",
  "key4": "3iLHCHuQXaWJyoVXksK7tzvanHAfE7gJ73tHviwSqbhugKeFQ2ampPx9YCAP2v3DkWCHNzQ3rDnPEXcKz7sY13UX",
  "key5": "4ZSmaNyAujV1SojCxadQnvwKLy3TQwhkjXP6prSDLXaAADp2vc5pAjFhwtmcxfYj5odhTovKdhi6HiYxbNKGkxTW",
  "key6": "HWX2oas27P8pWr5Lje8y1HtCaFCHtbHkpUPcP2CpzpniwUtbnDhuTo3E76pWYKyqR6zrdGn3JM8SKvSxNc4fB7E",
  "key7": "4myXxABySywxkHjD4jkFCVueNEBAWA8ESvPKmKAwmsmbhrUJQRNivQd73vi7KEzB3Svx19ZehrQTrAHfpNZFZD2J",
  "key8": "5qeWiiuJwemg1EaKvKA8Nxv9Nsk8MqeDVaTssY8TJoJxf3jiRkttyXLwrbNbkmkZ7Q6uhzUy84Nx2gaMvAVqLmWC",
  "key9": "2XR9HthrcfpiCpFFsgrnE7u9G5vMZ8oEgqHFYwAt791JMfKnwhRZQb48b9y6EwcqgjSzxXB6zugCGWHL2vKhT729",
  "key10": "asHyZuN1ukKB5F7NrnzxWS3wP9LQ8EoYu1DPKksmyFoRTzuiCA6VdSmyX7HuUrKbGc1dt14BfzJvAppGM5YjKoD",
  "key11": "3xjDtKuMscHtz8nvvzMvcwn6t4pYg45BGpiNsdd56st9pdib7MJiNp1WqbVih4NPTBcKJpS2FNpgJxF3SX2cjefL",
  "key12": "2VmcFymufxEKmRECc6PZwbnpQdvT8nDJUFNS39TantSnUX6oXDrmoFL5XuViXMwbJU9M3faAmeaa5bcPLNZwrQoS",
  "key13": "3GA6LsrAFbjpAZW1Lu3AF3GeM4pu73MpbXp21rqGTGuWDmmBFgwNNqYNbvTxbyQBHco1rRucPGyRtiWno52Q7NZ1",
  "key14": "5NMX4Uxo16qQfPmvD3uRyrhUArsg4ytc6B9umAWxw592GJKzVxjGuhRACkE69EYzU3LEpkfyp18SJH1fR6Guf4Fv",
  "key15": "H6NEfZxA9kNGfzca1qGi1VLf5TCnFUc7z3SYHpXakbsg5tTnS6KKGz2xo8Md8MeCx6GPz6nmDnz9rC4Acb8K5um",
  "key16": "3s5pRqiHoujydJgALJaeaPZbCb1YhVn4ot5wj4mNvCkvFHBXABnD8ZzvF4iZUQCTL5TbKGqanmqKanTgq6p7Jtnd",
  "key17": "aN3yNDB7H2hv7ngJiWP4gKe9ZzQCz9UxJAUAKErwufLoQk4sTKVfp9rU28NPPHBCBrJdkY51ADtmL7y1ApWtP2U",
  "key18": "3V84C9fAE3AAqLcQ4TfdAAKEE92bepG7H9hsgsyY7ie8nWkuTfdQN7oNmnAQPRXw78C5ZZhTEJ1Evxn4XuBobqr6",
  "key19": "3ysTtKtt83HDUZWMgioUp5EEtXFJfTMj4oS7LQVwANZZaumfKXE4VxXrHArJK3R4oa9Gy1UARUJNhJe64U2pFvBJ",
  "key20": "2fuuXN2FXsbUGvoKUiMJhSr7MY9jjvEycQce3HFQznTAt4P33SPbwziVVCCUkizR1FyFrErf8gdN4VtNqHRHqoTZ",
  "key21": "J9kBcgiDHHDpjpdD6E2zdNK9Y5DynNPBRnHwnRytPx68i4puo63zSNcMu4BJH8iS89rhBo2H6xAKnpGA4wR8etJ",
  "key22": "2NPdD9XAUd1XRZaj2ySR9ShFakewNrEiaxPq4Rk3XvzqDfVVZE8MML6Auhss28ohocR1V7VNCwCNB9eqB4yoyHqq",
  "key23": "5tcLMHZLAH3e74RPantgUYoiSBwA72TquiwQveSEjf9UT1oSPZdZM22vo4GZVhzAwLMn9z2NoweixYfPMaeANCEJ",
  "key24": "2EhWsD5AsXwXAzGyGpGchczbcqLiMbcA2EWdwC2nEDrVwbuTY9bT8ChNqyPqp16CLavTfATCPiG3d4Ffzkc8S86h",
  "key25": "3Emkt51J2xoAroBfNn3Ry76rbMSUB9pnz6pjMoFGhvTohroLuDA6JfYZAFka1zPzveG1vQPhcmGwaZWriDTjm84e",
  "key26": "MsRLx6fQdNarr8WSuFtttczFCcgjstNAwE2oTZtR7bztrbkTJCYqH4zZMVrUhGFWdjXRUUj7pTgiZQ9UcLKte7s",
  "key27": "3gXkJQJQeDvuKAH9pewWvKnUymuK1BT5HuzxMG8K1WbCGSpW249ivnEbiwGJ5qTEv47n3KBFpej8ARctcaTgh7Cj",
  "key28": "3Kezsh5n4sUpxfnCY1oaz1r2DQJJxjAPeTxBe7aDUjwQL9XYARs12sCLtwJCaYxsQWGMNLmJVWzZ7hmWCzqu5dKQ",
  "key29": "2hRZ8x4PMRx3Z22B4QEDJsj1JBUuq6nQbmkSsJ9awUZqkaZHYXBLddsNHZRBdKtdmi8chdUorW9c3MZhbWtyR5ab",
  "key30": "2YQSyuqL8BkhrA888UH5Q2aXJTQi1MJZWkp9yT8X2oBKQZL66QZ2LhNAKFnz9nhpby3Rr8t19JtNsS1A3rakGSBe",
  "key31": "3bmppiH8JzxeNBuyq5qNYcEZyB4g7FP776QHw82Z9y58BPaoxXjx73JPm1MjNT5uafCCNsHwVit5Sg4arZuLfAsS",
  "key32": "5B5QWe921sYPDFT31ZstLMXLgSyT5nRxxYbEQXP2xBjR3CCM5FTu7yddzR5pkn7fL4fpzLqSqPJzuwALHCyXLG1x",
  "key33": "44dsNYrQtPrn1RrkqRBUHcLuS1k81STjriegBpbngjoRqLPukooFfAAPM8JqCJURFpPqfPScT8mt3pABVSX43mPh",
  "key34": "3vGZfdTbGaMbv1n978YE2tWcGPyfixhcCuNhQJzLQNEruEC3M8oZ6THDaZQhH3ViKfF5UuaHS9fAaE2a8J3szY6s",
  "key35": "3aGyBtStmqwmQ6sgMsmS7JX6JnV4ucv77GMz4fLrtEajbN5gZoswy6rTtHEBSPiits8oNXcvP8vSW2z5gNKRGU74",
  "key36": "2v32pHPgHMy2AY2ikjG3g7BLD5rbdvp5QkFsgHcbJruoXWSw78jEEo79YidkxkxWrmkxoVKi3q8vmisKfTSsraxq",
  "key37": "3hwujC5Ca7o2dYmWe4SmiYXFbTBEGYJiaeLtvY7zPg7cDoCNhxTGJvtPxKhcc6BdbPTFRfQUaQ2eEjd79ZYPQR7E",
  "key38": "4SHWj5VtbVDsSQhTizXvCxUZ65sJZCJvx5US3GngvXxD2tQhBb4Sx59zvPU517XPDdUyC8CPrr3QYYc1JAyGRxzT"
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
