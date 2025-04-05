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
    "57b7hjdG1TnDyf5siPWwWJqYt9qVwtntzLTyRxxNnRJUjhzVTs5PmQUKDmYbZazn6Cd269eHseCx6EDNrxuCffoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2miHdhi2JQYbR8NxCTmX1xJY2hyrJsu2sLD8ubFpE7wT5JJ5p42uu74X7xHG6yBygbFjzR1N3Qh9degATXQ5JKMo",
  "key1": "4T7YBUxTTm3QjRGS3WuYSjWKebnf1j4dvQosiN2f5M5EAnxinEQEywXvoT3EoCJvwGFvzoKoUXgRHscbb3w9E8ey",
  "key2": "m9iBoKN7KsPERiGrzXUzHVLsaQJoxAemdLYPvnppXEcLVztJn8n1NaHxTKX8beyCmBT3GNcRW1e6izWa8RpYQH2",
  "key3": "2UyCjpv4B1xWX9n5Bouq1kZck4hevvesxAPgHCrASEnqtcF3eT7L2uFhrgzitdCtCupgZCtyW1vHJrdBdvLjYJWt",
  "key4": "5ExZCoXpr3cVYq9oCavBsjgsu4mwyUDrDFnFkFUJpoEVcN9XaL1AZpuCc5mPrP2mTsC22yjD8fxUo2vqKSZHXtFw",
  "key5": "uEM8e2Squ5HKqj8YgwVKKfxo7GY5GcmpmgLK4zimg7xyXkXvFdMugR9p5ZNksWfmkHRXNRy7razXdXKxrA9hJ1C",
  "key6": "5caatu4iFt2hpVBWr7kLj16uqK1ZLCqVMFPJr32rsEZBguNYxzqnGH9Vupt6bRvRxJHXVZ8RxeuUTteZbH4WuNdq",
  "key7": "5zQqEZMfsXFicNvnJeJUTjPsJDFpU7karEjrhkUGkYoLVkPn3WNqT316WzZbyVUYfAJkb96KvgEGCfQ7MMjJ1ryF",
  "key8": "5p9YcFG3j5pjeEWYugxxt33fQYjbqubEZXTwNRNcD8gyw6r9aUTprC79LrpKzKM5DvgLntroBMhaYHQsU3FwxQV5",
  "key9": "4yQoPgZJpnwfDnXNcNq8YSTD6S4ji69jmy9fJtZHWyd4gjWkx6dJ5jAiUzXorAabr3jVgMgLg5moSHZak4DVhdCx",
  "key10": "678LXJ4AfFkXK7hYbQnSwmxYaXKHmBK37J8uieterZm5QeYmzp5a9bmBhACQ4gwibYECKZXRt7NKGYRWUfztj1va",
  "key11": "faRBHL1L3Y5WDuz7P3frcXwhVreyYhZHe3xvYrEdWL7znAYSSpSacq9cEw3XJdgKv7wpTzh5DgH4DGmWHdY1WeD",
  "key12": "5RTFqqbkHweqs7Gsnpsk1wBEQHTh5gWSsuau5zyyovLAqFdW924TiHvMVbUc6FG96pFGG5Z1vAYfgwGMDQjttYU",
  "key13": "4bAeShrjRRqKJ2XjsqTjCwZZktcS4SLvNExCTxGc5kgLVb5CpwZaLC2c9xN78bCEaZ24JzA8Cx2SpA1z6WYwLcJv",
  "key14": "3CupLmMQ9xbhaUjFZJPSng2t83LgCsZWL2znwfxtYjWqsGL52pCBPcpuEAymuwkSKS29qQnB6UBfa8V6Tr4Gr63H",
  "key15": "qjMk6BM8f9y6ft1xNPPwJZJu27ekSwioaHtvA1JKm16azjtGyJwQN2FM822NJcQ998Fb1DxnyjEJyGTH3bUGZtj",
  "key16": "4yX9ZRGwqdmsURZRkzXEBL1YxcqHkcrtwvh6wVtUwQR5sF7ebffuE8J3h7KsXZyYAYXzwi7Uyu9KvTGCc1ttVFTt",
  "key17": "J6KTX1WCzbjimW36MMpYq2frvGYBwLTnVCE5im1bodRnnU7GJjjUxfhuLMsz1F5RpCgvpm87MRjQwCtpbjzfeKU",
  "key18": "32hnvnUHJQ493uE7Av1RNyAK9bhLXfHDRQdhCq4gQFaFHPi6VLWtfX2347DrcffWTR8uL7PwTWyPMAQo2SL5wmNL",
  "key19": "2nGHztewBakpWkBP8Cdm3GTJxgECF7eryvwtgSdnpHaE3c3DwRCEcUVuTiBJXe7txC3f3oEmd8BWMrbTgVzCUZir",
  "key20": "1LkcUWQuw6gm9u4izomzFzxypK8hEejZV9DKLzaDPGzvGKKRZTuu75VoxmRgE1pFiiD6VC4k9MeDs3d513xiWeG",
  "key21": "5UqDq7ed9UEEHJP1eUebE7yaY7K1X1x3f8DjSVRPas1FMCurdGxBfCD5wiU3bhMVsxWRbd9qjuYtVCbzq2NWgkw7",
  "key22": "3L1s2fWeCAUo7PuirqK9CNR9726anyCmuN5zTFT7sDbjXSuuL7GtxhbVCg6aAtC8rjY2anSq4Zpj4JWYhaq68oDc",
  "key23": "2GDvid13fkEUAa491Y4kmEZtw1BFo2tKg3yukrNBhAz5fKNbn52dwZ7BzAG4n4x9kNSBVbgZ9pMoS4uKZBaVYgqB",
  "key24": "Z286ZniHBi1u4QWAXNaLPPoj1srDmKzef73RJQwUGmr34ddtLenVLEkMrLTXrYkACDzmfaPrDBBrcHnfnEW9VJ7",
  "key25": "5Q22ev3roQE8oZqPK3GMTKr3YgLb3cT75cgySThPCCDY7atj8fGne5kjqDNT8Wk4BMEY8bekRkwCe8ULWwNefaMn",
  "key26": "5x3aVVjTBmrVEiSvxZpYeUMTeSZVnjoGzZbFoZekRyGbixpDps6PrXA4ZJyuhFHpwLvm2LoGus4ZN4UWaXFwr6s1",
  "key27": "AuYGJsHWchPtz9iUkNnBDiS6gTCHrJrjYRJ7zxunyUHzkGTNKDj3NVPxKbQcNZkaVDpHoxvZ6kfTYjRwjT3nsty",
  "key28": "4PQA2XpEtnjZm1mUZWCqS7cBCfcVUzmrqoGY4rQuHWvEcKEypnXTiUAVQqwqbCkbhvdhejV4rTT9C9GXBF184nJN",
  "key29": "5D7jhXXiVE9AyV5TMRBtXm6Fc73sDfR2MmTh6U6bgKL2fpvZjkGMg52cQso96Dhkum8S2Z6X1aGuAscfDwYbwKzV",
  "key30": "3tgcD15n3a3T5j7mFyFq9UHxQTMcwPjgdqD3GXaffUSMaM7B4TYes2tG92QzyvXqQNGJxXMfbEJikDgqUp6A4vA6",
  "key31": "38dZhNtie6ctcDqHfKNLQ8SAEdStkC2TVpF1SCCYDNSk7buv8GTgUQo4dL1o6r5WqAeVrXjLawwSis2AuGtgmS8Y"
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
