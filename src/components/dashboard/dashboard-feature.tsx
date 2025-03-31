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
    "4zKXqMRv2ksNWaFsnCfagr2LRkjmgW2rP14zT1wfmEy5kUXzQry7Xy6N97N6dK4pACr3MzCsZ1DvV57Xvid4fioL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38dZ6Eh5oLgz8BLEupTP4HQCNSRLwAxHBuxet866A1MurQXoyfsCgSvGRnrvwprKyjZjV9ssjEMDQdBRchUV2Z2j",
  "key1": "61ocprpXQYcVHtasxNKwiMPZmEhKBQBxGvSfv6YLfL57eCD771onZKJKGiurR6zr7g31ncuRZBNUHkrWandnEuhb",
  "key2": "SWer7rWioALSbzbdEdw79tby3eNos4zDzg7jFiRxroU3tN6S5b7ziMYcWQTQFR5DKvm9Yv62B2YGdW3rYUPqFwZ",
  "key3": "siLWHudhzQrwkf1GtW6mE5Q4HAW2gTbeMrTdpuvWYiFRozPxGgca1eE2dShdqQesScabV5vaw2vth5udHKqZooW",
  "key4": "5GDrLUsFE3bYo8qEE1kL6nQ9SQnrtbQFQSzMP4ABipp2MKr4er3cmkHGnm8WvShcrQF1XnWSKaw2f5gYu2NrYLV9",
  "key5": "3CRk1Q4b5966EQnaNnHKEMSUke9KKk8oV6BbRmdxcP4hi7AbTM4hmUgm4NZDZfPKG4ctA6Gu52CzsYZfP7ec9Sgm",
  "key6": "8DBFnRPtfFFoUy3qcAs1AVacbFzqQwLZEAWUU658Tma3YVUFcVRzs1i2n6qa5RMansrLjK2HcqVmFTBAC6UqBHk",
  "key7": "mLuTRqpukLaXowTSRwhSo45sZvhjM5Hd62NdTDnBi9ZemwEUUdcs8GtMUfSTZTK6Y5QK4KHKqb7w1wK5QtmN4N6",
  "key8": "4axBV5p9J3ZCSMFsyj4nwdEJ7sfjfeAPxktfhCeZTsWzwgAAxGGmfpyTKSpKCYBng885eCBjxrbUe66hdjn2nthY",
  "key9": "5W7ehydbJkW5Xd6fTWRJNzDNmjmuE5sSe3H4nDHbowX2qEYLYiZxy3Wh2SbsmE1xbPVhgtWwAeqPYwi6NdUM4bm5",
  "key10": "T35bggUaf97mqPT3c7eUkqJjfp2Rtq2TU5nc9PKdUsKaSM64VGPdUPsknCq3AtBCHBL3QxAVdqgPmsxCRoFYZ7s",
  "key11": "3naRGtKZQnG7D5e9USN4RErNmcNXiJQ9tiULtH3fUd2EWurLCArAzxYGBYjSfRkQpFu5fPWszNezXW65s49Hi9fW",
  "key12": "4VAx4yVmAS3GK16q4Cnax89kYrqtBaeo6PMVLvfVTwV1sHK4gGp8534YxmSrDgcEvM9LtgUU2gUZZh6UVMaQ7dD1",
  "key13": "3Xpas4dc767H1ZsXhsninsR39LWAoHtZw91BP8KcC44dtokvDL5zgiiLyg2F2egHS2K1p1FVuMSZrNTWBzdfetfP",
  "key14": "3DxmG5Cv6JmAsBD8KTMvyUdMbkLrstRsnz7nC1pz5puRtUzscpaLzcvWk8sqkhuhvaqYhrtkXv9C6sz5ugKPdq18",
  "key15": "5FAdhF1YvNghzAgPLaXdsLL6yRk9d76CgiQBiFGuTfPLQ1jE97UDBRWJnAEtZ1GbKzq45yjoBiCK2m3NeCizbQfY",
  "key16": "3SAdDWU6AUUB9Y76wZpQh69KEHg5EazD4E2bXWunkwearjL5JBvCVF5M4ZwnsdGjsWBzg6VVpHVpsChXpekkz1kE",
  "key17": "3mstNBzBwdXx5vLJktPGKJ51GHUAEAF24kQ4WfptWYrGx4urETBGVgyScyQQnMvdAtBkn7qEJvV8UBTVZGs7e6Yq",
  "key18": "2WkT5m4YRSQkKLQGydMb7n1LPk4kVncu2WaQRUVKhkxVK9gan3Ho8zgG1GgXpzDHxNKvEcqRKx3TAdSS8MwXJEpV",
  "key19": "4yewhtaw3k6Jd9Wh638YcEWyKns65F6w7srgrGpXQ7RGhYBb8yLpHx78Rk5nHSQ2BVSjBt9J9Zk4LpkanMSradMx",
  "key20": "4uBpab57vA5hN3xrUjv16uibf7qVoYcr7KSPpz4GRPuAs8TgsmnZmTHiVZv9khXb24msixgzovSaLt3LHBZCpRih",
  "key21": "39FUE8zAoukS8VW2o5HuNWtFrv1Cmj4GjTFouLGH834fDViEcXjN6MrMc2hadh5fJbQev72PE1XQUfXKMyQNMmom",
  "key22": "4T77NMHK6m79T7URaw4i3zr5cG3of79yLPuSSE8pB68zUMfedTBhHAhH8szEj9QTijfeKpQVuj8A2ibyUxHLs4Am",
  "key23": "2T7wZNqkNcLRYrYTEE2jyVFoMoPBxxNgeqALbjSNGDdorVyVSrdHTryL9hBmGBjJAqi6szvEx6u4obULGD9rP3Q6",
  "key24": "46NcCWZsGpax4AXH4EXCUbQ3PaCH4iT4WZJcwPM5AWGo1nU9B253KLH6b6axq6Zmj3BaWBES4Q8QJPGxpekYxkxA",
  "key25": "3ogW6AQZmYM39PDEh8E6szELjhnQZDe4Y3peNGmie1RcZSrLUVhS653MR2apQ9R5bu7pPRL3rnY5hcaWCwqxH9BC",
  "key26": "483WGnU9BskFTpax5i9H1pscNTLBvH75BYLbVDHp1uGMkdzutj2GSeRykcX1t6zJzcXzneqxoEYRJwoxXny7cP68",
  "key27": "QgkjvXJKTdQGcHAdE4cT65LFxZFXG2gWuvBBTgBuMKNT9gbd81Wh4P3QHYSLq1VR84YMAZBWB57WgFXwCbYTpNc",
  "key28": "2JpX4HRXPh5KR188fMFCKFDs5es1inej4GzFYSZQPbbKubE5TWQUg6LCkcuikjaBfb53WrcxYxSjHtQSLCuikSsd",
  "key29": "5RBCcpVjwHLj6WrBh9K3X6HJ7tag7k8JfK2rPiyoq6RsM1Z5WQhutxpCPuWJEcpc4kytwhBZiswVTTB43jgbXALm",
  "key30": "4dxj3HoArgmaMHgTtJ9Fi8z26Uq1n7h7mtomzNJMYMAgLn713S6d2juiM14tjGKjRFFcnQmuhzML2e5xCWTK17y4",
  "key31": "3H9vsVg2ECZEhUMsvyfPTgG8wox2GNCHbhjE24EcE3P9AmwUgE24K5x2bo7zXLzTUnFBSe338UdD4DYeScyV3xNy",
  "key32": "5g2uBwf3FeLFmQhiVWpSdWTMfKhWxpCA7vwJtsct1GUqnwT4ME5opKcq4hZL6ivSJf5a3d442MSPcFM4yEPPTJFi"
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
