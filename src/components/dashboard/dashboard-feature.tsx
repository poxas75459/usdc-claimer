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
    "5ABN3gtT6VXPPQZXuskmp5GNk7ABhLxiQWg9fwu57tFm2BbQe684cwq548fhTt1jJdipTnLf4yPoQ7i4TaYHuAr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MAZknB94g3KMg4diEbBtVvfkYgfcWVmXH87u5rWrNrZwgPNkzc7n9jHTRT4zcvrKWFB8AQtuCyLusVVik5oEQKp",
  "key1": "3YahW7gWUnKwVEgmnNFEVrg5V7559Lcq5sg2dRyHEiBrn1cDqEAuoWkkaphN2q1wjD6mc55VhWGHcfrjjtYx8Ua3",
  "key2": "4Paq5hoHN7FoQFDDVh8GX26JX1Hx7rTWBooWS8vsXHgbkjo6WtxU8LE4NnHikbJVbJkqqTdvLnvxSGM9Yu5KbvPF",
  "key3": "U9FDAJ7VdByDno3ZZ3XUqgybs2jAv1PrdYD7YFSH2agubr66xphn29zoqo6yUVyiY4seuJCfHrphp4suCFArpgG",
  "key4": "2tdCzQQboWLFmkGiLtSPaj9cxnJMAefcK29D2PPYeR5BQRciMAo2cBkLDezoiJ21WveApbPzcfqRDm2FSw8ipBZh",
  "key5": "2rnoc8kkZJ9bCQMnEnwEwscd2fg5h7Vte2pb3Nw2Qn9jpfYRsxwuyhGgDGLGEMgHeajP7LMXjAQuDEwZTAMqTC64",
  "key6": "4HPMHrxYPUTgruLC7QvXyUJQDwyxyxFufRvgnSqTwNfLwyRvFH5AmBRWGvXj1eRJN2wAXtiUVooSobaL3mtA4QXZ",
  "key7": "4YTqrh3bqET9pftBu2Mv1Qguh32CTgSBuVsEuL3syNfKsAtLAvFEsctJhuf7iN7mBJfGzGv1r2miNL9aocnASKKq",
  "key8": "4sdjtUBoYRYZ5rH4vXLV7GEyxjzVjo2mooRw5dv6fFH1vBrti2xmPMm5catvivAEwYKSBEJ7KqdL4G6yQvsCUSiK",
  "key9": "4TLFqbE99oEbVc8deyk9d8osWCWhsVsftHsL1fH27rCbG5vkyJgjEetmHLpMwEaFp97jy2FjiW1GZKDGgabRz9k",
  "key10": "3dxEG8AZpyHWXz8ZPNpcq6oCPuv7GrRPonh3vvGJTaPGyGmMRdsT47fKL1h5jqc8ambVuQYyTVoGXQTX8PBF6UVi",
  "key11": "5ocYZwbYmnAL9afbHTktQXmKd57ypNhbvYSD3iBKnqfxq8P9gBfDmbhw2LA4dbZoV6V12iTPcZaNFpjmnRuenVS2",
  "key12": "5ggHETwJ841FuxEMSdpSM26RXNCJ4Wdf4vYjLZp9sKJtzjbxLJSmGbBsMU3HHevdA9gv1LcT6zpazYsX1QogAwvT",
  "key13": "5Pfkq25S9bffRJEJuJMsPKygWNHV8vBGbyCaUc5b3o2Zj9MiggzV9XV9kvy84YupTZvWYgnNmHKDJETh1wRTcmMX",
  "key14": "3SLP7nvLVkdiWjNFiEV2gqukBXU5YUHmLEXjDaduiDMZW5siQrCcgz7Z1h7PUJnvCtmqrXfAe7cjJ7hAbTRGj7Ef",
  "key15": "4xUNjkEMZqCMBZUCxJcDijaUnrRnJjvQs5p7QLeBan1ibdU8jNonhjypd2yTKcE3WXUvt8rrHPAnQWt9eHaAniDk",
  "key16": "54dhk8Jy5HKmdUsVZTWSP959x7wi23sVgTV2yydAjASHYtDVvg1ueMs2maHYma7WjvitwYRZzWyarhxosDS5yHf9",
  "key17": "U7kZ5zZEaEK2oSNwvMkkXdWJQNmTb2fo6LFrjevZVPNLFK2xwHY6DfWbqrb26sH37t7GrJZCgmgpn7xnVXZWLBw",
  "key18": "3iKogPYWu18XfAqQuEueQcrLDFfNZVoCJEv4ur44NCJvLNNiA4tYLkL2yjofrmdu4c4EYBLMnTkPPrQ7Y25s3mWz",
  "key19": "UZQffFXwZnrsqvwxwGgYq79JbgFME7Rfz8Tx5t1Vfj2qKfgDHW9bups5o365Ge6BBh8XWmjGdi2FV1u7ZRP5HmX",
  "key20": "R9GBLpy8jdNjfAF1pFviF917RQuhfEyqjLsoW3eV7mpbf5HaxaYqY3yPweR56GdCLHYcQrz5TQTmBy7i8tde2vr",
  "key21": "29LWrpSDbPdhm6PwN9DMe5PZcej3mkX1N86ZzRFfT9qQ1uC2WAb9dyRxJdFLeLCNAgC5hKJi8hnfCPd56XursSWJ",
  "key22": "Exhok8MLUZM4WL6NX2nBHJaMU4uYzes6LbXLdZidN9CToeJKXWmE6W4Y1o6vn5WoWENhq4wuFBThek1vKPJBN5Y",
  "key23": "3r8aD8WmR8qbqVBfyrBRgucFWg84nrC63idVsqmfxgf7oEBBM1c2zrv2EqoKkoXYeHb7h6bWV6xVwdZRHPyoRAK9",
  "key24": "5NipxMpv9dsy2LUbhNfkV5JWtEJ3G7NbYhMoyri5kcLT8uCgc4HKArqzLNcKRZH2qvX4HSyWd1FZj9XqEW24hJWc"
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
