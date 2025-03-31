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
    "Mb1vKzYeyBukpR3k5qKKUXBRGe3DfbxYaXMXQ9FzejTdKj7w28EyP4bPGu5DBzKB4HynXYmmJSNNVKUsJh9U4jF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iBrtmEQ5P5wUFcgxjNVDJnxkwWyrndq3VqfYgCAZwk68XpzW3VTx1njE27GsC4HCxh3apiFgKZ6KshzrBiQGbSv",
  "key1": "5shZFRtr9ft4ZUhrHgoDDdKrZnB3fJyQz1QbMApjsR1Ege9MTDNCSGPHB9Aas8Sgv8NM9wEUWmnt54RkunwPYZ7J",
  "key2": "5Q1BBcXQbn2Q33c3L9UZQfZK6w2MNirHirKt1kgnXJSFX7RuK1afts9rQ3AhHtPcPXmqHryaApRGnVMwvoJY1A81",
  "key3": "KFRXFwAnEANMk7kUmoRPSk67zcYmMuMAxvdEQ6Nf4wMx1kG3i8ptYbSLrBoWe5Kg3v9Pqc8CH3tvBo4xzb67RBn",
  "key4": "334y5Z6toMQwtS67wxdF3AdRzFqpacNZgJMgqyda4nyqmEJDbmmKYerE3sBEiPrg76iHCBeH2PUTi6W2gS5EmgD8",
  "key5": "49xXdV6r72wrUp4t8p64Fcv4BBBA2k7JemRuAeULYBvP13P3HvQ9RqP3vhR36SHbq949iQ23JAyHGJQzK7mUJUna",
  "key6": "2iryXjePdi9jg9FPtJEBTZR2nwDzsj7RPKFnQuEUxCmvTUcBdv3i2osinYa8pVtC6AcbFCmNLoNus7Hd7YBL3w7n",
  "key7": "xNCKpooYZ8JEoawZhrnyVj54EcW8JDGqQ6wkQriPF9J4U1ZHSNBUmJpLCmhn8JgzmbVqAm6f6xUXCKZprhWobjM",
  "key8": "5QgQExFhyAEMgRPmUTffWVsqE9CPpJtENdTyQzHteAtHuoaDF7xqowu2NLiEF7W4Ny9Y6rnt3AcMgpeYV6jV7QZH",
  "key9": "2pL2eH4BaZZymSGiNKWcPfcJUyngqCACdFAH4WnTi6YCKkvYf2sLLFxBeUrzdKzjuYy42Aum9N1o1dWQReKdmF8G",
  "key10": "4QiLDTAuos8Y9jkyGryat5G8nfrFH91XXJDgMyjkxsFZ78CMMZWLM9QV1Bz3wSgthXnVVASgNeam9U8A8CvZ1NQV",
  "key11": "2CAEJ8bRJmRdpnYHGYcdcfKP2sA3mTrRrqNDYvMAQTyyLSuL9PPuTHZeBYC4Z1325jkaUk7rmU6JNLE9UaiRsPjj",
  "key12": "GZ3vkfHZr3v3KjNM8a1vfU7sgD44yTXAG9nmBxpFiufFixPDrxy4VwdWYiNCgLtf6N543iPmgYeQYnmasuGS9Pw",
  "key13": "23QRKtp56AkkkkaHNnz3ddUSjtbbCrgxaUyt3vptzfKgvW24gA4QxwJ3UJMGj3XidkYkC7FeSy1GNWCuC71nAobD",
  "key14": "32x3EY2LU7gcEs3xGUGeSHQHZYXFqghrDgm4DAWc52NcEEr5e4UBhcrTMAXfz7itvYX56CiGyKx3BLcYYmoU7ZjQ",
  "key15": "3vyMpit8sWZKHqiVGyXeL3RinpedWb6QyvN16h8hUGNnJTPW7Vtt5rigCQwwjwcaL5F1ebPHoR2g7hLEymrC61Bz",
  "key16": "4hfYvPcGfbmLm77LrTE86ehQtE8g7HDFARJJboLyk7jacrGdfrvXUNnWGbEEUNHy7xAL1Lb6GAFxs63nxytQjzQb",
  "key17": "5RPt4grSJMrz6GjeLgv21cTQjzKb3RMZAciR5ZoiVWwbsR4XJZMWZkZwpZxxVzPXaU2Qm8RL6uP9Z1YtJ1MASUtR",
  "key18": "3i3ra4CsZcY7vfW52Fhf1qtxBRJHee6EfC7dRwTuzGvoR2JzduT8YH9EXw6XYDfnKbHfDwzvV15EqXiEux4zzWcN",
  "key19": "5Jnd8JrBzaxfpfhnUPiQr6JeDTSWM1gDw1VgFSCNBRRgxHeLkHwXo8sZnaeNBWJDCiwYN2aPmD7kEcfuL8vcFEgZ",
  "key20": "iCiYHMzDopfjwXNugQYKAcfbdcUYU8HjoMfkn7S9fEqXuH85EysMpVu9FzfX6CKw8zqBoehjtTTjwChEfxmYftt",
  "key21": "5SFEDFx4XAuNNNKKzu4U7dpvtC3Nd5NM8k3KETdf2z6HuDFBy5jZR1gJ6VVQHcYM7vZJLfAFopLQjBpy4CTpNeVZ",
  "key22": "3HQc2x9VMDk6eJanLHiDbHSwxbojHT6mBD1sMoUnCyZanmWBihg71sRLhZkYBykYCAEh37oSMVSFTdB298Pt5kpH",
  "key23": "5VSJNfi6jNUUeVCFDhfAxEjX7hsMTFK6CtUbUTWu9weNXLKiZtoGNEhxGsz4wcJPbsr8tbjwM2GKfdpm5Y1Nf7Xu",
  "key24": "YAcEWRiSYKhTgSwtqbR2qbmhnWiU49n2jTwWZ7hH3aXD3PNuPXZuTbugwAZeCG6kH7XL4dT986YHKL5qKUZ4dhJ",
  "key25": "2W2sCCaZpcqV3hHwTkVpfKC2LpifXBfcKQgfJqsLCQhNSr8SraKGCgq7Ng7VGB8outdwbf1bFSrXHDGmuvxfmRkZ",
  "key26": "3Q49cnCUvkZcCvUuVWcMx9dnM9LVZbex3xoVGJM1dmG4rfisDBrTvhztFZjHv1JNGxFPuQg3WjKRjwM8vxxHy9Gj",
  "key27": "2zZ3vjSmSc9bp2Ag4EgNzJp6MpXQDHUeQwxCrb4qreiqzhsKZXnesMrAadkYaa5UEwyvQZhjVp6Nb234DFFTSQHM",
  "key28": "4dbLd7ohqpxpNTkkk3PjB2MdkGQiDbTgZAyvnkx3KdfGsMVLMcn28GCZkBgBvc5x5RYdgFD7XswZz34uc9EP8rXC",
  "key29": "4prGyxTiuvhwXwFuyT7Wyp9fGPUY9JjmEuBeUqjJaxE1UJyKyNT9ixmVzsLE6sPpDEyUCXMLxsBtHTQA2tFGCAFw",
  "key30": "4hSZWbKaQtmJsTnu5z7E8oah2nuHK6iTXCUjn6Dg78xZXp69Qik7uk8qSUXKAR3i95ikdrKC9gURTeDLBRCUYpai",
  "key31": "4nBJGTj5gBJmzFohPhDDQDJa1KrfFt6tL5fG6H82EfWQS1u1SfXLfT6san37pVJbuwM9prEkSeNo1xCxFBZvR2rT",
  "key32": "5NHmV7kt36ujM9zxKJ3zSdHe5ZdPvWgRifpbrRJwp9kkwjHPMBr92s4o4WGBiZHgTJ5tRtnzULgJ2MPSr41LefNo",
  "key33": "5okwPRk6VZ3zJYZZHUGHWh4HBkidep5GJtXaLo7qjx3MGXLjdsjkSMP5UVpCbQ2tpr89D4vdNtcswXEDpVr3u4z7",
  "key34": "3Phy4UH9VZu1GZRcZ6dSJj1ojWabbcVxBUb817BACtQLFHrr7sHyWmi5SYsuvwXtUT8XY3ZmLfzahU47TCpfZXKP",
  "key35": "4QVmozyfsssTTMp38BN8HY3nNVN3gZGQsX2iPoqqW8bVJiwmjvswyHDtwsJ435tkNDc6girdqDVRnyTLWoSPGMMv",
  "key36": "2rPcVq15c8EXgbjBGYaiWXav193QVwUKaLGDLJ3rvNa6f2SEz8TdqCgWX4EFSbPM4o6H7uHiEqYEbmLvuhbZAfha",
  "key37": "4eNHo74bn6fSJMGZBvZBVSmqgNy58WDZgv6N4RS8rZGkHCxRv2H1GAui7zzf4rP4YATCco19du8k67yxj9NU56X3",
  "key38": "3ktTkJZQxoiBbJFRFDbN92XTTmkDaCmni6q9reEcGkxfLZcqmdns1oKRLosNz8b4DeCNHAuqhW3Wn1ALXiebpWLz",
  "key39": "42pf7CPApz6rGatvcwa8sVG4BqabxwMACSgyKZumMpBJ3aTaPWPHztwN9RahPmkADR39yD2kn36ojCR5baFhCDCB",
  "key40": "2rTKR78UPUCA4HMvyCdp5cX7bpJBxMRb85gmXfAWfqfTBuCd8KJzBAycyhAoYgCgaiYytTZQeR3pZAHrHa6QgGt5",
  "key41": "4BrrFspUQYxdksVNqbj2M9c4JQ2JymMLoNTCgWd7MV3uZuZdRsZ5K4UoxGA959x3MkLiHswFMV79ikxbegSGYhWo",
  "key42": "4U7ZE2mnhEAYSybd9ke6d3i3xAvWiFZfVWcqshRS5Psy1JP7SGnBD6PXvcq3XQuQc6jaib8QcU3KjHMAHNkmTpPK",
  "key43": "3zfsmxcFwDaZDTkbPZcTupT64mFMNJ2q429677XaZ4Up8XREVhMxfT6nNBeoBy2hnRVZA5H5zMJeAzgnpJDxqYQB",
  "key44": "5rb1UrT1Ye5fuVNxKapXGqVk7zfzthXbMuWEyiXLfxtqxg7yrDgfcbpDUW9LVi9mTuMDoB9sftZsUTMoHUPUxWga",
  "key45": "xhKYVpM1Qt1GDJjciaxARDTv5TNpD8pDJRMteTv6hJa8uVQF5p9VMk6T5sbya5R2om3Fh51FYv9TxZpTPEcdE2q",
  "key46": "5Q2YxSfSG4FgWBirV8wW7qGWRUgkHkXzNUUxchYk6xEsacgTdih2o4oETuXujDkiz33WKuvBC6EA5q2G1qJFdaVU",
  "key47": "5gm1m7d25t6hNokS2UCNQyGNdNeNSg9vFjL6zrvJXXL4C4e1aAySEecKudmv7E4hmkackZ2PaB9FoY2XMCHay2rT",
  "key48": "31VcgMUgUYAaiBYLSVXrMmy9Sz3MXVnPeLB94GtqbQc8uiwukmZ3GFZrJk6vBUXPJaS88tCrGaLTa3bkn4xj4xnh",
  "key49": "3PtMmbWneVXoFQhdnncGeZYAajUXgej82dKfnsrpCmhaYUxuVAARAkAmRFy2JcVBGYNusEgbRCHLSqUpe7vGeYNu"
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
