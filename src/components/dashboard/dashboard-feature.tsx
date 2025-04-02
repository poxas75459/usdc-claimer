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
    "2T1zREbWoY2GGjNYq5uKy7FVbGfBneMvqAf2KBZgJs9ps12hpjmD6V7e6PXv7BrFb8mum6oyrnMSNzd4RcEQcMwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AYviUohcMGgzziD6KebehHs11i21nPFRYwG5D1UzuvMvbGS6bto4kKFSucN6TqnUMVZFspSTEgDzBAjPky5XUKm",
  "key1": "48Yn8s44VaPcKNx8vf6Zkk54kPTsBbrccTe5Le7FG3GMHU2PpiXQ4PM1rVtz7ReXWKLp2Y1Etpvmb225SkbfherC",
  "key2": "4z9RQhtFiXMusMLELKrGoyAhPpWofRKnPaPW1o3EGWAfHTBhQJHorjL9Ut1ok2ZMVwsh4KcN3tvJRtr3KjBtZncQ",
  "key3": "31UmHbJuEPwrusP3qZoUvYyM3NC9WqTZpKeRzsWS6f7ejJ53PV41mcpZjf17HpKwhEM5hkmbuQ5ubWiQugq1VGTK",
  "key4": "2BUyGq5zuuNdcFgzHpHjz3AeJNgTEXfZxaByw4GWzeAquwgk2PDJYwMQTdRmfCWhNF5SY4g4Q763uNFi3A1cqK1a",
  "key5": "53nAYmajGZKorHowcjfbAkxJHs83sDedD2zEUByyxyv4wGDhjhUedHAPP8GLfQaAUbVU447LaN3oA9pGqSpfFyZs",
  "key6": "3YdvLUmLhUdq8Sh9kVvi71wUoyRFm6dyi46tQHx9YypYxCaxTpz6x3XwE14mvj44vWpKBbFxrtdhS5RRs4Jo97Bv",
  "key7": "2bkw1NmE76s61BisB2iLKuJhKzzed2LfWYSQEBVdccDd89rFx9hhjMqhSwxfrnMvMUQSay8q5kGUTsin2MWbbUNM",
  "key8": "5uGGrEcqEYUBQQkRdNJujibHWueGGp7XwmRttmKDQrrFTvUexNnoknTJ6o5AfypBpqpT3fSTaGg3Rd1vqozEKVJr",
  "key9": "4MffbYPxMjG1qBoEib7f5RgCr43MvdTUW2tHUQQwRVjWo5z34Cm5Y1FUE32x5B1dgqSRtULHPAa1RDcpBt9THnN9",
  "key10": "38vkdzAcRcJ8uUaHV6wkkQ9yV3Mxk5cMKS56VAXUsuD7rKbDyyTEfznzbR4KqgibwpzUQ2AiUqFYMNfH6uYQBjwK",
  "key11": "wMN2kSR8gP8au4cGdv44ANtLwm4fRHwGsi8fmzgWmgf1DptZjinvvXFUknBmCiJwY7kdaiRudUjKMXncoQGXzcs",
  "key12": "4cr51de97KHxcw2JZMxu4NAa37XtmrUXmLzLfAUKJyDZR38Zix4834Pmqyb2njL98MFtZPUjeze1GGcDscgn8Mzw",
  "key13": "5vNUDndN2VbVzwCK6gxjFvZVxfC8kjUZtVcBVDoCVjhPxExvN3jB8oK97jTQqEZVPzPC1wBXfHD67CCpt7yVQXyb",
  "key14": "3EUvDFc2vo49p68jyBEGbT1y2Xg4xeGcxaFoDRBqEE2x36vLMHnaNMbDpdr5KK9VuXVMXzbvcEURA1fzh4hog7Ey",
  "key15": "5s4dwUQ3o6JhcMi5PBt9ALK7wkUThnJiBgrVmcTBKPewbUx5HbpBNeCGkNMr4QEpbVPcqTDaSuLHXvmwqb4jZEvy",
  "key16": "5PAxiQxgdb8L2UNi2cTbcmXeESMaAPGXgoymL2ggFMgRLtJm4D2ZUQtcnHCs8qRTokKHKxiH1nXibPfZQXNMZMyH",
  "key17": "2EXMoNv9KbNXyzeqnL2jNXaLYyYSw6ZJ7nxJL87XuLkdAajjJZk5EAdGaS1R7MPV3G725aVFZjDrK46zEoBzdke8",
  "key18": "CQeb8SMm2Dg77H3W5QQAeYgJnAmLAJgVNiZj6xdQgzq6ZkW8Eu3fC38ciGnzPHVeqEztLxsoLPQ7k3wMPamJXky",
  "key19": "2hB6pTxXvfJN3i2YHcRRwHCV5E2KbRKziaC5SCfrhdk8WyVq26BunN3mKfzJxeMsERysP1oBMh5MSgFhGohhVt3x",
  "key20": "4mj7cSXJxwjzse41CwMfvoCGRf7eVAHETrdd7QLMDRUErbd7VJS2Ym6ikkCpVHoZepTRc18DrzmFrEiqH488bh14",
  "key21": "M2zc97cYhGVW4n88QdfnDroXDWYtUR54Zh2e2oaGS9VKsCguhugKjsEhMMF2nXuTKivryhcyFA7fcBYrycRqkeS",
  "key22": "4F4ZUmzyorhbN6TAguYWsMLZLk8jivsJQkQSiJBQ3D6KjLAV4bWufUx3vhB2xk8x3wPp6Q74qZJ6kgekmTiaYvZs",
  "key23": "4Bmb4vF8fhwmfJQtRXdguJEpFDXXHH5pYFA11ARWHWqiYqfV3ZECxcszsPqA1bVppjQnt14Qpj4o4ni2RGZSkD7L",
  "key24": "4L92Mk7Jgxsj9V9yc4Q9Dey6YN6Tc7Bq5xchgVvuwqaPuRiEqNmWVZmiEMH5qCAnNAPCUaCgMkxDTaG3eVzyFHqG",
  "key25": "2tsZWbwL6Vkcynh7ubRKBayNXNnuN37VRnjBzwu1YuQTGW2mSqC9tw1y4phQpDc6MehqqCJ6fNTxdL8PZzVgjsjF",
  "key26": "3UFJ7qDUbeCB1maxQLhBW1pGmEejD2FV2JaHRmPVpE4WAazCN51CX7o4KLTEZaYz7SJT4CtqdUv8cX3upqWrtVbt",
  "key27": "37bYVDyYuTSMmZYnMoTz3LLR4ZqGXzLeEAZhcfokL25a3Xz48RjF6NCsouDLtXMbJD6A79gKxnd14jojd7Y4Ug19",
  "key28": "KNZ1iUFf4MAGN1aRXmNnT4EWsAASo5VnJUFrFAZj7AP42cFThk6vPUJGkHvnNR7jGWS9Nfhsd2a1mncJUxkMFNq",
  "key29": "GvXwzdVCXi9yxZ9KVfZ2M2AQ27ymeYChuJRuJoqzK5UWiGSARrE44Y5UqRFyPbJTwGWXAnkVDcQvTipYf9vU1LM",
  "key30": "21h6Q1oxoDhezDbMgdPzZjq6yM1mvh1feWw8FU7a9GHQekuEqSMyaK9pthnXRKCRwzThTNZT7ZwjQbcVQtUWiJL5",
  "key31": "4ywooHSR8CNjeErYfStRgA73psQxikf5hCY1vvmayr4NhAnAnFpj5tK68WJvaw7seWxbxkBVUpCKQuvSe5fvRtZ2",
  "key32": "4ukjQPtEkQEUuHbPaiQbZW2yNaWy5m4nQ8E8QQAg8nGKAajAuL99qF4CQUmfPGtPssrb2vANNMdK8tJ4jbfkJh3V",
  "key33": "2iKaKVVCbyVmKS1rN3v6HnxHYzu1XxuB4hDnMEEn66Xsmp66KX3rvWpwdtXrT7dYu2eWZrYhRE7VQAWxq6drvRLa",
  "key34": "BxAmqjuEBu7rxDFY9RxknD4WB7c93Bb2n2aJVq6SdzoV6Ycg9v7HhHAFUshiP4Lfd7Fn83aLd5GhKP8JuKm3Dyi",
  "key35": "4ZyvEWAB54YaZYKFVwsV1nc3kXQSkxbkY2bA8QiV9yNxcQx7QezqDPDKXPGfAKCKDQPppqFGMy4LCgHcmH1TrcCz",
  "key36": "3MVPhmJk3LqY32Dyg2nEUewD5rb7EHZfFtWCMbtHEMzSvHy41KZ5Mehs3J2ggJQSM2gk2uVWdugzZL7mM7TvR3L9",
  "key37": "3BDEwKADdVyNGXuVAwkLDenE1L7XLNREoWFiotwNJrEWtkDj7TvjStbPJKr9bU8yvwRveK9khopd74ZENFhMEZQ6",
  "key38": "3jN2MpehSczMRkdthAH5vpemRXZJCyemnNteNdxVLZUVrkEe8bp7XhmS9ufxpWcjrmDiUm6gVNy1rPjS3atQWN4R",
  "key39": "59E4qnUHZ5kroVdv5Co6wn4g5HCqLencJgNCvV5pmHX4UxJPavVBKuGoWL2kyYX2j114WGhwX2Jmbjn9iihut6zn"
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
