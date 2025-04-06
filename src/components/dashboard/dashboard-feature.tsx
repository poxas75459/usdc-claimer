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
    "3F9PUFJYaPDB7ukFu6WQygLLDNuNwmZ11R2EEu1X2ffFgx35r5krFk4R19C9mjc4FC3BstnkBvQ1VK5kwBnJ96ao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sgFmjcA5naCkZL7R17kGrXRNfqNtJWJ2ssfzzUwbvxjgbc4CH8cwX5gn3CF3AHVcNvqNSFqmPbw5Fw4FEZB1Mcb",
  "key1": "1ksxLMvsWHJPXVN4Fw3ixRcJhqTNnL1FkNVgT5Wn5McNdSZo5mFzVyEK48Ja95iQN8npu1B3Ztjnhm1yxVFB8gj",
  "key2": "3wziMKGVE1ZxhxP53pSCpwVgjfmA6aYWLXLrM1ft4RsGxLSGfQyhSzd2s2c6hSxeuVaksTzXXA17L6ueVQLViieK",
  "key3": "4VAasReBkcP7X5SQLtHFwrh4DR575vBCd9vXYdZC9hnzjkR6Bqm3YX9rfq9Ri2qdBtCfpe2AWESfts5QRG9F4BLu",
  "key4": "2ErByWxBVxHxHLG4Fmz79HDYcSV1AZwGLUzT3hhZMKJzdt6C8JhBvoVKtcnqJmQEMPAoEYY2bFF1KxX2vf1nR1p9",
  "key5": "3V58tiEPuEpd7osSMQbCRX45azJ6XNku4Uu2D8vhPMo29AVYbNEjxVF2yz2Cyo3jbiGBvVg8i3q6tgC6ASeVqMbj",
  "key6": "4L6uFXfGznVZ3hWLp4MNpA7BzTWinnLFzjGtgXAR9VnwgBn7e7BrNZqivxVSBYMH1etDtji2GLkBPi2vcoKgqeUF",
  "key7": "Kq8GiVrbXh2AgbkgABJmAYDW4LaBvQQuwrXd7kcyW9tT1gB79uzhQU2kJpdK4yL25XQuCbLa6k57he8bpCFjur8",
  "key8": "AraHDAAhik2GwtzPGdJS573S6RHTDSGoCbcwjXGEAKx6yuSGzLWBH8xeUnm8a7UfdeE1eWQcsFb2dYXcs4U3Hb6",
  "key9": "53T1frJ3Uv4rKqj1HqSoejbdESkzjQNHwfEMnFfT487xayAeMGYt3fxEs2C8Wt8EzUSTdBybwaT8z4TQv9QwR69Q",
  "key10": "tP5pggkbgfqBByVqr9i1reDXF1rQU35oJotfZxnNgzhuLCetfdeDLiaN9ePRmnKtWpwtR8UEdCCEMfoa4WbpZjc",
  "key11": "52eUezUgrPJH5YLBpaG6XDFPu73cB9TEoDoU5g2tD3EMGXDqpjsmjtP3KNkDQ5LTiigCQUygxg5tWFKzmjcBWpP3",
  "key12": "3sGbe8SW4CD84qgnYhkzr2kgRyu6LsvkNNvSdFmKaWg5HZa4XF1rG219e4FeRXwd3jLG1yGWiWeidKzv4TvahBQz",
  "key13": "tRBjBrrnzVbfSDcSL3u8ynNNEt3WYsqr3Jrgu5sGmArHz1GfjgDxuSMRyUHCwUs3VZBQWWzucEtwdoYMbMgTFc2",
  "key14": "4ZqbBNJNW98JvQfCnLvW1ddQAhZawT4JCwa4yqHn1iQKTv6NwQxSCqYpL95hVWZFnUdqbwUnEzXNogmqxHjamCgF",
  "key15": "4HMA5UDYAuRftBA4Qvri9dvSjMyvvVsWiQ7r5mPQ7Vc7UogARfabF2r9SCNVeKDqWfKgEbnTQjHC7pyJTh8s5eqP",
  "key16": "634LAAYBXiWrGSiUKhmrJw7ycucCutzfWXuJtqs3CGhJRvVbFUS5xchc3KBxehXjGjN3HZiojTMM4JUKjMBkpCrW",
  "key17": "5reimhc9s5Ru6cpDd94KLPnMQvayoMntXsGheF8hBdWjTdWkXnAJcyysqnY29BesFoms6oXDpzyWetNpkXmmE9kp",
  "key18": "a9sKpkqsXsedt71XUkURAwunP7UT5TigJp8Dya7i778FFHa4Pz6A8NCQz4aznQJQyZwyt7xMdCqh2RTdjBXf8Tv",
  "key19": "4DJEcDi8CMc7HMTQA7uw7xwEhfHE8hGn3m6MMUy3CUWv2KN23U6tnji1U4fVEnce4RVi61kLDg5RVEGaFpgY9zxf",
  "key20": "4V1cVGvnGff8QMzDyBw2HVcGLNJxmyYUdBjH6i9TZW3g14wyY5dHMw42tSsNdAhFXEPY5JEPNb6W2BiWg5vxkhuF",
  "key21": "3QdAbaZpMU4Ki6C38NBzakJtkD1BJByLFXxxgTdGyE74sVqqmgX6ezedvKA7GJy73VokXvMms6PyqBP4eRg9DLR2",
  "key22": "5LH4xpX1Dhn1wyagUgepLTZpqRtmUBRpoVS3QYGTgcPURXbi7RYeiP3Dq2pSAtbvoQHhPAVV4DJnohxs4tYiJsoB",
  "key23": "4YVeU3y15TqpGCCNVwpDuDhj9waJYUVF5DFwqSoQcBdCiWSNLNUozmvNmUtr8Cuv7zoQ2njhjbw76bM7SYjhLUwn",
  "key24": "4rZk7J5B4jFfQdYpdJTjdiJqM8MLrnCorZRkproMm4hUfBEV4Xan6kogy8xJMun6fZZeQLLyBjLv6qHs8w3Caxp",
  "key25": "49bWyTACDpUqcLAAf5YSpTgeCXRsmgyXCv3akV1DgmKVvwbe4BiiUawf8qxgLevQK9mh8LgxnPDQ4RzRjv1aunEy",
  "key26": "2VDmvCzQKpUM1YQDCk74QppLDq78yHXXimdSdgPUQTpBPXnPhPPSxFzjgA5r19SgvcyJSAc8pgMPGGHsJ4tSdhjR",
  "key27": "3YJSWYMMSNSTEHEndGYzcTih5YPDoPDuqixJYxRWa8H9EhhgEZWQHUeBHS3XiyWJ58Ms3f2vK38jzeG3G78PW1xe"
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
