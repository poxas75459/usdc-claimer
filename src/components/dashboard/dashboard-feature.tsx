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
    "4ErAvD5EmqYepLCK217Z2LvoinhWTTdP1vuCdpKWtoFgQTP7VhXqK2QtcmiHHERW5r2BRxXwgFKVb8xeHC6GwFyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hq2YLV7zfwiBrzXFqJgn8UT9DKV2b8NEPtdLNT5s8Di3CBM2M3Wei9pt8WXHoqiXeoFrvJBRseMpPTphrghVyRq",
  "key1": "XXC9jFu2C4XeyckBiGGeeANu5MxnPvq2t1oJVeEQqkkcRmAxAjt6MFRfL6RmLrdnB1w6TtAGF1oawJkXkrnQMYd",
  "key2": "4sLYVESdNTRfQUUHy1dBTF2DsLzMGsPg8pWDrDfRu7hDwrcYxZ8pTkkfwZGcnHgzQpMd6NF2eikz4Mr8jZ1atLd9",
  "key3": "2tYMkg3zgv6JSyZRFaYZKkkQk3dhb77P69JATAnauRsXkYQyYn1SL31XHPPLqbyvMDUPttQJ8ZXGXKWSGdyxcUgq",
  "key4": "2qGiQ6Tp7co46Tdajb2x786itAgN4gwkPQX6hgdDfS3gkF49EgiLUQdraPMmJ3XhTrovuyLmPEYUnBx5XiVTsg5Y",
  "key5": "5jG2T1h2zgwqxDCaeE7nnRMEVxAD6Jn9uuciycaXrH3VEEN9LhKxMjzXci5EETPZ8dkUaMCQyyk8HHaezKsjoEa1",
  "key6": "4KDHjJXgVbLMpezyfsF7afZme2USLJbUbEjhiMtmc7sEr76PZvZFwZqtqLUbKorS1jhJpCKa3UVjUjfc97JpTaTk",
  "key7": "h14tBHZse5WnXSc2cbsxe3nn9LA8xX9Z67aBamuKoHmkGKke56HNBPU2gUbYao1L6GWjxaxdzWNVWkaw7JGUCw9",
  "key8": "4oGn9RS6gQQDvELFL8xBZyhrYUG6zHWfsm3cH9EFkuamsufcnPeaz9LNBaHPW8QWvT3dAt4QazMszBhTwqwDHs8S",
  "key9": "2qajRrEjoDSFAVezDtHQsxzygPMUAXHFirA8TcyqsumVfLTvwDp5JLDU5SAPsudEBSosNMnm5hyUdArMW5ksRCdZ",
  "key10": "3HM4sD9nRWwTgRUbVNRLdcfPxHphMVa9g2xaRxbr2MXAhJGAPtQB4yxocrm5mWcyrCHPkoQHc1hMpPySsRSvxEzE",
  "key11": "2Se6NhT4MwmAnfgukr6iMJ8FWUCx12zkD6kVe1zk8RM8mgoYsXg3DnSBEXsoCx9fZZkvkQpw9YmVC2Tj6KvuGm7i",
  "key12": "3KtbePF82aeCHqo5288WzW8x6X1v4tbZQ4DdVF45eCECJUBQYuRHDFV3W4tzPRyi2DmYpYA5HcqfdbvKuMT4oLuR",
  "key13": "36L3tVZEVzjwDkdRrjafPFkD3ZpyNqf4o4qWyBeUGvvDtjMKTczmzQyLPRd2jW9eyQPKYQq4bCx41nL15E1M9LFL",
  "key14": "44UFYWLXTv2yBL1G156K8ZqjFNGfTL2S5nJRUsibNqsf3JkmhF7uuQ2ZxpCqZCCdfK3CQQ9PZWtJnqiz97CdGzey",
  "key15": "gwW4KU8zuaUpi1L76Hijp1HZEM4oMXBrG9hif4DcfizPwn5zi8KZ5vxngBNLZZMdL473xWK1GDn1voNsQ7VrL77",
  "key16": "2MoF6EwZ5z3BRyM82xfpgu3qHgtYiTTemFoEmdoR7SkygN2kiEaeNhNUrCJTPX76eti6LyBy8qG6tMHfsQgbaju9",
  "key17": "2k5qqGRFasBrszgbqX2jXL87kpARGs8Do3fkXppbQGw7WZY7WKmpug7UwEJgeYynkqfnr1o18eg7t2fpbUUGH6d6",
  "key18": "3aaP53z2G7ALNdiM3MHxwdWBXB5YZxx78xVZK4R6VR6PtqcXDTnMy5W2B422zLnqmzQQ8kWCj2a5gSyQqZyM2mXG",
  "key19": "4rTaQ8729HA1FJC2MadKihCPVKDMRxnAcDpCuKhALajBEiGKVd9WGgJF2SseSDn1bfwiG7ktWjyamcEqyfs9fmx2",
  "key20": "2zQ3jb8pfKVNoHnkYjVjGoDtrgdbJTZMnFoPSJ6RmYsgWhFeiemi5TxywbJmMn7yTyfcPoMkyRoUM6eAUvnC5gGf",
  "key21": "fv7gHQM2j8FiuUmWLT9EDxKhC5EGEn9Yx9zKTxjPQRn4kLYZfkmcGpM4goZHQLT7koARWjz1wAWE9GcTk11jwJe",
  "key22": "5ise81VNwkY8XcUnY8JTLvRk9c52QDbRSDm2wNQGJSsPcW3tWmWbRbZBcrg6PazsocYJgdCAiF489bEAUVetKtgr",
  "key23": "4FzLbRcRkadUbRsBmeGcZga96k9Erdia1e2SJw3mDiGFhm5Z3zXHHkrqQtsqQzVpaMg6KVz7haRZbsLiLPbE5JYy",
  "key24": "4FeXeXHjHYrdEVS8QVVVtpQZpmajrrDxLycwfBvoUuU7UhxBZsn1jktMEJQDzb3E4SY7mkF3eob35qGj8HdXHAn9",
  "key25": "YkmYzNSJqf9xz6myQD9TqBfNtnxssS8ib8qbNS1iLpNVtbuvQzVJZQ8fuxDYYP1gRGWPtm4AJLHNkLwNgEcLHgg",
  "key26": "2BkixgaJM4tFqz5o4qUoR5pkTb7cvcf8PAt7mHFLje6bZ5f81NbcxzTQ3SuU86x1LAcZDn8u8EWYtPKFBjnNB1ZP",
  "key27": "1uJtteWnfM6zY8AMLFUU5mbZNjkrsDbAosyDisLt1Qazxt5YDfnG5WSwcwP118NHGM2sedUWN9ca85G4UmCZVG4",
  "key28": "55aDHNUGJbZKTHBp7K7HjZDfRsj2mgfTyK7V9pRJ7fCPCU5M6fNRN54H2pewHBGEvQaxV32oZbH7cKrmQkLiRY4o",
  "key29": "4WFg5uGGX1gUWp3KSr9AmvxoAPjghN9xHM5t7aURRcknL5yLpK7NXcuyAMjHVhr16WUAotVAZDVNxCL1h15CttGw",
  "key30": "4ojf4jvkx6fHSdGzvukoHP96wFAvqrtktermGp1cvRHeBSPFRQ2fkkKcFe4kS8cut9FG9UCbyVgt46myqfcnBYcz",
  "key31": "4cdoiqfqE75WyFUHPXYQ4DrC8ThkoMD9CxU32GmAb8QkDiLTv7E7Lb6W6MmYSEUYWi4npZtqhg7nX8Y58Nn3vAHU",
  "key32": "5z1TxV3QwwAC7GRBftQsotNBvYpbrHqQfcBxzLL4BBuLuh9knjQN9nW6AYG3kAui9iYNzVKK2bbRTDB4XKx6vPaJ",
  "key33": "3kX6dcNCt1hN1H5jZ6ZWAqnsWuR2gKgRwwEt9EZQhZvsjN81zVLNfUPR6hx4AoXvFH6G8kkGL7iZgpnA1bzweUhz",
  "key34": "2TKsHZjtaJwk5g49J11mS4zqrhBzTFGnL3c8MPDESTd8ERzYd2fifSoCBniRuQXzvuiQeYwBAUPC3BsBoPaJxhiP",
  "key35": "2GkTBcusVCeVp9PA575Yutui93jfTHfhEbvJxwrL4PnUvYM7LWGEyM7mxX2me2Rg8PxihzA1cHTmkTU1h6XC4A6d",
  "key36": "HWF1KEuFyhsA7qm6NpAMdvumfYpT8rYb6oA7Y1wZjBdncsNTHWGc4yUVYTvN4H9KN16tfyhKUvBejjK19aBdAyU"
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
