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
    "4C6Po8ahypVJnQHWDjkfH1U917qU3iqfuFVuTRjSZFBNdB2gNH6QHQdDDC5PaXcEbXHrtFzVBEk42E9JVEUkmemq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jKr2pGgSd6Ptqx4q1tmQXuUkkLSWftMQJN4hMBsiWfMXp3xXSnuBWbNLq62hhq8ZSDLNWCfBKSh7HyQBwYe7N8q",
  "key1": "3RpGXSWorvd1Fk6yiLb1yZD6oyt1TwCvEj1xfa7GnyXMwT27GkG8zToXhJwL4c5oo7sfUWha6UymNkYMJDouYpZe",
  "key2": "5xEQskfCNgUtbWRUCgS26PRCRixC9w7FSscDpg9a7PCVzJxaks2RD6HRobfXRKnzUcSJZYZNEAvqkRXnawMh1Y7x",
  "key3": "4ixkVTv6M1Bd9r8Fpc7DogLocLUnBA6QTHxFkKHmvHC1FkggmkpJt63xmijz5yfU57BwAQ92Uw9FkJPTN9BdGD8C",
  "key4": "4cDEcP7St4iLzgHRWn3WEpXWoRxFK3YNUFbyWXa73rGT2ouX7ViKGmrRW9tjngnjbsMdh3rH2K2iuzuf8brCofV7",
  "key5": "5tn4ELt6kqkmkdZb9zTtaf2MEaRU6twstCT37SzwJzgYUWZRePaLBtYFrhmG5crXXaSWQtwQPr8n6wVdgL4JyndS",
  "key6": "41tTE3wDjSWbP2wqA9dNKMgEqrXscFUPR7txsZuiGdeAcYiYPtxsW7wSK94178HwGUFKCcphJerzY7BQG59GXs1j",
  "key7": "2dR4hiP6ccfuddVzVmnA3DvZDFyTUHcGPUnvH94o5kD1Z9wsh3EdEh1HDHwBVX9SkbzUWX6FEQ8NVFCaxwjpKtz3",
  "key8": "4cigCgvyhcJzyhGo8Y5GeZ5q2NCYd5vHLxQdACy75EPhVkrg27xkSqCKqbptoyaQC1yNZDNjSwEucTRcT9tUY3HP",
  "key9": "357ZCmis9LiB6jCULPEMoG6YdNFffwBiGuT8XJbasu3416x8xKnd9WsoZmCZJkN1S5qKhhyyu33pLmJxmKNiTpkw",
  "key10": "2tQ1BfPQx1Q2Gw2wYDiyAb2fiXMa2HVHqCUCBdpzz7TD4PisjQwBg7euNANjJoe8jmX3QCBZsizZtdbBJ4X61hBQ",
  "key11": "425wKcjcB932ER92Voug8PGytGU6S9DnP13JnPPf43a3uNV96k2iPbH6ypduF5Mfw5dEeLhfWXxCS5tdhb6BMFKL",
  "key12": "3Hvr3m5WbpCdMZR1ZedHtxEYjPEaWkNcCRFQwQt9fcicJFp6Dg8ep4gWJCbhdSpKaJPjMsTU7pmvpSnVezzDwftc",
  "key13": "5xryMQzKcZYDBq8SNt3p8eE1XThYcGU8etjhNqcSmgXYWbhyMJdwtF2XfJxwpPoqogG4bMMt1jMKRzqncncoR287",
  "key14": "4CjvgpywJFPYZtnmk6pkrrUGzwxLaLaZpgR1cdggRKnTSnMNLZJ2oLFNAfuWhMTn7cx2WR6oRF6TXtXDkpE8kwEf",
  "key15": "4XuHQqisJ71q6GUeKxzHNVsuxe95DyQFM6wZ285ruccxsTq16PwtsLq9UQHU1PEBXX14UKBDkv3ZPKmu12Kzkkhy",
  "key16": "4U3Pd7Ua8nJszML6gHLqY9wWbEoAWEKuKKWrnnqZpLumw9XX7g12GEP5dPaMCLvhibUYTRBK5YFg7EnSsGoZ34Dg",
  "key17": "3bPimdJAxpxACocEjp2zX15EaLuojrsA3gufJ6NfuREmakxXs9sAka9K8M8uS4Br8L2wkgYzH6vLhJTtbMnANXdt",
  "key18": "4STTnGvmUWEJHeqmtF3EWTR24LnoCgEHvDFZmZqncMgRE1dFA9VsaYwAgrVY7X6zds3w1qrQnDsfYtiGA8AA8eyW",
  "key19": "3JD97eqVAW13fYsJQg7zZbUepmXZK6R9pukhrChpRKYJAKhDV17MDAcuqnSv3vB37MpU3use1ABXpdzBegdehN8s",
  "key20": "5BkyfrAtbf6KCa1zBwhoAAn2tLdtiG9enSokkzBH4nYfpYtrX3q8mw6TY6D7DTsEuQa1r64xUaSX86iFkD4PMJJy",
  "key21": "4F9GMExzhsQif4DPLbFbT8ZsSYSWvEZajj7ywhaVUTRR5uSckn26UtoMZNQW3MqNaxAjZ56BRAsWTqSuwGrR4Jyw",
  "key22": "ria7v2eLadWnMPDLFvnTN5CoupNrsY1sswHqo3pKxqMsr1yGrmPikkmxLunaKefmFzLW3r7sZ1nFCMSYsC31VjR",
  "key23": "5x4dhhUznMfmJWzLkT5umaPfNDUNnyejm9EmPcmhAVLPqD9xesSJjp6EKQe6d5SGHCXS6xamhaVSxwmkvjU6K9MD",
  "key24": "2NtA1CQt5TMnXn4NuJzdJmmEqLyucTT5siEHJbF71qNuFQ6kBk9zkdCkBi6QNGL7dvSHp1qZAeHGLTPbXJMSBPvc",
  "key25": "wpwrxLHJJyfrqph3qjx4yrUX6jcKwUuZY8LN4nqBUSC2gqDWs3VeDHRqAv57PeLzr56tvnRo3dty1SGg5ztkvmp",
  "key26": "3V7ECiXs9JrLttt1GL4dfYBYcmHng3Hao7MGx7hQrAApvDTgpHDATDZUjnJpSuY6oJLAhN1gexqCtAjuLWAa4M48",
  "key27": "4LUgbdaXeWBUeMwhgR7UmX4ZmmC3VEStkBi2Uf5UbGrneBFqbcUYuSG9XVHMpvi8ErxzeCRNL4Nozsn4VpWaDpWf",
  "key28": "N9dbR4SzdUyqWKA3vQWtwZXbEgbVm8GM76A55T1vKcCnSXPQeNpZqGxxuoWnUKFHj5RSZXydT1KCFcT5dTzRpam",
  "key29": "2ej5tdWuyotgProzZXVM9ZwMgQRFZ3yLyyEPSDsadzNvVSi5k7KxVEpNoRX9nDK8K6TbzA3AW4YZ9uXZLjRvuK3P",
  "key30": "cgPiXjknf9WXDFZEasQEhB4M8c4pGvTPKC5RoxQV7U2FWa1jbZRHZ1u9TajgenzdJfz2T6U4Qgi4uhYdApUsgzv",
  "key31": "4TJDkBr6GjE7C9JCHcF53d93UCgzeUdf49Sjgo3ZTwUrgHQynS9uqRwhBo1EpmprTaLNxvXRpPokHr6KkQnWzjWD",
  "key32": "4e1qZE3NKNhcxQiTzgrYNPHmK7eFEuxmiS53VWsUNeErJbnXafr4hYsTnPLrvrngWD8pSMLWk2PK9EuPqba81yNs",
  "key33": "4QH6VAdkqm4GnDKrUQJNetAX7i1iiLswtYyjCun7dbPiv67PT4quJiSesQ6AhGgBpMx3EBSkS7oBeH6oDUPaVPU8",
  "key34": "4toiBiyCazQkvLUqCGHx531RTcGuzN4PUCfUndeBWtdUFmJX5iKfg1SBR9vPkFpvVo72PJbuG5bCstj8wcfABatP",
  "key35": "hWxu4UAFjW9ZUVDkp6CS1ksEEh4Jew4hSGbzFt9fn8W5zpf84XhvSssXz8d5pDkDoNxvYMvvZrCYb4WS9b2NJPk",
  "key36": "36FUZLc8JEQwdnKPMLSk5a3WdkfwZa2EdUrLVS2Y8hWtsyYKKUk2woeAJYWR28DEajP4qvjUL3VZqwhH21JPMU8f",
  "key37": "66FfTuTeh8iMMzqrYjYCA21uMtARpLMrsoj1JC9a6sAckjTRQCnmiMK2sVPfKWiakJiKFwCoua6am3CbV7xjVCZb",
  "key38": "3SGiSZWsMda4VzoEZ6sq5BUYmYR69PfvqereLMw5aFbduP7wXRHgCatMxpSV7GvzxGKHizEgq1z4PDAHyj3ae3pP",
  "key39": "31Wi5E2H4XjnNRUFsPJiPXHRBTVU1MRMfkaH888R7TmrEKzJBtizXqHSjcP8hpTwXJjASvpQ5frurzPW11pwL4fc",
  "key40": "E4cqXgSx5gSzToejcbMwu5RQQz4cJaiGs4FwDRBZXzdVtTvcMhmRKvv915mG8AiNiADj9GDbM6MFgMGL4yVU89V",
  "key41": "3kyDzYGoNhy8QbnKLpTJJoN9H2tKXgkZcoQ4Tc56tCAqxsHeYpPgKM2JM5kTzKQiJKCtptMaFEcXGsESG7ejJ7B1",
  "key42": "33SQkwaBzVZrmkh1ySQWXRyZwKAd8xLAuNbQoEcWhUa9Gn1bmy2rSzFYHiZye6J2nDZSBn5gXtomZxovf5PGkVem",
  "key43": "2wvkepfRwRid3Sz9RwAF35A7kfAQHZp2btZ2yVdFicKFCKVWof8RRikNrudKEXdYjJeAh4Hmss6i2cnvLnrEinvd"
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
