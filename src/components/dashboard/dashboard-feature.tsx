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
    "sb4gNA3w5XNkfoQL31gi2RqWF9vYxgrbb8VoFyxNVgLkeQZkjM33nxLimqyBYzScuYFpYzCv9JRGhQ8VTZefBuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Dj1h5gFq56bBqQxPQfZai7kaMSsqTee1RiQjpy3AaiUmagmuHZaKKZDgA4Y7vLwK9zNGhot5HdyhS2jjnSVvgE",
  "key1": "22pqjb3cXr4NpUPb1f3Zdxp7iaBcbLbrtWq5tgza4fNxAtTNjYkLGqRPMmqWNAnsoWJPhuTKpMMLBdsqDAa8ANrF",
  "key2": "4TFjqo26Mx9Ci1KokuYdJKvanJ9kYv3WWcKk54BJFGN7GSb2Cnjd3iUb48CkDUa5CqBhCBnVmiJRd9iCuDDwpPb1",
  "key3": "5pCgUBL5g6M3TvWq5hGC8zUydAFuxuzVSUcNcM29k4WaX2b8kYKSH32ccr2jVbQH1h4cXJhCA13hL1h1A2dnoP6F",
  "key4": "2XCngQ2tCvG1tdGAPakrvZ4h1UJzjYpaX6BA1v8DUiSEiu9fyM2kR1kgWHCCcTzGMsK4chFaeDorDfaX2XevBmUc",
  "key5": "64FSPsJSwAv98ssvYCVxskkryXBnVh4rxLnEzEs6iGPKnT9So19ZNwZvNCGYZDYkxrER4n1yNTYnxJYHq2LAUaeX",
  "key6": "2aqt7VyoZBKtTq7Kr5m4g1kyeqiLaPNRXGqrcn4XJzJM1KjQNXZoPAXMyNVBF8C8UCbddXdFc6ByYKVzScPsjimx",
  "key7": "ALfcKMXmuXKt1pnW5WWqg7X1TccpRgwFRPNbT9Z9C7MjpbMfn7QaqUDuRMqtqrhAkVtWcj4DNwQPnurZEnVUJ3f",
  "key8": "4115BxWtR1Eu6iSeK5DLrapgpyFHVMApSwfo4XkYGHSbECYRoy4uVQTMyD76g8sLhHv46mZFkzKj7hwr3ssXqKPv",
  "key9": "SHqvZiPsPzRaQgjjRafBcWpZiRfukauqM49YcTDMi2Mv7LQAbfydBd3GkunhGJ32Rh4KgVBvsmRmmnyFFxZMZ39",
  "key10": "4zMiwiVUKXUtwx4pmuCXEB4XiqtGVN4yyh6rxQhouMLw9z7hVLU2YLG81wA2M8qWZjF7erog2K9cmBQCn7FUqvrY",
  "key11": "wWptbcxSzSzrbBFDsub3pacpcu7cBeVktFPpLjSEFLm8sYxrkroCRZe7Cvswc7ib83mZruvHkCZY3fUzphD22A8",
  "key12": "2Deb1SYwmRjMa92ECFif5vkhvwFrK5UbKU2nDPKWs2vPMgmVx5UMgWbsC7BN5MZDmKwGpAKUrkRPkoKmB728SKS2",
  "key13": "5UuLx4qVtKK8skdgMT2ueLxrv9A8SXv2DFjcAvQzDGE1Uo2UUkN5jJXdz8fku8PkqCL26AABUUFyGD7LbCrBRxaY",
  "key14": "a1JuQoEuFFiURvUGLPFKLJK8nNUGoUVpiAsFTwA4QaSjwvGen3eH1QBq355WyewEdrqcUSAXPf36A2VcYEbpKvY",
  "key15": "5LCEkorS9wFxgRVjrv36QgZK92DwunD1JmcbgjXETKWmHJUpYUfXaCLWexsnbuCAmhdBA8fBiFojpwrdnQo9pgXG",
  "key16": "AHfodyz8pbq7q2JGYa8p4P3c4xwt49W7EscdnjhcnVkGmzJC4CRk8N2F6FRnjG9M73zXfbxbgAzNQZ3HtWiFUMK",
  "key17": "5esenPAE9o64UzGd4vCMhvgTqBfNTuig5BikzPFWMcMj9ZHaBoQw1gzCcrfFAB6f5LJWuFQDtoFKpKPiMbdZkZg5",
  "key18": "64jJMkMQ5e5Uf4hUkMd2uAPYUSicQBetC8WUtjjpuqSbmnmGBKQapB6mFGURpWiURFNeGsQxRKUsYVS6s5G5GNBo",
  "key19": "268vSFuftd9Jtz5XphhqTD29KfibNqugJxDVUMC5c457EUpC2dMQKKovuQYt1efCPoHRw9G7JNr4xUZCfX4b8Rn1",
  "key20": "3YVJsbawkXr9e31GwmzT7ERBT7C5HFhgXkiuKfSy2h2eyGBYcj8McYc84JVJaMfs3xM7tfwyE6zDkdzjCACzPkZw",
  "key21": "54pZrL8z2tohaLfgvrFxomue86bD2PVUAqt5LRf9XmKBrBwxkQiUHy9wALJgnrMdnb89qRP1Hsj4ovkYWjJM7HS5",
  "key22": "5hT9cAyCCcF6DSZLbQxizQHZY4k5mRoiXCCCDZJNhSpzr8cLzSYcHsdu1HgLpmFizdwd4NKJnwrpBTqQEqw4zm3u",
  "key23": "ZFhgSFxEGDhd3fwAmLxUdXoqyKBGFG6KjvvSd6GEdnVAEjfnzkzwrsuLHzv6QSg4UG6nPP34BpVyVZGcG5QPUp4",
  "key24": "3tzcqHcvGQDMpcWBsPizPG2MmyMxutb5TvrBaqGUKkoE5uknmc3tDn2XLWQjxDZLTY2KZmMxerccZ6DhiTT9QPUK",
  "key25": "4puEjuDje8kCcrJRLoF9F3ouFdkeJdV24mjYqjKTzARCyp9GYKYoC6VsccEXmDjSHcRcEruf661MgP87ZCYUhmu8",
  "key26": "4fpD3Eo8sUpedV3dhfLzZzJfkzgBrQFd1xuqmGMq2bqgAz6ppBspepEs348zmD52gxHZzsCF1xU18YBgUbCpo8KY",
  "key27": "5dABpotFPh1Zg2oyqvHj4a4Dof5VAfW1Af1rZiM9FCcRAtJNSDUmWXsTWpNJSsRJREH7DQgRPfoFHbJe8MgMVi9Q",
  "key28": "53EK4wTaM3RDNCNULnYNp6nfoHft56PBfJW3nF56B5AzJnkzjeD6U2C2jfz6iBBu81RGB2JKJgKXpRJ5CvHxrRHa",
  "key29": "2neZJn8MYohM9M46hQT3a1gcrPDKXWbgWrg4sW9yh8RvK5v4HtXreN9W9LzvBq9WfvpPurnawpro57pR3F7DryGK",
  "key30": "3YpcmY4PvEDzexHv4FMYhB7E7y8z4r5eUgPKu6kfPYWUGfdwgNvB3oHAPN3EkSrr1ZHuN3v6sBDhjaNBFZcGJKm5",
  "key31": "3cXVVAxgYbZN4e9YPP3pFnwEsJZ2WYUGxMT84dg6B9HzPE1cyN8LjQv3FGyoS61JNcSK3nWSwr5QJAf5NZFjCmHX",
  "key32": "4ZYTwLL84Ny5SGFQDFyobSPsNtU9W1puFW4co265MLbjNPtAq5h4E1RiA6VxSEadq8u2nX2m3cdbZnMtFFH4aRp6",
  "key33": "2CMHUY8zZS5E7TyqojuFA68MV2PehYf1ozY3qt4gxc89Ah3QXKVGRgiY9hS2MPBJf8ubhySsrTCtc2ApnMwnctR4",
  "key34": "2xN39PrUARJHF2Wu8F7HnAqwWvBrZqWywFPjeJ1X19xZD9pLh75u14wutYJY17UmqUR954jTveDBSZJm2WimdrHi",
  "key35": "91jJzwM2LZgtWKba6RzpfS14C3rYNC7FJgQ8qu7gHYyASFVfCf3j94e1T1teYB7ETBddH1gaB7VWrmUAnJApGpP",
  "key36": "6DzRCJLjqcwc3EAZWhcBGdUXVXWMCTXKfSo1K7uSCuRcUoUvjYL9kb9vzKXGK35fkfFMSSWjtTiv6CPBnfVjRbp",
  "key37": "2sNLFGiPXAqS4CKgKhhfJoEsAtBS6Tor2vwHnUqYYxQGKdWxjwU1xATxBXHYNVQKYXpzrUsEWds7SCyxwJgCsDZH",
  "key38": "42DrNnzWEhTLdgLka7CxHfNDFaWfJYZecTeMKqJwMaot9zZ4Z4kaor2L43E5iS5P4V4CKBAWf79nPpZ7EuQXLx44",
  "key39": "5YGfYA56BtRTZmwYBwpfRrPKMb1g5vJt5eNJC7tbaJyHPNawdz5KCZvggaFHzqJgcN3pzR3Ber6e4svwY8S5AweS",
  "key40": "2BWirtaa9ftfT3tYW5iir9TYprqGoyDUGq9rH6mKbuw3NJM5w1RLR1upZkMyQFCgm9voyHjCYudbN7YrfqnnGJGq",
  "key41": "4DFp5CbTGFaFZpzpL3wszTt3KJiBhUpZythcHtEauNPxU1UW9oETbPZGoxayfPe5NWjLbdWRFgdTdNRcSACD4Jdr",
  "key42": "Dorj3NhYyhNP6aC85Y9Q4cCJTnLHMUYymwYdsCKumPbayzYyPJSMCv7rC2b7iKmt1QrJ2BC47iE9yLYo7DwNGyi",
  "key43": "5BBmzcEHUNWoacmhnFBzsC1VgTz23YtxTHRg3Nty74s5H4kqtBzeoZC1hi7CdeCG93zKAqjmGXsmfT1kdZeJoP9E",
  "key44": "5XcNYHR75pn8EN8BAvX8yp7bSEKeQyaqpqBqt38oc6HGyso1ymTMjixW1yvj4QnaPinzKNrsFqNBPYPLvXHMkoJs",
  "key45": "PjEUaZdHaZrMJbty9bTzu1xXfFb2auqkv9NhjcWKA2suvZxvWE4F4i6A4w4UvyPN71X2PnefL1jbZxd6AC72SPY",
  "key46": "4cTL12fueDL6JVpDitkqDWuXzNP8XjPagvZNY1WpCPyVnoeCjEp92chpmP1rGTH6LMuRdpZxeR4wvpveLqFKnWGu",
  "key47": "2VvcXzTxNtMEwhAGJvNPA4JfXXNRk494LGp53dPtoon5pgqropTCPwAEiMTV4kLx1kaM7HbXgZCFQb89gYb7MmPB"
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
