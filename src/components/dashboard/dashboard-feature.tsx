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
    "3CuJ26BACiHTFA8hSXNDZ2Va7r7h99kaFeWKkcfgHaWB5iPXKMcn5WuVu5RQVRYeequ11nwXHHoJe6LfFCpxwAbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EBp8S2posDc9Z6D3sAGnHgc9FTMqssrmiv1wbg2yAWciecHXcthX66Hv1YS82HU7jJs8QPex2ike18BmTqmUMKW",
  "key1": "2EEsv6MDgnA3Xq943uCF1yGAMSF5Qun6Y3DxyFT4doeAgQoxjiErjzmyBdJjXAv4AeHSUr5s6ETeYiFnjBf9RGLt",
  "key2": "4gmcF85xad9zABWFWUitYVpLsBC9AqjPkJr6XWbr9jzNUJVGqMwrWfjDwMz44GrL1PrQsu2d7YpHfPeCfkJAEwoM",
  "key3": "2QrCrEK9cmHYfHF7pBZpv3Whvc4FKzt9WoUMWFSHdkpJDHe6wjSRhoBCmuzpNERb2Wp9euSxxmYDgrmDhDJLMhue",
  "key4": "4vYz3nL6Ank8CwNj7xhGN8tVnaSFdfHAYRki15J179RvZY8Fw5e6XpM3upuKMeeqtGuYZfCy56u7aGDqukzhTXET",
  "key5": "3xckoKRKTZmLsNgxH8Ukpx3ERrx439Qhzj8M5kwoaybBqpHpyBMx3jWK4bEHPtC9fBS8iSeUtL1GR1nauYvCtscw",
  "key6": "2vKWqPBmD3niiPWZ5ytSod5TJU6nMUPXV1Q6zQHqfwhkA7ESN6GBvUwi449vJBss11yPwEGzF9E1UtZwm1xSqErY",
  "key7": "5W8WoHZNTLoT2YUHQZf4JPbJZGecEEU13yXZpCcPUpVfeV8XNy4ad7qJowaUL2mMjK6sNNM6BCrP7UbJRE7hdHj9",
  "key8": "CkhfThtbNJpq6icnTACu89NJNuyk4fjnQQP7X3mjR2md1aFRrL2RNuvGipHutXDYJMCDGEidsqYp9FbnXzspktg",
  "key9": "2FGj9BmitsXf78CwbAAzYVNBmNG5Jy9imXpob4TxrvXyujz5RczPK1CdVB5V2J7vvHimXoUCPsqNF7taAB2W8pAH",
  "key10": "3kFN6aQTZtKeQU5kPqnVzLuBj1agkhDM9L8CxVKDkJ5N5cxCwWGDkR2pSm4qMFoRZAXcoSSV4zTV5JVF7KyWUgwo",
  "key11": "waeam9jeYd1HW7A3eCM2ryJm7BeuK5EKZdmbwhbyNVchhz5jyuz7rdaNwR25HFnfmRQaUSukgeygadWKLkUYiFK",
  "key12": "54ZQbuiqNhSiJEiwE7yYJYmQhbfuzpoqdp2XdBNYLax3nUftMt6U2uHxTcvRZyF2y3GbVLYc58Q7gCyZCGF5UNqn",
  "key13": "34hodTsiWvQfwYF1tQRYuq6fXFN6qjvy3s1b4jnG2hhcTApDeBWcqJnuzcaMPhpc9WESPcQRHDbnW6AHNCKotH3L",
  "key14": "6ggQGeJ3qWma1hLd9wR9p6f9x11cPWv65RMfv2R2GFvByhziyEXePXPdW9Yx9M7FNQu6VJxEksvk525QTctiRhB",
  "key15": "4c2scvkiuTKZniRwDfZnaWAQx1zAygbqDi3Z2P42kDyso18ynqEfFUN7piWEYFCbq1cyR2MP9MHqZ7cckv4UBviY",
  "key16": "49yjAMZAGgqL28mnEES2gj7nqmBj6y1EJGdqJqaiRgnXJPnecX18AhRJRJS8uJi39gyjH5f1yZC1WEv9J454KmYZ",
  "key17": "5drrnpo2q1wiPoATcD399WLHD8y6pGLfpRNV9b7VjMaFpLZLAFzLAEoJk2tNKCGujXX73p7EWkxQvwFcxKvmgSE7",
  "key18": "64uUR3npRm6ysVF62pw78mGpkXA2Tn4Tqb4JoV5DS7usw9G1yFgygt89NPiRpJCrFRAjXa5Apm45z8qKgwei18F4",
  "key19": "3c3zzk92HtbdAM3qB88oEFCNGzCy1n2grTzVgh6NgFGwaY2PKqwoXTJcYRNyRdapt9Ah3Mh8DdiCTQfPNZdkQA7U",
  "key20": "5AfNZHtEL6N955E1rsuhFWzNnZyyXz9JvVzy7jD5G9dfoAQRqnryKPkVdXNgH9j4Mz8q7xYbm9n5QjTGvtA2yPJ7",
  "key21": "57KKQE7WdyG6pCgBDSvM1zfuTyCW2cePdcmzbFuDWtCWi61zpzft1rM7qva8nouFhFHDo3WEajksvaDJSdGS4uN",
  "key22": "3LmHoBXtut847YseoUutK2GZo8u6JW3GPF7ZN5Qw9YsdvLgvqKaeyrek35ZLj9Gd9tCG7anGBsJXk15ukcaWTp33",
  "key23": "2ptLbiEM6jfSUTVK1NHzPKZqo2JnMhAgmeJiDzWXiBpc5eqiPNJn9jaZoMcJwQku89dKADhRVpdA9N8RYP3WAHkv",
  "key24": "3Xg1Z1msEah91V3yLkwdRXEuUd668JZTZ3ALkDkhxxQ1zTs4uxLrbUTUM5nTLdU21vyeLf6pu6oUa9iReHfTczRy",
  "key25": "6N7pkqSWGFRYKKihTwU7T8smRGtNHV9zw9hkWPpzxggxKgJW7sxJDXzV51n18iK4r6unGVWT6FwJBEvuusjRnGb",
  "key26": "5J29MQBzPEQ1LLkEgfXMHoyEjmzvc4HaCSUgdtS6kUH4RV3vGzH5LMzogURbcGFNUuNueNvc2UoWnMmEKtXFoZvd",
  "key27": "4ofkHSMRc7GapDCH8v7GhsNh2uw8bYGtnLEnBnhpWvRr57Aj25BdekUBnMGJ3SVEZ7hgFEXb9J6Ctiv5LVNEBSvZ",
  "key28": "63MqfJ9ZjPmpzpwAqPEBPCR2Pbd9iq6Quy324PC1bdM2NjPDuxumhSuanKcTmxuLvAQcRgdcycZ5SDA4EPPB5pjj",
  "key29": "fjFXXLhMdN5VzRipaqXqyPFMjMTB27HwZAtRJ8xkHKaEVUKDuN77NRsA2ZVWugvXWxbaWW6Nr6BnBcPW7vb929H",
  "key30": "4DPRt6kXcXWNHqdf4dZZ599CUwSMZk3LAfvzpb7QSob3i22qGJhefqXNURtG7PzkQmr3fEbJwDc4HZw5t3487akK",
  "key31": "5pNCZa8Vd3zPRJ6HAJoCvmc3eihLywEEJRN7BwkxN4JXifB8zhv2YESknSnHpZtExnsJJ6CiyDHTynmC6JUHoMYt",
  "key32": "62GZWg21BT8Cpj9rpAm69xnTDSEgcGBQPRhDEyo2sgQ52zq1A7AUJTHHT3wfoeisT2uoK5QbRp8dvJSDS1Q1XWh1",
  "key33": "527szZmFuzNHXj8Gv66EixkezsfUQRHx8zkbQYw4gXuNadjbUJJooCLWj67WoZigXjbRnZB2iGzRxunHS8ryWao3",
  "key34": "4Am4UJyLYQ8T15s61CzEQU61qDt3MhefHn9XkaSbWDKwmkiz9rJGwamyNyoxbdAJUoe5UzisZaJSqveopsbWrK8p",
  "key35": "4VTAw8PaugMwGxniE1P61J8BfoFLrf1rnex3b61LDGQEHYK3YTdrrQcppksxNTLoekkxnKM9A5Zzt94k9yj8TChq",
  "key36": "Pj5HYhndTDbKP9tA9jWSgVjBZJxxhXu4W3fULi1DqfFYYe6ogtTYALDwiNitWKWAjAYQoSHbV3k4EtuPFfD9cRr",
  "key37": "37vsNGBu62rBHYamJobr1nxZQcrKvGRUQ6aXoCPDb8LQHNZJ6W6CZ8aPdEgj8N27Fjf4NctuKtLnbEYDe2cT7ZT2",
  "key38": "3j9HuN8c8tByHQVkH2fYuk7gZ813DRcgPVxNeSnUbe2acyAVh216KZ4VG6wLKRE9GbJmUsjLa8JrJZmBAZZkBr2E",
  "key39": "54xdUxweTQoW5YGCxsgniAD533wiDP1K6aBtjJ2EAZXJvDx11sAuQyMSpus7wgcr11ehoWD7FZYF7D8fv126Aj8h",
  "key40": "2ZEA7HrujrxRnzfAmmC4kaNPx3iLHTNSQNgKrPzGMKCDdpxAKiYYb7QuxACgttngiAes1z7d4uURnsKGLew7Mbj6"
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
