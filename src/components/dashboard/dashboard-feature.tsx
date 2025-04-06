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
    "3dKvczaxZDcBzbtQU1mzy2922Q3BEcSfBHTKpB1DobLyrkBc1vQvuPjugHZDCUPbb6qxZ6Qo5dzY6TjKodh5GEhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WPcnhrp25xJHpSXBFge2vNjubAxsri5Z99FNwzfnH7HqN2ASRyNJSWVzxBSSH6LrcduBzVNFJF3yZWDmHLShA7D",
  "key1": "48JQHmJArwDXKgZZS7qjHwBcmr8hi7SCQsTW4EAzAHJmYoSJ6u3WzfaVBMALzUnVnXJLDySecib7cJAeRfa8aWEe",
  "key2": "2HUHNU5C2eLs5nqeeQCBhJcr4FCM36kmpKjdyjGHumcBxR56QewUdRvdDak8cGvjQFzgQjYaw9dA428qQLiAj14y",
  "key3": "5SkpnHyKzyKTUCLxFjBiKtkaYvq12kwyt9qDezxSWheDbe3SAtG47qPPgupFEPHGXYod8Lt9VVX5DUuhPkDJV5iQ",
  "key4": "kcqEQ1y1DUQrJ1qnAvbkmwoyuh3MorxdQF5yqM879fWmB9AgkVndJmk6YhjGcDCm3aDXKB8vemmyVJynV57hTJm",
  "key5": "xBZf35k1FyHyHEfTDfvS1zMARyW4mHm4t5vaZnsXXHCRg8gPJJ4YnR2Cxo1pNy7ih5C4764bRpcZn1AHF6nPzqw",
  "key6": "5BqnPxAQur1L1H6wfeXw1yeR6hpLGtFyvdYHucXER883f9sdtu5q1SDrYqKi2B4AERTwFJn59qhtZ7Rx3ALeyorH",
  "key7": "3Men6LFitYUo8qjAoEyk4qh7BYqBpJ25v6v7C2gX6TYpjCDnmU1bRVaU7RTziFTM72VNN65bHnPomCeFhqbmprdD",
  "key8": "hKyk9mvqvDisQTxDVspiWUgRYRBAazZJzseo4fk1cAt1bzr8A18zfF99GZGxpPi7mhFswAEaV5Pyq7N2U1A5FB5",
  "key9": "5DdevddMyjseUbcUVR8cGmuuF7cnTtFUPKQrMe9Esp1uHvkLAbFaQnvxismfJLuXkRDLf2wjPDMLG6Df1zwFbT4s",
  "key10": "5UMMwydNZTkAfBw9jhcnQRh7qKmFRADkV9EPGv6LtCV8hRPwqzPvqb9JMnuR8wrum8BXczRqe7w28iRcL4nB8xak",
  "key11": "LhVy8qfzCknXGRFrEcwp7jwmQ93iAL2a8KsiMWpQhnbVYxDAtTfPdBWJQvix7GsmoATuoGFjttc4Sv52V63zNnA",
  "key12": "5SRj4wY9nBP1utdzHNxLPUWJ5uk76k7Nq2iqGX1XhZ2Ri5b8KQVwJryd9mCuBeqWmwTi5YPUmTypEQbXgCSvHHQs",
  "key13": "44gRuKSxiEopU8vNoJZkF9SWsxpxM8RvTrZtPGMVtyEpkwjjipF6maC353eYVwQLXsBxxYF7J9aM6HEApiNgGqEE",
  "key14": "2bSEBH5ykrtJyHqbrotZf5X8vPr9h4Y266iQAoqWY4ot683HaPfCPxDRZp3tYhK98kD1P5UaqWoYAsJuDesRvH2E",
  "key15": "2S2p1McY2rkSUUQDoLZ7LHH9gZ4yzP3vbiG6jHejJfxod69B12i3zePHJsizF5Nu6QmkESLJvu6SQFZBayPcLcLi",
  "key16": "2RsBmxf15jKBaNqFYkiRXdTZ44fmawipJpipaCCCyxugEExan9FQKKDpg4ZvpACe5wJq1eEk4YwwybqhhZEoogZR",
  "key17": "zA1n5C6zAUkwFoyPRdqvAAihENekaz79rNC9vbRuKCbLHMXWUC25Hm3wc55tfTJo2W2jMNwGfY4weJL6e3GJvac",
  "key18": "2aCY6FVsaHNnQsQWYTGQ5m4C7qsnmsFGU7eAfBxz9KksqxyQkn6jjB4C4wK8WMFsba1sS6MWq2rginoUJmKos2p5",
  "key19": "pofVjek4rYbBVqSWSJawTvAguFGXs1quzmbiyxKBfHQzntYuom8AoYGtgQqY9ErvWZ3HFYCndwwkYN18DkFivhv",
  "key20": "5ZLaNXegCgveCBG9bmgmCt4iEDpVUYm59TB9zs3C6DTtuJAY4YGYSchpSQ5mUj2a4kMiEHnyDt4QCRD4EVGL96m",
  "key21": "3wLMtDzY522BKudiRbmr1qpQxgpYscxM5yyWtdfQHTRL8AWnjo7ri9oJiE7m8CrQoAgQEK381VgezNVExbn5VqjB",
  "key22": "2JYQa5hF8ZLBX5QZipHLWdGRgeuB98rZdxu1UNRvo6pgWkLbGM8V8adeehUfvWFVX3VZ14T64Z6gjckfZuRTLfxm",
  "key23": "4oPVuYe9NuwyGptVSFcVdC6sBkwdiJgbzPPevd17VUdYGSvaw2SVfx4iq8dKWJjoEn9VUT34KWaQELfC1sbhab7D",
  "key24": "5tXtXYEJaMJ5dJifEKsWjm9FVo3uKXzKsmoTHHFCkgjkmE7kFkPFxUvXTMEXYeyCS52JRUoaDwLdzkecRLxK8tBf",
  "key25": "51nCwDEsBQzuZ28NAvSvrbffkYuFdHCNaXyp8NEPUAtKMeQ1Z5GkscWvWbe4sNNKyHQ4DiE3P631rNwuEh3vP9bc",
  "key26": "4eSiH4JW9ADSqei4qB7jJRu77i8LZoJjEaxyWpJKADqKUw8xqNi9RrfFfsvjBEqrFV7Vhuk9N92jZFrsbF1pSr6h",
  "key27": "2v2rR3ot1gDwcBPNda1owo2cZzNu1BfpBYY18Q49qCuPgWompbEo24TZ3evAihFac3fzLdyzKQuH2ppgh5F3gYdg",
  "key28": "2ow9qVitvp6VxXPKRLhW3ZXb8iy6iCZvfbe4C3bfYMztogcLjjqbJVE2V9e6opF66at3NVZ9TqaQzmkrq9Q9wpC6",
  "key29": "vmG253L7ZNNMojwQVPQg8fVc39Hq7L2QwJ2StqCiCEZqW6gXcrcknBxtPCwqpquBLkkP7tdXbmSGp8L9dBDbefr",
  "key30": "2gSaafrub6HAb2aG14NPPSEagpWD16odCiXwbEfcXCFbSqVJ26jPeCutSQBgcpZ1KKN4d3Du6F173AsPQ454QeBq",
  "key31": "2AnnRKcGsVyuc8ehq3BY4FGgc24VHcp6Ub4rwwYDmNoUyRjwFBrcsDJtpMCayB8Dcvbus2rTcC4oQvdLYfdNV49p"
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
