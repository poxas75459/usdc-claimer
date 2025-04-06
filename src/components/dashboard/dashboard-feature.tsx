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
    "4wsK1Yd74Z5WTU3ZeCHodA9EBbzsMpN2aNeqWzAaLJbQk1vkc2qurZZiBPj4iJ8ShFDQKTWYBnNqo34GtpFWQ9MX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BV4NWKuQSQ4z5AZH2YCBtRwAXNsUaUoKynU3Uc8s1fUfmiGDRW66oKnVjt4wEhhr1sMMXCqxvEQa6VMmKGbewkp",
  "key1": "5wTpDB8NjV71RZ867YBgNmTBtK5QJJV1GP6KaqTF9L1ToTvkXLQSGbQpRRorztWKsVAaaKJcwE2MHVTNWNZFPD9a",
  "key2": "4y19faEykquDJhZBYuPUmzapiKXkevPf3MKmu9GZ7ZEFKKvzhSKNkT9VbhDT65kJF8Hh53Nqsej18yZFT71Gi7Y1",
  "key3": "5YGmpFCei27aNrmEABTmJLe4MqsCozUvsJHnqWWM8JwSord5BW6rC4ZbXj2w61U2ZUz2CmyHRN847VpLTo4eePfZ",
  "key4": "4cXcdgk3Ndx55SUXNUCHfpDn4YMxbgfrYenqz4vsjzJbgrpjHGf3EQSgKMeJiBsk2bsg6uWRGfhoE68CLsBL8ycm",
  "key5": "VsidbV36HgTLmkPNzGDitfh3QcJdvJfv7VZLuZJbUbkzA3kBa2YBNArPo7JdC46JfVvufhKRAWD9dtqcv2DdhSn",
  "key6": "5eJ8c3XCMNqgJGm1Xq8ut3mS5AWU2DCntVNrovTv8rThF9za3mpMMV5oajhRUAqP8qRx4dgMFcubbjLAqECBMffx",
  "key7": "2JwudjpqZfiFUGBw4gfP1QVboXyCbgHDLhfzF9owDJRRqhkFcFNp4XXB1CpsPa4RD6uexXspFjxxpCfsHwTWhzVE",
  "key8": "4vHAAggQferKukmQs5pAk5LHwKrVvyEYZtgt9d3N3TN9udqpsWTzJtCXi2yYLKCezPfCEy7CsJppBUVAi1wA3UPc",
  "key9": "mmJJJJxcnGLd5bHqNsc2huB83QvLfM9nDYhnbXYKgziFuohGNt67wS79FEL5oVAqtPeyN94tZK6VJumGnFBYytN",
  "key10": "3iGigHspsTeXZSzghBGd2GBJjBV5saNb9x6hQPh9eFhKJb3Ev47Cz1eLuj1KmsnTNshKQ6Ve8qESzasifeYbDb6m",
  "key11": "4q9FwzYvBVnwpDWDMuvQ6zpWPdDB6j7yLa4YY9DK9msCvFWVfXEK9nVwmTJ6wZq4kABMmaw9op2QUCHk1E1GRZfD",
  "key12": "3kGu7Xoq9Jk3VytUUQArHqsFCRoqUSXdNJRJpbzJ9oLkCBhe3BULfiiNmCQ8Ga8YLpWzgiFDzqWDMrP5rewzvqrn",
  "key13": "56ifiKfoRMR9bbPyLGGTPgvBxKHxJvUvov9UNtSWbC3ZE6h4MeaLU9w13JZqQmr6srn3puVVjnTrGDijVMeQRXt8",
  "key14": "nXrzr3jeNW5V1ytZWj7SCWicCzbAZAkeuQXJjAe2znubCdBQYwLMXL4qRTaoMa5FjhNY2g1sKy3mtoTqJSX7yyq",
  "key15": "5q52E1t7GGNKFh8two8SeQmuyzyDD8FRGp3awqHqqNjQz1Vf8hgk3Mhjx1dZu7ig6nuPqaYsvtkbhS4FbhL4mZov",
  "key16": "3Zx3KvDV6SmTrh6pzonJjaH9JbUgvizdZETf8SEWVcoespbBB8TPYYCqfuhe4DPQoFfUB9bRZpNb2BDE7eL65niP",
  "key17": "2w54KmuRVLwDtN9oRpU9YqLL8uim5hNRFnjjBrnX44KHkxgCL2GtYGLBshwNbsrKSPT5GTNLnStkcKmwCUjzsToG",
  "key18": "5jRes16mNsfB1foAongsQs4yQYRpztjiqRjA7T6LVAHzfhda27yH3YPnRs9icTKEft9vzoxzofR8WPBWR5ZmfvUp",
  "key19": "2WiQw4BFkZ1pDxrpBsb5d4DKwzBvQNVuNc9JjEZZQKnXZVAjUPYzgTgkkpVHxCYh1TgW2KYtRFrJXoHhPLHkxWym",
  "key20": "4epEimrA96c4YevBTKRGjK4jUaVBBzS2j4eU7RYmXTr9pW6qDkRxLoYE2jqTSdjDZPckk7JNYHjr3xrPwWqxc7Y",
  "key21": "2qsqjVoVqADbb3JesHpg5ZSDmtyfn9JZATcrTDUEZzTFpcDufdQjiXRW4uQYa7daK3WqbTAbv1pVVYgox3Jnb1Ep",
  "key22": "3JjrXGuub5kquYE2DPL3neFom6jKGwcrKzLUQQwtFNP3Ar8nu59sN4voddJMDQnXGzfkM9McHUnLgPJuxUqbSiVf",
  "key23": "5pwtX436wgvejeuoXDieuGtLh1dR73A51hUuJNiNhFc4pcAHifqe6p1hbWD6HDSJG5Kqpg3YSGwWKtS1Wsz7hUKE",
  "key24": "5rVbHgPbDS4n2Y3ck7TWH3PsuX4XPcL4MXsNwq8BySaZmcGbo5LHAxumKrwzzQaAT9UjbPoZ2tcB7ozE9ucPRTZR",
  "key25": "3ES96afjUGJXiWkSRYKZpy2Lbsf5LAbLUG3gkjamUt72s1U5umXFMieZo8a1bPAmpYRjQdsUkHSBuPvXU1czxKH6",
  "key26": "417uaAwWSyNYDaXiWce4sPq4oCioax1ZY9yZDiAUVJr6AyiZV2oXnn1bCMpALZ4q9hV1At1eWn42S4gVAcfFDHDj",
  "key27": "5xhWriCSruzFYkdBkJ7wZavCP2iuqyuiBZktEokYepW87aWUTLhB19XwLxLSytat8W1oMLyFgXK9oavEcjCEiMJf",
  "key28": "5KBsA1jBRsQEP8nJ13UduUZPhEEWfm4FDX57Xgd9Zpi2Sppc3VaAEFHe2VJzQrkDD4KPH33EFrJsrxtpEyUkZjx4",
  "key29": "NALQRgZbuyqG947u3YGfcX1fUhSoBSTMbqRXpGmyrkkbZuJ256RUYE7DkH3jVhzzVAC2UbFTBQwJRXrdUcT7sHA",
  "key30": "3tPYgDvGAWoBWv9znK1BFFsDcWwcHccsVeKNXXhfKhXX1ax4HjM3v9pucphnE621bRPZ612q4MKxYKgBDRCVcGv9",
  "key31": "nzJyyidAhmHx1W17Z7pMsZFzcysyveDT6Gaadw3LaMrTqobCu5dwFAWkHBrefmj6wjuh478qhXCtZPbxk9t7huF",
  "key32": "2wssGUUvApxiAZ5LYke8A52pYBGUx35fNk9RccWdCiYXZn3HYidh2oC9CweP56V6FwQfQJs3Zf8JWR7YHF18adMb",
  "key33": "52wzmhmWYsRxTPMAWUBJKPacfeDMNsrP5PFi5GSJZLkMXRkkJk31UCaUvvAoNnsXxeMNPCKtSpRAxP8NyxEG1AHU"
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
