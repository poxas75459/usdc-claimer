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
    "tBHwRGvasdK2CfM3njsfxrc6bKbH9J5EzsHDLkEVnvk7Ns6dRnVmg4GWyRZwsg2d2ngiFSahHLfC7bygRaRadyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4chU6L6KwMfZDAQVqbf1G7zhMSHcCzKYUF9e59T2zPwaHmD3hA5AuT6Vua3gesktZQ5V7NN4ZR62xazQHfv1kS26",
  "key1": "5mGW1V3F9zRJWMp4Bxm66QacvLE4nL2oLDqwVXp4wuFPvGBMLcmAZziLkKUhn4wHCHq2rZH6f7LghMD3bbYaaVqV",
  "key2": "5fr51BuX7TZhugjkTy68jgqTXEUQ2T8b97xwSXfD5XETYf9r5JwzBqYNEP3GKvvnqvt9krHhLAXS5DgQT1ft5bqX",
  "key3": "3SGXd6dughnFrnde3vN55LJgM67yLmYeTD1mUR56ghaJFxN5F3vts4tkEDfetQQDgPHPjLXc9t2UbNhYQXxwv6S9",
  "key4": "4Ms3LMGR61q7GdWsUvKTrChBRpt6crseNENUSGXRbcWm3YBewfc7YPAMJr65jHfL9xhPDn1zL4o74DadRBoP3zZ7",
  "key5": "bb922fqs2vnfEKbZwzD29Hjofert5haPLsXwFqXVhEPsQSk7j3nnGaHdk84Kd1yKPw98FbKWtkVnop7G8yxzPJL",
  "key6": "3YGNvVEokSKM7EqienpKER6HYi9Qu32vASLgBvunCCyuTVGNzZNHJCnVZfW9j5sYghRPpceaVZjgSKnNYmeYg2zg",
  "key7": "EwQNAm7UkeyWYPFA1yrJFFswpJWLY7RzawgjW5yCh5NRjpTj92aZRTkqhNHHDwwt8mH4uv2vvpYwDPsiZLTjhD4",
  "key8": "4C8JWYFyujtt9HqkHgpeQFU3kbZKGqrmTHQWigQj4NzvEgVMy4rudj4PDUAFSE9CVzrmCLw7v6v41UWHB9Pnw2ND",
  "key9": "3bsMCPr29BXfPVbagASYiLw7dhD2EScte6oovAc2gUjBVYhSkE9ij8yQ793s2sGqkwYedj32PDvVc3rxHpncLMyY",
  "key10": "2QJLBJvtjrsejQKSL5CgQ7ZkNePmsEBmQRDVdRf6CoBBGjbpGxXFsosYk8K5vKswciwwrTxZTvaM9HHf8r96rans",
  "key11": "5PBgGTY9VugBW7dP6ArT4z53VWyye7ESm15zp29uDYBFKuhNuVGFYZiDsW3oJ93hXgc3XSgMA8oFFWUz8z44K1vf",
  "key12": "4b2PGA4tSLBRniFFnwjo94KcxVJwcpempqGjDmF2ScFeAkRVLAgWeb7Pk2P1EsvBCgGfB1iTniffqXCXLeno1zdt",
  "key13": "64S3gshPVtJ4CCfyX52C9kX6FjRe2mXjwC65c2eE8Bv6vQ7VCfekdBE4CtCMbvsRcwY5BHRTmxZxPbf8fJavB5z7",
  "key14": "4sUU6UCLRYt4rNkddff17Dwpth1w3LqP9zCHTfDx9cszaSXyrpyCFToKdNkJQTe4PDmD6om3B4XQt8B4xa7b4xEb",
  "key15": "565KcYg9kNiSU7dNj39YPfXASM1uhGvy4qkSjLRVemVATszetBJwRyLzwriia69RGzqfgS3w5vZongYZT46kedvT",
  "key16": "2UPW3PLF4HekkzPQsuSSEsamD2EmHWjPdstqXmK8YN3gLRs7fhR3SA7bnt7dd5g7jGp5HsXWUhx1VnXnRDbEe4ZP",
  "key17": "5bHzbV1RJYmegQQnM8VnXb7kZiFg8Bit3gfAytvHRnckQUNj3SjUGqwsxBjZZ228RSk1EWD5Djfvu6i5bWfNN3vx",
  "key18": "3xnCiakE6LM5Sbz57W67oyWJUSsCSmGQtKiqJ4n5AqEFe5dFuqK4daUSsTaHxu6kWEar8zSBiPJshb3bM45njik8",
  "key19": "5q1cNymvYqsRfv2JZrT3pn3vR8k2krXr1yCf55TDWrGUvdMZCyHLsqn6mwmejrDqYHu1xB2B1E4jedmwFqK6P4wL",
  "key20": "dn9Fu4Y6q9yJLt8kK6LjSu7hY2y8Cd9NWgcKb7eejmjnK3Nw5P8Ym8MbVo3t9cCLaw1sCDdxZDvhBFJjypnwo7U",
  "key21": "ZnSSSPL97Ym8SxMkU1VuGXMyby5DtWiSZ6wQEFQ13LDdaTjszgG94fma37nvH9n4jVMYSYmqXz2QaWXnqPmKopX",
  "key22": "5noKHRrD3THMf2k8hhrXhF6unD7Dhu4sHrWYM9QZrGNTAWXixWSU8pbfpBBs1NwqBb3XcDpjLJZ9Xoa9YxBUq2TY",
  "key23": "55pmqNZBrGuFqNkLVqZxR4bW87yNg1KJpt2b8LFcG9NduzxxjwGApFFZZHP5iVu7fZeX9a9Fpi3YSQe6xBYC159h",
  "key24": "582yzCGu3SqSE6HgpQ4Fv4wkjhB6QfAAngrwnt1AToPYeg9j3oL1SJXFP4S8xEnbvQ4t6zN7hfWUx8vBDwsBpanW",
  "key25": "5725Gci5MQYyyT3m8iWKP1s6MaSrkdV9MK4jxxNGjo7F1u3eiwVH5bvCgef5v42aAcEHPFU6kWG2DxTPzzm7rLCh",
  "key26": "5uWRzigQAQ881DNWfh9LEyU7HpZ6utGc2nwUETZXBbJ23nEq9Cndu8dy2xo9xJVac7Yj8R6cT4MPUg3EDEDV42z5",
  "key27": "5uxRwc2HwMo1pFz7mGXfqM55kXaaP6hTEuDfgwPaCKnuUPaPZUP34SqTZrKVbfqKXcpXmaMPqUTGG9GPwBoqaceB",
  "key28": "2jn3RZkCYzNyT65WcXYLJtJXgDASPqpTbuC4jwfUBjrhk3deEMdW9q8rebqW5RoxenqkQiRSiLdz6cpdKNVFD55Z",
  "key29": "66kv8y6tWzvx6p1tWcf2TJCikRdh8LQwzoJgo7iTV8eGehJZrZ645rmBAgyF3spQLgsaGVcskHz1Jvu4mjcyVbM8",
  "key30": "63mmhJGcj3SkiPQqAzZY7c4zozwSC9vgV3eX6t7DYh47HCeFMf25DFFySQj2v6spPH2y7mMUyctJt1rHLYQLnEyg",
  "key31": "4p8VBURhFshJrVsyhLPgw45U8m44Jgy65DakWUPdXYrQHk73oikSo8f6jaEXBvCcHeW1jsvop3wNqzxtUWWJqmUR",
  "key32": "FQd4mR9toE4VKD6bwj6uJZJwx9J3vH7MtdsYtyRLHP5QR4otXTHpi2wrupZxWMZ563wTAX5zvzqQ21cfJmXV6tY",
  "key33": "GVjh6fvsdvPkJ69WQumZDRDpxwqqF59uHuQD9nuLqj7MUMAekcs4txRiVbgpEauGY8b3PTgLowy41syTyvaSXQr",
  "key34": "4gEe8zoqoKiXPHkc6wYUE8d59Z7QckqFPUdErfvyEL8Cfc7uniEhg8FSp21rTbx19pkV6shCyZgkuBgvNskywend",
  "key35": "5JU7PRwdVvjMwb8efsQsVb7Xw6xqY7oJLjTzBaYRGfdv9ZVkqYntW2yLQiPQEMMV7uSj7Gd4TbYa3kd3G1FredJu",
  "key36": "2yH6S7yBHvf1L61ge2CVbMK2EMfAdjxGY451GS1dypQ4JTbNeiKjywvtup2FVgwVU1p98SuqAKoVBxDV14GT3A48",
  "key37": "3YeM6kLWjPMCrqzm7Yx3qUNWsQnQt2BQ3XyuGdqcRvqsGX4ZNYBz7miNibKPycKBRQsxMyKQqA4FRnhgwNvkcZgb",
  "key38": "5iVaTzRV18o89pLXQW16RNzbz2jB15bgV8zV9AxopUsnNeJuXbUooqveEm3nuYTshtTajq5ZLX4Ei8Dh5hxhEPK8",
  "key39": "4FHXcL7BWWsuFgCU2GJFbqo6Vx7GRXqjhPeTaVR9PCZxie2HCxML5HuEBxR94ub4uSz4AbLT8P2FfCXGsP4PFEiC",
  "key40": "62in71nMfeNgvaQQuXS1UkL1XSdrkgNxBjwF1NZ4oSdCXDnpypnP7KdsSLzjWLqeitxiL8fMHZKSimwo2TFksY76",
  "key41": "3HguvcAE4TxPaygkaY2VYa7qHovAHpx8zfANBZdDYCJv1uGVrpgT5P7A5FdUdq3CjUHJWwRWrYjAGzm1Vqwu1JSf",
  "key42": "3wEH6yn23rw4wWW4DRfqDdtHP5heN6oF9DwrrCnnxgQdsDk2hCEKpyandL1HiPsry1221U93Zf2dZzwvY38J2QNx",
  "key43": "5BNtnuo2g5RgiZXYBuvw1T4xnXfbqFZCDh5ezh3D5KKj16nCDbCh3dzphwgFmZZz7NfJ6GWwEpgdcJNoe14pE2tt",
  "key44": "BNDecA1dUSBWSKZ8T6VLD3CADcYTpY2i3HPAyk8xyFddZdJF7tJeobqQ31JGghbLcvGkyfXverBGUhCVXE1EmSj",
  "key45": "5ydYvizQjCN2fgENHjH3jD1QWB8YCnptZGqW4wcAy2V5PTXN4DpMKPZqGdxwSiLiY4JQxiQQgU298YzccWqLYMHc"
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
