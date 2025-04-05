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
    "2BTJ67EgaH2tq7LUWCokojqES3n5txdZJe7jEf5gPux9rtZWCbPk8zStDJws5NeFsVYoSQXGtmNidx6ZFNsCn4ft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rUsMBXzHk63u4VfcAHzBm6mtpxcF5Az5S5yUL3Tnv6Rj9g6hiBhWED1Hx9hiroXKav4syswGMyr4Z6yBYHAXZ3U",
  "key1": "2MkrQb1rNE1JEv4Fid29nTqAd9nMce9QvVEPQhGAdJzueNiQpEhSDafGpTmaajczgHou3KFQQ7H4ZoTQsmcB1gDx",
  "key2": "bDemsyDtxvocpNR7FqnTrjRXbux1ouHNqaeUgNvyYVeETsJcdFf2MJuRErMsrb8gtuzFCrd4H6nGWDRDPZjQot8",
  "key3": "4dxcs9EFLKJcvMK2XoVFV888zHFvbSHNw6Wax92fmRvzp7barpESyaJZefpBjdwjYwUKZt8VV79tMdfqtGDy5rsA",
  "key4": "5ZvXxsRSaijyeUaBiK52wskFqNv98XqySGKvqHdZxdJr5rSM88DwAXeyg4dknz6SvgYQsmv2U8hFuzsWWm99dqig",
  "key5": "2twoskkBrGx3sSJyziMGtDizEiRPKirS26ZA2oCBGiCCgdgD2aLESXyELxEgUGDPrEJmERhwdxuF4GkFuFG4i8kR",
  "key6": "K8ACXxJrw88tQYcfibi1hnXKEzfKDq1Y6T6qBGSPwSiVKskqgqx9oHPRkzr7XfLucE2Xo1XFMwHeChmG32THMnA",
  "key7": "4dpn9bj3xpw8XBE18yevLAfdrAMNGJNJAUmHFZ7FiU3ZqJEuFJkCdJyF97CVubGMwZUUPY1BDb6VaRg54pyhsS43",
  "key8": "4ttTrJ298D6X84WUPaWzF9G92hjkZnkLe4MFeyfgtjs86WW977kxL7TdMB2X9pZGbu6xuykAq2GXDm41hFDkNGDn",
  "key9": "3NMNNYQLN1MQsYaz4SAXJaxA6wDsvPAAYbXNXgQDDbfNLHR2nsA7ByDXHyePtAXJ1Zn6dVpA8v4fttwZw1UraNpD",
  "key10": "GgiW3jerhbfcvAErh9m7S1PBcwYief5T3LhUbcMwZcyPMVnN1YRiJ2YPSPAnBWsT47D4ExVgMhsN5puibcnFjAu",
  "key11": "5XEGVE26dSkiAvSUowdrzSBUyqqATEwchpaoWjxXWKeWjeXjYRLE46MUJt6mPxT8m8a3Ub7b6SwTvxRgnC53TPsv",
  "key12": "4xqjS744JpCYsqfhMm4oRHUjD2oDs6mNU2rzdHjPMdibtpcHrQTJE7DfkruqhB1izUCqzPrueHwHxLtaHuniAGbL",
  "key13": "BASgAK2rgEU8p9hAfUPK6KwC6dS41a2uVvk4r3PGuqbZem8HdNdG3bBozHq8eQsGvdfyxsThsbP1dGiup8t27eA",
  "key14": "3DLCHsuu5nrBVYbWeeTrQ3vmYZho84zLqFhff79PvxAihGT6XCGkZTjf8Sc7d3t2eGnq6SnvQcjQoT8btAWnf7ff",
  "key15": "4vMuhVqwBNG3Ky3GfG1ufVA2R9MFutKZdpvgYi4mxJUjjdueyMMYEcu1wciMpwPff6RTiYQ2ZGXP3ySfNKD9Snen",
  "key16": "46tDvKbmEPWd8Somw1Azi2ggMZK6EEPXQCLfo1PV1V2rdtevvhm8yc1htbE2gkVH7fPwK5AMxDjNoHYSWQmhtSGZ",
  "key17": "4LQYVN8Z34fxroda7LTBoUVjiQkHY6Pzvjp7DAkVzPnkf168gmY9mv5a8811SGG3zXzxtd98Ta7wJUd2vzxjWm7b",
  "key18": "2XaZpKYvWw4xdmsovy7a6X9igVeq4HLHMMDFDcVMxm9DwpYBTkYPP9EKJ9e7YQJ2wwqvNg76ed2au25Gc8DWnRyc",
  "key19": "8NiAZ4PKR5wPKTTJYVPGhTpvYYP2bmR636wP6ajJcvJNWGN1vqTFuidUkv7kekPqJUQi1GUavSudjDfq2ETsgKz",
  "key20": "5pqhQwEnkJs5svMcDzLYvxPJkSbVNVLqs78jfHjn9BgsTDNF9mDt6rf4zVpQSQghjQroJAFrJi7x2RycsxvaHxom",
  "key21": "2wG5bdNgZrMMb6PCeFggb7NY2urFbr5qi2gPXfLWBXFtR6EDCdyTeWdxN3okAsxVS7LSS7bxMY1WuaFP6fPMckMV",
  "key22": "5yC2p2hgHam9cecm63JToYbsFbHTmQhAGTj44F3f5tAdT6B6vqErn6Nk4DwB7oAQrGtyC3MyZWdu4vRwmgQrkhRC",
  "key23": "2CQvtCpZRo4v8NPLEB7ZSQNtU6YGkq5rbYLWESE5RXQr4zjeXhWftaiBVjHDoFzAipqyCcdcnBTuQUVpzeUZXsrM",
  "key24": "3XMr4u7ws2X1wxoUBBAm7YrPd5dJ7BdKN96JQojjxpMMMhGX67Ge568CeZgE3x9hZnZVfPqbDkYuKYnJbEWqG7FJ",
  "key25": "4EFv2f1iLQknvifxyyZnonYnR2s79VLC3tzMwMXgWvYybNmRXhHtJopszxdzr88jzuPyXTtyFMVfJSWogjXtw7kW",
  "key26": "4T13kyWGWoayZg7VoAxSG4Ebi8tgWwjgjX7uomPBUEqWZvbfyoxv85KMSKVNK8p4nND8A7N7LRQXhxA6LncM7Ve2",
  "key27": "25bzWPTJtGe1suC45YWhnRbbH173F3fPikH5ErgBBWe6gkq35exzYLbsLYxiyVPsd5rzSfWAMbqAZbgrHE1RwxNo",
  "key28": "4Lnh7JFyv4PLupcS2JT9FyUmsgmSmNMxD3kyowFYaMgdjPMYAofjCvjPV3sgUQtdjH72JyTtTGyGbmVmtiwmNYEk",
  "key29": "47FDomBj5FN1JWWk8RCAPvB5Ts2mjewrT3Limqtts1Yjfrt1Br3bRtdcvQZqZSHMa6Q9z9ELJNvPZ3qR6KVrKZoY",
  "key30": "2vrgZQj2nM3RY3qM2pAGyDXHUaTvSonJvMqP6zHmc3DnTFkXNFAJSwgnna7vqsaLgJhhz714RTLG1J2gTzqtcSSs",
  "key31": "5SrEFrrecVoY4fTQV7qXcu2NyigTCXv3QndyehhxwAGBQFSZYAgDtvixXMHdR8n8Vs9fcDiU7fsHvDvy3FKg8E18",
  "key32": "4qZ8MsAc6KiFqRXj6A1F3GBRqid75fvZ9CaJ7d9quTCn182DFainGY6cW4hZwx5sdwx9bsGVR35ebbN9j73RCg9N",
  "key33": "2gyQYDnWiek2jVpGhKvK33XTVBhGF3jpCSefBjeZAehe3qj9fkdj59s8Y5vbaxLgZz7UVeBBXPyYxqVYgYFZ76x",
  "key34": "5ivA4By97sRQ4Ri4bKmPgLQLBP6EySEE4NmNQgdRFLfZzzNN9eWGVBu9LXBvdgyh5AnDGCvvpssMjRFTYnnNp6zG",
  "key35": "3RzvpUwftCgjQaWNK8RtVk3xdktgDbgDMzJn6jUyUjTtTPES2zgpCCj7KXW4hZfS8n7LKmh9zQ3X8WmAzKcHTNVx",
  "key36": "2EdQzexgCCMe9dptKi2KWwY1EVfBbu9QSj5woY1VKBG9SubobPbQNejm46Q8ecvZBVCZu8hY5jGr4ZUQQuSr2w9B",
  "key37": "3FzbK7JYJzZ6H6UQyBb9qVgWjAEaLcDmufdZBujZUVLQwLtHJKFRNhg8gruw93neRaEjMpbmoosA8xA5AvqEFL2x",
  "key38": "2CeTFNNG4H2oFjH9VMd5MLTUNwY8HWb393ou5VyMRv7fByT84NgvwmHTaEL2YXbyCDxyjQ11k2B8ASbb7Yt66pEg"
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
