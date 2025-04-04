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
    "6dxhuMaEp2HM84wpEN9XKePyzt5mMJuZWFyFu37u1q9yUScur1j5yEX4iCC8wkTrXhbSkkynmbcxxjjqyfZAWUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61fXRefzHDsYR4Uxjm57focMnt56LdrWxYXUpNraTd8ssKGmNTHCs2HxxP2tu7uxGNTkvNoj5z69TAurb9THro2G",
  "key1": "2YYW5H5PTa59gQaP3vRtsuuQXFaHnV5DaiJqvjpPrYEpv5BnifJq9AV8yeBV77s5hGYQdXM8mnN9G73LiAcY4Ta4",
  "key2": "4upJGid5xH8AV62ggMsDsa39wXxas7Bqws4AfvAphUJvfqJEcdVGzXQ34bMp2RLsQPAP9Locs1DqsuafzNBKjhJw",
  "key3": "4FeNUo7QhG9iLLRjmNpuZna7AdjKowjsoAFVV9DgQgh8yW9G5w6ndiH54PzcvbrJ3b7Ap3TauLJcjGWPL9SfgkY1",
  "key4": "3TLr6e8zXtpte52rRzMoxCtEJ9ENbCSstwtewbz8kvdGXTfKijCjZMJnp4wSqpjUAeyD9ge1igr9qjNvRCpu8eNZ",
  "key5": "3ZabeCTXXr5z7ANv8Q9rUDkNDjwBCEEwep7QFGKFAuvSXZx7RbSQpLz3HgqvKQPsq4qbJJfMbtE8VbxshMNRE97a",
  "key6": "5VFsri5oNypANiewW4ghSmGPRqs7HrLGvrbm1QT2edYE7NhvowUCZwhPfEwBZn4Vdsbuwj7b8v1ieFmG26TtcdhR",
  "key7": "3HUQQ1EwvQqZGkHDweNfJCAbJmif9R4TXW36ZHPWykx5CarNw4SkVCh9HssAxbxdXaxQCwgLp2j8xodT7cHfjYjK",
  "key8": "5v78GmpUWLwEVLrCd3gft77gt1sk71FLjb2dD3GczSe4HfpsbKtLr9zjT98chfyXX7v8mVrxQF3fn1wwCfeUgkK8",
  "key9": "5kKLBGxqcXvW2c7d6SWXzwKe6wA9X9muUQtdybMEjZu8Qt24ryeNtGjL97Ur4VHp8AwJebQa58hDm3eWTHsWiJK7",
  "key10": "2VsczxxgWfX1B2yEhePKKjaKQy9Ay2yMG3PW5C2q98u2nmNtodZUfdvosLDuJWLkQ5sQpN4aeP868G1tvvDaMeog",
  "key11": "ZYs3RmeQqkQvuDZyBax4weLkqhXqNvpZi6tXTeh3h1i156uipdF3H6eQBADh2pREAkga2Afm4um9hp6znQfDjYg",
  "key12": "3bKB37jBy1wQLYAPTdYhPVjDCQ6bCsGuUYXqENjjfb6ijBUWZ3ipy6Y6D3eRfyejphVahnUS5A8Z4dFk9gM4gfKr",
  "key13": "2Fv8rRwdZtNiPDUoYuLSLkWeQH7xdznV6bnYfZnSGWUBrz175yzeiWZvenEewzukHo7C6mLrJKy4HBv9NZwKsWTE",
  "key14": "47WBPoA73sFT9RNt7UxCWrg7zRTAGAau7RLoAWio8upJ22QzPv9J4nKgBGDfKLkp4nP34S659nBnGTgchnTV5d6p",
  "key15": "5ADfwwNhs2Cf7pU1kk7h8cwGTV4n2muS2o8Y2kFPAvKQKkxCxJ4q7mzP25J5Qd7JTL39udGk9k5emLfjTyKbjdVH",
  "key16": "4vfzF6FczBSi9tBXKcy1FgzQ3wC5gwcoQLfgY9uCLiM8PNkQSs1o4FixtYRDdq25YJdsQAJFRk7s8VNkVohq5Rhk",
  "key17": "5wERSq67R5uBc5EaaH6jadgMKzLGivzNNyuJD3aUxGX3N7VBhJm5FNFMgjP9k93xvbHTqtXbas81eCfSs8iEHHw8",
  "key18": "4uqZ43HfyCEBt2sXb1aRgrnw2b2LooNh54r2m5bfRLSZ6SLTokJMvmuYA4dQbpHz1aTiwUcVk9s9RjxBYY2kG619",
  "key19": "5ZLGGhNCLPtvWLgXbS4pt7CdwRS5BsMySVdKAxjA9dtwhyv4NUn73ydJjMgyK5ZVtWkiv1JfDDyGAhPEsbvV6aww",
  "key20": "37ZG12GJPpCprpi4EYsn7tY3hd6y5LJhEM1o4aUHxf1qyEqRfJtvcPuP9D3aMPuAG2RqFrPvE4HLY5UW4eAHvFQn",
  "key21": "5RG8yUbwucrJLMdH6i4FS6d8XnFkDhj8drwnVeNwSXq1E9QkuJSLyKY1iy71fJNCj18q6dsiD3fF1DYzBCq4CzMH",
  "key22": "5S3choRcK7r82sFBtn6mHdezhPtQNQ1WYCL1kzLNfRuk5qVZ5XaxcqmSakQFTdv9mqyZUSP4z4XxRFefscvwVebH",
  "key23": "27B63dEb1D7kGUX9E16LuDAnb1ghEpLsbpoMF1VwhoYALBktXyaKMhwtNS7MmqJY3RCn589rrSWcg5FeoNbTEnjU",
  "key24": "A4asUVxm6iVntr3FcK3TafJ7o6vdZAJR1wMkUJK5GKu8Zx97mkb1aoTEWZXahwCmqX41ex9M6N7VtJpK6ZJQrP3",
  "key25": "aQ3aQ6qRSJyi3D9GB29cB8SLwyqhauT5kD9mbBbTviGuYqtHY2YaPcu3qmTHD7PAWz1AnKGENuMrjhKsXeGHkJQ",
  "key26": "4XUujCvig8Hj1XvBQaAR4fUNaftDrGDMDK8ZTEwzXoYGzwS8Xu6jP3z5Sb9S6amN89ZYPoLMZEBUQbR2xJfcwURb",
  "key27": "32AxL8Q1Z7Yb9dqrxKS6m73NXZsca4owVWCST1YgbY7oJANc8ABUkDrvAMXZP3tJH5RJBWCoqh76t3uXRpnNvwML",
  "key28": "3evcUDybAkCgX3PyfCFtZFh5k3FDuKsDhWnwHADV5iTHZFXW6z58FmZ4jHYNLEmh6hdunzcbEFqRH1U2dKx773Mr",
  "key29": "5eMtU9egELWbFWXfjqJFXJ8kEyfoBook4ENpUKQ83YPHGJxsufpnRYTMatBq1Gg9MuHwWDCyHEEcC1K98iopXzks",
  "key30": "JQzMVoZrbU4iBuRsH7kE1BjaTUbFSVFX6nuFmDopSZf6K1i5j2uwa6nV25wUYtyHMEhggdemJTKmWi2QYSAj1N5"
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
