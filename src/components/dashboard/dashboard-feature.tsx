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
    "tAbanLvekuLcAKcZAvGL3nYVpbePvFmhBCJrheE5qnfGMpttMSXHDBPEYHsPpXWJq8C5yupmFuGKi4xRLPKDR44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QpEY4uMhVswmyGZzL7faVXG36uStsUEDzdhKYc7hzipRD8bMFYDgfYYhDXxTsKLFxmgYXxQ8ntUsPV4LBoosVXi",
  "key1": "3QEkwHJvW1yqRQ8KFzhvpw4b6dp7kq2FFukVbLTdTpCJcERMcRnD2Dw71qeo5iacvkGnSWvACN8e75wTQDCbADNu",
  "key2": "5rbwf6Euy9P3UJJ5FNEwLwjHRsfXtCAGMMtSxf3UTFMoEHuwnMVZfntpRao11SpJbq7qUf8ePF4BWQwDEiybR25Z",
  "key3": "Gq4k5tg9zfR4mHPJU9LHhPPfwt9jv3Rqq6Mq75gxkSR79WP8jnNL1LCMLfyREc3zfGLXEs7FbZrANpd8MYhjWji",
  "key4": "3epWiHQP7ZuWdrxnXqe5eUdsA8aM2ZA9pW6GRVvs1mgJ56qN9RdEpP3Va6KFnFhjq8en6qi8emLVG4t7U7RA9GE4",
  "key5": "3KijuvkJ48bpWvsMpK5ayjUy2SURGuDXLc8ASksUvsf997fZbstrRaiqiZEScUfhyQGujXttJRovriT91SvUiQ7p",
  "key6": "3bKuU4dupvja9DNFi2sdocLJzwiRshabij5Aj4Pd5GMcBUnp86DkPwCwQgmpiJRg9fHdWYzgfxbebqga3NHgdcNZ",
  "key7": "Avuj2snHSUc3PnHMP7q9giq1BxiaFPgsQP1tzZpU89GCLHHrnN4gYfeJZUKMGCb6zvpe4AZCmupADavWrHsuhWJ",
  "key8": "6Mp3vYLYFGsxbuAJ455RTAptsEdzm1dViCq3byMmJ7VhL74j2xc2VC2Fz3hk9ENExMeNDesEG4mCz5CchxxtEu2",
  "key9": "QJek8d3vG8tfFTFvHeJxLAsAHMupdfKo8UEuEnVuVRBnQsqXHi5F7xVbKjbXCbA9XmEgHDMvbNTi4w7xxQ5qnqe",
  "key10": "j55SF7iDu1wU8rswjBokrErtNePpoJMHq1dScgCKY5TouV364GVDke11Vg6Ddn1TcwBef6oC6xXoWg5tDmkseyF",
  "key11": "51BfSWGLkxC3sLg9w3SjkB1uZo7X3hGfZMQxTfW2AVJCFuptBeX1gD7Rk19wUXsLQSzcvBYWn5xVH4ADHGHRnhdh",
  "key12": "xSRovx25G1VWKj8fB1ceaDzzg77u726HHQCjF4qphNmXQs5KNMbMooHv2ymwjBZvQieJd1ALLADjH4vrsVKQ8Rp",
  "key13": "TBRordczUYF55Uda6mDT5ADxLtW3evW7q62ok2wavv89Gwjwgcr5HpVvzdhDtwKNGxfaH9kBSXMD897T82aEo7R",
  "key14": "2HhmxHc7SKnDaYDtd5SBn13YeTLXVRYrkWAqnNFeUixKEF15tPdCjGwxwjxYfXzgtPLBRcfxQRjjKkxUfHHB5tac",
  "key15": "3qSbezRYyYEMb9yRvzKDChLeLVhAvHdFBwTkm8PfbVLwLqee7m1mxDrGNcW9BjdzyD6z3TthUf8NoHooftKLgT66",
  "key16": "48j26DZPCtSBQDn3D1zgyquYLLkHNYfCeof9wLnEAPcTD2cK18JxzZHhfaU8ZaW5XjScqPy3aQxzF9NUYGRqTire",
  "key17": "2R5VzPogn2tTgDPcpEdS145ByDjXvQ5rAEyZmcx1nEG4ZYS5NFynhxPzras9QHvkJExaxVpoQk41JVrNaKycpidX",
  "key18": "2siveREF5RPtfuqcmNsb4qPMGf8SkUvRCAKKh36S7ZoZcLVGkt1MiWUe8tbt2ucL3GUnGTJFP4KXbMowwisK1YNC",
  "key19": "4D7m7BTXu1V2Z5crXPXB9hSjunvJg6VuF6fvM6qVHFHz3EbBs4zwvvc5U7mWrep1XqbdcB1iuE3674qMC9sWu6KP",
  "key20": "3nrLqbq5dxxp8qQyxmpH6r7uxJdjmcvkGLL9d9nynmgLBkyb88L9AsL2Eu2BGHJb9teEh4bMoPqYraZZXcTBvVLL",
  "key21": "5dnMXUoWPyZbgw4uYZZihfDdMjPwpikCywB5MEoPSSfUJVxR6EaxgewezDC5GoLsWecT6QhX1gUdTrQf9ei5jf1h",
  "key22": "2BF6VXxj4N2dqGq2UF6SqrhbHg9T3foerpoNm6PDJ29FtmtARDfNGzrQyTsBzdF8y42RAkJjBs54v5K9hCxLWWHL",
  "key23": "2RpEMiR4qdaWjTHB9ubPjC8C41Wh2Z5RRjCf9pyAACrTBudjzfdTZkNJZSREfSEfLQCg9Nd6a26L7YAocVtRdqM6",
  "key24": "2wKo5w2e9KDuUvTxkhYz9P7Yiovhzh2AVeFPx47GAC2DAnc5P7DmTvwBTxSCgTAdm2PyjTYsL8aWg29zEhRhExb7",
  "key25": "3ShMyojFktrqgWup7QMoQkmBs2yBqZ3dptawXBEnJy4PHLPb7oWGJ4r4w32tT7ccWoHu3E23hwNWJu3c3Wrf85kA",
  "key26": "4WtQvjZPoqxzWtY4MaspMhtnc3827v3gY4qabur4LM3u2EEFgxNPqaDvVScw8NqpSMEeMfNLhdWmkWsKL64CgnwW",
  "key27": "x53RXn8K7mJNBCtuu7cTFA6g619unXCGBN9EDfjUYrgcfhiyYeKxV4Q1PjXhwD1h6ZUqtP7oqtojwBXm52MZ82P",
  "key28": "4jfC6hrJvGA6NUZZygCnZ4hsHc25DGyZ6eA34iRRwaJf8NgyvUNgPfFzjh1qGpznshYXEfYJagHg5PVERo6ut4Z4",
  "key29": "U3yfjP5UiKPDrCirPJg6zyNkSpEzfV8hfCoUmELc6bU2B4RENBgm7eaZB8AjbQv1jVm3dHgpkVxgJBLJZEgE9SH",
  "key30": "qpozK6LjyYX9mmELpZu9g1kNZ2YZwfL12tv5TffF3BquCqsSufgJ4m5fhs8xieVxqadZScfhq59E66BHU3VXDGn",
  "key31": "5v3Zi8eMiSuKVZn4AfhdWnTS1RB99xkvrD9ugn5pS81eqnzTHsYnThkfGSUfCU4T4zD6TMAqGPDYxYGYJicgPixd",
  "key32": "4G5fHi3oRv3qQxc9uWT1CKV36c83dujS5589PKM6v2Ep3kYFugxVMGiis9vWrBKFFXsu35tm5wvp4yenAd3VLCjp",
  "key33": "3cCdC9EWcrxnbX15nQws65kKmnWGbH3EvQFzctJWBSwstDVoCB7RnF3gkEgVj5KjXq1jV3A6ZGo9EYkkDYf4o2S1",
  "key34": "4UYDmvwMpWbz8sQ157UUDSEKgTmAd96dS8nNTxcM4psnNSTsTGn2esvpv5fN122GqT9thCev6cd1iet7bVxp7cNC",
  "key35": "4md1k9qgLKCdRGR5keFnfQZE8BQhDniQ3LAnN7cdcb16RKbaX1rnVvWDNq3nTCgM9nKiprzsoXDbJqQ9iAaNZrGB",
  "key36": "41CyPwhAFo1yg5r9G9ZUJGKH8n2TCfFjErk6eoAh8skyJ6AU2vqN6vjREzTNi6Lrzr7PwKDfgaKV3n4KhsgLdR9d",
  "key37": "59H9ar5rFXsMya5HczhX5E8ghZpU8DiGb9xmwvMRxbMjfU1j1A8FFbpJqCvnDCLguVS5CpQuJ1NGfY8hvkmRcEdS",
  "key38": "3WTbDxeGeJppWDT7Rhmv1LMh36gr7G7aPdwynoHnxPfu7ZJJFNMJ2x6zv1thuG7T5UQnP5b1NcgqPati5sBfQAbf",
  "key39": "5fdWtAdvYdgLjRk7C8LH4VYeL4Yii4B3simMwtVJ5vtQfKZ2i4bi1siXyC4PtqfW9gpybqywbnMTRcxA47qnyG7r",
  "key40": "5ZCGQ8txFqnxYhadHKGcBJaeL4zGqcQKUGh1K2inaGC4MShsRs9hUdy7DfRt1ihB2uSdsMrWdG36jatjLASK7fzm",
  "key41": "3kKXmoHNuGun7GcEtZsG4FUhH3X6WjvUVMumLUGAGiMNcJC7T7EDn82oQfCP913g8591SYYJw1987w9MDyKaf4QA",
  "key42": "3s262KM4e3UugbccNxoqgt5F53k9hxpiGKD6kVCJD79TADL5oC1yHh82UJHyeiqKeqL9Vmn2aCwAVKWop6i9XXxU",
  "key43": "2Jh8jGkQ1qdTiuWDKNbLwPgTbThRd2QHZ4y2JDzacfcvkVJ8S2jdLsy6tszwDZs6xZros3NtcTDbY2AdHKCHk1QS",
  "key44": "24carwiiqvaWJwYJs9D9ju5QGVVSBF9oZNq8rq1r8o3VvqUW3yMLhQCYRCUngDkmfbJoqUxJKpVv5CNF5uRcC4We",
  "key45": "41TeHZqJQKNKQbw6zooD86QXJNFPuUpWoz1YJWVs3Ah7QiyKnbYQntj6wjZHcVfBZe3haCruspDu9L7kFLK1XZ13",
  "key46": "4TeStXx5MuLpdv4gyLDbkXqg8gGvtktj7k3fty9FAPrUAUU7EG3A7777CWGvYZchZ5XN2WiVD3e93HLF7d3gw48B"
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
