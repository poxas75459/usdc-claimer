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
    "5pV5VcXZQZmYxdEe7btS4AdimUNTRWTBkkzg5Eiv5xcHbWAeRBEVf18hZ3W9GNJEwTHUUu2Sf9y3NByGn2Qa6j7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v9axBA1VRDhhGgL53oWJfTZV4NzuiyyWHX2CZT1WjgdXuw6pPuSRN7JbjaUrZ23poNfbbM1fE1wn7bcy2Ub7zVE",
  "key1": "3gtURSWL9ZLmeF6ugmMqvSKGGuizeisaMrNWhfWvFaDp3xnAgwmuLp1Kt1RbKM5CfoJR221hFMjHZDuiDkBnAsPa",
  "key2": "3t11ASxG5voCbekpyinEHLgjPh2Y7HBvbtjg8b9cYCTomug8kZgB5LhX2PLfrNdGeRMZfSUu94B23MZdc1yhY8YT",
  "key3": "4h9dbS1jCAHQec7vLbiXH2GregouwdM99CfqnmPbCA9eTDXuJQcxKdhDEV2DqDcLMtpu6UwztUoeTQNgsn2cZnXA",
  "key4": "4x9DvpNVQZNKQ9nREeTLZqsy6o1uDGho7GUYxAQCu9byV6jNEuF5vEZMpQLuqNhGt4xnij3EqhD9zvBnTAgGYcxS",
  "key5": "5Gw2sjaM3ug9BTGEkg1AauxRcaETQdYQuaSjec2Pk3qDt4kkUpBGtzaxrUdxFucRzDtNUwRUiVW1c8qx3bWW9XV",
  "key6": "5Je2mdk1kPpokb3UVQo6FVocqNtjd1YpEihy5hfE3oAH29sPps4cKx45GL9HdPoL1EXJwjBes8WdNyay7U1tD5x",
  "key7": "strMaR34JW7oC4XTowsyW3jC1EfaRtge1MRmwgGQLxDJf3U45jAdypVuzUhM7CnKBZRxPW4a4q3GS31SjdKcRQr",
  "key8": "RrjgTpnozBiVM8xhgWLC5qo8RYkjYEWJQM3qVWSTQXmiEheyp1JiodDSUyKqKrZJoZngGT9t9zKrNijUgyEeNR2",
  "key9": "igHEaVsFx7QxCqUVLiWWhr5JeEaEkMyZDhxnrYQg9pjWty5U7XedZXGXr4ZgWANvepHmarYzgxAAKMkLZ7tQ1cp",
  "key10": "2HLbJ9YUeb8U14G1NanZnzz3Ph2L8A4zUMpov3hXLy8uYb4gZiAocTaM7naByBpmk7gaSMfVDtXR7Hz593x1bRu6",
  "key11": "46g8nB7ch268h29u76EphBqPZGo6vbpDjrHnjM2HBiWc2yGrPMLHnpHAaA7C9ZvzRaFf7Aw6rnKKyruRujAWtnq6",
  "key12": "487E3KRdJj5qJ8VeLJ67J9FiamW6dW5ywRd3F1ku8m8gTZdfrj2biw6zctMrv1qSf6UT39z5xsPaXisELyZ9Q6V3",
  "key13": "4izcBz3WhqxHKwrKUJEwqmoBrAtBM93iVe8VTpPZ4no3hT1JHc2xDe6Z48UjDqfvxqxmAv4zMKYkGcLWJKxEtFky",
  "key14": "3zYn6k23yvCtrYc5y76LsDNPXMa6vgnrZRKNPKnwaM5JdqiiuujrNSuMAyNdPZB41Ysz9q9KiK9qSwByynKN8DVo",
  "key15": "624TznNaY6DBfpzUZmir8YtRz3EpMkmsaHHnvT4q47Jwzpot5dbbeU2q9rFBcYJgRn9BcJ2zDUPe2zMJug8SBvuh",
  "key16": "aTQXXqbBHFWVxBNa6WMC7133zkM3m2RbSxdpmm6tDNpXLaZ1wtiMGeUWxwDBVsHVdp8Dcr439ctHXTQLHNMyHuo",
  "key17": "FmfobNafD3ED88NpAXAndZtcEzhB9GrxppvR8asTXxV8QihzHjv6257NqbenXHKTJdR9taHS81qGgLo1uUPWZPC",
  "key18": "2jrcoyAnEB2iUM27CJ9i1AM6D9aLYp6qfcLoZ5aXanXeT6CMiFHCymebNhCC2GuddgpLnfTJuy4n1jDYkw1tA4Qk",
  "key19": "zxD5uzYmL6hXEWMKVeC1J1QZn7KMX4MHV2tboygf4V79KCr7G9BGc3TM5EN64bLPy3KwqDmk5V3YZGnC27vjcEg",
  "key20": "418qFNp6eZqzp2DbFk5Rv8vJDUccDh4zt2sLgFAAMFprLQzhrH8jCby9kYN7VWQcS6QGaLjM3DENDuXRx7UiBuWc",
  "key21": "32wzkpPu63RiVvwhaUdSFmz2BoX65Sk2jaMHyjo64vks4DTrsVG1DFas8cGhJmezjUwo9nikv76eFLbx4HzmdaKT",
  "key22": "2vBwDzxSTF23gPT7hfhKrD6KUTXGodLriSr9U1uFkLLJW4J8oXwJf2A9dTP6sJoTTX3Xi4hw7sFjMRxaoBjXqJKd",
  "key23": "JkNFJC3Pin4P4BECdqDh51qjJTfmMWHGqbrCLSbgnJVnLKvFUPVJtaYZkVcJBCQVP2p2cTZPAnonHEZVrikKqjW",
  "key24": "3XiiDzDwhgC1iwBd5ZPpjipB6qYnZNvJcQNRs61NiuF5b6f7vBuLBfio7FukKaPxAuFh8cfmg1nkdvZx3kPibP5r",
  "key25": "HU82W9zSsrJ9pV3K2DxXhJh4SiAU2x5MPJYBUUWu5m4gBnjJ3vJoZhqVPxABdsTderrMVbsz1asVijqmKo5idLV",
  "key26": "2i2i8Hqt2e7XEGkPSLFNEAedY4Mb5LUCndABb1TmnoruwzJEuxdtCc7vtTYGfgobjwCNA6HBBw4tHAD5SwahFHS5",
  "key27": "3t724619zhfaUqJTHLvh2CdxS5mqHSWWP1BorHcdgFDTqzLcKwT8BDzVXzYaMDhNjp5wENUp3rWoAHpMAisFf8oZ",
  "key28": "5BuHDqBy3q7spAQhAdjZnd7LPTm2yqPwfPbUn3Pzw63dTghSGG4YqLkB2we9pQSYSXHXvhDeNUrNvjQ3AKvvG4dY",
  "key29": "yHztUBcksW6t2SEgczGVTcaVkqrB8nKCVkRGntUDRQ85W6bgqqv4vJKj6pKWSw9WjEApKHnsDpFpuyA41AbBF7t",
  "key30": "34haRPT8L2RdVaUb3xUDtniT1DGCyiHVwvBLiSJwVJ74KAHYtXKwKrqUP7AQp1wtkQ7xBYeAhVx9rTQJGuHLmD6w",
  "key31": "23jjCvj8FSehFhf72oQ2mHdF2BTvXSSrVcN646HFFDBTez6TchrcVi2v5Dn76RA72dQwkRrBetCQYijLjpGC4AVL",
  "key32": "2auq1PuV9WELw1beiHADsGdwDoduRQxcQW9FJszWMMEDfcEszqRk3s8sWSuaDHNE9Urs9FZQxdNXtJSze55FmcJK",
  "key33": "5gHskN2996acgV9LRiy5kxqhzEnbqdic6jMFfJBb8VWHZtiFw9ose7XcC2LTKQm94mtxqgTb4nL93ozxnVpviwFq",
  "key34": "4bE9EH6kvj5J1B6J66ZyyupVXW8aUqgNUPPha9ziH1msbQVMdKB1vzBb82peu2trbhjXb1j1DJYQTs7VK54jUekH",
  "key35": "2mdvmC1qxECVQVMCyoMNdjM2tKkSAUZtSyWKXLSWJFFZMknzEHWxq7WkU2j1wM6FAjNyFoNLj6hCUjnqpdYT8Atn",
  "key36": "2gURqRMNvJoYfCU4H34pcSXXRGzQawBi6Kc7EFXFMaeeDEkSZePRFuVYrNFu2Sy74P9JNb31oPXe9WQ2A7SEvwHs",
  "key37": "n6CKWwQWjDbSKdDwnWRLxBTEuaG7jthEjeLAbYxxJ6VXG8ZssqSv59xN3WRQGKvBcQN844cxs5N6n38CfUMt3xr",
  "key38": "2DS7aCvi23QUXKitevy4SufEVT8LwJECbK5xAqvgDyDv9y8qEUx2B3mTDRMsPqC3J1Mrj62MCnXox1gRwLsrFmcN",
  "key39": "67hymXv8nXPQ7AGfiVPWYwgzvh94ZSZVy1rZ5uuoQApqoqAcfc6gaKjiE9BHtWe9cyNCEg1E1N6GzRD3Bw6SuwrD"
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
