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
    "2MhFjLsnkvsNBmhuEbkwsjehzLGasqq5STTD3grf1ZA8FQo7syMbCgZt5wpTTTi1FwBZ5nesQ5KUAsMPgNtJQdfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SUqFpXBPpyX9SGfc6U3pHyxGcZS7dUX9dgvWYZetFcRBNWJQFL79YkaRTjmSZ68QTCfARwgSGh9mAWw8SPxht4x",
  "key1": "3sr58HA8onA4Vu8TN7cFfUQe5fW1XyRXkrECaCXCmGU3Avv9cpEbSWRVutPfYMi4wctjwauFJbmPJpy8fNEq1uYD",
  "key2": "3Xp8CYfB77UuUXSKBsoDPszNoawjRpmqBfP4t1pgMcipBjmm7gaXia5iAgUiJyNvh5JbtJyM2bZuZmYr7DB5GKRR",
  "key3": "VJgwjwNEQ4B2G2PFML6KJ9mp7kvVeJocsxTyMRzQmRbQfLKotzq3pVaBCCMfePez4hfitXJnVtVqr87DTiZkbQ4",
  "key4": "4kzk8mTg7VEe5GgHv9Fn8vYQc272irdhjmCAWz9PatLRMj9wn7E5yafeRn1iSMoaDrbwvmRn5wwop4P57yH7TYz",
  "key5": "5n9e1XAhStsoZ8bUTxYiKDjsgn7vZ1cPcDAXwtVGbXf8hkfHBAxPHoRPJoWE38wKsigXh5rjUAgdBbGLCo4TD6x9",
  "key6": "2xJUneFE3edwuj3Ea7RGiCw44fXT79c2ku1B5Foxq65PSZ5ZuGz4ABS5Ck8tFPrjX2Vp7TYwTkwtzyXQwoKReukV",
  "key7": "2EN9R95gTCUjqxzdLoZk2vFBNwKMLovugQxYjMdm4TETpJG8fssaFeJkeqxs8XBFzXv3xbM6z4dvhvvDGsxzLBDA",
  "key8": "5MzNCCSPFPtqMLYPQomotcBrJ9j5rduTYLo6MXZ7PexRTWiAB9EZLn7AVrjNLm9jhcbuV9VnqjqRBBrvZrzp72G4",
  "key9": "2b8WkDeb3aJ4eLWoxCznDDBCBSdRBcLJZix8NrrGBPniwMz3nKBWyg9fBb1naMBYZVRCsvLWz3DPUVwbrtNs3Jbs",
  "key10": "VJrMUztvEuReoZ3xMHn3j1BV46h8PYLaNCWjJKiXXG4RfMvH3iemWoZF7wHYCenMPLkG67gQdkPZL5m51oBVsPi",
  "key11": "2XvCPRqcCwBsd2vWMrSQK9K1yCHa1PMtKNB5hJPXrK1SuqExanhDp4eBQNY9tbVLR1B9ESDYAevd76v46PYKf6wV",
  "key12": "4orNr5NKYsgZaggJHu5Hkeny4AokYMWTVGt75eM48rf5Eafh9ZdYj5b4UZZHii1jw1wnvuYY9G8syxkW7FCw3AVU",
  "key13": "3ta7bjeZtu6PfpR8n2wzusWFMCspkzS9JxgpwKhZT2pqoAC25PLehCEofA8Rtf1ojPzXfKhBNBZLHhbYci2hSpqV",
  "key14": "44YxzYWoZnyCTh772he9qEZjorj77ZXLBf8wvck3WExrCvZe6VTHXn9C8QQqy4vxWSYUeV2EtkcWisavg4pPvjzP",
  "key15": "4TD2b1tcVoH9az324sEKCts5snyms7ijgM3rk2PdcEicADUDM6uphjqSogWShpggXEJbzARbNoksWcHKsYP1QwQW",
  "key16": "2rhnTD2YoEFBfEf45idQzvJKkHBWVPrwHmaoBAxRrezLDgv4h7tnQ1C1sJvrq8gDXDLvbmFwEN6wbtDUNS4NT2uw",
  "key17": "5Jogzcbkhz2K9GyiXWhh1ZBhwDYzqhyYUhh647iYutKGzE2pnYLCWmp8hKmGM1CFQVte6h4RetSM3M7zhBQVtw6h",
  "key18": "5rNCTH3EyzVdcwTgZ3xRWriL4zykBMEXDoepurUGa8NDrAwgSSPj7pGJybYujXPCmPbgaxns5UW86GqWSCoxT3F5",
  "key19": "29nW3QY772oT4Nt3KYJMYAWCvdgAgiUDToiifNPugtHJDob5du1KeQCKf2Pm9QatkLSz3UKjr9K6sCqbpdwGwcs1",
  "key20": "5SBjnbJpwsCTwi575XpyCSrv3wDW5JVXLEkTFWZWVUZf1R1Hrg6uzua9uz3Fv62pyWqqFZA2KS5w7T1b1UaVQgdg",
  "key21": "46pviCsZNFszk7Bq6izs19KfzHJWd4YFfphRxZdmQzbDXYQae33kUCBC4RLzf9tXyu2gBZvcNPsvJFxboanWjRUR",
  "key22": "2TJUUPnL6ZJuYxLPLLgwDiWRTS7H7b3PKNvBrYy3RFkke4iuYbbMUtzmUcGrwuF8qQEoEuMyswyw3QkxiBK5w7jj",
  "key23": "3PEVtxEENCUtvqxzqEcXa6QexN4PZhvQM3AB7TSxgsAzH2E6Y6JA8iosKmRw1hjX6SpQYWz3KLPKHyTPTGdp4p6G",
  "key24": "5NGc7hSJWRMzJfqMhAsytYbAXYwA2w7uiBEvsJurUCZkhSQuDcyxuqTRKZ34viu5Jt27kZvUXG36BH4JS38cW341",
  "key25": "2vtNAJ7K91dK44J9H3CoMBotF1T9HyhjFCHrf9myaCeXg7RmmbN4dAdwS18dVqYTFSYeG2qm91z2JqmGH5VzG6Jb",
  "key26": "55NTw2YAFEz9kKK8vTQVEis3YsDzfrxED9PTeR9CfErXfiTwmcQftEAw7Ns1fCTxzyZVwnMTu2m9TexkEdZ9h2i4",
  "key27": "1ASiHiYcyMFD34LbQGU95nRy9PYWG9LoFqEyscoXs9NfGmdb4jARFnZHYbP9UCZyqbGW3tJ8Aho2JZSAT5v4MWZ",
  "key28": "2AqrJJJsyFJYCwYwcsXuT7cr49ykzDWAU5xwbLSPXgk1U4y6zjyi5ZZ4EDWkTY7ioHb3H6AuEfrRdPbjecRSmMMd",
  "key29": "XTRj4LhXapkDkYwaC6X47nb7rLZGFxieRCcQF3eWF8mv7TWmdW5Ueb2KzRfMNNyZczf4ucvh6nWHBqLBBVtBMxv",
  "key30": "4TFTyBDSgfjbq5om3AEZa9KfMd49Afq7s99P1L766yQkF9tPbGZGntqZ1qcPLNdbmyZexjW6WTHMwpLmRiSAvrry",
  "key31": "4f2DJbeeY4bhS1a5oTj8b3NCjvnkqnepWGsugMcYyeZY3GaZk2P3PP4a3BCohcDDYxHjpEpFAJNwJMfK7y3zF9cW",
  "key32": "nw8JAve1pUCW4E17guC5cAKf9xMvA9KTqCfCvGd78RfeYtugLHW4bX9CipCUfcCCd6jmsQf8GKfSZvMLzUYheQ6",
  "key33": "5ejXVGAPgwCAUpFjDxxSJVokx74t4AxqSc1b43mnzVZs2zKFwz3GAFwjt8riuHgQvUuQEamcVHhVdEsMNFQa2DPc",
  "key34": "3krHBTeXuWNxfdR2cNHnT9MsHmARUucvGsmfGHrmDk5qFa7faZbijt6qgMTn1WdN4LwcpujmjViDmNB6DH7SCbaB",
  "key35": "Z42KFB8kG7d1qxa57CGyYSHMn8YzHiidNScRdTEHwWc68ZZVQmqHQck9EwXhQxX7qrdWUR3k2xmeCbv19PmedPg"
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
