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
    "21V3zxqQkiCqYKDe5ip9rxV4hyHjsdLNk16vUoJG1S7MDVrF2jhDGgxsF64KMga4nqg13zZvTxhrAH6TvGsbEm85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZCk4TiDNvvQbNHydGd55hUAYNWEufgsRJPL2r6eMuHLpntQf5NXAFUphNEAWMY5p2GifvmPCiEp5XmjWVqMTYrR",
  "key1": "3msGaDVkY5c6mqG7M5mkPxZwH2VLgpCyMGj3C8nDcEaB98arSWd4nUUoLf1XKVHWtr2ikwVkuCdABj6k7JSynur6",
  "key2": "58vikux5GYRW12bYqqLZyZcqmeotHB5pbnRjdEgct6VEEkLbWkvJHqRsA7F2cJaEetHXwziFR4Yqg8tLV7YNgHcA",
  "key3": "4VA4ksk7uLTpx6m9d9vgbEbyy4Hi5rUorwu4bp4o17oWwWPk1QcexdyECA45xgQtA3xAeV8gYG6aAX7jP6ZRAc9y",
  "key4": "4QtxG5xuwcXsSz6JsaLZa7FVAYoBFTLRkejN1qbieiQe271mot9rhigPX2jb5qpAvWaQX18JHR9V9WfPVQx8k963",
  "key5": "3KxQsGoyHVtExTYbQ3UKcMVqTGWCda7NgBqaYAE8vft58U7Zpm2chbH9U4kxg47hnfhRvb8mWKhtMzjHWGx4NDWq",
  "key6": "5vSfU3b7zr93zZwaU4NXmRUqqPtcaU2R9G1bXpxEi8BnRj3ib6oaPo8Lc2evWYxaqRHKvJNexxGfVmXzT8nN6and",
  "key7": "2ThAmtfnfmZ8pTFJWDcEXAUxfkVKmjjyBQGJdnL6fuppsLznpAPh3jSstihd4Xseq8fZwQqZFDyCiBSD4us8GwMK",
  "key8": "2fje8vPaPHG4wDAaXbwP1EU96x9q9ExaazQM3uktKv1GrEmJEaTER34G1kVSm7CreBXxUzTU3hA73XtUNs9TAKF9",
  "key9": "n72tevUdDb4br4PCfDiFdkCJxcfmwuDYDaudtPnXXj94gfoEBy7r1bCvDKAjVC8XYmkjQjB41qQpbwHDamZtC7c",
  "key10": "5B3zaT6kBQEiDkMCPtMXngTnmiMk6s6PiVPjuJHvC2yrEAozBQ87cSKyWvZzRx7xwcQXakv8s8UcpBZJVu9X8Ssc",
  "key11": "4XWRLnDcxtyYD6k1JJGbUmFNp78znN5CxDepNB1mzPY2KfiiNaAishX27htpvBZVeZpTDvbu57oFX8VK2V9U6X86",
  "key12": "2q1bnp63NH5kP4PBVAVY5Aduqqe5fL9SYNq87REYjG46Wbw4WLsT7AyTwcLgpDXAbFmK6apJBTaouwbghf3aBMWP",
  "key13": "4mR1btg7tPc6pWRZ72M1CYHA9MDKZPSJKVmamhMFuTBmvNL4BrUxvLTtHjzCp8GwtGWNEpsHTa3BQ3ESNWjSk75G",
  "key14": "sFRS7tFywJi2RdSxxh6b8dfQxxPZqZX8BMWUqXyHwGfVe2a833vZUHAHohfof8EtEFns9GxMeX79uuS9xND9UCC",
  "key15": "25yGvUxoc8ZrWUDKeuLqzczZZuP7cj933bkXXUBUJCg778EqucXf7Bpz9uPfceUZkRHGqpvLiswTrCQfqFhy4mDB",
  "key16": "fVSXYKLwGBu7HHYDGx3PyVSqEM5xtAZ6niT1FAVesU59Asa3Y7TRXoMUV9hsdej6bZFWeAWPvxq455aP9a2dtit",
  "key17": "587t8TkXEtAQxjk1DTbW97C2qszASj8USdX291UpSx19oShc18ZtaWwTwYTMvrs3GdmixQ1Hvohs68Dyw56sgSg9",
  "key18": "3UxGc9HajW4sGpmmpc1csCPrqf5eHdWkQdTXFaAsBEQdvovZxLeVhKDx6uUjeCwaMSjuE1KHobpeF7FuxTMn4jBD",
  "key19": "2eGsptv83SsXUT5qsCsWPeKvGwDsE5BLcsbBRX7i1jzY8hTjjSJAp7xSa5bnU5uomXnR9ao7BpyzxSg7Ehno3ifP",
  "key20": "3Zw2ix14cJ8HhJXdBykyx24HpNQQEjLjxVWRX92SciJEKnVBp31vjJqRviHtX8a4JxY8id6sB14VL2GEGih1D4Ni",
  "key21": "3NGeD9D5bumjmozZsUZyAXhKnSnfooeA3ZdQmYKJSktEFa7WHVXRUxpYAgehtN2y7cvM9Z1gKjuqnfHmUACtCC1W",
  "key22": "4eDBDJ4JBJzt1bTDJvGcfETdTsqqyGNpwFTRruzkHBgqguQ4kTZPJcNqVYHiKK1xcQfH8joPEsQR1pjqbjsgeRt9",
  "key23": "2MnDCp4KhPr3kyEqnMnxgdiDPTDWqQVz55NUk7BZ16AoCA8bq1xeTmMb3WSYXoAwmVkPZsMparg9dyxEoxq3XscR",
  "key24": "4RvSMfSKo4DN7TzTUFEhuHV7ABKNM1bjtCo4SiBq81pP6h9HuJbvnBCqJTTVhoCGa7hqn8DJp6LYGUdp4ZAtqhrG",
  "key25": "4cSzrF7vBDoM5LSMhguj4XuvgMhBKZ5hRorE2bgayX8LAw2y8DTbYik8roFqGSnGKR22qhnufXHNc3BXG1HgF4ze",
  "key26": "5aQRuyQyWXrVtDKnLXB186E6PSzRVbjWP7niTZjH3B1mpfixmQZjsceUMudbEoxU1TLLAaSD7zY453ZSp16StuDx",
  "key27": "FudWJdbSrgyHDpw4TxJKvcVxxLBbNDCNuXAaRwFzA4wjZoWbdQpUVwm7S69sYdm8rsiLarDDXBQGy8kcD5qJ72F",
  "key28": "54YLoMsrygBhbYpsTrPpfByMDf3uKi3UH21nbbMGyTMaZRuV9ujujwg3Ki3psFKndKHqZrSbH3ahAnzpXo3DjnyW",
  "key29": "9fjumg4QUFSWYTEGXN2dcVu74mEL5zdraP4EpzNZWSVRxTsDi3sB9C7dNMpdZrQHDuLDJuAEFnYcSQfHoQuW7FE",
  "key30": "5vs6p2vAubDN4VbKUzSFPwS2eW8QESwuvdLrp6egC7wnVVpzwu6ui4x3WvMGBZbkQDVaXrTPXw53sXkzRK38XuF7",
  "key31": "5vhzHsUkzvGn9onfMM6b87jbQWczDRVdhHS5K6EVVhK4nyZs41aEXuqEV1EQb296dMnb8dSmpms47wftfKe636ri",
  "key32": "3XzrpukZZdX2VEcsoHyic7Q9uX3aqhyMMxufq1T7aqv25bkWH745mk4Ygzb6WqX2SHef73fq4wbTrJRpfTFe7buM",
  "key33": "5BneBpL9YEKdKyTmmiXhBXwEz7NAHgtaHPTN2i6TL4Jpf6dTG7uHKP455tTT2gwsLhYnai7QR9GjAp1zFur3oqfY",
  "key34": "udzrStEHYtgqcJBMYmcYTBZLXson4XPH5U9ryFYov79E1HnjVG51bU47NG93tcqFTsG88vk32R4nVfMnF7pE9rZ",
  "key35": "2RBVWDbitqFSaDSagVYq6JfcqUgwg44MEMaUpQuvV8S896Sn2Y211h9nd7mpzL1iNcExmGd2mxYhqDjRdvbEPGXZ",
  "key36": "s1eYkuYRCQWjyzy98ArySHjgTiQvw7qB1KfsLp538cEWKMWJEAfHLcrP7UxVDG4GKpPdFJGSXuTYPpuHnQofUDW",
  "key37": "2VkLLAAPzZrwfepNtYusrVCQVLjAfDDivT3KrjFCAngfXZTw6fpLKNTiVm4dRMvqw8DviHFGUx4kSd7xDK5rmUo2",
  "key38": "zoUyMEYh2mPtCYygVERUC4RikxRLLsFR6Cvzo1frajYdegJSWd13VcE6s3p7qHkdJhV5L6YLaVW5n1MQ6i8kASu",
  "key39": "2bR6i74n9dpYoiNjSA7TifcpnsnuUzmhHCnZcb3z55zV2EbJPkNHr2wXzPruKrYp2UcpYUotSLNa88hWeLLK7yUC",
  "key40": "5aB6p3iPbJqGKLNpprtekDhRv6L1gqkwF7RkGihnxgXN1QMUjqCYevjXiU6LcDyj77RfJKqiPAiqabVAfCepxKgy",
  "key41": "2a9MUvgLdK5ZtTTJXm8khUeQJwS4W7kVvTpHYZ22FBXUYw4yQuHmUUEt4CMDooXDEvRn82Yvr3nyVv8UNBa6ocaG",
  "key42": "3e7rthAoNADGLHP668rfU32ycZPQWHgjWSW6f5nL2LbgaPzijmNyZmQb7SDHZabEfyecGbH4pntogfy6d9aPFjVD",
  "key43": "5KPhKcS3uKadQJkSJrnkWiq6jDY2MkActH5g5ao7UVXztRMDWeg7tNskEcnbukECNJyzwvVNxVJ5BsDt1utiRP11",
  "key44": "2t1svkQt4kMtzheVbrk142BwtxY7u4uTErzTMZ3mfR3NXP4DwhV1DRd4vWPp2Po1WWwgnSjobWMtho8aQEvdiybQ",
  "key45": "bArDURnv2JdqCaSXoHK6v7YuSbZtA3CQsJALog2UK9eA6V7JpHGZxdDw9ygspJNrPXwrCs5R2qNVZywzZTKHJka"
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
