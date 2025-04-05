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
    "JsWcYo44joAWw5sbGyvQw6gs5L9j5SDJxTvjQZr4c9doV3TZMqv6T9hkwLTiEXBEW7QFdN2eAxBscnuwPUjt69W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s95nsuhCVTvjXDL8aozRCe18fTbLSVnXoEj3sHSoGdsnvqzU6JH6YtCAwvVCJAJtJwQnZMtBrJTMDGSJxswvAqe",
  "key1": "2VQoJ7GX6HhrFqub9JWB8pHef7tVLE4PoJetDmhXVbyW2TSW7j5itWLjreyVYZQ8XDzWnzFpMhWCffoohQx5cfm",
  "key2": "4gfKCwvSZU6LqYxPbgVeL7wLwfs437Ubw8V9WxueqwxDRotScRzjHYNm7KjSqDBBMbm4LXv5o93HRxc4MMrE1Sq4",
  "key3": "2i3wzyRphoWo5PxaxxG2pGhBcECP1ihNrfiyunp6QE9R27FLPRaUfgtksGoAcBZBfUA2bbBXgB5adf9KteMNP6Py",
  "key4": "65qhAR1BF2srvoB2CguRYk7Xn3cdykaYyw2N8bMBM6dHvcikKRFUxUgpy938vgPgFisV7XM4MqMNK4eVXnUt9kHC",
  "key5": "u2v87CyPHrhkWwPkUULLyVBCeVXejgkg8PcZeLBA4P6XqgYj8cMtqqGKYqyYFRbrPg3Ta2HxtpEFcPvHkDtCVGh",
  "key6": "4QiKEJr9CnVnaaA8Y6cwxqRaY4BNHWw3ucE85s2Dr4p23u51HJPMxXLfeZawApAAdM6T9HZjvVrW5pVWnXH1TcjV",
  "key7": "2CmhNR1nrrTYXvERaiuiRJqdZFXFmepjjN8J5f2MA5incXjiXzZGNFsahEA6fT9savj7r2xsqTmjhfMwa6YcFxYq",
  "key8": "49gd9aSuE3wjcHBq8YzQDWjcLfXJCC9ZU4ELEg94NBup87ehx5ZNE8QGhSQGFxbT5pxNHttLB1kToCXVn3Te2P1p",
  "key9": "4qp3GKXr5gDchqJWbwGYAvaFtqs2Pv57yz6qS67WNHe7q71DutRi2jS7saq4SyUPNp5kuyAGMziZp33Ctqqd7KoE",
  "key10": "5iV4ob1dQjUTWz6naSNuaFTb74mz23WffSPtiutKEBaw3aH4GDgNN33Z1C7Q2L3wrRZhsRQ6VSsgPvWdgGzC42Q8",
  "key11": "4tdmfGENw37zq3iLCVw1zigZpkDLFH1zLfBq5zwZUJ5yBow2J1vqT1HjP6CAqSGVSazyKrL8mW1pesr59tUAeRnV",
  "key12": "pDxqYL89weE8AY6FeStwKxmjN9PoS6LA2h3uig4ZwSH7s8SbMVAYK7frisPP345yeGisZBHg4SzESusqBW2ejLd",
  "key13": "5UDWqMt6W7qQztQDa63uocrGkujxGUHbkiqaRpXHbsrGyL5J5JnpFy3MymYz8pxkHZPzaQhSUHbE8faCzdPXDG6w",
  "key14": "3EiXDY2gYfzYg44SZtwDsQMyGdCPCUTJ6Eyq2vF26ybXqTsP6LuNGkQaqD1EuRS9QkUeugmKNufdDDFFHjiC9UBk",
  "key15": "4jnoy99Wa7aknEhXxyS4QtbCidMpeE6KkTb7V6wTYWvGnsd3Jmv9GSgUNdgWJuEaEqzu7hFN1hkKyANfgcQPE4ER",
  "key16": "5KgbdsN2ZHqduF5rERwp6iZEFM9yEH7u3n7VsnUcsEhH9jRUexyp22rKv1frSdwD8PHHfceW5HqXzwV8k4PpQ3Yf",
  "key17": "2kDuZvsYTW9kveRyp2ATJhpLKX4uKZPmsSYqZWdDnCpzGVhdpZ69kjCfV7RBQTZh8Kumngos3X8gEr1heLk8iVXq",
  "key18": "4GE9msrLMvFLh5YFh8CnVspC9UbfciqqCgNs7cQZAHXpuUixfktaccRswG5BFZ64NvobesLNwQFEFZpykf9tRMW5",
  "key19": "3bb4d6FAPtTftXLyTJUuko9xpDzFz1JpYyxS3kQCmRmHs7Z78PLYkZfR1afPrroWZDGw9LBzHJ1jDMRKnfp8Ljyq",
  "key20": "3ZuNum1KFqZc7MhQSiqSA7KYVaaDrkShaoRKPmot7GiiEfZbhCkTZa2qnSRLofiK6vktg26YKCAj3xTrtTgKDxfE",
  "key21": "49NCfXQBWUsYak6YhduC7f1sGcmk2pNszN1CovMEkyQmgcsauGkWCewiPiETzj5XztJbRM1jgym3hUe9v8oNxtv9",
  "key22": "2kET3HkX4YvVsG4uQyaDSGogSnQrs4A8JGCvdemzMiE9FUqMr7X84ZQ9K4UepGLUJzmeRbLakd3BWDfwxkqhoWqU",
  "key23": "3nHBkqVHzBqpa2XaohnjunzpzRMX4maYsa1cyuj17od1y3a8w46L95VqTwtiwVj2aS85ZMY6YRHQ9fG5ycHMf7ug",
  "key24": "5Sc4FKcVR8uaETkXKn7U7LpthKYEmCHx3B3AmFmqqgUYxwgiFZPacCuhXpUkYukj83dGTonHX2QGNRzarhCt3fY3",
  "key25": "LyiGwiCH1nMZMgiecNJRvc4oJGAHFYrKLY29ZLNf54TcfhZ6tU8e6hmESR2fHRp4Ki5GfJSUvLF8ocRxzqdRCzG"
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
