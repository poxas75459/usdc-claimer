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
    "3ZdgEQibQdsrsEB6uJRF4hg4n3ni4fs2bd2Dhs2HMfXaqnaHcN5JVrhnNXDZq2RdirMbDMzJHy2baTf4nvvBCXpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bJE3MQtjnstW7gYWioLYwE8HW5tYorWzcBQRX3xFhR2VdXJ8omCo8j4ripR3gJ3h8GhRa8K82CwcyRuJkQKiZNn",
  "key1": "3ca4aR79Ao7tbQdPjJ3kYdpbMSxCM8tRd9xjzxgfuuH9CGCW431NBa1ZarkZ3aJ3GisvCDac7tjRhMNQ58HnjNqT",
  "key2": "3gkaWMsQKkShfdNccBpuUdJSsNq2JS8gfbWJpk2bK1pbc6Uz4HE4PTrqjK4cUCVPo4c95kRJUW4UDjFdpwL2PuY8",
  "key3": "WFYibjJfFhZon4d8hSzsbDdDBEfsYbLjpMjArLziLmqWSSF1Ffxnzk4xh7WNX5SvvoXs9YcJqUznCTppMH1AKs1",
  "key4": "5RLRZ2rkChDJCzYD27tNAz5SMjy5vGcKbeWjyeU38Kry5pdPqK4zaY15QP7frnLzmgpQX7913xJ5DQJsSbkRy5oE",
  "key5": "3DNXMhxrWq73yQKqawbU5n5CyDtM1LJA69yiZeuscVbr1EiG6BC8PLgwkbWCM9Vou52M77TNDopFULoYqTyfvJLv",
  "key6": "3wBNtKecg7iFuPip9z6zQFVi6JupEQ5uC3oGcshhUdurGSXkhLmnzT9XkSJjogvtouZkXMiqqyyfiLCLgRmdzfkn",
  "key7": "4KQ2JoLYoG7ShSsNSYTM2LMjKd8fmTUTwG2pP4eHXNFZr75MdkpjcMXeqJp6AtV8T2FRHLZARqNX4cXagAv7egd",
  "key8": "2ZqyMNggPkxHdbmTPcqEE7TKVWEkjw2t4W781VQvpt4E7AMzrK6Lvh6N7GKtWC1JpBwBXBLWzU5rVE5CPki7MkU3",
  "key9": "3kp6bBDru31jEeCfW4zBnDBpGJ4RontN8kJP82sK9dZaM5Cv9viYpRoDmHHc1wLQQwzdQyg12MYkNvrWsJeDEwvM",
  "key10": "2HR1FLeLEENY9D4rmrvZEiGnoAgUSakAdJJ7tkPwtFM94s7ENhNzZ3rLcpvUXegZtrQ74yKHKcSbpzdzi4SHh9Cj",
  "key11": "2GjD29HQGfqHyVMMhzqEgwJkKDx4AKjEzn5aPapRbHkxQS1nXFHuRxmekccyv57fHudyVWFj4NpA645LzyRyg6ER",
  "key12": "5teLicgkpU5XAWVsYgNGqjMtNVoW2msCgL2H6xgB8oyUF2LwHgyjksFChWnGNfRPcH8TFohiwAyK483iJA2BipTu",
  "key13": "3zM6HFLd3LccV9YqTUKNK6aDRvcKv59pfqCZJtjCA6K1znrvMAxEEkhCtWH3s9nPEJhGMGa2eTEUrmRJGJorF4PK",
  "key14": "458gGQtTXpQkntNRf4x4spoBeqXxPT3d9hzFSDuXSMFQfBXB7cFwx3HhmUhcUya677h3nhXhkqTGVRo6NifyWmLr",
  "key15": "2mKSdvsSWgDidpUngtjW9PiALM6ofVpF5qHo4fKPaTud5v5Fxpxu2sswUKiba5UQ6W4SrBJBqy9xj6YXQmsG1vaU",
  "key16": "5qkchf8eThnbGjCWsbzDwx99LgwQU6NJuNEoiCfaiZfyvLcwwDTWC8J8BdtUpPMJZ93E8MWa7bk2W8mqsMFddsR7",
  "key17": "ntdo4Z7oNPKM5orRzq5yX9zrakYgNnzjULVoFCkv6eELcindGQeKBH65hLk35GjuHNAcN5UyCaaDRmDuoyLowR6",
  "key18": "mQ2GMUQubqnd7YswFrpMnPzNbt6jhbJA1QSDCj6VZyeXTzoyr2YXfP2Yx43BJPBDB9CwxZMURYYZwtkaYB73J71",
  "key19": "a1B8yTQU9wDiaWXd2dqhayTp4tvLDAqRCdRrarg4JLV7hi713q4wqjP4WTScRpVdVqWMGcZoXgVADfmU2cTX3dx",
  "key20": "3n2FkgA1eFzscDCXaaYVApCwXxzrE69nt9QYk9X4fC4Pp5HY3FYfJVQns85DteH9BhmQPZgXnDCSboLiCD4TzBm4",
  "key21": "3E4ow4S1YFmAN3NhgMKRG4YhSAFnWtZJKQHzk6cxRiv3Foacoz4dYiXN9U9ZsQrtcTpXaAxUZ1EVuk4L39W3piuV",
  "key22": "5BBVx5FzzbrHpDp89yvpUqTX44W2SgrqiNDcPp7fsiixZzyQzh6wnDgHHyrP7rvE6sAggNoexMq4v2VaNrzw5J7N",
  "key23": "5PMUNsBzPRXTiPsnYmbbtzDqsTYnfK9CvfouXWRNsbbPfgynxybeoh2oth839yXN4aSdVsLxMQN15ccKhwtJWNB6",
  "key24": "WbjqBtb7CGqfL7Up25NSKKk8CNAYxgJ74ty2SQAFJVDKyhhJaSzWUL787vNomozTJhtfJP2o1aTLKZXYJQWRBii",
  "key25": "4mEwhC9BZaC36cpggge5PgeZZMY593uGrpaf1ZAENxwF2FPq8PYTZ3dNgt15zmdLFnPKJw5bXu3hof2pYjAuQatC",
  "key26": "37XrhbJcNrNjX5oXm12pZ8qHvxVCdw18P6gKqm9xpi4Z3CNe3hM7Hvb1rB3dmQdPptM2Qqhq3rzvHWB7pqDcXSwe",
  "key27": "oojiGiRumdLEgN99We3K2fwBn2T7tkkk3kpi9yMjfV67xZrRpQ5QhvwwqjPYjuTVxKmDTB2qUuVxyBkBCz7QJBV"
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
