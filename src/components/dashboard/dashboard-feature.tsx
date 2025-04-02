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
    "4phTBKogG62UEsNDgFWKmNCHrsuFHD88FB2WJFqBau6pCNgPzBTdKzVZw87pGW6GGbQ1WCH49wUZpiPHwNidSgug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HVcY74TLkXBUMH79zw2JaxZdVCcEs51QcVxD64GAJtzuGMZ6bwqvBm9bXP4Vrd16dPBBg3i6oCta5MphhmbnYBJ",
  "key1": "4TQEDchywvSy6U5GERcAddNNNf5Nj6JV8zqQCCe6RoGtQYYicxyomA1U9jioiKWMUD2Saa5Zfa65oaBTiuAW2uPg",
  "key2": "5Y5mWYn5Kjksh1j9D1nXpyMRybH1j5r3BqWqYA8HBvHCNsnugQnyhBAmtV2su245nFJo9DzNkbhjzhgS5e4s6mSc",
  "key3": "4nPQzqf5Sczd2nesacrvR2kRACE3CMpYfaefnFk4VMaCDprx7pvUh4evua3EZPfsBr4pxUbhdnJGKKT7hhWKGTw",
  "key4": "31Fh2UNYiAjdvcomWpxmJbcuDAxk6iLR1em2XuhHBqnKQ4XpXAu6dCy1PoqzHE7uuPKcV9nwJ79KDFJxAmRZrkSk",
  "key5": "2kvSvJJppJLSDXFyXhYKSFc2CJwZ99g4WBqLmBtGEbRL7hC9yUnPf8y6sjC3mgoURpKfsfiB8VEgqJgVykXwxGve",
  "key6": "4PYzUH3563MRsCBhboCAVUgG796AVxogxKwBfZPSpqTs21xcKYkBTCcCiHrk69teqgYLEAw9oGPRMe6pJU3YmhX",
  "key7": "3kzc2anSDjqvQbE2iQa4rs6stcbMW8BhveJMdUWKkB6SgTU1uv41bSyUYWHX7GUXj87gCrWcED2JE2DmHND4ssGN",
  "key8": "NVh9kBrcxPcDs6ziW38d2GyN5kUx4qoNcVwmAePj4QuMuJsL4W2fUZV2C8TqN3RVrQDjTeGgMqRq37CRdprffWY",
  "key9": "5ChJJCC4pyFSfYeV47fNWihgSoSiRJs3mHNMvLspojvGf8rAaoEqGcYZYNizDdMaxMiZ6aWrhe38bXYwhZXFpba9",
  "key10": "8A4BFgT7LD5JNHgvPwCAvcPpMJG1mY26YX6oVFV1s1xF9oyxXS7tQfWQmAE7rkWVWf2JAPpnsY9qTR1UnvLJNMb",
  "key11": "49FCWm2FYQ9qiaDP5daZCh3DQBkdkeo2J4zkG5SQQ34QfabfbBpUXumeJc6761GPtqitM1b1V4Ui9BCTzaixGRXK",
  "key12": "3qEn553kSGZDmh7CgtWEvL4WUf6pejEBVDmJTaaf4bzEvDfBFGoAsGNPxYCDmCTuZQyUvxgfDZBmUxEgHN3frnrA",
  "key13": "UTzN4wRHS8wAiAPy9p7ez3rnXcVZXTmDCTaamRA1Znsqveuv8A3aSsSNY59VKNyiW8FBfSFjgLwDjZkV5GHwxYd",
  "key14": "3bSx8Nrb5p1Z3e5e3ZNNMQmD5BouS2QB7QpABSkPZLpHj9YRtm7j7b3E359RTHSSWzptsPEVCX3LQyhFvJCqPxCx",
  "key15": "3LjfzXm29Crmajh2bRSJeq4PpqE73w1U93X774xjt8q24SM4HwBsUZGD8exm1FPyWHYte7hknnmXDrx9TEXaw2Lm",
  "key16": "5DtKNi8cEVvrUHAZ8i2CnypjqZtM8vRaFDQpnSbh3SmuZNLXZuy2K2rjVAACHbLTWN4JqUCs7xYs7GLytoLrnmh6",
  "key17": "3m7XhSuHVgVwBAgc3VTqR8kLYN4uXhrz1BSviUMkfgL6Pn9XefhENeakNjJiQFscwNucRFCDPrfXktJb1tFxn42K",
  "key18": "45bqoQB1R2bvEqfav2um5FCuZiRpAAc3qTZAVxfyghNRDHW26U4KiVQ55C1To7vrRausghMYN2S84iNBWxt37zqc",
  "key19": "VjJv9rKTR4U1i4YmEZNbduYTcBWU5TgMndX295u5Yov77mmHSoThYZZBrrj22AJGxjDMCxH4M9sP5uABNLRAxZR",
  "key20": "2Z91RaJyV16hmih8ApZvbcsFUaYj6K65yY4tnxDbb6TsVtuiwcCYXfqzG1Yu5AbBbVaUSCYodgXjxHkEqTgxYxgn",
  "key21": "4ZiQMNdweeFaFvAgasG6JkRFTbY9jKvDpSpQVKanEi5YPdja5ngyKkedGUDLZ7SSAK5vHtt8bteT1Wrxy17MFAeV",
  "key22": "u2LLKAvPLnrBLaDNYkeu6FpmYSdkW14QKJnSkDPaMxe9LzJ1eYiMhhE9rSxGixbaxeALkmveRMeNFpCrFsAN4qE",
  "key23": "zbqPcszWmLHo7YbnWQwbXVAf2t9LVv8czNPYYJHMV2dTCuV5KJF4TSqRacJmEwvh49tkwD8drrFKZJdxqz42ziB",
  "key24": "2jduX2iQN4EeQff6CR1NAcEpx1R3coiigrEgxjjYnE4W9FRhugUNofxFRb5nc2LVz3Ag33NnXdKfb1D8ayLKCszL",
  "key25": "2suhhz39hfEn1NydWw5sNfW93sbnNzyig3jZSGJXvjefKH66CEuSKeHb1Pdu6JnzohNNenDrCGmWCAfGa8QiygRy",
  "key26": "5as3kkehUndjYrvjk6f25j1GB35rvv7C6jpTax7VSgdAMKeccr3xhgT5VK1KnrSWqnqi1qLWEdXdwYddhTviCWZR",
  "key27": "4eybPzzwpf1FY11L5QepXbTdZLjJN5zBVFNZRphbatav3ejBaTXTz3XmSinkEuBPB7c7bsv3eePAqz2VCq2WGUkD",
  "key28": "5eFYNW4ccwwwRXPm2EtwdeNZLtEVGDYCssWkSqU7G5YqGYAbyeRwyb1AssfdHdwKwr71NCrBPAuM9pbQdXxJwJWj",
  "key29": "4omeeK83ydMds5vSrxnp6NoCF5t9Pn1RkVgHBiw9iznJwpv6fSUwv9RvmMSUeu4eVM7oWskLdcqQYTJdXKb2GSjD",
  "key30": "4yH66ofEJvatKwzgzGW219H7t5pnzdv8gK7nN1BLDqo7NZkhRvNymYr1ZxzMKogQBT8bsNzvz3AEQzUM5xMHG2Tm",
  "key31": "KJ5F7ttRZzWb9SGw4SDzZ7hUrZj7RncCQdNzT8zCAnmZq59i9TbPc3fjmztcT9KMtMYsBupC3YhXjKW6yVtL5Jn",
  "key32": "47nf3MLhP4oFiTZb8DQpEPi1as3KhEyhur4Vt6tpGMoQHMcNZpxi53tDsNQWadM2s4nUE4tRM3UxGVhk4rNUwCQP",
  "key33": "4p32EyPQe6VyGm4wF2HQ3Y2Gd8ZgDr6VxwrZG7fRU4XVD8xQip2xtf12jbj1pXdUVmHCTbDxVWFojTLwYocbVMBL",
  "key34": "QgD8Bi8oVDLNGTu9vuFua3KRcptraJMb8Yb5cVf7ddf9AMcKdDJGtWHshKqEXJWL5AGU8joAL4H3csaJ3wtNdke",
  "key35": "5BBy7HrhXJ1DMiDJky3SpQyMrxauucMZUQrX4W9Jz9vE2yVUNgduMEeFRFpmjvrfyTrjNtoz9EXjwLcyLAFpp3zM",
  "key36": "4RTCWSoM4UGZwTf94Y2BZ58nuKiFNeudZswPxwYQP4GYFVebjVDZdahJKqP3E9ES6WPGLyZrd3E2wa7rpQcL4D8i",
  "key37": "3BxwuMoR9d7qSuaiqs6WvaKXuM2ZMLhb1BtVonmuWe2Xx3oh8ZnkDLigm2R9nJoRCA6Z8iqbjzBQeY5F894yUVth",
  "key38": "2Z8cgYUBbzGrNDvJdLHX5jvrcpd8MkzG6F4yCvJ84ucJMberfZxjKKWMVvuXwJgXja3VrgasqPKmHwgDRhQXpJS",
  "key39": "3uXfNSRvwJoJvQk7iJHWUrqgmDr7uk89xjocDTzHcr6hGkNwJw4ZEuMe2Rh6caEdRXeGu3M7y9fd8wHvjQr6sB2f",
  "key40": "23WHFSgqE6Zd1Ed1t4Y8BqZF6DxHbgeN6LusH8GaKDgy9BHWgWHNxemnvBiXxYheDgUrPDuSiBNrJx6KEXbCAQKm",
  "key41": "26Nrv7WASyyjNgJtKBWKo9dWYJ5vNEfp2YbepCdVqV7Qa3SoFJJuPseUCJbYJYBmXJRGzbZ8iShbD9kF2EScbPbq",
  "key42": "3tFu2wLaEYAmukDnnuDGsWFZ2ZjeMr93FV4MBVFuymqf7G7g17rCkvRjax5RxPEmURsbMevdyiPgRpQNwm7a3qoa",
  "key43": "2v6GzoYoQYNUt6NLGFfb43ZnKKjSyNNUQd9NcyAfiwuP8bsExuxfQ9Q3XW31A7Rk7xWwCHSGCWM1aiFMadJ7TVip",
  "key44": "ksoZwadGhhgBHXmxCUyLLRcL9mRxTWqp4jJGMbaKq7iiFsWWfViPoeAekhqKsmjquKG7tE8v8hvBLwdqyVunSE4",
  "key45": "33UALQvd8krYjpb4Lrb6rkGJp4oPW1fNjgUT9KxkArNBwty7Vip8p18PzCEAJrNfhQmcnwcXTwTFc5L6gQFcWBjG"
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
