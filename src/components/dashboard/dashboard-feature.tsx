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
    "4Eg51JoCka38tuhLAXsHzJ6QeKyHssT8fzZHTXc4YSkN5whGoououTvWqJubX8npJouDbSToPKC847swc6VCfXkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SRNP54xa2NP6qezFWV8HdfSCNFFmrwpuHdTcjKoR16ni1qoh9YwzvmMUaKqikM43ZhtmZJ2gfr7g5DvVrBbnde3",
  "key1": "2AVXLm4SKm6WMUWFwbxiDxN5yuPHH9SFHJzTV8gy8uZpPmkT7KfZp1vzKzarQPc3w6y4MHZtahgGVBVrxRGwTJyf",
  "key2": "4KdEQBDbfBwZkGYq7zduK4zVtJNou3CZhdqXSspxVW1x7czH7yyDrvPQGE2GBEEvW8sA3pQFNZiJLa5ExFChHAV3",
  "key3": "zkkjcZmZBFiHyxqmbmmzXFGrXf1vJfdpze1WGQrkBPo6MCZpJRR7NW2t2oozZEBC2ZepqHVfVBKNBL12W4frWuq",
  "key4": "2ji6jvzYbXc9fdL16M5ZHRc3XV1Z8KnS2g1gDhTYSjFjm69WH8eE78YDVVm4UEshHGYt5s9GDrgEtJzepyBFbdaa",
  "key5": "2RNJHbRcHwoxqQ76GApHbaKJwnRxFsn1PZfFdHcJNS3Jaovhub6ysCy3ZVHshxcHSMgT2HfdSZn8FdFRkZq9zxqM",
  "key6": "2dwvzNNqDsE7NNNcCyDUJ6kCxTBzAbeEpjJvEaZsMj9LdhsxZKYBneXbsCYixWxqDRWKZtxibPGVLApE2utU5Td9",
  "key7": "2j9bjt6Ea5hrmAFF3UYF85mWi7TKocXMicW9eJFwq8HHJfvNa5hPNkkUej7MGv8v4E4ea56CPuxcYw8ie1GRkxsg",
  "key8": "ZEndjjgWRWCoek3Ug5oS9Co7zk17Lpr2sqtg5VAiUGH1haAi5a6XtLMUNAwEbmj3PzUoWArTCmuJ5wMqAw43MRN",
  "key9": "4nMaj9GwE3nVDRNK8vfmAGMyR33s1uVuHTt94eeJ8wNXdHtCzb5uDf8uxJG8KuGcBLgGfv6LZGPAd14bjf34U6qU",
  "key10": "5gSohD45JJ5DLEujQEXP579khDgaqyUzDbMLNi2RKpCJdufd9DKxMQyL3Q8Gc6iPSFAPRwvv5owBGhBGC2Q1rrQw",
  "key11": "4TswERCnkyY4TTnSLtummMtYCUHbFjcii3XMde2FeQXcbrbsP6zims9EiXRd6SAawYDomoK38Uw5GBWTANVnbnph",
  "key12": "cFJh8VnCyup6KUfPPz8MGsgVCcMSNK8r2SFzhnD9if1nbvXUtNrPRgvBAQoaqELdNTNEGpZgdF1SEn2HqJEw9ji",
  "key13": "555a7evj3Wepkqnq1Ttf4rkQWKFesVDHi9W8TksZjjGSmmY1VFApaAYajD9SHh7q3ss2r5ZyEAy2zYoiqT3B4N8C",
  "key14": "5HTnpXcu9vEpm79fWGsGNjKs5Z9RtXZHN7FHjsAtGQagT4gXQKwLrvLhyyTPfoYuirBfsANQPM6fXcYBm2DwhvRt",
  "key15": "4hvZBMhwHPPKiHu2vXqZ7SyrrmTo2AjrXZcn6iLbaFitN2iqtisyGMF744d2ctLwcW8RohZYTZQ2oayVSxQ8enhd",
  "key16": "4G2cGyB3NUPFuGotHcjcSYguTB9G2yw1FB4gv8o5yXU8wEF9pL1duAL97Lk9Lfr4hzoY3ibYm6PUx69CB1PbVLxz",
  "key17": "3qDeRtYW4kqhVMGAfSZrTyuWQgEERGTSUWuQYEGaysMfw8LE97Q2mH52F7uT4wyGRdR9BVhxRgwDDahZjrFEfG1w",
  "key18": "2gGAg7foXG7v55u6VHnc7FJd949tjW3uMe7ovV3JfySazztfHFmCewijxK4vyLyYU8WojDkKAAEcgpRdxUp6KoH1",
  "key19": "ECaGY4Aq6TGa6w6bXMCCuq3w2ZegJH5pNuF9JGEBusXmmc9yjEpubQXMQ35ZicF9W2uT24ttK5rDJ1vGLgDEiPj",
  "key20": "63MToDiULgFjLmhsZsu2Dio6YrwUjyV5fnrYFN878W9pfiPLVGnsFYN1eDZ7tcRUaypcjDS8V7T8y7L9kgrvxziF",
  "key21": "2BNfypDJtoKSKArYDvG1Gi9vgsoNbF7XhCb7xkYhxDPmn29QhrUWkzV39gut1xvFcatAssaq6ReLnZ5DCiH8SZGg",
  "key22": "4GEu6SwhrSfuuXyjMgTVgvZXBWMp4ZAnZ1dYBi4BMBUB46NjA66bvdH4nZUxtVXXshxrVDgAWGPsmhz3Ff8QmQ5i",
  "key23": "4U9eChVPuBJpRmwpiBZSiAmmw8Aybtjd836539dfLh41ENiJGYugMZUuRDTc2PZVdxEvuv9L5xwY88reYSDE3t8Z",
  "key24": "45tSUNLHpV6m5MsFtzWFTvSMPvdh2Jg4Uwy9QHNJzFyTjSDhWu4aQnh9K798cea45ZuPseirPe6u8HinSH6niYWi",
  "key25": "5H8UKv1Ar8ttchXgKqYAxotZ62niebxyKPpzmKC2y1q92jufM92dMhZXHJhWzieK2mhewpM1vVtWyHqVp1t3hRD8",
  "key26": "4dVgH3bG35wL1mJYRrvFHQAk2eRWzncZt1HqPLV7fyeokpAwnUqSeDgFfVUc32GAWyBNJx5w2kKREzJNFmv2Kuxh",
  "key27": "2xK2GWnoJLVc3ZE5Xk9ViAajdWHfdWyYiwMdokA9UMfq83KdpBnq9ou26P28Cph6CwM2gsNHj1NT9h55dMZyKty1",
  "key28": "2D1n7eJhw1RTZ92EriV6NgVBh7gSS7RfGkfiL1H5dHeHgcBv93HYoKWeS5EPw1VyvptFTysiTyaS7oZ5qm3FCJ8P",
  "key29": "26U4QpXNK43gZxZpLtWcSihZ3r6scoJtnjh8fMNaExtdq4vfvwet5Zxb5NLYWz7jHv46VmZkjQb3x1M5La8Tqq7P",
  "key30": "MQsn2pTsswKY84AG1XFT8AHXTpftxhvxkaz1yp4NkoLLrsxAhxyJkE3SUwRQTkeZGQFwVYbE83PVjwQPiqQaob7",
  "key31": "2r2oi5C7kdKdoBCqQNpfHZXTW3Axq3vnbKe199AEAqco9q5niP3nF8hq2N38WgpR8cpxYWHbZtdvjwPT5EikaXW5",
  "key32": "4GXkUT4ozmfjGme6ahPjW7X1j5szR2w8ptGYRVohv6W3rFrdwA56K931L5ijUV9VY4YAKygJv85qZzYavh3zEqWd",
  "key33": "5EarweRegRUsoHyo3KfQJSVnVQK3npovNWzuzvk8CuANbmMiSyp1L3kRwyHNZqCWSvVg3XmswTEd5WEb7GUyhYzP",
  "key34": "4bAcPAwHfSDbCWNZ2jN5AjdaTPDb4G9Ef9wcDHkVzTtxLBX72dJhxRxNmK2LUnhRqAv43p7nKWYqw2vtAzJRRNKn",
  "key35": "2Ys8UB9WDXAohpc2KWBTEBurTsARkc9cnkV3D63poLy6X8rrBJKM3vFx6p41mxDpY3ZbZdz8dea7X5xQXoipo7oq",
  "key36": "5Pbm9fSwUUCzEteX8oKVgYQuhMJffPf6yJpUAiXUA7ht5FJhAnBQL9RHRdqdqZ2Pn1cTKAsQRgNQEorx4RSeuCax",
  "key37": "BGKCQMijMECqPhCnpk2uXQNMkMXXE3e1aKfJfWbq3AzppfjZgyrZNUGT8Q5eoYhH44fA6gig2EXdR9fBoA5gKgZ",
  "key38": "McrsSGZdumgbyDFy26zkAyTLvidDRUXEcCFshNfCnK9MVc5JSqZDDHWvngnMw5gxGfjcRLyTnmo6SMho8FYqm56",
  "key39": "5tgoG4H61jHvhFunv3LLVuFdSuv3XQuP6G9muk6g6YDd2QG1jnaexV6SKCAKdfBC8w8zBdQBN7UpFYDdHgAiDDxW",
  "key40": "5w9MYWPLuu91GUZdYrhDAoErmZdgGxgwaQ7LaRHrxj4CYff1NtjdxjWuHwxMBmYaCNR41qnGE4D9MboSFkQvLNf3",
  "key41": "RheVB6g2JtSRuZew5VH1cRGSgSu6mMzD8CzucRFdNFo3uY4a8juuoDaenU6i6h4HrPQBPHTGwMeFRxtHouiaLPQ",
  "key42": "445bj82xVXNAYE7yUQFKe5wabNBnRNE14HC9KEccZjWJhQqYKTweX92HVU7Vszu4Bra57J3cV2U626ingCzTutcf",
  "key43": "5s2DEjwEzpBYvFSCDNVGJh2qEAGUAM5dEWLpW76xt1icZvMiWun32yRppAkWuB5ygB5J268thm2hhqQ3kAxudCaU",
  "key44": "3TLyJRHYAMB59V1QXxymPdfkBrZB6PJwN9j21tTS7D1Ldw3WKGqFCw18v27u4KBNNGpgzWugWUQXUSu47uoTX5cu",
  "key45": "3nj1exWHht5QWWeZcvbB8UG1DenFd8TpZcBM82udLBwniiz9hTrukG6Jz6KuN3xh5CiQhD4MDh7TpsABRuD92ky6"
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
