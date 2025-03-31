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
    "3WSri3btAJPdWt5XPuUW5jjXS5b864wVjnuuycJG53ZToQXZnvfrUJ6nMt2kF3jf7orV2q5rqAB7LZjynBEBshx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GCK6yJzV49Hi3H8qeKC8xb7AEWLRAq8SxLiXp5UJ2taroUjXJVsuScPSQXRmyh1xic75fCJGVR27ZZzd6rAbekp",
  "key1": "MHAtBnBeDCE9S98rSkSAqDq3tb1fxoh61x4AdCVbmTbnafpCxovur7LVbVqHzEtivWMdpYwfKPv6wfpcwHx8job",
  "key2": "4R2R8HQHK5GShUagzNiMG2qpBM7TpTV2faZTv1ac6jYLKMmJHb5yg8kWB4L3KSqWHGNaZiYhPQe8ZC1G5BdEyTro",
  "key3": "4QtGDtERSMWtbJQ4nXxYUkrXjEtrkdpR1bbpFeNjk3pwReprZwqNdEWMef4AD9U1FPex4RZ4ML5JctFkVSNoMv2K",
  "key4": "2EioTntwPUA5rQuMtKbqMwhXMDcoN3NtKyJekhHSx92vS8tgVnv7jmN5M3pLeTZwqs5SaR7y7pckbGpohVbgLzsG",
  "key5": "265Vh5ewLkSJLjhn5fNSKgwucsb1HQdKMtxLhAcW3LyrDFXtL4pm9q2yR1d2gx4gN4vbNZ8JGro5oSzPLhMWgARH",
  "key6": "2VwQPHKw6uqStmobk7b6yYgMZowpk5gapxLT6HMn97tipAJcj8eUokghih4ZpnsAxKhdXNX1CGh6y5t3qfj6fbhb",
  "key7": "5hTatGF9CmhrHtJxQMbRGtzHVPQSUCiqSZJ2XmqaXH98TFt1ohgHdfaK2UqiuuXqZZshr3R3YrhgM6YFgwqYC3Ew",
  "key8": "5YHt92q72SbisMiG9J8qUj8oX3ttkRBbT3BfHXUuALMgRYSkCe2zgLS3YV79tUUCzfYKzwtxzLrptWg6j4gAnncr",
  "key9": "5fjmeCkAMoRJi3a7RESwr5pUF1ivxKhs4Gaff4pnxjTXiLrBA1pRrYLtviDBTN3wU3WGrK49CiKRoo1LfyYFykjy",
  "key10": "2LEtVm5WpWWJMtXNz31YKJSAgQHTVZAwxCbm9y3f48R19JZgPCuLURztDfzNRyqZ2ym6DtLWVspDEvN3E9DWnySW",
  "key11": "gb5rmexrsjfvDQuWjqfsgUoGnnWumJ24vEWsFoF4nQS4TBskN1mrLBwyyRLqFMmDYQXpCnDAHvUkLy4v9FGwUCm",
  "key12": "2kWZo3VaW4uQx8FHSPMv9FJhwouWUUqM1CAH72oYKhkc6x6nnevD6DBEn7nwfzT35mZq5CNaxEbZVE7gfhfmytys",
  "key13": "2LwNX3wnPDbkTZYtPaPgZxEouuyUoGzPC2etKR2MZ6wGsinohGBxgofs4irsesdcEy2GKRbCcVgeq5GVTgDNTPGP",
  "key14": "4BdfVUzy5Q19GfS9Ts2frwoYtWAxpviry4ZVpgPSxbdmWukyjp25542szJM7thUV6y4uafcqVoiHKycbspv9so1a",
  "key15": "3WY1Dv14bvhPLUbmCtZR6tRqMx3U1HVzYCa24xJNP9R2DebFLhWv2n3xBTvD5ryDZcTUQPaiBjhMSqnrqCTLNhRL",
  "key16": "gb2ZmQsMZgV2Fa9cvShHmtEefErgrkL6BNbDpKFMGkko9sFsqw5TJDoFe9isZP6dhSermULZ21o1KePWQVxnZBH",
  "key17": "3X3dupf17eznDPx6H6YyD167Wp7k2W84nHArRHBFNwymRetshJXRUtR6yWTyuRQsCiEBmWkPtcNfXqyjzf6cBuiE",
  "key18": "3pPhvcZjT6djLB1WdZT3ntD8Zx251d3QtQTX2gHLtRnEfCtyo1UPcyUAoSG6gQLcffGsw9SQtcCxf1GfNLJggGbd",
  "key19": "63Mee4nZVFjU3eHsWwpKWrNCpR1i2R42bjmRatgsXSPpwZKDQ4hvQqAzSDiubSFN7cYVSocWpqhRRv5zyvCTGxPg",
  "key20": "26UEgDoDDUTka9aMXMCA8uzjKQ1MGhLhVo8VXJkS4amWdyH4ZXBEbAj8yWGU3yB4WgQV3f4d9D9CqrsdisZUhQt2",
  "key21": "4J7exDMmPcfzjoK9tu6LXu8cXrVySuLjVhjbxVaku1SxpAatVi8tVp6kz1dfuiUqPGLS2xpn3E99WjJY92jXHC8F",
  "key22": "49Lk88J6YLVBkEBgMc6vqSV2XSpqMKxnnhhkwYujnn1Q23BbYPw3tK2PJpv1GR9nb6skGP9oEt1H2wQysFvNac7J",
  "key23": "5vuP4Zi1J7pCLxD2Ge68aVxWLFJA13dForrxAKhLwzuHTSQvH52xGGTp32JQvjgcr1TLQLMo3gu3mRfdcZc7AJxd",
  "key24": "4mzfKd9ijHNnxE74WByHpwcxjDboaHJFMstea1ek3fDYks1ggnn2BvWutYU69HDirrud43Q9HqqVRU8WMV3Lp7Ut",
  "key25": "vwGdLyWhASdzFbrksWSegSLeobpsNcH6XV4VuEjQb58YGhQn4H1F8tc3xYFcV1dwMqiiEyGNooS9TrfDwGmUo96"
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
