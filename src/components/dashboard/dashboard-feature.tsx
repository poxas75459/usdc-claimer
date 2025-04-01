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
    "7QN33gkFhdr9RsjUhre5oFTBn5kQrYtzcMDSyRNGdtCEnY9rLFUkuK54XWpZnDakAat8uKkZvVHQptcVdz4L6Yr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WSW8QXajqKf4K5Ysinew9dNAQTgfw6PD5Ye3GKBtTzVyskdUgFzs1Nx5JMaktGtZqDbGvaKtigg3gZAhhJGritQ",
  "key1": "4KWcXJmFgoDhjXuy1kPkY9whG9hEp6ek5DHAD217jCJ1M7GE9r2SV9nx6nratMgeKhFLMgfMRnmhsDH7q7iJmyXw",
  "key2": "2eCjQtxT9xscnTA714qktPFKeVkhGdgomp4PK1EPy52dJJfGgBB4HoHKmqghTZiBT6mQCskqATdb77f1CqTB3cGC",
  "key3": "26sYunvzFP3h5e4uWbxHm48SS2yKAic3cMZp5wyKPMrf4NAUR9giUJuFQhboxHYkA6xYRmHJfLk4SwUUTfrhdVRY",
  "key4": "4NKxtw2mb6tbGugzGGDePMQMGKWsSNQuFcYkjMDjeWdg61i2jkjVqmBoBaw89AZswEDCGyrB1CMi9KJqk9tXr1U4",
  "key5": "4EnatGhuf3y6oY8B9tXryvdU2AwBqGnpTDMqh73u9hmeSKhEhsjy2EcQAWeQLPUBordZXEHAbiz7q5ixcYw6Cf8f",
  "key6": "5RJwKZm21EyomsPYcz2WoEdjGdcXEwUVczpuZqn69xLryUtKeKvCGAwcRYFdJjhvJmU47C575jnZ9THWbYhwV1Ni",
  "key7": "2V3nhHX36UxiRLHgkYumjR4JRDfZthz3SwTv5UU2TMuUg5HXcSJHjsnpah6edptAjCTGP9hTvYiBNd3a9y4Gxy7o",
  "key8": "5NhvpkrK4n14zRR153LeAsBprjKk6sb5AJp7mjMkQPKqGACf6sRwXTLG4dZEsa9n84aDgK5FTSYgUaCUPYJWD4ua",
  "key9": "4TAUunYb8xAvbUbL8Ww8cMtDeN2avua5Fp4QEDiJ4PCSpwTF6qRQ7cW6sJPLz281PH1N5Z1Eq5KcUHBDRhtmkDyU",
  "key10": "4pUR1g5wyxa1kHSNrEw3XmJceCd7gUwpejzJSgAaJ8ctWamXYuWnB2g7YaccAU6sQm5LJ547brg35gweDkuANPpV",
  "key11": "45y5H6b9Wb8THxQkuxsM1wviipHEgxc4rqVoSRswG9HfmpyxNxAfcw3S2JAKsmFoUJS6xbci1x94MXRVWp41ikwv",
  "key12": "HAwno3nfChQhKFwCCQ3S5inTL91LNkYaLTKJX7S2q3N5VPuFghrQZZ7zombdCDhCQT9PzMoaXABUEXP5fWZnzro",
  "key13": "2PW155Tnuk4ngdTopakXZzLRAheMnbTsZH5KcGARg9aJRk1QmPsTwsn4cf9HsLQyrxKdqnzcBrSQyL11pNXTSTEj",
  "key14": "3pZdJ3nzhBhirJ1s5WSXqp2KHUQPbB9CG7zjUamKAoyvSnABxwphx1mUPWJPYEnunHm9bVF9BTiLR1EuZ5tXMta9",
  "key15": "4Ai3SDFdkeikCyRJLxGosYg7kE4T5AyXxF9guqBU9pQqFHMHMtwB1AMiz2FHxj3Xk5rAEjWVGoAY9tVykS5qH91d",
  "key16": "idzC1ntxv6NcMCtzsdqntthGcAQ2xtTAZwTndcTVq7yuzbyDcN6WuRni4tNFAdVM5ZwsS7fpzuWKYUFTbu2gr5i",
  "key17": "2ikRTrK3ggu374n1B2T5ojoQeAQNiesTba5njf2JBTEzHMC1GrT6RWrP6ahKMqZRp8nzoApXMtAm3w957cJy8uVS",
  "key18": "5cZKDo2UQMpqD1qqN8gEEAS1BMymiNuqD6cWUtjevcDuY4qm3rcUD2TGoFPiXnTh9PjvLmSDKhE8mckJQ1kgbTht",
  "key19": "HG3yqzpJtjnTsCQpmvJsXBowWWMeCNde4Vvrnoj6TmWHoZDtEN1pPF76wC47wQbj5JGSU6Hy14njx14Sygw5zgh",
  "key20": "414nTowjEyii9qrjKyGUjqYH2JSKeNXjkeWM5SnsZJPKAwgKBN8CJEMMAnkuETSBmAPpuhDZjutmkgk5QnCtSHGn",
  "key21": "4ZZ9UgPJDvWmrapc7JWMySTyiiViR4JLbuQWb8dx4TbtRGSFRHPS6WHTaXVRJb6KGAEXuhxbi1GaHvYzu9tYTQCo",
  "key22": "2dpqdgiPm8C6gJGXo271ZHR8Q8TdSc3qg4uTnDHLviCDs41wY3oga8wsGnc8yYiD4aJLWedts43riTxm9b66SVvj",
  "key23": "a2b9qgJCKo6BKfmWnmVFMNrXaQmFGVvbxnTTTwRX4Z8HW7bTLEJ5GFZaf1NHtqTNr6ppkp9oXWJ6z7dCCuRzNXg",
  "key24": "5JTZtyqCAw86JYXmS2JEbURBFHBAe4W9CHAGZ9NWz7wKxjLFc6APCU1X2QiKb8RsizAS3TGb4iwHgwd1K6auMU9x",
  "key25": "3QB3SQcg3rCF5RqyScFHKP6VjEApUVuE5dCnoBZo2bUxDCvZbnjLN7Cwmf2QUzyXQr4igLM1RoJNxPhWBWcmDadN",
  "key26": "2JfEj5Yi3xqqqVoqL3L9LmKVssqbhm2RQpJh9DQjxyiGhUAm1nB7JLHZy8wPEuU5uBNUkyqUgDyjBVThcCgBbDKu",
  "key27": "3gwiNR4LuEVPYHpWT2wzd2ygbZQR7wYXaZpiK9wpAixs35uQMEqhQSfxb32oQicGk5eAhayW5fwCBkLuxEHBsaSu",
  "key28": "JvQ6dv8Xp7VQErMSVHJuP1U85TdSAW6eJ7FZ9VXMUSujL6Wypuixu64sJcBrxpV4ocAuBsb4MeiLcqt4rS2PiR7",
  "key29": "3WAQzP5gZZeH6P1foREcTpNEjynEwKg75GJxmDuZ8dbvY3SaPdKqwc7TruS7Ujg6HaQvni9Xj4ufvRWNYmZgQZYx",
  "key30": "56ZqRA2GVq55ukdZzW1DBxEfXqhhzhJdhkGdV4wADgvHb6DZF6BdeXEofhxFxgz55ZCP4dZsqa7e9sFC6T5hQecu",
  "key31": "5Akd1P6ZmadMmDTfBsUw6bZzAjxvNF8XHHampvPath8HsJp49GfD8svJ8Ybt1MyTQcm6tR39wogZzVJje7Tj4BRV",
  "key32": "4kqxNSBUFjG6U7hdxvSDpdj8WmZ3ZmTN8YmFHrmniw8gJt3uLaCy43Y66my8tCdW5519D1SsDTYmEa6NTsVd4Zt6",
  "key33": "4AmJuJ9nCXYqZ5GtLdZDFwS6edbcb6m1pVaqEECbQyY95eHe4k8XVr1PNTkF6QKHCrUCC35va919GXv74wQpvMNR",
  "key34": "3QuHn5TZz9axmRenziSx1Kj1NfhxMHWvPsbxjYU4WjCMDTcJLGmKP6bKkHHVVgpNM6wE1c6JTtmsgZsqkiGVbb9",
  "key35": "2anEzx6wAJexnJGp1d5dbG43dczgHmsRtTL1CWBmsbThjaCJKAcsLCmMws1nyopxkptaoSGJAGuDmucKLbA6KAuV",
  "key36": "3Q8GkqXohUUvMtVaiFi17RM9iUYjvgXLbaYTjw874apRN7SXQc627YzWaPK6zvzrTr8XYn1WW1yUEbyPZNZrikmg",
  "key37": "63HkYAkrJ6pf8v9c2xeLUiopbzo1aHiepfCD7RDnNKMFDTcJ1STGgeVzig43T38EYsN9AGsp3ASy86R2ybJJ5d4u",
  "key38": "25TKYjAiLA2fz1z93HpAWSGhc6Y2Pg9dry7776811cPnTRd5CHunLRJSudm91WixX84YkLJJhwFwejPsjeteR2tK",
  "key39": "3744yEAzbBumqYpcKnYinycUR18pedPQVr6JFXNKB5AfKqK9yF2Ytv3wifqTa4DrRpHP9xWfz6HhUJu8iTh7EFxM",
  "key40": "Rq98una2FDDYYQMEAE3hy4MRUH4UHpjhddWG5mZDLHRQ7PXXDB3ePhYUhZZMzMqYfcBy4dsuycskErSyYXFD69c",
  "key41": "1fW9bkhsSfdrAkdRHpTu7pQEaD6p8A4zKMY9Qmzgn4CiEjEyvC26me5daRmwFb8F26eQRLeNANtKTMWJWitFgdZ",
  "key42": "3ambyfY3HGMeeTh7kcJBg3C7ZCt3SED5kxpV4dNyuPashrEShKjSisZwqcNGumPtM7vkE11F5yALW5VorvHFowac"
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
