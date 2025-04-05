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
    "4Gv17JoPNhjicZXd7SntbjMshvVoksDNhgKv7DWaAdp59iAJoWrZrrg3opxSYNMqmFMbEQ948hy8TcZ8aCZ7wuDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CgjJth5fqYGX1B3qRQYKWQmgrrEN4fvFaDVUorxtPHssrYh1v9ooJG2owXkfC7h1oS6Dou8eQbv4tV3zZAnyBVQ",
  "key1": "2HK2L5Kwv7Xy8ed7XCTC85rs8xLDPfnKXWQtwGhEVyYqUwonfC3QzXakWbvvZpVfPxspEAf8HqdWW3opzeqCzvfU",
  "key2": "sY31S4CJGyHLPcwcqdfMKgxtMv1EQzUDX9hPbR1XBQv8XLfV16ATMx9gmutRRAYxQmYX2rBpVHkupjUR5GE9uRx",
  "key3": "31X1rj8kh3HYr9nZEmRH4rwU72n1gi4Swp5ZC5sdkGYVcoMamMHaQhpZxpSbByQURfWhFCVhjC4SAnPsJ8inHPjH",
  "key4": "59A7BoyJ5JXEmkz6PbBQNemNc9DKFXXfP4PayVgipuJMaf3zNqFtxiDET6SiHbCt2J1Zd3XBR4k6kgEeWvv183RG",
  "key5": "4ZpbHSdakTNJhhrujGNpbQ1vbm3svHW5UA1MLzmUDFL8jAwumBx5aU96g3DnkrggQiUwVuUb8q3vFW22aD6RF4Dx",
  "key6": "3xtRMAZAGnjrL3XxiQC1Tb75xHcqyzNuT9CDTwcBrQUumGxkQSdvU6iPHMxLSYbqLSCQX8jrtiu3MLtbphHvtAU2",
  "key7": "4SbWNdrpyv8pgPNrxTmZ21cZjr5HJipLPFrJXXdn7Ph1LutzkAfK4XeR3sC7BZei8kB22rJpKYrbUo8nEGEbQUcb",
  "key8": "NAMwC3VRmCzCs7DFtfK8qagdUbettrSnPhb65cv9VoNHokRuXHdtqWcMqocbiUziR2Z7AA6b5aGARapgJf7LTXe",
  "key9": "4qrnow1yidKmiAKzNXE3surGkHFcSuECMpvc7zEKq1BB5jfeP5TAfZh3xiRwq5dkNnAiDSQQm2qRKvN1WtVHWRER",
  "key10": "37J5dzKDj4ckBLzcFhMW6HkFdsLdXBk1KrDhiftMcpXa7eQGFAeBB25jQCbVuoGPqwxLBZ1ZZ6sBTmD8tQ5oiL4X",
  "key11": "5LtDjbQaF3wCCQJegfZvKjaVfRNPAurWBV6xF42tcvCiZpdge2m7Vfaco5krq2gh1YK4HNF1EDsi67AmceVEuKaJ",
  "key12": "5JRjYhhHJQVVAqnfybJjFFzVL29LxhDSXbSTgowEWTpgZrRdgJt1ADbyebxeStZLGx4DJskX8YfdioiNjH1B5zsE",
  "key13": "48arRtyGycCDxHJUYR1KmNoJWgKGqcXi1L7DGoVezr5yJ8DaBEJxASx2pFypUkiXnTLJxJUF7Mzet2tZrBP8ff9j",
  "key14": "3YRcszGwg6oNREA7CqbgVZjUyv4bizBcLsP7wixjGZqgk3HPwnEc9QLWYrmqF3ZDARAs6jitP6rDstNWPSeFAXCL",
  "key15": "3xUuhdqAjDCuvFxFb4vZLuKUs7JT8azVrXtXDDJaqV8YhAtsqd97mA6zLXz6p5EtBvHQuQmJHRVbSrBzBgvAMRWC",
  "key16": "2khLQDHXSuLkQVhzbz6MyC5zHCCVE8DiuowVQ8zMoHWqHBTB5uiMs2WAquTco5K6qtre7cHrsTBcfJXVdYGF9Pu8",
  "key17": "3X34DboWe6jLiiDrpGjQa47UWSWDZTWpyuRFz69fTQmBRfNXcbyKEs9YbWmM2JZFJ3gbHMMNvzqYLTXhKsGy6bwC",
  "key18": "JrXAMeEdggLoc1NgyBtefeLVkMQtr1g6HqzzegHRVgCF81HZ8j8uZABTKhd1oUTYxSCx4vaw73pgSYfwzispoA8",
  "key19": "34uxcFa7LgBScTVbkEoJKfzq3HmmQnSUrKfdCYnvYUPezDxSXwpBk7hZpGdBM2E8T79YNqENZBSAkZW5zY1QKFRa",
  "key20": "b32Sgv9cKkqnzhcAfbM4pYoPh7DDL5S6nmVw66sGRzSGXFwgJXgwYxU1UJwZJjfE3wxiiN5TsZpP43qKMDXpdWT",
  "key21": "2bYSvj8urmPNo3xDTocqpF5Vff4Y9FCXvWgkfV5axw6tPjZcyH73jYbVdA1PzMYQ4dnFk3vBMiQMZp88GxAXYwuk",
  "key22": "2iTsSRKvrrFbmMtPuLayryqogc42giqBGrU91PV7MKK1zoTeH6BpH7xT2219bZcDX9VQ3qsYa45omQv3i7voS2Fh",
  "key23": "4DSrSKoQ3LxMkonkZDb8JvFi4s4UZRiUrrdSk2Ley8DZzZ5w1kW51kJWb6Zb6T1nDE6co26mZ1RBKnThsBemraYU",
  "key24": "2tDwvJzmcvdyQoCTxkuvXE13aNGAjjGT596CF51GREE43gkaCgjNzFQCnzZwUUw8EFz6XP7tQNwtiatA1o1XGvLy",
  "key25": "4pBCPqRe3DqTiosJA9Ksv84XhzgnPQqCw2TWD4eFur7rjFsckLsVGMetdN1AWgpwEYYfyi5gztSNaD4Y2knUuQRk",
  "key26": "5Z76bPf7HLdwjbemZoRmWfuLJ6Y7ebKqUWwQAjQm1dvhwsmF65c77wBTsC8hCFGjLxgAiQaBsZb1vG1iYbK9v55K",
  "key27": "4CjFFaMBgrEBZCgTR3DizxjdmjnKUEGkMxKL5zkvU9RDwDeEcN1zyCtad88pXJVkAddsR5honxUwo6ToC3FMiMLX",
  "key28": "36KhZmKXpTzofMfHGLkL6yfkRmjoLfeWS65vP8geAnrKmpr7LNPEkN93DGLPEMd1Myp12bx2AAWDmzm1J7i28ECj",
  "key29": "3378YFpmmxM8xjf2397q9r8fFK5ah1csXstmgxiT7txRNbvQ86FPk47ZAzFCvVfEFQ3ovu7kk3S922kmdRHwDFxP",
  "key30": "52h7F29rruTry2ndFqZiYmyENr1tRgNLwb2TyLC44YzTyM3UcHXhZvAPGzGHyc48d71rkKRBrSkqynVhHQeWyonh"
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
