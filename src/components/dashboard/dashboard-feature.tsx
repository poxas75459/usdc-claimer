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
    "3ags6NbpoE3V7pMujDRdLjSTaft9cageSbkG8458se2bKyJDaRR5JEhh3aV3473qWzQXacE6XxKapFc6t8JgmiLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "znVNwca4XPGSokdrAmGd8DCbq2cuy1LMhjJr9C5YPTQdLZT24qeV7hauHJBQjCivnb9bzas79MGoC1RbyZjTk26",
  "key1": "qATvmRPGoY6wthEhanVQ6sAXiRKeY6DhcBKn3s19xV4CcdJVZgw3jq15Da3hCug1K6zHj4w6LEnF4k4LUKEvyVz",
  "key2": "CgyueqTKymnV6JbcWHbLGbPF8kGaHvAwWDKghdTKww8hYoEtG3SjF2NYoTTmCYypiURRHgNXnqpjMZsZiAGDe9N",
  "key3": "4cosFKYuPeZpdm8Cg4QtFiczF3V953TBxkSTfD64R7m5BfAvoToDwXkLymGUUQ4Y978BD3UkEMGvHvi5dKc8yCMQ",
  "key4": "XXZaDayNrzCF3Ya5PWfdumui2g8kSbJNS1yW2KtopUTbZ9CszRjNfL6RPrYMufYVNWv9P9LUrB6HmASoEFNchSC",
  "key5": "49E8nDsBD4zSrPUd8K2ZDE9iSVzDun3sT6cFNhsfqXyPX7tGzxhgE9p8KEqd7W8t3wXPndNhs7oDFhAMoQsFpbgz",
  "key6": "5ZVaDRdYJxwA58JVAEDMb8SNxvut1ouvTt35FyNCg3WJFDv6JxtFwQuJMofH2NpSicT5LYBRz3Z69wL3HcQHEFFZ",
  "key7": "3N5eNUnvD2FSNGWCmkWwUX3EuCHRzB9NGmzoZMRxGqu4AuRxqJpFrqzSJqAa9BUWMZnNHHNwZpwSWpGrLzNPzNuX",
  "key8": "4eADGMN3j369L6sFbamqxxFJXEUYSPhdwj6BDEimZrmNXDL6NVY9SfWVFaRooQZ8LUiD7CqtwjboBEZtvRqE4prJ",
  "key9": "4LePc1aKQCQdF1CrBvJtfm2M9HfGM1CNMcjksTn3hJi7QubHk6z3m6bhrTBXuJyqkdchgxwUaUtfhuo4sPEnLxrf",
  "key10": "3h7L7F5uP4Vet25Nko23oD1FiLCVcFRAyKoZL8rXq6iR2KPW8ac15zDTPgUWq8mndXChFuitoUqPuAk5dMUDdcRB",
  "key11": "3BV6ZEG6dM9afHywr3hahHvE7ET6BdMCXVKKaK13T65cxDVBvN5YchsdNRr5Y2gZzuYZ6wcryAZAnWx2T1GiiVyB",
  "key12": "5Sv1JKbsZhhB3UVcecRLgWTfdn9crpatDd7unLQoFZVimuQh7GQcGvJXqN3Cv5mm8J9xeLoeegZ4Qr1ooDz6peKC",
  "key13": "zK2dAptxhMYtLVBoxvJyfBoUSNCbiRmf3w2FE27vJUhn31Uwou9GQkYbZMHSsq41zJ3wvtRGyXYswufpmJmKTQq",
  "key14": "5yXGQQbtM5H5QzKxDrhjrmTvoeZMyCaAGD8EK9hsc9BKkUSPMxmdkQKvECjQjLQQhJ5z5b7eDweT3xjBw2w9HW2k",
  "key15": "5vCPSCdEedE4NwXGM6oUGjx2Y3kR9rYiYmTZG4S9zZinLTRwgLN6UGRKieWab6aZihq5PZeSvMsqtiPfz2br6mYn",
  "key16": "3JbAVnsZDcShoeACXS8tCn8ra6CNp3g2h7MrtQR816YQvDTvKxbK53A1iqVVoUy8qeecPUaP5W9YkuSTYJp9Qtsd",
  "key17": "2wAfaQz5QCMw6tnsVFmVvA7DGRw9uGwv565fouPxFwdcMGnChE3v5MXybbcuGd6xMfGKhDUryAP5fPSgH8KWUgiT",
  "key18": "4ewd4Pv5qtB6F5ZqgLk9AiNRWUA36zDnJzJjwqN6frBNbDnuHpJ8jGHV6B5G1cZQMStkroRkjaRV4VBiHHLEDdYD",
  "key19": "4ivbUz6CZCnjdBWXGnBiFsDbTpDiKTbmnK1hh5m5DD7QPHQeiNDQnsBkCsxV34LdTeFwimFmaspQZNijGsyvMH3J",
  "key20": "3y2DPByBMr4LK8ncxN9KqLjpYQh74r51E5pSgJVUATWp6P21JbMFUV2s1btxMhbje9FU3BKtkjpZGKWg6KdbQH5n",
  "key21": "2FCShEJkQKrH6FVHA7Ce5cYErRMRbbNvCwpDLn4P6AxneUqUaUmd8h4BLXAqojAmwB7E2nx4XKQTsn3kJuyWTHT3",
  "key22": "Rx7Q1r3FPwpBPoEUTBucSJn6sQnGg32myaSvjRs24EX7wJJq9qpe7auN7rvzAb9447ZFR72gbQ5a3Hjs8N4xrGG",
  "key23": "2wmUsBQ2YXPkSfHWvUE4QcGMqB3bSmvAHTAUSudXKDDJTeCXBtzXkMh7idqpEmh5zwP4NdHSY2g9YxJECvpC3aQZ",
  "key24": "41SNkVV7iereoY7oEZ31jvNnFdL8EJVX5tiE823TNQK7g9Lpef2srZNfLmkeo9vJNUKeYXdNhqrG5u77VaUWAt97",
  "key25": "2VbQwzhdtHZ5d4R2Mjh6EFsT86sWaTAr4qotfupdQWBSd6rZeWPF7px9NNrpbLKonbhd647TdjoKXyx182fKRrti",
  "key26": "2fg5VFvnxm3g5sB5EesFoNo7BPqAU9y3V8ttUmiT4uweHJrDCLGHD6AVWuGsgBMtQfUfyrFmwDsHBQhcpV9NbjJF",
  "key27": "vym613sSq4N1X3BSMf8Lrp76ZF8n74gReJbL2E5fv49VTBvsKPTEsHtAip66e5NVqwrKt5BnNX7ihMKqTqub3yx",
  "key28": "kquXgrZ4cxvu46yLPNcrPwLcypHqLvdgNM91aksjx65LVZAWpUdCnU1emQYxK4dLyPZWccyHVyxU9irXRRCZ1LM",
  "key29": "5hSQNZEov3noW6YysgKs4yGWP6mTVsux1U5XhNogz3ZJ7Qkz8UgBDybanUWMyGMMswgLp8sQN1vnySh1eSKsTBLz",
  "key30": "3rJy2UdggP2eXNQy7PiNsLQhiFj22RrghWAccHcEdEcqN9rVbK65Jk78bQDNsqePZwQCZjDmo5AqagniN2Kb6UtH",
  "key31": "222AR2qHP2jq4SS8Qdyu7uVg89qAfJxLgTAnJHfwTFtVYuZqHzx15rhq6D1pYoV7r7MCRzMDiabZyojnMTnDMZiH",
  "key32": "2uKN4ydDbAxQfiroJg27xtxht8WnuBWnBBhK2H4nwDC32CS3L84JVjSFcN5F92oDqzH6R8uuNojSBTSoqZdRLR2Z",
  "key33": "376FhjdthCXtNDjRnWECuQBSyYMD7qarSUvvCzBw4fHUVAwE64kLBZRj91EWkt5hMcJxrjmkSMLqTYonKuNWzUUW",
  "key34": "4zULX1NMP8bRUtSkhrNJhUkpHKAZiS7nABmiu9SZYY3aKzhV1voYpkiQ3h7BUkYN9erALkhQXbKVoHvJw9AAx9pX",
  "key35": "24ha8zHxHj6D61V5YYLd2MVzCAUFWj4uRbuXSbuSvsF4ccmyJAk7pL5ZAd5nGobnXxnNMmPMCu5eMoT6hvv5B6mz",
  "key36": "4FhieMCjrAbGbazkyx6g4J52hrsC5PJgojoowvXDGyaevzmkoQskF6cWg3E9MBS5HPsNACDiwE4QYLo9kxU4ZLY5",
  "key37": "F6ryvKChthXKcLigd1W9b3vwRedUe6HmpuHxh8iXVnjxnpyPBq33oep57XimEvbudbmtZGomcPoRXAP1C8CjdCs",
  "key38": "6wzEhBzA5JWkZF8beRpqPbsWWQz5b1Mj2DjzPpxPw7ASKPE89dXvPDhU8ucVKAZsBAwGjnjvwtTECgB5g6bJkS5"
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
