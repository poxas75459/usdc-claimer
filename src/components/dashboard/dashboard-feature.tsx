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
    "5br5LBxKMxyN4idFC5DMaz3cFXLEivSbzmc326wZncdL4Lwd9RQhVWJhzP8LTbrowpwAEvszU5L5DQKXzoKLbbwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cechtXFhQii4EV63WwUxVBrpFVwG5Dd2Gip5NcafMDZNq8q6ZQbsg6BJ7Fm71dvG39CmqYb7VaA2YvboVhDa4QX",
  "key1": "4JDtKHvwLj5BwsMnnp3WKnPQayYWen2Gst98KgCicSmpbLHZQ3U28gmzwVkXxPyCjtcrZavktvAyFdekPuGo1Unr",
  "key2": "jPqmtwDZApFXjKvnZLfENcsM6m78VXUpLziU9dUQFqWH9K3T7wmEQLV2umxRkmXvWbzmi1J5xhgoY9avsNERxmk",
  "key3": "HbeVWfGGQPbNB6zb7fE1DNhUDU7QhazCcXv4dUvEkcSZX3bvasrvfdUYjj9TzEdZ2B7vSXNkz6rjqqqHCNF3dfg",
  "key4": "4fmffoVciiLgwMhmgWRiAw7kGBaqH3FiH7vg368UXiie37AxQGpFYR9BJDXy2nPSbPEtsryb3YbeFB85XDJHA66c",
  "key5": "2J1v8MYt9PpKeqrWjhDbLhan8R7xfz8Z1eQn4mRFyGAa2B7odiptrCbz4WV5xEFvk4LyfCaG7dZxADjV5QeZRntz",
  "key6": "5XaEbX3J9f9KWKZacXZKhJayhUzUw8JvgtyLJBotmaf3EbfNrP8fSA2BV5T3eUGdDovBcJprV3oo7V9MHZwZ9mTE",
  "key7": "2qY8Wv5gcqKSDwAZn7HWrpCysSUAHALffwGx8CanNeSYnUk1vr9vBjksvTU82zkrvCLFeP4CTmymmbxUNZkwwqgR",
  "key8": "b4cr9oxh6o2nUEntcyfiVJE5jLsKd1FExrP8S9AfrdmGjAQs7ioEBkB1YSqXvWD5RKacQu1ht3KA8TcgJS5nb3J",
  "key9": "2kEEHwQH9PfJyQjvi9Ts4uThknbsu8CPWYuSckG7jYmrWcVk9Xv36zwVZB2AqTw5331xK87BPUuEEMhAMkbr3GHN",
  "key10": "4iiTe3D8KCKvFnccjF4dDn6hEXQXeDBN3jPsz4xJcq9G1tA4jKmt25uyp81sM7bPoLaokLLgQjPvgFRUzkL4mSMw",
  "key11": "2rBJAY1PXdgoN4LFa5zYFptw9DH52Zcm29df4ZweUZCmdxshLLQRFbymsDA3oQ7H3Rb8V5sBVyugBBEkFoWZXK6i",
  "key12": "2Kjr3a5gEM3yzSxYQNWHQ8feSuKouYh4zHXvAATo6Ao3QVyL8TWssxAfVbqFDMiwh6tFCnakyiGAejUX4T2aYLU5",
  "key13": "5MScNhx8JPbnJxggBppJu8LysHGJJfEaq4ReiAwFzZFojs8T96LaiPgAUrzcHWU33E9YdkUFuBu1B3ws9h1zpBUH",
  "key14": "4ij52i8mxuizqhZ38GJwfXxEuYJjCt8NPpRY1Ni2P3p9ys9QG1CqwJms8ZzbEsJCuDPgjWRnLWXxuKH8Scund2L8",
  "key15": "2sj2dXTapcFiJgbAepV5hxhuqreQ4Az1JVdnke5wTgt1k1TqUFdLCjvVC2dFQQR4kyeaM1TV7aoQUaXK1xRgJM5b",
  "key16": "zKLv4qUxR4Z92TMyCxVF3cm1p9tx4iQZFHFvKEg62z9DAdbfD7VRoHUtpLnwFywpeuXK57V6jDjqUZDk53tMiim",
  "key17": "vY16m7QP3HhDvwiJ8QG4UCgYQGoT6Lr6Ptv15vT8T4s6QcuS5T1YDG1eGFJK6MMRCAyVZCKFLbgYTarowr5niyC",
  "key18": "5CQSkbLzo8k8kmiiwVgWYybagVPMf4VDRUhVEUkpjWLPZo4MuKSAZEDTHtQd8YrF7AoTp1jQrLKNt9Nu1Tsfw7wY",
  "key19": "5cBesUAe7S9zanVZpfKMcESbFaCzX4HRnSjC3BV7ZV7gLXLwjQJHR8rBmjmqC6RUurpTmrXyvDaVMRjSQBW5GTvE",
  "key20": "QCkbE2iJn5CWRvU8ZuNvJADxEEAfzYePLEoWEmLaKHkhyQMNWuEmixK92s6Bv5GNxBakSCsYXQfWy7dWu4UcPGx",
  "key21": "2fA8E2hvFXaPQQw8QJDHNAaTwja6Tz6ytWjq8rG9mQ8KgE2gpRsf36xVBRLguzi9RafjHDiag6FBbEPQbsZX4zE9",
  "key22": "2TW6qHjC19jNjxQE3wZ6zVtrvHkTUnZ41yb9eYfWtrThdAcH4EwUC7h4ZKGKaLXMYTQ6rAjQgxPoNnLs3cT148a1",
  "key23": "5gJGhwatLWwxhBa9JFJoEBf2PSZjBD1NfqBPqRekorXd3aLdfhP3JJMeSg7gVTA3V5uftgBTq9sGvL53vgLfdx36",
  "key24": "SmPzEBfDvGGBPtU3GCbQ78Z1h37fBaPbAtmF98GHKYebtDKkjo76pAJpEFFGNLW9kXByztYTMphquArkjXwtWeJ",
  "key25": "5iRMqB5TSCZFMwTrHYSJFLSst4RLpd2TSuv97DPr8oACfhbS1By9ts8uq7RX4cQtsn1Nd4ZVYyHtgWTt9nHFat1E",
  "key26": "gK7hJjHZ3pE23aLfqmk5GDsfwsnncZRBKvcfKDk9zodd8pSXrrp4umDDrabSD1Nv4TF7jih1uYNVYnKzJA2BL5n",
  "key27": "3x3E9YJquvqypHtZXNGwyR71ne7J3QZmfe6Kgv9zhFZ75Yx1VnJQjoh6rjXuydHSYr6ezs1XgENBhVUBYyDFNiau",
  "key28": "cK3LYwMWcEv9ZRyUiD9tkqhram1hkvTeNaZ2Na7nkJxrYa3tLipZWaqyCnMah8WLbDgbdhhQL7sS3YKjoi7xun1",
  "key29": "3RM9mYu4qLHSi2rTo5DSwgdHG3HkXp74aYP6qJrGzQ6txkra3mgKTcQZTH71CEMDWbUxs7TWKR2F8EzYtBmSn9rk",
  "key30": "3rXetWbR9QpVNcTNWFrrQ5J3HQPcS567ruDys5j8cuC9J3X3ZDphFT2rNFPSKkxwYrYjsQ2EzUbZg6AxrKHxRdpU",
  "key31": "Jspr2nKD9qsoY1hda5F8qyiHaaZ3ryG7bpSpU6sFgq4TCDGfqS4qjTYoMrdrTL46XLfcrnZ9pLEvmXzJWQA7YKN",
  "key32": "3xy5snoAJG25LzLg9kNSBpLZCs3Gz5c2WrW92cVPZVbviQaUWe2gt8bQgEDPYDGZZvMA4Uoygy6EuCo1MAgbrWH2",
  "key33": "4EC4MZXWih8rXhmZYRDqnunCQQRf6HiJUuFoQU6sdcMLLj1rMUxvEauaYWbzMVXU2YKZT1EWqvnxRhMAKPte98Uf",
  "key34": "5fWC1ecAqaHqCV7WT358QPu2A3fhe1bqySPAmwu8KbKg2BigqumTdpMHwzUfwBVbfTk18d2w8PWnm4h4ojtKQfjb",
  "key35": "kSRYNXwShsSpdCA2qH6FyGnfvSFDP4XG2VWHLWqDrjC2ga3dpJffWDs2PXpz1wXc9ZQMCSUooyAPV3VPZc4qmYn",
  "key36": "urd9yN9UAdJYxmhFyHD8kZiWkDERz6ZZvBTsVvr8pNr5VDRmpLELLjm5tyxdbVvgMsGFopdQpJ4q5ocJ6Mg9rB2",
  "key37": "2TPnpquGobZXRKCDPcp8rRis8RpEJuxBSVv1no2q3RVQ8BJRVX1uK3R73yDbHfuCcukfdo5JPk2vUf8a1xCdiZr4",
  "key38": "4KBSJsdYEfX43v7mdewSuwqoaGQaJ5sWXdxDAoFNXNgCvmYexuhN8cYjRPJtB6sv7BtEviZcVDEMgAPXHZzrQDez",
  "key39": "4ti5EEBpdwcv5Gnh9A3voZKgynYyNwvV2GVM7LmGyncb5uvHNnPxEAmdAw3fk9XoXtdYCLPetxNMWh2TM8GcMR49",
  "key40": "5wgV2JktqtGGYcZQYmXePNNDH85HZwxW57xAzTaKwrzXgc9gzYYdRgp1YwNVpxAhwzA5st5Xw7eVXwxXofgWG5vk",
  "key41": "4YUVYgrFpFvJhcenBCV9swdM7G1w88zc3Usg9HMhqr5xByckRahD2hXm3ueFWM6UGBWBa22Sz6Dsncoy9i5JXkN8",
  "key42": "63JKyn8wXpeqmNq3rxbGamiyDqpJZfYdd6yTKZB8pYdExFKj8FwL8P8ri7FzAGeeBEzjuHQzwq4RtDouxTDZCesE",
  "key43": "2bER2METEmsPD13sG4gigHuHriCC42256wuaTF3yQVavxDGkzHKpTq8L324STDrVFyoodafCdFv3y7aGDUGHxGJA"
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
