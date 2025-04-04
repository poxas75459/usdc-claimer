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
    "4yJ4SAMWALuabvyRLoAs29emWos1tjKuu68KiaVPQ3XpHNjzkrv5c6ie2az1uVMhLF7i6qRK2oqy2iJ3NHfdbSM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27iiGoy6vshXjN2rmFUX7mKYzcLzhzbnwrghAaEie5nexjATr1T1b7qMoUVVC1TZQem3kqtLHiDEzYbbHr4Ggpyd",
  "key1": "5ZaYSVovmrjBrPzwFABitYvYDhstLd2fRvLNwsfmJ4w9zSYYqWCbBnj4HAhRxTUKc5RLccdencapvpD38AqiqNEi",
  "key2": "vegLBQKJ6yfKn9wotfg4ypi6c6QPPuHw9YniWkJYmAJWBdrSjiUxUGG5CsoapQzMvpC37YV5ihDF8kuFsL5hLER",
  "key3": "3DjnbucMFWyP5JvWMDVfk5zh66sYgDEyvWxLbJdmCozVDrM5ZoeXdD8tMcodMKhT5XGQS4tRqYGvjLnkbrCZkP85",
  "key4": "2czhSzfxbmsTm5n7m6Rw5XEoE75MzjyMpm4imqj8un9yc1MBVUC542dAL5Eh3HfiUC15g8BYmeGXX8nZ9khvVYrC",
  "key5": "2Ltyw2i1pM5DafCD9nNDn2mrq6AJ9ELZqyRxa3P6BvYMep8E5Zd3GTQSP2hzkmyBALhHJLNNcf8DkWyxDJKkgh71",
  "key6": "GgWobDRQetWjCDjnBMuXATtde8xishbWXnwvUTLEKeQgxUxMQhGzDBipjvE4cS3XMJpxtj2EpiKNbQvRRyXwGAC",
  "key7": "4m5JTpcYhjkkFryut7C93KX4GNXTZ7TFHibMoashPmxa84GsgxeAgXFFihEk69GHBNmiNuYFdmtSSbZqLm3jU8Sn",
  "key8": "2uA28iDQTt2pjU9KdfJjs1cYHbAH966QDboREd5t5vFebDsG527mJJFouzk21FUddGfKq262AJrC8srWfAroWLcw",
  "key9": "27YQiz2dL3jBgsnvYogngzpxT24fGZhJfpsfBYQsGJ9CEtY1MvuJwzRhXxH2KH9Ayhqc3mNwQ6n4fZq9HgPhwL5C",
  "key10": "nyWQe7YKfqQmRtHWWYBqqBEFtk8wsgzrAafVHqinpUN7ozdgZKiesVPpGBaKpsNgPU2dHyMLrRLvvG3eoYBQWFH",
  "key11": "W8ZGSkGfR4mqTZGVXz9s8DWddhYNLT7ZmE5aE6g8F1nLMjBR3yS13ictbLqSjw59KEZ4fM1PnKuEboN8Cj93pzn",
  "key12": "PiKSce6vA9WiPLCuzoGLSuqQgcocsq5r5813rdv9FXh2R6mB9EAdWZGgU4ibvYchFZFfFaCZzDo2pjh4c8U6Ezw",
  "key13": "3EuvFV2UWMBugCKtZqF9L29JhqXfptbLeVYnPvHgCjNoSePVn4Xy5LHvp4X3u4Qp9wmhwRrp7G4SRHfkaa1kEHcw",
  "key14": "36zAG4jXtJyp5JHs4Dbqj3TfvvRNvmkMmRppKMjYtUJv8xGr4cVFXP5Y7GfG8QC9HAxt6wKs9NuDYrZcoTRsCMiM",
  "key15": "v9dk4y3EuFJCsqdxX4n3sc4QAuMsGkSg3Z9kKtASTHV817KMocTbfUbrS3ip3oKBVt3VQgNkrs8S6jCvs65rNag",
  "key16": "2xyA4T7frdB7p1m8M2xJytsJtbdv9v5UfnzDqtXftZf7m3zowA1MeurcYZ7rbPH5CFyJiMSQjDfs2VgNkGpP5xtF",
  "key17": "5SDrSSS1XHN9r3tiUSXJPwHJvWbdUbiZA7szLhaJRyXDELJFXCwrATiw1YZZhuiZKnSxLaJ69hsmSbci3y3YCmtx",
  "key18": "tBJ3mU6NcvtWeo8BYfzYmXhdozkuGFJQytVdRY8PKFDmxVCJuH5rRUTJ4EZZs6R9Ws8e2BE8MPbrKoKHc8htdGU",
  "key19": "5VGX38kVowzZvA7k12GFZKgGF11fVSCmyWPUTUCwpaqaUaWmKTVA2w6mS52Lv66PUE2ZdJWNxByhASt44cnVtiXm",
  "key20": "5fZnKrQu5dJLAsJBnq1AHw8MQFp9fAjSFzvTSp87WePb2RFEjxb47XUE3TPyEtAcKbJEipJHejRSQMFZpCPUBV7a",
  "key21": "2dhjtFffGHbnaTydJsu1oww4phf5RPwaGwZLg2btZigF3cheVe6c2Z2hn1WAUR99acGH9137GXqeAEKCRh3mJ8Ba",
  "key22": "5nUkxXDFf9f7p8hwsEw4TY1j19ogNEFiBycUYp8Bi1CCpb2wJirqZ6M6MXahy12EYoqyAe8q52n7dYSQ6qGJXa7p",
  "key23": "3dwEUvmjC5b54BJ6HWwDAmRp4bVAwWSbV4AStLrprrkE5tQQFB7G5ENFtLTM1Xvq8MNi4qUc7DXertVpXNoJrTAJ",
  "key24": "2vAFBDUUmFpb35u1HQu8bq9yYoKruVzHwmgYn8Ja6P7PYShzrSTa7AdHFer6v37QPvn4Wt6y6C5X7oj39QPusTEK"
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
