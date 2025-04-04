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
    "5WD2MG1RBQd4aTpLbtiXT7NmjNED6HFX15uHq1UWbv2Xhdsv4GSvmffbiEgA5CZceuHHtB6yc2t8KvvP4FrnDEGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qK5ePKRQfmAvMrvobSXDanqVGMpebsLJmiQ62FL8zxVsEkvx1QU6ez19JziAMxsh5F4tbPV2drTzJs8Xw4mUKb",
  "key1": "2Y5H3JU4Tm4KfQV3HwL5au24V7bcjj3qcMEnZa6RQz3BMHo8pqtorDUvwqFwp2orgVALjVYvfbwPYytA5NEFyhjq",
  "key2": "2iwNzRad99f96f7245YA5qSF7P9qpfuFewLPnZzGz2tMpxPbyBGb7atX8yzxD6GYLV2q7knhyS4N9HQB3MR2gUk6",
  "key3": "3rUSG1Mhp24FbXC2TfHtHgWaN3Bon8dmvp9vKdiziJDoZRGZE1yTEedHqmhfuSgdmEXdp75PJzQzbe1saYZrrBa9",
  "key4": "rWDjjdYS2visKzF6nMQaxQQFR6tqK8rCGHdFQaoG7cqG6KNckPuhZLnrwvbj2X4KEKC4NUwEJi5rszknMqAEbYT",
  "key5": "3MduP7WXbKHmU4Nr6FqRQYi1yp5qjZ4vQ8Be1im7nLKtugq7WKoxZUwkgpXa3ACGFCLb3jXBgYpng2BbbHvFwkJr",
  "key6": "2wbFLWPmUk5DaTsptw8Y9j31ekcfbPG9JHdweQW1AKbiDgshX4MzMtwgzxyhRPZauMYs8gBEAWaC7wwnAnweifcM",
  "key7": "2a6rfWHjAxX2gogHbiNfhKCdNg7Ycden9cogDTux1gxZPABaA7SuCLqgCTYYQLQh2WK8rHbcxH762jhHoHjWKJdm",
  "key8": "2i6UZHDcJvBwbYLLHCSa74sQj6E971DAkY8HV9bUSFdWV7Ydoe5RX5rh9nnkZVFY6i9zyxh6XH1i1oZRuxGMRb8Q",
  "key9": "5SeApzYBKTv6Tfq9PLfsr4gadyNpdQdQBkaKSvotqjACtVeZVMLGoo9ZE5DvFnHVG9HigBE23QQphdzLUaRhkC6C",
  "key10": "LUe3VxVS6Uf281EDSceia2NGrVALCk8Wdtuaw5WuxviHXskpMt4ofshZcHiwkAKGAP7hC8Kk1ttb4ueaYKeGqwH",
  "key11": "5ZRmyprptdp1eefSk88abtW8rkb7SJbQVMDJPKUNtyXuVe6cLfwMFrsLpEjiCKHG2u8axw434jsNeZDTGFHTXXVe",
  "key12": "38wRwqKbAzb89pHLrWZKHbY6vHvf9sJs9uTF8ju7UbrMygBCAJJhTsshV7qZqPs6WyxurD1JstujfkUxScxtghZG",
  "key13": "32UArfvLghp4HJCX6drkRGr8vfJG26MwxyyNWuC4Skg6bsLHDWkkbUoVTqUubS7GBrhHdVPr4cxnZB7iGaEuUYLm",
  "key14": "3533t8UyQKMqsyxcx7jYVW2JDTw7xcBU24ZcWy43xuKzRZscLc2nmNhHkRYiuZAT7Rd3sNGs8hV5RCkmTuuxHAgw",
  "key15": "4xH8dgHGspzdpsFzFds7uTmqVWV3kx331iBF26vJDJKEw1oMGzwqAgaNv8fdvuf4cVNBa18Zc9wVNo4gGkHQssE5",
  "key16": "3Cvap5czutKksE1UVQqepUP1eMzGGKaK15k8xvHRHSpFsCG3wg3cUpGuqnHPoJSWKsj65H7xFyCNkYoXQGyRkJjF",
  "key17": "jpbPLiHcgG5eZDpusf2jctkMLDwKh14qMgdNwrRbr2cbQxey9iFSvfUGC3V2EMDwy1bSCszxtzHrPUqkvEirVM3",
  "key18": "Mcm1rxYD9ZDcK37DqMx8w2TZb3LYujLQv7z1hHsxF37jqrc7e9gTFHEBVNwMz8CbBNDzh1CyoMJa14m7u2qmd3T",
  "key19": "zRWN2ZCT2dnj4dT5EBFXjt7mNX8YKsMbitrwjL2CdtYxusuTXNUiFKgb9jrec22AfA53EGYXcRAVBowHEsLqJhY",
  "key20": "4rBPn87nfD8uQ7YTzS2g2aMjVq5eFV8GkxkKirZ8FmMXwMc2ZoxhnJcbmrVZLzjzYKzn4xe2xAmd4rWy5HXQyGcj",
  "key21": "5PbJQdiqabCtwuz2MRVzVv1raev3XSAQPFVCSLG2gtAcnpecZFhhnSVw1jZhU38tS6MayQ3vNwVQ3fNnJhaYJMsB",
  "key22": "5GiUBZKoouewe64zjyPgjogZWr4uX4ySZySCtBYTb6pgjUXrLYtbYHHvjJA4iLPJik4vGcW9L6M2XWzDYYNHDEKY",
  "key23": "XEFcN34D7tQykmH3rKq4xjJE87fzbU5qDXhAZ8WydaQxwXjRraXrJRJPr1ASfar9AnLm2ir3J9dcZTUVyXiJV6p",
  "key24": "ibwFCf1xdaB7RMEBLRJLtkHQBbCdmXnBHYJ2D3ksM94HyGggduRN1MuJZTSiuAiyaM1GyFuKFo5haT9JKsgrcpi",
  "key25": "3m4EctVtwSP6Tt1SUnLKatUnQPrHMxbxjopVnV9Myak2dpPBYSozyweVZr1a8RFDPu9ZZMNfvyuQm2iYbVqdqznD",
  "key26": "4pben5HcNFgyPAbRRwsFVLASE9pyT2oxLLT1sqzDwRwPnyFD9By79qnEaXsR2dYsmwEMRcGakKdwm7MMQ6drns7T",
  "key27": "PEkjStACuZMtmeaMVo1AqTUtax8SwbtefFoQRRbBVArJATwYmVswJ2V3oPmPZXyWbGjnWsXeKKQsLrVhog8seb7",
  "key28": "2UTpZJRnzi9LfUfcZjzHSaciNrhNHYV8a5KpWNeMQEZ7eqiKTcrzAsS1pVANux7ccbaKncegqjquWgN961sTy2y4",
  "key29": "4FxzfiAuyHN8UtPYYnyhTVp3srHgEa92X3WMHxXnitCQUeXTyQ2u2xg3kPXJ7wAvJ1M2VYfE68Z9ZDBUXuKtsynx",
  "key30": "5bpiRxpvSLiDgb6sjHjVJi3xZAcS2X6zEfYiBbRymksXn52oMhLT3BUSF4zDA1yhhFfUpfjveJZukkFiHK6tU8Kc",
  "key31": "57bCym9E74yWw8TasfsPnu8ktfARQRHhaworDVLFfVwyxcpGNemk8koMjQ6T3TYdPvKC6dUeGNp4zLUDg5khFaiV",
  "key32": "4NB4WTJTm5CuGGrazMRBWmFxvEBEqdazaSArD1M2C6HQR6RSFqfMxLJFAp7k2a13sDQZrVK9BqKnZZ5tyHNhA3sx",
  "key33": "5ZdU79SFLWLYgrgVAfomkUjYPkqFBfHfRjxYwZoeSBafRMp3XtnFFEshbM1VKXLkXZrBHkAigkemJXrG3ogWo86n",
  "key34": "5zqg9XB5nnY9u99k9efNSdJRkue1FtGxSjMojSYv67SmcaRV9NxLxSB45VkwQvTddKp4mEwgmD4ewNe2HktU3izB",
  "key35": "2qSYZyVffEZRBZwguMAXziV6Ucxs58pF5WQxyxagv36zYF4v8zdr4QH1MWRyUm8GCz9QYgVBaxoVktNovaTMtG9g",
  "key36": "5Q891Gcb1WBw9ixaqMNgNFd1L1tUPDzv6vAb652jMVayQZJ8PQkrkanaFDuRcoH7aQJiShsvoMxgWVvEzcLMZHVy"
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
