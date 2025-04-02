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
    "4jVPBPTis3FAVYaLZDkec5wgdXTh5utUHgjrS7u7NZNNmsSYJmd9tSctQHjocB25MqB3FoEjumqGm4qFyThQXdir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VWFLWWsRfmtp1dwBGt68W3Snxh3Ys2WKiBxmd1QpddbTu92WcAkiWr9bqVG8rjpixEt9VEM63MtxTEaauVzwoWD",
  "key1": "5j2iKktshBoVmD6qQ9cHopAbeV1kVU38Z8C91so1Uw3bjN6gnyUQCgi7xuJvT9zXEWPLgB7Xn5RgptBUy49DVsZZ",
  "key2": "5nfjG2u93g1ezbrfS6SMGwMCUC6qUcrKqqd5imAJcEtrLDtcfznfLk1KtvKfhSmbsQ5iP2yRrthMmS8Cz23bkFi2",
  "key3": "5h6WP8tA3QRCwyk9S4uhpuiEMHpk4ccUqgZffTEwy8oaSPkFbhpmH3T1uk9VdYqFFvRkj34cmFLv2xyDk8673YQj",
  "key4": "5TwjVzckZrrzXetBeMTYCMV55AYgdL6YHNc88WW89HesWfkYkydyt8CubjEhJGEqgcKsNMuv51m8LtZtZPko9Kcr",
  "key5": "2xeG5aQ1pBzP9DgTP1aJHXdtDQUm4V49ycPXFP7FdCEC2LJ3gS4VW4NJ9mcbma3dV9o3tr5WK5Dwy9vbkyDW4wo",
  "key6": "vAgiehFp3HXSTsKEVvC9BvmAQ8HsoTp433E8QqBJDU1DtCWcSQcxbbqoQ9qheAbTiRCY9kvoAT9gjaKf481qmDQ",
  "key7": "H17Toz15xd49NaKB5iBTUwWZBQNpKZ9a4W31ipEsw5YrJUKgwDcqJ9DcQrzUYfr5gRAGWhGYbTn9Pe9pywhEYsX",
  "key8": "2BgZfxRG74H67YeGxRJ6hn5LJfGKmxosuxZKCySqCXAHMGnu1CKjLDzkD2B2kFoPBKNrpSv2B5xqZWiJVwvm9ngB",
  "key9": "3Kqth6ZVe3ipy5F5ggDc4PpXHvZM6obdnrd8yCxjmCUrKxYw64Xukts2Emy7WGtaniY9G4MgzKi2juXsr97wos1Y",
  "key10": "63wpTVcM2AsRXDMx2GBRDZXPb9fBjU2qWspgNYkiwLEx46G81USvh4XELAK4Gby4LCnSEhs84U5WjCkK6Wj8CsRc",
  "key11": "2Mr78DZHyEAHSHHn1tkb58nZujCxSJQcARcQk3eebVvGGUU6Z8LhMj8ZF8D8nHUZs3UNFxqMxeFUrB86SjN8U82",
  "key12": "2UidDBhpuZLgMMwtod55q41TVk8aMGit2DMczgxbNSJjpk21fMRxjhyCpCbDcVsKYXy3MuH3QH7sQRjjWKZRbo9",
  "key13": "2gtRtBfHJVVwuw5c2d6aBejXXHtMrJyHYKoVPnAv2yJi6qkxEgqqj87rFDPmDjJu3voEFRsYW1QELorRBBN8otY5",
  "key14": "2XNPS2GvPQGVR9HLxWdJCf9FHG1uhSiaGYy7vMytJvg32MkZMyrLGMrf8UMKY7sViHFBHnK7CCbaStdaiTaEAoWM",
  "key15": "3S2HSsASDgyUdrMseUCBYFmsFHieuRi5uZMwxPLZQ4vAAnEJk9m8PCdSB6hJjayaT9cyowwG1GwqFNbr9eA9k4nE",
  "key16": "3ofYGFiLyMYZXpUbbxhLJpgZNHFveGbmgCg8E86o6AGs6Dhv8BQAKTERkXiBeuFE4kNGAWcGeWu4cJfnwh4QchmE",
  "key17": "4W25uGUfEWe7XCqfmhc98RmB7ibWZEkMGqtmyuH9yM5QYRqZq7obVc5Y7n1aBZuoGvA1UpUDceJnwu4R7J46q8hj",
  "key18": "2JzhoazLmfp9do7jLp5aPFhfCstPWMJterZ7WZL4dVwZo7YGuBxesg3HYDh6xG8h1T6MQ74Krr5mx6Ru86VpgQxG",
  "key19": "EiSJEEJitFkpExRsbXsMDFUAXhVoT8mZ9ytxHXfhc6HwYrwq7H5MxGaTYiw3BDhVrk8wwrSg5n4KEC1oupU2NXf",
  "key20": "ZveJEzLZrGhvUp7xKnFM3FQYxhXwUBY3DLZKdQJtCxkGVURWDrQroRg6etLU1kkEgAXbdZh8MUzjhMGfiZpS6kY",
  "key21": "56dDuE5WdwmSqsFhN7thHKqSbpB2FuxNoMZZ1HKHNsnXb89osemXdjKzZ4iDLwwvLhQ622EteWhLzYjrXLxuyhB9",
  "key22": "Bn7U5nxWYnQ1HA1ZWvCzXDyX5RTDWHGrmZMRjG3fcyYkvxUs9HegSLWuxhSnmtvsDVRPfcXKTXG9YbBPWSAsmey",
  "key23": "SaegKWkTFM9TrXjh6EiK1XYMSRjfdJrajp7XnBetHSSUDVRBWiabmWHZJZ2BQrTeNYNPMFsD3SxSo2J7HN9YJvH",
  "key24": "5ZLfD7MdHEJto4r8jpxBxtUFAJyuVXqMDqZr2crt47kPMrNm3SKp2c8V5d5ci4ayEEf569qjyUuCWWEKVpFz5YK5",
  "key25": "dALczWaz93U9EhUtM7ovVJMpxCrCj1HHUCriEM3z2c2xX8iwiTHyYvCE8VJNcPPGHUhZVf8N7U2vajbGwzUPkCo",
  "key26": "a5KccjXtw8kGqAyhRqv6H5cnZB2Tq8ieWoLdfKTWhaq6HpbUz4ePJCNXc8QQYsZvba7L2Rn9foU8rxjUbrU6Tfd",
  "key27": "5vqxch6PAwY18gVajcmwe6S1ogVxsbwTg234tn1WH3HsD5Par5yBexq99DKg9UKYcipyqnMumPyJxTko9kEM6o1o",
  "key28": "3JSkS7nqQk6jXN5Z8q9hS7zFYBJ5iySRTFULnsuE3kDKYjFzDAK3P5antATZeBsJfrNjNPkdE5UjgWmYP2orbhP5",
  "key29": "61YDfpV3UDasxjPqP8H7KuS4Ad4n5uLW6X8q8Gy5DPDprXy8igNPKUNpTNu91DuRN9qXJdgcUtTQmqvQiDAhrzjW",
  "key30": "3CqLg46MwBaVM7RrqHH7Re5a1vaqvAbGQtKKEbL5KRZzAZgBfxCms72ZXVZ1DipxbA6WbUBXMgHCNd6N8D8hQnjy",
  "key31": "5DFrKp3xtcVEvjnP2D37ihEnahzqUxc9Fu5xrrn2aNzsCZhYufKcGSVv2pfZnVDSArTbccjJ5hJLu66o5zRKm7W5",
  "key32": "3XKG1C5ztZWXUbj1M9mV2ozxAzzyHXnfs6CdnDJKS15iTmk8Ud4C6pvDsqRjnS18wKDreuk1HMWw6WhJrf6g9b4d",
  "key33": "3zDUjLcDR6Le8uzyHL9kTRrH4kpGDc3GgkFSCHtKjz245dRzHGuT3ViDYyuW8P6KE9Se6iJ9gUAxHGTgiKweTnX8",
  "key34": "5ew7TYggLNAmZxEk9shVpbced9Vhr9VUupSA5MtLrMCXbiFdokJNsQxUJLngGgTZW4jhD2328xgjEAy48UNqwjmp",
  "key35": "5j7fdxSEoWgyTAFkE5Dby4GQzHkDn1KjyiYPaZ5Ajt9mUaMiPBi5fPnPJbAFFzcWbEdP49UKFgtVoNw7wQKsX4Bm",
  "key36": "4aKdcL5VMUsoAF6pisRno7GHUtMbdgJvnxAfTpGkiBC7ERgN8mKWmW5ojFyiLCZ6cdtqCAhY6inJt4u3fuB7y53a",
  "key37": "247e7BHMDXcnBQc5ZucgeLd3Du5hLHwzCBPqdmBdwKhFjY9DnmHCeJi77K5AZrh97h4ez7eQ1RJDut2qdUGnpD2i",
  "key38": "4nkG4suptrbV3Z36gHWqh3oCwJ12YFrWrNKLyFst2i3XcM9zrFuGQBfuZyHPVAdjdMtNUxav3DjoQie5b3FUKf6h",
  "key39": "624RfLboy7rvWngfSBGYBmgHTv17w81kzy1CWNXftTCjxfrf2Y1CFCnaxx7G4heDS5WR8Zu2kCHfBY3SbZCxCFTy"
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
