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
    "3isu4Wo9cTjJQES5zt3x8YN4ZUCMrvHFUyNEmGw6Ahf99qzoPepe79tem1Kfc2z1XPrydxwhtTE8aS3MiKMg9bCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GTHmtMpEPs8eBYg89Qg8d4vyMfCdtmh5agPhf5axA8aeNsAHhUkWgKP4Zj9gYycCo4QLk9NM6gbgtgYKGFagbQg",
  "key1": "63wVrW5vpCxSiXgkjDTXmj5t9GEf8oQp9K3PfrxYsqiVkhEPg5pfjLkUo8JhGoh2oiPEHWbY24qo1sdsB9RWAgE2",
  "key2": "5HnQMS4CiSiUave2NbigsQDXPxfUHfaBeikzGrFE126WckcLjaEeDYPpuwBh6UejtRrHaF7XVohSTuDCMrVQxxSh",
  "key3": "2LjvHmsKrwaKG4xCjGaKUEAuBP5SobWy238qnshF9QhpgP4Bf7DdoU1xf66Hox5hFrjHHsu4CtFstVUhWCQuotMu",
  "key4": "38mb6Mr7gxwHzRChYXPKW1HaiR1qMWTe32rFjGAyzgvkYeXxEiEKKPKBvxrNKT1HaVycEKhf5yBG4L4ni4rVfQ5w",
  "key5": "657QZgvWomxW4YWLtYL42brv96S64fgkKfE3msbEmkvsri1F7kR5EEEKrVzayWxnygNxBJy3vX27kGJ3xYrdbhHC",
  "key6": "5MXHMQyhCoSQok4RxqtPY7Mt7PvZK5GJLNczhhSqWathNqFnU7i7Vwy9kfideao9vHUpWRrAkkdwnJAsVyG2rwXB",
  "key7": "JrW5dGEhNRchPmHL7gX1U4cNo324DSHU9aXQ1c3UB2x5RuiuhrW9AvJHDhF76tMmN1Kq8ZL62w6Ak5qXUZNjVoR",
  "key8": "5uZiX8vWw3sTBcd2ftDkq2zjYZ9JqcgbbxQ6Ecvz7bovMF8p7qwFYACay2zoYyvb8NVL5xWvoSW85Ui1BHfWMH2i",
  "key9": "4VDZYLvHdCnZPREujj4odmcPHBTce7KZ4C6PZCdzspNPtU19RGQfrgNhmvzrLAFWxiXA21GRGggfkjcbujveLzPh",
  "key10": "5cgs7YxresK8cFtk7Hu565QU46sZq3hL5VRAciT4dC32t5oE1icTrs2xsXu8yWzvqm4h5TxSbWLHqdLQsbgfyKXL",
  "key11": "5GBepGaSrd5ruDUrHPgTiFrPN48MxRSdCu6hgHCc9ZHkwMBqhz2TDHxec5zJT3MtguXuA1CNFW5aT9m4QzBsVSPp",
  "key12": "q7Rq1uAZfFjazMKQWCKoJ34te7HKpKba7Pbu6QfmaSdotchC1BDgp2myTZB6ffnZncBFUojg9EcmsPZH9qBpKUs",
  "key13": "4FEa2G9hsHJrQ6ier2wJk6mh5eMASqcxXcgAUYLxTaWsGqNg3ZW3juBvpCkbYamB43Ur5ogYCjBuBa4MD1KCXFYj",
  "key14": "4whk3BiJY6ZAhqyy3vKu7zXa8WidCEZx6A1cZrEbCyad5iMbLQGydqEYSiQ1r76LcWyAcRubnPueuERxeMcE4yf7",
  "key15": "32zWNfX6HPnfz9aeuhLEYWSewmdT5mcHcXoZatgynt9zLe1cFed7N8LQ6oJka9D92yJ5QQFvK7ZqctWPwLE1gp9s",
  "key16": "4VhRcJCfzVEQYBJn68Pie9PqEkbohSpHymPuFLKLpfg1U4TKRt6JMNNjVRtT1CLPRdq9d5XvKt6fakJnM62FrLfS",
  "key17": "2M8zd4oqZFw9hFHWs4dbwgkKkXkbs3agAzHiyfuEhm67V7HumhB2fvok69buvgEfkoC9TJMkDVXxemFWL9N4K4fk",
  "key18": "3dPbT6jNLgorYyfNfzUG7THJfBnjVAN9mDhLM2Mb5JXy784H7gnLVw8Hsp8XmEH6PGJTgWp6kSZmKsVRHQD9rvX3",
  "key19": "4sXakCM9pouidNGSyCSa6CdKPSjkBNCPtnYCbp22PDyV5Y6VgMUn725sYHgqsyFepyc2s6zdtPa58FFxJwPztGUs",
  "key20": "46TiCwVVxPbHfXSn1Bws5QBJrag5MF8Jv15EkCoqm6ALWLwxUYvxoGeiQL1Uj31tygHhkvbhq51LjnMCq5xzbgeW",
  "key21": "mghQtM1Xu9ZT2smqzkFST2Db4dX2UPddwsVgib5SijwskSAz1duU9Q33GPxgBc3eAzu6ikR1tVYgJoXTYWcMauf",
  "key22": "24gqztqLnQuV7kPsnXfR1gCRRybfm2VxoFuU4ciepCUa72HFHVsgbFDMyNWxYHGJ5YYrEFfSTW3isMxF2GNyFAKD",
  "key23": "3P6HY7ChnMyR1KkZxxZTnW9gatF7EDZ3SXrpsGFzoQEBj6s7dsnEvfZiUJf6tn6UfnGiAa8MQfnL5DT3BYLpiY43",
  "key24": "5FhHzPx1YHVGeMbsT2ZGMkHYD4gqXxsHgwkb2XTvsWh3n98ZAYbks3VTvztcnHcHehNCEaMFGLxbFnWzJS5gGtBB",
  "key25": "5WrjtxVfJ9Dfg5jjCFdfZ54xyiu2cbHcdruRfgecTK8zqTJodwjV5e7KYLEezU3sjhSXU4WDmkVbMcngCVcySwTu",
  "key26": "4SGX6qJEWMADKjJhupTmzdMvGsowJnjYqhBVm3dgBTctdKhc4XmzgKcJP9vKsro4NnEcV2tBAqj7tg53NRDCyNK9",
  "key27": "3qwZYkiQvxwNGoks2tq8raMmMsw6Evd3hmpxojo6MuV5xxqDQp2MNPyejVxGz8raVPYpDyVk6ChHm8exBxuKP6uC",
  "key28": "4cQ2WbQTcJTbwwNtFqxFfUbu1g674WzamZ9zeYmRHQJgiP8FRhqMms7SY8Hb9rFohDCMtWUFURTHqucgCb6GkWdp",
  "key29": "5HdkPCE9FpPiermAErfmYrwCWa7awsxZfaXFNyPJvUbuquBhY4JfG2NiM1Wyzr32pJoMHgbhxCEbe2bRGsKApvaD",
  "key30": "5xWFfAc55R29ukyzTzFbff3qNu2iHxnGgRavtypWshPRtfUsqmjz2S38LcnR9jv6Gh8t78Dp73c6hhX1F7kcozEb",
  "key31": "eaPz7xAWqoWStN7dMPHULzEtXrm759wvyAewxj2Cud5h5C2o32XaqKHbf6USnnqkX8nkCFLrNreNRGVfqtKhwCX",
  "key32": "2SkLXiAP4awvVqRC18uj5jN9oXnQLgC3pFZmyng4qzz7w8VRiheENwAfhoeoqcezxFkLAU5vpi2e7YG8nDjci6e9",
  "key33": "4EULyjQraC3GVUrzszGGxzJjJ7vompPow8e3yDxnQ59BPc7bL3wEDVs4uUHFNHVPc3CLcUXzYg1YcKGUYYSmxAwk",
  "key34": "38b3JAdzmTKnLVXKp3TXLQBZAwfQfP8YNcvh1ireMWQoeJ6w2JvaWoZLAccjT2JNhvDEEFJ7r5r2SfD2tgWxCEac",
  "key35": "4hbvoVBNrkG414t1pEwywz4vPeAN9ZFj2YUnSqF7iLDCoTJdgSKHvZiAkGcD7ivaBisXqiwM9kebCFMPzignvTc2"
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
