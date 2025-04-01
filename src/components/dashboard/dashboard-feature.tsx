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
    "3THxWAkvSMA6vmCfcomZY9qXTb1Jpu4DpaEnSPXKyBojmy1LZ6Z7VSGRWMm2U6JR8EH2Hc5E1zuZCZ5BDWD4ph1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s9xkdord3cYEpBGLZ1xTyhey2tSVnv4WTxkrGoF62uHqdoj7VyVrj4hbMKSWXGMivXXCNBxTnt9KveeMxRPQ24v",
  "key1": "5UfVFX2DMz6i7sRG9YE1oYbfJd3sv577Byfr8YYyPrD1Ey6Yv1EKJ3uLAoG1Tqdcf6gETXpq7xgqGbMRD2XhfdLz",
  "key2": "65fjMxciydfyeVfzXfNuMoFaoR9oeZAqq6E2pK3Jf19udYxtkxTTBYV9oCAM2UazAULYwSup2cmGG6a3utfnumyu",
  "key3": "2FhrNA7h4KJXgPNtkS9WUJJBQw3pNUDJZhPUjG6kb41nRJFhkmmS7FhabeVZ2nutPYMdFvvKnhuHFEg3y3WcTNR8",
  "key4": "3Y84LmKQAadwiJu4GwtnjcF7uuAdPrkMAkmAKDc6agTh6crhNV9LrX81PcHbyKQhFRb7fP2kY7FRRP98Ra5BjUtD",
  "key5": "2V11FuXRuQVYBwV9Ue6qpnxWr6c6R3MocSEKknrxLwv3SPQS5xC5T4X6dhfGALRarLR3qYSjAe9DcJxQ6spVVg6w",
  "key6": "1U5Vxk447zhVz64dEMeFjNwwHnfnwZY6Y77ukxdx3kthSXcLFnBmb1bAfBpAg3EN8jf7UwEBDRTb9YoirCtZMta",
  "key7": "2zDxECVRkHNjnyuMymAYufE5bJpYhzDnHBi4xBQ9PtWYrgxxhEgp2JUvJwjRFEJnNjUSZCQuVXswYnx9mGVivDC6",
  "key8": "65U4GuYELBCuR9EWNDbjxsBrrbVKQpPxVUaDp6VMwEs9tKfuKRDSz7h58REWumPdSAC8dRZ9rWK6xuCKbYxxjjH1",
  "key9": "3T1veB7GU21Y8de3ESpsRGPqVpaCC3AjfjSa68XZLcFBsicN9KQrskgkzeEJVt9UuKgAXC71ZL4E9eVX3d573ymQ",
  "key10": "2voYWrsPGiGfPKkrhvwsQThajgLivdNnaqP4JKmp9eDK8NF3ZztZCe4mWgCYq7mESxSoUXbmqNcjS8RhuGDwVTh8",
  "key11": "RDJ7R4Mk6Ee4kmP2ZHHeJciUjopbgmuiC6cw8UwSRyi2tSWa4yLFqKDshkoMk8WXpYwU8QTdZsoBePiNEouyvoH",
  "key12": "2gHxtw6Mnni3HMpDszKsP5cLrzLoGHfi5ft14Tp9LfdaguxCA5AXfZNPXuYo23iZepLzfibwz9rmpjnkcFWhjKvB",
  "key13": "2g2SxDbQim9qGCg11L7e55r5ndemnNbmBCVdC5jCgaGaKkC9GR1wDFkkX7vbhCmRZuus6epQNG6RXw9a4KwXRqv4",
  "key14": "3f1GZQJgAp8KkXuKb4XzVKRhvKCg11GBFx1RiWiKtV9F67s8gZMfXHGEoGA52EjpB2PN9RH2x5g5s3bqD5Xj3Te9",
  "key15": "rwhzjGJzV5ajWGDscYshg2Fq6E1zKqX9VKCqYY2jLuCM8V9BTXWggv2DEJ5oRNf1ewnH5x4amkoKcN5vr8e9Kmv",
  "key16": "2kqouxyKWfahx6HdyXoQbt4P33yhwbdxSdQ7r3qEEhFfbztwVQLRrPZUQz45v56RGvHW2HZKJacrKmxbyCCCGD1z",
  "key17": "3FmwL7y9G15ynwV2i228HsxCVnT6ZW12d3y4nAmi96L6vF5WkAUKDbsThQvtT1Jp6YWdz8Pu1cGr7RrVhKyQPt6p",
  "key18": "2GLLXNkVHMc98RBQNY3H9crBAEoZUf16zWkNSXembufpYoaUDJT2nZ8JQv7k2c4nRKtJ2t5YcATf8eSGAs8pbYZ2",
  "key19": "4ADSDt5ifFQELwb8kp3xLfMp8xgy26Fi5wUgb4qBD7W2pqDk8ZhQM5CD8Snwp3L6JZNpCr4Qw544b1ib2LRkSVbw",
  "key20": "5R6uh7Cg58YDdqZksmsuGi4HFZgxtKMXb36vYrhdBz4HaKtkjS4GK2yedtAQXAeT377tcvWXawa3EryVCBNTRedY",
  "key21": "5GimqPz6bT7dG7N5Yjuu2e6wX636RcVDK1HB8tELbwmUF7EPBtFe6dogTzyLE81jrzCWqbMdC1mnzZKo3D5m9rn1",
  "key22": "2zdFwA8SDmGs9AF2pA5RnwbTGmB4cKrxjsjJ6W7PRDM7iBSWx5zTQXHkcYxTWnJXgW1mi94MpmdXrLqnSB6X9cks",
  "key23": "3wGtvVybHGG4FAxqziBe9LC7QPSmTd5GefinnmH4tsbKtqwMm7hVn9PQNJGcYuVcW2kuDceFin1y43XhZyhViqdM",
  "key24": "3t8oMuhGcf6EKPsKwNoKX48EP9T7zLjCwzEbgSq1yzaN8sSWFr2jawtiwwJhA7QfU1qwJ9PEYetUJCAHayth6YaC",
  "key25": "5cDbmsGRRdfgc7Faei1uYEf2Sv18UyYWb1zb1Re3dgHhgX8vzhhwBmncAb4AJfjnJN2Qeha1iiicGPcWWNN49L47",
  "key26": "SCqfz4TPSMtUKVrKivrAApUYYiQQLkh3jxNesgYWy71SA6WCYEBTsijwLM5drZRAFEWvjP7tKPdAYjZPhtaeWhU",
  "key27": "34yNCrpai4Kn5tGnq9cd8o4XDxfTJ3f7An9PgJi4fzYTTTMy5i1DwD44GJwxw3NMSCCshnT1tAuMyonBooKAXEeu",
  "key28": "2gVfGnMvNt61GT5E7TxkE1r1dX9gVk37EU3MVotdqEM3pXKTxeBTM6kmP9Cd9sBhwSqKtespM5DN1N2JwhXh62hL",
  "key29": "5i6p44p2vFMfJrhnF2mb62UFgGwKw98qTorvqjmGYJPZAUP4iChLTrtnjyBjznozMc4n6Z23eZFmY75ok7c4aEwG",
  "key30": "5NxMczK9kDf1rS3ahnqyA5kgBFKEveDFZpWeS4omr5XdhtyRKqKCVHUGwuCtrgGwRbRb6Rv9mrs1epNxZ1aBPc7H",
  "key31": "3mLwWmfyyUWcmorBPhTLaAqE63syDLw9HcjQUziosTCiz5ALPqWpmNHo1NR1KkaoyK5SuzqBn1LrxKo76YceemAq",
  "key32": "479v3ZdzJve25GKSXcQJFMfFkKC6KYf3voMXStRWKqMWcKd3j1DnGfzr2VpBAWiTE1iCG3gcCLBVkAL5nN5FmWWC",
  "key33": "2yTYJsRSgCqwrk3ccPAK8auS2RV562yX6cKVDRhYAjRPGKEZK2sj5KyxpAfsU33Jop3jd1ATVC8JzXCaSBj2bREs",
  "key34": "2Sm9WpfqQa52QxCsH8wnMLeoj4KsQ2LSBjKd5cTMYDZGqmrDAaGeGpoPcMibSe7JZ9FMJDes2BCcJFx1HouHNRUj",
  "key35": "4PPqsoccwKgJ2WriCGGZ1ZPGGwtUB86D8b36oeDjgi2dA6akQ2qLCXVW4UKukP1YNGMwg8XDMeTr8gNSWQCe3T2E",
  "key36": "3JYAH5z4XpwVaSGQZPemR9g8Ucg3xMrjVix4RxPAUgFtJHCf96y1CbfaetdKJsNiNHPFxGXdCf4xSDW7KnGb4fFu",
  "key37": "2ePcVZ9JwsbUXHC2F7RzTM5kYwuzKQ9rNHSEUyCLJ37WTkMaVPYwefumawuVC5gpkLGdCcKgut8DnyeNtaArBh1P",
  "key38": "2vpFz5SFA8fK5H2XomZZAE3XgsdwQJ6Q7VBYsjXJvBGWeKWdxXuME1AZMGqCSMiuEMsyyzMK5DxWyBf9nXHGDdi8",
  "key39": "PD84kRAxhYuHPLNMH8M8BuTzojqEvdw5kgNywsqiu1rGGtk1r96rLvA1Aho8g7NGMD4HuoAuWAZtux2bYLY5Xfk",
  "key40": "2qXry1Sg3ENJvNu4VhV8q7X3qSRWt9ZoR7HdgV7WVQb1D45weR29XTjz4y57m9BqVk782YmkDzHJrHMGd7BY2UB7",
  "key41": "5if9FeFasVHWMXSCMG1oE9kahrmpDxEpQjLKeqNdN6ugaMvNbj7EPHkgmUtUEpEQgp6jZpwi9z4rqcrKMY9zddY9",
  "key42": "5QQf2XiHSA3RMMznRe6kKyfxUZDZfTn5u2NtXoVDzHoZFHr5sSWv928xFieg1LG6Q1B3SDEGKvs5P8nQqtdB2yUd"
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
