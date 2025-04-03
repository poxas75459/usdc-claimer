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
    "3bo5tdZXPBVyhL31i3HhNwC26yU5UTcjriZC71Q3vNRSR72zoFMpLJ1dBLvEzNVdoA2LUWfXo2RqVeNBjcqLaaR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2frtKARzTEpuirMUWRoHS1ZXEyk9QXuHcn3v3tGDi8MoS6NFzvnKriYbtmkFMEuUqwvhianT3HBpiqCeKhuVrL5D",
  "key1": "MdAd2ykNrhb4LtTQjJtoBheZd44EdTSGrTZUJvvbbtrg2qP5a7eQf99pBCCJaL9dK856T8BwqgBFkaUmykUCnHq",
  "key2": "55uaAQvjSrWg1F1vgobJgevf5TD6CmBgXYZ1m7ErTmBQyuqTc4NeNSt3wTgPahnN1ZDgU7m6VVSGUL5hCuc3474p",
  "key3": "5EABYiXpV2JkKirQQ6dxyWE5P9bSGk3MEEs8Cxana4UCEfx6YeHdJDeP2NbEMLJHrcYPUrZ6eu2MV6xB5imqoiiW",
  "key4": "XCEEy5bPDuBb7aMNhmrbR1PwLRsvokj1A4PJYhShs2MCACfmv2wZpJLgzPdc9m5Ekzd9Wf1arP94nXaQGX5sZaU",
  "key5": "63vq9LjSNHBdd6zDNqwDgREaEpDMD4o7GFwxZ5tKzbTDcHrLgPY5YGvW2XX8ji3jvQn78WXeLX2KRupF1RKtXiXW",
  "key6": "4S7m4Zjgzur7VV4F1gEMatve7AEHgF15daKYVdjw4Z2LePU1J35V7RZDRy27sbZwE53FzoDkhk8x39WwMuwKWGDd",
  "key7": "5Kb6pzPdRGtNSH4B1LpLv1W2L1vuPxdPiCCiUc2xBmnoBPm9oZdZDkZ86giCN9p1ZDhN84YVfsPN8iLUeWa9jFTd",
  "key8": "bAfxgNdMdpmFAT2FLmwsrJdVukWPH8Bz5X2QKrRgykAsbpymm6XZ29WSxJ6eNjnHTBeCo98sDLkdW6GSjhU8fTU",
  "key9": "55zVqb71Mnj5YY7f1DTGtEsL3MkPsoynqeCDJkqu7assFYMCzbBwYf4WQ7PDfH6vrZqWmo2tcLMmEfmoaGfWhDqR",
  "key10": "4WkX5VC6w2PA8LpoSZ3CrZ2jfnLTMuMWtGZTpH6X7YW61HsDK5hL1BQ3oBArajhriJKmggzYJ1NqkzzkbV6tfGU9",
  "key11": "sNGoBtj6Xnc3sARFsfFki2A1aj4goJVCT9pxtLpbMqfBY6Lre3Y8aTY19nmaRCryrwsGnsq7QdeYi14qn5SDGeV",
  "key12": "61917vb6Aim2Ffxj5qGedjxQHzZJLRzQXwcsn2VQAfVdoPd8uMJzSspwZhVu7dLN7UyTBk85VznEEg4r5jbifuio",
  "key13": "51cXZiRS79KKkmjwXEemMvrMuGX4xhZFnVfzXPXqj9RjSNQchnzYMD1JfJe5b2Ygd3W7t1TaxwvQ1QkBDZHCoXgL",
  "key14": "5HZ7CCGsV5k8GLerNrXUuWtzs1eqHgpDWfe3LgQCjp3FeoC2zqtq8GDmc3XfFnMcGWQLo9eBzapdHns5y8csciZT",
  "key15": "3FaU55vtJfCRqCJG2wWQ6HTPRFLxYKyRZuNJrAMvVJsmxFQLv73JZ96DVVTcMUMfwoKMbaGW7UHskkSh2QonZNXg",
  "key16": "5mRp1zntFW49bhVS8mvgmpbEM4mG1GFjJ7xcZPSMY6QpZUH8DNet3KHg287jfhgWkPWBYHwQt1cUt1xuv8hNvEEs",
  "key17": "RSUgnnf45LkZ6NjLhGw1KSkR8hJusx3PfsTFNK8XpqTxouPCZTTsdzdmgWqQQKXzyPwUYG5dT2qLAe7UKCHUKgj",
  "key18": "QsxjVdzZhxN2B3tWqQVdmgUzrrozsL7DMUDvcFH1B7FNMWTXF4ohqUCTHsyup1ucWZCy3qK42PU3k1fNYuNZ8ys",
  "key19": "3PUfyw1JjF5t7gaj7Yi8nMNHQrJzSSUf11wrXn574FEuaLRn1H3WuLTShWVYYR8ZHgvrKrHg7Piov6sdAXXxziWw",
  "key20": "4HsSZCyPz2Weoyo3fbikL9zV72qB4H1ip6EwZZd4ufA33oqDTCM5583RR7gxtGoSUYsD76DrgLQc7VnsiZskvNdT",
  "key21": "2w1MG9panAi7XArW8kZXbzmGjj7nzuMXphvHDgtwaVkUW6q7wDKE7ooukMbRbVv39MKC3anWSRgwhbdGSDrKY1T1",
  "key22": "2qYfUzbC5MzKbUyU1dPg83SkXKkYPd6s9tvcFhr9m6nqrQ76FveC7Jsu6bTDJZrobNQtnJptNGo87Bp7YmLgsA3V",
  "key23": "2KAbVQskqpL7eSk2xm7BFKX2eL5fSNFobLnkWBYzREThUQsy5UU4Tj5E6yTyBo5d4dgbirkU4rRuyFsoKPPm3qsP",
  "key24": "U4QKS5Zdw9qQseyAYTLhFCuS33VGZoPZrScq7Ymxfk3FE2i88hdxwLWC4Bpjw6yqfHzZMUqojpesUcB2NN6tkBm"
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
