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
    "27uKTv1KSj1eYjpgHFvhaWNXiB4TjbSfQaCtwhZUDUqPv56zZiZ6ZhEjC83sFcrGX5mRmSkFr76QPX3yhkyS4paq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hkR4oJ2XCJ9HAtGiL1KTSrZNpz37WcL2uZDCnG4U7iUyPSuLrbazRsApEy8r3BMXnwWruoKPWjxQVaeYyoem9B8",
  "key1": "24FJPVx2fe4tZHY6QauduA7ZsrL2cEj7LQntMGRC7N1d9QBryoeyy2SznWAEuuAUC8UpWsNL8JXmQq3UqPEbW1nb",
  "key2": "24NWhDCVkQ6nf5CDnYP4CtmYGkQ4JYbs9SfkYyvCyATBwCyShh32DFDW2MfgVKMRtFw4ME1aMAq5GsErAXaFxYVm",
  "key3": "4AiE7EaW7Trb2nCzDES3u7kfMtWJ8wh4S6KWpBp2td5tqaxELM4iVAd7ouwjQxGb7qarPDSjomoFXFgtfsrtGyAx",
  "key4": "4adaP6uzDUgJzKoif72iaVeyvNCmMrT3Z8jD2WjswTMwBJLdDkyfBFij8U5cZoVVsvTqHghMj1MKNCRMZ98Wybym",
  "key5": "5T9faXn5557X6iQUHGPUKCiETug4at6ZYop34v1eb5J8P67LX4LqPx8fMeZSMfWbyo2EHRrhnnswCTUbhsoYUxG4",
  "key6": "5BzBxLEgGDPzyNkapsPb59wmKzXKnd6AKtkmZ6m4WtZHpSL8vnY2SPLsMLhtq1Nk7umdVk2En3SbmKd2ebZ4pKkd",
  "key7": "4TBZD1CPqckzTrbEKwDS4VLAkYcyqQPQD3FT7XUvbJL8B889SmPMWbaQEdxw6tLXjTngpV9weuoqbycjcsWnt8wC",
  "key8": "oTjpQopDXX6YHrTDUT7R1dQkvbbQFAgvsg8ms6REomeeESdTPywiCXBtpPyuo8GBm349rnkpyet6dNvpFQ8gguN",
  "key9": "4JtY7zpmHJSJVwBBoN9eEEGmSRHfBXJNjfZAiMbAoS84Ts9jN798cDU51xRQamwCTvTRXtRRaKg7PRCGN3JCShr1",
  "key10": "5ycuJnM6oQSs67fo2Vff2kH8sLC9bkaYymJvzHD4zobbepWy6njVJcL2L7aUYCnZTqitGA3bEArc3rX8GjDFRNcw",
  "key11": "3st8oXVFLYD31rvKnQ1dCKKyJfE2UfMZUS4V2w7gyvU91hjubrcuQNVUwNUh8RS8SwXFpt2WuKbN8oHwwL5B7bzY",
  "key12": "4ZbNhY52iayo1TrhUSRVwR5FLYvEgCg8FfYC2fx17KqxpynyHqQ3VK5B4kXAtwqGM6m2Q7zT8qzmQw3VShcPQyD2",
  "key13": "4tgz9oERMYeUhwaiAzCvx1hK83RgZF7KHEEgjUzYQYFwNEoJ6sHhtguWnYAtoPUCiA4kWhAzp2eqN4u6X9G47Teg",
  "key14": "5SjaQLPYS5w8xyUXJbhAocW13pcZLbJbgz6StnprPwewLHWeCMt9P5Q1MGWbTMEVFr2Ka9g8dcSUFZiPFBJo1Qpv",
  "key15": "25cGbEY2h9TMvfmSMia1odDFuL5PFyLJxyoBuimFCgimaA4AS6okKoqxjXafPfhZf5gta6vZcD2yRFE9GFcRUNtS",
  "key16": "7C2B26ZfjzyuC2mYpqnSX3feZJ8nwKCviKtTcC8vSHJ29qxiMSrvMaABxvLnEENsLqVXJKfVzzYzFTc8yqK5BqJ",
  "key17": "CMZVhTMnewdSZhais4vb7mD9SGhq5XgkXsiXVoYMQqqtFcPa5JcFS4xsva3BpEqQsvbyZk3ogY6kp1HpQWrSdUn",
  "key18": "tqoKJbBUWPj3gAHK9Uod5mCduaU7g3dUzDBqtgsc75W1VpxjgyAAFkATiMUjCWW2WVUo9xatHfoRCaq6CzJGFpC",
  "key19": "4wD7MKci1SGrVmmemZXSUdur2dLMVFnVyonZLm8hrvzb5j2uYEHfraU8vi14Z9dPLNx3rndMKvSRzL1apuwzZ2D7",
  "key20": "2fyh1eEhzFCGp8NTJFQUua6jzedydzFJpdsLCnTsec8DmrPMkBsqA9P4TDPyBPderfbxyQ31EjZYt6tnwesvtUAB",
  "key21": "Fhx1EhUPdjL2JATLAugm5wGaSw6JXv5jBqor4JrETKq69jrrnWj5VuZ2g4spKRBgXEAC1EVhkfthMTFPmmHUJ2A",
  "key22": "PPbNjyx6g1PdxYHdUipwVbJssP9AVyKy6RR68mPjgbhXeaZ2iGjBpqRw2s89QpPdWgaMckKRHLAoecJZhdXzeYP",
  "key23": "5Xv9ZMdQCxNJcBhumBvtGibt8WLfs8bv5LvUkRsEvjdiRQnDy8UK4hfdS2K3Xkj4fAvEqUrnPyq9GFS4Lat8faT9",
  "key24": "eidJwpCCgJoL8DuUvAN6WWMD9KyTJVjgdu58omxkWNy6cLQZbEKHveeXnPEGECucovGqvRdCKT9GnGGxDpA6Nu4",
  "key25": "4KXuTYxdXdKTE6FgcbnQJQnG6sDPU51N78guTh1LZ7pdUj6XWjv4zmtw6oSGcrpYUNXE8JEveePfv1YBxPBVQ7Nm",
  "key26": "4NMvF3BvDZVTMhChEkyBpCg69DuAJ6Hn3dyNjQJK6YcMLTWccPXRLNQsEALXdDrFKPfDvoFD1JxShFEcwQm522WT",
  "key27": "4PQh11ZRrY89xHeLAZdeodzraknqAvAmSbTiVTbKwDSXjWSDN3c7P3oeJ7V1xUkn2VqRUEtWY1zrV9XuDdpLw7UL",
  "key28": "2rb3eKBuPpaaq8kuXqyCkAkYWXF9baT8UdaHymhbb1DmvujeJ78eWQQ5wjpEmHpc27fky8FW7GJUTSmqzecfFMhB",
  "key29": "4mKAcd6hE6v2kn7iU5hE2RexQKKaN2pQtTji7PNQ4jmuNAhnQme24anKFJRMRgLTkgV9CFiNPgnidvYALdxVpnG9",
  "key30": "5SuoRyp6GSVpVxm8NXRaMSTXVUjrCtzzKP9GTCEnCrYWmVf25126m7xFSXrEMrFxgBEx2iuoY2cQ2x56uXDpHLVx",
  "key31": "3xsobyV4q9chipapdFk5ocGu8wkcoczjJwYYurnTQW8gMPo6XHAAen6nroK1BMFZqPaEQ1j2ZTbfEWzMrVuWFZaB",
  "key32": "uPfBHiQZF9w8AuC4BvvLFe6Sxek1mSUC9kUSTjc9JDj9DnjMb9qSgbXWa1NVc6Ma7FgHNWoD7bNT9aCozK8RT75",
  "key33": "mWsf6ZDBXQFpp1gfv7XzywyaxXFWEDMtgb9jugDeAdcdmzG3i52uymZhPRC378c4e8tTGikzAUoStXLEMhhiWu1",
  "key34": "3j4GxnxXAU2bJ8gZKb7Bq97Y3GVNhVhYmuPWf3wpNSeMFFhZoKmoVTxfrXZskEjJH3dGTdBZiUd8bks4CgBETDw",
  "key35": "4MM2oBKMFbC1vWeawJrRzB2pwfcUh61qf4yjV8NJHuttkTjbA6izDEtjyvSwecWYQshwxKZyFijHsgVLdFwshVM6",
  "key36": "3vWkwPMNL3avTKGSzvVD6gGe3yJ7rtJ3bji4zacKQQDXtxmvbAugdPrv6MvnZfURsdmf8kqhnhqGYCBRTZg51AZ6",
  "key37": "4TRid51959S8hLBUqoicE3QasSbSX5kjwYTXGRb78GEjaorLRkNGoc35ut6jUP24c7D9wFJ6xmeNzqZVJcHGeP5r",
  "key38": "2RnSQAfjS92D7y6fT7cqEcPhmJQvoCqgCfCjNmUH5zs7NXu49RrCJRHZ9ryHBNuvs36A6BtJxype7Hd1hCVUqxos"
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
