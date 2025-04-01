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
    "Q1yqce7iZUxbU7WXKXogBmEsQ1RWDjjomrpmTBzeaRxxCuC9akv5PMhHPcHaAHmHogrogkarBFvfo5zw8uBXdMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43wzPE4G3G7Bq8GJfiK2QGWwcxj6dBw9kaSLBFqEvLsqKQPJkw2RN8VFmV3xMqEF8ppHDePshivViRsiw5iF1dyu",
  "key1": "2qxkL2djNZfuHUuqhmfXiYjKpc2TGKeLpNAUVYWGmsTPmN8nJEuMMXrkRrVKg8nMGZk3o6HfWuUH3RtURV1TvkVt",
  "key2": "Z1pw9jyyFaxhFtxAVdQNXL4TKDvW2urJuUASRJE6zX2ZVNZVmC9gAPbApdwsT5docBqUYqLundDcjJ66siTc7ma",
  "key3": "4zr8RLVPaFNv64qWnFpZswWsjYmpHnD3xGBu27jT6wyn12y4jGv867EiW21idndibbwUno9wkcP9PAdDsv2VELnG",
  "key4": "4FwWQ7uvwMe9tajJkQp6sVmpzZByPTjJHyxyNVtwUQ7svk86Q9dwYPAKyHSzB5mrjzVfFxMkZwe7FuYxj9b9c5gx",
  "key5": "66cdyHsfBUsih5ytSETTFDYRV1GZTCoEbuGv7U5vdvHtPbJHsW4QPoHWJXuuT7kPXUDuvkMca1pc39Q13AtbPs7i",
  "key6": "3VEA828LTkKiqPVYwgBH3pbiV7jJoDrtBzovohwB2TeaoSqTp13wtw6Y7zRwPPuaSSnNP3fvow1xkokgZE4YFTRW",
  "key7": "YN2fWD8pU8WPaBxzbJKU6L5cg74cM8AhKyeKAQtoakjqy8HPYtRvXFySnnNs2t7RrByaK6wetNwK9PPgAWuZpzv",
  "key8": "4HvW6RhRFgQnPB9NEkd21KjzRaN8NtdKGcBbhe4CnnZqpgmM7H5sPEvQzXksLM44F62KGBexeQ3mr7uvZ8MDLjBp",
  "key9": "5h9g6BrxjoJPDP2GEEULBxdRPw6uF1bG33AngA8HaLjVaLmUy9i7gJVuEfEjMDxkZfXRVzJQ74uRHzbwY8k1sGv8",
  "key10": "31EYdtJ29PvhZ1qW2Ygi8HkRWtNeGW4hCxnzTNNDd4fE8C2Xj7LkjTRffXd56sqsXqBbuq8MqpK7kN8ayhnV8BpV",
  "key11": "5DPAgensHRFHna1EXxTFK5x6SMpfJSQLmLPwZwffcWAa4nNJDAjEUmcPc7SUn2FKUxbQskVZQQvXtj926rj3QPCv",
  "key12": "zCKkARmGCbk5PYQUwCXc8H1buCJbNVuzmj3gsjMpf8rfizNvENfQJ3PsSsRxsfwq8LgbQppkBQgbzZboeropKH3",
  "key13": "2pcAzmHCUYjF2KKXxdqgsEtAE1mSr5rDnhBo5Kqb4JZHThd7cvgpnQ4NZq6g5ACq5CMkyMb4fMo6yUi7ANW12x5a",
  "key14": "5jcjTTBFy4GW8GHJERTBDiGXDYBX6t3xQKPKzDZeSxmCnDAUyWcwmNuYvCd4xtSaj7nTinFp9SVkaDHhwMLKX18V",
  "key15": "2EDBceDY89Yt7WLiHK7DoDPoAz48Ua2mAcytZUcwHJCzrcuAYiaF5U6TLB322RErUztBUUCBY2yQqt8CFmH6LJGX",
  "key16": "g6aocCPDa25UTD5KaaCtAU4FXAVCaEKfCRkQ9qz7eKt9uWs9NWNQT3C2BQaGNUwpGAh59CstUpGbodYsaMsDzUD",
  "key17": "2BmN3VvBnPLwdHSe7LGRevtQE6nPaTPvFyZL6ZKa4sfoBY8BWoDWN8B8S9cQW38qMNcbkQueyRqLd9zUsYbnxBFS",
  "key18": "3EHEmTYDjq2bgXdwEuL4CVc98L3j36J5hd9KQQijhhCujr54VmkA65u4HeYsxAyncFJ3qq6LN6F8yib4Ezb97Jvy",
  "key19": "2LET6UvUZy2MatJCzhHuVkp4gpCGYcvAEur84f9noT2fFgBcTR9VcVCnJG75ootXorP6ESDqhNMu47i1JsF2JVsf",
  "key20": "3wTF6CswHE8gbXg5ivGR5o8e9dQ6Sqa8Vou4Ps1ZwCfjU6vYookudNbG1D4oYXWoPFFKZNS7vLDrSCpWU1QqyjzR",
  "key21": "3jeruvpP6NrrkgD8sp59U6wXZqy6xyKiYMdNntjJV6uUTsBKnnZmNHYc4boKEeDtqhTzNUr1SmJaDz3rjM4qgdi1",
  "key22": "2uAv6bfFMNRpwjtqwvVaEMwXaimJNQtbefzC7g8dsYzFYAVAovidWEz5BysF8Md4nz3obaxaDmGQQjPXMRhiR63r",
  "key23": "5dnZKUJ8ixtoAXmHz8XZmrXFcNzioSSGb2PwuKNuHY6NaBgFehGVwnbeoFk7xLQ2PYKz7F1tqyopXy3JDP6N6kTT",
  "key24": "JNB1tsgxr9mqHcHCs4uXt1sDzMLJRFRUwG4vvBNmLaAt94m7SDtY4TdFYXHL4gK4bnptXgx4xegxJ3jpCPG5ZRE",
  "key25": "jq8rn3h7ePZTH9PG42unr8GEPukk21B8pbErDftktUMvoyRaEoPrF7UUZosdUgjdvpVHbxWAGcpTqovzZMAtTVk",
  "key26": "3ogg4idSr2VigwCRH6BFpgxWNwLdNcGSYEfuPhE121CwDre3Swj8azfbrLpYv9LDaAWn6Z3x6mHNweUGRJZ3QzZn",
  "key27": "4BVJFUPepKa8mAawNtUpDcuN3ewVSgCcCaHRS8vuqxe1nwUM15ovq132XCWXaLpWbwu2DLtmsjYmfY8f5mDFfxT9",
  "key28": "3vtxMSeoY8vW72nm7K81pD7D3W11BqNccRknPVXACBjypFgCtc2VVt1zDkJVLZ1WGbRqfXVBrXG8YLfaR1dXngbL",
  "key29": "f1TvXzyU4ScURmSrbBKRWftyWK2yGGTBzhSpNVE9run9MvuQj2JyP4vjYwMKjQ7V8HVw5HvLRwxPgCuTsRpAktC",
  "key30": "4gU3v8xVgNS5aPWdsZ9TeVMxK85rNgcduZbMhZuto9FKG316tBV2324r6gDrDD1siGiziDjwrg7HQ4bxiyu69QzZ"
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
