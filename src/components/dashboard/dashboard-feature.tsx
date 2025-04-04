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
    "3rHK1VA4t39PxbUDxnNFxHpFdzwjekibKszD48M4f1rRLysxqRjfKmVr3EWDfUmopn27xkYiT2k76jiwdk9xQnVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RK5tAUVvhER9cMF6ohj6uSkd2TFKEsR1UHJQvJQRyWuVeSpc8x6CftehMoW9drL7xFfG1d7wgpnRPyuwNRDeZB7",
  "key1": "5D1WanXPGfF8U5jEhJ766rEtsaQqufca5j3VrdSzaRQvY6Tc7fGdBmm3KHC17iHvtSPJesJchVgwMThBPR1K3PNQ",
  "key2": "2uZFxGj3P5Eg1J21NZ6aKECfEsS8RYTJD3ziuGj36G3iDbzuTcMkT78LhjgnATqf7Kbr5ogYBLGgJeNQFhQvaKGi",
  "key3": "24ZRbfBs1bAYofqkUWn4DPH3oyd8jaoLRt9SR4bWmYooeAhYWDxL5Rkcjq9uUMxRyN9WkGvBovpjtqJnqmBCjCZX",
  "key4": "2TuLF7L2mE8BpQ4Z3hNPqiEkP5WoCZoGXZjAS8oc2vCkEh1ujnocoDEbCQzgbDCVDqTRuxGNJ8YzjZnBqB6brR2T",
  "key5": "7N4nwoGNYeE5pz9MsbxMTNkhfttRDp735aL3NZWX8YoHYNpUcNYQZrgcQuBt4mik3ni9jhrijkctDj8cjj2u5Hf",
  "key6": "3D7j1phhb9vV86RNLW7fhv8uaMQax98gCN7MBLSuQcEGJEpEyYtnLdxt5MN3d5r9wboMidMSXTqW8EH8k4vpnHqU",
  "key7": "2PBvKq7XEpNoY1rYRhAHtxKq4VPv2tPxgp6PMyVopQEhLK5a7AoH4S3swYbxeCGooG36JRX1g6Xsfd5Qz5bBbtaq",
  "key8": "26NyJLwGKMpecYqAoKJsjjH1YoafermRGMVC1HogZWWvNx76EYgah22vXNw5F6pzs9fwv6wuupRmxzKa1fo4AXFq",
  "key9": "3T8e8d4MGrUAUm9PkJqgQgVdzEVSWvDTKiwqjBuUQrrzhvUybhiBGJRmEuC3xTD4ixyxGJU4Ptsg3YrNNfSN1dVU",
  "key10": "3QEyFsuR2vQUD8Z7NmvK8fQedRuWJKSnCNGxKQxuVe1PNUTioEP4LB8kQvdw2Xjyzh6vXA1vXmd7Fo5Zir68GQ1E",
  "key11": "2TqVmbwBkfAVYeDoMVd7VXHpVx7xGcWkDFphArkGebChSrnbJq5vnM9baxaLn1ng55H96mS6ZDJ4PMun1ghmALin",
  "key12": "2oA5d8psU416AzomtaUCieur9Hk5Pogwaa8bE5kpGXEM83J5etc6RZyeafXA6bKoRiQKDruzU1Roj5SLR7bTdtuL",
  "key13": "gb3dBbB5Hb8dBAAJ4Rw8JtpaDT9r2wWY7pD9X8g27AxKWQ3LLsWzQeCGg8if6Mz7vK66cAh2AgexmyK96bHKMSd",
  "key14": "54Ag44vUaVVtNLJLAxEYfMpW6DHTSzQCKRoGgvtS6VmPXXguunEQyv7TtqBTG7ekcdfx4pohvVchayGN4zCMzwyc",
  "key15": "5YKcBU3qDg6uMg9SrE1oAscnYkrhHnng6sdcMkPBsgqYe4GFiuA9QHKGBXzYvAefxJ6BTCuro6aJYRSpYRnoMsY8",
  "key16": "2gJGHZ8es3K2o9LLwbEu337LBpTkYD5VnZfFC6eDUArz79BakgiWFJHxQNWZmPrjDjFdLkBBkiVru6Pj5WUacr69",
  "key17": "2MfXJLT8vr11vv1WmZEfuvrGGFt1gXnNMNUfZnzG2TmZLVWUrfup6DJrmcb22k916idya1shbT1zTzG7DFdYsFX3",
  "key18": "2s8n9uKnc4cTLSSQaSTcLYusBBCMvi7eZYc2yU9C2XJadA1n19ducVd682QLCaL6R9WuXg78LitpPK2NnLFQ8kPh",
  "key19": "4gnQ3QR2jzEHHY1Y3QVLCEP4Ef3uGpMFKGoZTRrwthhmm85i5LMouX7C4JZwoCNCDAqauS2xnRN6rfH23RUPa9Xd",
  "key20": "4JTt4MHgjShpnng6E2HXPEQ4xQD3jBJFfp2DmKKjsB1fGL5PDwhJwwLeGkBhF4hRujbjDKErQvGk1c2r39jNTuZ2",
  "key21": "S6APAVMiJpcgVEQkfYCk1QBdwJQxadZt1y7gWf1K3g1TDRR9bvuN8JuphxE2FEtjntoQSzc45eLjRZXFKAc1GfD",
  "key22": "4neHsS3kB5XRF1UgMo4wNALiVLoJ26rWPC3kcLLuRcMhbNguF5RCqYgjf9AzBuEP1WgYPuAnPK9ycwmrGxsE1b6m",
  "key23": "TB8ivVKkgmjbU8mH7wQpWbYgpBV6L9bc8CFgZH9wxPYePKupREM9KS3T5TVBdL8LhpF4YP49e9NN2NWsxFvCt7i",
  "key24": "3voxUhsZyoeT7khpMA9ZQcfSxkZ3sTGEJjZfjvPSH43c26AWXUoPUnp8DbAVWqjPRevZRgMQJdh8sdkbsgc5488t",
  "key25": "4BicghqEs3D1oADDurwvvv82mWzM2fZLZUZvuvZmpn9deM5NAsQV9etHAt5uUe53JxitKejvPnRgN3H8pf3PN74B",
  "key26": "4WGk9MHq9QjxQT4j5jucHbzVUvLfgaXk6LAoU4gRfghzY2FNMVVzDozRh1L6nYcES6RAE9BT7nGrYLZGpJhxWQxd",
  "key27": "5R3MCw3ZJqhJP53gobnEAhoc7KhYPjDyLgipWh1297wbTJos1LwshrkJQN2FvH7tmzWiUBfU9ys9TamLoZ38dn1K",
  "key28": "sCQTQHz7Wzt6fKHSo4LuJ7tXxKrqjxRAFrW84NbuFa3jNQ2hm3vJ64ys6Pr7Z54CWV6Dfo2e6pg4zWi1hKDHihw",
  "key29": "5oMhL1xeQ3QbwhtQpNEe1VCdnUHfL3Yr3LQ2nPRzpbuvpRursk6kcmVYobxCsdZ9Eq8RY4jTjULDyezrdie5brEx",
  "key30": "4GRzM3EGx38AJZ5MSG6WTTAA9fP6baNd6vaZBYgEi5FAK7LhGxCewp8Nm5vWdXryAb6YCxwsRDD2F7gmUsdp8m3r",
  "key31": "4yEgk94RuLkyRDGyxdYKo5hpYJYFzXXwTpsQZoxFzQERSKZJxQahR38NTaBxy18HKvFuNxVJcG6K9zng3YSn8Jox",
  "key32": "4L4zTNqYvR6iAQ557WesdC5MGw3njRAYy3mJ6umcRRA2QfR3gznqSp5hrAAR6vgLifzXgeDJcjfPJjajXaPsrxcU",
  "key33": "kNjNK17QiUa5AFZcxWCpxxMnzJ2Mc4fqQNk8NHzhYfv2QfQYgCNVFHEzG2yPMarLh1DaUiaUadtMUVvynSa2gQX",
  "key34": "5aWYFmnUPjejre7CJCRLdoxt4W3UyinhiZ4ezFmaFBQf7rumTxXADwRWMwCGdhZuXquKXYEK2WFdZw3QpLjWLVSL",
  "key35": "67nLJafnDfcwn3JQ79Je2vXyvHA8Uj68H5LjhmQdkUEwmeY1ej1WbBjCFaFMK8t89vRtacEsFov4xoEGouh88KdM",
  "key36": "5tyYUESgAay6VVUxa8sJE51nqEVtWBnBG7B7EA6RirM2P39VQ6KKQyArZyh7EdtjUsz2tsjtxsr9wYEnS7ZqvU4U",
  "key37": "EFVjvofMidEsX1S57h4cKWpN1uuamFgMaNXKJaDTTDBvmnZo1cpyND5CS47NKLKyCFJjifw8GGEKXo7acJaFQr2",
  "key38": "R23FwPZSssPFWMLGeGnYuxf7YnrodyLqQk8vrd44yj4KrcDX2cj1jJG1y3JDFg3i1D2a7eZUafUwqH9JVueso2B",
  "key39": "G7F2AeHSXcMn4zaJsfsid8m4zAEcaWXj3WqRdEnDcVMeHATtDwL1gfyEFXVhzBxsD9DAP9CCd5pJm4XX6VrbLHA",
  "key40": "RKwjF1Kuoytpe1oFmcBxkgmWKr9mfA5cYz4jEtNU5RF2KqSa2ysyybZXXjcS265JuJUy4nYvptAc3znd6je8RDG",
  "key41": "65jVLGETZoFE6BYRCrDyrDqG9dRgQ7L92267qEgPK8LHN9U4XLqKms14Ht1Ys6k57areBYMkuN8XbqvFhgwDeFwm"
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
