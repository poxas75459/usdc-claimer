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
    "ovYMQfrkkfgukYrqMFnPYQ81q4S2QsYT19imgpYQpWdkzsY2xokKkGM3CSTsV88SRzRaDXSGaA4vYLQDXajHJnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pqXF9HsAvak3rCPPgPSUKetuQ5XmZF3MNWGWaJogsCLcGP5wP8th7Fyfqprn4N7tsrbXJAZCK1ZVpD2u6Fdfvgn",
  "key1": "2UX1C31x46zuHZTgmnMGJsn9P4QfTprpsQYx2WFPa2Ekn6HHRWbNfr477ycT9au7SHstHQBvmtikhCaUsZ5GkKWk",
  "key2": "4njGi7Wy1r2kFnQPocTY5p4WKasRTRcwHsQMrQpDm7DT5hjALueVHv4gSWsQLdGkuC3rTdT7TFmGUoXDZKN6KD78",
  "key3": "2ukM8tm1sDc2jHXEmZK99oMh7QdHBb1VPkpQa5YUPui4TqbiVj4cDVfzVyRQCtwhDBwKrz7BXzsuwtYNjftPNae6",
  "key4": "4pa6RF6aLzXtsxBwWMWK6RMBC2eat97zbYPsdQ2PGmwNxE8t2pemgYu8RuoP2vQ6HGwZS7mKK85un1Wv899WQZ7f",
  "key5": "WXaNqBCEkd6kdzYBErVAL6WPmw8k4XxDAJa8VDwJ9SRtcuvbqfeTRSeVtZEzo5XimGBeS6YvZ7P6Vd6n3CkV8Li",
  "key6": "5U1pJf6uHxdMBnxmpvdo11czHRWycgqXCwwiy7YqbFUmuYj3mHJXehXvYyXFHytSi8xnWPNg8LK3spB7h12c6Fgq",
  "key7": "4eMNxETTAYdAjn1TEg341mzZKRc9F81n36JJuyqYhmkC6CRLs7xJBBYLPXuc59Cie8Y2K3fcquFxhqUFG6MG2hcZ",
  "key8": "28yc1E6aH5cgd8NdVuSXohA7TBtPsa1gWNXqUL1WjomMhBae5r6cTznjXD5CiwYL32FirdMVvN5eAUsgag4d3pDi",
  "key9": "zti6yKgYXFQ1hmp3AzNCftEMvrv2AvDtfxBQ41WdoPFR7PB2TREUmhTJpoyC2zW3DrM355tV8QmG3KryQARPccP",
  "key10": "bQwbFHUu2D1SnQEGtVTjCThjijg8sNJiN6c3miE3pD3T9WkSAbRhZwz5VF1vbgxDj81fbou6USUJQGZnGtWvTHG",
  "key11": "2GEYJ56yyyZLuxK6zUzpwxiXE4FudT55XxcG8MUzju3EzX5PBDv9mnPiMfq8pkJjSjeYfUfwc2tVFuRots5e6PU7",
  "key12": "3mJncAK3TrWQGJtYJpuiFG61gANkWHyffuwJngWDh39HS6NEHbtJfHNjKhKHyv18WYzYQc9bYjojyCMesJdgnXFr",
  "key13": "3omG5zz6duaxoSgrjWGSDz4X89i72599BKCXBAMKm34EG4e4xcZ6MHbNtY58S7GjfzBv6q2QTE4V2mawkhmGSrQm",
  "key14": "4JeYAdB4RSHDrYgFNP7EEFnH7YnLBydNgyztdJbJfecy7wKzemaVdrWnHJLrC5QDiuEXLzsj9PF16emyo3qNH5TR",
  "key15": "3gcUGJD1YzEjwipGsNrCHSP55e2eL6TLC7nwht2XkSyr4pN1tobbyoPsnyPLBjK6ieRqtP4pHtd4Bzicg1t1hAEX",
  "key16": "4fF9YAmTi5GTnxbiX8PB73uk63PD46ZhGZVxGwCuqHrgFEYxLFriVgWMVZ3gwNoezR2sQiR26VosznD6G33i9Hjb",
  "key17": "2rBS7xczuD6LP9LeDSJ29oo7wVinoPjnEn84micqc3VnxCxnYJMw3TyUJWNWCSYyWF8ezBsszAj7wQCNJhUP353N",
  "key18": "3h2xfV45VeWSq3TTv3iPXoekqfzxTeqqpkcNMVNo7sGacPYz4cbrGqWevJo3tk95UoZh1GfdsrbVk5VXiVrd9oEc",
  "key19": "3r8f6oAUWF4BbcXt6jdsK89gZZYxK8kDPp7Qq3fdt42wKspKGgDZv7bLrvcFtTGPAWVgM5kkpxwR3KBcJfqtdDF4",
  "key20": "2FT7mv7mtzQQEVZRZ3QDciPjHM2NzFqUN3b7944ZRozQ7TTTxJPTcYz17WdcVoY9d9buCSU2rzK93Y5C1kPi1KZH",
  "key21": "2okfevFoY5r9tRdSu4j8iX6eQQj4hdDdar8ogbWQ9PZhEF6fZWML7VfWJdg32QBcoyEcksd8Dp9rpXRshwxsFrCC",
  "key22": "ixvQS7W4g3fNi2HphLrnNR6UsqKLydxMSgPHjcWrCZm2D79U67i94eeBFAeX89yh4pkAdbtPBz1Q7Dz4bjwW8bZ",
  "key23": "2yusrnQH2vw6EMhzcuxDvcJ4LAjpkr5YwAqWqnomPHaPS5TKZoixpJiJZAXqEk3mQACWsBr8jJA2XVjkcqiVQnLc",
  "key24": "5zpdLnTWbb1eTyBtwNUr1P5CpTrHtcCwnRRjmxtjQ9mM4PuCsBMvoRR9ufh5qwrdPiuk9tqAusRvZ5jsDHvhUG4F",
  "key25": "3qPT4v4FFFpPZrF7pygNsQ16B6tnmcHVvVnC6urifW4dALZeCAhu7oHzp99eyE4NL9DR44s6DA9QqeCX63gJknjR",
  "key26": "2ge6LPrt4mabSoJwPme5kkb8GxkWiw3JyMR5srf6R4hc1on7J4RdTVFF3qZYuYkD89x9gSgKPi3m6iBigyt4G1gU",
  "key27": "vjKB4xSab2wBDtP37xbhWqYhKxMsL3UFRhyAsZwrBD7MXoxJ7tohfjZbRBhuSsJg7MR5cMkNSsK2ZJU6HNtnbrm",
  "key28": "5teL7PgnxzsRTdQeJWABYdEizVkPBmy3MPmTtDBWRwfdmdVLNoSdNn9MtMMiE4hP4hKspeWi188eL8QCiZomnSxE",
  "key29": "2GAQHY17AHvDoj5rNYyos4dARos8DfFeeFWUa9pNWKKxNid9MKndwSptyGiDu3svGcQN26wMH8vMxQNasb3AzoNx",
  "key30": "Fi5SLUhgtHscXgJSUrtkcmRyLs3H6rWgXao6subEQZqhvZNtXo8hqjept5GsQ2GpTdgkvo1tmVb1sP4pmk2J5Xa",
  "key31": "2BJdPzWFLPkqmDzsRcvFRqzi6PzyzexJYFNmzk61TMmrzUdeZTiCbZL5Th7wr6V5cS4BTT1KkeubWazjEbwxzkH5",
  "key32": "qamZasJYNFsuGiUEqKPKAeETvoGfzPVJwUaZTSKojGFhRbL6JvGVh96TUWSdq6ieJupfP7aLNVnHV7irT6Qi5ue",
  "key33": "4VD9JGWZXbi2eMj7KPR9eTwQy1TxrdZRV5ZHyCeH2HJ3YHqJjeJLqHAihjyRLkCV9QGwfNzeYGja9JZBeckoSx4w",
  "key34": "3AXfSKSLrnfBkwsrwQJTwDu3m34FgdoorpC2UjZSai2hGd73QBBWjQkb7HLxigCn8CU77vRP1w3jwkQCV4teukLa",
  "key35": "2nBXjNCLkcbp2y952S444XiyB7VzMGExUjEaBDdEpxwmVGQubnBAWUhbB33x2XddF27sHm7BAhRfaSWAf9Va8qzz",
  "key36": "3WWu6sk9K9KvN3ibaNztbHvcrMoig6SGDeKDjCAzjeHrpWQtroTLjyLCdZyf2P8qjFEZPEXoLJii35qWTcjmmqEq",
  "key37": "5sowYcayRspuSyGf3217PJRWxr2igHhuYDpFZyDrRnv8VGfsk546BuKtxrP6UxEr9P7rX9t9kJCatogJpCMxFYzD",
  "key38": "5xQ83RqXdFriws9xdupEqxxxQXwpukc9fJNn3y3zyjho7GtkieyC5XB89Han8kVWpRxUoVbTQEwENM6NJrU2cZcc",
  "key39": "5EvuhV8UcetGNENKZEfdJWXMS8SKSVDqJMjRkyTMHsZcDiZfR7tYpxJgHrJNdnsPYy1ZWv1YZTaF73tAEA7vJBXF",
  "key40": "2kdKGoRyWuCqbwSCou4GKBxpCgP8UzuqWcK7U2xUGSmiG64aqqCybTqJsauxGTRgy2keTN9vSoxcKUKm2YoC3UnU"
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
