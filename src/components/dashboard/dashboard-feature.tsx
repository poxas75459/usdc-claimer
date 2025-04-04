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
    "zGNSvVa8HFhbPVEW1uootiTmNUsV6Z1LhV7FdRv83SDJWiSXKKi79QdthB6eLu7KjFLdYDeK96X2qFZF5bCsD2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37oyAu8mbcnrjw7vHTYz5U8JxZrEBu5ktvPqsiyxF13zueHHvHxz2oF21YaXJuvcCQhC9LYXCkA3UKu9kriBkMB2",
  "key1": "3B4rtLZcM25uB5U3Mx3cVANHMJMLe6wR8ujd8MGBuhY1wJuXUQ76xk32pjfffMr6YhEnj133e5LY8NMENfXf8VmF",
  "key2": "AkMxR6pUEzX1UqQBhxYmduyR48Yctn3UaEh1aougud76wooWLP3SSbASSqjGqn46JqEQzpip9Afj6nruXMwSARD",
  "key3": "5NPBPnN3q78EfeEP5SWS7KaWQVRdfYnJ3NhQaM26C9nN2VntgjjfwjcUcMbPjStBv6ehMcueDQ6mHhn5bMMDmWrC",
  "key4": "5x9kKUCjTfAwvc4ekbaBuG8GQqUcpqhDEaMMx5ZkfMawpdV98LgiWfUF4sFYCMbufNiKWyvzbFkMSqQHCAde1ANy",
  "key5": "3ZwG6jvZXrbraZmp2KHmnLxWwN7VaijFpvyWV6Xm4G6VvveE5owNPh2pP3WUhVmUXkuu93fpNPfZ79r2GUUMkkpX",
  "key6": "4kgQSdeJjPYEm6KFf1txSLKQwyuR8EPfjY6L83oLmLAm5CqSpo18UgaHFL9HeaQp5GvEigSNLivbnFdSuVLqsyRw",
  "key7": "Qk5ubo8KqcQzrvPvK6hfc6nK4Y7A3kwEZFkPZcjcPDdpDMz84V1mwbA6mMvBThKsBu9y7uCc9Wj2mbs17onPwNo",
  "key8": "D7ioZRPdAHhQCremXB7TYjZE2H8chea3ig4SpiBkMSgTmE2AqgkqCUV5esbWMJ3S64DaXdPuWD5SM2t4swY8HLD",
  "key9": "9Q5mW7GR4L588kRmSyd9GRDJSBLESRJKSar8ptvqQ7xYxHS8FLkrYPpGxGzXWty92Gv5PtDyRrfGfP43hEgVNbR",
  "key10": "5yV9urrQqo4Ek8YH9BEnYvqaLe3p3YT11SCuWKphEKMffT55BMiLihxqt1iXnahsqN8kodKuxd6FpYSzdsHdrt77",
  "key11": "LW3sKW1Zsi7aJgU743ShwaWP9MRYiM5uLLetZxrJB97iySeRHZDXypp96PrnTWEFHSsr2LoLnHZNww94qpC3Gry",
  "key12": "3pyaXbJvAExxDMunmBD5U3c3uCUGPoBgdsuTXUkGqRnzmLbaNJkvDWqG7myrdVr7RBswJCLWPbeFkZbMg71dj5Jb",
  "key13": "2G8uokJn1uARs8cbSkxwAMQuYYZvgSvikQwS93jfZbz1rX6WkCaYU82554znww5n4CDk7YFM3x3A1FtSp8fqbveE",
  "key14": "4kEPWKY6KvyeGHqTHVc2yekbjEXVqebatPirBwwxCKeHjW1UN44nDsU6p6vwocMn6anqaUEbLNjziHsN79gCsY1k",
  "key15": "Qr5A7DzvXr6M8bSs6LjLLEftU6QA9wk5VnPSZtyYz3pJDrfjnS1wUr1FLxYb13WZBTAxjqcXQi7eUeMpwZnJrBy",
  "key16": "5PV86iKMErV78wtFxZsfyKVExQKyCmTfcj6QCiRmjMBoBpWPcZuNuvZ259DWTjwc58RA1BE6cukY2yBbAXgYPrUc",
  "key17": "3CakTu1NvP8Mdvae6i6CKdPaMdbw2yuCJUmraS7sqqG37fEuECoMpFRDQWSSURqHHJMCwhTCAZ4j4ZPwvufLRqVS",
  "key18": "33Wg9yyaoNRcXD7WS8ZvUVwuAztYS2WKNqivxDVTxe6yxTUkASZVaWjMA32Z8TgwFu62WaRXvViZPYr3BiGdKvNM",
  "key19": "s2t5vAUm2Rkc8p2Rs5K6841oARxRrEqHbuPyGd1ntvkjzfsmbfrdDiWmi828oHoTb3pvU7qRBuuoFGtLGgLkNJw",
  "key20": "3MBAtMhCt8igEZcJE4tPGN3FVoqDt1NGVfXdYn7rJYHBvwN5q5Wpacj2Fs6EeUzHqa6tapNMa77Wnx5k3iyaytE7",
  "key21": "LixCUdLKJ45m7bjZrE7eE2eDFirUpg7VtvyrJM7hhrCH9j93bkaAytNMY739ghyzYH16NS7qv5kF3e9vhZYvYxQ",
  "key22": "5Rdt1ZQaEbdPJZUTVQymLCfh6HtoDkst5vfAeELJspZxfds6ibC8ZtybsUMLXBLPxpbhfaaGA5G3yotxMiAKomjN",
  "key23": "3trc2x8msqbmLPc7UaoNGcjmgbV6Nz1owmt52ojKxrm7HPrYR9iWifrJNsau8uZKoeLMzKKmk6A5FiPMzzbetEPx",
  "key24": "5BLS3kRpkhH1ds7ZT2yfay3Eh53Le4iuGzRXJHLthh27B8ha1CbxWWDLp6KUvhoPqBDLygN698o8LfWZA6hXnubP",
  "key25": "nyuTZtbiJ5xGnnZMafhgSAnhMA2T6BVZXvgg5TMLothLz69wEgqejFKUvoYUiDoHXJ6hQgLwKne2DVzJJnhCNgz",
  "key26": "42V8GTchjBPWLZW384jqpWADdLY2U8fGoxAVD96zvSU6JV9sezAryMawnrjWBQU4CwaJudonoSeBmc3T67WtzPs7",
  "key27": "4JnZ9XYVZgvBy6PgDMxTZmwJmtewSxh1Li4rivrJQsYdZnR7crUxKbji5CZJES1iAPhztcBCZqL6Ns1EdpT76au7"
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
