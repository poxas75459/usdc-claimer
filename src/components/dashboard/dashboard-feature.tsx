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
    "4dqW95NuZnZdwco7VYbK3AcQs8WkxTZCxqX7CZTcXqmgWDcwXA2FRW6sSeSwatGQkqZVjx87pHUEJtZC4YkQb3sX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gWZRZTb2zchAdSBsqBWeN8M3UCd2iqJxSgrZjCHnhpgnAvv1wVS21e2WMwdmf5LcQJay6wkPhA7UGnogKMUHS7q",
  "key1": "5wkdET7ii8jp4dyGcnroFUjk7Que9DH5MA92PXd8FSGzRdM1zRtRMKJw3dnQKkjyzwdB7r93fQXDPwHzgGXwdkh6",
  "key2": "43VkWgbq8oy59x7zk1mE4enBKv7krrxgg2WMKdq1J76sTcBAqu6fvAm1tswS2M2xPtBL6ZiBSFeiHiCMFB3Jtqrh",
  "key3": "2NfmiR7yEE9ZCB6CxK1dyrJgwgE4rfHcARpUAR6guduk1syFgno2jt5hHvKhP2pqsHQkdBy2Kfnb3GdvEMMQrwRY",
  "key4": "vykUC6WxgDBWskp5aWQkfvD3xjx4XjCL2aJCaUo33dLzhxRUV84bQmPbiWkhad7H6U7y4Q6FsqYAsV19DCeX8Xt",
  "key5": "3iW2jVj1ELRPQUo6Hy4PJb9TEMvfbfDmGSkbSLH956v69ugPHogVe164tH6RbaqQJRiavjeRQwg4iZG9JwcDYe7y",
  "key6": "2HMmQHrcLLRKxB6xawcjS9rXznrCChSDqPsnb33mSyKa1ngSHuSYhinvRRmn6sSNAqK3N9A8nUbF4Jx4ZB5bHEQo",
  "key7": "3AfbQps4u67dburaT2v48h1PupTtczjV2R6TpR1hx7uHozgCT99HHaduSK35N6YwgxAEEpqcNBrCf4DMpev6RysW",
  "key8": "63LezttycsT2jPWBvGZhpv1Z4jyL6wfY1XKYcxaJu91Z7ENXPpz59QrEsWeDdemBdyGmMZ3uamq69Mh1tS7LkAxD",
  "key9": "24rjpSTUN8wthejx4dvybKSo5ozevN9AsgfKafYyxckqFPow6j8xFq8msWRVBfyrLB4Sk8neQgcywa8snPotwNKD",
  "key10": "5w3r9Vq1YARXTfmdZQjzypMTeLvkjQbDHDGCwtABL4HBXMk4FJTMgk1Zb6c6B8FMW9tpkYtxa1YghV449QX8KY5B",
  "key11": "3qDvMAk2mAgmrNaXtfwBxtnVWH9SK4uCimv1678gzeA141wAWff4ffsHNqzz1WG98gqKP72ccu8xzL58boEoXFWW",
  "key12": "VvARbu9cUD49WmnW2RgKqUPdeAmm3PrV97pu8V7mDvS8ZiPkhhEiYaDWVeBBiQJd17UD1CJDn8seTrE8S99Ffjx",
  "key13": "2NsYFFMPgAZqYdfbXnUb1ziwntWGPutcWU7cp8aSCYfm7aUrGtTD8kc1zq1ioB6zecBkH65QmWwxYh9CeJbZbSoL",
  "key14": "21CSZQpiqku5UQGoGdBVzRoYPLf6yWXiQLNhiDowhFn6RYxmyKztYcjQGmLx73vgE3ynBRx9c5DcSDuFjWcadbQd",
  "key15": "5pjeiHp6F9AB6dxKu2CjBiawXKNEJzrh9dWW7PE6Tb3kGtDzg6Rtae6wB5SLmsnqsJhQP3mZKGYR4RAWajRJDhPk",
  "key16": "3HMSmW3rz81unRkjaGMoauUKdNcYE6PKbc5jWziiDnVAqvP5iGhuJrjaers1XCgjYuu5g7qM6ivaxtKJ7sHNpPp8",
  "key17": "2NyaguJB2BNN8SZ3GTsLXZXmHWmBYADcuyByyJfJfYHB5dxuxqAepPvZYRYQvkXnwAX2FKL56qr7n4oV4cq2cL9C",
  "key18": "2epL76CisECofF5gSfsGef26ackPs2nqQfaJz69dsiwYPKrVxyTSVkpTbH7zNbWauAKm57eJU217C2kp7abnuZUH",
  "key19": "3m4J1QsuFmxRu532VkLMvYDzXn2FCxq483ZWz65pN3Hm3Kf8SM3ktfLBdwUcC9cgiaEqddNLNW4Hbhnes5TZQRzJ",
  "key20": "3hhyb8YQidLiiHcgCX8pPNHiutidssdGcMbCfMGoLUTv8CFX5VCGUbkcBq7D7Nk2JQ4koDxQn5Njx7YDght9wQgh",
  "key21": "2bManHo6jWV24CFN5amVXkhtwMPSuUggnHRtpQ3HUcCKBYnjAdTWVrhJ9CS7C1QvoaqKu6xwQ8mzEimaSDsqziP4",
  "key22": "49Mpgaeuo5PtQTiEx7kz4kC2eA85XRMZgds273xTiNso63Rva1SfKLoUGYeF5HpWQ9NDaVpRL2m4FMQTaNFMbeub",
  "key23": "3AhCD1UL8HKTZp68cc4kByPRWL8a1TEXLqrUfcyQHUB8ZfuiTaxj2wyqZcCVyJaVMmiALEg7YX2qJH7DdtJ2nxKe",
  "key24": "2uv2xwXLQJc8avpbWErTPTQLqy7FL2LEMHq8Uqumw6JQ8zhgJqCEC9kBvmYKBFfSTqz678PxjGsspmmEH38hmpcQ",
  "key25": "2B8zjthbTGTu29ZFJWCFBoHeEhXfaPkd3Dc4K5Txbi13YjEm1zjFfFy6FUW9pdHjNT8NQctbmXuC8FbFhWgmvtQh",
  "key26": "2ft9NEVmzMtTFAaiXonQQ8BHhU44ggp1vGBoipcwSLXCu85Yz1yWN8mmg9T1jpCqhTsy8dRM6owkwAqCc1N7Xq4t",
  "key27": "bHGCcHshE4cjK88pxgwTxDSQ1ad8t2XmZMZpRf6HK8mDsG7xsSihaYtGSvScfjkrEsyhnjktQuvUZjf5cQsUTjF",
  "key28": "4wkfgQixdpcMT6GVnFXUbsmSdhkcm2R4QBmWvfpU5cahrQ45fZSZz1wZLpSUzkLWaVusr28NcufCMngTkZxRpPE4",
  "key29": "2buXeYrS4aHCfj4xWQwF5dYemPq7H7jvdzDfobHtaj1C48uffxgcxdcRawnuy5GWCQA49aFwnn4WnRmnB7W2Quga",
  "key30": "4o7mn4zMaGbrGzje66a2YPNMWBxST5fYBKo1vMZQWeFfgB4b9qb9jqPvBPx6h5jyefL8bXvLAaKS8ixsuRRvscPM",
  "key31": "2QwBA16T8WPWoZ1u2TnFnFDasi978TBfnZp8kgGjcLoDD9ZgY31Y1sCtHRmGCcVZePTW8yVuqtw2CAJQz7zofY53",
  "key32": "ht7ZFPtFk8vR2NmtzbPvckEZZwKAEUaHNgtvTgdPFNW5cVxRGaRfHbpJVUKe7xjfqk3xdfJwVesTj7GijV975HB",
  "key33": "5KqsMDHLuPFh37FkE2QajZejietFcYxZV2sa4AdQKcW3DoTpvoVrwLxy1pt6DJovUVNwABzg1c8MZv9wgYnNVBeZ",
  "key34": "C5oie7ybCDjGWpphQccW5dTbpgjTFV483aD8dCRuPYFs3dott6VoVCa6Wo7noVxaHZGWqiT5PbiJ6N9XD35rmB4",
  "key35": "3A5aXTmxPjq6Fdfzmat1M2i3De8rzCyyhyna8pbY3qzTHdeUKYFjosF48PTDECTr3Hgeiq5KcT7xiHphj4xNqRaa",
  "key36": "3jG2UGZEnRFEEPNiUna8ESr52Z2D22cMdrqm7KM6fj7PAZsM5yq97tvbtFxSXJZJrb5QkAC2o7aru4F9AFhDCAN1",
  "key37": "3CbgHcUMXx5UcrkNyBPXCKQNh1NDmr2aXDNqJcwPtin7WrFCQUam88xCokfN7FBDapCyp5KhsamJMkoZKBpYsRnc",
  "key38": "4DsSouVWR8ycLHkgbvvVfhhsUTbWuf1oxDbZ4vHCwpjVPaDiGZQv7KnSKHDQAyF8UR6LHfWTETq9WoZfmLynydvX",
  "key39": "2tF3BQ3YeJ48CE544DfWwgen3asJSWQFa9FvYNtqxad87eU9RtnJyVNWwEZnRNjZP7ayEFX3o7i2tEcvqRYprgxZ",
  "key40": "5J5r2X8ou9cv47sp1dq7AUuENEx4V5a19smAfp9gdRfarDr8YNZuW8yhrQ8AJy3V5zhgG9VPDm8qgCT8Z2e6pDj1",
  "key41": "25mRRPfkZYKJXFYcnq1Sp8Ri12KfjNGKpJv7s46tEg4euBfRPy1zCziSnEb83qeaXdgCNjTWXdXZy7N5WixxG1zS",
  "key42": "5baZ1FuncVGT1Ji9twnrhntxAWCCUCQJgwsQsz2AuTpYtoWv4B6z1ZGdiVELmAUQ2fvN8TboqKE63HMz7SKxE6Tj",
  "key43": "4GQcXj4Ct4vfseQLqeB2g6dR9xGFk6dL6CqUoKgUwAnxVkxHF4ZkJi3krZDrvMKRr8omaHNUTJLzCUTiBP3FsmiH",
  "key44": "5jcXBfwfMRb5PU3Ttu22Vwi7UZWCpkNr5rFUjDz2GJ6qgswdCakhLzKocKHGMsk1QWaob7DHghjswfiBhuLDv4sV",
  "key45": "3donsFHUHEc39hDsF4CrTB6jCVwCkXd56Bjhu73YdP36TRUEAyN2HJZLeFbHaEsok4Jhea7JbjDMLjQubvzUYy2r"
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
