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
    "4v4wDTvXxauXpJE9nVZFbYhZFfYJBHRavpUz9enfdWkEYv9hxux9AtfpJ4tc2CRTA79mDiTn9WGkn6fqimVFuWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ydL5gkcadC7HdmTsD7TkYcp8c9WLtKPndkNBS7LZnUEUChm9wySZHuPGooJWvXaw4rAjA87ej8TbCNKso4KA5Hb",
  "key1": "4nd1Q8pHNppHN9ZmADYxNYpPKuWEAyp54kLQwnfXc9RDEehbCUpzrSNuDjbxxw1kKa66HA4Dtmgz7KDvsNu9Nc2g",
  "key2": "42YKusCQcKzxRjTQVvc75gLeAY8x2e1yBz8ecuFvXbrJMPs4MfHspmqAjTBDoDhGCLg3vamNMWttnUrh6uodeqt4",
  "key3": "HAoC1sJ7hwwzo4wRdHsQcAQpk5BBmN7BLsgsSVpyVeMfXf3yHYCa1fQFKLAvbDSwEq9KtV68UP1ExDBWE2KHKdD",
  "key4": "2sHnr4ecTcod158H26gCVkNucisLT1BPvBfZQfyGkJc8wY8eFDdV7URG4z7joR6JzAVx6Gp98mbJ3xYAak7UnAyK",
  "key5": "36nYmUB7AmYMSBuJjSQUsrnvGUua6TLuFKvaHMb4iSmyV9LGAiAjbcx7pmaonXmonUzVtcSh66zTQDAdUVpYrW7V",
  "key6": "4JBFn6qHqukQQTojSYhWFwrJ3bQRGX6SyggkfLsEWHySdN76rpVdPxqyqZ3A5GJACtjU6n46XnYnqCmXHnNJJr4R",
  "key7": "5GajCLvAhDDEcK2jxbGuLrxNPFKC5My5tXnXWu3ptbcedzmTHBAEvFqQScyU2hJThBaAhPX2y6pFcdGhn4gSCJQR",
  "key8": "2HURxAzeCh8MhBSCkWGgckfbJmdJ9x1vUaBGg3rXH4DHrVw2CafB6WVEvY8oHbtx9fcTLt78z9Z1GB93XVEkiXog",
  "key9": "AaJmcVvjSpqCtnbtSN5BajwPtLoTzjkBUvZho8FGHwJs78T1h6YCeJNqYsazcVEFBTJKBEdShJagGsbGjuomvAr",
  "key10": "tN52WkxTNo3jMRNV3fAYAobixMrv1VcVP4itGATXzr2PR7SDFYiELM4pwGKjagSepCKbTLC1TZ3NYThNi6xJXz9",
  "key11": "36hKDquWeFpK2VE468hmqcsyGDMsCEQWse3Kzf4WPJACGfrVbTnzjtss3x2FSi2F4frD6S9EumNWH7pYfV9JpipV",
  "key12": "5Q6fiNtEL9n9uNmFeTEEVdzVGV57ijDZwgTyWfXH6oxcf1UjXP3Uak3fNGVFdt1StYKFMXvUsfNWAjUkukHKDoCs",
  "key13": "rjyiHq6tKKwRaG8fUjGwuxJZQNz5zsB4g1J7giX65qvF2WE6dfiZHhu9V4NgnMymDpXE1iSXAb9Xs7hEWZLKAXC",
  "key14": "5j7Boam5nsoNK7AhaMQSkTBANBrHDHwc3nBnGiziGueP4sobMQJyF46STP2nMcrzMZ5ZBpX2WoFhkk5s25NXeu85",
  "key15": "rwdM8tRyZgGRsSKDDpL5zrzz8bJKs8WTStcgARTatgcC8xB2egFbUHZbip24QNuVXAoF2X4bSSBD5HrPwFTqv95",
  "key16": "H42bTq19jCVV46LUWKvv1RUh66Xfj6nrhTQwmj13qwhhFG7xaiAox8jZznnvvvJzchkZu5k2RLnBXx6FKdro1ja",
  "key17": "3nNK7hgNGsmVQw6Uq9XRTijZ9cH6zq9xZ17aq6Jbj7hq4qkLzzUYQ5FLgzZTc8aC7FSAf3AbpVCtxhEJr6bfDxXZ",
  "key18": "4NSpDi8rBK4Miz9BaP9uuy9RHELTdKRJ5h35JHsJJ5ygmMwTiTg9aCy5wP5CDtMEcBN3nPRCcAeeJLPRUNMQwK3z",
  "key19": "AbFKt9cHwsoxg3YtHBjHPj5UMs92iao6eLEKZK6VHYDGZkeb64ATbFS71bJRviRfZBNmsnWWDisCMvj1tNkcVUD",
  "key20": "66b8R4bWY3juc88mL4WBESiQPQLMQLMVmyQAPnTbo2fVwuuBLjQX39psC3WnLuPw53Y1Bx4o8jVadpdCX4rZqHEe",
  "key21": "5G7i877uhhBtYx23wqVqC6wsuqV3tGVutedc7BNGJ5bdWFevVUJv9QwLyswGSuiXWpdUtQfb2kTNWQhEJY5bz5ib",
  "key22": "47644W4r78rqU5h77zcVvseasMHHo9uAw2rQBheyzHuYZPS4d3HY2U6DwPWCfGJLFz1iHUvoDkaBWk82m8Kd9tAN",
  "key23": "BYgud67eUQh3MEbHNt2rgxTegz3cqDHcMUyrDsysyxGwBQo41HNcaAkUTm2i5rDtVAuvMPmuzmhCP2vR49xS3K6",
  "key24": "3XCeqg7CFApwMv3456ngHdyfUY23bRuaJhPiBeHGNn6TaKaho9K4UEjUZEbsVGksgSgDoN89LMUxv43CUbUFGREn",
  "key25": "4EpgJp9rd5sJa3u3D1y1x39cGCETG4xzftt4ByRckWHW3k6XBp5vyXra7EByzZDmycyRNMpSaDiaiDw4zDUecqHB",
  "key26": "VY9j1Uwa1ixgdpJEA5P2WjCLH8XpDFF6hBxYd78Q7NF2zmkN895BptyUxT1AGKudSypmHWHFi6Dc3bi4r4Z9btF",
  "key27": "bPHbAvw5nWRzsGuv9NkEN99T8f1PjainXCAVXgwfhyoeyLfCcDuQmVcidZJckfU2WC6g2W2bwcifBMsfuxeqYiS",
  "key28": "24rYf6tRNppBXvX35iBgjXg3qCnhANsT8synQnG2Cn8r84nDp8e3FWztkTbTFytESuhBb6Log8FkxisM2iBvuUeb",
  "key29": "2EVwp89UGUFBJubd4LfpbbHDRG6aA2fbi4vTVHZWSVfGkq8mPugHwTvsMZusiLTjXkNbAdwRCqT45PVi2Ca7cR4o",
  "key30": "2pFuSZz7wesituD9qYJLPs7JR6xFfhDjdwYLgQDazTqDo5CkJpdNA23W8UJnsGuq8xMaamKGPxQWYMWLg4DoMXJo",
  "key31": "3rAxzy9qmaTmrCin3DdhnQ1Y4E9rRxzhzkP3azrjBUd1yt8o8Mo8v3WNPHaM1aFwwz5EHnDxJaJR7vz5AdysPwvm",
  "key32": "3FQbqV7kt3UtLh79dD4m67uJe1oCBjq5PvKLFm4LM9TwZFFAAKDkzVCAwCnd1K47QZsrBAtsXwXCHuNebr3N3Nqu",
  "key33": "2BS42ZJc6Mz8qqCevoTT5KwCeHZxWy6vv9AJrMjyWtURKNLLwxTJ1g4FZMdtw8864iSzH75JU8nXTiaboDmmopGZ",
  "key34": "3PzwevMH6CzPLspQiC6PgmWo3rLGXA9Zm8qMiPXJFFwtijSQge1itWvrrMvbnVah9PzwsqXNPeKJciVD2NkYcJRJ",
  "key35": "4WUChuV2861Zuf9GKSZKy8J95Sj3yNK7pgb2tb9EYTH3cEdtAhDZH8TwfD67nD3UhQ1z9n1NEGifP274o3RkLwcL",
  "key36": "4BYtv6UEqxCP2utadqGwmWYVtq52X7Sf4EXpNLFEKYA1NnWGGhQzHHkcx4SgYNqfdNkeiizbgszEwxqAm26JA8Xv",
  "key37": "R48Br45h1PXzrQvnQUqhNZhj63FqUQb7JHCHdee69kQZnpx5y1A4esCWjxkCsKobcVcSSU73LNgiQf7iGPsXsf5",
  "key38": "2EkBitLEtuwu8WkPeHpcbmSrt9qtggHzKRQACuhLpsFjJSmUGLniC4AQqNRsQCA4xTTGYNhzf1B9JzT1uqH6t2Xc",
  "key39": "5U6v8fcfjKP3ANm6GNDga742KgXAzqPEbqWmWS42oLfz9JLYTEhpam2PBo6BBo9mXQnGAzbFLRxcMQZMLFEBRp2i",
  "key40": "2egTUS2LPqxc2R1AJ4gXtpGtGcCd3XYvHhTXda7L6wKYoC5TQbMxUMtaVRFPRZcMv2GGcuyVrWoo4RCuTSY2ir8Z",
  "key41": "2n2QhAptbr2mheB2kBVqJhueV12YGjAXkxCxgJg92urz9jTvchLnJWpyxLxtBTuGz3q4ApFAHM9kMASK4EPApu5",
  "key42": "2g6BMjc486BsYhwpwEEog4dKkczVT3nDGYGb1XtGJoPWqUai8xH63sjC2EDsJNH5qdhvedZceZeHwvuUhNvxRdQ9",
  "key43": "4iePZCGLhoWJP2wnY8ZMd8bbB6rDdhXrnS6X8ECFHPHKA8WvD91RaheBqhrZAovwkuFQ33Kr5ozu1q6WTVLgawSj",
  "key44": "2SDaqwKvCHxyKNgLj6NVYiadyBpS6H6SZuvxSFtiedhjHQWoiwGaP3yoLJX9geaEzjBvNqGrZuk8kENpNcBLLTmE",
  "key45": "5zjLdw9WrJtxacdnG2yF6WTvQtbuSYuMdWAqzfZG3Fcfm4cbRQjSbCxm8ESdZj4FsA5ASgqc8LgRNycStYKfU8iq"
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
