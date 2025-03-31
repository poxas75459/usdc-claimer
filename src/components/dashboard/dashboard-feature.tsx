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
    "5iXnJBEWwqWG4m5EB5PcKynXbrp86pqfrudA5Eg6YyQd64uZxDVnSv2QNhu5DF4kDQ6nVCPcJhDMUJBCmvkZemx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ESCq7w5GPkZ8rHw2Ck5Fo1UPDVms9kwqEr6WmPxjX47rpc3yjtV7pr5LojjHMme4zy5dzDGpuAkQn6S7e7fkmzq",
  "key1": "4DhEHATctT29Gm1NR5QoJiAy2zb8KjfwNDGHqyvFXLy4okbNfvRQKcLkgkEqD4PiAKbb72wWy1EWA5jrk2epZSaw",
  "key2": "9egt86efY1HL94vyRNNg8JME3GEQPajdsAn2AcXQuis51SH1ZY6NyCubciSHNUcTRgxUV4MHNhh2werunXGFZYr",
  "key3": "2kECKvSSPHK4DJxHGkFtMkayq6EqbVL2UMxwWdxreVFB7Z4Srwvma7YVTCFLYN15tukS6cJVas1c4Qs91xtL27S6",
  "key4": "2odPs6HTNcv9EVdc3JfvkG7yrcMZGd7rT7e1ZmHiAqjrCevz2RFaNDXWtyTQtKj9EudzC7w81mSCWScoRcQTgT2d",
  "key5": "2S4imTfAVN6fpcphmBxJwkG1WNQ1gSihux1m4SLp1fcgrdedZeYQ3AEnEwipiq5KQLJrnzqcTaaWqKyd4fRy75EX",
  "key6": "3QAbSpa2FgmkP91WxNFJ3AAXAMMnmku6TyuAneLUqLeP9ebzPM4XELSz6sAUqfrk6NyrMGUPQ3EmqstTXdhri9oE",
  "key7": "3ahi2gsh8bCzxPQQwuQUTaoCJNDyDZK7GJJAAUG4LASHBrtfDzN8S4w2g2C3kdjjTdgRSKY7S2EXrSU5kkRBmQaJ",
  "key8": "5E3rrQUrerRF3M32n2Z7qanXVu9TdLQyjXbeVJQ9JkmRGiPB6yst42WkaJY4W3uoa4gDMai8qtcjcLRuwa3vxDem",
  "key9": "2QzUpgtUF44hd95adMpLGmGUPrNCvzhasuNr1mNh9w2ecPdiJ4WR56S8xjMYm5tvZiS43wzW7aKDDh9L1PNDYTKM",
  "key10": "2hiVzWjAXWeoDWv4EoxX3WepaRMp2nL1ToEpv82Dcbhuvfx6CYMn3iBzS3a2kSUDwAWXRJvQuieXA9m7BBXXeWvP",
  "key11": "3uixHdfZjTLnhwRKoa7m6okKwYRfrkJFWLLXywt3heZTvb1uTcsna4V7gzoKLZNgnGLvu7QzVUqAC2kYzUVpW1Rw",
  "key12": "3VdB5kM4KrDGqf9V3Lt7VbAXRcmTA44bXRwa3fay2T58rR2s6ZB4yKQJJTjNDyiqxM1BEcDQ5ejQEyTjqJB83dxu",
  "key13": "4YHzVhmk458RXrW36AgCwEVJtofUvsCANnXTxLKTeXRTiqGQNZm3Pkpqubtm19oYnsEZJ8j41CEyP7GFSsVC6rkS",
  "key14": "5uD7BjUEuAR4QAqdFiUmedJ6pK2aD5peHvZVDheLH7U4i8xXbPaXzbnvJB7LUmLKRNB6S5xbMHR4Us5hDja4hxnb",
  "key15": "Nr4kUzKXtPNa8UYygpPNNu1JRpsCQkG55NBBumAaa2dq9vcy8EwKGkMuzzNhfcaVcDhUprSRrCU9iqDs3fD1TYX",
  "key16": "4HMifGPR9Qqmak9s4RmrYXWXoeZmpeFUwjR1tuTyCN5G7mMpEVarLdgH2skHdvoJ3w1nP3DhqykP2n1SrNK4yQKV",
  "key17": "4MH2cq5r5xBWkmA9b1bmQpRSNCucpSZTAw9ZJ2EZsT8SkPTXMCb9kE9UXBRkjJBsY2ArhHytibwNDAZeGUgi7spd",
  "key18": "9HnBXG7qBmpAxWNWQYbHuDpPCXGayxuNdzfBUaFcJCKQ8cdaAw9vCS3QjNzimpiGgT2rQVpvE9uCyUK5FVSMPeA",
  "key19": "2uQQk9QVP2wVuTF1zix3RU6Xqabv8re9pPxyBQigBD6DefCguKuQNi5ffMuykSVJXMesjJLd7WSAd61EUoobr9ia",
  "key20": "6rzGiNov3vfXtjHn5op1etk5jckN7p9mqLiNRKUvw2vNMaCm4SL1whbt8L5xLtDyACvMC2b7RMuML8QxDFAt1Aa",
  "key21": "xyY93c9A9vCDHeYKEt6k964KY9HEY5wLZCzpNpvzNUZFYN7TMcWKETrwzr6unRjqWQ9WJAoZPiWCRTXGXg2GvK1",
  "key22": "kVZjHTaVeKpNZRcKmqn3wxFUMbwz3Z57Tgmz35QVvruNTfJohnFtPmeah2cdsHnLsCSR7fzu4EjjYegQPUrN3zu",
  "key23": "4tZQZg4naX8CRtB23vtLjZ6GKAjyxcvdWLKHzTTxmFy6oS52Kbq6MbiBn17NcGM8j9F5FoFy3MWWnVyhdwSncubu",
  "key24": "4ULv1feddmDpoLM6hP3qW6Xd73LfGBpmfrBBNHKSP67xXpUiUFoigmqvRvyFFFE74vmE55WC4HHkTArD8j2DobF2",
  "key25": "3HtEjM3xD8dHwLbgS6e55QnEmUgEofgTVgEv4F6c6kwqoYebxX6KLnV2kTJaoQZceQFz1wS1VUY5Gvrw9L3msbs9",
  "key26": "3QmrqbnPaFRDm7N23ukHNZFdtZqdMDUR4UgejUG9Dcnw4Q9WD7pn8TQZPsxWw7ZbmQ264tXmtbJrXJZYHCuEuF9a",
  "key27": "LWJTivi9EBHACncZ7svdH4X5Z4UknMtDmVa3NrjDxnum121Pp3LzRMn82xxN6GDi1sJTvs4jZHvnQeRnivYi8ny",
  "key28": "2pyjk4jJtnH7rDja32zv39LFtJK3pKZ6G5NFYA9GPTBSyTMNj13kN57AJ2RB5B9JFnvBVdXm8DSFCqE9XF6EmoE3",
  "key29": "3wYsRXbRAb9wbLkjU53HbAj1mDRFF9U1zMxHQnq6cTwrBRaTk5FZ9EoTzMiyQD41gGTXBQjyh6wfjDBbHRgg3pxd",
  "key30": "NFtYTr3HrER7cY6c5T9pHizmqPTGGg9RvRvGfoRX1kZXCWQowX3kKnncdukwJMKoE7vBAkUCY36BCbNx2T9osv6"
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
