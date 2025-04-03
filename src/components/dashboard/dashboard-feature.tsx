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
    "2MQtasyxNruvPT6yQ45pDEEqdZ8fwmYrfcynKr54rxjA3gZHw9shChbojQCQBj1FN1GxCtNRWBjdc71MjgwfhbZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cW53mhPT65Ww8fvrYqRfpX2BsuErK2a3k926tY73RChTTjzMY4PVkkVLFn6c3UG5hLyjEuxSuq9jELMVEHbYcD1",
  "key1": "2wYgW2g4j3vZussnq2EGerTN7pLxbpnwdELjdRyojTkCcAZJfFY4y9oCQMt23pUhotQFh4RVpwFWNC9zADYpduLU",
  "key2": "4LVgiq4dHaqkVkU5faAPou9aHGaKiRoQ58DJ2YEMMfebjj2ukEWxSRWszbj4oBFugdTfV9wAmi15YyyGKwKMMd87",
  "key3": "2p48JnZahjC8uCvf6fcPg7tEnFBZsALr5ULj6bbUtbvsQitJdi4nfaWb9nraZJeFxh1BeuNgZGZ4d5ecU1AH2nFo",
  "key4": "4DhquyzNdVR9YU1kYFz2fwEjk8Z3KpMdvMan1YmrEwReSKoPZXpNSU6XTaYcwGCQFurMNzFGW4VEHbnGicyLSN8Y",
  "key5": "4846xKgHEEMjZSBiTns7AG3To377XwiN7mmQba4RvFPjXhAb7QUvxYWJLHVw3go1AEriZrNYyA8tdjmdQU9JGX5L",
  "key6": "3KBup4kajcBdN7mjvSBSG2ot3FkMejvP8hXwNo8tHAqR4VpfT3UFZDasPJit7FTFuKaEvxrq5wtwzsupjr78s4U6",
  "key7": "G41ubEnTSCTuZruMhEbvRuh7QLQBf9vJntjJ243rXgwfpWno5yb92bw6oEmXwwdTu8VWBMA8L89WFwb8AmrRJ2k",
  "key8": "wUA37rbsoVyBPA7WeaYR6tsS1R6HXVQ5EcenoRHPLpT5FHqZTCgA5UoTMcBg6zb7zNZdFzDj8BxeCrD6ZKC8sda",
  "key9": "4W47srAipjCh7oKNJ2JTqp2L5iDEgiwFoqw31tgX1NkTAn6kyyxhCVfVcQVjj14rWFyRoVWG33oXdUiVn14fgNoi",
  "key10": "5eTir3QqcFsrKQ7cNCFY8KQUEWnwTGJDkXSuDSsDZEYX3p4EFCLrHT8ZekxtYXABM4gj21RR6qNDA87xmsMfbX5w",
  "key11": "Dyp7LE9kqYpxMoziDjbYudfNeiTWCsMCXR2jpK4CkHoEBFeFF2XsDc7Jo5faa5UmVQ8pr6ydG7zTSEhCSNmnJT7",
  "key12": "4mkHyFm49W6eU7nybMKQF3GwFMewzsHQPMtrUp1BkTMm5RBhzQ1XpFmBAWjF8SETns6C6QEMQxVKHQoPRx3fnBwQ",
  "key13": "5XsGc7q5p9hqPBNPFyP8HtqS4YFCqBGNjhemoZ4A2bJBis65uPvoomFEVjggfJB8XarAio4Rhx8RYNqvkdMJ2Q8q",
  "key14": "4nKNScgBaN3pUsMAVbyZHu6LvTTnhYT6J5Jfa6vV6UHexUTBu54qAfm8qMoVRAVMd4uSEBJoQvJxDGiWAGwvTjXM",
  "key15": "FVnBHH2g6uZkumcejYTFbmugTMGJoCTLNkjaddDdVF1fiG5gxPnqELyhSR1aD474HroiPzxsaCYM9ahmM9rP3SN",
  "key16": "5PcQKySnKU1i1eNoNGNrX9cQebbfBk9Bb3cjWsnZRPJB8UZCZUcS3d2hdgk4MHMrZje19rSvaLs8Cx4C9tbeJ87r",
  "key17": "4ttZX9HM9ZTrtxjuyFGMPQKUaHXpkUCAhWxtfDbDtcT8LzW8rG1aqr5YzxtuCmAh32RMh3pYo4VhnDN8GgAD9nk3",
  "key18": "3x6tNdWFGAqbdcNBRiTAKb369RmU5zB4rtXedHsHxfcVLV4pqS4MW4jXC7LEMEg57MzKgKjVKunWKqjsKA2ci6Ax",
  "key19": "3eYrFkRTu41wj8FueAWScpCpiZApmQfzDhPMcu2JCAY1s1XEWZXuNELBBYYgChLEHB7pGKruuMxQXxoobfPpXrfx",
  "key20": "44PoUWu5WWQVtfdS1EKVM9VX9keNyYY7fjdxgWMyk9TTGtwWmVnhGTCgr3bU3jD7NrfknihgXYThTMKgDWMPsEyg",
  "key21": "7Sr9pBd9FZYf2fDKjrnCPMQmeUPRXoiTJ5cmTHeU7MtkpmtQxidAEp9bTbnfNog4ReFFj8UAZsYgtapR3rj6ij9",
  "key22": "41tJCgn4ovceLNnFb69ch6P5M5LYjqfyzTPh6pbJjFi2M1uvnuYe5TJRMYeZW8L5LnyFt5fuNqS82MSndL2qzFDb",
  "key23": "t7R2xwuy1qeZKqUTjVvrQtgHqMVp4gBghM4NezzdzKRji4ftGjdfrqo42gKaro5kZz6WptMuXVm6k6g3eUmAVGe",
  "key24": "3bFUrdeKp5cBAaFyHWiWsYvak5NoCNZdZSRfT3fYkBoJAQYQkmRLppKYWpQBrrwYz2r3YX473ftETNiuXWg9t4Fx",
  "key25": "2nZYVPkEG93osv17EN7fKYNpgcRFd96vWeAWnXzs4rFRjvo6zMN1o4UpqCuG9jWijgHmVMpv7w6BiLDwLsCcAFwb",
  "key26": "wMYwVd1MU57e3aeKHGVNANErnHroTU2V95tcKnDcEckxzmgNcE7aa8uenEePPkjpy3az2jAZs5wmxDijHwu4SWa",
  "key27": "3PeJVnAfX1mdSfAv5Aywq9wGJDLFskj9iM2hVixUE9Xzyn9xk5ch8Boy26tAUZj6EryajCifv8ruyEghYWQWwAMY",
  "key28": "2BtgpAL37uVh9tQFpqP59zSWDRXeCif5pHGiM15QxKVRW5BdcCSnpMW9YfCHMAEtLQ1edKo318pR3xYHnQAZSe97",
  "key29": "2hVPgzoKFPKCaqbt1QwV4EvnCboYViXZNQkHkHX6DK2NffSwCVErUFo6DFvnUx7yCVCai5edJFU5ityDe376RjP7",
  "key30": "3G8zeM4GiVRMDnMZRDfFRZ5WNjEyermbnxzce46pAvvikiGie6L1UopommE8kBv4FbqEGEL6fBYR5TvwfBUS6MjZ",
  "key31": "5gFHdmRSfd8xXk8RK4jSGxMuMvZHoumpoFfnNRJE8JJD51ZYrjQpGgZT39mZbekRxGT6es3GayFeZqQjEDd1SoXX",
  "key32": "22eXvcVKLr4zfxue8eBUAS7Fi6bDdqBL5zmydJedpL7kBqtDn3YhXF7ma2LnP7LdKiBXxJodBpqjV6q5V53Gu1Gv",
  "key33": "4kQmD3j8kuEQjFpzoq6vfz1v247nw4U5Hv7twgC6XwqeLX5zr5LYDFAsWFapNUygNHHoeUcwK6P4Lvq9TRB75KR7",
  "key34": "42cHPAryhxUi8gLEJ18wkEgAmmjCPEkSZKRD8Wc3jU8J8gP7M5bpD4qt4Q3U1BQJeTh5YP3mK3ARK3u8nQe6c5Uk",
  "key35": "5DZVKwBJ6EBuJz8384Q7MjdXMACVTDcS3hWASXKPa25qNap5ukLhrzWaM2P5gtSSYuDfKv59rAx9BQsDdcNuRcd",
  "key36": "2TWWgc2K3hh1aSk13fZBFe8Ayjw8PCHYiDM9zzWrQS8W7n5kTAnckpCTiTySiyQJfEPKCJbydGKfH8sUaQQKo6N3",
  "key37": "2Ptyg17wNCwmPrQ7NFVY9p5hafHQHT6GvKACtyvfMafjg1FQKXcYrrPvJnjxCvX9gQeJCxx9V5TeHXxef6JWFqjP",
  "key38": "5oebDYhFYmpo1vN96WaeruefnxpqBGbX92dkbU5npw7QbmBePS9CtkSLytUtQ7u9kQ7YqFpb5tcBWrgQsnBQ8b1M",
  "key39": "5vuKqM5bEzjkGkERh4wcbYyM4iboun6RCUpLc1RoRPm5JLrnvk4ZL7Zb9A4cJ2m8hUSBWBvQy5HipVvna7KP2Xbo",
  "key40": "TBRhRnsNTbnsxi6tC7TboDqJHWgySabW3VZbuQnmXQxUkZiZHL9b3TFTuhGqyQShhkXEud9JPkV867fiECVMDyB",
  "key41": "45fTpaHvtx9ksZ61qMZWcVWGXMVuTUDQJrmeQF6iKwFfTtkW536iNeatF2Ta7s54avxUgsT574mXbxFfhuaBMJjw",
  "key42": "5pnKVMnj4Z27Vd3d1V3oypGZfCTy1EF3xb1EvxW15j2AUhzVvVXkcuygr69hHkCB3Vtn5KHtRcpUrzu6yzMNEQAw",
  "key43": "2qqXyV8AKnHNfvKa33CeFegGnk4rd7Pd84PWLrHtcdZAWXkCQdMXgAwxuHtvrpZ5DFPZFy3i3EQ2psmq8LQh1QrY",
  "key44": "3CgcrynjwQxxFyNtR4K2fQzwgJ1obT9Cm4wSQrhJvJ2B9uuwyzXMuPP3sSxDge3qnCWNzA6RPG5whVLfT7WeMrue",
  "key45": "5q3QjSuPRaNkC2KtYHscNZFovyAX5LVvcgM5xxsTdmciH3M91jSr2sLwoS3H9sNcHVeP5NLnuoBWgGk2gkQW9C8R",
  "key46": "3snvdZ2eunXJBPsqSuQQohXkPETACoQsSqj8Wj71ti5noWJ5XAMYUXqV2gMKsWUZXSVVBngrEj9DED5MNj35inW8"
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
