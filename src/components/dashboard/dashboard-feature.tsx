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
    "5XLbLLcGy6BqSSuuuRTG38imYroyXEzsNQ5Rcsp7w6YR7wQFpHXfV4VVFdD1Esk1jCu687hsUoYTPXAS6VuTRDC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QBaQxC7uucrSmSfsgHtMLba69tMz43fJ3ZrTG5TeEqZ5hqUUUTP965BBPj9vpUJvJmP7wK5ss8UyjGR7aojLwMg",
  "key1": "5ee5fcmoxqr457xHVERbcW3L62Ne5ERyKsRTH4LWoW53GQQToLWud2rDRHW1SauMFoXq64ep6MbGbULQg8ASGqeW",
  "key2": "5XNWyfavzxLeg7UJssbQUazpKTtRcDGRgFQotrNfhX8BAgcF6vpnv7FVzxRmgvN1ntL4BiWnaDDACD5bBGqh6QES",
  "key3": "5AUMpq1n5PsDPu89SD6maZxEqPybmait6akfnuCSndP5inspJjS75NxST6RUuts1UBXPUb2tcyoYzBZgUriDone9",
  "key4": "3zGbX2JnDuKdzrUWsN6ix19J5qzb2M8qQBqwNmQ8fuLnwMGYmsvxU9tBZ9pKNqjwXxikQFdT4nhr4re8rWWmvTyP",
  "key5": "4M1ayPwd4dFVgT8UbuhkwhvBnxgrBfeani8WB5QkF52cuLmBHCg9kwrS2hcuZBz2D42zPjd7z8ZkNDBkP3G81d3E",
  "key6": "5aY28SgtRDRshZAREXw7NNj1rScaNtE4hBCncdFnceRSyq7S6pg9MNDoFfcmpbbGcAbZFTjNb3gofVpAregKvM1",
  "key7": "SpnbPeTwsSbkmJdDJrjVkX9UoENNXoCfDB1ZbDcrsF2j4ce68cM1FMj9CmQjkyuJGCn9aQnUPF4dzN1QTTjnVaM",
  "key8": "LSY8fpqcUMxFW3r3ZJCyYiRfzu3KgEVbFc8qQABhmjzWtutRyRtcAXDA8scihMPEMg5gj5LUnKND1BDimBMf1Da",
  "key9": "3kBpgpm3MJDHnxEa7dvK7JU21ZLPJZfVnr8ujTdhaWbMRWkokQuA6HZdS1TrGpvVLFjCxJBwKxyhYaihkwKwNTj7",
  "key10": "46AZec9u9EtZ83t43USposQrCLxeH6sjBRtpSu6ZL7cjEVga3CyV6mciE1WFncDAG9RLAYwFEj3vzKkxhF7vStEZ",
  "key11": "McKKoRiVdfGaPctYc34CLPX3X6ZzzB7Ymjpf4Cr9GzSx7AXT7W8GAC4j6kgo3tos4hmotsR2jcKWTfXT2ibDcoF",
  "key12": "522LEwowX1mdHged2BD7m4xuUpX8cLcDEe5hYz6n4YVTnpAoJdjAn5DQaMGocznHYeLrX1tv4oWAGaALpUp1NWJj",
  "key13": "4eayqiq7o5HBSiVhXxgdh8vgLjAWyRVLWGPJLPPEYHkr5jHKL4rj8yPyjHThfGCD35KBa6U4kbh2bArKDbFmmogf",
  "key14": "2hTGx9pKS9EBhAi9WKJVfGh4zLodNCn7EpJcs9aVyZ4JSRdtQt1LSfkcDKkwMvrdFFXsmeyDhdAnv19EtCLXnacs",
  "key15": "4Mnjq4mMT1jYt7Ra2k8gsVMGcTSRKd2Zq3PQhTZ5YrVtMCWGjx5X4wDMP6Kaoanc9CTWyAh3UZ41Td6h97yeHh2j",
  "key16": "3mPEh9VWpQ6YYp7AN8pdHzQLFM7qNRH6icUvNqLeeiscBC3DjVaGw9uG42weGz9Kw5vBEN1YHAyjgg5mCiWYqqFc",
  "key17": "q9SKqGBifncF8s3LP4eQGkbevzwrV1YGmUPumoqgm7rq7eagybrLrCz8WtmdiGeUqcuJs7SdDA2MUwZDDdpnXrG",
  "key18": "5Y48RpBDsp9KpvvVapvKyxWREZifLkR3kgaxEvn3bRGUQwuGhSt6z8Q66REhTtnMf1V4BQAMPQYqkYZngwhhwXvC",
  "key19": "35kD892Dsym8fymuCiKxCiXSv4AsZ2XsDUqynXpA8YNkeFwdYofbSnbkTMHnSDpsJneSadrUDRZbxyZfBmvtU5Hh",
  "key20": "3ojXmZp9XXcZ9jxTeHEU4MRogi2nqDFXcCoX9eZMBNYs2iA4gTEJHuqqjanNGoCELNx6h12Du6zNhjZPauytwS2Q",
  "key21": "3fMYcPF6hFCcPCuFfDvTDJNiW9DCdiTLKqYZn5kwasALYDC7k4JrNhF1QQwaM3CpXESrBkidPAxotoctbsgTMxRs",
  "key22": "idjhYT8VrvEhN5Yef2Jj85vMHntLL5uD4y9g8aDb1j3wjCVoCentQSgmqcr5oSxq79YQHuMhmcjNugP6jnQm49E",
  "key23": "5CYUAVTePQtP4nFXxF59U3GAqvWYtjApXPmeWda873rE3EZxcxeopmXm9Xvz3tnwAN5MDKiqoTNfFxbAkjSjeUuF",
  "key24": "4irTXUUfYWvq2G4XQCfF727XEa8G5371PpoEQ1pkpdxyrMChL9acL4vVvb3EZxZ8bmoEyT4SVQQ2WHX4sGLA1fHk",
  "key25": "3riHmSZJneoxBrR7y4x3rJKBiviBSydvpWxbjkX6DQGwXVnbuiZ8JhbP1BEaJ5XaZXtcUPs9Hdc2FHHs9cF7p2zg",
  "key26": "5oyyGpJoADZ4vDwuYD4qfc2xyt7bUUNftRWQmeqwhq3JSH49tfVAYCAPnwFPx7dG25AUpJZoZ9qUzXJbjdegtvWN",
  "key27": "4SJN8Gk8sAMc8ijQhchg1WLPazoX7Js4ngai91cJGqvvkA8mjpT7eu4N4x2VEB3dzEhbsa4L1CpCvWcGiQTMfTyy",
  "key28": "5ZSpSnnf9G7tpYJQQ1ed4CFiv6scKuHySRvcg98NUpQ3ojzRTML5VJNp5xLsXqPhQCSUYJoiKSX8jS786pjUdgLY",
  "key29": "dP5GuP4Aj3vYgXCHZNsakBAFZs9RdgtZt2uyFB7xTCtcGENJ4jXki8QYZXt9ZX12AHvbyLV7EjRMYs2TWKSEoqm",
  "key30": "4jMwYrq79ZhLx3N3sg4U7kMA2fVHSe7DkR1RdsrAx91B8PLXzwRwhPBVtHvSa37Kg963wPKGi7YhiCxFptKZ6z2C",
  "key31": "4M9gbzeqUWeVT8J6jza62HA8NhzQf89Gcxm6v2CsdcncyH8LUK5tyfMrb5C4npJyqUivdLY8nWfh84J8dibXtFk7",
  "key32": "52xB1M95TcjdKuYK6d2H3wtCEJgdAuruR9moMxUEft5cAQ31DHm5MgLxUEkaELSeesf14TcpdMimNPQqZfsAVvJa",
  "key33": "4E6D74roer1J7wthpiKczApWVdFWMN5b76BLPPfjAdLe9KEYjr19ooLpPTKYCSqFjfNV8duPZAV6gKMomcqDZJky",
  "key34": "2udvqKHFDY7qciiKq2gSsb13YrHQjqZZjUwaeWsZ9oehW4Ln2pomrGSfKB1ufkMCpGQmYuhrGkaiohFHvjxWNWg9"
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
