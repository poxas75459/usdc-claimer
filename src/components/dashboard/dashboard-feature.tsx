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
    "4YNMu9SHBhsCofAbS3yhGbNEjE4Z8UnDugrFPUhpB4rfQc1pZ6TSebXDD4gv64Ei9LjnLAek1p25cpXD4RU2y1JN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k9DA4yscKdaNaxWv4ATY82haKXe4dFuk1rm8dX5787sawWUADtNfmSkoR4AQL7xAeKXpCFdtxGE7hHZN1SDJ2kL",
  "key1": "2nhmwZogF5HAyXUNtnVUmSU6UH1ujZoFVu2u6hCXzDgzGQq1ZgUEiyC5LXHpqRZr21R9jDw8krVm1fDCJp9f22co",
  "key2": "4xkSLYReDPSvdEKMVo3jqKhz35La1URRq5Nu3npaxRpH6FEGGx1LYk1eCpgkioU8r3ZErUtLU1xkqY7voe71tpMh",
  "key3": "G7onU2Wqi3kAeJRYwErGA4qAhMfAm49iW33nm89ZTXbpWy8phjLSnahXXnDZTVnehoGCsVF5JLXsBtGj1nSmjQL",
  "key4": "3p6TNeFtF9jxdMhddEndot4MxNoULeBz7QsoyRMeqVmwRdivEUsEG1tCyP4iVC8mfbDxffgSDsKWAvHVwU25L3B7",
  "key5": "3CHJo7fUtCwPWqAYcRc1hP35bd6FvToMb7rjLJUceTXqoPk3rM5uJ5Xm3ENhEim49W8pUcCWFKYxZQbuT7yHiNfZ",
  "key6": "Htvn5r71p56PWLfDL46J6buR54rnBVBMz4GSQuYmxdSaV1VfaU6TRxk556jcj8VHg1Jx4yrW9ZnVedzVczoJPTC",
  "key7": "5u6EDaEv1V8smfmXKTNQbEEGVJth6c1xhA7Q8cpGoAZag8eQKntcdrHTEKT72YmZmwNwciV1FDC5ynDpQeBsamcs",
  "key8": "3VRWKrcfvuSaEvCiPQSHdyKemeBTW6kB6HLiakgF9K9rpt4W1m4J3fyzDjw9EdMWk9a3pDCK9maY4NFGHyncCEqU",
  "key9": "FN1rcGPWWVnkH4pG3E1GYpxiie9batEMay1FzTLgwC13Dd1oSQH6gzhYiqPDGzPsgz8i7eHY3E6xvrDFND7N9vR",
  "key10": "53wZDwkGxq6K8Jgk7U2A9feTpntRpiQPXwU77tu1iGbT9sUSMhPfZG9yGGHHyJprECB46gbAK1d13pzYXegbj8Wk",
  "key11": "5wZpMyCBHt4eEbawJZXxXVuEPFPW8BuGC1CPQzxQYBXmfSoi4JY7dBmS9veyD3LxSo6tKKvkcFbpnpp46qtVUJfJ",
  "key12": "u5J1H1LaKK6WN47ayKvY2MDYanKb7b6dWZk2N9vqsS3DXNaQFkP7si4piDk3hJYsEud1JijDtZUFxsX7dyGHMh8",
  "key13": "n3xikPPerpqes6bNUWbWcXt328y7QkcJeEZCv5vw5ZEBMZPxpqGqJCQi1Ku2bpNVQh2d25AzTsE77QocTH2LnPy",
  "key14": "2awrQupQHkWvRG3Zu7fQWiMF6sg5FvfA1y3Q9kEajyk5cBXFyEE11sMwzLi4nLZvdrF4UzVETwC5HiRyEApVJveW",
  "key15": "JpvBF18R9FE4kgTqR9HCDwikaCgthdf1pmMSbCHd8BA3PR8AcVzZkamg75awb8fsgjuU6t4PzaKrU7eaiXAVXgq",
  "key16": "27xMNVu1SUD1u7rcgyi8bUHj8v9bcAci14PzHHyAFG9gmJV26UL7zXk8iAavWZsMswHLRtXxmMbTmcj6ntxjgQcR",
  "key17": "4unWbYSJ6dbuskk1UoYuYYbY5WrqEHzRUwnsnK4VEYa82gCT2CoGotUU6m9wmDquGucxBRhUdPNyu1YeYcmagCu8",
  "key18": "3K2qTAex7KyUzNAFyHQCGssDXaw76psqJP4xrgG7z61R2NGriudVdbvHo1JqGWuSh9c91yDvT4Q3ZYtf98u17qzz",
  "key19": "e9hC5ka3N8KdS2zJVxuNr1cpzTanZEGNTtzLLvB2FUjq8eLztuA9cHaT9CUGs4J5X8HMzMrfkW6DHSxGXqVfyJM",
  "key20": "2MERCD8cbQqZUD4ksjKCpZtnWzToUYoxkDWdERgkte5Z97xeN9T1K9CVwf96A78CHJU13AvzPLjvABQLuBh1fAVm",
  "key21": "2tt92fRhr8M2RWU64vEWqbVWPoEWbontRJEk9fT6Axp14qYUjMYW9qvRt9Xk7Rp77tbdGpsHK2ATc6irUKwEDn9s",
  "key22": "3dnRHB9ZEeva8YbEgQRrb4eBWmbfqfMz4bsruJaSiuf6YwGW7dXf5D7Qec68WCD2Ej4sMqU7FUVBasKS3NVtcAFu",
  "key23": "vkzF2CABhNeDWhab4cppQ2tas2bCwKazkoAYfg1EAVmNForw386Jm1gMg3zHU2jgaAcpkuT7GaCRMjyffHGPSKn",
  "key24": "evUw5jvCVvVjycpcXXJrrQ9wApddPEL6fR3oCVt8eExP21wX8sXn4zEsJdjX3KkewttG5a5o79wmcPx64JAhshk",
  "key25": "2tLY67J5jCuxWhH7ZY8MfZ71RD6hifkfujW2HFKJXSCMEfYsZRnzGHYVrE8AjxdYumuVvEbzAGsfDKuzDN6LQhSY",
  "key26": "4Kuam2gd4aXsaiKTupbVouSFTpKtf4SXx8BYbXXLhGAgHJQkf2Y2mj9ScriT4DSWg2q5ZYtaZQ5GEsBUTSfgnRLS",
  "key27": "oyg5KVic5L5zLAgAz9WoT2sR2o3JpRUf7frezCgsFch5Kyi2QYrQXwjEfrN5ykkkbj6rZTZPeDuqaQsDXMXJ1XM",
  "key28": "rhXPAquCKANwKVgn2Nh6K7wXhPZG4yKEthSbAS5kwXUczSyQVWBt9HkqFdCh5GNNUSLStx8aGCab2KqSttsapYc",
  "key29": "3kigHEa5V2yiFYLJpa34XSJDcXnvMezdKTusiZ7GFN4FSCfAbZc9jTVYZHUzmHYeVuTyLsitAoio6rUhjjgaBZwL",
  "key30": "2RZBUL7WwE4DhKY4NMm82REWU5Y6n7NivmfyLmA5JLtpaDmVLvh9RB5FQQ7q3FCZmXpFYa7GcwDYaRSUf4hGgikw",
  "key31": "4FeMg9Sxofx8TL3obPVzVUDANavTPogEZhPcB4pWJzJGvdpBCUaicy9vqxdRtf7MF1FrXCdMP51enPxXTTvD7Nfe",
  "key32": "D9ycKyA8LPCFLi9V2JyzAzXpqdYb8y91k7DogC1soU9ao5mS6LygzrD47Pxec5KZui3ikod6ypNohKQY8Ph9ap2",
  "key33": "4kygvs48i4r1jctWmtvkAYnTfdH78an2UkPGWBv1mbdUNNhE1h8WFZ2uAFxhT6eeeSXXcKG4phWANdh6Ly3UYjB",
  "key34": "5AL4vbWLAyNs58QwRsSqGQGiuNtv6jSq9cj6EQUm9e3bLp1bDAAdZ9fQun6yLxKdsi5VbLVkvgXb682tL8UYXn86",
  "key35": "4irBGhRm3SEsRirNyAdcTnX1sHFUvq3LfiLZYdWXTdzR9pi5yyHSry4mJBgn3gGHhMkqryY4HZjCnD8HUg6T8T1R",
  "key36": "5RJFdpS9twyBjFeKinWatonHtNPEmJsCEwQUiDC33H6ycFg25wisN7oLvv7xAxCw1XRLHCTmSFZ3Gf5jiyaPAwuM",
  "key37": "39M45QE7ea5Uik4DTsPGi2rdZeaS4srmwVcHstkpDuC3ZLjVrAVjU4YGf6cJRcEFZgrd46GgT17BnFGnvvsMvWnU",
  "key38": "4ofS3jYFzKGM22aXHTgsi5YW2nQ5cgTTik2KwVJ8KEZN1YNNGBuZmJ9HQbwJHVnsS36b3CEqMAnuT3N8JiYDk89z",
  "key39": "aQxjwvQA8h9CDUKiys2R58Gs2pQSUiCLXDKdJGGFsmB6j2YLNW3vJMnvMLkZtZH6oQpRJ6dGjd2ZfSurHeRSToT",
  "key40": "TRwCQqmKiRcCgeDyW3nb1GqVjs3VPbewvAsixYJTcibMC163S7KMfT1j3BzfYtoHDfrmr6eF98MAa9Nxj2HRtgC",
  "key41": "3UyQYG4qtrq64V6mRkbmKvnEAeRwEN1k89cZrfPbuQDsR7fWDv5LpBPBLKMVj6KD1fBcrEZMkytTtVTBacqb4PQv",
  "key42": "2fiPpdWx4Pv9xbJxBqNwA3mKLasduzSfdFjBjPSqUFEnyPDWg6PDYc8DjnWpXdZwE6YbtRxtns4VBMxyWvpeUkAL"
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
