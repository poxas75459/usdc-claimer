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
    "226Di8RC1CCEoEEWhchCenJVcaohzT2Gi93NAbj2PtTbSWdK736mb9gBq74gUjXCdjUd1Rt4y3aVys5oHgEHZnNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KTEpTMwsu8uNKPHbwjb4afA5FjmbHxxiapev1UqBXbu19AVE2vWozQfcF1NcMeCaLEHNqafp56qDf64spwd9uGv",
  "key1": "28xfEHjcG684JbL2pfG5rhdRSHLD3vMS11eGfAB1P8vJVKnG82fDUAePDyrg5Y8dWS7SHmPcqMhfw1sGro2piUpc",
  "key2": "Kz9zLpJ8XK2rBSomt2feEVPaq7Riq19FPCQhndHa9mmd4jkGUyhtnao4LLtUzDxJQaEVZNVrA1sqQKn9fEDeP9P",
  "key3": "3DN6v9vCfSFsjW7Zs7wURHTZshamLCt343a6cyF2zx7CMYweNTMziudu2T9Zmsk9kX3S48ByT8MrMKkfE8DR6kPQ",
  "key4": "4UQoxEhqNNKJJHY7Q8W6vaRRN4VWTCFZBeVx74aTqJ247XxaD2ZpF4U4gxUtcxBUQ87rNAuCwUTQT92EXfCmRZqz",
  "key5": "87JnLAjuxiyvUUiWDdS3LbYuyDFPgLv8YBwsSpofVZyKmTzD91xg6pyUBEyaBquhpiPxtkew9HhKu7iRHtuJMwM",
  "key6": "5a73oqsXBEkVzGwH87b2jAt9apCxS35DtYG1Xp6xp8JNVRvMwFzR5BDq3ca1jh49VggWnCApof33EuakGZhRNg8S",
  "key7": "3S2MPF7eMLogmGDFfAzT1NuKvqqY2XtG6kq7LBNJt1ZkbKQGMcPcNc6AwM8pf7aBgUwrVvgDokBWhQmFB6m5go45",
  "key8": "53uTh1ageiD5PaCXnmHonocq4gTB3c1Z9xQbBU6cSK412mvjag8qF5D6gSZ8sruM3yHx4CFecdVK5mo7sqEKaRsz",
  "key9": "3X5kohS2mpCzKML7jQz8pjAzTxWuchRL54Z5mVAqjxC8hH4djjMmVFSGwU5ThP55neav9YeVsckJV6oCrUCyPqty",
  "key10": "4JPh3rHnrJRXioWGV4TU1q6nAyne9GgYa2v5WZbqhdX7bk6bDw1dNhXyr1NDedQ94geC4CNV1VRdDWndrhnv7BBd",
  "key11": "26N23sjR7q6YvrvLHpmrwbHkUy4YbAFA54TKRHe6n4aS7F5YgiwfY5hURyWMxWrHzCG1UsvWqs8NVmcjDaBLjMqV",
  "key12": "5dBiCd3KVPHtw7jyhZFSmQSBvTox8L981it3XQMviehFgSwE48zBY7d1ibP5uj1yFXeHzPj5r8gbRbNkLdo3rtow",
  "key13": "2H5LaveypziDxcByXBMMYQYNHwk1eciHDQ4bsWHadd8s8BsqubGq5p2sV3inCchXauZora7pVCxH6Kja34WhMT7V",
  "key14": "4Z3rVSVYfASfg7s3aQbrokfkjFtbkXvRMnGrUdNLfZBNbSL8ui7FodG7fwvXMWXm1GDSXC3hm4HGkTv6snUgca4h",
  "key15": "143rvEETSzxrpHBgGHjQxCMzMFKzxgyvuSTteQdG7nnEqhYYLwjANu812NAL9iQLPskm7h9rjBx5rHihAEB1Riu",
  "key16": "51Zm9RbR2Ghcu5Md3ifRAmH7WS6UXwFPDyUoakTiceLxd9GeaCwuo4o1vmBzW9UGpLhkEPRCxKgjqYCmnZ8sL2W",
  "key17": "5TDPrEiPSeVuCNUBkSV4hihFmZV6LdfgBo25rUREDAWuFK1wYJHjkYKi7LZ1F1wKoKCETwpemYy6cxNGFaBGnHUq",
  "key18": "64m1LR9RoXKkZvHMW5CJBhP8QXZ3tHQ5V5m2F216prYJRBCq4eCsG4Dx19MatZufbon2LpwSAqBpKK88EvSucJLz",
  "key19": "2MUA2CBCdWPdtTBchTj5XqZHRWajx6S7TvmrNj6KWTnwJS69EekuDoUW8jpsAMmga6tGTZqw46GXHop2VALWi7QB",
  "key20": "4tT6bwj2dwjATsVfrVKJwanTP5m1fnpuhgxwRKxuXRGyghWbUiHJup59hMUiUHmViredLiJo1VkFpC4JuoBdXzVs",
  "key21": "5faAwQaehRaXwVDc3n9jtkZX4652Ykru9hRQiv8wBrkuN6FGkkAw3MRfchonz5GiDNeKJp21i7hv6ZTypsyzeUDG",
  "key22": "4VgKGHdh8cQWshrLwJNGquDZCnC3aVoZTV5UGkXNLGbqhNvrM4FPZePZBaq1R3WJUUWBDddd5KmrEGMTho6Xeo8i",
  "key23": "4WeRsyPKwTs1ucM5i4CxW7czj5iZK6RJQnerZJogyZk5EX7ZFFuAAtwhTGHxvEAarffSLuuA9uYLZNzFEVZptgo4",
  "key24": "2yZng6T6AAdNP2jW4JnrFkh7LoJJnG8zAmSwQk5MdkC9nPfpy2umJsPgHugBAZA9f7tjPs5UNdvW2DHHoSKPhNzC",
  "key25": "34wr7PRZUv6PLSY2kyvEXxwVv9hR9zyZWXKGBrAgRetuor6Fq4SG2ENArCfCN3JY7DswSG9uXTF1tXPysu4UU5gq",
  "key26": "KAvPD9HMausn6LPGmGkJudK7uAdPGdMxMwGjPNsiLjWMYFgHwSAo284jggXF9Cv2tVML9VPzMYTAAXj3RumnCBu",
  "key27": "4on9xLMLYjqNzBDM8B4yuocKUCmC2o1QsR685MnM2q91yTj19pSENq2peSxwesQc4iNPCUgvRp76uBaiW7XRxtZ3",
  "key28": "kMLTbgVTBNVCoJPpjimUmgacYCPbpdVFYNHmm8vQqPKSP8qFqg5ogWXbVYp2xY3QnuvoTMPjKD8P5yxnpq15RLL",
  "key29": "3mCc1fuCaGMXVDf6fvdemgyrz1ZMW1PRK9yrC4aHz2rN3USC9a46tBPz9JHDhmtj4VxJSCbgw5iHmDqXYkZ1cB1V",
  "key30": "jbvB3nF93gAdfuxHytgHd6wYmcuRKXnV33CJRiQx6NCY3ihyL3io9eohKs8i22Wc4WwsdfHAWxNoD6VZrEwd9pT",
  "key31": "5Fxmwc4SAEM5fRj43ph1E1ftpfq8f113tk47c7BegJ8PJ9j8SgpNfugxK7Pku2DHj5tyezViUwcQgqxZnQaKwgL4",
  "key32": "3z7pXHd59vWb4PGpkqq1BAKEjfdwb6u4Rgw6zEAciUdhhiYSys3fQdSj81Cjg8KTVpux5QF6ouuT9S3sEwPHxozm",
  "key33": "3cp97zjdVf2JtxhuS9PiFJviPV1Ya7rSkHnieiKbKxDmRZsoogwdaryAzUqfWmpGsiEJoYZg4hxAKiDsw4hvLEKM",
  "key34": "5g3XZitc1bXUBwZWyvz8KDWHn6ML7RxtEhMGfinJh6gsDmsxiEkzyEHH31aB814wYY7fmeJpRGVPeWYnXoXdtd8q",
  "key35": "KnDGSL8GLdWmhptRb7Q9rqBTvmrW9TNW43d4TGGfp46Q6iSHPfkz1jhjuHiJfF54nWseLxkjvivRrDonm4cTFoV",
  "key36": "3vavhgjLgnsgZKSqV2JpE8SKihUmMrv3kkjwqoYjP6ce3uJTg9Sm89ZRxYNJsK1PxkeQhMGxkCsPtnTSt6GRLMwy",
  "key37": "5f2TNhq19cQqfcrs5PTr3MRxE531rRHKrT3zdsbm6cAsU7vQTF9JpmXYqMkMvAXZtmmthB6vTiDwf24qJzsi6cit",
  "key38": "2ue52HQjVNdqwrWZFyBWzFSDwzdtug17rwi2AMyo1XGr6NxSxycbzEpbLXpGNGH3g6KdWKofX9FCthNoUwtKDtuc",
  "key39": "5MTbE1vzBVqMUMXfEL8TifNwXxfsAdF9NQCRrSfxQeLTKSy8gWyNSTfGiZYyG7wEKVVXZFBGf253iuQUFuYV6Jfb"
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
