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
    "QfmQ9deagMemCf2jVx62m8VJvLhkExFNPgHtY8tCQ4AgY16zGa9DaHBkMQyVZz7CExec2WAfPNvr6cnEZiTgiVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63em3CH3KxGgW32yRXcEpg4zbYpWYm49RwoP92hKKMjEwASTFZV748M8GocjXwRV9cZoXyyeW6jBGwXjBLtGmwsv",
  "key1": "4MvSzSk5u77zop66fscsDzqbTdRLgz8PYAMqr3Pdfs28nZEsmC4NfUfSmu51kq6RKXhFA7mKp1npoiuN6btuip6G",
  "key2": "2pVidRewjHYrQWUb3N11gMVB1td4zVTCVwLadVQKz6LmZmDiiaohhFReF17MR4qmSm6NCrfBwPsJbNYZH3sYjSVb",
  "key3": "5Fahvxp7vJWFrvgCS7HzYTqbxgMKLnwgHEb9o7nZs5MXAgPJxJfAicGLqKgceKa7CoGChiadS5WUJdt8yyaxpaDu",
  "key4": "MvhpsczVCEL7rWTH1PWKasohZ4eukJ7tkzYEUsWDsvmfbSvv2LKSHA7aTFxDtrZnGtj8weqn4SR1CDZdFYbX4B7",
  "key5": "4F6i4NkC5adSBr6XYay5WccYeYfjDXyGsnkhhfLjFu9RSUsMRu7eqf5VRZNHPYML2yt1d74M1k2UsANu1Qds6Ynx",
  "key6": "5Rj8HMNa7XtiBJ3QLrCm332sP53R7JDZT5uyQhynPwxRA7rGpF59T4d6FKypEsiXjTcNTAFPoUzr4aKKTzJNoqpp",
  "key7": "4NBNXvNssp3wft9soMZHAMvEPxhWhM2t5vphy7r9gTEchbid5JVfLJ74SP99SAKMNBybpLpdezxe7ZwZFZNPK4Ek",
  "key8": "2DyK6ZorStr6jKdpDzUd6yf5ivA9T1EnBCLXXM1ru4eT9sBRZevyiBhwEVtZ8mqgo5zZFjwwVXYVnbcJoNRziaHW",
  "key9": "2wPvxL3u1821osEKx6LenJTfRKaZVihXcUDAZiESiBmVHhMm54A4c48kurWJyeKcmqhyW2JvMBfTx5UAvXp72u1G",
  "key10": "4zunM8WEnQ7SR5Db5E7RAmCdWUMRF4eKXiZV7F2GCQ1eNomu6JCgRZHx5gCKaqoKcCJPBxqADBKt7CkSfueDZZoc",
  "key11": "3KyeqnUzxRwyhJPcGR4M95Ywr8Xn96BGQScK7MG49CVGbfyGPwf1Uwc72NcLTp9GpXdDvsRpTSMZvVApf22cdgBk",
  "key12": "5qPFTuyNyCcFQkM2imv4ZGKkge8DXBzB5ELCrZdN91tiWA6RgfGA7hYYojCD2mm7bXxnuMZoN1Ko9SeNSU47T8VD",
  "key13": "4jq1pLdxxksCSQZChEGoLZatsYWbNJcRzBGp3o9QqHhVHaVwhetHpuoQTep63aJfSd8vDSMp7hdZV9kF9C5U5nd1",
  "key14": "3n7g6HeUdcT28kca156bWDtzLPKa8kmkkEwnwgCVtFrxbmisqXE33C4cSCgPR6pHVKECvzTUwavEUxqsFKPpLXBh",
  "key15": "A9eAFnH1ayKGVKmenPj9RPLZFZe1dU51tiSZZWCV4Vg2kDxFFwdTCe3gMwuqZ1Q7b5rkzZu7xTC2jS1d6zANma8",
  "key16": "3QQnhc1mGxExhWfn7j8CTc64vq9TrttgR9WFaeq35mahcet33i2vrP29RLfhmuKJdgP4hhWCw2DayTp8r76x7LA6",
  "key17": "3UCdKaeXYmxqibt8QexX5och5mwNJiTq3BSeNUcsjxv9tLmA12aqJ1j4N9Nqmrc1Tnvym6c9wEwhfZ2Qqg7Jn7es",
  "key18": "2ZwUwCCnniqJsCfQRwYV4NH5y6W1cgt1FKx1gQHPtN9ozzoavPTCCdf1ToQWVtw1emVGrNAYwoFszmBiEL7kRipL",
  "key19": "2TCNavga9yyvSXNzYeC4e9JvXwDFL2yVKU1sPnEBAfiGH5QryhCNsniigo7XUvt2UMSRJXZANgrfedf94jpsgmsg",
  "key20": "224dZfPkPdPLDKRMjvLZjyXguM6YYuaYYVd9GfBSDKDZqGhgb9JXmB39SYsmHMaMydDAjPaiJbXmR94TkHiTd933",
  "key21": "2BS4tYuucXeEj3yg7oZdmyyyPFKDP5saS3QUpMHDb5H6vwuPZ9NME4Uiv34GhQLVCiqKR8oxsERv7jC6WrE4UGtq",
  "key22": "3SVnNKvZP7d3D6bfoZwuBexcSA3erg96GENEhR32hGSK9ffCRCstGahkHZ1W8z9Vf9E4wumCnvFTwdE9YZgJ54sp",
  "key23": "5HfDE3wGULoibgN3jkUhmXpEhcvY1ARyPw7QvsvaD2KVqxxy6GLssgtPgGYhM6Y21foAyZaAuRdMuwy5ZWoxVmxG",
  "key24": "4U1GJoQEecfjwqfhzFg4CebHApFyr4uMM1875yCDe2S8P8qidGWF1RHk5PQfMuwMXenuE8s8fVPKvPGCq4xfYYp6",
  "key25": "2YHp3E1SgHH49NfDkQ4Tivmy1MvVuWg5QeaaBj1PQypXMm1WTvNfAbCpXyvM4f9GdkAAieUExjC8VhzTCgvkqWik",
  "key26": "3oSj7LBT2m3jnzqk77N43a9Q5p4CyHqtTwTms3RJk2zUJT1S8CBSsxzXLrqTxrQTBwgEYGMhGEJHEGyYRzfD16Gu",
  "key27": "3WqMANhs2JPs6WMBTc8WDNCd5sYTcQ7PXz4Mx5ek33b25Wsz6mFyxnXAuXbbj3SHS3X1EAKBLxcMh5X9TiEJkHg",
  "key28": "3CbLZVHdgXB6BDGqvLKK6YM2quqhJ8moqFa5hKakGQPjnPcNMRHopFUTUxPDQb8tH9aMogoTLRxLK9Eajjk3H4V",
  "key29": "4LTjoRg4kz8kcqwF96UmM9upGXXpGqdp8cgsjPZtdbAxS98g8oVhDhP5vfqYW3YSULqBJWwE6zLWL9kSpLGh5P3e",
  "key30": "bxgnpEqDgJkbLbmhaLXxqpDThRj8gqVZ1HTVvpeAhtDphhUYUp7cm5tknkquXxf1n1JGnheruqTSzRPEjM9FMuc",
  "key31": "66CAynxFVPF4zTdVmmjgYKjvkcwkKzcMnaSK4FXJWGJZ9TT3gG4aCYqH6vVpjd1rDcGuTNjGuvjdEFq2rPdtBgWP",
  "key32": "5Nt8KoG6mv6gk49XBUGuCQmMZL7RYVNtBgVaPc6pXjj4KoD91bbdE3ZUb1TXu9yiZLES3GBJ8arJoaVfZKk6fqvj",
  "key33": "2zE1jXG51wHFJQfvfpWwdJVXU8nfNkbc6Y4jExAnq2Qh6UjpWn8u5LBDvJMFzmor6Nz6e2ZWhsxrb5QtC3j9U7qJ",
  "key34": "5AxtiDNiLDBWiqx2LCmCV7SBMn3QnFEnv4v1zy3ypR52cDj1fp3Kmk2v6K3r4LkH874jooU3zoEbbj9jjG5KuCm4",
  "key35": "44vu6wydZ7XXzGCXSmEC1EUQi7G5T94UUx5jtTx3J2SjvsAMwj9FNGpMjiqtRkvBvmJJoYyfeXWpFcEVdBcAvNSW",
  "key36": "2QQEk5RpnQFhAcoDyDteABN5yMphCLeUkpEZ1bD8MNRpLHrnr4avQ5Xn9LY8pMijFZFNMM4zEwN5WQuc1c4hb4UF",
  "key37": "4xDRK8pUA29AFJZbwM3dNS3BA1ykxocfiTqfkgJMYYhM86yfmNyZu6yiCCBnaoVssPaTZiKKmhtdrENKzpjPo4VP"
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
