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
    "3xXXiXf5Qkp8abvAXGN7irMA33tnafryDXTqcvgLpBaR9yLjzvAgPN7knGcqov8a6grzZDeyHbEwW8jh52uJ4D64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xneNiGoK6W9ByHfkfNXiKmgfcUqn3chgVNDnj7KEB94PcG5Gch4p6V2dcAndw7r4qtjQ7SaHCdqJhbMf4BZw5KS",
  "key1": "4jQgbhchBspy3gLPY5SJQrSytCk6Hf6b1YTAuSrmULFus5vLLcCFcqEJ1E7z6NaTGRFGYNkvjz85kxUr3WD6nFWs",
  "key2": "3EtZ9GTEYUZVkgM9b5yU2QmF1pHph4SNkv3hLjUMK5ZxzJX2ZgUwfsLpaybdnvcK9Hy1XfGkyoc9YsNYMcg2NUxg",
  "key3": "oAGUHpdkUEiyMtMYfhwPSmMRJjZvhx6ZKyQsqCF3ALgiQbXYFpEoDgQqt77yfj9jbc5axT4Am8LSFwDoWGSSTmJ",
  "key4": "4drhu1G5MtSAYn4Mz29KDtbBfsQP4DL3GpE31FXxm9H8XZri3mZ2qEHngjmqhLaPaYncfRJGWZszBtd54bqQFaDz",
  "key5": "48TsfX7tk6sT52JW2SDC21DkACjjAFEByrwgBhUufo6LsrPVUKsuFgbHq3om4kZNUcWeoDunqZ3g2DVKz6BJ15hc",
  "key6": "5BjsccUNhVpdVAJQjozFSZPowvPAmV9Y4tggW85Y9toLSqQvbtFUwZogvrNRXXq7CmsE4MYz32xAYvyG4LhRbFTo",
  "key7": "gAwFw7rTF992amqRPHDkiMoj1womaYc4Xt9nEKe62CmDAikWbTLJLGHb51NQTDuNBxf3tzZTtJz5XY1RwkTmeos",
  "key8": "4bX6JfoJMhoXdR28WoFboghXnFMfnJ542yGxMM1wCc4WkXTtWp4ifgH6g6tzLffWyprL1CK9uDRQbuZ8cTqJxhQG",
  "key9": "3yUnvhDsQeTDeC7fs97823CcCbRdQUtbTrxFP2T9xNZrCcW8dMZQLyWWDWa7VnpGD8Nh9yVUTcgUTDKU8A3R8g9d",
  "key10": "2C46ri8qhhsGSdDGRHvH3atY29NbRqaoBNbkErBwJcyU6DeDHmafjZjs1ZKrb3wyzHQskHtTo3xvf55t2DKCqqVC",
  "key11": "38xLfJXGMjU5cLmViHe91EdvSTxoNGzCEUdVd8FuhJYqEGnsUSUYNLpa9KQaNDYhC1uRHHiQ9VhJDiBkcEpQRk6H",
  "key12": "2vdRy7yBTW9j6HLjDE9WnG8zwMjwR5iCfaSEFiBTZhdW9ASfcDt1Z9KQWSMMvBbKA91o9F9SefMKVZMSPx3gVcbt",
  "key13": "5L7qnb8H1ToERX2cFyVNW7wQGSGtYCusukDhfb164YFctRbhZk6yc64qhz8Seh2mAHcdM667yG6pWu4SVsLFSctW",
  "key14": "3VxET3UyqW6yVasoyeuBeJByJAZUiWc1jFmw8MyT7VmA7YwENqEcafLQpJQxe6J86VZZU7kUufANSqCKywewCRfA",
  "key15": "2zDs2h88XyH6SUEGALdNXAgsrSSwe4ugpCgzfC3CrL6yqKBZVH1oEmFQbzvh59HmGBS2m9qn2WLF71qk4xhXKaRj",
  "key16": "jpzeSm3BsMtRRqG8hFHcaocjBss1wWqCnY7rksN66TydXu3dGVrGDKKzachppxSHAMfX9D2wbCnDs9QJYKhuAbZ",
  "key17": "2Y4KL5Zg2oBywz6YSmYrCXA7RsY7JPTawCgEzhAB2eSCduyUuAq25W27LNBRm3WjfAkZbbVZZHsziKSygM7p5rtP",
  "key18": "uKynkA6xzZUbG8D8bnQRKKvuT5SSi8TcXWFhpJJMm8AhQGsHYHvEPb4hUX1it88PbGTxECeQsN6efJNJ7kFcNDf",
  "key19": "AWszMmCCDHvxyi9bs4ko4GczhvSrgDpk7cs7vzb3vt3sfzZ1TwfFhvKk72yieGwYCB1F2arWvQqpFy4F9tVNRyy",
  "key20": "21Z4T46rQwFgYobUmyaM87ZFME7br91beP9XsRAo4Rpm3yG9uwmGvbJQA1f8eoNVXnFbUQXCozoW4FgkDr21Z1qj",
  "key21": "sxMsDvTatjjUMkdwUoGztKUXrTJezWnRx7ZGrpm64psyMxeonqp9ag8mEN7PbuxmBDhBgCqcq58R9v8fKSfmS8P",
  "key22": "5CXQDRu4UadoSYSkSrFXe7qFYNGoe8tPdTn9aZoaassedqm8m2AKyR5cQ7q33HzUDPjG7i5LZmApmH7MrryZj7fK",
  "key23": "3XDnCLijV9EwSzm5dsQVTXNMARTwWdiPe1U5tbyXYFc7ZNc1wGdVeYCfiQ7uxa52VcqWCgi956BVjSkGhw1kMAeB",
  "key24": "TBDHiYZgTiZqHewqAg4WQQqMurxqtFGusG81vX2r91SbUGRKrkoaUqhrNoTqFum8ybihKfdhUeVdD7ZASowVaYQ",
  "key25": "4xX2SjD6SCV9aua94h5ac2ydbDJaVZjQpg1WSR2efB4h3Da4wA5zFCwhTxynR5dSV3Wouay1Yz8SS4MDs59LjdVp",
  "key26": "2i5jrhC5vG1QFHzteBqqEY6mN3ZLYfDQAnGngFTfyora1yQUYeKFjtGiQ7xWKCKe22T9VR1aAn9oAZoe8QrkNb4r",
  "key27": "4YcV3ufVNPHg2ncgd2urfn4DtdKz2qyyhxVSBrxbrk3BmLeVbCTya9FJhQNhJ5sMsyo1d9q8UfeAY35qW8NAbHUf"
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
