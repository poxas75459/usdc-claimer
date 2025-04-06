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
    "2aLzCwsfVMoMT5XHu3zhnQbMM2LWP8TCgotAihmqgP9z2JSDerYBLWbUP2jW8pKdaMCVKVmL6EehUq2uXpV3WTaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2peBv7yDnSWC2JfoCoyrqhgDXJnZRZN88V8eNHKhoQdEpMMpxv2pAcc511Qc5KqGBTPCr8cTnHXuKSmJngvf8tWa",
  "key1": "2VLP53u82LEpnDp7j5cZTHxFougo41kyv51bbEy4L1C1gi9See1qwjGScmNRfwYWNCVa3FpeTRMqRZtSWCBQi9z2",
  "key2": "2yJipaTEGuiNUCEGHVTTatHtXyT1Ex3aVCu6Qc7APFddBDxCNXwkQCdkZeaETuud2TdVsVxDVVzSGhdN9NhTAAbv",
  "key3": "5rwAshYFLMDdYfPPTYDLAo6LaNRuFPye14nPR7iWj6wfu8EZ7XVsScjsP7hh4ioeaveXhHoW6rSGsCmZYr2NFi1A",
  "key4": "4bFYeFhzqyZ9WEdWZGjRT5gazkF7S8xc8R3AUGpe2shVfr38jgwvEGCJkS3K8v47KVJ9ixZM2CFfFXRbAhMuH9ZL",
  "key5": "4kbmz5X55usqCqtkEUrRDM9zcaB5AFbec8AcTsoqRjZbKoy4UEiaWotFr9ZcfLUQw7KgKEky6TZvVWrJmZhurZHE",
  "key6": "qPDWxFqSzwTR6w8D2hptzvTuoBSMgQpWsJdcAPgjg2NhAG41LKXYA1itr77AdT9eF8vJYVPk7Cvz8CKxpjwXrHZ",
  "key7": "4n3pDUwKyh1brH8mDy2TWrEXbyeSuHwg93KfyUBtNbARymBpojQ7tVhePGVChGo1L7Wn9Xs3GjETZovYtxGrCU1c",
  "key8": "2ByA4MNN2UWP2pMfN8SUdDVioWjB9wRvFxuzZoQAWbnyny6YbCb5pvY9xf7avgXN1jKJDF4X2Cgx539VyrHA9Uda",
  "key9": "Jmx5krKwAUKnUBKaTWSwkTrTBhhAyjkX8Cpqks8vZAVh8JBkMTTpYtJHsghE8Av2QYEcrZJbQyHwen7M3fwf5cy",
  "key10": "ZfFE3EmmJHN4gKuVHSZbuTBM1Jhf4i8E8kQf5JMRRaK4qikas6kTZh2tTXiG8GsPedJ3xa4XSbuCmrAjPHuwH8X",
  "key11": "4Sd2yMq2wdyYKVW4QmQtiSRdk5B2EHm9FCmVVvzTzhZCKxxCrcLv7nrEf6gP26rgYmrYkhhnVm3MZP8Xot9yrdwE",
  "key12": "2oLJ7TxaVvW3TNzuRJ5PCFnH31vwtKgZzKcw5yKojmRpseiB8zVxMyYFtm6pb2juatGx1WpKsBdE1LzETkRSURNx",
  "key13": "2U5pD7rJbCweAJQMtXAPqfoh7T6DrPixUfXZBvirhvACmGs7GjwsFQ5r6rouYa9vQXirLqC9doGL52Yqzn8nx9VS",
  "key14": "g985Zfa6cNf58rqoAZujLxbL5Tv5Z27Gd7oS4BGvEvLJETcNx5of3ZM4r9RKXxHs2F9EMjSmhjhSiqmVF6gnBhs",
  "key15": "3Xq5K5BTQHNgtAvC58YZA4qK2gzxSbGi38C4obrCwCWf2mEEKiL9Hp1wPiKhE7KD9bHaPp4RYQxDKThw7StnRFUD",
  "key16": "4CNcdRoYBpyoCXPN1dtrMrPcfYm5ovYxA3CmxRLd1VFSCD1otuPdH5GykMAiovKqj8zz4Yrkw3eFJPqfzmD23tY4",
  "key17": "5jSPdt2rzkii39XdQ2rWmKcYJphs3HzNkaTycvLF5tDFeRdA8y3Pd4hczQN3DsQACHr1nhsXUq6XRNfsJR5n65gv",
  "key18": "5uveB65ErfHvAB6rYBFU7uPAeNtvJ5nCHLEutELH65T47VY7k3ncCnKxXyvScq8rQFHogKDCqK7xJQRqK8eefrGN",
  "key19": "5jdvH5s8onbecCNqq3HvqQLfAaysp3UkCmL4Aj8CsYWaa7Ys5cQf2H7M22wbpna3GBkRbtAscPxJ5v8zJFMRfKan",
  "key20": "Jg3iGCseyRNjgRm9ow9ZcxDjhzarAEq9ZyCySd2VcpPy111t3wFFRrtDZjtHMrroJzceTocJbdf9rcBuVNRzyE2",
  "key21": "dx4oKL7wudqJccPf4XUJMSQdyiq79kMvoNkXK1VpHnb3kZhHLjLHSLbSnawLX913c9D9cp9SNyScz9i3zo8rrsf",
  "key22": "uQK5RZR8zokEe2TSfUKaj2Pa8LrJMmzsXzDomCxfXccXonserXd2Kw3qo3y9GR4euzrutCpiJFReJNyWdDrM1M5",
  "key23": "4N2jVBcn6jUBM7fpNb1xsgSk8JXfft7TqdRuJpWMSkxbXvQPPnKgPx8MBAyKGkGtruiVhqvHsnjqbotNCtnAr9qq",
  "key24": "3Br38LrTnHL9qpjZFCfXUVXqKxzHi6JRRQa92t8dkU1t71TMLS82cQH7uXnvrbMBho7D9xhKmV6bGfitxYT94mp4",
  "key25": "VVst1cQeCPij1ubXt9Mk73BZMx8WwzTFy4FZZxQZp3AT3ZgHZE8xsvmQnp6Q73MhmTPqNRwVCDVFKbGufmsrb64",
  "key26": "5D7sDRoBLEBPPxtGuB1JQTbGbC4vXcBd63W2mzb6cLg9kgMoHv9LkGmNe2TB2KW2uLV6S5zecSX1g8i762qLDKSM",
  "key27": "HQDoY7dNu66P6saFF4rn3HeCvijYXC6wYEix2sSrQ7gQ7M7x3sQ5o7DmAakW48PNpJYMNSoffB7mZV8ycCafA77",
  "key28": "3pZDUSvue4wB3pr3KVzqZR6skWRCCybuKGsDMPeTt8k8Jf1BDzsiyxaAnFqthcU89FFZcpQddc5uXE5VcZS1MFtx",
  "key29": "4uSyTgg5uQWtkxe9K8GCZiVqK2wHeAt3oHHpmgbJWi1iq4sxPvZFzsQkyrTkPK8vTwxzmgWWb6wp5HS3Wkhihceq",
  "key30": "2nYVPqBxXuRZYg9e3sLPZCpDtJ7mQSExAeiGAMAiNUQxmT1d7S1AqJ3ATaxogKnJxsbmq31brbpFkna9AU3t64v",
  "key31": "5pnzW1FZny6iaV8X4FNgVtMR1Hwdr3zD6rPqVipvmM92euS7SYwzPeSJv4hpQoojJdUpJg1pUuGQ9365ExHtL327",
  "key32": "5xaqsnojFwrNq7vxezTVN47KzkHXHU2UVdZERn15bMoetnDXE2e28vVKvZsq5WYnJTHqD5uAkpBkB4XWNYTEJm5w",
  "key33": "ZcZJnQNBudtCKcGFp1x7GkDrtsuttVVaCkgkSJu5V93pAbwUhev4MzGmX3ZutKW2gECjUpaNcVVTQSvwFC6cnDY",
  "key34": "27tHkSJLEzTxWnZz3k1muZU1nmo6nf9N6hcbdCNxPY2EgoLqn6gdvvmTBSob1SZUscRafKgjuoVX8vsX1PzAnD2P",
  "key35": "3757GbJqTG1efF6HtKdcaBnHBiXbYXKeKkEq6UrGvd8snZiAyJRC5i6hxy42SBfw3CTdxobNj7TBkyFeZ8EyiVN4",
  "key36": "5dZJcNNMxUadiu1kS5b7MYp1ajBcZd7eHmpYKjRnSoNW6jYrBLkMWBbfyfDv3VkbmrgEcn6B531GEjNkKV79BeQa",
  "key37": "YaPmk7xZbBT7Bt354GJENRjnybtX9UtvmC8gtw33WMfps63wGDGuYu3LchvFxfKwPzmG4zJMaAWDdKnhKMkxYCZ",
  "key38": "VQZwtJKmc9pqDzCw7ooWT9doPuFdQSzng7eYcHZ9544FchbWdFyrusm5YvdxtGVZPzhck7HQRiPD9N6eufVfePa",
  "key39": "2jEemcLikAdiw1L166kARaE98qGKaTj8yxKRvKQ3sT9QnKt6s4KoLzaobLA31kb3vBPMQbFNTUgrrQGXZBpBX1gs",
  "key40": "2RU2Hcc2PEZq2m6qzbh3UxbqrsYbpZu3bWTXKcaZWRGQ3am2iws2fM8TjjQX7hTaVEFYih2C4Wc9G2pRMzdh6FhX",
  "key41": "2tef7V6Q6zJABBY7prLiwqpMdyC8XtYYt16Ym9s5YBs9uekZP7zytQz3qsSQYjr39crKWi4QmNwQBPdFqZfLEaGU",
  "key42": "QpJgDMQ84DtCTwDiu1JNwSqEbtWH7Drbo7k2oA1DiZeopB7Wqtk3KkxfXLswG8bsYHmcLrAPbbS7eGnXawTRFf4",
  "key43": "5pXTvB14Kpytix72fUipmnaxUfzWWGvGXKEfMS2b5ddRhz4QLzUsCMFnVwxmoWYmqyPvCwp3E11StyfoZAFX8mkp",
  "key44": "oiJFF7U7EPETcU8YzMLmGY4UnH3hCpJjg8DDKB1JE6nkbkWaMPFxHguGWdBt5KpUitEU7FC7ZvyvTC6TQZHvsJP"
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
