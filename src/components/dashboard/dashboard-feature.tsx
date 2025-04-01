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
    "496Z8oCgdngNNJqNF3zcteBjNKZfuAthcBG6afo5wjhEZUGUhg7pQgsq1WiWhkBi9eKQdGqghPXarfWDR9cMuBRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lqk3uaphwfotxdtia8RM8dGSq9derfbzfLcLfjquf24hnpcLhDgZztYwPFu33bAugxiKk98EK6vJboownMBa7xX",
  "key1": "24xwTEJj8KnjVpzGKVJavCy28fJZPqTejfTNfvyHusAWPt3ohB4wkCPwNXqbVU7uUepZk3GCtmYFXFzwMYAEiSop",
  "key2": "4phCjCYxm5qkq9HPofkLKyPKxFzjPM178wYzKYfYqSUkMbaHti3bsJceCueVifYs8XunSqhhdBz8gxW6Jtzz954M",
  "key3": "mUNi2RHuBbsRJjS2UKUg1VJMmWW2A6dv1ppYJgZ69ftjtysowaNDXmD122aNqKu2eAKWNrNtmwLsRE2ZF9F2Wid",
  "key4": "5YCMacHBV824X1TfQvUuwbNg51JTdZM5JySzt2A15nDmiZ5G5JwSsmyxPMfBnKPH5fCD4zKZBU1p7ncxKQJ6jSdW",
  "key5": "mx3B9yY2GcvtQwzyTe5M4KAZG8XKLo84WWYgLDwfrqiZ6AqxngTBhUnkjEuqyfycE2RdmtzEytQFZ95bdcoGfDx",
  "key6": "463yxKpFViWCYzyhshWeL7YwK8KQcNJyANVoRcyVXaZorCkGYh2AhzV2ApvfoVkKPhH8ieJHJQeruSYoJi6sFGoK",
  "key7": "2sVFizTqTqg55TdD4uNeuNeiAQSDKM9N7PctDMVaYaWxqwEC8FpwayWR2ybddGbq35fe2j9MeGtoWepo9xrpZsED",
  "key8": "7Y4tBhTRNQVLhvGWycHN3eSBHogxioEALjVgUZLCycvT227AodknkXWBoXQ5fcdAdcwuwfUWBK9b4qj9YWPp6q1",
  "key9": "5yNwj6cvoHU6NkJYdj7JpqRARQcQQweDVop4Kr5scWcUG77bYakiBST8MYZQd4qbUD9cEwJtnCDQcAmXvRnibtXb",
  "key10": "2NQBKBxJU3gHqe5wNt4XpuxzQAw8ewsfyDsG4TnvkmoXK8tkbWLqm6CXZrx7g8khHFD3RYxcGVAgLWrjAxkyarys",
  "key11": "5LZfdDCtvu6Aj2VUk1eqG1kjS99RgEQGgmu1JPL3N9ZiWHCubcdkCYCFhovCP4jepjRF7StUyFxb7MagJ2bzw5xt",
  "key12": "4MmE5wQZ4jZVjbYdw5raH7D96F6ewudpDpw7ZKKy9bzHZfon9da5kiz7FCbCv77Q2PMnUDRARxipaZc9W2Dkp6mc",
  "key13": "5YFWS2krJwbePaw6KwHUVbzW3hDRDGTtL8JERpURvDYTybntJhNemPWfZTgAGuouBLj277vf8j8nHPEcHL29SLTq",
  "key14": "8RTx5taQ2hoBSBVGkSuiNqNoQPjDiiBki9dJbdar9X85GBJDQjQ1nVY1FNt3w9V6E5ReAhAvZ7FLeY5sZVndzbZ",
  "key15": "5bJUgG9bWQGdgF4XBgXZHvfM7F7o984yZnrhNP6KY4m9Sypq6BjNSbfqZHE6TnZF1NZzhh2vCz2s7JxJFu2wYyLD",
  "key16": "mHFFNGZzZx5NisArPSXxYASy8R5DRpVg616n4pzJkTxg9kzYNK6tY59PhCMwpiHhYFL7V3zeWKaJBbHszoUgNUq",
  "key17": "3JqLcn3xwh9Rs1D3TgfaghRP5TSd8jLMNvSJ5CHAvXBhgCANocqf3DZw5SdYuVEn6UuMctwALKGeMzB5fK7Jfj4d",
  "key18": "4KSsDqComknG72fgz8Ex65tWo2vZrjnwwGgs5eFVsiki2AG8UbBbT5K8bFm8T4c9sWhe7a8P8HcniAz9vSgasEYs",
  "key19": "4VE6mTFHLznnaYVCui5WHVtXLxNXXRXDQwpFeoftSwvgtBKMB9BHZ94aLK4daYtAjDobjmW9zXPSVppJb8zHRg5P",
  "key20": "2XwsFuY2W8PTAnjqo53B6HZ2kT14eQ87L8wcJoSnGe3JzEDt4yf3QjTu2TP3uJov7MD9ZaACgKAU4TqDspJAy15L",
  "key21": "446v77cAhXt6j2r55BgRZKUGeepy5bgkyJYne16eioReRyPSfvrEFyCmsjc3pekp7qfa6TGaKBNA7zT3uRZVx2dP",
  "key22": "35Npw1GQZwM6RW1cbzoG71RR7vmwAKkDbXWcLQPHgwF1rAMF8mYfRNxcsH4oJAFKuEGQvA88medPxdGYVJFrUs8R",
  "key23": "2kuFDekYh8sfYhZeGwzsVLWKVyBcEA7fq2ZSu84xQPZc94uXRvqPWTbZMjtv5LGAaRVMxEAwjjZCvsTaRgbvvaZi",
  "key24": "5Mxy4PfHusLvfBoBojaorQwNkBZFqsRahArwuMdVmXkmJ31u9QCabeakoVVxdMgmqneJpjzv58NwVZo6S42LNdNa",
  "key25": "2NDgm5QxLezaiaAjWEzMogF8qunaNgp9mcvHuuZCXCCnGn38kZZ39EdH7c4XoQzagJMN2EjVMddmwgahZFiWS1ug",
  "key26": "2Q3V5w4NSCz5mEjrzkzKzT5kgdaA3Xj68Y3fPANXDd1SYGBcr7d8CxPBG7MCtCzAScowMVjfsuvXYPzaReYaXjyy",
  "key27": "41nadxACXwSFSSCG4bTt4z6va8nwiUwGScxpcpV2PsksEw3ZCBQQMwxes2yvh3krp1rDwCfskJ1fn6GRQcehimf1",
  "key28": "qqncH3aRu6Ci7oDHSpkj8y8DKjGFoNWxZc14Q4aUBix4qZM66CrVWTx3bAF3YDMRWzcewGZjSt6tEkBKS4uQpf4",
  "key29": "3QBV5ch1UnaBNH3KFip2f3uJunHDpyp1UsUEa1UsGLH8HJjpnn6jXNvXkhQLufqKkTpvLLaQwi9LcRFnoLSSEp5U",
  "key30": "2kfZFJLz3GvfudzRSPxsT5bBsnWJ1YoZoWfAFXy4XAsH1e7e4Dmz2TyEZom4XQdMiZjYzCwQHSz5rLqKABBZaFHR",
  "key31": "5sW1FJTNyZ3rG7trt1eduQYHNefQ9fKVDqxyHbJg6XRWmKafaeVVSy9W4FKiqRpeWGEtbntevhBtBxEsSuEr935i",
  "key32": "4pkne6DQkULhjh3gBcys3Bn6EPhQsDbGkdprVxYaDVSmhaoy2SkLfTCvKzwAnWmxvh4GHqDmUzE9Q7QwGRLBafdw",
  "key33": "58sqBLA3hhNyAXgVQ35WkkFTabfA461UY9Txo52QUrjN5VCmQgD47cNB7Z9c9363mbC94p6ZAGJJVpoiFL9JVDAD",
  "key34": "3dkLJHaeLDd4CNQ3fbMgEdHo8VTPV7FnpLpRAYhanDpDNbq5L3NM4YTXKx4Ewo7UhqUNw45LjR9p4Q3LiGyNfybn",
  "key35": "4PB4Py4fwdwV7aLg17vo2wbjE6yzx1tdDZUKnctDCWnnHZ9zqjf87w5mM6aEVCjw8y8hr5gbMoh26aEkaUUGPWot",
  "key36": "3oppDpiqXKSSiDbGGJQVdRoTZsxYb14CxvrvA2mo6hGuatrJYiUUKmDf48XfQKEucdejpTqC6kb8Fj8ALpAnziDa"
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
