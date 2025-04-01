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
    "qXo6k5TmoCNipAfvHD3jDiaihNSkYaFsYChMDGzvEycEx9o5EU1H1cMu2B3PTTp4hJG4RfAZUmuymE5JgEPj9cj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9j7DyxsL7nki6vipntJaySThTYoWPPc8KUBUNtLBevYyVkSuDucdZiq3rZBJ7W36mGp98jVc22VqFqQtTKNfDEK",
  "key1": "289nkUHCcCBYYUQKT1Jp8wVCr43V4Vmy7vqXSour3kT889g7AytcbGV7L3iAbMXwhmNBxLGUoo776ZXHwTqb3cZo",
  "key2": "3fuVpezZQCYRijZgJwdjAzc27JB7xA3KoMmAB2RD1r9ehrrP3bwL4teC1vww4AvoKQxAjMUy9ExeVVwnuKdWPe6Z",
  "key3": "459vJW5PUgaVHWCkgbQZEVAhKABRuHpiJxNfS4bBt2MZ6EHEiecRyMUPBC39rUbv5aMNnzgyBJ6jPKWC9yApSX99",
  "key4": "3Nmhrz8L1GDyTreLQsmbTUNdGEadNYqZRkz4NxJsgwvfA3tCsBpqFuSpHudF1qxrDqJZ8Y52PThYnGwH35ki8Cc3",
  "key5": "3UUVwUxPj7KzVUdSKuVwBKABPzG3mdwqFQTbhbrG3ZVXwjyBF9oKYm7PKZieXDEuyHLM3UUR4W32BXviZ3oRkRvo",
  "key6": "2WgbeGhN1WNjY5yqDQp7SkbhzmuVzRwJa2diZYkUgjbdcanNvbPG9S83SA2sLDMDV7siZqJuDvSVSRBkpcnHTxVn",
  "key7": "2wji5F8Dpd67489QpTWwenvMqgmzNs9mbPnuDyn8Ks2j5VQuRHSHxJaMUpswgjBQtf6Kdfqds1F2gaMDUxxw3mhF",
  "key8": "XuK6b5FN5SB5KPZMX1KW3RFThN9nT6188o8fy3gBCvKegPsdLMTHc3zkaEkbTa5mcNByreUaB8LtZDmU2TLaYwE",
  "key9": "4mJndJnY8ZVVjqtRGfaQTEDacXTA23MsBpARTLFLAuTfftzTGNgBhn9erhN7NBNwHX6nK3qzG64tRua8NrQprZei",
  "key10": "a9MrTHUrr1tgYJGuaEhoL41oq7tVu7euQEdcMc5bW8kbSQbbYZSmKsjuzLDywmej8UmUgV9neVMwbiMaLRY59ZH",
  "key11": "2hsbHYJBs624GpCBwM72Sur6zQxX17jmkyfXjDx4utb3d8HumAxg8EfVeMY6fkkuHxTk1ZnvnekdBjK4XtkYVHjw",
  "key12": "62Wu3uWZwJpEVhxmxtk6eEH6NawUBagmLK9gBwNydJxpy29VyrwP2YxVxM2PNLsXw92DnWpFaBUrjqHymha4RuQK",
  "key13": "63npu39S5o7Wgy1Vwi3YbS58G7TnEWVMhtEcQwBuBTunnsoSh6wc5E9K6uQTv4DGfTZeQGXMgcvNk87nR529JMba",
  "key14": "3juQvYBiSrKshXiwVYLELsGFqtv5MNYmDq63NUVit8e4afXmBUhcR7wwxFTq5SZAKqhCPEnVTrwH5cDiYe4Hn8hh",
  "key15": "4GePzkw26aFcPxo6kUF5c4rQhQ1FyoWdh96Y3bjfxKiWEjuEiDjoSfhrmoHE1kZ1N8q53crRGjsswR14Fw2r83zJ",
  "key16": "GGQJx9PRb7eoPMEo31gPpx1kmhQ4kmEzUBVaxG28hq8AwzmpW48qbdVXRG6KeRGDLTcaoTtewKsJjXpuUy4gKy3",
  "key17": "rq5LZmVPtknd36rX1zcrexoERQsur3nMnwLetUPLEP9uHq2wf2cKUcMhk1Yvnk7p9q9AzseUwRw42WoR1kHbHWP",
  "key18": "5ftvFHgUMx35m79FLGf4Xo6bxQBDNN9uAViHLDgXGhtJ5P2ECVyNqocLstuvMhesEuE1A5UQDcNRnTv9XCSniVsT",
  "key19": "2fqFE3kbYcHUo6hMozjrX1CibFEaqNmGak9yiRTN3EbwzQDRSnotuZmZ8c8FF9mQRhSV3UZdmxB6ojnA1Gg1JMg9",
  "key20": "3343tvmv9k3NkzhDge7wsKBmhWPyQtCid3zqez7kCZRP15836n4eiNn6Eou4cHEx335d9etYpph9EjpQ5yNsBoid",
  "key21": "3a3U2q1D5spzv2JXCQ91aodsJH43jKwQ1iL7AgLThzRa2uwktUBRGNSFZTq7iR4gSurTkME7W1NuARYxheDhPDVo",
  "key22": "5BjqSHnadgsJToDdUTELUeVuCnjuzj3NNikFF2DHvXikzRh6Q1H2DKapBK7oTZFJPzSxmtBmjztkWR14b9xXhFzf",
  "key23": "4ZZAtqXdAU7oQy7fkacAd77Zgqn7Bo6JWbccKczRC2Y2JLHu1t76H9tey4PthkJpnG71QP395zH9WccvNcNcMxZa",
  "key24": "2S3tHkeorBpmscord4K9kaRjWSnkTSJFByE4h5bTy2XDNsSpPLqYtf7P8wKggfhA4gMVm6KSBwyV3dZx65AJhnYz",
  "key25": "5SakGAwnTT4kRSHfwFjgCWHxAiFdGXuUV2DLJmUbT5DepcrM94RMWpHBiRkb65akQB3PPxHFb1AbNwfYahnokG15",
  "key26": "47EHno9xvQGotgqPMPXag1VG2TVbSzcqwTo3TFnnzhkR8VhkF2UoJAHnowvDbCn19mX18LTmUPoM8TLu7fkhaNbh",
  "key27": "3YLoc7ugcGK5kivTKuWaEvgVWgs75Ma1jD8L8nxa9ghFKpZZBFkSR5BhaaYpMjxE1APUoEN5h1k91WCEgT9r58CB",
  "key28": "N3NzxgfTzNra9Kd7zVdWCqVd1MUCL2CKiY5gcufNvb5gWeWzbRDDGL6B7BrRkn36AUZggLUYhQcmj6wC7YB14qf",
  "key29": "3oLu8dPPppzg92LsD5GzZPbvSfBe8qnNpuLi4WVW6A6gTgkAseZuGAaEmi8GZ1fLLBcW3ubPYrHPHgX4NpHtZqkg",
  "key30": "3NCJMKCByqg8kM5gmdFrweLz3punThdeySUiCtEMAAdPcrb8w3jGNbXCxHnvETTeWG8sYuMV5Vqh7nn6xSGwHW1o",
  "key31": "4SLaJSY1YwwcgD6XqK1RveNzU4GKmf7rGU3DLka4GCrzeBJHpnxr8AzwufXj5neKGa57ebjWboVtLdg3Xu4EegET",
  "key32": "5p5Q6sio5rjL2617XJ4TZqYf7YMChcddc7ihRA3nChcibA9ScZG9RqcuGATyqur8YfwPpjzRSEZmScUnKkFBGUJd",
  "key33": "r1CyVjrL8ByeT4DTzwGZt9HtGRVuDXLJmbL3MYbbtDkSNRuWbRtj7ztmtJjZ9WhpjFWMGNVwQzmMruQB6KjSsVJ",
  "key34": "3qQWXKrKeSHJnR3TgE9GC3337MKCorJxJLFMm5HX1KYHgA4ZXRfyXbHzH8S8WhwVJ6AZWRpbzqaxYqEAKARobyKN",
  "key35": "5eireL2DpLij5oUYNVCGoeNFauAMSWAisM9TTEXeQb4d7f2bM5wVbnaCxjhyjjauT62fGNA7YaGM1RjocHDD3MGN",
  "key36": "3KQ2tkPUu939dvf2PLkVPfACFjUXSko4W7US898rk8s3Ng3U79fd7sGf7Tw6dzf6nW6VtYJzDr9ZUnYJAmygbabB",
  "key37": "3YnMAd6FwrVb1VT69ZfCN8T5ZywrTgRgVLXgvRMo9ud1wYeuBWkUYpKEE7H36FML9LRXXfauVQjrwJ8BsxYnrPPW",
  "key38": "4LAmV472S53TEKm8pw1bXnpukoVANyVeofXrtqRmvimXifFBZBWPKVBtLBHQ3awvxvCwKcG7ef9ky7ybEA8fSRWj",
  "key39": "5HnxU5kr3tW1FDmGbKu31N3BDtqLuFXFaDxw2r6zFqXPYHZuTFw9dWEtyVkUeAqJQE32hus93XmvyoHiAnnGcidB",
  "key40": "5Y7Rb7NwJx8naVifLqC5sUdaJ99jBnMQg9uC6MHmc2NVTTTuiqG24hKeZnaPWrrLuvHcG5Q1JkBTtfnLsTxXu7z6",
  "key41": "3qFtsHpX3coScePDPjPDgtrH5iGpmTNcbPXrtNavXVgexiZkzSPya8zSonnBvguUi9uY7ajoxXW6uxRtM5Ta9ZWT",
  "key42": "35mqmyK19oXVVibPG4qAVMerRuLoErMF3Nv4pUjaHxrPeYzeoWZ99D4FsBb43bzk2KgWdZJCXj6qDif1m6tam3of",
  "key43": "2Zz1Diu7rrfGwf76bLKzcMwvjBzMuAdyNDbGWVK1hdvktZTX9AjteWF3bbJUW5h4hcy2oFsW9hLgwnbYMGtLNEW",
  "key44": "5SYgPW5dCkz3h8PPo6D8EfMeVDXgzhsLkFNpwPgep6UsUQZrrtK4rKz75inpgKx813ZwGm9nfBu3PiEWEo4bxzfu",
  "key45": "ftJFA9uok882J2ejXGdyEyqUfQ8y4oALd859SGi9BXnSNWWUFrk1vD4a4n2SGmQvwgP8QC4wmih9Go4dsgXZLjB",
  "key46": "34vS7Uhg31eqYtpNxXQKN9DbidgPcTGzsB5b9dhYJAjcCCCfwXUT2DjtYshiriKaXycE964WZVpRR8RSnvyEtQMH",
  "key47": "4ijWQupaxuKzqWQjMjxYwqhE9h7UcXFcKW8iYiFxxzJXhHfHEXAjrM9zDKNiJMxTfJnTnWaZFmoo9gHPRfuRv7qa"
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
