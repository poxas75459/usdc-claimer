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
    "4YhAfcBynRM7M3eo72KouLrv8w1kByQZq3srLWmiNvrYpM3PUjea4oAJyJpgUNhEZ1zLJeXYAoJuQWBcJkg1uP8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8A9d5mzXj4PTtv1176TvTtaX7463Gum8uMNboPAEFTZQwEdFZvLB5ksvcs4STeVcSjT8mcq384Kw1BVsdG9zbi7",
  "key1": "9PpbCuy2JCWUQu7cVFM5iKC1fHk3oszfsYQZeR56NEJsG2s7c4A4jo9D87ZPaR4NebdJCg9nT6GCBFQjd5ZNVoh",
  "key2": "4HW97fBdPXuscvghhmmoptU5TSRrgTEEFrK9NZrE5q9HDVZhfXtqCJ4nVgjpnpL1HNB5TRCj7YmyXr2JYTQKK1Ps",
  "key3": "25UanxBVj9cWy1FDi39mu8emTR8yyFUWUqwGzpyAQQJP4mD4KY2Vso1txvbEayF1wNYRrVxriHvm9ppG5zmZf6Xt",
  "key4": "x65bjdm6QhMuFE3wA89kJ2wJMzJyiNinZn2GVynFf1gTiwLUUtiQNSt2SdVwziypx6XoeAhoh9mvhPSVQEWdNFf",
  "key5": "3uJEYSSxnD3wDb2ViZV7TDosEhyH9UNDNmLfuFAW2faiN8TqFj3XB4LL9nAkwovFs986Z4vnzEs6JwnuvtubP3NS",
  "key6": "3nKHf55vE23uRA64G7wbNMeVXxGbujZoa4Uh4HEt56zJFdBrZxzcrmr37vfKtgffDicwRRGcVyufb2txJsewmzpX",
  "key7": "2pRfmvDn2E4WDFeRRByrXBN3qt7z5MYwzQhX5TFMsoZQ8joz4SfJth9iX4CLfUmMLR6Mt9yoN8471rEQsKurGYT3",
  "key8": "521VhXem1d8XgvYkiQrtNj2879s9DUTxDLncygX994QuxrbRUsaBRL3RkHbT6u5pxA3Me46vrAgkDXMCCjaxSdHL",
  "key9": "2Fqw3bTyZWmJe3A138XULZeiCmhR6p4EQLWJqK7o6hhUYf6RQstbh5eoPd8i4KzAjf43NzM3jvTe8BLXm8BX3M13",
  "key10": "4zNcM2Zj9Qn1mWz8Wog7MzC1A6bkmamhngJFQQbTjueqspo4wUcfQiGiJBw7Xcs8yJYRVJAMZT3itJK5BeiwYdab",
  "key11": "2uuxH7BZvttNWHAR7x9rRDkmDuypFTvRPduQgQkAb2XDYnUiej9KAzrTve4esxqx3XVRbd9RqzBFgFbwYzDzAiwD",
  "key12": "2rxY81KRN8Z2ZMCzuPkdsAqWik424vwpoHPNywoYFJoyScjJDC6ddaPSGTtpmS3qixgJSj1TZwb79ANqDzxzSTtR",
  "key13": "4k5F2vQtiH9djiXEhXqp73vUY7dbhS3PifxYuKYxaC96iByjx7bZwXXy8vgs6wSer6UnqdPbLMKgDoig8MsfrSZT",
  "key14": "2SJDrcUsUjo7y1gvNMM8U6WTR2jkymJkr3i2VL7Tzfk2Lq1cWS5beZjFDCxvHhxtDyNDsCtXnpmW62CnVvjRMkx1",
  "key15": "53gwDnUAZjfPbcrNs7XvYBjsLfJkauQ3xxPvgwXFkPCdu7HnkTJgPwmhZqWi4nCquc3qFHi1QVJaxMcUZenmuaqf",
  "key16": "5qeEsgAPoo3AZjpsvQt6ew4hnYpuhMRk46iygjRS53Fj5T8778Z4ouBLHdT8HM6cjoyBno7CfuJZkz1nzZXQ8Ee1",
  "key17": "aZDmRdr9cesdnZVvvuX9gTWwfZrybFKMvZnQMjxgxmzTHipJrSTQdaoLLfpE51QLUveEKAFpb4sXKiW8nHcgrER",
  "key18": "2JijGbSMmYgeQfRoWEJkNoebUFVbCDdm9dsmHkKQ51mbSHKtgDCjc65RbMdpGv7Z2HpjJa9APXrYm1avNj6tXPvv",
  "key19": "3MoS4YqynjfLopWPrPyHthxhSJswSqJM192WP5TLsZFpyJqcEh3Z9G4D99uKq3udjbyiNwiWR9MnfRrmxm46hwM6",
  "key20": "5R7gjzdneYGD5ruVSRM63f2pQhiLBnpKpFJAYp55iTZ9UQFkoFWx73zdo9mdsVPh9LKEH7nosKKQcqUF2171qL7a",
  "key21": "42PKBLfvSj1443162fpkPASMYy1ebpGdC4mgfXWY4wGhs5oK2eZwoRNuV5DZthFtxxbLhhm7UhXkBRswSNrBCgwx",
  "key22": "2G2mJAbwoCCVGnpASrHu6NaN27L5VCkjb47PZmmbTJ6W1caEsXMffs1DfbHC3k1tw1rqNAxvxjJEBGeyA61PPqdm",
  "key23": "5ZyC5NJFioyRi8mfaG8ZdL4ZSGoryJz4FzJmRx86LRkVKDNeqmxQAXe58hwqmce7pH2CGakiNdn6YSCxryEJ4hr8",
  "key24": "4YYqDkAT33ZqfQz6rjUWipQxM3AinH36Cj9kFEUGrU6QgMr5R5wYwwM1roufhk57NKrVEzbVzL4Lvk8mhCAHfoQ6",
  "key25": "3sSRcGgcUPeLMhg5CFdnVJ3fYk8115A63dMEfviBfwGGhh9aY8oKTz4yveC2MMCEk3oqZkLutD5Z7pn6oPcr82RP",
  "key26": "TF4MQ1ZeqvAd2VsZrbFLAEAgWSw8R6nUMsAP3sywBzwNXz1rFFTxNUQz1d9bG8Npyme8UaH9SdvBDDkDjcaxyts",
  "key27": "5KtohNkH6M7yTB6qnnpHZ7bZji3NWwPVMmfr5AuyshDsJjgJiHH3ZYknR4qd1u4nME1hWtKG7XdQY7bJ4R964cap",
  "key28": "4gVfU51dqJ8EDix3BxmvRn35maB2APo3TuTVVrLiWq8cgXZxaiamkziJruakyhSAiyPqeZYjV9B1xeZDompubkSf",
  "key29": "5V1UBLA4FCEVtwXjyEK3bLWcudkwudgaTdpDgwvXwQY2DEieUfNxmyV7VnBR6sB19a4Vw3Stdv19aaRbd3q723E6",
  "key30": "3ytnBnv3rre8m9t8Qkmy7gpQhs3q7WUoX2UMFSj21oPGM25BveGygvnEjCA5pGcrkeUcSRKACtWtXQ1smQ8abiVf",
  "key31": "NVyuU922rf5MnZm41vc1BGPLSsa4vfksckAAKQSpFPCf8WvoZNGz1a6YgrWbMhKDcENsaAKjpnbmPmCDSRMePf7",
  "key32": "44Xz67CoCBzfUHtHhu2pjHxXfyJv1e8UktRYPB8vcyPWnkbkE4trWhfTj1N1x52q1B8YdR3B9WooMvNDGxnCUDry",
  "key33": "3Giey4GBT9pds9ncr48cMg7kKrXs8WW5N15jcMrKJZ96LdKjfDsLdK27HMG7e3E3kG1M1Ea3gLq9Fw3jqn5L8Us7",
  "key34": "4yX8pKjoKNFcxBmot4wRBC69mHdcjHR7cGMLmnSe2xseDd5A5DxrYgCHJoiSXA56vwNyYLX4YX3a29Th9BFvTHWz",
  "key35": "4hvcHT89qnMXnZVLr1sjuGku2swuu6P9aj77iwNTJzC7M1i8yD1UjgNFVsYQaCUqMLy6wZkn6EgTwzW9iomns9cY",
  "key36": "2wy7shvygitwKE2NHojYRYZ21h1gfLgXXgTzC5riQSQoCD8UEJdiSuQcunPWhMPwSoy4QMSy1S6MwwtvC3PdYwtB",
  "key37": "3bozByTgNiCthnFUxzoVy2yz6SEQaxzdDjywKnypDSaP3EJetKf2fsH13D8xbsM6aQz8zNdeTuYrJcyj96UJUKfe",
  "key38": "589EAHNKfE7ADecE3bWNpoZmrcC8Agq1HPYXmx8iJ1ELQwcNacp6DWHPRkcK3bjQS6aptS5ZfUAu9NLx7cPdrzWK"
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
