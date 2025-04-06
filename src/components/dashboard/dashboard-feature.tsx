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
    "3NKAcNXJDEUjiUD85jdj1d3FfQZwUduKwEneicqifwS51Sd1WSk8735Ut7iAR9rgEpYGPZ3kQFifUKsuaNxKZaHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BTTTM8ri28gArePryK5brxezRELkGqQeMFZoWBTuLrFD4Sb2pX521XeL2ajCEjHgYsoHP47uJmnuFAmkBe2Leea",
  "key1": "5KhLVyN14VpKouTHu5RiNr2oi9P34RSBRHDxtTwZYtE7UTWX94EDRmsvdf33Uj1GC1r2M9r7TxhRRyzVS6iiANBN",
  "key2": "2XrGiciGsi6hikMcjffvB91uGufjoFaDvWokAuEH6XLxKfzDyfJFHWZsEeNeMDLLbNUMqykiqnJvE19NFmrsNjnf",
  "key3": "4MAb7RqHSNFocwCP4oh7JJq5dqUooHywPsoYxc6kbY1HpwVdmCyG5eGn3JBe7krGKg7LtHauZr8dVFA1yQPSKR9J",
  "key4": "mYjHNAwu2nTGWqBYa7uxz19ZHLufVwvVgb8a2Xu8CdYXaF6fufLAYGoaMAn8y36164YKSnc5jnW8p4Tuy7fb5ky",
  "key5": "2jRgJqHHrnHs9WkeKCwNdv7MJqjS9bHipUJKvEFcj4SmbmSXAn3D9D2tAenYo8qVKjSRAmpwpNJjBY7bNHwEUjtC",
  "key6": "37gTs7cyPakEi26JQuGd1mBksa2ai7sjLTnyR8SjhAadWGZiNaK3MZog1fxgFX1YTd998GKX9CZZgVtCsBmqU9g5",
  "key7": "5VSneV1bT3cyBhKpmVHGttN5vcbLPS2kxzpVSPkaypmsTKweTPZdJqwuDKESshJAiVHdguqh2dM6xMs5S4gNRfW4",
  "key8": "39X2wuYzDPtJ7fkNqSMC4t1ZhauW74yqPhoMKuJsuc89e3Qe63ZMw3tAiKuP95Bs4RV84VpaERkM2L9DFZGF7zBY",
  "key9": "25vJ96S3gnwLWmiaMgjgqakRfd7CYE8nSzdbAX5czexGKNc6JX6AMMEn7KL3F8Kagy2G7bVUAZZ6DWKUfVf7K4Vu",
  "key10": "5bq5mBwJZr79Cvfbjx1C17urqf57KdnJ3YEa8xCsiTwZrXMFrU94JeTjYqW4dzrpjAywayoYmvy14jwuHZGXbsad",
  "key11": "2vfMnPCophTyFCbfMQbxQcYqJgCmAJ2HtjNYd6ZVnhXrbqWz5riRyhckACj88AUyNpfAtwdZzGQvCTFKxkiaK1ys",
  "key12": "49Y1eJZtwKaJQckeKgYAfXSAbZM1hHXhkXSPEbuPAX4YFxZ5DzVLFBymM4gbyayYAyK3jyZTqCtHPUexJa4AsmxF",
  "key13": "2GUk4kEjUJMU6KUWgcdV4giRRYBkWH8MeJ7MPubUFmCQP3mjWawExvanUotW73uR6W45kpteSYhNeRqy7ojicA3y",
  "key14": "4LgAM48VcVUaJ45qv28JUo1WQWA4ejfLvCyKqtZPFtRM48mHRvGku3a36Yr7paotFffN7j4aXpC2334EY5JJo7bA",
  "key15": "FKHGZpTzav5Wx3iDEeVM6mixHrPjLUwjf7J7D6MHP3SczdP5mz75C2fSJquVoVrNisE6FiPzRVZjEZKQ8utRYGF",
  "key16": "4JiLVSdTzfhfzWCnVvLLpVTLsatBvgEfv8zKBVhPYLsx4Ju5ZKrsCSwWQ2BSHig1xEdavLAJaMYSQUkryB3k8gF1",
  "key17": "5onLnzh2hQd2H6QRdaesGSr2SS6TA7by9uP6VhtsWnMW8VpehVUkN3nhZbk9iTkAKa6SszDT3iNNnvW35nVnqpMa",
  "key18": "3pZTbKgs4gZ9tB5scmniYXM9oEYJ26cfP2b97DmnTzRKDEq9tsKZXTB3nRvWq2Yre8XwLnwjQgV2oJvZL4bR1S7m",
  "key19": "4E2C2YNDWdDR7xWodYZFLm3vF28Vn1mN8YwHMoYo2MF3XTykzREWBigcABEVU26Gt8ULHeBzHnRadU1BGEnPxrdu",
  "key20": "5inxif3BKqC8F4S9QCqCsUSRTPgaPzKUAqNum2eSK1tw3sgeXy42rekTy1v1bUpCi7NMfiCCxejAa4n2YzbjncXE",
  "key21": "5gx9f19GzCrvD9RHmoNYQLtxVrnMcx1cnKiJQcsfzJFPzzEz3jC199BG5vMnmycyRa5EtvcpqNWKsoE51NwuKYL8",
  "key22": "5q7MPdREKS8sxxwk3tZSKYZtmdKjGFqURyCRPcnqA1csmuUmnh9YJQi6pCNuinZP66RHwibq8Ahbd14Rj44g93UW",
  "key23": "5f1W1Ddwvmpz2DiyQsUwR8mJUra6HNL5PvYf7qZFjFiYRRynZe7Wy3EEKspguS3BaESeMFByEXGhGgXMS5meHUPe",
  "key24": "2JjJGq71opVqkQfKMZkFwkKrZNHC6uXe4L2Q7TSFSBvANmh8zi2sRNsszXM93sNQV8pRz3X7698f8GxeoZXoyMc1",
  "key25": "4dSs4eNmWKw3kSXzC32q8dRtkwrbZvZmveqbXknkKwXE6sqXTbsnq6kwbqSoShEWbv9QUEjVxWefzzd6mZD87rUM",
  "key26": "4KVu3DYqNvpA6Y3agWxjgyhGf91F2GFeCUjXMUsNoVYxdjPdjWNfT2XwdYVaqSFE5qgTH4dZ7acrtrKR3AV8wmnY",
  "key27": "31QsMRxRC3saPENEMFS9X2wBY1uEEZd9wjPwUjdnpCcaHaZG5cDaV9fuHK71o1Z8cTzgWU4E6XxB3ojV5GNetRKn",
  "key28": "2eQxNkvDcMNV8G6pRCmDNve6YAYJQ1YDsRS2MFTWsXAAeM9HTi6RyYTJNSh8UW7ruEdWjh5EiDePAfjQY8cFs6Yt",
  "key29": "5fQY3nKuEc7uzsc3iwh9UP56o1ksPKZSEBMUTrubcxE8Xg1scXR1MmGVFxgmVq5Ag77B5QrffGrUE26NrtykT1nS",
  "key30": "MKGA3wPqpatcvfg3rMWftoLPVErcBM8qMsvfoNFNu7i5jLuNLT4tBnVKyKSDYrtUya4pfpQqBQqRx3mL2eiiWgD",
  "key31": "7dB9L8shQb5cgQvXnPTMaoREEXH364rWfN6kAes6ct2ZZvfMNXEA5TLtiiTpSNy5wdMooFdd31HnKfXKBA8M3a9",
  "key32": "3MkcfJaJKb92SpdPaFGXHRfW889otx37B3oRjgzSG1gV9mMP9x9jS7vGjE3USUuxHb8hYwZbhfiE7NwntHuucAM5",
  "key33": "4hKk5f8MpkRZDz32zZwGUCp8hB7htNA1Kv9zky9hG2tUUW7em7MVaKnr2Bka3DpPUWxwrXY4hDr8yM6oULpPPEsQ",
  "key34": "4n5wrMxFjqReaHwudvSYXF8dwUM3FnSSyjAXYxwfnw8RKUq36LB8bVWM5FV427WffqfzjMqYa8zcbSxMouAQLzX8"
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
