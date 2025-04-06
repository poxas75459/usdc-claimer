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
    "5RLd2AKtQBaSVe7Q89N25LmG3A18wfwvMRK6VXK8XtJKXj67kaqgnAgJoVr1CBYiu34TrdRXvYzzSYVyQESFHKvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zz67uQ9THPt3mHEq5KV6G2QbLmFexrdTCdQXU4Hm5JNQiCey8AEHvRBvd2qsYAVUrbcKZLtM3qJhZrJQ9Di3JBD",
  "key1": "2oEvcspU9m8cCjaEeQThtW5mvdg6vsyTvEE8WkYjYwvEZGAj39zp6rYNr6FNcQpQ5pSECDA9JE34mov5gYx8xhhZ",
  "key2": "ZAAbb9Jv2wjTsXVeQtWVUMhFE4De3xqWi278GvHDfKFTcyosoqEBzUJfxs7d9De8UK39MJ6V8iSNw2vkzRVHgnL",
  "key3": "4u6nsps3P32VyfiBKvXY1oLCkq3nbj8GNWMwUhqPHRmP4tQHLEtjfgKwaswUstgBJeK7qvXib8SjBJY1FTLfRZkQ",
  "key4": "5qyxkzSJqHZRG7b4F6jdQERNiwjqGPvGMN7Sn62Cs1xEoimZ2Hmj345ZSsCWQi9xUF7GsD571Ryx99m6Nm3RbZSM",
  "key5": "5NcADsPje3Q9AynkMA1kWsZGwPuPMR9FeoQPt8PvW4GrkSmwmVocQf4KFJ8QU99iBujpzDLEWchWmKP8CnMxFrxy",
  "key6": "5N2tsugFAFafUhaLJkEdwSyxxKk7WB6i9mLH8DTA5haFt6Wdv6JJk1QbbygUnaQAtDmgfVqegagXE2aLtdEmQJ3h",
  "key7": "5uuWWuBYD3nrJU4pRQivFT47heUpuREQnP7NCrDyGCLXftuhNQ76Lp25jFLYQgSYhNWjCHPAUM2FcWa6TsSzT7MA",
  "key8": "5p9boaTTDpeajPmhv17YfXYP9Wo8RrBHBcgVtSZJyqj5rcjwAiDPjRxEPWe2DPTzPn4YJtDJazKoEifeokQCHLS2",
  "key9": "2wUHgonDXoREAcfTBX9fF4wJsvVYKyXDLPxm9W5fYUAiT77X83sS3HhkuNWNdzqQiiJWaetmdHfQKyYGgxCWMD4z",
  "key10": "2RjJ4GrmGhyCw4H5P4jPGJQX6pFzGnStzXxEcFapYai1TrMg5SkSj971N1NJTyckCehyRNyT7p7ANdFxGJLn4bEv",
  "key11": "3EvNDVHBakkMrmNEfRBSzHGP67jxiaaqasdUdRaqRLwEcW1eMSTsM5hsH62yuTvSyVYiTd2ZuMoZCRzJSSU8hgYX",
  "key12": "5wmUH4vcjwTX9Kv564S5BG2ae6Bspn9PogvSF3Lv79A1RJ4rrsf259ELQqhTbrFTRH9hyhc635vcpiepcMT4NQKu",
  "key13": "2JdNHY98mh9xCWYj7uVNJSCkmZrfyUrbZd2GPQNCrf3R9QbbUvmYdwKqqDjPMPPXcDytyapoLJu3ak9nCnDEKXR3",
  "key14": "HSSrpY1qdPeMywTeGkG99wFXMnRgUtjmujqKimdm1U6MiSJNZaVmkpc41BXxEteUBxEfstoZUXabuUGbCLyooZh",
  "key15": "3Hvd5kRkfCpStwud2jpgYFgQkhMW4RecLVBgTVpUyMMKZ9Ks6Tfa37w7fvJ6yNzixKN2AhhTdQFEA4zAPxBEgkur",
  "key16": "61m4LWUVCZ4d1uw4wwR45EmMPYae4ufXWpLLt6JZFQA9vFnyfAoBZgBTTLyr2crMQrD7XcSJmsnJftqt3GPcMsBj",
  "key17": "4EQgReGb1aHg3Zf5CHsEo9J2PZfup5NcG1cxPyxZH2CJpUySgrB7aJ6FubnWyE34oob74ZhCsJHwoHG6dfHH4XzU",
  "key18": "3ZjaaKLdr1uHTUeAKCQhXuxig5HfHHncDrW5mCQzW9mAnDF5EHZtbrx1iZYT1yFyGGet8kQdJBS5KzfZLcd9KzuG",
  "key19": "2AK3zngHwA8Gxki1UrnTXocGCkcMEN1wrEEfZj3rYjM7fhKTz8q4FHmmP8gtfR3DVykegV3gAU7z75Gh1Yfjs7Et",
  "key20": "3r3tDZjTZjaAsRz97JDJ24aDT3ZP6mDFTkRzE3RmSoPyfkBN9z5SVjFEY6jnxXXWT5kqXv3wQEU4muGkLtGwLJtJ",
  "key21": "2Un98syvKTgCpa3sxxvcAETZscVA8cNtoFzL7gUmVDghyECS2kqrnPL3TTgX3sjFyBTxzS7n2e76DmS9eL8pqHZF",
  "key22": "PSdNTQUKcM37AokPGer3NcwU9fQ16z3yGEY6QHmzzEmSvGuXrP6HWuyUJGhBaUdEx8dcWvs6W2dfwDQqGXyUCvX",
  "key23": "3dajsvfxpnwYR2khC4LUcve846tPtCq5f9gSWig19GTHg7RMceg6ZSToNeceSg9N5gjtsGGho2yTBx9EyLm17MZG",
  "key24": "3L2bxSvqnK8hGn8JBzWw1tuR8U36yBLEVHfe4yG56N5Cmo3BAVRqmiZ8NgBwEpiZiJ8xEMLdKuPymuLJi1ruKSvw",
  "key25": "seWtUfGDd2kSP4idPA2jVDRsZHz8gD2qUm5hRcAGE71dmLxRWugfod5vxWRQEo32RcyyQpPKzxBLMHFpuNg7Ke5",
  "key26": "33XKYRLYRT17FCUc4gE2tK86zABL8u5nFJ2V8qwRqauxsB5Vr6g78282VrzMpWf7BXPmWcL8YpsyKnaDNPGdLrtP",
  "key27": "daa5vyQ7TELPCW2pqCyuVwfPH75H8mPJ1MDWBodapCUS9QGRrJK8PPkHsLNJ5ooEbxWSdvNTEMbRcDPRAf9rhn4",
  "key28": "5VU2BHrMLwYj4vZ5YAZH1eJK37seMBAcefYJGVdQxCyNG9Dzzym865Qw1etSVrCmrU3gr3EmsviixHzmSskgWp3W",
  "key29": "CxZP2kMNUa3LFAXNPPTmB45sbtAUbdhuc2vQ8eqpfimWFuw29P9o7JLJLPNR4tViwe2FDduxnXz6BDZ1SDofw6h",
  "key30": "3cbNxbbCtb5V4FfNp6z92aEgerpWnPCLRrXMpAr2uwZxMam9ebU1BvYz9fKPttzgiKtV3m5kEXMsBsa3UVU1NYHZ",
  "key31": "2wQiCxggCnjjGL4ySTWyNpiVq5Zmo6tohkmQvbGgeYgc5SJFDtAEeD2BmhFvcPAcWpYSg9Y91KMo1HCfmiR1gL6N",
  "key32": "5QzB6B36qzRsvw1yRS8NhpW3H1UZ85LW5R1DRQ2LDiYE9a4N6mpQRUicFbw5aad27dwnakf6thPvdNjk1zMnUGuz",
  "key33": "4XxQ2hrC1cgQqdnb88Nhsoz5huwXF5ufgYphvBmPG5o44oicfNgLA98EHpLvPeoc9UeyhLsrfjEGvH1qo8vjs1tD",
  "key34": "4xPWTS448sQa5s4EevWAaD7NSJEn36yCmmprYH5TMKYZpi9dKF8Y2KgYzYAeLnYTWBWD85ddrNoN43BNbdTv6KBW",
  "key35": "4pe2ChiDCGrcMs5RaQHvdwy5hfbRNRkHNQjsQDBiwKht5Vydw7wLK7zjNRnoeKCTY6yeCcAbe1NFGn3KcEczWgcj",
  "key36": "568uzJwhHvhURTDxJRUmrH1AQL2kFZoR1UwyZw6FPy3eqvggvULakJPUVz1piQcmobkFSFXWRsgG65yhTnpFsxqe",
  "key37": "kZNK7nDp2cRM5smveskWK93uL2i6auUSveHhWPyHXXZZe288A864LmQ1rbwoALEPsBaREvgfei23Prh2bnjSzNY",
  "key38": "499h76cT7xXdQcAAXPozsNTt2t6VbnUGaoNJ9F7mGVoneCCMig1FadFicrQaBWXmGqQ5RYmmHqDd3qArvBae3X1J",
  "key39": "4m82ceZy7S3m4cjBvMijb6xyWjV5knkfmjDrgzWJDodCtHYBpUzUWoCYqzcUnvEYvNsHouLdC6vcyorVaGEi1wKA",
  "key40": "2ZuCFrpPdJvFr8FzTJauajfuCDbxRZQ8S6N1RBuisnBPa8cptf3XzKAFmJVhhnBfRXqVKEyeqodxWhqkQC8cNJZY",
  "key41": "2jFcN3sbiisxUrzsMcAs8Xz2cLSknuqJARovEXdAZX9hBsWpL2BxZ5yGK8uVjHLbKfC3Zknz3Gp1zYUjvRq9WYgL",
  "key42": "25eHyZUtr5xU5czqD8ZFUnZFMr5c9NXNU98XgBytU59WUY7Cb7A8xV4AFd8SmTxf11CrRvx8C4Frha7qVb7LjhVP",
  "key43": "27MNwSwx91imybC2TpahDfTyb9Xa8k1HZXHWBvaZPU7JzsJwzs1KPetZb3U2vGD1CnBm23av5XEwQKScHtbujFUP"
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
