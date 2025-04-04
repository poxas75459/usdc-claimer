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
    "3g8pZTLtgRqvZQbNZ7CvZ6ny429AqXGA4JRSERKQTh75xeu1ARmzhUc4PN8HAs9nzqnodX3GLWFEAUK9TpSiUFj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fVtS5sSBPCqdEBGzHCrVEFKdMgNA7jedoKpBwsngSknLXaTYk2KXMZejA35VPAEody2TJ9UcxiJQqYavRkMCt1G",
  "key1": "3Bi2vJxfTiLqAR6hjRMsDQPcqNCyqboMF2uGC6XCLk9eF8qfr6R75TPXTC7MxjcLMe45mvo2jbVk4kEfZpZFnZMR",
  "key2": "2WzL7YSrXm25j4QvfyKL5fjLb1rZGWeAfiAgZZ5sRexGiZLCbSjuFPXVTP9LNyK2x1ZQE4qMeeaHJkGUMcRFnNvn",
  "key3": "4ik1VfR7HFHE9aVQrdTeEo1JbCgs3CACSVzZaRYVnDs83C5seEMvvf5tYkJVMfqpRYiDVHFvjiJHFXEX1ueMvY1f",
  "key4": "4RBAV8RAq65qXQKXroNqvaqHXU58RSwqW31FjWYHeZBuMYeMHJv61t4CGj2i79iG9cytKcsSZ4LcLUfVA4oMa3TB",
  "key5": "2UYTy72x15WyCtzxa9aLGFeegFgkxj8rj6PrDHJvSP2orJGXXNMWWS5afpL3mnXuMCatN7yGdTg8dJQPTC8CBLb8",
  "key6": "2HjJoGKQfLDtBk5Wq7coCya3CbFdXgMjmdH1wrJwyMcpn3friDkQAATnEJ4i1exzQ66UK4HMysC9EwkoQ2u41nom",
  "key7": "36gZEhANPqaMdqf1rcqPASTE3DPbYMbvrqDharyASDAjQjn7kyspsVm2RLaRD9RhPkkiW3SGWJ48MpQkztJpqAS4",
  "key8": "5oo2Up6wj7VNwfLsZr49AVM7TbA1WeM1g6TWbbsdo7ycfZeejrssE6MMRZAvtwywgsxZntmN3cgbcg95FxRf8LVD",
  "key9": "4dYN2KFJTG7PDanftgACEainbdsUVFr4kdG4myxVQqxPXr31oAEtm3LWgCGXFwXRFKw9DqSV8d9maKbXaQ4bmmer",
  "key10": "5nH8naUYvoM1jB4a1MccxtpFm6PGtFBgy9zsgX9TW3PVDastZDQgJyVe8vMUwoaRCPE99pwMazJExbnfapnap7f2",
  "key11": "mTsbnm4HPHW4Z8Shcfq96jB9FponCssiKXgp5nDyGSmCSzbzxTvZXj1LySnVBWtFBpuePDxbh1jFNsHo5Rr19MW",
  "key12": "2HFJsds96BtQCNbB4kBeX2vyQsRMvaSg1C3SqHU8xXjiWbQkXY8hWdNyHB4qeMoikjZgiWYSVf9zdTZim1YHaxsF",
  "key13": "4KpkJuaF3AB92kq5JajzEzrQ1oYs9BkLxPjXfuwqB81yexiVBvngWv2ymfocxcMwfyfGJ11JLpvTLtVQo1XVLrUH",
  "key14": "4Jb1XiB8pPytoDMFgGf9n6ovxanJpevx65WyA9m1ZiV68LkWBtwMrCdbwk4upUYVuGBZMQdZ2r7Qnru6U1bFr9nz",
  "key15": "3MrwW4iieyio2TPstMvnrexHqRMBjnSZ14guLS8fVED1m2kWK8D6UvobvmXm6zE4fG6sVsSr7ezeoxESvC5B9bCC",
  "key16": "6UparGTJBMMfmafKv6HJUUijSaBdzJyteEdZgrq9uAhYLpxoy6FTgtcnzq74TfPDzwheeVHDBJYE1zKVaNtHRDa",
  "key17": "tWjQJHafJg16TS62ucnT2AeaidZveAwx2pjcjCqMDnUtBGt7trKPjwJKgonAFJtVHCxR6fmSWBnXwEEep3Rr5V3",
  "key18": "5xYLMJ3i5iqt6f4FqrLdJhaw5zWK3zYX3xaSrdGyqZ6QVnN7ETbXSWH5PB5WuRy2r8tdLa51RRevNE4t8Ue25FNx",
  "key19": "4wxqjJWnXVkMXm9QhxQnXBnrh47f7Ngx3qCkGwxNrUr6Pp8rMq2zqcBr8hxJS5Ei9SCBtnFgJnNpeb3N74zFGzD5",
  "key20": "3ekh3ChhsdhXVdA4Nnm8tqZDgBjHRqHonkypEayuQmZkDRsXoXHGjhQchw3HYG6i4hK5FzbikuCW6iJaeVJDMzz9",
  "key21": "2T9KLN6fVA7yb4u2WkyVczxeRBHRoVM5rhdUjhsamswE3D8yJzQBexwkEBxUT2puAywZBXuPQZSCRae4W2qLZimL",
  "key22": "2FNgY8NQY4G4zyWmKgyK42LXCrWzoAbjhc7wsLHihG7TmqVSLEn1Hpf4fwpWBUkZCMWBSBCXi2ZBb4NaFwGKGAt",
  "key23": "3hPAVXhFuQsGhpLongWKY3vkskg6wZFVHWuhWapWMr2qGTDjjhrwa2cXNW4iTPgQhHFMF7CiMWLuN58HsLtAnxtE",
  "key24": "AFtKcFqUWXuvtdL1HqLyMR6cbKUXb58W11sM6t8KJY1SB547mq32iUChfGM5AA1aYbuiWQ7mGyqaMxngvmU6yUR",
  "key25": "2EeE9dVdbZRtftRFBanxnRi1DbkFc8uFfa8D11vhfr7B9zdsgC3DJoMHHmjRAuafziUKrapr6AtmikLoMydVaHW",
  "key26": "9hXq9T1DMGHK7pqZWU339mjVjq4doWF1Fyq1UbSgpc25z5NanKpFygNH7mxkso1nWM7rfcPvDWcWqX21UCtCF41",
  "key27": "4X5UBAfSs7KGVxXs4GrGrYULweNJokkeJiGC3PJDed5i7yFU8Z2pCQYfEpa6mVLMXuLvzM4oZ8AT48guZihL6ubZ",
  "key28": "3maiyWWroC6YvcNBECW3sJHZwstrGVcDCWq7vpfyu65yWuauTWq8Yw7meVLNHaVsMqZJfrhqspJyXVULEo12y54T",
  "key29": "toNcy9b586eAGfRPvNUd33ehDT1ZjvHpn5fUJ8g91QGUX7cx86Czr4KipmwN4gqnew3J8z3nPCS4WTT4f6Jzc8D",
  "key30": "5dJZ9dRv9Y3WMnnzb1Ash5Vx2NX847fgHCn8x2KyrYzNtSUHoq1xf2awemNtM495MvGvbs1meiaorpbFwj7aMqzZ",
  "key31": "4awrPsEo6ny14FcZsAyZH1TYiFnphPmEB9opkLACPqwYX5kHcKAE2QPjiYG5xmpZFvT8sEWxEko59p3Km3vPb5pZ",
  "key32": "4oawATKwASpoRWpgztXyxXDoZyb5e3wZXsqVmXjEfNiPTqjGUx9W7bCkJeRq9QoEi6wB14Qat5ubUQaUGVstUTWn",
  "key33": "67Y1ABn8AZNfKb5cvsGLysoPTgHRNsKNZTK2JQ3Q2B5DaJDNJLLk5CKaadX8fiA9gYCF3JqWJUSbj7tMuxXUmBsS",
  "key34": "66Lmv73ARoKizneePuofSvHK4uWnswfTJz4HrgSA24fqvMFHyDptKRfURWVpVvCP2MqSVEJ6GMsAt4V3HwmHXK9G",
  "key35": "27236HQnH2PgcN45rWceBTss8o4oa3SfGqJDKcV6JiVim4289RVno8gTSsiey44K6HXijoUqVtNXuRGkaC6dpUeW",
  "key36": "ZD66A1sUBHeLeVdHVU9YHiT5tEgkoZ46ymBPDEMAj7MoM66vub5Hok8ppP2gpZigo7JL2ZcrdwEfkrNjmuKH1gT",
  "key37": "4HydbYJgqQD2GcaTAAN31VWtDgQG9gcBGWQKk5ndyhrXtMuZZk2w6sKxWCqvrArEtWZw3zic7QMtjPQrx9abB2uP",
  "key38": "5TC7cmeSCt5GeF2LH1NWPr7ZFYQQpRLhuPoYMLrhvkZKLq9jAAmNSsEzfni1tEeXuF7VhtUXo4XtNxbzrsXUPWjn",
  "key39": "3QRqT98RFBk1Kps3qcsyfFKjXJZ5X3cRU6G4zBT4hmEGm9qAxUwLiJ5jAnwbB2tWfxz2orv8huEroh3H7wfmpyyC",
  "key40": "48iZSFrjAFFDqn1kt7ZZFGGSTHhiPrUXpnLvAam8iDsyWz31v7tuyXFNUeo9bWkbW8AAXYxD7mVxYjUhuZubTCtf",
  "key41": "4BLij7eyVGXt5K6u3hYbb2KYvYWtZvBXPQqCMNHDuisCJXbmzk2Rro1ogNq8qConC7VBLrtzhrEELcL1E3GHhFsv",
  "key42": "ZFYcUQcgyYreFBn2rSjLZej1zVKxE5M6Uyu9mHmZnA9bMj5NypBRo5Lvyn9VmRPDLwtZjasHg1nmWoLY4A3Sf4U"
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
