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
    "PRGv1RpdnddSUqk8Yk2cQgi31U9kv8dyscB2wDTJLH6swJ8d5iMiuv149RvsBYXdaLJf1A57TkXrNMfqqnYVY8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MJqniEoNC6wTJfhHihkuW7tY7A2j7oy6rUARHvK8g9DMg3RHSSFavqEKQXEAma9mv95MfnAiryXbBsSMHyccBkU",
  "key1": "5Bn5EBHzSG1WyDFQx77DLd1EkUqEsiYkRWMNMqDTQfnSskGRZx9oojgt7fqhGoVKgZrqbM1MzuQGt6kBxLd8GKu2",
  "key2": "3drzq1iXGqZpdfQXcGhJSmMb7FGNfD1N4idnaJfRuEpvKGcviJGiroyzSPAiYxqsbhzoA91niRhTjzBEEHQFZqfw",
  "key3": "98BoiMibmb1qb2xDHpXtWDbBShYFt7iRLX4e7eWYkmSNQbY7Q1iq9Q5FAKpgjJuNSM1S67noWMNv6N4HD82j2V9",
  "key4": "2B9JiwFRuqwxKtckad29pWTt3oTtSspyVdM2dzq3t94YDS75z7BSAxQAtM4zFhx9fDe4AmFLnytiuPHaxCzmJaap",
  "key5": "2YEPmn7MTNAUubu3dQjYPb3J7RMNbgjrFbHs9kKKizBaKzmJf9nTLKTJsiivoebfNB4XqD2UWDL5Uo8Kehmq1W2p",
  "key6": "3VtCkJMptVnCruvgeeTWggL3VUZJGqAp4hB8k7mHWrdyk7n9zJ17A5VP6Ww9ueQqKG21JZBqT56RGnC2Fe4fSqwD",
  "key7": "Eczu5Uah64P28T8J41TTQXEaDMFz46pVifhUkBTz5UiuxwfZWsFiNKdtSh2cRuygPzKC5AcoFHd7ChXxYrt95am",
  "key8": "5ax2ciETNkMYXTQJY6X2fZN5RZb6gK9vtus3ZMgjXereY3msYUZAxzwxjDUERqecB2yJfu71mSzyy2SjFGqCtNaQ",
  "key9": "2xxwmWdoCgVRKh5eJC27ob6dHzEeBvdFd2PXcLL5oGfsEpY3jZfeoCYTgqz4AwPymYpz9vGtfo4SZq7T5bstct4z",
  "key10": "5mrCNLu3gpdGm3ZVdPMoupWuYJsbknruDzo8xUSd2T5inqgxvGm1osFmqsosr2zUDWVTiX6PBg8hS3aMB3KAgtGd",
  "key11": "24BLaPhXKv9w8Nh9Uz9amPpERBAWNPpD64RDWaDd6ey6Z6RRztcRmywsFjDyFfZk4WKAhrE2WS1HSbERK47N1SME",
  "key12": "5FHnrkpaZLXXAqLjqMMndTFePFwfrzLpeZ8TyrHdRZ8SZ9ZyALQEUkbikjB9SPATZ87KGTqo8vTt7aNdt1kN7bxF",
  "key13": "4UyCzcfNv2ATiTVEuF8pHcMPKF8WLpPpMAfTfbyQ18muhLfYSCjyfZeM3aJrX4u586o1nQQut8qkoRweCdLnhGEp",
  "key14": "5TWs2rxWp6xJDG8kRA2pdzWn86h9h6uxoUja6xcSZfJw6DKjHRmni5BFbJ9f99S9NNbGaAZd3wVLUxNXFrxfiKea",
  "key15": "25S1uEftMaP2ebdogPjjbHDm7iTzn6kYXzdYgpUGyqvwTvvZ1BcKvszzLuY7k3Q2fYqv6Gg7wrsPTAK43A2Hsuvy",
  "key16": "3ZVys6ny5u4MpQM41fTvpoGc2Xy1b8yepRx1VpX4AJvYBfkGiLMKDdGFYnpAfLQnzVYLsH948jzgtTrHYb198cWQ",
  "key17": "3BKN9R432z3WaXnNPxK1qpGELzaG6GX8jBnFHcHEfiXZ7oB1V5FEBiELYKHmgKYCPaoqD46GXUvxQYMcB5Zum5W1",
  "key18": "56HUsf5f2VCrvUkc1qCjNy27sxFfCXKwFZRBGnfKMpFbvRzGWtaBuqy2GVs6xGfNVw9Yh48asjM4nWwiNYHX1LkN",
  "key19": "3vrpxcUG3m56iqDHu6pdgs8w1BEMq3wenLkTy17pNu1z4y1W6dzghfmbdHVqFNjHoyxRGL25jiCTzjT754MtkTPf",
  "key20": "5Qb8Tn6WJqwHdMY2CFonu5q8oN9RDdvxHCo8ZtZrhw1KgWY5HatdRLm1j6ZQoZyPqtmxuQR9wrg9psyWDhHedRQd",
  "key21": "2M6wxPHkYmtpCXaodnNTMvWjE3yYYq926LGVs4ddyFAEuahse4JmQf6sehqJ7hUcH68rav5ophc5i3EJcMNZqekR",
  "key22": "3H4cfzuVMpRFXpCTa7eWkWZ9J3BAVtTNkMiMt6dRaHrdWuthNfeirZZQ2KnNs2zYkZbm4AKHs9n5S15FSkqucnZe",
  "key23": "47geyRoEgFjoatXwNf1GSx2qqiMhXbDbUXSPuy8dvgU7zmSYkMuSXoMXqniRzhgesNbP3iNNDMnfj3g7RX23eYwv",
  "key24": "3eUzz5shuw7YFNZUhkY65mh8eU94oZgQK6CyJs37rztarbGtRAmKaXyBL2iWfBqgH3myUus8BRkmwcbc3HeGPZAq",
  "key25": "54jiMPCfaB3rXZ6koyKrgxUBhBs3iHwKCKqSAggJ9Mj3zbbr2ymQ4ancd2WeT7e3qNLq7VE9UX7dPZgD51QpLx2D",
  "key26": "2GqhjsrXTQtA9KMsaCFjnTqkBEG3vYTXk8yfiYwNXgd6cMgvjkSqb2ZzEymAGBUTbj6CoFxSkQFm7GRQaQXyeWTo",
  "key27": "45WGXW2yAjBocwdFNzZVMUCvqs8QMMKvweepF9iEQsLTozMbJosq1FNtKfF2toSDSSzvvVT7L9wvxscVYNupJd8N",
  "key28": "4oZ1P3zicMJ3EuLLrHd13jwK9U6DkHhsPppWC31mTcVqLzBUvr3EhoFAgEFep7yQeSHjtFNpQiMD4SKDpjHC5RYP"
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
