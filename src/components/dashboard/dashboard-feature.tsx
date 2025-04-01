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
    "5RAGqWXYJA2ZWg3aTiMJw8AHSNTZoB2d7BfgBNJT2CbEVD9oSrF7YFVcRfdUv7bhTsAh6f2Khja4S2befYukK1sL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VwHs5SSdrJGE3rmaHR4oFfQtHJvcR5nTDJt5pC82bq8keHMGenx9da7bJcHmsza6aTRG4uhT5vZUbLPZmviM7mB",
  "key1": "5xLbq9S6mq7JHY3XiqQN2cSDSRTwYvgMe4vyRa2wL3WDxXrimfytmxQoeZsRhcDDvgcy7mEvpQvWCtEv1KaTod4s",
  "key2": "49ctn1TLxbhre5TCoysWNSa7ArAuXTbxNnQPpyRSwBageU4tZByWinAKF6UUUP5rcuAMDh1XxgvNJe6TMx5oBdP6",
  "key3": "3zs8niAQLMjGdHLYwumvqoXkDPjaNwe2o4FLReiuU1crS5XHzwnrU2aaTDrWZmG7UaLEkQHyjSREfJ3n18BJLNTS",
  "key4": "2rZtH7JH448KDKvxsmcv2xoCfsHd5DXPn11coApeS6exvi9MG8eN6Z9zjAGoHyt7dyZyknsgwEbSEci8KdWuQSe2",
  "key5": "4utm6BRXpZUyQSf4uxbJmcr1WGqS4dZPdo5VjbYrnUiQgXe8ao29FbyJjQ7827GpTxFBxzgdhVoCtYyR3vUVoUkV",
  "key6": "8ee3q8FXWqC1HRniA23yWwAsfQx86G33rTvEWyYhJCwHp9ECcmocGdJ4o6fin6v7izXaUrTzuyEzXcopwREXkS1",
  "key7": "3WtMr7HH66u3fLbCHYQNhsQALVNYWuJWfW91kFznB18kNfisUbuPYhpNNSenpKcpvHMgQ7KUztJMK9r6Nb4MAi9b",
  "key8": "25dawejRt4z4mt9ecmUnpfQ25W1AbZmCkDjV5KjpvuSfi1KhWP3j5CTaorsLF87SRzNuJ1idciMjcDBusZKfkTj8",
  "key9": "GxreXnBY4vLaK1tsqW2tuVN95xbtxD8ZzDR7QcWWpRVyM6qUSRmqf9GxehvNVPgdUKG2EGPhJPX6cQMUZySoS6U",
  "key10": "5zFaJPzHAmmE7D667CAnv1MXE796XAtkKPrk7Sq2XnnSi2SKJfCxho9qjrY5CgXWkRtk6xE3cC8gG5wtCugGxSw2",
  "key11": "2TJwbXCFm1MEgPY5LVsebZoWVm5Cuv3c1qJLbkT4rHC2wYn3E2N6cJcMkP123FeUoksTYUkTVv9Fu1FYzASwtudt",
  "key12": "3sym5AL8UNNwSxytAymjWPGBk7nmhEVWswbgg25pyBDqDpen2mxPVBbKUKU6qVygLtrJh1gFf9sQuUWQMr7Ed2yg",
  "key13": "2eRNHD5sockAKPb5Z3QBZu7YtQjc7vX6KAhVvEnT29tSePm9fnJsxanDdFKt7WHReaRyMejZDVfJevmjRtEYAnnD",
  "key14": "5LJb7m4D2cncEW268WUjudaeri75e1QsFKafHrLgvG1S99bBSj59a18BJQCATfXGMJbJGTmbHTExXUfuWHqUP2vK",
  "key15": "3E6ta6gyVktvPw4Lreu9ULz5aGyBgiiZjzzumbabQBz8cnCm1BCA1i1Eyj7S788Z5SXfAjfubxmJxw4JSUZswy1P",
  "key16": "tugit8VDoz7saS5gVu8qrKKWKDrUmpR8tymm8mWLW2e2PHHUEJDL1tbCGChoopuDWuNCokU3TvqxiHarnobocut",
  "key17": "4ypvWuRvKPyPw2ewWe8K7wcfYD5qnCdwRJBxxymPnBf6DEFcWqpzCrbJJ7pSLShmL67Bjq5bMWgbE6sRbv2LvXCW",
  "key18": "2Yy2N8u1jLgwKrMW3rVysMbmavc7q4L616DNEys6uwTSDHQj9uBe8cWMuw3U28HtcvnDRY5vCdekaz5oPMT1s6P4",
  "key19": "8q9cbYtrrMw4eUnuFdARa22LYrPGo5uxd7ctfVgo4T1fN5bCvEVGMRJjCLf5CUX3DGU3rNaEBoBLgM8WdLeMU6s",
  "key20": "SZ4sMcounPRiJZjiP19ZDm8Xw2LgYFMtXjS5S8voDaFeXvpJrC1eVcJwDF9Sqy3orEhxeUmD5RVK1BZpa7fVEj6",
  "key21": "3uJYNWvq1R5jPtKThYW4p8jNZzATpEFa7eP99W1qorQfzStFm9JsW7T2zMcMbptHB51uRgqxFgwDZAFyEvYm5Bmn",
  "key22": "41wwUqz1ad53yYveiYsCYVgGbt7WL56eVurwFjtBtmeYM4PFBmx3BjXNnkENYaLnLPM5fkeUMMhiMstYPwVmqRLj",
  "key23": "4fX5716BxQ3mUXZwZi6cDt7o1enLd49pPH5UjEZmo4Wknr3g8zDjHkfaz4UC3gFHTDwBbrLfdxUpRwZAHPWB5EKQ",
  "key24": "41G7CsMqA1xCLd5N4kngtSMzt7u18Bcarish5nWdJFujYBDEzwR5sTKAoHvSQUtVyrvefzztfGGY4wMBjK4bFre6",
  "key25": "eWXywso2td4NzBfrrmofVKCjjT7qwqyGqrEtCCZ69qQenFwNeuLxKMpvNqksjMyxB6vKfth3KazczWdReDhPi3U",
  "key26": "5ZKe1yuTa3C1gsKA5i6BLjnvAfiouYSzXo5PQeTYVAWzkTK2BprrxVV8N5Gu8gCJwfpMquJWe4ajWYH3i9tc5Ju2",
  "key27": "4naGauspWLwhSnQc4mKAURwadQyMRNnHBLL7k3ty5ZuHxuGeaxa2MG1VMvbp1cjAg6vvSvthP6ZWBjqBoaudEkcY",
  "key28": "4Gb1Z12pSGWrU1qHLCgdfViJTV1m77v8cf1xzEggAuuGBF9HtUppsBfbT8XKefR7XRQYcw7ZZqkpo4sWo3qEdK5d",
  "key29": "5iwuyCduxnMymz1QweGM1yWLDcc3zTcxF7xusFWtqCRCmXcn93r73PCPcKNDAdK7cTd3SZ7pyPweoayTJvDiZmMb",
  "key30": "5nZFCjy9pDi31eiQQZU1QeUTmf1JrvE7erZPLu5B6rQFVAqv412CdHeZG3yyUR3eqU6V43zxmyRevDjiFpgbHxc3",
  "key31": "39YsZb1748ShW7sLfASh8fpRpe1svD7WQBNkbyHcb4F4BZXehXpzvzCaBzvu6NoU5ye46Wt91cDrhEusi8sTNSTi",
  "key32": "33apQtC6tFVZUWiNRZAB7rTxTJHfFqyp3bvYx7XTAnE5L3Bb6nVPNWC2ELumDgZDrn1MX1cXBYVpVc42FKgXsej",
  "key33": "9DDjDxDo14MPsBRLBQNUB4XHhVeqHnn9wkDP3ptPLtbDTHgn3DU5pEeCyrurMH6iqeTSgsNyezFr4XKaxEYkhHD",
  "key34": "2bDakpkWCK1JCBgs7ECuZfekAbVioP6pL79gYWrUNnYYiHKmzLAdQRu2CXxnpDmF4uxmsjPcZP131vgNieG7myMC",
  "key35": "3eT8WrNKqMYCruGcRSjdMDWLZ217e8TQRuQr7651YYphxSiWuUGESibmi6E8nqvPWrWsEJs4g6HPZDQmEwbBSkTs",
  "key36": "41fXb7XM1Lfc8xgBAskCxpsEJHrj9gK7Qpk1WLenMxamkJurGti9Zfex4Eurc4qa1xZDVFKVDFNxApRb98BjoitP",
  "key37": "4n2jaeEm9U1h17eJbV3jYVK7WbpvBk5KZafmay2f2R8yybiUjicb7ZVaWHeSm3nh8vGqo5GkMwxY9ZzY8mTWCRCi",
  "key38": "4A3pVENAvrAuYbkZEgL6wqjnnkqCsFZyNp5qZ2WbRkBYRQA4zx3jUjNXSA5evvGx1no44b2LSZ1KRKA3exf4uSnx",
  "key39": "mo1MRPqbqi1qTmKvGA6i3Z2BtmB8SXfFiQAC2ArtVvmZLfxfzCKM5ZNpqjdk2uhnDntxgxNY5yBRJHictsKZqw3"
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
