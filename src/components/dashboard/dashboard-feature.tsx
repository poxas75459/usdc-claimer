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
    "4JdpptBeRSjYoQMDsN14qon9kGkXC75Sd6kcKtsjCGAx7jRXFxC9TpX5vYJnSH8h7zh3oRduXueBH4BSvYREMyRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SzqgcH7tWXLDfvm8KsvcWAaxgjmMTtqwmyCae6JBA1q3AzLqGuHCMjvDq2tZAAAzK4WuhWpFRVEJxGgiTbbErJ1",
  "key1": "knra7fg2Hv977ESqVzn9rsa6cgcKAQaxuix3pVntc4LMX7UoNoP8XPZrAQ8iQV7YUXmCA7YnpZJgZtaw5oKGRFc",
  "key2": "2AFgyYZUm3v8BhwsCybyAnMwEvztrZqPFDq9mJZeZcMxGB3VuunWbWrS7BYbGC2SPBBvcfjGhVQNYUX8EXzsdRNv",
  "key3": "4tzYB5yAeukCjjhXMM85JHN47K8teWCq4SEjBokuLvJ3JfsG4yx5YEHHszA1VxL286d6Q57oT2B9FeEYkyH6Lrmv",
  "key4": "3DTLvip9imc7H5KNW3soJh2HUpv1KxrMygaakMeanh1xaffbYXfUtkZjEvU2QPsM6vLYRyUqtDXuFmW5LwkyUCaK",
  "key5": "2FdkghFo3icRR1UySH83N6mX5bSKApWMcvyWRbrBRrCXS7Kb1cGpyCDUVECLZB5uDWkGx1r7R3jQkffFwAtGKj71",
  "key6": "4X3ZBSkxRKT91gyKhq9TbE2uZvkmgfEib3k19tw971Cf6UVU14UnYdvp12CugQEWtGnZqM4XH31gMGirnRYsnN4t",
  "key7": "2wXpHnU9KmBnbH4ZCFtL5dNdyMq7RgraKAu7WAZbQFE6RoQsmdfXHgfg2Bp5XN7zWGLS8VN4jcjm5SLskki4u6P4",
  "key8": "LKM8ZNXPsm7JptsKP9yDso1NLkMUb8uCmARnEweZhGodbS3bDiReShsvSEjB8eXF39rxTHGLe4NgrczBzsHfJws",
  "key9": "ntwfth5RmD9XnyJ6ZDip5SMtJ7aY35JWNdRwkAtFZWx1be8wyo2jsmKAcG2zhhVEwoSXj6D5G6EhDcVsMLNYG8n",
  "key10": "n3YRh3Lsx1sBcNKjDo8nNTgG4H7LfeFWK9aFWNiY8A8WvqQ7eBWyschZSq1U2Ni9PPPjbmJ4WLzRcUBkfLmJJv8",
  "key11": "4Y4Q7Axdu77ckN8FMgXHwMBpSjqvL1XKDUHcM37ifgBkfJ3oA7LYFcMAK6zzbRrEH7ZbThLNmjD1G1jQBpVnqqCu",
  "key12": "2anSzBbRyj6DpH8PVHoNAmULm5zaocL8ZbmeUAhr16hh72SnccyFcRjRcWEbKTw31i2GMnhUEAz9ieBS98QvSHJN",
  "key13": "2TWi6aKFZt8ZpAiMMv2GpD1h294heGnANBTKRWTFCa9Ch97qJMqEUcCPyhS5p87qvkdKAdqb8RH9eH8gUveZs7Hm",
  "key14": "4aMCbdrHAyNiGoPRsCb18rEAh7HdZ4RwgP1ZviMT8KjKvvQToxBjGaNCKdwLDJjvzquV3L63MknTQoGKL8hKdbyZ",
  "key15": "3Vmd15gJ58GnLgE8mMSBsimLWsiVnrwe5F75aWKpyTECg5LG2R5CrQj47W3aT3uomoEBuePkJc1q4WxBDqUjyrkg",
  "key16": "2PjDZe6B6nVj1qM6i7B1zXVqtqPZ5PCTMhMzmNKUgvQfb6XDyZwTkS7zYZToWwP6CrSm4c1USjvseAVr5T433LGb",
  "key17": "5WRWBQRnunzPT1GhiWZ9pf2gVTHAsrVnaA2bmcrA4UpVnQwspKwWssw88rY5UpzR4PZFADj7hZZHzMs5VMHwZ6Yu",
  "key18": "676WeNr3amguKaMWN16xe458RGS6dMyjavCM69u6a1JYqeCKJSUgKCpuQbGFPv1mtpFin1NU4p9hxYrXPQscS7mH",
  "key19": "5EHJYX7Rq5nyjBhC29WAAeAf2ut9cHRwzc2qY673tkoi2vSnL8JwfRKHcQpcmyUZDGRjdVD6A35m3SSmP9oMzx1x",
  "key20": "4La4ap3ULZvBbDpXLDGGVxPxgxW8bQCjfWeQCSdY5hGWv27tChRuhkWaJzWeZTq8e3ABTBmBB6Y1rUMSdqG624U5",
  "key21": "2jDTLFkDLPS4q76wr5QiuKo4c2TtDfzcZmawWj5xrirEcUcT2xHS9ZHkUaxC1TkuBnsq7UrHNUaG5mGu3trQZjxx",
  "key22": "yXQEW7uPbwxNcv3jdeKfJ18hhpGwGvP8HzeCrwdkLJ1hYaShCmXuS3m5JSTpYVbQFTe8DZZVzfnSoUSkiVaP99D",
  "key23": "YE3xM46opCFSzHNynZKhUSmqfNeTESPqE2LyYdB2wFcHtgNsTv5qhBFuBBCZdWkWP4m189uVfLYxsAbrkT97A6T",
  "key24": "4RdwPPCEbix1b9bqTb7RQCC74xLVcbu1UBnGCskLM8kYbjbKE3w1ZmdP8iYYyZ5h3vfrD4KAULTZNiSAKmi1RCEE",
  "key25": "6Jp2riJiWNw77tgqTU1quH7iyyUhNUwjaHPEHJ5bY48GKJHKBm67ww6XB3g4PmPqq61wdPRsK2AYcFjigrDxZRc",
  "key26": "3RP35UFRsoXBvWTnVPSJeUphD4cNzAuiZyURD1hc1KcdirrR3v3c2PTXSGWTnhErLXybLS8BwuSbdb5cBtQhVuJP",
  "key27": "4gbPLz5PMcoxBbiLcb2R95RCW1FmjYmieEDoqNNYP3pbZ4NhiwhoiESWSKbw2rgo5hZtzogKUD4jtpU3hj8kEqC9",
  "key28": "5cnx8m3ZqXn83Lpr1VjHijV9vUVQikrrF41sk3KTbECtBC95wTpT8dfM8fBucGzqTA8cS7S4MiCe2dryYjbjfsxf",
  "key29": "5zsfLPkaTvM8sczrjDSb2ARwhBfNobvMZB9XdUozEjhDyT8RTGDC1B5AU1BcGP8kUzXMKHXASxg1sd7PCTYW4PmA",
  "key30": "5aDgYLh4NgdmiqQ1rvuGrnGDJxoSH9F9yQ6bhBtpR2DfsimE315sYBPJeYd1BVLgqPkHFV8UZa7ZX2zQdSEF3r95",
  "key31": "2ZDMwmyUT1ZN6LdjmQZ1YeZxmnxEb8y99ebm1s5s56jbpVwrc5gJ3WX1tKPBKzBxeRitjNv6k3LqMskHFeCGfgAL",
  "key32": "46vpxZxEJkGEdvMvqS6aPFJC1ZgbawsuBHiCYGys2DzE8qHMp2Di8JxiPsruhfQBRHND4t3qGauyLmuVA3aDtPQd",
  "key33": "5kcvfet2XgqLp8efwQiLUno3qxtaD7ViT2WxWY2GmUBuehEi3ptVg1SpUThm8AdtzRDyhMQAnPWpJgjbf4QkGnmq",
  "key34": "2dLRtao29rNsb1s9dnkkpNFJpgMEbaxFMYTemHi3yTBvZJZG5oVKpYwuPHsQwYv1EEx9Gi4e4XkeY9wxxZSkbZmb",
  "key35": "41S4VhF7ucakB4v9VaRHvoEpjXZD4TZSwGhHswjLU9WWLZdqoYZx5nUW1RaRPL61hh9BbCA5rtdJPMQVYR79vJMM",
  "key36": "3y1UXn5kvaWeUmqewN4M7iHtKX4DjQhs1dYXkRLTjMjVE1oPC9S8UJundBy3rLgkGQ2SUqt9pSJg1NPLCxBAm9X7",
  "key37": "3tz7Nxj9xm1USyMbXantjiZqjLMK8BNVcRbetox71zXjWK6bDMoWaXT7vhXMJe4VmW3QasU13w6AyV2huPTNdwuJ",
  "key38": "ERdAbUCeYfLnuAKDJ1k2QKrKF4agZ9TWTpbF5n3BkcSSEixeiC5oUan44dLLZz3LWsBsbcBf61vaGjGPKz1jtvr",
  "key39": "4FdU1Y395ywQComAibyXZiMCpjrkNv7YWJyCXfhQPorLnrrGfc3B4ZB69PBAX7xTJkf3xogf65BaKva7jzdZpYam",
  "key40": "59zAXvf1XFLGjn5TPnByzjRS5ifmkBH343oLWQzzbywmdU4d8BJN8tqKb1fRaCfbQbzF18rSfguj4eGnupbwN9hr",
  "key41": "48qnEiCtK9dbbitoTPP1UBuNqZGD8D897E4mDM27tis5SQ1NqGdrCY1FvJaGuMiv5tj2DHyG78Ahc4LHN747GmtH",
  "key42": "5e1KbqkRguHAB3XAuYNSgNJSEVdCuLENzbWEgMMmrzyoeFrJTn9NBTR8w8MSXDpyncbRXDpqU15KSPm9MWQhTKW7",
  "key43": "3d77JbhX4vS39fHZ7tF5Rc14ENJmtzHQ8m6hc1wFEDRdSNgrnQpopdAWtb2aKX2n3zgNQBeYh6JhHrrLdFhusLG2",
  "key44": "3dX1jEYahDmQ9dDdzkCKGLEo3a4d9UbDqAZE5gSHufk2mApEVsbatuHKEQ1gLjuiBq1hFpnoLb37nmGn3aNgN68d",
  "key45": "4Rhu4hi2JLW83L5NzqHtZex464QcHA5o31tfKH1ec5Lr9AAo1NQDKt4hx9ZJ4RMtNxKMcBDPdURUBc2UqXMMFKp9",
  "key46": "2HXmFgMnZoX67qcsLRDLtoqPQPthAodSmzp76xeMU8g5wS44V4ZGk664A6h6cs8ysyLzbYN9oqtHih95A4uhXeEn"
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
