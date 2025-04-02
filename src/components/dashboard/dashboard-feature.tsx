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
    "2V3PtDPaF3mNXJp6PyR6HPKozknia4gbj4gnawjgygYoAs4o75cp8dZzpXJeSHJ6v2B63ExRWgBdkiC9zvWrG7Th"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vdGtZYYGiys6UqxXexAyXpHUngNf3f2VzVm1Xg7S75UjU4TaeitJ6Ri6GL4bUtbw2SnZs3nXiHhoYGQ1cGg8LM",
  "key1": "2uu37QiUrpNPESoLZdcfott2RHuVcxzZ931M2tmtZQvdMKZTm6tXiFS1r9nY41pPkPdxoBr3U96tgpQ56QseUTPN",
  "key2": "4ynWrMD2tbD5xjG6ka4u9qUGURmzST7QJoVEp7bMNpof4YrqC7TojXtS9ZB9pzJ6hR2tPHxPWeF3QqDdViF7EMqa",
  "key3": "5oEFSWpktwcsaEGKxQkgH8uUTiRdsLY52R4CnFdBNNpNXDc939knJyPu7FhLnhdbYs6ajFARm6nzRABnA3eV6BYh",
  "key4": "2NNwre2Gz3kRkaBStYeTMAQee4FZhN3xPvRHqyba2qdYTRviBUyHJwFkSd1egiArvBVXnUqpzJiBu7ppEbjNdnnU",
  "key5": "4jqPyeC67jHJ2wnWjgx7JM5D6eCBPFVVARoN28p72WQdubfN9Pd9JFTgsRdkThBzk6VosgodZjcyXygwYZJSJncP",
  "key6": "2enxnrubumkktpMxYUCCvkEftAzypysYcG3zBoPs9NEWJYhxcHwTWBgM7bWKUKZWp3kTPfPq2GNYCbbcz1Sk8sWc",
  "key7": "2qU3PuGJhiXxn6hGUF4oMnLJAMRGKePaWGsvNDNBMH3ZEha52CNrYYPrJJZ5HKJHZYCryBUQx8wZshncTHCH2hp2",
  "key8": "xLkRXUy3t8jrxmbH2EQALSpq1cJPu2SoGSRRBSG1GcxzjLEEPG1sbY5eEbb6y4Efg5HUcnT7LxHkxSA5DiAZL5Y",
  "key9": "3DnUP91iYaGVWxE1gPcsjPk8kadiektX9hCTqTa4Qyp4qugFySSBoZd1ycaQAF1HLu11juRkX4vSJhXtFUeoTtuL",
  "key10": "3qGBwqHpisoBW38f7UaAqhPztwT2mVCV3sQ4FNfvKVSMkCuswQqdaKSsufD9R6SgxKdyzzdgEjyLybRMBwt88xRx",
  "key11": "LWsvNDhHyt9bpkJgoXeygH8rrM4bS7VK3bodVdjwkZxJwWNS7HHw55dAtYsSpvczaM2xfdcgzsMDnDNrSdWBa2A",
  "key12": "rKgko2cGUtmi9peYC6H12oLeT1kbiavGhEFW5yTjzPPSySJQPRFqW1nAekksEj9v2QiVp8nC5bGQ3zNVkjmvzqW",
  "key13": "24v2dwuRj48An6r8Gqr2qyruvZz31VNqRr1xQVxEBpd2j1wLUmhRbn9xLwWEF27PTJagtoZEGhYSPbgoReptFVNN",
  "key14": "3Bv84PML97XtBU3TyGpeec66zM1e2jruiaJEcZdoCaN4PGdBsj99rgFSULxjd6obGi19XdkQE1ueiaiMTjDQ4n2J",
  "key15": "DsJq4o1iSQdauWRJShgu5LcuyKRJp6aio5JcFCMmdTvDHU495x6SxULCAh7rQwVYZENzUWRNxxCdtjGMhAQhqyb",
  "key16": "KxaN2vZEryFHxwHrekpBsbcJs68CkHtYnFBKZHXfn7kjqzUV1ojSS2YZrSSQtqrSy6fn7TNKPiru8Scq6AWCfEL",
  "key17": "2jjzW8vVPWKPcwGqBibFBh7aBUP92PS3VB5BcJgu3qYsL1nRpzGmmjDZrentyQSiD5gzG33mZcgRQkCeGgf7Q1RP",
  "key18": "2XUtakP7XJ2hRvJvmVRaMwgfF3C5NkeVifqqBSggdmJ51mDxPrChbAqbFTXPZWCDJvp64EqmDV4GucWbjiwBUotj",
  "key19": "5Xc1DJHEymjFVC2ztzwe3QmPfugYqSYFkWGjxNmxAm8mXiy3ThSc6ZaNFv4N2HHNZWKTMdaFLGA6vZ2eht17Fq9Z",
  "key20": "5cG537PzZMCeG66TcMEN2FxdCc3WUwvmgp7P5KChA7eEvuJ8sxW6qVeCzRGCF7UsZtKpS77KdGzAB4PUwYgSQkUJ",
  "key21": "Nmtjp9JMdULmYcMi9Ayj3spENz6ny1jr8fjaLAMofCwDcg6nMmdCouZgD4vdMNwuQGKkNRYJv4utqpptWfwCVTg",
  "key22": "2Efh7966W4ZiMtUCnjpNFJTHSv5aTLUFt36BC5jKaL3KvZcQ7pkhexs14BLzTif6dLhDZ1RSTfxWmJiKUqfEMcLk",
  "key23": "2PaTJ8CxQU8pZEb8ves9xLU2wz5EVX2bwFCNmGKtJoRqfxrSoWyhK4Woed3GBSNG5FP2857u2F3uW8EYUsB9hua9",
  "key24": "2rX3NYzaip5jrWQpduvPvTpXzKRnSiikjtVLvhzevsgz8ofsmPKkViGDBcYZxCVwwtDY2W6WSivbQ7NnQrZAzQu4",
  "key25": "5cJmRZUe6S2CpWnwy6s32yS3ujuv3kSxrZqQGX88iiNocJZrZ3VY9RwTjbYGfehUqZPGqC969rTczcsy6d9DqQif",
  "key26": "2BJwvvmaN4FEwts3WwAWZjFbatDZ4w8AqNNZFXsCi4AwU24MAtoUvjMby7JeKp13cZzLCGFVB63zDGB5Q8m6ZvET",
  "key27": "4C5NvvZk4mCQFBBEjMLHYk75JXRxBZ6gQTSiRkRT5WxJY9DfGA5Q9tr8s9V52naY4LouUnavCJRbkHwmqkXyBRQD",
  "key28": "67ZirqbZpSiaYAf56rHi2u97MwD8pr9vaLRZCMUjoeJtH848ugc7EeFoWJNmcBt4Fxp2yDEyLaYkX71fVEaL9uqL",
  "key29": "3rpmC7HGtqM6y4dkVrSYuJxHr1WKGAK4uoRx7x89kfq8jVNfekYvJGLEUcVsiBn9epY9Z8QRpQVVkrMTvB6a5KLK",
  "key30": "3QZj56DFTGJNQua3ZSJhVCFCqfpkSiHvV8HwcWKc9fGedKpMNKjP13JeDbX9o2CnfnZKKzABYMbpKc149LDZrJ94",
  "key31": "X86tKkmdG9fv4veQyh5EM3CNazxPetn3L63L3Nsdyx8tRgE7i7vaqboPc7fSuuaV9pefbUft27gKLmXYWyeFQAk",
  "key32": "62kg5v9hCa4a9wZr9z6p3Ut8RvGoMBwM3FQYue6rAk2LzjCc9Dh5sjHnrKVmoiNstgmDxxBczUe1tBKUPLt3tt3Y",
  "key33": "QsZRFKWnK7H9DRsCDXEKWdx2GHEeLLLVibxocvNxAi37jHrUZH3VM21C6jS7Xnv5L7mGVvYfapVkn5kdHw7dx6t",
  "key34": "5bA7J9tqprpgYW3a9D4ohE93qgY6Si2bN2f2gvV4FXmkmiJiEfwKNZfaKNuDsvKEp6HZoojSGUKVxxLHTbNcRWBh",
  "key35": "3v9QfxAXoubowVVAn8ZuUs4sUn8J1LkVV3ezUzYbTAmopFFTeKny5BQrGUUiPUTmzKiaRHcaQLAHDLxrYj6LdaSZ",
  "key36": "yrTsqT4LKeGQV7grRkKWMa3T5jAyuzD27cHW7gFf37nbq5cxLz6Ua5CXSJiG99ywYSYdPMCfuHoKrvnaCDNbc15",
  "key37": "3Cwg5AenjGfZktrj5qkhg5ZSSpiTaPHvheDeEd7vhHneKwv2cFWGxWytoREpiVLzEXPTNGUws4VU7kVcZ9bBBqtN",
  "key38": "4HahD9HN1P6CAf24J7VSkmQrW6HuNtEgiMJpH42ZBuv7VCa92YBre5n9E5fCUjLFsZWhc15q1rscXXkSqSBqWK4L",
  "key39": "3LQsbE2GLvcqT9N8ooj8UPLGCv2VfToUaUhMfvcpLhhD2kzgJiJuvYaFDhWv6D9enVJhp2oWAV6pwahnu94kJrzP",
  "key40": "KLQ29DXBHnCCfxE7unriCJLbdU1pCM6fayQKd46qQygV9k3ztAJ5YwD45gHoo3er6Fdbypnx3BMnXSmR7iQjuw1",
  "key41": "4szW6sgnjd9Cz1oEEPadSSXmBMcgY8c1yxbKMMiiZukmW8LRD4ggWN6QKrfvvC8LF7AaTghpGoyDbWGLxwPPk6X9",
  "key42": "2zt6FBsV7GZ6shxo1BDGeZ3zHZX3KmeezKgGgU9RxWXavroRKw1nFg2bV6b7FDv4XrH7GmJ2JSHkxBkYhmnWmh1K",
  "key43": "2w6xq4EJWLQ8NbaR2FsAyRmppr6MWBwAipiuq4PJBXC6UfQmSF7Bk4jW1RAPJAELa7qHovqPCe7ERN15vjFVGvcZ"
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
