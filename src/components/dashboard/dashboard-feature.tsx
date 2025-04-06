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
    "46iuGFSBTrSiAXamEV9bz7ZEEaSqHew8U5oM2wdzKv5B8HqLyGTuZSbfoSU9SrdevLbrSFDpXPVWCYWQ95AwyEBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JFgXnNt7Ww4pf1WqR2BCJ5jtgKAWVwisK3HisPgajCH9AStJqJPbQmf93UGmWfPsTUkxX2NNX4mfxSinMYochG",
  "key1": "4sDkGW2Sw91VxiV7638eHYXdsYKo1eafCD9NqnMQbGQRuk1ha4gHnv59ZwQQQZAXV8ovZxSgtQJT2HDdxwaPsSS2",
  "key2": "XLFuNFjWsqTp6Eiw3P3Z8PmAV1zTGsVhBryMq2y6XDHA4PgZR2P1mukGthKWxsbssUmN4ptBfLDvQYHcCZh1CK6",
  "key3": "S1YmJ2bgdbt6MLGA6c2Sc4r1TpwWg8fHkW6PzvABpU43fpqxN7T959j6kYs13HCxFWzSzPydmmSPyE2uVzw4oXz",
  "key4": "zqzmvjarXn2WUSDC9AS8Cu6Es2tDeL83pKz43xThi91Yua29UboxyvbJGGmv8PPU2EfqcdDBMnwXnJgaNZnqePn",
  "key5": "vtNTzwCJMFLTtyZcXHdQjgVPA2aDzewLEMei8Pe3pF6bgzCkPpieJVpUPYoG5wA27rboNecQXueXrDcCNb5dKXL",
  "key6": "3fcERdZWmUHshBuSQ9xnWGDfyag9pSHNVyNYguQTfFNwiW4c3RFRYdgUms1JuJyKDGnU75Fe2sQhPJSR3cLd4Z7X",
  "key7": "3yZFgjufM4irn2P68i7EAmdkTn3YK1r4K3sfrgGourd3jj3QYjH1ANUTkEExKMTdLBimMMBfJR27QtGWrR2YqyWM",
  "key8": "4uC7TBLRGCTZQZ2mxkTA21tMbCbrrf8rTVQ9MexvkE8rQ7ZxfcK8yxx7cq9oKKuzn3rZoqJQrr3LH5s4KWvBZ6EV",
  "key9": "3kFRhcAajh4jVqnJVjzSzvGggkkzPaKeg2rK2poo5MUBboSqvKCq91TtEAjrLFp4NF54Guq6MFNUUod5jzuSYvLS",
  "key10": "37HqJD6KCY1hy7uQ1DxBui9MDw1zmRYCgzSxHg2jKNzckqTvLppR7HzbnSVpAQY9WsDGiqL9YvEivMr1oix7pyK1",
  "key11": "2PkHxwkiUaPSYsqrsk6puFbnUYNM6tNqFxd5LUhP7cq5QPM3HLN7mtJY71c9uZzmR98wN5eCSsJJisQ7aKaqus7k",
  "key12": "5kCt6gdHFR3T5MNocgRsLeEL3jsPuxrqkpymSLZUomeQQjTp3kseAHEDd6BTzAFQNy7Y6HXopHDxtzZVJYThQXun",
  "key13": "gafMJWPmQrCL5HyWfQ4UtxM2LiTKBjQ4zEs7W6rQHP5gmVhH6RiRHt2212YDM8kLArCiBCi311cMUJx7STBYzVX",
  "key14": "2d5LKxz7zNc68u8iZo6byvVxeMV29uEpKZgRPb8PwxAMsEa77g5KeZmf2Xi5aBTJDoQ5U4EgjivFpp6jR2qeWanG",
  "key15": "3szpea326Bcy6i6otkCYe6Y26bz3H3wvtFmkfc7NrrrHdr4roz6VbhYkFFJV79RGtpJbtfJyQaQXwTtJDfte8jzK",
  "key16": "4dUi47mLyzVXh7V6q4RrAFgezUd9VVWYbVfy7ig4SG1W829fYDXpCdaLAmJBS5nbJALkBhVSz4fPbWofH18Hdxnv",
  "key17": "3dCfSK5DvGE6LXYr49LryankUsKfy5jg2whUm2wJSEYbTx6TpNEFqex7Ph42Q27vZjiZpJKihCAMPraiZ7E4bYSe",
  "key18": "5ZJ4SS86zba7iBqxT5GLLy7bMZks6QDuNKu2jA2R2s13ZjBnvYQ2kuf7Uh1BZ3ySYiZY2m6ZdHfRuu34m4TBaHkj",
  "key19": "3zss7Aau2VWu7pVbEc6sRyL7LuWWCqh6NpEcKYxGGRvpfJ3SkNWF882yV9B7hRgkUFaEtTfLhMPYdQSPkusPc3t2",
  "key20": "2Nj5FNGAgy3UGBbHQg8GU2bmshS52iL6EeJbYu35o2q44JcAuJhezCcGeKZu81gQGYWHsEyPKrAmdPb4Mj9Ljp2K",
  "key21": "xKkGXs2SrzDeQ9nmsCgGu6MrPcgvnZrCdVnRvEHeskZkxrsw4TK25cLBBUv3PmxXvzFGop3UFWMQqAKnydxFLeu",
  "key22": "2HbhLtGgpS9LW6f74uyYHvs6iUvwvE3EUYFH4kGqDWzQxDUotwV74EAvigZDNGc8dBS4MyGyVddaDzuxhayZQoVp",
  "key23": "4snVV5nKjgwQxTHs2nz37or6gyCKZWTdC3eBV7j1BJHxQDRtD9pP3ARdof88hYPaXmSnWBuUYGgsk9UMy6ysJTQo",
  "key24": "3j5vH9WYx3t3QK8o1Y2JMB5UT19quoeC4D8fNUxSUkow811etkE78sLSVoRvQJLTCbaPtw6YtLUKWrJpGabD1nqx",
  "key25": "5eEVdGppKe6SNojjvUkqSNga8ozhZvrXt4oemQyEfcA1hBLFSjLuxBiBsdwcfQWwDNJsqhHqhgBbrCn62vLx4tZn",
  "key26": "5aeCXWMENQqjd7EjXdC23EZPxm9UiKoMkYK6TVCrKn9qenp5MjuvoEm1JQLWRy9oVc4393J75yducR4wqZ96WeF3",
  "key27": "5HwraUJsZvBXiRRNpF8KaWEs4x2QF8VgH3JVN2n3rjBMFtCG9TGaTmrV5YYKy78BUbs12hukE3iyDHe3mddr4fhJ",
  "key28": "5fxH2uFw1t3VNJsj8CCVLynY8eNSRm7ZMB34capo81heYdcQbGvDcofiGoZqFZtqtgm21gB81oDmwD9pYS3TNCZH",
  "key29": "4VhXUoBxT7NiSViRFfxomg56Cnanhnp1f6TygANRkzSJPTnftRXG349ZMUKrxywEELuFfDW5mLmC7F9Z4ur1C8mP",
  "key30": "3wWVskXckN5cDvJ5QrPJz1KuJSoqdDc4QRtQG4fFk9c5X6KmkAW6fxadZHVKjPJbWBZG9tPD1ep31s2rCaT7cD1s",
  "key31": "3dVUL8TWhaZmk3BzHBGZAaZeKduyS8gTv66Xg3Rk5e84wtruccQNgCrFYhNEt1DPcpZqvT8bBGTkGx4cMy1NkNCV",
  "key32": "37jgsy1D6sSCWKtdNms6gwbUpUtMvjvntSJMBKKaqeSQsZZBbYU997v84xy6DzQFswvCCRx2SQjWqjE8kTCzRWkW",
  "key33": "2HcmSbMJSC21i8ohKeNgoDAr73r6jD5iT6GUXsGq1WxJbivcpss3ZPWdfHzJhNc85SLVMZjSbTWTtSTHZYDRxKDy",
  "key34": "2FyPPxis1ybUxZaWDF43jWtUCSm6YLQ29rZLyyGF4GWF7o2QtbNuy8Wtfw1m9M3nkGzFpYihh4YMjatyD91To3eG",
  "key35": "2BhraVv3rZc5yqCmMtWgDowfZHjF97tup8yx9ddkLrtfMQb3QA1nVNvRFC2ecoaFiDBQRHYQcEbvfzNnWU34uAFC",
  "key36": "5xQzbKuXXXyQXLC18cTmGywdgBTYuHDJ3mUCe6tqm4fqAY4ftMHDUzh1GZ61viB9ojtfaR7rKo6Frm64WZjqCHQB",
  "key37": "3Qk2S63gg6MJ9bYyqyrRX8mADxHrhfXZRqCAHxDTkf3nD9ysSKTJ3AnXEosNewU6x9xizM5dCAqGhN3e1eZjEKfg",
  "key38": "GDnVr2GsWbkmJFgfH3HhYqcAhGKNrNbDaoFwkVM4ZfJB9h3qJRzTxvGTE6BDb1fLAcfNsxnRmHe5V4Zcvipddw6",
  "key39": "673XnqotZM82nrc38mdHwokEDV7t6fY1NCC7UW3zfSrbxw1vSyz6aMTGE6j5seS2BdpNgMia35Du5HhqaV4FVyYh",
  "key40": "SVrahZ1iDgVA1msVVTSsUrXfoJu9rqpVnc81Ee2aFsFNZKdvJUenaRoy3DeYhFwmCAPJb6T94fYxbZ5KthgtPnB",
  "key41": "3CE3Ryue4PFfbWMNfZ62hx4sFGiZeoWTtwaFUqQARB87gvSNwD8A9xg9sG4xmXiVQyxSA6p5obf47LixcuKaC4CQ",
  "key42": "5M2fwEY7S1CMrfuBipKZrvonsw2oouVmdYqG9rihcNqN9BG2s4HL6Linmg9ZtUKLAqAwTtVkkrNCZDdMfLbDPzpq",
  "key43": "26YJYWdqpTFhyy13wa8VVLQXSfrByfqFuigQHCrhp2qspyUM5uPDdywrTKLJKwTXHD4p1G69ckLUUMX1Ke6aytnH",
  "key44": "1BG3ZWUUbXRyqVb3dHCqnmmLGDWvp5XZfp14PcYHQdkJg7CnbJityF78QEktqiiJM89Em7FvKQz4m9FxfaMdNUj"
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
