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
    "4LwDcYswyqEEW8KM5AznFum8JRyLDoj6h87pUzCbeTom8amphFwZnG7Z3u5uW3xEvwFLHi8fwMe7CeTCajFTwgVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iNZQ2Kdfg8aJVhw8XhtDW9Pg5NPx9izEwjFUQGexARNvumWCAUHKApbJjcuACMX7tKsq82gz7yYvvscJp5aTSFD",
  "key1": "2cQ49SCCG1iG7EFqvXLnRa7vLm374J2sP1YeM1fhgtXdoiWUzAone6BjbM5VFv7yX5j2GdYBGKXAwFGDRYYiEk23",
  "key2": "4bondRq8ejvH4sDWTzG8u5spwURP3R9b9cqGzXEpUuKaHFGAbeB42iY5tThYMPutymYNbjk6pk9kzbWRcKPY9mWT",
  "key3": "5vQQAXK5Txhu5z4iY8Y7GNRB6vTw3d2suLoPiUrkRr3Bpdyo6TEvq76KBL3yeiSFrpd2SUq68SswPi8b8bMYktUm",
  "key4": "4Y5TfzBPAZPZqD7yHVe8PQFvLjPzFXrjR6Q5N8cET5foaNmwQY2X6J9RH1ugJF5DJZnSA62xA59oA2WfFLPQVwq1",
  "key5": "3W4cGzF9RNoevYkurAoAcAFHGhmbn3PPTWs1qAzjrozhtVumHsJC8UcUMJQxrg2w3c3qASZDCKgSPsdAzmpums5z",
  "key6": "2by8xjcKcVdoYfe2hLKHVUm1Rc8tiH9ynptReBntbXgxNDxwYae54iyy4aZDcDE9tVMCbtrRMMgwuZyg1RT2EvPz",
  "key7": "2mhRjAR87aaxiLEY714jmrH7GNy3YmbuztRR9Rgxn1cu3n7MhZDjfsx75FUp5DNwoS8aXw8SRwHk3bpxXvuB8X76",
  "key8": "5ij1kGPLDKPdigiRCfCgiZWRkGoLsE4ynejA3t8FKRSh4geGR1LCbAGGMtUCcaRuQWDPYwCjAsXgznRw5Yr4Jh4R",
  "key9": "2uR9qi7ZHVrk6BYrfS5XfReBYuSTeTzva4GKgQw5XuXjdjkmdnZtfjZidbxMuczL2ykzcridS5QjbEJKmt15uNnR",
  "key10": "2Zue4uBCns4rwaEenrNLQusPCU2dtiH4bPRL1aysJvooMQze65avR63BXedRRpp9fN6J9Ka9GvBTQGLBJucya8iu",
  "key11": "xmLCsvrvuEFtzktC7xgBP6MsWUPWKgoEdMaNjwZdUSTUdX34banWtG4Piw3CQ4cduyDKBC5rJuZxZie8AxspsNp",
  "key12": "sy2Dz5aDTDpFdvanoGS5avxQ9Htj8AvoFXtGYBabq6oGCCFcxocuvhdtkztZ253yLcnik6tUFyKVGu7kLv2NY4p",
  "key13": "9Q3TEwq31WZwE6SafXGDgJcGamEzohFwEEKL1VLsRfFzPgzTb9y3sN2fD4mAfXtB86RcARqzGAHq6QShToRweJG",
  "key14": "3BPjzEw1d3wFSyReEpqPy97eyn5344vHe1taKeiSn9bk2eMMLkJGQTCQ4eyQx971R71QpvERQqxSCtkPweapTt6S",
  "key15": "P9ZQ17hguWwTZhyd9duWGtms7MRSWbXTGjCRHzBed8KVauumE2V7BVEuGuuh6SmAiau3Acpji9j6qZ6DBhgauiA",
  "key16": "4aJuaHCrG6HRP3RHbXzEft8u3PXhQvX3wj1vbAR72jnCXHv2QLthpYHETrJY2aqSHoFgpX5sse6zCU1VQ5rBoKXH",
  "key17": "5NTjJz7oMKB9YfpEGSr3tnLhfdh5U8Y4ik7VGDr9DFAJizkYhgW6Lrr43jRDxE9JouiZpSGYa9e7k6Ju4NBnkZ9Z",
  "key18": "e18aXrzH5Xp79PLHZG3UUfdpZJ7dU3AB6oyp3wC2AWda1PThdohdCU4GD4pU8JtuZPqe38N3LFn9keDP96Sjh9z",
  "key19": "Rh6kkMsktDx8LyNU75vaPcFUgdGUXryqdWiGUERzV6VmDuJ7MDfzecXAXwYuRtFt268kQjVLYWUrhnNFnTjn2MF",
  "key20": "2wxBPWYQi3yWhftifak4iErJWPx5Phxf5UMY9zJFmdTG9tDYxWnjqeMvkTmjSDVtKg6dtbZojqBTwJ5bUU2xJSKb",
  "key21": "23bYM2BPRj1aR9e4rvLgjFpFUSmNs5eW2m7opWsJwKutMf9PTVBtEe9XnueWEWooy7gVfSUFfdxoSH8uqVwPftRh",
  "key22": "56SWgTRrFM6FUn5oVMtRRDQDWMtCdf89bvQgWHnEo3BbwHjfDDdPUPkDtRW2SH5LrtGcgQYBSd7FG1q21NKYdaAw",
  "key23": "64c7vRdUKkzS3CeYWiWRz94ZNztDAefJ4CR3esk2nXjhwzsgCnJVRmdmDyrTWXiHPmZGKw6AGt28QyXdj3Uk8aUM",
  "key24": "4ReHyR4zhbeBSMwiKuSowP5eyzs8XGZrBgg6uWRCavzuHVDdjM6CcDsZoBofLYTRbTRHbFTh89JqnkaUcKnXNYK",
  "key25": "gSMUGDALeo664K74SRK1ebkdNU7QEoCzJE2FD1yX1eLHuPH6qNQDtwAVr5EjopK7XeVHp5TNR4KShdyxCN5LfNq",
  "key26": "4uvrNLP1UETkv9bFrjEcwZAtLdX9oRcVdPf9u7DUeaAYvRRBDoyBBmagp2w5vZXqJdpi5KzcDkSBHV7sRX8bzzDp",
  "key27": "3FFM5Dt7HjLgvS8WfaUe25xmnqAEbZPPcFaar11SGMEx1gEQAZheGzAqhKkFZPK8PyVZyfoQUb67BkaKtAHpeydf",
  "key28": "5we8uhrH3bCXBKh4VYcRmorS98xg8nAPpQasSWdPKoYv3KbYTBiW6PU59eXaXnnHAT7tL7gZFTycXMpV8J6h6YHX",
  "key29": "5dMyZcLmUQWvQryrgRpXYerJMgxs4LfkVxeepxQR2EKz1qsMctq5AqPeuRHQqz71ZEFpW2q9G3hKqnxydNEvDxVK",
  "key30": "2TMEFR8arnzDvzXPHr9Qh7QULM2GbuTqbXfs4LoJKyAG8X7YeQdTYsmm9LoS9xj86FVZpeHkCqV6DfvqdxV9uCqC",
  "key31": "42ZMFMQbDWHLeYeSC7aixMfRf5K3k9RxMNYxMLS8XzuXsQFzx5VQfjjBdvL5DkshASZfJx66B38uB1goGicdHsaX",
  "key32": "KCvaZ8R27AKw8VWentHte2wkxbF4vN1joTXrMdb5XsisXAhKywcuKk1C7crtD5voYSi4i6cnCgZPSiSCNACHW6T"
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
