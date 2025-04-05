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
    "4Y8AvspAQTk3JvYWp4UTpypiaF7oCYrXfEtyJaXJDWB4WFmAzDkHALpRUFA66JoJWUrF1yKGYSWf5SFhRipBfA7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mwVqBdSfexn3cVabMbw6cxL1W9YSb87cmURwrV9TKT6EFMRyFrwxHmG5Y1ZJDf3uxLHvU4VrxJQfzccYi7BZHmA",
  "key1": "2CyAcGihUAN2mEJZd3g8HZrdP6WCk7QL2QvXeoKAFuviwD69S61AogdWjrvMp2TBJeiDx9hAZvJiTE7H4617pDTX",
  "key2": "4CKe6hQyyrQbpHtumekZEG7v258o9UZuWZj2Hiwh487PWNapFvW5NUEhYoptXFee1C3KdNZQ9m6jnfL2QUb7PMW7",
  "key3": "4W1zsw4RmTCTMD6NBoQ9a2A19U7LhgkSgcAwaRnBTZvJhTXvueCa16g4FE5hnhYZGgCEaH35gfJEPtPagbuVSPoz",
  "key4": "Vm1NHc9trhPi8KYV2xBbfTFEFPENPmseB8ACsjihWwF41m9atP3b6xcTk9e47uZfDKmVpWQZPafmtCSrfbiT1oZ",
  "key5": "BLuaKRmNCFE5YQWwaGiHnshU8YmGbE4VG6LfZ4AfCSXmNpw1rxKjtf2C2RAG8sNBq6py9CisrrHFnLbQkdgFKER",
  "key6": "muXGzfGxgqpNd1wTynY8NH3ZmPgDr87Jwb4saha5qyvw5N3p8ZVsm5pG2MZtzB5gHvMBU6Hn7nMZFzbaCnDEVi4",
  "key7": "4KhoPebezoyWoCpMDmXi3Suqfofs7UR12XfCJRkYm3zm6fAQMBuDf1UsCSjcU5z1xTo41Rzg117BEdy44ByR5Kdz",
  "key8": "5ntuRbZBJm1mT3jNnCsRsq4n4PJDkgCJuZh5STCL4aZkvTFBuGsnvSzrhLnGS6T4VqDkk7V21Eu4KRb5bcmyVPj8",
  "key9": "27PFc1Cynth414Lxy1pBhGTW8GRTv5qtYhrLmBt9NYcmYhrnHrEyUsoLgoyfQmUpX8PhzvWnwAK5XsB8Sy61xDRA",
  "key10": "54pjYp4XcUM8KEoimUAoK1PiLTBtRV5FigYTxy7UfEMvunvZ9S8vgnEW2guckdfRa9WnSUuasoW8beXyaB7hY3Zv",
  "key11": "3tR3rirARQqViTwz3oBmB2jzG9awNEk8fNd2JadSu7ZKwcqTJyEPnVktDuwEVYzDnhEbykhvfUX516yF4ium4uJW",
  "key12": "2c4tXGcWAF9h1yDJNkKva9t8rgb2QMZCT21MGmTp5awP9ovQZ32pH3TLSUqCjWYiYLgSXERrADKuKCJ8yPmRWsPE",
  "key13": "QLCDAXTy1cWDBsva23DBspNDBpyfRrkm6UcPLQ77TufcL6E2ed2mB5y3tCqejfwWeEKBpSdmLLFeDLQ1nZxmPJM",
  "key14": "4i4LcGWJHWAx6Knsepghacg5PPDmE1vDQhkpGoZj57Rt2E7y4kMpe5H21pKyVsxQKiYFf5VX1BBxaLFpZ9mLGcKQ",
  "key15": "FzpbWRjgqmGuaFQBupLspEcD3mXEKGvShnxedKimVpqLeizVv1Y3a7iABcWL7Zwotmiw8xfXF5Q3qbz9sxsuy4C",
  "key16": "2dZLRRnp88TN5ZvesX4QZUaQrtNBAew8x3uKiNQr4k2HMupTPxrqK8XAC3Z1yinf3izPce4z3k1GHGkNUAoGMV9U",
  "key17": "2tPtNAuYxGsumcf8xhS8jf38qwfUsz5TiRPhfE9Btq4GPdyknyPcdzi7m6RpfVDLsqZENtTKt7MMJHy2d8qaHrgh",
  "key18": "4dm17JMScn4rP5rxDuiSuN2aX86y7SDW5YNaj8cVzVbzhsP9dQNkcPDhBuYhLQVnHT8GobcjEZij6XmkeH2GEcSe",
  "key19": "32vbuEDk9FTrMZ9dvXEQz9rD7DQjtN8bk16EDWw7W9Azd2pebma9czExbxTMbzj7DZpEy5xS32ZraEZLUuh5VAuZ",
  "key20": "anvuYJVkFYnDGQgegXmAZioBeQLUZtZZ3eLkGkkFwJvdEo9Ew4arocC3XBd14L3nRCshb9H4LkU2xiDn1WmMzzD",
  "key21": "3uhC5M2NheS7ZLiN4JXUtPsZm63mFKj8mVz8p9Mnh1XX7kAsoM6vDmkzzRGwDoWatg6KMVo5tjAYSvmKfF436nzH",
  "key22": "5a3XmwBtqKPi4EiUHjqMiqxGcSzv6hCBfzsP2izmhLh9FDAdyueywhPeBZiG98zGbpb7fkxKX78k3PPE8ChS9h3e",
  "key23": "5aAmjoYvn4m8QYHxWCFpDFCi6huhcnmru1gWFjh769MP1GBCkA4Jyd9vu1ctSUr26nRsvqWc368MSKFaNEQvsAwy",
  "key24": "2jPVAMKKmPRwRtc514hRx3j53QkdKeZQ8AnAdho2HoLbJGHomRZW7dj6GEecsK6BbBAbZHkUPg8CWXxxf5cXy6PX",
  "key25": "45Ybb1AvH3LvzcMWMHbV1sj83oiL3HnkUgkodbV1RFJyfMmw87911VR7fsoJKcvinA4T4vCNzS3vFYpTQw7sabdP",
  "key26": "5no6UFhLaCpZcYYZNV6m88nX2Y6VjEDKM61DDQNmVUXk6PrX1xKzcgfZF8zqUFEWmxD8WzVfYJ9iVju3CFxmUY83",
  "key27": "2Jq9gGGaWd8mbPHXF8LSvAngYmK4Q343Vr7b3kNfZLKVtrxqrAUebq84xYWAY9jkuhqLjczgPj2rD9XASZNhbAAZ",
  "key28": "3Rkg1A2Nh3QpwP3apXUfWjQ3X23B3xXwsYg3yuzLWRagNmN9p1SUN1NhFRr7gk32xCVgd276CBQUUMx77rAW5YdE",
  "key29": "3SV4d1jUjjWbT5Y7Ns8tsnfyeqYFNvHG9e2wf6HGJExpVTAjBYzmq949SPG5muMiHh11uJyVvUq56sRqHVKVBGtV",
  "key30": "3ULx3q8VWNH2mK2ot18HzX7VtreURw87boxfmakjrUEeC3YLnqVp1YU4mq2sUJL7PMzPLFYzxYyuyjx6wyTyALF2",
  "key31": "qLrNkL3Xfcmqcr6H8jZmKTCQBAq8RFWWnanYkbf5gL7NpZiKXEh4sRFsA8bn156RL599QYofHYyEnSMKsQ7ZJCS",
  "key32": "3rrANeyYisPd74ksNjP62yDHGdijrFZmxzDpYygaQ83S3YXpii52d6dJEjzJUVJtxxLy6v32jq2dRuVqximSULfp",
  "key33": "4fvpVRrC5cZprZ3WDEk93BrFSBCJ9S9enx5qLLyDphzGhAdTJkRXTHh4GdRcgX3CGxc9Fbzm4Yzcm8kyVLGV5Nt7",
  "key34": "5onmc3NfuV5c4X6UtVxiA1F4pGTbyeZJmNsmavkSCwFPGgJtFGcWk5xHWR4pyeosdwmm3kuJgZ2CQxwkVZctp2xt",
  "key35": "27QNYtZuDgfYbZonD5auvBPg1Jwb3aSFUMYMGUDMbh1FfpU6aKPQ1fXNN4ckYvchGTSRUcdpDNZLUwpy2CM1ZerP",
  "key36": "2SE6DmYii6LYrFfkpkZZodMAcCRqigVW835otVvne5fCHYDh96td9VdkuxJSsVWeFLPQyjSwAgAScfiD6u6w5csM",
  "key37": "5Hnpwo4Dpw2JpxXxtseNHtPBZM8eLUn2xXskVBaLMtmrgEw9RpfLVKtWviTN7EfJDAdyA1Cb3qYh5rU7MLbEkwZU",
  "key38": "3wPTbi7Brjt2qDdTRpzyWbNwkTeLZjKu7JQBG79wPJjeCe2d7HauBjnuxFhG8V5WC4q7WfwuMgtVFkYHDYbGGLs3",
  "key39": "2Wido8qL4pZ37r2ifLLU4S6Tc4TD9X2az1NnUvovvAABkBVvR4YLgoeFLbrYsobgNNkRE5CVgxT4oop8wejn8xQP",
  "key40": "61XzUDDoTbQwEGStdmaEygCNAgCAHDE59zYdsJKQgDzqtkHDVxaSWYCQgSDtrYxTYVzK5RWFrGFUYg9jmy7n27qy",
  "key41": "347ysB1j6XCNCPoaFwwS8KuN8mTSeErVwgyChyTapCp5Jcv9Dhp2WQrfHKhJQqVwwZ83wEGDWFsvxm5sJJzvK1L4"
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
