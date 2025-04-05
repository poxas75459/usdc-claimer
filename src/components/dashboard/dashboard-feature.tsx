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
    "5zb8uzFqxGWsxajsn9J3jE1VG9vg2DCHXjRMTvJW97eB4LRmSi62qcFp31GYCo5adYxf47d5XnEh7VvpZNLxK2Py"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y4uz3xVe7mcrCc8bE48xFsbbAaVPJDM883acnpdR8zmiN4NGHJ97cq2m3eHJ9MUbYuwvX7yC5yRmZnEqp5y3xVb",
  "key1": "4mboVGT58LKD27cMp75JJ4y7uABDvxVLnKxWzG7t7cS7TxEqes9JYZLaRkQKfvXAEz5MwV55gmovjowpSLmGHW3B",
  "key2": "5AW8WDVWBmCg9FtBRqA84sZgpJgHcsNkz3UX7ty8o9P8bdwXwoYXFAenWnD5oxKqF6y9PWGAadorhPTcPgynUU2C",
  "key3": "SUUC5JBa2vwwrUDNKcpBoYbVHiiciwsNSpV9NQtvn7ePTyeuJTzpX68txSrzsHywRriWRZtVm8Kdpv4cDhmmuSE",
  "key4": "5BkS639tywm7HyKqgysKhxFBqqJcJeX1ACQv4fkK93oXJEXfC8xtSzY9qNmtgyMvztRKzs9Tk8wMcanqoVrgRJYr",
  "key5": "5VFnKp3vBTUTgnZCc1y9LWSwXXX78U3EDc9wS52cWYqyTrcmLSMjnV1dyqkseJ94iU8vm7gdBvrEEsiJAVxrGXYZ",
  "key6": "2g7VjsPeZN7kk59gh3dA1nQbh8zb8qxiFhQTdNkjg5fSkUrgELSwR67ZEUsvbqftRQDEmoYtNkGFJLfiHdfdfHh2",
  "key7": "7KAXXJiRH1hD9iskKRfN7stWQNwRpfFAhXeNak48RshKTNrfV6vEATPsdkUXk9r3ZdZ2hAfG3p2RfrkAcgL7hDk",
  "key8": "2WTdvZCvYYdHGD2xKuhuGzhdeAyMURe8SNpVNoierV1udyn6BpqkeMgGYYF8x683ueRPet6rS7KmsJCxNdSvbN42",
  "key9": "2N3Yw6Zm9o9koaNAUSRsbWGaNSQ4hwoPaiAFmNB7uDtuyyuxXj4ihpfPfaRiauhtMm3wpDrR592an1UV5L2F5Gxo",
  "key10": "d4U37Uhea9HfgMqkfwRX7P73qBxAv8Y3ddpv9sZfGSXbHEKaNiXDMqwZSUGLP4UVT7VGhGEKxKTqYc7RFAqkFnn",
  "key11": "4jShnZBTbq7ghvv2N7RrUG9YYzQL6E2AygtvDh92u9t7umt3ZPbrQ6qRdSxdWvS6UR1D48tqfvCzzzLmzRuYhdW4",
  "key12": "43EVGaAmTeFQ484NcStZf2ja4HauoYrXEQH3KPU2DVbwqVjmszCi3KbeMaUvzWowfvTBF4x5T6QPvbdjCUqk7Cdd",
  "key13": "5YMQQ85jjR61T2XNkXbU2BJ2jufEeW3AFTSm4KVTbtG3SgMsXk8NVFRpqS5EXisnVuLaWh65kBCPqoAzS8J2M1WM",
  "key14": "4Zm3CR3zZmLoY7Y6ZSvjt7B1Yb1dPUgB9btcv9iZsYsGHkxuHaPDRh4W937PJeU7RxYETqyibaaJkvuPKEcC669C",
  "key15": "5oKUkt5Qw8TtKUNZx3M9rHQ1aPZej6mX68mLW9Emu5aPDVRWgfgKa1ZnDqrqivyBmGucmbBfZP4vAAQgLDNffgnH",
  "key16": "4K1WYS2Dh9dDwg5f2cHBvvbfXCe4TKVZrhxr94kpnfCBV391Npkc8uwNiqyhoDyJ4PBoVjuBM7Zud86hxM5kFSvf",
  "key17": "5cMguwHPkcRgoVytgTpsetML7KbViW9aQG6s4ZkVKnPSzoHAGQgN4ud4W4JV8WqUfn7L27iuoXSpviAGZ2TFx8UQ",
  "key18": "474xgB9oA46pSS38x5hh3xM26LA7viKKtNqE9ZN8o5WCg2MELjfEprqrAYzsquAQMM4NcrkXHujQ5JihpC18vSLe",
  "key19": "33FyepF5Vx9vAumQPT3b7tTgWZ6GnaNxka7fCXYmChmqigEpHsxDWv5tymiNtahZ9VWuw4UiJfNTeCEyKbSenSGR",
  "key20": "3xc6MRmtWpsHJHeJsD6gRZ8DqX4SyPVPEhBdpH2GvJoHyPZUUiomPqzUamnp7DDk2Z6d4toZpSNTffboVgAy3sZq",
  "key21": "61Fi4poaiYiCzTCCTWy8UExpXQuqy5adHYZcknZPG7r9gA4Ef6pzZceKerKmPPcQZ2h2DNATpdZYSwc43ns4NkLf",
  "key22": "641McUzKnPV5QHg9eDUVwRcEDJtfkBrSRfNJ2XoJVXareWEbiPDS37XhGejtVcKKkCE1RdZGgY7Jd16tmEDbXUBD",
  "key23": "4NCJBa7FW3uef9RFVpcQ4vrBMuKgcRpCoSgRZ2zqk1jUpap6SqpB1nf2eTMe8wewa2gGJa1etHgcdwXyonD1FM2R",
  "key24": "5eiTBq5zjetmZMAByrJgzrUHzBMi1Qhmp2tDQeRs62cSTxS3iaMfNFSDPaTga3QqfcpzVKJH9zxZTDT8oEMVN7Yj",
  "key25": "4ywLzhF8txwrjjUAeajE4LcS9ZcLX9BddPtj6cPokJGdKLgeQXYtPkMgNByMVceFT8MwmNVVoVxMYUPWKRnGcAtt",
  "key26": "42zLfYdrkMdSNb3wiorwYdnueQDwZ5csE7Zb61ntsLuqMEDiT9KXEmpAMWKzvuLtmUy7bvyJtWKiLBD84aZbQD74",
  "key27": "29CXpiLJWhkdLefse2Wc9JnCSFVYCP9krqtqrJYMf3YdFbrBxMsrXdDYaDchBZRWxgL9iVNV4W1buhwntW178XJV",
  "key28": "XDTYKTcF2dVLdcPcsCw8jEZre1Vwa1ga2UUDSbkyuhGD4aiKYyAqpJWJqYs9wKGp6DHJc5MbR68BP5rWmHD5BC8",
  "key29": "4qhNQarz8MX9iG7c78qqTj6ahvgH35rzxiuQ6nLf3fVytxMnJq4fugGpQ4WTpV8rx5YYDwne8Qt3JLiMijvqXzx2",
  "key30": "Q8FUaWmzTAaytGMaU68trh3fxUSaUcNFvYJdUciNwN9WftFfEVhRZzhjMSkwpQgbEwphUTzCmZMUnjdqUnPtHuF",
  "key31": "2koHLvBVUoCzLoGpkEEXDxrK6moQnW8F2Mryo6aD6exgDoHZBMebuLdX8rsN215RbZ3inNaiR897bWgqU5HdPBx8",
  "key32": "38iH4LPw3AEmyE8PpCUCS6U2LhJHc31jLmu1Mvka24aaCBVx2Z6rqy4VJDZ6XGuHRjA22bjxYVP9pZGNSNvUes12",
  "key33": "51KYn5tAUPtWyjrWf2kdB6FcbUqYHBghqzabJBvLfwe3YbHyS9aGQwvMMBF2rsxoJezbghP1yVS7mLKtPQjBx8tF",
  "key34": "2uN2i5rDyT2TLRVoS71hshEw9ztvYUnKB6UQWUoDivcwBaYCcJppTCt27c8NFDLsbs8MTXMQuU87d5wDSSHHk1ma",
  "key35": "4CDkjEutta7kPby4YYn4bZYb3S1BD1nTr512NhFbwBcYxQqygnRrxzegro9oLB1SrDbvbHSN2gbh2gtxGcN1oykp",
  "key36": "3HWerKhZXtMBUjSoGg4vmghG4vAp554FyGc3jP4MhXQDpM5siUBNG4hZsN3DURWUTVEYAF45M5ygVurG98EGxdxs",
  "key37": "53iyS4oEhi9rxwSVkvG6wxtHugrTQZGS1MABScS6ZqTprf2Fdbp2BSDV3N6Njv2HiJzy9YoFXMk8V9pz2WGVRKTN",
  "key38": "2AGk6hSpGTPhprhKwpCCaEWmphPRKAPYHwcX85yDcKMnBTxFB6E8aqUj4ME9m2WBieQEb6mWDiFNJif3AaaWuMnS",
  "key39": "4ptfq4r5k8XW5BQc8vtN5K4NbD7hcUkwtBb33BXWy3fCb7N9hfwGmt95cHKdd5ZFi3wN3gRKZWAZmFnSrfS1YG9D",
  "key40": "2C28tCiKHmTjAJWJu3sJuNxmyQjgo4kE89jV5qtqQKBM9Akao92d9kX6Kimw16Uk98X8znUAtAWa4tUJJ3yF9QHN",
  "key41": "5hE996W3ccxPPQMa7QqtvbVo2VZiVrcdey1N3FP79ZXL465b8bdyaQBjFfU4yKq9whiwErRNAiuZS8ktNdfSb7Bd",
  "key42": "4NnFQdAqe2YWNLWf5MiQnkZ8XsYYK81rv4MYX5f2Lg4NDPVJWwbcasCqXiBH1ybYiaePcrajkg1b2QpS6MyKaGNz"
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
