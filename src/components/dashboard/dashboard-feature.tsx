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
    "5CQeRsrBEfEto6CRWMxKaNQbzxeVHccz2KXVE67p6Q7wMEhUjNj7tjWXR8A8aPF6g7VjsDxxqKQsyqRiZJKyv16J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DsbFJ8tvGc357LCti9dZuzdd87sJvJnv2AwzLE5g7vnPC6qJQjRWj8Mbpe6LnfNbpCWJsj8qZYFQ9naSZ3Z8G6S",
  "key1": "4e1zWauoRHmFUJpmjGmtiuEQSfUPyzstpbS6uaUVWALAw8LQ8iiPXvCR4YsyusVMT2RRcshdEYX2vmZ3HaAsDoFy",
  "key2": "2F9yiRPKkzdGmC52A9E53VYFHnL2AyEoZP55uMb5PGZQv6b781gCyNqsDd6jgVH2qmNUYvXzhnvSEwJub5eLu2zJ",
  "key3": "5SjrjpRp7aVohZEJrZT8dZyyVLpPY78s8zajKGsk8ZVLNNqJgdK4SrES2vYNZSsa2RaTdZq95bmLhB5rHQ6SANKA",
  "key4": "2gQsEWaqpAK9iVuERytdVYPaCGPioN4DQau9gTMQUUAMZUPc1X9hwugh1VW5jFjQjAN9nVcwbWDNXiChpsoGHHDf",
  "key5": "2H94ALUPexRAW1Q2GHphYLN2JYLVmyk5PqRrveE3kcxnYdiduztkS1HG7s7AzYXeNbYXvjRw6W6PCszb6Mc9mQ9P",
  "key6": "3vdqU1P21aNvupmu726QxsswKUVDL4A8Pdn1fcuEqAdHCUewHZCCr7YpzApfd7EYxkinM45qJRxcsadR5vWtFssC",
  "key7": "61DhEzwAmm2kxEWZ7tqmC3Ud9asisGTWeuKqnMtoKYqpGQgTVcT9oQSrnbrKZ4S9RYhfdxK9vvqSMohyJzNkMnbi",
  "key8": "HRWCBWRBmpnTZWr3ZCDQkRvp81HeZGdWr7NfdViche3qQUkzfWT3ThSWWLbY7rUXfvUeFqQRvNsnHkVW1iE1iyC",
  "key9": "2sWSnzn5S66BMVGqw2bw9VtBjr86ST7iLxGdBAgNSLKTPAvSdAkKfn3FVQvJeiNyFyB2PFuHBnnMkcbSc5X1x51R",
  "key10": "3buwh7mL9KyVWkTYQP85uNUWucS8XFvU69dCaNqCjH8cFvsWcSAkZ58BJKWKCMXft4eDSDxGm4XsiPxy7WtwDEjx",
  "key11": "2z85MB97mvSSKHVcG3xPxdT1Xcj85281QA1kZDmf33R7oq5G41WAh8vq53uqZ6fmcEGEvy95s7eZ1aJ88j2GV9o6",
  "key12": "4ZXKnvAFCfUiXRnSZGac65ckU1tq5A3NDrBZnqaa5xYWaaYiBcof9BqvfcRE81UfiA8HAV2yHkCQ3uovUNAhue9j",
  "key13": "4LhNcCMZy2YJ7tyNPEbhTNZrKE4wonBkPSxk5HQhbJN4Nin4Ychw4k8REs6c7svJ3o7T64eq6zY9Pk9cSGFfZ4Tb",
  "key14": "33EKPPK1WGQe6RgQTBZjL7JTqqjDhriZMLzmY6dLqAUfezdLxSXWEgfnNCmP5AuRfxbiekaDM5a135d6eNnHMg6J",
  "key15": "54JeeMNAYRptk7L56RnU4ckdihydRdfpox9dryTzYttFoY9A1gFsoQJuD5pi6THyE4ejZ8TEqsSPyQCPAtmhEjKT",
  "key16": "3MeAY5D8Vnckxhqo2E2mpAtFsq4dAumojnre8qTAzSWEPhn1iB322HEuWd4f7mqzKwqkYBXZ1py6HV6PCH54RRVk",
  "key17": "5h8AeagDduZ9WK9SDcEWneXkdynPSDtcz6wofucYYWtwP3CvgoVLKi4Frov5aBMSLAHwcohUoJLaYVjRct3XokjE",
  "key18": "TPD1ifQVVwu5a98NWk6BZLi678De3VrTKxs2gaEAAhyxL48ziWJLGfpPBHgv3Y2bP9ratrZqNMKrnYrGkgv4pAX",
  "key19": "KWbUYyw2h1nfZNV5RvCCaiJuPVzz2UnajN1tCRfA9DeNH9vaSU1QbvTC18gQzpdteLt3VNGNFofppCLMuR6TCj7",
  "key20": "4Z3M7uapyjicxzZvWgT2gqoNF82tJAdkDgc196DkFwjdkb5o8iAbw5955gW8BBoF2wZzBiiDFdAQ1ujF86oWjPk7",
  "key21": "3zL1RmK1tDEnK5ok9nVnKP3BhjpHJsfLUacQJYcTYhQAeWA3YXsPuyBfqJUE3wBu4eHuSf4NVqA1jFpiQTnv8vUW",
  "key22": "5X2t3RzHsiimbVkyQgvPtme6gzUz5Sga1eWqeDWbteYUCbL9fobm5P7LX4t8UYwJi7yDNhizZguBcN1M2VcNo2LS",
  "key23": "coMBGzKZreYiQGUPuVPCo7Cxg5ZyM3fdB8drxFERWr1t7h6N61dWN57BFdXNfRAVVyCwEprXE8qxWYyGbDhXNZW",
  "key24": "F5p8RkCKFe6KuUh2RmdpmBcQrfaV3pMHopR1pHzsZjQJrw2Ync46SV7EZAHdJvSCM9r1q9LsFsi37vG2LbeDPba",
  "key25": "35EbZTFHHnRDsJo4Vdkh8BJGNtzFfuyM5rVKNdd37gsjTdvSXAkq3RNZp6rm1XpupfZrzxSZth1EfYtxYeUBM4fA",
  "key26": "2komQgq4GttsxS2gg4qZWSRnWPzrAzCTSAfx1DraPsiTN375QqAkwX5wskg4VnuKh3UsjfXHhezquhJZj9KoLFhK",
  "key27": "4Fh2qJEyAAecRSmeSzNWuaWxX8SybH6Gg2WhLvvFopPeLHamchnyhCmMnnf9gvychWaB1NoiDyojMH9okTE6bBaM",
  "key28": "62wT3orhJBJrCJe5BVP29cJT2dxdGvM3pPdUKuLCwEEcMXi8aDwtgtXt28tbfkuRvzee1zo8gn4KVJABqKw3cwWS",
  "key29": "3sgtJY7tpebyFR7UkLZiZkvw9DzLo9WqnwH7eYQg3WQkCZgJh5MNxbtJkhxcEiG21F8RQtWRychEoQD53vg2W8dz",
  "key30": "SuxV8zqd8du1pCQp4YHPjM8DsuXK8PB2VcvpmVK1hotwqnTzAoHB9pH7fDNisxA4ixjDKq52JaL5naQK8Ctkjt2",
  "key31": "4KHSagNS5wwVjfsdpVeCcrpJtr9uDTWuMjZN6f8YoifP1GEmVDxREyJ3KKNwgCRCZUMfZB89bn9zS1kb5cPXZWYY",
  "key32": "59w89NfjNP9TxzX5ksNtEuX2eCGhLcosDfvKZg9QDCu3zfDz9LuMyVrS7xL1aWoukrz4LGEVyg3v4SY7ExxkYCLR",
  "key33": "2G5QMzUiHe4uQNaLjgvjoV6PkAVN3ayk8vtNatJ9yMjhiXXvTujveoULiEhCayBHRbcR9Nqt3WaMFU9oGcGR8qnz",
  "key34": "3JB5dTrP9XEk5cBZCeGahPJgekXNqg8TZWJLZuMQMPgwfNAWXehTucjB1Ut1iYhZrboQUNSK42F5r3ebH2p2AUkP",
  "key35": "qihFustrxrjK4dK9jFSAbzkvRcugNNh5K3Dvk6PzRAxBhwthNrtmGSmqKPX9sy8cogLu2otktiJ35dAcbudzRUA",
  "key36": "3jKqwkYzfPzhKvLUSa8qPGGoWkk4o3FqiNkQebMExBpxJLRbt4citvX3SALtJZHfbweSPpu6xUA6SgjenntUWyPn",
  "key37": "2XAiVgfJQmPY759wovsUu8Xme1BHGrn5vEfhx9d2BmjPjv6pZ3E6uqVrT3hjYJGVG5Y3ZBcrkHGBqP1S46hBkXKX",
  "key38": "AHgNQD1zzgS8BK7bfkW8MpLTr6BXY1y3MkjPSWtHocxnd31CULWBtErj24CxzxaHSHnUGujwCACGxjz2JBUCWd8",
  "key39": "2yBYQmMQkxWXaqz3pMqVgAE9UsFjhBuC6mn37z7K2XGu7AdxqnaxER6vRfLaukU3rKoXBAFfegCeXUKR1yfV1gqa",
  "key40": "xNp9kNqBNAcugNmnWs1VdS2GirFvt4aYkSCw93rxuTf2TMjbEeSomh8odT2ktJj9cQa67pmmUdtbnqJdaoEVQcR",
  "key41": "4VboPHmy9VbxgB6U1EUuKdeLMMubJJABeYpeF9bioY4uer8jY31dtVJszZXceALzeupEAdNssUMFMcGeoVMfLKxx",
  "key42": "yGJNn85u2EfZz9U3tWBWPkzgGrjPpKGfcPMbsEaNVeLr5ygCPhoXaPVDRGD1WQqkv7dYEihwpU2qjYmSmPvQZfW",
  "key43": "2n1BLRdX4BQGMYrdpDiBtdDHJJYLnbdhgeBu3ZdUTCvLD9ZWKzwEq9mTvszsDUcFjfbQpN9dHJEDTMox6YCu5xYA",
  "key44": "uNoYRRmFKz81BsKt63YtCnBZCeCX5CZpYXy3uyAk1sw3vUmrQyuSwqg2SggooUbMgDtaSh6dTP3npyigdY5tmiN",
  "key45": "2P53zryky1juuF89XUxUnB4Hn16PeRG8V3WfQRFmc4Ne48CpiYJuFUXGvM3wNF6F9b5fMraUQGNux5irC2Qbu53j",
  "key46": "5UTcfGrT64uJqF4pTJrxHrhGvHPkNDeiBYfL4CDyoafYrh24xgcA6hVVBz5J3H3wFQLwsQETqaP5G5pajTCcdvVY",
  "key47": "2cBuukvoKVtEyojhfXDzhfDdjnVfaVQCcM3wKpx4pe8w4zq8vDNtCFdZSZjp7g5K4oaV8bSfkQm6mnYVq4B7AG6o",
  "key48": "4e2yBXWVse8BiAFcGkJYfoQhRSNDb8oNVQMhZFfv711nNAQf9q8HQKhPKu5kk86FSNB5KrbjUppozApQ1D9EtRzS",
  "key49": "4ogjwWEMzjBPBPwrnpZLr1DWU7xBUzJV8wKwjA4dvoAjprhwj8nbTjBBtkVD7yD4ivmC4jgpx78MacFNJUxM5tJE"
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
