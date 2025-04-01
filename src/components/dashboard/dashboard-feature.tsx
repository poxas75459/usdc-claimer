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
    "57qPVwVJ9hixpvYNEeXpKcqFW9TdqiL4TJgt1wUKQRVrw7kEkugMRUvdKY7xoF2YphPvTYhbis4r2fKo17XMF2sg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zTmaR8FtHU15epxvTYeW32pN4kXdgmSuWK9SvkBdEqjGzeTRDuJBRL3zv7hzmZmaaUSzDjnzRRNFUYa6sfC8max",
  "key1": "2MNMEpiMb69M2Xj5xsn9Wk8Z2sRtNjDGsinwn3fuFL3r4xGHHYA6uRorCfZuGfFFrGQsCcqfkQ2gzKBSwxzQPK6P",
  "key2": "2rp19gmyNe5hdWRtcgcM5CZ7DMRL66E5G2zPyfXaF2arS9R5gdoo1NvdQdtAFJGZh9wMzZtMmuXVxpfkxL7U6tMz",
  "key3": "3Q3DJWrYi7eXMnqhTY1GuHe9p7NMuudB7pF1QFC81f8vFBcfRznx8ibGFS29NKueKnGMpDXLLkVdyBW1Y3tV5xSz",
  "key4": "42Kue6FzJwG7egE28LEf92gGXkt4wkcceu2PKMYxTKBxMpd6oChF4iJxtFyiKyvoGRDEWTHozsSBAgb8eSmJ8XC",
  "key5": "5JPmZWKimu9SvmNqGXdNf3J4owwe4CVb3U887w5JBfqiTyFuuzCHiZwH7HE4pHwV4xvCmtnNKcKG1Z4SLbTCk3Go",
  "key6": "3tYbS6WsFJvno1Z4R33WThut1wtCa7PLpvhsdC2XqwjeucecYNkPZMdTAXS45LLxCc2d4rW2fVAj3WGhhbafSq1f",
  "key7": "4zkAc542itZPSn5wXLPgLeCNXKS4ZoBTrWcDiWj5E5B5GPZRKomMEQji6MVsbd4KhDksXcjvDtru9EYsq5mM2Rh6",
  "key8": "FXPcHDDudXxDENTLhCwb1kMZ3adLnywqpabyLyNpT5XTXR68KkNMG9EYuMbREoFdSNF6ERQPRcjM61sASJMewUc",
  "key9": "4Fv63XgWkFe1hLUsB9j6gvDrjPLvNHFo5oa1oz32HqRK5NSvh1a2hPKFWu5R8ot1FL8YdJvZRP3m3KjGYD2G2WgF",
  "key10": "4AUz8DfxXTvcrkBHNJ35e5UWtdiBn6JjwyAbnFr4mh9EK1uq5hLYKG8TcGWZyzwkmMkYCcB4sLeFtgu1HtRJenYz",
  "key11": "2uZGcv8JqF8AUzHuYB7KHc51JP4JD223Nbk9AHUFHZ7ntBM5aup3Vg1KKq8UjT5CnHgjA96rEDSvy4LxuRKJhmjA",
  "key12": "2qQtkhLWK7YyXxnc358vz73JhQMJTSrSnMKZj928r2akE2jdZLdLp9oS54Se7Z17morz2keFVnjKKYh2CjMfEBkT",
  "key13": "wyPX57mdcd5F6pE7zoJ2B6P6eTjSUX6Aks3ykQE6iAAREdHRPWBqpERJ5TT1jes6kkXdv56eGw4J1XFoVt9Zq7v",
  "key14": "23tevFLJw3XymNrgAoEwjiKDGB3yLNVABhgwCzjf6WNGxxrGL73afmaAzEEjBeNy28PvSyDt1YJNmudjESaVwMKS",
  "key15": "5yCrPgSS9ixypsXnGd2EZGsYYMf5342WGBBHbRZ3XUYZFETqe7YkUE5hRUbkP9t1dJkfwANDXuEEYZpd2mNrgR8W",
  "key16": "2UMYLpZecg6phozXoJuzE9S1dpMsUsudbKFX1SjYvArpGKPwffWfz4JvA9WcM1N92nA5iQqTnGPzuMm3TnGrptzT",
  "key17": "2zEEGBUFiNRUmQ4vDdL53tnDTpijmE9AVgixpFuyFX7kvju9FgsQQFf3mk8Phn5Ar4ZEpQV4HeKVzaLrdgTu2CNy",
  "key18": "3PvtkfTW1HwcHN1BAH14XEba47At4Sw1NXqnQD1pYbfHoFNeLVVRZo5zHsz2jahJs3F5nX7nct95FxgSw68XgvW8",
  "key19": "ako3NPSp5ifSWa9Kk6K1yb4hiW8JZnSWtiJRLbgTa7kPyqcSnKN6GQW8UCH3GVu1hxdfWrBbkRbK8E2bRAaEuzU",
  "key20": "5fQ4vH7R9wRNWu42jAfkbHhU8G4qVogorfbKm1jgJokutsvfVnZWXYES9T3AChrjQ8D92jHrhTbSsSsHZcQPxYDb",
  "key21": "4VPEVxWS6kUYoUabyoAvw1Wf9BZtBHvtQCaHBEi2CRTRfbeJtMtotzrSCpatxJ2kErnT71AeEq3H7qSfEj6zisZc",
  "key22": "5EYZRNFDSrVqsqEKaWy7ds5aQjkSMv7zsRrFS4g6dvXuc5NNepASVNzrdj3BYL3yfJuLGrE8PNb1oVyRcGNSWRn6",
  "key23": "5xtYuXofwdhkFAsjqWdSuGUUyHxAdyKYVrGHNU9mTwsDessXcWtgg4Sd6m9nWL6SUEuaMdxsgdNV3RxRLKw76GAh",
  "key24": "41yqbHgu63HC68AkCHNALSFFfMZ5bjTbojH8y9t2feceN8EsmgEkUFL9cM1XFJPUNF8FWThyTsmJC7NwXuCMqVBQ",
  "key25": "4SP2fqKHthRV6HFrhVdCaoNDgwGKakWNEVyWcAADQJwgZKwmFenmW48tnDKHZU57gQ6zL3HmiRFLDBbjoUjZioZn",
  "key26": "3VRa3X2JrgMDxug1uF5Yn9Nav9GSaYuxco643m9RbK8EUN88AKbr48JpWEZuoKA4uk6ZsmknoYso12e3QEDxXnqw",
  "key27": "4B3yAH1pPWxr1HFVy8RwiQu45iSW3S4uZ2BFQt5xZPaMrGXV3WKbbEM2JfEtuX9fDX9UsF7LLsXXoCSCUZChHKwb",
  "key28": "3tsR3E4iYvYAB5LGZ8Agm9TRdwob1LS9CbyFzFzzAzYzGJRB37MSPVdRtd3BuH6oiumEvHpbbBJoYyGYmtxz4d9X",
  "key29": "5sb4KjuZ2nPNqHsDuEDtiaUUdwaNsap331FUuijYG9q1GppLzghQX1KAG1dQdFmZv7CkbjGAoJGZYqgjrS8s7j1X",
  "key30": "5nftJBPjWG351PegPNXzMJ5v4187meR143kvf5ty1B3cVneUd6HYLghXm2MsrvGU6v1QuRy9J4PRmwiqhuME5vPt",
  "key31": "4843E7CJr27fPxCxYCQsjYMW44Zs4jjB3ekSEQkb22CHof9Tc6HaQmq1PnesuQZEp3azSEcAq5LA7Vmp65n9qXiA",
  "key32": "3XAJNv8LuN4K2NeFXBQ4Ybxjwp2ygqBjbkFiVtaA42WcVaZwKuEEfMbLC45pmcoWhiAqrQo1r6BWMerHwQVFTqhe",
  "key33": "3cbnm4B12USYp4Kr9bkivpAZY4JNrEux2r8XG6FQH1L3meTGMQrMpRWMQ1QHNXDiJrzih78jtp6DT8Zye1eTXUU5",
  "key34": "25vfu7uvgZGAh1Ph7y1KKFCuP4NisUHBLtLjFFh9sqWHUaRvPprhucyH9HdcQAXarr84s1ZjLfpZEG8EUG87i8Az",
  "key35": "3A41jPYWB5iajAHszX1y4cFFkG8wTK8J57T2BeNdKkN5jCyFBfbz5Cu1SZEAKiZHr9cCXGN8tjgF34VfuWWNGiBj",
  "key36": "51aGkTm8ff3m14Rga5wMX8S6Pa2oAvny5YDZmDBPgWXFJ4GAzitPXipiLQ5VP2XX837TEfG5NtipVq25TvrJy87r",
  "key37": "56Dh6dCeKJn3Ev8TDVcAoeV25rD7QBkwpwYq9EHUmQSL2yxXWjgYCMFbjHe4WADwtASyUqx3nghU398VGMNyREHt",
  "key38": "5s2uLgobM3bGMDPscrJwWdsbQ29ZUpTqxkQyM8ysUKBzwK1w2FGHUuZ89Y2JEEs2PxWMFnTdPUcELtgL9mN9Engr",
  "key39": "3XyjfbLVzAEG81WZ2dmCWngJzftPA79S3pQ6LxAv9mM5zKkVacr5XF4f7g92JvWL9xBGnYTP8AoWbTjGPVTAMHbE"
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
