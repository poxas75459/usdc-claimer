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
    "3z7wwLAiQKLZQp63HFbmEho4A9rPAXAPhAanJF3kShnEbSbJuvjAuAZL8RmYjKcXZUTbxGhgdpmVXyb58XifEa7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FuzhibndwDaKPVvVnNZFiyrbS43v2kiDYpZ962YZn2W9C8JLmDt2bfs2YzKZygA4WT3C3uXjQ9boPmwLwcDEKZB",
  "key1": "5A2fowHgtAdit1RmQNW2Cw6sUkkvgTEAT8uEjLXpu9sSHpUFEcRspnBdT2REbwQS15skUQx1KDyVQBU47gu2R9tY",
  "key2": "icyaUP6p9sB4TXx67s6w65BhCWTTNDs1LKs7cqfgUfu3QuVxVdFYgy79RTPUT72cyrtbGA6eURbpt9eDSdHH5dz",
  "key3": "43VuRwevPd3zsPYk9WeyEEECm22pceT5wVRdo57pud4DgTCCBK2SLZuQ1xsrkYjgaNwtEPMLHNo5QDVkSfrkGa1z",
  "key4": "5HsFAH7kgaCATSsQFgRXWzTMpMv84ACKarTEKGy9SJNUc7drVw79hqmNgLbQgenRzDR3iAe3ERTwUXjHLMKncHYH",
  "key5": "5xsUMU8J31mcqjrkMJKoLkELXCHPdnaXemmUsG53NP4xZdLqk9TdMyoeoBjX6kZh23Q73hxDqxXb2KFif1erkXCm",
  "key6": "2baZA9A7vWtBuKaJNLHGhCfiQt341egR1N5GAb2ikj2iWHj9gjCQUQKk7GESQ56mzZ7JTXRi6q6KKjMUkTWcUq7q",
  "key7": "4fPJL1L6sKRcuVEBzM9ikCdHafoCABvQEKdLE2vEV93MT5X61x2Wk6AmCqQpZP6NdLML8sTFaKv1B4McF9UcHvEE",
  "key8": "2jPjits9d9UV9uVNAtGdf3FiG1uAMndKdTedW8WCmGTfRiz2d5XUZDLs2xHReUxfMhL96KMqiRWfSrAnSchKzsd9",
  "key9": "67Qenybcua4KJ1ZytbHH1fr4ZJ1KxQFaAT22ucLtgp7fNFJxW6VDVXdkH9iKAx8dEHKF82QFrBHe6jiruSjESBo1",
  "key10": "a5Dom4gPBM1AcakQwRYAiex5YChxuL1LTm5NdbZtjbQrzZLFVANZbt6mJ9eeWLdtqRgyRmYLXuyFhavJTvqhtHf",
  "key11": "56myNKk8Vtiow6itCgrej7pFD5z7asJTPAvMT6i6QeqPfK8FtLXi52vZtCjR5e7dFiRKnQ4WZYvWF6wxohWnM1ek",
  "key12": "35foeHyydpgAABbgVs7H8BeziP6yDVtk4gaCvXSogBXcrbNehCyuXbUifLDVSr6Kn9kD8Qj568Q8aMkmmLFjKRSi",
  "key13": "2kx9j6DfnCY3jZo3TrNtLeYCDMnHzUQCM4KgaLUg9KbxMZu4imy6nKNMr2FoqFwnWThvjNZhDq9MNDVEJw3f1Kqo",
  "key14": "Z6ha8QavZXSb5VcUfqB275yLmwo8725ogcd2MkmLXc151vUnGDDNj74i7fLGg3KB4x9sCAh5zvxnicTWvMTzPtz",
  "key15": "2PDXRqpuaNZKDwXFszyBBqmy4fcwfxcm2UMwFWbk3rj6jJP4RKDmTpByZ26bZQFDjx1fNNdZ5g1RVWenThwjwanE",
  "key16": "43FCMadPpgdBuTMdLz2Uu9vSErPXSNi1XtCXoJoqfKzi11wQMupKrNzrT9tANWfWySq6F2gdCJNvErEuQWooVNSB",
  "key17": "YAN8UsmGbYCbFing1DyqDBpHrq5XLSQfL2BLko5ycTadpfUTvhzhLH3PARdn3zf7omp81XXSH7fQSS5zbU3hpZf",
  "key18": "4EqU2f3oL3onbW5YkbmuVvhpZALABEnEQ5dLpsAm7DswWZzzxmAyhZ1s1Jcuozf19xccj9vC8f55yt5WmfQrofDY",
  "key19": "7U2xm9bxXuspwKrqptWEArLc67TaNv6pSAibvGA8zNYirW29KbeWqQLueRW73HrLqWQFQZhX9XhfWHx4sVzacWg",
  "key20": "JrJ9vEkyCrh33pbXDUjZ8s88gH6HPHDkcJgDDhaRBpGqjBsMdf9xdfxLqrJgTQ723dzoXMQV1YYepvo92F1SEGG",
  "key21": "pUCWtuf6baYnitQm6yrtPu8QzP2N5j1a1YDpD24NrMuihNH6ABvAog8p2mRkVvP7Wy5tJm1Av5BMKVbVNUA8PHc",
  "key22": "2WkdNEAfWN5dkWNx2VFiiFg3kbYHG97WrBofvJwJj7rVo7vhuhmBnXSVWwJphR6tZLav4eTdnb77kimFmyeJz8hU",
  "key23": "5CsL3T4Q2FtMhCuJD1F4DVy7Q91MH43Ttcg982516UrwDQbjTdKNEZBZkH1ggxFr7MXQ8sirvUdS5L5pHWUxyUMc",
  "key24": "4LRM9oJ56bYMHrLF8oxrt1vSjCrtfUd44YpuHSS1z1w6V2UsMMVhVGA7EmLpwdZNo153jwEP9nHaw2kZGYGQSzcB",
  "key25": "FuoKneMDDUQ9dmAbcMruQwbhTYjyeAX98MNkhvUvhijhGp9dvFJX9DaYYNhyPmj7qBSzZrukBsF175q9dBAkSXY"
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
