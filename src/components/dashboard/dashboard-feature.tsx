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
    "32NF9M8Nbc6DB1RmA2RaNkBT6kMfMzoXiDLX7qnBnuFdTNczfVYMYihQXZRBw85KhJirJ1gSnNCxUVbAtey6is17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25vvBYBjMaT2abEDjHEwYv1BrA7P593bK8jomTYKETGQgqhN54d5TSfVRgip1gggU8dWLwvexAsw8jP91AWthwFK",
  "key1": "2qixg2KP32xo5Z38ryfnsvvkPyCRRfjFdnVkdrRD5KqVMMAdqCUBHJE649bCeJxV1cqWqMfEeKrNcZzA47wW7T5S",
  "key2": "5JZS7LwpFcDvERmfvhpGrDfLnsncFsi41MNCtXdHbLTrP4uFqr5iGqfzBtYUNriHw5Ff891M6uVQnZPK7mSmFFc",
  "key3": "4KD5nHDhG3STu8sLbKZ7gyk9MaL1jGCuM4UwAUBvdAPzYXbk92WeKe2KmpqQqYN2yXhSb1PG1cm3o1q3RXJ3Ng9Y",
  "key4": "58hJBG84rLYqTu6La6mkqg78wPfEqjbuAjjDJoc8vRBNaJAdmqHs2G1Yd7Kj3vA5zzD2YGGbRYfFDHJp4pDGKndR",
  "key5": "5iQtvVqJsz33p35TMxzawXXnxnJQQoLBaSyj9csfxC3KmdG3WL2A56xsmkFDbnLqAZ4QhYvYzTDsT9wf7YxQTMYe",
  "key6": "2MUW5ufbfrYyvZYKsC3DxutsXPFAxbGry9Tf7MRMVmWF3qWHBqZNzmzcdZNHqL7eEuXj6i7JSP6Jr174CnPAHdsU",
  "key7": "4nc9MAxS9GFLdFoQ5n7DpTrpXoEFfuKdTNsGbyAnbhY93SLShJAi8eigunJFpPQwCUNzGCd88gVoqanLtZVWVtwM",
  "key8": "3DBUchAAU6VW1ZmNGXY7VfPTwrNv6yTgLCYqQfSnbMj8MVSRC6hpqV7pMSvAAuicKLgb11BKvW8n8Y2wLreRQaHK",
  "key9": "2VRTXw6uRRDxbXefs6Je6d2qJPXTdcFUKgei3TfKyKtjja6xwUdRLY1LD7JTtkBpqEVgEY6g49NmGFRijzc1pxfa",
  "key10": "31C7kF7rt6ZGX3f8FBDFvvwyDpFw6N5UQXWQ9sCbBMmsg6SzU1LvrxPoc3EqV1GcTBvXxKd57po6bj6rQHfViVQq",
  "key11": "4Q5iopTgzda5LyKkNHiEJm9wDtueBXmRWETHRJS5VaVPb2La69zX4kugo7gXfsye4TM41FRJnp5NL9ZrcEXLm7Gi",
  "key12": "nCRWEn2miwByodi7ddjbSHMU5FHfzvS9L2r1zub7Qnyq6rJ5qZcEE34fSTBsYRPvxrGFA341KxVF2Zx6jsXT6QA",
  "key13": "2QFXL35nZyGwV4Ebi3U5QAYUDn6B4c2aouAVhzgkZ2zGRkkRGzD9UrEGMYNY9voevePrzacdYcUPxh3y2omTHTjG",
  "key14": "26XbhtVBFDzBJm5yLzqSrqh6WAzkACHmc8gjLiB3mCv61Wk4Ux8Dc4hpczoedPiJtCepUajZpCoyYgNcUdZ8jMX6",
  "key15": "38oU4gtRpF6Lrsac5bZxMcUMCUn1Xgez9QgDKFMsC5yWF56yR76fiX51MF7L89nVzwqzecrV96rnwyto5AXYFdFV",
  "key16": "iTUUEeimDnARVsZvzzeekBdJv1AMdhL63135DKSXThpGuDMAJQqcWabF7NPPUPnXBfYHvXig5xNEDixfBoTbJNN",
  "key17": "35UDsbcShCGbmzBf9TN5LHwT7qCKYgeiYnN6oLdfD2mmBiXiZkj1DdJgEJd8ciLq1VCXFtUduKwCy32B5k3TCLfZ",
  "key18": "UZTkgMVZRWUppNRYDHiz2G263w3h1E6fwbqdPJ8TCRDGEzRuDwEuqY3X2XFMvioS125XQQvyN7N5msCHwLpKjYy",
  "key19": "VJz5kWbv4RqqgoWN8JpGiehWkMzGeiDdkFX8jjznMipQzS3K8sV1gXk2mQxNdnargy6GNn6N3nQzDFMeb5wXEvj",
  "key20": "N4QFn6vaY9xCh32VfEkfFfzZ9CmLwdvWnsA2TwuqsvxR9cxyfALHf3LbXizSu8ADnhZqFXFLi8sDKAMh7g44P1z",
  "key21": "61x2iPCbWoyh4s9S7ADPvfRC5v9PdRiVFdtx1ZU3DkW9svAye7GoDTUqigGQ7Mt129ejMtYCPzp3tidg24QNnm29",
  "key22": "2nVkZSaGQfzf7avLCzCZRFgkG4pMfh8zQzxM2qPS6xWnSFiLN7k6Q9MhTFxFpivhq5SMgzQS5iKi5CayzMbwz4Uu",
  "key23": "3sg9EXrAf7sx23jEhGqem4D7chdLUNXkccs4JE3PtGkJrCkr2bZL978yutzVXinJB76gGWssWhFjLHMGge5bUS1R",
  "key24": "AB3rTG7kiYMUZL6WYeU4fyRZpfcVkHypStmngD2aVY1goXuNGLF6hAxwRQ7vGMEaMuZT12ZpshXcb4zfoyoyDub"
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
