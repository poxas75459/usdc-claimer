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
    "27hsNnYR6oAFYp82yrMnHuWzYK91GR7mDL4EQoZJBgkt9oyWDf4DGo3N1FRQ6dv9PaEkJmDeaMoo4FBLbv2whRkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TmNQUyHdMYqNNBNQXdPjpDG4oYRetKVK4fUPwWgqYrKko8q8YfLLtXcCSN2pMZtxJwwpwpgGPeSRwi55ZbiMMqD",
  "key1": "5T98DsP7PiybdHWpb5jHwTS71JshZR2G443em9BM3mNJT76coho2JhanGiETqRny4FTFXB3G9JHW4hSx92nBV2vN",
  "key2": "55Y5iNNTXnF8QU8nhWCjeAQDNkQhggR2QTGhzRjKwFXQrkkcr4uaGrv5VqubFYiSpZKjCoJXu85A4uMir2Xc63cu",
  "key3": "cterTLW1hhp2v8pEyzThorobbVRotSz5wtUST37y9jEVspRLHBZZ5ibwSD5dpYHahyHAGJGLMb5tgE4UzcPH5h6",
  "key4": "5eYiRCaWXGxw76GQnqSnwEhK5uhHSbNEjiKxXTWUHrBdFwWkYXpehy2DMR7KyVNdVfBrDshyaNBCoUcY5UDSVW9N",
  "key5": "4KL7Jpz1114RtEfAfWm4vcXR7izaKSnojVSei7uxfUmMrKq12qmFfthcsqjCNpUvNLgq4kEwzrD63i9eauyeY35x",
  "key6": "ZbbStvYuKhaNEKnJEVVtEuLBKaTVNBRMB8cJkYFp6dRXuFvfdfTgyti17Z1FDxi1gjKzLo2n2YFM6jCcrNYVAAM",
  "key7": "5y1Kjucger43Vyg5ognoWKSGQd8ywbEYaN16zWFwMcqbeU1tUSrDW9WhfAfJtpw5sXvpdPDwnrDVyMjF8punFVne",
  "key8": "UhJ2zNaXPZj9tQ2msa5x3WKLQEHZBQmeKTQR1P5aVmTGwgnYRPbGY7K7jUsSWuS1KL1zAxwSakdmPfZk5ffZWoW",
  "key9": "4ojNPjdd22ZfHZVPL7z5GuHPjzh8HcfKv2zd9EcE8PUb6wpvDNjHZ4GBUZjnnZaJ64HAhg8YHr1zwm6QkJQRh6fi",
  "key10": "49RjSPzpkdjWyBpgF1uNjE4fDXmjNyXBsxEYicMZJwjEUu6TzTBcoAZFuFDEAn52ZfdiroRqDXn2kaqsWND8U57e",
  "key11": "Tn5cnxgH8EBM8raFZmatUnsXTaRzQxG2KH9gEtZLXU85atLgof8t7ZfrgGKRBa7TM4R7RWqnRaAL2wsB5LFp2mR",
  "key12": "2TWHNCtkZmMrkeNxxuMpUVykFCEGKzVM576Nc6skYBawcvmkKQerWe2xr1Yv8cC7KpqJbcrCfSQ1toZfm419UY75",
  "key13": "66ThtNZ7FeBNozoG2XE4iN9rrALw38yH5aMRMnbkj1WfsiSk3mYEZjomdwm1iCtNaDj2uzxMsWDVV8anAeUJM373",
  "key14": "47hzS4sDbRkzkxhggsmdpyWVEVRfxa3Fn3KEcd1w9EHYMukZjJKpPWrbwceWoHAPsR64b73qSkrkvk5zKrB6Ln6m",
  "key15": "vrUErBaeH1UcDSAsaV1GrsX1uC66EDu5budyxjEPLTTnefhBW4MTfZMNxj8xnTHuHyYAG598e6DY4LtzxfKDzhS",
  "key16": "22U65rezDNXevCWqZfo9Puu3sgewHGJriG7v9Z1CZetJa5U95bCUxMFmd79iHW6TwJsDqJq1pQM3GVo6s2nii81K",
  "key17": "3GuN2DXKqiTgPmXY5KZNMEyspLYDBW8ExixL8guv7W6bSuANTaP2yGWAMnvtXmqbEhjTiwd6nibu6JQGJz2HkDE9",
  "key18": "4zMbA3NQi3Kg3z9Q8LdC6Qqs2asyxiW5VCcRoE6pkeKPNdiGnTSb8JYmrHRnAu9HNYVVLg4wzp2UKESMYoLV5ggf",
  "key19": "KwpHT2AkgUZoG1L7LUE2ZJ4upRbu6AWYKyRHB7tgZw7m8abLi8m4PDZ1cQ5jCR1oSRVt8RoCNcjKffQ62Dgdu5H",
  "key20": "5d6aN5xYR6JBGZfzgzecNQvp41VvVYLpR7CUASWkjHa7wzQ1FS8ZPpGSFS5Vhyj6bLigxpJiGsiREdAzzgE42FV7",
  "key21": "4VMWjAchzHB8YxJh4TY5QB987P3canfAeNktKrk5yUoDeqq8t4xkiP9QPeyXosXqkdjhBYxxcGZpR6sq5fYoqHKG",
  "key22": "2sbQ8NyfpvcQwvidkRpniy1TX7nu44Ujf9NrFHpKJ1eK8qynXtJdKh7XfTFV1z5EJfEWuAPTe9bFbL3ZhZHZ21gD",
  "key23": "z1H8aEbBiJ8uSTNvjqtLAZfAkxz8pQfMsb7gW4YNF3aQVSFnnp7FJ4LFTP7WDPKdHoXsTpwP8FSkbSYXXJ8zF3i",
  "key24": "nmzUCFLk8ZFDr3PbYYsiAFuwa3iq9rmARjxHia3ETCtv43YKpjm41Z6X1reJJrYSPbdoAyZTHofCwxpUzor4rjY",
  "key25": "4u2r5Vr8YVQvQV1pbcHvZtJoF4uuTttZNPtuMC6XJhuPgz1m7BTkmsp2nD258VWdMmaZ8JZuatFnphC6gz9ucQQV",
  "key26": "2ySpT8HuGWj6f7LFKQrnBWhHxsByCgffr4xcjpA8tvDeDGVdPQ5UsfuYW9mUuyw5S7jHFk1NAEnRQgEjGWP9qGs3",
  "key27": "4rXD3g8FceifgnxUhvCaeEumdjUoocEUbkP9NivyGoHLot24kXpxo1PrECnWr5dApjdaiQbUYSdMazZJdeXhUQr3",
  "key28": "2qcz7t9YmCqyEXZuyxiL8zVn8TJbH3ykp43SbfigNp74SkfnAJf1hrSfaPgmJdY7The83f5PGtoLfGJDyBBqpNQj",
  "key29": "ggoS4C94LBAWNA5EaGokn5aLicRyA36YWJH9jNMys33drJPQSGcb9cedTfngAjSiAX3NHvePg3VeLi3bwiaW7bf",
  "key30": "4nXkP1vx5P1qfr6AjdBrPamL5ya4TgsDogDAAFA8U46qjsGofhmoFb3BKDP8ieedn4DYdUn6AnrBWYv7VD37Yd6f",
  "key31": "37ZQMi2rydY31w87ViKGtrEP7YGscSPaRh2dKp4y2Yc8zmMoPVjypGrZqZbD2wL2JiGCM3KLsEgKmHE7sYBRXAHD",
  "key32": "WsGdHRT9UmjBhQfcZZmf2pZ3i2iPzim9p1zdEukUdgBHgUbnGaqWZxvD6FFqX41ZjGvHLc6V35LbQytKTLmXiVJ",
  "key33": "ZMXy59Js3WsFrhoBR1mQjdCKF5gCQ8rD1sLCDVtfMgT5cn1tniSGe3WzBdZh4iizEKMkLaRvLLkr6rimmQ9Y4Ak",
  "key34": "2c4WBeX1BCEBc1tW9pfQTgtNgbFFPboykgMT8MyMpjixYeEit2e73VVHznd94RVECsceqkgK87ARpL1kXbEaNJBx",
  "key35": "2Xd1QzjwtEVab7mvEwB2raCYQp8xBrdeRZCqMaDQofQYUdLmfwdaiBhgAQXbociA5282E9P4VuB8msiY4M1Z9iRG",
  "key36": "3nuWhmATmnFMG2AaBp5VMYfyGbnf7wefmhrEQyU3TJzNxFPeGu4mzqYHsiZ1t9jXf2Xk3FZbogHJ5vcpEdw3JSsk",
  "key37": "3N3ixChwMur8hSKgwJetLLdkH3ry3GVXMW2Ufiz2hxCVXC4YqLYyYXCYYVoq61w9MrFjpUXSZL56wypZJta7X6Ea",
  "key38": "4tquPZwCGZ3kgBCyFgHeoCDUdCqaQxCg3Z1FmjXDjoaiKd9cd7zir7mXxB3iVQNLC26FxJKifAbcnLW7xAnW6SBi",
  "key39": "r9vnuAsi9q43ZjS28DFd4vsiEdPmvHtzH9jSpw84Fpi6WjoEffSL35hLQUWTuMuBXnJKC8YsNmtxWKa6eEH8BhR",
  "key40": "enw3eAse5iUAYQ7KoJvR1F7zufV8UfS9eS4v6cUSYkq91uUXUmz4kB6UbhJkTyCrrNTvTK7KLG1uSis3hbKEuie",
  "key41": "28Kh9GGi5puBWK5Ke4d4zr4FWHvdhe2yyCPZyZdLUjq7FBmHatWTVVUtEXhGGLJwbeR8YBqdsrVXR6wwf84yp57f",
  "key42": "3dPccw6H5ngRbgNLHhfpegiAKv5niU2CieoENaWEzunPvTUU3kWfJXUjbC3ActeEmJQaXp87LyhtZtcDBJEKFwWn",
  "key43": "4SCeAMSFkMhcqQTdygXaSi38A8h8yuXG8pxJUKHhAKBXFqHsqf6ZbTfMn4brSU8qd8jKEdV3FiSL3ykqZR8EwCaB",
  "key44": "5X8UDzsvqBGDAcvRbPb9fZeoCibQhhzbrj6c7bb1r1HXCmoWyLfht8pjZSxbCfwx7b8jZsc1KiX6FoCSe4uFbyA6",
  "key45": "3cFNby6eWSRxWENc89rSqJ1yXbejqVCig8oaHz4My1KozLXd56fKPKh8VfuAkQiR15bgTRYSi15mYcit6jJbm7AX",
  "key46": "26moVRJRyf4i3qkp3byZUKJcbdcVJsKjAhQNZFyKddcLuP6MkfrftvvykX5nbBq4PYtUreUwhw2j656A5rxz4VEY",
  "key47": "5vwyjMYwLjPc2x1MswH2VdaaAbNEeBuZ21GtnsrJp2MUidSmFynYpmZBMFYS9twpjXKbRz4pdMzgWu5bWnLAAGE3"
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
