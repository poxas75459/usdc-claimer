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
    "369qhUS8bGs2SDvTJok7Nh3dvYecC5ZUpyDFME5eE6Lt2G1mp4s5rQQMs5V7Mm2ZNirrX5H3D3jH5QhgnzubWQHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YjJQmhe1a4w6fA8suAEdKihtFj5tHXffQLNNpJ9NRdAwRnWpGUTLtpUSM8qhtUKLsKziFn38uAvteR8tYPgwqZa",
  "key1": "4XtFWF6M1BRwJqpcWpmDHbV9pC2GcFmebZ81oUXX4QD3juqRULhc6FmF6BpjzntWWWECmjfnotqodnSv7HWo952V",
  "key2": "5uVrixvShEnxyH2KoX3d9DurDZZ4P7umaywGEJ871UwWMQFv6AeftyxTzTvYLVewtKKNXNEjjbFnHaew3tqfbtfZ",
  "key3": "3HLZW8YMoBqURyPCLeywVwtjN8uzhtiztNex9nBBxsUi7V4QWb91xqYw7wdD3eTegoYgK5BRjTYw13jX1fAVz4n2",
  "key4": "4AaMMtTs65AxnzG1u5ZSdk3yYuuYfM9Kf8rswukZ1AKAix5WQXiZDBUBKUPgpkqjTDz9Pfxv64Y4isMWj3b5EUUD",
  "key5": "2NzdS67e8DjF4AKgK8uB55JiDGxDs9qahgAGVkuyyhQzBbv29omCFcm5rUePhTnCNMVc8pKdWUYWSPpWfXLGnyyE",
  "key6": "4j6QUpyoNVex4jPruRUGdgds6GPEYD8fPaqUhGQrgV8Coz3CjUgHoo7BxV1gmEUpfu4f6RKTnFswiFrrowcSjCsR",
  "key7": "2JnWCPKRVthNL752oT9k7KzF2jvaC8GW2yaPSBRBs1Tkxnnp7pHQctVvkA6qtCpiqJxHbDkYKAsccK8dJskMCoW6",
  "key8": "5kPM9u29V9kNuh1VoJNyUuFvg4ZJz9PM84MZnpbkKDk7UBZqJchBbCUV94w23XsgwqjvbfbQ3xvGQe5197nTG5hU",
  "key9": "4sq3y2dNiYMMZUQfUnhRa7fEvc4eA5SEjkdw9Drtb4jvRdArniJk4WvBvpU3Yj42uQNm1C4GzNEDR9SPtjztrxEe",
  "key10": "2WosyRZ9SkGc7ib5FpsRVfajWvVYbKuJpSMTy7XihjdQ8ogoF7BxXBBD2y8XEWGNUstEJZX8W1zpqHgLGAkJBjsn",
  "key11": "57bzWxfDF4uUC7YTCed1jXxMHF1EykgLXjxmtTfdGcsPQ5NCrcxnnKVt6JmZfcrXkW6e6hHgeQM8bgiSHr4To8Uf",
  "key12": "4FrjjPQgGqziBoXKs34AYGdRTZnhNDh4R3yzrR8YHdSaCPQwsnufQrnvrGwSc1huKm1g9ET9rTxDJKLXEUX8Gz6s",
  "key13": "5NnVUZRpn2AW14CKWwB5wMC2nXmBnKPqi1hoszCBMQUD4fa7HDu2vfzvBCxjCSpqMSr5ivvu5D64sELxqqayKbEN",
  "key14": "5wMLLDcUiCYYjpk7iDLTBdQQ8o8dG4tnxNF8mEittw3c45nZSTbAMANkXUi6RzAT1VqnyMjTsdAC54m8MovXW2Qa",
  "key15": "2jLceQoqFRrviPHfmPoj3T7Ff4fQQFb1YLFNhHNC7uZCp9S2UqPh1FrAUnidCfdYKks4pyvfof8h7zGzHWQzXF9d",
  "key16": "5XqMAmn7qi18J8zCgPqgRRT9aWuyCeqgF4aXsFw2AFhGphVLvjSYXw7GXxqkZFrDqJNRwoEixhreLfWVY85e62Fo",
  "key17": "6KSCicqdJDNf4QCpLwnx5K6PBqFfpRDuCjmWBRnbM43uJDhZuYg9Xk4jqKwQSK4jgEMKyWWmyB66B51SLcyCviR",
  "key18": "5hsSom4btb4NDmsdd5ymZm8Z6Fp67bx3VMSn55m7CSDxBGfx5UppEv3WdKT5mVAE2N32bfY1oDHfg9zCtuYNSiUx",
  "key19": "4Q74u9zuWMSCjkL8Nrai4dx8qfGHyG5sYdBDARTmNQL6bJvjoQNVg7JgGhwysH12dGXM17JsE83Kv6pt7YEnv8Xs",
  "key20": "43aWjHAFjM9KkZtJDFtfYXyHfuSHVZzG54QjWsrR7s6SaBkCe9n5R8AHyuxh1MHGbVk4oG8HQtJokxWRqDdpgiSe",
  "key21": "Zj7Tfo1M8ZpAaY1zgpfA11q1VYYNvxiMWzNM81W1BS6CTPzSE7kr5nac5C3dWKMFuhXPgwhqhdQ5ea7diXSsvXJ",
  "key22": "1j9y4F2gXKagDGXBV1vsLPjXNBtH9RTUH34Ec9gbMMjTPwsHhj7xyx5LSTtEJvLx5r8R3V8UPS8pdCHw5yPfcpp",
  "key23": "4AvQVjMVdXWq72rXeT3Wq2sfNYMipW4CXvinhgBy84k23XrpqJgTfvXUjqMtaqdBg6vgyr6HnuoPYPTJ9VqiykoV",
  "key24": "2enfgdiiJ8M6W3RoQzjfpCoqTQpbv9b7EXb5mVKpSaYWMonv4CHoajsa4ojoBcsQpoyM8W7veJxx7Aqnp8Qihdgh"
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
