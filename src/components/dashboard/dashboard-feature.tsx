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
    "39Xgk1k8k6PiEpRyiqA5RPaWNzEgkDjVBb4k33LCWaJNNyRu7M2RWisLdRdZw8RyixVG1K5EWR7PtvyhEzCn1gBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QZ6NfksEsbqPTqhiL1DW1c4ZoV9vb6LPkgaBAgshztYmEJy81L4GzigKNhYFdXFF6qhdQpcCkzfG4DWaehjXHFJ",
  "key1": "3Nc3C6y78mwbDMmi8ioSRbBx7uDoj1KhC51Mgied6NuWAqz64DPGbSWsMw8mRxT1xeud43vZzWmX1PxKpYMZ92iA",
  "key2": "4sSJTJQvsLP58mJtLo3r1HwPFhUnMkveHF63uj7BrxekmmPnnzpwhZNpF4KoDgmV1YtohRWvBBFfj6UQeQjFcksQ",
  "key3": "4WEcwjLuSThb68JgbTrHVszAdaAJwwTm1tmULmfgT3D332RFTWh89pT6PjKZyyNiig6PrVDmmAgHhfEx9hGYwBTM",
  "key4": "5odivo7AtXqB7g61TGUcvFBXHXQQa9SYcNxZJ4Vy7a9rjsdDKfm3szXcgxb5kpXVCi1tj3QhTZ8VVyNcnEfNNZJE",
  "key5": "FkNNnk2RppVRQ7dmgbwdbv6qRCoWK5BnxE5ksuPYhyM6fJYNgPoYLjNWaBGmxGKtFGXhHkYrYKGjAkMaZNbycYV",
  "key6": "66oh2GTmc1pLyGfHuK7nCkg6NTE8UYk4HTuGV4BweqPGab79b3AmyZFEFPx8syP3v5WnvxDGxFWXyNxJfkPok2om",
  "key7": "58yGH9Vhu3WdP9FM23nK1g8ucnBjjY5h8Qit21Tg4Jk2XsavDKed4ndSFfGoKUvdrM1mYd2MQBExo944cvDxCQdV",
  "key8": "vB6pndsatfhqrLpYeAn8mSQB3LMCL5n9szZhg7BVMsyh5iwegyPJqcXPGi8cNuipGWEpS9LK6iFnFR6B3bJyq7z",
  "key9": "3BAqPgxw3gxMRCKg8SJ8HfZXCZ3rJhp7oFdiUm82DPWESRnLa2hj6dkubQcPhBnYYfXMJ6DTGRyfoujmcfeLe2XU",
  "key10": "2fj83oTc8dWGJyMn1iSqqJT5fzWo6PHhN2PpZ9yAxXPvByaszenqmCQsWETgas3cMb2u7EKA7yF4zfczZJzQ3utQ",
  "key11": "2MigNNYUPGwF8SBEpBtvXSiKxuzw3gtckwm7BFDkB9MTeXpkquat1cbNxbgj7gmuyPeLg2R4eJAfANMbsCqTHh7J",
  "key12": "5gw1p4F1Y9LMqHNXpN9Msk7dRDbbJquzDihdJ1tZ4dExdYmaDGcEgKwR6xK32eQEi2rAzajBq3HiufFEu8Lu4LwN",
  "key13": "4m7YLs7e5ECZdP4Z8s7wPC3tawGRxmPtrVegPNx4deZjZfm9ZL9fEpKLyPHTmB4DcCKESsCrU8nN3VNgwfSBJR84",
  "key14": "4FdsjXk1Vvhya3CxGjk87BuBQyPQCLzT5n4JYjMmffkHgyJh2xn5ymW3mcnNnN9JUohNTANqp3QxhxcovwCq25CW",
  "key15": "5d41m6x9BT8SUxZDDvK9zBTWCy6yNzZpHo5kJcCaVFxb4tZgYF2voUorKJjGABR2uKq57jg3gMCXu3GaGnEYU75L",
  "key16": "2RSyaZxU8SHmrFwzjmhxfVuWMucQMVBTFdrbGJYGJichcEaXv4quzef6FdJo3ceofXtVTQWJVpqBxnwHqJFasNEE",
  "key17": "4B3afuLn8hq9Ema4dbY3vgu4gJdWmApqfvuZMvoFGHZBKWGV8Eat5uKBuUxaEg2mCo3DdUSCpbobmpcxmkPkBsHa",
  "key18": "5MhJgQsvuXi6KoTfRkyPNoccVKsDTemaHVW2Px6viMXLAVhoedkDF8Picf97UWDTsXNETS76po9SsuY8au2MBGue",
  "key19": "3rqAJeCZWHkFHWa5xuVv8bAPfRsuC78tRmQ4bEDrBZJt74rv8s6VY1Xg8mZ6Djsj5WDKtYp6nijkeX44x1apATfc",
  "key20": "2SkpY87xmsaWGHBD7s8Wo1YSUj2R8GY4ZNn6v8rEFZ6k7b1AukMy38jmCdqHMzViEEqWqgL2pGqBD7dsiygkws5Y",
  "key21": "4s3YBnoEM3pD1BQrStyzicH7Qh2z3haMyVLz3KgDEMrt3iZucYuH1FcGgFJ8Lkwos1hKtFobYCjWidj89wgYEM8u",
  "key22": "4m74G35bMziEPcPv4D7QeTozY1AoCVNEX8ikGDmUoZ7oLn5h5AU6PEPMNby8qDHNLQRv3NZw1vr4NNjmBfNZWZxt",
  "key23": "3jZMB2Tdjq5LXeShpRnUeVLJH3HXqBtQ8Kt9bvc9NbCAGeXu1qw2kmLAzrvzsmuP824cUeRMQzDXR9NagW1iABLD",
  "key24": "2nmxvwKfHtNhDwpUJrTxqqRE3cWRuyhnDreZsMt2b4qsdhRq3Un6dLGcbe4EgCrBAmNa6vxnE9an4p2wMv4jURuW",
  "key25": "2wTeMEWSAeJMSxWhT83kDxyfykkvaDHfWPWf9hsHSmomVuXQarwiWJSc1d6KyhT4fNWnr1wceN315R4FkKK7rJGr",
  "key26": "4zXs82gVxiT7YbTYFVCFByLc3wEs2eCedrMiE3iqUowPzMueiMRZb3BBGBRBSXx1g3DfwpuuyjN3mTByuzBHnPGg",
  "key27": "2Pph4LfAD3UFiWA6giQKhsBYNHiY4Gk2bUo6TLKVCL9Ba2HFxbD58GcKDgjY1xxY44L2VVEdiJANkGqRXwtSR4gP"
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
