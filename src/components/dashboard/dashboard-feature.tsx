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
    "9bSH1tCrmEr4pkhexx5kS5pBWpFAYax1U2TevpTRXT4TyaDs3MQLiLnvwrQ7pSjog7JChEqh9Lqj57FKXR11Cay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GiZQ87TZxCefLx8gQhoEBwoh4XaCxdg4MGQhXxmXMZxorFyj12JaiZLZav2SZxDdUXUArCubTA6G1sW12r2zhyU",
  "key1": "3T8AcXnG5MbzuHs4cW948Wn3TjdAEV4wSMouCed9ymBch26BSSb31C8nN688EakP7XpU89ZupjTrpSdyP4wBDXst",
  "key2": "kChaBALfKbdwrcabgxscox5SnewVpvF3vRYjypuhasEquhGq8Cmgi5ynRxtBR9DDKPp7S7dZUgybXZM6H2JBRKe",
  "key3": "2cLE5pmDoMwwrCb25jStZM18ZQ3niBsDeqZtUy8Pk1SRfgsprBgWEHNCFwa24odhaDHsx7LPfwenVoKyHJiKX9Pm",
  "key4": "4t2mmnnX2WPh2hw3M3iFibWT2ugkYELCgSXFkV2P8A9k5n3dfZZ6e46GJD93YkcWFHfHPJPiv13jHs7Z4DkPsXTo",
  "key5": "2HBA8Ts5y5qwzFa4s7KW1EyUxvZup4dZpH4aCAEnA3MCZ5CmrFknBFsBcZThyfqfaw5PDCKaJXNsVLiYur9E5Hkp",
  "key6": "293msQ2ZFx8pGZGQPZ8MoxpyEFdjM7hQYUT2uxQgypPXRwkSKe5VbiypiXzHu5GRSNH3bZj41SbPnuKc5Jcj2jUc",
  "key7": "vj845MNd9DQGsK9DnhhBxqXLjhthmAwfTrkwyhEQTFn73MmbiqvNJY7cwp7Y4dwDe1HtkyQmxdBrQQhQWUVmzei",
  "key8": "4rpfhoz5uUkBhvmPNmDrmjc7KqYAF4P7uTrLBHBTwUKYfcse22NSq8FX46Ts5gNdXaxCwZKGsGgtxV4sxVzk19Y1",
  "key9": "KfvQxzE7WjKBCkWbz5aKEXsAm9kMSJXL8bPEM5WKZ1SjBxiq9RjhxozWN5W289E5MFUjddBSnfwvXPxT35pHzGg",
  "key10": "2Ph2M9afLEfgUJUJkL8yrAmfcpFbybct8eM7St2reKWUZaHZ1jDSFWCnkEPufAVUwu2uWv5TPVqYfQhKWvwxEAc1",
  "key11": "2VrusEaCuwaemVhftEcEz1gU131zqMWsxML5jdmjNK4UpX78ubP7TxRwEGMhcSqVdeUxxmzxfHaQHnUmaF5qa4Jq",
  "key12": "4MiQfubYCFDsQcwsBUUdWj4Q7K7LUg35xmLshByYokG3scTd2KMczAYoDbcn2ijj89kqwekTYJsKf6iFFdrrAVa7",
  "key13": "3VxWN4go6BJ6GV2G7TU9XkHAQYecVCiK9NQdTfuLapWi33mxaqiTQ7aahqxaf878Q69YRbQivXAqw1WgCMsRYQt9",
  "key14": "2PYiwBHZKZBD94S1DM9FLy9UxvNJbmtjZcC9sVCsDH8DafdJV3dNBKb2qbqxVRRxku8DWv9tVa7dthfjV1U8n3pA",
  "key15": "66sQm7s4w8z8T3MKUfpZPfVQiCiBpd2V8DD7u3ByDH7mpsqcanLsAzFopjBqzeN7mHcnr8qcc897jP1L2vkPeByS",
  "key16": "5AwNJx6yXFN6HTmGmMHrgFKPoxx8ABXRrxJub8kmcGNZpSpdHvwqo14DpdUUN7vD6EshuVYYL2b3CtPJhA6djjw6",
  "key17": "5aDTnyezarZL7trCDWsCm4TLksFcHFYph84hn9tNXYjAm4jBW1Wto1ojERsKgud1cBXZWWEC9hmUTnn4wKrxp8y5",
  "key18": "2x58fwnDm446TvTvYD7Zf6Lt7Vy51sTLgzu8zbR48486tDH6qMRA1CozB13vyPTbA8JRLCZxu7EBhxYAWDkFGwHp",
  "key19": "4uiVSiMrGxBFPWgSAN2nGYUTUP4HJ7FFU5eXA5quTTRcWjiamRnJC5eKZkWkCovitRtWK8nS2ZUUmWMLEv7pcbSm",
  "key20": "2MHYa6GmLsGbLnaVJUNJUzi736cTEdjAGuWAwYShkzJcjnQLWkFKDxncXaGazkQW68QHtaAaYcdRoXTsSp31ZCX7",
  "key21": "nwSZLSt5hEp7mcpYqJcGHfj17AToB7Ebp8kGShJAr6fvaC46hAkTVbH24Bbb2ywy6ayePBEMTwtJjBF2orUUKHm",
  "key22": "3zDfTnVEKGnQ8ffCFTM376J7uY7obx9HKCTfNfNExndS7kDh3HS2zfyPn8ikHkuTtoCwGN2UZonyJH4UMLDNDt5L",
  "key23": "5UYg9F6W24ghiwUS6W3BkPLmYiMxHAxKi2bGQQTuiLVp3JMX2wUHNFw2kJAM68T6y7ReE1p6WMQARVmS1wbQPmHd",
  "key24": "4HjsanFf8RXfrpQNSHvCgrRL7ycthvMANc5xBpZw2e1GK8qPECnJUavERL5nWYLjdEsdq9Vs97RMy8QzETRv8AsF",
  "key25": "27Gqn1QgtZ1RHEr1MrqS7HJAdQSdj86N52wMnS9i2B7bj1qs6RkgXzyVbbwpfvH2KFSuEppWiFJHqiDvRiQKNSaR",
  "key26": "4uZqcDyo8Fz2MX4hnUdad7mSEhyu9PAMVvjAWeZiwfRcQRS8yn5ukCHJszhmyHtp9cwJ97NkE1FKKPsfdkR6u3zn",
  "key27": "rZNsMHtDrw5QpznViJcXYrz1JShMgLhbHQc2bDtxABKSJBr2MBRDWocp8hYU1vNLFR11896CHFmynWym2JdHEFi",
  "key28": "2YzdunVUmq8wn5KLpZRCq9JEVU9H7CfCU6JGenLbD1HgVj3NSyaBi1RhqMEpAWdTsJ8AHVFQTxo11UMEZ4WyhKch",
  "key29": "2sqxZ3mucZ9bxWuQwktuyQZEojjri3MnAnyryvAPGm6iG59YY6HsKywqozzwBQzKJ1WYFJbU5agQuTWevmGfoxm6",
  "key30": "4PXj74G4nKfdSidfQzvXT8tUbQB2C2XLYLyFMPNA4pJXHSU6f3EYN6pfVHomzBYi3io5gxmXr7nDnj5wKw5Yn5eS",
  "key31": "4bN2NZWYd6QWCKPKuuvXG6MuV7JDAy37PkDsbtCWTS2riTFUY8skgcXBGbCchrh8xeCuAFoV28Hj6JRKaQ8Z28UA",
  "key32": "3TciveVqA2Vi8cWVmcKFH2VVcLfgAxtZR6mSVoyvaxKysjzXYMQ8FaumKV9Nj3awn1sMoUpAgaWQLVBJuT1vnM9u",
  "key33": "3UgsSwLtqHA8tuG1AmRiY1y8AF894VETCqBUcoNXa4t4Cy2BC7nwpqPVeSWiaXCTC47xFcqW9v2H1Ltx19twPzwK",
  "key34": "3PJpguWELkUW7Ksxy12gvNKnKcB9bB98qwpEVvesqPZk5BaxgdPNYV4x3osXtvz2eR4nAxSHhMY3eahtnyxXUxWS",
  "key35": "3HRkwXBcAR12F2XAq1as81m2qAzZFotM3UxTkRYY2ddfBEnrLLxBHfbGgwfqYFjo5o4GSNQtQLJJ9RFqwxTmBxhF",
  "key36": "4pED5chbYnbHpo829ApRVgMnQk8iB6xmenYog7FkJYH2hatUF4n5nUJSEBBVfav2JqzDT5yhXdBycsnQwRC7Ek4T",
  "key37": "5MhZWwfqaschXZaKRdWJGshYEZCgQsuFfJSmpaxc8RjMJED5tXywWaTzPn9oPkWJa4E7qvEA9CxDh8ZhmAW4tfYe",
  "key38": "5NAYPd6Q2fusEU179tsgKkYwvUmgikscrFhAnK2z3uejaVN4sPrzTvcJeZhcNEwvtVNBGWFYvL7E9TGGbPKuhnf",
  "key39": "2ZujdfteK85j3qum9MNzrNMBdf5ghKb2GYmNAu3oiUhZBNtdDyQvo4vorSJov2xYWBXKybEFHNcTcz5Z1vqZZgAD",
  "key40": "4VrWjctQovwfndCCB1sBYfL5HpsNW2HNCafhgVur9CGzaPy66jesthFdhwiKXiKJBas1qdhhjayrFfqFBN4eJoWg"
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
