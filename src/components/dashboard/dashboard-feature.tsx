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
    "mtfP7dgghQLymg7NvSRggibeYtSyD8cDaUMjSamhwPygzrZJsoyfuhkWgDUAoJBsXkHCEYV7eYAHEEuW9Vcy4BA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kWLZfXmgeSXv8g98fu6MuyrLK1gYgToa85XuykkcyD721nC1ar8AkqeeZtD4kTvWVVdDoDq3Eqsn4tUbE3kZnRQ",
  "key1": "2CPVBztbdNY9U6kwRcTicwQ9dWmxLpNsm5BUo2jWt7bRRWWCpav3rvZpv18sFxCetK9JS1i7s71V3z4ZniWN1dQv",
  "key2": "5oqmp3WvtDNA42YDSMCtfyBP4ZakARjep9xYN6shmrLYdkeqGvPmXQQwGNdQ8YPbcytw94BsWaS8xiTiXAtFxcAX",
  "key3": "2pV9GpFMc8DrhXn5M3g6fmGKfCHQK7StvapALc5bcYR3Jodwn8PugUxCEtogUQG2ePBKq1WMNDAkkSNFeTkiAPm",
  "key4": "L6CQmHVGedB4dWGDTQWVw9igDmQtgQdXGzay3LYYJMhpcatpLd8xhjYZuwCoeTRWR76PxanZhJ3iRAPucCvNMjJ",
  "key5": "Df1phmBUCm6Xe4e7i9n4nvvLvfU3rNEXAXM1oj3A1QvD4Jf1hWVdizqeWifZ6KoKZo8njfzr9KBC4T56yoWaStD",
  "key6": "3PTYe3Q6dPyxfiBhUQWu3jnWYNPPk38tdQgZNrPBGgcHb1Haq7EYjNAMLD9HbK1WV4YMKiWeYCeVURs1BaQwXN3C",
  "key7": "QNBuq3t2KpfaALKJeXj2Jx9SeMx9HDXHPHyWQNYafiiFDZia1ytd1Wbn9VMtz39S9owoNM21wTAimvMYQemoBYj",
  "key8": "2q8oFHeYFZG4Ry69YiaiTbczDvnDsR6Qo8rkwQkpJBtaXVRxxNvvHdZsmqRAGPyL3634gychbizeqygqZ8BBWvt7",
  "key9": "YajqKZmdbQTbDCcUWeaR9EVrKkGGYdQQen9yScp96jsPVMfA7E6BykP5QLTxfZZ3jKbs6VG96ko6EG3oRuvJhxy",
  "key10": "3LsELpDCbYNExCzJXZ4yRKrXKMgcZShM1m6AE5JxHjPhg9af8j94vmhz4ChtvzFzB47PVg6iToPtvTubz1R1u6YX",
  "key11": "3bHQhnFv8y4XGiHqXzfmz4cjcvVAzUCHwwC5xaKn4uzC9GRLXNgqDczZM1imfxGRfCy1DT7CtmdvDzSCTXgFn73W",
  "key12": "28HxtZeTCgG4FJvnNex5auX7YvPmRZ8vJhaSH3UjtzNLWpTTGnz4AQhLeubS3YrQayrqGYZnmuzNoz9WNCfMFsmL",
  "key13": "33nCVJEmwSedYvJGP4bhzEdf5rAsJJtCBb6wQ1JQzSmKTee8bJFKzfXYvFfkU4ti6KY8xMZAEi11ft88DGwMdP94",
  "key14": "3fhZz8bHh19hUHCCDGDD1GMsnBPKS3whzFjWvmyWJ4Mz66grFB4h7fE4HvTHQKLfMW7bFn5kuL4AaoEmjboyDYgF",
  "key15": "gJLuu5w6JPyvnixW7BGAcwtSYCwnB2qSv5cFuhSS5Cznn5J8hEQcH3WNANvD4gAMEE1vyDwEWwHMoTgFZyRnZ2i",
  "key16": "3kqFeDEmWwyQwpNEMVFxdTshbNZxmEvjGjtQXZU1Di9ehogT3sw9n1nvgPeZzvRp5fGEuzWbva11Mp1s1qzyTEwb",
  "key17": "5PGaVNqVuv3ckQc7tjMaPJEw7iCe6kZb6FyJ6XMeCFwDFAEf6JBRgUtyvyCJLYF3jsFR1VLsPpdrUwxqkuiHwuQQ",
  "key18": "5nVVsvRNj7CLNPdWbWhQi1o2hoGstHmTs11qXqRG9zg2WYaBtnEr82M3VFgD6jJC6d2Ck14qJRvCPcMFQMMrW4Ld",
  "key19": "4K3mmrpwo86UL46VjeFyj2WTKF1ekybhfhWcqytp1ZNNU4U8uttv2pGRYLZtLtFtSh4cqYTamEzWPNWrztmyRtxA",
  "key20": "5ZgEr12tKotdF42d8zsToNsW4MUHkugntUcVNveitWLZhqdAipV3vsW4NWM7GpY6gmjAZyFKU7mB2sxWufXuhtfb",
  "key21": "4kMKmQ6hkVmBsqgrK2DGhgcVvNDu3F1sKZg4qKnuiXgQTjmvTEBDsRG77xnQ1zQgN9DpFLjHAtkLaogoQDbqi2bG",
  "key22": "4EQW7ky7z4M5bSf7Y4mEmGyLbLU51coJhJyLFWXMZbX9m9c4jVLh46rkhm8Hthmt4QZ8LoHJrPvKDEx1MjXZoYbu",
  "key23": "4UMaeKbGnsyK4iUYwyfKpsGaZ6msy9nbxb5iX8CQ1WMHs6c7W4ZjALjefeZdmyJSo6zqHqALzGVDFGK7L1HSNXTt",
  "key24": "2YgkNnKX4kL5gsWAygbjh731nBvwDEfCxekZJe4PmHC7FyBmtFXYuV8ymNXQnsH13n7vsEzgDddKZ8AhbSmLNUuU",
  "key25": "21zeufREaEADENvsvvt3cgFpvr7SstAqq2ogWdUXJw53oG1uXZw2FUKnHaAifzKaTUPoqdsBC8azgGV4YAB8Ecjy",
  "key26": "auZ2Ux6og5xbarK1gojzTQaLoTijvzEbGQUQP5kCnDpbCkvNdHCVQek6ZKAb9rm6G74pZufiKgZnPHmJH72BKE9",
  "key27": "4x5Eq7Ws3e2mJapezXxmCdRRGz4mf3QhjZZDkZtDQWj6kdUMZpJusrjoNcSVSsxYyDDxhtP49L3B7g11K9nyoMne",
  "key28": "3C9XZZkPn9ydT4FUF4Nq6wsaKx4hMJMGkoU143WCUdGhRWCR3reR1NPurZsvGrWAN5wY5imxbVzYRRttUVG91Uic",
  "key29": "34nwFxKqTGWiZB8Di5byUKF6iQnokDZmnnzWk4bmLYreazdaSyeWHiGEM96QV9rJzJG4Ryen9CMUxVW5MevjutQb",
  "key30": "51PxiK9vRyuBfwZajrbW2ssu8KpXb1hC9LYg6rw5QncSece8GMHNJqeavz6fqVbSPdo5xVkbERRmzkbqVaMcnL2q",
  "key31": "31EPk4PeDGLuEuF3ABKWzP1zsGhfTENZGYefGNEWVrXGupoeasTvwFXmKi2PFQ1WgrqGqYGQV6QUMUdtYGfnu1yV",
  "key32": "2Y53t3bHkkmdGrfJUaw3UihxAHLsVbtqPsr2p9xw1XWNAQsCK76d72zSfVCkqDF7LDsBinndGAXafJPfmUZKiQbH",
  "key33": "2SgHhTa5MpFcBRvRvfkUdoq2Pyzn85jy2urwFbfn6xxrzwSHQiQF2K35k8RPVaYRyZzPXKuGVH8e2uKnfU8GRiXx",
  "key34": "52LCNuQ6aVMbrWVS8XJpKshPgwKSG9ZiMVgz8eKrEVWBgUCE4opgdx9QYtbtWPEQxQt3mrcucqoTS5XauDgz93uv",
  "key35": "4QbJmBck6MJcm55swYyWqRkjxsU4RSDSAGNSEEuvjBy3E8YbbBQ77PSRDTRHavQrtobQFHeAExqbk8VtwtBgTBLX",
  "key36": "3k52jrriQ8HHcE2cTBbLCiErnFausHP1K7sd6GtNA1VSwZbKoZ8MAqaAFFf3pkYVWzQWPHgsTvK5GXCNpbhE2sZk",
  "key37": "JuVvXvKtC3SxgvAKfBpYbo4tdjF7yyG9bz6fX6JU5u8YtivdsEiwCyq3GimCmLTMW6zpVAW5y6TBLcDtH9A3aLE",
  "key38": "5D66qUTkS9LRWYN7HraTcmMwobYSWMSN5ek3BE9rtLYk5kkXo9EkZgGpynbZpRbbgj8tKEUyPxDeUr4fXV6pm8Mg",
  "key39": "4z5DYHSmQWsWqGhpMdgUMVgAb2cApDE38QvNyjEXm6cbc2eBd5r8p7LTf1MzCbZ3t1gJU5cJdG9HFWDnAv4sG9WY",
  "key40": "3PaLKBbLYZjBY579j6GubzVCoBwmo9imuH59a7s2KQDMmoyoFt6iHKfSjdn139ZdPN3tPN14MWyxB75n96hHaPKP",
  "key41": "33HMXuyb6KuHYFtBUPHYBaqmAqNK4htWu7CBzY3CKUDFwkZW6grzmRsBvswhg8zi4fwDHcM2uCyUYAtZrPkvKfgZ",
  "key42": "HkF5zTiCxrkyQhyfHbzqijWNLBTyV8UAb6EhnGfvjdALAN3GXPQK52E7CHVPagSDB2gPgE5cus2zNDomFcgBQ7K",
  "key43": "2sxDDkCr7VkmCFKzjSXm6CDSYQGrqGWatieqN9QAqZL3YHeBthCvHugL6yMCNqqvwiwtFVHmPind2BnH9xTwriTw"
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
