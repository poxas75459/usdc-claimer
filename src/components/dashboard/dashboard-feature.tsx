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
    "59dGaZHyV28RUJvAyk79GdgL38dZNYqYTqwKEdUihkKn41NeQSyP63R7vH2jZmhBxrU8wKBvttLn6ygXYvYmL8A4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qCUi8God6AkvXfUR9ZZg24q7cLqj7AnLKXp55nvjBHcfuqw8essgFe3ZPV5fKtSZZodVs6rEG3zysyGSfSMEkcf",
  "key1": "2jG46WYubMz3T6yb1JGJqSrKCnNEZMLYRJxxecuyniLPWRsAWEF841DzdpRHs8q2t1WpgnHmso2Q6tCNfzk8nJp8",
  "key2": "46fVCRafLJCqT4A3cSHsQAzp6Gzqc1EsfC11uv5JykXWG8WKxqB6SW6zPU5sVLog9HRVWR1PrfCXBiVsgHyC7EZ3",
  "key3": "4kjLf4Be7f4LijKLvNL2kHWyw2GRMsXLNyibiyyDKYSrAb72jRnToyHYDhchwgZND1TirjHjL2Hq1LksmpmbfJz1",
  "key4": "5crwTMTVsWR3cxioHo1eoA5BafaB5Lcuu6ss8g6P2FyJpRhyk5A1KMJL5pk8bsLwqqgUeDhnw7L5kZ7j5T7HMZCq",
  "key5": "5d52g6cZFH7pzzPJ3rjqg1awWKgGxGtzVGCG49MWaPrNF2pXA2oG6roJDQc7UvNQ1ZpT8FjWo4GDACMCByaTBaiT",
  "key6": "5V36yPFtAQUWQuFMz1HxAHZz1CZnZRv4r1hgGkVJdA53AEwEKSoYUyZAJJ8zZyN9MWXr6q5bD29uYKWGpsrbrUSa",
  "key7": "57vXvXimWXL9BqFr92nbPkhug8QvqjmEz3T6kwXoznoFsvd6RcWJygA6xVi1F1wTkMeZ6W6HH9jxv75fvZ16t7Tc",
  "key8": "3RdFux9jFRmgStJopC6gihakmm4fHtYPKQ62ZCPonEe753TbaZV1jRYV5zNx5m2TdKomcKZPg6GfHUkFao2d8Jkw",
  "key9": "5KQmtWJWckF7ghXDwNpEMxcxdaDrsBCPfqBQjrWoFFrnaoe577Y4iCoGcFpFqq2WHtoEY5mmUGzXAPSQunfZDzgx",
  "key10": "eCU4uMaWDF5NX7tQCkakeEo2oyhh56rPmEPa6oE7K5XxhPTyi5qnAyj9W3GfnSpY7N9k4CYwskn5sByYXqWM2Pk",
  "key11": "64YJHKd848247eGsN4oxEUcgNvXMN5zCPgbA1yCdfh8PhXdcztuTU7jZiBZyRNpM3gNjqo54qPAWFSbZizZhpTS2",
  "key12": "2mdT61ii3deeD6NYgempRXLG67GD7oywhdtY46yya37izUzj9ZGGKHCDGkYVqW4gwnwZp5xxCNRwQ6eUk7n3pFNr",
  "key13": "3o1e3WUbM1BKExE2BWEXgLnc3UTjsPFxJckyhpHKgFCaQPJGNU3CAbEsP9JcP4UR3FTkFgotGLJvJ7w1X418dQfM",
  "key14": "4nWETfs3C4Pp6rnEZHJVhp85s5mHuzC3c43Cj9pddc4cAS73hysy5ZmN13VhcntyZpZPThQC8ScCwRuXQADrV46D",
  "key15": "2ZKhqsvoBHcYEjHUNUd1PvsTyexq7TELeNHDNr5LWpLfVs7GHfARFkxbgSDWdWbgAxYuGB1AddemS9kGFJsv8eCW",
  "key16": "5wJqgwBSDBPTRPRh3NSi8SNcKPBqKAYCkVFtLW5F8suhXxjEZDmijVAfJ8a5Rg26xof1V8w8mwJwQVa2yUCHWxDx",
  "key17": "2xQrew4sGm3Ueop6QnupEmj2VLRJSpWSm8sEJiR4VFtVoTtnTghfch4PoceyJmoLcReYKSu2UbSwfYRtVKdgfQnn",
  "key18": "3TEEz66YnQzYheNBMcUDkjRBaLia1SY8fnFqJrtCD84Kf6YZtqg3UiJnH6bReiZ9mELLbFe7Qe5i5ggg5iccz8Sa",
  "key19": "8eJb9z7ifxqZMurmVjBVXLCaE61iJH4t2A59YcfnRa4VbpFdQnHxBzoe8d6KFHz8rGNkWgtuRxUmcckRmASuQ3C",
  "key20": "U3eda8DSer6a3SDCLsWAuaMKWFnQN5emNdRbPBUbAXFLLHnKTVEjw2Eg7rM1w9E8QCpt3xLWGx4TFaDidEejBQ5",
  "key21": "nawonFuyYhGCC5S5vRGbHVd9iLhGGbmU7FnxWEE7M5svSkxWdFsUDkXVWL6r4uJA7HbXfVQYBTXReaXzit5wDzM",
  "key22": "5DkVq9hrmLGGyz4jfn3wQC6JiG92EnKC13WZFg21jzVJDstbn5WdSPZDeDQu2jFoBt9fuFr3VXg4k5mXPA7jnhjD",
  "key23": "YKXMQKvWYZfzdyUJyK9vMhJjq1skG17DtbcArTuFT2FNmV5iLEoN4ASVHo6cU8WgHEk9bf1QY1yUhyNGbGZeyB6",
  "key24": "5ZEjy9xB7cXNGXRhP1RWa4rdab6XBDsYXuxmkeNULW15fZfSVhfnCocGJ96dH8GKmJ6Ntvm9pLYwLuWpSqKNFmRp"
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
