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
    "K2wZh3sx9dJFPQwyvGA9JQv29gMqNYKgeuczerRpm4Jwf5DZSaeA9iVibKN1fWF6o8hMRXdggYKXS7jnE46kPtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YoFMKiUAjSk7ZH1zpv84Fqr3dcgUfVywdqzg1JZGYWkkD76h2LmXADafTaiy6wMkgffCaBs33hfj3Tir7Hw5REq",
  "key1": "64BDSQn4trty2vNLH6jtF1aGRJsQgaPe3FceXjDaXkCwe2cosSw2ECtrK5cAdZjA1jp5zRyGZUeuHb1D7i7Hkh2a",
  "key2": "fGU22rvbs8dSAqfdyR5pQLw6evJp6Aw7Uvbiq8hYDSZW2DRQnq6j9jZu8Yu3hK1fR7uBwqA5gWS6AD58T8oEnpx",
  "key3": "346xosgfs4nNPXKWMLsTM53ZRwf9iNeeoaNeWcjafRU1KhRz2CKgchxSrJxM3ixjPPJcC93aQGCSTW7JPMgRsiB4",
  "key4": "3jBK48ysqUzz7du1bKGaq5iGyyTfstWcMpRy55ryueMZt22JahhLBfZbvxcpFxngpFbY9EfuwiP161vKt48Qbrth",
  "key5": "3o8f837oMiDctmUzvr7GG5ErW9BWpJ7c8xKSL9xWZ24PBai8QEKNeJf9a6YXqGmSrAUkyPkQgCFtSqKYhHWSSM9s",
  "key6": "WfXv2qcfxr92eaeiD4Rak3SzAYMycGQ8oAo1X9vZTxvWNxPMbKi9s4f5VREUC94KnpNbyz6qjPtzw29nWF9wEXq",
  "key7": "5YVihVnQjT9fovnhFcTWqJk5egDNVzBecp2WYvM9pBZhHMCeAGBsCGp4K8TvDZweeG3cchBAyFQUUkrSwwBWEnhy",
  "key8": "217MpqS23SYEdwpPKJmogpcoP2oGANE7jBqsuV7ont2AZmVUbtsjchY3Hi6YyLk1foaRSkHzHSJZsCBLJRqrCUfF",
  "key9": "8jr39YwVGkXgBeVZ3rH8oEmMHHjzwu4CC6w8WeoWnDzLGvmqVEf34i9VXM5nTTSLxQeTjYmXXRzsLgzkzc9eLr6",
  "key10": "5q154CZKAVFm2sLq1G4Qgo3uU6mV8P7gDJ6BTKpxRf9jVs8gSpmkcvWdkY1J5MaWiJu8XYMRw8GhCAeDEDfgMAG6",
  "key11": "2WxmTdY9LfeDTQfMMQ894eBeHJy14bwBF3dNKY2X7bcR96HuctXUchCbPCEpK4XeEHR49zyw6tWw926S7jdhsTDn",
  "key12": "5h4wcU32sbqP4fehQyHwXmxDRGJ8a9M63yuNv4ReuqvsmU54372qkG7LR2qsRSofdcPn3pg5QShkqnRiagNfNQtP",
  "key13": "4q8LxuVp8ZZjfpcsafQWxqiYeRMy7VTVQaNTB8o7YrSeKJMum5WsxWPtVZSXtMmbCiuUp5fPQdQPKkUkpqk9Lday",
  "key14": "4F6ecgG7pJki4koqYoFCDYgL6BggfopwpsU2aSDxsGw1K7DKg5Z2BrXpQxkNhwnLr3fqcVDnZ8P33Wqef14nrAnG",
  "key15": "3QLdYU9V7GjJFzxowia1pxapkigLe7Ljm22CG8fjAkrH18TKiaJrn2mNQPgwFqydBW4rpRKQ9WU4wLBJ7QeoCUnv",
  "key16": "2TR8GJAtVQQ7q3eYXGwhXawzZFAMqEiiS2LnEo6myVFMDqfSsNuaRiuC2R2n8ovT7VUmsXf8fPgZXL5zsMHSLuMu",
  "key17": "2RBNyXiWBWsLgmkt8sHMkkB3bkMJb2GrxWUFEBrV41E4UpkkJnVqd9G8vKpGLPSGnAtuuH7gYWB5kzm9Ew264ohH",
  "key18": "128U8PT1RtJSS15rnYW8AaGmmNYUrGWcQ4nWsRsZ8hXCmU5HHQNQFXpnzciPzwanW87WowMDTFvo5jFfdtqjB8TR",
  "key19": "62ypkAGdBZrv1z6VVmnHEL8tPyDpMZok4xFNCEwwSiuxtEm5DUJxCjui1U7EAhA14MJNA8u9Jxn3g8BjZ9VruGWA",
  "key20": "4cwByYYywU5wWyMBtUMb4pe1Yez9DgNX6mzXsAgUjyhwY88wvyQ9aMskL2oRhRDpm9uUQaMz6QjDwb3Y8CgbkdQo",
  "key21": "3HvUKH8ytGmupPDpCLWR95Q9U5ktNVRJQji1jcdw3EqUYBFoKrAnAz8TmfMpLqNLcrzcfQxZ7o6qwK7DeARkCubE",
  "key22": "3Z4vj8Gx9haNvCLbUseNLNBGjQYSTS2UowB7uAEPbnNCPmkejo3LCMHufGvLkQf5x5BFrTuPo4cst7KMjkfxvoPT",
  "key23": "2VdqJT9bkrMgpSQwU7GQBiVPiEBeoB1Ryrydxh5aCj8CgYzJNtVFjFUfPQPiZLH9c9AnGsdEmCr1HqW3pnaoTHJS",
  "key24": "4iXGhCpgzqv2bMjszy4oyD9TVg5afPFVStBoZnmA6qqoPtHKgJnp14arQ6F7xXeiDiSQM9jcBMwUqaexcAQzH7zP",
  "key25": "3J2XViP4Am2uaC1FNwyeziLmc8dsYEZDAryrdenFRv7mtD8kkFWnjv6MiHetJz5NqQcBmx9dLxXxsiaC4YMShmwJ",
  "key26": "3bDN7ueBSdPE9spKqyTqjhZne3NEhZGaC4PibRtGFaLbTnmZQyTovPTgdViNhzE7cr14sJJS88yti7qDi39cUkcf",
  "key27": "2xnd97qMfEwKy1cRdvTrsmMe953QRkFsuYimLyn7iVMjCQNsRuoB6xNjJjS53FJRFCaeK2PxFX5S5CKgiMuywPdm",
  "key28": "5Xn5papeXtwQja9k3NWGErjHCEUaBLDr62ry8BtQgm4Hs7WVd5BLG9KFyvD1eD8Bg5FHRanRcRL6VLVn4sH6tYoY",
  "key29": "4qtHhoURBsTGV14au3bxNyHWXj6zK1wxWP232Sc3EC2EvVB286uPjZpVJMcHaHrebAfFCx8BJP75EmZU78V2VV6q",
  "key30": "2ktEwR7Wbpc8wWWAZBpENnuZSpbK3hHyNwsadHa2mJxFhzP3rza85H7o524kiirob1aPNBmtMSpeFccegRv7t4gi",
  "key31": "3CcdYDayAUGhEvrueL7SaTgEiuMx2GbVdyESJrxCx6bCbMcKBcqFaDXnouZtfognTuWEqUSxpZyfd8epQrHDgr9a",
  "key32": "44R1DQGGRj7zMoJyGXYaZmsuBnHZRRi49MrLuhoZxzGDr2en3YPEfT3zp4YDbC7icZd8mb8d1qU7dYqdSFuZcyWR",
  "key33": "mzkXfmjx2JyYayD1HksK583m4bqEgxC2rJxUkUF3mV7Q7rL1twbhehK9r22Aiq7MkkrQwtk7LYcq3kiUYr7fvCU",
  "key34": "2uBvtHmtUZDo3DrXrMFKy9H7MuLsJzt9EPinkzR6B3NdDnXp8aGBKxnvbHpY5ozT17MfWQhuhaRyou4cuf9P85Nw",
  "key35": "65gEo6phiPAcSfryeJLMCodWcy65z2JogDJyEJhm9WzJi2YpyozJsr1op15b54iV1ZAQNuf8bi3tVFwWvEbQqhn9",
  "key36": "4UvBuzqccDLNm7qv3y2oT15S82AQkAzaJHiHp3YSod6kM1tiHLqEAAwNvxertx8XAPBCiFXarVoH6oqYw3CMGyCt",
  "key37": "5NJyZGBkp7upznF2u3nZtst6yeZ4C7wtFRLZe7HjFHj7CkYnxaoRypwCZBDkvc5ZxvqtigkScHsn4tTE6izhCbh6",
  "key38": "4cXZuKsLL2177fwZhmejN3G6YveyCCVAFVMR6kVb9mY7Cq3PPpaLTdRffu4w3iRFqKywQ2vweMyRmUSHfox5saKW",
  "key39": "24krQYfeeiYYvXLSsVgGb6q63VvxMkUYEzfn3ZpazaiB6G53LKM3WhUctQ6pF1vr2WZuY1biu1iLvvpR21bU6Nhi",
  "key40": "BozwjR8NMidK8eE1WNvX5Ud52qsXjSwN2hdSNCpnEmo9EWnjwNbQUcWX96tU7CamWgLRavj7iRRw17cSXv4SMuz"
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
