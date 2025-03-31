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
    "362s6kEJ5XJJVapEnwkrHycfrMrTagafSkw3kakkzjGPybp3ddU5SowCNWrb7DETyk1ko9ZkFRvjgmEgVV3pENqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FZDde83svSaktS6vgEEg1e5Jrcde878akft6mqpuNqASMoKN7g7ghq4nqAfQ3QtRKzAKu133UvDp8cT2m1cei6m",
  "key1": "5wRZV9P69ndVUsX7dQgUCakBBpgNWr1xPG6furaDfXnQoeZry7WA2coHahFbanKcZpxfxe3Rk85TXtb7W83SDmeQ",
  "key2": "PWS8HBdP5dUvzNZ1idvHF6jZJ7jL5tzotxj9aFYopKfk28VfXiMtLQAhXvvrbQ2xFLRt4j5rNmES14F5a2GKDgQ",
  "key3": "2KY8fT5njDwSVMTsNpYKZhXKZNKyDidTB6TPgfBoL7wfN9DttxwcQHo3pAEuyUdh15NeaXcU4nf2LCBeuUnTdCw4",
  "key4": "5vgJBkoKKPmWuZtxPcZXgGkynqKeiwHn1egVogKud3dJ3WjUp2Ru1Hc1omDc18XwGgeDHwmoEcepd1HiXuVftZPd",
  "key5": "5ZoxT7SN4SGM82tr2rd6HcQ1NbHHUuHfA1s6zVGgehkGYmbPejBfu5BR4h8jqahioHNexwrA2VSiF59fFh5VtEgC",
  "key6": "36oD7yJwJZ6RCi1L8L9A3tNMUt8CirP494GUqPTEfMuEBpo5qn4nayFLk769Tsi9kTa3aKjNDaPdWG5pqqfiwDL9",
  "key7": "5XqnpWJVVbsc9eSQUa2PDenSbzbqAsQytWde358BVHNTDVk28xNA5bh3SPCJdjpuzDK7SHgL3ZorYsiLi3e6ynif",
  "key8": "2C3UDoa4K3vqpBvtRqhuYp4MQRiM1LhN4YvaZjaTbEsXQMjFDYxwrdFy3izHskoSsuVuoWzZ9K6Lbr58js5JPR9G",
  "key9": "eMg3t2GP5oSwPKfYusnVBAdRNuiFQe1WQxHKnFAiiwF66eu2mftX2CJmoKVTGfVu8RWfQbkCfx3m18pWtbjmvUJ",
  "key10": "35pjjqPiMcuERCUJ41Ev6oUtsoiQeLgPwFs9Q5pxaocTyRxtKLVFcZYDGTGNmx95dQhM2f84XxMG9rQRQ2fiEmEo",
  "key11": "3CL6S5GWYWCs26UXn1WNn9XkuYB9vbGCuU84tyUnNiFnmSRvEyU4he1EXqfTpJdPiihtNg4y97upBo3JvNYdoMx2",
  "key12": "21ezjG2LcyVsKkSmETdryVfPvG9JsXjyLvU72ATCeGJJVKyXyYa2Ej7U61DQZMKjsjmb3QoMx9HztrvBJUVyeksD",
  "key13": "28X2EnBVzfHy5tgPVQriTa2E6EGF32QPaxXydaAV3hi7a94Pn4Yh5a33oACjfNqpGmLppZKhBQapS45xPALt2xdx",
  "key14": "5hKaTS4shHMgJ5ZCJr9ZEYfCvMRt8jcQXhFagnniCqrxv8MQBSZXzMuvjGKthooiwynigKpWZ2RsHoz3gA6hLrux",
  "key15": "5Pudi374yqm7hf1W1tk3xhxpkjEcTBfJX26qtB6Cm7H9EuywdMEzQJ9iG4HNUSJbQsYvu2B7CoTFBnYojNnkoygg",
  "key16": "iyWC1fsWmhUGkyuJsLUY4B6yesZMchRL1bM99Y7XnMdhZ4FbPrzo9feup3DeovjGkEhpuogy73PUeU4LfqSCoXk",
  "key17": "4LnmLN6AFPDtfgFGyxcxnSszY4FTKBGiGFGtshBMzLMU5EVFozC3uXkUewRwi2cCFUUPBB5zdmntpvhmXextgmV5",
  "key18": "5RaWj431Y5wbQ6jKaBTySYCuutxMg2MjSBh2LeFivXBdKEWmx1AjF2Zjm6cvHNBG2R376Xk6AUePMUKj3w5C5JiB",
  "key19": "5snPpuhEkn3pJdQkqtFvLtv8aejjRNBKL8Kdusw1mEgVRxP142jAqHFopzzKL1BgJ1pSfgAtLwM8PfMyqy8WuXMK",
  "key20": "4mNj6hoGUGrDpNj2ZjhP8ESzx1LtvzqhaQtCJZLjoKpXU6FCnkB6mgESdiUtDLhHfn8Zngae7UBAXUbAntUrbesA",
  "key21": "2WWdP4EWxkEho7EwV8C8ycNc3b41bptw8vT9ZBGJDi2TA3VcAHJth2ZcDQioB865KDq3eh562vJfqUZJPQG6tPJg",
  "key22": "4osnTUTjL9pGZwMrqkqSC3bX8VT4DWoHuZdvpRv95QX4yEKvEwfYjrRgeASHf7aXXBSB9LC3ywiEvNTdh1HvXrRP",
  "key23": "qgRx3nNNzFs9Y2uA614X5s1sSAj2AZDqoGxByvD36MpsmQpXQSebcCW7JnnNddr43A2DPqMgctVaVdQYbtPPvbp",
  "key24": "2Xni7JKzgEn3o5AYqSr5HYhKGqMcXXdc8w5meiVaJcb1ZTUSMD24qUhbvVVpj7z4YVfzUjzHKe9NWYjgbTFJVaCp",
  "key25": "4oe3yExbMBJodXWHrB6vqH8KeftpL6T49uZpKvuzybssKMKaqj4LDboD8tPSJvHKiEjp8xizg54A1H29egLzS5x2",
  "key26": "3xg3TXwUneDcCrcXc7Jn3deD9wrkZveKxwwLKuctBxZQ1jLKAwcan8UsWRRxYVA4rhQSXYwcFu9D6X66CjmZWxnT",
  "key27": "4ZNK7AC3XStn7qcViKgZcPpDzHXvYwe4jcDpgxGctNx2twmcAsZCbTguk634xqf5q34YV6eyGD6b4QNZw1uwvBk1",
  "key28": "2VNjPsqz1WCE3YQaumxwrBYxEGE9G7FiioJzJDqPNUGNTpckjTzFpzxXGX14ZZuTn594ENTZhJwbZc6TFsrWNYpT",
  "key29": "39wTCMd7o1yJXcNetjNKPrVwcimCuh51M7tRPj7cF5ZNLT16opUfpD7ZrtNpsV72b2Y7c72wbGCWAc39Bx8v8W2A",
  "key30": "S9sNYyqW4gDqSPbB2QD6rXe4tJeoHub35Nr99Jzua1tt6jhHse5gu3h1rQs33e2rG7yT8kT83goqY4XevjiczfU",
  "key31": "2TD2bVgLus2Qbpdj9zRdKVhA8payNViGqWxvJ78BNeZc7uC2Ge673a4QKsUXiizNt7WSW9q4BSAUpgQtHhyRZWXD",
  "key32": "3E3j5vWzLwgKmeL4eBc88dqpSmMdusEb4kL6wzrTVQqLQeGXTUcYu1o6wjg5psu48J3uUsgBTcDWBy5KvFsG6HSk",
  "key33": "42XKMFYwmjrwJN9tkUn42trzmgByXKSMjo6iCeXT6CiSfPXPyVeQgDRa1AJedR2brr9n9Avx1r2YMSinBZ5RQhnB",
  "key34": "YDPaJ3JmXKkriEarCibDULgdVWbjhHc2gT1diTcwjb8yC9zDrSb8t2w2mefAFGGjbUtc2rTpMdXD5E4WjMsSEWN",
  "key35": "3PmjmywiQeFy3BzYEJdSLSdgsFgh2297o7NZXbCNFeHrZg64EAaFhiEUPidgfvPiQ1Gr1MnLBdZAPi4NvsSyquxS",
  "key36": "3kr6o39wfCpAWHcu1v7XmFu1MvfoXBMLeP2KzuhjWFFVkjeyXCtGBfqNgWFnrSpTVkxfpAyz9go22fVGn5vEXNHw"
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
