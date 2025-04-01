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
    "56x3gTSLdbCFprhkcu31JaBib5NEgKaMfeoAyNiEXSTjX3QAx7NNVUidkfw18MifAkNXYZRKcmff2aSYrfeNJ2Bq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tqbvFSpfkETmwPZLXBdb1SHNTntUBPVHX1Ybr9Fi9BvFNsVZst4w9KtrXGMgQc35wx8C4o7Cfb6cq3WhV9LaeaS",
  "key1": "31eFkonpPX81cbqYCKeo1THBSe4LoNcukG5NupXFoN5ZnB5kau9anKCoeTf1nYpqx1bZoMxTA8vjKCnx4F449uEo",
  "key2": "3GTJ8d9sccLNsTzfzBCYmDX3kTLCT1e8Ui6q35CVX6Y9C3DHbrtdGRCTtJ8xJV7vnLpXvk4nDtCvEvj4qsUDNK5A",
  "key3": "4qC7FYf6dmaUMGTQKVwfkeycZduv3fwQthR3xieMAwrDwgLNgATcmycqhBhznv3z5WLP681e1R5tBcqEMwY9itX9",
  "key4": "3PSs5sqZW1Nf3AMz5gDWNi9pbLJmpt1qJ2drzWq8akJ1fsBbisgDxpu9krhU8AsSRpF6v99ZMBgUWa9PWSq9VQ9T",
  "key5": "5sfXmRR99pTUPiJh95T93YduEj3UuxBwogKNjTmK9q3kZVZ8P7EntSvugvN1uKNJ9JsFN7wM4v9pahejPRqokPSA",
  "key6": "4wjmU3XzFRrGbn4tF6g8zQa3v46Xea6diNgvcLwjDg6zy7mGL1PhayrnSd2g8VqRnRJN8C3J5tKpdpokLyndwhi9",
  "key7": "3xRYtWXzJbqXUL6tzBwPUWxbF7D8P6oSZnkN58vXvS3d2VCXVYihY8yTjwx2SNRDyokNpcisw2q6cZEy76wi7uxJ",
  "key8": "55Lf9New8wJ3A1AjVvMdNtjaqfCFbyYdPUGSu5j56H7ZLDCovmpK7qkt84LuHcxkqCoRxUmHcpACmmhQRrofe59v",
  "key9": "57ceriub1hEEKZ571QhS9sPeY9GzWQZT12WM4jFwEdFFfr1sFw5Vq46bfCrKUoyZ12CPKbtdF5hGMHx1MQrwfCRk",
  "key10": "52o7Un4R5eFYipzGEJfWRPBf7cvh7SeQ67hWSWqBwPVShrXe95LTbMn82cLDoVVbwWVySFwdHjyBfBWxQrGt3iqh",
  "key11": "cQ6fBcVpTBq4aPXJC5zH2TDtE1vM54bAtx6YmF8xajpuF8FM6c6d9MYrRzE1JbddJqPVjNkP7DRoMfaMgMhzgJM",
  "key12": "2T643u1c4GPWk93CjQkgwJcSksrMk3kanTn6momer4kootGKVCNui2M1pBqKJCmitgN5JUx99ZsBegxcvSUMeVUj",
  "key13": "22uBUeATbc2B2yjzXBGKGvyLXVmPizusrxPdtNbKFz77LETiQQWfTj5fDpmvYgSLk41hpzm2jqsNXtieGZsjJop6",
  "key14": "PuTc1AvvVYbmv6Hb8qd7C5KVPd2ZbzJsnv8mqCuxdisaFkfTUkWgRxAZB7aDm2hratK5j2xTA48NSC5LcTGpZjs",
  "key15": "4Tn2pgYNqnC1fHZ4vpm6NDuChiDXF6WoTsWzwzEfviwoCfxDN6EN7qP5cTxrqbwP1bAQ4P5ZJSZA77dEzDyfq1Y6",
  "key16": "3BbUwFrpu7W1xKEBeqhAir5JDPHaL5Z1KYP9ckk2Ud7LsabaoPARUGEz9XPhqFVcpBpb1pnWwyxN8Sod8krbCAa1",
  "key17": "uh8mcWUnoQEHsPTkP4VsNNaXhFqxALW5W5EdaJxGSXzqaftL3bm2MybWZt1JH7zLxLtcDrCmKaoBVv7V9DJb8aM",
  "key18": "2FzFTiS5fFwAAkmYRCqoH2VSsVozByhyz67A5k1dU8U69VWAPMQTWDhGbjjRv51GCRxc3pSou4hgG6upKsixbWEG",
  "key19": "LjTKEss8mrY4AdTnrqC9rahVbr7QoJupVQ6BDjXVT58oaJBCyBpk1GiWSFHnwQ24Yrm1nL61HezfLLMZe5U6Hd5",
  "key20": "4uZ2krBjFEdfqsq4RbWF11Wb4zcmzmQ8GN3ubvhwFJaMokN4gKsXhQZm791qeR2zZBm2pXATiDivan4yrPV33WY5",
  "key21": "5WaS7eKgF5Jo54yLB6ufig3EhxLpbpuowsVNBG7Fpg3gVQ8goFaJjK6TnzZyNLJYR6wa1ChSkrvFLNqbZo58rgGA",
  "key22": "2FAQA6qZNkWsbrCotYjpJziQwiNd4tSN8NRV716egNHWdaZfQeAdmfqDWJc34YiskkNwUYcS1pFUyeSe4eLusGJ4",
  "key23": "2vnXpd6CgEqfBwHptuzPsLczhNoxQNmUcEngXAbQ7hz2fyTZaCNvmLoeCf5Y4zMifcRSGfbVP7GYNb1kQHkA7aiz",
  "key24": "23ww8cdEZbxdcHQq4kF8cho3UdEWos8dEXPADn6mhhhtrDkwpaGdBUbgSJ872Vx9EewmMs8vZ9EG72XqAbu2J1st",
  "key25": "52Njy2bPky8qLakVgWTDg1aGnL6My25E49rjFxmooLJAeYpM7R3EuXUfAK1Af1657cSfxXWnppvoFGXU7sYessb5",
  "key26": "pFRqieCtPwQ6Keeb6vTsfcyen6k5F1GxtfeQZdiU4EXYhSesPXD655i86vqx6WAF87pncYEqN9BKkh96UmSVeMp",
  "key27": "2tXAyH9QYnaqhWNLDhz2odPxDG3UuuxovaYhxSAJFVW2SSYPfKL9nY8XpLDt6MTCRD9cZ7T9r2wKEuhkSxgF71hb",
  "key28": "2uYGRCAsw1Qu21grmrnALipGgTt6nTjhphhPHEMHWiXJZJeg1FWH6YNwSvDN2d31Myj6rWu5oH9wQasiqrBhf2zh",
  "key29": "2LzEutaRAYxTEfKuuAyd7QVdJFwjtQVHsCBhGBZRBQFdaCZgJAJNzAYGQe2ntM5FyRZmJHd33rmT6Zq2hL5HL85i",
  "key30": "2Sxby1dyiNPDZfytEsr426os4eWKwpnw5rPc5Ka9GXmtashRWDBdhuKgYWeMK3sL2EPSWefXDw6XiTpuj8vjbXq5",
  "key31": "a6RsQLFM2Qa4D16t8JiBTaDCxYhrhRgYDjqfPf7xM2whpfUWyjn6XPdfkFVwxjRrwLWfqDtqdEk9vioTk7WqFAA",
  "key32": "2PQbZM9nGbSwq3TPHmBUdCTaE7w3Fdie2EAmv6wNDpAWjqJXAvxZ92gPWUNtS5guV4511mCNVAgQpntH7gDeeRXk",
  "key33": "3ny69adLWuaC6BHweeMy4S9qXUnN3FGuzdGS5zwGvDxkvkkPgQ6wLVVonC3gTJGyqLD5RwkcFigJFaAWMi817duL",
  "key34": "5SaE2nmMeJzffoPXmrQzqu82bqBNyiW3qU1ujw7MqffptavBpXDbZ4hZ1bw9toG4nrbXf1xRRpHe5TSavM8bo1Do"
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
