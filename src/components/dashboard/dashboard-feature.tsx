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
    "2r3YkXL3PJJ2os6KvfeTRg9uPcAE6MhVjDSSPqdhpHMHUwZL9ATXKZ93E69dYfSu8wmBMCPvqjFsMyT8fyT9uaGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tVgyU2hUpmJ2zSQsadKAr12h8ksaXq1XgzHhUjpn4zj9ewibE5KGWmY6xYAjLTNum4wUTFDdJQZ93BQFwGoFBUS",
  "key1": "4UJ6b2knWs867vEkUeXCEBUji6tiEWejsG84aFvggzcjysGYyc2MKFzy75b17osh7mckEovus1UDf4ckKECm7Tbg",
  "key2": "3MiigoiEHn1Mrexd6XHHhdNGQ3MPyU6dQycCgMGSX9uJzVbLHBAVyiGenM4jwAhwp3Mt1RZy8AueHvpZ8J967fxT",
  "key3": "2VbFoz22srp4ykhpfKEpiepwFwS7r3ytDx7sJcyWiuMtcxT7uBKBT9FZpMhTzzNL3GmixnFfP96euH3WutTASCK2",
  "key4": "5RCrVq4prjwnakYq72rNQa46mRDKqSRmEqmeMbsBqwRhqvp15kSQGS9kXV4MBJ8ZKo7NbYfc6AL4gdUpcmy5uFwo",
  "key5": "6DvryMNikxKKhbHikodZ3b9V4QWWSmrz9oXk1haSnRH9BV7rKd57WcwMXDFYmFhS9aoWdBEdfaMn1vXttDumJdC",
  "key6": "7DkeZobxoob6VJ6JZGBZixFJcYMXWX4Q6aLmmEuX3MEbzbnpGLKSqJC8CKps6MoAbq1ac8swaxxbaw63xoKqaL3",
  "key7": "5JH3pRMf7EKCaB5XoBGi71xboc2HeVR82k1h2V5dGBSvvXyzFZSukiY66ebvWoW6iTnQu6bse2R3svek6APNcTJB",
  "key8": "2AD7eSQm5Uh8VB7LapH7A5a4TPXdku9JAhUSFkMoDdo3dchJTHx2CSy66N3QsmsDetUVBRYaXxtva8zSJYDQEWKL",
  "key9": "4K8S3XRjvegsqGeLtgM6iUBNoa2Jw2bYkF1oFRsfrRhUb3KMeXXjYCSyMvnk8ZPA47wmDbTdmQj4xseKqUSgbvJt",
  "key10": "3GFaozpG1k2s9C4BUqZykZfixV94rwPaxCsukWmAz4MxMaJotFemGE6VNLDazExHPmFacjRCCh5YyNbLerRs8aDu",
  "key11": "3hsWbiZ14zPq7N6bgPrvyCgygVcpVveLBWUri6XNXpJrrCWcf9qf1f8YV8FmuyiCev2G8N5U58u33QzKmhUVYKpd",
  "key12": "VSJRLsGadM1eLmF91YAkPLpL9vsqZtrKWsvM4EHa1gjjtMkWnjtTbq7EfH5D9yev7hNATWrZi6VFMns2DK2pgU9",
  "key13": "2JcDSXnkvMrYkN7zdqXci3QYfXspgP4RUof3ev7G6cBow2aFtunXf5xEnzF5ZxmKaoiHQuP4ZEQBHp8hd72oE2x6",
  "key14": "MngWZFLXMW4ACRxx7tdzbL7KkLixFL6YCcEPCDiquDbRANEGWnJX4BCyua75hfbi9kskwMS9oP7Jabq6fv33uVK",
  "key15": "5btm1dmomY25xjfUFs67MhVbbXtyWoWJRmofdGX9q2zb9oE51g6xBqDQJdvrqJ4Z5Wjw5VYd4EXSAh3qNfUFf5ra",
  "key16": "5kjdwf34QzDnS3SVP4dqgbDTdzYz56WXe9Wd4aUWF6nKLJcs8K8vhUinwQuYAbBaR4agmmn8c8RFD8XFANrhe3D3",
  "key17": "4zaU8JL8DJ8vRZr4kTHJZwQKQkm9JA2RaKkoVSkFrHZk8ZsKqKvRXbhEanmFDnBtwZg3X6CDj7BKJzNJMBSfMVkG",
  "key18": "66mKSTE6vtcUZzSfhZqqGszU9NQMQz9idEqyASna81Ndu3m32sUjw7Kr4xvAuSGPaEYxBcZ38htrSnYXP693LCWf",
  "key19": "3bRWrPCJYs7RaCpy9qFbBN8x6CTsLP4jheaaTs3mgWCB5q2YTB7H2qSMbzPGh24fkzdeRDHoyfVS88cqJVBe9Ein",
  "key20": "3MY5RtSswPeLA3bQfqD1dZDjPgQpu5guWZRTBUtJf17pCDuLcCy21ZCHv2hVsgSNfDJXogTxahJhpJguMxvKGgvx",
  "key21": "2cN186aCAptuURBaXY4gim16YMqJJXMz4yiEfgf7Uf7c8CQrta67KJDvHKTTQ562da7t3UCuDEURwdjoJqqTYXiZ",
  "key22": "2BDeuFbcxzbGk8Uu9weY68KTZdbv8dp9jCnaCRVPAdk3RiusZvEg8KB1Y93wKHk7v4frkzFC9nJLQA5abSg9nMxG",
  "key23": "5cXak1VWH8JoPGSbiH9EkXxEtg8JfKcZ3qhZYZ5WrxHp8kvndM1hoHAT29hdkMpt7nb64cEkXywVhGMkE3y8UM14",
  "key24": "2DRDoZR7vg23AA4rA3Dg1J3Tx3Da87gE5Bwe84q8T2cq2QHcAzezCnbMVnK8BMwzdxCZRF6LWJ5NDPkpUhR4TieZ",
  "key25": "yiABqxmSNzHGQHCVVWAMZgAbhV8EvsLPUJXnHaeXJu2GD7b5fTVduTXpaw7W2TNi3LkTQrm31bj2QecgTFzKeQF",
  "key26": "4hdzYxF1eKJk7UJQzcfYfi2V1EK7Y8WFayraapYFRWqB7ysS3SYRSs9Hd18WS6fCa4gSq23fAF4hLvrz5hWZCThz",
  "key27": "31HD6QcmiN8H6LKFH3b4dWLweRdQ5mGpd8CuRKLDr6BdFD84mfjEGPiVzC4PspwrmVMwYw7pb6p3DCwnvU4KzRBG",
  "key28": "FrbupvHGknEtAGJLzgM5nJKJs8hu8kmJzbPtp5WcQJMq4o7XC3TpanZGbhrusvY3c3UU2mChzRzSqDZnPWzkiLy",
  "key29": "5Hrfxs6Swy2hrBhGTkREFx5gk4Kks2TfVRLgghkYxYjbkbVq45zGbTgmQGhb5iMsSycgxN8uNjz3wkNz4Tatv8Tn",
  "key30": "5gd5hfcxzSmwpUdw9XbhNqWkrdxaYnfdaDxGPHLZMuC6GABF9mE7jvitQmHCrSByJMiAhYZSHJeWkVbTL5B6NvJW",
  "key31": "4R6nU77LrHtWJvZmZa4pkQ5UzN6cVeGZEPAzpxGFGzVNBbx6M2hSQD7qSRurR48qYaEWiuFneQQSVq2f98Za8yDB",
  "key32": "3eRLVQKA9sbyzEiUmLr1g2GmGYWKZaRmCGWd9W5i8a3Si37zqRKtcHx2nwB5bta4JUdNzvBhtikaHm4k5yW1pFQe",
  "key33": "5WjS1dkNANSZPJZmq8fKX7t56NxFYCos33g1geDUEVzL7uhpqvULVr76XKLP6bwjGd2MEH2zwySpucDEfKKCUTUs",
  "key34": "5oosfpCnXgCbqppsQczpi72RWuFQG9oSTe8hB2L298eHuPCwxbzVYTGnT33DJtcmu39DhadkDqabSWZJj3J7nXJf",
  "key35": "26G4uT9sWrAtUApXWMk2vcTwLw391ZCTLBsaednHzmh96Yzickp5vuiuK5qkUuykK4CninKHqDd2EqXqBgiK1zuc",
  "key36": "5V2wF1kYorbDLzuCaH5WMBKCNgL7brdrPXt2VKtVzQ6DBSgJmjcyHvtD3Mr6wN15CmAc2vwsAnXfYDVNjKffcQJo",
  "key37": "5LPjYbR6ZGyBUpUn4X8z1Z9AihtjB5dGoiskwztCjzVA68vHGNSiVUNe2qkwQ1P5XBcRXb2tQfarWs8PrdBRpqHv",
  "key38": "3BaBEBCe9ZKeGRMZAG8zXWkzT8UbUnaHEDYamVyXhctw9HyduaAG2LbJ3VTjRUbDzRVKTftnNaXCSRTJkevvJZW8",
  "key39": "4d9L4NrWNw9xaXdsYVzwpiZHWbx6du1M1qWqWYsN6cbAffgTd6G9XJVC7dqEN7Jj3a3cz38MKqSvNcEXk7h6njgv",
  "key40": "5tSLy3waVg6EmUZH1gXZEg59xurtxbrsfpXgvqeTh2wZjkFrrbNHfUW86ffSvCcA115bsyrrt24yMcTsrSxK1eRW",
  "key41": "2BBQ3dtzHMtGYrTobFaM7ML5s1cLkMRMZ9MEJT5xgadNZkJ5ziPm1Uc991rRZm4P2rExQPMuScFHPWCvBUzxPWVu"
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
