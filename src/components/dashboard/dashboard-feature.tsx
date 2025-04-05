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
    "Ngf2NQhEx7LSiwuccP9eF6W2ZHdy4yMrZwXiBGrzFmqUJCcfwkpcYXmRxjurN1NmRfruu9Ek3FWHZ9AwK4MDpsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eujFswDc2hiy2ZJS7BdvNewisfXDE3mYtXJFji3R7v9ZLkPRyTqAnDK8bzwCVH4KAhmeZneFHpTqr1mLztgwBoN",
  "key1": "3epNmu7KrLyjceDhDnXgXDWvD2wjDJQgwFu5pBbXZQy4k2rBcDoXHFeFeVQukpr4c6jB5SU2hUJkbFgoby2DZGuT",
  "key2": "3Jw6TX7QDfM56knPs2XphdUYJNDdU2Lg3MUPjf45QuS8xYxLeMh5nMcH1gteyvMQiDPubF6NLQVDA8cKPmUqmrDP",
  "key3": "3i2ha1hLY2ZT6netXbKVytbGhWekzgvY6JwNYe8dnnC8wvL5Xa728zKoLsBRhVJXAw7WapgKKXjGnY8nMuz94FWr",
  "key4": "5qfW9n88bXs4joqVKMzSox8mNaiKx1gzZZXf29RuCMy1FaYLGRfeJr31syoX8hxAhq9FJDd7mRkE37YXtMUtiHsL",
  "key5": "3QZNkogPjWvgW8CSnQWdBYs4c4TjFeDL7Y7rHJLF3JejJiF21Z1NCqGEigsCPnqeRNRMo9hiw6WBbatruKJVMET7",
  "key6": "3tXMGqC6FCVuGk2t6dTv5XQbpoJc837Gdofxws5Q3nKFk7ipEPExe8m2xH6awXpv2oxhj5jSqjP5G6jAie4WLRjh",
  "key7": "4e3c8WuBhzMvCV3wBpaq3hrqGMfxs9G6HD32CEKrXc7Sqw65iErf8k1WbTC5booNW7k6z9xgrx4Sk1fkFsyJ7aPc",
  "key8": "2vEqzYvokWFbfBVkVGinzi8kJ7Lv1WXdm5dhH8iaKumr6Yc1xZifefoCxpAf7UabY9xNjsXnK4JNW88t3sgiAZho",
  "key9": "5hBNdngQhHN3AKRA6JTwXq7vC2SW8CGgEmyPPhffwAdkckc7uWP1m9HUqQvY9ML2joQQeTbDfEJBQfUQsB53KP6L",
  "key10": "48YbvgWYTeWDTEmXfhR5mVdQN8y5aNTLToVmjMXyTfNQ6RPS3vUmgdwLrRtGstSaVDBCRHA9B34XcYisj2dn7LVo",
  "key11": "faXeB5QG7a23nKFVHE4hcThwD4EEqg3pHReC54DzvxWHHa6XwPTDFG9JrARWETtVnKeGwmE1t1g5bGse9nPZpV6",
  "key12": "3mEoiCygYWpwZ3audvYwieyZ5U5uUxVyydexTUK3TrWx5WhDcJDM2nBjq58oy1aXynmt9Zp5Mw4jUhvVRnuRwpMy",
  "key13": "NnDRFptF2rmU9xA4aLcBwsetY9FTw8vxtkGrgSUaJkUoHqCRD35XgKbLBcCkxKXgHHktKgYpFPcsyRwirGwS3fc",
  "key14": "56zoyJjhXsehFkjcHPRWGLLy1kbg715DmFmyE6dUPcuKQYkcCwnmu6w8y1zTmyx7m7tAKhTSH9XdJoBgLFbNe2YQ",
  "key15": "35f7JNDPpeJQADwBmWTj33o1ZC34NqJ3SrdKGjqYdgRE9m8hgmqyXZfjDMfkDRFxEW2CvfcrgLnzPcD9mzo5taME",
  "key16": "3CWjDLStuDz2nAiku8g2jVmWWNP79gFhtLTDgBqZ8K8rq9PS9qieSu9tcQpqtedodhsX1QSWGLwpiAGG4k5KXorX",
  "key17": "2a9gvEJnQErvSW1mePNFUz5XbrwACzM7fnskQd9LRLA27N48hiy1mi5EKv7pveLv8DDsc19619S3oQG8dEwSe5F5",
  "key18": "2BihnvXs7bmd83Lq3vePxPBZKYGeytY5zdgwBWTD9GuLcwV2WYBuNZmouNBvQoPd8tUoR8C58xPZv7aataMKHGNa",
  "key19": "4e9JTL1RTcUkLFTxxhYYpJuen2SKwa1KCZnXfFHsk6DjPNGzaBFccTuGPuWzZB6e7MyRYdim2NtMEiYho3qVw19B",
  "key20": "3vFLiR7msiqjEvZCFTeMEV651gMXbZo3cdV67Pzy79CvLTnhLumJ1NEVSpJaMZky9U4WhudduaS88fHiwcRdV8yJ",
  "key21": "4JrGjarakqVTkyLQ6dHnHAsw7UPhhWLfybZJdcwZJPaQXspEkNCatAuTj7bqsXs23h7eVsDQtqcXr9dMYvVVx6zB",
  "key22": "3k7m2ZRT8erYtH5BETSLg6CMhW4x1bJT9gnjU1HqRH1wokaoz2ouzg7WMfjsaZa1dXS3J16Ukzaus73iFAb5Eo4f",
  "key23": "3a82DHCYwVsnfrLDU6EPSxGfZ2Y8t4nCGQufRyX6gtXPAT1wv19Weo8XBZ3ATM995Tgyc2thmogQR9iB746VgpUR",
  "key24": "fmge6LJVENFGeSt6TJZoJug9vmVuEdiETYUvErCjznUW1QkbPjSGHG2zvtLtCGA6q2esg6qNHM2gX3eDGNgwxzb",
  "key25": "4WN8GvJZGnWTaXDEXxoJ2RnQM4h5yx19bWpKFyaXU8KRjoJh1aodxeeRLsbYnRb7z68YCYKB3nNFdryBBwQxo97Z",
  "key26": "3U4HjmfwTzqkDHS4dxqGNmARbwNcf9996vwowBJnTEKK53TmacHbs3JfetYZ3U72PCiEc3ZYgbwGapvfwnMzMeWV",
  "key27": "3UUZi1fqXydMbuZCENCrGe9ocM5h1uk1TS3KNWKW6oLfz7RvLKR3YU4xHcLdb7xY9wJkxtdQrKyC6wgKNZ211tDX",
  "key28": "9hoMjk9VEjuforpf8PcfyZpcvXEoMnuBEbz4Z5soYw1Nih9ugmHZVKNpVJb9rXQGhfyKvwiZDCkCCD1XgktW5FW",
  "key29": "2eb8SCsaonrt2iiPVfS3PBgBxy4ExZ6hygEyh6Xk8ku2LdXZXzRsmwEzSXuWVUPidPm3oAxpjznVLRpEL97W4mZ6",
  "key30": "5MnhtQrhbaoKjuM45HNh2Mmi5KQHHVnPZz1HE6VjULn9QdKDzBzkXA4vmffPwYCtezz65XohphUBX7DN7rFUnzzx",
  "key31": "5yNSBxB2AaabkErmTPEFuWcLaDRVYrTNAoTAEdWvt6u3sr7mmqvvF1rrZjQgQyvCxVrxhPYo66fEDa2CFsv78a54",
  "key32": "9A1qBcsmJ9RyuibhnkMQPZJ94gtKUnFboE5yt1BdRvkXrb2hCkqc9JjFaUKL1xJhXa2mFxAjiCos3mvAGKTP6Mk",
  "key33": "4PLtc1tCBfLjMhhRXd7eWTNeKKvc62Te8YQrcS9XtC4DNhGDVRrVT1wUzMJxM5V8VNFLyisT1mrF6WsTJHCZ2y2k",
  "key34": "4yrxFGVkhtJ46MKx5yWc2VWZSLiWBGj8Td5wFvDFLYJ1YVsspSBT7oFxMqcCdPH3zXFZWEHqpBvrdo51BdiFtP2M",
  "key35": "2kvjVURU9Q8ubbGhvUschd5ZG8q2UqidutPofYk6sKR3pGapLG8CexdRJbuFCbmmnmzzV4MUzqk8h3U8ia1CWNUy",
  "key36": "2gSdMcwMwoLDQTbrrPWLhp55ZS3i5uGjWKvLt1Nge3aXoAFjHtXLfcGtQydQxeC2ouKqCURqFYZf7oBygKhSWxAf",
  "key37": "4Zv8po6ASwefBHEPPFe6wGbbD8BVjrRhqtjtnVUSBcLPbenQv6HXPhZ8EgJYmKs5BsNHWZmnHtqvK9D8PyZZkgCM",
  "key38": "3HGurg93hWqR2JMm76WQFQAry41c1ZBhnfLJf2W77FLMGLg3hp9o47V5BbuZAM1tmMTRpo6eWgj8vnk1Y9QPLz8s",
  "key39": "hsULgqCAsJQ32Qn4xj4DS8Q1JRgrdPzLEhUbPrr6W1w9kgMS7DmiVaa3T5J8qF2awkLqxUncYkYJo8oNfFkWABs",
  "key40": "5MdB8pCLzKWXqAFhcAWCjPn5PYUorA5DKirAQRGGuycYturLg3DxMVzfPUsrzRXSEcbEeNzsSXyHMJH7dMKQrPxP",
  "key41": "52oytDwPHhs8dbrDKNJBHVdVKmM4uth6uBAaMJaojEWnH2ps7rgxK5ePLvCreFonAsZuGsdWxEG4jWYhgVKYogTY",
  "key42": "3tsF6nwUc33TPs9xcq4qVDYcnG7x1uqEwMkCqxJaMtpP9KXmJ5GreGEwQ14brzRiJRjvHNCHgUemUN6pijYVQCMj",
  "key43": "5BTX6TgSjFgZbs5QbKCrJYtsLqptTyUCwVFjcSYPNMxZMEeSua4D9kRceaXWbUi7grUkANRoG7s5bRrpNHhXeDop",
  "key44": "2Uyf2zmuJ8LtCuxSAyBPvwbTWAJwAVoFkeYaiBd4Bb6osdJCAEnPerMrSaicsu4Gko44mffxZ4fNawvTquNBpJ6p",
  "key45": "M5fdZGuMPQKNXicjgyecwNzwqyGQwUCtqTnnJNVByVnaDALnfXqpe1499mkKjzbigKYUsKHQEWKgm8EtLMn1gAz",
  "key46": "5fgzhPZp3Fj3TmH1oEUMSzJvXrCnXwXLxqRspxnCyMoTNLuJkNpCgp3ZLNwYjahGkdfQKSb4zefe4FJcrev4ycp7",
  "key47": "3Bt4DUaUxfZJpHm1FeDjGxV1D1dtAiZZY7TXYHSRFKUwRe4AtHGR1dT7enB9b8J4QP4V5xqzEfMCo36Hft3Kt6aS"
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
