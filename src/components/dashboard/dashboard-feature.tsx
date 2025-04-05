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
    "5HBKMiw8wc6MApdPB5M4bb7Rbqe1pV7gyZyFvtCuuFyNkzsGMEQYGRPxq5dkjWVifQ68FZ13L2iBriWwYwZjHjh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YcB62Ku9xh4yPxEdntq75N4Y9jCaDcQ3EFsfn38DXuTE9kTUgfE4SMTDRUSJFgejouhsAtkukvm4KfjLUKeBv8B",
  "key1": "3L2j2Rhm7696vqtskrNkGiNvSmbMmhPC4H3jB7F47BK7fcoA5svihVkE56Ls2nkex5DSieW4xYi36VW92BEfvdTp",
  "key2": "24f8kRJ44gs2fxFD4yGtGbgyv3FM3zEXPqvDpJUbWGaqEf7i7hViZFSGULPBvmK3rh2CZq4W6dXUydEKAcG9SAb9",
  "key3": "4p4anJxib6fshuTnK4C7JY1KKwGeZRipAtHu5AiDXkvjwPoJJJqvpzdxRUXQ7iFSGsVeFHBpqK7tw5Tp4jDQhQYT",
  "key4": "4tqmEnzBY5kYjfX7pB2UNjDuQQBsiEu2w4mqsm4KxEC845BqdxvgqNEiQK5C5Shk39fmn14GZEPgpjtLEofR1tAR",
  "key5": "TnPVN1D3fiieff7988YshFgHmBQK2PLCDSdskbpXzvi1ZoTmenqRCxsDXsV6JdPHLStCUBhDTPbfWdyvGiPnvdA",
  "key6": "5HVcCa3r1DvjUG6dpGuHtXA7nx79145QaSNvqqyUmr5QN5xNTNP9JVpvuDRujShe9PCbLP3MPgCyU8ptsWp8USvg",
  "key7": "4Uwvm8xQf383iHjjmcY8dRvUg7j667mWY2w8MGeBVDN6QnG39PLpV2FkdrFpFN87QBAmdK1wxtNcZe6pc8VnmL8c",
  "key8": "5hsdn9LKPDqYtRT4PcePGmJ22Dp7TuQjJBmrgsM72h9bYpLNymfsHDpYq1393puAXgMHfT1J14JZRzEw5CeKkzz2",
  "key9": "4WheJEyG1RZDHgYaaq8rhtAyGz6VB3p2QvtP6d4jTk5vVAsPTaXiLtW1upEWB4GJMPGhibiU5aJV5hPyGB7D8x3V",
  "key10": "5p6PMhLww7ZfrhzYC7njeoeJ16brWtvTPfDo6b13AT4KKsXjZzesr7B1fjynY6jf1585AycQW82EJtMaAk8c7uhC",
  "key11": "3evrU7jfdAnrowAdjbf9TuG5YzuZPQMbTnjRcGM3goG2FRbV1s5qN3Q92h9e8woVLLmNZjmqioUhmtvR6XNPHJ7H",
  "key12": "45ongvTKi2RNhh1fqv4bV7nPfhtCct6RnHnGNP7tnDpDrvfn4K16AHTPENaxUk1vmzgshpToZaVTkYz5peYnhAYT",
  "key13": "59w6Tj7Nad3A5Jj26HRr5eyMCX1rMcWyxcBJqm1aMgaFAXGRAskKk7rCMD1LFmkdZwNDieCeKKkrq5bZYix9hnvR",
  "key14": "4sUanYke7f6WLAMp1qfkyvAZMwdasbKDeQUzUacJyHoQrcDYgWDp65ko9V9Zg8pFn7mCtQUYRXopEnPz5ZkpCwHw",
  "key15": "3YmQMUF9yepwMmvScbYC5rEmsbjTWUfpeLmk3cF32smp3YQovYu6DS7bWP4bpB4ytDgins2K5ftKHhFZ6BoKcsap",
  "key16": "XZyx2xrxAuBVYmn9Ps2dvnv4etWN7xCpmgAYx2shVMaVy8o61imzT3DNbJFXXvM1K5ekjLpfQxm42eB2mwc39uq",
  "key17": "1rdxcgVeYwPzjHJT5nmtdarHvA3bF5xsyzPt3e97ggHenctCjP3nQCwLXABcKRmnNmTbE8uiKzaZgZff8pF6eSS",
  "key18": "43szqhSxLWwCiU3pnSyrZG2R7a9cZz5Ts61hsEFTD2WzYyL9z8ZUFQBwhbaE9qq1TtniE1t2naEaS7YMJiwn3Wgm",
  "key19": "n6amin6Tt2cQpXEUKFnQQwRhwg6HNUbzX34qLxjaW1qTvaz9zu9HpSvM9weymffRKwg9Sgf3KEeBJdFA1sgNYbY",
  "key20": "4kQASMMPezR2bUhgZHYcUsCAhkDgqYjmacC6qhgUXTZVWnemxMemSCUdaDgfNwPYSmHyudXG1y3mXZdncJGiZhJi",
  "key21": "5n7niWJWLpJdNgGKLN732uUx6posfrjXdofad5QKcMGzS2kvj1ifvs4nZZvoSZUZv48eVh26TQSxgzaN5WjKSLzh",
  "key22": "31D9AaKNWgBwZTrb2F1yjegZtVPZ4KAo5BbNJzfaWZ7mxKsDUny14ayTT2SWFe59B9P1XBwaNMB7m1rYb3djbYCW",
  "key23": "26REHuSZpjVaZV5GSE5ma31oDWHVzwhprFtT6iLE1A3JaAszdn85QixvKpVY6jgWr8CsExGpz7yR3S268WP2Zexc",
  "key24": "3d18zSbG7tyUqksP6Hj2VwNnfArXrM1HMXjxfZdSkrm977zmVsmzzGJwpu4bMvTq23vMTNLzeejPKYn6r9ygtpvp",
  "key25": "4zb6EkD7RFwFKvo9kmN4ZGbXUXoi541t4hSQtQgtKkTxycJck5gAr4KqAgEdJAV8xhHgYsz68veCdMRVWf27ZWFD"
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
