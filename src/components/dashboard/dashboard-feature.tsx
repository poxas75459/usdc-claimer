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
    "63MH7hiaKQA9YYa9sJhN1WhoLLLaBBnLwbDg3td7J7acReMisvK5qemKvWRKc7BunxP2ketnxWq95jFCi43qdiB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UeB7sGQNwQRd6soGnHRoGiYqEbqydUpvyfVxtvND9oYwiG8stESy1KXCJwAeSrgNoQ5dBciovauvjbGBRXCsTkR",
  "key1": "65RozFXMbU6kjT1V7N8hqiS4VNFnM93C5xTcFbARvsAnj8G9rMGdbfmFsKqaguznnjapzZZDyWbdiCgG7a6Xe17p",
  "key2": "5vq2SrAgDnYSXcifYfsjhREfZ2Fh5c6vfyGNbMLGBeDa8KXCH4PtF8KrhUuZg9VovSZjjdKLgGahwQbAtn8D5RMN",
  "key3": "3Jjna4hUguZ6T55JvMJ8UTK2ZanGLtrsdD79i8ckZbJMcYALW7FdRv28qc2ev6cYFZnxW3mbT3YjowpiGxbUY8HX",
  "key4": "4uvGRQ73ztcQdriFF2vpsjawCf7Yj5M1MLy6pbXKcG8w3qPs4ixEX1u2ZP67cxGRvc7ZtRmJ4JkhmdougYWWtQFJ",
  "key5": "5UZrpD9vZwnpKnDracku83VYky85mPBVUFian3NTpvzrPuM7kfoHi1g7vqkLwwZ6Axm3QzR2bfaoVPqAXjH6uju7",
  "key6": "5a22CN6dUcK2h6ev9SwSmPkNG259R3evMjX4RqKZjMrbbw5q7wnThLRT8Mae9jU2LjdZtd4V3p9ddRB4pTQSBXfA",
  "key7": "2dk66TJLn6DmzmKuMKjMxCAwmEnJEJacVJgPm5ABAhNMqxA45Z8rDHWFWUZSsviag9GcHx3uC15KZAh9YUH6K5Ue",
  "key8": "2yyrKgJdMTb4kUEQSXjNDukEtDHEfGKF1y4Tu1qHk4HezEPGJpGZNb3ndowcwhX6kM7EJE6BWx3By61SJmmPEYvZ",
  "key9": "5Tcz5an3sAod9ih2EBTkRCJDfsmv6YsThVG8FxgiQxRybfbT8uq2aWAww7UrFhjTNBwPmwarZqKygw5hFRa7kx8p",
  "key10": "49ZqBkBJcBvLjJd1BBpumWppV84fLJpUGppJfxfv72B4RbcfkQXgxD2jmZ6wTfnTThGuKo39aXp5VMUJfM7CkVsc",
  "key11": "3tgaaWz4a6t8t6rSAvPDAkrXxFQj4yD872p1e2gEra1doxtW3W9jANsxTe3oMWLcJrYc8HQppHBm1932ko1kvAth",
  "key12": "34E37iq8hGrUqb15CeZmHo5ZnQYFV68BJ4WYckUfnNoxvU8dLZe6im45bXBXBC2sNKQfcFGMdExhaV7TADMUPrPH",
  "key13": "2MUwe41gn4RJ2FzmqVLv7jwzuUUEPmR4QH1YHCVNNgFYZzwzzEZ2bNy55Fs8dMZ6CiTUzXMiNoAinVDPexTbt89C",
  "key14": "3DG3uTEX234KRQCVBCw3ZXTJaLCr18jostsLPrPY19syB2SvVSk1K1BCJpyJHikeZ17G938G6AnmZ6eY6rvAB3f1",
  "key15": "625xySBXtvph57QUjVVRSvDYss243RErTiqsjmFV2nxm9Y8pGC8kH6Bjgu8RZCHKH37pBn6mJ54EaNZM6q64zBrz",
  "key16": "5bWaPJuGgeCPpHU6YP5Q63bTJBNmfRPWCgBERqeTKe4vUt7pdW2DzP2wWrE87wBWzBjtzzzavNA95TfpEA4KRS71",
  "key17": "3VZhqmw7MGNEQd8NFJRX4LTiNeRZkbYiwuuxtGJ3zdq9zMn7niBWaA2EUsy5QUfFdf7crfNJ1PH2ts59AxaaoVTL",
  "key18": "2jqWppoKh8zBmJVRHrotA2ZZyLjQbMvUnV61i3agARLVbso3MGG4DRCRfTo1oTeHBydfQuG4BQydYujJhPpDgUvA",
  "key19": "uEsUfLRYUY53fhkwSh6ug2cPAGi6xjbAkKipMWHK3ZJivBUBdhWNf6gjcLzn74zSkFFKgRnZjgMWwvAeVKqk1SG",
  "key20": "3nxpSp7Euwh4jmovYENvAAEmALUG1wSERn4fGwydpmYF1Co6Vf3z4yMVFHdKD2N8G4HamnKpXrVer4XDjysWG5de",
  "key21": "zsWRzxHYxR8GRokU8H7MeNd3NuvPXx8rUEzhSoj7GYZqbz7GUa22DV1nrHeVog7a4UDq8n52m8tBYCRkADx2RZp",
  "key22": "3r5Bc7jxyhpQQKLw4Z4hKCR7A54ryybJRXzWceHWVhZUXWAKo1HHJufUhG5qRTdQtvoURvFS96bLvb5uayUJurwC",
  "key23": "5FTabMegnAYuBGzNKKCpzufuhDZXTY5JLyEa82opBKG3QF6o8Zz1EjpDptEXRehqWHPkUpTyVcdZJRcw6z1ZwRqz",
  "key24": "2dY5VRFeThP43duifzhgmPyUj25cumAX4LoTuSjMcio61aRk8JbGnrUUhUyUxHozuEgpjjeSzta6EjuzJbKvr8nQ",
  "key25": "3WkekfAashHLbjhRF2qyBEjybBXFhz8BMhiGAyrURX17j2u6VSphhs7GTiLZUkGQvTXZtaoHJVXcDX6wE2LSQiUf",
  "key26": "3BJ5bHnSNnok2XSUuHFKm3wZk9BZct1xst3bW864zSYZkvgVMXWULLxyhGMtd84AppNoMjYq4cenR3AEaHTcGPQG",
  "key27": "5FNgBTrzu54FZeCoZZ21SWxmu1pgRL22uxeXaKk5dbB3HSKhocQuQvwjL787aZaVAb3iztEEoPABaPH7M6rGNZfs",
  "key28": "5QEY1SxBRUsgPKM8hi3GCz1wu43y4XCWXe5rbrEvzMrxxk5qFaaS5YGqHtiFEjMzR4PAQoL1rpRCfibjP23TyDeV",
  "key29": "reJ1RtS7SjLEQ6wKhfZBWpx8XJbBVXUKT4oNfnmc57GUq8zHjFKSU5kL7r1ZntmxPXDgZwh7bU2gubS6WyZDm6L",
  "key30": "55W8h8whmjquG5Vsj74txucVW3xJ47T1TGAsmZ12eYoxF1vqdPdpwJFKkaodLCLgmZJDzX8PY9pai1UCDLCgpVAR",
  "key31": "3QJ8PnNAvqXVU4TE2cyhmcsDtiLu5R4Hjh8dqWLKrwDcc54L2Sm6noFX4cHUsWrhS4dEWmBEUHPqpCqvYU9wb46T",
  "key32": "3ot25XibRoRQF8iGKMSd1HCpZKPPQDfqF732Msg7LK4UaGB5o3bzeP5i3P1otH2Dtrz1tCE1Tgg4aBTG1jiLyWas",
  "key33": "3smSS6ysdiKe8QXKnKwoRxKUxjvn6AgDxSgHcUHU8YMBnccuUUsspSBT8YZSvW3D5kSnxp5LMRgEBMR9THPQuRGX"
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
