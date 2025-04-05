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
    "4M9bxwAvzMe3iBtzrrxrDjcNpvrg2kbZqi8w3t9EM1EzKCdgLCurah7gkw3s5ksjtveZbyWwaHBVWjeALsgh5ipD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43vckGig5AiQGkRwSorUudV4G3rcThoa5a2HkMZZDqmkKQLWRSE4dTNKqZm1uEtXWakBVtxk1U6fAEhka9jgPtHv",
  "key1": "212kHKUYRUahbvS4HvF1Y6JCqDAykWLqV4aD1GaxRGHo8AtAv33rxEbqYrcaESSWSfKvei61bRKRD7GnKctjUCxS",
  "key2": "5AC77XW6yyv8CwYDyzAWTiG4vtZHrG6KPe47PGuMi55Efx4sMgoBxY7SGvz2U2wKPNVGkM5TEX122jrXL25UN1gZ",
  "key3": "3KQLwzrC2S58TuKJKHQx3AJ86fS2Dq9WeBEE8jhH4U4JmC4apwBDPTwCWascHEah6dvBN6WeFq9hc8vuuMZeAtpo",
  "key4": "2KjPuPPbDtsgGiFrnu6psPBfAMKaefUow82NFEeeCK7aU3JpevG7YqgkhiKUunQ4stcr5mWhDGEuVFDWbNZ1uzN3",
  "key5": "3hg1ZvHrfoggD2a6fNfcKgAZot63Mf46QmZZBiJasZcTea86MVhC8ayitoXsdLTzi5YV82LCryyDPSTFLKTftKe2",
  "key6": "5dHshm26s9jNCHNEYBojwiSURZNeuoBmApyPE7RcmUkgbQ7sVKwLVYq1i5Zh4bzfEgg7Gu8zX1cq5Q5qRY6Xoi9y",
  "key7": "A5YfYvPf1sqzcphpG7mjTp3VxL9dJc9h7Rb2MDdkgi1mtQd2s4LZLATMMwFKM7uf5TeqUaEUYRX2K7uhCbfBjoi",
  "key8": "2XGQspc8zp5Xv2a1LjzmGoyNbpUwd6cCoogRiMW1BCZ52zy4hCL2fLayE2jm5BLCfkLQbrh1r9SUCzjYQnsprTR4",
  "key9": "hsC4E2h3hVX7Xeiu4d9FzwwHdt2xLSRqhgsWrRFVX5FaKt9qWmFnp3H71w9cPbF4zxRzw8aspDgfiepYj5omHdx",
  "key10": "3usDxCBDrmvErTC7PjhwxnUzNiDGJJRjgFB19PB6jZMpeQygXT1w1t49Grv5Sj3r1pDpKZ6kNVzwdqwn48i8qRxr",
  "key11": "XSJd5Nr3oMQLEmtEY67kV33a5VZnzsptihMseh8fQs1PogsgcYwbzUTmZnoQdQk4HgfDH3S55dkXyxeSnx4EfkD",
  "key12": "4XxedMLo8DBdBSHRGPwa2oEept6oKhWWXSCCixAvwwqsEW7f2PcyiT6ZXzDSWnwuN2jixPT9yXB3jNR4K12G35PK",
  "key13": "3zHYCZxXmtqyhXeFrs29iFQC8Xr4WNzK2P8LSppTW95pdCuNALavHTGfiZvZCS9tNg7yKfwtT6TmQvTqfDAKE7A4",
  "key14": "DtjEPvkRmU52FwDLx3UMmrRHah5cSrAnnoL1YpxKWiPp76KEiPZQAir2MicBvhCKWhWDc4SLcFPyQmcpYaMQbda",
  "key15": "55DYvqJ6jK4TStEFRh8onEEsPRAsxc2Apo68zscx2L3Pkv7YNzQAHyM1fWg2MNk1YmpQGDNq6vAtaR7eY6uLT2ai",
  "key16": "2sh73wCfqckRF2fUZb6Y9i23i52Jsciytz6uV7FMVp4XHKPvFtGovPEWLwDDMTyFr8w1iK1UgqVmyL6A6N1YpYtZ",
  "key17": "BAEWxxt9obdKXAiC34EKLGqbKqt6Foa3arB3XyaHwRVk44xUmJowSxHozDva4GwymB68MK1NKZbtBNrQbQVj2p1",
  "key18": "jMXihoVYQjKJrx3kaxM1DgwsjfLdkwyQbqzCALqfDhpkaZw6Zrkty9UNLf6pFUc7ctvByEPs8VhCCsa5d2qoKZq",
  "key19": "4VUr9RxsiPAUMzPojZNi3Xnif43fJaCktesT9diuppxFdaMVoCmodBTEpaygmXNLTrvFB2VVHjH6SyKG4HG98WqK",
  "key20": "3Y8gD1xZgXW52hsFEr3Z5oik4cMYMSzwyfcNAcBZFN5J6FXUEezTz5YDh95g5a1dTBSawgD89YN2rC84kf9nwUYj",
  "key21": "3zTDZE4s57iLde65f7eWiRETpK7mDDVkS5Xue9RBFb8BcpstAGqVQjeMNpt6742igW9pTvEGrmAixSMMhhzJeBZf",
  "key22": "5T9m2CwFbSqaf79NMXnEUpVcnwa28WgsV2JFHezi2LUzbsHbYVztSor5HLUrrAhfiHbLBvxFiD1MTsEL1HbXCpxX",
  "key23": "3v3ZmkiRVYfGYQxBUbe3PQe28i8AWs1vZzje4PVVCGrMWdt4gW4EUxTjmy717XapbHKHQMnbnFTPUFs1qu2XBKUz",
  "key24": "2Hpx2e3Citm8WcTyiVWPqTymvU5VBtvidYJ6tL7H3JUCXpC7mXZfxz9oHPJmLL52H1sbLUdcSMUW24sPuDxGyvW3",
  "key25": "4QLU9mkKMCHLFkcBNU2LDAUkSLMHgGvZnPtCk2KK37xYBUJNGUy76kTngnZTDWr3SgqcCw8jcVanmcyRcpxdupN2",
  "key26": "JegMFdHLGY65gYMz53ZvvJLGRJAKR1RuRmThjFhDhUanKENi7e7pBZDHchKeUdFg2v4mQbcZAMh1o9w4w1p4oAy",
  "key27": "TLzmvxAKMdpR3GLKTsEeY1XYoZcANJ5v5u1E1JFQu9E2X7SnxEwkx4uJdeQBqqtXUse2u6NMgmYk1wi6xzhMJ9C",
  "key28": "4aBZt9KXnHX5VPYjWNfL725q6Yr88z7gptPmNEL4xADWpF1RAtfC47ALH9mVHJkRXm8ox6cZbEsh1P8JsrQ8kHwY",
  "key29": "5bMcTouaKqiV9BnTMvsRjncVrRhq2e7qAarDHWhunE64z3nnugvaa2h16cSfEA5jLGmjGrV1v6VhMUbnzFkg49k",
  "key30": "5XoqSHECNQZ87qaLQSzBRjHsS3Hy2NzMPhE5UWJr41FEbz1tVuuNytGAVipEzU9wwZ9soeciEMYoMnRiGMR5EJ45",
  "key31": "4pUGvCs2wAxpjnV9SiY2CeJN1cf6wy3gukGpBKfbP4mxMcwswDiXrRkXmFo6832qnyxqsnVhxaHLnoaH1G34xXR2",
  "key32": "2M4c1ox1A25AENfLFEhSVr2jxqu9a4mZatdLB9HzBL41Jan1BhQAGycR1eKGXfitibMrY7H1v8NqewQ4Rcfpn2hs",
  "key33": "3SXA6dymzjBxjhGih4tnKDDFMMrkp8tZxY1mn7GV5ea4rnNV2x9JaAecHECqHjFrmXNovhMXDjWYQ8BFS7yztxZV",
  "key34": "H2rjiNKikGm5cQGEfsrcQs4Z2giyoHjYdG1qZSpky8SmFJ6K1TT552GEs5LzXC8svgeN76dRj2rqCMbJqTy9Hqi",
  "key35": "48kbstgCBYRDEop9rTvvvHcebZHa55swHnwRRHzWbJVfAF8abZLkibvSSBFtqqsGT7cG6BzqbTM8EFFDL1N5DBPz",
  "key36": "2bkUDa48bevuKzxbavNYXwAWYkACKdZLLgrqTW5JBMh46YLA66zfGatNpu5ToMKhcjL46vyCZoYwiN9ciwJSjmHV",
  "key37": "t1DKPpNGbcQRqE3TvW2fWqjr4U4FnpKEo4tQqcpZCq5vY2inUoXG5xSpudQzpUip4sGryeRpeLgag3WRJgCHiy8",
  "key38": "2EJ8W9cDyRUBcvip7soFZQGzoDgRF41GPmeyMCU9p3f8XXhhaDFK65sYvgZwVg53XpTCQuo5z26NNL8qBW8PJpt5",
  "key39": "3crRm5871tt99KvhgcEHAGLJFCTHD8B644zrNobo4e3KKmSAKZ3NkQ6rAdRRuXsvaabXwNDztFfTkEUNWHrHjuHV",
  "key40": "f1oYuM9NTBVevv8ybTnbhV7oYWMmtRmQbKjfK5Q2vAZNxT7nLhdUoKJGSVgewhKEubQhgFX2ZUV5pxqaTTFzpeE",
  "key41": "2GJJpKNzk9VmMzduqQVRDeBaiqZmhkyRq876cf5YQaMP3t7kgV14CR21kgaYv5912v63PGvMCvTJP9vT9z7rEZ4y",
  "key42": "HvA5dGKAgi6F3h4NU4KprRWJvDiGWJFjgR7ngRNSyCgGg25TrVhmVP3szFzadSxUArMgQq73Nx6CGoueu1rVubV",
  "key43": "49icvKKr6o2TQ5wmLYZcJEMRv7j3X5KPwfoacAmVqmapTTRvudMniqHhxNkddbUYXSBcCdKG512W5rQAvkmBcDtb"
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
