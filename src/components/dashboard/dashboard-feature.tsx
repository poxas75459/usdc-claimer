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
    "5BUi6iAK5zKv9ASNDfqkdcjBB9fB1rZdBtCaTK32tELAGkudZhVc3PSD23B7sirdmmZwNkRAj9RPuw594ZfTCV35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63UuVDbcDFQEWsf2bEm1BqdtTFN6Uqvs1DKMdGJeSL8RgJpNtshfSGrLfsPChXxXjhByiaR1nGXpPehtvVS6TNuu",
  "key1": "4TLmYTUd8MA29vggYmee4p78ShQDTQ7ghSDzazEEGbN83ky8WZYspwSVZ4ssmbeqSJtNA6duVQgWew3THqFrY1qH",
  "key2": "62oANfAPdaCX5Gh5a4Sn5dyQqWMthFSABJbMi2GFRXKAmxSkL6cMxbSGZGjsHmG3oPR4MjXQypu5TZGKo4ZwVqSa",
  "key3": "3u2ah7a5y621N3GzFBHmNf93fdRHqHdC47JtoWvwNubACUnB3AfgLczwpni87jaweTNfCH1GyMZ2t1Fuh9mhyWBZ",
  "key4": "3jr1aU7ACu36WbdaQvJpkKMN6vwNwQ4AJraNagq1Zcr2a4sjG1E1xKLNdtwKpraZBo38nZK56vwig5WgCVZUYqJj",
  "key5": "41H55AFtAyufKmAQnxZNQJtxy2K8cVz8wFKPCuK9DjPZ8CVQNKa1rN931pGtYUaKvu1psRo93YXpH7j39obYvbb7",
  "key6": "u82vRRhVsbZdDxKdA2HC5dG6pKEdnu95BULEmuPycgFpj5j327NqvU26LKEURJwtmLQhk9V4dhV9QrNrws72FjY",
  "key7": "c5xx8M3bt7YKMQUCN7W8sn9132W4SL889VdTTnsQhqH31ZbY1CU7wtL39fzxbDuiWtaa424yuzR3MNiCEoGZwnM",
  "key8": "3dM3fjinYYokupNvLfDMoA7MTSxrr1QepLUfb9v4ufcyEeaTkAEvNMxG4WjLSnc75ZmSEqjqcKwVKAuQtGS1hnw9",
  "key9": "6172NBeKqQ1SYvGy9Jr5dnj547wgZikUU3Au1F39nbQqGULEqiKTC6KQHLr5rN6F9sfUViX9m2MVCJSLsAQDNYeJ",
  "key10": "3uJEvcBYtGtxgrfTjJAee9ZZS8YVC8NR7fz4Kk4541ZpyGZ565A3GF2ByhypQoPLjfZMedajW8Q1t7NTXztcMo88",
  "key11": "3LcW3t7YxEbhvBpKotGnizxB9TykTsNFrXafn25qwuxvEbc4FVqN17wCqCfFWe8FQeL8fA1odKfgWDNEH4Dw6f5J",
  "key12": "5GE5SPUFii3ccSfeWcS4BYuah65ctWHRTYNGfNrDmrYgWo6TuR6HfUkpdsQWTeoubWAEqsPocv9szbPpmLN3Vj7u",
  "key13": "4HiTFfvitmwdwExC7duNnm1QgSBQMBN7R73GyrH2mhEevMnKMuMU91UD8deX8zrtwkekyrFJEcMvKyaSjAEdrZFS",
  "key14": "3myenff2zWxrYrZ62dNogZ8G18ArYJ2aHVct1vBPRUZH6LW3bAqy3NswstMyUwCrRU6W54uipEDtQxBjQokjCFdv",
  "key15": "5aWnqZ9UnHZwGuGJ5Rmb7LxeVK2qBTfzXcn2ESF1zyK18ZbxAaf1XRTmYBx5h6i2VTBNErkYSRqKmaBb5W6AGLLs",
  "key16": "5ptFhvEwS6Eio54MP79Rmok9HvNtRQd6qYcUDChttXWn2gb81WGfnhunzEc6VrxUQaZGC9SqPGf5cfWbRFQCbYe4",
  "key17": "5R5WQMJRccadkXg8F65Lzjjg8frF1NS9bq9C3oqzC8j5FBmRFSopR14GgXAHcxFsb9c2NuSGuE3SokLmKMoUWFR2",
  "key18": "4HAww99xtkR6nAxRjWT4teAkhENUrV9qmuhXX1YUgQLAtQTnQ8vuNmYnhs7fvTTgtafVvv1MFjbZpMPoSurFrTVS",
  "key19": "41Z9Bm8rKN2cPLDuUsDfsXS1Y9uWqo8vxdCBy7yiKeSeqEXLzTahcXxNfKtJdZp56Nm7mQw5qhswqxhi24X8YpVN",
  "key20": "dkdoQWBK4PnLid4hbQxu2yboCMbZBZycYP7vXSjhr9JCJ8goaSNiGNAj4dwJH9Ak3q2Q1AfpBPTeLUcv5wo9Kp4",
  "key21": "36kFXva3WVg2bFfvDbJgdm1FDa5DhNoMYNm7nsXEFu931Bh591J7HytZPGaUTDSyjNj4LiRJ9YZ54N3VpjLwdvPm",
  "key22": "2tes3sATYz7KexQLwCVTCUZFa4LJAWwrooPGioPtaSicRhdrEaiykriEQov4Vs62TZVWxoTPc6HCV9uAomMJKvJr",
  "key23": "34w6aM6GmP1puABbE5qZfqwPw1BJwijqCAU1yTr5XxDW6zy8bxB6AdUb7qmrPPJcaP2VnbtN8xjXfiUWc46Bq4An",
  "key24": "xbZ84isxNyMGQxWPwtAfAXZFwoBhd5Ck6SsgKmAUEG3vxhp294tf3tytXkLv4FZQVb4QR1ckMwkpUj47AhX1q5p",
  "key25": "2NxhWPV4gGrhEq5nGvdQLrd514tPXoiNaDzCxS2cNFTKhAH72f8paCBA5GCP9q5oWBSAe9ovQX2ypXbQoN19a7YJ",
  "key26": "4fFZB9Uz56L58jLm1smmqJ8nv43aUBg6vPtyBkHGReuHBvPc1KtNRNdvSEpk3zcRrdAknhgtG3uCJk4Di6gbxLzh",
  "key27": "5NY93S1iBfPmy1pgML1oHL45GxS2DvNSuEEPJktzmKPagm9pXgEzksjaGD2iamFt7rXzqJSJW3zjxhjsQSFYdGWB",
  "key28": "5ZJVUS99uKgF3i3psvXCvLNXVWbnmdqeiwDfjj5VDERBW3PTsGixrhmLTFNSTFbCtiZPTrQSF8f8E8kZFCab8qLi",
  "key29": "5ianBrdvKXUik9AWZibjibVSWyDtykBsd9Kq6CNLJAvvicmuiyDwLcBDcbXhDRfWM3yNocgt7R8BW7p1zeP2yJ9B",
  "key30": "5FRFT7Pvf2wJU37DYMTGvHWugoUxsvxaZAwShVBxbTJ6Ru5rJxnFXMtCrKYtj71egL5co9Wjg56VP345c4t2cmzn",
  "key31": "5KLtvV97pB5vtW642nBfuUGLqAC1D7pFbdLnsNMGsXhxDt3V831UQhK7z7dFRRKBfak357Zgd8eUew6tkXfeAbhj",
  "key32": "66GVKAwEQNbVjKjbUCtTDYJ9PgYJF9dwZyV6V5qVMqRrbCSi26p8LkTUSx65bD8ju6o2tzipNEQrgZuEyDR4znNe",
  "key33": "4bWTLSuAf2qjrceP8jD4y8jb6ynik2HtyPssLPELX2EXBaQ2z9fmqnzVHTNs7WVvyy9ucu2oxzi4QCiCdvjfn2pU",
  "key34": "nHYgqAQQtuiNLHj5rgB8omWX42NPs2wJAD4PTNTNHA46nhguGYqxwup29Cvyh65uPwwZNskH5LKtXZhzY4AUgPs",
  "key35": "5g3NjPK6W53ufY25WKL8JRMbeNtGrZNBuzRccbpYkYJKih31KQdHNqEQUbo6hZ9Z8gD3JQMJwDpLT7hRo6ttkaWE",
  "key36": "2sr4tc2hP72ghFsS6y4hW7Ju3We9KuTGNGT6F1pS5WQzbocHNW1YnqAk6YVm3TjJNui3nYBF738rU5VVCLxJScUA",
  "key37": "44PXuDR3r2bekMBWb4NhzudMLi1CHznPHyiZnUS3P1d58bxzoFqteZcezBAF4Em37gbpCUfhDrL2oWJuQsUGb6WS",
  "key38": "3SnSgqhuZzzppAtreccVs7SrD9F2S3FdabDqP3CRNdvei7eGycnK5SR5JoqGfRKPk6z2Eqe4JEShZ8QddCemj8Qr",
  "key39": "2RAUvp4ntjEUVyuqzV9H5E8j8jHp5pqATot5h3GiKJFqUzoek2G3V62Cc79cTwkSdnJFPHmmBrWwngA5pqHCPtRr",
  "key40": "5e45GRtMWX5H7s7myDUZSKQSvVjenE4Nw2aXSfMQNHixEiiQzATniTiaXj2fxwe8edP5e7h9GPdm8QpAkdjijoB7",
  "key41": "3WJDCY3sqopReceT1uFN8n5TCPsxRya5bhseExcKqXvDMfv7ugSrLTbmbdcBkhAyet2GcVjecz21TyDKLTg1XBiB",
  "key42": "5EMJ4VXURwXud2GDZFC7PjjqkS4mSSGvFqubKP4PeMfAMXRX8KnaHGmipvWbPxdeCSr55agcJANBCh862eWdv9cN",
  "key43": "3CoFNXsCC7EVaP81JD9xQorCSddRkin9Ap7vvNnTSSYNvXDbjrPyCGdFb5jc73ip2uBmqDgbvmu7xVVjc1cuG2KJ",
  "key44": "5tGB7QJENyJDaHM1J7GmoxWPcZdRc8kwKpjAVfr5iR51bxpX8Kod31S4BpfouAqqERo9b71YQTXFvP9criAnebyz",
  "key45": "VdQDnRNyGWqsXEAJ6ea32mG5xpYiNnnqh6Dbp9SPiJi8iJieYkiNSicq2WzWTETCFkkTecwfKJypNreNXvcATTg",
  "key46": "4iLLsk9rondGk8LRMViD9UMQ6a9YDwfnKwm2xEJsMfJDVYY24gpzUr1TxA5qVnyEWxksp7W5un3dopFi2TvQDnqR",
  "key47": "4CemyJBqMdx1r4vGmg2KwV9GMoQZnVtLGMr3AVsCFGBPk5wngtJRK62wuZqZ5LjCVAjoyrvyiobY8A392oU7X9bo"
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
