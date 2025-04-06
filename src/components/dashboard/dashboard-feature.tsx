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
    "yDtLA212gzNMnSN51yZjb5ZqPGxEQxEwABRJSd2YsN1MGpcmMbNEDu2u959NNPy9yFAFpnS2NMmPaiUhZTzaRVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YJAkfV7N2dWgka5xA8TJtEY7s9Jd91MmerJ3RXQxyFxBKVfWWRg91YX2Bo7meGRpki6tmK5o4cEmFNbkYykaHdv",
  "key1": "4fkdq8JkJxFiRkhBhEvJNPreaVdb2WMud4Ah7Nvtqgc7jUUtywasVFrRZiq3wgeMJxPo5gaLpE9vKG2yRn3vxSuS",
  "key2": "2wHePj3fgpsNv1bLhxrhEuk4tYqdGHr5JtDUo8xc1YSvHs2JUNrYYcWMs3c7EcdKFSdrMe4Qu3qPyACfZBExKooQ",
  "key3": "5zF5286JfoDHdgC8vqSRmM9EEYCn5T67R7XRYE2KaL7FLrqho8MvSkZo4aZgiL7xLNTm83Eef8QbKZZmKUJZLMaQ",
  "key4": "4ZYd1GvJMXHvJKUnBgb3zwcoGN6vHNEUd2gi1brK11i4qs3cQpZYkgFs5onHgTd8ZxbV8Ny9gNM9c33ijeJyvaNb",
  "key5": "5feTXouHA3AZWeG6brqXimRdVxJxeQSHYm6eU8Mc3qYXqQcXXafBmYMcsSsk7mhBdwJqNSFT7jgoL7iYYLbHDG1T",
  "key6": "2HEju6pVCmAvwasNbGpNxAKiPma52eAhAWmzqTeXA5WKYnSpwCGdY3bQRG9eYEaX6Q9j23ynkHAXrCuBDPzDHQM4",
  "key7": "4DLCwKTNUdJKz1hRcD1oK2v1p9ygXZJxvRqN1XPqVy91wxxoKwWwffiX8m8MeKavY5tSqkgHZJphmnPKr1XFecuW",
  "key8": "5jb8L4B24kZ6DM3o8jE4qkan2R6pmMhYfkTorUwQbtYGeJT9Ag3hHfLjtfacoLBNwgJrzSWShnthhjPdsKHAG3Nh",
  "key9": "4XHo6FrCpTg1ezJDzd2VuqU2PbCvKQjAK5F6hbehb8pZYygb93oZiTyTHWoGJ6FiMz6nQh1jwYpfvfMQzEkyc3fJ",
  "key10": "5KFzw95epQTxn5sHY4bNhWTsxBxWRi3a1JTQ1ZxTcAEHKEJxhFSGwbmHdeL7XkSdj59Wypavwxy6tkQa8Da4tAZS",
  "key11": "51uSohRMLMfoDfkydgj3TLk5UxuJ7mUNqLihsAkp8zkpsr91NoXyhjJBDkmvAy8kGudG5D9ujdw5AAJ4qtgU2waY",
  "key12": "3KpFK5bPUcbyrofj8CeTykDhydemqFcyKvGSsBM9YaHCct1zmAscDFkwU7g9LSqogcNfpFge7i8jJ4cE3H9721VN",
  "key13": "4Ug7BBSti2uq8nZ53z645gwGk6Qn3pScV2QJN9d1VMLnyREvyoAgyy4cfCEoQDZFGc9GPLn4VweuqNZzo3FrD1FS",
  "key14": "34ZdB7hjBMbaJzVQWxFUKvJDutsNchnvXjBSHVQcFryHU9yqVWHDaNSu2rRyrzdbygDSFGcf5Qa6GygTEqp9WwVJ",
  "key15": "dmzDV1CHYYtfUWAneUx4wZCz6f94WqmCiNHsgGQwxHnzWbMwpZr78f91KvZSmTBogMk6wKUHYjYiQTyGbSSZMZU",
  "key16": "4b2YTnDuPHGYitNf2uJAcLYnp7hBmheHvbQePXSJf4PcNT4qFyp4JWVkx6XmkLqLoYEt7koGkz3bxQSaKZ9Ts9R",
  "key17": "2893JA3kbtgFRA8Y4Jw8t2FmyP8Tzx7DuRVCixWE9ujB4Qz3Ti3MNQAUNyF9V9vqxBJeSz1GTzv5aE2d2Wbgg6H6",
  "key18": "2VPMdbUgdAfHPZQhKhvJtWaZLz7v1CDJ7Ev4v5sQLFBn3R5K8aJ5BURudpHNzjk5W8apBu13Zg98j7skbGMboK2n",
  "key19": "4UF2f9Kg5tMqXyVy5ouUks8E7ZzWdqeKMqFPgaCKh2GrpQioSwCqtFxo6sAAYjhHhRKuDa7XnCxopaEiXP49WUSN",
  "key20": "3zYuD6n2RfrVYSCDv4oYbbCQrioFB1FC2AtWrM6GjCP7J2my23xxU8r2CPFDQKhXFwQhW47BSybyXxgMUFpFM6QA",
  "key21": "H3JDATXZm9bYJjitCo5SpcYXJY5BAhEqTZRqnfXjY91c9zDEhgTWUYHe527SE3aATaiSozmsn51N1UjbGAedv22",
  "key22": "Y9khRHTc5ELd5vfiZpcXJmHQF81g2qjVb3xziLLvz9V8pxZD33HCFs4Ecv43NbFR6NRUwTuq9Y5NUWdWkXn9Lvg",
  "key23": "4SeL7PgZ8o2tcc8DPk5dBu7SpTffrassye2x7qw63RWwavis1jtDtpLX6uHrNpq8yzHvVvqS1xSH8q8PJhcE5xBT",
  "key24": "3prfUZ5JVi7kbt8MojJfcxEUK1nLcAAUHyqeLCXSCQh8Gw5mwPstFua3oKdEqR4RpwvaFjKhwitRdboV268o5pCg",
  "key25": "4j4PMSMFbrDEmUHJ28pS2YBXx2LTJKykQjrAmgjPmdooCsGoZur8HhVzSQA7Jwk8nkJBCHHGaSqeq61wgQnZQQe9",
  "key26": "sPPRoWdtgRBzshXGssxdUAPCiAn5FgaqZvdQxD7gJCgvUYxbRrgqKoNHJd75ix7TboJGPrC9s8VbYyUFWh7Uhij",
  "key27": "4NmwnW4bvodqfmWYd1haQJ6EFcrEL2nedZbHtPoSQcB9Me3gcUAmEEDct2JzebwGo59cyDBC6wNkqUWBd3B1ZUdm",
  "key28": "4ND62Yn53E9AUp6etAZ58qG4HhdaJzsERz2drCY6ZK6Ty6QapdAKR44CJyatidB9KobWX8nUsNomDUk8hDbyF5fT",
  "key29": "4KxUdB7hbSB6C1Kn61SGAr5owHmeUx8V9mQo2eHRkfAHeMpfKTFpkyt9e7AHUiq6TWYYVWNsJSbz1Lm9CHm7WkMV",
  "key30": "639FwpjK9cXd7KxPwtFbgHeR5pk2rLa4zcEntGyLZDZQzoVVq8jF2Ep9QKjts45AYfFWm37FTDyrBQiQ8Db1npXu",
  "key31": "3wC7ZvbyohLQfXWop6q4UgzzZrcM2vGaFjJLkPvgvU2jnXuwKobUQcTaoGkzH2yk1cRCgoAV2KvDPN4ELSLRx8Tn",
  "key32": "4JZ3ekwxUAxTGH3e5kAV4wXV4k6QhRDdp99514zng5LajZLjAtfyQuhE5nmm2KbR4NSPpW8HnEz5CALeYjSi3Frt",
  "key33": "3NRYdj8F6jTTWLj7T8rHd61xrqZdTRX17HkmmyVT2JjohgQsPXBZ6kjLGp3ESfanzeqMGh8yiPk59aczxJrD8cM5",
  "key34": "5Gj94Khu5BQveJGbLJoXgD4eqttwu28T9Kf7Y8pBQxWS1aAN6bDmWbYzKWd456JjY1gdkRpa4onTfdRAHfm1YSd6",
  "key35": "nbgNSunkpfuVtSF7VLkKUAviS2upACjtr7pibPZzxpQmEr4ENHAYwHB4Ew5s2dFJGyZx625kvLmCYVwq5W2x5ea",
  "key36": "5iNcdUdMteTV1JuJ7uzRH6VRJBDZtzSs7YW7rPEbX7wJH6hwu5vYRZsQQB4mPxajWhpkkEtKPiwcn4nUPBQSB5Qa",
  "key37": "3VpxxxyadC3LuwBsBysH9kXZyubanWEtwmeBoFFWKtX53cFKLRXP4Nt4E8T937xPCgakzxnDNqUVyNkfVjXwaeGa",
  "key38": "31YhpWsk18xTmMrZC1roiTSe55opyuS24z9jWBVjfPmtbvGGkmggrK8BKQNU5HBPpm8ZE5HpVXvDtctgcRi4m44j",
  "key39": "4B1mNwovtTQUS9rzNKphb4s5xEm5aZzGtnxr14XfYFvCdzfLqVHjmPZm3qCazBxWv521dhpD5tmTv31uWfxyymxF",
  "key40": "4FBUveWEh9u1s1wfLxLes4gE3cBYBn4LXpfPjWfsgALH4rYz4wZ2MVSU2Ecf9vrJJZToBSBTUiaBqY3R6v7w6Yjc",
  "key41": "5aeNCiVMcxqPAQ8VEpDyQqgKUqAEgKU7yNUVNtRvzkgQtR65qUcuqAUiH5YdmZz7P34mjT8JQJFe5RJ2KqTxyEk6",
  "key42": "3qTCRM2uydp3ZykhgTA2hRcJ2t8yHdoK54Ls2bmKYk6ob2RDWdXqTkoaCbHjupmxRRSMXQ9SwuR2fgMGcHTnEyMo",
  "key43": "5Vt9JqcGAqa2h3CPCXJMh3fXFmmfbdiqzBFGMTQxTzuvN5MxRF4d6SmHGeX5jabxGLFi65iR1NK8ohpQyCovvk5D",
  "key44": "rBbJqxxjtC7VxEYgKwBLZVRYfxUK82mKUirG1MezneiqtCY61hSWGcjZU6Z5Wh6iwPcVNiqzESEXeF5DrAbLij3",
  "key45": "36nBcm8wEGnxPSCfrp41DDj3T5DKjGLspXBNxQ3PWTrgTkZtowXQ1RpP94AueXLhLdQDbqtDX9AsqEo6YogGXbsP",
  "key46": "5UrW7UbDFGnpV1DpujTozYQThAfZFWadXbBMhoceEF6ZoRAUiqov7FiyK21VR2JWzCTbtiPQokm2A4C2rfBdsif",
  "key47": "3Q9F7Z31fnERC1BJ6JWPhcKJmXkptrWzbdNgqhd6PZg9qCzy6Tvp5cdocV1mqUCzjo4rytLyx1qQsR5JwPA6zVPT",
  "key48": "2QQzLdNsx7h2p2sczwCXoMgYk41H2nR9vbkXybDr6GEYAHfkmE8cwf3qxRkB8paRZnxCh9whHCrVyAiHwyFoPhAL",
  "key49": "JrT1CdRA7Zx86owMnXyVixdS5ddtzpTvU1pxPmF2yMvrBZfvJMUZhuXgEKiaRz4ZRdvq9nUbuXoJoD5xUvvmmTq"
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
