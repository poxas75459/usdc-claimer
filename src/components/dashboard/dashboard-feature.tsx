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
    "4R6bzdWoM68XbsAqQin2hYT8VwT68trFqBMgKPThcenMySkA2EJ8MexwMv8h8f9iC9PpQHDBxxrceKd6YKW6dCRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZedHdrLQyXwE3uMsnuSnELsnz7hD6hdDhvzYkDwRjrQ9avH18jnKeGfTxuu9jfGMGi5u1RkRHnDj6NvNnGfvEwr",
  "key1": "6f59W8LbZwcHEk9KwP9ezSj5LmhnftyjmJH2DXidApjxzZwQfY7Xnp1K2yEvKCw8Qj1RYccFPhCtq8k8zhw89uc",
  "key2": "3uNqpnFrUvASgeeYMqsUPFU9t4yc2tEy25v576yLTAeKxebQNujPUXkkcvhNzTY3TbB11Uudfkav1zPUt1drdp4J",
  "key3": "4c3Dq4B9PufQpua9nstWaCk14KgVTqVytFKMBpKtubbPnGkk4AHpSGNqvmcyBzieJ4kxyT7h1pqxxdSw2W5d9R2e",
  "key4": "3GpF5ypsgdEMBtRyFxB2FDHy8U34FetdXXHowy7JixapJfEXXCjaHMFnofZQzvwx5VXazquf3X3vfPt5eQKbdC91",
  "key5": "5qjNcdtBkxAuxbeSFXNxFE7a83F4Kntax2Vd7ssU9rgmKnCXpqQfu6RrXnkueV1AhKxWMc7GMuNaAxrC8SotHZES",
  "key6": "zNddeyPFfWMaDS8zw3sFHjjTVgz5nnX2f8Web19JHZK19jdzXzcAkRZg99BmtG7MQ9VDNTFDwM42Sfe8exHVUSE",
  "key7": "AzQnrHeb1oajn8KSj4fKfRZYa1oBr7YqSkw42YXy3evor1ZXDwFg9eTKhcUb7FKhUdiRV8AMK5U8cYQgQUi885j",
  "key8": "3RyJkXMEEiJWww7MHHLLTV1yYt1yDqTYtvxe8v3vxM2y397FpiBbtXjCiJnEsuCVFA4McxtrqnYnCyzw1kU1aq8n",
  "key9": "54tRsSutqQd4xMbbJ4nUsLES8MUYyQ7L7LsqNv1nBGe4ALm9uqQyLmSqidwmoWpHceBssCK19q56ktVog6ydWHEH",
  "key10": "5Fe7EqyK3xPmAUFqKhi71RBCfTR6vkpK8kVxpgFK6pRY9KBxC7TJEVYUvUrqE71yGou86x13Wx4bLK3rwnMWoYb6",
  "key11": "4DoeEbnfFx99X3MWrwbt8RtJjrT2gfuHiaQDcYqyCCRQVst2ST1wt2y1fi4sTQRXqXDsc6ST3Vmeo1U6uXdtrwqa",
  "key12": "4CmZA3wLSZR7tkNK2zKFmrmxBQzo8qhqMqqYT13F4d2d8tdXAizZpyuiFKYrXXaEtnLrX2uCmDmmzPNZCxAeLmEB",
  "key13": "638bfFvuE9RQdFNmUxta76iTWGxK1NN1C1UkyxNRwoBXZaXW3AzRsRTrbdBN3YXehPhqr1zc2fsuZjbbXaC6YfTD",
  "key14": "3YNi1Ze6WaA8HHkLFGZjubm2FcsFTbpyhJuDJSx7X3JMHkSpND36EbB6mpa2QcL3fmM28UTD7qTa8nx8ihTfG2em",
  "key15": "4YNheSaM189gRAVx6v6ds6vbuPQAj2CD9pV6y7WMu7eagBne7k3NVxmD6LysPr43j8MQKUYKikmk76YcafkUze8w",
  "key16": "3ruEJL2eayxZK4FemAoRjzWxRpdxR1GmqwzJw8LikXBE5Fk8K54hrvU6SnQMLo7KKryEc3SzWe6NhwkamFM9j97U",
  "key17": "wMKq5pPEj6hiMXBySaCXsPNrvULXn29GVTLvdgSmzYQcgZpgZFcT3eybua9nc8KJAAeEgAdutXxxdG9HKrBK7rr",
  "key18": "5gN4dJhX7UCHWSPA6hW2DrB9qH4y2kJ1ZxpARkqheXTWcREaYTcU8Kvmgow3eqwmnzCxGFYfgR76eqCAXmfVuxX5",
  "key19": "hrT256grhS4JMH6Xcc5pPDjyZLS1cNBJsuE4CoThBd7qQ2SXFakwE94ew5P5mD6jyydm1kuPrpmc6yVtqdvNF8u",
  "key20": "55hBxcog61YQ83kuT3drcaaWUohUmBfTyZtnHuYVyektfkV3ugwKPAo1efzTkiSAHoKyEuFxQ9ooXq9RrrNHsrUS",
  "key21": "3mmFyteaVnCB6gL8ALd1T1K2WsCKytcsdMijVq9ky5qduDRp12KmvYfEbLkzmFj7B7wq5x4dYTtnT1zvvjAiXyAQ",
  "key22": "53MsYyskg1GKSArBRTP67TSB8pRjrj29crZN9kumW9LM7MNt1Emn2ebD9UnpPyq1LL6dreX9W1vH6fKijFDDGKRE",
  "key23": "4BCfAxJUQqJZcT5XmrwLppFeJFdsDUBRHRVDrSq8FX6ZSBgULNeskfZ4vr8PFpmmrFbeeRazxTd1GgwM5BJQ3DSx",
  "key24": "nVaaJ7gwiyuuuCmiMRaZHNDSKcQwkkKgRHoUXrrVEmrmnijrCEBWwJcyK1Gg1sfzvEsAEAECwxdQh8EydLnqra6",
  "key25": "3rencsPQQgfmr4rAZEHKujwRCYEcSsswMKczaW2ivdDRTjsF44QGq7yjwHVWBbo1TMJmjN5Et86hhPYQSJ8FQR78",
  "key26": "5B3L49V6UGmRA4uZj17LTb516EKifR5vrYvB19q8JSdYs9nZaEbUwUsiBzioNdGjFp4zR79xuTWiQbNwCucSpJSV",
  "key27": "3V4qPwT6PEPMFbJMs2Bao2AdVTfRydZFfCSZa45AxFfnLwoWuFT4DFJqwVTUSNwGhH6BVApgfJ4TXdDfzgU7JKT3",
  "key28": "4pubx3WL1DVnGk9MS1LiHxBJyafmuRHzHzqbkgDie4LWqj7YbdNAwHhJGQ5eke8qZwn2CheCYUt69aRhwTHXFU6G",
  "key29": "FCK9EtYTWefS2GgFnmfoNCogq6fnipVF4oUEcj5p4XVezGeyawqTMtPgBtHC4K3DZcnk8Hrw1oERVyuxemnUfEn",
  "key30": "4MKzrB6F7zQezZhCaaX6jSMgGJikGzDPmB7JxztbmKDW1mngT2UdNe6EWRNPx4BuZP7J2EWeirBvs2C8MFE5QoU3",
  "key31": "5YxA4kgtnPKJigUwXrvGBbzHtycPwrQDCFtZEo4Mkkr7kaRQsQkG7zfrWrsSMyLrfgDCw6Sib3C7HxFwx68Gj3sm",
  "key32": "5aL4EKpzeaH3q6sZS6DonRANVQSWKJMqLhTKy41VhBneZAw8SycGmUEjWV8DRSyh1zSYRr3xhFXm9ZYerksnuHif",
  "key33": "3PUNV32sqM9NZ6DthQNeeWLTEo1tWmHJV4fiMMZdeq8duu6DCddKGbTR6o5f6TMTSruMJUMyHot72uvoLCe8RkF",
  "key34": "YaE3FD9Jf6wrS4Hfn5jWAcBToNkt3UpDgdvxqzXvNTKP1FhrM1A6xKWETdtivnsoPyXz5AJckJ7EZLnMj9pcERD",
  "key35": "YdVB93LgegH5id2m6tfhXraWcN9MvNDZDyFBmBjME2efABjqFMMtajLtZFh3GHbyiiL6y1B3nYjpwA1FbgzCXBo",
  "key36": "31JUqCGYUSLbz1Ejsq9z3uULYHtnXzxgCRsYqG3CGKBTpkePUdZxC8PEQNrS3BZ6No1YrZHtjb1x6cveiiHUwCLG",
  "key37": "27rboNBqPydMKxxVvbjUdbubhsP4pv94vLZyoMAyBvRu39zzz6irxvGuvvC3R8uuYGE1oJRxWeZK7eoDfSGhxvux",
  "key38": "38WSDPNJe36BTbqveUQUe67jToWEsFk1ZJgdHyn8UMfmsNByYAHN6JckApuk2m1HgWFBfsQUTaA5XAYgXayd2kvf",
  "key39": "5DcnvLywWBsaXCVWyfTN99Q6ttRbgDjFbodAE6VqkYQ6iSrs39ZZtuhaTEHZto83tixUjxQZwZqMze5u1LuD8NP5",
  "key40": "3bxBVytQG5zQ9gQK98ZKnwdvHMg3P6o4BG4CRtJwJDtZXPpY9LTzKYwR3KiDfmChCjdRfWFjE8GsjCw645vWuTrm",
  "key41": "4wUNC7e9MebiLXCoq8r3263oXTgu3fvF1WbBBnDyFBiZCokJk5pCjoGQhFhcRmtXnHZZgcxsR9r8sTUsLtz5utfC",
  "key42": "2Vg5mPeDPt6AhKvAymqUVCneQJJCXzKkQs1w5TGoqKw285AWALwriuiQHzFG2x8AgxWKXUUmjSRbAVReYqJpPcV1",
  "key43": "2uyPatZpZLGxVeg5cscxayaLL3goGMj3qcoAms9wkykd69iJ32XgjmKgMQh6bNraDF4pKsTu34aCP2VDRXcoE9Mb",
  "key44": "5USMUTa3q5fCcQ9T8FV6LWNUWcaQ8Mp1ivKC3gvqvYGcqmEqR54HydWdbEnUjHD2kZ3wVffMpromCQVFkmq9J8sP",
  "key45": "5fpjmNwZTjgr6o2fwhtPzwQVcAVpuoYdnBL9vM8Ks9LYbU2TrNRkxViTakTB5z6Z9MPYEqLSn7VK6VBvs2v7p3iJ",
  "key46": "2KkPEDE2QQGKEHJ2GLbkpACUBBm7wTZnfDhk9SYRv35WYJe65KE7g7Tr235dv3DpxavANHKHfoxyNtoAXjfLxsRq",
  "key47": "3r8aYHYqEzistEa5HtRdzqjHs61GnpfxULj7RQL22KGeyWq4fnJQtJSCkK9NL9Lr2VgCwNyH4NmNy8J87Kpyu7zV"
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
