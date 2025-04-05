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
    "2yWYsdzsQMUDHwLV7EnX6zbkKhn4Lskn1HhsByD33UtyjJ2y1PrpUqTYKjyvXva6kx4fvYgcNPtCQuQdAMg1rv2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hb82W3Lcs28jz2UUQmQDkRNDYPmZcswgRYvxZVjc8gC9FQfHCLveKscearMPQvJSSbBAGUwutTeJzCWaR7tGEWb",
  "key1": "jvbGjozJCyuHAikmRy1KuoKo3iVZnzrZQiwZu3niHTXjyMgCeKS9yRnU4PpUosGiyWoPEJ3jCsAFwHDBfWkGuYc",
  "key2": "Y3Jhz1fKjYaYZZ8KrW5WQvJ6rGbdcnNC5PpUkbGSveBL7nKjFr8tMFHkeC7t1c4TM2aoFeXuirXzqn4xB75umgC",
  "key3": "23yDk1L8cSqjBVxoZmcUwXzqAKTfxQxckY3GYBqNyZRotFHZrpUzPRmxD5Ewt4yVe1ZudcWKrkJwQD3QvWWAqTGS",
  "key4": "3yRV5wHdEXma9NaEhrUYaXsigrxAtcx9vERTKE2bijMRgqUXRUmNx9uvYjndAoqKzXx9StkUWXUNPM4Lo3eiWpZR",
  "key5": "4wprkPtTEXkftYP6erSZmFkryMArfRnncXabngyiGw9PY2Ge42ekYWSkgnMzbhGbj5ArXqKSHThUqjzoNiDszejw",
  "key6": "2k4i84ve5bPNx5UWn2dTy4ZhMeSnKGdBEq7NuV1dMkEXSevppSanGv4fcaoujpiMq6njcv1U32hgo47mDWMm5y23",
  "key7": "4oQFLLnk8hJ7xJKm3iGf7owFdn7s4ixPovMnVje51jjC6dgdx3H1LGCMn62GLKwVrv9r1Vwd7F46im4tjqdpC7bi",
  "key8": "52iy2PUSoUcqkXxwK6ZV25rn4uEY72YVWoeXVTwkGHRhJ4gnMyYXDJbpoJnLfwVqQY76etizMqX39Mp4oqFAiwQP",
  "key9": "5njKJuXZMpPsjF6XE7i2RTAXMSPtoJtPUMsBNfo96sPJ7qhhWB6pwAaN5225wyuYABSDvZvVqMW4eLttHJf2PXvY",
  "key10": "47oonNWKRyRyWrBhDAzzY5AvkGpRFgmRJRgwGNRLx9mnAjZ1wi3JqZfkhTAGrcjmrmcWexwWUzZah4zpHV4dVnCd",
  "key11": "4dq1LUTmGpmx24h4G9YkXxRyi2oQarihb34S3KSxJDSssXeqcpZyqRn7n9M2k57QHvyfTn7XZQrFfPGUHtS9Y9Dd",
  "key12": "WxrViT4TRntQZ7Y5EjzEiVRryLt4jJUJfuQVSs9wkxUWDGvz7WEcy737c9wbvhqDd74jAPPhh69j2tsAYXdbdSw",
  "key13": "3t4YPU52vPQxhhMPLeKPNchBN8Pb9PFY5SbohEN9xodXS4pnnsroDERAYq3otN4C3eiQfL5LbcNtqSqBjp6VD6Vu",
  "key14": "Wi3C9qokVutLEjg3yCRnc43adXfcwRuMJ9DxSvMv5ub2aNMuVBQtMnqGdT3woEz99Rkbv3pURN8XouafVjSSGrJ",
  "key15": "4fAP5F8i8PDoNDrJoTetKmECXQ1h7LEda7TZ4nBVaUWb1XtDZn36LGHCpgzgg6ruejhYsvyLS7pADD2JG8WT9GNj",
  "key16": "5ZWdQabak9uibpmj8PCJHTMjCEnQHvww52X8KgZ7WWrVXomwNMCkvwSjbrXXQGmu1ouYj9bER55AqwrRviN12nUy",
  "key17": "4VAwwZ2CCCJwJqCG1yJKHisuAeg5jnAvyoG84po6zvRAY1NjU25VTMM8ewEpXVfywCK6KMqrLrNENvAHsLTF6rG5",
  "key18": "4faRFD2g6i3bzxea5ZG6bq1aeQ8tTGejgPAe3ZHAfzUVRepUkQVRCxWnzyABKmoSkoqDBgYA2bATxf1NT3EqgTXw",
  "key19": "36Mew4vB3frge6J6QPD7JqQemHqFfG4DhovXJLLxrtH8u2Q1Pg7hd9vMVm7NtztKnHJm7XT5RGWe7gUCUsny2t3w",
  "key20": "hePzsfv8ntZS2oGC2py1KK1wrCQEkmFjP8E48MFqpB2JbkP4svE3H71Wbm2J54sGCLbQeP1q4K1qW1jRrpsrirH",
  "key21": "2hxqwHwg7AuJymoD7fz6p1PCoAMmZFjWbyYx5suwQqZ1JMsLNMonAsigQjeeZ1ci3LSKeEEiAJ4Hvgr8t5Us1F1i",
  "key22": "35XnSjxNxUT99uPYRrsjKFWNfhMwhtQSpGPUW6XhPvF6EKpzUkMJYpXRUny7bCgQEWMEyYJsmfABMyq94Sn8LNu2",
  "key23": "227uKXXtyerBpar5oqUhwME34FCqNaUYjuJCXGqDuf7Dx9cS3UYPKmXJZ1kttiQL8HBt9AJf52VCZ5g6cjRhKN5X",
  "key24": "3gwdLAjRszjs9mNLK8XEZS7uHRzmDzETir61qcYUg1Ca276wDJFdrCpHWUJ9AY4ZTAemPaRjvUsbNU1jH4X6L5oM",
  "key25": "3yUdjPrYKR2kmdePUfUdkoGFRyYW1oNxFYo1bPbm19i9q2tpMyghnErx7vFoXYUjSqtgZsMkRbXC69wbSAB14hVH",
  "key26": "4fWjuG79MtVkXqwfc8xQqXGRkL5cvGaEHTDUUWN1BVasDS7pdp6HMjxnUVgEyyorFr9kJMbj1d8j2Cescp73aARk",
  "key27": "JvoZWYR348AsxxNmcVrvaxo775DH9FeF18nT4GDavCspoXpv3kyKv2TByVu38oDeAFqPooQ6guV9eGUtUNzWrJA",
  "key28": "5TEo1V5F24FfLaxq1ovgYSF67A1XdXCgMgzUoJnndLTnoYmgdYYpC2RpfW92brtpgZo5b31urJxY4Cvz9GZwKSSv",
  "key29": "4RQnPxM8N6RRowuaVNX5Qt4aqiBo7W3JxoND55cY3pRbeUxHdtS9mqdpMofjmnUMYsi2NStvccMNaSgK6D6iKdHs",
  "key30": "5vMa46Y2AKyvmoGHyH94eh8s2LScvgpqKXEXQ7ZJGZpyfHbFdvxchidTpz8BEnjMnp4wH42hjR62Csyjp8mNQ2Sd",
  "key31": "3t8XYAcX6PF5y69MBU1BRipXiXWwqZBmRGfA4ADWt1XERuKRb7r9wurfTo155w2j94Uo3Kzo1Ty5ag7G8VPRmMg5",
  "key32": "5e9ZD5xYLuUMtJLktBpvcsQGNiPXbk5XbLWaQCArxwzEvMB9v2PRhqEoNuQLhwGQ7AGcpDbh3DVUqon7bjwqJ5jy",
  "key33": "2Th2eFHJ4eFN9MDwpNbuKLsPpgyZc7oV6i6DGMkitXt2LWT45hy3Y2A2EonEoHSTmQanCje361PRpZ8DrSW9rcf1",
  "key34": "4i41w145tvG3FzpdEvEYSBPDkd7SvJSWAELXBFiAhTjQjVMKQkrT5iMuipmtbvVge6tZpRe7hQxD9yvNH5Rc7Zhq",
  "key35": "3U8unDEZFArGKEo286tFsVt9HtcMBkKupGBZsmikLoLMomwRsoYLvpmfWKf1naXAWVyWmQKKyWcvHE4BkCoSz99p",
  "key36": "VQTLzbnc3eRHcYG53PCSdD5Qo4tb3ghSn3ZCM6YWcCFZFvPs6h8fDNzTCoNMt4d51oMbQsAoka57ETf1PTW4UgR",
  "key37": "4NK6b4xq3t7yUD8VFnhRZ4sGdYqq8ZUd4ojNTzbWicgrV357VBiF5Kv4o4vqqhnHT3Y5u27KomPVn1jpBYYBCfJL",
  "key38": "9Pvs46KpX8zM6cNieT7nYkS6zWt85UD3TZVj2G3QxsDCMco244knCxQS51dVjPCkuCjkhiUo3C68G3zUCXdaPTC",
  "key39": "5AFJUbLYFWuT331jsJFKg39v3BqcVvv9Jiwg8ygqnuPNQ8EpnTiWUXqLeX2HebaJw5CxHBma9rBF5HBRQqNkpwEJ",
  "key40": "3k9QugAWw3p9ACXrRLKzo2CfySDXYYicZCgJ1oemqGgdbZpYucES4UmdZT4pcJfNzLs7z4gpeZUZSxCDCkDqrpwk",
  "key41": "21wdo7Dr8PPCysSy4nPHnucjggkujJ4xgnAj6a8n36X3fXKUaS7XXiABds9fzL9znb6epmhK9DSn46uoVuNug8jj",
  "key42": "39XFyFgHdxRKYVg4TQHovGa45UzhP6gySFyQJuHKsWC1BBBW6nB2QiuRENgurVjBYHm9DGE1wN5D3QP6yRh9URJt"
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
