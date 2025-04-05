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
    "aekjyxZX55YEa4eNAbYAhSFA6n7WAyyNekd4Ps5M1fMpb24D1sCC7ecKcEG1iQsYxwvnqYk2yGVFRKf4JLPGksE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8xnUR3ptJY7Xzgc7ZvqmowfnTeQKRzLmbydncmLTvhkMp92QHhhEkaCnjCdbGeR5HmQtekSsMZ3zfc5Z5TSEShz",
  "key1": "2xxEnd2g44URhjnY7av1wST5i4es3gWmLpWGFH4c7BT33StxyQoKCYhw8ps6kd9Poa2DDUCNqiDjiVrUs2spstpm",
  "key2": "5awAGKLW6vWNZNqCxihrgB3tQskdirtENu1rHH2W6ANtxrpDp9k1Zju1u2YK8oevaApyWGLHCX4xWAGi697psUg3",
  "key3": "YCAGdG6XeXo2nqhXBQxEvEmA6vLS6gs1MnmdomXbUu5SDGgQ49xYss8UjeqqxsWxekKsHMEPsBdEtPvSaaMVsbu",
  "key4": "3ysU3r9BjFN9esQUQHNhm4AX8HU4R2MNBwUxR4MmTuWBu9EotTTLDuKa5rbyMAdnD9Y5iV1pVH5vnBtYb2jHuDRL",
  "key5": "J2bWkP7QqV919SJ6ndjn7vHXLucAFnGYEa9cFM23U2Fm5j2qBrLts1odmbdV6NCVnsyYBcQ26QRRRJjjtNqcYC5",
  "key6": "4aJrEgTSpUD8gQxPccbH7exHkb6fueva1ZA5jgYSEQxuVFda6n2QUdMRWU7fgc2T4suBRNkaEwbPzhDR9H3BQim",
  "key7": "5XKUT1vD7z8qYbdedAjsmJQtaiSTxDr5FJwhdKej4F9A87JhdkrYe4ahavcLW8qNxmytkiW4dqMz9ZnGyeWHAs8L",
  "key8": "3S6DQEXda15ih9xjFu7z9893kZvN5UsGJ8UhN52LSPpFQkZgsygkCUhpGgXeVcq7koj858Jsf8MPriExFeb1cSa1",
  "key9": "2aZLiq7jkHm9Wrw8czWhicc3NGGHAK159QAMMqKBEn3rsFmGwpH2W2ymtTcAas3PHkbNPDcbbKGL8MgubNRDh4ZM",
  "key10": "3A1fKPcgvVDjGsPuKzJ4dMbjwQyEeVYRvQuuJGqyfBQAbwim17PFWWF5hgHkvrx5n8HHubMvWK44PipSWnAbpbeU",
  "key11": "3XE4RVkFhk5DRXf9JFRWhcqvbpmmu5aLMEWVyDF2UVNny8hzubpWPgxNcF4oASkpAvAiRi4ZUKd1wRcSZbTDq1Ew",
  "key12": "2g1GMWC4mCaTz2J8m1fm6eKDvGzrh6PNTydPbJao7EtetCCVZWQB82ABH2AjoHY3ceaSgygSXzK2N5fowXjZcEkV",
  "key13": "4qCy5y6Wuyyu84YvzEk59LhpJVjJR5mgY7Gp8d3Q6L8xvNS25CL42tgZBSTgkGd6zCsjN7uJBUHaS4AEXR3C4hJu",
  "key14": "3RWfgQ2cBtCigDXEJL5umPY4zkTPezdb1tFootwyYgykj63DvRybJ52dZrPxBFurJzsxz1hHqXxmSMMGFuFcUBL1",
  "key15": "3GwBV3AykUYAiHU8XeWq8XVu5bKdxr9aJ5GJ4Tx65HZ9rxRd7GrCf7jsFjedJ8qctQzdR1hVvmSz1ZoyvUYdWinC",
  "key16": "61QpmFQB8bNdt4PsGtqjuYhgmS3ZpQ4rzN4MmUMZNyFWe9mvG11TX347eQKJru2E6dZwisrNXXobVjtHthqpuDSh",
  "key17": "3Frn9ePqpGHTQpkei9YKNjiTbtaT6H4my5THvV5SCd6h9d1sW1P39RMfHV4zFzPnnFByNkQjwD7a197KPkczUEUf",
  "key18": "bRtGtPY2ABaANkbifMS476mBmUi9RgSyF4YLUQ5xnLwVwoLigWfkt1XXsY3iTbNz9fCDEqpfmc2b2TBX45i6hHe",
  "key19": "3pP6BLiEy8q9T3aPVTuchehtFvWhcHT29EuPyPRJBsGZBaULYfKSdkeZN7bCnp5FEb8u441iFLCwSXz4exQGkqmG",
  "key20": "wpxJkmBXoej9aL9sDmfYhwF7wteAcie4z2UbPf9zk7a7Ew9fmBapQQrX4w6wo3JPKuMjEKv8tP4riqRHWwbwZNg",
  "key21": "D1Fh2av7jcmzkq6nXMmZ4oLSHkVGcycSQjhe52uzJ1ki7amhS3kbe6ZyUaAUCZY7iAXeJyAryLb7UzkALokKRAU",
  "key22": "2kGC4dtPfLPZ5cgLzeNxvt7ggPJmSPhEDdrtiHPpQWDz3vi5A48MDbjrMXVbVqzu2t6Q49xo6qdKbbsat2n9tsgV",
  "key23": "4tZyKs4r1Fv8NubvqQrfEcNrrpksAxaDG52gDoKYJJLRoduv2e3th7gkkvAKMnhaLn5HnYzEyHXa5oRqd39UWCHu",
  "key24": "5nagNwAuEonBPARPYQv8AdP9zoKNi1V2LMjGEctivrpJPqKSkpLDTEAkUWF9Sv8piC6XeardKGtVANfvgbiuVabA",
  "key25": "8aLPQq3MBwfRhSPShkreQzY7Jw6xbSAtscAk5KU76qfWhm3WTwXMBCNSG2ZeavqnVgXAKkBS5YsjiKyo6fuyDds",
  "key26": "2U2YpGb6Bu4U6x5vGvrVKQzYDZ2kmoffKcqfPZkmXRcZxZJRb9GWa7rUei6EGkThkgfx1m1EQbvuTosvTbxZhsGW",
  "key27": "XL5yVrT9GmQui5cKc2XHyTe7DFyW9x2AZnDGbXpz74SfAqXZdrNDhZBfGkBbbaLqvfAbM94Zw7n9LNeUUdThoBP",
  "key28": "3ZQWPvYLu36joH8VvPVjcqwS6EkpkYZHiqXh58KqEmkbncMH9o1FJgQWwiVbC1BoAHKFGmNvBbp9QBsra6jnnDPd",
  "key29": "3XnyC8swvPC5ytKAce4abran73n3S5zNVn1RBguQLCxhmHJi7oBfb5KBtMHkuoAbn6XiSvkWQ3HRV53LaLiFxbu8",
  "key30": "NtSpcMCTL9VUVwW9dC1KF7DxcXadPWL7JDdzAfqBVLMsF6TjpK4wYL1Foouy8eQFNc74bqo1Z4jMMoJFGzvApxt",
  "key31": "2jrvLpkmyvTAi7iiwrnFcCf6RAF8R1XvxrURVV7uDhxNw8X7M6TZ8oozNoAjaH1UJZSR43BYdDpA8deSa3ARvFVZ",
  "key32": "2d8JcxkRJVqPyD1tcvmx8SM7takSr15zE1kfaVMb2UHznEAAjMz9d6J8tveiBqvMpjHpgqxf19gRBxrfL9bKRT1N",
  "key33": "39MQh8kVc16AQgBeSk9bc42wFWVD8Qz278ct2Rrar3CGuuXBPKzxNpfD7asgrarHjbSUDQ9Ee3h2dHb2paEpY1RL",
  "key34": "2JSmFqmkCJY7V6mi7Uu6UvrQrmeqVQN35ePa6ethWPNVtxfjsZCaRJhsAughDD5SDSo3Jc448yndWSMF5xn7xWKE",
  "key35": "5jgeiuG7zNvgPEDWitTk9R933d8HQ1RaQqSFbr5Dfg6BVBKuvf1Hai5nsB33CfSMwvgWrjA6PM712otDdyxF86Ao",
  "key36": "4wxSNw97eMZmCz6wrg53zXYi26EjwGmkyx24erih74xdczPfJWu5rKqMhmyczNhgcJYEhRBdyyPcAzcqwZyXMJsv",
  "key37": "4FcWc5E8yJhcbS73XV6ce5reR5FsY2YxbVT6FMhgmeZPsfGcfDNf6eFJGv1VCZSvvDymz3v2Mcm17mD3hajdrtjN",
  "key38": "RwNEdrZ37GffNyRUZjAWMdBeT1pxsFJTfbe5hDbp2Px4N6qB2RJBTLuJY4fkG66ZQPuG3GWfKds9HVzzqYFWkH4"
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
