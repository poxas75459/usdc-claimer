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
    "2duxBBNHdk5dY2czLwVbxwqqJn6CqPAmCNDeHPrT1VftRmAtbijTQUGx6T8NCgcpTEUKECXjCSjs3uNTZdVW2pA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42y5ar1qyNkN8SoEqRCXwtvLKDRGAAUYgUWBZenvC6TruWEZGHxGJyZB7PmANfsXBpAy7YFbVydnemsCGq83nrpt",
  "key1": "3tn1onDqBpwcJx9ivWHgyCceQRqtXvwzYVuhMXuAERbkkNPPKxrAXUGmjihH4JjT3ve8J99qSa56Gsd2dww54jfx",
  "key2": "2nLtLjw6cWpAUNK1eS1dRCSAKzLibkTKW1nUMXK3SG6HRQiGXAxD9WHfwwNQuD28qva622zUAncjCxpbjDJY92cy",
  "key3": "47ngaA1zuehu4BJZJ3UoHW3tMTvBLdmFtJbshAcWmomEF54vsuZdJovA7FxxhwwhXqdtM6dVogdg31AJ1Zm14EiF",
  "key4": "5ef7NbiDpqDkbrL19kGWgBxQDbmRjypT42Gt4s6Ysu93HTzYM2ujs3dFLsCLsZnXSkiyCAcYmi4RpUh8aR2qBFPe",
  "key5": "TH2rK4RgMPq39iZu3Pvk1qcdMe6dj3VE1HMbttQdN2Yio4wJ5CNAHzGvzFsyc7LbtrsqW1NsaPDHZTe5Ae2tKD4",
  "key6": "p9nVAGvtHzBCMSRqaeDh9moKCykwAkJ6TTAiGZ9PG1HQQUpJ3fFMfs9BM2z4jJ8vFWsfsAs8KbFffGCDeYvC1DR",
  "key7": "4aFq9JanaKBtpHUbb7JmMGcBqehMTqyyWjt9HS4soFrDStAE8DE1f2ACYe7t3RvirBCPfaBfCaTQ4JBTyYztFknc",
  "key8": "3jLXK3b6yAQmeHgAHd4ZqnALHtihgk4Pf2boMM8z9hsE5p4dNX4GnpjLv8SuUBFLbyjkxVpE45u6MdowgFXdTntW",
  "key9": "3G2ZvHJu2Ub5ZBQ9ijgMnSkxd4eT57nC3eaA6HR5Fpwt5VmmU8RVuTJbMEiEw1gJA2XKbiD4SwYYN3N29B6vfDuq",
  "key10": "we3YsWqEeiynZ9Q6a376hc9byz4S3oUekQGAbvR1SMYFJ3552QqvkW9xFj4WMJ2dz4ZJ1tQQNTK7bZgrzvGzyWy",
  "key11": "5vAwngRToA3vK7mtxsyq8EHd3mttgdeZ6reNYSpAxKrZyT1gmCsQJJyAm7oDd7HD4ifc1AQDQT3iKcRUeQBvoJhp",
  "key12": "2E2fyURVdhCJmWoVzqV9LYnwmuhzbsuHAuKPH73L559pgxVTFBGnmtKUkWZYMP7hYD18FnwniHwYtB8j6obK3e64",
  "key13": "5LWxst4fTzhUsKdkSxfWtW5BGtPNomqpmJ4herFYmmpLaQRKtCJuLGzewY2rVpEe2iDueXJ4uJNu9BaywTTLSqnQ",
  "key14": "55opKZo2aZ6Dm6aupnd9SZYjB7i7HWTC5HB7qYH3NzAM6Gx1KSSTTALALcJupjTCHJfssixx9bJY9JgSK5NFkeeN",
  "key15": "28rdkMNWPHhZEjcqa75RD4SA3wrs3CyMZwQW1jS7odCS5QBwjkVXJFU7qbZ5dvXqNLDPGSB43fPbRxcnoRcHfHbc",
  "key16": "xDg7Pbg44nJJhYZT4AkyngxaRK89eDnb9QEEcddxGGWJp6ZQh4QCFJ4hoMapegN88kLLqDgnTK88TCrDYGEB9Zu",
  "key17": "46gQhnswyyXe2hpVBvUWxEMeiquz6nDvAJNxCCxk9hq8QkLs6sb71yRWViG8Mv1t1tif2cvoJRG3WMZw8ttVKWss",
  "key18": "2kSN9UtgkAWMwC2htfAz79a1eXyJSVCzcB3kjYB7Z3MW5kMv4fRqZan2qyLs4XVrmqDxYMLTnjZPnPoJgyr2QQR7",
  "key19": "5MKVAtjz6rd5FWnLC5CNS1NgpydbDyEroP9gwudVr3sBtg7Lt1ZHbqFfu4WYbWteExRUvqXszhpXNVNnunDVZuz4",
  "key20": "3kukoRg3FjXxcSUpmugwp7LzkBKmoxfBeXLVRLXtpFkAnWgn3MrdbxMhAGhqmbvEdEvtSaKKCQZVbYiC6uzPLW9q",
  "key21": "29zzoKmyezqtcMDZg2TSCKyyGb5TbWj7e2Dgt5Xko4PrMu3hgczu7xVjRum6qZyHFDWxGTguVNWWwrDqQtmzj6Xm",
  "key22": "38RzGWFTh9i6M4QggxNNZRTkUA5UY4rntd5YWKk8zKeL4LqE8Lzhnfr8SCMfLo5AFu5gfdZZd2DYU3n4hnkbYrUe",
  "key23": "2357peTeSBJriJPeNbtWJYg9MD8HcyYGm89yjGjM6h45RjGbETWNvhZuprUYNSNELvUcXcPUu2XH4NrkWsVn62jo",
  "key24": "4yyBUvvSx7zXqPSoXKDhUtPMYURotW7YFxg73vEcKcBeT5a21pQyU2q4G6AZ2xAoShqZRurKGi4Mt9wd7ZtCuVcx",
  "key25": "YNSyE5KmYUzLbE7DGostcAstR1VT6ffx1EiDKPX94uLtfj6xdo73ziihpCpTU2qxNKeqsxwQKX3eEnhdY4rMq11",
  "key26": "bSq6rJs7LSguf4LuWkoszJ3uY55bP517H268a46FapesX4Mi7SBpw3QkkSV7x8CJipyZKeTUdzcm6JvVNBUMMJF",
  "key27": "4jieLhdHdqyTCdDCdq7XRt7Y86aWtnPZnBnda87D4M2B3w1p2bhN4b68KVaf78FdsH2GCPhowsoy6SJVewnRmgfz",
  "key28": "2inMkUiGq4j4qsi4rGyDEoVXiKNR5quZ6fgo73Dw2fEPiZ8cuaE2iVKSBZKexe64Cwfwt8YpaJPSLxwQaqruTW3Q",
  "key29": "2GDjzgHhfPvv2kHPCLfQUtzTKMHES9LdWjhzCYrZjAQNPN14QuVZpqyLW41B2CVTd7ZqTdotcuCmoEkM2pkjRDhi",
  "key30": "3iX5qeUz9ffhYRhjKwih7KYDcmP659iFexNrfadU76bP5pZ54Mg66ksbWs8fg7Sz7eDUxwnYEYAJgtdUbch33nL3",
  "key31": "2AWoGJeCXH36kpkiN2WAfLLdcQ24GkbFHKKjz1ktvga56V3Y41w78TvghqzVt8bYmgFPwLdmTK1E4u6YWfRdNVCk",
  "key32": "63a5MHyosUYadfYuKyyfnwNgwnid23SGnFoMreNxDRbDjcez6E6Foqbtc64HqFUErUjiruzMgfbeSBZdJ4d2EzQP",
  "key33": "5a9Q3RjMapVkZVjc1KHsNN26K1MeCGKV1CatZ5ACCFhkQF2yYCP86k4WooytxQP3vfaKaoDUiuPvwAu1MioBW6Qd",
  "key34": "2v9HGXm6XH8JQ3PgHMDWYfoD3upFMnSsv1Vt6WN6R1zvo4XMm4u8vGQdRHdZigFHnHRTHDBBQyQaN15gwcx5a7pT",
  "key35": "3PLvDiLahcBhVFievUKv855EBYdQj9MM328ve3g9YQ1TgTups43nb6MQtzXaEtbUH58mHfFXQr7xFScuw8ANcDzF",
  "key36": "2LwPdFGw9zFTVN8MtYsKRHjiQBtrj5NEiLjDGqAqTh2wJXdGtg4Pw4wVU6uHeBTtZMSAjQ6gepsNR7pe7CdJy2Ad",
  "key37": "2xcMue76UgiDDHXokiwtPJcondS3k6crDDVTVcSGRTqJT9XBwf5eERKJyHR9KHkDvTBcZ1Mtkaq8KyYPw2NAfyFb",
  "key38": "3FWwSpxWTBqUTPP24VrgG2LG2pMPn4eRBUCscaoaURBtoX9S2noyFu9LXGTyGHCcdTsV6oCoNDwgTojrc16VwMLd",
  "key39": "5ErD8ewNvqXCFc6vhaKhmkqqVauDK5LnBEdk46FLKCZkDDe2bnPKmM2x6F5JxpRsS2AiT8VHF2kRwPfjEC5kuBnK",
  "key40": "HojN9Jf4759BLWFGJ4myuRamod1FDfmxE9nnGhddYxyXmEGMh5cPf6diTx6YbtEqaW39EVofFCc8ySfe8TQnpXk"
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
