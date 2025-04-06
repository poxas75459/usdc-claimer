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
    "2XBNacKbtGxSQo47P3w585GZtTbWsLCXZQRcz9j5jSacnTyKwtbe97fDgrS8uhZ2vswZQmenY6iK5c75oxLkJM4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z8YCP633dKytqvi2rr7kquuNCt7y4mUgU1tge7Rdhr8KrmLngkG76rmXYnCP8dUcHj1hrobdWieMyEL9NejgXdX",
  "key1": "2SGqemiTvjD5Tc1dG14QAeFASXMaYCKHdbrcRfQWPDUWjRvapLGvtATeyZa156GKMQY6qDb2HT5x8YpNmvjhgrxF",
  "key2": "5mAB5iXM8j9Sj6rBzzqNoaVVbnh6RvqSNpXjXT3pdECbT51sGL1hKqExVx7LfQWcKNq7iZQXretcq1BXVJhB31T7",
  "key3": "31bBzMtnpR6uQf8j4YzUHvGqnUaRGmu6yWupqBjaDoiwZE856ufiB4exgyXSSQbTmDqsQ8yGba2Y7sYQDkGo4LDm",
  "key4": "3gnzFa9pWitzpXP6cgbnRK8dWT9sLwgJT1S3pqwZHJQrqofrZaJgmFLYDbgJUXkLwn4U96gwPWzfvLf45DdZgLhd",
  "key5": "DebTpCvQxuMrHVQtnMPQ6ZmwJfCie8sBbcNUgafjRdr7eK3b7o3BdVjHc4VjGr9WyUU4SiPaedCbFtf66vE5x5p",
  "key6": "4Syg976Wg6oGWpytz2uS6xoXSQaJzcUUUJEe9aKg8qabaQJojugoczPR8VVCURgffB2nzk761gvSCnarbyyjtpw7",
  "key7": "3XpfWZyG21b1wUpWyENdFjEiPP7JuFMDzZ7q6JbHhg9hUvGh8H7zwQs859Z8uGmeXkzcyuPqXAPpqPx6uv3hnESf",
  "key8": "zh2E79kCa9qUA65o9awUKypECEhLrTAbWDtyPgQ67nmE591bwLa71yhYBRnqdfLXEC879QGNbGh1FZMWrrPFJSM",
  "key9": "2QRSo6VZYqFfD6ceS7b3SGVnbswqcbdqedTQJ49qDM76BpdchE2eXaQXjvLbmz29wMLZKVwqC45fdfwnpZBorSYe",
  "key10": "3CRe3XeU1JzERK3jpitSydn5rT562b5TphrhepMTdMkUsZsNvM4bFJQtAnkmv6PeWcRLXiQDXfu4rJ8XLooTqxs2",
  "key11": "N1mJKtGY265Qb5w2L4thcftBk9LaBPFqG2FVFRtNA4j5tdpBpCF5G2bc2eguNskJdoUdk31M76APkem4VEpywnx",
  "key12": "3TZ2RxVc3531Smste5nHeqxHemuaWxA54zZCNxqZGA4zjVSX32foHye3H96HcnukMV3AEnDoYkBZ6mbSQmnb51Th",
  "key13": "5V25cVS8z4KwGshyRqRyiSs4arNgCfgLGGJE3qURK8TzeEhN2p59N9Ete52Vb8tSS3WHgMiJha6RGh52E6EaKw9n",
  "key14": "LCdyMbNT49AXNZRYGqKKfyBrz4PAmikMUkQvsfqGG33fdgREABMMLmLA1YMgmJmNYTHmJBFHDgtm1GuGUdCKY5K",
  "key15": "vvVqYdLAm1zLEjZHpCR535RXjPW6iSNPFv66V3c3LMLHMWMzXLgtjpLg2GS6avoq44Kcoged57FSyq1GbH2eEte",
  "key16": "5dn97PP3xGs35KdRev3T2oscK9DXwGXgQouLMmfxFDhc47ENPhuJ4XLsaf2p9KM3gwL23FF19X9BfcwWjK9P1YZX",
  "key17": "3CAnpjiNtWmbhetVrTMN6mB2YyyypTW4zfnWYxXy8cW1HjXVD36u2yFtW61UVUQ2tV9Wxr522Cg7YAFDGNtoXhvD",
  "key18": "5PmJqa8Z7CEMizqZRGPtativmRdjJ4sVxPX32kykJDPbS7YRTRSXvikTtAMo9dPDnQwVqjq2Ug4p9z5LRaNepNpD",
  "key19": "2jFKNpqQLjVpPgxLceEdXLoykqEsJHWDJDcPTTzsQYTNnHtMkzQ1PGfrQVuMjxsfD31rc7oTWxr2GcK6CiffXHA6",
  "key20": "6hxQDE9yxyrY6Dr5F24phZcaXVMVcTgC49KrAMasbyFgiBPtNQw2o5yuNqBmAkFzn5WYYS1UnEXhsPc8AuYJP58",
  "key21": "2pNzFi41rTZg5141aFd3aKX3oEedAFK7hdAPcfWsJNwtwmyHCCHW2D4J17Xo58sp9vV4GprKyfERPHS9nJXYWZPB",
  "key22": "4kuqdWDuT5QF2ipgMwrn2KSZpStsTuWFwsQSgMgaRW7A1MQsMd5hAcdFYC7mc1We7yFk2hNn2ybhk7PK4LU1EGUU",
  "key23": "5LSoPpAXtGPE5vCqtq71aVJZBWEongshLvwKHGyuuULGJtNVSrq8mL2d44jUd8bTyCjh2JaxetZ51i2wJGznX5jn",
  "key24": "5RTSVUJA23jwcLuu2yjgW8YKJrJidcU6ctiqWJGLM3aje3hTksXPxEeo1tAXVbtmdV2UoctCuHWx1LF11T75GqKx",
  "key25": "42waF6TWckt3Eg5cFfVHQiLMLs6gYCSZCiNCdirrXNc7F6jat3fdju7RicoC9gwbqQ9ntFk81Z7WYCw4cmsvR4K6",
  "key26": "34Nd12FRJQTzMkHCqL7jUJ4eoC54t7xKrjVgcAVLDQPkTKrPWsFbP5pYoWty6JWDrjdi1F7pZn6u9UBqMGzWCLZq",
  "key27": "2WUQ8SiMuYhFKPe9zECWBa5BQSma8DFcw6SM4n91U7rschGAWvT7PGboRFktuXwmCWokMoxXf17xToouYPN6XSro",
  "key28": "2DuUvrBX6oZWLYJ8Sbg1S2Rc9vxBs6hcdzxMQFWwZJmDrdAhKWNi3PGXN7GLy2tc28zAFm7p3aaNrCMpsSNC78VE",
  "key29": "2cAGFR4BGzXQuSNWA14mC591pSCrt2ookNanQsP5fUCzFNcCM8KWpkBSh5DPtANypNWJgxn297s5vhEKD55hySWB",
  "key30": "2hcpBytrT81Tis1twporhLJowbWR4jjAFS3TgaKs3VG1mQSmXbjFLwwuGVCrTKRRg2dMwBjDjYHFeHTRAQwR7gAu",
  "key31": "4X1eTUV5CudbBX7CXtYJv8ycLPoLq9Rp7ZBWZY3fPDcHG3N4LxMHs8BU6uZPas4cYaLyGAfRQwCLU6JXgBhZLjVs",
  "key32": "3AEJ3CurgQcnhse9LHQZo75RQ3S3XmNzziBGoADTsJwZxJYW3sQJyURRJsz5h5utR4Y6T3ZGVpW4GKs3Y7dhRDMm",
  "key33": "5tNhCGYHH7TLYeCFjgnDWf1LzABHY2tXoJkXCghpsu3NC9X8QYJeUpG6seXfkTSkBumCvmTovJbXg8wcmGcDC6hL",
  "key34": "3DoymdVDmnTZQfFTK8oP3DaH9wK5zVYJPRtv2gbhx1iSADJn2Y7E5uticTWkhBVuGkfDoEbAziX4vPtxP8YufcEe",
  "key35": "jWzpwA1swEWeiCLzXBNvYLqewmVWkcvG5RyHpzswDshjyw4JXVzangFCtivP6NE568t5RcFzQ7qPvNbtuQH2dUf",
  "key36": "3e7xFnw8zdPr76tY89zjF66af8M4AAawbb2s4SufzqpySM4wXH2B7UMTEuzXGy9E66saPiSyfn7zQKkoLK4kvm9G",
  "key37": "3zn6A3gubx5XeH2WVNX732ftsgWJoFGipxwTrXJr4XHNwSP2u6kC3x8BV5PYuL6FAwAiBYBYa3d4WaL6cTaQY7kC",
  "key38": "5N7WgJw3xqEQ2YZDFR2Ub1wrpMj2dcAosD17eoRNvwxi1kuyVM8Fjxvh5i1T4kXbpNB3YQ7JgJGQQASn6BrRukiH",
  "key39": "jyxfVEAmPDKRokZCJsR3u1f6yEAMziv947PfHY5if4xDDS8whCb8vLwTAEFz5aCkegHWDgK2pJftq6cVTgqswZw",
  "key40": "3miTtKH4nnGYnfb1nkKMSAB8Znhf1TtoPKKGXsxqqeiscjsTQSa878TW63NhWtboT7HZD5iRHYbPaMYWct66yYfz",
  "key41": "42fgfBU4j3ZSqqcP8S3qKDXqj6fx5BzRePetsuZETTF4W3uEtmvGCgAtGkLFGtqu9f5BqwZ3gmn3T6DexoHXoYxE",
  "key42": "XkPN5JgEw8NFXFW1ZjqrtXPNkcEVq4ghvJVBrAdttiMSeq3GY2fhiVfbatv7FGocHziqEBn5nK61zm5nPx5WPSk",
  "key43": "3sxKAYWHgicmFtdhN3AK2pNzqVUowYvrT7L2iYBc8qrh4m642xyywT2S3teKT4T4nYpfACRCkAZBAcJWUThG84xa",
  "key44": "bvxYD6UhCLqa4HFfCqP8FqXRTopCHPF52jbqYvH7mJZTZmM4wfrJinRJFksrKUTbsF9Zv6sQ7fQF7vbwV2JShv3",
  "key45": "53uxaCgApb84ft4Nb5qeHVJAf9h1FY8uYswkwbSkgR2TeQYfgxyzUfEHds5asGj3bMHCGdcX8xFV85RPp2DEjKNT",
  "key46": "2EYdAXdMb3RUQsy6ZeZLrqJdKuYoZ7UUXiRnuJmLLiJQr63Di6szrLZNUH4Z8ekoUd9L4uzWncRbSpcBGWGD8WZ1"
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
