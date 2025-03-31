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
    "2VasrETunUNjNcWNmMszHM3zwqRgMbun9aYTmuEnWuL41H3GfbuMKx4vookjRhpaYzktCXrHbWRzK3spYyc2ZemY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5geDGwZ1nXwi7Ri4x185KpdotkQYLPLotWTLDcpjKALr6mor6MxdkNpRQLoFNa4zHqcePyRk2L2sg23eWtxmaicZ",
  "key1": "5r52gjHtQVLnijkqsX9qaRpRvncGB6enyx8eoKYU57gxbKpwTJcLNfpn57xdBFwsBukuCBuw9tRM6KKZw9RHvysG",
  "key2": "zwbNog1KrGcxm4eJFtTNywJG8u54gSezKLEKju7wrsYhNvNERj6Au3w93zANbZRE6r6EHYwphtPikcFS2bxhTJc",
  "key3": "NwqHxUP521rPDfBTiAaLw9YobPHD7LYjbuRMyv7XABb4NZWxntGmgBV1t4ykvwgueDqWEoGovqPeK4vKtVk7otC",
  "key4": "34nSV4bgRXv5Kc1odtzawfGfJt8nBU5pGwxUZPLmtwH5FfxJmN48krsgeXjyCY9mVWUS8D1jC36phTgM6Cf4ddLX",
  "key5": "2jrCwvXat8NaLU4Uo5ZapNK4tQJiJWqDLZTP4X5tRDoUmJ6HvUJjwMiuof11VvNupjgT6ugg5dHaMXDz8tmnG2Y3",
  "key6": "9kR5KXei4fq3c79iswfkcAAqPNvEzJ3p8AmA8FNu9eKmFgjrpdDqTUUfJCqDL9UVmsH9mCtpADfpzMfi41oA1b7",
  "key7": "2bVVXeaPCfmPSWXAaJjgkL5tCRizTvQrPB1ZW8afP5EVxB31hEGE2xrrGsNozrUSjHFtZeycuZq2T15hEDuCE9os",
  "key8": "4zdzDW85ZG1FP3akeVwKpBsvGigxo3PKhgLTu52gq1zUhuoKEhLqH1TEbY9qxXwiHLAEELZvQYdapbpc4duaHZPb",
  "key9": "xwMGHRjdGP8J3a2KS1tq4LYoRJdTwXn1oLyDX9zesyDx2TRPmdchYA6rE5pGNNRdb6nZq1vwEdq3kZrCkNrhimx",
  "key10": "5QAikqFMa8ff15DJvtskkV11whALH2CywD1rhmVHaxBDASyAKq6duMdNcFbdfSXZGfrc1RE5mHyPixxLr4mPLvUY",
  "key11": "2jyeu1MmpT7cWHzjd5raVaRQzc8TGVxoRAoHErgaDLMFLmouQFu6VbWzbNs6bZkA6fCAH8YJJaLqPywvFvWkwvNc",
  "key12": "kFa8xzgroTdKvAGR1JmoptnHY3T7Br7bmodVq5kpnmw3QU1tzkRrzEJgqotZPBPnMrmGhU5BxmxE5VYphHhUnjw",
  "key13": "2cJXs5MPNrzHPrNpy16ne3Z9DNqXutNXdpx6pGnYP4anH67FWLBXpSsnm59KmHHBnhZFeYico116aq4if7qMkLfQ",
  "key14": "3aWYNFcZ3ugCUKjrvhLmKhDJKQ3B63Hq5dGFgTEw8C9CM1j8U5drjsWyqh91Ht5SzJ6UMajL3gmZM11jrJshgW67",
  "key15": "2daa9FEJWL83KgF9A2vvCpPZr6jrDzpNREj4hMfUP9pvwMv8SSYHiLDYxJQKQj4zUWqP62DcMJg9zVLVd94R5X7p",
  "key16": "Y63E8E5Jg76kuVL1bAtYci4pzwZY6WqSc9JGAy1gtL8qfbM8t5b2sKwkwJi4vf29TweJB9ckF2inpRLP6d9p31T",
  "key17": "5FuGtVgN1X5MkSbnzHc7tNyeksk9XnwvUYqJrXA9dwBWBV8mBqfN3VQUMJAVpWieG5hhbELz1uPgEgc6iYU9eUBn",
  "key18": "2f58UUqEJaXpQhKFwAuCqD2HaLfpFsLpNbCQW3wLgyyDoQQXXhitcwBzbQepkhC3aP7bsoAfgh7HA2VPnBnQwJQJ",
  "key19": "27Q1XgDj31sTJGyYgmeVrcdu5gZN1AthEN1g1gvSRXjDEjsMkiXu6MitKkyUCEievweKRKFdWCm71H6Zntj7MVvP",
  "key20": "31had3SmgWDo7TAAQ8cnh4qyqXVv48f4AnukCHtRBvuzYx7oUhhv1YANCFa6rage76kerAwUMARy6rqVvk6ebKVG",
  "key21": "4SPNTDj3FET2sCG3L9i3s57pTEeKhACh7BDdLD6kuk8sbSaskgsfX1Bz7ksH6to2q8iAYAbY1De6qJFKomxa136",
  "key22": "3u3KmR67FVa9gWBDNrc1e2VUvPGWqWMpV7feLSCPSF4kZS1BkD9u7pneVgMGHTQNCKx47A46aa9cVkZkKbHBwygd",
  "key23": "5JBndEBuzJeGs7YrJCEtWgaDhqxUrJwFHQDfVPgs9p877ASGQJPgXb2YkzN1gskaRM68iyC7kTU4PZizGPynj3pt",
  "key24": "2oiP71By94k9Kp7xg3HkgPjmw6Yj9K9w4oDpt2YXSBqgPbSbEafREEoazL6Chv2ZEdi5AomHyK23zhNpHt8dQvPQ",
  "key25": "5vQupSsGKV6qLpfRZpzEjvHgEGCXeaX6i69sqA4qq1wB6C2vF9ohw7HPrJemhE9xkDvARkMyRwjie5ofi4Dk8x7Z",
  "key26": "5z2zvtz15Wz5dfxaQgqDWqzt8ivPg4W4TKVgDv9VRrXe7wpKRfjd8pnNYRGtgE7xttgJtD6r7LcsjWMPCGBdPy7k"
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
