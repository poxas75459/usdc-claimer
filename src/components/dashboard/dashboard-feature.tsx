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
    "xLzTs5tb7btkJNx54QeWEeU4WB1VEAccgw4bFzX1pbAoDw3WGzU85kEyyxs6mtfBUKXqNYYydU4MjpP7pQtmLdH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QVWscJndHj39iXR38QQikqptw7M6V4CLaAGoAzLJPehaBfTrBYrHDiZvVzoc54dLkxi4ixB1s8cvimaMkj8fC27",
  "key1": "29vo4zLdf7YXfzYhhPpJ7RZRDdDp85yNKv412rwwgrXB2Kn1DToeK3VBevDf8P9gqMHnyoBgjuEkLHpBgQBWjNT6",
  "key2": "2dyuRW8F4R7KLB3AuuPL1oaqn5gQrHDEgmGnSywbkJEQJvvwy5Tkxs5RpV1QbkeSsuvCcKsYLy3G1NiAScVV9n7n",
  "key3": "32x4Gn3GymcfroLWWwGziByrCBnTUr5z5Fdikfrt2TSGikPHLgubEoYPvM1s6ZyJqDsQvYQgeiPZSfBJv7HkCpST",
  "key4": "3SGgMX1PNs6mvxMBs4eHw3V6SrYDbHPVjem3jEQmdBf497ogACJdicdXg17AbHxBfGY13ijFpTbuAoBnHPcF7rbw",
  "key5": "uQZs4hbwHdZYemJC4o2uyXcDLQyKdqhTnMbZkqysLxBsb7uYipwfn8C1jzT8SGhgtZgkZUnZX4BovLoTtxGbbWr",
  "key6": "5LxgzYhsFU5zk1h2idyYMVupDGCuTzdX7KXf3zEVwX599TfBYMiFvvWmTt4m6VfKkfTiFRtNY1yaQgPnzwm45ZRA",
  "key7": "4hLTXbf29DTDXpWSPscDHpXxBot8bVN7kHK77DvvCjdS4Gt94UcuLiCVurhnMkkHQzGsUn3YJJSibakZaHk7qG3o",
  "key8": "4eRc4J7yGScbYKckhnRstFm1ZHvQT9YF2Pp1Ukokq7DTh4BWLGufvjWrKL2hXqC7v2TKt7jFhD8jumU2ckC18YWa",
  "key9": "58X97tViQ2jzWgY3ApNxtfimbhWCmjmaKcg261KdxMpi9rzFM8dTr53JgZDLAftYikK1xhSJj81QtSWHcUMaB7Mo",
  "key10": "58xq6wyE9b6dnK1FrQUs8wafLk8rt7SQMTEmWWjaTgVG9msqF2vcdo7tSyh1rJGFXyntstqYVexzu1ZFcmX1SCyd",
  "key11": "R5S2fRq5XCp7K7dS8oq6KT242vsDsvzEJnrautqi3e4phgxzEE6mxRt1Z7QmLmoQarC6uDZyHuq1XWTTb8tx8gQ",
  "key12": "3V51asvHgAzfpLuj9Sr8t5q3kkUwtx8UFHeYxzsh3xMUvMCpjM52i4MELUjUThKAT6VFREoR7Z9oe9gCHUv5ZXCM",
  "key13": "4i79jLWLq1n8VhXdf9yZTqhsZ3FTAwkwEJvkT2yFxVTjmy6Be1SrTojVdeZX4aQT9Pbie4j9TyefTLoVvCJkTQco",
  "key14": "5hudKbFvxJh9eaq8tBuR49MVnnFYcJDvN7ZNUCNPXdnprxFVrm6aucRhSVodjXPvPxhEKQnKAAC73Ypb6oP7L3k1",
  "key15": "2ymcniwRUpHtaPa8rb6sGYp9c2SzATJjWYx84LF4WFAJdZomwpca3j6Hv4bgZCuQhuMakA9f8QCqhb5i35j821AE",
  "key16": "2vDs81LDpgnMXVw6Fc5HgbKRqexjLb257WxJriuHWUDhDYWx4GGHk5CNWKKyDrbRHH7V4eAnicCtkuXDdx5dUhfy",
  "key17": "2C4ZsDondD5Ft1RpRtVL3iVX7QjYMY8ZEgSKZ6uRjssX1AuL4BHdMjb2JVN4hAeCEgAMxPLmdg8Qovfu6y3e9KsW",
  "key18": "5sTRJp91jyFjyH2zUAVHUsKhySrRnCA77jBDKS3sCfKYuJsshBUjCEedqpV6iTcCY4xEpq7fDK9PLBsDopr7HAhK",
  "key19": "5Krt7brP8gSmMCcYQKTzjiaSkrArqd9rLHQBqEcr29EedDw6x3i5qvfvxMsdBJvZHm9BBpYKnik3k1m91MuUHaAM",
  "key20": "zAms4rhR64pEv4D3xAqSYsXEjAXcK6Brsb1XLAyJcgPdNTJJGtxNYJnN3zy3RW8sqbLxTMXtAkWwubAjZBtDzDF",
  "key21": "36EFibAM78Uy1R5mLYnrSFQmfytvRWxGNmmuceEKsRsRNeqsCd5MhNV8HZJZKs3tanxkAu5TUVbA7FjERCruJACQ",
  "key22": "5tS4egAjbvLG9CTXHV2gq1FbMX9A1Aqs8PWcPwU14orEwvDi5Q4ZJhWHGJmdoqjSStnQ8Y5tueSCzJTei3ibeYfD",
  "key23": "3LUt1JrP3CPEW2Bemex2Sg6E8gcfHBb7fyWrhGGiQJT1gAFNj5G1NZxqZaESmCj775H6t1LYen6zUiQPewkXDdfp",
  "key24": "37amwzPv7fZyiuK8icig3PG5xVXkx6SSgu5i8Vj3ZzTJB1eRq56m7ZBUf6gcB5Rs3EcQa3vTEY1J7k8yxpYJPAkS",
  "key25": "3ABj76vBJMFXL3L6zvh8Wjoi7twre6SfQApwwLpEVuUVZdoYCwtwb897Vd44PZgwF5QWzyoJYGeuvNtdJ2cDhKQQ",
  "key26": "3SNdXtzq83s8zKvC3c1jWAsNwXzVP8h7xQBSjGhwgi56KzH2YNgoK2pFjBR8UKjXDj2FjXVJbA2okL8t1JTH2xK6",
  "key27": "5fjQrFXseyjeeKZMy6jyuhUZ22rXMUi2QnBVGTLj7pkQZpKoT2seW1pgPjU7fzJnMikeuKt5VqzZH9EdZgwVgbqY",
  "key28": "2bEmHhYexvpbYX2aMy7dTDqzvzZcY8DgoP27gvoR4EqQZzrnxdxZaWESPo3pEbP1YBxE1tuykWKxsL3Vsvjsn49"
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
