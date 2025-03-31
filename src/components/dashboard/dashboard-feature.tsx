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
    "gxvUVrMXk8Wwr1j9QfauoWkcKUcEwK5oKP7QGBu1E7sq9FwcEjLD5nAYSqiaaYtopgGkEmPcq7fscPqnQQRrR99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nAn9BwRhBP4FMbEhgMSRMz6GR2Npkk9AthmNNkjupYUWsDsH7kNPoReL2eD2Cn83ynt2d42XBqZ94Nz3mwCRQ7g",
  "key1": "3AJJCJCCKhJJHDTp3SSh7DwenbuzZZm1w9U77tWo5S3KXz9m6mJ1ojZuYEZCjMeFXukBxrh2BkgQzMgpJbwPvFyR",
  "key2": "cgUdXUDPVQwiuq49fRwYe69E1m3ciZ8T4DU7Aur1MoJZELgopDfn4WZFA3bYKnrtHDDjmWigAHoAqw5kmghRdFD",
  "key3": "b5CAQiNqnmzbkzAHTHEuyfeG43LsJD5szoyVyevero22mJ5VpoZKcnEWo1SAGYKqcxXBvZSpt1VKtmF1BL1p1fu",
  "key4": "4aND6FRagqyBVRB8RfXLxibvFJDCrppQB4P1PNXfeDvEdiHESkRLNyDQmprvK2ZxuvbjHNk4pGu8swa8MBJyDHYp",
  "key5": "4qS8eFdDUJV5BfXcpfLjNpuS83iuk4ReV4HUyg2cLged3vaV55UMN3zH8Ti34zPE85xYyhsVs67pQ24wb34uLFpL",
  "key6": "gvqrb2MEVXCDosWtsJGnTp2JAMyZ3wKUNACKDiQr6EWUtWbpHGfYgR1SrQYJJqYsh7J22pD5QhpWM84AZjbqJQ7",
  "key7": "4NjuVH8V85y3mZpuGfTrYmrUnYz93zMgHJZWksNdnmvgLMBYQo38azCyVNeCNPNBwCqxmeg6YxW6eUV4W7V4Q9MH",
  "key8": "HzCSHXhMeNopdntoLhcA9gSCwVASGmGPwHmLj1fvhEJ67PwUneoYk72oxwTe4pQTQmfxx9qd3JFPpASfm7DVxcu",
  "key9": "4XHT1JMM3fjnpjDVraSBen6DiPTmgjaGEN5BgofDyCzyWc6uDKTfUj8kJgfbDV12fZNEdXgaM5KaNoSRHj6VCKpa",
  "key10": "5nf8yqzi9HKvcA9zRE9eQagzefzTk79s1FWXfJ13ces1rc7XXAgm8LjN3TGS7QeqUw2NFufVtP5gEZHEBgtRdDDm",
  "key11": "2sSUdLNpweeTJY3thkZghs46ro8eXrjhuoousknjvp294dQBpedtTqtkuUotavJh6RP8UyidGGPNnjuYm2ef53UT",
  "key12": "24eLMiGibJXVhGRBZAbof55mKJbtg47sQmfepHb2Eo31Zb2hY3U8xLFnHjKL5Ndzr2YhsJtkBe6GjtfaDr5csq21",
  "key13": "5XobnHtdWB8y6PvnZbZpJqToPLkKdPT5NWTPqqFreMGrJgXXFBiWuXPRiKJjHo8kSEAksQ9gH1wWkDPWx6WsLtab",
  "key14": "5Mk4LwTGcydy9fMJFXSH4HCTC1gr3xwgfsPoy5e6Q76Qnm2ehDEeaUDMfK2DBvGu44M6X9fTFr3kWizu8xiM1tWk",
  "key15": "2x4e7XP5WWv5vHRY9wAy5Pt3bqtaLyHyKjoCezhK3pK2FqYh8EVHrh6YeJ8iqN7nooDggc6MHNpiw37SJiW6FH1Y",
  "key16": "2m3ooBsnR3TQvTdgqgj6jaPHHsMqJA8BEB4XxXsWSy517CscsPhrgPZuWVQZFNvYsWk4U7t3GU5LHXFgSGYjzMvA",
  "key17": "4ZPbmnXavWboA3Yr5H5vEWvHeSVvdTS7YVLMeauKiSnr3DwVzpkViEtc23A2deV39Fs77BMboSZq8DEz1f81kkX7",
  "key18": "4XqE6j5YAr91wx5XSe2owKwLmKg8ZLMuxuqL6pFputh8YN9H7c6eaRzLcdTkiQCjXm6itxmbGu13tM6vKzm3qfZ",
  "key19": "4WMAFvR6aHY6r3AVEnbmyEXV6FtefFxvqL6WdNtD1tVvzGL8S2W1UFn4zVhx72Y9gmmrMidYusVX2yg4L1dx6JSS",
  "key20": "wcfKbsanvjDuEQBG7r9WF4qiqb5RVWuwGztLU8Hkbb5Dzom87Mbe1jmqE4J94H34qViYgNerW2CPabdn6XGZC4j",
  "key21": "2twPowpLTAgiJeenmrMg3BuxMtJwL151LakHEogY1Zkaf1k3hnCbetty2Z8iuZykBCk3kpy8QzYR1QU7xUawRfPR",
  "key22": "4PvGevt59doHszKEETqW3P8wkScm2oHk6pqqHYWqNUL1hVAvqW1yNwVQs2BxKLda6w2w81MwoEwWpAPr812n1uJ2",
  "key23": "1HV77biWQMnBmVPLoR1Dp4QXibwEgLwR4cfnz35xz3JYfWE8KXiFeRDsYqocgvxhcnkRbsxxCoEMnhdab97Wa2b",
  "key24": "2DSLNLSe7qG9WFYnAZC6rTBxgXZxobtsySW1otTib1g4Vwf6vz6M6CVyWKCo1WJYPDN8X2q1MYs366JrcdLtXg5y",
  "key25": "5UuQNeaaF2toet7kjE5NZ2aUAz6UdHe28mXRG3vm71MkFGwsbwxnvrCYFpemeFVvK982Zkm3fA6C6PnrAwBczmFx",
  "key26": "5vssN7SgiJT6FnE2V8QHFwzeKoSGa9aJ3wEAPyocJcvXL7f53PjNB9iLEhuCia8GaePbf6pwXSEK2zcxmzEpJrpu",
  "key27": "3Q8MELfQqVADRQh16JoRhz7G8W3r6CZquPg1ktowaajKwEQQFtMyxHcJ26BN9J3qmvjbxr3J64dYyHSLoJPzePb5",
  "key28": "2XRjksCcNnEgcnDyYAYj73eYYmQf119R81jKwcf4V5cukCcZp1ShaSMirUpbg3GKWcVVp47Rnmd4DEzXcPG24mkW",
  "key29": "2nQyawVedjJj2uWxGMzaUmRp2JGMQD9WUn9pt2RT2QgLoXUWm69QCaaWFuCagA9cHqmaLDCrD2u19ccgUUWBEJyF",
  "key30": "2yLSbd14fcXz2PWsEaBkSK8zhnus4BHYFUJJ37HQVgBzrMWiwL5YngvcGQMw6K9X8BbiGYnqjh5hMUNa8UkhtjxE",
  "key31": "4pmZ2QaZ4zLQ6y3gSqCNcoMC8T9XPEfYJYdfvKvdqxeH5r4hpejbnx5XX2x4S3hQ8x2N1jtKQXkb476LUVMFbdXB",
  "key32": "3zfGDmLXUwDRQ5knzpDeaHhHmpwEUXgnAmiLaXfQJ82Heu84x3qmuLMyTE2rV4QSB7NQKqaM2BebWgxvSdq6QfcQ",
  "key33": "2izwjAzjL7pWKgXEUwqAvBU5NSXbxqprSRqbCH5ERqxTemzwhGQVGNmaL6iAEtpN7f5h8D2p8ugz6FhZzsDT8xTT",
  "key34": "WYMqetemq6pfrtjjjfbs8CbpDYcHP5mNYSryo7njU1FTjqUfCNxazXq1Vx23PCJSx6rbKN49naqy8nBFJUZCQ5x",
  "key35": "8mPREJXUS6S9idct14whPnBn7NcLfyxmmFDPApT4ZiEMkSSTeJ6XHqxx4RHRnN3DDaEzcfp9XzU3BZWHwX2mQod",
  "key36": "39po5y6eN5mpHtnJTihbxfu9LwTGn8vbB3omch6NTSc15KU7bS37NzqRYhzANDg1nqoaghB9oAMCLKmgh7ygPd33",
  "key37": "41JDc76P3zrh77JE2mh3qoo32CJUn4oGaks2kyPacqT55sAKuiCHBVYwvR8LVY5hAhZxvjXfLa1Q9kWp3yFeWmGM",
  "key38": "39HmKnzVBdUxeaXhpzAfVDi1cpy8VSB76U2jcoLC6XxJHe16Ai9zfUzLiEESk8nn7ruTwDGVZfBqFFqASS9B44jM",
  "key39": "53AFTncMzicFyMxaSzmDHTzdnk4NMz1TEbJUSJmS1uwVbUXsZzj2yQNaFSQqUnQtfDVskSKYXaUqg1y2Xx3bXEaG",
  "key40": "41SjMHMRVyzY3SnE37YhUUp7PTfZfEwpvfzxfygn4QKSBExQDoU3XuRarKrxErTPNx6TWN3e4QbBbgZPfYsXtKop",
  "key41": "49ZYQt6hbNwuTvbQqxpgvFUKqD5nVMzVzPj8qkLBpAgdcjpM4Le1FzBXQ4Uo5CSuVZ7NAbmrmXoyYrV9Xk6oGCRL"
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
