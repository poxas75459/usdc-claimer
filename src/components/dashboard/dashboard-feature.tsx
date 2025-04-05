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
    "3FsbUjaZZ6EG2vuxcZBacpW6EQYsRh8fXhvua3mvL6b9LAwTC5eV27HjxcXgY32FVcUA2LZyUp2CNgcbkkjwS3xF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FMw9Jh9sGaRM48QUcU2tmxZzGJnQHJSNsf3stGte7hxcjsWY1K2Q11G9M3Lpnw9oeMtPGQymBRzSWGw5EKvWJAt",
  "key1": "3xJhUUPodgZdyZMzqAv7X24rVv1JqTRV3dBdCww7j35TXbMQ5MQWwSHVwDfxPHhdbN761Kg1sL633v62GvGn6s9e",
  "key2": "5eETk9fnjrgZUJHrsPurhEVsVpm8V9fiSYMvnJjAgyWcMCh4Gf8PtEDWfaYwtrsek8eKrza2CT1vB24EAjF864oM",
  "key3": "McRSYNjFqqGegoySz6amWatLRAQcKw26zTm7LLnMj3oziGpkrSMHpFuGw9gTTQetYAXHg8LbikDiuzvPGQRPaVP",
  "key4": "2G5VX5JRSYPLoDTxLE7ygr8zerESLwoFhWJSn6NQhiEYwUauN88ZCUCbuowPMAKr68UBaSEgNbiY7QoSU7SQnBar",
  "key5": "4dBEn7GrUP9MhiJaKHYLkJqUjDRJ17v14WteBU23zJ6G5urqe5NN4cQi67FqfMkKBwQB6TiTJLpNoP4YWb4jML3V",
  "key6": "4KPoyQFzepgqErw9k6BMmzKQLcfggzzNULjsJFBsg45d3uSGiEn3uLNLge1zCiyy3AvaLgiFwxTCd8hggwVSJo8F",
  "key7": "p6o1nsZmaSMWW45Rs88aasmSWhVJAX6SafKAH3u3BTSnrPgP61SerHZYqeRpjUM5c6H6jwQezT5wawyz5Fvv4ZT",
  "key8": "SuyzFGhX9vsAnCLuSmNpp4dTY6hwG26cP6DGe2Hc2iugALSFmwVzRJN1z7uNQBusrkLquhBBZXmBv6QS5qHkiez",
  "key9": "4pfGvVBNzXfWtQdhpqUjH3TcswpmJymrJeNtKpnxSFTi9h6W9hWR9mTc3CPVEGbUBUsfpz1utTkE8iahDje2k7gg",
  "key10": "mYXNiRjtbNUYn4QnZkapXtbd2t2L8hZXStg8uF1BEK5Z8sxk8aZkUySif1HzWFYN7PakSKcugQ9UV1KCNSj8AXr",
  "key11": "5hP4bkn1Mh1Ypbb55anmctfJEXyMFh84AJwrogPAHTWaLMKzRKiqqDkyTSBSJ4rApwpKD9wVx7ZoK9zTKjpNYSKB",
  "key12": "464yK6qRWk8pndKmAmQN7o3XHAxQg2Y3U3gaEYonoeEUAwNo2y41cZVFMGSm2LJ4CgKfucsyyRnL8nZtWSm1Dxcr",
  "key13": "2Szy4YzyAayX4ssPNuG1gvkku6Mwm7VEhrKWMVT1eCteCDwFzAk6KwrbfAebx1gYBkv4giz31qaMM6N2ABwU2bK4",
  "key14": "2QtxuxprywxQUnmZPS6hJxopJpNFyoehFuqKRnwmJSGYpmyaUBowDQc4K54G7mcPjkoUd79RtcwD24oYaUZZG242",
  "key15": "53RHDr4zEy1vRuPVzStnhcLLQk6SLVp4QcCzkmhqsooXDxFeLDUT8gf45UUUPKscmj1YDrVfvkekNPMpqSNn7Lqj",
  "key16": "449qP6tSUaevTZZe5aXoSsY8DYBD62f3RSBzieJKJ8UG1MMTnEfr2nYZeh52RuPHp8WxGyn2TG1wLE3XiFg8Pbn3",
  "key17": "3wpGUt3TTy8ze48PLEbxDqBkXT9bsu2bULjuKv3xZzcREbcatfJxJyTqjGgpsYP6KVg7ovw4g82CVq6FF7BApwXY",
  "key18": "qSTPdAQ6yTNH5ALQJno7FMQ1vrbLZaX9FRz7JnM5JcfEPR8SR197a2bPmWc8TNWtezoKWY1dfQTZ4x3YxbQncU3",
  "key19": "4VMHKK2JMMYyXXtUweghAwHGmMbEATnMSAeKAsSM1qTJvKmB5eL2xcAkmfhSnZXeXitdpSuAqBbqEB2bsqh8AS9d",
  "key20": "3joivnYCtsXAPYu6gUoFEVrvcHUoQFc78qcte6TtTUtXMq1dvuX89YETMcwbLXkMMnmKqFBka1TLzMZeUh13hZqr",
  "key21": "3ZJKRq1LJ8pvDWaYg2F92L5QvWpDm7RthP5uwJNyyKDwb7ULniZ887eiYGgseBUr2L5RbsMzFkBSXLKnbd6uhEz8",
  "key22": "3nHVrLEVm9cY9EATZuQw3AUwbABVeBosMyezgV3CPxHXtvNmtQrZiDQi4P97mMbViv8NVuMLh5jPdaXZzCo1M4BN",
  "key23": "4MxB7p54NkjrE2zdE6vfSPVCK3nQYsA8LXbE1FvohdM17WTph2u4zYtUDjtRx9vw8XmzZXarjhhCsEeby8vBWBt6",
  "key24": "4bCfxGjnZmRqYR1Wh6bitPZkjYiMgKvEayQT8q7KLeazVcqwfeqeKjiqLq2fw84p62ppCLUqRRkgybvCdckWDVJ9",
  "key25": "49gyWJJonC8zeSn5RFv358TatTjfdWf7rEc7WeaRSwHL82cpu9ozMnJrXs4w2CopPpTQyTrecdEZzoRLApurj1H"
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
