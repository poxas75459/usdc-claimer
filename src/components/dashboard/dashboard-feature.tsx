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
    "4fWpFoSPYu68ZqraWhrK8KYgn2aHVCxZQa4fTLCShNvoGdbEaJzovWvt8inmF2aJpWVN7k6K7JBkQuRZ1Y9ETrsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n1uGtMarKwYvJBPgm27zHgUJhFF1zs3vnRQmizDbrFnsHmTNqM4B2XSw75TSfQQx1hZkDLUrnrQdVTMwYfDEpci",
  "key1": "3p8oBSBNub3Hwy6mPYntFSyrxjTJgjJMuHBk4CTk1aAQqP5rqYJ5ZHw5aD1fmKiYiBj1EMvAHc6AP11VLRs8sEH6",
  "key2": "2BP6xfsUwKs2PCJwzNMqhKwpFDw5JMYPF4MNpG3rpjTq8jX5p8iga7fq3QZF7toAmdGikap5CH1jAe9JfPTrsJWx",
  "key3": "3iHk8qahixxsc9JL3jh3AX2EyZRmUVw5qxqbnkfwnuFrAuriTzdSsG5YbTRb65qWMpmggTt6cdV3dehqmc2B4aoa",
  "key4": "WPZyZsHQReRYtPUyjV1fHgk1h3uoHKH4UEAzb3Cfzwb6RnKf5tnu34oVndy6ZyDgurXg9QzeHFVCLxta5eCNKMB",
  "key5": "5imXLNdxXnjVDkFC1FdKmMGoMpPZrQyHm4Nut4Chgf5dXZTCbR4Z7qJtibrh6U6bvVTHcqf9siUcCyEDaWvAphZD",
  "key6": "28gJxTDPsN2WR2eHUGoRVs7i3jADKhwuUpjn8NTa8KQFKHbYGEUccczPu2fKtqSwx9YjbbpzZwWXMbc3ZjdzTyJB",
  "key7": "4P6rBuoRPXhL2G6eikv8SbLYqAB9gMipqso49pGYhecGxG75eKikMcMei5dJtwAiZUXHUvdfwtjGLJJCeBHzGgQW",
  "key8": "5CLKmfTJuZ23KJzhUBCDCtSuac67PwAU9ufDqSJ9PdVU9VBqLt6a2NPg6fcVDhfDRbyP4UMx7p9fKZN7uakpGHgs",
  "key9": "3PBHRjsyWLBF4nKkvt7T39EMMoYHTVV1nA6uatPjWik37zAhVNojcS2E9Shdn1Foifjn3sPv6WHsDQ6w1PhT2TPL",
  "key10": "3K57kfVqaT9ErrhMGNiCgTDexEoRDJ66MCCMHN35mwJySDkWV5HWfEngQTioWfJtfRGikTz2Hn3mb44kqMjNSMiX",
  "key11": "4Jj8Cc9AMJpZ5LKf4JJtT5w5Sv7WGd9SmZSdJEbXke4aq6QMv4J5xBjCZNviTQjb8QiDM3f4Fcjvqx3SZP3YgUfi",
  "key12": "2rAszydfiH6p5R4pYXHHfKBCK54Ba3LDP9TH1Pur3Dn6K2irw8PzytPm2RXFgbeqTNXe5e5mQikzTbuvar5trFci",
  "key13": "3ThzvUZnPW9tqVm4sZ4qw2XqHQVPKsGKs6YW8housKALn8aBuwoCWs67QLQjhBa8QNWyARL5AGSVVxjXmev4FTrK",
  "key14": "2TueKCWFMJ9afbzK8aCi5r1hExRaqCDHi66GYJHDRr63AcTWJrVo6LwiCA4xxVQP92d79D8m7K7RPY3fpNRsy2Uv",
  "key15": "5VHAyVQK16jCFvE9yyWxMUuGUSq8qXqnKdsjBQRbwwMtMShwChqUF2ReP7uSUjvs4H6fnSmR2rAcMLr36rQrQf48",
  "key16": "5VqrUGGeRpi44E6RFKnQp5EtnQRdNqNDJG98ReXdbYNR2R2LUxUpmJwiovEzQ1CB2krA3M6Jm5EBdGtZ7ptNXMgF",
  "key17": "39xwDZ5ixM63f1c6u4YCGSPCisMfwXdNAj6RBQwWs2MSSuJtednb3uUBwZhBdXV67Pzzbw3NgysrsTqY4rzWXnnm",
  "key18": "2pwqExwyNfjMgu3Sm9NcM8W1q983Rz3Dog69yRF6M7n4mnwf1qebwjxC88sTPiZDoAdnEJpC8S1p6SUQW9ysq2aU",
  "key19": "4KHEGMQQUzdMxYWk9Y7qF2wGBakc6TDTuniwcNPcP4sydf7kZ11sPK2T89tzG4Lz9rfBrZWD8oki23H1FhjAntJt",
  "key20": "3deixca7NgLu3oHvmffgQV4h32Dp7tnZFHAtaLBuUNmkNMzt6ynX57wwpoZvtNYNTBJo4PHj99gB4sJxExCa44h",
  "key21": "2LGstR3ZG7ULhJow2pyCDTkHayzgTYrBFKK6FPdGe9zm35LbtcrUani198UyPa5NkzakBC2wFxtTLUBU8wF5DDXF",
  "key22": "5eaZGFHXK1ttp3jjgHUTLcRKSrG5jtYbovFHSpimYERmA9oXuPTTTEbTqesXMbaE4MHShEotFaQF2os4Xxi76BKJ",
  "key23": "8meydU1Ep4nDzTq5GRsuQiaw8wJcX3ihtPc3UQvg7DJyJMfBV6WFzMV251Rqvjfb4fjg5RiRaFsgQRiFA4LfjSo",
  "key24": "ULZ2UEb6bwUEkgfBeUTC2kzMQTvCL6oX236KpyoCgyjkuH3zSiiscrgZYGzx1eKa4j72zHCjsvLoBuWXYoYejHU",
  "key25": "SLCKnDuJvtFDn5AnBJ2Xq14xBbZ26vknfzewAEBLZas4XfV7UoVLYaH6gCV8WLcejaDUicsCPrzWTCPGz84riR3",
  "key26": "3HqUFwHbSn8iFWJ2dFDbSxrpQaSMvsUx4tTDejDoh7AKYGnpKLBWH5wcHQ5MnJhS5zNYuRTeA67Ac3qfRPXwmamu",
  "key27": "3muH5AGDxqwE61WPKpoVy8b6SgcpgzHxY3QfXB1fpqwXuRGEvLD5VeLnM6N1meH9dXNrqpfzeFmL2AUN4TZQMxwm",
  "key28": "43kUzukKZoRJtCyMhhcK1Uu65yJcKC4jXBXCsGekeEjwJiBqefpZJSKoyVYmWfpC4vagA8mLbKvLkFtxEun6CXk",
  "key29": "45Vm3huRy8r4xNweN2NSHzGSThSmHz77zTvZzdymAsomwTAGPFhiKCyed7xSFhp22EaadqhJDjZLtiadhKR4HazR",
  "key30": "2sNtvxfArsg56u59QSHJYQUGKNzjBb5oq2xZMp9qhq2YBWmB7KCQHnSBnEah5xA4FQKHFMScLFq9xkUibBa5uXz8",
  "key31": "nugLubXK8sTnKdsvp6sKuAmbYEyRPZFhbWKpGxEPcjfcncMMLYv91nZpKiVtNWpQsYzGSR6E7cFXuvPyk3eWdqN",
  "key32": "3ck6Y9Jm8pbz4YTkAjixmGHrD7xrd6WYvVoKoDTcdqWXGiz3c8rnT57cAncn6hx1MFAbpBxj1t3BLYo4rDae3w5A",
  "key33": "Uh6a884zkUjht93emuAtQFweJwQEQZNVxQEv6yjyPkBhTR2t3RhZtbVA6e4pTQyYbqQTzUadmTHNFrVQD2EjXFx",
  "key34": "3Uxzyvqqine4KcT794HLC9LnBg1ufxZL8nhHfN4Cf1SAhSbA3dhkQXX415KH2F1UvaEsLBJeVYzgUHAKYSDA9BKV",
  "key35": "mLRYSu7zLkfuZCxwY8nEkCbupU6GhoyUmPffYVG76a7mp5fYLCpzkWhH6c6RaSAMZzafUZ2nETnJzqyMasfVpuq",
  "key36": "5zVAYUzvPSqViAaDAi6tXFDjGgyNGpoJqVSjyEhkaSR1K1Co3KG6GKJWidkT7Z9W5stL2xwj8kweTneEzfu9ne2c",
  "key37": "GH9Vk8tkr6VeJjkXgxCNumDQoBc8XxS2s8A4GMJVyeFEGRtZJVrbC4BMopEKmNDyiGXVsHgfB2nkNsXjkJ3Tshh",
  "key38": "vABHmMVrBDM1SVXycDTe4x16RnPsJsWJnPEtW6QvGU3asGNBvbrKhahgvsmrbQPf6oogfZzbu98w9YxYEQtnsrQ",
  "key39": "4FP6A3U7gcsciMf4yr5pZwQRhmuapFxmxfFA5QDH36aWKQ8v9HNRZedcFtVzNR5tf8wiZ3NgFAUviWxcg6sE5PHH",
  "key40": "2uDdGhb5h1KaoMVDHHEgKb5kKLSSeaYzwQaMAXZztrthMbsdKkWRqBzJ3YHWMRFmJEPjuDMGJ7ro2sAwVtByrXu2",
  "key41": "FqgY5aLeiFMQbP9LPY41FKd5pLimUjLFXcV7TrybGVScWDs6vBKU4hfmh7874c5V7V8HawFita2jUcn2pZWSCUQ",
  "key42": "3u8hrjyUtrEMv6QFr2r9FHaSSLcRrhqQJH29czbFtZkN9FMVzu7aoLXueVpkMEJGNhi7teJ3uPFXpEAzBinQ45Va",
  "key43": "2a7QW6agQ9fZFt6MQdJD9thPa4uKd7XiJH3ESgxQ56on41wsGD5C8RqHbZ7jW9ZQVyfALbphR1dTFgBKvyQ5241D",
  "key44": "5Sk8qwZ7jCFQP1hj2KrEJAGJbRh4xvZMCjuXktGjhzEs8PQETmo2mZvHvaB3zV6HRy2PXvLEKy64UsBK8JyguNif"
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
