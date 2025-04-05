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
    "42sSoM6VvkpKacECpbsLZriSYXTWdapmU1yYvSGHxnwA1iaCkbjzE5bMuoJBWQL9UX2eYEQjkzkgHRTMzvN9yCLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fucdTmjSGMhzahcq3nras1j1HDtfDmsEiPscBhjsobD97VmGDKeN6rKGALwQQBhhuV8yseLyXfs9ngshLi53yft",
  "key1": "5TCgp4PNQHxMw1LMLJUrYhoi4EbKft7HQwuL1yT8XMZMe7aqvWBPfvYyp6BFLgTkKVrpWSEyr3P3sxBT8nXXE3TH",
  "key2": "27E9ZSjcPCg37q8sSJZoRXQCMSrQGZ4ZHBFCfu7UjC2htiDXQapxSTw2Sp3sSwDiDrdDjNL8Fkp2zfov7i6jZzsj",
  "key3": "2ShCW76WVdhnby72i3w5qoyP5z1Ego9Bp8UGhwAPFvfvonMnPfNKAXXHBoRq31mRbYihNWcDuUbWano9Echi5AR3",
  "key4": "3B3xqHQEyDogTtseLDDXYvQNWSixb2w5myzbQLyUpHcJM5vSq9k7pt2hjU8Lk6tNFMDhbVawejvao7e8uXWDRwmE",
  "key5": "4u2yBGAYGcYdEA75NUvY9KH15mkUJC9qvViHsCjsR6xyzfk5JZko7Y3qKR8HQVFqWdumaGNYtPWhx8VhgbNFtcMt",
  "key6": "bEEQqafNJHaPdTcwSEU84s4oUh4uyMe6Gab4H2LaySVWkUPLJ9Xphf5Yu2JhALXjGqjh39UHCUdVs628Hb8rK38",
  "key7": "3CLDPF5bQ3EjCZ8bHCiGRBUJrDk6cn9u2YTsvMNRdsfC25XAUA7ANMHv6kwYMhcSNhaXkTTw8j7U4L4U2aDwa33P",
  "key8": "5Fhihtxe9xT76E7b1QzwgZ8yXXYJExcwAiYryVJN8BAFhnAfnSzNnCeZv6zs2JwAk19oWVLvdiZ64eqXCWJZ4AMT",
  "key9": "5DfR7Uj2DSPB78T9yp4mT7yaAC1kG5vLrK3EmNgLvG3XDfVNqtLFKCVA1VGL9LUWw8rytAheGZYCyNmQmiwCSSPw",
  "key10": "5bcXEuQyMjygUNwQdqn1MNQRc7gNTJPT6AfwcRWhGGFrHyF7YoxZ3gcSN9WrErYTDSS7G9J6gDQZ7nFuaMtG495n",
  "key11": "4Eb3TQxvXAVNQ5XMDt9PiPMEgpTTNzjRXEotpUZ9QDf9Lf4qDHTrRp8ZEJqY2VPtA1FSnBB56378v9Y2A7ppiTzA",
  "key12": "4bFk2YE5A7jStJr55yvnqedPYr915B7UTnqBvE6KjFCJR24WPgoYwE6je27MayuQvFfhbb9B4H6LmbXoYuuDKJFW",
  "key13": "2yY2bFTPJueDF7LiZ2vTQVC97FK4HR16drNkLLjrUEK5UGfC3p8BZ8EJ6GrU2K4JmUNHf2b9WAiHZEYDtZk1x6o6",
  "key14": "3KvyoPKfzbwFU51V6nGwXsBBhoaC63bjCnmSmnGtFS4ys2RmQjZ4TVumf8rsAcCkHFi6gPpsQtjQybyRMeyL37jH",
  "key15": "5fudgqnq4AQGVMTRV6Anif2TH8L1QXPYiq1Qeq67HC5xp3SC2RiawYMFeGgCa8kgos1S3yFXSQBXrKMi9gDYpXCs",
  "key16": "46BNpQ7QoAJvL9z9g3gPdj5LtGYMJDBv74Se4itrrDeVyMMceUfQ7K58cXobf3zuakaPR8X7EMXyphW7qHKYhNKa",
  "key17": "4jooJf1N8ZZgpxhWooiy5HWVsrKE2TXnPt5Lnk4JgKvK4tQYPykXspuq2Q4nX3UoxRyWSBfKYid33DRkz5zCDeW7",
  "key18": "2Be4KZLZFdq8mcYzETeSBbJ9iPTAitrY1GTqM29FqhsMB4nvLf6cBv47CaWikHUr5oCdSBMYs67u7bu3jtiZDNsY",
  "key19": "5kBMJN2yBJedmamHd9gqAur8UH4CnzJuazk7J372KQujW61pP6fCaS6Son84E5Yqw9X73UrziP6i6GpuHDQsndJ1",
  "key20": "nxQL4h74XYtx8Voa84r15bRyXzkX3Noq6MdJkMyZhHtCEwxxRRewzvT2m3fDQBmHYtbKBvg3JxTpcmG5uqF748r",
  "key21": "4vED3xAXedp1Xoj2tyQi4gdjhJgfyy4p1eDWM5G5Wwrsedz8dBL98SbzVMRVAeZgLBxKvC1y76fMKuSfGHcgfvtv",
  "key22": "4LfgXbiBVDVEGnj6YiqK1krWhKVb27eM8YdgcHQAx74XXp9yjooHt9byBpY925JzqTGoiS2aKvbHEqp292KSAB5w",
  "key23": "4dKrgQNGFpGirpUQA1KWgv9dfwhpiVibpi7Lz4cFcUaUcCpxi9qzZah5fqeMyNBtbaLTDCbDnbSaCdiKHj8FfojU",
  "key24": "3XN4H3zuit7dNyfi9cTh9vQ59TGBUabvT9ztUCYd2opGh7PAAoJk363Dur2bgE9ExJrFsFzHgYqmR4qntcoRV6U7",
  "key25": "hqRgiFLHdxt5W4XHdrUgQPfVzX2t4Qhmf7HEmwK7ueCrUdm7bG2J2YA7cyYUvjhCPQE28ocQ9Vvz4MGB8my5zHc",
  "key26": "ZmdMeyvctgChwSLQXFfMLiuzeCLgBLVaMQRBqkdcSj3FtvqJbGdsHNKa9TyBjjJquXoDAhoWLfgcp7Zqqi6g1Zp",
  "key27": "4b6coJb6Ko58Cs9RkSCFSHfDyywVAMwQSLt88LsJQxMXhNK6JZ87x1dhfhwxMnK2SHsSjibFUWiUctwesWYu4jw4",
  "key28": "2g7chHVzWEpuzcipy6ArSoAVfYGaL8HgNcExnx47hGtNHoMTZL4L1kAFo5mm6cT72VuoPvjiH96cuQHr95kS68qk",
  "key29": "3j4zc3yMzvJ42i2QheAD6E3apJ5dqQoksqP89ZhTej2iuxNzYKuHnoPqe2L7PaPi6kjBob9kwV7PBhQ79xhdqxs7",
  "key30": "35rTAWnRzYGqWVjpj9uvf1rkdvv4kXKznnJFSquYofpyJV9CykTJc9YNfoDgLm1mG9fgL7ZW3d2DyLBZRas2QLsR",
  "key31": "4Kcpa5bDnHgiRViagkrmoowtS1fB2VyfFn9iB99LX5gGfUwxKHFeovSmQUDBFz6jBqniZ6p5zzX4KMDPYMfmqcK5",
  "key32": "2sMQzLnWEPFZ7ZUL9dRk8mZLLct1pQZHNRo9nUFqb2ZavMsDKd8KFfhkcD21hgkDtTzzpyVSV5GNBmfjQpJWr8xP",
  "key33": "2aK5vsMJfMF3gP2dAt7XsTnUP6KMiDLMpJQJghbU7ch9SQNKuCmTMfCnEem1358Sch31XWY2udP8ULNxHphm6kUH",
  "key34": "3KfqR6c3S5ZySD1TKwuxoY5BnvNHBLLQvvz9x3NPRffsdQAP7pi9KswM4PXuQ3sc2fCi8YNJRBKJeW3BYdygrKiz",
  "key35": "E5v2LbCB4Ci9otPwrxN1boPv9RmBExEMoeQKcJhHoqnhA7LN9FqAxcupiMp2ZqacqUgmSwua7rXxWNJd6fMSFHK",
  "key36": "4D4kXhwKskU9ZA6zsqbxEqrcNW4Na3rjynafgpNGLjVL4aNFfbReXc9HU5B6VkKG7PizpgMHD3t9bqw4X5TA3KJt",
  "key37": "3tyD1dFPiQKZbzXncdoakGfFTd9tDj8jrzphkY2Jb35gyhrmZXKTSyLUFvHsgab4jBHLWt7F12p4z1xwMF7U3wyn",
  "key38": "GAC6WrHTUmW2M1sLCE63zsz7RfjC3xvw3Mky82hdQsJC7yhX8tkTFkowU3S8U2qnoX7rtBz3vA8tAzkZ8QAL2s9",
  "key39": "4yJvckVpqTfX3HLwR2rgdwXTrekywZNGwL6ppTEFvymgAyGU4Qsc5n3xdM1hffnsy5YaJouksDd5E2KH6QvYRA1P",
  "key40": "TmQ99c7X21BGinKULuQKnXzrQ5WH8RXDRoio437pBKJitgyKtzTnkf8iUKnQGHBhrTPALiHKtu1aPWPhRLGD8tm",
  "key41": "4NoVSGMx3iCJgEJmQ1ovuexkZfnypS3G1QMFsZYkd12j4z7J3hwdNG3ME6n68Y8yH1xsVbqUfmvSr9My1maJLZq3"
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
