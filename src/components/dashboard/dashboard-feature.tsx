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
    "5iZzGWQ9Vx2cYhvNbiZCe3KS3P3fSJM25cZ8N14hFrPC9DtK2zzEEpZoETr5enXDHCVoci2TZMrsXZ5PJUBcLuSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nic5xTn2wK3dbohrsNSyLa1s3Zitchd1hSLM2PSPoiretzL2Fchmi1FGjaRvJSGZvkSzLgoj3xnc75KPhDxepTs",
  "key1": "3kzZy5dFMYiKt5gnfs3vevhD4pxo5oo9G3k4WJgyDbbYY627Cnb93HmfqMDGHkzjDqBURFArWf7TjwtbRodMbaTx",
  "key2": "2BTepZHS6mmMMTFCwjzewBqHaM37M8gVRB8AMWv79PVT3jf4pUKXa4v1dSNWjpaHKkShS3Kdxsi1GUBPG9tQ4ND4",
  "key3": "2qaZdQb9fLxqow73uv55Gyfy2Vn1tXBCy3ARGc2X1DuyBSJpt4VWzMjQ6Nvr71o6SuwmhR3iSuRDRupy55csDxYU",
  "key4": "4CZ9B3pJURcbKnjUhoZmwCPsnVxGmVgRmfrKUpznrNhL4DinVSA1QWzixRjScAkVSpnu7ZyKHr89AgdmhLbNLSfS",
  "key5": "3H73xovfEhAjSjFUX5foGkFwNSJv3XomsRD1vQQJt6bFkz1hBfPr1TQH4ABtZAmm8XS4zTBZxm3e3FKxKJZnKLBr",
  "key6": "32H2y3JZxSpYK1LUM8wjPAYUYzuJ5BxsoD2uaqG1X7eE7JMPHNXFiesvTjwFV2CvcmJ4KcfCMcq6jcaYd6eYZujS",
  "key7": "whAFgXy7DbiX1wN7N85Z357vctYbmwYpJka5JjZYiD78WToR5F6YVkoYEcocdYuo2txc8rRjNJ59KA1mbkiz6ga",
  "key8": "4PCLcz3TNHwYgBu1DM4CPpBhsb8Er8b3V8bkntunXiYwtUf7eBfijimDjUJPGwiVMuW81grKPUPbxdVEqrJcTPD8",
  "key9": "3kKmw7LzQjYVq2AxJPkefZaf615cmEokP93tokHfCf34yKsZrdXe1huTCjYDqijFyd78So8cijL8qQAKEgVjXJ3w",
  "key10": "2CsL3JVZwDivULWoLA9MkJoYj6QwefXVxYVuYuaDDNxwQdxWsU22hnc65FeeVvs5Q72ytoeuJaYhDryahojW7bEk",
  "key11": "3JPax7SC3FpdFiApFGbKmxUHdMv38RJFNWMJFdRwfbtRTYMmRMfqFkw8m2ZazSbDfuqrCDgAovxFF6v1tot3B8U5",
  "key12": "328wfrjHBGkQMrKtzRoh8jfwqqdpQjcaBfnsr2ozVnjLiiV2hLjYB2H2Wn6XVvDW5WAQvp5y6sUokj52UAYR2qUW",
  "key13": "222UExMSaNcm2d5m7xbuhA4gKsntTUFdaUjosM8FNqhGQDWHmtzsrF4CQjoLU8AJ7M1vn9WoYbcAY9ox8CYLwnGZ",
  "key14": "4ocggQARA9ky3666FjzepUUJU2TAyD5zwxs9RGCus9XnHTD5iNoQCfXLLowtGe8F1U1NKjmLD7M3tSkx1nKz7BMz",
  "key15": "5fMRLJ9T52iA1k5i3iBKPqDgrVSw273soCgotfNt6d9wfFTJ7GRnBrkXwTbzk4SSBJDbyiFAC6sJ2UbQNkBDt41A",
  "key16": "26gxV2Dr6oGhAevcokqp34Jq2v3TrvNF13VB4mVEg1qqUF5GQMyXPsNtrG2jYnCpL313YKgop6G6RgMDLySku6s9",
  "key17": "5ehBPdFVz1UQ53fG92cA5iLJixatAbisyUAqLLY3ZfSMRXVFLTkMJpF7AQCWCTXZKtJsgN4R4inPMowFiw7qUWEN",
  "key18": "5amU7heXTxycr66LGGppN7VY8DcYfqJns1RzD6VZndi7jZC6afj2RUCuD92XesQ1xUSoSL3vt9B1x2VK5gpD46Nn",
  "key19": "3H3mdjoAZkwSz7KHSFnhXbzVh9DuhNzzXQCwEMhKQAVBt8hTDA2aAffxv8xPikTqXNtfEj6LvdcUWzR6nnMnYqgP",
  "key20": "5MH7sBUQLKh1ekK8PfawdW226feE7vZMccDuNPmWvbAcb8fcTtTyaDqksc8vD1e5552g5MyCBEoFy1AfVXoSQRhk",
  "key21": "Fw9hoMNK6YP4bvvWQrAX96NeKSKK5SkVohjULy4dWE9Ui6k8MkenbbTonKob3u9Tds1CkZ2KerZKYtgRPyY29Yz",
  "key22": "4zLYMsjoMr3UT17AxjUhKFp4rAWdWcrdFCiX9g3jFRBzroEGzt1wjgQSvDxeCUZno5KQa5FiECWuCm9uWVcQ9mK6",
  "key23": "2CW4gDoKCKkstgvnUFtBMu6dduBYvBodZXmwArxwtM3iowJkrHqpgWuwbrtTPYBouqaYTcrWmndazNbEeks1iuR9",
  "key24": "4CgQMH6iUj4zadKbp7rNQF2X2ccccLvxxCgb62xrDMDJrNZo1DV6ERQxuG8i7Qu3wtC69Y92Xgf7VRRSZHio7Cpm",
  "key25": "37qs6tGrTwWfvnYcpmC81brgpvdU9uPGRUwbe4Ye7ERZT7kzpsNz7SUFoCKkiZEE7zqUBLcm4zro3UUE4yJZxLCL"
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
