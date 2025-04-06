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
    "2BvT9DHdjQPQz8Vw7DMiKA1HQPjVF2Q3tnkgpiordaS5SG1j9bwJ6YeXCUPZAHdLXthfX9BTWNkDN64tA8LHs6qN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fXrrs6rHBqgRSiW2c69cjbYR5QvCBZ9iVgxLPoP9jwuK3VePVPmx8afmU5MrUZ5oB2acKnEiWF5bcGUv3VM4TEn",
  "key1": "3NnLvEJ5QS5f1fe3tDVhddM4LKZ3wk5fkGu1gBxVVrGoqrizoTjQsg4GPqqzQLoCHZh18FSxpSTeX2Vmh5qD1GxE",
  "key2": "eYAYSRin5Z3Y9xtXF96VkJxSEcBJv58fb5VsebPVPKKryZhpLCC92Ujzjb7HTbKzqJynHYR9UdaX1CyUdzwKD5U",
  "key3": "48YKde5FqkAKjRDSG1mAtncbdowS4SExGgZXhCdfaRdBNsu1QFappUcSGzwDEHk5tbev81jghNa7Z8KxfqizPEKP",
  "key4": "Dr5imi5tQnVEWzGsJnAuG3VyrCJ7YaNzgTC4Jh8qjv2LEm8rxYhi5Nh3E7cTmybku8nLDeGCJT9qrYKuP1aHnrd",
  "key5": "hnNc4MbwbEPx5AvKDjHWFAo5rftvdAv9roAV518WxQxC3V2zD2f1LgQmZ81JuiJct9tWsPrgDp4nkVbfuT1VKK5",
  "key6": "2Yeqi2gCyGqEDvPXiXTQQ9ZgsCG9PHeyT6GdEAHin7wjHbbXfVHWsnzZFJPqLzaY5CLqyRgBr4AYeTPfRS7aqGmH",
  "key7": "4NntxFJehu5v5pxAgbmw7nXfUphJtA41X2dtUKKELs3j2GNY4eshCnqTMdcUdVY2gofcS2dQJzGcWnEk35ZSYfUx",
  "key8": "5xWBDRkJi7W5ikA1gAwRcCAGNHTUvYghvKhAZteLMNdooAmHVU3C93eip8XRh2ZBmdCL7TSEf9HgxwgfzVysJpmR",
  "key9": "5BUwoyN18pLtq4Fi35ejU9h8WkaArfTcgAe3EPxjs6m238975P7WvinC46coHr1ZEJTWtzueCo6LT7jZrLU73ZtW",
  "key10": "227HRStaZ4PH4VpjmCNPeiv9nNAJTufbvhMr2XNz4UeTXNWhNpfCQYsRKXedHrrzKvzs4c81e4vt174Rkh6ynYXi",
  "key11": "3zG2RpmaM3K87MjfBQNZMk2mcMe8XV47TjPFectJvpYVPEKVEthQU8jmRw1b6XUL11t2XXFEqvK2FhhrRFQGxQ3k",
  "key12": "5qVv5Wo9mkL8okcajMPbtxcHYVLhNGXsaNZZ3QvJB1z4NsEo5mq1fqqFMsSARsC8ChdCyPL1SJUk3BghS4327ZgH",
  "key13": "458UfkL2bXxEo5HyKjTnrXuq2X6NALdxNtNS4w7xpA8RTuZTLLKVhM596muU7VYx9S3A6X9qebBe62qXinqntucA",
  "key14": "3gquXY1JDBxbRH9go5fNVJArSTB2k4TavZhMr7Q9o2roJdqKHLxmDqDBivgxodCwJNMwXkbbVc45S8LdeRPjQguX",
  "key15": "3bMZrCMiRdZJPZymRtRmGyeKe4CY5AznaVuzbr4TTZQ6mwcpzfFXLqVZYsirkmzW9jgVXbh4HwUt9cmDtASxgMRV",
  "key16": "2B1DKeHhBx2hm4pHKBmnjPEQQ7e8tfUBgrsr3TYzuGr8LRLTLf9rMhdpxf5ZTzETrp3ub8wQJGCApzZARaP76XjM",
  "key17": "o8fssfxbtnXkzeSVkehw14dMQaHij8VkGVNx2ukiw3HERrqM7hLYhthrjoCBbn2QXoPanFwk5xgtDABvzzhAUDW",
  "key18": "2RXWrx2RcHjaFU48cwus98JSsFQXPstePQEo3yA5S5q3bdDbHeXuAAbadGjSmoZZpePVefj3N9x1V2Rm7mjJospt",
  "key19": "4W283xuck7kijqs5pJfBXBVEB7WwJJ6bC8kwgSVRkYkTBy7rYYy1oHyaYWAfb2M4nQXX5mCp3BTaDwy4Jufcdfor",
  "key20": "4hJgaNwewGZKA3dw7pmbJYMfjxRZiUFtD24m6CtPmHk9Fj3HTrAr4DcXk6Rjg2JbNw48vqWeCShfT5aSZ5kdPbnG",
  "key21": "2ch1rsAXPezxAjqUxaCy7pWe2CemVTcsdkQjXP6oXmmd8fxKmQRixK6aW9XVYai5ANpSunNspBt2aZMjD1V6fiXi",
  "key22": "NxAgHivedsSnuetvBtR2xacJomt7qLdbYLcn5JWLFRHwcu84Jenjh7iHyrJPxNSVN676D2ZcPUPCaYBBJQviYTa",
  "key23": "Lm1HDqPk5EHnTxkeKxiUarMUFWuBfc8hDHfHNLTMqPB3Nkg1MpJqiKEQF2wbEUao3XW6AJbUGGVYAsAA5NoV8E5",
  "key24": "4bw5UeWaF2Hu9izNd4rRmvSjwoskotnVPEYNXDtabCoVyfBLsDxrkSdoY4xisxUBopBRGAx2kSK1e9MWZCfhmKh6",
  "key25": "3ji7eTPp8tKjNfaz2tohBZkSVstCViBtKbfoKg3ccqnwWFDmAjnpftEkaNj7TTYBDNykGDinMVN95ibohM4nDCBA"
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
