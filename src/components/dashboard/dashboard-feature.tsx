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
    "4aforQGhgP4VM2nxmJK4bnvD54MrzKRRZ82BWKVM1aESdK7DSwXHxKXJxog9LmH8Y4uwQd6wV8QuVNMeqd8LSUfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KCcBTqA1wHN76ePwrQZob5bUGHQwSgZRrYqrDDyZR4XNYa7VoFuytzDMAoYUXiegMubpgK9Hon9kmTMYmt9Thkr",
  "key1": "56wK4xY4qZzhT5yhnhVe4tU5N7YknXuohy4CdDxuvBDRe1fyf3483Kmj3pA1wFxnw3G1YrbrYkVEgWmnzzTpjQ8j",
  "key2": "2PSNDExACVSuoXHM4MRxH4B9okKLQMFwbmYij32kWCjX61XqPKN56tGpnpoJCbsr6C2E8u4UNV1fhof6kUyx4xjU",
  "key3": "5KgmKUqv28wycFWtyNEeHcuttsEa7M37jCfwXdXYFc9SbWpo1z77DK6y6hdMeqTeZYZcNKnRge1rzUoALUEzR2vj",
  "key4": "3XPv4dxktQhgDyDrvBoHtL15dc1DFoenEsXEM5bqexywSg5b374ernqqbekUr5Gqnk48GNnfYZHJuYhxaRzitpG1",
  "key5": "cX4cVycyiP692cTQGsRqUZrojerhFTHBDDYyRWt4tCX1X9WXGp2SY2iT542mviUzgm6TyaPQPb4tFpAeoMyeYz9",
  "key6": "4WSj6pCBvurtLDAcUfVuutAgRbooJ6Hvo7pRXFhMv9wiGkJ28aqmhaQoRthqAF8vzULUvsmSQr7veNgWY7resBdV",
  "key7": "3Xg339VSUWJnmSJyMjiKECQwtDQTMEFQVeJACjmQvA74tCzeuSQDqhEj7JCp8UjdTWF9k8o9BVNE3Lx5qVzArukU",
  "key8": "5tdTacd34kAU1BoB16U3VbmGaRDVeynttuDJ5LDBNpZreVDDEJmqvjoskVpFdeDJYm9YGaQTBNDcK2dpxCoGETPT",
  "key9": "2RQfbSMX8oxjapkTjMXuxik996wtTfcxqQopBCjNFydVeDLgpmhGKCqY1JGcFxiukVLw8Sv5VUXmk8qXqa1EA3Tq",
  "key10": "5o9tvmKJcSXGEBX7c2k6PKgpu5b7rnEQmGF19z6fSKksWkBsMs4uDpe2VTgzpb4uduxt3cuQpqTMBiN5AssaJRDw",
  "key11": "aTvcEU5oLXC2eDweSdFWsdobMdv4LsKwUnk3sbyqc7LjY6f83sD2Fkn6THTyCGfXQa8h3CNGcnKMGtBhuikEgMe",
  "key12": "2j7om9d4WgWDs9UuhKxsreYt8KxzeEYJZ29a2rfaS6bWEyDrnmQGaH3ZhVs5rtdLSMDm1uo7SRVKxNdr21Mn58Mf",
  "key13": "2obs5LC2kxdJwouFc3WV6oEjgfZWXP2pMNrHG2dXy8Np4GqXKDWnFuJPdpALvGnMFCdcGiYa1nXNduHckMUUCdva",
  "key14": "b9y7bJtmS2rYAdqurEjwrjtyWqGwbnQRa8tAmeQnzCUvGd9dRNNwjCxcDd4uW7NVmnw8BWNFiGhYNWGefYPxTAi",
  "key15": "MeM7T6HNxF7yZDV7BBCYHQKMqdJhBvFnMSeXQr7EmbREnCqXwu6qzbXDRvXbCPF5HfKJzBEzCvQhFhTdKqmzjLH",
  "key16": "2FKgQWTnsHif1nLNBTMWyvcso9BjmbEUt3iEKxzw6iWjKub6EJAtUM2iWRy2ebc9y2d7v6q2h3oGLZsJG15mkTs3",
  "key17": "2KLXjS9QukUPPVRv53DTHepFBiJttNknYqdaobzWwSJgzHQhmSZdj9ekyHN3NS2Mx4a6X5w7oVCAc3GpKwPHNmvd",
  "key18": "5pkHTpkxMHC56suswbZvYJHSHrbuCP2CBbbxXCUBfnAsDiQtFBBdw7V68w957Qk5VxaDsrjSgZGHUuHxhyQZFNha",
  "key19": "3Cnf1sep4DYuxfBTYhQm6m2iSQBRFKnCwE39Mts6QjThQVreBp2bmzuUDEjFCPWUzyUHtkU2BnCUK62SmXtHT9yZ",
  "key20": "37LSZy6TZgGnuCrKdzHxdGSQhVBcJs9div1HhvoiSBWBNr7E25J5xyki43DEKKtefX3h8rKyQnsSNjqnXHGAv88m",
  "key21": "2X3bW5XWQdxt3JD5hRU51peXEtdenuNYgu6dJfNP2Zh3jw5hjnxzbKjZp2QKYB8VpBVA6tdkQXtSapoXcc3CkhLW",
  "key22": "4VhZeCTYQEmaMctV9WN7hmEReYsZ9jet5paemQvaD4tBop236Qiuxcpup4YFLr6icxUskCuDnUt6ATNEAuaeqRLY",
  "key23": "4pUsUTLbFnjV2LTik9ivrUdndeizF3MDPKtTBs2MTzg6FUDFifxdiFxZ9KHVh2rcwKA7VJdcShE6vrTbrvsZZh3U",
  "key24": "2Ljsbg9bDbkZFcxMVvtEQM3PGc6c4fGus9PVTXGAQzQVbY28wyWcodQo4y9psKGeCEJCTwF9bLR3sc3pcPS8Jbgn",
  "key25": "5MUFF4T6oz6WQCib6MSJpALveg7SzSf6kPcEUhtL6d19DQpvXoqwkVSHrxS3TwAU6LPZLf5Za68bExQGcevx4nZV"
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
