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
    "3h5bVPQPzsSujK7wJXECn6FT7HMNe5XCr2gK5m8yjKh4WT33ykPRPMQa69g98UrgxKgpBMSJSAh6MBhWxnEwSHB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AB75UaTsCqbcy4PxRtPYy89xvZHG7RS357HgkKceedyCU6vfZKN4H2W33ugVBQ6hQ7kapQVex2HttE1SKSVc7CY",
  "key1": "3N3vcUurAkiLh2Sow7hnyfeFEWF9hbwBGaTDG5Nrw35hD1QiKoCJVjta91PWKMabLFqB1q3Mw18kajwfmjoV2Zim",
  "key2": "5xhkeomJRCGG6yVZcy28viGUGQqoPDa86cCE8ht4geTBqr3gcykBpvniGJLW6hDCxyMz77DBgUfgV1iDSYoaxYdQ",
  "key3": "13fNcVddWgypzqoDbGKR4ZKsiGzwzLoV9FzPuuyx1Cxtof6KK16pFQj3W3RpbYPdHHoPqsmAJoDEBHkisChDi5H",
  "key4": "5LuubG3hJihPU176pMFbumYtk4vqreyRkfCqHm1kPgoENN2zKMhvCV4Bc9oQmsPCmCBpuhguK78kf1E32oCKgQYL",
  "key5": "3GN4eNJNgojDPYnjc7ygcabEzBZM7nKFzrqNHhxkyZpxXJUaZca1bzKgXW1HqHWhTA6nWkpoUQTk1Jd2MJiPu811",
  "key6": "2Em3NjFwY6V3EauTS3o7ZHsLu7TXwhyxBur4jQsoePfXE636uGT9vww5F7wKXBcnWex355GFVg5atuK5NTqHB5Zt",
  "key7": "2fY2SjkFBDuPGNcn2MNa9ucpzrcoFMAyvuNN3jRPh74yBaCVABFqWdysJMwBMFe482PQV5V1tVK8XdW9t1nrBWFT",
  "key8": "3mbXT5ySLgumSGfkEVXpmVqzuMMo8PgbDspLECuAQ7sTBLPwEhthQQEEYJvSYWeoQuXcqhSAt3d7trLwG2B8shTB",
  "key9": "5EoCZs9pxsqptQPxszuu7uDpNQnMbpJagEoxk6TXxS6sHExXASyvNVft1PRbsajr3V6caZzxoLU7QG5r17Eg7TBn",
  "key10": "4ZEjpkksZSoiSPwv74CbnfuXy9LcNtswD6vZGirfiJL29dbRDuGByWiTrXNxBG6MavxH3r9c5XAuH9ezn6tAKsV5",
  "key11": "2A1BLXvxCJdAnJvkw9i59LQAgHd7Vd12FdXxm8nspYDM4FqYheiuioXHEZPzGVC9Uy1VUBaAfQX28rSWYj6aQve2",
  "key12": "2tkGsNWSHTWFxMu1ujqSbCqgDA2FjR1fztGEtU43SbDjgt77ALm3u2ArLwoM1TJ22CxUnRhZDekYiF7UoRo62qxg",
  "key13": "5APbDZcEuGejYzjtX3Dqt6mxptn4PzTDpZFr81A3bejVSwy5KohbnzERd2FmyePjTqQvpyi7gdZjc1DWLfWSyvrC",
  "key14": "jJHn3mLQbzL6UHX6Yr5XGYdA8k8QbxSHTPeSpXwNLNV4Mw2kb9kT9w36XnDuyrt89ZNpD8uPKfY7nS7bFZY1cPZ",
  "key15": "7B9NSLa1iX1zHW9jFet376KatKEXvwZQUfpBkVZ9K9VdU9To42R68em8Lc9dvF9UKuCmGgH4BmkbsmDA8iWvXCq",
  "key16": "57n9Nf9FGuc4xnTDM2VhRMjRmW6BXGjeReS3kPWEms8YWRxyhLscB18ke64CsGd5KuG9whZfHmLxGnB5WkPwD2Jw",
  "key17": "2kzqA1LEXgSZwWpkzBnESh9ocim8vk8ptnUVwfY23fYa7e7e84ZPGnX9pFVUNctrnS4U9QfAcBnzEW21kj5FTSkD",
  "key18": "MPw1jpXL7my5oNgUvrQkk2W9fqHUMe4eY9mxkTo298J3m4KkxsAEi9FHhyz9SEcSczGgjM6GHUUuNKbLZixEVaZ",
  "key19": "oyRSaK38shhw6S8pvVVmACM7ZR5bdw95kKNGXJxBSGqjCNh4HEyoBwC8U52A7pxeArw1PbS6xHfhJK3fAbbiei5",
  "key20": "37sFFeABNEi3wrLBq59jZgnyi6qcaF3U2KYiZp73uBT7HHCrnXvZqsiuw8rAkc553wpsXKwFQtTVgtsUFKX2KgxE",
  "key21": "5Tu3dfBjtQKmsA4omFPPYqdpR6rzot7PHZduKaNw1Hn6VgkxQAsLikAnEpeCxnkisimubqphpTK16biJNM6hQXvB",
  "key22": "551kDfy3Ae7FHMhg7KPbMFaGNA2Sm9hCUiMewKwKh79FiisC1ScwiVuzWsNhDZcUWPSpHT9nz6v37sG3L9fBcXYL",
  "key23": "3NoSLC7dbbkKSccNEhJQmq5CuBr1aQc1ZheKQDLyxjpVRRkasn7pNLE2Y3oQzepb446SVhvs3Fihg6q4KM8dva9d",
  "key24": "eCUeyvD963RJS348CnZUXxpn4psSz8kZsPKSNUkUyLwLmq1qBR3kpUQ5F2rzMoS9MAGNY8uKLmhwAj9B2RJfiSU",
  "key25": "5qEo2SFETDqKB2g8KdfezmawDb3xdGFPqP9hqJxWSzLjpJFKNNvEjw9PC3rQV6mA2GrGNStBn8RvRapsdNARmAgD",
  "key26": "VkJy76MLxvTqRF2fNPsiygNrCztkCQAU7B3pfTPp6xNmFxBSSPMMq7fC2t3tKJZnLvKEN9ixLUwwA5sqcdLeEmx",
  "key27": "267gPKSUpJCDmuYAnffoXFuPbs4oiGMJCpjc2X4cgZWvarPJtakVk3tyxSKXAofB5imK4tSmRYR9cA8W75rs9Edr",
  "key28": "Qjusq7sZWB3KotpyApnvZQLZLfv6tqbVGTsam77jYWatBzDQ9zLHu1tFoUQnoDyK1cZchKwrjCmdcX9ufNw4cUi",
  "key29": "5Aii7RJm5PXARNJgH5opVUFxD4f9ngKJXLfMV64LxdUdwTtknoNJnwzrdKQZymZn2zTDZuvrcRV2Sgky546pAdXU",
  "key30": "3spbzL5kjCWDdabTWh5Ece5N1kAsbmCTo53gginZAMzN771vXSFnFu64sC1AKy5Zg74KU19QGnQ7wVTU692xw2Kp",
  "key31": "35T6NKUKxYStc3K8j8L2NVw4j3CYedvxxKTPtv2XeSHBenfEe8vqCgAoKzugDz8N3REakbC4ZGiGqDGvKiwZxXM4",
  "key32": "4AfwDdVUQbCGrERcr5qLinrehR9re8ig9DLUqii4Wr1dDHiuKd6XKmYRMJX8QdMj2grLSh3Pd6i919DgDfoeYppC",
  "key33": "3R1ns8TBU5BtiWHM7JtXbgp1w1xguzHdUb3rrBC8St2EdKbQoWNvw5qGZ5yMG4D5vDnLzuqzUKdV8jHG4kFvKvjG",
  "key34": "4oUxkXhy9rC1x4yNAsAmvY3f2eT7pC4kPfJp6qb62okFjxJzeHW2nWSWvK7bTQsiMYmfLmty2r8V9P9jW2aKn2fR",
  "key35": "4bLMLTNnaZRCDxAe1zTJoLmopWQZK8FHKvTKomJuxoLXahcm81yj9JwDsQBDFUPSfceWY5KicivCM2FDHencBUEb",
  "key36": "4udJr9XDh1bV5ncxwmJG7yBYfKo6e4S2mkSRh5c1VRo1KEPfCwDNUakiFBKxx8BrXPR4WNcHFbn6uukHx4kqa2Ae",
  "key37": "5jTKSAuYQATyJxcdbtnQ1fMUTSHf5VxrGCvrvNHwnxRJW57CBtiaWW9ThyHEsmxGKcZmdXk44nt5HGAJyZFDqMko",
  "key38": "4Jt9FMDKykXFE9Ww1NV9GjSDbhEo6HY9tNcwGmC2X6baUJJh8aunYrkpYEdXc39CEc5i3RFPQWUL8ybR7nDaLRFh",
  "key39": "5R8LSdAeYGkyZHj5gDrfQAmfER7ULbpq7WWRxRsoti56DtdrSZwn6Ks6UGhbXDX4ysMim9Zmdg7rmBEbbk1o4V1",
  "key40": "5EUtvCcVaUXK7Q4FZSiv4iPzUK8wUFoaVPkb4MQpuSm3qVbLCJAQhZjcWgwngRRtdyQRtf6TEkyYK1MYUx3VLYWD",
  "key41": "2VsGunGJu7NeQ2hcDgYGrFfYHsXqn2LWVy9EWabXVxn5X98fdE5DXPK2z9rEE67Y13QVLhKZWPaRwjnqSu15ZeXh",
  "key42": "5oqHq9o6E9N4t1TV6bRVAYAT8umRVHJ9XPiUS3WfLMPpgGVEhqbCjKGBKqWD8PRd8Khthr3x3k5GUrhURsiMvYUG",
  "key43": "4H31zrDeeAGEKaZiu1xVWWEh2jsLyN2HnU8HvZEWMaYqi4r41CqxiRx6yAp2zsCPnVKAqhALmT5pNN49bVJ5MWCR",
  "key44": "NkTpKxXSkwa9gx4SLAKZV51azkZDVGBQet6aR6TMKm6GCRjktArKiKxtmUiCDJnH7c5ikZraVYwvjZpPD3QaGgy",
  "key45": "WznfysQgkL7BGBe2KBgkLj1nnzs8Bh9tJ3MaBjc7uW1wYGxDA331fJ5K2zfby5AaV9kqxFuPnADPHbTLeKEHCQ6",
  "key46": "4fCQ8w7o2yPeKnQUjEQuLdeGK3y1AgHJNXN3FAJ6b4WZ8X7kjmmGurcprpJ2Lk2Bmnsgv1dGW64w7HC4xDfJTzg6",
  "key47": "3RdDFBc2HpxjiJv6jKJAbkVFGUySKaK9ZZeXX7SGp2N8uPnGTUeF3MTc5bjGSYRcUghfd7YspDXVBE1Bp2WNBCq7",
  "key48": "3LEkoLLGLpvzm2uHJVZW7fNuqbMv2hNThR64kiRtXdUfgsWguoQg5reZ8vPFTqyk8CYUtxhxLNfySo4A3vpZftnR"
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
