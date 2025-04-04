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
    "2kYDjKTXf8yKcMJf9EzJcUZNwhH8H3nTUzBw6V1MVKd27mgWRbZFZHDSqhVMPyUFFggyMR93LKhq3v3DBzH1MZM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h1oso6aAjD5osfTSWTBVfs6ctxXkPiBpzYCYpjks2qahfFpJhKQseiz6YYnKoLz6VFwAjb7TqXAsrr4ZT41TFVK",
  "key1": "YTJk8TUSxvaPP9WZhaZLpqjUoTXsdaYysfWX2ccJYVfaXCo8p9sqy33Dxh5yV9ws55UyrS9M5rVsP6knkn2PzA2",
  "key2": "o1mKFriLfQb3HXEcX9JovZUApUZzEsW78EVEo9J8yoQZNUpDPntrT7QkvMc8Y9GoNqRNT3n7a6jLSzPLkCEuWwm",
  "key3": "4Xw1TEfxxqQo1PNpUBcyKfJzPeTHNM24dQ1SMyigMvSN66Fkm3ru2PDJ8ohMpAjdjD8vjf1e5GzaUQC8aMU3mU22",
  "key4": "4GZXsHqC2f2u5wyHLZNEathkpqCK3PYE1v76WQUqdd9TF6xiCRhBbWtE1qtQ56d1iRdAvRxhhyWNe2ZGyWiuQmSP",
  "key5": "5DjVd7XAyVrqiEDX4FgzLRRHA7rz7BqQtW9fh8MgrTCU2oK8tyDNriY8gwQZny5Gec8bNaAKKXm7R9hTFrXuZQTv",
  "key6": "4x8ssVw5x6geboUma5qNNNmHVx26UY81gYb7XBA5uefoqGWgoG5x7WMHWGFHN5vzszmRw5SmU77pBmT5o3rfuk36",
  "key7": "GqnzFgd8219qS4gA4nEAKhGQmXfhcpVH1FKsQUHTS8osxGMEernrnx1bfFdYs5MHefQCzDScAgkUbwB7tci9fMN",
  "key8": "3Aqgqqx6oVABnns95ndujfwBt1cC3Tg4fc4Ak13g7C3X5KDctzqpFjLmHhiwEQYCpVeMoTtjrxJ1usR85noEiqq4",
  "key9": "crwtiTkwMMiciV59ew9bJqPSi1mh71WNQN97ENKrpB2bWwSKDNGQAKYVA5DHVpMVm7xtpTvReygHfq2he3jDysE",
  "key10": "2QqHoDkpVRghi9iu6jvHVLVaanSdRtjvtG5jeNZnVodML1rhPtLGjRsvug7rncKXuvxMXjz2zjdYgSSmPE9abeJU",
  "key11": "5UQDeLhRLs2kzP9YPvBaEWd1s6uo4j2ZFngaSh9bPXpEL47qrvEKt1vcsnDCMtzVViyhqMo71n3vioFeCeZ892B8",
  "key12": "52cS2uYa1eGfzgkNP9tdeZyGtaYVcLAmiGN2YBk1akLfJYVvxu8ExGKBFnknB8v6C6DU3BJkMPw1ga7Hz4RwwXXd",
  "key13": "3TzAsjPhw16bhKmfg5ayBqV2U5EYtwiWwwAjLyjfUYPqpqa8Pby2S8MQQnQji4qJHFXQsHAQVCi6awioHXu8enFy",
  "key14": "e3saCgnZJBbVAmhVwZnerJhCr3XxH7Mja5RkfQSEqGTv9zD3egyM5hP64pCMV175SottTepCsQRf7ShJYvznWBe",
  "key15": "2eFYgZWKeNcYsdF324mxkXbN4thHM2i4i1ygJvnxwzzHHz7pRq4xWvamMVRRAZj7ywYFd4dWMpnQ7Esnz3D5YGYL",
  "key16": "3J3yi6FxDKRP9enVZgMsRfdeSdcXrs6Ae6WMEKBQXUQ4mo6mf856isgCSHY9bqorbyvpt5ZsG6DVBWK37QKqVRoy",
  "key17": "fUoPcHNG52gtxMFHY8FStNUfqwrxA8x76uRC2ChC1VNNd2DPd5cFR6uAouvZApfjKKqiu1ZmFJHsfrHL71ecMv5",
  "key18": "14o29HyKZAC6DBw65uyDak187PimR4Lufabr75PQm1HgKqoFprKeNrYYpCeQFL8kTBpH2r17wf5RbCpoo4qwLfk",
  "key19": "3NestBX2xrHpT9i5vHUEEHC3GHFsSbhaHCRDskuU7Uw3s6U73GZTBTrFfL843SjvHBNPcPRYAfH1q6hC4hc7FDC5",
  "key20": "67NVfDkfc49xQ6L2vD4mABqWpSQq3iySiehHgKiLsS77GUwyPWyWBUfxk6zUFmJEGHTZfYnQ1UMVGhzgxnNtzxhf",
  "key21": "5z5dAVGaJVjdbWbivEJnHsZz17s3X2WoNiCNjYbbLWJe32hPFJhpQfjxpUoRpNhgnScJo3unkmybJkXB6RQseEj3",
  "key22": "cTMjbtXLrb4frmZfhdomdfw3spvTJ1RQYLJdqwMCW2y3K7U7dwUqfNCGRt7uCmaRKF9xJWA5SWjAxMshxAueH6z",
  "key23": "2niehFMbYZppxZ3x2PXLcKGCu657jjasp1KUaBceDEevsXprQk1kSzSXmobLJpRNhKoz1sNCSbvD6N6B4tj2rZEK",
  "key24": "5evHhryy2wbZ4Evk7gS6bFYtcsJg9Yf6PKju8ehxENQayAgJSF4gDWEdsbtaAgggFyXmGdgTiGzEpWnVroVM95G",
  "key25": "3XpmQuD4cLZRRbG6XWV4myiymYWkeVvb1oyCymmVSXknxtq4fDBwrwKdk8JPfYWcEQnCkQh9F7efwzgXDf9xkT5W",
  "key26": "5mpfJC1GSHoXWGwQC5sTDF1ssumjH5Q7p27E4axsbqBdWAU7XbF6gwJk4PgYCA4iRCJDuAcZ6Di7eLb1ZscWdb6s",
  "key27": "2yHxRgCp1Zh6cvZvNcCE486uSX3Ay5zYVJidy8BcG8myi1SixzRvCgqwhriFnqxqDdJVrQhMAvnCuUnsf435d3xT",
  "key28": "5EBpLMDWW9yKxSvCvbmg4EJ5M8zLmFUSu8LYm4pDae7PYkJ1jBZovPiVTf3xYU6B1y4oJ7bK7i2k7Enm9WGrksSZ",
  "key29": "5RmkECnLuDdqwHmfxoPm1vz499Fbz3WHYPFGGGfERXkdTU6aAStV2qmLz4sESbW6eaVg8aBUfcbjhot1HdyMX926",
  "key30": "ybdKTp4HwPXCYUi1Da3eBRzmkhunrHVP4uU9FGJAhCf2rEz8Ep5QzWSxMXhbZazY9mFELKdxD7mBJSJrcYsehrt"
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
