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
    "2LNX2U2ye94nfiZ6PQVbLZvycVaGx3ub4DYnCsqMkFzG3RpqtHZdEcNG1uNTLdAABSM1rtEQjZWewGJf524mjCsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZBrxs8P2eesdbjyCGyaAVca6A7kNQL9BUhoY17pfnH2Td9GiQLvYUMFkjwHRhK4a52GWnqs5M6eE5mxqdWgy3Kd",
  "key1": "5F4Hao3Z1der6YgjytyEPP5PywdsDtXikLvHcby178ESopKVPkBa3MMqKn7RUexDdRRLg5FqVvby1gGnwUYUkZRf",
  "key2": "5MuK1MeeqVShMXXEXhcWx3XWD9XSnHbEJx2qiWLy4Hu6ZgReE2mqQZD43ocrwHGsL3qABtsSdMb1yzj6JAxGTah4",
  "key3": "GhzLSmDyLPG6wwS8gXJn1ggEDRL8wx5Yti8F4psRXnfmWEsjJ1knbUybHfMAKs67NFk141wJ7PutVxgQs63jwf1",
  "key4": "4Jx65Suw1BNgJotzfv7SVgU569Dawm6txEjTyCM3YvLYTJor8yr27bDyau3mq1p3VS2yoYbyZDSqeeVAUR8eDght",
  "key5": "2zMsxhHMBwGmXQPKCX7Wj6VrjvSJzua5WSPCPFTeT7RHzxehLpP4gCuww3k5SFSP7b97uS9eARm7ciCvyGePxtKD",
  "key6": "64CNDZbya9BJRv465Juk2cTRVTp31hHHZK2Nr9cjfmJVgrm5aYecYGtEKdTrS7iebky7RwPzKMngHtDpLZUvS7s7",
  "key7": "58h87App4SRCYgHJCh8fYsJb3NmWVCnmxoJbLgQggT8s2VkHtBtpXV8roRrgAvGWzVdTD4AKMV4Xwmj4gqKq7zVw",
  "key8": "7gnsTpohESvySaCNR8PNVkhK1UJ6h7t65iHUyQQAS31DhJh4C61EH6y2HvMNfK4ZqELTH9xE6t6HyJKP5AYyxhG",
  "key9": "5L3ogpgg1XBagKTTMCGojgBSjPYjragypdMBnJvyhwFTBUNVJru9iEqFRNyqxSVwE1AUJuA8xu5vm7v4AascvyDa",
  "key10": "5MUrtufiiwpZ8UYy5mLcnsyDy8i8w6GxcS4G6BiHK8YGjSpE26Djsk5CXdV9WsDjFJVbrtYMqtkzjFxY7swMTt9S",
  "key11": "hh3UE6xi5S1oTvkX8sXS9XvMciFUouRYJ1vG9DjCQspbsXQg35Xy4eeSEbXHZEXJJNXGU96GBtHSiHyh4yYTspP",
  "key12": "4tpkRAeZzUE7TKkgcf6C33bAPLDzBFiUjL8p5iTyR2UkrYNBJKbi6vwMQr7bRfmPZsHttYgrDHNGH8eCkMJdXwKx",
  "key13": "5cTHTLugr29PNRh97UbZhGKnJe19vijzsPEA5zrQSZr1xemhi2JzhyMdfvSEVSM2Z9umnLeVD3w8TWcNrK2tRi3z",
  "key14": "3do9Ke3qg2shzHhWK8Uxrs75qQwxnWsQci9n4C8jLQ4PyYq2H93CVq9re4Ey7qTAvFsfhEahHtLiazLHEHg3bTRJ",
  "key15": "nmmMgKHZpcUdaT5e6F12mTBYEK5kvU85vABJW5wm3tCe2FSoSn8ESsE5u7ecLkSg4ynzCpBa7L74F4YCpn5TFXC",
  "key16": "2CHV12KonhpFt2w7TSmEMYUbmdrqN9RPWCHq3nCjyH81qthmDhkXhqa1Tk9JM86uWkGp8PBHTcov7tkokH3DSi9t",
  "key17": "45XuQvvJGtmEpiQs8qZiy4jU4x15wSRBBuQfEdP4H9o5Ha9z7GvHfv5DR1cci6YHobEzuL5GLHcDnwYNNbhKALVj",
  "key18": "j5cux2t3EUSWFTa9tX9WXEHdnF1bPBjn8io93pjx2JZD6bQC7ajBmyNfdTNfsKoNFz2pRGY9ewRiLdB4e8h6hg1",
  "key19": "8cuHNUz4mfvvBwnoMZMvvCQugdnEJneT1jSuiGd8hZLmcYD6MvjT479nVRvQqznzb8KUQJE7stbnM1E8Jmeo6NE",
  "key20": "2zASvvRWrPy2xecEK7yveNxd849zx2brqPy8B1p4T2bcPfQoDhz6onBucP7bUMt2z1PQgLgSEMgN5aWiK9Gt9m74",
  "key21": "32evADQepfaGpjUp2F99n2HhXWx4vNoBB6Pty4jsPnax7YXcCpTvA4XELCDD6pWCp3THkXbnsxAJ4zgn3bZxx7Gz",
  "key22": "2xYoMTE3mFqzcy64hux7uTfvfnA1RSoGQMjv9Gcv3u8Sh7PFRKgyP3Ht4UM96WBcxApiFkf3QP8xt2Cg2kRgPQ95",
  "key23": "4gvk2ZLGKbCagVtEPBLWJi6MaSG7dPJm34uAbUFDYeKjUpKfzdakKVi84FTKrC4ZSZGV32GvrWQX19fiqJwDCHFs",
  "key24": "5uQestE5YAaJXxkBnvq3cQgKA6kjoLHz1Ri51KZ5J6iAo83HyxZx6STuonBucTReV7wWR1QHmGqw6nuzdeAkyeHy",
  "key25": "4AcCN6JUpbEhFWtJ1Hs91aAmLYSdZ4bcAQ5tSuer3GUfyRNs9BVbTFBLkataEsGZheNsNCSdu4wGhEBmGQALSCHz",
  "key26": "35UBtNVWZ8ugyfasQeM8YujUYYV2hVV12JPJWYwvQ3Yx7NCzf5DVE7QfocvMy26Zoa7UxW5R5mJJrmJc3UhGqzQn",
  "key27": "2DcDsgYmutqjmdVg8UVJ4Z9wgTB6fPxJhWTmG92Ezw9d3zYm8vp8grtSk2rRCJREQ9a2dvgQkNtTFFsnYMxvrk23",
  "key28": "392nusxSpb6BCFqhkGcX7Ek5SbNoCy1o3vrYqVawKbYwdsuQcSbTcrBNwK81Po6cxZw783ZAgGPa7a61RE8zzcKk",
  "key29": "3xi3fuysu5xEpVNeB5dViAv666MY76JfxMVorJjEsYLo9bniD1YQ1SJKXUDEC2SaCCjxEVBPkvCyJthCpviWi7JB",
  "key30": "4VNXUiaVWcUN64aFfcYDCjLNFsdvpxvBkscKQSmwssDDHGWMQuDkihyvnNxv6i9DRTNvdi7P86mTTsvbfGezwThv",
  "key31": "5Mfy1xJX4STjGGo8Mg9tCLFnnP33pCE6NoaCWAS1PR4cTGxA4AbHonBGrG3uZTjkSgsqXfuSoie5E3TVHjjee4tn",
  "key32": "51D7THsJupM6hH9AR8HbSXqkhB2xcjJT3rhbWgcmktys7T7khytniB4N3mZEMnkXmJJjZLH3Bjz68gwdGkdg8PMS",
  "key33": "2JY5EmhSUfceYXNs8t3CTQERNAh8CrXc5Ce1cWMyAGLuzJshMbaUDyCdSRTfUEnnjHLhSxWvsDptfs6B21npPX3L",
  "key34": "3T3NfNsRcExiwZNTcXiJtZkn5TXEdXUFUx1x5rUoyiobZA45JyGLSL75QoAWX8Z61w1ZhH12imcjk74zC1PftyXY",
  "key35": "3Xc7SwRP4rrUHxtrHV5SURNPM1ktD7W9XCPQMJz6nKNKBJDUkaMvdUysjYCV3pbwBP61Zd9d5CfRxhjq7H9hZh5V",
  "key36": "caN13nqzdSHyB4fJHKZgVMQ5a4Rxb7xv6KxnjBq7PSzTPJS3Wrmhtg53JGwDntTm4VFEWy3MuKAzxqMiWcjGM6o",
  "key37": "QuX5HQCdHFMfbhXam8B5s1dsG3tpB38tjjqq9LtcrxKBdEZY1hvdAFZ5ekdtv4fmPwXtwjrHfuELLscVhy9Z8FT",
  "key38": "67DyWn2VE4SkgD5xsBkfiYDwBnS2qccAyP38bUoMhfy5Q9h1DeAvJFvCEyTUiFnZdxjXpXobwKF8LVyCudueVk7y",
  "key39": "mkTAwqM5mXWbxFNXYR1hYhL7p84ay9kwEthqgnk6FFkz3vHqghc5k5eCnxzLfGgP9VifgoLte7Y5wBiSFxQZr4s",
  "key40": "5jrZHZJ6Nnf3b9Vd3gDkAjRjxvjEeDTEMSUkwomDNFP7d3rgMqhiUrJ9cC716Zh2LUPdpPvXARBkoRw2Q1fNinKq",
  "key41": "3MqbBypMU3rx1d5bZhHZ1tDu4MKGeUU2vmaBGTbuv8qMNZHCWQan9uhM8Qv1fvK4pfun9BUFvJnPfnAGfAYnTZCC",
  "key42": "4rdo8zkvm9xbrBziusRjkiFtyabKmtQbWzcsDhavz1i3sPXJK3Q7ey9nynGWdCYuLRJo4uYGUJrXyWMkA5xgdQuQ",
  "key43": "5tPoJ8pmQ7U6wYom61GELX3Xjekd9SG1zqSkMSh3qDjuYeNkC84rZSjfpYo9DNPnuJhW2FCZE9TH8epCZGqfAHyK",
  "key44": "joYYVj3MN3Ne5DRSP5ajns3KBaZX66dMUyVHMdZoiayhsDR7daBFzzm6jVHnAvMJvjZEy7sBAPF52CX758w8Cmx",
  "key45": "roNCYRo5gB3LgtJN3Tgrove9sFhnWMmFjHS4KfXe3drPrhQ6XZQRUcKJYaE3HhTeuxa7pJDCgM7XKJWcHCrXwrX"
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
