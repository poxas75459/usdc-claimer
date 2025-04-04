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
    "5KFMToaKghsg8MKshavrndcmpmTRGMgZUVbhXHPtAfoC11uH71TtMxjgLwuG63yyWTs7aywAdG2UpA8nNQPuitj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ixTSqvfUs4FAT322SuGPE6RE8JoJLRq9rsXzFrfVou6UWbc9QRJ6rSXDLH6JRT6Ax4k76Kc8FZG8aLfUcbbdswW",
  "key1": "2rEF4Zs4RG9AgDuadyuErRDGNAKoWWyhYudTT4tKhj99pDrq1YUJzZJptuR2HiSwLoXN4AWefiHqydjDvirgdCze",
  "key2": "4YfnGdkmgV6fBJtTpGSx5bfEveZRXKBJAQbxdZNfEBSZ3LiAN4TFaXRsgoni5x39Xr8Fq8jpQdTTx9dRoakhN393",
  "key3": "4ccrQDe7H4odbk9euVEJUyykU2j4RN7DB5NyPQxmpbY6sV4ofVTudRDarF6caGKa2SCKuv1jzWBBimRU6EzRXxWL",
  "key4": "2U9B817Bc2dx8Lgquju9ckm979feUg3sa958A5XtDWstzMXtTzf5PtPYDm7pnYnmQKZo2DWhwzLKg3Jquhb81Puf",
  "key5": "2J1W8K5SypmAxGnsfRWvtNQJfrkF3WSzXUF82CVEYnByUxg6tUcXtNVKVAGpSPqsFL3jXffUr12kK4rpUkNUy4gM",
  "key6": "5wVc8ibAzBZtoENVM7vFzMqHvaTbuUcEENCgFBUD1TKcPLpyMuRdZRm5F7nEptQft8m8gRpvZRzkFLn8Eou9bRbB",
  "key7": "4Amu3xaw3bsSzH99yhD13i8meiC1eTznmnmQenAXR9CwVpBsK1VHKw4Jkq3ADUxv17i5JP6rzSKnXyMxrwAbg8cy",
  "key8": "sYwcmrMEuXGvtMSjhTQAygEJgGQUcu8f3onRykBEuju2zexuwHzVLvjbz6VV8NgVQek8TYBLoHMewuQ2BKrYEBu",
  "key9": "44fLWTXedt8JSNBS4k19e9EgFQYPQt6jBeSPPbCWXgYfj3zN5HpMEcbcUhoEYXywvKjnwCuwkFwMo4KFLVJTxEYh",
  "key10": "4XSZ52iyt5MWJa7ohBrrjBhr5cSymYoecjQbkD8YKoRrGzwz3xBGS8W6bnG9mDbWtw78bfGUeftzZa7iWvqfyfup",
  "key11": "VhqWAsBpw7u8eCFVjonm2e3VtiTXWQhzesZBHjZZQUVi9RMGvyJ9XSdkDLH1MmR71kRMmTo5VfHpiMQDjttcVzQ",
  "key12": "263JFpMQXVi8LhuvSRCz2Wdt1b83uxwkjC3Dn2dNgZZHwCVyg1NHqvR2cQQ2hgN3Fr9RaYUk6gYgFJ8PbkwkmcKj",
  "key13": "GRBZqWPT8QeLx9gGactoi8DhKgaepSCQaLgtANV151XkLmVn4UPp8YSk9zsZwjXXzhGhTPwhHGsxiBwJJojKDkX",
  "key14": "49oRAthk2oV7njFpzhvVKMRwUSsNfK1QVSksF6dwRzUH8uFKyfYe8czELt4CYwTfiB57dpqzj9vS5HaWC3wb6sRv",
  "key15": "JMotBvStHoSJwFWsFxJsgKmUzN2rV9z24jKKeRj6HCd4ShXGz36wcSkv4oLHRiSX91cqFDy6mwF7mCoPQvPpoC1",
  "key16": "5Lp7JDTvJEkoAzVjkJcLsmwrBC3Uh94FjvBkCE6oxzC5b3PVFr83coycyZ8Vk6LPcX8JBWEpcHav9xd9UyjyL6m4",
  "key17": "3z2o9EHCPurCfqfWvJavLrxcjD5vp2qjumyCKQ17K6LofVDiUdfC2RXq8j5kA3zGsCBu4Du5UbCNXiMncQxsK92B",
  "key18": "56GuqRZLR2aNrxcDLB27aR9LpVg7WMe2Er45NLj1bKGz4PftEQmoAYBYXUgJ2nbt9yjqBkFsQdTGbHQ4xFVaTW4a",
  "key19": "FRbkNGkWAmyECb3nmsiRMWJKXz7seZu4nh7zCpCetsQoLS9ReXRZwaMHQoRLaguncev6oNtqnGgexec8ci1ZUnP",
  "key20": "25C1GnyXd2KswdN7MUTU3SGqbBxans4yHjjUc47rxtzLshRFt7hGeKf9UgcgGFQ787nQmuBDaUeBLqwDDNjhjyPY",
  "key21": "4abgCRYJrBF4srKFSWsRy6RqyDELvH2z1V4PEDNxZr5mihLo5YtU7qLci2ySM1CiAHaLKp8t1BEA5vpZWXiDZTAW",
  "key22": "3BQ3tGLKcWRsZ6zyN1SzpHprLNRop5o7XTMbaHSw6YeB1H8H3n2XEUCb8YLndQUndqtZNa75fYiMxXT8aca58Y7J",
  "key23": "24VtLYse8cGKuZcb7txDiyMU8RpnqhFFXdaApDVUxXaeqFvkJMwd9rMxDdWDGvF7BuUgzagDCP9SLF3kHDgwPV5w",
  "key24": "3gW6To9L1C6rUoZYvvVZ7PzAsKrdjRcBwfGiefVFJeRTnTjU9BkUJstjDWguE6NrkCBS76XD1F1roswB2WHY9hVK",
  "key25": "4SjxA9FaZF4gGC4xDrAUckBXv12bTbtVHVjSkiLrx6fsoFavyBbDuHArRu5CGJjv5dZyhii362Wy3ejSqZvY1Lnv"
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
