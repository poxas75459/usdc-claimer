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
    "5g5dpYpS9zVFXh8Hjy3GoR3TsKcqs3zLj4ouQj8E71cgnW9stDzBTwCze6WN85dZsaoJV3BhSWrSJwY4cSL7pD8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vqni472PCYvs93WaMaAYvmrxJTmZgioyjy689NJgrtNg4hjyGek81Lxbhx5jXfEbcoPBrGRgupX6MVQYsm3dheb",
  "key1": "ichNP1HYcxfRRdzTjuUdv7M1dGCjQQ2xenPLwtEh6uNCRfWCWmySaHiBr62zQ6WDH6D9tAy1sngDZm9WF1cmseL",
  "key2": "5neLoYHhH7weiMvv5Dw8a626dSVpmkt2x82N7NWBpyWqYTruCExkeWiSPqU99fPnezEtrsbgzQEjdhguLDhpjwAf",
  "key3": "4FrbKe6FY4WXrZ61tweMQhZ2xy9G5e9QH5tmdSXyYdbbYXfRmKxu6p7QhSrUa8GjwtPaEnrELX9VuF4xpfTr5QpX",
  "key4": "4GCHJA3CU9YZ9cR5XGFA3nrLiHykRhuNLsZM7sc2wvo8kTMQ3QrqfsofoAG7Qpi5o1Tpr4iYTwpyZAnacQ2Mtzo8",
  "key5": "678W36z8aGFyNBMHjK1ov68ivnRdVX6R2xLBcMQK2Pg7LS7x38Kf9xmW78CmJxJjtnKiB5rvzDdQsEm9eLBWaDU9",
  "key6": "3XEvX8CdSxQqB27akFZ5jcdmEFPju9151j2akMERw4ppmgPR3mWsR3e9EUvedkvry9cZ5mFJQfLQg3ir7v4AoU41",
  "key7": "hHvuJUF7PuKSQ43YBVQeFGJyJj3gGJ1gYrcTA5M2DHixgU1dbGuexmZJzzW9kSJZSbep4Vj9oGKcP1g2EgLdTw6",
  "key8": "Uc9wVn9QkVGTxozSuTsgWPacnQSApJ7BScuvSGcJLy8uiWs49oiHk4BnJF33sxN1443pTwsWQYoJmTbNjrPEFF8",
  "key9": "3QSx26iz4yVtugfx5nKJ7gJjHfbZVpuPqL9prmkGqrGjMr9oqBkrLvbKrBP2DYC9bxpX5J528GPiGS5jiTchEtHS",
  "key10": "4Nz75Cd4gNetC8fhbpfcq26DThwZoTumkNALuEgN99HCe15drJP3cY1aZFoRKHbSyFdxL66aUnrowzR4m5VGbX1W",
  "key11": "4X1wiJfRv6DsJJ3UCD5hmFwsy87oAwNNKkh7a5eGKmXwztAs8VDuFduBymcXAT25bsYX18SqmnsKTUJBeEeKLSGV",
  "key12": "jRhAsUzsBz9xSjYpDJvHZzxZHhUe4tUFfJYGUprRsEBCVsdDpasHZvGV3Nft1YcrrxGq21P75NJdMnz7iRtHyhH",
  "key13": "2JrB1sGQmqMHaUAB5xTYKWGzRiyCk67qYuogtzLmzDTS1WxZXxmtQDmLL9QuyZ6zHoxwJ2GKT2sqQ3ZrXsaWcnXo",
  "key14": "4iozQk9mHosPyAMJZoicwoEEGqvQVKEZsXQRiETvSSC1P2vquYqmgmQnQVCoBvTsft3HiZ75EsCmsJcvgt5N3ktm",
  "key15": "5LMEJhrgm7SvxzBsZS7Ev8AadtM7kBiagNBvHDJgQkP9CNgyQejdWGskqVJSj8pRBZY4X9Mjns4gH4dcFDGcuPd7",
  "key16": "6iG3sTsXJf28qhaSMLJenGV82SssLAqD25ujGNsrHG6gpz2EkvLGSVsuu7u2SK4WJWrfuAkiJLLMUyuwd5CtwFZ",
  "key17": "4EMsD7zaA5Myj1ohnQkhXNwk9rdTmf7Cu8LU9nP22LXnwxmHDbnehWm7zn75Qw5WEobS4M2iDNayDPnQmXiY6eUL",
  "key18": "35JvfqpAZTur9Lo5383Gu1J2veGkjXwBzUaLrbasNsmoZX6e6FnwUqisefd8rzStzJ2vk83oMcb9BcJJhmp3LApL",
  "key19": "2dzFcsKD5QLA6ELxigUCrsD8wMt1u1pHeaPWn21CYBcEeJG5pWqrkLkeskC7zF2DzsVYmZ9z9EZxsomUG6t2f8Fp",
  "key20": "5UDff67MUpjsvY2XGzYz5RftLkunBJCMpgyEi7Yh7Rnt6Q3XxF6QnGVKYzQ2fQVqcum12Xi9b3rwWxDFdAKtAswK",
  "key21": "5GrLK7rpfxbGcBz6YTsC22j2B1GidzV6SuQtuFdm264r5zcfLiDmT7cuBvPAxd6eCzLYr5JPiUX3bKJYs3QGzkPU",
  "key22": "4Qkuj6SXMD818VQepeSgVrQpY5YbYDsSmFZ8Bsrnm2jcNykBtZkeBpVPWh95hQnMXLeihBp6SF9DgAh7jCJzJvqU",
  "key23": "EPf1af2MYh1t1HD47ZeECVYUSeCTnv2rrQcCaUk6GAc2XTRGqWqBLrNuzcFDJmcSCYM4wSMyj79EQRyGLc3Aqv8",
  "key24": "3mWNRB7jgK9otVna9o4ovgFen82bN4o72ck47Lp2Kuwmf1skiMGcP6xDY8sTbL3RDvgvsFhkHBDPEKv3ruQBSqTQ",
  "key25": "4zc7Qncxd7NPkEguQYVvxr9rn6MPbKyZ5hiMtz4FRiLBioEJQKMQWMU8bjMHMzzUuqembTCUfGSoK44AFxH8S4RR",
  "key26": "67YL2MXDYe8bxXvgkC61rGe9GL3ZuoPu9H5ov5jzUycmLwmyAczE56gnec1ces4ioCjyX3D6aiKu6WWUyVFeq1qS",
  "key27": "32P6oBfqH2FaS6q4ZcXjJSFegUjvVJwukEKZWMEqhGNEwdY7EYTUCPAdHMMFcFjKzUJ49611AVdbZmmpi5kEo8qz"
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
