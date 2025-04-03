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
    "Djm7mtRpuAGZFGSwCYqQh849PFg6rGEsf1uqR99H3S6Vq7B7NcKkgASwfrGiNWbPQDtTa9UTf6F2mAeBQ8c69fh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4irPYyRD6BWHWUbtKhzjs7Cz9pQdpywbrtd7pkFVrsQsXXTLnEGZQXNGRwHDdNY7Nr7PL9cxavhYADrky6xYbxNr",
  "key1": "57jCCUM9hC8PaCjm7FxzrFReRZoEbC5p7CxSGaqMhPjXLvDCtB57tuu5JHa56oikTBecq1neBTWxpYdPTkRpT3rY",
  "key2": "48gBZjrph7rZcvZPA8Sm2JP2DZUQX83DWbuswu4jueQf6gJCWDZjyaH5SN6V6akDvg2bNqNYdPkdQNHE8J1xddsN",
  "key3": "4D4AraWjf4sszx1eJvJbppy5hPMZaLAKz9UNqvUH4MymP8sYpM6iNmtPHsy68bcSjzu3KEMgyKdbWSEeSZeUFoGA",
  "key4": "5zH453qRhx4pWW5o1aVi9yFGAHoVjrorfsteYewThhxWwZAsDfFhCJuyx4CC4XVqCWb2ve197rzvbELV5tFVVHVQ",
  "key5": "4EtiM9qHEdbV4BpTJecsae9528McH1CuGrMVBkvrdLJLk4ChKVvvYtgPvbKa3qjtpyt91LiGuj7yKckHdTsowBKL",
  "key6": "24c2L9ptAVGbstv6zpB6FQLeXRWvoRLpv7Ygu49214HfNrwwfHMUkaRkiJ4iPnbyVT4gTPdZhUzQaAngDa8WDBcH",
  "key7": "4j332v1KT17kbfQCTb9sikWkZwioFJQ73cwr81vFKJCc9kEuavsEcD1rm78WEVCKkgpDM8k2PTn8iNci9Qn1Akz4",
  "key8": "5Gb5hQZFWmBoCNwN8uSkvp9oZqf2s6xxmR5C5f3faW61XpMuvgx5xVATqtzLSVWegYAeGdXANnxtqDepsoAjZS2N",
  "key9": "28rBLQpijCHEwXQrC9DMvEoW4FWuLyZex1A8TBLy3JwdTp8XwkiN7JKu82xycPkhpjtZkfL48bESJHdfRfLQgtPc",
  "key10": "2F2WuyHFnGSCQcj9jzhFiDLYUk1pYDbPVUPmziUUfVqBwPRFK7zafMVPUvKYYA9BSoJ3W4droi6BYNkBxdRV5JdZ",
  "key11": "BVQjzQ4MzE35Ans3fQrdjSoDT3oRw8YSww75sc2q88TBG1FwKpmavDsVghUQjz2FSWGxYoZo8yP3XWyxCNbn1T3",
  "key12": "kSRaA9qZSoX5dmzCkYGTALUNcSwCThGQg2ny9KMHh7nMq4mGzD5iLrXMrwVM6fFgh5CjsQZRLWvcPZfD7Y7esZ3",
  "key13": "2zBT6mY1nsm3D7vPD8FuAtphtFWBzPi7pQcvJp6LmBud1DTQiAxqa1LyNTrbYSaYTEZME4jhHQjjCdAjcFikaLf5",
  "key14": "qFgdnnQgm1pTPB3tfK5vwrj7xUwQF3cQpBNqjcYSi8qxDqhrzptcsYNncNQG65TuDUwrByVXw8ngCiavVx3pbd8",
  "key15": "p7Bv7Kg2fV8Jp57rKdJ2w7upHbYvdAiFoK9iefwvva7iND7EJggR5e6ycSA22u1udZuUHLbyqQUazSsuVSH3SAF",
  "key16": "szfXi4K6T8GFpGA4UuubSYd24nPSMU8uqrXzCXPp5gP2W9mU8F7CqYkKY9p3EybYpKWAvhho2Ak448JgKf1S5eh",
  "key17": "3xZw71xJ76qrxQ2x9Y3h75f1dpSakqzZddtrhTE3XhMj23qqEoFWB44DtdNegNJeMRv5n2TB6M2xpxT34BV7CjuN",
  "key18": "27PPwzhdMjxjVTAAsZTtEGXz6v13Hc3YFSLiotUJKJWLkN7xmh7fPABzVhArDF1LzckBaVCTEMw5DCXDeaVcvCde",
  "key19": "R4hmchxAtKCssfp8fBgxfyVtXfiL8j6hmo1Yrw4a5d88rrkithLDjYVrLRZnoPH1bUbRzvg1hF73KfDATLh9kRi",
  "key20": "5AUTivRuN5MuWFZGwnetCy5EkagpcFwPeixug4KCA562wmR9W5PpBt761iCG2bmcVyZ3zf225veUiGDxmqpWtX3X",
  "key21": "35cm8qwnXYmFo68APMXrWVJkRzALLv3w6oxqmehqv1RzTsHmj1EArzs4AtqD51XfsGXzrKoymh2xBhrdUMWPQLQ8",
  "key22": "RA2czmP7QwLbeATz3xR2KPqfNg92h1GqECKedwPhxbSTisGixw8MRqrbWAfFzLt79c1YfDKJMXFXByUkD4xCihW",
  "key23": "c7rnXnoZTkNW9xKkjqiqCkhFCEt5i18apeKiKNBz2q8Xa9MUEAqBkM2hybZAn5nbHXW2DqoBspYWzNxTfBk1HrQ",
  "key24": "4NbH6HRZTP6PF5GJR5Qf4ActzPP4DQ6QQWiYjjUi2Hm5bMzZf5poidWpTfc6AwdRSHwNUnvgfppYsA7MCwzep1GT",
  "key25": "fFj6w96wXGV1dkvmxqhN7r8uZPJiE1QKP4JNPsVugFGxbB53d1L2JwXvh9iEp6ZWBH7XJDef7RZo6x7iAJPVGU3",
  "key26": "3A8UAQE9Aaui5heRLNQbcjjy3n1J4gETX9U6FfN7VU5JPHiuq5RjsFwLhHCrkPeGpn44jtHcVPZn8S4cfyVd72xd",
  "key27": "5yeF74uSeR1xyb2DGoGXZ4wpmb7UDWgzSTYJTRphVJhNW8hJPLmtBfvNrbWkF4BQBS3Jmebn1THAwCukC9KJjFLn",
  "key28": "2kWQCfeYdPnztKUBUPtzEKP5nn6VzrqVaxfwDJb46ezd8o8TosaEozVE4RkzFHz9vJDG38owUySeLZRpEJxg5m2L",
  "key29": "52zYCGBAM75KnBkT2uUKLuqgrsqVGMEBTW9hEBrZHqRdD5aTz6DH5kUCdgc6TF79ZfjJXp9NQvtVmmXBhr2oYNVN",
  "key30": "49knXvfSJWFXjMQQtgTUt8Zk2GufstUe1mRmzaev3uUUseownHfw8H5mbV6gDgW2WeHz11E6A6A2AF3ozWsP3kpD",
  "key31": "2QAmQutQ8SRGWWSyhs6TYisLN41zdPzdFNoXd5aMs1B5hWYwW1tKpskEFcFZ1batExehus9w2QeRUKdzamA1h2JP",
  "key32": "5QyicHDAwTY11EM3kruPBFsiBCRGm4dvpTpnRnuTqgcLzEdbqz3HrBast1YEcKuwWVfh6Pwx3d6BexZyzch5VCrY",
  "key33": "3yvU63joDNdKEchCGveZ5zbh5jZE3v1GBDmTxs4JNXsemQrpycpbnJb4RuqLFFNZJuKH6yegP5uKf8C4aS37M2gJ",
  "key34": "4bQumpZ89pg6LQrn8X4H2oMKjrdVfhR4QMDSD6nsUBNNRBo6HJnkkAwHsa8FcbsLzMUXQ6AiJJBjxg6ytcFTJMX2"
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
