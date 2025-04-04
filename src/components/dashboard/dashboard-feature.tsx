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
    "26QEZy6Rgkb8ijeWR9zFGmqabyLmuSTVmfka1SdbXPNw6ok71xKJ4E2eTEV31DoHCmjkf3Pq1RV673at3ZmsRHA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4agWRkP5rsgCUsJgDCmTZvuVERCjvc83xC7Kpxc1BVL9Q2E7i9JVPy3udVVoqUEaFKfF9qpvubbH23fG5YrS7XTn",
  "key1": "4JKqx7bjkqXH29s2L6qXGpwpzvGavHJ1DvE5PZqZuvWHiGNjzfi1ahm3GnYNBSBKx23XckL5LFhDv67PUMPhK8du",
  "key2": "3XiG4szndR59JkQExpSRMkW5WmqZ8NRbdDj1jPQwzsCHPtpBnYWYXNtF5msRfSSxr3Uc21qzfhQTCV7DCnxAfLzr",
  "key3": "43muJvxFUJYHCiJZSywbtXB44rusTXDJFkhAfMynLRiahJEATHWZF1g45Svy3ish6AhcN3cskQwTnk5LjHJwjWo5",
  "key4": "npA7jPkytkGX1hE9y8f3687L38AD26JpQST67q8ZUeWx5sVcpiReDH53jmbfiWwS6pWYHPq9UB2uEthWu9xzwTc",
  "key5": "3estEXJBAivcJLeib62GCuQUTG78YikHaaMPvNH5yzkLp2mRfXNdUfeN1b1vQbhsiFJAR4iorcfTm7zdqWqB8Uyt",
  "key6": "58q9NdHZ4fyUZzaNqykcW4ibDup61gWQ2BkthqpYC1G3YgKG1Tu3En9k7q5tXAZ2NMrTBfqEXRw4k8dfHzvgaDMM",
  "key7": "462VqZX6ByjZUjtapAACeAD19QAjju5XFtDxxeevzWs4Dsw6nTk1JwgrSGK4wbmxdnnNQGLPsFHNaHsVqaQud6fq",
  "key8": "VccF3NspNeNABi4faxptwx5L8CpL9uKqDmu6w8YYULqPPcNbs6S7Y27NuvmChCUmTFP3uWkF4uLeDVHmc9cGspC",
  "key9": "PXmxis6Pg3J2M2BAzgL8z8yCv4QJWQR5qqts2LM9pmCXAXFwiigdAyuV8Q9BFmHq5MRUo4ZALrA9mbokLMHoSML",
  "key10": "66Sod8ZXso9nWMuFbcD16pSFiVef7Ak7nAhwbNvAc5bkCPjYqbUZGVzx58pjqgxoXy6NxRr4jtXdWXnNVPG5iXYc",
  "key11": "2SALuNdyMmDqDtf4hAPn8BeGpewh5RPjF7CEyMBGRDJJmcjsQLCqyypLNwdraZQjujsdjuRG9Gdy3og1go4PEFKy",
  "key12": "3cU3BWNgihagce8srbKUdkeKzA4dbQLGFC3sTNgdEXp9JQUSNqB8mgt34a3w8gBWVLr8ZNzDDUHoW5sjS93rAvoX",
  "key13": "61sgeYbYX5jp4p9WhjQ7bdn7iq9xaZ1VAtaRw8JnmvThn4SquCszgaLmPS76Mhpo3YwSpe2dGYL6uR6UdY7ei88J",
  "key14": "5D4EP9KfMp7XZydAfvbUdE5Ga61VBgAnimC73XBBgprnbyxucbb1D9rskqP6EZMrvLR3o36otWddGie3vrLKfWE9",
  "key15": "3rSWyM7ZefCXWJoiJkC69SJoTsC7BMHmxQDMkenyrro2o2cNdBV5aifeKd13cVpDFViCd3AYz9DadK2xiBA8nNT8",
  "key16": "4W3SPs9JYuCjH34qJguP1MsXFrgyn4xDg24cGQgyFcttsU6mT9pJXF4Z3SYeRGKbUPvtVSXfJEVq3yYypNThXn4r",
  "key17": "rsNcXsF1MRZ4eg5jRG7UiK5jL3hKV8hPLLJXE7P2RmKz4imM9YoCH3rgRbU2Pa1Eowks3Enqs9grk5BCkHdEtkJ",
  "key18": "24YUVHdbQGgV8DqWLijMWkCYAfXSWSjHzH7cuyfKEMq2FEHWSWWc6XczVrGm3jx4pJuWqQUREkjxhTD1sRaRJ18h",
  "key19": "3GNASY1XeJMHYsuVWsPed2oPEr9dxGkQmBHYLuSuj1TBeN2ktycNqokRupjzMFzohbzWFQKGvkKutJoFw7mCbpSJ",
  "key20": "XiZQ2ZTwZD8PZmNyqfE7KYYfzUwLr11sF119TZGzxWr5mzEjCbgsAqFK4gAKfdc2wHvQ9RGfkgus6tfuMaApnJg",
  "key21": "57WuX7f5oW7Z5KdGntkqprpF6RfarpwDFukQybXijFH8BQf9kA4aG7wjaJMCYGACofstkvFX1HNSGzULz9KYxvEr",
  "key22": "56xeA1yx93tnhC56ZGAZgsvXziZpjvcuh1CPwjQ96jCa8j9uC61Nk5BnsZRRLqbGYiv5PZ9y6gn7KxgCqzvcGipz",
  "key23": "5RLSLL8RCiW9wQnaWwEdJz6CJ7ENCdmTDw7DZXUhYs3TqgPYPjtT4HVARPtHHpjQzFUsjJMmtMxPZBb1f2RYi4Zj",
  "key24": "3RJSZjSjN8NkEykR5tfBwHbsfjVTYAirAQ4VDApAptEwA33dZQEGRBEVjXJBnpHVU1yWyz2Ba9EGnTfXiAS1Ub9B",
  "key25": "Tk2wfQQ37yyYdWgX7irozt1E36pZrLDE4tRXyn4vcD8H6sMSGX5QVqRBu8FjmDZjGqa6tPe3qXadZFfTu9JYRuW",
  "key26": "4cp1Udscn2ARJmVqdhjGkR9jHCavQtfjkKwR1fCypxkKYn8nTYtD4eDNfgt3ko9wntrwLnapPHmhE6GBzUGYmkfs",
  "key27": "45wunn3NQv5phwMoSbimf2mZUSP5a91G3c4bq8SpXrZ5hZydc2skwqEp9ccy9wKsFJtztdNLGcYAMMxBtz1oFnwa",
  "key28": "4u8YqBrBrq1APMkBqvEBEsbJR394FjPSVzUwoqjn6yDDsD1Hsmgt15x5BzwuBZzY2KhC6Y9mVjMEEvjUc2Z64oFk",
  "key29": "14zVW9BqFJUSxxof6mB22WkYNqeWRUVq7aXt1s37LdDe1Gj2mzELCCzrNUhFvYb3NadevkBRXYjyYTj6bhUgJDu",
  "key30": "45w33P4wHzUDZhZUX36pW4ZbMbhncLnMJKUuBxQtKus6YWQxQdwQBqiMjH62Yja1ho8auRpE2D7cQJWe4KstsVEJ",
  "key31": "4a4bFb5Y6yp5UXjpcQCCtTsSzU3ibKPzW3YTEfrYfJz4qQEFg9z4Au8FMGVJqR7VtiPsV4yrHvZwiLrBxndMbzb",
  "key32": "3N1Zbr9tE2zX9bYvTp5oE51ULet41BZ81q8wtpZKpcFdSfMH3hqJ3nwjZ9S8wQciAqpAqbPodfHF6D3b2wwzFAHx",
  "key33": "3bDha2CRYzvyJTy4MNayZwvgeboZnsa9PLSEsDiC91SM9CtCjdj2wA9RtjvArTARWEGDAGpQYo9rp82riZTbqMbj",
  "key34": "5JQpVyCbDZVnheHLumW3Q4uBKWPWni7yg3SCipH2YswUgNg1CVbYtcDo6CUsD2svPsmVwxwKbpseBSMkpm3MvP4N",
  "key35": "5V1b595uzrfKoNu8aRjm3t7Y4KCm67dmbNPj4596d43QwFuGSW3d8QSCsq2HyfGWvHzfd5xPqzUr4Ko1kwidkCBL",
  "key36": "rNV9bkuafxRVis3Qt29VxeaXfX7XYW2jDbr1nh7bnFfGmRTZgAdF18FsvShgnAHBzdjRhhut4s3wQdtxFCBnEAV",
  "key37": "YAkGBp9Diu5WXh92iJC6SL2zMiWAPCdgySGhx8EqbkUc9ybkz4kVkjCXGqJUHYi7EHtuDrGGeeypfRQqj5QDXMd",
  "key38": "4AhooiNKZz2YdLiy1hBWb5cmjR5mnVA4pcv1HpCGvqf4RkbyFqamt2Ke6LL8zWe7eHDNahtYVmFrDygHumtr7VjB",
  "key39": "2qeh6Abv2J3of2oM7tZnUibKMpTwKJ7k8daNqECNVCxn5shYR7QfoRhFdsCxZdW7CtXGJEWGjDKh3hJM2WBcMEp2",
  "key40": "n9bwdS77ru1VNz1ExH2qyK3YoFsSXmYviUKJ4mrWBcbs3FkZqt4FrjTNxZaJoJ4fAgsxbLDDkJDVDdfr3m57tvt",
  "key41": "2k9uWysycdCfBBXZzcFz9borqDYDDPWmjwF597TygDbsYQM6RdSPv8T3LVpVktMTMGA65JbPY5ewdstHiYB1dfGb",
  "key42": "3DpmJ3c4vi3AcFSaTrVF24k8Ze2eRUaAimVWRcL2wciFnruFhv7wvEW314C7cKsSn2Kp4nA3LUkXLPw5V4YpsGuP",
  "key43": "81b3HNKjusQXNPYxNeqU41DGy15SAkuNXpjuQWZ3unikyd5o3X2AzJw7VTpSxVQTsXZts7e4u4GHCVayZU2i2br",
  "key44": "5MYoLRAzW1cMnSvLK7H3CVLSqTp5Q8DmAWZXiSSkzqwXaq4V5mytuWeJHAW48VDSnhB37tqYrg3wDCxdCAKAVw7C",
  "key45": "2p7CQFsEEKSVwPyBLyYp9bXn4Kh4EEok8t8mwrDZH5EfRsJWWotuXJpkzVn9AfijzEMLHiSqRmKYx68Ae3ZXuNt7",
  "key46": "4zX3Ax23GvvvZGE4B9Rqg3kNAQEmbrA2rziVf2iDWHy7YRCaFsosA7zbt6MicMxz62BpJwZp3ZNQUMcyA572Fhik",
  "key47": "2ommDGxgqAZLGGwEFEAt3jPEefwmACq1dUh4t7oDXD2GxPqWMM1PxX1HBVxvJ818g8kshFSxnFKd51jEAnEc8AQN"
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
