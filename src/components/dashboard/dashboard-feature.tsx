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
    "3Fr3ktw72oH6Re6K4WD5xthYc2mSRzzKF7kfqh8Pex9u5EyVnWFv59GQnSUqpDh5xwpCrEtpHLTrYUQvBKQS5r3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36dcfxhobwG9VDaA8Q3CazHK1wzuPu4UTHcqkTw78xdoyJDJwj2uRwMwUkyzPWiRwSmrk3frhpQB5N2khmH7xYZY",
  "key1": "D9cZpncTMSWXEp9aje9vsND42HZdEBthy7z74G6JmKu4xTrXobYrUDn9VseUiMoPXWbXbjMUZnNdq85RkdU5apc",
  "key2": "3HLe9XczpAT8XVAJexhQ5CrrXLQtoc6ZqSrAizsNPSLq3rPum8CJb9XsQgpZNkbAuByi4pKPHsR6RMTLsv4yRoet",
  "key3": "HFyEdD8hR9fbUckdF2T4bBjKw65MWvQiF8836REKf4v8jdFT5e917rE9ug22hvu4N1ugcnru6PGAVCvgyYFvYMU",
  "key4": "2i19LTcCHzNKH3VBLrLgEJfo2YarrcU4DUGfgYTUMBKnAa6i1Vy2LkykY7dL15yBD9BhWDqxBpW9Q6xt2gLnqAHi",
  "key5": "kByejwCqDWegudCXsBnqme38r6i6mQ89X9bPBrSqdo5aEr4z3mx44548QPYnGCAxhAcirtwmoFNPjKWTGGSsD86",
  "key6": "EyYZV3of4rRefnsSjdQLJD8iSEHHuDkWoLuTAWDwGt2KBe5CDBRgY8wXVHMuiGRd4dQga4qQKoxusQ58AmH5YaA",
  "key7": "3hTPgzgJeW1vCcbAHCfWsypEFCtb4CrMWiGqi4EWy2tmSZesnNdUWsecs7vucKmntvZe7gDv9DnmEXy3zyyMCXLc",
  "key8": "375mZaRnFfbK84KkoCr7i3FqJBcDR1fEYTbT2FjNtXBRK3EKthkD1FvaFAPZqUGwQkxf2e4WZgWiVxsyV52V8B2n",
  "key9": "48yKid7xwHYPcfaNfyGWSNuawBPUNgvyzdvd94Hnv5v6afRUeinRcjGDokpZjidSxc3d1Lw9Tp2KA21UDvmrNxx6",
  "key10": "5bZtwiaEAWhvRaDHf1dgUj9qg76RiYJBcXaboKhP4ppLt7u8CHpTJ3NvZxwXn38VNxQZ2uDYw5vNTMCTg5LRvdAo",
  "key11": "3MBLJnTYzM5nfntRvpMiwXq2M55eQfcjnnK1CTpQ4ntYvxZbGiGfiVxGCeASuBiR2VNYVNAfSzH2P93MwcMqRs9V",
  "key12": "3J9pf9f7Bb2YYbPux93hvc3Hm6Twm3NfNeLgyfZT5ivCZ1YmedkfWUPnhpKvfMMkvU4y8Lr5a1qFP9u7gt63gr2V",
  "key13": "2z9MRuJEokiAxSmc12AHXq36oofPb6Vs9PCAHqTCZpskfnQpUwa6YULnhgXLRmtxTBG1YkkvtTHGBfUEftnJhqqp",
  "key14": "3WRGuS4jmm23RbY4GkfsTePvm2q7K9pQcVyDidhEDP6czuFWM2zX6RDA5txWGvjXLpfiSRr68qYjEzJiyK9cuZuH",
  "key15": "27dBp3RbtpFvy2538F5XxgDW3rB4XykZbd793ehcwbmoEHoKn1nHWqTUwqEGXKryExo7rrMyKtqABuF8gS7A6Rzd",
  "key16": "25gsp8detjn6akCm6uXmGGWdagTXs5A5Jnd4UZE2bjbsvwh78Vk251EHs5vyzem5hfpYu15cVeYzhx3mJCd9k4Tn",
  "key17": "3KJPapeXdfGThPAPqGBQB9F1XBxfe2KkYxqsCj9WcYrF3uq43Hn3mUC91kLyQBXFowLwydc7MUjWZ9jdCL6Kur92",
  "key18": "2Cm3C7BmS9vGBz9v2esQjAMscVHhGYrFrBPuRfBgRVMhe1MJm9znbFYaErL56nRqtRbM1mykBx4VEaXNm3xEm1L6",
  "key19": "4g3ce8XUshiwH5i21YYYqdyHLkBnCwYK6Q2LjWEPQvXoaYEVPCs4A27GTizYryFfkb7AYXNRaJzDpK9Q9FJxJWyF",
  "key20": "DuGPtD9hYtpPf7mjwbrDZGvmyuV2A9rdp3ytvjSNDEM6Y37bVFGJHncf87xVHK218i7FrnqDWRXAuc4k7ZTUVAk",
  "key21": "2H7Fct9PpNVh4xVfVdZtmBj9z7iK9UcjjkCmzUqtGM3YcVjMQVpidVF6NcjcryfD6ZX3gzuLHnTwLk68py5fTsY2",
  "key22": "5frEyg5hv3DwTHcz3jB2XM3QiJKBfKnwC8ow1p1pMJUWG1jroS5KCqJGCrSrVGzs4q2oXBq7XmXmZroFt7FdVdx9",
  "key23": "S6F5nfNdKofAFQGbvpboGCkfNBdohNRHAXzrVCiu9ZNjVk6T5d5HM5da35FN3ZYR2wMJpkNx1HU1eJbUJWpkV5N",
  "key24": "tdjZajmFBjET7yieXNUpNPLuxzoUsr18dRBR3AZ6PJtazNhdHEx3heyDaNGoKtnUrUhbGqNz33gpCdETxVJ8tFZ",
  "key25": "fzcvWYDvEdkBxUHokdGDvF6AtKnJCUjMT88AVNV4YHRJD6CdwLEQSjqfXCAeMXM1oZw1s9jVyE185Wztyotmc5M",
  "key26": "4JVuESxMBnwUG4hELHPsVy6T5EwnVfEKhfpBwVE6wTGMkHB4EGu4oXDqoUs6Qxemr1RdVybqjbfrSb77EaMAxsxT",
  "key27": "UeBhSURUP8wntPQWrfTTt4PArvd9UoK7TkjnFXc3UgnKh1jFcm2EzwrkFQat512aSR8LpnVho45j4dqM6thQWPa",
  "key28": "4S8gKGuFfLgcgL4dMm15tYjyJBo4VKx7bu6VfvK4NuY9RsFU6AUYjDZ2xxzfVbNMTAhBrgqz7fogGhhh4u2L87r1",
  "key29": "5jwPSuYSUfJFYDWvHTdU1zw3QPuN27T1viYN34F8tkbWxPbSN7QbtwEdY2j2mvZCiFZXLKLa3B2wrb28MD1PeZ5a",
  "key30": "3UcZubGTcgNgsYwrfy5TnpAHWyHTiGqfuBevhZnMgGmkh1u7gEpTm5dgN9tAQ4vFhZhpMYT1M2FJRV3RHnV4EnKb",
  "key31": "66oG5iVoeTPZSTKvCS35HXm8h6W5YnGH1BmGNUcwoobpVFWtizGRwYWD8QCKpCsHhbbfgitudZU3ZR8vU8z7U8xQ",
  "key32": "4SU1ci8QHdWaF661JksBFLEhdo4rCdyLcBr973Z4DzApVJqhxxT3bjAeAHUq99DyrtYR25SeDhCFryb2EZLhH1rY",
  "key33": "XRzeifn6btTcufaBSJvpkJEHFxQW1JEijvXpedHotcLB1WKgW8kVH4XXqRvdsHm2J9Z5WjSSGG4C5SMF6yMpHYN",
  "key34": "2gSDxooh1QHgdpr2fCKjW5iubJjn2UFweCvWfHaqx2EJ2BH6tc5yQH3Muma7vkgNB4c52Q2pkyPpA9vrcdtjLdg2",
  "key35": "4H9SG1MvWqzWBVFAg9Bq15wwwnJm438cDckoHahvL9Cn7mrp3mua2oKZ3vnUq4YehNkaugrEqMRW4siMd5BkoegG",
  "key36": "54eQ6WaxbNKpQXo5zPJzRzjoMgXN5dHuLsrrjFFEDje1CVDEZGByN9uGeWxMDnqGcPZtM8VLJdxKJCbbo1kfy1xb",
  "key37": "3KEAshABrzS6D5mn1Un6Rmkm71pH1GCpoPuSnT7Syvx1iXbyYqv8REBf9TW8gSqtgYA7M5MtQuNgWRxDRSTDfwyE",
  "key38": "DQMJrk7aAAPbXjhuJtN4j4eBviYQ9cxwKD8w4VrzhK2PHTgc7rDAm9p9kQhJWogHU5eLcPfDFx91GgtMBeNJf6N",
  "key39": "5Hu3XmbxWGGDFnreoYUjHeAKFHaa4gUdUWGKXn1DHjjzJTpF3nRiKe1m4nuCtAEp5315JFaZ5bexiW7UGUTtXChg"
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
