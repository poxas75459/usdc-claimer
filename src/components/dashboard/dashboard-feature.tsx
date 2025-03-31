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
    "3sviJYMEgbyCa1HpWVsNsWpeQF9cLH6mJJZiBZjNEa2meAccQ9KGjdjcDuZfpmyrm6VFiaMp7RJ1N2fPkevaJwMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LDWqb6uKEAjfbWb8HHrYrJHXue3MxqyTLX43g19gumn48jAnHKCnDUn4ABU9nYv8uXWKk1WRRt9jd2qWTG9pzmw",
  "key1": "kcA1ChSN9KcWdSNRKfRX1Pk2f6XfU52LTwNExP2y7BHQPdciUYvNtiexQUkgJJeqwqN6xMhxVm3iBsV3VWWqAav",
  "key2": "51jmSpTERBWNDicDgZ1jecDk1PyfZ4dDBNx4htMSqSDpHG96J2hRwcfAyFZHHqbz7jiBA4uLMrzUBEfWMSnK2ZQB",
  "key3": "5hZzwo9vvYam18yr7TzGyDjHsXmcqhB4HVaTT1CueteiASuEWWPGuuv7KxqmMBFRiHQpY7o5QDarR7iBJYRUgWRU",
  "key4": "53DWfBV2aQgvsZUqFv33Vg77ZF3XVKLyNXw7nYhwdqRcDkkt6M4cgta5xjuqAj5MyC5VEXSg2dK1EvWN7BYFGfMr",
  "key5": "4jbqZxySXfHATE6JfdtFFq5vZagXz8Q3TfvDbfrLFpZ4JyGmYk3GYVn2xbsfH1fEnQnrz3wPuhBNUUvQVRupJAKg",
  "key6": "4DPCwBTYRUxSsFiJAj489PgQ7kKSBaoZJNvmyG49chVQzbvGVwfrDFTCFLAR5sj2rdLcuqrefZM23DKkwPRuZErd",
  "key7": "3xjhqQK9f7Qmrq9KQqrwjDKa6LQ21s5utEjRVrEDisRu9GmvKKJnWCVgQifZpYS6P4SLHT3cG2peb9EAR41fP89f",
  "key8": "5XN1XvjWy46CAUVvq68vnj13yhcAFKgtpS78FiHnGa4SmDpEvnujkRxnLuUDmww3rLSopTyjN7NrC4Zn2VKZYPRU",
  "key9": "ka7PZ8XVvrFFvh3Jz3PxDo1MeKa4CBXr9wi8H3p9d9PhtXWkQHce7kbaNH3vDejSN5kju73eqF2MiU7hRTsmDkk",
  "key10": "4qv8zJp2rpJEATuyvPzxw1XWFqBM8hshoSvGHN9CA2ostmA8XbmEqrZhZkmcLSHRd6qEpqoqCiFUjsZZm7qPu16K",
  "key11": "rTE2sSXdi9vVoN6CdqWHudTKqqnYcA38aaZ4WcP9hd62j3FbyuhN8wHVKEiNGCKZfhm2sagGqasXuvx5C42v8iC",
  "key12": "3qBPT7RmHTFLfU9CocZjd6TXsBKBcnv7XGQfzCWBcMRFZ7hFUSzn7D4rDoH3bf8TZ271jayNzodyg8eHMmXiCQNA",
  "key13": "2nnNWCohpveTiEN3xFdREkJeyGRRHzfHut4BYNwmdPaEJXL35nJtFnotfi8nY9RUFKaHwvhWY4ZYBC4G8DLVYwvC",
  "key14": "2xWBeMuXu7YBF9K1GFCBHpNShU6BmURztNDeDj8Gh9GZG2fdUHj3demNZKnFSCiw5uXktAhXygwtFoDvf6e4cctC",
  "key15": "3BampHaDCJRTFSmRTRj72AP4QUAF8E7A1qMUxZUjXCHpvUSSsx75ECSm7JPrYysZWnheiq2AzVwrs5Hc18JN4nhT",
  "key16": "3N1R3ue8RxmN1dJSpz3J1LRpCWHKiXioaff3qRJDY7fNBw2JSk8eDpWZXEFxDQY7dSp3cZAktJ4eY1ynt3N3QYfq",
  "key17": "38hyyYjNqsUyhsZ53cnexBiR1x5m2HsxSUGeKBUvZgJXKE1EzVidwCqqLaaqWRBKrdrfywN1vHiUGaaRmiWc8S7B",
  "key18": "twh6PjGgWCvDGHtUigG8be7a8MHZYsgE3kvUjpxS4WPK8z9EbMbYVWBz1LWqoanjdpTcGYbvLDjAUjb8tq3Jcap",
  "key19": "5m2XCUFcuccX6egvrbDkyWYScrU8qvx3phkrfbfpPTE7bHeKGEWhosUZmhz63VTqsmPar5bSVupVFY7nhgJQigqf",
  "key20": "3vQsNC1GDcQNGAkShSuH9FaWS9PdCGzDHBRdnHkgSrbKLNCYGBDyuRMJ5SW4v6aPySKQ3h3akTuPfzsqc1CnYq3G",
  "key21": "9hEa5gEKm44Hj5N3XCnoztsH6Qytr38M7WGZkAFK4wvA2Q3URK6aoQ9DcfLRFDSustT9jNczsEU5KXKvSRhX8sL",
  "key22": "5J8sZEGncGf41qhwGfPY1oGUMQw1KrnW3Lt7aGBb3jjnMcMasAwcm1R1fa7bR6Hdm5pBBpMW1sHy5KVJXBAzfy1P",
  "key23": "XXm9AzrFsBmJwwieCfLkska68AuGypbq5rK6JtALbCQyiEcjtLQ6GEzqZs4wANMRJVkr54cadhDrdVuXUrTK8Qk",
  "key24": "3CwDk3tnSFWLAxWVWP8zZegQtRXpNHt1ix4eWjAsSV8ysfVstKLr27NRJxK7EWYRkHy59Xg34XBw7gLxz2ZvAJfy",
  "key25": "3yFV2wDnusM3NqAfk6HZrALsXQ79XSFM9u36A8NRYZWvNLYXNFxozeXSEhkuZ6vgw6ZwxQoweUT916tpr856CVWN",
  "key26": "5aQaphun75h6MsCzAnKh4fz49a1jdqzYDV7uGLwiPCp2XnSAe1ue72WkzXJJPLDn3JA9hxaUCUB3yhxDeFkjBEaQ",
  "key27": "49ob5q2R9WnS4SNktzBcHkBv5JieRsyqXzMX5BAFcZGHaYc4K9VXfEaS7XcyDM5j1k7zTgcCJ8wVrRcJKkbk4ubQ",
  "key28": "3Wm2wxkkcyo1QmwX6v4bweLrBsc1bG1tCMG3iR8LheJQzpuWoaBRqzyZvoXd3zpfszy7zShivaHYQTGCYYtHhWpy",
  "key29": "67p3Wojq26hAUHvq56Jcwj5Qr7ht8rjGVehCgJ1rKoWsr6X7YZ1suSBwcFxwaWV7JRYhqUYF6xZhWbe2wY6hH5Vp",
  "key30": "3ZM4GzgJJ2GBqLgRkabn6fQhkBam6psrBU66paEzbA5eca69pkQD8UoF3LncKzGwFWA34YEcFNL8XEXWjZpNiEFw",
  "key31": "2U4Xgp3sR6bRBiQXdzYoqs2jxC7cD8rsCEioDKGj7zTVH1oFUsArR8yWNExMvuas1KbRoP14RoGs8g4qWPhdx5Ro",
  "key32": "3bQE7NXAYwavHY69s3dNoArfNc4LXxm5mWwGibVJXTpRVLzEMJUwbUi3i1EWMG6H5Yer6JYroRCnkapmYJ6LFi2r",
  "key33": "4wSnwFh3c9R7iQAFK4bPC77AD8RZxchGxiwCiYgYddgPdTuzLe2kpQU6g6JXVbvmCikQou2jfE4zeqnmAnQHZn2e",
  "key34": "5Dkt6dSYuY5nnKFiCnrofXTixC68Mu4AAj48qPK3wd5uFKBr2CGqySkBUBCXH7HZrgoEN1sGdme7RFQ5CDWJFFZZ",
  "key35": "4QMkCG7D41RxdxrKYhxtbQE5HdqYLU4uPGWjHp2v9qTiut2H1PaD18Kv45VbKx8gqzL6gnFzCznTKtQwTrAq8Z9a",
  "key36": "5GNPzi4bczP8PiZmo3czSWqpaYo3JKzQBVUv9oZynKdbeSxbjoUkaQoxbfXZFD8U7Hpx8rpoQKxHNJZr7Q6K7FwC",
  "key37": "4AQr4ov2gAagZBzHoVeNdjYcxuHDEAd13Ptqk4a4pprUCvPPh3H8WmsPac6y5ozMC4ArgJqD25TpUQE73QqWZtQi",
  "key38": "5gqC8xor6tS56R1K4eYyd6kJB5YBMvuD9ewFPzA9kv3TGHqenC2Gyg6nGzqoCqKBsjjBGvKAoKrDBYih3Nbi65ek",
  "key39": "3R5vF3itS2K6tFfcsdt6B7MhgNzoNo4xPeXMdeUuVFmFFZbd5WDHgMGTPV1A6xGAtPyGbooNz8Ginu2z81taQ3N9",
  "key40": "3Mwc2vfsuhfgofVG3aa8DFX6CSjf53EEMC2im5AL6LTBG9AHSLEeJ1S7Z48ZU8M6Y8RG19qL7DUuN7CYmntjuUe1",
  "key41": "57feKYYtaxcP1xrDincE9omzwgHLh1TnjRV41WnvJUBNoUJ9KqcWQ5jTq3K2FEu3iU9vZA8AGYU9gh1ruveqnZ5W",
  "key42": "5BsaC2z6T6WKDhtz5Rib9Ctonm7qo2FVzFtWzp1C3WbgFVKv9WFmtzxrj7vPgCdxJB7EvAo299ErUc5dsWgJKN9E",
  "key43": "34hzFphZB3Vz3sYu8hUPtqFfgQxYa1rdKBkHAwqd66gTQLTpKqjmqiXjxfzVftF85bNBYZbJwx3UGmHwK51RZLSb",
  "key44": "4GFbfGTUmkSNfJvoYgTaXjJryhZ52kZDRGyVjDndbwn9nd3rqNcfJbyEvwThzA1Fua3beMtzbLAtei5XZ5Rxuhvc",
  "key45": "2ikvrFKAsEBL9MPcDboW4auaNg5SqbYCeimrS65LeXsa7kfvmdAgWwh8AsdSmkqK5n6q3PQoGvBkcyqbNLZJs2mS",
  "key46": "36j7Exkv3dHRktPhinRFKR3oZXpL5tCoFFoXs8i24CLmtFhFqZFKP6pXiCf7FtYQNuYr21iehUKy3zsUuuJj11uY",
  "key47": "2bySnY7oVXzJ9nQFTYrciCMG6VRXBLU8hjtnFngGiVM1vwAkSu44KoJMbgCJ8uwnTfUYTJZdSPy16eoo7nCNRuXc",
  "key48": "wKBWvooSyT4RTJuGKPDHrXvF9EJ7MRJYDktAYRLSjBp9gZEGapbcENGW2kuKCvovMW9pEhgivPDSGLgwzRfPYDN"
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
