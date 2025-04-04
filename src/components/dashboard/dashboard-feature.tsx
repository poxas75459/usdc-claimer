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
    "3nYp3xxNDFZPuZ9838eK32dm5HCtYWSMksPYfoveZaFBZv5ADjW1m3HigUr64UafJmvB9SYb19PLnhmL9CUyBjTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pR3mns4o8GEMPLnBbaZ5SZAE7tA3KRzAqDtAxuXAPoTFe56iqVJbqABD868uwaVbcGxE2JL8Qgo1vUpjbY13TDh",
  "key1": "4ty8DDzGrYD4wtd15vwbWeEKfaGBjQHdVFQ2WtsMfKArtDDaMGTpWP1AxxVHUFwcx4MWAwPZ5nTbSvHtzSt123L6",
  "key2": "3qewMtuyYzzXrFQYjJyimuhkNMXkojrPXDwFkhXegTVcBuKhBnqKkpCuhqfwsSfNjfTffGHgcRG7RrczrTUbEH2w",
  "key3": "5cpP4oeabove8uMKr5fFwzJF9DDQYF6s5ZDeXcKrUaTidojP3i2S1T7pUVXnoLHEcdYHW57zogiZFqA7B7iisAac",
  "key4": "5PpYuKdbS8Mk1SdGHSd6FJbGSoaEufwURnQkkMxN1xP13HkZrT9V2buZX4bH4H245EXsRJtmdedBoPH9no69yz8S",
  "key5": "3L9BGPaha3kypoYEe8ZYHcuWiHM8sJ1mymwNAZQEyDNzg96KKkCo4tP6hk9HJqo98Us1vbmVvbMvTcjaCq5FNAdY",
  "key6": "125wRQVMy463zGCfa5aNLEXrQ3YPdNd2QDYaaQPgAnSaatqAELKShLzj6nzCLce6TX1BnivCHqNyEZpymq3yXjH8",
  "key7": "4sD93QWKyzQD3pea76UD487rTJHiA3UgAL7Jqoh7GSgRqptUGbHaRzRx79zoxVZXX9KUzrG6pmWK9bK8taqtLNrF",
  "key8": "2dCtSMMyqXEj6WnBK9Hxw7jqhkWTA1fbW5MatWtPbsVmCM3kDwNMuXVBwcFMcWMGKu9HaDKa23RmjFrrYs5JAe74",
  "key9": "2Kh6VfifCBoNZduEUzmQN7o1Z4f96cTeQYi1cnjwNsC2vajPT83KwEDHWw44mvMwahagtbfpHUvPUXB2Vh9TRUxc",
  "key10": "YTq6AFx5LagorzXuWVppEiu1ft94BsDNwun4GHv7nDmGognPnMVYFSiZ5xJRRdtC2nHeduo3vji783Auk4G7vFL",
  "key11": "5EfBYQmjTRimxXVy1h2CHTqa2RXe28N5p88VGQy1ruymeKp5zcfEuw3dx2aZUudBrpzjy36aBWswqn58hoiodJPy",
  "key12": "2rfYHuj7L4DGPjAeM6Q4LmTCtamvP6wQZLbjKm3Cs7jJWYLV9TATvRaXKJkVcHVnd2WBh5wBpeCzu1RMBKSJdoRc",
  "key13": "4NoPRg7an1rmMTPr4cqdQU2GjGKjbhe5eWxkWNa8nbBTMaJFA7U9VLXBUHg3bbZQewAQJ3j2moapTckiPtzcT8DC",
  "key14": "5J7AqeSqYPq7G9PwStPmu2oRrVxA5MbBQUUZZRZEAnhaABzQbJWDp7X4nQzNGL55XUmy2J9aPxtvFGk5DFgva3F4",
  "key15": "4EfV2mtTXCPrMoKPJifRrxw1GsaXpUxh5Bt1kxT5CbwHpqTkjU12DbVv4K5ZnAk5Ucs6zjMfMgFXzLEra4gyAwp1",
  "key16": "3gsgHjAFNSn4fmo3vCy1PaDCHjDL6nX2LcvByg4TXABiYmhQ1UWdbLg7yfigKzZk52gZubw7stJmns64WtYRoK2f",
  "key17": "kZLLLMueeo1aWpFbdkqkyiu7pRaY3PKbUtQ58t44pL1syed5AZx5LJvjUPxGAdnLnv2kyVde1KoaJZXy8HvSuQg",
  "key18": "5uoYsasoX9stLqtT9hA8ovNtfDvdFucNCNAxYAsaXoFihf5NA1eHv47EhuvcTt85DMBdoNNxpaMZuBGTd7rtyNK8",
  "key19": "2Q7pkrPSWYFNYk3kW9ppUH1pwoycmLLxFbp3Y5hPDJnARWU1MTDyADijirwgfE4n2XWQrdcpvfqahb72BNjAyXAD",
  "key20": "HsefyE9CxRPBghHzpYc4ZrSATJXz29PcCSb69ix5XAGttWQBdKCZWbK2qHNicfKkRBGeY81VAFshmeDHDMDYtmw",
  "key21": "3Zhoyupum6fmwV7vzeHTaEzqaD41rzS34vQhT4fApBKTNLkCne7TVA9w7fLKMZv1MvYXZR4jBN62Tc78WudvC42q",
  "key22": "Uj4aapatk8xzSkxmUnqsfK3bZdx1umhg5ArBkSurKnvSjbFwNXvgAnunm5xysZZgthougjuzSBqEpM3zisjsauJ",
  "key23": "5miiVznZFntw2UbXZLWptrgux9Q9irFmrwQMUqQgahTLivDGMukHZBonc8DuGFbDVo8cqBaqbQfkFVyxvsUvCBJh",
  "key24": "43yzZas3TswbyeXHbRw9thZR26eSRsnv9poMgw74B2MQ63xFHEDFz9sdpf7hBt6hQ2phkVNkP3cc3k7nJcbUqgX8",
  "key25": "3fRmgZ8AoiqNxqkz2Z6yxJB2T2DzqwuYBcRp5UBejvkYXWZ5pWveVXpteoAMBjMdhnfeBe3oNN4Nrf8wU4CJxoaV",
  "key26": "ujH5UkfPLns5C43EFeo2hW7UtqmsjzR7veJoWYYjnVmNYLog9JYHjDEtiPc3qCshcLoMr4mYSn9MurxXYhQAkPT",
  "key27": "4QhfEqewveAaewa2himNLVqkXAeAQcieSd6QBaN257KUEY2ptn5KpqxJHDPiqBTQdoUZfV2rATJj4XcRRLMfDiob",
  "key28": "2pfr9s5E3SbuoAXranjKvpUvbrE3egjyxuvnCuiw2QxioWhAuqyhe7746XSwZvZtrtoQUrGM5wQPziYFbuhUHfjw",
  "key29": "2qGuFuUJJDux2Zqw9rqMJjidZr51UaE7pSThBwSb4oauNY24JdL3PBWFZGeF6uY4jn2Bdh1B9N2SbC2pQ1LUpCR4",
  "key30": "4Nb2YJvpVsgetD7fKRdo8ntPKdoZpE1upuSssfRKrf8DBibT2rrafM5y1MoMqRscPstGtBew8SsCKorJ5QTvZch7",
  "key31": "SghgvQdf17fBHQxUbd1LxY3LpbLh7Etugeud2puCSi8mySEQQxueArC7kwRcrMneGdYjzkQuGPyogkbxJzbeoao",
  "key32": "3A5CKMomBc98Yh3KnXKfryKv5gYuYAc9nTxWysg6Q4NaDHXf9y8kHiY6e32kyGx7CTs2pNYoffTYyLcw6o4Z8UKf",
  "key33": "J5SmAH6kVwSQHU69R7SvkY3sQHaEeiUh5Gsd4mZaesqcjZH8FndgL6gPj3TYExDPz4eGGkZ51mkDZHSLxd4LoA4",
  "key34": "5xzFTKvrrAsXvM5jSd6TMU3dbyRdCHjFa3zTgaGphZ3775kHpVvd2xwJq48fZCquXWoYPdEbsVHvmKr2qZUNpq3C",
  "key35": "39o9FA1EtVpj7zSALHKHRiHNGW9W856vpv49K3TUc6Bt47f7TJDaSckYffqPT52dCQ3gMeQ8ywfzwnp2K82jWMKZ",
  "key36": "3vMWdFz7zMAAVq8taLn19SRHs2NozbjTfoGqUqkffs6bNgaGXHhYVefpV37YzquHptjVfkyEFqz5uhQu1XkGEK4u",
  "key37": "5uuiXn4p92XzjcsF8DdVqoGzR6jzaXcbu29tueq4vfd47N1o5reP3g1REw73iCnnDih3FKNsS4zFEXfZsXF5rM1a",
  "key38": "2F1KAm1M7scygUEj9AhrdBsDGFfHQXYKVXwzRef5MXAm2Kbk27QDtWAtEquq7jcLLMvYTxPdvoHx2THDMTCFPPk"
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
