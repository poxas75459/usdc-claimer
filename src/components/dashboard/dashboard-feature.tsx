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
    "37at78bjsnzVkj5d7GjWzJUS3WpwVVpXxkNUSpSDrv9RheS2xXeAaTmbqfKK6J4gUYNKYo3bPLS9dJhCvdvnZ5F2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xMWefPbcYEXkAXRiLHVvsUbJpnVvjFeYFbzdpkNEqFfBgr8HCRj6yqv9eunZAXjHR1C5cYULBPhzn1UzrxLdnPJ",
  "key1": "3ppCwMco7itXvDdtbTC2nnVq3pQQG2ci3L2aTad5LXvVi8skNtb466odKugM5zah1kJ3iezzLkHjY45f9EXiieuk",
  "key2": "2ZDi1XDrSVT6svHCMdF8CNeQQZmMjyi29SeEo698oz8JjNUhX889qC1GT9TNYR7K3fJAzWucApCmfdFBpwy6uypY",
  "key3": "zgUKUZgpQyxRWkeWieYenW9dVTHsYGnk9sNVtcK8wJ4extCpNVerhcgwVQAep7AW9u6N8Bj2hoLFSiqrUKA1rT1",
  "key4": "4Nnk6eFEGCD4DRpnjNKvEAEiKUSrFr8mENuY9Mm4imYC2v9i3NVXv6PiyyWqWnihQ9EENeAXvCVDztB5SCCfyzVD",
  "key5": "3HDsroCFQAKUtn7Gq6WBL1pBoGAU6dD4tNbN8kwRe6ucTkULVxuUGEeom7qeT9cKi7gPf5QrkpCkeP4NQTx7Lwtn",
  "key6": "3NRyxMjRjAm1cnakzDKJxqX85D1XahDysPt4NpstRjodQJsWCdTDBJhy8uPBgUXfzq3iPtLxCQh7MP2FjuAaEQwQ",
  "key7": "542A6piUMJqHq75bodXMcAW46SZ2iHZprZ2ws1T8DpchVkoG1nS6Yw28ZDxUkMeV3K9PQRS7b4XiFDVZrLMVjmoW",
  "key8": "2GmVR5GUa3H3VSxNA6YqX5r7JeVzvBEDx7szs5kU5raQFP5FVRM4tFsiW49aW6xmiuw1zV9DgGwUiFyimBK8vS6S",
  "key9": "4zy6Y13TtSJk6shMRnV6ubSDkaahYaEmFhLaJsSEABBCh9kHoMME4gZzSaJXgJbFF1rxtprnwG6A7apXtGRvLZit",
  "key10": "32xHYyEtiZVrnf1c3A9y8fFJUcm2y1CPyZ25WErnJcb7GdrM7aYHMFEGP8PsRND5yoW8LJrVBHm63EdmXY2qSvyV",
  "key11": "AucSTc65xC7HWbKnL3ZwUnAcrusmLigPPrr564oYyXAQQjq8BSWG8s6VnUxVRMNGWBcgRvSGfwwAi1yKeRyUPQL",
  "key12": "5JP28WF42VVcKypdiRXjrmKxgfjanzGfnugMAcfgBxCL7mdgfJ3GGYqwC5c3z8hdNV6qLw8w7bUKoxDrQbfvvtQC",
  "key13": "3h7RfAN2XbLmHt4EiNdQuWKppEo33wLAN3qNumac9MMKrEuhYATJLy7y1gSJYZojmMrRsiCKL14oMXczG5xgntk6",
  "key14": "3Pax39F4zh4LTuSLwVzR1C7NNAMTcS1atJ9ZemaLhZBiRpGnDj5aAQAoamuXVrFoa4pPfnez3cMJ4mY5Hc6xzPfP",
  "key15": "5LrxeaPpbJzvypeKxipvabSwJKfxZ4DJmP5LEzCXwLYmAWdqRTWJniVDExaVjdDD2n42AGKLAi38auBtYemWmW8v",
  "key16": "27KqoWzXTsQDBmocbiXC4Ai53wxjbqE1DV5LJf1VbZdxE5Wix1CaENc5b7dEzftUv4pfQ9tmL1aCoewrYExFgz7T",
  "key17": "4VTN3jGmhVBoR4dxqrZKvcyZyFyBbTkz83NZt5reFuPhaARGW7pxS9zEhXuLdjhDnQmZWbMUkZ15tdSXxWBQbaLx",
  "key18": "4ginXhUtahpCztKTb4GRstpjgUNvDoLTYkTKhCB2rS8jjK7wkSQopUjECvzPtTULFyEYXwHdDxMHaoAHqtQEqVaH",
  "key19": "2wLqUsXsMApfBymYwaN5PG8ZNwe5ybxM4GxQGmjDCJXEqsn8Wk7CLpe9R8u6BGjonXfEHGp7Enehr5zcLXwfqdqt",
  "key20": "5hVNZAphB3VozLEkYeWqemsbdXm7kpfezp98qkd1UdDqZnfz14iSwn2iQT9Brgt3EV6JZTeLcN6mAhGggN6eCDW2",
  "key21": "XwKsCCWLkXKspCxYUcbj7QtnVRcJzRGCqtaWnrQyEqi4wUu9ALcoyTbjHgiauTXT79noCTtzwckXmMLLmrArCxt",
  "key22": "4BXTzbTa69SwG5DmrrCZLLyAM12TLw7p289JaQ3BH9ibAMWA9Hh8FhunhWqqwSzMLHCxbXKEzG4J5u5gtPHLoqdX",
  "key23": "4Sr4k8gco8AyaH6JwmSu9BJn5qZaQjFuvUESibTp7ABHW1F3Fw33Z4U6ma7NeWA3GGyMHMwvM7GvHUa3MKfZS9G2",
  "key24": "4krdug36GZVuec7FC1wAQm7Nugrh4n7XKPE9cDyDoZTHf7thg2Xq3x5TURCycmDYF9jr7TFGNCegizsLHWxhJQz3",
  "key25": "2W5UTR2gHMnWwL3s68TZ8x9k1kqU5g7Kokpwe18fvUEKav14JeYdjb6RXEmgWKyByMgTDd2H15nxUC4qQh69ioDS",
  "key26": "33RQCcYY5VgSa9yzPkScaKGVh5Buix81gFXqukHchiAfo4eP68145MmwJ6eCgY6xbHpKoPTVJTt6EfrDtcFRN8p9",
  "key27": "4QEC9LhPb2LYjqEoV1dZxT3gwFyEJFi45WdEfLdV6kTUL8zSWLY4cVrgLMLcDm97R5wVqQs2CF5Cbp1zGwAjetxK",
  "key28": "2sgAG6gpk8Q598qDRiE6mdfxgo2CE3vNsWwQqA4UFfqKPSxpKTLCbUFHqLXL2USLxSLddVBNYJQwb6tkUmpynuQr",
  "key29": "7hxKRgRjCYsTt3tDRcx5ZdQzC7RYWD47YJ5A6UrtJkEbiBrwKHDtLmC83koV1d1cfxBj8F81a18yczhMSU9giNU",
  "key30": "2qdfzDoV5GiTCjWpabyopLZGUn99zLCrZ371RWC7yjdpNWgMkj3UPPqAe3xFvagtXPaS2XETNzs3fRkCaASGPcfJ",
  "key31": "3hwjNF3PU5r61eiK7maQQHgYvRwKAYN7NxSP9qYTLBjaSBsomf5hhuP4hqwkKufaWgMPDitice2t5uRAENkPGQxf",
  "key32": "5k3yjuugz2Abcp1QMpRY7anhb8Qm8q3kY9u6pggZ4DpKr97eubY1hMiNjUctbtfjLYgdG7CmGuY1gwK7AS2ZQ5Ta",
  "key33": "5NL2Jq6k75P4iScw4dft6iMu7Z9tqX3kiiFMfchynMsiUBSAqrE4ZPpJRRD9T8VAbTwutRFvD5469wUYhAJG3XEX",
  "key34": "3fpCqqQnGvFzJZokjDpjwwHUYzfPstNrMCwdYXW9BBcGEh9Aq2qu4qZp4MzPTipwrjFjmUWaqx4V6X4aWfH3ifwR",
  "key35": "471jKbGeq3kBT8B9GmABsmdoUWVDWWodJ3jeK6Z3HiXraiGWYnmSn49MrqBUA3MNvxVEktuPUNgi9ionFdjdKYiQ",
  "key36": "24q7jweaYN6TkkEJdx3YyqkRzVypQe5wioCi95LSUNfXaWnn9pkoS1ATT5G3xZr1pZGzyeZx3n7QMuJ75q4eMgQX",
  "key37": "3PdtFP1nYsmh6JfbWjJqD53c9vfqWLaogaf5qy9foDjsa7hpre1eurvCVCD5ucF3R5e853hfh9ifmTsZhEHDg4mB",
  "key38": "5Tzre8ePUz75ABNqTQiCqB3b4frScK4xDP5TRX3PY9qYHU44y1kW52rogVk9bw5dpuG1Y1X6i9tXHoGVGFqPjnA",
  "key39": "5zyaPZzucLUgYMNGzFDc2d6eDR6tkVjRvmZbwXygevi1VMF3mmYcTGgEXNs4xv2qM4UFqJKBQbvdEcdEFHgvxLLQ",
  "key40": "2pqYZwPeC4NJKN6BaYNpApiYRbbTvdTjT7r8USTeanPSczZbuna6gc6hkL7KJ5qMv78rnNnUyamwnd9VY7REfw2U",
  "key41": "2pxSpAtkvhQmvGvEjqSZoBhcNJj7cMcKMfPTjSNJ1W9EkUTEJjwiHxGDiNSs8o7XhYrZxka8dsUv3CntgCgjUQfZ",
  "key42": "3MEdB1CsTJZiyz279bma6kiTa1TsMGXSA4Wb6BHt5pXKEu7LVBZiqhThx97vahVKE97mdFdYsXyh4PD8Ha9wj6WT",
  "key43": "246WLuQPcRGyroYgb4JWZhyZApwGmys5NFQzediVJRDgJRHLghHZ4w7hrjC3ufByaVHUnZiYYPW5f8f8kwoV2GgY",
  "key44": "3euydTna5DqKoer21NFSjYyPNqJZ4BpU4YSix9dfCEbi3BdTdxuZUiSnQsrXaaWby9oMqNcFuGKLXu1vEQK1doZ4",
  "key45": "3bKFcnfhUF66xiYw9kmoGoFiJRTcTBFJfzeWjkUzb7LjYd1FYhiikDTRn6yX4XnTSiP3bn947cnKe2fTet71LRos",
  "key46": "2xpJEGA8bwLwGNzZKeqvfzdz8tcKXGPyFXuiEWFnMXbxJ6UMxpTtH7NcShRvfcN3F4at9MX5GkA3RMXZN91p5qeS",
  "key47": "4m65XW59QsJwCrno1UcD8TpG6ccQXZ5dM5NjGuT9sNHkxWZr68x6XvHhp48f8MDLAM9cefBucdPZhfLtRjrmehsR"
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
