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
    "5sHW6pxG1biC9ABuMKg3W46FjGM9oQBcMwBRN2yxmkvizqD2BoaVhJDRhYd4XLy2EW2ZU2Sb8XPYuT3mpQE6N4xJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PNBiNRLT5D4ft45XZvw24KbYHnMtNbcCPeEyE4MxC5sGtD22J5EA4XKV9jjwMQbwmEJZqf3KarsFwL2EZih6YQz",
  "key1": "2N5qCqVUZhGLHaxC46m49wJBDgYv8kqeeQTLr6ey2JKWQB1XG1JZp96wvt4QX5dJVdKssenhq6QjQnkp6EsW41tU",
  "key2": "4L92FVsHuhM86bHHFciwGX3J97KvCa8nnBQfEpNbCGFA6PNB6P2tf63nMSoeNru5Ezfa4eRM9ntx19w9GW3Q8Zqo",
  "key3": "33zGAaK1uS5E7SYAe9ypMPanF1VJr6H26e4cvgBcrpvQ6ipHZyeZDRXPiavmSASjmxV5uVaDNPRRsj8heyrHH5oW",
  "key4": "4xxLohjre3CfBbEHMTs633VWYxmcPLPsb7hgUejKmQn33ZaC8KUKQKrGDfSRsyDMtukrY9jD5UPvW5u4yttwqNe1",
  "key5": "3tvnvTtVp2CJyHA3aetQqaEBjfrsVFZFbQJrNYVUqEVrcNRYkdkCg1Zty9CmK8Uf7FSGDj9FKxHx4Mz2v3JhVZ7R",
  "key6": "5jMJXLSNLccWhGZBoCtSYBFkiT56EknkGZonoX5gHftFayJULDgcoPyvMZyxakcQQbSqyx2T21LzVhRL3PPq3iTP",
  "key7": "GYMSYEERg2H8S12HAJNHRbL951R2BWmjBDVirErxzN1g1419jucUnQBCQTWupsFuxkHJMZ2F7ABjDyvvGxi5adg",
  "key8": "55w7J1FNCoJXmnf1BRxLBCQtgof8bciWvG1W9dnh64W9GHqaX6zbm7fyY233h68NfJLceiMR6zHWq6YVqQfN7V8e",
  "key9": "4WqdnSy11qZDzn1viJ596tskKkkH3r4DGAFVzpzFWi4g69fa8zFkx3cQcJDnjgWzowN8oyKKE9oTP3HFihvTP2LJ",
  "key10": "3CFJEbtMgEQApeYHJW7zLHqkMRADyXCL7GPktJGhg6paLxMiksbmGzfdPyMdzTGAJK6sgAyve1xBsRyDzddP7oPc",
  "key11": "22YuV5txsfTJD1mUtF6Jgg6au3oWx1U6gh1cWMaK9GzD9uqeGi5qi1Ga44xkoADdkgh4ZgtnUQdB9L9JJxMumKP3",
  "key12": "5oBy7td9Zz7HC2i8eujyZocfnPVGs3oXgRxZSE36H1cLxW97dJQZhonMW6oL3bt3nJeybub4QgvGsfA5eN3xhpY1",
  "key13": "5XBbE1fApPdjuPzq8mVFpGqx3bWo98DFu2yAY5wNkHdV11yQ1rwddLqMr8yAo2YafvLQxaDAPMFRBi9BSKTQFbpX",
  "key14": "gR3GbBE7ubsggyJharFqQUdw8orNC5s1vWL3TRqzFXJE6a5CUZ1nwKN7fn4uzGBZhNFabguoneoLauWikcEgYs7",
  "key15": "3R85zkjwekYsUYP3hh4wki59vimhFu5RZ8wcmRQqQRb2tGGaJARGpZK6k1arBvATHukStFCsCBCAiiKYc55bG15A",
  "key16": "2h6YZRv1hvajmAAnS7ehogUg7m52TUq8rnzeLVXodVaGmYad3QHQWj4UX6pEHCGLxpqfnQnNaMrBW2g1TxoAPx8B",
  "key17": "5tux1v2wEJbpGJJsNtrryRLzBvzUcGQdEyJ8fqkiF3m4bmbpuTLjgMpUbjHW9tfq8aXJMFiW6RrgjbRPpGYHQx3G",
  "key18": "3cyWMskzFEqHeTUiKVwNGwxdULDfFuL4NdvZcxmkRKWYjxvn9KLE3gxpiaYaiH9sUzwRjJ4nBLoUrPzB1VLXNsHt",
  "key19": "pbYMj1b5YJm9CyUN1ATRCWq1CUYZGM8rGxNAjf44nmywX5BeDhv5xdS2SWk8zU9kjVkst4gvRR3PzDD7jKFaai7",
  "key20": "2bphrhwFtFr6cfYhA14dENpZeQfH7Z67jLtJh8xDtbi8zLtaHUYrb766sCujG1r8HQFqrEZUjWPu6AZeZrSR55an",
  "key21": "2EGXDva9zLfCJNLSzYKBNYq1bxviHkZXCqR4mWP1X1AAXrbEC1KRhs742PqD4McHjtNfZmf3HcurfR7qnR3BEXPo",
  "key22": "4iQDstoD81QVKR44nKYGTfaQNa3EcmoZHUMV7VyPBRe63Z2mnKmNc2ncXJLTMyoxJ9ujWcHecypXVxUJ6rYCygdT",
  "key23": "2EHnWxVA1kdEykim6QYZnNg2UJMsbsi9kgh3CeCRyfZefkNErKinw7SeynskxCA7FDNGAxpDMiS9xKEVhxbtE1aQ",
  "key24": "p7vvtKaWKQiG7P54C17yuPRg6jPPmqD2ogjmFakSPUXnnGgEsYDie1ToAcMWEbeFDCY4fRd3m4bLB7D2max8Wkh",
  "key25": "41psFQv6v7GUPMhWUQw1F78NNzzsfYCvSA8ieWCRmrpNBVRkLhUcAccdKFwiHTaXMycyMF2nLEhT3xcmLNm8E9hz",
  "key26": "MRTePi4Gwh9sBi7tpoSoUxvAq4jXrhCcQXwFFrxf5S4Acff4pFtMnFUibvvb8vZBur7c3sc3niTXagea2hy5pEP",
  "key27": "3eQWvbMBwZDcwqfTcx3svHu5SpnSXfqbTEv5X8KAUtt9wYwCxMVYhEJsEBq8no5877VatxSVgiVqpmRh2tYFJo3Q",
  "key28": "WhpYG1CPWrjJ972e5EY3Z2y8Zw2cyXGWy7jRU8si7X4T9N3RXgX5JeWT3qt3MNqabmzfRdUM3smZ8k6UtNsADkt",
  "key29": "3mQijgiaqTZtTttuVm8e4yadddMvz9ZpDKJceiu52KQTRj3UVnBcJj7195AWoST6HrhjSmMkdzAAYoEhmoTbYvBb",
  "key30": "27UxtwyXtPMqoeXGTh61UbuJa7Qt7x6C47JnBop99wfBcGzfgyHEPsQgRu2n1UU4Gt411c8tA4Fqm1owZXY9tXZA",
  "key31": "57VrN3y3hH2beAUpjpXvrkdoqcXs4F2muJ8zAeuWWFGXbfyErvg7djYzSc15geDZEtuWh7PwXypqXVccn4h128Xs",
  "key32": "3yPfBGdsBiosnVsqQoq9n8aBu2oVpWksR2qDLYBQLyi9EpWXb5bUHwRv3T5dazRhpxFy1KcD4WYnn5zNhMfuGJq4",
  "key33": "Fmc3PufrfGLk78rewEPSH7eWq1qNAnqb5XAg6ABwoST61m5f6wcfDXXJaWnGS9cteDc65cEJX4qgX7jk2Z5Y8uZ",
  "key34": "1VdvgEsiNpsicyc6iLxSVnDRviS5HWnXF6RyZmNwhVKrxiijWLS6NS9jwymfmgKdc4yEVn2qrZ31kVaZ7kyZbap",
  "key35": "3ttz7CUJq6BMUT15uicTVythUqpxXXP929AcTNBTz7z1Waxs1feYeCurs1WjBDpUs1uVis8unc85q8JHhvftFvZ9",
  "key36": "31K1RrspLshmjCi5oh6HGQ7LjXE7YXqNgqgJsAATYAzBasgBEeNwzb2iNZ7Ct8FTpSrPJYwsNWMq1zeEGLq38yMm",
  "key37": "4yCycyLXmF3RnHdcNVyvK3doifZJ13yf8fnEzpDWbe6f5NZmh2eJLPTkqxZqVQGAbsxnd3BxEE1bBujv36kLdodD",
  "key38": "5YrwGqpu7fCLWByRHHJss5gaNrNRCxEaxr9GeterN3FFJdeBNv7qtKAsv1Qw37UxmcDuBBJzuuwuf8pS8WtAvcow",
  "key39": "2iYKjFX3DrSERNABDsnnrLSeG54QEfLF9ow9k1hSQ26XMSdTURyRGfQEmeA9ucYECFcTDv2MgjbTg9LL1STzT8bM",
  "key40": "4r7szeZN7DF6QqYtB4SzRsAQaqNCyoSPkJRz9nnzdae4Xbjjwb8gqK1k8ksLojT7qJ49xG6RCuk5JqQrmGdxNzrk",
  "key41": "2zXtvTbv4U3quFTGerqUc5En4ntTjyVe9ueDj2SDEHik8XCVhs9zYYj6vMW4agTokswQJQKnzvPHnN8TN95rPjQP",
  "key42": "2mCA327DKcYJt54XDMvDJY77jZRn8P5pG1Gi6ME1EjKNnBQV4hqstt3P2egMi9BunMW2tB1z3eNdcqtNH3wd3yRo"
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
