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
    "65KnUCX54f2QELutvWKUvBpDCHdn8ivBH2twJtXW2RNskELCdGGYTxL7FP6QoVFwEfmaeTmPFGq4L7xxSRM29hmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ncWy73KS6z63YfcLFrKsjc6QzyRwHgkspcGhVyeiUd4VZUDNkgCjd2fhxZicLQVycxYiiHzGRju5UeBpHFGQvig",
  "key1": "3DyhgYwCSgZVp5EXRjZbKjUdrhjLzCZxSUPkm156SuutMvhfgdCym49vPqmLDehDBVMsX88uWXeJDzJ8TWgMwfwP",
  "key2": "kLLzvbwcKaMkMMMEYXrwJXFhWC2ioLxEBREqPv8DTu7ZKxgZBBt3hZzaQyQuV8m45aESfDZzGVTBkUinaCW7yw2",
  "key3": "3RdBXv1fCZuBvdjTzEcrs7XS3RhbVR1RQTKZBtbVs4pzZno6whbLj5P2fJ7hpbchw4s2dC9Dj58Hpxc5RSK9MPHV",
  "key4": "3r2dXoiZebTC1k9pKWKuDhnw5qAxQ6oWdYadKZcutcMcd2yjCugsNuM6weMZcwYCppVkU9vGri2rWkfpo5aaJySe",
  "key5": "4CoAKUZLV3J6kf12ZJDacCC42T6yFWc1JAXTndxUdfhBLchmcwrasY94er8kAEa6qjnxYnmAWqRp8NA8NV53KcYD",
  "key6": "rVtWqzthcSQQhk7KsBVFE65bE4PYzknc2Tr3YhtFUXx8LC4GfgdKR96Jct2JqHUEf7iWUBF39s93S9ojtMBG7Lv",
  "key7": "5V4GsqANFbQJ9eVsRnM8Mh92dJVR3sQsy4dEa9AwZ3eCQBDhfLQtF4AKYFaTudLsb9xygUR1ghXe3jQj77a6WqBt",
  "key8": "5vYzwxGthKirw4hzA4Pviy6KbPf2o8NRx8n2XETMZH9oofCovJUNFJhuyxoRx5wFXSAG1SjDNsMAd86CFQr6D4T2",
  "key9": "5mhRPe5zLsi9Vq6aXBZvhaCoeqm5hHMm78DqDLEBNjADT65qanG62L7kKgnjdTYMJRb4ZPNgPwjg2waHoge92Rhi",
  "key10": "5b5eUFhDFTaXSJTRMMcmw2dBKsmNr175XTeBLBK6ppR7nbDRdeoT94tzgEXyyLyP6M9SrNPevGvL9gqK29fqdGzG",
  "key11": "2AZN1k67Yz2nH1dr9hx8dSrxKidSnCHQpcp1S8PH7tkm5baENZLWY7Fcpf676XWk4FzYn7hmF1Mq2wvzsuYoMtSC",
  "key12": "4AJpkJPyvhZSbN3pCoyv4yVRXnLV8BAfg6jUPnX1jsW7BR6rRa8tMQuReKNN2aGwVmpXwSKo5smtKMbj3gSFjUz2",
  "key13": "5yd7kcv8ySqHN8weNydkNBUHB75DP5rXoBSVcEWSfyTpYzHtLQ8aGQmpQRJjppCkb7G2zJyBKxEds5YMKx6XujM4",
  "key14": "bfqy2HZH1wYcfbNNGAXS2QXcbSYgzMuSqNsFaYyesbw3ZkaW7MgFTKUk7hyfLYPCuyHXnYW6fUFuCVkFZegoAZr",
  "key15": "5JFvZQwvgHvpDsCzJiVNhJdrLo4wPD1uuUa56MAobAuwysAiTZbvjS8on2HdpsdHyfBaHZNKm77Dhhx8PYWTVbqt",
  "key16": "e6xL9FUA3pjS9dSGKKmPSEJJEd3V7H7K6nsWhTdiUjWS6tzH9opjeUdchMJcRrBckbW1U7ZJYCvVsgEh2AeSGfp",
  "key17": "4znGGMSTenfUb8By9me8kjDRZaB1tgQzvqGmzYpekmEPNJ6bssKAKLZp5nPbNxAycXTA8PLjGVw8epLCuiBzKoib",
  "key18": "42yATfyyjp4Bzns6YKUztGW2vjUTBM637FhbCKk8uGbjs9LkVa8YtFMzvyf2W6kttmZKxpw4oHwzsiCJtfxjMmhL",
  "key19": "i1C1YCvTmyi2TnkMgF2a4mTs4JTKe93rFCTfsjZBKiPejWFsqvKciujeaTMiYyyLaPJQGEhnVDQZTb3E429envD",
  "key20": "4zdZC7YY7eATaQ26asXVSwGtxtvJYC4cVYiXxg4zfzh2JkwLfUtTShWsjtTxKiBbTT2HwNfNkWfVUGP1aNx82W7Y",
  "key21": "2anCKP8SuTajU299sSG6KMDbAfGRQHEyby1mPuVS7RDL5y7bWgMsefFvc4iL6PvYjKgdEaNbaHHXX9npjMnRBEjc",
  "key22": "Mo9bXo89RyNosesaosJjB8Zn1zmCFU7KhsxZSqWtFYC1LNueAN98GmdRxBh4yYSnz1neXGXnbVdD3YGXE56N1ir",
  "key23": "4Kgzs6FKiweeNmh7L1ZmcaLDxsTZUiGysF2V5axAPucHgdLbQvgJHWij3fjuKNnMbiEo78Ryc44UZe2DHoaR7tyC",
  "key24": "2oWaxbL2dbUubxsvQrB9VahXLS7kX1bV1VtQQfhkz3a5YutK8a4AESuugLFQRMgxcTFczoYtiHVu7waWaCgVXVtx",
  "key25": "466S42QoyhTSkbSq35Lop14Sk2foi6FBBEteXaE1Mw4SxHKAMGvt4mzD32EY3SKJn8EZfBvXMVaSnfS38oJ8kK52",
  "key26": "3W1PY6JzXfSvowyMRY4kwm3DnoaqjptG1CkkshGJdBPZrwCtGCeCkAStmfLfsYjNyo7mJtRMttA4Ri9kHReNb6RU",
  "key27": "5r3tKJSjrkPaqzQgMJKeFFR77j5xhTamfX1fG1nSw37VzBJqEQDjXo27kCyxXT1Q6DCh58MnKb9SzRDiV3MknzN4",
  "key28": "P2DANpU9qwz9kpCbh7Az19T6UKCXb2PJmtUoHPgTwvdpX7bXtzDyD2kHnhemSfdjrxE8RVH4d24BXecNtJN1utk",
  "key29": "4vPE2efAqsKk5ccCtDqRdSvoF4sqJYrAH8bj7vq9ecXhRfATj7EUhGHKpyLbV1SYxzW2B2h7PNYQVRLpsD7kxvB7",
  "key30": "ZFxyjKstQouVfxTcbxj1Q5tN92GUqqc7sj4BbjYawKCAJewzN3mVJRgrykVbmZHdhD8vkDVgHp1ZaBXcPZgVPj2",
  "key31": "3Pp9Ykn5whCM3oYJUWgCWhmHGypUwJyPcxbm8Mb3w3RN28e25bjHhcuFXSHLCvJV4g6Bjp7D5DapAAzfAK7t2dCn",
  "key32": "3RpngPdAQdjPpSiRGbYKnn9n1Rtf3e4gvu2Dqa3LuCTPE6xCS1bD6NBesuQzmxBc1Ad5NqPFuRQYqdm2gGgK2VeU",
  "key33": "gniw2ZaQ56zjTqxnwE8ZNdQaEDanYj3zY3a4cyftCpSSY5FaLRLF4eGJyWidyMXoiVxjdMzNHRGzFvpnUmAGsVZ",
  "key34": "5cwPkzUqNbLfnJHh2oHW3ABHvp2ZBetDdiNTJanCfCdhdkhRpQnV8xFcW4D2F6oH9bENutjr8wHPZ75uFdYMcj3T",
  "key35": "3iE5vf9jWnqmA7CWdJG39BryB3kApiNfqxEagEAiJ4pNTVgbA3oKUoo3a1TK8BjnnKZyzQB7SWLzbgjfQGs1sN8d",
  "key36": "yZyevQamZHx6dMf24ZeKaSCW7DfS3SaASMZAriz9RsQNzGmm1EzvpJTjTqXC9hm65vPjPqsuUDnm5SWtFGQbGMN",
  "key37": "3DJrRRJoGq1jz6f7UL6XWgsiyoeJNFAvcoQDy1YJL5up1CfxdHTc4XiWBkqCuPFeNv6EVUpn5bHorHujWSbn4yS4",
  "key38": "4b2x5NRw58p7rKBLaBtkMPhNcJcMEbJrNesJy1sWc7zEqQPFyZHhkDvAhHZTwa1RQYCZXbi7FChrNV64tqudkQBL",
  "key39": "5g1U2kZNFtnq1ZLZG2oSuKtAvcxmawQekCrbcyPJoai5GbtWR9pJdquzZYJFRzMho1HAggeUu5YxVwRcViU4oTvh",
  "key40": "55w6Q11J32g1pB6SH9HYNpCsCS7sBvSR6QXTrfG3RZJaUV1QCrxytyqvLpAex6RYaxyrDn72RREMFUbk4uRHDvdH",
  "key41": "4SXWYDox2zWgAAkuFdGtC6bCbhfHGspJaA5RDMHJaWR4vJ14y6XU59qYi6n1CdBCWuAdf2Sh5bARoDRpdroMi4V8",
  "key42": "32h13VohFJkMGugMo1M3YqCYstmv5sBmk4QYF1DhDcWRFdUrqnEdmurPaxqXFqYXGUS7wBZp8gfAY9s8t7g1BZ4m",
  "key43": "5CJYQLyYuAfpUCfM6GND86g7w8tVUUvDg8uW8hozfziNbHCgfix8Bk4r7DuGLBV17yCoN2DxmjtPJLQDbkfb2tjA",
  "key44": "39Ljnk6gLKg24QDSRU4Y9XLVzCsbr2y11WPQWeiUUWUH5r1GpmtRZhtHx7DMZHjJoPVsg44DDZdFsuhFQrdasqYJ",
  "key45": "3BL7zfC3HZuMGLZ2jGDDyGqhc8yb8EkvFk2oo7yR3eLvuymtB37yRC2ezQVCQst2VaLpiCNmMxN76CCgWVSkkv4X",
  "key46": "3LemUcG6fsjewyK5CsikmWVqhMi2YaHxJ7HWJcBmzxnVUcEZLzShijNrRjZ2Ai2JbzwECdMweghtmrLEFeGLeNr",
  "key47": "2rPe2duRVrxgaW7b2P8h5KYjEa2kRRSj4Zf7zp5GCMeMChguUaZEABtiPnDL7YkE83CVzdF6avaqSFG4JFcic8bZ",
  "key48": "x1shpJJpjKCdei9RTaHTxz48WAHbjNCX5qvnzdpWfw46E1T5mJkp9KdG2izTigjuKANXjw94aUmtzFUbmyjaGpr",
  "key49": "iS1WrEQ6b1NpEW8xV7HhgGQAi61xWSqvm1Rg6ZXMpWRrXe1UmAmN779C3DJdtbzt76N65J7k5dGoHxWeGvBW6kM"
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
