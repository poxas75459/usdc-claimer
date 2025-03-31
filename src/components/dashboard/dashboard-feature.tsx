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
    "3NUWW4oDCeen1BLT6YVGk6c8StavZFgVWqrP3HDkE4nxQgoPFgpRuugXVKLCGCyU2sB61Vjdi8ZtAvYP2miSmAAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "At212BuJADbV9s8ER3EX4qdLqoBUuVpgtssN7EzxdycJJh7fK76igQyceAwTGyUsaGwK321TeS7cFthbbZjGUYr",
  "key1": "5mSysd1vU7pN8esqsKfPqxNWeAhX6ftvUAiDEvx7UjVXC9VoE9VJtek9Laoy7eqpXULy5aX4dyTZCgP19yysbJXj",
  "key2": "4jUTQH4MtePfsMTpNMhEJwMmJnwLUQBAQEJnkJnQrdDd3KMkZ9zP5vgVeqWgusyqnUXLre68RVU1WQqm8x3fiWMH",
  "key3": "5bmK3sVs5RPq82WRnjk15XSkh8UoV4dCitXnRsZYwRuERzy7hocfjedixZWY78FRriZyinqtt2krFdVKhtCb8oiU",
  "key4": "344wJ9kZBU3YskVyZSWpcux8hHKwCybnWnCzq7x6ntKvQ42pMmZvtSsFyrjPSjFwLtSEVreBH9Avo7Nh3qsF8aZP",
  "key5": "4A2iRvpKNZsQL2Zc1Bu7BHN4kXEBFMW9CYFKYPyGNqRF85kaSPtHaXANUeA1ZheUt67DLEwYyvMTrLjsLXF7WQh1",
  "key6": "2b8Y6s75yHPvvfzYf9nWdqXMwafX4ufDgA5agxwUugE3FTovmMWrEfojKq2bCsJ9ygevAr5BmyuUndtUadjgiSVr",
  "key7": "3LDsJHZM6PvUzGCpwxyC7XrqCVbj7iCtZwE2t39kykU5A7bJwrjRMANZtj7GW5Vgu1iX5zxw8iuTzFHRuAdjsrng",
  "key8": "Ho7knQPyQJrd3BxRH4ioedYZh3aNZwoawd4gXtzG21UQKx5Ro6vzuZECjW1qTFFUcuj4J2CNkEyrjRcuzM6BRFA",
  "key9": "2GtMytbKrXzrDazWn8YZmfSpMry46vuzemt4s6x8CnZxdwSkVAmHcDSvkgFKpqPN7eyLxDbjUaSfa9Rp7RVnwpfU",
  "key10": "4u3RNEhVSBPykosuqDwD8NudZqLzewpfGPipNQDMZDCNj5nK1j3jrJfq9tKqhV3VDML55LX4rWDEsnqsoF7h7fEF",
  "key11": "3Rp6ejmsEXEbrdTMkv6mxXdmn217A82EpJvW3fosmkUS1jvwhwAHjT6NfUPNNh7iFYqHkB6RKvkz73vjNbo7aKdv",
  "key12": "8p3Q89MZMrpfzTv8FP7283wNPsahFK8vo57rfXkfPWB1nxY2vZwDRdcgQGcrdQgANUsiww8JouoKMnFAmA8vC5z",
  "key13": "5DR7sqePEuUYRqvAcwtgbaedHXWMqEJ5JdvX9orNyRghTVxxGEAiBGHgnN2G1WvoFSBpMvkTsZHewwzDRpqDPZ2r",
  "key14": "5TpNM39DwqSEf7yeek9vsbu85S2L7sYDYkTUCiPEx1cbjGPDnRmS3htfcFR7JkT4QmKexkcWQzTVPjvx8fwHe8bf",
  "key15": "2WhetWcEJfCeC5mTXr6gZyg8uBC4DpCUUNNgqNgZjTZ21RZDHGJ9j9J3YyS67eJnCpqWNTPnhetG9UJGPt62yqTC",
  "key16": "4Kx81ER9h7mriCkvGA9VN6XYFRNghCgjLTTXBXLxrVwVZMgdizsDYnCQcPb3RjdTUGwGsGoxpu2dFNkHVbs8gtEb",
  "key17": "2ZfKNgXoL72QMxEKcCC1pjXQn4VCjrTEKYpCLetpEPGAvMxZNo873f6u1e4YYiKTx17wrqjg1S9Lz92onbxzhMT5",
  "key18": "851EBemnjVqeWnjG6ENLKD4QtjaNdrzYDMLdcJRoKRUhNsqyJiXPtuuPXDbkxGVaZFf58JNurXcfXFuyboB4Z1o",
  "key19": "2A62PTutwGfNpYbykifVwANrncHzPtNVgES2DZDHuQbiLcYE1SsmzRXuPzt24ZT8tjfpBTgLBzTNJPbhpw4whqdW",
  "key20": "3wFye9Ck3FMmpqKbyvc9FJgf88GUTKgjo8G2nPZmV4eBPAn8U8XMpSC3zmGP7e1hdPJfdXqDyXfjw5gtNH3u6prs",
  "key21": "MxxoXX1j4fYoSniNVwszUhzGNSMhj9ZVKDTNnWCQ25hFZDHt76J9JKyhhKLUM8jD7bFgPXeWfKLH9U4AkjxM1wE",
  "key22": "3gqsPh2N6RRxkis2EffhMoC23Eot4Z9WYdiuFNnVE3gYprB2eXGkKRW6xm4woihRu3mZmmHfnmgFB5dDx4hcBvUN",
  "key23": "4VtRfnrqExtU2nWPH3jK2WhtKL9R4TyNATM77HuqJMbcdbY6fa1H2unXFoyEn191x7FQofYg7Xnu1PoQCaDNA7dU",
  "key24": "5JsFGnsaUpaBLhbcoPe56WuMW1UZi6dWBn6c2XE6M8brX1DFNgjVFSRXCAP89XqWtk6wcUaEQki4Bb1yXTkeAR6B",
  "key25": "5MNcAg4x9ekyjQm1VBBh4cj5i1FDBmGPCcDqtYH3WAFxTJZUn3uRNZKSD3zgR1AjM8euDfNNFAM68VzQema5TBfz",
  "key26": "4U8cyh2jXT5fnyNfe4EtfgLzR4Fo7xNEbBnKMB9mbZ2vc5RoMd6UfZprN9E3airgnwrHuiLGgMp6wTY9QM2tAiUB",
  "key27": "quwWu9zQAb1JoKmJfhPqrRnTzZGw2myZsEb9JdiA4nKXLuHfH8su2AKDFS824N9D4U8XHtu6frxgSM9FEFQ6hc7",
  "key28": "3DbgrWzkJtA2LjSuut8ToT1i6eaAosChh257kMaZ323x4D8qXTTRkRBhqDSDu7it42PsgiGoTo6ZpV5b9iejJboe",
  "key29": "5Ga7EJfuotqhhvRV14YmEwk8kQN8E38NfXzMmd88y9YF9xL2A1YHYL6hySRN1JKCGXoJ9gdNdvhP1UmKqJbM6pza",
  "key30": "3VJeQiVjT1JwnfiFTFLMoR7TUtYCMjg4dFZ2aoTsRD5h5wR89sMKPxXTuq4u2FNgeo9LHpMujXkG1mskdXGyvMKM",
  "key31": "23Q1bxpxVikvM15Wub8KH3STR7Fdatdmfv5GVewDaGZ4KqsQw6fZcKhr1jrf2ieN14vbtyFoPAmXr6E1CzwBKRvv",
  "key32": "4Mq1rH1QinP3BHZR1tYZA4wxikQYQopjnxuZc5aw5piNwk1ARPbnouaDEK8zcdvEn7DLfKS9s4nDQmdWjybHDqZc",
  "key33": "3EunrJ7t7Uk7NwZ6MQHz3do2epNmhSzSVQgUBrj51yuZ4YWMbieVT39eyMB4bmwF5SMe3EdEEaqdpHp893t6262B",
  "key34": "ZQphgqTrGbJ8mWLzf2D2GW5b1bGn8GZBsYYqEHHbizVqgXKpTnWYcWWjDbp5hAcVWk1JUdLKBne8f8Sx68DRfZi",
  "key35": "vR9GyDcijamnSfQ1aZhrk8cGSDmJDtr7PMNShVVtzhz3qzxxiZ5aV1Z351JsWZKRKdjgRNYdR4zc4WmYBCv4ges",
  "key36": "dajxAvqiNcHT43ivNCcvFsQHY7FiiVymmtWN6N9vEU1ejjHrYt7BXiDM64hP9XUTURorRzUxLBGMwoeaCtSazP4",
  "key37": "2NtKKvh7q6LM6zp2f1AuKkYFSx1VSm13xzVcigy27NCyAd4WpPEEKPhmTe9n9JGSLy3aVsEkcijp5MRkcoHDG4Lj",
  "key38": "4xT8pQ7EEWpgJTzqKW6J11hu6UZtpSKq8p2Z2gFhpNQrHYwkfme9JxYexnrBEgugtaHo5Eq9BaVyhzRoon36iXLV",
  "key39": "5pxgQeqVKkR1fA33a3vcYNxn5VDqWns4Y1ZC4gXdtPzvDo67YSxfLuKnUA3G844XY7zgVN2VnwY9q5if8ntMPSpT",
  "key40": "2PzPrxqdFoq41r1MQjEwFHUh2dRNbx8KWhvj5YAfQtdcoDfnLiYGKNp2G6Qjy6NCG4wBn1MVhPSgSB9QqW9trCyD",
  "key41": "3VZkJwZCUQ56fF7oa8Lz9fRv6iBAACUjELs6e9dDiDszpyV85FthEBJ1Bj99n3GgrPRESJP9jU3BrBVAS56J6ex9"
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
