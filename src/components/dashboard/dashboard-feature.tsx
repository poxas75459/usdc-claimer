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
    "3fw1itM7awrGdJRbM91bggL4uqxcM3wuksJVMviiXSDfqQGFvx14zkTamKRfFbs9pQRtk1R9PRFhjp7dt8PKsNjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NNCnAtfrR7eVBusP6bXu2F5Ee3dCoKNcVGvYmVHMS2qRVxV39aACs73N1YokYJaAzoAgX715PPFgnkvCjC6BYLa",
  "key1": "2ihRF5kHtYbfG8WcEUSzSD7AeG6wMQUYdkTN53KfyduF1fhmYph9ZbRHtqnbcQZvsCeD6EpU9Pvfjt1nArFaEZKY",
  "key2": "4GjcYaCvNQjSaTpRStXsGrneXCc3SkcfhZqjzYpNS4fQGCDD17qwK6cPhukDKHjsrzu1VykKk6D6B7mbrjRg63jA",
  "key3": "4Fe4WDmRfmJf5s6TZLzzbPXL2cLKWsktBYreXfkYb9cStHxboyaiiAioc6GuaRbruwQs8wpkPQNzz4em2ibHDMcM",
  "key4": "2CP5ssH16yDTLprWXLbhRDJAoEiGrHrmzM52sYXUZTrrW1sLMVa2oXh3wHn13LwtNM4uvcGtoiUjj49zqwp13JLc",
  "key5": "SDiSaCP7W2Lex5t4taPaJhvteJz7wTdZknFmhLYCPNz6HAzTXHEhT13LRM4BQKUyG1dz2kbyTLpsxNrwy22wkXC",
  "key6": "3d2DbWXkDMpp4jmARumKqVJHbm9TRDnpTzsD4d6UjjG4xsdiwFY98H8byLb6xnij3QBx8DuxjiXdXrhTqSd7QGgi",
  "key7": "3DdWeNVF1VQYnYLQbdQ5B1sLYDzAmvADeD8ZLXCscPiDUYwxtRkAVC3ufQdRFmvtmoENh67mf7FGHzBiGFibP3vk",
  "key8": "DjpoK77iRVt4rXi53Tmk91mHn2zWDcYdVWo4VqrdD84pu1hwxbtdpLewuKacmcTDUtygqbPDit9YyLp49GoHBzQ",
  "key9": "3qR8wc3hWSA9apBPCwEKRdBtrQHGR1zY8c6ePNJJR8fC8d4pWDEQK1V8E6KJCtRJBCLzsyAgqoyj59ZmgCP44t3A",
  "key10": "5McizCCzVXpZjs1XgVRAxsTqLHtfk9m1rAx1Qsd3tkX8S9TF2LBiNT34HK7aRRe7BXWqC5Y3xgWrkvg7toDVYVq7",
  "key11": "4ERt89QHbN9HZrKL3qU6JskkSChtg12mwicbzVkjp8AxhBrUKR5izUmMjdU6pcacxQGNbaisSw3ZJEwAS51gg9dt",
  "key12": "4dvShakvN6UkDR3vn4KKYJD7XUAJFaGavrbFrwusWDKzgTaJKADRF3NGFr7ihpfmzoUi6PmVzqMeAb992BhSvo5K",
  "key13": "4DJXoxzMYLJu2s1UmJ3YwoBBkib37Y3zCsnGUwdA1goMtDzY62qig9R3uHYiQYu8FQugseQGhi9bjnKotmqFWrEi",
  "key14": "47koJRUMG2T4JUZzgYov44e8YDHSuCq3fEQL6q1iXm5T246FFHaKFMrhdVyPpHhZQKKibQSwSRSybrYyuN2xTVjq",
  "key15": "5JBTTZqrsbKuCzKhTnvNoJ2RrqBFCE18bQZvsn9paw4LwhmCuvji7dMEV7sbWaqf41dcbKUJGr6JC7CcaeLwXMfE",
  "key16": "xQajztQEksJGcebyDPHNNEx7b4ymbuzRhHYGAx5CdDadTcqw5u8gotxkHq1EPELJGJrsTpvQDLeXMhBXceT3Czq",
  "key17": "467BK4JHcLYzJyWhPb6oGCtvi5tvtVqPG2WKJ8CgMcxQJPHWUGQYRPDQKqX1wL5GeJKmJbXtkgBXiH42iPBSimhm",
  "key18": "5aJAwhmXbNvvVfo32pQtg6BVpSbnJfFoo9scawvo6ZebuVbA4ZDZTj25WXitkA8JiEjvrSqcB6EDVtTD5PDDaNi5",
  "key19": "4yKVVwUx2UHeniwpVqztAz6u8WLKHPqLqcnfuTy9SBXKdwW96n5qAEXsR8Sp8bBon5fGwDE61iLYVfBGGTN9wR4N",
  "key20": "4J8PtBsSXLue3CvneHiEUNnsQx5e87TYoj7xvcYLHJjUmCaYFzAhhnG7MtE8jy9HBzCT7iCGvMG2u67Te9tc2h7o",
  "key21": "34cU78oCJXh6gErgvnhVLMmF74KHpcckxtDJqAtC9orTcxuLh6z11NskqNZvk4FsToduFdeGKLt9igSosPJnR7an",
  "key22": "2MhjL6HQq6DXYXpLpLwuy4VT3qo4GxPi91yZ5H4xXDSdZENYA1jWESkcXJzDaWy83dJtoNqjc1AmYjSeDNHg7iAR",
  "key23": "4hrEJTpoHjBZPHLAbpfhxQMKJ2KeYc4K3TZKbwM5P8xon7eYnffTNpcQeEAfW1HjnBjpVJzcDxZ6S5BLkwj4oAPZ",
  "key24": "5XEip1AyuyxWGG179oMDAnCAUYkdh8AidRCgnaVhfTZgmPAefgXW9e9yZfoK1KJmsEz1rrxJGBaPFwYFA9xSavAX",
  "key25": "4jhcvQQn7Gu3L7UDDyPwLtjziJW3DWp9wsbMdck2ih2bjekxonpHehekCv5V95Cre8wy9VxF7YHFQRs7DAJzfWqF",
  "key26": "xpVLFmi8CfWxAmSPGivcfQVka1YvHREaKXVSPAurCghaTdWLYR4k1iBKnApHQip5U6DDCZZAkyZGyszyt6yRBkp",
  "key27": "4QqzzV45sa4rteF4kS7DS9MXxh7cMRwDyiqr5SM4uSWnrKwAV11fnb1jxjBavViAgh3VJjbKmkaV8DbMxfxvdYU1",
  "key28": "VuvYaGGUiRaCztXZjfUg15AQF4cukGgabPRrxTiG84GcsEJ3eRn3f3nkp86QKyf53Z9LRcrvGDuhHefwCYjTtqW",
  "key29": "4brXjnNcTwiAmaZzZJfy9bJnmuGovzVQXuy18MopQmrWNci4xQFYERiwoe774hh2F61RTzLtUJmNUSXsb7ZJBnxs",
  "key30": "5VnR1d5Uety4em4WyidhapDcsQCyJX4tXmsgbMzJuUazmxJyXfQyTEgcV5nkfw5wEgp5ceXCGeMNqYzHoDStFATo",
  "key31": "3yRYjeeKBQ2gv2PijDUqUszXzGgPJCGVJQfCfg6UgEFPVWXkxDESqVLjCnfYv94MhupqPXsgHZwsuf94ahfFsvCC",
  "key32": "2TfnaKYKprtxeX2dUrUhYVnUXq57hpTPweyNAU9PjuSLjnMLjQGgt6XMsyfB7caKg9eFrF9N85Jmv2GeWBfX3M1y",
  "key33": "BjGX52JAGuGQbPW4gvx4xh1UxewAVNuyShtjd6NAecXRCcNeridqrSiN4RhzRgPv4fdefuFvaiJyshZd8bABzRQ",
  "key34": "29n6PuuUKyQYN9XsrCUcTwPnXDVY6d2QbjtbRs4GpzQQpNzVabqyUmk4LUAfhzA5ah6RbaMrJLcockJVdCqXHQWj"
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
