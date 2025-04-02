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
    "2bh7mPsfHLzTBCdKAXDBjgy36TCNm1SMrKL5iRmqn5dU4fsFCQi75pJ1QfHTCKpHSjYZnJLSAhNE3gWYDKgd4bi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gksxkak7s9WUkvwxztbPV5siGrSL3jRRNJiz83YgHKBqvXxgxszbDAK33RYFR4XGW7DC4C6MqndSHHDYPTktWrS",
  "key1": "44V2SjrxAo4eBDeStxxBYMHM1q8QqZFTy5x4YpXMuiveQXrdLy6uGLiDJ3DHG2xyjCxhKxjkEVW1PacMVN6SPfo8",
  "key2": "3ZWw3kGbuS5iPQeFLcDSb14XEiLvDKQhYSKVSy8DoZAgdJCKxWjcCnRj95ZYx89znE78kkhT8Tyz1cxFuBRrBNna",
  "key3": "UbLmq9evKmN84KsXzZjpgyYB5gsipmPwr4jZGb2hp47XNJH9Py9W4sJPXACyYrigXcfhMFtgzAneJkXkwwZwVJJ",
  "key4": "37u5wV6o2P2owtuXSPC15JM8UZNubUF776QF6Kb1PL9vDWbMUFqHvvZrAmz4o8yiJbMvnrFhis2Q62uHxv8YGNEU",
  "key5": "3EvWmUNZmkHvwu5YvsjfDRhNvw4yFnxYvJXzwAKHqRkVTRNN2AmhcUt5W44a5BbFUbrhzGUbaFU1XoNkaZ7faWed",
  "key6": "4Wx3Gp3Dz7WYRSm4ZEK46JVmjx3jQT4qHTegjpDotrhDvjCydXcAajAtafPsw2ZSYQHVbdsxvPKRRCdesdpQSYyz",
  "key7": "33ajWVFYy1M26rDEQvor2XVcnxPgFuPsRYBTCe69pCFgqkgVTRJM81a74Piaao2xwrSqsMe8oJtGPPUPaubynxjw",
  "key8": "47UFhHsMwVA7LKK1H3WL9DAtE3LYzTX1KLGQy8SscwvBZgzPtqx99SSv4WQB64gg6ohv5R9gZM4Prawk4zJfMznZ",
  "key9": "2JdByMpo9KSKAD5owy2b5XfUqwu1fppjpn3rvb466bN2YypgYtH1cqkPiQ5464rpvtMJnePooL4JttQytxHYoGy3",
  "key10": "5hk5HVbichL3tB5pMg34MDmmze11PHYUCpwdS6TwLJ41eJuBCKy8MibRzMQS8SipBpSP3h3BqyAzSiMkxP4qkTG5",
  "key11": "4U5g9seejZXJh82KygZTPEBS2ga37xzoLDq9uH4iLne3MkDdngzXCKWEyR1ZzYF78St9NnzRaLFJsq5MkPtDBqoA",
  "key12": "x3MvwMDwU3YxRB6P8Hm6FoPf4cpXe1t1vsKk8YdneBm77CKSsE4pXKhkCXRzxNZEQqBkpghS58db5kGCR2SGLjc",
  "key13": "RefwC5CEQvWHZsGpcvKhDsyE7r6ZK58z7MWpLciqRWASi7qNq7gDK5YyMrVMsU6opGmGcMDEbvzySVGDHMi6Rbz",
  "key14": "3ee9jPhtoMTeYRzMXeTPFRD17gsTYWY6TeteMH6N5QeVek2afCubPsG1ZAuvijju54h9LowPHevCU3Nh3b62Xj3P",
  "key15": "3yukgDBEPHeM27eHkDrsfWkQPGd82AqB8NscxNP1nbrc6jF8rCTx3ZKYR6omogggTPHThFe7uYZfzQLibpPnDP2y",
  "key16": "5z1aoSQVo17hWbQBZYsad1H4VgzuazvaMgf8gZWiePk48HbKdWqfJYumhZmaCHZAxMAQsJbYZJpk81jn2ofEcN52",
  "key17": "5H2xdDzFeiFvKsjBDTpV61tfW1wQotzFg3M9wPaMfE129fmg7V9Zn9SxhiS1iWyYe5NeZjx13HZhC662ZeKBGg64",
  "key18": "5XCiZN5cdcvVD6YvYeJnLq5UsUCsuKkg7AiBLPe1Yx7wM9b5RYeuvv8YC9qX69D1vAF1xeMB5YMtA37UfgBYA4dB",
  "key19": "3oUxbWS32yVBmkMLXip8mmm7E6VS1gTAySAtWdbxaFYg4RS7WujvcMLxjd798cGWYFXzrTKqJvXZEzkT4yo5thPW",
  "key20": "3tTVbvcRCP6Ugu6hxbVY9h5ruqze1VUAhFUWEFe6TvSSx484bfj2abETf3HULLgwSpkWpvfCPHcxqUtw93zu2rU1",
  "key21": "2XkSLEJ7phPirrsPwmVZEubTYNSNg6yn2Fp45e7YVVG6JUcbuu3jCaZGG21gmauZS7fZiByGB1y1E5bVMMWRVTje",
  "key22": "2M72rxHJBWQrN11MLHQz6N6VgGvWPXxQgftLJGkiowZxHxbjcNc3TUpbr2bVjHG7dhma4GZHV8GXwKgyokCvCto2",
  "key23": "Jw4riGuNrEooNfBh9YMQ5oBEURcrqFHr9aD8HfAQ135vVG3AVuJ8TRnWfA12t4p2HwxFYBsnLx4jAczfppwLbKM",
  "key24": "41CmfhCvq2RiG9HdH7W24v6keeMi651cvqZCoKrr6scTPFQ6Td3Qwnox9VjzKYc6k7harvoGUpxFdmMs2WA8Lt5P",
  "key25": "2LpUgXTekNUhc9Cx8mAnxsyWVnJQ7THdEUwC8Fn3F6QR8utV14Bram7pmEqxKmCx1rMrDaat6znpCmo5f8gqwAqd",
  "key26": "2ixcnZj7qPQ7Vf1pAGt6jRbt2JDqADd1kVhB7KoZ24GKvVqjyC7dkKq2dv3eZtqeGP8b5gh3Gkh5FvrjiEDVTo7e",
  "key27": "27eGTNyAg3zm4coomy8krrMF5X84uvNYu9iWWFVNHXQTg3PmTDfRPiBcYwLgzSg8B9korLtb3CYYCaESyWanjAZD",
  "key28": "5YU6R6H9tK9V6AEZVRa4QN82CqgvdEw9Q6NenAfeLyiqKtqJWLBDzaQEMZx4FN6ZAYiaw8da3UXgt1XfxbBFdhb3",
  "key29": "5gP9ZYxxBs341y4SG884cRTWzp1hTT8bMgBjia5V6jTycTYqQkkUJCJXvZn6vUvJcac9UMQuTRfUE5qmbmePnyid",
  "key30": "nDSbwh6nV5f2Go2EY9FeEGdCAraGZ238rwCG76WjYNa3wyDnYcinWFXhLsLKwAtqE49BFruMcTRRrvnQwGd6WHT",
  "key31": "5Hwevhceu9BSNihFFyryNEb9D1zpkQfmYQ4oY2gVfi2wrgwPkTxQZxZefMNqLgSvXAwwEExTKkkZnkmiqh4zuvFH",
  "key32": "4z8G1psMFYm5MaXkmYrMDs2PY9PBMFHftjEo8jjfYfkNNWacQaRhJHBVrt1j4EHXXzK8RDqQjTSZgvxvQF1p6WF9",
  "key33": "41CvYbKLcrMEWLKrKU8MQwE23haxz8L8TNjMH5GxoSEw85HscKzMv9CPM7EYXRY5wUBdfBFWRDnPBHUjSnSdRYTi",
  "key34": "EFECbD6L69becJEHEpWUFzZAYwD8GzSeq8qUt5da8qairxabBskf88NGyAhp1PHuQU5aaJ4iuLS8qcEB91HA9kw",
  "key35": "DTUcwk8FMHu2o3m9m7APeVcjs5D42cmbuB8cDCMD8B1ycdk4H3vTkf8VNaxnbBVRc61XH69QgzZ9iaWZdgv3LXy",
  "key36": "5t4XQZEWEyqFpzoVYA3SMt4i39Yx256dVtez7P5VZsU7yPAYtctxFEFiyoEqnr3qjFEMZQ8cCHQdRhvm81GJtPB3",
  "key37": "52J4XXPcPQWJiteoueFpXrPY7q6egxNYTUhBFESPAZTJTkPNc7SwjafSTDbDEY9hkgJyhfFmNAfcCKuam8prG6Qn",
  "key38": "2aeooBc9DGrCWCQ43fHpcSXer5L9WjfHs6rL8QqBUC47YF5aXMyK5vY1DeHVfrE94Q4DPLvVVDfU1nZD2h2waW74",
  "key39": "2XtMEJt1fwzqMFUjfz71hNbjadb6CD3L2z2ngiVHRHQVpq2Pqo4PRLwqWAPCEaTfU6GmwbJaPCDLmPg9GKHGpR3h"
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
