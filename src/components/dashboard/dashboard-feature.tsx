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
    "X5HRZBA4oDqoNiTv3fk1VNhmvnJx8E2A4HfGDiRUut23Ab1Xp2UYGHfQVXaE2p3o2nhD8wqjfLyHKJnyyoSrydU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mXeX4jvyfgPqmAGzqXEWkEffQVsfkvG413qkUU4DT6VFyg5X9inidFCMrpHJ5BBGW5ZZu6BP7M5qengMAenYXYP",
  "key1": "31GFcidDkQKrA2YpofyJekywgBQ2jgYmaFiXbGLy2VFVp1NwdGhW6a9nJSt6JVbYaNLVtfmb868sZAPPqh9nuduM",
  "key2": "Bpb4msEjCf6eXpv9R8fqpJoNuFgb2h1UDVKkXwGyiELvnurXoAQZN6deh883LBQxvVCBxmhUfwYjJHMdUCZVQMQ",
  "key3": "43GfsD1RUQXSFoQ8SiFsDexXu93ndZBei4fQ6rqJeQmf9UttQoUSzzn6bEFZK5abvS8WKfY38pHBGPiGXXni9meh",
  "key4": "5inX7VKuDmC8QViBNV2qJKfa16Ta7j14DpErWAwux47XtUHT2R69qGT8qxHxJqLcWEwZBii3SCU9tciFiaAisKJm",
  "key5": "626htVDpYmFtrJ3vzRJujsnHWY1h2ebNYD3nf6ovUud9v7qoLacSi4uyBJQxDmBca42MLq4E3waBYs6tsKxj2BxV",
  "key6": "3uFkBy3XMFM7pQ3E4r8rP7MNS78krUUZcXvHLa9JRU2iEkECY9u28Ynn6vRtB2hLgcUBMau6Sh2PtuGMmp5huZMW",
  "key7": "f4sYFVuDoURsQ3LHjLUruidetosesbC7igUFB9qYTody7HwHhjFyaB9SYXiKiVrT2gM9mbfU77S8WCqynyxZLwW",
  "key8": "47bNsEymhAWj2uVNuKnwibAGBHCtjjoRJ8ncFwLpggKdXmg9Uzq7mZ5uzuunXYU1L7ZEePni4MHssUaBoXRNMnF6",
  "key9": "2pTxfsRBgxo4D1CBSMHrpX7V97hT7Y4ZMzxRhfnoPWEXzveihwCmmS9xdEyWaB2ki7CFkNd92mSfqBMiynrWDiAN",
  "key10": "28mBwKXDdUTKpv32pLTDE7DPD65WQdteETmV3nsGsCmQKdAr22jzMWvA3sRpohUgP7oSVM2JTD2tuF97s2TkChUi",
  "key11": "3nBazLBTNVXNGt31zppowK8383fb8h1USQ2p6241fzDPsirNppUmJGrYfVX7wsXo7aq1xMVcXz7cDAat8eVG8kgb",
  "key12": "5gNYwA4WMMKM4UcePLa2onbwK1bRUbPMPYZQobvfwb6CmQaidZ91raJQAwDHLVSkisJ9RqokzW8KzyRz7EmGgRRt",
  "key13": "27agUeH7aodNe8ypsLPjsTu96gD5nmHZU6KVeyYrGaomFpSL6zAbTuEuCPeeRMZCauMZbQiFCupMHi9WniDiTP9P",
  "key14": "2F5gm8GhBW65ZsAqfmcpjcDMUHyhyS6izUb5fVug4ejiQmGh5sNgwUrWfWEKhzWmSmCMPLTMpz9r3LxcMPT1Lut7",
  "key15": "4otddCpxZ5h3t2fgZg4vmNxiBS5LcRj5mxfN5XugdGRcrHDktvfZajVNBjnLj5SgP3fCmiQXhstN8GFqfuxBVFm3",
  "key16": "4hqp1bAwtKvSp14pSf8RaKnEi4DdN9r4nUvR8je4isebqeWwQppfZkzf4tEuSsJoPyUgX78M5rfCixwNxopMJY7G",
  "key17": "fqnT9FoRsKPNhxYxAYwwEHoADXJcPPwZNfRuzKXiScPYZaGuXv1sKfbHyoEMzrpNohEoXkKWLSdjYrVH24tJY8o",
  "key18": "2PbqbLDxURLsTR67hzZfStXrHvEmqUgtnVY6QuiLzMtNdUfFnxzUhox9KVKXSCj8s71Ud78m5qDDdaSadsHE9pkV",
  "key19": "VU2HGXju2eV47yxYiTwFuaqpwEeCwv8PzwYewa3ARZkNv7aBVBWbvz5TPudLZHodpL7FQEPUVPAnTGuQCUwpRC4",
  "key20": "4wd9wuFR8hdbyCbBd3G2jz9oBsR9wrHixhHEwv2FsBAxXcpJRJ9FHrUfoP6UMvJeyH74AdeXJFrL7rV3BMpPnCtU",
  "key21": "49zgvJbP92dEhhBpDTsZ1tXWSqKjypRTKkzAvkyF8jfkX5SgS64BToKbkd1nD158oE8d4ALwvyY9UX69nmKkEapx",
  "key22": "4kusyhDHpHFxdPq2iPk8DWmifCLmn9WmJT4XJ4QiNNVVNypnqxTfzXk69C61i6Bmq4ZWd3n8Tx3MUZ8KN9qgZds4",
  "key23": "GTZ3yCryCd8D4Nf6iDBYfWpuC2KfJQMWhjeEfyV7L4f4ZhdRTr5ik7gE8tfiRWbubfTjHkEf7ZAkPKuVsQHnFwk",
  "key24": "3NS1BiQ7E3YBfbn7xVu4DvbHFGGyPNyqGBp54tCeEzs3uE8fRac4QS1b3mLmgcvWB6XY7SC6Nc96uTBeNDJrgVoA",
  "key25": "2mubMXmdCrTHz5Xws4ohp9eg51vwgFqF5WXKfuS1HFoawTTtSTe3c1pRQFz4LmmyVzpVivDrSELyAYsrHUUsAqDN",
  "key26": "2GN9JpoHybKxkkpSHozLHVVCLr2UHxkKiidNMRDf7WPtB1GzduCvzxeYgTFWYH14SxR793XWhZeipS2DaQDwZTun",
  "key27": "44mcEpJDAh8sLRKcrK5GSnhJciAVfmHNMfU74Cj6USiCRv3e2twmZDkgVMVfiwLPE677YxqNbzgGuNjwmoNU1Nnc",
  "key28": "H1oTY6dbiaHSedbmw2qnSuJn91kA7L6ibmtB2Qcn6Qx8JvKiQziZzLGjSVvsRRzWK3KjUKRJESfRtAaQzacD2ib",
  "key29": "48o274qZLVRCq1x5DsRTLH7vzjogtRwYVVjx3ofK8tbvMFN5y55pNvxMoqWREVh6AkxNNm3fVrNUFuUvTpKS3oAr",
  "key30": "3JvhtDtP4kaQEL5yEUZN1ccjnaX6k5dhi9SN7rUor9D1NpMoH8UmUM72iDP4w3xFqxhQJ3rhmv8azg8v2jhedcMC",
  "key31": "5HZko9jZ3pRGzinfdkxzjGbx5JmXpWFufkQsjQxMKbSFv7eqApgkW2vvFvd1TiGrhKe5baHPwQ2AbVnxkQfMwdPd",
  "key32": "2VdBpJ8Av8d6AfvEwZ1gr55x92ZMTrY4MwmbCevCzKd8kikMWqqLfJW4FbB4RFNqsoCLw3FuTUxWSDqfG4uM3jYn",
  "key33": "55vkaKvqjkjanGDJc1roeksBCtykVm21wKoRWFCAwv1AvK8XxWjytVQRG2YmRvR6h5sUSnjBLhF3B4xsDETwu5xP",
  "key34": "5bQx7BZzHH8xaxeQd6w9dQra9MsM2VSnC26NELS8vciM8HzqZHmQGDn1oRuDL3rMspbARntyFJi3QSNYwT7pGKsm",
  "key35": "4Pgf1HRxmYfQueKWxkXMynThvhXTvDScYSNC6A4XjXNDuPr6WNDib1eEuJoozcbfFEWnLS2Mb9BqN4FvWmAsNR5y",
  "key36": "5V9HE1mmJjBSuKbqTxt5rBFjNoe2aFStKT7df4iAuWTEepeQrxohZLtdocSvAjDB2piHjkuYM57QEpVnWW2GzPTf",
  "key37": "47fyxBSX4F7WXjsvKxAFcFdwKCGaDnfHdS1gv4MbvtCfEYkodQ8Q9iGArvinBEgqjNBZBKQNBiL8iykoMc6L46n9",
  "key38": "3kH9MYWzs3dqF7QDPXg9r6TT2aixTG5fhXdUQaKUFUCUKNhxcuuAPmbdtdboHQZrrnD9PJmAQD26LrZzE36q8Ejg",
  "key39": "3dZZUfXX5xM4kCRodw1hCVGM7jWHBYgJmGQksZfoiat2gUnUFRCDm5XEkRHCnEuYB6PjM9rAU1rJVSziwP8rwWS2",
  "key40": "eCVsj6gxPZX4zaSY2AzZakzzZbM75eTVkAaoWzbZmU2qPdvsaEMpF2g9N3tS5Hd3zCiU8hbDUUnPhSpMNdNZ35x",
  "key41": "2n8EC77qTqWb7i9QGKGvHHb9FcuJbkkGLeRNSSKJoSrEKb5BC7vYGamJ2xVzVX5EiQ1HGcMKx4828LiWx7Dme9Y5",
  "key42": "2paWxBZVcP69MvEYqqwuuF3q9fnTe8kM1qNhnsxj8hCj8RbHyzAzX1mQxkfR7xjaPgh9r9XvArWkojSjE2adSXKn",
  "key43": "3ETicKnmgxw2b6JhuTtAKsVAEQPCTmg3Pga7UrxUJk1QLjxwmaotsrNB2FvqAuuDKky4TErDapFdzVp4AGcqSJGY",
  "key44": "5MaeRtv5FdHL8xfs6vyBz6LhFsLPVkN6rHzCEhxSQwRQcGLaaSxJtaRA9ieri28Jqms93aH4DRTJaDJgSFYYLSqw"
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
