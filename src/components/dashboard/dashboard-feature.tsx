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
    "4AJqKDmB73snM56XS3ttoDKeEQgcj3PfR9xLeZm9FK7pMJqE94dyGXpAdXKdDenAgxxGXejyKDL8f5Uegrb6vLah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36yAJkcywXUKnR5XnxjuNQR7Q47YZ3S4dycPvic4WQh6n3QwUqtKbTVkYVn5PeoJRUrRS5pZYhZk4pzUSmeU6bJg",
  "key1": "3g9duP6zuDGku7GfHbor6faa27AJ48kXaxQX6NkCWu9DsBGeJg42VMPwWjHXYTd2a363bWCtnjz3be4TujX45GXq",
  "key2": "12T3cps7PRfY4p2vJW4ELyorDZ21x4xVdkzynnYwRuCz1TYxZQH2VY9pmDasPTG5hybsJtdLhiB6md9Crv2Cfi3",
  "key3": "2dMYVrYWrK7imJwH5Xwzh6nevf165otGRcXzZvrQM3bE6JNpCHQVhbwSnBHuKyBTzDM1HBmaFuRRtWt3CW334LeA",
  "key4": "5ms2kHCXbKxfHYNrkYxRyDdJprhNX7sAfw6vyde8mqXVHjFTq1jhUNe9nHxKjWZpzFbXwzpzJjenAtB8xBuDdEGi",
  "key5": "4dhp51tz2yV1za6oFNS81bnU1zR9WzeSiA2xubtttMn3oKsZw8ffh6exRsqKyna4MaarxZAkTKZqS45QzkSLfkHg",
  "key6": "CcNk9e12Ls9oYNhJt5cQ6onhpPrPzhzM726tRo3X3LmzMEtPmRuWSUQidjD63iSiRSA2iYmCGYmyqZkC4Hiz55E",
  "key7": "4K7rY6NzXyXkyBaGN8EbF8ecHSbt5Q5Mdkdv2MDFn14KUji2NJJmdVcYcawgkAi9hWX7Xb4Q5dQokQTn8BA8R61U",
  "key8": "3UoNqJKYQ6jFWtAJfRee6zv4xuWPLGz4wWAd5Kf4gGybuX1TeLwyJ8j6MRbJTNbpBTU7oosabY7MY5CwUYWBWUzM",
  "key9": "67fx48hoJpin7C1SVY2oFXUswFGiY4eXiriNUn7GXKWYvgm8zE8f5FDkeHLwzuvX5umMPDwhzaQp7DhQbtsGfV3D",
  "key10": "294FRrXDUCXbkCdmvpfc5K4JHRv77Fmbo89JGMU2ZiE15qKBXMGM6x41jkENX7hgupi6EKZnysT32xzFnRxDzHtu",
  "key11": "FUTBZgLyaN4Ukg4111w977aKmYgxHGTrSmAztYFNNQCSFU5TgAYBMJmLce2WzGrngrjh4UiNYvZUHnaHsy5GJwd",
  "key12": "2f6VBDCVF9JorV5MHg3ETYKpbcfRviMVoMKcr6zNqJFUvLssbeqNgvv4WCiagYwcvhXBYUDsBgyBFG5cKJNH8vv4",
  "key13": "Yqdi15meM3RFThfcat4o24QChgZSxeGLFfUYg8TgxiggfYpakWUii9UbxBSouzzicMwLt9G7U1kFvRTte39iwXc",
  "key14": "2tpzfx4uXxhLbQCHGV6MS3ivBwQUpaaa68uM6rJn81XQ49pXzX4xJdBedKm69QMhgzsB8bLyHQA8QrYpP9Z6ijo6",
  "key15": "4BAH3Fc3wkd5ZK5xtoXv1VJJV3xQJJZSg7ZKrDEytRZE8LhKwrSuJwaZTqtURzcWYBUhRuxMeCp6vc3G4S5hctsJ",
  "key16": "Fy5fsKsstWfDQw1AxrJkB9LK8nGSf9NxJQApY7YoZu4PeGzZTGuZQqPUctJ6H5jDeC7r5bAdrnCF3NeftVGQxrD",
  "key17": "4eGT3KaUnC3AiN9WzRWNLEve1FP8b6Ysa6aN5F3PAR1mQz2hUi3eHobtGr26igANFcGM2Q9LqUpbDgcmXscAypM",
  "key18": "yoPyCuWmDRnKe42nEMZT288nz5xW5dP4YpsLbSfQWF7U3JYnEhUcuHiB4Z8yCtF1PT4CXqivJF59s6F34vFJC3U",
  "key19": "5AMSMmtS8tYfDreAUabwTAvc6p1JEVqwZuDfUEAhBix2eDCchKE4ogCRqge13TFjP8uYCKYa7aUBpbrtDu3NNeZ6",
  "key20": "4KGKdkEUrykQdZWsD1hz7e7Fqw2qYVyt9PpzLv4DhLZH8rWkW2EGhftrjcLZDs1Y1vkhbxHUPdf2iMgLDQJvq9yg",
  "key21": "2NccxhjVrmnrEjXQfB5WwghRfksrLsEogQCHntw7aWxbWZdXrAmdzVzbJnwVqtV186xoHLuQwyL53Z1sb7ofWGVf",
  "key22": "rARgmQF6q5VEh122MVQM6TtEDiizfUWqGyDtrGeop9SYcSZH6j72g8KrXqnDeStLL7aA22gKn2NhW8X94qQ5swK",
  "key23": "5WhtjUUrneNHooTw9Heq4pZ2hFnNeAWPKjffrZJ8efoJL4ejmWhLyrrsusnBSMCMz2zKGnW7JD1ZxZd7NygPtWSi",
  "key24": "47ggJD2uLAcxSXCQ9dLXQe6NU9CjwSLcmUPywWVcDCjc3rkNH32EoBtJvH65J9MvAnRw5cDgmuSXhtpA4fkAFVsa",
  "key25": "5d161wsC6GZZsLmdRzeYDsJuodpyk5GAvFjD8R627PYRDVPTSbaWjBwV1QTeRnfdZFNm6fEu99viNwyFBqXuyr1N",
  "key26": "28kZEMuJcdTZTcgeWDaR75DhMrs2KqBKSrrkR6edoh3FBMqnAm8L83sme9A5ARBFNpUUjWuBfDKDoZ2dnHQmBaBq",
  "key27": "RFe34z1oomLh18KqADA6rE3CG4831HgKQ5Na4iZzL87e83G1VynFHiMCFhB12TPdxAWjDK3gZDQ4vWthcpYpZdS"
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
