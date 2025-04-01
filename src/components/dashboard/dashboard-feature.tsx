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
    "4CgAwfzdZx33cNoBrJEWKYeePQXgZghd4B9GaZqP3bdV2aL7rSKoTe8miLPGGyp1c9SPDDAjvpwXLR358acUsS3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "otoGRmXX2Vc3v68px8s2h1avmTpT8iqEWkV5BbCxuJy3k2zmQXtpkKD4L4g2FZSjSU9zXhmHcScRog2wNSqm2co",
  "key1": "5Zr9nKMbHw3iZFHVxhrqQWyrcjiKJ9Ya9FbDTDV1tT3AAhu46QtWAqdq5DtDaBptJsz3j2efuTZoWW7NuPAdRCUs",
  "key2": "3PE8K3XAXzgjgmcHT7Ytv1SJgkWWsjT5V7NKkFbrqYDQAyMeqZTB83tst3sawi5hUixpg6ySLniFe3wB8x3PTXgR",
  "key3": "4ox42JnkckD9sYkAFm2rHWaGdiVF2w2A5NotiurK3c8TsB3RseVJJgQTxpveTSvry6X8ndczbuXT9ugPHHs95vy8",
  "key4": "vs2sCLDydAtPQqPwMAzZkdpV1Zs4od5hoHZFRW1LUhzQSteSNU5VGpEfrHeApaRrSb8vivzGn1zpcgCustnK4yB",
  "key5": "61SE2AYunF4ufArgyjn6oSW6T8JDak5tjq39UKicK3aJWFsmZFQdnfMRQzDXrAHeEnd6yNryiXMEXaEtzts6hHWG",
  "key6": "4miaKmfsLxsDGLW31jpzhck4hVi7GsCoHVcnya53aKTRqfqHQfqvzPCpX5u9pggoQcRbg9pn8yYTZoaPNFbxLGjq",
  "key7": "28rti3oBCKjzyv6Bv7KcUoCA4VRc9p7TPmhj8tu1T4iEtjBjgWP73JTiJfY45QV13K7tUtbvuxyZHRQ4zBbheYTh",
  "key8": "5eHuizYPoY4BRokM4iRQgDYmjiUuBsVuEpvkjMrbDcJUgdALpLQ1w8Cniqxo9RyuGQvumhguUZsE2MiSuhy5MsXj",
  "key9": "9PtGX6P5N7Bu46m1jiwjuqSrvJiCkpqapfP6Lh4wf1CcXHqyxHPiJSxGTWqrpYZhyQRw4bukdsNxbCCg313HTYL",
  "key10": "5nNTcDCvNDB81bSraZkSvJuvrRkruW3yfzn6BAYFSLoQnb5K3AAqHNq5EKrpmZUf9msFm8UVkcmra3TZPBM5z2KT",
  "key11": "3juXYYwjZKHjFRbkM2Gt3QrzrPAhKn6ng4gZSGvFCRG55nHSa8JXBFK32SXjM6smeABM8R5d8Wd3zg9BEwTwr4t",
  "key12": "jLf6fdyKJsMaiUSTEwviu6s6SswVwKVC7qV7szcG86CtD3uPb2pquwvhyeieymd8bxVWtcLw4zysxX66Vc86GSk",
  "key13": "uydCVpYi37jE78pzFvL62oeFMS9YwMK9BQmDJY6eJR2y3MRMueyeCChM8XFfQHSNWbEHf6s7QZYr9NCoEUWfVet",
  "key14": "5G492K2mA7h6F6YtSKSntehAeCXYi5tc12nh387BoAUWGgAFiAX4JyhdPCaBbJUCiSYnPNqnt8kxZYNYwNj47Wnp",
  "key15": "32ARypTUwt7ffHHdQjqhmLraiUKNMawo1zzRpCT9oxPgfpG6w3d2YmFoayB1QUdse72QwuFZD2q4KTfLAZSrjTpp",
  "key16": "4ocUVMJcqpezgKnsGKqcfXpUWS7K9iCQVHozafE7c8PQ2GbSZmS2F1yUYFk4rm2mYm4nWTFYHkHrW5tuSEnPXzP9",
  "key17": "3z5SqXrK95QzjfNWZPiCFa9VdvJrFei6CfthNjJ3NDv5KdYMMTB22RgpVRD4DnN67yBWkwfGuzeJhfU5xK3XXLfq",
  "key18": "3QYPYN2wXpi6LG6pijkgjbRid5oKjVV4xikDigBszYghc4joNu3HyuRyeXMSbCcGUXXFsAa7ZXMv88mFDi58kcfz",
  "key19": "4F8kG6KAHP9LA71WNzcmMM7PKscbmQNraCfo8LP6nw4tsZYpRL6TBrexT2y9H7hLkNa11n1UZ3ja8SRdCTHNAKe9",
  "key20": "4J2sj84zx48bkpzwnLHJPFR3iK5pLmrJgJVk2RHqCgSHDC44hNRccup65Q1gAFhdMcN6Y9C2yS1NDCqeSSRy6E7m",
  "key21": "NM1bGduVMLvw1qpBCvuh6Upfarmq2pPbQ8Wn8h9z8455YrzPcoiqTkZzthFFvA5Kq3hKLSZ7G7M5sNWtVbdP3GY",
  "key22": "65hdqv9wWapdBAiop2fzacZw2LZQUMSz9xJqcEmdfaZnvnMUj7j5fXnk1NugTazgmNq18z7MmpHQCELCxdRRGzmC",
  "key23": "62g5mrMcV33tTBSXPGbEFgMmKF78zqoe3KqdLMF4HDD8spbRGygDaAnarL1SmdkatWk3m3rJGXGEk3XaZ46zm7oD",
  "key24": "BkNniQRJK1hZZLpppHBgfF6oYxsns2rARpnPHxuEUQdhNDD2GMKc9WDcLhreSKm9bBRRqbaZfCVZrbcyEVRmbsq",
  "key25": "3Md12AwnBdt62LJugmoL38FSP9QHQ6JasPWBJUi4FHzigiTkmHYsTN5vEvQtVpJpBf19uceHGx7Nrm9iKAFjkXNS",
  "key26": "3u7ydGxJeYyYJhhV1QdmtEQNY7ueEd3WQzKtHfhz711NLPV6D7DVbeu94BM7oM8oKouRwZqHobex9uHQug9g9Ysa",
  "key27": "5NuFz6G5AN3oCGZA4AV6coJrkxFS2feqoynPpmAdwUZX8NKgw7nTMSdBuN4zo5TRSNmDMjhm8q3HF6PKDefxN6zm",
  "key28": "3RWwEprKeu8s1zAf1T9FiF3eJc2eaFpCeVFZ8SiMvv2Hed1a8z8SaAY1SW1G3UdJqbF3PemZNhhi45JyTrGzdTdq",
  "key29": "Qyb9ZsfNjX2YCUfbQ1f4SQTuwu6pj3jMtjMkmoDbSxx4iVcemmbeC5i9ykmWtSER6wEbn5hjzFNYue7Kk7k9yUA",
  "key30": "bNaGCdcsKvWq8Ad3AsFTg64jcQQbvu4cbmqBMjbMJZ7iamYFJFgSkFzAKK5EeKgfPzWWThBJ5i4j9yv3voQo7k9",
  "key31": "4F2nL5hDbpbzZe5aXWmiSGB2WPe82o5KifBGdnJG6VL4Fyu2FuXBJ22jTn9VsjCozEDhWqA7XGxRZM9vx85iujiw",
  "key32": "4BHCEfZQ1MbGj1Y8LV6feNA2gxDXjJuUHDjSZ7vbzCcb6LRkK1WeN9DGjYYQroXqJKRWYde7bLk3LCgyLQV3b4kz",
  "key33": "44jdYULTZ24PtYiEZqjENEMzmCnXdL2D9AgcHpytoqoxPSbtAYKaFYxTyNuSzra1Q2eMQfdqTUALmiRzpxVifsq9",
  "key34": "2pdFr2remcdKidDwaup12d13tD91TAjWeXbFFe5xQ37aggv3EqV26jgLH43FkamPAaQq5zjQP9cCVcGSwDbRNir4",
  "key35": "4SDzUwecQTrkJ23bXQtQaX1wukH7hgUdYgGU3WBxyGhtrAiw4DRGhFTYJJr1zgKtyKMaDMLCA1ZFFpgM4SuiDuWj",
  "key36": "ErEqDFhghe2GA8JhVpC1PKX35z5pbctpYyA24JiCdQ6NMsHiTPys7tagtUqH3mwhZ8L2yu2x6P1re8m4WpiJSZ5"
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
