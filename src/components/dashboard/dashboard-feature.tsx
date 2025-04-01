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
    "2uvULfNJgbgQ24xpYGWg2b41vV9yyhFffn9ejJpUekV1TS2fDKippGnBAkjJo2KurWkQfSAucsQEgBvg3FVANhB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VYbEnLXq1CJi5gLHD84qVLEF9ydiUQeH8tK33foUS8Ywt9AHNZubVx6pZ8Z6182xfLShwGMzjZUKmsUvbdURv3r",
  "key1": "4BQ92aF87g1Loj5B5oL33DZFuwKNd8LXmCc8VRmYQxhowvKnNyG6qD9tsYYz8FfZnNwyKZM7gS6jcT2xELUzNEPu",
  "key2": "4UwVkqCgQGa8WwcqMahEzznoDznHiNMXREugmKw31mY8AZMkvczpcp9sgGd8soiVhqHHWMXR4j99MyU45ojSgWAu",
  "key3": "3Uz1XxsczeoSE886XRV348XqiwsPohb9DPQZwF37EbzdAruu3b9wXpG1Pmixp5ZWeqSGxY8qxLKyj18VeyBreFji",
  "key4": "22axxviRrXf8cpHNQe3Ti5FRVfahbqTNRD9CF3qTsTf65mk9DBfH12JigNuKgzkjkmU5DubEzNFhX5W79UiTe6T4",
  "key5": "4ks4nroXWRHZX6JUupPGFHf6e36LoeUT2nF2guF43m38EUkcBacqzMv9VZUGMDfdPw1JYorYgb28M5HVm7ss1KJL",
  "key6": "3dx5sobRxKSt5WQSrQKCcAoPXnkWQUPE4EpCJUhA9Wxy9SnQrq31R18XVXzLRp6rLyFaJGp2L7Sxkn9SoWuRGrJG",
  "key7": "CovqNu7iqsUXhcb1b3nmaKQjeSXtojLB1n6EohG45fHjgs3v6N1kGdAGuE81dR7iRd3vPb9JWBCf6N7ePTmWhyr",
  "key8": "48mFhGgCNvE7vXGW46348cVwzJNPw3aVwsYoGMaUp1XN3wK3ac1n8Uin9SNocasFz8brwLU38vU9davYvbMtimsR",
  "key9": "5ZfJVaovX33ufupRr5aA5fcrwBJ3hgjDc8hCUP5ukkfxsQvBeGxMf3kUaWv9RkHds3w58NkNVdKCiZpVHwuKUtT7",
  "key10": "62dPu46YYfKxNGcFtENGWc1RdVFm3rF3iUb6xKtZkMx3ehKC9NUyySSjQ6mfVt5N5zFEVXHAm8BiW1cAcDHkNbcm",
  "key11": "3EHrhwzthMw3ZLwBdP4osAPcnxpKQpNjBV4GETEXNpvmjuCjwgmi1kTKy4wxKo5hpAy4YXDTeYLbyjHmGqz6dBgU",
  "key12": "4Dd5uUgXsVWAkFZyFzMHBrwgs5QgbCsxdC7CabpAz9A7678e9u3iXeDVfzFF3mMcSAz5JYZcJp8qrXBakCuGDaQP",
  "key13": "2yr3zFB3N6YFGsanNqbRNrwSqfRJDngY7Yaxnb335o8yRsiG8CiJXf14BpnWoapYfb8u1wY1G7xsytr7MFgNSf2m",
  "key14": "4UqBe1RiceUa8pqARYS9DVh2DSHxQQs5CWqogxABG1NzP8pZmHQcy3SmGhSttU9NqDf7iL5YdKN4b9P38zy9qvL",
  "key15": "5YKyPwU7gegSF31f556CdnzKreWzVmcaHBbXMe7r4eitkSNG5SKANMbLa4HPFEyTEnWRgoWtfESVF36GojbjWLyA",
  "key16": "31DZgCPNapUxsZu4wTmpNxenNxdw3azLdSkULDxvSA2TuUTq3caG4YeBXRNVWARf6bPHNrCm9cHLhjQhdGiEk76d",
  "key17": "4EqokroDJRmMqHxWrXMwwehtUU3kg3DUbesuRkdQQjU6Ffqmhs8Rwv74LjyyuEK5zLGpN4BehZxrpD4DNa9ZT4Xt",
  "key18": "2VuwpFiUAeUtV65zg4XLG67GGV9egkkve6JJ3g6UV1q9JWhoj9W6uVt4pFBtYiYncypQBcSgbAPM6mz7So9WFBmd",
  "key19": "FkkLamg92vEbzKYxjgJmP79mgm2NQ7rgKqBKDfo3En2srXvcgR9n1B1KbKCSUGFd8ZriwYtc313cDy21ZZyosDn",
  "key20": "5iDpcyj4n2JGTNDNAcSzkATNkWnio2W515gYNRQ6jmJyaua3yz2EznNy8bWgEA1jWTsHRPT6ncrTaeU62kPSpsqW",
  "key21": "5mo2xXuyiBNGVEY47qXRdSaZFFmktkWUpjQdhTrsxPSGm74oUKh7zieZ3YR7VYnZCd8q9u2abuKburSLSprZJb3G",
  "key22": "3wWwDXhBdGT1Fxy9chQ6zFjkBBEJGxwBPyyddfTyqw9462U6Z6qorJLT7cDSxSimaau718ro9mKBZLrVC8Jpt4q8",
  "key23": "wYZ7b1Q86wwGajMU2KGLXCVq5SK4AWwoFQ1wjAyHuuk92Qt32dYEaA3RqYWZwQVhCfyhEZzqZxreCckCUcwTU1U",
  "key24": "2KLd6ox69a5h1cqxpk8Vf6CxwvRKuX8K5w3sjvtJPERjeKJSHNrRKQRU29GxKx13sa4gn3esFpSJuxCtZQrQTJ4W",
  "key25": "3WqviEiRSWJqn9n22H3oK1vSeQRta88394hZiXMqCHDE9eYUB6PDAi4CMbTp1eXreAJ7jCs6oXDwsQbYUUfD736n",
  "key26": "5VhY96KAegJ4pq7Gf5VnuYDscXD4V6CTUTCHxENz51VZ6G2c5kGKk2fqHokr1SW8Fs8TzP21D2xsqiD4cAk4R5oe",
  "key27": "46WpUYUPrj7pZZghMyi1vQJJxxbCr8YyRhvh3sdKkygifct296dRvthqx4CpjmPLE75dQvWQHXKczQU6KHFPDbJG",
  "key28": "3YYACVPVzN8ahZkTTdG2N1ATxcg1YN4qejNfQQ4P272ZWZomJGcajj43SpJFgw4zXDjfD64SScrrLcjxAFvNYTU8",
  "key29": "5Q6S1toaF3USPoxvAkMUtxY5Htxi2P211X3QzuHVGsKmEWgBqyAMv6maaFBKCRf5QUdWpx8d1oYp3mRVWpa6bNGy",
  "key30": "ANokL9d5kQyQ6ZWhW37oy4fePymCdCKJd4Jj9iiwCz3AqvmhB9czXJkZ2dotLRi8kv5v627LVnELpwAXMDGH2rA",
  "key31": "4K8MQ8ZeTTFtZW3H3RVkxvCr5H4FmbDcR4rMcxZuD5j5tk2YLGivqgzuaP9YBr5xgPioER8arT7WBEN86hm6cpGQ"
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
