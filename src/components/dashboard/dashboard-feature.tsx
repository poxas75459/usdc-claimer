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
    "2QW6LcQJ9aPtvTTv8RAV4deQPBYSwuqqsGQw1bFoSW4Ufcy1eJa7AL83CvrnAP3AV4DFmHeFtEREkMeSKh57YUmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J34WqSerxDHNdbGUsi8ZqPKwHJE3eMsH8StDz6X7XtPteEv85kP4B4MpMFFwApDtYhiX5wwpeuR1PD2moaRL9T6",
  "key1": "4f2hatzgzxSuLUK4wZ9HxGSbyXhLQ1Jv27aNrU8DQJJbrzFdQyC63sE6z16XrLCNPD1NAj6z7tC357y5TZsuHN5b",
  "key2": "4y68ACxaNYKnvDYdoAGxGwh8TpKDtGhBAeyco5qbzQKycxnCqLMdcP9xP9nymC63qivPoVbLUH3uUh7WEdPJyr56",
  "key3": "2tbiT7bAdTYrG9xC3eDW2PdA5Yxe6RAVYGiYPF6pLsRR4CgdvtjCJc824XrghHpQfdenLFG9U2ngYBesMQcpWFmW",
  "key4": "QNAceaDKzd4yuML8peBzm8ACjB7ypY7KyGRwap4C2F7YDyzy4Dhz5fZ9jVsojBXvvVedfxhJCkas5f9bFMjLZ24",
  "key5": "3r3n6cYBH7ket1zPvz2sUgyyUwDcpQo5T4dvJYMjewHLEepb6ASXFcNjMpaajpBRpWTovANe6Tb6QUkm8ZJdBDDb",
  "key6": "2vz48gcLmPwyirt9D87vpPQkQmpBxne5c8Uzk1TaZZkzhZmSNTwGuoGFgL7gFRkCEmN2h6557rphBo2utpCtuKqj",
  "key7": "iXSQu2eqAmwPc6pBeKcRzMa8EUQgtxutCSZW9UYxapPVd9piPiaN2uYcfA8RyoCQNzj9twLEU9n11KwEoFjNpuL",
  "key8": "4HWshfqXRHtSmQqSdcZnYTmc2vYsyYpcTjrQmgPRHSXyomNP4vKAWgkLVvHFjWHCHqVAZGdECMMqAna3mZDvrXRX",
  "key9": "3pah8cCFpyxtVF4H3og6g2fZBN9fNAXovMsVpthBmUTFTrQKw8xWatmPRu8FwyYLypNQY5fmAW3aD5ZCnUMbhiNb",
  "key10": "4Xo88nr9hASLzaMaiCfvkNwGfWWh7pC5mZxSq6nryHakwa4oSaYZEvj6cxoTAd7npdkQerjiyvQjABucEgbuMRH",
  "key11": "4RP3hgJQ9ZYJN3GbHPVfUAeFXniMW6CUb2bMShfFVaPmiSDaYsmaixRxjfkhWef1rWgHCGM4jC92fxLB3RY5K7jN",
  "key12": "tsqfS5cuKthNTv1kA8kHq1vLa9Hq4imqPmbAd35R2DBWSNHjfCgcZSqnhKL8YzdFM3oW77CSCgfS6n9SYQn252X",
  "key13": "4NZMsFYgA7iVJYSRezxt2YmaUjbjCbT4tNURp6xfrf4nT8BTHkm1iWszEpyHr6KvZWPAmdECv5FzUGrmWWH78651",
  "key14": "38vZkPdpqcz2UW9aPDeUM9upMwmgoFa9SRPgGrPB9j94s1GHCtaj5wC34SktTUxvS4425QAQKbVRygZ98W5Gox4C",
  "key15": "8s7kDJrwRwwamBnJFP85bNneM38jDyMTV8Bv1KkXnkjeVqk6zgR4Y2NJh99LzAtsoAtvKTf6bnXSrvxWJ98EHxG",
  "key16": "3FhMRNaMnSc4Yagwq8bieWmmuji5ynDox9KNak2RiVozNuLxvcwCdcgd7QmWzNQuTAxmm8UGy4X3vs8kbttEnG4u",
  "key17": "XY2J79xp1icxgyyLSW4cTAcd2WFoXPWFEPgjAo54Pz69RHbUXCk4DuwXk61oQjpbHvvwbGYGgGjNHB6VTJVtDUV",
  "key18": "2Y185kUAGxH9wPSC4sHE4nCs9pr94Ucfc47HC94LjTmAbieeBBDRZVk6uMVTGdiuvy2xL2ykLC3Le5Xd8zMkPrve",
  "key19": "5mSqJzWDdcC86nPJKa2UyZ7bzxMHByvoBuUdjo6VhwmmBBu4A4VpkfYAM1S1YBa4UG163jkhjfXmuCPUX2sF7U57",
  "key20": "2c47DvG3AjWHLpxerncRd7htPKxtRmXoC2qttCAkGuuTBydqkkCRpeqz1Lwiwqte5rbEYMjSAiHJYx1unEh6Z51D",
  "key21": "5ukQwP2DRo49PUn4zod4XAqs7RsvCxaKF9Qi3kSdRJDeMZuHW2qaHk3VvxMAJga7Rv1XxhMFEkV76xE2oBbtZfXz",
  "key22": "4bqXS3L8Hwms5EV1q4uUskY8BhSYRkiq2AERfASr8EWHx7q7vwNBmkFSKwQWbkRgqznPhBegpgQnHar2BnvM6TeT",
  "key23": "3gpNm9UBfNYWe8tqh48YWQ49s8rB88KBGHWTTn199DUrVsefQ78DyMrn8UXgvEihxYVF8VVGXb3fwMK6xgcqv3oS",
  "key24": "4Nq7ujyJjLMVMXMbpkYEFuR5p9E94inB6XjFG9SkK1hyFrkb1CbZGKjQQstVunQyRDuVnttwRcBweC64GjYHTucW",
  "key25": "4evX5Yu1uMF9DwcmUTZ6BuEmcy52zBmzVGJLGzCxXLTpgpsLx8DACSbeyZfP6Nii4ZqFZ4R12KVgDc42ffVUYQmk",
  "key26": "3mp2B5SUaABUVuwCcnPjKoK3p4EBe2SqvvRvRJa7mupKfnj65QxxcybksXW4a2eDeF34nSSYoTFGP9WfaxQS4ZW8",
  "key27": "4RieXhuxog1oAmrt9FhqsKBcTYMaXLat3f3GzXs1fRWEJxK9MsX1Fu1P8aCnHzbQT1ufNz6zaH9qBNUmskasAyPV",
  "key28": "YszGUsGE3AiXZ7ypdw9hrQdAxdgCm3i7Q2FT8BN5uakpxqM8xZT7rf3fcJBxETcfvfCyPjvLvhxBkhJ97UzhtMz",
  "key29": "3cryagHrNQHCkiRdVB9ZkDG7WXqvhQAdecyDsBfx5Bm23uV8FGzQ92uZDJsGzMEYEi4cpF2B75tXQTbJHrkvXmuB",
  "key30": "4oYrNjZhJePknWLDNZNruAZVKN2quHs7pBVtBGx7uCU3RkwHRQDQetAXGYQjBFjA6VGPCs2eYmBxCEDqUCFykLXL",
  "key31": "3V3jQ5ewoYkv4wHtzq54xYxmEuuKs38HtJhvXwfruFuGEFQpxvhUoxQeBC9bsTybDZSCzg8oizfc7W5ZWjK5rc4V",
  "key32": "3yyTHE45unKQ82Jq76AEBa3WMfUfsJqqnZYneN5ktHnrudi4e99VQhcSRZ8MvcJNngva9WqHucEMkf7cmBGbbR54",
  "key33": "2pZ6jiarJrPJB2rCkDkHGzPgMkoSYnxvksPMJsm89TCAYWbUQuDQTAHAyJam5DPZNX9swvhv8nH3nXZAm2JPaJSN",
  "key34": "3Rd3eFG9G4PPneRtLF4aFpJvp6VsRn7aBDDQXREBAQTimLW7kJhVH7LtqN5Nwp1GhrzM2hbA3uHFg6MYgia4Tq3b",
  "key35": "LqtdbbfxEy2xtKMWaXc8mmG9c9jMrZZThKnw57cXwRkKhZdpMQiSx4iVmvtRF5zNfdrBSXnDukWPX8VWtqrdUmn",
  "key36": "yw48BFkc6DfXb67hGVWmV1JUxiMWqSzayb3EPpnanUJpZkJ1eVuLQsC3mSVxyrEJSmVuHbeMoid8imAAnmFDFD1",
  "key37": "29fJjkuyAWjBCXtVkEE6CDKgC6Wg1DgWrPDb3mVvJLQx9KoUy7kGUQJFWtJPs2q4wNrEcTG1FUzU93v235gwy1Ad",
  "key38": "4sRqN2ah7ZPfa5tHFy6WJRTFtJvkG64gEqy378a3QmdBMmJiTQFU3t8eEGtrdodPht2cQ921B6dPpMfGSDKAAXEr",
  "key39": "2cE5R79VJ4YuixsPsJ3mBUSa5BH4CgiAnkf1CeEtkS8Gy9QtSk8RqMStbkzVQ3tR5yB9PXh6nTGBXkPBs2gN6Zfp",
  "key40": "XkbHBr6sQBY1RCGGjE5gtipTbj2aZMZy9oShuGbVhmvDArYyTk2diUWC74yGkvMMqWynV5xYZfbyKXR4ByfxEjj",
  "key41": "5C8NfX17CH6XZXnup9b512eeM3tCN7hWYcz6XimB4vz61FmE5pLaw9SgC2iKrJtL4NMzbAA4VsNrjwCyGWxF7soE",
  "key42": "2DTfVxAJFyRcRxZQpCZaFLZrJxgYPRMnaKqtZRm5iXcr1oNQLH8Efny197WDWjWfcxT5CLZABqPwQsxMUneVfyAU",
  "key43": "4tZBePszikvurhntbSpNCyGE8czR5viimuF5x9zgQBxQPKDXEpGUTDdSmoKW9vvDXoMX1TjazjaWBKHZLPG8h4BV",
  "key44": "4SMW4JsxVHe6qwAUUiDVBp5i2EmhcFsoMP6oYUiWh9XiDPCoXuSACnTj3tbEiRbEgPmRgFZJ5AniukN5Dhc7WoLT",
  "key45": "2o51GpH1DEopvWKH4F8wQCWB59ZY22ZJWZTNkaxGA46V9wAR94qPg3PgbT8qpDsDegHC2QAbpXsphSAzNtCZmoeV",
  "key46": "2JirXBRNgxhcqXXk6EixobW1xq8aeJkRNXVn9sH9KJgRRBEJXDqTG6JVUdamnJGEQVHy7a25j5FJrUJMwLJtCAxS",
  "key47": "2PRfVhC3LVHNSZ4SHNWTbKiwvsKEPUCaDYqKfp3HYAESDJP9BtqgVdM7j1SXDP5h8VRQH8XJsSApkb4wDTSFjSc5"
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
