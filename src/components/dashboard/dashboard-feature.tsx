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
    "bAdKos9rprqiwLgx6kg1r6cuTgE5JmWXizTByKyX4j8FxDXnpvPbyRyBiPvSqbJm7p92XYJGaEcK8LRre53PErj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AW4phAPE23NSy1HcbUkCc1Fut7bxSCZYsw4492e4WahE1CJWPXUAq4zogYFRepEBsmRYY12u3Lc6urNQzYvPRLy",
  "key1": "LSG6bpBt3Ja3htiY6vkCkBCfTaXNDeBuTgqSUAzxL4oZRWL2fVMXdMskK9FkiszMJtiNrZKviZ6vuhaMs3gxyZB",
  "key2": "4gAsYc1Q1GfbBM3x7AmSq5hQTPcLKexntoVXvVURdX6v3fvhzxVoM3GD4gsjgVqPpXq69DLNhLTMBRBtBTB4PfnN",
  "key3": "2yBfmDGE7RYXzuuonwHBLaQ6quoUsnx2zS7MWfKR9ZFukCKSHDssDKQw1o7Whe3W3f4E9GAFMs7ZMUaK9HaupFkd",
  "key4": "2knb4nvbnPVbajGKAAYR7SBnvRuoigLKAUsGCmgVFZaK4RedT8MUtvTRczHU9e9xuP4WBYCszFn3vPZri1uPS1NA",
  "key5": "36q7dfxuEpsmKqQYvq5uDc6hgGrio7utNB2bYBz3ziaiJqGRw9AAogSqikURTJq1hVahWQCsYJ1y4w1PySpK88bJ",
  "key6": "613et2oMk7N96ZDovf5PGB4aEFPytFZLivcGd2EzBM4THqxdg4eRuFCMhd1RJumHV8vJizkQz2KpvpQ4HvUqZWwN",
  "key7": "2AqnLcC84JyQMnPhDmH6pp5JEdrwmWnTkLouB9TWrai1DGNdd5skSSd6tJJoVnFwdiNxBVMEGCQxm3ZmBSproEPU",
  "key8": "3TwGHMR55FdX497aFKzTerNwJNeCQirp5unkTExBWqLYttkqi3qfKN7DHnJ9R8z4sE6xuk3gTWURyPpGLv7YP73H",
  "key9": "S3LG4s1mML3jSHQz2Q8BoDUMs42Zg71oVXqHHYG7oAZDx9VMoHzLPm4D3XVvoPNw2cAgybnJAKX1Ndc7GiuCbqs",
  "key10": "2Ct9pReJKgVHL5WtfSEyRcBA7VttFYkWKXwh537nNB2CY3pM4JBkzxgf8azCSkLs6Yz5kArGWbm28wmnNeNco3nZ",
  "key11": "3KcV7vckPqvMoB9YvDxzuHgCjAg3LFF8YZBynccDnH2k4dgXsvuBDNwe8m43u1VuicGQ6PQektHvXtEoQ5Y9agBV",
  "key12": "2fFtPC3NAZ6rSb7cgbcEJqiinmW5Z1pufKgqDsbitfffb24GCmAHscTJpFiyGTTbZWGqp6cVYMFaFFodBBhUwWAk",
  "key13": "41CtW6bxG1XBzX91wEG8ofDYhA9MbDabn92h1JK9GxuaasCM4pdV4DiWrjU3XH3HdJnuWt7YUiv3KA26yqTr5fi8",
  "key14": "3ivkakrbMYVyHXYp2pbNjZsZaiuTV1txbcuipmEKTRmLMkQJFNadLts3MtAsdAbyXruSfmRcipFrd3hrEY9AmfCF",
  "key15": "42eHhnCsop4oBgAyjKttJEXTE4f7jbszKkBMFp6V4p9wrDP18cBQ3QLHffo8A5ocXgK3bgAFUFVDBWND2NYzi4co",
  "key16": "4qUUBbfP1A5c1VjvB44czXDUPjEBccw3vX8Fh6HppBPmNUDm9GZBf1t58xcAzAX2sT4t8co8pp9VuwdQTNhM96St",
  "key17": "4xWEkx55NEoM65qAux6PTi7ZkUEKv3tt2ewYEmgJunjWx3J356S66ziSaAxMw1iiWGz9xi9oFbwVwh1nGeEQgeD4",
  "key18": "589RMUeTpC9isTzK6gYsTHBHf9BNqqpNJRpZucqU1q34Q4aAX2V6bDqVWLNNfL4ixhMKaPMyGjtpGdoMjb3MSi4k",
  "key19": "4XgrphgtudqWjMPuihsocTPJCXbXtdcz4AEeqfVZzgPsXCWJETWDBVCD8hWiz7KwijXrjPfVdpSBDDdp7brhAuHk",
  "key20": "2y8UMSMta6RzQF7ipKBK6PDZoT9KWT32h7AeR14UvvJLkLMF6TY8KiPeHbCTMPDSuyxawtXmzpxoz5fK1D1SP7hv",
  "key21": "2EZ43jz3p8HK4CSaiDzxyRCoJbyWdwhC3sgGuz5HHW3Y7wNj7jhJZ95iP6pqTyf2DyoXTxiJRqHvrdA1oH8cKsLX",
  "key22": "27QqQfQ6WahDt4WJfb2LpXYqHCLjZyDbzBa1FWeJvQMHdziiaGwaRVWskQATUmQbjJLXxDAyCkaqbj3fkuijhfzS",
  "key23": "2mhA7eCVFxkHQBdBU8KX3aoqQcqJVSDoseZLwnpovCjWSdxarNCjUnS8GBptrSvPxGKphG8b6vtZ3UnvhorgA8NB",
  "key24": "2y3Us3KiNXCR3nTKvcvJX2mBRE3WcmNFRaNCe5SwfVFyFAcMY685rR2M1bhH7H6ndsfUWbBFq84FgLGzNFqntwPW",
  "key25": "u7tPPdU2FtxmRGwwnNNXt1pYSWD21HaKwt7Ae5fPaUamCq8worsvrhUaFi5vfVNMtFbWw2AvVqpWfD7hPxEcoqM",
  "key26": "5kM9AmmAfGaZZEFZa2tJ4J7hjFGNVjSovUe72da9gH97xib9wY2NrApAhjhUeTxH6iTP4DCD8GTVgdvU4w9ggDtd",
  "key27": "3puW8FHj2jnW1YDZ964rmbef6KGDuCKhrxqmkGmMxUJwoeZFYcpsB6gWt3nFoSY1Sgr2er9YC1fuLJxQ15qraCKr",
  "key28": "3Chxcy2Zk3ZTKERsuEYb97D25tdLaFRv6UQzSZqkCLmQiiBGLmqdgETXNqagjkrwuBqgnpKBrennFBLaC8WTnJP2",
  "key29": "3zBT4Xzgo6LizG5mcQ2sdNTeCSLQhV8LnGjusBoCUm6xs2zxfJaCNohDjEYbTzqzmkqdGwjNd3uMTx4Q56dDydCv",
  "key30": "2XvAD8U8SZLNZs2jhveCvgyQBSMMnHLzGhdwWHYp2UCyL11Q5TFwj1bNdDzpL8ZBQW7PjLLoWQciAhRoV35ocuUG",
  "key31": "2j9L3eMMUwYvVCpSirEZ6sNtBa7f85Y8DPKsR2yHNCcorXSNEnuCFtMTdZgyWTGdEtuiYnwwcDNfNRLSXazDZmQm",
  "key32": "2feyZzhF6g3P87DrA4LHGJi1DNhrE4U1NNA5uL7Kid4VPCTdNXrmqXih3bWgUQ7z1ZebjFL5arBhjmveMcVtJve",
  "key33": "3xjjn11BRXLHRn5UkjNpKDJv2eiktdcGfDTEWL6pzG1cozcTauoRMzxpjD6msn8pMDgeLDUY2vtqNnEHJnyxTp5o"
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
