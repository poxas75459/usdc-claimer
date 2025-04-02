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
    "43MbJ77e39EW5UyinSFJkc4ZLRfsatjMt3yg9AwwLHknZrbaPYzMy7TZMzWYvTzUmWtER4p9UQEeSPpKqh4n3Jf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WxaKTDFfNTXBtXRZguMWQR1ZiwiqNAzzZ6jEp9tx1uSw3rnGDNSCZ3mr8y8UH3FaeHgXFxWEEnGbc4aguMt22rL",
  "key1": "36QU74ULSyH6hbdf4SyZMvaA2sdeESTDbjqe8urJq33Yyt2KgYc88G3gkAce5Zha8dj8F7E6Ym82PF9yyMzTtvzW",
  "key2": "38XT6YTn2dxc8yorcppV8RMQeBLrd8MFUuLNg5gXxT99h1fhQqDJohaqzh8QxERYPXqkKJCsAJL3yL6zJhepsPau",
  "key3": "6e1Qj6GbAVnJyLCfzCL7TtrmNAL3EszKVzf4nWL75w51AnoMkqdecSPR43WY7vCDp1eeMdLBkf3GUVaZ1WVCNni",
  "key4": "UrBgkbCKnmYxdJWamKTnKoaQSnpDHuyk848DbQ4KD1HRpKbTzWBUX6eAYa1jxGNGpoobDrNDfPeVNUnQpuRAFNX",
  "key5": "2YzJqYH1mS23ngeHMHqvdcQQteHmghvawKkw2tPeFMKKciiYBuYBsiE9ZR9Lk2cF2F72LgMttmSxBNxNypdYeyJn",
  "key6": "4yaZfQbtu3DUDJF8br54cgtePuWcNAzk3zZR3n92EuzaNDbLZj1C5bh3STDq4PEbv13ohMuh4mBMsLosdCKzvW5c",
  "key7": "5KVMBjh3d7v8ua8SCKebWRMZ6PnBwxukXbJP3r6vg7ywFhoy8tBd8y8YsXu2yjXNzdHYttdAAziPaFxqsWRj2VUn",
  "key8": "5UNC42MzxGCX4MupykmVCSagxWNMMiuT33T1CFtw4qrjxH3tYy5bTcJmjkFeG9f5q9B9djVZRVKsjjJ7SS4BQ58A",
  "key9": "66v1W7SRScHqhSWBR3RE6Lzidxzz1UKEUnJstvNhtjKhR5X739Un3DvjC5DcLwzX45PDkVD1ND4GFneYHWuDq36q",
  "key10": "369qka3446nBEmJQ3bwWXkUKLrifcsFPgYAKQutEo5JGrECeZXf5njMNp9TQ9JJVekEPx4z7quVMmP8bQTcsWwEC",
  "key11": "394JnXyMciiSyymY6ZFWvk8ZTRnKbAfon5vwefHKkVenNzh12KY2kTF1ZRaH8taHnrPi4uUtKfU6GJhEMmYYiuCH",
  "key12": "2pZaDYxuKFHUePc5Ra6u1cp5zka1R4vMGvq8V8jcs9mjzPkPmmNU38Ey86RnCrtBtmnv2Mr7Gsjnu4PsCocdzRqQ",
  "key13": "ngyzsuPW2qSyRuigFbgYxuWbAZziarz1dJNsCw4b1GXjq7Y2nkocXQJ5paTV7xtPPVis4ktNL14G4HTbBDZm1aw",
  "key14": "5JdABgqUNGpq6ZgFGoLAHD5V3KPHpkfG2WyhBv7HbgJdH5F582Yj5XwUvMbYap91W1K7p3xBT6Meqg8a4yA8VLRk",
  "key15": "4n87YNx7WmHaBFdGzaYLKn1zGkvPnqsgkQKJz4vtj8Bt8bazNVqN1DcepFfxfFA4JD9S3orynqR9NG3rT2VhZGHN",
  "key16": "4Ad5kMr1Quvpd9rgz81rHWYdXacWJ91hDnaBGRSwxYyw7ErptCuqUqiTcz8Xgh6i9JkTdDJD74tMaN5t72y8SGEb",
  "key17": "5AzJ5qV3q9pfS1mnZENpkdYwWcZ8Y9Z7KAD5ccoCn52qYdhb3FmANRTHsNL6uB5VMUjosPRZPCtz5Joy64LMFdax",
  "key18": "62CLuqnebth56TsZ8FuiMATGGVhiiWmi8kwWCEaoxGJmHfTqPjcz5TnFGTFGoMEMJL5FXdzasigsHumpyYuDpDqK",
  "key19": "4S9CNJqveLNoQjvAzZ9SWnym7xuBahkmcmc2LD1XB8b7FaCNvQXh2hMdkaYHWis1HMv7BVm5ak54rb45vmKK8nFZ",
  "key20": "5d5xgeB6ZWHs7wXE37DFPY1z7jCdHwZWcwYUaYui75kLypcuJiWAUBtDn6eGtrRbJcdq2j6zfKjBPGE2HZMsLqfD",
  "key21": "2TRuYdeJHFjRWhfk4K55akttDS79gDrwTzV8Amu5Xmc2AUbDF4NGXySii6NQz557qAcqakk7H2kKsywYTmMMmg7t",
  "key22": "3cCC6K2orA3J7pd1cxcMKvhpjopwpARyqEUjv8z48qfua5xVxif8k8PWEeXqw6E2Bcu7U6ocqbYS83NiFb35pKKQ",
  "key23": "54v4oE4SLR91rr48JCR29vSegaTZoGWkBgmXKwmKFLvNrB2C2vf4Mim6Pjb1DEex4z1voeB1YpP5s2mm8URo3xPM",
  "key24": "5ZHJSCi3cZ549epYbxG9e7Q2udpz13j4XwaWctvfqREFLEszBha3XgrkuVMTAe59e1Ab8wD971AHWYdW8uwmYwm4",
  "key25": "3eX7eCQnMMq7ysB67pqhtuajuZv37GYJ6mcxamiRML55zEGKEnbKZoLUqFxN16ARdbxVZWiERWkkawcajQ1vRheL",
  "key26": "5A8nKxS58aMJgKoxoxJbCzt9aztybu7LJjkx97XPHRWoncPgzajfHBQYsuGUJiLYrCo2z9zbqfEn9t8tKYar6mTb",
  "key27": "23QPYTwBDmwGP3v6p4wUqLaPtqXoxe12LCEMu6hV7G8WSjmY7VzxUr181ovrdGGiMZoNCD2sixhg87kY3EyJP5HM",
  "key28": "66QYLR4APgexE6udAqQxKtStmeqDdRJd2NM2vYE5nKU3UPKnCod3rEjgKvFgbme2eYZGnLGSUmZXAiXKFAJpwPb",
  "key29": "3BdrWGiXspfZGow4XywShPExVpWSt4VkM8zEyL6CboUarQ2iNVriuHwkDdCULcLogv3zUmroEJRm8dtbFb2fcD2N",
  "key30": "3QA6XkR42QYBkFvyfgTqEeLTekKreWAHBLdUrCGg3M752rtjAnPhvN4dDqPcVkwG8jDjDAshgdVeeiEi2dFu8RJU",
  "key31": "xLkk6Lcp8zFoU6JFz5v1WtiH3Jn7ZbApXy2kC3btoEmk9tqVwUyQ3W1BPn4yAR9V7xb44oQALPKG83JuZYuPBYN",
  "key32": "2Wh5QVJUT5iBmS5w81ymU1GcsDiWodWsu1iGgE4VfsHqHebZnWN9ZqjJE9yUwSxGQ5LhsxbFq3yRY2JW5iiWP7AC",
  "key33": "5jRe8QqN8Jwpgf9NqyKpBeTUEuL7VPdzqQUCGjwYTxrAR3UrhzR6Jihzk8NWFGnt3U9jr1HtR7qHujuyw1ZYakXg",
  "key34": "56vyquwowQTGZVzKvujrsVYyJHYiDCZGGpo7wE8jhH84WLUjJPCyuNKezJ3hJ7cydiQ6eEtSoxkYYknVnmUnA67j",
  "key35": "5KqMXgHMhQP9Ax3cL4BftormXk1iHgNpEqLK82HVph13AtJrxqL4REnKECRiaaDcG584NQJ1EDJSJZBYD9S4Hm4m",
  "key36": "4bLVLXuhkCj5F8iNbNe2tvJX1t2pyXmDe2PK3vQgjM95fKDnwSVbaKcuKQqeK4r5dAcyDymfzEG2F2rHY5fxSVxK",
  "key37": "5bNeQaTw2vxSovhrCbthx5aqQVtqqBraF9jBaKGoespXqHSfbJGNtUpHDiwSmu5t4uHg1UcPjPEJYxzfN9C5zA4X",
  "key38": "5yVeKahieksQKgbeG4RGPzGja2XSxDX5nhm6pJPcgLcvRecEqtPD2EGG5yHU2vwuQa1oaC3n34CdSWWhhzbrdxsK",
  "key39": "4LqgRFuAFkd2txnGZnsKKn1rTGP8x13DSgNA5rGq1Z4TpYhSAg3WwT7dFx7PETHFTKiaSG2FDmKJzNHfhBmUnU2z",
  "key40": "5qwWysTAygu1tsh5KtVUzdxFFZ5FywxLSBQG9tQoYpqv4M9ShLjDpwbQEzicrDJsg67XJWxjQaHa7Kp9anthzSXY",
  "key41": "KYqpkhtYcguD1fjjrNawB1N8pwuQpqPFPfsHM546QKgFJDDeqrQ1ytofQ2S4akZU5y9jhd9mDPEGsTdVfyBkNKY",
  "key42": "2pdWQL2p2asieJbWDqoVSYMJWZ8yCqdovQnwgwGt5H29UqaFrX3513vqxVFRtyX1x3MqbHAxNKACpqzyd3bw9Ciu",
  "key43": "4yZrCoh4QsUdSnx5T5P15deBUejr5nQgMhG5yHkh1g4WK5gxEbjLqE48VzgCNQ1DZivBHuzBbALJKy1Y5XbfaM9U"
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
