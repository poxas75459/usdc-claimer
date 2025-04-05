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
    "xPAbPnyu4nxMVG9EB8sYRyvCv6KDG2Zs2V4A6Az8WM4VLErgMao574WZkw3KYNCvsJMVnPfgymHL14q8MBCseUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E6kPUCEbdqU9S1knrmatEiTWNtjc1s3ncKWTSGa1hLfAGsHBkicmC2jvZabjy6Mve7HXFgSx7uADu7ykTDFjJX5",
  "key1": "ZGWLP5FFQsPFc2JC9pAncMQBj95anVQzC8Jh2sCymQSqimr9mc5DkU46DetZhuF7Us3LC2WkdyrDmUnG41bNR83",
  "key2": "3KWnYaWJxF9uuE6d7hp2r3x9SWBYrS7Vdi9XgvomGX4P7puysifQp8yc7fKxyM2FowfmdPqajbzX3ZTgapGpfbfg",
  "key3": "3CQ19g84aTNPqTeg1u25ZkT8K8FMPpz9RFAoxpukuH83eViRTuFexZp7AYW7Dh2iBVseYB1HFCUwpDLPkPTLZiaZ",
  "key4": "4wRAzzZx8e2ouj8aRHyKgLXDyyPGQj5DhNQCGhcPrLnbcJmbcSWqUWSYkzUnYXWFE38DWiBUXJKH6pQv1xVFh2LM",
  "key5": "tvc8VV23DaYxiduCRuBNsggHopfvgZ3cU98Gja1vUjWYe4fRE18qK2ZAm4FEgQKJPUe9Ta86JC44mcwwCVeKyWb",
  "key6": "aZxbDRKx7tKw8gFmKLmgRfjYeVvUCWNDPnEwDKWqb4i9LrgzvvMAicT79HTEAqBctisjTXSpBrWcKLMSyhnY98z",
  "key7": "2pf2dk43YyYJWbhibTxSj8RUs7bZQja8BK4cd2zFWkhh86SJZvRUxHXAjcK1n7oFYWRvedyPjkHBANj88wYdVQdU",
  "key8": "53v7BmjpgEdg65CuXKfngibtRfLKQqGw3D1Kr3Viu7GFq1JE4kMPiEqiyhp9yAXcKNzMde3CmVUffe5PoZjNb32L",
  "key9": "3xyKvsM5ew5GwNcxdgF8cxrKAvm2jL4JqGqeGtJjH5VKfmf96HsbRGfLo3soekp7gSFFg8m88g3gpF6TwCJNw5nU",
  "key10": "3YNpTPaJJvLbekKjSn2Z6i9qQoZcFnzXXN3YRk7j3cZRFn4ZZnbL81VksoL6xFkbwDwpVzsfECf8jco2XR4t9H4w",
  "key11": "5CVgnDLzgWE4NWQdwF4xFDHVfdmxaYCk8tVgfAhpZiogMaWVifDpbqxwKcSBvRcXyogoFNEDmBHAKb1aKRNVXZgp",
  "key12": "3UqvKaZKA8q9wNSsSRVqftMiD6Pugj923U9Bspqn275B47UPLaZ5McsvgKk4wmonsYLGVQwF5xfF2wmiGZtXYnwT",
  "key13": "4kMQfFSHdX97JaAXs3eaX34PVyg59sU1WgyBgghHCm9ZTF77GWrTrvxC74qe7cU8xs1Z8QLtHXRuK4wJY5o3daUG",
  "key14": "4LxbptXxQTjk8FwdjCt1BcZNDiw3Pu6uFnFrhRMBRhvN5FR8z2tHwUf7SUFmkx6biK4xxynfoFQCoej8sWK3jSeX",
  "key15": "4QoYEPAcUfJva795uvJVfRRoJUmuWRT5SS1bpqjSFsf8pmJ37yqvbXomwdjR4rKd5oNnKCF4DrvT1tmzUFRPHBhZ",
  "key16": "2xFLmBDJmx2bFFJGDxzgTQD3un9cAmuqjM5FfzdPgPDrsHjDr7kGMeNMxL3NbYBE3VV8zFUUbugKAoKoxxRq6aDs",
  "key17": "2UmZtt6Q2ZbbaYEVHQ7ePyM6k5JuELEQ68GANc7xoDhdvacpiYU1aTCT3FdLGVKumpnUm5QpP2Lx9pWHLPUPaduj",
  "key18": "fUPeXH3AsTWrCXf6ZXxmSn75435Gf2pGp7YssVxaJS9KQsSqKjh23zYRYRH3B6YaAQzSkY9u3kKhkNaJtLhrfbr",
  "key19": "3vvmRBpabNKZ8mfeVfLog89ycMSn8CmiYgHvgrfEe1VzLLF3dFDqaW38ZvUWPZrkUgRqK5AvSfCe8DcUm4NWZadQ",
  "key20": "5k9vn6Sd3VngnnFhpthencFwZQHnUewYRCyrjWcYJ1C4GqmTXd7vctB2mtRnUtUfzbeKJACqMVu7RBdFBAChztyb",
  "key21": "3VNLMosF6qZCKwZNZnCHK8s9WyT4Q5oYYsSMDVVXR5cZfnpUb6tHqqFy8oqXujmMdQRwLDWnhKKud4ewsQ72TVJ7",
  "key22": "2fr3qJabfncGsckh5jXQCH5KmuCfBgmuaES1zWHYAsur2Rw6WnMPQL3FjutdBTs9cTtMefyxxGQ2hCYzX25nV9c9",
  "key23": "3BjiXGMWWDrYyHAuBuJKhqhLfa3fNTHc3fWxFsKZy2zmvhKMyn6GDi429mT5QFzhEyqKhwsoxruoJvZq3vn7KE9v",
  "key24": "4Akd8icF1ozpBpp7E18dxqSmp7NgiEyDZNVburcMFB6MdsXTQaFBGrPLFt8KbhEA7mRwKX2nkzJAh9G8EfUqEz9M",
  "key25": "3qTy1E3VXLuam7aTxsCDpUrMPuWsTWEXcRKvzKEgjoS85sBgSQErXQmUkvfyHfq1tXnzeUxzyQR1s8k4mJdhSgyx",
  "key26": "GLxmuNmeCoWkHMUWd98BgrjmZ8Zg8DkAn23fFA1rHRR2xTCnQwNdJeo6uMoHKPPt2gVgwXSoymJskBAoXJxFKKr",
  "key27": "3pBme1yQ3xCoqzPJYXHLEqvjjEgSSkt6z9nvUgqiTWd7atQfEWwNRTSoY9eyHfxSTHeFgh4mbpeJM7gNXKUjaaB",
  "key28": "3Co14b1XVQ7LEtuYqz8zxAb1eQVGnRtkGa31BqjKmGSHdsMzSV9kW5HcLTEBFab2g4TC8VsnFS5qsSvEd6ytrGNM",
  "key29": "34bLBiZUK382jAPrrBz376e7jzgiyptGqkFzqs8kcUb6VA4PucNMRyoJmoSm1ZWWNpgGpqiSFrxQSGznd5kEUXYv",
  "key30": "5UgXMAoJMTyHXUx2zUoCabhkve8KAf7BZDHozCfx4je3SzSZUCSZwwZTp8xprM4z3fWAf74j144yjKRRfzYuZovA",
  "key31": "3cSiL951bMzYHhPoLX5DLHpe9xDVpyzCetjSSchCcMmPmTwZipVxtyjCF3jBZLwR2pbbDGixFxwSLtGt82gRWfpZ",
  "key32": "4iN1xNLPjFjsYE7iucGWtVAKZVwHzthTaGcPv5TmoeSYtRZXX2QMjLZULxDTR4RTAToKrDEapM4ev77zvurMqkyW",
  "key33": "51SdQYtGx6Eof7hvT9Y7GZYB5byZvMXPD8mi939w28U7jf4zdad8LUJoMFSDN1BreQi2B862LrqC1gVSGQWGuTnS",
  "key34": "4MAvwQiSJsSZ4jTs1Bch4qfLxu9DRYH4SKY3oUSzJnBN7rmK9FmUUqpWxrnF5TkoqLBA4wMf5nQmWMMJ9sKV7yF3",
  "key35": "VvvWcvw86TFtos3HrgGA8HFMtQsdQ8Abnyzuf41TxKwMG7rWAhKv8NNEAoF6n9rJAAC1cnKMosxsw7ZeLzeGT3K",
  "key36": "259zCqFSqq9GFJeZPU4RKiYPcWs29gc6TUzcVUn6CEdonq7XWv7PUTPHdpLbrsauEWyzUgJdxSDfPZXMbqvG3iMq",
  "key37": "38EECpdFxcoG9akkoyLkyuASKEYtHtHc4te7v32AWAtSnraBKN3u8gL9XavseSHNdH6kPKyQ3sN1sCy4AGg5bnqd",
  "key38": "422VkZsrMNmzrmEn2PJKj9cB6CkMb2HyY3PJaeAzy9d1rPSpK7KQQYXYry9geh657NBAdTxCDda5tQ4NWMYrmRWP",
  "key39": "5y793bz44gHdpQZtXCBfJSkk632sJejBzAWvwE1x2LYpnLuUbskTcHRkojD1WC1kRMz3Z9oiQteMkqpioQi8zPLw",
  "key40": "4M9j2Hr8AscBa3RXSTbQYoPDdZhk8CTg8uwUWRxCJzQh75GRUQEk5ESpnV1TPaLAMhEZZkJ7hduwmrjjU6GeyHeK",
  "key41": "BdNU356jAfakkq9No2Xz1UgoXLFnsrMgW2T5haDsh3VxxZasApzmyJ9oZdvracNoFcPRCkg69t7bysM1humehWo",
  "key42": "4gBVvwrLTHA2umkden7sYbV9VjX2Dzy6xs9xd4LAw8RYqUyjg7Xz9AwAsDg26VeMea6RryXhQG2riERUi5DJ4tQK",
  "key43": "5amTHNLBND834UuTj32zoFeZALpC1vjn3FTwL4idqEbefkroX86vz3T5fJ6iB4QS1F4FEFPyhXhfXHUmUHBabrey"
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
