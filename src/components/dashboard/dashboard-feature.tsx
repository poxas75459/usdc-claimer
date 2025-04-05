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
    "4qXHAEvkkYPGMKd7mjXQGk3bsis5uWtK5R34o3GxquZ9hKkW7q8s1GQBkgFMhV82VaqTcNNyKurthkHJmReut8eG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nTKdRnDfWqGBFgE8mAcYM3QVcRdXaZV9NRiBjRCgAUWvhkFQf6Jkf9NapJ6i4jTLyMwSxwyVyfzSK3qn3msMt4Z",
  "key1": "wL91bMDMzQ5TTZcPrjnriUjLhWT1F4M6icUV4v5HKbCDs2cf7wTw5672ok9kjC8mQ3bvB4Axx5V86xzJGM3cPWE",
  "key2": "4q4ziX4bechSqhGQYExd6DfG5ZQDX4wRYCYcPQVwirtjrsUJ9LJ42Lz9Nzn72PB2pE9GY4DXobiCGBNBHuNj7m7F",
  "key3": "mUjyU6DDQSmv2CyDEzro17Y9XNavz3Zc5qW1Lpa4wfjXjH1QWsQ3GBmst49z2Jbksx8qxLvscUyrF4KygzLPCGL",
  "key4": "8JkLoEnwFqe2sGD1C3scsPoNeywA9pQkYjhkGkhZrazj5eePntjuQgcGgM6CDK2b2UksMvP1dEZZBgZzjfGzetw",
  "key5": "3JEfmTSs1BFysvHVgocFiarxWkuKVEFsiPKEKVWsUajKNzPgQwq9uD2h7AHLFHohxdTZBhxcweex8LJKadTmFqgy",
  "key6": "3XxC7FvhYV61EaTDRwvYF5B42dtgWZEAizHaY7dARU8jzGzg8F5Y9SmwySJ39Ri68WtpvLXUVznCW91AfAnL4USF",
  "key7": "5HFavsQavvNtGsRtFZQxJz3xeutTMvjKfsbh2Tv8CNxVY2Va7nnxLU8bhwHZsDPNb7xKXZRbR4jLFeWo2uX7jo9W",
  "key8": "h3uohzR3zLpHMq6BUNDbqVcdKYx2gEXPFEG25uVQbe8aTDSHRM4WJ7XjEmCpURLo55r118mf8GQgZ4Q5LvSZRaP",
  "key9": "2aQDP6SyBVWd7aPivGVb5TmcVACdwMYr7rcGGmUzbx2PuXPxd1XTJf11RQAUamN3aBSx4Z5ijCyeC2PHSRhzUZpB",
  "key10": "BQTtX8xUPeiy2p1dc9XfYpt654ULvMqxzorNVpC8K4Yepgo9Xt9DDsnLUBVZFXo4YHqXqxekKKDqLgZjbyfJuWW",
  "key11": "4uwQYoEpNPiVbdAcJPmH6jpQGnZA5vCK4ZYauQ6rNEiHivZrys4hLMcyBNeVQxyGuDWAahDLj69vG7EcBkgqVp5B",
  "key12": "2ShdUtQFoMVPAsS7xqRygzEQxL6qE2bcdkcSz2MSxmnnfcwXmryfSXxSYxcL3MnMgFFPW2mFPGUy7cqE9XbYbQ4T",
  "key13": "31eYCNJWYJw1aj5Et8ctDLmPEhiVKDfEPREeLExgoQ4NuH7Yb5U72oVVrCLUPwiJj5Lo7WHFoMm9tVHXsnUrRLFm",
  "key14": "66wi51heKWiGzgnn2FCC4F1PACFwSkDrxhFft6nbhE9ayrppWQZRevGNk2uRCMKZHgZaZvMt5GmieMfEgGuRwiBN",
  "key15": "sMZD4psHbspPFXaWKwaniKZGjmb8RgAr54KnuZxMJ51n45fhHe26TxZXp1t1dVktUa6w24MDfC6Vz4xh4Fk26Rw",
  "key16": "4D24XQiH9y8w4UYxsJhhMJrJ8fjvVusZ5QgW6FuT9fWSGBKrDZXiYuh2amomSDwXVZAEjo2hUCxtzhuc29dvr5q9",
  "key17": "4ewZLFwBA8NJhUEpunrQJiCsPUhfTkD94NfeaonbkdbRLzitTecQ7T26oJJdqVJa8GFW9F6CfDCLefJF1qGAyAg4",
  "key18": "4dhMmnQSKsM7ouKnPz4wKsYzYyjhwJkoh45FLjBKwPYyBaDepUhNJuKAXFY7iEzvnD8E5gkQvriT24HGnjLvAoFY",
  "key19": "49Y1rWa1zaY1kppDEVi1Sq1584aGJAf9yvTwVt5Jqf9coA7EbYNQSaDbM7gDH8Ds8GuULhsYvGZWTumY5PZmP2kV",
  "key20": "4cvuRYkj5JnSfaoMekoc69fX8LAAtKWQ6EM5Vu3n89STPnTqbzPFyLtpyGr3hjC3pjdCVS4Tygc7GJ165WoueamP",
  "key21": "3dzdWcBMWKxNEjrBLP7SXuden38Weit5fhDhLm6b4eWg8YWbShykXKNaResurRHSbsR1BMUxyAYvEuMkrUafBKme",
  "key22": "5hPoRSedVgKYENq2vSEnhDuGSsjAwkt5P5DFctxPKV9roVTwDcAPdQDyWxtk2jgL28j1bYFqDPXKCPUumTX3xtAp",
  "key23": "4iuHPngyVPoH8j5f4n3L5U3KBjMNutaei97krjJiMs16sURba4uWMTv6Y9tUaZLuFnFTVGqgbY9RkXFUm3Cp4jeK",
  "key24": "JcChwFragKqV2gvmgW2tASCkrFSDNs28a5wRpXAQMsQ6LBxYRNwZJ6AbkdYaRDJetSbuPrc9grPgxqhPbWH9Dix",
  "key25": "5zqrxmHvTVAAWuQ6Pgkn9BxQjxGA4AcrEMrSPQWwjeJJdvPZfzQTQvc5iMYvcC6WtvwB4zbjnZdvHe6Cdeukequq",
  "key26": "tPGDqBu8mmShKNWAh1b1bHEhsprjNwynoaugWEneEMZ6LqgRSikY3gNmfy3qAZ2uxAJhBAEc2Gj8dw5vrCcJCZR",
  "key27": "3qcFaJZWbe4E8K8JiUcJb6HEdfu6iFdq5t3P1fLQxhrMkorNFthPn3WvreVcuhTKZDgrVefuzHhC4vzSQJ7zCkf",
  "key28": "51eKXGKUGnKwmzxy6K8pvUdSK8R6UgvVHZArFvnzGMuW5CcoAaxg6MyrX7Lfvg2BozkdsFSyQGoDRwPZDPDZULqB",
  "key29": "62KTyY1Kr92ZvtBvoDGyN7XWeRdycF3BfAhcE9pEJGPRFGv4VKnsJHpsT6BFgqUJhCvR6nW4wbfTTJ1BCfk9MSB9",
  "key30": "4bZVSyfHZvNy4cot9w9CdmVNGmL26oZDcy9ZyZpeYW2fqreMKyuc6s4KiaXc3x8y5xj4y7xcJaGgC4SmXPuCi6Gb"
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
