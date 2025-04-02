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
    "4GtNbM2zYBeVdUa81au46t5cffHRrBM8f8MXcoX18ZSZjia6nAuxqwY8wChdPfR1BadeEHf7rSW6JLDHzcp6WggA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HSb4EUNvqsSWkxCaXHopivNZBbSWB4P2Y34rqiSKc1onT5SCreheiFqjJ1xKcNhHxE8C6dLUGWRCWzrLN9MN1bg",
  "key1": "ZRR6Wg2ytoRfqn5dAVS2tNpyyGhCu4mqwFYVF6DyVNu6xEHQkTfturmmzSRirC89DrEvh3pd8ipinNrPGYnzFEu",
  "key2": "5sHPNsRr557XN9UzDNEY2TuN4agbYczZqjdSeLbDi8utAw1my3fN9hLgvvQKw6FH4LgSaffAmjVGYJbGQsQHzMUL",
  "key3": "2sf697th4v69naqrNJehi4ZLehHAQn25pHMsMfnRui9NAS9cDZVe7cNJWGpoSQyWzDeBJMr9hkqdEfmbEZwxdCam",
  "key4": "29Muej4VFo2T6PMKZjLbgwLwmLaQTfDSimsUL3dP9XPn1WhTyw5XwidQMMgso4V6HfemXsFKNspXnuzmKeC73vXT",
  "key5": "5PdA4NhNuBj2hHGVFHEHQER8tZk5N4prrLjHZDAzi7r3uQ1Zw45DcTpULWWQHviyuKPjKAxYvoLoQGDnThLdYnSZ",
  "key6": "8Mh3JrcJ8caKTm6dYM7HieckDyEbnNu5dkQxZgHUR7emnV5D7u5hRmqzFGffiUJ22ieYAY7t7FwBjy4wNu3pL7w",
  "key7": "411A8qK9SuMtpKLgYh17ko5QeC5KuiKbih4tB5je3sL3vTrxZTMLxCLhsK84A8JnVCov8q5aeZDg3XsR4ZcuHi98",
  "key8": "43np7SzbcbuMPdPDtrJMhG1Yf3XgUkDWvsB8GTzycYM2qw8fcVmDjUVDndWUea6DNpTXzUpMRKRyc21YgJGgGejA",
  "key9": "5EzkM7Qus416qD7DVP17fnnnGWnhSiEiViwENFAoKHH8FhafhKq55frniAPiPcFGMRKZqTBrwhWTWLWPt69JwCxa",
  "key10": "4Gc8FgEfmdwa4yFHw1VUMuF4JUqSJjqN5kQYTgm9HcZnzBtxf5hqvu6Hk6n8o7X9RYSGfXr4PoLNzA6rJZUydtXu",
  "key11": "5BKjqHnY2nfMSzJcBdHktSJTuDmJBoF16hMuafYvr1Tfx56TL26UmXEAX5d27ZgAV5CoC1P6Yeqs3RZNn4uiLu4",
  "key12": "5mSBKfbjVqcCq5WJqNPZcdssQnQGr9BATDtkenDUiz6oXy8JqMaMQPD4J6P7rxWwQ4MmFpkQyEGtunJ7Fp76kh3",
  "key13": "gszUu7xvEmoXAY62x2TwF34Qd74Zor7R4c4erYf67kd7uUskpCCqXhfDsuBLNJc5BCg8DUDyqfKTQpGRKABqqaT",
  "key14": "DZdsLNvn3CGJMWeBsNmRRFMCZYd4KQskhzTMe8Mmiem7cqnYFsWWuWHSCbHWN4CTF7bSuwiHhBdxEt3gejX2mNy",
  "key15": "4x1TAC6RwfB3SExAn3eWQ3bMgw1xKgz438SRX3Nxksg8uiEYfiV866b5hQTB7nAUNM6kpJGCSWZxM3HLjT5rBWWX",
  "key16": "58CadVqsKhxu2whNa3kD6KV8urhyDx6LFTJKTbW9USgnDnYg14GS69P2H29HMJXegnYQnhrBVYWNWW19LVrwLtbe",
  "key17": "4oqjf3sijtZVgS9wcc9UE6PHko9EJPio1hwnMyyJKD3tkASVV2SQkLrjL3LiYjKU57ieWWVY9CxEi7viuCMcZnuJ",
  "key18": "26CR3EzB9q7zJ44hds8zBFd3mUDquymPv2PqTKHm7SJgQSQTbPLLLw2dKVYD71LgZJhyTafXFN7b8D2i8bNcckvv",
  "key19": "21NUs68b3dLrdqj38fYw77GWRKUFDC5LQdLEr2gfmbagm2pGPqMp8wR7NNzdLV5JBhDF8qT7CdMtirmkGKX6RfRR",
  "key20": "4TdUy98kmHwXKaFuqJRWY1LeZs6uE9GyB6PKc3GnD7qcugRjMuSTsxKA6s8d43uRwPzYM2cz8DYVnAkthGLcBbWR",
  "key21": "4Si3KhRgdTUFTth6hUVvbA31319fzRJYr6XvULffyZPvUVEDM3gWM9MBeM7KAhtB633yitSLRrMCNw5FzoasFHkC",
  "key22": "2xkqYUt7oD8qdjS98P8GBK5xuniiP1XfbijuumaJNpnMmGgHVyp92jJ6XV6raYnqfV49Nsohm4yZSBTrkJxu4dXC",
  "key23": "51DuLeA7M8bfrNELwXN8BU8oFgX2buTX1gBaUCDvMQ3Fnht5CjNAP4Wm6RneG65ZcYuutzySRQ6rAoN5MFQiD3wz",
  "key24": "TovQS4m8fuDHgvrqXcD8At2QBTyrU7i1mjnGvUza6b4p62eVAAsqxWJGFbRnp2QJKdzjYGjGZMUypg5rxBc3PuN",
  "key25": "4HQKxU7QmAuZKJpwTUiW3jPzPoypiFBPSb1RVEFngPVLKYLgf7jYaSGbd8kTG3D28ejiZuHsYqgQBvRYarCPdqKJ",
  "key26": "3chhFtz6Au8EPX33zo3MrqVdjUPmpevEheM1A7YvRHxS2fCr97M74Ara7djurjY5azsn5YDPNe9ST9XJ4AETda7H",
  "key27": "4EL6MLbSXURRuSvy2m3WFmtdUjzyVZcX5SBw57YcQ8opibrDtLKZzqAjRWNdw76e99qYXmg7tuFzhrPnetpgpLRo",
  "key28": "3Jja5ARM33uZVE9yjjGZ3xdSBtP9TjJskR28xWC6ocC2V9VHmSCG8wJJcUs9uWcpmGMnVYAAhDoxznVuSvbR58yQ",
  "key29": "4NNXEH8Py5ULCjP6i1Pammo64GwdnNxvB3HXCXK29m4xqnHkRYbeYn8y5KmXvrrmX2SiXKAusxRrrJamTVAvmbPP",
  "key30": "5vZo1f2tWBTL7aPQWseenpYC4TdTV5HEuUcGDpecj6kp4PAELaHsX5BGhfLKh6gANEdotuz84V9dN8jYPWbGjP8k",
  "key31": "3xA77WAGsy8wiPQP5hHhRNRH6zXeewqDk26aT2BAm2DDNySySo9MinP65FMQcdi7nPbF2nfDE6L6GGBkbTMdfrxz",
  "key32": "GjcDs8LUHKZC6WGQviToNjnEbzgNxEfv48q4ztGeC5zZNZW9HxAz57BCvf9mfjPmguKFaqir8XvwMJX16ALBsC6",
  "key33": "46WTNm8z83GYHWSbMhscUeyB1H6Uw8HzRgRjuBzJpz3pnCnAr3Nf53ohvxEdQni47NUt5anKFhsMBKP1zaSmcbCS",
  "key34": "5gMkaiuv2kwHZc1z3f6DwRJPnP6vr68ihXJX1CPrrEk5aiyYGK5gqAECwQJXKs3QdQcTzQ5nKdQXc4kZ2hHNhSvm",
  "key35": "43gYmaMX6Z2y4aTUUAq3CvxmtiTKKkq8k3mov6hLBdCoQvgQ2prKoUhXDM3V4w7LDaqMEV4nqYWNh7VVnhRy5fXW",
  "key36": "3v1QXMZ1Rf3KReNtxP3h8SaoHYTo6UXYw7U4oKLjCsVPL5hk3GqnEcrLEx2jeRYzsq4xHhBUggrdPb3ahCUQ1o9M",
  "key37": "2PGmmhaM8hiUPFn5DnYHbFZYj8LC3VsqqFHHSLd32AKTQJ4gAbGkiW3WbgcBgDhVc5w5H88WaY8Ei9cDwP7wSd2R",
  "key38": "3VYzuU9gKDUA39RVbJL4KEmaX6H9wY8YRim5GJt5U5pk3ds1aHTf7P2sMq1tyS5MfpvDdVwxzkSBaraW4STYuz5H"
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
