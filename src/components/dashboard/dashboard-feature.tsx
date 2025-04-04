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
    "4L6VMgjM3bxNBKGMR8ozQeQ2ngfqqrGFXQ6Up9PGJBqqudqKDvL4bsG7NBJyCNUdhsy9GsSTJc63s8Vg5DKj2co2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uaLsaAdjPnBEuMMfuTD19dwbFyiDvjXW8UoFSx7XhUAG1CzLMCXDU1wDFdJguwzFaPj3bibTgSWMS7kwG5dMCoC",
  "key1": "593eGmcLDmDAz3Ny4iRD9BBMkTqHuGrPzpf2iavh1qWxDm5vjKS9sxTLyhuCykj7QoH8aedu6wnTTN28UCDzvQvg",
  "key2": "2DZZPuKqjjkseJx3LKeXgi4mdY9dB9w3QHJvU5CbYVmysFgPjVJqoFZEqGEotd6JV3CqMtR95Uxxm7W9M1o5hN1a",
  "key3": "4vMtHwpei5z3EJgM78aZJvajdJheVpZ39cvMpzM4gBY97jhNK82T71wBoPNWFuUZDXQ3xABgKta9UwxJyhJGEU7Z",
  "key4": "29nUr7EN2eoKDovkjZCS7ZeESDhUrWc24R9CUjMyGfFw8yyCrWdSB4rsbsgB2SUaRcxt7EtxWyZvsd8AqNJLSBb4",
  "key5": "4Wy4s42EGhrnpJZHHWD5EcUTWzU2vKsP6Bv7e4J3xvrLRMFnighVaBMvJ3M9Gz76LzhfYRo7maLyENCinGrxLem7",
  "key6": "3D6Y1TaxWsUuNDgmZ9ECyGMDxGYHisoTGG4KeAted6UC9E7WBaoCSCiAugPtTGTy6BLoaexB3jcK21tXLzG5ue7",
  "key7": "JBjTbvrGFanPYQWECxxxjereMG1qfkj3nCf7rBoFW1o1CfDfzD8FYzYQp6pTgJxwtSz32Zd8owGqVFjQzSadE4f",
  "key8": "59jN9iqM4n3H3ULtTvgYNBuHzsexmWT1A16b5mGsoaAqqXxyPYVoeZFFruqug4M2k73AKHu9NE5e4VPzWqnwAjuS",
  "key9": "KLcBosuEjefq7RJ9mPbV8xjgJiKbx1EVAcrNN6JcC6ktN7kV4wEGBYdH3SUnE5y5MDEFWB7ZwWyoUZjoKtGUmqK",
  "key10": "3nF19bdrAaTXZZ3BCRBNiUoTE7rguaCWdTrVQkiHnVb1iiMdi9L6XNtQBXGZxfmvQ5Hy8T8dFGuNXHx37k3LNNXj",
  "key11": "2oqTtH7tQ6QiAg2p22vUjZUpM6pGiCsHD8WYJQT8y4vcVmQVZXB6fST8ba5deZ8Rgy9MJKf4EervL3TU5X77E8w3",
  "key12": "4anRor21Q85GKPgpUkZ2jA8zPSUTddrwn3h9vWLwM71MBp49uCGbuAm9v1eavDnsRnh44vZaePZyFKd48Ke6f3dg",
  "key13": "5P7d3odArRUGh62zg5sWayN4gAhi5BR6fLdBGu624Y5GH7bMjsDJToVkbVQY7QxQzMBdsnRKQu2tuvnmxn4swWWG",
  "key14": "D9HfUESX2ZFaC9HGGub4SNwyFPdzUENcjm7LDEHBbYkQEVZf8JXCehBdcgvu6ck9vYRC7yiAtkQZA6qpk3zAdwq",
  "key15": "3gQLyrjXCZEieY5bhLnAGjtvbapLHUPBFzkxDMVrJp5xqLjY21hz3hDtwSsVUNQd1e1q9sR1RWMzGxxzvzzoc26S",
  "key16": "33XuQhLkxPrz1AyS4ggZ87CeWk1gxSaTbmzg743xTLBvWfqyeTPs9NFTx3MfJPCq64sZcXrJFr7sy3mNEXzFSvcF",
  "key17": "2N5qgtie1r9yAB4gKtCYuX7BYbpCQxDr3ZAtHUsAWXnMPQMtHT1QCRZXXMyjVPd78YUi66sd4dyRaLmzm8ojXK2x",
  "key18": "5YPkcSDYt7Ng3VLetDYpT2WtsKuThEfQBsd238ZshdgJ3sHEQpf6baKNioe4EsrgS62izbNaNWG4B6faX4LESGPW",
  "key19": "4AHxV87scCPrEsuoBfhaBEKYxo4XKhttyFzBP5bruQ2C2yunXpHvWmFkVZ3LsbWXA9WZgNsuUtXkzc7j4B2ty9Gn",
  "key20": "4mrSzmNDKQiLBVyWZHiNT7AP9rKGmmCPKCLhnewumbnzuBNXqWLjnB9A2uRmwSP8hnPR3J5vTGhqFuv4qxAXMSZi",
  "key21": "63wtVfWZaVUTLr8J6NB3SKcxN1ycEZdhw7T7eonZTkjbJnzR95Xg3xjJEW8uDJxQjLW6zpN24AMQiQjLyZW8h7px",
  "key22": "AgqyBX4SUeiVMgMazhQt2RfQw8pg9wnB8ttZDWwG2aXukYvtb1Ps9FqMrYki5Fw3y2WJ5EieUCYybkfJiA8YWUE",
  "key23": "Tzb62WhBLtYtAdBzMZqgKrPx1Ddvr3TGLdReWUYu7jGNsPAdHQ9vBcDvGqnNFM2xjRZooFhzNtqqdsrTKnMkjY2",
  "key24": "4Dbwf4DV2pejZieFc7eqigzN1JQybedBtN3QJBcFUpwGt7JBw8LrMUEFeQTrBpbW5SmBDoLqDuNhZnegMrmDqP5t",
  "key25": "5AHx5kKsuPMsUj75hrD6CwQEsop98m2HQRvZCax8QsgZfWMksRBx1U5MuEuocFHYpLhMiTHiKPuiogAfJTMzuowo",
  "key26": "2hLAHGqxiioHDeSFnJJL5k2JHHpW2BoLEfB3XPCwfyPJPGCHCV5DU6ESFBN8HwgZUmZaQvDTmwsx9Rz8BZGnj9iF",
  "key27": "5yGYRayTds9AYDYZ59XW1o4BRekcFPPnu7hen6RceC74hH5uD86BGCtkfSdf9Er2QQ297Gx3gV5CXjG7BcR4DRCX",
  "key28": "b8tUKwnBhbjUw4UM7zs59dBooTWYuRS8sNJjANhgcL8ui7pRRfni2KCW6PXWsNUsp9VyXA9GKgA5ZWL4jAePsXB",
  "key29": "gMYJpQzu4tBbNbecr8jQ1VoUHFHGEvK9eXeDVgf5WuHe4X4vnSzw6QsdeaG6LH6fg72uMi52JzDN3ALRHYU6KKu",
  "key30": "1MYAcvXWRFHgLxKRQt5arAHS8xYQqHtgbbq3TmY48tgpw99gEfhpeFog2d7zrt1nTKmPDY37DVDtEdmnn3rffgj",
  "key31": "PhrsHMVEXGwh7wTyZeCHcrrEeUDGzjUf7t1H5rRnqgktMDgPWnxFp4nJSghATokYyjj7ZCPv5NktpzWoaqr43WR",
  "key32": "24sN9kCChjTTJBgaf1eNkzq9pc4H2SpefPbFiQwJuZ1kkxdK6AuiQyttsG8nKoyuKnCGTdoi6SVEaKyrW1TTMtR3",
  "key33": "3HGZ27XM7NmC2RcTQAYsBgtogFSAkuRSiqANBzu8nggbFhEGwGVzcryniUWtNQwh6jkcRWe5DWBWSyMG7dTivS5c",
  "key34": "5j2nu2h9FHscmRXeCXxQTsuyQ9v5bT64FLBUq7VcM7hbdJXwSYosuMP6fWv2hAP5ucpP4v7q3XsBTaonU5daBi4c",
  "key35": "2M279pDizFgcgDupPXDAcKbMph71CvVPLT4TLUeFvoA6MYAbCMnM594f3FreEA25E2pNe3uWVvv3N4tYEWMMCuAJ",
  "key36": "3uoVzepgX9ge3pRFgMphiNZqKTDe4eiRtUyYcU2x6rj5zqaYQyoCtTnyy5U6m99DteQcRMYeAgMQhvGtgfewBcmk",
  "key37": "2zbqkdqgEr9c5GupHV4Ja9R8X6BGT91jeZb1uXJKqPbQNWhijSndndHMyPmA7LW3vshMbsCuPMBd6iycGjq49CDS",
  "key38": "2qPksuP6QksXu6KWbvDz649Z6ye7msEVwkVVBt3UcyuyhKvXXuUJULgkTQyexmkzjhdnkucpwWEdniv4tB8ambkq",
  "key39": "5MFCx5HEhXzbPEhvbuQoq2ETA3d8zZQ28RxaX8sdTUPqqDE6HjNm6DkXvziTffrjFR858EJtv4vNjszhzXqVgR3h"
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
