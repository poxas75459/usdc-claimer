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
    "5Q3BkJtA1uL2e2JUqxdSUHNNTAEUayNYW5gobNJsKdvqLx7JDY3boUm7B3ZomE9cJkLUoqAyaQMJBFaGtQK8LqAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JWXu8SqSjUGasu4WPHTtiaCv4M3Jh4jnDeb3hMjZRhVvzKs2nwkRDAbz5xhqtZdYqKDqhPbPrVPFJaED7VHTLtq",
  "key1": "2GTVDLXB1eD2zKLgsx6dpUQ3rymDpA8rxcB7EKS8hcmGqdS5sFsetEcRdpjnSrFCWLYBxDG6Uzbzj6DBkPEorY3m",
  "key2": "5aDNNJoJABp2cgV4ShGfjNTe3iYHyRRYFb7eM5gfdHdBGAjBaTqqxkZPAk5KCnDHFk3xjmYyHLaD1sYUiPHaLtCZ",
  "key3": "55NqwrxnRnr3UHD8PQDVypzA55U1LoCXE4wQopiaY9TeYqyGeeMGmnMCwgtGLQcPtZ8NXBVBmQuYFv52gcwHHFP4",
  "key4": "QoMHpQ31oZktrunKMmUciet7xtPmeDS7qy4JzD1tid9LivH3jpwt3GpxHUSsAqXYXfaMcxhCvAPz3LL2WLGENHW",
  "key5": "5PjBYTEw5EDzSYgBrGBN9KzYwwUnykuQupnjFQk7cpWWp5p6oUFaxrrTp8UFZo93KkdYqe17GJcQGyBkeuzEKmBG",
  "key6": "31YsVhzaBnmvt73puTsEKvKKZBgjduvU8Vvi7VP3kMFbDZEBzFjsdkJN1CQFfv556iFcmfDNzSHBTkDtUdaKZJqb",
  "key7": "2bZJeyNHLSHuMwj4PKmTbVh81oovJdskmVQVAoeqdXPCRo1GJtv9gkD8NF7GoVsTepAoaGWpbS89DqhHWJKtmfSv",
  "key8": "3PVhffmk1HrHkjoBM9ZHVXRF79LkZ68g1MGCkzpyTHc6HMMcVeGgS6DaQyiHFj4YMxVHL2cmcD1U7haADDivak8T",
  "key9": "GoCV6uPRWLENQwSUgDckNx9LEWkkpdrgWWeNU7sMNrfykBjLFe6N1DdtNuhc9ZjkZbEVEHyF1qmwGkEtw64Di3E",
  "key10": "2Lhd6GKhDURgQA46hM8TKWND8wAP2moeu9KEc3cUowxpxgXVcXk3nbUpKbRM8upXdd1R2aCNr44cPJDMgT5U8YvJ",
  "key11": "64eewHxqychVEUsGnqrxT1ci4h6Mi3duMNP6J16SKiS9xgQe7EcQHnAnzPK7Vg6Xr33DPShVysXmorRVZd6aQzdu",
  "key12": "3v3rAghvV5hHFtuTDq8qHw1NwdHFb7oBD9xBwdcnMX2Pi4VbHmrjb4mZi8FVKd6qVLgVEKjHSiKmCpPKf384PmVi",
  "key13": "4ALwR2jqUavrvt8RXDMJ5eS8n8i8BGoAvLAJtck2QvTdnSNF9jZmnmdz7Me84p9aR3498UFMJkQvwUo52FmbruYV",
  "key14": "39bGdCz6tzfGDmKcKNB5EH7AzdaWP8Zx8WpSMFqR7Xm5SgLARaEYGQ6xjzRx3CLP5C49edRDwjv2aQo21ySd6XsK",
  "key15": "2sBb5PhKkDNCstYCXq8xvesti5oxdjEAbm5A68uaniHnTBFJjTkEqQ2T7uaqn1EurG1ewjrsfni1mYFKm4fm1sjX",
  "key16": "3ra69LF4ebtcF3nGPGm4TauWeqNHy6Dmb9bx3g8dajfqf5RfjX2cKCi9a4ceqbao3wzTx9utAGQQhwpYCigLw29V",
  "key17": "63zySi1MC4kiZNzXr5ZRs2bPdJ7S919V1uEYEk6HvdTAYzzrvjM9CucotdUE5h6RrF6zFBYoxEGJrPd3wMBAs1wk",
  "key18": "wVJ8pgcStS1zRh3SXUc9HzRNgQ3EZotUt9oAQSjXGvLd9k5AtDk9aSX9FPbUXDkrsVJ76VeftQh8BygG39KekdP",
  "key19": "wtC66woT1dbXGrHKfnsiC3Zmtc5rWJyBiDFi74bRAAhAN5NwtyTp16oxZ34cRYAHrotTFTBEA2p4KrQVLJWCqqz",
  "key20": "5gtR3U3zZvx8FhWc89LokQovo8LQ1PVFNPFTzZy9beoak7EQ5155XYfvE71Ca4hs5DunSybMGF69bhJUgoSeKwZd",
  "key21": "MojUSKiFaphZ9VM7bVi4gcVAYYfWgSCBsw2ioY4BXbCYADKii6KcqUw8Wu72Cx1swYDVc85VdZ9Qsu1ZqJLiDKa",
  "key22": "2uywQYShUq9RfaCFuPkkKpKVGTUZZvdFWQZ31VH2ptLvbw1g7byqeAGwGTDJ87fjQw8qWYCnz7opXWddBhjk8k3i",
  "key23": "uWibW87H8GE2eTs43q6fihBpBkH5z2vZDAR1KHTQS34vvubQpiUKC5RhyamvGKMeYokUWoUCjfEDX75a3wa7Gwm",
  "key24": "5GCue4xapHC4Cx9MpDZ3BPaTiQdEqWJfA3HcUqpEmDMGLrJt7QiKxWnKmkevUoajk6Np75hiTKURPFLpKB14kJqk",
  "key25": "6FEHnj9EB7DM5BpfN9augiQ6D1g8gvGK5eDtoPtPF5AfJEM4VzSUuQtUdYF9QaAHQsqU2TUbq7pA1BmbBNs7nDX",
  "key26": "5ue6TmEmXJV7wL3XqbRGj9yL1s9SiuR1qFMs99Gy5QKDcwU9u6vXiLMhuxn4giEtZDCMvkM5eKn26Bkhhpy8VLhr",
  "key27": "tyBoGGitQnnzwpyaMKidyaLD9penwcM1nmtSFDdumtumMroJhvbmGbdxQQ53Seb6pY9rftRK5VtH95Wykv1dHgL",
  "key28": "2GBeTJFDzR1MTjtFDfPBKFQT5x9W1zmpGyXKmbNfkZYd77Kwgi6SzaPPt7FCbqYJDMkLB9WpXgjeKpEsHybu9TxS",
  "key29": "DSfmXtLL6riScBSz8Ud2c5KJ8hzuf5A9Y5DHhZqnW5h7VaZ7JLfEEn4nckBMjKc4hb17auCBcK5ef9JA4igTbHh",
  "key30": "2ksQu6gmm9fdGt7Xuo682K4vAZXbpcR4Xebn4xNKvektk5BZx26Wv5mGF5mNtVYZfvzL5NSHKnXmoETyiAZbR8MX",
  "key31": "3cA34qk9nRjc6R1A3jxvfEyLE3TqYCQFy6aFASyP4R9yX396zxSsHzkR2Msgm7Tx27PEXMgnS66AXRT2ygr4GfXx",
  "key32": "2Kokq1FzhvGaXMFXDN2R1oLN2FzZbAeZ9QgNdELLpcHJ55DQzi2qvBi241ou3DkNtgTzudaTj1tGFtDS73xPmuw9",
  "key33": "XUfMdpicxSPujBGkDi1aPkP8LYJzz9GDzSQBTDdgUj39F5hGJwcS53w4TPQc7h4aiAiibxAVvNxGC3GiVVz5yaT",
  "key34": "4T1vYffdEVngG6P3NjrVvfyDQwiN9hBtTWT8nTptdnLMtXKubcN2J9zme11CBiCkovrd8uPgrWzWxiHSN29jJw3v",
  "key35": "5T4jyzEJpfHVPYPXHm2nZzDnnPdojCFkyWyUtivXaqj5m3owGcuQeh7TPcChGKT1HNmtDgnvLnXusjfkh1xTZCfu",
  "key36": "67Ui7CaUE8JRAsqvZUy6VyhRcqvLMvLU6ip9Aj7fXic8TrVWCye5QgqTc4HrRgyCziKipauCe8P2Riv6xnxCa3cy",
  "key37": "16hkcqu2uptxFGLAhRDhraiM9QZZcansG5iK1LdiY9wcFu4pAJcNgQUeRwfFgG5udvYLcxbMMUaKrfBYPEaSHp9",
  "key38": "58nVJwSQFE3Rxu12qp7KwkASRTPh5x9MQF2T7Kdu9ZjvKDS4wPdY1Nb66yshMhNwhs3DYR4HYXVKpU9FshaG6JzY",
  "key39": "4SAayrY2vspPrv2Yu8u1xj7WMfYvQGC6AJSSBkH4xeWJPUoYecJ3VLr6SLEcrmghou19rYGFqSFdWVxZ35DNmZ1i",
  "key40": "48DFAwax8sE7bT1WHTn9PgiDdUxN91osC3mMT72MUrS7P1vZY8vRBruKga8GFSzUvEYiNW7XuPDKU9CvaYoi3aE7",
  "key41": "4eM4bK4HhX4XWk8cjRsb7Aw9UJFd12rHxkHYGmM669XsniUt3De3neiEPVbCjTB7XsR1q6zJC3KfH8oBzEaHtFj2",
  "key42": "2uMbcy88hWULMXye5Hf4KCnrq974HfA3RoBrJDhECH9C3WqxWPt39HdbFJgwFTJ6oazUkdUBsUbLtPoW1TWy5e47",
  "key43": "5FZsZQUhjED9eHrBcd1yBMwJYgnryMLn4bgYMTAMiVkWyTWjC9w5FSUiDBkMDpiQh8mqabPeLCxkKa2aMSN8WrDh"
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
