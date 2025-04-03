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
    "3pXRz5ngaDsbcEnLFKGkGFzVdso6TFNJ23FBHB5N8SqL14pCFHPkut6DXrcGQineS2E2chmPFqikpAd8Eqf8k54a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RH6Qmbm9y8FmM1JYcfGQk57PfWNp3bXf6Enmh6PMtXPWZgJDXzrvjhQT4sYCJu69LxDQddbomzeo3qwpQMjqWs9",
  "key1": "2nbZFYXX1kDkJ2aUJRrcfsQKnxqDA7bFASAHBrEQ29UgtYrVPWp3X9fZ4hsUTZM8rDosAF3nVuC4wga3KRHU4g5W",
  "key2": "2DmZNabtxXvBjP5cwAJyqHCUNV1Z6bKD2mVybmfh7jYyj1xRVDmCGDQNYTtCMknHKoQK9aLYd29WcEZqkHXsWz2e",
  "key3": "aibVpifXdjimcJy1CYMWV1AKcmWpfcGPUBz58WG1Wp2hPcBADQ3wjXBhj9qxNMeLQAGDJ3P9UhHQAa9ZXtbnCkT",
  "key4": "64ZGo54TK6mDgiXftVaJZKobMGUNzwjMTKeeBt4ANEtowATovrorgjqWPQMYK4euUEZhhR3VzK1YwwhmqKWLsDiA",
  "key5": "1Y9GbK4DX6Hkf2NhLaNqja1HqaZjiQEZAp8XTNWKxCYX8DvR6BvtjUweaapa1HbsmvH4wDXXsQ5pr3dUbtmPoPu",
  "key6": "5PvYEYWYD5JJmhbfdMwGWNZ2m5d6A8pMeKW79yihotyzUPxeUfmre2gkuj7igQog2gSNDLGh29KRLjETXSpPtpn4",
  "key7": "5DPedW45H23nPYcyaiqjkFMMvzcUBjC2JnTuXiTfRPGf9Sfs5thJvwiAL3Guy89YEi2dP2MUfQKDuk7DLjHWQqdN",
  "key8": "3phBiFjkagAgbfzV4xuB1MtY3nWqvctpbwuADfvoN6vhQLdtRmhWGtDRrnWiPKeBnrfWRMsSAFfwAYAXzeaw2UZq",
  "key9": "5zXVFiNjDoyntre82R5KLKmWjBE5uB1k8S5ydzkJGwMViWE2VqNpZT16h3Ytkf2vH5nUWNPoqZfmpNRdBfE65m7S",
  "key10": "67KjNNrqVP1auVinu1tms2Usd5vGaYG87L3saSvUAUrhauVeg2VEW77QvM7LWpzo5Sxr1mmA38eevX4nz2qtdoWL",
  "key11": "KL5JyhF2VUjnesuy1dcBReDvKUbJCUNnwk3wsVvGgR6v9gVTmKA3ueGpzxPeXJSYn8PtSCE3mD6HWAUfaM4yfaY",
  "key12": "2B4R2WnS3CHJjuEwuzB3WXEMaujdNSG7STbZPWN1q4AqGJPywzTPrjAj3Umr5MrdEPGVUKgBXwCxBUQrRbg3frBR",
  "key13": "67q6yjFeiC9VfU8Azx9UeQffQ1ma1eW3PHVG5N3FtNrqiTNPAuroXB9VcXhPdpDwFdou9kuUxpNvdpZY3UKf72Nu",
  "key14": "wQWyinZtRKoVm7wBChkkGeABPGtr7f2JLkkbtbfBRSHq58772wKSEUMc7pVLCFc348R8WA6N5y8exWipL89s6yh",
  "key15": "5CzvoJKAfbuzTvn2FPtH8Q9mjg5zciLfivNFwkAsPFzsLZbsfGoNLMhiFxhkrepoEDwCYUJj4du4s2eeMnHnTSGG",
  "key16": "3Mtgr1NTU42feNaB8mDrJapX9ckBKhGbDuhHaBDrjzc4FvzQ7fy1zB2s1TChPxwvfAL7H4pFM9BPwBpkqR8TXQYf",
  "key17": "26uk9dd2iVdoNWAdUaFyxVF85WgMLWaaXWa6Ba5QjFc2EHRU42mk3buP5jn7YTvXyJqsMkuKHcMdv61TCRU1mZeC",
  "key18": "2FRQVw4JUJKUX3ZjmFBV9rpRq1x8PqhEviiiuYsTnrGPwvoKLCbVhTmqAxHkqRJRuSNXYiTFLDXhvvGHJGomXE4B",
  "key19": "3873fcjE26iW93bknoHvtGbXmuwQ8Rw9P3gxgMekZruFKQiazqyBv1tH14KD9wuTcCCxuoNJpdzsmkmStAQsL6Pp",
  "key20": "2pcUkBzzQBsPV34EBSmXJG6mxy2nnqzhghHQLBufUUi7XhXXZXH7b8u9iBeDharuwdBLPbxuifNHbSUNtS6dWZo4",
  "key21": "2CwgWwpx8MqMYP8wELgDjfT9EEuqZsq5q4iNqs2mVXtzjePAcrHgasV6RUcYNDhPZAM4yVs7Kh2Eutc2HVzsrkws",
  "key22": "wo5YUhocMyZxEBqss5DcaH5Xa4i47s2fiMZzkpwU3U9nschw1AhUwaVMTVGtcB4S8EUPQQCueDb1eoyJY2bo3sL",
  "key23": "k8HVh6u13JhB7AEbKvcnrfrftpFEMyTdAPiuKhY9dcgGABLvdk23hWPfbQWAZA9fiCm8BNx84BTXnepx4cpCyGH",
  "key24": "4AmPLGdTriaggXtWQFFHdx3FXAaQcEfqmJViz9sSxPYAS1kDtdrge7MNKFEAYiuVxKGBqJSk6AE85XMXVM8HPfog",
  "key25": "3QbcXjtXAXFhqQn9dGvow63wuogcvEVy2G73L151u6137RQYrcNV5G5rHY2oq161bUd3xv1QWeD6MoG8oGvpHaXf",
  "key26": "E4a8UPsa948jvM9uHBEQikzHS4sAXhjdWVjGvsHptUvtUqgG81AMTew7R1RQoHxRvwEL8UF1HShe191UAtLsvBM",
  "key27": "43mTEUoV6o4ybNXYR6J91USuudjqeCPEMdC4BRYw4ufyAK3Fks65F8CrM9CLp8ks9nN3t3tZs5QnUj3paG7G6cXE",
  "key28": "67Nd3Vk6f482SsJka1taKgvbampVMGEr5JdoEHtbF8Vr9ZL2SAULLQtUegr4nYfycAnz3xqiAHHK3KPCURe1pXsf",
  "key29": "4ZeWTRcWbREgEjcTqHXVAPyLhNJbuLzQak3prcyoRsg1Wkr5kMhkBAFnZXiY98fPzxcfqfmeuh2HbatJwse6hhnM",
  "key30": "aDQzbjA7MFo5wDzq2B29cK9RRG5YB3GPG5on1FhXbXX1ZaMcjrusAy3gdgdvUjN4X3MXmdiXRSYGCzzuRnf6r3P"
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
