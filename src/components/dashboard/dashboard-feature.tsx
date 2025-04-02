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
    "4t7ekoT91TXSu84VU2KJhgGH2EEYvVYxKyomBseLxWJwF7LEL9CvFao6BdaqD6SzxwcnsW5Q46w8KpqLQVfA3Sc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ohxfFAVoVs3DSEDPZied3KKAFCrj3TuPonQJAqzj9FVAXF2zPJB6pgFcK7fiFfNT87CgvVAMSTHGPQbZADRJPU",
  "key1": "46rpnrXjnBUxPny6juyZnpddX72d249bpCUvCqF5ttCJXb9tjGR42ZKzThDZF6oXguHeU6UE7P7jeM2rsHnrwSER",
  "key2": "5U6KvsQwGyGMF8roPJrgB8nJVSEbmbttWYjDNF2TXNtjCNV2eACpAmDVfUzPGcZ4mVC6E1NJRtqDhmzcg9vrB38d",
  "key3": "3oa1nnnGJiwMsE8caTZY8siJZHn7m6tUCYzW3vX1svY8T9tnYgbbDky2ZhELgApwKprbmZ1uWkQ3pe4MEfRk3QN7",
  "key4": "4DqWXyCC1eBYGdToBPfjMUx2hTZMgocpU8U3b9p4CxbZDLyqiwZuZSrZE64W9VNban9BYwD5G5XroMaijmRJ9ga2",
  "key5": "2xqLBoy1p94L3fB8Jq8jg1s5NtonEFYYz9EKwif2MnNHdLzkiB283CrwcAd5s6h5r2e3ju7seHR6wiGQ92sur2p4",
  "key6": "494LwUZXWSU9PZ7nbE5AGLkEqroUEpMBpYCHT5NoCkgadoTFe5yBCKkgZorysJyWnLim5g7S83vFEAECfQUYn2kX",
  "key7": "s7rFiscAcVKTsJfprVEFbLR9wCSxMrRocSTFZ67kKKkVVQW5JNDRgjekXKhdJsKPvs7xuvypqCxQwaiEVHXQ2bR",
  "key8": "4zr92jh72q8jcdAB1qgGeNLVcc3SzhjjzjJJu7ZnSeehUnesmyMp4Rs2nQcUHokdSiNT947MGLJxme6gHoBXcnb4",
  "key9": "5mUco9x2vWWz6jRRj3E4hAcZLa5Meqd5Ut1mBuAb1KkVvNGPqMEb59vhdHvTiQZtaoUEjMvgusurmxFBkYtUx88E",
  "key10": "4D6MkUmAooQutvUqns9fd9cQZeXDNrCRTi9kM6H8AbC61FCNRUQpBm7jnC2cqbZHDsynwG8dm2PPQhXTc2tQXfA",
  "key11": "3Z1iMwtjUswnLZiWJCdKjkBpNNmV6X4pXE6v2Xhwi8MmAUKsfHC2ugatHoqLspTsq2eij7VPvLSiHvpwuq8QAFdQ",
  "key12": "FFWWgJ59nab7L7t7gmDJXWnqWTSc4dCwoy7k1e3EGdeuQhUGbf8db2auY9UAwwnpYAffv43iaaT688g5uHAJ3mc",
  "key13": "5vhoF5z6Lp259hA6SWpwdTNA9SzbE6kRzYrPt7PzjQ8q5MbQ9DD77ehSCgJ8UVfkpFbLF4N3Arw1kEALHGziN7Xv",
  "key14": "4JsyGp8SS5ipsvonyc2BnXgaiRKj5M1DdMrFLz1EEEcwZ8uEpx1LoKhPAr1kPza9YWcW5giLJz95H6gNhonFmzgH",
  "key15": "3u8X3c3TveevT65jSG5tD4EqDBYfUmdwhYPPyLk8NsChgdyJKbVCaBiP8PbwQy4wjEe5HhKCtBymd6JEWxnuZRaV",
  "key16": "65VG8rGXQxYGuXg4UxNrWS7NhcCX8P3w5YP6zfRrR7jDKSMaHA1npS4Sr9v7rktPUsLPjTLxH57aHV2BXaENy87x",
  "key17": "5SW73pm6mKFafowXanS1QYt2b2MxPnGjnW2zM46YAzxYKKkjEeoAyWYDGdmsjaPAyLr3hXq1fM6LA2q5mKrcm9At",
  "key18": "K2fF2UTWjNhwN3pXc8nSfhzGdwK1aqr38oaGn74YYd65KgmCFus6c5EkW7nVPG2nSivN8vE7VFZf24Eg9WJ66jd",
  "key19": "3AiotfQASHfYKhQaJq8cpjQn2fbset9nDCX9Npqno8VEAb2TRo2AVGmebf95XhshxfGSeMj4Baa4SXR1peUKR335",
  "key20": "Cc59qJc3HSAej72XGLhmRivu2pvooad3wkgLDmeSvPgvahCLgUvUdfqYFyoyjEoQe3ekD1GLdCEbQVE3yoZEnXm",
  "key21": "3X1BVu2yo9czwij1e31EP7DovZDtNFacnoJtU7bJ2o6FqCQnF5T4fjog4P2HpF3XvoZKf56iiKeQXTgFSgV5dqNT",
  "key22": "4ys5kxHizYeWNMT32w68nt9ozcmSdZ2daFouhVoeNN7ViVYajhLBuKcRTEeWd9cRPCNg4tR76QDQmreoTxFUBn1i",
  "key23": "qbJrw6yeP6dq5MK8fLwR4q3fpKcj9M36rKWpTeZbwmZHuzrwzxKSwjbbhuFCbDtW4iMoPBnxQmrVtqWKLmnBo3i",
  "key24": "KWk56c77L9XYdeoQQHUvHKSTzQD3ug8UAnQu856ELL8KM3s55Q5xcwXvxKtSvjXq7kZCcZ466fnQ8wxdRdsDHoB"
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
