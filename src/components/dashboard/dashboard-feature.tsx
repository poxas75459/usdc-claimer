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
    "gE6kkT6aoK5XJKSQdT1oDCVzcf8uV8bjMkgjjMmDvTLD1ESenadNXf6xDaZrrVtfe9SKDDuiRE32VVZb1iZU44L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VRXyom6YEtpDb5LT4Jmor5z4FXTrNkc21zVVF6FNeG3rLWahncZiJPmPcajmr92puE8m4L8NgEQckbF89f17TFa",
  "key1": "2XYVtvdjsdRZFFcN2e4jd3SQAxfGULWHBxX3znvMWXYAqaCrTLVVn1w86hnMBQwNJhoYhYzoo59kRodcvDwA1FBX",
  "key2": "W4dUD2BGtKbNZXGVYTVnFvwCAbA34oSLFPkzc7PixH6F7oHXNUxbhBT4BpK5qk8PMbLBKEMk4jvjAd7Spe2YSEo",
  "key3": "5CzSLTuybLcnjP31tSUowgY85RtBuX1Z2ACKNa4J5J38Hh47kxUuSVeJQnP1rptxJX9D6ByhTq2CN8TgQybx8iEM",
  "key4": "57FTZp67zQfTGaa7A7LEBW1aGppHLKwft8nyT299KphLLyw43JiVZ39VffyCREsKYkdY1tzKYDGpYtrXugGBquUY",
  "key5": "44mvDRijgtSzHrhgvVK2ARMwFQM49Poa32FMJuaZAqTnAUn3qyX4bHDaX1nsTcs9TRKeWYW4kEwxSPobqUjJpqLh",
  "key6": "4Zg2drDdtGQje8bKerhCNaH8JPQAZgrvzLzgNcTnFLAwHiA2aWxqwjj8tzNDNFYBhnTH5KvwygzLhsAuygr3Lpx9",
  "key7": "26J4CdM4A35KiLCUqM6kGhJow6jMECtcz15U5qR3dyQjUCvCbTLcPSRXKyqsPBe2KVbcCTVG7QrW47hTKAG6cHit",
  "key8": "RvzGFTkG5ESJT3Wy3ThvfytocmpUJrtKAomBzXCckqfAAxpdsJ1vtswy4yaVN8BDPik3WNvRq37n7dVtcxhoaTd",
  "key9": "2GAXPp4NYt7bRP437H76UkNAZnUcRyPsfmCWsvobwgCAPaVsecssz9YRmyYAmgdDoHa3TUK7Snwqm1r6BTmo5Mom",
  "key10": "K5jP8Xh8HdyE9VvwgzVkF2Q2E3FyphHqNq1P4xs3fZwAsbucR3219NZMuRhfxmFtUZkCS5fy1T9oL4SLQ1YS5EJ",
  "key11": "4KVka8GkxSQ4j8B5G4Ny17WeeQeoDYER3dGKgpUiLSUoiNN5GjKS2wXJBVBYhL2zovthV4TCFHXUypR9M8kaVBRd",
  "key12": "4Fxi8AMBXj1qE6HEagcj8pm1Fcn6T5nu3YQeMAjbxkCXXerHVVy2CQgym4xymP3kEvrw4rN6UgY3PSZoo1ya6SNM",
  "key13": "4XVnwYYpfuE6MqETJBBcHfT2QQqNfRj7BCF3J8iGCG9fbMR6gVc83eUHoUkUoM6cdCaHWB4BztytArobjGY7WquG",
  "key14": "2Hf6XcEKLwQYVViEgHQK75Y2gx1k8sndbPJ8fPDkS9icdZFBUPU1qFDKS7FqM5jFxfr3JjTp9FECGRorCe82E6fD",
  "key15": "43skuVqpxS2RxHKiqRtEG5aGCHfwkUaLDiJ6fYPPLnwsKnyEJgGd4JGJnPwxt3XYbVgokiuTmMzZFAM18QAZZ5hC",
  "key16": "57N3kKiRBarEDvC6YjKiJyPLeFyRceCWPLPsZonMSUHZRYyy2PuByoNTuESYvWLoH8VzaCGMgqwR4ZWbXYog7uTG",
  "key17": "2LXg1JUwautzBpTzjKNroh4geB1t2M6hAAQFKCLJ65JTXdS6TMaU6Qa82Gem7WrSTjpdzaN6t6XnaZd4sLzQkSE6",
  "key18": "5EmUaQ9HgNYqB3PR3NX3ponP1Fv2wJBijtzed3xm3Jz2iZ7oA26EFu23uvWvv4z2DryUUeoDXGpuFTq1iEef8GRV",
  "key19": "4yhEzEAsGpxWHiAsxPMk11bcE5hjDeFmqUbqUYYLtty6zgSQof5jfHJBJRXhf3WvzNWdptgjaDvDgfbjsZYd8Lu",
  "key20": "3Q25NADC571eddLo9p9HMLDbMD9KG8cQAMdwJJMbWsZKg9UUHYPfZKdGXyn96x13GT35gjWiJUit1DQzLEfFgZuu",
  "key21": "AX1E7XmPD4gUgwcv821951VfzU6Lf1hr5CvbWe2GPi3CRLi84ATHTau6mFDMqxtGGXjdJcsVU1GSgSfEpWFqkBR",
  "key22": "65FYdUVUGdwcYQxGChkkcJwMGZeffxWUmMPaNNkd8bJKsRDoWesZAywDWs83DddcM8ydo3ADfZrPH8dPnrR437We",
  "key23": "3gHFZYuLS7hppm3am29QzxoqBH1seW9qCtvj9iK2ePqfzNDnZSRH6KpXURxpcUZ7dGdSKDGLviV8rYc6bwTEoNRr",
  "key24": "tpgMCgwFvaDZjXkUDUWVnDxChVkHiwmLwcRyj2sJ54yZqdH8yq7M2bZr86Unehgs5YCZhHGsPtvzYKarjrGhq2G",
  "key25": "5jZ9txCNQgRHMfetQauuCNwBYG1qACzv8NNQDYv3ZNAiQjMDqavy4oCdyhguSYv2uPnXAFU9G5ExKckirwa4xfHk",
  "key26": "2LKmagKD1dKnq291ewop4Be6FKZDcPqAKykByun9SLnDTLXXtrTiguh96tq4V9rNSdr2nzMrRyxLx8vuLHTa2hYL",
  "key27": "LzzxXv2WJwMZRaUZGhbLg3ZTiQugfCq2useDPtVbR4yBXmQCSCxKUnEEuQvRcWie7SMYkmZ6RzWwKG3u77ncw9g",
  "key28": "3SJLivehPksPQaxSS3u2SKgy8a5V4RVH739xzHRN9jRajNZHHDdkm9PrRvsq7jo3rhBTJQM6EqW9U1TZvTGbsoN8",
  "key29": "pTXdLgCxSv7RThNDuZ7EyeWUGd4X42zFN2MZpQfiXC4EAVkmpVER6egQeMXkxVuZwXE1D2eLjaUg9HL2qpzB9Mt",
  "key30": "4dzxa9QA7gJNRs7u7XuRCYTHjZ3kZRCbW8h5KM9d1zvR4HabMDnRiDtK36yhPoRWX492jabvGYZZQtd5jkX68aFU",
  "key31": "4Cr37awCD1kfqvaXqgovxchqS1KmC9vbobEa2GibbuE24nYry5d3syDPHMZrEoysrejyxRauU1JUJgBnyUxQpWkF",
  "key32": "3j6FVYsGJrfi7TXGibn3DNWxptNJBBnKDv8RfZzkSUjJWVmChjgu5oAnhURCjF1VXHUvMANwAPnEMvVyG5goR9CG",
  "key33": "3H7q1RbrXQe1vEjcdtKJq5Y1pZhzNFrpcwzVXuQPURotd3XXP5Vs8CJuXW2rLBzAvtJpv5F2wdgjmQX6kRXyjZxe"
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
