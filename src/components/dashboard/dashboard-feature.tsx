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
    "2WsSriJYacHZiyfWLVYitrCmXA1qRqKm135hbwy8ZuLMCooKAA8vPJq4raoNyhcRyEKxU4g8ZwSs6sgKwNoJy54P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QV2vDncSx2iPFVCbfNSjD3J5yHfE6U412iRk1pFpb8tYDPRYJCAehco9ZBCeMXNszE2YQy3gpueZgWFdAuMwMaF",
  "key1": "nRxyMZSV3M7eM2s6CAB7mkhVQZv1o8YmhV8jCaftA2bUH7TrJLDWLH1V2vHtP2ia6ktbRTx7358iNb66vadHtPa",
  "key2": "2cJtqRXn5RdCeZ8iuH9FaJqP6Gn8CervLkaN7nevF8mnjH7W8E9t3ALvN2sLeWkCwN3iqqgt3EShkeVHWtgQqz9n",
  "key3": "2uRqvgGNAd8UPS4hvxcnLLiMRWDZM9EVDcuGAvFjBrgxXZnkFzYXgXukT2AfpgTG5LDMqGj4unqCUyiU9zdYTkwX",
  "key4": "5NZQKAtf9k6PRGNCYjSyMVKquXzpvPgDzn68cDK2tjqBzKB1f6iEyf5dnaN6pKPnCSXbKMuYijuB9s3SGwuMVEbJ",
  "key5": "RKCwX6wdS7beLXWXrndvmeBXeRa4SgrHe1GkCr9wGsr8NDa2JYTz1pvhQ5MLkq9d9PakhakcxNtUS3EeFT6Xau5",
  "key6": "3dmDjkz8XEQAy799eE8NJKy93CDNj6pfF3kVEn8mq79wxomypDL4ySJAMuuCjxXV5J2tCaVHxiAJFNDV1Yhqkc16",
  "key7": "4qwMuDjbHZo36GJCcEs2tskeQMcg5r7zea2Sujgw2S28TMCG9D7zD8KtT982VHK8zE4VrTshmGvRcqEASZyJ1cSe",
  "key8": "NbtnqXf2pM2dMzMcmNK9ZAgH6fvTg9uGk4B7AAgeEBMZxTEBD8G3zNkuG5jAyQDzyAYszXBmT1XyvhWQ8U6TWAH",
  "key9": "46nUUKX38KDSoFxTLGsZDNpVYtBJo7ai2HGExZrsATaknDinJVrNGMd668dagwB2e7FWEQDwLRvcnbd1zKg4Z9m1",
  "key10": "4Nhi9MrnyYdiXa7DJoobrFvYHkAMKyYHDGtBxdEsXCoQ5wmvAsQjmvMSHr1pZaWLktaVn1qmbCtX5BwaTAktJpQj",
  "key11": "2pJ2JMbByruxqcv2fYVnmGqg93sPKxeAt9vMp916JmoJoCnjCYYDEYK4zjeZPmK9UpJLzzLDxvqJ1YsUt8NqiWBD",
  "key12": "5XdBTYWYK8RCJyA135w2QufwZGRAvuNHus3Cw8WdXgpxM3vP5VtiqPpuSyLXcvjSRT2WMD8tGEn1pkampAkLHGoZ",
  "key13": "3wgvY5DRFQR2A2WzFG1BFyUa2eZ4E7MrdnuGFVgDLG8fUQvV7LRozTRVQxdZufbciZsypuHDV1rirKAfkGzyRh9v",
  "key14": "2CW9rXMoCXeUJT3Pv9G6KZ2Piq7G4qnh2Finf1NMS9kxJqXZ2jFoZ29ZzSaXvjx1HEKVrRUjy6brNsbBTPiURHp",
  "key15": "5Q497RSjKdxNSksb2aG5dj8qRh1qpaoNiryQratUoRgNcjdceRCVhh33A8zcvTnJ9mUcR3bi5n3RQEuY8Qs58V6L",
  "key16": "33SJSXg9NpiUzRcKqVS3HUMAGk6cvBos4iYEEsvXY8kUW3kVXQRtPBT7QzM5MJ6wxXpCo3RLRMFmniXFHWj77ZdG",
  "key17": "4nNa8dhcnKGvnAgzfH9seFxt74zPfBJFZHWnABSaoXAnrVstE6aS2h2SEe3659FBf8oq9dRfVYtA9pnvN4Ls2U6W",
  "key18": "Zbyg7pJrCcUWaMw5YAdULJhZCyMfq3ag5V23rnLtDD4yUFq8zxgpH33BPwZTFzpZc9rfdqMr2Jz349r9NVRMVhU",
  "key19": "3BKWXh3Pcx4yk9o3B4AVUF2WmP2XCHzobUDAJdbgPszmCe5YUaQP3zWTKLaFhERkuCD2mnS9t5oebXpVfuVHFoq3",
  "key20": "jB3V7g1bLiVrrnYZW2iiHMJQHdHLwD9pewUhTeWfPGbSENWgjyaqW9ZMhEm6PqER5E2s9SFdssfHqsG7FPyXxij",
  "key21": "358e24cEEb3krSBxAA3mqxVKXUzwDDit5Pv7imcnVmaUsgF6D2kgyYv1fjeZTYvSCN8ytJTviZHsADUV7WN4Rkis",
  "key22": "5cLS9N2fDfyNiTswHG16MKcpERVF2Us6uDEKSa8CmmMHKk1YgBo3yhgGcTsoy1PoBwBf6U5scBWHHju1r8C8Y8Se",
  "key23": "3vkWHMvKTW2Yn4LnQxoZFxtukgCR9jiDYgBCRA4HUcA9g2HdYd7tjmRRhwLHqxVJsfHNYfkm4LQvohtpErfhmjF7",
  "key24": "3FUFiPFduMPMtUt5uXYpmJr9gfBTwmbH8Md1SFMWRxjWmJGb8bFx2ownDxgz5TiwXGHYRacyME46xNY74AT7Fh7T",
  "key25": "5GFfGnAvgE9PDQ6dHs3jYuSRK6yKbvwVd9n9i4KTMGujZEDPQZJZCJotwvFigbW5ppD4c4noCZXnxjQ1fQX1DKuk",
  "key26": "XRU4Vt5KzVum7RBjXisfRY7CXZ2qnhEpQZoJsCuWXTyo41dts3nknhrSMT3EC7uhH8bNbwKyVmofdW2ARwgf29W",
  "key27": "5r86n3yAx4n3Be5usV1pJyjg6qBRy3uEuecVExMrnNa23Yocmcw5UNjrUYAx1dDgGRaWFFfue8HReCZ2q9ugn8gQ",
  "key28": "2FU2Vga6LpjL3gYC8yVkX8eEfqu2A1HaoXeFVDPgk2DKGqdPEPqeyN8iinwr1BFgLq1iqoxwucbUYXVSXukn5AZA",
  "key29": "5viwZamC897jPrDBYknwA7irCrNFYRa9QXeyXS5gdhgn8ZyQtXLAKw9w2Qp5xqp3dS6gReSBq41PrfViRtcxpkx3",
  "key30": "3HSMQBftrWZvfV6YTb4gngpkJx9Zjz7ZVFDeZx9Dxupv5AUhX3vbJWf39iUAiKEKxidT6ZfNXZ8FLsXFrXbYzkPh",
  "key31": "2AH1Asa22dVAPoH4wBFVnDSPjozdFe3kmrTHkPFNx1tHkYiktZD3ysSdEgtHAc8iJJWhLPbpM7r3GXXa5hzugqFH",
  "key32": "24aLpXbSdaz4V3zsbsLsoeH5rmkrEsEAjrwXzfkLmctWpBCkp1q7q9YHRLBG9hbgpp2wgUcWGMtdJAMQu4VSkmNR",
  "key33": "zi1UXcgK8Q47wYNU4Q9cE4U9sSEVArHXtdKm8xwNxxoDQzrWARtpPhVoVX7GKJwWmF6x8Wf2VByGiahcE9a8FTX",
  "key34": "31otC52hiGuodQwZXZH1Ebn51hLG7dUU1LsCMfbpkf2V9MVjCNbqgGAsZUdx4nFUJstP4iwfyM7wxG6wivBG3PTo",
  "key35": "52rfWqzASf3PdsVMjgWikXQmyYicfAdSqYCfmoBt9axoVP3ioFYfiRZPq6JaP11jsX7xvuXituBJnUj8AMsj84Ku",
  "key36": "3uu6iQs9KxtPtyynfFREekX1cLSUGZKM2AaMEgWr1EKShy6cvHxoEyLQieW7M7Z3nEPJbum9xvDARLSS1CsspzCi",
  "key37": "3uikVwQFLeWoQAiyK5kq3H2icmFu1e5sa2o8MLoKr5HCNgs5NGWxn9gBfC3NfF5iqhWMJ4FjsPVhHuWfCwHWQRmB",
  "key38": "49WDxygAUTNnxQPrDJQ1H2oAwEXd3RdyGLt48UwgD2HaXGuA4bLzxazGfppAn3jfV3ppemZ79CFJ3ippzmH8T6q1",
  "key39": "5XPowYgK5x6FEiWrp8HBnyk871YkzaNibsF1Wse2ypKjVp39FaUWzpSgNhxGRiP6n2hrkiRXSKinL9T4niXwXkrE",
  "key40": "K3tM8eqbtPBYp1BZeemWCHQRPn6ztUxfwtJEJfEH9euuwqBuEna8TADUmwVqGA7LjqRtd4gakMjsGtaYbhdLqfN"
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
