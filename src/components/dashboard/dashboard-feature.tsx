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
    "5QSuLnNBDDgvfHeNXeFgHa7FW4EdKuZR7e3V4cHDRbH9h6YcbfgofyBBJwZbrnQcm7bA8viaCy68WxEivib7nPWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34RUztg2btZfaMF3WD4QJ4djGUMaDPan1rnk1JLEmUzmE8cVD9R11LYDbjJ4HDGnfdS4oYTqhrAqBKG1ikYQRcaw",
  "key1": "35xR9BidWG3vrv7oTRtHqsPC5RCKTZULNxi2g7tuTy95d2WLwid31ge9DYY4nQbVj5gEtzBVcvS6cNjLiqNCJRTh",
  "key2": "3yXqBpkWC4rjQHXaBn9ZJQzD4ZkZK7KCDKn6aLMdMa5DnqBW2A28MHBFbowiKkB2YMHti87dqsn5foaoYLKDqqD8",
  "key3": "3XqMvq6Q5Uhb3S4aS4u4UG5QXnKem24n2qiDhxdHLWqiZdBJ2wZBdU1yQv2aq9TrQtoocoZuMmMphzoHCnaAHj5L",
  "key4": "5TmEh6LUfoow4G5CFS1vsooGKgvmrz61koJpJuwHeQMsvUnHaeakeVDC28WeLM3dPov2PJ1vvXgR1rqyWkMw8KuW",
  "key5": "3gZP22HFkSSPkiXLqCG9ZYb9Lm8Rf9wunyXn6JEqgCaadztmgLdvg5VyteG5wwLC6L2UjceWJ69Wcxeh4RFY6Rsq",
  "key6": "57c5ZWVM61Wy1VNAkDGib6TVjrixs5mqwdWdmzHAbo96bM4rTAkGEBkGmSNASTq4CUYwspTpzQW1N5qZUTjpZ6wE",
  "key7": "FG8KtndtgtEnuXq9ga2a8dFBZMxcAjzpAPLhcNVTaAWcRu7WQNJtkgsq7hQuYqp1i1EJ5GHjMqXvmzbTvQG3aZj",
  "key8": "4ZPQBY8wdiK3UHQs9nMkAjeQHaVYrHPMBQrFCBf8LoMxF91tqDh9kPLKAbeBvkLo4nXgYDnesjbBcXsnLL5pcFKo",
  "key9": "5Do212y1tVycm8iRv4bJWzQ8qVNCDkERzBDgetrGVyXKtM1PTBXe7qqC7Ep2MYLhTR1qBrWtgNxqJTmF5H3tubeB",
  "key10": "66SfQZwyGWQRztZCHb8QyLEzPuzyHVAz2aNFuGMRyeVhkgoap9G7BZgh5s3xd4Z8eLTJehTRra8HdtrySp4Ly3w8",
  "key11": "EwF9bacW9MXC3UEk9gpAg4cyQxzttE8TPoZHkzaJAnkSp5D51A3hEwvTsF6mwzoERHajuXTQg71XV18qUTxTEXs",
  "key12": "2hETUWrogfDa2bxhfrXhVjhQ2pffd145twYBSWe68WcJ7zzfkbvAMZ7tuApAXAxqyHoDGUfqx4tF2MgLqVd85P9i",
  "key13": "36GX5WDQRHVx4XkBJBKP6QENJWHuDhKCsoX4td4F6PTPmzj1DTky8DtHSZkLfQGFcWiB18jyMTUWM8gT81TMjgaX",
  "key14": "5vHPepfGv5cykrMCiGu5JwhWPzxECb34AEPCwGQgFWrD3HsbxUEb8KvrBc7DJTWVGrQBJnPnRTzongt2JB2njgjR",
  "key15": "YtfqkDqWngRbhAHApaq36VKAxWwHVqk116u1tk3WJHqAV6qE4E5K57EHrLMcWRxCEnLt7hqBHJ1pH71iyfChBFK",
  "key16": "3Tgr9FgHJF4NfhZ7f8jKfZ6PQsAZS1uKH1xvTk8VHz7JPHPaFohtvb8PHu5JiTapnXq11SZNWCgDoYivCxFKQRPg",
  "key17": "3uhvX8CG3BpAqUGDE6ocaL4HTEeH834medVwefCuPD46CmyKWpzz8xvdmyySWubX9SvdGoNChbqY4DmxQwUcer1X",
  "key18": "2VYvjZHb8ev7yLGda2sYZxmSNzUZJH16oM7hnXH7CDsQmkiiSgh2ep6TJKTqGNTzTrAEYnqqyp75Z2c2tt9siqnd",
  "key19": "2J7rspmgjZV98VVGv4jDEqv7WuqTr2GbMbXTXCHWmSWTgNeggAK9cze1WVn2XwM33tH3A91M1L1JRAikpHGdk9yU",
  "key20": "3MNmeBMENv73XLG42bJfma8QQqLvweH48L4tbgrYMCEXnLhGJZjEQ3xsb6wPBE61ZZfPEBzVUh2gMoAbskPRkmhY",
  "key21": "58av1gPqot6krxR8wWYv48T9n528LREAkntpeGj9sEbsvq8iPmpRLAUjhSYJXzUW5NtKXkNsEvVVwARdAoubSd8R",
  "key22": "3hTKACwYE8yD2NZSkZMLuadPs6XUYqekMRNNaQHwU3NjhoLtR5RVPPvxBaaFuWxry8q2tB3yyayPycKWVZ4Ycz4N",
  "key23": "5aQ3pnezh84WsoB8MTmdr3qzyaESU7giiUriMWmsqQpKDMoRzL6ZW1AtaipHLWccBg2fmX4CfVcHQXRsdfFoHZUD",
  "key24": "3MFW6hAEmf3dxZZweWywj1CzoF7hMYxuqYo1GNHhonERPaLDXZyyK1tgJsBsGZ72qSNXvHEZGMJtehvQVHGvsYKK",
  "key25": "3MYQzkMBrx4qJxrfRt4r5kdYBvGnRauZuaQN6o4SY9A8j5Mtb9ckkdQHQfgj1HpoeBL8h2drB3tm1AkSJPYUH6Cg",
  "key26": "CncLb5xkaXejALkuBc3yz1kKvHhWDgrg1Xe1EHARR2aphMSNvoxbpyBLTEXCwCWzWVH3j2VN1mGH14Z5chhywx7",
  "key27": "51jgWuCgvqF7Z8s8muYidCXeJxBgmWxA2nJZZ7St8qGjvvy3PRCDxGhbXc8qAQU9nyiSocqGAuj1EVReSV7aCX1a",
  "key28": "2tgYtx4EUffvnKLteiomakw6Kn5UAHHW9QpY7hcLpEEw2yko1Mu33Ddmxe3MTjweWKfEgjRerDBcJgPhUR2JAuJP",
  "key29": "g58NFmNEeH5X3ShqST7jgUzhicf7xHdnfUaTnF633FSopS4Pr6RhfUTy2vX6JwW1y4jjSYCgTobPeqkrxJJ28DZ",
  "key30": "5DcahUw7i2jkkHV7htexCgnWerVkBzbYcYu3CDaV2tDVcd1SVH9hPKmD3uovohEKnshk4Y5Rmsx8cYtukTByupSy",
  "key31": "3ErWRje66q126SoRFsKUXoTmp3mkirg7kCekQjgUtQ74mexaZqeXoygZ9gxVceD8x5QGRGb92JxzQbXqtufgBHra",
  "key32": "G7psbhzsab2RsJqFVoTGUu1PXs1m6y6RKWDaMaE27DfeEZf3jDESGd2xMCrBy1MkLVv6ot5orXrvBqPwzharZiK",
  "key33": "4Aj2UWAhZvtnHHhnraKGWjwBFEcsj2yvAsJA7RgMDt6BLWZFkSgCRVEdKqugoZwpHnWzkmwA6MZU36nZULaTpZYF",
  "key34": "4pncjx5h5LBduMstJ1bFwS9bGzHcmstRAzf85U5vrq5LwtisugLuvvg1FtWAgm8BHp3rYdbZJkT5fYrH8ggwGCq7",
  "key35": "p9ynQK9rLv4mCXgn8iMNjcQwzteFRikaLRiokwNG9pfG38CwiXZB9bVcx4zCfs6oqFDRsL1tWmzB72R5Jm8E9Sq",
  "key36": "3Co4Lgin2Ggf8D3YFGkoqozWq6fu6qN3jXp3asipYUzHZfYafYQ4e1MCEWxQrG8kUTjZXyhznDJxAeDCFD4nvKTt",
  "key37": "3WuV2tyiR2EF8JV4LAauMLr52yeiWARvB4VBbVK5sYk2Kv1aANKeUHP4oxFs8R4Nw6Yf9c1uFT6pZVgxpyEnoFnH",
  "key38": "286AbWont6Hz9PGoRkWebmheFepoTL5GDmF8nvwju6RMhAto7NabjGdPomWvokGEVo7RiWjYBrANJdTMpbV72wXM",
  "key39": "2A3Z9dzcGESafuD8saJq4ztcokoGVLmm5sUeNaMQqbxKTMHAgNj1iW7NqaouXVZVx1frDGAs4ze8g99gXkiLCbgZ"
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
