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
    "WQUpnAzd7d5nwdJhBtuEk4ti8EKvk5tyRexTpD3sNxpfJKMQepAsUFcyehnev8SVusrgBU4qSpGs3FYsouHfnfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28MUSbC4kWMrEmtGr9fcrNVNtrBD6D8dg8p6GWvvBjyqrRQpzjSQAg66mL1MnomHJfJg4t76GAhLBru2rEQJEtDa",
  "key1": "5891M1ryZPj1BmaQFA2Gvo2fZ9cqN4cs3Uo7DbPJ2ZwAYaKB7Ey1wsB8d1kexRSAbvfhqdCpfiEwdUr6WW7BbKwL",
  "key2": "2eDern3Fpw3HMSPfCT2bqZjRRreiMtZwndy3CPYwXWtw7nH4iDBQeM2TdSkqz9UykhJqfnrkBDphrGx25EZ3QcEk",
  "key3": "rHMpfhM5GAMNDodk81FsDWJH7t2Wv7spTkgB7k426iPBxFCQpgRyW13ggUNsgrG8KEyZwPqnMg1nabyKjmRTqjL",
  "key4": "2vu8epKh8tSUbxuDrH2J5tSYbBFbcDjeEdWfnLMxuFigqqiZdjQMqfSSucqBJ5JdDprNPxtVd7KvEuyvnkgYMCp",
  "key5": "5kT6URh9wZr8RScx8adtZV4F6XHQj3XSU9NL2zxmrNumkCYdpTgzrEkWCN8SHs1m2oNU7wcaJ44iQZkAU6X6Xyga",
  "key6": "2q3WzYTawR1PG63pR7fu3X6MGDqmtNJzJ9eUaFyMRPmDvT3EAVUQ23nQeYfq2gyWbbpKLyT3HYoCs8PbqnNL565Y",
  "key7": "63nLX8aSZPvUJJpEmY59R249xa7KX3MrpPHGk8RButQYjfKoDMuTSBLj5dWNcQKKhwo6um26A8pjx2nJCTeb3B8",
  "key8": "2rcXnVYNS2XubjuRYSbenUcrQ9sADV699zJR4WcLpmJ2Bqh426PPLs4oGwY7C5RXYLKBi1mPH5HQ8XpddF4bqweq",
  "key9": "5tm5pSPAKgCYHTGLqFhyYJhCjLF8eUX9nArTEeUJeNv8egdfZP2VxPhwJPPvhTkMxAY6YgLBQu1zmCtcYJM1bDP7",
  "key10": "4h5UudvdhoJxznMgeM7dFKM27L644VE4zeKWi3h1Zgvu9Zi6ZdsgJVDaaV8Non5skZ3feWwVWCWXSZG6voDYh2Ch",
  "key11": "4fRdejAptWvYbPgmz4uab8PRLBQQeM5Xvu224XE3b94ffQcyufKqTa3HTkXHvwHjttQg3f1Nw5xxo2rKvpLREpah",
  "key12": "JLJP5DbEtNQfMXgwhkNorHgucdDSiuGwC6o8sDqtkcHTy5SXaMdaq1PYwfaXcJQigxndLjDcv7hJ9Rw7UeeYmNs",
  "key13": "5uuCZrAQ7Qc5Pt7wHvWdTQKQd7mYNyWMzWmXpGiNW47wu3BFREVWe1Cqp2Q3TzAgJiyBHW8WWpqbDaaPrcPLvNMU",
  "key14": "5DGe8VxZFdKzugMpXtXDUGiJFJSBA1ZF3zbFFXko1eVigXkfYZj1Uk4f5casinKYiYZqKRF4rebJsULBXfEqXnSz",
  "key15": "aRvpA8x5S9gMfaT6F64UL4GnvjLR28bdyvrfHXSdZmDgo22JxLdC5cukVRtHYn8HRdb7BazbCXuC2ZaDZkvarx9",
  "key16": "uxkC2anSwvctuhTSfFehRzRJY6ApoAn5RS6AKA8tnFU1HE1frHEeqDBsufF4s3n2U3rvcodPSGqfZZ5c1wtFUhS",
  "key17": "fjTCifG623m3YfMTnnsp9KpEuaKCY4HTXjYu8WUJ5VAwJNqsLve46fWVKAViJ7jhYXgCQPycSo1ZDTFfuVhEDwH",
  "key18": "b9RjBDzPCR6cx7vwVxLSeRv9JB2wYUFGGVfLQB6nZuzynVmbTJ43sYQdPBcp3bugTdDXF6F3uvLNHWVAqa5RxVY",
  "key19": "3oaUACtg7sj6Ecgpq9icPcvbdjP7K56JAtK2fnKoXc68P8cZ1gfJWpo2ikLcbeMKnMwxYCTQDEvyMqkq6GTfJHjH",
  "key20": "2CNLsn1aW3cK2TkMdaZBaXFygeWVuB27FDirahcQifYb49ey7Dbsh5uh3iDDxjNrP4CHSRU9YXKookR1V35SbAkh",
  "key21": "4kQYLNtqKv3WF66iFVvqGT5kBfJAqs8imtoikhZvXp88vLoFmLVs8u5UPUUAbzh12Ah9WZE2WyHYgJpVWwz3DRnJ",
  "key22": "2fbiktWvyZiuWz67GwmHMKzFheJRBT76F2JGKC1Srhf1Km546a7k9v9xofGpYjAogk5S3QqJvvGjvQhaQhWLnYUU",
  "key23": "2g4k7nbreR3UX3VVTT4op53mU4sqmzjncVvw7PZYWZEaFDGupyGW3MLuUWBCzu3aqowcFzRqiT8BJhi7JWan7SgL",
  "key24": "3JEH5Gz2gNVQVm2MyXHPxdttWb5voHJEGu1MvrEQkPuSQeKxFfFEKV62eBY2MxXaULJqdEFEj2vHwFahBx4aWYP7",
  "key25": "4gvbRbGNpeH6xKscijqrctAmtiuQVoCfUPSckABkB6YNDmV1uscgUT4w3AdfNEpwBoVq29UsrMFE5WhuEWV5Kdwp",
  "key26": "4YA1BLThMTCG28gXq8GDEi8RFcp7v5L27jTcK1ceDW65x2oJyhTBNLeVZKGnfJFkKzaEQnpKnyhFgmPvHyyAH9BY",
  "key27": "5riaxeLZob121e1XGjDvbaZbMJfHoetTN9RhapGEvzxuXiJ4jciJM3gXdBqGeMziNwmTQjNp8uNShzKp2PqyYNGW",
  "key28": "2DPFQ2rhGKjuGKvS3i3SFYZhv88pRuxJN9djMK9smHM4mgQ5uQtURXd6QBb8oXa6rLo4R62w4kLym79qGhhVJ8ii"
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
