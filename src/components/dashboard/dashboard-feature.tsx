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
    "3u7CYd4Mkh2TY5Lekpjh2HgRiX6RN1uoDcMeA73pmVqaCznLLRYJXGHCLhrHqLuJyyC6fh3rq8owoMmGf4J1mPeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jc45CUyuSwqdTxSwg8tJyookJuRboFwXCnwFzjPR7dWt3i1LfqD7Vbcc2EyQr92LUNJdPbc5czZNzMEPeKat57p",
  "key1": "2cq1K3rGMGMp8JJPqAcUnH82sq19YuhXK7u2j2yhqK5Wtb1URSxVmJBF3827m4fjrV7jfPLSih4kSHRaANiMnA2e",
  "key2": "3Hxtcss1VExcCicGeR5wes5fZ9DG3D9jXexfSp9f22ycwKJZe1tzdhvjJuugo4UVvN7SSz8UJCmh3o3GSEmycoLR",
  "key3": "2xsB6xpUnwF48YwfnFNr9Bq7Cy6q3gnqcwjfjKdbadW8YV9FJ9c2LB1uaFS1s8V7tGuTNpf2ndtc3t4VXaGiZRK4",
  "key4": "3tG9bNLf4dwpX1xVVSxnULCqFwrhC2eJ2jtDWxgmV8yR4ATkv2TGjkY5cr47E3PuoGyHFBQzSeLPk68A3JWtc2Nx",
  "key5": "4L45PDkCTgLqYjcZXvkqAHW2WQRmgP9hcRRUuhBs4NWCdDsBYS3uVbA5Fm16ZgoosvWx4oCjWrfyM1fo3SwiFjaE",
  "key6": "2uYGq7X8x9Afkv1cnXGL9XUYkZAxqku6dfy7b6HLGsYJvA3NWcZAKq5yQ4xMerJ5XeFoayeJdfT8eY2A2cpdmNpE",
  "key7": "2g356ziFZyx48tbFJr5PC18U91WpbAd4zZKYGVXm5hXXBdxxtwLeMSMTeL7rkHQtPCnQ8X3FdcjZj3PX7Q3Nqiw1",
  "key8": "5AuGLYiS2WFB3mYFXG3Qg6B7yFnkqyRqh2QyjxxSoxi74aKfbJ6yHDY8zwfJqBuFyC7ZtHh2f5mjNEfKdVfmjoW5",
  "key9": "5w129zYVnm4uaF4xp9mcA3LW1m2cVsfZc3vMYvK9zoaFuH7Gi5mAdip4LSShkX1ySEikBuoUpEuvsjw7FQFqshMh",
  "key10": "2QQ5KDYGHf8mRpruZnKPokxag5Lr85nCHnm7hVRuR7qYAvaTeA1MksShZoDqKroqz2HGzewwVv3J4Xk8LPhA1MGW",
  "key11": "23n7S1TtshDfwRPFG21byi5vErNrRpAihengiCwDmFyqERLdi4sZf97oCppiNXumqP64HhKZA12m2y1YBQmhqVWU",
  "key12": "4FgS7MD3NojLssQeCo8g9YL3x8E8sLhEHJ97G4unCFNu4j4HmQmwV5ofN3Rzt9ZfaGqpqyRCXrPBTQ8aKUrGrdvV",
  "key13": "589YTmmG6PkRFJwFGdws2BBFZUDdhXFJrfFgju1sJspuYHxrrwzC6KRLoVcUrZtpzbXvZMkZ4rMqAP3XAjPtYpH3",
  "key14": "2p3qXnYZYucixHjyA3UpX1yt4b7JvT9w2TVmSWnsntpMhYJTULvA7ZXVrDMZ1nDxqfzc2FQx5BJpohNfaE1sZr97",
  "key15": "T8kbkiBGxTUMkRfP3HUpPmuSYLfGEj2Frrqke5ACCtfMX8yZwno2gFQPqPqRYbqTY67zR89VGkpGnfm8BfcEC17",
  "key16": "5xRxMK3HMGRbonUuKVXFfdDdCxmUr3rNsNzt8PwKSYzFYeB852pcNW9WSrD4cJSVbN1jLsVn4tDMwyzGUoCzxyMi",
  "key17": "2QkC1YeYPbaCp6w3q5TsRhCvhGCTALizFPrhrPpyftL9GYfQDWHh1tQkR1Wo4wQ89Scrf4U8SJt1rQXPLRwXTxjL",
  "key18": "EuyHXgRmsuw6DSuiaw6aEx7Z95mPQkJBZM9kARjusjNVvNQ5agndv44WrQhmr7KGK8WzpjPW3unzYPFzBUhHwfW",
  "key19": "4Q9TiKxz2VMb56STM4QbHqk6KUxdbzY7piDtYEFojxPrMrB4vSZhtq7sv3FatxbHHi1T15xAeDjAZ331piodnCTz",
  "key20": "4gmhjtpcLRRYsS1qeEM6EbH3D2HKsW2DQVHTfZ9oe6YUiLr8QXZ7e5FokNrRA3kyFTMHe3rn39DRPjh7VN4eJKrb",
  "key21": "5mSehhg3L3ZkcmF8G3WkWjQnABpMzn2ob9pS2vJmG9Mbwahw9rpfrNx32fuw5vF6VBYgn2ntbmebxR9Fgj5DkHka",
  "key22": "54jqYzgh8R3VRR1uU5KApjCaRU7Gi6NJaFn67TayuQwhhnLc9mBbUhjtMWRpATeHttwQsDuPiFXbe4ywmRpSc334",
  "key23": "72fWE9fTDT1F9eQkpDQ21jdVEj4KzeduM34TdJqSTjEgZhEwoo1hBTDf9vh4LXxqqxKm17VRc12jMxw7n8ndraj",
  "key24": "32VFQjnRXygTaZMBfiMmiSijsaZX9HkrQQBWLVbbWfUGvCCwBjyxjDDhTChg2rFc4PzL9DdHof6FZ7qPW9wQ1oKd",
  "key25": "3eS6CLtrALtMvRU8FZNwfuS5hX7D97RAYnjRqz6DYw4tYf9Tm5nA1kW5QL7Xy1tuaCQykVLy32RnJ4Uy4HZxgzoF"
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
