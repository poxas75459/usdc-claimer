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
    "4AehiJUt3SVSKkRTjACEB1Rau9Ey9nHw7nBASza8KP867RQ4VW8kzs5jpYiaCkJHb1s82Z1DBG5xixRWMTc94se4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YJHfLgpHMJqCWcU1WtBJ6rFDy9DPKnRp8j11szfcsh1kXhak53AQkCL4vkv919o5erMpkJYGNuUZ9i9CMeKxFQV",
  "key1": "42VMkvH7ay6C73KcjXmhKk5dDxWrfibC5WiMiaLMcn5yCPxfb5LxCgTPKw7EGALzDNAWtsdd1kztHCRgz6G3T7Eq",
  "key2": "wnkEYEpzLnkLsfErULP4X4RK19RxMAFYQEcuoJz8jrWXLjgu2NR2im7asQxy21Mc7zw7CA9sDKV8q8zNFW8x8jv",
  "key3": "5osYNh12cPZYfJXVvRwdRhTTwcGcidXjCfftDrASnBsxtFK79kkF3Lhg9awsJ3EPpRAERBFDCV5q3zEapCbEU2AT",
  "key4": "xGGFd2TEHg4Zd8yT7BKujGwRqLW2NZvMDbWzgq72DkjwoaHKS2yhzdYjW1MSVrzPZFuM1REW3moG3H9F5YK1Byo",
  "key5": "3stox7yxSFv76goBjeP2ASPg71MVskjBEgNqycTSpS8FBX8cCcS9WYM7PvUerQxmenneveFoLW2xT76CvCkhJKzr",
  "key6": "3RgYZ8iA2tKArQ6mfBi3wqq55C1eRAvu4rBDSCXVeC64BpqkEZaZQVjHCqLQ2FvVHKAcyTRiuYGrC3s9zjRiKise",
  "key7": "3j4rwyQ9PyUVH3w7hFGpFf4KLPpcnUoMv9mTS84e3T9M3yZzwuDSPw4EioK3Xb6qwNai3VwkqdM5dtUQCib6f5c7",
  "key8": "5hxh19vRcJcd2ZudhdxtahsxGxnbaC9TXfPbbzC2kMAnkxepZUNxaN66x4trdNaHUubzGArYAEXGMcLp5QsH13aj",
  "key9": "jx5AFzYh3rki3KiEfm5fiDhSJfP3oQwptnyizMxEdMuVrZTd5jtwEDJgPPBcDacUnW5euTRyHi2UZAbZ6KZG5yK",
  "key10": "3xd4VCKNuvh71afgzn79UEg1HGVvfVaLJvQFwYvg4JmKMkFVvTWpmYeZDbcmdEk4GKsxbs16HcLjGbLTUufLB1YC",
  "key11": "475XBM9t3RypdxJikYinKFWfFc7TNqTAH9wP2PMWfJu4iYakvCoD4eZ1zwdEHx1BznncLjnAeRmvxdKpGrLhS89h",
  "key12": "2fAJ4nLLk77F2wCABqwHWtBLJyJN5jmVhtYX87sY9dQy9mfWeCy6sPo2Y8JMJd38iWQfLFneS7And1k2Tz2yQVse",
  "key13": "3FBMRaBxEjDDWRMjY2DHj9mxbBhs9BgzsC7iiNPtZq5s9ge7ruEfgk5evQtZVf7Tcw6xJYhBN8UjoYdwa2U4BuDR",
  "key14": "46A3svbXD9HJ4D4kn4AM55wBUsrs4rsYgWYofShxynS1YvY2KgPCDZNfc3jmYRw2o8dDsQumX6iTye91f387eQi",
  "key15": "438tF5QNkgTHGv5E88qoNBxbwyz9UAfHXLAUdsxyR7w3qKMvZnaRsDbV4sRCZozZD3bNVsFyjY4mXcjnF2Au3pae",
  "key16": "3rQ62fvhRDF9z8z4vB5Zck6VGN9iwfSvzRH76thih7WgMhVSk8GEgiMtjEiPBQZFzgGVUccA5CzB9HbkT1p9n2zb",
  "key17": "3Tf3oBAt8mdT92xbfdGL7dWjQw28ykPKUMGdSHXqULdPoGtWNNDYxCwAJTkVzv7Ujo15h5B36FgYUraiBBhSU3Mt",
  "key18": "5Zy7s8T6TMKMG7QPV8pcgHC53Eiusbzz1a3NZdzcRBV95St6ULtafAQteQBxvXJNyTSfFbWf2Y8VcWnxn48cQkuu",
  "key19": "zjqAJpjV6BRvFNPRBDGJ2EUj49fg5t1MQkjY48U8WZC8EW2jN4TcskfrYNBHoiHUzXe7cdqbMxvCLvnSYxdzdEd",
  "key20": "5txsWZLRZewLpnsMb2gbLPwXhGPnUKH426rUKTm9JFWBR63Fxo2i1eiot638XSBQzJLUtph8NKbVdG7YDXkMmHQz",
  "key21": "2xDtnkJdwjJ2x3hAm64Tayeo34yFay4HScz75ynqY3qCFru5WwP6sJ6zpJztC31hbkGCxreenYkcp7b8H16mhpM2",
  "key22": "5uhhWHWL7K4a345Fu4v5dpZbL18zvCoY9Jo3SQA8ZbRT27kwFXoQxio6dgdTrYe45YRXmY6WPHrBoxUP5Nc5mMMo",
  "key23": "AUefDMtDZ2637d5vjsxkmdpnpt9Kg1TgePNMQHeGd6kQ41a343aerHc2pNfTfsavrK83DXpeNPWc4tfMYQeRSDL",
  "key24": "2aHT42qS61vMNJX4gW44uf38SxtnKvbvdanycCdExLKo7yQMJRMGvwGEgWrfKeUARJRpEg8b6fdsdDafuB5f4Q7u"
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
