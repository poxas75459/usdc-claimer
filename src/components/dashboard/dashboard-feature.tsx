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
    "3S26zYpEpEn6sC4SneJsWwNYQVqrgbg2e7PTAv8KVip6Ye6p4ZZq2hxYZeghbaUso4dUYFsznWx6vGpb6daaW2EG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BGjRcwbMFeVE2Kej3Yhne8FrAHtjLhk27V4yTaNfjdV7ieFtuhvRGfXDyHSwVGc6s5wbrxuYh82t849P6gorFZa",
  "key1": "4D9Gi4AMYQqT4ucxYJ5RFEywhw8FZoae6qCzhybFT28qBhQsWSNh1nobCD516RCvHG58XRh3sjKBdSDauK2mEQ1v",
  "key2": "5FgEoSSW4edbYNfNeQxPTAvARhk3u5k3fJqHrGSNEgXFcF4DY3tfPfSWkwAMqx2ga2E5xTyfGZwgyPGbWhXZAunM",
  "key3": "35RSZbBbuDozHUYrqikSgL4BLmFVji5okcTPe9aGafftGpAuAFrGoBCzNTYxbEGUBF8jsrb8YMY7xuWrhFLs2sZi",
  "key4": "3ihAwKyePj9hwgaAx8yGRPpo6wc1P8f7zUpbDUsxkeCJ16r4ePFA1iHL29P75cWGSx1qsQeJFdR7i3cPKkMcL43M",
  "key5": "2hDBAfnLNUYh4UTYfg7m9j226CcTqnqutKCyNtMpRKALmnEwhKwBYaKVAwyfCd5NQ2A5rPfNKNLe34g4LzkHBAf2",
  "key6": "2qfeP9H6SJcSuXkrtwbp3rmNHyEnZY8vgLHRHTSr7BVNJeviZowEiZ2wvobNCTDG1rF4y7N4A5duRhamNcWWMnr2",
  "key7": "5igvi5RCVsKobwN78Cqg3T7R6nQMs2FNikdue7GYHgADYvVFnwz8CPmDrfVhQhj6cEF7GTcYc2WW9tqPsBuUMG45",
  "key8": "4Q4MSk7xWvsFYRPtQfQckVVaibVQnXDHNTBDVjnm7z2bkw9q1RH1uFGbU1GDn2XrTNHy77zseywcerT7RGXeFRXp",
  "key9": "3pxD8isKo1JwPwxQA3pzFUPn1b1kFiisHieyxovdQgVbfCoRyFTQLRum23aMRnHPB6GTMzsUrN87BJxd75qNswu4",
  "key10": "3t3YbjaKF2nS5G3jao2kHcweqxZFhWe3NmUfmiEgADam1h5Zq5w4VhKgTtb7C4gUieGeNUgpWAx3kUkcbrutdbg8",
  "key11": "5gc4EjCHxYUD72yPTiiD5qPJdFZtEoEwNR2hwjV7i5ekMxRTVxz3YfaoAfZPLnHTWBm16aAWke8iu9v8Bg5JkKRF",
  "key12": "4uNb91G9yfTBKQznNfKhQT5RwUYdwArYpmUkW4sg9qRph8C2QQWQH1rJjxpRCFGx9nxJy2yZwutMcnv56wGcHmiv",
  "key13": "2tmH8J3pVEDGnqWYvaWMMdsrmHNQ7oSyJ7K4HLYfPjaiZDiqV39d3ddaGn7UvPDmuszCTMJsXEF4g7tD3HmgJF4U",
  "key14": "4QUSNQQXpHewdifZz2S468rn23NtSBr3er4oeMAe4FXBzG2Tysyi7jdcSx4B1vJ3JRLjK2Ljky95LyKLDWKyWyYD",
  "key15": "4Dnzi3fYcDhJWSHPzWJsdW5Ede8e5UkmeqnrFJGQcEJYjeqq45LwguMctE91fwHwb3bBekumokN25JPYHvnncAuu",
  "key16": "5D5cYKE4BG1aEo8BxXUBd4pFFvuiiaSBkh4AmnfFuhmtoH962Z4xxBezKbNRsTzpPK5jEdwHAnZEpynY3AsdVVGp",
  "key17": "3pNYJW3xS5wpXJYoZi5e1QPuAL1JFtB6q14ME6cRuPz11jH79Q5obm1nrM13VSy5aTg8muXwsYfUyoY8i7ngprz3",
  "key18": "5Y3Lt34w9XnemUfpvdfK2KhJ6YUQGobqLj7sGn5XyEAcu4egCu1eAPwfMHhQg9ARH3wLXP8dQJQhVK6K5BYhY4Ks",
  "key19": "4ckS69o2aejkE4XzeDLMujB87Gr1PuB5KakPvcu3m4qeJQaagYHzfkZkePJFWfkVf31KjWCDWE6FJri1HjmbxTv2",
  "key20": "WqbpUVPn6vPB8X7gpxHHZRf8XbrZ1sJDTKg9RGaHhpKDj7JxCp8ZDW872JZyZL9UxTjhphwsZn4QVoN1VL2CeYY",
  "key21": "fp1rA6oLc6Eft8pZpf6aUhhHavDLExT29fZiVFHvBctMeDXSdKKPMamo8ReCZUB9jUKbuuvLtLbi9SokbzyqUq2",
  "key22": "4ah2JgkttmHvn4pUHMu8g6nzbDTMp6TfTJnE89g52sknzAtF8h4i8Rpvxv4m9mCiFkp2GNszpDzWaZgmg7d1EaKG",
  "key23": "4NVtaLACakA5EXeQMziXMMrZJv6avzDwoC3vLxxojMD9gNhZyygA5N2EZVB9moQYSVLa5Vzci2BMXmCaCwpSxMxL",
  "key24": "bP16qPpKFDJB6x6dmeZoVueFuq8EXRC3THgspok2qWbc9y9dA7YdNh2ytJf1nxxZixTa9MMAiimkjH4oJY4Gj3t",
  "key25": "4JQPbaz1BcT1LEqNFZEDqo8u2T2YMbyvhTdFuW8Pn2t7RJA3Y1K7A2kKpYrG3ipy9kdJqEGzQGJC2iPt9b2fr119",
  "key26": "4dA59hHHHqu3qW9BuAPqjjfGrhUkPaSrNrXiba6VAmha3KAaiGaedtEz2iSFftgVmXKW7Fx1Jqe57wQVUZMvHQEW",
  "key27": "vK9GWM9BVzNhWWN8xnGy56Ud6AvCtmg1pUoU1BbKTUvGKhG2iMPk7dqCfUPM163ACUr2tHLp7P6Cgu5XS9LZGfK",
  "key28": "33SAqT4KDfMfKuBhK4AVQ6xmG5w9M4FPrK2r5m1XRCuKxoL2ED9sApWEHEGXZLq9mJYHGf7YYWgnGyWGaGr8DDVB",
  "key29": "3jimCr9s4pYQ9byfd7vAPiUJNRyCcsZwpAT2x7TybSKmJ5kd5VSTqnpchEgyjKnZBsvtU2MboKQzNwwbez4jaBDX",
  "key30": "2RjX9d9qzrwCLicdJEcJQrTbBXAcSsoVNuLBMjQsjPuPruGriS1n94YgwNDqM4o29j3pezsnBZPVD72ZPjfv11Mq",
  "key31": "5HNVqNTAzGUFqADJaWR5FQeo7EKwDzZZ6A7M5CwpdDxruLUppd2Sfo3ryUzHZsw7RQdwaXHgR73ayrGNSUEZZCBH",
  "key32": "44e7yNX7LVUYLEtut6mXTGrt4186BbhUvQYZsZTRNEEZy4icLAuKMwmKraCMVdc1729NqDkXAeFwfSTBzcoM345m",
  "key33": "2uBx2T4qwdHimFyz9E128mjLEbuXpSdwPx3K9hAgh13ZfLQ95A5PomkUZsv1FpSurAq2oCaTy34zf3fW5KojjAWx",
  "key34": "4at7oZxjCNCY3NpaTtMTUQb2T9BVnDWucVKW5Y27eMgBsTsxwSFSTvhnTByg15fjqoU6CEmkSNZ4o1A6qYASVt9q",
  "key35": "2jfDRTQq26jzfVSgXgCCuLsXBneTegxwzFWiBw4JDZfSWQTELMyFKanW7SSMzKtLkWrP3cNPDEXtAwM3pGU2joM3",
  "key36": "4iLKk1LLELWBqibNjmAqsVWt3ZnUXoAC9TmRYA7qaXTNE7iTQmTRzs2WqSZSAJ1MoCZ7X6CPbiFw2CQF5eFZ2P8V",
  "key37": "3cg6DiDmAQwCBKxsG568pVCvcKYsiFRs7fBeWwuPjFoM7cjwdgg26KS5ztDGf2M3Xrj4jXqKj5DXxCmGhoFQWNKN",
  "key38": "38wtxzLS93YDFPDstAyNXg7qLY5XFfpm7fXcNdvMGd2WtQ1tjUh6KFRnmo8v2PmvoYEWr4AetLDHu39ATYBt6jqC",
  "key39": "3r2sAsSMztYKpW9AGRUCygb5PGSGo6t2hpXtKRTzcBZGHcx41FtMK7giUfeHVdWLNMUN4JpXYRH5zyFGQnAdHJKG",
  "key40": "53MbGtJqz6VXtRnVfJRWdB2oEHGdY7WFunFs3m6bTi5PFU5m6zwL7f8Ank9yLj7cu9ejqaAxpNej7oqqqat4EWJf",
  "key41": "4FGnVeGEYiz2LNRbrDFy48YQZsQzpQeLZfYCZDxKa5LpRiTSgSedcSMbG7wnHrBwJjFHwGa2LndFqt2GUFAnLNYK",
  "key42": "4EPaBsbqyCHQwUEQ1keaPvJ21nUoSXYTCYodtVkReHzNCgWFY42wvfq6y9soZm48fxYdrH4LS3ofUMsCEtKfSGjJ",
  "key43": "4H6Lcc9QZa8irwbaZjqvqYkqcHvK1y8qg6wUYuuR78Rff4fA4ZGEndySwsyZ5vB6LkZXvHRi8izWsXYoiNHAAiva",
  "key44": "4pNJxb1hwAYajSMxNhUFFc3Zwf5UpyahmZD5o7NfcJe1FiYCe8zBnuDvm53dSciokeu771uDxGm5jskzetDvKzNQ",
  "key45": "5YM14dp6arDTRgD5Mvbd8BrQjxgqm91wBBJWVfEXQsTCqGx23ai7KEJdeXJB2fmfFppSa2tmz9d42Ht2AfRST3dh"
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
