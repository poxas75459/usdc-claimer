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
    "5n2NXd9yF1nz4qSdoaP2nuppyhKwTkcoYtXGVHNXPoV8JjYQurnogA1otgbF8TKENWi7wfFV2f6151e6GVw6ytbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vY5aTVctTrXPtrL9Sc6WdBSDdU5jCa5r5NCBsQ1gfhqgS3S2wyC6NFEyyy5fSAMCCX3zw35xtnDSn66kJMVDocc",
  "key1": "3MukqTqGe9yXEu7CAvbcvdN1c7r2MZQNt48tjfkkcUjBjaKrhhYjAi2dFsMthMRTckgrKn5Lk33aJz1ofVhYNYXo",
  "key2": "58os7i1ZmZdkp6zBSc6j6zvjngK9uUvRVxTbVtw3hj1opw82eAKaghj5MGuvNQmW4MoiH15nCGyfPNehjp6deq6V",
  "key3": "53WRPgz6GyAgJVySqQ8Cd3njGXpKuvmzFqiJVA3FbYiYFZXPAvEeHKmuLnB78A5cRds3vEbT533aNq8r69ZPm8Ss",
  "key4": "511rTNiJL4t5kSDX2oqBTdXtmkWVKCWrbD19WRyZtSEDppz5G3fc6yMvZoc4FbueZ3exQk6j1H6Hnjr6cCPYNeRx",
  "key5": "4BY84gmaHC8fqr7593hrFW59j6NTkrHUkRSCM1cJVHfPmzo61Bwv4TWWRRvGriDA48oN2mVv2dKZusXQNct1viPz",
  "key6": "4tz9Cyv4SMeM8qQpwa4GfCwhVDChW9zgHCwBpuJzvWf835Bmn3YCDeXcRAYos3QNeM2dwsKVhsbVws9FAUtFpRH8",
  "key7": "4N99gNLZW1feDS9VvYB5yeMmhFVSiKtdKJSBiz8wRJvise6n1QqbELu5sbYBqWob2WPWrdpoAFvWfBZjZqdSxaPh",
  "key8": "2RxixubKpmhr1PgsYAxdowfd9sVx4KYsofhmsTQWwn2uZt7wYYQ9HktmwZSfrAf8wwP8Q67oM9zut1pNJK8eoK9n",
  "key9": "56MEo1fBxYwjsQSjx8HRv52pmpuvSmaTmDQpxcAjAUZY9bRyFp6GfLbAbRjkwqTDrHsrioQPXMtVPhbWmmGps1qw",
  "key10": "5LemdykuWqWu8pqunhfzEWaHnxtLpcJk1BBkR9uCZW3va1edbUSfm3zUPtQkynT5vh5NW9K3kXLmXNm8Z9yTXTjw",
  "key11": "5n9Zeo1FwUgBQDfvXNcCCHrK4H7KgTVTr98byjJ6LFCy2AgQ9jC1zWiwHUae1ejVfPsVVkwjtbYpimmfq3G9d2ij",
  "key12": "4Yg7y1FoZKGKnwBXPdJPSAX18NUg7XceVaC4iuryqHNhgfnTFhURwfbSSKoJRVgn3dy8uY4Svahkn9z41ooCU2wm",
  "key13": "2SiCe4DmJHQq2WvCLiLRPHnWNAWrXQJi7WSSwy1DbtULxmcUQsPPqVAN2B5K8EvaPSyAEveq5xPGAQtqXbzPceM5",
  "key14": "3B6j5RZvZNPKCJE59wntNNS6yynVS1Vm3jzKZhvvsgdKjD1qJmrLa2wjGfWM1hNtWcaVKd1siwkwJzfcVSs88ciK",
  "key15": "2EJC8BFyQmVNoJtjsAjDLnv6rqP2bVMQLuhGwPTHrC8cxWCBe2FXrEBrFwkDVdkpbB7bf3qJzqt3Nsnfx527BQqN",
  "key16": "3VbvfJLtQhudgCSRM87jF9K2KpBTknMTXvh6x8QDQKxDS3g9BoYyBTmYk4MtgPxSq7sst7a5Gdt6NmLMCcKRKxpa",
  "key17": "n5s97xEXfrdC1pAMQxFYi35ESpDEdFomFFJ3hpPjfUurH3CH9NY9ZyAH5A63SKgqEv9Gq6FwgraiZH9nFdp1F4K",
  "key18": "4gjRnfJvodTa2ho6TSRgwXh3J4icdznbv16dNuWRbYtgvrZUtoRw5Fxy1xqXDpHJrs5UWk8TKRg5nmeBad1NdwtA",
  "key19": "2ychPa5sYiFZUth1u5ZqWDmDfJuoAP9ZBtnSefvCY2j6neGGMfVX1LbbS79vYxo5gQ9iLqwmNQjhpA87ETagWnhJ",
  "key20": "3ddcezEBBWPVYsMnEjHUPDBxD2iw794VV5T3ZiV7LwjQEZJT6kBuGkA4KzF4bbwD5DpGJmznQagP3s1VnD8Rdxxt",
  "key21": "3kPhDuJjPKHeyEPBC27Cob9SQAqBg9G4KhhhJAjmgnrCCDGDJp4NTADPUigAmhL6KpUimtdGnFUzBCwaqR2WSJvn",
  "key22": "TpRk9uKhKuCPcQrk8qMSZmbcgJhnzWorxiW4T5YwxSZaqR8Cq6ANiDe9CwDMaSVM9MHNuof539ew4ywmJjy86fZ",
  "key23": "4VQ2zDTpCycwX3PrvryYXSkozWZEmoWbvnTbUn6rhBqE4163Rtrc8wyWmaMU1D5uHaQ8MfP4Qgcztwydxy5amWKm",
  "key24": "4Bjy3eqnE9yeqnMAcBhCh8aRezehS3VT9ZiComYowpkHGxWpJNDjuCM7vxg87sJY32WuRGNYiLSK3irKRdYWJHEK",
  "key25": "39jCwBJW1tRopFHgpCYyQXnD4SMKUNGkz7o6rTfwTu6r7nH49PgysL46CrSacEkAK3YwM97ty7To3trjNqX8vJ2o",
  "key26": "5RbxUHethi7UT8Uee3frnJcyHKnUzobGJXz8yzAT6VJsriWixkT4ZUycDDGad7vTUfwVsuY3EcrjaYFPx9d1QpaJ",
  "key27": "2RWrviHAVs6ot5zvfNsLLrfCrEfLwUSzFfaxEjRoUYZGhHwsg3YNozfE8jUhZ6deoHn31YoBFdoHwZ4UuKQNxU7R",
  "key28": "8epVX56gx1KNK2NYByh6PSVp6ELmJaAenjLZyqCCXnM99bFZeYfPX1iJoxt4mUoNU21RBexELSRb3HhExM8yhCy",
  "key29": "3ckaL2tHThfoKiWfZT13n5GVcT7fMHpCMhKyKBQCbYmA5QotuvB3rj1Fgu5A4cNf2A7U5UcrvYWSTYjH9yJFrW85",
  "key30": "5SS5nwdv1AcrHqpoovJ8bYJ4yKmDAczN6VnCbSQQXfGmDeFLg7V8UNFkwSkyHikqX8naZCDiYgzmgHq84Kc2Vbz6",
  "key31": "3hkoNNQpdbMVPfyzN8AHbLSGtWkcuDtvwcpntrYhYbUjfo28XU6YQ3Wwii1PosLTFnVhLuKF9uB4yfVe9pWhmbTF",
  "key32": "4d5KtAyiRBE88AhhmwGn7C1DCofa55UAx3zgQTeDj4HS1bwm99zRqnMXx15KRvqtULi3bpLTb5dxKnywSqd7ZzfS",
  "key33": "3ZdqBWtq6reJ1saySCmUkbuazjxwouvDusSSmHKSLBK6JgAbzQNsc1rgKyEHXAKBKzTn6HuW9yRbXri6R5eWyQyy",
  "key34": "29Gi9ru4MKsJBCvUb6kSz69c8RrAb3uiC3YhuuvF59d59wtSBFftH49WgoYHxAwRGjn14kbMyi5puJp5vjTKjWsy",
  "key35": "Z4exfzg81X1QSQK7yMj8W7FirqwNM8gcVkJ3BKH9uhYcuFY7CkhuL426VJH2XBRwiPfMvYK9AtRBQpScpgyMUxL",
  "key36": "3oJDiuhcsQGQzYt3xV5kqxDYpFfLZi9uqaE562jR2jRkZ4UZYFhnbRC6jqKPuu48pyhSnStysYXExm6xzZPSaGZg",
  "key37": "2Wc2QFJZW9ettiEK9ScAcunKAtFAinaiqjYxXKntGkLzuD5JMYWVjX5E8mjWxV9eCiv5kM3ErUinj944bhRNCiub",
  "key38": "4Ti1aigvuDSC252DUUj3LknPyQNRaFW8tg2nRcLduuvdpMNWwvBb5nPV3qcdMfT23xheRybqKEhAerLARkR6Ky7R",
  "key39": "32m7p7ednJtrihnpC4R4yZGHyjyLRQP9aETJBeMP6PWbxhWrNRDR7EZxAMANQJvgVyaDLEVKG8oGo5X5dtKAq1eV",
  "key40": "3p5jGwNmMoBhbjnH7rbJKYwRVrGNoqmhqg62kTxt1VvhYT73ceDsmmzJX9MKRkvwNGbbDBSh4hMo5MxzojTwN7oj",
  "key41": "vVFh1BZDuXBEYej58CvNegNM2z3RuSDZQqHC9nJA9wiYtCaEzAUaLmVKSbBMdB3y3kgx49KbmkQ4kbnaxvPvitV",
  "key42": "5jKqPnC5uLCEEbRyr1TS6SW7ZEt9qJqt6YUjdJnHKHhtnXq9m8TQj7tyvDcAKamrLM1yMQevMqHNVv5xwz2NeBBW",
  "key43": "5ko5mhibiKAxFQWHFAV57RFX4pXqft8fXNh5gjwiERmq4yd2GLFyZBn4XL5jJVdyDxXGJanx4Vh2robjpjqgkgsL",
  "key44": "3Z8chGUTiQWd1vM7N8vMCtvc4HekMij4CueoVzC9LWpdPxLB8d2EcZsSVQ7WXyLTgBCaUAV7oE5AyxinK775oawH"
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
