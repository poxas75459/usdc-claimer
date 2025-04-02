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
    "5cZ2E63L2Tes32UmnvKtpg6ie3EMMbKX148M6Sx6ZfzrsYi6tYwiaKgLbhGMajuNzG9F8ZuUMKMHpZe8eut4z3S2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QL1XEWdvTqvipDbubi48BKPQv5xvv3L9TFNaakvGn83CLEuw5ioKkJ4vSW8xfqwtZSDhn1LvrvJ19GdWJ5LVrv1",
  "key1": "cRa4FgpihsuTuRsAEsdFLws59Qe87pkLJ1NCqjLPWYQsbxceFJ2ZUYJubxcDnZ5hkYUztHrrxxeJsXxnagEp2cf",
  "key2": "4of5WUuqHE9PjeMLGvdjNBz9zyjnDrRVsgQUP1Ke3HxGfjy5hRRK7aJwgkommHB9F7TZDvqYj9qvfHJwaE3wWQiF",
  "key3": "CfNKUjdWvbxtN1ZDxA4nhtRdQX9fYMewRNq9dVBE7rHW85cUESAQLp4FgTs4yH3RBNUCy8kZaofHPYHauR2iru8",
  "key4": "3GbDtdyHvNUi4TJoD5Mb8hT4Gq4pwACyJgZx1nxWx6aKZzHcdrCkQJ9udCxmCjL7fHeYgQoLue5si1xxTSeKk1a6",
  "key5": "T4J8KCozgD8soYmz6degN7K6mLzimtoVdFVxnXe3y2cQLif9F9Un2AfNEVEhkzJtT9GizPywBAheAQfxquUXYRm",
  "key6": "38oXcjYFNoeWjg8vezPME7chd9eR7TgCYpDN1Edo799UYYsghp6WSP9DZumnYy7NJtVL7MKYWYxwLUAFDeGi5AaG",
  "key7": "2Q5LYZJs633p1K2DQY5wxxMqRHrQhhv5Yn8QtvVFxWXg7dqC1gSxbcAnDhWpyJUXjEYELtHGQgkr9oykxCKhfcFb",
  "key8": "4nevbJ8cX3h5RCyZsrz2ne1oJgneC1tyKxy4DQppxtZWSiAC9j7f9r4otWNpS1wa4itXGZKXSRrTGiJjYDUgxmrs",
  "key9": "2LW5Qm31zXNRdjunG95tRXA9v3BVobkp4KStfEpahP574p3sDK3PvtrZM8Z1FVpcZTEE1Emyi7mx8RWwGSvBdhRW",
  "key10": "31jdKgk3sCZFJsde7jGHxeoDMxoVoqhN1og34fcwsmngvssvr7J2yAXQ77kJrXvJJZqVa77DcQgmRF2FWhtc1Ba2",
  "key11": "5qyZgxpzeXkiHS1A9EpByS7hwNY9CtSJpvB16HMt6qWNEXHmmdDzeyoApbw27Zskthj7JthvUSKVSPWnLu6wt2GS",
  "key12": "5daJNUg7H1Pua3RfgxGvdYEMYP5LhDBYDd1ZbpGLAXv7bhj3N6jC5wq76qwcZnR1wLGqr3fRCK1NoKj1w8JVUFpW",
  "key13": "2zZoVaGL6P9mCThEYW45UugSr8pHN86quSk94BZFw3p73rSaG8iWbtgoPpjsHHuH1suzyY3wn97WUAqasmez8wz",
  "key14": "5uC8pQFbzPM6FveANAUFAM5yuycdkmPLQconL1MMJ2jME1p9RawRVnsUhjGhQmvuktfKRtVsZXSJqBbRY7gMbfRy",
  "key15": "D6ogdHUjGkeKegc1aLUJc4fYjFZbwv3yPxyn9ATewAn5ZEDcBA1xWi1AX5x3RU1KecRrYmjZwq1iYEpBxT4tEPU",
  "key16": "4ftwYkvEuqB7SwRXD62fMb3Eecqaj2vofy1jz4RAwkwnry7XR5QSwcDSXqhg2Z3GDn4ZZWFxqNqzFL5iGb74ceZz",
  "key17": "4d7R1evHuRbBBqKc2cb1wgLHVMKU63ngeonkQxJNa3Z4TK8sj3NnJFWs1PhMi3fKMRJVBi2c4RvwyrmPwtaDi3fe",
  "key18": "3XEG9WvdjjYRChEmWjtSwNhB57roJ49e2YjdgWnnFGyDD8AiECXywspjDjbGeRpq9CacvQ14rmqnz3GEQwAw5vQS",
  "key19": "38Bk5KxBtEtkysMcuJuJs9uHBHStp8G9HxWYG6bxASZVnZ2R31iW5WsBUrvsaZP3j7dLmTGLbJVA491vKJUnwLfZ",
  "key20": "4Qdz7Q7ZSRJmFEfUawXuqQoRJonVXkwfUfsT82hfqkA6QSdQP15CoySHfR8UU8zuTfZ8ZSPorkLvThyAE2z1veKc",
  "key21": "2bvh6udHsZ3YwQCTFs4jCkrRqk9fg9dPaGNy9TksZeukJnq4bexaHtPnEmvghR3gXoxTHqCMWYQw7x7bVkEAv3V7",
  "key22": "ftso6PMWbDu9DUaW22d9Wg1EDnPFkqWbuhMJQWZaSuTse7DPUp2hZGPZcBc8CrdVar25hsAvpALpSLbRPGVMaeY",
  "key23": "3ryas4aTdtdvZ4EAawyJuetK2iHg6AF3izwTW3EFJdmB3QJgWmHGemaAJuLJ3AhzFGzTwfEiTYxGNNDBmRVA6zaL",
  "key24": "4k3kPfZerzUbeJRJuZYxLwa1VxCZG21GpnqipUQeMW2H6LaCEycHnDA4fWK8bsb6vDGZFDfioXmRNchQ5YyykbiW",
  "key25": "4mWEzcyHRCWieV6pfTv6eJ2ejgNs1SGVCZ73SZ7JEqz7zQhBBg8fZBiUMQLd8jwewq6QcX8vXDq3fiuCy3n6SRHX",
  "key26": "58b5F5cqJ86PR8EtMZCJF5pKc4jew6s944jFm6TGf6zFDaFmfUn5H991A66ZiZFGDtzCnJAiiihkMxZ3MuB3EQbM",
  "key27": "31RwWHm9MGtZEBSP39iDjbJY4RUk8hPJ1wPAVj3EhtxBjUQZva5pNbVQdEXt6jS9spUKoXu7Y4jbq3ndDGxMV9S5",
  "key28": "38HcyRMDkWBRYJ5hpJgoZf8Uggro3bQeJEYzwajZedAKtkCXiubs9bYX7ov1WeeyVV1ttQ1p6L1W6bWj9Xo5Zzo8",
  "key29": "3eRW2F16m8VTUyLv74MV8d6GB6f5uR7WN5ycWnfckfzrTDGoMLtNDJZYmBn13q7MveGy6ceBmNvcXKzpNAdafm1q",
  "key30": "3UMSa3D6wgw5qcfumz72BXg5dhHPKRxUAehxzfv6C2HXupehNh6bUY2GeJWMsGLFPRhZPGMBRCQd8ZGhtYp7FLMo",
  "key31": "5aFTfFTJmKwtiUYGU32v3VB7q34ABEzvYBDXfzRxFzGYvQH1j7u9weCsczqp6vJC3fT4ZkW6xckZx3WM7m1TuWbH",
  "key32": "7icEfThoJerGCX1XaNQoPpL26eYepgBLM55Nj5BErbPLELryRwcofVU6CcmigY9nspERSv1RHk6hUwJrQDqdR8d",
  "key33": "4GMx5og5igT2hjqCxNKTocVpB4LrKGDUBYr3wxqskaX2cw4WzCDjxTFXsjjJ64LsHCDH4tbqncFegB6HLZvvxGJg"
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
