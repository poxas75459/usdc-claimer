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
    "4ayXbbsG2mEhMmEVp3aimkynPR2eKCwwhPyckHBZkbiZ4PF1YEefYifaaRd6n8kdJf5EoopHvJTh4k2VDdKN1K3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zDQN4BReDc8HUPAn2fguVNcVKKQJcwBgCzSCa9X2beFcSA84UtZ4f5vHrWUppsAbgmw8u4gv1J3xJUsBtRvJZ5Z",
  "key1": "2YAy1M5JjqiecQKPP1WoiVHeETauXvkESUgULeGpaiFEqRSeQrSmFu7sFYq79fsEbbQWb5FPGwqzYznkucqRKJFH",
  "key2": "5ea6dnLHQWhDTQYBPnvfZaSkhyLi6tNiAc1phUWkDtFT2xAjCErx62qGMqsfota9Dh6K6rgyRimE42firPiNbjES",
  "key3": "5Q2HyoVBrWJQvmRzGkFKDy394Z5FfkRZPTiFhibXW87FjLCe695UYoA3bVuU93Ckwax5h78brr7sWS3SDUoBtQtd",
  "key4": "5jxN2fxY1QPxvBkdU8WgJ2KpqMsEYb558TzCNGmhCSpSf2XG1SJtWm9hDjKbApYYrPF16YHs2s2R6s6SL8v4ALLD",
  "key5": "Ya4qRHuvPH4p4kmpLD9o6fe882QYHbdnrHQyjd1PHJg2EAynj6Ubguz7Y85j1Q9yr4X6dhrP4MUsSrDqMNje4Jy",
  "key6": "5t9hQNvVYAvESEU7EoeSDk3nt1N9NMYjNsQzxXhgED6e9T8teRQkxGzAFMTFiasKYErT4fL7JT5KpBE3t5SZMy23",
  "key7": "3ZfR3gdRd8qQsTRtQibCvDjA4rJn2PP9rPZEYMfkLFiD5YDE4Ptpb3Ymjw1N9GvLMnWVBet5H1u9roVmNJ991Dfx",
  "key8": "3vrnxi6wLepX1UyYPDwoQf8vFr3nPDwmWn5KJP2WJ9VcQZPiwXegQZK4Hm33SwAvdC4jYGW8fdzCs537mUfvvZ6G",
  "key9": "5MQBRUVrcRf3Y7wiWf6XPrQgxh2ZGTc98UXRTTBUm4NaarLQ4muRGdb2KCvm7bMgrgSnbnxzBn82RNVZk7xZNErU",
  "key10": "3sa9uzUhn8NRCTETDDR8yUChH6oKntBU68pj5jLHAZfcBPu2LKH14PxGNaEBVccZquqwDEpKaEr1atBuTj4aQ21q",
  "key11": "5M6UNEBfo8nUn7PFriiRS6uK26WBKMk5ZJT5AzizKTJNAxvnReXcGVEd4MDS77TYmj2pnnMrJCeR34vJ8ZnxoAvt",
  "key12": "3mgHG1kbjsXmokknSgUsLvaPfCMNdQv5ppqsRfjin7R8giWnY5PgWn6ToyzBk7VAn1FkckCTNGLis4aW4DrLXmVi",
  "key13": "9Nnt1qmh17CARrxstC5TKCg3mT3QLzdcKjtioMUT4ZMcQwGE48pRUw28WiC5fGzCAnNFFTiD2kFSWo1id7pXTWT",
  "key14": "512fapXbr915s6X2mrJgtnHpgvr6yEVZ6Am3jcovAUXS2XHvn98KaAzqWn6mENwRWYJjzJ7EKZNiBggACyzN2uMb",
  "key15": "5XpqDk4kFWn1uT2YF3BR9sRKqW2JjWxqaH5xsDyYD9wpnNHNNhmseEmDAk1dpYvMet5T7BTShiLtchfnNUZNrGpH",
  "key16": "pLxMQQdTw92dFr7sKs6iisn4zDMRQ7wBP2Qy4Q3GLYT2GoFAP3vTyVBDJ4FbPQeF5eNtfdbePMwGGBk5BW76wYT",
  "key17": "617iwobcW4ofZaU21nsyLLs1ZJBMRAncC7sparqPrE4Up31mnYi9ADW9WEEnULdaEGtHaZEiQAMNGFjby1KVQuk1",
  "key18": "611mLqZUuymDYB6TxsYzuNpgisGcst7ct3eScv98LouS2EzrnontkCzcDa9UTLL5pPo2Zu5TCGUWsh5d8mmKD65r",
  "key19": "39yxi3nZvgytH9Tadk9XA7HmvokKCZF4eaboChzUSufpbrwA9oMDsAaWgCpGSJren1Qy1o879v9zK1tYNbGdHtz1",
  "key20": "5ay2JqeTUBKE9EB3CTDk5xYZEfFVEF4WEzKg63YmkbNhDKkugYv4puamaaN4u5QsB6LX3P3fkKVunh6jC9nMMpek",
  "key21": "4C3SD2cVihsHYnATMtjNWt4PFMPNcmUJ2WsZEQYbWyWf8cfxNY36e6jNmrWdnMybcMC5W578fkCUB127bKQRAuoi",
  "key22": "2pM3h185BooMm8E22bHtGxhzrEvNGMyW14fSCx4169w87bQqA22ocuAgwdG5HwPbZqMy3TVhZBo14nS6pCuQaBNA",
  "key23": "424mm6Z7Snp1uciDYXR3ryVPYanPp6aAFjQ31u9aUz4159p97Qwq1hmcWV3U5CxUVhqtYTVLV48ZZPX7bfXWWhBL",
  "key24": "56tjDU8G3NzuCrGrAKBC7XGGb6jYdtQaxaxYi41Jrz2k6Hb9etvSESvCm85anqiEWdvesRbtysZyBHQUgxBzMJ3p",
  "key25": "22LA5BW3u6ueKYAYSsNY6b5NUXtAmBsJ48HohqRkozXZVYbTZnQsRiwijvZU9PKap4NMb92yB9xCBCAKnmzwKrQW",
  "key26": "46CB3XiUWNa4qgfZhysAnhPtAs4yhx9b5QLK59zZHfeUJ4Gi3gcrbQbz6osnpVcGT73g4kGpVbqibpr4kyRicwpd",
  "key27": "5yJF8zZ7im9w2iZAh8nqZvvGfpYKEU1jVQKyrHGANPdBqeWtkyoiUsKza7VYyQ821KG6ZFGWBAyuU1DMSkTduTt7",
  "key28": "2aF2EBdZhq6bMp1ZTjA2WA7FzzMyK437pZoqWnqDTGLa2ZWgVUHXMXpjpALdWmReGttbnELtDAQ7h7y8SsVNkDkv",
  "key29": "3pqwcrwXd4HEcHkA356zg5gseHx2CX8ywGkPpKXS4qJTHMYqGRT6tcuhHMkYk5asYgjScrrpY23SWRGWPJRnMQLr",
  "key30": "xr1JPCgzmTSwHxBxrgACrC9QQsVc7duY8ew6XZTxGBVN9Gaq1qArRuaERUf1p9YmHp4e56V54H3CvXNMBhHRkjP",
  "key31": "63utvr6K7KmvMitxMrGm9Xv4QdFUuWwAvnNWBrExfrkxKb6YQNtCqSUW22Q3SbvzgTYryyqt4WFbiiwx7nvVC7Yy",
  "key32": "2zq22f73aX2Pz9mLpiuPxVHrdtM3KkeNpmbr3BXPdUZfFPukHc9McYQLTWi3S1ecuFQntJDhA44RHyLwA8XFxqNe",
  "key33": "3VNXzbxYoW9DCBHsAWjN35kdkbVjxoZqFukWpNhBSVPv2or3ShffVuMnR4iCEnWHPef53y4Py9tt5nBMjmiyyXYP",
  "key34": "3jSueCgtUkno9D6QetNiiiJejhxgu8zNFBrKkB432SE6pw6X6NVrXSDTzMQDGfhmaFERH72hjcxHT1HLLzWGY9c3",
  "key35": "1ypaGLuj5ry6abEtvvXmsyS2Anpj1qyg5M6psYh13qVcpi2etXeHP1Uape1HsiakSA8LRgX9NYfoo5MfriJNUbe",
  "key36": "3zX9WjYwAuYhmZb9XjBpw6UDQXcmnM8qSaHSnZNmiLCtFRisWtntBimkykisRtQLb594BNjPGo5UW7ahHVfT4wV6",
  "key37": "2MYpBz8imfb1qVkvuRdhW7YaW6v9NJi1965xxu951LCsmtazQrgEfH5o3ZLkuCWY9QkcCMagznooS89Pjdj9zqNr",
  "key38": "4repxaAnyoszyaZ4CjmUVWscxjUV1nxmsdWK3qyjPwk2W9baMmHxoYL1gcMy8Tz2VsXSjg4qaCT1u6vGxw3S6AfS",
  "key39": "3pQ3k6sZA7rHWV52yBogjMZuTLhWacEX9BXYoAJna4fZX5n9wkYKL3Vrhs9xxuhzHYKyjWzbCfQVicZAT58hDTWD",
  "key40": "eBL3qHgsmbgeQ5DieLjQwNypqsGifzfbbz59Ci8EVTtXzRqF2xUeD974EDkKouVjTJEn6YEQz5GAxs1UEdLYC6Y",
  "key41": "XEy8muPzCimPqStCn4JkEaDL6vEsKzS2Ym6meNqwXhdb6P3mDnRDnt9kYsjhNDezjpKsRgDpZ5h34qH4n85CJgv",
  "key42": "24EhPvAFQKuRFXrWo6J6pHuQo9PvG5eKjkwQULeXdoW1VLH3rR5LGP6P61wM1MQBRF9KuRqex7k5caXogyoRihgQ",
  "key43": "5BrSTRoSoduqRZZ2XCdA1apugw3x5YFo99QhU1RbmLQ4LgfKUjtZfKPyDTvWkHDRg2m4yBc693up2P7PERzYPtYe",
  "key44": "4VDAgTsF1GWqmumH4jFs23SNcFGTcSyyiyg1ZU7QTWM6kJdupNpFEFrxVoLgQCXyeE6rgmmtaXG1Hcu7BFeVcSv3",
  "key45": "5WgRRnq3BFchfHp8E6B7McePamGux2iJVLRzSiLWQCgL1WFnomBYSgLbToK1Vh652LrL4m2yW6dsaBrYFSuvu6fC",
  "key46": "5VyprJH2gXiEoNwWvnUS1b3btQ4x6rZuBX5gWR7ot555AwfzvAawMm6YiXaex2gUXgdDz6VcMtJukyLgGKU7gfkr"
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
