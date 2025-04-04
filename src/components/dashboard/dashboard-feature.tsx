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
    "22KzjwUuBdxXhW69zeweU3taiZbrcoDzG7hgx7QCg867mDFvadpcnSqG2mvMBwPdknLiC7Rn3ncAVUgvkRatuBUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TmK7p9pwgYUKwv4HGE8Jwbmfi4dV4eqNJQFw7yhNkZnptw4WYFXTTT37c7i2yNjy7is4g9dcDaeH6H6Xa2QdmcY",
  "key1": "2QosS2514eUF3dM9U32wRETciGR1CeijXCVvjTyFZiSxfSqsxpKsEg7QDekAEjSuLbQ1m1Dswc2pdu6s2aio3jsD",
  "key2": "BPZeVnV9h6tQNKq5osKBTGyo9Jfic9Hvo9X3X3zhQfeuQqqJoCHvmzomEPvy5HmK4bZ1dT3kghpvGmwhDpvtyZT",
  "key3": "33yPuf23dWa2Zb2qkQ9fJkDrGQesGmVmjZ2dczTHu3dfdhPDJnAZE37weYEG5ofozUknigwy7fmM2sHftCoU7Yu",
  "key4": "4HSazk1opgF2WEUrk913bDcMDWb2ePNCFyN5gNi6bpsBMD4f2DPWToL9ox4MerVgi4hqWkDrSwtZgk2n2vNp3ve5",
  "key5": "5PjqsViDxfC2aD2Pin2mjCn5VSRCLeH4Q9VK5S2i7v3Ki2dnFQVbKFgrps3r4MF12vrrc43cVZkhPxj9rsDEQoqE",
  "key6": "2yJEKWWwekxDdLMxcBaQgUqUG3cXpZN6fbP6wRmQxvKrMe6mGhv8XUXu46GT6hrEF6pDnsNsZ53gbVSXNAgdSNmU",
  "key7": "2upM5NDyumYVZieknWpNTueDM1eEDjAVZbaTiUr9fFnjV5zdFuz5NgYhjLp3guWaub5yfUUU9xN8hbHDBgr9Gpin",
  "key8": "4jn7GBPvHCY5XECJSqFevFWEDqZXmVqYLiSDPEgU6VGt8ZmBNpa2b5uzGaum5Mz5tTzVjH9v6QK2woDv3HYU63J2",
  "key9": "4x2JfmXqiQfSYcuLapqRELQxUewHCeuZNDpPnPWBSDAXrpuNzV12Ltmku6gNyuYkpBe99Pk3RTadF7jcRr23gRH7",
  "key10": "4cgfXfJ1sJDvMKWg3E6FvqD4zxE284nQZwJS8tJ9umAA8MeBNggGjPagzqCsPQcH8GctsdnLfJ6fbPuNbw4sy6aq",
  "key11": "39eQF3GReEU2hsxbRzZFPnE4U4x7eNcsbnsPz29rZgDcuMzxregnqR2i1AQBUyhY7tQVHaacTgk4Czmm2GRiUzhD",
  "key12": "3McYkReuq6GLpsHm7kxJP1s9L91n4gyRiS3oWDR4N4ERTCokXYU9Xva8TgthiK8DbEns2P3qGY1ux6CXC6yGAxgF",
  "key13": "5e2oZrAXK6pJJ5UEcg5dUKcwxgYn34ybNrUg6PxZdoRazmnhCCqoLcPNgNKFHF3ngEQS4PBP3ngrBnhdpaf8Z52w",
  "key14": "252N5XjJvB8SKZtZU3JjwEZ6vpv6MKCoszPu21DjKLb8Po7jLY7JYvFAXVP8c9h84BmMGHvjPAgRaP9xWeD6Y8mg",
  "key15": "2RZxB3hV3joCcCpsvkygTscKAs2yMr14kWsFe6bSRAAFv1SnePL13fL1LuGkRvtJ3NFBSnw1seJcvH9TypSusSkw",
  "key16": "2ZTUbvy7PF63gy97TSNwCNj8zPggT3VTcdemrPCdvJFW5Dr6PjudAoaUYqHLZxJ9HHVXqFZ7s4VrAkMmD8Dfbesf",
  "key17": "3vWhYZq3NoGMRg7cFS5mwQFZKta3VavDBicePQVBaghzwWt8sMjqEWp9bAqFjXw8TaFrWhMS6GLUHoDQTECSwiZ7",
  "key18": "67ZJXN7TtVRpTFRt3EBnSVm6yMnhwa4mnpCGbAxwT6Q3tA4siCBQg8Kv4MSGPm2YmKpnBkHrRYa9SgjiJE583T6n",
  "key19": "3PJFAkweLwav1Lwp1zxTddb26MxkSXowFRg9wYJVxr2Zfj46jm6Ps6kZ6KB3Mk929Ha85p2AnnNsMPfCrzhDcqWJ",
  "key20": "ygkjsgTvEbnrTPtsqBMHLwurvdEjTvmgVrQhYHNXgLKCRsevUpwLbXFPeQVguPhBhhbZ7TxRqh3KJhtpxzxCahV",
  "key21": "63Pk3fXZqZ9UvCRjkFpndqX22bGyxRZppRHHkN8de6wGJNgwz9ttnXAoaPGPFJiMxQ3DEgySGyyM7qVAKe29Ruve",
  "key22": "5kYF7uoDsCtWpCRRQ8C2xTNF9RFww7HTrfkQ7DRCKYjB1oFcYunqjU2xQYeqiyifPo8wQQvd2bLH6iiNwwBvEyCp",
  "key23": "iBak2cyjvUqp7a98ujHdbU9geGDfdTAqFamPg6S4xCA5nmdePxyGKu3F4kEsrqZhMHptbgCDKAPiYD81vwtP3dh",
  "key24": "4Ey3buz3ihxjKwZFkMSKppMHk37yThWovr34HsFrnXVY84gBmY6PXrFuAqNch9turvpp7tAPFTY6N1hQ9Tx8sYsH",
  "key25": "4UhCDF4Yi5SAcy6sLx4tywjzHekqBHGhGcBjW9PdJLEexgdPqtaLCRkc5PywHNusyxVZrLABmBfbyPk84xKKZPCV",
  "key26": "2Fuf1vSkMop2vhDSa2EZxxuhuqAufE41XJ8hXdAEQ2T9PYeDSzYLpnzCEsDPePtigmBDn7NWP1pwRmuy1efZmewx",
  "key27": "xq1KMdG9hpvNRJGZB7zS8EQaWS9bSEynG2rrN8PZmxrkv53wtgwcdFpb2whVSzFf7yLPnBwAwxyQswgrm7XhkJs",
  "key28": "4MwrXmDf9F9Qw2bug5F1A2fPcc8fP4Mzxcg1F56aWJVc3uf8wGFkKLiUYuAESbtK239PFbcQkK5tfryX9YVijA8L",
  "key29": "xdw9bkV5WHZqfYqxJ6N7HCMqjn9KAUiKJE4XxkYnCWfChxx7qoU5Dp3yAw6uPeuYgSB7ovogfN3eDwUc23auMUT",
  "key30": "4w6uTdQdVBC9fyRp7ekGW4c9NSY2vbEThhtUS9SSdifDtNsvKhdrLuXrZRt7bx4DAVybNuzUgWLJDvbjCUEMXfZn",
  "key31": "vQsvxTXp7WCwR4UBXgU7ttjSsDciMgdTEs9EL5ZjmXKuaLK5Y8QdSFVS6xQiW1p7HMcpdVyHkThyYim6p5LCZqR",
  "key32": "3YoWFjHpf9hQZydPmnmDUqbjwv2n7hbKzPyvEYm7ghjvDR6BdNzp1Pf5moeiYhJrvJQhmQ4q5Vyim8EP79PfuAL8",
  "key33": "43bf9ybJmiaoepp3MnoDqUyfzqjsxgSrdxJPHeT3A5QKCmbwB7aEeS86YweBa1Uf5YfTR9o4VE4QeQ2e2oetK87P",
  "key34": "4TDyPMqrExvgi2pyRfAvAkPmAJvuCsAXgrhUqAXvsYa6Kxdgi72p8fLXhjPNrSrapPQU3MFHbnUcp6qTazjTHfFu",
  "key35": "2UzjFRv79JtyfhrJDA1CFSmVXWj1S3iVCLeGr3BQYiyezbpJjTenoX96T2uG9DrfupApGiKrWRSgpEuXWqTU6Vak",
  "key36": "tfCsppoeAx8whSYaEXS2XfVLaqWVQeNDBKdj1LDywWwRocbqnzhjKn88BDdTE2ZCc1emJZdyaVfDqnseyZDihrL",
  "key37": "tsTCyDspLihX4Uv6vaJULNU2g7EMTWFrUpUcAoNVwz9DRoeKnogrzizTvPzsPFm12EGrTwegjPNfTuC8aFqxNs7",
  "key38": "67gttdiUKndpYYCcrkrKLzmNZ4dbFQTpgh7frWyuDTm5curdTVcQ6r75aUPiR4zH6HjfUKZDz5HqtYu2b6KocMR6",
  "key39": "5PvLciFWobwYumgBVB19ZPwp2E4nhvJg3w31mb7LKCQhaRAjTqWQU8oodfcTAgLLdJuoDe5HjCoaaT7sNpHMRrfe",
  "key40": "3mpN3J3p6m9mgmJh1kY1tGjZZSy5RKWKug6uSQAf1h2GjLnwNjUWtduCGrnThqLxra2uQxWzHU8MhEf3EnyW4NTd",
  "key41": "pv6LwtiWb19wTURQd7LXN8tADomUFzDJDXFA9puChmPiVXrnysggkbyA1c6nnmyju7QVDtSFVnQzXm624eN4BM5",
  "key42": "5hS9RdHa1eg7s6awNtT57iVSkh2JSYSoB8Tei9uAjKQ4G15EC9B9VBH9HHEfkQMFQeBRoV7NtsZQG6gExA2sVPWo"
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
