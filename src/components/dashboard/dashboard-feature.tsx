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
    "5NLTKHRWXN5QUUazcaAGHLemGBexRAzuPRZ8LdrGppsPgwPf7fLZ1gDhBd7PZ3UHB4YmqN5AZaoGjXJBkfkzX8Lt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EnVURBPXuERJx8VC7e92QKxWyYY5V5opH1jgh8guucGRRka3ke4EfCDZ7Z9ZZ66onMxda5NYLZevCMGoEJSvxtq",
  "key1": "62n4x7yiCJVtdnNN3LzMYfnGufrHyG9tW16Q46NCjne5Bs6fizr2TotU5WFhhT9ZWgtPTYfyQ9fb3E6VJgLTzyQq",
  "key2": "8p9Ah3sd2iPPL7Y95gTtu3UA7k83mtuHFv3VjqDwXYomD9JWGxVPrjsf6mXJYJWjkThFQf7JteWqEdx1gSryA28",
  "key3": "2onGARpn43m8yWxoqD9GZrUuBd8EdztEgx4KXE1pxKqg23g17LN9igHPJdF6ucAhfNGjaFHMf9r78hkK38NJrQZs",
  "key4": "DXAUQCNgsEV7j7DUkgzh2rjqvZed4jgbkehJyv4sq5QB1nA8Lokz7AXxcoYg5iNtuNKR8PHhdHhYBnfV4a9wkcB",
  "key5": "yohnQQiW7UTdpKmAPGh4pSwRNXNNVW4iNKivCbZeEtufBd5y4MUxmq2JFbjuEiWJc8wfmhzexbHyjYe3z2eQ7SA",
  "key6": "5BGrbk1BMrTKrMvM354mtRegZYRAXrT8szZ1uQHFh6hjDX8eHNY8MP4y6iwrtmYfn4j365vPK4u2F83fvATLyBk3",
  "key7": "5B4QA5e6NkWJVb54v61tx5ft1Yw2b9tYFdD5PcngPPZ9Ft8y4AhiRx53t5mtQpmh8YhCVfL9R1oJmjphN5Y9yLrP",
  "key8": "4si6bLJgcarNE6KPS2NjmEd6GeWoSax3B1ooBYzcqk1UVmpuj2iubg2wUQbyDhZFiFyMjX92GKJJ5hsJ8hnGNgHs",
  "key9": "qEv4Q8bBQTPLRyvm4WbFTrEdviMHMCAU5Mo9VseNt8HJahLkSofx2E81D5oZpe2tvbKdAh5jbonK6HTsLzp8kMP",
  "key10": "2C3D1hP8xAtRH5DZehUY4EuVmmxwBMTq1AJAsnP7rkndEix2T7a1nu9iPKtR1nbP6xbGq5ku3rhdzRZy22AhSo19",
  "key11": "4iBv3rHFjjMvdMZ8naDhXJL5gLdp6mPHXv2TskyJre9wY7E2wpDQfhQxorgFAgssJyYdY62pxRqYyrs4SVBLQx8v",
  "key12": "63gK19wvBefjmyNaEy7vhSnUzVGBUcsSPAVyn2XLrwKNdMCbzCxt5tfHc5mvmCDyZ4XpEukBxZ9xN7twPLoJEbQ",
  "key13": "5VA715QCSSwzaFjhBeSEBHFnuTLzjjA5FWaygnkHsTWQ5tLYyMs4G1WZhUG6xZLbJp8ZjLoWcrH6ij4LAw42FbkF",
  "key14": "31YsogG8XSp9aAscSCoaToBDcKj6HkAtnLUrFNMHrpuDQnjsi2rnGRFP364UaHQPsT4rq5kemqMvMSGwmnJnQJaa",
  "key15": "2Sy5VZnJEe4w7opF1nYaejfJMQ6qQx95ChVm6QKLKXizr6bJVhgiPgXN1Z7RM99ppuTPQudTEaijk2Ug22qDp9yz",
  "key16": "2dZmjLrdHHHYPmupsUchXVeWkKKxZ2cm2FDq5fjxKsg3jYSrBhytXpNTJEtUmq1TP5eSWQoQjEP3ezgidmCextJz",
  "key17": "5F7YSoejKb6mgDdPmHkX4EGbiPsvP1ReXjafyVeuqkXo9ZSGagtMJbZJgfV3gQaVPJc1zpjjSoL2P56vhR4LNXHx",
  "key18": "5wB3BLftC4ZfJ1Ead17xzYqnhBtjFBL1iwwesggEo8p9yP9Hjz6MtvoLEXrDKZkeGR8nDhKsq5PtzwX1VLUveJGU",
  "key19": "5in75riYDjhtaXZgKjpWYxrwVdTcK3iBsjcxaFsRo11TGRVdrbZNziaR9uLFFFW52N3qC5C3iKvrzRr148n1Yfa2",
  "key20": "o7LMWheYWqe3AzZAYvU37r7fu25KAPxsHngsDsmS5B5Df2x4Y7p4zzjhgXhmzbRBWAd4QoU4gSQK4uUaEkHQEPy",
  "key21": "3MsMhu9F4pzjV81rXowLcmbASoKy3jZ1FmT2aXaJvi6cUdRgbASB1tPPDkFWGT9rUycXFwWYExBSt8J9ovtS2Q8q",
  "key22": "5cGZZsjiZztZGkudSTAojFKHEx8iDzNkAuYPbbADawwv8n9ibbnLjb9RxfS7goYveCXFAzw5noYRnVzEZiFscDpu",
  "key23": "41J5BEK68SU6XmiDf5GoveBqnT8Fjnu54HuHxLSW7BvgMoAyYmpRyzhnp9gWbjFyS9Zi2Q7derULAzCRfJGGh6XL",
  "key24": "2gP7NkmSHxjRbUUcH6bvXBvbpW6coPkUoxCHkbFW5vdzQkxvt1MVsUtMJQZ3B9KZMMAPgauei3GqCXbaa1AoD2FW",
  "key25": "3jfySf4HzqmLRRXNnny4yHzNikYmFv2DCURwMQ5fQksNU4wzNwGyTdCLgPNe2nfwLZtiX8qAG8TqjDsxf3EKa4DZ",
  "key26": "2UoitwESdBBJzk2bwQfgL4TFETWFUEZv5E2ej84t7vA3HeEZw3orTNh8bcGGijV3Vh9s6Cg7n3jy86q2Vo3PUUfL",
  "key27": "4MSkPt1MjKuGz7knCjzjSkh3nBTxZTmfPuro3cKb76EZARmzeEUdkxS4Tci4zXTsgVZ242nxGebUmiCgiCYGzuU1",
  "key28": "589yN6fWwiEZoo46ud9UvGmiNMcvzcxwyJ1wGA246ueVts4Fih6pPMrBpkKquBZ1AekgvnSwfuSACusUhY3Qe75o",
  "key29": "4nUfUDZwa4tC1PvP9xoQgyKeGdkyGEw7PkDuwDpLxS8mGmNXGSncg1XHppmyu5KgpXHyLWjWzb9XtD1zcpoiJXgV",
  "key30": "3Tap3MCXZ7ppMkjr6iBKg2k8CtWiQFvm8dH2yJPVLRk4D7YXYWkDNVNE8G5j2WhBfbtY771iGRKTjkKZz9KSWycd",
  "key31": "37U39m37aT2Un8RGiT1qMZqtr9dxHsX2St93QspQZLVB7sWjrhMioVGdHaN36y8aRSFSj5KcXpopdTNpkz7uCthV",
  "key32": "4oiZ6XmV3SzBeBxQFJrK4pTsXLhtLoCGfH4ZjfKJGJN5Hhf7NwpmyVgSM5fXEdVEfc1RgpurE7vkaH7jMbi3PUV3",
  "key33": "27SUuKHjzejJayotpBV72XUk2VbKNNLX5uqShir3msjvwpZQQx4QPQ7woR5LgemMNLoVjFRNKX2k5zYcfctG6wUW",
  "key34": "2xGwZkTtU7Er5N1ATNhvpEj3gDED6xvDpXnyuA7uFkYFNSpaVqdGAPnmdE86Z8L3nUaP9CjHGJHTnXWSKuAcHncG",
  "key35": "3sP6iWTLMEo9LAAAEitUW4dRdwWPfiduduoviWPQTVrpYyR77xz5Y8kGNCZSk7trBiuZLoGrHjhEb96aQPbKoJvB",
  "key36": "2cf6n5CYES8oyyveGw57UTF4iER1dXzoFHFkRn4LfW7SbiG6TRzinF9PfoCfj7ShQnm7xh4doRc81Fxqq45buVzC",
  "key37": "2iBbA49scJLXqJPCXZYGSh4BiDNq8gxMaJvoHogSKop4etKYDicDevjgqxhgvsUcqhj6oXrJVWvTUTbCjhNDV1jp",
  "key38": "3jVk7RCEoE7dSoGASvHvpnj59SSJRjBVoNvwQHdfCJWt7ncmTVMcdBhUxse8YLWffdMGXB5gprFG7R8Q8pBAGMPj",
  "key39": "2kESCmn1sVmZBXyunqP9ivkfCos1KeVXyL4RUWidjbkH3viGG3ZLt84xhoc9GfcXSsHu4y5QYUm54d4XL8Vt4ZEE",
  "key40": "2fKH6xCL3S5u7PVsC1YzjUZYpTjqNFDsAH38t8Pjd5MH2BYK7AnAdhBYwrp3m5GfR7DmyvQ98egawYshzND6StBJ",
  "key41": "5xQyUSenSwNdyVxTR36AfQn9qBSLtzwfZdo2jaxsrRuMBiwraY7V3zytfegUFWF2AhFvc9TSmqGkeLxuCWAYZi4q",
  "key42": "312MDryByVNJqgbdcuLbHwGVPZnj4YBnUMzJNcfiQWAf8wVYMUrjVtusn22LdjfvehkwNzbrHHFqoTZJzjHmtFtx"
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
