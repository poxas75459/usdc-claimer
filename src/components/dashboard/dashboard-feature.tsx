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
    "5aSyim3a9MVmUsidb5r5WFQaeVBLRpEgXxgvut86jzsRCciJx3KctZYt3Mc1we7ME1yumr32ow4pWsZztQ9hYUQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LzbV5smKZKqGcGAgnYt5nw1pYzm8btEqUt6rQnSmMczJnyCiERpT1J6ivTmtrUBKkWSoB6RmFfot4hSJPYjFTAn",
  "key1": "4C9mGeMEohE2CcQv4qQBdSGEioo1v5fPDqQ4tewMB4PNcVNPVS7DX3guRGo4fFogyrYYNUgUbYQ3oECV7vcSAvUP",
  "key2": "5B6xYVS4CWZ11ae7spupKsoSEPL97W9bU5SC1aVCbNM7xgPF1e9qJGHDNWhM35kJGmnx2J3K9R4sReorfntSxBe1",
  "key3": "5qz76Ekwx5ZDhT57m6B3xgXCGcxmXDViGcVLZ85zYsPsPA8JWL4rP4sgFxmNpJSLxpNAuqZXaeiKJRpnVbceKvWL",
  "key4": "2yrLoPhMBi2nGAiZCJJ6c5Egpwnte8CvzVhbHGYsNn6bKqThq7wQkB9dtEd4rZjMj3k4JowV6oYXCkH2QScFctLx",
  "key5": "3NfC4iRz6EkossGsZvoLXv4uAAn47PDFz4GLmAQY4ZMLYLxCtSG8zUr3JTSKQYBnfBEv29m2QZtE2F8PhKmZh6wt",
  "key6": "2Hu1TrDjDDjPHJpgULcXMFpwbsV8BNc8MwwSa8QRZE8FHpCCPLwGjt1s4SNuuMw5fKbsBEBeBFpjQMJPiR1skZHq",
  "key7": "4uYm8XHcWdmwU4MbUweUJjZEAQ76sYJrUZtzsNg8BfUF7SHsa5B4wcCsomADoAQdpER3AMaFKjjeWEnvLNNY5Cu2",
  "key8": "2D1qLmjzMkK6bWmWzpYAETkFK7HBESgDRUNvN8KhmBCkBf6LoNi8r3Bfsm95JiWWLx9c8DHt8bnAx2qKwKxh3PP4",
  "key9": "2XLbsSM29Fys5ZsriDeBK8yRjmUwqPE1K7qUizD6dMuXLyCWNi3mXJHVTcDTLS2evfwhZQv7XFYudBpfGmRXrcYD",
  "key10": "3ccWCtJFo3iCBUArJ4TPLCtvRgmJJ9xSk1EfbR4amDM1fKnbDMY6fxfpFt2RZz5icJCAstm74yv9e8LC465c5Ag3",
  "key11": "vEFcrx3eF5wt2UuHDUiCAN1vxzdTpzAskRPYFR627bzubX5df3utqfFwEmCSZgrSZmBk3S6LrD82uEBDXLto95Z",
  "key12": "1xtWCq8CwdFfYjhCu2Rv1DwqWKt7RncNSbwUhUMuvowMhc6DhAxWoJ56hvWfvTLxQi6s5w949sm8ZReMUjwKHzk",
  "key13": "2bPJkM6edLpGnxVBRon7WjNs8Uk5rPzemCNAHBmCejCE9K6i6Kmfm8LXw6myevfXEJNFMmoZz43yKdHGUhMzXGz3",
  "key14": "4juPm2nW7o8nvuECGv2d8QmmNMA6dE8h12DJJnCGeSk9651JcxCoBwq3SfvxkhVgSA3VqgLo3RadNhWjnDnKvzUr",
  "key15": "2jW4Mf18yyuCmZwvUZZoftgFDeJpGT2Rk5skacgiXzeZgLsJV8DYWwPv9XQTRyonPE3z2dtJXD4XouYkF6ypEmVm",
  "key16": "2937igqcNkKC3YSTiQp1YZ92odMU1w4EmTN3aK8jcVckaVDvFKXhwBRLTsevNgEp8P2HDqadCeVk9EFDFRicuKqh",
  "key17": "2mm7hmqyfXaE9GSGpz3VMRyweesCscw1eAtsa2mKPvSfoaeocvC8Wk3KiGGCsSmDcxeJ65eNRFmrJNGegZDAE3da",
  "key18": "PYUdaFakYFFQL18qBBGRLtnTEF2Gb3qYiGrYuqHiiQLygueqJ1Y3MPqJtL98G83UKLRGN4uRRU5ZyQqRrKe6hm8",
  "key19": "3PZzYpsoSQtW16SYAiCvJCtKQs7YgPXwuwEmQCTWVdkRa6HFZYLhkCWHhLqpfgv2Zn8VGkmwmxgQYQuKoZQa25Lp",
  "key20": "3xAdgPVNi5PezYWe9pz7zhEFR3n3FNjbAsnvrF9raoRy4QAqbmdprqisQ6esPmySsB863b7VXoFx33Xnci4Evvs3",
  "key21": "4MTmpbJqcP1G2sSXEpdzE89hzD8NBnKwX11iM5Stb2fbcPSbv3KvchDwhX6PC2gCwsPMFUJ9s6v1sbKj1znpxoZb",
  "key22": "3W56A4K3nJ14kBvMNSNf5ZkvtukqQszjTCuCCtpUBBomQ7LC27cqDEGRHFnL2U9np87vDZCuE2V7aosTkNormKZ2",
  "key23": "64yb6s9MxuHpDeoT4EewU2WVsdW71cj3qPeZfyaPP6zfGYug8WCxGv5BJMkKFpwDYe93D4Tvi6ek2A9Bh4gvJ8Yt",
  "key24": "5quQcz3GVC9AHWcQFydomeDcddxfR5nT9dbvxjdyeoT7jTsJQRnicEeNUurZvDzNqtgGHaNfSyaDpqRS5TzVgNAA",
  "key25": "3uBSNX7gtBNxFcHH6oWAxGnGkeELopqrUBuQZ3TXEfcbMD4xzXhdG8FJk75PuwepmA5LCcSgVPAPB5RWq3Vsc2cY",
  "key26": "bdLJKdyANz5i4sCJeU5M6HgTxecrdLkEzVtobxyje2euQDBdcui9bAgMDwLVJocwLBNDjsTeecdhbBrs6sbJ9uY",
  "key27": "39hqPMWNWLJWCcDjRVSEgHw4UQmZa7obtrsTvL4PtqnJY2hyLVB8YgSHQnDhNJrARKoAnX9swwh5hxMGqWz8jidF",
  "key28": "34nMwqtfD2QX1xEMbWqyDcKz2UbfTaJvr3dnRMuW9kAUU2YhWCsrLGpSWpJLmf6dgSTrZ7FGggE1xsfzRJD13Ssy",
  "key29": "2BWPh75ePUBKCABcWk9rkCk7SFmT37f8EQLc3BCpGG1aGhVsUxCbY3suq9A2mRWpp8FL272CbV8czf6ueyTfdAZN",
  "key30": "5iFYVry5gGmFvWJMk8E7hvxBdczhi5V9eWh6MQcFXtMnfRNPnQReWB6qCFSh2NH1fbnEb4gEqPUsUZRQe27t9Gsq",
  "key31": "2xvmHh3C9viftSHXmnynquEizgnLKt54PiH2YrhkHSh17zTydmAwSh85x4t5CcpnH9iXju4uXR4FPi4DJZ64ZBAo",
  "key32": "2xWZwZRCkM5SaG44gLkSX5svW3QCZBtprt542vVCe4SRMkbb5WK2FJm3vPYABWFNwNYieerBKV9GxEtBrsAUUwAx",
  "key33": "2ehHKV5dF6p3cW5EDRnVHQ4GorZKuWYotiveBWmLDew8cKEpTYMYb2THSzkr5FMFTCCkWG5vrdJQzCy6iNY9bJyi",
  "key34": "2ax6zhMMfMYResxyo7HjPvnsCYBdZaJv1592zQoNJZHLKc4v6SC5bRQwS7VJd9oMtjw2aM524ww6MVzMXChhKA63"
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
