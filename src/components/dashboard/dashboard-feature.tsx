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
    "3yYqg8B4e36rG6m3JtuYseDYG8A7BAkwYWEhb2fehidwUk9VXXTJsQKDK2BzaaUHzphJmPxPpa3zZRx3f81uCmkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YmKtAcPAzanv5xkT3eb3GG7CLjv6ncP85G18q4HQ7BGR7qY6W8KA2ewP1vChdeaD7smuQn6VxBBPJfokmwVkek2",
  "key1": "3p1n9VJJogH9KdXftSerWJJD5L1Y377t3S7A5B9tFScoxde6HfvfyhAMauYg2RhSdUfChwBZ59u9wufC3PmJTzHc",
  "key2": "28NgRyaUZZr189sYJbg7CU7nvjQU3Y7jDp6aH7tgCKp7rAJgvTdEZSXkujBdm4scqC5vRDwpgrrr2gBNNK3Dj2BH",
  "key3": "u7ycagc6DrbbLHcoTJY84HcQdMw6s9hdgvh6XoKQQvELU9NSMaF7Q4yE2QzdXF2sKhmNG8vpwDS9ojJuHUZivom",
  "key4": "2BeTYHFK9LHQDFHCvStdpKM4XWmLj2HnCTdRVQGNK6xJSCZSqmWzcPmxBL1cFTu5VCrpdH8Q53Wo1bzXvkgZfV1W",
  "key5": "36F4jyG5fNNPEgKDxdiuYwSTT4dYwffJamkTtLvB6s5ctP6m3Tejq87BwZvosq7SUS2k7eiQsogwUNAwS6Lk8JGg",
  "key6": "5Rgp338JsaVZdnhXKSpDUgED2pqV1zXuZzRB1ryK1Sp9HxANv8xyKBBDaCdyTp4Pwxojt3n4dYw917Urnjzd2bGA",
  "key7": "4E5SoZWpaYtEsn3xz3jXiPs4LpyukgvP1YCaeqKRXzgKkmtpaWjXQG3tViCv4HFCofe4HLx9g6T7NpknkodvnepP",
  "key8": "5HvUpY2te584SJopS5WAbiX3M1R7VyxrjmahEeLc2dn8LZhom83RGZtg5zQDVpCbtcM5QAsa5fyM7F68LmZhMtfk",
  "key9": "GbhLZvQPjFqmqciq3VBTttDCkYhiTqFZNXA4WZDpMNvdtGZ8g6z8yu4jTMZe9XD4vtfewgCB46NktTgvXuQSTZx",
  "key10": "4Qrs7MHW6BnyMcuWJhwgLmW8EJRB97uGB73x9qXAJigBhbyFKmeDUSRojNzqQvby1wfwrrug6UAVvVbeJcqhKisP",
  "key11": "3XPxHnsijDn6rmMHMkeDgq7GkGBhGGAbPzqYtEFPGhanof9FcoENCCN5UDek4KEKFpdkgGHHXkumWEMhSKs11xc5",
  "key12": "5LCbrjspYJi3tjoUtEZDp4gK7AkY6cpxJATZrisfwxzxUzgh5tf7xWzPf5n9m2vPEwjshVZxhaD6sCQByVStm5Nh",
  "key13": "3o9YLLcCXoZSGQVhiHtpUPm3xiYRoufKo7KT1rPsWQ3FVEibeTr6r7WPtgngqz1aqK993YbybRv55xm7R5gBBwGq",
  "key14": "2P3sXyoZ1hJoWhzHbSJYqpsQjaXUkpSVsWZNhiB9Wd5C6MsrAG3u1aCcDyy1DUoFNeZpwAigeXRFqmG8cGX4HAZB",
  "key15": "SnJUYXWMeYA5L1uhpfssqnNrSmDppCaKMh1by2SGmvUb9guJrtx58tEMbqnArzaE4ZcdR3GES2TWtvLwNQ2J2xm",
  "key16": "CYtMeNWjPHUpWDeco1Y4RL5vPVUVhfCiiebVNge8u9f337XRBW65LkkbxXKcLu1cadd3miYD6GZJGTbxEwfRi4a",
  "key17": "ndCvLmESHjx4KwmopAQeChv8ANDDzmRzkEJyZPzxpWcb21oNT5arrBmkVP3rTgJcToMFNYDv7UgqTbbXCyhzY84",
  "key18": "2yaYA6gLmJr9NJe1ES5Vhghfq1agxYATRT9sLSeiyddM7TSpcDsgYSiHSQGifumw6rt7DLY5gianjXMsncGjctt2",
  "key19": "4MuSgvCyhYSekLD8hLetNBrQ9brvyFRKFvABs8vZsDYB96NfMVPuXnUqsZQes1DC6Fk8zyfX4T2aDT3dXJ58gkWu",
  "key20": "g36sG8zStAqxYU6z7VYVGa1UZ8r6HQVY4ZPCc4Vm2XCMyxjCsPyKwdZUEZPUXQ11R4TmxRi8nqTssGHhK96M65d",
  "key21": "31n5BpBWdU2PTuGXsSPHPuV7d7jpxdA5X1oHEk455kuAoFEjjeyx5nyWhVgnkRo2hJSaeqFUo5Dggvac1sGgcWyu",
  "key22": "3D8J32cd1Utv9ZPZRsgUndaGvED3A61k4f93F8kYLVCNdn8hzWh4qDpMpKXDbmtBCP9NznvS3aA52JerJSxguai4",
  "key23": "5bYyeUHesfF9DgqyD8knXGgu1XYxcT3mpVPKWFzrrrPB8NMraMKw2Rc3PPPx5hL51Cia2mP8eEpTYpEihPzsW3LR",
  "key24": "3JCykJMcYvYRA7xrcL8Rq3ppN2nrGAstB7JufdSHS5E7qeChVQCHHpuzMt83eq55wHGAJW14pcDD3aesEeTYb1bx",
  "key25": "5tgcdVyUufN3a9ccxuWVacf83UMvuLQetTWpXp4f7M7XbRz1RT6YkexA8PTAFZBQzzmsYXftcVdSVKUt7AndxLZk"
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
