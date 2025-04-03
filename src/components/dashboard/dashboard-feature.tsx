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
    "8xCE7YvLxpETaeBoGYYaRc3EX2k3G5xEn7CQMbiu3R315ALAhAayFtM1otpd2AynWgMWqijVZtuUpJDskCLo8aM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ecUd2foCy5diTAhDWwJxCraq5xDo9ChouZF1NJrBXZmDVPZMzDKd3s8yop8DiNG99LkmW5X8tChtuzixGMtorwX",
  "key1": "5Eb657CggAsuKGLWGKCc2HRdQHJTSbKdfraZZ3WeiSigq38DNnQgWreT2mkgdF5iuo9jy4EPenRDQuEMvtK4GSSi",
  "key2": "5YNwG65i6DkEbVGTW1rDuznyvZ4iMTjoW5pFwi9zw4SKJjUPtnHjGk9At5KLbG9rVTPDZ81HZEFTou62MhUq8Ngd",
  "key3": "2oK2m6VAdwecpniAbkwL8YizNwCTr9Sp4yPoFAWaED8DfdCNA1NnKU4N9fpxqwz8kCopBsuF7VRDwEYk4ibXw2gy",
  "key4": "5Vfkauad32N5mzsbQ7XzwxbzGERzZx46AD5Tztf1jZEgouHLJoyweqXRr3Esovk5AL8xvuBdDxVhonSsEZHTcU5U",
  "key5": "FQLzjhRbReqkAdWxdF6yvw7qPrE6nBBFZHGSryvxaSh1DV6nX1HzMBkJsYktkjpoxU9fUG3g7bLQVyajSzwWff7",
  "key6": "rBcgZajDzep7FpU7FJc2WDA1PL1P7CmVPrURB1CyJMgRNYgnd5XYjZh71cDyfKrA4P8bEJtc8B4RF46A1k8V9My",
  "key7": "5RjoHGQGsUasGqtVRJQcE35QteH4nQEQJi6t3ffJy2n3F3VFBuvnn1Up2oNcYMaaZrMGEnNDp7jCUeTohza3wif3",
  "key8": "341d689DQwitQpvvuXh3g9Vcz7DPx7rtc6z7hdJBYLhRdXiwsZYDxi4TXujFK5c9XPoxvuPLGYHhedU3tueFuBoZ",
  "key9": "4g2iuRWPvJzH5pjpMQRypgmEXu6xHwWvn5LX3RStrZVGCgoLcuH353nwCq86WRcxakg5crYUShbe6m1u5SkVGBoT",
  "key10": "4duLGjtXThfADY5vTncA6rufk11gHDZ3hKWdGSt6J69M5e49toV8u7rW24Xm1iDKhYywh2P6pix36UqSQnbsxvJG",
  "key11": "36aqNJ1ZkEFqPJaaGGCE9SDPa7VZGMNEPxMruAWvQo231jRhhzGtsbUCVX86axrDVbi1HsZdJvBy6mv2V5Hzy8Rz",
  "key12": "29Kuj98m8uZ8xPvVP8rk5bvBbvc1qRJwvSmsEJjxqTskMu94ePmnZUymez9v4Fk4XtsazibfNAKroFsyA5mASuxE",
  "key13": "5qDe6NAdfa9tci3WPew1aCndA2nJXkvyuWCoteEAQN21VhWmB9XYALMo2h1dgyXEs44x1AVtzaSz8SNX57MM7ozm",
  "key14": "FRqkxeV1eMYoioArscHLfn5vTGinZYG9aWSfRqj5sD8hFxRmqFozTUJESJtmtztLoRRYL3kicCyw43wCnM7S2Hk",
  "key15": "4DJR2bdyBjXgFeNnhcYTq65mxC6tH99FVyZC5czwNGHLsBgXqDGzpbdRjcr9Wbgpcsnh5ucbjpfuGioCinp3zfsg",
  "key16": "48bxYZtuqyxsR2yt1LcfcsKsRjwnugQ8JQVbrD9JTpc7e7MK9AYWm3ShYCVJvqpzL7krehPzCvfUtxCwMSNTpe5Q",
  "key17": "5cEUwnGwyVrkSPirfixEhvgdcihoNXaLrkdkZRu2vv8UukG6etp6dZXjJgUxunvQgizNnqKo2FRJnW2kLyBMJoXu",
  "key18": "2yohwYFK8VzZWydUadNLzW89ubiUtaZN2WtShDV7aXqPGXGSxJGVKSNAjUFSYLv3Tnr9aQJA54xSDZDUn24dEhxj",
  "key19": "3r3SHWRyMH7PMXxQUSaw81zWXCzctbqnvXw3sZnLVDQuepm33yAJLkafxw8jXcX68gR5m9rCitukyfeLL8K3xwif",
  "key20": "n6Ygy17bERMkCNK67Gc9NkKvqLgsSvSFDNkkLbLcyoLkjVCgWSUuGQvk8m8FrWqBzodb1Sb3eAKSn1uad7uLNpw",
  "key21": "2UM2NLXurEiEZSeYqtm5GBvn6kT1kkPW3gKKy1HpPLk2JkDg7NgFDSkkPZg7EQKjT46SXZoyi82gk1fegE9JPcuu",
  "key22": "2JFSXRHkokS3xtckwpH5jzxztqGMMnvG1wbawCTnfaymE1LJxLa7rch5ewTnNLW21t9omgv4ARHdfpBU1nRGJHKB",
  "key23": "2hYrRA5NBJJ8oh8gMAC7KLo28NbGoeZHxr1Y19SFUCfj1ozamsUUnyqQNpJYDHmFHhkdQx2x7zUHgZH289uiTwng",
  "key24": "64pbJUFja7N8JzkmnugrVr5QS5Zr6esiqfosgkuzaGUpgwdypADiRVQ1Jvk24iq8TfAHNMjKqTF44vL4T76mXWpo",
  "key25": "5RDA3VTu4RG9uoDmqz6umpYvBiH3V2UAaAL8X6qwmRgh5AgaGJZ52P45rTtBYid8zR8FwDHBSTrZjcyvigWUqD3N",
  "key26": "5zsmN9gYhqPeA5RjMz3wGbdy6SqVKNXXh7AeMbTj5YLW5DFvbk7Q9u1qn3DapUPXwvGXyLqEJLQGeZK87kCiuaLX",
  "key27": "3JXWuX1uLahkaXKmpdYE9b4TFv7ef127LiryaoR1kpMNgMdidAs5RCMXhqHo4J272whrWLnu7AttA3G2VgL13KAh",
  "key28": "4X7bMLV1twDqug5KHbvEg6XpQL3ALeMZ9Tf99iBhBqAagx1iuBA62K3BEQjMXgiqi2t1aDHjdz5G6EY1MZuhbyMY",
  "key29": "4oeprXmRqvUtcajjkBR3yNmhsE6JJrgDbhzjbjgAB7rYcjswNfUuGV8JpQ5Ha74UwMFjUpYquKppmLBW3YZpfuC9",
  "key30": "4C4sEcYBN93FdU33X3P63o3d38sf1PHPJpAbGjf2MunjhVrABoUmYiNHmqUkq52V4yFghs6dehifEFSjXsNKdMnb",
  "key31": "3PQeaqfi49n91cSxdsApPVUpegNyuAyp5nRBNatKYjQJzZBz4AzUGx12iR3mByWu4FPd9rZJAcifVsjZ28bTfYML",
  "key32": "4fzdpU3xduUkFkLTkp3XJQKah9Sq9ZdW6bFAXrX5hWQrMT2zDRsfMN3aWe2aV8gyj6GKHrWxqgQE6rD1t6S4zegm",
  "key33": "5vuek6C5vsnjT3o9B3sW3HDESni7uWnxhYY5H339hKhAyQpwWT8aBpUF2hDipY9VYfvXcgBLKzFeW9eHoGEZdEzB",
  "key34": "5oz47RgokLn7HXRKkbuYACrw4FvfbUEqYHcwUwE1dRstwHtZRTr3tSPHVaSbzT7pFAFJnfyfUKaMpkrFeEHn63eR",
  "key35": "2kcSa4qeMUAXtbNBNPAcv7ocE13B2BtN3sLyegdKXTzb518dLaehuMkiB8QmJq5KH8UyN9urYFtTHPxqBK3QJddf",
  "key36": "3kj1wh8M7ovjTkZZKVhiGhupgvQksr1BmU6M9bc16GBhPuUtcUK4snCWGcEsyT24sGz8JNkz3pULXaFTJoNSKRmh",
  "key37": "6tDgJZAc8a6QgygTsJRsZyCKQeWMYjKaJVkNgRJgmq9rS2TJv35kyJdBoaVxMcN85L2th74iSWKWv9ZhzAiQCmA",
  "key38": "4HgfuEeG4uYZTGwUd3S3J4zkbo1D5KZdxRs4AB5uuSNNe9k6VSBnKSWNZLBvfpU4nKHoMMsGw4MEzuRpsehJYcAR",
  "key39": "pq1tTdjLPBeQT1GCCCrDRtVqhU2Ds7U8AaCHSGSxdgmnXpCFEj2pVCK3XL2tEUQg6FpHjcCTnzJKLCymv5fPPKh",
  "key40": "5Qb3wCvxNwa5z5TsW4nazjHnxcFbJiR8odF26KWrhRExAqn3bkjvH7HRGAFWu5ELMtSaPrGaDbPTa3dbmNL5AEmi",
  "key41": "4X4STvDwfWuw5abB12QsjkTrd55eCzxmUVTyZJCdvH8caVeRyHEdNpqjyy9FMoAPQHBkCttZQoChEE9QnyeX6Fa6",
  "key42": "5SRzWTiD5iemSbMcRAH66BQKim6GKAFmx3yNQuo8MwvpJNdMsF4Uvt1xGns7teeqiJukVoYWCntnM8fiQ1b2p1zA",
  "key43": "3MsLwLdnvrpEdWjrtDL24mxf55vCmuH9ptHqDNt7kUxDeHMLjdQn2QXStuJxSeLaZzPpgLu1wQq2sKyKf6MJjywt"
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
