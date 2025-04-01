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
    "281iHxH6FfxJ7tKifFsxeGa9oYxo4DS3RK5GSKDsPFEoBJp5XqwhKvRbeFENZNuDyzaqEuM9vfcQ63627C43eXTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38snT9oJssUbtoZfzqzqWrjhHtLyA9Zh4CCYr8QmHbVefEMVwyC7yTwQ8ChCkihBLJgsNyMHSByCYsFixUJTfuKx",
  "key1": "augw8GvHMo16hKJRjmGnLt8JvDW2ZcxbxJfEZCmsbG1dBGm2xpvGUEnjnz6pgBY5RxXZaKxgZVgN79z2RHcKCQw",
  "key2": "1YQfkRDLCXonhRg5Jqhs3KkKkqDNT14US3eoPA5eQiPix1tDD6D11KhDCft1fZDt1v4hQuazzwVw7VVevVr2Kyy",
  "key3": "wN6LVUiQt871oejiHnFbhDfPEJxmqy2Enf3Bdpq9Q6JyorxxVLXrm7N9wL1bkHd14QRR8rhEMoi1sSLZuz7B5Ek",
  "key4": "26iVQbFTwcJ2nQBGJdXXQf5K8UQp3wPtSL4qbXHXYt2eiWWxfMN1x8FEUcSUDuUiUzcgJrfY68dn8T9YUxfHhEUM",
  "key5": "3sZuzYVhoVf9NJsbdq92MBTnQ38du2255brfQDDNjuj2EARnVoxG1nr5dSYYRpV11htJASAue8BtTV5booqLGuNU",
  "key6": "4bEA8cK47vDfywFNEoWNBXcZqxKq744ZLkpjGSNSie1QhK13eqsARPhXuTTwrX8VFVvhyEEbNxLRgAtfLWq48U5Y",
  "key7": "onN3HkR7UAsvijT4aoE8uw6aTiCYnH5QAXFzFzCh6o78vmHQ2Tck2eXQ3e2WzFCCURDexXnUMcVHRShYrX5veQY",
  "key8": "2Q24teMwXRuWm6ZEUjYM2S9TQMSreGnZbZpLcpGjtapQhxVASFDFpvMGNCNKe13Nvq2Ad2EJiR2dCUe3JJ1jhZ2s",
  "key9": "3pfdMUGg6uTdou7Nf5YPgosFHoZqnC7yU9i6La5RgFkWWiyVM9yrAFZBFdHjAWUtbFDvQXXqoGXux36c6orDQTmH",
  "key10": "3PxEWE7KeHAffyo8S5TtrwP8VieyfD9Qa1YzzJfk8fgtTkn9cFJ7EGQDDvnxWdMduY4mrK9acCyvfH1HGYq3Bunv",
  "key11": "45i4kS13haDSKHCgxA8hvJLEURRYtVE5WNqao7UGtAhtPsjbfW7ZUG2jYAwBhq99DLhLNn9bDXYsecs6Mofx7x6H",
  "key12": "q4AuPbrFkHorrBtBDCBMHXwUE9xqMH9ksApsCdQC1Z9VPcYaPAirUURn5sa8KkYfnpM3kAhza9ScJKgF8hnDicD",
  "key13": "2piNVB4Yyre8oysMiex23dcvy4TxF5peFEFSHpikbKQ3FSwPJCPkupbXBW9bZmfPoJA9sCuFzkA5WEFGmpdRzbFw",
  "key14": "3Hupureu31JJHPeBhShQHqQsQfW9oEPYdPJyXFGKWAvbjpdUZ7Az83RYfZWSBtUcaS3LpGJ3ZipPeqTDXq6Lyumt",
  "key15": "2XdBS2QffStygirrsLfdiABbVxyDyiWBidngwpkD5AjfJxUPDRvNcQaYcJGC7YS4nowKZbagyk1C4VS6rdurPgF",
  "key16": "321LYdJNUwtBnHY4vmJaCspKA5LG7EZV8cJCtfNMahjaAXW89fxDfXZ1FYCWk2vMqaaagdbKfE7avKEva3pnFz5g",
  "key17": "2p219ZXsiL5x94qFA1KHaWUhq9CcCKDmm4ToGjUQFnidpPpx8RPRjgPZMohHPakSTz4iEPsekoArVppMf2CZpAia",
  "key18": "5ZdWEvHqL8GgbXAjc4j8TXV2PkExb1RRjkJqNdhp1tDA93nTk9bS6coLGvrBpoFTiUjbhgN3zzgDXiziWYfaxK2p",
  "key19": "4B176k3X6tW8y826Bz6EpbXhSnFNMvqqX9fkRMyqiMwWFHDigayia5svpY6FbkVqfZmvGRkbyCHM2WvexraujCMy",
  "key20": "4zkUqnQa6hHzvnMPp3kqC6PYme8PwTYWhA8m1Cs4i8WmRG95x7QcQBYybZgm882fYqRwgh4yAwGNqyeGwfZmAtXu",
  "key21": "3d9Hy47nTr4kQk772rbBUMQVe2i4vsVMTqXWNLu2ukjTbR3ekh9Getv11NH5ct26eJVcqYtnuRRSeeaYfcw9Dv4Q",
  "key22": "3keDRKnLvFpN4K9TiB2L66Sc6PZLHyjeUE4Bn1gGzykKY198jtGbC3HujZGqTcj98raTXkWrjR2GfxiuXB2gRWwv",
  "key23": "4m2pW5hDBEzxTPGeSXHo38Mae3FcPXXZKcFjUxXVsJK7mP9u2aSXHPppdKWcEE7J2ZADK4ysnWNMzzcyAq4ZHqMU",
  "key24": "29wZvZHVrR3DiMPqiHpUNaDcUbqWjpexfUHkHze7Fc3PMiKzAeZkypGxej8nxt9cheUJwA7MYZaAtjgGQukrrcvp",
  "key25": "5tQZzYYHtirMc3Q1TN3KQKc7CsGqz36gbf5FJT5xqYgxhJveTQ7R2CHNhHho6rfhj3XfSUHDmopU82Q2wT8TFh9n",
  "key26": "2NcRh4QuDo5FssgeofZhu4XS2x6pdmomLgpVH5c3exbsY9QhZnnvL6rwa9G2hvy9YcXxaaoL11c2ENyS1d3iQgEt",
  "key27": "3mdbn7C8NKdgf5KFTqcdXVQKSqSBqQ66KLiyt6ZwqThnnzbvUAHY6NCTGRixnxfFXSSBqXqqZxTJdsq4TmeAT9eg",
  "key28": "3JrNqeyRivJBbrYU23d41tNTWP56BvG6NxpyDB7Em4DpU6sAFSA2qULA1qUta56RCevuzaW36qJvmWXYdNnWDc83",
  "key29": "2SSkX5WqxutDB4C8R6b9N4NuEX6RgaFV7phrNaEnADitNLc7kfo4UmSPN8WqWB2yAW7Wf8TjHqKLo5Hd65TC2RRe",
  "key30": "2iYchvss3228QBou4aEvj5wzbo2d9t75EYPLZZU4QoiYaRx3Ds1bc3UtJ4CPzg4VTsnUcfZSPDwbzCAMLUmheZ2U",
  "key31": "RKTXmc13JqeVgmAtikHCswUMKVb3WYtcsmJ7b3GAyGhsn2CmN5H5CfRZoKNSNicYMie3q873aKGzyuPFJRiML1Y",
  "key32": "cC9E3X6B14s65jxMzkRiwreizmy3TVtESTqxN3SwjkkVWwDDpURjabFSe41Koi629iuhWmgzujpKXfbJyPzyncy",
  "key33": "32fyXdskko13pyTPRm3JYGkvStr61QZbcrQYhYobjHdhBJkfYUWEeUKVXvjMBmMDeBug7R3FZJ1eNhiqkGpkYL97",
  "key34": "2VZRR3J9fPBBNVgaQPzysTdFNgf5oh7xNGG7r8ZMkcrkrFwHGDDZ7KiBDTYSUbcpZzV5VZ3CprAGUcXtdeSrGCRM",
  "key35": "2X46YeU56mKvfraafXG7VugJ9WZ1yMwaL8S3V2aXYLtYeLocEmUQwGshfcAeY4txa7NaAttMCpyLBRHyCx8iZfUK",
  "key36": "JoA4gP5xeoWmgb2e4ZzVUs7q4D9e5XvShoRNcSckTe7CPUG34hZP6iSnmhTsWsRf7jBM7HN9vCAD4G14Ejgt2A4",
  "key37": "5E6LXsDMn3VU8zW9E9oh3eE8gHKRuyDNQe1YRoR6cBqdirAq8rRwFcJisZy4FDdYRfcmACijzDZrVrbzCA3gHqsS",
  "key38": "2oWYf54z5LwCsGcGtKNX3rf39cvTxdYDBmu8EGUsm6obmnazK3XovCVtCgW9Xufv3KAtQwEWaaBHuQ5MmSQ8TG88",
  "key39": "613UpmBdxtoiJXgYW1kcG7dSgPNjRFfYrmvQiXrVi59Etbh4Lf4D6TQR5mZrdwadDyBmr2vtzXmzfveoVy99yUPK",
  "key40": "9ChzGDvVQD13PZSn3LLrW16SP5FStyvpd4ZHWZAmqJDsLTCr1BUB3GsmZzmo3tmu7wCVetnQgXAybbaBnfsmT7H",
  "key41": "ff6DctigEfYp6ARKTtJdDt9798HT1CPbSkVndV6R1Wg5uYNXdnQt9jMondHphhgYsW9UZVTLRLg3EkVvARSCBmn",
  "key42": "5TQt9N2hVPVkqAtJbnBJXW27NCN2efaT814PSVAbzxtyTmy2hiJ4CUBCxei29S57cyspvUGzscQ8S6JUp4eDF87f",
  "key43": "2ezLWzbwSZkYJEviEmKVaqkb6PHYSXebxyadvxaJhetkyetjvvENEHfntWZriF3EWBYueoLmbPGrQnTWDv83ieHE",
  "key44": "a7uoEwJRDyorZpdQmNsJX9NSKKzCbZtT8jSSjMEi9fhE9E2DHayWbRrnVaJsF8grsxkVvBBNdmsZhkMmVK6xJL3",
  "key45": "2HLbwjVijSQHDPW3SnGrsSqWkBQVbQSXUFgtTw9iR4AqxJvcdhiUa6LdXrf1qZ3VTGpiKJgVZobBi9EwxPFUXeyR"
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
