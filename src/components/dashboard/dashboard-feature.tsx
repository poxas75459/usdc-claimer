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
    "3bDN261CUGZrjgyUJ792TCcpqaoygnDkn3qk9kvjEDPePVQHB1meEBipgWDG9LtZBfrb2hC2Gtun7nDFCpNU7NpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "367Rtb4LeKmMMW67BtjfyQUJowasLEmeZgG958Y42NcDZKQ66MmaTRdiRjMDvwYjSyJB3YtR791gzbQmxd71M4Yo",
  "key1": "2HLyz2bK7bEPnGBx4pfvpDk5mbkoKzVrG8BUBeoctTmTdvVcSh5aQU2HqMgzienC4qmxW88oRFfpdHhUUWjJc9CE",
  "key2": "3FK9U6risiFdUmJ1r3b7qmpriypWw76hcBz3B5UPLqm43JcmZDspcRhnvmSuNwLKbdaTPn9WJP5GwNYNCNDTtSTz",
  "key3": "ZhU96WKijxsjJ94YwAGZtbv35BZ8EpYbMLgfgqzGctnVGkUDeJ6U7Hx8JhRQMQ9PaLz56JJ2MTt4HUiZGET91ZU",
  "key4": "3Nn3b1TN9A3nrnS8X5qCsXbkKwFWwwTm8zqJDSdzuhq3itAvGZW6B2ZdqKY1jLZxioHk4gW8eqm3zibFRZ512XuR",
  "key5": "5tbAqGVPvLSLzFgCnnLvp5EmkAJdiKuEqa25zqTncfqXj7hZ52APs7sUVoRAxyx6xnvDayexBk2hFqtGqRdqunfe",
  "key6": "dxsccNQ36nqBc2uRCE4EqUUJDTmrNU1pVwawXnTipoGspx5HfsJeRX5KHWx8oC3SQNRFrhSGpJWbrVCZg3QTigj",
  "key7": "4b6rUvr2WmhYQ6iLYDhKacAGVSmgaEt1Ny96rSDtCN5FFqgCPCCZAGDdyr8DKhQtJLJoSUjiS8fRhP5KDMoW3MJB",
  "key8": "2VyFAo7xFEsd9tAxuTK5pZSFtKTXF1r4jizLb5g96mWYb1XZ7szztS1kJxQR4cPo9wDVLkzpA6E1W1Woy5nHdBrx",
  "key9": "3QiCEydxnerxwwPUf4kpMvQQwsHqFezsSKFmBPMMAGMzV22TfdxaCnjRd96yZPuHk8F8uw3zrJF7XKN9SHRLqsJ2",
  "key10": "DZ83XmL74NYxtFyr9YufZPiFSFsDBq2WkU2PdfvkAzzTFhbNvBdDDQHqErcobqv7kKK4VwLB772ZxEhHmZ5QYtt",
  "key11": "3MTvWAQ2W1hSvJpeZVFcFEBBAFGV3QbqeGgMqHG7VjYTA2xCrbgnUMbgVcHDhHaHvtaUohh96vr4cnBuB9U8EjaQ",
  "key12": "5kUBApi4KRp6hnHxiwgCvtfMLzGx66gYJHGmU1sPGAVUzAse1CePxqpECnxPToTLbbfVmZ5yxCGK8hqJVAMxQsK1",
  "key13": "4HQ2ypoyEBFXvDbJ5oGa4hXu4WNtzKPwnbs5EXWZDWpP42zJKtzb2YX5ymFE97BKsrz8AXbSTv6WrjzG5BmTyomC",
  "key14": "3mMDeQUD42iznAmb6A8ZtLQdfWJQHoA9hZqHH16u7ErESvKGodJGqpamfGv7wxwG8uTbLM9EVrjpSr7ydb2m12xC",
  "key15": "4jhbV6XDSQsfxFTV9gSSpVuWrNSN99LCSz5MezZKvz6QXmpYkfwGG5X83T5mks5dfWsVt4pwso3Ubbv2BHMgqqwC",
  "key16": "5bKGeEifDmxbMLZVzZryRVUTD773GY2P6u4xu4iAcSdGmn81UjLbcJjQ1BqUuhmDquFoSeEKQwwo6zj8Ai4vTDJx",
  "key17": "5GtbYEoi2fTA4YCpVhmTFeRMNUssBiYB7VnR8SmFXZd2RekXhuUmbfgrNXsVvmTebRCYkXhFDYAnkffAHBWnvnqU",
  "key18": "2Hu1uvgdetqJCrdHrf9hesDarMVuinQmphWhyH332wwvVfgekjVnkA93nfCXRKwENci4ujPB9Mz8Eu2QdaH5SpnF",
  "key19": "3F29RLDy2qJ5gpL53BmEGmnxBwJjr7zLQkBRtZ8VVFmw7nii3Vt4DtBx3jccvps7VBTDiSq3Mh3okQrZjq8mW6LN",
  "key20": "qQwH9RkyxmftJTVLzH73ZbAzHSPmKLfX7cZwCuhUFpvpxGqHPp6c7LZxgVP1nJQnLLnqmryz9DBrJvhxMwVwneH",
  "key21": "mZjzxxuisb679SrWommo1CiEK3LF2kLyQJGErJSft1dHMqYJqWJ7ZcZeN1ZtYnnm8kH257agbHfbbsWLRKtjLMX",
  "key22": "UJtkFCjLQD8aa63fBCgpcgyQfHtonkU629pMsdV1qKZhXSvmNAdm1TpwVsX71TyTpsWF4RyiauZz2GP8FRZHmQd",
  "key23": "2fzfXeKzZu5Ti1HKoUn6CWVBBLNk6b8LZQfoRmgXeEy5hCQcrLJ3SoJS6at8WWPprrY6dB7WWZvoKRq7TPWopTa",
  "key24": "4vEGSdZtxLxTNAPYYncKAgX9s9kbN7e9scjb6RzSpdBZWzPLTooLmeGNb6Bms7QVrMXTzCiiZsyFW6Q5dCM3D2D4",
  "key25": "5KdTNgr553SYzEWw7m1PFTcfTZZBVSvHeXaRWhgPc6BXMX6nPKMCxHWQ6Py5eL1xTRxNnK2yfJ2sWFaHn5RYfmsY",
  "key26": "3onYZoVrrtiRcGXLPen95GEpRdgAQhvoyxPGC76hdpNPyS5rVvFwZJPwiwzHdMPD3fa57wPocCbaVhn4P7c38hB5"
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
