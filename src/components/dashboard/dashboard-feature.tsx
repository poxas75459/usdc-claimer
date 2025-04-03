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
    "2fDirohmbnZk7kinKU1C9yUrx4MJDmXWghNcpWSonZfJzKkPZjASACMFXDtqVsm2q5yJBsFwUNY5aqrRkET6sMcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fMnx5tJtbapLrBhUc32CMkrtuMePPCknBRNAwVcfPHStkfF77wzpXRWPpykSyafxPmCk5p61poXjYVzACrqN2u5",
  "key1": "3DLFfv7wH5L6WyxRFXqesJmcZH7iDC8kZsEEhuvALBD127ciQoCAKZv1D71yUX9odLdtrzFhN5Xi2B9TvSsbjvc8",
  "key2": "3mvtwVkEtScqCdMk69ZwivWVJqA4cohU4eTfKLMZzw65Cr1Qi3tJ5MTkaSSdG7oCNnWQ4ooa7Q6MRM1gz5ixNxx4",
  "key3": "4qBMLcuKV1TiR5bFJW3BHd26Uc9u8ZBN7hamThMHsJaQvG7LvDaTfPSU6zh2nqK3otEKoDiWGumKxYtcj2eC9PkU",
  "key4": "2y1spzS3BZKcZt3sc86Q4mNKXAXWgCQJTqKyJbhPPUVG7utiaqRFLMnRrD5u79UM8HGZtgtHEHkdZChkVHcP2tGu",
  "key5": "TWvQu6SBDUVa7ci4tFkFVjvoBxp7JamqukCvR82EyUEdbLaZAQPKZCwUNVswUyvxue1LPSuviQEmKJWwVL7TuHD",
  "key6": "2MHFG49Tx7cFTrBZY3bC8LGvhYDdWmDbqgS92uwK8m6FgYGQKf3d4S1t1QZ9ZWcH952Cq3wDNjGBHAmFPXuFqHTn",
  "key7": "7jTtgEeWbm8czgBtFeyfHSymiSqzksHe5tSHvPXUPRrDwF58GbYB6ie7jNHptbYsxCvHThF3ru542eHd1MQwsLu",
  "key8": "7AP3PUNx9p5c1Mhy9XTMfkYhjkuHmxgLygeHX4zqUV7QrCPqZaAuNTBGSYFFc77VZdmouuxtHUi8DghU45umXaH",
  "key9": "3aeCbAQVRx65h1MKCbAy4am9mwRQv2xbUwL3fNbwfPLu7tVTvH9KgojT5M7bWFTPeZ5koNv3oAhHZbMR2isvBUUn",
  "key10": "5BmsU482exqLgjEzuQfiRzJ6VuL7bvDcSdPaYwqbGiGSrqMCW8fF7eXVDorCrLM2fg52Ykq1eaT2q6hsdexbHejp",
  "key11": "5sMe2GFmzpDxdTwzmLjoRAqB8utyTWs9kgEANNn6zm9r24rkm6TQVohxHEMZZM91Fp1fm8zmzwLDu2ZF3mBotTc9",
  "key12": "G9vPjjocdCfoxvdrbtnD4kcsbohxHJ8VYgiNpFqYPsLzhU1CCBAtgLQZNqCdPfPkcBntF7YYL3ALtHmwmDV6bSL",
  "key13": "5nKov86SfkkcsXKRefrx9HJfgpcvUGzG9NyBovMR8966e783noC5AUKKYm7hE7hWFGnhBLcpHXmkZCG8R1MXX8xe",
  "key14": "5AK7qbSikyGnLwoMuxi8EJQadd9dt61iztQ63SdZ8TW9P3TLfYiBh2dwbLSQFGx2ayb1CvAf7BMhFRE678MwGVkv",
  "key15": "24Q87enGiSGP8RRXesULaAjn2hN3CK7qdmUpmDuRtxKcvirbfGsd8fHtCGWcRA4gVK93EyBijAqpG9gm7FngSL2o",
  "key16": "2rWAManpCk1oZGRTns35NHANHqyc11NxAcqE1gfsh5KtiDY6kbhXMEYDGa5TELdwTLEs4FQuZ3sBmao52csuZzRe",
  "key17": "Q4Z9UG4TujiYD9QdPZX1ZbFZvZzfBSHWkxwQcQSQUnog66oGjRb6P4LomwEsoBsEC12mHwACTM1QJJagde4Pbbb",
  "key18": "2wBQAvRrzpur9CNscCWt9Wp5Tu9gwLGwMc6mC6kRKj6EG9JscctHJpzQk11nrU3sfCaHzoLKS8ATZy471W6tsJ3X",
  "key19": "2V3pCV9EaF16rGr15psm49zyHr94hrLM7j1R3JCfmDbCHhDuRpKyN3GuQTXtUZJsci8wFFAUdyrWLxyZkiGbUNzD",
  "key20": "3YmUivsKkbK9NigPfWAN9V5fJEoeizHxbjnxeUQXZgPkNgFbuRXaNRFHvA2cDk3Rxr574QNSwd2qJVb1vop9u5Dh",
  "key21": "3n5m4q3PfcU5Dg11pmdfn42wcqZoW8HWNgTLSWhprXRqTtYWzPiyUSh6Q7xWKheVmhwYBi1bmgEYpJLqBKkPMSev",
  "key22": "59NdDksqPtfK56tYHdKCaYfKQ9i3FgKqYQJwvBfuvmsC4x4Leeo5m7RbiM82VBMan6FSPBLsq8dbBNcPcGZYT3qB",
  "key23": "5vX7GrSRbaKtABC679bwbnzo7wJEuH9vZpyJiCpCNVtBjwXtCfNdczF8EBBeFcg7rwUA3L7aviRrA7yjGW6EdDfu",
  "key24": "4CJoSFQQFYQNMR68FimmnM5rCm52cqxpg2PG4FfB6G9viStUFBnq5W4qAmYHXU93PaYxo6VSoUkF8xua677XHLYH",
  "key25": "3YLbA5FDTrE8HM5NRgcj7SqJp4JT9LX6wjYuyFU1N93YPxZbDigCvzA7FqtmXfRmJiB5iae4cpUABAqKAWfZoNVz",
  "key26": "2VRmGfaLbwfgs1srBdYTa8D985PZpKibxRYioXHWDDG8fTaEsML8yDhSMHWs4HzQXTTaSPqPp7FgUtM1qpWNTGAD",
  "key27": "3nepsBR4iZU7DLzbyfNM1R5Q8hgFdhQH1ccGKzYvEX3xS1cuMjQ5Qg5G3yLiNvtsFWX2iShcfxQtZLBRSDRb4Me",
  "key28": "3mTXKvXRg2XCNgVVS87jbP3Wmgg1LRJ7gvNU5LNcxpJ91ckmYsUj2Gh2aS3omhTFsZWvByU3cLXXh9CQcj8AyutG",
  "key29": "jzz9U1FQkcxJT9ESqShaPbuSTNaJkWcEFEbMwpAxe7oZKQEJ7kSoyhkvUysGYFbHjU2AunH1aCgwbBZsV6sE9Yj",
  "key30": "5Ted2do5nJYmG7pxHhTSHy8tQBPiSyXfe2GFoMWFHLn1ctHscMJYpKEvVdTkXvWARJNpYm4twkL4rRZqwwGdXTcb",
  "key31": "4rCADkrWy9FwaJX8DH9dwEe6gy5iE1XVeTKW5FEXGB6tZUeeGnE976cFXzcLspi4Ge4HhLQpaTCUSBknKfqZTrKA",
  "key32": "yqorpiJHrybwNrTQXCqDXnGARiMnGjW6mPc2qcxH5dLwP4KMTaCT8SiWRFQBBZDVcBQkRPz7RXpKnGzHoE5yVvk",
  "key33": "4TKSg364FrdM17RVqvmKMLb5gmxLEEpdKy4WbNxr1zmjK57VfpegJ5wqZ7CVbMrxVpXQEkhR7gLCoJQYH3PTqJjL",
  "key34": "3QDd2qz3ah7k5tua9HGQsHSWMh2oquYApwDAUzH5GjWWgEsvW833zha4mdnVe6aEFeRFzGsqVWg2rNKeXqyUqBAh",
  "key35": "4XfABmERB1KtXD1xoiRbnojJyXgCNrxdMiVB3Q3DzpsAHh4SPrC94XcY6hkLmQNWCE25Nsuu2NCyRNNCRfT3GMYx",
  "key36": "3rCeCADo53zxgSUPS8zE29bh5dubytZomHtARGhF5oAvFKjBRcGffevffrhtgZjyAj79aTs6o3KXWudQ1fQ6a8JG",
  "key37": "BsKEf8C3sdcYZ4v7Gk1G6uhKMUj2PXnCArgq6j7ZvxCmuz8iKwMiATQtenf66dKYKRqwV7cG6yFav1WQKZK3Jeq",
  "key38": "pCWVoTCCcemSNiqc3rLQeFYztsjYjgP258UA6qKF36WATG9p4SxcMPtmBZo3n5zHwGPQKA8nb6oH4nSGznLjNwa",
  "key39": "4T5TppQ9w4jxACwadw2ZKuKsoGCCp2n5sz3LKYeq7X3swrjrTXMDqSMEemR7BpuFsVRrn5Y5qNHgeESZoKEHSqML",
  "key40": "4zGbgd1dkBqM9JT2BVEK5zG4ivoSQLL6xoYmAjJhaMxvm8oLc9TgsS5MeMSkLHonZ14xcN7XWBVhTBv71RyGUjFU",
  "key41": "5EGo5y5stowPyf9XTLu3g5TcUjeZW3nWG4HYWoMXoiwHeYBmtTuaXTZGMLC2Wzd4G2j3Zpiu59hRXG9wFbGtwAH6",
  "key42": "5vt9YptcCAKQjwwNPSs8tRa4R3paMZCB8gzk9i89wxCsvLUu3bUg3FgoJ5CXS5aNgr6cYP1rqRCXKMagZVRWTqr8",
  "key43": "azkjdEJAo8Sb4yNExqaQMnGZCzTwyC3TWRPv8ypd5egwaHpgTCD38JoCLKUcBD1QfE7XPNjtxKG8APPHXySQEs8",
  "key44": "5J1cqa3mw5v2f6EFaab1faBLh3dB3wEScivAW1tda1wQYcCb8CUnDBHZ3FM7WfYSwSHU7US8QeK2XXDf7dGyENS6",
  "key45": "2HPyscUau1GvWojQFKXMpcubPNdd98MCe1RCsey8vDfCHCKR5oMowwTmEKVrxmSDdvveurzc2gZHthveHhUFCKpw",
  "key46": "3XFWT4r5wmH1L1E7jC6y1i9ojivXyhS3hqrw9jA5Xhs4py6Z1EaMNZNKNQMa3xGGPVfERRpj6PXij4nvcuy9k2Wa",
  "key47": "4YFVKRY4LRSB12MCAMC3bzY7uaushXkt8nKJBaU24XeCoXez8ucXmoEpaB7uD5e97meJPYwcW3dwCH87xcbgrThj",
  "key48": "2fN2p6aNxULaktRiU6ifQ8sAiuMDDWaTxcPe8obtDyFAiNyW4MwY8ZZ4BQqMdBPd7YeFoR593S6VZ3ipxKDsCCXg"
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
