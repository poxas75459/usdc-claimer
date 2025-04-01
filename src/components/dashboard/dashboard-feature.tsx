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
    "XJxEiKsHtk3PxbZKeczDJRHWxbN7sA5yv3cuL5Bb9EjvYD3Nf6UGaaZHKZtkzKaiGQd4vx2jCXMu1bJ3h6eohV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vg59QamkSMGRFt4pK2TSVe5d9DBcxVfAPs36ZJqJPumTWLNPS2TpmmQYTMBKjWcNGi7QxhJ9C2kk7JqWXHGFbr7",
  "key1": "3zqoM8bshBgumN5YFV5nKePQbMNW177z4MHs4JXAdj63NZYTuRJjYwFAKuihquDVD3tHhj3C6cA5xuLgeNUhzs71",
  "key2": "447FJ2APSY3xX4svMazLJgJBJxTVTxRKvBpspQRAHcKv82yt3vMb1hq8MCuF6VogAPXDaZDAn1kdZW4eqF5VC4id",
  "key3": "4i7ENb1wAB8eQGNGFFjarsr1SRoUKdYbsgaVFPtLCfLbB72e4dBZM5xXaRhVqzGwHY4jcMKowoXJ6FtSQk33vpGF",
  "key4": "2SLfr6Xpzk7kShpAUuuddxvx48m8rCU3QRxQV4wDGN2gosP2P8M9Y8HZMxhWPHrwVTgcpuaojbUofSnJfrJ6Qdhe",
  "key5": "49hkeXmzQjg6zzroKQbP5z8jvH7AhwA3EiFkDHiSVWJPbLBZffv53AHhg9epxeeb2F5kBBZFjstKHv3ycLhgW2zu",
  "key6": "Rtny4mStookeSHKMhNeT5NU3Yk9nPYAQ6tU15jwiuLRWEZWhgNCZhYDAz4ynpft47ZTFEknp7ZAq9ksjQEzsvFf",
  "key7": "5S5EYijsZiJPxCtJcNHw5DCvA6KXWN66grWfNqKPGuCzYkRWa83BVatC6htfZBZwKeV9TGcKSMQ8trsWwRHgEXD9",
  "key8": "2V35t7hXs83KkFtiH6AypKDRdPNweirJwQxEkQvZ88VjbZn6PyEfSqi1q6W8CGrvMZCqSByzAQLWzDQLfuLQb6Wd",
  "key9": "3XYRXs6Y4p4SbD4cVrBYGrSWj8vgxnWkdSNWE7Nn3ZbCkMBf1ws4Mmu2A3ja5NWWwGKtTPxr7VBGbFTEcH7oF6Rk",
  "key10": "5Q5hrLVk2uGQHTgdiiwfzdRaABHbmJombqeVAbZSe1unGyxDt6LherdCtpGBUGmES7ePh15aSCZJ4mwYyT8dHhHD",
  "key11": "3Hti183hgxrQV3AdJGZ4x4ov4o8f4cSv1v91xPkQvCwmCJCSqAWTP5ErQhuL8GogZCVv6rip8vYKDPZTSeeKEyiX",
  "key12": "4ipRAa2KJLDY53mat4uEmkBgVUUw7SLnhcBFHwTvQmniqn8ZfEwb8mWxF4pziLELgwwB3a2ei1SQZm5DT133A6Ut",
  "key13": "4nx3CJ8pKvKVHZWq9cL38ygbMkTUWN67nEUhNkk36DYdYRcQx751btz35Z2JtQTmnmnDHTKvCLvsPWnjX1MmN39m",
  "key14": "CoSYfnMg61UZyjukpchfZsjmJ45wfdWH2Yhob5kD8yGH8NQobhgdYQLBeqDFAr3ZysBHmfUPKuUukhrsx7ixyCw",
  "key15": "67PvUm6MA8yyhJtw3c39HdipzXuSPqjAvTNtRNWjwoZRMLkMqT8qVXFt2YTFGrUdsPXexi2Qb1jdGDXMPmUXGRzR",
  "key16": "3ucjsZviDRYzEMtmBba1xuoFzv2cQsAJybMJ91NjWfnmYeUGqC3H2f6dSyUkjGtSZWN8ucqW9p3mfo7vd9zJX425",
  "key17": "4ooexkBKWJ5pytGwRVwgRs16XK4XFkqftJxTD8rR1P1ajsWEy84dgjWke6EFxYzKAffTn5YFJxWQhaZ3BXQuUUvk",
  "key18": "VBHJQydwMvdjxEKJRQa8aP8X9ghvHzWac9dzfgofbFJUA24NM94kyTxHResuFEMGKqVs7gtxXJsspoUvMGMYbbx",
  "key19": "4eH8tjWV1hVLEWue3v7d4eGw4mZDY6CKr7ACgwCNLb89JkVr7hL3byj2gAdh2HmMC1po6BRjKC7aWgdm8wE5NpRK",
  "key20": "2LTRoaKGpjxSgC99t2vDkjVvDh7iNxvowNm5Gr7LyrsECysSZTJH2MewYZgdyewCD1vYDzXbBcfwzcKU4Qq6rLVU",
  "key21": "4aoPhZECLDMHwVBFfjzEu7rKnsyxVHRgNzkTxL5rVJQ4Ac2uae7KE1FjxYoSdUtidD4g6mDTridppAbYwn5rM92T",
  "key22": "2K5nNscxzVRpm3dNVG1rsr4sTSWGA4PcjDPhcHDwnWPX38HBLenoZw3aDBbWAekeb1Yen4nCXQJFcw2Gw189v5uV",
  "key23": "5wVwZQ574bj6a3eDSUcDw9WPVAxzvFbXWhBjAJWc8mspFGDpCcL11Jxv5uPx2Fz6jKTypd7uiR3fe1yeWmCqDenv",
  "key24": "2j5A32y9FtY1Z286uFxUcm495HAdmwhma2dopCV4UczR3xTpTZqkutmS2rZGUETzN3MLGFc74mYgfYZHdgJGvucu",
  "key25": "4MgBHjfY4o62HVinodLNnrboAzGYz5hTstcGwJgsCkcQWHEjv7L1K4jXn8aRsUNRy1ATU175jVuFkLnCM59aAUZQ",
  "key26": "5niYvnS23fQsUXch635898Yetp3z51pREPJXUQ23eC9GfZHc5tC94Hyohm2DR56UYzvpmBfKbWUSQQre1sXR4yfC",
  "key27": "3ywM6dFippSHxKFwaDcNXHGoNo8dUgCJeiwRoCk15TJyXJ7Pqb93Tt2bKPuADQ8Pu31AsVkRYdD3Qfu9C16m4xXn",
  "key28": "5KBbYhZneWPtmrgDoYu2oALWtJ5z3oV1pFd4T7dGYnUc155DEZYZLfy1tS9VgKPvmf6gfzg3VjG4UgUyfRmgqCuP",
  "key29": "2by8HMuFfexcSveHwkQZJT6j2JxqXCV5tKMiabEapNuraHMLfi27VzaGq3vSHDZmiGoa7GJDbyJimNgQU3ANAZcF",
  "key30": "Q4oKzSngAQP7ezjKp7h2Qv3U3i85hyP1tUq2cJykwGWy59Sz2aEAs4wgdVVUBXjP2aZ4kwDDQdymyotvGqqxRAf",
  "key31": "3M9T7fwARiKv8cBNc95qdE4NQAaBKcQuyFzZexGmNJZqGUrVsxMS2y2agSqgRXvrjFnehxy8G2mJHu9j6NYYtDEp",
  "key32": "4NsMUZ3L4YTZLfJa3r6nZiBXhWXznRM7Nh65ENJ2fXgGXCnpE15msm6MCmyNGy3aQeBrjVzhZQiMusixtbdk229Y",
  "key33": "YhVnyMzPfChYxcmWVuKoQq12h7UnibARZ11awSpqUdtUquCW9odRNZD9LgeAe5tdNLTwFx6nqbAvTQfYtZuQiT2",
  "key34": "4F5fsvFvGknnJUmkzXZZZVRbZQePUbW8UMVJaxGNspSru6xKb8tNnJmjV2cHp2AFodatMUW69WJDWCNgP36s81kL",
  "key35": "3YTc2QppzYT9wxNZ3L3XXqu9QRP85JHH3FvD6YijFAPWN1pVge74omrDiRK9hT3giEqXcnjCjmPG2RxwUtmu9Z8K",
  "key36": "3mDu1AU9ji9pYB8iHdspoeWKsz9vsSd2fzQqA1BNfc3NdiNL78AkGRvtkWHFjE9FsQuAVdD3pDbpgBqrP9bzbkaN",
  "key37": "4PdSFERftLapv5C4aUrFdvR5uDojwHhHmqfFXEfeSPcgK5CAHLWmqcs4zR9XoaGJMFAahoXYae9e9WwsiucXZgSe",
  "key38": "yJ8gwbGAPCL9uzNDYzrcXZaQ5SPbQbkwfG8vUDUKHrU9bgnqiYcMnHhvrUQnX74xmD9bLjJR9ZKzvxmcAXxkgze",
  "key39": "ibCNSceciqKy18turS1GwPsWKRodDBbaC2vb34L5ErXEYy6Q5ZUjyyGD88SxfP4vWT264XxE1LUWyQwTgJcYw2G",
  "key40": "zvLUNm4WZDao9abEeLt4E3hBL3sNt91BbC8TP7UgaJY8GvMfKsB6trBC1SwtSasD9GeYaDvmcQUL1Cy5QsFX27U",
  "key41": "2JE13nGxsXrq9T5Bsr2pyzbvc681qU1WEbjekazjATVsMbmy1pbGpkia5gdepbf269pHPEvQwUR3wpWSE4pWDQAe",
  "key42": "hvyKxdVYxEwwnkXMzGFd3uc64whsJnoixjeR5TdiLRvK57g6ZRykh2iqzMwTzJL3qcUGhS8kvEnbszKj117dc24",
  "key43": "3dHLH7LrEtq478uYUWYM9Xoe8mggAQg2jLWgvPRsfxZGVEfCAXuwhJh1obz8PQuKPQL6cBopCwEyChgzhafYEXft",
  "key44": "2Vrh7VMhjpNdUUuWXaL2wNuy8LQ6U7mzxGotMzHCP35ASY6AKS5TDFPiBnRsvzHNnfqAhp6TLXFmqg9rdAGqWZMx",
  "key45": "3eGepeg9JQYoM3J9RugEmhittxMKd2HLBkv6sKZgCXeEThtv2voEewZ9C8s2pmixLEQxRoecm3LPrafQdkbz4rn",
  "key46": "3Z7Lt9AwErx9RTSvqZMMv9SHfhoXpCVVpBQJ8Aw5bT6PbcPMk7Un3ZHFC45bgyfbn3SRZ28aQPRBoJeJMtFuK2wQ",
  "key47": "3Zx5ScK8Yroo5HaVCwahmSDthePuCeoxxKSkRiVSc4YD9igBpAAcKofN9mUnQYWuTagNuZytchdYk7Q8ffDXvuGf"
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
