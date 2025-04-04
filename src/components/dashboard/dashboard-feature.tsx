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
    "5anCU4NGHcXZ3jwnNDSWk1QVTEy1VLigCyrEzLLmmtuLsFvy15MBTdFXAeKdccb7BMjSTR6tx1217coaTB2Ff7MA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u8jHzUF2jB4iUjAh2pMyqqUAJQNd4jYX3EeS5XziM3S3AKwqU5usWjMoQEaLeku57zoKvYyAfsXxt5BTs5Le5c2",
  "key1": "2R7ut5UxDyiG3fKDQ7HHKVVxPgySmyLnKWZLSxpBfdUxATawKbmVLyoAgZ78HaP7BzciDKjWCkForKnCsyA4VCQw",
  "key2": "3Mf3uABzfcAsfeozLG63BoQqLTyN248LKYKNLvG5aYPce8m2aGYzXgQ9f4a9aHa76AtZ996SkXu8PoWRaL1CBKss",
  "key3": "3PeJ5nGvpSdUZSeaDHYhL11iy2ntJi6dyfS1SSK3kPy35L7wQeAK8cU7KaBHaTBr1anXDF7enm2ybacUxyo2BLPd",
  "key4": "3wcYXn57ETEsF1uUv6vSncYR9uRcXFZNr5Hi6zZwSuE9amYVkKZAWL5WUxzafaVpTuWxPgtU54UKVjKRwBidyovg",
  "key5": "4QuFvudRYd6nktvjKcFoPME8qfuQ8JD9e1o5zFnZ1FCELLWv5YELDL9Qi3FALQqkHHc27ZyEw9F6xpFzoz5kQBG4",
  "key6": "4cCyD3kP8hCVZN9y5ZbemLAHE29T1cWJraZqAmkoKz26N532yaQmdwPpAZqFvFsGuUjvnqFop4eZV9kQWojy56ZS",
  "key7": "5bsfEaybnrkEfDsHGVHam6zpjw193ZgXKWjeQfFpssJTW9HTKnM3zThCF2ZY9Lep75yCE2xJqsYFGaVQHYM2RfoR",
  "key8": "2BhQQKGTZ4dAXLN1n6ySaghoioBUKc1Tb259Wco2cwVBVqZZDuipT8AS2yReoGH7FbFtNHnfrojnPHjuwVS7P5G8",
  "key9": "3gekYXGgmzXrKxzhvvWrphPjQ7tNZqiK7qTCoNsha7X4bEtZEXxMk5e5wccTcu1uKLwG21mRiZGZDX7udLDVafrc",
  "key10": "4fsVb6HRyP5caRBKV7DhVscDVR2jWor4Ja2sCAwCpiqZmbALxqxWJk8cBdFhfDcNok4RzqP9is9r8NTGA4jbToqL",
  "key11": "2HfrNQsyn7Jji4f3n4PEehF7aw3XkqTLMM9mTKBAGTvLKsUvBdhs4QrQK3ZQyfWJtjSC26p9ECZCmz2SZtmFdV1h",
  "key12": "3FpeN35SYcwGJwj3Uyd9EkjPrmvUoDSrWB6TEyjcGZLNniK9rVqRs8p5ejw1zc71jNu14xo9SHzDfWL3M7xUzHyj",
  "key13": "4Xo4EYo9ivobmCnQ7aiebVv4q8MAEJoUmS9vWGF6aBhBM5rGNwbtMHgaydMJUQeixroUdL8C59PNVj3aXJUb7SgT",
  "key14": "3EtaKx62QvJ1SCquC5TdwsSN7VeAKof5avUsG1MovvdDq93459D6o1tGxFzKpCSD65JBbCbGbDws6QmYC8uJSVcD",
  "key15": "4euSaVEQeYnEjhz72e2b764SpGRw48hd6je2y6CL6fjrktZbivSd75tZiarSV4XXcU8KRcwkpojgWAq1wjQDxMzu",
  "key16": "5dhwHg85G1n6V2CbkHM2oMBoKpxDLn3RypAfEGb5Wirky4yRCj7GEgGXj22Z5LrLniZsRPpKWaKRntqEYNF7cAQo",
  "key17": "2Q2QgPgLeqGx4vfzG3fxiFFkWGFNQrcTBTybX6n5wTHfQbXYrByh84Hbhik8hf2vB4GQuH8sDSk5pK9rjH3U51rD",
  "key18": "o7QBSqSrnEE7heKjuJ4EnZRGdf2hUQxgcEGoUUA7piM9jYgeSh3aqVZNr8pDbVp55JAkeh2JFHSSy4jd6r416Hp",
  "key19": "jQHm3Kbb3oGuuiJZSy67SWjzqd2SpY8GpyWDguL9xyXDx3kyRuqirczijNU9j4oUPtNpRtVmCgxNHg4tbHPtbtt",
  "key20": "4qVhW1PqNHadDCWUv358HiZ667BmYAAxPsUuzsYzBTfLwCvd5AjHD2io55eZAWvmh16qpv1EAmLY2WGB7sKZ6nXb",
  "key21": "4oPCAhRqVvo4QDpvKQLtyTYnHHCUVDABqdUBatPF9EcapoFjsMDmZGHW42zVY9CKPUxpSnNFrxREuVDjz7Q5A126",
  "key22": "3yytiysw6h6HoU8BowdBSjgDp12Vupbnke6TAsfMtYqwcoCprHmtcaYNdFV1T2B8Z4b7fcjJ5ZEF4CoXqxejqsRJ",
  "key23": "4vK1YVJMnfrFcB3HqUrsC8Vqmn2ETkLm2oMdXTxdem125D33G7HCYTH8UvfFdXyQnEp3SotEPc4Ff4Z47u9Ck1ig",
  "key24": "48GBUKG1g1xcEKrUJXffxGhHBxBHYVLhkQu6c3jeLC4FGdGN3dLs1X7if5VaewKmYWP3tLukWKKo5m6WaQHak4Mb",
  "key25": "47p4uPepVRtp9H2UFxwARHgxDE2N8XSjHruJ2cw6nrRcTRVTk7TC1J5jpSnJMQT17cwB22RxyPekKJTeqncW535P",
  "key26": "2LjfDqw5sncqrs36kTXGG6TQKNabxZFyNyvEpdCCMGe1MdD1U3gzhXy2nZxanSfE26kTCdympdong7E9EHrp6UMH",
  "key27": "2k8q1eek6HHdVADbersgrypvHCeVEotKrgbhAaT41SyJ8vbhNFxBjyBAm4Qhi4DobQbe9n3iWGvNrWKHGA2PnUiJ",
  "key28": "3Pt9GLeMCzPTkhfwR7zPN1YCuYu9sNghswzL4ow1R9PPVK9TH86NNigB2Esc8rN4BSSpyKaSsg655L8yHHz6tein",
  "key29": "3LMENgLKvym6kn87VtDBrh15W2zkXfBbZvt56RAkU4F1SxzV4n6sYuj8QDjeW6HB8KSwgjNYs5Jm4WFSdtK8iHNU",
  "key30": "4Dvk42ySoWMCtcu2bKi2oz8krSCLuHFXgCRJwhCjNSGkvwe25h5njE2JF6j7YN8YGjWtB5GVKV7zGtAsatH7azp2",
  "key31": "5vyopH5xwcd1kjzQ3Kyp4FyckveoRCPSBfRVB1qSeyxYo9uzcFaaP46DFmLKSQFLf7v7f43Swt1YhhJk8My1g5Hx",
  "key32": "2iPHE2j5D9GjAs4qZnxDriKtVunqaDp4LCwzsrqSXkkyqiqcwcpPBTJLtUFeTN2o5kdyqv9GS6k4PFE9HirzCPcw",
  "key33": "4sWBMG8SLhoa6AdSw24cMMdfxWqJ4e5MvXTyMXbUwK5p2KTRSChQ3iPcn2XtYBnKsFRGVu2GdGzgQBJj8xiCfWMq",
  "key34": "2eJZhda6kQuprwQ3JHUBk2gLe6ajQwScBMZhTLjgyigXosi2cCurQaEWKzH6aDNgiAfs7xd7adMCyquoTRzATvtW",
  "key35": "4YAkUacUWD7AFSmMFtSx33WQHTUHaWQHpiJCcrKeDW2SnKbnifp1A4Gvk8t4YWbJDzRfzArcnQ2PFqkdh1JmbZt1",
  "key36": "WM91gpEQGjSqfL6UnEJerx6Z2ZpJdC7P8xjZNG5ruWgMUnobDktVtpwynfAcXfN2a9mo3mRvV1BidLYbCJFLMJD",
  "key37": "TpenGJGb2JDE8yLJmK8z6gfi2fmthZTWjh3G4q8gVTT8g4SBzsCCpp8rA5nVUvHuVapEnq8PsLTPNpg8Qk9yFns",
  "key38": "4w4GABkcTCsxfugAbVuCtdWyYiyjnkzR1jpb3rxnFNk3cVXRGZkto2dPd9sZJy17FmW1R1Xr1KCgEwG38825UR97",
  "key39": "26r8hNqs1mdFcYQWe913a5E2EWCh1iaYWJnsG2cbg8Coj1NY21XadzL3XP2XUGkpAvvKZobA7Q7Pi537PMMvS9vV"
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
