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
    "2XLaQqMid8QQ6pupsJs6SZ9gJXLG6NGhzumbJcN6rZvpw1QG5DcY7iTMA9yUHAxrizSfF6TF3PnqjQn1DSGEhudT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21eTweVkuMwELYRrLQevdKiAqAj8Jk56SqA55dmuJ49otTmTKfxbTw6KftgARMZGDsvvK7DcARzDQetacYsjdF1N",
  "key1": "5kphqh9xSPNszBhVTVF3nVQzpfcDYSfFSK7XsJQ6gp7vj5pgXwSgCpzofA2jjc4LAtbqwvKyuwNw4hy9LqimshDb",
  "key2": "2PPMGPgjWoLLNzj1nKGiHwBoKaQNLXyBqN7R3TSnbuP9xzvC2VB4XNrks858MWWpmmR7Q1qC7zp5PZ2YpquQc6W6",
  "key3": "5aaxiXV9me6Ksgu39pnDaYhWoEEoqRgY2mmxiQL59Uzf7yvq4XtZDBy2PQXNwNFroK9RyA7Hnvda6sVBio5jwDPB",
  "key4": "4FWYuwWhSnsYmCvgsAByPKmir5qkPsaeNh2fW8XphDD28UtmJ4k1ncUt35VhPJ4jwp6uyV3whdbDErk38m6b55q",
  "key5": "5tsEgYex9VnwaC1PRcWoyVrJqDznFTs9GNNMwsYhewtTXLJ3HTaNWpHy5AxDexS1YC7hhMu1jbrmBT6zEPkRQP16",
  "key6": "2WDcFL6ti1jRX7dg4FXKJhxtheftqxeZfKEeaH3Lr9PtnexLxdyg48froPEzfEiQ4SosdbpCo4fgzbpEgQ1kcJrP",
  "key7": "4CyQ2fSkZcZqpwDdx939sqdL9TYf18mjXAkVYxeVSJuf8yN48yqkGnTqLKCYBMCbsomN3crmkxtjjDWobZYxmAJR",
  "key8": "5K39qprkGFedT91p9sxCY4hYTNAka1gZV59qGFsSTKbXZE5RXwK9tvK3WqKdNhg7Qsqm6hPGZzeQ34BY2Lbcxsr4",
  "key9": "4vB4qRQkzAXDxriDKfwnuzmsFKDiQnAFiiLzQpGEp6oDQE1ycPL1gpbxQ7LvRbKF6GQkfunayMPUJ9DcFaMSw1nB",
  "key10": "TpBpLB2wuJhtYhG2kXh8u5tdQ3KydDYRqn54pYZPwz36Pab5t8LZQa9okTGgXifEmdWJQr8ryC39txfL9nuJFWQ",
  "key11": "4YYkcgPTZiHD3taW4spNHw8gzHZ1PK35TQhUwscTpz1hvb5HMwhe9JejTcaq388Z7FGnVWm7rvTN44LvgVhNP4XZ",
  "key12": "3q8BXxFpBFQG7ffHhZdhU794CDxB4tCUfYHyhx5ggLpErejZ4zQTmEwffZYwwi8Ez9mibCH1TfbAvpngURwpBEoF",
  "key13": "3SciKqzfLxT3AsxBP2LncHbGCPsYznoPQZGct2BeVG4q1JgDfuyVDkN9oY66GRXu9haiS28Y2cYUKzKTmxYSXHdN",
  "key14": "y2a1RpFMia93AqCF8cwCSYJRksqTWDZpSM6r73scanWkVSsjpvvNHejdEzU6yvXDTUH6hmcmEioN5E6nBKx595w",
  "key15": "3t5t9dAbmQji2vvmf7E2BdHBgj3GcXMk9MwbGeH2RWWAaLBiqUB9Hy5LV6QaiV2Td7VAQKXBhzcDu8pd1pyzSrZ",
  "key16": "5agfRYvL3U5YMnf9Nz9pL7wk8ATrWn1GLGipi6xSsAEkMHZCUFtQCiLuthqaf2xH58bsjGHeqwr4YcUEekGUtDch",
  "key17": "51nUSmguVsna1LqMNpzAbthgXTQN8c3cXAp9Nj4Vo11kweEq5ki4Hmy4BxNgLD6Nfot89Zm1K8jjjxmyCUm8W3j5",
  "key18": "32JF7tKLmUFwAPcGxZQC2qFGY8z1mGCtYxuS7bQgouKTbRs7VzkCTvU58yf7VvvzrcEwZ1NfXkEKSQZ6R55jDP2w",
  "key19": "2UZ5hPqfh54Wi9KnYJVBJyjyzkfruzjU7N7g5oXzW6zpWc9osksyyxFu4QeNbADqJNxvoMdm314VJsKA7Gz6MwJb",
  "key20": "4RGPRPvHcnBvsiGsSbGEKs8E2F7deGepRDxz1J9RTz2zpTWQdmaRBTFPBo7rfVVYjdYYgYTMdpJJxR6EHsvGtx2t",
  "key21": "4vyg3hqYPhfSvbSBoPXtcEGzbSPbgpYFAUHjawLEnJmniVNSrsfeLmDovrpcjDVXPLjNaGMuJLdoU2MCVwWwkmZg",
  "key22": "4tSMEnt1uvzAytmthrwy3wfbQDRZZg4K5bzvBq7ansmbe4oq2bnhE6NGRSSVpjbn9dkd5nZB5nZEvbKtVK4qCodT",
  "key23": "31uGWMRHMWcM7ssWS3VKRW2azYoXsa2LqWnh373N2fwqifUCrGfPnmtk84eipqHCcfxEgEXnuGcPMzrns6HvWuFi",
  "key24": "5uArAwEGdNe94mozem6gxutyF6Q8hzGeXLY2w7V5RCULFr2sfBZgWA1KQgJcqeMJmTGmgedZ3BpRu4hGhusdgeWG",
  "key25": "4m9EJ891wtB88gyfnZWaFXifPSfwZSem3jpaRJpoq7pMqCo4ivqLLJcGF8qE6AytR87EmcDqgiRKJNcZ5AyJZL4A",
  "key26": "5ztLEBLaqEs3YxeTq6LQ2h3rkmkifM5N4V8HrYBK6vJazuiafVmqfwJ4TxRRMXUXvcQrKMkZ3yERczWSpD6BiT7x",
  "key27": "2XSCctqQn9PHXqiPkzE9Y38W8oiETf4GDws2ttzQzFPJrfr91KXdg4uH31YS48qcM9xwrUi9fKDVXDjBs7kdC8u3",
  "key28": "3q48tLTqwZPn6jTz5LsySZksZQbfiC5qnRvt9Prs1taoABASEryUiwfVZvxEp6rfNEfiRPPydzDxCaWr9FpyD5He",
  "key29": "PBdw3adtp1zNBKemD1GZNjdbz9N8PG2YG5AxcjUFku9QcJKkKZ8XGnobwumSWw7ob1W4rvPfqsWwmn7TrLni4Vc",
  "key30": "57pEiRYV2xCwGWEyu6wNy818bP4uTkq7zoT1vNcy8uDk6PKGxB5CPvrq7txMbhWMULb3sSeZcEZMR7tLdKXupnS7",
  "key31": "5ZWFErka4coBeRCV8zo37rpHJgjgWLPH4fSSyLMvDbNniH9SZGsdaKwYAxQVgC7RqqWTZ3LDRyAY4qNc65XkSyCW",
  "key32": "41zqJMQobmvG7gGkaL8TAsZmwJhALqb5uMrQP2rxAx4avX8QfpFBXUkD7Xpr3G4LQJca62ZJ1LbFdXhXjUihUhtQ",
  "key33": "29P3AB4b4hz38HCVTSi7TqVUSpEqjofTPM8gZdsSJyKNcVBtfytPjaUzsYkPrcgJuk4FV9UahE2tCxZE6EvcakAB",
  "key34": "3EzymzVPSvYGnhPDif9KB15FQfvT97Xi7EUwdHQUEeNFGptysdu1bJqnRggUoDzTTVvgVQHqXGwcim1Lh5dgChwZ",
  "key35": "3g5VHqEsGCgYYutWu3iQxjcPUU1yUbRCjuBDk48MKtxs82rCQKjonPASUT3nkpUjiDRw4orFPWag6haMxnB54zos",
  "key36": "3dXG3FMyd2ytKsKAy8DADTfL2yt2bNvTnDA7FNks7yT4363GxowKUCGdXJSrW6GK4YvkLCbEivDVcrv2NVfcC45H",
  "key37": "3GPrP7QKSwzUBJLoZRyjfDMgw7uLDCJBp15LCWgKR4q5UWNyUQhZRprVp8LTZLia1bn8AFYiWo7uvfCqMHi3wsN1",
  "key38": "3tSXNTV3qffk4CmVj2Jyy2WWTcTzJ77JuE618tHWafk8sMBrU1KR8DMwMkMB6oqSf8Wz3e4ZtsuEF3fVZMCMorq",
  "key39": "4vieWDyWMXr6tMbY2KkEvWV54noU7f8xuHgMGtfRMHnAd1A4epd1u574Ap4P6nr2rcuiUewgqtyzPjEZNoGTdSsv",
  "key40": "5yhsPqmcujKBYendhuNUoPEr57vtrKj1ixKXuVun4nYxH8r8pPZHEwSsB6nc5JVmm2PepaDkALvboJQvkGiZP4UT",
  "key41": "5raRLD2zJZsoeeF6gVaFC99psBEcht4EiXviu2iAWVx5ceHdit79JZCXfc3XmTKX9QuTRboAUUP9eq9XDEtoh6S6",
  "key42": "3cJStfwAM8QQBkf7zewoxyUe6FVRaSark3CanP9CHSdNjW5KDeK2d4EJXq8XcKQtu5SJVke7tdXhVmFW7MezusYW",
  "key43": "4bmDZjLxkWdpdwG4BBwU8vvT2hWZRoe7WbSdENDCpZTd38ZcmXPgDtNu78FwPYeYxkLhJSesbc2vda77XrUUTf2f",
  "key44": "4bX2RUefaK9KntwoAhp44TeZAxKKhX9z7vnx2nEijW8VNveu7nWt9WhEJ8XH1XmAh5db6u6ajdJV2bbpPHF8JUT7",
  "key45": "2DyCa9YKBQz5JfutAd8L4EtEVKs3X6WWBSpgRMm282X4fm2mjPamrtQbU1pTeqq6Ri88CGt1XhHDxaUp3DSPV1Q6",
  "key46": "3wkKaiYxRdLxBHnjS52CXmbZW3jPGwGZ2KoMXX9ZGnWAzimoLEXavmcdG2GUp9Kj3mxgbxfzSpUXyAKFdWqkrDBx",
  "key47": "51fufTQ7GwL4XrtHT4hBNWAyT1CCtoqVPsfPDMh5huk7ZKcLdPpdYvrCvWJip5iEAq82ANXG5T1gYmVNiziVJgiH"
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
