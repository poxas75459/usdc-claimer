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
    "xqDLAUxkAiiCUoaL3PYKHpVwDb4ULWCqAiQa3yUb2Nf5gQ9yeQABqoA5m9atTEFZSNdUMWcaHwYjG4Zx38W4Tpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NrZpPVgNwXB9hNttL5bzrGv9M4ZQggwqTDyjPqvDUt1Q1S6wGf5nU4ePPreF6em1xS4E6XVsoVdZZj78ACNWXuq",
  "key1": "3SfqETGSnwoojRQpTL8m9bBaXTFdYBDLdKZvTa26M7mToXcxvJLSNQZ3WQdPVSnBBzdHoSMrEuVtYsXYqUb44XWK",
  "key2": "4v1mcsqXH2e7aU4Ndec4iQVhmsHb9Tm5bZZhoY29DuW5shaQzF8kz1G6WQ511z5kUdd2nK3KsYuXS5mmEoKkRZZz",
  "key3": "4KJgAMDJS65TTYrZsYiGpA5PM3FKrY3rg6h7vFMo5htXRTSEkuDBBu6ikDUn9VQscK1cMDsgrFP4XcGVWFzKf6i7",
  "key4": "5MprzEHxkHFkgAUXzdYzwSDxFBm9ZB9p2imQVHtYtHwcc1mPRrKv7yVfvcMtw8BpydRNy1arge2y1gzn5U7nhZET",
  "key5": "2gbeH7mvySamAUooA84bw8TxxueKWMBF7kMk7oCj5RpC7joF7ZummggFT7HnxzGgHXeCJ3ZX4wXjde8ZsA7yy9FA",
  "key6": "5XtWbjdj6BwiCR8mDnt3KnvhGnnr2bjCTSTfFF6mfMandWvqr3PD3HukNaRfFK6VitGqVwju4guCBrBkXh39gYf2",
  "key7": "34u9AbX9cYnu7B7hBfpwg6zPQeAmj67wG21oHLZkavHzEPSaPRjKdpMuCF5AcyjPN6eUYcx6J8AHkF2K6gwtqmDX",
  "key8": "2ANDSvgEPjAXuTKtz8v7cMN3S6jf3Umw4QMzxThF3PQFwW9i9oMjuGXEYr5aKd6xm53NBAo3bqdUBdzn6rWXYUA6",
  "key9": "3sRrHArGz9m5PWWD4w8ZKLvjc8QLfvFsbnj9JcCPWQiX1L8cjkN2ybLqDmszzMHzcTPioVoVqqxkiYTtSUbV5Zwj",
  "key10": "SJzwimBjZiXCR8GKk88vUBrbAHLKYmW5KKnmbJXCTAJar9jjUSfnmGXS76GT9chCvfrF9fgr4yDFDqBe2dhBLMi",
  "key11": "5sXNFfpLRCG6QwuZEk7P6xc6kVfuq9QkL9A8Pu9hRmWZ5KNjYtiEaf7StVF7hWRD55c8nUJfzm7iP3qckz28AXFq",
  "key12": "56SFcKdaufJpSVvc6XfYuzpFh3Mp4XYYSmUyxjp7d7gm1CSfZxZXR2ZKvoYbEav5KASuE7y5aL3yvFcaiZpk4Lho",
  "key13": "51c5SjGa19sjd6Q622BAYNf7R5W8zqMCvQNmg1vmQAdaEPwuzfj4edPbBXJe9KWiPFoUtk3V1BTaPhKyeNyx4nbj",
  "key14": "3fyfQtcAciq69Az8eFDS39YtMDt4dUqSZrmWPhiaAKne566fERh2Tacnm5VugmV8ZHAxmnVMBTogiXrDLNqpLSVj",
  "key15": "5qzXCxMunUGmg1jWHmMixKwFuzxqwLt7MmfC1zCmmcnBZm2oi1V34o4XJByjjp3D9R6LP45vLn64PDfz1biqDCNr",
  "key16": "E7QPtvNgQkhx3ATyp8YjJhjMQ4A7PcwauNWLpWn7MmtuFjRRGoDQgir39HCjAmxuevgjL5Dsmq7WG3KDkw98LAK",
  "key17": "5G9Ur78mupXxCMEnyuEHu5JEjDUqpo2TR2MZjdkLfEuN4tPUdqK6NSeb7ngWDMfyoGRYgBWvP5bwWEU17YsRDn9H",
  "key18": "3sS9ggXJakAhKUdS4j9G22YXNF6zdaHb9FAEEmzv1aJY1ZPzEdK4QACrHXXtMdzADkYtTGm4biSZXCdj3etxesWU",
  "key19": "66DgiSPKqH7i43h6Q5xXHkkgRMSo5kegwuWD7ersuh1LfCaU6KBQoMD9wz3VS3PLJDYgXwJLvimmnycAzPCVxVxZ",
  "key20": "XrqPoEgCvshqV6yZs26Nbo3TVYygMSUnt4a2NhnFfMmaFNYEPEYQchsgsK4kJipHauY98xWwmTA1CN6sGNGQaY8",
  "key21": "2gEJ7uGduaVmCz8MWmxuvCDRnqtGqpmxcUEHJBSntGK7FyLM38a23z5NMyC4zYLdJhPGTySii89ixz32KRCNjxKB",
  "key22": "jwx9HmtsPF9CBSws5in1irWHBmC9Gy7BNeygbwkmAY4HbhH6oS4ELcTFVzUzh5a5HHJ1hCF3wVCypFAgNAgD3Nk",
  "key23": "4ahwcnLtDJYQjXmgvBsSnPgk4A2cqtdxzX8w42iVkpBEEVs8oUJbUsLe7y4iL77ebH7RiWPAEe28ux3KHtPQH6z8",
  "key24": "2yaVGcwFPmsN5AHgKfwMxo2KdAKAWFCjFqjEjShT1peAWWmUC2QsywJBaJ8uWdPP8fB8zhPcQL8jCMRazwhtarpH",
  "key25": "5EiLgbdwkrF91TA9mPhUJzkopCddGfeVNknSgxuYTLtDgjAt9eC9eMsdWMt3DNJzMyj4cLSSnhdfzAdaBLkcHXGs",
  "key26": "2LcNg4TxTCJeMSpoiuVrjJr5f5sYo6AMP2XvsVqCYw9vy4oE7T8b3SP7gzCcvsYL8aCBPm22aphye4v78t4zethn",
  "key27": "2RBybZA28wQsno5NdkMGmewqe5R3g3pJnVoY5idGhdw4xxBFoxCM5gcim2qmEKCegLfDFFdxEQ89FyCyRLtJBQAD",
  "key28": "35AurjMsUuTPGMjBWtEH23vpM87G9UBpKkV9jqjkQkLPFsoGKpvvkV3VXcTL5dybVqyxoi5n6myVBHLbm5hAGKcR"
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
