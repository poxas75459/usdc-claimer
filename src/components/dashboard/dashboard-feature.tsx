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
    "2P7gUSahE42Fg9My2sz5u3RQRX8kdYEPhQAtRTVjxKTW6Y55wJJMCGcbyU9xGHJoixhN4jKpDqhEAyxGvRpJfmHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u14DXA3z9eu5DW4MqYqz1QsE9TzpBpcShEyZxGiJnZo91wWPgRsveNaYBkLo25P6Qn8vXDu6N9f52iqn2k779nu",
  "key1": "2BYaiz7881vX91kCvRd2rKamgEmCfQs54C8WCuB8w2rytUwEfFic3XqgDBRRhZh3qp85ADqp9HjirvMsi4cLJizR",
  "key2": "3GH1y4juUTQ1ftSg8xDzshwiWGC9D8nNJrHwirfRUJBG7osy29L5iRSNXQFSuPXA9Rtep8jUSDuDxNERHJtCbNht",
  "key3": "5RrVBr3Yfc1iSY6AyvNtXpD25shwFhDJXMVeqBfnycw3estA1FkzkMAeLoWX5JhRYGkC6hUHGJvJ74Wi9bH8iBKs",
  "key4": "48J8UF5CTK3VvYuDMywZuVapmScyW2ptYVEVaWY4mNqGHiEaLzqKtK7C5Xn4fyGdsh2W2DTgZ4RGUnf3orgDWUfr",
  "key5": "2MJbwtFBMLJpm6eTJsnP6BJA7zJdxSN6Mgf9jxzRNoEx3b2J4SUAdPtG5DRfQya5StX45ftmYN35i4KdDjeq3qRX",
  "key6": "Jfs1i4yiiWPDDhVMghZkGmm8AmdDaTa4rAfKyFcVCDrrtCET6LqTE8tVWBuBmisfBTK6U7dWTjsKwHPv9xnx1Hx",
  "key7": "5bvAPp2VosC9TaV9WVLk5rhPYgxGu1Zo8shHGGUeJoSQfqhs1rJqZTydaaYLwjh8Kdhbnm3rCeSzTtBEEyhpzPyE",
  "key8": "em1JgPHWbFY5QVgR758MvXue5pJ16xmGcqzvevn9t3aqNCChHVEsn2bAitLptP9DEvVufgTSTNQAFPJQCs8YmKX",
  "key9": "5BtfbqFh2JRz5KvKWZY2fxfEmrHb7WLBCGbNM44NJVN6gVp2PgmQsxGUUDngNb3pMeUtdTDbPxfFaMWBJcV6mYbs",
  "key10": "2C5jreZL1tw4QpJwa8aGAUBJhNK1sbP9rfwEbLWR6HDHBnJttYu2zJeg8qH5VKgVteL8ASoNfwytHVpr7bG6bYgv",
  "key11": "fYgwgcqMSehtQcnvezT6vbHUaw5nMmrttQu2ufPeVQ9LdYnv1eQJ1Bz366wCEvUpmcPtzX2t9BDn7z5hxrmxSak",
  "key12": "32oJjSbh8x4ji3vYpx33bMmhndnMq66ogd5VWm2qQNqYRmAZDeJTUA5SmxZV5K3rDVDHp3vJTvXS9saxa1BAWnHr",
  "key13": "2VeNnrsdBMXSz1CFKcQxAk3ezRUjVdXQCc1JRtakNydEvutASTtkKtgXyrTQirLijsUBs5DDCi5MHmhndyEPwknW",
  "key14": "4hKeqz2eL4injVXJPaqTHBJg2JKnqLR7f5P2XWgmoyvqbMPzoS93o3Rh3yAK144dWpxYuMwrC2YLzhYzrUrj8DJA",
  "key15": "4h3z665WUMGf81rDxQbrct5rLw4Cn8Km7PQcTwj3TQcf7cjpZb1gnjJB124gE5o63SZdxgjrfwZms73CA9sP7A7W",
  "key16": "2JhGYJbAH4Sv3SQXEsDz2GrFa8zGTgAhyaM6XJkUa34XSubJZhhKozVVL29Wk2PEBEoppc8sCFstxpqBzz9rgjob",
  "key17": "2JsYnvrrhUoQ8crdWKE7MB67oGno4UcWHqWQNiG1GPnKvZvFsSfpekfyrCMnS5UHUoQMjn6pxzVQejWryS4TRQ68",
  "key18": "2mwg8euwEpD2hT1e6SzSYYh3v1dEow1KXTk6kSmvJpD5Xj5cVNCDrY6KbjiKW2jBVsW7zf6qhubD6F8zuqEAtXgL",
  "key19": "4Sry8r7xrjZ4SV1yzFfpK3tpjTzEX456koeb5prey9jPHnTBQx2sjEuuUz96BiEnWiiyS8KxhQdPJ93kZkwgDDti",
  "key20": "5D2sacEgLg9zYZK5vBLtHu9VjvBvfjQs7mX7Y4H29rHuiRj8H3vnq7uT6NjNDPzWJ6BHgdw49UBHV8eEhjE5t9HZ",
  "key21": "3Mgs8ue5PzmqHK6VFpREQLxUDic5RNzCtgS9TgWCxudGpxtkZSCQna3MkuaJqNrs9odCyHbXkLsJ1HY8XHLx5diC",
  "key22": "4SnMwUZzF5tjrrDCwB8kSMMzh28J9m63JPMnQVGGJG1CAnbUKvxL2U3sdbNGTv6GuTCECmvBsARmBHL83oKhFDKt",
  "key23": "24T8AGpPTbRRmTLcm18vQie7rcJR22qQexL1cMDCsMBCwdK3WsSRvmEFcYwCAkTRyNWtHTFExT36iPmfwRFRwKiJ",
  "key24": "4qpHkgzWgu8m3YQs6xk4Cpr6vtRV1MUxV7MAiXgp7BYySrosK1DZY7AZotk5Rt47rno2pirQKUW6fArvwaPX3HVY",
  "key25": "3AcmZasHeo8hAjgQbnrD7ASXgF4XwQBp1dmodCrs2wofmRALsrZVvAf5aYt46ZdqihwYEDHA4rTwJhaorWHSEEcW",
  "key26": "32Mn2rcAARcaznra49jcE4hFkcX87ivEecJHsHf4dw1igapkafgACnEn5bmWveXMSmTi4sYjR5cu4wgcLJxV2x7e",
  "key27": "5hE2cXjMtmhMciDKRGDU8F3BBnDbPoDFeDpmaqdMEAeKVPdTaqqjsvKguAn1x7LCscuzJRMJwNXRJQZNT9coENfE",
  "key28": "jZVzuZ3FZSec7jmVa1bimYR9aXBPwGH7DcMpMWe2sMedWNy1NrGUQDnF9Cb1cCFY9TqCjHDeGUU9ZBaejipnRJ4",
  "key29": "5Zs2TGoHR8APumhJNNRmV7BBoACbsKTU1j7Tf7Z8wjp8bMi4FqzmxJLgqvM7SFFtucizxzjgDz261Y4pChefqmQg",
  "key30": "2a8csR352zMgx8BjM5vnBbEhcyEwbVo1BDwLVrSCJncqEeW5Rj649gjTjiKxHS1Xgf4ngFfUtQgGazhuCNXHc8UD",
  "key31": "3rm4k7xvMQk58D1c1FykiRwzMW8LJZHH4yr1tRpNyxmWZAeuHyTSeqh4uCfcLVU2kLsYbC3jr1jQt6PvAqsiuM8A",
  "key32": "2Y2DtPsHSzyDNatkYBRuvGfxiGEdz4bSgSRskN1uL5XVRHQD2jFQVxWDd4zr1BbEjf9yVHWUJ8eixCTyf8iEt6SY",
  "key33": "3Vur312aGRVZw6MJKfEK32n9wVHWy7Bw7ktay46UCYHPrdHkPHPNvsZU7bSEHoGPpaNAHKxNwwEJp97rbyLNFm8f",
  "key34": "2DC9BLshRcQGZU7Nhmn2sHU43yTXzCEVLY74dewgqbQegPjAoEF9TD5tf67UbXhor3UQAemK4vS78VHPqBRFAq5D",
  "key35": "6gGTTt7wzx5rQbTrgjssGKsxZKhs4YKnxEhK6DAmTEQDTExngGeudrLRmSDCn27tdX2ge3o2k1HVfutnNmbPTf6",
  "key36": "5LPf8KazxeDTUpHHh8wYDj5GF2zWpwfWoW1SemNJBaTxfCwjg1Xjibe8XQyTWo2Dt6JJyQ7CPuFRTKEEQDcESPNU",
  "key37": "66233MfFqWr4zz7zA5qJn3D8nn2Y4aAwGQeed8gKpm1kLzwJb9SrPjUHPd5oHFmJtyCebPAAnbapPcDMWPFetbtP",
  "key38": "4479EfxZVB2TDYBgUdBmpt8tfViBSea9gJfcDznPB6kKdpvkEvuREyaK2ScvJBCHhCNtrwsYtHWudd34YrYWEQjV",
  "key39": "38ySzUa9mpxVSWjSU3eWrE7Z53Ro9HgVTujVZ3ezJouN9h4YvhGJMRnKvnjjpCpC9eQ56Ucjcfau2YmLng5gZp7P",
  "key40": "57HJmJH4ZEberaEWsMbz797wC4ojaHmzZWZv1ULEDpGofbCRh7rYW6k4xsnsS4BorzTSv3DoSff22nsLgswQ6FUB",
  "key41": "5cLktHg5VHjrG3rrVdJwkEiPwkYuiCczkBKgTFyqM2CV8NodqD8Ap8oFzawQYbhfb5XRRnEafPaRTrn3VCcVwdZ4",
  "key42": "3urahTCunnSuLUf5MPyHNyfhgrPk5yVgC5R2FrLCsDpJsz9mrQGUMwBjE413paLcvBt95Z77FGAu2qzcHkSiud3G",
  "key43": "3ddkzk91SFWBVarUfTqjcg9p1wzWkncB8tqovgvFtqdfEPA7y2yqcccgKfYSzWzdkxSYyEYrBAztYwEh3L9jKiWz",
  "key44": "3nWQB8irYXvuUeF2bSoqiChgyskTifXiB93Ta25ELu2yhyzWz2Trr2FnX3Nh4wt3WPF2nwS6dV5F7ynjjpqT5htg",
  "key45": "22Kocu1tELnn6hfvSnc8mdHNz6igb6kZkBSy6pWpwaVskMSGQwkqP4Zxf7PxN8WjwCAwK25U3aaZmanuvSDyFFrG",
  "key46": "651Ai4yw33WGumuekDrdn2bpNao1jr68Azjb9KQB3bW24VwJim7Ph3sCMtQ78FCSMogGFP2FsCVBUbw1BjXiJgtZ"
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
