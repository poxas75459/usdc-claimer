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
    "4zv1VD291a1Trib4TXMP561NdDpqQQHJsmQatMmgEUko4dascNjNyTrgynxeG8LZbCS9k7RBob7FcGp62XPQxKUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nGj4tTXHJc4ucgtrVB1iWvSM6TWxL5E1aiiHK6defs2NL6uPtrhdWahKqvc7N62ptK98xymG3sXbjYmznvR3cnh",
  "key1": "21tK5FFzeAhGWbRvYb4SsPUJmzXeVCg1qXTCZSv7bysYWa2HZ4KB3nCWwsit8N8Au8jQPMJ4LtTZLNH3aYH5eJNb",
  "key2": "4x1J9JZ2Niuz7nonbSrmWJUYdGXCWNq38jm6uVMzR288NG8WGSuCP2JEQRdfxViBgJEg7RipH6NdgwapqQ24N7w",
  "key3": "34zzLTkhGt49tpzzbmnKGkKPj4UVFzUHubf8Uw637eB2qQtSSq3k28PwCGCBT4YR8UDQo2xiqpfKY51Mk5vEWkFZ",
  "key4": "5b19Lu3V8uwGgD8btQUSXtq1bmBJYvMCcjmut4JCPukTYdbDGkyPLVAYiuXMqKWoyQHC1JehfeFjLMq7Dd3ab2AY",
  "key5": "493sRaDAbDvqAvoysrFzPS9hDdrV6iSJLLuxXbRiSwDzC4GWWU5DtzwjoMqeCnegRYu1rQSPCpnLz9FJkVxJUFB4",
  "key6": "2oVvcPsnpY6EeRxC5CfnT7ohqbQhjVAvNez864EiwskdMPMuNABACkDNdLtfbKfzVjga8bxDsmsv8iqfUBN22fc3",
  "key7": "2eDyEKRWHms3tFthkS9qCJWETc4i94nfPFGumLq1jGThDfDwySAhsPBX1U19TsQbUGbWNqM9bRhgMd5uTyJSmVSB",
  "key8": "22MVRb1ev8N3Kk75HnzHUhA5GAeHHz89Cv1FeNGYqcMPVceGvk1PH7hjyU2hCdTaELZYJohTdiRgnDckdLCAcxvi",
  "key9": "K9yuALxvzqTdGfgnirYbezt9B7Ne2rH5DRqSzbaEj6UuoEY1zKbhodLUvwVWStBUGPxqgizEMpinEydGqVMNZFs",
  "key10": "2JhoisZ8HguznX7LgGpSBSXQuSW5QnsQRTc3WeCk1CMjbBVkLh6HRDQDmiu9YJzYpgur7v2BhnKtBXkrNhNDJGUa",
  "key11": "4SEqUG8Vmf7j3HQY4dep2qzVfsHYoVgKGYsEA277E8JWHNoxoRhsxciwPWWf6Zx36ZnLUnaJPde9pHacj7aFuYUS",
  "key12": "3aUkhL3PfzVeHwHbaBhJ4Lvjf6XirYTdwoeVAX6VNfsL5hgoxAc61dDC6d7uAEryHWzNk1hZyxVeBepwEvXPD6v3",
  "key13": "5WuULptjidkXtfdnWFYkmmUi4PyWYxDCnvFNk1EKqYe5mcE6v5XRKz6ah7LzdJqyGsr38wXegcE5ShD5T88FuXvf",
  "key14": "2VqXBtgpB9r14Jxjf71VwgGMdyHKVdU3ScfAaG1fnR2RemCMEYDeiWsXuNbiwnrg5U2seX2ErMLGcTh7TakE2jgW",
  "key15": "5YwGL9oLwvE8QeCjULtHq1YXoNhVBJeE5J21sDUgFpwFAiJ7wRhqTN3v5dawAACFsrsNQrhuEh8Bx7zB7GLMEEGN",
  "key16": "4H3592A1CPPkz2dQ4mGTuap7qvHW1GQj1DNnyVKuHGzmepeDmsrDPMMhYpbmNHsjRVLu6RHkKrEcnovkHLLZpXJb",
  "key17": "4LsJEM9fsK2h5SKNupqy8N3jaGjVmQhVBMoHy34DgsMfWQpfL5DtnxEMdD6QHz4kjo4h7VRCsz71ggU9JAwK5CjZ",
  "key18": "4ts9R7MntPmhC4MDvsNvaMLpuJyZuF4o1PckL32zGFXxBz2pMGqYjKCbM2Mpnnai8VnNXjpuJzvsESSK9H3rBboX",
  "key19": "LGGPT44MqSNoadFNfr9xbj2bDAZtRSaEgWXArsvhAvxPZCk5T44g2ywbABuvpZTxNEG9cLAfwqUziMabQtEVSS5",
  "key20": "5QS49WXWVCDiVYeZyv4jLzWvP7CC1HykrfGLg8HLvuoBQtf7zZnUXW8SagKGbnyGrtTKwuax9WkywcDRerWZhdws",
  "key21": "488NEpj4f8dT4pBNamdDZcjkoN2bHNkLDjUjQYer5GjQyjS15QBgKEHr3smSUcb5sX1FKHUbDNjx7pnh6u7abRHm",
  "key22": "4c54c8KUCzAeHFYAPYTvzpez8F2kg7g9MTRQQFvjAeXfSQVBguvXoAQmPNb4NHewie9YMctqB6NCWcvUFzo2LxzD",
  "key23": "3dS5J7nbHaMeKoJkRafrUdYiw3aZ62YEYsH5ZWhWcnT2xDAjMWhssBoSo849v4qu7QFPUzD1Kt7bjs6Bb7w9j9gQ",
  "key24": "2XF9fpZmopC3Zh5RKQYoxVMKFfJwtbgNBKmRFZ3DKcWdC7LRwW39n6hvygxGa38ZdkQzYoRc677xRLGewfgc4W7c",
  "key25": "241FvB5L6H54fLkxZ3Q92PfJN8woDtW6iM6gBjfR9d6xu98rsrp3AYyPxseXE69M23JqrTWv6J6ucSDxM3VqN9wd",
  "key26": "TRgjk6ZuGFBbXrivvD8BfXN1zLStKwKWpAg2KcPfVXD3N8VaS4Xn9uMLpGW2AQ8wnKA7UAxkQatpzEFUvqXw7J7",
  "key27": "g5rw98Uwe2Ctx1bAmoDyUWNCF1ejkQNkWQbAzXH21cGggUcxU7v2anh3XrQqQBSnF3cAP5VxpKcJhASNM8RFGpD",
  "key28": "2mEhn9wnMaZaBxriQYqat1DJtNfh7dbzSt1RwRyCAeYSaHo5LDCnKHgtPcg2KuZHaNnmMPSGJqhMP416NjEwUaiG",
  "key29": "661YnAwnBCCbonZB7jbDrgsNYN7TJgqGfqdDcjvYoaK6u9UKywu9mb8Xrw6PHp89D2Ppiy4oetDww7rBXFsfJz9L",
  "key30": "2J84g5pv9d3Rk5twFRpb2xTMfW6BCUuwzd6euYpr4AcorRqAzTezqQLLafiEX2cpAmmCkugG9MB8LJzuic2q1GPm",
  "key31": "mbqTW4CKwECVrGbjhsXFNn3tbxF9kuLrQjpc1Kf4WYZfMF2knKTDSSKZRk2BuwMcrrr5XBiFzJQmnRjxFtRDanE",
  "key32": "5Dgw3Snw5RzTShXCobCA5ZnWfX2Tg4wCJ3nuZDAopXBUVDUbyzZUcBRTkBioZWKGee9DYhXqkTnyabofWxDRx3tN",
  "key33": "5YNamdqpxsy56TZxpgM5kE2RXmKDUy6Jfj3fLGvLg9bUWBxuXSo931eGPHGxVTi6TEKjiMr72zohfr16v7jHzyWE",
  "key34": "463bA2bigDSEyQPAdc5rvF6tgb2zq5vFSzyMyvoKsD7E4Um8LdKwCnnebignEsktLVXAaeQ1JL9Ak77pHztrWcu5",
  "key35": "as2vHMbmVdxRhhmsQLAffaZWVA6h7xzR6wF6MjmmY7jaT1VeavsL5zLdR9qPA1yJeDm5RaetX2UpLEsPaZNa3nV",
  "key36": "4ciV89jXwPk8ACYpxLiRcNUYfJxfYhiWs8ugpULoS8o2TpUJZNTtTHmNLioEUsasyGLKP9A25STPsYpbjQEhQ89R",
  "key37": "5BbdZG62oey2vQL8PcT5cVehXQP2MNbwL9yU62yfVtBUGuG2sfSyFqTQWpQr91otLHi1pfdSTAK3VJKq6JdsdD1J",
  "key38": "ubbsguYbQLLprWX8Yjm52JirTMYmoQPQuZY75mZZxNPdLU6b57PL2cjCvqnKZ57HRLSZAik8ngQejkZFQndxm7n",
  "key39": "5qSedjRUtsGR1yfLtND9Up7ERKmMUQLDeiMPc58qDSufmErQoHbpcZSvKytZxDVHNuXKRLhce5VuQ4DgS9wh2E9i",
  "key40": "3EMK1UEMzQZYEvkiy3AKEdmh3i3eT3df6LPwzprR1TRnmotKSaz3oChgw1QSbQATop8WTyfEWd8HQLyGSrZGSoE3",
  "key41": "2GqRFSKEwTc7LRwqcVLeaSQXBcxYQfMfpFsG25nQ6LbxVrNiHDqEJqKhhmkT255bvjSAg67MTetCy7N2jADdzpJ7",
  "key42": "gq9Kgi49LG29nenVKDcEHdBzS4KEJpW9qxoVKizFVCzK5QqMBMNYRmB8MdAsMjewaTJXszJPmjh6bpo1jwQHNrS",
  "key43": "462n3UEqAE9hLiCz16mU3HkvG59TMmMLi3D5xofA2au3iBewCKepQqhkRY9AD5H5BLixUPvRbWwAhaEg7CcVpq9W"
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
