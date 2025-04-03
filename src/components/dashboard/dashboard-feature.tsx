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
    "2YLYa7oNtDZwNYV9n5gbfK69CnvocbjH7MdvS79bifBx6z5ceLiEtkRMSXRPzU2o5Z6BsSanqvnaZVAsY5sH9UJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i9chM9sbs8Y7ougMqWt4XewvtjCRiTXcayyU6jE9C8pbp4jP7dxrkxy38ZKAjz7rt9uSMPMzE2R9aXH4UAK8jXw",
  "key1": "3GyDjxPGKuBzCuF1Zr5FKNccvSTKqZZiBJ8qhaV7PVy8PpGvc7d8TxwppMox2RH1HHL4HLQwTyJ4H8heGDvAfRye",
  "key2": "3cWHRAKDbgyEebHvsMJsmFuxJZWF21eFzkRujpLpN1fSvkUVQAajciQoXrdBfCvaeXhpsL15X1euQ9GKEdqkgz9y",
  "key3": "33pHKQzqahsvq491VC3hfhFhw4sC2LutvXQSwwgtEXxHjSoYFEyogmJtYXcWbMtUJ9vokpPzYr7HdbJyor7uartg",
  "key4": "3KWBGdAtHga5WamJkWKijLboTeUTRc6GobZasb2AcU7QDrKmVdbySRXD8g5jgZR1K2yK5P88C88s7zNiAchr5Jyc",
  "key5": "Cbh7HMSrgbSqRGKrKbx1isyDzDCvAM7MkTwBLLoTtxwgFKLPdNEqXN1SXF49VroRUMg4yrLaoFBoYbfJqgBF7Xe",
  "key6": "4HmMdNv4E3PV3p8hN1r1GVckL3rA2jD1KCqoFhz11HJ8FkSb8TAyt8oxdXYUD6UNmMwTZLj38nCAk4dvLvgc5o2n",
  "key7": "3hQkgrh6GUCQu3Cxaiy4tbPqjoY2LpPgKLxfhrXwugexQbQ4rQ3BaywtJBfiJ3rzePakQxdFdpjrbyUvdwoGZVSh",
  "key8": "5LBupn45R45uTW8D21tM5oaMcSf9eJsLqyH2DsXpisp5N7cBSZcHgGyY1zgh6kBoyF2AzJL4Hfq3rB6phmWWpCHv",
  "key9": "2dZBH2e7qXNEvSnqMTsv26ngkxaSsAmSGB2STrMCy7uuMnskRHB5xYpBbk3DcNscTDWHKuSprhRxL2w3bkyHYM2i",
  "key10": "5fk6m6qhk4R3LhgHRbtH8gaUZMgMjchU112DMDwmPKQioNhE7NjGvjEv16v6DMCPcXz69QLtjoD3uRotsK7Vo5dP",
  "key11": "24zRYcMmVe5k9QtcAx7mHvS9u1P3xrSCTENWJ6YpVsERVDPtqBN5U6BsEnyAyUURdEo6JbfLj1ka8a9pM6z7Xobo",
  "key12": "5QDNkhNfoEkkdH1VTo6PUFuJGvUqDkdVCoHhpYHzcdPJWWxByVoimVqacs9SCFGgnuYut9bYpBQn13KozYD5Hccm",
  "key13": "ZHi1Mgog7sYoJJo6vV5Pwpf4UAFnmKR1i1w2SZpomnwVhWxKJF9idjrmYm2h64QnBjRfMpQN9pmK1LnQttAASiV",
  "key14": "47nTs7kp4tnidzhWSacxF3YycmrsypYatrfSE4y3FQ2PdP7VBbAKtMNWacQouF3Y7pwAQKRAayE1VcBo9jSbVWAG",
  "key15": "5FNexyeHYXaq2feWByx9RrUYPkHis9UmEaUNtPJ8zLXTe9WB2KZ3stwVHaqhgUAsWYXo7Hx4fx4dMjtKPzfQV2bL",
  "key16": "4LD4kQo6Tnep9sZtwceQz2N35g42EjFezMxVMWfp5Z4Mv1PBQSF3YfqiGY6o8AEB6ABgEKUgYzrCTYSHfrSErJe1",
  "key17": "JrVLfsrVGhyRtGAqoza1GYBT3FSXrUGMKs9bV3Tk9Qoo1k6pebV6CGmowywkQPMk5hadtd7bWETcXkcJLDJ4aGE",
  "key18": "4UWjo5hsq1ejXqFfbHjmQk93QmBdX3Wg4wmgoK1g3LYKWGZggufiWzc3tGSK62jWRTib8S5PvCNcjSdQSG8LRGCG",
  "key19": "2627R9RfcFH9BLhPV4YzjdED6pjMfUmScYiaTvBR5cGZE39Gnxi754NniyD3WsEpwA3ViKXFn5iaL59BGi8b7f58",
  "key20": "2Qjb92acSUNwyqUrLqhGEyLarVvEkrDDoTEyFmcrWU8a17n2BFFkgfZEnUXHDDzjWW8MrC6czJA7sHJxBcYBTLqb",
  "key21": "2aBjVaKNkWhTRYgvLn2ZK7HaRzQ3KwgnrNAjWYwEpPFpYMG5hWSiFJCgTuPt1ByvWJzhwKNC9eua2XswfKoTmbCM",
  "key22": "2kdBXwtujygEntFMPW8M1Ajt4UzxMAv5S6ije8k4TpcuneznpvvkqQTGAa8qnFaJ6bZofxjo82LS976JjGrVWdt8",
  "key23": "4t9U5V8djERNuCfyEMZ6Mzf3DCjf4awJjMiXsekmNtYvhDetmejaMooioFzyMRtW7aHLmbx9aAJs8B5bvfuDdqqf",
  "key24": "2pReJcwbcaGuK6CXSFqoWhtETxWNUxbk7PiGmNGaFiushn6GwizgtamwrQ4yTBJoSa9GrqFuKQ5qxwDRrLCgiZ8S",
  "key25": "2hrxv2arfHTsCt5GA6A5bKrnHJZF8uTEPwiU6gD7i4MLuCvCKZNUMB9V8huvJ3NYtm9r7ZWSDU5364r8q97D5LEP",
  "key26": "3KmSYNmUVC2ur5G5ecPr5VVmvRMzWM5oA8us9AWFbPzEhhLDDgrBcLRXAGNHFn4598JU7hcXBpoFYGohh7oRxref",
  "key27": "331aaJxiJdHbRe1tHJdPy7LPppXHV315fFEVLtfh6nGPyLSYprMQGxj1Ayxr3j7qP47h7swHvUW4eSHhHSHLgB8g",
  "key28": "4Uyvs6xuHg9aW8yNtBMXfFvavB2m2cgcBfn7oTNJ3UgnTVWchQ7LG4ZSa8LRWi5S963q7c6vsd9bYtx4VQuBWaPg",
  "key29": "2YSpRkxd8M2tcszcjAky7Vn9eVyta2oK2uYVZgj7woZGjkjQ9BPmWfRyDds9dm2rdnQPBn6urQv5NKUt3hCQZ2yB",
  "key30": "3oBYjF2VX6EXY2BtRnYpDHVWXWyQ5inWE7hNxMSLfEV34yCgc71EHP5RDSHbATD7WatnxT1h5GsPhz9ajPtcYaeA",
  "key31": "3n6CDZoijvo56YtcC3PFnAapDrcUMX1RvveY5HWwngWdAHzuRBPrxPdfJByoKC15yPt9adbVjvJNFF1j1v4nFcrZ",
  "key32": "Chs7z3jfxqw2dHuik7jpJTuKxEY9Dfxp89yFBJngG6b9NhkYr59YxbCrYqpqmqFE5QMz1QGBndmM7DGT5LA5oqx",
  "key33": "4MafAH4FhuJaXC5nhFrRL74tMRPwbuS1h1sy2ir15HuT43NW35kHd9RzWMR2DvgUxMGGnKtK49eWfQfdM5q6Z8xT",
  "key34": "5473XwASZ7SzX2Mu4MtTHHQToQZbbC4BzMg37J5VRxXSPGQBLNaPwhPAag6JnwAADqqUkov9r7kDZyLjHjFFpDz2",
  "key35": "5bWEgbjEM5rVDeSKY59SXsPiHLARsryjpevHzbvmbu6qEEUeEPnfDobmeo4nnWSrJ6koMsLjXSq2VMtHKtdSpfH9",
  "key36": "52mRE4KMYCjsovVRrKrrrNmVU5ET6T5LosCequwwhhK48tDfNFrodPjA8b6Vwks4jgFEq6tzbpSx5jd6RXfFCLko",
  "key37": "2Qgtt4MTU7BxdPLebssKyLjRGJyiimWYg2cUa6c2HDzk8ias31iFp5Ej4qUkD2gJvwsT1vFhvQrp1oJRg1mtH7MR",
  "key38": "3t3ktRPFADKSDNGpVPPaDviwCpso1c8Ddh6JLh7fLYw3t3a9BkwzwAauMT63dFw7WVNdx8HAnJgSBLf8c9RV2tAc",
  "key39": "3CZCNcLFMx65wA4AKxP93BcSh3mQt5dT37MYSXUV46QiFR4L5YPt7pcb5NxQJfhSPTyyst3nWamVx4MmXKsbTrn3",
  "key40": "wb744fX6y1UbQ6Gpd5HcHrSg8Y46UKqsEke2skSXMhScXnWhJvUf7rTB3T5Ey9YZMd9K4domfB35hvg7d3BgGmm",
  "key41": "PVyjzgt7LeSEbXUG8WHxtyXyx3yf2b3mGTMJHKDPHKPyRexwGw41ZMhr46m8boSzBZksJ89nJB3a7kFR7wYnAbw"
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
