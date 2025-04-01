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
    "4wGyz96RL2j6pyPtRqHfN5EMWhiucvKHBLZYs68banxDjoKjbJQqWXMRKHhQ8wYDJFFk4diW7XfHyGA5zY8Nnktr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sa1i49nxMuzQJCApzsxLE5dSotcuGipc9P1pr2w1uUeHJShk1UdwMKbhiXfHnGnZiccRGLwmuNbCoWBEaimkKfg",
  "key1": "4T1k5ccxeGmL6eANovgU9jnTwi2xmCj2VQvb5WGtTpPcdvsmf1yyygeSodu6MhnKaNWpaNqG5Z8agpCXBwgDQpzi",
  "key2": "k2ZeUD7T6FyAugMPVR5DBjCExwqv1MDjYMGxmwgG6aEAiApvPRyBm9msYFajo5LLbhLJNp1ZawRqvuyeu2beRoP",
  "key3": "2PbFYoN3pKDMYGy3ysf7ufesNC1caHsMy946BQcBb9cmKYYah5wp8upnxMRGDmB6MdWfWMJChU6jgwTd4qrnYQDj",
  "key4": "uEjxGERqtBYNJ5qCvTnzSwaMmmxVFMgSkPTkeW2gXXJ9AjCJpr7S5xQJnRxBS4ehoL1RVND8tXBTWVJSJdwnYVa",
  "key5": "3YnJnJmrbMtjqGsaZk9hCZZ1Sk6MeGxmbw4KShrkWeDMA8KwZxQ1nqSdbHLLakgRYg6VVtnb3qxZo58WvZXQ1Xdc",
  "key6": "2HYMYZ7cq1vwxX1Nx2XnMo2ZoUfP6VYvHtBYMmVeCsAt11BJ9cNzJC5FbSX5DajrLTajRePpkYaiuYCjK3vrkw2k",
  "key7": "7QGKjtepNGitowAmrEVaMPUuATJuZR7Xyt2sAdVAPLqjXQmWz2qphnFGpjfiGm8uArSG9a4eDAcv8cVhEeKC71d",
  "key8": "2CHw4B5UGGz5QA4CV14mGQcyoUZNngkQynbdSzzPm7RoaYLL9L9qoL4K9WEw3HYtcgUkQ55sbpcuTJkzNseryhKy",
  "key9": "23tkRCkdajvCFpVmsoYfWdvwpz1Xc3ehBqR79wiDjuTF9sjVZkAQPnQKXS1mebvVRmxs1YJVnJkC8mcUJkuWch6M",
  "key10": "3YSY3wUthaEbL3KUvBeE3wETygGLzqDNchD3ZNx9DLJ7NvubMig63NvnZxbNUDm1JVFTK8wkFj1vGH26Pni2UGWJ",
  "key11": "3CrH1GDox3MrndigguDYic9v5Ameouyg1gQbue4yq77pgkN11aNsRBUubxqB1SGp51GFi5xX4CWdmqNguapLvTtB",
  "key12": "4Y3tGeEcwxAF1qxHFoiwXQAqQvYps7DM12waLEwz3zrPhSAc9fCmRaM7wcCBCmk3JhzL2xXyUTP976stMNC59ceY",
  "key13": "5JotfBTd13WeuM5jeNT7gxLDcssziAffAPEnhtEin6E4ksg9jTrnno9K7HvqBVMTfvmHhoAJY9iGCuQnTZYd4ox5",
  "key14": "3bdZASbPtS8XA4N2zwX5J3LiaafiaL3fob9qMKXCkgWc9ZRSSjuZs2gmgMK8CvHzUztLNFG6Qqh52YusPXWfiL4J",
  "key15": "5im3eU3WLZ6xvdMsEwmj4hoP9yY96w2yft86fTKbo6n7pbr6ikzj6QPAAfvaokG4VCfAv2JT4NPL9YTtNJexhyXd",
  "key16": "ZttZGrNXP4gNeMJZnY7cbNeh6fM9G2UxwwsArqZMRujVBoTXLqUQginb7tC6DUGbVDQCVnkMBY5c9Y5HDgKF1Z4",
  "key17": "2DDqZiGHrNWq6EEqPa7BATkM5e572iSx5eA7LV9qz493PJCdQpkdaRMUPQcHT9r7kpokBr3Mhnz5o7hJkFzCz9m6",
  "key18": "4jDzeJom3Z9RbhQryKsiHYHH9mAVBmSjQgiB2yVi5H1Tb5xgiqPt8Hsaq3TrPDJrrhnx4hJbDVQR6fj6obqtSzHv",
  "key19": "HMZ64RhQDubXBd9nRTR6rgmjgpCsFfYQrjSjh71Rj94LMQW8t4DgQs4LpBrTaTEjGxZoKxawQtebNovFCWdQVEF",
  "key20": "614ndbVt2bbXoDnrErJpPyeBd1SV5mUpFfybPn5FbyzpLdaroMtoumieZ82zrVVoAKe71KmVKWgfdkt1qsbEhbCE",
  "key21": "5saGkR5ZFFgnrXHGYxT6oBHyimgUZojtrzPNzpDRqC1fKt8uaojXab1FGV8qv1v2XXP3teCW1z12xVNU1UsG8gxK",
  "key22": "2Lgt2XZFCtVPFthtwYRKKj6nTfqCNb2AFKgmXEwqwmvGYj9RYUmupuPcCEg1nZMkfn3aGrq8Ssxi6R5v8LtJcin2",
  "key23": "2GSzT9aoMSkAKS7KpJ8SE4xQD3No4edSsHCLrawXvapVukuRZvKvLXEXpUM86jt8ojJcEB6rNXpkJz8eEcjhGQor",
  "key24": "3t1VT6FyMwwkACr2ZxEcYE61vcpYoAXDNJHxE2Fo35aMVifuWamBqTVXNYxKymFjvNbmxbFkqdu22XoMqhGjbFUn",
  "key25": "276DsPsXVBigXGXkahuVdebFo2cZmQHx6hKgk3YUiWTrgvHzQ7sVNZM6oCrCf8iQs3b8MSeMM5fZDwiJC7CLh38Q",
  "key26": "5BQmY6P37vzgb9S6fLTR4xyDPkZMJ8LYjiwbNUbjFxUAfYAtFYEWXVAZvJ3RKTcCG3aLeHc6MsTecisvC57n56mt",
  "key27": "2gPE8c2jFnh38VmtWtioeEzUBMhwoxmBBsegEsf7rruzKj5rmG52PNp2iYawzYqN7MetZ9DgMihLe6dPFC1W6j5i",
  "key28": "3h72zLG6dWFEQFqEJhcDxo2eCAmX26JubMdgVVBS6huBBznvANF3RnYoo4GRc6rM3B6r9HRVHmUXEqWHhZdGGGPd",
  "key29": "4pmzqFKR9Tmxdab7W8uGBGpxfhp2Z2mqyr3DK8uLVdJHX1jx9zPbji6aWkUu1jSQvhguVpCPTJLqotygxYUhNGvi",
  "key30": "3KKouVEYoxShUtRQzwZryJf4jJXwcBheqYPRxPkJm8p6ZnzaYF1zoMSQAyAqDYJV3yiozoSohm9QjL8NkdrN28Jf",
  "key31": "23RGHRyHz4qC6uCdXBGfFaxbr41F1wMfjJiEizwmWpPt7LpLv8XXy1WXfgGECfV1srdBt5tSmwYEusJs5r5KtGmh",
  "key32": "4aGz391io4S96R1skZFENDhJQLrnkjkiuzK8ShAp8PuRXKdZiBEf5KiTB6SHih94JNDV6iVhEV3G3Y8XunaUYbUa",
  "key33": "4cFkvmtYDCdoRriLgHRc5T3eq5dS9s9jFfBfu4KwhmbwFGURsVccidwgE3Zjeu72E97np4nQBWj95Tto82foRLax",
  "key34": "2ydnRnN6JXDGcT47HiqRMbu6RLipnvfNX1DSwhF5zoK5FqhxnHodMnwD9MhZzNHSWu2FXEeKD9ZmzV5AfYuZXHPb",
  "key35": "45hWJy9i8J8LYgiCUXuDFM9eGwWgZ13axmePp5TEFiX54YAwCkBtk2VwZtSYNcxfhuFghM8VBCX8FZoPVgkbBWRF",
  "key36": "2ovbUgGVDTm6fQGis5pjZhHeidb4wrKvZoDZc9voNceKfR1aT8eLJWL4vYkSk6LuSg1qjjYkedCvSHVFjweoKxmq",
  "key37": "3dVPrYKauafmK72pE9M5EhSL8fThnp5zCUiUZxJ6V6VbYAwAD9j8Se2V3Ly8dFFDa51uz3ETkFUxYMK5mbVg6FD8",
  "key38": "4zj4Jh5PDLCNRLmicnxPMjmYNmfBz33nydy1FtneBD2vc9kLf3Jn4GpcnrmbsSrxPT48CDfis4ThJmkuVKHJ7Vyw",
  "key39": "5pQnHJoS98myvGHy5feT6kCSvUznBLN8Wbx5S2CDXavcW2tu4ouj23TCsVDvxwmC5oM46qqwJmDkwLxK1VcidcLD",
  "key40": "2ybqBhHuzbFNPVfiPVLzYRjAMEe7frg56bXTnBXAA8VsoApe5ujsLREx9foSFJs9amb8KEEr8LnLBvfJSiFcyBsz",
  "key41": "2D6VeicMgTqCrEhwWf7yhhef9RtXjNYpettqnaegiFW9dSxJtjbiHbXhqJRVoEC8mWjUhfBLg5g7f9FCxqoo4rVj",
  "key42": "5JRJYrzpRMbM13myGECiCBKaz71kd9HwuZN1yy9R1fXxkiUaTRxcSBKsCrsS9JuErZQ4tJUCKuDyhEzYEgmmMXAQ",
  "key43": "4PW3ketqbSD8UMdbDnZ6W6qqcZgmFoqRZC9UZfFmUASnGebQNjm4tkbWcjg4goYfj6kEdRpsaXvJG3HP7LXr9UuL",
  "key44": "3onEMqwvCo9frGJT3kUR5sDeypPXZHfXgNM1CieCaxAyKY3yNpTdJ97rY5TvtQG3e8uE6hFrtb4n76vcaMj7rFib",
  "key45": "4vB7mwjiJQqo2w5pNHqCKv4htfbiqUUSDACDKPnJVqe1tAQgZBB9dhPKcikiYyEshBWfHYuhLysqmBpuR9kEyBK7",
  "key46": "5Wg5Qm9z48AcWjPTxszGA8awthsxmZwL5cxWCHnNaQ6YGUMGmZu92UtzfpNwa7NEdwCXmbS5PRZTeW5wNx7ddZxm"
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
