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
    "5gGpiMzt7PYpPRDpxDgWAVH4S19KhjPw88ZWxV2SWenm1YCDyAJm96rheqa28CKkt4rgjFehhfc7oCUxZ6vCKtqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wBPHacnzah9yEVtbBVUCtJsiimrRM1jeoAAkLwn7vE8UuifjjCmnvUMixhgAT3Ed7pWiMix5hL28noxHb9BBvAN",
  "key1": "3ZipirbaoUMj5CPHtvcswEU78jeSKBEJnsf2rXeUxbmckE4jEfLVHkpzcDNzbyd2o8AndUNA8xFtSbr6psymfeGV",
  "key2": "hTXRR5pnsxVgzWFWjjnnrG6tB8wCcC16VqWnbBA2J3FgsjWVU4woe9TRpe1wwFzy8YtWg8HMm8CD7qNt29L1UsJ",
  "key3": "5BM5EKKe7xas3LvpgqpKsdm95DGAue12RT5jm4ggD4q8AGTFYkXq4tQMMkwh6c3SJPKoNUvdRMuJejy5dMUzCKrk",
  "key4": "2p3zGqYLjbFVJuSeLdz84ChyTEWoR9e3TK9VBAn4AK1ECAq4nzxnfV6rLWHj7oBvjFfVXzh5hVrt6H9Vtto1gMfB",
  "key5": "4pPKuWFJD3T1tKuHGFQBGMRLq87ixg2LK59TL66YVZRZ65uHcMkdm7j5P7p9bCeiPVimkw482jCrpkyQL615Zj9J",
  "key6": "5u4GbbsvMTcCJRymbzq9UrLaqZRHdA3ffEFgpmGdpRB9FAu1VMHNpgrkxmQ4HyqxNnvxoyPMHAEbyGxWuf7DrUtM",
  "key7": "2fMgZmdo2WdKdXcGgfwJkV9DMvVSyCzWMJFi6LaGMPT257cu11FNQh36Eq3EkV4ZTwhoPFp4N7YvTBjVVjzQe6vF",
  "key8": "Y95T4dsgn8PbdmJFdzKYeFcdC5HRW1GWGwaJ7RDRxuF27kXf1hqEXrXSogSfEdQxL3JENb85PJCSUX4FBt976jg",
  "key9": "631tC7Bxc3ux38KnNo62VBaygm63cpS6Fhbtj7BDagcEFP9ZsEjyJcZfNhn6rM545hLuAwCu8DXcj4fdysVmKyNh",
  "key10": "3YCTrgZcyQXyR97ipsnKSqPWwLroxLFgBMbhfy8KpcDjX6LxttJvaQM1osKGfJiK3zPviY6yxQnMVkAeSKyXr4Jh",
  "key11": "45XWy9hXWhn3H8YYs6Qvfh9aMTTww9neWeqqi3xPBq7wWyeFGgkatufKAQMEVdaqWeH2r9C5rLTXoxaCzqo7254t",
  "key12": "3JCkQ5Zq2wf2bJBUnXqVXGF6FryaC2ryiKyVEJP7wUhEtwqm6FUP8KVSWaP5an2mdbaz1MU5m8z9stSm4jY7ePDo",
  "key13": "BUvgkmL7cEFi8yd2VXeSVTChagZw19XcoE6GJMrdUf1ViESvZswYL9HqguMruHgqrBFhk6z4GqwYauBep5VATqa",
  "key14": "5cybhEhahPe24mxYjjzjkzSwFaGZ3sAJxbAwm8d1BXNx68DzbEcLpjwotoJaqGv8rHaWuPFn2NsS6xXXTTPrKyog",
  "key15": "3BAUZTdFdvjsSqLmxnoxLA1kBpPQSHDzZ7ndprT1uCSGSTnMbURUfAuoKGeGGYTyweGd67C527CKYaBpTffmAmy6",
  "key16": "4WAdGQsZzhAdwVDi4aeym9hacJKvCTibS8HaJmyePBuxjmL6AdZhbxnjFPw2qxqZXoNW7evMDyziPDbU4ue9qGDk",
  "key17": "bqreo7VgfbUq5tFzGVo51bNLfzxTjd1XAFYz2ADGYCjKJan5236j6db9j8cpLafjcJTrfFyV6qonF2nyhYz53gJ",
  "key18": "nWNHZu75QyhVGiRPwFa6cZ96PqH94TC7o8LHzs9cdqUw12YwcNFmm5MRASBTHy1QWRukMMtdvTY4FNQnhjiQubx",
  "key19": "3CpyzKjQqJr81PqQ1h8mnAVwFAzmnKKiXbdNjarowGuu8yMtyCzbNhEPUnLBkwLADWoWnBrPLkdho3DHr7jxFLVW",
  "key20": "3ydFXHw3YNPFTzeTUz1bmVNGzoBjdC7Ps26sU6VFQ445xzZqyhHm411urtEAM9xRDbfyBRYKzgekpLwGPbu24aBo",
  "key21": "3bRGsFLfoXTJjz1xzZB3KMvzZJfeWbkt3jqsTxQjYb7ekM2gj3AXgXEGF2vpjmFzSijCUzApo87PdspyPQtYyUqE",
  "key22": "4yR68JWYHNptuV5f1kLpcfuGy5vf5idAiWW2iZFwrWwGHk6XMWQgXdpWPgvf4xziugzX2M7ZxYTZdnVLje87UaF",
  "key23": "4kfNcDgBmxG4edNU64dV8GsVV1yDbx4e9xGfk7JgFDU965sAGoz1PZ3qoVmqRJnsLjCTp7fdExfardyLtsjS8yG1",
  "key24": "4vCkwG4ei89w2oNm4QS9cNvMMUAS6m9z8jR1nBum2oSs1YNmTSB7vdoPndNSXB1osr3DBi2kHcyL46XbnpYooDj7",
  "key25": "3RqrECiUiN3ARUJa4e3Mxw35zcPYH9vA2Da6ATwERyuCxcHPrHb79XumAdyJSZpJN4MNGkt3js8WSkrRZuqgyyWq",
  "key26": "RPj9GagLFnxFJbS8uuDpcQdFX6AszpwyHKrBh9EYSGuDMuYptewLPhVdeyXjfqQqQwAHhfSpfG1G3KDRed7uuJ7",
  "key27": "4zNy6KynrboNLiztQsasdfwBEkjRNpsUi7Hm6HFohdbeyt6vuk8pVhK6gyQpoHtDq6XMaSjhtyJeXCW75bMb8GYh",
  "key28": "5JZRjQ7RtBQKuDWoVLxfUfdu2yBhPK4dqZgNeLu7mZbfq1ytvMt1NYR3hQ2SknEa7ZsiJQe4peHjkk2J8Q1L39VT",
  "key29": "2XVu4o8jcjCMsZe5ERYcxx8mjsdT93uP1qXXDJUCP4kiwUofyWT3WtiS1JKupyMX1FwkhgpBevrMphE62iXuf8dN",
  "key30": "5R8PAW8581Dfj4B49qujfbnG4wj5pzSFJQX7HVRQVhHLXpSV85J1SqDgu1CBHAhy7VHRg1roEU5kUC2xuTk1uNvE",
  "key31": "weQk7h95vNF71Z7hiRJo9XRgByEGZkTtfuZHpTzgPdihrAChcp71tkZeTa3CqEZbMDwCf2vM17zWzgS3RWuAxS5",
  "key32": "2CFVA2GEuWjmMVV3CfkMVbK56spcuxs8pJRMXcSZf5pHzZevfBSiW7qfHFT7hT8V1AKAF8gN1xbHs3Z6q8ii6Ury",
  "key33": "2o18gPMSF9BKgVuDkzpF2M7H3MXSzqK5SpNZ4niDa7xMi7m6nJTFbcLqub1wV5J4NLy9rJ5PHtX94HdyTqSAUzCj",
  "key34": "15beWPstXu1zUkscTF9nx2JcFTjPGT3A7px3n2fnBhGWh9pgZdTYE54nHHcL5kHjHYtADrCRhyitWWvnxkQPoL7",
  "key35": "4dRL3ELiisAeuDbvbpsXLwSjZN5nAupKAi6spRcfWfCRBDxxiNwgT2vjrPqvUcwuTYeBQVqFCFLRFXEzRVUBSiQN",
  "key36": "653HXKGF3rvGgYjDkwvg3q9s2HSyrFn8oJzZcjthSt5khB17xPR1LGTAnBV4va6xXsCmpu968dDxUa1iiq6g9ktB",
  "key37": "2PWdKj3HraJo9kupyeKny9g9E19sxTs3eWJPS7EUz49zk7hfSRsBDGd35CaPAYS2FN8Xwxvk8V3ByEDFs8DAc8Ud",
  "key38": "411SWSVabPAGjJwLNRq8RFD1zjczn3tE4BK8HA4FysRey427obqAdsyHLWp38kKb17koxJBmeHJTXKJ6NQdxjBBF",
  "key39": "5rczoGwo4w31dAtGBRqn4GYtHdr5Vwtz2trMBsyMNacsBSXnA8ifbt3bcFSBgyXxSUT7bPFDFrFSbn8NLK1LfBz8",
  "key40": "47nE6h12k8U7MzMXxhCHL616NtYH3AyihqVYJvYN8jQvqBgEHRQCUyedmxqQBMxhJRwSbX6BzCMgd49ESZWQgRrj"
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
