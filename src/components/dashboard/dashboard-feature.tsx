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
    "4eP6Yub763ovEyswzhkFn6ueDbizTYzdETouRTkyy3y3kqNdEHagBTCr3UDpbmYPcpVZGVdx6ZKiSxK2bdLWEQRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QjAs15YfM2CdxziFNT2DrCuM3KTxrBQ3AjwoQuu52Wp7heFHXMQh9sA4fNqcF4ik3F8gxZtJHhWgn9SCSdkvCJC",
  "key1": "2XMVDBrTCw7KhnvhTNa5DBdur3B5eHVoNpTBSUEY2XsAa6Ti95kVnH4ifnsE6pMEG3u8Gg9VCBKHHPxstEaedoKP",
  "key2": "63b8ExGLGVK7Xgc48gUYKPdFNzb6iUED8g1Ap69U9nHexHPnhEp7YcF6miykLKdRHyNW5hLNQtsryEJKjz6oMgXi",
  "key3": "5YiL4Y59KraBUgZQ41nqAsAKvtC3hGerki2yQfY7h18da1nScWxzkCiaZ6xgXfbwwsVRZnhUn2HRxwmWHKLnqM6B",
  "key4": "2aUxxMBDPuXk96BaPRt3nNPiRjUYLH5DRZCEwjhoDLv88usmLGpuN9dwCYcHGnj3jvDQtWxXzTGfkty3LXjPyYU5",
  "key5": "5VxaVxJMWUaF76bKMgXffYnHDTdc1FGSdgkHx3oVhUGuFBErbQWxS6de48nXD2Tyy3tmyDrz2iLeAbciUsHzwMxQ",
  "key6": "3TXRXLrekvCogTACVgouo3UhXAM7UVjYsNzAS9tVpPveawYYaDNjUQMkfb2pJrdzUR3nmzH5xYhy4a8NF2CcTo4A",
  "key7": "3HPd59FPyUMc4XT4tZxFbcB8s3ouYXRWhJ3PGnKdMnpAWgYajrFiUQ4NDdMuQJHyLheSi6w8fQFaxv63uwQeACeD",
  "key8": "goubhkcJBCxbf5g88FvTTNztVCEM6DM969mJFeX5bpjtCnWBFSM5rWtF5sTHJ3nk3xi3cquER5LxWjhckyrmqhG",
  "key9": "2Pqdyoxt7b3q54SGmGFefhw4wRcwSgqnLYSkQCSmCPvAwc6kv8NLHA8ZRjim7GzuvmWtJyogN97MjzjvYoWK5LEo",
  "key10": "2wUvesQGY7jZj6JAireyiE6Lj1V17GK7khKkfRKTmEgjrTZU9hhPT7sf2XzTURHQpYnFNhYWsRcwy3gcSks7ksTf",
  "key11": "3rK4NGF5FYgnsWHDEacy5RmHwMGvGHvof74owkm4ePJkA7UgV9g6dS4ye7HKZunMnW2K7PGb6QsrMmRPr4SLg4eT",
  "key12": "4wV1ASMxasu6c97UVejc2cB3xSndSFj9cosUin44jSnTjjSjaj2WqwW7c42etsQqbgnMRRFJbGK867vxRzw34fYs",
  "key13": "5jQWRahdn7rFDEURj3dc43onBjv2a3dkB4ktrwDUXi6uuruZuvx27YqLbrUgxNX6Q6kzu9c7bz56xNmSRfEowHg4",
  "key14": "4JCbQnXyXjMAyEq43zeVwod1tjB3JPsjbNFsGBoYTyQw18YS4MEJn7SUHu2sbZWMb4MLEkbRBanA7hhQfXQwG4Ym",
  "key15": "Bzf9dDAnYJocFq7aVnTQL6qxHZTuDY6NM3CDhnT89TiAnzvec1b4AE2hP8D5r4TSSriUZPgdcCXRbZxpZzodUKY",
  "key16": "3KMDzWN1bt15E2LgrupTiCjp1qQv5mMW6XfpiuNyqvgMPFj5ureH6TtpJTztF6FXVUSYuZ98aGsqA55jQCwmR8Pq",
  "key17": "u5dVKkqCDsGTmRciCvM9HfbgkH67exT6HDbUcrScbfJmxS4Vou74fCpuQ1iSaBAzZurDPY3ZZgkdmC9YtTcXV36",
  "key18": "Xr6sGRc9mSfgytfw8UJYYDpCFsQkV7wvHr8HdxXhtKzTFXmfnQ1EbQ7ksyP8Fv8BtbV3JEPzkBs2kpWe7bwwUeH",
  "key19": "2Zd3B87pn4aX7psRzfPZLFiT61cLpJUBY18v75B1YSbrEdMU3sGJvBpuopQ1tCeryxUm17aMvnEGyGmdotPMnKFW",
  "key20": "29QJA6h1wz1V37TN2EuozyaaPWDfmFJYqZ8vYa9j8S3jkD4qvhezCV1ZW1qvJTsvxLKTiG6jbQMeK32Z2bXc9LVf",
  "key21": "3wnzoTtY9NDDnjZ5LTebK8U5i6MxfgBCipHsVQXNtDkmBf8c5rgrYrX1yNWBC8rr1iz9CQoyPHaaxQEc9ihJL42T",
  "key22": "4gDFN3vqXwWwcYsNyh1dRRbZeo391hMc7NEKjnYfYFKUptVqhSxuRaWQhrRdHwMv1wyd7XzK1kMk15ExKX8bos49",
  "key23": "5DfDxhseVvLxX4Uq64AtzY9TLpc1kBqvKGpnhgkEAzpurKMBfiEwT92wWyy4zJeUvt2goRrL5gnTYfJB9ftCuR2C",
  "key24": "3tfEtyLsm9oLjU57xu6w52oeD3TjkWnofbT1wKXrcgieJ9yLzXvSWYoqejfvgdGLtzHsRHktnfWEgYZn5aa5LbRA",
  "key25": "4JfneieXAwtycEaUzMVJiVNVz3H8BQ55jvsQ2kkrx6udMw9L6qcovXqUnjfy3kajSAsh5R9ywe9hA8xaGVhSB4v8",
  "key26": "T7vPhFTTw8g3N116FhWFYiKJxjAUpWcmCnm69LpDc2CLt9W3t28nfgrWuaMSeNWDE3Qg62PF1PG74Wc4maTPzjV",
  "key27": "3jhtPL4B7pTFWgnBFmwfAh2GNf3PodXEqScorVwncuzrjg73NkovdptWzVnXhqiLe6K3tgwZfMZATUpyk6bjEDpk",
  "key28": "3gQGRK3ueBmyVxvuMmKTSuAYpazxd1szrXQ41hUiSpwQfzga3eBWRhtYDBJTBQVdGkG2eSLKQDwWyKXgdUb2uyg3"
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
