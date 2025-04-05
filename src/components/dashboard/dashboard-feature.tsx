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
    "2JGv8FEPZkxhjbwUwLSF17E3Huu5Vgb5BDN9ashMpwXPYEB5Q7Wo3mJAss4wQytAfCkzTwHokzjZJVMcJgqdgc8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tT5ivqkntWUnTzG5cnBevoAqGFu7rH4YBYRtyV95RbWNygoFVmWCbtPPvnMVPAVYQqfRzNJ8syj64FESk4WmFaR",
  "key1": "2uYyNEATYuNT5NpzAUuCgqzCGw8oRkcd4fE6iYLMoKaBeUT4czMycy9gv8orVm43LBFs5o1LMCwBWTqpnooaJu5t",
  "key2": "4Pu1nYZQpE8VtEYoaVqQkKbCCGCXFR7hUxd4M7WLkYK3267ugaBXMwD2s1SGMT33SBEbGbpSbsjdrvwqWkSbQVo",
  "key3": "4nvnwBxRTBf4XucWAoenYcnev4ZtP65sLL1bh4mMt2bDw9BBwhYRAxBYqKZcq2a1GutuCpafWR88X6fCDM1CFVC1",
  "key4": "4p5MzpcqnRRsmdXRADZggLwi9XfZrfRFYP69LFtbbUEkqiuGrUtxo5KPpwDg9tDeG93PRspa6TXVa1C8E1zsAfW8",
  "key5": "4RrMK35zvLrLwWjHTngTAWsGUnXAYCmyXLTTt5kRTPeiBYLXkvwrbwSc5vS4cdzmPCpP5etE2BSPHozfEe2JRAFg",
  "key6": "4Lyjfp1ySbLNm6d1X1mFXu56bPNqGwB6Qu6K1Gsgm6ipuXJb2xENXpntydx7dZJr2JrCUMRhRApELbj3Gj14LQ6u",
  "key7": "3V1mV8CyoTPoVmnVZ9ZwxbN8sQ9mckoQ4bzJZCAusrRv46pmGLTfXDyCFGKcF1ZpRxRPdBmV1hogeQwzKnJKGQNb",
  "key8": "4KEccTqDoeagLPe8qopoeAgRTRu3WS5Dd542YGhTH8QY9X6Y36Vv9i8c3FupPRQLPGXYtd4xjxToXNGniHgYHX9N",
  "key9": "372qnFsmokwSEewFXshWR4fX7ufYQfGW76o2MQdAGRjmkEbRmJXeLdaD6L43g1aHcPc1nvQnsL35rbABqD4v74tF",
  "key10": "4bADdx9PNm7hbYPTDLRUEgP74EzK1LGE1zKDpaqG9YwnExhhgNxBihzD99UaJAjjrAwoxdvKrFyJ6qp652u3a2VT",
  "key11": "2qQeNYjVJDWyJ36Usy7UzMhjCwnSLg3gSyozTkR7brp6GvPwDdDrcqXPhJYHxuAAmS3MXG8tJHdQAucRebTtuzu",
  "key12": "2aVZsD47d6ytXdfkQfmwq4WgUirdy1qXQ1xewMuW59XzSB8jMJjMFB5vUKYtHkJfynCJ3hZA9X5eKWfa9QFLvCao",
  "key13": "5UfPckoHoHSnQccoqjag2yNcPgnzvs1A28o5dWt1WkvwBEPfg6haG8SBtsGzYiR1RUpamTQvjFm6oJ5n23msgBRs",
  "key14": "pojXkctguFKtxXm31Sm59vxdhu5VUVrMJ5mwFoqyTTh3acXf9L1kMPq1QXdHbRyVEwcYMPHjX2eQ4APLRHabz9E",
  "key15": "5Nr4iRV9fKzAUsiqQkhN5Qv9xeLBVddC1PbCQgz2u7XHVbsYHWWcyabewJkiSs14E23KiHM9Gtg3sHzvQqn7WReL",
  "key16": "2bwCYpqo3zsVviSCKzM2ZTs858t1Tgi2e1dqCA9zkPXavrPXh65LzebLa755CDSsYGuz23M2SrGudvjUVjvDDnsE",
  "key17": "rKkjrpCFTasmJetw9E5YUoK1NVDGk6owSugSqabWSKruaQvrikiRz251BDDPSy4bd61jb9woGVUJEmSKg7N6LxA",
  "key18": "27VfPjz5od1ZPDXUbYmUaR4XTFUQGVYeZxznfUcvS2WnqVTPEgoqgb1sw3BXyhG5EcTZUyDqa4LShnKLBBwrsXAq",
  "key19": "2s6hVYZ8vAdmDy4Uc9bNySraeu5bVZqPr1RuC2m5PU24a14XB4UdXuV6MkN9P2fwKdGPQ5iUE49qjVEmU8AFUx4B",
  "key20": "5BnhY2JURfhLsf4sFKKpPK6QLP2LwkTpXbqbwxigvgDjYwxdLNuuKd6m3o9EL89JuuAUwfncustd3vNzUp7Lda6m",
  "key21": "38oD6uyy5vNPjsxhRkxyLudUjphD9MBa4ZDQ4TSccMWay64eKacZVH7FCtZuFDvu3qQx9XEM9xEiKxUUxobGGczh",
  "key22": "5gYLARX6XEB5e7ci56SoBW4N8Fz39k7Q7joC6ADrKcv3L8WY2UKhAAHWqGN5ptCCDyjWHSRsC71ua4RuMjvBoBBW",
  "key23": "3KYtH8Ef2FAsQ8wuUVd9geNCJVh4WsaACMpnVFQWQ33PZfWH9dL1G9PpVFEpBFEEUCgbnTL58MskaVqT65u5K43z",
  "key24": "4ijkThtAkyN4vW37RPUDuXzkZFveTe6zZKHcUnyGdgbQJnwJej7GHDmkQQdAtgwU5h3tEjvKn2uDc1aq3DSDeeTW",
  "key25": "3SV7U7sSYorNRELuEe4S2MgGnMt8VPqtGgLaLqDFs7UUVg9ivBGZafPM7Fu1wWGdTQTdLsPXicSwPzhsUJCHvsyQ",
  "key26": "2Xzy6BXXRKtBJRX8ZrUq92C9HLJPptY8buoS7NKNd3CfW6xwYT9BzRXpY69984XhA6Fw3Zch4pGurGupQfoREs6V",
  "key27": "23oPY74qnTG2bSGGjxNvj6LhFfLxdULKdFPPPxGXqh3NAJqZ9gXDZ1upTkHXBHyhT2bt521zCSbybVJhd8e4tFPV",
  "key28": "5opTwTgfVHdr3DVhvFQNpuFZt7z7RwZttanHonrG2Zb1B4XHqdykwtErpiutyFs7GLNjg9Da8tW9oi4vmxYA56Lf",
  "key29": "67eoseK3Bdk7eHfoJN3aSQyTHzmis728qjiorp6tj627GGXm1GQjxxxbAkbyjCyDNFJWRMc4Ht3SK9yCgkmCisJ6",
  "key30": "5tpN3UrLpFeepW9DvCwHUARVDxLNnUQPqeYs7vUZRU8Beq9XR7nzDnyCyeE1qy2hCiLrDwVUprbomPBq2JLG3wnP",
  "key31": "2sLWuLNTQS28ig2y3nwn6omDuR8mqSeXEFhEmFFHRRGhmQs9AKwkd2h3t5wkRtkgTLqmqr5eWybvWsGF8gDs5Uwb",
  "key32": "4fHVmjMJY9hP77PmakRJJyLEobBi2wryNAZbGqLUToZ9cwj9EVai5QuJKAF1c7hWc9UZhFphiQhUAhBdBy2ay6Aq",
  "key33": "PKEqL4RitWsn4z6HNa5FGekN1zk64PE3AYixnjyye4gTTrSJ7t5v1kvFm7t1314X8R8F4pM7ALAppbqS8S31XhE",
  "key34": "5iFLZy3jF4sHHf312CqMykWTV4AJiXTqHxbQrQd5FmFSXM3P9nxkygTumq7kSCeDSspcyMZPqJNMxmuJEWDTKadi",
  "key35": "2g7dMJjkYBribtyKCjSkuVLuC4hEsbHYvJWaWgaMs6UQjyGBqUkCMsLHsFYMoHx1T5WhBEhL42ns6fuikFscXmVS",
  "key36": "122YfEN2YJ1u18oLVLaUopvSwSJ7SbAYSozU3RgqLQkp5RqVs7JFA9EnoMqRkwJtC5F4KTxc35qDZ8q2Ub2Tedyb",
  "key37": "5pvvQVHVtMnfTuPq6Sq4LELVK5s1fNQE8HiY1472mnEMcTnLthJXNyKPQNRNEp2TUTVxPpSDCnnSBojENATPYJyc",
  "key38": "3UCQH6VrhkPQaA1AVSpfxbiywVCTbmQubimTUUyK3ZNpVEzwSmf4TT3SD6DoLpVUxtoiaMfYQLwAJ5ZkdMfgmKae",
  "key39": "Vx98XnbjUUnX3E3CRFYrVAVMD9oDWkC6d6z8W2Q9FGChTUsv6HSokiA5ATh6Ukm8dg4ayt3dhGnwgjWQvx86zzQ",
  "key40": "48uDGbkoTSS9giV5FBYDUkhdVbUMGm7D1uvCZGtfbZddJDejP9STfZAmnidRSwwn217oLoFSqLD6ALFjxN1qVh2K",
  "key41": "4WQgWH7CaHZmR2cokbwi294MQsHqdjeTMgCnYtJCFmtSdzdKDQH9rCNTrBkkF4xzoMRYBU61Ts4Nj6pg7z4P8rfc",
  "key42": "5YuY1yVecGowuSHGAVCFxTHAhMfiHmYJYuMKYMdAdJrrt2ZCYNthbGanTt9GdmQqA23xoByyYszG2JdCJekuE6np",
  "key43": "282VJb6qQdH8JNHbY4NKXsXadmc4KUiLPjNbiaQfMhKVBpPefCNmhXNWZcKZHoskJj8o4PiB9K3Vg2GNfhS77Azv"
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
