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
    "4WVTxTfb5yNPuyXuQKc3VpntBQcMVGTuUtStZZ7Vs2tRhh8E48ywjzxfxw4QsxCc5hrT3D92zHGVpeG8qZDgD1we"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cKUE3sWiSvTpJjsZVXAjCNi2AAMHzE6cogGbpbExL5nTNrdLNG39Xk8XmKuMiQ1xAfGzDkKCpqx2MBXorHeNJMz",
  "key1": "w3EMqvP3qE1B5BDheQa3QdEukQ3ucePgp5dArPogaYuYnYzCnB978YidbJhMqPRx8TAL3Yoz7Ri2yHdY7pX315S",
  "key2": "3NwmExLF7TryggcntBWj5rdDrv3YNr5YfhJALcbgc6gioD2ixr1QUcQ8KsvAAKxcjdMwBJjKJyUrCLK3n1c39EUF",
  "key3": "5cYmuT3anZXjtPVYFsCj1RUkMtt26z4gyv4o1XCUMupWNg8KCTZ21yxSkierLsXHhXgWkz6bVxFiqkwo67xQ4gA3",
  "key4": "5P6RRuimf9E7aPhXjPiEw8j5vCYAf7gc9kmPaUUUDZKkCX3kHzBkVdi74ZugsAG3DFpkQRoD4Bb8pTpNrWzuQpDW",
  "key5": "rAu9ZGsxwVtE8DcgpiWWwhKg4MsMjao92EGF1A8e2L2fevMBSN3LEEfHpRsJbKen9YsPvRDNecgrCs9mnqa8NL8",
  "key6": "t7MXm57xicJJ9QYJr6euwVMcVsNnDn2oeiF7o81knbMcqZHcTyCjpBzm5hvcvWw7cjkgV7qMcYhr9Rm9Hfe74Ug",
  "key7": "3gQoDiRLx4z7CnuymC25nQKwLhWopG1GSsvdFmKsSwUTcodex7cjEBArqf83oadxqf6zDvmmRe32hH2mpyoM2rg7",
  "key8": "4HkE4dJDGapnXfibTPJr2QzEUkyZZVu7qb5v1TNbu66xAfg29z7HtsqHiVFKVeHeGv81ShQ1NfcGKaHzhDMB4qnR",
  "key9": "2WRpxVsnvo6nNmyQ32whbhRMnGGdBEughmTz2AQeHDumZagB4uLJTQAEiFUwS4cC87uPrpFfPzc4wEKw3SeruBjA",
  "key10": "2zdPXNSsYYNo71QXGcykYbGY4hMSjmbQsMYb7EqesR4oeH5PhBQvHP7iK56Ei6LCr4f4g3rW8AWECE6JAiGsMxzs",
  "key11": "3V9UB4g7sUgu6MSs6BVBL8sPcDtAbxRVRW2P8YP8GoG6e5A84wQibwSK2sVPEW67otg6u6PsJ8RjQ7CbWci2XFf9",
  "key12": "3aiZK6uqJ7g5HXraaWN24Ws7B7mVLPGwVraHRjNPXBLKwucCdfcWREq4tjsPyeUhL617wvNtAPw5v8nAQ6Qk1Vcs",
  "key13": "64xiLnzW84XiV38CPRaajz5c8pR1BTBomH6SsPSxm5tZUjnuc7skX4biS5UckEEf4Fn4hAbnW48J2XLZAufs7Bow",
  "key14": "5XRoUb3jCLHcH2AiQebt89RQ3j6SHa8yvA37sG37kAhYeWpEjWXsT3SfK5UrYuwaVFHoib2jJa8Ed6TuUnKmejBR",
  "key15": "5RLuwqRSxrTB79JZ2YJzKLrR8xp9MotdJf62Lo9n2DtzMen2ZHY3PMm7aYip4cWTFJe8Cb5DCzuqoHPdux5DBoPc",
  "key16": "4iq3XL4vW9hj2ruvMq3emAXBWLC7TrdySLu3nRXLHVhpAgpxDvMBi9yXhhoKn6RAb4cZ2qU2ZhkCkeJK1Z8KgN9b",
  "key17": "ZLzmnj3o13gm85UkdHiwAyEvQXB5uKSUsWv1nTfHrfhbthsGBmYa5Rsavz2vvTzCPcfUrw7nFjyXnWrYH62tcbt",
  "key18": "55VaNNGFSaXeK6eXeVXoBZQJY63CH1gdr5AdybB2ketbqsDQewZ4ZJyR3aH54Mo2dGcpX4a8DDToBR8snChazf2M",
  "key19": "3KkNwcf3RXUBRHTy9H19wTAAqfWXpz4PwuGhP6R9V1dgYfxDJNPZHHWNPeFn5ocqMzk4aNmdkcexHikviTp3rWST",
  "key20": "4VK5th36zexXryRFmsu6FsU8fL7XNMDhWuCYUvv2t4qvgk6kikcA5o3Hq85J4rM4f9eX2Hji4JkuZNTWXfGXUy5w",
  "key21": "3ccS6ApKkxHcjTE8an1zj8p2CdEmMJhBgwAYCguaiKoanWR4gW26oGtzT83VZgd6pEpt9jKZmVEfRWK1Zsv2Bqeu",
  "key22": "5vTQV7saJmqYL2LMYDzNwWnN1GsZh4SxuG6t8VszWTMVYLRBD2xmUaQMvVaKWziMJNyWGeZMwjVSqxNTn8AYGrYk",
  "key23": "3Ftjjf8AsMcPMxzXnQj6KppZeoiGdkNYs9xmr4o9dpTxHhfJib5FSFNeM5MkoRQzwMEBA1A2pRhEhV8Cgm8b8Z42",
  "key24": "6fBSSkz9Qb12S3EDYrGtKD3UYsFdySmcYdAiuoLKFXw7XfhShRFvZ63xkGFRoziE6YK9yxkLC82WTUZBsiveQsn",
  "key25": "4GkM39uKV7ognhPrcv77KfPFUfy1obhQXU2uQpJRGGNtKTUBZjDfqwA1cwrSKqvqbhg9ytBef4cmGgFqwP6g4vNf",
  "key26": "5ENbhWa7LDzpFV8MDssQUNBTv3D85AaYxPJaXsHDvefgqi9Y7GiEHkpYrSkHKpetSpbBmc2vDFjuP9qRZz8MAzx3",
  "key27": "4Q14tzqvVberfLc2Po2HGKHcsHc4g96AaJ38fpsaBsvjyz3NGcdo9ndjwNXKqHJpiySM2Wgnt9avpJwkDN5R1nrV",
  "key28": "22a3YsdPArZ7WPYsRv7TjhJDepfLpcS3k4zhcAecAtfvyjpRrt9SQ3ZUCxR9FedbwuwDRWFdfjpbdJNKMgRiKNke",
  "key29": "57vQGBjJS63253Js8Lm3hJZZHPcNy4yTTMy5q36bxdErFxpVTcApX6fN6wwtbEHvsZUnsHpFv9sgwnA1PS3UzHLq",
  "key30": "46gGhQDcE5DuyJndijrFJsUrHKUWeHgz6pwzt3aKaTEbV7FYS4op6d74CqddqvyMJ7T9DFB5qciTcfGsz7a8S3Tk",
  "key31": "5XPD61Nry8g3RJDLF9d7EA4gqTgJ1XDtJLcQSokrecoN4cwr6furEGhxQbzFKJ2V3DNVSKCHzTnENkupvqJ9U3Ry"
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
