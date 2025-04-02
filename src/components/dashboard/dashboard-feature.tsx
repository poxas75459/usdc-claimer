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
    "2du4rLmTNAZPVhqoq9T1hTxjBXkdfcZGDWXU3RK3FrU2hHxdVEdXyLEpbvyrF6j7A1cXFBxCgxxk9spT1c9SxkW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LVcDNYj2zU5EoDWxnL65FJwq6tMY3x1MVFyW9S35niYCDvXCPYhir5NzfLtXmSVHKAe2ymE7xtbn6v2A6a1URZy",
  "key1": "2yLf2DrFBz1QqNGcrR245z7qb3yRGGRYRfuwpFTTmg3ybkQyXLNJiBtNw9hzQFDZjE13829bmEzoE4FwA2vzEM2C",
  "key2": "2MkMQ2h34KmtRubcD9kiY9e1zs5C1Wx5roKAVQXVkoYP8kqdrpQAvxTdxVUQYtjMTXtqRNqBfMYcJJdWP7kkA61C",
  "key3": "wy98RMqaiXqRWjrsqRnJmrBzHML1wDxL7GzK88ma3tE5zZiSLJfkkYmBLVCDcPKZusRUdF1uhSbPvksJuPmua6s",
  "key4": "3hzaW5CDTCcDjK1EzHQXLpS1XeTq5gKbsZkX2NamwxUBLMQbvK9G8YTkvmgAgtZBmHuaFZ1RB2TKfy3enyCEk1fM",
  "key5": "3e89LNuGYg5oAHa9mjkAzbywfsADrLoR6wnnqQQUSF4BWgAXooF8dPs5K5MinoTQnT9AfeAAd2BVQbeywp7CZmAD",
  "key6": "4RnCSV9LNanf3B5EDDDRAnnHeJGtPC9NQq44hTuzxjMfsysTyghnmEB8zBqhb3AGjD11VGVdSqhZ3hLyMBn5TRyr",
  "key7": "4nvFZKJR1VxQvibGiZVLB62U5GCfpjiWifqcUPuZnpdWPsGyPKBGEW9mFAnLLqdwhauVCu3ZyXD5dhn21mb9qGLP",
  "key8": "a8i3mx3rBitKMFC3ZrG5UGH2dZTUpFdwWDC3KRfVx4LuaZ7AXUGzgsWmsBpFtQ1Eo9MRcPV8fEqzKsU3kXwPyK6",
  "key9": "3bKvGi16DPR2LEv7PjFVNHQCwgvJ8pZrz9K5udYPNN61HhfMLwPcFeAeHeiJgWMHh1fBga9AazHjJBePHkyET8si",
  "key10": "wwNh8EpWXW2NTbYnSEF95JmvBr4MjuTt7XmcpSDk2N5NukXzQaeLYgFsg17Ao7Gdmg1dgifaqqMU4JH2dWhoZg2",
  "key11": "3PkiAm8QYPE7ESjF2gL3s2vTEDimaZGGyaTGH4HzWDzksyQDpLRssp4fMaU685Qm1vYc5dhFWT42nXxu1tEhPdxZ",
  "key12": "4twRo3hiVXjpQMhbsGfScP1RGECWCzXAap85drZWgtgpKtmg7kDs2ZSBN3PgDUBJC5q2JxEiX9y2k5hJGdAiCDfm",
  "key13": "qG1Km1SehxoUkes7vjHTue9bvsJ1DgaxvnypYwdUW8DDt11SpREBEbVaQTtZ7s1Py9ug1p5y1bpdXEXJSKbce2d",
  "key14": "5J5SsmhtYwCj9KuoSpxUzN2C2LAf7hvbbmCPj4LMb8PeLvzq1k8A9b2ERzxwJU6sxuKZ25rdsc9RcjEtm41phPqT",
  "key15": "2tMJg6dRB5xMTpruzq62M3nZwWxobcTphNDKybcXQbszaxAu32ZqTYsLCTPBEUJ7QeYe8ZuHNzgBUftZc6tFv5dt",
  "key16": "4vgQk87YtbBi1C3Q5gcR4bGCuMJHgsNDHh7S6bRFriq3wYaWERxeu7SzxwsmHTXeUUajHpDNjBCZYPGC4RbszwZf",
  "key17": "4LDqYQ9wUjqiW6RRFPdBUXjpxvDCLgwTNYNnHfg5iRp8KGG9YSnod2uhqvFKPZsSqzEdfnDYKj5PB2iu2qQmQREh",
  "key18": "5D8t8oMecs2yYdD4AFXkr3yca69m7pmf15eCnigWxmJxLYGgxfucdgzRmNRdvoJUr45KFq3tPPmwkCzUBrsJ1A8B",
  "key19": "4PeKXeqMf7J5BrkQLqWjnuEDJxh7R8L4NX862iP6GapLWMZTSVtCTM5vD6jzfmvVvkVCPnP7LbwieDNYhdWcUyxJ",
  "key20": "2eKvxpg4T3ozaAyBdGK5rsDnV5p3Zrmr1FRWZ1yBBTBihhBzGnbe54RDdgUKURtmLRf81bsZ5oQdcTr8zAmJwt4K",
  "key21": "wqFu9hydKYpYCJp6BDip999fVwcWRo2ZHEHvH1P4Fcsd6V7o8JszVH18AuRWs5Cjx7SDusjwP5oREaWf81d3YPr",
  "key22": "dTPxJZJnFqKBX3A3cEsHmmawSvJv4CBzKnWKnfE9vHq6xhDFuCU5Rm2B19cyzfD2DjKiHyS4rMGBHusxfeVqyiy",
  "key23": "23kKatdY58k2d8dxDxjD5831cAb2DDoKcDPU9rFNNxWDbmi4Lm43YMmkuVAy1JTGz528cF5QSTfFCkrisvJg8K96",
  "key24": "5et2QHFpxuqNDSMupRZnMArfzfFrMTfhsBCRjLhh4dUXDxhufnRtmPDUJLLujXWtevQyTauejB2ww3Ka7qttPSvC",
  "key25": "3DS5mu7Jb4xws9FfF5wbUZvhqWDzFWTefp218W7pMU2Muh5Tcct6PmWV63q8i6uTEBFix4PW4PrL9WyXTpaL4Tp8",
  "key26": "24tzkHRstvCsksZQYyC3scnCERzHhxZdszGXdU4bhy9RJYZfmPdZxbSaP3L9YMP3R1eQLJoxzp4eswxZe7Hk2Bjw",
  "key27": "4rrAQp8udE1jduBGmYNaPSp1oDcoz6bV14yGyJM68YoqLwNs1D9D3FbcdvTtxu5ZWRWs1fMx2mN8opCUD7Zc57ki",
  "key28": "2Wmb6xhyYfJTXwk5KwiqAoFWDGRQBzZ8hJEvUnZjkUTrn8zQjNwfz1TLB3581ihYi4FHoLvLFT8fFhpABUtY2mGi",
  "key29": "CniUMGri98sDTcgBKyn5dakKECXGErpm4ys685HwFpA7C5nxdsCXpXjs1r6APXwii2udUF6Se6BEoyGs4AYteFh",
  "key30": "4GKNvPJbapbqoDCnBgREbkfuHP5wyWAqeMpAbDLPayKQBvW4VXroXfpPTG2eWohZQHMYFH4YzVxa6BhaHgEtuSJZ",
  "key31": "2GdFyua3WP3Xe1TwqdinnWhbcH8tm8a2XtWQPmL3jXMgFStiqLo924x1H5GJk2q4mVUfkumssgpQ93wSTGEKDGhF",
  "key32": "4FMxLqrNQC9PKwRkLcRvaJRiCSqG7cRxDUT9XS7wi843TdqReuezABsHUrxFd3pt4NJtNAKuXHsEi5jSrGwUFbiL",
  "key33": "3Va8JJ9GtSurAXVsAh5v4Vq29K9NgCMS6FGRdbYkRqFFZ17MA1wAUzafxpbjz7L5FiBd7juYBu9nsSCVH9HCeoj6",
  "key34": "5YjS9VynEXwpSWnodE8Kzr9j5Hv6XBjRFBN7CemoCgtS6SGpvUHiGGA6FtgZNALo8QEwVq5YFPdtTgcAEsSchKGM",
  "key35": "A7yr9996veZwievd7e1maYokWsRk96ye3wJ1cGJPSaZN8XHLNeSic5LZv6NbMdyEJEXeDPVDPvKvCuAt3D7G9gh",
  "key36": "2cxq7XXKF4oNkzDBYNXmwtb3DkNBSeJLbMjnhj1X16WBPb8q5i6pZ9tHDjMCSMgxbVXx6VdcAtaZ3jexrinumFDw",
  "key37": "3eZbQg61AnPzpHCn2r3XYwrvBRkaA4uoxRFogA62of7ymgbuK83qiyUhWUDtHfCxWB2bGLiSgkg5JugM712BDcrw",
  "key38": "2FSTspJToUAHTHqJcPN4yUPVG8i3FW9L4bJcFbJZEsCwnZx4gef1a2XRxNoUzu3CeXyt8NsodvScxZMfCyJvKT4X",
  "key39": "c7VgCn5rY7oHdLgPGQNbFNvd9sA7KEtCqMYdKL1eJuX2zcXHFztZG4Yv8vJsvR1N27igrGfRJB4jnEdJ6RYrK1F",
  "key40": "5gbxENM73d7z37hrxNj5GGmpRSh5n5o1YXz6CADXwjqeoyPPi2m4oLkNCBUTd5VZch1jpVSPfAFMVPEmRKMqvmCo",
  "key41": "34jpdCP6bNP8LxDXbREV91WMW3MuWU5c7eAprx8WbLnYzGmrVxTr812myxACQTHzvJr5CAuVRXEnk94YQL3ovttc",
  "key42": "41XcwJqMSiffJ2bq8HJEfHRKwAgruRnCoFwtebufjb87kggjJx3CMo3xnheKGP4WVXA8fzxcfFNQWRDNCCssXMR8",
  "key43": "4NxC9uxLpEjAbKypcC567mCHQc8z3KuzUxmkX4QNCGLQXxWZJqovyRnYPjPz4N6nXMHvZKwgNNZsHpTZ26XbiW5Y",
  "key44": "5YRVifqyQfaDHMEei2wmEn1uDP7SSDJdRFYvbsoYvJeEdAMQMGXzpRvc77wGcTZytTSTeTWwNhgjT8zjV8FThgeR",
  "key45": "2jMNKcmXk28pM7h1T6LZUQ57T4X4T4E5dgGeg3qsstyymDXLtupJ5k2UDFP3TeBysuLRzbVH8iUPfvM2cbc5hN4t",
  "key46": "pf1nbzShYztvb4BSrcFMzr6XNcKRnFuNPU6fffN1vttFmEATuFZxRohod2dKRLaMEGujaZXBeWysvVCG1hwqv4N",
  "key47": "44T6RVX9hd2a8avzVMKC5u1XJF2KmWZHX97JknPEvWMwnZ1cfmQ32kpeYCVtPjVxsnwV6dqFjukqbZcDxFDCffBm"
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
