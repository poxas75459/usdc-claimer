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
    "2V1GJzUSnJ9BCV6kKS1mSsbKnFgDGtK1VkCoz2TCfAzFGUhu8wbwKMzp3gjjv9z6UFZYZJSi48X4tiaxuaN3UR3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uq3y2CxKeh6rTzJBqTjWZqh3oKJwjJL1nZQcgdLVZDqjzCZuPfL9e3pCExBntHCT1oUqL7HHGHXXGqmjreSfWaZ",
  "key1": "zzuZ3XfaDdNz6UzoeXTh33rHPfHJTynXsVbLxW2YvJu62r3r6orjMVBSy4W4GzwLBABYXz6RrzFXncoewbJxwGm",
  "key2": "2E39CrBB7KNNhgduxEkKKyjSn2p8xQSULis8StePHHjVsNVE9yZjXNYxAgCJxMJa2BYqGV2AeFooj4r5KP1DB42H",
  "key3": "2WioYYbPJdsreqwNVYXjfF1YtyZsv6VGCtM5cmju8zQmXTXpm75YUZDhSGvgudsqqhu1X2Y1rMsV1BX4LpBeV2Kv",
  "key4": "2sag4pKWnRSjHALdXUxXwonY1GvJCx2RCqoHJtrJn8uPPu8cpj29N3pkkRD9zurGSEmzenmCsh4LNb26PiX4B41b",
  "key5": "632Yui1KQipVwADWqJMKEXwkPCFHY2qZGVuZVatiRpNLkkwtpXhKEJHQ5ZKYKJiMprUu62RUjA1wtY5mAdsdFGb6",
  "key6": "2mT99E8WyM6PutzEtmJpdG6Jr3gToBj2BsGQxYgnYNbeNMo1CSPNREYjNf6AENGPyybosA5EPD5j19tbGmeDuSph",
  "key7": "2x5WMqUrDMmLhAdbGST37eR5svJEoi1fiY9xGBpJFF7mAbLDR8Agh59EHmrARsWXnw1hQZ23KJppMRvjcMLXgrsk",
  "key8": "4jRXyCpegeUnLCEQcMLnjGQ8uDZFSL1Q9CoCGQoy6Nuzn4K9eJfYSWjoXQYZwbk7fsui8yuGo5GZJmMHZH3dgcNu",
  "key9": "2mE3M3QbtaiT9r5uiZx1E7yxPaf2UWLfFdR7HhMswzR1Kbdddiqt7wk5f1AjpRc12hPPrEZrQjDa1ZG34whfJj5b",
  "key10": "2oztHSXzUpoboKq5bND51JiyX2VfJStnhsnrgE2pGLmH5XWFXXVVbDXKYPvYWy1GKqF7a2ZNYpoToctp9e6WLAqV",
  "key11": "5GeUweE84T72UWSY5wgo22xHXwBt754rcfW1TuX2BcM8XiB9wVDL6J5BGC3Y6QYXb3jdYDmLDvgjSyHKFcMuRDnq",
  "key12": "5Q7fqahwS54SdyhL6R1vqZHcTSCoP71Nkcpufv4qudDTeo27TgtC6se2vM3zumRWgKViCzuyXafqjuH15JMZ8upL",
  "key13": "3wmjR2GZS4aSrVvhq6uTShFDURxTHY4BYFSoXQ3BL4jcgS4UBmpDjxyDR6ts41zyXwJYYSLfGCUwzcqjs5y5xfky",
  "key14": "2YnPD7vYDMFwacw6J8D2swCREn6TouApMNNWmkjsRcBu72VZMQiF6z4SPn5boxtLTCLhkrr4Hfu1h4xY8nvQXHpx",
  "key15": "We5S7oin6jhQBPMhg5Xxe6ugVGQTARe5iyga27dyEx1ZAVanGPZpJqsbz4tfDkHiqk5oFEEWgsXiy5f8gjGRV8Q",
  "key16": "2s8cv71Yace2tYFtzSW7mL83FsCjojtGfLJmANK7ezPE6PnH9e4SSM8ECcrXqeYTZTh5eLPMYqnYyGajGXS7Ej5J",
  "key17": "o4aCaYgjQxpk5FNnx3fUYjGHdqCx1zA7UKqT8zsxetu1tDMUf6ngZYuBQhy5Fed3RzLDFB7y6mu9nXJpV49xA3s",
  "key18": "5LsyYBfGZFb13WjFSz21xu691xK2JFRQQrqYoPstMNXoLAAKPHLeP1QoLkhS33JyZmFbgU7dYTtS45KnN9Mdsd33",
  "key19": "5G7uTETDwvZ6peFji1dakEZPT8eB5DK5kmHgKn1PQd8h2Dmm2eB6XKw1KKWw3yyyvCDxo9qPRYxWvAYgUb6xBhWQ",
  "key20": "2G1ceiKvDMaANnG7NV9hWaUkernFQetdh9Q9TjTEMcvPJJgJvsXQtDG5ntkPBgJZ7WER1jfVX8hR6Fm94oxyqppf",
  "key21": "GLfocGFkeu44KxTuxrtghVqGSTZHv6VZRxZEkNSJEsawXKWFCU21EWA9ZTsHCWUgPWvFzYvwmaoTeEYnggc9LiU",
  "key22": "4yAKSaLamuwK8xqDfGEtmsk7PM4bTD13cCo9WrjJyShknXbX8xUsJ1M7RcfhCL6PgQeqFXGR1cRCvaFqwBACebeP",
  "key23": "3C5LiEruE7jXEqB1Fa6LRmwUygeneSk1QEAXEGLeARSPdoQEdmxLR4ovZPQ5gkpmZRj8rWGG6HQLzNpjJXDNF6vf",
  "key24": "3QZeK13w1Ca1EQaaCPaUywQen5aTx8kDwywgRXKNNFnYpneAgWbz8YnHvbqgNZnWCaX1TtUYRkY2dY1zovJVgo1C",
  "key25": "3HLHdeXXgsTKh2atkm3ee5MAYJYdpY72TFYvqusUc6LEQD6cUxbiJcCSU8DgGSE6UMECzUFHs25SnzVV6ePzyGC1",
  "key26": "3ithKYP4J6G4mvE3dkW5vJCuYh3ihWULjbuZwUFLYxN1UKWVMy1htMc8va1z86hGfrmxAzpxmadoFWRMATE79c2A",
  "key27": "2VuK9vfvA3XReLtv21d3LjatFMfZN3wqMFC5cvk1qC7PiSJsKMZDzBtAzY5WzPtjFwMc3kdX66GicFkbJrvfraWg",
  "key28": "F4Wo7BMgAE1sQEmdB4PqkxYkUTpJij1L1gQtQ2F9S9xv5H55rx7E5th6DQG6GVKEm4Qi78GiY1WpN2uADfCuyFj",
  "key29": "2yVBeabNi3sPKGHMBFtTG7t3pzRqskqx1GfgBoZPR71svMEwc5iUGGpva8Kc2PhmzafKo84YPx4YwXWJo3QtyWhy",
  "key30": "3TNvPg1t6HMSgrgLC5Kan9wfky3U5rFfaqtUbfaUyG5fkNk6FngwTtkPvcoo8bFGUUgcQBMhGZKV2ZwN3aaALJ6o",
  "key31": "4Z95Rwfhtp7k5WxZWTQmBSbTMwz2ZxNL7umdXCqzw1bEuJDmnTRp85qcFssPsYLmWepSBHrb92mxEvxDVBK4CJpm",
  "key32": "DwG411vx8TtBKTJ2c2bc4Ske72WWafHQpmqv8CCC3ZYxXiCU66hnD6QkLu7iNTnFG5Ad3pGRHDMecURJfNu2mFd",
  "key33": "52BWSCDPhDe4JkLAvjG1C5cH8T9Rzvpb8a8wuzcEfgqDZkcJYPNzKz1wuKerMU4RPvwknkfFMkT32s3qAfwiBjqo",
  "key34": "pT1Pv5jucj5WmBdNLmrMA6hnzh8jqJ27WF4Uc6SCCM4umbMxHacAJzrKbCzBewLwfaVumzVWaYtunpeZyMpNFwu",
  "key35": "3C2L5MGNHTApGP6n4pNhCQA3iY864wCgrvQQuntursddbwhCyez5GSZsNQ4hBma7m7xW7kC6giUmdnH3BGdZsC1M",
  "key36": "2RSKnEPoWQNdE4F6L1KV1kw8Mfa5j2SW3KGaeA2FaksJEkWEEXNFKdnC58eNMZF7SP65HKEK4SuNury8UDUunQrp"
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
