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
    "3F7H2Do1yqWLh4xbMMhkkqnzYQD8tjkKrVDopc2Tk3EDKs51XTouxhoTtnr2Qv4fFYCHUeHhgQLKXpTXMNFPP3bb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HASupghUaZ1vxfznHfxUymngWKHn8WzE9UWtf41q7vSVn3aTaANvZKTm3r6TkQydyMjUTRVp9HHXiR2J2zzvXt3",
  "key1": "W2AkaNwjPs4PzwjgkbFobo9RBdwHzcp9xwL1yTrufnzgXqTWaTUQJhAFqywVi69hw6wNmFRwmET5rTeGdBcykeV",
  "key2": "5NRdwFnDW34grEaKoG4kkdbcgChchKxahcWsgXNb6xeNZzv5CmgVzbzEPCGawTYtVisng6XqLBLM64XNPhrusnUC",
  "key3": "4BwHmZRfwgtT6S36Z94zvg9DMEwe2QqJYh9gnzyfV1kyyhnQqyQEjQS1gzV5cxnf8pbwPYrJY8yvTSMao5ZyYtRi",
  "key4": "EWwSfdCzNJN4RxDPBTzTTnuCyuBdgG5utEPeEA51ByPyqbTz5njfafyKaeiupUjW4bfqVgcEYub2eGHL69AvAMx",
  "key5": "4KvfPMEz77CgGJtDz6kundsck4enPescbeMxe3gf6YPzMAQiEdc6WTr1VFP1G9bGTaa4gBzoNSMLYytb3m3KkZG",
  "key6": "2zvnmPZxKcuJV4izjGvAbuPTaATatmhnVEzKvvzC7RdDzVvzZRWsRVj5LUndkM7GMDCffY21ttWEqnBL4TW3mAn5",
  "key7": "5LkrZRvpRw9UANWJYaTmAYGjUqXV7JPy5UR9X5tQrLtCUwqKcc2UEjaurYkA8pZvou1DTzDfREkhD5ZNMsEWQJ8D",
  "key8": "4vGiH1sksocZ7BHyKustx5D8TeQRJ5oubyQRVmYn9GLx9BtRLsiD87PWnNmx8wywSSZSd4no8RSjLxMxmex42FHL",
  "key9": "3xnC8P2yc8vhqQGTXVAb5qiNbjYijxzjCT6vNnBmTNrUAM2EJtAQ6g3KfvggSf3D9aAuvpPU4DhybSGKpSwnuGTi",
  "key10": "SwjXDjW7iV2rmZ72UfTpdKbLwQcCTJkDVWbaoJrAwPkVYPrkDTdexJ9R6ofz7EfaEBzArKqAHyzHrkfztcH6ToV",
  "key11": "2J7mv8XpT5oNwafpUf54AZWGhXkotkYJtezYtxsrVkjRoqpNDkn2E38rgHAKVxWh5yET45mB4yVBGocx9Mp2kaVW",
  "key12": "2auP8phrTFZvEjUk4QRDohnS6KbPPMEKDyTsgDcH9Y7CtvpJ3sjbc2CZfNqgGfxFZfYh4ybFyKangY8ELD4YgX3N",
  "key13": "2EKkHeQwq4HRRj6RFKRaXg89xsPhGQ9BApGU9ufkKKzybVRqbdatAY8DQYVDx3JW4tTaZVLJXeC2bNGFP4NAshTu",
  "key14": "3acy7yFF7nqdtDfTvuS6uheJ5cLJD7ukim3MfhbpdgpC4QquBfc8Y5sGmB8gbGommfwxunpvQM9T7AGQhDy6Qaax",
  "key15": "2Wsqx2tLpUNPTreANZkBuxJ3waYNGi5v9b73Virms2gkPi7xvC9qRY1Sm1oN8xtcj1RUmsxJuxZUJn72gSk3P8df",
  "key16": "3yyG5dS9NgNiWYtr6YHLoKRV8KCb5G1xWD1gokaVUmM1qNvxERVMBhVGKkEoSNXGQodBF4PmvFgUmePZUpLGFe7R",
  "key17": "59YiUWrXseTCXM2sTN3tgBNJSy9oQM9LaaJha8Sspzkp1QGTNe87oedofSLWhbtPuX1p5zs2owt1NjpqR5YJbQH6",
  "key18": "5YiUTrEkNs7Uh6ycTFjxcwfsL4mZdXxmGRBZvLkYotmXzHZgCJu6gLASNTryF8kHH2Qzzg57jGvGM2NXsxasU94F",
  "key19": "61pAH7STpfdpuqf457yC1XUJVNaT1NKsm9HSby8sfjmCdG5PLzwDRJLrXuBUYqtujRfD37A6NEjcZaHPUMKoJgpW",
  "key20": "524LRQRrpyL8GLrtgHhZSSYp2ZzEPW2H7yWE4YoBmPXKKL3GtUC5GVvuXYVQrQmhcSqnNuyXPjATiWrAh7MwMUZm",
  "key21": "4zQpu4FyVUgbe8QBbPTY68UUKaobH4357gUkFrhYeuGoPRKg36FrBcubiZRRyvmneajPPBNwgwRok3pSB4Md3JPX",
  "key22": "4Rg4iyT4kkrqJvnaFBnZWstUHyQ8qRz678LVjXBbJU6tAgB8ZPijK2H5THJ5euSfrerruDHvaAREMAxgyxV7shCC",
  "key23": "PibqGAPMF4NrfyxtSagwtP31jiAM6ug3gAkTU9v5dgZA3qKyP7RqZo9pXgvvPpuSsnnRKeGGPjPEoSQtxw6Qo7q",
  "key24": "3NqiGHn6MpZWxSUS6h1RyNnsJstRrW1pwZ7GqkYQqGPoJcRf7v8GibduyqCh7dZ4tHJpAjJnYezFEgMNgNTZAzKs",
  "key25": "5bqCuxTb3u6AXFC1HAZtB5UGe1yAPHEuo7MWmWeCECarRTncpzUkgPmsLhBBVVdUqM53yJKqrWG6SMaoJjLnjA8d",
  "key26": "2Eg8bcptjgroGxLMNmoUE7RT4TMFTJMxihHpNMhTvSwwmG3gMDgBf3ZVPnHEzjD5C7hyuRRosQ1qjQiuMomXo8uA",
  "key27": "4tqpWDR8uWUQWPCqpVk4XR6uqBkB4aRT16hhULP2shRxgJ1imSv41xXdi1PhqpL1QbQbHzGCgpXKHY9xeDHc5LB2",
  "key28": "FeiY8LzotN4QFzrazSBpWQmGJGXtSqqiXkHpLbxT7rZAmfdkT9v81mDkhAuqoXuphF7vKx3B5PHsJzpv8dHSaGE",
  "key29": "3UcSqad1gjusTnYcY2PHqBa2UXauQYTHyUHegFuUD78cmQbuNvDtR8a899ubetKScvE6wBQFj5qXDa7AEtBHYwPK",
  "key30": "5VVpcrqNzJtB6MtA5RtCszPBcfQFeZiiezesqWfKu1y24qscYsxSSDCZybaQajcJwKBwbUpgpKNZyi5NfjqLDvsY",
  "key31": "296n4fFfemrPinLqWd6zMuNzykZLw71uXcUotnksKsSghxvqyfbdzrBSjucJrn894FboC8rZt6tSBJQRZT4xhvJn",
  "key32": "3p4GQ88RJrsZH6afe1Qj5pUd4e72jDiry88QN25UJ2xz6cqaunJ3U5irTS2Eg6B5Z6PmLQgHwYo9kCFRY1VWh3ta",
  "key33": "2vbphX1GU6DYq8DRC1ovkQXqP9XKd4bxL6VhpDunjqYj35Eo9X1M8tr3srw7B2Emv1VMB76TYEU62Hqzau9opjoa",
  "key34": "3Dr2ZEk3c35tf4xZnfzdfFe8rn9XaeQvvQHK24P4Aeej4cHHoNzkZU3gbWphjSppBkWKX2nyCHite1UxaJsx17QE",
  "key35": "5anAdyoHNiezsKmPL9rpZES5RY96C3NTijfMkD2CC11G5RD75RNGrufrDZERJ8GHz4JLLZETWeoTZYC7nSJGN2yb",
  "key36": "4Fu7gBYiAYCt4XQuQUfdFxZpbQAbBjy79nx2UQQYhf5HGdK9ymSo7PN9eWKrh8EStE1evTPa5quPYp5aWi2m9GXB",
  "key37": "4PMitshkb8qjsmqvy6gmuk2VN5ppVnvMy1B1spbH2G3ngabVdQxbNRmVxoWAqrEWXoHZRe5H5kush5Ahg3oQ3WCm",
  "key38": "2r5j5HemHnXfUdfDUJCo2knrdd27BMQ7xKT43Yk4EUjAN8uR5ePQzkfcy9JM5WR1LFWAASe1W8dAeXZwCPowvGc4",
  "key39": "2hds8hMJKX1yZ71Sy7vZET7Zor2HEjD3r4XApX3aGzjMQJpmKgAxRBXhDduUwJyHDyeE5Rj5kjnArqp7e6QcHocN",
  "key40": "3ksp2YM1VG3DAek2dsh7wnyorB4kY4goL21cKSVBV291FDZifsURN3rDqWsYCa8uXqRWdg2yX2WzHzqiCttFe6pR"
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
