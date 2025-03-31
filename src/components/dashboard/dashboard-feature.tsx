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
    "ogB2TiW5gW71WPChpznGpdzGpNfXVaqtByH6VvXtGKRwUGp4xRwWsBjyL44pMRw9ZuViSczh1JzQwCcwcaRtij2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FemF4qwnbM4VjQpJeozxqZK6HP927Bt267F81Z952yD3S8UhkR3cU6vfMDV4NrM4AjuigwxbjVnFUfL1Wopgg8s",
  "key1": "2zFHNrvwpLgFzozebFaaoHezDsebtBPGKgTfhqtqqQG16UrbDeBWZyUCfscGp3hBznysC4t3dwv4J9yh5KkBzZFJ",
  "key2": "yEWLhzH7GGvD3EjBngFEyeMBf5XptYHG4KoVBsZ5yzVhi5JRdrtxAdtqFFsFz8YaFhUDVmNTo2qV4E5M82ZFJfk",
  "key3": "3kyNzvGBu5Rbf1WhdwpGsrn7r5YtvAd5g1ZvPvUXtjSqBKUXXDjAhAzXorDdKeA53EdsXpvjFXS7rbFyyzS5AcgX",
  "key4": "2WvKePN9NxWGAsjzNBe4NwWuAvYKNZtStbkZ9egXGqPgQiMNq4ChUnt7byD8VS3XprdGhCxBXD3N5aa3dWEkWSqX",
  "key5": "48eVyVY8ERz2KaZHKQRDDjgyWF3daJJxPGGYMUFCMZKVyv53RjKPAiqAcax1ZamnoF7o1RKxuYfH3F96qUU6VcXW",
  "key6": "3cdhNbvj7jXXzqtfxtxVdZHZbYL65LjfS16C35k2QBxPd14nvX5FHAQDTC3eBdKSQZbGLfyUrKXUTMzQykjrX2za",
  "key7": "3UM4RjhdqBnkqfkkFhvCeF16NBcrA978w4vTwrTjUrkJ2wufjo33SMVfZtvAGDK4fUJoU1cAeGxFhdoSEyLcwYRd",
  "key8": "5rmsCGFH28heAxZPsbrnqG1mLVTmoER3mfMxoi4M7xUBnJvdARaEajcatx6Q9pnwm5tdzZohMqBHxgA1wmGgCqF",
  "key9": "4WH8QmGL9J159bq46hXRNV1fSp4SVvQEc2f9pYud8hL4zQ2GBXJfgrruzHa164p6hw5bZLtwmq37iizsPApfQzWY",
  "key10": "5tMsDaxXDTrpxqZkT6uaC3Rp9mBzdR8PFwzyBexYB5qaYPE9UUDenE8U8birjmECSJB4GjDSsdxSM3CQoSdQkwCE",
  "key11": "jV9cQ2zKJ22w3Fx39FQZ5tENFUktEuPeKR615LnCkp24EcP48APZPA3NYWY7vSB4acbp5gYZiERgSbsieWz77VP",
  "key12": "49JZYjpuyBsknxszYgySjTGkWe49tXACNNhsGPVti3PB5QGqoEWfBGtHzAvSfiuysUKkEGdTEgbLnscniwHN5jsz",
  "key13": "3onB3dvz1QiBwif1Nb6qmLU8rtfa5KywbrmAMj1wcETr9hNuycuf6wgn8kug1nZnDA2iMmXQML3QTuAb1Vj3gEfG",
  "key14": "3KJPbeiXbrqCWHq8TtDCU9Zg9CykVjLaeVqmtDXPhXVyV1tmLPSCdAcEHKff3qxJci4EBJCQyqReak5GkV1mdkqx",
  "key15": "56WXZUJASiFAH1HWXJsjKDLzPV1tTMSiHCBuRigpFtKrmvQkXqZ7U2DusVa7mJkncXCXu81keWZQp8TXCxvFRWnq",
  "key16": "3qQoy1TQN9FUacXV3WLbNJmw4x3cXUC6TjGLTgjpDCwDcb3opKMg2Kb9LSwmFhbxGduXWnFY4Psse8VBSv8ZdiTd",
  "key17": "2sLbpxxX1qEmJ2bjh72gRwK1EPVvhU8gZQdZXDXe77KMJ1VmXVRVuo2pTTuAKEmvRnV6pw1ZWY7M8P3PTEUp33tT",
  "key18": "4bByHsAvC1gjokD3c8nztKZXU8ta35tcdPSwKYZqHQxtUzVxEL584x7EcBsu6ZTxQKM774da1TPoXJM6vTP53FPU",
  "key19": "4nApjnZJdUNLoXoX6H5gdGS3aRF3y34NuhAQrAzUDWF1XBswYHY47PvSJKHiRkJUxPWNcCu2rFu8JYwH3eJWJsv2",
  "key20": "46K1NaXrH6U9CSgfCM2ZHqFzfjUztd2SdAd3iHjix5MerurHq4uWbkqEQ4BrFw9Cd3obRsy1JyTr1Uh3gN8qKyAe",
  "key21": "aRbAUJ8czqNxVTQF4ueLRZYQ4Df4NsDJNUtaU2kKS3E4YtJTrzGcqoRJw7dmTWhbSUTBGeMSP79oihsUYZnT5Yb",
  "key22": "2zkFCMk3wU65JJUbUhGRYm54hzqgxiqYNGbxKP1sX8Terz2tQFw2rWFC5RDc7uxjKigfgveHWKbaHAmW7KQzQ7h5",
  "key23": "55mkVyuDJiG87EsZVgGutDaNw9DRrQYP8qTW8NH8Sx21bgmCbKdW9RcnJWyx78UKzaUehcbANCsYywEjf3VHX9BF",
  "key24": "24fj8u4drL9CmQ2FKMJN98Vw6FeKC6KsMqckE588dyxpfBf7Y6pVh2tQ68sgTZvFZkDx1qVNBid6s19QEHqwYAiW",
  "key25": "2qSw9T8cLDHXHU6Xgm7hifCJLgvqhWhQojzN3KY8z1UgbpgwHxLqabGhZkDpr9mYu86cdbGqhxzVZefRTMxA9RSW",
  "key26": "LecMW9aKf8zQMQKgsAAX1S14vpDsvVBiNEcK85K679KspHWTVHz7NDS5rZPaoeezJLhaMB6joCoyheoXdwW5FJa",
  "key27": "3LmAJZEahnEAip4kjVTwWMwKnckhwq2DC68kwqfN6t5jbnicy9HcxpyAzuiYEtrBKQbpiohXM1HLg6MPaS8geVob",
  "key28": "3pAK2Vq1L4t7EvqSRdJpcCGRM8Ss9ts53kz1Kg7bdAGbp4s41bvMyRuVNCJYjXeUyFevnX6dQmXeg2V7MnpTsyL7",
  "key29": "3WZF1dfKHvHMEDTPP2zYQ4udkkqNJK6aVJYkEYZJyW5HuWSar2KwTPjTvUHLLH5mYwZThnhBufE8HyuVasiJQHFP",
  "key30": "4hAtCSBUHAZ2bwrSVM3SrJ1CEsfbBVqXuRJBysh7xLDp6vZecTfVbFLDrhuLwYiQwQvgxZBAJCFbzEXh94c4WDhL"
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
