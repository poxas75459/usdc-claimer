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
    "4DKQxaseqDKat8BTVMAXae2HkQadtNWN242AKkAJzuYU3qBejC7mVM2BeJDaLYLTAmvTxW6L6VaNRrE23wf4trCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Un6mP8xuoHuypF8atMBAT36wRMujaYswB34NmD6MpRnSpT6DKVYUgbCcX39dvLZhh1hZasazvtA4acZLwBaTor1",
  "key1": "3xA6ExNZVjS3Zj4wQTTPg3byLvAeYVNs1fH5TFLoDe3Rp9FuLcStuWry7doCP3wPtcoSZDB5gqnCXb1WMv6ydpDs",
  "key2": "2zowYuH6DMEWCajMgQUGs1aJaLKvrqwjoyxWpiXJtdiidnJb3eNCUrsUdCEpMbX6JhGbWrXVFEfh5tBvWVg1E7Gr",
  "key3": "27qFpN89juyv427oaoAYS7VqZM3goVKRwQdFTdpzoDafH3JRzpHidAZJwpPWBzLNiz3HzJbq4QCLoZ3X4th3yQFG",
  "key4": "2JhPSptCL2jBunJ69kzovVkjkdrxgg16yg2NshoshSNYFwkdfASrBM3Hqz7o8RnSTZusQFeV4Z47Ksxpb6hTYCeh",
  "key5": "5uEoHJZG5hjm1k9LZMV2TKzWgvNprR7fvZCiCQAKU1wSU83Zh4QzQ5vs9yPmm82csjUxk4TCNVB6hxB6XumkE8rJ",
  "key6": "3ypSqjAcu2MW6TmS5PPVzZMwx9UQzSh9EStDLwXw8BNiV2nXaBqTMnTt1ycAnB5kckF3v6RpCgQCBTM4ijNey7Bc",
  "key7": "4Lr6E1AQHjcrrEuwiUyKPTi5thnKpcn78vFZryiMFTZg2pdqEqYL9z18jQxyYgzanZtCQz5SpcPAiAxjmwpmi8Fw",
  "key8": "mMHnA99QHoW74cDYPNxUWZL5pVoZsKSczUNqFm2B8RhWgvagph1RtgcQNb2rbDemE7LSULmQzAmo3hTSbiLvgKq",
  "key9": "hDL51n8Cmcd97y6rZ6bkJCu5vCfm9ThSKv9AApztAHJ1MdLF2deKSjqvHhTGxctBzjdeodkrFpAp4VW6PnBPqV9",
  "key10": "bc3XLk3icsfdTJwcGZeknUgEnnpS7nWJ144zzHx22JQBDJeNe9nkMXSiMN2WaWMHNUw17mJKEV6fPkT9ecnFyyi",
  "key11": "4jsxtGsNJ7vqcGwkHvV3eU2fH5GVAyBiQu8ypcrvudQzgzxeYsxbmoFGfdBd3JviA2J7DewcbDrYgnRVUkdbiN8p",
  "key12": "2mdYgU3UmN45yvEc94T4yaSK6HGzoov6J6ezkz3LqEeysa7aBWLADGWozFjQgqyTFysGRKkEt6Tztmy97HkKvBQ5",
  "key13": "w2TYn2GF152MQNnm4eRfNWXkf4fUxkeFGdVsd2kNdiNcMwQDracD2SrKpEGXcwrYVug4MM72psvGXvv9c6Xzmyk",
  "key14": "wTV7sYLC2kwRX4xTGVesBkhAxcCXmzM1pchPijwHgUhuTZToguE4az4MQ25cfhEmCD3kqXmKc4UrEdBpemPSn7R",
  "key15": "5ubcHpoA85MDKsrfSwZpMNtqSMVg3s6jcwCdjX7RZjPnJuU9RoYv73ZPuDgqshbGUTgSNbnLx2jYts92GSwKXYkg",
  "key16": "4Q6NEU2BpWT3MHVEXBxZMFMZDjGp7sJcyFX9L3nt1iPavEQMyzZkMo7NN8KPrYjr7ozst9M3W5RDux46W8tfHjyb",
  "key17": "3vRsDWfgdcvUDUgZmhWJMTi7GWXGkjHSLUkfRZ5bSSp656647q38ybWKNMFGmfk8rHnUrCsGccfjjXghHzfcsWEG",
  "key18": "Uv1ysufTsvFJn2p3ijPZ3eD5e9hXPXYAbp4aQnNEUZoy2YfE78vGynf2jBakdXgZJiuzB48KSRpDzJniYUr6nGW",
  "key19": "48fXfTz3xPin8shej5b8T3HxNs4bsrm8gf6PrktmLC2EPwBUWa3FX9YMR5h6vvSRdh4B1N4MURMe9agiTQTjGU6U",
  "key20": "56QkbuRqXjwjWqPPjR49XLdo22pWW9CrW6sSk3C6Wy6T9PaTj2n5BFNYw5vyQfgNLFQqnEGV1rj38D19mjYekn1B",
  "key21": "621VPBNGM6pNc1iNgUfAovPgZeyLrNHsSxjmp52T2QT7gPTogdC6g1vptbmykBd2nZpD78EWW4JxqMwGU7jr6bn3",
  "key22": "4zvH86EgHBFgy37JhcynSz48JTQmtsMc2qQUEG7HcJvVciW3QnVSmAV7X1ucCXRa8WEv2nMgQRdnkggKboVyN7Mq",
  "key23": "3XWj9UPrwV1hnijuqEMKb5ZD4nmnDmuf3yDZ3r4XPAyadGN7J91Jk9W4ufV6hKfTSPko4f3qDVCxLYHzpE7BNQXz",
  "key24": "v4pioBuFWFCQQoLTWEwu8JzEsxCNuTqZy2BhEMyZHVbfnL9ysvBZ5RNJ1zzn8ZiQAr7s7GZkBhgLaBKdtVeV5qU",
  "key25": "4641xTQNpdL8nN7yPtSUiSAJRzt7oFXpqEbhfZxqHxBPCmRzuYfGtHSNWVNdfjg6tLfKoBtCjtuanvFEdAYTxSqc",
  "key26": "3gYJ6yHZrpQBfL8ajLzUEvbbcexM6ndkBwXrq7FrnU7SrNQnvaAoCL2NGGHvRBeCoC1AhVnki7CQTLD33Rhc7fgC",
  "key27": "3QTGSuDkfAKMrtSNgYv5hn4BKM62iyDe7cpCCPY2efHUzNCT8kwiYkUmAzUsvNn3RjvXGNXQqArZ3Ggvkn49oZjE",
  "key28": "3Wq7yYEyL4G1goybLzCQRbKcwVs3r4hxssk73NKVB6YyLNsGrB3KPxmxSNuE8VkG3PYKAX28Qc6Ni2rdYeSVtA4X",
  "key29": "5m6aP5ANvuZs5ZDvZz7NEgBuqjuePAgkkXYp9pKW6XTNLTj94n5o2YWDL1h9eAZhp7sQCGbbYD66U3wxNZvrgDw",
  "key30": "CuGeNT6LMSNh8MZrMrK43HecVcmgHu6MpRKeEWmkq2Y7h5jqNfVJV1ECPtmFQgMeAqD7iTaHbcFxUS3h8JEizFp",
  "key31": "4PJG25FVcN56PazwyNDZw7xVSYxGDAyuzcEnTzVECE6GLcMaFw4zBaVuEoKQwsMaL1HwSj4dV2kL2z18HqbQYayk",
  "key32": "4o5oVHwScaZuz61Jyzuf848HLrAHtfzfpRY2AwfgSrQifbyuKiB7SSV9qHM68vX4HV9sTBB6QNBqVTHKLurrvN1j",
  "key33": "33Sr3h981CLFkpGQeJYwzDcWgby1QqaQhXxby6N4c19h3XXN5Zpc3xBZvEutBWTMfWD4BULaJy5CQXe9VWKAR7Yp",
  "key34": "44mTgYSFvbbuP96eGE1YbW9eDQe6X9kiDiWCTw9gXhqwYBdqprq9283cuUTpPrwsMHFPCzehD9wWtN7yk9wnsF6q",
  "key35": "4Aqu6JLyPUbCBUST4v9TTm9iw8UAGXfwT1g7HfDX9i9x336JrmMhVEmC4m4bZ5gMZS16W1Dfmc9hiYrMAkv2RZt5",
  "key36": "675HnJeCkNPPftRMDbHVNP31YsCyoG3srzGPyUG4zzpCGqjuCYUADJr8eGJSGBVx9PMEGqvDaRMdGLSYwDF4JLM",
  "key37": "CPKj2WuTkuaU1zoTMkws1UqCEtHtyDwAJJFHBdLt33sSaRDHxhejE7JFCrppSZiT2r1uD3ngvUb7uz28pCEscW6",
  "key38": "4PfTk7oeK5ptUoRBs7vHUbHF5FvTrP4erGUaZoQUM9FjhvVWM1ny9BEkyRWQriJ42orm9i3zMmQ1XGv31qYJZpGk",
  "key39": "4SyvjVMdnXC3gUR2TAJ68nNfgLr22gwpWHpZMvqCoQbyQXn1vPYWwg3FomgwqqGBRrS9W4w4S3rqYr4Q7iG9Q9Sf",
  "key40": "3VxmAeK95HB1DXe4QPgEpayWRDspti8CGvaPUukATisdruiZCkm7Cj7N1bTy21Zx3Y1BimyCP42tMKXDbCymioWF",
  "key41": "5o9N3hyoY7PpkhJHmDLCBZxSvDcKqwJeZTwMiCwsEBWznvdKm1DQM5FbuVLSqPE5zmMsjCQFC1hcue32g7LDJ9Kz",
  "key42": "WZGAaGras9WT5MzZZ9jiqVi3eB2JzzZfFWE87W33VS8MvmC7caMEu2HJHgZj3fetb5oVvKoqviyx3RSy5hUWkst",
  "key43": "4vVT2Vg9xwPFgWQFXVShQAj2joCwfKf5Tbh79se3pJrZvf9562dUGRfRg2Uyz1ASDmBa6UkjLGFKXk7717sZxYzn",
  "key44": "4cyfeNS9mLQzEmRS2P798uYqbRDLES31Be6bhQPvooxhMSWbhgv9WmtJDgFTAYTasNKjkA888mMJo4g1qZjcqcrE",
  "key45": "67jvHydMoesqdub5A3wj6XvNy5wZyafrbiXFrJaAec8saVK4VnDTHUomS2bm2mwZumv4xnDzrxM7McyDre3UKupF"
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
