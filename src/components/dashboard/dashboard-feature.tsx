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
    "LUrxEGBvdRuRVZyS9oW8AmvsMYC7mkg4gpH9KHShaDKq9eFxooi2QLowYXUooZraazULC5EkKVBGjL8u6szJFb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qkTBU7iTVnFPKfaR9bZMWCY88wyMneDcvURAhenuce7Qx2Ty8fU58RN7ZzNyUwvnYEnVVZ1hEZNkccbLepvP2bQ",
  "key1": "3sD9UUK8uWgrzSkB1t9s5doDaSQH7rg25ZWkuxMNrbzC4e2UX9daF1wN327G912EjYbWbrkTTpqB2XE96FgBmD1D",
  "key2": "4cfpsUgWU2NAnmqgexrePEH6tnuzUxnm4YFZ4FN9WwU3Ww93Qj5cS8w1w4fMRkTbc4cKFDm8Eyj29MYenJ3UAuSq",
  "key3": "5c9xSbeAppZEthS2XxCJgqNDJ6FciojP7KFQUJL4oqzV7GUD9WmnVNvF9fHaNubFQemUrkfRsoJWqC68z5ZZwz1Q",
  "key4": "2gh7WJDUGi5LVGdF8kC3RgnoamnHDTVXAxvhUpMZNoB4S4s7mAB8eAYgnYX99RtLrhVFANsJKe5XtUX3AsDDWyPq",
  "key5": "44SioRc57pRUuRABx63MtJcCeWF59cnsJEdb3iJ88e6DecM7scKQeS5E3Wt42BmeFG8oBhvE5rSnUsVkE6kBBe2e",
  "key6": "4tk3ycZxBb9N7d1SXoZhEq75cKJgny2PBw52uG7PWpYrMyabTN1bDaYxY6g9ifUnQ9H2at4xDx8bB4ztAddYbLra",
  "key7": "3QMcfDLwkqeQJAhaTe8KMw5DbQNQ1f78xUiKgPtray1vUaJnoE5RSZQG9zMVn63JamiyJ6JWDDpCmGZkzqo8oFjX",
  "key8": "5SjWgUMQ3YtRKecw1hgzZgLnAAyVScAiM6j8QT5kk4LAYPMBz54ADeZ5byT5w1mmvSvbYSPAtqadCiKz364YGkeg",
  "key9": "jrbEin1CRw6oReJEa1iUmwnScz28635qr9ZozEQDxS4UPkLzr9iUbvgKqwda7qanmD4yxmSYgBrQRyifXLnXQ1S",
  "key10": "4aNPBEogQczxe4edzmUZuALSZXMbBi3ZizTk28GuuFY7YD3i6Ck1cotJD6GQN4mWBhyDDkqereykreHTKByGCLp8",
  "key11": "aahfwkiNCsrNRTK8XfYRD8Uahi5aSaRk7eECX7wvNhsn9FB4aVizvvWHjU4NZmbmuKheBw9qx86hbUSs1XY44eX",
  "key12": "5jy7FMvsJpfUHRwi7Cx8TJMNBKX252ZnU5dEwAWcsjtV4aKWLe8oLPvVz9fKCsEojTiKmkV7gFtMBdu2DhKUhkK1",
  "key13": "2c1ak8ymX3fk8jorz9UyNek5BZHUyWQyVpXoNXFUtwjSgKhZzc4xy8xR7urkXrNMdeisfVzB91vdZ35ECMr11Kvx",
  "key14": "35ZYgATtGtXfXfN91SQAyS2soGftTNzFn4hRmsE48dUhe7cDQtY9x1mSxvxzXzd3GvLTF8WhkhPChMmtaRxLgBJT",
  "key15": "4cipCxWmMimKUZbq6B3YCJPoGBCmdjgw1aGZKM14SYAmDmYutChwMSzewH1ZuPLKt9L8qbvtijnSWmBrJAWrKL6n",
  "key16": "3XcSqR6d659QdM5Mx4wM7MVLFAnJVYdSFdB9ikWV4Bj6oZCSLcoj1DfRDgNcH2ihYDjXPdvu38DV448MGB9Vjd3T",
  "key17": "3hyHLcKywNnNmkFkQW72n2iuhAaoa8ppi6CAGKmJoqiGqC8utjiHCS68EHm6wLeL8Gfyerrxcrjk4eqsE2JfAjXE",
  "key18": "9ek7WQtSsQ24d9EHx3K4Xe2vUTqwsHwf3QwgRZSxwvLmGJpqe7ptjaU49mhHioXWMzwfYCpm7t5DwP6jM6geS4x",
  "key19": "4YQvfT3ex6MPi5dfxm5cgjMBSJxBusZhvRp6yLwCeozmL9dQ4Vham2dKyUJQMa7U4PxaD5TQcZZdUuGuCJ5wkLpe",
  "key20": "2PPEgBEDhJdDCskrKa8TtKDNDTyN1GcojX7GoHwBYaDKFdmRT2MY5yRPd7yPt2rBnd2VRCMaBQHo4GpeZmXoy4Mr",
  "key21": "D8QQWNPBUVd8kTPuxad1N9YyXwexggmU8T8BWiaDrk6L6AvZYaTe51RsozAnDi4VCqUYGxhzD8WzoP6R6Zmveny",
  "key22": "5Y2zmsvfhSFVzENiBGoPkPjFz4PqWCdLCzKjZYKSaL5r4DCHkPdLbRQ5Q6tkCNxTCXD5cLTZbJHRYe59HBSdJFiE",
  "key23": "52qhFFz2H15RvNfwzpkjAkzePAEaUq4KuP6XfEzxT4ekuxMkCQUwRFnswEPkP26PP2xVC6gPoebZAqdLcstD7Etv",
  "key24": "3PKLMjCyLZsFBCSDKjfE7vCVqmkvfZMiTLVkGX2eD9NLAr6LcdMfeH6DvnNiUN7ru1x7URJZkjMAbMoabpSPZ9Gp"
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
