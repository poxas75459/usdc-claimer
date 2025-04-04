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
    "5a6y3En4ZmRiGQveM4NWv5XBnpZyQywxnWCk3LvBx5DzgVydYXWNUJXe7mLbToeC4eFES22Xt4Ztj2XUYB9wghw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gCKnCVAXi1tLDavzjjzwVKyFkrbLmqqLLa2gFbuoP7pKxhcJSaRkzbYUEAebD28Um5JxarEX292j8CCK8QUFJwh",
  "key1": "2BLETHYEWGajLJkVbUVcZP9UN99GpLvEDYuswbVRstfnCuibdQ4vzPHDxKv67iqqH8K1fC5gDriwrEvnrqr5gKV4",
  "key2": "4zra63Admv6R123aQfFCYW2DyMXnCLXYjCZfDBYRZci4pRqBK66Y1uQ6NuBPFBBct6u6hvH63SxXgnrWWcKxFxkh",
  "key3": "39W8jsUGJ8F3pFDYQeMjwotTdV6Q6M8aHJZsJYxQsudFfoQVwU8ATN25hxwqZcPm8tanBRD23FudyxgZbcfd9EmU",
  "key4": "5YUXCmCXQnbt1Li1YB1ffHP15FavKCk8r6zngaRnz6K8wx46kYWrSpSRr5KTJTHS4GH8bawtx5fpn2ZQTra9fPgT",
  "key5": "34EVXR8Ui9kyb7oC3YygNASZ9pwgVeBeB45QonRYpoBS6xVxjsEvau3CRnaTEfqAXHMiHYyNnfMSLhMh5gNgqyFz",
  "key6": "5bLHKUdviCAZDQrTRmzVgXq8g2Cc7Ve8LzBpNVQdCjb873u5Yu6ibQLf6XoUBurPSCUmTB23D5HJ4Q8rXnJ5PLnJ",
  "key7": "Fa3PkXY93LLJv66Cf2Qniu17Zu5pxrh4c8dgb9DunhasQuCk2fjyuKeXbcYYDVbdQBfoEvMqC4XcQVsfFFxAQLX",
  "key8": "4cAUTLohWm1YGJni4YECudkQEQdFKLJqvkP5U6kFypJDeXDk6y4xFBi8K5iS35E6ted2WHdXi4wLE263ozeQzVUn",
  "key9": "53zKdmTGLAhjmYVp3VPe5RXLeq2sNCPj27s3gi3ZtG6RW8jgJcgzQS2eyznWEYaR9Vp1UE1FCxGmxLH2h89wtRBe",
  "key10": "5qda5ie1iSe1RVfnGyTaPeQd1twTLNDebB8fy6KDopfwpP5ypKofBwmpSDgvizk6Mst9XA4GNw57FFNixPzEio6w",
  "key11": "121gETT7LdiHyUFqmYcRQ9A2uS7Z425tpC2xQf4Bk5NJmYQSLkCCCUyojFvkDaK5We8ckPHjjf5MVEvc3QeuvAD7",
  "key12": "3AXbuJC2nYLRpNQLSkAFoGMCX6R9DJjboqAtLyVrq7RsBfmDJFK77HH6KDmcKYLCvvUAx4nazcNMVfzdGSkEAG6h",
  "key13": "4DhGRDFjQScKqEAwQsuB9ecMZFNzqczhbgRHgUfgGeCjxtfNBmZBXdSrCmNtN2EjNqKpKWDF1AXu3HGzoytkVWMn",
  "key14": "26ttwpx5dLkdiXDicSYfm3yebbsVLh3uCMEghpHgErouY2s5WS2LNvqKb5FztxGmsmtAc855NNbDz3NAjn6RPefN",
  "key15": "6sckZ112CqZGpaSvToP7NcFLNr82BJcX9MLiT93Mi4WPRKKYjj63TSSnojaZuer4638ZMu7ZET9x3Gw2jJagJtR",
  "key16": "2mSvGf4CXMRu8U6hPy9wCqrHWSgnaBSJADwyRdAcJ3pUkihMdfpLnsNocKhHNNBF8PtwBSp5fQQC3wYXoE3zK7io",
  "key17": "5SXnuHQYEV7WypCx7ShvNk7tDst7UcPAztvaoQHBDs4mixZJ77URRA8YtSt1bEfxogXk8CfkzixDMQw3PFjYQkbh",
  "key18": "42fyhtmPEfaUSgSN9JMECkTBjgkJyWyohsbCEhgnSmBwBcQgLPgB3oBmxVy5u8i2R3UWdnLgaePNDB9gRdLr4kuT",
  "key19": "4CQBQ31F6h7kcqjiTmzhkha8gwHopVYoLJhi7bN1Xkv6pmmBLLZ6pPiqB9qKdSHGaSS741tN7xU7VYohgHL16UQ1",
  "key20": "5xDk3WWCPHu4cfVkh9wtEnjhVvcnZUfHBb8DcAcT1JT3RWLk9Th2bgBPXQs5CqHdSkorHK8FAY2t6xCfrHZ6G5C7",
  "key21": "45ZB6HyQvH6CX6MrWS9Dn74HbCXQRLWrKfMzvdUPmcqaHHhCb8TcN7xDMMZ4NcKftTzhzDPmAsh6ichHhd2hcRCu",
  "key22": "2RMtHtm2v5n3bqzRWMGWFFrFmSBKXDFWTcU1NM7Wv2CCUEgtxYKNg7dE8pi6fahNcD3RqBqir7fxuh1JAFXakqEw",
  "key23": "2RhWgZKruyW54eaYhjdRzpjo7NLXYrxypyGywnBhM7cN5QCNotuTjm6vTYohD6T4nXnYznHgtXNKtKX7bXvkqfmq",
  "key24": "3v3QiNCBVaPsXcnNJmRqCZyJHJyZhzRnsrFgXpRUYLvBfPi9Jn7AqMDP1556yk2oBKyf7axcKLSkzvqYRDUdeLnR",
  "key25": "586nYrjs87XRXbE6ZyCCRdgSNCJtSywevsqhmMdLUf6ndtYkMLsvAphaX4McaTrcAXFAaoGjdtqJqd8GDWt8fdkT",
  "key26": "3e38RMzPkUBW2pTcD1BHqvpK6eEA3AqUEEdh6Aqr7nogjV2qrU9mRNif6UPbfkLbxX3pG59k8rUQDVCcHL1UerDN",
  "key27": "RVBJ96ZarzYH9iYj9dSExx3CdEjMxKXnt7aK25m6Ua9m65xEQiWicBkfDeiAL976GcGzXcCsjyR9NwEt6Uj98by",
  "key28": "XzYmETczm6611iY4gjKsAaSH61bmmRsfqpsbsidRQtoi5XE3mNaEhCnf9SvDWVKkhMqstqG5WKVL9tu9tqvTUpp",
  "key29": "4W7HedXTFvLPddymhRBLg2DAGQ7fSQpVSTqxHWbggGcNkkvZ5hK2w9LHLroeKTRtrcPkLiPAZXopKYByvmGaCqxf",
  "key30": "79CP2A1zYRwDWF1JzLLs5kqfeFRVx1gB4TncLAkgbuKDsas9tjfzfGTfyimRP1cuZGDMipC9MNX9Ze7xUphVsR5",
  "key31": "2FcWa6ovrPdy2ppnZWwHepABBfPdDT5uE9rSLy328iiXUhvsp3U4Na9Lqwx4yBSYufnbb2SdXG2MFREBBtXT8U6J",
  "key32": "5EEkKZZPV61ye5GdYBCJcsGPvAiQm3Zp1p6Bork1Nb2XHziR8garXvZNW5dtjf8sVVNXQiTTrNg8P9vBuqCWoLJH",
  "key33": "5UNkutm5hZNYqFFxqmApi4as82V6doK1ADJESGx8b8fi2UTKriLwykvJ9ZADD8KguLrnuHBwon47m2MfjC4f7Ms7",
  "key34": "34T9FVuxPMVCvDUhFBbsnqhUr9VxRBCwZ8TUnVwW6Qi7pCgKaSerEcwQRrf5fAstVBiCjxYPDpBoEe5qjDrH7gta",
  "key35": "3aBeohEbAv2pY3fiEVenopVE9AtwdxBsPgfaGqW8XC8ehfNTxnGaj96Rb112JPMAfmdbwcencwWpCaMAaViLgtin",
  "key36": "4aMhfGq9dFj9ELiuTB4dPw9wUxEHGo3Fhzn2iNZXsgNoDWTtJ97LbTrioNyuYYgEBVEpAxUbtHrb7EDkQfrpZYC9",
  "key37": "KakyuuNgCFKZSXqin9esc48tTVqNRMVwLKym1xQr4SUb7J7pW3GvoTgGbuuuCkmmEUbVGRP2xNYxLLZQD3YmEVt",
  "key38": "4thdB25WMbfuxNrfGSsFeJaEGSDc3sF8xp1ft6igVRmDdiDC7WyKjb4vC7YGagiQdT9UErV7RP5kcJu43JDb4WSa",
  "key39": "3JT6RQC3bVXbteszsWx6v3856zC8nBft1JNRztTtJGNNDU3au6A45365gELRtxXJJrq1ZwpUuesgZWQeosg6YVUa",
  "key40": "5evTcFwCninzPcDu6RWTsMNvLk5pVgHrLoMsZYTA1Q542ZkfqpiYBuACByHjjfHa7QFffyCFatnGLuAT2WpwNB7G",
  "key41": "kwn7tkvJa7nvyWBwJx1cJ7wups3c4AdDFQNDJuZYCuPXYpidunCjzkVVU9bB2dg3iLS29ndcHQCYpZSsak3UbML",
  "key42": "3L7jTTB8gK8X1XyGJabpPodDDGWFaFKSk5BTp52zPQG3EABTFFTfedPTxToEQ6MPAPJ24JWSXL432nJr7T4qLCQ9",
  "key43": "3jWb4rrS1acbwXTiApH9S3qymmE61r6Y6gY8s11t7YQzFzbMViU4YCYZyCPYk75BRDYAtBQM1jYcSTbXyWjFjUXe",
  "key44": "ifwYvgdowGeHmd7ZuW16W2Q9st7o3RGQ9PKXciS7VLzDyKqeoWLuW6qC8YER1f2UX4PiUCzQ1cVEiCxVQTkXueM",
  "key45": "5KqgHKV77ztbvJgfo6MqoMCcSGh5pXpmT9U4ohzoaQyy9BFmVshUqtCkBu4Uoq7EfqpxkRDhbE9nKzpaVMK3k6Gs",
  "key46": "4CMrHmnGdbR2AqAzXvd5DaQPHqsprHQ4qwM9AW9spEJWyxHPMGfVdhj2V1CBwPi2RgNowL3vbPSi7rzL5cb4jAgp",
  "key47": "4ktmqCPVcNZkTAYmQjwu2nE1de7QRWU82HDkmZ6sF3ifEcgSFB6jmNZv1f2obiYZ3nj4JRtMuAXKESadzLTawRxF",
  "key48": "vzf7maFoDZi1cxBMZY5fdH8p3k6fqpNGxP4xiQ4T9vhYZa6TXMhNwoAuvJ3gdda1ZdvWJaDVqpjpEJTBdqavptn"
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
