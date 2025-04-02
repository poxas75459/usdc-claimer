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
    "3nxAhXG59XaSQzFNSrKWEBDQHkJfGWyFBR4BbhSuJcD9UUrjaAnxBRL2Dzzr8SZTKqpesfRcPMLAEEdQpzC493VT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "659U8TWBv8B8RieCZq2qnx2jxNbHumXigRMHkeL4bAJzmCuwNV2uKXof5794z4JqqT87aVRvMHueydCnQUDTi6N5",
  "key1": "3AmHzVpnBFp5kAwLQ13shTbs3jBN1Mf7GoRUD2gT31emyw9BXHLBhX6V3bHLMPabxiZg8nsUZzW1QuaagtfAVgTz",
  "key2": "2cbRVhhf3Poeukhvst6TMurA7G85bcPyhahrbezqMdLjzMk8KHZeWrTYcQHUY8eA4JiBFqQXjPQSJYu8oQDSd9Xw",
  "key3": "2Q1PnBhszrLyjcJSAEbPNkekszZD1e93iAeQWHZXWxBPem8gXnqiRvDCQDWCBEg1mg83dPjz2R5D59PB5RnmZsij",
  "key4": "3knnUuwKT8GwRZusT2PSAxnqzS1pN7bwdg6WLB93gvAoASWMoQKvi6U2n7gXLVSQvCVyETQbxqFDnktsWMjg6o4r",
  "key5": "39ZEWQMkJTcU8jfeoRfDpzM5NFFiAqvGFCCM4Ka5Lua3WT6E5TA3s1sBekVpDJQqwY4dKBBRZ1mavZTXJXiA9Zws",
  "key6": "opVPBYwxuCUnkNRVV87N51teTmAGyH46MFoR8CYgKsLVEYBSTCAk8SXmzKvFXmCCV58K9mV4vrRYzHGSv2xBir6",
  "key7": "dBXMnyn6Aq5DVvbCy3givytHpRNgHWbQDTesfNEkr6WVABKvzWcMyQT4nzEBXcGiLPhLNeUuXaBNvLjCwuxrvxs",
  "key8": "58vjpzoaJaz8W1unWA8RtFvUbPzudjsnL88oDSRmz41mLvqw7w76awXaUTMJd48UxyL1izQ5JkZWLkLCPmWtf6pz",
  "key9": "epgVGGKTsBY7Ky9RXNP1ZR6QnKjK5Ad5Cx9BMBxUm5sZLanu8C3e4FdQRhWJfZ6bRcAr3k57HNb5bt75D8iZDAy",
  "key10": "5Diz2pHDSgxBTCo9mAogFYr3WseWCpGZ6xjZ7z5XCPaywa8rnPALV343YwJTZkhDHirXsqxJFJYPTRLUjDsZEemU",
  "key11": "63TUKitJoS6XGCsbrsiAYyi9JeP8Vxv5wR1jcZy5xMfii8ZhP6WASEZ5QPCh2qTunNCYpDjG6vK4dSwSQh96ERcL",
  "key12": "2diXPEfNHhaScwuLLRSuDrt8zoqqx4jJvPx1pyQHc6oW1qEfMQiatCCFJXz4yA8Bgy7mw7gL2Eeygbh71c5e3Spj",
  "key13": "5dDP47hHpg14Qnq9PAcduMGrK7Uf3sez3HKSuZeiYbHU2GsX4QZCwWVe7KeX4C7d2jRysmxqiazAq3hoqFrbqWMP",
  "key14": "34dgfPZ5f4w3kFgWtweKE9w26KHRpTQnPTui8qh8CGHWvm5NdbcgiEuTeTD4EBKf5xsYCSGSeLEVztu1pRsi73uz",
  "key15": "5bGG5sX5EdY1yLfFhtAcbq89oKgWsKgYxAxJBksvtA5EGx8ELptMsgijBMFMM2sEZWkH9xgsSsiJNDgLK66Cykuh",
  "key16": "Hw5NaBDNPCJSYvn1oEXvLQsWgjGcW8RG4hR52ViiHUd1TJKDn6tjnvm6sk5DRPsJJv9fb8AkKEy5Li3HygmhA6h",
  "key17": "5nhW3wYK1iqgPqofnBPrvrLHN4W8XVYdYWw8Nak73ojrXoz5hDNijWmVsxpPwThqtkYq53G8KfpQcxy9ebGTztd4",
  "key18": "47XFqxMr13hBtL2AnrANgdX6rCpYd9FtSx4UzmaUxU5fnH6P1sCMiVeMR6RhchQykaiA3DyGMNUdGQPYiNorav5i",
  "key19": "iYNX656jdCK8zdCXWJDgNKMTQ4bfiTfXYAN7osFt4um23UdUXPRcKuLhPBnyc9cpyracAejT7GcFaPUhsmoVT2P",
  "key20": "759bKkna8QZ2wvDXi3GsFiMUVYJvxgseSbERxDMi7uiouVFYpbTgvZoxAABtdQBwQgnmqRmhN8WvuTfCJHrVAmX",
  "key21": "5XxyB67QaaGGmsgsrjqg5zPmiHokMh9Job1PEzkWrwocJ8DgwtXW9qsSQdqGmWqaZFxZT3QjjxQ5PbCcBeS5Bnzo",
  "key22": "4mvnsTq4PPzQ11uRnAuxDBvnmRbmHG3mhxxmsRkKQjs5DTFgepwB2EueLSwM3BspJtZAco6rtimsne7p7hBpFt6T",
  "key23": "5xzZPweNaURnQ9LUZxB3oga8uaJokq9npn4AKss44eAjMws3k4MSxEuNQziHhk5nkBkKJWkxvjZqoBkQehYdzEiq",
  "key24": "33uJoeGjV6nPDivEzsnYictYxUvBkWydNi5arEDoAMqHbzjEMBju9SNzhV1dwThot7XmpTTXGL8DYgb5An2zLo6N",
  "key25": "4APNgo3UJSdkFUv2sorqWgUbi4GBj9GR7qx41QsnNthTQLKzbcBbYUFLVR46LATubCz8cg844q4Ci8TjFit2Z5go",
  "key26": "5KgsPS4jMCBLb6fE4k8ktpPVT8umDRizqYQjhYKUvSDL4JBq5Du6u2wrT25HhaxHFkjn5KedMc7hLVMBMcSjgCvm",
  "key27": "53iqUJHnPPWp1UPUNsLxNzDyerZge6MTXn4rmJn5GjCe4QHxeVNtYHHChR15snD7Nr1Xhfx82difdkyMMzSmrRU2",
  "key28": "3ndxwbHHFy3DwmFZeXuDNyibz5a2UcT9bNbxUD2z85bFDx2ySxc9XD5a3iUqsUZiKGguGVvNNqcozJiqbtPXDbMF",
  "key29": "3sK4QLVvzUfrcbonxYnEssSMYLP3S6z36vh6pTvQNsTRrMxgKrNpoE6Pzr545dcAhgfDDwuaLgw6mG4cceD9B7nk"
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
