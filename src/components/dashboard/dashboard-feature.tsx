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
    "zpG3eQaz9c1kk2QrSWTGgbhsCMZ8WAn3yDdMS4SdhfKxrqPz5BLF8hcif8KLZRgmMJKWyppEEcdKUbUFDoqP3BE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f3v2vKQnkEXkPm285ybbEFqEWbt4Pu39DxmdyFKmYkBUtoCLmx2CpVLaGWFK55FcpEGuMTD5t8r1poyXzovtX32",
  "key1": "34sMbg9hgEyxSupdB81YoBRkFeatanRrh1qu77G7vDN3bwDTbKksBHYXw832m4fow3UvokgXABj61EMsBpk6Ev7C",
  "key2": "j2U3Ksc5LrNQGFF2hdCmVFFQQeyFXYQHqzQ5yNG3EKTfiUj355ccrb1qm24W4zqHxA9mQbw1Jdn6si6BgDqv1fy",
  "key3": "3B5kGr2JxBjxxr7yHgWyJEBmEDJ5aA1Qt964hVnLy9H7am5DRBcDasutr1GfwWSCvLK2yRsYiShiygWofm9Xi5tS",
  "key4": "5mpPQQgzxsKUAkJ1v48VP8zCjFc4u8fMEXC6HygpY878rgGJirYjrVsv96rH5cPvhy7MsxvmUutXw77ThWTRu5y3",
  "key5": "5QCAhZPbGdGXdFWYJRsVMaejYQxawQWFSk6HDJxPhnmNwKd9TkgVt8Q54RveUT6r8txjjYUQ6NfL5Qe5hWQVcbtA",
  "key6": "22snb7jfuxp7VCRUGryUCvm1X2fTNnbUcoZUqDb8SC6iy4kohpE9CqMLxiRVBp86s1xUGatHm5Q62sREkCA6h1Qf",
  "key7": "626Eim7mGYT2eKtkNZ9gkSbhEF2a2bvR8K9yyBwBP8oYdjLWBqW9E8yMHfBVaNffNtXwkXy2AhmMt5YypwHpLrJG",
  "key8": "5ExYHg76aJZfefY88TzzggxfcU3XKpva8mbL8dHS38SXYXdGzjA8vKFB1CSVzr6YaDcrcMk3Ucb1ENbkeqtQ61Nt",
  "key9": "2bAKwmijkNq2W9df6ZiJ7tcpbV5Lk5ivYLxu2k26jkoHEr4pgXGJ1JkAR7xvmBDEV843wTi7C6ep8T5NBSxvq2mq",
  "key10": "27U8nAxrM6fj6dvBjAGdPW7hyKRHDheVrgmTA6KYx2Uzb3YyWWKkuVvR6so6YEFrgwBw4ohKdj7tHC367R5Acvqr",
  "key11": "2qhgmYp1csFdcUCer9c5RCsu9A1tzRTc6zZTgh5Jv6qM7GfomYgFDhhnWew4XdQNscobRF37eP2Mwpgy6f519ze1",
  "key12": "2tVZVZY8TJTGoCa8m1jQNUVqKzQMMchY1vrS8D73nEHB7KUZkn1S6FVQSBjh8L6A75ynQHbB3ctq4FRiMTZHJiq6",
  "key13": "2t6VHKLbtZqQrkdBCs7ZvrfYKKkLydh323MBm6H3EaNUneWLM2nA3LVR6BZzgQ4pdBDpRvhCCkeX7ypbb1nXux5d",
  "key14": "5qKpNJqv65B7eSWZnLxTr2gp55BmC2vs7YumjCFCZRT55Lu4tLcSW8NukHR57EqAcX8BDAmtKe2HR8JiZaPf5fH7",
  "key15": "2NQS5Ytk68xQT9xYi79iAksFQJetDeMKwXgSXLxSjMyVCbf78a3jeo9Jwv6AY2vhjvV1fZHBQb97ZHnjrUupEw4P",
  "key16": "39AR95MsEPit5izvKhh8SrYf2ebrUj6EfYtYdribupYdWjFY8c8kztEy9C3GovParJJMaHzu8LwiZ3v5dMxbGDQ6",
  "key17": "4xcpMCFUfowHWMJvrDbaAW1JVjTJYe3iJZQj13HbBmn3us24rUQg5uGt36QGh8E3j6WemF64uknpYqGNmDqg6DT4",
  "key18": "3GR9JGVPzHuscMwhmYaGHU1HZx6Q3LFreF9YLuBdmjDh6PEDk2c9i4Do4jrn2fveCec7dA1SM9mM171BtzLMZNZH",
  "key19": "4hCx2BQLStQbq5dFvB3MHhDtSzFr5H2TRqoWvLQoJii9FFNJawiTg4N8mzN8WxxEpgYWRM6nwdo2EnyMh6gfjaEz",
  "key20": "63oTD2azfxGYK2khA6yKh2zfXXE2ncaJVxFn8ndq94MjxjCAHuYFP3rRxxh3u89MN2yZMqGXNkDiJUqaJakSuySn",
  "key21": "5bU6PKVnvtzDq1pjyDKdd1vLRJe8Ffmz2gEEWah81xJWgq2UfHWJ4y8CNAxzS6dT4u1C33h8RoeiGvZkKzvCHG6R",
  "key22": "dJToTtQNav3qqVFVFaksN2HNdKyivWjmu11DXqWne4CKX2SmfLhy6cqJ8vDNJFAie9fxdbugr9rB1dUcjLWTEPZ",
  "key23": "5NHskfBfAzVoCHZcDifJEseyqQFgKXntSdQh7FqAk8ZGPAY5zW2CQYdttcSMAN5eFS2BDMsh9TXCveVSxD5TGxJw",
  "key24": "35N71DwaVoxUAaRKPgn2FCcFvndBeEy3jJ4ovnZmFdKFp6ja3M9t2DpnGR564NFeM6sMFhVdMHuz2njz3m8r4Saj",
  "key25": "GANWm7qZs1ETUmZZgmBKMrNgZDnHuynkc8cMaNNh2YEQJR6uE6kDhkdE9CBhVw7ScNDn3gRyYSoskDWXRojXa9T",
  "key26": "5xCTd9EmvCDimUBB2VjTDipDNYA8z3VQ63Ja474xUiKoXtcwQjKmuoXczgyz8rQd2xeFxkSaPGNeoAvnnjPS11J1"
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
