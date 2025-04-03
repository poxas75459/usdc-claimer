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
    "37iqmgEaKKyvC27UvujKRjjsAycaUKC5WuaZF5Jc8Hk7c9x8uZ6HaPT6wf1BqRzZYq8skVc5z3LJbtVbpQA3BXE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YtEReD2BJ8FzeE95XmEjoVkWViRZpLg35skAVsf4GiH6YDpp4ucBGAVXnUBzLDcssdyQU2Bfk8Xt8ZBa2UAhnpu",
  "key1": "38rxkqpNs99CH5dbCuRcwh4EFJfubEVLu6DU1zVu2EjWvaQFLcNwkEKVujPNjKtdf432utL7WoDbMEGrFzGPAm56",
  "key2": "dquKUiM5oToyGcNworkgoVUm1Q7hq5Z8j3V4KCkSXHJscJNgRTrwfPsAiR95ko3TGShyxNhnVkedVSQWyfBJAwd",
  "key3": "5mKwKfU2kKDgQJMqzY2bbUh3JmxsrMadqhGqxKwSnhzuDBuSZY118nceDgjckVSrvQjgX1kHEnFvAojaBRtu8SeV",
  "key4": "2CeRktsLVWeFNVvMzh28NHEjMdQvzeBbedTB2pcK7ch3Z2vq4N7VKBTQue8sJfobAVRPCLZ37tY3HN27SATYSPRB",
  "key5": "4PqT3zXPHLmxnJEo7urw5Sf6v4QccrMXTYoU4A2BQyoHSKdP3djxgvAbw27NyzsJBZ3znY8mA39PhqaqBE8BdCdN",
  "key6": "61y6A56fbsYppp6uMhvg5EyLTeWqW6qhNbk9WtpnKWRcEEi8gPz3cMbz4eTonPRXsp8UxgFepeQwbD8PtrDMxRFX",
  "key7": "2yUvUmt2Y65Un3fSNT2fpZNRFuSLqqgLM7CUYzv81z7aWNkhFWe5Kv95h7aFnpPFDH6aZ5YYG4xXXAmdGbgGSZKp",
  "key8": "4rgU5Aa2D2TjBBcYieqCjt37Vnph2amyA5PmgmE286jZoQ8THfkx5PfURPBRVwBCqPdxzdCHJ1r48j3AMQT8pHot",
  "key9": "4nHPjSTHRa5xz4RrwQdyzFYpaq2G5kb8P6USPqxFQbopAVtR3kYZQvv6Fs4ip6xmaCcT87Je8v9je8kmHhPD5gEL",
  "key10": "5GMmxNTatCdaYd2Gd28VMPJT63wWMKF7qRqx48dP16TSRkcWG7GvFyJujqBMEwjwWBcaGZMsx1orgxdgQqvmD3qw",
  "key11": "3FvZXoP8vcmmPhy4u2t4PT8J4urtkNVAkLoEdb7QXVTNkar8Fbg2LUckD4JKmgXdy1eiVbNUfiBFxDDCgu9fjz3E",
  "key12": "4Uod7GsnLcFnVgkXdiLjLVUmTsmATtnyqax2cG94MhBU8vh7FQx9pLaxVFd1g7jNacSZrnRXfQLXE3w5mDBz4yLV",
  "key13": "221XPfSofiQH9sEavJRHdzvm5VmDG5U4rp49i2eq5w2nZWaa8pgWQhrALTkaNrrhNQn1EFf6HyXSknhsRwafBVWW",
  "key14": "otbXz8UkyBo9KKdgivAS9PDJXwd4tJWRhaKvCWHvNcQ2wbz8vJoZiqAK5j7FG1PqS4n3UHFqcMK2zAHgX51mzjU",
  "key15": "5ks3eNpU2AZDA7mcNCGkgaaQYSMNMVjebivov6fAzS7VJNCWn3iGaKjUy3tR6f9TiVPanTN5PfB4QeNyovgd4PLw",
  "key16": "Z1jPvtkurHYYuqAWLQnnvzU6toqeaT4BPkQFP5499Q9s15D6a7dMzdKMk5Xr94TN3swbiFhkCqr7cmaQ8nZ83y5",
  "key17": "283coV4sHtpjjjBnPmu8dzjuLoTsakhKyhpVHW3x8b5W8TPhyonJQqyJvufkYWDcruULBsbYsN7Nh3DZySTD56KC",
  "key18": "3ErqVaKLvZGKEQA5A6Vgqyfz4LPwg7vXGFAHX8W5xDzJicjYGoFypLvXE9puseTQexWipmRkFjZrCvyfRkA5G6pY",
  "key19": "4cw7qFgJzhtVxetDvX7SNrXkJMyNvgASBo5nVPjHhSJ55FtWX2vb1dvw55SrG3NtuGG2Ptu8L5x8KCL3GqC1NBLL",
  "key20": "2X4cBfvikZzU7L6z3PMMr36mBkFefD2dJgGxaVwxSF2WhGqNsDnBrAsDbdWYFmyu27HcRf3EpPBd4JsyHoqGsssy",
  "key21": "3gAsUbQ9dPvM8mrWuQ14fLqDHp7nZP5saASG6RimeqMhK4xmWKREXzPiUzc6k8RvZkK9v7Brh2yZUM8ujhgKGPty",
  "key22": "5dcP8LuxZjqqMNhR6odm6NCzPtwSFhCgBWz6PjE9uDxFynELUZbsw8JPgxW9xk6tLhxxiidFiWqunZHspfYbPDrr",
  "key23": "3bVVS6oL9oWczFCr6shpEuMp4nYRQvrERLuvFoaYaAjBuDJNo46fhV1L8xM2EfKFH2Jkrn4UzDRLFZGcdX3ojLar",
  "key24": "4G5ywMXYcPLTz9oEWABBFxkUoxhzz2nje8ubXwC81BzkSz6jeaQRzBz1sxjyioifLLdfCjnRoVWHdSAYV8G2mBns",
  "key25": "4PpGHtKe3LjBSwKfc3NbYPXUNJCtW39NDHiFPi9Me8FdvxRNtkBaRgBJCYQBhRwi6Sn8G1EYi53tdYFuf6rjDPaF",
  "key26": "3s28NNinckRD6eKjF9yk6kUzsvcKYegUDGhuEffTPg4i2XhRYEW3RKTm7N1o7Vqxgs4YdgoRv2LGkZomcQqXTgXQ",
  "key27": "2osmUCRfjSj47Be7ce7sHRvwh45i1MqKoxjmQ4muUXCpvDNq4ScLtivDLpcWkEJzkmj74GhNa3sYbxFbUmXzP53L",
  "key28": "4zFkSUbv8okteT4jZ4cS32tcr6dG6G9so5PVysaN3NMhHchzL9xpkdwWiBVYcRShzYU84WsoUQBQKbYmjYjbtaCe",
  "key29": "2dtdgeowHkPtYPUnuiaaD2fjHyHv4YBAGtf29PLKykzdm9TZ3yXmjncS8Y4w5nFx6AQUPngQ1DcXeEwQpzBP8SKN",
  "key30": "3DvHUPPcYhFKD3WpgMnFhqDv3CMjbhYXmwFL6omMmnNJaFziLzL9pBtuVvRDh3euxEVJJpyTSRWuy5PGmbNEReh6",
  "key31": "bHbUPWz3T8FmbfvammF5ZiZSWqW5hxH9NFQsRA9kQiE6FGXmXvtNrTBB3fQXBz57MrFwsWeWL4ZjCanoKnT3Caa",
  "key32": "57xQc24csZ6H4okCE1Lsetn4Adkn29fQa3EcbgxT9yePcnEW1JHfcQbBUrz5x2asYbjTkKJMS5MFP85PpQHb4Yfd",
  "key33": "35zCbHHU9ESgLW6YN8HcrNMj3muvCkBubHCXwCJtfdcN5N6DaKSvXXT89dGJyEbpzGyw7c79f6cPFHKqkEDBnFqm",
  "key34": "5Cz8d47WBDkei1q56d6tUmkSbYC5cQ24SpkAtDBUWz2kRbVSUqWSWY4fRU1rktqbhNUB8YPM3fk7VRtPZnRgnjZs",
  "key35": "3T86oMZ86fPhKattyA4CoK8WF9ZA8W7s65R3K3Aomo6Juyq5WkgU2Wyguw8WQaA6m4BR3R1qY1ccuxKHvRpmW6WK",
  "key36": "5wJG9RbfodooyLCzJn31fiRNGwkxvAvyCfQu5HwvmoDLGrPH95M1ow68iUkjRJEWxX7qfMgRJ5upV7XQ9DMNf4yv",
  "key37": "4Khjo868hyBbcZhekgVwgJLFRr9gN3DKWjvw4eLgBDcc35g9VoYSWHFagv4G4SpghnJ1GAzFXGj8fycSZXqLJ2v5",
  "key38": "3dnBdCvdJXdDSRFSqo4rGf2yvvBvER3AHSrrh2PGQwFg2eZsVwyBkvVHzjac7AJRxT3z1AtvjEYXXcF966kcXArD",
  "key39": "2zKydTDA4mWmp2on2fb11KgZ8W9VrwBsskyvPgThKLwJZUbLoxNyGgxk63WdAChxjcq4JytdYnAXajkTzoYRo4Wu",
  "key40": "8jVnGYo5GEJx5m3o6ttkbhngiySTAVCJuMjyoK5j8SKx62ZnCHsQVkPv1HYjSeoi7kUbtGAs4KJ1ifFcGrcQiij",
  "key41": "5GY9nZm776d1S8khyDxNrx1ikbHi6XQTknjCxsycgqwqUHutF4Q1EWmERa2jwtUNaifuiHr6WvjkBbWyGQr8JsWP"
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
