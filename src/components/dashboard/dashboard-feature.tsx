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
    "2jwXTwDaEyNqJEczBXreBFxcx766AiK9PDgamiMzQGK1PKCUhKCya1i7U1EjEhd9uv7C3UuW56m9vBKnFzG4RhJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36hjU1jwPybFyJMMBhSr9hxAhESKPkYiSp6fCscHcmhaGhZeVJb2rz3W9ScC4DGXbsCdmSwSxwZPT5ybCeHGxwHW",
  "key1": "vprAbhJnpjQs2wT2vYqg9PH7XWM64XqrTnxAXLYnRBZ6puADpJXywnfYAQ3Lj2UJVB4JE8mDvj6n3ctMq3dHNGq",
  "key2": "4JAGR23Aevbv7MKai3oxDoSbTqizNsmagh463FUvMHVTf7Vgdiet6ogsjw74u38jzbDY4B31bfdv7AUtKV862SQT",
  "key3": "3oEMyf3Cu78zr3uij3yFcZiKP5WKujpwLVbH2gARV7mFST9q6YiGBqdvpxGiGZDzqbAC6WFHwQ1GntaQtqVkCacK",
  "key4": "3TvRkt1ioKRMjYwY12gtpz4fHr2aotB12yZgvCsA53efPaW9Tr1bdFyVRXy4FH4yCtRazN3P4MaeVVjPbANieYxJ",
  "key5": "212bpFp6D5xWyAndagzkZXKvD2pzUD8gfCy3Ff65LnbS8qsPxLtt9J9iExjX3v8ZF7pvQEHypySjRTu16pnyZMDP",
  "key6": "5JBkVx4uUAReznHs8fRLJtz26RYtuCCVnrHggpawCv5KD6J8qsTGsiFm8PrkGKwxHASNeSbtRcUMWoaTuQj5UmVW",
  "key7": "2DRo7DG26KU382BVcQ454ReSq6WVoha4YxyPupD2ieFNzgFFNEkBQv4gLCmm3Py6f8guh8eto63DHKA4xYKj1S9t",
  "key8": "3FKopzPuFXY1YxMWCP3PXJ6E8G5C74VP8LFLnTyWqoa3EnnhffgMZoQyzhgirRyj3gky6EA5AXaRBVGjZq48aPK6",
  "key9": "5eYBop6weCGC2eoYGmAg1nmuPmjB42yp7y5T6xiD2c49tMKbfk4854GHCTPRScghJ2JYQyZYrFnfpPoHT4sHFcgd",
  "key10": "3UVPPzeKrSqfvso9AZSCP4fZmiu6f2UuKpBDncydndtjQjBdzER9a3aQUjXaSbNbuZfvZQunhQL5QFe4sMsvNY4R",
  "key11": "nLTB2DFDYBpFxkguzWwg3veTyBPfT6LqdjU8gq4Gj3UBcbTsWK8MA9KTriZ3x5Xfo2LmWsqf1HLahySXJ33M7zD",
  "key12": "5vzxf6DV6QCUbR7KjKfUMC1xrw4PDcNGP2mBuynEG8KeqyJGPa98SCqgoPWCeqDWhpzEvkTMqQnaKk7uk2ppiQQA",
  "key13": "3hPqARfcfx4n5k6KWah6NjXTpCNqFAxMQz2dqq5DhopbGrVneK3uNxkTXs81wzuLFe5756FiUAnPCSqJqBFttXK1",
  "key14": "3CQXgqx2hKUuDxqDfnePedGHoqr39iT2fky8oETDUf3TynsW2ABYXm38emoZZnJzzNt8aooULgiMguDbNdSh23X8",
  "key15": "3viX2RpjCLLNHKpsrKtiHd6xQAZKmeooabZyB3P1y4JGLSgDoNMpSL9scmeF5tHD4Nk4VfZjaYRh1EP2guAQQWsi",
  "key16": "4fJ81tRhiZ8j3Z7DtXYxEMrDzQka3AzS24BaDorb58VQ1A6ULMg4T7p8gpr3uoWpmWM6RhN61LiXSGzXvQnGxRHc",
  "key17": "5t3mb3VEBxnWE8U4q9Ss2iDyBvDeKFDwX7B96kneGrJShxVEpQ4PwcNSGJRSRRQBDgxkjk2yjt8BUfkgqftjL5qy",
  "key18": "5tCkupdMhkML7NJmQQspumuCuJ1ABG3rRWvYKfsvnSZSjqn9B8PQ6azJxQTGcnuyHwzxft1DEsjCz67o8uVyYe8d",
  "key19": "UB9vJ4UnJe1f7EFTVVqUa86rx444iZoyYU1q3DkZzFCErdnEouDn13dssUBLvm4ffTohM2HATs9AwdP8Vg8wHQq",
  "key20": "54ocifqeMtqpfdpHUWz9joasNxgngkvPyGg3xL6zFtCpoY9v7t5yNpZoG312QhERpB4bzkTgoDqwuzKrEdscQ8KU",
  "key21": "2cA2WEFzketfcYufGA8mgvW5tP9RsMm9aoVZFwngWyHBd4UrSXSR65LWVkTtQEBEQHAoZqVqsN5qF7gf6SHD1xa4",
  "key22": "55m8SSFrYxBSv8PWAVL9onhPegNnD32YVLoygZEwonDWxU3XpTRqEfofvhMPoeQgTpVezMYyzEdkYXX262CXgJvj",
  "key23": "4hpr2sNGeZjUPzTDyXujbSkNs9fH1NGu6NpjGYXnXGRjjXyc7pXNYEPoZMjiAZ98sHoWYobZNZCpyfMrRaVGBv4W",
  "key24": "3p8tgZBkGepftP9noe1sMdFVXBUJRXZTZC55Q5YXzDYjJqASWsdzGg25AWBh2HDc8BDvUgYsYRiTMfkBgz2jznhJ",
  "key25": "41HqrDQmX567y5x9hy86KXqZ9J7BfFX3VCGQc2jYhaFrBwdNk2qj5AEfDScopRuSGmXDTWh7hSX96KGFaWw66bz2",
  "key26": "2xo85jJx3zW1FGY3xsE7wzdhz7BLfjUa3vcCphf4n1Z4zvBP4E9ENQuudJsZWbMEFxcehrDT2a3Gu2efWhASH7By",
  "key27": "4R4xE1wzHhYwRFfb3RFMs1QrbkLdtvePgAoCt6dKHp6rWQExBXBkoxGxGUtAJL9e8njWDdNWYwx158h28uu6d8rX",
  "key28": "585ntE1rBFQTiU65THY729rJaL3EUaRknaB63buADQ3YbNAcGqDDEKLnGCqaBcT6mhVFyt7dkJvsgjQjN4yh9Dyy",
  "key29": "2YS79QkKkgRJimmjumt2p3ND7rM1KzpzPav6XHwPGbTF6eC4irEnQjSAcSb5b5A5soUAHjtsoYEjxvD6bDma3CXN"
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
