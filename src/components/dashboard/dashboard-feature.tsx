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
    "NXPZRAKVp1FSEMcXdNn3xxwSkUvmC6SUCCjaUdFz9zie8QejRp3koY5P2FLLJsKvjGg9ay2XaXreDBNAxXgBGii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DKDJz8nCxwjRN3FbeeKp5nX2ovRvW5xeYzQp8AdWcU5v2GNFZUDE7o7EkzBa2XDJ9G3xPeuREKAQYXYkwpihfqV",
  "key1": "4txF2WqVEVhLVa6NCtzgMLNjg39iT5TP3JgLAA7fJ5KTFzqYLN2FWSxL7qiwPhkC8C4sadNRhRS1JVcJP98wpwRR",
  "key2": "UwKajWs1F3DMbwHZE2XZZ687rsBggSvnkQ75DVwDJ6GR3Y1tdDD7R17UfBnAcNUe1pr8QUgF12RAfXtq1BeZAA3",
  "key3": "4z54qxgAbCMS1Gu9ABajRsQXBuD1fJjwgptzEjNBme8az8RXtVApD4RjovwKSLdH4qYKa3VAd6WgNuhAcdMTbdVA",
  "key4": "roDyjYSrwEVBfzo9NTSeH1BXznDGRS2gLePMiKMjUMaRS3SF91o5bovA2pCccvcjXq8yC9oRYsukmKZSsSuzsJU",
  "key5": "5BqdVYi43u5A5tkmGwXBRxoDSuaE35Sg4jeDcWupmFnLhK5LpBshV3VCAieBW5CQxnSLfNxiRRZBnraAqcXhsGJ4",
  "key6": "4jkqfnsKk7yNVbZHf4e3YqnSEeKdc8uhpqHz3aSD11mfVhd65tDN53BYKYNcZSDZz8T7E1M8wZXvVachohkuYD5e",
  "key7": "4FdZNjfcoQ7xGnG9xNDnqCYrHoz6NKswo8475aU7dsRjhCVpptYdAB49pbgpmpcw2UCbUqefirwbdAtLGNBkqmYh",
  "key8": "5z4cnNfeKQHQHdwonEgdNuFPi2zsUtxuEokJjaXgvBj4tHE223Z7QSkvU4gg42tsW8NdeCtRFULoCCd4gjpBV4Cy",
  "key9": "5bsEckihY3UwMG8gKpfQDMGi33WLddgiPdLGKdQjMt1chX898wMQ9gEHJxiidexoMY2CjqqYJJDvDdGd8eimwB4M",
  "key10": "3Mznogz6LZCjTc9oMoELtKVkevoUr7rmhRWRLvP6xV76twb1Jx6JTCaiApuYpTRdaEeyddGeWu4Zn1E8E8VrATfP",
  "key11": "61MWi1AppRmCgAhVeumoLtyF1g9jobRLP7k8pE7vwnLwKdUMPxd6rHQF8rE1pJANJxBV8igmLM43f3DgX68J8fPc",
  "key12": "4TzSWxK8QXd3wJnfdsqprBgBFS7Nht8fgCcmY58dAAhivqMsK2NSqqtBhsEnySFYwXaBRzc6KHuwpVYDovD5pteQ",
  "key13": "4abqPEDos1qQ1kysMrNebybKjWrs7uU1skJ4ERuLeJHJ2ibz6rtSqDoGmfC3ffDQ5oeayagg7EJo7EpovEw3WSPR",
  "key14": "jC1QY1iJCcqqwuYf8xCpTtrdbSf7pCRevwDMZDMYKrGShEMcrGD28EghULQZqryryJoo9MykVfSQtmDSdVRSBY3",
  "key15": "29DB6im19ABwTe8d74su9HLoWNnyA3ooRiMHtc7TqsrtyFfhU9bwPjfpgTp3sKXtoEkct3maDC2oQeTEjQ5TYtdT",
  "key16": "24m1WPTLKE194AuoNg1nXnSLLyYFvvTiAz5d3LXmy1XVqXYYz7EhT9t8WoVi3KkEGkuLGMtnq7gHiQdyVK8qhfFn",
  "key17": "4yuAkjAUXU2TjsMALez2GakK6sf4UUySR4bEtNE1dSBbpynDZREtyvN8komPP34kWVg5yvTGybiJKwSSYgASXxZV",
  "key18": "4CUuBvykf3q7wt4HrYMNp5PXfX7LmzcFEMNu3dwXcdFprDGQmnMBxqqpiwXpqZHgrLhm4dDfjaN1VTPBcxFuSS66",
  "key19": "2dUrAxNQqePxtm5uJwgGBQmrexnMm3aamr5sWubiyWer5sbu1uTvj2AdMJc3U8D9YGxxW9yucZe94tDyNyiVtrLb",
  "key20": "393umq4tZERgihCBmvpLit4FjoiYxVGybh1uV3tWtHqvDLvmQ3LvK2xRB1N39LeKcuTBTt11uTmaa1g68eT5CAWa",
  "key21": "5nNJTosPk8fQCn78GXycU3RUUJAnA9tFtxkrYdpVGe9pM1zgPo6Lp3RJ46rwzxbBe2SimxNJGZrKPA1H66LTtG7b",
  "key22": "4nqienDpsKmhYZcTAvVzTuS2ECCi1P2obBrCXSByqUaD2a6yNns6FPNTDWrhtMYmzUaKHTuCdZtjv7oHU7mYXvoW",
  "key23": "4JRKJwuJNSp8egLdAHEuCQ4NA8fdFeMFTbeD432V5KGtXLprqufH8amsdKKyzLryDdBUTyBfoTbcwg9b1mawLLRD",
  "key24": "BnqRVcWurko518URFxUBF8EhCDJDm7Kb82KqBSwsqVmQgipsG86nYK7E3CYHjZnEAz1ogsq4EVe6kRaT24SYbvB",
  "key25": "5ihWZRKcWEpubnt9QvddJygpZEAHfiWPyrKdx1nfJcmd8AFeALPymtAEqGedjyneNryRqmaB4XLY9fzDfy6mfiwc",
  "key26": "4DezgDcp1sK4xDuuuo5RwUAvoPWmFDEf8SEyohHXz3bjvyhR1iR7Fv7qtgj9ZVQ7agBGJt9SXqY1nqSP5NJtyarQ",
  "key27": "3Bru7qwKw9rkxebZpwuzK2N8pWMMkcPyfstNRrD1tjBJZ86u2DFxuVuvz147FTbsjDQx1pGgUeuX6qB1gp61wrFr",
  "key28": "2aLmEiDbm86CKHXuqmisFuMW8PnPZ9pFcZsJQyb7YS4ZZj3bxH6ZHbZyQJK4w9TugFGgFaXLW9rLD8aN9G7u2qpX",
  "key29": "3Qj3iB2FnqHfX7uSFJD8hGwArWztjECG4JXZfvW5iQ6Eae6j76rEC2LdBfuEMz4bWU4UYZ4u3gzxnVKQzhu46m74",
  "key30": "4iGW6qjbMGPddYu4aABXbNtiUZ92kZiqfP62u7rFGNCsaMBJsgZkUQLxbqACRgBU9er9N4DJuJZobdSU984GytjQ",
  "key31": "VmVErFxPWwCUmnWZNn4YJzjUvacAsZEg7MTpxRyTZH3PXBGj5AH6wz6KrhYG56txTSYruRWnkAGenkoJk9Aeq99",
  "key32": "qpK6Gv1Wd3CBtMnLeDBKD67P7J9PUjWan8G2wxiZ78YmaigAzzFeCWNsZq7fZjyTCxU7y1yZBty6Uc7ZTCT6dEE",
  "key33": "4zAZLSbfe2YCsaVLwa3ChtMNdG2DuhfLbhcBnpLaVLBWyk7BD5TCAp2hqjrTWUutb3KuaKMWx5AdcQCv1NUY4omm",
  "key34": "4WcAUdBnTkT2UKBroLXcG7ApXpGstYLroSb5NZkg8buCKXbQSgtptBGxkccSpvRVj6aRyc5s68eYEQxCyM6Y9oxj",
  "key35": "2wcB8xfatRrP54vBMzwPcybPf3x27qhgcbizVnxe3kgwemZ281mU6SAGrcgScDf8yEdpE5wV2SEzPyfdfyLWTTWd",
  "key36": "5JNtHky4Pr2ZkAifyyiQtKBcToTgF6YBqAFcrN4crnSRZTJt9qR4FT9Hiovms1NUgAEk5B1o1zwQ1NdfvFcVxWEr",
  "key37": "2uanHscwHMRAb5iqv9DgMTz7pHtSSGwHMeXN6RwsN4gaFJsuMgYG3NaupcK1eQytm2DD4DmQXNCW86tipZZjNC8j",
  "key38": "hzwvQ7fFNPSG259tQnFjuBjBjCrbdZEjRpY6XAMGhAerp81rYtXSY9ZV7DpkrUWjEGvzc1EsVA1qoXKyeCuGHcV",
  "key39": "3LqZvexngQy1ZezMoQZcU7ogqmmx1rMMPm2hmw76NP3YDgdcJrN9cvpB2pn6JQEpGw2bAAVUeDky9HcdB2n388e1",
  "key40": "pJ9ZPhx8WS4e87VBqiXupQWu1PGALwtQoknFmE6mdvE3wSZKBCufBXeWMXzs1xBmicFAjv6xmkc9ArARHamvRti",
  "key41": "Q6cVbayHhKmZujqmxPSqaYu8f3FmcYviWviGVpwUB5pxu3h6mNjtYZoY8DJesCKFY2RWBUnLJCmJXLmR9MAHfCZ",
  "key42": "3r97QftBfCq46dtgwknbSWrEvXKS2VuYVmxf2ZqPmL3RwSXriLABFCogtML36r43unpViSDS87WMnZJoYak6MRZ4",
  "key43": "zhVrxV692ZtnYfiPSbN2gM83Fzg8xWr1JEdQaCwPEHTcadVCFwzZHuPGuXfBH6aCMjtqDgPBB4ba9SEDHGCxfL6",
  "key44": "2cwgBEnR2Td636PPCkdPXjofC6188yU6ESMULcDeBZzugwPVHAuQTVoAWWDiqLDVspoa7mSEnqZXGZfWN7Y7F6gN",
  "key45": "DAnwdu9exUEu2BpriYMbzxXG5D6txV8ixFgMesJQ4UozD5KMccPjfEWwN6ptzBMo2okuvRCN46JPHYzGkNwEu9z",
  "key46": "5JTcb4K7riu8r8NG32P7P8cX2G6UiUvFmRDsHvMxxXsx9DqsWsKGBByny3n3HqHCSpBU3Jc3FPXezv676mgYRfNK",
  "key47": "WbMF2iMF8nJEcGqVoYJKVN3gXWZzvtMX6Z5X62vDgvTVSEbjMJnE6e9MHuF87wyQSGuhdoEKA3WXELnRJV39v1H",
  "key48": "5GYrVuruKv5toukheWUrrp3EdWHsL2JVxEURzxF2YGKiH1u7uATTAVsLTXv8MPpBW2g3cUHvBoe8bARaezG48XxS"
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
