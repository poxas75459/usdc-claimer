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
    "3kRnGVjr6bNkv4po9CBDuYPXsGbTtsAGroMFciXYy9w8KNeLBNuANK44HpDuqUL2uF58AtoFgkfU4PQSf7xus2sG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49L6nsTq9E64RSvin2jEZeapoPiTScb26E7NWsRMUkREH6qijMqp4NnidqH26nD7WEnXev3HntNY4jwyRHwLuDzd",
  "key1": "5a9eyBuwc8di9qHwoQt9Mhw73ENjFoD8z9NKyMTLuqwN1dKmiqwtDWJ641oki6koCWiUMjENWvHMZ7apeBEEPTPq",
  "key2": "3qtirTD8t4qFzJhfUfCU5NWkPynJjQruhjR4pg8bGfH2DqgXGSKaCZbtGxR6HERMw1BLrBCXYMwY3s7koCkh6xYS",
  "key3": "26UiyX6eqQwdQzUc614oAqzNpSEVg75a64aEHk6hCEU3YQBa9mcsAXoUb9acYESD5PdMqbB1hZtmawRHM3413CNP",
  "key4": "2WRpYCb4Tii8ySnrjtYpYNGc8phHxoFDoCEwvrmLfgVGrQdkejJvzzSSt9Q97BP6uHbrSuBdS9cDAQxhA9n4uFxj",
  "key5": "4zthoPaYJXAwihDxdvH8CiC61pqczvPxankVB53Zp83QEadLUmGMCXXXoKNBVvxWw4s295rSZeFTjnvVNkoHFL16",
  "key6": "42HdYwP2Jg6VLpkUM4gFrPx7WgtR4dRz4aJBKXY4X59gJKSgSF2UgofaLgynpcqKxbjS5iJCs7w2HT3WeH1ngHaY",
  "key7": "2v8mV3sD7KrkworFANf2jDpHYZomxtF4TTphSnD1Qv7BDnBzJU9Dks3CjEmZchrkQgN6s3e31XkrPVUNhdQZkkFw",
  "key8": "4ss8cMG3GhmbqLEaH7jac4G1iJ9giJ9nWxzwfqpj7pHftvsWRoNjpn5xLySB1JK224tzpbr1zcsgb2wwvkkwUPDT",
  "key9": "54exWJLyGzMZNEAqzYMDJg2jL75r2T9pwFVumBU5x2ev3DrywgGpkDtqTipCk9wRWEHM9bWHoWPr5oUK35CqWDkP",
  "key10": "DbruGWc7TKnFAegQ3hDzeV3RiTwvLT22URuLbh8NeXMUdKqsrmMWqz8ErUDPcyX7QTwyxSZi1iDxxD1QHGA2sKn",
  "key11": "JmrMRuZhRGBACcJJsDhmJ896ZGNHB3vhuSJSPtoiakAeSpCtB1dYmETkvNaR2Qs1p7jgDqgfPwMsq3c46rKKGze",
  "key12": "4ZCRHLEG7DNYcMfzzTVpuFx5w9ic22EiZFHVci3VTy7VpxecRZtRdYMgEWPeFamSxe6qnheectRPKDWjED2UGCBz",
  "key13": "3uLQ69oWyekc3gcLqj3tbiQV6VfzmD9ge3BUk3o3seVydDyYtNQ1CMRCK5LxvwtMV3nw1RcuktKyfG71jskFvxFE",
  "key14": "22RCBR7CXnYgNfvqGHNyaQCby6PZRUotutitNYr1jSbSfAoyMRe3W5d9hHnww18d9bUHxDEFkM4wdJGYpKVCQttV",
  "key15": "6Tn7cT5s3TCv4aCKTY9CX2DswqXfcxKG8d3WHaDo4Qsy8g8x26ng2HvJGGuT9sTwuR1YErVEfTy4bofXYHbDP6e",
  "key16": "2CeKRB5g1uDcYfi6CWH3idHPHvAPiU5XnoQ3yas1gnLzwks9VEGuBfXK22mVe2WKW2djQBycNNECwgYXzetgJqdL",
  "key17": "2XZD8PdGQs6tFQudNy1HD9TNxAZEeJeDw3rjbrT2GSX8UsaWNUd77NaaGkDU9yEU4LVRpaFpiXUE3KhPBs6cajBn",
  "key18": "2hSwc9ZukQZFrmsEdK5MEA8pdxg4B6H6ZqFDN4C342t8HLRRV7EB9knKXy5kfUmNaqFUxGFPvREjbf7845YPSyxe",
  "key19": "4BgKzfRMjj7MR9bd1qo2NyVkzGz4bYS9M6oz5gpkG76UZa4aYAKmmaDCjKkAb9HFJpYSeZhYpz3ShNDyyZiDZ58k",
  "key20": "2xcbxUMoKgBRuxRbLPR4pTJG2grWXGiy8XXfBToUdG5p97CNGJw9KqsZEytreVsTTgHsCMBaQyVfNNKfomYHwL1",
  "key21": "4j7qUjicEagQFKWPKRVDCWFqnqYpy2hmRf8RmNAMGHhJKLLuZhN1vyZ7hXKdXfX9zZWvQB9nm7eEVPALvhvYcrAe",
  "key22": "4m7rYreupYXo7nVr7rzNbFZhLtPDerfswqUnuxqQcj4ymkjWM51yJEkhFL8zZk91oiWZucF83Rfp2G8kWrzbBQCk",
  "key23": "2XP1URN5GwYuuhMwyzNroYcfyjBpRbZfYc2rdQSch8zVrK1f8v5gerJ5V7tfHRtvnbRH2ccatA4ioiSiYbAT3y1B",
  "key24": "5R2rcG1fTZae12vcDoVMXgJeeZEueAw75FaDsQ2h7E6RDxcmtQKBXkAgNi8tNtXkQfqGJvBYtqbJs9dVzhtwEGmC",
  "key25": "fGScfa9MzjE4s8X9iZnTq9KtpyQ1MtemLdFQRK59WyNSAfW5yD8By6cpGy81AxUckPz6VpUjzr6rjrVCnKi6gdU",
  "key26": "sRK7KfyvPjEGJpE6ua6MEyZSkQhXGPP3gApwRDCnxtyDT3k3T3RGE1hVzWMECfWa371rZm8wE7SWc5uUYytNCR2",
  "key27": "4zaP4gTRHoVL4Bbz7hYimmY2P4RRzGRjT3ryi2kn4nQTHthFzmMzy8iGwWnZNrzZpdZcjmKSnhZmaSa5ykoBeono",
  "key28": "5iVXurynV7Bw5VtEbgm9XUVmQGUGPWr7psMMqQtmP6BkY9pogZU84EUA6VhgNSDgfJPS8RzGsiN7pdaB9cmCXrKW",
  "key29": "4pqiqguBSMAfYgQZqj7PXeW9rVdAbMQbdAUppoei4REYSX5Ydws7e7swBpBqhKbMf6HcwhsEx1tvSbTQMkZPuqWV",
  "key30": "4D1dHDXjDspdT28BJSoxZ2imCjdppSaRXCsPekZdFuWJVs1SR8YPP8EKc4EfEmEuEch8pCmceq8b7tZYQvPfuEZj",
  "key31": "3hv2JV4GpRL1GQ72UXeD3f7CBqLWZ5da5cX3WBZHFpgMQMqrtpoyCQoAuaG8q13RWMzmcw6VpXDmaGNDccGi6Caa",
  "key32": "362WEhcasPR1gJwQM2Ehiqx1z8wmwdSw1yEiDUFGbvbpszrMr2pDXYgytfewZKuzqJhwVC2RLN6WQD4d1MAx1Yku",
  "key33": "KP3UVEcC4yuUaxwzmFjELfJ2bNzkBDrfQmUJRcAXPBywZzrFGDzi74mhT4PSoUDNiSNohn3HBF6RnN9MkLFbeB6",
  "key34": "5XUU1gfLi3ZWHrH8AVSc4XjZ1Bcm2q3NYUPFkVg97LrnyrPXNTTYvsWst1BThkBx112jWqy5HjPKMYN3UyaoPHcw",
  "key35": "45Z4yfvXaiYeW4oAvfdF2kWri5wzTqnsSpg38yxUNmUruRfEKGq5jhRdRboeyhbGBNXFjTUCsSEr4bodQuFnuDBb",
  "key36": "3DSwr28WG6uPXVQKtHvfYhoNQHCyjRQjh6g6NUj32NQ2kxrs1uAyvyQcNg6Xm7af3oP5iFySyhgb1E53f9ZDXXo6"
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
