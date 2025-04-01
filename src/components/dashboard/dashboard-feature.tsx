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
    "A6AssPHFEsXdLhQCLQijVNTw3wYt72rDN59jYKZykCo5Wuy6b676tWEb4QMcHusaEZrMJbc6Y6TrNn27iLfZoQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bGJpnNQsWQKqXWjhJpYYrXiicMSaDRqs3eqfa5uEdzU13gZEizzLsv4FiUW5PKRUFW5PfRLbUcw4JBSpv6QDPiF",
  "key1": "39oQ19xx785iQ7QX9NFn9YqTwBjwCHZDNaKJWSvCRMnXNBNqjZjnaDKiJwvzub5hHbFEPaPDsnuEgG9YQigCfU1P",
  "key2": "5TYbyTXnravTw4HhqRXw3PmaUg7SMuAf8tcctNrUparE6Rum51kQhsA5PmSPkCHSCws8i1MTNL2KQHQzWUTJfThG",
  "key3": "3sE2Gapt7xqW95PsiRcwB5zWdJWoWR6SbhZLmWc3rwMzTF2L3c4ygoKtzQ94KookRsXgKhprjrMeG7X3kywjujWR",
  "key4": "En6zRB2z6eT5TxHvb7xBe5QdBDk7GbCRtsbFjva9CWhy5s5qqGmYkR71Fwq3bBfRTcDCbFdrPRb8yjg7B6y9MJy",
  "key5": "3J51YMXkNDBMB8mw6wneWYd3MiVFkst9Yjnc17GvQqfRxktw3ZE4Ek1gHzMiVmmdSzLSr1DtRM5B2wJXGi4DkZht",
  "key6": "4EJywdLmZtEdiWQEbYZBdKEFDyuVA9xu8r7FrkDWsezfsYYxE1b1LgBNPjoS2mWnkkJ8vu6B4TVy8VR9aHKP8gNS",
  "key7": "4jNu73KZuqBdCcHLYYMFnxEc6VtrJ4nLj9tUcJnuCHUMTosA7z7RT85e3M4pFRRPbq7kUmp1X9MuaXQXH4VU4aDs",
  "key8": "4PtX88dLVHtvmHm6tpMSpqhajCU2sxNrnEv9fpyePrkrVGaKeTaR4Yk5fZA7ZVmvCh2YHCJ9iyyE9uc3je12gCua",
  "key9": "5t15WCVasG8qpCQxzZEXU9WzMte3dRcVFheoJGWJpxx3M9ivDc7NWTRziWyrW6E13tJsyY8mToTGusKTvBNtxtCU",
  "key10": "2yAHySpomdFLPZmhB39BpuKxb2LWgi7wJkUV9cQpKzyM6jPZbcjQdV9qexcbdaXQwdYaTpE1paXbY3WmizK9LDKW",
  "key11": "2T4TTFD2wpGAok2FE8NughfqSefhkfkFnCbBftEKuZpepfe9Kv2LwuJMP5LS5dqMnHHL6WC8fFqNK35MphghJXjJ",
  "key12": "37q9b9hYjtP2Ts9ix8BWuxeYzY1yoV7ojDpi5U4mdc5X2E2bRSjZvyv7CRMpjURFMq5nhugbhcFqdiQW5AwpT38i",
  "key13": "5KJvdKRmn5Q9a2y8qHg8byhLW41a9fJURwpMF7TqewExbtdwdhJrMUSNx2F2fZCKbcMjGfC1pm2iELTvNty7EjCR",
  "key14": "3k5Mgtuc2sK3cVMDQJAc92j6FJCvwpQoLyragkcrz3cHHWd7SJSLKWQi4xy1DuiSeAXhSQjKqiaw4VCpE7qi5FaN",
  "key15": "4REpQwB8XFVyCVTciUZFjPfPmD7PXtWD4BvJunvbRpjuBnnsS7DdGBZhN52nQpKjsNahpDWkewYYnYESCCNxuUVy",
  "key16": "3j4ZvzvyyVZwEjMZgbjTQS8d9QxhD83CpZb19onZexYUEnP5x5KECicWim6JV7JwdMM48yApEGC2pdyCZXqQnGnM",
  "key17": "2KxCnZXFETZFmU1SbnbgTjZAD6yq25MPVvkgXzxFcqKpdXetw8Kq3cXnYhX56MuEAQ9SXEsWTAXajhKTpxxvfGDp",
  "key18": "5ZDLueyiCt7QYYxNW22Xc2D2yv4exwCTcpKbACcs6BgaqnckEtx7usJyL3GvMmEosrb39D5pKoQCNwEYiSVhHXXT",
  "key19": "2iNt14ytqfdhA5tEovGMDRYP4iXZ6y6c3WaEfKddcspCMupamDZXcFEiNuhbEkmvRiCeGhkavhdTsx1KZgkvtmwK",
  "key20": "5A5WcMJYZa1PWRFAtAHZEt2yE1EZ5vVRTPoQAuKtg22KftnCue5aCkNre6LXkb2oHvc7Tkt12MXW3qRQqkcxZcqF",
  "key21": "2nFwdfRYxihcWKbfkLwaWs4k8pLmeDtK8ksufWyfq6rCSYfCCzVaupp3WMGMNb5vbDjvoz4wRXwBZmbhndheGfuD",
  "key22": "2a4e9c9utRxivbmPKuuHCePtqeyvunX4dQWYJUxEmPNjozxhKLEz7Pvg1GyBkKwscGuCgEsTgT7AAK5cJCZT5cHx",
  "key23": "3o5ogxfdbWe4eeeQbGz7iJmhncMQJQyTqUfiVMT1V6CELsVHLLv3YRiaKABGPiDe3EuqWks5Yq43ZkqhwWJuyLiD",
  "key24": "5DAE9uhnZgercYUfi7Ay8MUbtYMRGA7J8F7MFvcq37KHAJjC5b4Hsb82Ub28xJe4jman7r3JvBrDkr2MkSU2bait",
  "key25": "4D3M8ZSQ7igx2T98VGnQAgfMip4bszMrTQG63msJMMxT53K3ZAGsWUSu7HeF9qWpuMj77QYWhhPawehaEFZfVaSB",
  "key26": "4b1ioN2Mo3C6Gs3bpJmyqUcPow5raXEYrE73KSqAxWQuoEUyUjkgkMerSn8y6bihf9xYtSJrZxN6nwmnYbdtf9hf",
  "key27": "ZaUDn9LUbbWTaAgNHPFLBU8ZmBcfSbczHqhJxY8DKBaenR9aWa1NEQy6uxRKyYnHM755BasYLH9CNhprJJCRPtj",
  "key28": "2evb94Gtnkv9h56tEfVf4MC2vgnfFgpJLZSGpGg2EqPXY3TadqZyR96RynfkpoJFwBhdiK2UsLAtpZJqaFKcnkkq",
  "key29": "358kgRcQncc1XQtiWF6j1Y4XRLxYA48NTWuGs4wDruUyZDp2c7nDGP5B8QfwtbSLrBjne6yLimB9XAH5CDHthThZ",
  "key30": "7entVaQs5uhCifFLDWhjGrrZDe28qu9ffvWdTbt6rgBJ4QMWwGML4ZaYwerNCqGFbSri1A64NGHo7pEfHNb7Znn",
  "key31": "3EmBCqQ1FzFc3cbdWyDEWRbhDkbPBbNLNZQpFbajix3FUMLWeKksGLdhFpNsykjCPVprkRSno6cFVHrTntnUih1e",
  "key32": "47R637wteNgWtrbjJBo9DWd1XJhicBngFj1w2Nhd6ao8EDDyPF7BU8Q4GoXmF2jms8zpb97zHhBQLfXo8w16z7Gf",
  "key33": "5e99x5e599rRpm3jrurrbC9eCXB1Xsmv6GLVSnpD8JuVKcvaPRXWH4saaUugD9JDq3SucTczb5N6aUBYvk65ceMu",
  "key34": "ChwFNm7UsTnCAWkiQ4p57uMqH6qiEML8TEDCN52zXeuetpFF7VwYiPDK5FBis5sgHLTb6dF7ScjRR38wyKLaJrk",
  "key35": "3jTXF62xngcn59KgK35mbTKKbALdgDHLAzPzAkmSRobzP64mnps9nHPNNtfNPnYLWpSTtU1w58gVBRiXCE4U4gqx",
  "key36": "2DH5BhfdUdzvnh4khkXYLfiE2BmT9yKvgRQD7LRVmcP49kisxpeCE2RWJGdPkWL6CQUE5tnfhRGzS3E4dG5bd8k7",
  "key37": "43fnheGfFcLEUX5RUUQE5iLQRLAD4kpTiht3Z71VNnX1ogofDSuabTv1PtmP9D98fT7dhydXFEnTT5VHPWeP4GX1"
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
