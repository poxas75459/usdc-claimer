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
    "55PsdGdLaKHLTs1LU2ouA7srg57RwYozvmZw2sipBBdkpXz9ChMwokZ94C595nfCtKLVVsA9kfq8vwBBihcADeXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UJ667GuXnsMvXBeypCbrmn1siR98kvseodUpy2UAXoiTNovJNAqRhoPRTeaBqdEHbMM2dHzJ9B7sqSABTPWeibh",
  "key1": "2GQhuv8xCaazwMQkMT7zPSZSDvPjtHF9NjY2g2aTDnqqwrjbL9rN7BLuW7SYcviEURXwqdZFwWUDHXEiTNgx2Axj",
  "key2": "4ASiVLv5QZrL925W1unNbeWEoQ3XtjowJ976wkHE8WxHFz8DBsWpRMbjS5K4zJ7jMBS1W6Xfb3oezbijvZwZUjGD",
  "key3": "4owkcVX2iCEDh58RzvqkAzdaqiW5sV1ikXcs1c6pia6CuoGbsK4zF5cKJvBU3wivXom4VoRLxBoQEXdG4z8erGjL",
  "key4": "5Gc42hsht3uRFUDgPQu44DLpDqvoW1xjvrox6D6myQJCai27okqNpnMvwiUc9StaC5UWSnd4Sv847J9LcqwDEVDs",
  "key5": "vEtuYEmZFtoG6ahdnz2T4qHa9kyuj2QaQ3HH9CqVqdwGYtYDoWYuFz1hUGtJ8CW6xy7ZZd4E7VcEUSx8c7WQeSd",
  "key6": "ZtZdAmTfnMTFwJappn8gAsz6B9SJRCcVuY9AcAKfHQhFY1YsYypXA9Kg3VK5pa3e3LMzZfsj4CC8snyYGF79bdA",
  "key7": "5kK6duPgpc7A7zUzxVkuKBm3ARxSZ28Fn2GTNEyfdjRayqaGQgwWdcuHrhBtLR8HMjcnCq3xsB2v4CPZZGGtgpRZ",
  "key8": "hwPA2F6dUtGhpfPmCTaGXTWmEqcziJMCTXERuykXJZ6PMKWpEEJhqjPbHtY7BdPP41cj9maWFkPDENckcYpafm6",
  "key9": "47QJXJSSTaerpkmsH1wsYpUc5YcgkGTiajdB44QpCFwdLrwFZC1qPKGE3MuTPHzEpHoawUsMZtkfiCEeWAm3Ykhb",
  "key10": "4FzhimNqs6wDYhdcZgKWqGs5YL74bn8Yrkz2aLNm9YpCV4f9ELVJv6MPGW7Bo7N9uJiYeBn5D9jFnmyQU8LHBSM9",
  "key11": "5nbTZL8yS8WACVXw6SkXfsfFfvpxHYN4CWwXVLpcHEe5Yfv9qXGrut5RbrtNu7m2P5GA3uFXj2dLZ511Vx6y69B6",
  "key12": "V345ujGFf32cfSBAVAzfa2vwYNNBSqVM5svfEfUQ89HYwofQgoEDL7KsbG95i8bMX9x7fmfpTpdwcJWTpxTqQt7",
  "key13": "5ci7gN8A8gz4pKdbY5ScreScPafaDtUcGUy9pH5CxeKm58GyP9Gc6Thk3RZSBs47rpyyDNmeuvEX2nNJkVAZtwJi",
  "key14": "4zrSYh6PPz4J7zFVWUaUbqMyhoGAuXhx9Q4qAGYASfknWUPD5yDcWsGyEGZnKKgdEDK66rrGQdGKZUaXLV5Se42E",
  "key15": "3pTbDwVWBhDQUeQHbRwsLX4Rs3ePcu7gTPgB56AwBvpeV2XTgASKAuWsDJm5dmoN5tiV6SFERQvZXsB6tVSteZL1",
  "key16": "3epHnorfAzGMFyW5bAt5aNBQv1ccTummy6D4QfAcQtSMJbmUuVCJ7ph3vUAMNWAHd92Emd192FhcyGNKm84CjaPM",
  "key17": "3x7UHrEn16BY98DaKyrBDXZGKjSPJYgVfpSP7fqivdqxPr5o3ifxAma3auNToi6RXBiXomYcAP7zhD7ytnKgYDF",
  "key18": "3gTaVPH6SY3WwXyqYHtFqtYukAh1LHBH9TQVsx5yN9PUvNLViQAVQ5MUboquijezYsYeJ749VvxcM1XapoyLxrVJ",
  "key19": "5eS6hWrSDuXTh8q6jQ2eN9DPsYJyVPSXFBXTy12qFoyp2ioGouJoozHCSibjRgasUdjygjABftv3oAVnwnveCuum",
  "key20": "2qDRBEwDY5mLuWgCJcbG5AQmmY5qnseLANs2YUsE98a2SNNNW8xD1z138xQmH7UnVmiJVk534sG4vpCNbQMCNBww",
  "key21": "2THnrQpAKHfGQYgbp7yUCAAHNGzEG2qwFkt4nobWfwrag1e4cVrFTpZKt9asP2nX7xMb4RShWz1saDYwNHV7nbMB",
  "key22": "4yU3SsBP8PXXH4VtP8UdeQcgVa53JHHgpfsqBqwDrba4N1zPQ2f5XjH6ZZ5LXJuw6CES9vR8wxe65WvFvZyWYZR8",
  "key23": "HxMDB3zgDTpEQtNg57FYgmn4YChbTcYn76HTMLBvchzZrtMyeoGpGk2rVZgXm7wXAG9n7HvRrUjYGkprreKHwzV",
  "key24": "4fD27VbfUhCCQedHhakd1i7JMXbNRLbjXShwjM8e1De43hBnfegJMob6QUyRPzaRgtaxtHV3hrMV2jzN8Svg52Vy",
  "key25": "4LnUGqrzpawfHSycnCSd1h3bJqkXxS8KP9ojnjwxvwYPKC5L78DG1AztXmcBn24BWwZmkDJ6iqhKCkNE9x6CZg9v",
  "key26": "37Dp2PqtGqmAyARQKbfAPBMUQWpoFd71HSwLqtveVDN7kuh4n9sB1jxTGr8fWuFKhxYarrW8qMKmdwJTJYbQ2s42",
  "key27": "5baLby66c3NCeRGyEkvKjsoNhV1dChwBKeK28LVAah1FDbLnE2VNWLJwVofHHcj4NJf1xbWofqw3WriW69LcQU5w",
  "key28": "5wkE49k7d78qxjgQh1QbMWQjBDV5GwZVbpZHdmWdYBxLEzwpifo77uSM55cApxBeDmQBw8L5tWFWnigExrJZ6y6J",
  "key29": "5nFUkkiEyPzdZUKKGtX52GVK7zb5DnjftQ3qcMHD52oqxB8FKyZNMYX2VZ5BN6RxmJ7PnyJBxybCn5ofziUdq98n",
  "key30": "t4L1NEiEk6vQQJETLLhNFpfVCjv7JBh3fxoywvCzmjDtdeSRyRVGN9sS7fPnHTmMYMpe9w8nhrXwP1M9xj1qPtb",
  "key31": "4sotnVHyuG1JYDywk9wLZaEeNf19scFGvUo5esvp26CeK6HVhMgWF61Eq7vYLUaw5PD97dXbeeGmHLMrouHcx9TB",
  "key32": "2pBTMXvUQTq5FMwzFLvnmtuKmVCivZoVtf4wdU5GFLFWRroGp2NNAAHvQcPLb2nPADfvSh27QcnHizrtrpQfKZhF",
  "key33": "5jEiAsz1YZpm8mQbQiZwTA1E592vBiFdMkBAqHeCnfG2mwTUhFobjFGKTScePc9uEpoUH9V4Zups8evNXjMzXUKs",
  "key34": "4sXKFdRqjo2Dk27C1N2cC3Lo1iHRTng9RSWNMXiBc9uop1gvyJ3joaBqjcpYr2VeMG65F9awjwPpVfyBQTcX7niR",
  "key35": "4HkacbGXhVLo3K9LGs5JXPhmyj7Lz2yLWGyYKyiQoJUc1AY9cHYkiQRRaZqtoQ13BLXWMMMvaECSa7RgtHmGtAMe",
  "key36": "5xRiP2SuaGWyb9dRrtxEzybpDn2Rud7uPccMxuzVPjmriMMGwPgA1hPTsxrKkjHnSUCz1nG5ojuVzcTXJpj9moSW",
  "key37": "MrrNdrAFsMEAzZCYcQPjmXLgNTeueKWqpz3Pi2nkmqFNYmsrPmXjsuR2BpKXxiHXWcAXcf5HWFFfEsN1vEA5hik",
  "key38": "3XFMZM61Ej1etDzR6NnshnYjaTxfDbtZX53yn2yCx3tpGFYesCjLmTjHFSWrF5aKT2nwzodegAWUGrunL6kiKxh7",
  "key39": "4eSnM8z74Tc96NFwHnFXPXhQRLdxhiK1XtR4BvvSyzyZAyMEvWehJ6xz3TdkmjTZjwcbDEu92TJtg12RK2A84TGG"
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
