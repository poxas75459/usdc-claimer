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
    "3CQEA3U4nEVGHs4NrVh4HREeizdCvdwaDhYcJ9RMdokkeJXPecNovJQDghyAwGbmSXd8yZPsTZcCXWykqjffQRRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cxHE34Kj3re81tADb8UBg9SbevCiNjDAJMscEgepxuz8K5re8Vyk564SxGKCxeEbCiAiu8nYtPPrh9Znjk7nyrG",
  "key1": "2BpftrFeTPdSWawH8KEmnABcj1QdTeoDY25126TuzvG2cpfacREfU5vUXr7xERjjVAxzB351g6Dd1njMVzqYr5Vx",
  "key2": "3GdWbysfTvHvsZBTEyEvZThYX1mGYAhsu5YUPkqvUmVDGKc3RMHuKkW3frSJZmXbvz86BooRGQWG4skCjujz43D7",
  "key3": "S66212xWHViL2quWomQMqDxbEgQhJnwa4sEZLwX8e1X6XJicMXp6cPcLDrJueHegN2b4ijjR49gZoRwBYF4pQHV",
  "key4": "5spdb715MLt6qR1N2P71DtUh6eVRYzwCqjrwaL2HzCQNribgWqnAzTRwTobB5AqPK7DKyR22gjoAib8wQdYvPGFd",
  "key5": "49CgyR6SK5BpK7mE5d9mMPMWh2WSsbvH5jRyvj24ZUpgaexYhBDk185YGkRLwQUQqwUVVzbEe62Z2tFZCq5wz6ea",
  "key6": "4r7CHBpaYFgEfiGfze4JqgE2hy3MNXVVwpCagJj4GCtpJgkt99Wc5rXnHaBKuk4yNbc8JGMdn7HzyfZm9cgoRCKj",
  "key7": "4vCPbAVYd7pWwJkw3sprr7wiKdUd279zkaKAoAo9VsGBX5rVeTaHbvMRuSG89zs2btoNVFdZ8iWxE2tfgCEj47BD",
  "key8": "62TreMeXkzyVBH39qHUVGALT5BbnJPkG53MhobQHXkqirCjX1JTrpJeKUvD4uNWmJsS4ry5DRxJaJuaMV6TfQtca",
  "key9": "4NJ3UPiR33tvXVtHq3HsouDUVgPnbcNhcJRtbEtjn9PgoHttxuA6f7x5dCU5bvv1q9NECmjLfpsQe9exmRQ81YAd",
  "key10": "3nV2KPkztj3sSZk8edyPcnfHQoxWMvQ2HYPooN7jq5WtnYR2ybyTfERmexjj9hQLUdScHZEj61rNSPz6jHLF8aAj",
  "key11": "47UNMumJZn84vm4y8vfwcfuhYsJ2YeBijj1o7UbL1sF9xxmg8tpvmoBA9YDGChXfAYfHuHbUi5wngbudrLNGUSB1",
  "key12": "3PCy3H1RsMsUe4y277MbSCmV1Ef2Bc4Zw2t2fb2TgFoeNbRNPqVcurfnBu7GQWsKSY8Jm9xdayMfDm9T9G2WWq2A",
  "key13": "4v7nJ5weh7VLjMCZWL2C6BeDpcXm8trFradc9ofDiDEjcTErsyykZKX86DnJtM5Vi4XJwrtbYfcdtT8ZqnVwq21M",
  "key14": "2SCFi6SceZsQmXJiFcv8wFyuF7rUfYNJsaB5U9euby1ZdQevxNUnH9VJ18Gn9aYJkVxyjjYsBmhXEkSiGpQbf2Hf",
  "key15": "4AAYVWaCVqy88CFs2QqFnhyCiJEoKEYsgLepZRwZbWv3m5NNciJtrzaNrkRZCw3HraaeWbSAWj4z6JMaab3DecnK",
  "key16": "3oMwgKzLz79Copz6vzkhkVUu25x2sQt6fBbrV7qnAapvajomHoYMexiKmcfVqv1rXzHaRxPbZQqyPtNr74iKkJDo",
  "key17": "64Y97NZAqKAoJwvzYwAa1x4HMLW3JRANcn3n7fEHnvcBAkYGkKekFx71EBRNQDw7o48jVHJb3VETphrTzKmUwzmL",
  "key18": "4GjDTMgRt3Vu4s4W7orvwT7tVVq8AoK1pk72By4UL3QnUQite9LsWMUGNKngBVdhQtYR1MprovPFzHXaHaynvDK9",
  "key19": "3xhnBd93HAjTzQHUvFRCA9LhBPFhjMx9cQAojF3Xy8VNvn3fKSYL45NaDBNQ1MEjuyzovRRkoAxEyqL3NY6qUacJ",
  "key20": "55sLV7EcJkRidCcjLg2Vk8JAvQqMv3Mr4XtktvxSeyzjhuULEjmZDBkeTY41fd8MEurMqNRvVUCanzBSkwQcRRui",
  "key21": "2dXLjjnbuQtRdmVzJQFopza4amzKLCMTjLJ6wyLGGfbGfGArssGVKZdgkvWX9FzxZDVk8PDTCasLWyWaRG7jbHk6",
  "key22": "59Hr6fpHS4DVL59tnPy2Rq2bGVETWWmfUMNun5JpT92dPyVbqLQRqs834MYhSdpA7rXppWW1V3Q4XtxvfA2uQj4b",
  "key23": "5fWm6uZ6u1FrAr62VxZhNd4wFaJKc79gNVYsGt5mYTcdwSv6cHZG1ccaJBzDv3kD3CGaZB911n2TE4ZzS51YwbDc",
  "key24": "3mY4bmX2Bce5HMYvkEEkcZdrM1XVP43XB56uRmVA7ewQgWpXY3JpHH8DbcXmwgG3z7krD8StCXP29uZ5eY8ACDwH",
  "key25": "3xW4FGsbhk6X4yMd7LTXNTEdVuyakqLFZmgdX8Dt2GsVFRPmjW1dPCoV3g9C7pCErQL49y1FhL8JBp3jwhie5aeP"
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
