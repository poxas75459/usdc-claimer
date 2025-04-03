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
    "tHDJQKrPHzt6EqqybwbK7cyhiPFqJL5P4jqpenwy62xz7nmSTiWG9Lbc1JGUD7umLaKtktKumKjH8xJ9EF4yBqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6qVf8aYwLdqGUYEFsrM5jVWj9uH3wQpJ2f8fpehvDwSXcfPhZX7z4xXg9LaKAJjiq8vRa5FS1p2bmGZ4eCxf4oy",
  "key1": "TJvv6VRjshtVc86HdozntVSTsSq2g6cEYKqhP1L3fDk5qvbKR8n8ebZ4J4cQRWEDPkynFQkb6nuSsvZz9z8Npis",
  "key2": "3vapCEYFtmgabJ2WNCGzi1jA4XqmwV9Q7K5yzn5j1titFhRQ8JzbJDx5T9KNt5Cjumqkohdmc8sRTqcihyAukACr",
  "key3": "2xyfvxiY4nFJ4zLcpqoK79YyfzJrqQFs54C7kmmak2ThrxMSMiGoVpwQe47eA9EdesA391z8E5SgNEroatgSMVFR",
  "key4": "5ZcpQ9TE8q6s4Bcug5MwyZL2ZPKy2EJuwb4Edmvu8a6iZSi3xKn8nDF6Jkq5d3zs8USNsd5tyr4WQECPX7D68tpn",
  "key5": "3Bqy2Jt4d19dv49p8BuKMrrfJJnVobMRkTAYAHfSgiRSMHP3XSWe8isTCWv95HykhU677PrahLLfmr45LVdexsAE",
  "key6": "4wd8mpqak7vzv1uvn3NGWMiiwabZum5ywPkMkQDAbEWQyQEbpQNWqhvAnZqrKg3GRE4GfeZSMLBmMNwZgexNJP9t",
  "key7": "5iK6HM9t2ZHVaNRhoc5GPGkU1284WXVyyKhngnPb8iXSZPTTwfc91T9MPeLxDLWByN1wCqV8tFfh1WHqEqUXdTMR",
  "key8": "5HzCdjF2u3aLMiEYkmtyVrWsGosM2QMXfGKPEAGNiUK1KntFnXgVexsvBmLEJHh6kN26uWDh2KwA1ZTCkvqU4sEn",
  "key9": "32hf6TRkJgLxK6PFx1Ft9QHPJHD4keqdATWMdT7PAoye1p4cyXvyk6bX2adcgqYboGmKvp9ZDhgeAAemCXBDvR9S",
  "key10": "4T6x7FKYB9wXsYMXBsp4wpQHQyair3Chxg8FdBEMrG9qoQCZ5iijS4akoM7UQvwE6QAZHWfAQMvGycAqY13XwLtR",
  "key11": "4EqNEMMoEidZm1xjNYi3z8ZvPVALEycGFQe3TUed6TZFNGxa7bcM98fBoLdrqPkn57BMakJVc9mkXW82YGxVSvNh",
  "key12": "2j4d6uWKMyyqSBMVMHZhq2KqBEEKpgtyKSb9txxCPW8iDA1CjPT5pHoAYvmmnDEDc5ziD7v3Cz7ZZPw8aVRfdw67",
  "key13": "2N7toWkSASfm86A6n5pDhg5QfZ8iWFhpxhvf9xd5dMVeoZcjdJetDHEYAVTxkSkbdLJESpJz5UWMBHTR1tYc4B58",
  "key14": "5X5VHgP7GQJGc9BFnAX1vSNt7BGzDv2nvBCH7drposx8S8hQAmDPSbNiwa9ijXWUSCoy8asFET6AzNJgmce17uRi",
  "key15": "4RGdew2kBmY9fCLiEMbVDKba6E83MLbRJgMsFw6qyPvheepgzkP85apYV3r97afyFvKA5KQDWPPnfLQsNF2MXGBt",
  "key16": "AJrQyz8354qFVrpjUTbKGotDvK1P6zea9H2hQ4VuKBLK1h6gjyucYM9qJErYT5k85snAgyBgSCtihgTbwSeMqgi",
  "key17": "DEtSnJHTwUpQEryXtKh4j7HnjeGiTWvfDaxLw2kjZ3PRjFynhkj47C9jNWPjJzHmY8jj8qzhuvWr8Qq3ujgBh2x",
  "key18": "2F3vJEeEERJtFsoWQFSxjVsGTaNA7Q4SqSvY5cTPNDYn2aCsuiZYZ8Te3gmJxei4f9WVUsBFCNKteazB4pt33Tm1",
  "key19": "5r8YAgz3EvDh8ESkCmqK2SjLZidPBc3oZ9sGS7b2i4wwTYPiNKzk8hG3GM15Xha94EQnN6Pp6bxxFyAbQayxVfPa",
  "key20": "36VsLApv8mhmJEC3nFSPPTGovczoABR71j9NoJKi82dZngcAb7Nf5nkwbfNXb4yuAqVto6a81R4piG9z5kGrunwC",
  "key21": "65s2LgDt9WmYi4WVmcp4sKmmrZVLuV4vecskTNCQ7c96BQ55FvbopbcAkZzgFwFboYNuq2S4GqQmam2nP9pAHCnv",
  "key22": "57eQzrKQHjy7h2gDDTZoneJ2776WPSwMWxWBSF6W4aSZNJrZz1Rjde61pTeWt2dqoPtKTE8bzeiKnSPYxTpzTqUR",
  "key23": "LRQABqrcw1ayGsS7ooXrQvxYavMN8xRyCJaZEpKuDwa9nvpbQJUR8nz3ixfaUmNSMBWnAKas3oJ8n6cEb8DfKPF",
  "key24": "3giukhnyy5doZ2tqGnUYpUmZHZKHePeJnkYaSwJoNgnkkA8ReDzxuC1ZeXTMx9ESBU5CME2i1RF6zfCQGvDGJ3Wd",
  "key25": "bkMKqdoxa74Y9sU1NsxAVdMWTbmAxdkqm5vTgZiBrt7G3Mb6hBbZB1pGpjS9FqNEx9jkSUduAXBAsbvef3xUsrm",
  "key26": "3GEmTypJV4pNfpGBRrNGxBema7TBe7btfLy8wnNiyQcvpEBdEmhyevCws4cmptTZAXnhwyhKQqcf4U447kf1p2Xw",
  "key27": "3u3cbrnaKrpVuY9qV37CFrxwWtpjcLdaQy6hbcfgqUPvTESnUY1879SZ3p1GEdon4kk5x3KS3JiYwNJy196HtpjJ",
  "key28": "2B7gQsRw7acY65dvdT2gEY95hp71woGqNZ6hNdyPfsN5a865JWfV1CHfw7fwk122atu7NY3EaqpNyFEUCESR57ch",
  "key29": "2HbxdR61UgWdrMg5BLwHZQesdfJSKzHEZSLKfos7UkjPZmhZKXAoQqJ3Zb5orhX2WZZ9BvruiRNz5bJcRUdQjFmo",
  "key30": "5MgHaJH1zaZkxDQ2JE5uKoV55eAstKRs9o57Cq1fVRQhUufRuwm8mts5CqEDTj2YyLCkXmBg1DyUQrGSMz7jUeJA",
  "key31": "5epSCdJjRK7qi3m2SKAqJHn7aMP8Qq4bVVMJNp9nbU5m6UZR4uuHYtdaYQTNNUU9P9X8eAdJwGC8iAQ8XdmFY149",
  "key32": "uzYhR9suVq7vmdqeQteHq8CWtzaNqaRtvHFbvapgZ3XQVbvDoupQ9avRwhuAX5366XDjsp1kE9HtSgfi7Xm2yXz",
  "key33": "3riuHKrHeuceqr7sW7AU836fuvLpW1M1t9APPbHG7Jt78AVQyyYXu3H4U6MWFVVbLiLJnudFigUa8xs9c1sr4XcJ",
  "key34": "fSdrgpATqH2NjEPHV9cs5LPSbtCQg39UhbFVJUE1pN7ued8kuhTepLYw54C5MrifxMqUwV3eETMfrvxXGuLYXbd",
  "key35": "3s6oQ6B5pnJhdiCQPVVBrDSimD29M9RkPSvxoLRpn7Kc6UAvFij3D4ayQ9ag1PYWHPfT6nxZUvqNUPdFY8mTaafT"
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
