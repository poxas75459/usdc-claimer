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
    "7Hv8MKSoEEzwmFM1qfatV1hnGKemgCWWu9475W9Xj8WwFxvMSbRBLexUVu2fobByVAwxZdYBkmsQrbRyPLtj27w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ceZDjEDX9yZnQ5gmqVP7TeqgntshjzfUMpUPKPSAhwHZ14gg4s63xvn1br33RuhUVsCJLcX9uqBnMB7yqRhNATW",
  "key1": "2hH4Y4KB5ccCmajXvZ5429esCWMSSZSmqqP9BPMx7xNQMvsQHk66irssNEPRKvUUuiWWMkxii3wUPCo2debDiqat",
  "key2": "5Cp9YaDPaAx1H4T9JR5NpnjEvRq4AKpB2ZApTVsadpq576jB99ExeWkYZuYh2bVisEuboyY3mHcsdx55prfLdcKL",
  "key3": "5kGBSv6mwsXPhUWVaSEDJH4u2AoZ7krqpN11kN54sjtUphhiNKfbHe34Gm28mP64vNpxXWV2APVsMZ9nwF9pYRWv",
  "key4": "4e2yT1LZcdaUhLMduQgWqawStpZ7Q7DH8veyZrWSmwzo54MRMwDszG8EATKraRpcrHDPNr9TLpx1co9xzrsqpccZ",
  "key5": "qbkFetqS3cdjJp28T6qmWnhf9aJDNYgveHzLwzEjfsBS2rQWuZbqcshfmGXCikhxyhSVk6LPD3WuTwZjrcvcjD5",
  "key6": "2JDEZS47Tnmk2wXJ1A5uBKHYGVVAT4K2H8yWu1j7Qh3AjuDUUtgkzyfUJTU1Zku5iAsTBWHgAnaSPrU8eNHk8sMV",
  "key7": "2UK5DPhp3HQZBu7YE2kVEgiUhBhaw4dg4BEz8ndbJxRHawf53M5jwhGxC1DeRX23at9gVvyNeXgm4VTttFGqxsyL",
  "key8": "5wZMQBGav9uAUrosbxbxiAmWujnbq2ApPoBCsNahtW29pwdqDTK3h2soLgFTeXyPgd8KryQue1WmqSW8WsNJrX2D",
  "key9": "3UV6QDdNwiFNHKdXmQZZPDdDBBLBQ73UHDY6FAai1Vvr3GQnCagaUdGApuwyTp42HpW4ZztSrhJnU2FeZhCLDQ5e",
  "key10": "2p8QbvoRph5PgbXcRQXjEdDK8vDheqEtqFv6bpg7XhCCzLrSQ1GwMz6HMDVo4dR9WFnvP82StR4Gg77MB4vqFRZo",
  "key11": "qJS6Up5uKBH56wjvFUFBLaUSMasfJSqF6yxw8TNGu52NgLKx4GyoVQxyfHiM84kTEEX8QAQyzbJ8EtsXhbbyRJc",
  "key12": "28TtY1GAnV1Br5ChVuXDrgU38tDc6fsH9nj2XJRsxMBQnGCFG3fxcTBXENBTSicqpNAPGRWo9FPHaeDNoHJSmJrX",
  "key13": "5CNBpZCU4GSTX9sDev3xSyqG3mcAwMmNPCLdRigc28WviVJZCoG86rNuiUb18dueN17A33ByKPx8kQmvWnJQcJYo",
  "key14": "fnqiEcMyAkL77aQPqY8EbjjNaMbuSSmKvoKD7243YYZX97G6yoZHBMfCZof9ckiygHitRHnjjvgevaesdUuh9pN",
  "key15": "64ysAmNbPMsVZ1472VdMj9kMYi2zZComuRfaYXhS8G6aBcQmTjDvQRtT4a8hVux8c1TRedFeCMW7vrALAm38XXM9",
  "key16": "3DGmV7Nh8sjoKjMoEDwKG2hWfpkcbAWQKd3JJqAUso7ubrGQ6cTX9vM6Tb5FpuRR6UUCcwQrw6s7EaqfEVTDXuC",
  "key17": "55ZRrD3YoDzuAenVVG2Pr1Df77U3rdHuYXkuHnXFPVtQxDhrMyWXykmC6jVRJekCj8Sva8AXofALKo9jCsR66igz",
  "key18": "YJdtCfH8U8XaKA9meir2bgjZ583GCyzzPumUX8Mga6vK1Nrk1SZeFiJyKNrAtZJ2ng56fCzmTwg5vkAqo6mqLML",
  "key19": "2124VgqnSF1GnVXxMTYNkumCBY5Y847wueeiqVXZ6Ukvi5gwCSq9tKtqJTKWE4mQf7vnoiLWrvcW7X7ktL79yQaU",
  "key20": "kbRqpukiqZYdoaw3nBFwyoadesb3oMHwgsZWCeMr34zCGWVp8fBzTNLNEiJSqxFSdszLDB6XUQVEo9NpwiiiCXo",
  "key21": "3XtUCvwiqhVtksz6r8VjX2QnEkRXWeJVgXXnDDf9ffkRPEm7m1RRGDX5HpQ7mtZoKLDf8wB31fi5w1BvWLoEJZhW",
  "key22": "5atyUv3wCqieDKRGHvAcT51GAYE2JjpN6GDyeJDEHF3KeNrgGo7FR4j4ofYuKJa8BaDwa4JMisw3vjN5rdZsd1D3",
  "key23": "38bt66GrBKU8UpwJFNsHa4itHCBmDuDjGyimGVPysN5M9bPszDY6eHHrtyHBtqptHP7CgnoQGwZA8WcMxHHQ93Fr",
  "key24": "4Fyc8XdDbmiPafgrBy8VxGNA5R9B7AiUGibH6JdKhFqDJsbNx8nLExQvzDU5w8Tbm2PjNRoS6jMoUXM3WaLbWoe6",
  "key25": "5mMpeXKrAcPiRK6pTmeaGsKMM5UgsNWgWcFD29qhum7xEuBF6woGiksPTp8CN9z2sXN4D8mbNgef517c7fviaF1a",
  "key26": "4DcdSVb8tzYph8d17KgeZyEuaHkucWgg7dCRWg9P6XifPUsnvzVY6Wu5KLrQYGKnHA643GhcARMHTzPEfXGsXJW1",
  "key27": "5XAzWDxEiQ5WzPAJ3EJdSUH5QpQuvcgVTRVvj7YomCAHq7n9Y2nHKdLhcpdFHPNfQh27jQiUT19CY3mhJBpdwPHR",
  "key28": "3BQ98KpQdFxP6KmKT5Q6KnNgW732eDa6xWPX7EPfxpTDVQWYLtnjvURCKEoTap63auA66ZybqiMcMyuRGSakV7an",
  "key29": "btpG1px4VCq6oMfU5UpaxZUYvknYkSmWk7Kmc9uwk7pkBztGmtfjFWFkG3feAZwKqSYFzG6MvWc6VgMLG55FYJN",
  "key30": "AvQE9CjWifY3ruYL5MK21NG9oP4y89aLThHha52EDeDpnosbG9yPKYvyoGvaZQWEB3mbGL2i3F4hSWBkfCLqfSA",
  "key31": "3m1VdbwDu95uZWVrMAK7S7STg6dstQAWZHFB67PXbpUd8SH2SnfZFHLGoaXsNtNLPr8bnGr7gvJeGzesRR2zuowX",
  "key32": "3fknrDXPaygQATJipJTs4FrZGNgaUDsicvYc58yUJ9fNryuGbNmrE7hLrzXDwRAWHPkTxYtGBAdrfkG3ghF2SGFt",
  "key33": "9SNbvMdMNWXBA3eUPp3c6SGzX4PNp5hF2o3r73wdviyGZgMiCKuSXiMhsfqFEVdKXJXQoDDL5Kc73bmgiBGtj3G",
  "key34": "5LV1atqAnoyu7yLP1LgVK6Weuw3mJpN5QXrz9Jh1fnRnuEvDyKVNScqBTiRDK1GqB7jaGvvCRuwzTGNoKzmzCAM7",
  "key35": "aPEY4KDc2voiq7HQkG4c6e1FZRQp3gCbZbHFa9ZRpKzMws52568xoVF5ALZiuEBZXjerHg4s8PwVJ3YY4ZTVsNm",
  "key36": "4EpUHVXJsSk7uZt8ZJ12YnV8pkmUn3GQy4PSVKAFLAWBbYTVq2L8riktkZV7WoubcUUWG47Z3kHbARynrLcqwPVp",
  "key37": "4xNqHNuXWXVRQyyG7JsUxw4Bv5CT422qeWViJVep5eAVXokY2nVQAGNLUJ1DMVEEAcuo2J5JuzmLPyTViA2QJrgt",
  "key38": "2rZTZ2y3jL9wkWp62LBK9YFVXrSR9CeFNikRRekQWibTTT3eZc4uHZKadJbT1gonZ9WuGJ5b5gmdkSSGnn48isJG",
  "key39": "3cA1XfFAY1YhWDt5DYaKFJ6v3uyXXyXwZaEKoniqnCcxpiMrMGNShuoUNrMqTSYV7GrhRfu6hT8jZ71ZJLFqcrPW",
  "key40": "4n3g73JKWb9at1i4X3zVepRe6ChDuqctPi71BQdmwVTtqiVXmnYiGrx49Tqs5qUgjip2DN8uhvazQ1k9ygMjMQK8",
  "key41": "W9M5zE7gL3YazgBeYxJd6nPuY2oaPoRYCVYApWvZU4vkPB9U7Nq7wAyfCrYxgcGqtLtsuDfmRxDJsrLNUQkyf8k",
  "key42": "2AqrmMFib2xvAmqTBS9pU5cHfN9jjRoz1EiNgBW4Uu99z28aVk71EmUMACZqhe7D4RzZtgWUXHQ5v3xWaz2qpnVF"
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
