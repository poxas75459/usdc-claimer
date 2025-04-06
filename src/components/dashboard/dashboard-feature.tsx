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
    "5PYWw1E2sTdaS3PrhRskb8iuyBRG4VPzs1peVvBg8S1tse7uHKi8qTCmZo2fHfuHV3aCBq9YzcVHaLvNXPhYiD7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hVS1QbBUri6N2i5kwDo1Gc4TBWVYA4TazC6Yg27cDdgS3jYFiPsGR1ExDkdQ7r9KyKy2BbgfNihGo8nziY3fmdh",
  "key1": "2uP816VgaZBv3WsiA5g53hYTYXxPzB5jsd4rYZVsT1yTj9zMjyFnVPkAMaVEwG9PMYyyBxQBiv6jGhsSJX1MzrAb",
  "key2": "K7M7YgjVeNKbDpAsD7kMQ8TjfdmUX6zTAUYcP36Vo8Zun2i1bdTeQ34fbKcJpPQs8hVt4KhLywFFyesnaZF8dF2",
  "key3": "2B85RcqB82h688JGEhvcFbXEkPFHmEzA9JYRG6Sa1CXtu1Sg3bUQfgrDUSYQmEMHcpQJvzHFuiCctLZNkTGa3g2",
  "key4": "4qPNcgiYNmSfT8bzd7teXDopJPGnjaiSY1tTy4wMLHRfjRmaPSfGwNqZN4aEPHpH8X4LUC2CiW6M5aHEbSE3SjTH",
  "key5": "3tfURha7spVU5kHmCCUHA7sa3tHF8Raru1eT1eBPnSKCmQ5VhGKqB3eir9qS9KgfkAo6nxDvBiu4LEpqpxUkDMVd",
  "key6": "3oAn6jGkqv5bBn59yB1Gw9yomcyipxd4RkbVenjx1NyLdnQwRoUVeFcVrWAbpz2Z4aCyfdj2xtmUQbZMGHVebPjG",
  "key7": "4X5xdQYMXDWLWn31ywFuBa1X7XGyLEZPJcm5aMKfKbYqB46YfobmD8Nx7UMddafJAFveTBeQKRkrKum8rK9gifjP",
  "key8": "pga5sLBZgSDsaDi2dushHeHof6nHbHhVDuTPeJz5EDwXN84s7QpcXgBnF3oCzE3DrM7DmcF1DhJkDGSfi4MWUMn",
  "key9": "ctkwr9QBmLpxefkaCsfsCmtDoxEG7ub5RLUaJzVDGuyuUgvbinbnchPesTMARF1qqPo4UATTFCdtWfv7sdi2VAh",
  "key10": "5Yfdxz6br5U5QRNZWUd6utfcpYTfDdMD2VYuxxd3vm2kDr3xBs6RamwRAPXWyj5QWZXMtN4JEu6UAYGjevW1oChf",
  "key11": "3Aod3q1zgjnnWh94f6uqwy9qKpoAf8HaGzagYxTp7765vrSDKvvRxBRhXpedcH9ureD1mNKx39aVxwJpjvKwPsV5",
  "key12": "3ba63tquSgcyBkr2SWxNQM3fUgYr567eRes8ekzmjN3ijDCZMWbkKZuzhc175B8CCY2y9w3KEMX2iab9sShdSXd9",
  "key13": "5R3MKDTAoNNuaKwa1JAgWTV27MuaQc2C7STqCq8gxynRyAbad5uwQC8qZDj4WJqUDR3L7EuoWZpMPxHvdfTp7fAB",
  "key14": "42uUam6PRCWqUCPeFdpv3HAD7bnXBjNdVSgXbKDKv6WDVSmF8Drzg85Fj2RD6E23B6x8xG86T3k7AtLKHzSLhtTe",
  "key15": "5vKUREMHiSbgfBwdXPCe5dNmezV6rds4FncJGpZyzCv8C7RbwPvaJ9HTkHRMGiS1eAdBVCXcXHCwCh2vSrTgF4vB",
  "key16": "2saewsC66RiXDr4zednDMRHFN1Tv9eFXixECsLiLps6NQKhdWGaVXeDpbpHkvvCohQrbuRyYfyzXBw8YvTHr9SaA",
  "key17": "5yz5shDfmUiqCq3VL1jhuBEH5onQuqNPzmw1DCPGJkFV9FVohu8tq4QytYFLve28Pekz5ijHbaraWLkwDFWSV6oG",
  "key18": "24PZE1gvk6oYbthKxPMDqHcWyFAoRyDupQZJdF5XBz8MR22fvoG77cuhUSqgh9cmvKhaXAxuyWFRsjfABCcQf2kV",
  "key19": "xHsAw5G4KzVQp5Xjf1nSoCCYnyW7WAGU8aWPgB7mgofjtmhqkGD3QYWb6Lr3FrZeiBbQMqwFXifSVTScWLaCAjE",
  "key20": "4veGEiaeXUvdjhM5tg2WF4WGHCSL5CJkS924UsihbvYmhAR1kRAoCMi21RFcbcEwQKJeh765hSRsE2z43GkN5Xz4",
  "key21": "28kefJqbNvW1qtjfPVJnPgA9SiqKTT2xVx46rPZt2SCP3UMk34Wn9LQ5oN5rPZhp8u9s9G3mdtPhQkBHMZcRZzdH",
  "key22": "5CviP88MogAndnkK1povEHmiaN7MkERSAMhbbih34EBphroiWAU1oN1zN5y8xJzyLw3jbAQYmaM4sUGTyfYUu4pC",
  "key23": "4djT8pPnm4SzvX6HTCkrgaEzeFVR4qyCx9B6xPvZzQHNYNmikNQsRGLKrmEHk2RwqtXyaaoAiKEPZsdRGKq2XwnR",
  "key24": "4DHqL1qbakVT5h6Xy9UGmwUU2aQmw37Po7QqSYmJ6vKdpE8iX8WS7JrhyhSmWbsHX4nrAyuqdrR1sK7fWaD6PUur",
  "key25": "Py2deFhojsWh6sFgMpozqAxyLvYGpeqgYaKtuKwPRsbZvvaqqv4jqkCEvQVcEghYZWWJ2am9vQm7siKQqMz96Ek",
  "key26": "3XngsB1q9yhmt6W272e2PMudPFPyDKMNZHL2SXr2hEgaxjLBCZaAERdvdha8sRsNySzuc3zdKToCk9ykiPPbBCs5",
  "key27": "2vXLbhFuaDNmNVxNDRsgzc8sR2MvZYXpHoiURriuokHLeCCtSWP6dwNbWAaZsSi5KVxUzkXWtbEzA9zX95Zgza4Y",
  "key28": "3uS7mnaXBpVD57b3BpFp561D6bJJ5agYfpEeY4yfWPua5492oh3achDv2jX6BDHg4bPir64Dhc3TvLevVRie8YRS",
  "key29": "2234LJYt7E5jkircx2mvB8fiPtSy6SChL62FHQJSDNkNCYn58EjZtrcVuo1QAVZxcVHZzN43i5QrYUsD3euLbyVn",
  "key30": "3yQmoTbuYLz6hHDEe1rR5W4o9V24LqCtmxRuWV16ELcu9gWuYqw4Q3SN5niAemnGMdsvjh83Dkm12siSihqTgXs5",
  "key31": "6171ioLxCfdPnuvL4bRHNRzAVhn6jjgrQH6V9j7Xrv6dGcjReTV1D23p6sGKUAGTzKeNXhJjicbPo5VrQC5huyfW",
  "key32": "iMuEESU8zdWY1n5EPyNMAbE97qLqkGz8dtNuKimYkSwrMVeh6XkK6yYRKW7sy32NoUwxnEUTmj8k22hdu6akCqf",
  "key33": "5PTG5mUc6g5jo4K3aqroLGwG65rL94gogfk7SB8CXXzRPVxoDGnB2H7wJXQHTSvWkVU359ePpLWn9yinMsE6ZVi9",
  "key34": "3erPBzu97qb9cafP5geu1jvtHtsLcXKmMcudvyq2f7ibwG9iG8iVto1zAkFKArWbBff6V1S2qeapj1Dnk2EdhLvm",
  "key35": "35jX6sUYpxu4hNgvEnnoCDNb4aAqLYLwGTGWgP6m1RYVwEbEu2npJvRKW8DBvYPDGR6rviPnZaCf3PA87eSWWqm9",
  "key36": "m2LRN4FQpMVeus33xiaAoAgosiE7638E8VMHvbanA4sju2dndyxuFEiFmScyNHiYbCgVDTm1fkaCZrw5W2tYnE8",
  "key37": "5qNXeCeZSEJNu816jTpFS5jkjoNmY3jsBLYA6zz9d4P8p5eM21z5g9aYH2JxWT4ZHgaDG4F13p2J2E6jCEfbYXWV",
  "key38": "34QJoTP6RmyB8B398z4ch1xUKzfDuxjE7cktSVdviamHTaHNefrgzPdvFpU3fB3EypUhhFtHWCjnajCBhsvDFXN1",
  "key39": "3r5PiN5Zh99gjfmHrZKviChuqRXA4wz2B4Qw923ADg3Cpa9FxhGhrB4YpVazv4ymdaK6rWXLph2CQfq2FWcazRgE"
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
