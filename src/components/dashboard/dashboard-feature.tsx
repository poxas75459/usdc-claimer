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
    "3RoEsgHz71k4WkYGapsdE6V31SSFAUHZoWQievpDXe9Met2q8JNfxMZMD1h1rcP2gtjCjnYhhJ3trA1fZcVvUyJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qq4LFy2vc9CP6VBKL7u2d5mnTz7pDCFy3YMwHU7j44XT7zpZ9QY7yzGr7Kivqd2prwZQ1j8vTpkS9NmRe8fKQ4Q",
  "key1": "4XnEQio9qRHpntqt6wUbCeYaFDTwZ6moQUcY4Cx3FN2Ai5vUu95kXhpmbnwYZFBXWjShVmbeodxGdNpckt6jRcs9",
  "key2": "57rhmiZYNiFBKWnf4JuV5LDPHfhiB4tdFK2PtKERjkhctuv9aAx6PNHrrxfJNrLuWM85Es3g2vhVTog9hDTo2Dt8",
  "key3": "3juQ7HZUvTzz3xMaCHsFsUEeB3YDjg3Zy5Ep9dwB5QD8eawSSrLyTJJRnN7oXaPvSjfCi7Cryx8E5kBbhLzEfnTo",
  "key4": "5pKmqFVHWvgt6W5Pg1n1NJf6kEMhH9SWjHp29a68W2t48sFeP6FBLsFgPjQbTnHrAywuWPBUwqtLsfUdVC4QiFx4",
  "key5": "wpcoouCm29B5g8hJ3kmRDK5hmr6s5fDDnbvFeRzTnwTR6b1hRZk28KWNzLjEPaae1z7WFGGpbVvDtXbd5xozhzg",
  "key6": "4XKjiA2WoDphJqSSdFfYCknufrkjCWYpMfaUuFo6hGQ9AirnjygWDHoe3sjuGVV6UvZ6W9YhqMJuaSjdTub7XaH8",
  "key7": "4Ft8yhHN5xhJ68wRPoy25kZf7fAgWyu44XpXfo69APr8AfjSiqBQpdYV1GC66WLCTvos1S6qPVW5hvxcwgmjXKVr",
  "key8": "61yEhUXNHmdp44LniWkXshfHQ3ST9gVD2bkqDSp3MEwcL712RoBJqP7gi5sDpVnbDAE9EusxK38xWRjDfUfQ26ab",
  "key9": "369NDMtqo7ZxWXHxsQHhJvPpgsTJambanPKL7gneSWxuZhAssKTzWRSBBvYUhGDxE8Zn8fc847XWdVw6zn2Wk4X8",
  "key10": "4w8YcQe34BxwQqCSgv8L452tMtq1jibSYruwbjKej9KK6MmGLAqLFEeYcziiMHBKBsj42qLxv5Hu2fcbPBt5hL3U",
  "key11": "2XgCZpP7FwhB1NYCU7XEVJvP91K57AVqFXkCC4DawtfDdVBtfVAYXjs8bhm4worHwZRvh6JPDNzco13moB3pwc4n",
  "key12": "TjeoagW8TCak4s78CguyjcE3PXTo7ASwqz8QwpkojRbxTjWj5TpMDwwvJJdWRZbRjFWbxqcRALR3PWAcuUQHi5K",
  "key13": "4qxGBRWPUb8QwHUQD1AH6yu2pwysM1FXdMuRmnxZgWa6e7upBCgWqYRbVteBEFoopJ7or3iw3mMxK2Qdd8inN3kh",
  "key14": "65Gyctmq5BcwMkP4rxe4Jzok6KoSLm4EX857AfzNvapqrfChaWa1RmSeR2PPhxESC8XGhfpMLRmYotN1DfrgtYea",
  "key15": "5yGRqG8qJNJqf1YRsm1TtRjhEb3i6xCreaxVcMDzFSDNjkCCr5R7jQfu51CKWUBasvfWmynqFYDQ3U7ocU2mVNyQ",
  "key16": "3B3TFNBnhKALdijnZS5hcWX1PgkW8k69Eei8rZW7jXvENuNsCz22L3rx2fo6YAYB4toWTnn5du7qF7Cc3fTzQUum",
  "key17": "3YURDd1hCP6i7LGmBrTpiJTnps8HMxiAtjkVaQKycgFHxidV7fbV4LnVwtfDU5Bq4mHGGA3HJesSDZoUU5NkGHrk",
  "key18": "afBb2f6yHmd4BmPm4KUQkiPafMLmE2bcWa7qCGh2FYCcko9nFaJX6V7pCM1g8CJ4RJPD3cK8PtXdR4dfG4wu53s",
  "key19": "2yyod1P89tNAQn5eam8WvGP1kK5aa2pw7CGaTecbTEy1iMHe7mXcjuVDEjyyfCntfwsHyD2ThsuEWDbUKUtu7XPh",
  "key20": "3wHxRP81ro2TyRo9E19cJHGhQWPtQ2qPEMfmvAxAABzs3LyuUUMmnQxiZk6dBPrEARfBScPGY1nmnubUL8f3x3UP",
  "key21": "5z8BQ8SxKezYr2tC7bFvUboHcHhaQEwfKxZ95ScNLqVRyL6Zc7RhuE9CeGy7xHMMY1ECwhSzyRuVPPE29qa5P23U",
  "key22": "5QUsj8He1kzprs7RpwW7sDf4FxmNfkyKZtSEFCNfeUCZs2Q12B4oCksNqniq4vGb3JM8cGLYyhVaWq7LCYF9tM8H",
  "key23": "2YW3qJdqK6Umbb3sJzGjws2XjrnTGWyQLdh93DNdrbx9QdtzTFFiQSsEPBikkEk3bHhH3fk9xiDgqNuVD4Mjm5de",
  "key24": "5umHQTnktyTJvoZvrHJWuMUD4aovEaDom9FUUDucxx6oytc1QqvSEe2BQaEsfhJgbyhUgVXtJDtfkjviL5oaFvQp",
  "key25": "5hGPo9SiX4Yj9v5MzeJkMxwCbsL5FLYFDafhUGXx8J4RBHWvekmYWaHocEcn4jh3cdzVVP46vYEDWzSR2i49z35J",
  "key26": "V1tqgrvaqQgwG62N92Er6zjaExa3jsZHZokmbhs55xYUh2E8uKvkn18ZXMNozeNtEMpgn2UwYibM37Emj8kbvHF",
  "key27": "3NnJ2TiTJgTm9radv3ustdt4mX1MjHi6HUVfT8jPnwjW4EmbmERezxfx6dAfJA6GSz53jkGMyBvJY6WW9vgcJDGc",
  "key28": "46uwQyaqD9xT42izVTWjL4C5fziHc9k3uQ6dFXDFUZCRuRb6psAULRg6wzEidNiKtCZZikggNnwfpwGpi26aRyLu",
  "key29": "2TZ8XV82uf9Md7dGn7G66t3RBq8Vihk98AqgejJu1G8hVi1kVuRrZQPkPDAJMS4hB5ukKKGc5uTjYDdyp3Xvc6C4",
  "key30": "6X1DUhKxnvd9FRp5pSRab3zNACWyHGozbh5Pv1LiweNkk1TTc5YATHsuZHf9cTcQTRWWpjKxJJRaXaBJRCZHD9p",
  "key31": "4NhXLHU1sNe72L6JJU54WGDg9oFJ4VQVNckJ1PaXDSkUsmeiqeex8v2HcLxdNffjMvzEiZAJTVQUx1yFQyUy6f36",
  "key32": "4ctuzuM7XjVoxGzosDmH48Rm62RHeeLSPc493bAva8FdPjnE7uysaQhwq1ySGmCUVTPF5ZraPuVDGSgHB4idhTdk",
  "key33": "2jYQj6MAv45cavsNPTURe6yy9xakGVRLLkzhgmdUeEUXEvDQ1VdVwRxdJjvwfLK8mDi3XKXuVxaGcWCC8xRhWW1m",
  "key34": "5gfYUdYYXzxpVa2rbxJhdUK5unNKSCzsRdsnLJBCss6tsLXBeixRpQh1Gvo1EZzPbfyyXnrEktpuXEnEv7wnQxnN",
  "key35": "4kNYRZ1A1S1QY5cauy1B4iYUQA6u6wXjthsMwsYkmf7kjEgWnZbnAXh9dMhoL9YGteCL4FaP2ZgNfBjRiG4mRKYr",
  "key36": "Y5MWLTxDcw1zwTJ9PVsDPDk5owuhUiieBKQTMxtiaQgtKk5GipugVcTo2coL32g3Eo5cwFCZZKRHDnRJWejvLWa",
  "key37": "2SiXah4TLGijuvywP2mxv3NRiSvczrNkHVbgX48Ha3M6bTLn9UsXSdieqrbqPuam5k9DTA3nN7ReJqb1rDHjwyWS",
  "key38": "4rpu7QPYo82NKrpXv6WhWMiZEVQ6SmvyXa68BJVaqQ1Zd5aorwYrsKLDiaUzToTLb1u8LGmgVi7ffhWEXupChTva"
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
