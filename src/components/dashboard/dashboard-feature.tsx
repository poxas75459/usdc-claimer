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
    "5gYD5QLnsdWy4dXP7h3nQ8dKmGvpFHmxJDrpmxrCcheghF936QT6dgt2iEsPeK23r47LbWRNTZXEKZhUu1bTh8oo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47rSr3CWjMzpnRmikmEgmzgzTHcXUPfZ2spcMAM1Pof3inJXgw8gqQPG3SDLwbUgEu2RamCwK9p4FcvgJhYpUq7C",
  "key1": "5c8ZPdq2vDZo6skJhALNyXc9QhaRVM8QiKoCYeLBNMhwDeMkysCSYYJro2Ggg4cTDyfKRPvrPrsqDHdeBnnEmQCu",
  "key2": "4hFXp8kk6mcNxXxd3hdSVvT9A48HQBjvYw459UYxfjDJbRpHpVF4xB9j9QyaezzQQXSqx1fCaqUMzYtccWfDVzqV",
  "key3": "4rQGM76kPGNz8ZVYC85B13NAMg2yAmTN1zNz9gpoRJcY2kQasESGfFiEbJ8SRn9vKwT4wd7Fh68UTqUoom1SYM7g",
  "key4": "3RJ5RCGSWPN7RNizGqJ1FFNEGznZZGDaH3zQ8uktmZhqLFtjHTMUAUcCify4NrSDAGgk4LiuYzbsFyiqXoAfnaU5",
  "key5": "uzD3EeaqVoyb89RV2PYJnaSCc9M6553uXeTbFx1iLKaDnvZZf2EFWaR6qLHsCfhVqidRy2e3XHAAzUyv3vV55wQ",
  "key6": "uooZt2NC2Smp3Gbz9fdTwPLLpL8erVQUc9U6dS4FzrCqwTE4aZ3THjHZtFLm4jsAxR9ojUxdMijRuEBZYfHTPph",
  "key7": "23ZEF8S8CNmsEPr2NBP8TGU4GuHkuyp2iCAyyUxPYnKDkdY5Rc5fn7tXSuVTcuwWF9g7CFCNJtzGky9oypciL1Mu",
  "key8": "2YuEj3Xg7YJ2owjs73KNqRuHdE9md8txWsHThso3Zeib6oe92t979fcC2jRXa5oBAWdoFBWG5SUUT2CYLpHtQ6zC",
  "key9": "2VNBmMfu6TSGUuR5TMdJEqEDmAD5vaaQmx1MFX37Q8KNvXGXgdabRiG6Yt48pWQXHtcZD7KAzmJLpvv2Gh7LBXHh",
  "key10": "5xt1SydqgUjGwRPGtpWjUz1brLdcrKeV2UTUibKb4qYoN3vttQkkmPTAC7y6oFBqT86uNhK8yAFhDk11pZg2Bat",
  "key11": "3qSG8151F6y56S8rvLMVymU5N5JnHMjXRzkjYkMNEge61eV6iSjyFUGzrG4kxUpjAKQfD5Y6PNkPSZvTUcDQ6kXN",
  "key12": "3c7c8FP6i42R1uv1S938XsYi4g3iCUxfzoVFGeqvbsB6wpP8z2fznHHtB63keCrnUQm8FW581jm2ks7kYQE8McH8",
  "key13": "3FwdskNoizuTUxcK4x8ajqK5dxcYrKa7QHucXy5bc3NSEjT73qyJkrjDSpHbzKoduVDmt6sSsAPGC3jwGg4k6Crm",
  "key14": "cyyBbdERg9MRYZqD2kLUPpUyvBxKLbajAZjjaWXER2vJUWPrQcR342doJeG1DJoRKqcrzmCGEqGBjePRGhFvPqx",
  "key15": "EQzGCJjFRZbKvzUFC3GKyyoVAxiQiJjzYa8usxqVujFiVGteomTGSofeJ6C8GxcMdxcbVm9ccCERjj8UdG2RNK1",
  "key16": "4iaXRdUrmnE1Jj3kzfeANwbosx7NDfgBbQbmwJGAMAKjzCWxtBDy6ADLbGWtoBTrt4KyEkVvKWAbmtVN8hA1qSPC",
  "key17": "4rT5ed3CQx7y6dtgHgNqvnM9Qe6pgGYJ9f8vpr88V1dSnVft5LWw4QjXtw8snHKhpR2X7nwHcu6EH6Kw1UMYVUvh",
  "key18": "2TDzeoQ4Z4ZZhxkhRUk1TDLxN1bwAbCfLMA4a2a3QocbdcfCZ96dKA4ACgxTfPbtmHgNtfUszS6uUsUAfEf1tFkX",
  "key19": "3kMgdjAhfguUaxPb38NaZ1QUojd7w6gWCnQMDGKDQNrnmZsZGAmUSPyAGL7w9GAPt6Do8Vr6yGyfvr8Pyu5zER4q",
  "key20": "F59RknWH2CVAsxscLaVQcjuXTHNHQZzzQwxvuUaHgerJ3YbZf7CvpTFSdxb1gDo7mBukckkBW2QJdShbQVES9r4",
  "key21": "2TRSNg4KhJaTLsJMg6wMU74jXiBixQaE7bBLB1EsjqorCWkyZbi8XNkZvMbsotDakAeWmkSRG33WTJ6nqzvgVCxP",
  "key22": "5vPSCweSrGMYCG6fwF5EYY7Jr22MB3BQuadt3J8CWWg87EUz6ibhWPgEv2fcWR7W9fZ7m8jMGVZ69ipSkEcKzGa9",
  "key23": "51cRCSUvdKcbVySwi6oECZFf9bnzwZwJHvXkbDHDS7zN9NwFH2TRKYvpcGWME2YrxfoTAz2evoY4MPXPD3a9SLB1",
  "key24": "67PU5FWrUmgM6pk68oY8LyYHfHPEmdp5cs4GAP1sAnLccHBZhjYM1Hs1Y3nsLnjJL9mtpy42dwV84F1y2rRKziSN",
  "key25": "4gNwfdPqzCnGamiqG7Rm9Su85Ar8mZMuFwF5JNeibhzFfLYxo4bMzUu4VKoYbAwjxhyZaYXoCNyHgrf49QjtUFmK",
  "key26": "3jdixLenWNMWvnT6WwqgcCxTBZTUiRKpUn3xfN8JfuVMvgPTmDAoJWzkk1QCnEwNZCJWz9H9zc54C6v4M2CV1rJP",
  "key27": "476jWfKXbMePgq5DAzedF9QmMz1uLYaca1sZGGLo7TKHH5bkxB9cZ87SViu2mS15NEUi91wVkArvJh7yzvxvbGjC",
  "key28": "2jL23aqewn7szLVZDDLSjFjPxpSkqxiQsDDqr1gUGkTka2jKrGahKGtNQBDvcf8B3CvqSLSueXAAyer2k4UfNg8h",
  "key29": "2TvSkt18Gsp6QCZyiYsYVSexNFYsckXbMqcd3ooYi1H7LDdCofUXo65oo3vuB7jpkdSwefgwvunQqyH4V6DABd8E",
  "key30": "2Gu156uyCCjvTZLs3d6yZbFJ4JS38bjCmrYTMgCuwwP7b3uqbgnWAKS8zMG8ozeHV7ToeUiq7aGmsnWNQQApjifV",
  "key31": "3pjqjeSVhtPruCpSoTucp1ar1stq6GogAMGxkw7a4ovsDTGup3jD9DoZ19y4YR6R7gKJK3ryYwdSAkZyyDYiwv35",
  "key32": "5D8VF1qx8cPCqSEBYmKprjtUNYJj9tz4FosrXSpt3kdUaRzZRLd44fHQ4xX1UjanABf614qqDTcxYmhxKX5E9ijz",
  "key33": "277cffemvX7AeJjpEQ9yJTutbTp6Z6ngcvsPEgBW2561a6TfNZVtTXSuKUn6zxfHtCHwVaFFozmdxfz9BuGnGgxA",
  "key34": "5iQ3SYACGTcbEgy7q5UXbhiwFMVbQbbY2T9MXCwYEHnebZ1WBn1VrERB4ZKTsPhZjM2ihFQrFi9cooajUzokEjHB",
  "key35": "5GMZ5mRVWwcd9BRgGfaQGATCSyv8ZpQmYg8js9QdQ6FTDH1ULZsiMbeGjFjTnofvEA7DVautsVGhQBMscqkWNtYa",
  "key36": "4zYf1PgfhYQF1AmfXsCbnGWnsx4vxB5CWsn5LK8xsmENFo6qopDTCsqpKEfWRfXg8DW6dFHBBLSnGzCWdVc6QsQC",
  "key37": "4nCqinuY6EhNzAJHhLQLxrJKjGis794hv4fNyF5UbqnBQFMQ517cV4qQ8rjKY2CiP4pUj4rifDFUrVCzM4f2JMBr",
  "key38": "5umWHtDGoD4F39SYj7Ppckq9ATJ5YVJ3eBp2pU3oBd9TqmmNLr8pgE4UJy8KfX2SFGARx3Woq9CVwFwBj6dVCen4",
  "key39": "2eNX41QjvJk8fCpA7WtvDH41rkBQ8DYPAXkYuEQPHaaKXTkpeaqSLx2nZNvoyHAh5MgePDQwCHhpj8JMazhe1vRr",
  "key40": "4ZMCuctNpBUu1yZ48A32SkCiysxB1W4xtfkzWRUkpCmL2KMCpSpvPQGhu9UV82i8o5J4a9M97oNybBsq3ENgyJ5t"
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
