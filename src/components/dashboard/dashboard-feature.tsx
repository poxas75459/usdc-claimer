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
    "5ADFCWL3eNip4F9VReNWaN8PZAfhhwrYSDVrXdLUhD5X4apGqSYJBwkHmbtmtkzGTciACBduAan9QESwgDCq6LHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62kL9YAMhx5zpnEMjAadXXzYuH4VaPpuhQTx6uN2RHA8ydD7RHavqdMma68qbN8o5e32sLj782WeH8Aen1s3pZ2F",
  "key1": "5AcRH3wbpfW9o2MDhcQj53yjvgGZqxj553spocg5ktiJ72NtGcuEjhdfiEc9URfNpJqw9ax42ZZw7ou2E8FpWo9k",
  "key2": "5EUSFmnydt69mPz4vJQiVzycN11zh5fjdqesizrN4PMjjwEjthUoahsQ5cmfYE1zRdoScPt7mA1HKtjtUNPt5aLY",
  "key3": "4vC4nCwubGd7EebhXyMMUxB39kZWipDVjeKsyyv4oJL5R3pQps3qK5hxuuCTCBDKSqdVLHvk77dcHZbqN7rfMhAy",
  "key4": "5PRyMJ1CKi6QMoT2N2meB6AbhkzmptRSrzsPt9mFGGEymEfuTEtHXbbm9FwRYsa9Tf7Actdc7tprEoKUXfeEWmoT",
  "key5": "iWL9HtXfqTDRkrmC1VzAKjM5EAL5f4fj5pVHd5WzzHLefcySYvFaqknzrF1HA4tNcnNvkp6nmtviEhZiimwwWZX",
  "key6": "3iV9aHGEQTUUVRj5pCRamM6vopR5DR81hzv1rv9dTCpwceFuR8cdEDJ6rw43A96XrWAa8xKUjbt17SxcHG9bbbF8",
  "key7": "5ugW2pyW6btHMmS8ncxynjafrGQf454PgzQTsE2VuQid14iVQyA1CTEzyBwxy4w6WogvZdLXbWLFNsG1wLzWLzHC",
  "key8": "5GeFJpZv7AKF6EwLxFfLQpwQSUqgVt7hYjYtGqCvoLGiEdD8djCSbJiGmtajC66FZruqexzpaJ7ZdujifMj8cnUV",
  "key9": "5JED7PwRL37LyTmPVX2SihmZhdXbNvWUvqDN9PUcZ8SUCGuntb3mXnrbKAGP4rTqtHeV33mQuqnZKgZ8XG1mt3wd",
  "key10": "RyhMJRMJoYWvSp5VEk8RMWJBW3QNVm155mb9gGsxC3fS18ozz37s4JNFxc9VGQjimFtxK3HbJiPfS4cuXDrYNQ7",
  "key11": "4U3ZS4fkzYzt38AiyZe4ooMfTJp6QLUsSx14ZCBHhK4Fsrw3WUjwo9gpNLtV6ZLjf3b56MPs6Fco3eodcytVveLx",
  "key12": "4W1XaMsq6wJCENcoWGXoPjTVHjY7mpVUeJFJNfGWjX38YeoSX2ex5H7RMafKUtXxTV8QbT4x1eE4VRnLHcBvAWC7",
  "key13": "37WqEVQFyLRZgpq67YYjwUJ2SrSnE7wUKv9fiing5KEAbEP8Suz6rLjFprj4N92Wd39MjuPTeg4fz75o7Hu4p75B",
  "key14": "5Va1wXT46xfSroMSUbLBUDnEp1txqB4JzwCtSsnnhkBGDRMVqJdSsT4FNmH8hJNGLfQPCqRFtRwKHMzioQ2jXsa9",
  "key15": "2pj7koGM43a1QVk4yy26NFCouRH4eSmTmcHvahSoYwsehLyNTfWFgpxxSuahMHmxmXkYdWAkL1M287Bn5XN19DH2",
  "key16": "PEXqX6hxkdHzJRbBszRci4q9LSA6F5KY6rkKRnnWKL72WVEA2iyghMoMdHdBvTCehPmeNMnKAN3vbjNja7WzkPk",
  "key17": "2vcJdQSUuYMowfbTWs734ZbaYsvjgVMQMhEQXP7hVsdVV4xFgiwm5qfADAc26ULpz6VNjVJFG5dwKzYH4A8CLgB4",
  "key18": "4WnvVnop1qBhg9MUkB7QPREbVU1jdvGNcTQgiH6y5hAueia4AhwuN1RAurXzfvosSTL5xr2n9UNCRXHDjkP7Synn",
  "key19": "2ANhTRsnnPFq6YUjCXaNgafaz3PyKWnxYF19weyCQeFn3Y7ERkjCaeU6FFv3zoRi9dATueY8xNsXn4an8Xj8of6P",
  "key20": "5UuUgBVwkUpXTGWfC45VYRZidZBKXxNVsjbbgypSS36oFJDwQF3kQ3rDoEg35kxoUPrzYKPBmD1A2EDrN7rqU9tu",
  "key21": "4Prm9oUgrssGi5AaeaHtfGjHZZpHZnzfy3NkNfBwuzg3gX1tRGVxJBvqBdC4h9DLTMMd7cpXbRt8hfSPXeGz2q6Z",
  "key22": "yEhG1vjN3eNADv5U9FeoCALVzU98yxGmB9TpEVkiLJoXrCpKU4iV9H7U5Etxdu5tj3SLLzqwXjf81xAgf9Tw4PY",
  "key23": "2j1sb4Gne4X1nf45eKbp4rMh2u4UWC29o9VuFZ6g1usHyz6h4TGXDcNeSBrBprsQYSd98uMstphUyWdhTsdBGiqR",
  "key24": "Z7TPcH7mWqNfJbXcw3nY1tyR9LwbtrmtokRYJ5RXTv4iGdSzmiEGE23aGufSgHnGwPw2AXc8XAMX1Q3ECgi6ZwK",
  "key25": "2HKUHnaUp82idHy2PGqMSXN5vHPVUp8QA63C7LEiQUkqL6iASYdp7JNqJZEgSDcRyGWzn8zmLmhNkX9U5sSc7KWA",
  "key26": "5tyz2Ub22pQdwJaAGmBf7CHDwk1DAGF3NSWX3P7ERDAny4h3YLQvJcUC4VJKdrBjDk2H6sDqnzas4Lzb9iBFggkW",
  "key27": "37RHCewBzDA68UWxVNbrhA29LbyJQoFQZxKowGhNonPGczANbSMUYysojKMA9L19RPtbfF68Sa7ETYBqV3t9AVEo",
  "key28": "2TuWA67LwrBKpeDTtaqd6Qxd3EuAE9La6EqnNpyhvYC3vbVDWvyx5E2Fvqkn3pekFGWK1evK7BWDAVVDqozfZwiu",
  "key29": "3dNuqrEC779LbnEeZDfGUCqEVFmZiamco6vFFVTaWvub58GLCkaaCq3LGGP7XrypeoeMNgaU7yjJw74Uw4iXh8Tp",
  "key30": "3PDxPF9bjL8aKkaS4qyTwHqHgCFYBmFLuRyqYCLDv2CLdFUfTeCqFJpPkuykRTqiTNPQmw8L7oovbtQxN7YTFmUw",
  "key31": "3gpe32rgqG7vrzgj5g3P4uemS2aFLpBRaaueigaYKrHMqjPm1TbkSbBc6dfDXZUznuuoNo9ynFPqmJoKWMsLstoe",
  "key32": "5jwPY8sUEXw3147fPG55jEtB9X3dwDm9VJsQqkrnc6eZenHhf2g2qcYiR6oEBYw7uFxSMmaxaFHCfNkQCarFjud9",
  "key33": "66eZ99KkTamRMU52fucP8oFyBBSeDKFcEQC4jKUFhtZZ2c81hxguCzhaVpphsZG5okndcytmRaxW8qZpx1iP2JVu",
  "key34": "tnUGHz3vXWVtC6TfMFpahPrUULB4mdohD2wwm8JrrDnYGyPJb91cH61r2DNmgvvJWeMDAFtyGymR6ayUu8WtEjm",
  "key35": "48h1K4kMmoc94JPG4sxBonkrBG9Bvpq5FiANH51k5dnSk9ZSnyTfL7QzkPtqEpKmZCCQ4kmUiRFmDeC1MHYo6PVv",
  "key36": "4CzcwB4F8bzj6QsnCzxjFbqhT2zibadJEf9AebvT7DunRQYkNLjGS463YiuVU6CEnYMcbMd5Z1TTMaChTZB9De5A",
  "key37": "3ph2D7TZ1VFH2EKeeZs5g1WAx5ddmXUmmYUXQeZFkLrv8zgNtn5PYGzcbtWEPNKDbYY2xahNsMGd5pHRLG2jRTer",
  "key38": "4Bmqa8c5GQb5MANwjXT6WuucD5oMX2Q9NV7qgLG1RtJAGcreTyVzcvckyosCt9iA6zfymw4oD3QEwF8E3PYvmKX9",
  "key39": "4eEAxuMnFqm7ZerdPLRJkHU6B3fSDcZ4yjHK8NvjPY2BFoR3kMKP48dAuRFk9XN2QFD9J7mzVRFBDcUEtigLb7cH",
  "key40": "4CeaNyAuStCdpDMTPceLbJGh3bd9VoYuaGSkSS2eneCHRXNfdsvUnFJsG4swKr1NTSgvfc1Lm8n5pFye4iGCd4Wb",
  "key41": "5nYVG9Vo2vB5gPoqcgP9V4piDbB26hihZC35aaKzxi1c9dJRFfBG8jFWYfuTbNyrqxYQRELeaCsKRuGX44Vhwg3G",
  "key42": "5M8iVGnUhvAPoXz6CW6rS6Y1RekBWj9ckhkya8zJVj6NBTNrqrxhmvMD5q1Qai3NWXRtX4AsJfHsmRBvETqnTu4N",
  "key43": "4kHMUQcdHFoVKbEbXFeefC8CyXLYuECH58DbBFg7Gy3Mz8E2ntjzpczPKi1benRbXVpNEB6DSsUBckZYmyoXcuz8",
  "key44": "52cTZwU5iXaGXryX7wMHt2WJK8taYVUE1ZvAP86B12PsSLoBiX4Paa7PStVLbCKPnsjLJ1ZWnu1qBrwyDSt8PTY5",
  "key45": "5MDcNb3CvqFFcrEHBv8kNv6jvUfzsBeYLoC614yGPwu7KbgnAvRC4GnVZaex61GXcbLZy4N2L29csHTee6rmzioc"
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
