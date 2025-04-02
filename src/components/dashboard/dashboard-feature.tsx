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
    "G5iBzyKmrYwYn8cuv1gQLPZdb5FYXKyPitqzs3QvcVULC3ZdnaMsDWTeAHAxsi6tzBNJ4DLkbS4MGFgf1v32kcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XwbERwj2CPmoyNnjhzUZrSsYo7SSQCXkHHzHjoePjwDcU48CfiG5Ww24L9Fi1ZyxgfSR87gdsrMRDoRxmjd5QVi",
  "key1": "59hikF7oTt3TZK2TMp3gaTvvbHBxWjhk84T2FJzaxg2dXGyJ1M4BFjtwXGC6RYiVgguM1YzHFdAQd9tHoRkDnJXp",
  "key2": "5LWzv2rxHnfFALsexQpPggKWe8MbcxxeaRLd1wPtpab5PWUFRYgR21CCzcBLvWy7norqxcVb7feyBPTD4FnWGwEa",
  "key3": "2aST9p6JTVHveqGtjSjWjUm4ZyVGFLBxTTWabC8vm78EyFEqoEzj65maDKqo1PHQafXPpxwf2RxS97t7m2qfhyhy",
  "key4": "57kDpVHxHr7ZmZctf2DMU1cnb634ED5fmkeCKQPnn8cQqpr1fxh61cTWUrinsv72TCWSueGFwHT9FjNRPWGZyLAL",
  "key5": "5pDTQZD1UUNQc6bVFvFubcqCuDsMD8FcaKC12HVbMnrfD8BhtZCtuxyzYzVjrc75SwMmAxE55oFRuaJUUKow3zx1",
  "key6": "RgMKXWeVKdgrxaSa42Y3WN3c2BkH28rgrNQXYbxREt4opXD8ZrFG3Stw4R1QX9FHnZL7VbjNW3M3ofWhXDHdUGH",
  "key7": "3gGjaHdbsgq4vNaRbNNox3hKRCow2FXigZaqdR4MRcwFcGuy6pb4zipaz5bvMdBBmV1RaVbBtkfzAsEXzLAsZyXP",
  "key8": "5VNPNVXEUXh59Py62aihNfhp8suWerJXKoKeEzhRco9x9YfMRdYikbFdrWPwMJJKUe4aFwjhA17t1v9N7hVT5tJg",
  "key9": "HRLnL9r55VoiQGaGbtyc1pWQn3uXvGQoSQ8hp7FPfue41FgBsfDDvqNfkgFDJNtJpNTGoAK3h4AfnDpveAYtivG",
  "key10": "e3DfAoWQVBT6iwGHxqMEVfPpGjkLKVtbdjphYUakasJ7HSd7xwMNAmicnpmhuk6AuBbXZnrQdr7LP9Tb3zP4UrV",
  "key11": "4GxWWyqVehFRa3QwAXAn1tGkHbYNmXhWjGgvXg9PsyJVRK8b6vQhufN96Hvs4VfRZbAVur44vgY2PBUwDkA8qAon",
  "key12": "2NCU8RVJS3D6S9T7DVZR9MrD2QCxD564o8en1hkNUSRhL72VwzwWXxZimqNaqc6oXYStNfeLbxajTNKAD6Z9iC7U",
  "key13": "2HLyFTRj5c8eKtvBUCDaVhYAL674R9J4KywDQPMMrNtH8xntCfSMrRgGud1ugcx5XHmnrsCzs2HrfFBNiWb21awZ",
  "key14": "2HFcy1Dd2ctA12QKMnSaTXRNEfFps2ZdzsS61W5SJYzAzARrHWXQaLyPVvunHdx2Q4HTJ9i7oT8Fo4KzFxrgVYvN",
  "key15": "Geek2VWsCNCEqsKg5gXfbcBeojjSggj6Xqk8GoryAMiUBxJBLkhBAL3mwK59rA8Ukv55pWdmrMvWnZuM67Jk9c8",
  "key16": "4AYDt9qfpdChf1Xjk5K3CzSZZMFJqDwwZ5aXeVas55NNV4Rz5MFT9WaXxNYur394dUuLCEu2nhgpd7mKPxAJdkYL",
  "key17": "2cgvdy2iG5Ep37D92TexeADEJpJM3dm5SSAw5o6QbHsnFhdUoZQ2HutEPvxt6KetqH9ZtiVEZmkCpELzRzKgc1L9",
  "key18": "5QcYeDcvxHWZ79iy5UFkMGAx1sbiZnWy6AJcbQbwV3C4SuWDapLnf2JdaR6q84ZfLsmMBqcJsqtuianjda3ob7X5",
  "key19": "3cMHhM7f16TLYDfjRjyJLpNkayFBNZQyPLwB5p9HcfytjG2566aJJA3MvFW2o2q1iXYEhkLC21bACwy4o9s8EyMr",
  "key20": "128iZJvoNm2en8QiuWbbdQ3jSBF6aP7hySY8sk1ZjyyA8KCgLPGgStjcsZ8pAckBuj4TAZPx67jZygr2tbVTMLLK",
  "key21": "28B6QQTpNWqfYi3ytZecEbVqPaSxikfBgQAWHWRizLhCyV4tdUXLNAjvzp81XTbvbCmWEfcp2gVHtgMWt7aPFrRs",
  "key22": "4spWqaYeZvzBj3sPbfj9Us7oU7izVknQWLJZD61Smpzq7ytHESakimpdy5E1ppLFi4xbfqpeQvb2NYXs9Rayg4iU",
  "key23": "2YB878vHHFJoZDFtmCM969D7XsEj17TB3TCD1MBuecd8Z75u95CzyuUYt47NrEFkvEt7oHn3PksPXEyr7JgJfVNE",
  "key24": "rnfw8jMVaR9LGqgxf7Rxo3Jwo6N9jcYkgUkezsDADsZVDUGsGMuQidz4TFFddw3LA1PqbP3rhtT3Nw18K2Bo4JK",
  "key25": "2mBE2m1Ju6v6rVXaWKo1nKbVNHCMH9okCDH5D7L4vgmPLB3Nui5dqsqkjp2fGYdPS3JExmRqoqVEs4e6jpQ8g66R",
  "key26": "55fy7MHZ3WWRVbYPKRZLfUvayJ6onPpnKNCYUeE5aDzF4wSXNpJtS1cA1pYM3TVjwXMTEgG419GqFX9bXeFkidML",
  "key27": "66fTWEwXwQUHpEvgPWHFCxjze1btRp565dbQmUuogMnRvYPsKsvWHczrdZsi7wf85pcHRcNYebVoD47zypD5uNHb",
  "key28": "3dTDpNg4TCD3w7NQGRqt5VopShLPtmwgnaBqfRm9oghweqeRp6MgcqMvt5THjQGaReJ17ByAcMh7Gyxx9uM52num",
  "key29": "59jxGdtUZDwVAW4DW649HYnJfm4Ht28dfCWmC4sLFUpU4FsiyNbg2oyTcYhSuhsDWuDNESF1ppWQeDdhotC6RGYA",
  "key30": "5dXempbUKKTNeR9ZVjYWD6YPbaFnF1vYWWzzjPxh66cNYD7Us9zUg18ztEmm6eVeYTdaoi3RW521ymmyRsNUDt6D",
  "key31": "58K4QMzsJh9UxMSAyAQBPRptNsicLpDbMRbj6TKMSFyLo1dXwd6S9WjQ82fzmVqM7Tg8Tyr455ZQwr8eYXxHK4aG",
  "key32": "FmKNU1zSjTstZ9VBjV7dYJB3gbcEffdm7zKqhoTJXHLZinw6rmXQiVdWDUGiQe8xFXpCyKQFvoyYPmEJ1F6r2s3"
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
