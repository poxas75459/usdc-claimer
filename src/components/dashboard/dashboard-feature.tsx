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
    "2X6BqeUj24RZia3HAsz56NArA4BtxWorQAxUrc78eM3ZMFN3zRnSiLPdTKPJGERj92vb8WxsMTVkoRdXiH44SMy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TdmAuckjgK4xDq3R2VU1gqqoVgUSELh8feLwerQLj77VzbhoUD6ZweT8ivDFXbmf4xY8CvFYGeyBL2E8XDeRvEY",
  "key1": "49q7FBHqPdmWMvu2uqbxapyfpPFiTSgYXoXbxYAttzv9sJYMKFWJrjtorVQKSwgaxEhhLg7hp7EkQeVyapemSUsi",
  "key2": "SfzDg1yP7qJt2NqtZtvqZjpJFjRVkEY9HcwseBTCaJbLx8rDho9BzXanGNwst7q9rzR8kgt8E68J8CE9aBwPKHo",
  "key3": "3iWRTYcb9vxERPtMzaTiGLcfy1xJc1CadgGzxR8U2r68Pph3EePKkqteiUHdhn5ExSfaFwJVxdDw3AxVmPYCL5Hv",
  "key4": "62MWgTQQn5jtTbtkYW4qiEmih4NZ6tLLKc2g5Ar5XtfMnUnaoJUP82WCHfQna7qAFsvR8QwdvDBxuAFK7LhctrDA",
  "key5": "2bLeiA4ZLLeKu5jpMrue4jApk1FE8u3a5oBZf1AYBeMpc2Kob4ekXE4JGVayAvq7H9RVJdJF1LynK96nEMNEWo1j",
  "key6": "5Yn7vkWSTJgcyExAjbLUx1yB4kdRvj1XVSFDYz4HnYTNLj1TJuHUirgur67tuSNB3FHjxMywzZBmzEUZrPhsjhMN",
  "key7": "28DssrrCwD8nydPDnub8EpRew4dsMa3te6AV5dvqvE5mb4TEZ8mUqgEh7A7SAwwX5z2HDqTPSXpoQQeaYSdavUPR",
  "key8": "2LsJDgRyU8KA8CPAV9qTvBYxtzRidEkp9xonru1BMpoCUd7ntYDBecnpvR34tnNXsdpAXgEfNdpsvzcZEfMk5PgT",
  "key9": "482yML5q4exgyoBS5rzySxJxxciucwefY3msF5T2B4xZSxTHaubRJEqMWvYJeWY99Ss9ESp6dRYcpyQ7cTJFpGZF",
  "key10": "5qqzWBQYWgsp4sMU2Abq9ye3QViBx1VgRwgjPnJgdaKcQdqzqT84svKJ7tDPEFwRVG3jsTPLurAiKqWzDCCn521b",
  "key11": "33Yxf6XaiSVXsqPYFgzX8nzrrzoAEaCzG6b6tNNt1FSMneAUStGg7Hcp96F79z1rz4UtqrMLScNQY4eY1iT4Cd2y",
  "key12": "2Q4iQUReSJQDxFF62QYHdbpBue4xxsSCdotZ9bRAXN8DTKytVTTe6kbFxG9ZPW1rEWf4gkY1HCHiqTj5TupzyoX",
  "key13": "igR3pXig6pSkXBj6VoyBrABaYMh4TcK3ikKPKJXDra68h7dVRnegL6r1UxCbJhYSPXKTeEo4PQpNWbTMFCYB8Az",
  "key14": "A4cpsZpJMYW387smBpAxEAjt7vT1mija57HhExJyQxZLPQ2PrFMpLXi8BhMfPUqSWDqKiiLT9MQ9z53N3Pt2rWJ",
  "key15": "3NytqQehtDtox2BD3GY5Sfj73SuuqiB1h6G4LB3tBkAFfL7pmRcqGedDKgn8hPMNpUtRMoXwqtHe89cqTqmbAoQT",
  "key16": "kwvGx75PE5pCrbSriHZArL4x5mCrtEAh2WQRkwNZUyiT67P7FTimuLGycux27XB4NtMN7Te9ixGDdKSfSA1rui9",
  "key17": "2jvEN7CJtCizQuksMLNBiNMcX56syYMeB6kDtjQDDVq7kx6svPGgv5ZRZH4gaQtUy32cb9H7WQVum4NBe4CHuouv",
  "key18": "3QSnSwNmLDfthMe9e3Wr5KmM2XU6JmUntR3aCSwbtJrKweBhXCh29AgWtqqJ9xXKvRAWb3ngeohEQ8ANNj34FHvk",
  "key19": "3ADXb3oW6tq6uZ3A3723YEbxM6jUWh2NCL8cvn3Db4qR1SEZaxSUgtSbnHULiTJsRXeXD2mxJHrMELTHpAmJx4X6",
  "key20": "61DfD3XkR5tnAPni3f9tpD1ht7crU1V6CSJieMR9WJSpjWZttKU835cssn9ctTvs8nC9kqG2kzn3mALHYQKeccT4",
  "key21": "62fGZ7B3cgRKmWeKbUMPk1YeJSPLAbrABjxKfeucLc1gSv5ckRW4pVuEBKqx5W7EKrVJGoiKJJAtwzmAcyHzHabo",
  "key22": "5aPBB5e3x38bwG9vXfofRNCCPyW7J3MdcyPkwLecNyPCmuCYCJ1JtXYFQqWSq3K6Uti7Pwz86S9U3FGfeG7QrmYA",
  "key23": "21meAPy5gafBWcysv8kfQae8ZYRDZGBnN8BYgerZrvJw1fnzpp2TisybNZFTR5RD6sxdDChFz15ELKxnBkDHNJyJ",
  "key24": "5WQTu4SCAqEAeVCTmRtBbAPFPBooVU9ch2mLaQ2yecRaTfoQhxtUez6SdGRJ1Lk27rgUAajwUUnjMP1kMZRWXzaB",
  "key25": "4zhpbsBBLy1xpvoJSzv6f5m4EkoSQNGMgZLHUSd1HMq4EwU8LNnGztRvUTN5SoAHPkqbquePPMcbXNT1qDF2rtQ9",
  "key26": "4cMi6gavyF8N3hANEiuw4B5ToBcqc1VnTApX8fNyzmXssK8KUaxhMZYVzQdjZTnqAhS8iyJExbNKXRKVyG8BXUHU",
  "key27": "3KVAuq5YXZbpAJiD69kxDTrvcjTbmCMRD8UZWhCqKLoNNLs51zyBRpocK2XHWGgJmoZdMDBRF2cvLhJqT5tP9hRR",
  "key28": "WuketqLQ9Hre38USwvSecoEKGp3GR7gExDXNCkTRbNSzno7iUxj2zJ5YPRxGBBfqEPoxmDtR4SFdjhgqFHvzAPq",
  "key29": "4hamwzz7x2221RFpoqNkeFjS27fsFgcL64eiNW3xT7pqzhBCh1FUk5F5m9VvDiLkYNDyAARDdm6WoQoQzAQi4oYA",
  "key30": "F9gMuKE8A2ugV1hmHqxVnr4dLfSRZH8Etjw2qyjJzPTp7Vg2jKq2ESTfxfKRP96YtRz1xLUxUQi2EwCiUxWkKgZ",
  "key31": "2WjtqUuSJ3b8BVcfZQbfVMPi9yMbApFhXPPaRDUASmUHcQPT3x8ZCPdmhkJAW7DD7nM7Gcfzna3tQt9LRX7a8xtz",
  "key32": "5SbMgG5NzHm8BAEiiNews92YMFJ4uARwJyHxkqNkx5qAMartCTh8pWeeuVcspCAwYKXeFCRcd3Ek8BymYYcZv3uY",
  "key33": "3sPE4GUvPoqxC4uEzXifEW2xmRCA8yWic3TPSyxq9cvSJCL2oorjRYyTtvm9Dxk8jEFw4A2jTfoKA9PPuiSfPAi",
  "key34": "2wrtDeAdvsGL4w6Wdape2CnMnAST6wFW3AB2yUho5Hu9ajzMXSGx2yoJMqVLwDgbzyoUj3JJhqgHDwbPDAR8THSH",
  "key35": "5SeGQMZL7A7WsstKNYFEE6EMbC31PFxDqFpHD55cDev1qE5iKXXd4jWSY36qZZbES5EhUirvXQn4k8aLqEZTCkdi",
  "key36": "3P8GCtmy6qyY1Vy6xAj4r9ziDnYnuMWaGXnZqkGGXVZeGeYoH3yrwj7qMfa5P7XWpkLUHg9s8WQ5WXMMML3kJxMM",
  "key37": "2RsrZc3T5YzHgbVeSWAktSW9DerWjwZViTaPkAsFi7QPEH4LfmJSKsdyLhsL9KHLEnAM6j1KT3PJvi1grQGJhp3s",
  "key38": "T6XuwezmauJBBXbCxC7tFBTQeLQsDDQG12UhiBLiCMdGera3TLHZ4XVsWqE5jRcpvx6RddfQvVe8FMnYRYAzkAE"
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
