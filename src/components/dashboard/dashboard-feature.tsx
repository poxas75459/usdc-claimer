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
    "41WhBcAME2VXHah8zRjDQ9GwnowCA16S1g2LboVWUNZd7nEEzLXsLMBHXZE2Ed8goqbnaVScuPNXYaAoA585oZQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KwKU3heBPcBtxD2ZnZy9DCZeZnZ2WdqvD1c4V56vSjZxuW7QEFgU2h7YLxA5VhsY9YZhmKbwEdAwJ2LVArCbdLb",
  "key1": "a2PkfGMxvVYrnNf1NuzutGhrHiAbFEfSQdPR63poyHMj9A5tVxSoXtfdMzijVc9Sv5qRGjZurJrFPoLzDVpWSDP",
  "key2": "3KZtT9R7gyXw1bvT2YLaAaBtg5bnaxm5mk5ob3awbEHJpS8gjXjjrvRNa9ag2axnSkbrFeyKLNeTnbLNhfXRdztG",
  "key3": "hZ8dQtf3xFv5rj1TnZqaF5waReAi9WsLc8dEaFkhEcBP9t6jNejNmszP6H1y8fQgwoPqKYaig33haUfELXasUWU",
  "key4": "euWAFk9t4GUhfn8fMgX5DY5dw6qgw1ZKpBctZZfnk7aCPAspwhgUQY41UnrgH4hNVdnT1By4decgpJ5xQ9TxCRa",
  "key5": "4enaj3fpRTCTTdB81vstHnwsf1vsRg5JQFy7ebQdoYaJBV8Cv4n75Uwo1HLnTeX7kfNMKdgGWxejHbWoQEH2r7F3",
  "key6": "3zFgBe9jJsUiqjPTMR1KB8HeMtXSYcJPSgaUaviTWyAdUjACjjneKnWd65yQVKzBHE9dspsQQoh2Mk48zNs6a6zx",
  "key7": "3ytNqxuW2Sz5zW1nAdpFdoDJmRKtYKygUTwkg43mnrHuYfVatA9DSMjBQLCzRRVNGU97Job2xPNnqqQYNScrxoSd",
  "key8": "uG6337SMN9HtF1W1XNsHGKv1SuNpFkMGdP8w6zLXunrwinzUh5gmysoV56ooDmDukiwoG3Cwp8KS5cAwCU1Sh6k",
  "key9": "3M6hAsSF1dSG4ZkemFLhwqLdQUUS2YnxtZmaJ9jhRn6PMZi2ABMhWd6cjBys2weNEvNg6YbaJiENUy3ZXyEqcgE",
  "key10": "bFkavytiQzoqXLTbrgrs7SXrDuXr9TS7oUf13fj2addeAEqpC1UUYNUZfwVCMnmLBvUWMV5HTgyU7wMn8P7Rc7S",
  "key11": "5kStL2xs2HS6d3qrnNCxVJRPmSUD1sEPWFa5wHbPH7X3cVgpyFRVsJoGKrYPZcRx4weiZpX8MHJxChPiBGww7wzf",
  "key12": "5h66ZiuTCnJvTy5Q5ZufbD1ACtFEhNyE4GSYLFpXVZfwTdiVwoozxwA32gUESMVPgJqFVFbPtwm7ZY2SsTWgTZbZ",
  "key13": "9chbCqCYBkYEjSHWnyRor78PehYipmHvqnfZBTEn82J4W3WjyswPK9eqLZwSitvN9cjSN6H5baEu1irK34ox3TG",
  "key14": "2HBjD6ApKxJ51aZmxrASaqrEt9DnLLERPFsAfGLwkgDWRQXFYUgJPx8PhN9fokqjsn2WVm1jqBuMGY78gqokctPv",
  "key15": "4czGRME5cMVG9YunxGM4RAhPvix2CPMbbmzEm28SKhd6yEQCxg7q9eEr8tterzfwukt4A1HPGBNWfdJ1KotTsqHw",
  "key16": "3qWJW6V4DovsJTa91E8Hyx36pVdHck2xeoZCzgnge32qtzsdTMfQJDoXTVUAxLo7XM4eqW6hvmgb6MBqMz7yDxjK",
  "key17": "5BAY2ZGe6CoicsDC66zk2UEYbtVhpTn5xLWUDpM6MNdyeyShQa81MDg7aYA9EJusg8V9YBrjrSa8FRwkZzwEafnD",
  "key18": "3GAMRAKwVKTKBHSUg9ScNtJcUuZzo7zXyJfHSEXoP4aQpHyQinz4MZzW26bFRskoVjSimSRmPZTzGihgvq9XgPjQ",
  "key19": "cGHJ1mNVVAGoLKFsBmjTWmKfYSLYgXuKg1y4LtNRRN8746hGEhvFR44tf5oKkME45k3GMUxp68D3fPvZxUJAvpu",
  "key20": "3hSmYfqRUmeiuJuGoNigxqEaR4Snb9GTRdCAvh4xzVLrmfMaTegEgPacMpS4X9qXfVz1HbgbgF9HJxoS8ANQATEt",
  "key21": "5zj1SGGTzgChqH7GpsK3Hx6f9C47Gn6Xn5nQcBmwuhZLfgr1Lr3bVaDBPzMRTVWC7jVqfgdiLYPfmjx1KXyAjoNz",
  "key22": "3P8CorwBFjoWiwYka4uGKR2KF8DpQ3crnZCvvYh5jaUr1XhDU3wJnJWMVSHTbMj5Gx2rjixYBJcb1Km3bXxvVEiR",
  "key23": "5JfBTZr682EX1Auoez6y83o89WKjT51TKFtjdT3RwynRsUAs9WG8cLwfFC5y78qExh5EeBjww5fvTQredg7PjicM",
  "key24": "DoTgcCsTdAdjonyi2f2imkjkurWU1rGdWjGwU9EjQTrA1D2mCRefsbzGQEHim38dJEfYgHkxNJaJJ4VffHZPdrU",
  "key25": "5Uk9VHdZwvHqEM3TYh6uT4enMTWgz7N9yq9aWfRfYmYy1qmdUsKfTYCT4vbNvuM3wfRu4ZcCMZ1YghzEhvwc3thK",
  "key26": "5qVvq5gaZiUVvLbxzdj4Rde5w3XKwHaVwvArLxYsLJDunnNLpkCVXVW8xXvGWCA9PgPaTFT8j5kRzCeKjHoSt6sn",
  "key27": "4jHFYkBbPXFBbDKTj7xAtCfByqmK1iC5xwasHvWNYNPDC1L6oP6SepKLevYWDvVe1CFLgBDkPzWzRKuADsUHnw6T",
  "key28": "3kaS6vfaS9J1BoCcKcbnTyUyqLLQwrkXdRJmPYzDu3NT9nw2b3YTto7jUeknFCrSiJhP9nXH614HftX5y4eVjzXf",
  "key29": "3o6REVrSrrQc46joPaHPGLHhUQgotN2vtUXeUJVdMaCPq584imQB5ZkC3trk9nkdCSiwc9evTm68jCTeUswYhfqo",
  "key30": "64bqAjFQNkrdwmXKAMmxJnMgyqQKobL7ukNQVbPhg2LK7r6AsRvtejPM9rhjS53HHrzcXUL242JnGPvYeRtBavHU",
  "key31": "396GRrwRVeApmFBVZgExBkG36rZMZgubfm4D2onXZrRusz3as8r3TGEPFKT5VKx3B8QZ7c8hdx4LvFUtVz9cUmWt"
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
