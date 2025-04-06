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
    "4r4LiiPnuDktuSyg5MF7CRuYpA6UVp7dXd98vh6rC4N5578Wh2vsJ9TVhjAxuvajK3hTc7cRBkJeTxkjzK98QruB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e3np41QTfM3VyF5n9vpL4dpqKT8try71GwQTYQ1AYhyjFHTwygkftgVxuTTqVoUdoHDVvRN5LtW4JGmTWonRxJA",
  "key1": "35azPrNQESctxvebGBn4eWS9btSLkRyVzVyi3dRGyyrFb6uVD5UUJnxc8qjyMhTfGyKBgTuL1izHGajKbPEeVcz1",
  "key2": "3bVSnktod4UT57DLFPTYjRBTgyE5gfm7aj5NpPekfYwwLWE963fx1UEMdeEYWL64HYTSQFhfkREtZp8EYthSVUGN",
  "key3": "5zji1HvS5cHKpcch31E6XpuBZhJe8WEJ4xxr8znKJEcFScpnyuErzsfUEFgMVvweWH1RFRynb7Mch818tsbJNZ79",
  "key4": "3L96nohzsgEBBea1y5iqzTXGa9PqiWaEYpKUHNvEcGQzmHfd3A6cychgd2xpmY3JA1mQ2xT2yS7cccecPEJWXJsN",
  "key5": "5SNgvpRShyBvKRLRTVj2fmLFLeVV57QEPUnc9UdkeYi8BHnVzL1vzmJNvCwfVjzHH1wqycvN7ntv1PnRe26NZfY7",
  "key6": "WKdNrJz9NAWKJrvRNpjpDEACxDrBSaskBxvjAfraF3RBNJPbDPrcufqwqX9viHj8GRfCKUxoBfGGF5n9tggeNFq",
  "key7": "3NSiEcR6SBSbLTC3irwGc8tiegJ9NH9WQtcquzSUZ1BC67maJFiYJ77gLJ8orNMHxKn6myCM7kuzkqHCouruEEty",
  "key8": "3WdqVKejzrKjmVMDpyuXaniKuKYW92TG4p7u2C4aSxfGqzFUC4hEvBvb4C4qjETD1Vw5ZMiw8EYobbt2SpzuVZPC",
  "key9": "zGRJYKiUjzNMAoAK98nU5kYmAE12xhSNQZ7DQcX9vBdDaV3bLb2nVERPPgYr6SuZ7vX9VZysXj9NcuMV92ETJbg",
  "key10": "gv4AQ7AUXE441BprTQDPwKgYS4aNZzy3vpvjfDuPo9fFNnrjuYYsxVVuZCQyipfExUUswjRPpWrDhUmz8ryQqZM",
  "key11": "A55Vf1MRtjJsRc5ATeEntnrrLvpbsWYxvjxpky8gugf71R62E9gBU326YSCcXHBAx7RjTyhBTZa2RXcK33B1czV",
  "key12": "5LKRmu93aRHgZyGZ4PBaNXXddkMN53iihWE2eixrxgeB3jZH5mcvTbHLZc5NLxMV5LP1GAue4FKxjWH8yvwshPhq",
  "key13": "2jxtb9oRr6krzZcWjps9yxNEQFMTK4gAN1bNt2y8qK1MoJeSGYW6arLFgJxnu7RScheAGiUp5RQG4fvKhGQinWvB",
  "key14": "2aAuDirwvkws6R7iQZ6Brjyxniq7J4HcBTusZDnmrMbHhNuxVQ1uVW8FQkDteYbuxcmSa4cRvnwrovPP9uAT6a4A",
  "key15": "2pEt5anu2aSuwa2yrFCS5sc2FBv7xmuexKWQtvKSSXRUBMJgUNywYtaTsio2kXTzCh6CzqNSt6ixPjpseqmJQWtL",
  "key16": "49Q2WDmxHzug1VVDmcFnRKyq44AFLXJESviY6C5uumfFAeBgcJmDKXsRXY55eQ8xNY9ATdbDx9DSpddC7JLFWewg",
  "key17": "4a83pdtDZxQPvvXyWjLHu9C7RuGcfCgU3NWbuUgNgqXWE8uk58DyJ5rbSNAmYHXx1mJGuK4ntHvmCKWrrWoccEe1",
  "key18": "3CF3X67QyxjnmbaGy8d7RUSMScXcYC5TJiFqNn8Y6pX1gq6aptMjhhHYXD8eFRY8Fgxa5HMwjSfbQT3urzrZTYBU",
  "key19": "3s81gyhMMTDh5Q6MhUW8cimjxDf6Gbf9rwv8sFXeyVn58q3ncG7nXJMJwrSwP7dLxW2UsWzbBTrbiEcnc7ytgyKJ",
  "key20": "2mEjV3JWrVcPmMR7bFzSqnGEHPsgnha8VzLFCykRojDpXkZWa8zhqKThm1D87wDFrxSmULcCnmhkQpKcRQ1ino39",
  "key21": "67bVqfqfHb71kkxQAF4Q2gQCx5mdrSvnR7amZi1a1daJk9o4fh72AhyvBfvu11tgMu2enSrxm35fBJYLsUNxwTLa",
  "key22": "3y8tB76F5vTL8cpVUBVac8AkyaVukSeeBPp4EDQu1Hr9Sbucrm3rRbgy8eSt2GpTELR23xRdjPo17YbbEoXPpFM4",
  "key23": "376TQT375EkFU1QR8JQb3SjSpBgecXjRx37vmoqA1RoVf2CoFCAECjshBR5HSQBjuBD2i5eojtQuc9ATrvMGQjyD",
  "key24": "3bgtaj4GTVUZkGqLb3bmVYGEQwp5ddq43sKotDqmUxJx2sX7mz5MotzcZjJrZfMUoJFro3TCWGwuKRKsUo7zq3wb",
  "key25": "55AoMT1eFU3ezqTpPrtASjMT7S6bynP3HVcNpNRcYCmfA3233Z4vgSbnjwMsZzaLnTXwRtFVCK1aTWNZkqCANsKD",
  "key26": "4kZ1uVEoQGMXpfuQztnSVchY52Y1g3eRRajqW8nBEyYQzD1R2ibkqqVKVimt2KYcAMmMDFfzNCorBih651CRTsNc",
  "key27": "3DC3vfxgepuCUGUxSu9gknH8F7B6SaNSG7Fg8jFxh5bTQLd7AqwT9VuUBnGh8bLwpX9usvmMZHJQnqxBNzSCsyQ8",
  "key28": "2k6nfM6cjFTuX4wtWuELtvVh5Gu6m68ZQDHoCKDTGcCVfnR6hvooeCrv2kEwYuKdfnrA5ACU2UEmeznkB8Ri6wj7",
  "key29": "2XrLVfPuNLb3cbS9qouQW1TcnHQWWDfgrsh9uXzp3gCTPR2gsAMFrTCcTmt8BqiuTifbaRGPWkWzCugCyXF2YdMU",
  "key30": "2Y5kjT5dwPoTi8n8deNjP7wdXWWX7Wf5UrTLzmFDZYf7uhT3NXy5jJxyrzRGc5GufFSEjvCsqz8NJ7VwHi6HvoFS",
  "key31": "VsTEaGCFRLrRHvHS8UsRb5MKhkLbmRFGHjvhUK6AZFyVUcKaCeNjevVcWj8hvXqhBvYoUGJZJRymHov3oN4u4P1",
  "key32": "Z3tNPgimGZasPtqZBqdx5hphNqvPA238Fvy73MZCAEmrNRjET7Wbu4diNMKGH7W5VwLASCqQuV23AQgs7g2cr8z",
  "key33": "4thpp6ue1sBZy7PtQ4a4oHytquN6gUX3NXWHqkmf1nG6y66duVH2vjsrLigurCV1pEHMGWkyjXXZb6yZvuPZ5uvy",
  "key34": "5xiAbzwHw87pwXTj1WnNnpdhQRa1KRsgQuNNumYMpoxmsEvXccNiB67D2MG1sfGZxnJmd7uqFvdMPxR155DZ5f6K",
  "key35": "5mtmmCGK2ps3LSFzjtMaHshQNceuF8EcfwrPAnc2UT1WmtVPV7igov3Zy2w1PQzyyp37p1za3nT7VaTdcZLSHi2u"
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
