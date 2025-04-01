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
    "5SPLL8m5nx9N7dnULCYcdTQ9AYKQjKtAEoJsgXNQi2EMCYnJSf6ZC91goe7yx1XuFfNTnLg34W2YLuwRGrRyVNk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MrVrZ6d4MxXAuxVngXffJS2NMFWr26s9PG8fVrdJvw2qXtGsQESDYZhqrnPwqDHc99voQmGoDyvDq1CDXFAHTa8",
  "key1": "4BnsEfMHUxYwS8TqPGcR3wY6iRjoScXyYBDPuULJZR12WdQsxGrpMVKLKXwv3S8jpupSscKDBt2G242SXFXqAvdd",
  "key2": "3S22SecFTa9C7pRAa3NC6ANKVLNZctZQp37vWpxp9ZQ1qpbusKqX9LxuJK8yrXTm8QAdQAfjZpq4Z9pvY1WnmQmo",
  "key3": "5Ki5mgv95UrNJ1eBqK6VkQuZqNt6KQKqSPBRHE8LXizWQmHmACJpyWhVzA57DvebjYpv9c2ZMxAkyYXHD6XrPXXs",
  "key4": "4pVKQLtPyo5PEe4k5QwKyuWWTM23EE5tizHutowyDA4868C95V5VMjAHWDSdyjvku95v2LauvWwd9qftwtoDM2Ug",
  "key5": "2kPdTu14h6KgraGYmg5HKei1afKZDBeDd5vxQEZKkyNCLMQH6gyFKsnFp1dkqCadAybapAcgLAkcpoCS1VC8Uj7J",
  "key6": "A97sXXrU5wuzTPWsB11k1xsrN6DLKcDqBEPYfNFvojfALMRW4uxU8W2FUSXmoyBUjcRRzsF8BUpKbT4eWvkke2f",
  "key7": "4Bz7NGNzq9U5Pw7arXHdGCBmu3NK2c9YciwpqoA1v8moitQyPEsfVapy6Jvg6MpDhGqtXtodwcLENMJQ3cTpkmWQ",
  "key8": "3g9M33rEsAi5hZanX1etw47TAQXnTsB1qresuxvdNLuyjJqY1qTu7MkXzhinUxVnwvS4xFWsnxjRUvB3N7SjuR8b",
  "key9": "Yb5RwpjeZ6R8NR3NB3wSHMtpovhj4ofBeHcKKVy9M5x7Dt4X2wPKjXqT4G77M9wpvNYBNcETTJnLaSwcXUDXKSk",
  "key10": "3QxCqi3zW7Z7sCnTh4mDR2rp6aXh9pJtfLLsK4rrT25ckcbVexna5tAtjPKsnNekcpSz8upw6DN4ma7CrAdAg5YL",
  "key11": "4vRj6ePGas8Wj73YWsgdqXgAT1wCkYZnLWVJkMPoWHFxmWdaVZzHEHTvisAbhPX5yEsTmUeGKWYyDxCuZbpRv4b4",
  "key12": "2hcahxMoGzxf6NDeFaPemQcot74TsAdjDBTAwJiXjVn48MvDamgYH4V6Uqmxffqv6KXYhVY5TgJCbQqC97dec4hp",
  "key13": "3YRdCcdtomPbaMvcVy7VdyTWcJUpGxhKgUAVFpvkCBGf2vSps9V9epCkusm7t4H94x4BtwxDdGyg2uz7HZF5D7r7",
  "key14": "291f4yziWFCtdaMLhLkZRqK3LyKzjr2rqKp59EFzmHbei5VhtFiowdGhstEQHzXCqidzBRtgvNfAgUzNsi2b8bRM",
  "key15": "3DhQVESRDjTnd47cnCHrzqq5fRLYVQEvNaKr6q6soXbuUBqpxZ93u8YvbGEno9EDe5rujaTunb6tMMfRWTtwCTgL",
  "key16": "55eZTqNm4VqbcfLmYdJXkftBAbnVR7akQLrwv7x9mbvzpujtrdSq7xikGu3BMGvy2XmZXCcktmAdfx5TMh83Mntj",
  "key17": "4Kou6PXyxwgFmMck5udV8d1KASJdpt7zwgohXnGtd9Vh7bBZzPGycd7iAUR4XRVE8zj4vRygh2AaFqkh8q7W3FPG",
  "key18": "4byajzgJ4ApA393d1Lbof8kpYg8yqU5eVpxFx96bL4tzacyE9cAdNm5yFBw1BWFBYdxU2Df9ku7kqySXYUCFDwir",
  "key19": "4aFXYjcQpZEqugQjprNn4WrdRxxDf97q4Y2EV4xm9qfD27gEU32YRqa4vm9qBizhfwYNbeiRjho13HGbn9Pao4kL",
  "key20": "4FHDcVvCCKc8o5vfz37WzJ8G1MqAxiCC38DevrFsqhiEz36jVzRMwn45QETtX954kPtKrDB2AkHHbcN9BHFzzC2c",
  "key21": "5i7eCMSAr5d1RbY2bypwqsUsypwdbtSzB2QTEyvqQWdjrbVcZntU1XygXRkazg9kUxqHR9BZ564cfXQr7ZCZ7wqq",
  "key22": "5Qm8oL7RFfharUs1oaUuq5d1fjgyGWSV4PQmWZKgNdrXuFbmdAdiZ4mzEbSheeHHskn59bcrcYLjpEKG3XeLWrJv",
  "key23": "3sccLAqr7sT8ZWFW6psadEbBeFaSLH23PauwxafG3rKDPiPNuw4pYRFfQ5czktFchU52Fz2QGVFaPxFxMN8maB7e",
  "key24": "qJqe49vsZyVUHd4wa3WNydwfLBQizPJVbghfiUR5EU61yhwnmKG9njbEhG1Y83zhp2Tt1Ydvz2KzmAoNuCEBdaf"
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
