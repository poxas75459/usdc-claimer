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
    "2uq2rmkC1gPRMc8611QsYqaPVdtF3CHRd3Kckbatccr6fwffghzTTpP7NpCppHVStDyjAH8m2sS98DKHHgiwNiFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RPxZLckZvPv8G7Ho97YARxz4d6DWaAPqMGaNJxB7jZUEgdeiY5TZxeprwm7Z54zuYUpEpAMcvaDwdxTAriqvcJv",
  "key1": "3AfTmhpTNNsfggsSHQ9p47yvxvq6gx6yNQU7MnFcyy3oKRCKWJRE5QfSQqQy57p64AVURwvF6EwxFpiJXCvWHRwQ",
  "key2": "4tqHB5kSLG3Z4KQnQmEopf8M5bnqAeYasjTfV6eLFGS3De33ASYpmu1xDc3vSJLmVG5P6jQE36JCrFC8HBvu6RuT",
  "key3": "4dsyqxLe8CdCPvvNwNkDWjtWVJc8ho9hbFxxmK9gZbQMdr9vSaGXvJPGfAo417zJ7Bbsd2mTL6Uq9B8EiY3Z4JLD",
  "key4": "3bJjPaeN3YBtw8NSuVmhMyrm1Xi6H69HedPDAVb4Ay2rdyfFnWEanonbAb3RwWYSomFY4YYqEdBGfdUDT9U7tXza",
  "key5": "2ACwKYTTQu3HNYjzUVqLJ7pBP9ZFSA38tYyX8Jn4sAQHfiFBmgWnfw819SNNe3DXXbBYsjtgMiwHikd6NJCoGCDB",
  "key6": "4QbpzSdAHojwVZJvYBLg7hapKGvVcWUKvtXNb4qV9sTJZNZ7rkvwC8VhzG5Jr4eRrqnpMeuZrJtv5yTkjEzhZPr1",
  "key7": "3c4oGNGH5JMxhYtQewHJGrmqUDVkWidFaCqhUYpEbqqu46Wqy3RUSSQKjSxnr32979SHicoH4Htq1gonQCkQLpZ5",
  "key8": "JcrHTD9Bmj6s83CND92aoQDqwBpt3PAka7oUH7WhbpYK4KYGBDFtzwA9QYitnktk9BhePqQCQ31TYSxsiN7o957",
  "key9": "5cy1KFyaogcDT8nG7C46gUWuJ2iFpksrgwWvdkjgA49iuVG9ot1BZsDHcCEFsrWR2nckT3B7ZnK9CUx3eFk4S285",
  "key10": "tytiAaQHdRsNJerfJULPx82BG5owNTpLZjpGWsEwhozgKxaAAoB2oaKoNZn9NrTs8iozzKwNJZDxEQq8HwoEnGd",
  "key11": "jW1jgovPkwD633CmmEd2DDKdUfFaSGUa4VDw3KvgkNSJJpRgiLtACeK6QgAz58aDsW3LE6L76un3pVt2c14TJAE",
  "key12": "3SEBKgMfPyQLGBVQRCydohCXQST1mBGzh98uhPf2MDJE32duHDCTmXwVSS3nsN955NbZnsxCvPcujRubvwZzrNWR",
  "key13": "61citPGt5dseKjUm9P43n9JucvvjcN7BDByp42tEmxikRjVyaNxEXThFSLFMzcW3ufmggNtDLgGN5bcRbPSfG7Jn",
  "key14": "UA4RfLLxXzWKS9hbZ4T3BUKCQMvoKmGT7oiYXuULdSZAxZdFrFY3mP8Qfqzwp3t88EfrA9EwaT7sDHSqyH5oRkv",
  "key15": "hfutkvDT9twQ4fH7bvHxx735bXH3YuLBaNEZ8BA1XX7cLrBL8dtGm3Yz82NMKHNwA7PwmJWbGs9bSpRFj2KDz1m",
  "key16": "21n4pjTRuKKy9XMLhRnxbE4hHEKnucqpyVMJNGizLH4vjizSnGyQqzkM5GFXKwXQp3MiVHoBXFsiiX3tkcAk72mv",
  "key17": "RDryhXC6JNzUrTdz6rqnkyUKLM3YydaAvWuexC4KUE44H8dYUrgUihzCy5F7CQqx2hqPA6HArdgj1opNRAnvRCF",
  "key18": "dvVCfN8EX2NkVDEJZhstcKdLvjMgrJdyqFkChMo6wgrGg2jozCFn8wEZXp8BFz4RgbaRjQgh3wzirwaeDskKmEc",
  "key19": "D6LqN9e6KcyPiANimdwa2JX4sBtQAZH8wx8m6MKS9jQECscjf94zxE7jx3HKcDmVLa8fT8yRGnvS8URc25sjkAT",
  "key20": "66MeKqwWk4RigbdHGXwwMxvVLBfuaEobU434scPTmcj36SBta7wE8qqArrLBJPkU2jpyJ4XokA5cXhKgMxXqpybJ",
  "key21": "2uhf7q9btJsto8nWTQQCJRMsMPUyMRyjTiDjKeqsi4XbRqAsgGRExVDDs6bKEszUjwcafuw6AjCjWYpPjk2mNoxM",
  "key22": "5p1EVNtV2Htj58jMg5BBHfk1KMQ8LvTfr7m43ptwqSgBcV3RU8eudL8cpesLpH2NJjFwhAM85mSCAXD3N9FNcoQ2",
  "key23": "52ubYhLkGFRe4UjPBd94vavqv6U33vc3kcWD1vYZuQJrLYvqGkE2iLLSdPVLLEbzEJec7wuEPYGxa1PCp1YJwjFX",
  "key24": "8KA762Nkux97NZiuLRhmCd8n8639oj8acS7Lw2iYGiJRbww3aNfVspHvmAWa8Zca6ZdmAguCxz1EYtUKPW84VtG",
  "key25": "4WjK5fTCpuNurVvmvoBcgP587XRtPM3ngwnPtGsgzaHmNVBAskSanJ7euoaMp2BMZQepQnS2HmLFQ5EzkneAV667",
  "key26": "3yDe8ZiG6hKBZBdmejg9BroHzLVCFKXmFQ13pbaS4sAnXFbyjBaXQcRQVzSkvkL7NRE4GDVN6LrYRiV1RmtDshan",
  "key27": "NMrEUrACb88AvU6x3tYxCPV4dXMaHDe3wqLPwg8kBAnubXjUi2yUHQ1R5Hj3sRnpYyyTJvqehqUiKwAxGE4Jqji",
  "key28": "4ZyCVAm6jcxLMV2rGSWRLahNsgmseP4TuK8JtvByZA7hFKzM6N2G2oUSixPdYiQLskem3YMxgtWbZBVfZPob3LKo",
  "key29": "4daKKFcod9GLmAE97qBCXYYm5Ln6rHnjbfp5uGemU5hXrijxQHG8RAAZdS8W1pApuzinvSiRuLudRmqX5wwsLKCQ",
  "key30": "EGqqD9HXWXeCvoeDaQcoz9bMp2DcRZ3t24K1fwmKqQDn6ubxiEMEXnMAL5MviXGAqVQwBfekA9Njib1mBBm5xFT",
  "key31": "4ChsW7ZdvXg5QcQ93oAiMtNRRjiMnXCZgroYUtCm5FEdJSdvDRgiTtsikHWzczvLaah5vqqZe8Upe1EUskTyPSQi",
  "key32": "4TPGZAKh699zQHUmrdbBnN3pJv6n4r2oSbLv3WPNDPq3kXzcMSDzE7E9KBSxBhcKBeBMmXwa9EoaRmKt5ash9Wnz",
  "key33": "4Ls53GHdbg3LxukU6tX3b9CWnCFa5abTZGFhrhJXGd1RGtavvTJVLuckfZN1ABBd5NDrqt9tHpfhzGTaLfymbqhd",
  "key34": "iVt3hrm8yDgS47xgYv42JpNKY8vKMciGqkQ4fiDNpsHHsdgfNV2SbYpW6cWkAxnpzms2KBHvvchVSCcaen9g2yf",
  "key35": "62dzj3QCr8MswNUox5Qm6DzAhRP8weMtnFZtBMWp6tjkCy5tEuzn4bHQef2k9QefXcuA5u3D92QGPM8Sz5WsdZw2",
  "key36": "QRSVDDgQ1KHWLpuLKMfUzKkpPsZM44Tkd3fQjFgf5CLU7TzJwqfnA9x7hRh8kietGRgQWzM7nfEfvFn72FNwgzX",
  "key37": "4QaKPECmS8GgsKXwpwSoUJEu6wpf9XvPViNhvAz8XbFRZmqvRQFysCBouWoESbW6qc4N1iGD6TQ6sR13Pjcw5XQX",
  "key38": "9bj6ZqEKrq3kxSPmfPE3pJSnuvES6Y43dK18oXLDnFp5DyTWxw49b4wxwUWCzqn15DHNSc5pUyit9HHe6xp5RGD",
  "key39": "2wikVEfmpP6mCgSVmA97CzSRXecLwG7TU5GMjBfomzeB3EJgxACXpUT8myWYf5rePuuxvUv6UeF1dCENVi9R9XyL",
  "key40": "xk3juo4J3i9M7TrphZhm1ZCjCMQcHHkJwKoE7wtPYu7euWKfBZCnmqX4QVQDqMLeXaomL471Z3uSvEJLxWCYuMx",
  "key41": "4eHk4NcQb8bx96TaEXTWD1xZsFL5x1btApGrNJWt2WxzG5fA4j2FQXyhxRqM51zMu44U16BSxrqhRiyxVEU5idrv",
  "key42": "53Rpp4UG7Si3EQNyuMcCqmUFh9A2wwnx6fni4AaqrsSkrMASBFmWo4E3R36N5vdLnLMPgwAcJa5iYqRkiweswDAZ",
  "key43": "2r1MSnWeRWG8NV32EwVc1Qh5BAymQJ9ECFn2k25LGhe8D6AwPM1ajyDgP5MQwGhZF5SbEsSAPBLK6Dqqkt9AgNdk",
  "key44": "3W9dXrPQyRFtADK45EA44wAbns2o2xvmmsksPbGtEhRcGEmdi1LCpaVroE845WdTKStFRNhf2Tu8y5YCXivW96vj",
  "key45": "M94pi8zavs4DLLX4BXVMGcYnENgpHwNtRScTRP3ncZvfsnYTYeBesRfSokFrqLRnxpLoUWS2ybEWiuqkMPUd3Ak",
  "key46": "f8Yt8Zh8kWkfnMmEqYpcsEVeeiCCwfMZ8ghVysYXa8APFThYhFZxn4tqsm6PK6NLEDvdXDmB2QtQHoQqdeZ3919"
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
