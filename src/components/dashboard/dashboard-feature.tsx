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
    "58haA4yGCv63L3SEVNkmkG8CarQHMCQwZKYgY3CetaZETqohjKDHsiB7K8swpedhA8qLQdDhfzZZ9SxjMUzhmZxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CXSSYmzbrMv9k8z5yAdF9L437uJxECJx4qrQnbcWMpicPCn8PBTGJuz3GfeqWtHvmo7z6cjtHhNqafLzEwJ7FDb",
  "key1": "56WSHATbTu8NtwAiKsv2CUi4WH789n4wHXPSuVmPpd6zoVtezo31Nk21WcPqj1fr6hW1D4p7EEexmvkbDc3GdXZA",
  "key2": "2spoLxjhRnWMTfihqV4HnzT6YyD4JZFaXou8kqsQ8DKXDTsPNuHjCUyP2ChkicGcZ953wQ5S4mACZmYi7TpQsc9s",
  "key3": "4wAY9Ae7vmk2a1NxtjdHWfXkgbp2bFe4DApjRq4KHiy9Qn78h1UG4kSo4N9qufpx9EP5uy1BoFuZyVwmkVrDLk2G",
  "key4": "4wyXaRRPVZHWXhdb8Wy6X9oQxKLBHvyxcmYy8zDCWqF1XdRheiYk5wVs8B6xDsdm1iXLFfBUKZ7v5icEkcPnxNcb",
  "key5": "5eyZYFzyBw5taxWgaCFzhPVbafddHUVoidjbST9XKM4c9RzyHKhfLCezSeXrEvLbLEEg84P7Fkqd3ACaGcBDoRRN",
  "key6": "5J6SEooyxeoWGUCRmYtS38NJsDtDjBWk9f1zk7Yqi3fB8K2H2GWB76E5y2kT8cGdpUNZMVEmg6tpX9MGFhrxVCB9",
  "key7": "4nHouS78zEKH7wB7FbWVAibSBomTZA6hwUuXAFyUcYUm9tTy3VtatR5ntiHf3twdNsbTVH2UbqCcefVJFBUJZi5U",
  "key8": "3egZKJ6hk7JFBWiMVLND53KYY4XVvWrV29KtjDUjbhLZefxrGSRGmygSyeA4TBPiD94E7UiaNBCUn1cSoimoEy44",
  "key9": "5YuknLJUDy6BgrWrVXTSVUShY9sozJAUDoiWBTydKLkeRXdkZgCFiwSVLJzpuUViFJgdatyngygkWPpe4MxpRBTW",
  "key10": "2gknmpPdcjkCD1GQmuS3zgxfC3Fy9dSKxp6LzEJzzTmodRX4P8r2QhxjWKhkz5t1G5dY5UT9oGRwsQbrnKt3Kx47",
  "key11": "522TT5TAsodka49vYT9o4u9fCvEiSLkLXnDdkoHKgYvN66Uyuk5BqepX1YV24z91VUj7pCjXXRqi8x38oXFntQVz",
  "key12": "4oWh9ephrRj3pEhpFXG3SYJV86FNndEvRgWQfpaLgi4v66npDPUJMndQ8wdfHh3hBvoAwrWxDN81XJ3Rcb8CfcVk",
  "key13": "5nwtAEDq1ojEVz53JVvbn5FosqaGcP89ExbPk8NWcUvYw8UmH1NM6E1hwp7yC4iwzExmkmwNQ4bVJUboLs69C21u",
  "key14": "4Gf4bc2bAcTmvVZvKfYbyYAGYiytn5Zfqrt2mD7dkmmYK397HQi8YNDWrLTkJ8CWVaWd7KssnZUKEbmFT7xV8bJN",
  "key15": "5NRzkLGVsUXH9PeUyKqcQ55uVGk3Xw6xrvJgHE9Kj9Feiwb3KgdJNGdW6cXmz9T2enoLLAAUHuyKYEj7qNrkaPcE",
  "key16": "3W79y3RVEFeSivRan17tX4WMwZci2ySw6dkChxRBxyqtvjayYc9cLb854XwZVML1ygfMexEr5KSq8V9mwvVSgzk9",
  "key17": "tQsdPsUCBWVNDBNChUQPr1x2NQZZwtpjJmBcYb7F6KCAygKDXwWD97bZuiFR1GDW3UpfjocoGe37KWHesBmUL3j",
  "key18": "5G75esxXydjAgnqqmp2SLSZiKyFARZaFrokzswLG7hBZRkyf9oNoNHuEtSgANkG46c2Z1LGVVAdf2cNU2APWAphu",
  "key19": "5G8bLWCDMkHYj79QbvCkKRCfsgSocinACELBdcS88nfMBPkkKEsL75iU9joiMSHUfzvdfMaM5R9Nqs8HsQzsHBTj",
  "key20": "5Xa2W3WNoE1jsCQ3sJTvQhyNSyeM5qESp29mGZcTvE4TXbodXPQu1mYJBkVAevUMkmsiAcQNgU1fbb5rV9949vE6",
  "key21": "28QpoJRQ9TLKXziATQSsEKfE8nyCxwmxNRU2tN9cn9y2n87M5XKBsd7Yh9aeU6y5T35gZC37YqRg15nZYzEnxgJZ",
  "key22": "3dZoi3QrSyRhZNnScLmgMcvSNC1LVm8RMLu333ZFSSY9FEYeeLT5hhg6otdVCERmRf3tKqygXYDuZHJmVCtMZ6RA",
  "key23": "2xdLy44q2hjDwiov6eypKvq9STuJHFQiznuhpNBQejE3vTNiNDc6FhV5nM9gqUdpkMgxiCRVpHoxMEkGm1Q5MbAZ",
  "key24": "3s28yMSJwVVzZDRYfah284WWoXB8DDcC4vQa91GNZpYwg3tSErYFa6K75kAcRtzm4VZGU9G3bJ1W63oGrq2E8Chp",
  "key25": "56waSRZsmiyZR3m5pFXxZ76uvPVJ6osYZPG7QEhYHg4kAknpukJGoy1hnrFUwuzYDdnnooddTeKxkdKXftZqmqGo",
  "key26": "21nEVxQByWpQ5J2K1Mnw9R7fxZT8xUUMGA8f8XKpxN2JfhLLR5wLhjNjbB6cZSTyFKF7pJBAN5Y7Wi3xbEQWPJEs",
  "key27": "3fhGxVF1WGgxrss1LVA7cj5WCUz6NP3yWrd1SmK4j1GBtsrWfz7P7HaqeqRDDuSjWHmV8g3FqjrbBfuWCG1Fkqu",
  "key28": "4HEWJRiCeqxg5vTEJXwd4dgxAEsvWdG2hadXoVdZPASUMH1FFL2kP45b3wK2WVA7HVJFibA7y6Gwx7wKAvrocbTC",
  "key29": "28zKVaGBAeqQvDC7cHUeXSSsGzQkCEBrkhYbhX2JQKvKgRjGZkpvakZMFxevEHSGaTVWh8Fa3SEDmYJGcvxVSMrH",
  "key30": "2yjUt1ZaXGbBMDVjMAiHCJrbJ89Y8MpyPTtjs4uPVB4LeP4kaxgYh2HHMT4Nvyn2H1oGrcVBpbNh2tCpoa3tBpQp",
  "key31": "27Dqvg1c3zks8Esqez2EvaSsea9Ezf8Vymx88FXmmoWBhiD5i9t17S44uvgm71kTVuwXUviqcNhGLCnmXhXXgS1Z",
  "key32": "4Kc4WPG7vP2bXyTmMZgVuiMcV34kMZJMtdy5xgWGY1vTiwdVkpnSuCd5GySo87Mm1BzjPZnZTuHkAdfcQege3vmB",
  "key33": "4GK7cwEyzpvUTCNpM4WSYUugZ95o58DeCVGLiCG7qWfJ3fSK6e6jSSu6szTjXSqu8ncBz6nVuA4WtTU7zXk7aeov",
  "key34": "5BhyUah7bqtkEmqpYLSo3ipSKEJy7fnX7633Ms8ScypkzvESKf13VH2Ms1Qj9pv2cE9agRW4uPAeVGLDRZVLvwiP",
  "key35": "3uooksB9VyNuAgx54PG6BYkc46RwXtLqXcuqaMdQ7ovUANEj1keKieRZwB2XAUeNxfNqZeZDV8LghjVsV29WtkrS",
  "key36": "2SQ4e768vvKadd2aqKQjMp4K8MLP9UBQYHXLDzEYh2PBs8k2TWLU3FRMYETrJMzs9yyQrUSReZXn5qbYQohgsY5r",
  "key37": "55VvNxo9Bv5gdYXkQzF8NCNK5j1yCL6Z6Sk37obmRRgGHKEJNPrWusW5PoJe3ZXRgBQMDq36fdYkJtjkWXn7qcmq",
  "key38": "4PRYgM9buD5p8kiGm5yeEnXsPAETGaJjxUYyBntrBHZmaahQfpqirMybfFp7QwTKAqqzgsA1iGoRQ6L66tFf9r4G",
  "key39": "3mm6TMTLLntGhsR92i8zufFXXURnpgxJfSxjFbzjU8zda4CGBmUpZaMhfgigqzWCEq54AnB94D7GWcB8AcKjsQek",
  "key40": "3gaZjCPqkHHeHCVxWSSVkLTbViFPpgcTjPzkuEBBycaBqqjmNhgAgazDY3D6Db6zQrye36mBjbWMqTm94JPKsqCW"
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
