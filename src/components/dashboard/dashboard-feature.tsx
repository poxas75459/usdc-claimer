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
    "41LPUbcu1cXrRC47NXBSstBNFTAW9N8BRVAuw3bigEZ57cowtT1wGxpST4TH1vG7qh26h4VMNxsBFzWekFNVBt1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RH4cpgqmhTQUNeZ8WHzmQ4sSxVL4Ts5LBTDFcrq3WKQAmtwcCE5f8zVtzLHQkwaEo1Uz2DJ7atY66QcaF2n1QVu",
  "key1": "AmnSVWR8SHfpt5ieKPG1WJrkvT9nGgC8EP7TS3KVez6Rx3A2BoSiDymGfpPij8c9Fbi9FCxUSCsmDjK5WY2jqGG",
  "key2": "4izn9S28tmGSuafrVr8ahoXR2MggGyomMWyKtUhnu2JjMVTrf3xn6RGyEXHh3aVeUE5KvpRRikD2Rh994RfGXttZ",
  "key3": "63WZLiFoKFWSLwjzLCiPJf9vgGbthhcpcc8aJNzmvgH7wfFNejVWpoci15Z2ZrRcP82w6z7eryRaYDQtNsbneDTu",
  "key4": "3oznUnb3MWDum12v1d1TVeUyA33MM4ihyKGRptCGGaM8LDrDY7QHmK3bX68xYAbQUNv1cKMDYBj8FfSTHjK4K2vG",
  "key5": "mCPvjVjPMx4knDGt52n1kDQPmL2FY4qoE5ZyVpabD48vdxAR2jskJGmeWAqjs3PHgMWmmeNBeqzgnZ4XbFjwuKC",
  "key6": "5V6X1ShBLbfozTRfuRDoK4waoRPKd9sDKanDaKLqFfzwYFawzpbU6DrdzJuGqVKAFh4v6J8UAwTK4MEGjPAwkNMs",
  "key7": "57gsGySYrU5rHLPQL9aqsKgQDhtdBA5jfMVupjTY3Zmfq4nnLSnyXc195JWomxRZ1RsSJPhJf7fhZSm2rCXitRq2",
  "key8": "2ps8hzaZbPJaziZDZma392DwWNWhyLAGemmRagP5tFf3sHLyrCJWgbCPkm9wkSeThxoYqxWHezZryoxb3FHmtbBk",
  "key9": "5t8N9kEiDMPSPMRS9V9mRUP27onYQCn397yoaUabevhwKntoDhjsZMwFpibQtMuVta6QH8bWmK9WSXQnChsxTQ1B",
  "key10": "5Ew9jobzGkkmrvN1MXq525fnMDQrEKN57tKDFic9AMNnJKPAPbipRaUek4jr9Jx9MJvhDLayANYKgrwD2iQxXKyb",
  "key11": "36HmQeDnEHaHu6mf2H1e8foxN6AjPzTYVH8vKDLuSMWQGGPWonra2jVnetx4Kipm71HwBwCeCx2f2taYE5pTAaCS",
  "key12": "32uJKWLpTs3M27Q12CoJTDVunvkY7yrMbjQ1KRHqZuxoPVioUrE7u3FkTXQ2BDqvynDnLYqDU3qwrwDYcK7uF2e8",
  "key13": "3yTEzWoeSxEUfBeZ7qk73noHFuyokjoPSu3izHr88LSuFPSaCh7NCewNbwQhMz5npGvrXZ4NfQswb1HVrU9EnPjV",
  "key14": "3hj5e5ZxFEWiNez7sNZ5TS8JQC2h2JvkybTDEGtvDwajz9aEUdJRGwBfztE9j1TSD5m58fCyysJdbPqYxUWBcgNK",
  "key15": "4qtjDmPQpbxvjqECCVyWMLheirVweT219afUZZz3z5GDtF8YNKYiY4VN4ypX55tdyhHV3nrAvSmZPtgbYvyoomfT",
  "key16": "m3beqHvEAxAgHSaFPaabjambC4bFEssEdp4QfGEfJ4Gjm3iMLMq9mZg9SZ51WicSgE2m6tZuZNYtdWjZbdBgnUJ",
  "key17": "2MCb9odSKCZ5xAKN35Eq8bQK1QeiyuGd8Wr7zL7F56pcEx8AwQb8TypFrvtSdq5T9ZBK4JWT7wkVAd915yFEcofG",
  "key18": "5EAvs8PfYwTy3G8656539kW1TDpiGwPrH1gd47QcMxWQKYhjcXaYCxyTrh7GmsgysgbMdAq7LZXt8xqDEHucpZz3",
  "key19": "PLnARw2bz3usRC5Cs1zx6TVe6v6WWrkKhWKByMy3fmVL9w6d69H35ssrEpqw1aVZ5mxpr8QTASBqtbAuuH8XLgG",
  "key20": "5BwmENHA9VnB5nMr2ujW6e7ALLHLfPmQKzGNntVWSJpMYhmUVbhRNgxMdJsHJ4mNfYGVCHDBt8QC1kdVUCSnZYCL",
  "key21": "5N4Bb23NpuxeaBeYjBm6Z5fMHKjsMnNxQdMm1zSXYzs2RkvPxg1gCkG7bYtp4Rk9HxHKbxt94fJ5LSRwXokwFFhF",
  "key22": "5aNBwpFL7LRK6tc4p5zhkGJx8788JNsL1AHHx1VAmQcchurg2vMYTRwBhSjv52BFFJnZRWVXQKBZRXJ8dAUxxD3w",
  "key23": "CWpiEvbJ5eBWinPJd5mTvZnsCGW9jtsqiRGyTXiCY1HahuCirsCf6W2eCAdbWnJ7ZctbHywEHnznBZttgYkLn9N",
  "key24": "2dGYgJNmbX3tn7ptATi7uRPQ6T3d2apGTLN9maxEBWE7Y5SfoTkjaRtjm54r1A9FhfMYJhgstApuJSiCJiem4Se6",
  "key25": "37PcSg1yyw4vxgLHbYTyhrvrFWtDQpxBGLW1eVRoiQJuKiYWBgiuFTz8KKTimDEHXj8qub2958EZ2jesLYHYos1V",
  "key26": "4h8MinJsrGhnc6CCZ3g8HB6AE2gVv3Nnut6joHajzTNCXS1EvA8pPMsBdzSoWCzR5Cnk5kuvfFuDiSJHhaKmYYgd",
  "key27": "3DCjoyBuLoBEUxtuBAeZ3xVgh1T6DZH3qjXMVixp2c4gb4idyhU5eMqRMGP2mTZVW7vrZ3T5YK6SueNN6W3u4Q4N",
  "key28": "3z2fiS2Wrxk9hzkt2jnf7pNLLJVqGUuEaNRTwdcP4GbCAAFXcqejV7ArY673mKNsebSmRZoXKtFA7v8faxvCFw1S",
  "key29": "4DAA5UUfJNWGLVd4hpPtKMc6VdCfhd5nKrVsmHkCbLFqCG7jScJCMSvHW9D7GKXVRLneTKKpHRYppidXT95HNg7R",
  "key30": "5KckA1L3E29qVeRi9XWyGAEwsGT5akSFdN24MxwVLsfNT7v7iBLPm1GceL4mp7hWdn6X9Wno3Bsz8G6BWiRVG1mR",
  "key31": "3jf9D599MUP9byGvHYRDaoG4auvNpzVJZtizGvTudqxjBFpjQjH5a6YZjgeKRqBjkyKtfGCk9VzTiaw5aTDejxEd",
  "key32": "4FKnaH5oyUwUVZfWp7CuaFVcbpp1bXfFFcDDWpXQR2VJ7X1quVYp3vr7u8wfjT5LJKUCXHG6RsSDvEuvh51QqPGW",
  "key33": "3SoKnNyPGV3KKzA665a9hW6QXyMo47RJGLNhuiW5BMSeXN2sxxUwtGewt4iGKGB1vbkhJddUP33phbnHG9DJAxFr",
  "key34": "5bfZeLbEaTkSVHLTZyyF4aQ2U43w8DuxLauXXAG9DG37cPmTcSuqN5mNh5EDapopofgT3SS2AnDCj2HkJSqgGUPt",
  "key35": "2weJpw6rPSHeUCAgFCEQkVvf5KKsCNv53y7osGo3wiLSVNyuq4Cgc2o6nEpFmyVeuf5gyMpwY9ddbcF4Nh7TqoLe",
  "key36": "2usSCo8RfX88efomkkufndQBvBUaEATz6eS4pXSa7ezABYVswNj5AR5WykQjZ7SqPFkBjLqV8CHYrwZPTifVyLFt",
  "key37": "pLeaym9Wf1e6BobugpZUFurmy3hogXW3y4UkSdxABGFZAHLh8uSkRoRVK3JD6J9RU4nW4EtpGLwF4SqeXc1PoxY",
  "key38": "3TFnDTrmSrpr2ChdcQA4U651a2cJQnNuJWHWvQZgPbd9TJEKJGj5mddL7qezk5MYYF6UXQ3qs7FMMjzEyTuCrTry",
  "key39": "4S25tf5YicaBGwdyyDeoQxKkZJ6CazyxFs9Boz6D6nT1HFFSKomgz9a2JJG1V1RH5rFdN3RnTRFGFeV4BKsqjWKx",
  "key40": "4tFte2Sc2SqgEkUeWq8fah7U5ZfFRjSv4xoHQcEkupuSrUCqs5EHMrA7zkkpu2Ao8UdJFoZTWdib2tuLvqvXXgoM",
  "key41": "4rPCpvktDsxwqFGBXMozoeXSHRPmMUA8usTerX7hTTeC7dP7iE81gfdD1UsR6KKfoWGNMsTMM4yjyrC2TZBWYG5a",
  "key42": "nN634dB7NxqBsLXbA3UZiYLsMthZyYWjLHpfbDQiM11a5DprDFXc1PBCsN595qqZAh6v345qNCfBwDQugZ6R4vA",
  "key43": "2af8fvrRD8iNqzWANQijZEEBmn5NX7o6LVBuJwBPCG4nLtVtQp6kJeMZSjXs1E7UwmK6xLuGXJyX3Yf28dvG89Yt"
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
