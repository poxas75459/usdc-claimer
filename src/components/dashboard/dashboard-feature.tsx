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
    "5RHDKEJT4mJCtcLNeFKRMfKuNyfaLwGWYboeBYyxKUMafr9sn2aU2w3EWM4Ei9FfMCPjQBUkF85SHHue3toYyCPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SEGM8eGz2MTcDYtEfrmNeuvxpvxtPshNW6P3YDtNUXA6NgbFsLxFNR1KAT3rQA9RJHLQ3aJNqSuGhhmZRjZdWZU",
  "key1": "2DrzCWGYcDvya7LfQHXjxaTFC8RVEM5wNEmPsaXDz5crEG8HCx9E3TBJF9NqYfLRpA6tepPQAD24zLN8yuoQYrpa",
  "key2": "36QRYe4EHC7gpPrHSGeYpi41SB2ht2TapA5dHt6Pkz2eANoUmgzDZPxoqKergFfFtghH1qQ88SU7uwPbzeCvcxem",
  "key3": "2CCx5adi3tbEQfiVpXSC6CDj8eCYU5BaBjUvrN9etie6XW9NK62BVEpAMwD7SdkHGPExegWohA9BhegxnUtajMdX",
  "key4": "4GnMKQ5pTVrNzkmMLp6KRTfB2kUZ34KAiUSe4kj2xXwkq66jfhDS1e54TYxpfL21sBcyvwmLid5GpdFgF6eDmRU",
  "key5": "56Do1tXdXreAzyUhUBLYMMm8wwNMThWZ7LqFBU4KkVEsouXyYBfEktNYcAQMQWzSgz6gymjKbbcRGXDhnSEu3FWS",
  "key6": "3FaZLFWSRcgq7ywaJD9ojWjokk182iw1X9w1FC5BTHGQi4vLtRbB9ovHYvns5HGz9B8WXwy4WZny49dCPMetL41f",
  "key7": "5SHskuZYeSbL2DQmf2zukT8s7SG5F3KXCiGGD3Ed8YQG5RQgSE8NXntwM279MxT6txhsdmk7uai7X4Vf337LkXYB",
  "key8": "2WHhd7oBkGWMLqWWvMFMaLPPFuj2mGUEBp4Popwa7XQsB8ha6SLWuU1JTXiD2X1d1YAY3CuVuu3oJUQAKN2fSF3A",
  "key9": "5zKwTiymnbAoYjfdsmwKe3HAxZBrSVQ5av2nKuCN7Ji7jVbWsw9cT3NRffa7ozEMTS3iE8peGufko5USxFnHRZ4n",
  "key10": "3RAaQT9CRm7GEfZGnEpJ27AR7YK8oVBCLC3bu9t8zMJ3Y2RMTLvyg8cM8qxXa5JuFeEUqyKNEMwak2RoGj3pfQw3",
  "key11": "45CMazBwnaswTiPLBCT4P5SMeqNCLoWMmRDAd5et9kuy8VkrpzTeCTJoWCuw6e4rgHFDhvzvQ2fkAmLSq8Sw5kaJ",
  "key12": "3zPgHgp39i9FrWeSnHk9r1LUoWRkSstmUNgjHBQqoaeHdbzE5CgjKFuujVrYLgYKwE4p5mRDgDaZJvuoFAW6gFk7",
  "key13": "3KFaz65FTLksNT6JsztYrDwLEY1X3W7ueVA6xHpwadzEWY4vb1xKqhmpYnHpn44AdC2qEegW7gNib22WtGsKhC5C",
  "key14": "5Jf8j3zwecQ53rK7LWJY4uQfvV2tH6nV8ECmGvDktA8hcxVe2rUzBNuNyxJKZT5Kxx3r3JW2yNgZMpjWFryC6LK2",
  "key15": "2mgLUkrWhaHxU215VE42rVRGEzc9j9nWFSqmobDbz3FxcJsS9MYmLUC3HMtefPFxw1xa21hmWqirRMFo7XV7DBQg",
  "key16": "2mNHcM9tRSa9Rh8iM48gF5mifnE4WQmCDZjL6opZhQezEcYKPBUTWEb4ccRHLAk6CByZNKUKiKQSfAeY7n63uBeA",
  "key17": "4X4HKTdVzpX17zThiXHFE5yYq16j7kZWJFTqUX8wppBUTjs5zxB1dPhrx9R4SWo11etp6NLdzbQfAzo2JeVAvc8y",
  "key18": "3etEXCggun3kPQhnS6sRcuqR1jjRVDg9jMfFEd4AekePTkZTKVszgMF1vMPRE19uuPLrBYLVqR979t4DxRkGp7jo",
  "key19": "5hnDn8xJRDUP47B3Adqai6cXrhvSAKQtbfCV99qxD3gBwd8LfNfVCPySV4BCYw549qsAdcU1iErVXhBHKCvwHCUR",
  "key20": "4i13M3L9c3m23zwfNNgt52gEpgXojWgbvTZ4nnX5pU1yKMEDVogfAux1ctjeZQfa5DUCXFXe24zf8sRZzHxUpw62",
  "key21": "4F4Nw8ubq3mPBqvMFwCXYhvNBZbeJSkSGr2TsW2NHy2DAXdfFFega8rr1nPyF3YPEAwm1LYMe5qVkCHCryqy21D9",
  "key22": "3UBL7W3Cw4ZuzrmXiHTVs2YNo9oJdY1k2BE8uW6LJ4PCq6RnEgsvPYvXDyxZ2ExENcg7Hm78A7WiVf7QgEWDDz4Z",
  "key23": "3DYaFSQTHXrUKm5539eoc4jR4oXyhpnsZJJnHckXEcSMgK9WDidFBDvxWKgMsi3oVfcB5ZeHvWLpqwsRfX8VK5Na",
  "key24": "3YZp8duPPUkHFQ9NN3JR7qmTDdWrUPrbqCkEFjLJoxkp3FMAoZtvbW6zY8YHjZQJfnztdKdh2DTqDAmdnpwRvhFo",
  "key25": "59bQKt65BTdcYmhr4ZztxxwJo7djacZYYS56h2hbSFpTrZy2mJncsy18CyuNPn48zRja8waJBh95x4cUcnNgXeAf",
  "key26": "3PKWHJBb3BSavEv2PyMqYjCPp3PhdD7B5PkvLJ7DtJdC5GfiTT4cy9B8CGJ5isPbrPeqfTL1oSp2EJQQCLuYonNR",
  "key27": "2Mg1Ujrkt1m7h5mGcLwd7Giz3NQ1x4J48G2SAcKXryiEiMTEkVRGvr4iBWBTGFvYXAqvtHx4eWsGJoBtxDgv9FUt",
  "key28": "3Gx5KwWvU2jTdQj3sah6ZD4H4nCAsbX4qWg1nM1A2YxSGjbJa3jmAQYWGQWX1edBJRiSuDhw1N2pqdzrtrvt41su",
  "key29": "2jf5HJN2NVDGpr2KnpyhSu5m7dUdvYogpcG6V3ckkMxdrFfBwswv1HL44F7Ngmz3mxLJdirqFm4UfeL3RoyyCANS",
  "key30": "3C6TpUUNosTbpFYgyqpCR1UaE7vDZNsPsrcjT734h1xSb1JkmB11h6AYCPEnXg3SQk7ysDEvfkadLr6dmkNWNY2P",
  "key31": "23uaWm4an3U6TQgCxrTDpWdAJFP5rv1WjZet5CJQ9GUoY78xUgCj47DiwUap3de8qSX7G69YYhY6VjWNqXTUr1uf",
  "key32": "57jz1Ew8cER52NsZNnAjbETWJpwWmGcpn5c885ZVVfREKVHCAboW5jj1op5gMVqqjqZoVsjfRbT791MaM7ayvaKe",
  "key33": "5HZenHqSfve4BmhXEWhM8SxWdWwTegLeW7HqgdGebAqhWC6EumuWyiJjnkDzPoZZ7oucTZXsSALRp4vGWAZa5q4L",
  "key34": "33BxN2BjeXBT4g2W911CG5Yjc5bWrPSqAiUBQWkqMRSLjrAy5G68CM8oMjk7wRLLBTEcpWrvWw8tWhYsJ9kBejqN"
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
