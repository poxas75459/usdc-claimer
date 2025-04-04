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
    "2QDjodDwQ8PS1SVTSagAd4z91wRLt8DZkJ9YR7FTpN1r6odHCZ1u6TeLDgXKDEJFuqp2L2H7jucF9UKLNRcxZ2AR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mpB2SEs4fNBjBVjZGusttirjpQK7w2EwLxVAGuzSR1Rihhtd1KdFNh78Ty77QHucvjSktNj1Y67udMj8Go6MDTR",
  "key1": "3jpL1KquauGm2rfszTDNzAaM68pK8MAbUBgpfvM4pmVCGcygRGUf3muV75B2gz546B4FvwUhHYhgZJmuXqqL21L9",
  "key2": "jSk94Yea9qTw47Q4ch1x4cbkFqwHwgdH1R1TDARmSJ9z9KtTZwXYHwUpTtS6B5qJNwhVDjvQVug8nViMdMtCoek",
  "key3": "5T9jNd1wtZb36VhAe3xrof4P5rhDLa75hj1PPRetgWRF6GorpN4gQzmbD738MqoVo4eY5zVWzVkWVgto1jcnwEme",
  "key4": "257td1Yn17WppM4xdHxkRr8NGnbeagJX115TrXBer2nPUqw6xaXM1FQsq2TMfBiUPs984gQuBuZFp9JgnwXDAF63",
  "key5": "4wk2nHbLn7wCPvZJFZdoSvhxgf1MJ74MU5VenJxNDLP3u6j4KQipMZ1Gm4XUiKj1TiMqmbWdqfxeDZgPTRiuw9mB",
  "key6": "4LDc4NuGSvfrNJiqqPJ9H1Bp6DvThebM3VPM5NvsYEj6DntMVKtAgUBCvWztQpvxHbdqxuw3siJhBUGHc4x5xA9c",
  "key7": "5CF7agK1tuoGWrMqijVYjgNvsnb8EStAkvzFWTdfNujz8wN9kQonGmHd9Qmnusv4n3gdrr9Uub1dMacKgYExFiEW",
  "key8": "G4hCD845RQXpkLwXZUnY2EfQ2ZNPd32FqwNMotgQgMEYaQbfePZQPw766fgJ35PxWFxxSZwG49JUcsj5aUM5CrQ",
  "key9": "4iTbXahGpDn5Gt1AjnsgQGLPxStf8Dz2UK399kCGxmayNJSKdRGSvRwRr19sRHY3bBKrfUoYRAfxABx9fLWxQ8Vb",
  "key10": "4UHCG6EZJvEW3TAKafP8ETj8PfznntsidjwgYjknzjU5H8oqiRs4s9wYPpNHnA1Vn2CanwXK2KvJ1XZYuPPLnTvT",
  "key11": "3dHb6jdh6MSByDW26QKKwnQ2WEnopzv3A1v8TmkyUrvmq1KgNAwPp32yoqBNePMVZSFicwn87qZ2LKRD9iiPcaif",
  "key12": "2rE37ojyLmWZnwiUxTcqLH6F9tweGDp7mjp8oMC2p2ERiNiBoR2Q1WbsDQsAW7wusa4y1ah29Gh7BCic7XNp58ij",
  "key13": "394wDX7rffqdjbawCtykZDGYU7pMV25Q9EddPh6TmLeLz5AS4y2Mx8aFcsbdBc2PYJV9j1ynqGmvmev2mGU9cawi",
  "key14": "33sUMoN3kXr1yF7TGH6CMGw8BKg95eoU77ngtXw9fChaKQpFESUdTumvvQaAoHAsKD5MsynqJV7wJ8XCfCw6ujRF",
  "key15": "4fcoVjr34Xj1VRvLsabSPKausqBMfHZTVvFthBMLWgz9b2j6WUNhE3GCbwMpmVsLd3SDJXFoDFfBDRLCxVs24HRu",
  "key16": "22ALYndzwhYuADbkvsfeJSdWc6cHiUhjmEcw58TKpac6zka75quTHFnXLe4JVJax6WFEaYTRypYrdHxSza76xwJf",
  "key17": "5RN7TWP9mCJ3koFfCWJHjXEBtAnvn44k94xSbmu2MYjpBysJYrhkxmRcqUsM4ENHinjP4V22eQHovNYhVUPcjbv1",
  "key18": "EBSqd2uNpqP9uoXPrSyfmjqxe483wxvsLMY2mf5huA34S6A3rgW4jgvPmeC9Z43mVm8Mdc7mLAyYpXUkifhjr4b",
  "key19": "4gC72VbCcviKRukN8tA1sjKeVCvuz6fMqZaoWZwPjcTPA3VoT3Tje1n6QiQKm5YVAyqQ8PNNXEMmi6UjdjRCtyZo",
  "key20": "4yW9q5YwKJPBVjs8DDDw8FHo8ig7Fmkd5dDE5aYW6yvY38FkjBH9ub1ByzQ69UiyF6WTx15nw2GaLDU9iZinkZf8",
  "key21": "5bAWjpKW9eh8u3Jzs18onDhgevJJgHmXkZMVtyiCsLRqHR13e64AwFovpi8SrsJUSZVKHCozTsgNysatYrK3GLZS",
  "key22": "2DTpP5wkxdCqnFjvXLhMBT6qBMEXEcmeUgeVoyB8DFyZPREuniCzahciRmrszSCbASr47A9KpiD7jxh2pW1H8ecE",
  "key23": "4xDp5ftRviu6UMpuw3YDPNBEQd5wzDH5KH8c14p95F2VP6TBYFuTnqDeYQvEcmFnotyV3iujyyDhFvWvfZTyZNxQ",
  "key24": "4J68Vbdv1Qpbm4ugafCM63NhkS8pf3Q2uahKpJyyrfuDoVCMBn71R3mHGZpRLFpNJXTL3JTdd5ZLpsvxATUJNwNK",
  "key25": "2yxuTjUWQEgGsZxMvwV8JwKXUfrP2EfgzTPaUBYLsvPJvANCBRBDVjREhLBZF5Mj5caHzHdFVYTfGDreffEdaTw8",
  "key26": "5TQE2XBeUpjbrhLKXzyk56fKBREBc8kC8hqdo9GzksoerptYv5spRPtQs4GaaCb6LkpxeHGpDM8yFxZpGZinme2A",
  "key27": "3JsuctLppF95w3CauyAFVSLUX6anvDpu6WDCibqBFFRqUKKpnpKMBC9VDU7JcNpcEE74YkoeGoqQqVx56FSWodL8",
  "key28": "2CWiqnJ4nwA8gZ4UFCPRTtYYwByFj2GKrapY5cfsgxYPjyWxDzs2SFCdJJcN2DHM813bu3bhjAurye5bQ9E6cVoG",
  "key29": "3fi459Dq2C56jXD81XJCRbuVnafJAgtRn5BWmWu5iL2edFKqSaEYqM3VMVhm74kmWjGi8L7R7R9SbgtPZC7jRCE6",
  "key30": "4BR7BRYyVmxmHVzXVd1kAiMsEFAMCsVtM9HqxzSamWjdxhdjkMmQqLNMdZHqzCet6JGZbDrNnK51UiZcCLs7HfkX",
  "key31": "RG7qKMR43sxPJ67giZfBP99BYnM4y9i1YLpuhaaA98wnsnYpPo8mh1R6mPc6fBF9VEEDhGcScPd4YiEuNjC4EwB",
  "key32": "4qTZBcfWdkFymGo8yRNtBUAKRseMB62KFK3t1KKss1tNtENxxFzYox6nwoicU28Ws4fCciPezBttv1qzESfNNtuK",
  "key33": "64RhZG34kQ5JZjU9fYoUSuxPP2aepFgbVNwvzdLVRPQcU3yKzsGYEU5EXdJiZRQF9YeEMnGWMGejtEgKeqVR87wX",
  "key34": "2zAvuZXRhhGrkgqLoZmhF5BKYjcuAardWiNW1YAW4SLVPAVqmeVCSq6kYULHzqQQh5a6ovawJ33spFadbnpAKBht",
  "key35": "3KB3WfGyzvGAtM6SsGAVezn72haLRDQeFkJ8VsLZtLULPM9XBK5Ghf2PH4iHxw85HTp5HKtoYSaALnMh6i2e4xBe",
  "key36": "5vJPGFJxLoFVkxttb6LPTu4s1zLZVbpGXocAQZFSpjadZzz9LsvPQXqXHg8T9X1XMvrXPZ77hnJowtF9asLDvfD4",
  "key37": "2ovgXLo5RJyDk8GvyNDZszDNG8JNmQw3fKbjG4igowG1AKZeDuHGeorBJHUxLw6Bsmp6s731PctVQRqKskUD47wC",
  "key38": "5B3mYG4UHgKEqGaSEUr1DKNeypSrK9SPB2VScSPSKWJ4BFtK4SCco8zetkoVk9ufgWd6FVkTpT9sb2iVdADNaMbX",
  "key39": "2rumvVDMSBRvaDg3978zLHLbNYeiYWkZRngVJhuZnm7DbKufg3e7jD5PxBpSGgsQjp94zDRkNm8zS9CqwNW6cA2Q",
  "key40": "4wsoQFT3qPbq6GpSrWMgiR8sCYnaxaSu4xYY8UhzE5vHsf3e8hTDFSg9sM6XcHjdv4QAamkgEWeb9odK19NM6GKf",
  "key41": "5KdSMz6q2B6H2N1RE1jdW8JQiBLJ1JdtaLDPtXDRMwH41UfxvmPKUNJEgEzKZ8h5fg7fuSv61tp5WxovmYvernW2",
  "key42": "5aXi9oqt3fufUW1RXPn77WHPoyCAMeo7boJUczzD3qKFQEgTgRQT9d5KW8YMD8krNduDQeqYtXtP9HHhpYHdxBHQ",
  "key43": "3xqVQMrgnkFG5LtfZMjgktohrmmkFz2YcHfTnU9JLwCspVPsdsmMSQ9ACWAQwQJst29FWXBjxDxnXVoDFWyfgSK8",
  "key44": "3bYwExrB8U4Bg9cf9Wfxg8R2L97C1nyJ8Q4Pa1eN7pFKAKsogEPryC5WwQBdzDqeaQnEV4Jfb3ohu3kk5u3eAf26",
  "key45": "w5mn99KdotNgT38yNT3Lr2N4fmF4mFZmYnt9XHVbQ1A8fW1GsmirRKCcrAC6UutBx9bQga5CYL9YGfCQrMvMeLX",
  "key46": "3CSexLwyhGXsxDcB8GzXm6FNLdGhSRMfrXH8fKbQjfmBJ6rHNhuYAJDWeNiFCKNnQazVhm9WzS97pxD19AucngHf"
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
