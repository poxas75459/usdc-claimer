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
    "5mQyuqNYcD75nZVQyfcw6Mk5hYeA2Xss2PKAL9u9gdD6oFiW2LD1548p5c6BK7gwWiBUQzyMqkK5rh866LugwkkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pE7eQhJx6QzKzuev4F87GkmtpCt3AkRy9ryMnU1vDSH6v4f3tmQMJodyXtZgnPvhK63VEtpX4oVpiyta7R5zyEY",
  "key1": "4J9LkTK6ZwSvNaLuxtsUxdywrgrcH5zqJ4PCGAjYMYxoCotWAShSoHumkbpH8aqvc7aT1x4E6kdGVVjVNTKLCRhw",
  "key2": "66Zcn26dEbr8jPqScP3mADK4KsL35AunuvXpjabX9wKkMdyCMcE3WDzPwfMhGhvQEPoWAkg5PMP3HPKjL4trAVEn",
  "key3": "337Nu3piLEbj8W9vhRfZikwZKSRDKLa7yCpA5JnxxkQMnSjZZH5xcdLTcvvjxecx8GbYLtiDhsDqazmtFxHzcQui",
  "key4": "2N11ryRBNhFutDxDfUCmMgmAi5RwLSbt16XT8zmXrm262Fx7VZbWJMK68RAYsidgJpMi3NkMnXbDpe2aBLebNYNa",
  "key5": "5MGRoyLvX3rmPctXRF7XaMMEr71KsgGqwcA4CgsR78xDs1WGPkGMyTCV257ZuTxSzpQb73QPLMbQ1AJ8TojwDGKN",
  "key6": "2fCrndoTa4F5xPiwt5uGyhHu31mqvaeDMgg8BafiwBToCtznxVBe3cPiNiTPuK6pgtspoGDv1M2ar4i5P7MLek4U",
  "key7": "4F3TSM5zFA26FbwA7mgFLyyg6fuQgRKT5gZtK8ExYNwebtGJGSdo4xgxWTwSd2ZEe8FJ9KzzcixQAexdx1fNTbHR",
  "key8": "2eAXuZdMXYTNowUmneGtKLSa8EkkG7ET5HLDDt1peRMvC853ZCbTJawF1kuFmHqMTVe6sdu5BFfbpcBQQoojTSCj",
  "key9": "5cZdCUiNieDBV79DtCsWFmPRJncuDoUqnBo3yUB7nioBTM97skziu6emLT1gmwddjLUsh4wJyytkpDuz4f81MDSb",
  "key10": "5ESChrfaVWUzgmG6qKK1f9JD8FPRgfNDGfSq7bTaqU4YybRJqtyyxH7uRUceHDTXDmMTiJPCmtCr4w5ZA1o29LVn",
  "key11": "5dGPuXmbTYbpMcKzv6s4YBsfSESiyv9f6eFvzt1AuMhJzbgocNDGTQUNngYMTvu9zfEU4h7uCwMuN5XCH5sFVeFu",
  "key12": "5GBkf4RjCvbCL5ZY5sLUjgbM9zJzYp2QjcZXUDoSJG57wzkFL4ypCPj4HE2ah98RB6aiSEj598DCEL3a2BWuRY3S",
  "key13": "4Ve5ea9aAYDhFvKqiygcDbTddLmd7Qra9fJzvRwn8hEB7KQqEAB8SPhU8Ga1zg7u8fQQ1HU4w8vTe9JnU5KLptzH",
  "key14": "5PYUkZNcm19sQJVJLsWbSFGi5mkV241q3girRbUbacH26FgiMBGNEki3omJhQsMCJBQHrdXDg3srMXkBHVzUJ6L7",
  "key15": "2pm7BHzZZyLwXyCqauCiWthG7A2p5ggCP6qxVNMUAgfKLLWpzo5M6gVVbD32ZvsCxEwQ3jhJiDP7rrxJmp4NAEAh",
  "key16": "2hW6SbGo7vffMtKgQD3SLccBJKnJBJbzLLM2mvCjw9BpZvUG7WJpb6C5KK7CEdvk7jnoTM8zyjbcAzqSDXecyPur",
  "key17": "4XnQALCbjQbVJgGVhcmCbsQNt9hrPfganchnv7jsVyQP8DWYCq61TXcjz4YRjXTx18vVn859eGeYwhBKpoN8nN2s",
  "key18": "2Pzgoqrd54n5juUz9k5RZW4NnVpj19vmyu68N5sVzyUKXHUy4LXD52Ec2WfCBsLcyCgpLfNATZx71Nub7YCQ5Ggc",
  "key19": "3sb98o8mL99KYDdsL2kqPPUBht2KQK3tmht13cdxJGgmRwqPRZxeThYdXGma8hf1xtQ7emy2M2okxJYYG5yZbZr2",
  "key20": "4JLH4dfX7PJY7uK8Cuy4PfzMWdceRBis8QFyUb9YmY6g7n5SqTWxWACwo19Vq92GaNN5MpFfHgjwapcmGVX2bhua",
  "key21": "2fZxqUsbGpNyv12GhH5ZRPcpAdNoZfKqyizMohacyhX4LghkGooW4m5Qo4D8qCtoNFkjiBQpQi32Vx8pjSef1RQN",
  "key22": "2bEgenbCu3iHWXNU15RLEnxecpXb8VXsUz79UjSvXm4CjBTK3WJanDU5jLTU7AcwdrZvUb4656WTWcKAzVPzaTHH",
  "key23": "2GHHba9rkB8tyS5FSFeubBMBbWfEYqkxp8zQ5SDNF8uu69ePBzfjod8eqYyTYpzKQmz9BmTe9zS34Z7vtMowNFL1",
  "key24": "4PdZyfTPZBmDeBpXL1RtavfsHEXmnXoxbUNJS3HWHxoqmit3zRfmuWvQJXeScRpkwX8uSe76KYE1YA3sSR6fwUjU",
  "key25": "5M4Ns2PjaNBthDQo6YZrjBpHvaVkiYdwZDYPeG2BktVrGgJRCLimabhBF6foPEMA9UGCjd9ieLyCRyRmtH8nDaKX",
  "key26": "5qEgPYVj6kS9cuAjzw4GKVtzyB2vNHpxazCe55mUb7ZULpKQf6AT514FBgZ9a3EjVZFFMFCUvAqZrvZMeQ6ABnr4",
  "key27": "59aJzQA7GJ8n1Dw57v55zvVyJDtQGKy6f9YW6zhQxoVRqSg7GmUgx4HMrapZG2wVWUhwQohc5FZ7N2nL2aJTVSEo",
  "key28": "3uadha35mxU2cudM2nmT4LxVT4j8xkNAgPTfb2cnvNqYpCE1DRrXdwTUWZQntxvsQEwMtC8Lgg8dF76DuQoWyLtA",
  "key29": "4ej9JcqeWPT2PY8aqAQj9m1foLWAkQrVMekAmuUpDunWLMS4YsXME2U3vJxwJrkwhs1CjJeCbYJ9TkFBPgENXSXu",
  "key30": "43hhhxh9nmNbX8dvL9biuvRadPbWr5HXjR9KTYQu3BABB5ubhR99Juq2QDUNzGKzt13F268gCt941nuBCsseEgJR",
  "key31": "3dLwkvZGmxnjRfL8v2b7vgD3qHaimw4SSXTVZZ9reAsYULu58uatCy1PuAS5TJweKCgVTkVypvJM5dnwZw3M8oF5",
  "key32": "4zNsvAkPdJyzu52qsZZKDJJ9zN6bHccq9UxoptYG5L4r93KmxDFEWY4HY7oxL7Uqkq4GQBPT3P8x66WJmAnSYiCX",
  "key33": "5PTEf5AVKD6ktxaAH5vtf21jGVqZzTJwJRzD7fJMucw9ojKRDQXxhFmtu6AdSdVgtW9GBf8zcChra2WapvHFgAyN",
  "key34": "Zs7Fst3ZCk3LdAi4q7qUa6afkZT2SwXDiJhyeJimL3DMjL6wk38psMFV7ivrsVFY4simEsyEouzqgiwvJMnazzU",
  "key35": "2Exe8K1Y2M6UJFVGYLbgYHvmgwxpZ9UJgBnyanHRjJvJt3pQF38zZueZzLQzCkWYrNjVgSJPGiNk5Wh1GwbH145H",
  "key36": "5XcdHVBv2X1LBjTKnVJdQqpBS4SAE7ipudfqkE3KKHHKZYmG5EGEtg3SMnTRbkPj5GBzViqvJ9bUTr8EAm9mieJN"
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
