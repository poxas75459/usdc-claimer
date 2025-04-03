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
    "54x6bkAuTfgJB7onJJXE2dav1LJmP4qCkfwLaVuYDeNf4r14M23W7vgo8z6VGcYbQiarQfJx7RVnA7cV9UgvHxyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Y6iXD2xmEyPEaCF6dJafCjQjZKo4PCN2p1NprUdmfSpaeKaB33RhyGpbXKN47nCctXSx7JUKuQnhs2PhoaEX8i",
  "key1": "rvuZCqg6TuEKmsQpq7woXkCCtKuYVwypCRWbwi4p8GfL1QgoB6ZSpEz4kecCAHv44CjLtFDRKBJRisXrVTpoM6U",
  "key2": "2Gjpw2uNVb2cxwddXUn39LeLegHr4t2jNL3L8x37vaxwKJnyER2uzYUx5NAm5sCAEbWUJqY1yGaebnZx5QEimhG2",
  "key3": "RFNA222ZvShMmbxYipkgq77WHSPYPmYBoxc2259J6XV2FXuHPrnDUGxvaNtvLmy2zrA3bxw1AndQQ4exwqg3R3k",
  "key4": "5MouaTWo7tD3ppYueoPQfGkKh3wmhZboVFRErXudu8kUHc21xn6rrF1yNYAwNRfejgFokqqrAbhLYmuFGGVt5bKN",
  "key5": "uk6HsihNUGb5CMmiw3HT9bimAUuKnCh6wfvbfjR9zq4phUM5khpdmzzwiQf18RTKUT5HoMHe3D1vY4yGcb8FHkn",
  "key6": "C8tbjMA2kDMBqF7H7FMCsWCdEqFutipiRvqQiQdmL2wezEi4kz9H9pS1KczKHhG4in3TTpzamGnHrYveJdwjyQ6",
  "key7": "5dErB3biwfCqgxbFDr3R77ZyVFg5yjh2BSkAjfj2azJMtTqUJk2tanaQJ2MWu27LUjqsRvTQpLCxj8yob24c45YD",
  "key8": "4kqa4px6xnkN3GoNzw1hnHckmKruvKvA74ibdYoyPA6b3SHorTSPAmF7RC8J8TE4dXpVjh9Qt3uSehwGXfD9hU1u",
  "key9": "4eatYbT5P8zWLkJJaeTfExUMKWFf5gSFDknaZhVAFLAUyWg7y8NaBvf66ve9Z1sj495AxmJmb1PDWsV3YvBbXige",
  "key10": "5NPap3eGWZ4EdiKj8pxvpQ9VRmqu9JQuhQ5pCVZKZiwJvXoZ72Hq1YSvHW6KUNSPGnVEc9vJh2XQQYogMLq78NP",
  "key11": "2HpNkGPtNQKn1NmZsnTMVBZo2unJNF4M8Z2s3aYGT2pVuwixcpYdxPyajVA4WKwqbzasxwzVfFCr31ehx7SmGfpA",
  "key12": "V6yT4acR3kDFMxQmNinKWL142aikMWStDaFadGGZpmBR3zytDcctQxNhgKT2Bzsbo4SP7D6f77oEosTephNSoe3",
  "key13": "5w2q5HYm2jQ9MHuYMLLcwdC5okNzGDhkzCnbS9z1PJwmfYxScCM57gqPWDycauBzDEuGF1ty6SPHKLcNjCmVxcbc",
  "key14": "49CVfNJXkYbPe1Uvy1gVxoiFU3xzWUyMUWGtUED8MZUavxYdKz8KBWip6x3hhfgUGw3CEB1tHPV5yRHXcmskTYgk",
  "key15": "2ZhMXqPkuZVHieWuBvbXV4tSHgdzuRrW9VEQJrygF1v9ntRMoXDTUfMuGTC1r9id3rtDKHQh6yaGW877yR8NmQp2",
  "key16": "5DPXfSSchDa2B2RBrEPfr7DzyS8GWszcgHxL4TPyXsKTb5evwgcbGGuruZ5mqFnDtgTjeiTXcqoP1E3ZgyQgvvkz",
  "key17": "2wJMUz6GpjsTzdBmmHdwLAjpBfZ4nBXNZSxtQE21PdXabRoYfw4PuFVoxyh3b4fsBch5V87sdfjBv63jZ18kcJUc",
  "key18": "4x9CWr9DkKQXTuGn82mXHF3HvYdq7DTr1A1WdNhYGK8ZAA5XD8qrH68k1qNzjuCmttiEaxKSi3fvFQPSYkhiQCdb",
  "key19": "3hoNJkNgqYg8M8ZD9vsUi6x2zVgsMfdc78PGn6rNFHNhus4CNZwRbjwNJrSE2qSvnKxyojiRt4B7t2gX9uYdq9VL",
  "key20": "63xRbmwT6x5qFs8EyoxLYPeF5UCap6PJgjA285BTr7WBem3tPg9NT3q2RAaujGY76Gev1i5mwfciycoTPHqdmNmq",
  "key21": "5oWnvJswdoKkjQzLBqR6wvWeeTEwn9HNHttCxABjqEDJnH6JAGCYSV5NQfVF4ZU3gr3iu8YrB3ySZSZjoqgjKZTW",
  "key22": "3c2fFB2a7hAyVAmoXFW1QmbZECTUoW2VZSzASykfpJj9qi3uRb1pzEG1WzJK9MixJCVHGrgzQPtm7CvbpD4P4dr9",
  "key23": "61mdZp11NmpSGWAevd17iFPx1LoYXdWN2vCGNe7yjxLpp2p94BkvGFNorTUz1RZcNAjwfocD69Ps2xYkM4t3p57b",
  "key24": "3Dj8fGuMcqStCtGeEJ6uAdbsCVhayM131XDYia6fUCAcm799YXZYMZgYDgjczgVHNmDdGDqSwyMdJB7UgBDBCEzZ",
  "key25": "5AAg4qQLTYMrpWzBYHD5HYtxjGCMeY7iS4ZUa3HDPPjVrZowbrhH15xpVuJxErviKJytfVjs4q6t81WaggbAMig3",
  "key26": "3CmDwQXTkhPN8GfURvXSAbQrgbnt2eKuKkDHtBfQsBanfSegVThcqx1F3UnrcdgKAbtkdk4qufZZb2hoAMhNF2bT",
  "key27": "2wUP6fm9FVZM2pmNRajvpj8Jcqad5HZHQyMnVGSh4EmmnDazcXbMmCCCy4DgeVy7Hvx5ruVAE8uh8dwEJYHfjHuU",
  "key28": "5e64RxKZzzimAz1Ft1n9trkjC4ck88WLemZknMAPFGcW6JW3KwNPjgSVatRxUtieQ5UngkidiRvL3T53Z9Mn5mwg",
  "key29": "5zofLPQZ5W4TXioZ82yEzJMJcGBenNudBg17dnhi7PxvN8wWfvjoSgVFd3YaCxB1EeSadB6GnEpUR6cRi23bYGdu",
  "key30": "33u7hSuNG6m4LpyrhXzXGA1HwZ1s5QaKGdte6cgD3byo1F62SCuNMrnRA6DQkZNrn38VV3AMYCw7dKemJNwyeqzB",
  "key31": "2xmFJ3y4XQ6GASTpkgTswb2btzfonbZUJMZYTEnCEXXnTQFCGLRAEHTX5nxnuYj6vfwE1PMA4DzdVrXzDpTifwiv",
  "key32": "3KZE7wKoiNryr8aTYY9FzcTcPBqrHFUX8awXVQK1tjwbH6HML9pci3rsXwi6Hyz8mpLyAGvUKUDcAJJ6mLZ2w9ko",
  "key33": "47ZXVfSeikmAA52CPtSoGVzwwW4qVMYbXRkKyLC6bpVZHXTaHgeutsGnQjHCkhVxP6tmn81tHr97bkyNevQ9aaEi",
  "key34": "ZvfkXuyCDexEiPFGYHPE2JXfUajbLAJpAPDb4Ci7QLnGnyiTXLVvNY79cGyAZ8mYNFuPgdBaztYDhpkCvfXqqBz",
  "key35": "2csRBemkRvc716K3eXy6uZekrk7X9qq18FZDoc2HeRmpLmhdS2i7LoKxoJ1u56kMMo2WTcAUX8opLo41iPPGQ3gg",
  "key36": "3CS6UT5axuAodCbUATPrGoPHbJjQnA6ZkB2tKTuFgeSodsS6jKgtGEdx6t4xuxUFTFD61F6LQ9BGwLhg6sJepDcy",
  "key37": "4uDtegsrzJHMKU6PGTXZUUZSYFKpAA6etBBvwXJq6GWEAdFC4D1GWFQbmVguKkzSvZmr18yH9Y2uyyxg1RwneoHw",
  "key38": "28DtUPWRGHK8g29SrcqemaDQiD8GY7ygpGSuuWvVoHRXXZGaZBeBwegMDxskbA7daEBrja6EK2Zy1F7isCr3hXRj",
  "key39": "ApqS7iR1sAxjTgb58b4LywufR9wWXAwpo9g4YY9MkDwKXVngEHM3vZgcpWSmmFf42pTY5W81VLtpvczWiyTZUCN",
  "key40": "sGZ1fhtqnZYoTL44vY8MbBi8pdniWTWXPTHqr3cuXRBHKzU5Y3sJnnHtUL3KPywHvZLUjVgP1JXgPyn3s2EYu6z",
  "key41": "3WLvjZ5nTa97ALdaFr5H3544sUgAPtKZjgzzY73yeyPNxhgqhEBjEpcJ1D2ddSb1gw78htXPi5ARu8mQ86w8nmJr",
  "key42": "3ZBEZXpRnHiX4mH4fGsovXEFjmxrH58jXbdK4pTPeExbeA47sSSaU2yEXvMTM6783uohZQ4347wtjUdGhBeLboMv"
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
