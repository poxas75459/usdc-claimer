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
    "2RVme2KoLnfMwFnFmgMeBProH66zv6DZEsH1samrqJVUwnXxxJ61cfqYK4RvpefkS4PMBXZ8er7yrB3XQKR7Uow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22CH6ca7ZfB93ZhghMUuJBkZzUjBkbpRoBfChDmmkgMFeVxU6ZnDKGHBgLKaXMi4LHYYoDdBqUuwnrQp1VM7QvCK",
  "key1": "5X3htkqAfWXVNQQhEvoVfHgS5uvAsRLBvaErFDfxe4dLLqDqjKcZuBnqK9RFxFJSV7CSH21KXfeirjSVkW7LYXsW",
  "key2": "4JXWtsMkZvePkzRPYTHJxoP9WRxNS5ofF3dgE9ye36FBvYRGWir5YR2e3bKzcxbSByTneZdGku6pgVtME2MtnbjL",
  "key3": "2AzPwgKxm4c9KHGWb8WGiAtDWjWT5ENTcQgZ8n2LiRFC84zTCMf9AZp1jE8fTTp72MDFiwVnLuN9eQ1oQbhcnMca",
  "key4": "2hAHuzanWWm57Cb3Sv41mbDbEcmUgC8GU1mqEFtAMeab9f9M7NoS3gEaQsNjq53jQbCujXpwaZgwGvGbhtEj6Yvb",
  "key5": "39JZsVsXN3eNW1jJB9XkkE2wxsUFZiCG89CE5h6ME9qxw3pHkgWeM9bAJ9n4UFcC2CkkncyD4xSqMJ2BKtMMVAhY",
  "key6": "2wGdaVqr86TwrYHsZmqXkyg1kYP8W316CyuAb2c4ZzL9ztYmX4TZNw6EqDj5DmQTL8kXeXuH7L8tEynuJJAVnhR2",
  "key7": "3hyfhUvJzWfC6oKEDi2VRygtENCeysHxjHc65gpbqTYCVkrcjqFsEBLMsSd29VFcNKTvwUxssZBmt2Df8mkkSDuo",
  "key8": "588JeEh8S5LupP9u2bey3opvnf6HrDcSgpWzAZvbmVoSvccTRoCYkN6dYCS6oBb4H66nio1odUf9uzk7cxni41mz",
  "key9": "3j78oK1brGTVdSoyDaQpFuCAtpB8uULpcvni8h4PgpbtkyaeZDHxGYp8nuFWNWhk89sBJw63Mhu7nmDjH2rWcGYg",
  "key10": "4bEJfbkJmjvLpZP31RPU7ikjHvA8fr5JNah6c1k8TATgBT6fzMmY2uV1xDz5Hgf7tmK66qf9q4EfmM9q3RtUVFuY",
  "key11": "2nTZ9ZE25Q5TpRwk6GvvDB6szena5YcTYRESwsB98H5SafPCwapHrXi4vgmncteLAz9AX37HvyE59c5Ak7z6fRkB",
  "key12": "2yMSioMoGTd8rZPD3jRwSRPRBt7JMmJ5NQEdwPvjWubmxN9SsPA3GNK3hq31U3qz8cNBLruhcaj4vhUdkq4zSDsa",
  "key13": "2qRJxDtQSYS5hUAJh9ob4bx7UzEbFHJXw47bC9htSPaikynWxi5H2LiZjiSiQuFadYLGWjK2Rg7SwVt3AXF6Lzfg",
  "key14": "4Zat3wTBZoqdxrfbKnr4MRq92y51ArCqBsEA1hKoSBXW6D146GhVP7jTtfxTHoKRHrnnnHyV6NgYgwEJoKxDDxXh",
  "key15": "3jr8p7VduJc9AcbcquPnYbftPd6WavNP5hMckgYsifWQCsJPruGCkUQgF1XQ12jhADfFtMnie1rw2Jmc6v7xqu7T",
  "key16": "LKdbbFX2PbrSETixU5bf3fhH1WsTFP4wywdadxkAVf9v5ALwjw5vpKgz5pSg2AA3L4HoUUbPiGZRkkUrbV8nNtJ",
  "key17": "38VJih3UBjkyvGiM44VC7YKcaaWhAbeX2RhNdsteepPFFWX9zchmccnqkW62aRvebRrH4C1WPJRooL7Fvzmw7Jjs",
  "key18": "5d9xayae7jTw95YXv7DJuhuv89n443B7pYL6kCGYd6ZcGqbiyvFm9o1zTpq6tCSQHBLGj2d4j2Tr7TW41TyHySEN",
  "key19": "396VqWvk8HGwifMRVFk4GYPoLdE3FEtAyk2wDc4RgSAHTaZkUqo8yJkF2yp8fAoYHjeNvQPwbEmb3ALk7oqb9nZ5",
  "key20": "27GKJGURrn5UXKq2EgtQuMijJdhjmtUgjC6W5yPDzpQb6f81th26qgxo7QUX4eFoMjzheTWuR5GFiuE6aBfTwT8z",
  "key21": "3Pg36VXDVRnLc8PwHobTv2Kv5Ha3NvLBsyv826RgYaMX1wyGMaokh5YnejtAJCehaTk2g8u7kZqQuo7o6GSq9JLF",
  "key22": "3XirTZ7qkgYWz8RyZV4xuq8TNVucPHvpCenZGLgxHmVAq5qhiqvpw8trt988Lv9KWeLxyaHe7WDVZ54pRL3Q8eZw",
  "key23": "gzoMQj74ZGtSi4avsbmwKi9oDjMTn8ZDgT7GnNNSmXXgu568gSxLhAjqi9dKZrb4ZuUzYVy2mvqL9Y3csADboKS",
  "key24": "5R5x4EVtJikqbTFrYJUbFb5af5LVduQCqBNaSVzKGjStX6Ljgz4n5sUfpmLsRsb1ivaTuxphfkNvKk7SXk6fswjj",
  "key25": "4vu4sU4tmLkV1USwopGQBeZwzaNKwGMJryJcCcY2hRSPN4MrDbrDUF6XoVWubLkCMwvzp6xdx9TkX8pmupWs1oA4",
  "key26": "bLG6vqz9XMhrG1T5CX7aPMhScWfdjdxxpFfXsnDkN2Q8ZGKwYowMjiaU5JHrrQ9M4ctBxnXLg6h8GUGqBvmRUXp",
  "key27": "VHaiaa3S5op6U8jVk5Nu4XqQwumNQU5z3i4kpneE7qdepabct3mJqLYTdHZESErUqjyqQ69kBqYsg6ETn5c6SB1"
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
