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
    "C4y9VVoP9xKBMLuunzJ65agLhgeUPg8MiXeSGinJWc18C7BfyhEbVSYZJGkCmwq8rtPZmLt2EgTYF9joCEugGy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WDgBM6GazoDGdyYcJZA4yRQUbufMqcrzturxdf3zJokZsSwYDteV8QGviBxuYFRDv5R5msQDmaNoZKDesGKzbkb",
  "key1": "4Yvt68xFiv5SDnPqH8iDmGYm51MekwrXyZeN3L5Zfd3C46QKkTBDG5FZ6DtRyhpgN6QaT8cPKSn9Jz86XZMCfzkz",
  "key2": "4YNUe2UHbVeFCkVRbsT8Jaq34FjNVQg6T5QfYMY3pKaW3Ep6v8HuPGhVTtRgsTt4ZJZU5VPSazmzV5zqmHYdQWku",
  "key3": "66phAjmGm6dDaRWtxDm7C9MFc8eWE839frxfppymCYqk5W9pLDFbhJZ4sBNTMSmy4xaaPTpJ2LRaGo395h44vdX1",
  "key4": "5zbtXGF7jsgWQZYv3a3aDuSsMYaVjMgqovTPnxufZzZWvoj7LTKDaVyqUjHFsf4UW7zsGnhjyxLA36PauFipyd8U",
  "key5": "5Rt4Es66q6smp72vcTwF5EqnYcP99wgAGVamrNwA5FFYRrU55xzMjJ11j595jszNog8HJ8Dn2ReLokS6QLjigR3x",
  "key6": "3cBK3pAsaoYNdKNo8wvyT4dr6yiVbt2XM8vJi5HBWKTtGqGs6JR2cCKtRxvys3LsMTW2D4YnZWAFzrZp5X9zVUzh",
  "key7": "5KXYhi8AHHoWiKP2LV6YdWmoJNkwgXUEyLx6ZtmYMynCKcnvCxyQtVveE6MCvHRXFjMfYqbtHzYfULhgEnaWasnx",
  "key8": "3hyybVsT3CmtF6up5s1dxVroBUeHDtWPLBHeouAq9oMdJP5cPLBwkiqj5E9EFTN7PKx6o5pLV9mEJp6MEUkoTLSy",
  "key9": "59C4wbztSSjZnBApbzYRDGguP1DwdLhsiXMDtPiG3UHoqJzc2kCL9gVWXoNFiz6SkBXyLt3J2YjqtW5QNMnJ1rCq",
  "key10": "5GHgGPoYntovwob13GzQz9S3ZkDjCgLyZpX8V3hKnNkrESQpAgAqSBVLZCcri8VcyTP78TvNgLR2hSZATx3LPACh",
  "key11": "2JuVERKB7ciMttKP6Guf4GpWU75B5JNmxGHoayyund9CF2y5H7Y6Qyvmrub2Moc2Wb6rMLkmtpwfUn5SeGFU6a4K",
  "key12": "5d3bxZEqVpWouxE2LLfHLzDZAEVkgV5uQdstZAwAhxcm9jc47Xn2t3DA5xkrUABH7RtLgLYBaUeL9qkEqrFhteSV",
  "key13": "7mJW19TMU4rcgerinbGtFRtpABEco9QceKqTn1ipdirEj2chLsEeatGri8pYX1TjcjHDocJxPD4UW52ZsJWoQTG",
  "key14": "2hkPdzXa9kKRfRKc75AH9kHhxqeVRRq51ZqmEgD8hZ2uyYoVJ3QtuLGV8X9K1FBLhMfMsNBVsuQ1zM4SNTiPsqAk",
  "key15": "47Ra2otrgWSLNv4WpbTqbHXfw1EPRVjBAmNdDeiMJSpqT65ENTxnEudeCfz1PBjBFrbCJfjNrfc59Qcxh9cBgvPw",
  "key16": "5kC8aNh2zpMDePJNHiMzjafNoZeh3cfLzzizDJ9PGns7N4HauDdJNmHckXuB1RNfafvfhvzSvKex1kCG3JMpyaLn",
  "key17": "55Q2asN5MDsiLbDqe1JuKXuWPPa4sFBwm56GAMPTDnhQBqTDCJ8FvzB3JdJRPRwkkC62Ud4BCW2DF7w4SoTSUF12",
  "key18": "2yxx5pH2WjmbqfstAMcFSTMYQYQTj7cvdxobKv9v49ScCMmg2mccPjVB8QpkTHkW2YfgJqUTHphcgn9JnMHBMSzo",
  "key19": "4DDBvUHMGnKFgNP48pdi8GYLiPWtuE4w3Htj4UTdbuvjtfGSNXXCncLyFtMpSFHYs4STZbcJ62si1MRVrPEsgHMR",
  "key20": "puYR4YqiQ2MawGrMyzbBCRFxnnwkKQJ18bhUfVycknEdEKcorQnPrQcF3Zv93AtYbzwr66WH5q4JjKtuhocn2fs",
  "key21": "5F4gmVwfYJGdPxm5fMioXB6qD7tffT1rebv7nSqrDeKhfHgpc82ur57UJatvhbabsXmQiQ4bzcmE3d6waWiufbfq",
  "key22": "5Q3r4E1Pj3QJt4Nf5oLjpcMmToDDupnM5dWxsuNAR7avAWmdi2S6pXLTesWGzv7aktnQBRbYbGb78DkWNLXgowBo",
  "key23": "2LQFxH5ZECFnj4Y2kig4XFHptGmA2bxZFQQK6drU6sT4oXAThyedNontRHAZmDMmaDCzvXwBJ8S8NAspcRnhL4rY",
  "key24": "5P7ookTya3nz9cxfJiUMWBmsHKWW4jxxpUnmeA5wpW1qNAVqwNXuyU16XJ9GgRriyrXi15aYqMDGMgy2m5GvoMej",
  "key25": "2us3rjA9JDaoZ2pi52VW3nyVAhwYRqtdSC86ddRV6HXZBWvNojcBrNZomxAw1XAUD1EukSFgkesdj9ZvpC655dWq",
  "key26": "5dHEvoSKqwP4mzjwDA5YBMpE1FJY5Urum13ZqeBECZGrpSrDpPoKGd7kW5pXGN1atUpuaHYpWWwUtp36NEa2fDfr",
  "key27": "5FKELNpSuc9YUQcuwwCo92d5EB7rfSjvipj1n769coATSYN4tpkF43auVbZsXT3ZKEkAUGpCPZQemj8LHhNZBBgf",
  "key28": "4ubH9Cr4yR8VcBdp98CZjCFovobQ5mee3ejUHWg9cqYvz5rXrSmkDrE4CdLXheamPBkMriHATGSFupi3wAaZ4dWP",
  "key29": "48Hr4FPzXLM1pqMLov3PRKdyQNgmiG8tnMFNRGs7nTn1qVdLtKDHawJq7VhFCDaz9vdAJHQ4hrg8R5qVPaRmDn91"
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
