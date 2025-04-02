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
    "3ZY6Bjv6TdVbJSjMjxYoDkGLt9fhF2aHoc7kBXx719rkTEnWtYkAqNSLb8A21hzLggwCfqiCr64n99L5FbNj5R4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AJK69txEzA2govT9atkPuK4cEe9Ysin7JDcwUzJTbhnZo2F5tXEjFQ6dTW2YoBWLUXnq6YtPtHDTp29oC1W1aRL",
  "key1": "4bCaabFQUWbVq3gQGYTxQCSfEUXKxFXYRNNEjRFpmsevBP5MqUAWBoYe1Rdqz9EMp3XZXTwkUgpNKVpB9hJx5NV",
  "key2": "i4iDzXmraLiUAJMtH4QCJutuAw3Puj839tnCikZ4EUPHBFUWGE3qAoY3ZzaPyxQFTgXcYWteEUEB2ch61dUUttF",
  "key3": "2rBGaaCA2D7NCSqxb7ykhWutenw7bSpwVuqtEg7NaQ92ax4aFvhkQcr5Fs2gDF2bqCH8TVswN3abZJ5TNa3LJse8",
  "key4": "66qrqJAQz1MHKKW7ahVsM6sGW9M8B8Z6mwUuQwAFS8dSxNcrSKZPZZ6ywEZNfL2Xr5UsniCbNvCbD8JJebwaAvVw",
  "key5": "5hzm6JGQoqDeTXXK7S64fMRB5LpfmSH797UwwVG9R1KPfxNxF2Kx3NpHzzMpAZ3cWfSUmvVn38meSz5tUE3mJ8W9",
  "key6": "iGGYnNTLjX89FY32ZAsj86o8GFHKCWCUNB9kKHpTttvHMJPfvvSESvBcnVCECDqEdctDxE62evmxooM7bCCKGsW",
  "key7": "pWJWYERfZJn8zjjXoD3jXJngwEQnd9iLeV3fKJSaix3qn3kcXBvYmttmQrcuVHXLeGsqXx7FXvd1mpNeKjkAvHK",
  "key8": "3ZKnomM6B91iuVr3WLvpNeW1RTCFKsNM5WeBUtbX9KyCBoMH3ZNouPFcmsJ2gBc2WenbjjdpBwRaR4wJ7L4kHcGc",
  "key9": "2Ad6BH8ETmVHK6D7g31YBb1nLAwuRPYabn6Lgk4v63bYJoR3LrWByinLnNyoHw1MCwS3tCyteNobk7hmMxx7EjkV",
  "key10": "2Je481a7os6HrxvN68uG4csXmpamfrbrxr4em9NmZ6pmTyK6HggfbjbxyrVo2W8tEh4NoSyFwBk4fEeLWZ4godij",
  "key11": "5A6ioceDb1W7Q91oQPkkLajcLj3Vq6Ue8krTy8NHDhdWQYcsfEdjC5tUSFZb76aDVr91pKxpgJX44cNpyhBsmPoK",
  "key12": "38qYS15j9E6tH1vbVwHfozjih3J672SALPo5UTxWPmnHEKcoGGQ9R42XqPZTgugYD8hQzJML3ue4zPxhdZ7CmztY",
  "key13": "54pKx1ZCLE1amnjqxkrt1Gvr7hcuteDQWXs86UhTQqg9E6d1V9XqmPPrj9uxBDB1UVrDHDWcfUdhdiExGfWS4CSg",
  "key14": "4MrmnjFuNYNavoZuinCTNbPBZCLYNbZ36a6XyxiHWge7RJuxqks9rKr7kJMEDrgYfqjaqM4fGzXSttyUZP5ge72B",
  "key15": "3A96Q6ToLFPd3tUaXko4fZJxHPLBB6AnfFYG6x6SzuYo6XLipX4WTRiEsvYrYpv4in1tqCEsjqTtWuZ3ifnDAMf6",
  "key16": "5FYqjPmmzwLgLiR6dErXo2LGQm3uryvx3sP3LkZ8vjo7r3QqZaaKt3C4YuCQBqpWA9ZNSpoLeooGXhXJbbuTkV4q",
  "key17": "d3tzpUJ35mPDiRMQfS3WCXDQmpvwFSwpCmhZQzNHVoStW71dnViDDUzuLYrd9F8tqFx96xxgnse6YwZrm5nrhaH",
  "key18": "BHGEsWsYxukzPCxLFhxdhAusqk7nFuhpXXZc9qYnuTR9xeaW8yM4H9rFChcYPXjVtRQaVxyvfyfaJe8PW4sNURi",
  "key19": "27wsdiPmsrUEo5iic8pWVxoKJrWFQD7EUqHppuq1pX5Sqjja5t7z5LYZPMJ6Qv4qqfmVXFv8YvxPivNGuyKkFRE6",
  "key20": "5732B1bE3DNGdK5oBJFruXKtALLVaD8ksjm5SimpKptRgNLYB66TxzynExkaLPn8WRuNfJQSfCXk4qRYzDBK8VQY",
  "key21": "3DCNJzLGkNK5vSKZzHEiHuoL6JAmKPQP88nxnJZT6QTgY91qzrC6Xj2mr5y6cR7hWzwSmG3Ygkc9mMN8bd7rkrZV",
  "key22": "34ommVQai5hZidMxoG7DKL9JHNTUCuBx9tt3AqsYq9h5xvNm6qV81ryobuLCFHtrBXoXYmTgCWFSdkoC49DBd5m9",
  "key23": "3jYVZhy7U6Znt94FtXg9HZkKgrobqv9R7btbkvjKtsPD8S3H5fUH6jPpVfVBVhWfqX8HyV1Piy2w3f6xDEKamjer",
  "key24": "UCACW4kWzAzyHLVR6k5B1xZYZo47rXbvNLT45eTuMG3KwDqgJ3xLj3W5i4gjoWvYLv4yMjZmYaDU6X726ZzPQKn",
  "key25": "67SJHEqwas3JZ7WVubAJ8zygnnxj27GVzBx1Sp7NLDThvT4KMvqPooiDMUrq5x89QQ4WKH34CWtUivGfZMCi4sKg",
  "key26": "4FJChBMZwnZjejxW24eKaas34HVthKPPEKG3KmPpLmsj4U15VKKrQQ2Ev417H9Umk4otkPdqvXN55LTE2s14D3jA",
  "key27": "Gq79Gm7WUovrgxuBVK8No8LEcNZaBCuVURbqc5yJnWLyL3piZ4gPnhgK93kxw4B5ktedS8mha6WQhZcZwDMRTw1",
  "key28": "5GUNpUxnZBNWyy3Bi2psBJgdtWXfJ25WZ2qHB8biJDtwuriNgDxuwU8L4aXnABmCUSsr5CS84Quhkkz5k7X8qRME",
  "key29": "Jr2ukgz8GtBWNjWbcKgcYMavCadcENgyVWcdUovEQRE2vH6uZHWt9yN3DEe7yU39DEhavG2aFdsprqk5WncidAT",
  "key30": "597kCqJfgsdi9fgGcgJmNFGPpU8xDU6X5osHVTyNbA9wkKjifVPNSwgpp6TWLJpFxu3Xqy2o7yTnB4Jgqf5yYQE7",
  "key31": "6JML4NXj9h3FMobmczcYjd4FQ8JjcgAFFgDTANyEHV761GwMtk1Z5Y8aZxLUkZHv64eKbsYLPBoqE9qRX63PbCo",
  "key32": "44ftMDQ6VZvtMBzuN41u5dVLg9kHXDGL8VSXDc3vyBj41gRYhCBs7H7eXfCHMVEweJWF7HP5QVzVM7u8H22eBpeD",
  "key33": "4c6AVAPnKPUaC7Pu5fHUhiSAnfe93sax9qQoRioKJRVeWRJJbCoVbgKy6ibyEgVfDgS8YnXWnFmb1x4ti4Pw2bPi",
  "key34": "A4NNgmJVS3t7FNDFEcJuZhL1p1321BxPnK5fAjRSisdDCT3Q4nknfj4qaVXBqkWjewHhVDPbXDcuynSk4cZZido",
  "key35": "5wK71cr8oHY5eEcRZWhSyheqY9fy2zoRL45qRRTJyoxZYWk5xGcCNvwRvJnCFog1P8PgMDuKQ7L9aAzF89BuqZNy",
  "key36": "1wRW6REPswmrurbLc8HktKgnXtE4imhR8e5anuoAS9QNqd4qdKW3hfQFbCW9JSHehki49RVhqMyGAvgHpR41Ttk",
  "key37": "4aUdAFrcYjzSwQkzpZoiL1E2QxzqNzH67KowNxXeENJfNZHPLpFYhsuRpAaCZUbSsxPDynJ7XhvNAdASdGBNXcpp",
  "key38": "5L4YuanxonAL8w1jzdPtjf6b1E8Dsv7L1ttiC3nFNvFf9dQuoRCirnjQMoMsJFYEqfALpVthkjAcGzcMNcCtxbDd",
  "key39": "5vcwwiZXRRkCKofdbTNhhY9Mg2tAqf53D7BCQb3dex44q1HFM2UiHadSaMYcoNLyKAkMcavuf7fc78uoeaGk9L4y",
  "key40": "3s4a3Hjg2QpFJ6RNMThYwYGuY429jhP387DuCVMAFpTyTXhHFAduDTKHaJCvk1jnEB8Soo8sTLVK6ELsGGXpoDzh",
  "key41": "FLHsFVAqXCrsC42Tmhfrgr29P4eM8C4eJ8h275DE8pC6AwiDNzjMAfBUUEajxyRHrGYSB3YTw4rp6xM64YiJkbi",
  "key42": "92uvSYXB7X2PTpXtbc6RX4Tim5nUNmmDvd8hiTTwW9KbHoPC2XUH6sFX3fki2prDzBCCohMsUBXuXAMZHvavGPF"
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
