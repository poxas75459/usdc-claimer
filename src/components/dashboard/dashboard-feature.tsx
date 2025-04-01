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
    "2s6U6r7LXjcyiF2n7VTZwNxMfDm4AvJhr7VDeK2rga6U7bE5NEQUj9ARZGyeRKjPd4DLZDG8xBAR7K3iJEo5rDWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "676x415ZF5GYhMBhKiqd6uMwB3poeTwtriByVQefSnDy8KcWtJtNcfWf4YLTHSGTKDYuxMtseGZ4U4XiaBbSHNwz",
  "key1": "4xGM4N4eqS6DgNFhBLHtt9rwh8pS46fXtvFaDRkKk9shC4C15vZqKXHxVyAG4Uu8T8uYsVXR8ZmRuPR6SbXb6WEY",
  "key2": "5YXu8RxFsXSD1trnH1iYSpAmdrzSAGodtNMM1AVZn3JvBWLDjVM5LoTZfpP5Gr7eABF8gKuToHUyQsCZpCXQYzoz",
  "key3": "2Pz67htf3wxhKkXnY9DnQqRshgE9gnMjVAMvrgAbno4AFBzxrGH8rASGvH4PiR1SRCnLs5ykQqgigNeZXmJp8SaR",
  "key4": "4Hx3rLnkkWHCDzd6CacitKBDSxhMVu6fzuW7tz4SN95bHvZ4day3JxuqGPQDVmsJ23NRzdMoDJozLFw1pyqjpTMS",
  "key5": "2Mi1xS8BTwy6ibdy9P9FeQa9qtvVYno4NBmeEY5DXWqcWJ12sM4TJWoaPSNLpxepVfTyRACYgV94t97pxQhgopMe",
  "key6": "3krsEgs4P1FXFMtKL6vnGk3ttqw83j45mobJStXpicVvxCHSKXTRsVFCR4xcZZtxJnKwf475wfD1BhRDF91knxen",
  "key7": "2ubbH1fWwEFMNG5PYU7TeW3E7sZ5SKZ35hWvKDgVSj3FJotSagGLqQSYv3iEKwxA9zTHeCGtCTTKEr7sdNgxcpTj",
  "key8": "2dMv3RFdvqNKF8aX3kK45hSK8uMptdsgSefrGsPWnUmZpYxYLJnAiLRsdJFXx9d2vimDGz5zUgSUDMRGLYN7ngqP",
  "key9": "4pNhTDocWdpLc6kuC7wKaqzmxyvieGqZZfBeRFEd7uuGUbbF9qCV5MXNcp8f4HvsLPzBvWBfRd6hACeJfmu4wggR",
  "key10": "5yJwg5st5We6Dh4B3kDpTzwinA1BQCyQU7JZwsD9ASDEX3pR3tuMubgcpw2EPsdWWZ4cwZeAUgYDENYsyEpnmNCn",
  "key11": "5CxuqDbun7QQczWcEWf3Xc4yCkoQvSh2zVTnaGTwTAwd7dL7A4sfAwzEbEVLsT8BwC87YGZRFioHZH2PRQpFoNq5",
  "key12": "2pdarUEuWE56Asne8RKTY3gmJDKpqZtkhDj83b9vwpBidHmRsL7MUXNyxvx2yTcU6FBWXM4jmDZeYfatvMDLCGgR",
  "key13": "CX1MJTcavgtcSPoLfuMgd6FHDYRMRz7cUcPHqhxkFDtiQsgxpB3TCLorxUYnKmc6YxehoN6dqDEfPng7CEwUJvN",
  "key14": "42rMp8hV2LAK9To5ryJEP8oAFShDbXsxuvUFHrFxBAb4Z29qTRmy1VUzggkKF8L2QY5SP3nPArrbPPNenWKyU8M2",
  "key15": "2DcbrxbWqUTTpeDzQULa292JyLCaM2a4yaQJTWd4uT7uEkn5Hoh4xcSoWnJZquxrP2gW82P2S2G4rEjyyTe6AVoJ",
  "key16": "2LkBWyYNsmyzbb4hzT6YN6mJou94CbyKfK67MGS4tX2U15HPMmVRYuDFsj5vmPBGoE3ebzk5R9rMaP8NgCsJY4ur",
  "key17": "5CAXaN8yYfTAh669N3p4XS7YksFZj4Ah78g5XbqJLofiVK1LUjwnjk7M8iiXh9nPXxULnMBndQSysPEmFVEEGWWw",
  "key18": "3e3W6hgTphyByK7VwpotzNj5gUdAezkV2Y4YjkzUxfdn5XZ1oL21GnF9iTiZ42rxSGywavduxRBpRCZxkjp9MdLA",
  "key19": "iEEQpYU8WRcqUpa5PHDBD33MRF1vTFCerEv8Rpcx8dryB4MRgSdyHYWVbSp7XSqYzCkELtmi6e2XY69jGxaxLqY",
  "key20": "f9kUGTtGpbdLQrJLHUyprHw6Ca9SgpJJgWS3bXgiApWfmZBHJRz7EhS3Ka62rprSZMaDX15f1McQ9J3cmWZSUeq",
  "key21": "3NTi3b6MgGGZJYdZsKgLqL9P5HPTcMDLfVTSQpgtRtPusZKHWdVxu4vVMfcM97rLsRu7HA4wHKWGzEn6tNriZhgJ",
  "key22": "2peGHfZS5VYKDcxrW3S7LGmqLKqC5BCsNwoG4i63SWv7kUrXHGz5ZcEPkrb8yMb18XsyXiYdVDNBr445adNnxwDH",
  "key23": "2pgq2BQdouf91u3wvn432ejcYpX86w2efp7kCzHsLaZtWcbrpzn2fuLQu5UYSxEosnmoHqp4Y3mMKTEAG7rkG84S",
  "key24": "59F2HPLH51dauJeohVBpHTdD6kwjcDoUtmGP4K26T6sWfzycnzWnPSQSuLxJrZz94Unsrqt2cYt7XEyqPo57KnH8",
  "key25": "3MJUW6szgqETgQwsSKN6BGbeSYBGwQRG1GHBt9twK96LfZwHAPi2qrrUTPL6wBpTdMiCN696i9YU9zNaN6voMFKX",
  "key26": "4ZnnKV195o8KpFMiN4MjwKuuQ9p86rE5CKDs5XmPorc6tRt2TzhzfwFZEVLJHEygu9yRfTh7zZNnHY9hk5cGkXmB",
  "key27": "5uHH4G2x5vWosA9ZKuzqu7rsLw3nMnGr861gi3DHcwx9ZZrQstFjuCEhxRWTh54bj45hBTxCBZAqRjknQ7YVZyFF",
  "key28": "io57tTmGsi6jsDpRiyYsNHfkB5MQ4nqWJewURLc3dwg2KkSW2r4yubCbefSaF4jbBWZu3YfVx5tBTm7Jv4SimL9",
  "key29": "2geuoHMResQ7JB6q529vxD36NAQtWg3Lcw1nrid6Gjz7dGU8cZp4gxMatiVHhzmpnT38q1saVmdY9DKydTkCMvve",
  "key30": "5JgLj6jUUwkuMJU7gFVHr3iZsc9uXqzQDi9weQyyX27JVg5Pr8Wju4diqAkXvW8hKWrxAc7LsKNU4XyhFagDVY5o",
  "key31": "5Ayczsv6oTbRKA4KXt9LHpU3gNxJ52Ww5jFtKHvLqXcLT2kGVTJEYF7Gee2GjDs9CqLzdFvRKXtG4eAb3c4fQ35W",
  "key32": "26s43vJ9iqWnGiTc8ppWstKin2AAoxrpfWM9as6HuapJSEv75bkiFgB9BaJhMVmoVdTcqZz7XzU4r6CffhzZnYck",
  "key33": "dn2XVBpjgyPewEVhPUT3GGxDgWc1j5WeGnTkauds2zh25hTWSPYeps1ZKe4fCT3YC3KxyWXxWYzrHFhPLiv5MdE"
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
