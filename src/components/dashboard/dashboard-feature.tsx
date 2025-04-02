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
    "2sJ92oaSSJDKMFg3YoYNJHMMLScwHfpdGBdymveh21D296v94NxToJnJZmXLNWNZnRCTTHXbrVtjriGmmGFp1WzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LH9EGS3CRHGZKoySqDPhU8qgwv7XQkHaJfooEQLGGXoi1WWkeeYxUijxqq7AWeuNMs2C3biM3KdewJy7ThWc7YK",
  "key1": "bQEv3sEUQwuLJtkxs4Qy44B2uHqogiV8Uk7RLWPX6eZ6Tt4ZTJRARWfCnH1CkpankReXA9kbPJpj3HcUgYaR48k",
  "key2": "4aoTxNymviihEsWoGz9tYtLAPW24ndkQBeaSJZcmRdXBphQhU3koJiN8mFjzzVgSySH9EYrET8suWK8s7KHXxPiQ",
  "key3": "4wWQ4Snvo18XVgnUn6KmTujtBkeS9sZf9teysMZhjKczWnLTki61DKrtXokCYwsnQvpoGJHEES546fGZvzrkP2AX",
  "key4": "48bmWgBwaHxzrsfuDsoHeQnE1in8MFH7Q4H21KRswoXbpqrPveaqg2V2zzTm1itaU6gstnU533PXM7pgYatn1774",
  "key5": "2hWCkMcDKgUb4bkTwXDtU5vXar7kXZ1X2RSs559Xe4hGxD45WKWVq7UFt9RxsnnumR1jfWEY5pvFtnymYzxpHKEm",
  "key6": "TQKnCSrcHNm969BX4AWxUjVaTa95r4ueyuPwRxkkamnHAng2KQ8yKHp7QfAJCkQXwCdWheYRSQEN1Rx95EAFryX",
  "key7": "5Sc8SuUtKWj2uYJpsPyDz7c6YAoJgZdWZSBrePkDzBH1pdrfm2DCPUz3mXvz44mgvg9ugpVgtiQUbkH5GQHACBeY",
  "key8": "3aDvzCBVaN7wdKCebnp2cvEgRA15epK9bCYfRKb3AHVtCahWvh1VsEC1Ag5PwSG9Bc9ikD2y8F4j2s66sqBxxiVJ",
  "key9": "1Dex1sHjskcxKJFkkMPWuKLnrV2Z28rBBgzbnPsQniRg7R45YuFRgtvLvX4E6Sg8bQcCAirdN81joBWdgYpwiDk",
  "key10": "5VJz85hLmRC9tvjumrbJ3d1WGYPsjKL5AiLSkJxqTeQ2AEsuZXmBRiuHUJsWPGQoifQ7Ca7uW5zN5E9uKdhWeu3H",
  "key11": "3MfcwMJFCCsfnv2nb9ChwPF59DqnSsjL2BNwEnHp92rsGwSYGRWxsB1PhEe5EwrAxjvdXJTpz9b7Pywb92zzhwKn",
  "key12": "4ZMAyXvF7gVsmCuDftXyESx7TfApyd3BrVUe5qzRwoJjtFn6G2jh3oLb6SFnsN5BviU4MpPaF3DmwdUVv3eU21KF",
  "key13": "2inpShDbWVEWQhooxdegGqG1JqnVHLNkA6LjKsBq8FNfndgkTVmbEDrtqXhZSDBDY97rGPwHptKAVAUfqeaGAVMe",
  "key14": "4Jqx5HJJm1WLSckd5ozfy614vv97GsxM2sRidFAuxLdD2SQ2GzRLdS6WKp5qbSMcS541cahsNURzvMCcJ57pKMMM",
  "key15": "2pbnhmUmiXkK72eRrCPnDRVqsaW38MLLJYKzizqrAjYdRt91jUDjUKmYNdV7eTnJ9RZyR2CiHNAuFpgf56fqeEnL",
  "key16": "3Yc1YHc52VeiaJhejj9bgMAoZvjDzBnX59uXq2vZS57vFCtK9FKfGB8r8eMXBGq1KdLqnTw4e8ovR435THUuyyMR",
  "key17": "2f88LxUiHxgqLqoZuwCKqHPrMsue2fbPAXvmZ3eUnzNktnDopYeASpnHXxxh1ryL4i8XgsYTNbcvyoRDd41jX31M",
  "key18": "3o5u9sNYGBFxER79dBpKnmC9Bs2Dyb8QyBLe8B3brWyQMuKkFoAa2AParQknpN4BveV6jUFSfMc9Twpiv2J9EvMB",
  "key19": "5uusPxqFVyi4yjygXmDzXVpy5YebTiebBGEVDpQz3zf5ro7d3AgUH4nsXZNXtiKsiHzCU61CVFCkBvowAfh76BF",
  "key20": "4snERsgkoHT4B6EiswZemCJ2iLHwQsyVBNhrayss71zpKsg5Budy7Q9nXi3sNPfnvsp2waUi3YasY82kAvhkFkY",
  "key21": "3utNUVEnHyjCYN854Bksbr8ZLn8V4K9w87a6LjuWeFRVc5zQ8kPEp4HVUkDtVZ9fVp8sHjn5FJ7Bw9qWrXTiyTNf",
  "key22": "4TQpe3EiEcZU9UJ9VxRfugG3aHSiNZ97UiKGUQZGZhTk1Kq5MsaeCeCh1UzgdWyzdS5dW32ux9y4hVWPifHZG8QB",
  "key23": "3gjHXow7r6WJfE2xe1uKSw3uCX5aGkcJhF2JdVY5cETDyTncmqGkp33GeDGGxGLwst7H7KkjnUHM8Uyd1Xnqg86n",
  "key24": "5qK5gY6ZtU9ifrAdFhQp6HK8UPdFpPHoCt9jZmxYiWm66oGLUwynaqGAFUiRQX6SqEVVRfYSrFQ3snSAQZy6CZDP",
  "key25": "26XaVDPfjK8BSfohuJT88nWavHGYAHmWa3Ev6LMgHiAgAXeEXqb9es9iVvQYv1xtP54fQq6uP5gdJyMEb2cRF4yH",
  "key26": "2JmQ8CYTwK4YQ5XMXozF1esqrD2oZb5hHztYZoTG1kkpAYjxkLva95AW85iNy6tP9vta3jvq2PvgLDpVeWyDieSt",
  "key27": "5AuZHfUFucM7xPL6sSAcouYoXT4jGqC7jg1DA5mADx6MtJ5YKBCM852afohWHaas8EdDivAji6keYDsqZuKs3sHM",
  "key28": "4Zwg548vdmSZ63562LGURh1bLVJqASqMUfZNKKnKXkvXGNo7G8R7xbNSgD66SvctJvkJR8a5ywpJkttEF7mssivi",
  "key29": "3zxVGMwNEJWxtBXNJ43LMLZmkRwPvufo7TFemy72WFQvBS5WxdCaArvWqXqubLvixHUdLCfUM1Lv4hdjHhJQs5UQ",
  "key30": "FLVA6j9zZ4MQMF3PW9KHZfcAj5AVR2PSuFqj3VNKD8bq1rs7cuMRRPuZxwoYJPC9rw6f1tQa7XYQ6Q3ZKuzhe8K",
  "key31": "3WYuRBvSFTS5L3b3VfPcMCL6MJQPQF7U44gDSQxEjZzwM8ctJcyYQHJBVQvTiLdxQJfZ4eM1kuQyrjgUtuieFD9A",
  "key32": "1dymeKfiR9Dk8F31J5ieendvXgEFy2wVWMpX6NPqYqNY1kRbDTdYWMLQD9sLTdhYKJEruWL3RD2hLRkEHKoj3oZ",
  "key33": "4Cmh7LXZNfpySDoAnivje4Sw6TMFNPBYb2HpkaBFEKKd4bsu1LPUEtMpdcEZ9wfg5NCZr78PgovovE4t1vuw4F2v",
  "key34": "35Pdes3rKpyRFLcG5tQTdiU9pU4Nz2t22zS5vXVUD4dGuzwKBAy26EfFJX1Wbo851J8a1pfVuoeLbKsbAjgnqch3",
  "key35": "5nY3WHruxVjsaejEtu4gxzkCL4JLrGg5N2oSskQQQWhFezzKyMy8wZuXWJieJ1k5H2oq3DeevsxXZgktQJnYT46Y",
  "key36": "35bHTNLPZV3ebVFEPwij994V584Ty7gtHNqn4zjT6qrS25DnFYq94YMXBXVdfSCNC8n6RHYwRjY9qEDYUN8J6mGW",
  "key37": "3a436UezQnp1EaVxkoMSYHhvuD6MpgCVBsGWFBNnsxKfGumYGivBXo4JBMywYKhZukJjxyjRTnj3aLtBbHoCrKft",
  "key38": "2tCHfsEHU7w3tHFtq4gs5eg4ZcZcH1jaBBsidQnYvLGfRAKY6tGHHX3zfdMQ3nmdgvTkJpwT26YMcJM4vuVeVDtT",
  "key39": "3LiuHUsCQcHrZFhoF3j1FPmcSnQi8TtBM1bMcJPb9sfkcr4zhEt6QpMfDfeXAJzFMXzMZqdyL1eEmsziKwoBexE2"
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
