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
    "fYSZWoL9qH5bYH3Exiym329tTeYgkFWsvEdEhSBzWE5Ev8zgHw5FFoqM9sLYZRQzjK7dUv8WFZkF7ZP3tDgZ3VM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UxfYgZtGKcrHC1p9mXwvDPnFNwS6F7tmEYTfx6EPGtHFE2a54EDphU4f5sL1cmrNhAboajDhwWkzTN495VvfThT",
  "key1": "4864bBePxWBsbjKQxX7gzTsbnUydLEDFDG7D7H45rv3nJW3UqQmZwEFVv73tN3MGqSesJdtcDqVL6QjwwQf3nSsa",
  "key2": "5Q7uvFxD6f3ubaf3GDkhzS8k4P7HEHVipoNbsXHFFvXFHbE5jCxb7oADGiw8YbExkCLowZfM8GCx6FJnWkUzMcGG",
  "key3": "32KiUK9n1DJApVPrGNHCduSjdmmn9h5UY5PuWpxKLE3vYe55v6ntFYF1iizaHQJDViSEJmUkQrtgNueHZGSCuVUc",
  "key4": "qRd93ZszY3KXJ25pNxrYcQqMPd1vuWu1LmAEQnJMyZ2zFcPzz8WTkdpXXbvrjvmgErHQccCFr8Y2hYn299x2DXo",
  "key5": "5LeNRcVYSqvGajSxWa7Xd7P7yBFn9D9GjLCTk51tEnjD4w7s4tX883qkmbq7jZG99iCkWsc2Xcr6LiqxVSJaGa7o",
  "key6": "4q9P4PiwNsExNmA7aGGRWqyoUYge67wkMs6Q1WdLBgNDU37P5HgXqnYTrNZumHTGU4Msydpx3h8r9ZHV1XbBJvLo",
  "key7": "2av89NsUpacp6UidPnB32cnqbMDurZtprp8VuTnMadtdRwctzJLz3cBsBKwqbmq1U238RzujZ4QZ8V9aj9Yp3MPJ",
  "key8": "5XGPAuAzpcsUWh97rHExfoku2GjBGgKgHnsfwawwkjqrCq2M3Qsqc9Z5Urz8JkA7ptwyqoikehHon8wkaoX3xV5B",
  "key9": "4NyqbfJUfxR4v9wJwN5cgEBBRktsChSqHE4uHXqyRv2AzEhmYZ2iqAFqEiHfvWGf3VaZmW1SFE3yzA3uazzcPprv",
  "key10": "EBnCrKCpczTEiCBus9qgUaMXbxHntnM8VHRdh73Jwmg7BfeKZViGtyqV1nFEFSiB6BEssa9sbH4sekRqvNbNA2z",
  "key11": "2PZvX2vUbpsTYCNtbkBMz95znFjEcCBhEsU5P1XyM8XUrWRna22paqfULK3suESCzRbLFQ3kqmqtDJcyeNdJf71J",
  "key12": "335fQCL4rT8dYEEsp1yL9pYZAxD6ss4FKEec77vPwFZNVg19SMb6wSkucPGf4xnW9wBUkUTxqeUs2MEMmrEkQUjp",
  "key13": "3TwjXmzfySCj1iVomweSfiAJpQL62HrL99a55BXpLDBi3LywXFJW2AMLoQWQZgWaBx4cddhcS1Vc5y98ThEF4uDT",
  "key14": "4rsVAyaro6uFe85SZZv4MdPQQtrPJoa2rwcid4oTXWAnfSyNhFhuiesjhYrpWoDvrAUumfYo2YJ1xWCeMbkwevEM",
  "key15": "A5yLZUKwDTAu5mVVKwPR5oACuxTJbZcvspdeFBS2Zdw6qsmx2akanczJhaz22L8NCJfymm13sEn7ZmhMy9FZFDy",
  "key16": "4yCEeBpDoPvhmeCkBPrXWMLdPpcdk345YWjkdbxomQMcvYxoztmhcbfswXN7mJSHBJq7sWNFatK72Pv5Cj6GZhHB",
  "key17": "47EcHHqjX2vCqncCJxWxYdXYPqRn4oiJKthxPC5gmSykjherBrQtq16McQFicp6ggFH9ze69NDLg3wVU7wuD9N6v",
  "key18": "iPYpxAFEKjxfXLsT9o23q2LsoWqCvdDwXsNxYZF4Xu86HLcuzuTqhyVY8nRERaGvMtEx1RqVG6heGMafuVshjLL",
  "key19": "2PgYNNVSK1T8kZey8rJEP4jHiX133NPQ4BquxNgSZapfYGsmy7AnA97MEcuQ4tXMbQz2XDaoEvU6ipTo37qnU1o3",
  "key20": "5oMQtaH8PJhSZDePXKJ58CG4Ds7C4bHGSDEejMntwSxbpxwLgdzTsydP76FegAdTmCnh9hwTBCgxEiv6NqcChatY",
  "key21": "2h7JdVpacVVCf1HJpFpMeKbV9sFyBM69uQdyhgVww2y1eU86WZHygaDQGbLGkc4HEuY6B3azqF9ECHUmbitkhjkz",
  "key22": "3gWaNXWSd2CDJPLsCXbzJCWyjGoiwLS2uzcEx1WpWjuLs4FRt2zoEHRqSZYdbDJGdnpGoeGYp2MY3vVxwLRyQuSw",
  "key23": "62WwKZmy7rjbE8j1vynJ8pZh2mgFqPr6kThnuY37NbuFRkUr6jvQyj7fUfE8ngqjyWDYbmQFboyp9PinaZcGhwQC",
  "key24": "jp9tVNSmeyThWNZ4rJfVUHzoEYzAe4sTevnd7j93oXT9oWGwJ5Hjzjak6QRzBgx7UJh657PwczkLQyq6T67HKn4",
  "key25": "BxqEE6rxfdm5srs96oaTvBxhg1DJSzn8Tw2BVicvVtYqcBmdWAjRZuFB6UFdKUfTFnEZxmRpcZPGUCQq5QCSTa9",
  "key26": "2d5UtcyELosWQyuZJwZTZp3izpv7FcDF7WfiPEZJjKrDWnjfxZHYc91vqm9KSdkkPg8rp8GFMRW5TCmRYK4H6ENe"
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
