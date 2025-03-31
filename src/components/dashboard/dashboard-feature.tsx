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
    "3MPB1CcFSUmKUkhRXNCcvnVZfvszKSTkGnb28p8ZE6ENVLN3sRrPzQQxoPu1T76yFb741u9emkGtGoF4kGSG3ovy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vb3EPaBhcUvYbhPkhDkk5qPNkD3WdNmMeEnweVPsRZvfYFMqkkDrhJxVk7BzkbEDLRq7PgvRpSa2EjD7MrnNTQr",
  "key1": "4d3SxVBPUGCiRbzLMEmLrHvSBW9EYudMZ3hpN2TRju5zHcK9yeYo4Q1MitaYF4A2JunAs5zKHaxDXcmtddqDXHWV",
  "key2": "5NuN95oyUPFTpZ7eVy9cCgrp9HQmPRyb2Ax3LDfXDwKFP9RPALHWA8TFi6HtGgcze6smVj9qUUnTmw2BR9JNzBH2",
  "key3": "jz7N4BoXjZhK893YLaz71L5YASPDC1krEpcjsGQDxPC1vBK2XVM2btwEQ27BmhLUi1fCXemSL2TWakDVyu7eya6",
  "key4": "41oEErp3LhgRHbCx2zRUwgDDPzs8y647ifJCAQjmhvUn9kCHJvkLAFxfkrJxXymzpFY4ZEi9PbzvrwN8NkTkLVXs",
  "key5": "3Dq3UwDjZybAtUY11aXo4iJ6kqLNVy61UDjRdPkC9nLiWwLJaEQF2YpGP5qj7up88aJ3ee1wZdtSPH8mTjGxDqbr",
  "key6": "41eHuEmCDryxrXkTyvERxfXk36ea3FJQ6MJDtJZSytAN8JbLPVohgUm9qfrH6Dg18X1i4xn7hHFe5HFcoqXaQb6X",
  "key7": "655amMqkifr6Jr7QCcA8nxevCxtkhMjsZqFDmZf5wDc4cZB5tnYSigcq65GUNHM7BvHrqWtAoWhn6X9tkUMPL2Gu",
  "key8": "gnL1qsBt2gegY74CYB6bGwJWFr3v7GoTFHM2MSpzDJLerTotv9KdA5BjuB3uoxucd6MHejiUUw6iHvGHeqsCncT",
  "key9": "39EejCoaXRjXVdV2sNZVLonmM8AyaqN7T6HGqAy6aa4wWmJjGSLiHCVgHiq3NDBWFQ781GPDu3cBfguW6XQdi2FF",
  "key10": "2kfw6R2kkNPmQhVrSEKmN4RHTbSgbtpacPHMYUiFvwc6Wa7QmcMYbNJjNtxYESEa9rZQnnNDDhgaXwNQyHbkPyQQ",
  "key11": "35u2FgwE9qNpWCPy6Cqn7eaZJ6vjzSEfvENWo1mvtnP7dnPrWrCXRrtFnqgD7SWMt7hfWUv1Xwa58ssjQd7JTqZE",
  "key12": "2RMDY9wHpi6BX8mBHK2F5eaPiEd65idnrC5iWDABPjyfBVJdXZ41VgCa9Zd1yrPZdZWhZp4Vb3gjpF3pFMwaUpTg",
  "key13": "4fuvChGGeWwFhh8MAaG5eU1g5vRmAJAbFS1G5zryksdGyPDiLYno1jetSsTgFHbfLfYwyMU6DiWJhWJ5o2vN3fGd",
  "key14": "2D6Y3jNJ2hrgpuZrcrmehccNz5mK2aq8TiA9FChewvq1KSVDKkFssDvQTauqvpcaeVmZKwbAxkomxURBDXmp2fp6",
  "key15": "4MZHEy6jTQvLZQfnvGdXgWpyeSJdBi4XChWcdmfNxPgf1UcZHFh4syp3tNsHMUThCh6VnuGfVKxFDrnHyoqKSNiE",
  "key16": "5v1Z6f2H5HTg3wjCMp6CPVdwunjPCjcFUDuZxXRvqwwwogu48dKSAGH1YeJFSdFf1UbFWzBE9d7dA5QWL2NLx52z",
  "key17": "BrRUenb733QHRqvhYTeh3QXCgYenyqyMXWKFoEyVaH7WPNgJjcjmUMcPiiixRHFdSP8FxozqT1PtoX3H1KaP7iB",
  "key18": "5cj5tXHQsu5ssJcQUridh3VkrCGH94uDJTqC3tVVkWfnm21M4XA3AnuEz4XTa9rcrs53CneGMFASBsBJAVcySBEt",
  "key19": "67aZz3hFkjYFfPR6dYoQXnHwdVxJEXjjaceqcja2rPCEyd9ku2UutLMhHio5gAh95waXHKnhkdSX99qXTE3Fcpzy",
  "key20": "55nq13oqsEKkVNTAaDYBK6UJR13vKuctKwCepCHJYpSbe2oDHqkJBK3qNwNNNE6ztpu2GdMTEiPo4uAjsonsvz4f",
  "key21": "rXLcWYrJ4bD2JxB1bemFSPnfyfLvv7HbdowueXoycZVUfhqqrzmNMBfieV6UbriVNsjcHMpvjzerAuJAsYRXSpD",
  "key22": "62Pvvh2dbcRXnXbp8LvJmZYGWmG8ziFCuFh86PDSdaM9z4Q3DTNNHozbwkhTStNZxoKbbFtfYE9tduXFnx9GGXC1",
  "key23": "3yUAn7QPRp8yfqasVhmF5WqFiSR1bEse4qWVdeE1XpryvY9C5pGmEQUqVhHTimx5aSGufnnGtsC6XhUFqxiwEAjX",
  "key24": "429havA276XN7gSFTJ1EHZfd4aGeziiagQuStvZFM2dkujzAAZgCxTrZ4ipmsnDot1Yfki7Hj15qpoipgbRQWuiG",
  "key25": "3pbgoBUBeAweCqWRPfYXdSFBsSJR8dPCRuDzhxoVgs27wnR2tWKEGNYTvZKYLk2UHvhwbGFpBAMjDwTC8YGGgVt4",
  "key26": "3Haw3gGYvuUYHZ7yBFVwirtXamKjnzE6Qq7wrPXtmLMZ39pzreaQkF9dRMf4DSMWwEuREPVCHEYhHfMsBvKZT5c2",
  "key27": "5MxsKjCXk9c3qieK44eZuGHogogm74iDRT5gjNVdyrQ9QJNE3zJxCp5hRKFk2BdbuWV6mMdaAJ6fH1nLctErCBYp",
  "key28": "5wbNLdecj8KoG2xV7MtTyergXrbsB9TykRjwTUfBQaawQvgE28dp7qxbMYVdUqqkwdCsZNtcGUX7x54VuK4SdE12",
  "key29": "43uv924d8QwoTxtSsPr5LFFk6cHRpU8gMXbwx7fb4yVgkE3LSW1xeTxi9cbZFqvwZgZ9xDTbUYr9SBxMWpPZv1LK",
  "key30": "2bKDuouvRzZWy3JyZ19VzBZc1CUr4G5SEzCQSF4bDLwSmMZY2bATEkutB36i6zqAZSGZAuqVEvFQxve1fnshXNQi",
  "key31": "3CnrdXWh1Kwbt1YP4PtnPLjWZNxZUXCopQXgPCcKxu1YY6AF72zNsj2ik4eJAE9b8Ahd9nharxyQqPbx2GLNqgv9",
  "key32": "2shw4ME9bEWEJkKvgb9TrNAJqt6eVL3uhztGGnHqH5BnhKHDhpK2XZVznEDUokkaCoZrrN9A5wBsVJKe8YfLYdHM",
  "key33": "2NaqhPJZ4C98h1sTX99WiMvkRiLwMx44xrev9YeCwEY4quXQRPZxxEG13zo8QsSLvWpFN4UtNpu9o2Ham1w89nb5",
  "key34": "4xbfAhiXL6NQtNdNoLrA5M8URubFYmpvMYSXeR6zRzUaK2dcb6BHRi9tJvi6ARhRPWarykoYimrQEPAgen7YJ2Uq"
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
