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
    "5YVrTdkWrD6n9Fp7NqLQri5HXhCCJqNCv26bdMMycH3pCQRCo81Lst8furCaxGM5KEZ9M2fQacjxpFhUebbbtf7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ziZWpUxUoMfi7cC1PqaU6S8jyRrveoQcDVkoYweFBQ5GugFgsAdGQ3CdSTN6CgphBJBi1soX1PduDZMoTa5jYy",
  "key1": "2o272idijAWwH4K8Pq7z9isv9numtru9o37XSKgLrjGviok77wKdJS2KWPCYzjnRVpXEhvoQBkKK3uhq7BRZYc3S",
  "key2": "5c6RjvsMSwAvbj6dabNcr36M4WgajvinoZqkeGvy3XFRErRBxegaEBqtmES538KVreye8Bfn8AvymEG9BnztyBDv",
  "key3": "5iGEc1BTKGmmqDuFsoumfGDiAwHyhYPnuZApRz4pejSsKv3HuQRN4WHApouwEHwATStc8bjx2mPo7w3K77CbjEyS",
  "key4": "3fq41XMf7gajVD1Xo1youkEdhV4vRFbm2mCbSauKvY9XAYHrQHrcSZSNZNZpgeRyH2S2bwUYRNFZyryt6P3LrWCs",
  "key5": "2L3iaxa94V7m4WQAsoYVUJjH8CwieJEYMm2RhhUf4UviGDPVW3VsuxLoLdmS4UZmJGqtCYRQh6V52YkSM3iPiyNe",
  "key6": "2aVvLzw84aLRGN9zLa1ja6D2Uebhap6qfFJ7JUMw63tchpJKyPexg1DCoR3bU6A8VJdBfRmDimmq8Ev6qh4CY2bs",
  "key7": "58TJkhDdNgR3kLLd3XuiDJ77PsQdHhtWaAmPuDLuNphG4Hx7ixnN627pXkRpXqnDZZ5pU3GaH6d3GXVcTNgWGxeX",
  "key8": "4nJAUzUYWrmHNB9k9iUnWgg8w7buWvtDG86oe5TWmisFGUakogcsfGmXWBrzpfkhKqjv5oPPmaT6dnSrYSYx9WCM",
  "key9": "3yBPBAothJi3qqTEhYhygVGawxnkLYzjApXY3bw3ggPFUZUsNu4FNtrVRJm5YbTSiDeFfXQNMXY8BExirxLYNBjf",
  "key10": "3Arh6U2MyC2zR3dsnFimrRXpRySfFmTAdhVfcqw2Gp6Xpdb94TwhjJzQR9jtw71qW9LQe7CFhaBG2Cenq8hfQJb5",
  "key11": "3wg8jycf5Ci2id5RnTPQCZnZWh8Ws7VSBcVBDwbBHT5QrUDi7LeckE33x5jYH91KKT7kr3qjLas37MLfcXXJbp2d",
  "key12": "3nkLRL85MJoZUvhCwoi9UgnWxfVnrR7Pr8LpSLfp5Kd8HVPpWFDMkRgiQFLZ8SsfouqaFY3H4JriKowCHjG5rBUJ",
  "key13": "4qD3mWPj81tptiNfMGdhJ85TtRwgk7RT6HwEbA8QbM1pFs6oWEbFxEYEYcuqVPwRZAhQ5UBoWWwA78AEobykmM43",
  "key14": "3DdwW5tKtLM1HRBXdHTZUHx2zUhM5ayKkMAiXJmWrv2jmAvKsARJ9EZTyEB7ngi6TLh8eNNoAcQzAjbKvWHmMCzF",
  "key15": "3KpbTbF5r3F8Ha96JjWUb4j543avQHGvnLGq1J2VA1ndnSybBpGQe5Y2SnKmv5CDNfBXAr14yqhCrFySzfwQ7kxs",
  "key16": "BjWz7Rha5VcYqM6KWHEG1W1prAePR8C8ebeKPDsh3FYnE9nPRX7AgfnUpxrTLfEmSWzoAsoweoAdibnRWUvNm4d",
  "key17": "3BDwtxkLouDQP9GcKwGFG5XrfsufgbjUHczbQu8pc7Y9oNo4rd892i5ukGg3H7CwXD5XvCdFFdJXjEkVTiazTquW",
  "key18": "s9Zsz14V4fGJTiW4BB8mncMYuR1oUVB7HwPCPUHiWZGw493Z379kqC99zxSBqSsJ83dPmtTR5SHnFJvtTvU8sVQ",
  "key19": "5j5ZiVZXNHgx72SY9rWcB3oVH7S9F4VLu7xpfdJEGmgDF3M1e5A8wR6NREmxaB2JRApbi1HoRdT1fgBJXSxsGMH4",
  "key20": "4MTruS7X7kr5qyhXkg1HujkGXax28A8Qg2yZFTs21HzasmNUdsR7vAwVoyH3L9LzRAhVP6hoiaaBm8Cay6DXB1gv",
  "key21": "4Q45zxsFo5tJt1FEQuyaoYjueAK41foDXKeuAtND3PdnAzisWkFaJZZ9Rz81RGfvPrGvmZGM91CofGN5TeWZV1Y4",
  "key22": "CmsMpT2DNusKZ7ND1AuHFDpq6Tq2F8aPz5X9GqtChwHx18VL89CH4vtb91nr9dF5uKwwV6akfY1JF9mz6g2mADW",
  "key23": "4eDmMgLBSqMpSKj7ALmTAY3QjwazANkGvrtPGDw1pjmbJMtGYab1hmbSTCBtFRqhGmR2xHKbD4Tbvz7yAf3JV5gE",
  "key24": "xPcZuH8cPQ4Y3kiVdEtxfJX8ptuKYx41XEuuoDqqmqC8RRcwFkz5gKNRHoq6SdMrYbUnk7ko3Gxt2vBWpgxBguD",
  "key25": "GmQ6eERu65xzVEQRY6RRuYV78J92Cfc14Vfc78Q67KhJ7SUrjbAatZ2TUjfntc8rWLK92a6bQ3nJwCCMTY7sgzG",
  "key26": "3ttzUtErXPdNopeimk4tLBaMfx3bBYqbKfiPZPjWHgGSuBWiBaACqQXhQZcnw5pTS76AD8MzFekg7RehK1AbtWCo",
  "key27": "5UzmtAhNYJcniMWXLzdgjxM68SQTCMYEACnHnJbGrMdNuDu9dj37Pgfzm54iyVrZjMHsu1LAYfQ7AH5YuoEvodiv",
  "key28": "3LjKbhKEnkB3BsneDGcpo3rGifHu1J3yNoj4X164JQqxLYPApVQeCwsWggFxjepGVyCWbMQi3K1K4Vs31j13kkPp",
  "key29": "54cxkcd4f3wvnp52tEE5msRQLPVQ8gb38M632eeq9ojGHvfXpn2NxAjpTw3UFWFR6MJW3JHa7Z6VkyiMSeckJevk",
  "key30": "39PJgzkWbQncYbCLjDyKcomNJanxVcVzF1o48QAyjWgFdhNkgfxSjWs1M7euwaAHVb4PZcS6dgaeeT72hhY16EGE",
  "key31": "4HH6W6orN3jePzvqWwSukih1wnvDpEB2x9UWxFZkbYJnCx6P32a3yoyGt4C2ZxQXUkt67p7yD1ap6tT3r2ZWpCMU",
  "key32": "Ggp5ELXB3oHWW6k2BSYodTQHrT4A5rTy2gDKtR1Aakz9QG4eJiWicJoHsfbBmfphkQ7Run4pZTeXZqY8WpoVPoR",
  "key33": "3iKT74pebBrJ8vU4dVyKm1tpRb1xgTL6yozDxjqE479AHNMxxBSbQZY6VZokKweVbemHmXeiTM6VqFyMLbMopsSu",
  "key34": "23e6BwzWkLFoYkpuTTLzNqnmFY784duLErx6nFPEaG7LUkFj1NwFCWcbpHYbTVhdt5hFQJEGXVx6S8mXTQmFJrM9",
  "key35": "3h4WEfuMBuZdyKLwEYRFPiniEEvRyW79Xv9WNnem4F1A1HJJhFb6gheYwNQ4KWRRnpRA7yitF2yuSpmrkmVr7zak",
  "key36": "2cV3Zwt76vXUvjCUiCQhkHjpyDgw3B2MPB5xMF6CZ6q97vdzDeAhS8VTpHStAoLKoWVeiqcFb7WXFprfmukMZz2T",
  "key37": "3DYTN162qS5BWNccShXsNpzygDsGrJiHwVbUtGENPc6MN4r4hz5aq9j5R18nStu51cDrFVye68udjhBuJPXv9ahA",
  "key38": "3NV5cjreso6SNHmuWqSKazEGhykRkLhLezj9YffuYyrC5qF2kYGGSCvMnAUKL1tK1ty22iqa2QakF1gWR43ArU4c",
  "key39": "3Lu8Hq8Cmz2EEiwUfR5thUGgbPviNb6WemGWHighqzhx2tmmaho51peAqK3AENwHT8NP2AKvH71yrpDwVS6DNXbY",
  "key40": "2fTj4Voo5LJqdw1ktcFC61PVCmaDZa2ZHRQEgLd2VLB1CUvsHPYjqYrYAVxhzJJi6QFZva77DG5gcatKCTxfNnqV",
  "key41": "5quB388aJ5VfwWkGY5jziANCx8GQjhxmjDokDi21QzNsVWLfWeKPb45QeiFjKgKtBSxjHWMrXMfRzrcmD4sehBM2",
  "key42": "4Kg69XpqELY64F9Bfrx7R3fuGEhpquAr9WwDfmYQczcPbhu3a7S4HVnKvy9SvpscCT6G78SLY2YyvB9qkT3YoTek"
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
