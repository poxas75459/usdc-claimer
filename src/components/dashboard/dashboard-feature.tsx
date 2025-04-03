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
    "5LZnhfAQuRqm42Ydiz5MVkwouyfHYcpT2Gx5mJ6FhBT7VjnvSPkDDRcfnBvD1wP7i9yQwNARf2Q4Cs8e6QfHT6mQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jK9Mj7qJfVCjvBmLv6WYC1bJtJECmBLo8JVE5S3GAiyT1iDi1t41BRj1oXMkYAMjnCFWp2z5JWpBrpfuCVdDhuh",
  "key1": "4iwZBCkn8KKRgqDxi6J36BAALTLogtoZpFyvxgMgLHADnv2u8qpztvCuSDonyBk2xRPjK46bTgiKqE8nHWJXGfTK",
  "key2": "2UVKsu1P32NVRYhs5Aqhfxmm4e3yZHe1yrrsi8vzG9us83A76SopFD9fvkLxEzeLzXMhyqcAnvUwxdp3hCDJ7L7f",
  "key3": "33LDgNhNXfFLwLz9ci5w5rJnUChbLMEkDzpoFQ3pj5pd86v8VLTyVAYNJxjpW4SXLFGqHbjrz1UA9neD8HQCEBTh",
  "key4": "28YUeNoSUJxKpbkPcHPoDaUvqZXsgeQ5SMpLKtffBjp6GXmq4SYeVCPUxrUqwwYK5HcTH3ubz8kgtiwQvPd2CqDc",
  "key5": "XNCaTjdgH3uUinND1dQwao6ZGKb9XpUNg8DvZMeGMpwxJ7a2xyvGy7MDg4FJCbDNj7TjrCZgAHBVpBNHPWiTzxJ",
  "key6": "5VHqG6J9to7HL8NimXSRNYDp3x21mSnhEDpNjDShd5VYEQrHdTGKLYMn9W5skmiKx4n5uXemoJYc6tEQCtMRn7E3",
  "key7": "3SZkL8ow9mbWuX9JMtsGvS5BUAEEi4HxifXfrqoq2fVYpbv4EqzfKteBUcvSpJ7U7vhJBNQvJsN86p76R4qSBXVW",
  "key8": "4bd3s1Wz7dNw25VDd3VW41uX1UfiUmcF81d6FKKeZqNnvpRg4MNXGKU4oWkkZzAVwDzD6sUxVMk1tMZjzbc2QwC9",
  "key9": "43RXVsLyqSZHSAsKQQiUNwQ5Zw5prG1dZGdrG4FU1mHoe42EZnp8a6mp7Nbd7xMmtRV6N3bj2N3Tv34eS9QvEkyQ",
  "key10": "4Lf57Dn1K7P2AeLPJQUous76gJHvcZW1FjCqNFKcL5Ssf6P8f63QHpcuf7U87rJqbsScRQRBBuvp9F2ZtLmmynC4",
  "key11": "3x6UZHNfoHfSyqo2usNe6i13pNcbHV3e1hdhCUjxvJU4Vf8LsKr2sFaZmhBKactDgDWmK8udWoXZshe5vDM3Mz4Z",
  "key12": "4WEUrhR6ToQNPePQjLRftjhgpt9CBLTP1HMr4LwVCghnrn31Pj8WecSeyfJdBL5bSLKTyvumkNnjWNJiHEwwFPU5",
  "key13": "37re7jNRwz2RXdXkHDnjCRxLJ2tNVFYMmqCZaZYFBiz7xVb8CNFsydtRyY4oLwoi9UMMAyA2JrWE7f6fZ45mbLut",
  "key14": "5jxiCe7exgTnkCcYspJrR6TDGZkrY9WfLY4sdGR9tq2spT8BRNd3fLBCCasMrhYLXac2Q3BNnTyp2SLWSq96aqLc",
  "key15": "2KQUHQv8eksaSZNoyF4DY8tUgqVLKzjrhWEUifJUgyey44JXLz8dfWsZdqCsV39h7ZbPXmZgnwwhjprh9ug4k7Sr",
  "key16": "33QaouvThwxQk2eEB1QUEHb6Y67mSG3UozY8MNxjfgvEFuMMnUAZt2NdbE4kip7BZaeJbfpqXaMLh9GSEGQAZj5L",
  "key17": "gWWuRb59rFtiNEEWewQpsyZqG9tGMYjj8tZZsncfiu7UDX1d31dB8vscX7Bu82ZaUdJBLo6PozxUreheRDiYSxH",
  "key18": "89UUKb7C6b3zUgPH9HyYo9Cd8ESMaxXMyeZX46Y8PA1Z4Y7UoWxQeFCtEE5GvettGzwdSKogUJgNH6MB9NMX22D",
  "key19": "29MBDsgUqvHts6pgqe7wrKnmhQMotQEWEWwq3dbCgbp8cQsoxQriqA5U7wi4BWEVtPK5rX3VispTPLGoEWfpVy75",
  "key20": "ARfpDe8avM7CAUYRgZw9Lsth1qzZjvzBL5FtEApBhGmxk4UMUjAgWEcdDkgpVMJKqjQVkBQ9ZWgz6PUR2Y2Pkdg",
  "key21": "Kyx6FEzYGvFeh4NASiNZrXZipEHNynAGiEcNvTqgBzA8AbHGhkQb2FBJvV9hY6v762teVhSX6g7XUpGdS4ysYaU",
  "key22": "49yWxDPvFMHK4Nr6yY8adcX286nAHFLagUqHxf42asea6WpLfT3EhJY77RQkwsRwodr1mCA1LeJYYEXCgDpdXxk8",
  "key23": "44RaLHJZP9ggGfzGoHJFm5YAyUPteyKqF57QwdYvrJGMfVBgqY2jRxAaiZzDpEa5J9QkSJdje1Ej4GKF23oQFWaG",
  "key24": "4sQEkBxibuH395BWRpT2crRJBEDwtL4gg3XXjZm8aQ3VVrZSNxmwT5rHUwvRNkV4ZshbjtyLqXM4WQqXxshdnsc6",
  "key25": "4VZvmxLRtKe5m9UKQzWDKh5nSkjzZYUqgYqpooPkcTaPGSgqqJmyqHD8hky1PEfC9GD2Tivxigd3p6H5FoqtWCfG",
  "key26": "tLpH7pHgSYaoEyzFv6DfvJsaraTwkqDsTpJ5ZMEwJEtLh6Hr9tFwQ1KrDsbXzA4BgewdnVsGmns94QrYwxZt3zu",
  "key27": "5CoqS9QTeLh6LmkcpHjdDtoKnYmRNhFBez9z7CeJoUr3MRZkBv2DddrcMEM5XiE2CsPFFrxYbDbhW4n6PPcjJLLY",
  "key28": "5S1hipkkbukTnFfQ1TJLuZ2xaaYNXo5DZQuCZHERE518JN9yhwdMgfGejTmYo11xd6ze7pXa9g9J6EQEzCMVKb8H",
  "key29": "78hpRQUt3juooN9tJ9imKkGW4PxzrbreoG83xUFCvv6aKnmvwvNqt7BYWsBdPf5HqF4v1xHKBDajeCaPq1t6QQ9",
  "key30": "2qy9KogbBioCyoikjvvoNEBaMwMefaRDTWwiWMsCs3MjjFo7ALk7V9SY6kkzJmdQ3pkhUxvgS5ComGfV7M156diS",
  "key31": "2tHa3mxuZnJDVnJqbJKqadsgSLj3e3mQ9nXPbLwGMdkxM3DCpnnUarDXvrauaegjY9Q4LjLD45YabchUbiKvJ38k",
  "key32": "3p3mRjnfYpyPswzm4He9kwfKpwi3K1r3aBDWDRTNgGdiczmhLcbimcmQeMVq4kHwo3EkEDzgXZjUSAotGBxqRBBu",
  "key33": "4m32xLj3VyR1UgxWFQS5gofV3M2QNBejtBXyMenwgKcDEESxcZeof5xoP65c7XXCtNjAt2UQjrEUHVYfNL8xf7Pw",
  "key34": "3nAbDTsGg5vVPbmTogzAiFQiZoF5fMj45QCRW2XRPQkj22BBpNYd3dAC7n4Q3WjRRM7sLoVLKC3K64eZg48WbvRD",
  "key35": "2qx59ZgS38dEm8pspSoek2sSzaLHYnxKVbauh2pivGM8pUT888nTfevsGrFy2wzdJJCeiB7Jk7sAudwJKr92UGW9",
  "key36": "YuFDrv9htEA4k6F1zdvmMvSxgry8DoKkADasY4bqCDqTea749Qj4bCHchaJkUwRcRro9ihTkY5arBwDyjCWckcF",
  "key37": "3vKKqA6UCHkKwdbtfNDGzt755k4SrZKfEJ37uzEz66dJy3q7gPYTC75CtytgQvUGS9BDVRaTYzh3NAuU3QCGeCqq",
  "key38": "3UxkGUoRJGs1uKqJ8EG5Ss5bT9tWnZPHtwt2R4VhYuS8p9axiDy16MAZyTbLejV5LCXwwUH73f5VPNgoHShy71JX",
  "key39": "2bBLEeM5wNKAXPVCbdb3CuzCJgjovfxBcC8s94L8NSUB3C24AEDVrLiZEPZa6F6cChY5gKLDDoJqbaPxKNDtn1Y4",
  "key40": "59vF7TZdyLLMGAQWGn9wEiiy55mBuqJF3Z1uzvtTdt3jSq6qkF88PgkUhXzj9DWLUkJniQFhWet3XM5YP169qMih",
  "key41": "4mH9jscrX9R12EFfjrkwrioc6j7zF5aCA4sr7hmz3dUaPKPtmFyuhkBoifUdNuGj4psHK5rRJd2bkhfaswYv14Nu",
  "key42": "N72v8x3EZG5C9LtumUpfKL8UG4W4VxoFFMAP22NQEyxJAaPZMcEGbcz75pdCpT519K29WdXf1W3x73oCWeXE4kM",
  "key43": "5SSnJ7kModJxKJteQRbcdwif6V6AMUMyCnpSY4LconHqZ8hXkKxUYgYeKQ8eRTw4Uh7DvvBYqou3Diq7HndaBzNx",
  "key44": "2zVBXYGhbBfRLYYgvncNFFe6aN2tSDnuito5aUaBb7bRwJ3wnjBFN4CSs7ezG7s52YKAPZrPHtc8J6VocE1Vq8dw",
  "key45": "4QoSNf9QFdrvCiX76gv3646fbdVTtfPwZpMeQinP9gbuh9khqAPCPGxUZ3jJehzZNSJYsScVnaUoKaHNWkhyMTyc",
  "key46": "tGgevWG5kXCkpzHhGWAi8qBY7kKrCoJ3C8JRqMBvQ9tWtLknLxcap6TfyfiNriZFXQfLqZCDykSPBHi8P1Ukxp8",
  "key47": "2nXiUkRkkiLsUzNDtCvJeZPBPkxcxxvk6WRb4yU4t2Ze9JFnKgtErJoxWSnAQ9zq1jAN5QUADxbd291yKwFrni3W",
  "key48": "4jksXaE6MpQsv5LkgqDUhQcajQrsNGGqjGM4NzXKsX8f539GDA11KHXt5163fN3PsJ3jA2MyqEU1862wDoZaXBND",
  "key49": "51QQrzknuwot4pPcA11TwASNZ6Q6kaPyP2HjaEKkE4BTmgsbnpGHk53nEyZi7QMAaYDUBkDTgFAKY57bSwk6ghjx"
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
