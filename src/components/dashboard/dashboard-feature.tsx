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
    "2ujvV1RxP6FJirsW9kk91MJMZhULv5GcDWcGSgVmvfyqYacWzarbjSUWRngfDigCYbn1tprHhwGpCkcPWezr5w2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fhs5CugMBQxtDnqx1ddS9XdjmQLUp2JKdDT5wucMsopCvgwSX6r6M5R7HhEyr6EQxou9XM8Uiu6UDF46xc2ELGM",
  "key1": "qCqXbpV8x78WVC2rHQBmeH6bqWrHf58REdtx9BxpPiVsaVMT64yhve6xSDrZKtB3jNb8nQf8AQLyd74Y1N3eAUs",
  "key2": "5s3BM4RV94agyyEndHT4pgdrkPVwcnMTBk2RzQrYJEGFbCiGPfV1XHKxd6Y1izvWYWhvdjwcX4uPuc14iFSr7X7P",
  "key3": "2z9ohs9Ace6cLYk5kL8GPem9MrEWbBM2yWx2LxKcREhFos1WBcCnFrDThWuQ1PGSTA53cSyCqy1QBUhoy4awXg7B",
  "key4": "24NbTgCGkyrQdeqSYY5iAYbXwZs617JrxTUPcBz9fPmr3e6U6LPMMKdX79zPxkUzzCLmNPxupJWM2f8Ph8W4RkqV",
  "key5": "213x57no5AUFrpYbqw5BWjpDwLGFP6iGUdhbfknXyueCNTbKo3zg19CXK23iAS1Jf5RgCMJueEZyszh5eftiMGkc",
  "key6": "3dartq5EnymHgktnAayuVarMfdDZocw9y5tKUfgXENbW5hYDr8VG7d9z4VjgWZXNgYqrqBhqs5uhBZNv5RXu9i5Z",
  "key7": "evmdBBaKa9XL7tQDM7K9jdwdukjfHuQiDfW586n7naP3ugchx91Ay1ENqJJ9m1wehEr89P7qkCsrweTJSYUBnHr",
  "key8": "L8grDfzh6TJPfzeHh5LrmQkojP8k2RhnHgXAr4D9gqQcBdNLGncWkk7FQtGfvoQYuTinizCjMGk21mErzTEeyZi",
  "key9": "5XCAcJX8HZVAqtG8XoouB23cp9PYzSBkonUXP2axF5NvURzr7DbKz1JSF4uDfikqMJRu1qn3ujUqyGTWLU33nwUv",
  "key10": "4JbfUYpVYsQL4VQMwgzwnPMvsWMbHs1sBsvFLmUqPizbvqK2Tv8yPbkNKPd1isMkMcEaaKJZntjCm5rJRCH2FqR2",
  "key11": "2d194gBmhSoHgnvusysnfPehbche4kJx4mgxPa5E4spyHGZk6aYcYEGTXi86TZzk3eefXeeemky1o6EDUPSNfz8R",
  "key12": "4qyzUB1xRjh3TsXGAg5cvmFrqa2w77cA7Ai2sj3aADLXQXE2pg8gW1PWQPsvKTNPwvzZdvgNiakGe2jsncXwp24z",
  "key13": "43t8x3W9TLP9CZ8GqQuZbmM6Yt5UGp2yaDC9QYksZtXfZKcnRJZKueLWRJ7U4K9XYSxcNHdZAEHD53sVqAgjnavK",
  "key14": "2JEyu2BoecCQ2iPDydiHGZaRekp99FKWHHxmHDpNM4gFTAUa8cmKYrR1GpihH1GrjoQMRwH6qgSi1v2tWmgyCXrZ",
  "key15": "26BVUWsaZUEgHrJfqtzkm4vwNfo94wgBz7j2pfPoh7fo6nS9eegXgLYWhuT5ou9sGonWDwSwaPABMxberL6HQgLA",
  "key16": "Uc9Pe31Vjb3mBgC5PtKjdeNmWst8eFEBnwYUom6X7k8LuJbJqC8ALyDY9dJYva8abest8ESPg85tsM4T8uypB1T",
  "key17": "39gr95X3fMeJ5VbzCKMh5BZdK9ea9gAWWRXdmM8EGuqBBpe8Zcc2u1KrGCx2JLnymFqWUrPvcX3s1xQnqhnL4S7A",
  "key18": "DaYXwH5RU5uDrzpuZsw56fe8zmNTYuUcgbyVHofkXrMAnv3myJX2BrRZ1VxXbk8zo1Ei99qiYci6LrKG8Abdr5v",
  "key19": "2kb5cib3EP16Ee9vnQn5RoCNR6G2N35iVTLPPWgXKfjq9oMXa8BiSpgGUyApcT8QoQCTA6sGoNzPoG2Zw1wt6qzh",
  "key20": "3aSNCfnqZzFNC4ZbQqzKpLCBQocZiNUmyXzs9ug6GLLVr4KnitKhHHVT45QkJWrttHuYGovX2wB4csSsrfwcbUeo",
  "key21": "5mYFk5i8GupcFPmv9KgxjFCQPyeWHv5i9QUraGuWVxfD71NqwPvyaZHdwygHJzufbhkwLBiLM43iTFunCrE14Cms",
  "key22": "43dH5Dtj4VR8Z5q5nTnn8ZuHS77bDHRUKhKgL3bkp5bYFWNi6YtVZPYyy2bU6gfD9EzbdrnJXEPehQWNAyMnE5pF",
  "key23": "67kvDToxkCZmg9UcUh7ENw5tBtKbALR13rp7TgZ62Y73sHceTh8KKJwNHR8fNVC6T7bS8UAkZiY955StGUEXXW2t",
  "key24": "3CrwB6o6k3kHwNVcawbCkF7BiEv1tZwzsHjUMNTN4SdsnwP1T1zxWo65a9QqcvYYR7MYoQPfvQYeDD83hC2Zb2cn",
  "key25": "5TWVM9F1UPx64m8g3utKuP1U2SzbQZ9nxTkkK29kWBKggF5CmDfYAsvnbdCCJhfWCr7HaAU7dwDDhF3Ht1UiL5Nr",
  "key26": "3TtsVGYV8mSJoZMhrsBakGr9h2vTptDYBcXQhA8TT12TnfMfFpwbVyqnKSZXVJYV2RMJB69jrP77mgHzJsVtT16",
  "key27": "4BLywFREA5fVqjtpggNuJmV9JZ3uNPDS9htHvmNm2Wj5jURHaoWU1tir5hsoZL69dUEDbnsKv1bbVz56BBLtBVo2",
  "key28": "VmMP68mfS99fHGaJ6kQsBLhFChnBrKAF7y34voxnFuNfx8wQp6BMALisL4FMiSfWAxR5zGwaX7AuRiGG4mhcAZw",
  "key29": "3hFjiamBXhXJP669VRZhcruYovMtUY6jkNQTZ6TFGfKnb7nBmB9WT8cWund5hLwkpRkqGpU1GNkA36JWiWPQNDrx",
  "key30": "6VKS3shiQ8W2hoxnxoqEKJXCECBsEC6GeKfgRsMi3enPjVZpR1o5XbpPoNrsF1jqbiWkTos8VvfmztUrZDp4cg5",
  "key31": "Pw5rktJH5buFXgN5GFC9a3z63y3KrrPN3KPWsK1g8GsFBukzgWfMjvTuhdm1amQZ91GohynGFZJzQH4TDWC23C6",
  "key32": "2rGhgo18uqsUTm4cuzAG4EpcPnzU8ChbqfA8yoUQewfGjY5QiADrWmXtKu5p6mCzvKzCDbLHu6GgfjNpDpYkJ7c4",
  "key33": "p2QHYCLmL3x6Kw7AkXjMTbrRSPKsyUZbAsHkorWQq3jD4iUPccvP9eJF6drUK8A4B4xCpMHJXe7HWveCzTn3SGp"
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
