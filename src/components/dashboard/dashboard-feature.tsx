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
    "2WAorRxm8uS2eEio1go66pQZYJjRA3RmBKEcUyxdt8Rf7JtraaatBD6wwtAy8xTbiU8eoKqdrnPH2dK3oaZovDiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D8PtAQvuNn2AtjDXh18WMR8W59rQpgy9qCbxHfdV1esWWXYgMwB1NWFwCjRnp8HZcTAbStNEs3AdP9fJSJPisEz",
  "key1": "3rq4YSN7Bt2By7csX5hWmXHwUEi4BJYX4zCvxnXHMh7eun38z9tmwoH2Qq2Wmf5n6KxV8MiNN1j5wM6mk4R4Bg7C",
  "key2": "4oQp2y4dEQyEhCEzmkmzWKffPKjEG7dh9wQM4aWwjCAaGvK9dG6xPaZfiD5Bfm2av5pzS9m2VtbHSidybb2fvAYn",
  "key3": "32c9QyALmuxHgyYhwgtDTV5mfepVnNwGfoKo39GXUe73czpRRmiDqS1xzFUAeNu5qiuiVLEbDas4EkX9wfZdmumC",
  "key4": "3or8FFXUR6VJjsbeWf6qhueEYbgwGWSTZH86mR9jDLgnGRXAwwsgkSYTv5VqRh8w6N6BUWkubR6rNkUJyMWohAVQ",
  "key5": "pSa3JHfS88zJEhVVUMXYnxe5G5LbPXsdcRuSQ9VDVaRxMKD5Csy4byQphYrh3sdSDTQadgtnLj5oSpkeD4U6Cv9",
  "key6": "58omCMq2d7xv5pJeruM63tEn99yesb36tEdnQNio1yDACk9A56KG7JbZ8LzGYykGUn6pP7vm71n8mBWTEp3at5MW",
  "key7": "2djCyyYAN3Gq7XKZQZ3V1J2q7w84p2zsC44AQLBepfp1K7Ws6VLQGmZQPXrApWwpi5E4F1zUon2EU2uyGWMf6T7a",
  "key8": "5XMS1JnVvKuiPd3XvnJ76tpTHiwHfd7KcrbodbedYsvkppod1HHDAuXJ5QJsY89quXE4siCrUJ8AheKNdXETi7eK",
  "key9": "4Ycb4i12fE4NkhHj77no1HMjvfTvVyuNuhZBXxJjKK9w7EQ352grjFPcsDxZQiTyGdBQJ64Fz5NL56dCnXZXFXbg",
  "key10": "5CLEBc7QjDZeJmshihBFnSn9WDUCKFoVP7HLTrouj5XuTi9HwzxQo5Dp3m52FnnrXujdnBRqbU8NkrBAdnpfSn95",
  "key11": "2T5cp4MvYkNUg1FiTFwBnpiifNLaj9v3Zqt8tK9cR1kp5HfSYyRjpMndovcpEQcU98eJj7JKojAx364Xi8epwefa",
  "key12": "65CzdadqZvdXWSM7Gnv3q1Ho7MxiG3cAgMgCbBfu9iCtTA1s4tXtVqqR4sGw1cHKF7ULUqmxaK8mBwxMmn4kyR6D",
  "key13": "39NLnDyKpQPRGhiy1nTesqtqGTg1EMm2iUZU3EYqWWjZUHK7CFr6GVwe7HLPUEhyYgTDEw4Hq49D7N4pEqBE2xF6",
  "key14": "2RPcdbZAXiPXph6ridQjEq7A31crHMgDzNdPKDXDdUTZmiDAvN9fSNwUShbJPfWhNxYRS3qznrBAoTtXrZX6qZ7",
  "key15": "5YW3u6T7vLwUUCwCWRNszKhpx4U5DMpnitpCv8vr8mQRq2wWbLjUFvWH3EbMmiR9XbbXh5AsV8hMQ1yyrr677jz4",
  "key16": "2H6CryAG2JN6MrxVCV53LYxHauZdeEYoVnYNPL6mxK6Zzf4mtcrRMkRRwySm2epdGqTzJmzm55F4PZuksd22VDYy",
  "key17": "L8V3nYunMv4NyaiAumb7jnGAoQBP46myJzWsfwjhaNmP98WWYV3M5cFycqtMh5XMd4e44a7ismoB43bGDZHHTSx",
  "key18": "umxvK2o1ytxEaVrhemBQByZgZCdQ8Wj2uLnGn1tGf7w6incwfydCJgJStM1rH7JBVai7BmQTsuYss8ZhNaZSKDW",
  "key19": "3AgU9hDGop4YuT4cKGuMghbCT5Z3XwPMokxiti7YLpyQ4g44Xpbh8QD3BmtK3sdhSek3NoqC1eNA48h7VoLLaFUS",
  "key20": "622MebcT8nLh7upHpdfWgGU8UQanedwqaUkiGyKnr2ZjP5Da25JwDSimg2QRThAB9ztKkYfuR5uAnUyWDbNwVQeX",
  "key21": "b913Er3Ro1FvjZnkun3WbekV6CweaDTC41dsmPCHKFBmW7RRcWV6rAQ345AhvRMpDuzpoDTjApajCSiDhr4EaEs",
  "key22": "3rJzAZD8ZvgCPZ21DRpduUorrMCX7SbGKw81Jkz948RBtdje53b1owP7UcAN2wDFDLcLW9f3iu9tNckZism4wCr",
  "key23": "5Gu3FYDC1iyceqB2KkL5Nb2tAC3tvZZmpigGxMpFUyy3izaDmxoNttGxUJVEAEoS5QV3N91KPCnrCZLSBKHCA5HH",
  "key24": "818e95LGc2UmrzjNKmjVu42494GiKBno6TJuhWoizcHwy4p1bdCaNGDVgfbNuCQP6fvfRUBEqGd86gevmtjudCJ",
  "key25": "4ZopcRcQ4KYJihS6k8NzSvd4JyDRZ3b91mmv9CFF4PmqoZ1jxNRZSRAAjvXaymjDBo1wh91udM9oVnVPm6pYTsxE",
  "key26": "3sNN6H7PAmpWn9Gn6wvfYJmBBhnkUppGmSqt4qS4HSjJuFhvU9QK44JUABet8nndshGQLkV5Yz48L6Tb4Erin4pU",
  "key27": "5EShv456jujZZg6TNPwVj2L6QT7utre4psbdQdQquqSPSbUvqSKokacceUpRUBTkGUDKzyAM92Edmh5UMEgV62xy",
  "key28": "2puSkADGYG6SA2XBhD3PuMmyqsZ8Yiztk8kxzwvWuiJAYGz6M6ctbKWKx28oWP7hsuUFYh78Kt46RzbXZdRxxZ99",
  "key29": "5g7SvjGSG2e7X8FBWcAtVZSgx9855cvGGMdWn7q8Snk5dEGMYoXL2N5zyDfaHuuds8uYMBd6oNkMLKWbdTo89tXV",
  "key30": "7vpnCvM89CRECfHoWeJRK6qpMjVk1srZmtwNvxKe9SwSkByKwxXHYn8QqKJ1mtGhhaw94xbDq8Pq28HSP89HYFV",
  "key31": "4Fi3sJPrWwe8uac2ixJ7kQNTmZZ3NEPAmnTVWKMJXgSTKoZY4kvbMikWnBCuNgG52BabBLLV2yGgZWTrYXm6Lf2c",
  "key32": "4UbhQJAmUuF4eH2tnXtVcKfeUj3XzKo1Y4QPhEXwyDRqb9ZqRLqwxfzAcmJGSUz43xH492vua8D2Z1Sao8zZDQnf",
  "key33": "5kkoTdM9E1STVfE4t1pSe4ymgLo4R6gGDgaSVPEnZngU5q3FReJFDNWcydUVX5ZeCH5urmMBWtnXAd7VWD7or4ea",
  "key34": "2Sa6umdMqxpTqii12QNaab3xCA2fEfCkBexyUGubpJwzpVUSfWXqVPnZnpraSDJhMno6Rmgs5nYags11k3GAoSsN",
  "key35": "2dTPned7499A7EmAU3hAEJANME6BydvLBqrJAL2pAv1TJZGiTcuax5sJbnuiLyq8YZmUsSS9r5jq3ggQZuSaLr53",
  "key36": "5cCFdE3vpWJuYPc9K1QmzrfEfRw4RCsthGd3Fab5K8Mo91LC1MhjwAPfETKjajsXYYQ4nUSfX1KZBXtSKMZv7epQ",
  "key37": "3Nq4zuBQhx3ZjcKQ9kdQwhGJsASaAMer9afS6soyfViaDKg6yRLfFPaETXKr7bQEEhi64dQRAm8c6g8QCm8keZgC",
  "key38": "4qMrcnLmBSrR3UBipdMMiagM2mMr3BAkbadewGR5XrnUpHYU4H5JzMZZAuBzCn1XM61JbUxR8THhKN5RPUtG1xEq",
  "key39": "2NtznCorSkHemn8dbSZoFn7D4YvnNoHGFU9JTW7T8JqkVSuTpvmrnYBp3X9swvCGf6TyMgvHWzdCUhHqY6HJwkHi",
  "key40": "yGJagjfu3NHZujE4gaqWDVBtR8gsxZiy3R9f3FKteJZPNDG2QVDkNs4fHkJpVGbiQtQHUbDr46Co2ZowKjn6mv3",
  "key41": "4aQviyMgoJR73wm4UTy2TDXJ26zQKeLPXBEPxJ8HPSfDox3UAJQh3wZJZMUCW1k2L3CHQRQtT8xSqsWxbxFiT1h3",
  "key42": "4Ho1ovSkzD5oi1bDVPE2sFsqAW3f4uLDNyCrAzfr4mvtSEWfQBUh1crW2ccuPMKfgK9KZHGzkZa1dyL8p9gCZJMc",
  "key43": "2dV3ZiN8T3Jmurenv4xSMjLjGsRNnEF8nk6aE2N3ZxHZZSSUsM6z1a5qG88xzvBZZ5A6xeCHvoZ9XxMueYeFUd2N",
  "key44": "59xter78bH5PPhfZRgTHgFu9pMUsHc8bm3oXJ6a9mZaJj6z6s81qz97FyHKhSQYYRYX13w7ynfzyDEQ7Up2dd72D",
  "key45": "4tMJLXdXDQaorCiTpN3xuwFBJXH9Dgzff4vHkmDva6f1DRxdcHXEcMrRsVhKR7wpf4mf3cwi4YgE8Fa2Sm5q3Exh",
  "key46": "4G9E7pf9TWzEWza1B13VtCKHwZRsNEHgZGBNgWb5msiFeejrxoFKfmyxQoRRafJFuqbqjeqPZUubtD5Jk7cseXq5"
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
