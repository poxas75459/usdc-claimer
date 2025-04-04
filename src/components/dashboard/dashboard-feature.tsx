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
    "5Bg8doDWAF8xp2FMiQ3fAwu2htAa1UPDEUq76KN2q2MEUjAZ899Xv5fRkQgKMcx5kQz4DzduQLxMoVB4d5hJZkZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EsDsmfdHa7bz2X2KdWBGEQMdvHVbJSESuCUVmXzuhxHNG8yYcMVaMcbJdPQK7fDff4X3H38tiKZS9SCysmUbG33",
  "key1": "2x4UWfSgKHNpfAef7UKCjk5WFH17kKwtnPpYwXTHV6g3XAktuzcQKgnKwgmSCuZdaBCVXuWUWu1HYg1dnGSEZcae",
  "key2": "3vDoSynUYTE2BFgiov5Q7TiYGVJDe5CSxneMSz7T9DP1RP5xFdsFfy3jgjTxmRoDY8SXfDtrVWCL7rGTgGu7f3kq",
  "key3": "55zPoUgLmt8icPaPW5owcPvhQkChd5oiwapyENXeXj9yTZYMyzBv6AbADJU4KmMeFzjYosBvNVben7DAH6Zr7Zec",
  "key4": "qPvW1KcnSdBELyaGajWUZarB6rScQinNXGHxqCAVSgEgNctEFpY6QKZYayVBQpeaqu1JnNivX9CUTeJA3DWcLTC",
  "key5": "3j1TUcgNDSypQWcVPYJYAdnRaixrAzAjHK8YsLuqqKukW5FF24mULEmVMHWRbGFEeASCY1H5dPJGuL28D8ryeD5Y",
  "key6": "3nLJ7kYu69ERrtg49LaYT3pLGo9SqB7zkaFJuHE6A1tbS7shEmnX6oDAQEa1egAMfpyru5AaFnkQ7Qw15U8yst2t",
  "key7": "24Mvjun3QpYrsm1UeTiUHVG8b7UMoWRnntSJUJsSH9sVX4SUTUDxHY1GSSnN57GkxpTiRA8z7ocqSkmoCFdeEWTC",
  "key8": "2rbVmrTTHmDUubecwcZhypseCNomewtBupB1KnmK2qFaqjT8sLxRh8DcFmrafpNfhJkKaVft681HbQx1spXMDTAC",
  "key9": "5SWtnN6zmqhAQQitzT5vL7kVJxNEtBd4hqegDEu2h2dZkReYWPyPR7Tj1AFxwuFsdoJPWNcGKuYvqceMwN72srhh",
  "key10": "LMWq7tKNbXEfVrnTDFKsqGiQSYsdR3u4av1j8tg741CCpnQihbK2ivc1n2A8Vd24YZsSQBoiSvwZcKnFokKVPZ1",
  "key11": "4h3QntQRc9QngNFSGAb9MgKUrgEKtifynf2RceSsmnQu64rQX7uhmTdn7mj3SxbvLoCiSAFECox4aJFtwWpvpo4w",
  "key12": "Wp6To6nEvmqB7VoGzW6cD6L35PSV68beFHM1CCCsxAtVExdeSCffjgYBFTVzoDiYb867qEvCYCNF6do3W2qebtA",
  "key13": "4uCgyK8EKWsSrT4xQJosFedbj9cQEgCzjTWMF23ZPyRPUNoX6KnHSn7iUKsrpXkffFjDYrzP9y7wknyqvaF4JtcD",
  "key14": "4tmaQzhkTc8Yr9JjtPMJKMm7nWbDYUE92nXcDmQoR7EnDkHDLYGAQKHJZBawbL5hqYWL6axBEEwbh9MnrPnAKLp1",
  "key15": "5k2LVN4KF93NrvaUCf8vibABvfezKDF6zws4TSRBxDDRaJr6WHEwp3y6i81q3FzneWoFWdANFGQzukgpjbw2YLNP",
  "key16": "2dnmQqoe4TzKNEa5DVjZV2UXQNF2JNTiaczyyzXz7N8Z1pKtfwLTiNyqsX4VJbLRvev7Gf1PurbT7ZVaW4oth7Yb",
  "key17": "Vq8Q5jbsQkSf4iCsD9eBcUWp8vgHQY5RYBpkXQrdcUDpYkgMiZWhGasVdbWZokSNqNEvx9ssEiASc2tgdDXQzKv",
  "key18": "5GGQpsmURuj5Jk5S1tSHT7gWhNe9Fgyu6FSmXrpzNrWoF7JGG9Ej8sCzTFAG14WF3BWgesTCdifBfRmHg51eqmad",
  "key19": "7QEeooPE4eQZgf8DumwG7aaemY8yTBMi6FY87qJCjNsBNqFdMdtJzqHPAEfWpGhNvXY1o964cUwDXT4JqF1zMBY",
  "key20": "5anWLSVZXceESssALVsrbFL4FgRsoQrU4iTpRL1WcjvsnbQFJBa4jXHVUTz4NDKZd8uyGjHLnHNKtyWnDyg8KXKK",
  "key21": "5JvMCuhWzfwRELUX4vodopEDJqjYjdEsRBsSXk6MiNbzs3npzrbrafSbHjZcw8oygL2QNXbh3C63uMg8E2gjHLCn",
  "key22": "2SqUEC9BSkpegBnG546NQzN2TZH9T3xkRGH6YWhhZVmJvqtoD4ZPXYAGm4tRkHEkGQw4YXPh9wvpNeXGL3DejHGj",
  "key23": "4koH7A6KZ5RaJ7EwXYVDc5S4oYQGMRQgGoed18ajkp9L7FdunaEpPY4WDLtKn2674SZpDGvYB35NHztjsvZq4qW4",
  "key24": "5g42RZitoF8VvnXf5kU99DNaCzkFgzE5fLHm9sskcSmos5J47U8JMkUx7jp3eUYyu5x1dSkX1HmQUZ5E2wtBnatM",
  "key25": "86d4AmfaUv9qB3L9uT5aqpvEsRf1adm1BX5n3DnncGB5oRGLowe9cAED7GdQi4q2i6tM2CkbjwU7uZm88CaVdHz",
  "key26": "3TNpow8vApoQGUHEtEwoTHKWep9AMrMsKWXRphPZCuurfU2FvzsqCvMt9JB9sRorP8QEhaYkDcwhiYpuU7fxAa14",
  "key27": "2Nuedvo3WKz7CqUFyfm1gCtzkuf4dG7bmeVjzB5ZjfGF3sL7wpT1wTwpdXYAJokPAY5jsLAMW3XYZEKCd89GUJvG",
  "key28": "2DTNkmS1VPGf8jeULfMRoiZ6qwn45NMBQg7n4gmnvUJ2ty6iLCLHwGZDhNc3W3upyDNba2Pk4sdCayWArrMkT7A8",
  "key29": "2rHeK3JbhdHSYwWMTf11JUsY1yaDMU2UQxm8ZPugFSwTyecJMszDNCsDWQkLy1dKG47GsCS8x2zTGqb23FngC6pb",
  "key30": "aTNeE4J32HHSubtv1EzwZYiNZrpHBmkfmzD8PUp7PCx8Qy9exkcTzLddEEext8psW8f8jCuspC2sVByLWPFx7WD",
  "key31": "4R3gnPYvg8cpqGXRPXRat5ktrLJUHGKM4tm33G8tjNAzsioa5XESUS7E78xFuV9WakcHzopCYcfS56uBre72CDC4",
  "key32": "5Y6oAFztnsKNPbE9kV9egYSreveBkzCuXaCCV5LmgXrxz92QdDdsDhGDkYsPZcBnpbqHcAYt3fhNoR9cd51nrwvp",
  "key33": "2P4m6RXjGCTYvidXX7vQxiBmcmswoPGsktk48RMsRgAL7EwCjZwyN1VVmoGm8aRDLTc51qEgWiyQbuw2DkzB65Lp",
  "key34": "2ATZYX6Z2U7mHtpQQkqUouzxncS9SxSvKYqarBRmZm64UyxxbZwKaytxSAmsEekZyRxb8KH9C4M8GwijnQhW2Fyi",
  "key35": "4QN9hbGaGzcrtUD248mqajJa5QNy3NvWGEkr6UCEEgxhd5oavNKeATScAXgtUy8WcWi25uZHR2RbhTduokzwgUBk",
  "key36": "NJJkHmTH5ih6fTqj7J9ANCUEeE6BBRDUuHGCqs1Mt7YnXpUT8ujHW1UvH2zm9q4XATFDUzo1QEqAbNVhBKuwPpT"
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
