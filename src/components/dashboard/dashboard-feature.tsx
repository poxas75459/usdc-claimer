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
    "55uc8nfERWo4R2FQTDMcGpKyppMWUoJi2M9gAwLiQAcMHivBuCea1bAFYiDDETvJQqzqAgTTiXkgig65mEFvVX2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4veKk75xVB176BNku16vcoJkH1Mvc1pfGzbZRUDF3oaJHGEB3XtjDDvfd3mN7BBEsMRimGgdDymd6XQgSYDDiiRf",
  "key1": "G847JbforoCvfpC68wk3B32oM6DhG78sHEWGYLAcyeLAwwEfRm8pxSp1WHvf7t2nkYcvtWpy51Gvbd7XYkq3v7u",
  "key2": "5faTUbxZMTVUTAy1HVCUAeVEQHCtubqMkygtqGBCijujJftPTF4yHX1pd3XA41rMrcCzoCRDJt3ddY9FZfGK8ka4",
  "key3": "5SQpu4ej5Z2j9r5xyN87mNSvNg9rzmpP6wwJjQ91kwUwCVGkMonVGQd5nuhRK9UCDctWxydqvNaTT7roy4dv3Bd3",
  "key4": "2WSf2B3G8ciRnGNAcnxCJmiQptu778VmkQywrBps76u3WWVtPabFKw1fNCXDva7pvdXps3TzYjABQ65vUFduiehM",
  "key5": "ENaP6bR9RUBbjNGevodp2MwcDJSemqunY8dfRXNJwbAvnDx7bKc1DGiJ2ESSUyDzFuTWLLXYBzRh5GYPnD34pwZ",
  "key6": "4PCexHWev1hikjX6iUHX6aRSrHz5Zrg1ubQptS23cJ4rjhsqifw1GfQZrYKjRH4FshqKengfeoNBKeE5vWH6AKnA",
  "key7": "2kzWE7MrduWYKJpZd1VrjZpj75osjEVAoY96EnFSsqtaAodJn44mdkERZdmQViHrGnNiwRFYJ5zheok6Kq92gXz7",
  "key8": "4bXdBWeQi2WVxUcWZt3muhr6AgxhmrMh6zGjergPX2kb1N2L44zksQ8mDThiMWn2iuuiiPmkeE9GCupBGcTbHKDc",
  "key9": "4fMjkDySedkupgDzXYc36bXYZuHusrDuRUBaJCAXzuforYW4fdBFHveHVqtsARP9qcwFVXUX9RZr257NzAHWhDRN",
  "key10": "2xzJWzxQFxL4SssfbkE7osWcktX9MQdBucrpP32WFmQC8Gwt3U31fV1McPSqmWggKaDvZmFaJyftEZe6jvVRYeW7",
  "key11": "2uTiKrz8AoRDfNA6LuxD5TbMac56HUxbrkoUYZvp8NkqXvBgtdrkDrNQZw92C45RFvAWf94yiAdWqsYfP2kb3Mvd",
  "key12": "En2zGYMPa1dzMKYvzVdbzwAHcvCPjMjnePyqhLHB87FZ15MpzoP3o1YEKFXudsoezpkaMXQapPnRjLHroVzQkzu",
  "key13": "5rNrVLrGBetNJtvViVYcS551UgzqxPEur4KHBa2NcbWXB5j9QGmFi36NQEN8m57gWx2RbmzzWX41PZLRtGzhYq45",
  "key14": "3R2dvZjRZx5c6BRyrpkZ9sYCQk77V1h1nU796eMDsni6GpevWS4Nr9ttfd5CKfJPuD8sg7QZEm3UXTKCZg83qXGp",
  "key15": "2ZvMLhaLyT5diBNqHWSqPCgEvPAAhLKK4U452erBbz29YcsiJKX4dDtLvbueUAMqTkmj5STbRMeovGvMuZrzF7ZJ",
  "key16": "2EBBvwD5KUkgf7Sj24mXoXjqpAgMH1U2iyzVfwdpQf3gC96hcT3Ne4PXs3sPfwEpcU8bLDxJFKqV9g77GAFL1Rx8",
  "key17": "67XmcjH4iXYKpn5mAoaiHZHQyzFhEGGd5Kzj5x2Tk9qUhcz7z7vBpwTGJMSixEKRqKC5ECx8tRGQupMYT9PHuRP5",
  "key18": "5rxRSHrHcWGLwo2VpD4qcajp7n6XY6AVF234bm5X1roybEZVb3pshcbkW3iHqo4r7MP46tJ1e86o316CrqBhkyNJ",
  "key19": "5WSsnnmhWedcsFQBtReZ6rVfJkxkQd8U9aqX5FrZhQswtr8FcjYDDmKGAyzNh6pQ3e1dzUp7NQSstPSAhVnAyYH2",
  "key20": "4d8KV4UwkRdvLpoNzjL97XRWRTpBTQUeXUdNZP8wA89DjpyuNRLroWVKoC2EusFHiHeU36yq7up4bJXxgTzAXMe5",
  "key21": "5r6DU5Ugrf797MCRdKY4653NWKWEiG4L4qGZoqD83mfaqExBFmLPNX3yjs53ssLAg8wXjR6xBwArRR5MNey9D1mb",
  "key22": "3xcR4u9as9YnGXPqEs794kmKZ3sir5Uy4UTQmBJjvRxBFBPADoRH2rHgDVzTnRwkSmxGxaDinKU7maDPs5pykq8V",
  "key23": "5msFhPJ181YfBRREQ3w6gY6GjLZZd7Qf8fU7NQsciyufCvE55Ez9eeHy5jPa3fiVY5S2aupZkyBddRioVz6DVAVj",
  "key24": "3qUBYZ6ZiFFCMB8rVbqvuLp7Wx1zWpiHgeyt7NuftvPTDCMJn5vEc2hbA39Mnh418WRRDVH5hgWB7TcmZ9Asdfuz",
  "key25": "3AvWFUPxPBkqLV1EPuDUbhfutf33ny1BstGXa83dcaf4mRZTrLZUsPksM8wyzEk2mMa62DscCgTzjwjmkeZgoGuT",
  "key26": "4Api6kZp3gkJKqC6zfp5L9ZNv9rjtDz1Ek8mCGP33QYSYG4a2fHAofRvs5nq9Ygu4CvFEgg4Zsbib9eDjQAdhbeR",
  "key27": "4sdVZekor5XDwiBp4ERrEgGfeRyWdFExpr1q8F8kqBmBrUUo9FwpFqWu6sLNA4bg2Ti1RQZhay8XGpNCisyziEcu",
  "key28": "4EA3kLkU9DN8ybkUMUUz26PkQk7ng5ZsLQ3L1TFyRQACoMEHZhsAf6g9FBfQeBxEE5ASMty3AsZfcZd8T9Y7Xs8x",
  "key29": "4PF9wkBAwwU8bAFadkVj2jsQJDoodUgMBqSG29TcS7AhChGKRu26M2us4e9cP8CdM7qPTJRPsYQVSDa3fSKotodU",
  "key30": "53aBNd5Aevs62kGfK7N2Lhw4A7uHDJXhdLsRtZJzF9EWosYvcX4MNdyfHYo5QRoaQCrQaDZivugJmrtCEvrJrqKN",
  "key31": "2He6nM86shXKs6L9cJv9GPqT9mGrYri7aNcAqSbdQKDRouNN5U8E1p8KPiigqq4tk8XDmvhYBnjDn1mbftXLmMMy",
  "key32": "2u8oy6Yx57msgtq7pK1FMD9yJbNKWK6WCAqXsccFTAiW96TK7EQNshnTg4sEKVA1dhdRnYFgHFiCyXcePtqJqmeo",
  "key33": "5vkqo3bK2ecN6Kc5XRg7eYpiTwhhMx8jxQED1fkJXvrfRyjeD7qEorjEWWhYg7Hctas5TcbjhMea3wsMJ32gA65z",
  "key34": "2Xcs9EWxXSzHN8suSgBKomCykvYavwGtjxeLumsV3xJUiwiAHuaZ8mBUhieaHudjVhCMZReFSjL6TCRCmtb5Y84K",
  "key35": "5wJVRfW3R1psLRsEpz9dXvwXQn3qcc4k3kst4PbDyzAMpdry3ci4CnikqiqTangCPCv6Uojo3R79mKtVwBzgUUWQ",
  "key36": "36dXMm9xS24XL1QgyabT45JZpDaGJL59tdjgEsx3VJNMjuqsVT6BBweQ3xrhLkmM87erCnP9bPaNw5KfAUeh9BTt",
  "key37": "4HzcgtJndeSuYp3hGd4zEvTMdykm8MT1ny4iR3dVzvR7hvHuygRY3YiG5Z8LXZ856PjDLqXvjsbnnJrXzHVyKw3Y",
  "key38": "JxvCg13MiHSqbXGwYBxHtyu7FP298FaDVUcKDPRmnopT3RKECrAjesfdFd4SCuiqiiLZbG3hRPZMxLuTkpx8Rzw",
  "key39": "5ExzBoxbhNPNn6q4fHMMGmYPdv9iwknzt5VVHfMjKTEhEZ8gsSrfbeCLgTQiVi7v3nVijrZF8FL8SF8yyHLxc6bb",
  "key40": "45gusQuCvuruprZRSD3KARPdL3ohmz2ziKcBmcfS8JcyvPxgdKKKPAnFAaRsbwWL1HFJoMqwvhhdz6T9sxjWCNuS",
  "key41": "2PsFbH8v8NtY5dccWGNvPXZYVsuznyjCE6NyJhJj3sBrwc8NLL97AZkmrwWbUtMKwJAWhBPcoGgWtjsrMkwnGZ4W",
  "key42": "2gsrqRd3qkUPkvRBUmuFUHYEpcQxRYvLN2YLz4d6R9Vv6uvrme8RcJxWC1ZRn79v3pdyME2RPtPpokyT2iTjL5Uc",
  "key43": "2gsgU9tu4TKfxQtSwCSDeYhxW8txovgmeF4fGjvrPTjsonroCapJ6uYHs9aKRN1o4rDBm5MFhAreEWJbR7Nt2ssm",
  "key44": "5aXZsAyEsXxaprmRBQwWpwBKQkCyprHmVU7fCsnzkgzfGHfA5tkLawfysudLyK7niWATmMsoRJVJrJ1cQi5kCDox",
  "key45": "ywUmAcVb3J8x5RrQB4Nn7hqRRyS5ksGBMMVDaWGz6Y4mNbnjYLdu74u3uNJhc6KJYxEp2bFGzX1M44BafZba8F8"
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
