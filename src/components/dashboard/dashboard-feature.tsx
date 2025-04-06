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
    "3huyWvoSZCyQdJDj4infTLfNQC3ibuSYXtYwB6vX83F3d2QCEJeE8mHFmUBhYwXDGoMZogt7NisXWEvdNsCgCepx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lnkcajj6vR84Pfoa9CC824MgHNjyNyLuGa9ZzyB3hqRraeKJZyUSr3Pj7GpRDSWxtTT9dDPVCxFKGrzyUP1uMku",
  "key1": "4PZQ8D7qR5ix8tBN3YVK7H8QQQQbqDUVSq6o57zg23fHGZJYySDP5quEtaVNAJnmuy3dvEh1yDrGtFVtZHo7r5dW",
  "key2": "BAFMaBZMZv8WL4NR1DvFC1udP3FxwurYBL2jT7Pebd9hcPVpax5hFURqPhZXjepV6XDp638wUyZDuX8sNDLwjHU",
  "key3": "5JmmXGN5gNoYtcyzAU1zvdeJ9TeuQk7RenFYJxgkNBnq9j9xf8NyFvuuh3i6XXZT4PnUgadoafeRchTSx85idVbS",
  "key4": "5c2zm8DNA3aFmmBSj5yk8RHzF6MNLZz93jG9W51WteL386UgPBoiqtPcj4xzRNeqe5hogm4zvC8mE6KXKb9vMaXX",
  "key5": "5cUH5sZBtaVvkds9wVdw7piELABVjqALBkYE9MJcKU1MwqqNQvjsg5HZMk2R7r33An6tJRnJ7f1c4ZdELoPjgfoV",
  "key6": "5DrnD1UhirY64phTCg74SgjJixzMh9joq3oPT2juF7KApEhGqbJGJtwUT44Mj6CMHxDu4zE6z3YoasonG6teidcW",
  "key7": "uTZ6US7wX6rDf8Pz87RUN2g2x51uYnZS2CSRrY1GzrrZGjpLVtUpPKUf4ana59rmGnjED1yQCaZQwG2R7p4RYY8",
  "key8": "5u6aXZhJ28PbjL7Zoa3xgdjuFXJbFPrqK8gfvdXj7jGvXWhGbCFJHoro2cpKcBtHxrHMa7N1rSWPzGjQ4FKwrb9A",
  "key9": "xVFDbG96twptbLzvjyYSTqdPYy3qKqwnGw2zWdqh6y243pY3pZ9apHgUcE7iEeydNYAiTZHg1agUAVX35WNqrZm",
  "key10": "3sQPWyY7HQg8VqTER9L81U1tPxiMmQ9ffJrHW4it2q7CNax8jErHT2Jku5c4DNxKXTTaAV4YDfpAycSwHuRi9YGw",
  "key11": "ReRZAuqj1pNJSyvQFYGrzrrCompocTDz7Zxs3mpc2vMdx9jRjDmv2SHhJcrAVT3fNZAxK2FQ93mdUyVswyXSGsf",
  "key12": "4EBJpSdP3wxEMxKLiQt17EKFT5p29Va7e572KLAYSKhWYBZe311wyGSkBrZoAd3jxymVKbF6U1FTvK8NsmgPm5ox",
  "key13": "SUuTBjUER8Y1Cn4CGEoA9Mc8BCmJxBgDiFhEQkkgab8AadYB8JfMGmgwLMZnqw2f3bcfVwDHBrH9FR5pL9osEvP",
  "key14": "3rY8TYx6naSirJeA1Ewgvk9yeT1ktjZ7QHZZUZjRJ4JJpVUfyFQkScmZW157o37gSehezwW4XpdigDTRW5WzDB3k",
  "key15": "4xixxTEP17WRy8mBUr89LF9UmDUhiuWhu1WZ67GmG71VhS6TBigw282PBbtZUMKEJddsvQZ6qVNaHKBNNuQgTSgi",
  "key16": "2RtcjHeNRQgvcL4MMvPHuPBgurEqj8Ra3wtKe2RYY3m5eMRgypLDbXRFNXBFdRXWcy5QT4pjNC5UzPBr44ognVbu",
  "key17": "3wSMRHZ516ko8PA5AHp4a8ioRxTbjXYKj6GCTMq5UeNHNpjz1JxYicATmCBjRtQiGAxShY4WEKew6qmDLwzfmrjm",
  "key18": "5qpGaowhMP2vz5x2taybehUcwxgftFbwo4pMdfXXxUtH4hJC8tjWbVguTshYWEGM7LpGSBzsW7fd6APMBeoKW6N8",
  "key19": "4QZzHf8fHKNabDwVQSdrM9ZHkmAbNngQGrUQuXSgYacvgxesS9mFEtRzeU1doq3JpMno5CzNBLcK2pToAtEVDyuW",
  "key20": "3Xi7QMYTvamGX7h8J1U9qrgPkc1tFutunFCZgpgFWFBxirhjLZSdaQWoctdY2SG1YQ6UAozdQ7z6dFD5VdPE2n6Y",
  "key21": "nef3mJn9PhNEbE69EtXYq9VEVkwkLuhQvktEVexKVStTbc445Xtok2q8B81Y3LMhwKq9DpgYwUQ53HNemDBZVAe",
  "key22": "3gFbkNGBJfLdLsNb2Hs58eoCunSmLo1L7nUMfkybmAJSGLDMYQtpazYDeaNP6XsF25FMUke2iHVRUgf2YqDwKLsx",
  "key23": "2rG7YtuNh5JMfx2SrFp91fUrN6FYNkoNnUEjDPdv5FXhZSJefKXyH9bKTu8hawNqJbypPXY6BZbaSF6e4UAi9iNi",
  "key24": "2P37m1zofXMJBkJ37ihpEGToa8rzickW4XJT3c5MJtSqzju5nBNxTaVTM4iQ2VAt7S7zbh6AJjwMYqAG5v6nuGa8",
  "key25": "4Px5sNKyn4NDxBnLUDvMN3T8YhBgkPNqpEmygSTLbzW4aBQnWbVxz4oyBsXfBfbRyxEfQaWLoCzw8TecjFPfgu4S",
  "key26": "WEvZZhAoz73tgyg1Co6c7EpitpSU3wPwaY3W87WV9329xNZgH9mhLNPzJXn7UjYRD9KQSJrNQmtzJRTGfueLwNR",
  "key27": "2HRpWVw2UFyr8SGqY9oKBKZGmvkJN8QfSLTS9BNDb7DwS69kwShzHDoXGjeqgdDfcj6ieszS3VL3App9Tfs6juGN",
  "key28": "2GZAHdA4wcSf9CgUXCNiBdm8sCcPM3y4e7nx141FvreyAv3HyPntANYqMp6xeHheu9fxvYSdNpP7Yaa7tNKTgdvz",
  "key29": "58CE1Kz4ZEFRQjBkrBE7m3Xx3bLuFzio1JknVGgR1qx8urczi1vqXaSXyheviFjjqh6nGAUdUi1Jh9jWr1QCsqKu",
  "key30": "5Fxna7mAfENb1Wepo5z2PCtCXjeiVit3NGQN24vh9cf1vHy34WNL9jgNeXQNKfWqe5zVRZx6wX1qt8dKJu2TmsUg",
  "key31": "3uomM3p3uh6bNdPs7aaNpVUyGPhPrNp55rGmnubC6NSTHx2BgpmVX1waWqEkTqrNV2ao5tmAGSEu4zpK17AfdvTR"
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
