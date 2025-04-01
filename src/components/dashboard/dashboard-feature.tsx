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
    "WYGwHZ6bBxfnHhQAQL1b3rE5EB3CjWvsm6jArrLV9eXBL9FBiTJsPZmsXkAbC9sgZnRX6S9Gzt74UwGVZD6p3gj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xagjCDPuAnGVkw9pjdkGjCP4mpvYDM9C1pX3bioLq7kh9XnuYFqbR4BWQwNgkSyRUtdQdiZWcgX1qrAM5WLVtTZ",
  "key1": "5k95HB4kRfnB3V3Y74m717qHxywbKPminvjuyiG9QeaXoiLJtikkCQY2HcyBhfzDYyU2d6vdD2cVPwo7NiZczZZH",
  "key2": "Z8v4u6RbrrjnHutSTbikeQCCa6pYaVhmw6GkSAoXuy8YWNUVGoCPytM2YUg8My7gduwMpngVD5REqc5P4yTky7U",
  "key3": "5q6JP6VMEeBQhV2V17dm8j8bM25u6QgiFTbsMvxvTsZ9kXgh2whYwpu7LoPCn5LfoKxTitAs9YRtmENjJTD6gsjW",
  "key4": "27igQt9Hk2gsmFYc9EddzxVEVKVVjffg85LVKsuPC64ZoTAvrfew34d657EnobdHTJnDxs6YFaSEdtFu1fZ6thdy",
  "key5": "2V3N81FRxdAp5z5az8RgZiP6EQEYM5cr6PxL55bbnh8xfdefpuBGfJmC3mXxkRcE1SJGZwm3f1zouHffDhif1hQN",
  "key6": "QSmDnPvchooFDp7bNBaYGmntqyCUMxrQfs53nHjLxAA5ZdWaMtBYiLJBakpXGhwszT7Ep62BF9bnCcGtyptAgz4",
  "key7": "3MFmD1MnKPWGCTzUnHgpVZpPUUGQY3e6XFqdNXTzrzvFaqv82hm5pPyFuDzRxfsa9TdNhsRhZq2nXBYYDMkVnDsY",
  "key8": "4enVfFeFxZhV7y95wkRnczMs8anAyGCSyF6LLb5QjfJLfcQCi9sgM6vpTsBJnabrMHtUQjVBoKuZYbTQv98zZxr9",
  "key9": "3W2Z5DW29m37tZE2rsH5LfzxKiZQxUSeG4jwXopwrKW5xKHrjUHXb1ayVC7DjY75FD1jZdNXfXgPp6efeCRPvRTD",
  "key10": "uCtZU9YQzt9XhWn7q3hAFLBH7w1Bksd67i1vuU3i1Y1KVXzEUMxAWLdsBnpxhFiRLM1QXJMtxrcy2j45bJ2UvpM",
  "key11": "fUgoPjtg3fnc6fyZg8uyfBvvLdroAJycD9Pnk6BJz7t8c1LbnjnjQkDc58x3nkTkJmWwby7Z1JugRh6h64w8WDp",
  "key12": "42YYUyTYipvcz5u27EHeGxAvnXyVLSWBP5YmrvhSTFYjwjMTPLwpPV3QqZkLW7CR4FP8U5EKfgYNb2Ynw7DysU6G",
  "key13": "45Hqw6SKrtEB49ye5uX21LeHGFGUG8Y7mC1QxUu23o5vQURkat4kE6Kb6U49HG6x9o349wfRJDYUcspeiQBsF5TU",
  "key14": "3ZYfTTrvjAnq4Pcv1r9SdQchrRhzppGhAK8CrXgm8nAWJvPunyFpTAzs8kk7XstP1F8RPkaSKdh7U3W64SvxNNwE",
  "key15": "3i1T2writUiHk3Zd6eyTivUem8tbCcduRSUg8id7m4iDaszFqY2egfH7DbpdakwkDPecZ89NUdLo4uoZZRtVaq4F",
  "key16": "2c1zYbmXQ68v8gi2nUimGBziQFAivPcdvoHULW5113JTVXGk1fikCujayZ9ij13coUT6k5ooUNM7i5xvvccNugJQ",
  "key17": "3qTcWXCdPoBhLpgYGUiVVk1SR6YAZkCZS2g8ASihctZYpzvfG7pfmxuxWmF7GnrFYP7yS3e7azMe5267n75TS5XT",
  "key18": "2yTE6DzfQNKhVTAjfgEMZ3b7idPLgwvnTTQ3rjptcaAA5YvTyapFdQQvz4db84cvbRKi1Xn7iss1Z1Hf7C29D2w9",
  "key19": "2BBfayYpzht9rBsLWGUSYJWC6xxGyCaBhE4XHzFrp8EeD22d1YUKmHngBW76yg6pG9mthjAD9WnCdhy5T1usFMbQ",
  "key20": "2K59v8dBpiBpQx68G8XHfCBcAGNScSmxvGHYpoXSYEbwJeupxCS1hTUr5ne9RT1p4VgzHHFNRzQw8ez9RWyqm4xt",
  "key21": "4eCvGcTnQJPHt2nF5HaoWnKrFGgdRvpJCFeQUQm6abKZJUSzkxihVrgiAR68h2TsqXtzYcND71U9YWqme6y2y7Ty",
  "key22": "ZVo2miyDaWE3wZJMLc3jmnUXFXighMaj8TkfmyPaKiPPiNXVfVJGncz34yqtbCtMY1vQ9sFvaVVDcBEoSWyWKk3",
  "key23": "5HbUmN5r4sipRc4HyRDBCvSQAr65Q1or1bsAMr7MWQBk5uyYJLnTLEtrQaHmdSGKBXAKhznsMJLXfP5UPTjnvTAX",
  "key24": "52xCJCftRdiWBxGAJMpaSRz3LDSTci2izKQTSYmUbXfX3ADh7LkUgwRDqLNiqkFKpCpAtayhkCRJimnjJ6puuCL8",
  "key25": "3y2FK4PowGDyu3ppQuWW3hjoLU3REHCd17inBCRjzA2Kbfxn7whG8SPiEFXkxZVXMMdnrViQvXdfJ5LnvdffFzrG",
  "key26": "2VbGBieWvUMeC2yE4m9vjsnPLFP5vurg37Bdx5yZd7ZPWZTwYFJbZ2SYCtdzCVLrb2Q6f4Kp9oAdsQDkaJnSb16R",
  "key27": "5LucZ1zfAqUdY1BGiQDR4Zn9zLQcPHhaqxoqn6fz3YXW6pNbegjdfpGxtpoY218hB5yaAQDwMuwnaNQgtJG8M6fV",
  "key28": "qmqFoBYVHtHVCM8oLLcqrfiRoEVWtTqZmQCXcNGiwSKG76khYzfoZuyA47hEKDSBLbMCfFDQQMcz4cFdronvXEG",
  "key29": "5bxzFJTqXrWfzT6CbUE1mxUXpKPmphKw52wQyxX9qNuFsVPfdkvHqPNMb9AbD4BZUHE7d3MowjKVTzWvkHRP67gR",
  "key30": "C4iStMfaoTLmQUn7eBBdKkczdmubXbrxrVUt1qJSQhgeh4QQai2D8YHX5wmZDTSSXMC9qcneEksRM42ohjVF4n1",
  "key31": "2cA2u4hn3XwHhMsz8CSAPF961yK44ZGxXNtYS5Js3DfWium3gSuwHR1GVFrJMkkpfpNCJvqkv4Scs4As5dSUjCgj",
  "key32": "3VQf7mAGKVGXfgrqqmRDwa955fTqP1ejnHhWrBngt1ZFtkFb8SDxCsuPbSCBmn8qyyP8XAZT225bUVR7P38Q5cx7",
  "key33": "4SzQ2ZaTHYGx1oSmEBzHzvJ4NRMsJCzGaUd22m91Pnhy7xgQ9nZ6yXkhxUmdq36pgm4McnaxLmKUzma3BCHrhUbW",
  "key34": "FTz54h8AS8buTgh6v71VoYEmqNQPc1cyYgCU67LQnquiNStcYBYXWZdAppBhKjk2dpasMRziksQmsEuFg9cJTmS",
  "key35": "5pgMuU1mjJvzuBdyh1h5znBzJYnv8Nz2aQ7KcaQ6ooULC4SsqcgAWR7DiF6SeYYWU9E7C6fS91YvPxBgiWJwrEZb",
  "key36": "5bot6W9Lpzns1FFm9npnqrmSQNSaK8XEA29TPSp6KCmqZY9v5ehxsXyXeZtXwsCf1h6dxvddp52RSjoDXwG4qfxk",
  "key37": "5RU6ijyGwfrxVGiwr7LfuAmidZAD9Yr6U7opFfj6pQiJob8XNkTcb1gRoCppdkxCscvdnFJXUBFcFgEiCA9Dsgh5",
  "key38": "312fXM1Cxz1FAGiuD8skRgKwmX2iGNk6AmE2jeSFAN7eMJ6h2MT1Tq2rVHTfhpgfdbxQPWQX6fm2CAR7rQkVkE6C",
  "key39": "2veCuqNLQ8w6ZighLv77jzC97zNxVo7qRxP95v3byvFYEtGpsDQfLQbMMNs4v3wEHHT9LJ7Ts2mU5hMi92CXiUnX",
  "key40": "3bRbPpS9D78KwrGi3aGAU78eE7opWW4LzrnnqoGpY5Y9xcPZXzNbBVwwJWgPr5RZwq5UgtMe9Bk6y264rs4VN4nV"
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
