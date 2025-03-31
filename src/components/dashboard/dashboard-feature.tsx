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
    "pz9NgFqo366DRUvT7BBe4Br8HWhwPUhu2XKi5MaAMpcsCtUUSzkX64imnZFxW5XFnzv4eVdMBCVUV2HYHJh2W6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "558eYnUVQs3cA8LSfoMZU4NonFfK3ovnYhu2APcGQ6CPM7AcoSdMEsUhBcEUQpaKRzPJancKjt91cjUHuHQq7Mk8",
  "key1": "5MTrP19RfHHKiWPpAon6h3gkxMF7X8vSyAd6igSoTm6Td5nAMgf1i4RQ9MbQZrKxyMaxeDyiBT5w9yhMQzjVUzsQ",
  "key2": "67fbVsXF3eNqEjZubBRAn2c2Q1uCJ3eQcqtsaaGCkkqn9tkj737e8ABsHbqjGTAfj3UCmFxLGmDRmLg4D4q2jW41",
  "key3": "3tZpCXk25kchYAE239BGZmo4Xvv6W3dSnxhkajMPk6vLkZwPNskMNBh89ZmfL7CB85YbzhSY22YtqSkfaH3AQgAp",
  "key4": "kdPZPuZR5PWPyiffoegfScgNHN6HvtxkHeKyuqi3QPK6L3YQpacWdfH7rMYP64Fx6jETSiCS2SCA6Tpt1VALkA4",
  "key5": "5qUmjSZzgKcvxavxZEVy171nTh8kjoB7WZwGSfke76qWyE9kYWetbsqJhu4jphVWRvC67c9nB17kYSAwP7vmWL8e",
  "key6": "36X3jDFTM6T2yuS437pmXjNHgnJENocnEcSbhgDLVjKwa7iboCSSRQoWi38UGKVvnLSYPgpmRVdEGx7EznM867Ay",
  "key7": "3w1os9ksQhb8c8jX33W7uc4JcY4xiQg3nVhQaXCpGjbBnR6rKjQMjuKmJVe3GfpaU4Ap21A4Mkz6jhPvXt2XDqpN",
  "key8": "24XGfWzRxCyaZHnzkcoGm4smoymSkzD2vU5eqefwBWzLBzhBRvwxuvVcpxDa9qBfmS1e1rVvrZbfpN2xJzRE2u4T",
  "key9": "5cgsJ4dJfgj4FmTkhjZuAFkFRouit42ay1BQnGSdQ3kv5EkREGt5imChVGVkXGA9BLmLhGsVTktAjR1S4x4XNFsP",
  "key10": "5EysUTt5CEJVUmm3RB9qidSkN6fyMMLzPnSvZcE5CcjWZjnZMFr5meNEQEJKCb6QyWskHzddKZwYi45sW8yXZJbU",
  "key11": "Emm9fSXL2LSACzxiYSZQdp9ezL52aNvfEkFGey8ZSp7eZyat1nPdKBc3LKyx3piCSkj59mZb5iwD5dGqTMjET3z",
  "key12": "k8eNtAHxbeUGzupHRv3VLjo6pCn54svnhf7FSRPyqgwQ5cwYHgwWk8VuurLVpKCViHbvyqvGxwBT4iQQBMfMAvK",
  "key13": "5QdAurKyRSvegdDXbVUGEibBkU8HezMWUQg5c7aGzAiy7ePGoNvjzG7YsFXrWrVDoMUCJiQUUNAE6vxfQyHC5TDH",
  "key14": "HavNnnHEdf2cwca43JBHuW9LZ9DV3s6fb9bqm23C1NuQdrFNfdgemjcDHvbhuXatueW5WXBhHdDPRB7Z7sk2GJ8",
  "key15": "2sZxRLB5N3HBukxk546gf13nPs84pnMmvgTuBg5ke6kMnj3dfERDPyyPF5PVJHX4DwNHGJnQ79xcv2WQtLQvKuVt",
  "key16": "5ciKKbbK43E314Kc4bXEdzQtoutHkSVGBE5ZfXtA8uUiX58os7pkkA2WvC4mVT1sbMscn6SGckGWLDtbGADTy5gD",
  "key17": "38QMv5mohCnK7kiHuVEQNSeVsQUyWJ8pU5jcm1xu3eWJ9EQwzqZq4ty7A2n1D8TwtoRu8FZGZqBARQPXiNtLP2E3",
  "key18": "4pJ7m1u6BPXWmb61pQqywaKHBHwjR7qYwKgphdaEfEboix89mPBvmjt1Arey4k7FVtqvBG1JGkyKgrt6UWSufvV3",
  "key19": "49YAMeB7AuqwvMLy5967FV47nrPu551oBBBFduHSCbjCm1WFkYU8mxN63tmKP4mGqxqaRbcR2y1cMyRFz9bGvzWJ",
  "key20": "3fkhAoDhQrYAYeDPKbBKvd6VacjkeGu2pZRisE6VTE4RZjkuTYiMvWFhTRnRMgTwwLsjP1gq3qk1yFxMUjTBSL3k",
  "key21": "58p96EcxtvoeBMGNxMijYzGzApHqkTgtWu2BvmT7ZQicuTLMmBEh3TydKLKudsqpfVJ8gJ8EnMvwUL9KumRVSHvv",
  "key22": "5V8hYQZ2H8GHz5EicuaWXyxVE7fXfke44CSk314jQ18v79aN1oztT2Hdz8Zs4yBWiKewCDwRyJtHb6wAw9mKcfVq",
  "key23": "26ynX3UcqGTXfvnduhXLeoS62rE4RdCdEopkyZo6vBStUuBiCJsLTt3eigQEcSmcxqYJVdfptsdmHTADTgJHoEt3",
  "key24": "424XUhQrcxs86Xx1kmseQxNnT3wfT5c35tFtZqCs61Agbk5qwyK1pNrbNfNKRnNkzy9NkT7c5LZBzt8fNEshvtQX",
  "key25": "5ZQ2VJK82fHQPsQu1J4JnZaAUhqhyKURZAGmCYha9stwG7D1uDcraR4ZfZbQAy1jhpdragPvmacgk8wQkMmNme3y",
  "key26": "2cYaqaToFSyBnZbYbBzs9MLTw5JiAHDN7d76qZTviPHxxUspRer6SFqxdkSbg4RCuYSKc7AMuh4JemrGpJeMDKje",
  "key27": "5RcRt4n1wYtUXrMwokBKTjx8HEATkSdZ9zcpGkMVEtFESiTB1EDS6cDevxjnjsHMZr4fUp1Lc4VVZM4n9ihoHZuP",
  "key28": "63e7xbjYcBFbQqGdJfX3hwntT5KLNbQx1aUycukZwCAViSwdh8sMDL7GsJgX4JmnwdSmfW4ysC5ncgdwLyEdE6pN",
  "key29": "7FduYSohrgbdZUegJahiZ6mEXdUCDmBqqyRoz8G4ETre3LWNZA9eCd24oDNiyww3zoNFSVXChqZ1Gprmk8a5DYr",
  "key30": "4V4grxctgsh8u1dstVcEzbGzz7np31BxYV9dsHfRpCM6JdX2LcKyNc1SUT2mkdPn5guG1aiMGL6nyqPsbp4ZCjjK",
  "key31": "3wD9TwkybuMwZDBxCG1XsAnr2V3mxJ5A4bAAfAXAJfgiHFh9EWFaXWhfFcPvA5pmsnfo7Xr4Jw2Reqn2Hw9D7MGx",
  "key32": "3kVMGugoGL8wEoKDDtXwCchH8gtcXjaSXtUtuxC97RiA4mYTopDCJb7eShnmja5bd6SHifPsQofYWm95FctNfsaS",
  "key33": "3ZwLbYsbVEbFHVAziKVFangNCZdmAXAahqvnCyMJrDSSzcq7DSLMZehuCUJnputxeafoDGuRHMwbqGdRLMQ4CCfn",
  "key34": "2rgj2Ao84M5Sk26nR2FNPzoq3csxPHbfBCHDmXhQbc1wRiLLByopkGfyyZnK8vZq6Cm6WQa5qMMzPPaV8Rc4hZZv"
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
