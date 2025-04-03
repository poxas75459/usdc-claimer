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
    "5NUho6R6eYosL6Vv4ntBzreJ3PDm5qzSvMxRwBAHZYBLtXFqG2u5BPLJcYsCKU2J4SsQ7hXaDEpbjus8vsKp79mV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LNT1JRkzHWBAzq6Vsk7p6QS3j4kDYyXoDh6Dk7oTjvT7mUtgbdKHpg1PhBHnfnbUkEp4ZESKz1hb8YTwPcLEdVV",
  "key1": "5V5z6ZkPVpLmLxmnaWZziKF7V18pnvvmkyeULFHgNpYZuEi9kB7Wetcq16hdtaMaPVZqSyQFe6dyAgbKMdzWuF1r",
  "key2": "zGeLZExmh4KtPscBHst7ZdhauNzLWKDF4TUki86LJxDwwXBPmMyW2SK7V6pgghk6oQB1Zd5g9uNRSH1KzQnDqV7",
  "key3": "4Ldr5NV2nz9dM8S7GUujobfJxLfENCBRxscxoqs5GJY8JdACRGY1gwDyFMVWnuuY7ragKk11sKfcMsmvGTxRQsvK",
  "key4": "52v1zR1KMGJVWigGbZUEi58mRcEi5kszmuB7H5wxWr9nUvQmsXDowA4me8rYTdw4TVLYJKPYBmFtiLjQK4jS7Yh4",
  "key5": "34vrKxYGoiCkEeyUcTT52AKiHW1jvw1v8VYbRNf9CgrDwtDSu1EstoEYwTAXG8e8TQTt1JTJsX75jCVqbGCnGcYS",
  "key6": "3snwxUGiXrRqz7iQBP1o2oLDUMkjpsVkArLbrGidKRuv6zPq93cannfEiUpVYsFnXWJh9Y8hBNWbeTu4yCdjXxJo",
  "key7": "5CZe2wiPR1NGq8artuCAEZDx5rcXDHda8u2gTK4M9MYSH5E6oNxMNEEs4raJhG3DjP9YEYBL5QQeUfSKPdzNyRG",
  "key8": "54vNASyXdPYY7b3BaLLSwfBPpg3WQsutUjqQ528fsNwfrqcko1VhQ1DH4tfDmHzzmtrcryJutMAmesAngS79e1db",
  "key9": "4ZoQJk462QhbuMLCJrfwc7Ejvkc6Y8uazMBA5UR2o4tzNYnXK75JZerxaBL26KjjpLzVXqD5cjDdDZGiq1MGziFs",
  "key10": "4Q1CYaFuT4CfJKG6wBz94uSnrHs66WdvPHa3jqXX5Pa7oHCFnPe63FF2uPBem8ehixQeBWgi5hVwyT2EihmyxwKG",
  "key11": "54E5YBctJRhdY5cKJTDGFkPWncP4NqXan6vqtJHhgWxdzu7bxbs4XKtZrxih3YGELtqxsptTczLzemMbpcoNn4gK",
  "key12": "2EdBPMwtEC31SQxVp59Mi1FXfuA9RXM8Xvt13Lg9P7T6TSPrSTx28AGeBereZyzpBMN5M3LAHTJSsdY63j28cPK3",
  "key13": "5qPo1UM8VagTEcg7kd6PWqMsXyWV1s2cQ9uW4gnh46azi4hKo7KSmth2wh3FKFZMbuNjHErTuojwVGcSSL3jbNWw",
  "key14": "565FwSpurvh181DYCz23y47MNmfhSacjp2VtkfzPF6bXBiJf6AUEZuhq7q53phoDU7ieVNuinNe1RQTf8rAogUs6",
  "key15": "3UJe1Qp2jTuFzYADJuYSBRjCaAapjabtXxTQWr9QfhQWxoMqvxhgwauCrv7dRnJApPGwb6SgPZ8KaWzQ6DCA3QUw",
  "key16": "5MxzDaHcZcVoafQXXqYZ7TxXwm6VnmUnkW6wJRxNu6qJJRxyKBuweRqvsY4Ec2aFFf1sp4UUoghV6K2AvjQ3F9yZ",
  "key17": "2zdRkxYQYTWPovtxGC7mbZyxPsPdXdanokWM1NMRNExAcQ5nTnZuvALcyu2uo4HYKeA5sz4NXQkKr8KyVhz6QBa5",
  "key18": "51v8V1FNXSauWEaeRKpmkXfW4Y3uhRH3zaGqSZaq7DrjoMTSqCSJEyAhkdJ3DvCzWmVaJ51uHieE51sA6QGHv4vy",
  "key19": "4uYrnkosZvRyd5NnS7unaKZrANZqrNBQ1eXMD2yTdRhjgKSiLzc58cVJM11yg2wkvEQuoHbQ7zKSCCWQxbBBhxVQ",
  "key20": "3zDkAXQNhNmySvF2oirTx3MGXvZMPyDrHT4HVEY495XXt57Xf6BvfkDqzUEtNEKj7x2nXyapYH7QNGeSxhbxh5E",
  "key21": "3Aw95JgDyHCtdJBZZ6iqttXnZZH1iYMrQse4QHqu5Axf2p9ubz6JZYEpyTrBFDYCDTwrgy6wrS989da4TAhUDoPc",
  "key22": "4u4gKD7v5fV168k1mgrmX3yBfRWeW1xdNUYmH1fSeprvv95Br2r88tTh6tpCtF7c7sb53Sc5uSDqJpnScyy61nxh",
  "key23": "29emPiLY1Pk3mLowZoucHFSj5umxkpZeXqWrXDwYNH78HQTMygLfaxiqzfFMKzwr7L4Wbpbq9pbicxJiZKQbN8BV",
  "key24": "5uRyek1TEPaXUgTn2mQK6inf4LxvYKYGPZA6UmYtX4KpZ66abky59ua3frQXdJN22wNopDnX3D3GQFBRiCv6TrpV",
  "key25": "3KE1eWRaDXLB2jympYVZ5jT3HdYRxFZSMCueKjW613T3b7RxwkdKg9oStdUmPGA6frSXro4oTM221ehif1R6onqK",
  "key26": "3whBgBBxj3MbJyDCgnR7Ds9Y8y87PxWH8E4sEuwAmcC1M3H1RWR4JBbe9UFkouCizWH9uACSqZfJxjsHF32VVYm9",
  "key27": "4GR3WSs5wNHqaHKpeGdHySkXSSQXYD5JnAVcK1rtrN8XaxuLmfarhrnSNv74E7ZhNXLXzFiCCswWpVNPvdeWk7dS",
  "key28": "4Bfnjq2aa5NxsRNNvLhAewa4zQcg14LBYHSNUcSCAbsKtZJFHdVZhcuhzumVwN98u8dAT5qnf3bir7UTfXaWJqqR",
  "key29": "3kByxHBYxRs8GMqTE4CtthpCdg5W3eWGtXM7HRHhsXQgk7AkAmffxytWvG7tMJddhnQnZtqEvM1x4mkAwFbdyhj8",
  "key30": "38f7EBmfYiWAoMz4brPdGdtY1YDjovxw9qmLgejvZJoTm6wwEPohvRdcY9hBN6BxoPLnoUadznymxtzi7oEuPtbF",
  "key31": "4dq5Zgxn5HMBLNNzHugtCK6bXgK8dUC3UCcjD5xD9VcGYeD5q1NDEEsaG5RKunrFidMPqS4GP9UGkWAafwbJdSdb",
  "key32": "3NYNx7ANwrzNf3P8T5aH55EQLXzUwyt2Dej8qLpJRYv71X4D3nrYB6ZvkMXADWhgFvLKEGhpEFvJQLZALGkXQcdd",
  "key33": "2N7ioHD1V8eXYfrJjnw96RGw1vt3QvRPZzgnSrvNMM4DUUkzBsSYRwYGX1cmZEaWgNESYHRqjuAi4RgAVKKRSXWE",
  "key34": "5ZkGLQEtGtqdGJpoPPWqes75xFLzsWXYooH2uuiwiVJLPY7szbE2TD2QMHvjAUf6cqfZabccWXXLMibpT9t7dtFV",
  "key35": "5CLu4nKjzQox95yAyxsfk2cKtjmzfz6Ss6DWkZCHJaLRGTVKamhjtrev4m8eJo4zjP83PC3rJ2TqaxDp6wrN99tU",
  "key36": "2rwB9o8kWyDxD88uMHDkbm4s4HJMGnzpyhmRSWqao4qfyc43QvmVU4PrNUzKTpFwuheYS6iYeQMYdHmZL74JRs8o",
  "key37": "5FURwmGGfKSM9kSzZLqhhVAxvC9ZTisQWXqBfsLQdW4tdu5QLaEEpLzaczPb8BnWDHd8RKpa5RSyD1ADH5xkcyWK",
  "key38": "5UicTtzKTNHp9dMyK6N1J5xaWEd4hYxWgNMpTWBy2RkMMfLjMCM1zNFNDuNDmexD6KtQv3zjABLB1aQq7oDHRDMW"
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
