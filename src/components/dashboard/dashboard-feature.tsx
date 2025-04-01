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
    "5UNGSgsiyHwWdV13UxwvUzNBjhbD3imj4NSa6GHY6ZkreCJmNJVxdBDzRUVEAZwFFuLFnXriF6d4YELvbuYW2kJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zzABzUrVN8phy1Pyq6j4uKgPHEJeTtxu62W6k4TJ53ucT39YVmLzEShv8sjZMWFbtb6AvrrZx34Ybss2BXfC5x9",
  "key1": "4T1YTmYyU1fo35qaHWCHYuLJ73NwP7QiN3T9pUGstMZC3bExjxGHnHv4rDdRdT43NFfnawUcg4jn4wZRF5vTfmzM",
  "key2": "5xEVpzPp3Sot2DCgXWNkZ3fwakQStZgbym7cQZUea6J35YqnS5T6kygH4f4MJehF3MxQuZYDeLvd7xBJ5yK8o3b5",
  "key3": "2QCZWLNjr5fUHUqimvFvVaTNXUfFe3DV6XjYN6ZiteSmeoVNqgotnXsEuyZtbKd5PHYm74XevWKCSdUh1XAG1MJE",
  "key4": "2zhK7mMySRH3n9HukFjjbLxGYjaZMJ9ckthA3BWw7KFsyfwqVe2A5S31yysaBgJWwfvunqZGnpBid5RcdzK7Gxhd",
  "key5": "4NUtTgF3RdyrQRFP6atinHazdeDv4AgeixFyVaQSdw6Xe6qhtAUicQVi2AnEwYzsTmCMydm1qJFTSDYVDxjuuGMX",
  "key6": "2fjwm22hCgk7v73DpordrnghKDyUCJzmdJXckunqmBDnx4tqRTd64FwNRv1kNR4nUkdNJpEoNbhbpQWeLU5SVFAY",
  "key7": "5fmi8vK3PoBs9jWAC99akuRP8U7X1wLxVSunFDmig9UgTNo1c454qHoGQwA52ZcsWt8eTXA3u6XMAcuntoZGwXNW",
  "key8": "tModQaBTprCoswPzhKuLvJwjpoMx5FbfkgyYpDdLbrJ3pwctTVbuQ2GDz8f2gYTzQVD4zM87ewTyWzixPt1HZyt",
  "key9": "4mua5tD3YU1h41nbQXwXy6z5WWtaPwARUvm3r3KFhtKFPUUwYMatAqdJUfRfqzmh1U5GbjCGmDXqYK39zb5wPtW1",
  "key10": "35a421BprTw5rDBQbqSEnVDC8fgaPJresqd9mKKrs4dyqiHZuUFCndo8BtHHVnKwB7hwX1mgTstsekxScQSB3cwe",
  "key11": "RgS8HLFCAnpduN6UqdwjNWgWZkAmjba4EqsZogqk1v7kZWJrD6FcpnCn1J7iwDHwMXHAbXYuCwS7g5QeyufFhVJ",
  "key12": "28RTpXtJKqqMoD4JTQzbqSUPokdcB3QY1iW2JfJy4HzecQrvNshAXwXTCudCDLhsTnPaZkuFE8bHAQdGUoDAHuFp",
  "key13": "4ufWQwMWNJwLL21vUdEzVf7Du2JHWsSeGSufNfsMVi9EBJyswxBGtjbzxqUcVG8Km5s6P3g38JsNkHEAbTJSG41B",
  "key14": "5u6bHju4VwGhyxF4srmVJnGQ5jdEh24M3yyR4CjKqjVieyYpTBvbUT5Rn47HLhBu4Wbne28gmFLpJ9iq6cWucStq",
  "key15": "4jnRaHgx84pitbX8ErZtPR4PTK5LFnw7YTN33zsAY3nH9d3YQfEnwo5iFCq1iE1knsEDZVnh9bWu77EWn6H8otxJ",
  "key16": "4KeG1xubQV5uPSgDWUYaRBKE7PWVdH3WMHWRFjcAihKWiGyBh2w4JPQrrZnkdHNsmtbxhsKrcj4MJw4UXwiha1EL",
  "key17": "4wd1b5XxAs68FtVjHGqVL88P4c1X9WjAvvECfydXCtGRSNAQcJH11DzRGxY8JVFqYMTLrYngv3cXSAtvhoPdGsKs",
  "key18": "2aF2uYKuDch1PkvQsd6fdKZ9QQPQ9hubvSYFuSieKQ6os19W1oL6SKpBv7uBSDJwN5P5Gzt4L14rZK7FqH6mH1Yj",
  "key19": "qrdBBuTsUyUHoxBnAUgtkbrfZnbJbv4ybDeXXR48f8GhwzwTjiimFYz8nwwRH5wQS6mxcqEfQkY4VRSoSvQfRMZ",
  "key20": "Bp84qwdnYgt3Prp3DeTge8nuEbuffcgMGM1j1kDkEbSPc4kdcDoVjSEoaYYrig6bhhFkYKqZzKG4PZpMijf1M7G",
  "key21": "5Qb76c6MFe27iVP9zP1vjEV3WPhvrCteJDa4hEL5xk8mvcfSQSuqud3KKxZpf1PgWeYzjxSkGt1bV67iLuaUmxP2",
  "key22": "5Y3N3Lah3cs1yCUuoqTMK5CzrdJQP7rKnEenrgSScYa5fxYkupX13MCEpEB4gjPiZtEMDRTxu79Z6hhhNqxX5TTX",
  "key23": "578tPEzroTp3vmXMe6cJ6xhiAF976RXFU36yNVkfpAuUY7VrYuyKfLHpwHyTCoTRxvxVzbByZ1szid1a9uB6oGLz",
  "key24": "4BTiMuMATcrd7X1WfJMDvxxkgAcUFgZksihSZPrD6nT2dHagVW53WE3vhMdNN9tiVjt7QdmJRwxvZvGSGGizbjYm",
  "key25": "2zZwZ2UpsPMRZVyZM17JuHMkNB7Jw4jUWSN4Yg727eUGRonDy2eJj8hjKHZ96mCwyPhBPnK7qyiXsJaPuM8axkoD",
  "key26": "XPLpYh5Hm78r3ukkKovVJEuNEAwEunzLJoNRsoMPoQrwrqLSAoHivqd3SQqFaPdidA4YjjYadrQA5iYJXVWL7T7",
  "key27": "2yD3m7iMWYLNW1KE6CaaXr61LxzyTjypaeJrEJB4PEBqsSM9v6fcheh9PBMg963G6xn8uSEiGZ9VF79ARtyBhbHX",
  "key28": "hX8pnuh77D96aYHwK6yrNvZNHS8G7q68vnFA2eND3AkFaK3JiTnJJcY2tkhKjb19rPxZFYzHAutg63pT4fE2BEn",
  "key29": "phv3Fc9DdJSmC16kZmErQ6bhtmapoCBDHREK815KRtisVkmmSyD8vf6TRXnG5BQCtbVwrgNcEBXyqyefbtgh8L9",
  "key30": "4765HjcJGHdE4E3VgX6MrDgWUzoUMXEJNd9Tb4xxH15w5zKwXBovAcfcLFRKqZv8hbt7ZMEbV63VWitdGrLURuiF",
  "key31": "5EyPGjZJZgnQwd3XGjJe38aik5CTUFXMYVqjnKaiPssoZbuvcrmuwYxFguqCQXazS7d4rdNrWa64gzTy5jCmAsiz",
  "key32": "3e6uniQe9HsUg8cuHyrwTaV5RCxrdLE68KiLLBNuw9skF6WYijmemgYGLJ5yGcZ9kiNwsoR2GyrbdsJSVDpXpksk",
  "key33": "6gq5CMQexyrPQKC81X2vCzUyhGzt3y7v5T3tAwQp1bcQLrWjdNUZt7CF4cXTPQzs7jPteAwDmNjh4NmC9TC3prQ",
  "key34": "tc762UCvVAtg7zKHY3r8iLDYaATG97GqYEZ4WZQ1LwTRKZJHqHJcAzTM7dD4h9EE5zgR2FTkB2nvwmwwoaNyuyQ",
  "key35": "5j4rbQorf18ex4448kf3gBUVn5wd2TiUcdGiJhKKtwWa1hAMr6K1EmVJzehpYCsm4Cn8qny7HAXtioMzUhSXJkcT",
  "key36": "5sSFMDJBthhbfB9KY7HEmgiVuKLRCjB9jDVZfEk7wzFeuJjyFdctzUJ53oXPLAhm63W1iREdpmrt8F3NARgEFjSK",
  "key37": "5isiFhPQMfmapcLoZWcGk3Q95ujTHXfwG1AKeASghdoRZZMzzoW8QQnwuSCkDG89d4s39PPX3mtwtKsombCdobzT",
  "key38": "t2N9pCdSoLBUEnZSMmk7n72aBeDHr7oyd4sZbCTuKiuZ3BVJgaQEH7gWZjS1joFrpEygJukh5YJjENMRpx49CXn",
  "key39": "5ijgvUZjYqgr5qqsPwUDGoBFMotGLMvLRXHjnH5gc3HpeuXM42nY7SptVXmMer6jNtZwmrmh63Ks7umwk3EBdc8G",
  "key40": "28xWhYngqzRkMUcBFpT9xpiGK3exGegd6iSDcztroEmd2ha8LLNWgYoyTwNbCgj62Ws4Nj1366bjvicyKV1Gcams",
  "key41": "5gTZeAR4juyhbhnmN4KNUU5z82cKHNnUQjohWFR96ptg7yfWBFkXtzp1FcV1AJWSywATCQS26AS8zx3sbdgTtQ5C",
  "key42": "eXADbWfdLugRtvJvscWD2ViLMqVfMLxvVjnJBDBepwKGSFuE5bZgsiB9nw1LN7zF2H8sErwwMnUGTAbGNXsqCKg",
  "key43": "4PBqp5Lp9Nnzk66LcidSeAKUybXxVYxcpVW6hAFo47Lb1Syuubuvo5VRVa7Wh9YXAdBk8HmfnW27DemZPVxs6gqk",
  "key44": "2iSnwGNPLFJK6ZhRbkFcyV6LoZkKnMqyLgeQSEt3gQnUgd5JokQBb8STarsEKTJFesmeo3uvzhgor67pHyxCHSbX",
  "key45": "5z8ojUryCYQCg442MCA2mmobfEsmQYVD44agVQi4kc6sqXLNPHo6DQZn1r12kuE55ror1z2b7YsEijkBjLAMs49w",
  "key46": "2CR5uu81uUrqQtbG3QXywK4MWbu1mCgGuFTovmUDKRkfLh9sGxq5qup53vANe6XnhcfKqQV17tU1Mym3zQ8zbFxX",
  "key47": "4bt7MhXhUt8qgN1SoC2W61DyPAMha18bu3NXScSGUtafhAraJehKza3qQUN3BBYHger4QUWF2ay2ntq7bSKwE5vU"
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
