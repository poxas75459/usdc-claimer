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
    "5saNTe7XX6KTfpQdVrUeSMHnZYgnbR6mKVB2VmmS7T9r3fHVS7ccPzThyy4YnAqDfVoouUvbYoWMCb56TTdL8gbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "92A39oGux9vvUzQach1n4EDHTRmVFVJGTQLk9rAapvVsYbXLLg521MmjA71RSUxWHTL8jGAUMsjrGdemvUzfMLg",
  "key1": "3pNrZseB5HRPJp5FEdWtFbrB57fMWtbwLH7hQPMoxGhR4euvnYBnFPQnT5wpLX6qckxHEEByne4vguZN8ixKtbc1",
  "key2": "Hjwygphje7xA9DYnz8b9JHGb9nYwL4wpgp3vrT6sUxrNvdxbxLkXk46Nk3eN7WAs2DeKieUZFjdwcawtCNnCvrx",
  "key3": "3XGYtfvX5LvXqb9tmX3zF1bsCYcTbeTxP8c6WqKqqEBn37qrs5DSiL88VfHELn7rve5wLaNx3y4XVyqCBKb3i2XQ",
  "key4": "wiYnrcR6u3Bitg1K4UU59BwUfvNvSKTFBb8ryCpzCAyuQNPoZNngpsj9m5VhPze4iCF14cYw96bfvgZPtBtLf1m",
  "key5": "4NVtdTGknTgt4UuvCL4eC4agLFD1VZqFbiJctAyu29tXaQWG2ok5n1NLznLHMJHYhfnK35f1n3pKJDhVf5WSDvEB",
  "key6": "zKSH6Xtw4nQ1SzAZtRMUJ374X28S1inmytJMH62evMPJxwfX69fpp9HT5Y3puLnpDjSXayT5apbcFw7AVqBt9Hg",
  "key7": "23npsbXuvmTJkDWFUpCbW8ENUAsBYT35jZZhoTBJdxgBXBN56KhdnCeV1Q9eyQdGUkuVnH85fdq46XnFV7CAqXBC",
  "key8": "2soa2f9TnpXVUD7v54ADid1GfSFN7uT5hiXmddkEUnFejBD42NtEQ2je5tfmxjiHAz2VCSPX8ffwaQL9gjaakVRt",
  "key9": "4gbWeyHM578L4uCx3MvhCRZwL8Gx6RhV2Vz7rLmoUJhDqx35W9aUZiuB8QJsteACLXEV8Bi8vkiT7oPMvoH1EyyB",
  "key10": "5i764QbduK362a4gjiiv5wqbFJ52EC4EgzhQc5cef5sqbx2zxHm2cPSC1pvkd3fPLUvRyauqkkLCVFhEZmLAMDJY",
  "key11": "5rFmUp3KzWL7Vdha7UNUiedd6wQWqDbTzat8VR7issCLMovs5kNDdc2qCpa9qqmnGr8QhmPXLApcEMXe9SB8ybtx",
  "key12": "2gL1jswgUxJ6bUXb1AULMSRXkVpxLtYUCJZWqZReonkcCRmNzydddHCRqzeFgMy2JAULc5X7LCFTaKMq2XpGfiAK",
  "key13": "4SJ1EJNfxxLGZmz6PqEYCutaq9zQgriSHBQY8UkN5rXtWhYzqMsYLSs7KgsLDrfkfpG2jHKdor4Xn1xxmWg32hNc",
  "key14": "4BhEAKAKfJ5Z8B267yivj9FWRApg8K4Tav2iUq4tUvYMNv2jftvkWGkGQ7eeJQfCVCQagrA4e343WmexgT4rwoDj",
  "key15": "22W8a3BLbChkYSgMCwVw6jBw2h4ApRLmp7E22PfkuD2DRgjHGsXUkXph8D8GznJcWQn5KAc7yRkfEMdKQMn7PCK2",
  "key16": "or19XqvXFum821M9x2pVuJno4LwfMpP5XNE1LJ6Vdbea1dQQeF4dbieFXEfTaA5BD8ADUFwwbDMQicKawnLB8Jp",
  "key17": "3byYYFS9DCXVsu44qiGdcVjegTLnNV4JqFGQB6rPKL4iqeVeYtreWFYJsBEpTWZEevG43eFAKMMtmzTwpTbvoAWe",
  "key18": "2SwLfMNZuU6XhwucsS9N1Q7QGsaCkimPo5b5wWTuCqR7ngjq6E2Ju6LFUB7ajJSm3QwdXHysiU3rVrSsgEYpsxUc",
  "key19": "NSinuhjWvh7ewL8Rez9iJz27R1FLhwXQA84Deq56jp9wXWGFQQf5WNhjBLsSEL61bkWrwsvTryEioRLEGe54bn4",
  "key20": "3DYJrxKjQaZFvUtsi8xmDQWQ8SZgadPnB2J9twhTmbpFEprdaqpqpnG8fuf5Ves8TB6n9nXDvxEn6aGLsZ8AiHs2",
  "key21": "cBQ2KN8Lfb9q4ErwcCmsg3vwb6trEusmtWHf51ddz365SNSNU47juo3g2FzcUNKSNfLAe1VcVoZkEUdDpRhYgfv",
  "key22": "4yaXGDb5qguHXJaCmSbR31CbQTQYKSMjQzR1Ma8nRiamYVdkaiGPcXzRLrVyNWkPVupAyEf9BKDP4zkVRCwf3coy",
  "key23": "2mXXJsiVrUmTWnV2F8Pc5HjfcEmPLqENXb5ThQt1DCDJVC7SecqqtZZgEWiLqU2BLCcQet2tufxCWi1UZva66Rr6",
  "key24": "yvJ82gtgdzkZdJ7xP6FnpYGCqML2bdDtA5ZJtsBi8CFkNX8tZXRRZ1sK2rSVJRsBLTU9EypBtN48yTHdpXWC4CA",
  "key25": "33n26RNCdXF2uRgSV5fBTC7CS2Pvjw1AkzSuoehL4zu1PV5WJFf8Tp7a7Gtn6TqXEwX4mv7SS2dt1eMq5XGuk6WH",
  "key26": "3otwGYrR1e6KiTj1LbYCuH3UBT9DzERoHEHZtZqpJ8jGDFXX4a2vbpcYTcia5eGUff7PXMEzHGFn6pNuRfqD6uta",
  "key27": "5Mmc29pis8cirkxsDLnTbbvdtQev9qF9eR5pc8p2TBpEttD9RTbHm9bPpaFPqK5zkGpWsbawxL2H5eKDcC28oHhV",
  "key28": "EjozxqaEDugq4cSFNmaFN6Rk6TmrajUxJSRaWi3tRCUpK6vowiAJ6w8Dz8GoqJhRq9cFcd1ZJdTfPz39dL6j3N8",
  "key29": "5C6ygPaUnccfM2GsPkZBYUNjumc4YPwqAH88fzrKkzu9A58kFD845z5sWkmzz5MWLwEtauGt766k6o8Muh6EtQxV",
  "key30": "3Ycc1gFySaLweKEy9sabgJC1L1ZUNvnhhi1pzYXR9qRdjcxeqayXJfTNKjphLUavXMj1YHW4quyoLJewQpZTWXoU",
  "key31": "2U8ZyD1WQkU1rAwPpD2GitXFSjEuJs9vSMsVEgCdw4ZD6B59XKQzk58QhLrd5u1skUvwri3fagjkzE6pWKURd2L4",
  "key32": "3bNBkk2dmsTsMwHHbHDrLTurD7enhLo8t1cLMfbTpUWy5fK8c5TuuVyWCifzGQBmtxnbA4oRNrbx5EW7m9Btcc6U",
  "key33": "2TiLGurYF7ZDSFwPAi6SJ4Q1hmRYdjMour5KbnLafLDfoYWrbWUNQVCua3uBeszRkLcU4SiNVNoWuNRnoK6PubvS",
  "key34": "4yn85UW1cpkde988wQWXZutvjMmWXu6UgNuaeegiJ8YPDwXV6WszEVMtAvmXV4YHJdeDfoJoe5veUJeGkMt3Rft8",
  "key35": "33NySjZ7KZEnQFaNgPqdRhJLzucTdCcEM8sEnS6D7giFtzPPTNj9b1f3EhXNv7cY7bTQoDeSLxM8B2wnHuzAb4Uz",
  "key36": "59Uv47Pne4P5E5amHhnDZgEMjTchwQmhPEyPQ1s7nYYF7Py4JCVBGc1SXPKurUobqWLmTupNgwtc4SP22ewUR9Au",
  "key37": "DG2kYsHG2XigqvpD44Wf5sTByZ4Au8bDZaWA6pLzsbHW7mXwywmhuX1EPyDnfQUz9f8iKKatQPRTy2QgmjwgSLN",
  "key38": "65cT37UtajEPTvyqn5qUEgGzk4aSZB89KYtPhYttsMBbSfVw4HjaBWS77nhNy2BeQgEqnKXX2ULwP8ciitBhrXii",
  "key39": "e3L1DSquucZmWSWNUr6fE99yqT8FUFMkP419NYAp3hXeqAmBqvFTC7BHEdNfcko9rs8ERB6BBZbCU1drXeaLg4Q",
  "key40": "4xjFzCuCm4fiQk8nMPtwKs9i1aVkF1UsjUkqTT6cKUyz3phJUCfu1Cj7uA4s5Rsnj9Jo34r7uY1FGGkNM7Rv7yQ1",
  "key41": "2Jn8iQHJ8xo53fcRKbHh6Kqj2evhjPnrkS5AVouLw9yCX8V1LMDsYykKYoJkeeo3qRCAKMgoFSyTmvkRt4yput8i"
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
