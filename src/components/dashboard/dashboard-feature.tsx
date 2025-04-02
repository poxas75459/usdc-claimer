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
    "4v3tgmLSJZ6KWZC6hhHxqyLRTcKLumU6kJCAXEPrvwzKdWPZX4BSV1xfmfG16TzTb1tfpYZkGVCYHm9gtbDcQ58u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NxtiinPqR89jcpNXfT61AkNXUzk7VgZiN682ahYJYumkHVf6ocfh5WFSfounFyQBtu4qpkagE1ssgTcmUWBSTXg",
  "key1": "NxzybxqvrYy1JcoTwiqvuDCsL9jzHb6a2M4xKYNeLMUaoXQSUSdzcmzjMYChcdad3to9iGc9mmWt5V1cxyZZrHv",
  "key2": "3Go8uZGpHvBCo5Mf1i7bCWUapJEBovXXwMWS3RMY7QrhSjBfoMLSj5abKa2VbJNWSrxXfU5tWQfg8gXdRDHfC9mX",
  "key3": "3ULqfZZDDEmL7vETnNynjKfZjC7LhatpkwEujEZRECEbzP8WfbyWiMzPicUjXm2CJjsN4fAy3NqtWPcJq8CU8Vet",
  "key4": "5DWQAUe5iXXtyZM3PPLymVxbo4cvqSNy89zuvNLXBSLwFrtRvXDzFyNDmib5LWiM8HJySKtyZfjnEE9b5eYZw1kF",
  "key5": "5kdJz1YmnuE7YxVYeRxiC4icgpCkNRZhTjUudiScDj4EPTSUpGQ8zYjbVRqdrzg1HGjYgagnxtvsKFXu9rnwLvyz",
  "key6": "5rgD4RvZATXdvYwnvmAJ2shny9YkFJbtBHNTucEtR3GgM3Yfef18HwdxC6c4gp3rzScvy2BxCEoSbMfraUgg5a8i",
  "key7": "2cwyC5C1jMgeUAX1LgQLuESEaaq5T7ePZCwsHcmTKEsvw71bVcDMGFoqTfbA8o86ckr6qpwUJEQAz1YhhxxsoX1u",
  "key8": "Ao7MYABsnLoUFSBVLZTUrDnPbp5gmae3bJzoWgrxsKmu1sCvhL1a7GHQHENrfK5N8gu8A9ZfnPRHD3o9QmsxgPq",
  "key9": "3miUnczWQcDnew85iwmm8GrTEtGvxvAz98WPpxFwqGiWW3tnLReH6dA1wJiGMAzSzNhxvzAbcqFZkU9mWhzm8yeF",
  "key10": "3NFLAgbMXhXga7BSnMoQgZERtvZKncnBn45ympSDvTda8UVXm61e4bYVNueEqyJPR9SASaGuwTsye9EueZga7iGD",
  "key11": "rQTNPjTTGZjdZZy7gKipM5tkaWVLhYue79EbrRpUyYxCmdEPAiFisJvTgtwfEYM1AwZDeazuXX5EJzwwrfZMmSU",
  "key12": "5wVzjS79ESEG244Av9ZYYc37md5xk8BvsDabNVV69eLK2KszUqZhPRGpTigzM9oULkJbej53pE8a1bVUzC7JcMVG",
  "key13": "2j27t6cWSXqSH3PT5qz4K2uZzeLigjHSoQaAVCUmRd9nhGVfRKYS6h83epfn88wPJgDLtVWEGn5EWBLAiKCeqpJ9",
  "key14": "4uU2Z6act8iNf6R2un8hsnawuhsV9z6j2nsV3vqXiPxJgLJ1fjpbf6hSL5stfPAhbH4MVnjjHJRu28FTMbaL66Wa",
  "key15": "cnDaJbrr1ioi9YkMrnN5SEQEWDDGL4DASxRZ8bFbkLZ9hn7qghwpq6nroFKYqmHR5FG5ebD4b8A5dEyWqvZW7Ds",
  "key16": "SgguEnyFNQqYCQdWdffnS2dqknuNQ4pxG5KoRqjesYBcrgs5vPJ9Abw2eKV46Q9MZ1xb2kAAae3hMxpH4EhV6ba",
  "key17": "5F79kGfkp5MqemxWmBHAEZW4LXDn13NpLy1DscTAPTLuHxU46Ub61DdSGtMRTcrD2YwAS6uqe69sWCR8nzfwBsog",
  "key18": "49NSJoNG8G9pW1YwMWLFaXmWaWmkiXWfDh1az3WvRSpvBqcpbEdgVw1RnctwxacxLxiMPRdziz6J9KLbV4RtAoHQ",
  "key19": "1vkQSmsLWqgcDdpgq3sE8rtVkfDKrvCbqdFiA55yKJmmFwCK8k6d8QvqFfbmMA1GKntTpLMVEyvycowzUuCFEQB",
  "key20": "3764ogyXiSLvZZSXzPJEEsH44ZTDk2CSQ7tJ6tzqYxYPC4XJ5xFZ2Rs4voFrjCxu1fZpxm1YgmCt1zzC6UJZ2we",
  "key21": "82fAWvBbdzyqicEbxAK5GoX6nr1UTPmJgwBmmkW8Bds9XnvQW5iMtRHndVA2vR8D7hjYvYvsWKTcspnbaiYHGXC",
  "key22": "34jCcjYyZQZAT5SLCnvGDX4rp3wCSRLy6W3iZQ1WynH2AdKaRaJAc46wDBgJoK1ABYxnkZFVwEChjYpbkH91WXMN",
  "key23": "3MqRtUjd9a7RFC2AGYBanXbooiAewWFHsJDKUrG4drr3dvMrG4AEaMt4JsqNqF1Zq9kFuFkWZc5qciLEZzyMsbKT",
  "key24": "4NQPQoUW6mvY1BGBQRHFuCuoSQGVJEtMjUSsDcAT6fvjhYBztcFXaSx1csjzNk6GZaehtj1DM2L5gFb3fP6oEf1X",
  "key25": "21t6EVNY5zxT3i5BZ45J8EdYgREHvPCqfz27JrrYQzqdrDTGDEbiJSa5yPcWkuTCSMEfZm4FzfYWzsQDFHShokLt",
  "key26": "5L9K3R4HWZMG7UoPX145wFPj7kWSzQMth4N6fvMrnxM7yZ7bGEyHmSZ15XMX1A4p9WLiNg7uwzYhjXRbCpJ9oKW2",
  "key27": "2qfgoUDobEWvGYqPLUznsyditaDvkhBB423NzLz4jo4KpDo88fWbywcyMQAtnYQWFVisf48pag4E75RjFcPjo44y",
  "key28": "5NuMR1qtJYX7jLXUEC4qaK6L9YxsJS2iiqmu48hTKnSjfzVN83buUrCWY5y1gJPAhc6yJxbXXXj1qEzTEZ1jQP9W",
  "key29": "5cjeyQuBuGs18tFwX5pKYt6MqPhvtkLmTabYVo5kwUNk32yQukMEZKFtazNjoAB7UkNhAey9PzwqmxibpQx7bydS",
  "key30": "37dv8fAzRK4DaW5JDb47CHS7criWt9j1HB4ffCQq9P3zTKUc2fKMdFJDxqNFHvP6gXELHHxtoL8k4AwM5hMh7tZZ",
  "key31": "pa1SMtRZWpvGCgTVNfQSfRytm6ZcY7iVzd141snAiyXYUfMC51xEwDf6sksveH6dRhnMEZ7B8oNYXnWypLJGhFZ",
  "key32": "5F5rHgBUfBtSqQUPwJwo3bEgsCEAgrrMfE82aGKyVQup99Bi8thnrYU1tjjRjrx2WEJTHF6ExrxwLEZgwusY7Qbb",
  "key33": "4YKWs12qQzi68VxftiMJ1hoJXq9jiHVohawoeYBEiZH22rKPrBNgmfzppSJCEz7yLS3w1bFsh81Vhh3v7aFPDmBg",
  "key34": "5FBDdAMzgm47uozJQQdfBhLLUcvWTHB4hiwDcRG7sFf6zMwaxSWBk2EcnoRLGrKhF3Kxj3ykr1gRcWw7RExTAe6e",
  "key35": "5p9QmQSjK4FYe6ageN54PqNEECWntGZwtnWX1oi2PWycbNR8PELxLeBEhwwJWToPzZ7ZrxBicbJtvLX2wstS4FJ1",
  "key36": "61Q9nyuhBc6mGCksNv1UWJnibkYPNMgCpqvetzh35FVtSzdPZTUwiHESpMrws1NCAYR8k5XSdfBmHikgjjgDmHmh",
  "key37": "2z6RAN8AWb9r7sVwt8sVHXy1xeDfLSTMEmhEuDStoh2wVM4v1swm6EfZ4QUCovJU7zddPkUTaJQN9ijXmqakfG1n",
  "key38": "3zM1EzVBmxex2nAA1UXSYTVJ2UpLNnxwGt1jiUYbWw4PXMtpdCbozhV1P4LvkRMRt5Ld1ei1WdAvbspLKXaQuXW8",
  "key39": "4z336xedQNVLbqM3BNgv4v4gZLaQD5t5J8cuyo6mHsMwd2yqhm1dnqUFve1yG5rA9CiJ88VpTMzVBof4QtjiqJdD",
  "key40": "5NHhUJzT6hLNAuks3e1fznPrPNa9BwcuuyrvMtMpqGbjHrnnFvqLuLJjx3W4RkA32YhgKZGnuNsVXCfnTFV8vKAX",
  "key41": "43JCSYBFqwC2aqH1Yp3nXot4WLiUsucR3Ny8AXEDbdReCBBkciFbS91PcTaCR494Ttkr9HP9N6rD95RssJvh3cGZ",
  "key42": "2S2atConvjio5tN6KeLiBmMQBZLTTwVbtmjZpy8d2dTXJgHUvr92ZwsJyuY5gHnX8gaTg2m9os9ToZekw2bxWVcH",
  "key43": "46LEXmwZhnaGsfJcuf7RRdNzJMzpoRZE6Y8C97jqrBmKC6qHjP5hsHvxteuPi4CP6Gd8yVayn1KLwsvLXNY4APyB",
  "key44": "4mcL2gvHRzV8EY1eS6pdaqDmVyrPofmPQcCntX7GAipmnCgaPdU7kGzbibdgfCKmEiRMRpbqtJQwbTSxhjsF8qT7",
  "key45": "4NqV679BF8y3hqKfS9tAZQhVGpWjjJXn4PLxtZcwSVPFM9rp11VNTT2tnJa8fh9G4ZJE2bPsdXbxDnBvpD5zbtUF",
  "key46": "4pNiQtmHE5YU9JdhMMm1JD569Sc54fqsHSvYKLMtVT8eeAtraz1PsXag6NLbbwi9UnmQbMsuDtNRLGZd15wLMcMU"
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
