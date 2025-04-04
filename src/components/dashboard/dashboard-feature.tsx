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
    "2FBAuTN3J2Cd7efpkf9HhjvT7vG8BnZvAYjHwdnr6Ayp5fRWHf6i5SW15FS7GjH4JaweNaz6GCr9BBhGWMBaWWMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bzXJM8KcFzubUUHVn3SN8R2xFip3rPkBahazPdNWSDZajXGmxE55uyuBxy6vHA5ixJzcNnXsAF22LjKYG9vVcnG",
  "key1": "4zByD8Fp5zQcw6z3cZjUkey3f669U7wNKDKn7zcLnkbuQAdmYG2A3DmkGS7qdcCyYiAWQCCs128ryUyEnifhnM8g",
  "key2": "4GQs7dLLD6Y7nd5UzktPik8L3x61Z9Xea49p7Xegms23ZLSeuSyf2M4Af9L5GGzf6L5ZHdLHXY8zFF6odwJ9WFXo",
  "key3": "4vrFTfu6dzG11mP8mwGMnU4gDAVwCYmz7my5bMAu5zPzSAc3SHvBZkK9ipFMjHfAXqcXPMo81dBtsERw9GxFvXFw",
  "key4": "wHGt9kyrSNFJJVVuEvgxE8CjJzqnFZW3wFbsM5iciXiNWB2KCNmoHWq533hKpfZzPj3dDdoaBUxqq21SzhqHqSr",
  "key5": "4QdW1tnTwHn3eSNw9ukqfsdYoiGi7ezunoAMVRTMYhspHZqa2PUTMwivKbHACxuuzADkG9cZp6ZgSstBSx6wBFZj",
  "key6": "5PkSAbGwd87W8xEsWXUANP78Lma7hVHPStTDNdTy8hCXLxsj1PfuENrrxxvyHKTJ6wesZ4Yg5cqnqZEYyd133SM7",
  "key7": "4Dn3YpNX1X38KE2eYTFShFuX3CdAfux4DV1PMh1oWaaAzPeZaK6PxnVfMLACU5RynzBYjC85UcnJsc8YmP8Xbs4t",
  "key8": "4axuj6pNfuN6dXV8WcdkCbubZcNit55UCRU5qZTxw9aZQFWgRj76MkgDjzscNhJggtpDZm3ZY9H5cpFwjQSbxKK2",
  "key9": "k8bX2n6ypLJqwyPwTmgt7sxJPjzart7ZN4ayKK2uqBo2ZqjsESLccDoanov8Cvgpbg2pXci7wkNUM7EgSvjZGdK",
  "key10": "imVa7aWeSs9vhrtHZBvUVmDS7dzstXsBv84G1JMcuXaMhEafibMu9FHzqhLrM1LxNk7JeXgy7BJScL8Cs7SnweA",
  "key11": "5o6v1tSBPkRkomi6QiopXi3moyrjXCb4qZB9RTTyCne1KqjrmcW2FA9VBd93WrnyJVvaTaryxoC3vPoK92yZaiL7",
  "key12": "2pNsYFJ8EFVPW9VRB6LEL1gyiX9JP2kBsyvoW2zWzKjyJkQtDks9KitY1TR7xfC4bqRAuchJ9tt383vjt1fQSc4j",
  "key13": "2khwdXcur1Zmc6cjuFNYozK2HuX6Rwx6hWzHx8omBPD3NBEXJfc3W7Cw294yTtv379CoXRzHLX7t74hGiaGMhYBc",
  "key14": "2PkoUQ8U8C3KVAmGibPHp8D7PG3zni3wFxkssHeirxDW97LK5NPoSYFryKsAM2DciEnfgbLDkjbVP3adNuKHTUua",
  "key15": "2CFwozSKupfz7RqpoBnhdGxua8FNPqkFH5rauxYSkgN931pVhaoha6DPcGnievsnf1wwkpc3TcFP8xtgg7YEPvq2",
  "key16": "4jDSSfgjzfqggyZZNL1BWRtoUfXPnJFrB9DdMGSmPEVQiK9owHX6A1CfXh174UAqgyghzeqtN8qEGvv1fzsjVFC9",
  "key17": "ohtmSNmRz6FFUdaVRHunBaBXMou1v2ay6C7X5csNpHgf7DqjbJx6hePycMdSPZQdHEFQHu6wEZLW5PXUu3PRCi7",
  "key18": "2AgVoFjzMEwjPHxXNVVVxBdpoTA2tXbYEaodcyRWU6vh44tZr3fun7MyHrKcBEC7Y42n6LftCU8ykBSAPasAcvvo",
  "key19": "4kAbrRj5f3ryMCoZDa7CVZSNHYe1oWdVb1fbXJQKzVddCnXBb9EzFYCU8jzPKVo9B4Ra4h1ct9yVW5YK9mW4cCwG",
  "key20": "3zK4E1SgSNSqCGkrY8N9hDDW2hhbhVhVxaF9uknQm8JXdx8eyrorc172xZwryyg6JyXg2foAafgwZ5tF9VdM8nD7",
  "key21": "4RghYTx9bTQkRQpCCb2PVmyxW4Z4RHd2LWChZQQPUMVvgQK3N6zLcuxwBenAN7JkcA3G7hjrZ3aLHFqEz7Rm842P",
  "key22": "4FjUTBj3pNdduJtWHb1SjvbrQydjRkWjCVQ8w1k6wqSLAn74or8yawdgssJWQsKvKa97s8BxhCzbQJGqtNSHUrGz",
  "key23": "4SBU4ke7RW1AiH8Pj7MWEZsxNycSSiZT1AHSnRGLtTbcGuwRooj8665tieZ3Ns5MyxzgeQsFwirmCwswNL5R45qa",
  "key24": "udNjU27nCEGfcR1FEhufcQFVSfnbqRnfL1BKRMDzfG5npgUu8iU971upu6eff277gVocNwGCpdLFA2mMM1QGhnq",
  "key25": "4PB6kNK2dpndgMQyRmFieB7jsXH2morBx3u2QSZpJFULDzW6mF686BB7BcTevF5R8oNZEUnBLD6doiw5cLbJ23C",
  "key26": "4E5asYNWrgUHcSR8qyNciF8XnNLawRBda1vqrFUYrNu3ecz3YxZm5YWNKyYSedSBK33qCvSoJBuiyaytW6fpgvbV",
  "key27": "2c4tnLixsUdeJsnTiGwPoyof8F1UgdXMUScHa3vTsR22Sweo1p4hBAXPxb4TKYd1MxztpgMrVjhtvDR6uF1xNMHk",
  "key28": "2Ec8fprWkWvbKgGpwmXvTbx8WndFwmjHQaQ6gzh7fHLbPrb1CahUpTKXegRGN1nv38nadcRdJmBdHcFkb5P535sB",
  "key29": "yae8nk5AxxwwcB3LYchjm866Z6RVri434uBjxNWgHNpEuFqD4PpBcwnX7vehLWZmsonVjeJmmjTXifKTKbGPA8i",
  "key30": "C44NBrkmcMkUYwBWfh4RFYaUwGqGF38dhwb4rHZZ31vZ6yTR316hoDSvcjRDigJUqLHcbBXifvsK3ToScjwqSWH",
  "key31": "2nZDGhD418U3FAWH8Lm5EP1yGxP6SpKHj2bSyfucNuWXETqFqYd1KneLbyWbRijBNL83uzQq56pBVYHBqfFfKTgr",
  "key32": "5JaEwp4nHRHRZfzjXqxZazEeyeaNmXLuESBbxogULf5mAs1su4d6zss4yhhtqnFsdwUYn9r3JofBVK9RmcMRB3Dq",
  "key33": "FjzvDnG9ETMRnaxB4ZSiavyrrFdjZjNU6zubQpMp4pms9xFSvxsYREWgbAWsxB81M9mroXARpzHTL3XnSGuf5Di",
  "key34": "1vrPsp4stipMBzcn2Ah3vj4v8CCN57ux4KCUgwozGr931XHAVQLCitfyowgnfmxPdagRSy8rF5dSSF9aNFbMoAS",
  "key35": "62qc7SqTc49LaG6h9LzMQKcCo9DpgfNXZ3y88avxzmq8yqppDzVm26eLMUBoEuEYQxzuCeByNhHn6jBkn2ygTfkK",
  "key36": "5VHtzxyFKQT9xBHGW8eXzabFYi8K7SNYcdyy7KKp9nKN3Fuy1ow4sHEjswtsMk6bcwqJH7RdfpdAc1UQxaBvQ6B4",
  "key37": "iPSPdyHTfrnYzsEVoDv8JChPRXogFmwU1oRhxqALzPTLejwyphicXg2b7u2z5LzzaZnaPBBjoxY8bVPq7ZxmdFb",
  "key38": "5JYfHQWmcApk4ZBKrqeo1mnmU3QBQji84keExfWYYQWe4GSsEP3wLyNxeCUUPzC5J9et8TF8ds7EqqQPVsHB9Ajh",
  "key39": "4WxHTEF4d8nLrshw1FnPcsz44tcz7DhHJr3p7RLXhSqDWD1MxhSMuKoUZMiPVZQaz3Gr1pimV8KACRvNQFAEDz3L",
  "key40": "3Mp6kBY8HtaiKkkYmmC43VW2kM1a1EwergfScfVzEqgcKZvwpJnQZ7rG1yYSe1qVui32WFzfs79hSrZwrYBecNbw",
  "key41": "qcht5kSpw52PSPHVp3PMCdGR4Gs8nfD5GykwXUiDz8GTo3skwXyrbw9L1Csqh6AoeWqSdbWxJJ5LFFjGYLwLaL9",
  "key42": "z4dMdCxtq16PE4UpyY3eZfegLhtLPYHrYzDoRQHCdJ6ZkCXthpgSCWkT97UTH6kSoJhL37Pm9G1tM8NVLnrGedM",
  "key43": "5DUaVEdJut4jFGQzW9coE6x2rjjKWkx3toWwTfm5DvKpWNXEUcn9eeXSLMgsBbk6kZkr5mdMyRku97iw8SzZy8yd",
  "key44": "5R8oDEWdbcrS41nPiP31jkF4C9Lx42fW4fznwQ32vMtrSYkfGNYf9oxbRdcZuxH7zJWvTj9odT8H2rxADPjdqrtp",
  "key45": "jiH3Rt1kwuJRi2skif6FhFavyU1Cutrpz6MeeV3YNDAv3AQMG6GRkNi1fiDWz1ySMgs4fBX2TyQA3zHMtfe6ieo"
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
