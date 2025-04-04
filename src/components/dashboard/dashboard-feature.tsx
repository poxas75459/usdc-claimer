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
    "5tvTotbpUxgJxHjcP4mRXt2R6MEjecggjmZ6qYcFr2katkCeJLYVt3cqB2xhzEuq9K6R6F4P7zHdmjseV6hi3a4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CgeUbyVvCWRT6uQxJR9SaQfLQgyeNKHecr48Wd3992dTou8mRyeaNEMSJNM8rKb9dfmahP1v3edqdVH5p3ASKtZ",
  "key1": "2G8GFFWePXri1sapRr7as9pVHcCEek1MX4eiAhRJi6RTCAEagk8uH6zLTft8cnFv4wnMsBZFQLpuVmZrpn6YH65B",
  "key2": "6EYbnPEwNUoKqEbvhRiqNMHRDFuPFUJb7y51oViBvonmxo38GqyDTbZ8pEjqiKtLW9XX374FFicsYooeZmpMRTp",
  "key3": "3HYXpGESuJ7QXs9nnofRRxgPN4oSwXPcFjeKGm4PvYsZS1HS2HpbSBu9qafxc7n3Kexg1Vuu8Rss7NK7j9S9HKuB",
  "key4": "tTrZ6TcJbuVpTFD6M1koT1aznrdPLNcyhh8VvhsUoqJpzXWPUuTgn5T3135iVckbEf4j6YmzGRc9h99nkEP55fP",
  "key5": "2zgrBabopf7trdh4jPRNYWvndMFmGPLfJ3xwkDhNraBCoVkdDotNwEs7ZZ2BRqnFjFyXFpTuNU5NV7ZKYRyfb4P1",
  "key6": "5n3NrVefY2CLYrcn83gfhvKGJ7ZNNJN2vgY4D1Lg8ZPRT47P34CKfEiSC5Kp3TogecPvyYyATiWPhxPxmg1fx53Q",
  "key7": "39jvw6rgMSGsMPEsi9JAak6JHkYq4sRUZAbXayH2sFgD8TrWtUH1ZR59VpGu5HqVc9RdZjySGTWEQmbYTiuGkUit",
  "key8": "4hqRCGbjRwuJ12Gt8uPGht4xYcDuBXgAm76f23gfrEkp4dWMk6AnfXPfEZ8AbC7JpMRhqemk9CMzkWLXj3JTShh6",
  "key9": "49ecspd3TA3AF947D56ZWdeWhyBF5Jo7M2ykpozY9pHuG1GH9Mkq546MbsTVC4DSvfhyYLdU7DBRQvZRiGCpYGTz",
  "key10": "5UCvf1S8Zj13T9TbspN3FmtqP4D6ZMHCBwkAKubmxbTriLR6otFnyQ2vdKzsND4ugMBVCXdZnhsgXDsWVjrmPJG8",
  "key11": "4TRrA4vZMVmDt4u1nE67arE4X5He4Cd7Y3RFxUccvi2pDLm2U7JRuBoeKTUZ1QkVLAAoCNAcjHY44FJ3XNeqcMYr",
  "key12": "48NWzhiJUdo1A2YNbdKgqvbfP5oCSXu2TewSyEKmtqDYM2JrCPgpYDn2nuZPfVzSSzzgJKAfnWsyzL1Q9MvBGwKg",
  "key13": "4vrd9PjEF8suqKZijXC2aToSLTBGUa3Ep1THksW8bQPtqWFQLyeiGvqeadxQRo7wPEAj3Z9GWe2r5b64q1vVY9DG",
  "key14": "5DmZbPknDhbS6KhC1ubn5Czpv1NC6o2XSf8qaWrhz9bNCfgqmUS8duM1TcU9Lbr5WMQKYMxfwKo8WdYVxk8xwk2f",
  "key15": "zDymin7bSbiYSTvgrQtBHa9cbHANDpHZLNS3cmUHDUmAznegAoophDgu8pRYXH3RiB5YWjEgtKtK9U2h77TNQwn",
  "key16": "2DvuF28dhtWJVCHSRrhFeH7i4YPB8NcXGtQwcehiZZn8F3bEsuugYct7dbUmwaD8r2r9nWmjG88oVtpVcJiqdjUz",
  "key17": "5cZLGq3LR9cqAMHh1SGwWk4Vi6SY87D62NUeY9thheAxHPngp3HULn2LKgKUAPYJTGCPmSvkJnzRUoYbAaKGTrBy",
  "key18": "4zaTY72gAsr38wTfGMxYd7dXK8RrxXHYC3rrBP3FdAV6NU8t4urvdoC7Ep4NkgwWMdnH6HfNHJcBSqqVqTzikDYx",
  "key19": "5aWmDJrqtePZ1hsppa7VHeQcA4S16W7NcbJE7DxCGVjBJsJghF3SyZuCoBVLP8fL5fU1SGi82bwUxBHGLUK5wHKM",
  "key20": "fz1WNjP1hHsYjMW6pCNZaAPcgLzNePfXamyBggMqfiZHAwTJwB7mKrhShb73EtRYYqqyDwN9PzeJGYESdffCM91",
  "key21": "24xkotgDhQcdMKWoG7rfwzrfMHLjatmRbeYH5afiTuk5Bp6YHtwas6kSqSpepK75ea3jPGnJLeVGQ7iudgNMNep9",
  "key22": "UKLeR1sczwaYuXMBZiFcdmbQvcSCq8pmq16MxXL7MjytCgoTmi9RXZfDp6Uej4aDH9eSdYE8RrNsWMaWc6Psf5X",
  "key23": "3yWqBedF9nsqUWYpvqFj8hMmgnUSWLVpzeoNm7NSKgA34kcRVQgEfjj7Eg6Z97bMBJ1pSBmJ5Le7LXjueHSNhuMA",
  "key24": "63wpPYUcdFqFnkj9ZjgXVZvSbvLrXcd5KsznmQcrjZV7EM4aSCu35akfoNBQhYcSXJh346TheJB2bz89Yd1eagX2",
  "key25": "4cicxsWvCTQF7T6cwAExBaFbpCEoLyg5ZKc5aJqrxdGSMbRqADgg6FFcH2kPe3s4bjFiTW5qbKRPPNCQLmcoHLPA",
  "key26": "PB6XktV8Fidogwie27yPptUjT69ksn8KWY4gwE1FPEqzjUdmV7Ct7hiq8wTG7BJSjrcf2YiuQpegmx6RnV8h3rx",
  "key27": "5yersdEB4ZPRY1VVKN8sV4U4NvJiWBsrBoD3hZGHAN7FuEVuAkdcHo9qdUPYnDmgvCNQN5S6Cub9XjJTTDejtfrV",
  "key28": "3TLEruTYcEgMdVMmhXAhSfru1inMqtDjmFi5e3zgC1XQooYwyUJKvzULNA6UHXWVVH45D2TFGFqPeBCubVFX5DXT",
  "key29": "2AQc83GmHJPkcfMWm7acj2xzdwKeYKqdDMryNt63D8UsQZuspMCw1a6WG3Md1HQrG7LD2cnAUXPURZfrEVUwqgDL",
  "key30": "3MJ37nLN2evCoQ9wNAxe2vAe7X2BsQLUjfZ5HcwAC7D93qjQJP7HHPB1kaEUUa3wZ7G962P3LqEp1VAkUMVYqc8Q",
  "key31": "4jxipCKUnLNpEiwUARNgdXJFGCWJ2zZ2dp81HYYpc9zfZaa5FqvydoLfEtoYtGVcFtEwXcCXzoJB59sDEG4UnMES",
  "key32": "24rnnVkkBTrEw9FKsiPBgQNiQs3av1onuQJzwoNZXFLwdS4LuMeet5LopjV8DiAMA7UtSJAF8Xa7DE5fSesUtdUf",
  "key33": "5qxh78kdwTRVKXgjvV4nQEhr2wL7Nzp4oqYg5tdH5KJRgXmQirXQxzz8LoiBApf5G9hsBRJ464GbEh6XnEBTtxhK",
  "key34": "c9FapGnKQezf4Hs1XYdTW1DqHZchRqqV6iSo9Ui9HQBGM2DZzvWjswzLdoLSVMXBKPMR3oMivp9ULSZZLRmuGgR",
  "key35": "4wMukVHp4HWuws65ELSdzYJuYcPugkHUXYj7gFuCsG4QDfCKpMqnYWz3cDLXgjF3fbCE6qhJNtH35hX4p4hRo86V",
  "key36": "3MqLnBPovbVssfhX3JkErwgQyfwoLEUeMXqHRSL3RWqfb8smWwcotCcBM51XnwvNeS25DuG4NREJhpx798gqDDyY",
  "key37": "FFA1nGqBEDuvuFXck6mTb2A9EbbeQoX5DGJVofLowZYZq6ZJd1mkEzdrdZ28PRW4pg4g7cqjXSuU8CqPdoWe4fw",
  "key38": "g4A49ZmdT7hL33CQYpW6aEQY4VwsRU9ktuj2f53QnM1uWEjnMzPJYHjE2ehgadFUdmUEpQ53axh4kf4hpVPCmzS",
  "key39": "rYTydoq2vcMqpPuo3hYW2zkhYaQB1f5V6FcbJKtxie4E5qYdWYtAqsuASXairFnwQK2W9SeRKC54JB3fM1yS1nN",
  "key40": "2gDJZ3MMHneQRPB7GL3fkPnGcMWwyHW6kpgJK2GQB34ZkAdzHZzXAm8xjzDG27SmsUd69kWTCa1dfgtwvvBHR9X8",
  "key41": "5z6wNJbXE7gkRShYyG2pUaVrNbkufhRc5pKHAYfb83fPijmuWfGsGm8XWqB3vme79hPeMWQDtGgmrrVRE9MkT8oq",
  "key42": "3qxbzQmaACSAsLrQiXtt9Fct9pBTaZLnC3SoHDg1q6a27bQremRg83fvNRLKQfMCFkVL9Bwb8zXHnW5KLnxerSGG",
  "key43": "4jayP3p3P2AXZfiGB4wvGSZWsVxTPST5tkrqdYd63bb5hqhffoQ9aJT2fj1JjHqCHZ3pphSUdDJqyLB4NGPfcCTF",
  "key44": "2CiKUPAWoBxThsbFw2RhanHtvR3dm73zpvVP3KwvEFZQw4EsYpzzzqqfmAwkRBfWXUuFoYt5KAS2WiE7xQeEy8x8",
  "key45": "5TVEBGeBYWzyzPNRBQHX6efosTTMX3n6YW2pYaz3oFjtMrnkpFVaoUxsbemRCVxuf6XKXtcVoz7bETL9HJA63kqe",
  "key46": "MoomZb5LX9SucNEdVdvLDFyu9k5QtswV9uyZduFEdWQiNtZWqv5RicMVVd6LTaSntV3uVSUCr7tscYHs8DEaGpq",
  "key47": "4DF7JsjgtbLwVRY7KirBAvNyXXX5bxmLie963VT8rLs4GNcMfp4T4Ufr9bMCYAxHksFicSumQh9SdAbQcz1ujkBw",
  "key48": "5QyPkqf9VKt52cE2Cmkv7zHqyHMtBue98khupvbLxhoFwFZhCgdH5sM33qAD6sJ3xrR7FPxYftDa9vDLshQ9g7Zv",
  "key49": "2KDHEH6NFNouxeWA7627yDmFVbmj7dDvX17LsCvpEhAPspc8vXzZcn8LspzR6wcksE8wdNSfVTA1VKMitzKjjnK8"
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
