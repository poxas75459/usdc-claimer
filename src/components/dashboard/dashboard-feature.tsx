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
    "4fjYMgNWEEYJDtscNiTV6PYMWYQAJVdhh4TQKrWGkz62wA6uXgPPNpB8TSAbTP7GcBYLKJWrk5fAuQBte1AePDay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61XzWF9FEt98h67yp9CpeMcNN31JXVRkPGQ9caH23NkafyajXqN9y9UmqHdrEwKYMAorY56bpNaHgg6V8hh8RtyJ",
  "key1": "42YJAMMz4ccQxQGkQeHUZ4K2z9ApP4JZKZFDGr2GTkdkRkvZbZjuweCNNLJ3hRBwC6ApUnd48yDaURMPZtDgK6dF",
  "key2": "i97q75VR4AK4YCSA7A1LNeA1bonxNJanG5WdQyCdMCsuCbJ28MmeqWJZTSrhkvD8TkqBARTfbHpfNtCauuwrG31",
  "key3": "2Ze1KEVoXPtc4J29k4HweHVTkdvc7YgaJDnxBBKxHD69UUjKXoUSLR7TCXJwWL21X3V3RBb8hekXBbLbMt12CGM6",
  "key4": "8H4PTrf1JhuKdXeqFSwsxXPA9CGMZuuJ99ZA8HHSnvKm2kgZVBe2r2jHuUc76rhCJKUfXoe8hrViCscWuTVrhGq",
  "key5": "3KtfsncEXXQbUajCTvQ6XgUEmPXLx21GkvPXynjjbo6mitzXmPERKUpLGEVLWW4YP5bWCXMfsHdUpSQKmkV8yuR",
  "key6": "qjCJwMEf9CUnF8kLz251cW24RdGckCenuSjSQWrnKaMpYMxBydA2fpubqgFzKtAXVot2YwbEaNJxucY7G8MFkXK",
  "key7": "3AogmcXzruwHCjFFs73kkiPJviJdCPTBKt3CQKUCFFBNktRvNdYGiGhmA19ZvKP4qmG34zZp8wLCHcpBt5LCc2Lk",
  "key8": "44M7KPd5hr4543H2sDdrpyoCQNNb3khx7wgDNf7yRPwqDDZWgK1vXeEumyQ98KLJuzNq4bj3MdMTP21VJtanzAAQ",
  "key9": "3hBR5Qd6rLTFhWC6roQofKXCNQ242iTG7s4sShhouCwsTssj23FPo4oa2zDgqirtkMKHWUYdVwLwiWWKHL8XCpzs",
  "key10": "H11KPr6NdzXgS8CyKKmT2npZUkSGVEVgrSfx4NUQxoxmRF3b6E15TsVRn2EuB1nc41nJCQWWfeEG7cYj8Yc1AFK",
  "key11": "HEWXNsS5SjHiXc87Kr8QQJDnP4ZtBc3VxNPT3nitaVoW5nHo41D77Bc5avh3Ztb63WHErHgk5PHtJ1kjyUZzKfZ",
  "key12": "3i8TTHU1GSPgiHtirHzMu5pn5cDuXouZhBig5kg82xixwrYTKjJzazXgq2m6HbiGXY5wTJHPWcn7mhCmS2rfbECu",
  "key13": "ArmbyrHNxAcp8e8SCSt4PhhEQVumFcu2h3A7MvSSPiTQbck9Sf32QxudpXSNXZgZcaw47L5u9mFS1RGE7TwPK7K",
  "key14": "45Dxv56upPMTYyqxcvxrK8tHnMJHMi4aS5mRPKpBYyxhEqe1SuPToWoLt1i2SgxDBJpsTLwqtJP6sXbeJjDPFs3w",
  "key15": "XQMje5UwRTmTNwVY7F8aMg4UWVJKY84yzhruApCSzafz2V5KrCvofywSnvSJjMSuYdaoS42xTy2C6K348X6dfLu",
  "key16": "5QdDCELTvfLpP8QNYhJmBD8HkG2Nvq69mXHuMnX478q2tXFe6LAkvf1pdGzifMMirhdGtCzftCSWjnAqFTrwrJ6k",
  "key17": "zj5EvRyoUSTASom83fppda1piMnfcDmCzEqqm9YbdNw31ebFHfYHgfBQqTNFRN6yjzmCk7QaZghtoNUvVJoPoZ3",
  "key18": "cD9VLzFHcNsJvLA66FVZ46kjHzYvnm9zgd4bjjNRSjpoja53BtfjhJocNvk5SLeAbpXS7ctNth8KYTtrkLVHpQx",
  "key19": "5LfZKWmbtJcKgaiCZXvbX7RxyJ33XigEyCNPMWzKZDvGdc7b4cWWipeB2mSmM277XnSkYThbn1ST44urBhUx9Unt",
  "key20": "5sWXwv8JRBJSR4YiC7DdiCZJVcWMHgJ6GVQQ8KWHD4GGA68p9hWDatsvosXUqXggRFJKym1bKYTzYmsfBVu1BgbL",
  "key21": "avqW2fhGnocD3e2bseUiKX5ahzkku8zaXjd1gvKuRxjt3kNqCNdf3JcHDVr5bosEqWy6ayNUb8xxvu3PJWqG9Ub",
  "key22": "5gePHWbedJxLxS3kXkgbc1orxJkEpskcY2yg5qVASpAaeUpVvSEUSPT8yNiJvSPmwvS2yz2Ajnf5ktgMUbbZUncN",
  "key23": "5JuaCdGfgXhGuhXrvBm1DKVVw5bnnQka59wdCnHrP1gaDrmom6VgmkeN6rTmxDJ7euVWop23JzvppaJgcGrT6LqF",
  "key24": "4UwFCzVjrQ9PBXYVTTv6G8zBVaryfhx6tE5Wp59CP1jnTkxh2nmEjnf1cc1Do3RhuXxtQHCbqe5yMGjXNuZn1XxD",
  "key25": "4GpscJJfFN3mPSiVCD2Uex74Qd8NKPkYBTCesrjbDZ5qkwM43vMa8V7j5V8EApVMeggq5cM2uM9vkL4ikBqPkKoM",
  "key26": "5TyLV3yC6LSdCpv3nTyA58rvdLv6eLBUgCLhV4XMepSHRPxTQWMqA31SWNiXBqWfJN1bEqGQ13FEnq9TfeKwbzSE",
  "key27": "5bt35KXE3JN2Qjx5wVM1heSokcyCury7MXPMe1CTKcAtwxYJpbhPwucVuVUc7CfordWYPJm9TeHWprdXZB68j4V6",
  "key28": "5Wo9dCiFEN4CKTctz4TTXNCbfXGokZ92Efsyne3XknbaFu7V5CKsqH7yhCGqAEA2YCoEHtUwkHAHMGY7raTBugwv",
  "key29": "T7B1KRM9jTkANLtTo2n7To6UQHthFPBvd7iyVGY1VnXsP4sdKdu7MnvmGk3qxD9GRpKeXxomiyBxxYvDjPRwvqN",
  "key30": "3WuxLG32cnBhdeT6GmD6Ciuxz2SuKDLQ3gzN91yFGptU3UswHvcTm6h5VzW9h3845sNp2ETowHxyF1woJgtTybHZ",
  "key31": "21rafrfrF8z3XfTjZXgKExzkqtUJ6JHnBVGCSht7s6dsnQF67C5SvEaEHVRVkzK4J3zQQ8Zgs6Uz1VQh9LFiM8r4",
  "key32": "eh4nc8oB3oeBVBTvsgRnHfTctYkuYmvZ5dJctmfa7JWWyP9ev97uiFp4sy8CpM9NesmBb8fHi7jMzFRQQpe2aFD",
  "key33": "5mkCojcUdxdC6Wi6UfEgiVxXmDrBW5Dc1fTRrYYXpb8BM9NgdEiyTuHgWZnm54V2aXPaZycbkriqnekkjHAuT97e",
  "key34": "347pZkysaN2fn8P8rW71LN1oow2JY2LoUEEToWgxqVZzG9joSivUPFabLWxanLF2ZvEg758Hp3rrtmamWVNZj6sv",
  "key35": "2GvbpbWV7vf3KeVCiRNrHYgk89XNnhTi2n8UndxdoWCiLyM7C4ta3hQ2zAWeC7qzNBedvhL1VE9sZEMkrtHWJn6g",
  "key36": "5j3KvpEpnNYk7n9cw9TPq1bEe6d2v2NsvFS8eNMyezvbezQJoX9zZ7yGt2fLLK6edopiq5YV3HfSauRpR6YZuZy4",
  "key37": "ngcuMXMccK3qyKPFNquo2yUgW7UpFQtr7XML7KJ2RSBwcgfH1d5ULyj2WkRVgyWxegeUwe8JZW64CE1w8WdSd1T",
  "key38": "26TaywHCaVpoJqFnKMvhoMad6GzDCow8MWEkJakkVYXYSF51KnUudHQgiqcMgkFAjmymJrCyTZP6aAdSutcWPE1i",
  "key39": "6117jB4bUq8mw5xtoNbJU62wmcGArcJnFV3QwtiguotVBf6Q5v7byP6Fenm1wyQdxeGdLT9jnDLNdUi8VDinCZsX",
  "key40": "4KfZeSi1L8woonYEeWEFYW9v2pTU8fxhvZLVEqqKy9FCSZjwPHpKwE7GTL8auhy43nkudKWpQ6cLCTK5txv1aLKU",
  "key41": "2tvNC8reKZm47nXp8Yiiav7iM1t6z4hmpRqghDjE83TNHeLSboGaq3noWnTCcNBV8imhUSRvtVVfHX2V1Dnk8W2n",
  "key42": "45ZXSBTuwCt2HXNjGGaXXj5SYzbtrEK7bPNpbKUnikbyigr8RKmsyU5DfA6fTrvR75GuKwKfoXPR9mHi2AQsEa6G",
  "key43": "2AwShNmdqRtbqHiMmUigwbEYAvTP15NVxbv1hqNNt5rFv7S17P7kkYT8qxdYietLdrqVuKpeivzeNGHKpPPBqsRT",
  "key44": "5kESzvFGkTCbRoA3ZKvqfoXQ6rSCdCyqCD29prayeQvSb1m9eNSw78KmB4WLZbrK1RhND5VxyPzUurLrRNpt49uo",
  "key45": "3c5GYdjXM7vn5GYJgS6SmJgNSoTqzWasuWqsz5xtxRsRAoEnn348EF3T7cXcAmex56F5DALzK7m4caPCqx8qiP7X",
  "key46": "3HPeUY9EKDtxoqv9ELYxqNwUrb9jPLmkB7zXYb2mYPMBYFbenvN2yVp5kuR88ad73VLcEk9v3BMYdxFuwfkQtgfM"
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
