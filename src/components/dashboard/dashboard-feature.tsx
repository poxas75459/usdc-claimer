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
    "rgJogTZ7PDigHxuzRRmgmkXUQ7YETJYEAw46CkDuYz32aWQDMwh1KPcZY54tmfJSWmJcmFp1wnWJ8FkwMtG6jx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DiZA5g6uCkTbaT5UxGE7xVjQhaJCUNLCmF8R9XhQyZbPXog6BUB1p9XHKfGzq2FZPbKLK1WDLyiDZhBMk2GxJYi",
  "key1": "38VoBtV2SACjB8mgXpubqH1Frcq7fFKkiZWtrjFcLXFnAVUg25QD8qtJWS7P9iXfD5jAa3pvzRJKiDmTPACxkHjj",
  "key2": "2DJeoBWN8WDAqRYsEryR77vPq5Lt8i3TtwsDt9fQnYQ4y6Py9w72wrRzH3iC9iQS3A8ckESmFfKbwXLTjD1REGnP",
  "key3": "BZovzNeSyJMaAY4cqWGfAtrr2ZGhhrLKjap9xdn2GeGc252xpX5uZqzttXMuFjjis18xuVjzqrmw6NAd42onjpc",
  "key4": "2oFYFsVZFKFdqDYspe1TVNUawzpoBjQ9dH76B3YjtLyDkCzGd7rstbWixfn55juEjaEdRvyYH8kcwQ8QCXAWdyRY",
  "key5": "2DVsA77KPHuuaQRJWn7g6czS3BKPrpAAWLfjyu6RHsk5GbpXdEatdvnCGM6r4ZG3KxMvCZxKWVEQCKrc94RJkjG1",
  "key6": "3MevYb9mFK2qwMMMzdr4k7pNUsndrm2e83mw2krhCkRzMhoV7vEFbgxqM1kFUdKJqzrWLRVzfCstCQ5VHeiG4XMF",
  "key7": "S5UuwXJLZSngcjKJrBGnxVmTdF31WRvbRkHr4msTfZEZsndTK9ySNiFzscVZdbWe9H3f8z7zfj14kVMumiF3j7j",
  "key8": "4QHQodHecLMke4DLcifWEzN2Qv7z7BybVY9o1WWDb7pkHqjKC2Etfi15dk3rYb3qVpCj6TjNEb5d5LRcEAQC8Ehs",
  "key9": "4RKghEsm8wokiDs2NQG6wUgRbJtKkR9cPftox9Tke42NtMYzJnpejrQUstjQFSiPu2a2yv44r98Q2Lx96nVAWshg",
  "key10": "44kiz67ofPcGhfzMe2Cyci8BPERU65oDXWRGP7kp6pQ2JgoAmM6SvpvfpChSswBUGv6uZeNdwUvEmRH8x8KordX",
  "key11": "4L9JQuDWGmZCe3vA2qJxtsRKDQvkahTBLrn1i9r7vxqLr27r9e2cve4UoXCj6vAUr29onhT8WiX2UMrshj47jLju",
  "key12": "2DTrCgXvwceSFLfbbmMXc5FdP8SGNXn7YpBSpUA8vA92Y6q7oxc6AM2mAtrqw9tJXpap77EVdwAry99MkoF1bR9e",
  "key13": "54oZgeWXB6nvSgsJzc3j3HhfuB7yPK3dpP8wzAWAeL1Mru9oMxqpydBajJDVpc71FraYS3twWkrbzrWUji5iGwCk",
  "key14": "3EK7fh4i2SaZ7iCns3NktavyPYt46Bx1rQWMFxCUxWU2L5yjmQtFdrJ85Xu7RSLgrX4d3tCL95HW9BDc6NEgPGqH",
  "key15": "Tu4B4dGFdUWyQDP4DJNdXBSn2Hz1WqinMzwA8SWNJwgUW2qfVtC56ucF8qffzn5xRDaukBaSra518sVL4KosG7G",
  "key16": "4LxMt5iA6ij8fDXY1FNVrkgfrpm6V6X1iMpC48ypvrWdYopW42E7RQEVUnyZ2X4GnqHkWqevSgC1kur6sHTHXZyd",
  "key17": "5fdHW5uJr7ts5EZaLRaXyE9ihGDLtP6G77xDy8wjTtqGW2BDJyCKD1qYb5M7VfkU6QpUgsjWBir5hufgUYkgUpgR",
  "key18": "2KSEpkznEUwHaUahDBdpQTRfmf4DgXWKggSgngxZWUWnfBwcykNwGr3gs4Xw5ejwiEmatBAgkSJZbusPZ3hux8CZ",
  "key19": "YZ99NzgpHMxHPnDnkwGyk6AxKsnb67wTWnRXTcAJgCJrrKc5ewikgGTaopqJ7ebjCiJiYuNJ94RDAGBPuNM4oyJ",
  "key20": "3mASqkHxU8E9uXwMzpt2BjMoY1FkKkFH3TNeDh16WQ7ytq3CcJGm5DqP7gifx1C6mzErGZ6XMEkCby5MEbQyFPoy",
  "key21": "5TqXCNDdxVxVkEN1UjwykmAxyZKAfHoVGt98jXKpqJr2sqa8LiaSnwyhmxktAu217WRBa9kvy6cY6xogS5ADS1hk",
  "key22": "248j2Ad4iUDzQevjdVtGCyJT2tT37zochEK8EKdnBu8AcVWk15dkxfRHcxC7rVsV3gEkg2hN1e3wibNmTXueVaQZ",
  "key23": "5hAaDj2RRb1Zncj5GH7fBJFkzzUSSrynefrcmX2MvtigNskAdr9qJKv4Rks3pN8csvhuGXeRjVBzJaFsqTv9RwZk",
  "key24": "4sBHXj26zkRQ7hRxh6Zt99drjU5AzbKCnnNiconLwiXX9zkquDjZw7zvKgB3jnBSQoChjJfNGmnA2DPqh18uEzZm",
  "key25": "wuVvYMLbhqYhL9oNHvVsY6Rn9LUqHZdHh4gQC1LzKn2SDpwhMWgyZNFFNkDXMPDZUS7hqThNij9bK5jgKSrDvmv",
  "key26": "RrT7jQcSL9DRpxCAhQBBMeRtGNGA8vExRcDFPnoWvwYGqCvQMv3osdSJYKTecjbZijP8rsiCiHb73wg8v4xEfKm",
  "key27": "xNM9CZ8DyzMn8PwLVpR1B1meYqgLnL9vGGpzvu4aNRw1uxvx8jPKbAmHJDV4LzG3tX2h82wkmVQu9CbGS8jpQCQ",
  "key28": "5H8fJ5xLtfKTTrRMHDDp9W4rGWsqYyyE893WdVa5bSCRQyzyzsUSeVHEss8pcAhziCFXNHDLgbr52Z67yPbjV3Jp",
  "key29": "4Pq9VMcWqGvbJsWAt1YNoSHXs4M5pDpuaKGMZZkzGiSup8FaHB6rrsko2pnCtFxrjACX7SuGkAD8uZLVLShdHQ6",
  "key30": "5WJVMoNTigaDqEzd8Qn3Dgfy4RibrdA5PJT1H2zrM8WoJnVYJA2JRPRBeXkz4FoKLvYVpm8APQBizYg9fmbiTEHu",
  "key31": "4saxSAvfExzGCTNCk9pASJMQw136udLNgAyMD7qmevv9C885pGeuvYqJjMnLo78nUvQf55FPJqEEKG6fe3u4axW3",
  "key32": "4edto92PgVw1EJ1M6pfS8tWon4YB2YQuLr29VdSjbUSbjBvUAHjKALZC3HmxSnMAzCvtpVj5uVsx8yDc6DxpovC4",
  "key33": "5k97AP8HVV52jigy8Fn5ETVVSiU7JqyDdbmUuSrqueqJLK5AVQMMnejodYnb4dDQjhKhuY6jHR5B6jvAciDzPQci"
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
