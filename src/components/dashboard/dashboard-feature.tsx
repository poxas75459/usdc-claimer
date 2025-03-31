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
    "3C6noA2HyuzhDjQSwSf52Dk6n7Kimfrx5Cv5sEozgVmQNGpps4d2zCQX4BEzdN52BXUaw5YF3iJkvoodV9GAs9JD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PKNJZxFd3oQNkJoEzBnsqhT8hNp5cAHohZ5VbuD4NrwHVTNFGSUjemHbZN5i7czoerASdmcZePCUbrLyQQk4PFq",
  "key1": "4TA6xHJ6VqXgkHHTYreUAmRrMbrNBPUUb3EEanmZ16x9MKH7guzvKNzjZyLuFrF9hsNa7LgpsPq1utYhNEJFy7A1",
  "key2": "4Jm6eHCRS3QogiwB2HbA5kEbV6DdjoBHhBRHxD6gKuVrFqfD2Gg6v8bW4g5u4qa8pwXoeTW5FesckS3qPrqB6MAJ",
  "key3": "UzETcAGt6vTeTAVuzKaPgdtwRDDUdcJ61PxvDoRnGkhitqVd3LovWKTz817BtK32L4S1CKLtP1UW58RJq1NWGhZ",
  "key4": "2NYCbiB57cmeqVcUojDrY5Bptd3jG2TbrdR9nb1suEbMw8saEfvycupYyFDfWDw3Zx54JypiSxPud2HcknUx5vyb",
  "key5": "3JuY1QMp7mzsWqLAwZJEh4GtEQKYuYmCBkJ1a4ihYTsavK9bTinRSE75G9vFnFrSxJBamZjpwbE6H32cdbDWacmq",
  "key6": "m4JmrMKtHwBFzgZyVFryv8SoxmtS6jPoYCt6dNqLEkhYtnqcbiGG354oeGpdCfavJRihaQVrQkxLSoynRAYbSUJ",
  "key7": "2fSmACTiQamLGuKaX9LaYDDnCrX9UnimovxVj4tMqrVz6C5pzpGWDY3LciJyZq1EGHrNqbmwFWhDbBMzaUkHGiSg",
  "key8": "HiXtMmEte2QgBNyFiEgGkzZUYgSqHRBWwKu8gMeh9RrkTuUBRoqsyipbAfgjuanPvpRbj4dTLzj5nH4NiKsVH3v",
  "key9": "5rnsRgXMAVjKXFTMKyomQhTNJ7d5c8GcLN6vZikdxre5r7axtfNYMFokVgAohxRr6RvrvTHzMvsQELek5zMEa4QK",
  "key10": "bxc7sWKhWxEzNoDJZ35fdeipNNUE61ySeBzWUzhXfg4o6dmDebQC43H8PxUNpfCFMTMp59qYHAuhZENndEnPLtx",
  "key11": "4kkoTFPHe5HbH1pvPRzjotAYLjSqRCQ6g7MLxpaoj7MJ2Kc3b55egAUeQsmwao5nfrKTHc721iX5xnEFHDimVZFh",
  "key12": "2s9E6s3vpBGQ7tjzCxdXn7BjCFi7EWQ4pCNjq9grpJbkbAN8kve1qRrpUtrxvWKa9UZzdCf5wFQRrKWXpzJJqBCT",
  "key13": "2Z3nkUPmGzGcPN5UkJn1sWeTArfuv9nyfTJxYqiMkr8Ek5tfYr3GtZKbRikLz8eVuC1976CuEqb76xkJVGsWee8m",
  "key14": "2SrfHcRTDpy4LvSie9bmjzuLQPVcut4UR9viMQeeiM3tKe1XH8DQgoy5TtGqWAt1cBXc4UgXQuwpMvyHcpAz96N2",
  "key15": "5z8BzefhkayTaN5Vh7YhJt1Qg1TiaZeonNhXNy4FskEAmokWGr4KUZz7VMjUrHowLqDsVpyNb7MTRUMJzxpX7joe",
  "key16": "4F7aCwAT4uus4pk5FxHmj3PzfhoGykxzdASSKFTaJb4RS4x1MhXaEFB1b6wxFyFvSY7eZFLjdKSundKbXFHKCoqf",
  "key17": "26VNhxMaGkXtGnM7SHDxaF46J7ifkcH9z3kqrPU7mMUMn8aiFDjZa3ZTpJeBk3Lh52V8ge4YXD1cftwGvPnto6jL",
  "key18": "5HGR8kge1PCF5EU3pRDKbZci2K1SnoUZ9KzHr4Dkjdork7veSs9Zb2jnrYS1XfrMUQtYZ4w8WRR9xjiUS7Nsgjkn",
  "key19": "4tKxZBhoXwm9P7SzPevnV3MwLH3n6XKzX6ituKp3v2nVDN3pRGt65fAaSU1WmjmoPgYMbYaXL5WtTMpBQrL4JqzM",
  "key20": "4ofpK5pSdm9XSX1n5odZ9MhsHx89X7qhqT6kBEUCk4mXvuHeEsupxjiiL2qgUW7zgUAiLPCKXYu5nW3ZVa8KjcEp",
  "key21": "2oMh8Vfxeg5nVasGxrWfjB5wTRmSr1bzZPSj8TtEc9muTHqnbvG95fBWN3AY38Fr1RQqQZkE5kDbDXDbZ93AuySb",
  "key22": "5nCPLyvmkeevaLaszWsMghb6jfCKSAzHWKP1mRwmyxkTZxNktth4T87NtLP4PDQAswqSzJh3njR94RZeZ3paQFuk",
  "key23": "3sPFR372gPqbe7wdFhE8e8HVfUPetvDVxXVxjpKSNZHLAQWYFhAYaYVZUWZMBNZTbdNhubEtDkTJV2NeH8UZNXmK",
  "key24": "2SdTb9usd99PFufZcj765bPurtXjnuTBWFtD4jPZdW4AoHxJUHBPVrtX8NRX8NEC8P87LbdkvgibEoaD7eLntpvP",
  "key25": "4dgpz5DSZhZcWQXD3GfpqGfNjUWEuqMaEPVHvfz18TN5geW1YGpfdfyvEqsGxzVZweDN8Wx9XLsBCKkNruDiAPva",
  "key26": "2xTu4n1PAar2KmMJxoL64Ei2RsuwYMXzb8bP7BCmT4WvwNUJuaCsMQ2RS5Bv2gG3o1a68RHhqJhVDreFu8auQzCn",
  "key27": "3xFEMesBmJp3hh9HqbAXb7kE52ySkiSdvWJgoc23MydxWTDb9wx9cqQFXkniFqkjz74jc95X1ovMxLJWRtUjRejM",
  "key28": "5SbptSuKUtenPCt41yneN3vbXKaKPBU2h1PBW5cav5M1JsKL6MRrtyBFqfhRPQuG4ptkWMrCHgicLPgtAoJRWNeH",
  "key29": "4wPvwZqnChLEjP3KCMxE1XpdayxFipgXy4oL4qzqVD76StXG1hkBG3Hyt5MV2aaNghEAyaRHfgLxR6KFffroAGUB",
  "key30": "W8ohR7sTTcSGv5vwmVkfxeidHxKFcdSpXNJXfaSSXF9dZEjXm2yaHptH4RekoSfdwznzMqFLusqR7vKYGSyF27L",
  "key31": "4Nr4zFw7GSkP4Fp5sfVgEMCsr8nGDJi2sjxmiBBJfsRHt1MXfLUTC6M43RG31B9QGaiekGavHDG4hvV9Pat32N1o",
  "key32": "5MDTMWpY5Cp8rbtbHfrs5WqqUHGhYVcafdAErtHjudJpp4b8aziGeT25B23RQX4MPmLDi4NqzXUW4CsHJ6A9r5eJ",
  "key33": "QeW228zYX8rkfugAVH6d3iU917WPLFyC2q4yoXZT8YwheGSHpSqQWPfzh7BkkAxoUeF85GrbEnCtbkXac518YNd",
  "key34": "4jYk7tNTEMqTfAD4GU4jCsy8uhNHQEEvNnBfrEiwG95AShTTQHGuSqygqGv9iXXbwvQbd6BDYhoWQ1cCQUJdMNCQ",
  "key35": "y3xSgpKJREpgiyaPB1okueoeQLeppySAgsTucvt62E35U8LgkLzVvRfjA7h4YmtyWXLhfp1JAiLJySHcLo4qRPJ",
  "key36": "2X6yYh7UEVv7CyEkCyebrNjotiwHkVpf8tWhZAzZMtcHx7hsxyAbzmj33Md8oiQy2MhZR1c4riaDRzzSXnfVabqY",
  "key37": "4h3Lv1FUR5GRHb5mZi9EscLKrDeLxpiL6pHxaKa65BzEAMGcC7kYpbvbLbMgwi21QvCP5wU8k8cSrw3W6uPTYYzg",
  "key38": "5ntRE9g4ENQNXk3b77uTTG74U5ioXuARdxH1cS3busxkJqADAefF192LDHKzZeG6JHXkZZkZ66UoJv1fkXWwdWxb",
  "key39": "33as4jGntXAEeehzwJEoXpEeoUuSGERxr1REgkXT6vcPBME4ZiPRaYGP66thiaUNC2SohaVKx9rdXkTVxj1uWeuN",
  "key40": "3wjAKB5R5sUdmxAVtPdv9y6WrdWbDUML352wEN91rK824W6DSsduLxEvTpxo1Vhg35WwACxFMW9Lnx4PvJAcryNJ",
  "key41": "5jw1EAFVxqrfyZNzfVvkYCkvTJcdnhvSBG9229qumoMu3PUnKnkEQppYAdjrHAsu94pMzuXwPeFZoVMuT6xW2V8N"
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
