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
    "2ACTXRzJXjG252a7pKaD5P6kfmrWA5461Efkw5E74Xa1Pyiv3DYea6QbjD7utfnK43jB4em1X9wFm6tg7qQBkWeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sJoPp9CbkahkkNheBf3hmhHZnWZ41BifnvPTAxSv5hbAZEc5WyAeK6WDqEuXvFy76F6b7xHiHm4RSVRyjQM1wb3",
  "key1": "5fGzJW6AQT45sdFXMj8rXbpGxVA8vmPj1jXBXgfhgBLqnfaPvFGrAqkQypPhFs8wbHKVcn4ZDYsnwp3ujYpmw562",
  "key2": "5kJixsg1pr7NhypnJcXP99BWxY2kmJTfF7cdHCKbacaBJgnDXGfjaWY695UvFGQUfZ1zFeydtpBGX1pKey2ZJRfs",
  "key3": "kRUpFAYQay7YnREGj6i7T9d7YHeZfsWyEZ42tfM5wEfjRFXxxFDBK3ge1k1C4Q5DSqvt96wDrnrWp1ZykNfY1Tq",
  "key4": "3YJnLJRSWibjny7zGNB3cVZyaGuzQXzpbqVkH7dcYJAL89voY2VVkqMtBWLh8g81VKB48sNJZ8R8EztnCuHtsVvU",
  "key5": "5n27Z7A9ARJxdVd34J2zRPoHFW7tqeZsN6DEb5zVRGua4k3thhLgwnsyvSiNELEp7CNfGuGXVhvFueTuu8NdvY8b",
  "key6": "2QqXQ3ydMaBYyggpuojy8inoK1Wg9V36X87kZzCipFu949KrNzrCvm31Pi6vwKDjbhf4nPGcRbwiJPoPTLpXoWMj",
  "key7": "486uwnK9pt7uqHMUsCCv99Z3rrtwy2RMkvN1n4ggwubYjMoXr4zSA2mqWkR1JfkAoMJLSegJ5pkJUXARUA7MHhQ8",
  "key8": "2o4ZRcTRarSZCXb35UYsgAvwzYio4nRHCzeMrTMxy1eDNYJwKFofp1vJpHvTkkCH6BTbBxrviVYhTvcKqnXkkMpS",
  "key9": "4wNTi4CYfvwLSUtTrmeqhoEtUmZSKphSSwyPMmkxEWVdXHWwXzbvAXAZx1CjFYQ1UxgFTqdEvf2BW1qvpSJoRTgf",
  "key10": "3oY1CiPnaKVZYfUZinTd5YTEcbbyn41jMgfFSJLt3gQu4XYC8N2yLLhPh8rxrwhByp5CB9GgzSj4vjk5vF2RR58B",
  "key11": "2DTcPzNZR38wVffuT9auiUEzzpTzf6oHqA1rXCEeA47FkuMvMLNHaPV1hnEJrmD1oRhuEcEivb7yNVr81Kbkfhjf",
  "key12": "42nsxah7qkrHaHYWReCqQb8buQULcm5skv9h5UMw45DTsPRCEa6a2NpZaeWA67JybbRcys7FE6nkBkVjAfyYh1fx",
  "key13": "59oF6ScL6N8Pya9QcYguq53rWCW395bS6p9PZSys1Vj3iT2bi4x7CWcWA8sVnmXfETjBVqjPPSrhhbFiPUuPV8NV",
  "key14": "3hfB475YW7HEovctgL2hpCCZZJ35pJgdJpod9Mrb7NvcFQK9N7Y9JSVPB1rzWL8Fshg5SUEzNiP2fAwVBUKy7wmi",
  "key15": "6EjFREzwW7cZ74T9otLJZkSBr8wXbEbVEmBodS2MFD3zP3RgqDAgpBza8v7W1srUGC5R1AEdudsE8CkQE5DHzgP",
  "key16": "hQTYExdEZMfAXXKf3PWwBo5XsuZ5S6Pa5xtr6566V3AbCg6sD8WUtgUwnAUbM5G1tTEHKfqMk6iCa2V53ySbHSo",
  "key17": "5CoUJEmT5N4KtUfhpT2JFuzaZVAQtTVmuwVMXuUcNPT6xwDLRsR3Tih6SRsTEKKpqVt2Yk6g13B37hwwid7sgMLr",
  "key18": "RWzU9BGuk7M4gxJka5CSveC2hP7LR1qW48yobiVJjqquemh4B1rYo1TGkqFdNuvyRgXmmc3jcjLmvBmzeEkhESS",
  "key19": "3AVX1XrrccBmrQRX6VZ2VnH2whBrEsSof4tw3T9Y5NDf6BeddBmnkhWphfpZWhZNQsXSc73B7Y4ZUpYGMxAcXj3R",
  "key20": "4ucbqB7gDygLVFiz2MoeYKyh6yQ7hn1ne1rrDuGgmbR8fDQMSmoZrpCuidBoUQAgUhpqhUSRzPjrXYuBYKtFUYci",
  "key21": "5gW6jocMreU7NG3RN7i1jFb3q8znyEPgga567hVeWpoMiS3uW6qwELqN6fyRSXNbvRvZv2NG4mTx8KKiRRSF4vAj",
  "key22": "498uV2p5DKDvyiEpCcEGanvmUMxzX7Fgrj7rrGRyxxgPf4s9oL21tGrSQFdZGmNcKHXUtFFKjyUwy5tgBDcVVGGW",
  "key23": "2B8kFcdF1bqyuP3hZVgjsxkFBSjihCrAJyg9W34WiNAqJEppvXcYFx85ZFkNzeFiWfjDWbDeWbhqpLfpH6ZNSCub",
  "key24": "3MGT72MYbBfxB8ajq9XtyZjVRDYuDMFEQqy4V1DVqUWsZ6kY5UzaHFkf3prLiTooGUTcf7Bqd7nocpio36Cacz3N",
  "key25": "126UDrGraotEpA9WfbPWuQQ82DGRim4YxSGf327a1CorBPqVnnAikUsuU7Jh7osPFquPmdRuqsSn8ghmzaLvHokm",
  "key26": "33CiVYJvHb5uQgmnx8jrmz66HKzdRRXCB6wUQJkaGaKacVBhr6UUZquovoWHBDykrRgSUTaRgLPLwPi3f814UJqG",
  "key27": "4HWpTE3pRgbXij6vrkn7Dc8NfHUvJtsxv3Ts2SoudAhRP8cx8jqXb5SUh3NzqcsX61zMb9RmfQ9BCqNZqSq9SCxo",
  "key28": "aPMGrxmLkHmsdx1frT3fCADvmU4LpDf6pSvrEHfKLU2U4r7fuELBPPkqP1a1jkz9ZZZx3BQgB8zvxR5W4cBGzQo",
  "key29": "4N16miHwf6TGd7bkmY4vxFv9SmFn2HAeZEw9Ef34WdZKE5GcNtN8wB2sKSjV1x3gBjE8ZTx4GgVorsmzFsoHJCHp",
  "key30": "4CDGESUBszWLnsEW3NPEGPoezgWuzU2Tmup89whTfqtxFns13fpb4yBNLCDV4ehdmBByBJfDyq9HYiny3Tz1Y8kg",
  "key31": "4qSRQ5GWKDUseQtLY18RBGT9EfLeuuKuh17KZUAMdLEHAKYpHAmNdf9u7xt9tsRVigLzyQZMtwE3eeHusbjNcam4",
  "key32": "3tbHtvuaCpD9hbToLqheTbxC2L6XytuN9Sq85WKfCQWf9Ef3hJK9BLN3hwbZTehh57oF2K3r1dx9mX7wKxMNJHa1",
  "key33": "3nWyRStJZRRp9rp5T97yhGWuFnCRthuVi6SdE1f5AScaj1zavDFP7cbxYvkGp6j64J5FW7rM6brdEa12H54TzmWo",
  "key34": "5umHhuP5Bfa1ndzDKBaRQquBPCDo888g8J8YzL4kDrtewhN2zoww1X2LpS85snd4Kdfbu2SNP2MJzWUJPCJcms78",
  "key35": "49UmEZiMahvdtzEXwccSJoSruGUW6sUZ238QCt2yF81zFrDQs4nH73daZVx1CriTfoz1wkTdUUHo8t8tXLM5u815",
  "key36": "usdAmJiT9po6ykjEa5XzwAUZtPdSKjZ8oEd4M9C9qNvPw9rGEP72TPyGV2EmeoKvDJESDXuwQ8xNhtJovGggFDr",
  "key37": "3Y6BRz4jau7datjguYqtUF7AdQo2xgU1Pamza2tY7uAGy1JUaFLRjPuGhGD9MGMb5FQeBRLD3rcAeGzpSvPoM7oW",
  "key38": "TYyyCLwV6XNaHs1RSaCbj88SP9Dou5RbEpoLVBPoc54MYFQ9XTupF5HZmM25WdshpX7Qi5NL2K7BKs74qqi69zV",
  "key39": "239q4wvsg7ExwDb9pGmpp3BA2RkkcdqwprCRCMKF6D9ga9jDni4NAvKKtxseDjUwF2mxAyKXowhYW1yFKZgfhsvp",
  "key40": "3Rivau2BpoL6kjTnvUR9WFAPP9o9pzFejcjh3xotok47UfDGQRmZtjgaWKPMrLbjN565JL6vsGUZe42eWBDvDVyg"
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
