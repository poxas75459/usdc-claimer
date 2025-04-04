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
    "4or8vwqsKCsSUS1ctjRB2MrwW3A2nHjmPG68jZubzcdxN1ekhWJyrPwUbpbHDv9SFWNETbnNPTWCSYN9cP15vLbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PBdbNjkT7fjjb8MDP5k9BQLgVU196GPAuvMXeHxtWZHtJc8pA91h2hT9L3kRMvaTvXmwLYwgQbFEtEtYpt6o2EP",
  "key1": "2LQPJFQGoxzLDDuSv6VcDH4wfTFUHJc14JcytrPofSPcoxE4nJz7qwH48mbf4rH5KLbHvB4pLb1a4wghtQhGJRNq",
  "key2": "tDzU2QFnq1NzBdLSciNQKmmkFD6bwW1Dic1gJMqKYi4WgGz9kW36f47gNahbx82GLMdVTirDMSdGCtyqTBLiiVz",
  "key3": "4oadz57PSQW9ogZ7GZbjTXEt5iVTRUzuyUiAkdNmED9UqfF782vx7y2ftbePtooZZHKs7oHTGQqPSwZi3bPYZL6w",
  "key4": "5MQ6SGWQMUjDdQ1z7UpRCNbzx8bdhYNzpeBjwEsMg3wQWoqMUjZ66nGy1srPsnCZKzpqj7cyWWfkyBg47XSmhPfV",
  "key5": "NuxegQ2D8BBhVabjZRNaPWf9QD48Anxy16EfBLcGxg65JrBHjvGj7nnVWBrhWD4qYJ8vWxsWbFQEMoeWESD6jfu",
  "key6": "2jo8nYXhD4FWCoWHBsaGQdNQJxfobDhKkTCXhBMWs7z6qMmVtsuRi1VUYvNXDbT4UvvnT12oCMbNVswPc7ABeFrd",
  "key7": "4VH9GDSQpXsxRPh5zJTjC9m34R4NHZ3CWrZ1SGS7dr3TBdPxBGYGvEGwJQfj8V7y5WF6P1aXPnBcq9TDrBbgvPiz",
  "key8": "5yGBeJ44gin7aL9QGJ1nDGWSiiWoVsfwwDeJeaDEVeuYMEiFz2aJNpm1drR2ZBHJmbqfarXzBACGjCL2F8fip3gD",
  "key9": "BryLoKX4oQY8Kr5CTSWkPrhbsoBEgkqLia2Gn4QGhMw6Jp9WAw1wXTWL5wW4kQWZsajg2dBhyvBSY5sddoZgSYE",
  "key10": "4JPMiU1wYR8eoirwAXadSJybDVXYXkbS2fst1wg71gWwqmCo93THrZtsaapZ7Gow9LyRwM7nF6fVYv44RT3CPDfU",
  "key11": "2kHkQx5PWp5KK4PpdvpzQLbPK5nkerftf6ydFTMqmck96bfzFxvDCb49ADcwTV2PKMGV7Gaj1bg3HCoW69guWGA6",
  "key12": "5yQHHbYNSxRpw4PDivzTbbmqvhuhwHBM7Ao3vnWuVsSpZW3PxX94FxTvTApVLW4F9Pg5riWjjeu43WJTnWczwKnV",
  "key13": "rGJM2P1zbqCiMVpnFjmsxnctmJ69LY7715idDEGD4mPRLCJrqato2A3QYQzV1sH9EGXtxd7ATj9qwuCrfFmgoJi",
  "key14": "3jcQKh5f4hq6XKnrMnqkqek9VCszacCuaDMPREvH4UAirzmTSjTgcLesD23EYKav4xE1K6j1CkBwT5wcK9DM41tX",
  "key15": "dz64CAevedXGaPGhtm1ZxQr6QHsg3q4RPosTNsqHDPjZ5rHxsURa2qc1cLjVdHn9w5kV7kuqPXAdnqqJfLoXwZT",
  "key16": "wqcQDiJvWLJCXgUEmUEiEYTKcGPMdTjVseN9SerGSr5S3RRC2uMrvadqtibyBYfhy2UvihY2kCrp68Hc3Vhc2Nw",
  "key17": "5gMQnk2cVzaPvEQsoywZViWiioKwbwfc7QSYmX2eEGE7PHWSFUQVJVVPphjBLosQVnhSSdY7QBVtfVJoBGxXUmvC",
  "key18": "63p1H6CUaqQbkU6zukQChyBUA2KR8E4CTjAFeAP9VH6LrkZVwhWt4idMAYRwQpve2841UWHXqFGVJ98rps3MUQSj",
  "key19": "V8kQu94ru5UpX9fo9cmPfspQBUS216BZgHqkDdYUgcQ4D3ynX2kPuVUhG6s7WJcVsKGR2AtutJQVXAXLxNa86RQ",
  "key20": "oBffoAAeBGecNKd79iUptJgFhaLnxgXddSY716m34De4ama9wMMoycMCRfYEwAjkYpZARyM9jfhQkvVcxRXTEPe",
  "key21": "39NH7oFAebFzBGodjNehG3tCxiZy5pEu1dUPjTjQavjpWgjpc1JmyB8fSNwbW3ApYSKFJc24xAvv5NU9b6KvNvyw",
  "key22": "5DzetWqWtf3hBZzx7BLtEssJgdrYVfsuMrooaWeJii7RzsNDjhBLDffF2eiNp9wQhzJ4dpntDPZNCQfSWkmYAE5k",
  "key23": "2kuUWNPtdFYNrSJkFvbuoBRDN6NqcwaEbCicaDQezRSMttsyxs5GhkQtVEDMsGxbADhgtidfEyDUeKczN296xmop",
  "key24": "3nKRsHSHftjrUsVjSZFSMrmpRX8SPHs7NqnfjyRKnqCJNrQhtBGMrJ7EWgrVjbWCcqLJoQGhMVjqxufmM2zF4TaH",
  "key25": "4WqUTUWpUKrQA15v3eKSS4GigAjHzUEvZfwRN7ZGTQMiykqEsFrYtcjVThVA1mqpVcCJVLJkkL9cK5sFHK8dQpZY",
  "key26": "cDLjuDfW6LPDxbfcnZ6fXkmV6hdA9r7YJfz9j15quem7by2pbr3qfRciAm2559Ant2WNyFpkQydAeqzJzTjdFE5",
  "key27": "4LCGpdCFDJBLF8bmWTojJJccnZETQG9qswa6sg9YBSFSva7eyzMztSFenaJ2BCUBANggUsBULWg2nT3ejRpngZt7",
  "key28": "3FR3i1Goj75JCoyy1aMNF5bK66zeF4qBWp1K5gj7sANFodTP9S4ws3BdDy6yXnTavvWMYumycQxGtXbnyR6X2Wa5",
  "key29": "SCrVFAp8VczVRe4PuwSvYZKo8eMrauroRJiS8s4HC5U23FEccyfGNqrpFnXjm8czjD1AmwpXN1zxQyBwmpBnYcU",
  "key30": "5QN5ZKVty3NfPtdk9MizkyyM3tYfKm95JPrB7jnqchUJX2PZsmmjur6ncmH834Mr5CBtjUykuSc62gK6QMvLfaCG",
  "key31": "3LrcMq13SX3T7WQmmtJaXUNMWjfQpDWxy9RDXmf956bWGD4mwW9hKye4PYGt2eUr5KNA1aaK9NnaEmTs15WvCzCD",
  "key32": "CaJpByLGGMunjAeqDkhJo2NoVcRTbo8ssSq8eaBR2gKGabX4anrkpd9mdNv7QL1y4YHCqzsdctKpGb7Jn8Gh7sR",
  "key33": "4ekacDdULz3TaV5X8AMYuEejBCrwmA3sbqxfuBTNPCvbeU9FxJUTWvFGXKALWgdBE3BFojryrqXQNfkBVMW1q3nK",
  "key34": "4Mt7yPoZZraxRCd3KaNF6rCU3FzZdrAeQjW6ZGWW7KCmm1kJqzxwnySa69Vwkzq8wGudzE43PANS7TFMajTLBR5Y",
  "key35": "63fMQDGy8fqFKjtuc29Ywv7X8Edt5amdS89UbjEZvWv83zkVhSvCeHkfx6UPaKSpqAPDqh4Dn5Rgm5MtmTSd8mrA",
  "key36": "5CCaZJs5RX9Z3tRNxwbGfh2FGz4XDuVrLrVtsZiaXn2t8w845PUVFYUc4mLEMTVhen9XhGB3YXtyYeUZy292GXKG",
  "key37": "2oCdoxTunqNb4C5RY4RcqFzcsu2B89kQzTBt85aiMPGjMYZtA29cjAHENGJPbh9FmhoyJLCqh2wu3U86xjmy9Kq4",
  "key38": "5fA7fabwqihgmhyadzbGnPYmaFUZciH32BwRnTP1mwHP64u7jDm71yZjYEsbUQGUazKvNhamMrmRdgKrhcCbxd3F",
  "key39": "2dLMBjAmFwTcxBq1CdNZ311RVmUAdoKfMsjVihoo7yXJpAL4p15ox1thVSqijtzaTnZL7QZCThQ5xXQrw7uF5BWY",
  "key40": "3oVLfQ4j6kU3kP5XdjUMP7uwZKPZuCXhjJB55B8fpQCHJ77viwD8De98wDGzT2kVYNxWodfU6LpF25pXgto18JqL",
  "key41": "2723JjdeUGxZEraHxB1M3zL8RzRBDqU794dQXTnCjhmP91tLeqouxRukP95H4Vr58ZMbGMLs3sVvA8PchPbcpcbH"
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
