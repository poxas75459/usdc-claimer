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
    "4Av6Jcjyn7At4Jvh6y6kHzoLysCvVq2veM7Hxi37yTpsk2ZPkVGHwALG6StPLh7KY3AXqCRwTNz88TC1oBYvF9t3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CuBi1x7Egpp2Xgv5EtzHp4sTN6NxJ413Worpe3DRvvPYY98FN7VQ6ruyQSKfXtxLw51dEUtF7Hb7UQMM3WdJ4RL",
  "key1": "5NuyQGks9RtVCJnsWf24w1esyuT2E8RquqL2Da7CzPMJzRHcrBYsvSNY9DZZ8tFJmWTaPCV1ettaXLfGD6x98Z7a",
  "key2": "38iuGPJ2hfjLUJ1aprHyFtGjcnYJ2NGw6mW1BxhahMh3U7SZKK67Hjvj2sfPKGLwTxKPm7Hg5RmZkW7kTMQWCUsF",
  "key3": "2aeFcqcTK3dv6f9dxN1wVe3WPx6CsJd46Ye69ke4oTH3LcWkKiUUewmK7zK8tfo3bws3dmV6fhDuxUTjJeHLcPbS",
  "key4": "5YtbEVpgXrtnsqDFgvR92PM5EhvY7Zfu8Vw6gTCvnGzoDkQYPUG6dGsAGRKCKy8ukJnU9bsJPdcf6pAbsBEERhB6",
  "key5": "3s3vMCuX5Em7oVkzuVLrrJT7vUdVQkUPARk3mT4HLJbSoiVV8iNbngX54SsFJSsQgevtv7CFZ7Fd9h8GdXYcdHi5",
  "key6": "2qD3SqGNc5zU5Pq3k6gjHtVnb6Sdq43e2rdgwid6bTYXAQj8H2HQScJwqSAs93Pt87zPuVEUpBe9N3TGkFgrnMcu",
  "key7": "Kz9aF2GMLUMLGmWteUCvLRC5xdvF9jYRnMhAYDKBHwypt5Hh2ukV6btUnxVH3Y92BTBRSqvyj963Rna4esDTdDf",
  "key8": "4tTdfar8P6fq7xUpfWuGLKkV9a2Xq7Rof8DE4n6t3mTQe8P9at8wpvnBXvFhjCEYKzfXuofhFGB6B7NVTQPABpup",
  "key9": "26cCgxNH619ESxaMFNnSKtRyqvvcKztcwHAPQ6E6fy6KE1C1G1A4dF8YdUYcyjKadB9JzPU7gZRzsTo877j5eNjM",
  "key10": "5pjY7wqgkSfpZaEieHgE2MATZn7T4JoBLyBdZRs1BPQRoVLsvFUmezegzxRw1fHLtm1n5FMcnw5NhgW8mW15MEQ3",
  "key11": "3nyzTihYiLnuVtZCY1f9J6UTuLrVPXRyv6Vds9ETSSu7EmzRsnjeWC8UvxdJkCKsDHVRymQfzVZxJ48zb8ngQNSc",
  "key12": "5xBwK6jjZa55Z2fxTbaybayj8wHTRFp8zsZFXUaWKbmmr9xvKxXJeaXiFCgAHgfFuXBsksPQyEvq4PrBgEJnh75o",
  "key13": "3oVU4N1oa2msVo42gdt3yv8eLmAGwepn8fnrxTcMaAWWzdY5kZJc2Lvr7Mr8mkKJng6bnNnh38smLJ2TzpDmdHyA",
  "key14": "4YFF42suiKkFk1DCiGEQtJgh9gsEEdc9UNvhGqc6bwZ1W1qcvtcyT1GmVWrg75sVudWcRzzJ3MFygmctwPmHEgqL",
  "key15": "61DNs7S95KJXTiaNXNE799E89CS4tMUceAY5zmoCpFzxocEqGNzFFRGah76fk3u97Q47jJ72zPsHy7GEd8PnNCZ8",
  "key16": "2HSxD8WHhuXuVxcGtXLPCmrbQc32AUqoCqJmnzLbartGpgu6AqV37SbgtnZKgrs357BzwPixXER3Kd3MS2vW2Rnu",
  "key17": "muDyxrfEMJaE7VnQy7kFAktAdsLzpp58LAZM61Qoekdev8GMTVpBFFd4ES2hQPXJAppkhA5CGqydyVPQCDUseXv",
  "key18": "3hUNoFWPg1GWTUUHK8sokzpRt5ZnUwS1jBwDsxqsr8wytEZLzfxEaH55hHbfE9qL6XBTFyTK83jrP2eZp8Tja4B6",
  "key19": "3cibonQy1gzdYatDGyjp2XDFw4Pt7oN2e1eYvsCWZfYWj1FgNQa2tpUhMfdP7sXPNJWJ4TRnzwrCVNotLdht1nit",
  "key20": "3cpeK47hYta3rbahoDkBVgPS61MKmDTzwfmKwJWJpRfZLbtitU6budd4qS59qwepETtDDZrvT7yTdk5fAcMnnFzr",
  "key21": "3BHmoTpxYFriSvQsheM3Ao9m7qWrQKH3L2xi7LQTBtLw1o2TwgEsud7cjWaiPQMwrpN7H3QPx626hTm6KGp6zDXW",
  "key22": "3KK611LJRxMrssHkJmtiHAHBtbw58PzFjL5qTR1NWo8AMGkxD2nzFGr8DiRF14GhsZeJa3savAVPGGgnjuP3d8YZ",
  "key23": "3LNPfsuvXi8ng2mQfB8uJdqeGPL87kEmyNZdYHBtsU733Dg4rXrz1KEVxnEb8vvtsWdi4PEHHGKkx9jUdRPZKuCK",
  "key24": "3wmULQtVtGbARqWx2kcx8vm1JEKXWz3fEZm66aFxLFBRtLQQqA9zWZZy4WwAW7qfwbTL6P7y3XDVk3Gtywm5uKpP",
  "key25": "2uN67GN4HjiKYXaTBnQayZFXL2GxuUu3pcAuM6zTrV6KxhbrZ1ZjSwdXSMraF2HAvNKPXuXMB89w5tMcbXaEvgSz",
  "key26": "Xa3pNSy8m5rqKnAATw9MC3P7MCKPLtTuvqA5zDdYG4jH9it4MrDvG4B732JAu3QTGryMmuVHC8nbndxxc4BE961",
  "key27": "2Sn46J8Bu1AtWkP2u2hoq8ph6UZxS6EXVi7J88tvxngnFxUvrexBydxBCzxLVbT1e2wLomKc1q7htRCkXNncbtQ9",
  "key28": "2FNjSZSyc8MSCKB5LEfkmXpY3k6ZJC7x6616Jj1NMHubYsGwJEkTWL5idPam5KEF8C3zy9mzHhVghFB75Bbcmw16",
  "key29": "2tNexS4nSVsQ1CReM6Thjvmh5sMc792ZVWPwUzLQ3div1WRfyr6uA1deaFfHQET8C81kpD4PvAbAyrfZQrUdoq5C",
  "key30": "5tiaLm6AYDS9vymNRwK2jR5nSE5huFwYcPdWp8TJkMaj8fsN87LdEMqqcz71XmL4phHDjY2ZKTYm3RS9GrHkfvyH",
  "key31": "5qefnipyM41LFeQySfnnjWmcNajXxJLJrjHPACnAyngC18m53Gj7KD5pmL6B6YnRma5sX1Wa7eqU2TjTt8vHa6Uf",
  "key32": "3hmAwbe4gzXe899ucNxYJYEihq7MEewSo52Snx1QHLzBpz3mbBip6F6DTTUTJrwNsUDaE6cJd6i4WRbqxCUVFvWo",
  "key33": "jiy2JFmw3n9jepdKfVqJKXhSxxSjBE9RbNfaiNBT2s2hSieUYfDe9mShFJCo8JXNzA8dDF6tki8m7DaE93NfGx7",
  "key34": "38voR9a8TXhXEJocPfSLnnTM7fPnYhSTharrQQDLSsDaoXpTZoPR3U1wexD6ssN8hb9zpnohEc1tpMEgr2pMzX21",
  "key35": "3JxRz91ZK6PqETA3n6NbhkrR42bUpGyen2Y5EfbhRFRTmtv8epztaiQNwCnQkeVM5yYEqc6HFe5sWq8kTRz4f9a8",
  "key36": "4ihSF64DtLWXVEqTYrWsw7jtVvbFHTtjjqdWwcKmxAdkDm9EW4aFKmM68ofbjQSaGzs6PdndtLjPwD49NaA3tPc7",
  "key37": "5tK5GeSMt3jvdrvazZLvbgckwjuJt6TyXoSE5FVPiQN4CbXsFBhfkrEoZPZ19J92oRSnqqC54Y1N68dYBMDSaGyN",
  "key38": "435QqimG6hdqykB7a7uqXhqk9BfaoLuYiWQwLbRT6TYiGtgyTMMu5Hu6YdgyiTECKTfqBrcfUru5DYBTRvbRhZNv",
  "key39": "5xrM8SDf8o3fdCVDfXUpxeoUuah9B2YjU7hFiuu5o911HgWComahRYjoqGXntzHJK5rg37Pz3m7ZWUnUs6EKBghd",
  "key40": "53eAPySWF7eZfQxhHMz6SXbtm7PwnVwd4tjvQbG5SRAmsfZMdbDKB3e9DNAhGXG1UnNs34KL6J2M6eFHxYv7gkbw",
  "key41": "vVA7riDNXoWVCDcVkCkNWiGDmGpaqrctykYuPHCMiqCMgnAaGEy6nW7SzieG14aUYoENg7oUXKmnty62UeRZ3ek",
  "key42": "5z1p3etwu3bQroUXG7RooB863geoKN4VT4Bn47X8HkB64MFXg2A4gRpzEisDGZaz89S3WzYNNJi5dJLKiw21tQ7v",
  "key43": "4Hn4G1PXuUenZvXcHkbL2uFyepj4ZuKE8R2s7ncdYTEPF536NxHet4dQCPN2YMhHBHeD9JA59RVTCecdqWjLDWf5",
  "key44": "4K9ohqZzNzhdUNd45QXFEHYGaT842qj6nXAyHLUHawwGdvo283dD13rpvSnszSUny9rFQCcX1286GZzRdwFjZRbg",
  "key45": "Y4MtFCqenpy7psQmkZHwNLFidf5p1JvvvPNF4cRcqyRTyPfEGYceV2ysXQunjx1EovkZXPTr7vVo5jVmFfq6Unt"
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
