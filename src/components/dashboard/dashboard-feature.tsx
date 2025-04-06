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
    "3b6kjCXGi21DckFuw9tV2Z71hDNrY8qDVU7zJJGcjLbDmA4R1nfN1kECPRfNxBJNfu1mtnhVUVAxiYRFwiZ8ytQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mULDEsSMDTg6HmraJU2FYgNnAK7m4R1T7DnhkWgFhi4JMR14mu5YxPWW84MczFi7F5Bj2zWGfoEKijPqQo9ceVn",
  "key1": "3pCP7hySts91H45EynvtdNmLFzCSgPx21DjY3wBcnkyBGz74JunMJFyjLo6fX7PSpbUvmB7c7QwZ1Qac5J4jW8Yu",
  "key2": "33XxMXEzPFhWxdCWGNULo71RgVo9GaknAhfHJV5gfviFnbD8iYK6MAHMUPSpakBhbX1zYZTHDvCYphCqUEfeEMfT",
  "key3": "5FPTGcv8SjMKxEcUPWU1UkcgZ7KnqjYjcLYk9XbtkTt3AwFRaZiwnry4FoHwQKre4a8XmxoE96BGcjGdxpDKXZTu",
  "key4": "3sTVcz3KnVbrXpNLzC8dnzJgcrJuKrz3ZXBU6bdaHhAJjpEMR3ojvS9U2sYrpGKETbV5gRuiNwfCtdx4DJNAb8zD",
  "key5": "4fr2LaNU6oH5vfUZcYAXJ1vgJu1dH9YVHriMFpza1xT4HwTZ88DfrY5CYjN9NTP996juVppKkevXRwLkbbJ1aYKC",
  "key6": "4c11hNNek765HFMcGAjv6trnKNJMbW1879zdbs1zCdwjGFo6rPCkryUu5brmqw4EPurRX5nAZL5RRTowLjnQ8LHZ",
  "key7": "4SbKubCToSr6Z1Bd5y5ygZUWPQgBQwaCoUvm5QvxLAoJYzjfdCMamHtXrisbnezAXAvBqFbykjzw9TRub2NLWU9o",
  "key8": "3zpJXBubcEpFNFagAdC8B9beXv8mZK7zsTN2KG3Lo3Bc6Jp9nMvSXUQ5MU4mJaJCffheU5wz4XnpkXWCS6Sbh767",
  "key9": "rSUf7yX48UYNXn9GFcdP73pEjsugXbTazDeUFbVMn3o8z9G2zRmAxn6FKYUituDcVzgyGnePbjEUiAbPogWYtzM",
  "key10": "zxZcxyUvTiyMqRzymzRTcEb5vFMAki13nHU7HS2x2ywiincXBzMZwECDamc4FSC1CYod8vKmToAtfhZArrSwhXg",
  "key11": "5PiQnJZ5vzyweTWEp5Lf7QmpF4D35YrSR2Wj8RqX4MtSwtUdVZ5UeKnj128CF2gm5wFhmdV2MjzycBf7fX3juDVT",
  "key12": "4rkHb6roJCoMq1rk31bKXBN7Bs6QmYSgZdLywovHUsdyLDGFPqVRHGFKPMN8G3zSLzroVSdepCYLLNoGcZFPhiw3",
  "key13": "2GHechg2ph8JMYNzpc7uLPEWqdqJmizRz5PJTML1YhpJFU9bYUDLhTzSf4daj1FBHb1vBmt2GthhqA3Pv32W1RSb",
  "key14": "3oco2c5Mbth9qbJrkskukoACTG619EjBKmMzuzGjWvpbb3qJ6DW9fx1MwS6CGfDmpaFdFWUsQyFBiCaTtEqfSFC5",
  "key15": "2wDe58YN4mg8NqHSSU1GyWCnb7dc9iF9ppg4sHQVbhuX1bJd2c8qWwEjp19aKUJgc1JutjKhjf11kjAqhvKjrLdU",
  "key16": "3UydFumS5EssTGAJfS2tmfwmmUEaHtoQTYeA62v3KovjWzV1xhaEwtUkGXQbpvC6t138oFz4KqVyPLQcC8Fav1M2",
  "key17": "5k7eyqTts8kfCt9qLEC4Ttpsbbo6WNEP7YP7ndQvT4ezu1ZgBbW4jWzJksLDwp2M19fy3TYkkkHpvTLp5zG9pydD",
  "key18": "5roGYL16Usq5PJq4Md8Edj7R6qHdnCYNkUecSe2e1X9P1552t92eZ2qkGmrQMUt3p49ivTUBKaJYgMVzu3hXMT2o",
  "key19": "4y1FXaHu8sJNJAptGFDsXECM6KJmPMQRq5RwHecJkcLgnxPLLWVB9QPmAcZK3fuLYM7r6CTLriyK3SNkXKW3kRGa",
  "key20": "3mn1x7pB2SXvgg7ix6cemxYLEndxKh5ajygUPsQCKD8dMVkQhMNzdx9FVbyvWqYndRcEoXm5V6c7PPNqGBzbuUTb",
  "key21": "5TJRfDpcjNZabJjpYyak6sF9AzExhHqdBLYo6ngwHcKv2L4Q3zsi31bJKzayYfrriVESStdpKszRunKnFV751zNF",
  "key22": "2m6n9xDevMGiSNtm8bgC7DiUyfjDBRQBsqwXBn1JFM96EXfNH8aWuutW5x4EVB5UESTEWBDCZLPTKxyV9rU4vadT",
  "key23": "4P8on5kojszBWJBgXU4wq9xeeG95RJvGmMqjh54KFDEUWwBvRfEo29Q59m6bx6AARjQyDURCJKCB4buSeL8yAs7Q",
  "key24": "5WdzdcaFXKyxaKrjbxjkhTqURn8pcfeafvZikxVdME3iqWduFYe4qU1qijjQqXkcaviCCD75VZVitJ4T89UyviaK",
  "key25": "4dzihfcdbV18ViTAkhpUAFUy1yfHL8WdpQBoEGca7WN2ds5xtg8gDs1BcQKRomDTkj17s4LXwv5VWyu1EdRTzHXX",
  "key26": "45ufGZktL3TXhgQePXzFJMZFCQsoa2qgW5MkR2k4oGFggryHRadGP1MN3juvP7wVaeXAXLYLQ1NXxmsvHgP1ZWcL",
  "key27": "kkUKvj93T9wu7KpwAyareJUgy28qhFN2M94NGbeej5PyLuCh7EdXvnh8xNVxhvuTkNcU9aWVVCexDyFy6NYtiEf",
  "key28": "4TU9H1NEtHZ1q99v6tNA7VNSEDdfyLoXkqHBq7947Q4C4rTUg4eiaqLZHToRRb3DphzYByFg4Jdo3TjGQSsBLQ3y",
  "key29": "2JskTxA6DyuaPK9JqTNciqaJqFDm1vLVA2F2DgH8tMJYEf6aUMLxR6zdpfNkcssFdpX4pLZEYMGCpwzBwatU8iLU",
  "key30": "5RMvYjAWFzEyb54hRTXXoABwnn5uCiVDaXvQgD1sGwWfZJ3AthyQ4tiHJpXRy4VkTgFG1h4UUE4HAPdrx2MdZCyw",
  "key31": "5F5BWCYi14Rwt2FKckgf7uDqHaxhx2r8ZLPAZs98oC3grJoxR1Fzb7oMUoV9KrT1XNFuaqzGHUwzBVrsDpS69YQV",
  "key32": "3GbFytLZCaZgFoNqkd7RtZcdsY7MrpGst3gpcp6pHNwyAqVuSiFVoAnViGnmYCpia82DGttKMSLvBbaKrHTTriri",
  "key33": "F1BZhpbiJ7akRdJJeCEEYs6ciyVqzUSYHoa9jHAsUhmwqSkYCGyCrA2v4ye1ButXxPDUc4WKYUY9kVjejkXEQJ8"
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
