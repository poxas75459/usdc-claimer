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
    "4FParCEYjnVSrYYsDTc6ywJAWbbmvJKwhYiUrTf5QLWk5qqwDDz5UMYZgVo5RpGAAJk7BZfpZodLC3YujAr1qdSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wjqkiiqzP5dAcdG1RniawVqLyDEVTB1MEfagyWWzsSHMZSgoux94eMeQ2X5akEMfEYuvaS8r1WDq299YHetfdq2",
  "key1": "9WQ5KipuSSrbytYTDcnij5ykzZXpvYgS4okMZVon5xTa8uJJr1AhttA2fs8VEouucQn3Qybbw22Sv44ruE18eWL",
  "key2": "29fiAUMZnqPqmbJNRPyjjus2BciFayhL8uszX4vAUjXLf5LCTfcseEF9zR6asfLYjKSKKaYZYW2KPqJfyYocedct",
  "key3": "5fEw9y7L4TZ5bLR18Ymv7Z8NZ9aQUuCmcHnXFSfLERYKV8bBUaNcChKDK44WmRxTWsRjZtBp1PKsJXXJ3Zw5SEB8",
  "key4": "3Atik5Fxwbz2tUK16Jmqz2URzbjmRmhDfsv5fRiWSy1aoknMtX999P4W9d5zLH6G18YL4DQ9H74UACVoYTucEMzD",
  "key5": "bT9cNDqGsajjUd38tZC7b7vLGYmrxb4AxopP3idSjxMZmfD57LkRaPGdjvp4HWrb5SvpUPpquaejoste4TG2DxA",
  "key6": "5CfdWzWdRt8LU6r4HEneHe5MajXVQHcXgeB6Toq9ntXpa2mdYs1yc4dqcXTSC4iNFC6wmNMbyvRTafQVyGAd9c5U",
  "key7": "28t1v84w2A7LMwcryMujffFVdzHN3BieBFXEJ57ve7deDZQzeViinUTqucZqxRFTEgE4V3SUoMXkAzdPcj7ArKiH",
  "key8": "5D8XHesumajwLevGJpUxn3Wd1xLxQLEFwaRKekFQt4SiCevC6Hz362MkW7cdAZvWbxHtyrJK8ePbe6PS6XkrgoZa",
  "key9": "36rb6ptMxNvFTQMqbYahTA8qFAsi1VT56q8FnCsKwYix9WpxGSSB9WucrXJiibNKQJEeerV3pugTjev3y32Ni7yg",
  "key10": "4TPDXEVJQgeH98zFUCa9bVGmKo4QUkxLhu2joaJMuMh21nyoBZDpAWurwkZCgTVs2yMuhLrZ8apz5iKaTyH3vni",
  "key11": "5qRRy5LXE5o7Ev4joKi4uRSuEYVVfYD54U9o6oQr8vpK2atwrBcQRC4a47soeFGbdMjPuQvSs7wPbfZSHemkaToo",
  "key12": "omasbmfGgKjkNTAzSgAinhpa4rAhSSZo1Sr36s6ugDLNjduRmjAsnrvuEoSCUWz9U3AVYWwoWYoZcfxNWp6bUsC",
  "key13": "Z4bV8mrzeFUcatnbSuJY26zSR4iiZpmWKYwcQVmeURhcJVM7K7f2RFwEkGUa2URv25pymGbr8cs2YVa9piTRSLJ",
  "key14": "4zZa7eV3g3aYsbbDYTPDcGf6Q4ZFKxmazFGXyKCbRMeaSacJsixJtEknrWyhAe9NQdWkghsDcoKRDjxB3sQDUfo4",
  "key15": "2NeGEfF7etFzmzPpofHsStxNvuMQTCDCxA4F4ny7ng4WBceSRfRnX25LNdCW84rUZb6bPSndbKdsaos6gnjqLS9y",
  "key16": "4pXUaopnwh8GDyc3etKuFKun2GoXJo3ium2gWgbPuUAt9UyNYqgbYQ3uRXC1f4usiSamjQatjmd9v2Ubw4ykKHs4",
  "key17": "51B5oKnaGmgyytccC3fqWDs4ELSUF1SovAmzVefaiqFRY4hnmTtf1CvpBjfzRN9KivJgi89LWuTkgCQi1bbmK8D6",
  "key18": "22TuArn3iKqtkd1asJo1mF74TzSfoLC1VVPEfPNbJLNsjakjbbRp8s9238vQsVZwNaHfCmTtNqTraut84YskgBYi",
  "key19": "3T4TbZCe8KDGKc3kqqxz2oGqpRie5RPkAzage4A6N1CEoGSJNo7qw42kA4ysTwv6ZopVDnDXYeY1Uam4puB6N5N1",
  "key20": "wMyTwwhXgPDfC8HViiLMyFZdFjLbG5sYZm6xGmW78N9t4VyTzP6pWSDiEVMMBaHMxVMS1q7EYcubwVsf13H8SB9",
  "key21": "56T4SH6bN6f6tvJXDL8nApk5XA9cKzDcMBh5Uu1eW9SvuMBh4bSWdA7sRy9yPBuJ8EUvBjNCFzytZRdyKJvedoih",
  "key22": "63NdHGojR6NRNVAesyL7myWrJ1MBYi9ED28UnE1B3Ssm4eUrfFgXXXM4mDKckcGVqAnrvw5DCcY4MGzjCaZkG7ni",
  "key23": "5HviyxAwNFzmmMeLtyph8cRNXh1EmKoH8RizSrr7TLr8Sez7N58NYr6acp8BmiSBCvJfGVwTpW1ZhVEn54poXf3A",
  "key24": "23Vv5myX2dZDUBBNLAaATevZCtYyc7po5FKposxgVTjMa8zNq3nw5pxRzrQvLJmRfqrhR8izNTkV9fxg4acCu7H6",
  "key25": "4i9zbnPakAqtf72JkTsu138bjUQPgoN39G3DDgqsGxDroBYQKjx1D2pSRWkPnSNrXPQpbngHgpWShrQzPKF7jzLx",
  "key26": "3eUesR1dVeeDN9TsW5svXFWpAeLPoYMVu2GnjCadGDAcJ2WDh5vQJqpffXRjpFow6Df4biCNFgkqJGvNBpJSdyKA",
  "key27": "5WRemoiy96nsYadxQoa9n9npkTZhMQppTZo3XHHVXPD715hLSLYqza2kUs7D2NmvFG6CaZZnTAjnjLpaDeDBLw7p",
  "key28": "41nrbk6g4DWpAEwKqdYwaKBDtHnzdzXL6vMd3WBBGCDSi8e7FsWWkxFNjFSZt6DDhpPnQSLFgMFtfjaqYKAvq6D9",
  "key29": "oReaMc9Xt7TTRLHJRM9fAF7cxNsnHW3nA1CXauCxDmd98JQPF61p2X3RGRWZQSBEyU1sWxFQkDsFP2PwzBBTa2C",
  "key30": "5LYpUdCAnXvRPdkzJiuGSpCMuEsBFd5ryYLbpkEHRUtLdXdrswp9SVbsafuiY9QEQBJXViQXPk6t3BfKHn5SqXuo",
  "key31": "dXeynDFNiktGUxFNqZZKwwZY2K6CYprZDJPBrZkJKwm7u7zse4AUbKkNojfaQVgZxEYrLRnz62B2Nb66txF3SQy",
  "key32": "51fFRr1pJSz7Ea4kct64NZ4aKF8pAK3oFqD38AcNFRcSq6aBYUYCUN8EAd72ENP2CKEMwLnKvZfpAxYjNXbfSjtk",
  "key33": "52hYUw9iXoARN1ccg5zoSwKMjsZQyLrP48jDjVdizaDV4HBghbwUQFmphdeM7nYxboJtGSY2fDzte3VMQf8uGXRF",
  "key34": "sqhnXm11LgfjGRYPwKC4RLZLn1LY57quWT9TVn1ft4vysiTAYZkB94WwBNeK5aFPQJT7MU8FzsmaHmzrjG9Zr2v",
  "key35": "5VZVxB3ubMrkfCneEb4WFHJAT6GAf6j3i9UFbkvaEzqKLGLXh9SZha2ZpA8W8xHJATQt8znTHw33jMhHPW7v8YCF",
  "key36": "2VpmNtXZJXMNT9oiEjeAL5mnj7sK6AuV2Rmh6yq92Zgc3UYZfzLXpUbMoGeue3RoQLM893sPzkDrtKaFhvubxyWj",
  "key37": "3uZo8UMTWqyVVeHAcwXkvJpYBBhZESX9Br4TA5HYUD5mzGmsa2k4RzGV1Q7MVJKP1sgWGigc21ZnYcWHRUZVQvDm",
  "key38": "3m7kxMMFmeSTiy9q3J5nSMn46L1ZRE8inC8RKbLoFbvuh4b5UNHnMgBA2hzeDNqrs8UARyy8jQBDw7mqmQM56bEv",
  "key39": "FyZ9DENFZjasjkk65Yxn6xTaqP1eGrusYXUdLnAA6BwX1rJpfV9tFoShms2BTzac96ak4CUDfGK2vc1UTfdmxbG",
  "key40": "64rLyQVebhC39YhMKRDJNti4SDtUcx6rN4WSgFxnZxd9J3YPkK7FHgxevBHnFDcWuPic5kQDBtK3rexT6whxpYPA",
  "key41": "2okzwW88eUThzua1rGDp3cwu2GRAfsnyj4X4Xie6sL7tqXCcBN61MaNRNq64A1YCqKAHGFzXUXGYn4rFa982kPVg",
  "key42": "2UsuByMf5bp4uz56iTCuH64jsRYWPsmqraTRYtVaFhok9cGP5HvDY8xbsTW5cmedQ3pr5hBUB7QuTTb2V5cfvEh7",
  "key43": "39rt13aPnjnyuXMyzHnncNjYNX1CzLV4mMCKx4S6aZpLrRDMGWwZneeNafpwEFG3Smd479DowP1VY8QD5tCMP7Jf"
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
