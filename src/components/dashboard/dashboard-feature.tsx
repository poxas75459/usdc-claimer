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
    "5TXvhoUfMKywMchGP4Zi4v1VZTwgYba2dY1PX88JXYZdLr932YwjJ3ZAzWNGhQgmC8qHQ3gCmXg5DHUT3qg7krsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ibeSHdWTCf152XLfSnVzVGXzLXjk4F2vvWRsmcUdUMXSbYYkasAWEk34X2wCfgg52A8UQFiXSkDBm1AsQAFu5hf",
  "key1": "3UT1cbtg6LdxgsKB1nAGe14G4FPiyAjnEkCCkQSExWLeAhEEHdRMfDmsnd7ucPGTxEmhQbEjso2KawWwQYY3QUXW",
  "key2": "4cXjAxfMay5Bx2jKcthKaxZGeFb84HGx84AJYuRSSVsZj8C8HiK9mcP1vGyh3EwUWFwRn2ayfDRa2yuPRzXKqbXy",
  "key3": "4ATmvP9e7cEreaC8F1zonXckicR7yASTHJvFC5riuqWZNL2hraop7ZQSPfZsk3x6x83peZPLTYxsLojtx3D7QVoC",
  "key4": "2tWswiurf5AgghHJig4b2wCdKWv1E75gpfHPZWqcnehncWPmfT8A4Xn9foLk8mVg3HQLDdYVeSc9gjzj6NsCFhfZ",
  "key5": "4NNNvyPQUyuNjWj2XY2s8eJfMVUAjdz2Kd1PZWvgYTnh1N2WSGaB1QqeyMUUEPiRsaS8r2V3gry1dAeXQMzCGYJF",
  "key6": "4bw4A4En3xe2rQKD8QaZr3JPUUJ3wBL4JbjhcCUgYtWQADBqwfqUuqLgohRe9ujpPR8AtE15iXXqveZDxqv7y7QB",
  "key7": "3RmXHiShrjgRfqN4bNSNyp9RBmBNiCEiuMKgk5J2bQgVGY95xTJqqyXkvsoisY9TnswioK7W7Qcacnm4wa8bfhPS",
  "key8": "3hBCvsz7gccw3ugPhNiZvuHmhmHE59UcBefn3HytTbWC8AgaqaPDm26TxfeZydxGCHCjYMBBYQvorcxpY5U5JFi5",
  "key9": "5Hgd7AkduBgQWV2FUcCZYV7YA1iQqEw77p2iAdjKT3NuN4UchoDiXqEaMNreJimBoejtWYa4PTSp82UJxqQFgAG5",
  "key10": "2czW8ib7tNohhJXGQetGKZ6yxqavKUynxm6u2vSM4JvwPgofQN2AscaWhXCeDT8ZiUevyp7a2vp1Saofg3Nj8iwM",
  "key11": "5RPKCKsXXe6Z2FU54NpigP5itq8WXQ8fKcUuAgyiZQpbH5MqSaVABUQA47fBoHGSs8Bh4EfLJmroVv1U4CnWaTKF",
  "key12": "4AHE2ZJeYwR4jYjdLd32Cf5ahyA1CgSZz2nuut7g8g3sBXf631SrTo8Pfau8Qr7781arzR4SGqEX2HhkTPgZw4k7",
  "key13": "2X2jeEsWYxjLweJTj9nwUMA1HTfvvCUfVNDZnu1LF62nNfreUZadokZeoBkU4chZ4ARdM2Wwrip2zyMXPKe9DXDJ",
  "key14": "3cBhVyFnVC31M5aZmjimGUbSXHarYLYSdS4TV9pFQEgDF65xhjkGGexPp6dX7pS3ZN9YoHMjGaJT6EFjje5c8WGH",
  "key15": "3sEG1LWXnrGJUjctV8ipkZ4iKL1nuPXhcTgVzLfFevEKfWqd5xMNVoM7uPwHCPzcCwvQqx9iZCFyq2D8otzcRp4F",
  "key16": "4V4EiLhrSRPg15PZcJGor64gkvPFWCUm9e956kM8RCtGmJqQkwJgmKc3o8dNgn76UfZcqeACPZvViQL3zhLtc3J",
  "key17": "3VG8XrfEyonTyiSSifLBqXk3bZWtmVEFzfearsdqwXWbXknWjNpu4LMbVXVWHyBirMruXrLR3So8cEpjyqCzrPLg",
  "key18": "Gf7VzZbAsXEiAJqwTg4qYmpffoCzM8ufCgjx8bqPwQUAbpGFQFHoP62uG23EibYhX2z3kCTVYMFnL5n317ReNRg",
  "key19": "3U3ANgFThnQunCrbwZhpi464HAPdXeBDXwdSfku9fB3HXZNa3Hg5t8ninux77VktwrBEgEhSx1p2KrMaV33cfPGt",
  "key20": "5AkpWp8nZiRko3XRG9PhtYuE9Ksnv3pqmikYS1J1HzTBVwX8TU1UmMrdENSrrpbh2acGuonBBmaZLPH1urihrGZj",
  "key21": "3tdJ57ZyuMWoYAdH6C1JsAmj5apwj9HXWSX7VhP86ksoaPxBhHrxEZ5sbRPCFZnZjuBv1aXCVb9VAC6XRaj3h4XY",
  "key22": "5X8dfXPytXBZzJiLujpns2AaCFtezzthGXLegrM5hEHvA9nemn4jiC4PEMSN6Nqf3gota6WCZAGYVhVXdo45hyo3",
  "key23": "4Yi7T85RbqT1UqucCuEZxm5XRYkHCvENYx7wukYeqbspkqMAsdBA1HRiz2gfPuWgtucPNpJamxCuskWDq4Rvt3CQ",
  "key24": "2mBV36LyteCeJqubwLZxSwKSuRZTE7FW4N7q121bhft47hZnxdiNsfp6YnfnSwsQ9CXzzH7UXdTW2vZWByWfK3ND",
  "key25": "2ZPLpmPiiPXiPxhtcS9gb5sj4YiDdudrKsfckuzH4WddridkYRwEcW2GdJUWLESCTJLqQRPT5QRt9dw9PN3Cd4x5",
  "key26": "21fp3DvB6ttiZA3X3V3QM13VbL69rDZH2AviC1vnXhH1vUTaRpbnnbve1HPRVopn4F1UdBBLh5QqHaBNpEcKWkBk",
  "key27": "Kh2bJFEZn6YJQqoWmucwS3kNyv559csuUghkGPQgYo1gxxJc1DXGzLpoiEquVMaTAGtsCTWiJieBFQfqTCrC7bn"
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
