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
    "DEH4pN5o2BEGLKp5LoxD9MUwKmNgZVpPbhN3n1PfoW3KiSmKzJnGBKvn7BQKyJHT49ucFVatrW7tFGER9e5Q2Tt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nhEoNFM9rJAACgVKpBUvfieKanDc4QTrG2kMtpwZL73KfQyKte39Td6Mbh9KHAXjUHmaBhUERdVBgeocbX4pCYT",
  "key1": "2a3EwarMSxT1WiLyd3FDiU9dubdmqYfcxpekUPeGSJ9YphKb8FT3CCGfJEhGNiwoL1h4pQn1HyMhVKJJjGLtoPTA",
  "key2": "4eJrzwuVvTL4PTkzzTDdki9nTEud4GGaxprZnSALDn8s2Mr8bDMRDN3P4FCkEnFkNh8RrWTg3wSUZvq2Dxs5BW2k",
  "key3": "5VJht9D6VmsRQ8MUwo1nQt8uXNeDoDsiMKyzWmTwziDFPkdXujzYKJY4XZ1gt2fh8BEZs8VhSZYUdfkjZuhhbLzM",
  "key4": "3yZuaS13b7PnrMy7ysYi7Tm31fc8Rf5pYV5sUWsVJmEZpJerzrG9RtvNzjr1YkPgpzLVpdJRtVn6NR8uxoB418Ao",
  "key5": "5WvhnGx5QHGmnjkQiqyXqcyitZ1BQEiVwCJ8kLXdHPWtLQ5YTfBvJ1jASz4NVMWLrPBaJyBBxndiuUZY63p5p6rR",
  "key6": "46EdwTqPp47Ln3QPAYyjbNDS1RTBYJeG3KmP7cBqJ7VMomgguBy7dtAKHb112Q9jTjEZHcTgAmHS1T4J47ATuZKq",
  "key7": "5qDCeoze94fFnF4EDwePuUwH5nMLEiCFMNFaSBAuzAQZkEJLeHD1651F4NtS8tFCQ7Tn4eeN41KMEgb5YftyctFZ",
  "key8": "5jXf1KNVRYiEPvGjPzTsrXhmov8KTkBu8Zu7CEXobRnE7ikTMpqRXyqPutmnmv2HSFzCutNUX6oYHjAYr2pDzPu4",
  "key9": "4URrtbKCymrkzJQ4SPBrxya9Lusz4QHGsnwteRXSJwTW6eU1SRvHtzAbFM5rL3jyxJ2jFAvHdiTRRAmSh4x2HsdA",
  "key10": "3dWjYxQLN9LmmBDgF52cQNaDgUoYUUe7UDKf9zuvZBdMsykNuqSwuUwA1gxLCU3fBRuW3QoEPWPQB1kddw3H37jK",
  "key11": "3sKx1nBXDwAi1bALGnAJgdjr65zJgbxsCCZzdfqEenXUiBBuuizUNe4gYfnmjbkpnsejV46WtzbBzKFB8fH6QGZn",
  "key12": "3Viqn56s6KWU1Z778JWwfSSpQPY9wSFe9qiyjjuR1KJPtCNbazQ2fvjuXPEwhsP4u4TpUpuXpJjmgYFkwU3vh7bc",
  "key13": "5YMibgvxb5hh4NncSG6EBiBss7D6zqzPEXovqKEaPixc4dawNkYMADJxzGmAyvkRXxk5JAPMXr4UNsm2vbcg9J4Z",
  "key14": "2ugyxXjVXj388yEKrEkuiBcXp8YYawattrd3L48xYkLRUSVFgMsv6aHd7Bf2DFqim8F3fdWQ5RrqFRsjJkR1sWXL",
  "key15": "Ebz7dp4F73XE7eEsW42bBiZSD5RQFNbMp6tswoVarAXe4q7rhAqXetn1FpTRpDK78iMxNekSZpxBUhoYWAzFSTy",
  "key16": "2tn8pSh4AdZtxY1oTtEsKip9UXMwQiE3oXXzNYQKnWacteS8pT84xYZUCM9KZuL9xXy6kxMLGDBXfkp5kKYPVWTr",
  "key17": "2i3BrCpTvEoLe8vDLHq73Fcwf36ESxWdB5fFzSgEBEAxrDw4prdvxH9X1wtRmqSCJHaPyE9RhUDxpin1CdfzbNih",
  "key18": "J8SKDpV1ye6P4AKhrFDZAxJwLsidvdArYTdug4e917XbUP22nrSs5NF9tXpbjvByM6Q6ELBQruXmVPkgB2KFrER",
  "key19": "3RTa8bg5yN532CrerQTFf5uhYS9vU7g2DhiPqgmLQDfHewTyYrfne7RoHu5NXgZeKB4i18WQt7GXvqJP3sjHDBas",
  "key20": "4xbRmZCymbDaDzARTbmRTVrbhDNpjWTGFGiBNaYUKTAoGYvR7Acj3357wjgohmdTrAbLMhwA8tRpHxfGwU4mjScN",
  "key21": "2La3Lqoqjh1HW8RqXxyfdL1AvQCL1aA7WDdkRgf1phbysHv4DgGLrUmSEjbwRxA7ELnWqgZ4JXsTroE5xqifjWmV",
  "key22": "FAsPS6sJJBVxeJW2zE2Akkz6o5GGmHMPDr4Givy6KkPoCbLo9sFCyiQbCBGvmjupFz6QdiNne3W3RL6oHC5BCsW",
  "key23": "3b1rhBk8SUrSnkshgvLoEHvBFxsRLsw5dKdScWPb5QszG8kk6ii1a76PGcS6MSuk4LmS7KLEKebb7n7qtGPGofX8",
  "key24": "F6EkoseC4bkwCbBfXykrfvthipbPb2THdDpZYqFjEPCuJj7mB5jMFWwCDUqsy7WfE1QeUSLk2Ed3jxSuiHnXxhU",
  "key25": "58aVo6jSLy9yo9nKJzRV2qQku92WfBRaYB9HWcrYt4DyQ4pcH8EGzAgLSHhcdT9rGurvxiuNktb8Si1cWkuWhhXp",
  "key26": "c5bHFkLGCDYJpgs4G9is1Y1S4NmbY9wkKyYdYRjg4TUc39s6JW89ZBgb2cqtfd19aR26eygzYHat2Ct7JuZsAzd",
  "key27": "4VoiNp71dohmQK52uMMoHTZXhRCgMgbxNXaJKk1d5wLBNJihPZjV8YGG3Rdzd24gvC9FKR1rp24eAEyxfoAdD3s9",
  "key28": "3pBjH4DbDA9mp3BHHcPbe3823Mj4WNdZAc6VLJbNN2Pvto3Z7brAz5WrXzPcEmGfkiR3481Xzvw8dzi78xrtu7ta",
  "key29": "2K7RnYLGiMHNA2eyzcYjWdi7wVicebzKtMepsewvsmsDsP44GNh6SVbcGLmaCnhqKJ2teXwhDsc9CYfdB2cPqkZ6",
  "key30": "5yfmmEN9RAFanStUiH85NJ26Hd2KnyDrSkjVTu1VRAo6DThZzknA7jipfLLxX35DUhEpDCat9tAuBZjkp3TZaeMU",
  "key31": "9LyGZwLvYAE43Jd2uCtkSozCwGgxRZ6Wj9mWzqnuQvr8kkjYz3JQVUCqzMykvgUoRbGgfkV7yF4FfNP4nn8n4Q5",
  "key32": "2XLfSgScyhFPAJKb842fgdAFx8e7QnPPaZgQgorJBiBygDgnWQFHboFPQ8CDAUrTqnQCR8bfykT1YR7kg73GRD37",
  "key33": "3pfrAVyAwLW6H2WdTT6hUzQbhgiF8hnsLPC3TNiZJViLFsY52TA8rEbPTfkAAaz7fdEu6kRnma3v4uQpRCjCnK2w",
  "key34": "5seKMnZw9Y17uykQfbLs6EJUKbgT36vh5T5TdzF9NFFsZT3wz5qSVHChAqD5yE8vLjpd8Fkh8EYhuQYe3QteLWH5",
  "key35": "5Fd43FdQNJcSR1iVsieFUvzrwsQKHN57MyLWkV6TzqSwRXskvzTWSEaw9qATbayubgKVH3cqboBmKLN7hDBhwY93",
  "key36": "3M1qVGnckwFQUqshfhq82VvfdqhEn37o7y6caPssTD8nfWGN3TQxveJBntRvXJHCMpM6JECyAC6Xah66jDLcucEF",
  "key37": "66PP5atyz7C14VFQ6XP2fF7AUfEBnKTZQLtpEvxyqCmDdMpuswiXxvhansef4ueqjB5DDPntgPBQLjbsHBx28JCM",
  "key38": "3EsTisxfYyecHtByxn8Wvr7QobMXZkwgGWHqMtnhxs2LEUpHnTsvQd4kciL12tmZNBkYFq3rhUV63w5eX12yNmNS",
  "key39": "2yNiWBv8JESivLaUnx9mn67cYEU9ENPQuw3GFtLQpyCe9hszhRN1kdu94sYkjujqzf8fPWN2o4isubVG2amsdRv5",
  "key40": "5ftgMEmpzPWehrRTNzGxSNZG3WsSmTKTWGm2auPU18YSAbC2nDZkRQi2KexdYaVXioC2pEHa4J7N6nAkhvYVTm7c",
  "key41": "5YKGLsR7QwHCKUfvzfWUky51MTCvP7uJtfinX3FKazLh52NpeHe26zQWLJeEfHtWHjmw7GD5aPL7qB52wPN8A2hA",
  "key42": "4B9N34UcMTNMANTyhaLajDPQFFhwQrzS8LZ3y2b1qFeW5sJv6xUyT4tvtBuLscZb2HdzwcWzgnPasPLbfn3BzHhZ",
  "key43": "2f5Rsj46GkfT7pd5McjfZjZuyZMZsm8vYBau3F6eqyMQp9gbtmu6G1m8mgpNx1dx5tVPtqfbkfgyPtDkH3VjTsVY"
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
