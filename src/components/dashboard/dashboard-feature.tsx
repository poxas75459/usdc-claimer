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
    "228MQy5NbpFtPb9oCb2JXBfey3U9Ss7Lk9xTKUxKX8Z7dg3ngCQxtajx8XS9SBPKLvmkZYfqQt3FEH7TZgNs2AET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39j1VVay2HwHVcsg2Amhgbr5f2jifzJJwFJXKXyPpJPE73beMDLfgVFLi64wvarV95y8JezNT3UCaQUarrEM995W",
  "key1": "3NqRnCSKQoaY63T6ZWVxTMLErzniovwGL389TopwXKEBE6tyrhfa5R1zqf3t4swdDbCZV7ZhSYmZHvsW5G8FGfy6",
  "key2": "3YtBJrUwXdFuAfMBZRfYYep1BxqtTbGrzpLBYeKt7T2kKu2PKTEWJYxu5BgRTURa49HQDEVZWAkgmZBcs3RBvPXk",
  "key3": "3QKqcpJWEot3uCDiRptyz3YutSA2GRoHmjGUinv7RTsSjTTuPaP7n5N5R2KZ5e96qj8JhjAq1N6XmYZpFXamzBzF",
  "key4": "2HQFaY9Ma1e5TjipLmTjpBmqe8UvZ4mVTjNvYXZSqwkzxQ9X4QTQX8PXZsJS4HZLvr5kFPGgysV7evs7go6fpoEC",
  "key5": "2QXsHTMv5BZ2zixLHdX6hURJEgZt9WrXFeoTV2sVtGXrNesq3pCN3Vrb3CG4KdFHS1AAibx8ZWJZaZQmuR4Z8t3T",
  "key6": "5cxy1KTFuRAcwsHHgRZfCv942XjjDqUcHDYBViemiWENcTGuZ7ZLv1spucr4EkycSwEg9a6TCfLeQkkHXWtz8ii2",
  "key7": "4mZjzEb6zepcBg1xVSoQLtEaGLCsgXVQdBCcsmVEy9bdZVuXhw9RAZvCCpgU4wHp485mpm8vsoqSH4yBDJkQ2fTo",
  "key8": "5zwVQNm9N6A2g4LBWxUWStDWtoDdswdpFND9KooaBAsU2RfCzuERJ4AJ8o34fqGwYAVZXvCauQUVQNKNdDEE6pYa",
  "key9": "2zz8cebNB3tMueHf3GwjHkSpF8shDQBqiMr341Cz3qvuz3R7PHBGUXcqL8aKxTxpEVDXEkswZ2n8B1rTQuV5srUd",
  "key10": "2Zv5szd2nuiqBLU9RvCsTh1fJxrZLoa5PtoiL9fV4ucbssjCCDNa9xBWs15rtnFWP13uWT4GNaS8YXt3cJ7hRGDc",
  "key11": "3fMytGukvyZAyxt11h26mKNTWtNBCDi9efvAfqReaukQTCyVvyfTJSybLK9bDaHpdPPHiZVFvVbthBQLVz2G313G",
  "key12": "5SxJSc4FULuYZGd5MAJqrfU2c7kNtuDEPkeWwu58avJq238PjDfgFM4kstSVTVSTzqetB68e2U6qVYZtokS1dDfm",
  "key13": "fR37xu6hzVBShbyoXqPJTMiARfhhwZuTxdCWc6uLiwcwMfEUhkyQHp5bxgt8CxGR3QgEPzqMmKw2RBF88U312oS",
  "key14": "4yXFFDDWJNANkYZXdHrsw5Tcd9mSf3tszmvmSGDp2A5yxvbKzRNUDCutCwbaErpnoRLCtbypdBgc4FzEyWfmCgrY",
  "key15": "3PJcHQ24d3CZvYxXU2RwZe7eEi7jN3coJg2bgpb5YP4zxpo4pjDHErcJMnMpcAxWXUQqXgVfQuvQRSAJ6qg62vzR",
  "key16": "4oDsEeXcm7jWWyBgJgQGqcfGiCmU5GXdn9t5cBbc9zhoVFJKAZj9ZxxUSGuRf8j89H1nWKjDSyPm5qjdXYp7mBDW",
  "key17": "bo2YxTTQXSR6fvFccAVEdwMC2yz8qj1UF58pMFLRPWmYjUmoXji1h6UewWpfGKUK5AgexnS69qsdNp6hs78MYWk",
  "key18": "2V6KHdp2rNKzqF9JH3HkuoMcaaKYjMfHQpEtqXAu71acG7BhwRMESGokq6FM76UegsY2tRoTGSCSsRj9sGR7yDge",
  "key19": "2F8KtuHUwCuDRg9wbHfCcVBBRiKDGHCU4R5qkhqDxVGEnvgR2hgu6S3Zq7Z1bqWJsmg5Jb2RqkekJkbFyr8kLHrC",
  "key20": "4FHM1KEapFCj9acVNJkfe7mzJpVt718oEuPmTLPCQK4zSJ2t9Ns9Thg1yAdrVthPi5SapVc62sQEZN35JwoKoLLL",
  "key21": "4WhXMxzUqzGrpmrwNDUgiSYWkFqNbLJFY4rmPoovMYDDLMuYa9Cz1MR21Pzsqnfw6KnbjiPNN8zu4kRpbv8onVva",
  "key22": "2S2sCLxk8481wS3XpPhEVuDJJV39SxB9rsoUBN4STVrEuk1saN4hQnXb2HuPLJTD16k7rvBbEj5LfWf5bRAD4Wod",
  "key23": "2Xxk7WaTAKcWe21eaLYHGmLeMv7XkY4cbmKWjoPHJsDT4koKjAvCH3cNEN5RzDsh8SWJkDgzcu6EYp5trr48uWCw",
  "key24": "3cydPxQof59at9RaTzsLbfjjQNqXDsCHwSay8dheQCQ2YfkfvnEaiCi2QCcUo5uQNvjUGTnfmSUjcEj4np6RKR2a",
  "key25": "3dPUigZxWrf8va8q1DzNBqugHmja9xSxXRsrfeUY1kQwg6oY94t8gKVsVEQVwAyRKfxVZiZDjpTH8vCGYzBtrUuG",
  "key26": "4TiBq89X5fWg99zUBWThDJZrqYZrRyHkZJCf77eHHjRmWVh8bcuGuqQohycmcevmDSX8o3XZTVoyPvpnnJBZmn5Y",
  "key27": "R57YkpCFBnS97KUyrXMLsCMVLPQibrRsWL6TBW3X48TEMJU6Bqyq1Hynk6xQwB268nfVNLRcFGRG3yMr9bQvAfy",
  "key28": "3bDZNMPPiZ8vYNhJKP9pjxmm1bJdndVXY35JYnzz8TbYp6LF3whz8P13fMCDMsBUVbexQbeyAx9tmtPuBV6uq67U",
  "key29": "44cmws7yCuMAyCshsn7MM9Qd77kKpzuxzX5psDmhn5BFWK4ymbtQX9jKHotBPtxDSnG24kUjwgxTk7JoeMs9WvE7"
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
