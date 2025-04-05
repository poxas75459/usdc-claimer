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
    "5EXGofsHD8yLDCZK8ySgHeBTZ3jyCFW8jTxUiKG5SRYakMm7PdY1tM83HtJ5XxH4FPBdBeHwFG138YfRHLUbbNjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hPtJqaviu176woe8ikZVmqgumzxXtjwXB1jeLvrH2b9fVWBVm1dhFGB4gkQhcdG3G1CU4Y9qdK88P3h4cirMSsc",
  "key1": "3bp2NWyg5eHRwECBLuV9qexGX94xKjNA59V7CnxENfyFhvbFWoN8QfnK8pkCEdCHtid6ynCCuZ6RB6VGSYhqtLFv",
  "key2": "2NnTPq5J9Ux8mdPxJykt42KhdzRNFBjyVGQGSTmLWwsacjnWMr58xvFPY35bt6NE9kkNZdkGjcp7wXN5tWrh5ur4",
  "key3": "51GLhQkowyxsk6uPFqS1U9NV2xQzQpLYj1y8ZRmcv8uwcAQK7UZigFB8F6B3N7y7QBvB1vnwEmdfsSDWTmecWEiU",
  "key4": "nR8dqAjzVapnXNAJNsyrcy4zCtJss7Cnw2ZiF9pixDPfqNSTo1ALgQUoXe3D9rz5gACpXEUEwgvS4tPJKQvid9Q",
  "key5": "5DbMDVo3b6LyjeiAoM4NvYHkkNrRmR2QrVdY4W8GoqcoxkWXozHWW5jGepZ8xHCPyvmoDjyiv7icRBSPz5ZSkxrN",
  "key6": "fK8xpYFtGZLpLSWj5V7zHavENgcSWYUzpopV6gWzno7oJgXJPqDvNzwWPbZxWpeaNt3bjZqQzDaHmFKy2Nuh2B4",
  "key7": "677puAXky3qiuCQxfMHAe73NrsPyzeH5hazqi7AL7xdnQDG3h2ECbCwTS7dR6sXUemncTsXZ592bHRsEjrXX36pN",
  "key8": "5qzXJvvLtfXpLX27ZrAhM7SDgTrk5k8CksEmY5vgBxFLVzGFhrbNMK72AxrD6TU42RVSVP4LSD4JeG8aA7HcFpm6",
  "key9": "5fiM6hG4JpckSh5uEcZnU2yhkGeF4rBsennywXWLpxqQ3C6Vz3t8efCR36Q63wLiqj1Rc8fF911Zdxvi8u6jyFtk",
  "key10": "64sFjd4mCyGSt6N4w4qkMBJGHjKvPaiFU1H8JgNp1rgwzLpWCLmqBrdFduYc8u1HcR7kYBSgGwKbbxqgaBXPp61Z",
  "key11": "pGDdDKsunFRy98RR3MQYSYnvEVr5Ed42Ab8EMiPaGfTN4qnFEXvNoZEsmrUZr3E6GLZNrntMD8R1Gg2FsZ97sMW",
  "key12": "JE1b1oki3P8qqf7Pjsajcxb2VUUtyttgU44pySHyiHSEtSAB4zv1feoyTnaZhK6xpA2SU4pAXNuhibJUf19dKt8",
  "key13": "3EzNvRTnAsuhVw1fBrnFRF6WJVhj4azUMZJE1Huysrakd7rCotF5F1mLWtFgsfKchhFSQ5PCrVNguT1iVKAz8ptB",
  "key14": "5P4D7WDMg3LqPe2B21Z3yzfyWojMBVbRsMRJSV3fEzt5qr5vjwjT9jx98DytYHAbQ53kVp6c48iEUAdXjm16iW3",
  "key15": "3c3peGHXFod4SUT9dkRKApds46SNw9awURJ6Cty4VTVnF782YTSFyPAHhu9jAERDQL6t1vZJRNHFk6bjDVioi79y",
  "key16": "3nabk6uyh8d1Lz5oT4JwLvTJ1zUPU9QkFurKACGnZ1cQ89cUW3SQ3ELVch7houfsYYu2vTrrQCCVNXfr3vkAPFJN",
  "key17": "4x9RdyjvtsuD45okEaarZSxiF5ZeUbtBr6kf19q45YCMZRqXekocDtp4iF23nFYfpDHctDA5Qe5uyV7JuWLVGcN7",
  "key18": "2sVs7F8f4knAeJVrX5qsUwU7Wi1Q2tj3mkdSJGVDtPUVWSXbSaEPWh2SGoNVPjRWqRRySCv2Xu42DL8oLA13afSG",
  "key19": "465qqYE9v4ha5bNteH3quPN9uzGWTjJDz9CnvUA4X1adx2f86YhLgroSMiK8UFErGmPqdq1BHapMB6k1VvpNJr7Z",
  "key20": "4rkcrp9tdhQCLB6WK2hdb73yP2C23aRVzqxdfeg7fKmAqEd78fAWP4FjDA3wJbRjQctjRNHCgiVGE2C7k8pLc4ha",
  "key21": "5beWEJsnHYLm9F81WkgYRV5VhBUUDSG76oeBeQ3WybF5Dro2RNqmPdVyn1vpw8twmefLdQx9KXsAQSJeSDstTGmP",
  "key22": "2M2akkF4JwmopEFfVPoAyhcNc4SUkpGeYjPnbnAd7dBWudH2bAEdJsPsB2sRKDKM84dXs7um57NbTPX6H3DvxW8w",
  "key23": "4f8RMuS2aMyDrCMH9mJUf58mvmUX1y3PktnwQ8T6cqfmao95ahibKF7izu8cbEAmcTtna27RdHSj15iV5FCbuPqh",
  "key24": "5CD65VV7pXJ86H3opAU1uzCtFgk2EFLDpyDbVcsFPM8johgWXuGqVcEBnHXbLDnKWy4o6waEHdXH4S3J2kz5BnvP",
  "key25": "LqAuhKX1viP7CsUQFQ875T1CsgfHoFinxSvX3acEXZWMVm2Ri5vW59NB6MgAQowgoa5oxmfGjA8CEAdpxfdqrcE",
  "key26": "4ueQyS2Sfqfe7J1m6VjU3RXAbAC8DWE8ek5qMD9L3fYVw8ZcyKXbWoZQYxdnnCSWuUX4LzKFbXCrQU1sevnAT4dq",
  "key27": "2nwkhTDmx2ocCw8RweQNdmXPKACAdGBMwoFfLtjUbCmajA332UYvZf5DoZpo5j4fk4K7ijopXzHJTawV8FPrhRwx",
  "key28": "4ye3UbQRuDugu2sjFNg3c6P5DcEuW1bPPLZFLBLYNvPHtbtyV5NXPcXLJgppnKHv7bcP6cb3fQR9SSbY6SjfJF8c",
  "key29": "VabXz1uRdfTtk3sWc36VjUQ8Ln7ixBAUBjFcXtScqPABrPnprN8UhvGSEvZrhhXFXNsQiCQ8S8y4iUZdL1tkVN1",
  "key30": "QC91Q36hJ1mYBaZh3D3x3ahbNyVX62s64NDoQFNajhxJwzoVWJBXKwnzB3pYQuUrLNF4eTzeU3ViMRWNcqTH1hj",
  "key31": "5xuALTibN4zKb1cRjvqBG7DHDnBh9AeYuuTvmLvgUWPp6CRDUVrMXxj7Xg34tjhEfMnNy5AnNH31wv65H1aaYDPw"
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
