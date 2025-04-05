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
    "N9kTKmGKC8njJGCGefNqusFrDgcZUvTLkYwLH1cvm5d8EcW8agNtfFRhamxa8ukZzEPynzPysr5EAJUH6NUHTdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CXD5HbnMqVWvvCcyCd2u1jG1bZ2aGZpq2g2vHtW8XuKDFQAzH6f7gZRyKFDD1ro6t8sm4xitRGksz3SswdP1LaG",
  "key1": "2coeuW1WkqvMdnwKcJBA1sjFTsr1coyKkY4WNQKd2kwA5Rc2DKNNAr43xEmw9PPpcz7zvu2uvHBPCfYUXcfj1MD1",
  "key2": "2ZhFatJXjtxBFV1TDzM8womcTrmXGKx31vKWRtBsHoqCLH2jfYEc9k2jKeAxMNxNf6v4NWfcL1bKnunvfBofaH32",
  "key3": "hQTKbQ7v3EefsfStcuWQd3PD2Pk17yXCNTA6aZxieaSzRFovGGsof395YKsBiZ5DF7DGBLynCoPfhN2rRxE3M4u",
  "key4": "52HRVsLqDMzsGFDsW7sMCtGE15HjXkh3KTCnALTwEhifvaFfb1LUPwxwmWrCuRD4paB3n5CtuubFXC9yPcNkbKn",
  "key5": "228PoQ1Gexg8rL5TuDpmQZ7AvkEcbig7r1SK3K46sZQxUcctqKdULzfoySW6zJgwBpaii4H6N4iFc63NHWBdPJEC",
  "key6": "4aEsTZQmA9hZVpctau4GWqrn47b4UezhWVq3Qdk34uYjm7qpei5bJJXU3iDx1KyRoioihLQZMzaBXEFAkbbf3Tkp",
  "key7": "NXYyqQoymztDAJLMo7YVHUQjK8jrfkTdzohoxXjdWj4dz1sf5DBU37saw4Pmv5jBudSWVT5vFphko4PRjGzTkXb",
  "key8": "LoW3N4crjkSgXwxkisAv4NceieY4xrYCgKa8kJitokg69KLJVPcD3zZh9PsSK33xabyB7sk3DfEWVGEYJ49s9t5",
  "key9": "5DxwUpn7FQ7shaQkx4aGmGVrnGx4fMwtngFu7TvqBsZoCbAfuBoNoprWowjthd1syWFz2N7Fx3nu386tzNXC8kBv",
  "key10": "5SMwByHy8fXHf2nmQgNmLARfcUJ7rfjemLQSD5QS9n8RJqehUeTdL6xBoAB8kSPZmrf6abDaWRMatoiS7YCjY1MP",
  "key11": "ChAZ5Kt7Lxot8hrvusMM1FErAPq56frtNC4jKKwxJYBnppb6bx52aea2gWckiRwJYcvqtfxVD4VF8eNVWEfZ2LC",
  "key12": "4LgpghaEeG2xyNpmDMn8cfRNKuE7Twr7y1sYUPcuWRhCrVpdwFRBFeu5sr33e1QdJuhkYK8bNwQjQGHsZUCKEyhj",
  "key13": "41oCUE7fcTT6avvENXiknNG8bPEtikG3CfeqGsM8XKfRnCkF6qxRdcS31Tg4bLaHyB5CHBH4girXYAgYwJLxdHFe",
  "key14": "2FwnLzPLryDLX4Hxaav74tAk7F53xNd9qU18xKofuqqgncQX1wmRf2r5cp8MVDK6BjkFkAnA4F2tspt9cCZQccfh",
  "key15": "oYTd9wr9XHVnXQF7wyjXsjLBsB4gD9chTYDoZL4fFRyhF6gBCispqcKMDZr6J3VbBGunAdxBPjqRVCV97tgd8dB",
  "key16": "4HtFD7UV95YiP5vR4HKKN1F3Lt4GoErPLe3ffXLuXe1q7ofVWoqk3hGM8KKg7NFwxQziZn6mckKFZvNHRpgBon1o",
  "key17": "2jpLRWZUZKxjKG5wY29w9U56LYXhL8koNYZDqkGNr2U3JZLPGHu66KZiGzcGm9tsAMfZBkVj483KbKWvJFo3HjqA",
  "key18": "L15mwqjPknYWDz6fmnFZeD9eWCP7CAk8iT1srKfCJtV3ETJpPtUTpkdFgwuy4PmeZdquYXGovQSVHReuvXDgfyM",
  "key19": "3rKkmv72zJiVqHeTos9XBGdX8tq3K114K8PuWXPAu36v2oNB4zbW3pKg8krTucgJujTGDshu7XHPRTvfsVnG6usU",
  "key20": "4SYSAJLiYcqLA57uSgkKJNxjZ4Y2CB88Uv3G57DZjwKZbHCwbAvtoRxRqyxodnNVKQ5tXdsnbJSgt8xcSnc7A5e5",
  "key21": "4WWJFr8F1J3WgsPoskq174D3xwQP16wjY5uJfTpMdfcYbZH67qVdWofEt8ZV3YsgN9pVCEjN6FM1ys6KsVGmV4Gu",
  "key22": "5zk2tk2KwxNgBPhLGKNEmZevrDxiLxLEnCXSDooEMU1BShzHjriYER7z8mbZtzp1ihYXowgx4snLtzGF1TpmJRTJ",
  "key23": "G5tU4kQX3h94gw5nZzY6UBzM3aRqKV7MSicKESsgTt1WYNgfV74yvWJyomEdW5peMHqfTYd2sizZ5xpsNE1U5RL",
  "key24": "6RPFhQGoCMWgjmuNssVkW6bY2pztoivXYPZoJLpEdXqNmzsxkkHQW9PRm7CujEd2Hn8qPGo169JECHg36jUHxmF",
  "key25": "3MFSpTCDjhCAYPEUG4HT7fW9RTEL3w9TbKrsnL48K1d5shhXBKTfy1Qgp5rw6hUeS982RuqYjMMK5WHkXCEwGn6w",
  "key26": "2o6HnYD9nv7TVNN3zDLZpFYEBTyUrXrxhiEd3mUuTouX9voYBYQ6NtFe3g7vvs278DAhgLKg8hiEvDzHRFpLtkAc",
  "key27": "27mu9rgmtK3yQaERKVhd9TV2pucCM4s2K6A8vuiBS9PBC7DzTpe68YoUEaCdTboo7eyouBD3NmD7WgXGq6kLhSEv",
  "key28": "4YkqdhGQ7xbLsuEckwQrDFyRJHDPd8ZDqVkogpu55AqqL6QER2uJbdeLBUGx3XSoGawQTFAgAnGAdFJDrvrjwii9",
  "key29": "uWPBZLeWXkEiHpAqs1v6CGFgTWSmzEqQHkks1Sz6EFd9REmWutYmFrS8Z3JpMETfFRRcwwanDBqpCHwR1xXHAV7",
  "key30": "5BT2FRPrs2K5QWo6PVM3Weh9yg5TUnkZEVaYvj246tDygokHHhE4JJt4qGYmyjERvAqMrMwVGGi1Sterw3YtX7tW",
  "key31": "39YbHPYRNNkgaaN3DNokLd61R5gSJEisHZt8nMb2YhMtpDkXvGjqLLpnqKoLdowZFNs6mS8iAVnFhSnSU93fqHvj",
  "key32": "3ZAEDSmg25HTvsyMwjDxDZkJpQZajwnpVhahTMdpJJu5Lnqj4C24e9C31WAK6FsXtUgvo6oiC1FmB6aYncyR9KJ1",
  "key33": "4jhJZhTtcciZpXEKEQLe924fDhxrq47QK1ZgRngDsCU2RTjiSRNtX52RcMsSv4A2sehWxmC7a6Df4UWAkP3U6zXT",
  "key34": "5xkSyKcmRoHtuogZg7yY36waPkYmQVhji9DShAaeBVHx5SsxxchnNSNYPfMBw7nVUzZhNSVQRdfwwz46oGXcooRS",
  "key35": "cPurKKoWNFSHRQMei4JyHbjssdqgkLuZk2ZBJSWSkTSjFMnrDJemwVgdv7xbHbJ2foyH6HjXW35LXa1GtHpSxh5"
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
