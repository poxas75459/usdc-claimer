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
    "Q53AY5RusVcQHt6J8o2hPqFK4M5iHt6DaH9GEevKaRb7NHitY8MjY6DRNsuHviNtNGqcSPNZ8bt7YngeydzAytm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QCqAMpvwERfyQZJM9npRG7yCJJWqEUXN3S1KqYBcVRhaVQswV6YD5pQVWJRimzwtcCZDEegGrmVPxJx1sakyUJT",
  "key1": "5aUL5qHZA86hE5nVrdFF5XmYvNznaeYykojJKfh4Xid9892TPiSxbxDnpw64Ywyf5K6jDA4pCKa7drNkk3UEDh3Q",
  "key2": "CDNdo27DrTFkQzKbNeUYBo1sSjbCi7hWpVWkdcz8TYgFeA1xA6SuRLaWiuH1rV9xAnKoysWFrGa2NPRYaycJess",
  "key3": "5kHPxiRsytMLRVescMkNLda24zkLpjYSy6RdJ5fX39CQreiPuq8ST6V9d2X7PZhudVNxycBGPggxHikw9exanwL7",
  "key4": "4k5DyvbZqpCzkcdtnFyqzXK4AJ9SCE2YSc9JVDhnZ11TsD7hwULDZYwqu5CzQo9EHMaHwRdxJbUXCbRi42iF8Ens",
  "key5": "4Yw7KyShCC4oFn1paraMkdjJEibiQTJSnJJRcTwHpMENirUi2QM8VxU6uWBxHgTsPCKTNdvXjufxVbMmtCZKVFQN",
  "key6": "5o8f3VQtT7uDoaiQhavALTepUtv8tgsnVWT4yG3XTkmCJ9djtnZz5zPvZNaSLtjfNkSVhqVhegj8AkjHPdX97kNN",
  "key7": "56ZwFDJk4SJXeWBhJnuwYPiECT7a1u2dwSQPS2HQJJaASsCzrZJYXrzNfbuV6u3MMeZrMSKK49QqHYU5hJPuJrr6",
  "key8": "5ZMFLGsAiPABFZexocprZnDSaYqAJa17muw78Xi5NNZZYp8A1DqL8yW5hNiKEyrtCBriwmx9qRDDSeg4fPyBNYXh",
  "key9": "TSttQbNW5p9AdhKsY2Ww13oU1DHQVHM7NTrPRKnwsaaqLCoaZ1wKKwgh8CsfSSYCLbgPCKU1Vr6DFGuaNEy3uq7",
  "key10": "42AoMKnogvLe9SwxEwUbaA47W6qFHUnvtZuPmyCnWz2FZ7eE9aMfFcKjDKHJeT6vHxjmmkmvuxiypSQ5Y9Pru2zV",
  "key11": "9ibynM1g5XtHicZs1RiZLTWJdQqXCvwGGT9zoJ3qKSj11Vtgw3HTY2WfsWVoxf3YqF69AfNDqYzFYudgfUVNR2t",
  "key12": "RKmgpFJiNzSfMuHWyZHbSZoV1Ux8RQ92xzT18ZnvEqJhWcs4ZJ73uzMNEiA97VKK7zimKQgBCUre3rocgVeXRqW",
  "key13": "MF8BSGeXqHhz2osXUDwN97mmbUkTtswYNYvaGuxBVZgK1B3GaReGVNJDMVo94HrKG3VghQHvfihGmzamc72L92t",
  "key14": "5Z5Dc9xvdQ6o15ST5v87Zm1EGdngG7KTudzNc2aJjwkSZm3opR7EpYRgdSupkVXJw9xVRjDTU76d46cCUC8FmGPc",
  "key15": "tGvubi5YTetxEqUgRfa8bNv9dVu5WhjeTcvwEqtCaZTNEtM2yRw5EsjjjtmJroQFuNCw3RChw4uq7eU1Sv4DdRj",
  "key16": "5Zef94HFet5RbhfWu6vKKEUoPV7Jvdy6u6bJcb4baKLByRG1JJ4hB44hEuRNyQSZ5wWc4aCwFGXZ5kUBeVRhsR48",
  "key17": "9dDLvr4vpUsJZwDYXG1xaNdCEbbKAGdGyUURzcaJibkMTWgqcD6QZm8LN38udcSfQXpVpJBWtDCtiywmNgeTXvT",
  "key18": "2ShATu7J4TdsZE7PD52ZptguQaWfUngAWFRQ6r5HhBSrKZtKo6KKqtWfSRyLSCqdZ1eNKxGf87xNYKgPdGKy6fWE",
  "key19": "3PAvuBZyssZiPLMEseBpf3G6M5DdpQe9NncHL6tKf5ASK636S4oXoHatido3cZGagUveT5NwGxHBWhujb5XsNWrp",
  "key20": "2837FBYcD6qumX2V9udxhP1PvrHBFePzeyimjUWLTWyEf2P69qzP79iqiwa4ShBUmG2oFXDQBw9A3bp5QUYk89ek",
  "key21": "fTgnsVr3Wnm7KCiEjJSMDod7cWB2fMDjU29bFdbWLSxG3heJZsynELNGerQjE8ZboPhTS5h9UwE5CfYUoTKvYwE",
  "key22": "5PFQmGAM73PARw7hox41MMxea7h1eEe5sZdMqLc8njb8XkZYeJFujRMNya24eTPsZt7o5Mgmzo7X5UXGhfx6Cmdy",
  "key23": "5HBJTYXSnemUW7kxNjZ1vQNXTmdGQntDtdtfRXPWct1VjLSVECRv2Z7FQWJQfBAvs2qN3S8HTXZwdDqpeFPgpyPr",
  "key24": "2sM9BMZsWN1m5PHNN1mCsYc1PEckTUhrBR8EfgpesLTtGRPsHV5Fhu7Dzke7ZRgcB1YQxPjJhMZ5o5fBHBC4j3L7",
  "key25": "5FxyuaT3UfdDkJkofkHAu4rqJYRZ9oHGP8mcBmbDikvrEKVdBbDn1WgxMBqLaUzwWso3HzGqh87JpjaWEyb1j8qH",
  "key26": "65eHz4MSTG2dhS2pVhiPsF6W8WXeurTgc5sA7k4Z4dHnzh6GazB5qZN3xsshDdSu1eeLBZ4MVY8B1xkLhbxbjvL2",
  "key27": "21KgEwd981HVYrtjYpV4TcAomcSK8H6JEyLAiKgiYdxVosQhjduSTPMQBHUeFMjaijy4FPpAyhGngwfZxgxpuV2p",
  "key28": "55eXHD1P8bqpAyC4CrCEuK7Yidfk4FPC1sK6y1PpWLcQm5Hhk4Ev4ztf1LrkuXEcHePAa92rgG2CmTM1oox8nkv9",
  "key29": "WDisoetyVBdwEKwm2H6T9TzauGGWzFKTDPGP5YSfBxmFsC3vi26M3R4Rw8Q7fj531y2YP89zzXV21RK9aW17Yh1",
  "key30": "646AnaBquuwCFTWkdS7bTdD51DhUVJGPE2uvBr7J83pL3UEwdFBAEKAKyr8mMwJLCgL9EgHde7AtXHsjuYgRRRkg",
  "key31": "5Ry81AEUmbFGVwgirXH7bmLBWq3bxSPuHwijDpjTSJfNJumXLsgzWa52NRm9J1jUoVYF3zzpPpfd7kUVop6EvrUq",
  "key32": "4MqiLZQun9qFuqdiFexyGQSqf3hqpuwYh5NecHdhd3sfs9AmXYcCf4LzWBcnQtKGm3Vn3DHWBzEf3Mgy5oZJpezk",
  "key33": "Rq71koTyShi7pY6WcNNCbysoDnMRwFtuRQmCEb8JzbB4nqVaik4rindzWFH86CQvgf6QmWGaiZiM4AqDPsdsDXL",
  "key34": "dxfCt9MwU5qvE9jAjCPHWn2pQoSx4t6TTjqi7zKDgvaHf5qs8n3dWQng7RTqMMM4VCY3Uv2F5CjHw9xX2ggPh7X",
  "key35": "oMHZzX9iVc1ACN9PcpDhmUXAXispuP94ytQRC7BaovPHNFfAXT5dEFgF6bLuTBAaAwwpRFNmMv3Q4ehNWc8B9bm",
  "key36": "61Pi1CGu4jjtcWSbA6P6c3AW88V7igucZn7i3tRThV2Z2s8dCgUDTRBE6i2aSZzeF1wf3kvnuNGJ6C7bGPPUP5Ad",
  "key37": "CKz4XXGBUjaFT82pVt2VKVGbUhte3wC9yHiszt1xTVWq7arhvNXJ3UYn8xKhfBXNAXYebpV6skoSonR58fViLAf",
  "key38": "3iwWaLJnizunkp6nUrq81N3Vd51MT9bp3pNdU5NRT4XhVGVNu4CUtyVm4PFWrRv5pF8cJNjQYf67wBeM9zAbPvR6",
  "key39": "U9ZvY97y92nNF2oezcsFaZZpcceTFXFYT5dBjbgzUMUh5y5pFJ3HfNKQL4kaN5YicesUgaT8eaEfAxPaXjmbJDP",
  "key40": "2odLBjMkwBw3v812NBLRNfCg2KoSi1ZEDeQP8GvhVRTWA4oUgzucq8eNtE4em3kTyBxJ9xLyi4FBxKZHY6p7sFuQ"
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
