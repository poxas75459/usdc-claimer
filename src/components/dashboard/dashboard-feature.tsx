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
    "66264ADpCvXhz2fSBXKBpU2TuVxScS9Ttk1XBXF8wxgrdDkTgTAviwJWjYipH7YHVEDPRPt48Lvkixxg4euKjGdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3paunXJETP7cGPcJjyNWSqq6HJYqPucm6EfF92ymHEMZ4Sh3JGce9NWEckQBGduXmH6yMNoZSxE5fXXLEfNPzYRa",
  "key1": "2qfKcPF4en8cEo5fjxv6McNdSs5wfN9dezkJDFis7bp2asWyRvbZvLtswExhTdSm6mh3QZaV2GAqvSnT8fNU7CwN",
  "key2": "4phcLcQwEuiUGaPa32zgsQV48rZaEfZYTJP8dakk5mRj8yCWsdJzLjEM52AT9iQLzozdy5zyFGCbuWFM8EDuor3V",
  "key3": "hw5ufqoJ8EsWim6rhbQDZXQSXiANz29YTs83Q9XCU2imo4i7YQqN8o8tZs8fhbF8xYioemB8bA959cSHKWpMHJf",
  "key4": "341UGZGdBCDUjTdNthEJEjEsFvA11yFi3ddkRza3tR75KM4v1p5hSgppkGcBRT9UPTF7bpbFhbfscYAqJ6pzraXW",
  "key5": "2u31zJbqHA6jXxeY74YFPJHeqq7V1zWNQrdsTXKighfccPpty2wzYMnMg4TCHDdZfCfuhePQ5zUe1BB2kobsx1Kt",
  "key6": "5HZ7XAa8oeDxrQNvD3b6rAgo9Ye6QcERDUqPXSkFvjyfcMsMVaFd5YnnD7iY5ZBg9yPGY1ThB7GN5WFXUc1p1rKa",
  "key7": "5tvc2pXMG2Xxb9t2svAAxyLgSCdaURREZq8AnSRfVG3fuq9GwzmE6RRem3hddtAbTC8vrQL7JzwWgq3cuzgJxacK",
  "key8": "sZBFp4yfa8vg5zC4FkxV4AUm55XHTgme5L8URBNNeYqmUXXgoEpH8xFVPVjtu1jHxmqfMXX5yVt2nc4WQ43b39S",
  "key9": "4pUZ374HusmHRan8nMeFpfZPQ12odM5XEK7VH9KtFGWHXFCWuFdAFqrQGE5mfQpHj2JS3HHK2YBx8XECtPapCGFx",
  "key10": "3NukJpwWbWRiS8Awgb3iVk3t5NxrULD6wfPTUT1RpeSzUAaNsxEgDcYpsbt5EvLwe6Knr3RSoqZUFvk8Qo2se2Yj",
  "key11": "vCjtaz5fSqgBzYjquNnHAphoJSChTMoo3VgGUtRC4eHfBRDhhmSRb7W54jsNzd2qKMoJohC78z2ZtexBvfpLrG7",
  "key12": "43knZ5b372fi7Q2M7Tqs85rET3LP9F6QS8S2JmBaQtFEK51aaqbw29odAqFPiM2pdWNQ2RjbGyFRPcfjSNLqujeQ",
  "key13": "21LNoYcr4bHErbUS4k1pJjSmb1NMcJip1c5a7en8P5Tj7kdPCWQSHmTJ1JmdNCCrr4JRfE1M2p2hHG6Fhj6yhYVR",
  "key14": "8cDYU8RmTaemhcStRg2sbonhoWqYKASqjVVod7cxYQ8ao3QMF26S8HyZvV3KGQEhTAQAdYYAjx56bmtp2Re2RFL",
  "key15": "4TdYRZQJrGCYFJ7wBAx8hM8x3DZP5cHZyjQD34h3GZQqpwkKrDJuAFUUDpMJsdF1zymvQqtBNkb2QsEeUcPRQmXK",
  "key16": "SME3jkc13Ag55Fn7qUfmaDtv2aofQ98HGjc2ZWAeAP3ffvMY1iVfUxK4o27u2GUHRDAcNDEih3N3ziPbt8rTZNC",
  "key17": "5FAqWxC9LEsvA7BnVZjfjxb8WXrvzW865UCfhgRMPGfxVUhynT3xPmZpNeB6VJp1t7ndPZpoC496E1xG24YKgViR",
  "key18": "3XRrKAPZshdsn3KX2be5eyPxe1Rjqycsj2aTNLXaakEyNqM4Ga3mpCUTmiaxC2yLn3yZKFcNq55v9KRoqih4arJY",
  "key19": "4zdki7sZQ2S3HfS4jp9c9eT3RBbhtULZLJkKjX7rrS13Yp6deggaNNh1Mf8o9HsHhUMtRxtFghz6P8BpJHhyvsAg",
  "key20": "3s5dePBpv7iZqJZgqDuq4aJSjHEyiobBCfzPLpWQ2Vt16k8euyPsnid4ZVvgWoAj6HUtHXxT6iZr9Up4QyuJJBoy",
  "key21": "QzAH7dc5g1tHtjAdXawSrv3z2g2ENpoQyHjjKZ1yZChGCWVEcR3VhENpasDYZh5CQUS7AxiCVBmzzJi69mt6gVi",
  "key22": "2tVC7ysNoPWu82bV5XsB13WZGVwH4E2HYmxRm8ca6hTphwjw7gvrVv5qpvWsYeCdKRfVoDZZzLPAgpJKBhTMCmAC",
  "key23": "5h2mJBzMYh7XguWLvgFcD7bFvQE1D5Ss9c5kSV4kAQTqgCzzkYsxVvEDoi7iAjNbPhGEwSnTe81ZC6bjoEqDWU3j",
  "key24": "2RabjNW9RMq2gGUuqyserN88hRTbhJF5HkZvt7ch8D64LSJn1bxQKVHzSECqKiHLosMmjSDfN2jpYrWbqS4uVmQd",
  "key25": "zvA6mToWPvcge4pwFY33HY6aMphNUibT98yySK9XjmPZEFEAb3cCjUDjt13qbL9beAf2soKGMJZgZ35dLkABTwt",
  "key26": "64cqhM2xCD6qD6yDkBkU9UAGh4y2wJ3q5knKAVjYeJ8qCzMidf5icpPKutThMdLL7puTbsKK1onfoTWsED6LHb8u",
  "key27": "2hWc2Du7Lkzqai3wv4PMPxcaYz3ytkn7XBuYHuT6zSvRz6kwdXyrbkcLdveWo3sF3UzFfVHDbuPFDTESSaCY13Dp",
  "key28": "3BzuTN9kMaNH2hur2YnGnahqb1eUs1qeCq3rsMzDQDdTVPDk3kpZHXuHWSvd3cigzioyPhmrF6wtxtybWykrXdk2",
  "key29": "3WCqYT5Myyv4m1MNtjeEKY27ECuxtg63AcTao2EZv11qxW6ACZbnwaA3BWPEXz2H5cKNwQEnXcGp4QnRPEi9Sx6L",
  "key30": "2DBCGKuwvipPiULqvp5jg67qAGorFyCUL4PUeXMje6ayXCbJLTADXwNq9DcMLEQjiMqKTPBZvwvJwJHHzZD2MdzM",
  "key31": "3iFqQYYabWEkQnbFAHwr8Z4wEm19Kr2RGxUWNTL9S7dh24dkYPWFzEHwgyfqNAEKSDCpG4fCx4ctRHHD2tkq1Po3",
  "key32": "3bz8EwtFEg4WfABwrcDBxWufAxrsaCzRTxSVHQzB8Q7WXfnL1kD8Bu8JxDe5mZvsg2dmsGbq6Pdps312oijzD32g",
  "key33": "45Md33kpUMh3A4bfMbgQtfgjbWSjYVkJJKd7Y6kFkzEsDjf2Xi7T3zT6vVD2X64F8KvSushQkWtvJXxN6srsKffb",
  "key34": "3USr7yThDUccUBwvc8qHsSjWkYWwftAFMw44QT76NGDdrtXZz4EjCKGiQdB6pwQpYgSpPJGQ1YZnbeXNthZ62md3"
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
