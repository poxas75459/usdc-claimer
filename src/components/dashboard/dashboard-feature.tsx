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
    "3UCmnCRKJvy6UMN6Keb51sEMBh9yDhrnb9b9AQdfYy8ds9m9CSxEPRf69kSCL8uLvp5GaQsF9k8qCiQ2nwqVsQxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tFSSMtbis1fgWjajh1DiwoCn9A3T4kppqxrwRXUesBLZSjfuyCid81wqNmk8qbnQFYQfcR8hCYmDS2w6Ek7jsdd",
  "key1": "289rrX8RPM9p7D8YtiMKugHkrPcWn9o5FEJ1idrpjiBdwmVFFFP1rdFKBRH2iikQHeBKz4odkaX2SVoC8FDm8GTZ",
  "key2": "3perU2wYWzp36F9wzgANLfLjQ85u52G1PtW9oWWYwgqcJHL7Xy2bDTn5FABUkufkXVr2qq8ApikQMvxLhhJJsLx4",
  "key3": "4JNLTYGs82HPX6nKNRUqGGVutBbcMQAMCqnmLZy46oozViiLoNcVjPcocWT1pz9UzbXfWTkJayTiStJZ8Mvth71h",
  "key4": "SssxsDqcDa4DFoeGSwJPEiRb78VDyH9BbmJgVUUvYhAvJcbq7361snhGX45AvFpG6mfof5kxuZVjzTFx9n2J9kW",
  "key5": "PNLjATUNxMLiSf4MTsrQ1U2vzu7KfJ1rTk3ZHcTKfDDfW6A2E4B8WWckBbcX2K6cwDsUUouD8PXJdZDDZj2VeXp",
  "key6": "3mTVZJSR5xcVvZNPNNMo12wGhCDrXvX9JVbjEsxoj18cxC3DF6yGjTvztzyRnwawwg5EYJqGpSHZR8q2JS9fiKMM",
  "key7": "2Ljft1FETGHDdL83oVesJYHVQQAc7zF428vdMPy1Q9Hyb4Y2nejpQ3Lv3oWRyagCxojECGqo7L3m1S1xfU1gMQkQ",
  "key8": "3hscEmCtU9DBjkefWLzCzKLQmyFxXw3no6b3FzSJ8NYbtbtYKofmnBp8XJhbgWPfdMCwhV7FAXPWwpXG9aj4Rba9",
  "key9": "4Dzuwe6eLXeaahYYteEfsfxve1bwSDfnynztKvBos1wAyH3mY93q9AJJA5NS8uH1viHwnnBXFiby9eapUDA3PVGg",
  "key10": "59Rg4ySuH4LqwfoEPEo3JKyCR7rBvsa5Pp7qHGhAbUrYLd9m1rgga4ALCmyWH1ugi9N3FZ1aSgiKbJmyJbbYoFmB",
  "key11": "MwS44aGNBRoevsZQHNMDEzwxHEBK6rYprdGiRXDU76SfxUoezkEq4GCALZvgDFj6Gg3K71XFwifCwiM5opzqgpH",
  "key12": "58NWy17KZkXnV6vMdVxKeeJy2Fj3FjjBhP3X4YdbXhx1g3iPMDi1aHyiaHvwaqeSFSxW3prHKPifESrRDww9MwuA",
  "key13": "3VNGstGsLZUr2HHgKyCPUxFHmhPcT6BnvJ12NEEmnXDDRiR1qXefqyHP26RMC5ALPWK5S3QGyCXVW8h5K8oyF5QN",
  "key14": "2ihp8bQpcytHcen9mkc8Hdny3ioM8346ccDatLGbQz8KsTfsGtiYX54cpxJNCMSFmkJULQJgNew1WxEeoWrzQoKa",
  "key15": "4qjTtZjnHYPVToEfH21PFBSiHKmL2HML37fFXCCS6EfGheVX4tVSR62cwVRx3MpxTUfbYrojz2koFEELMN2hBoAg",
  "key16": "3nRZhCiFbjCcHeW3xRKSvzzPt9yd3ExCqyQG8UBXfpwLRNpPbvTNnve7oo5DCxWyBgc4oe2KJkaJ8xaHVsyPvwYd",
  "key17": "2ArWGN35fzb3HtcnidGVCCjY9iHyScbmjD5unTD5vr3nmKhevCCZZBQHiLFcpyMa5Rz2RVzyDVTmRgUJeXzrzLQ2",
  "key18": "3sRz4PQ69AM9DpQgG3rkTiL9amJ4z37DgMJAWW8ybQws3bRGVqkxzy2kC9YGm89w82obJSkshckJrbrMqyHK2NKW",
  "key19": "5rpmFFj27GyRTvZSwziwSduYbne34Dae4JFDcfyQbKg99zDPpMiBV39pPLXMjENCPAMTCkP9ycxpeiXVt2dMViFL",
  "key20": "22Gwk5SMs3NNkuATiFNPWkqTAdwfUDZUfdqmmDPhbCLQcRsB61KYeryWks6iCPmbXnE4VGyMw548igj7Af1BG2J7",
  "key21": "2eYiWFwzKiUn64pYNS91x7AqDAqimKxC8FWC12JvxE5DeGkG9QKRQm9JiMD2P1mYeQWdUj6iNpU3nNJcJbgat47f",
  "key22": "2rubymFYiMM4SXXfBBMu53ah1xviycupse9JU2VRevDLa2wF6SZ6B89jkAkAx1825AcjrSLYFQX9h6owx9aHJnWS",
  "key23": "22P4qq8Wsj7h3JmMmgTfM8Jdq1vg7y9YrXRz3n9n4n3CvGjfrKgP5c6YxLdAyeqxAsczNien2pBUnk8eMawb1RqV",
  "key24": "DvPi4h4DGgJqEFFjEkcoEMwPoYohMpmYuFSfSJj72WHTm4MNYb9PtezPbbSVzcV3JATe3FWaH6ANNZMxwi4DCho",
  "key25": "2DTmDAEHPmnjJS65J8ddn9RbhEZ5PZDythx2H9gUQBgptj1YzUPZVVPNoF1BeG6CahqNV14xgTcuyB1xu9TMnTgN",
  "key26": "4CWUwtdvmaKm856yCUAF3BLtYsUBCpSpSkuM6izRRRoUscXxxCDRXirP3z4GDDbU1VKaos7MBfnEKVb9q5cSc8xq",
  "key27": "42oURDj1eeG4rcN4F6WvdxGvCkS29szLGfQAQkxJWAzaeJfmU7dqYTNVvwMTcnhFyThcFfGUU57Xy4MwmjnrSRfq",
  "key28": "UAWZ75Ettudu27TYpQZiAAm1b2ngx4qtp2Nus7xJw8TKeejwSkPCdLaUn2m6ZUxstrfEpGME5skt8jkMBsxgE7p",
  "key29": "gDT8o3b9wBgnZhiRaM9GE4cAEN3Rjpbfmx6jLtpn5pKC9y2u5Dh1x2x7zzEv5BG4JDjX6Zsucjvg79p8JjyYWBs",
  "key30": "3GbB7aPoVd8mebUVrFtYhZFjyrzT4Ltjzowe8Q1SvSShAKKTFE7abqcN3hSMZeb1ZGgwbnbJrmQU1hShtGkPsveF",
  "key31": "SR9nyMhmKSFxaoSwuYTEt9CRWipSKgYJKZPbtVrTxGYG3zJ5LmMPj68wivodv5jBgvNV6bhtpn1MxHvQxnZr4uc",
  "key32": "g1AmLAtpxJJMECYVkFY1vR4L69jbetghHG4ETV9KKWqgtCi4wsWeaPDdmYMy55QCpNjCCYJwtDYnuN67h61yFV8",
  "key33": "2Niftt5NJviFxKq32UyryBrFhiMCrTLcxmVZwqGS9X2oQPSDAtNAo9Z57cran4NSWHChVAkDQesKvxSfJRBAuBsB",
  "key34": "3dueLgnubLQjhVRPCFNSYFHMv4rVWgBfcXpUhNShHv7JRzH8Q5GFVANe8VBikQmU9kBuYwqZqtdGQJoto6hcJFCm",
  "key35": "43yEhbG2BRJRVKALigAWWp4g4D8ia3DriqeLoRsZRHV9RkY1QZj2m3gmh25qEf5DZoQoiQiWKi7ZHYz5iYc5h6Dn",
  "key36": "2sh4QbQog7bQeFG8pt3amJkE66p42TUfYuTBcZjYSSW72LvVmyRV1vRPHYLaRLfZ9F1BrPgqAReHEmbX4CF8fTsm",
  "key37": "3YUkCdE1hDTdxJEE6LbiwnRSxn3hzf6XRpqLRyZdJKjxWRrbDRyrtNQ5M1UDWgw4U3KPJajvqDJkNGgt5k1t8KfQ",
  "key38": "3yRktXQZ3iRtYzRWUtsHRG2CbZ2hi8niD9TsCyQqVyQGSrQMSQfkpziGqZpSZCZGc6ZBeyAR59raMWECw2wn4aEW",
  "key39": "4zGGjTWh2XZWy2Vxuttucgsqi9sZTR8fX9kvRs6S7ennnocLdiZJXyHrXWYqg7e49CEHamFtgFQVykTE66Rih8pT",
  "key40": "54ixKjRsbmtJ4TBeT9gofxVsN8meTB22siTdPHYyRTUYpVsjccpq85pFZsnUmPW2bxXzy2BM3DNDxQxu1ZtsuKx"
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
