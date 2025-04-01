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
    "3pfzFZN3rTMWkh4f6kMj3ajFyqGq3BNtnGnKazMAyPdKFGyk4EAJmfcvnGbTFdSww1GxMVjhvtdELkN8XzyToTgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EsXoa5z5i7gzWksbHvYfoVbAgSG5a6vLMyEAeajnkQnxoSNiNPdUcTJ7YeFvAtf6yFX8Ghn1nXoHeUVrwzLJVds",
  "key1": "gvEomFTVvgbnzt9uZUbv7JtZ7sboNWsUTReQzfrkCRms8jf115XQGcNGr6BRmFXDy2x86HZ3QxqEsJ6Ccffqd7J",
  "key2": "aEKG67uvrCE5VKGgHHSdxHoZ2u99kAnMwZ7GQGFb6yRXCzpHEj3PpUeCP9crGWNkB6ej37SiGcTZxMcwTd5KJc9",
  "key3": "2tuVjQMhZgcTJWM7fEqD2bdMAD65rkvpgY6pPbB4NxkGmnGHtej5hjp11tvyCy3Y16J1KYJtCR98EBt75Br7vaCb",
  "key4": "3VSuXVTdKC7GojsUHJRQwtTEPLg2awJdqWiKq6EWk3E1PNSZojsfBYpjBWLHWUq7kfWkEdgxv8npC85iiqEHKL1F",
  "key5": "R9qdQAFYKXuEukAhVmHHbvPycAKYBBii8fAZSXXhvMuRc1okstPwt6nVhGiQbSJgXxqeZQiEUCKwpUhha3cKyjk",
  "key6": "5EwBehz93F7ruRjhjstHZFzrHad7rs1Jgp1Asy8jYCZHSH6ep3ARFKrJj3Uyt4h7oPCmmBP7zouWtLBfD8wP2uA1",
  "key7": "4uefjxnE6yQQYw8Xbhev1BASK5MEdfd2TENmAKwJNbBGrc4t5EteL2Z2LGYTtRr9UUaEZHb5R3y6UiGeSxEr7qW2",
  "key8": "25FfcywL55XistE3zGZNaqRGinwK68DdTY48aKaTQ5wGLb8jHCtvtwPJ8mttFoUoNycZRd8Etkicaveb6ZUiK4mz",
  "key9": "5qVka9dG1qCA3dPx3D4BHzd5injQ9d7LDj9tiA1vmT8ZMp9PmvdBFBM9C34hop5cWsBDiaNdScS4NGZaN9x2dQ6i",
  "key10": "3C7wTUFXiTDR63VLsuCAmpXj3npm5y5ULZfbafUiFzCwiWSEAN8rFbxmaPyijb8hAyZuzXe1PpdjQrFiEZuitn9e",
  "key11": "HsKk3AEgmvDmrWhswk4PhvVbhAzQes9rMyGTwjE9ddE638Gv91Yj3RCZdhtNY3XPMamSHA1qBEFK5dTcpVf9zo8",
  "key12": "awvHXS6pZEZSzSpt91tbXq7Si1DTZkvg8CULm4wk1661h3rSDfcUoELDX7NhTkHV68htgKQTgvKYU5DgFykjbrb",
  "key13": "3GyGhAb8dULwUFHVj79XvcPT1oFjmyJUiyDYhJNhTwDZja1ajRiwktDUmcW2enkftyEMx579ZHKhRWUEVJcmZH3F",
  "key14": "66Qy7oshAmwMZDZDwnvVXGX13AZ4hU4uzRSsj35ZH9KFde43tt3St4BYBTr9hPEJF3KRHVRiRLkSsqX8VZ6WbHNF",
  "key15": "4iyMzVXUhbzaSaoiufgaZ6KoGtkTzYZRpWjt5uta9CTY14na4dHB79iQB5yUuABx51fsoNP4kVCNMWNvvcYAYXbE",
  "key16": "46K3GiFeEwny5KBrqQevRK5oeM1A7TNTidEvDpFpW1dRjxffKbfUyZgNbqTN3cxsncvxHA58vCLQ58hqhyJJpjwZ",
  "key17": "5otyTujzJ8TGHtAXTtbhW7tgdCTqRcEeDTKVL19GcbKA1ZUcNXHWCNKxZHER68UQNgxqDdf262ZP7ZLGzmqTafZu",
  "key18": "4U7Dm6ZyftAd6qMpjswzEV7wVyxB1rm1k9BrN7mXjBnHasCizsnxqU6TcqEBWXd7vg5gPobjxPiwPgW5LNPDBbtS",
  "key19": "4wcSV1D7QfszTcgStc13dhRKMuUuqsaQxrGQVPefgG54xYMZHJBPveezjGurbszRmhp2wKt16pctEZ2sX2Lr5e8Y",
  "key20": "2BcxrHW16Y2isw8GHeACDVmH1U1PjAFKDRJv2CvQcnnyrkYE27erViuxxiAuNXbEASaA6oyVqmUGtnipW9RBjUyj",
  "key21": "2peXp6mKrupGbyiSie4u4Ur7D19h6VmBdC98JKs2BuPPMjwx9CcvF8nVgGusHkQXQnZkbFmn4hKZBKRK9YvY43nk",
  "key22": "3GvEY2tYowB4tqPKQYs3UzZiH2Qaz3f64Ak9wnpEP86TPrykAXUoiZJaoeQCpfnNf5FogzyWZ3QfAVEK2utsr1JG",
  "key23": "4GtViCHAAGYNVyaPtuGwiYC2zvqnb8xTd9ynMjES2q7VmwYsBzJB9DmV56hgDr1Mwx4bCDL14vYK4L6kZx8gURiD",
  "key24": "2dkouHRZZQuvsCKa3VckqJQLVxySXQT3gXrot1M2YNMP6hW1n3R9WcqJRF5zt854DTBQrzYYBoBbsFJbdjcg2Vzd",
  "key25": "5QxMDrPzweTXuiFHqCT8uRY6MbXhyeG4HguXHgs6x9B6uz5MqcCfMQFrJXZ39wrY7YzmQbB87hE25rey1yFcYUWf",
  "key26": "3r9Nvex4fUYTV99VLEWXvhHevvT8Sa7C9RjzkssDBXVFfhkWoxt6sphHrHk5YHXmA6jp2Ft14qMzYw8YDoxEFsn8",
  "key27": "47B3y7k7voStrFft1NkFp6nTh1GRy9fF1Dq2bd5rnPY3MGMVhNGn71tq4TSmFpYsWYiVE2bumdHuyD1MQa1oxXxR",
  "key28": "EN1AdRCqGaaL79JHmi1A1NqhcmiuE8UhQLtXGe8cNSPERLMRF1whoy7THhTfEzzNvSS34A2cakAyCobzaarMiXa",
  "key29": "5PWJC9DmSxxxLtn9R32s1YTXhTSYyof5wiqRy1Lm9PvuC9GZPWSDHic2tQhDe7mc3s4vom9cGUtxAQchC862zcEX",
  "key30": "3drJJpXKLV2s4XPjTh78Fkn56greisNrty8t6SyhtGFyyanVDkwKFwA3oma29FRqxMpTNtBQoXwX1Zkv92GYMeue",
  "key31": "3jRMTZkbTNpcaeZRzZ6gtxpmArUigvRJUQjV15Vgd5vg5TKmnNAdE8U2gXzJPpYJa6XUck65ZFSAj5aZ2PV7F4bP",
  "key32": "E7T3z4Qa25eifTustdXKiSVQhCv9hkmtobqr55bQLPJCt6Wk6gS9CN8WzWiWaMLvQHNQMQouJFERXNP8kHUAkyi",
  "key33": "2vJ8WdMyQKR2yzR2QVpoFGic35UYjWZT49JGAD6ZufsWPETU5A4ob2UtQFXthpZJwGDGz6KJzZGwtYFeZ4TvTKiy",
  "key34": "4LCxdCKomXMKfAzYhUwMHXuVZsJoucTJzJDGbFTcyBcVt9AL8o1qRN3dbbtzUfBTkkHUkXVUrUoysvAzsXXam5uF",
  "key35": "53Bh56f94rwxyNaMMkHPsneUCo9cCXbLmqPi9TpLw8FvPueAwhmFv176HapSpYiDBcpSzHBWEMJNzjyWaHrjRRW6",
  "key36": "2MLoShbLDKYtBu7ykcqQoeojd44wpGowWT4jAPqZVoiE2r6urBPoL8mkh7wDAzi7KobtXA1U9WWJRPT9bVVuHcvf",
  "key37": "3JFW468XrWuDsP7Bgmc1y4oYiJ8JZ8V6bKnL275SNWpoz1WkkpTsdj9Lrc8WPCjDXZyg8Y5x9XCXwY2VCkZQPZc2",
  "key38": "56uBK3mT9sSbWKnddnVSHA59JhcTh12qCj9mUxvs2EHVE8ALc3cAZ4xwiH4EKot47yL2bzZizph1f2WGJWPPfaZ9",
  "key39": "5s6CveH6pnAgHXZgiZuZ9J9QJ8vtVmhzoUXzyd3muHbQd6VtuUHFNCWozumKbMeZNJMCRWvoXpTL7L4maaQSTj8",
  "key40": "4k3kxya83St1vj2FYR8GfYSfqbWkR7RLbqBedd1rUhEFRDYLitFMgLCADLBGkiyx8LR7i9L3uMRqy5t2sUP5DKQx",
  "key41": "4wpfyMaKVQeYTofUbnQ4MAAr7ZFNp4UhvKqaHf83AfAk1hLUg1YgR27m9fDuh2qSxNd6ujd7Z6xsgqUg6Gn49VM8"
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
