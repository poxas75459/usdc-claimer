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
    "coBEVwr8BmqVhrQ5EkwczdmG1SyDDDDaU8RxYRrumi8BGQTUd3itZFZ74bJBg1tw38SohqhcE1qPpt24wwjQP5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y4h5RDSDiyBsdMVQym7sZVs4uDaLvQNbdob9uqRo2MkzgBM7o9L2NUCN73e7X3Ae2wZuwsDS6CENCJWi6n7hgQt",
  "key1": "5mS2oq6JjZsigczBSAW8xCCqpNKpQVqSQECUaeYGTCka6gPX1akC1So1kiyjnf4r59eoeiXhiAurtuQ8XxxaV1xV",
  "key2": "B14XWAKptVMWR15xv4AvHywwD9pZtSvQxkuPT49Z1AnhSWXpXML8WL1qYn8taZqDxgWwt5MthoBPfqBGZrobS9u",
  "key3": "o4EHVMoP3x4bpzD4aAFytrZSVVZARRTys1bftxu4Drkzfm6dE1cq9txj8oFLA36vhEvLPuXAgRV5VLXFbPMTrYw",
  "key4": "4jWuau5GtnVaFFmtThDCYdTfEb3kFxyWNJutUDixRH8W9pUJvoiLbyXjS9Dd1pp9DLyyQvao48C6JWVdSbqpHHwr",
  "key5": "z32fMtimssALRtQ8qt9zzt9tEEgNLfuutwmAgqHWE4Ur2uRCT3qafjmkEzZBPJN8K5Bfxhm8DT4kEuMu3HwRGvz",
  "key6": "3JSrZjNM86NRqA7svYt5ueqLWNmeJV5KsuQM1du4LeirVaYPzAMmzqJLVsoyyFpge2V39RQN3Bf8zRjrbwS6WNq5",
  "key7": "3VH1tNBfzmUTF9Q2TYj3gQUhHzyT2SDbAirdNFsS945vnpiamJuVALGbdDo5JotQttxwi8jSci3ZaywqShjNkXec",
  "key8": "4eR78WwvJaeq9q3G4m4ErE1hK3zdFWA6qX9CajjZBrW1RJyc5HScUPhu2M8V5ppTT8rzJ6aPt1jDaEcev36bFUUz",
  "key9": "2ccbMZhRcohP1kVHfW9hQj19LMudZUVy5fNLgo3FVdxxcWSQPzrnZYzPtU1HqDqLz1u3Y7okRmido1Pkt19eYFEg",
  "key10": "vqVWMZciYsNuUz98PmsnrFehUraRiY143eyxk2N5UbDuLdEhrkuEVt7AEumL5mPhzSFCXYs9pDkJTt6hv8FEyj9",
  "key11": "5TgAxWMYBo4tRbizA2WDipMoA3ssjRGTp3oMayRNdQveDHDNZEdNvYv8vQvTmpXN1vXzpbXq3i5WSSZbCXdGQ64w",
  "key12": "5spvk9reZcGZHeA68PkNBpnqDo6Cmjrx1swsapcyTjyhcwX1UteWc1Net8sotUN4EhSTjwdkdAajtEmPJ3gEpXNd",
  "key13": "5jnAMTw8qYej8PoAKDHxGhDUmuRQ8mKBhGy2GGTPUF4bi93o97GW9XzbFFenytjV3kHbuLo7h14k4KQ8P3pwTpRZ",
  "key14": "2cW5inJP1npHTMYU7PXmDTEKVAy3iKZ2Sweowo6inmcabCGfZk5LQqYWVkXFkSk3nX9EAQjqsKGi4LMCuyiaCQg6",
  "key15": "4wTUFNPzJFEaLELVDK8zpNyiLKW4yEyQTDkrTjKJAHVy4RnAL4DwYDNJ8Kn6iQaZukBP2EtXRC8hXuitGmVaTMWv",
  "key16": "4vjzLWCLjodGrnDakNCx3g8wXBo1pjA7AdDFKd1b2VJyhqRi9VawJqFLpYnC3ZtVbS1yFbH72YC7WQ2e2upzt4iP",
  "key17": "5j4FNBP7wsVAqXKFFfHVNTcGJk6eBWv7gD6gjwNCTmP9D3SXv9JLsFuQNWTLwoWJ1XksyqM4NG7Xsp8LDTrgazXP",
  "key18": "uTMZjcUYghdqpSBn59UeLojgvu7ua7jfyFeNsQbVQNDz7De5zu67241aNtvBqXonFJVfGbyxcGQJ8S1Z8442D6k",
  "key19": "3Qe7DKPw5qGwyCkqvRzHrrWK7uYHucehaMiSLcHzkwJsRgrAUKs68q5kaeKGuVRa5pUf8FaoyHVe3FJ3N6EoFbMH",
  "key20": "46D5jRkWAzstpiGT5znFqBugiyzrnqasXBPDSAYkHuG2fiTXzQdJ9RJcCTpqXZXvk3EzxoaqU2aMeyorh59RqE3x",
  "key21": "65AiS7TQMx5Ftvps2jVdVDG6UzyEu5rsdV3DrM1QK4fXjvXybFuDzbpKzxAR7qvpTj6t1ABacaMDVrG6Lg9Dqaay",
  "key22": "25hYxKek2FyEvCZHu5Aso92Lk9cXjddxhBP72GATXmXPAEfqyoDEzDKR2UEjYD3LcijpkPLV9LY8phbvZKvPz4Bb",
  "key23": "3y6zVgGA4riXqY8k1L4tq26A3o2LQ9PQSz6zV6B3yXNKT1q5CFqFMGX5XkcbAzYasUZDAxy1tNcSG4DP9ZVK8nFg",
  "key24": "5P3e8FpeyZ72Jgzzx5mDg9gzYVdpdGuUj3MvsSkBYagequ8Pv1raHMh6mjnpqEoU7PPRrXM35e58tNAw544sisPC",
  "key25": "5hECqSa847axEqLzbFw4vokh8LsKL3KRwgPGhPvXnaqPCjFpxzbuWcccmxSTNYCXa5eACmpHd4ThgEfQyh2jUbVV",
  "key26": "7Pun4Funi3j3F49ATfjTmHoqMAmB55bj9aAakfXJYLGYQCZbwTwt9D7Y7ngcuzAViVNhQQSPzB8JBm2BepJmz4J",
  "key27": "3vfeoNN2eh1t24T5CT4tEE2p76jofTsdUi5v5Ex6K9JbBZrBzosM4T411qxZTGW77LxZDsRpoyLRMJtyGN2drrwh",
  "key28": "4pq3bGeavse99oCVZ7Npo2qqtXpMt7XKq9592vWZDsgGd5XNxf6H789DREokRSqNeUtnKZsGZfG2LnCfkJbUR8F8",
  "key29": "3diRUGHWvhTRKYY3WL1tr95XCjuTzLzp8ikehSrL36KcTgtbbcarajerssimXufS5xLzEKeu6whZnCKbUKDmFFNY",
  "key30": "4fcCFL3TExcC1hrS1vENk53RCC2DS43p3knHK3ZTmhyp8WoK5QoXWAhhh2sbnNRDtWWc2nA7pxfL9QxDjHNdYXCy",
  "key31": "2XKP7pDJdByeerqsntGGr27cUeaMBna17ZfGe8MN7ayTJArcCA4EBFWTLhMjgYK1kUdBQwh8gJJdLyorDxsbmfKo",
  "key32": "2sDk5vAMj3mGTRDPP5gE24HoVU8zzYbsngwY4zLagqMR2juzqEnThTTwLkRkgqGzsDSxZez4mYPiysW4kMNHMRxj",
  "key33": "2XTW3cZFcfGJN1DaK7QQ9WfaQjtrb3ia9TJA8eU3hgmKTGxeXq3fzkX6fsfSRVgdYcAjk1sWSVkkraRYA4VAURWm",
  "key34": "ThaBX7mLvthtcWE3CFQB8U4QBPZ9MGfBZk3LQ4PoNa2sCzNkpn7wZ8UF51QNopfPN588ncpKRmGQ9stDsPYpk8a",
  "key35": "2tHRH4maBr5Uo7hzMjLxV3HcPn7HdmxPyeQi228FK2r5WytuHzCsTWLkwCuwQFpYfepta8BTNx6ExPg2GXAYZP4v",
  "key36": "22DXS2sXqPS49tCAKw8YnpeRE25EnC9VDWfSVSiDMeT5yg59Bh9oxGUVfdgC8o2JRu7NrTSBGsgDTqYeABHYWyBy",
  "key37": "4TWCLYqwjVvE2nEY7dDnd87t1LMYhCtoCJFi7GZ6Co8nm1jHSdwYpJDhrQ3pzTwHcnuBM14TJEhP53cQFRAUCNTA"
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
