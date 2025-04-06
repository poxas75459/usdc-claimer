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
    "4sg7ypWQqVR9inoXxabWtGapti2Dvy2JEQTi8uAg5kucenBdcE88d5W57uKETLQFHR5BxCxMqAC745Hu1PtNDcev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yZ6BmZaRYC2ana5Rtcjs7dPKVUu9Z94sujsy1jadpZ48d7YJpYZbyifqHYcVvQiQe7hQe44zGJ77FmhwomfMHXr",
  "key1": "2onzXA4qorTZrDSwWWuRzDEwmUmbXyw81ebtWQnEquAFTqPxz6Q334DYw63RukJcsQ6bRTBsckprEj9D1Q8Pzv1q",
  "key2": "4DXGvbZdi8j8xYDAQRKD4RfsnEALjLumuKmT5TWjtJ7sdaNnRz4bkt23oboJ2AxCFUd1oP12JHZ6NRJTL3gB3mdv",
  "key3": "2fhtmGV56HhevixXTyGe4QNQNaJ4Jo2wa9kJv7hobBVatswk2qjJmnovKQ9p98ApTQQ6LDguTFo3iPC1vLKCrJgY",
  "key4": "3GNHiVQdxTsBTvHUdG1L17U2oXZ1V4uQ8X8om451baH2d7niWLbmysNq83Jg1FvVwUr9RLY2jDRiqTpy4E7RiUgX",
  "key5": "3DHYAZxie5YvZhqyZQuDKQJmaVb5UQETH7TQ9LygrwubQ743TzGngCUrV2gbG73KqksfbCdvTV1CNE4uM4zf2bzD",
  "key6": "4o8fdbDYP8xoB7LRQURtiDA2Z7oUdmRTK831oGCQk9w9jjijagEpmEFMK68ciPxJPucg9xYVek8ZyEvpdCCeSymg",
  "key7": "3jqcSXvAKDxtTuVJGycP2zHUmbnqPSdmCdCrr6XazwxEXr2VintUW4m74qtKz2rCzrHBGF9qcbY2H9RaZd3aLjez",
  "key8": "3ZPD7dH8u3UJC9Akm1QcJCfnzHD4mwP2NxfkDXCEjo1LoKLPEZm4uKGcJyG55Yr1E81rFHaciV8Yccoc7itry1WL",
  "key9": "3AMRKhoDFiRXcP4xvdsEPFX7WM56V7DPUqWgYQbd7EVTDDVpDEEmxpswLz2feaqK7EourgkCw6jFGrvkeuNQAbK",
  "key10": "3oXaXCmPZrJzG7iW3Ab91AQN6XJA4mH4pv4DsrWQGVswbhHEfYNYeutsTERksMKrNCyKQ19MwZWrQEzPBWd5dq6R",
  "key11": "25pP4uehEVc3LwgBwPc5e5W1WoH9ukwYJ9ZT88chhQp54LVSqSkWYrvqnMQ4bufPQacqdKwstrFKd2Kjr2hvBRcE",
  "key12": "4s8KTR9HSzQGzMmzmFkyW3XVUDwu7oGcHXdBtNVELfkzuQWRSEu4Z45rNEdjRUaCS9ix7d6FTdCsW4jjgNNewNhZ",
  "key13": "5s9fP7LkXrm7dWJ4HJBNxFVGtzUHNZz9ywrqanArKHEv4avdnLnNbZ36LVuWgEGMApJG6MHjmDUvGuU5CZsXY44e",
  "key14": "5pRoQspScRvm4wTp5Lb3rKb4sABmFEHJMrtVm5suVqNLYC4Xfe7LBUjN6bqHdcjxQ5ToaYMM12ETk529uTXNB6ck",
  "key15": "2BTMYwWtxrhnGTDKK9pxmw8ViodtSxFStTyxqRc43ScJKuZHKQC9c99Myvi5va5D7im4C5HWAapV2ZxCz2M8GWoU",
  "key16": "kZFAHd7TWnnHDYZnudRjZLJfubCBPUuDyoW3jdF8XnKeXyruNU6icvQ9Yb5kHefB4iaC1ugQ99zxCfFYorqfMpX",
  "key17": "3vrjmXPae6iDDQbBdiTx6oZstMcqHrV1JZxGmCn9sXuMuucbe7viqPjkQGfm5zR1NnFsDQEWDrvjpzCtsCdaQxx4",
  "key18": "4scHnhti1yjUr4nQNXtee1rc1RHqykeQuz73hvtDdQ4En8bZcLgrskEv17agzEpxyWjHRd19N6Qqnrzv7VXxjdrm",
  "key19": "r3NKXHWMZ6DK9wjergkwrNRoDhqmatgVKDDymAY8KSeQuRkxyvnF1EDLHKAfDjnBknKqGXetaNbokVMtxpUjaGB",
  "key20": "4ZFTmTGRUKSjYVJVyhperxMk95n2fdreW4gCFsgi2FURbLFYnqL2SgsQtqS2P7bFRaMQPAX7me8q7bcaXhvQCKg5",
  "key21": "5VHTAHpebJ72thtAyv7FB6vYsYcMY3aWuGYMB1iEkkRjr8fg6BE241cYGG4nzqHaMgsx3WGiGpPcBGgojTcRrv5c",
  "key22": "2pLW2McUqvLPC7evnkVRrZoSWQwdWzbD21NMV9MQzzGiNWCfsZV3svEDaaHKLp1Moi2aY28mA8ZqDCdnm45cjKyQ",
  "key23": "5XfXMc8S8yf9vkYza5cpWLp4PzJAfvHsyMe84hhSRhjXoeMhn6E6bDAQjAUZSLRK53zdDedQz46yx4FfaFRGnw8j",
  "key24": "3QFLr1H4R9wxEmqRvtvAZmhDyumcmdDS4tp8KZWhL5XZ3xkBkzHNhyeEVdcQsNsToWqMsyQgURBTgvCQmMsUtWZx",
  "key25": "49eud9TukgUZCKcrXGFJ2usHEZ495sDPqpuUYnaiNsLacxzMfz8pW6oZd9eCGw11n5oj4KEepjvbohcCAce5vEcy",
  "key26": "Rzu9EnnemCGgr6PPm2KMY3Jbv59iqsBJwzJMLMUycDNWBttZSJos7bKLVbdFXS2T8j2PSBPyzzWfHx8BMgew2cK",
  "key27": "6qgPvxgPhGVPd7bTfSVD3fgLjSNyL5MYgvWWF23Nzgn228sr6272ya9KHkFmQzqX4wUNAGT7sc56iBvHUXwfWfA",
  "key28": "3zuVjHmQLztMcGXWV5MBkQAtQ22n4BD34Z8ujhPt92dUDc3wnGYyJVnkcdU9p8QXCLou3GrguoRie86SgCyxeEJg",
  "key29": "2AQBGsJNCm6yU2Qs987AUNjRgv9X366TXneCVqFNHNQtTyuQyXxWb3nbMipHtffajxUG8QpauC9kSf4GFhux3ixN",
  "key30": "4y9vyjJz1sYB4RsRHr1t8sDKB3zZMtydHBDJpQribVp8zkrPZ4bRj8yojvrv7rWpWK5jNaBD1wUFLRkUWh2tCFJ9",
  "key31": "3o5NCEyZaZgkuyFzQGRDUPEJ8x8M51jyGeyKhAs3ainSQENhkjPRJdeNAaM8ACrUHTMihwpYnuiWTXeC3YKsdKB1",
  "key32": "3AyfcyXhiLxetFU3xchNeUHWpvgDbJxUf7wq3QTSbRVwg3XPr7EX214h8grNWjp2t5EHEnBwmqJV39VWMuQ1sta3",
  "key33": "3cenUiMGUEbKYXQtYjC4QyYV98bFKPRnotuPAS98Tr7Lpd7VoctuJ9kCPyMTAGn54vwCUhyW1xtX2Zr2krgtsajG",
  "key34": "3Brr38sV1VEkTnT58NhZTbSXx3yHniJjfBPUpAy4NSqaqmHPJjRgFvon6Fdd34uS9NyFixjowjvjSRVCVhNrUpqv",
  "key35": "5sYUZWa7GrdphgFVqh8fpFM576UiVDTxPgsTLrWV2cNUyB6pYQWxcuKsWCNbqipjRnyCVu2NH5ffVtjfdiWrGxmv",
  "key36": "5VyTeNpSdD85noaFYFq3bUKdhgnN7LfAW1zUZodLhU7vYUd1Y2La54v22ZEchnTmdLd8NEgCDKfrpvR4iXZCAH6e",
  "key37": "3qt63u8UqThyjDLrx5AAte1adcQqeohUCEZyBMXhkoGamWoD6iNvY8Bhb5z4NUrnvKGphrsZUawfeJFz3Xh6K7Ev",
  "key38": "4t264NW4dvuHZHDHwd5eTuzDFZdQnyriQ7ZwSaao2ZdHWWnJUhb4KKeJVuvt6DF9grmANrvc6mQFAzct7cuJRxcf",
  "key39": "4i45Gm7kNDcYxGuFr2kgGK2qsPhy8hBKRC4sJsdV4MrfnNH7Y3CpJGBBuj3wnn6Kcqtpk993sXbMcj1Qip1oKKFt",
  "key40": "64m2JsWu2jeTaEyY3UhSTnWi9wUeQ6Rem6uZVusL2BpHZcbmR9ZknPoMNRbJx8TKPyxEj1CCWX2ARwspAAF22nso",
  "key41": "5XZ24igMeKkvKSSSBateMJeKMVLkHQvAQ6SVp3h9WK4bvTbM5nj2ooE7e4QpTirUGyRdsDSP2D6pNa9aN5RXBtqr",
  "key42": "5PzEDJ23YA8fEeAW2mUXwxcugreUb5nqNPtvsfewWaR7cauATBe2s1Ty2tQD9x2VocKUbYV2NBDZNusWcnYzVeYC"
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
