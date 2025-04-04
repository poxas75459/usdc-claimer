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
    "2kEnWn9QqeYwM4hq7oqa4BS7RjFWEnPQNgHN3s1Fk3bdKrxr3trX8wQXP9jjVhRAFSwXQHruFANWqvB6yJ678d3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rxxuqszXmBuR5BXmgtwjjKVyAUA2QHcPpY5ENajmxZyHBDTovMBi2gifAQuqtXwtuwQzViXNrCGC6E387kE8x76",
  "key1": "BfqUCTUZfz5n1rLuoRcFZHVHE3czDZxbjcCtCPPoosV5iNecx6kE7Vw4HKpR8tXvWXbW1EJZfYPQqSW2UAUsCxj",
  "key2": "25N9xTfJvud9MUBhKdURbndD14FNnJun4GHna9c6euDxJxFa27B1CookgM1rbu7VgAtY4VRdLYD3vW6AHqB8CnRL",
  "key3": "2v5Rcyeb4Xn6V8pDqVy5pbWv2s5FrAHsBXC7hk2NMYbmKcm7zxc8qv5BUjmNxiqXaG7hnhjcjN4FYoYRP4t1tDK9",
  "key4": "4L982ojrPZmcaEzs7GbNVWp64aDhtJjhWv7prPbN8RmQdDUZysfxhvVQ4CSg4UbmAijM8CMnj6bgjuyM87aZ5dUJ",
  "key5": "27WA1rXrjeSudxk915xwogSoeQvdQG93kEg47AG6TvpgdC8nFumeyb27uAJcsNDEMvJQeD7kx7XNZzJkZLqGbuS5",
  "key6": "5t1sV9do3LRomi27oj9UHiB2AycQcqjDWsPCbg7aPKrJa5Bhcu9bDP4yStnyUtdTTgAHseBbR8uJfVYZd1GQLn3j",
  "key7": "3nhN2n5gsPmiEDRpZ885ox6qYX98HJ8LdEnsfaeeKsyBBaMU1XoZuzA95iZYFXD23GV9uzf34DqJFpnpF9wipyFJ",
  "key8": "YwBNvxQ3EXAfP5HTbDAfjKfZfyxHZJ8XuBmYDPVaDpjY6mJDDWbeWSNA6oh7UFExV24baJ8Fd52h3P8YfFuJTUy",
  "key9": "3NiXF8oPjhPaaE7SL9tQ8qvTkyFx1ccmAPEiD8Vx3xMG6MNrX9859zzXJ68p1esNFaEaf3sdv4edcNhKQSwZB7vw",
  "key10": "4p8SsXc7y934ayqorxGriqYAUHNeiUVGqYNtK6KuYbV7RC8BB5vCauxT1LYbSmzGvTVPMYPuBs5Jy4Eob1v23o1U",
  "key11": "3gB4hFqAYa5vP2F35kFsxoyoJBotmBLQMNSz7gCv4DFuDfMUZWAATRSXM1mPfD3syym8nG3DgHpehcoteXW1CJVV",
  "key12": "4SAsaxp514DbCnE2XxW16oPDry4tjedGbwp24K5JFivvuCpxRx6s6fxVtoK8Gsf8hxAx9p4h324f5ptPY9xbkc1d",
  "key13": "5qKdkHZGYLbW6RSkQA1eLS2Vzci1g8xZcF7HWNLRves3FiVaFUeUvdp5JyQbDQvUahQVkFhT5ofdmkG7KJZf3Gh3",
  "key14": "gdyoQuAeSC1Qkr2fczFUaktjq7otwn1kAysrWu1gNpjgkHu2efgc9hDPB1QpSDkGW4KhG7DVL33SM7qkNqWVius",
  "key15": "5q51iNiCj4dGrXRavnWaQbcwoeb2Hi8cNXQX1gghCFi1K16Y3CZsUJF14vHhRLZkFJxQB32ZEqSCcdm7mfrvg24w",
  "key16": "3J8mW4LNQfXCpn4zkSCi9vF24Y579M2HBwpWYncyuBKcvLWXbVSqFsX6HNLHhL9gvyDc18655pzqiqqEgSZPQP8f",
  "key17": "42F3KA2g3ouLF8CD658Fn8ZZJ3HqeGCbBk6u6YPbGpQSPbEUHLy7nLe21frdFUYzxVcXpVPPKpoazmgB1bg73Fui",
  "key18": "5TrYPJEBNvT8QbdhVSexWVFdq8uhPDTaMgr9egGP6xjuupVboUbpgb115JgUej4qyt14UP1W4dwHDuMKAywdHv6s",
  "key19": "2u1rrXPNfXQqaqfgrHgGe1UDpSCtfeDvds4AWK3HC63YoHMhuABKHJMReRHraQaPmxGCgHpMaziuAShopifAGv5U",
  "key20": "4jtZ32kUjwVRjjoLdQfugNQWp4UnxZC7EwHZZ5TzuzjmDV9f7ZLbeGFvCrUxzhUUk6f26oLvCKhZBkkmeGgWDRKj",
  "key21": "2YvgmGH1MMYZ2AMD7oCZ93926pW7WWHGVj3WjCZBTVpMD5be9wwxYU5tEnAetd8sMRcaD2GQTB5srpNKJ8hYdJRu",
  "key22": "5HxnL8dygqa4jVZ3DP1ammF3tUGv1NZLRETznccNwSdVjiA45RZbBsf49zWAN5KwytZCqyNv8LQaFntFfxdFyKeV",
  "key23": "3TxhVHwXt2DuVCtht1DuLeo6ZAGQuyEvvohSDUVQmvz4JB2pz5xmLpHisqyrR1WLa35t3LJStrS2zF6ZpFNU5X8B",
  "key24": "2kUyHqwQLMtGGK9FtjSDbn4RDyrMX9dt2DJb6DaqpB4k4vvX4yHfd5Ahoagnjjzc91YtZaZYj9SgQLjXBXuLqTxC",
  "key25": "2CXFMdxdh9x6ALSznBnvR5hqmEgeic45GFvRw9e732zUiSxAKQqaPx8z1e7CyMqSCDMAfMPQytZ7eAcCcjHZjfza"
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
