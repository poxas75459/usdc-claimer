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
    "XVGKJ11cdHqmZonbT1vSQKuRUfNmw8YZsom4UD6G4SyhMuNT7DTkKHbUAGV8CjDjG7n127ucyx9jd7Dq4trsxvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KpQJ6P6HUZSzBexgsB5zGHbGVTyhckaizfsXvdPnXnviMMY9iRefxUzMnpqWRbpDrcYU8s8aLzhkd1kAn557GuN",
  "key1": "5h5KRHTrvLd6UATeVx5SAjeTsHFTSJ9FTtULNDXciGK3d9qSuxhnUEcwgqAAMWuCKUuZZ4iBHEwuggxcdgbfijhF",
  "key2": "27jvKxGRaZGAty6DSdzd2iSqqVvs5AKijdT1YuJSNgcnKLSobGQTSbxzFrncA5MJnKjdhWRoBX3b3Zh9WruH4nRk",
  "key3": "5XuffPJcgek1375wJaqasE387n4vxdGQzJee7tegZ7r8pouUqkgiyPNHajyTVcaRJVfkH9E9M3HkCpit2SWSV1A8",
  "key4": "67B8vdkTY5SK2ywFffzBiw7NgFWxJrru74gyC4UQesEQwPxtmh1RMb84qbA138p4cChpZUiEvSxukM9hsmL9SAYk",
  "key5": "4Z93LTRkiiphRzJpFV4R9TjJ89ARbgXfALLNdqfWiVGYYadhy6aFT1BiQ8jMPZyMpVZYvwv4dMfhdRDvRjrd6v8d",
  "key6": "5iQ3aS9xsHTLxJ6uNFh64wKpFPn2XcxFH8aBBVQErKgs1gqxEEghRpc7CETwTqs4h6VHxnyqhCMirwst8F4f8xPE",
  "key7": "2bGJoDaMWuR4zZrPZLmQcJNUBse2S6kbqXf9X41qXQiLXNjqS1FU3XxfS2nLKtUXKhvC2gnVVUBvaeugu8x3yEsK",
  "key8": "2vjShB2VKNDGXftp3F1CB6YyjLeyQxRUyt95H2CVBRbRJNQwN6JtPtQRrJa2q3NuEbPrUdfSyW3SBSJEV1ByPSyw",
  "key9": "2tgPbQ4DnPHTFqmnnL9jvTcX4hsgX8rLWmtReBYPRSnbdATkETUPmp7mJEnqrzQoiVyqaNa2np2JyCfNU6c1YLnJ",
  "key10": "3jS1M3Bwzggj7HiY68Sz3YsPbATgKECyc1KKzDz2PgZApomfYBEMo2n7EMvj1zbK12sSKwW1Y7rN2GU9G6pm6WzC",
  "key11": "4rggUrraAvgw4Z9V56W3Q14UoTiugBr1Z57pVwt9WaBVowDgesmkrjjWZzNjxr7fNYzTAoUev5AQxyZyA8NcZZ8X",
  "key12": "2murLHbneKKA2YxY5JvkHDFpLEdcs49EXs5gXHTQo7GdafYHDwpXhXmTVCck5CbeiqxKbz93hiV4bc2u3BZvm5xq",
  "key13": "5KST2a353uLg5rjz4R8tfbaqczGmZCBB3B2Ke3vYRV6UwwyDGnqqQ15i5hzKW3RYQti8ddRKEKQmhV4hUR1yQMkD",
  "key14": "2MJMJcZwfwNz2L2JwuZRHPUYhEoYkLRMUgCVtebPhpNgSfxNrHbaZ7A2pchqWqhv6dcX45yb7LW151sZ6K1q7QV4",
  "key15": "5UqsMVnpBjPKdrFQLeTc9TFEePbn6dZEaYXu5cDZiKou2wX5Zh76Yu1uGUrh4NcLeruKN1AJdDkkpH9Hp6s7xFCt",
  "key16": "24xfotjMwDVGWtHHGBKkiZ13SdH31jk4s8m518JJVNcvUgZU51VoqPsu5AXPWyudwUdNbzrCxXa37K2Y3CYb3oDo",
  "key17": "61DLVXKgXziSVNAgGDz23cSpVXZpKLMFXhLc6j7V1NzPvkgsBTwXDrBy8ExQUbpKKmz1CNYPSUfoVzwZnsSHa8Hv",
  "key18": "nhYZopcPHXmaHZV5bdFdjPNDmjn5ZjwXXb84m6D461p8vqYkjfUHw5GUKHXSyiDyKfN4CXZCbp82gWnSLJ4kywY",
  "key19": "2MN8DcZtT7AMS7hvPTk1uGAaFuaZmLpEF4PZLpHSCKLWvDPhjAbkRYdCxaL4nPRSwSgMz2djSs9k4MfaZJFisAXg",
  "key20": "4QEJj483zGFALF4BMtabyrEDSUEGTX9yZFLiFMX7VR2o94tDpjbmpoBBgCh67Fa8wjgixxJhLhAhdTjy1HuyTz3D",
  "key21": "3SYFyLqdocywjBMi4MFrBQ5GEQ53DNQjoVdW8mBGxFGxYpawsCHqUyh7xzbztUznUtHrnp7qLieiV4P2gBLkvjHY",
  "key22": "2Uu3HaCp2jHmcQ3NCWWw3YevEfMbke3RA9dM9mHThpupZrZxUi9DoDWgrSoXGf8RxmBaoLNkavoSWTHnzi1zTMuG",
  "key23": "2FZ7mtg1Kcv9CpNqm3aQDE8GdpTSscxwq41dG6fTJTBTSscSVxuT4s5Y19dZ3KxsYqvNsVCLsWK68a3iaUqqwx95",
  "key24": "4mxpHAnwcY8qGgTuiu1h8A9YP1CfUnzDSKjmnNBqg2EK2BFUEnNfFNndVQxBsaMmmy2Ews8P86Hu1HRWdFVfa3A",
  "key25": "39Yk5ZzsLbaWqdkFEgAmdDsz1pEFTezPPPT8xCiLj2N29A2YzTTNy8Ame5cWtmYDEARpkzc6kmmewZT3ComFjoL1",
  "key26": "3Kjymr9syBws4jKK2ELxjfrcUw2wqcxgJBjxs4TMGAs8UwBRvxNiL9JcGcwxPFLofAf49Sh4gAiwnbp2n4cZmJj4",
  "key27": "5uWUXiGA2fKq5QhAfoyRsuVHvZ255aW4hiQ2YLSvdoDAMEhEZkDCVRX2iRDoiNBKvJjR38mxboT7zYYvaHEnJbE1",
  "key28": "3Y1QupvwWkbJ178TnSat3MvXzzwXTJbVzW9amcgzhyoAWLSoaZQnqn7Ft5ER4wji3cEur9FyBfsTSrv9YVGh9Xnp",
  "key29": "52Gmzgt5iwq81N6tciArAFdXDhkrN1Up6CTue76uMNkd3rp3ZYYUJu4EanYAEEkVwaAo5Ct9FjDiKDGxXecLdkhX",
  "key30": "2tbjBYAv3wCDZt8nHVafBWqxZdFzHA6AaNtRRjiRpP4u6FzBqF3PD3kqTuR7goxK6LiHEx4fryAe4iCWLbmJBtdf",
  "key31": "2nogJkReT3vmEJLSDn7fjPe2xJouxUmksiDwkFfc8poB8KcLbqqEpePa8GgF5byFbB3sZnCi7LBV5W9QCjEJKWHx",
  "key32": "21qNkzgd6c1cLrs6f2C3MCEveBCUT51h2ajveJj4zD9saBNU3wmvrSeWVmPa5AKVtw3UNoLKKfp8hQxhwGjkypaZ",
  "key33": "ZvXM8VsngvWqz4WA1Wf9mUhm3A2vKqmDmSk6oyJJYXFj8qiFC63FLJ2qoCdSqLqu4Lh4hHDiMWqboSXXYFAzLwu"
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
