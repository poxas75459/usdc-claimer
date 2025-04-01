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
    "9HAQDRZ6sczc9nNrW6PYjpAzNdVoXfymJjGaj3eMjA2RtFL9fJq1PNhkPw7jCPwuBeSkDVAvRR4b3uCpDRgMHxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G7Qu48EVKfj5TXr35bbPafSpRp1N4wZs2ptwSe9q3qW9UYATc7KuhNG8fkt41uvpt4KREWs7AUfi7hb6YGQmJNx",
  "key1": "yq2e7JoFspA1PU5BLkkZEinqhdDk1erSAHtVxcL5DG6tyxJE3w9QNM4Hc1yS9tmN4WEBF4wSoToN7EmWNBBE3uF",
  "key2": "g2pa58D2Z9JjDSFtUxHPuf7W1h1LhwT7dPtX57keoopnXUGixMVei6gZCDMqaTR6QZJwC86c9ATEJVWcWWAPQzc",
  "key3": "4nJyee5efzg3QTv93Yku1RqDHteUGTWNyYMRaqC4sjPv31dZZwhcgsS7jTEJ56fjdZZCY7y4SgaaWr49gaMhkinm",
  "key4": "4nF7gHbLbTCAMthvZF3hhZigDCAEEEj1fsdpXsXhenRj66wdxpJhuDMk2jK9oqJKdH2Crhn9B5Vnd2f5CkQZfyHT",
  "key5": "2rqZFVqX3fFoViWd6hnsi9znKrYHKNDQNaGFzXhutG66ME87sXb2tteFSvHdaUaSbksQbHoT1ZbPGUMyfkkLGCX",
  "key6": "3ypeZFFRS8vgwHfbWwAiFhssAd8VPmpR8kBVmEjSVKsPXwTPGoEXVqExG8ehExb2hVnLTXWE1DACqzdYpfVD4aDi",
  "key7": "23gpFvZy187ZUX1ucCyAEgDftu3BSZ7jDw8JB98vxUgYhFhmQUW3NYKLdinJUNdteH2FCrnFSiBZaE9VdynrJfHg",
  "key8": "3Ap5JS4NjEuLwuk2Bek5wD9sHz2fe4FQwKhcmPCtFtjDEZwWZFsGqGQ372bwg7V9Qgfu2FgVaWdrjMnZGFLyXtK6",
  "key9": "4XdzktUVpwkYwGXhvpXxFHKeFnDbVfM56jYeN9CqhVee6yDu1kX9Gkp2BXhRoFxC1nm2HxE2KqgRKaQS6PP8KMdW",
  "key10": "4ekN1LYKpXAyg359rRi61xGn8JzqzrNYcxYZHwPHxkbHP5ThsAV7TrhXwh1QdhX8bPSCfQmqky7JL6nvxctB7EJB",
  "key11": "5aaUUzBDPkdk3AMP3eL5aVdzGZktqVSuNXPXgRVeXND411oAA4R64KDD7jMeGARGJkZ6ijpV8weJS2uZ2vAb71BX",
  "key12": "4CL5NApdV6J23i8R2FWY3TYw6jsT5kQ3wbWjWVUvkdVgqeRH15WNZoQH763zpQotzajkjJpE8GjdFES4E39Hg5sz",
  "key13": "2he3zxYN9bgw4BmfB5mij8767pnm3y4JthPqzcjXh6xqbfD1z5kEJqV84Gs8Whz8xiGwfVUF1MyggeqVFTnawL6e",
  "key14": "NmLENKK8Lqvps62DMyurhb2hEMmHFSD89zKsQ4GpujPbU3ag3RpFi3hzKNDLrPqfnNfsTbi11rxMnjpKjPisa5W",
  "key15": "3MpZdckjextQqKkZDcWKG3i19hU3qe3GEjviDAbx3uGzwgJaSx4fVnbQrDk34jjqPzzDgQ5UdVXWxDo6TyjapFf3",
  "key16": "3qCgbVWsLaoAX923vYiWA5oFSQsMEauFEYczbr56RCuHu4ARs1JsTVGsuxViYNBPT8UMpRTskL7xPFo8j1op1PFC",
  "key17": "2yDF6kL2FBxjgZRNZZWGfw9XuYZjiUS2Z6VK6z52v7hoYja6jyypbENwR1yVJumDk7bYMJNVmTDbeFDbzXiDUFWD",
  "key18": "V4QEXKd5oYYftFc8TUZ48YkpTjiRfqDuUnMLWLrZubRfFZVygPg7QM3DbK4dk964s2RCKfXJNxyVKnumTYYGdxK",
  "key19": "4w2hWwgwE73kwtRJG11ScakhbTBnVfF4CStDVhRarmJYPrFsySpoHMLgxjqgwLJcuZ4Z5BguaCZJJ13BKrEjBNrg",
  "key20": "5HSRJUZjcBH5SCTe7qjHRAYonoHn6wusT4L39W7UL9qPuAoNAcLspzPdctdtv3YrCN46Zs1UcQ7xcQHXUS6TnQb9",
  "key21": "5DrKDYbXjuPFiaeyLArUsJZZA15zpaH5LTXZX2GCAdyXSknGfgrXZtUsY86drLsxnVuG9qb281cPcWTtVtgbL5j7",
  "key22": "JbAcDJBvLazAH7Hf5haFaTckcTZTcaMNGrUKctwy7LM6WCGNJeBo9EyFqQHRUKdHde4itZgf3aq5sSybMsmc5g8",
  "key23": "49nKbwfMr2cJCtCi3gEBRBzbYMayg1WGseM23KJBueccU1VQD1KkM2KnvorbKywRggmRkNheY7zV8HAyPu6xu828",
  "key24": "2gW74YfeYpf6fmU9h1ZbYfjUmdSZZ4uLsXEdBDpDMd3Q8Vh7wJEiiQH1wizvEaWkbmEDtHzKTERTYHu6CRrGMZmo",
  "key25": "4f9a3J1a7YGStCXxd4Zu1UHBspTKcj3oNFCtSbFUYdALERkqaoPSznu5eBt4EC9ndLZgbVopXSEB6mApSEinTcPv",
  "key26": "o5txke7ANWHVjUDbqTbm2Q6PWH3c9CYyDjMG4ZvPa2h9Yw8vVRnB4vgGMXCNRaRSuyNDw7F6xYRAnv2hvbZK7Xb"
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
