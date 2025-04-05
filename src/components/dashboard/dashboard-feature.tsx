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
    "3GAeD322oBTAZyQBXiSY4HKZkutVVKQn79AZwuZfbGwe6baMLvFyyEq55eoud3hbgP1bDTdGNfuJG3USLNVVci4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aQ8eBhNtcSwkzwj5vNCtQoNpeQ9eSMK8CBhUsFzXpCxMHNAz5ehweLG834hhVzxSZaL725iPGdfHxtfY5v25yrh",
  "key1": "3eRYAf5rtnUtQpvxogKzw5fSxKuWZWX3jXu9vVQXJzz4dFHGtZGyzU14uPL8x1SFApytKCgBhh6yFisfpyWxKm33",
  "key2": "VUBWgEfPyUsUQEo6xSmguivCPsYeVzNPM8851vWNWThjsanRFxfsSCytGRUG1FPncCQT1cFGtPJG5wGgeTHPrjf",
  "key3": "MZJnkJiKaFVohierceSMCuEP73w7SdcNTNcR1tngZ1ru598MQ7rrvos5G8ee8W4XeRWxjJVtPmLeQz1kj4igZtj",
  "key4": "2fSZp8wgQokCLJEJ4rHBDEQpSzMNYnnF4mpPKhCFtqRyWUqW9oAdWceqqamY4jxUwdMpPY1TJuvHRBGoWrsSbVGB",
  "key5": "2L38CwkUXfXd5WzHjxqKChuq83GwYqkTy84wBUDvJqgHiZoHic3ugmoZixw33stHcMxKd7jjg8jrjjWb7RbUtsai",
  "key6": "5n43Yu3LUt7oBkbQP8k9hzZDHQYMVhigS3iEzN3v5MHac81Br5YgDLt8isG871Ec7dBNeC1rsXbtNum6MhR48G9P",
  "key7": "4GATjQxQoNCmobscpewFeRiwrhtPwabkUxWCf3XyUWR8fpwCWEGCYtt4mCA2xA3XpvpuWyQSEyR5ipY7AyD33TE1",
  "key8": "2FtB3m1tXnu2Cnzt4XFZ95eLQKYb43i7pdMbJ9bz3HpGHYRMjSCutWM2qK3qGcrJuwxG9Vvs5dVjct8aQRFDyK89",
  "key9": "5Mt7eFFzB9Ci5QQYxoafCSc4JdEDDSC9CViG18iJeD1fTDSE6kvGQNTUVZiSXs9yFxksjGUzPnmZUgRvropgYuoB",
  "key10": "2AFdwebnoYZ91qciT27zBeVuXjtnZjoDqU13DEg3x67TVcPeQGxMJ9YkY2swyKJrQ57bovYyaGwRkV1a4mfucpRQ",
  "key11": "452Pgqj7rdSLddjBGKaJdPUAgP82FrKipRHftkXofYaYik1GtomVodfWZAzpXN7cMwrCJJhgUEasRCmEBYPDYnZB",
  "key12": "3BRRN3mgNtVM6cb4ds5eThpskmyGeeeGizsrG8nm4aNqCNEUaWtsbBscsEJb4rXKMwn2et9xr8jVzPswXthg1AGw",
  "key13": "25aysPVF833y5PdErjWB2xb62YwmmADydsNrwz9ydK7DJ7Z1PnRH4Yk3C6WEcyR8B7WXS9Bte8gtyYDTq9EpdkKt",
  "key14": "5Nk521xWa9DAk4wF9h5g3iyVEsqy8p6EKA44RwkzBFrAYyJ8GuknRtWBxNCHZmBoUsxARaHiabZCViEbtVgnb7Rc",
  "key15": "4kJ8HyvQANiMZdLaLNpe4iBDjYef3mqnd18dvXZo3SU5KG2MZ9Uv7JN8meRujZyecZ1aeYd1JbWmT2BmkHCTtwr6",
  "key16": "4DZpPvw4itMWb7ojX1fiSVBmKsEKvAxmXYTpJuu3ss3XCrX4oWhjWmdew8sr4BfiMw81SSaFdQYCpGXs89foPYd4",
  "key17": "34JoCDCHiyFQMHxMsGdaVApAmaPkfyJ9KRdeKnKjLg8FTtAgSorHYTS17ufedWgNbqwLeHViFTnpuBYmbhBxV8eA",
  "key18": "5a4Ww2Xnsjg96fYTKMnFwc2wQFqivpTyvURxRVXjXHDCnxgVy1f9F7rdtTkAiy8FUJfbwa4WWKYsWmDBoAUG2JCH",
  "key19": "2cVS5RaHfbcSmBMETiSerPrLhvLS6jGqdU9MwNRj1wXyfC7W6enRxkS9H2RNPEXGnYWJqkTuqe9kyVgPtxcjcu6M",
  "key20": "5T3uod24p5uCXJLyVWiSwJCLQ52QJyxeEFjtqrqQi9E2yUSy4PtyoewBg3bvngedGAtWqueoCB6XpuCV3wZcVvs7",
  "key21": "4LsBkmMiHqoVG3G1yAQC85HeDQgAnmsPaxQzsk37VmWdHzt4LbBGsGm7Z3BXsXxAwBSwEqDAHv7NkHC1FrZvzvKL",
  "key22": "3rRZfaoCDHpcxAfW9wWK3bkBdiNsfexLnv9TfyLgtQqAHKozLxbixsDtJdCvqCPpCtDGdduJ5YECD8HxE8Uiukt",
  "key23": "26xrRUp4HSK3FjFtugCvYYPy6N4d5VNzuRvBD5GUdFDp4xRYZKMjxG4TDyGJ1PZpnn8v9qGPYcAHXecFs1HuN7dX",
  "key24": "5NZUvw43fc2kBDBeVFMtCGBSWyife15unnF1g4Mw6ek9fNJXs8EMeQnux8riYhQeWH2B9BULYf4An2ZpYyK6xk6B",
  "key25": "3g8YQrZrsa6kPw8PCBWFF2pGFstrXVK6jyNr1JxdmTh3rPYb2dwNJyby8PqgBusJGuT44y2s4stgyy68GBe7se3a",
  "key26": "4Qrk7r2TrDXG3f2YGGo78VwdPzw1dsiL47YiB7zdqajuEVZnkD6AVp2Ui8zRwfxAeZd39j1NS6JETnkcqFE17S2F",
  "key27": "5Etq95mErLRCjo34MbTtRXjSjUHMS38Lf5igpJmrxng6ZD3TKpLUAQVfEWy52r1hq38kvEGFJqDftbtfuqHYoJcA",
  "key28": "2UBvP7i7JejDJ4Ng79GC5xLhaAoJ73CRSRDifiLPNedZCV44jiZLsW5oxdWeSHYVQduqwHeBHErAXBYg7DzBaRjQ",
  "key29": "k5kij2La6U5kqAfTuoC5kAju1SFFLJXCsMCnvk4ifwMuH6C1G5U3QCVsuX1g31wRPXhbBSgFvLDcmDNUTNA9puf",
  "key30": "5kEEAJu9e3VAYx8EEfpaUZpn8cJw3a1249opRNP2DaKqiKYSxGdyQV8sDu4AQFpA4r2ctbLvW65HvXjWzZQxjVT5",
  "key31": "2cFPDuS6EZKFzyNHzZeGeJPi4v95pdhj1CiXj3hx1VC1rDvbqa6xfakSqoGgSozPpueaSd1kfSYjCJBFNzBEs3Q1",
  "key32": "9dzSt8mxj3x83sVSBbaDkMUoaCgSiKG9SK3CaLLdzeAVUQXMmUJn5kqfVWYTbzaRg4rztZEHMEjuKkbnJNscmEt",
  "key33": "2yStRRqHmW41DpbUrSAJqiBZSjdK3SPjtMefcKcHedQovtCo67rzGz158Fc2GwSU23N6g8uqGBbTz7mjVdDbUrt3",
  "key34": "65tbiPytVc5Zp93cRJFERdYuHfU3pCKVmYHzyksxq71iiaA7RNQP3q5CtTyVNf6Sg4zdctD7fTtA1fbUAvbVB796",
  "key35": "4qY94PoeMNRgAXBAMed34dYfbBEMmcCwwR2KX9bSGCepgCbqC24sdFvy78sZ9vJVrRz5BTtKsT2KxvJAv9kLskzG",
  "key36": "4ozsNfL2K1KMgFKv1saGGxRVRoqNuJcsC6Az9a2v2HDBGbCgVfBv93Bw27k3KS4KMTzqLLpSSseMXDsNUWeiy6ie",
  "key37": "QxKaJXnJ9PLdh683Y29kBXSCeXTkivKa42T1rdcvqtMMQXUux6CTjkgrj4DLH4vSfbcvsFmH9uKb911zLueU8nx",
  "key38": "5FBSbMoBHRAm87YrKk3GWdBTxScNMTe47PfpachaMsri9R8vDZWARbGdUZSKhGUDvqpWEM3gz1SeK51EQ4im9Bdj",
  "key39": "rtbxR4xDNfxF3BreQgSDbWAQgMWBYhRd5DtuPw8H5uy1KWT882AfbmSBoQ33iX7ATxhoo5QVMss2xQVRFRrBV7K",
  "key40": "8Yvav3iHwM36yQdW1UEjaK144ZUiZxzgKf1koB4GSYHfck2BDjgWu66mbR8rog4G8u6svQmcZR4qfnpWTr2xmwz",
  "key41": "4Ra2rTNut7PYLzcTniqj9Us8JzyzMwMxqGrYy73aBJHhWZPCyhigZvHR6yNchwqXjpbTSu2o8jCLkmCujiiZ6KWd",
  "key42": "5Hy95bYGNdGAeSLPyeQEZcTx5cMbuvA8FtFVnhZqueiUrwUctejuGFtupvS9qQi6hLVp5EUhvrWvwFgqogQ9oyXW",
  "key43": "JkSFFxpyNdWeMYooeBRHT5yvfGj9zRHmwMSioxJwojEpi5H9tpG7tAUAQQQsjob8TCMrSP5P58KnUZEWgSfap6Q",
  "key44": "5FKdadyy8BpTsCpWqqLKtBkkETmevgmht8vvt2dWtHasnQXwJxR7LucY6NEpSQgi8bPXqGwHTAyVrF5jzkkDiaVz",
  "key45": "Lu7NZqdYdMvy7ZckKvZEvNfvuuAPp7iU4ryFkeRY4K75BkJARa6aWLYpX1A1YQk1L7ptmGoJFetM5tY9DiCL43Y",
  "key46": "2Xo5JZxYEaobaNuERQCTdDSvVhTsGB2ycqVzCNdeCWj98PyHc77Syf3eWxgaomn7WXELDWKW2eyXSBZ7XD1jnx2N"
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
