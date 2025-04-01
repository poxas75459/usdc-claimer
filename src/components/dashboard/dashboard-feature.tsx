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
    "oRVPd3LQMHyX8LaMrHU9RZhpVEbycXqYgpjcFbWHHozkB7HRj275LndUTLbLwYY5pfDwymzWJpn2avQvJZd3CAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xgBvxhcknWi9BxAgW7rqJuRtUYDrkwczhusw5M1Gn46mU3yG6Joww4EDXGLppNQkip2YaPP9S4CTNe2oaAQBYch",
  "key1": "2YMcB7RFKvnxWMb4q1xNrT8rVZQmZ1bQ4TjR71AfVDW7crBHH9Zc2ort5C5Mh457Ftf23tqrTegdFuF5oAPC5yQS",
  "key2": "4snAt53J11NweXqAeeRFTrbtMtY2cP4vonBBfbzjDj8fxATYtg21ZiSjLSwNDM4b1Da6J8e74p5Mb5dhRvumW9sb",
  "key3": "4MoiFSMzjsSQyJyBJ39cwKgcVpkDojpp3aiZU539FQ9tgCk8dLbrWWv4e8TJCkEvip6U5b4it5ysNigYRuU24zPp",
  "key4": "4zykqp7bQDYz6kYpgxJHm2nyVRvRseTNwcw1cDjPV5R4oYUiZqf9FwQDZg3H37f3b1cz2qSiHmxUWjCqERfkG84Q",
  "key5": "5a6NFb9ArNH17RzZ1TZXZcGbyG1jyxEvZbAvJKi47oD1bByVfgvVuAuiLYrMxkktScHGe2WC5DMCBkYkJTk2tKvm",
  "key6": "W2Kc9otokvgULSzTDFtD1qVsDmP3qSWP9KMCb2yXtpYRKcif77Hqb9twoN185oEMfaq4aKaTkVvpgnHy3uxXXWL",
  "key7": "4xd1gPkKbXhgAKknZbDAwdctLdMksy8ABL5S3EikAQZ8nfMp3um3Qc34b4t72MJy4SPEafSoAhAsFfyNoBJEX6Li",
  "key8": "3DH2bC8h3kcMRytmiKEMJHFcKAvrnnc3bhq9fQVURAGPxePaVpvrYFdLshpxhBpHFbSuef25sf1oviEVg1J4hM9k",
  "key9": "5KUtwc4wZBpqGKfxaigP5LNTEsuH8uLXzbP4toJCQsf7zuaWbyfedy4ejek9AC7qUfsT59sSfLueVDynRcNUp5cn",
  "key10": "2F2MQ6wRMfuV8Lu234JVy5YV19UmBSAo6vt9L481jLVwZjfEYRWwCBmB3HLcu8oT3VvUYWPkQubyn3eh32QqrNbW",
  "key11": "J2kaAhnNQi8BEX56dmhQELhTiRPPwpMzGSzUJ9S7jCXXNnXUsAfQyqohKLLKoLonAwopFCKHKWW2i5gbCUXSmCN",
  "key12": "2a8sBmCrL6BAC2Y92xWEBN2nQJu41hgfCXTp2hJbzXy812dU9wymo1KoBNSG8eATbiMo8zZTpuaY3dZt6Qeu37sM",
  "key13": "kH79R8qotKbZBpFjVxDSwrFeNPvdu1wcz4EXRmRrBuUfkk9PHffS3zdS7UfXSzgVLraNuLgnCm6Pky97JTkMA9m",
  "key14": "4r7EytnqZdJfQMCc8AKWmw5JdLsqH4oL9z689knJ39bnLr9F9ax5Fk4wZJKRLhhpWKD2d4zEzLpxEHS9k6WNmchJ",
  "key15": "2MgLPq6dC1xamiWnQ85VHW2heuHkaDzEKH14wbrHteBTtQUUuNU9Vgb5AkntvhJffccSdMYyNCKrNkPmTma5tQVZ",
  "key16": "2ukAyvLFYdukfFqA34VyLLtwzmftLz6Qtbjd939HRuSeCZ2BRPMKN1MRRqmXMiDKJY5ghcNMsa6jNWgGTmXEhrvH",
  "key17": "4uRbnVLU6RwthXJ5g9kEf5R4L9x4kZQLXra96ZGqfLAMgbAJ3V7U4TaSiz48CRNmrf7tAVNtYC9VmGBTCAHh1qdw",
  "key18": "4SUe7Q4anj5k3nQ4KTgd3KsbmKhqRCY3hnwpoDJLmxiLsNVA4yXhioa3res9Re2fNN3EVqvmS2VtD8run5b3bR4k",
  "key19": "8nVcvZi1hbDf8EG2aBsMWcPjFE7EG91bLBZuaTKRZfwTKPGDkNnaMhDPb9c6zJfoyuifYEvqbnWfJmT9Jcq6Aiu",
  "key20": "fPYbeapjWf1qX6qk5Ri2RTTirbPg5u5UWUGq8QWSXMqFuARU4zVJ77oMJhCECWZNv1xEgd8tokXS7JWtMZsRNW5",
  "key21": "SbAYbDJu4rCZxAL3in6Ve9GHVxCSV485ibrkCAw3TRaRuz17YiBwSNJ9NWWJcCC3iABTCZtVtV8g8uCDL7igdan",
  "key22": "Z1hp4TXDMEUrPa4B4NP3CQPVMUK51AHFrqDRFKNG6kmngA3NMK7GsgU4iTABAUkmxQcaJ8VpAuYaP9rLXu2MiH6",
  "key23": "39bwuVaBsm5EZQCK9QvdfCSwx6H8sNzYmXSJs8yNP89pVVNsph4FqUDZtdTHgU7FVApB3kPeFEdSBfy2mxRD9jRN",
  "key24": "4Fh4UiDY2y3sseayDYdUo11kSefUS3ti7YNWYztPCvxUKYgTTR8KPEJrq5M17gFsrdy4dauHQZiHvp4UwKQ9BEYe",
  "key25": "5wRCmM3nNhvRht1Zvxd3DwHj1kpvgiDFmQ1DmXxngFRJ8gP9U5yTciRhwGXmKJfeSUc3o3JvYPFruRF2qBrWWMWD",
  "key26": "2yCD8X1sx6unXtubEtzCdAXfZVmAVwiaVJp9gjUX7Z3H8jvhg6ZrZhdfeoAPSCdTUS3MxzejGrwr3d3uECyutAbv",
  "key27": "66DkY1A8kEV9rBrNjTiCZh48o6AJVfFN5NLaB6V7gsfiZReuLNWM9UPssfFNz5qVrKk1kLpdQdBWMpoTyq3KB4qE",
  "key28": "2BET9g1f8gcaNVuEG5KsaMvtg1uMqAjWmyeszhbgjBPxqS4ShnGPaBQiVLvbGycYQvWEXRBp2oJ9UYp2AVksHtU8"
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
