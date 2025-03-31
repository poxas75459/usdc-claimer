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
    "BrH1ZfA8ws1qMwPmgiq5QfHZDqs363zBKWHMnoiz1GkZ5XLtVAbibE5TbP5YFZCST3eJwfge474VtftxvpFiRvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qQQ9AxYtPFaDimGyT3c8togTTQebidgNSu8mS3pNJBLew7WDrBKkk2QkYfKmhGEemNbcv4EBkUas5UrkuvQaAbK",
  "key1": "4gg7uEHq36qLoGgLwFDkJ26ViaNpzAUzWEA8uBVFvcC4vmbnVMp6erxuRK5AFTSqvqCVLw4JZauBXDQfHZkGs5Y6",
  "key2": "5DVaeXfBd6YFhJkQGWD4u1bAwfPS9a4M7HHX48oygj4XwraSbsigmGcAvdeo9f8AD2eVwoqJxrUQPLYmqRypF7f8",
  "key3": "3FJV3z32tkjR7KvzXK9T1hj2Xe4h6rBoQ3JUYXXEQ6oFYQRek1UhDvr7FTVujPXRzWKzdvDTUBaPKH4Dn4N2AQEF",
  "key4": "xUwm8pbDDuXJbCatNydWVnJKasfBx98tfoGy6VjanChwX399boMALEZmqmZWhumAuUopNHbDjJ32n9EJLHf89QN",
  "key5": "5bNh4HVJTEvumiUWPXrYkg8Wtf9wbbBDciZGWZHfSD5x8G7Fi5H9UzCxSh9QpkScBAnGPsXj53BpwrexMGjVbxDw",
  "key6": "3W4Q2Gbwrwe124B4f6HzhfqR9tinXinWzsjSDf87uQSrczmYhSALDBDwwtB83HHamXU2azkkg8rUwr5bWoK2f4qs",
  "key7": "2qRe6XHBaQSeQnDRn7nN1tFVM5mu7mbC9yLNtSkaevvAr7U789ZcznaxJocboKfjrZdwyT1CYJL2g3AXVfUJG633",
  "key8": "4VPvRN184PTpgyBjjm2ajgUn8Q8hWm2nZY73Thu8BbDU5D5sjSgD7iz2FmrneRDQdbYhnJkLZKDJ3Ery95GSjwzp",
  "key9": "2ikHp6jeZuLvdfEv7nXEh4Ly3Na2FKneFKQXYkdGZxuZuAHTiu3tuG1CF5MHDvBWGnRdjVk2UwvjbSgHVFpiN2Ut",
  "key10": "5fUvFgAWpuLpoETHgEUWhoepNSmX1kr5a1Bf463dZPBDYAC6jv5RoanqeQLJwhHW4vJVyNK1wrWwtKPfse6eVqhB",
  "key11": "5AUXLmANjbbz2e4X1trBRiEyk27V2LYsDf6fpqpL9sBntwAhKD2D3bVYij7WJdwzoA7k31NhipQdH3G5jQrH2ZZL",
  "key12": "4Rxs9E1suSBGGuzDdW1EW3qXNwfVF3DJiAW7qjyRHdcKzCV9dQJYyiABFbkdv8GWj1HXY9NFgMQXjeqWC64rL93F",
  "key13": "ueZEGiHbrMc1B1BL9MLMK7aAy6fTA5P4mKWSavFTgiNqGEBCCamYtYrjE7JcqfYg1V9LRztM5qkdSTUHdYLjAh7",
  "key14": "y45ePfz6uFnUuKrxL5XCtZp8cpZmWAiainzbxQxt8kLEcibW8BayrdE9AYWwFxDt5KpE1A2YckYRhspMKYJQ7xh",
  "key15": "3UmY9HhcW7akjz83X4TCmpA62pQbGouaqy148H4nZcKroX95JMzuaSu17sxtFitcBPddVosnkQGxeYeu1yJ4Te2Z",
  "key16": "vpkhsm9KBGBoFwLtXLgxV8T5RxpbmLHxYAMEar779okLAQkASZFrbrgmJAMt3HiuuL27s3Uj2x7RN5gGrme3gin",
  "key17": "5CAvH5JzTN44a4nDgtNHKkVmDRp5H7CNL7RRS57RvGZTPitQfQZFHUh9CRhzzaRDnchJHUVyPzRjgWuuyQokUaKA",
  "key18": "xq9WD6HZoXdG9Z5NXFrP6vayzyz9NH3fMC1HUc6u74YJLvyQoXkz54zYTWuvxqTsPizViZ793q6z9tYXwJmNtPB",
  "key19": "4fJkwzbiqCoiXzSWppQEd1xYjUzqdT8t8V2Lj4tZ3E3KuPSPr3QffCJZjfz7Y1JpVJ2KjHRfXtMZTLcZBbjvKzsF",
  "key20": "ZQYArFhDasSeJzhd542F9kdWH81zygK9skSqqYKmEVKMkFLJ5mZHEcNL1eCeR9py7rE2wqmHvEyo4oExhSa3PGd",
  "key21": "3cwbJw9RTXiyFFydwThe6EPB6c5uVNkTfRoq85NneTppxEX8sYzcsXNt7rs6LRn76ERW3MyBDtHQftZTbqER2VA1",
  "key22": "Uz9bCWQpurX2cSYc9SnMaQiBxePC2E6yJpWY5WiZKspCsedZuTEqokUJ2pymJehtMRSZEXKwbgHuxrFYuuHz6YT",
  "key23": "2Hyn5aVcjexdoQfLHtdrpdqBJuHcyBrA4vhbVyQeo3qV1JGRNoHV8KYjqkYh8Zxjs2sDTWqssYzUebTejxEUheNT",
  "key24": "2f6e1NZ5ohZH7cQRwyHZaVAw4B6Te4nUcXmApRN2LnfwphM1Uxvz7wNTzEWzAtTp3xSMdaPKW6de5yYpdqZ9t36f",
  "key25": "WuTmy6t1sBiKfv9fD7pWsC9oiaePnZssMrTHLzPTMv5Bmm6Vx4cQpSqYb8pa9Rkyv1VZnds7ENee3F9nR2V3ZXd",
  "key26": "2nQ8zTxf33CAUBa3yrTwserefXxdRiwVQrdY2DFgo8GguRv2Dt2rMFPwRJ8sJhc3ZtVctFsLapm3AD8F5YfiSr4r",
  "key27": "4iWqDHhh1DjkCTE24daFD9CxbB9fEDzuLe3acimhxzHWTcm6Fqe86q68HkiSxzRKKNojZ1owoboYLcaZzuZQWxLL",
  "key28": "5pqPCwTpXPVvp468E1AqaiKE9YsuwLyG1ebuqhQw9u6t6pEUcJWgHng4siufTNcpZg8JCVeMZqWaYw3dXuuxUYBP",
  "key29": "5obCPqsQNWJd5iyNK7dqvbSuUzytiJZd7W7vFYiLDGbhsLzPWUXwP8QuXUxLB25b3g1JQ2kr13yufov6ZQ8ooSXW",
  "key30": "63XTuhAAqJM6YKcHSuQkMWXiB7mB7y8MptUFtXPZmm9VNraKDLvtE2YoxcC1pSFvLuNK42i8cGd8H8aTCZpGD5va",
  "key31": "XHQ4S6qRoQV5jpT9c4uMHUcf3TjcmAQBTvGdrkWNKpGZoBaQeeCU5DPuyzqyP5bwLrDHpQWVbhb6RTFojk5MGtb",
  "key32": "5Mhvgw1L9ReXNfnk6TZ69dL6ArZQRAbYy3Cz8QgZ9rZKcTiFgtWJ2D8Hk5iDeNkGkdfyjafD5AdjxU8kvg1J6Dpr"
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
