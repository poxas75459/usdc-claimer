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
    "3fCDqhkHaSaAqm4XWctaEonZkM5MUcaCjMtF2aVBYatSfzGPjSHb6knuxqbdNdyqmVeHRZx2b9cDt4CjKtM1EA9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tjTnC63ePKfdrqW8VEbLC3AZ5NasbnHWvrNTQziikdMHFAJwB5owj5LmfXA1rscCAngdDbP7cqqCx8MHRvHQbbJ",
  "key1": "3r7NjuQ8SntKk5rxJH7SctsC8XE3eGSXfuFmhD39terZpUnjifqH2q2jpGCMH4v5VJPbWjJMohJsPhSiqqx9CgXf",
  "key2": "3uXThiA1L6cCqoatYPLpd8zeudCxdtfEpqnrNMwgM5UN4qdc5wed4zDPgyTfCpfTtJZYC5r1L4crbFjSaYR7G4BE",
  "key3": "2AdaJ9SZYCPCR3fZqGSGLyuK56QjW8fwFF15EGzXuX3yd45LBp15o1P5tjXrqDLxvJKe4TPu28c73G625mvDVL3M",
  "key4": "4bWbcVkm24vit8WcWjuHVUKrVKaDms3xi7QXUkbazvmAbWN9T2xKE45YtZ61swDb5rNmZU6DUwGrg5e3mjrWNKfb",
  "key5": "2EsLQFjdi4Ub6pmhuM1nZGBCr72n3npC2QKFwb2KearjViS8nx2jX7QpMQvRqfKiWKgAwAXPPcbtoVkwEJZyv8DG",
  "key6": "3ZkG7SZgqvDkYSGDKHfShZXbj48jWPkGETvTbsKXJCpabadhg2KScuLBgU4Lo43kNTkG2QXFgKo1D155K6QbvYSC",
  "key7": "3gAxmnnYNAujvsYJ7vu5435xkitZ7ZWv9Pwigteqm146pDN7DXFWk9FRhdBtHRURVs7sJnEd1pbQvzDkumUbw7U8",
  "key8": "3DufNFtVt39YQEeWmbvmdgLvTAkRhJLCrR7YDsXPR3pRFb6ez6NCQ2T7sXWH8a1VBg9kRg5Um3p1HRtdgzG59SeU",
  "key9": "5cvUs5NoMaq4NBbWzPVdx9h7Pg1Cw8AAG6hMhw9cYJiVCxWTLSfKDkdnVeaEbFC22EmRsibhGkK5rsz2Krfb6ox6",
  "key10": "rsq7kP7WG1F8SnRr9WL17AiZwsE1vk7wBmvANDhqNGejXBicKJYtE6r2UxoTZfTCtHxTav1YbM7qNuUKT54LaP9",
  "key11": "4TuPWVZDqk6AH2XYRZL9Z86dwKPkRMfvyQNK147fbL8zgTCaNBRoBi3x45i2VTE4djHHwJfuPLYoXKjApCPRYhVz",
  "key12": "9uxsNSfSQQ4EBkrmwqoT124xtgi6HSyHRA3HEpfZG4cqdog3amrzojfNJDTcJChYGLFx4eqXZktxiCxCe15fBPS",
  "key13": "5hqYNFVGkVz6EhXeK2BekW7ueUx9Mq5bYbeSMnywKKDB7GZ6kS51K7aTi3hiPHx5sXzBZdsX9MwTypUXm5PK8sQZ",
  "key14": "7nfaYqdj4365cd9FXNF3rrzvFi96nwpTdBeuYXfpcHsdz6inHi3BQhmXKsAs2VkXty8AvpC58KgDHgVGvWeMyfe",
  "key15": "2hWP4RFUnnuBLHW2QMR3BSJcmJjnfNfSfVgDTwDv4wU6xrv7EqGUKQQVwH2ubZJQx5SKPejiByxsfoReHd52JF9Z",
  "key16": "3xD8zvZo9umkLp2Wno221qtkV97Whi3uZHU6BjerPR8iyApNvTwHgQUw9iRc7f1amSMtr9x1cQnMnFsdowHab8JZ",
  "key17": "2AwZKsAajsvZVebJ852WM9SeKVCxikpAe5pBivpmfc9xt37tSVjycrkqe8NPTsMXq3pFJ6GgfDA43KjcbM8ZSvcL",
  "key18": "4vW6MJR86oMWVnksnr1bh7mXmFRjRhhxgbp8tdbc5fSJQT5dyGkzQrnGofofrcqQjhg2iTMpq8VYhmReaF5MtyjY",
  "key19": "5CQR4HpF7nZ8YihjUTA9cpi7Wud4Gc82ahWefKUR1pz28f7Y2Vk6nqmH6LNrGkJY1Zoye2rKxiq98mo7BXxC47En",
  "key20": "5G6pYbVfi8G4hLVh3ASv8ocoqXmNNr3CzhzrozMZyp2kj1y6j3x8TvPocozgRM9MxuAP4K2SCVgGUJEWimHeHf4X",
  "key21": "hRzAZwztBponDQuFMSFSnJmApBuqa7QZg6GyWUCidz2haET6UGYVQSEhVuEAmjdWVgtbMvmdVMQQjALdZrfn59S",
  "key22": "GnLfkX9SCkosmcThv2zKGXTE6qb776teL3jvd1eMFxmSDg9FVMSGMDybLJAFCpCuFUYX8QG5tFRe3xXg592JJ6E",
  "key23": "zxVvc5BZXqAGuzsri7LPGARZLGjuGeWMG36y1k8QNzpyLDo2X8gjw5yoa2d5TEiugVgjYC88hAZ9d3QK6S6NKGd",
  "key24": "82GNy3VQPtH9mspZpgT5DZjmaUZRKLHVWr1QBXN1kYnqQ5r1stbZKiFTLxDs8u5tcBki2zfzCEuwnGZkRct7jng",
  "key25": "2xcaJEaZVD5jELAGx3tzfR52aCqNSFGMcwAPgcyJK51Ui2t9rxYxjioWpetafnx52P3tAHSqmTjoLLVP912dtvCC",
  "key26": "3GzxqNfm1nRgXrBPKmKt4yBrKtEnnNVj4yHiiaoezueBAsSW5NzyvNvnW6xd5X9YoiiRwmUX65JUiMqpQ7QKQ1QG",
  "key27": "256PTc4LkExvTrx3QmnMskGmDWB3hGzRrLpCMQnbnvGroVgAo8ayv3TnwZH2yQrVd8NYNjJYWW3Z1idjgmkQEh16",
  "key28": "5y8NNTU4yxoPso9tyJ7DUFYDbuhuQpMxwmWVfisHgbMKzJsoPQKGcQoJHNUJXN4i1uTZTpLFt9MxAHWemB2ktgPf",
  "key29": "3kmYeypJtka9bhqk9hodQCP8atRYRxi1EewkFucMsj7LrMYoGrEBPZR5iKNgXZUFHrvfFDJEWLnLr51qKWqWUM8u",
  "key30": "2oTc6Lq7Wiu7jqSYDHeyCrGsfbtsMjAE9pauzzipevvf7MYD5KzaBhETGZTuvXAWURWMVWz66ohAijw3bx4L3BfN",
  "key31": "4N6GA3cWxBxsikm4KrZbQ4KsZoqR7zsvtxRt5ZEaCqoCC5YRSDZWqTzqnWHqtAD3w7njfbhDQYA2ZgJRb4xCJtqf",
  "key32": "4frArjtm5NjTBF1YvVxbfPmpGXxCmqpaBLkn6GsEoHEZWoBFVngvAAsCKdoKsbbRjSnWjY1EDoSLr2caw1HWNUr6",
  "key33": "yEXZ3wbqNwRDzymDcVWW13AryiU934baXfEFpf2GLqGbUXJcCMaw1ke1rcN7nPpD7kFKTNQ9gLVeB6SKJ65Kh7n",
  "key34": "5eTQuGFkCyGmdnc5Ji3dQ1imtHtbLa6JxfWSVQqbkTktxod49EXo1kLr63dYuqTjxZt493o9WdZtP6Y6bsPLTgJv",
  "key35": "3SV6Y8NFwZCNKJi8wjP29gAcrbN42JSxFMSttxwpfAymQeFkbfDBT4orcYm7ToRkN6caoa4ZXZSee5U8q8b71eUN"
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
