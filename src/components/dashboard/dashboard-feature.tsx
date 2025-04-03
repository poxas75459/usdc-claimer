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
    "3qp6xB96kZ8mKvRh5Bbb2vZMAhKS7xyhapfamGm5bhknYEDWSTozzurykK661SKp6Fq1FSjX9aemgo76YX7Ywn4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L3S5xpPc5DYtKWrZMwZEon5V1QKixH6vz9u1zANYKgtyFYogHb3SPW9EZk69xcPfF54MwoTM1Vna19mcDunwffA",
  "key1": "ipvwfU4KrD7VURQ9AMNzk6SGQwKVYKy7Vc3E9PKT6CBLZDTNA4uNSJn7QpA5XWg3xxaTwRLohsMVHow3EPRRuyB",
  "key2": "4nZnq7pghx2XTiGS1N9NdVTBYJ5UuN7WWAsjqM1ziSQbcHNqUJipjqn3ueKqBDCGN4LVZiQnCbonpvQkjBiUseUP",
  "key3": "5htzZTVpDqa1yszSpNsRoio96pHDpF9nfDCzkAUVdpVUhcUaK3yZ3mLHoK4THRKearaKWbJ1UPGZEpjJLUVcKkmc",
  "key4": "4BWydWQ79UQMiNtPtRB7RckbSr5Q5SmfatqZFVWt9GAdFDR7t4CowDaouGbS63ubaQzqSmEAf1FHe5xLmnkoLgjm",
  "key5": "4KLwYJ8pyY4hip3LUUURBZZ9MuYY5azUT9b3H27VDQMcsbYCYtDsAgBGZGsgaFahXtZCm9caPq5MmEetSgvD96VB",
  "key6": "3QmuRiCz875mMF8zZpCaigP82atfgQtJo5Ca5SuBhtqjhD2D3tddYksPZ3gLFwdxeU78osHuLBN5HtcuRauKn93z",
  "key7": "3aEec2ETw3fGVMqGuieasB5cTNy7ENsBUAyvtZS6tfJic6FQjdF11rEeLyqbe4q2bMCpJ7PwJBLHJmjUij5MyNNq",
  "key8": "37isXPQJiQTyD6jbE9WTVLPRUFTRhGJzGjRbosEE1YjCwbUCJHvqhQwM9pRsfK6XAHcgRP9XWgJsMdSv3vs6Y3Bm",
  "key9": "2m6c8d7JafFBknwmpkhHxrjPHfB7DvoMNtTERAsfpKpBDmmT2CnXTjhKzW8mZ7tbEvSsHrBgPQs4q88oE7UiFWtp",
  "key10": "2y18nynEzDNWrVjp8nbmKfTAKUEvN6yka2aKK2VLhrHUXtB2FC5TPtfM4eFpLTvm5uKhVKkaDzRigLyF5uVoPE2S",
  "key11": "5toJUeJpKKCHs3VQ5AkWmTBSu3S4TaPGAdcHZw2TXAGS9ZzLgb1YGEduiPk4eAn5quhdTJ2z5CcEuRiQAWRtsbbv",
  "key12": "KAnLEDAtPu5bf8UL2t7H8W5ZSpce22yXoiDAcXUfuHL8ZYVmW8MtJjdRKhJyYiGPxJDGE9AX4e4UyMdN1LHqwAf",
  "key13": "55vXiamLrRbFAN8btcxTwYzMGvr8M21M28AsbVt4gdM3JYuWx4iU9w2K8BJzmr6foxVBUr6ev7ZSMc3evNq7fFJj",
  "key14": "5mzaFKUkQe15mkduSiNxvaV8oKddb6TqZbG9PY2s145WGmjhRBKgapTK8nHrbaasAv3bKMh2TUmNJinJ44wsHb7V",
  "key15": "532SoSvcUsJ4dFhB74W328whYjpuJ3prMnNnHMR1kLNXhNDM1aUiEB1URbNMVog6M6iztsU72C3AsEwPPtJSReFH",
  "key16": "4qKwc6wtUHiRJQ2mXohrzaAgr2mCLtdaQPErMexBR2fjNSQdQw7pdSBgddz6SYNu2y57jFfbSMp4wgqfcbnSkJGv",
  "key17": "36gz2jA9aALm2AgSAHonVEeTLRh5tT4XFMYYfz79Vnoy5uZkWp3RBVn77ipawSSHfGnBs73aBvDuwUbcd6tENSa8",
  "key18": "4t4ahtQJwM5tsntQFpyF8ZjmbjebbYPX1D58qDcuodufqTnDGGUDcRA1bZm7kQc3LD3cCV5zBdpredYYz8eNsVGW",
  "key19": "5h3FiV5CvHfDcVCgt97YF2kYjaaHcSXcfELnxmzgQcexi6sFmkJfVyHCdoiwA28rpgbpmfnAuzBRNs8q6SJ98yeK",
  "key20": "4yxwydJFes7Qhf7SeB7uAm2vcEoVbSGxMuM1pbtumiv55FJZgvX2ReC2Z97DgPGSaQmNqkmCN1726R8C8f8yTWnx",
  "key21": "3QWVbGboZhhVYDZheDYCtg8FNFoKE6A2MPCFYRLEV7fYhwRSYgoViFjRtffrWkzqovumyefTgZ9ZQhhvyXXG1hSj",
  "key22": "49dc3vaKuR5HNNEsUuACUK4aXtx9WpEnrNctEUurho9Fsawyp2vt9ecZ4fKMR54jmYXsmgc6oRk2QKRmXgKrQJbr",
  "key23": "2EjkCKSjZbQemCJ7iA2hn6DcbCHzHU7CYfy2GozoSXLPKcnArGqiXpSxNLkWLrG8jhV9C7yezFUvcwTewN5yxbCh",
  "key24": "26DunokLrrEfNWdqw6ShM5chDpetQe41ZcY155SfH8TUbJF41hgTjh27NQs5BZzMV563S3a36vSx5tm52enmDzsm",
  "key25": "3K9DJ2inDtqBGoupVwcQsvoitZicskFjQS1gnBr1amPkv7JeEryKdwz77eY5XCsdCAaGLeC1Y9fbm8R1tAPXV2Z8"
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
