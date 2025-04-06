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
    "2xDSy6apNgLmtVKjEiLEitpyVK7myc6gR8Vm6jHn8fr9jWUATWs3p8MYAV1g8pwCryLhW8HqUfF2yWHRZ91zyutU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pprtr5CuToa9wBR4QEVwGRL47eGrJNrDNsXQvPetxHNts1SRnoZHzaTJFZgUZoy5E5wFUtGJ5PRtG911xjHLHRM",
  "key1": "4HM7Rg2zBadyqJ8HpQEHgxvUN7p4gDmy9KCjwjmR331C5qSwYHBAn2T7pNYaA2vwJjAQagTDr6nRA8dwYeSFU4wQ",
  "key2": "3t2yjFL8eeh8MSwpEQMJTsXQ9b5zXiL95XmrdAc5NTeYJuDsZhpjQr9nbnEd6dYr9BnTuYNxKhniHTChUpsfrhtH",
  "key3": "4WTRuP1KjhtJws5qMR2hgTAFFjugEkZuj3Vsio8b4k5yH7GxzCv5AEHKvQrRndZujAqp1kHKZDnqGj6e8WtHn8VM",
  "key4": "52gPrNiHvMYUJvZAxDjUbHZEvTwW7dS5uYTk3Q4bT8ztgRvrFVo8bGmQZ92srmCuu7HvhT2ngod9T33YLoGHVKfc",
  "key5": "2e2cfuyp6LRu31VknHuLnpJ3Qa5h7NptcWLsnwxRZMeHcWZ9g9azRtwitKy4TQpYRwfjkdFdbMcMvDtFXE8yWMM7",
  "key6": "2rcY8WA5JdUJXhUwZSqmUJrt46xmpFpqN2dyPbj3Sj6YZDwWn2m4MvsJ3wsfJtJrb7Ynnpke6p5YNDuvhRuz22wZ",
  "key7": "31V36LcFXby46wxoQyKJY1ESty9GAFw5d5mnKQqJkdYhK7PnQWjbP6pbvTdS2aNLsgCdnznEvbJz8UswHSpWN8Vd",
  "key8": "3hqou1GWhxrPEf5rjFwg8WqsWTcHBUc78jaPUBho4bxU9NRnVXMMYj1V5CNZr7fNXzAG31MRZRpC11GpBSPF7ydg",
  "key9": "33jXPtsyiCBULzDsLQWFQtDnva4Dya1h74qZHx9bLdRNGUdvGiACWFYRTHw8kMcR1QD8x7oTWauQM87bFPnm9fj4",
  "key10": "5cat7KghZvSqrxKqVegX5WEWBzcMkHugfUE7jYouTR6gcwQtuAaA1r9FENY6ekdfqDkDuuSCU3HeXaVD9xwuGoqU",
  "key11": "WiwZnkik2WVLPwJiwp2WUwhzATBfwHBLBfGLB7uv3MSttPCWxF1td2J7ZVECSj9tncCR8YozEtUB2aKbyTL2SNh",
  "key12": "3wk7Zztsd7JPmGyJV7W1DT57wBeuee4tS2mqnhszsSQs7omKbm7jXTirfnho2ewQcHK7WF53gAPHGvtjqTcSSKLm",
  "key13": "5dw2JiKvcktYv99a6VqAD9VmPUxAi87KV1F4WpmcyzNtWo43EXNoirWYk6Mjn184ChfxYRgocxveEVUymTbfCvpU",
  "key14": "67ekuKKU45oA1MGuLAYQDhn3ecnANZDKzwZveXniDDAr1XyAGF2JsNoyFhbZNedbZnTHkJ59YaR419kbRz3xfJQX",
  "key15": "36sJPCPu5FwzahMJDStFE2Sz5X781WT8QcirzZX3mCrfPB67uiBxArMUaqnn6W9VqPwu75b1dpJimdYxxK7rGFi7",
  "key16": "mkpWbN3Z4HbQYikb1GB7FGS7uW43f1HH8EmByxy38aasqHZjheQ8xSVcTxqsegQr5P8pAmXFU8fbNRgKYDHmvre",
  "key17": "2j5aGqcxNZExYPwp6demrWSmZjERWU5qmcLfdvUvThPgfoe1PC3fi6drSxT6fakhER9keje9ss69r6ZraDJWnBUt",
  "key18": "4K7D11RgXFwx28zUr5oScNCc7UFwNtZLhXE65oMMz6fKeRkqmTsTvfzFv7jnePCQEd2unii6RZWG9KHySHW7enK1",
  "key19": "29UZyiHrgu7ph4FdMS6xDjcKZdoLitEHsnFCpQaqceXD83fHmnZ3Dg6gapPkozbAewnFoPEV3vY3oEwvGFBHT26o",
  "key20": "5bScsoYwaL4LnR2MRLNffneqaSC2LydpLmbjQPdMRmztCxMWXoHucnfE88otwABUyMdgNgnjeiRWcrsfrJaBxEtU",
  "key21": "3D9hu5QLpyZpuVhyuWbk5hCLNyxCt8r8sNAawLKdaExGSioyyPCYkwkiWB4u46ntgNqEKpkRtMzWhYodcYridZu7",
  "key22": "2Uy2ndjgM2KD9ESqKmWgfY5dymRcnXDM3FsNEPY5kYr39fHeEEANGCm2bSurjpmMpo28heS4VCDQzwieHbp7Die2",
  "key23": "3sxRp66AQKmm88GvC25zPFzVuk5dSqtVfTKVANRtYyYjboRytrh5R1fdK4h8wQuQkDS5jKGdcKwzrtu3ZcUoesWK",
  "key24": "CLKnx9zASscNPbLM1tokuJsBQTxd6vxvmajT3SLQLQEGGFDG8DadQQxVQ8SgzgJqwzyNDEUoyKbYAWjR8gDM8pb",
  "key25": "2rMJWoLwtn67Xd9ouRWxRMHVzneezAKtKHanBxpA74WVJKRFZM56aKPm1TzN1gdPLeh5XiRxPUsG9c8681wSVsk5",
  "key26": "2wXhapvZUFFQ5JhMM5BHCVdLgVHWYw4N6zCk6eDABUQ9X3bdCTX8StxDQF1GSHZeY5zwBXSik5QDDkD2j4ui3s6M",
  "key27": "Z5raVRSuXuCYWmQva2ZqGd6h8jNJSydjHE1uUm1XykMha3eRAsadrB4JR7hq1YtV57CbDqVDY1c5p5bow7o7d8C",
  "key28": "5jRHev5Vb7oGF1X5wfHTcSo79vdzZMePw7SS8deN2FCKdrFaDssXEb9DvknVk5nqt1m9PVYaL1vrZ5uE9xEmgYd7",
  "key29": "3ihe8foTNBE9uq5x2dnJ6jtDgysGdo2481FjnSjLaGY6U6Ur26Vn2ZzFz9egyEm565XMm2HzaR75Hb94tMUo86UK",
  "key30": "2er51nnDPD32W6GtMTXvbTEvLZeSKfQYhauqu2amCsnnrdtgx9tVXW4YGwH1TaWr2oTMCBvPWw1pen6jrke4Gc56",
  "key31": "2mvLpLBN6tx6iBYozxgyikxhpD94iZzWxY9oxYLjxdpgcKHjMEiTBjA2NAftzb7aW4B1yWPZ3A2mbNkVDaEubtHP",
  "key32": "62y1ooQYvUgKWZ6Zh6VYP5w51cUSsuzoNs59uYPPbFVgtAErwVAavKJUkWZPBi8fQpzA76fiMe1kAzr8nrWEvgs9",
  "key33": "idrA6TAzYCBmM8CTgSrtKiVzJQyh41N228SQ1ZwSsH2TvBy3AihA82nvhRMicdjEUJFBWUWmEQq2vcSCUX3Ugpa",
  "key34": "528VfzELGQswwLwe3STi8uKqqVaNzhcHpGeZdeCRqfBXxctx5HkuwYEd7XF7u4nDehpR59dgiPKxx2QDq84civ91",
  "key35": "4BMu4xJsKq5gqkeRSxS87kryVZhY4oVgk7Hngh2WPEYVVUta6pPAouxYXLrj1W2jfpzAwkdCedeth5RLyAnqyrVW",
  "key36": "5SPk6ysbxV1sBY8fBuU7bnTdXdzUa8CVPWpLAGDbwfEMY8oYNgNVvWHMqQikiTv52TT5k58dLeoPYUGktH5UqFjT",
  "key37": "4LDqeekgAxayHyCV1Nuc5DBHNu96L4aPF71PTpJdo6FuetbeSTf9KUxApfDWKjbuqajnCs1m6QRHaDw8iJgfaQRA",
  "key38": "42pn2sdgKGbJ2yuwsUwqRCLoRM7r68TubApVDzxRgUfJTHz7iyv8kh5UxF4yEM1E9eevW9jbtmBdpZ9sVokFzYMz",
  "key39": "2QxigLdJt39PZWUNo8E6PnqQTuZgaqG2hBSBkJ2oXCEuELzaHcgwqfezoZaw6gN76rqc6NPNgwXGVfBDHgj4YRUm",
  "key40": "57aWx8rqTrvUUBsZ6MFeLM72h6onXpkpbT2YKhdFjExSAyDNxkTXKqDsDsiUJdQvvNA7rkro9oxekQp2oDn7HiFj",
  "key41": "3LEwbaqtHo7DDE583ZWyaSshjmhib2JvjnKvPFr81dpsJoZXZ19qAbG9chhYRiGda2pfb9VsXSWjgZf4DXaZRVzy"
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
