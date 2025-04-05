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
    "3auECX2YELzV4GPTdK56fGiGj4hsrDuXjgDMaNWesQLofpLaw8rXriwS9pGpAVDMYjY953BJySBNT9k26pBnXfjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KFJT5vJ25743xdpnJqASca52YQtbpehCbMEybfoeLz11HJsEwaduaymLMjRWDTH5mWogMLYsJWpBZAz1Vdx4yAu",
  "key1": "66bQA3TpeyvnEf6Fpgv6RzpwzTVHcCqExnSi1a2gAgABiJhxfQUtYEDhpGyn4JTmGsqFWc1C8HE9Sr9ScxPwQY6f",
  "key2": "oce4wjZNdzcxed3Yx8Jsraou3KHFj9RVcrYtfezfatxnZcDCFpNrM93ZpFwkRXtR4ikwbPbuH5Eyg84KpRShtxA",
  "key3": "3RH9zGeystbBCxSoXvH8oiG8DVJQ44dCQFMeHG1EXpQL5LvHhDMCTEMmrGoF7tgTAhtoupgBK8SwFxj3vocNZeVz",
  "key4": "5TQu2HppyX1eqQ7jQnSkxxYJPVWUaLHaAM3N9smc1FokUX59zmCcP3AruStCMopApzDbQ8sBKVwE9To9im33Um4j",
  "key5": "dxe44VjdbmHge6KdiBmABwV2BG8PoebgJHTbr7T74BwBw9u1hDNum2kYBdBhtjFy8F9TV2Ksr7eXfDyZJA2jjQK",
  "key6": "3E1yWTSyJaFmn6YoQS5KQ3BuhGhVpDVVdWrRMgaernxRtuaraioxe5dtUzhvy7k8bedptU3mEEDp8foVyrg4EeWQ",
  "key7": "5SfX1N3hZyxwg1XcU4N7Q1tZpBS7GoaXVbZed27kdmsRj7T8ZcmNhuXw59qB9sCeUUvCXzX6eKaQke3KQpCqp5QU",
  "key8": "5qssvipb68vvf79P37nRfeNX7oNZ85NDQs2vnQBRTydtWz39AjKq2TNDLuY8FVUym41opKjYMiwJHtw7Xf3um37Y",
  "key9": "3gCVC37FvF59oBfjeZ41maUDs6agBqzNQy372m9EKAXGM21yVXJwPw4iB2GY6V5BdrDNEHVng3kVCe4t8ho8MmcV",
  "key10": "3eJw8weoqGVqdF4jsiBbf3ZSMMgxrrSh8NMs3WkTmkem6iNSwCmWnFbZSGFKR5Y6eF25Seus4FRcSwVcAUg74Bha",
  "key11": "5CGw9bqW5z5Jwsuis4xCfJ8Lvrvg3Fn3e4sxYBD6bTjUYxTDzrcZod3RNksADgtVBsmdmJCbtsUJGcPpdmHBPYYX",
  "key12": "5WVqRLKLgp6XyoDuhDDtpsb63jzMmq1CRcM4htm2BWtvrGfqBMrmZ9SMgooKqBDbCgksaTNXjvjntwKz6WrqDTv5",
  "key13": "653T7vgA5j9yP1gNNRVUaw6KepVEtb3GwjavybCrQBxw3b31tHdRSPqFRjKqBpzA3hcFnxTwMjQMV8yC89F2woDh",
  "key14": "2BkBonEoXgJWDDtnQJKG2EeBFmdNCF5nPqWXg8EJ5LhieX7MjxTav5cqnvafbbkMZccE9GG7EECUVyRbfWorhZnt",
  "key15": "63iunLy2skJN71RvDR3XN5ALoqDLEZaavGxFURASaj8BZa7ULfdvm1AagMD8Kgo1dPkv9uLDVTwYEatDHUJzHP3Z",
  "key16": "5rxsyccqiWcgFFrhGUtVCpmS9BCJQ39BM8qu5iFswQK9wEEungBZx28Bv6ikkXZg4qVynU7Y1CHyYy87ZDsGgzJh",
  "key17": "2PrVbeQHrNwqGPi8VAKD2vcFw8gCcp3dNLHX9JjAB6dzU3hy2bGnV9gUmvdF6FAv1kvgJ5nDFUTG55YDYphN9uC3",
  "key18": "414poSZ3qCYZRPRtsrA8C9egZaUZ7uSF2xBsKdEyL3GMNxcpfRTSxLT7bVi5DxfPur62pdtR18pWjtEvNMvDoWGo",
  "key19": "4iPZp7ck36A5Xq6j1jUtGZbgvdcBHAF8dsQtx5FRreUV524eGRHRMFG5TXbjTHrtBZSBpXsepGcKxjZpFT4XDdW",
  "key20": "5kVS8tkcgiwmiJizT698YF6umjBcXRRXMkQQE8FT6wzTskPH4FNmcnZzP5Cq4UUxskUTaY8kWyRaFRypsjnTZUWm",
  "key21": "2Hsh6LWTX1MFQbs7Bqoq3nz3qHoS3XCJ1AdTG7KsT35CurWhNYGqxEJkxqsrpGJGp9DxEVQch8vUzviwKHqjJwpK",
  "key22": "3mLviyStP1vSFT2DKLKxojxwFBCnWHSvkrjhQCALe9cbqhFLMTsGygG6z5gpeFSkJmLx5qcTuGmQ8WSyWDgkUt97",
  "key23": "3qXuuNfCVxJRHoCo6JNEYhncZA3VTrWS1RfGDDx6dQgQRAPV3hFeRBDzTTXBcb4emajeb2vuAGAySQj6WpW6eSiF",
  "key24": "5xURUUSFbdJoEDBvCJDgJo2P3ziKSGPBkCbkyrnTEYrhGCDiH1EXhMRvSiF8AuxKaKoz371J53ZvTCcZLEhEzDsj",
  "key25": "4vadpuXgAsv9QV8nkf89JPMcwoWqjA4t5vUdnbkqneidLafjHDNbKGyTrAumBXzg6HVBtPxWepHVvK2YfLt7Z8Tb",
  "key26": "665u6kvvXGRuHnr3muKzhTH3yiQhiE87HAmJAXPCTEuhiSnDvuM4v6Q58PPQBwCKJkSDXz426TNC8GLGKAawD1EK",
  "key27": "t2sobJTpHwG7fwTbpZB9Q5akSqALmf9nCQMqLKb3VL2WH84Z7wX8aRs97KBg2zMAppTnLiF5HK6VQiQMEooSUUL",
  "key28": "5fp2WQeBz1SmpVJRBNb7HKWnCMjE7p57VZLEPyT4HEnT53vKr4LeC5qgT1dYENEr8f1PjwvFMSRmf1SNfi1FVkf8",
  "key29": "5y1XVRbnUigrDGrodSoVGvZPArTanmv4W3PYZNHubwZNtebtZ1xfTZewLERegz6R9CWcH86nR3G8dLQtizWthhrt",
  "key30": "4yX58yRSNjdqxpX6jLFncixhAqRZ8ae7majybJpgTWhDPdsoHoKZWi7Zo8WmmjTm4mwz6XXe8X1Wf8BNBcHRmkdj",
  "key31": "5geKjGEHC828h9tLm4P3m2EMwTWYcijyifXLqPbaUPHve5KThBde3qugZeYYLEFKCT7U1jPT449St5xLzDem2214",
  "key32": "5xPeu2AKaAnNbv3YM6vDqBH7UX7dSMh8rMLfvzhhkrUYKDxTpaQUjRNP6nexFfXnfwuiScuvvH9WjksoVTmSH4MR",
  "key33": "4pdHV1VtKsoVa834ydpncy5opSYfrcAnFfZDgx434HVQsGESRtzefFByJdc5cd2KLHKnyWAFhRpfs3cJQKPwYbwb",
  "key34": "77GiUd7xckf5zditSkbFFXRNQAAyEhYLN1quKTL2wN3oZpby6dGmmYxNcrxKDSJDaJBrmKAHCYsm1DyMiMMuXDC",
  "key35": "2pSxPag54RrUMksSRaMNAKvU8nJGoYhhqyUre9gP3DV4xZsoNTnDq7X78PeVkKKRaddyyGjYkF2Viz7g6BtzDkMp",
  "key36": "2MPEXXbj5CpZyV34GJeJEeJ7xAdUDA4XXqEMPdQhRQhs2SKSxtwiGZsJNLoqc391yZZNdEBcb4RqKRL5wWt2fm6f",
  "key37": "4D8QkBxrC5J8SpAwYNwRjAP5JaZz1wzx2SaG5mZwKznkU6VgsWVMrwJo2JAsNkMieZVTMibpjm1J1srM77nHg1Na",
  "key38": "5sq3FFUh9y4dGpuUMRcEWQm7Ybh1agQyS28vBJchL5YKexY1WcWwV2ViHYqa9DY2afKuuCHvw46cL6EYP3Mh2KHp",
  "key39": "3kcP16WnK1N1v4HB2riKJfs1Remz5Qid7ftF3Qkezt8QfnKPjCnSpmSmyqrV1G3fpkVuM2qDCkeGgtSTg2hjvv1y",
  "key40": "8rEBYGxKaWvYBdVXKaGP5t2xg6z2CecsvujNLwnUn7fFnn2ZX9bTAuge5bLyLETweA2P3ziFbuqBtC2KqNQzj3Q"
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
