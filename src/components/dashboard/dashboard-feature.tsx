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
    "5CEZ3owN6SSEJwbC9PwEmY6hni4SmpEFqZD4ohtpYiv4Qwr169gEkG67v4yGmCwJsCTNvWLgAit6CBEN5ykMAapq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yA5sfApME1Jm2AJJ5NopZmnH3eSJRz7mWUJQTkMzC18sfVfsQjKoatmfWE52iweuTkTuxXBLVVy23HubvtiFvsk",
  "key1": "279fdcndQEccuu8cmUC9yosoQajTZTpbhVQiznwCdv2tQnXFKNcQEjG9YqFAqKFDUE2qBBJSTjRGfKoa1LXVBwiq",
  "key2": "5YP5BXUWDgFqcrBMuyEt1bQp46Xk8otPRf29Mho6y1sHZCMhMkiQuQB12nAJGCxtqcjuajkWkNwGX2QJSUJXMW21",
  "key3": "5voc8rQ2jSc3KaUQZ7Ds2WUPagz7MBxYwiRwP9sE9dqypuCQqTsdx9gEuB9KpXxETEHFijjKChzMH3MWVuHqSeM8",
  "key4": "5mnnt54pS7NSXeqcuURzGFxXAwsimGz6rKqXeebbubKHw2W4Fk6j71HhLDVpYrN1K6Swxa23mXisPMDrF4h8PZV4",
  "key5": "5hMSekxPtHHiCWYDQr1vzBDcDdvqUCGB1hkPyB7jJvP3qtuxzyjuNmJiUskzX82ZtAxngbcsPU1vACbwYQNyjGw8",
  "key6": "sBVBomAfezv1WASixZ7FXnPfY1ps4KoGpjpbF8Ww5UV1c1GXnp4KDvPJBf7SLTnY16hJiTSL4dUZgHscJBZ3ubs",
  "key7": "4KPZPyDV3gNHFEnLorp4Nx32ALmsaCSrxoRoeRRbp9S3QxWSUyPPubBTqvDNbpwhN4MDoGPn1iBTgg7yQehd1VMz",
  "key8": "2kayB6muoQwdFFw58cS9ZzzrauoUyt8W29ysJxUnGWWHtpLM6HJAajDBpWBjooybNrG5ETibhycJ3eEgp4eFYNRc",
  "key9": "GjMYdSrZ4ovQZ674AsoVqADFD7ELtVfRncSaN7nydx27Tiy3PgpPHGNpSnzDPvfes8cQvV2zGEqZXuwAw1Mpwm9",
  "key10": "352yVPtowofqefYEkFaYgewWSYGEcqhPdALHgba3oG1CWpbysSVo67HKbRtWzCakGgFQBxPyK5AL6rZsJQoZw7yG",
  "key11": "2Fa8obMbkLDE1P512Bn8THCZX4JmnFzHoxYDTLkaYZSKHL5igB2ZQKFnXcUnAzHqbNMm5tRU7LJE7yMRVwUmRD37",
  "key12": "5sebJmFh63BQjrK7dELCEckV6xudqxkrjy6xmZYC7AnGUXtwsWJXSZxKwYkjLG87irThHBi48ZfAC8JXPhcMvVPu",
  "key13": "5df1hSnmKeHf3QAumfYdrRBjTPMU78GM1kZho96EFC9efTE8hzAbcbPjaAbwJSWWyGajusSzJdvn29eo6hcrBFKU",
  "key14": "3YsTWvufbx9DkhT1bynfrAfskvfnH1UvnAa7MhNVoSrz9CMKFNTdfS4Px2ja2VJzfAU3YNp2WBDyPgczYDsn8fup",
  "key15": "5h2xWsGT87n9uu1EqQqZ5c16ECjBFewE5SFA52wgbQLQYgVENmMDUs6sCLKSdARQrL1bwQGXC5CP8SpygTLoUEKA",
  "key16": "2anGuTBPMQ4WjGmW1Xgwxm3TQ5dVYUm8qbCvqjfF5AFQZ91dJE8xkN65Bhd2MdZ69V7QnQ4WqrtghQY14B9goARt",
  "key17": "5yLjjw4AMP1FFMFBZ7TjAPQtbo4Q3PwdQtar51Q31G5VysEubWvcoRacFwPeTiGbFKTSAQ6MQkfkWgvMV5WrEueE",
  "key18": "3heQaxJBPkdczHhWDn5vsnyZ1vuvSbyV5SQmfxPt9Ggi6tVD8tgB7ycVCmQsakHpFbdC9xi3F6FCcSS2BiGEZWWA",
  "key19": "5wfryJ6VsgWnWRXkwqGTgZnGUNmbGDWx3kcUySfqkiAc4NzjzvEFUULBK6tTn6N9jj7BVwzG9k1wV3gZPxrvbbj8",
  "key20": "2rLdCuy8yU9iRJJxEwCDMym6rfK7FuXADUx2Cg9bYqeybvEVhcAUcgrySdvXfDjsE9aNGkYj9qzESdKqtEXreQUN",
  "key21": "LjFqSbwv53KmXVXAA1pYhARtxi6xaaEsF8ushV9EaUFBxP32QaZXFQMZi8Kf1Z2g6cqDkSoEVzzvWw1s54Q5Jut",
  "key22": "groESYiKQcyMxrfvhj4U1u6ura5i1pR8bGgBaBkBR5W6jPWtokEoAnHHKdHaZ7syPo98kMaQqwQVuKDpiBCJ4hN",
  "key23": "3jXatDzeZxXdBiRidsuqvx3AsNEzyhP5e4bDivzgJVpFwSSfxrFKD5kv1988XX5HtyJyV7vwTr5qbi9rdCoVX3bd",
  "key24": "2AeL4drSo1zKRL5fUDqSsD1mTYnmDwkHPtTexGTYUjmowwHWTLyXaTwRqoR6jUWnrhrBQFqpUbx6iGLCKB6phzdy",
  "key25": "5Lq8TKj3sysWdoaz1LAtRBwPGGTD1TU3PydFT6RCxhekFGGPwT9wZgUGHFPMaBxXUHoZmxvwxgRjDLV2Dj2U6JAs",
  "key26": "PDVH4Bg7r5vA1LyB7AvGSpswU6n4QmcVZUvyxbnXH9uteY3hp3Fn4aGj9tvBdfEpiBYwnys3uJ94jjM3EwBYguS",
  "key27": "5ZyW96Gf67WqnYYYgaZs2zgp5NmrdmVKYQRCdQAxJmdFR5YkBJDri3RrPR6U4G49QmPT3JQGPePeKAEgEKxu9GAv",
  "key28": "2hyK1T2g5HCLXXK3QptfynLekYCAXBQnXcEuCgoEsqu4fGx2rqvijLcVFdGjoVgg1gqJYWZxUiheC5JuNQhLajgz",
  "key29": "ET8JBUbosFqRXHrdm2xwcRc2bZPA3eQ9WRt6QE4rg2V2MxjxqEBLbbb5HAaZ34fNk15tgzsJCpKhPoEYTGq1HMn",
  "key30": "mrNp58BuCjGyUP1CPcTQmc9hH76wYr6c3YMqbkeK2qpEEY2eCEgwpimgTgvqbRy5tx18ZLvDrZzSrvasLwC2zHB",
  "key31": "5RFkxjjBFssoSWXADq5PPkeBJbQki4Dxa7N1S87x6SMGwepHTDvqZiLabXuwt5fsvrLdSSkfMCaNWBxDQWrxLLm",
  "key32": "2Zpcxcdm6A7MczHj4rzvQwQLQ56U6C7qQCqLmc72HSR7WSgPD57NsTVjNvsDfR2JPSPG9MDxLan6woZRenGRw21U",
  "key33": "5ENDDMcXhNJ7U5sJHnShuHEthSYoT3N5qzCPUodHNbpj2q3bUGfDv5GVRQFyhkUgEaoXpK6kqnJPwoaZgZR69gMQ",
  "key34": "5JNT41UQL1aza82mWctCdNz46YcHtCMMLQTTkhcT8msZoi4wN4BirCXBaKmmEFBRGLxttmMnQaVjySGWsAtYZjxx",
  "key35": "575vHxgzwwXcb3J8fuToToAbgpND21ci7x4UMFffjZLzTMaPTEMt68nWPSsTFfetxV1rGrrxTRGSgEaA8xv9iwqW",
  "key36": "5aysAKZmPYk6smg4awMA5nrBdRbnBSNPnYWHEo7V8k44nVKS2ApbTQGFsvsRj3WeHZgiSwiwE1MQAmvST15QGWTh",
  "key37": "5gy6TrdcuaGrV94Cg4hjCMMxQ5qhzUXhiKhjnSLH8HmwNbLfQ7Kzk9S2eADpzuJymTbPeEK3ZqiwtMMeVmfNN1hK",
  "key38": "4qHm8AZhXieeVVWsuhvWPRssh9VETHRBboMqLXXttJLJTF3z4y17HdaR898GGC3wpVWe9KWTsoZjRRRZYSeHeroG",
  "key39": "hWu7ZgyoVu16mJKXF1p5Urg8DknaYc7BSXuzGGTe4t4etmzsZYg8o6czzwrqvpv3YTvaGDi7avxfZuRUVWsnagB",
  "key40": "4mhhe953XixgPpNuEux3oHBGVs67uApX1vyrWb9a4We3bW21CPQyZpQbVZZfzDRBFKo1W51mMuNViu2qjwiDpS2c",
  "key41": "5EtJwaSgi7sWKJKmndxAKMDyCQ13kqGWm75BKosQox42YiVeeFahAVD1UqZZ4r2aNGnMNJ2StTWTKCy7A4rQUzvp",
  "key42": "35ob7oXFn7cHZgQ3od7rNQbaShzG3fi9KrvueUt8ASXrmkQSivJWoHbbWrmyis2X2FrhUdmy9K7oooVtyatxcEMc",
  "key43": "2X16VVqEViJDFLLb2jvCPEqY2fyUQqkBA758iRcHLzxKek8x7ScTfwEfK7yjBfDmMqv3LxcJY1mJ8phNtxVcWJcm",
  "key44": "43hZTezFdNDLatEG5qZe38fNobmZ6wMXKe1FosATbQJTc4tsmzQ5WmuF8LhPMi6pAb6HrMdv3b6a4XBWn4TCh7A6",
  "key45": "qVmFeQs4sXV87uBCLbnLKQUwfH33PNt4PYWDXJaZCjBqSZtPRvUAL4Eo8sYvjh7TWKrspn1uLqSPU2mA9ANFQHm"
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
