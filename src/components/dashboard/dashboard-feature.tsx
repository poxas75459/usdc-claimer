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
    "2TjBJGM6Y5N3VxPRwF9XzQU5j1Q9Gga1QgY7WA1me89BgMpXiUw1x8f4dci1UGi3WHDcVSPnFec1rZdaScJaSxZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pfnVB848a2EmXjMyUvWUBjuLEemPgXjxY6q9aN8wdSeLgR1XkqU4gDTx4PFbTU2cLQDtiDSRkLxMjuVSrK8joe4",
  "key1": "4tDoHRv8GRGZYta9cgJZhGP6v7uVhd9UScWBaTcdBppcoZpmNYtimiACzn4BGBKaBahsBcWVGobnepaKq1kiTTHX",
  "key2": "3iL8w2tJYnnNrDcg596t9B7irLUPZkzmtAn7sPbVpYw5LNBcPmRm7PwGdbTtvSauJoN3tHAw1UhAfPZXSsEhvGJ4",
  "key3": "2BomDVYuKHwnwscNLVVPWRG7ezNo1ehqFBPZwztqE1XwCDY9GgDxfPXFdz7zdiwH4CFiLHBz629YsAMjLqabDgJK",
  "key4": "3YrB8Bb1BwCoWQaz6w2bmtj4XPcikWUXgYYmABAksVLKDr3izACvxvDn6Aq3gq6pky5iy1qJCHD7cbPfYMTjYPMN",
  "key5": "5EZhNUYKDdoR66qwutiDCTGmtMHpPfWivSTvDXhc7abppi6uEe6pbaqCqAqR4n39qQafBuARhWvZQC4rR1ahhPRt",
  "key6": "2AhNtFmkkGtC669rrE1fcnt9SNQc3b6uXpdnj8DXjKzpAypuYSjVC17mjHFCJertxzWGV5MPWuTSv9ZQUmb46GBf",
  "key7": "325eHRa3hJCu2yVijXm3E3xYnAkAt7fy8uWdzdaGGAk9by87gauuPnQo8sXXujaQhcBGfLEmacd5JMHhdXC8URq7",
  "key8": "381VvjJnnktyVUS6inhnT4J4ieLYTaYaRRzQZE9AAkCwdVJENWZCc85NjZLYNdqNcJ2ra3WHHrBazPb7jKAqmom",
  "key9": "236dryFxaY5CdqpBYXp3tRAndaMFyHMSEbwBxamQeJvzYGGESz5p9LKLdyDi3bvqpRdFFGY6woLXs9uV26w5Zfb7",
  "key10": "3T51hmsLStEvipAs9xuuKHv2R24SDYgmWGm1VFP6LyxaV6pZ12JbGRvT7LHg49A2twkVuujczX2wfjeGZNZLFvJ",
  "key11": "3xkBR2HU6r8YnZqUYggiU8hRgkQBYyfXU7LUQ3LBKthn7JHRdEcxa8sBcQub681k1Z4vUo4WXtHWZSwpVakoVMr7",
  "key12": "5nwKNL6z89vxF3fvCYxdgX4GUAatjRyxHEdNnies1hYRRdPUdj3nuZQJvrWwW9jSJQD9vb3N5Z2SBD9RjA245KB3",
  "key13": "4ofEdbdUQmFYg5hUneWW4shmhqfVuxSs51DA7cc4ByP5m2c6S9EVBPyG1jychFPn1PhC15WAmR9uEPKG3quUUq3s",
  "key14": "65kNbi79ukge4qzMiUtGswkBT1EtdaWJx8nWi4hLCknhYBPakpnxyVik4wWtG54LtTuM6eawshuFPpHhZQ2HUJNn",
  "key15": "5FEH5r7k4ajUiwTnuuRjfbPuguMCzdRfZaHhuSYWdd4cwifctwqzQ884RQATFmRcdX2hbZGVNEcVqZqk7vnssvMJ",
  "key16": "4D8N8Y8HXkiCrq1w761nvoCfdEfykBPxKvygzNtLyeqpQEyYjPDfrg7r2JABXGT79y4kzv7akAYy3vMdrN4dgQUX",
  "key17": "9mmc192tHWoM3BLyf9Y75KkFWajDhoLa3ExYT9TSjh4z6FyMetqCkVXrSzMDYP2Q8wfRgwDJFQz5KKzpbXGGubm",
  "key18": "5WLDWyWxZiUqYLyn48D6NeTFnywNo1JVYn6juG74kUT2ve3o1V5vZd1nF2N8fPqF4kGuAQkSuCwrRpa6F4acBUdN",
  "key19": "4oTPc4fvrFQnnBVvknVQDFXAf6uNFJmA18FL2FpG5sdUKmRc3SKQ7pap3Z1WzZ257bJqsjuD6HLpLNF51awQueE",
  "key20": "2GhiHLx1CfC8VPSHo74hH5g68aLGkr3xEyRLq9nUDG7TdEjvXoaGDQWeNWG1fzrdw2Zymrmf7Xkj4iD55ssUKUS4",
  "key21": "3HEDP52dpe2wQH8aaVLfZRFJ95mSMpE18vNF7m2ntDdVYLkqF77XihRVw2toe1C5FGpctTJe62TCkMZCVwJna2bg",
  "key22": "4RL5xgbjUZXGQrmLmAntKzCQti3wBuWisfUFw81W8zSgQyxasrqv2jV6v9zHjvh6iVpFwkBeFaUu1i4zbDqbegoL",
  "key23": "4kfxJCfwHX3ZZnZzuEa28pbF2NSEixvtzUY7EYgEeLy6r5gKTEVoTumnPBPVbKBcHmefmqrZm6N4NjtbuLpbxGrc",
  "key24": "2cdCNmPuHp4zX2CWmzvpz7BQw2w4D2sDYPmkW8o7HJyruybLwNSE7Sv6UoaKmTwY3o4shKBuZGXQQXk2FZzik4ta",
  "key25": "63vvfkMn22pe9UHMhYE3QAHoBsBXNaASkK2K7HR5ZpwuW2BuJpervPJPdqHqQdkFHh2qezW1mbC72HoCt8ULesge",
  "key26": "2BzNo7X5uocjT41rW36XK2Seqc8YaskNjvWvuj5H8JXXNREGpRKwrT2WacrfgE6mVBHFEodLDmsH5ifdyu5qDxRf",
  "key27": "3C8TuMqqEj71Xy2nGTLccK3t4tQRjnwpPPeK4nopjNQEH7sdNBEsJg3MF3maLs9s3zSz4mPvmCxktYiJcM4yeGti",
  "key28": "4opf4FyuF9RXvD1Vxc6TncxCMxefBo99hNExUvPCYJ4CDDbsqiRnMWtF9aQ2Lyrc7mX7FyKpCN2NijekLGxt9US3",
  "key29": "3SMf5U3Cv1u5XxCtkkguLoc7Jij67HsvtS7Bf8w4SpHYpTTmD3ty5maHWY3ndWcYsir1BhAHwo9HnQ54N6icqba5",
  "key30": "yG6DPDcWKF6Fe4a8K5mbFavxJCAmpi7rEhWoaSDmLyn4suKoGecThYZaeQANrxFrTLJHaRCPxkdFzBjtojrmKLZ",
  "key31": "56fzs2bZ8ehdxR7mLMUWaJRQNwHqYcxgEyzA8HybAPe7WyD9jy97q5P9yrd9E1iexgFoV4NXxHy1TRX7jU1hpDyX",
  "key32": "4Fk2d1Jbh9GGpQtV4NxaTuvv4uirwFbrLPnqobeNzoJUKX29pSKqAjaBEcpxHi3ia5zzfnx8qCW2A85STWLMTxys",
  "key33": "4qF9w6V9mxFra7QmzkV2f46wXQyB7hUWpfN4bgAcu9sM2ainw5xgE23BEDdy7NhFUfMs8HftYxDsWK9uky7EEpH9",
  "key34": "2oHdtSubyrw5gFw4MRKddvQNBUm3ES3ENy9LPHBRjt3ircp9rRM7TjUFLSvpQvyvhDFr8YVbLZYfjZRMh2ckUZyi",
  "key35": "m1hzd2AMTTsCvxCxfHnrAQakY18CShHtva92S5TRk6Y37Q6acRBNHdqk3MNfLB48zZ82p1K1oCFW42rw2ys6cPn",
  "key36": "45yvhkQ6potByaRezgHTdDQK3HoDy7usHJXm5KiZeojrL8XJPhQ6AAEdePf9pTWHG8sLHKw88NN28W9AR4vHsaXD",
  "key37": "4XYqfhqvWneG4y1wnTMWdQrWjppAPvb2zKmSwR9p8usFiEqKyY7qWpV6PNhmcRRNWoRxJPeQhTC7QtJsbpz3K3hP",
  "key38": "mXZtt29zM3gSzNx15yVciqxAsYXZeKcckFJQoNznHAYcWX49xMXBh3tTShyWXSEvRacvY8Lc95etST4eyJimdBh",
  "key39": "3rxx4eko5v6mJzT7UZLLKk8MG1mW1SJHLGwxcGNji9mcbAnVatcAgGaJAxxFNrTsynMCG1jvn2HdaCc3mfGKLEt4",
  "key40": "SWLfnjuPyZg9Ec8aHwANwQDWhwArVsAUyLoA7Rn5TKLnR67ScCscNmGziHWrfiTaGPDUqG3BZt3Ufm1JrseQMqT",
  "key41": "FkXfqR3KmKVAoVTQQ6aLq9V1viEEsrdzg7FpcJXYQ4SnSWJ53Ze8YcNMmCYokPWrYNirjpTEiwenEqi8NpHE4UB",
  "key42": "5p6sYFaPQimSaYuEUVhz7gQrnMoBEVt9K2RJK4xkZnyfGU1Pw4zfNp2cBurNDX5y7Zm3k2ktJZmHcHZ3DV14az6C",
  "key43": "2n5bMoBY3ynX7aCBv9nunQpoUWfYvUMUfZmidAqG5ULGDfqv8i5R4XqDzqQDrLszkzFWv8syWMwAVtiWGhvqD2FZ",
  "key44": "45mVm74mRs7v8rN2oqqrASrmtSPtFS9eD1p8fC7yRhrWNoaKcZEBURtMB1mDJQPSXm1mAm7cQsqdUpbsjq1ARexr"
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
