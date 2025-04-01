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
    "2U6Aj7f3VvXjYB5xBzj1q8JdAMRNUMoUyigKAgg4vwLdRpzZ2CmT8cExNfApg1XN5zUKTEwNtkvw21bc1X7YBFwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NrAcxUWCWLGb8wUPnFc37zZiSLCrzUs5jqpkAVwr7kY9umeukJusEaRADZBvWLiyiZB7T8PFpgPenJLvTExdiZs",
  "key1": "vCZhe34G1UDAbjTQjtayuWd89Bma3W4F4Wt5KAvKeugiruMggGrtu7inyjRCsWeEVKpKFQBzxFcpc6cUgEWHDwR",
  "key2": "5Lfx4m5mBXPzzk8MnrRbE4GW1QN2H2TxDFKMn9EYqn4WFrB6epbbaFMy1PXLHJgJFqUgzhzEpzPNLX9kP23KLij1",
  "key3": "3tDh7PgcVNxKd7yAfPjaBcZkBHh78ni6W5ANRCVoFjq2mapTn1hAmNChanyF85PET67dG3vyq9CXg6UF8Y3mZFNM",
  "key4": "3sgFuUQYLs13xqZPCE4CCU4jFb5ACccSnfMH1jgtotHBYZc82CeWe7XZAkfcSeaASxrDothcdRwN6DHKTe2AjnTn",
  "key5": "61sL5euG5DKbVKNP54DpaCWdpK8fEZsdqKCbZUagmkVdmnaJjWAXRDj9pehEknRGZwPEe6T3SNL6dkKMoD2ygN8b",
  "key6": "5VhB5F9EXY3pFFRa1ymx71uciWoDc3vPzvMDUrUhUaPmuu2Veo9C4GsjFUR3QhPmTKqsL2fTfWZWrG5XKVPPPouM",
  "key7": "aVLuv4y2CATWZCAWiDUibGaob3qBYSoeR8SUzGcw9hDWzX7q2o5z1WRPJpTNtZt8rihruAYg2Qcwpo5fyFG9fqj",
  "key8": "gMBRLkdSUgkSswHy166gYiVyqk2knd2ZM4aMBnyvMuWeNW2HJKEM5Lh8T8GByprb8svGVXmaE9RQz13J1XcEL3M",
  "key9": "NNz9cnp5pgDmadsKHQRrHcCAmuoH1M7nkVzkPUhrotAcbMdNEeQoYVE6g3mQ4WPVT376MjmJ6gztRW1N6svmTKi",
  "key10": "3fPtrziYgo7M5ajLMjJzaZ3WDMR2LqzrDTdWqBT4qKoqUWeW1fG8QFeMnd1FePWCjM7P5zqMvES46g1RcPS6N6qn",
  "key11": "3XPqGSZYHNkXj26b47NFq2Q2DEcgakPMRYnz1ZxtkSDHtVKpjjjDUNjp4eBFMboARbfpJHQdVuRSvZ3xNbibw5pc",
  "key12": "2AJpToh5ZH9cWQ3JUzjyPCvtV3Ndkan8rpHyHZLhcgYMcRhEUGKVEaDRsL7J8Lrh7hWnTtJdPMn4uPMkSnwYat9k",
  "key13": "3Z8sGVnxwo1QAo8xeuhJMFpjmcu9fRUJonsc2Sz7FxiR2jRZXHNrCkvS2Zr2HSYn8h1pHU53o5SeRtU6aR57MikJ",
  "key14": "5szVnSQYbxTk4hi9DFcAcBFfeF244wB4THK5bhUfMYrui8EJfiAsQkMgsgBiDgMiJgbmQaWiqG5FpcxFoXXCyscQ",
  "key15": "5fY6ArbsyTTEAYg8DGhRDhpU6ePSYNG7Mw8ofmNWBcQf4m1DckRRHbXPDhb7kRqPPkvuh7Q4FurjcnQnGSaeN9bp",
  "key16": "2aBBvwy6tSeDuqntzoTk2g9UJwrvVHe19gAEFB9bRjUdqyQSdgjr4GqmhkBao7DwXJYetrmnucYoERuQ2ncdUHGg",
  "key17": "3q2qMVFBHjFFpogeWztyDb6jBjmGCDweJBdAXPkrrEMqL4ps8Ha55scmQg4XCJpZjK7JuU3yZDGnRWs693nAgE8w",
  "key18": "kEx3WuiR2jD49GZjxNkdMZrATEShMuoYpLAsApj63eny4BzSiUyE8KFdFkanP9bRA18sRLJ1jPTtpW5kpmWEhcZ",
  "key19": "3ymd6PsZunrU8Egdeg35KBbRLM9iw9wj4jDg6AzxKGAFvzAWtWXZQnsRghzWS6KSUqvVtdxqzYPdgieYj5z6FwdR",
  "key20": "4ixcGSz8MAihZULLpCaiBCWbgZa4dqS4JZYFLnJUEc9mM23D2MRHzwF85MfHfbpKxWijYXNkFCKbs69zYdGi28Ls",
  "key21": "2zSwLuxRCJBB274aAptpDX5F2pPHiHSHVafGRfepdwDyAPBRRHqpXdQu9Giw5bFFzGgrMdJtVecoURJ1oSV9kZfo",
  "key22": "4ZLfZyf7W2TXCwLD6PZBYADgwwzk9HS5eLWx8cYA1KG2ScfmWMt3X6Yxdx5suDiMxGbQ6ZWUSr6M84Ni9TksgQ5V",
  "key23": "2pEwDvUZANTutbiC7YYaND2d9QLLMGYEDeXHLS5z8oRurtKRCczY1kpm4ZvFsLhvcnkgRWWatn9AT7kj1ZJpxMq1",
  "key24": "3fBRqwXdv3qYzUmTEscJ96QZsASFsM2ah6VZPTLi3cr7gtwL6zBpqtanBGgxpBFfySkzyKgPFGq5NBFoCGxU48Mh",
  "key25": "5tGvHxCBnTvvWztgXoGePY96YR6U5NU9yRT9qg8aYJCLK71bneCY6f8yHTsw1GGz986W7aff9v6VkrmegLs1Xq88",
  "key26": "k3Jvcbb9EZa8jd9Uqw31WBQwQbVtyVLbWxwAUaLWt6pahTRJMqJDwKkkJ4gzSJGetwwPJtM5fZSUVGEUyGE5L6a",
  "key27": "67Q6F5pLxvD8VD4tRBHwcifQwvYfJg1n2LCiDGXq1gKtQhepbPQ8q1jLa37FcHz39cMYq87fFdPN72bEFuNHshe2",
  "key28": "AL9JJx5693ya4j2Xj5MHSZZrSTNHfD1teDwYQQP1B7a5mDDULaBDQ4Mk8sGHbfdn4T1hDw3heA1BnMP5PhCMRqk",
  "key29": "5PAsd44XCUnHLxDqUzrS7RYHHGE11A7Ygau9xQFcC6wvuc3twBBC4ciSkeGEuJ79qNEVP3vws5KiKoMjB7sCLEG",
  "key30": "3uUUG3HPUd9FtVQdxhysrbVngvAP6zsK23VqBMobv9yF2g4USC6QSVTNotSWPtx1LZdqi33v33D5tpMBPV7e64D1",
  "key31": "3u5pxBk4yGejjwHj1HHdmogzhHg4uauhnHXqjHiz9RfXvMohq51zwJH7w4V64dytXW5QXTqy2qqs2q6WtZTtrdV9",
  "key32": "4UVu6j6TWgN5V85o5aGsRTWc9KJmRU54ch2SnLchqwSfrrMJ8QVS3K7qcnC3cMeMKhcj9q6CYMgMVW4PZJNz8BUh",
  "key33": "4s76KAgBSZC9jREwTcXCVjM7AuMZcjmmSeueqNjXmVyzwUiDqgj313Nq7P3sPPXXFQUtKon1Ss3aPGTJ22QWQskw",
  "key34": "8v9bwhBmFoAuzeKUfrozNjNLLNCKWRDmH3itxMnXYAdCoDCJGfkcNKiTVTU1nWZu5gCmuft6ADyLrTC5eVA5nYr",
  "key35": "2fBq8ZSteqfe22TxDc5Uo7b9rKYmHnLHqXcwivdkWUsS4u57PQ8c8kBQEYTdPzB35ESoTZbNbsnfAu1H5aP5j5Fs",
  "key36": "rBG5mzu4UugxjW4hVUgVuqEhjAKyhJ75ErWWoTDV2qHEaBf5dU9twKx2fNQiCgwernSsmywgiMXCfcwH9KvMvvw",
  "key37": "4Seuxbmf4VsRPbhPcHnWZ2ShghmeZfuWWTPwrGaT1ZQ3ANr5anJKoAAtkfm4N4LhcTSbsFYQnsjxcSePMYLxuG58",
  "key38": "2XfbTU9o5WtUVxmpjY15HcYHEH9jAYq3GgscKrZcyuHCTtQzoUs6rxPR8fJXDRYdN2nkXjSAQV3dgx1C5jD2Cyh1",
  "key39": "Cc5xxrb9mYz7MwxVqk2tnuzmBtxYqyYJdYUtV1eaYvjDhy1wNJJUZbfc2KSNArngkcA6NsHsBWu2dddj4penw2k",
  "key40": "65NJq2YAia1AxiX2fAm8rpNdWe57qasQNn8XT8rZeWU5LA4Xbh6LgpXNBzAzjTKXzqhmDbg1dqpuVfTwFnVJdSrK",
  "key41": "4QezxY4nGeddZRs2YTh7E35n5BjCQkMoiXfZzVT7fWeHgezuR3Y3sGUTkFh4fGCr2Un5T7JyNQMvnRAYsAUrwn9a",
  "key42": "4ZtfxDfndFev43yJtEhHn5jfg5tc8anUcCKxAc7oVmo8rz1suv4Rj3pjAscHyeWJk5HwmSra7Vk3fYQZudUM9rZU",
  "key43": "24BTLk4Huy3UyT5TTpH56Twmkr6fNABNRZJ42QBUWUSkYqfhtsp1aCE36X7jV5DtrdBGpaez5oEhCeRJT3tUgxZr",
  "key44": "PVU7UqcVBgqcY4q5CaXFbffAivtzQga3J3yYmjLkStnK9ruzCgQh4rDLjXfGYxNMrHNfz19HG7RTx91hVWNzQBc",
  "key45": "3edcD7ypDWZ7kPZFK53krbXA49PLMuu1nxtgMonJdPdo3aWRdN31MUrxQwT7KENRCJbxRBL7iNfks7EbfCWvWhVy",
  "key46": "3hARLrhE1piiTm2VPadSiP7p9aYkUegTptvuY3NJt3Py4byuoa56n5kgCFsH7775NYmrpVRR9K1yXQRABeiqn6aS"
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
