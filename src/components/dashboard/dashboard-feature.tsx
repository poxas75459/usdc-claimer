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
    "27Ant782quDVmSsRdNiNWG66TDhdNe1YCEepnbTxJJYLK3cUVvcxC1nbG9AbqbLXgHMLLqP9mSYQyjCUYff9bnhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PLW3ZaTLhugfuUdRNWdBhWSpZyXp7n88djWQ7sKmCqfb1y1fNKQowfaB4BfgWxkgtJBNBopduxghKXHNCeP7tpj",
  "key1": "32Vfedi7LeWL7aCPr3NbWV1mw4HuGvBoPx3p43CK3GSMqwhHvNvGwA39Yi8cgZBWbajLVe6CBismowFSELHoC2xT",
  "key2": "5G3HrHex2yxsHt7gRx5jAFXL9AuL9imLNdTpgMeoUSUJw4yZZJRM7rsueUhFoR2WsB9rBE6D1grrTiUzqRbk2y1X",
  "key3": "4MRaHE5doebkQuEPFfgkGGFiAVMvqf94QWShoqTxFtFE7ws9TbMofEaw5dGs4ZCwXe1j51HN8tCT6HM4xW2HT6tA",
  "key4": "2fsNethRVKV1dpzoDBSbizn79n5Q53iqpP1dhcoFVMCBTHoBCrkc1nnpJsm8jaSDzY9SxYrYKCcKe4TMy51ea8LW",
  "key5": "mPC9EJ8yDNd9GS3nXHpD5QkPSbSUsgFAx15Yk8M4JEL19tDhoxuQtRfbnV4Ycb3RKBKnLnyVDT2wwTanbJ291yb",
  "key6": "2AAWC5ntuXFu6HouRjKWuj4D4SahssfS1kAC9JJV84rvWhcUytK94GWkwU8nDtdNfjjY23nBBgLDaFKh6NACpwuX",
  "key7": "38Q14SknxqdMBBs5cNUmR5EbM3vRCq4Zmdj3RffLBrzP8pi4q2Mb9u4joyzqFvp7a6o6JtgdshtPbXLg7TFqZmrf",
  "key8": "34d86mdUuqfURtJsxkJuHMSop7X2Fq6xTVCDEDV8BLafbQ2TJGAxedes2HYMd5TVwEazdBDzUeP5qKhFBdhngeEA",
  "key9": "3VNuseq2db8KiXXB3eUzsgcvpoMxDuy7PGF3aJvByJGi2vB5Y7iNLuKTRDhHe2g8LtUQwrwtc5ZfGKBiZmdZcZnb",
  "key10": "5sRX8XzURhYZ4DX9hTtxBv4G7fFZnwKSg1XnbSR9m8vzdbZRKjwf4cRwAUseCtG9XzKF4J18537mKdhBejHneye6",
  "key11": "Cftz9NN6uGaeRCdjpX4kMT2V6Y35Fcp5EwfhEbsf4jwn9PXN4djdu4gdMYhvsqDYFbKGoPtGj2m7j52WpcWASjv",
  "key12": "4tqUuPJMx3ZuU81jSBhfWkNRF6GyzKDf7QZa7jn4GUgNwN3wKLADJbFmDcGyZ687ykEEWUbaNyzrteFsVs3hcWYr",
  "key13": "4mAHUzwMvFCgqoaARzmBvKMtshG6kEnfepHgvLDPp2ahPBuHHcfQhhhnZdNUvqYzgx6qExjUqmvddfDTeSdsZxsd",
  "key14": "48aG257APMUtQaMsANpDS6wQYdHjkjQ9D5e87ME1yEBVhCyieqnk2Lm4N5KChvqAa4LxrmT9qtPKLEz58p82ZQCg",
  "key15": "66JU6YSuBdjhAPzq6LDfM6BafKevJQWnR6uUCmY7Qf9135TQw3TcZuC3vroYdfj4uxToG2JLiykmo32rXJHKgYVj",
  "key16": "5BoxRbMmmY1qVL3nPqz3HVvWj76TMLnj8tZZnLAcvhnpQYGTvuLMpqduuZcWRVCavBWEVfKwaghXDikDo4vZJe4w",
  "key17": "4gdygGguNVj5FboGF5zDJ7i67KLsUrfLVJV8Zc8gQ51fnG5ufPHiHEeJg8EMVU8aoovjQ2xARxCTNXSDZCbHVCj8",
  "key18": "4xvVANTP1EyTZTbd1DpAL8xMNpp4HA7EzNSwxxPCy86Xg7RucwbZUoKauf1r8fqjqRmxRPDqHYC6ZY46afAxQffb",
  "key19": "35TNqFrTgfbQGrG3yQ3AF1mrJKDPU8ZxsD5Q5LQqV5DFpAQd18CugEEqXSfwggPYePXbYiwFGmFBxpX73WkecYMj",
  "key20": "4fb9rsoPQw4WJE55VwVSfXPzrsNQfDM9jadFrEDjqLsEde3nH4R8mYTmSrb3xgSSYHKuo9DsVztH89pgyWe36W74",
  "key21": "3BZpnGg9cdNYEpwVNjw4gzpCLpZVH7BFA9KPhgqCcz9Y5SkR7DUURcnMgECD6AGYxavmj1LaMWf9YsRJgTEbyLFD",
  "key22": "2mXXmGmSWTuqLMpW2oH1mGimwVVbG5mwiZdr68ZSD89RKDGnsWmwXorPsS3H4Ma7WTSnhzyGrSTkCaf9ZEgqqpDW",
  "key23": "2fEhxbMaPtbQy7oBxPmVq92LNMk2ZzkpyfqzGtZi3dXKNysoyUPkDyoZL73DjHYCGL3bohJL54QN5BGhMZp2vgx6",
  "key24": "2v1sCgkzkN1Tok2F1cq5VaYp9HHMVgh3o77TPWpCqqu3hqYRweYNtztpAyN3SnJZUdkVymgG9Q7nRWFhvQx7q1Kv",
  "key25": "s6258DR5QRqbGszGJB71U3GK4ZkUuP1HJNcJSNL2MnNZrcSq1CsvGNybxXZLTVtYMucyUAMfGAbzC8L65a8QzFn",
  "key26": "5jayNo7s9C6xPgR1hmPBaVfrDLDpbBHGkXHvzHhqNc2wnzi74LPkYVCGddPBRSWZvBUUdksuiuvfEEbX4jm7ikze",
  "key27": "2GJD8GcmhZnb8RYrohDtSCvzZcSDCyAnhGUBMwaXb8Std7ZmzavHZ26qeiCKf5JZ4z9SbKpLHQJoaevxW4ACbscK",
  "key28": "2bKmjVUoxh15HEbj5evC2UuFbaWrnC18mR76j15T7pg6nwnjjapHPYsBgh29fEX9T9ForGmyxurZo71XHi3BCjXu",
  "key29": "5NdbCJ9TBPU2rVM8zAifwKX9Vz6jAbWVgwdqHEaZG7t88guYER8xPc6HEefswwepbPUkCqCDdzkidAmfxMNcQaTw",
  "key30": "JAF7zg5AzRaJnz5ag9jMuWLuXirHAX4FPvgZMo6NtYNTX35pqp2XvsSHrDn79eB8vNkFuxsrup9ucRgU5KCSBdY",
  "key31": "5NQded3DGdatyYjebeZa8J76TtY8raa4pPdrhCjyG9NUA8zG9s7HacLC1wbTsXCPjzegfnCxB2a7jaUUuQtGCEGY",
  "key32": "9Y5JqtUbgEmBAhzUeAxXc83JRAieghHPLMk5y2sVttMJNW5hX2zHqExkaAeWZ7bBfUiTrsfW16Yb8HHbgx2yvLt",
  "key33": "5KscJg81Q3o65XTdTZtskeAUoomN9HPRK4kAzk9AFWg4SxE7whP643aG4VDie9ChewmdKBJUJpGezWtgUPVBDFfM",
  "key34": "2NFejk85u5T4eiimNoMKuammaeHVyLkfUeMP2yoXDzNPi5Exssd5QKkEMGqyfXEPWE41Lxu4cYHkeYhecmJ8LZ8s"
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
