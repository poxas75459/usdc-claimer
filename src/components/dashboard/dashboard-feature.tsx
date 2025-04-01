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
    "iw4CXt9QMcKQykAf49eDRMLrtPioW77CiLuuYeKKPEgniXmcHjv4BwQKezYqMj5hQgmTJprNfnCUUZ2oucmWRfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bbkhaf8D5pfsE2gpeug5vAhHtfgTDCimAcF2iaxLCX4LCPcKtoqoUGpHGpJbq2iM5Y25bVFryyt1HKe2TMvbuJa",
  "key1": "244aG2i4sxwyVF6XwpS6aeokQWh212jFALKw1hbvSa52cQAPwNAppwTzcy6br4K7oMKS6MjhaKsdARRVJxWvJ7dG",
  "key2": "3RspnzgW5iW4HujQf5as2iVxBQJBsqY6mJotbujvq3s9cLqLTPPDCtrzQ4bAuWtbb35eHcaGsSV2b8yXrWJH12vm",
  "key3": "2wBxuuJQCrLh6x8TgtMnjgUpUt24fGUeM9xK8SwErPk95QNRXg8dgoFAUHRh5ozu3jWQpu8MQL9YMoyD3BFgRSkQ",
  "key4": "66s3FfFrfVTN2s7xY6KmhBs9t2ahyk8K6tjCJFiVnkZpQp6jcb8Upowgouq2akcjjgwNUvSpz3321cPqtgU9gkfH",
  "key5": "3vihwFhcJdE7FfhvBuyW2DYvJLJtiKLLP9imkXDds5Jy9PuvmHXZE9H3d2QfiSD6g6ayeSRfyhr1z9s4UUnodgMC",
  "key6": "hyAgKSd24iUFmWHSoRHyTam8EUNM3Xbg6CMQosqESUpjLJebqx7ES86naD5HQFaXmziZ6wkHeejDU5sjRLWcXpL",
  "key7": "2CnGFMbkrqhYjbPPKUM7UQK5dfkUTG7WP2i5uJ854MyaNJLWoKZLFKjhzDrVcY5QvFDSs4pAyi9qghtRDpbduwM",
  "key8": "1at8SSw2FXkV5kc9ASza2FM9zjERRP8tuu1GEg7JcgWqBBZNWsq5gHdinHqD3ejmKvR7hq6pfVMSfZTXQHdY6wf",
  "key9": "39fqGAYz1hnGqmweiJ4PfJ231oJmvVthFBdXmRqnTToawFR9PW7pTSg8Pns4xYaR5P3HXcb2yT1wMSjRNRjm13Dm",
  "key10": "seKfbUAk7UQL6VxAoNPgCiP2GWBLbzPw7SB2FT2ZbB1hNSCKhiMcMzXCxo9CTX3mFNH7XNn6AnwvW2nWSc4joTY",
  "key11": "4Em89Y1WAZeBM8jjoR2YrM3TqWroYMhWH8bX9HDT9R9grMSWEEcjqY1XBGdAwyZxsfzq9VUE7zT6oNje4PscVuLB",
  "key12": "UzS7pNHC3VxjpkMRhYPvcVma3p7rbAgFu5eftEdyRLjLChZLKMrmV38i39xLxgTcqjT3RS48BS7RH4dAaLQ65yJ",
  "key13": "4wN4QECf67FwDpfXnX4KzTQ9UwAoqLnan7k5nQ7pLVPRR5e8TjPrctzYNFbtPUEdZbXtQ31zWoNerpFBMgdsGBiq",
  "key14": "5sAfMyzTjT2dKWGcbUHK1AsSmb2ssrzfUeJn8Eho14mnzBTwDQkwQZMD9AdZq8MV1YwLTYUDKU3vmh4qKaHixRC",
  "key15": "489aiZN768gzRKLzpBsWaMkwTpvod5NSsPzN3Do16YJkGFe3hRd3ELcbXDSXypM6ssPAs3rY1PH7Tv4R6oH2KdW",
  "key16": "4a93asi7hrW3b2qZvJz58cENwkmBRFs5cc1aQhVMVjkgsTscEDp6kZLa5ew7n1oMKivKmyvE8mRGdAmKuSGKbmxA",
  "key17": "2s8DWFqs25ncMHWmqop7kiyeAErQ4BfUMXERHUdAbVDynCi3RF2BFLf5hZPC6EaGcBh7is3wts7tYSr7K5UknL7y",
  "key18": "2YaV3bNPQJmkjtxvyny2onZVrSCkitgyvmGs9QLM19WogXrXNfRKXD56eSWcxRTfjVsKHZVJ9cceszP6dQE6bfAP",
  "key19": "3kLaRwMfy98XKhecu3vttY9TSEmxPizKmCCjqPg4sXf1QAVH3k4mkooX2isL2AG9QbNGXpjqR1V7xVwJn7PizHUf",
  "key20": "D9pNy1XuXdcA8SHYskx8SrZHvWrE8Fxetkvp7Pm4nmuM8cHz6VeNQXLeD1hN276VjE1tsc4QqKKxrCjLyR6mJB3",
  "key21": "3KbUqh414EMmNM9eHGzj7rgQEGa8J7QFnHpKDEH8Lx9gRmHbHd8ZUjwXJNsRJmgKoayNHLrM9KTUzsE7TPzW25mC",
  "key22": "4WaDkTKJTiVDoj9PTeHPg1rEZzXa67sLZi9xV7Y8ctdBTVfRH1Jw7PSSxUreJv8zRuQzQEGLAexxkLyLKQTvTyPR",
  "key23": "5smJP4HcF1ftY1jj4pifeDt6AkbsZ8toKR8v6HKCwpUDVw9zxCyJ1gseySDsE6zG5iWjQyRykVEXRFpvf8BBRx9a",
  "key24": "28NjYGVRjB22QZ5tzcwtcr2N7QGYAKEDHK76B62mm1N2zSgYunB2U3zopRqQL59ttUGeuzDf5wRo4doPWhurptEK",
  "key25": "3pXYgHDqzeNYRiEBwfRz4Nx2JDF826isfLmEXBefe4obdyd271ULaAcKxBW8AWWnZ3ANdDDMcaSj4kL5MdQUDwHb",
  "key26": "3KvXdpeZF8a4v2tmyPVPFDtUsg3e7deUGQZ3vVPJrKp3SLgER4em2sziu2SuPhQJ2EKQxsjrKykoV2FYzrhPTZLS",
  "key27": "4ewZfCgDbPqXCZP7Voi4wGbWvNbWd4r4YbhbyqiBnz3q6AEcD2sXv65BzoS65AC3wPMqt2wDTktcAVeFK79Aq812",
  "key28": "59Djap5PdJ8UDLbGkDuayMYezhFX16Q9yz1cFdLt5WHHjBmXK6CWV7f66UtNCga9n3tL4hUXCn7cFmno7Xx9UyYu",
  "key29": "5VUoqd56W3P6xDk89PBxk1tmR6ZHN8x52hEnxbnk2pScxo2xfYCVthh5GAwVMYAHqr2MvqdkWCYfYuorCxoYrcUL",
  "key30": "4VzA6y5Rb43UCeoZz3X4qccCe2Rxq3GZ75tEUMMKta54MpvKoPX5FkBCY6o9HR5U7zZB1Zw2uzdJ3Kj1V4Qjwg6d",
  "key31": "3i6KygCpo5zgCQ5q63PmfT2aL26HmrfkCgNfKhGB6AhV3pTFjP9DN1ffWAjLSUPtuYWe4Uz7BFvVqm2JK1GcFDLr",
  "key32": "4P92gyFtiv7f6SirJ1x8hBWiu23dUKm4s6tHr7qRgPNzPA3dmpH6buFzwdLSjMWkB3P1zSQ7MLF1WzDFRHaKN6F",
  "key33": "Kd9MDReSvPGUx1JsChD53JgMjnt9KKF9vCXB1dvu5JDSBoi5bMzgdBfGoX9tgDyBs7QcsqiEYXgnH3dXSbPc2HR",
  "key34": "4HAmdbTeW6M9QkeAFLcfLspiPB2N9SefxY52Xt3dywMG1zfXud3x8aarXvKTRpsJFrLYmGcQEcHJyiyV8xBfGmJ3",
  "key35": "5xmHQ4ZgXtqzXKg2RueTCajjkatqFoFsnCGdLpBtSsEWRYEf5UFaHY5hmDzAyg2xsnSmLdK7rS2mde3ZYQzjAWBQ",
  "key36": "2LzJottmYsc6yuwR5yBRvHQsCf1KrXkd4UppiVbzE6taShAjPNzL2ZhXkFWHJsHqNNCZMfm7YJdZ1ScgWjFYW2TY",
  "key37": "4hTwBqxLWeLkmoDTEfndofaxGQgTTDncYzKoYrqUVVQT8YMu8UVzM3PapHsBsmHNvFv6Tdj5azEYjE1RYJ42esBh",
  "key38": "5yS8Z2W4jxZMqW3xMRPLi3F5npfYYUFNRu1NRuaqg9AWeEoNwMorhD5SNVgrr7wK3J4GeLaWvVeEoS7maoK8Yvsu",
  "key39": "3GyQ7XJcRtz6w91QEpWHiksBfTrkBfUQ1nYPjaofzmyzPEguMc6rB1i9RjstzRof5Q736fCMstqXQ7RSuaAnadXo",
  "key40": "4GHtvWuZTcezKRedhjFyTCZ2rYCw6r6nH2kC2m8VLMnb1smw5253x2pzgjYsSpcUH7kWx1mcaYVGHT8i9ypbtfvU",
  "key41": "5JqEEU52WYbyL8aiu1Es1NoYDCm7UoBUYC3rHT4FaHhQxeb5szaC6eiLrFPnr4oxBgMsioVcuPnbiieBx598WaFF",
  "key42": "4u5rRZHvJMhygqTaRPfzxbkiV7bGYzf7c3e47vezrSVKhN1mGjjqLtScfSDrxv9tti7Z3TsQYaxuoNnAGSTL1NJS",
  "key43": "5QUU6Ru7mCAFxGfznyH5UxYc8DRgmd3vGiGWPEtGHJPBcZa52ApVeH7Sk8dgqSB4p6om5eUidUbBHzYTancJf7m2",
  "key44": "5NTyVAYdLpqky5SPUa7R4VnYSgEZzu8zg3FbWxckDjqDyrWdqmKEacbgktv5hVM1KLNSv1twTLbpQEdTUz8LH8SC",
  "key45": "2KZbmQ8uNuTvqeRhD4seKacBEuL3cvNv2prbH3taTBer9N8DAoAPxkpx8oD7KLgvsR5YCxnhTnN9QM4firkzcZz4",
  "key46": "35xB5eFVmvjgKVA2wcnLgE3jpoTrpn9AysPJG7feWZJbeXNzPDD6vjtqSW9DomWqSjps31PAcPmjjRMHxGwBcdg6",
  "key47": "4PHt6g8Xa9nwonNi7qjhC8jCLz9zaF1kCD9p48QX1Locg9mfgDCQmyVbnwQ5L3jf2oL1DxSQ9aShj7yJw1bSUDXa",
  "key48": "5aw1jEGF7MhMpdNSUsb6woxxPcSzuaUHZGfK3YNEeBdCCKKUKMsAtaxjeVqbkimKBtD7AmjjgvBRxH1z26wGk1tX"
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
