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
    "66eNULfbDgbWU9dtfD4Gx2c56vZrDkTg4wjMfcHZuxaFw7RvEQobTZTGadwrfnc2FZuYxaHnTwpMAapj7TYevFyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Bdhz3dS6571dhoGf1yqayGmZM83BGt1c6m8GfEW6hzEh2pUdRNeF9oZCTcLavQri9B19JZ9WLhAmr7dhBkCxKD",
  "key1": "2atkYtKrmy7JzbQVHJ5mmszMrG1mSMFaN7MAVX3ijDx87C9oLJqPtP9X83JfGDx1JZAwtPiLzS3rqiP9cVu3gTPS",
  "key2": "3G6NB1rr9y6wjsgeELtvji21zaHh3zF8xyQhbFuhsrrWQ8srXv9TDesE1TgPY7zbC7h4WayYybA544jADcnSxFFb",
  "key3": "4b8qyxyhZPc7CQRbnE3zfifLBGqqY2cVAYheUGbpoDRYm3cHsCCZQ5ASJxT2QspkxiRKssKuEJs6DJiPghGytbkg",
  "key4": "5hFp2MeFVyw5JyPzbAKReVsm3LaTVNHBhv9bhLqecFMJXpuAEGBsT1uEHBwwQ6jdLxEQN6DvyTLDzs8GdkN1QXPK",
  "key5": "4Sex5PJ7obNpCaNt9cYnUhF8jazwdtrq5iU3erW9XfEVSPxqikXLAn3q9SdcSzFcsNEU7xf6qZRo7W2gvB2qLwHj",
  "key6": "5SnUBJDDy2Zt4WqrDp6zgJe7RgXW5uELSracTJVKEgYHu9B4CA8uugByE5UpEMQkBYmw25pHZ9R7toRDBdhppqmq",
  "key7": "3pi62pT8uHtJLtM3AzcHnPavUe1aXwmfzTkvdM9ARG1RxnA7xud6y8QRJaGztq5HgeiciGAGMafRvrJKRazbbTB2",
  "key8": "523bZ3LayQDojZ8w329a5sAmhhBAeGFReSF9RcH5U1awLKYfJJ98DT3hbzkoY2kHdpJb168tR9qnqQkUk7kqEzsh",
  "key9": "5ri2EnirqBq1fKpswDDieb7V21RxZkDJeUX4CfikA2gHDRk7dCoL9YR3Ca5sQ2UDUaTC8a3Xn2Jbx1SBjovNKq7G",
  "key10": "48ZixrDgVv1XLtLBCgRmSxpkDzzt6a44khxpmFUzsJWpVyfUeayoSwW5BKj9XiSus82bEUPEUZXK5DAbS9DjCXS1",
  "key11": "3uStn8CR5pFPAaKUDdCdUyzcAWxKRhz416eZcHKj4VSziSHmroMBSN7RPhxB2R3v7GSBLxPQTFkMbT3fuqwvLqkB",
  "key12": "5fJazSt7iHgxSGVSsphEg4Em1rWYfuTxqzApvLesrCNR6GdzjPtnZP9PYbKZ25Sm6S4wD3Nd72jr8AdikXCp3q24",
  "key13": "5Kdkh657vwkm2NfnNFtpnTFePb7M6mwo7D9ynY4TyxnTn1WoKBcNQn8amUfNwXkkEPvtiNPGZVN7j1L9no1RW6DK",
  "key14": "4kj3HyKiezn2rh9p48NcURDkrHgTnWSqfsffQ4bsR34MWEgz4XekeFQ7YeB1oNmqk3PQs7hSzR2m2B53SGG8buoL",
  "key15": "2kjoghJn8g6eNwM33FyV4JgfxUXtiVTuDFhyDazWGoHk3MAnffbMHnBrYMGBE73FGDSupXycmc6T1vCf7n5FfBGr",
  "key16": "4w1bNMgdEv2sGfEWaFDwbR9UJk7oATYJXF6kXGSWJ7ZViPqRjgQ19j4zt3nt9Vw3bybCct6Tpumj1DR1rLkvvuVb",
  "key17": "Hky4tPttr8co3MxaZDJS2S6pabGmjzrcjcbD9rQ7hSnDp9uHTF7khsxusiJL3RqzB2FoyeT84wBr9xJ4ogKDj25",
  "key18": "39yk4Ln4He2Kr9BZyEAfogW8gjLvhTKyHUHCH749A4mMnspBn9fNSrQk5REgV5oHWRreZDmZRj56HjAXHg2cbg4Y",
  "key19": "2zyzbM2XRz3Pscy2kpKDMyKRpwFcU2mDZLJ7px3QPEcnGzuCfWMvCtA2jSP5WpFjgv2XxEieCzBaFw1WYPv25uVx",
  "key20": "62iJyhonWt6hCJmnycisaUtiDqsVZba1qhPsUNZrhL5etZmVFppRw41qiYxe8WhqjQLX22kUuYuLoDVr12GKoftu",
  "key21": "2x5KaBXdApYDsvafdgsvyjXcdsULp8WSpFCvRjjWnrfmgSnkmxXt7SSZ2cjLojQcpub5r8vUuySWiYKoZ4uAoTui",
  "key22": "51CTh6phLTSjYVVVpGJatYAVSiKeLLbsbLbxKHzkwtXwtpJuFecfgvFpmJtmrsrZo2UQLcPoBuqLCBwskNHj2wuH",
  "key23": "358AvrsYeeSfZF3J6SmP5KnzJUYPoYsCKcXTnULvfxvc5VGu6WwmueG28pU1iQVKybKbZWNpHx9EGZbZYmMyoLQe",
  "key24": "4rxsJCaKiNnkiUsW7msKcSLUbCqg4PNY54uVsMeM12L9jbAmgYnHuPMjuD37fCeRfuLuQr9GYTempLkPgeZt2WZu",
  "key25": "YVtZqR4eUMWSUpxzcMKaA47P1QTidHBeRwtW4gFuKpnbQPRqdZDuuqrnb73Lww2r7dvCNzkwC8fPZWX8NxBH1cH",
  "key26": "mWEPi7jyasvAnWBdhYBEiDYo2QPjVnWpqRntg4di5ipvQJiyGb38tECCo6S7HJL6Gx5hFUL7Jinpf4D4Ybbf2R3",
  "key27": "3qTFUa3HWeMEwRVMggbFUTasucryCdPX28w9XWEejrRkGhUHYD7EWddeiqPgdFADaHF5NUmNtY28LzFdjt2TqrhT",
  "key28": "HRRK1bWiXaXYwjgN61pgG8BqwVxWSPxemcfVZ5ZeADsB2uKE5JEK2guzypmSjYpsXX5HfGEKN5MMnWcigkadAZF",
  "key29": "Yruwf9ecJRrJGmKcpZkT4754TyYVAsyGarSEa3NGdzqZMbRrd5AHh9ums3kY9z8JC9afjFshtvBvEWLs99cMzs9",
  "key30": "3xMd5pYDWn3qt2qHmh79y59Y6ZDX84qQ2MsKCyjChJHuHSgdGp5BrVunj3VSnKrAiZdTbKLvT1Cc2a23f7cMTy5w",
  "key31": "2Yvs5Gcd8AvLbHhAEprXWyLGY6cb7d6odjXprXfbFrBNM14U1YmZZRNkwYdsksomaFQ7Jwp7CAjf3LyYpzSL2REY",
  "key32": "3TPP1TADkxXnpUyrYwdhHH2stknFdRTVrVfghne64kyCXZrhAAxz3h8QXiAfFpYm6z5VxabbxfbEekwpTBMCCCrx",
  "key33": "7qkq6GKeD6YzxNACEs4jXm5qLRnH3sc5phjmBvoXQZY6YFpEcFWBojNeAPqGknPFDHwzivAAra8WCBgsbGF4bYm",
  "key34": "2zt6xfxU8Je9jA9TMg2xTgbVBit6UAiUCPMWZnYCZhKPXWriv276a6ADNDsFbpzoPzsnek1pj8FzHkRHECUgxXCf",
  "key35": "4AT6ux6STWHQjYugNzL8vG5p5H2c1JKLWMyzZAt9eE3sAnpq1Xd9HfDbvk3FDexBNz3zhWmkDUtbmaFfgAqHrgqP"
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
