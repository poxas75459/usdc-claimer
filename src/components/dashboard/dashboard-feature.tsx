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
    "44VDA9YTJ9EmjszDgpv9W6GVj18SfkxUPiJnASvMzx9REEGx2vwToffQF1dwrWfKn7SRrwuT5B1TrihxpWX3d8uB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZeC8ZT2Kw85c6U1TbhNMhabEZzAbyj4ad3u9fRj1Z2pqnAakCLPUVAWD9EFJp6zRvTXpTjzt2esZUCmVjWiSaAx",
  "key1": "3tvvCjVp2vvwT8PtNYR9v5HraRv2bwyvSN1jwGrKooU2m3kRCMcCxYub5B9gjefpWLhxn5fjkYK3BHt9vnEL2o8Q",
  "key2": "4a5kVD9oNVGq3fZ1G5RXaS2w4o7z2SvTGAvARzXgDsZWAbQKfEkbw7iPhSCULkcykgprVbvgY5fvixvRLMqJ48Mi",
  "key3": "eqq6pJ8aeBGcstn1XwV7mkhQyuFujw1DRfTkjTUhsKvTUCGRAjPTTSpv3wx4wEifdThZnvByvHfKoBT7KpiAXxH",
  "key4": "2nv41AFuNAJBBPeaLJ24f6VHD18eyBgQTmE4C9GmnxHCy7TbWRXi8oVZ9mgQiE2f9rQMhZKnyiRUHcLR5cxGdJMP",
  "key5": "3aNQJ6kC63JPC4V7D9ycTiqxtzD169pemVo17kjVcTarW3fUHgpsGQmKRKupNE1Q7N9DUEgfpPCASW1L8u2oNWci",
  "key6": "SRRTZ269vyg26mDY1X42pxTokgHdEsuqnrZJCip9sLqu74RJThGavoh5iiTRm6bXe7jsWZQfi2rF7G1Myx9EhN8",
  "key7": "2UeAJXyZSaVfERaKtosjWzZGFqDm21kr6eg9GqXMmQRZEJwCb5rhc8791U75WfV2Vf1MkhjCqYoEHBGKKgVHgthA",
  "key8": "5S3K8C29YCNaovz98XwZ2uADpUhA8gAfpGbqEkbNBtVG6GUKb32DZhsrS9b72EFseDTJNp57wmYdoygDoan9nwf5",
  "key9": "jTdEmogTTkhWtZxnN6mdD2WQFQMr7KGhmgKvvniFgQLGzB64VsRE2sqX2Vv3gmMLPpWR4xzLTAfN5MxBUpiCX62",
  "key10": "4ut7THDav4uxMpL134N9SGzCQW1JCnFgqHgP4xkn82PfZVbq9Q3LjgD77b5K94BwMcpSko6RGAXavYpSuX5zEPcq",
  "key11": "34g3Pegk1yDYPxokzcTb2D1v5D35TUfGAhVaMYCJYaAzCxwMXs3bEoxYAT7aQ7FqMCEEefjQbaszXv1JJTsJVcNq",
  "key12": "5vgHfejHhvnPdUUQ1fcVFfnPHeJ211PxXNSASHeGyXWV5Pw2Q5Zir7G8pX3Qbjy6BcDwD7zX4h9nDxb8L2eKKLeo",
  "key13": "UtvFsNfFESWGXeBnLTdiiWmAEy67fZh8ESmFJP5WotNmMqEwUikYqqYHzHja6MvW6bAuGkMhBopZuw5QJ3hC8qc",
  "key14": "39rRC2CQ4LDtuYtWhXKGa1Bk8hcswrdtEdszRyVZVCJx8LZxQ2Ji69SbafRYdu3FGnRcV5p95RVfNcnwE6xckQbN",
  "key15": "4aLpnNj2A83ebcuj8NiLiFxX5Q4b4ciX2iCq6LaT8AoocJVYQaRiGYvCqdhGQb4AJi4fMJNm6aahesB3HuP6h6AT",
  "key16": "5yFeip8VrvNeghELEL4VsMHnwXbkUr1n7cD8ZYv6wgEdpTB4iUpPsGV589euD5r4E2D2Hh7r9xiUM9XmQrbWG1i6",
  "key17": "5dd9Ro4nRDR4Z4PRjC2bX86GSJaNH9r684D1GPZ6DX4pmnXvwHuMa2JSKncCQsWBSVuNWkd9B6Kns8Qv2ChJZNr",
  "key18": "4FzdyQBxtoyEpV7234rUZ3UndEcVg1vQa1WsLRP38c66x5X75jedJApBU7QWqKFF3mcAqwyjXhJcsb3W5U4fKxkG",
  "key19": "3guNZrqNeL4hTcoNkc924scKS44AtduvQHtdnw9mZQKcp6EahBJCG7hg9YY5aviaEXXHJciF4iiUi6gZtpYrxVSh",
  "key20": "vN7oFSqfh5LiX9XMsMpfEudxokaaRS9T7UqVSAPEZzNPjeCdEYNTAvECWjGJCJ2skCHpfeLtcsaCxB7SzdgxFAb",
  "key21": "3bNSqgTE5HZesx6yPBfRsAnGDgoDBRZu3jTJegRZ6dgvTNNBPcLtmyLhYie95LbmHueCCBQohK8v14EE4uYGtAQa",
  "key22": "2GuJpTcdyWwaxgNi1TegDwJB7LPt1LT6krgex3FixQuBZf28nMjYcYWSkZrJh5Sj7yH89SZPJtmcjW1BMeb58xbs",
  "key23": "67ama3E6vYhibHVRNXnzPMQrLsW5dzy6Pd3LrPvQiNac4D8JEhDBkEy9oB3eia4NS3ZYVdx3qsYNeqQjEyjRbEGt",
  "key24": "2oNEnXFo669fHpeagyQFc8UJLPiFWoyhbfkStTk5U2U8sc7UJ2wVMWMhR8pb738JpqE5YbKv5ab7Vr87N25bdrnr",
  "key25": "5oEkgATNT1YmvwTU86LyBG2bmrtvtibPvMKEp77sznBGXUTTLmNRUdmYrzCVRiwkQPovHhCJ6rGRCA15qfegncyS",
  "key26": "22y2xJpu6XL71KuLVRpuZnKpXSTY942eNhytou3Xa5o4h3GehbuQphm71E3ZrPhmHxzVA11d2bSHvs4DZpEH1ijh",
  "key27": "3MRbSPPwkwmCFsTyxgutLTyAMmDMN9LzsccUTSimBzEqFHZFziPjoEsiXu541HN7gPEpESmJFv1zLBFBDwvYJMEi",
  "key28": "3XX7B94dJmzHjrxmpW891VKdbMTrz1B2JyziJzXBcKdab2yZG9FkPXxsXNNoVnJx7uiS6oz63bJdAfBTB2SvBYk7",
  "key29": "3nmavScgHSCR2QcPYxsW5d2VzmDCM39Y99JFcVCU8GiV2cb9u6do6mrHWsM2a7SKbooWoz3tQgTPP9tSGG8oUarh",
  "key30": "4VgCfXKCmcU2nTAVVKzjChoC2vmBjvcYmVteRVzb8f1dZb8snQzmYHD4oNxBJBNTeeaXq8KwCykbFeroGm1SWTJe",
  "key31": "2pVuMyySV9RB6gondxKibnfDMDkgjuFi2hYkyTs8QTUwuUS9S2y8ikF6nyt6Ca3YFuE5irjRkES5mdQqm1PX8jvg",
  "key32": "ZkB6QoAiWuxKjwoekJ1CjcieMzi1ZmR8asaf6V6XzLzVhzwNr1sLtiSUgSsTzie87wBaWDeDDqEkxfV7LKcjgRY",
  "key33": "36GhxWw4vjeG4bvfDeQhXgFTtJJzGdUiWzCV5GwTpctgGe45RFEPhUbPMQYV9wtPw5nwGJFkSHHK6rAVkTJPdPw4",
  "key34": "53QJDixWJCzCJsPg5jNDCSyEnU757neGbYN9vM5yK9xqXFvspRrix3LZCWJy1kcTxnDKSg3kPnnVaBWQBq3nWugM",
  "key35": "5Ktht48TR6bXSCsHJugwwJjfXwJeqz41YzG1CehDow78AKLNMeMHVRM8xzd3a79trmgAyH4izWPiuZV3hxzY659Z",
  "key36": "4ufmDY8kXfpfaPHBHHBtf9yh82xq3SjQ1oB86nLHDV8bVjp9BhHpjC4jQ7YGx2WfLScFfx2k75hNEz8MTnhwRjLv",
  "key37": "3vWsR6mdYaQQ8TftRhker1AG7ubjSPhwnuj3eMKgpbskSAGqr824ekL7z1Lv8okDWJ2Th9ghF3Ef6criSAfoRjdR",
  "key38": "2ehz1gmj5fmdEsR2HKSeT34CnrqtTMra1ekTt8FWNocWW4cCju6fLRc214qUGzfdY4mrTqr5vBMF9WLDjxMnUHVh",
  "key39": "5VvZdkmUor7nFsGcKZDWBi7FjqQzxKDpjx9ycyuWGVB7UZuoejaV4TCWzNgM2jHeBzRuo9gYi1Brvj7V3ccAFfTE",
  "key40": "5tdf38NjMAzkd5QvkujtmGzmcfbQBMdZGoK3ubN3urPVQZqrE8LKdrdvubXpqKNyQtSsJKHF4tR423n1WVv3rngJ",
  "key41": "5qoJeYERjHRPRTgDzHM8QM5FzTTfNTRzvsceJ2XiBQic72CeKknQ5PucAj9NzRrivKTfKVEZxQUxUd9hnoEDhwNA",
  "key42": "2dH2NaiWepdH8UztA29Wf1QjggafzE64DqK3qZbni75ZoUwwaacZ4p9ryocz5VbYD6kJ7dSPcP6vmC5eJCK8jDB3",
  "key43": "3QDCfjGC42BEjLztPoozHp3Q1HPR8V1W2jh82gLx2c9BpHWTwS1ufLrWybgtvTg5Fp3bLo2VzYpbsEnmNUNABfzu",
  "key44": "4JYfgaxcSBnYxoRrKmVUD9xD1S83sH5W2yN6rAKUXSyfNoBGj8H2GbVrD5iri1AAz32dhseCx6ob4qCZ5UwJqBwu"
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
