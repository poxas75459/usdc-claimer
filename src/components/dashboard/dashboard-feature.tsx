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
    "2ycA11qUKEhcz5Ls4JHAGrWjwMhTUGxbQfKkzcUMA7hyWCtL9p3EmvXE9vneTCP79n51LgbJR4DTFviED32QjGnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5khMATvh5tA8A9ngfHFUBznnETt4YJ9KsfpCzGVCPJyvDCHtf9JwqHUN6JtmwQXYAGCcF8pxcWzgLmS7ACbKcJup",
  "key1": "NR574NEWn8t6iRwBwDZxLgTYkDfmetitXD1P3NQY3ThgcgytDur8Sqdr8jck1QkLRENy8J7KF4vryA6H8ucZzZm",
  "key2": "2bEbj9cfrdd7T1EWmE1Vfxw2fia4adXTMMnh1mFWiTXmG9C4CAavDaZXvfbz5AK2XbGrtKgHdFEA23vPTKh6pweN",
  "key3": "4aYynkjEpX73Qw5LqkJrKusQ9GXGzUjVRD7YK92tZ7XhbxaCHne17Fnqrt3wKnKaGUjMSwinp8XeDkCSem2k6neW",
  "key4": "3UAQrZA97S8fqZ1xGtaC22p7vg4qx8vNuZAhXFxykWV7dXftAv3QccMT3EDUqmWdYFoCQvRPmpcExHGssFaN41e1",
  "key5": "3fSwVqiK9Qq3fS3Y3t8HN1zSfh8kVpNEN4rPQy2eCneux8ENpHebrNefXwey2RFosBvqvdSrpppKu5ffDacQ1974",
  "key6": "5gnvj5CH232No6qoTG78n5oUY4EWLVcv9UUUCvJJHttSHr2PtfTwf8RrTQE5S8VQJ5unSH5tiJi97qWgAokJ53ED",
  "key7": "5a3yiAyCFGJHdABUFgnpn57jvJuYVhCRitiH2fmfquyQP4VvDf8x2EUsK5zw3hAStogywdWhw9Qrzx6hBNGGutNT",
  "key8": "49Vvw5XAEVteFjSqyAEpxVRto2tGZJ6toUk3M6khZtzqYfodPYofodzqe2RcegyBj9faPdU2H8riVVaYiotd7423",
  "key9": "2dyYMHArYskuQrpCHnJp94jN7Q2ba9myCHm9njYrg3p5cArhSg9dcWGzBM2NCpMb3kGzU19w6qMjKYzpkBKFts96",
  "key10": "5ngsEkqXhs2XJPcEAPSnN4NYPiSh1cEQsKqhmphUrHu4QkfzjCH7Wqp1zuf6oRZ3suNgWaT5iaT65Zpdn8dgmaQR",
  "key11": "2Mjz5zaSJfQEUJCT5BHg5X3XoGrAVMH1Eep27tQGZgsefEsBXEcDcgeiYpRb6on8aLu2M9rSoVasppYvpYCG8SX4",
  "key12": "5GY8eEjceVNbvY36j6ERgiSkHHJJVUTrTQKcwVmfK7MtCUFcVSoChhgdaPxcGprJWcQo4Mb8HQWx9FxKi13SZ5EL",
  "key13": "2BZnJWFhTGQd2A2QRmJCaKA3aPTDHnYJijnM9eYdaqRvqE5xzUx6dwoh475rzkt5h9AkZEoNQQKhpLr1yAk2gzHx",
  "key14": "3B97eRDFmhgU5uwZQiXp52GNKW7BQhdSbVAZ3ZSFEZHkaotLdHmpwsA39iioh27wNzFQcHv6qKqLta8wsvuHhVKw",
  "key15": "2dqPVTV6nnuAz9qtJfXa7V1W3v9TC7iu96Q3XuJewQmw4TxjHM4eUaGARUPmbYK1Ck2tdiN5Xhp62iMk8b1dgAYb",
  "key16": "5o6aqh8pMJFFBvNLR5jiiD3B36wYX9jP1wT7b1VSSkrJw7mrWUwL8GqcM1GG2ffGdoNAjgqCCrHX7fcQy3DDZuv",
  "key17": "2NnyiNuHr3HyDHMSdb6WmnbhYMSWnKugE9vQ68kVgNZXNkHcDEa3Wyf5EiSsHBEhje6Z7v2PTtDet1Rqn1oRUuN8",
  "key18": "2aFaPPQxdHR8fDqjPhL9podES25viiz6KbV82qePaJuz6kJSmKW2kqKvD2yjDr5nT7Q8idxDwsFZCFzLFNzSbPWS",
  "key19": "4USbz4hTFhvCFmcS4hCjw7ybbzZ3su96WKFGTsY7422t2jwKWCYqfGZL9kftBb3DrEUdTx91XjRUE8QqdMUAUBAL",
  "key20": "2kMTqyWYBnBSFxwpWPHZnUURyKk6bjrCrLgx1mswviMgJtdGQTLsA3bSZfteSXAWSd9WznCXXqHPEgXmpFG5tJRQ",
  "key21": "4wNjHxYQTD6RWg65cP25Bke6NZuctoVJLH7E6AB6shuwkWaDFD6ji3n46EXHWymYt7W9mQiT57mo8sKYUcRho7nF",
  "key22": "3KSm7VpPfVV1CjcxjERyHQ2RjuqTeTDBKqURKiFo5FUGNDeBQ161wjjVyvYVJwCa3qdfi9rmYeKs8btKDxbAziTC",
  "key23": "4hmZfaGyqEKzoXq1ihkWe3wNYcTLwmqFvey39bXuFKFCXByWsC5BeMuaqpSD7ZbmbDWjidd9vfiukaMNxA1ztHqq",
  "key24": "ycwNG9Suxuaq5Hwutc1a5fSDwqAVLFYFYv6dRPN87qBiNzRFnonVf2pkfiUdRKJyrhwiQx6auLKKauqc2ZDBGuH",
  "key25": "3dGX4F1h95bB6LW2DzPSmnqp9zb72LzxCsmW8AKnoq6YDQKVh1zAAHxEEnZDmJMT3TnctkYh8wgLQKGfKCCxdLRt",
  "key26": "28PqMpw6jnNWsJGRgeDGdPF8hrLNLoH3BcjgcG3oHqCdxP2PJUr2mqg6oJMKEtfZC9Ma3nRDUCgLhp8uitVkq15h",
  "key27": "2NXxtUfjxniFueXoc4xFK6uVpQRMX6JHrphnbfGZ77GSutsmrfTSLRFF8g7FqwWNUUgKDApVgem3xh1RyFP8p1nd",
  "key28": "3eqQKe6N2yuNQEE72zeDBwsEt6cKaXfP7Zb9kNFrFCh1MFNybFHWMpsZZJVGfuLbhVXu7k82UBR7neCzYx6WDyxQ",
  "key29": "5498NQcqpK6MCD4chcqpbCE1jWXq3QBapZpRhikntAKfu8Dng4VQpjHxEkA8CgBpA5XXhaYugU627SCyMMeEGq4u",
  "key30": "4n6LjnEr3opxAvi2yWr9gdCuSvzhU12rqX6zNb5P9ocne4szof7dFAnFN2A8iYZZEZdKdq7ENyaKUfrNY1s8RsLr",
  "key31": "3xFCLC6Me2x4H3KgTYmD1nG5qDMrkck8mYKYNLmsia7TTQmjZtjdBur2YjCukB8QC9eDBjr77KFGFudZeVSet7Yc",
  "key32": "3QB98cB5Jdzs6gNMuhhqPh55xsMgZefjuKYY3JhcsVDopH7gGz9YYYT55XaTzHMggw7PMgzPdyV3a3Y5g5E16u9e",
  "key33": "J2fCx58YPexvofUb3D4YNBnAaDoZ32k4ssCbLE3C6FeML3orjL9txocrsSDJT53Hr8jTWBAGRaRdeLSMxUgKYKd",
  "key34": "5guQM26yuVU5zvoEzF8UFDWMyjsJzKU4xdteeU9absPZerftBUQmzd4yWU1FQHLYewu5B3pwWe8CwLK2uFos1gft",
  "key35": "4dv4zkta7K9WN6JF9fES1ZgBEtvP54gRXPLngwPMdkBhxZ5CPYFM3wF1nxegxArc1RzaQVp9Yzkiw1XzEbe5PHHa",
  "key36": "3BK523Q9V7wPNAhZHmq3GhSZ5SDBJfCr25n1rgHTjQ8cexfZQnNq8BMXjLSCmZ3wdi6rKpNNedB6DWPQuAt4jexj",
  "key37": "4kGmojwTazfNgrgCdRFKJrKpgnvNJTFBixxtBSFpVPG1afha5dBHDHuu9nsTYm37LDhkpdXF7wuGjkt9ULSeU6fj",
  "key38": "2wYpim7HypvL8E8wVcoypqh6HFCzomjEWK2chkS1S4Lcx6D1JtnMHFhqhNoo5VHMa43PmbuB5cEarkweXgqEQAKs",
  "key39": "3Q7hLKEFCMUvAQeQ44qyam8hi7tTX6gdEruvyhLJepbrMsrmqihXiCtQnG8upDMwwe8Ms2m9o4MdNPaofyMMmesa",
  "key40": "4v5TE9JfUYdhwtnaKDMYmAhqPvijsQj529twNJFyTbpz1b4ffA2zyMJMHowCGCpGZZs1WBGFVs3QjCh9ogT6mFmU",
  "key41": "3cRnfrDJDD4Sh8MXoGZCTEd3rzx1Xu8TcQkSb5oxL8Wq3yX6NEKKhn3RkHXpASGG4CXJdNvtAQ43tEe5zUUpx83x"
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
