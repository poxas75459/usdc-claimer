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
    "3WX2u1qcKRV471qAZRTVUFkaSk8rdUqQfNov7nH2gsYTuhbh8hfStTsTvbkmiFM95UfGWibaoJdKUs62aDDxLv81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RwrQoQJJXF32VTDy6Kt5c7zjwvc2dMrCUdXg1imcBdP4Jq57qYUDhipePxK4aPy6RPu2WqULsfuSw38VVhJvtK7",
  "key1": "43CJypuxZ1sasN9i3ayFtxtiSN37RnDK13BwyrAjh5fyBm191vChC2sAPjndmdEHDLuxGJUXt8W2aumQkv3j5wrJ",
  "key2": "knF62vwriDrZHaERRRS6sduXzmoLLYKewje4AAfmuJLEc95cr81pxF7hnounX8gt9Ncuy992uXgzBgux7wvBDFu",
  "key3": "RiNXFMCLwWLny5GTaZDkmT1ioNe1xV7JxPwQULtE3XZxY82mFjtuD4Ke96BkxwM3CHy4gc6FcAp2p8J4M4P4Zkf",
  "key4": "Y9y78wsLTjjz9SA4ps4oHNCVmD7px3XL4pcDmi5yvQ53kswNUb95oUjjrosvBi81y2peWgmpZU9ssdbsiNNHACP",
  "key5": "4T3LfNrNgPwZhxc99at24LLWc9mkiVfPvYzmEBUxmfhb9tcgNyZxxpKbqbvsiPKuE6VtH8nMSGqn77ZfjS5aAJnr",
  "key6": "4y8ecQzJg9w46NNj8JpteQjmdHgp4PfeEFgAKcXN47JC7vR4i6kfRpcu2JToTgvcL7aE7k1q1vBc2NP7Pb6c6eZc",
  "key7": "3KXq9ik4n6YdAaH7ZHidLUFtJKmN5UtAwq1tifKxjhoPotEre3xqKDM9eX94akZ5CAyLXqpQnHfXxJTktKSjRCP9",
  "key8": "7itcmC2CuaYhMRcvPj6b79vLwFBim4vz8rnq3eGpdZXVA5QwB2QQ4QsgZQNrECuPvUw6ctjKQ8rUjHQGxBBbuHN",
  "key9": "5FzcUkurtGxtr1MGJxFEVGniViTvUMz8TdTfLmerspW1zPEwZsLr5uVVaSbBuyG1jsiqGx7WfJmSiesF9cUFC8JJ",
  "key10": "2y9eRpvwtXU5EGMfyx6hmK4s9fXnudxPdBnG21LxY675udfpyFXQ9WvrCAjr3zGck9fVVKmdpL7t4JGupkfNxaTj",
  "key11": "3nTLo6r53KAd25R2gQbkFqTzUPHHs3pdM4Bj6RjzuU5u8fpB49Wu7eXLcmRhgWEXkfxqQ9puPNMz1WCDeG1AkzwN",
  "key12": "JnTgCKKPxh3Eiv7gqZmpCAuNnYoJ9wtGGF5gW7D6mGYecw2xqDsGqMjrN9Cnx4buv3DTr7iRaCXhGLjiyNKYUbP",
  "key13": "4eSt1Q6HYJVRPmxScNZ7h4dQEhAQo74CwqzFyzoBaTcQSt8aqymLqLZv4QvR1HNi5UggT6pqg2eo7fLSGzdgDhi8",
  "key14": "36rbCnoVmLWRwiwXANcRx6n4sb1vG3tfnjkzkFpGodcb5BfStqD32VwTmrC97rBxQMJysgfcaQgPauwTYUwDNnc6",
  "key15": "5bxwRgtVW2fEApbDAhn4yrXE69JsdfsMeb64sH5d4muLXNJj1DcaLoe15CjFNbyJ7dmmzXDKbG9XABFS6ktoXgM2",
  "key16": "CHLPweRcruUGZuZ1nxBH8Wjoy9p3oXRgVSRQD7189YGEGYnFVL2WvNVcLaNnMJd9XiAFR79qG6cTF6gkVnn61Km",
  "key17": "3zM6EPifuR5WuuDvsN7ACXArYPgUx68n6RmBXZhBnSgCVNdXWj7LNjM9vhWLU8KX9XSyEtPbwcyQ4kEXzpCAonGm",
  "key18": "2o3SWAosD3ZeGn8hhmrZFnjqGzV696eudw7ku7P8JvR9tZbS8h4WH9Hy4EkUrVUeCvz79rCS4gKLmDAZGzi3HV41",
  "key19": "33gkrBtLfSp8RcYbyoQhid6yNmhyKPBtSNPzSBioa1mPWwbgMiVSQ6pe9PYfjkWxdFCryiarfyN9dQen74NHeAQt",
  "key20": "47vkHy5Lk6KsqcT83BjbZLiq2GjQBGCUZy2VTS7nHq3WkK7YBPRnFzSBreub29p8LuHyBmmksUDBzDg8k7c5SwPQ",
  "key21": "SpnVniE6H4Hqt6ob9mFeyEmcEBaD1J6rpCtzQ8Nsqp52Pc32jDdfSJsTU3MzQwzBJsASztFySvZm9pXmqAL8fiV",
  "key22": "57dXyiti99595p1J1jRuZh7dDypakuvV8gTXcc4zTzA8GLdVithCACnnTtQW51hsckvGWfBMPg9RYWtJT1UWoip8",
  "key23": "3wcZDLgAohXPwxrEbUQNFG6yTxJkk2GSFsAguRQeHhHyFn81Ht6PX9WkfBFf3FSAgRFwDetc4VRphdaCxuWrBHxh",
  "key24": "2qUEmAqypX7SEbhSkfwbzfxg8c8JbizDjgwHXfAvFfWVKrxU7cDY9hS3VHnqhegPRY7Cb7RmihrbiiP9HkHxCT5U",
  "key25": "3aPwPsHLCQGU7rGGumv2MkkfuAYs8Px3UdFtZrYkoNjBys4C8HoB46YcmKQDi1Srp77avqcxVYzkfbKzVp2k81Uz",
  "key26": "2eD29iRFNgQrT1Wr1AuJgPcGswdhg5nefJCUqXvAdz8MN3dbUXK2UUxyBJBoR8XLJt7Q4SYWLVV6cfFeJY3aRCuS",
  "key27": "4UZLPBC3JkHQr1JiCXPx5pKkzoSs9SRKTreyAGVRrsQw2ohC6K5p1nXPQjabSSWrwkvbx2AZhtCzEvmPwfw6DiGZ"
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
