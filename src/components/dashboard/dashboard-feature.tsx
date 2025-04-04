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
    "22yW3iiupRvykPwQZdiYCm5tVC6vJAXi8RFgw5dZuDAz4c8AB5gpasnAAEFPGukGP55iHAZi1w79wb2n89R3D3Mr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y3ng1AD5NMtKmWV6K4c9RRNZG7cKpJFi4VRTstBsxLJ4GGRS5BQXeXD57pY54p3zB1LMtFdQjqxe7wzfYe1PfMd",
  "key1": "3F77UvNFaoxqBH6RUGpBB1Lc2qdFBuG6jRcSwDJiGCb5z2rWCrMhV5ayrsH9ynGViiWiDHMSEFv6cQXWFTkj9XTz",
  "key2": "2LyYg4LgDnBW5K4jpvhgZvayrgzwCo9JrocJynQh3B46ue4uY4FZqGMaLmQzDqqDpMtSV3VaGeUK6xmYYNbDZsRm",
  "key3": "6KzfihAEsafxX4Sdf6EEuKna5NyeoNs2Vuyq9x1kUVuLnUqxAJXbzAKzj6BGEcJf2392Kks5eTFyG8dyks3fkui",
  "key4": "jCAckG7CE14vQScStWs47EktB2vNtr48jiJDwN57D5VEi2BFWBbDKcTEaPe4gGrb1FGb6CJ6VrmNquFnQm85hPP",
  "key5": "38NcMcDfaKvSJFwxhtFVyqK8mSVfAuRjRE6Su8qan9ucXcdwsze1n8pQCn1wvWwmEDRtcihz8iganebNPhX49ymi",
  "key6": "32fZAZQZ6DTfKW2U1C9MMgVCchtYB8odnDjMZgXMaiZMxqbp9w2ssQxTG5Ki8Y4KaoKUqf5Kg3wCyWT94ndHgjAB",
  "key7": "54osGdu1NAQb4VFKHHvvfHHhV2j4xQw6jv4MhzD8UnZLbXdKfiMJZ6c8eCTMUTkm6SHdrmWscCenWYHZroUgHrut",
  "key8": "4EqMT8rz2NCSmkYo7E2bfpuHGbNLakRYTLd9HNwYvsXjTYgCNeytWkc9wwFiACaksBqSFaFv2RHegbkEvfbDyyzm",
  "key9": "3o6mJYfssfHMa5xg9fnW54chvvypZD5zpf8bmvXfiMgW4kj3imcbJxKksSRFL5uzSyhz6XLGzymas41LBNB6v1tp",
  "key10": "32GNoXvbTbTsZCK7d2YisBZuLEPhZ3haZdzygTrsb5ai4ZQruDneL234AR4mMhEMobBZcM8V1s5dSjmt6z1NsMXa",
  "key11": "3KjE4mnDjkYnrCxkTnjZBuUkratDdjiNawp7KgGp1gMzs3ejiahfigZdJimTgR7RGCwwYSDxSfXUKa6LGXfEDMG1",
  "key12": "2vpd4V7KCr3BuTQNsw4QoKABdb1iqRg4fDP2VsZGTYj8b8MHHMEHec8xmjXC8LEVnUcodRrPGaWZFLJLztxGfUo3",
  "key13": "3pEWD4UxrDQUy7vyJ5rVXkK919jfrUxd1atNxMYFZy8gRSkzTLpfyUgNFcQJ2XWxmq2kzhiiiobB828jqqsjSzwh",
  "key14": "3QcprVSn4J3mmMxPSP3ZRCSCmEyXgYY3yY1FAEtpNgKfPGYWEZcJbvHm8keAi1zNDv2YuALAbiwgPHGNSNrWTWpN",
  "key15": "5YHmEGXUipQmcypVNMvRWf7Nye1Zk3MCrQ6n5PKufrUYDD1i8NV96dftnYQhqsxJkfFxTX7ha4sHDLdjeeuswHfu",
  "key16": "5zdvvFmLzShScii9jwFBj1MPXgGzUPb4yMkJTMVm5GC7r1VTXykn3VR4ty2DWnMoVnR7ZvtBs1Nj8yw8xnZQAZay",
  "key17": "TuhbFscm32zF5HUZBkKcKeUf5xKVnsBDU8QPu5XNsCZRUu3zxYunUnqVzbdkzn3xwUZEXzAdq7wHEhwrJ6LT2Wo",
  "key18": "4qMbcxiAdfPAn4uBERhVT5MHtoNNHuniXeMihjHaSMVNb4EupPv4NnEp4xbarzHfKLyjCmKu67kcaUkXSzYpzYPU",
  "key19": "2R87E38EeUMpjoVRzvk9bRVbtrfN9iXQeuoZicYNRw7K2AR2ZrUvYaqDL8Mokt1zyhBPFMgJx3fvmhA9AcdQ3kuA",
  "key20": "owibWH4ni8F3yVWKwz2aMTXqrygHnTwpvn6Vo3zn5A2Jc8sxjzJ5ZhiA7p7guYEYGpxr5Ku3NVjiahradcP4aaA",
  "key21": "4UaFKvNQauS8zYviPv2DUnJBG4YpGJj1NP8KGhT4asx8yNtrMBcYZ2jMemkWrbJ9S26tLnEN6gzcmzRSCLTKBbAx",
  "key22": "5Ev3s55zTzHHDUwT6w13dydweaRQD9irzXgN4SAExqyUTL2EEFV3s3g46c6vrEPypdMVBMvQ7r6XxL5drxhgWKDP",
  "key23": "2RWSVkQnx6N8bo6EYKY31zDmD6DyvC3uzZfxDwZk6KUyEFfnsbvVagxtjcyA8YFxFgaGeaAHcYZWczbDrxwQF2nH",
  "key24": "4kLQpzTt3VfVGzNPtF4KQbFZpcRHgNx62X4tFu4xGKhy6KcnfspsFuKQasixNrCQsDjiMvvVsR8DmdwckqZzqmh7",
  "key25": "5Z9FcPXB6uDSCVAfAH1i6bgV4qdjKmwYrRWkarYiTX7BuLZ3Lc6UXHK3raEhEQH8VGx5VVWXAAk8k1eEvqz1JW1U",
  "key26": "aLZt346rLDcqGMAYhGdNEmQ11b1n249WTP4n3FLVmtBdgCZpt99AyMqEGZW9qc1W2nDcrV3cXFuLVEFWB5PbDjv",
  "key27": "5qwfb9Z7KX2a92aXUy2xkuTevdNFNtkQPUL5euc3yiZqnKGRopvLiT5GKb5hyyQ5FfdP1vTSC4VddfD6gxA9ysw1",
  "key28": "5prhDhtiPXbHBc5KAhpBV4AaRxvJH8NsMQyBJX6ho3xyimJXZQcysSEdWgjXBimNNi323WuW23N3b3FwiZtLSLtW",
  "key29": "3MzPoQw8kHGJX7n3nGnaFoyUxKggiVRNVyxzuMpCfzsFX77vS3Sa8oEeGzw9oBkX3k49o4QjZeVydS7MvCPRzVpU",
  "key30": "2rAyK41q5VijuYTvWzNecN7WJ3s7udm5t6WimgJ8BUFmSXXY2tWWVcfGwTjzk7GYMirPY76SrrVxemNWHf6C4gVm"
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
