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
    "4Kp2xLia7kBeJfTJEgpcEEYMvYGLn7P5cpwYapamjGCdiQoBgvFkcvg8k9DNyVYHwD5KhEhw3H7TBbx6QvL9jhrg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nxprF7iiX3h7pfvGRe5HCCm8iY7kT2vi4TmDHbbyb7WwyLsaGHMGxqXmYkK3QpytaNPWBagvDgvympYc9QVgWvu",
  "key1": "4Yc7LuNHqpBeNXdgjL3chtwfFrtZtPTux9gYJHMeUM3AjRtPJPM4QPFX97msDaMBYQFEBwzhb1bBitAMUUW7wo8h",
  "key2": "2c5JbwdQCJJoNQTyw26i9PHu5GpPaJBRLmMBsv2Ncue4WFgmgMdQBjjfnW1LR4CyGhLYCV6wD4ybyxnjFZuURJTh",
  "key3": "3j5AxmJEaiN7VrgN7HgbHmKq5yahW2rw5623B7ocSZJEXViQhv1o51w6Vkn7aAeyeTG9q6vjrFzvgWCHnMFUqbJ5",
  "key4": "2hoGj2CxqyVisRkgBspM5LtyjScePZFTP41t6FVrw5Tk27h2jM5ZYnWvBGPqCUe4iHBC9d658cyG7eoomKAaiLJu",
  "key5": "52A6bUCowkPbq9irT3ueajKYTTTjRNc8h2tKVrnKXcX5sr1JBKPJAk1oi6HVQbm8KqopoJ2sKL4omW1qMRPwFa8P",
  "key6": "33fboUbdfY9haDAt8qgUA23mHWzLesgKNkDf3s3T7kzerPKrB8h5pA8H8FPXdz1cL6RR4WgHwBGCYuTM4NTZy74",
  "key7": "3CAbLzK4w2ikJtjfMz5VPRMSnBm9vKLYQUaqUqgn8zfGSDNGwxDUeD4ge7hUzBdJDhdwJ4zSZUWSq9cwhDTfPsNv",
  "key8": "vJeJoJnvY3Srai8p6CBeEfCE4WchG8Hy1zK264g2LA4SGMoyhMAYt7aMJwmQy63zea9Bs1TWytbecZn3V2mYTAp",
  "key9": "2iSxgE4F977Mm4WERukRv6LQZUC1poaNoeyVTscyzxbLyZAXFXmDWQxwHmRoLBoNdSFGPSPQiuDjAPYikwjJG863",
  "key10": "5CmzeEFh86MszSVyaprSvxZvGyw8wigyPLFwAUUpuxpAZ5BJUm8VAR2uPpCAX8bEUZ1HqU2nkaymqX1LYCqumPxz",
  "key11": "Q2U4kpKe6whHqvEmAxNku8UKf94DeKgUC1srrykep3JSZRmvPcHZwwEf2DVqGCaxNSzzacXPRXjRQCrBoTQZJ4a",
  "key12": "5yC8H6zNgdTC5xP8Lm139Ahbc19jdE8MxZA4RTXWZsgJXsTzaCUjoD9SSHrNeBCyrbzC3MYMoeP6rU8aQw2kFeJD",
  "key13": "2NwXD4oYUfiM9iRQEpN99omqPvt6wQQSvoQoRKk5Q297EA68uYbkgA5L4vnpwLnJj4WMmPmRAYv1p5UtunGJJnbC",
  "key14": "3njsYFYi5XN8KCs3Bx7ghFrPx7wKKwA9oC5WvxanFFUkPfjBKFNTf4ziyQ6iChnDDeQM9HNRUojjbs7iHxhh6Wjo",
  "key15": "3aq3a6e9YyvdPS9TqTSrzRedjHjkw7DyFVFBdRaM4Eb18SkueEzVUVYta8RkaghmWp9WGSpDYF649sSDDUpvMfsW",
  "key16": "4uAQM1oAi1EDbFF97M6uUZabM7QJdxUGgycbS3BmVMNgpSAPpXvm1fTfnZu9jo3YRtrUhZMFPYeFrG5GaanXbxmo",
  "key17": "5VXEq1SY9THTDA68tinCz5EmtBhxYocQ6zzCeDJzvskQgmQN1AN1npGyqE74XUJbCqPCUr1E5XkCasfMTtdkyWCu",
  "key18": "jwBJYh5EGw4tXDzvtpSXeiRDdj24usKLtmvhVfMPhYrUeJPyYNQhBJGxVU4urQ6EPmh1uQou4dQSKG2qQ1cjDY1",
  "key19": "AmcHUPRw478hYkCGM7n1uDftHm7kzJrrCiB56MX7FjUdhrSEpRSqsNKkaNnuHN44z82jPWmJVpzcfZAyB4EFejb",
  "key20": "2qYK8GDcfWNqhYGVFNr4YJFUMpHiQuje3p7cgXPa9tiQ6mQXzx7kzKAyDQnHmri761smkbBmByi4zCVerHzcqkWu",
  "key21": "5wXdWuRJYfoCAurz3P6CaEK6PrUpptds74nfE785LVgLtnkEkTkhC8ciRtTe3vn2wNjE85RkuhE43aQhsPCySpeu",
  "key22": "id6EG6QbMmpfdW3xm3DF8E86m9pDKrkhESMkUFBo44J9Tf6kzWPn4yLrPrLq1WgEzznPU4VnNigUrU6DhyHcKYD",
  "key23": "1y2uqiPEFMshLcgMatknka3q1c2RfBeJumtjG3qNkdUbBPeYcwbFfnmbq7yypXfu7iJ9M5bqhzUiBatxbzxjGX1",
  "key24": "5KGUS7bCho8wTmEnDDux5B3ebiuNATuf8eK3CeaD9VYtvkn1HoscnvFSgctwhsFj7RkDM68zvxKydnb1e8VfsqY7",
  "key25": "BxdYdCWqGgYHwM4c8BkoH6HzbTJyJo6gwhsrJ1z8neV7fbdX9tD99EGWK3L4BQSGT1QSYGViiSjz9oFtFjCMx7k",
  "key26": "4ynEZ6hPhNZ6bnVQDPjkj7Cn7F6WjhjB3xrZckrMByjusMSGsU53VK17KkGhq9YBvfZHJWWVpTg6VhKCgTRXLsUJ",
  "key27": "3YiEbtgtAjxHkVwLndj4bTk9bk3MCYNmFQ26NyDiofH3i4YLzy77TKzH63kdA74trNu9cWizuyb9hMdMnzEsmnau"
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
