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
    "deJUpDsSnoJ3FhUDwyXbDh7f5cvTRaiVKwBTjXkcZWCfcwZrYpnNgYPSDZy3baha9AxxvPAKDkCgtNkbsCLWvYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ASbmqQrT1X6HqiNzzZbkpvvd9tjmnqNy2GxGetW5HsVsDxHkKjJs2kUi77RzHWJZMXGoEBc7fGEy8ouMLjf39sd",
  "key1": "3ST5zx2t2uasKKg1yVwh3oZsZ9PKqm6FQs8adXkZszWRtSD6Sro5ZYWoQbft8cw1sQWrioNJJNWi5ToDZVNooicS",
  "key2": "51xyA1oipXibpQYnAnc8ShUJAhZE7agAFeGxXwtiJ8B59WdCAYWT26W537QntiCJ9PdEu8kuUkz41ubNb49GGE6d",
  "key3": "2oTCi5kyzmf5Hdm73Q6ELoCuf6p2QckZrj5X3xEvssfu8iekZVph81yraUnWz4X5FM8qT6SCUtP4AiiQ82GYVnvG",
  "key4": "4eFmHQ1pvRoyQpm61wKDmPYuK75zW1mCzsY5V1d9iUuqhhXuPaqkhFNi1FCCjnUXaFiWHS9a8Axb1peeTpjKrmHG",
  "key5": "4TTyKrGHHbN6Sam1VWhvjWBQ4Wx7C8Rdqo1R8T9cbHB7octoWtTdn1PuTr2Qn81P1Nq9zjioyURVSHK9NgVQ1V44",
  "key6": "4NfZKCssPficLoLwppX9ad424vdtDDGPe2U4JBmZjmuvv7ciq1HHXMNuX1UQs64wG6cb5d92QoXg35NjBuGhzidx",
  "key7": "3zjdz19RQvwUJWz8WW3SQDSvVXxtJotYpejBSi7M7s9GZ7ogZqv9Jc8cdFes8LeE54jJNa3q8N4mPBpc1oCZb8LT",
  "key8": "3zWpFvTEZHibQ4s1zUmAv9Muo6nCyN2HVjYGa9JQNeWqfMXKzkbseZZ8yp6Dr9W4igBCDwJFe9fAKwNdwQKfw8Kp",
  "key9": "2Qn71RpsepxNAifaxHNm2SvYwA1Hs8tJXcx2mWMPejVYPA68DmebrqQJgR7uz4UZ7KswjmBsavsC3EvwfZLq1Cpc",
  "key10": "4R11Xb7h9z8EUadu7P2UcaHhcsn9JYjvE892ubZ4AL3xNSXubHWMfCkoF9qCFwbrRmhns3pKugFxPoEAKkBPC354",
  "key11": "4HRhGvYJ52QBjajErxsGf6x18BZhKFkPx523m33Q41PMKVCzgNZtC29eyasKk42VjGrhUct6GwoKcbPeHZygt1Qe",
  "key12": "2CeZNAFLEZiVzU7FMfgrhFXoZFwA2FjTw9BMgvEQ3YFxe5gEgfeQDACCjKGAGJWhv8zqy2msLrUaoBirfLbGwE9L",
  "key13": "3dSUefCRgP89knBSv3cRR2xbUtxnHGvyzx8Tq8a4ANwNhpS4uVbdmKfniatEkHwQzHU4v6zdtkk223FPBDQe5gdz",
  "key14": "2YYPULndfkRf5FTpmrjYhHzPtbs5KHhU6M23rUkdUECHqw9cT52uURizay35dNjQzsCoQH89qkcW6CLpHWW4yiYN",
  "key15": "4r349j7Up2BaC1DqUgP55wmKvPj3xJL1LVounh3SZbLYQoHJEKZuP6Z5GAstbSCsDM6muV18jk12v9PgDcMpCRpu",
  "key16": "AX4G2mH3vc463ho7mEepwWmPdGxsmxLR5M6WcXZaEyyh5dMnRVQZpdY4Tf5LiFgMdd7kmCgjK4YQrm76cqS1LY7",
  "key17": "59YP7Fcdyto6sCiBFtWqjuxbzrMsiz3jYJpAhBA5BzT9v3cK4ek6vM8hjGxBrUtvozLVaUuS4YzSoA7Xw9GNVNrX",
  "key18": "rjfxq2aY2qfkQCBN9P7LLpXD3dhCKQtsjP6PdiyaXr1uNiZU5oEHTT2bJZTJG8qrz8kSaLBct7HGXvaQ3ZoFHDG",
  "key19": "5wxyVkGUoiJRpUdVeqrP9XMCzTR8G3nXgoe2zTpr3SBpPdUa2RfvoZ5mLzS8NcZHfvwH7qg3zj19mJA2wgrjBKM6",
  "key20": "1GjDrdUZ4dfzLX2F6tQfvhibozKZdUBM1JBWbz1ePWwc9vKkZBGgLbsdQsjxroF6weXsjd6keDKxZCdYbgPbLMU",
  "key21": "42ZCjisAG2oux9Rcu3ChCzLxaVzCtX9uDJB7KhRgghWuGfVzVqc3jvfJCpvByqojF4X77HTTkJRtVwZPuzGW5L3o",
  "key22": "4AfPZ8BKavRrmLsPY9Lid3nLHWtFYwyR4hg9NDB9Un6adKHcgM6oQwRbBHfdJBfoY3FA5uagWTa9hSrNdhBGbUaG",
  "key23": "2cDh4mkmhj5atdiuajz65kY5GEnFhDoX3148TUyyNM93yG39cm3bYxmN6Kbjh9o8mbXN9c3ecA4ob1S5rFH26pG2",
  "key24": "55hfcruvh5PHjizzfT1wshK9bME7KjBj6ZqCbJAANBPvGAvtPaHmmoKQsUM7L63c6aYsKAUwUhWWmVX34WBYpfuN",
  "key25": "49kPJmmnRaK9e2AcCYK6DtMEH1UVXC2EVeER3KxWEYZ3iJhfhixRq3PzCJbUmXdT27xsz1ajeUFEPxRwbVEihNxw",
  "key26": "2wkcdZA2Nro9GiaHGETGDsP3YgDeppVvCTHpoBLQCFdQqeLeYjcaD5qKstZujGouypJhD5s79BC1PqLtVuixxavy",
  "key27": "2EqT1iH27og4yKrYAG5jnHxCfutcap7UmCz1piH1GqdK1x9TJKM3kAeJs8J31aKZsXF572xMBrR3JYB6mxqBUcRn",
  "key28": "dyePN5vHxTV9P666iBjkEsLhrAy3MHY1LmW2jvfoGiXShvZwBcN3JpgqQvBTWrtAgRkjRUCRPJBE6LmEFqhV7nQ",
  "key29": "3hn6QsAWuxWsNF2p52M2rB1rigdz5SymcZTXgRJb7x5SwDtyHB5scV2qkSwKpSDXcJL8nFFa1i5Aj3bzPggB3k97",
  "key30": "5k6MW4BSCcRNuPWzuNJZg4q61esoQAHmaQffBMn2hFmaS5AtWDVnrfcqgRJ2BhyWyCpHiioswxBcJBE97XmbpmnM",
  "key31": "hDGu9BK51KGyTyjgCUREypq1trdefZkzXF1AX66obJPEqSEcx1eA98ouxCknFqbZ4m6ES3AA2w3CeCk79cCHA1h",
  "key32": "3mePHiTwr4ZEZqish5vu6hWzXGccT5jve8fc818nJtL1odtUsAT6XZNSbuxaNuiFTmyMScFoXodCLdqZqJWHvTHY",
  "key33": "4tAtYfpYsAnLiZNdxWCmzfWnXeKN7hVAFvpfuBRphaidLkPeHdHJmjhAhpR2aYDxuPpCczhaJ4omgGiN4DkCoCaM",
  "key34": "2z9ng3Y4XGjJdQmufqJmETuT81nNWooh41Hqe2Z5dPpdtG25e3Aaoq6N84e7CSB9hub6ofVRo4RWnSXz8TNSeiMf"
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
