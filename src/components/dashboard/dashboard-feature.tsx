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
    "M48JbvaZhCFt7BLBZhQMHQzNPWx1bTi2N5TshSgFZMctqaQy6y6QWeFhyEApbDmLT21n1YFxxUR63pKzexFbm4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42cGKMTcquFfncX7hJYm8oAb2FBekYRXAedPDpUymAMmPBepPH48T8p8gzmj1hxbEYddwaEpxD6VbVzwSXQx1CVE",
  "key1": "KgmkLfJs41geeTxL2qY8sPXAfaPf1KjDV7ZJ9ioGE5odjuUFVK7aaB6mZX1y9D5PybFYByVB4o1uv3rFp3CsfNj",
  "key2": "4vXDdsCoEsLi49mQaahMkfTbymaj1UJLYRFiBbxqEr6bGp1K3ex11g1tzD1CmteRmc7LGyJ8oH8TertCmr1UpToX",
  "key3": "614R3mmo9QfqgPXQQnVhGQAZNT369BcZeBa9XKQuM4W89mLBkSK7f531jy6VmVtUr46dJhnYEe1GXKdFWXuf5Jy3",
  "key4": "3HAATrER7LerAN6ufYkqNKro9u9u3FYnaPeLeBsW2vVmBBtj4YAnmZeSp43AikzfKcqyaamR5bnwUNhaPfRL1XD5",
  "key5": "38PV5tEAttG92VYU78pqxLeTUXmpDM1TrJ73BKDudjrp1gpPmhrN6V8uSoRuatXGdc8Fr3VGYJ4zDSgYAhRe5FyD",
  "key6": "4XXt7s3QiCRbgw8LNwKGbshbNG6dG38teUaAVQY9391YdyJDzs7ULSmohUSjLPJkpaK5Afw7uGkAvHEMYvcMGFdf",
  "key7": "5sTLJwXxJnFyyLn6UjGgKd5pntiaVTwSnEFNEBLYT2Rb1EYhGzcdPqtcC2P5RjDTaJePFcGTasrKyfpnu7Y2bAVG",
  "key8": "5fT2vgBaLG4Du4imPXNkVuX8c9TqqoPM3BrihRAhQUENNMFyUidTD9RyCpwQPqwfzdzHazxFF4SmryB8DoiU9pMZ",
  "key9": "2ZXEndEBqX4GEqfo67DUyW5LKxQ12yfiMhBxBL5X2EWZgNUxBQjmJ8LS7N5d52QDHtZapdqWH267j6bPSWpNXdzt",
  "key10": "4MNwFzhGfRdjaceQ5uuwJPmPutEFdeASaFhcXmPWAnvfBg4rKETxE8c2CXj98X6REewLXnzw7vFFqZk7nBrutG6x",
  "key11": "3sZmdpnLkUjBFatHbj8tbypBajfUvrQwy7w7h6bMmiyUGFR7MRJHYSSFUFTnadVC17XzH539diCVNSK8xrPYG7Lb",
  "key12": "5i4dMrXUT3eqsE2VDzo3WdL5cxx7e4jmvZ15svD4FsoK45MREkaEQAqJRB5xwDz5mYLorpbyfRLBXzTtqSnoZ3f2",
  "key13": "1fHh2rwGrpKro8P247FXnfrAQG3NMF9Y7CoPBrmHzrWe6VjT7nPb1SnMXkJX5MDX1X6CFqoszhNvFVrffGQkiYf",
  "key14": "rYYFYH7xsWVfbiqKCrqhNKLKj2gTb5QRP1xityrBVnc8azeY8p5wRV8inEPxYAdQCFa2756g7BeLrttDpnvE3YR",
  "key15": "46hU6f4hTZSpH9dVjYAfxzsvi9UPMj91bBSu86ViycyzknpMVYAhrEYjoi2ktUFV5WXcKqJFjegJDLvvKcGZNBCQ",
  "key16": "3XSaPwSoB631E1XgmfvStBHEDgRJQd1E5opsyfuzEASFYBacaVh89mh2zNVPnrB7a8urXNGm5ZVZya7JMvJ8wGYU",
  "key17": "4BZJc8JBbRzuCciUkjGKPCGcBKYXixQTsU2HZSKpd4Ba6dj33MBASE2E9e7xn2rHKag5Dz5hWzFPyStucWuNDknL",
  "key18": "3NDbFKqYbn2sJwPWZKAgLUAepNxCANDZUHycJdKPyPojdMMCBwSdZB2eTfuwjgxtEZu1wpGeeGfppQC3cXWfq5HU",
  "key19": "4RE6iPMG9Ac2fPUVv5j2r8pL2q2jshbpvF3SpZ9YXUBFDB5oVkvkVcUgWBbguX6fZ3tAA4EgDkisj3KKzUvXCNXv",
  "key20": "5HDerXnbHcv557ktwHSBWrM6KX9sX4kJPVL3Z4rpfZvxLNFhWB94wwpXfUkvVQ26UNnrf2Zq6tSEWJZm7AQqGjY8",
  "key21": "K41eggkzBBPcJqWRHTDoa1kGREvMUUnKT1DYymmsUTU18UpgNZzPX3WPjUgGwdtEG7tAFTZHwEsa9EWMukayeFC",
  "key22": "kFQFH7MZQD2kY232prqMpRy3R4BTppF8EEQUjSC2bBfA8j8CiSyuGzYcHuPpRYp9sva7RTUWLteFhH4LGFgY8A6",
  "key23": "46mHrg7o1zB8WuDyhbSJ2VEjwbePURUU6pHxDi3mmbXw9ahyb7cmYDLvBbMgDJG92VVbmxgUDf6o7YC298MkrVrx",
  "key24": "28RNWAh3M8yAUjVWxAvEm4aXv8mHKTxZZ39X8qGu7RiEAAfDfS9LEsN9sR3K3zxTN4ddStyhBVhs4cyyo7crQcVk"
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
