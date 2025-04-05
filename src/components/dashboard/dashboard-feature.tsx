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
    "64a76bDQ4nTnR9VWPLrLVQ2BxX9h4B2cfTYQU4abFSNXmELPXPmMrAoguDP1HiQ9RYM4a5cd9LQ876CL8ZmXLr8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56pSmieeCEnSPTcmKYUu5bjHSiK5E8wpcfbYL1QLMH3L7amSjsk33KLeegdTvY9b5k7ZqLRmmSH7xFcAAiK7Ksy8",
  "key1": "48oe9sW6YSRC9yRbhZxn2k1JMkN26Kbcf9i747L18zven8oQ5mt1T1pbCthgw1EBwgzmZhVHqKJbavNYWkFeWfxX",
  "key2": "eTn35p5HniPaSXQ8YSB1CxrdXaorsmqoTMLjeH2nHMy1x6XD3qwyimxE1C8CXrhPdkY2xWmJRf6ZER8Yq8Kaz6F",
  "key3": "5QHcxE8UhqL73zVx3b3mVGiyesjm87coQd3fYzjfKXtwUA1nm2Tg7eeA6BgDECmoCLDpzdAjRuQjEvMwLn9ck8Yq",
  "key4": "2qPqNq2iKPDoM8Njv7disYEAqP6Rj4XND1BrgkbrVVdfRmEnTWzNsCq5porFTuMmCPEFBc2hA8ay388KRSL5x2sd",
  "key5": "5HY1y3DhvDGapCZBwajSevbJRi1JZEe6D7pQQdgFLVCyrst2FGjjzCwSb4o6H9GYaayaARcBNaMvMV53QtRpbv4H",
  "key6": "3F2jmdyjxagr5z6PZfYL51Jp9nFPyb3svvpNSZpe35Pwp8DNgPLkUY1bLCU7DkUnqVKXJCgeHxxWc4NU5r7e1wAr",
  "key7": "2NskB7b7bhftNbxA6JLdHagLnHe7gmSHSzzh7d2GdAsKroPuxScp8ri5gs1iCWbqfAT94XbTcPb1nR9AfD77vYp6",
  "key8": "PpigV3NjWz6pFr4dHkHkdZh2DXBQN33YorXGiJrSp6sHoeiFTMwGTgQSMZHMJiqkus22Y8GyQHj62eAKQW6VH19",
  "key9": "3CvYvnkC82eRcYA4YSoxTcYUN8CDecmDeS5CNyAqr8UiDU9p6Nb4UjFJSCT2t4E9W8ZMR5Lmx7CpLQ3DBRPzMgyf",
  "key10": "57FX16s82ygafoyJibfo1kgpCopFkaV4aNEXnvqjDXB4PQc1nnzCrTBBSeoS6KBMb3GcU41wgCribMVt52EhrvG4",
  "key11": "5ZHR5XdDsddfqRGJGEdupVd535SXadyeMwwcF25UrUs7TU3UMauyxYJ6Hts9VUBZHFXDhmAnfmKj2nkFFifbtzBC",
  "key12": "243oHh1T1empoJ959G6UsRHcsMPeVPkZW7YyUd4yHQ4sofAyyS5yn2AgtPsNAZbEGXZTS8muJ49kYzEg2hAmybnP",
  "key13": "3AfF8CQZxrpvXFeVZdhUq4jT5vR5dBWzJT74LK7MjowdXicYRCkniDaiQCNvwVJKj1Bp3fTtrJnmqbpPjfFsGTmC",
  "key14": "5SJxZrA68F37P7D8Sc7riKcwYLQcQXFpGbKmL5SZ2ucEGMghgPvxghGN7LWq1Tf1pCKvaf3N1rEpi4H6BNNHLDXG",
  "key15": "5WHg45aVpDhThE7VFkk6ysGNV912K7vzQcrFYc2djV5HyCy1yv7RYfRPVovPBhUsWFvR5xx1B9yJgem5nys31fLV",
  "key16": "38F9qbb6omwhvza8XuZE91J9KUxcFaErMKMEwb513mhbzHrARKJ4zKMgxsahbHsXEL2uARfVyRGhqNf38vUNa6Jf",
  "key17": "2hbngdiN4LLsmxa4jQLcYtN1Wf7mjfUTdvAxjtta3nirZREwaRsBwtPauqzoQMrS6iXBqe4NtqYPpDbHyLKY4YFB",
  "key18": "2LaVQs4A4m9xYTubAz7yQE9TYQHYLKQK9rzLiDimzQFdg6SujWHpGbagaMoUEf5KjRmTQda8HZqdogDY6shd7XP8",
  "key19": "5HJB4eeUpxpjGoMJYfMBTHyjHERHXfPnLRrEjWJBu8bHeDYxcEamjTKmS73d4vKZeUua7LXufhaZDNGsKAmAvQzx",
  "key20": "4iqj6AZCJaAW9U8BGADTqgradWMFkynbcaopr76D6ThDN87b32rwf2Hq4atDCUDcrs4He31GxcvhYkPpaSqNZ91C",
  "key21": "63aQqGARchAP9CdhUcin2ubs37mkogsdKXpDBCn7ysroH5EoXSwMbDJ32hTAkjNKk8XhVAxu4qW6BKy7HFSMa6H5",
  "key22": "2z8FhQiSdvHxn4HBWQUUNzgmyPxKCRtf8wUYDSwpvJpY9Y2xmC8mqhnuuLhJzonRJUJ3XNCGuEZP7szEdCxEUME2",
  "key23": "45JgwioHLboUG6yk8qRtSJeuzfeGp3b8hqV3kpC4WcGqzNK4XZ6DA5nNzVTdHMhP6DtvvQ4HbJUPUDzoAcd2P14H",
  "key24": "391oJ8rbfgjKfaTFSAu7SkB3weUYKVrqppAh8o9B1KdWMrbDcYcEsbZaZ6XCcQECWjBoSMAb5hXHRTnXApjhdhvP"
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
