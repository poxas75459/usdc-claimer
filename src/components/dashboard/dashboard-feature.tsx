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
    "3LinYUi1iwiTxUG43xH8JbTJvXrsEHbJJPH2LAx8FTnsErc5RV5tE9t57g6SSYZ8LvCRn4p9T2YFrF8wNuQzY2C1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KmYUGJeheeqkqcAQvyq9beHur2bBYRDbHu6YL42paE1fJMkyPeiBGxEJxGsTbJ97rvfvNxafPz2byK6qzm7L5Pj",
  "key1": "4VGyqLgBz1fSEbVHrhhYy4w3dUDvqE8tCtq7kcJSwfsJTo4HwPSg3qmT7ucS6hVJ74Hr8uDbTTaHbxMdjwX9Kjye",
  "key2": "4bi7T8dddUNFCaCcfLVeKYnrWMwhhaHQFecB6NEYrXn163deXrGQ3ev3Gzgn3kL6CxBALwbiQAbvGc3dNANJCPwb",
  "key3": "AAuQ5QBVK6ittN9jiP6JcwyRUsDUNjzgvA2wgd1njuwfda3ByKxETFCNs8KrAAFUQDwygGVs8GVwDHNDfTKFYfm",
  "key4": "2hafJRhL3nw5Qox9YRAvo9zgppWzp4KGzexn3WPueFVbE61xStoWoxSbXqfsuZfH7YNpX2PakNakhtHbQEqS5d9e",
  "key5": "2JpccppjDtxJHXXbgxACc1PKs5Pvfn4qRuQpBTJfECTZqakG3umAnJdKSdqFGXRqcEDLAbKimkn7mt9apTdY9fz1",
  "key6": "3FYUzQkSpxWd9kHMovb56eLd5K9xivMQKWrpkQFoanJnM2sv3tGeiJ5nAQuhc6f6zYShE1p3HfCUtRp991BZrUAX",
  "key7": "4BsxFCP2jXCkRNdKr7T2inXFuNLVt6htV2FQviuc3hmc9Rb8SFCQpQSLTsinRBLDjKyk93GbTn7yvdt42b8q5xHM",
  "key8": "ocbag9xA912MuhwUdyudeiPs6o1VcoBaAuTJrE2sKU2rP52dmKHzHNg2AzxGRFRP3osUxEec86f9GHqXHxosmuN",
  "key9": "3UH2S1hJJkzcXrtNDMmdgqKEkHf8zSMjpCmTRoErwLM3QFGhERrWbajdHdCytS64R2rHzZo4eAd4NxDdRBkEkzZi",
  "key10": "w8pStorz9htTEmbZCQXp4MwPsH5tJRZsSfMyFAYt3yYsgXkSzhnTZvM1QNuYdfBRxgWMa6ZJRr5ZXf1GAv2tPqk",
  "key11": "8CsCjgEcpskntu39sK3N96Et5rRaJ7ZVg7fkScKL6mGsXzP5kpC8EhHkAqJx3sossyT4KLRQ18J6sTuWHzkTijA",
  "key12": "2T5PJRQFjVpxsc1FuPsQVa4U1JAeJd6oFkcpcn1A389cgm5CDCpE9rirxRgnz3zhSqS3wRNraFYKLjmoEVQfBB2h",
  "key13": "57PSux51wukrcGPNdg4jnoAPsianM9Psyv2QdgEhgABMfUuDGiSqnJWfRCy1G6NiwegDuA5WWSUp5ct3wzpVfFtE",
  "key14": "4CmZY2EvwpuxJgAwEiNVcEwrB6ZjdWWxRMwNYGBmHwS3HNc4uNVqHpwRPWVhwnQaHynMwm2k2WPSsqrjqQHRtRdn",
  "key15": "45ufVCSyiekB4uFfaakwxPYRcpiSm972fmmMoKE4KArkQz9KzYxRyE49yxptKgfDAqaoKzeZvt1ztqTbxxqU1hKK",
  "key16": "Tw8myfhWYMQLqgJ3rzjCsR5Vbiux9WgRha3Qj8XcYoVoscB7aN1mmvr7MMpXqBnwQUsc4LnuczAt2NsBDVpJCip",
  "key17": "oe98ugAyUAxU9kdfL5wNyy4sSDHvee7g1vm6xGqZxMNFMmoGz3MNAj5XWx2N6bzxL4LMquWZ8bTLcF3JSSaW4Xf",
  "key18": "3FHeaJGT5XhmxoQUbBNmP2z6aG9Mw6311h2APXZwmqjwh1q6tZGTx6KhFcKoHJsbXtoS8QLC2wjD8NKhh19jAYkS",
  "key19": "3rAS5qukwcHJH1YsPwfkchT1sK95ai7mmwk3PSmhCivTSPYkqwXbAhLZrfCCnmh48ezT4qv93qyDGeXWkLYMM3ez",
  "key20": "5GjrJU411suSXSkqooCuoAVQXpWoKdDecQ3M6GUACVDnqSuak1tpqXSu1f8jMcZx6XJo89btUc2e5byGoXH9CZmT",
  "key21": "5TRHoLDQTVzSFGdwkjQap2ZoP6jLh9TtVx9HU8oEWNnj4EfZAfiogYu4KeeqXyNtLgzQuYEvghLqV9FAfa7WmQ21",
  "key22": "4nsiYoECFAHM7589Xj3uvtyXEzaUChwakb7rG55dKkAUooKBYHQyyNgYmNdTZi26hGpWW1Do1MAdfTkpYjGzhZn6",
  "key23": "2odU1U826TXho8YSC1ijcBYWCJ6wDzDqwpe5u9sSFZxyNKaqMJYuy7itGyJVpprC3F4XXQCFLqQAUR7HtZb353rf",
  "key24": "4fn1E8D67isA1x8gFG1kurzBW8gZ6aUU5qDsovKb1XtDcgGYN727kWPNF4jsnLadBZD2NzUTeZDc3bwAYiuyeHq4",
  "key25": "4dKxr13utvcAy6KZtvg7JWM7JdhCpy7ttdpaSExRUxcsD2cH7mLL4CGjpWgPTycYVb49ntXnZKoz1RBxevzrjFFm",
  "key26": "5S7L5rkbjuD45LdaAgSyayo7oLhViDLQLG5xGx9vSaD4Gu4jSTr43TfmaQERyKikBJeMeF6JZkPhX3RzrzXmhg3N",
  "key27": "5v4Hn62YMXNneiChE1QfqZFb6kxL2Acmv1Letq1rMMymLWdAVFbm6Lf1PttzHi9PnQ3yvtcxzy1qtBnumqGeioNR"
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
