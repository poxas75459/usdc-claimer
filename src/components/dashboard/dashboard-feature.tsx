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
    "5q7CYFF1cP8huYVmrZsVoRTpvBpTkDUEaL1nSsPPHnVyGX2kvonu7cNf7FzPzaUKmEBEkC651xMa2v6a7YzYYxce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "okWjRM8ApC4cHnmGzsuFaq7NTWiJnsmxPDams7Fn2a8fnFAtEj7Vb15jePRJdrquW9JbkEbQtfpu3PhE13wKJD8",
  "key1": "4xe2r12RinityYn45EzvRw7cjDjUM6XGwaMFJ8CfjBzZV8CJjjUukPS2ftFVasMVRMR3xhTrdMXK4Mz577NRTSQH",
  "key2": "5y3YZqDeU8kGdrgMdyZABKER9pzjZfPYuEM8kcadMFjJdYRcURFLP2Pxr2hrqii5Z68MBUrZfeyLW3Dyt7gQSmae",
  "key3": "5EW7QyHK66eBx7GtCcLZQVwuHWo3YFkmmUo2pGkhg9SFcNjkn77SgJVAYiTqmMYGiTx2aZo8VTgBaiJH9RMZgzDR",
  "key4": "67NBbESjYRrxk5VSc8gLHiXmWtDczcSZEjp4ubUbP6XwwKc2aLKZHSbJSJAmcPQX1boQXxpyLt4oH8Tec8L3U666",
  "key5": "4z6ZGaiMHwHhwqfGC6bhA6UwNmtjboVRcjWU7pE5D5iKLVemrRxXCHFsSnJPcuNGghTdoGTLiKRAhGRKAQKokYWW",
  "key6": "2WkaFQaoJvccodGSjqZuyu1khk2twqpNkKyBJTB55HydefENvxdMxYPL7wBiuc9bU7trMsTjz53fPip7aYM5FmM7",
  "key7": "4J1MACxrPe15AU2obdGSG2MXtHvWM3dc8X3WQR797z7xMWJYHRBLxmxXeeeyouYWUGqaVqKrequ4H4oTxx1FLHux",
  "key8": "RpoikJYgHFbRAgBxNesLMMe12KuohiNNXuqoYNcvciPeHy6yMr9KsrnuDa4skjyjw19GP2aTrdt7PC1gBZESybn",
  "key9": "4tsdFL1qEdCgziZ2kKjC3b4Ux1ULSp88FJVcpStRKkqKswsFptfVrkHra6ZpAx58ZhiNgWqstzpkAEV9rwn1Swt7",
  "key10": "3V49oGcX9NaQhk9y1mTUScmsjPyTkq3bMFiVQUTDX8ZkzbGAmGRNHE2PgDupHiqdjGKTqm1d9T93pW1yfCK6Arbu",
  "key11": "4hpG47u35yaU5CDni49fnMxacK7PJ9w6VXrX9h5UaXWH23UwFSazceyMFhpX9RcjnzHuZw6ptkucyw1Dg4y3NAry",
  "key12": "5ysM5grknrNv65NjLs55phPbjdbmnuXVbJQm8KUcFYMchVHwb5nSxNAN1fQT3WiKVRghwqMLUyZ7C4AKYcCQpxcr",
  "key13": "24ysk8ALUh9H5V3a68e18hAgQUSXYVeaJVgQG9T9b8vzZ7qwcfJExFk8oLciovKsrcZRfdf4HVzKrTKMhNDpfUE7",
  "key14": "3CbDC45wR87qPJtrs9sj6xVwGZ6KmXrR7FMPN9HdLrKMeaHnNA7WD51yKSapJeofd9HK2bSQBCXBaNDAbruxzN4M",
  "key15": "oKcKHBYgYCfJwRonUAqgFfoA3iqSgtuocuUxCvxzGBCAGPvMVX5NsSJW5gZ8sSkpH6L98GCSdBFVA6XtW1dXPpa",
  "key16": "59MpTxnWvBm6iGqwdG1j4XPup7GpA1wnMNDtVibhgWeqwSeMdMzkUT7PYPcARGMHXmEzSxqg7sSSpaPFtCe9PuFn",
  "key17": "3fiCb7rZYFoGXco7GhtDtgyeDckCFkwQeH8WEBka3w4dh9Rm7UZBPP8jRAYZwVpuT4r8VNQp3wtCqVx7oqQv66PL",
  "key18": "66qUVRCZ1WrYGGPXMrdptgp8FiHGVimicfWRPG5mu7zFYdAmfhpTekAAuWCGEdG8XKQNgLVvJvqoV4kfjumrxAD8",
  "key19": "5HWfHeAyW6z8aGL3vDvXu2fmfYehBZqLEPKo7UMDPaocWYrjrDV77i5YTPig3TcPQngDuU4hjTbnqNY38T8Wkhtx",
  "key20": "5HbLhiZb1tWGisfgMP6bWQW2Avatp8QqA4RkycDC4DpyBsdYc6a5ZcaAa7FLW3UoXJtSsoZdQ5mwu4KssyueQsgg",
  "key21": "2fSHNZCj371wGHeyJTnK24ENZkeJzzV1wLm2FWot6Nte2M9WPdGQB1RvHB8duiSQDrsznGPzXzWXKeZeX51BLcBS",
  "key22": "42QvaLuD15t4k8CYyg4akX4aqkA6hykjZ1YiWyxA2dc3Kjo2xWbjmfFyspFpZbW31FydYDsMwP5YxVMYVt4vrMFv",
  "key23": "4juux2WHNihsCUz3qYXaB5dJfWvaQ7Ui1U22D5jAXHtavoUoAiFC9zuzTwXHf98RG91ZNnN7MgkN4yViDYTVzP2U",
  "key24": "3can2nKS31QtSScUjiVRWXJsMEn4QUMeGur5yQ3RqMhGqFr2eNyhWaHdGD8gLUazDGdxKt1SQNXGmJsnXxnPTPKm",
  "key25": "79Ehe3AQFF243w7PUvJAE9wm8nboGjbYsFhtzFWbJMXBgnZaMK9cBJQ5KYGwAuG1gC9Lz46krumsV4Vw2mWZcnk",
  "key26": "2BLYn7boT7VuF5gsu6Dav2zKjFjgMa3jtkj4h6aH2VQS4UwgSUwXeYE8cb4Hsr9r8Wr6QncU1xsrXY9ssR5Lgby7",
  "key27": "2PP2Yb7DStC89R8Jdo4UpcGzstyfawF328Ziary4pq5VYwPTCxtNGRWzHDhRGAVyg29yFUCXcp1iBVnh6A5U9tLW",
  "key28": "2YziXJ12EKzPD7muhHvmX8YR9qjwkUVvLCDxaVYByLkMbDKkGBLbE8DLuKZPf1B8TR4W8Luk84yVUH86senCqGXK",
  "key29": "4NFjjJMjXGertuYz2stJhTsxe2wzJD68ySXJgEZfp9AaZLgu9hodX6aRuErzHkETJuoLZupsLmkUi9R4FxL1fxSQ",
  "key30": "3v3u64zPUUtGPKob1h6eTK5ktbitb4oJy3DKuWi3vzbEauSwCEJs3yeWTyuHVVsGGYt7YjoNBrKeeNuXS7pz8qJC",
  "key31": "65YgXWExRCYgpT7z2Uu254jySFV2vTohxo1rcJtHjuNgYSNjnSjd61RJdfySrX2dFQnmfVh1UeCWkyfeHKEaBHss",
  "key32": "61z7kNkJ2tNUHHHCE5PB5KgZLgECqpSZMct7thNJeha1wmA25JjLxpnrpyZLpwvXZo34fSsjGzR3KX11DXdoET4W",
  "key33": "4wuaaZ6qUmZ1LEfw6vL5SLZ78rHrmonft6yB2BTEXGXBS2H2eDDKgTKtyze4CowueFfAxFXaNKMRhKgRWwdSjvbf",
  "key34": "52sYK98jfdywvvzCtYBFcc7nYUAjgXufEHVW6rc9Xsw9kHGKBY5nJax87HnXT1aPRpHZVkt3vtMLPt3nVu2Bq1G9",
  "key35": "citX2L5sjEDyzfv1CY5gA7LJkk7BGAGwAcrjk7MVd5J9fq5aARgecdgA5ydqtKeM7UfybMMB6TD2cwj2hBFQsiu",
  "key36": "3ZaGKi5kWV1ZsC1CsV5hmHZQgN1K1UKwiY7wJKrCKbHrYXWRvBtTxt2hsNgsRJccbVjxsWCGwNVscv5mPf5gYEzW",
  "key37": "4VrZ6C7znzTNzUQYCNoapgg1UuzHLEXiTRQBcm67Rc9G5PNHX8YewLXxDTwKK21zkuxJXbBq6gkUUEWwQdcaEYr6",
  "key38": "iMGrHNpWGDwSx7B98FbaVSs8oCep4F2JMwoLxGnUDHnYqxka9wKRzvy98WCShhW98vxediTTXYQenL4zK5EWwMc",
  "key39": "2kePwyp6MHeqoDBLSHnyvTXCMpPMQjPNLdoLRCpVE6NoCBfxhPgwUVQKTmQwuXxziKj17NFTuK8Y14oi6HJo3VyT",
  "key40": "D52MvK5E8zxEckfzceHJJPoVDJh34hj4noqme5BZ9kynYAGgR9ChNJs6bEA8uNAbJrrHPVM3AufL4HTZ7VJiyk1",
  "key41": "2F2wGqFQZLJQ8aARSNUCjioeCZdRETkCudWXuC89Pkxdtwwwvcg7yDgZs2izwVKv9Apihhfa2f1q4KkA3DgQ2mxN",
  "key42": "JkaWYZgxsEj4J1iu9duSH61TXmdxkjdQ1CqmfmTicygEcVKji2WZnaoxjjfAWzJwFb2twtyjmu5UHyKTng6VreZ",
  "key43": "3Xic2Dn3YG4bTb4d3C2faEmeePFGVfozurbq8BMrxw2ogBGEdL6LHEvHLpbLWt7Am4ktUmQu7JatRRWHQpq7ffmW",
  "key44": "3DyUwzXdAfQNXWcMasSZobvr5ec2HL11qjmrAvi7eC5S3cUWAfU6LcAUEwKuCZ7GCdnTaKwsZyowHm79FmZTpm8t",
  "key45": "ALQEkmZ4oCAPgUGGvYpB32adtd5i3Hsk2vY55xQLKKS4nmDNwxAfoNN9AQxxVtLAV15MTMryVXQnacJnMDArzbp",
  "key46": "4q9oJZ13W3Zy44U2JwjMHTipSYDKMh3F4anXSGqGZUFjwEdG6kiDm3VnjTR8BeNnbLtiKSQvw9MyRKa6b8pkqRxU"
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
