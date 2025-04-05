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
    "3Y6kfFoV18hgvvcrGHDpfLthqSzRJZkeKWTJ81VSgvjAwkD2yvjbj36E1f6FHfc1merqn8J9zJQQSCa17oaiiES2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dvBWK3dEofSdEafMkwyhAXHqEw5UwqMYnNk7reLNunSMSjpwmd5bnbe8bqSRHzq3295ifTztVFaywv4d3t2GvbF",
  "key1": "5rrW7Ba6aR5M4EREBme27sSPbGQ4ECVduQeHGwgHCNAWbaPPTjo2ZrYDbQP3M2WRRPcbzEZdbTugCcA7DL6tHRo3",
  "key2": "5VUVq4WiM54DPyCVUtSnZJ68sDLaezGcGAkXy4myN6eFFMMFJVcUgy2fDEzpEbEx6BgghrYWqXzwNX2vgGGTdZxP",
  "key3": "4wfugXDzS6veouwvwRfBWbXjnBe3DD6YXWCrjFYr8sMegqHKs6HoS95W1V6Zgu7LA5K7ptvtXbTSjzMwyShH7X74",
  "key4": "5mEaQe8SVLMG8eS4641C1u6BqNfBNX7rLvAb931QaBz6KXRxjTPkx2YCHsStvbTU99YvStuHxfdEKWkyLXau2mui",
  "key5": "3pLZZHBfKBtFrVgV3To9BJCj5Lr4hRVKiDp1spMEV9iW1sFeuN5TTVZhj9WuNwFLkF5oSuLrEn4GBbg7hF2hp1Pp",
  "key6": "yQwRYMfMXaG5Ly2CZFi7FRBWSVcGCAHqnGa64mpUckDLQRvxYsKJKBTanpFRXFiGVseppHUWZtKvnTpjQYBbeFA",
  "key7": "3Rqfo1xF4AkhG3ybHnxr9yxeRA2v2Av8nnL2kYqRgKyX3fhva2uja8TAqmQxqzvjFQyBii3sd1q8TpdT8yVuEMhM",
  "key8": "4AM2EuBBnYJ9AgaYubZ2SWFRLF1Ga55zMFzGB7eYuQjqh1VkX99RmEeVaz77CYC5uYqUVmWVzBp5h8DDBgnReQTK",
  "key9": "5SfU6GZfY5bvJ3pqxgFpVKazTkH8ABmhKWwSqPUQPvsPe3Ebqc7o5anQFNdDhNG498N4tHwCfNZb7GHs9mpVef7Z",
  "key10": "5MwAoDdWJ3SgrqfwcWFP52Bh7pxqh2pB9htyTN98YdyDYutWLyqGZqGmp16WPoQjSdx1Y1zd28PSN91e7uHRNgHH",
  "key11": "5Gjr8cpY6B7gjv5DNuqi2LnQcvuKEWPvS9sXMdox4SK5xqaFn6P1qmrAyuakibcps7bhkkzMtcouUvV1WsmzKhxJ",
  "key12": "4Wou75BDusMnRvs7Q4NrEEiU3n76aSqRJ57jqTXGZDkSQR6g1G9DoHukHWxWL83bW6yybWATJW86dKSHD6c3kL9U",
  "key13": "5T994BZn2A9pbS4yuajqmgs1sY1hXyvAChNi3DtKqy7dV7Uy9yBXG9z95Q3fmbunJWiNRDfCwnJrhTo2BzDR1BPH",
  "key14": "27terhSWxKu13gktfU5n5aJKcwjKzuqMCGFXquZ78Z6RSNcMqpLJg7GGLk8cN8dF3yeKtQmm7XcCgzL9c6Q2P87T",
  "key15": "4ANQGKdTBivcBsBUiwsCXfmKYxVUaDtTNVFVhEbjM7j3pLkuuAKz1vTLLWGsWPhkj5CUbW9F1gK4mdXNGkcrj3Vc",
  "key16": "2rAsS8EMVWQxERsTwHRC4p6j3ge1GKu9BQbdci1nZsQdXAx3vFqyAZ7vNZrLKV8bBFmTrCJc2X5mQsDFHaPrw9B2",
  "key17": "2fjzGQSS79BuWZbjJT19oYPResjqHbYTPx9SkmbrB8roDEVU9LSteuA8Y3AEAf9uRJrc2Me9Ecr8AnX8E5Ctcwxt",
  "key18": "4RpUTouDiTebmRnTYAa1wPFgpPVrnarcfcFJCRsfgZRPVo1Azt4KTrkUfKHww73UZ7aU2hbg9KHxEz4eWbJqzqVq",
  "key19": "4QXDPehEzU98txGJ2rf2GaU2GXYp96RvqzQUzTQCxVoqq4KsavDwcdC581qyRyvR1QNqxFyy4L7gkQNhmQzh2un5",
  "key20": "1Uv7gtoGFGr2xU7azyXMKPyx7UXMH91MugB8XSCnpV1MfFSDPzfRZZKM3mAGsJMMYPKNtDxhiNhKMhdr8YGJYXv",
  "key21": "5Y74SAHZTpFC2UYotyXCeXntfXptL8PmmT31cSJfU3bnpUmzwUUF5XHxWVJnkafP1aHd589GyqKmfykF9N6Fu997",
  "key22": "qKmWfvNTFsK1UdojdhK17twZnjWwmVrH483bUZh7jHch9dY7a6yY93u3wcr4pjwSDQV3zXrwCPKVNQkPYRXowv4",
  "key23": "2VoV2FCgUmCBwLzcVYrShfNHGSe9hxSj4wnvHTZkNXCetRTos9Q3vwq75Uw13AmAqbZu4McfDXgpGQTCMekTRP9f",
  "key24": "37TbMaszH9izSa6apgw4kLagRDF5Zdxz7G6GLcZgYMEtU5JoxTJ5sDnqE5FfPCsekEeBiJgJfepiH1zyEAymHNy6",
  "key25": "3k8zQjwTrZbmm914ofEkREftoYTCZd7qJBvqc9HngKzuydHancMdZEE7yfuv5pnEnUvvV9R9fSug6hP1SAht2nyh"
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
