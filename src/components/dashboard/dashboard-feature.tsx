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
    "5JxjMUbRmE2CinbbHdxcFa1vxaUxh25Vgf7KgZpLfEQKywwiSF2Z1BZkaEb9eSP7bywpLsqhYzegNnhkTTfMQbU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ouMFvLakR2Qr2HhkJa5b85jD9fSenCstpZgXKmErT5NPixCvSXTrEj9SuF4q4JUZDZPUf4dxRARB5tgkxzoRCUt",
  "key1": "3C91MJXpEnus1fCt7EnE2egVcB76gVvMGLVE6kaiNMypZ9miJhKfGkpmX5FQQ4oDLJcqKGF2PfX1u2uGFdo4RvD8",
  "key2": "48v3nCiWGdvvHttMrgHNjsTYzZD51R4jPesXpXoREvQQZTjLXc6ZSukZdvFrArkgNsNZPDH3ZdfbQVUqx8mAXcf1",
  "key3": "iYMkzVgDBJ3u78CMeofQUxzk5eygxoVu8MwbrHMkdYmi4c12GAwawZXvNgGtL6ejGZEFNWmc9CJjdUaLBRJdiiL",
  "key4": "3L3LwA8vugJASRfJeGxeRYK9cm1ZPSuH8sTprcWAnCekHfPYuaBdNo6kAQfuWajcWzTkrpvjDcnZQH7aVqRsaQFf",
  "key5": "vfsbVRRNQjAFqz3YGE9E3SKDW7oACeJtBBWBXtdpWH2xC3mjqT3vV2ucpMGzYPpVZUcutwvFVcBx5ZdUyiPgRaD",
  "key6": "4NBy1ihmaZkqY26YSS7uVLEnTBRzK7ERgznsdDnECFjoKSwYS8gYyyxd9bwVVCQnMyfgezWxA3os9oNsBZYR2Lys",
  "key7": "4vGPtVDkwytAKw8PDqoDcnuzrezpL2Kb93Vf9HnAzGzg5KzGXTjZPTRYpHehsaVJyVgqgJtbwppwyZXvYavxsgCD",
  "key8": "3TKeZFj4infpyrpdGgEm6xb3vPUZPvPeQebGBKn5EJqYM64FBRA8Qu8Ge2iYq4dQKmoEtaXYbbAWBV8UU1AK4HLT",
  "key9": "5UvbRiPUSMwoDMRwhuCUz2D1yFMGg7f9JvrSTKSU4WzhHErrMzvtCsm2CHh8iZDvXCx5aSQ7p9kPFEA2fu9kXkS",
  "key10": "4mZqnS64ATeo2VjVDUjzSCWLVCN4bui4rM7B97rPYkFpPmMAeAoFftakKAQDDFqjowpTCGWocyCcvgJgfdMAEMVE",
  "key11": "52Sttw5UHbAczfCMz8ud8EuRWYGv1QqzKP7fJh3mLAS1kEthpWQfagHfT9g6iyf4bJsfb1BRubAwkEAZPfPSUiKB",
  "key12": "9sS5scSYXoYpHC3iu5iFVoiFiHBtYa4CHx8wGRw9tfCCRXXPmiXb5mRY2sDByj7kWzr7HKrd54Ar6KHGRd7aUjg",
  "key13": "2Q2kRhKc5Za6UsAQBmqxeaRJSU3AzvkePexGV5Fa4pKHfuptAGZxK8sXWooB6s5QitrUR6eurDTrA8tp74BEqKRM",
  "key14": "2TTjKuLVXQ1pu6DpnrHt8fbpvoZsWf75DAG16wnbfak1n8PgmpnMqyzQq1uwBJjVCMQ58DfZT7yVyjTWekEwHWph",
  "key15": "xe3vde5aAZPxwMrN1JfMD5Exz9yURtQrcFKYinD4uAP5GymhYy1mfqVpZCWAM3bJ82T9TGmUNZbVtkCDLg8isyw",
  "key16": "48mNkrRH3vYaudVRPTKNMtUYiQcouM7mtuXfyqt9mC95JoPApgjrAFx6QqRmiH9CH4TYwA8Cm2nJH9GKDyzXzgUi",
  "key17": "54Y368zPvkgRgDULHdTm6W3YtEEkfmyfFyLok2kgnnKeRmP918B5dGPgHLiv6K8BEB4QVNJVBAfdQydnBuBWNBas",
  "key18": "5ZaUT3Dx8LQvnodvudzto5xAGMAh2X4ryYLKQKGDcb7V8mmTxVtZzSNGsvbpznAe1hUWLQfnXPKdZDZt7FZcN5P4",
  "key19": "LHfQa4arDV8Z3pjmGRvkrKmm792Mur9v2wF8AD5yPDN9xvwGXzpU1C8dxJq2YKhFoqC9RzH4xz1XJXGTMiteegM",
  "key20": "4JXCTV9EFviVkr5dxNkmGHbXuWj8MTqm6Zi9hBrb6dEF2LGqmqwK7ifSXFFxTw9q6dtT2sHcvWq7eJzWvKNF11VE",
  "key21": "5x1zS8o7PHivYwqZGEjWgtixnQyyYc4tVt6j5qcJvkKXdeWqAxWQYQmKYCzvkhTKiY9XZYKwudVPi5z7EF99qu8p",
  "key22": "5Cu9WZGsH9WDTequ86wEau9YvqNMbv7MTQhqKbmAHmuvxEH2djEaY7ehHDT4MXxrUsGLaVpzZEk8t3ZoGy9X714U",
  "key23": "3dFVjGwyRZz5qUBT9nMKxSKyqjqpzi7a9J67cRXRq7Pm7ZBYqfNjJSB4UjDDUdbTKhwu9AuUrLvwQ2ykyxKVqpQN",
  "key24": "3qDjPG3K9R8M1FuNkfhjRirVdaDfeS4vupvvL2jkbCiSFj3bPNgdPPq1mmaFGsx8dmjBMHAUBBtk5dYziajxaeSz",
  "key25": "3Lc1bzryUdfwkrCDbaEZBVWr4N9D8iVn7Tee1Rbi6ND65LXwhb1eg6CsvEoTqFe74ik3HfJtBSDGvpZNAMFYGn19",
  "key26": "5CaGEoNFykqDjVjsvoMKKxuM9qeLc3gx1KeLS1knYx29nbjqb2mhrrbVHzGNvRTwARioZj81Jo89qvxK9QSxH9RE",
  "key27": "N4Tqd5rBHeE3MHYtwwA2QcRbDXzZqhi9waxv9mYgZL5gpuQQY7fqPgCzPxA6uUaFXvKAaRqtDxtxpGaaWfz3Fpf",
  "key28": "hw5irxT7rGkG4D2tA3STwxJijUiKZ7vcGteTUsvg6xD2Ur1Ujbg69Cie3CJULScVccAZyVaQ9tDpqZY7J6wuKzk"
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
