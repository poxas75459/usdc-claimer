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
    "3ooXpCKaBhtvDunZjHTD4Qg5JqxX9PZBRxTVH78my1Ztz9PD6zTD3aDHvyR2LcKMG7PaYHcG5TgE7feNCB7Jub5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44jwJSK6xFdoDZwzaRMff4h11rfUd4JG7N5pebjUuKsHG86btEaZ89pkkYjeU5YDofDP1r1MsxVr7pfXJFskqcuS",
  "key1": "679qgmdkeP3CpYfpwbyukCx16QwoQDyuNfqyPdepSwzqUALYBFM8mMBYkT74FN7NiBht5HT1ozDbmuU1hPyJ275A",
  "key2": "g7UytsR6uePo6idJrYC9mK3dUo5XQhaC1KejLGCXkJdmH4t8CN195DL6rvbUgtMPvXXn1pk9K2KgrCq4QBRpSJR",
  "key3": "29CjSeLEVEnWxmDA22DfGUeskmDf52nTmsCRA56qHp6wx5LZMrC8HQBA6TDayugx1RqanDgof4Gxm9vULfNof8pz",
  "key4": "R2o9AvF3iAZrdvtrZ5Upp66wQqVsNmYoeaxbNjpzPWqUogpRaybQLmtczehRjAaogqSeiwocwEkcXRC1dnjpH6c",
  "key5": "564cgPmZzjQsYPWFy74Evm9Ybxve6dyiAQwCa8mQ5aDPS2pTS4de8pstB2QEVABpNJpQEsFcc1Eunrt5tXD34n35",
  "key6": "uwHm4apZv52ExHKuxiWqKN83fh6uEjZFthURjLNrVgWV1VPuD6mnNUWyfQwigPKoXroM2sVzZvMhip8yMFqxJZ6",
  "key7": "2TGWyibasF65nYhciX4P1LEmkzWBShvyXkiSHvtGE4WzCMami7W464NMx2wSWQyR64QQo1TJ2mzBZogh8jN25jfw",
  "key8": "5gg8Dy11614qn8ai1GYf1SGXMVPNBAUo5y8MfSMJHNvduJuGxspXhZXDNrn3Z3sGifaxh8hMcx7tJVREfDMxFeUN",
  "key9": "5iEHbqZjhGu4zgvSrajtjnoeGkMvPeZ3VbhqinANtuU7rYkd6gQJuWBiU1S2nrUrMwcDeYYAb5AZSxJtxvk1NM84",
  "key10": "HLWF54cAJwoxAfZjnWNUNy2HvQoc7Nj6D6QcZhD5TgqhBopgX17Q3sU2MxBo4w8DcrGo3pqTa6Toges1ZnsJqsz",
  "key11": "3LufyHYgAMkd4yHrScf4gCjRibq4osbks38rkWYQHki2nPTU7aKrVNUJTedeiRmu9VNZ4t9rMF3vc4znYps1WnHC",
  "key12": "129dDBJ2Z24XG9Qh3tLYQSc4yuKCQZAzBGhvTjfchoU7E5Kag3UJKkDBHDYMGh8zJx4dmJoXqgrJKjcsqihtrg6y",
  "key13": "3R99aRg5PBPMR3nNmsRNkxcQfLCBmWhpigT984ckV2uShpftp8aKm8DJWrRwuQCeVZL8RVbASYaLfvys5KsUzLi1",
  "key14": "51DPiMNoy2yTJvyJ8impBip5dN2JGf4gkZfsrAh8VXbrDCt2Fm93X3tKMCdbJRjSV5YqnF2W4Swx137EZQVbnDHE",
  "key15": "5qoUpgf46ZcRZuk2fox9VvcJbWDJhRQSH4qojsU18sb9nhqJ1fPaN8kz8LNXqoeHQgbw5vrSCBEVN98KWtMeMBVv",
  "key16": "3cwm9dD4oSZ4tS43V8WreDx3RMoLx3wzPsjDpHX9Ndjza5jz21eFaaZp2WnE2ZcapvtkoWdGDgMj56AxY5rPDHbG",
  "key17": "5nuBUABkNzPxRdVQjqSRCLWZoFbsWW9DsXqJyEKjvqMnMUzLvEVb2RqV15RtrYLcFdCHa1rzyMKPFpahTqpEXf6K",
  "key18": "2NCrds7P1jEAYjuQFtU4dXgQ7fFDAMQsXhFqC7aTpuqriHKteNVLoAvPsnU23h9X2HLAZQiNdQu8S1yBQYgRmUju",
  "key19": "58bphgW2PPSgrrjunzsKsLGHqy6BAmQtM7YXXVh6UPZ99amUYSLewfqW5B6CNEtY2bRLuVH4ypJipCtt66DvH4Tq",
  "key20": "59azPaPufuNBDhcTMhDg7AuUhcFQc2CEsNZt9XNYGEc7ryETyhVZfSyq9YWUBWvxurKLWcKQ2x7eCwGZ34zFw84d",
  "key21": "2ZccV9kmAS8eKR7SjuPr2xEVZMJSHDFFZ6tvmxXC6PZtUPacG9M5UAK1rEZ8J1oqUW1fvrwuQuj81sc5KJYxvDjC",
  "key22": "4USqfKtBBx3QKHSiqQ3UfiN8Yz3Sy5rnZUmf4rjLGqiaa3hH5UAxEDu8SitMwFZFb5tDc7YsdurnWw42ugsGtqGU",
  "key23": "482VFEo9TjUtatKsjQVFJSLwzZdsrQfLdeWQJ5tECzs6YdVE6RJXwAV59xTMN6TMfbWpSZpybpQfJQ6PwX8qgtb4",
  "key24": "2vyQRi4kLhcX8NxkuBcGU95ZVJE8ajMYUKGerg2YW5zbgLhEMs43xumCtZBSQyun5oS9yabqkUgJMPF8cwPd5EdH",
  "key25": "AaoH4gX5Sa1eZNnUeREgxYShSHpbqSGj7DAEZ9pwDV29Hk1BpWRrzSyCAXUZ8JvDhDrx35zcL6u9AKHA6sCWDgy",
  "key26": "4Bh81LuSpG1ukL2LnjebbcTWRqN9k2qXEK8PXMme7ANz1fuzneQiiStfPXwMav5DcpgH4yjpJWzoJhwV1AgAb9Pe",
  "key27": "4QKnGXQWqqYv1z7anHqvWxqdXrf9csoQ8Xi7DEfb8y7e459JbL3f8Homj1Hg2rCyY8QRRA4MdDuSJ6dCTfQ8naK5"
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
