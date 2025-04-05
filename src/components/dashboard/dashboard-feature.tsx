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
    "2bNYcmJPpRj52jfVMmeLiRK2bYFyDTdh7CEjZnJe29j8PgcMeVZw43PBJAquHMm93DoNRtHXP2vVTD4sS6VaLbHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ar2Cy91nqox8iXpms2b54prZv36bL9WXf2REPmsBA1E6VUgN68vMp45M4Qr9pVhsk2SjLCQLbdzN462hsPQRdeF",
  "key1": "rjoRGhau3k3jZmNRv9j738df8Lb5ffd4TjGJLP3zHXHbdJmH3Q6Tf7rGx8dXh422QVM4xZdVXEHM1GqEVXC8V1N",
  "key2": "3hwonswCBwaPmrxBjfmc4bqJegLohAqBFdJtKYgzi3pE8gzPaf8KafXA9KHTB3WLyDtHCK8jY4zHHVPSyLyh2hJP",
  "key3": "2WVLExEouzB8MTgaEJWduwh1y8keARXtBxbzEnEjmeyfgTaTuAdQsd9gbQky48gMoDnCGSbzCtLbNVZNwxaCp1je",
  "key4": "5iiY2cvAvsByBRm3VZ41psCX3MQNMf2kkMxK8t7HnezmRSMy1ogk4PmHRf4Db7wPZKBJSN5jpDmz8wxsMCsau8vR",
  "key5": "4hjYo7N5gy9TbGR3EpQKdWKTFm1WML9qBJPGDMWXpqk6Szp5hzwTHviGezEds9efGnDEC6KzL9gXoYtf6nuJBBo8",
  "key6": "3zqmwdTTyH1MkxxomXdx8v6ujmEapXo712guRcrqt2tgoWNkhkCDCx2jrGVfQyFtWw42w4VAjg18tMUHfnbuLZ95",
  "key7": "53zEwyASjCSCaVy5ySVzvheNgfhr3qyfpEGfuQ1U9q2sZ5HE7eTAatCWXJKkVoTACnyFwhMJPe3Lisq5mevLjzBW",
  "key8": "5cfDGQEkZtMDdR1VC2xUiS7u3YU8D5n5DbeJ8i5vDRrh8vsF8YmRRGzBTwprVfgnQ6XNi4LCziomoZHM3gccSBa8",
  "key9": "5CVcNkdoV2G867M9UvkxGgJAp3pijb9EMbi1n115qS9cCZT7mWqyT2a1uhBverxUmZY7nWtq4A2QoCjvq46Ey1Nk",
  "key10": "4NEuEHxZJMYGkogahyFwDMsSG3zTWcQJTWq5rxkE64xRo3oHx44VfBaveLNkhPwsqo56bzzGU1i7yWr4e6HnrZf",
  "key11": "625mLUBM7g6nFs1tjtHeYVVhLdVztH5hovUKGZsHurJc6GVLwUjpqVCU5UJXvJxNoUP9dZjKf7scmsN5kHSbWdYA",
  "key12": "3VawNkTrCRgNpzZ5TWanLJ2Xq8qEYBeMKueEmW5hJq1pf3Qfc8yB4pjy9HdvMvQ7esnLa2fWknwL4TD5KgnvPx5c",
  "key13": "UeBuwBAXC9PK9HqUpDT8iVk4hoo1Bruxqu9sUphge9vDpg3QYibdLwr1Dfa56CSyaezY3Tf4YLw8S1rgR1GuucV",
  "key14": "VBbDddGyBr336Uj5PWjCGQu8k8VdYdo3pDsJP56VQYnFagdvSaPGouHGsiZMZRHnEwyoGEKJYBQ1Gp6mUjp8kEw",
  "key15": "2MbXQTyQbGWMYusZtRm7GBynujnh9yakKEiP1ZsiCjaDjDBi9hyRQFZAQ8adTcuvnUCFieqiGzMpr3wRBw4rcath",
  "key16": "2iRtijiwYrEZHwxggJ15URCnT3UeJ5z8GQDovVT2TEE7CrwPDsB6pBuEKUpXqptNqGvprRLBcQVqdtRW4TSiKPjR",
  "key17": "3NDPzbrstBurP9NaTVPaLrBKKFRCegnhbBWTR9i9U4RCRVoid3fNmv5kTvRKCMmCcKb4vQr96VtSGTN13CNUSVpG",
  "key18": "2NznJHfXgNKfY7CbXXMPSUEscWJ8FwyAQxJMbR68oSLKa94KYU1yFbcpoHKrakD584Jkw8KhwBsvEj7caPooUHzr",
  "key19": "4S3NazRLdMsdGyyTUKsMMNNC2d5MLyEn8QE78gNrXoa7SLXfskPipAvdHN1mRjw2ehHG3bwwpSnmgAyXWXRQFbcN",
  "key20": "4umSb8A7cjTyzTfGeKj9p6Vy6LTvqA2PbQPvHDEfQN5677ucrUTbyPqiMMUAAD3H6EgZqp4akPuGAAGCATisvSCR",
  "key21": "uZeQjEKjc3Ne8oLbKQEoqDfHW1mpa4XYUYK3rp58SyhhXNoVTuX6dUDQF8y21FYTnD5w8tUHNqXdgqYDh6ArEHj",
  "key22": "3UR6DoYNqxSVofD7x6XaDfpJkzFmBZjqamVb5h7LiXfE8czaSiHfTw8WHqANWAHNZMQzCKZ8zDBKKZzCR4445nRG",
  "key23": "3yKUm8HHo1YsUU9bFVhfWWYtJ8Fsh45mbXhmUkWSZZosdpnMEq7f3hSxdHdzppTMKZxRxaBVnoc5fTkJgmKSJKCm",
  "key24": "57r6rFYh3a47wCDsow3u4DbHhH4BwAvRpdZzgpqCwFFaJqAghLr3VfrrCnd7RQbUY5EdXthiJYSb1uHvkXAsB6Kt",
  "key25": "4QPsW2tWHNCWyTV7JbchBdTEUS8EGtqawb99v4hFXAnp16j9khqWT9wzB8s31EXFukZuiD8EpCmBdGvnvjpsF4EF",
  "key26": "5TbbTTwqkZUAL8HBeZsoAKYNd1DWjUDddBTRbbqC2amWEWjHZNNgYGebHrP6w2H7ZUvMvyFwM2FypfzYVArfbJvZ",
  "key27": "4giMHfqaJ59CZnJPxzSG7duRp8L9JSkcU22Mj5YcTrdsvYM8CKMePk8L2vUW1gWAY7A5hyG5N7uRF2PtR2iq7Dq3",
  "key28": "3CZJzoCoCevMZAkV5ssK7jkP2ujKRmyES8h5bj592rafPRCg8S782dciy26Aajrdtrb5NFej7Sb3xLz6vhqxTZNz",
  "key29": "67SvPMvYrAC4Z175iUFkEq7GWX6rTZckVARKzzDHvhiMF6XqJAAbAjdteSa4Te2ZerAQZopYKwikW2hdtoyFfsoN",
  "key30": "663qBKgKtq34fhSc6AqFM2Q3X9Ynx9Fu6Nrg3egQLfbbrbyc5o3gQZE93wAP8Qpbm1kBJaV9XnTQ4cbX9sFGaLuE",
  "key31": "5ZCrzmWXzKF6kcyhioBHff8UM9HmNDRDGiVKqYF932vYyZjHQaVbYTpnRVfsiSWtS7cJ2Npnyz2gDcdiiRcpEhkV",
  "key32": "2yzB8ef7Vsui8raE4UdJNRtG4dpAPXUx6ryQf8YxFXL6unKLhhwW7ZZrcqhugYKcL8RFpZQ8fYfT4uhFCj3dujeh",
  "key33": "3TfaHnUv4gbvnug6UsHnZGxKh1rNPf8j53Yn6kWzP8hQ5FRivAnW8hkAj1ZEhCqGY9P884yK26oWhNPhAvaihtvz",
  "key34": "23dPenuevnrweieRYr5Mu3VecP3YANvgRLfAd65EyW6EWNQMEEWGCKimAwR72F2Bgz9yipVR8LCQi5BBTAfRYJkC",
  "key35": "5UdnjKGD3HS5bihqKpXZjbMrTFvcagvHP8vRHAhkSzqaPpCMqBTMqXgdKb8nHyFsdmjxyz4DhqRFsxjDESeqjCiy",
  "key36": "ELKvDzByniy25bkgDtBSwPicMwB23Z7BL7pqCsF2FTzwHPRAtPaYJp1VTEKmJe2Fjj2ku8gP4bL8zN2HoQEKbYk",
  "key37": "5ZTyTvwvyC5yEzmrKZZNKPepCAveYaQ8NKJtymBZGQGKAqi81nLtmcFhLW6YZt59oRXqMjTpxWcoDDvVQSQnkZou",
  "key38": "4teM8pKFNZmCXJ4YoHscGtMSSQ5B5imHt6CuMxmHhyxjGYjtEm9PgrEs2ErXg8XUcxcBoXJ9SSN7c4sibT1EZ7ug",
  "key39": "5jichK7rW6DAcRwSLSGAcsn9pjEnXAXdZxwoNYNTzcQ7Dh3bCcVEGPHCn15rx2pcmrMqkyE6hKmLgZ4KdzBAJZPL",
  "key40": "5WPc2PGfmRBM7cr54mBGiEbzvppScyPxpRxF4gJpThnkSbMnHnmXC2xvPBBiEQa1LGBopk9ZxRLmZsjZyHr2hWBh",
  "key41": "4nZwCxddGNEzKFQHvKSatKa6vgxF36w8WeKQKJjRsKDwhK9GcRg2irzzpKiW1ySajmnZCxpfe24cEee4X2RtqLow",
  "key42": "3K5toKeHfMXxUVo4bw7whJFZMfRhKxX1jqjM4Jh7RhSPREub9UazLQ5HGmAWEqGEnhpqAtxj2t82GYyoBnMsKR4x",
  "key43": "5LD8wRFPFXq6qShJR3NX5Vs3ERsH3aBLjLCNaafZUqNToRt7FyqW8PmcgvTvUaDq38GbVGygCmszBY2HENbbGHFz",
  "key44": "4tzmCkvMqsws7JCqdpvT77y4v67ZL3u5mBNSpryT9KJ6p6YEeAzqJhXjWdAqiZ3NyoashFNtecQtvgaAhPGb5bn1",
  "key45": "zsS9LZeLoxv5XNRVbiK7t5QEdN7qpCudEqLhk1J1UypZ1wfdnyBGTGyE7YUe45MVVJFRpqk8gqPvvD3oUCFUB5x",
  "key46": "4yQcLjP8eJPbTsugGDyGYX3tGdbfd9K2j4B7hN7T466K57xZd17PcurGgsmpD961sUVZGurPWS3gZ8L7JzZLFRfp",
  "key47": "2fJhsZ3tvCvJtWhjB7Gskzk1gZUVod3VbGtozcRmiocDkS8k5BTyeW2sfGBYgdeMm9s25fGfd7xF2s87fFz1erbV"
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
