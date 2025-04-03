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
    "Qby9yTzAjkg6gtmtxvAupvj42JrCm3K8WPc6QBwRU9ZFWAKkzuiE8AbQERJTpHUfwaeMTYiNLkmoMWcfJ46A3iv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "559wKJp67j1mB1MQVvieARxW7WmkBaXTeg1w3o1QQvtRXwQYm2myETtnoLSR4wEgCwSHtDERkA9sq9us2FeqbZSu",
  "key1": "53W9Mn33tnrv8cmPLg44FpuFmJbNaDYSdSyD58vgfyxy3eVSuxEaU6nRLMQFUCEFFL3diYoBsikACfCe6yXubav6",
  "key2": "e1uGvncSEVDkTRuCX8AdkekDiNwyB8WRVXj1aPrsKzp68DJPGqpms94WGLDN54cR6fGhY1VYMnBqAodwsAzRjtr",
  "key3": "NSgBDjBJLrcjEQdULRLjbFFjsaGRHJq4xZndCDD2Xn5M86A8gvodGwzd1m1mfb5pUEbuSfcDUJSgxJeVQELNp3V",
  "key4": "3ZMoNXngcuvfMTY93A93MfQwZ1s1utFrt6KwyJY4KpjcMcm7xLHVrkpvxZkUVc589usMBdMPRV2qA2tNoZmxNSYK",
  "key5": "4bFiqjEwDsJqKEk8pf517wFoDRieLkP8Wy8grdeSadRMrZSo1XwGB7dFtmvzwaCo3gv6xeGk1JijLpAssJZZN8ze",
  "key6": "52cAFaunyvKz5e3aVDaW1RWPLQAWmtQspJqC1VDpzvGw3v4u1KNBZRX6SRhcLNmNLRsyHQycTZ7XkAj82HZc7Bbm",
  "key7": "3kUPVdb3PqXx9bFTgBFpADnaeL6LCBgg8UoNdR8nYMZqKQgNsMh7FXW4Cx87rzFzV8rvKLbPDbjPR7VYkhG3AeYZ",
  "key8": "3kppSD5egMpJzPGqtGxvxuB9ZxDPyjVDqzXyszJGjUfxbCrqqz6kz7svNncRixbY7PT8HwksXq2A7ugqM5FyMLiC",
  "key9": "3fS78EG5VWs4T1vUefhNttVVZRXVEhuz4g2XuFSwDkp8k4Yfjy5wkewnR7QryNmrdvQfjCYBVdpuHt7PEwnx2T7b",
  "key10": "ZVvL5Hu8b2pGLinfPgASEtY76hWnMUtpCiFdHUePkQ7SbFKiqc9Nu5vAMXn3Z1j7jLYp3oR5CxpX4y3xWMu4x8z",
  "key11": "5ZusAtxsZR3f5GmiMsnf6xyZm7dbcFCn73zcDswHnbuZWgZdQFCrEei42k16rqm8YZG4sFJRCXPiz7wxj1V7Tk1Z",
  "key12": "5H6pfXjtAvhndzgd4772LvuXnwqPcM3bVf3SrsgiRPsDwPB7dTLZaE55qJkDV3Qc8c3A3weJaMuAmRUPKmBkQG7V",
  "key13": "2cJEfw4dzPK9H7xhxqeSCTE1b8QibFY62xERMwzRrww1kvazsYKxoYqPy5uFnGGZVyXrcApv9uygnMWRuLXYeFUh",
  "key14": "54kDW1AJHGFaoghgBxb3V9PQXuDA6dyrWqsmdeStz4i8SbhKqBDXaJ5rcLr8qattDHeBPa7recDAQiWFbrvkgAPw",
  "key15": "49b3N23wDtJR8czB9Cx18NM97QyCpvpVydpYQ2MRV5if1z6BNi7zpgk9G1kkMPe2KPDyJFBHqSWCPAGXLvPcFfmU",
  "key16": "4zCW5sNgnuxrhhrYgkvHTUQ3mGz2igFkbWrPCmvs7x9WkyLkmd93RYoPZtiqJztzSduffqk1qKMipJLDZsRfbqMT",
  "key17": "33SQMXRdQmeKKJE4jhtWXnYezH1JB7nmG4xwRkNUjDHBKS36FXuzE54qgYRQMVoxvGhohxMnCQpvLCz6NG7hU54K",
  "key18": "JJRuKJ3gk5fiAJr7GVyA3C1En2eXGd1rb9XF6e5nVRedm3wodPfmaQfLShC8Uw2MYje4KVMJAa6N2GNpoy4ZfaZ",
  "key19": "63wKHJhfQfhSZonPiBrZJAax6HGr8yjKRfpNqK4eDx8k4fsK4SRL4CFub3S2Qzn6VGTWW5iWytw4vt5FYbbesavJ",
  "key20": "4V3MzACNAnJu3B4byyGV7qj2kMF1HLnimwL12YXAhWJGR4gAf13ib4NuEMNj7kCeTTcw6Xg714RSt1UJHctHvjjr",
  "key21": "5PJBJuuoMueperzdaCM2a4Y8jY1K8cMpHjjkZBQ1z6JcBYMDG9tDJaTeBBLafrBJouWDEWnwduKQK77hVoMSgBjh",
  "key22": "5EMqczd6yPzgaNCyU4AXA4wqh7J5XpwDzSDkwF8KNz5YQRuy7AP9cEn9ACL33sazAezpECuXYkddQeT3DpZjv1vb",
  "key23": "5iuauE9QFVZ9Gpa3G2gxKh6EDumcty3Kt4GHYBHwCKYhzunrzLVeMbss5sLd8qjvMjv1y58aCHe26QjQ3cMAGHPQ",
  "key24": "5mJLt6ULMX2K6jhDDe2kDeg8yXHMreYTX7WgjFTLZRWQPEVYUwgJKxCvhLn1eZiNXwD2YRi5Q6UZYifmkAyz516t",
  "key25": "3PGh6rytFEwfn4e46rX9Do6Hq7vduKU2FLHzF2dRworqPicjiG3VtG2AKGD7Dc3Dpz8hLW5W74T4CT4fwn6GK3jz",
  "key26": "4nbixtVADVs8Awfrq5FvikLsAiG2RfbArcsfD3FaoPgRrbJmiXAMp2gvM4Z1VL6UCV8BfbCoiCEYZG6tjfZuHHcf",
  "key27": "5oNzxovh8s3dPkpGt6t4NqsfJopcukWtvavDrmoqYUHiUm9eKoqRufJuJozgDj21wZmfFs9445D4xpDjpAChNax6",
  "key28": "5xr6U8fM3TcjsMVzpNAkfDMQ1fjJwvDRheffFAXgWe2HUkXy4GnSoX6NnsxN9hwYjpfRSpkyqRZcGczFjvMrnWEr",
  "key29": "5z8zS7mE2yUEfLihSDS2i1vDChKWbSvvpZXTbPHaA58vA8faZW9AemMzJuFTBGFKJXAevhx74N4XfWpoYkepRdMd",
  "key30": "QaQBKhGzzBN2Ww76WBvN8foHFMAkocvP8fCv3Rk8EgpScSzWUuE9GJoM1icq2QzJFfFwCss7VEyoLh1hHwqht2p",
  "key31": "39d99bm5hthxqRHmvd8YN8DeuzSm5Utf2BLGnBR2ZsbSy3kfiCvZxgjM1oEd7UHrKRnj7dgg3KxTMtjoLRGgz8UC",
  "key32": "2aHzC87sPswbckPYWiLy77VxN7gWqT1tVHYS149CFbkQZHTpw9YPc9sZPdAJMpvemBTGWGutWzBXUeyNnhbMdCUQ",
  "key33": "U1wtyRiHTAfjRnCN3HZhG2HiNaiGHgeuqptTkzbF5uxwr5GH3utfHnnUmon4KdEsE1SSFhsTWpkHmXLUPqKrnRR",
  "key34": "4oB8zssbWF4Xp9p9tSTYfe5nnE5xFRExsSVz15cBgBpR5PHD461G46GXz3SbcdWdnjSUZoz3zk6SSBNBf8o248B5",
  "key35": "4W1kaomTJSTzQKNRQrrCrPrLCtEy1A6wF6NdMFbAwNEmRPytjqE5J3Y9gBEtfcmfbUvSt4sX13dAQwZAwmmP9GxW"
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
