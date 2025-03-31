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
    "4wHAuSjSCMZaezhLWoaCP7Yi9zXjmsUHtProBLqawWMeepV5Sp3Zd9k3r4daKYpfmZuVfJhSuXf5JxpFdEq9naJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31g5tHpKskGzA6MJJHiyfBJFvFkfqAhVmTUTiWZXQFxJ414ChGoTWx7YahsrTG9M7PTA2DCF5gVaVpAFZQ3e1MXR",
  "key1": "2SSBtWZMi9nbcfoP5tpbf5RpLu5m961fXZCQohLACZVchN5tnbhmtsAVarBE7ki9Yx2AGb3M8u74iJVWpX9BLz5f",
  "key2": "5caeuAdggS8WCLfCQU4i2aJNREE9V9unGW3rEFxsCmWf7qBTUC2mxEUk8mufHP23T1RMtejvb97yxnBvKzxNuJNM",
  "key3": "62CUMVnZm2pqFfxGqAW2CfUzXjsjYR7xKMS2uz3WgYqviuDJoB1KMKxMAiQwHcW3CtRTZ4msmNwBZiyXtCPWBkFc",
  "key4": "2bkoDfRm49u2soRSWv2SPBbnfhBMGBZKy2krswZNPrgvwBDN5hw1A6V6jh2s2dxspb6WdyfYw27xB1uM4JPv6qjs",
  "key5": "3k88AMo7kw3rRKbEixswJ3DffRMffFLnzmYwwrv19uzdpyD5F4JZQgC2Kr3ck7LVrTb6cY7bfR3C4HDqrZR18WkT",
  "key6": "2ie5yCT2urcbsRPqpSPLrniWJbuBeESYDy7hHLQF2cuYdkPMAyjr9RAyhZW3W9tGbtogVnY7tctkj23UvZAzqjQh",
  "key7": "2hF5FXtyuuuUZA5g1PWEDktp2GpNuBA3KMHAa4YVmKU7pfurMibaJoNPEUR8UGgwWqX3thKw8yHwzNACyUH9Vw7B",
  "key8": "4fhvVJk9pThZ1MCeqmCiSE6TpRidK97uLKPCP2QT3YjgQfeT8QqsffQjD7nTtw1nKPLKvFA1HrJ55sbGcBtbMKea",
  "key9": "4mTFnWZsXyQCdSxSiLGCmjRKmmTQq9qZ4Km5iwyoessx5DaGdAVn8CD5iiapcXMSJT7TLuxRQgtbYJT3bKpbwqnR",
  "key10": "3v312oZhmygkvuDHWeeCwu62aWpJvtSdadT87z1i2DC38Nygxj7pD7iMxVMhndPhHkh5mVBbvwEbVJi2RrLmeX7v",
  "key11": "2ZaWWZoAjW9ogbnEpo6Rrjw4XLsfvo6iNt5zcMjh6hUt6yu9Ua2P8xg2XRDrS9bkdACnTFAukh1JpVp9rJbab6mD",
  "key12": "SsFVrVcYRhRAtVNFCySsXja1qLf53FgA4xviQn1ZMCAf8EcKxjWwBieRbU5rhaqmv2Qig53JRydm9qm6p3HxPje",
  "key13": "3aystptR5xBh5wb1JMMoBJMuppLf6dQaFKqVPELWTp9mezoGZnuQxJ3oAZJXGGZSCFRpcAYzaYUqDz4WPYkeRdfU",
  "key14": "AjtnSSDexg8nHb5aLNGeyaWJE2kqzeRpi4HGd47hU85XV9PvMTX8XdCcvLnih1qMxhg27Uba5RnRKuwUPsq4DfG",
  "key15": "5dwvgFoYjjASPWvzK1aNqCP2dJT9PNbuyv9VfrHqU7ozChbPqMje9tXrNb8Cna6k1ZEtoERyZy8uma6HCgtpmVCb",
  "key16": "5oWuCom4Yzpar2ZDmJ5q7wxLJtFLY37ZkFpZ8CXDaEbDtwdGo73hrWmy1utLRJfipkHyPgUuwMQicMaCmpJ19YR4",
  "key17": "XRzmV5WMLdwYvqAtrdYVSoyT1uaQptfcDS2KM5moxP6zCw5HdF4PhWZZ6Y37czrQLePyYXGEE1bPQUZyeTJXbZq",
  "key18": "3495s6ZSq9cr1u3Mnof8RNYu8JNF5DUUJttMSUynKwy1nvThtQHD4DVoVm7R4LkuXjfQ35PLgTiVxHdQ9K8ockXh",
  "key19": "65nhAjAk7fGoHKeGCrrNF2xPzbwyEWqBudkb3qk2LNV9AMzWd3myKMHPzrKea35EN75tGd1Yy1nzoazSCnzuB7kj",
  "key20": "2myPZ13GWRf9wH2qi2QLo9KKckr2SDGrLk7GFSs3FsepmEgVV451ktrPoWsitMYfDAJ8zAQWxNDUgweoeBA8TAVW",
  "key21": "5tFzexwqr1ydzSc6xwLMmpQcyfS1vVTfRUetxFsgqmd49BzDXMcVBhvyH6EwsKcapK515VGAgfQ1dzxqPh6QsVLJ",
  "key22": "3coV4ToXG7UsBQFx1heVjcGUfozrnLeYCdCJZJSqJa9XpDj3B4C5ktxR3zCgdh51yyWovubQhCKBPE3Q6Bs9CAo",
  "key23": "rqA3WaF2R1zriEjpRhBFHYUV6aemYUcozqygEzrWRvaqpWruDsKr152a2yfTjQsY3vxkYc9sKCrppLi7SELdaAk",
  "key24": "5zGhhyadVmKsYLaESweasBjaDxHwWPMGb3ZeNcTrZ4PZTB6m1vnGbUEokoKjDX1H1GRwr7yv3N8CqPgaBshHBeg7",
  "key25": "nrMswdAybXDTkWyA75iqnNjZLto844zfa1zkHAsEhM5dyTSdr2MCP3idQfTczfMy7m6FaPED3rAfy2m9ram7sJJ",
  "key26": "3EhtDRKv8ttpwst2SLce5xBnFw8sPjapTX9SAzBsgbZWUvesrUJUphF8Q1aG5kUFDicPWTLUN8AZcYemPRv6RA1Z"
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
