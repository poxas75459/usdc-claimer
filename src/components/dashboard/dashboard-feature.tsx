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
    "UxrN9oLsbQf7zqpjigA79eZEoyuBWDDvYsS8EYTSuXkLkYwicDH5o1fTA4FveTcdJS2stSShyisPqk775tra2JU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KPkuKQ6rEMpxJTdoFsWGKFViiCtdBXHaQJVw4d3vxDeDDUCHGKjtKms1kanAyEgz9z9KmTkcRsNAkhQYj8kFv2A",
  "key1": "5a5ty3SCACZJuK4gdeDQ5uxzc6MaNqkoVpvLrFN43SyZY1VKqXt9RWRdABa2XR3PiYh6xQFX73Zwx4tUxV6E4erN",
  "key2": "5Ya8seMAupednteT751G4ibAd3RL9oetdSGqvNPqP4pkxzGTvKXd9AhDocXsxhvZiJU2GwTTeqCHYkq9vwxq4pau",
  "key3": "5m9rA5wXFFnM7sNWeihrHfAdN91Qv7mQ5yj24mabuCGmp28RRsoRBUDiQEbXRLdzpc22vpz1CTAfA4vFki5Xra9M",
  "key4": "4MHKuX2cCMN4dgKFKqXPxdLMaaqCkgLXzt8BNtdweex7XTwjCycTs7mn92CbM4Rx5jd3TuqkNPxdacZ5ZGAfpvPA",
  "key5": "2oX6eSuTh4eZp2Wew3B7PGJLwp79KigesYPmYutkd5vWJAD8hYqM6rwpTwpGt8HkLMnZgrENu21jqY4PCDJ9TEjZ",
  "key6": "5jdCNRNBdDcpZpLVNczZQZvBrPtTCfSEV57chZ5G7dHkySTrDPfhfqwNzaF8VtMVNDj85XWqD7xW54ujafFr92Wg",
  "key7": "Du6KSza8jz7muAwxYM4CkKu6Dy5SkzSC26mqBJyGbGzVsQCEyjRbKeRjwQGYZ8tJVLxcgTzNSAn6oNPDgnssmXk",
  "key8": "4bSDc4PgC4EvGuGKoxhrzoDz7sHCU7cYA8gtVYQ3MPzQLqdsq6bG2qM5XWEsBpAyhQrUQeU7FFHBn324WT3t7rFc",
  "key9": "2rp574V1qBLoJE5q79DVmAje7enNQF6J6uZjV4rL4a76FDBmT7q2GJeuvfkG7tH2B8DcGTYFMmgDVu8dnjX8KXME",
  "key10": "R8zbDNvsLXQKXmHbAEbR7ZvLMjCZgW7EfY9QA2kneLNQcqQrGaNyizfucuVnJZPzhCKA42w2GFp4uLLThEa8TdK",
  "key11": "c63Gy4nghmfZWD3ZnbLEQqofXJMoFvyhWm5mQurGWt5JJstwETPxiWEB9LGXNDLKKeUpMUFP7WpXq6xSc3BT8ER",
  "key12": "3F8a3yCEAZ1HFCxiVqvc4SY1izCbjRzadSWERQZkSL5mJkJFu24ykJ1XaA3FVcFQBL2x6kG2b55ckbxRCcch9mCi",
  "key13": "Z49cp4yVXsp6AU2wddmH9oxH8B1ruDmm3WzWMEoys4uBZWCbLMPrqNioUJG5ygjRzrA4MZNLQUhdmzYgmAEVVL7",
  "key14": "5fK8JqhwC6mXz8berYh4y317EDJiCAjHqPmmJVZSuWAoV5TmR9eBCouK2YCYn9ywn6wAoa2RHGhAi7ETaNyfiGHD",
  "key15": "4jUdcLSir1MfXXcsdGprbrgzXg7yhmajg7EcyoBQY4QsFAmZwLNEMC5GFrFaTzaWUdwGcGqyrXg2KT6C8LYFztH4",
  "key16": "66Vd7iMfXMsdU2LPXmwYajuHJNdvw4fPJ5g83jdogN7HxDJJeGby5MMqc7T7rWeTLNCFxtqkL2Bvct1vxcSyGfCE",
  "key17": "472WWJx36xkitHZnK3bVkAMSKCeTuuWkDQAvJahsWQq45T6iM1PaBim8GSceevUjG1mjMEzxqHEPYXbeyjVZosoG",
  "key18": "3Ax3mgVHgC4mNrpbVwrp3UYuRtqvTenRXKJ6ATuiUbd56BpyB3S6i3jnaqUSD6reNNo2kEv7oVZ3pd19AczSJyao",
  "key19": "4UVqSoYR4w1wJnL59W4HosFYp2u1rfquHrVfHdT7bBzqULJ3qTG1d7CQqQrEzoE5tYdkhaGMHQiuLn3TUuYT1h13",
  "key20": "VeoUgEb31nYT3jnJ9aPJkGevAAUTVANdRsEeLA4jpHuaqHzCmB2ArG5SDhHS1bD2vxBEYSbhF135s9FgfkDfnSV",
  "key21": "sLfRqk8pcoqD9UnE7tMX6daHMJ2q8SW91EeWKSskMnZRKgpNLSaoM8k3HMi9Vw7nJtFtcjg6vpvKhEatUS3hBi2",
  "key22": "2MH74zM6LaPaSUk2AuVKsjW6L9m7qEnBZ9dkh1rx4qstQSAaLmbLT9EFN58htkrctR1974aozvjYUJ8ceTAUSgHM",
  "key23": "2cnMhUKHVzSkhDjBLhRPnatiUdbPgPJBHSToShwzARnEvPUCXhDtrWgwShFka6jgDjRJtUy8kzGKkbiMAMJ6W73q",
  "key24": "4x3e6bXdWihbfq397XAUEogRPCdgmGWpgwVstm9FqwdUjuZrNfVWAWZJQRGu5n9e3smdpDpBR7YVTQcUE9UygBkw",
  "key25": "M7a4Q7GwKh2UtzEFfrwCRdB2CF6rMi78fufmgFvwc6KKsiUqAsWxs7CgEaoRSyK78u3ooEYM9toWY4MoxVmKywz",
  "key26": "2yiwP66EE63YvVaFJFw32GrX5jtUnBhkJLLyZ3hsSKBxxtWwizQ4MUxqgofPyVLvwxpdMymm15mKJ6AWVYDasEoP",
  "key27": "2or24bZoMFAoh4XCF8tos1qgC8P4aScG74wdgNdfNNm1pWaiubyGk9KgDGrNxpQsyH2GwmL3pnrXbHt4JG3fYJqT",
  "key28": "3E9DFzXZ3RAqM4xPB44nV2txrKPEpPzoVxnT3SGh1Cw3evG1yRtqQgZJQLeBQaesdKYtwciUrTefYGqohGs7KMgw",
  "key29": "48U2AQXbYeWy6qvBmhNddLQPsHzTcByAP52DGFkTy5GNmDATPhk8NUCkyu3ywGZqk7Ln3Dv8denhQZanLdoAv2qC",
  "key30": "3BmqmbK5mkcBSrYcj6ALnvaHxGPquZVCyPJZi4tuugFtB4zkqvFiJNVRnNA1hqgeHBrE9xTn7Q2jS4MWYauExgsB",
  "key31": "3ist7TDxkpDz8MaaQWZuv8oMJ24cfpiWTzTsYcKJjtzfMTmyjEjx5E3zdrj5KjyFNCJ6YJeHBZV5s4Dcn47XMsgu",
  "key32": "66MTLhZZ3Uv1xf7RXDtDHnAoSiX6A5MVrFdCsPXBqfXa1zC94Zg2yAjYdR4ktzz9zUXu8i3XpvLcZ55DW3EhVmh",
  "key33": "21rYvTriypvozhqppGT7GJPnCnasBGi45avjrCqNP41TRVnMY1XKDpQHLDRMUH2PjTQFknyZHQ3fDf5La2H6sDLR",
  "key34": "3LSPDj7Ha84RCp66coWndRCjSwyGpeA99BmcMsMPpN9FF7M7HTXkhyNEoSAFQ2b9vjb41PfwmVyCAWGLhunfHHJu",
  "key35": "5bzvcM4gqp2LmgbvGuRcS5X1bMDiMBYvZr4NJXBnmSiHGGf7XdM2ywGh8N6sSoLvDhzo7s3b24uSBi5ezXF9ZbAG",
  "key36": "KtHAMiANiR7o7BxGyMqbEb5oZAohrPQUzSAXikURrD74TpSc5Jb23w2zjAQBs5mT5FnmGidV73tzjD2FwLjToFW",
  "key37": "49Eg2KTvtM2dhuaeHDLVuvoRRuzUkVLnd5bG9PZox2y9f9VdgzVsKFK2v3fYAAL5Gfo199QLaqmKWi5cHLnr7RKh",
  "key38": "XXEhRDsww11KLq1bJ3Cdz4nHCGftjNb3rKjnhQsg1XLfhRMk63a8g4k4RBkg7nSZvxNpAjXze5fgnNF563nXfjH",
  "key39": "2TAYbFpqNq3uiu5JTa2tXqQevEjRmZbM9vmMLTaUepbwJtefKgfY5dguxUxZb2Lm2JvFo1Cc4q5iv41t6NyCBtcD",
  "key40": "2mWWWiToQRHA4XTQzwWM2vT5M2TKNfJwqtE2cvjfhJJFjJQ9RxjjwoXp5RJ134mmTxogV9LCmmTore1vuQcRCFP8"
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
