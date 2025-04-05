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
    "2XaYD78BMRq5L89PSKADxUmWv9nG8GJDh1yEL4nCCdzZc6D7iYSSYW2x1Tv116m5JBDS6nKMYs2V8BrynDYgqQNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NkAJLCBdWbtmRKkymnviCuwciujY3Fi23rjJecM8LoW9PSmQexAsw2sE4BQAeHMzoaK3fMA4MMwHvBzZxRhM4fw",
  "key1": "Q42qE7w2YvFJv7kgRiGmbZacAzRySVYzKyJHw4K75AJDspZzPNVMZ7vm82uCbVUX6eCr6Rugi9RmmsCYjFyyEQj",
  "key2": "365KFdCcWkkZM1SHMKQAQ19w2iuxh4JpsrPByGZqizVFCHVzR5J2WiJcunKWuaVGdp1Wejf8XTdFYQQt9vD178gc",
  "key3": "3APChFGd2jN21HG3v37DoGMnFHB5RSoE4FEhrPXhrR4sYxrz9caYwAysR5QZAc6MJp3wvucP9cgobj1rzmn9jv8c",
  "key4": "d1RiBDUSZjA516q4i3eogJvykRzgUML8es1h9fsFWjZQodDtNFj24GP7Gd589Pbbif2JJiX711eJwZntTbhTNoB",
  "key5": "2RBV1bdcDmFdvE9JDjGuUm8qNzTZxnHaZmtDjJMmFG9UDcb3boP71NCDzBhfYA1pBB9x8NrxZitjd2WRghYiiMMM",
  "key6": "4VyFaZ1S8CkJtiQfZe93oAz5p9aj9MrAJdJiQ3y8Nuv9Nfc67SVRHtE6p1d8HJRjBgoKBaZqxuAKUt7YHZFR2Pm3",
  "key7": "4ctV6zHZBXNBNvLnT8JJ6Z4UQinqf9p9ozeobioC8YfMEpPY9XjmsQWaYkynuTGEK2S27J1h9cJC5moup8uY6BuP",
  "key8": "3vyBgzU12e7kcQv8PSeoWnyyTQ8ymt2YUoHWSFAmPhbxEdvxYwmrNCdSHSDDCG9xiRYjrEZgwmvemQLCS9uYgokj",
  "key9": "3hoyWmafoimizj7HcYUz7UiYWjz1fKr2seMoRfhbkmVa5Mitj1K4VSp222ZTCsTQxmCnwwGCGhHuqTsso4EKGJr4",
  "key10": "2kRxdfdnZrwkyQe4uTBfTFHfZ5YRiCeUuCcgL6zvpuVAnKfcV4L5er33PVt6PNoZEMWu1kZUYQUmg6mtzfRiMmiD",
  "key11": "2p7JZRzyt2t2Tkff1VUqni2a8SyXjHRvQfbJt4jjobHoGkn3MQgetiSBMLra5Dqw9brjB45RMqaePx9JWvTT2uoE",
  "key12": "2CVfDCtXB3YRasbvep9hPvDdx4Hi6aAGzFNnMxaHKvfzvmxk7V9FmhjfJyPsZKacsbhZd7BDqUqBcNSJjH8bsuNo",
  "key13": "zkrLZQNdzFUZdMXqbN1vV9o69kB8o7yhAmJcxmL7VzqiC6e2dAPdxtNnbDYwNPu1TFUxH578RxBU51vtrAbgSMr",
  "key14": "37qajSJZDrAb5TbSCpHNYQmFg91jTDhhA6nMcnngn6vXAoWZB7LCQNAmpM7TD6jFiJFuvew1THDh7ZZFZL9fxCVD",
  "key15": "kJ7t9AKFAH8uk69eXxA1BV1WwZ1Mq99W2Jopi6kQ4G3WTcyzHkyW8Kaqq7Gzqmnk3WcEmzREXcxJgjxAESwgL9a",
  "key16": "2PuJYsHJmhcRD7qpZej4TR4ij3FAUKqEwcLXPLp8FN7b3ahm8NzpGrDbGC99DMBNLjcvGLCpiAf8Jo6LWD2pufDT",
  "key17": "wg5hF1Zj6fqKo4fFmgSVFEZZwteZ3c2xPyJr7hjFadZZEm4AZAbbjgHcL7bqvWrYSKPz3TUs2g6dB78LbU3AgB2",
  "key18": "4qKLxY3pTAiJL9ftkaP95yBwgGb6fXfZc4YF6ZLGKmCxjnhHFw57mPVtc5e556d44pWgEhLyNq1vYDTGxAgSxEHL",
  "key19": "5wPriWmrCWAbd1X95R1vmHBeEsjLRJ5dY15teaY2G2r55BVDyDqvBCihXpDpBDoMdpidDYLgetyqAv8CYq8vqYcJ",
  "key20": "8Vqa33WmJciz5CEJeJwaqigd5UVJTQw8FjbnKsqpUuvNJuTnoK7q1vE1k1hvbFFcwntcowZDyXsXNuG2DaSArVL",
  "key21": "56bwYisKuf5VzHUr2Hs2ikcPzHNSGb9razPGm5WXcD1bSJfYnhyrR29gRSS58RwReUrnsBSTiVxXxNKD2bkia5dY",
  "key22": "aH86HqjKP6SmwLDvKu2zY8BedGA3YT4LXTLUGUn8qmsfT93syzcwpQY4Dh7xNBpcDGVVPRS4kwxgjegNiZysQHj",
  "key23": "2AwbPnNZbzukGCSAL4RAqgHuADgH9DZAGCt9Kbqx1e6etfmwhi2RXrDKuQdBrFHRpM7eiUacjm9fWmz6ccbQFc47",
  "key24": "4o2st1Sc6HpvZ17mHy2E6QMmBLt3faNH868wSZj68Ra43QVVwgow1ivMaV6BdAPKLSfeAYsoCAjW7D6QaWAPZZEn",
  "key25": "4DKjJ3ypLrmrYKfiHQBjtdmNXZUtuicuK7doLpqappuMRp71SBPJRVSMcgqDQJwL3y4ssVoRDmaftXYMXWv7tBQQ",
  "key26": "3dkpxg2ph2eES6FtJ1hbwJf1qpjXKruaJafD4hdUQ4hxEVeGTeNYnPWWBJtbPzbTu7yajepiyMfFq2y6eM9cpYY4",
  "key27": "432bZ3aU7LPkFvEL6mRCMXBv5BgkeyuUPahi9M3kTvnKzNU3K5FCt87f1EYquZbcL2Skot2TULJiuY2v898zT3Eh",
  "key28": "3ALLhWjJB1p4LBJk1FpM9hauNzCMnJ7bt7GisTNzro4CDwNUG3WNcX6xQzu2yYaf7R5fpQB48wBHsq7egkn99hFK",
  "key29": "3nEKv3HXiuYoNDrNZ4VE9J2MkS4YkLTAHVMhxdBnvbTPeSHJyq6GX9M6F9Lv5pYCyLMD1yugidFq3wpkgvUzyre8",
  "key30": "256eio2p1G3SkwnYA2rRGfpcVQomRf1DFALtZ11CYhPxD4T9dRbDnjzWiVrid5XcA8qeYqewTzBFLQ53vcfTsB62",
  "key31": "YeUdqNtDxSNtpg4TbCsDfk45gzt4Cz9BRw8SqZjwCcYjJJbYhvacRdfCxF5NofJEKzckpDtKEZePFtixQQ2RyoV",
  "key32": "UBSVX5nBN1BQfUy4SMkjAZ2pPJphPK3JvZg4BwBPcvcU3DKCqj3M5axaNPRVedaRwYhyQ3LWUwEBHd1kiz3d7ER",
  "key33": "2chsGipPKuvRAQqKDjpbVk9kTLVmQUXgmTBbMm8KvmxTskx6zoWsX6MZqteu8xTiyCochZqxjosFB8JVjyJqSrhi",
  "key34": "3mfGyhz96NZ25pxaiCEDweWhBbsQgFAFysLnzksAuZFh5oCRP6JvsRDYP3xcvmgEmoaAMGHEJrxAHjdn1vH2MZrt",
  "key35": "2tjTkyaJPRyk9GpmGKY7wAWDkD6tCsgydZfUysQKJEPYLH9FfAeRLGumsYvYeYoasHBZ3tc1MFPXoAhn6qUYZyP3",
  "key36": "3YUyx6ZgD7ytKHkVy6oqYpt51AMxVpb77NZA2YpfLAwcBrzwuoAu813WYgmnDzTGhh5xX72DgLJGCx1xhU3BVLAn",
  "key37": "Bx8DxG6SAKEvWCyhqZMA5bzxeW9apzF5YencMQz8X98ZtYEervQ9B7ZjxSKyF3kPfC3JbV4CM2Jpazb9VUQdq7h",
  "key38": "5UwtC3QSrJxYxtweKB4ffkcqu1yssopPWtgVbZZ9nEsvwy3KvyFmxe4QpW1dyFtxfJQzYr4u5S3AN2jugXirLphX",
  "key39": "5T8QhAAe7wHg3dKNrupVPLnDHXa5KHpmLXDQcojnmdQ2hAS33T1bV2c6A1aGrj11k6PN95DPkjC1bXwWQyb1Rd1U",
  "key40": "9HwxHVd2VtcSgWbNcmxr4dNspQ4azecpk9Drrrzq5Z7jX7Eo8Xxb3pZvyq1ZBUXiRoiRUAwiwgJzBSVhRP6rVie",
  "key41": "3socBSXGJqbq5M54pEJ6fbQCS12MCB8QNbYKxJhABD85dyUtcffq78PwSvLX4udCxgX3REQDCK5p5PK2mFu7f9ea",
  "key42": "3TYk8T3qckM9sMbV4u8YTgRweFfDbDxq7nno4NZddiTvuZBiJxEm7ijoMFkX6YACxuPpVTYykyTJ5v9mNq5PnDqg",
  "key43": "2GvFEq6kDZe6kPMRYRQQ5c2iRDTucoiMmBRHoV6aU9oMeYxTXE2m3N2mXBRA4e1A7nAQqs9jKR2HuwVRdgxGbsmp"
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
