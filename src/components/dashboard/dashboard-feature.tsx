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
    "5QYnzZU13PrgAdbb4nFkHyz6ko7jYUXFoQbnfXPLyotcYkpnb1ssMwyCWweZ5nbGsdEXNQbWLLkKoKfFZTHtqDqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MWsAD4ULG4tUrBGEwe6S4NTPNhS47krixyD53ZbUq24tLtWuWeB8SJhTucSZm4cu3SWbWeY5xm5azjRxrDvY8bv",
  "key1": "3R3i2RYNr47udYhtiJFWNXAMBVQ4enRhCHTGAgeU5XjFg6Et2q5QbgPXXnhEQxh75e1KxgniEAqpwL9GN2QVMT4X",
  "key2": "mt7BHpphBi2BRrNxoKiU7PbxbjmFtu7ZZrSidJJmqytYUg86cG4JHs322KjTyBEaBks6jHtRUxdXoE9hm6nLNLK",
  "key3": "5S8wdyGtUdfEFhzoag9yQHVWyDSndEC33mpG2Dd2A7B6V9JFNBN4TiD9Wkofyoywe7z1JYYwypXpKmb1xmhw31g1",
  "key4": "58e3PzZCxPx472BxGhybMCd2c3mW7uvFMDCuGxvNNCDUDevYrL1p1q3uqgDAwqbxpr5M3e1XUgyhHc1xjzENrMPo",
  "key5": "5w3bXBYSLfC4WaA3C6qJHq6Kppukzg8bS6YEFJZ5NDE4F8MEkbCZrx2aVaS26dER95NNVqjic8s6vncqtAXJf7kg",
  "key6": "4QkXS4xozAzqW3WyZuUs1F9WY8Ks2s9iwwRgy1mG4xy1q1J5NcpNepVr7Yme6WhZu4TuiGvL4gFgaYLeNdU2AKB8",
  "key7": "2yYQQQrRksHC8ZrxeAbecdM6QUPk3CNj99FRLdVPxwvGeFoKEq298Nkdgk7v6ehxZLDcMuji6vvVytKMbUMQfhJs",
  "key8": "5gyVCekVYAKTeBZhdXfsD1N5TW1GFLAuBigoCTxk7E726MrV8wEVcbSDrpVq4SC8Z37UEiaND7WGJVQcyj314TYc",
  "key9": "2G5q4zNGeJ88c7GeFWPXCrQ8pGn4DSe5WCy42bxqVScmh9GVg1t6bWhZ8ydQMwQFb2PiM4koJEg7dnAeed5H7mmz",
  "key10": "5FL1ZrQb4dHYuQtat78ktLcLaxwVUYAWUUVK4LTvLg27oQcJm6X5PhdXmBYJPFgQvbqFnHJaf1z2ibYpYdBNVydQ",
  "key11": "jW2oPh6NuPorC8kTdb73WBjnGnLTGHwJrFPEYfWojGMugjsGz8QtE5JuMVXmcfT29U5o53gcAQFs8u1U8FbV7VJ",
  "key12": "28fvC9zkosAt8abPCffJXgxsv8S7MSDE7p2EwMXfy2WJtfdi5BiRQ67TxcEjFyH5PxHtoP4T8MqRjJ3f3imHsx1j",
  "key13": "4Ui4rkRm8RUwApw9Lm7wjvFUmMMrZSqSVUNyZUX2sHrNjjmSqQj2aYuduC1Sg9fpkKdjMjyZxFoHpEx4QRM5FnQd",
  "key14": "29KVwk19VeoVaZZJveoBnEL5GD1xh2sBPYkKYhzbnyjHE9CxwhJ2gQ7EB6mF9MhX9MbLE2eh9vucjJjScfbHgvEm",
  "key15": "5zn2Vq6fNqvXUw9Ji2DGHotj1ys81ENoN4dcPKm2J5HAT7JYfspq5x5mmgass4M2bypVSS65gmnFySD1BLbPqp6t",
  "key16": "5F3spduRPJCv3MKV3ML5cfr5mnkKgmnyRKaKaiQ9Ry88vSo15zFMmWggvVw9Uj1YoQ4rNBYgk8eAF4oVNVfNfQoc",
  "key17": "3BK5uYeUe76jnxWLdz1E7FYhnws8pYq4qj32U8bgnFZjbi9mMHLA8ycqmgR3xDsYwGUYvRH91vsD2oszX11YPn2v",
  "key18": "4nCVMp7uyJ4pqHYrMWSaLTEPCCUEBVKk2LUbQdqTJk7n8YmEYetW2mu9rpe43nXSkNsCFeKUGVFFMncYpFha3gNb",
  "key19": "KUWf6yQzNa8miPG5frNXB3d84NWoGhybrDmKrx2CygjLoYB8yya7BturXqfthMajhvVqPFTDbevX5CZzgvfRupa",
  "key20": "3zoJyUKBkH4JcZtTkyubXVTwfZp1bKaZK2KoGanDBrR3RKJ54nkSjsVW5sYby5kCkvHfUBdZ2JcRfnHe6Pi3RgVh",
  "key21": "ptNBPPwkPH1Gi3qmzmPTnXRDY4HxkSMnA3gPjake8qshnat7j1fmpxFiUjjPzq7BaHRE9KtztvJzDN8JRHrFdzg",
  "key22": "4bDwtGsEworgUPUnFHtUFNtyEseZgZxT5ixayQnjGpxtdTwdShbvCoKDwv3zxXCaLqNeB1AnT6ZNG1GYMPBsJCDc",
  "key23": "36rZBGxApUQxftGWgwnCvqH4k4jtBTMsSQ61AwPoTBXhHKPqcTrceF2VkZW6wf5NkF8SoycYZqgAWBX17pcnhW1F",
  "key24": "2s1x95NG7Qyxj9LJE6bgSxd2Ask3tSrMEC4jaGGp3nfEE1k2ytu2JfBt8b5RJfaMKxdYE71MWmHF15UgeigkANKB",
  "key25": "428MyDQewpxr8gs1GUYkYvRCLZR6Vd6f96qVdn45QCQKkGzmuuk7v5Fqyp7NXKVqGbr37Bc2GzczqFmW36sNSrKh",
  "key26": "3m74YaMMPyqTvVm1QgVwhE2FypCxnra4gPjDbwK8et11Wh9t1486QRNy1HavfKMFdCJgN4i47W8vkg9HoRdiHEzq",
  "key27": "2FpQwyTo1VGvcq5Bvqk7a7nLrudHVesiy2iLg5PZeq2Mw3xTaMPGdywnTNEK47djrAa8kzjfxKABimYMxDz1mLXH",
  "key28": "3ksvCovqVB6BLotngkyS5CmhzSJubx5Pbvw3Kv2BSijXj2AbeSqBnQa3dJzTAaDSvRHM6a61uJB5KwsPaYMncLsf"
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
