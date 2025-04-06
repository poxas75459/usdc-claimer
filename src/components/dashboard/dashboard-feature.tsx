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
    "4fYrFEcWaW8CNUdsBx94UumPRZZmJEpnv6Dxapxx362cXkRtRCmpSwTXNsm5ta6x93TqQVeL4pKAEv1DjVeaWsxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43yyA1EiANDFMM9wXb5Y9SGJjAz7EsBcAfehEGfsTnBiapfMLNVFWxSCMrDDoUrzvpff67Eh6gEA2XVUMAzdrcRy",
  "key1": "3t73DzLKyK2xVCwhscrq9YhR8Mio5ZzDyc3nKdSsKmGQLE81hctzLTGkygnuRjFMTMrBQ1cJsXHJmWhB15pmEaMa",
  "key2": "5VXg1epZ8SudfTtThSh69dvQGfVnLvo9Dx5yvkYeBasDVr9yUJgtBP3nkeb15u8E9JZeYnRPPfqVrAShz7Lk4tHq",
  "key3": "5yW6PHJcTduuWHtNLXCmdKMkbNKuccKoCiLhcteiyPoBehJgUG27FcEmCuCm38V8ec9KS1UkpcEms6a7T7Qp1UrY",
  "key4": "3B8cttLKckGVjLFYkrRQmxPvA3TLF6TZAWWYg24d8SAecocsFyms6SCNeNG1jYWghodWcQG3KQXke3PTNo1oW277",
  "key5": "4mACKEoBaxGdXEX4z8Cf6S7EjZLi3p8RKqbuxgWmcuAHawT1V9dtcu3XTR5EySH3aLJanC4mbLKyJZRz1zr7CB7i",
  "key6": "4jgkRKoF7jU8NPywb3LTdqAErojCSM7j8ZvjLDwCTL5gKPRLWkh4J9KgxCuWDTTR7RAtVQ8vzb1UdH8X76X2pFJE",
  "key7": "3JgdFTEJJaBbFm6hNPzFtfHgBEcwRGD5mE667cisQ3UoVXoPWZHQ4VfVWcye3krVdGZANroAuQBCCGGwG1X4pfL5",
  "key8": "3MKzneuBVJWHkWFVGB1inSe5VcGSsFGhHsccpAXc773U49uNJnoWhNVqQtYKX79icDihC91Wynsmyy8tve9kMbeB",
  "key9": "2tRDKH9S3ULXtBRDTCqQpP7fqBs6K8cdTiBiXEBRPA95mP9Xg2jtvmrEkBMDDw3ALPBB2PwPEkaYYUb5TqPn6kmJ",
  "key10": "PTQb2pbj1a6bRaQQdZ1aBN1XUJPKidSM7E9hWvWPHwyUq5VkXnwRZG6iKAUBoDfuizPaaCM2Xddwgw3dsh3AvpX",
  "key11": "3u6z8Hs28VKmSZ4n1bmHZnBqy3fC9Xh6pX1wNbFQum3vJcdTSgUf2REYM7CprVej8hXAjYwLyHCPdBzReS9K26j5",
  "key12": "2WP8xJSWCkG35rwURrosxhQYMFvoj2S2tApCyoTLHEPSgqum2X9dhutRCmd4rBK3DjgpdLvCKCxfFxixCbCxwvLw",
  "key13": "128y4PT4AnJWH4zhUYhhK7ZdmqVKcPX4yRGZnB3QkvuENd9kwmZtMnNPRQsq8ja4AFF1uFFpM22xmv4RZS55Qckd",
  "key14": "22j7omk1g8WKw6w24oRk5VLoiiiBsAptQLE8Y61Zw74JFEcq9F2dBnCbyWgBZGxMp2kyTFnRv1zarQ2LLAYzFKS8",
  "key15": "4odaueTy7VeCqmZunwC4SrAMVkjAV6FwGxkYCzar6niMtTHcvDfaB8TuKJmrAoXDLB8MooHYBwj5ZGAWjVDztD6u",
  "key16": "2gtUWw2knepQkdCcZYctzCJ5Yr95kJacmFgb6fWVi3iQK1JfrqDt4NDBDbbZbGVjx232kdEN4heboyg3cLAF4thK",
  "key17": "4JMwDqF3hcjbQhLyC2GAMV8MbkgF5QGieFhmVchA3yZG5D9enfm4iY14WoEhJG8pQRbZJdDRRp7fFtzm3ceYnJAT",
  "key18": "5i9K9oeqzsS2MNMofXJrzfk1nms5z3MDWRkK4GzYieiayE1JVJLKYe8jb2uvMCRLNj9976HnQpaVenG1f7XfuH7N",
  "key19": "62jsZsuLnfiKk4yH9V4u5j7EuWso2RqqCfvRFv5M9ayeSmoUXxP8yVaT4WwVf3HCTEZCRTucNEVQMsuueFNqsHdZ",
  "key20": "5g35Sqt42LbZeCahcbS4bsjxE9t4kn9XcK4kR4GZcmYoyXv9vx8uuTKDSTqNMfX5T4BCDwMrsC4qGkwXXUDSLuCP",
  "key21": "5Ks41DYUknB7vnxxNqpb8PDCdfsZyaV2iCB5y5Qcggx12vFxx8EQeYU8ohmYpxxzHtu1aXd5rhygrBwVexwj59Tu",
  "key22": "5dw2NDoX5AX7gHnCQmhNgkfyKVK9mtFEmS1nCkSJGVvh9arJF1fxpM5fSKd3kSCLWnrJr4wsdPXxZYndaveSn3t1",
  "key23": "569zbK5fULxdyF9MQCmaV4LPVNcpxHt9Qg6SDE2ne6Xt1i3CNy955KJv4JtwrqGJuhQ6j9Qkok2eygFnfpfX95ay",
  "key24": "qBKEdo1Gt5NqhUuokeBDg81bR4zWwe4JWkfXL6JeTKunkUNmE5WxkUii6k5KVEV8hdu7nmmdsZFC3pWmE22eEf8",
  "key25": "4u1FA46LyCnQrTuatXkdjmWSHJdFx761ifYdBEgojMtBSM9RuVZS9MdAGb7ZNPUoG7FN33aRC8QMbg7ret4g29NJ",
  "key26": "8pP1knnaSth9kaPWBBYEnAteH81u2RnhTmwVixBXumsfMS8r9YgG1ejT5UGzc7WsAvRPdSRWoMt6NRDckoEsJ64",
  "key27": "4wAFVqCngYRX3UTgojpM5iu7i4f6pG16xd6h8k4kRpP1NTLtvcnwqSAt2uAfDTd3cxBfcaAWi7EZFnZWwj6qYgY6",
  "key28": "2Pa16aZyLaQkbRerFBfDXhQD9E4uA2tfHMXQL7uFMBQYVXHdNe8Jegomzhn76UVDiRyGhKsXvNW7KMfsShD6vb6G",
  "key29": "32J7FKtuLqH4MXP6BEECoYfdcHrrb5SUmNhGFpyo6eM7FY2JVosNyTYrojFat12grdivNKJq4Lw2BwgPjTmiZq3H",
  "key30": "wexK13e26rtgCWJWXV2N7bW8Dpotmk4Qwz4KLQmMdyAJfGq14vTpo8HQwJfabagggNkDxHStSGPRhEbtjeAGy6w",
  "key31": "41fjsRf7ZifvP5wXMzHr7sMwDEDyrq6GJmUcbHHP5E3BC5Pyy8JQfGsk5PqDEHuDKGkEmsTZdq7WPVtxWNE7hZ9K",
  "key32": "5ABRKDdVwizRdHhTkisFnB7rqtgW33Vy6WkdRBEY6aTrtTHbq79yCkyFnR1MQCYuf8xK5L2BdLgm2o3mqpwwmY7d",
  "key33": "wDstqPmEncBAwL6bEeQM2Vu1EpjLfFiqjAMhvCDdXzDMScvSWaAzCg9XBj7QKFW9H9UntxK55RpvVG6w4CW1a2A",
  "key34": "4s37tZLsimcmWwXgJKSvTbSkdx3v8pHKtc79iJ4SSQyr3DR7Xz43RY56mfWss429Go8qTzwhctPMG9BgvpFLtA64",
  "key35": "3vkfojYmwArQdfWkaspQwnHWkP3mV4HcrweX6ZbHNM9r8UJzY3Bc8UxZwi5BYQqvxdh7Kh4epq3SdBUaPvuBeTEQ",
  "key36": "2FHmP1bxFvaXnE6tFPKt3cfxZXyNZ6r7cwKoZpnQeLzPVc6Hstu7amUBFVyz9RjaTdJwRFEdmH5gzmKs2zF8Kc23",
  "key37": "yynxuAHkEkUANRzk89LCLRUR9TBxHw1zqJQ42DN7USZF1ijftVooUcqxzTDUQ6mz93av4tMqm3i3KEqXoQEQx4J",
  "key38": "mauUXYGyj4o6Vzspchze9oAHKKRNTDnWjbDbjxYVUV8aFdPZZ6HhsBi9jPAmn83Yvew5P6TKUUsPEpnzHsgqvk7",
  "key39": "2tcGKLDhHJWTwPweR6UMK2Mc3s7nNAFno8vbcy7CPgni2Rn88kndxr12Ax5zYis2Aam9rsN8obXEjq4ofspMnfx3",
  "key40": "3Em7UgRfMDTmr6wmLLWpg7FR6n9KWHZ2MzQ85UqyyUc5GQxxPQzKoGVXLZkdouncom56xudUXxqr17kYwamUELf7",
  "key41": "2i8bm1Bf2jfdgutAtqxKrG9BA4HNCsB7Yu3k2CRqjV4xNxxoHn5JmA6JeFQicVpxB5mUGQDDSZwy8FQADK27EcNf",
  "key42": "5VjnRYbtL9m7XFPpfhxf8gBeBLFUer5RZghLUAqRhXtQ4mdtPzQmejjN18oB5P8FyLq5GLiY15Ku4pmCsa7uScQy",
  "key43": "3KiC93UdGrsfbnb5nUSTXKFZYUSY6iUpMLkYViGdifq3gUbakenACpA26Xx99vgESAC3G1om6xtBFjU6KioxcEzg"
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
