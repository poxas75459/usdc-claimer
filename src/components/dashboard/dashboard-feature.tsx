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
    "61vmt3SsD1U9gMzxCB3cxP6oozjvTU2AfK51cZCu1V4FdRwRxoQtMZFcnJxW7urDCLWyXaJHHbtbuN5bDaCv3P6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CkYBtfoUQN8h2BxWdnjUxrxJWeaWmVct7jkMM2S8w9Fear9RgugNqwgi3nfykWhgHdmnyj6uNCgmhwUNgJFBvdx",
  "key1": "2aNM74TcJhfooonDN7WKMekx3UGDrzEvpRKfxzEKpVyL65nZpWwjoMucYMWELjugxF9j5EhTftV5Q8o6zv5KVQMY",
  "key2": "47UjiQJwWxGuRHMvMigBatGgAJhPrQfyWyPSoigCsJvaxhpWSS1RdYCXFgbhJozTj7xTFagQqtNJ4aEhT36qU127",
  "key3": "2XsfTub5LqBGYJJezeZv9ePJrKEw7wSzXiJ5qGD2FCMeqCHAFYj1BgyAdAhaGXFPpAG4icDrWfcBqLv5vUuiDT4C",
  "key4": "3cBJ1yU51wWQnhakq6zjTM5DejpXEbj48aa72p1PhnXK4Cn8HwkAivH7m62Xr73xYMQFwU2bBScbdjEmCMFu8hob",
  "key5": "RE3gAFGGXp3YqKsvSc8yBT4sK54Envka8j21hdXumMnrnmEKaVKwjBqYzjnFspB7cfDuRoQkBWurXoXAVJzoeZV",
  "key6": "2dyiKi89NVwx5k3BUSoWuZK9oS8bG5NogHoRyEjER64XxyStR1SqqJEA7omGTegCX9YCvBDFqcuSi1Si3YffgYNR",
  "key7": "5doctDoWXqnsnVrRV5gZhrBZkMPBbMkNXu88xrhWgHXvRFt38WNndD8pd4RTyrV2d7AqdXziz4ubREBd7qUk9tsb",
  "key8": "3Vw1arXrp88nJ6DQGE3XP94edxN5rU3uuLBrGMbZrPZMQojpebbbXhvaR8BcAwjgXcKhF2ZjVm7oNtj2nuFiBuzR",
  "key9": "6S44zt1e3QDHKdDYyN9i1YLcWnqfACz4tRogzDuJJeu7WMyEPmxbUsHSzh1uRKoRwDCiCfEGkFvMAEZaF5FnGvc",
  "key10": "39dH5MZzuTiMzTFsHXP68zrnkwNDcaYp9zqW3AT2KGEJKQ3c48XM351Jek49EnUgJFLkFaovTWMzSPKRnfeuwLmd",
  "key11": "2yrZUsbXdLX8QyRyoWJnRCaE6fL7zakGJpeKc7LCRnDDDnLuFwvrDRGQrFLK2hpvPs24PJbsRU5sD6d8Jb1Mkghy",
  "key12": "369Hxi52V62mPnKtCp9DncW58MBdHSH1CEMQjdKqToGeD4abGwBrB8vD5yBbQpbMs9cmsBo3UB4xLG89DHqPVRju",
  "key13": "2tJj3bgYqSwHKqzaaQ5Soq4oD3EcyVWgwXjESXZEGnbSLwQNA9EZcMXSTz5QnMtXdyHrL3Tw7Szo4ha7b1AvQKRp",
  "key14": "445wA6h49pXcCAf7CNoDCQuikgVXuqb15Nah1NYSWVdj9W1E58YtPJAv17F5MVk8xJNpcPYvunmpd5hY4qrTp8sk",
  "key15": "485tAXkRnTEW5MjG5isFDydHX8R13S6uRnH6wrs5vpAGCZ5CnTncXiJSjjwXGeW77NYQL5BJ1mSfCh7g5mXXH595",
  "key16": "5Q3y3xRgzfs7zKNDkcXTnXSWaRBmZUJGQFTtHvzHKJQQwyLXW5TgccnZNTPBm3iTUf5ZUuVwA2skvxLc4uDaNNJR",
  "key17": "5KcdJqM8EMpp4ZLmV7Trss6kwxGYd8NmMTFySGQrUgmq2myRrJA8ipSxYk6WBKMxXTEfGjkK4yzZyUKXbKxe1yV",
  "key18": "2jqHX9AnU5kTTmZwxhyRJ147J72Y4hGauoJ7RQYzw7BgJd9j7wJ3wYLvh56xavvtBy9Ab6GWcsf4L6aVDb7EjYkW",
  "key19": "2LS5yEoSbLzCib997mVfbMMqtwmJzu5niqXCpsrDEKEEEYwMbegsyUe869ywu9afYpN3nLWVGby2iW4DBqetkKbb",
  "key20": "DCQLZoTMztQEkL8wG8v5JeHEwCU4CHou1PYpMgpfCs7L639DJCas7btHtPoUoJz1YX4sj6j6iCRUkk4cZie28hM",
  "key21": "2pUbqdmbbpCy4b9VvKf1FXU12VknuYBp7koGfwYf31qnC1icf8AiZ4g8q1YfPkJa1Yn8e8mzG298gvFboYj8vR2f",
  "key22": "5TE8QmBnYMVeCgxeHCPbt6VdTw3vti7wMsqfberitEeskCrU3TQHquzZ6advC6wN3mHoHCy3HrUZE1ajDQA4imNB",
  "key23": "5CuFUrDgwcKrW5B9wm8Kz9HLWMbhR7B7oCP3qDrqYvLurGLS9EVafixKD6cSVMm5M9V83WTQ7h8ASMEW6cyWgxFr",
  "key24": "27HYnbzjHNBJAtbvUEUCRXb1Q6rn1BPaB98VYFbmJiitCYXqzkDiP43Nfu1Z9UCE4onUGoW4Kz8zkxtu4q6sLVaZ",
  "key25": "3wdfkdhgReQosrGcE2E7dQ8Z2VufvWAQu3jzA2xKNoYZrpdpg7SGdEkDGvB5BkbfeZe2E5bQtLdc7bECbR1hJA8E",
  "key26": "32Sjv4H9dMGA5jbem2qnX6AEo1BSpbgfrK9x73tqQGo68Zd468KW2KSLrvLa7mxKvU3yVyMo5gkrQzV8hZmPKQzn",
  "key27": "58MkAQ9z2ZUYaTksjWKmrfLzYPwTRTTmBBcxouiBAFB1mqpNLC51NMahEAJX5YER4cGQfwqvZz8f98zyeKqJWywJ",
  "key28": "2PcvyAVi1BT3ykKuMrSSzGbMipQgHoMRAtcFHttP3nnMQjGKJQemoP6wkSX5fFDoMWR2obZULYxpaKAU2ZgCgK8t",
  "key29": "2fCozvZFsiDguEvqzFVwTfVkX6fKtPyAcq6BRnMBUFHS3EdgDLrhbxvAF4xKFUzN4nMexRPxcdmqCE1movj1GwR",
  "key30": "3FPTMsTNucPEifVwZDxffcnXBDqa8PjnEgbD8pz9wQUB3Y6nLR88NLEZ5RWDwZNEYzhFYTU8LmZ2ydGV5z92A1hq",
  "key31": "2RHaRAUtLfJHPPMUyyCpHZFLJ1nSFbqhdg74EUicji2RySrXLi58ciJRPPWy4KMBi3ApwpHeYFaDBte4KCRYHKXD",
  "key32": "ovtvWQCJD2mvn5n2wLa7iiZGd3w69WM2YaZeUwvEoBnYQr6RDootQuM2EQkGeY9cE8vuJYP5kDUqxYn7iDJeGi8"
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
