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
    "4iHBbQSYQpTgLyMNhjSK9SGh8N2ww9MpP9Bg8UMYzNZM12B1H4jRiXMqZDYEec8dxgkJ6YAUYh8NCFJBnrPMRZQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4imW2T8JHJsDiETe7xGs31w3Afx9zRBrbFX2cQDkNqyQfLQvgGwstmy8tFnXntX8TPVpsNmAzqj6Ka7HLJkVbcc5",
  "key1": "3esqs3Jix3WtSqR8XuK9dYs34yncEfw6s43jpTczSLSxAGRB5nXJQ8d9ZihMnJJ2KMgqhPDV9Ajaqw8eL54g5aNt",
  "key2": "5MqNpC5YQdQDbxRgGhvWFgoJpryAGBxgiLRs8zknsG5tCqSYQvuFN9qsCtt7zRPYkEZdNayhmbwNUXCuMkdauodi",
  "key3": "5S3NSa3TP2sQ88f8oi7ti6ywaLLcwNpGLaxeVR63HGLomE2t1cQPDiQ7kHwccc4oscEtwy1CWZzyTQmHQmN7kAdC",
  "key4": "DsLAFDcLcDny58CuPZ2fezVCBRbTWhzAFegszk3XMzE1Aa69ee4LRaZaGoKhJU2uRsbR2kPqzoCHvrtxXT3zQGK",
  "key5": "2W6PBH1mgmv65AY9f7Rsfyhe78KNUyJPr2aJY2FobtiqxTV5Qzob17AeGvHPs8SXMJDd89vXhwdNNqRXbNj1bAiq",
  "key6": "2HCgoF2RAWVD8gDSxdmFayyFAGwPsSPSTMNi2QyrNeHc1PLUEvPsbBPFK8QpVgVVgCYWXycQhYNTCeMaP6G2kFCR",
  "key7": "5BSdRdaCwu5yhS1FiiwoNCcq2akTS73QZQhQYpomUvQx2fnXHaJaWrizstqjfjkAqeiC8bw692K38g5j8GbGjFKW",
  "key8": "cQuayFATeuWHs3RfUrb4cKtw6vBHr1PnWzEFNZRchVwahKKCwFd6xknmkwxERsvkgGWHkjtB4QUxFgXVZHQQNg7",
  "key9": "2ebG4UFztpcgvSjssV45VCMm7r4hNcS67nmays1F3RQVDMcv2f52dEM6HaHV3WkMcKxFugbtdXNLTfxox4uMJM4",
  "key10": "4wk1mExV11KejAeeoFFG8Wn1D6tFVBmpHneJLmH7hmtZ83MnG3ZbQgLX1AZmKgrXuQcmsAPfhwQtPhLe1wDdMvQ6",
  "key11": "25f44e58i7wkLUKmB1u5ZgkKVn3LRVAvuUkc13dfAPWZEcNZ84sikU4A531ci3XNT5BrEw126He3oHk2Y1XTCUZu",
  "key12": "2TF5AtjCuasChqSKK7xctBi6oGpKxjMqqcqBFKdAEhuEEGLjEwAdc46irmcxh7qtwUBdGuNCi8xN6sx238WYnKvS",
  "key13": "4rVijtS3inZXB5mkBn4KLqX4BeVi9L81BexU8bKwNzErQeTtYKdRaUPNvFkR8vvysxtaxNxYhW9HPPGtMW8m9YFh",
  "key14": "2ry91iCb8Fg9VHEagGzaqXfB5vdXMnaQU9eUs8amNXWDgnkoX3bYFiByhhfADXw2ghomdFsugxJa7AHmXtYC58cL",
  "key15": "3DBsRNGHD4GQ6uW6aTJJYCBDdtrzKttoZYUa2c1kYYBH2kE5vdgPNXCQS87ka6VqTuUZLZm5xfGNDG5TBsCWTZgJ",
  "key16": "5SZN2yYXL8jzDKsCqBg3uMkri3wasWSh6ia7jsPyjAewyS9EFNcFCjMUe8MZ2CisHfiRgWroJj5Ku38J9M7TD8W9",
  "key17": "3cnuU28avQhwEJLDf4zznjqkGujxaGPmLwWqc2V8hagyAQXnk7ZMDbr8BhPWqvMGvy1eUxcNsSAMQh3nubJcPRdq",
  "key18": "3jngVd7R1KqJ8XBJ9EJLnAqpk5dcVZU7fhjf4PbYJzY8kGDGSEU1qJQfpDiEbBZHLSsV8eBsFjBtMtk2TZCpQcDG",
  "key19": "3V8xk9EuoHtWPfKR59Rn41TLS213y7QAg8sgSiS7cDPL7b3GBXcHUbburc3uMo2EeHbPcR7ExSudrK1XZC89obJt",
  "key20": "5FhQtJu6F8uvGX5A1CNMwq2MnpKZJTErMKE5jeuCKks74QU1sHBtrrYMcysBfQRdsPAbahTLMdP55RQf8MdL3Yn",
  "key21": "2QfESEXFrqxZopynkBECn65ehtoWGzCvgtcXiGBAVKBVh49iNSD4g7sDbE7cf1kMFBzSffrkA1Uc7xa6LLoAW7Gm",
  "key22": "471hjcaEA3zF7oT2aF8Hzz4pHBeM7JF3KLbo2Rc26SGz2imNwFyLMGfsCvDUc1dFehD2zzR88oocMNb6ig7CgHng",
  "key23": "2knaQ88e2CiEKEiFNzFWFvUpwaaAJzsdqrJb1jfLwv7S9PTht6Z59xeuhEukibsPjv8g292NTfWFtNFQVN5yi8Sz",
  "key24": "2fGo8FQKK5fhcPaArQR4ydPL2t5vWnHojpbuiyHJ6kiUqEDKQ3d9uM3fhtKs6EDaDRebA76kbqgzCNdHdk84QPUX",
  "key25": "2qQawwyVDEQjT9YGj99o3Fdkc4nUEuGqVqiqnvCsVuL6F7NmV6TQLUybSDuEz85iwtZ2W6ARcpi5dQikzmiyLHPz",
  "key26": "2niYHBemf5z3YijrWQkxdmH5YwjjYngsTesp38iEtvB7VE6nQXWog9RVQYhSmbPLErSiw7tNsXzSDZHe1STXGXn5",
  "key27": "3v9VJPGHmrsctB7CuFjykFB4WeSBSKfDYPAD61QcXvSxL64PLdxW76qHGybBTZLoTo62USpRx2qvgADp9uZYoNpH",
  "key28": "pbMLK2HH9e4Pn6hZ12DsSGkgdFr3M4MfQVRGEtrryzFnDkWEVamX6o5BdVSknYBBFHuKT8HbU7DeAcfgBFxaAEk",
  "key29": "2s9kFDFzH7T7rNVCurD8uFuVuz4MfKJ14Q7u5odDWRAJx14fn8mMod8BLNueKhr8SFmYBFKsgCL57RGkx9Js24Fp",
  "key30": "2tXHMRqtNfrctAU48djpauBzP9g8uRaWD8Yg5fz8WxGHmd2mQFiHnwoRgsP3mnXY69JChER9kBGogKdmfQGTLx31",
  "key31": "5VUPooWQNTubTSgGM2ehPcdhbShFqCg6YgzzpbRBdCUgSrT51hcmAF8CqXdeJHmAPEembbLaSPC1s1pNDZy9DmeZ",
  "key32": "chKDN5RaCo18Xr8Zc9xz4QAABoj5Jh8iSmbwNdbqUXkcrmPgwzGk9wUhVyn9bFSUCerogbyGrXgXMY1aWx4q93B",
  "key33": "VEsNp1JZ6qPWVzoQ9AoryokGKdLRzShXGzXkqR7USfGjJTWaGaHarMmUCku6MuPJsHzwFat9ksuvi6Nm7Jz56Sn",
  "key34": "5jD4qKb6h31KowU9mJ5kGBNEdRtHcDhE78dNejXYaoHMLLgt8rPVVfs2vPV89qHUTMWXG3xnHEnr58evjikkDy9S",
  "key35": "2yV3bXPyU3tJQDJJJ58WNKEUqXZakD3eiuGsGNU3Vf8GLQWR9kUCojP2BzWQiK6Zbcm6ewpt97syzki9kz2ZTaQP",
  "key36": "2ntARR5TmVtD2AbTJfzMEAjk2J4py6XMKGGD4nVY51hUeT2Yce4B9V7xTb53rYyozi68Z3pr4Hvof6ovLreerkPM",
  "key37": "4VE5aB59Zq64jJCwvviohT7aaZa5mbLw5ida672HeSiXuea2Hm5Pd3bYW8cqnA2QpptNGFpiwoYWuk4NDrCiVxuc",
  "key38": "4wuqKuANagavbRbkstguTbzaz1d4bjJcT5TBDQvtJPZecxWeTmvcgE1m4JWRAm672Qk72Bpx6hAWwQJRJAvP9Ude",
  "key39": "24u1tnHBJiMSnpLQVP4q4BrzfTybcE1PKt8AnRcPf6fCrAcERe9udWLwiLUX9gU7zAVF8R2dQ2NCXbTnRU4Wq8ov",
  "key40": "4qiBwT3F3kNu3DDNfgydaMfVKVDUuWePcERFWEvdquyWHhu5Km26piz3EPNrhjQ4FZBwAhxrET7cYhHYB9UKv66k",
  "key41": "5Xmpy1JoJo9EjbsMBnKtHGDUhQPwf8nz6ufodj3fmkmALzxMjkzfsVc4MTQ9NtmTWW3VUd8Q7cd4FhgHQsyqoBoW",
  "key42": "5pdRT35jcLqxyDX6UftVp2TZnJkRAmiBVTT3xDs3UpJudJSDsH1qYiDeRXoch9nPaZyhdLs5h1fFXP7Ygz9YCrjz",
  "key43": "2KLKsazXePY4PQpNmvsAEB23BLPNJGd9jFu7SBxeG41Cp2VH3cofEQa3FNYq6AyuWRAieEJ8DAJYHtbsWygiZd7C",
  "key44": "5PGiCZQVuEKh1nTujmoNnXTi6YJyKPiy9QT6UYsqfFadn16UDkivyXgpvHh4k3vuZ9XaPkoXnCR6FJDcmLZEZcBA",
  "key45": "3kWC5Za6rjD55GCf2JHEiBmwgS78JJC2kXeuGU6tbkDAEXC1frGDjb6kBPRFGLsesfHJebmsNQ4Ti7jooyX6Wxf7"
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
