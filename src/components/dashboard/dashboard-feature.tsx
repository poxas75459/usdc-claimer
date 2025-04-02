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
    "6tTctKH6CZpGSUqXvJjSuKcZXFSk9imrz1Y4t5crSre3mvD58jRthdc7Wo9CCdraerTrZt22NHekNTPrn1WMG9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G2XA3jM8jKoX8KexYDx4jwoAeBwQtNrvydoRGDvRJaakaWQg6eoy2z4SmEzraknDbxLEGXs2AWsUMEGgjG4h6DG",
  "key1": "66hovS1geCa2buLrYqESvT73c67ii9c3aq3Dazr5KCKcuYqcMGCXds6w5aipJ835w7BSKwX3Vo9ByrfomGDVySUt",
  "key2": "4F3nYgDii38FxrybWYPf7RyrsobpVhWaZpqBHZEDwyuyvfuB9UgcbmTd6R6iqR1R7mL1S3m8Byn9E9QiNzFaucyH",
  "key3": "4sUSHeEj24cHkVrWdGNZmP5Z4kwYiQLxqfWEXYX6C3Ua3w2LftputgmWDBZCUJqjZ5bFTtTEHpmg38MVQZ32JsvQ",
  "key4": "DG6ewbG2DcNTfKBfuzcd9LS12oG9CJLJHapw5CWLSkbLQ5JM4QpEtQB7u84jXkAr8nfu1spWrjfX1gGziGqmPT1",
  "key5": "31ryk593zQPF2hSxiDdJnst47YmWVxrPu7cnTXRjWmXjV62bi8csUzhBuFiYFvayHR3MTN7tzigB7FcZ4GpjqGge",
  "key6": "4Gy8nTvimv9Cd3HHf46xsaChmvnQwf9A3j13DbZ6oYNZwyKnvdaqRfJqogtntaohHGwYnzgTmGfVowcGKfVSvo1b",
  "key7": "UCm5KsppuF7cCff5PECzawfecsnJCGsuShVhaCWjMU1cWS7gxpLJFGKkhzLpxYzPMJi9rjdsTkpTTAec8pYjti1",
  "key8": "3hoqBEpex6rXuLxP5z3C2yX6DN2VM1CncLshkmbCVLcYsvsdUvT9vecXwQuaa3NebgTDF6meckDeMYUxEA9WX6aT",
  "key9": "4arV6n6qRnPwWZ6wsX3moqgyxEHPNwiEGuX8XKBvH5GA66LJuphJconjzUFyBwMZWAwHhimkvzTYFAy9MwZxQGUs",
  "key10": "52ttf5byspm76Nj2qY23dDroZQ8G6aw4RZ4zM3yqucQn7XGUjWC6H4EqVJ5LoekTfFBtF4wE7B9mF3qRYErfX29q",
  "key11": "62zJyfKfBnSgMPvR6JCbQ1rrpyfeQJW2T3JcPuxsBvJ9JkJrBdVqDKtgZMKikXwHrVFTHA4Pip1aMoCCHorbYitK",
  "key12": "2XSRxGGnCJudPdeLTnnSUMEiWAzgbdxH2EzkCB1baxLvshy9onkcPaqPe8xb71rQ6xoJpAMVF1ovkyFEj7KgQXRF",
  "key13": "4xxFvi9irNmeqHageoHYXHPNd7THbg6hPUm1tCFGjPwkbAGELFdbDBp13koP6XFj5qF7wFtFtHFxqq8JKBYK9DQN",
  "key14": "fGMzrTC3aDoD1QJC3dxVNYpnHSQuvLqvKwXTeXExfHSjnkT5Tr526c23J5fqW6RmnhyqzXze6VhPdFqFpdg1v8C",
  "key15": "2zYGAEYQkGswcPz1PoDU4Ho7PqxjKijChWcidk1CjqnRZYNvUWsXmuWycdWV7R6KHuizFYZ35hWEu4CYAjfmZCND",
  "key16": "3USZUhTXW8qswXDq6ad7VeBJYidGBCZahBfidkpobiDvZsmPo1tT5CihtX6aa61nbnSjenvDmwAvVCrbKEL5fvWR",
  "key17": "37PowKJJzJa1jTgaunwijjca3ZrD4AvsBzaq72GBhtZ4AgKnjrY4fEvCPmsUD9aroG98sevAvVUmAscPk22uqe6A",
  "key18": "Kqa8tBBgCYcLWb9x4Y6vV5wcA19Sh26AJ7pP9HSAfur7PeHpEgXhVStApBkafuC3MKSJkvNCnDBzD35VcmWZgka",
  "key19": "3hVV9m8UotBw2r5r3zNuqqHEzrmtMxWj5m9RRaNwzRYd72ipJU61JVQJeSt9QDXNzUbYu1GWykSzMUJLeXUHCJyJ",
  "key20": "4zRCn8hQFv3TM2ikEX4Zd961mLpjRjFGQ6uJZbHjoMgUUQJP3DDRJ2CNczYD5bCopjhzFbDQ7jVzLeBtgdKRZh2F",
  "key21": "4AQkXMLNHEm2FPgn63QyGTk68RnuJy1sZCh334ZQ77JH8FZZaLJBVGLXHRiEYCRj2D87w8hFWRRFqX9VzqYMKKBr",
  "key22": "3ic5GLJ4BS473uoaDhV8LF2Rh33A442hykscPcN1RSqoYZMMPFuFFQWkLR8Le9x1FrDCCf4gi18dP5GLgvkacVtH",
  "key23": "48FNE4BZxB1wY3j7Zy75PxFBM7DSnsvjyApLd9JVr949vEN92g5v8HP3r6D34LdaAMRckjaSmhjA31tzZoScCxaP",
  "key24": "56En61dnNeBifZxDDLgGnqbWoAAhhh3KUiu8ESoKMcvSBy4eYsfDwr5AMC769c5KvAYTF6s3ecqnP3qvakkyrVdw",
  "key25": "tAXkGTWRDJe2VP27nH2ttpMpXRptC41YdSoQ6sZ31m1RidQkA3ps9VQvNVuwTptcDVXGiB78dkn4jBFKn66A84y",
  "key26": "5hKYpQ2hhKxhCaCEBh3bTmMzrNWTQg1uoGejKAPmCc3ausrzHv7cEb16zvx9oHbTb5a2obyuHBxETQFhHGDkaKqD",
  "key27": "DGTvcfUo8muP4jKrwbgNuL2ZM7b6eobWmx4nrQotAURnjrMLL69eq3YTqQdhf8vVaCFPjAirs42EsMTjvPMLsUD",
  "key28": "37gawqi56SZcj6iTDJeRaP4weCzd66vKWx1nHMHQ84LcDCKYkNFRLVBeTZ6FpJxFfcQVFDxEJcWB6r5SPMPBEgUh",
  "key29": "3egz6iTpmqee2ELucegYWPxzqvGjZrxHQKMnpFY3YjQD1w9soUek4PKurrTBK3h2r2h6hjoqiLD3v7BcNWh7m2wU"
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
