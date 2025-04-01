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
    "43QHivtM8MTdc6xu2uSfWgsgG1obZi1z9RKVJnse9uuS5ycRfPttHrYk2ww81j69Yi22hbyMp7FSSUjhqpne9bJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pkGfneNAgW7Xkg28mAKhcCCWoDzknWNhBus1EPTXWtBExC8GFmjaBaMkk7hG8cqwjQk6oSsr6jcETEniTwShVEY",
  "key1": "62FrQGy1gV63H8ZG12uHc59EkPb7iyeB4vBa8TFyFXzJjUYq2pGiVNqyFK5h7TRRMUGAxKHHnDEdDHRmdTa7u6eq",
  "key2": "5EqjxRvjbz6hFgiiqXj4Py39Qt8TokLDd3bgsjfQv8ELm17soA5M8DFeHrhzsDAA1xZhbztChtPNhFbTNGY462WF",
  "key3": "2zNBeaedyVkTM9UvY2ZW6oeFVfeiMNnmx11cNAHQAR8h7WjoYMCuAZkeok1jmZUDHdgRKxfFEQC9TVGczo21iWCX",
  "key4": "3AhBr1wADwtja4dxqUzAX2Egxvxcofu1oVEZzSvqKXuqNHUt6duSoMyxLxLQs6qvZ2SdppZCCjPKg6oig2swQAfU",
  "key5": "4EDLGDiNi1LkfcKBBdFvjzyn7CkojqqyAKQ6EXCakD48yPXf5d2zDTidkaK4p8PtCnAM6DrhzVNqkNa8aiKpb4ef",
  "key6": "rkR299bjvfJA7b3W5ieGRqAZRRdTQdmejLvYVb8PX1GDpUXcNG7rbM5N4ybEdFBApzHxtgVzrPsBkbkmXF33dXm",
  "key7": "89sf2t5ur8F4T4y9exGr5BTiaLF5p8cFnsdpXPWUmxfsanHKDMZdMVJhdLGXsDYE8QbAUWajzQjsqxtFd7xnZF2",
  "key8": "2h4Z95nAx1T3eHFtTkJjE9uYCM7PnVFkvzzkoabCLgbLgbZ6rLw83xQkCpRKzFtVKEopBRJpRPN6eoUWkC3c9aL3",
  "key9": "4HBm3zWvffJFtC17SEQySYHKjax3ZGFQeW4fKX13xSB5mLnAoMSugHQxAtGaxnPwe4nF4ZVi7p3sxAW3zHJpcuJq",
  "key10": "4GM8DRnx7A6GCkvVH3oWfwxRMg89u5hFdNeVEncEdzzDLFeBWE1U2vjSD19ASipuAK13yUW2h2TbHkiTgdUyHpNc",
  "key11": "jqbEBSPUPkfvmn3daJ34CWntXeN9SLo9dTj8ToVgRpRJpZJmbbHeppUHKSjrtCo7CTo7VNwoxnFpF4dctTUV1wa",
  "key12": "55UvxAvt1vzY9KTv2i4CfPofop7JXrbRoCTt6dkt19HpHH5hSjMuhpYxgPzabP7r6iGziSVdWEBRit56PeVFexF8",
  "key13": "3znduJAUS62Epxs4yhhMbLeKnEwMsshHHhmUEdnu5YT2djJ8brzprtxKuGAh8ksbejQ3FjHGgp5XKQKTCDFwRUSh",
  "key14": "5xHmjeTdiV5VUE7yVGpYcrbYNm94XAakpyQromRB8kbthZB25xHEuTVTjzK4pgweKszXZB9v5mirqyWVmgPjtS2h",
  "key15": "3CJkQiXTTCyaEN9TiuNSF5cZTNFZG9Amhc9AcUdii8Dy8wFrLu91yhysRwjP5PaK9WMaSFPzpME6bqhiJsFcuSTt",
  "key16": "mWED3q8Tn8Jbgp12xF44miDB8UBHWRYPKpUWL24W8v2uY6omeasmSVufvAtxekLWSy2ctGTG2QJoQWuXLqRZsbc",
  "key17": "46v1Xn19X4SHrPu2SZ8R5AaVvvS1RPtBAMKqmvXjvZqxRtjtBpK5ZCgbrz77zyZD6HYESPRnJMbKRPV17Nwud7UM",
  "key18": "2BSsWiUFgbYPDkHFkYhQHPkrdbbXjkQeZQcFxDFQueVMqgVV1cCuVBAGJqkf9pAzzntzsRwQh2s1tK7qCso8fM6u",
  "key19": "qhynZiKXMC2QyqCT4qg5JGQSG5mtwh7QcQUvP1xrkPXLMetzbe8rFXLD4GhQTZ3J6CcFCjGSYimPiGyjVBKvCiH",
  "key20": "43fR8Xv3oQAthrCEQCeGEZ29x4cWqvK1rfzfSVjfe4CFLxzUACbAnztKzFJ296YCMquEtccYVrKW9xLFfVG45cLd",
  "key21": "2qNTzJqTjmfLjCrh5APsCWDLCpbBXqkPUjE44oXq7GGfGdczuZTWgvh4gkshsoaRqxXNi9Cv8KjjF2edgBJFew36",
  "key22": "4a3A3rQ97AbftfawZsYNhWJSomTE6Gw7qTw1k9qePyjQe2wsG7CSVDnwHMr4u3kMTocq4uV1gQziYjLcPE9Ji4ip",
  "key23": "2sDuawykiLpJMWcYeDGxuFr4qDNmpPvTYXD4qF6MB795gnjAxGuWdD62QmfQvd5p6jfQM5yan2jTsReHtak7pNb1",
  "key24": "4WNxF5YJZ7Y2nk4DVNJJDFYwGRziJQw8NQtgreK6FJrEf8QxHUbiVcvHGxhR6iN6Rz5i7ycUDnVhtvVTXS443TsS",
  "key25": "FyPmaM5dtNJZdwQNnoDxNRGdWHKwh1QwLFrXeYFzV73PVHMjehs9VwwLEkSChEzbSkJ5YW4dZssyDyPU3shpH6z",
  "key26": "41j4AZ7F36DSMzEGjJ7Ethum4mAoRxP5vyNEib1oXRBnK32xZtoW1PxhoSCdEBfjdi3tobRmvx26MZRr5A3cKVMM",
  "key27": "4sburTn1oa6jD31tB22ZiMZAQ6hcrHobpuDA8yczAAoceHcy7iD3qYFDJ48TCucfeQMjuhW5ieKwQQTKMqeTsAtQ",
  "key28": "4BGwbc31MoMAYovhiyGH6zGwQRNhEnkrCL6eB6hZVkbuvWPSfJPGvSmjDFU5WSfN6k15ATuXRZHXLxueeosbQDTv"
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
