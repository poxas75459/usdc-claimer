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
    "4gRtVZEeShvM7x4gxYjhW6m9JGbqaoGEDUF4DM8yELXrfmoSNoLSaLF9PGyM7iQZrjk9EEP5dQTxggPT2ik2NsXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LomTfaykfG9WKGsvZUGA2bodTszrq6sAtoYsDbfyN3iWeXWjuTaM7o2eQierfHzTZphomdWTPFZudx8fsePr8Vg",
  "key1": "564xWMwFo6fDLU5z7ZBVAmtmraziAWoq5g6AiADDCoCjeFfxz2KN56cjtKqG8n2mhn1r2ZgQzDoqf2A42EBQsmef",
  "key2": "5ujbmi5sjr9WSZcXksSTQod71ukRZHkBnYQjFU1HS3JewqJo1Sb3ja3sjy9hWTyiMayQADmvkF59H2oew4TA4yPM",
  "key3": "4nCxuCAiN6AznFDTH4BXrUUN37okZzTNe2GKC73gMLL3oW3mTw4RfQbfiJhBYnbZAB9VhiLVCKqAF4PpajZd83kR",
  "key4": "4YG4a48gELmSZvtNS4upDxzhScNUGvPvFPZeTB98kn7ttY8gJYPQGMw6bg9Q36PmTtvzPmsFiUqn9eCiji5ouC8L",
  "key5": "5W4x3nuEBUxSSM73CqcD8gcpMgqU335PFJZpgjNSy43mcVw4LXMCCD9RJ49HxJ8uBy6Cw7BELXbLHFgxZN36u5eu",
  "key6": "5wZfDhUbGsVCK2DNDZzHSc3VEfpNEHTxceCNCWX1K7K6MXoAzd5QpqjhMSe5wXg11yHJNRJ7A2cHFyUa59D6DFdK",
  "key7": "2dBn9XYuAiCA5wWmeXkvA7FrYm1hzLjJhvbZc7Usd5WirJjLgCChzfGQpFAkYciuMYfjMThts3B9akNZUNozdHYJ",
  "key8": "37H82qwBJEnYVH3HuFDy7dpksqN2coh2XXHMALCrr7YN6vW1Qgsua52CRtbA5QppqoyiNvsP1vJDAPCQMkNq1Ma9",
  "key9": "2xkh744S3wPJS4jtS8uSdBNnFqXyaeihjdekP2zNCj3mY97D5U27ySpGRSWZHkzSCPwJN5nw1it1A5meSpEMbf4e",
  "key10": "5oiDnFi9DLErAw6p6QBadJ84ZhtGZo5YstgxMRqdN7us86gAXWuMQRyh2qyJjurKsNnixjCZYALL6qQN987Ts9g4",
  "key11": "2b71Q6RMKB8cmg7DUUsrtynt97cmg6u1HxxVZGAwEVyxUi7uFx65bwfSmGwwJyTxzTB3FPmKWzfGJSNq5UzJsz4L",
  "key12": "22vwd3WnqDtBowCgtQ9J1Thbx6vXt4SMc6qBPU8LeSjmV8ih2HPwbP1FjaTR95iV9eVwk4cNKD15rTPGnWzZPDVL",
  "key13": "2oRB7cpEHDssuLJQgE3SSJuKh6BmTg2iWRpmmV724My3eW7j39qduipkiTuWuCiQLFoMhync7J7a295Fbv79aytR",
  "key14": "4Cs8JbsZuvwTXxZ7kmmyndDfoLRxZq8bJfW3hc5hn8jqU4xM9duK21JCzSecYmBkzS5enonFjxj35wcdrS8xtNKk",
  "key15": "3HNBPHWQ1fFSHcbHyT9RVyhfZnbCQY8XJ3eQKvNLjcNugEJwRtsS5zqLWj2G14Ag27knBgCmq7Xh5ytHTo58Le8L",
  "key16": "QwquqZF9g6Dmfrtko9jWxCRzE2WYLbtne4HcvukoZG2V7gTgUW5wE5NGsQaGLmWah3D9tJSaYuhbsxXhKVBk6Pm",
  "key17": "3jEPM5vbmZN2oKVHsevTCrvNEC54DEnGkyzuYrYRnhLjxxQPMEUTBSFFtQUPPuSxYLwfvjLnwDJfbPNYey7C2izM",
  "key18": "4zD3aQTUDA6Zo9joV75xMCwizXvLDpcpnpfFzMLqbkCV4CGz9a1D5kGmUCtBmbLnNSN1FYqcMKWyGG1rusUX7rrx",
  "key19": "3bJceycf1sCee1QY5qxVDZFBK8eXdQGN1gfjfK3Rztw7nHYGRLCrQ5r6QFtA6RydjDgF67hUYT7Z9PsW5uc6vdjX",
  "key20": "3UWWCD3iYctzBPqTgoZmU7juJEhGxG9VxfrBBZiBTthAErZesCE3GtEPnj5yEfoMSeGyasAkS6qeP5ksQFaUcphZ",
  "key21": "2KfFpJX6mUEi6dwZvGcjYRs7VBpTWfGAa37z6WF7Hfan69rKrpquJH1bLBzDm4eb5uombXDZQdhhbTMwRMHqdvxh",
  "key22": "5BiwsoKrb1rNccM2Bar37mBJyCMrej5kAzDcQHrQYL8FqdaUnhTvfmPWZ156FjJG1PxLbb8o6DKb1p95BB83kZLf",
  "key23": "5ry8HQLF2VGLHZmR4MjNoDZWwaTd1EYCxVTDVGTvAGTqFcZBE9h4vbq5ZCdHmdDzvxZw8pTsYoC9RkATEeecB3sc",
  "key24": "2X7n7ndNR2Aandr8J5du6kdmrWhzGCGp3UD2njfNKxFRJSvVL6FPAty6MGvuyBR3Zc5S1V1gSm68jCggysZN1PyU",
  "key25": "5rENmSRPjDrDnSFRsbWXgP9Taj2EkbR78uPpwJkWsXUr243tx3FXQN8suMqsuW6BfVdmS9ZxuCC1VGxcRadMXeW",
  "key26": "2JCe57zQ2jqDbDU68umAqHHvyzaBbZBdYc6cNbmr8fDuFRUVNtPgnzEz3vSB4xdu6Z6Po6yzNGsHYi5cgpd1eKhJ",
  "key27": "3QfawpgTHjn9b4bRBrZMEkZEwGSxhAy9JmuDvUPMGpzv7U6AzVC3d5q7VcMkCJ7JfHqyBV5XzZrW4ceyZMkfwhsc",
  "key28": "5fB47tkKDgePYyYbbhutaXoqgTg4hc5kunFEEisgmTAxvjRviZ2WhdbNtvwCd4iok1faNJAicUUr1bgWCecGSHv3",
  "key29": "2P97C7BuBdMW3k9bsfDsFsRj1HJzLQ6QxeTbG1iudkuK7Wmo19cSucH3AWr5tktt7T5JuXPvoMhmjHZ2qQFb85r7",
  "key30": "TwVQxyCW3cDKWrjd8nmn5HeSBkeZRZwGep2hbJQZ7QhoBU46oSMqpWEwsthwkvf2kvbd2Gx7k1XR7buxQ6YCkCb",
  "key31": "5JvWF2TTgu8Ahdqau3KGLnibgso2BM9SJ7zGbnwN7b5Um6iCVRJQ1tvPuSWwEYABmdk42G6kktaxNiWdi4xjzhYA",
  "key32": "4mADDK198KW62bGFy6otZDWWFLQP3d25898AzNd5XmXVt1ycMBPCH7oXq8BMqybydEL5Nyqkf2g9aoGSyrQ44ocD",
  "key33": "3naY4UXzbPajHxG3apQks591wPQzFa8RPj4MoPBPHmRzsbBREMo3wNt5dCDUFwMwxyrDZzms7DXSdSddLGBUB41D",
  "key34": "2Yd2JFPpGzrKf5aJ6XeXC7SSg3Qjh87Tk8CHhGA6EYft3nJkkDsk77UdJr1Yx98v8FxLKH75h1z3YtcVHho4JK1x",
  "key35": "5ppCVmzucApf7DvpkkwiGF3GJcCfWGathMc7NUab5pP3TCTT5YxYt7iR3my9wioDRLetemrLi6gUXh7F32R9LytY",
  "key36": "2ewhEEwc6w3Z4yRQRUgwoiJk3o5AJTJkb45J9dF6qThR6emTTdufLC9kR8XZt8rVqmx4jFMSHy55gYDtfU4o1cpS",
  "key37": "krDFrEho5bsWZtam3TeVTuj5MK4QswpriHzVxvregsZ5gR52bnX48VSyxtUwbRy8bXexTo5zephuRSXt8MxFcau",
  "key38": "591nwwz2PfWVb5gz8xGfzehA6mYkjenh27s1MHuAWcQ2CJiasf8gMdLUVMtGD4yeALfWYdMdNSUEd4Svn9LzNDcN",
  "key39": "g7gydbKHRrPMV21DU7t4ifY2p1oKzMvmzzsYDbUNzafZYWVbwRSd8Q9GdMm6hjXKySTnCZkMzG1L6WbzPt2ViDr",
  "key40": "2a37yENUkwfABAnih3uDRszzWB55TjQY3yPe8XwBcxA9Di3XiJ1VkvPyvf4AZw859kzweGnK6Ut18R9uaNGFPr1J",
  "key41": "3g4K1HvVBncr2Lkvk4SzhioJCaVQeX7xeLNRkjTx2Bv4SKDRX2RWQsEjkksEWC3KoCkjakgKGucGiVEF1mMkL2cZ",
  "key42": "4ndLwBYMqkS2BXQtBaVzkNHowjGK4bVmh5W4BJBM84riN1Ckfd4JKpTp2GhXD8cQ3vYRSvBjJRPRkdsYC5vam4T2",
  "key43": "3ZtbFxFhFW63eFbWx2bJD5dAW97pCWAnYiyWE4aN9ox1ynAS5ANQbU8DvX4WoM3YtTak7ty7JaLbFaSnQaoKqugZ",
  "key44": "2RZyeuNWuYe4mqCtXd38SitdWcVw2CjyfbjFAQU1bqkSBSfKmveB3BJchuDXrbs4soEi8iiULgScEVwHMpCDp9LS",
  "key45": "ncy52TUiirCeQZxNN5mbQnH8scgxzF1Q46tQfYmReUc6aQCa8Gg4ieFyupL7kQetRppLfVJULxrfKuByVHqUBFk",
  "key46": "2FgJHGAcDaxiNFxJrmHFpg1Pxs6xRDBR6iHrTmABXiXcbnACR7RNNBoFz2by7m2fojgoMP1aKjETixCd81A2Hgzy",
  "key47": "52UcGFUvqCYJPtPbTwPdpdCAh2Pf9bdBYcVCmc3HWJiQdDkJqXzN4cLJ28EvVimyuGUuNqvPV4a3VWWp3JdR3aBD",
  "key48": "2ajSbX7zPdPSYwwARDZj6vfR6rRWopt9HC79jnWBACHuW6weKsRprHkRBV8mWuvJ8hHD2APtFtf4nu6bKrsa7geL",
  "key49": "5q6gi9EAfjymrVkXN8hQAM2mymjpcPkKudWNB1wFdsMaNzKKq4Tmi1wM3QXFhy6LhsnZB6TDa8VkwdFBRxFjuHQY"
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
