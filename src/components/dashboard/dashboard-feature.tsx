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
    "3LKgrQfjQBHPAQ6aiPedQDiCG15TZjDGUzPDwgMkpCuWZJCajbxqb6SuHc7RoRvvSPobbbEdkimxLA3RwMsa76CG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aUCmoezRX533jbkU4DMXCMaeUwNrjyUG1srPgYRnCjddjYPbaXkcJ7j8rAhSbHqAGJ6dQ1ffpqqj63ixD3gdXro",
  "key1": "9XZhGDmcggqaXfwXN2mHPP6e2F1E6xLViS67wNzyGh9vY7Nk823exsAQfKsCXsz13Jqj6Z3trv9B2VqwgsytkFq",
  "key2": "562CC4bRHScWUezBirhSbrpRTtePtjuGxpda5dSXwBBr2DVUnDRK5mBavGhdBhTSvUFHby9hvhpQPqnEmnJ5fVhs",
  "key3": "4XiyDYWTN4SH6XVm4NdSMEHZAU67mumUwWJy2mShBL1rgQLZJDMixMAsTLGu5FdZRx7GrqvrDJke6aNPcoJR59G",
  "key4": "5Nyau2aSUZanxG3hfBK65zgKLuy1aMfRUpRyJF8upCv3zcfAxwCWzwt64ZyEETyxaGjXvkFruzzmWXPj38kUNf11",
  "key5": "4k277sDpEQ8xU4w8vDciGdnJrmZRDqHgqZrm3AAAxECRudoPjNXEHcddCaBXHMSish8pCAR7Rku2BqYNSUwcnaVm",
  "key6": "4UWWndWwFtH5YD9ncgrE427TJMM5auFDjMsCyajCwwV6b2odhGAjaAgTihkz9kHAzT7xveMkCX4wzxARXr4izJk8",
  "key7": "YaSAphsiYyDcn1bbFK9o69TReYQH4YQpZWZann5G5PYsJQRQKUz5mmUreZgkp427x6vospguzBQkshHSbsDPj2Q",
  "key8": "54MhGiXoZdW2rrvTCy1vU6frmhBHzhHgNgtGNuKq7AeNS3iLsnYxg3WYh5BR7nHQzLqUGsYrAK1SWwnA1LUkfoJ1",
  "key9": "2SvjZLqVHgjgDqb7VC9VomigvniiqCgZppVWn4JuaT6PfUexiZGysGmLur7Z5ZSiKsFekNAN5SVW4qHAm9GEVPDy",
  "key10": "vqz6iuBvMV2DkHGZKyNFAy3nwPYpWrfBGZbF5hMukvX5TUNTbsQhijbxQuSyLpAxFdZLpWbRp383vNiEKDvP7ei",
  "key11": "2nd6RL4rELBAndH8zJTB1aHXQsKdbTEeuonB2gJAbw8ngCZrLJpezWaAvd5YjnPsh6DFC4wk6ooxtdgdj4pNPSJH",
  "key12": "qf4KQWceqUZzCzyb42Vf8UyZfu6bepXyRVbS4n2RKwW2QDwN2P4uVXYGHM9HDRW3ejW9jPQVgJsus8AfsBisjBm",
  "key13": "VoJBpwk8HZT19zy18WuytwWCVVHehg1S58TF2wybtD11k9JTPwuLUX9WanbFc9DYmPkjoegyYJxryfhqfxE7pnL",
  "key14": "4QmrgnrgpWpVYbVyg8eiRiMVZBamFRk7cMke9fx7ReWtn3NsQdDgAKCizycrHXTENpzF2DAgt5G6HT3C6HJzT9pd",
  "key15": "2driQek59qmdiuoj1S1opNB2yQvQyLaLw38MY65o6AHm6mjB4fKh5RB2QBKwLgYVTGksKk78c2idiMnSRugbUxUF",
  "key16": "2cjMBQWmXv44gZjEhiKrAWcZNw8hFMmvypAUXhkcUDDErcogcd7scQRYWTui3aSp8djbSbKEbPG8YrQ3wXuUX7wD",
  "key17": "3YtCYxk9fPjzGnLQSdQLE4UY8eiyEnpGudud1ZS9knkAea6vrV7iifQ92xVbBKYN7LbEEqNaErtbqoTDFvQvx5qS",
  "key18": "37Ay37fkkiTCJaSBVTpkxD9WK6iLGiKweG5FTGCJmwxPiqQfnqQkcvuJvWqnXDb5qfN1vHFh7oYsrLWfZx1eTUZc",
  "key19": "2WgezA1FDgFwMXep4jNTYhdp6BVxj6N5LwqMa6823XckgRydqvBMKHh8rR59ZhayusMJtwTh87jLHgceumavtcey",
  "key20": "2fjBH6HvukpXJzWiYc4SGXKjQSNnEY4md9PQkoSd1NXD2aJEwSNG3QW1V3SheCXFCdV8QtXhVCHevRkewdiR9w1a",
  "key21": "4YHSVdfS1Uezt2wW9zFiZ5UxAAqfbBFtAQCBipq6kcpbrz4krrUPJYY2jDwW9aatBoGT9Q9JFNeZMeY5SWc3gHx7",
  "key22": "5zV41aXRhkmKedgGPqTHWjWjcCPsms3FSrFBuVqq4ECJpP5rFb1pyG8uA5FuU29at2qhazeZExsDhdfJGtHrXT5p",
  "key23": "5KEy2y9Pi5xh17Qc7LaXSyn1jp7Nvny9kjwV2Q23dfoewuqnmvWAWMQcHKfkaYbtcNyqr1SkJzUr5ZMT24qM6vYc",
  "key24": "2Sry2EHezsoSS7fdCqW4AYN1LRzxJk3Aos9z5nUXMMUGrQ3w7ZPrAXY6fg7x3YUFxYoxox2zh6a1eFyQuyLv4Gjc",
  "key25": "FXi3A8S6SrrCLUoT6MvdriSonHptZV1cLPMgPqrs3Y6MM1M6zPdia3BvDY4ynHjLFM3kEiyNU4261VA42gsAs1L",
  "key26": "UAmhLfHLTPAndV4VHCAxsjpNmKYkvVrDy4rT2NM1abFVncmzD1kfeFtTTeXpXeJbay6MH7yHaf4wD8vGEy3iryn",
  "key27": "2zjhXsk2rhHEU6YTkodHVX1z7HLZDczzzKHtvkyGoPttwv4oUZsPT9S6rxXR5VBidynsZNNbEwGUJ5HSHNsL6nuR",
  "key28": "mvQgH678zHESJpdAQX1MsxsKPRfNPfNx3pSUg9bshBuZbUcVcTv5NnnNpVo2Z1Z1vnUDAv8pR3Bpf5RrzNHdD3n",
  "key29": "jND86uBqkPyLTnCv8GsR7MPvwM5zELvvFUkGmQq4AxkuWqwknv6wvxUbX2AFFxK8kHd5ZSAJd9ACgAKuzxrY5Qb",
  "key30": "3BS7SsxRRumYvGX5uDzX4ad5ivNYruVJ4ATpYKpJGYGYA6kkq5VPBfFdk1JZeM4JVDJSLwJ7wg4oXnhbQkSL3e3c",
  "key31": "4A7dw2xqngd7vA5rDdq7GQSEow3kSppky9VxV1rAtishj4prjNGC9j11yFSyB5Wav6DTpEW8JGg2Lkd84uC8kUGR",
  "key32": "FJ8xpWu2Qq1QYCgEoX9mmKaWSJeK75oM4Qn6AixVTJSqxpriUXVyb9MdYU8P3Tc9JviA93jvc4WKLBQYMTWTxrQ",
  "key33": "HAhRVPZYh3f5ZZkBKdhUstoPUbit1BCv57MYdv6J6ydh9Cod5DbfiC68T3N5TqifKRDbigX6XdTrPvdz1vC5ypb"
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
