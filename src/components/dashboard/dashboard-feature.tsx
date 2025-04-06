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
    "5P3yUZjcQM7pP7vGwFnJfxK7ckqDST8RAb6NsPhfivg9gGXLoTACk1MnTqUMEnfEkxDxv3wRcBYM19zMxipSgrKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eDMnEuFBE3gNeT1XskefVNmeiSRZkqz2Xiei4e1WuAqsd6tcMW9wFGREMAxJ27MkXnKszHfE3ZEeVWo5yn7Fv4T",
  "key1": "3EuyD1ENkHNpcZ1cM4enjzS7DCPnKM7TtPA7wZb1Cgwg31zUYFsMznapD6c7775ju3MCchR46MNYs9DWkiDp7GsS",
  "key2": "4uUn2KR3YBgyZBNr2W96TFszXfsY7FTfyrffTgW8WQ21uVJrrairkAkZo9ygjC7sAm4ymY7ZQQogezqqvNxKmwJz",
  "key3": "3FPtUAjkebyRZX8htJVYPhUiiGa9ZZxKwXbTCzznjwMjSEgDZzs9vaJ1TmUxHq3h4EG3o1Td2kQDxcBsSjWEDu1t",
  "key4": "3UmPYeAi3JeDKtN9d47XjuzfZUSGAg2nDd6fLwjaVbHDg7P5fB4kUjzVwTnpw6WCwAx9JfwF2MQmVTfRS43mEaSt",
  "key5": "GPL84e1Qfw33L7bq9CKZ2Ke3f8dNs5xQNYLBKSVUVVWMz1YAdSudzUnmWXHwAx4EAqyVMNSHvFjpJrT2Y539cEw",
  "key6": "cmvyvpGb7Bb1bB7szcvrhRQfP5D48QSgJnnk6Yy3kzfWmczy2FmNsn5yf3hSYSvJPp2XCuwwSMNn4sgptPSgC3g",
  "key7": "5rXSNqS7qMvG4bB6fJsVsDzXLzSJ8cMc6JVhxsDhHpTQcQvPMoQ18VTsHYRo1dZHRbPx6DNG19rAxaqZV29nNQCt",
  "key8": "3QcvgFPSp1DUi78jFAJLqoaSH3gMf3VxJmEj3qFYtNhH7dYt6CRP7C1c9pcZGShymoH1cu8EukSYwdDxc9toeGB",
  "key9": "59wbYkitExxmbMkZjJoafRLXvuTMT6iNxGrbqnSXV6eEMxuoCrdo4RoHLeoHoMfDoMG1RQRyiybhmZHfTCEBFrRr",
  "key10": "5bu5NyVTY8et2gnb3qtGC2KFqErWLjuqsJdmVaCH8SiE8f6MEXRBw4GS9NSJTLWWBQTS7P78DJq1nAb53BzcZKmR",
  "key11": "FpTMtQLW4sxEeGBPhqPvT1Tt61aJAR4ZzgQ28tdRW4MhJYZD5i9A9sodjzXSYbJ6tuMCHR3EbydJmxo1CRkKHd7",
  "key12": "5HqSnVPfLLwYkT9MNtE4xfAebAAQAsWvUmqh45CBK2dwAq14YXeKoc8DqXUpYbjspBtGhRZjPFVq3KB1EkkKsFp",
  "key13": "3btHUmRu7eu9gM8nkMjdJubTGPS3goamWiTHggDmMtJPkre3M72k1pqpjddHkXBFPsj9yRMxg4TeZ63B2YaocmZB",
  "key14": "5sEKyxSFvw3Sp4Jwh1tQVkqHeaYVRCR9LkCs6yFdFQXvVVnEzSatjVLjXbeJcvAPEtr34FDdNNHoWZg4GqMnGLCZ",
  "key15": "2pK9D48JJqStVzRcLrwvVbDjN6bMsLaRenQP4YXgmLe5jzm9dyPu9MUPXKwrYjcSXf57cjTaxZ5jvoqtanz8e2ox",
  "key16": "3bKnA2BuyCskKCa4mA1tKJtaxmMs6dCuLvZZ1JS2ytGmLCuVFEYjaw8a65NRPVfXJSp4MP5tUpu2g9mCyb9YJZye",
  "key17": "3VS1Aj3jAqq8BgRKLA9D5XoYUUmYwz2Sy6jzAH8Ez1uxgXxAtMbchuMNsiv3jyptSgQbd1d1zFoKmi2X7jn8GvTe",
  "key18": "3xZr8fPAecajWHkafiQejGGWbT2iyjUHtY29ryA8eh9pdndgLzzzcL5WnutHez34TDDURHpKjE2vLi9ujum25buT",
  "key19": "8ogj4CpuctNSeaPoB1D7xoFdnvsYBEvRnK35GidS3YyVHBJsxPvsLtKd2SXboUV8pLfDgUn5yj9ujgeEwuPq2pb",
  "key20": "5P5fw5EBKAL5wPmjjjDYKhpguvL431BoMc5RD49KMmP3Q7g9nFQDmszP5yyPQ3L7gDfZ5Ty9zByU9EQ5dBMgG1Aa",
  "key21": "wJtzCZrDSsRwjXLp7JRmW7YF4Ku7BDutLac423e9bE8WoKns4K8UYoVqRj7aSyDH5fk8m7GPiUsYZDNF6KMNMPp",
  "key22": "4boddRDaEXgwSkQVXqXQVioi9VB1gEceD9bT1bKp8boaxNkRWt3x7y3nsn1UEhHoPuULYProZc5AkyUKyNaQ46zw",
  "key23": "3RLvmp1VSmGxFZRe5ZkUVEQy1wwSwuqoQ1MFwsu12AdbSqmC7CpqdBhXH6u9XEJpeAxKu1cCdeV9qfa4DHU7Lt8J",
  "key24": "4SJqHpQ6yDniewFzzU48n5zKfhHjdypUCAboajcFQZPcPbt4okmbJxa3xxeMXKgePqHR385WWZe2P2ZpQiVviVJ5",
  "key25": "5YPMZzHQhh1fEuisjJoNTDhYVpqzC56adhz4Uv6okCEYCfh1aqUEX8H2HrwwkCP9KxfXVXyzcd9ZAHv2PGUoDq1c",
  "key26": "54xFMx6VQEathYsWWdDqKYzzXZ7uJAPCeS4xuaSFFN5p6HbSGJZYqGrNBGQgEWHkrjbspw6Dxh3Q4523ReJvmsXz",
  "key27": "5im1WetshvHkr9mPiMP5h1cCRd5gXhZ9DJ4L6XEJvMXu7pqKZpa2ndcZKG8TquyiANQxGFT7MMioyV3AqJkZQZVi",
  "key28": "5uHyF7Q1CKq1XeS9xhuLtxSGk31Gdaw56fex7NZoGbzzYtedBmFbxVVaC2c9TJ5RGMTCxcjmwzvmT4Ut7d2cymZm",
  "key29": "2DLuB9xe4ALigsQCi1vfaAcadtSdD1guAqonr7RwhVF2L4jfgBE3X42mNRTWUmeVnyVWukGin2KNPjYops7xg7hG",
  "key30": "P6uSkLtDD2MGweuHg81ye3QnkBfQfHVdK1K76HsWeeX5uyr5aYjNjyQjxijW6nUNdfMK3hsJsbTrynQJijYx3dr",
  "key31": "4St71rtvFCaRT6HYBsFSFXCtntedyRtuk4wEWeyPc876Xo3oaqGoyEoCXYeKKmt8YF8dfQd6sTGjfW2qyBtYdVtX",
  "key32": "5vJMwygHRgjMMqYbXxKGNK1mxB7UWb4eb551Q1aJYEUfDhPp3JfufHY7nkaP5noV9BnTqdv3SQmfDnScQSzS6x12",
  "key33": "EPhgEztxZj18LEtuDv82XpccqhSpsrP6iT4joYRd1KZiPnstkLKARS2q3bUQ829ymbJHCSuffJrjyAxmL6wfeXV",
  "key34": "4cKynhjXL96mvgofUwgXgZhrVtz83a8dJwAQruYSs8LVG5PVKmUAfKehdyomD1NHptabuy1r53XcxWYAGGQp81Zj",
  "key35": "kbaVg63mPp1CPfzpjgbnyx2JURTUB1r1eNDn1odUppWZHbd4vwE6VErkX5giGHgexA1yiJ4k7UWQ5eWgBHXXaiC"
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
