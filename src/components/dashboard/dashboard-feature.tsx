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
    "4FsNj2aoC4mPArCeALhwLH5UTUspU4VJUemAkW71AnBfyfHCFRqrs21Vu2vwb9Zg9HkAcKjJFLP4ks7Tg4PX2Ap7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QSYDFCEkcTUhSTUHA6m9ywyg5V57W4tyTRyGCK8eazi83tn1q2cFLLKieqf3SB5hbMdGXACFpEHxwGxSfgDVc4G",
  "key1": "67M3tbWZkxqzKGuZDRfk7uqHtzwVfUkGazoviD6ShjHUDDAWo9FjVKbvUa48FLEUHLV3iLAiF8r8a4hLNfcAdtfk",
  "key2": "3TCp9w8JKaqPNDUyL64QBUresGqQcXYUQe6LjE8XL447uRZmYBJWgyPRU5QwHDsruWP76AJgUHTp4h3uFQmAfhKG",
  "key3": "5s4fF2TGPdiLLbMV1pPS9QXR2BnvGvae7NtinEU7ytJBxv7jJL7sxbyqkT1GqPzkNiFHEtRGqYq73kxHBM39FK12",
  "key4": "2ZKYY1iYLvwDKV4vqWaxjaugN2MH1hwEAvxz9vTNCbUwjNakHtMCHdGZ13RAiXMr3RBo8GzgRwLscaXo6oGXCEhn",
  "key5": "3UPNVEqjCuHNa9AdZnCFB9mrQxN1u5HQNhbVf4zpA85kYjGLxWrdDKv65KSAz35KHqEqQ2pVU2fm9hSB5T1r5EGY",
  "key6": "naX1fBK9UV4Lei2teFW1r4667ssXnZepHhpXUYS5Jwdpw5Rw9nvyoPX69FkDtmGDhQePLWUz73AfxgwkRSoB1ow",
  "key7": "R8GnD3wsJM8ctXRMMZhavTWe1MLasgjsZjVWBs2tkK2EvXUADVfwUjqk2v5cmiyxVhGGiJRPR9iJVSF2th7z4em",
  "key8": "CJEWgUzKpocifkpVeR9a4tm8DhDUe3fmdcajwkXAQydBEA4Zv3VncrEWTKhBovLHb84bx4go4fKNCej47qzYWGG",
  "key9": "5UU4QdodnQVjFBE1D53J5nUoC5UyXuP3EpNpRFzHZke369RDbCev2Ja3r6aasMMrP2VELrUgFK3f8JH17RtsizKz",
  "key10": "2z7Q199wPr5c5mn7uH4qqmqGB9XV8ZyM395636pNm1f3oyNdTcJvgJMop6FduGdZ13aPnTPikWV4VRDBzeyJfEne",
  "key11": "4gQEkFyw5krx6iqUP4FQUNb1LaDQsa3JzXZqvGkkMK35QVCB5puh8At1wEzLvC5pyGnXLER7jrAuGFQo59e6vLHN",
  "key12": "21E4nn7idz9MciUMFEegvRMoV7GFUxazyyNni4F3Bor12uuaB6ENhHYRLxrVdb94LEBQHwQddqyt7ZPjzCKGh9R3",
  "key13": "5bFj237tS3JHy6UDQp73G4CvQsghidAeYRbGBsQ8XLS4eSCQxL55qSfM8trTmMtdifSPyqSuFccU4NsMbc11ctGm",
  "key14": "59sqR8XUqmoEXsYEJi2rZ5hKK9bqMtw9PwDUJbsGqaX56xUx3iFh748dWbiNZnwTefDpaJbNSGpiZnPZByST9mj2",
  "key15": "2cmGhwwjBap4VrDNX5gyuA9mgKUou3MWPMpnmyX3Ddp4UqJGcTyGJuMjCphYd9zd8muLgpnBVm6QTvmuzm6S5d2i",
  "key16": "5BthpPVv4apA17Lo3oh1z6Am4m5gdJJeXeAHgeomgrZVWz1WZjdR3HdSg3ff7qDGCceLdCyhx3aGLEgf4rfzK5fP",
  "key17": "2hGMMAi57CW1DDQUFEijFFzpV1YbdekFPVd1wrAm2SHqm5bXVuc5S2wWMzzEWfVr5KnS4dLyYrANXULCEBebcajF",
  "key18": "2yZvevoRrFHk8aeCWsPZta9i9qcHWCa8fgBuK7WtmYEsfM5QtgbYMxAr9tgBzpfKFDTDyEnVeVdYhTaeTSfVSv9A",
  "key19": "4doqsKpHquaAvANbDVFTBoftteD9YjEYxBw9mueqV4M4MEYGbMy6nMWLMUkmQBeGoM5mX2U3dibuJaCsnwLsDt1v",
  "key20": "5XKfcGMUhBd9f582N6TR4mwxVkACUGsyuGdADHQcCDxKu14w57sbcSVg3JEU34xrgVk72fg4XpjFTY6Jo55HYWAk",
  "key21": "4otgBg56cdxbFzKWBcjjnmwt8fjQPwtm7Pn9dtnfiYNWiWBnjvh1JdJAwJGgb2eK6nBBniCYj6XkYPc6WdW9zRq8",
  "key22": "2YDT1hJKnt3nZxeaBtUYyPWWG417viudLAnu2C7iVpv429EKRGF3XLcmpEyUvvzYRT4ofsmPG2tcEGY51F1Bw5kZ",
  "key23": "2xsfbXd6douBvNsa69Ecm4T2xBHj5XudBgXbgcDHNWKZLSWWgf3nparYhWGRKSXBFGq6hanhEUTbTcaDJSM41big",
  "key24": "C77pd1CXejcDuDwuE7WhNdgp2FeKBCsPLGoJZpPy8b8eKMHf9BWUJuXXt1mXg9zkCY7fy11EyKtxJgTkSbf2qmW",
  "key25": "59Z7pAhS8EfuYj9QLmeYELbgKLckjbAb5xeoSFJGuvycgUxp4ZnT19qdQc3vV9EvbAiARninVuq14RWQmvj9RnhH",
  "key26": "4ziyYM17Tmm1nzHADPTKy8YaK9HSLRCVCjgcSbE3XHNqxxuw8xvKdi7J6hJrpWJorU7KdT1drWK9SNgGKn666bAq",
  "key27": "5G9mvL9kcptRi3HyK41eCX3XWKT8QtcprqZ4zECYCwPSTyK2tDai8FFfQjNUNKieM2rDE5zBMcf4puDi1bFUAohQ",
  "key28": "5qQqn6gQoEqksYCuYaeFvB2hAbEUvcRSjwAU5EHuCLLtVF4nWENHqq3Bo3xSY8Yn6hP58DrmeQscZAzNGjiQUCJU",
  "key29": "5ZfzyBLfYVzworEMFP8HCZknJ8asZwifwJs9njGGRPSmpGsT5g7iX4fn8e8Kx87vgqMEkYtEYr5dU7Ttz9Jd3voq",
  "key30": "3XcxCKmQn7hfpq59NH4WUpAeFzfZwzjeFWaT4gnfWtPm5729jGM8YKNJwvYsNnbN1BM7pYqqar3t8tLg6Ewn8evL",
  "key31": "4aW7npdHNXnuEfaFstkda1S9t2QbZqk5vqc9R3LfPyPorHykNRTSrBAjZ5W5aJtWsJdaoEXtoJJa8XPwxfJGvBKd",
  "key32": "kK2txYNCrs5qqzkTBjWkDHCZZTQaKBRmdAJpDntHUoMcbSWs8mZz6Qm5R1UoAf6QuCkrzmAGYD3XYpjDSW9pg5y",
  "key33": "4vUx5CcQbXBA2s9bd1Mr4JgsRgLGGfYJA4KYUXLTgYatY3Rakxd7BvkwyPLvQiZYhdsQpWkYiLUBwMnWxFjJRhwc",
  "key34": "2w2GUxjJC55mpYcmbUjYcgyeqjER5v1s7YxdFDBYTxNSwjk2wdykL3hKYDBzA6vDRknEbYfHCpcg9516oK8DbK8Z",
  "key35": "2mXuAiPLGvVM8mCU5GAMPANJEzWq8PdeQTugyZP73Yi3zz792y23WmJfDkez6H4sVPo8yWG5Pu2x3yEhQoZZJpLT",
  "key36": "5kWMETjeVFP1kN1Jm62jJGEUgsDCxP5avrbd8CPwPuzk464aNiSyGCGCXRg5N3LTFVjx82qsNm1QDUL1xKry4tE2",
  "key37": "aqhLL4wuuTjMdQvut4ZX8qqvtQQznPuTeBCSVJdHj63x4n4sdVbTHUewdDKW8UyobSr57Yp9hnYSUWUb3aDZhBr",
  "key38": "2rbzjf24JRbY7EMSX4jig5rERTSgZSmRfavwD6awk3P7jDgnfbESQbNShcbjPhFqgZLt2TZPZuT48czaoiJnc3Pg",
  "key39": "5iPryYdEsmcwGMfmpyEMDKQDecEZYjTjYXkySFydkPRZBzov5n2ur2Fjudh282o5aGeFiEjz1ZT6DMSnUDhyDYHs",
  "key40": "4JFXJ8PNtPRjUmpe7aNTQThKku83PZzu8NP1f44QoiFom8j3LhwPKe2kDXj8gGgbgFpBmYegD5osLqFaK11qEGVr",
  "key41": "5sk95pLp2NiP2YqWBpFYaQMn44RMXngrRTbb2KGUYi53ycwkLQgFUfEbqGYbA5XLSEHRXdjyvwQdeMDf51kqkXG8"
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
