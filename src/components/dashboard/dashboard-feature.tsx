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
    "4gtpbeL5fUg8SQGW8Mfe63njBWqiu5LwB69XvJQUSjGaBN2gsRjmkXoz3wy7mfoC4V33VA4tYjjg6z8RdUSyfckp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nE7BpQgJQRWkp4Ea3EghQJgctEYTWAbPQznxweL3QQ5rNqGMDFe3jKsWUgzeAKFff1R6wJuXahJRs8RqxUo9uDw",
  "key1": "24D98kJ9AiMfXhQF21SF6XrV4vPZymDsfQeCv3YRjowLYsfBohB54tNnaKrsCn1QAtUPDjGQEmTx2PrkB8hQxgJ8",
  "key2": "5Um1SDb9fw95HLu5A6CGZfmCBPQn38Q5HFfQ2Vc6zbqTpYKH5WrzqBMGWetbzWvfYUoNeXwQxdbkicbzbu227pnD",
  "key3": "3hKXZZ4zZQ5jbXENMBRrN3UJVFKMbXRnZEYX4SzqTXaMbZU9GiyPTUXvgdfK9hm9dU7RVMAyJm2CkYxCZf1GrZu8",
  "key4": "68zEZMVnaWmBKHmAq3rvsG1VzTXMQaFXqkfMK98DmrsscpufWxqCjTS21oGEZU3LBbxrEjoWsb7eTZaHzUdizHP",
  "key5": "4T3tz7fSxp4JU1A368CCYNmFjsELJhBcM7vvRGGVoztEH9h61fZvHLyeactopStFLM3Huy1589amUdqEY8q8CJbe",
  "key6": "4xy8xbiLz94eN2tpVGH1VeVsjW24PoBX8mnt5P6FgmzjFKjbfBZNSH7vTspDrT5XTHGQSu5915SpbkHCc4hC2qB3",
  "key7": "5cZjkEte5HXYUb5EwQ3QpXhMCHjvPy1zTLG4faC9ib4PjkAr4QQhV5D8UmqwqkbTqCG1f28p8zkCmvgioSrb7dQ7",
  "key8": "8QHB54wvNiSZuGhidCizXnKp6gUKmQvqoZhRzxutErqi3KkVUpM6pdT56jtM8BFM2CC3VhAhAy6QqdUAFhjJTCc",
  "key9": "5M7TWwojaNSM7egnDQ9yCcsFirsgnusUTdQNCBFJ3TPfEaadiRpMqMK5tqeAbMTS2kPCrW414twfLcnUMrGfDUUm",
  "key10": "2FSu21CGFTLXdvKv9FSWF3Hrgyrgu7Gtr6FM7vKNrpwSBP2bnduZG4DvV7bSmgLd9AiDrPv1CHFoAARm5PxygfQQ",
  "key11": "2XwJYnPBEksYLUgRJnVM7i9mQamrieQx79LBGQX2nTkcNMV2pLSu58Jn2JUujgwYcyecUfAw39ydzzX8itj2x1nm",
  "key12": "4jsekks8yebRysaEU61AqjuvjYH6JdNYHxVQB1ku7imyfkeVpMnydzEjvEku2CDwv4GM9XjGw4uB4sj9tefeyoJf",
  "key13": "3Kzz4ETJboHQEFNmjMuomghhVuCvM9NwQ9v6JcUrWkJ5MhWNQ7BJWPwRTxf779pNA5QupE1yCM8pPsx9cJDd9Acj",
  "key14": "3iRPSqkomDhgPPLGjJ8NB6zjMrwSZXc4UHctpQatFJJ1oYcS4Lr2YGX5HJSJyPMSZpNmwzHbyWsr5jNNvvcS4Yx9",
  "key15": "38z5EGpTM1Phb2sJKP535HR67KsGUxS4dxhsSFtamHqvosycxafAvgbfdzRwBnKMioqk1codxxgos9HtA8sxvXbt",
  "key16": "3VcZ2tiZN66ZCScXz8AbLsyoRrXsNazNgJ51e59L9w6STNtjYAd8vi1bUXm1EGFRFCyGE4WuwzDjz59h7D4DhvDs",
  "key17": "3mpNiyCAqd9xkAkwkKj7U58hy5YeKJWCkHVcLWoWYj44FxcbvHkNJjJ9EbrcW19Ap89GQz8X7Ej4Jzu1cjPMA4qv",
  "key18": "4uYJ2kfZmvJgy6VPxP1T8FRYtv8bLJPjDkAFZeQLoMQfrt1VF28VmpyJFvsSEE9FArT5AZ1M7qAWeXicm3AuE8Nh",
  "key19": "4mmqQoHVvjgPkBmjvWHmbNsfeL97W2nzp33NMMCcoQ2K44aX66myDvSfDdMR7F8gpFo8SELfxnMvo4zjPa6K87Ju",
  "key20": "mMb4d9yRP75XYS7ex3GQ4m5JAJYnZXPzk7ZwAa2Xz4rZQX7MqdbvaJZ3Gas32C8p5QwE6jBuymGcCLyADNf42Pu",
  "key21": "66a4mVZRqtdgXPFeySN5UGBGSv1zkkxEqjHVvY6b4nfJvW7nQPgTcssuyqkmGqCvkLB7VS7daD6EvUKmnWqbqpQR",
  "key22": "4bFg6VNeSwGHegjj2iWfr3AdU2NFDhYrJ31XwEhxxpY2yZgranckxBVJSwUdqfCLWB9Hveuhx8PkSzDqp94ADWcT",
  "key23": "926RDJyLeyiKtfNkVLry56pDTijXezhk8DvH74oVxsyrgKdmVAajKoxKaSRvEaugermkDUefFwa3wA58V58775d",
  "key24": "4vFM9P2iQh9PE2ZniYpQFVKbUWPGYdu4Fwf2K3ZThtNX1kMrvd19ejbi8PjK58ytGeVRWdpnMHzvH7xyv66t5FVY",
  "key25": "b3R3AWtDExakHhSBXeKew9Zs3SwFAGTCKjHvTyTSpguWou99CzJSm7K46Dkyii2uaRZwVE9BWKmruWySVHiAyiC",
  "key26": "w7UFaCDvVQPbXhj96tNPpN4K9AxrjEoXHQhoaHhYuzPoUf5QgjUA3zExMPV9c8VMQRtE7txaq6EXexDNm46pMou",
  "key27": "2SF4WZKhTCXAbZwNkBnXMp1jXuFsPKeiApwVNXCR1vUewjzMnkCeR8TVrPyj2mLVcPaHdHGSHphebxmwTzDDeURM",
  "key28": "4CQJbCecUwkQmJkLuMLT5wR7NQh4DyPLzh5n5uVUTug6FEVDGrbJY3MyLTnrFs5LnEYaRgZZVQGYQUobjeKSwXK9",
  "key29": "4f8xJCmPU6FpfLgKZpnRHYm5n8fYVjKpLWN2rgUorRaQHQtiG4uRjffKCL5STq5aYqgYHLPX14hm8UBRvWZnYReD",
  "key30": "5afBvgWhxwNG4nmsQK2DMzw1HGPsN3eKLVCkt7nodvaoMhftzFZ7zrc2sts7sAZQ5dv3gnVNHUPGFJftvSrKy5v9",
  "key31": "2nHh1JwkHnamZ4qfZVXMVuQiusJMSCZvF1nJ9vMT8GNCxWqg7rYEsGbKfqNJTmwA1hkptePBK6riy41vKJZXc3Rh",
  "key32": "2gWq5RjGT15Lt2im4cR71pACFwxFUTcju84uk58bEq2mK7CjwB9HTEh4vNVqCYfK3fdhzUqUCoaRwQd6WVXueHAb",
  "key33": "3Kn24V9AJGDeP4YDfdH4aAHayBcqDbxfivopLDSoy2YLV4s8EeNDAsepWG4UJbyiNoxN99z7WJD7dqyJLP1SJCso",
  "key34": "5T9SMBNNcrabdBSqDc2dHV8VXU5ipMGtR7tBA78EmdVHBktN62PoVttn6wmGjCSW47Rr75N3yxjtwcrEGFbK78C1",
  "key35": "4JXeaxVfyQZS2vXFxEC9rTJdE1FBgBFhKWXd5qsL6KztbHWkXPTgqqPEFpdMusgHMMKX1mnqoidyFtbfeq6H3rcs",
  "key36": "4dgihPTjEBP2JMvAiPKqezYpzA3bLZF8aoLFiWcL1Apge34x5BjtNGbCk4qeEF4yvMQcGaqdcs6UPHiFCL5KiEb6",
  "key37": "4B5XE8MGr1vFFwmX45wyuRWTc6HiZgymCrqKK4YQxsGo67Vs3mJsbxUEwzpzERS2dpQf4B1mC2CMhaCuZXMYdEbv",
  "key38": "3qFhrimpqqejoAtGgxfLk9zkUCDehpANGvq6BpHTd4jnReyLaViHurnh6thj5WNSgfoAGGktnS4t4fi93i6u4r9p",
  "key39": "59PQDjSUPVmYoDk9MGATf3otm5ZNsJGHQ28ebsYx1zEgAVq8bPdiS6KrZdNcTMveKLVJZxvqVmKeg7iZVSqkdxxF",
  "key40": "4AaxjmHVeFNWfd1rLW32jYNHFbSFPJwTUMn2tKR3azy3NeJZcMGiPSALHyiMwFEpkmNb5sCZ3LWK86KSdzcGPkf1",
  "key41": "5hEkgrGJUAVvwLDUm9X9yD3wV5Mv1PWZZVadYuXjddPvcNFaHJWvJ5cyRiZ831dwgsChDPgW93ffky52a8CaSvMu",
  "key42": "4rZrk2w4Bj3bHcFxv7PMbzAfXdaiAc12U57kZcZdgiXXRkgZCtm8L4cy1e2rd1UZBra1Nv1g6jc7f4aFBDnoUmD4",
  "key43": "5xiH11AtD5W4hXVuRKVeSwD8LuiT6jCMXVPz5dsyDStZGZHzbDAWgE1cFNHw7pKgs2yJXJqbj86jvkuWu7rny2nt",
  "key44": "3HHKZ4E7aSqxB4TmXi9zPMxHdeUKW2JUtSod3a8iECnuDhqoJ2Hd1MbEouRPypYokkxHXx5YKySje77nCJZpxQM6",
  "key45": "58c4xz8iXtj8zth1Lrvi87CLGAZiAJe7s9HGKnTkNACBAV86WEE9g5E5DaSpRHL2kgad76oDAqoRShxJjVNWiKJ9",
  "key46": "2WATh7PGzbUXBA6qSYN1dadrrRW7QFwau86azrn5AhHJWPvGAKfd4jDjTZTTjt6m6uUt9mMFLvzwiByM5fVrWWCN",
  "key47": "nwiJhobm6NiKcCiQnVqJn7qkrGyRVSvapWn6x7JmJjeGj73Eyborn4pxUUuFPxwS86u3RcttCAYApMemhCqaDmk",
  "key48": "2yCve5TKR8Nfw8Ws8hnqQcQw4xC1oGwtbJpMnvpgeGpncENFJE1e5uEfQwwNw2xndcGTShHocJVGxPWgJKcestzS",
  "key49": "2kH2c9tyeQE8HD6v6HrNvLHKtfV3j4yxQSHM4MrgxDrmRayPk2TdmNYNzktd6DgqgNk8euKUgPdYpRXYDovrJmGk"
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
