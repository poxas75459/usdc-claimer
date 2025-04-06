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
    "5zzMPeLcSfAER5xZw6WE3amkEWTbVY1VNv3xBTBh7e9WkhHtLGHi4TpW7HdfagEFrQkLzrthz895YxZtcgzMhXQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YgbHAQCqRbfDeJx5m2qXn8eSpmYbwKi36HYjY2cLSiaP1Gm51Mt4VW9DZTLmQHy269mEYZ1rdAYopki7C8aFkcZ",
  "key1": "q9BqEaWKDYFFd6zVE5Qph9rHJqn8XD6AvCZcxQXD8T3wDXphPdyJn5ALsxMmK1BqjZH6JM1MwFjGw5ViD6hpAFt",
  "key2": "3AN9SoAwaKFMpbefszXzXQHpiVTFv9JN49fqvKmNJz8RyWzA3iQbvQaj35WTGAgzRZYbpPSdmHAKtiLNw5EQvFUU",
  "key3": "3VtYJnBydi6UycdLZVNUBWqy4fJ85dw44kn5GZTjmQbNPAi1SMvmPGknH5R1DGE6jps1r9fTqqZW3H9XQnUSXQo8",
  "key4": "62gsje2TJpGiFM6m9CqEQ6reAPj76Au3hQ6g9ZJ3nvZAfgCSLmyf6LMc1LQGHvFsJH25gVKH8S9jzHz2wjq4jLR4",
  "key5": "5AQTEsY6SaLAFCuFEU51cnQ1mHBCbqdkm81LcD2y6wdjNZ3oyBfKmNBTBiNHHQskRaVm8wW1T5uieJTf1KynKuAZ",
  "key6": "2z4w7QkkRrxoZ2UEqYtzZ4mD4zS6KmHsDd3ivbUqHo2vqx2KzXUn2Jixx9cgQU7pS3HLhuNQzqJHZfRiPDwxoBXF",
  "key7": "9vscaHcvpFtfW6FCnPnsLQJ2aatw9ow4G3y7fXNqEzM8rP59oPHDBhbtP92ZgEQEuT7xzf2p64MFEU5QTkkCStE",
  "key8": "VUaCcsMb8LV1kjhsQDLydQxQKe4XkbKkeQ7KVjLYvr4ZrJKhj1qJvtmvYuNDxZUFXmWHEEFuoSt2SCLLrxa4nYC",
  "key9": "3tmnk12Lhd3FHxqhSLgq3uq7hwpvuyZ1ttUk2pmGq1g4tJ14qyda98io3vSVuz4Y38dSyavfehte8WHNy9iS9DYi",
  "key10": "pF29EZkX8SzDXGfw4MAjxfsjcekVcGgMNazJF5NZE9zMMQTR2zRYesHvA5K5fDmTk1aMThFpv6AZKgBVpYm7YHQ",
  "key11": "32TULbD747eqwikzQXPgFLBBf45evu6c4k1HAD8VWPLH6wCJCBReKLffMbu1UoKaTtv8hGFrcw9aSCRok3kM7RLo",
  "key12": "2FoJAqbiA2xgc3eDMJZ4a43hLVR3dz4V1s5YuXN4izyQH6wtSw7rUBmwcz1J9X5Zg3RUJfdy77RqWvDJtXDEWB5E",
  "key13": "3xn13nWjGHuQ2ezqNMvPsxXp1P5k2EVbUDkKPXpGWMAiMTdx7BmrkCnWbLoMjBDfgvYwU2g1Xi1MFXDJdBeXj3yK",
  "key14": "34Av3tLWkTdJgFVf6PnZ8sFXDo6kEtUeikvBGM4cetKv2CTDFnN2fVBpgAaH3XpeRMCoZnSoAiSCyXcVVTQBpyCu",
  "key15": "3dC9NtPDVXRy65wLqgLSQd6abEE6hwCj4nNNnC4gskT7rE7piLSKNULg59EFKhhvT4QqiU2SrkYFVRHcC1AqfvBW",
  "key16": "5KR2QuRyuoRunYEDZHa4MqCisFsX3uUfwxSDZUoth4V1JcMe5Jpsz8HoTgdPihJr3YY5HSFfoyrCNBoRGWazRa7",
  "key17": "3WDGuWtb26chEFSWRr77LtUeLJ7SxLd83itFVLtfeHF2Tzmjr8uW7P6UtxcsvNUQJK2FRaZPC4PUQ2EfGqbVwJAg",
  "key18": "2X8dCZPaZdyXWJ87yRH7qwbAva9DriMKvLud9eD8tvEBtDsD2MY7nmdkresQWA73EwvKEv3hrSv4ZYZ9eNKoN1wp",
  "key19": "2VfxmZMT7y9ymkfMQnZ9J2yNtduE933h5cSptkzuJ1AC9CDYahgYnA6HDwrrMmG2AzkRQ37wuJHdz2i1Azp4mb3P",
  "key20": "52zcHj3Pk8G8okWoAbiYUUyfe7xay187s9F4yfMiKPYYqMjrpUKBrUJyUiyvRjtD1PcFAaJVzXVz1gjr1yjMFoCj",
  "key21": "4w4kobWcPBTQzX45YcYyhbLL1oRve9tHLnTXvgTbTiZxK6FKPbbRk7QUL9v1aak95JHiFEtxboo6Lp3Z6UTgVUM8",
  "key22": "2nfWR8HquVZoNBa3GtZJMfkinan3yKU17EgrPU7E9C9xY2fzL3FUThowguAFgcnx2Lft3qQmAKoC8pAVZSUBeHSv",
  "key23": "3pYNz4wUnJsuc6SnBc3W6Gq5qNczauMPKZMMHVX6eBY6yby8GJSSYi1rRuQW5Q3ZVCoJiDcXkLkZiEabLuTYrjN3",
  "key24": "4teeM329GmACLUhWVAPYtg1XGs4U3dxiXwwdx1A8ShEvB8EwBKepYiNefjD7evWUYQ5qUsYzgNWoBkXacnMttBCD",
  "key25": "3h8zc5F8QM9dJ5gQV2dBArtKPYCEHrR5hxjc1mAzPgyGpRCa5prBxs2x55k5x3AkawKHGER9NTymGsSw31whojfN",
  "key26": "59zhMS8rfe5XUHocS1RdJUV1tjnfyUCQeomM36w9ikMarw7haJ28ibP2TiqwkARXp1Zf1HmsVwxHzKrcUzGo9Xcw",
  "key27": "2ynEgwH31xGf1xSBqTrRpZEAqYain3VAi5FuazHcCATxUd35swRYQafeqK1hZHNPyxepugdBPLrDmKy8Qvs7PtLo",
  "key28": "2shZPxuB4y5wfQBFjYKVMvwSQvJTya33GdtMMtLqhSy4bvXsM6Uumn4acie34EhJdeK3aYuzWc7vmquCT4S8e5pV",
  "key29": "5MFK9Bzrmf2ibJKGeB28sFPVkqX8AbKZS5d63VALh7devLHoQq5m5eCXTBiBfTCqK8GJAVAHSqyw34d24i7sSKwn",
  "key30": "3uzy41Msr7FUHHD2wwAQU7azrr1oGN2uwTsLTYbncx94iZSRcBhgBkZRbdPHYSRFWtcz3gBEuqnPZHcviq1K8Nrw",
  "key31": "5XV8jCrvKdCngbdC9AkJU44FFCeWLNhgBBbpJFAN7yE7nPF4EXgTan5Yku7sdL1MoiegEXoBbfEwxwVVuyNdcmir",
  "key32": "34ddbtrVjYvpY7XCLN1EB6t66wvmUiNnxBmFUs8WbdbJiYGKQiCZhSbNrJNFq6Jjr8p7kAzeZ5pkZuDfb1ixzAnH",
  "key33": "2cr6v8UwZnX1np4gXHxgCReoHkJqQZs2BLEFwjYA2Uxb28pdzhx6W7fZe6amVhgJmxwe9UNM3iuSkvYTLpuZurJf",
  "key34": "4QZxo4WanJfuqgV5ZWVghi96NtrLVGLhrZqM2zSss3gsUhbBucBy8QdR1fDY1aCXcMNyppVJNMP1BuHuMA2jWtYK",
  "key35": "2RoNjcyHxR8qsdyLRKx4ku5NS7FCQ3rBHGngmgfajNkLXQQJe2ixYanShy56wFG66EfPb7WvRjm9TcNSMWU5kAa8",
  "key36": "53KM9KHJezWFraiDbK77M9FvCa2UJx4gFhdqB8TMHmPaiMiNgZKbgjFx8we8z4oxiG9JTguzzn9torPXZ3aBt6gt",
  "key37": "4xpRMqtH7Ng7qnZMeDy7Z9hp6EknLfJrCR6wV5CTrkCAwkkPthrzN4UaNnziZnDxQ2mNaC6jfz7Xi1XpFzso5Pg4",
  "key38": "53BWEBRYFELenNLF7fQ7WqjGdr6AVyHwdPY4ymz3TF8csAnQ6mNw4wLvZjkFpyiW1g1AcpCPmyr9NGYka2o4m1om",
  "key39": "3GvZxQhcvHVBFKn6HcecDPRE1VGMYjRZRGxXXF954YpXHGEFUFUGUbLXHXVvSyPvwEVwgY1rnYMfjGBTjAtyRwG6",
  "key40": "5bpsVKggAmC8Ju6zFVrTfUdSrvfYGYr2nzQqi9qFYaCKZLY5FgkdwNjAneB38mtgJwtDBYwUWJqGxcPbTBiRAYra",
  "key41": "S7fxKyHVp3h6YWVX5x6UXShoQo9wGhmGUoKHcuNaMFg6BYEHV5ySVWXnWkG84eQbdhpLyics9nvD3wHpqNBTh4d",
  "key42": "4Jrcq6zx7RgbzMtqA6sj6PnKoFDEdSRB9SW65K9A9H2jr2jXnVfV2vJihzh8TreKzURjYYNGaV38wbfBSYqttY4c",
  "key43": "4WVBtmx5V8carc1qHyJ4mg75uBi73BusWUDV8ibsJ2Fume4FLmLZc7571Cidxn6rC5GLanXj7WLwsqUwGQMv7i31",
  "key44": "sqjvVnj21yGiiZVEymHPyVnH9F3WWr4bgNheVa6cKNjzT6iNrfwj3Wytcj4V2Jr1FqrpFtgSUmKAxkixfa1QA6M",
  "key45": "5Mr3tHkqDLDA6J4C4HBDbsrx7j1GQ6BYZ8hdZrzoLWcfb3JzGSBfHi2QkhxoyjoYCPMZG57JAMmkpDzmvNhGGHq1"
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
