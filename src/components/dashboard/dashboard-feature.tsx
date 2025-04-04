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
    "KNkA6PuRxhWp3k8CrP5MyG5JHjvXqgD5JNzLqPBPtNhnmgRU7tQQp3EaNxJ3Ny6pCV2BinuQLcAKdxcupGyPs2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "93Eo7qF9fgVaTTBHS3kcvRe3R7wiKgQEhBedBuwyypF6R2kmzt2zs1yiz3b5kQsyu5idGteDPehcNM3PSwX4B7b",
  "key1": "5wV5g6ZzhYtsGfsSxfaz21FyGiaPiuobwDcWdqL4ftjuZxPtGjFxDoGSU2dGJCLfCJPRNErGYRsU61vBvrP6HDRa",
  "key2": "Rp9BpEPJrxgwySXDKyajdmMUnwmu7BJRa2PfrtBLatR3rWTUkxNwzXoTXHnxsV7mu1Nc8Myg1njT7UHJiSS6wNj",
  "key3": "64aq6GmopvR6qWmGHxrCv1W8hTgT4Q9ucYCFE95gj8LARGCoMJrkXrFVZtwtVxnburdVBY1d1zvhB2HzUaSNsf3X",
  "key4": "3TBgiYhynkDZYPM3rQDFuC7sxVs1FkPQQLefzcP1bEmx9ZbA73dZ697kLKR8PvkpcSmCCf6suoHKk6VqRvXYiN6C",
  "key5": "ehVz3Gu3ZsPZ7AHXhG9jA57rgNiCSZaxmsukugjuu9C6gLnQvRjgJ7g8fbQt2ntDyhiGLUuKrAMMCipUtRUCLcY",
  "key6": "59EFLdcMTQi3frJdAnbbPBNuZRxczPVZUhaPiMN8uwjAaWji4uDcebpM68cQAxoUzLRQizrSSzGwjsSwjpGqzxuJ",
  "key7": "2xBihtX6nvyxa1GK1q68YSwtQpW76eYktWZK2SvKZYz3X1HECAcwxF46HkDaLD7dWvXL9DaJNTqhx85XDTavdj5K",
  "key8": "5MH9C6JXwagEL1JGt2HPZaqsboRZPah42GxmJWz8thyDd9Xt5CZ4P6PPsC6dk7MHQrGBurv5NG5Eu4EdZRtsnWEs",
  "key9": "4rtzWWH8tyD8n6NH11hwd29cbX35DFLBKAAKMSNfwyKsBGN8Q74SAHCkXvRyKgK3wPN89BJofz3o4kgHvnUNDqDm",
  "key10": "TFiZL3vqrHqbMsWcLz3K1A8BVRATyabw9MZbigfPixLX5ErizS4suaQNgYvvcLZiao4qJ3yNhbfR3qozhDtvkQP",
  "key11": "3UMApW9u3DrnBshZRSTUrSkvZLYC7n2hAj3Kgg15YKge76QXp2NvTwCn2bE2gd8qQY4CyBwcALFt2ECqPr7eMSWv",
  "key12": "38YycKvxbWRiSmPrwK7ZejDuWbN4yPoUBauZEro4R4hyk6ZV8UQmoA1V6Znph75mkXu5q79EAXmzo2CrMDZ1kTQt",
  "key13": "5cn882FPDpdM5nkJiGE6ba1JGCrczAVFm7nwccua2MfGDmwjrpdDsHprP3gfYPDdp6nWkHfGyK6f524qhSn9rmtz",
  "key14": "4rhrf5tyjE5DFyPhWqbuwRkU64aX6csKAEeYqW5Ki8dH6N481aYSLwsQeo1SnLhGwbU6BKHesrdF4Pbxb2iT66Wz",
  "key15": "5JsqPfFie9D8PdDGwX69AVCCosSjSqesYoZsGvnXojNJF5T3uZRjq2SDwn8h3m8JXxgDoRD5oitxyFnzo1DbiYpU",
  "key16": "2pLoUjxWq8M4CBppW8LroH4ZxaCNEkJ2uH2Zr4sJUHC75Vza8XEWZKPuwneFfaJwhNJcdTbCy381rfAB1czHC9LZ",
  "key17": "Hzg4b31UzEJhz9h41UNL66fuevAM5cKiSxRGUXsbZKN9bhWiQYnyC1SL5XE8oS6oXW6fqQqALWDdBiEnLoQB82x",
  "key18": "CsQGyp5B9CH4z9kH5mJFunWXmCNivaK13Af6hCsF2zugPG8XJ5PoZgJkNpnhuDjyfVUgvkxiW46fqM7Gjsi9a6T",
  "key19": "5keiSFJw1xFwdvazKr2Z2CvKB4g16tGykNeZC5hWJwnGWURSjxdjujcsonD35HwiHJHFtfp4jEYfjFvuUc3iACnp",
  "key20": "5tp22PeTiBVGNa6xD55accDjvhJPGAAEoJeVxpmADS66JVADvkpcQ3GW9AGMD1UaPTZj2wZ4P7pNNhmvdzbRDxFv",
  "key21": "2ZJrBkR2D36ff6Ho6QE9VugBCGVsZJ4gkmwVDW9cYohG33dM1u8TrugMRTZthZwNUmzuFQAiCMq9BqrJALezomR",
  "key22": "4YhiUgYPGV5oh1wiB6hknFSVugHJgPHMMV9snQ5eKzbNi86busNHqpkMRGfKgJ5Vv5w37RkghM9zEauMWa9TnydB",
  "key23": "TsQwAG4jqZhDYkJPpEW2wb8zHR1DyMATeCuzRnVEDWRdjErvae8FAasKt6sXcEu7XeztaJdoaEXfBPkJBMG9zr3",
  "key24": "34e5dhNrSsVuFbitCt4Z8z1MGsBMFZenhmZXvnM3MfD3JSSWXXAb7CPA5Z1A2AeDYvgq1DTktZihB1BAzz1ENxX",
  "key25": "4cjmAk73z6rM2ggPU9eMk1tGMW74Dq3exBKK3wWFD3DHEZXFP25JDdUfDLegChepFt8w5B6wfjAShYJ2JqiDzEYX",
  "key26": "4wBDCDNwtBznebSiEuWFpJFZGevm6UDjCPTV4V6YoKSUTU2gqwEdWjgeeWSRE6v3vMMDjXhH56QergWShqg3FNze",
  "key27": "3mtKgvcRuQC2qSNPzgDtmhHq8FwNHCXzQPHt38HArvq5upYJ732KGBFhvenJMx2ouSEpgFZSLgbwxp4dVVvmTURq",
  "key28": "2fJTxoLT4drW8SCxAARH6K3QxfbYVMvrtRi8dZqoMjtNFBbzK2dqMyrCuSZkvxR55tkNiw8WyvkLpqZyoqfk6WJE",
  "key29": "4vGUsCDMFybLzMunDpWfGq5tT2Kes5Na5vASGd8MsJ78CPAz3u32sodocBLQ1nyZkj47mo4m1UG8qGQ1HNdhk9YW",
  "key30": "4Z8rvtF17NHv6bAN9g5aRmDR56aGvbTohp2wRYMHdofPJEGrNcXiPSRbFMTJEiQTuyJgqXf3tw3AAubLRH69dbMH",
  "key31": "3PtjpBhDCepwYG5qeU7sn5oPfRfba3LcGr6ZvJQvzoRG2EcQphvBhZgsakQAYR3gtiFuU495ehEAe57qKXXMVGK",
  "key32": "4vrnH9TDQzPLygqvW4GWUJSwH7WMygByxHiPAZifeu4a4mQ91hicBqV5uyqqBFsYEstTMhYzmdhydDNwVHVKJWkj",
  "key33": "5jDpaR52nw8Dxo8G8tFqrHvKVmdSG6yHsPvW4TromHHioQcSwAAQ8kiyqCbVEXX1DjhpcDzkBVF4gNFxeQRf9jSo",
  "key34": "4sQRrMU6PxCBMwQAMSZqv5cuq2D78pdULtatcpTM8VHka5CMkEv4FtyoaTpQLRPasS1FkhHF8aCyXALpMm9gZPpF",
  "key35": "44KCUn7R6GhXzuLQMEQHEHwxtcrR4LLKbchpAP9n44pnWdFmYtVSsKVdZtb8urrxjbedG5XhySuBWBtfssJF2fTV",
  "key36": "2ivuiF2w5ctwPXGcegywvooX2yTvcAq9y8tWNuqpEfjkbqN5ZZ21akNQhvJR6QVSwm1jULYrzDHoRxzFgha8M51K",
  "key37": "3K2Vg4JkAw7ayQzTvfe8uziH6tW8d1SJLcBuu1Y1wfG7hoy117EdQNLY7h5oJGkBt38YiYjbsyqdP7FVHcBz3tAv",
  "key38": "4TamqbnXvN1T3qtyhaBdCbdJnWtG11oVoAUY3SERKu7WLsVnrHQjqh3yNqByUwoK8oqRgumVCtv6CebpLW8R4QZW",
  "key39": "2rBRbAQyCQvqAQYv4GFiW3gWtVk245CLJhZmEHTKUdajevvpShCn8bjc6L91oPXJ6qR6dyZ1syK7q32TSv2kFJdM",
  "key40": "4nvDkkNNmHbt5qGPew2XJTwkFJScNLENhHwSUidWbxncpaWQkkYUP2d4BfFYw7vrQmaDhXLT3RF1arkJJHHqKwhw",
  "key41": "5u1fB1pGorX6pHphdrQGyjXqzhxzpBpiNL7SYtTYRHaCXfqTYCXFh3s8pX83ekNJchDqt8MXFuHvuk9Z6DeiWP9U",
  "key42": "VNgawZd87udFHaQjd6wGuTcycWLJqE9sK64465m6Hza9M5XHkub6q95Q3NMfa4pmcgmL3NpHMR4Cq2ffrf7eh7N",
  "key43": "2LcqzPQZcQ88octb86THRHUFnJ17n7YcQ85LSzoBveGTWrdLwjCHNvaB5mZEP8S7twC2BYE6tdvNS1GvgZz6yEfD"
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
