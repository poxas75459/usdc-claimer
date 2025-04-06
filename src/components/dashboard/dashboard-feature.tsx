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
    "2Ycy675jnanFn6FfnkinhBNUtM9tessNyxaXu9t9AJt3uEEpd8sWBmauZvWM6s87SDdu1fQGyPeiD2aZwGP5faD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jaLnrqFRM6joyvc4gLnBx7QbxmYD7u75JjGRtvXPUzc5RTxQEMEosJWeygwh9mFbMZ1BDmKKFsiDqG2zgexbVTk",
  "key1": "22GL7bENiEwLYawhX6jgXjqs3xFB9r4PQC9XTyTxBKSLjKskD1bM1JV3hd3FptZbk3rt8eXXmt7UeqBvCs8BK5PK",
  "key2": "bboxevgV9hsyJcx35vo4XvP4WwPETaNAc955wK1UbUj22zKnzqdweaPbnkmcn6KdUuWJsi7A6ZFzaRquuwNrQos",
  "key3": "3JPUcquToXzpeEkDrhYSCRsYbJ8PFAd97BNo5GpNXXbomXr7ETVBxafS5fDncC6SvpcKz6ViT8cwMx6SpWFqdWH8",
  "key4": "3XwP8zN1dHR3S3Dc2mzwm4kw8JY4TB2ogvN59BkvhRoathgk7jKVj3M8R8wWcGs83NaB4MWPgEa82nLo9tzE9dzv",
  "key5": "4vh4jxiBrYLAxg8mCCp6zMj3MGqNpKCdCrs1t4EwuxQ345BYUzCFBF5ceJDiaivayX7p7bH5dhCDQhKQ3Auvqtad",
  "key6": "3SFTPYQNcHkNZAw82LV1JyNK5epZT6fiawhtoQaAm3gzEnzUikcD1TeeHN1hANcPvTvJ5VUFfPCaa71DdrehvYJZ",
  "key7": "4vocxSGTsYH9AQ2KkLu2S44gkWTaKLzvDJ5JPNP5388PsgUYvrLw8ZTMsERWrJWgvvmEdkLrQvw6y3vcHc58KCXS",
  "key8": "2xv6vrSNDwLHY4HM7qfgAR11aeDeB53LV1RUBUfDFUwGKw6UZQodmGZZbsMiScoCvv5NBjuD9unBKPXRvDdQjPAW",
  "key9": "4UWfDe45TwmZezdKrtGBbsPAEnuuA8Eimhd6aL2z711rcGZvkaGuvq4k5X9Zh4SYF9fQNEVubQkMujZJz5kbqbqS",
  "key10": "mnvGuvfG2diD11yx1vLfWxvFwPB3BJotZWvZB1jT4FhKiZwpdvaaYv7eCZqmz51cB9ey2o3ZAt4ASresUmQMNzC",
  "key11": "27U7849iBshkfjrAVQgmEoLyG8okW7S3akcmTka6SLFK871HfToVztyZ2K2rJ3FFZbMsMbXNM9hYBHh5M4Po5ZqM",
  "key12": "3d9h2CNHhe2beWS3M9hqq3c4aMMy31mdbQuhkVrz6inPjxMD4pVu3SNufqPL6Hr5tfyHxsCwrLXcrEXsHxZtRpsD",
  "key13": "3w1NojSopJojThnD9e44wFp6Xb4aDwJahLxrZnryf2xXTR2Zfz5eGk967ySYnp1a1h7HicxiboNWSPYmDTSBzRBC",
  "key14": "4pepW39hDAMo7kLw9WWMcng9L2fwoaexYhzE19afNDH6Bb8AqoDiWi6KVWFF8WsbYz93u7Fj5e9Pymj6EGjC5QJL",
  "key15": "5b5nyLDFc8XeV631WRP1kRe4G3urQEeG5tJr3VauXcexzZJiJgGjhBXfuXtYnBi7Aht8gCY14mwEZpfoiAmuPH6j",
  "key16": "5RpdrwiCZsdnr12Hz2i2nBhNAynSEHQNsz5D274kRapQLHrrLQUuUtfd5G5j6YCRvzJj9FFQTTe1WJfrNzZ39Xdd",
  "key17": "5gHFfZSpSrX2aAnHB5H5TskP7Hr34xjvsh3nArjXedwz2AfAdPjrJ169Fo1RKKxcQ7YuT2pMUnLLYb3CLvHHxJ4C",
  "key18": "2C93LjKgSJ5zVF7EHacrnqU7s7FZdEevCmQB43wjPYvmgt42DgtVgJrZPHmi9f5wTo2rX9xPgHBTrxwBdM4GGXF7",
  "key19": "5TeY5tkZSdh86kpyEd67uHQ5b97BT6JoRSqof72dUfDGoWZGToRQZcsPJ7Co6grGT1stQUNpfWPbWTAB5KDSAeL5",
  "key20": "4B6k2qEitqcnyizFvxofCMKHxRpr3eFYnUzVcB7MatbEALLadPAcnyvDPEh5g7KY93B8jvrupGG863REfpLjtiZe",
  "key21": "5vfdgcH5HujtSBDZAoUyUPUuyRE8DxYg4ZVjAohwjMZ4hLMDYWGazt6dbCYcTZEneW7jWJKqx1vorBw8mZvcUpRw",
  "key22": "4Np1aXFizztzQd2uyPQhEvR3NCxs3EUSh8En1MJ8qDJgSr5bRET79fps2XMfkYRfX8H77WYZMrXBnM8k4HVCK5ZW",
  "key23": "3aDUiHqRh9dSkoP8giMGwJaEZUb6jLwiJDfkmA9T72DGAGjPAk8p4GXcJchV32CePP6Ap2qQztLcpricppLenCy4",
  "key24": "4cvrVjYcsjoq5SZPb6xGSpTQLnKf2iufGW1B9pTzWRNRgTW793D8DrPFu2gLy69YUTfCj1uTNM3HDjtsry8e8cbi",
  "key25": "4YHtZoh5ZNgDDY1EL95BcZenNAW8pdxfm9gFMZqgwrdavhKQz3fm7QRwksLue4ZdLtG4oLYKrBioxmPkbHaaGUWV",
  "key26": "2F5mwbGLe5jn2Ev8R6gLrz5DRToK3zQc2XLAaSFBQjMTsocVdtV2pisvURpJFJiPcwihMkFotdE2JrMuFzM5aW6o",
  "key27": "4pnbv4dnzHgSrMJpM4jSUJthkdKCyyEEfgmhrNqcJam1fSx7S6KCv2NM8rksZG9uAwG1vrqsGgk78gyRjBNLEfXD",
  "key28": "5Lumpu8cCu8rZAXWeEJusFYJzCkAsxBZDB48vPcG8UDV5i9513JmqRbdw6z1PumRt668ULoF4o2JCr8MLCEYYpai",
  "key29": "4ZRfVYiSdvJkgX67uokyh29QvZhRGjDAsSiGpttpe7Ytg3pZ4kGQH5nwpLQ6Bs83RfKoWzjZvbwSTyeAh4sHdA2v",
  "key30": "52U97W4jAz7b7huzdEWzdGk4srMfTrhysnqdjAQ7sdgafpe69qeDtCfSKqcYhdNupVNLKuATYCpVUdY84vJmeB95",
  "key31": "HqhXTWf4YK2YYk1ZovdhRX7w3v94ZEXMgMQuPd49BDjNp2jcBCfm77Q3XUdPD8thGkA5TvUM1yYXqiwqHag7f11",
  "key32": "FKprcWwjLfZUcmYVDagikTXdKip6dvD3FVLBccRPrQKM3esj1DojYnXG2GTFQBKHF8nWRMy3CYVUwqtrMwqT1K8",
  "key33": "JH8NsftAVSA6jHAqSWRkY8muP1kUJWF4rSWWwNdvgMgJFCCdBsatNhohA9UDohWM24Dr5QNFov3Jseb1yRvjScG",
  "key34": "d57sQnaRnLXMTCCKywcqeHc1jk1vPvgsbtTsJLv5jnnvyKvbbAmGLLLsJpYvpDQ1d6KWJC544Ast2zJVLSXwWT8",
  "key35": "kR6PbDJkjh7BiiEbJ4mqkqFFHjBTjvuGb91Awh7CC9DcRgJZjVygmReGUo39dHo4XERTkmjpuwEPg5Lc2Zka9HX",
  "key36": "GRC2h3QfvSiMoMySXy52tLq9qwxFWHjPCRXwmT3cWBoYN2nSutukMjiYwStwjYKx8KQqWeN1sdyB1oYLQxycqbz",
  "key37": "5F6omMeyLrhmsKxgJGmTyAzEtEBnvYtw3rfBMS1eJkcbqD97vVUjoSKFXu6gLvdPyXfr5LHMEpRNcL7uPy8Xw6UY",
  "key38": "3Ku4mX7tyXp3rMMdKKQrrWxM8RpiwLdEGrc6QnP5ipXCYei664VFk9SvYc8QdhCa4begCdThFVN6ynQ7nj1r2TE6",
  "key39": "3bozVXBAjRvzpEpfapdr3Pfz2ww93QDrRmEa4mYj343UgcMaAR2jmYwCpGQEN65KWuqYxw746a6r8jS7d89hLbsJ"
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
