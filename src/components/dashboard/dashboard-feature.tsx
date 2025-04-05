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
    "4s1FTWNz1w5nYs8UnRu7RC8KjxXJkaAyJJ4k2JqLyWpVHFf6JtX9wJttVmRMvwSw95gPDhKRGNvBBkmhsdPa6grH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lwu5fQcBchukPnoTpZgHTnHD4QaXrTHL1ji7H83tdhwpLNipkMRty73navwBNeYMBZDth9K3orH45jDRqi9Ed3v",
  "key1": "oKSfESgy35SoFQXf8HZ5HwTaMdU4wnLzVxfzb81DgCnJUA4YqyAvAqK9Q2UYdcPxhUcRKA9CqzshHCRiV2Ks4Br",
  "key2": "3nRrDLfh7zEiSWdXL3RcYhBteRNZk1m5u3UPducUhYaskUYQuKLzKT9NR34wuJdponUtk3pXbbwfZVDTN8coF7E",
  "key3": "3gjiKVdcXZRERJzRB7pEwfRTVhsWT1ZzdGSuj8Kxwz3UfxNAC18NjZVX9tCPi1sBtxwrLHF1MuoMpA6ssQGQc1WS",
  "key4": "oM3QnCkgVaD1pHWjo9WkxH93WPLPGnSd8SZXdb4KbgtuWgR7kL2nSk9SxhL126E5ma1f7B1MvkYDBEi7Jf3PLdn",
  "key5": "5aXAftxtX5DcgGF4EH1wKVVmcmGZYByz7WTVkSgN1P3fozNAdLFpGQyQ5pXEZ9ZLRX9wb8MJFmTksLMd8qJaX5Kj",
  "key6": "3aqyNRSgfq4kdXYqpqkVSp9sjfwEYJ8mpGWeXW6RFWw8aG5fveg1veoNoz26dKCDHYfPbLmqCc1vWnf5tWp2aozr",
  "key7": "4NQ3wC725u7FyHq3qFWRr7ZRP2nLZXpey1rqyyfmUVG7zKwa3TEeUzkp58o2wsVUp6o2487fMQ9V7YVPRmmAjEG6",
  "key8": "46Gsb4tPSo6h3yvHX3T1rAyJEY9jPTjMGTnQbeqFvd6SDcd1Fr6GM1g4dCo4ZP8uniHG8rBPEuW9gnNmEbo9cfJ9",
  "key9": "52daCrZkgT4gEYhxcSjbCgVN3UcRwjv1pdM4LwVuQvt5nJzS2DgighSRDnweuPxKB7CxPce9AmKT2Vk2QxZdgzh3",
  "key10": "3eEf9foYaRVdELfbtKNR4SDUTRrpqyAcEnLvjRmKdFEMD8WShXwDJCa5UNa3pXuCNQkWssaPJioXosQNnHVoc2Eq",
  "key11": "5qxHPc6sPXp9qTYNAT1eAtno4gKTh2vEKNzbg5MG8nbNNdLVzxAwcU8BNW8sHpVUi7kpe5gkRudSKPn78Vrbctcy",
  "key12": "47Noo1YLvQhxf3wKXeWuzLDe9ZfrPcFCuMnryyF7K7rkedjR873nXHz6tZZH9xhmysKk4VgQxicu9MZZCY8fHCRk",
  "key13": "5oXGd9z1Sef8gzvoV5qDrjf7k23v3c5Xq6D79oG8eAX6XYT7uGGRBYPJGB5gdKmsJhgs6GHCwkzNQuQygF5DXvE3",
  "key14": "58QX66SwCK37Rrp5MauusAkkYpDcVw9hoxfEzzjL7w84TrTTyCrxnFhtmMQSA1ti6SHThYhjoUbuHo7mXL7YgJP8",
  "key15": "4acH1zotUzam4QbEcELeTfainXvz7iAATBxuNWRQQpeqtPAPWdMxxy4g81DWE7mQDy3VAvpvM546qHdkfL4eAGou",
  "key16": "5Rpo79xdtkCrniSRrWVwSESMMnXwFYD5dUpV4A8ENNaSK9LnPEDkEj4VgGF89Bh5HoYsZyJFYSReEMLSBncLUYt4",
  "key17": "sqXyTQSbyEcShavs1BfNk2NadBtUQW2tu1BqUK2BysXRFyrYaErTg7QQgWg2nZa4oDZuZugWq4WVXiiFFDUsMXJ",
  "key18": "4ZtiSHQFcuZhkWgGDvNyrD5wZSvd3HxEAghRWpJR1idW4H7izFK2uQWyR2HRkqNMndC24jsyJYJeFRnVTiDZkXRS",
  "key19": "3vpGgHC5nFSCL5uvLUeVxtk4WatZeRXwiate3L99Ryqow1TMmuaQCs6qEuSF31ptZdTrUVVYpZCtbW37ELySvBzA",
  "key20": "3PL6dv3r7639rgvLhw65xwkToW9tMyE6wX4JXWNFnetF71BCv5U91MCrmHU1x3jjN38iFhGJAwBZJPhbrZiFmjpk",
  "key21": "5iPYaWVoMombvqBUSLDws5Z3BKw2Q11TwZ8mPQgSN359XBosWSvJqDsYMZhsWqSy9uMgkYxa4kSHLsXYVYDaDDZW",
  "key22": "2WHpZkXLgPXBMPgEMUqKpeADUGgLgvmKqnDu7d8SjuaUExg44BVekVajt8CB8i9qFFLmtVgoMYeiJzFyLRZgdAsX",
  "key23": "HexFxyemTBdGVhPGT45EKWwvjXHVNuZaNVnytSJcyABjTbHPU7jyq6kQDaSWBQ11QogG2KdyxDMWt5W6gKBf457",
  "key24": "4jeNKimL8iMbeZrpsY7r5Me8qDyXX4gTSJv7Me8XAZkiGuSPYojPYndPB6kfhYKNimeqhyn8ynbHLixUGMM1eZfK",
  "key25": "RTUEKdLDTWfASjRp5RdFaQaT4GbXEBzVZJQqbVgy139i8L8SmhXsReSJfXKkbQT2Cuiqrpnb8usU8VC49MxQamr",
  "key26": "2ajjK1nnAnLwTvUWZwbBLaKduk9bn9aY13DLu9M8Ewng8LkrGuGur9wepBCX3LVmUdFaoeKrx97bEsiEhaeAL1w1",
  "key27": "64XEw8jZegJY6kJSjPL7SgeybC9SVbigZGfiLbK3DYyA9xaM3gow2nM4HYX7HMmbUqAZxgKVf8ctfZyA6QMVw3MM",
  "key28": "4grcQrgFRJUK8oenZdLyi5MnFbL63LiDfw5FShLmskzJCgpQXPHMGrvMUecyr15bmNP1BemCdnJmjwUpGocYAGV6",
  "key29": "TrkuxWp88oYv5VrRBGSi4k3wvYFNDR3yEFaVgoyTRBZkbbVpFEMSZkmQM56gCsqdy4xReybaSUpozHtarZUJxXK",
  "key30": "2MfF9xPXNXsnoHAxCiX3hhtSBmStPjDeZq2zeZc1pzY7VKLKYaSBAaUV8JJRGonHAaJtJczfUmWSEsVkV41adPRL",
  "key31": "2S7VRYLMkHKWcLt1kFxbYHTCdvGSnPLKwyDtoEK7Ch4mQYBD5xyrYuRCp2rrhZmB4iGv3qi7mqDoJ2fY2frrLNcw",
  "key32": "24XoLNFKAGvcrDJBaf7mmb16N3BrjpLjtb4KCyPkJNuFy3WrpEsi9LZEmzAguESdb5L1R1qMQKP6SrnstNihQZFi",
  "key33": "47jY8x1pN8GJBfSBDLgy396uPXLZcaw47juMoZQU7uRVFNa9hKjaKq1gw2RPhbZTYcA3BpzeJiT6MTU78XybJr7q",
  "key34": "4vnKCMjwQd3biARHBuxN8xRRy5Z9GHARrmKvPQsj1YRDXrsyUrPzetfe7i6kobBk6XUPgEXS6wEH75jMLgbhHCFb",
  "key35": "kZDEz1dPD8uTGyeyq6RqjmkJFDjDocqsefA6Ln53WyAiRxtQ1bqfziQMqNGt7mrE74B7sWR1W4GxqEFuGRb2TvG",
  "key36": "45nWF4rURbYvPyYJBqakdPC6saPcqECQ5ZfasY4N1e5h4Lk1fVrUeN4nK9V1NfNUfSqTryxAn57uwnvACUgyzNH6",
  "key37": "5Dwbm1f3JvSmv6Dnph7BjV1U3mEv3W7TsNWUtvEgVDPb9qUkBbWhinWNm97QdeLgGx6yEc22s6mqGM8nQqtvxrrY",
  "key38": "4gGHzY3zVCsBk65W2h5YeNTjEP1oRp3VqNe3DDArLZMsjc9LGnpK9GXzKJbSaikYvWFBi8SNeGUUXb6GxtNoDzcy",
  "key39": "ciu32vKCJWgk17ftcfq26jkKBKY27PgQcBUuWsW1muHT6B1cfxYmkDWptkkhpZtZGzoeFEE7wZz2ZXfaBacd5AB",
  "key40": "5h3P73XAGabY2YCzrpoH86w4ZrF8aTWcAzU4Y9UszKrmxRjsQ1whmKzkFj8keCFQPxaqNQNL47oiTikPr3z7KDWW",
  "key41": "hWnUCzdC1rJ6eDzHGBHNRwNny81RBTZYM3Db84MAD9HZb4wwe6pVXjEWRiq9FzzNpya6ynRfPEpvEwPqsn5DVR8",
  "key42": "4vqbBmBWPQwfLt8Ktxmzxe3ppUshTLk1vDe6WWShcMUc3CrgKwUAGJm6kV5ZQoiC8BFzUxkV3eqCp9SNbEZN9Ngy",
  "key43": "2CxyYhrm8RgvMMiQdCTZ2q3cPmLCHTUxte3C3a66DKnsY6hxrssVv3VrHchj5rGd1rpFBjLMCRsVbj8LA6CyDvna",
  "key44": "43BeBGPqAvNkrABUgGu2dLYw9Yqxn1T93EKSzocH19si3XGFHguWi1ssmdq75VYFmAU1Ydn3nmAhe2NZutgK3EjU",
  "key45": "4RfpNBTgiXuA8H8VyL6sqUgBuX5BmUswG6ybHyeoAsSSfbhs1LWSViis4oAHfMBPArRy5CLh9UdcQWTsj9yHLXTj",
  "key46": "4Azki5a3TzENNBfAkiEtD5pfhVxLBNU5ZdVucM5GeLDaekLio2qiEWtUzU1AvBHzQHS6Muiposh7UxMCQio4opyi",
  "key47": "3Gq7or6GGoQhjUXVumtXCQB5Qv123jcf2hx2zJkcwDLBddWmTmi2NoNyhPcjx44Z2aj2fV7i5pNMVGnzTemXE7SN",
  "key48": "58Gcg3c1BLgyq8KAeCGvzc92r9ajzEosTsVxNeTu3zGV6DnY3L1rtULWuLvdVAdByRSePuPcAQz57btcHv3uuaw3"
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
