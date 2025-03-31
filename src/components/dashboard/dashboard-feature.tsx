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
    "5B1ngcLrGDr4KcLn5BjUdeNVpxmD3RNvJTvsmPjhBQQKY59QHdy9uCSdbNtbvLLm9UMZivq7Kmn2e3X18RQwZv8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xD9eLqUR6tdGKy5Fk2W4NeLDbFWgiDBQqNQFTFKeoAGEWLahWPDoLJJPkWivTtmvmdSXV2DJnNboi78Pg7E96zo",
  "key1": "2qd7YCujNvENQNKLVb1qMawkh4tHXBu6s1GsybAKt17d2R5CAuLPzusy52rUNyGw7yVyPwfz1XN5NYT47yxZoir",
  "key2": "2cN2AunG49Q7qfWBoY514mcRHhiJZFNToMk7tZrEeJcyqgaToQ3wN2ttonpnB4ARGMJmagDmThPNoDJvsYEweFBT",
  "key3": "27yxQvXfMmH89AafvLRw4spY2f4wXeDco5RWU2Z9L5fzmyuJd4QfUyAEMqdTtc1T3che557oagzoYa5kXfduMji9",
  "key4": "5kiMbLB18bjkN3nXsCnyHLmkFjtKwmcikth6hNEHCxN11steYvGw4Q1fAsWxiBej4bWkAoPSymj2mYgujoEQZTfR",
  "key5": "29L7Cod7VgZGjQgNFYyVXucs6qq7wB8erNmvHBXXFPndXcSXkepTRbCXZ88ecoPQSDfeC9cnjybdRTdSpmgBPexH",
  "key6": "3hrUfkvXqAsqWXd58zHaXs9zRy5oVqbHifi8KLyQp4BTADB5JBvFtxR7FLwN3wBGaG799BQUoCksrsY9xmiAG95d",
  "key7": "4orjk8sbNNoFzsqL25sx7uLorzRV9W2r2huYusdoSTwmYUo4L4XqNqJAdq8opmBejyZEEECTnkDC2sGjYVenKE8n",
  "key8": "4ycXF6yuFXMy28BcTGrqyeN8cp43nNLqqNsXrh6Ttor9Yq7iP3R6Jimbtrf4cg5UQmGTASWYsUMTDkBDWqRFkQ4q",
  "key9": "dQNbdn3yRPK8yQRgks2KnSuRij2DaKgAuFnVitnFS5UifdH7swcz1pyfd2ZuU5FfmNK9Wzc7zEW5ePKKE91Za25",
  "key10": "523NzZEJYhyi6zWJbS29PYvFWNYhX2jvjTiC8FwHabqbXDYasqoHSGD2Szg56CiSRr5aZ6hFs3WJc9aDPpbNYFnV",
  "key11": "4wSUTqLtbR7aaoPw7Z5yAkiovEFXzV2KH523U44Kc1cJCctq45NHbLZiRxMq2DsFznjtXVs8wHYezYPEW4p9EFZk",
  "key12": "4bsfLCEddJNsY9px3HdvvG9ZbQnfY3TpJ3nD81eEUtsdFzE67rfbzMyHgpzRgwFEmkvS6yWtfxznM9fZnUyMgrAE",
  "key13": "2pw6cJb4eAxh6fWPY88ARs9n1NJcePV9yep5EgbHmQDpB55jWezEjmJXXLNTY2jVzkFq2XoYe7z6y6vApqqN9PXd",
  "key14": "2DmjAvj3Y1E4AXW6T12UCqzsoxwYXcGLeWZKX4kgPTfA7LcTCZzGNd2jMdSV7LqW5zap2KRtjisvPzkXP2sJmjXV",
  "key15": "4QagkepF6hNbgFAobpjGExazfe3ehPLn6bx999wEcVssZA7yi3wtgnpUsb2KJ6ZPW56m7iAiuZfJTde1c6gF3jn",
  "key16": "4aPS5FGt65wbxSdVJdWXPiXudgkkYkmoEBnBT42yfqih5ew2nVAyLDVhdavrR3PeyL2fW5W9cFzReMxZY7M17mKF",
  "key17": "5NecdiXxGsp8dE3352SmTyVEK3H8B31CbD7Nz8mWrrf38PnCeBaP2AUp5643LrJFDEMG1xYgmybt7iGfLFShFPue",
  "key18": "2XGnFZ8yC228hv9rCwFC3sDmCT4KHFnJx7tkiZcJoebJUfk2nMQ7J9DrtcRrP38UreayncPGaibbmeZRmWi2bFzG",
  "key19": "296TpL9NP6GxjNccLkRAW5bvFpmo4iMzQddsWyNMKBMzJePZy82sZoLQ4ebgzgqdoWJaY1ewCX8ozavDpcQS5MEq",
  "key20": "2HBJd97Rek4wQhRN4zq3i2gYjCq1y95zvRZX6kzGUE6WUGnNprQTW1ZmD2nEMnbV1iBiwW33wjpr3E3zMSk32q8D",
  "key21": "4s735MYV1CrfdcsRZk7k4FGPTGvx6Vu6FqaDHQnDjCvSiuLwrtnbHy6jARJD81FnoFnL8a7cZDuJ6c4exktDw1F1",
  "key22": "5K4Bo1y7A5cBqDvjDXZYzo7HEApNjRurJSqxt5CQ1MgjbEKadfm6XXrV91G679Z5gGSy6TAjSUxX4B3mN2Lf25ov",
  "key23": "5GafvBpwkC8JyrdjCpHYarnJHbRthNFaeMayLT8HjbiVrJW9wSnf9kHWCEyqyDGaKQSfSBmruuRuAgSZg6FEybJM",
  "key24": "3Amtq3Kpc18tvZttYCSJn2zHHxzq2PZfmqsVg8m2p6h8VaBAWGLFTHphAYSNiG3mThCnx6HvsYLwCymDjjLNenCF",
  "key25": "3CDWkdn6C2h1Bx4AdkoF5HmqoNySULSenesLtBZYfvNEL38rtbr1kqJSbqtTAjMgutUXyiNxDVAJQQ9qh7NbUBtu",
  "key26": "3SKBuu4DeiHJDYeNkA2ZBVRmmM2i3Fthge1TRt3G26N7Q393iLdXfEfbdETvHc1ePNp3GYAVA3ABC1DeTJbpWu1v",
  "key27": "2BGUiZAemny3qJGu9Uscxcz4jjERPBhSSvBHLdK32Uk7LuQpWUaVvsfMpAEYzWndyatZGMPZVXQrGcbz5xerGDFt",
  "key28": "22wAqvx3acfxgu1Dpkur14fe8xU3xHq2wYRa1hXfgPk87JREMAKYgKT3pWUFWzsstZQ9ZRtLsPmH96S4RanR9FJQ",
  "key29": "2gBkAQmSd4dg5pkbVuATZi8GahH9tFQk2Ur9ru7PYq6aecMFTbZDvyKvS1TD5E6UUWs2vWtm3neuc92ZyDG8eBkC",
  "key30": "hBjGGS9pgn246CtKZeeuSz9WpQphVSoE3x25YNdbnjZpR3tLfQxdrns2CeUSsK6PaYfJH1aXEJ9KNeWSG1putYc",
  "key31": "4ZgzH6RSvgYb7R49Vitbgm2RPTmzm4wMZYE8PrYE9bUH1uPqsvGMr1yYV6ft4jbK1pF3nY5xcm5cMevC8GCCMPMQ",
  "key32": "5bgXEtWZLmjnayDMJZgz72Bk44bi8Bk5XNnbqWuYSYP6Wssa5sQ3yjLmSzrcDk2g3LjVKWGHoAFo9FWA2z42s4HA",
  "key33": "3z798avNMHB9Mn42kw71CrReXfBYrbaGvs73dqYgdFdgnN1oN2EWb5WMskBA9gaNGRwG6dZtCy39riY7UvCdzWN3",
  "key34": "bQV7nU9CTS744TXSqM8Dps5D4a8uGXyR4NQtkfvYg7bmm7MHbmVUfW7ewBDVcnrnZUz4v6ABcTvz3rTjFz2JPjg",
  "key35": "5FdErZUxb49WEff1HfCUyF1uYKEjnLADjPscN8TLuzcHDJr1yHp2QzUFpmF62LKbC85TnQfHCcUjPxzRunLQZaYk",
  "key36": "5vHCoRo3K2s6by5vGd2sGEqasFD55uEYt1f7EZfwhWbQCVQTaVkacFzPsBZ6L3TMgSf4ruYRdU9GmMYcxDKbs6fz",
  "key37": "3YDeSn9gES9nUC8N2VsAU6JvRos6xyTJoR4zAnDStqr8V4DMAvXdvFQ86epNSpy1zfsVpT9n2dvtiZF1UziTbmjU",
  "key38": "2mfk3tj6GFyDisJndLHGHYSHL1U3PbmWCSpXamMLwArhzYp7ohowAYPE76n9KaK55e1XgfJj2tRASfgmZXq4R57G",
  "key39": "5AtJX2g4fzQq1oi9ugut6vJk73irrzDWMhFZvnJWUSfuKfDFhzdmuUGxPVJfkunEzW9pQh1F1c2VouwEbptJKxqF",
  "key40": "aLJhiEBFtJ6PwvY2L7MLMwazbhRa1PamQgL9TSDw5MkRDuiVQ6wBjgjVk1NiixmwfJS2xEdaG4s8QF9iTsFSpyT",
  "key41": "4KHu8ka4Jg3jwPuYSH17asCLP1d1mgdMDzay2XctzwLVksu4FZMmNQXDZqkNqJgTnQgtT4N7Br25bgJN8pCKbSgx",
  "key42": "BmY9VpsygUCDK6ZUnc3tNez3koiQUC3qKKXb36JkqKmqs3mDz37RzcbeWdGt2UNiNqX231xN2hbw8TjmoqeWUcU",
  "key43": "2wHx1ekK7ir1paEh6V6iboo1Z3j3e5pramVGEB8GiDwf9cvTsPwZ2kuXmNyHoTQBSpDc8gcfyE8438Q4mGnUJcFv",
  "key44": "BZqHGKCbRJKhDzd6h7az8kiwxTNSgP5W9Dnc1owQp7WDU3GST5AYQhQLRCzqWtFDcnrQ2rkmMEK2LfLo1cq1moB",
  "key45": "uuF1Dw63DBDgzYhCm6d5N5HWmwwfGoMjaieFVYP6cHiDmZGt2LUvc5BY76igthhcpkj1YDkp7PdyqGhvFxn3wkB"
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
