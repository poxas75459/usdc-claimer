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
    "JxT59UHDRX6XCTyiBUMsHtrm4Se8iAcVnJC4Y4jyuYNE7ptykQZstgdmAen7c1PLY5QngrSRZtYieVW7n4JPGat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64XfuChcu4SqtraqFq53uo99HLRGeLANaQiyBw7JEKumV8hyZJJK7qRQ3WG27ECvvBw2ELeDMWg5DWK8jVzetY3q",
  "key1": "2LdNdtHekAa48A3x4r32bjpeogNaNMtBX1xyF2yDwALfBxn73PA5SaieXrnCwWYTTcyfFjj1xeVQYLkdZoCfJ3RD",
  "key2": "3sNqZr1d6bUfNdrgH2p8pJwXd64JbCxTyigGxaeXJnJNmEjrAfvCJCpZmbixTFLjTvcKsc5rLZFpyxiwpwpoT5KH",
  "key3": "64na2p3smZ3RdFP9Ni73mDuiiSP7PiGGRX9YpkcYpcnHzLX8zy3CdNtPUKJfZDqvb6WpUcjVob4kd6VQHCMnU4nR",
  "key4": "4pQPvLARJrfMr6ntx14gfc3Nb9rDCzxL1tM5pK5BdsV49VE8q4eXz7KcEe7Qu29PvLyVToW3r4Mp822KC9gZUMQH",
  "key5": "2bLSCMQJHCogN7DgpdJavGR766MHCUyryopDeArLLMcUbjsVrT99FUbxNi4nr49AJdWSt3GLT81r7wZvMpmKg4m6",
  "key6": "4yikgSwFKs63TaYs99StS3juAYLbCSYBwTgW8ofUqoZEPPBxNWXrXXv5WvPvdptDdBmYVicUJi73ztZH4VarRtpY",
  "key7": "2SBPJj9jaXxE1GDS9bFR7NTb9DMnhcew9UNemKtVUMo29n7igEBbmUYWNNcuc5qzyZTEaFHShRWC1mS2KYD3TjFN",
  "key8": "3A8PnmfVZnhy6s41DNf4a25AzUAYc76ihuk8PB5HYQLpSzLMgXNdrqNbPUGcSWF8cJFu7EKgd7UDpPjW7iaqmW2k",
  "key9": "3ghnwv7jYGzgEkuDKnga7uPKHj8H5pgwvHV81vLM7idsQcdewQUdemHUJCFmHYuAWkvuAdxk9zZD2LwG5YPTLTfx",
  "key10": "9KLWYzXe7tb7Dvo9zYWJ7G1Db91cknoakjAPRGZFsGf4LftuVXNekpJSxnWLCqmTmBEozN6pAZJc5GHkmcAkrxB",
  "key11": "A84hRKRr63vHU3qDpP5QT3mkPtWazjNudP3qFDxrq1AXUWRTHKUq5FVy2TWrn1nWZcdkieVNrtP3p8j4BxguNSA",
  "key12": "3sjF61a4biyHyEFjAEHcimVbvsNGpcQkDS5jpUP7WgU4RSATFHs5iERFacGgABsjUBcaTUbHDqUNYFYyy6JJY2Jy",
  "key13": "wXcLAakhSqMNHJ4BYYJsdj1QH2DSFHyH4qnjK145x2EjZBVW7zzwdogvUUKdjqgqZytL1iGSDBovcKDNaGrZVMF",
  "key14": "51WPZUA4PRBqWnSV7A2jUPBJg4aYrhaeA8mucugSQugHupBthmBipL47LTPyCC2LiTQ6DxerbA4ays8Wo24u3S7V",
  "key15": "5Uq7w8Gk4MYXiR9Y1DYd2F5Lt3qptTUY9TMdRyVfDRVApi5eDiiXRAT1iJ84JYWriGkZowBwLJo9dXAUdKvB6ov6",
  "key16": "4mJ6bX8wD9mdKDm5eeJJrWYWrfJWdTDMiCHPsD211i6gJ73kr55VPY4QdPyCDBKix7mnDXb8sLn8iwv7eX4eSwPC",
  "key17": "45sjNzX1SVjvTW1S8oa6WJN5dGXpgNCACD4LCcnvTYbPKthQoyQykrXW1qTqYBDJxooVjBzrSmoShqfVVeE4bC3U",
  "key18": "4HHGWXXAT3A9iWNhtajm1SmLjPFjwob8jQdcXzh6zaKDWaHF6h81pNPKVdN8AgNpvLTfBUZ53TEMSkNxtqUdG3J1",
  "key19": "5LbTq3o6MCeMggHrW2bQ3kBr1ypKogFVQwfG7czPamuTdKLc5ncMEf9TpBfak3YwDqSAFCzuutPRW5SRgihu1GJH",
  "key20": "Zs8tB9Yxk9VpexKfPMTdjbeL9L9PgkaF9wW5oCgZzGgDmwbNaL9TmgCKe2M2dpn79r9Ymsdxcw3cXkVjrfoA6sr",
  "key21": "3WEPh6Keo3yCphKZFKAgFkkrqLg9p8e7v8zUz8A44zjp3xD8Kd2imVYZbCPzfWujG3g8K7j2TmsFVErnnzkBnJHf",
  "key22": "5XCEV4HmGGHGmVwtQnUqpcLwZPqkeuLEgYZGFesQ3ioFgzTWrYtFaG75KwTRW4nDGqSkAwHHYsp7YG8JzbcaHbNe",
  "key23": "3AYNoicWiVQaX2pm5XDhNujdQfhf6dsEacXGnj3fVX7vSmakZk3wUB4tTiEATbDzJhoMZetacKUVmFkM8Wac4JT5",
  "key24": "5dRsvLMFNUAJ6ZtfWk6X5Be6XGp2sRaCezVMTrJJh6sgkFB4jay9UudhGQ7bAHeU8uBXHq4hNEcRaNmZ1Lev7MXY",
  "key25": "6zWF5CjDfzVsrih6t7JTQ1r6FFo1VmBHN4TZTUkVRPum78tNi5BijmP3MMTYwuj1ta4v5EmDr9jq1joadmPAxrs",
  "key26": "2SX5hhR9iNLZvn8qzBizVJHjzADX3X9S16G1VGU2oLAPcReA3JecAtarL18a9jia2VmUMn4udL9hzZRinTNj8zi7",
  "key27": "5eJozSqj8XUVAo9ZnaZbhxE7oRH9tv5tBVXiS5DdvhbPcBaSWMwKxYa5pCYWeRp3DcQWzPnzDGuEdgPt4ntAJ5Q1",
  "key28": "3b53jcWetUW49byqFvR36zNQUHbWACuHQRg6xyHETezCkEZCNVkLNDFGX6GmE9aCbR7cYayGDh51u4KVTSWk7fdE",
  "key29": "385LiAhipbbjLPq5AXk9z29y42GUGhG99SvEn7ggWremhNsU7T5MQtYWtWL9ZARB2A3aKQM68S1KTgEUaAejGDvx",
  "key30": "4qcUXrxtkwzRDnieFZxvNL93dvs3WLdgAKM33oaXUsLNQMSw9RjU3tSEfsSesptXuqD9qoAeHbRGw1iLLR95X9hE",
  "key31": "26Qf5ejVjkhq2zwyMEo6qYBKqzZ9FQh91gyvW7fUyJ8WH3Qtthq6xaZMTPsu3CFdCKwVH47tDfLsZDY8gpxKanKv",
  "key32": "4w6YKKWANsb2VBACfcAEptQuHXTEwAR8UuQB3wZKfYsLh4dcvTL2zY6JvFT18x8vcHxXAML8affgLZku6JgtxDMh",
  "key33": "3amP1K2xDq1KFMfodfAAgHD2D5T6oL3So1vWA1eAgTBeudZoLh235awgCEVrp4tPEQvp1hs3cDSJjk2kjppyKjfe",
  "key34": "2NSos3cccAGygcpXuEJxDQi74VQKeQ1GbReYa2B1MS2DhwAjLLY4bL4jpkaFZX2qV8WVPNYtnzXyLPLzFRY6VU1h",
  "key35": "67duBUNB6owgdrMLy4nPj8WKTFuhomTN5ABKo22iCDinjZLRXNBaYyLpCJpVza7wNRh92BQNJbW2n7sripNoF9jV",
  "key36": "3aeYMA6o8cCctXchFXmCReYzw2TQc7DQ2D8eDXCSduaUrFryupLYwaxxBd9BLWj72zWGnCB8cFivecHQBmqnW7jx",
  "key37": "Ge5itkCFub5DDtmLsi8Y8hVs6u622qB2bAYDfVgz3n5sPM37SS7wZswQ6Jh1JNJd9g8PoT8uLUb9vr15CcqtbkQ"
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
