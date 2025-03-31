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
    "3LTSYoWf6bMUrjS8A1ZmRYpNjCuy7VxidShW5kVD7HRe1GCEUDC3NVZkgrVvaxgeEA8e9X8qgEuiWaFdZjjVN3GP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vGRrJKWLrKz9JhTi7xyrjgRJLaEMqzLJuxrf42TQyiAke5fSu2s7yDQD98u7bc6pdmjNGejePTbF8uSfum6symK",
  "key1": "5b69B7XU4S4gMxMRUQ3xE19vSbVZ51F8qqEa98MqJPQuugK8Urh72JCNGHAYPNdvqpEh8S8opgWjYRznhcbodJL4",
  "key2": "GoFBtXmaEMvEAQpNmmjTpfy9TGx8sPpjJ5KwStDMiruhnv9FYP3jKkE8WhPypTS26Y4QXPkmmZUKe1qBAFZ2Nk9",
  "key3": "zWbYPJpxR1XXwr11CJEpZQSBDPUnjdtFxxNTTCpw4sekgGgmG1DYT7QHqK1XJqbLqiThALNo1NLBJvYdZehjbwq",
  "key4": "39NbtBbLudYeDfoMvzZsnazf8c6aQBLQ8cfsF3i4Y9DA8zg3kGaGXBHQzde9zATKymTyJ89by4NwxwPJ8MVSeSWu",
  "key5": "42MZPoQQTZBxoSqaqxMTWxn3y1ALQkoYiFMfchjBJfji3FwoNqPbUojpALmJyX4a8BZgipg5rZd9jbTrF6hty3Ai",
  "key6": "59R7EiVMdnGBXkrNPE8fksco9RhY4hg3TLkeJD9e7KB6gsomHjkf3mHWNeTkELkD6TW42LWqgLyDcp2T2Z3KPtP8",
  "key7": "5rutHro3FfKtwLj88V3bHURG9Jf3PosHapPzW9Htiyiuf6Jzi1R2Bpustyw5nVxoWTYsTCBMSrmE4WZhH1LecbSf",
  "key8": "4VFvUC3Vua3g793LnFvVvHBt2kfP2cnbpAmrvLe9ruR24QV5x8WzKwHWc24ifJpTBYCdz5wyhuJFdpjxZqWtGs52",
  "key9": "3CGiwchhm4xRfa2qL5FzozeNBKYFaF34EYS4fPSAC4sx6Mp5MgZkGD6ioD4EhcA4zpdngPhLNVqZokWHtWaFjYwz",
  "key10": "53TBERuWF9eAtgCxdZLfWFeeYwj2Pqo2uCmNMk9iWnougwDDWTUhBkHZ6AJLAihHzjjj1PYN1Xs3sZXhVYBEYfqe",
  "key11": "4tSfyRW2ubuMKA8E3KDyfZRgva2hhY57pJbQQ7vZwHKSwmg3MueXHcv46E5fQ99tX1yaxKbh4L2QQiP6cAst1jNh",
  "key12": "4wMicszxNHWTWHKXFDur3deVXcbRrSjrZ5jbXvxPZJfM2fUi3YLbFjPfAuZxN1XSgsVNta86cJuj3HLrPbwab8yF",
  "key13": "2qRz5oR5nvXnNsmh5p9598vL13R8JMNNkNZYYMyb2MFYt7TxxW4hoBXirbtYrZkgC2EBdvhVakLe4W4nU3VMebXg",
  "key14": "4AVjefZRpssxaCXhzWmGcJqgmKRB5WM6xND7kkwo7dDtzGkRthPgfuFeG4Es2BCYtt4V4fjCckkj2uqoouMNBU1T",
  "key15": "2M537MPU4p63HJDbRrm6vmJmqgPbJRXAWCHJDFZwYqVoMHkecHGzWX2WprtnM6CBUxBSNFL8KBDJxRMJ4qaXrbup",
  "key16": "1ef5ExF1J1aUmohf61xNsRtP3uWcp2uTa4bWuZnYPaFkXYSDyCEJY6q6fhf1GDELqJuEKXc9CX5RiNo4hQxYNbg",
  "key17": "2pBWKtQdjmUV8ANQRipykUztWVjPFr1M53RtGcTxkcUWE4AyGjZr2ugQ8EvmXMcCoBDV1nDJHo73ihAcWP6V9zEn",
  "key18": "k2tiMUCdekgdY3ENfbtU2C8w2yTdJqrPrUTBihEwK3yjJVogFZETdVbQReBcgubDSczg9SxwGBhZ8zcedfLVPg5",
  "key19": "5DfJ74cs9unGEnaysaA2hBTeaUv4BZCKYAoqYBayMhnx1Sr6e8cMQj8xbcSVEuT84eymwwxSa2XUFtRinHkDrgSB",
  "key20": "2CjELqTfnv5cNoVtv1M2xZuogRu7xZFvKYgFKEEvJ7zMb1bctgYtMomVFcbBihzrmHYEf18QadVa8AWFh4FigpyJ",
  "key21": "48g4PgwjcL7qZoVRL3TLsGeRUYUkboE2PTqvot28mWKVuPmkcoy9G9EMdaW5hYUBAiCquiqF6cGQGmQdRp7H8GjD",
  "key22": "5CPEwGLpfGGBP5W12JY4RJT6to3aExigeVav6x3sBj7L5SMTTbDC7JA6cYg4zgP218P3X9fTC1HoLtMWYtU9ua18",
  "key23": "41FePQTWqDtKsJYyT4mmJzZ737Qn9j3UpPViY1X6ogcBRtF9gsRJYRMMMmjsHeSbRptwurZxPGZ4iFAx53E4RFkW",
  "key24": "3Mjt9EYQpPgCYD1f3xGSnM7B2UGg1LD7KjpGjiaHwn1uBM3M36Nyt4jgJgeXQrNF2FspAhC3q8ucaSPRvB1PvYgj",
  "key25": "7trbQrqecuitFrtRZhzTHbK2QNrFCPXc9VSuVvbJm7ZzGGHf42GUhVjEj4vt2vWaEvfuzY15UgjZxAwwwYoGTaU",
  "key26": "4KPF7Ro7r4drhxDQC87vJJKAKo56rdZCH5tN7fwSZR5kMQR3qQwTZkEHWY62wkVua9rX37KiP2YRQgHpYAD8j1sR",
  "key27": "5vMdcAWYVngVWta5mFtNEsQQPxHiw3hfNYkgDhQFr36ma1ZJVqGCQVP6uXRXBWwPxpBTaq2pJ36Qf2NwZCp4xu4z",
  "key28": "CjfqfYg3EzV1LUHU5yvRVSAziisVxSP8azUAo4fA4CZ4ZREPGrg5QpxUGTdgcqQ32rBcYcu8BA18LTR6vhLk1Mt",
  "key29": "26jTHKfLMbrYtaDUC3ZASa3Vzu16cAkb3patqEJoGBFyH64fDen9JaH3Z4cSqtW2bQHH8pcSyEFq1yWR6NBuGE1M",
  "key30": "3k3DBmYRtfZRqAxiHj7JVsri8wVMYVJvSvLAihQDuHunX7meUAjwv7GcxYj3kQzgowuTG8PvrjTJm7baMzSpHLEZ",
  "key31": "4kzFJqpApupZXw9AfW5LKSXDotjnCDZSzhnyp1X26GMGcz1Nt1Vta844Mo75tPgrK21jpv1S4eLhzsF5B6cG4tgF"
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
