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
    "w2W4aTJTEa9Njx97s9hdAX3q9giBcsmCFZDaZfc18vznaSVvU2dEy4yrsk6hWyMqxCsM378QjeZjd8ptqmsMEiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "222LKzDs57d1qaLpVr5J8jfhpJzzkSW4k5Cg7on9tV4hE1f7qxhJzDeXnm5VLUQGViuBJTbqtBAKj1F2kHXTaxqK",
  "key1": "21ougscy6a2qR4xARHxUiZ2CTL2NZR14Gj2Y8ti3w79FGQ2T7jwS214hRNVvx9bswTJb3Mh5AJWvf9ZrHvMTBEtB",
  "key2": "3k47CNovabWjBayBk5GfYc9fXtXNEGNWLxLPh5g5QSEiPV97qB48vJLuRsuWXDi4KHiuesdJX4qR664XbPZe7wZs",
  "key3": "2te86BtVdk8Rg4Fk5ADbQT84nwRoo9Ferk1WWLMRqabuP9KzX7iafGQMVJXqcN9Ww2DPHR82B9xKAEj17hf9LXt6",
  "key4": "AVieXHQ5VKHYeD55obpFoc82ApT5Ksshf7NrYUFqfrmab5yLSftz7EVuBGLBM2xkdRLi3JuCTRzfj5FBwnPPPXm",
  "key5": "dqxKH3GnekvTNqgHTicTTjFiUQNn1hPhrcd4ckdrofCs2XT6Djn99cgQLPj3BLg7tKNWc5hvQ6wVw6ehnapH1dh",
  "key6": "4fjcn4PhXFKoL6zbPH8h9g56zBcpmriJCK2MDuXMdMvUJamH9ayvFSumDqaKMY74gpJWyNPB4o7VAB6dLjwyW6xd",
  "key7": "2VmbFkifo94u82Wki76To8rb5or26tn9mxByoryK2C1ArnXiRVhpTNvqjsAyZzP73idMiTqqq9YgAAdc1oNTh8YJ",
  "key8": "3SrnxWjYfrHYhjM5LqkJCD1ydAEHYW2UHL3Ffr2fK188g5rAKCkynyFxY3Nf4wy1gcosCcCYWYqMSd769JKcGBMC",
  "key9": "2QWgJJ2VzmD3SvR9eTayELQ6owSc8VEe6FNPYERbeiySrKwpNTpsD4K9Jq77s7e7rpzTYTUSSJvx94SZGkPyM2es",
  "key10": "5M6mZMV1my6Vig2S1mihp93yqie8wMaCWxzbAQh829NqJ4fyfJh6zbcSr7MV4KeHqELVosdVZtwhmfwbUCVmyBN3",
  "key11": "4T4kVF1NB7yo2ZnhzdFAwuHgpeyjztKrynALk9RnvtBwqwC5nwFrJwRPBTXusmHk229gfBwSsfDWFmQ8sH5PmsCY",
  "key12": "xF7zy73W1hQs3QUx9FtK72Z4dgUCczc9zP3T87n8NDaGoXQab5JF54bWy6ML33P944jnNvpyMN6GcfEfBgTKstz",
  "key13": "aeqipuiiR3BZeswKmWYneaWmHBVradAdu3opeVi3mDFpiGnRJfAyvd6sXZ9B8rjX7oi1RKoGKjUJSvSWphHQkpC",
  "key14": "3GCo22XvjJEVad4ir3gQqeqE2nWDYyNFmmsNQ7H8mVTgoGKeSJJrxthgD9c3hXaQkmGak7XB2HgHeR9jifMp77rY",
  "key15": "Z3Rc3L5riqdbu5SMyMM6jXG4zPeU9u1WkdGXDSMm5LDbsmPuRJDERmYPGzZRHPqQyTPHtGnpkfKqiptcHd3XacU",
  "key16": "29t83zqvesE7fExKeQLTkFtZAg9u9HEdoC6grR7zPH4zcGPoq3DhNPzaGE7civUU137YMLMd3hrKv3rLFgzdLvyF",
  "key17": "kv99XB7Uqd8wdadLFf4q5nMcvWLgePPdQDwjRMmrtvZFvYjhcEXkfZPUuNafjpx3GUCpj36dr6kjcmm8M4SEKQy",
  "key18": "241KL2DBRCDUivtRmJQC6UbjchNGrhy6xPdTnL9nqrnT5eHwjuJ1L9Xq6QiAZvyaGbc88spUYGsvwT2VG3Fw9sYH",
  "key19": "5Z2emJ4py7WobVTwTWZMBowoaGfsn1QZPYw2TQZomL1RmmapD4fbTooreN9gQbUGjRhni5afcPrarggyechyztvP",
  "key20": "2W7yRwXmayKbcJiujW49NhaYPLkYJ9p9kMM49PnByeEVmcCUGNDH6QH2PRJKvj8Pb26aDyskSWpUArnC6ZCmc4wB",
  "key21": "5q13UaTGrAmYXyDssMv9zjzbkKK1CV3taihb44UJvviXJgwmFziMMpbWdXkURWBngRz4BjiauRXTDoYmfi9StWCQ",
  "key22": "F4sFCQCCWBWB6GMkAbptMRzYU1sZXR8aSQzVC631kKKpKMnF232Hffyme2HVeZcpjuK7ukGMw5stNMKgFYb17Bu",
  "key23": "hpgaTYH1aR8QvK6i5qVX3tb2At8NZVhL4c7ST3CHx9ndxa1Pg9CWCUqtasZbLcJYdYiVifSqeeURo9qwsU592Aw",
  "key24": "5cNUEE5z436czsjEcMBrckX9BUQjxhgvbUZHptgxm8KBKtyoNtscwEQazRimnF5SYhaEgDV8hWiJ8fToLic2SjYN",
  "key25": "2U14bRJMU1i4bJtDyaGC1VemrDB2TERd8GUcn6c8gyt5QgUNatfe1YyrR9RnJ9k6SAiP5zMd65oWQnRaFe9H7TJv",
  "key26": "3F1YBbJFuuXAtFmUTKDEGZ695grk78WUf5uix6fZDjiCuaPpw9oeUF2qD1Xd6fgPjpWBzUcRJ73VZdvZD8udKhW1",
  "key27": "3oRR7tzkhdkayYUaDEtM3sNyxFJNBpYKFAujtX9s3kR56rUagWKcYC3wL13HWd5kwv4MRYJuP2TtL8SwU2fU97qN",
  "key28": "3Fbj9Rj7N8uUHUdFSZLAjeh1VRpCRbY1uyZsLbQgHPqLWbQFVtawm2dWKb8SUeVMpQTdfXx5b125YvJ2PWTA6Cg8",
  "key29": "3aRbdHtjh9zJ7cUmk5niSRmpqCS8Krk4uGvjAb21aBPbuL1uNNiyP6hSinyvnoLkCSxdxNULVczpmjNVHSur4J1S",
  "key30": "3eVAxx5h28A6v5tsXGcRwYAeN6KY6edV5GbSapT4pRxnBj9aCUngEZgZhr22AFd1jkmzfp4Qcxxt85NcWp92pGvt",
  "key31": "3zAgUFR3jw3Uc2QiQmyxhhYkPpTCXGhikfxvahqmVioViufqHpghtUb7aMswECyYw2dtjwoUTgUJ13a9i34jKXsG",
  "key32": "3ucXSjLELZSUrjPMqLFxBqrswQMJ1nZ6nQr2rPiTWmYoozdhUBWktiKCK5ZB1dM9tJvnmWcS1wyYpC3eRZMuT8M7",
  "key33": "a6amLHL4JS9txYtPUgTveZYxJbTvovoACNzRZkqACHyNT3Xs2tFosYfMJSS2CBR4kpFmPqZeaEmFMyNzxxoeDEo",
  "key34": "5YeswWwiC16WHfR5Ji99hnG8GsxAcR4YwGSr1m33Nde3NLXfJWdQZsVhW2yJjTSN4qtxcizVxzB1n34jBi4Sdvih",
  "key35": "3QFxY9HpSaWRWJYauu5sfGwVoJEZJ9KLyS128cPWtP8kw3hQKsbkeirZMrRoorckdm7s7ToF3gXpEtzk5FY9rugV",
  "key36": "5KR9Rgi3qzzcEBgtawvvvJZS6NpajxyxN3v4kSd6c7R8v6APEUbHKs8r4fYCr5tWYXaPjo1M5BpQTFNaRjvufesQ",
  "key37": "2yQQQJWGm6anfhUgf6TYdiWBGPYH4XNzT7NKH9yH7MKTJHownG3N816J4u5FCVm5bk4Fgt3evSFKgJR4aUyar2YJ",
  "key38": "3R11c2XRFw1GcnqcnPU9zwfoTji9cCt8hGnBPR6vdyswRXjRvw4RrHDu9aGvCo8PuTLCFuAnzF9VcWe8Cuz3HMRY",
  "key39": "4HLMdG4ZVmRP2D89PLP2SpZVNwatyxWJRok5W9oVucTrrvCbgM9EeBpnEktzPBDsasES2LuUUH1ZDPHaoGAYGFqG"
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
