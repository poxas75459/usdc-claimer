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
    "KT8LRDg78KJrtB45CpGuKVHmiagupqbm9y8YfCLZg4gWQsNonzFdbzz91UVSHimgdqwQQZQ98zNX7Xm4F9LLWd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49K3DHwxDpnEeZL84gpt2MbhF3Cuh8oD9kJ2gsGwVqNoCFHwJccGFxYiRvMXwGna9CPudNBY3dS5jvDMHkEtBoWD",
  "key1": "4kfUcDV4CWYcksiCVGEDK3qLAgrRy6QFotdZsNEJqXrP8FNyVbQt2CPXmzYNc139jq2EGHMNHfcGmzyxKzuY2MzE",
  "key2": "kiAzxSFENhPE524b42ofPzKWAhoqosiynoZuvQQWKr5wUnvxa4QBMEDUuu4sj5iFPavwBMRyXTym2G7zpeqv3fW",
  "key3": "5PrXLKnfJVAGZ7K9fxCJ7B6kW4u5bmFkKMZSvt26e4aYeg8vwaTvwDsMKzj4X6wNWkzQcZ17Qy3tmAmfL9F4oifH",
  "key4": "4w5bc9cgH6VT2re8q7ESjwxARKL97Siu8m9jqkXgTnfNJNPNT6hEGKcbXyEwLJmtc3sS39Ppo4Qx5DyzcpSAvji9",
  "key5": "54ubMBaJPKRcnWC4c4Tdt4m8sr1pKGxscG7WTo6992QcZrTJWRDqGLZM4agRZ5Ju3b1VTXXcAvMwYAQKV1q1DGCE",
  "key6": "331NpXfie7zsmHJCognSopJP4SDGm67uq891rwxhYDg5nUtBsATAzePEXfnCG9qencw54aFRBKArsCihXHrWQMd8",
  "key7": "cJ1pY54ozWWmhuQmzJsfvY9YCdfJRLWRqaDtmYZgrDDy1LTvwqyAktdtwb6FsaoxoW2sNhkeUgjRV2M1tD2fXmw",
  "key8": "4njXuQC1LDvE7KSgTrCANyDqo6harNPnDqATssKAPdgUZYoB4BZsPn1BAYVDiKcNqWgtkyUeDV9YBtp9Fjdt4qbU",
  "key9": "3PCtv7PJ7GALsDECmhtkCy8AoKQ5t2bBBjtei1CPz759K6TupisQFHjAanPkJBR9XX3wEhiZSvNkqoq9SvUxa1yE",
  "key10": "5nHXBkEC7X6DeyQ66U2WyuMsckdLnvAdfQfNyitAetJko52UkxTHqrndx6q1kPj2b82xi8PJjBscYtuzKxy71AL",
  "key11": "2MGgjw5Mu9AqoCLz42Z2ZXUyt8ZUBMC1mkDWuA5sUH82icmEc63UFwyboqBhLEQBcpTgiH2dk5QGjbqKNnk9BSvz",
  "key12": "2Bs4coWE6CtnLDpaopW3TZ3Q6CDNZM4jiFaR9fqGMqhL5TEuKDf5XZc1Xc1XmRM1mzxh57YjNYp1W3PzRRJxLk9R",
  "key13": "4biLY5sjUeetx9WMP1ztzWD8jfFWbw5bhoZfGHXuF2pbaQEM58KpLScbYbiaPXg9M82PtwAiUprMxxxBL1Fjzz3",
  "key14": "3yf2s3VbcwV8qQLhPRj7iJY8dU3c9F6gF9TGoqDdv6o9U1shePeWxjrJhxZNSi4SYeEWQFyJ7qKttJASDzMz8byM",
  "key15": "4izDWWxuWYrxCqsHHTZeFk3zqSj2Xq8owGWK4ChqbG42Z4dvscrwXa2x3jRx6AqKXP4TZJWdBMxAyS937KSo3BWN",
  "key16": "5zTHtxYoaouHQBBrDEEnLavSeT6RXM1tnFbZafPdRUD3miw1PkCr1SLRUcUGBPw2wcBhyesxcj9258nouRSavP8X",
  "key17": "5NdS8KEe11aYs6WgzDqc6kKLwStndALBjgVC3Wk63zwLDEKSTTzf23AhUtLjQfwBebQeu9QowX2YhCjmoADhQPh5",
  "key18": "22EtRbEnvTcR5oP95d8ffRrT5T3zuAmDWzf2oP4TscT23KJpvyA2jZpKn2Q6Z2D6Cqj5eiN7eAimNfKdWqoLRDb4",
  "key19": "FjFnB5x97ykDhWKX9d4r5qGkjCgx7HfrpFqHTrBX8GGpM39W1wxChk5cg4AyXVFcFbsiuJP6gaLH7KBjotLxyUd",
  "key20": "5CnmPbWHDUMY1w6pdCLSxAJ1NRfXM2BGaZjSwVJd3FES1bNxqNQ6cPcaqogZZgYMi6zo1CZauScYEY387mmuyBUs",
  "key21": "21EzA197o3MPCrATSjLP3wkKVjZKwPsrdwM2jd7eVNVHm2X8oin3Ls25EfFdTeJw4gktouYT5Q5K4FsQgwU1DQmT",
  "key22": "JxrhdEWptBES2YFcpB8iJ6bubCQNi1u9tfQSBM7NeGnPw9tGWNHWCs1nQebWYM7yyesLdFDya7mv5cJtLsT3A6b",
  "key23": "4nzMeN8HgFMNve5aHp7tMmq12w7N3kYg1dBwVEdDkJxt9HyrD2wPRUqrtfA3U3hTCkRSh4MC51R4Ts6tS9bgz2Nt",
  "key24": "4bzvGbjaw1qVeBp8rdvn2V3Zrtoq8vT6ZnEp3S1UtsFSHNyAs3jXnRLDiEUVBUWdn1ehVadgdMnwxg9jRUYyk7kX",
  "key25": "228BWt2gRAGwNacrfxvr85dAfA52r7yiZSGg4YXVB97GZRnKhxGe2D3qDvjLHvz4Nywt6sDTq11MRtQvLd7QtUTu",
  "key26": "4TtEMFqYiF68hwrd5SNZ6sMGL3GoNwPeQLNJorA8Ew896xr5mChpmn1Vxne4rAqSvqU4bHU2qETRozs7nGrAndge",
  "key27": "3R2gwMZSneTGh1Vt3VBdwz5osTSHSrXoDyM6G8quPWvHtoscVEieQDJQyBjhM3fUCkBd4EKbtYGMiw9SLmY3Kija",
  "key28": "5L5gwyaWEB1xcCqYgkNxeQNa8zmvkB6F5EB6vbBDjWE43rxghtGR6PN3qvGgW87sXznLEx8rPF5Z7oVG7EoChLpf",
  "key29": "3s1Kzc7iAf7ZYmrXrc3mHHSJWqJYbpWRd2sdX3gUcrC9ninMQedW9bGVFoG4pbuub6iCvD83rQvtmZ2zfGAxk6RQ",
  "key30": "3NHJjrYwStLiTCeAFUEms2J3xRCCjRuQjJVE73qW7CZjA3kmtckDSXUdf3MquGNy1wjGJ5RMTYXYeEzcSC8eUS6W",
  "key31": "5hEPzdG79u5gN2Dwb7SieVhEXVoG6cBa3nmtgneLkQ4ahaNWAfGvMber4vPEdQHYzD3TVahgrenPEc5wYPWEWCdn",
  "key32": "4tLgTEAxzxpx5FcgoH4zt7BYTsM3Kh4y8fNzixvEAdrVQQV9pcspRAvkDs1rvTNge8buBfxSEcNdYX7h5WA7haAz",
  "key33": "5vipQ2CuNXKihPXAiDucHWRPPkqEkGXhvv93SibsGqYhmGV1yrGpnvxorki4ngMQYsYF1dxX3fSbS5DCXmXrtFSg",
  "key34": "zZivjAdNk62ZfzA3QEamJZaKQSRVmVL2J6Ejkv8MqYiA6ReXm2o5VqGxLpeKxY3ybRr3ipbst7R6HnRtago7S1d",
  "key35": "w76vHjNR3tAb9Ki1AfedXPfjn578JY51vmS9i48qjzzoRAkMtSb5CAQ9nom8qB6ELA9RErwgD9BZqrHHvyPNpdU",
  "key36": "2613BH9JfB717HcE4gCqFvEMsXDwGamPN7JrjgrS37fTUhbuZ1u97zZR9HD4ugzcoJz9WGUgpTHxKH12sWnnXxTr",
  "key37": "5GwVH3JqyaV386QVCd3tZz8PrcsjEFx8kRG1a6z3KcTbrsB4fdHXV85iZro7mTThR8PDeMbyRRGKoei7u3z2BWdU",
  "key38": "3vo8PQ7rDfMeJsVhVLyMfZTGGr7t3ZA1Cj5YZADLGPGCrP1CabdNnHtSw9R6ZFUXR3aKxzWu4vZPLwR3UPJMAnbJ",
  "key39": "5ovoAKF7dkZZpaFu52nccQ5sW4QdAs6rnxhSXAFEWNFuesCf8WPTVDrQ3KJRn7z3KPdArSiHv3PwrZ2Ku5d82p4z",
  "key40": "3yzNQPKM4qYVFuSkoJ2f8oWBa3q5Hyr7g9WMFzTfPpJKYRf2KepmKkFC33M71c8XwZYTDRyHZfau3zNSboTnPsGH",
  "key41": "66tLvvayYA8YeKG73wWBzSthuxi9rweUz6JTUGdYv5ZCooon3qVZxtVZ12Um53eouKibxVqkmj7pZiqrUZshWJ32",
  "key42": "4yVsd6BiHeajZVu6JJBo7dDZxRS7m9LqNyGJBHTZaBxtd3brg9G5aeqScsrokomqQRaa82KXotg4Sgzz7tSZkgi"
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
