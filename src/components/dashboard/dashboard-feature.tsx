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
    "S8WymQCkQxoSRRLx2oBB5Pgzx9rAbyYw1Zk3qbp6QtrK5uib1kxUJbB1LbAnMuadmCpV5gk44b9LWvbZpzAhR7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KFzNQk85zM3UKVuCEwRttBeEW45GVrLY9t4syF2M7CQaM3NHZfnCiYaeprJYKyFekW7FRUkjDJnh9LsgRni1Y7D",
  "key1": "5jW4YeKHTiQDBrBcB7xTxfZk712nrbGSXocvPUvMFGkjxaszKW43P7htq9xwGGZTq5CTMDXDGGFPwZ36GNvTLh53",
  "key2": "E8Apn5esrArcT8ym3p99vopUiuA2YPpF9SNKwViPJfhkfzMtbawJzQ3T7yiqgnc5Qh5ZqXdLYEFSyjby35R6DTe",
  "key3": "24847JTkoyuzyUtCaf2bDbBJAHGk7FRARXhcyATKuWoH2z4XSuwhYxjWg6BmXkwp796x2RYxdyMJGuKdHHei2m4y",
  "key4": "4LYxp4MbQqFwmxgNB4sEqmAWBjNByddjbCxKT64m8zhH6fMqB59712tjHnzEdJNvBXsEaXcdC4qiVhRQKnD6UBL4",
  "key5": "5FECvy9BQ1C9cN6APE2fNAqq21d9grLofsfVQhNc1Etq161Q9ji43KRu5fKL7Gxx98riQFAstNSTa7LLd5Df2ryT",
  "key6": "2WrnsEGaddaVPKwQUJQGfLnkPonXbods2PXGfLjE3fY2rwr7kSujNmAKbUyEHDAGKYhqNt4eUbMxSPJcJ7prR5T3",
  "key7": "4STbECic775FoxdkTQee5ygnTTZVB7ZMLXdQTjQrkJG2BumFWsjLQjBVRdV6eKgLV4jjWFPKt5p5RgYBE9NfeXwX",
  "key8": "2K4UNwKDrJ6S9jAH4WgPcaYEcDi6JSYMMY4MPxizcp6mPJ8FFZUd4egXVfKRUncXy26CRiV56fP2bgjnxncuhWoQ",
  "key9": "4ovs3dQQeop27hsNZUqEF8E4xX7ao7SviMDYiXDmTMinCw41yZzspsiA74cNjMcEsWrxoHA8dZFFhMgzRRDwqVft",
  "key10": "z1x8NvivorK7dPimzTJ4FXEhym3wUei9Becjs3fQ1edPmJZmHy6GdBU3wBXpBh9QVtT5aXQrdqwvBdBZsX4V1n8",
  "key11": "2TrJ6yT59W8tzPzaJwqDNDQwJXHGdh566k6hB6pWgh1UojSxDocdaVZcfSaTkWKZkkBF5fWvkgEdFbLFZ8zTXN3B",
  "key12": "4ngY9SnJfzVSxwmZvBEWrhRNFe5NdPXQyQswMjCyRsLL62ef9cuhxJapwT8x7zfHKLNU4FphQKdcJYLPd6A87iPk",
  "key13": "3E2WgE8nkkFo797MXYwaV1mF734z9AnU4WPwYL4UNa4XzEuEevmcR2F8Ef574KLGXtxnPWQSUHE7NvLKUUZUnjBa",
  "key14": "26SjCMXBnZ1L5SeeviAH3jir7pZ4TWGQU5quHEauQoriChkZ4Fci8oLu2KsTDgiSwjAvka8p4Wh7wD44mD8URCbR",
  "key15": "2tQE3LCjEsfR1xiqh8nCfZkFsjA6jz13ySq4bUiaJgT9kpVRv6N3ZXWEmhLTXjj99AttjpuW3veJ1Xv4ekeXQWsd",
  "key16": "4PtYvRWyRD2Pd3ztrvT4X1APYV6NgCAtdM9yip3M2eRXwM8SeH7Qrz275pWcHByd3XXJjpLYYtYW4HNzeVAtUDjj",
  "key17": "g8ZzrtXHRcG9yU2Y9Uopee1sRmcw8JdYTPPWhsAn4FbLpxxMQrMhK6uvxX4NZGNZwjnt5ktbsBiPNR7bEqmjW7F",
  "key18": "4PBs2CcRBtjRVS2wYkG7Ysn6W2kqxUWjbb3BMhmg5b3j9KDLk5YJRhYopjVmDcL5YHLdwQJBsY6Rv4n11yHN7Bmn",
  "key19": "3uqhZQ3pPr6PPxWc2z3jkBRbvh2YWH4GNxnBTxiQBWe53bJMAfSwdx1Ymsfi96j5rqnaZMru8kk2hnZPReLSH8Br",
  "key20": "2yDMm4JFGVRRgeKzc5AGVcL1EUGJXvh7Z82nwo2Uea8XJN9d3eLxmW4HmKzHTpSn4LLv3QuSXuD58XkECsVmseSx",
  "key21": "3QwpeB2DxtFCPnWCECYiutkq2hnnDVCD4gCDFSYzA4SPHSCiwALCM35kG4dGcXX7XA3oAXF6i1BF5SWMkXMew7Jk",
  "key22": "5yKSWGRoQEVJUdhZHDCWQS1MhqNQo8ak72yBkQLm3eiY4DNCWDhXaLtvMfChczWdqjZpdZjHfU2tg6WxgLZ167vm",
  "key23": "aBJ9k8Sw6zaQEGhSGvQ1A8ypxLrz7g3g6USrEfyAt1pgjZUEEnbfTAfH1rTj7xmhP3TEGHUw5jTtqfs1hj9FatC",
  "key24": "4Db65cbtVWggufobgyZ6TCn3VBKVnBLictTrywKKkXsjZyEGtbUE7sENPZ23jkXRfLbusxARiWr2D8dpk4ByZZ46",
  "key25": "64V3hgzjhUuHsi42AmGgjQQt9EeaYNuK6bxkhnuCN8xpHYNHXB85nDNKngE6fG7WSEAa8vTXrLmg4ZPKg3iHg2aS",
  "key26": "66sa6MYFsaFdvVdcRKUQanqZj115JUD2zmd69yGDvHBi4DLc4jJaW5N6mnQm3mc7CRhSEkGQyomJ7TiWumAhBxZX"
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
