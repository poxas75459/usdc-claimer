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
    "2stRDGdD8zdXax1rygjkdFX6YWo4bNHa7eHN8xiurh7qjKALn8W5BWkJhRPCQkqFggun8zD4rDPMSwRz75pKyP19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "315pPcbdMzp3XRrqpQBLW6N1q3FUzxQgQp4HWbXVWs5kH5kYpAxSkG6JaZxXSMn9HoikPaScniLp6JZtgjSsEjTR",
  "key1": "5d8rE44dX2CkG69PuF5VBJmu4fH2N87LSxDceFXSgEVB1y5XD4EMB2JKEf4MfqC3s6DkdtwuGewkHBkTSAaBHjgX",
  "key2": "2nPxbmThmyEHczj65fUfckMqARMuWsAdmp1Wt5nDvudMdcJ1hEcXhSMWge5BHeUzLNCaoxA4HVuqiGPnJi7RekP9",
  "key3": "4y3qpqogKjCNKDBQYyLi7tdqce6U3dUWCwzZqKzNEDRJyEDyUzBkund4HD9Fd3Y2XcWoSWXp1bvPxXGnENybtLUN",
  "key4": "4ZegZf7WktEbWth8c71gRTwxFB1ermUjYH6ogMTvvA7QN1QSfq9RtoHCUdp96xhBsTTC5D4vkh2NNERXsXPb2SrP",
  "key5": "3k61ynNGggjUTkRAUxQz9EjirSro96XBKguTRbumL32Twro6gRNHLGLEGPvuxE7yWkdxwrqB52QC2C3sbUo9b6Uq",
  "key6": "5cD6VZvaFQt7a4RLgsuPAbAzemrKtW4vQMzzH7s2qzWshLbUZiShGrxVdKYz85WNF9kQhwBaVFnBwJfAckQaHxKb",
  "key7": "4pKWFR1EKV23BADNhZ1EMRFgsZsq1poHyd1nE4JQg6qA8WgowEUb8ddDba33Wo7hwVSMHGND4XWPALJg3rLrVR2E",
  "key8": "3DnpnYdUYT3bwE9xbDMvjScAVBKo7BrsJSZCKqadsn7taTjLAXZASRc2YcGpFz4r8oe58MLA3aPAEWnxk853Yr3y",
  "key9": "3wccJCbKD9VyhvCASFF2fH1fdmuMc3BL6SMBjuJvkhc26rXYjJPxJk8gXsHfAVvDB2sAaCcYi9yQjjfzhmAvRrE7",
  "key10": "2kM63DvYWg1Xx2GFafpyKFHHGRistM55btgj294saLycJFbTpyRXcTXaqgAj8a5myiS7Gfgn7rr2cuwd2Ag93LtV",
  "key11": "41pzY8k6K8udy1mVSyHyJZaKkU5TPTnLf2PuXHonrm5tAMw7PPTc6VsQwrXQTasKoZ3dfL1raLcSFjTQZyNunafb",
  "key12": "5qZtW3vmc5yNeGLBD9kFhh8dFgBeRWvs8DPwf748gU9eVKh2WCSnXCodgAYsK7fAjfJZnjmF2cCd9vQfGFpBu2JN",
  "key13": "MkeoVUTad1YNnBHd1QYP4YkebcMUD7hHULepCANpb5DRuxzkKXESJUakc34KgVrFsXZLvX5mGywaKf4T4JFiQ2K",
  "key14": "4nPvCsdWYwuBhuMEyQQnC7a5WxRcLJJrNt6DisE27D7nstJ1Zp6FdboaAZrfBTN3iNEWgfYpmpsHz1ra4WXoUYi3",
  "key15": "4nzQCfw12YQMrncTJJB7WvNCT85YZWeg8QgtdaPXCGb3jFwnQSCacs7wnCNRFVNcoQriQwdERAWS3Zcb1v91q84d",
  "key16": "5KwkgK1UH3ZuZ2QrUw9hDGNp1uk3QyjmMRCKzybaFK5Axr5MfKHmm4Bmv633LHqZRsH7ASYSmWFXgJ1z5vsADn9W",
  "key17": "4d4ogptZF8VEiaRVM9ohst9Fcpf323943fuHEarzqVMaNwQMsZq62jFdc81iWHQPN4GMEXfzMXbzGqcwXZZafZSn",
  "key18": "3Dn7UHytC4ZXs8nykgEhfb1nkiTnbRwsGxxbbfKe7fLYF7rt27wuJGaUz1UnjjCvC8qJ4o54c5c7fFQHL5rtgQja",
  "key19": "3NkBjxmTvbL7wZ5WkTnBViWZm2oyPNjVFY56TZWWog1Wor8QkYheFVPVQfAAAuq4z4xY7srFvvu9a2rbd9NrcNuR",
  "key20": "2phEQ7urNbN3CUVzdr4qGZf13MhyrHxGcqHsPN4525iGyMVoVHah6mYVUswRbhBcp4ii72DxmNqz8eUvAj5SA9zw",
  "key21": "28YGVepzfiwjEX2CKm6fEDa9i7V93cfnnRV91gS7iZqdfn7FPgPJeeDu3oMTjrBJm6je2MuvFC2ZzL35EE7BPr8N",
  "key22": "3XNNHnR8z9ynW6S71yGzJDMDAfcFVGGhKY5N37s52HMeM59Y9Hm9voYCuWchnpwtWdw1MBX2W3asoXbweN6GvfHe",
  "key23": "6yhmiU7Shg9g2wPxExABYSMivSbsgmXkEW1tMLPbLLXCAPgUDvwEcq8J6aAJDdZ19varXyyZw6MeVq4T8zkNwf5",
  "key24": "3q1Jrx3fsrRkrVXGuAjo46tfdkCzEH8zpd9SfNqjKVTtHEh2SKVXC8ieXsEmubzwzsBF6JH6hmsEqPJvDh1Tc8zC",
  "key25": "5cbhfuJawuPCA9CggftUU3VLsyDa6TfR7mzXo7aLuukpBzbYqFEGKEHGg3bMG44GQ6yA6y8tydgjjC24FBQDmC6k",
  "key26": "3yZRw5N7DnzWYDch9hk1AZZBiPBirM4SJwn3QvfGoq5AtTfNnVvALpJGdSW3bTu6auGiTgm2wVXXPpKgfHu4UHKU",
  "key27": "2QTkVMZfDHrekSQhTJN6MjE9WMxD4rPid5rJ678MzQYL3NEjv2fNK4jEG3NDwWearqvwhXnJk2EwANoEN4cfdnHm",
  "key28": "2dJeS3G6oJG6qer2HrTQ7yCUvnrPxBevgRMH9jo1zHS8grhvS4Wky3i1LX6HavRdtaZFTC5gj74WBFqtHCpqA2AD",
  "key29": "j4srNp6cD1zKJoCG7QdWFvPZ6h1u9ZiYNgCoJg5yRp8B4ZpCFTcuJTp8gMrZLUrcqrcPMZ3zV88fkzJLbrJKXbF",
  "key30": "3VVYshFWjiwdXcqAV6EiQgKuWgfHnH8eAxHhmj943tdb9Q8hYnpuqoqoMp7JV5ZCMpwvenrvAVmij6e83EgxesyG",
  "key31": "hR5b9XqxFhLU9zzUCzwdKf1Bq3gA7sCFuea2VSt1yn8juVRPDTVEhFzCNsNoyFtCNYuA4WRkcxrCyaQwGHTirQY",
  "key32": "5QKvdDRWJKG1L2jZMaUryr4Uj8mcRhKFQ1HGBXupBPMPoWKFVcijNUE92FPLikBAqGfsWjbdTgc7m8N7HnNKywLX",
  "key33": "3TEf6sY79R54rrhYxztwMn4LCVXLbptaVdhUJng8euRKe7VsFiKNU5UHhRmMswaiX7D97e9pR92PoDN8AanaBqjg",
  "key34": "3ga1HcToiYEw7bSV6fNhCf4bF4fMLNrdNLLuScXi8ui7YAwnB6GNA3u4jD8x7jAS9VBRTqKMkj5L2THJerHcWTzP",
  "key35": "e3wMwb5XX9vowBj8BWHzsZdMDCV7VsQTxH7r96eqAToWsgv28mU8pyW8gxb1bfL5sfgrYgsjtMUPFeWJrPSsxvc",
  "key36": "3VbnG6c4umXSUzgZ78LTxBPxfHQXSA7UjNSZatHcXZHxrA8bZZRPWS8yxVhMcRLZi9bY95B9KuDZ7VgwSHXionHu",
  "key37": "vUdFq3RpvPXpEUM7GDEkHfVcYT2hUsDT9eGjooirYfSqHp33bHTKERECRf5rr6eJGh8GsrrrGZmFgoX5xfNmAqH",
  "key38": "543KEhX4w1zCcf1KM7r4f9UnggxH3R4CrBxuA9vFzmatVKpNADz1bX573zsUUYVTWin2F3BZZA5pYXBYpHempNGs"
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
