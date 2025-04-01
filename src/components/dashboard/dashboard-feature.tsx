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
    "67jwabSaZ8FBjna28aRVy9Jwn1yAGHy77aWSoFmwEJ8XR2j9LPXjr7tVpbAVWbiitPSQJRzqEya9gWnj1BvZA3Dt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42RvM53vYH6Fcx6gfHahSX73XtuHppPtsqTw6ZGZtUwPeYq9yksJVk58upvYtpEKXmqyXwnddhvZSmHy7n4PKt5n",
  "key1": "3YaB18TY3bkrQYPssmPKiQ2pTZeaoxwKkXS8nSBiW35UMR7bBPGUBaL79KNmbErcmL72QGSHapkFHkEcLkFD5VS9",
  "key2": "5RaihHCjM6DZTqm9yavwha5WbYcWK7uFH4T8E1t8GmZvuymkvzBChbH1RyRtcf33KaCb3B4HUQfY9bW2vHz5pnFb",
  "key3": "24xoEtuTtVxc17iLhd7MeFGm6XwjE2wMBmzJhxqouEAdGMLdBEJGTn44VrwbabxjwTATWTHTfrdGH4ZYvpZMMfro",
  "key4": "4x4FpWWesUjJxpPq3Kr7xczqNp49Cw8xgbBUTvPQ8hYRkCcFT34kikppNoAVKjPLduc7vWfp8iKSARFCJXcTP5rn",
  "key5": "5t8zmi2w9QiewoDk9hQ6qHQhvzKDCvPsqXxdpLamYvoxwkajpoVTMaNgzms31VQxV7sQBavx1PoZtPTLNWN5YEje",
  "key6": "4TNRu1K53ehQRDi1BcJPnfZN153DmCGELBJQPPwLEdWtA6es8HmAMRhsJuwFevfe4qqnLGJ9AXz6Wanz6R9JhtoU",
  "key7": "5TkrZ1sJFieifndbsqupiei7HyRPzKCa6EUmZVvN39brGY5mn2Y7yQZXwyZRcMKXbhXaw4K2yYVTppVVE8n9sfpd",
  "key8": "3kJNvRDdbMeg48X37fmsHbF4XExZerVqkhZauw5hmcLKE5fjj2gDgvXvQmKKeGC5Ka89iDH14Zm6cfmybwpfR9Ft",
  "key9": "c6CYu5eGybuvMamJRuK3gTEkhwNyyTKCAGo1qYBdjaDeYPEzkv1fLkqT8FAV1vWR3ZYScg5UcY93JztcoBUAmP6",
  "key10": "3GWfTjutf5KgWtpyWs6PfqFJXnzT77zLrUZorGzXcDUJoH4mCwBQVbPA3FHCT2t3ypBAF9zBfBeLHQTAbKomY4RV",
  "key11": "4SeieDNXX5bxWRbnM4PyHSUXTZT2FpVgnTdAv9CVMUZvy5koysJoA4Xnih2CaTDQFnjaV2vxzucToF9jeQahyKXW",
  "key12": "5PxQWV9UxEmcCauaRR7P77ocFm1xhBr6y7TD2yoGowqGxWE7yymZaJi2TT3yrySPxQwS91z3hFxNZTQQx4NrJAeZ",
  "key13": "413pFXCaRQCqPbes8pinqdFXnU2po59PTVuUF3Fxdi72LxQSQYEXFNGgMYWTfY7xyC7thSq5dpc2rxQ7yMkst2gv",
  "key14": "3CHmzS7gRYzniDCzdPGncE5WhyE6cyzxz216wY7zBDLTkJgx8AoWnZYQtr1mABYPPJxBFqJymqEoHicsRoNg68v1",
  "key15": "53KUEx8hf5dmEqEVfsSXTGJVXGswsFMj2WeugM2kXT5eNEHoHU8AVvnsFJjMExiVh2G4BtaCmSHbR4zz472GZ37D",
  "key16": "55JNdwALGixYYxy8GygKXWpKnZxJHQou9ZivSKgsyQ9isYXhVbv8d5nCUdsncVjaJKbxW2weyn2uDx575RmzhhYz",
  "key17": "42BXitGYFD6jgsrobQMmqAv4TWx33e2XTBDX7ybN3RKi86Lysnya1sFyWsuvwmJ41KTAzELZu21UaQLawNk99vxD",
  "key18": "c7YG1A45EHAsjcxSmunCNt5fdGfs9o2fiPD45q1GWwt5MtGhsDGRMi1yWaHRiQPZoqeTGyJizNCsGjfVbKY7U2L",
  "key19": "2RfWmHYEF58CBA8JjpG38rSVRRoK4W8wb5tq6PPDGoT61Zfsm2om52b2CneASpXMDydTuPNnxJxhd1DYHrzvevs2",
  "key20": "2L3q6YnshGdGjT4rttssBtaJ8a5oVapg5GxJJkEVosK11SyjA1g2fzd7qPGgoq1TNZgHGPMJYWQMDkXangewsgKp",
  "key21": "4RBK7ctij3YQEAJL1ZJBRdqykraJ5FmpH1DPKKH3ZxeHLUqh8v92HM3mC9WaQrR5aturN3eVAohp8YpbyybEUdgD",
  "key22": "B48dva1aUuiziuVfipumaF2GB8aquN2yQ6mKcwXeAVimUxssDvQTBpCqBFo7vz4hB7RcAnA4CFjsEnQA9tXVKzy",
  "key23": "4JyPHNJTZK3hKEmb85pAGBG13aJSnk2bmLfQqsu93rCrr4idCbo8vcgw42RaDqsLUFVZeAVNtJaLNve5u5BTUt4z",
  "key24": "4yXomfgeCQFhHgDBnWcrpfKLHTFUVATBPMuANebVEL7qTc2fT9c1CLZZaPjSrnkA3V5YfTMvbE2gTRV4EfoDRA53",
  "key25": "BMVvYd3gzbyk8b8GDYg9hgzvK568uDAZRaVgzRGdvDGdZN9AHmdbLiweAycHLhqUqsECgxW7Pw8vcxF8PCPbhYN",
  "key26": "5Le9LL6tE1c8n6H8hPmdxnyXyYZGnCS1yyZmZ3SJR1RpvLEPy7zb7HHNhEzPnHqw6ntq9YtLpg6WKugn3pL7smt1",
  "key27": "5wPzEwM1kCycspJ8dEVQB6EYUEijvEcRVuDXJWdeDS7e91eYbDSBD1a1g5V1nXBErGN5pS8a2qCzPRKFrX7Mhs8S",
  "key28": "5NMiPgwd2ZymMTMpqTRhzEVj6MXoCTkJCzv2qSwpmiDjFPTAcwGZae3cw2oikg7ABKuqzZZhAUg1y6fnSRz4qZ9d",
  "key29": "3nZQTbxCS3Xf2QBarYxyH6Vr52FWm3qwfdHnSM6DAX4i7bnpjD4hTPomFnMm3tHUC46toHj5zbFo2f4oA7oFHVYP",
  "key30": "Gm4LJqk2aJDgZbPsKECF6qnKxEW7UkRi24Vtj3QMvdNDYHze7aG6MwAixQVPMCE94HhA5ecnzFfByuadMAhJF9n",
  "key31": "39M9fBvEAREdQtSjRUT5LX6hK7CMr4iwoZEpsmTeeG966wJkFThASkriUhL5LX38iJuJaC1QRJcKZqgkGE8ycKc1",
  "key32": "2swqB6H7PotLjsjHf2kpHe1LeW6jhVSNnpUDJruoFxXP6NocwgXV7EoNV7vGXbgNsi2kzPcULSf17dsx3RW7SfBZ"
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
