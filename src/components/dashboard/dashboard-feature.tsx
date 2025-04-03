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
    "CdQ6sJY4awfvYRnSqWyu6z4hTYeapadzepZk4giDbWWhWXxw5hVsmwPPQ8QaHrSs9H6LcYrZJ1ooQawZw1r2jd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xsz2ZapQaNhrmJVJnxEvtwkxoWuKZdB5um9RvR2NuuymWCVZtorYcRbYrd5yc7eJNb4SiYkqJcZsH7MFuPQw3jc",
  "key1": "YG2juddBHkkYkEneeW6SnMcAX7QPFbE3RXzTDkfLtAAKKFX1zS6AW4PxP9sQwZGdk7mXFK95yDSZw2mcgHi1gMx",
  "key2": "61WGhnfpamC3P7K56zdQseShDVfYuHZSPfXKJQFKw2Zyw6Uid9tBcXTtV62XJJNAiqbsFNKW6J46rnAY4LGjYEiu",
  "key3": "54V9WznVLmZTMV26EtK5md5hbcRoTc73PXSGuYzuQH1s2hjkuMMwbF1yNutex9hxXT65gHu2VnuTcCtMfWY4M2rP",
  "key4": "3qhtBiT18nhDYyFUprs4ermMN7ZMR6gqtEkYtNXD8o8WPnWJyJvRM5t8UH7fgVtaDuyxCy4P9gfwxYPLCYe7Afsk",
  "key5": "TSxyP1QSejG3u7xGRSZSjXskwm2Yz76LpWRqxyW9LvYtqZsbriYd68446pBndqqew6NhQfyKGo9yqT7XK2SsoZY",
  "key6": "5z9BjKUYqSPdLDBHxHF5jNPbuqvyZLopDYvWEWaMbyinwrEqTMKGgZu7VDXeJuz4Pd1zqeKhrzY46fChTvsTD7Xz",
  "key7": "4WaSvpgtr9JFSRcvPSDDG3JQncX3hff4Sf8AZPy1G5ZFGRwUFfyuQWm5bx65UkRsS3a8QVPNAbrtfZst26gn6BoB",
  "key8": "4zaNjRNLNq7D8oxtkbF89VZcDH7n18AeZdVjXJoCTm6DjDz8xuLjiTCQtkx9byJPaMnQe2V9DsBCFWZaM371jS3i",
  "key9": "6771ye7tfrNVvCy21ZbgBTGAHfbWRnb7zAMamuqB8EcckkghjHFQxSNgiy7TmLKi4hsjP2XKqPnxa9ofFkmKrxmf",
  "key10": "5WzyfGKSpdpydNuYb9LTH6z29oQg9Re8Ujq6gBpfShdLmmLJAqgr5NDhhWymp9RUjqE8LVSuaVW9S6gv1YwBVoGH",
  "key11": "2FywL9Ga7xuRo36ZchZ57NUqKMgFJSn4Tek3tjjXMFg9LmC1J6PgV5RRb1TDgp8SEhctesMSDQ9oCcJvndfkbo6g",
  "key12": "5B92eaZ25bE1MsEzv2N2E6xjQ6Kj6AJkCcui7tJ5sEM4PgrdKHh6ZGN3tyKdtkVzAgZMriksce5svFb4xwqpmj2",
  "key13": "2QZ6ji9fojuttea6P4rqVDpcT3Wxh6FXFgC3VQ7j6FeHFdxgzz1VRE1BL2xwfV6UBvwmauuFvGXB2B417267iND9",
  "key14": "32aKvc1ezjFn9shnq3YM9K6fNSCYeeiNnHxTmjYHEsLjvQ5SBYpUKgLkKpLyF5c7kT5Ey1CM2PMYThtDUdFwiJgv",
  "key15": "2d5JhpPoqgXbGqqMhb6nW91XPmLRP2sqtPPtqT9vdLk7iWuLBAySk3gQNR2mdkG9B73FozdLhNdcXjvktd9dkn5k",
  "key16": "5PA32CYLCBaAmb7J1FRW1gfGAa1wVhcqDfRX42PfNiSUzGRoQL2Q1uGohzQJdgmVawEkfRCH9A5Z8TsYT7Y2gP2B",
  "key17": "3qUUDHsNJXWC1z5Gw9nTXgDsFT1ZExxM3kbdGHovUabwnqqmNYqFCZBrEkrgKpptNuZaL8fb7GyZw3Dzw5QUaVb",
  "key18": "2i11sxbyKGTsYwhJJZqmGz4FBxFdufo3hguMidSisPGgWrLtHyopgyVkc2uBtVwotGFihLHURe7UTAfL3w1oG5Xn",
  "key19": "q6w69m1mRakNtGDQ1NwtvcEyenXipPfv9MethyuG2C6zzj8uiPaP6LBMdji6Kk9w16m2dGh8cdCTjpD4buPuaS3",
  "key20": "3HYp7Ksvwu4dA1x5ksG6A3M1pSkwEM8NhV6qWfxbhz51DUAmYyiTS51xQV8tg5nB4i2pf51qHkQPV3A4nCFb5841",
  "key21": "59SCRnWck75wnGJkHzVPFJxCPasFPYKziLwcis1wTejtNZq2uehQeaGW3usvTDW7AKPt5p3AbGNnzn6GUpTf3Gcr",
  "key22": "8xFX7PrbyWQJcsb7cKFDg8R8ysLhHZwvVoMJ8AoXdXdvRGKyYfaNM26p7nmdFJDqXMVdES3umpNq9KKvbcDdLzm",
  "key23": "3yMZAE1URni3A3y2hYj6vrCtvy4G8ArYgYZxSAkLsn8xFHFfhj7pCj97HyFzgoq4QzpTdJujyFQwvfrX9j8ubZ7q",
  "key24": "2YAD2aVmYB1ryk5K6J3fMmK5iRLmE9CGzkkE6BboFD5SAGUVrC8AW1Rdc9MGKTu7RDn9b11tA5hKW9LbCprDLJE2",
  "key25": "vFkWmud82RGp8Xom2vieg8XGEenQkDQ1Popas3rAcYgam1eCETqYDznDoAQQtT7Ju9Pz5DtbuiQVrdP6ae6v9mQ",
  "key26": "4HoFZhJMcizcPw79EBamEmrfD8ot1bfKSPjd5MoZZtakoTP1nR4PNZp1aKT4ezhSaD8CdtCJxNPsQ2uCKonYWyBo",
  "key27": "2fjTML9vSnHUNuJPRaAAB5RH2tscEqhchFo8sWZnwMCvnrvnRCfaL3JXF8pno691bNHjkBDQ7cchfdr8X4GNAdpm",
  "key28": "3G3a1h91RPvpAiknZMQf4i8dMjPYmweatw96pdtkW48ibdSoUjnW2w9aHJNvRQkyoRs8kvinErsSQ5oByH9mTyUc",
  "key29": "3VA6nAFVJHZgaqYmRSq3dvgbk3UPRGYDL9cWC3SFeMUmcEntYWWWbVNvjojWyLzstm7bngrCpxCW51uDfmTtZYWU",
  "key30": "5Aa3yfPnn89Xtys8ckGEx3bn6Zg1GkaGQzDtgwwmXXo2LiKQ4KenpdDG39bCML3MdPXDCLyZmdf3jQeddMuUM2Nh",
  "key31": "61JcPwbJ278aVZvs5a2m8sQHqbHj78Ge5YmAR9mPVDqusW6RKciVWLJiSFNnCgQcqSfeYh8cNfPWFrqnSboqEWQM",
  "key32": "Voeettfn8TGtjkxBj8b4VuUZ6uP7H3Sn8SZ6qhYg5qycg2MG1qUQTPcTDsaKWLdbW1h3BgTCLQWtcA65vZ7CVC1",
  "key33": "2EbGTjRyGqZgHZUY5vYQV3CQumwB3kx8DN3DvWaab98f33qM83LnEc59YiHnfw7DeKnXph6wxPBvAoKEUR2HJA6i",
  "key34": "3TnAEB2ihdJYnwFeT8MeLAo8U7jAprcZySX71RmYcen1E5otQ48C1ScmNhfGAYqyhhvHrx3pEoUZX4WaJKnTwBuS",
  "key35": "4mBzbgKZYtXCRryS4vAZAfdB27DziFx4Nggt5djzGKsixnCjmteb6i4sfwNwM3mrsazk9sSXEfUY5rD73vo8uMJr",
  "key36": "4jKPzijj9K9epFXU7mX89ZSQJTro8b9JsHhzQPL5r83EthvixUoYDKE6tFVV8JkDW7sWUmhiDiZfkDPBUUWUMiyC",
  "key37": "58yWRY3syAZcx587NkeuyZzykiz6qVagP37R9aPQCYQc4xpdGSz5r791HMnxX4LLUEePnbaR76wwz6sMtBAuJUEG",
  "key38": "2oi9DMBbxaLHt1tN8gQGxDJfEf6KsqT54WdPKBTQLZDwgB6gCimBbzR5vS3Rwqcex1LpUX9xxw5nj2CixvTrtMFZ",
  "key39": "4NALa2n4tdrP2kwJ9RNRucgfLnmYPXGgZW1HxCEGFLc4Rrzd3ZiBKe88qAxMRJPGANWAtGzAKi48JXxA512pEEUQ",
  "key40": "5RL3oh4wjuU4kbnJoUtPtDt6uZAFLRMFHkFUUBJ88ooS5eEQ4rtu3YZqPEb6MtqMtP7iBurpcetmd7Bkdy12prgR",
  "key41": "2JkukBLXcny3iNM1ieDdy6oeCwop8PHSDH5KwR58tsP1zwzRnN3RBKAVfmn9ez6RBHCE7WfmuiMQjmXjgjMDZQ9R",
  "key42": "QMpQmXLvyTVx6z68SKtYijhp49683g6NgP1bDG8RxRXVo2XKV9Rco31gzbSNK5VsYFWyh329RZXnvqtSfmNuPGo",
  "key43": "M9J2AP1rrptqnaYcjJhdcNrsRUhGqrth3Mk2JKuycsSp1KXjKfKKUXPZv4nwRWiiE4phWVEQgtquYZmZ55Tz9Tz",
  "key44": "3wuBxEUehQGMmQzetCaTG5akWvJXaL8KnMgmZb7SqekFQxirmFbUHpY2eHsqewF5tSfZGzvJmwvxfZr6nmMUmGoP",
  "key45": "5tJEwabw3DFJeERSrfGK1sPmp7S7oJGtztzdU1hzrUuKpV1HfLqaKxyH93tV6uB8MUzkFHhC5qh1R3GnLHKajboQ",
  "key46": "585tPiKz7jyX8aqGGVUUv8rR4XS73r2GUrqoAXAL4Hz5u5NJCD8f1jN7Q5zMykjsp1xZznsPczRfhwvRMvvGffJL",
  "key47": "3NXVvHngGQsnX1S95xC2krPet3NQZ3Wp5wfrQ1WwZW3eJBuYsKcGMj7MNAQK43ve8sBE1euJnP28sbRa9BZkh1S7"
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
