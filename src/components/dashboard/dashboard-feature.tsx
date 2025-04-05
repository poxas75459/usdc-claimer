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
    "qghzF97FcJc8vYwEybgdKZxoXp7gk9yzSrbU55bBJibHQFjUwHzckwmaM198ATZzauRzytvPrkAvQscrZYmJmG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EXPo7Zy76nA4oQuu3z9Uf9SyRdWkc4AAuARg8JNWD8VAC282ortWHn99qFEGSjQAFmxVZgLMvRkffbeiVn3L8Dx",
  "key1": "5STW6Rzq9u7ngsdp2syiXEAKeoeGqqCFpoj9rA3sfE31Qwo2ouG68Ae5FqEWuGGwKWvLehNAitr9EmfqZ8zusZWP",
  "key2": "4Qr567z6prp7xEeFmTcxVFDMXf1maMkzrAnTtq73iDg8WHjTY2fooprbRfJa2NYN9Q4bkgAPGrXWK9vs2DYpWq84",
  "key3": "EFgy8q9DBC571qqfUGF9MTC1cCUcgJyGPLzV2EvQKJ18jPKHJoNEh8SijEEnmGtv5wnsLyvAdc4B1LwUxjfU9BS",
  "key4": "3WjPv5zscvVbkXEtDD5A8feaecZ6ASqKeA5UaH4pxch18kZFB5YwMFsq6fFMJvAKA3TqXxo855mQSUADCpn8YSaR",
  "key5": "5s1NcgqUQSm2ppf6nh3LBYzAXhCYuA4iawiq76cJyELWSVVxoW3CvBktSXMKiaWrnJiiEyws3kcWb58299uYhYYw",
  "key6": "rGBHjgxiAxvNdDxmnfJdWXmzuVn4VcHtpUUsp1dmS33BJse9gDt2C6znWBpf5BFVMsAraMiVV5w7Cma6wwWvxge",
  "key7": "2LhcDNeNkDxFgA4DnNFZ8QdaCiFVfwZur4tk21ywqAMKvHCh6hqUM5XJ64Bbrpn5VEi6S96dv5ehXJLmjiAkvnZx",
  "key8": "4UdKLDwUxJRTGPGsk7TC96kvqhuQtM2yaNrMT6Fo7kf6ddvftRLWNF3B7vBnQgmfwgrQuushhqYZK99x32pkurJ6",
  "key9": "sLYZN5jcDZMqoqmKzuBt6LDGtmJbLT55RhkxrBFAT6tjHwUJxRr8rQxmwVwVm8w4xKXUJoemgwypyuFaNC47ucb",
  "key10": "3JRnddRzKJomLqxabmWWDTQ4vcyxiN8jVJhbUX7YwBuXYLy7JZDuoqTPuaXYSwJkszWnj7cL6KDVATPvAygqKxL6",
  "key11": "H2zHZFJWaUHoykFtswb1se1Vr8bAzTW56JyD4CLYC1L17zNmbSCYFhS476TWW7ifxTaHdVcLr9GQhqho5Lw75rz",
  "key12": "2u3RxfPY8AvbYrUuXtxwD4xNhuSRWrJPych4Ct7XS5uuqj7aH3PSeeEYLtmFhxRrE97Vj9vMGZNXXBPhPaA3EEy4",
  "key13": "YSkaALZzR2i7F6e1AusBKdxcb8s62m7oKoBeoRmLzL3ysjWTgPCPXXCf7n3hcx2RQsmomTPuDp66ZuNvxnXUEbt",
  "key14": "3tHk2ENU9JmyPbceQWFwzZqiSDuqreJAbNZpZxunBhVH8CpuXEtqxa1NZ3Co1hYefABn9WpSqxGk4inxyHcXJVUm",
  "key15": "2gY26fKL8o3sDVQLnJEBf87m1D2HVRUP2a4Gt8SSRcohZ3AFQWmVt9mL8ipMWvHW1JBXAUeQYEEjLJB5yyGq9M2s",
  "key16": "4KH9nbzXH67ev4r6qrTVNmABzbAyJhVZfuZ7GbzJ6VdkRNFxwq6VWq4t1CPNxNYViejLGx4B2R4mtKfykL4aP5Hy",
  "key17": "5NEex8UkBjV9zNRyhTm6Ptr1kJQBBuhBAXZhWZNgrKgDkMsxjXJ62oVZoHTUKmfiiyb24ekMdqsUsjnAzt5qBjwM",
  "key18": "2KvivkwcqCcmWqRBkxptkexZ2imVLUJnEmCcSNLmQ9AmXo2gmb5BPtm63CgYbozqYEyakPP9WnYpmDWkMHjjMChj",
  "key19": "5EhQG3qhcHQVqBoAoAPG2bs5Z6S1zvTrv3JAGpdPwE3JWupt38jhaM1p558pF9qJbCbAySN3sqvigBuZABKui8FW",
  "key20": "4LLag2nX4HtJovt2FGLpk1G8C6JfR9RJ4vcPKdeMUhKuK559X62bEiEKihVtpGqAVETbFoyZY64hVTkNkqE7yVLq",
  "key21": "3HVJeaJiBXMF5aazuvmfHU3mjJobQ5gUTcvM7v73Li5VHxLHSWzLafSRkWasZ3RL54G9ggsLN3VraHihZsZk2hb1",
  "key22": "LMFavtGG9Nhp2yaUtgUu611KqWAbBzJyS9vSbZZqUpdUNkj6k3udE8riMGTfRQkGKnTTv6BKnabV29CNffzq82X",
  "key23": "DJRmKxnGoyWQkAD7yepBxqgdnTjs1Q98NbnFRGZ2CC3wnfnDi3fLwYqB6xpyZYD7yWCPBtNb9A2TzejuhsvX5gy",
  "key24": "3xS543HBYtLfQUE7fKFWjLNMTQeJCs4wMhhzG5BNDRvzkPuV8SiKHKf13cebn22d9dUZCUfB6L7BfjFWe43sxa8m",
  "key25": "3iJv3byBd8q85eAaT9wy9PD7zfvgTx6PD8GbQ9fscsRkJxLPWYrt39Z8z32Bw9HDVGKkzvVYDorFBChrqd6Wdxef",
  "key26": "37g71nNqM3LkfLrdM59ALUqDxgXRYwWL6KSCn9kaxxQHrtiD1hhy3yZ7eypq7AVzuLf6HRiz7RaRMJ1m3vaqjrgR"
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
