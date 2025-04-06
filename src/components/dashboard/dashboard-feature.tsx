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
    "48qtmH3kWMCoGxSFEXK6oxqZEomfwtvKuicbt8uSEQYwATBZ7PDdV13WF783Z9dLkfhdfeBTd7dDxMgJKCBYvPvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s7KcpFUFRAQGg2jnY5Qqf4tCA4Cf386syu243nmzjucuChqaR4Va5J5v3QdNerphr33B2e4GNa3N9U7SW1dpasm",
  "key1": "2q2Atp52w9H4BCsitT8uA5PupfycsVCWCua2nvQhbaTtzFXxQiMPqBVUWzA2UL2qWgMNohDgtowLEhkaFFyTUsZ7",
  "key2": "5hMC1n9pYe3TzDEKqvUin3Haa4j6Hf6ZjGqsAqjYvN7nRws8gTAfXzgKTHzE8jALzL2KA25vYg98zr6xqD9zEAFu",
  "key3": "56znyQzHcJ29Y6TJr6H1dN6iQW9S3dPTJHD94nYEPJ8ezCFqAnZpwhS5fZ6yfaBMsUk2XF6MXa17ugaFT8g9Duid",
  "key4": "37y4eK49UHxhZrQMVaak5zNdKZZHjFxb33gdWEpqCKjpf2HxNriMidycd1AtTYq7aCjttpzkW8Y8mczds6LMaJJ3",
  "key5": "5moSWKiQwBhxg8DjPtSxQnGP5MotjVxeJRyHbHmQL5x1vL8co41GZPPrbjjaCg2mUKREGnsDp4eUavCa9AxFE6yG",
  "key6": "2A68WZr9uCDucabc7qDKTKJvQE8XXo18styZGa6eo2gWRDVJtRNRnPhGRUYrffNzd4JEgdeqcxsP1NmxcF66esiP",
  "key7": "4C14XbT8dHDMdTuupMYPh96ncL4fwuPyPoZpgNgwH8K6dXZQPXXY5zhqqQNtVLAR9KQmJfktmJ3YNL6ZrPYqLiLE",
  "key8": "5J9HzveMrrBmLA6vdmsfKhBDSDPwvPEGAzoTAVnRL2vTkpzb2aTFtWM5HLnNUBsy7tW9VFz8ro61kkLHbBonn1Uq",
  "key9": "2bgC7axCUkvnmsKwrBEZyBTHQqXCVKhZzHSTuhu867NGUT7vY33Xpo4BdmipP7s1MDHrLHgaDzfc4u8cVKpPjWg",
  "key10": "28WYYmntUWbKV2KFRvfJKf442ovmE2Fvhk7KNiHfW7JF3uC6PJVkMTWgVUwgdfxWxBkE8p597QvWaAtXqHW3xFMX",
  "key11": "66P1b8m51WNHLQNqimKoLQF4g3PukobXZquJBMBPyq6tshBoRFfzrkGPmBX8GQyYxgMiD3UQHuzXyqGaN1pXJ5JX",
  "key12": "45BRAtaXtavG4SFiq1q5oF1ajtKdTYqucqyPwQQHUWQZNMRUzZ9PRWGkkohvx3Qk3UKdeuJGr7u9KyV1bjzpMsDT",
  "key13": "63rAaMjvGWsQHNe6at1yEMgFSTffA54aLyUrLp4V7ECtB7KLXou6kHLZfJc73oxWpeiN2S3eS9zeJPvPPKS8j3z2",
  "key14": "3dq3bPRhTA5DKw3YyqKqsJGwHCjp5LAUrCNbAvfwbwMPJwfyiDW9Fo7pLiBaZ189rkRaQD6HTSStAWe3vVdZZCjx",
  "key15": "4PpVWbBwDFBpSnk5gZvCz4dadnKHgFXkqJKZ2TtSa2Ssfybabz8LcbsLsh7GL37pavgf32wEGTvf9GhgkABC2fL4",
  "key16": "4iPn5QwoQECtSGHLBJGh8arNwQeuXLSzXMqM11Lv1b2Y1qLx3oZFNfTc2F7NeuPK1PHxE1uuV8GS2oEeX2mQwQjX",
  "key17": "4rjy1SxDuPc4Zx8FMwky81j5M1Njdj9Aq3jzNLp3qzjz3Ag7uFiuhU2idBebTBF4CEH8Ds6SBLJjciow9EzBp8Rb",
  "key18": "sW34U3FrQR3o1UqAX51bgZZrfmDXWmcNV7pwLDwfGNkVEVEUUXweAG8yD8bpGov3ZQnVpLRTA8uYvyF2oGAzyap",
  "key19": "2quWPLvg612MX3L6AKrkmt3ZXn1W879465yPSKtQLBdnfHZyArjNXAy98DDQMfj9crsrKhbD7XrEgfH9YTVrPnNB",
  "key20": "5jFDVY7EaEyJUm7Erkqwvpwb4iZzu7dQZJUVcr1HehcveNXTDNGV14AVtaFBNzmnY6P1pBi6dCKJaqE2hmU9WfBe",
  "key21": "4hHxKr7DR4AU1cazTBBXBxz2uK1F2kPL8NaPmjJ7NTG2uxczsRA3ovLC2RHBeni58MJ71c6YTRkhZ2JFmq6v4AKW",
  "key22": "vNFse2hGPVXoinmxVWoQgsTgBv3mh6oVntLRDwwPQSTReVypCZcGQNbuDp8LQUJoPVRDLhoAULEzcNPQCSHNgis",
  "key23": "P8g7dmQoBdibycGK9XLfurBpUhbMTitqmJc8vZi8NcdJKThsDuEeLTZ7sRm1UroZiChEPQZh73GFz8vg8FbMyB6",
  "key24": "ntefL8yw29oLN7MA63QkxzBgbBVbKUHNzS93amvvMGYmLuZFjy6vTnCB7h7XdyPWtfy9UpHSva8SXgWPXX2KgkP",
  "key25": "4Jvtq7K9CDUkAsyMaM2CkftSiKyd3sk2VLNi55ckd5hFGp5MhUovGfJVCTkrxgfkhzSC53v7qDuskPUNnBPkvxQ3",
  "key26": "5J4fH1oaxKuM3U8qx82PatxiHhnHRXMNSGtnT1XXuPLf2sq38BufMjw8y4f1QmNCxU4EqNiZsVXn89KtpBabD2rx",
  "key27": "h9VjFMtf34ooP8A4JTDJCdZmZHC9sMWMXVcB1cUtzMEJJ7pZRNh7qfXF5EGaocH9UDk84oqDh4mCuEAGnth69wt",
  "key28": "2BeWf75dUATtaN9zXJYaJFDMoJe3bvSfp35XYMzMpT7F6Uo3ntHcJEzXJdZu9eMdDtXP6nMKW9CA99QpDXS5nUM3",
  "key29": "RYH1xPKKyW2DDHiG5ZDGvXjsmxsKqCoiRKAzHHnmV5REaJjTUVubxsWMD4uPrCRDZAyHphRs3aYfHQ4WGKwLdad",
  "key30": "5RKtW9Gu3frvERcRmJSxv2wEosEn8xvTd5PS3gf2R4y9c4RQgSTLShuYFUG5HTLKcGsWb7zBDcgXBabwRdEWnZUC",
  "key31": "naPJbd6gMCuMqiXhGyZTw9YA5ZD1qNbn1QDNsqutZ2UUF7CUDUvaDy4zZ3ePjffYNXjJ7q4UcTE3sHEK44gbDpi",
  "key32": "4XthzDMWZpgX69khZM7Bvvb5jGY8HdESf7pww6iESM7mBqFXoNx8z5uusHfRt5wrqZHbmCfUyxpYapUMZ3w5PXoU",
  "key33": "xFwMYaCiqrV1jWdLABHWi9qi5ttzFUb65H6VXyTdVLABfkzpJBwVyj9y5MShUoa6K6LpL4dvMqqhWjEmVR93LaZ",
  "key34": "3JTnsmf2wQiT93xvRE3KYSVXZzpGEwqq4J6kU7gt9axdfvLrGGdKt3XouHauKVXymrnXNBVqjNeGjzbA3miWaXxU",
  "key35": "5dLsNj6oY8fwvvdJHicVESoa6NB6Y51pnSDa2qbAz2xu7h7bY3P6iEFS9ZCi1ro5v8JZcjSRabyPK1kqe8k2S3JY",
  "key36": "2Nvap1x6JkEF5LY7Jh7biCewaAXcW3QHwenHb3VHWm1fYqEWgYinDTJ8qGNZt4kWAqK7apFmqTSfBNzJ9iTALTmC",
  "key37": "4URqWQv5CsCSeRvDCThxpqdqVrCi9NKQBi2dVG35YTL1kW5DXCD7FX7RhTscbsDyHo92QitXSb3CCyPE7tZyTTBh",
  "key38": "RxzMYSpco2CdvazF9Ksibz3RE7xRrYAcHQZCWtjMmN3qdUvmeKycjMVouQPQi7QjL331breFoq1JJbiCCBHGGHT",
  "key39": "26gE5V2Bbxb24AB8RHKQGLPtEVRBPkE18sJHTNDqDMJxfgeNhW9YydYjQjeL63g7a1mLcn3WY9rArqUtcsmvHR38",
  "key40": "2Z8eo4S3UpZWWVH5bBYvHjdNDcbwxT6ScQkTRxuHwk5oDyoG9ecR6iNmSCDL7Gq5ThiPX2DA1cqpkmUvqVw7f4kA",
  "key41": "BtnDz9tLu7dA678jKysdUppNrKbXRZToMVLjUJv7533Txevvxf8GRBqUSk7DDc5rqdjiMJEVjtQmyVVssL98GUA",
  "key42": "5UTnUKitFUhp8Kp7HfWj6Lt39M3Ksa7XBGMKyYd3SrUbAtdtLFF769xQU1DYNmXJbvEs9Ay16nmbcngdTqzqZxx7",
  "key43": "5DmVVhYwsjBCJD683fyvVQ9BdJRA1YxnbW9Q4tqFqxtteScCe4vq29bjFu8qqfcPZNdwRmZ2Mf13wXQsuAvtPoeU",
  "key44": "2sT4PFBymJGQYf8xWu5RAL5JEi11A2z85rvfUmE5NAL7YVcFrJBQvEQ5qVeGu1QBpXs7LfLZdGFspWSnC1VcZPvS"
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
