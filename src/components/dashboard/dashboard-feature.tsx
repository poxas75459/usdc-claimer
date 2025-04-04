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
    "3jeBjhpWgwbBWg6fWykJLR4YFbXjeEwJSAr8eU7ZjgJfGyTNkYvPbjfjcuRh6d4gU8fxc8x1jL49FTG23drcLL3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gH2ST7SMtWH3TqWTuC2bTfBuoUef9nVytxhrhrtqHNVNT1AHA9Xx6VgmXMGihRPJtzfyLYpwZbqnaKMvrRiCyn2",
  "key1": "5usMdUoza2mAttbNwe4FsdYgHEigY57odvyam1A7mCFbNTMJRLJ797UJY9cRpz97iddhAhxqeQf3fgjFQuHEuLHn",
  "key2": "26hJH51bP8R2wBjGczBk78sys5evp1WZRQetCXN77W4TyY5pdCrsuo5CRun5EKqeDokE8yuK3kR1rFmCKd7gRD3u",
  "key3": "3Jc5T3nVsNpCP4wrRocWrSDrA3vKnRMAJabgMuKmrEhTew3V1KaWcek9uHojZe9LCpnW8GdVS1BP7BoeVrX8N1gQ",
  "key4": "2iCfuoX5VkmtU7m86kC7xrmVyBzeyAA4qmHVpP7ZHZYDEqXcGZrnp4uHVSZ83QzTihshpTfwQwgWgWebCtDGS2K9",
  "key5": "25itbWrbY2gNGQQEjeCyS2kd7X1ByNFa3ZXBHq5eaTdV4rrkiG5SWPvQQgvjTRdY6XtiAyf81GHKo6V5mhMXrTW8",
  "key6": "4K7ombpSZjY9ZX4inSL2wv6cHt9Lg1woEebCb7FC7mEZonkxaCGa6BLcuMvffy2mzfKnLowcxHDmzkiN9EU1tqXe",
  "key7": "222g4jhtC4EhdJsmMZEiTwgFMH4gmTVH5UmTkWunPw4tdsCjXURoMrTejS2yajdAGni7ztc6SDXjyFAMHEoQdo7w",
  "key8": "381cQMzHnB6wiKa7VQV7C6DSBiFgA4B2SKrRDLoqu2bJSbHFk2kxwkU3rX6ko7Q7JUokgVBsXHRHKcwEgR1P1Uda",
  "key9": "YSzzhLwNqZCgP8tpwZZpuybwuNirCv1gp8wo52MQXX12mgx2tHrpBk73fWQgrydLARkMPyDYo78auxMMa1RL7Fb",
  "key10": "4iMyQrFDDSkhd6MiudCzLtQKrZmNEvW32vavvfG2VHBSQEjKYVrNn9yi5UxZmf7Q7y99LmcuKmXmntnh3WyPhcWY",
  "key11": "2ukDCyjZBoEbcMsPt3z7Jz2UU6i5u11nppJevc6F4xgwVzsjtfm69eN7y8wxetxGCnaPf98SWjTD6U7m2ETQM1ve",
  "key12": "5crqaiTBzkipeKSMAEM1dXVEw3kasxdfHBfKpF7DVM9YNdHGy7ETX8cVXqwr6QCsCFBbtpDqZb7urP8WdB8BEkWQ",
  "key13": "FPgDKx1iEDxVTjggMP18azrqEeSy98MnUXM1n76vz8XQmeGW1JjY9aoxoYkqmEuTS7ZoGShtujcdopgTsZy1Y63",
  "key14": "62WPv8RwYoGCzoZ5rX7dJXZuUwjLgLrc6jaGMDAcWpZvfdUo5KU9RLT5qRW6qcAAGC2j4y5AJJeH8cERin48xdzC",
  "key15": "2M59i44968ZZVRiVBMWSzpTLmXSz92hUEiCPxfDXYosHxxD1FqeWr99c7P6rekHuFw7BcMi2s4zG4UmPeisya8rD",
  "key16": "3bR2m2q8KkipBdAKy8RrrNpabn6uvd34tMXfjTioQncMBPNbKkbmsGNFGRBrMdKAGTEBxrEoi9NHMVPypkN27GW5",
  "key17": "4jKdyURb5fFcMSHaPwkGvtLh8yVTLYcAgrnMZXt2VY63J1BwAWtKYGgx5D2sL69VLAHiTHJLmNjqghztN85ZcHuz",
  "key18": "5LK4urQvrhsuQYSqp1CMbjpPk3z82SkVb2KjcjVxe63Za19e3ACXkCtWW6xC8WEkjG5kbEidUhTuffdFdjaYg7DV",
  "key19": "2d5rNdCupP2R2ebxMEJnE3LrkmFK6JEuDQDkFkZkKrxGvBnU1yDS3TXaQFTCWW2Ggqiq9KHyUKMKe4U41NvAacqv",
  "key20": "2wNF618GRMbtezcpjzC3DsWdDWLYK6M93qBhRiPFZhKafwRaHY84MXDb2wUYba1mRQSnrX28gjCVfQJL6BaN6yTg",
  "key21": "5rxaoEppvpzxwkbf8bNiR2B5WNjbEpgyu1WrhJpG3WfNT2gFMDJm3JxCJL5etB2cv6BzWcDvUAQBPixwodYYqX7K",
  "key22": "5UidAU8rNSHmcC85KXEjdLb1odVK2j3KvRojMb4WqkWtQRqnbu82ASLHAcu1av5Uq3xmNc3XZYWaVV7mNcuk87F4",
  "key23": "3RZB2zXLAhM5RuWqEESyE32bMHsA4JbwjwehLRHEneUDpLQgpngCh3Dw5iZBxGtHoytfCg8dmKztETsqiutAw6jM",
  "key24": "yCmCaW13qDjsUdQ3GiYCGWtDSt2xnwuv6c683r2BAg9o6nrHY4wBpK5jvXYEGUDov3kCe5GUBXcb58t1yVXQbWX",
  "key25": "2Qh9Pz2yq6GV9k6W2rzZPYbL4pLdV676wgxhoxJDzEfbUhL9oKvqkdC72fAvKsgF5EK7QiWekR6juzaw3QSmFnc6",
  "key26": "3VN1FhTC9ntcGhaGzRcjiJh3iTamU7qGXeyfkDLGnkkcsQU2SaNX3yDJ9NJhKrLKPcgJehaY34PGPQk8HNruhPhw",
  "key27": "31ddM3PgkdKzjPsaUdM9onEF1DaJaRHd7t8G8RKo45pXdt71rsT29JrnMWwXAJTvNJwFSBhMMyLu5bXGorEPnVJN",
  "key28": "BdGJ7eDjUAH6HBRGzE5FB5x9CZbcfcKnBmwjMN1YUsGSg5GgHDTDxciaF3H6b1osuNuSEy7XJvAG38Hk5G3Bb3p",
  "key29": "5VHo8DuxkXXz4vLJxrRH1hpjsBBcG7iAhxA2qtx5mjLS4JdtK5BFHAiiKFgA2eWPcV3yH4Jkt2uBLBmUCPRWPb1H",
  "key30": "2m5UxPbBicq19WeW4RHxD5mAD5qJLhmocf8S2qhFKZRyMSbw7pk2t2vRyodYFfYUqDbKZJBzsBw5xPWTxdgsZ5Sy",
  "key31": "35ZMwZv9w2a6kUGeXzMNgR8XrRAicjF9QB8jMDQRt6qY66wf7tw7fHfzdeNyp6pyM8rATNLU17dLFYALY4D6fjdV",
  "key32": "67cxVCqCWcM7rpnamrYMf32wxRdheMpZAUbKxzRgKo8KEidK4jFfkhz1NBVBbriVyFPKfqqLfswwqKwkevnSL58m",
  "key33": "2pSeXsgmj4bTW2WpZtwpiv8z6zUzcUC1bVAJHvBpqCY5FsUnQtAtutSNbWNbCTZ8nKrGcHHdAdy2aWuTu3z4kyjk",
  "key34": "3D2t8skMZJ3tPBfSeEh1ie1M8b4oA5Q9UEyKVukMW5bmaF9WpeV4ZqwYu7jVEhsjHDy4UYenzfCphYbi8v6ThGGz",
  "key35": "3AebpP5GsoQcKLvLTdYDkDqa8H5favH3yn2ZfvgrX7FRnA7GQsj7YxrerdRtdutUuJUS3Aox2ofdEevWcdEXX6z2",
  "key36": "58oPjS3Th5KHrcK49a6gVs5musJ7Bgi9fogc799fN1FSmFArCTuPmS5K23tSGK1Ba68fMQNxbhv2aCYK8w7yf2uD",
  "key37": "3xnu5qoP7mS7VpoaeuFbQTLgvC447rHkZsM3xLh8jxbcusTkcFvWuww2fEiSnXzWvkwFYaTmKEphnxe9HaAZGu66",
  "key38": "4avSMArCEqjRtrMf7Q6KVSbP4GaoMybvASbdC41ZnRBLr3Fx9Us1pbJtWSzqYK3YvMbap5rB6E1NqpbwR2PTA4AY"
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
