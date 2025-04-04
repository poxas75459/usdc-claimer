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
    "3wwSvETAFtpe25ufFfJwJwZPQhts2kxtMxf6HNP2Bc6bnayuJVjRckM3yaX9PcNnGBiPUCpDjKkkpYV8Fu9iwxe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J631d1gufvc72fYeW7yXiCgWmBAewacU1w3HbqSkQ7x4jGDgkiig9hferTPNU2WJXqmicmeMTZzV1NdrsSgxnE8",
  "key1": "64LGZPoMQft6wCNpVX7SkEUESt6SNEwWu3E5Zg28BbnqNsHjYYxEYAcbyojr5wpcPAsLa11fHMYRoV97tNUKdqaU",
  "key2": "tosmQhw8wQTWNnanLqAzYmtNiDz4bvfdNJNBT7se3gDUS62c43fuNL5c33HkKzjUCLrKfzkeJKZRjEjTuAAMC3a",
  "key3": "31hDfKZfFieZn2BU895egjzu2Cxn1LKSTz3XxtzPugN6qoxJo5pg8n9iFyPTPekeSmKoau85VEywEHoZJKkbpstp",
  "key4": "5JEgudVgBvnjb5e9PTFoe2At9WEXPiibXg2K3HanjTwHivTpw26NMM8fx5FKh9EWLzH8F1j2NhmcdD6WuzTb6YwS",
  "key5": "5z5uEHS7c4kvGhLMrBcZQHqsTmnLiQRSBpSWYdWdWvh5t6rvn1fgCKL62rDmGJWna9QPcgtapb6pB8rvgnKXo9jn",
  "key6": "5BF118pW6NWVNxW7eAXHsQHxFqc7FGs2sgZUyertzWXwoEbarXchmLzjKFgHkPS6d9u1DTqYQggVQ6izuWsimVsk",
  "key7": "5Mh8gcMjpfak922fPBNPxDxEWXuKiqiNfjuwdZoD8kJG2PKCZnsgK1azeb24LTeYE37H3QBYyWz9XYzZYZHFg7T4",
  "key8": "39wbZzpRU5Ngw5472ka1wNFGxTbfCV6tvi6tE6DJmX8kg6nATAQgeCtYYd2jQUrUVkTuoK8FP3RQuHf3XcJ8GfoX",
  "key9": "27mtKqR5jqgiWLbZ2yZuQQgteA9jakV6z4YQXaA3fDp4DPi6HW8eM8oLML1UJJBFBt8dzBDRhQR2V2vkQM5W2Xd5",
  "key10": "2dUBNVURv7BKMdpewVqquirx6KNbRHrtDkTzL6rTTCjdW2y3oQyCuYbajgL7ta8S3DSB4thdRYBUFYnzn8pRLRYP",
  "key11": "tJgphMbCDKnioU2fKCkTH35NXJJKjifvKdCPJRRSWqbiKUiiGSP8dnTuYZTWfBWoTfA3ptF65DnbsR1DHseKp2r",
  "key12": "2jSa2YU2wGYfTv7DuHDQ3S3vAZm24fssunRPp6ko8kgXaPczHPVUdZwULNJcvWaLUqG4fMi9JdVAujiLWVjVBZ7G",
  "key13": "5WN3hCfViRVWty921vahkF8o6zH16iK8ey6Bg9q74aFhawWouoFVaA7m7kGT6xR7nYdaqv7qNa8kYd7YGLG7cCfZ",
  "key14": "5fWBEaMvjBPuxjRvy6FRDt1Y2HtJVBSsSu4ErCwgkMMXR6vnmCNKX2V9tovSibtjHCsAYvNFZsvitCtUbnGS78yj",
  "key15": "3wyeobJzhCnRyVyio9whDnexpUrNGJvYDXFr8SVtdaeLSbGJ4ZnEDHDrTAW9v5vUENEimHJjmUv9gocNxJPQ5GEw",
  "key16": "3HZYdFWjuZF7327m4aV7J6QWHi6YnAY5Luo61eSaMvqS3GDuevkgvZKnxc5q9ywDbeVAtmmnKpVTFMZxbVANu6CL",
  "key17": "5qLLvnBiCPUGzLBx4VSSMpKkUSpF2Aus13iD217EgmMCMaTwBciqyxR31N9qJ3ok6mtg6YViXRvqXH1SAhoEuzZq",
  "key18": "53MPVCeEa5DNxpBUtdcciVqvSGiHHM6hKTSsgTYgCK6cQUeeqw875Jd3eArAJwBjQe6JB5qPLVbm3rDFLdbSSyCW",
  "key19": "3tfrjN8LsB6wVNXjhBNqTLdFkg2gnFecuYuaiNda2Sr5qtQPji58k455iWGY8VBXpSaxG7rtXqHnxyvgRVLJHRxp",
  "key20": "4CvEdUckbf9eriRogVJSp9cqsBctbAxjHLUStbfFiuP2eyoNGkDDXi3sSr8xELs7qPQ2YNK3pHQhPuWfbsUkmKmt",
  "key21": "51CAAzNtjn2MVdyDox3Q3b6vMzytWtBGaMTW9sNy3fZXwNYB5wyWj3CotfPafCuQ2cdHb1JtzyFWZhAifSc9QfjU",
  "key22": "4ydTZQEpPd7rwHZ6dw48gEiM4Vz1XkQh3SoRaKr5A2zosJ6k13RwJD1pRGyjAu6SAkpPA75YZw2CzKgPqVPMLi9m",
  "key23": "3z5frTKKCVSrnX3C2NRAD7kd4GrVUkmKkj3iNm9QssEFi8uE4s5c2TEj84NjEax3g8V2AgEFButotjwEcSZiy6rL",
  "key24": "4BUcatDcFFkKTjV1s9Kpm6bgpJDTRzLWXUwupweG1b2R9VPG1TiRA58c1qhGvNAfztdnnWu7CmVQ5KjCUW5Ap835",
  "key25": "4PMw9ZPNxHVrRh3myfgybKRvwkJGDCHYjTUwQENZSFars6CtjVQKSunYimCihWUzin85WtwWmB256absyEnCGixg",
  "key26": "442NkBHMP4uEqfrXorJE4rHA7W755JH8cFyg3jd4ybDzWSDnokP2toHjkqD3sQLnVgPeMzxBbaeDR6ZDLt4fLCGx",
  "key27": "4oZ52q4FzoJfHDSwCmZs4a1j1JrKaH3uhMbyKucm46yUJtDYhFhkFTpq2W7wnJkxYTXi1Dw79qUAvY6A8UkfvX2T",
  "key28": "4mnwwC1YqcCwQf9td8bzyBmMmJjk61jTmiza3fArrWUNe67CuveaG8MihEQqXVQGppEttEYcbuNuTMEt5MS3Dkmb",
  "key29": "3SxmMQpMUiG1qS1FVtUXJSwcFMFuWJ6XCfuxcRJDPnSnCQugotHkQibkuCTDdtp3vLhC4qQrYf7uaUNs9N8kh2tQ",
  "key30": "43kKQ5UYgJKGinFy3Mhu7QAm1Dysox8FhRYSU6sxcmJwKQqcV3pJ6UBh44B36YmyRUY7jeYMVQmKhAnGt8z6kFuB",
  "key31": "5guDP5xBoXQsNMaLpufzdFva5kMufUvc8wibw1Q3dp3aCQUvGVqe6Yp5pMkN8GkpZ5iUzd5AT22yz37pSyFusfWa",
  "key32": "23WBaSa55JzGjznaGS8F9fAfUoNHMvruFfbwjgv1x6pUCRwwFPfZShNZFYpGYW2wPUyvmEjt5zDvyT5cZ9NcHHXW",
  "key33": "w4Vu9emu5ywyMRvrcvX756B1LJMvpa8JztcD7y6rv7bvGZa9rwQ1GAoA15UkL1Nh3XPHGAWKREzGaXELRc8SD9J",
  "key34": "65QWuh5zYq3jFFPjyuQYsENn5iRVgeF6BxXbAm2fyQW7P78ENAK8M2m6UGJpy2vLqb3MTwPBmjqH4QmZXWw4gk3Z",
  "key35": "3xHdCoc5FJvd2npHb3DkUmMRdDwQ8xQQgbKwS77Xerh4aWYX3sMXU1WEdvsEWLSuMMmxfSJqv612GRgtTjpgm4zM",
  "key36": "2rDQ3TG3JyoLT5CKY6RhFGR6aNzZFxsPneAGBai8mgnVYRTwQknEYafDG5RXLgjSUaRDRPPYxjAvK2Sm4wAiJtZ9",
  "key37": "2bKYyHSR4WWfSzFD7ToAPf49P4XpToP4KAk9BpockTMgQm88dq5vMyXL4TMtUnCKTmFug5SzwG5YVysR3ZCYK1vK"
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
