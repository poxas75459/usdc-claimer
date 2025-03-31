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
    "NNXUrW651v7HGM63HUD9okrDdEbjFh5o3S6vRVQjx9vdVCBUgkrdCdtoXesHGjNgnjRcr33UasM5YZzeb7X2SaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sMiWzYTADpWXz6TBfYG4knXEX422S49EKXpsYoeHGLJ7otrYSqhqwyMbaXNmpbyyJ2WRWcXFcvUFaZSRyWLprXt",
  "key1": "o18we4WvNkQf45xXd9YJ2dPYFmuR89vyYnfexCCcxbcn4zTy6uTC9p66rPgjYUmN2Uxc5DDusEhjoKRpj2H6pPM",
  "key2": "2s7gfMP3471ot5EdYCsvxduGJEjfkhygeGMX8AwByNZA5qyFrek7pqxnDdaJ6yMVT9WfvWLwcydrXrg3gJZX7um",
  "key3": "VnT8mb9oeZtYKNRCNzE99qD9snYsxNWJBySEhkzmXE4rZVHkwkBsm8KHxhtB4Vv55z3mA5KotkM17xB9V25rmvw",
  "key4": "29PnGwYYUH2C2RMPfWkBWmFKP3ViQSRkaSbKEeYPs2UG8prztF21a1bsY1UENQQj5A9TPLzBnz1kV7EAQNLxLuxX",
  "key5": "3aKJAwKTBjQJ4QUiXgzhkD2ygq3NHJoViAatsjTGNsKfTw8f9TxUzF4DubKUB75zoRnd4oaFAw1gJSTbRKwf9wj7",
  "key6": "2odX4B2VchLdFZ1hcAnBxx8kyD9Twc5Wg1acHXTtrPmP8B5HwEtJgEUp5T7Jv1PqdWoNiH2ZRW8PsfZbbq9YN1xS",
  "key7": "4Zkeiq4DYo7noeNRY5WpN8eNvjunbEJEcjBaQj9r36x26PQ2TRdgso7WK8sBjz22H14FYvAro5NYMVCLTWS1psTp",
  "key8": "2JFjghDAko6LWrZXVHfkiyMgLAjEpKhWb4o7PsBPmHzk6acsBnwAcK3aVJx2AAxRuvjxq78CbwPafdSH22zG3UGo",
  "key9": "2TndA8Qtyd5DBcwaBzcZkZX4PDQLzCyyLJpushS4mMdudq1dq56kG3mBdj7XFdBPQhsXWj2R9b6SCzuBQa2tryxx",
  "key10": "2hCmW9eNWqMaF7rYMXLho5qxhSXbEf7f6SjuYUTuRDjoBpnMrdTitQ7Mer12zDjxMTHof6Ckbk5wUnYq4DPUzDgu",
  "key11": "5RM9yjRxTKNYF1L9yyexxDY5nvvoyePSBg95TZi3EfM7xQcfaHfpHjA3Bb44z8KWf8mEnfPEFDXMqB23mk56eSu8",
  "key12": "3eeAFRAzKpdT8m8QpgDmpGdazS9f1QaP7TcP1NYU6vX4Yf7Zmm53zoh5pGwNGq1TZsKxKJ49WP7F3isfS9ZVqe58",
  "key13": "39Mvw6KDNCXTxm6UBc1SkmFgZsfGKZZv9JntXCEr6D4TKezQNPbwstJKS8h4Dqndx6WJ7BuikbFTtVCw4MZQyVcZ",
  "key14": "5x7hfQbH8kDqDPhrLQxkrpsMjHdCXzegt2GL3qrGH8VyrpsJtLUfUqEtiNxPz5woU6VPN298oeq32cJkvTqn774Z",
  "key15": "4M3iHEenSz3MxbYrFwkcjKHR7XFwMqB4Ye4kBqEP2MXoFSVf7EsGEmUeuPSiMepi31Y5VjgviDoGnM4e2PA5cHBz",
  "key16": "ugWTNge8EWAqiGubuAKnib7JjJJw55kukhyDaumrSAuEE1vVhnapiw452hyeUjTanxKdSUx1qYAHYYtEDcep12T",
  "key17": "4ZkHfet9qrqxUhAwMafPg7HAFdfk2uirzDyTsfkfEpzLkVDitxkqSGG66XeGR7UrVNTjiEo6uienxtg2F9z5TjW",
  "key18": "3WxGAWhJ8j8fFngy59LSXKeCYuTqEYKasbBfpQnDSD1vYVqkSZM9RQU31BMpUtcBDkMC6QdMddo7FrSWbmNBGfMk",
  "key19": "2TV6tnUj6Mu1bBztLwHqDFG8ebqCC4KraqH62WoxHUqgPU73iaJKNQGayW3SZZeYPnhDhJRujWMXJbuumKVtLbPv",
  "key20": "2TH6mwBeskfoJqvT45o3jVovH9nJrVi81MCgCWXqeorBkzsS3wEzgD6LdQVKxdhR5PCq61PjoYCahWYyVX8jNkZB",
  "key21": "Vao21G7rSVyFN1rUpj6YeYcLEwnwqutXaRKMAudSi9apzdBsoswkyzeBoP9FDGxxdurmnnsQBb5CNojTdsbMGVR",
  "key22": "PAF6tfEUXKvDdxeJfXo8iWczSdW3necGih8qfjkoPLDPchXWDAvcZqCqU3Xq3eRi4RtMUrXdGWaTXKWiosVLQcq",
  "key23": "5AEGLsDgaRJRJ61DuNafjMBZbzixiqe1Dgfz2kPWQjXoUBWmi3PnHyVSfannfeM5wk4qg7hqd9SJAzHDfCKDed2S",
  "key24": "25QMyJshBYqAUbHjC7HqMU5BQjDzvteKwmskxKGPeBZVS9kdNh2BNd5aXpUFcYjhrhmrhN7sbQhnbtyZrwQtRWTZ",
  "key25": "4hV5vZTEEWoZNMCiw3VdNtjnbHPaK6aj9Jra9V61L1vBZ71cxiw8WwvQuqJpuMFUHurskmFaFtS968WV8YMMxwGF",
  "key26": "3953AxkPi3YziX3FyGGCPm6aCnDCFZGz8CXAeikAwckDTUVCoQeUbrwDWCJG21NnvTVQXvYJD7bXeCki2mCRZMVb"
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
