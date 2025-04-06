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
    "u3jncepoCxPpgaDqkNi3E7qZoAJuzF3583g3QQQHtbA3Ns72m2BG17cyjPXUL6M95RdWUfK3j4xpbqA99UqKiH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rXwrsCRbauBrJhqJ1YqV1KoW8YWmYRhVqxDAR824PwzoQFpD8UG5YgzokxY4BeQj3B3KPjx9GBj7ekGciF7V4pi",
  "key1": "4RXTa8rDre71jbnW61gLgzgLGg8dAptBQGZv67E1Gw8unYNe8SyGGeJyBv9tY2n6CyHznoDVsn72VpDJSTwhBi5p",
  "key2": "4uv8JLQYmsA1hKwXhM56mmtaq1guwhS3fLJdcwNGBBFZe7TrSdkp2SrRasL38QSyvBygZmLvweyGshm2nUJUiuoF",
  "key3": "Qw2DD2fhh7DZJi5DEp5Zc8CxEA3U99Eiq6ouC232C8JQidS2aMDrZZTdeipRA1hdXV1whb4KuzjNJPYeJ6SBStx",
  "key4": "31oCybjyRzz5MBi7dV2bpBjzMJo1TbXx1PYFcqcSg9ZzJgY2io9YShntAY9Q3rbezTg51Rr5L1omrM2xRv8okihB",
  "key5": "5K8dmXxp9cLdvNmewN9HN6VZSG5KixykY9WsVU9ZafWpZJM9jyPqT1Wrt5K4ac2pxKtc8jhmn7DfYJj618Yn16jX",
  "key6": "3aXFefCQsZRfs2UVqaMawfcxpxT4ec1M7jRRGY4ACvRgvq5z214PhAWHsP6XFe5pbgaAF69DTpeHvQGtBamVM3h1",
  "key7": "5WwiZDSXsb2txy4QmTZaDQUNG5rhVe1auR2RYJ1ApqTLsMXAKUVk72FrpNPaeyWpqTSBseQTyWu4tjBdkeLfrydm",
  "key8": "4swZaKjCmzmqxxEqjZAtdrRU6ReLrqS8HUnjRS5ihLar1QCoP3A6y8mVTCakBdrU6K4xzSAaoECSPB2sfENr7kv7",
  "key9": "iux7pHKrkb2CSP7N3mvSHJSwS7c65zF3So5XFjc8X6xrzeKNjpTHe4mwkuoUkmDZGS6KoLYT4LDNJLB9QYJoSWo",
  "key10": "Nd9kDgzLm27d9a85AKqjL2cLSAJxTfttBh9ka2a4XpekVAba9wEE3zEArbWp7MBytRUvqHxvtZuy6N7wCt6pjip",
  "key11": "2hWuPEPfsW4aUXXJNy7kKFPvdocD32x2et9cLoqbvV6KvYCqDgHyc9RmvJsMzSqsB2j4GeEr1RB4BKCycigJXuQg",
  "key12": "2CQaMJtDYeaWd2Kzc6Mdk5uC8vjsgdRc9yaG3ZZ1Dkf8FfmgFERV99S8tEuwW3fMEA7daSHM7GVYSVX1WNwUAEPP",
  "key13": "21Nx5P4fn5Q2hdVVjP9TPPhRLKw4cGPXqxjC32pxAPUWgks2Giv62TT4hLAEYCo4duJL31Pb33U3NJEntVUPUe3i",
  "key14": "3fRqiWVUFPxNasAkmRsJTsYz5MNF53JrdgodAUqsjipYDzsie1hCffLMAoq7BEgMtK5RWfWaKR4aEhvbsHu5M2cL",
  "key15": "5MHQ2jq2HefM6wMVTkf6eZ6uCcMXAVcEuW6usuAzKz8tw2jTkdQKrWfauASkymWrZZ3fx7coFfcDaKgkGBHj2HM",
  "key16": "2n3DM4QF5fsiYasav26wNBEubPtjeqcQWRPoLG7ybEQpVuExv4oawL6ew8H8MrZjWuCmHtLid3FYvRoPFq9DTix3",
  "key17": "3ZqSyRHGp1h17Ca24Fttv5QNnkpZPEV3Lyuw1Jkr2k1nzNTQExXJcU29S6tn4nLDwAq14QHUtvUJWg3mkoqWZwTH",
  "key18": "32gjHPRgH8MDex6ut3xUKBddtCTUNQy2Q7oaULSAzeBG2rHT9qJWRe8p7gSWZG8DZGdvuiUoXhP9J96UzqRPQ7Eu",
  "key19": "4yNnm8xbYNd31fjadropg5MDhbYJqLfDNanEjmUc8eKz3SHiduXNintyFU9DSDDX172LPFDDVdQ6HG4mo5u2hi5M",
  "key20": "5DMY7YMB7NwqNLgVxgVLFiwEP4sGDYPRuGmUKPwhqm67FABmzqn4gk3ktLzyDc6fEFThoCNYWbJAYFAmEZe6nr26",
  "key21": "4CevLEskHLmmNvUedvhiWQrT6TNC5FxYmdmHu5ssHNxjpzsJ4WoK3Aqk6jBh5QvHa6j6hCgoB7DeUWJ9k5jZw787",
  "key22": "5wjyGUDZzJMkwtqt5EFiQaCRXLcvXjUBgtnHCu2a2Y2JteNzp1v8FYqJMThgp2WtfcMQe3iGhDbV4tAWrGwCD28R",
  "key23": "2eX3pDcPhG1NaxReTEF1554i8r6r8vK1tJpFAuX3LdtoLWUFsU6UrBVgywcoUSktg9RT3DJ93a2mS2yXfXpBT86A",
  "key24": "2MwfHG8YDhGea1vVynRs14dGMZ64WLouV9DctUkxHP7j2P3NwDHFJREPeqPcugaeQyjj3hdGBN1nZAAsK7wqY3Sh",
  "key25": "smpb8NyG7Kj4LyPcLctKAGfoWpFL6uNurVpHQcSNAvRXwHh5eMn6u8LRoSWMf8gEno9DW25e2baqzrV7vNXyB8z",
  "key26": "4VaVdicn92J6FCEyWK9S4P5kWF4eh3Wf77hh26cTEvx74BCuizAgJph5xShruda6Tvd5V7W5mnGnVQLGtGVcjiZL",
  "key27": "GLSzAzsYm82NpKxpJqXQmNYgQeApgHNnb78sDd8YiThHzjyL12a9z3gKGRqDa85BWXP1YV8D4h3tMaPxYidvbvW",
  "key28": "3NTRDoSi9xy9yCPKdKxd1C6hdhKieSztagNGJTR816xRrFJyPf77su6CZnNcZrpMJMBH4CEkiVYAqZS2Jn6guLAk",
  "key29": "3jeRN2bjTvTe7GoQb8ghF3ZPKm59w2MJ94VbascV2cXJmjrV4QLyeuT8Ehh9aniHEHqELxLU1WYcsbBSX8vqXSXH",
  "key30": "gZysWJGmHkHoPzac5XiP32mwkPuvutUTRNQ2RWrtL7mV9vuH7ihY1bq4dZXS5HKq3aL6A367naWuweiDTj3ge5G",
  "key31": "5RrVPW5TzfnYGSgwA5ABXQ1DAhxKmy33vAYXtT1jKRadQnS86AWdP8xvWJqd9kuEhtTx8UgzUWDe2BfjWFoLkDAj",
  "key32": "yZMCCRQp2tKav2o4ShE9ZZXukyrMnga4F6js6faEkY3yosYSixzVBJ3HR8ppxiYGxWC3XJRZajZg1wgRD2AsBrj",
  "key33": "42qd2fzUrynY4KAsCEpekV6oiXVCooeSs5CAw6qzHqLD3Qz5ahWPMR8Csc97bzf9tLSbLDwNjQBNLjVb77W3N51n",
  "key34": "5QCJqB9LhiWknEbGLqr3kBD3uVbSkcLcQZMbFu9nmwvKd86SCEprnu3WJCYgygS2rx6RiZdMsLTJPSmYhNhRnA5R",
  "key35": "427XSmh8mcj5SQG5cfscgBjZaMfX7bnYJNYhWsQ31yfQj8uVfd4abWdTMwhi2rsGkXo5myU3RZqmT5sZhHwRSV2F",
  "key36": "3a6ymGxQtMceerHXNLT6kn6mS1spz9Ux4ir8q4Jbe6usKb9R2WSCZYsLGaY5odqLuffbZ3jfcXj93gUiGZkS4Z4u",
  "key37": "rLMqhkNLxLPuWe2a9KujzMpYTnQZz8x5nJ4F1eLJB4Cuc7PVcDH6xQ7huKo8CdK8bsE5HLz4ogdqGBqxL44AFAc",
  "key38": "3KwJhByj4Rdn1xLwneoxn2pL6hFEqQQvqe2BBRbMFKvTQBezny73Bftw5C8cJqzYkVK3FTy4adnTQf55eHAaxgZu"
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
