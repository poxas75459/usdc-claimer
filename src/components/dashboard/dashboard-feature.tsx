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
    "39g8cNXKtZxG41xE4myPFvhQpuSjqbBnvvsLRsECaDCfkJZk2PqnZjcdd1udtmnK8xhXy7VxyieaavzE1vsdfk91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22GfxsAHu67bA1JBH7FizdgK6BuG4GmUjUkKCYtxSkMW7pRxnJt9rXuEz4MHtLQ62af6JaunNCZqr4eRByyNBVrr",
  "key1": "2o14uTzUxV3kB8UDVj441EiTpNQFoKNhFdSSAjNoy2Ms9qZwHmjux4hDhTDfwcGqNwUe6YMKHuEKGp8UCF1Bnw7W",
  "key2": "cWVQh259QJDQRHVY6ApbpdsscCQMDetrLq5TXBF9vKRR6cM8XZ8ZKG3PbFB6mxoMTsbN4wrpxr39pwhTU65EfGe",
  "key3": "FkLRa2cRqeMCp1MxqWASkyqmzkJCy9ZpfwqPGKbh783dyRa844wvudQD9XXWtB1iGhz4e5Ls3KdjQw3KCQAUPFH",
  "key4": "4jDRYUPUuZGNz9kXq5Kn8aMqZNoKAHnJkhAny4NLoKAXrgdTXDePKxjkvzAHAixmqHuR3kZkZyBZDSDeUD8HPbBE",
  "key5": "3vBZBHWkGLqxbeBi5s8NujjyUECQhMVTbwEsZM32mpMinE3qxPq7dFizboQ36UwBzFZzPUSNyYpzePVyKw7tK1y2",
  "key6": "3MckFY8gWdEXLZHu4mH69gzrd7G9r128krNA971P6JbXBerQQkTd73ANXnk2Xk9hPg5zKjYXndQJP96EPmL1rLTi",
  "key7": "4mnHwmEKDJMGr5RrqxX9C4yxNX34hSGY7mPpGRrCJsRBSaU1SouKhaNDNKtACKBzgMXCn3bnj19FMziK4dfhoFMB",
  "key8": "4y2XJjm9shqAQpGKfkUD3ngsiVWDVpUvHZjYNNfNspg6nfmq6m5rBbDXwme4uzziojEfrzqUV9nyv1KsfKTtCZ6X",
  "key9": "3yhYsNs3tdPFnrRukvTGmpPYGX8wGdCut3SYZ9tUVCSMYk8PN2DjSevoFrtqSf9n111vr22CYxn3vY7jJvPrpzBX",
  "key10": "4G73ub47GvR7hpyMhMQnq8m6Pt2hwnR13EvRxaZeixV8XSYiyncHQMkMQcosDsNu3Mx23CUdD3jzNzCEVspDyGNF",
  "key11": "2KWxr8UVbxN8teZwZpMm9zD7N3KfukFYLRodUAxxWdvQb8hKP5xbPXyzR5KZQE8s3Q1zRSPtiw8LEwgUJnJSWdXc",
  "key12": "5ZsUKqETsePbu3b9AUbfYUmrv1u7jCk1cB7zTs1LLB6ukfPBTSafSoLiBjugpoFrbv4ktsxFVMYdRzNHpYpF9uGe",
  "key13": "3w3kUT6jdNJcu3oiHneGccNpThzeRp71gucxQxR44DHjtcuKEFeXfF6vktM76KzsBnRZxuRFpWwWEQdsxzeNbGbW",
  "key14": "62XTno2fUez9A2Nr3WMKzextPzQP4iZ9mHqs3M4BvaZwsH9N6mgqba5QDAtiWaqgyLhqr6dd5K19tmeJCteaAtNo",
  "key15": "aUvZpQJHfKuC5s8yET1UyNo447Yge3p3LFXF8zyd4AZN396njeHdXSP96NR8icF8K4GMkkAThu3wyQUB1oMQEU3",
  "key16": "4A7Mqqi1GqwsdoLHwxaq2rvdD5reNqnksf67JGXomSCjGWCeHRhkNwR96hRyYCd4AA7AAv9zupPRAGBYw7WMP7Q5",
  "key17": "4z9x64ZvMAdapTjRCa724rMoErmeWjd55qKFsdxnwARM64Tpmvp8wdNB5eHhujk7gcfLYrKt8JBToF9z6ccLLUDP",
  "key18": "5MRrnukC4Pu35KSgYEGknV4wXfHPrtCPy35okb5KUevYAfLK883oi4ikewVoA1qntfFikm3TQcyHWQaMda1wFqFu",
  "key19": "5G5wobfQZEpEiUnmYDoHZkihb8iT5anb8fAT45iGxNMhYeRUnxCy4TWtEo9JEWhj4df98JdeSdGe4xgfcsmF4biP",
  "key20": "4D5Btykc3AQaZeof4NrTmcvpFBw4aaMQAGGNUQwH5SMvibKUQpTLpZWPvpEDqQfU1mdfGjieuJC7tH6odCQyxRt4",
  "key21": "22tCYabGEpKVALX3V2mugGxELZQanJY97NaA9RAHwkWmf3YXC87AsqsrJxkgQLYuW3ELyQMnR2sZfZMRi26Ugn4u",
  "key22": "5PRBferjYirWtRV5Z9CeUQo1QRZLQEu1zvVFHEBhriYaKtnReCwXaETZKdDwdHsLxXuxT3ZsW1fDJbq7KkWx6t9z",
  "key23": "2ZgymWivcTcWp2wcj149iVheBGoyW2kA7R8iPpmtwDJeVKuQEojDVegpuLrVPLc64ZyAckhqp27XTyrj3aB8vZwZ",
  "key24": "fsQTUuMMB4K8VUYfB8CCqL5rPJDP2VdFJLZVW2Gtg7uyke3vW59cHLpyZtYp8nyt88xVWvKzM7Uya5UJY7mgMfc",
  "key25": "SNxt4976Gs3mYC15VnXd7z9ADiZMoy3RvY1Vt3mMQdPo1w3fY9KJNdviChj3SWun8dGjhRdKQppaGw4EdXWt5rW",
  "key26": "5WQZhmjF3DdU6riNmAHHhvHXrtt8HDtQ5ceZHizLiAD1ASTcFcyUG2AM8cXY7LTYgiQE4mZvv4pNX7VXPemSFYYU",
  "key27": "3LT9xzBLz1RsDZr3Jko3mcEpeG6XPQcaFk9utgG5fkFgbimJnLG8Ew3PgmEh2mD9smmGkZt8PyJArHmoXVLPqjTz",
  "key28": "43xprA67RVyNAVJe1m1axDQshVfVdGewcMaDwBi8f2p5fxwYPexBM6Ycyhu1AbUbQjvjxKodEh6kNTAftGfvLgNN",
  "key29": "bf8kgbExrLhifaRt1DPCUgKP79GVLFxtQXGUmVM8Rd52FRxYoURiKeamqL32nZNeCmtT74tfbU1rnfYYbhfot3N",
  "key30": "52BpKUfttMwWeA27qGEQewKKgHxxKTapRba761YtcHCNeHubKiBVV9Dsu9qK1jx3FaKEKQz4ERpRmRDM2UAnKie6",
  "key31": "5h1f7uJsJcxtDxrMk3QrqyerNaM1fYsmuZzNetQhpMKJQe6gz5znqNysW788A9wz9MzhXGfUcF6pUVdf8DioqjDm",
  "key32": "2d6pK1YD36U6ao9AU6UhLXkg8Fgw2WnhUmeJ73jfwwhFvJTU1dEzY8sjcowmmpcm19MD4JTmECBFRcEfgF64bGjr",
  "key33": "bx17Hbb2kgTtCbWVVt7EQ49sKu4JJUQHwaZev32kadgJSuMfHR2bDE2m5gmGWadm5tnVeNyu77HpENrBEKktNnX",
  "key34": "5nx7SuxBLi3WnsrjqXDP54opFcvgd7Yzqb9aqpgBtinEZffywNNQLwQE9vpu61n2E7G9rbqtR3SWH1EhXqo4ssby",
  "key35": "3dCW7bzyrR752eU5ogQaVJrkm9am1EWJ3tZC86dvkkKb961oxnb32VCi7ssYapfSqmS9rGeST2zmQv6Y3omhEHQY",
  "key36": "2HmDjfAUqiEzJ4UGKMrLMG8DxfrjeVPrk9mFPxFmEvuRaJ5uh3kPbxAdU6Cs7Bv8wtgC27LW9eW4vGkM8FZA43vt",
  "key37": "5CN3uTzSudiVMhdG7CRpBTH6XsPfer2cQ5psLHXYXwVuN3pocugHVEWfEg7jVcAimKRkdbqrVgZMvwTK619ZArGc",
  "key38": "2cgQw5FGxPWzkF7k6rYVsfNP7GoKFBShCfue8SZd7bgwxKASwRZYVATxS9qTeepKjuAa8T2ETFjm34rnuHLPKztM",
  "key39": "9xxVc2FKhKssNXTwgrVEksURamwwx2dLFaCYAEH9GvrPuhEcyPu3GNMV1s7p6czBnoWsEM8bwY6iy5y9B6ah8Ln",
  "key40": "3fVb3gNagKkdtRSkHPgEznq5JmnnXjRzdZSKJz8bYwdgdMd57bFEiHXCsy4wn3qiLoMuPRJDLwziK936Mk3Lv1sn",
  "key41": "5Pz2TNrV3krEbSbLFR8DDtyuLwUnKcCAqfrNJFXUwi9fU14VywZXxAhA8UzFGoxFwrPK2yKcRiNZwfr7FJS3iX67",
  "key42": "3VT1RSGcqGGC5iZpPjsDZau7FasxEjnaFnuHE1arFxADV1P9djWCWCK7j4MqHNF3ea3w9YHPiwpjnhMemVEH97ih",
  "key43": "1r4fphZS2tFGfB8cCQxJYXzzFLC92UKQNyAKfe2N5x2Mq4voWAVhGx7jEJ5ruFRvRmJvoAmvNKmmBMK5UvfGwH5",
  "key44": "2qySpG3juG9Y7af3srxnDprgMrLq6vHUYgh2CqARGcW8Qr2eDFmQMyRPwTmuDgDFtCM7ubAmooWN6tEUsZJ7387",
  "key45": "U8bnjge1HFJZqu1TtuAPrkAd5CVsF4RGPZQN3fJ9GW9ikADBTvtZCqVSP7fm1yvoxwmpUMYfyMBC6Bpi1uXAmuc",
  "key46": "5G3gymfh5kKusmrAAh7gCGaepEz3WkCpvQuUhjL1jpZpNNJDT4g6UGg8RbqCuRGszQWmBvD9CyqTL9w4q5ojvu6q",
  "key47": "L8MXvQYmpKATWUqi7rTirLAxoKxBBc4U3faTQnBo2uB2pUP9faVx2VEi4y2hTJ8ayU2osJAaUczXNEN5xnFKq5m",
  "key48": "3nmZ8vpXcksGUd4LLtxnrgrHEKLEJNbmSoTSHprxUR6bN5dXkb48eukQeVZrzkA3UrKbjzvtSGF3EUQBJd5zY4NW",
  "key49": "seLARZ6AxBLdBC8k3fzkU213hbsYZkWY3hbG1hFySGNs3WHFLiXUzU1s7DDsyembi4wDA4oz9rtHc9DxCjXnFhd"
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
