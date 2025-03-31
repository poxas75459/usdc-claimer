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
    "Wu69MetdZVAttiRrJfBE9jm75ZMt8NKKYSVzLbPkj8GBTMJVAi3KncZkZgQKNTC2de4szUq2JcCvpd9tn7T5QsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49X8BP1ssA2mcxQrwS8WNddcpqNWvFPd8wWdUFLR4WBmBpnEGunFVhSnh2Cdkb8jWdPgA5KZuno2e6z33RC56LPP",
  "key1": "2M8f3KXmeXopV1H2bUupH8hmvN2D4xnJpwD9gBjqsyCdvhmMc2YzCyjkDwwG9Q8wtHor77pxzYSLHXLy5ukfx25a",
  "key2": "faYECaV7qoZzW6NVzsYreLrAoMBTBM9iBjEyUqiPTACthALYvA6Tb4RmexnbYqLHQTcGRPAPw9TqiDr5aebB4o8",
  "key3": "3LoTDi5YRfuqUADCfGhC2zWexiwJQste25V9TPBLD1erYKQQQvjyb2Hvy7CakuAvsx2r1Q24AAgp1xyhgKKCcS4U",
  "key4": "5R4vX2R8MndWrtaPEipGNd4NX2PfDQbcGikgGSbBGV2sDMHNqQrDsKVkqiKF8MXeyhQBiQBqWp3XXyfwzFyfi4gQ",
  "key5": "5NwVNP8UbQ9HJUA5fuUdhZHkUCsv8UAQp8VX9DEg7yQruuotsmGhhLSWKHqQHfyKQ3AUTUyUAav9sE1k7vVfEMgz",
  "key6": "2TVGchPhb2j2vFGiNzXfd6cv8gBHhThyBFF2RD3YH1znNHaUDLkHy3LwTEjB9hysENgupKer4Y2ys5XfdtAvt4Qv",
  "key7": "5nH2w37ctKxvZmsB89htfVJ7aGQDRh3VZfSV6Z2BSRJyKBiJpDdcEFR7jKD2UwpGxJeULJmRkkDeo6ug5XNBcjKj",
  "key8": "3Dtf6JCiS5k1N63TVy5LKvmiWDKHi931yC8ThHsURwQqnSjB7cAZNV7FNWM3PGAoPLKzsa3ZtbxuACjXT6ghaqPC",
  "key9": "29tGQ21WY1QUNNSYtPrQ47axkdFRES6LBnUmmbKTP51jKr88c8LsGKxSHFtpWt757xqdLxQ9o3f3pTGzhKPDo7pK",
  "key10": "3Aj7pfiW2Auvyj3iFDzDSLutGKzskF1HfKms4JkbLs3y5t8MMiqyLLyLfBAAi7GeQqN2VccfzsG3Dx487y3sdDDr",
  "key11": "3BJYExSh2kjjjq7FVBiU9X5jjkK4LcB5YMne1qvT2zGiyx56p49EyQgRFt3w9GLDh4wdwknU1cpzWgctaqQiV7Db",
  "key12": "4u9xrearA6FQ38ajPiDkcoRTb4HiT7T5r1SuQZ17XVXg5ATb7t8yj3mZUQc4qUcg8UXiQjmvVbr8ktHqhu4Q9mF3",
  "key13": "5NBcLp9XxoWfq7wgQUbuFgnMV2YkgLSvM6NL8PcGWTvwjkGWTacJahjgwm6mwTsu7ftYojfcByLtoKvXPsZMDTYy",
  "key14": "2mJHhsY9MPwCizBXEhU6qCqeUcyuWKC7XZ2Rs3RU2oGw5xFYTj4ybQvpb1AjHuuvWvEeQPhR4amMKHKWL5cQrhti",
  "key15": "Tw6ExTVeLjVTufFmtviyBvJGp7TpKkS1zJoYLvqc5evjdw79Bpoh5q3A6sf3SViL1B2hKUSnyrggWYX1LwoSW36",
  "key16": "4feWqSr8Y9GPYqFkCuGhQ2p4wVxu6xxtqyBCASJjk83Cqk2TJzKYUd67seAqv98E2JEYW96QP4tGHafVoFBbJ5u8",
  "key17": "2JWkHumymS8WZEkyXPX1bmWehqoDYAvojP1DrkZpcaQk5yaU2xNLGP7Lz6f8cn9DSgERdsCcxuFnQ1uyUfUKsby7",
  "key18": "5LvjTw3t2zFYqtvFQopWBGfZ99bNhw5Xey11Fz1QgXU4nSTo5NSDVs4LCWajo3hZdBrqMsiTwyvw829Nx2xpvphJ",
  "key19": "2mtfZ1VGnpykX6fouacFYUP3cYT7YfXVeC4gUGn5ak7EcnPDumWfvydbuYk3owmWJu5isjZuFBrHx3soJrw1xTkM",
  "key20": "3PBYouvbnj47J6if9vaeR2dzXRG4QRHfKGLNztRCoWnbytMEzgf5m6sURtmfzwyKKuZMv8EdunPkDScxZKuZJa4f",
  "key21": "27iw7QPFrmqEZaEPQRY8KEU7rJZoceMYpocvioQ5YxwEWXoMsL1u1fKMBQLQC8X9gxxK9tfvK4TdcKWeoA9SNzzd",
  "key22": "2UwpMWbyPezPYkZYZX1KxP5fKDWj5hEzNPfiUTa6JgnHqRoy1mn1h1MJeMszu9RdkbpU3fs4MW26ijj2nFmVRgkF",
  "key23": "2FD8ofLS2x43Pt917U8YwVtE8NfNdb7iMFU7GeKGM6aza5xWKFkSqoFK6bbLggXcpMDCj1pRf5RBcKuY13481DpV",
  "key24": "2Mug5p1piPJtCSDAL8fi3UpWTByHH7NfnbdbVNMx1Th5ggsgsLEMC7wLep8i3FFCn9yJQxRbPwuE6oZPUdH1tZRn",
  "key25": "5mQLuW1NXuiijy8FTN3YJc4YhzfaWF9zsdcZgz9vHCLJDY7xAycYo6eQjDJyEH3bPaq5hFVVSsK7Q6XgRNdL6K8M",
  "key26": "44RCLNRUM5YtjgoSf4AYKYX4TwLKuLfNydn5Pcny4GTJCedn47Jktryjuio14y4AKH8KF2pWRPFB9PF36HLcgpsm",
  "key27": "5Gdcc1UnVUN981FNMGge8s1Mj7BycKQ8zqNLYXzLW9spafJnHbuKf24PL7CeaLt1KfCNB2wLvBjWhrT5pTPNqENg",
  "key28": "3FQ9ELX1xJnmL8Uwu3TujdsGwGYcTxkmYpr7Jq573brpC5kinnmiMWEUE7dw5jnuGH2zU232gQc1Lhjn7qSkNVrF",
  "key29": "E7JUDySrgf1FZ9idcVWoN4Fb9bZmxUW1H1ZBAyNy3mE1QvMYX6g9dGzRA9oAjWtrCnJDHjuWNMGQvuce4HQcTNQ",
  "key30": "56TAAVqTtJFtXcqSF7REAKXbARk3324CDRVSzdPQeYQQHK8aBxrQEUrsP4DWmwGK97eUSVaKBLfGXCp6YghvvkTb",
  "key31": "31q5UaYY6nB8Xhxm1Fu2XJLyFMqzd3vCEyfA8NVfNoB3CyVm7EiCFvk1G58LWG9XEFUyxqucWu69FVv6gFF5S9Sb",
  "key32": "2NfNGFjBQbkn3fRfFrEfNKBbsgo4GPD1vmm7YLFcTkHTGAVRLyzaiauddSiuj3yetZgfaF99iZUehrnyh6EjH5h",
  "key33": "46jnPM8sJSg4t1am8owaXm2ARfczZzbM4WJDaMWa9aFwX3roxH3oadQdPCfX8q4opyiocZby3Y9ukj73ZjEgwPFj",
  "key34": "4w6LgXESQ3WJHAqGEg2TaV8fnc5ujQpPWP5wWyUP2cMvoYz3Lq4tw8vnDTWduPyaiHR2Ugg23QSvbvuHi9SZ7u5u",
  "key35": "4Ys1VM9WiCUCb39dgxsshva2q9RXScJUZ6r6DnD1HiqZTwTKPgrA2kvs9W44TraCFDtCcXLZNs8DCTPMNwuUQv3",
  "key36": "281NuoaZXYGwbZ8BCLVNb7yxXubb2umZp9Z3SkduaNGnEpkGcmUaxYsvEL6M8KhdYQ1yAXFEaASrFQGGkCPdUjoz",
  "key37": "3HnQHxniGNRjQ4m1zV12XW9qP2uWFd7QbfM7u2YGTCsK5mkoJ1wjSsXmNY9tYKY9TjJPPM5hSwtSPswXftukLMtH",
  "key38": "4YRNqRLzpNxrEbg7p166wkCxa3FvpEBvdCsB5jLxDcPd7fhcVpVhuVzRvMcNyN8fQjgDb7iSEm7avbyCAC5bEraT",
  "key39": "5nu8RkPEDqqCcJvHZn9PdEAsxvyBsoDQVPeYBSvcHoDDy69j1da5yT98LDWjUDLi2PySVxHMCWtMytkNRPTFYDeP",
  "key40": "5GrrQvk6sjyj8vhT78BJ7NNvTAGQFev6RC32r8UBgJ9ef5H1dn9rjkGvscyUfcvgLcEeT9XmTtQnY5ADH5ou6hFr"
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
