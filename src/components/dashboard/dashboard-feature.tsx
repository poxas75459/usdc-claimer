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
    "41xbtp7PEiEYU5RpUS69tNKGiTRXBowWcjZNK6oj4NXTYYWQu32FSb2gNDNoW7PAFGSZrxbPtnK5wjMWqHhbxdhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "422Jk4DpRcdtttcNeqSmFyrGP4GmkkE18VJGxPTaPDMgwFqQraMid1kENR64XfQmUCB4AvogNpEZdkWa7qYR71bi",
  "key1": "3cY6KZmDWgPs6Kf9971KioQhbGC2QhL5NBSc4mYFyfC7zf7fg7BfHHAhTb73MtuVAA5AGe8foVV8f1z6hTEzohn5",
  "key2": "2JsR93GpnePs64F8FgJ8t3mGZJpMJKZy7nqTTPVveGsTqfXsu8jWqmgRjxrzq1CjhVC1AH65wFF3rsMtEaUq2cvq",
  "key3": "4E9PUVwVyunmuHZbQZ23ouM7PNE9j41V6fydrFAxRAFQzBF8nUWi5QB2Tqm99GczXwUQ2SKCvUNxbijhK51X6cp",
  "key4": "WFFmpYBp5GXiUcUaQ6cPRchwJ1Ez8hgrhTcVDF34hsVUQAcHenAkDVADT7iAgWNELrfsp5VMVgtk2tyj4JECQtg",
  "key5": "5iHf6pdaXWMAsywkv7uw4ffDznNU7XLxe4UCpoejkdM5bx9HXXYzK9dKtxzDL5xL6Uvp3fCjMS7Fgrt86avw6nwG",
  "key6": "MMY7rJnWxuMXL6dMFBBvoAf3MbtVyYUdapDBs9KKD4NUoVxS7szWxbZwXGVoCgfRiY4id1uoieyj23wR3T1eLMv",
  "key7": "2HzT4MgpyYfVjzmnoLtdDDtjKWiVunmcdZQoLAPMpjQH9AQVWeh2v24vo4ouwAAXEq14SbJSbMd1MQY9x9g25R7f",
  "key8": "p1yKApdbFwtdPfzFV5snAc62CnvMYNXNDnHroEFki9DpkGfm3uvFBCoCWV5wGKv1Tm8nt8ZJMimyewsELk7p6u3",
  "key9": "4wm9ewyrYcmWrMftKCaZpJGcxdRSvPC9pSZzNzscy9EmAgbu4DkV4PqBEgk6Jzavh4hPUxBnBdd7tKGHyR89vcGz",
  "key10": "464fV5iJb7JGJZ1HeSygk6wzU4FvEzyptpJsrcN2pH2FTmScvge7uKvcFmRJ577sK9f9ijJCGeY37rXkDeADAe3L",
  "key11": "5epbeyJqnLyvgyxsKwqPBtP8CYwmkvrkx4vSULZ8bqfCFhqikzsHEGQbJH8pUyTjk5E2a1AfrUXXAG3Ubv9kEJLf",
  "key12": "2sWJDeQU24rbqF64t9Kev8WWaU8fzzKdY1KFsu94rDituPh1ovi38LWjN9fiApaukuRLPzxXVnAfoFZeSYGxeJRG",
  "key13": "4QLRdFSXWckSnTVgwR56ycfS6SmAuSKPktWSYEJmnysbjBw1PLxp4p1nZGVpDappJkTVk8j2vw4Tb2ratg93aPTB",
  "key14": "3GMiFktoGYESmXEPe15KziJT2njutztZnptK9TQ4mksUPug1ms98SwQmq1AUuuvCq1W8UPBJyhL3PAzGMGdHgMC1",
  "key15": "5McRNQyxxGfNBiUvG479zkXWY8PhgnwQTUu5LxaUwWMKmd9t8BsaXfhkpBhVmgW38xsVaQggrF55FZEs1oB97o6R",
  "key16": "3P12korkXzJ9XzqFyj9qBxMXy7oG5vLuK7x2Td3v1xkuvHzfQrboJfRnEUjXZSaLSokTcQ8JderD7TPz4FY7F5RZ",
  "key17": "K2JSKckU9w9YLnFXBwXARnjiHxUL8AaxLMJwLXtRgZizd3XosNL2ivJez7xCF9TguRufZ68tFCkS7qQguGM1b3o",
  "key18": "4hxhbpxcVYm4GVPuWbzRSsMQnpZZMqmmdwskTVqnWger6kdNT2xbZe78FByfw5zYDYDjz5vDkYmvkDPBsmyfT4g4",
  "key19": "NFMDr4kzmJyczJrEC8ejwJhLeL7yARNXFbtwBLYb8Zu5GfHdPLXqKnVeSSdSM39DL8qrEGzWVsptEuW2ryjzcV6",
  "key20": "63uQt68v1z6xh2Ni74fpYQToXchwFk7ke7VJG8g7B5BfLgezz1xCb1pQdvqn9hiiw4puD4Gef47v19WL9Py3W7Gd",
  "key21": "26TRG6bVVvfksyhpf5bjHjgtMuM1YBhoi2C7X7iXZXjfb53P7Lgv8SRKGZZasw15B7ipMhkPH1wjKYEEJxSqf5vd",
  "key22": "gZcx6LcjETwJSnnQj5CwHuBHjA8NGrHsRVUqDi7WdBN6gLSj71xf4BWykqJ1Ns8vioGqcCJm1EK1RmfBvuNf39G",
  "key23": "4NG9iTBTLygbfSzJHggoe9FSXBBzJuVuZU5yqKDYWhWox2YBJLECfo2y8Bbp5wZ7PFLwwY71uXNQqBRmF3NUFgF6",
  "key24": "62LoHfqXwgWW4Y5QRux8Tp9ddx23J9EhjbGTzLtBAPgU6zmWbBdtrqFzciRD99GGkg7D31igzTHcroD2nYok6Rtz",
  "key25": "2zwMnvq7xWz3UWExCoCDrYT6RuhGpgjceuMJyfggYGVRcKQhN61X1Gwfh5Ufs5tVb27bytDB5R2oXJH6FkEW5T6C",
  "key26": "3VXABzeQGi4gq6YDSoGRtijFKEmq7KhwGeY5U6tEsVJ3zPURmabYeXvDoNzj1GtYwRHmTJk3VtwEMNUb2bzkghvs"
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
