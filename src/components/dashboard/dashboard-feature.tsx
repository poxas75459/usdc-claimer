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
    "2ickXj68WZKvQSCbUHkGDhEnk2UfK5qaK17HbbzTrUDVWNBwameNV3sXemWRZCtkv1subZLvZhpkxGWHdgjg1VRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dhEac2mbUyypNv6CpaX1awnAdFfEbkkW14H8oFATSkYMVf1QppZDGezcqF4zTcqMzL7X9chApA3EMVWDRAk538t",
  "key1": "5sxHG1o9aDfrwbkj59Zq8AXQXHaVHBHCMKWeKDNS7QJCFvMzDi5mHfzd1J2JLE5zx11FWkyiSzip6CZdzfuHPuhV",
  "key2": "YdyE6D5AvnsgErMQjmuUn3KoNur41ww63KNnT8NBVap68aZUjzk9ZZm2xYE6KVreLt6ntmbXqh3UmMM9zfDfvMK",
  "key3": "Bb47Eozae4TzP6xqUdc354bpuLwSw9dhFYDWfGXDDJaryVra7eYN5kojthWL1gU5A82jSacLLEE8zjQXgPPJXea",
  "key4": "2CdpszwDHBqDRyLFyHUcif3PkLcpwteG7Vftg6dV3bHawPfJVLvJct5t1QtxXwwUpPgj4J6r2mHm5F11jxtqhDoo",
  "key5": "hFbqtVpzNGye9vw1DJocGhwas6RQmjemzFuXYbZDJ5cSJNMH6RPG3EnQW7Y5EetVyvtRu87YabGeHwbpfxj95LC",
  "key6": "5kAh2HTXp9VJuykthF1bkZMQf6mXmqgv2qKXdAPRowNypVD8EgPSCyCvFx17TLds7LH2uSf4f5xHWun3qAdch689",
  "key7": "3mLxoiSMgugoZDfGe3KQXN9KUPBFhQZTPvEAErWdRN516CirhautH3DdLEJkn5HDaPDia6USMMdvL68bgoXVs7tU",
  "key8": "6VizncW3N15K4dTGTFqA8g6cArjLWpMY5AzZQtTDa77LnZj3gQfcJcXFtNEUdyqa2Rzkx2MHWhihKNYo9mgq1QB",
  "key9": "3D8YiLjTkhvFcZQhKS5uUkFRRB6xUv6EusN6t4hrfWw8ZcNY23wCe1jMF7zNpQ8FrvzA8JVy7RjwH6FLavwHzCRe",
  "key10": "46Vm366Pkwav8CvY2Gw44zbEoa8MotBjxt7CWi9x5jF5YEUyXhPF2UA5NkazYVwnsyLaRBLcvW9i7AQVbVucjt72",
  "key11": "5MjTzCh5bby6bcRzoZjbXgFP4gPzQ3HjjGjEWQYzUJ8Zmw8BPkhaTTdU6rASPLkvrUw26iVFs1mqiaqd7oCDToVK",
  "key12": "2ADQDeiHg3235p8mC4dZ7R7YSYp5tfAxsNEQSy7WdF8Pe7pyKFbvhtNhrbqnR2ybLpmfCVFgUQfQonYZZNCRRYPp",
  "key13": "2QRDSb3nNde4x47iCnujb7XdFWb1dpgaXgN3GsH5rR1TwCRekDgqVRry7NehScbJLNukHnS6E9ptpT3xvwvv4LJo",
  "key14": "4H6TtGBfm52JsKCE8NzUDjxcjxdpwVo6vBYrqWi6mqibeZ8XPZznUtKbsesg4ABYLKpAjDAREUzgLX3sU1NN52vP",
  "key15": "TTMdH9XMT6VTUkiU5UKbvWo54SycezgN3EQLRy1if9rAtKeRn7nHdgjsF5aexYDwAjozP4ynQ8NGEKcX5w2BsWv",
  "key16": "XT6kgMc3a7LMooGSBXhJ5wNoAQTD7QkEBYfzxpFuLTGWpopFFhiRRobCbNcmuDeYtkQvb3iGtwidqXCsQrVWGFc",
  "key17": "4JqFYsKiss47jXu2Yy1bDCDMQnS4HguWKMDTdFHHqETBPFnQWUyCbZZPm9gbhJCUxXrKdwgqraQHyJJyTVEA4xiL",
  "key18": "5CYi6QhcyohufBFccXBGiCPd4mFDpi5sDh4Pfc2ZHgTGms34RCvjYfSJ9XMsnQRSv9tuQBEPL9Jxgtjg1dKjPiL4",
  "key19": "338fhFNSMetANRZoLrbugfyRPQNPiraUtfXudhXcJuLDnXcu3o7kGggCTkw6mirbiQzUCZU2zFNQB6z98fPj2iRH",
  "key20": "4Gr98vAth958EXmMjprAWmf2NeVbK9hvauN9GUDuhvtJFLpyZF9Rm6GzC1FR4UqLsNMK8vdmkzrxbEh5Jf4dtpyT",
  "key21": "5w5kE2XYyMFZUsxqAsvFKtwxtbrwTn6rHin2rCRxXppQWZjkiZsDACKg7jJWCZiCNJUjs68v3db4prJrvqAmi72h",
  "key22": "5sARGJvKofRMD55v42RX62YcnDnKo31AgFt3aoweGUj3bQYgdR31zT1Tj4qUDVBLE6XP1FxKyTy9Jc7iyBYqo5ED",
  "key23": "2ocgM7U6kkanVpSQU5PeNYkrdxFSyLUmipqHwh2wAampGc3rb7wuJYugpafHjLtcJTL3VAiRUvvL2zjGR1hBki8j",
  "key24": "EsB3FMcXq53RBjEfLnKZK5Mud44HxijaMSTjEKWs5Q9anRJGaXVLfakdw7VrmRGxu2r1BYVuDpiTve6y3QSJUeh",
  "key25": "EPZpH4aHuGqK9AUCg9HG6iCLEdRJ2qLdu5mm1BbisYzk934GJCQW6YdxAQ4zzKBtMANDFvHkNtjPZNwoNnjkh5d",
  "key26": "3VXVk5MpfM6EbRWLrh7nfxnXDWDBuwBeuLKVGQVhMCHDxmsKMUTPRNcaipnwDf1wF8AGfFE2cfdqF1HV2QxfY4xm",
  "key27": "cei1gnuZHfTbotzE9du6qg5ywMksQYWhY8kT4KvYTSnhBSbzVB562SRUGHk4tmmQ19W8qkcTAGjv63HRsvsTi4u",
  "key28": "5y7ouAuCnsdNVT8GWzzY5ua7u9Ui3RCAifXn65PmHsvN2EiPbhE34FTTJuCBWcecsHSvzwxNWMfPwqv3LNreU76N",
  "key29": "5gLQUrLuKH2T2QgorGPXCvnyKm725KbjMcPrEXHHQTgFNYVhz4HWjTPNmDQyzE33QpWoNREJKd337Rg3bTJMJptz",
  "key30": "5uuB6pgz3NrnCBjP8jbGvsRoTMNvEAQ78T1SbXeikqhFcqRHDitxspwtHzuCZqnhMHu6vA4vYxV1fNG8Hcs7BRVc",
  "key31": "3eRdCYNJ6eGwkkeKNFFFFssirVsbKcNq1XiK1QrPUBBJ5YxcFPWXpXTkQQcui5QcVEPHuzDikpq4uUBDGqgFK4ER",
  "key32": "4g6A91FyF7tArD2B63WGXgQmEBkdWA751K8CcW5kTRe11fpz6sakG3bU2cEG5gLXeXgufCmuBJRuvvGFVMC8Zrer",
  "key33": "3zMGUzbdB2eptPpNuinZq5GNy9wjobeSJxHfXhpnMCjuec2xSceNBMLeRzFxvLKbebtBUf2iuLLyfALJ56WFw4cX",
  "key34": "62c84yAZLRGtozez11XE8hUmkroD5ESrhgfSTMEiH7zeQCAdRrTTs17TYEQFMFEd6vHHE7HWd6FAUNpvC2YymSYT",
  "key35": "AcmBiBS45SpmYtVF4kn4JPiFnWR2hHfePHXx6kjGbCT65WgFZQTQqe7bnbuWfjXuxBDXSEYQdnX36tTC6Gyqoy3",
  "key36": "qwW2St9GoChte6xe65gzvWoJJQYvDgqEwnmKtRFnQHJvG5F7XkmgkWrm4622apNrWAEewDG8BuegBJVvhgqGEkS",
  "key37": "uxmKBUkMZaXkcVikhjptYEQqK7UqQxAsQHaXCKvnUEwoKvRjEMCfhdGYLZs14PeRqQo8HeTQXny3HqMb3EGPQRQ"
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
