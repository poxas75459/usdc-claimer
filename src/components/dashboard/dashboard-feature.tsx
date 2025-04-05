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
    "3qiLKVw7Vzz39Fh3eT5LQgt9kFQ64o1eZJ8Yw9WwRqVKpGFH66RumDMg5ABEMXbm77o8wNjnnpiCmp22tuMDushT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67H6yFZBthxb5ShmhF5QjivKy2mzPjKdcMCEx2SrLAkvzZyJuUu95JLSA38V7DXzfmR1nPfoy1U3odWUvNt1ijJK",
  "key1": "4PJoou3gYbEw4VZbn3w6tSysMpKSqgSVXuvyjbFmaSu2yA12UP7uyDuiFoAqsS312sAw4yzLtSHAgZLJZ76KRyXP",
  "key2": "5oH72bRWpmUrEGFpq21he33qAPq7MPp2H8HkGZzmk8GvB5XXyJkpmYkTPzRKjwSttt7KvjDjUmokspdt54hBia9e",
  "key3": "sMv3xF4DyctfiC5zL3JPxNsso2UZtrAnqity9Zf6Vw7gTXq6MCqokzWvdoqv3Znkix6pdepKZBJCg5CEV4k6GoA",
  "key4": "4Lx84xjHzdMBG5C1F4NnbdgDZ5t8NPcSady3z8DLskbeXAM9tYhE97uwdsyYxV8NXqgQqqAVKXJxMQnpNopb4fqT",
  "key5": "3BQ8t5PNF1MEaNY2qp8tE28r7R6ZFHY3ijFKuYRfNyUi1ZGh1VpcnvqChLoQ2ieqog2jzTzQHFNYyZDHJs9FPKYq",
  "key6": "3YHcciMhE2TUegwu3rVVuCctyv3PbsTFdgKbVxdZMBcQZbHmaync9ge5CL1nGEuQ2zuDgKBKT1usQjaCRebD1MWy",
  "key7": "5hu3qBop6gxVQjGJMvji5aj5T8p7htrmS36AnZ9yVqhb6NNqidagBvZgGxSG61zQoWSa1QgLV5RgDRdj4VRz3tky",
  "key8": "5tV9g9bvTYSxNB9owJvzZmi83gu8z3St7mZeeSBDhMzDG8cDUwMqPyCVpRTm6jMo7XKv3L7JLdZbnVNnkhfcyceS",
  "key9": "2khmCZ8Fbzh8aq8GNZoLwBV6cF9PUN2NHkomq9Njka341LjcfkeFhngKQS212w1Rj9THhbGzuhaFk8CYkBQmWb1a",
  "key10": "5GLPscqXPKd86VBrn5ef5DSFhp7A5bW1dGq6tvt2wwSuwGS3ThgTGPPQqnAvpxXzDKUnKvmtQ2YUD2ogUFvRyL1r",
  "key11": "52APgTJMDNVy4JobUrLth5xPhXz6i549s8Pb2kkkfud4BZw5QMJMU93yzCnsTSfrGRJxXxdXFcguwsbCZN6b8vf4",
  "key12": "4fi4JBPYdc3EtFXxTvQmyy5PKwZpiTxmFCQWLb6JAWXfhVGKBVjG82YC8Nqd26RURvYsZerhWfEimGhtqQZPsRwX",
  "key13": "M4K4mPYpojKLfSKseejyGhWh8SgPBAK3xPBqaF1sX3Q2NhDWLmp4kF8BDFzNvMR4eC6KbGXcvWLFwYhoDE9d7PW",
  "key14": "2kYCX9GwqPDzi2Q6WHgD2wqFNgZ8ToPeiwK7vBuocdvyCQdnn4ocqmrtr6qY2hY7Ho27TSffn7RLCCUHCDq94xz8",
  "key15": "2fzQxLWLLGcFYyoY1uiUvwvfmTaCjmk9XocvQR9veBAk2ubvARF4TLu8EWH5GDwxynhSxzibtqm7sCZUVgY7pkdN",
  "key16": "2iE9d7aVkNTsfxx7PX8muzcZXPqTwgmPHprr9WnrXtD9pK2WGcuCSaaGAXWZs3t4waqFg6ytVBsE1v3rJK4ZMXuu",
  "key17": "2aQKyEMBigGsDZJ9xiJTQvE2qnECtFCVEno5P2WgpjEJmBApmgxn77AKE1nAbK5GdFp9hbEwjyw6GgdqQUurFVLT",
  "key18": "2sqS98AS4zF8ppWGotPgG1rgk5Ae16xoTQzP6eD2ahfxCg8ur6ATHeMByTvyRMaYTZdK5D6SgBpgoxpoizncKi1D",
  "key19": "5NFMSWF1n8z1WrJT1SZQ8t2Mnt1THuPXQ2M6s4x2xYsY8UqmFZ3DH2PouLVKXJVTwBRjwobKvuhrj6urYSHgR6ab",
  "key20": "3Lrnc4CgYqqNuQpoidYUKoyYA6UDLsB8ZUxwhGNYsoiVeRo3oRCZ4yWkbwwwGdkyXCWGkmQQDHisS44LUk8Y88iU",
  "key21": "3Eo379UiYY5gQAP62tdofitrufyvqN3nM1eiF9D464STX9GttcHGHuea8EG4iwo87i5d3ss7XQ2KDojz3wpvgD8J",
  "key22": "oyZqjbR1WzyfuBEGwyhcMg8zktA12ozLeRqyn3U5zujnikdUVjZkyZG7ETpmEgk9vAw9vJiQv7vfJpBE8VTDEMY",
  "key23": "5QodZRNS668uoXUfxupNzpMHG5eg2hN2arYjWDWANe6eof4YAQzd3H8reAs7qwmJZ4JRzfrS3EgXppusqyznvwtN",
  "key24": "2RamLGUbUmQZAsjwP7fisTmpPdfJgzoeWx7ifyRsHE3BXoWGkG6drm9hzTiCrnr8hePCi7jn18ZcbunrGdNX4Mik",
  "key25": "64twwpkFMD3HAf8AC52sYDpzAN1GLpMMwgQE3Srea6cL4Xse9d5kqhQVUMXGhzTMGyynwJVD8rMFYfD3hhUtcF3H",
  "key26": "2uodUabbPo6Wv8NQTSk1STKTxuN2SsLDawh2YxwSxfwphx7k2e8J4nnRc6zLpdMpZXG388ta9DmxgAvyddtBR5Vb",
  "key27": "2FwHGV2cufMvr26AhjSPjSBLT6cLgoPHCmqrBwHzj9iBaz2gFtaYgazFDB6cjDoZHVRW5h9c89v8gy3VEqyZAD8F",
  "key28": "2utCyG1wUP3WSnhoRRkNDTkjrhHLcJhY3NcoudzZKmPsHyBBCLcGU9dWz4iGwZT1g6itZ2DrPi53it6P1WFaHRvj",
  "key29": "2htgEma8txrSm56L45JJntLp6JUycw6Xy7S4ybM9jir3HA48M1r8PAwqjc91EHgJV5u7aQQNxk7G8MvisoKLtQ13",
  "key30": "652iUZ4nrwc6FD7eQr5Pt1B7iM5APLD8Py5cZtXyz3rA491Hza6vorKXBeR81KLVhAX6FfVzpARceFdSq1uGfmMd",
  "key31": "54dcLwiSgJcCjY1HRAvtRXcfCRCuLo6GwZwJ3Mg6bfrtZSGeMC4ZcVQhnyYyZAUCqQn54BRtSEW3PbL7dLwD6DDe",
  "key32": "4En9WPmRAFvPwZpjAQ8NbbbKdPPYJpKWiQbChPzUwY3wyb1EufCVdKzLgitujuxkydpcrgBkapPRrmASBikom9DC",
  "key33": "3jPhYxmRdeqeTDPUWQG77xdkeow1wiqaERd557Veh5axbwcXP6itKTxWYUwihxdv12swCoW5CQpyAZtDnnQUEEgp",
  "key34": "31hCkUJCpUALv7R3vqwdDfd5XfoxiKVeM5EXSXSxDPZtwPUKqFjm8FV2F1VwdPrRHutfY7gGUpRKufCgp8pEYFAs",
  "key35": "4SdY1tLjKSejCVyq3NSw9VwmENpAMhHDEUViTUPHACNSiAP6DTNrF1dFmHnFoWH5oZTAdR7uuCwrRpreia2UEdi",
  "key36": "JrEtbXqVDGWTo92A12wPKAHe7fMqWBB7K8ZAB4x3BWmiYBirYrELxEiAZsCb6zr9fg4u1BazA3JynCoafGyaRG6",
  "key37": "3rAbtba9rKvpDZRm3gjgvyVHuDpTH1Aurd6BJRkTwrnyU2GiSJe9pcdT7NLJL7ZNU68kDygLcJeWJ1q3o8rx14nQ",
  "key38": "3NrcQ2e28GPmKPkFediCvcEyiKKnK3fqM9qiRrKNFhQiMqBoCeo8xtJMFMegJFBQEzsySebHBQ3GGUU5L6e8MgX",
  "key39": "59nw6khdW4NVyJ1HD6wj1R9f3Ks9C46cN8iLoAfrWC9rSKLSe15fXwkR3v9sZEUnHVrtkhdj8vdKQtg4RU98GvE2",
  "key40": "4bW8SQ2WzquFynzeRYnz8Qaq2yzVkSNjQbdyhyYr3uNnzjXC4TK4HijzvfGSox4id5yQALtjAN22h8pghqJkTtd9",
  "key41": "3rfYCDA6u7Pj6iYsPAVo66Fmyp7VXEcnFgziTGeAgTV2cBkbYwxXseYmZJojRD5r7pKeweDadn4Auu3Q1zLAdHdn",
  "key42": "2rYhbQPPQB48dFeKJ1sGn9goe69TWMExxRazuYwyKRkNGxVK5TcGyjb1fkMjXVq4dK8GHTFPzQPLZegp6PtAbbsa",
  "key43": "5c2vkZD7CAtyLofz27GoRX8QMccDFFm9m6GGHsau9HcF6GirhbJbL43q9KP9jSfdNgu8Dnup3TtS97RF2LwiccBg",
  "key44": "495Rud276EVrtdxKR2611L46641caJFKfo4tjcRgWPWB6aj2G8JfxmWHgJUL8BuXmHURKbz7hsMvWsa6G5pHjD2m",
  "key45": "4ntueECcQ8S7u9wGtNYUGGGndnqXjK6VJqHSfY7L8wmkJwxU4fUzbheEXFAss6MGTRx9V5zSYcxXD2rt4tm2Rapp"
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
