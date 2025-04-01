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
    "5TEUgDHFmmBfszwswvc8pkJbGHEiViYssLu4xo6FfXc1V4Zvp7MX9wHcoqLDYxQurm435eYPN7b5z4Ne2tYTD7Jr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VT4u3yQHTWdr1qR3gcN1oxULzy7Ap66UnY3Nr1k2ts3itGvv8t8LVavGiFap9Zs26jvRnWkJZbAShTiypBgAQTH",
  "key1": "4D7sbVYXg163xewhRFq3QZ4MtZSYiufur74XBMEc9n2gJUZnA5WrHZkCygcQBF9hpimKxY9qVBMqWz5fdfjg1GGf",
  "key2": "2EDXMq6w9tUXeynUWg61vrsi33MnzQapaJbhw6p58e4NEDan9FdamtWgyAWB3YyjjE9BcLqyQtvVBTmSof5jVKQC",
  "key3": "2MByFkPHmhjquuisMZ5EGkTUskhv5ro7ocxN1QJYG4vnfMnkPJtiehfAxJT14puJ6Lv9JvVuE8UFFB86zN7rZurV",
  "key4": "3ocJGuukEZRHL74mgGynxBe1V8VreWP4foKs6Ety4Ae4kQmD4mCLzQrssMZthKWqprrNDUiQRaT62PfYLK8TQbT2",
  "key5": "2kncBqpqMB4eJfPDjYQy7L45d6DJTo1KGGHwgcNFTCMqcp3QBYBWF3KPsjyXB35wmCtjYcWYeuCPdj76RE47Qe72",
  "key6": "3Nsq9vibDrnyf1oBWU3jMHmpNc5CVCWWLz6HS96cvdCTHVUdoMGBK4UjCVsuR2JKhcBpd1qJfX2A9i7ff3kKSNz1",
  "key7": "5SSogKpUDYEKzyyiF5BxJLmt7ZdpymcNzoNhbEHy1ZcLt2KohoBAxHP1EVCM7QpiYzxdbnEnVe1QGWnCA3YYTSaD",
  "key8": "4nuGPmq6QJFWf862Q477MdeFafRxT56JmcXmdRyPMRMdQhjhgQHoyY5Xf1zbs8AoUATioQhY3TPT4YndpZZ9v3U3",
  "key9": "5JFJHEMLmbuweRDY2Hjw8CzQj2fJhxteoBgU7f5215oUhHF1taw2FhXJf4PRTrjo4eGEpgtq4GJjDs7MVX1ej8Ez",
  "key10": "5AfZDvJSFWjf6rFAXLfoqmoHKvVGUrHYTSueePV5bEFMAKo5GXDuoHT5juooMXHi9EmejuvtUPgLXcNXd39hwC5i",
  "key11": "oHzqBxJiHE3aTvc5dEkfgJgu2Gy5kZwhByDwESShCGTAsrSp1CRTxHrWE36bo3M9KptR9DJvGt9i4RPok79Zb4S",
  "key12": "Z9t1nwMCak39M8TzACWvCuoPxLTm7xMop8LVX6gAqL1AkTcnEKBWorBmVLUTtvdppuYRJ3tGJrb8wANC2HGZuW2",
  "key13": "2NwUZgf7czjFhQkNW27yeg6W9LYcjE9pTG8zUsmCRBhPBzV9G6GofxX2kZHHhwiGZFRMRmsr7BAP71ukG8eQ4Akq",
  "key14": "2hLzfqinw7kXLxAxThmsV6ipUYiTLQuhDu8KSqfEWfEU9vP4Sxupqd76PQZabWJMPk1uyH6f7ZdUKUmEup8aKAXr",
  "key15": "4SBTQrFSCAYPQPsqAmwFzk8GR6vHqwDQznoiTNisnLK2eZrJy1moqLWQe3gr3ThoYp7YzbK87pXMYAVbmz3FbskD",
  "key16": "4QVsPMzr9DdwArXC3Bsw3DTUZ48wmQLDkdjRgNaaHdGcDbMr96e2M7o842SGUeDknUR2kmrxZqYzEpQMEDk1hYX4",
  "key17": "5s5gzSw9jrdp6pT2PJPZJZnCJAvyk5KeQGZAK9r8xYkvKJ9U7EQjao57tDhHma8da3XhfqddsBpMu9ET1mCaSyzj",
  "key18": "n52dQAqqwTvHQUQMFShHsG6W4o5qNHVYMMgAAvUfnAUBQoKMpdwC8Abe4L33rRHZWu6ikRjoMUzSRF8sGefPMSs",
  "key19": "57tUKKfSS2DcqJoSBQrM1gFmixw28kZK9YLVnFhFRn6DfAmYdFJMycUzuhVFnchvfEn3QQfT4sngoxADq9msmWwB",
  "key20": "35zFCruViyACJTTzAbcVRkkaViTt3NjzzEKCEs7phtavwC3GvGQ34RTrC8n3qZnsXkwFPouDXHQWPk8HgngrnVV9",
  "key21": "3KuM8n8UsRzSdipkLcQQFbjuy3bBT3yu6c3n55wKTUXdwqhxQbo7UM6obLBFKpmHZXfpM6aMS6pcNjfNPMFZBtVa",
  "key22": "4pj8qCwA9wBr16yQaX3cD96gMuHE3C445H8LsUP2uwfkGWHQWw2qr8fL6au7kiRBS8g2tBxZnoQsa8UkRqx6i61j",
  "key23": "35Dq3BWzZ8xtisLJs2pm3THuG1JuCm9pp72VNdagf4WxKDVaPVyygBQn7Mq2Qnke1G4CoGyEMwEbsRxR1NVgufzX",
  "key24": "5ugbmpGJFbxgj4U2MUEihpFjaKAsw76c7352fwurtKgJMHyn6TEc6H7xFYKfth19CrNBpASscjBHbg2CrCUDQw5x",
  "key25": "2aRrmeexofuhrbS8HVXYtsTACpA3ksqcuKA81AcAiUBNGhSns9RkhP9uow2obAz9kVzGLXHYsUiogXZsA1daY5sF",
  "key26": "2ZjHbwE9Sfz64mZ2Ub4hA9WHgzKNCZa16novvNKmMPTWT74dW8LCrDiVDU9j9D2UMoE1khduEQjFhLQBa6rU62Te",
  "key27": "NSAPVRrk8YZdDgR3YsNhRsn6HWWfo9XjMXJMkcEiDr6xxGnpLKuZfHbQFYNTrut9EJN2RnLD4V8qU6ghvKbdYf4",
  "key28": "4jeRjqHyJ7Z6gLv7tuEkkFzLzbRftiHPFHvKUWPQQPUGQsuDYiXGd3XPG2JDfQoY6REr5joNdeCVaT2rwsH2MEj",
  "key29": "2L15AwNDZW8asPmn9mg5Q6XMa7LcvfVba8NT4FXXtmYPceDsksxrE8m6tKHW697LkGgzBQoZqJev6uV6jB9fwgUp",
  "key30": "5jh78G3gMjLv4zNmAu28GJft9budQ6B8GvXBpveZCTQNX4e6LXZRpdGP7PFm7soQbXhbxTN1eSJX6EcyXgHv8EPp"
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
