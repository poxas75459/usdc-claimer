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
    "24Gy3iK2JT8yszWuhivm73hnFDNefiYafW5mYDqgQp4Js81M6iLkmKAzMbzrBzojPYcUNBjscZnpoeojRdGE521T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sGo8Q4RowPpZBdWmswjkre349stF78ubiRjEPUbiyoSq3Qwo3vtM17dajbYiPmoHSJqzxqcw6FWvrVs3fkcnntP",
  "key1": "122Ga8mmZuzfhmJ3rokGGdUTXipgfpHMA3b8cWE7GM9RHe7a4KSPHzgR7jXs52jByQV1MWUF4PFHHDYEN4hKTJK7",
  "key2": "qn5dV4PP9ZY6mbUMCfetdqbbBfsWToNv2tT53K8foq9viTkanTYcKkWf3m2ACdeMs8oP4mP9A95S47rLE4nyTqp",
  "key3": "WdpeFTfY8mdrLDAPe7AHRwcyeDYxc32nMB3enAB3SDdngA4K7evJKhNg2FT2dEdKkzKGmvR9ExfXdqtFZuPmZaF",
  "key4": "54sHNjeNxoiDZWEruFYYF4T3UhYz7Uu1zMZ9XJT15H1mZvS5y3EFCsqhxTUwMNMd7HFsE5dV2nydtttFZ4NANB3M",
  "key5": "5329GUqFYuc2imnqQKYrS9SnV5fHk5wN38i5zcUic9xp2WE8YQs3RC2VvK4C5q93MY8ADwPM7uSCXs9EYdh78jcy",
  "key6": "2NQ6KcYU1WdqqCcuvRgZvpxSpFMFRB7rNFKqtLRfTZAGo4ERDpnin31tHoEbYh6uey9rCFV6N7tYcRgYPRjeJJ6M",
  "key7": "KhpM9PkV5di7TE1Q9s2yfjFc75VwpHrhkS2BzKnksWX8hFAxBnSHATmq6ue9sZxny7RHjHwLkEyDDtVGzHG7QzB",
  "key8": "4BcGarg254itndjtr6vi6xcbx9qwGQN4m75JELQeY8rcsKnEu5xqfojsJ2s9FF8siQkb5HGjNSD1ZYtuV8GcuTac",
  "key9": "29UTzB69GSMv4zo5nYUgsuY6kSyxsrvqNcNugCmHc7492M19pBrmQhV8RKQiTQphTxuqRbYE72MAnwmBc9JAcCUT",
  "key10": "2HofpVvboi3DRFNd1hgmGsz2aZvmt3KtnGV9iTBhwgcGhVytRawyHhyiL5JDVt7MXNPt8kCmkqK3JtCYKXrURaZB",
  "key11": "57pWgewYpqnELKAnGFEtBmXzP6BL9J9qVJXYVr5gGcAUE1TQ8SLAsLQWKVC9W2mPb1KSAJUwoztMhvs1c3vaERmi",
  "key12": "ARKdkfuWjYSeS56EHEJuxqD21WqjhbK95c73JDYSgfjXX2h6bSWqEREUgVaJLCxpVeoMGRPqu5bQN8uhvM2VkTD",
  "key13": "EFuxAGXKQcRApRJLCSUp1fQjZbKVvg7h5b7qTbJfYLvfNodrhZZjjvWBuBhTK3xJGydRrgneSAAW3YVrmKZiEPQ",
  "key14": "5K5J2E9KsjwRW3RAVSHxiP47WTxMMG3hyjGL58Pbu5mnp8LXRWRrqncmHCJRWZc4EZNVwgoLERmvnUu5yvBe3aSg",
  "key15": "4XTZqU4pWKMGUyb5Q5pTuR6SZrk2C4ShchUhs7dPSbxYTJEVkqPoi67mQu4cktwp2YcnddVUnoWoxRkWXQCvraoY",
  "key16": "2MNQ8wEK5XqQjTRoXgH3YxKdfgTkWcWThUmZvj9G34eXcjQQoDPxVaPPE7GmkG1qoK8LjtA9KzKEpgp7tjK5N71o",
  "key17": "MJiKAu7cjYwmRW3EbG363n1G7BbmcanYTrXrWJrrmQeHjf6bbPtU7kHuojYmdvGCNQ5MX7W1rpyGwbUbVJ8g31C",
  "key18": "476eECtMEk8Qt5kqeeuJD1V6L6v4T8PtKiYco6tWzFyhfHf8EHBPURsb4oJiungLCy8iUQVvQSahZ5iWKLw9N8ip",
  "key19": "5avDf4MrnTTxahAJK1hdQD1XeWvNoeAo8rPi35Zq5bPqq8dhtsMT9WyssqSe7B8yeEgFPVBTQfa9m2tnxHM6nZZN",
  "key20": "3KNSs9LESTexTa46dnJFidqCkwAKQ98qe7RJnSukw197obahEhUgESbUWuTAFCRNkaMgTPZf7nBPQteEjtjiYFZu",
  "key21": "5Cw2So7TphKZ3hcQmsJUvRr4bF4u984thghtx62nUUxGMSw16EggZkrvebU92PXoCLF1VBA4NVsEAwqY9dXE1zyS",
  "key22": "j41cyhuDZuYtcJQ1ZXjndaZF1MhWHupbh8CPu8vRiBUSGEnuBZDVF1HTAyZL9uh2REmdCSFXpw2ZvqeP938xDDL",
  "key23": "52QwESg6zsGsqCeuGjzxPq6HakiUELBgi4r2ZPqnrUH3bX5dZGTRLJUG4NbnYL2gCBu2KMFzJ1KnmyjWjZ28o6Mv",
  "key24": "2fSLwE7xiDN8DSZMRdXPVrYVcYt3A68gLSa2LBfEyQvdum3Xdp7kJrLptSqug8tE7CaSAp9hxedRx8U5dH3jD5Tu",
  "key25": "3i29JBf98d6EgxU9Kqx7zSGmxoDv1gn8GVwEXqWiDr9Knytd8oHSJHU99TP2f3ipgVwVBLVp8MaWBM7y9ex2E2qB",
  "key26": "57nVjbrnwvEUdrGL8nUVjkeK1aG46UjBwaZmgk67qufgMED8PKLRF132SRnAtNJZtEAFdV8ZFNt8RzHAkBHwLR3Z",
  "key27": "2ZXQC65ScHnJEZ8KnfGzu1C9FP32QQ8eDwgiQ3cCYG8ZHDRaRSRFWhJ2DgTNZUW1p9NxGi3zQBXNF3bqu3EiNrRL"
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
