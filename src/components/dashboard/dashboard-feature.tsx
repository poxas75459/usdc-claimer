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
    "2yux4ezERJZA4zpK74Zyu6V8AWPHp6d2TEWvZd2uTjLEsPVpNZG6VBEkBxbAAFdYpf2qpG11NSNNebdsbp669UMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i3Eh8ZSWpVLiUwVrRZRcPQaNUPTMEnmad4WjysrHeUDos4XnWv6kkFXXNJxw9nj7YrDB6tD848aK5wtsLHzWmLw",
  "key1": "37P7LQ5qYCvG4koGUnnNNkdX1zxNLeF4K6SyBiChZfw2TuompXNkSUkJGvAnL497Coe48YqsqQk5ZLnRmsTeZaQh",
  "key2": "dywCknyJ4zXt8ighkGHizBDUKgYd6pX8GrpHJ9USLh6WkKMFiYWjX4WPrxMEc3X6tyf579gvQtaZsYMf7Bd9sMC",
  "key3": "ci7QDH4RjGBphaYqWqvQkpN8HYjwE31hA8CJJAkb27MSdxGFozNExEoHiUt6EdPhvnfnD161TKhVhs9jbGreLen",
  "key4": "BXHWVJ3nftttF3iShmXTtVY5oFiWS3UCkeS21ZHXKUwtWRtmoEA99QmWMqtBivVGhSWyaJzAkNCcj1XorRq6wzj",
  "key5": "bYyF7XNGmonSxnWKYZrSauk6ck2UNmfwuVjtQkGYq5rxmHGtkaVBAfued4fRc7taz2eWxUwJEFMfr2CaE6Rqggc",
  "key6": "32SRahGfEFeBgp97RofnKQBcJgdCHhEyvvvZ8hva6MqpdS9HtshCoJW9zLndhECizYRDzGZjkrPGMxVVXp3c4LB5",
  "key7": "gQYizbvVmPbrrtrowMQokgkFPryQiNQgeLbj46WiCbgNZNQmjKnRrN9ccBULvrkzvJ6y84ofGABAoxbmYnjZohj",
  "key8": "1Ex4Lx9bGXzfkfbRQRkHkw7E6qLcMC55eBtamxjkYHtxovTkzTjNnBaXuup6rYjRs7oC4hZj89f6Rme4L3KTqZe",
  "key9": "2X28197BWVLoowgLzKgW43Yu7mUNfB7RS3eDDKn3MouQqsgpD1L4MyHqDDXMu6yfUH2X3Yg529tnWn66FELHiRbD",
  "key10": "21UDsL7hZQg4Cf8o7VEr9Mgman2ea2HktxYewoF4hWGLMCZLTw4jHmcL6DpwWczxi7mzVfShHrCbQrNtvgjJFBr2",
  "key11": "zKgP4ft2Qdg6oTb1gAKNUwSoVbGisBYEah6EEVnk4RHs4qgknqCrMQGxbke6dUboFyJ9mVjsPKvQ7XZmm7K4xb9",
  "key12": "iF3JFEV4Bcap9ZVHnSmFmo7SNibsGSwbHMPDwNQK5qw7ynW5qRDyVAfAgqV9w2cx6AhxgmEjBbtywMKjZTwsf25",
  "key13": "3kcX4tDr1BnR7sPQPk1Svv72foxZHLd8HHhiHBs17TZy3SJYsbCE384QpuYXC4gGLAMsPGTVUCb47gtGRtqtwaca",
  "key14": "3mvWC7d54tL9tz8BhujT2P6babeY9oMqUFcZUUjogADCnMeZfA8L5a4ZrNEbQfKU1GK662PdhaoAr2r3hnVpRTPf",
  "key15": "3bgyrPJde11CkxLy8vGGEBKEXRcZrhV754JdeW69MzaVM1ES5QS2LPXNinss1eVHrrApE4Au9BSQzWPrTr4ZfaqV",
  "key16": "66G3wMtGvMRUZXtCVdxQEAXFfb1XULSqX5khWkqRSH6TK37tCZmG2qEoLet2cSDrb54hM71n1XvNvi65PTALAy9r",
  "key17": "4a3CBF2suFqQqQYPcrDnBXixhYD2zyS1QkfxNhN2ZPPbDkhxeQSGnt5ySedouug2QFMT33MkaW74XfPKqeXw31YQ",
  "key18": "4Axj6cqB9g9cHtHJtj7rCRbNTG7PJunkhGoyHbAJUVVUwGc5fpCr3EwhDsJu2pCLGqJHNw1LibbTPDBMQs5cZv3J",
  "key19": "4f64NxJgXtWisVUw5X5iJr8KijTxKTkTJqTCGmf8whA6hxGjhoBWjbSwf4JE4DqpRSEZhovoKGDeiuG5ekt4CsbT",
  "key20": "5UxD5bWQz5XzkPiGSYbpcDss4wL3P36cUiHLQjSD6jnxQHNyD1Yp3p5DNctwoqVwxemGJ6vAeJCVKUsGtqPb5D8H",
  "key21": "35AdJGuY5t6SMuWrLTo122vyCkhq86Dy7VCMVAEdsC4d7vx26Auo9xmsHwHBbViriRo9gJPCb2wW4HJNA9HaeLZx",
  "key22": "5h6FswispYHpBrKkvKuQ444kAKF3x9eie9i5KnoAm1YPhpXFtWbgE1QFu8KPQceoTW8hFGnwL9XGbRKy6DDzHVPp",
  "key23": "2mSkw8TV61PxJWYAFRJQGn3Jnn5yHaaXQ1vC21Rv5GhiFVeNN2yH3NATEw1Kd4juSXJyhdd1hnN5kusrtQKsWrj7",
  "key24": "3M4C5mqEwt6MZYgSfQ448nykUA9pVbkZhpQQVReNgJikqiyLKTg78q2JZxe8Pk14nVJnkvhoKGcoXPTPajEi1PBq",
  "key25": "q9iWwyUcHaZM3i3iZUCpozvB5iKMS4HLpL6Jhh4g7imqBvAukcKhFB2giKF3LcnFzAWBdD3XUQirVvw5GhGPXVv",
  "key26": "4RTaed4reDTcu3Le9NNwUXtefPQ5KncTTb7CpF3LoEhtPzpfWd2oDEfi4YkyJLNM8b1Y3LM42cdUD4W1dK2FwjhN",
  "key27": "2oB3WftCGUc2P2kADruARPr8Re2sQ3ik4RaSZPEfQ2k9vEUrgh4SXgt2ZQHGWT8vuCR8hrZjCk9s62uph5Y3Afe3",
  "key28": "2R75sKxKUdUqdLwvTxQLEfCA4FmUZuY7LHxzJJiNk5rDkZbEkEp95FMhDFZ14R1FfJDkL1soT5Bf9sPBGCUf4Coa",
  "key29": "2mc2NbvgoZJuHZrpAkYeExNLFQmBe8fLqWCnK6UP4PtEFvPrh9U29r39gEsbaz9AE9w8kNAB6wLiqTbTsiF6yVgA",
  "key30": "4rNGypPLBnpEKbwbU4H3x1N7n8P1TyJZMVxsyoUoUzWii5shtaAXTBf1XLWXKUsFZ4P6SzdhQWTrsu6X6HZee8Pk",
  "key31": "57N64FJhKLnSDJZCFoUTpiDwBHoVcVBDXbS3Vs7HxcAMR7og3PsRBFJdJbzdFL7rjwDtgJigdqbv2aDRmGTet4Fu",
  "key32": "5ipYkCygK4nATzXmS88vso4bRHS5veJZxpDN9uvTswFX9oprERodwzQ7P8jTWNBizwbvSEhTmVGTZvL6GJLtbN8v",
  "key33": "4TqhKrQEkm8irxVf6gBmEy5nM8KVUFAJpqC2VckSP2BZTRmPHChYH1DLooKbBA3wirodir2g7N49nYMU9tsUFHhr",
  "key34": "66scSgErJJChh4sKTpsq8ztip76qUyScBYxY5SovrFuWQowYKy5ukW1W2RkcP2WCjHVY6t7ebrfKexVe77SuUJF4",
  "key35": "42YcTM1sr4Dr3FC59iFofzNM1LVcmRLT53ff8yQjHuVr1ritxMupH5e4Tt1C31Y4CoajKRdYzcKJSAGsdU6kE7fM",
  "key36": "5o4TDhugCeZBNnTF7NMXqMmfG73Ybj5fZMGgKYrD9Nq1o5Liqsda3i1QxrB5EWRDZPdm9DJs3jS6rLcNaqpfQGTh",
  "key37": "5qXuC2gH8tgE54b7dyBjPiYBcY3pscFwpMT7Bd741cxzWaodfDtqjXHPvL1eHXR1Eoi5SM7FRDQD7FavthmvZp1S",
  "key38": "3FQ2j2ovd4BW5aoehZG8nGhihgMnMS6sYu2KSPT25HHheB1JT2HDCXdz1JFPL6guHzkbF4ENk83trxE8dW1pakGd",
  "key39": "3asjP8njjrAygNhF99fqHkPKWJvjgp91hHAZ4dd5m7Z3XQ8Yo7vchHN6tFxxFMufEunHCvBrEXvobuJJKVLrghy6",
  "key40": "xcT4wQ2bSBuEdUApFyJ57EDgA9ryxMY1V81k7ZameKtAbwQWZMgz3TfEyETZm2WYFyz5B4yRGX6H5U3i1jYwL9z",
  "key41": "5jGw3taVEhFNV65fCE4iVvbMS7sv3F2xSM8N86jZ64oH4Z8mPovLtFLtMPiPoRambygmbhhndXaxe65QnXz9W7Gg",
  "key42": "2Zh9YGFvf8wiyo48ML3pKeoe3FnunHwmo1LrAJGFCSBaDHioqZu1CAFgUtuAtTHjLfkNKHRQ3SDNTzGX4a15sA2U",
  "key43": "BNoJ72vo1bMbKvK1JckzD7sTG5G9RR87sJqjGwdw3YZkBkbu9P8j2CnNx48mNeoJzY9VifwXBCfF88oPXvqZUPr",
  "key44": "2xfUYMWfVUwpSVjKwatFhPKNuKkLLMaqPN67qSm2ZmGmRiefPHtKJ9ZZ31AgwWKuaqthZEQuF6YuR24N6kMen8Tk",
  "key45": "62t6iDV6E3D8xqVo4bZwZd3y9iXi99v94GpUEuoh29ftFnPVs1GUdYJ7RqWfoXQKZwuVuKLhByqcWtTSRy19iKZE",
  "key46": "3uqGDBJERJeF8zRGV38bPCH3yBAjZ8EXreNgUfNMNrfMgc9t8BPGjmaNm3kbpqPWKKitd5QZiRewSUtASKkApFcs",
  "key47": "3uP2kHP4KyEVhz7fX1MRfgNrCqeTamux6pZuiS5AsZVUH6vHmyUZXgauAeYnT1To8SGSeE7KvvbZ7tyMHhm6mFuY"
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
