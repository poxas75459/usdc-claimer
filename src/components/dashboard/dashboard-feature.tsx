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
    "4bHGUEi5ZJLtcYxUPfoyt8ovuERXaYpi8Gqs9CoVK1EYA9tiAAJwhkMMuKEUrJbG1TFTmNDfNoS29pixaN9gKjJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "psgkLoCoTRh39WNnPQ8Wk9AZoAYLYB823gxJCY9mP1QCGLNxYHAEMTS4Z8iAdqN9JUQCMKpcKBnmHr5skfhXfM9",
  "key1": "4rYMP6pm7TJy9nzt77vQk2biR2VUKpb8GbCrMuJYkrqPgow68VJRKpWiC8pcofVzev8Unz33AeL2itFFaZwYrzYn",
  "key2": "3jyXaWySiYAq2KoaxrwF4dTjfQP4JXusUuUSbxfhcTAMTpBpNZef4ULepbmLAdSum1wik4kCkUYsQEp9JCcqnpNX",
  "key3": "22mGHe34tbkLnvJ4bGh9b2DnPK2bvNhvY5ycGJySJunwHvAxb6GGphwGhE2Vx4VN5fj2bFHbVWzvpNh2CLuvN2uE",
  "key4": "4VvgpP6UNskNg9aZCMpuC2N8TzTfUCBw54qZnChTBGPF5zuRaTMGToNBpPWKbk67gswvxFEaKpEPHxErntfcdEA9",
  "key5": "2SSW1qwtqwtCY8MUrqyNCcci1pjPgBBofACJVtPgCkzwrotXX2a3LFGdZQvMh172UaxEm1ouhMahvTv7mWPL1ud9",
  "key6": "42nRFFr6afwoHcz5vaLULXJsgJSpeykFmqwFms3T3Bb8Unyf3GVfekyx7H2SUpazW2tcGzx5Ab6bAzFswsnxBAux",
  "key7": "5TthFsQmHGynZHHFEov1CK2jz3GKPDAjZGHyYLb4dJ5iRYGY3gwnAoGszPGaqddEhNhmHp4qhkiSDJVsJ7DiUE6J",
  "key8": "2cBhfbrenvo71no6UVEBpFqpD2rkmJvifWPNwA8URtmXAp2tLJKD2Up7zvMyAG7BJPhEFzq9XbNgWyxfyJybBH37",
  "key9": "3bLqYhyYP4sfmpJ2TXpVUEYSWQmmzXfe6UjpTZBiBGuAexqnzmTRSBVigkQE5NR9xqeC3vkiNUQ1b13MEcSukhXs",
  "key10": "2hjurWeXy4DGe6P4AUFCvp3RKAk5giySTdrV5zqDKmbvdH1ajxqwk4rC5e1vd9Z1FTX9ejuiGex9e7xXUdosMT1G",
  "key11": "iezPcPej12ibBqDNciD2ft7c9JXUJngBg2WhrgGzPHcmgHqbNigGTZTBtgu23nghtXzVx15RmYnjm2fQZjPtWae",
  "key12": "5YGndhBHhPH1dpSpkatbWQBkE2aFGtdVnjcQDiFJ9tMyRRgWsbbhPiRaiX9kWSgkDhMEkW1s8jKNxbYuTgQSAWid",
  "key13": "4nLPCzzpYB9Mg1dbLqHU4KeXUVamwsdY1M63SHJtRQ62NZ29VuLjw7B9wfsfAAT8uaS1s7CbUuFidHZNJAL9uTUR",
  "key14": "32tioNHTWeUwrMKaaDeTNGxWnWcwrh5RXmSpssWfenb1mkTFrwsUmEm3NkDsidJEtUHdB8YHzovArXDcnFdmr9c2",
  "key15": "63fut66U8Rs8SjMjBgyMBU3osTxgTnLJbeWgEzugKfewTxf2vWkeHCrJtmjJjz3W2eEXYGw5qLQhbYD4sW9pGYFz",
  "key16": "25wS2c13Uqu9GoEpzn8aYUjXEzrvAMJWrhukdVFzfEhCpJNjauQpVzXCeF3EZABViLM27C629d6iGQfLXwv9HGGC",
  "key17": "4QfDgfZYKMQ35qLnRRHNLvu7qtYqedDJpE8QKyggvqUoFPiScAs2tJKhn7sqJfU8F5j6LGkuEnJD1wSRcfBomtR8",
  "key18": "2NnuvVdkNnxrdP4N992RKDbhJdJWh6zu74cPnZzz7fo4T7WLWQ3nfYBJMnTSUA8U9skk2SBqAAPUZya6HkBdPuLT",
  "key19": "58yKkpjWuKa7ToEgPcpZUx9awJBLqhMbFsUhe8iraBowoDaakZ8e5JhiXJJARWeUa75APVfCnTbJaqHBRBkmbd5a",
  "key20": "4XzmXZ3Tt4dbWVibAxN2WzDvVFwGgbo6v9jZ7hd98195uKDR5V2CwxrLbVgUg8k2HgMq8spFTBKqwUR3pMbxdanK",
  "key21": "2ZYFdnNj5hNWkWemeuCLzNzcSSi3GuDPNXZ9CZUx3gDt9Ke3xFdmyXgsnizcHB29FqRgsbDGURYRTdtTjjAKt7mN",
  "key22": "5qoWTrarJ8d5DRCzMXr3fNZZcmcVZCLiqKqshh6B7WrKDJbkrbHeKYyYPx134rKx8FmSQnMZdX2Fw9tMkfYPZjDG",
  "key23": "FZxRggDoaiEEDdgz8p3CpQCE6yUJgJmeix3HzqqLjzTcdxSkfBLL67CqwtL1JTf28ywQVe74XQeKjG9tS1Fei3b",
  "key24": "5Sp5ceh4BB7j8gKQ7hBsWSP1wC5xnda6wZ2pNwUrbTtYrBYQX4N61emv5B8Lw2skFajHWtJ9w369FoditFRaewHW",
  "key25": "3zkygNAEv4uEbbPqJMKg7A2Fz7r8Dtufdk5yEVDewpq8TMDW6tQG85BfwHQTuaLYyvLUx64e4WoTYwTAhTSCquq2",
  "key26": "3axsGX4WFiWibfTH2zt9N39QDgsNBGSZuh5JCmxT3Sdoj1bEE4rZVyFXNuKoThS6zT8mNRMSRSBebvmTuwbza4fT",
  "key27": "4bGwWNtrG8S5ch5PLGxWMyAYqyPWkhvt2Ho1GVzMfDaczYp5PDnBvAWizW1tBKgaTu6WQAwdbyioc2JBcrdtk7dW",
  "key28": "1ebx2Mq14QgGu3zQd44raAQZFCmhN8SvZsvpMF7dVhEF3VSpagzE5KkEK1FW65nc8sMKoDJNxMJZHf58hVbuMiC"
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
