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
    "2jrc9sq6yS98oDGCxqWUzKdoKSwtJC22zoKFdQ4zZTWppwdnWpH3d7jkwPAPhaN4xKf7TaPcraZ4xAbBZySFXq2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4stbmK1qZAV1m1GXc5e4zasYyyFYPgEU7fyehKdEBapTk5Zris3RvLUgoA1aRjWk5oh5QnnfDgcKXNfferpHKszQ",
  "key1": "3cYxBtpC92QQrBEpEioDxN3hYk6FRn6kc1yAFNKGGC2r1Q259RvfF7ZVxPemMDLvQ3NW2LicSY1qp4z6ez31fDfe",
  "key2": "WVVmNZ7qYfLAkJhhxH13rwXy68U1q8LkLryVgNJyQqdavUnr8nof1YaLZcjK3rKMpCnjCA2fq9mu7swwhdeDWaW",
  "key3": "5ekzDz6P2afPm91DhZ8u3CebSdfRK5Z5ftwoPvEUNLdAS4uYNAnQahwy3BeujpinbRa5sGgLfN7hiBcrh2nCwrPu",
  "key4": "irf24nKkfWeCfFbjzALvjhfFyApbi6qsccKYAmEgzFzus6RnaLmeR5yBUdxDy1RjPC326yeXhjPHEzzcYLAjW8R",
  "key5": "55cWUkEGAn64WoBb9HWcckrJcb7YjF781nAD9ywkLJXtem8PGCXyK7AQuAv7PU4cqKbXvtR6raqAKwQy6MTKfCec",
  "key6": "3WasN2NYnnhP5NsyonyvvCzqzsa9WTeKrgj4SW4fNJamp9NxfyPQoj9XXcCpU8dxJmGBQtj2bBUwgfLf6tVAo4vL",
  "key7": "63FS5Yid7ZyEKXdBGvZKEkcjenjB37vuvgfj65B4h2keTinh3C6bE37MGHd69hCWwsHLpZt3sh4vVesecoy4ofpH",
  "key8": "3isZwUzP8zbhWrRweY6q47MgUkqmaZJ5sPo42jDpwb7xmTcsxfuK4yVWzUbkj6oFn4zP9QMx6KFsAL95wpBZF82B",
  "key9": "3WqLEZ3M54owDerbkKYQNAV5HENreopEzwYAAWcWcUL8wuW9bmjeg6NfcDiRiyNb2zTJEyBpxyu4yvpUZGLBLeUp",
  "key10": "5AeHgMzLZjJ6CyfKdS7j3PPt8z1T4BqEjWYY39Z2E2r4qGdeABuSNN16ALutG14brmhqUgAGCLP9XdxJh3PpNqSd",
  "key11": "31KDbzm31HJXMNynYNbuHMXTXHFRKiDH3C6irwDL4rbK1fD9uPGrtuUR2NwdKj5cmxf238eV6MRj2zgBi5MWmBG5",
  "key12": "55QBmGmKKRq54EsmJYraQNqSjydWZonJbgE5zf16vU3TNMndXcA2qaMYko38r4chUH9Sqzm2vLCZWYyYwmDvkRei",
  "key13": "2rVjVChGhnWiwHyfRYEVhvMbgHS5fDQ1pFsLDMrh97NixZ4ecMpnJbnc4WvD8xwPGqGAbo2RN7BtpuehP32x8abK",
  "key14": "3fEsroDrZV2EVMN7sYasbzvX7TrEXsByZqYQ5DU5iUb6Qcy65NvfGXncJyEbh6hAbAg2V9GhYQWkU7uoDMW7zXXq",
  "key15": "3aAo7NRwzH8pkZy8saW1av6kFjy3ZdmSAiwS1hCcidsY6AjAt3K4TUHWkxk4GjKLc4NK9HkAp97692RYh2sEEpm3",
  "key16": "mScG4ta5e3Zyv23KiMKyAguU6UwbvY5nGpKYHpdL4joSb9wuZxqCVQGWPghFPKrbMVCTFmBXHQqfvgrwBRjq9Dt",
  "key17": "YZxveWgjQvMzZyJgHWSJ6dXKYgcKrFq3VQXj2RaJZbVyN4Bg3nh4M6kSHY1Q2egKG84vpdw6gURzCNCxWc2enbw",
  "key18": "tDSeUFB1w5xKzP8ZfMkBxpYLwmiydEpz563FTDwUNEZ66WEiS1kTQU9XAbbLRRv5RtUf38BaYy1sjhXS2WUJAgj",
  "key19": "5x8bVTVVPG7mkY8JzGxZRVydXkindzSD9P73zyiXLuvQzduxqfQY1bh6UgCMxe6W4jM5hUJkmaLj4rY2xvWbCyma",
  "key20": "59sv1GVXHaL4TSq7eJTGH63NNB3SWitHg9h9KMwmwU2PrvLUpD8BoMQkZhDu6FvgjsDqWKzbnH6edc9fFsj1AsB6",
  "key21": "bT9JLBqiEpEEPHxcy2jrztTnwLHoh9mhvfMDVYBxzUQLoXPcS2oi79NiHmDbbZQw5rdWobtEWK5a2suLVJeB1eD",
  "key22": "XjhMBGPRpf8kYXMwBHG4wdw2C6gHCgqZWVozveZVnmRbhRQ6Y6d5ukspYiWeAEHXu24NubJjkzCC1VLvm4fA6tP",
  "key23": "4ZMsKvdcixSHqrNTHLcUqMp8LcmgJJ4CbPgtRmkgzBJ81kLFkjGfW6Pv8xSo5FPtvwkopNqw6caYqeV7xC6MbEim",
  "key24": "3svs3qGZKt5j9wfGPJzfBZCtKQ7NMfBLCXV86DdSibwyvAfD62i1iHXm5v3nf7QiT9aGqryXV4xdRYeWNfUZHHza",
  "key25": "2tTXeWXYvRLaP4hwyiDy64o4rfxfcUZahSH7DC3JLzxFBdM3CEMKtRkpnk7Zc27gY4a5angYnkiTbri9igpRc1ZN",
  "key26": "4DtuEp7DkXch6sJM5z3YQaVdJ29kEUip9hjnC5mQj2jzATUeusnZr7GpdWbVYS2MZpc9Zvvzjc4FZmnG3CbfG2SP",
  "key27": "5Yzbu1UNHnPDBQMMfYL3wZZH35Lgwvyzo6EkqSD17fEUdLxbQrqHksafrT3XxMKaEGrUEBDPv7rQqWr6nSuMcShb",
  "key28": "5ioSEKv2rmjjH9q4NYgxM7NR5EqzAdvif68gpTujpuACZihXVFYfwpSv7kk9MBKziSrcoFpB6srTLRVoMxidZg5Q",
  "key29": "3ggPAMekz211TdrvjXcCASyK9QJGQHkBweh7YXBBxJw8K74WRFzYrjr9prs8ncH5PGHMGVXhBozWGEPqe529LPfA",
  "key30": "3oPuiTrmVWZ2rdKMyezeGgRzHo48DjdUTFChgZ4yQLyRqf9u6KVRBG3SKCMjDvUzW6UdLHi2GyW551Wc6hkm6swT",
  "key31": "3VY2zy7YrZua8NPhcJcoFZAPSoFpK4zdYhYksU6KWnYfZ5bN4YpEAjWp5XZEV88US69tQ28B2He56o4uicNGL2NA",
  "key32": "4GehFuSSxNSuoHA8QxR1F7jqQygRJbzhALYXDsPGDfi833RwTr3ey1dfjuRCnMXZMM6nYsKf2vZ5YM9UQCEgrDgE",
  "key33": "xQasDpkmKVLWvLEGNew9z7DffHoiBhCDwpKiNwrSerGyx2xDxCfq59y54PBvS2g5LPkCz4SW27tjGiebUBJkQux",
  "key34": "5qZdh9wN6ePHyLN1tjt3Ek33J8b9sonpdUc2bgsndvwNzGRNydhDxUh5MQxk8Fui3PWW6ycXKWhGF4WiPKWvU4uH",
  "key35": "2ChhVdFg1eqm2uxhbYncik61CZejYpQZMmcWnKELuUig2mnXdtDJDwE7tMWz7QpVmmoco5nbzJ1D7AuvsSTyhVy8",
  "key36": "5u9TrCbwS5pXuNX4Xj5GUr24B1uvnwofyqkjqEt9SXiazEnxEcTQdwgSqsQbDK25R43YpdKjUUWs2SidVbaEoBtw",
  "key37": "3wZf19ug1dJHZYzFjPS1G5y17VTYoVkoNrg4QnwVtwC9HR7TxY71WhrLRg1g6uCqTn3YCdv2p5z8YbJ6n3L1nSK8",
  "key38": "3JUR7UUWpqyK7FKV57CQaVFpWWji71i6RGj3osWWsHLuE9uMgqLd9eD9vQCKDrWjEAiBX3SAosWpvvYVJV5fUBTW",
  "key39": "4sKxRrBZmpArAenyRRvMEoRrXUu8h13KGoZNyevpzXUSMFG5mKYMpxS3EtuKRXhjRcSjz4XBoaJcVKN6MEbWBhK2",
  "key40": "KuoEjfqjdz9BE4QjmjhbsxVPqWBiqrxyWhNAGuXK5uEZ5QoMBJSo7AdSvVmX25okdFvq3FykbvGiWuhZY1iGjqf",
  "key41": "4zpnQTrzFExugKrAN1GsYQ1aq3QcRHnLp88h7hZ2x1MRVMBP7HQ3Chmoptk8MZVRSDaS8UdLeFxKESf3c9knqrAp"
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
