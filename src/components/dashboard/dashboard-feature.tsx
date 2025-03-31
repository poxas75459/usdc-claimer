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
    "ghMXMgna9EXvZkymhsBQWo5RJcHPbFM3j8jmAPFkLosfK1VFgcK29j2U95JmaLqmW1YANiAM3L1teZpoD5jpC2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cdNHq3QYswE3aJjfkc7rvCCXKZWRfryXctmBkZUZNzYcmyv7iePNiKqem7vVpHwievD6bLn5TJEq6DcGmTcguui",
  "key1": "3Tbx4SNNZA8qhCQJHiTxLmkgvhYyDzS5hyBGuWK72ySBrSCnh7NjJhTU27S6wzEgWUx62EHXC67RLiJDQasKzRnj",
  "key2": "53LDQmCnaqxZRDkK6wysPA2y7RuHkC3jFa1ibg3hnYGvWHfUErxhhhTzBYBfbhQjUseAdQvRm3uPSQjDcKzKNLpZ",
  "key3": "w1LkxBtqphfmbmrwEc5SeBQJ2iJCV8jV3h92CzTjT9fpXEFrEQQVB5c1qQifBsPKobgCm4y7DsYEdwwtVB4EgZU",
  "key4": "29QsjPWyWvqVjqTmaGWMaHiUGHmZh9M3PJKscfHfw3zRP3HBPz9Ba6xBNYG7rDi451Twto4RFpXqNxcHNJ1XFSc5",
  "key5": "4iVFiL8opeJFkiwMY1JjTwWHKFZvXiHNHW4hyaLpL9e8VURkCqLnF3UJzPtkafY6q7eMj2BTmXBugort8B9n6Jh9",
  "key6": "53iS3TAh6QQzX9yuW4v9QB63cLdBQdQukQtvekCaciA3LLR8iyHQmtxqynmxxQxhWcKLM39RxVTRNYsZsss7L9TK",
  "key7": "5G79W3zj4GhsUyFZLwUgWuvFw4j6t82SLTQpp5m3Ng3U18JhGk1g58Je6KNdbcwb9HkwuqQ226Pnx62fbjDzzXW8",
  "key8": "ok2EWugGSaQik1TPEQUuScahWdJw7YgpHZf6Hd1AXThBzQZ848C58MCxwbn3fmEXhs6F4jyWyBzyzpYisyxi8aC",
  "key9": "yBkqxAjuLSruYk9StwwpJbujMJpLR4RdikXuRrUh2eT3yvwi7vFnefATU2EHG2gGmU1s2NMsJaGHxWzkpeMqUv1",
  "key10": "5LFeC3pVMKZdzMWwc5HqMz5yzYiakb4YYUQ6G1NW6Xi31WDDZJmaFM9hW5ngsFi6zmGQaV3QyvyogzvSS3w9EPpg",
  "key11": "3GfPchRRGmqGzLNqfdYrrgpLGJSk817UUynLjbddrmrmJnGwV8PbFQECZuDMUtmfjmzXpRta2hvWcPtDxbJE86BE",
  "key12": "5rRvCtyqNM5FQwgHBRLD8zhGfxQmBaDvX3HTNVbJWdVNc5tiuKN6yv6Gcze1KQqoRBwRDfC7UBY93bMhRkDec9kD",
  "key13": "4bNF6QTDWmVVuR8mbZGRxtUrKz4BPBHuFqMpVTjMxdzeSisZEBMmk62a1AbWKmbqsVru2qFpEU4uzEdX8x5KwDHc",
  "key14": "59Bpqmx9UZbTzRAQhnP59Sc2ofN1NuvL7L6Qb71BL9vBnYJJru67sEZVzuobhnj84raXjxB3F1vvYZNh76iRsqGd",
  "key15": "4tEZV3UjCaPB294PCPhSRPYTvMVUuB1ioNfeqZhmuuoz4TZEtSinbD8eqdGAufEJXPYyo5XGVbWKeypWwQwHJYJm",
  "key16": "2NPRq7Pw3L887mK1Nr6dyFoiQbTvPMnmjCWDpFaBEcWxcNMwsRSLSNR4VpbQNBhQP8TYbZwP65TwJpPXsTh1ZSfr",
  "key17": "2Dop5EbJ7fz8tPoHvo7kSLRu7C8K5WVeSbVztKTxc47weufAiLQLJ86ph8R63VZCV8cvRYitB879wEGZog6XqfC9",
  "key18": "4KrNRiuNMwtDvdL4kcTpsntksxx3CFe4h4J4dY9fVUK4Tax8KEApBTV78T322AmBcLzd67k1KEFYkQHN6s8dLtx4",
  "key19": "41T9cCsY4kTh4f39jD2En2q38LK4NhAmwAvoCQAHqmC2j4kgmLmDtt6UZjdKfQpNN14yqyFkq3HLfoKxJBSzLz5L",
  "key20": "2Lqe2ypFKvsfpBiTJZ61iSumt7CB14bzWy7SviTLmyATJHv7QPZhuP5jjXWz5XpQvVSu1nKDXhQazgFy3xwBknBX",
  "key21": "2Precv6gBGUMyhbZU3QzL6Kpj411YpuVWmfnuReZr8Hnq68qSSjbgsFetbiYC8gqfQwcjvUURXrgVbK8kNKT5bNB",
  "key22": "66WusKPPsoDwXdXPApb7yE11kGocs4zFKvA9KbLJigniFQKfiMKiWYSgebUsNGedN2HeExxtv4oX2LrFdkAtco1e",
  "key23": "52DFoiGsdunpDRYZ5Fdpc4RFD7BjfE7s26JfXfYd9UqRdx3iKKxy3dqXX7BtgUagPjhTyqisAGXsN7QacxLvugJw",
  "key24": "3MFJjeU2rWocJSnTzCBVCuVgft4VWBAX2vHUSMoWaLtNXzr5YuHdmn2A9khaC9PLun476dpf6Ey2aCimATM6TJdR",
  "key25": "5LHn4PbcQ72SK1aP4FFYq2Yss1PgNAGUcmQjrUnN6euA9uxEWNpJiJUUfAiPrrN81E7dWWhNPbc6811yXfpWtdG6",
  "key26": "3GdHftyCxWCD4zc27aPWA97Yz9L6DPtfaVT7mc7mdWS4vXdwhoG9pW8oYP1xdxPfw7Dw5N26xuoe3LH455uzeYae",
  "key27": "5LAu5GLNkZgZXUejGk5a5PFbQoHMiu17ExdyzUfWdNeEmCJZeUUJju3GvLZCks8KJ9wEoJitm2vZgpQ3Q8BrUg1p",
  "key28": "37QHFuJ285JDJ22tU6P2QE1h1BKcBrUucXjBsCUCqo6W34Vwpk75CUjRKZsrZ55ndBQC2qPukzvJ9HPe1W7erR2R",
  "key29": "5oHo11nkfKZtaLXRQgQKKHv7S7xkdtm36EzPpRTbEviER6QfeP4kDsLZeetUC2LRvxVd9iW96oVsumge9V9ndjXG",
  "key30": "3kR7tp25wk6aYwNtQvhaCnA1ZCZKx61TwKX19zsuYcnZiPXNzJcog9pB4Syt6GDohqzZJ36Rvbfedspxv2xxRYeo"
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
