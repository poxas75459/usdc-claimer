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
    "CGLEdbrZZ2PXArdUmVPqjNACGe2F24exBnRD233s8LJMfqZUDPW4wubxUrvpQkags4q82hiJhtbJbpxV5EqLNcL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F44UAgj3ZaHa2kryqAqBE35NJXPjJ7RBq56zVC5SkL614Y3rfnLgfr2i6JnT5NJQ2uLg2ZchaC8x5ZijXPEtECK",
  "key1": "5tgcM3xsVmZtiomrWSJ76QFatjJnqLok1h1E8SdnZ8fHbjPfCYq2sVm6QBrx2x7bWZD84aKoCAcou3G81VRzipTU",
  "key2": "5kyE7mbVLp24j2VmFcP2cLUwJXMKwxUUawc5o6RzYGjEj8oVbwTUzA5798SFhVPsVoSzMeG8ia88SeUCy97NgPVN",
  "key3": "2xb9agBmCFmDYWNugAULPRwx6pD1VD5iTTvvcPXFwY7MPMC8VT1yo4mvtTGg1qnTuMGrqkGW8Fr7LXx1JLTYwAut",
  "key4": "32beFNdu5n9LQyuNCQxFF78ioVjkHxMmWE67iCX8agYrpMAEN736EMpoRsqz5sdX4Q1w67jHG4vXEz9AjiHzQGTR",
  "key5": "2SVzZAE5VqmvYLafebKLw5oPC8yjBKhcMSudTEi7owDpKfpNAGTHLuTp3UqKwAa2fC7Q9oxgLAV8ZEe2fcXzdTu4",
  "key6": "4RT1CRwy2vo8EF68jPca451Rau5EaLDLtdTqd9d8emmx76E7TFduyVoVzKhFMmAyFaexdaBiJk4sGCUb897rbj7S",
  "key7": "2qSe52cGCff7mkJppsHGkL5u7iixtTLafMS9rwZBnbY1evDEb1tgyPe4JM3q8kNwxcfvANPi9v7te3uWQVZFfwqY",
  "key8": "2qaeBCNhWwNAUzSMZnABQ6gKNwdFAk7qgQVStVmqXQJUGUNCukYm9mx88HMtYo7cYxS9e3brSenCfzvdWBoDZowS",
  "key9": "5WejSA7J6hPYRoUJRtAvMxyCzEUsT6AvR9T4MBRFfovTsahUJwgqggc9bBTqPo61Vn8mhfWS61nQn2sqj4xCwJJJ",
  "key10": "2y7HUfWBFNqzqBeXwXsngbrN3joqTmQxC4t1etfwZQ5DYnyC2eTajVMLR1qp1scQKZTpnfx7d3EwziZ7xYccuSGu",
  "key11": "5U67VT11z7QiHSkJUkiTvqndGv13LWj6zjv6ASsSD8JbXV5Pgh5CDyYQZJhiXm8yLWSzr4nEtsA4gw57XK6mfpLW",
  "key12": "61tve31q97LUEv8TvcbUs67qHwptdwENWX875ywE8wNUUrsXdEG1dNH2p9LnooktWW5vhuHNaU9QHSoDVf6Spmky",
  "key13": "5oDTZEYVtSYw8RP8RhgmFwzVd7iV5MynJZzKtEG8nxnZSU7Hs9S6aVQ1J6869k9DSCbagXvv2VxZRY6dNaRdPKTU",
  "key14": "nU9k18kuy1eet3k8QR9fBK2xF3Wf76Jise8gGmR4eURuwVepV8QpsQNjm9zi22xnf14bMtwbN6mW58JnpXSEdBS",
  "key15": "4mYVXqZpdbE4NkKujzh4sHRm6NTxMu1SnuSRTTEoWmM2yUBXJ9KK1rmdzegNPSSg93R8TsXBf5UPHAA4VWRSjBTJ",
  "key16": "2YXHt9shRAWtVVJojr7Ay5gpwZCQk28A3qUcs8Y3WmVGxbhyXhKvR43PmWxkYM8DvKtwk3jvcU7woDcm7Rwu6zCR",
  "key17": "RxCauj9yMzDNwsPxg9Nd9sbYp1xPvpkj9tzkejB31pbCi6oQWmAevEABmgr8pWZtNawF7mHjuzMgLFmqw8kQepq",
  "key18": "24PtaexJLDFLVYVJZwj2MGDQD9oknoNqPwS4kFPfAZ9gCUZKxBqjhNFSHU8MzwREPr6TbPJiUdr3pYT5Jt5ZLdPR",
  "key19": "2TC1yEqzvTkmFkELTPKFDhXiJnKYTRfVqurmQnpTQe7dJxPGP39bjba6wQCgfuzYguwwi9FBD71RQYPqF63be1Wp",
  "key20": "5wmXJvwhnigpz7sfmSH7qnHGszuY5iVhX2PvTvGvqPWEX2gvwCe9FkwVGTsjm8Q7Uukr9fvMSDZ6EFh1Fo8JFYbT",
  "key21": "uREuy5DRUPKU3p5waRKwCXJgYkvMpHSxD4wx4LmWHmRc58qyr2GhuDXxg4wCziZv1Uwk3YpBXAH6WcpQs7wXp3b",
  "key22": "411yPLcn8xam3CfB1zXvFwhN1qFGfdZzf7ZFhB9RMJ511TKn2poNmk1ao2Vk6edzoK6xoHTVZoHhE24DbEPYL6AR",
  "key23": "2HeWfnUL4qY6kpdJG6Bin4wjL4QdzKdoPdiwGrhYuPkdGZ8vKCJsZsPT8p8DhwTKrBwBTQJjDRQCGofnrRRHbrjB",
  "key24": "3ZUAtVRxLZacXYSuPqUN1arhM27bsnsQeKCoupFQfVvTRk1M2W1qQat3gpPDCrZSgNdkYVfpp7FdBG3swArTdvvd",
  "key25": "ViCmm6QYJpHUam9aWG1LDtCvyA17PbXkX5SuwxjDFW5cMoQ15f5VDabbv1SNfUepnEXBi1S9V9xK3uc4bczsPgQ",
  "key26": "5iGhfMQgs7ZyVsZQWyQvgz8uAxjryF3VdAB5YCZtxy25ALRhjfMEmS3fUqqaV7Uib31dR8U4fWQvT3oLoUYQyCxu",
  "key27": "4xPEbwedPCkkTBRm9ADfPkkiiUmTzNZcDhgutJMWbHpmfGXf8RBsKcdJ5P1YDYRrq3qksFGCUSPH2ZbS6xygHUfY",
  "key28": "4tuUKpASnqoeyXyJq6q3nRByaTXbGdvbt8tNnpSJ5cqD8dx33Tnmqw8LPAT7C7hAgjUMhQrQ1mm2u6FuDUW62mvE",
  "key29": "2AD9ymaLoGsjdzSyZx2t2BFWDu5q1ZG2W9rqs81pWExovaXNnkWNFPD2H9S6VQh9QkDh444CiJPgsZC1PiPjBRJz",
  "key30": "5zvjMr8yeMTVt23JW59jsrhfXXwdw6wwVzJgxLwow73g21X39iGJy8bNVjNSetstvzES5tx9m2s9VQ7ua1SkN1Xm",
  "key31": "4GjVUvjPT2g4PVDAXuubcjcepEUNmzhUfFSMayHrcepAzkQmevJkXKAriCo3rbFoLawn7jSvLi5LopRQeqbJYEon",
  "key32": "21GgMr6oH93MaorePqs2ytHWfCv7W8V9xj9pQhR85yuT8W8W9BArS3dpRQX9LyPUquCX9erGmZAnK3oF49WAKcBT",
  "key33": "5aKa8i2QKJVJXAKMSvNQ9piU7z1KHKR5LSKMk7w5RgnMEUobHXdJQaek3XJbZMEZevaAwCxTQVisDBFTTHfmDBME",
  "key34": "wKmpUtoDzXHv94r5HtTQFYM53DAKHrQc5UxHh39HUUFKtCQ8EtsCHFASjcwhCiS1YSA4DYs45YivDp6DR5pyhxF"
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
