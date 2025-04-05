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
    "3EueTy9JpSbtWbP9r2jArbQTMmN3mPZUZYwMWSVw9i948X54wmzFzaaiwyEKFB5ThEWGGP4TZgQxy95Y8oFZJwVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tKmuW78aXuqZftKBAUgxV2Ter6c2YmkAG5BNmRX2c9DXYRR91QMUyz73Maf67tm1uDdEfDe8JJ5a4rTENdxL2ys",
  "key1": "3WMYk34dTXnQfEgGWt88uo5vskdUtC741C9HB2aYSX1PF1U3egYN6baYayRn7mapCPy2NazzaCJdWeBpmZJUemfa",
  "key2": "66NRDB9vqymLLNW1PoxcGVf4oHJ4Vai3SMSUYfKYL9zCiivU3AWW9xs4bu9mKE6FHAzXnMqsYge64DPKHYr77mcz",
  "key3": "4qpSNvpz1J9U1Tn1oQaGBeN4zgF5KdSPwgWUHR4gn9HvC2QhBi3FagE5BsdKz2HagPU3JVyXwnPG23LDbHk2MPj9",
  "key4": "4CTwgGTaWvReCAtCy6JYRZYf6yhVQ5kevU14Rnji4Gq7qrftQNRzwpJ5RvJhN4jm4NxUJMwwdmpbtVtyUeDH1kPM",
  "key5": "3aFw9L33JWF7g5aqhUCZVSBAN1C7DQapeAi7ko5PApsLFuCbovS7a8KZKdgFiubB5MT2Wt5eKCLeCkx7dGSQZtu5",
  "key6": "315oJdJbv3c4D9Pes7ogQsPoXFnuLbP8tBMgG1gf6fczsvVVtcQ2NDEjBbowGRc2DAfunBjEoSVvNvYtmhfCb4J2",
  "key7": "45MAJ5hk4GGRuURLuGjQifYcTMU4UWhCMngBupBgNsVRnpRWwGSQ2gD6eVgrthDeSuc2bVzv9uokyJPjbV2yunVJ",
  "key8": "5wKwUqTEmG9GFeHTa1iarvpUkz8JzpWYwZGMrGkEfZgox6qJL7AMUSFFGRauRUg4PmNGyj6AB2GfB2xBVzM2f1th",
  "key9": "4qccEGXEjnbTRk7EAgvLhGV1m2MJ8jWzZB9THyPotdXxZkEVNcth5FrqUcta5NW22hDGuUnsHTpqtssdWH2pRzN8",
  "key10": "4R27jQS2nTNAdUKQ7Ja6NJnmsfsDC5yyWKCt1vooacTu7w4CLVR5vRGgLrodQsWC7juEhYpRt6a6hB1h576Lxf3M",
  "key11": "48FJ9nW3hG2eV4kJpW4jkSiAbksrVWRf365XDZMXcFNWepTETY7fVhgi82qLmRJUhcWSJapLpcSDQN8nbb69zeoE",
  "key12": "3U8SwbnBBAKttDXWdcwg8UW9PHQeU8NfMmvUBG2jAxuEYxvCtrbLPBo4auSVnFCsFnbzvmsozEwvM96SuV2BcsXT",
  "key13": "h2JnQthvQohddqqXzcuADrcuizJMWq2ioGSmueA2V6FVLWnEhrb4HZgXy82bF4yEEp6k2AwL6mUUZaWRT99LH4u",
  "key14": "isjhehAtJ6Pc74pyb4takcMikcsfgWSGM5wEZ4tin1dVfUfAhCbyBFjrjsvQD7vyR38ZNv2zWxQTsdmR8PojNu2",
  "key15": "PWD22kixERcfVuEBHbRfoRaraN7npRLG43rMSD6wsNS9RVb9Et6YoiBgLiVRPH9D6LmiKoMEPFxgzsAxiz4AyP1",
  "key16": "x2y4Y4ScdAUP7hW6uALKrYk4cvTL3cjSjtBYPzQBZxLLwVQPk2JwE3P6wtkeFStxZ6UgRiGbSyBWuF4LKc9NVxu",
  "key17": "2582MhsBDnER8fSBPy5jQka9dwzt8Y3G2dUBNEPsSsTDgiSvJyYmjvyGTP3b3pE22suwH2A9SL7RVMbpvuAaFxng",
  "key18": "2gwcTYFPAUjegY28rmbtuM2wgBNE5Qmzan8evvKE1BUeB1rpxA81wr5TWu5bb3ddP4oFc64zkr72MzNgRZ6TfreG",
  "key19": "2SEs2Zkaay7Xt6sCRs2qmkKKFj8wdfWae4cbi1PpFV4goKSiwATENYifKsMKN15qGsPG4wEJGCakY8kPvKx47g12",
  "key20": "5TyVftEbE6mpCRy6SCKVoCf2db3k6f5Yrx7jdTPJbQL6zS8QTZzMpEk4Aw4yAA64yA1fzoSbgGzDgKBhE9rTqTee",
  "key21": "5g7tDZsHokc1aCPGUx6VidqjYsfFkU2SYv7npGcF8VU67Em4ZN8cb5xYFswegTqTfcHXnZYJgN2ndqQ1QERNhNYB",
  "key22": "5vyTgAUwDS2sFJt71tWKjJj9R6TCXamfb4Vvp4mcsxYZnJrVA9QnrcTsWHtCiZCqh5ydTh71hNNz9Vw5YBh9HNat",
  "key23": "4mH9Y9GZ1qsHaiatdrbjP5cxychU6AVM2xEq2o1rbRaAwewg694hceEMeknT71Nrho8NusbQG9WqPLBuJgmJPCHe",
  "key24": "37y2egXCtt2mwdQxH2KdHjxwDu7PKwSongTSRHMVU3JLc9PLg3xp15cBPahwL1zP2ne9takZZa5YYz7Thhrh32eW",
  "key25": "5Ar1oWPjEuceST4baex6J7kyZGeL3drzfY32hUQ98PJBZKWdLHPpXhpmqoLUMZ6c6xc3c5tKzfRQJKKbCHHhfjme",
  "key26": "2R41fxeUn8vkQ36Mx72JDp2b6sZ3XiRPnaeAfFDTRW5hDyxNUWBk3eQ1U3529YALD7P6Mz2Y6tma1Z31KbzrXkX7"
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
