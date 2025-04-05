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
    "24TRyddCsZmXNnKMPP7Txbdu4oNNbbMoPehz3Dwk3rZwuXPLS1pJ1wQzmCPnzJzU62Ce7rJpWEomKR9udvCkKwaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CjG7saYM5csb1FppTGWMaMfufAGGEa29zqo5tzkjQ9oYVukXgfx8ip3L48zwvQzRF3rAzLhzSprfzndySW7hPya",
  "key1": "46UjQz3As4HzCaUX4vcmCPAmmyYGeK8WpMAPijuBZNjDyQg7RuwZKUHWBYFdNaEVjKukjNLZXeWjwCJkTsgrWDyA",
  "key2": "3gryFCnpzqnsvtTByqejV3X5rdRNufghv42cWcUKkw8KJbMioq5euGQBLCSsaZUR8YYSueHsXQb1rLnXJ3sYncBR",
  "key3": "3cyCpEDGZpd7TRF5JSbVfSYJQE6wVdXLeraHv7uNfU2e6WLnt2CYBhN4tTDdWpmKAqCkZe4jHVraP7SaWxMXt9qm",
  "key4": "52jVHgH3aEP4p9KEKygKY337Xkqm8Rna6CLLuHFUyspEF6pqpDksNEQ8rHjg4a8ntVg31LNjiCQ5znCjkeZHeT6D",
  "key5": "28isYH2D7MDtN9vGDfkxbowb3GT91ErdJfbZKmewMRLrq1gcAXhXudj5gJQ8ND26NZxkwpSSiofoTbaHncKFERHH",
  "key6": "UgAEedj5G6bLJkJn6mzYmvZBZcDLp3QSaVBpr7HNVgncDX6P7eejQm8nUbiTdVqxEeh4am7J7SoM2EWvZ8dsCRf",
  "key7": "2qTNhqstdpYvaXQTFqjigYfrkW6Dzz1hqW4LjvfDiBzpisAnY9wRyGiRLWaWerRbs6pPQWMxNBsDcKc2ZFDHqZQa",
  "key8": "2D1tYsXDnY1qtiYnvUTar8yA83LZ3pDoEp3gsuHC54oVN1SE9n9ouEWoAz7hSNzVhsBT2SEthZ1vNNiKeECrD4Lz",
  "key9": "2waEx5n2wJgMFPzUTnavvZ8Jy4PGEjq3whD6Q2DepZSr5YmxJMGMeXhBmfpkuBS6njuRBBZK8hPdqRsPhfvxpKP7",
  "key10": "5XiTUqVKsAC3t71A4S4BPT4Mop6W47Cg9Jw6jPenijKpYt1corVqQraZFSx4akJyz3DYXfZbgZh64UiV2nPaSrWx",
  "key11": "5p3QBRwFCWSFxpq94GNvivRTursLTrdRmvfYW1rWDr4Zw5BjmFP3ZX4pCnJE7ptBDdLKLp2NJyZszsXzprPa1iWo",
  "key12": "4K6Eh64TLvq1bzzCyjmNmN8EgP4S6Xy41GEkjhsikG6cDR1YJ3T91Zn2Ba7sFFztzaXrsGSpaskGb1eJuSfp1314",
  "key13": "3hcEuWj1BGroEVm4XhdRrgy6TGB6SXLFRUstZ2F15pseVKRVnBU6H2MnPHxfqwrUTofzaezK7gpRYWEqCLxz7dGF",
  "key14": "5ufJ5XxVG9iswERLnhrbjLb3ZNtGv8GBpf9CQbKWcfTQf67ZcJs9hHjEuCcdBJ4xL8wGmNt5PLJaJqv4Y4cV2jSi",
  "key15": "3DgUnaFTtUJbKbmAMHniYfEdQUeWTWrnJtursWQ5m23bzJ9PrX66G4kj8UjN7c1y4ekGaFqUcX1M1jbZqJ6zMkFz",
  "key16": "2Jv1TxuTsMGYnt7FWYZKqqjrACKmzQd2vizAzxXMLSGyh87Yho98Q7PWmuaqmYMJEM5wtrEzAQHY3RKzjGVMKfG5",
  "key17": "22CcEvYi5NAJQeFnADcBCtewwRtHxZUQAJgNZndRRwMxwhxpjreDqsxCHZvxyAo32nG2QxpsQaeqqaPmZKGyFgYC",
  "key18": "2BDJB8CEcPS6jdH24yaq8VBeXnwMhGj15kdN1RVd8f7GBUMxp5FAynWzC5tTx81zrBMGAxeQdXTvqhBifmuj13PQ",
  "key19": "3Doi4bQkM17XiPkMHW32TYss7SnzBext3AkTnjqX6YtfqrwvpoXEKPUSwjyckV16RpY6GSypMgKGT8mkcCwzKcHP",
  "key20": "4mtXshgiaDyLSFxuc1SXdrz3X4ZFRW1rmFyB4WMkSsfoFedeT1HpsozyU7wLPcYsiM6yfAnzbP9uqXaVMn8Pkspw",
  "key21": "3UHY8zn3xVXWJ12CRWPxAyVWMTtwqzvS1s3976HmjrCwcYeZUAgM2zh8mizAHu8w7EGLjxeT54hZks5pjq1J4wFx",
  "key22": "HZ1X2DoMzqgFQXyRWxyULh5A8kGDF3DhfTKKwpESRudtsY9wDx6zt7ju4pESa8C3DzwB2T9tFzuKSSeAzx4q8aj",
  "key23": "3fmscp8XVAsuYZDNGHjxT7tUPiFniqD86uv8F2jXbmuVaxVDezr9RfmD8ydnqpLCvRDcEpyxY9zX9fvXAZo1Xv6F",
  "key24": "5vMWMXoKQLJxXTUcewb36TdMZGvV7BoCZqDi1WAdynrPahpmYGCgYgHLJvMcnBT9rHJzDAEBnhipsXyR5EnEEyRv",
  "key25": "2rhUgtRdXZ5gqV7vAVv4qpRgWgJeQEk6ubN1yzcxx7NXXBkQPZJC9J7YwvDhh3FRN49wqQp9zobk9633AG9NcBiz",
  "key26": "52NgJt1azkcSt5CQSpKN2Bry28pGgRA5NnjxPU8XML4tFPwi3781NtjH7uL2zWc9tCcYFbrmcoEmznFg7Fsqbhrw",
  "key27": "x9uR8LN66xDDZht7PdvfTMf5LydW1ikmkFJWxsqgBSsHFYERNit2V8XdxzGQbuP8NciP8opYB3aEYdAsLtWTjMD",
  "key28": "ivDBcaKX3mYV9gtgCYgmDgAXy43x5hWLSzyWmjWwBC7XEziRftKrBuCQTifi47dxbyzAsCaR3fizbHWjT6MMQR9",
  "key29": "sep2aWdjQ6g6Hn1jkE7ribUh4JxWnpjan1MdSr4cgQbhzMV9TQumPmYF676KfBKoxRKneFJwsAMne6u5oQ6vKvV",
  "key30": "2aK4WjwrJJGG96uUCAcgBYkay8joW2DJYs7TAD9aroejyH4BvtQ9U5VmFf9oRa5nFi8AUELGG5q2C3yxvQ7VyRAt",
  "key31": "523uGdwT96USyX1jGFf7rMEEk8qk18Ff7e8UBbhjXxYcLbQqnEmaU5rJhNd4T4seoX9sqDwZE4gx9skYDrCTbR9u"
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
