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
    "5mxz8PuDCPXzzdJUqZfn3kQxfCfzAwmM1JcZNjDjm8TJdW27ed1aMYE7WG1xawyS4c5vH4mnUMV7UhLY8wKdNSgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nVHS9tuuYZCdJHwN367f5vDydNm3ycCq9K9WRtmSEABeMtYvMYAWUh9p5LQvqyn4Jix7QqmcQDbKigKm2VrMPNZ",
  "key1": "5SvpYFjEHpNQziNbMNkW7En3tRmyKLkPJiEwCX4mZNvMuDtm3Kt2Xpp2aCTZz8Ya3WF2ysEv8yxueV7AS92Pu9LC",
  "key2": "5NDTTA1Abc6jqRVinUMHsYyeynHia3aP52y1VwdSQuGYzAVyMiLbcnE71BeAvgfs4ypyPtrWmR27qCJKE7NS5Fx",
  "key3": "3w2skxTyCvBty3tVoMxfDAb4Tzh6xknM5ZG33XAQVPyiK9JrgojCVxiJ4UwiN43nzEe3NF82svKWV3AgzAnr2anm",
  "key4": "3MXN1TaaimaVhXKVfN9go4PHaXfiEiHJPVzU9yAEeqggWXZLFkDrUH5d32HfwLkaikY8dnDSeQxz1AxNs1qGtXWj",
  "key5": "3yeJaeZkNDtX5Zqxw1uKBHiV4HXtzGGSH2cw1t2jXW9kDcV5ChL9rDtPFU5rLzF1d5rzmjz6xHxKEseVq5F5pvLZ",
  "key6": "2wBVzx7UEPUAXx9PaYXEMH1PMMJb4u1qespuuSLoAzejoJk7EtzUCyZe4PmQR97tQhU8gCrgUgVcqXEhfggFnEoQ",
  "key7": "61YBs5sP7uzGYp8qZm82Mo7ACU9kjH7x5YSdcjwTKSGwYAZCYJGjUUYqYPDTvsyvuXN4U7XVUwWRBYUiPWhD8WeR",
  "key8": "2gW9W2XGCS5RNm2Rsxsat7in1dGdVj56Hs9jshHojqgM2s5KUevJcRPjKFRKEUqY9F6osxTaDtNtSgNGgzDucMyN",
  "key9": "2HTqREFVcdHacwLUJqATwhsCx7pMaZxiXA6wFEGL8U3niHjG7sWktuDRgi5ptNuCQ5HLuVfSUgwk1yn9guPFfYtE",
  "key10": "3AkYpG9FYzLoaiGMERADgQWCs5TrSuMZqJwGxz8q7VyUB5wGL52U5xGdqw4eYaLdYwseN47JxvZcpv5XVMnBhZgh",
  "key11": "3iF6jSxsM2FrN67np2L1oj2ymr5BShUmprTSPPfofK8LQK36URpRKtXdiUv2wea4VvHxa4HPmvfbTChKwcyZq784",
  "key12": "5UhVLXstV1yG8ii1zRoG1eDb5sRCEQqpptXvmxgnd2a4G2v8g4K5SMufZT4xFpYRrKKGEbNJBmNYBCdWDYvoZUsy",
  "key13": "4kgcUHfjH9QjrBpARrU42qcBdDLagY42TUZQHfwvXu8fsaXigYeXL31tR8JSA96kXf9fpLpH6F49qdxsU6jKLNSe",
  "key14": "58JmDjbFVfrkoUJu5dxuS9UpoDtHedTTj2vhdCcAzLXcaxvDyzrGJnVeUj9b2AupmF63ECBbsRyFEnKTr3mF9Gca",
  "key15": "36txWuNN5ehxJxbNMULhK4BwFNkw8zrYmwv7mg7wjDo8b1k7miJ5oNdxNBmwPM1VkVVv3nzBnGEn1cnF8qDXMvNB",
  "key16": "5J3nmgeLbqgX25wLUzztR5dEyr5KKpnML8fmjLQBWTt41ce5ufU6k2aVzZapVAohvdUehDzinXjLZLfZx9aUhtAi",
  "key17": "4m1REXUVnGwUwPWGgTytz3adQCZisxX3J912uFCaBLPTXeMv2FPJhF9yFNtW8NwLPRauXEVJUvCmx7qHJzEJrUBR",
  "key18": "5ay4BosD4k9u3QfcSu8ZrgFwuyqjVvpiRaZWPNLQbJEJMw6MSGKY77jCgt43MbEnGJFyLuSPYNJ9ZXaHzwMuN7ue",
  "key19": "3cbPXU9K3ef1Bw18dJsLK9Pawc2BTvFXTGLQ5PHg3VjQpHhG33YccdXq5ukNwL5BNBq7eLghiHGqkdTfAVRqkydZ",
  "key20": "4JQYHKe47rkr8i1RNyEgZ7pykBDBM6wCXmNQyW8978b4d3ERFXWYLLNGeNdc5YxYXqtYpVyVnUc4jni9JGbFoFo7",
  "key21": "3NMDhuM8yyYDXHaJM8bvFDfWYB4Dg5NEyWEUMfddyvjL4fiYiUTszUHz9PJkFVnYxJxejWv5vSXHCemEwbb1QCah",
  "key22": "5ZiC5sNz3BwrvUCFMVWTLhX5JdNEjnQGNsEcwnj9EV6i5h7yY8EtJKSndStVWKsj1DW3H66EFEGDH5CnkRxceSxR",
  "key23": "sGJ8qos5g5srjAvR558hhBrVhRmt9wcCg7HRcBahbQwbD8CHiiytwzHWJE5Ug2QVMM6vZ7rE1dYNrcn1YEtXZfd",
  "key24": "3V7od1abDWwEFPmWgVQYy3JfuPUKonvyutaxXKeXF1vsWNPshkSi2iza7AfS9YvDyBquBpg8UBVAtcqCbH2gPVY6",
  "key25": "5hqZbMFiP99pXvzeFm2ogJzDo9fx4m3vpEVF6XnsRxRgYuSbSVYaeJoV9VScbLKwASwnaFjSJGGAnVwyhzc3g8BJ",
  "key26": "FBb7epeDEouVuHhfF1gwvNbPkuA5TLPyBuE3jhvyt4CddJbwjyzYqGYrwz9GRGWw6hRdQzENs7BennBQvdjQ8XW",
  "key27": "3YoKeETmL4CAwo2p7idvsBjwPMs59XHoQGPm1PhfUbaVtaKyAZJfcmKH7yce7d7cwVaw5fkht7dPNTLmegWweDKB",
  "key28": "5xTAFb7H9RZUL93QnmG1nCntun4kAtnnF3V8xnPFBh3U4TcsA8HaaYSZ9vnua5XqV2TBwVN5KQ3REHdUmzLYJkBJ",
  "key29": "5F3Hwx7yxBGCKVaJ8BrToKnhaKPftmKLUr2TP6BAieWSYJtEAwPzfgfba9qcS4ujZ4J7QsWNnPtT5L9n7hRR276A",
  "key30": "3RhXrLDTxJEY2Nq4tnXHP4gJoY8hb319Q4yCJPxDdWnP1PNexDX7qWmw3cz5ocqvTmuvxXw7Rrud9EVmqtgjyq2",
  "key31": "4H6GHuWLQzcoq7aGTjo6QdmdAZqVb6DktAwSfefQv5JNhvKGCU3WkzdKWEvwdZkih49XFhupa4ZSecYaSY9oGXea",
  "key32": "2MQd85ZYWtKWRRW498DEHkfU349PWzH7u3mtZ2FhnpeKK47D25HVJvGomcBhPUAnatNmJ4Zips3qRMkyKwnVFsbC",
  "key33": "2hEWQdo9dcpwDE2isy5wuWpKoMuF3RZuwkiyLokSZHmQ8yFneUw2STZyFGcNZrx1xZv3voJE7JW2rdxeNYRycUyv",
  "key34": "2Z3UMDdwwoLuJMcvuCDj1RZ2aEecGefRAEX9cLZgGH454Cj7kLPpLybsRXWmB5GpiZAMcpB13vr6Snte2t8ndYQr"
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
