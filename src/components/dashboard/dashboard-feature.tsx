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
    "AzrCUtYHyWCPdZhvMt5b3ZFjdNxVMFS7Q9TL7WQa1brgi441H8spLY8qcagyr3uFwHrhhpbrANGnquywTK4FRDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FwPLrzxdp8degqevrkiAGGnHfAwiSFy9McBySxp8tsNA8ABzu2pCzCFextMyT9ugfSq5PpW6oPrh73YSh9VP5Jv",
  "key1": "4ANzfWTrpBo2wvwfPNjGPY2gL3uyiAmRQA11nsy7FnmNh1EBknYgHR4hV1sojGXEju72Auori3DwpeprhrnYSuV7",
  "key2": "1GGRan3xyrWoTmmxn8xKiNtnXJhifD3Y6eYW6YEGJSZFkCXFfK4Sj1UMJth4wBUqSXSeUJf4a1ADCCu2XDeZdsA",
  "key3": "3Gx9h2viGJ2hnG362pZQrUq8oKNSMfsGHUYVLiwNihKsfLxejYARJFyq1BSP3Tu6VBXHMFx3JU4M8kTsW9CB5CaB",
  "key4": "36iqsM2njWwE12xsQCFdqPWNmhi1Jta8t2NosyY2rUeYyPoZU1jyBPTVdV3hM3473timMSSnZnGpFVBc15VFWdbC",
  "key5": "EYtU6UGGMCDnvee538nuJBWD8w3Ab5218ANjEYYDWEK8ezpPnXBCxjET7Q9DPfSWBdip3WHNSuWHNCfrpVRuxxH",
  "key6": "4GbfePjrjXRPutMKZrvzrVn4yMBTwbXrQ3YaDG1PspL6VK2R4SpwDos2bg6szBnCgvZzzDeCKBis8Pu3wnNgUbYE",
  "key7": "5um5aUbecnyaKdgo8J2339ucwhUWwwDkQGBEz9NdnSRKL6Zpyv1mAvjbxw63G4nNhEuft9jb5JUYmbusAf927Khx",
  "key8": "2kpejJXZqonCC6QTvKEC3SfMqKhaN4rnn4q1sMsdy4tbMkHzjR6qia8wUSqiVh5BivFDwRw48W34xbFvCmQktQZ6",
  "key9": "3gxgjJoWjPJYGYi1R2ovWaK2fykDoc2SfXhbBw144TJg2HXLQEF3tRSKS11n49F6DwsHkdW6kZi3CnmJ3T7SHeMR",
  "key10": "4MaQ2JBzqmT5Q9YUtvWJCogPUFjjjd4AaWGLBJxeSEJpAeVa5iiDFmpqdfaTy8jcDPPwLhFk74eDTJrTn2yh3TBa",
  "key11": "2iBroAkjEkLSisLWZqsjY3x6RBUDXcC5fdV2zZvbCgj8ETv22cmtgn9bC6EH9x6o9LdZybgzygfUjj3EwtFpwGRb",
  "key12": "5jnwwoipCE1oapLGLFX8GT1EwQrZdpd26NsMqdWvLZk2fm8wXh8nVDQXDjjzoCiA8uBeqxNrorUqLbkuALtShvrd",
  "key13": "4b3t5o8GQx1VLxpjKPsjKji6R7Xk36d5F97ukkMwoWMAduxAVAPftFN4BHTxJQCHefQi1MQ9CrdWyj5YW8HeWqPX",
  "key14": "iPVwjadnTgN1BQpvjX5GfA3C8F4BEdEsXwPzHFi14mm3aXsqrXMpAENdLg6DUj61f9g6FeaBBb4nXzXSR8DKr3G",
  "key15": "3VRXTzFqfgMi6EiTzBMuw9yEfNL5XzsH57NWGjpReFZupzVeU9dMW3Qr9QuHhVNUsNBeywGeXGBjrBmk3BP84FGJ",
  "key16": "21heP7oAV4firTh3KsNskkeWBksR7BPEA5FcyrbPFDJtYc11XN3oZcs9CJwiX4Cd6KYFjJZ1HShkCp1r7KH6mNQ6",
  "key17": "55mhErboYaX9Mc9qxDJ2H3ESUcigooubpVwpSTuznqMkVDHcakozZ58vfVpGViX5Z8E8gJr2na6GsS3eafB8id8i",
  "key18": "2gw2dBadj4JyegprqjUE5aZSf4DuuSCyFe4rgbfVuthaVFx9kE5qRTpzgyJhMYgSAjYgfMxpkffKraguaCEMMEZT",
  "key19": "5vmrk2xnfyPGrgBUVGhBwqgcmHKz6fRrMYMwkVQZhyE8csoh4qJk5WipZcZBuyz6aWNSbh6Hs4iPRHFq2vK3XTrP",
  "key20": "2rAEBacqZgHdf9nu2xffB8dW8LMWf2vrd4EqmBrPZy5tCHQKuQ2f8P6WUc5oK86zfvNHxGbMkMGTUrUqSUN1pahX",
  "key21": "tx8Nzv3nTcXU8jMa3FhSUkwaDKPAzHGhp9Sr8hbiTFk5DYBETKvxZTnr8emLfsVppmEty9n2hmPXBKQ3aQh5VvE",
  "key22": "46LV8FGGMBhVFci3f6WV3PxRNeHEDrstRSvURoBRWZ73d74kpcWWk7qmPUG1YZKAo2UTk1aTGyRjnaRwfvfch22E",
  "key23": "3Ym8GFGhU6MfBP9uzB8JNRgiqRa7qicrPEyPGt55bPtKFutgeR9JzHvc85ikpdkqsZTLEqYWM68cnXWDVvKWgZm1",
  "key24": "29T3yg1ug9jcT53oAms4tsZD4roGQkECh2rdwFJK16hrnMVUTDbA8EjmP4mbinVF7kSeTYbcKxi4K9w3DXQLSyDt",
  "key25": "2m1HUkAzGpFkAvkzfxMMrUBXUfLCkXCXVVtVPtJo2SzXqbAVniEQiobMn4vT21Z3TqHR7GvodgoWgGtYPpRjgsYq",
  "key26": "KDVSM4tfiWSYewRR74oKEB3QX9ngszZ62Bu4X3wz8N6EzVoSvMsK36627usrJW93i1cPwRj5R2EUktcVbMdXUtK",
  "key27": "2GuVWY7LZCVEqcgfSnszhA6GUkaEdUMmf8qGEq2E6m5ir6fYyd2dL9AowAP6fxTBpynNBCvgq5LiLJ1a3awyDwCV",
  "key28": "2WzpzkkM4KcNWGeVodo6zhdGmxUCZDujJ459FmpJKAWkBV93fgAi91QhM1znE5biTqHTm2awoKLhkiCRDZLnQi4J",
  "key29": "4vMqKsXqqPsXBEfgb4evfapn7JqGgbk1WRVqr5mSDWg8WDnMrrKDm7JLPYDwz82qF75c3GmGzb9k14h65AadrC8J",
  "key30": "2neGu1dC5B5LsNJwDXPBKB7363q6etZUNaxY853uWf2xn2th7LK4it9rgvbbELgwdUPNv5GNMmqpYmZFywcENX8",
  "key31": "5yLUBWjwyyYrs5Z44j3hgPxziz2evEcVy5RvvNz8rSSot54dgL133sLok6YqHoKKeBozAxNi5EAWUQiBeEXDTiRG",
  "key32": "4PDZZtEXCrhVT7CNwS7cz3yDTgtBRnBLqM2Jm5YHzd1DQ4RcZCQvKcLFUo8bJioCbYyBZDv2PDwMFRXz6EjANiDL",
  "key33": "45yG9ad5s3DooXQH8esbcsKXr1fVBZsvuVZDaodupmC8XYEgV7UNa5xe1xL7nUCL6cyftoTazaXXzQBewpVASEXs",
  "key34": "3gPsvTRLmtVX1NAsHpCm4x8moCBjepPzPXe82dXNKyxagiGHRHCptaHVuMvZ6iVzXng1achcYJGDf59pbqNzgmLr",
  "key35": "3PvrupW4JWQJDnrRd12cujUArjuDwKQS5tGJKSHc1FmbT8tNepsibWwE1dfrX4WmbkrWSTqehTUDfJ7wEiRpEJvP",
  "key36": "TxdF1rJ8Xsbm5WCiyB7CWMKkh4ZVC78h2QXzpBTHn2w1tov1rZ5mjP5eHnztp8WHtpp31FVr6mvhMHX87SYVs3y",
  "key37": "25vo6YKcWBhVKRDr5czm2e2y2RqXBMrpFLFeu7p2VM5z38LamXmR2Q6HLL4pN7nPtESy3AvuegcmvmWCiHxskccN",
  "key38": "43Z65CAXEo3D8ZgT92pBDGUNm1MgoUdmbSwBqk8VHABexajZrJUkYoNKmsKEpWASJASEAXHbHJdEeqPLoHsYzjZn",
  "key39": "4k3gu5JNxzHVzmdzbzRf9Rb5BjS1EaqRyDtbCRDijCU8aQKa3qwLXee9WkMXEvyYXnacw8zCpPL8nRatmahZSiWQ",
  "key40": "2uHaLigz9FDBU3nPAzqkGbNSG3NSBQBDdPVck6KxixZvpZTpn34eh11UT8Lird9Z6d772ZRkybqT4yRt2zTf2xm2",
  "key41": "UTrjTZZQRpfyw9Y8EZFK7pZDZNgUsASZBSimUswPwKyJYfVXR4PjponEUuq2ffKfNX4cPNgs98Zv2t8r5PUxhma",
  "key42": "25Fg7Kmb22JPWZCQf5F4VoanxGqGLZQdcgAPq3dXKXuPe66e6tMGK1G7Mz1YYt2GhzfNMxTtJPmifn2gdvwJgsjV",
  "key43": "5vdXJ29GxhhLXRbtBZbZwdxmp3HtocRvtDn8JWjud48haM2TdDKgXqg9mEGEwYSWqE28r6jvtvrQcJWaBL18xyn6",
  "key44": "pu1zoanpSud71v2LqewmBGMcB5ckA57JnhuzzJgfoyU7c9HV3gahhMf4eTLznoAXb7crapN5t4kgTuucT8RnuYx",
  "key45": "5yPtUiNBHGvFByzVYHpdYfn6M3QsyrVeBUwWyHgUeZcQi2kx8Hhj59DwT1Ka7VvDZ2FMHgZ8vaAf3KDvdBieHe9s"
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
