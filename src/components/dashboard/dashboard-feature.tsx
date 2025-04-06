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
    "4NSfBVGQ1khX1ZmfMwRVnzDtG6QobbkiU8TH4uiwQ6jyjRxXcGzmVpqQerk3iPHYYXHo97vthV557Zs5mXXCiZkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8ivXfNuWoGxzdZtbgP6VYDh5sd9J9FbZPaj8MzRaaAZYEzMDGgBZB257RjRxepz21GUf2ihzGEk7DNvZQWRhuwg",
  "key1": "5zjYtdaVmtVDagmVMzufsBVZ82JoZnxr89QvFe8eT3drMvAkymLQkKzMqoUEZe6RGnMSyoR4Wvvu6QVNTgibqBdb",
  "key2": "34PojRR5eBFpTTe1yj37fJnFWfPz6zi7U74BJyV1wqRy8PrnFi4K5sFrdPGKLpWnwKue5JbERKwgVZVDc6zeT2KW",
  "key3": "5jPZoREV4ZfioBtZJCfUSJ3gtsM4MdqzkGYX4TNDXH4CQMzFLLBrFFspgttY2Z4TqawYY5TSNgkTAyv44HH3PxUM",
  "key4": "35i3EBMWBQTG7RBUBWVHHz6naVw3652UMJncdTgA7nVy9UGmcEFShAVj87w8HKQZ3Y5YXgGYGfFATsj5FtSjBRb6",
  "key5": "44nfWGD4BXWUi5dCKwBi91hTiXh8FfZvUTteoG5eoonPc8ZZsTwVZm2PXezXhh1nVYb6bE2pQcXJXKb5e8gn6NpR",
  "key6": "5hecWMRg5BLvJY1HbpMLgKiRWvmqCDscBrCFX8hLLWJmGEVFfUSeHyUYQQbZC57a49Mi5Ljz2YCKXw2kZEx1oVFC",
  "key7": "51iacTjrUybjozYt5VrkzT4weG3AUK1X3sjZ7YQ4uGYunVNAZrEKySokvBNiDZzDeKXEUhvghhaHt3sfkQFB5VMg",
  "key8": "3chHrNFPGKysuditGMfPKBG1d5kjesv4U7cuqNQmYAGWsQY5MyP7GcuA4UGgzwdnKHrt1Ptyqsx2Qt6paXH89EhU",
  "key9": "3HcSCkoDXKwzSUi9rLWgXva67J7iK4WmBRVFDsU5yneVY4sgxDsf5DapFpzeLTPgnRTGoNe1wAWDSoTvGXnhMdEZ",
  "key10": "2MM7A3uskwSzg1mtn2iX7PKJRhqA6BBuiWJHMrEB5tRNEq6jherRrK2HguMG4eU6c1guW6jf1YgbtWx4Uu2fHuE5",
  "key11": "3SyHJftY2VETSoo5X7ChJpjdNbXYdfJuTm4zB2zwEqcA8wEY1H8aRzD8nDzSRneJxYuCeo6XBbCHPS2hcndraMqA",
  "key12": "2Vbgi8uhsCt5R576XB8EU4TUUBwue6esHgx53As87aT6h4iYuL3FDD2uqfzX5CdjJKWV42smK9ZFDpSAXr1b3N5S",
  "key13": "raFSdsihmc7uYT1Vt7t66qgvubm5qrZkrschJ3kmZFAkgn2qh17mR8iJ9heppGS9zd29o6G6xEwp4honFQybWc9",
  "key14": "284163kYMH67BH2v7dUL1nL8h71HeP5bhkwTrBUrTUEh52xanj4N63HRGsFS3Bc2srGN3KAJVqU2ZjBfL8RFQbJ5",
  "key15": "2jMTWb4t6vhUJ51WoQoDeukWWshXzmoy3QmEqLnQGn2KDd4UuLsYJmQgibwQ3bnrmypdahLs7pVQ3CthbtZRkKFt",
  "key16": "4UBUmio6K2wBdzF2F6VKbKsVFEMHxPMUaJJYf9PE4EnTRkjoPmQyUEntE4gBhFkEtHAdpC2HVVRMRCDHufpbDHy6",
  "key17": "4Q6upBNQjqNK8utC4kabeSBYgapqdhMtGbRcCrALV1g7rfS6gp4wGWnNYKoe6QhW8RJ1bqd62FRT5vJ4P7uxpVS4",
  "key18": "5xXeNLTyuciz2tt3LZPVKrn2AftzAJXCJF8AUsMxsoJWeifohAAvxDr7BgYco9hof2xDAxzytZksLkj6WyFki3R2",
  "key19": "FuvSsYaFx2X1LJXUU7hwbzbdw5SRaYg6eRXPnuGcy7AGg9xoznRHiwLXXvGPMwvvnmZwGsHnB9truEBmSpPwRVf",
  "key20": "3mdnr9mo9YEXAi1pFXfHyrkgShvgietZwoU561CiHMRC67iHN1HYd6DERALzsqVugmroSHY7VtLMJK5krMzJWr1D",
  "key21": "3SnB4mcHHUVWFwkMJCsUCj1535RTFqxsWAfVBv3RhWMAUcKxqCW5JraEqyaEvhPZxJpisrHoYd1LQQ7pm2hZpp2D",
  "key22": "53oEGPnH6fegcunb8PTet7d16FzVAFZn2CcqxeMMrVKMNi5HDN2wmUvALw5GFeYwXQaAsbR18fLVDkCZ165PuJDF",
  "key23": "3iHCY15wjpkdGJEN3CQHGa9SwtYBtHj2Dn5FXn2de3uW75yUZDtBH571ejZTetHqyDDJG91sLnHDGgeRgEKX2YBo",
  "key24": "3gnavUY5j8aq5oyEG2ih11XtmTSVSpcbh8wJq9jcse3UHzSiuAZ4NixZRgzYDzV1NvZpuqcBAzJ9okq78oHbDmnP",
  "key25": "2GbpbLNQCFnBdqnNb5kxrW2gRmwcoeDfSzQfvsKkacVXuGBYhQfuTHNcC1BWK6pV8cexx8Pm5PEutp7Gh6iFXq63",
  "key26": "8hvknanpKoT5D3mXuDyFWuAkojmm4KUBVGKdS8Z3NHJbgc1CBmHYCe4LWuDLCeLXWBviniMXh6Ar7csnNse9pMQ",
  "key27": "4mCABdJALbA8C5kgfmLmE8dKSQfMmMRDZa6zJBbGEDEa5bTu82d9VvR5pW9EMz5fTb6P52RLSUStKDmcwes4J29R",
  "key28": "3KDFZbG6L7dgpivHbb86PmfBGcXq6JkctB2mRwMzus3TD7KksKaGxMb6UC8bSY5qeKhqTUttV2Wi3c23kug4FK7K",
  "key29": "4oboFvGFMfDzLEBCbHZzQQTEeoJEpWwy7fGVz4tRJH8wgRmgGL4VxD8bThk9gznee6NHYrTJyqNQTLSkbieykcDi"
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
