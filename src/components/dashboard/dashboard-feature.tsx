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
    "5uZAV832ZEWaXWQ4nfyt8MJoPyfPMoihxjXennBYpvJQktSWgh4KZhdnn6pTsfXcbSDj9KqpXHr1TtZg1T5th7DT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KCTpyWXaNpcckCzTRgb5oB3zt6FVqP4tbTDNsAbWZQsoqmMDP9V5WctVdfa6FwbFcUU1sfsp25b3DmqpkSSK9iC",
  "key1": "2hA7YGakJXNWwc3BkE6j4dPHPSxXf1QHhkQo2LC6zjDMoj7KyXi7rVgYmxSfMRiBEbLJTuaL7KZLXBcLkAqLNACf",
  "key2": "hEF8y2kkTYfevbmWDjieh7qfDufyjvQG9vjWeFF5FDZKJeJtCSXEJp6qobRrpyyAZmxoz1V13t4mTHZ2yqTZuZW",
  "key3": "u8oBBxzfkRE84bGrAhQ6EE1UdR7cNRG3rKTNuWH5vwkcam3z2tdGKyQix2S3ZfcyQ7aXeYUZNoCU8Jmjc2sQiHh",
  "key4": "5T2PbR5zYp91VAyMAFfMWUsW6XUJzwzh66ifyx4unF7jisiCB6ZcAtH2BNVCXK33M2Lw8tyGVkcbhCohDjd8TDq1",
  "key5": "5yniL61a9xyrRKRo4odWeghmz83qZW5pD9yvnfMtCP6kwhVzhK7h1jqheP75ugrKmHVTXULgwjihkUghHdpK9GyG",
  "key6": "5xNLwbA2soJWJEbbPaeES7iC2Ukty7m39pkaJGP3dCCJzWWTGbRoiw5ZmsBL5MG3kQnPiBpC3G5S8tqjUrfRxT6U",
  "key7": "3kwBmyyJZYqxBF4AWciuehnc9W5iuP46DYPU4GjLhiE8F7QpULmjXq3v2pPyASeLGzCfxTBebWxb2WBQFzJhPNvF",
  "key8": "5C2nowvZ5c87WchJdsnhmqZnZxakrWugiWX12QgmLSBvmVzHgcSpaVL5rD7GR1FA1QUx6ZbWvJxLMBvrvtk5Xod2",
  "key9": "2AzEnBfBDuoJxpP4HHNjEM2Us61ped3XZMHedRpCKZBQQG1wfY5jNeGntVmPr8gSms8cMCSQrfP5PTzaBJDC1EqR",
  "key10": "5ELNTbPsntMcEXSeWyknSdWXjmSgexoQPgHAMeNqWXj1HTjYTKN462wecAYzn2KYGCoMZtLRXrvbvhaoZdpxW1Jm",
  "key11": "3Qq67esCfg9ppkESckBmaJT6gdJJ1RjisSKhCoPs69pfUPsBWU6zW24j3GTJA5GAWPoUYKpsPA5KnMgeMkNvEh7h",
  "key12": "2GYHt2j6JKeVkZyMBxcafaW7heGTa4zvbTzR82q6UXqDsFmkJMnMNMYB8nRHUHzLgbckX9B92e1ysNWzri26UJdp",
  "key13": "2Xe73qkw7RgM7swFT5ihoTaPTFzRgwL4B3wns7gMGGzcVg9Dw7VKjtyptmH9nG51oDQJ494ba6oSn6fuSGyu78B",
  "key14": "2etdLtQYGiJA1DKoBw1xAhnUamMbQQN2oEXvrWcfxabWKPDz54YH762kyxG6CjmaGp77jd5hPtueEtbCh8XjRZeG",
  "key15": "4vyDzLDs6qYXLgDY8vJqkNHPHM8iL86sf9ECtZb92swzikCi2wn7g5KjhKwtMiC374SR51wtJPHbcVX69uw2DvEh",
  "key16": "3F3gXcimYXKTVYpQvKuRBhU9A4w1kKEhe1TNYvaUQrRV1WFCXWMj2zfByuPQgKKEHkNL26dPdyDAv5PCSdDUSqqC",
  "key17": "5RddT84EGVK31DCAp77oY5EGcWZdJX2AcKgFbWtt3gTJCWzx1UpVrdktJjFYMmJwwKsdKNxYFSvKBdTeedRezXtF",
  "key18": "2AcqpKaiBDA2cbBHMuWtq9RYVtXREcYXmyUekjXHd1Ejk5aVhFUZxASXEcyn9zcW4G9kCzUekx77wMVdjLrwikgy",
  "key19": "4ZmtAV8YwTv8iuiLgtP6242bNNMRU7fukd7rfLPKb4kVc17fGHTknDnkh4MSsRuyVoJQ5jAbghgJvrTvLkF1QnR2",
  "key20": "4qB62QdZ4GAazDbRgczA2R8WeuL8kp3QtwKwETbpQWdWkiQzGkNaZZjyarkPF6VE6Sqt7YpXtffGwHXC7fBCFnF4",
  "key21": "2RUP85WTZs21jeGn9SNxmYXvrMRdZJN6EZ2SCDzYnBBfdUs34CB9Ekjv8xSKawVxw3coFP69hG4ptvFTEm1qmZ4y",
  "key22": "53VMwGoiTezTVaztSiMHkMcCgYm7sb6LnUCdazeipDBuoH67HFAyvjKCT7W77QREkBWvL2A5zte8EFPsxz66QGMz",
  "key23": "4jG4ozLec7axLdyZzfVtcTaTfgextNitmsfUAqrS7JXzWXD5rMEU6sutS2AAxHmCgVFTGug9ArsikJjs2HrWTPM8",
  "key24": "4G3ZGMXviHKj5CDpH32DXBn8eBAYSkPyYc3cb11NNDoJpArhPCDpjUcdSEBcsp6SESJLv1xPyENH35s8GQDfvzJi",
  "key25": "5sWjy2bJutxUrMDhdvn7njZbxfXRRera6VHfrC9iFpjhWTDYuppUqKx9gwdfQpZRwqaUZ378Hdr2kZYimoPfpKNE",
  "key26": "3PgYEJBn6ERt5Zm4hNivHk2sgnXmzwhAdCB2BZzTT8F3hKbidB4ySrCz4EQrxDqNBAc1Su4KCUDocLWCTEPhT5Tr",
  "key27": "46fddwrmpcUdfegZ7oJowg2mz1xGYva48yUspfgFpKkMPTCAZxDP4qVAksSeX1MbWUJRH1ym1YaciTRvPBdGsxJE",
  "key28": "2zZTaBxfzDZHpajcNcGeyP14nr3ZXa98u9f4TburNHkduUoSjpHTNFLkEjAexEUtmKr81aViZZm1o9iE2cPRZ2R",
  "key29": "4nhKwbVJH9prWQmXEWyhxjQoTCKNig6gP1S4h48tCPAsAD5gtWnnGKEbJ8qHXn2Z9wXw27L8RtTvLQPHstaEQv6f",
  "key30": "5a5tCrrMQ6aEigJxPUBB8cp92TKu7Yex1GB7zC4ZntdtDA5LR2BZB7Mr2UBGeyLpm5hyLuDCo3w25fTqm57DBdz9",
  "key31": "Z8RrT6nnrz676mNEDsdjmNHNmWxqwtiHatJwZQGhUrDDbPuuq5enLBELRycDBFhSriPGcHbtHAH9W7sJZ4UVpuZ",
  "key32": "2Hjo8ikbFF9zQnobMyGUZg6h2Bh47H8AbQkPK7iDVztL37PqMnapGYfXj1rJwp7QdLAb1BBJgbdBU7JTaQCBJZNZ",
  "key33": "4fteJ7UGoVqRZcshHsYuS7hwks6yVjoyT1PKnf2g6hAc2xEu2pRUWD69EwYhnySyXn8Yw38JAYGq5FoD8o6a1uj9",
  "key34": "4DqW4KKagwbqJTvVk2YK2nnHH3DUxDPJ8662Vbau16M27ujysbr4fAL1azZqYmAGSyqsVvHxMwb2L4sCneSy5AXQ",
  "key35": "62SfcTMS1gQzG4vY5kSishXfzHNhovLJ1wXuFujxKvLecJ64kWzgkiLKTp3rwQSJZEKduh3ozuLrx7EdwiwJr4eq",
  "key36": "jA79Kih3WHUQ8NiJxXSdyrgCYNQg1xRLfxSznqvFoXTo3KFAhhJ6TGZr2dV9vaEEuFNZ7bJLKKWJgfJhuAjy2o5",
  "key37": "3n6Lyiv7JALQxonnYn6ixZ1ZYXbe7E1oMVgM4JhZQNZayBGu4WrxA1As57yY9omjeAWqhUca5rB9ry3HT1zDeUaL",
  "key38": "5ePUKBC7f9dgw9tMvdQE7bvGY1Jb397vcMsRfJDXpD4JrNa1EuBNZXVerA4VdkkMucVoftMrru3EXmpeubmXARJA",
  "key39": "2Ecgov7M6v5YaNosHxtTtQwUaf7BrEiR11ZTJfxo5UbDcjrZeL7Fie1VpVj3yRJQQiRvA591c73PoigBohXCDsMc",
  "key40": "4i37cBNoXiDa1Z75PpwCcTqojg2fUcGjaSHPRrPyxVRM6RLcXbqT4VNAXZXqR9FK6ybTC5YdtwmUqVcAWb5ApWJ1",
  "key41": "2goVNiE29vwuTE1LHHCJbavMiGHZrFMEiReyeuUcpmoCtEqFcEMiyG2JtzEsn7zpzaR853iw5rxm7phyMjF2tkW7",
  "key42": "3opgggt9f9K2qxL6AQSpMYfGeLGCjtjTi1u7DxCkLpAiNYM9pLohzBDEiHW12qdNy6zBSBWyzd46FKcJvfDfRieK",
  "key43": "4gVJD3hzYiDTzS1wnPRFAQcaugkoySQNjikeDWEzvqCEWndGeTrgeJCJRwKbnXoNK3vaZyQosPh4NH2yds5tfcGS"
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
