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
    "3G3paL1AvXyQBnEsBJXV6FUN16ctWhdcHk2DFAU9uSHthmGQsCWP3ZzKQ9JPyA7ueKt9eW7iAddZhZUazPjrkXsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KKaQ1siZG6Vno4uCRjtLZpBchf8rB9DPxJgdzGzHHaW3mQbdNJ11qCbDsiwQNzj4XMcko4fKXCTfYz7Dr7Zem6J",
  "key1": "3xDHmaa1KfRg7t5KkTQRTGS8ZwwWFuNu5PuzRCsKX4saFAmVawr2os7ifHQF8Aa86ES3CGFw9CAmt8UgkfZszSYB",
  "key2": "5dUAYFFAdqEMzu1XkxdEJNK1of8pr65SLrArDB8RV97sMitAs4rFo61i4sQpNhecU6BizZ9ByKLqJzJaGwbNvSnY",
  "key3": "3V19u2o4ST6b1q4piEQJtLZ5acB7seFsQwEYr7nqCnxhXNymEU6CKsQwDmkUvD6dcQQ6dbmj3Q4MWsxmBxHbY1wi",
  "key4": "4pq98i1cBEp3B7peZhF8wsUyPF9cNZwPdkJ5kLCWnw8ATin2fUTTY4J8wh7CPXn3t6rsBDWuuvF377CaJ19gESPA",
  "key5": "5hLkuR4QNXgE1aJHKycPpc89pNF4JnFn7nXj6CPmQ4ta8PxdCRJ7ZKFHARWeiZXqbcyk1aS8VLi6Z2SnKTdFGfZp",
  "key6": "3fhx1yacPw4nNz2745vrUid6x2afZSqyFTPZg3PxHH5RW742RoosX6cCBWoagczMuHcgyZ5yeLWT7wT4vejoHuvn",
  "key7": "2jALj3MtNmcXNTSmRzGTgsh4mCrvsKkudwNLJZ2Q1WvruK88nyWWDWsAnuRY6fBoszauHvcAh5cyH9QBRSTrufcc",
  "key8": "379cBsNA2FwxABSF4gwfF8SotFjpQ3koVy7wGegwMHa35ixNkEuGKgfLKTDczVXgYpoSgWAHerSyGL7wRiLADr6T",
  "key9": "4FUekMqgED3JWn4Ar984DpYNVGTBtfjmhPFMiUBYmaNjneRNHf6eyFr7vDZK5qieCTa5uWKqEgS6KoSsAaj1WWNc",
  "key10": "zBSSRjMEZGXbHonxSkjf2mzs8g8JMECHHmS8rkWigSpbdDaBuwHoTaRhtJ9k6gUDUP7DNQyd48FXXqXCWirwYoF",
  "key11": "5CzyxXit8rjundacGd2MKvuDg3tfoVGog89zbaqYu7FWeiC4k2posH7UnGEXnSvGfPu2u68H6AT1HA49bBY65oYz",
  "key12": "54gDvGgeMF4AbKePy3VYmdzWge2mGF6vAVuVC9MrQ9vQVLQqehCbbW3nEgyuWUbGp8Am9TX3HAkLbWLbtz8Xg4ds",
  "key13": "4MDbSmzJUxVcmeEr6WgfGCyK1SrTqT9oAjejSX4XdiChjxd4APzLeUGLyT6PfLPN2md8LSmqEHgDcKRHPh1qQA4A",
  "key14": "pcDFE3CDPzL8RA2YoSSm9CozxXURiFyFRtW9FhkY2rYUQdYo6779LzJab5HkWgE9E7brNxKL1rrDHtFZnVF481k",
  "key15": "59G6Q9SAAfnQMBBQ13s1f4z84SB8phKpJS1SqiB7roP5DNSXViKd16HLhJYWLYgx7NRvSfu5xD2B7SiySbvs4vPx",
  "key16": "2AdqdRFuzw7g27UjSEeQ2BXsfb8Lzat5ZSETsA4h5RwqkRzcyKFYQ7eZ9nJeYDgPYhFSdY2kzRdfiZBLqZRwmBYr",
  "key17": "3ZsXrpx5B6GiecYaFQuFjVX79i9HVdSY8wnBin7864zxZAauwXZHqArzsGSLJdhVaZ7z21WsYu5aJATMW3Znc8WN",
  "key18": "3NKJ7CLdrWtBFJkvgoM2UdpqcMC9VbMhHTuVq8G1EtQTJUhBvobu8rUt1Ge6GGv9LyV7PvTCUfuAS5LUmGr4i97T",
  "key19": "oXXWyCM1yXwEU4cg8JCMSuJ94zN2fjGsQZ5LPrawniP5S4GHUuBDQ1a98BQteqDoanPdsQMes2urdSvNZJsRsdT",
  "key20": "54n5U8CrpogVtB4gJrDb7Ei4uWQVPLNXbFNebjTsV1YpGTPmCcQ92AdA5nmuHGw9HJKveRyCaBfWWQ4BLGPyTndH",
  "key21": "2SZeBW4VTyzhMzXcPkh5MGZUQn5o165tfVTpTyvRNTihshBviYNwACEQ8FjH2RnBTX4jbEQXqk4dggUwejcGWpCo",
  "key22": "52r7425dvYbr2sYnjedp87mSYJnETm2Q9KfK47MZqVm29Gpkf1iv213AjC69A2s37VKko7TrYNi9WRQvBVeddwr4",
  "key23": "2ixYZ7hVSVu9sMotEGrhLPfKvGHo94JrQkfp79xt7XVmMSuWNW8dRtUpRrJWKWNWC24MAEWZq7UQH4wTiQrY3V4e",
  "key24": "3FF4abnFKSQc2FuSBpsNpA6jK7nMs9MxE9cVnZNVR1Vy2bjcmmTwZnPypePB8bzhyrBs3dmk9PB3hjKBLwRnCRwV",
  "key25": "4JMJEkaVJ1qDzzgDj5sbi82ZgM2wsziU1122mTNMcaRNmdudjjL1Ck9mPXYxV34CaSAbmf5mR9iwcMrz2Avk4XPo",
  "key26": "2rp2rAp6B7qdoyykAFFJ9YFrDWCKSBQM8modecAEE15Agi5Ps7Jkt93AGAqijE97pJWjZoQwUwMAHhxAiMf9zgh7",
  "key27": "3n29scnttaEHG5P2WN4sUX1YU3FrNfP4nhEELqkNnjTGRLEVFBBapbJDV3ZVTyP7MQ7odc2mNQrEjweqWvkqWhcu",
  "key28": "5oG9H92tTw5qaZgTBMRoF27j5S7JsF5Uc6oDWt8ZdqDUAKrcDN8QX2TMUj8DFoxdjHdx9SUKJ1eUQymCcc54hR4Z",
  "key29": "2vjY85JmLsGYWk2DbT2NLhAHw6WmznHkUbvjFU6iVg9UCYr4qXzd9GD8GC8jwYPT1rzCD7d37hgqg5XKLR1wwd9A",
  "key30": "5WbUFPWb4ka6MqxrAh1E3h3uWSzhRb8UKp8V8KWTHjvZDu9Y8eDp8AKtia5WJJVPReJ49fpi5s6ar9rcffA9mWtu",
  "key31": "dF9GskKcMmthMUfGYig6YMroHE7MowsaEsSSUrKFP4t5EgFHMRmrMBtgAK42mEwQJunEDydUaiVtbgrP1ovFvKY",
  "key32": "3WR7Gw6H9NUeMYNQT7Z3QSTCqwG5C5RzcmeVzStabP9hLh5bwfDBVbT6simDTtKDCyAbzVHJvzFVQKQmGq1yCoAJ",
  "key33": "4hATW8661Ppis2T1iX6V7ZvihNbz5kPQ8aCK29cb1XoJsdtU9oznZ7EPKvfonPTPTJHLs7YXgR2dPoWeKb3yFjQB",
  "key34": "5pN7vk63ZmqQaMwqzGHzJseSAuj4mGzTmLCgwu5RWbjzsqdzoLyFAf9cTuTSAkdGP2jfBCgW8wxwF9jk1CXvfzEg",
  "key35": "3wNSevYyoesy97A7FUndPRWfELm9ZHJQB3jPT3Sr4cEmPY1mDKbsR6rUnq6EGtD4aCWVbJHeh8tWCpFhwvNoQajP",
  "key36": "4iovvsUtrjUZyvWyHRGTgqqeT8ZmFrUD1ke5grs9FMTm1Lx5j9RvqrLJKTQtQoVS3Ren2wpDbeayi7fChxvhXrzk",
  "key37": "5XyCgcPd37JPBrdxgeEqkdxsYzpdqMK4ZwJGrJ2pP8TbFWEGT82DCvRdsFCxpY3UHT3Hk7T4XRwrPyWZv1kcgKgP",
  "key38": "4WPRBJ1YsBdyrjqhEcaz6DNWqGRHbLqpWeNskkcvEiMCUB9E1WV2feiVhB3u4H1xnbxU3FHvvjhw31EGoGhssQTP",
  "key39": "37rDbb1XdMQtAWhhj7xqnoQJexQw1WWDpGo6WsJgy2bdVM1kqTxRnXDVcqEieE1ZmaLXK1t4Ts76aNV1WSRYdS7v",
  "key40": "3WkTr9H9VRZtSBDp5TsFgkQ9yUmtXDyb646HAioPhQffdYTB6TddPYeYzknc3awF4yZCs9PRBGgNcpUY7TnQfm7w",
  "key41": "3tmsAjFmiqjZWMRHZ1diDuqJzQ5rmu5b3FQDaby3LBq3BZHxQ9pxUXscsodaofbodmTkGzWfiD37GQBN85FPh1ju",
  "key42": "24P2TUtmA6uh7cHsyqtSjvWzrwjpR1WkjH6tegHgebHDa5wdCBfjgXDWYqEEMe9zScGAzJyesdnsunYeS2TxgNP6",
  "key43": "5UTXqZP9jYswNPCKVok4sZ9aSnXpbvtR6HfE6TboMRLb1eqw33U33ETCbkd5cvVKCfL1P5kEmCCZUQDyJBzMna99",
  "key44": "GSGim4EfHnTx89UMia1yk6XrTewTnrNWFTu5NJQUets8RLYNr89NFQhPfhk2vvnN77rtiGPdvcwqLFYkowkxJDa",
  "key45": "51F8ehe3wk3vcbSN256YxF1dmsQDxi787c8R3TvEAheowdJvaycTuBgvUkotdChQXgcEnpX2kvcNXDp2D1RSg6NG",
  "key46": "3tSvJXhAj441QX51XVbGxr62DJn3dzWceDWGf2Vwoise4ByEsCkE7si5SNdYjAUKnrapWEueBiSzyGbWj9JkdMem",
  "key47": "43S5s2P8iVaeGsT1czNYzZQtaH7obFQ3N4H1674YuEnPv6rs41rWzjecoHVonu1UqLbg4AzGhrmiKTLHnrPHTkMp",
  "key48": "3JTwAXP5wTFM72SFMSVQQ3YF8udCKdhPX3MStY6hqA3DMXGQApLvfgHyQHmh3oLQpfFwquRm8idvcamxWN52JtQn"
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
