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
    "4VVFGo55CWqKdCCMUeGytQdcA71jkwv9grHZx56KbMDARz9q2wfRU2sLZSgGvBUvm7h7C8Ts3s8APrbqNuAJu3yQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BvHYGYmMQ6qUAzmz3gF6dmy667oS6K2y3sbVmbNPJr5Vj3euz1LfSxzmxRGsbuzGNXqLuUQUQAUMr4d2XVSGEcY",
  "key1": "4WNkSxvoYbj1cAiUtiotMjNcjEmv6jiHMNZaWwpR8r1xL7tfSWUSkEN8tYnsVwUEELExf11ChvRzEvW52RiQXWuA",
  "key2": "45xqLGyhuWSk44A83qMFz8u6w6c5SU5dCMZT3uqHG5YYgq7j9myw6AxeakbsQz8c6QhqWPZaZR7nUhRtnKKKsmDn",
  "key3": "2j2TmUGuc6Uu9dQgBzLvuM1P7ykAnZvfWcfPKsZRDEq67qLxh2DLfwvcfqcnH884frmNesRZMWt9MtD4XrEXqHBE",
  "key4": "48mKPnkU5PUj2N1EUoBfd9SCVPg28Sy2RzxwrEurLbRL6YvqQH1VaEp6UxTzEdxjepXmbyQYRed6dMgoYXVwSwfT",
  "key5": "g4Zx1DqkskCaRWrvogGWd5oLXnWRpjrsVFGdY4optV6hRzoJ8EQovdMikUjRono7CzBP7imao5jMVDXYseRaxKY",
  "key6": "4MpZBn2jtZrmkmWBKKz6znF47SL6859A7puf8WFmVwNFdohTGxHE71uPZGwrqELqhge1KZSkSuRfw21zg49C8R6i",
  "key7": "3ecvd3vgDvYxjUGjCSRU7YF4mRvAM8rd9EeYNCuKRL7pWgucU8S7W9mSTBsr3pE3JjiZ184bWBHhJudVASgFAFD",
  "key8": "2orDv9KccmJGTZLJAASGm8HHWQq898Dm4MDG1ZwANrG5WKdL1knQR1fnn5hwwbM6QbkcmGnWpNvwbrpxAjLZ42bj",
  "key9": "66EyHYX2g9oby3R4pB77Lc2nFh2nrzFiU9JCowrFKa6fZ1P2MEWCqucYNcnFEWPNyJLWJAyx9aA2z3RF5PWrMx5A",
  "key10": "3tfJDo7gA44S3JT4b2JFwv5CtaZNqt5Zm3dRsM817R584xbpDT3mcyeFjTj5CpEQsv8fDzyTpH8RUuN9x6nCxtNf",
  "key11": "3YxMbJ5bGDU8nVAA9CHMA9Va5kaSkHu9S3vW3oXrv45VtCc9PVKuJE6qqs4ksuaa9Ckixp7LCin5BvKv49tnNEfS",
  "key12": "4RuWkUZ7Y1k8PnBJdE8JRCUvWLeqRiBp56rQGuvr2D6ici3AriXxhdtxkG5XYbZ3gyoP7Pn1LtgMum6NLZogRjP8",
  "key13": "5ifn8AHhwPBzawzP2mciwt8aqojupCnzrUiqrZJ9UpNcyzi6Cj7trepWfi8bR2Xdr1WVcdV4f39uHE7Xw3BRu659",
  "key14": "2FERx2ERm32QAVY1oFde2vYG1czdXwUrMh8E1vqSE7q96WaxvLmzSFaZGC8jkeJNQXfHu6Gbx4ZxSMBT9dZTotqU",
  "key15": "2ouwCpg8RGhLnmxYsK9hdjAGM6yB68LR2yCVNK8uDoB1oHx85d6gF1ma2weCYzxx7zWwJaZ7bgEgHnvW2XYA4kxn",
  "key16": "5CSzwsGCrpoEMXonobCK95Byg6byvhZTpRMnjh7aCG81rXJhsGD5dmczWEBWBSAcgzXJR3w7H117qwgzs1bGv8PZ",
  "key17": "rwH1dgF1TGU52SeoPaFV5ZEMxVBEpSTtpVMvoTNhStinXSKbWJu8KUwxBdcAaZySaq45qLafgeLxmFpCqz2nsVH",
  "key18": "7r6cDh8SiYWuVfNZiGRs8EfKkx4ua4r9CQ4FUZP9fShFud4DCLarHcNjioZRPzz8eUyJUedvi68NDNdpYU9K3Jb",
  "key19": "5C8YLgtSBmE3VAaeXog6cJ7sB7h2MCZjvW3SE4gZqd2tqd9V74fawLV3KKBMZJ12PqGoCsRJuZsbVo9f4tqiZLXa",
  "key20": "3uLuazuoe8AkQYydNZ3cELbciTiJ75nr27xgtoCjJV7KWt98NWHx8AjgSWCGJSWvt7VVHxEDqMwVsXZ6VyMHnHP5",
  "key21": "2shJF9CxxdcktiQqJmCzdvu9fZrWUcdkZzvnmEd2Ns6cmxycZaFuipkWuGwxT35QgYWLAAyGjSGi95HFmLbkU5Ra",
  "key22": "3K7d4trFkYj7LTfgALWbbTkiAaNKVY7qt77xnSFBHToeG6aUp2twehLqPPMLDnzuyYw7cXU5yHVXXnSSsDGdod5S",
  "key23": "38pQqJnWomoiKarjye5P2rrRRqRppc47kvdrr1ZooW2Mny3r7BvF6BBx8osuPLj2EZFRGLJ4nENivRf31h86fR1s",
  "key24": "49BzsbHUBCzDhkG9GXSZByUQwCzoCcgYS4bkdeZLrtuVQuTYnqD2CzioDQFJrDxpZrUceJnTNXs39dRRYVHgtv5y",
  "key25": "4miGuEfiiVrJi9QuP66rSQJ7VGhxCPvRrvGKSqUTcSYtygm43QYhzCYxPPyqK7karALcxYZ7M95GRh9fFdbqbQVQ",
  "key26": "22ScBkyPCEqr9pRvb658EAGDP94s3mDqfM2tfrmwoD24SWGoSBhzrmPVT1RdbFpU8XHNfgQhvYknZ3JntypGgusV",
  "key27": "3vavSmRLdFgsX5UDDspL8yyMZqfRVPKi93P7spKfP1aU7MEsFTVR3xZo1B4U4ncn13z7PUNupZjjUiuCVqTUbRV1",
  "key28": "4MVKeJgHfrLjySVekcZJ2fyZpiSMQsHkvCBP5yz7FuFh9TB8nAwQt4FqT4zUqcMPtstwuCe6VodFVqcepLe8rgGw",
  "key29": "3oNdRjuTHoz6tzpNZ3wTfRpXxC9eERCTUmANHVTasmB9YjpXorStFb2tkEZjvCMDk5mj2gLqcWUr6WLXh4NFVVk5",
  "key30": "4x1JsW1g7oinetiMgVubks1KMzRkridjB3ut4LA9XB9tXbxWK8LdUyLGFsv6Vgr8cB2av7AFiqCL1crsaEseipEg",
  "key31": "6WFKzigoiEWVwTGTfwyMavs9G1hLwyh33kXBcma3L3GXnAko5FSKBV3nPJSR92mm1ryPXw1LZCLdZqtfS58JSXQ",
  "key32": "nNLegXkNqrEeWGFZtAFafoS3UdTte1RKFjqpgZk8wbXAwtufA32HhhKQ3WeQf4hv6YxHAkjDPvvnFDSnSCk1MYV",
  "key33": "4gyqKvUF2p1UVgzBr2pNVGVYNtqvh5v4tsxG7QZ13MeQqSs7stteBF3xgGGswy3vG6FgBgRUDZippy2z8CYYXBLS",
  "key34": "3AAdDU5Gmw5fxbrKqEmP1oM2Jku4P1GNBJkjuVwi2AwPrSz3QUbQ1SstRcvjvpxrh8QdYH8DZzoVHV6ZtW3JQfKb",
  "key35": "4aF1ZzE4kmWLLPAqqUMSQXc374nFxTMVVEpVUdpTkX5Uu1USQg8crDLeELhGzkAZv5qkophkdvngu1y1MfiFeawh",
  "key36": "4c2nfKWPzd6ccHgw7TbuLFTGCtPKfj1hE82DJzCoGZS1BnsLXsk1cb1XPdbG9T9M18cn6pgUCUJ6i7pxpRgGVvpY",
  "key37": "3umRsb9Dc8HYM5TB8V6Q9yDVSyaNaWNkGTWX9bXhPAUE5JgaoBubYnFEf43Mn2b2kvbLuY9DseL17WkfYkkGeRh7",
  "key38": "2Du3adxoVtnqQp8aYsdSGMZ236TNe1xqYmQJNrndLcP15VCH5Jwu7NayXcch2TGhBTnHqu1PAzPoD5dvvk85agK9",
  "key39": "2grWG9PgnAiZGVsjhTVxKxyMUbroPg7f1kYuTAT3rjWABLfanLFCwuwWk2zV9jfRGP4BULc6hsK6y2S3EUftmM87"
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
