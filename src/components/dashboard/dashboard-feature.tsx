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
    "4LHmyiQu3yUCunCWnaHTkrNMh5wnvBbK97Gh15dxQW4eVEu91cDa7C1qCpHtw1iRduf74heDEhpA6gLixWk4T6df"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TAsRTFbNAVd34Aw5wBrDsh7PD7ahzpCczmgwz5YDURTcGex5PqtGQaJsjz5tdvT4XdB1easSVLoVRf3jTmgbuY5",
  "key1": "2xuKJHfzhXr41aWNbycEQffahUufSccCoswG9eguEXFCVWvSizSUce1azVSxWfz3DPTJSLVCikpzTk4vz6zkFXHx",
  "key2": "3fCiWd6TGy4p6WZForvos545qs9NuqJcRHyNF13zFjaGnYnxxT5PxmwkoCJCn9aE4CzmHLSwqBDu5gSRCsNauJm8",
  "key3": "4oQTu9u8czvbuhS7rz4ySPPfHP2KJ5nWWHXiZKiPxog8yNWpf5EwAQ7HdssWpJsVD462FwwdecnKGYRzXpiG37Mp",
  "key4": "5ZwmUnpYRvZPG6DNyKyKvRUrQeEyfUVUDF9RGjYPhVHRky6Bd38bNEXhiUe7oxjLy2duYFyfKuCYKjELSdUtb77j",
  "key5": "4XAHg12qXX1Dv4rPn5YEm1bQTcSvfiurwhyiNHpfuLiZsDkXa7xuVFnoRPpZWyNB5sCVux1pSgcHdNVgrJhQz4in",
  "key6": "kL92gkeeFMXjKp7S7KnFDgQXDLTPgv2y84S8xDkZeSEQv2SJmtQyXsDa28xmT6AyBzwyhHRzNd8qydpZae257Sr",
  "key7": "5d5iQ9wue3kwgMQvXWnAW4gHXnkx7onV2DVjzyqNRc2abvWXgqRqDJXHrD4WnNHj8BRqizVii54z3zPC4XTdUx4E",
  "key8": "2f82FTpVS92v8pDFT281Rw8CugsYyF7U1tKT4ScpvGjoNz117eegr7xJvrwHbjELkWXdEmLzosmfbAmpoUFh3mgg",
  "key9": "2Rb6Lrfqqzn4XBXe4J3L3RLHz2uDA7FsgbWzJYeUvBc2iBt5fdj4GJrtRNK59AWzXuSZPqK83eQUjjt2NHjtFWDe",
  "key10": "4CsAzK97YHu7rQXHrNFk6XNAoXYLhG6eRbbfuSMkPUKW4pEaF27jjyB9Se3RAA5jt5g7BnYV3Pgf3eFXc2iNJ7HN",
  "key11": "5Ki6euZrX9E7F14tx4fP627T77kaMSWhpQ7ASYkGeGqeFfawARcdhzmpF2J2q2DBeQvXoBDRbBt1jhcVcvmvYLjT",
  "key12": "3ZUUPxJJ32kpFuNSAf8azjP3owBLhjPGe4NPGLWfRYggfUAeQvg1oZygb7LPSKTwLk4h7kKrRabQL6PfyiJQstKE",
  "key13": "w11bBdQtcEmGRrUFF36pRWTmKbQ8UTY8Hp8U3rptBLBEck4LGzTQeEzXThavkR4x4AeSd2Eo4msjMtgji7LHFGB",
  "key14": "RLE7fPRyMfLTr4u9p8UDwjr7HWdcoumpEs1pZ1EjZSXtJfhtA888sA6R7uQWfB4FXSpVWR7e7E2KJN4ZZTA2tqA",
  "key15": "44zPmUzsgRSo96v3XYH8GSttRYC5nzkTCjb63FMX7SFr62TEfPRgthJWfAjQnKuLzNX2CWnoxopVknUjD2Q3j3Kk",
  "key16": "4u6GizkvS3DaKVVFr1y8ffs2DWYA4Vk3uJ46LybFGw93KM4N8GeRzdudyetq5qod2rk7AKJddWD2aDRYurT5vdA5",
  "key17": "ZoKrQQQnePE9XVaL5kMXd5ZoE5fbV8VCeAogKwuLxC4NCnBnA9s1pmpUiJPzdNWhkmNzRnrGM9tymNLr1PhW5C3",
  "key18": "29kf4HV5XDoM9y7hDLNQB6r2kEQ5aMqRWuC2PNXsfrnhPVHRezpcTEAFmp5Ksxq4azSLkbWcGFKZz5KH9vcZk8Y3",
  "key19": "2GMBMMXPmYV1WrgBmNYwQJTx83zVhoYSDuYySRBF1fv1u1tK9X7iHViZFyfpYpVR8Pu6qsH9mGbCidgFueniKwWD",
  "key20": "2Auscwhf4zrCZTzCpY2ffRSyC9sFBRWJN5BNjJFEBVZgow1Q3gGsSdTsTGhLUEPHicX67NAW3rfTT7M3G8VZ1MYE",
  "key21": "oBiDBngMh77Mei67x1TxL7gH9qRPU6x76h1hPPEhmUc1QJdhdZj87KDzDLzdTE3SC6hSK9TrVDLnTmmX7sMQooP",
  "key22": "4aKPYwXYJX23EWMM9DSG8vrRJF3w7VRZhVhFW6wRXMsK9NBhk5V88yu5X9TZmKYJmA5hFcysHb2tw7f3GsQ2Soue",
  "key23": "4W4BuZiCt7zPfsa1HRj6UoyXeces7PxorBt7Ufm1o6RqxiMjHPacup93nYeHxQicmTa5eQmoTzm9F3SEbLrPLKh2",
  "key24": "5UbW27GM57iR5AMxSCBs1gpfs6XtNLZQyo89a3MBDqcVMiwWsW5ksG2pdkbfs5g82ZQPmxTkjioDoxizv6jDWZLf",
  "key25": "62spAfyr4MbYLHWwCqFroHHpqfMVjvPreT9ZC2bj7GCrLGt7ptPHJDxPd5PWG7Ruc4CHzY9Vr8QRcu5X1FvxKPbU",
  "key26": "4cts3vKBNMiy4ApJAANacTdAVENVHtAC8dtiduQmzNSTzYbwqngNmm9JFFk6o6nn9zouBagozgPUiJCWBt4Az1SH",
  "key27": "465EWuU6wVpq59wPJ2YNCAWeyMZHRuRgQQBuyP6QfUb5bbztoUEkiZJVCGfXj33eU1QgYK9AxAthgPUqsZW9KAEm",
  "key28": "232rRMaiNuC8sw9MoELQGU87w6WoJPZeMQUCfsvspFiWD6mJacawbVesWh9dfJKhskJTi9JHkf3sKW5cKTD7ASfx",
  "key29": "2UsfBpwYy217HxrckfPZ2k3gU8vZnh2ob57ZVMganqs2UnasQHPb988VvqSeiG6Pv99eWe57yTbUn1Z3TVFJsd7y",
  "key30": "4EpQhqEbGJPCUtBFPknxFkJz5sxnd97TyU98EcRJgcm2oWoARjDjXESVoVwwYSY3ED6mkne1RFkpxDiwWSBWQHg4",
  "key31": "4MdfDeNzgLGfWPHg3eujeVHboyYUMTwG7sjprRriWiWfN1cKayyzRMo8D3VioFPCBZRpRQPjqnnQ6ZnTeZL8kk7m",
  "key32": "2Diu8wMX3ypJ1hJBLVZEFJGSDLpxsKPFG3cYkqCCpSs5qUaQWyQghLaNAeJqa2iPpXshZ29KSXPX67ujPaZMceQ1",
  "key33": "5smh1U5yhDDQDaJ3mcHZNRsPgCmHdCzRQb9az34kobk1pptRKQ2HvBG5vuedASBXxxWkDUpTMiKTL2T3bzfrdY9Q"
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
