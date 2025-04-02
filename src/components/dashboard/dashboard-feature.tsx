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
    "3GWjbEwXrns4dxro3ijmkMxbwHXTq3jmnx5XwTac7B4xFkCi3NY5SuB2bWaeygfChGftSNieNnEQkpws32L68ez6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GZFwvGEQqAnjVhsfyAwvwvGTKkbekE9ZuGrdb6uQSuC5VacSaaYREL56XZD8LR1WK9JyRPP9uq9EWj8Mr1xTeBu",
  "key1": "3AWehwKmwVHQLa6CeZuoBD3tnJbq2tdvjsJYer4vLoCJuGuq1dTQhzLucbrbX2cRPp3UXLLTM57TDgrAf3cdpnKa",
  "key2": "4yYtAHDDR3FDhZUJ4X9RArkVpvGE4sjumYacegNfubpN2e4XKD5xQajv6dQjhA1AFG2e2amZyjH8HbDhvRsSEtu2",
  "key3": "XdrqwZ4178sZTp1fGvC1wVquTtnzAyYErQwUP5LyqZF1TFaY4iXFK8HYKENmF9W7shdCF57FvTW85AKjghQcfFZ",
  "key4": "966RyHLzyoGZaasWkFKXWSm9H6TWdudpX5e6F4AD7JUjfbKTTU4VsiwC6pwW9fM1WcvC2SaC2e3QjL7RHLVhWWR",
  "key5": "35nyZK16G1TtGtj351xsSX2MSPWZ8eTEgPhmWVVqaGjgmUKyq2MP8sjU3a3XvthMQSNtfRN7Bu2bQpdzXScNHGFa",
  "key6": "4xnCmcKGcf8jgXvJ4nr2Gy6nYHqhg63ZuDP2VZJPFZFFhNHwYhcZkvvoTeeADnhLUR3QhssXNmEFyrkEd36cGDYJ",
  "key7": "5aQw6oGDajtQdJndWjrsLv5k3jprLFBBUtRPVTrCFGTFfbunRHqTDQGRn7C1BZ19tsd1oWoVpdYJQY3bXG7uu7RF",
  "key8": "2Cdf4m1PV2XuxC1vRfyfB9EH57htgucSjbJ33xftuRSFnPKBondiZMYJ8dFYpUVi5fMJSaG1mt9x4sya4nkctZbS",
  "key9": "2yECxQGNdL4f9HtXxfzAQedPJdC3iiWTVthEKr3kewDyA6agCy9qgiRnFALHnqKsobS4dST6qXuvdwfULqi6zX31",
  "key10": "3oLc5AXqFXDDabna2FKy74u2E1HS2qiDdyQ3ZX4TTmAQnkY74jfhsdjCbjsBJCkecjSn5D1rwDhEuB5gZeN8Xuji",
  "key11": "42cCvNxpYoYttvMmYScRTpuhNNdDwQJtGYAvYiHgjTepFbYGYqSaHHsmVWHiUuq1giwYKdrkZTjXEmsWo71ah2r2",
  "key12": "4n4iUR7VKN7ds9iDi7cfXedgvgSZdcvtQs93vyZkX1jr8S7xUFRpH5urhhQryMmL2qZe8wQdf7i4R1MpEUyhfXMc",
  "key13": "5B5qb7BxCSYH37BHwA6N6cejw21ZgyC9iuvLBe7GhCfD1Fj19zqjQB2fGkWGYCQAZ1bXZuhJGsLaMMiFcBsq3ysn",
  "key14": "4azifQY1Q6WmvBcJDKZPpk7RmX5aZqcc6xWE3zCGcHszRNsS3dDUF1deDj6aVL9hg89FQzPu1bifBFfzTZKuuALU",
  "key15": "2bZuHEk4NAFviEhB99TUPdi1j8Q597KiNXf8KVavnBcPqurFWww2ifp8xBgmAvFuLeGsaeZs8dzgR1g8TdLk3My8",
  "key16": "2kJeuznggBae4Mt29nyp2oke1aQXmiReJM6EfSd7KA8JDyMMWr6e6WruNAMnie7vWD8vRxEQUpwHjvtu8XBeJfDk",
  "key17": "5u6wv5DduDBQA1PfZcvVxJS19ZremtL73oaR6fqzfXR362UMzXmRVdteuFtG1ZmwShMF1jQTs78oKYf8o3FB67eZ",
  "key18": "3SHQxDDE4cPjT9K63M4zn5QA1mrHY39Qw7FRQUkS6VrXWgztVUdpZDfGcZqirRaQffj5GjFeD5wEbxamDefSeDEn",
  "key19": "3HqoN9PDCc2tpcwVV3Lk63mNHc3vbkJhJrFQrPbWXqqPEeyJ4tFRHxZKrPgGe28PATMcRW7BU5wdjUkYb7r56Rr4",
  "key20": "58TRh3cdSLCbWQsJRC2AAMHxvqMmLjW7MSnyENCf7w3TCwMyceTq5MoVgfA6dxh8oPqve6vTuyjo1qM7kPkCqtoj",
  "key21": "3fLYcm9WhZ3vJCyreGVTJ8hz5q9ZN6WzA5BCPnCrHrhTYsZoXGQcmPLuR7AoFhHAmdZXfUBkgprz2MhEUiEcKaPi",
  "key22": "2vcnnPbkfr2x5kzTLS9kgUt61kLNs32mvHSf9qNtpjgEji1Zqdq5BfS3jHpA9gEEU1kFqv1PQyMbZRcRQq4vJgGU",
  "key23": "5iSQpi9Nu3JecNrc5Xp3NuFD7yQQfU8aq4UddeJAn3Tpjif8DvbyStELj6ds8VGvAqSpWn9ekHtUxfooQjs2Bvzj",
  "key24": "4A7REiSCYnEoWoTtoniTFetUuQCx2noQtjJ7hkBAsiNC1KXhzH6SroANTjRbu2S1ihsw2eWb786oR3gMKxq2eyQ"
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
