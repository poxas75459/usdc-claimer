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
    "NtFoVJVxxdAzbQpPuoJCBfhVMQjj24xNuP6hduo26GVe6KagkX1pyDEHNriJCRDbZxcJphBGLjtRHdK6SxPDmBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "478h2LeGB94LzuNmwUiYaHeNELW5bUYDUNEsRnW4rGdLwUvX3a4NMc7eLig1UgvaPSmuguozo93awkZYVWqV66Se",
  "key1": "7qmh15zaLYcv1rKUZFoifJJPrVVYNCfVT5G23PUYwcwqjfvWsGVN6SA6kiUTKajq3AgwamsVA5wGnFUCyPU9Mi5",
  "key2": "2nr9sEUoJyH4hg6jUZ6xBvhjmTDErLA5myW7iziUQmEtyV4rXpLBNB3sqDvRmjgiKrGTgCnbfPiSdUmzqBkBwHCw",
  "key3": "5u9rKKuX2gfdzFSfjPxx1YbsLptd9pEfn2BkiLNSpvT6LZEnF9ZbRb6JwD1icYv7esKEAsToAR61WTK4WVyzjaTz",
  "key4": "4HSfmxha5fAHq4YAFxNqaaejGCPH7yUpvGgiZvSiXFfTm8AZfDCD6LTRSoGydNb9V79nQo8fB9FxdFRhQy4BgeTW",
  "key5": "5Ma61FBVDwHU1xFYwxxdWhRMD7fNGwRi3GtYaALjNswegUStVtdXe5qh56GLRALMWM3k1vi5kkA24e17MadBZovn",
  "key6": "2jmE2fKV2BHUjkCAEZxPeZpsDTCFabL43tMm32PNeaDax8yxEEg1VATcSn98cUtYMd2AZxEht5BHdeZsDXMNgbu",
  "key7": "d5Fh9pgY6w9EyMxjHfbFN1Hoqvp8BKduz1b3ZSxopxD5EoJBx6fKRMnHdk7hDQxNHw85KR5G8GbydQpqCXW3Tk2",
  "key8": "eKJioA6ponyJLT2etPBLJEKiNtM562zwrsUoj91cFBrwTjLUjUCVpVr9eW2GjbHN19aT7FS1nposiZ86EYawLEj",
  "key9": "64X5V6xBpxou6u4ugFJYJ5EWu2w8DnStziwYQwswozZe63s5fQVX4FGPkhmFoTsXJjc2pQnEAyQm5AoSzgpghojB",
  "key10": "uS5EUDaVQRK4vCMpjt1CZu3GnLty1Aytzg3vmrGBp1mCu3tQ1ZPSV7J9ggoA3HDHBoe8u1tX7sWTHiS3PQA6ySP",
  "key11": "2ycpXXrbtFfjmMFbpKuoRebiKG57Pq24tvW2yNQWhyY8hMyak4aEKWbBhY5TyPkXvNwrojZ7AzXVUBsx8ZBwQzwc",
  "key12": "5SeUuTWteeG6V8hiFuGXzggWbkqPkfPWjuv7LnE5FJG4tXnZZudj8kUXM5ZEWFwUpd2dgcGz9nTMCnyf7LgqQjvr",
  "key13": "33DJe6jtrgNutJqnz1Cafr1y5g128j4RnuGGF5CpNxRtkPhQJa3kQiaGtf8MrGE9jcecsfyJxj4sfcs9arqY9zGs",
  "key14": "4Tb9N6D4ncoKBcgWbM4ZzDdjAaZx6ZJXZMALxwkaNeBRpjma2R3ptXy5bRWtpUS5tENSzRYip4xRtrdNNhriP8yB",
  "key15": "5K1w2x7XQsNY8nGx3tn4F4vBkDaiGqSPwQZ4YFBSPJ5kdFy9bTopW47NVRvSi8xFrNoeSsfSCSgckMimrwAnJM65",
  "key16": "2ZcMLoD3gTn1Q9pPXJJv4PuaLrMYS4WUbeVE6KhTGjVD8SEN9z4tvn5MimwSFGCARwwbRnMmP89R4cdpRTobW559",
  "key17": "5rhtWWuC23d5AuUGpBdwTbpgSEweEm1ryXNwynDA7Qcc1Rr62qozmdQ2HRB9UjQdivQq4z7sQaZ3vVcSe4tCWnd4",
  "key18": "39LvBrTmecgejRGTMNkTYc9c3o88LKKJFb4QfLrWwGN5LoNTKEMe2cZMZ8c9GJqQzY7tLxb2fREP3yJ8K4oxKjUq",
  "key19": "5ynjoutDdQVLVHbSpWHkV2nZabecMzFeN5qfGvKihrYpEXAJ1b4gD1yGHQ7ee98pVQy5fXkFCR8aaRAW2gsJ7hEL",
  "key20": "4utefrE6w9oofs8tL2b2gv2mnUCXWNNZmVx2MiV4WhjFGhd66yZbgCQ4bYYqD84EULv949fNYwB1rC2JZ6UMBVqu",
  "key21": "25ZV88fVXtwPUSvFuERvTkiMPnsNKZ1yRHYoHiW5SBqvAGaatQuQBdZRJN2gzTzFqZX4rU5VbLsVUFPyvjWdDkfY",
  "key22": "46beVzyhHUJb8153Napu3T8Gi7hvokTqSrRWSPpRnRSsAQNqoLNh8J66fth1sEdaHt7Yi7jf895oTAo3NNzV3MPE",
  "key23": "4KmWrRbkLQydUKAA44uJssbpSN4epgAeZZ3uwbqPBeBSi3ugmo8XhRwJX9u9gVK79FfGvNNGk9FfegAGc5mfqonq",
  "key24": "5UpDjBW3pay5KjG7jZQd33AFGhPihc3opjFVXySoVxY3WMcRrGjaVLVbtfs9gwkRU4dSrgyJi32aoAamf22RKUkk",
  "key25": "61QzFwe1JvMQSiAaEUoNDd5pEjQuuiEZMTfXtHXoMgX69MVGHkqhy9B7BY4JvEZxUDu2uyRWSMaMvbXEEVc2zDqi",
  "key26": "rVyGqmKjfNNTNzYqo9FKhGm5YswJQGhMvKEoBqfQ2TW8nZHzCMiqS7DePQBiDM2ggQcdReMoAGwTmTgWYSTrDfH",
  "key27": "4DaN69KHHXEumJV2M9AtL4v8zvH1aSjQrzKdpMph3mMJvwH8f1ugxL6PtBDktTQR1EnzTYrcrWRMJYdgm8pyPhH",
  "key28": "4o5b4bmtQj6CxA3uUZnoNm44Qe9tc5c3PRharcFjDToWiMKSzp63xnFwTxBNgGr7QZMAHwBnEPa7T6R2EzbpdYb6",
  "key29": "b57A3ayFGkNJwwTjNasPniPEnE61Q1vdjAiRZaZyoEUeSieJDhXixT7EafAwA6tpDFtiBZYAQSAUBEtAecPmM9K",
  "key30": "2M4j1qBqJJWnL78nbcvpX7DCrrr5SVgf5rv2BF7zc6rec9faE8QdivTFrBqJtMoxgxCMsXGGuBEEEA9aM2QUZDwi",
  "key31": "4xkZPiBwhoUezqEiJ6z1Mt6u7pWWkPn1yyrjk65X5UfQ3U1JYBPRbpRwsJgkw62L6cr9KnejYPpT9UqWaRJXrppD",
  "key32": "4h2Ygypt54NjZ5HWtDMyBTgPSorEGK3dAvR5NFLZYvD84Q9WGGEWr3R1hWaff1KyC2vVHPZoD5U6yhmvpVoz9cH7",
  "key33": "4G5bUqehq3qmL32FZDB1uVNdUvVxBMhV2VFYMa1Wstji787WBX3uw2Rr2jqojSTzqnMYjqG9DDfCTUVkjzFVuwTb",
  "key34": "4fKG4MpsHDBk7WFDe3GhJgcSdwwEu2i9zqCwjofxBRobUxNm1QM3vWqJNk6ZUmS59sC8znCQcnp1rMSbs8RymTz1",
  "key35": "dWNwAJAksv3p6ZDuSdCXQZgLSPozSBYBhJtvtawihpx9rnQaWQwkeeTvdb8wgoQXkwcyHtEVKbNBVwhwTh3yg6h",
  "key36": "5b7TMMHvMm5zuY3JcgBsipSrR9RemGS4iBB5PGLTfqAiPXGTjphsuPWCfs9j2ZV8wsi8yFW1JHmNEaYxwRuCjouZ",
  "key37": "3BuPeeErPw6c36NvCMiBiBsatpTvsi7oCn7TDLdJTV74FUeMaJE9PXJ9qSTQbQAxyRAMKrhSRMRPdbKRrxcNB2oL",
  "key38": "43sPdDNQM9g4CppW9YmokQh5Vx4zcTvHPurHP4PKGj33DpwLQGhGSzcS5WEsi5uPJbZgJXkfuvqRJ377K6E8266g",
  "key39": "35gq4QMkxptc5vX61xeoUotT8RhDeF5hcDzHGX4yxd32vdjoJww6WWhTYQqdzXGj9mh9rNYoGEUHyHSgREdCgBtF",
  "key40": "47AScYsv1qRdCYcaGWyfmiPn3HjXZTPeosu1vzrbCYePASaX7G1FBwo11otw8gUz7KBZiWDVEk3pY5km2XkrYhUY",
  "key41": "547pE5WxZNLBaQ8UFJEXU2eTBNr5GWNEBaxNoaXXrZDRDXis3oyHHdKqKW9cfAXvq7RSs2d6u9axbU2qt18RLrEn",
  "key42": "3fLNxkFWW6VDLQQ3jx3zqDAsyUJjWPG7ZEAt3QjQmLVz9kMhSYnA4AUGX55qnjTSyipcmgRcJRQMe6nDzJ7nLwCs"
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
