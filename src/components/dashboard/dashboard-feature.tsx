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
    "2Z28qEvX4q75Bu2CjU3RaLLTpSaGWDo9BvvF6pw8i4q4BQ4Q8LpsPYYMrFrestAdRNV8aSrbu8CXxm4ikgL9eszs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SjTdE2RCmdbJZagbNWaA4L9c23iQFyi1dXS4FKCZjGC4zF6o47zW8sUuhpGbYwYkJkYpeiaAkatSh5z87zECEgb",
  "key1": "2s7hh9rgcB7c4pvL2eecuBvtqVTwaiZJEWTHFAuPw9ifLCsq1FmVuh8yVRp6Dy9vmSfn66orXuv5uW2Q717HsREu",
  "key2": "3MjTCxJkJVLMjjFvo9Z5A4x6ERoVuDZDH1zfHsv4YJzd2DfEA56opLZhia3cjh5XCxgFzok2PkKk43Vrw6jd5Fec",
  "key3": "3HDyADFRZc7QjVFudbj2xuoLeNX1ktqxczAEthweVzjYWWMA2vr83zoSthX8W2hAm5BoDbESJG9KFM8J3dLhro8M",
  "key4": "4Unig7642QsQoq1ZKxg1sMAsrRsjU9hCgoP2ZsyDaSENQcvjDjs1VdLCv1dS15nYMpV68hkeC8Cj2u4CMZAohAef",
  "key5": "n5NmgWqJnaM1s1Ss8cLrthKkbbNAT4u1e1N8Jg3G6AiRLpAPQT6zDqanUjeg6Pe9fypJP4arn2oT7qLMGaoCmRa",
  "key6": "5mWBSotpUPvTsiv5mhQyUVC8ipcYGDLzNt1ws15duSojLZdxe5BMJLwicA2wi87kms1k3VC9DFFPFUsvd4FSgBp4",
  "key7": "4k6dxHvr6i4k1gv6Fr9qqYmSGDiCHzPG2hCsbHzrNmocorVBuDv4GB9yQ1KZQQ2Fvg1HmaGZXVNZpyDHpAgCMNHd",
  "key8": "2UJCup3iRn4j8S7MAcLVZeoRVudJuYmMDX4qPF9WsSfTikx3CtxArzoePbJ3VecwN8wCV3iEe7Lnx1gUdDaSVZay",
  "key9": "5Nj7GsS1yvnr2QqMyTCBcUTbPin2Qeo2qChvLjA1xgYhE215sA7M5hz2EsvDtoCbLVp3xL5j8mynhvr6VXAXaLBE",
  "key10": "4qc771QPUkkA3Ltmd4EcZMMEJw9n9eFMxXifPUcotAtsdLDk5GcHtWjiKXwbST86nh39anfDnyeTmCrBRoAJbaLr",
  "key11": "5R15quW4cWfz8kc9LKUQenAR6CRz7rAhzy3jWVejudbTuxN5xrrs1BP9x2Kia3XVGdvZHL5xXrMvNhEgrGK9oTVZ",
  "key12": "4vVhfgPZmFqUJPdugP4cN3FN5R2UVjdnzKStQZs99NMUBXPykbBzjhz9wBewKP4j7HFMpgBQYkiXN6ieccQNABUr",
  "key13": "2VFy5EFNvtJ4Bowz7dRDjsdXuaLVwy4nFNjA4k6MdheYQ23YZ5cWFpyyDZavvhdCPyhfNcDjxQmGJrDCqEjGcgHS",
  "key14": "5Ceyq5f3ANse4AjQao5JZHiuRWJRnYFYkm5jSVeCZvDWiXez3uUnmvQvsr74ZmJpNcpfTTHuRcPhLmrvR6dSR34e",
  "key15": "4ccWTdCiPLSe4WqpDQhNsCpaGrykbnuBavM6zc5bECaKTGtfJmXdk9Fct4mfB7yWmwVbL8ht1a6tBLuwWV8RgZo5",
  "key16": "snWL2KrunqCZMtZ9FwuQotAC5gzbAAh85siet9mg3CSX4avtCWXGYJpEYb6tmBdpXyumbKorikASAYXsSHbgYHh",
  "key17": "3hyweEMAD7tD6HTN7KV3pJV9JUBMryrDh2AoZHfwL2TU3Q2JdmgzDY7DCWwKsgcRMMjwoq9q755xCaFwtc64Dxs6",
  "key18": "2hCMUaHdKQTqaoR63zFLD1GUuC8Liu5Mm3KZ9jfUM1iNtJUomtfRiDGj4FkBjsa3D6NEshQ95t5giRT55GbXMjGR",
  "key19": "5pypaNh7rH8vetRQamQx76HCB6FJqJyK3VBpvWJAZKyWjtwG9a8VZ41q2zxp16igjiFADKZb6qn7JYSGo8MtCM8q",
  "key20": "5BkPfbHGBhT3uoqMQUDRGe3kgcn4SeByXSdZMVgv1HCvTW3mySP7QVaCiUMXam163B8hym3eG9vRDWWgKuWo3rH5",
  "key21": "36PkmNiX1qb63ggsouMfq7e4Z24JKCLusknFLjhVJWA4iAfPygXcyZpWRRLkvFgQSNhEeR7aNtvi5FuwQbBNrnTQ",
  "key22": "64xapsNtax8aYoG1TnhW1XyVopi6BJ9UUCyYcswo3RFgLx9PkH9GB1mJ8pkLFeVLHVqhogKQJi1VkDjYULZZJquG",
  "key23": "4QMF86s8aHFtMX5oGqT6Z34GDRUpZYsUS29p1D5GSfRsCWNtcJKtu2HVBX8YaS46eMiDpwDnU1pRozFSU1sSPmE7",
  "key24": "4TQ5xPaSURmYuLTH7WpDwDr61yAk82im1WcnxRREGrnm1Krv4TvhNVJusPFL6xdG8YYQF8exp8ueAPKJqtakAu4J",
  "key25": "3Fq8M7Jjf4JuaciepLCukyUnrQrmg5tuZqNCbsXRJKcBo2E7BGZGtiZwo1QXajQsco6CR6EkqrGEBpe4uPLPzEW"
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
