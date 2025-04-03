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
    "5HbxzK94PqZeqLTkeYzXsDpbySX5rsZX4CmM9xWrEvd2LpkTyL8bQT4VJnfWBKrPxZPrEmS1AcR7gg7KpHEGc8VP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QZ5xUHmmYR2wvkzsE49wsmNyNV5HpdVpWqxcNd5fsMhJQcc5zNETfzzkWHPGFjHXmBRjPqF94FEMRXzgUnjio4a",
  "key1": "3QQotrK7Vqjoku7DkGhpPYw9ReitNTUdYH8Rx5yFstaMK1j5R1PHQkGoUtzZa8wHLhRYRN4m6PKUgTdBMpQfm9Kt",
  "key2": "4L11bUSXPEnrdzQEU6HNaaS4yorPZh3Kquo2vqM1kghDiDXtq666wckYS3dDcEqwE9nEBZWuHDVVXtHSD8SBnodJ",
  "key3": "34HxMxxYwo4kopAwCfkRwxY3vvSZKuZSfNoZe6JgjcypwjqfKT7TXXTbr6SZYPTQxCPsx2ZpciSzfsL7ddhpQWc",
  "key4": "5obAc9smnM6zF8ZKBzkTZmLJEgY29Q6crQjxp9raCnasMwPKbEqWhtamGYzoZ5kEKcCESwZvk8ov2YAXjM99Py8B",
  "key5": "4fLHT6uCWpGMPK945kucCd3DPZCRhPZWWYQjBgx9YRis5pxzEoZxCtRTZgL8mHtvTc2cWKa9GevoZbicuzU6nM3K",
  "key6": "4pionnY4M7kDJpnyh96Uq7nsfx5m7zLwkHQKVtYG5akJGXfhSPMHDi4UV1vuyfkv9yD9K5Lb73yagZysutNnkhZ",
  "key7": "2gwUAa1Bwp6ECu41KekoEFf5sdGKMUyBHVdzQS7YopdGr6t5FG1ySPg5H9cJbNSQovvgntmbHhZB1L8ZW3sT4mgu",
  "key8": "4z4yjSKLGS82ZzxAdEZTXLQkjT6g3PBmDCcTGPknDBtF4YNJFq21LQkEvUQMwR21EThFGJf5PdSMDTTMRxdnCwfY",
  "key9": "bc5hvapBTHZ1E6Pgc6h4ragKkvUiH6qh3F5sK3gq1Kd5QQZtK7dCDA9hetDaqSyBuXn6CWC7sbGwSbi4V9MYn1c",
  "key10": "2TcaCG91wX4PMc91RFaefqQB82LB58y7LKrfbjU844zvH5PbPx5K5hCbyQW8pfXeuc4iHJpNqx6BKytVX65z8dnr",
  "key11": "5UxZiP4v9xhdPCNWNiukpuuxAoPjwwkAgtpRQFk8ARtNcSgDSQEq8HbM8R8eyMaKBFPyGjWyEYnJu1AR3m8h1vMh",
  "key12": "4ot8fgieAFxiwL8gbtW66CPiFbhE8MeF7xA6mMwRfH1e67bQNMNhoZUqAgesF6pkGQqvMmas9to9jYaQQXqSA791",
  "key13": "5GamNocRZoy92ykzj9U5tJpLR55uNqwXQqH5vH882gmKi93qdGXN4sUsqqpJbKKvFBSdmk5fTsvSv4btgz7Gzw5s",
  "key14": "3nuwqJ2qbpcM7V1HfjJJ1kWBHHJUPahm3FKoEFLtwkdrxYPGNdpDX4xMTF864xkKTQLEKiPJeE1EbBRqu8K3tjCs",
  "key15": "yjtsBL6kCmJJy8JAxiVJfyWNFqXc9oDUMmfMwunrUh2zEEXE5xY1PWUcqKZoYBrsYf9vv2qSAHaJdHHJxMSnFV8",
  "key16": "2iKPgXHksXyjXZ2X1LioXiEoDzUbcj74BvH5BHvaapsTr7LDJVvgUBhqxzBqqRSRvEGJQMMXJMpQwRWmQ8QZx7US",
  "key17": "25Kw51rJjunkHjKUr1WdKmUpmeNM664Rr5qmgGgbcEGZ7GugraLg6gW4NwbcpsKtfbqvfN7hmsTPMsJsgN94N36m",
  "key18": "5Q7Yi5sn7UKn7BAsaVCSNP75uCV88oBsLaskPicTuS79UayCWUiuP28p3A6M6JehQCn2YLnyvartx1ebMK7BVGnR",
  "key19": "DjwAwesrKDcFLRf2kjdc8pvLUTgKTMPKjLJWvawCojFEq5StcP2dqDffgpFtxZzLqiu63nrPc7mfPHsVhdCYMxp",
  "key20": "5opRF6pW4EDbh1Vjbi1CRTfCbH74S4PAkmc5d6PTvZhFakmF7dQAiCy5h3CADQvTh1c2x79RoRBKPZKtRR75Susi",
  "key21": "53u9fKsqHTrAQ1m4P7TKfJFLyp8UCpCVg58RMrLPSmpe24ctCjBvfeanimPEWaF8UTDmVMinqkmRdP28K4aMJfaK",
  "key22": "3TbCzyed8RT2Ub1SB1rVoQ3fTU5VNnTumyeKrx6BrYdUMNLJqTvCHBbf9EmJEzeixtUdk28FCbpu2msQn21DiEPr",
  "key23": "EzSL2ABmvthY5AZ3tmXs6cACFMavuzrLtBZUYLpynSRJaRieLmEwfzPAhyX1wS56PDhdRRKZm1Aq9kUMnLxRuHL",
  "key24": "5Pa2fLSTvFepy3y2nT1UmsnVonzaJGPyPe1UeZ4XMwK8v4bXEoYavSb5iAtvakYmtgT71enNbqipSJyUMkAis1CC",
  "key25": "53uoZh1sAmrQRTwmxZ5UymKs41BdiGjuSSN9H1Ba4xMdL2dLtq3HYb1H6JVYgammtyU2UqEYavuSQjw5qomuJ4N2",
  "key26": "q9PrPJ69bawDMWDVqQBh6AbrAnvp93G9qU6gbMNHQTc8QSBq6t5oDo9WFrnR1Sawpan6Y1GXhTohioyBRYBqoR7",
  "key27": "3GYGHms8knw8xRVB9wM5TovGgBpPAoPu7rNNJrBgwnsM3mmhMC3jhJSrEqshfLmuqi3VJQjgPtbLywVYE6cYxzX5",
  "key28": "4EKkJrXYk1cZCepy6YewC4o9MNiR2pyHgrT5sERh3hfgkdeuxtcMk4wdVMBPhXWGaT3h3fVyW9JHc7NyiY2Xt4cY",
  "key29": "4ZhUtfNq3rX33zKorVdjoDibuHexyWCxb38Tqg4Mc92EmaLs1bvQuAg9qRihxvYxhbQ9QnwXJjRUnQf7b4aNcKMw",
  "key30": "xqotMkdiJBig3AEiYVmV5s43g3ydhE7fAWbR1zZJqJ9h4pqPPQ4EhtkgXfxDuH2Bwg9N195TSnKn7XyYY9PgdMs",
  "key31": "4zGEPFebgwnGvB5eNLrRNh9mNZ7aUWb7cSST7JebgdXv7MX5UmJb6roeNh43KQxERswpvBAPdw6sWiuzBZepBHdd",
  "key32": "35qdVLxYSA3FUKdyLSGqhTg9vMyJBuDnGEoM9fwABMSJWMAqtxtX9k8JFHNx6AHksZP4M7Rtq3KJhqqBKyi54pEn",
  "key33": "56AHzr8BrhQrZTmomr4UFttg5bVE3mR5mX8sVjL2t1Zvss6bzzdkTAtupeZyNditnc4q7bdditNBTEedCVkZkmJh",
  "key34": "4Gmb8be34UL9K987Fx7P7kFDSogWJpAwNMtJSRpzCiSLwTeXbFNvzjPEAjqVhYF359LArFBC7pEaeC4VDYcJuw6x",
  "key35": "odNLxyctJfJSEMao3YoTr4CFMeh1YKeEE8WPNthri716e6jPVYyAVkZ1TvSXRFauywkTmz4njdK517app58bkU4",
  "key36": "4YTGdh2aUGRRQHiU77ruF6okn1HUjHoJ2fcUZqQTjd7wj78y6XxYkyHuNtZzfoY53zxmNSMuJHZzTahKhNN9mnNG",
  "key37": "4VRBgEW29zYp36ksd6iMCww3fYnbuT9QJhibsQBtVhnEStSFDYzmUSe3wNo5twqHBtXVcPeAXM3sQq4PSzTvyh88",
  "key38": "5ZcpyoeJqqXdTjSX99y42L5NdBEB91ygYwgBNfBCcRmwsin5nGkA5WMJVMo4og6GFN2uMip5izzUjLTnkNdHZCBd",
  "key39": "5S43bQ45r6hXrxTkoCCkvbGSxutg6hhecfrS3DC9iRigDjFBGYsdqtK1mwyPr5Qzs6YUkkXur7gawv4rmrHmrJv1",
  "key40": "2iaDGcd6KnR8hx8xttTTubMMT7ZnhGnyQeiaujQADeX2vQWkBuGqkSHy5mpvsDbWKrbY5BkT3WapJzNsxZNjUwm3",
  "key41": "4vi4HtY1Z787Pa7xizG7Tjj6mAJ2xHvri3eqQ3zn9YDNyKgoHwDAGEZYdvQNoXVNtZVuNZ7JKUoUB1WVxGbUpRLi",
  "key42": "2Hyi5YZPR8CcKCgeXVRLm3U2qA28w3Fs76GeFeVgjyQJ4SqMWwx9VdFfj6BL8NAVjJUjofcxid5sitFJztoSGBTK",
  "key43": "2rstZrHym3kPfPVewtYAeUNWMeBsYjaT9JjNtfTihey71qkmZw7zKuqpcSVwEkve7EYWVdQ6dwmzGwQLCv8K8syD",
  "key44": "53KVbnrjYEsYgp5BXrH9Ur2xXr4tWTGL1td2MEUkeQoDuSZar5wyWJEG6ec6nEkhW9dDxfgah9YeZvAt6QW4FxvQ",
  "key45": "2adCgMFYAwuSB5MavmcMvW5aq4rcr4YKubYYggU2SfeRnA6ZyDPZbyLr2WLd9GzuZk5fs75GTLaLsTtowMi1kYcZ"
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
