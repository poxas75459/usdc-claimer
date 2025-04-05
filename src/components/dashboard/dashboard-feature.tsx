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
    "W2CxKdB7iiLV56nwDmVSgswhYXA6aBTv9EDrh7GC4t2X7nhu5dyzctmW3uyr9dyoda9cfHTjbkdEJK8ckNvjV2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uvBJ9yeimoq5YzHTeYFdWXujpozvo1JMkAwptJjxE57rRdvK66YBF38Ki5bn7dyqGMRpWeFkryFBgjm6QpjLthL",
  "key1": "3aQ8XwcUBEqUnzYzKCvYvEn71rsNMi9grHJSpcHp2R3HGxNk6V8jEgx4QRGMqSaJAD5KQEpJcmb9CnSUPzgTty9S",
  "key2": "5zZ9AiwyVqZFhHtGHB17D6JgtQjgiX79HcmJr47eu4SUrS2BfAHn4uqtfo43sbSFvkbSA3x7aL3P1Kh1NSZQEVa",
  "key3": "eQaf1pAtqcDba4FduNgBfJPr257BCFfi21uwjn4VN1H6jH6dUpcRw5LGMfqQiBRiYZYdW8Lm4Vt489pjQnFdXgo",
  "key4": "2AtCCmgVX7pgkRt9cWQkmftctTHKoVDL8nZCUC8UCzqfEwBmZtjokFZVfF2e1LvgV5uHjEbcQb2y7wCoYhPHxAjZ",
  "key5": "4Wca77cA7Q9sBoQTP34KpGm21VYZzHMBcyi24NEXwZ27eHQdGMFg3fk7TgWvWJq3Njcgpcmf1vW6DAqANJuBEs4E",
  "key6": "4frEm94cJYd8xCKy5o2m2nis14Affw9Jd8hAC1UmbjxK1M9J3yctPx8S2DS4UDj5ieb3UBUPhBMJiGVjw8kUMYfm",
  "key7": "3xtLfEWKHgzGmU8ciKCsdh5md2Nyc3nNaLQ1FhEUvBccGv3vvsbmypr8mzxPMgZozZCeAmkQcQ2BeTUC2oUoYibz",
  "key8": "3aLaYUUWsZYDAWrMGA7cYG7prcBhfGAwdphE91UJ1tSsZJiifSF6p5E83CHwUhgVFvRYmyd5EGNJATHjQgUwJ8Ex",
  "key9": "2ar4rRmpLybw1sdKuk73LiTWcs4q8mz2jXqK3b2XjYbzUyLMiL2Bc1DD9kWaz5QWpCaQZX4WPQJgiDmaeon8LNe3",
  "key10": "2EwfFjSRkF5QfnW3e5xYL4ZQ1HNdEpdU5uAjnPbjx5qjPb6DBaRxjuxi7fNKS34XQLoQNtmhqfL9WoGyfL7QC7Ma",
  "key11": "2sJsDji8nvGK2kskUkd6BwbZ8KzqEDZjjY45zFP95eQxRqmxBqDfbcFvjCswtpyEJKyLJHipH6C7bgQnA6rpRTUW",
  "key12": "2CFUyyGerh38UFTybRBbySjr1rSVzeeUPTxWUPVraReiU3vMEw3kDq1ERgYG1W4g7vEgVq3NEGYL2PnX7k65mmP1",
  "key13": "4q3erFmtAmwaGyX1y1Cxtf9XffNPjVSTDdqxSsbCNaSHGYjvbUiNe43uKHLdXwGQNm2YKVtC3wDCZyWWGxQqU9XC",
  "key14": "2UPXyAcdCKMeDjYBozFifeFr6VFFS7LYszqdw6QryaA9YT9JZx6baQVedmnaDJVd3JjZbwn8J2GJERrVBW6GYzPj",
  "key15": "3rmTtsL72DtkPpcvr5f8XAyJDuo3nKjvNSqXd5J9u724KzVJg4m62LgkYWJJePWeB1tTXEd2WPS2F4FhauVizorv",
  "key16": "5RdS6wx3Y1Z9mUKJy69MHUH8hKCe7odBXa3FE2H1CdNFovEwUuWVWGr4LcX5tcr7uu49YmYspKnhxcUHb46GEzaC",
  "key17": "32KZGLVtyCZby7Jf5eGYCMYoCD4eZHH2FHPTogqV1aejFHDKf752v8B3twQDnP9vEjmevP3yAYRQx6e2dP3qtbn9",
  "key18": "2U6gQwTW8XX9nGfvmm2UaSBP5avtUMtxfEqKiGQh4h6QYpJjx6RtnJwovLfe8wWeWFtzofju6Q566tQ7x7fxBxPY",
  "key19": "5XeNoFNZYsW4vJBA29ihhyFMD51iCHVR86d7A5pXgZCtp3ZUqguPcYATsDAz8pZciCffxbSPtKKhziTn6F7DpXwP",
  "key20": "3U5gicLi6fFwNPXHkh6nUwZnsdHPZgjsC6CxtRHganA9Vm1MT2RKDeGCUXtX2TcW8XPq3PcjFvkkYYoNLESi4GCp",
  "key21": "5fWeKsDsZtN4krWKtwx3FSLLPWQf9y25TEBDb7pnWkVSLbVjZv17NrtieitFEjVkxRG35wDqFZwN1rR1tchwMmc7",
  "key22": "4omZtHdGZKK6aoVJdUXu3MwFnevHq34rBk9qsFBBkEtNeAHWUYs9JnT3RJ5Cpv67DbcuMRUHxDzA6E2e9xviaEAs",
  "key23": "4mgyzuesqdja3fkDnRL5j8who85oaGE9tC7X92hpFn8CAQY8xQt74RsEaba1prgQXzbdJruVfSPDWj8tSoqp1DRr",
  "key24": "5zTiULwcQ3EaWf6QUUsLGERaRRuJJ6obkJqiuTqeSFACiHRvTThizSJf6abGic1j8rzt1ucjQ1gZma7z1FUTZkib",
  "key25": "FFqouymK3eorVD5etJoDwoD6LKtoDiJ2bkzWnNoiKQDdZFgA8CUtBnFZZrpNRpVyg5Bc3dgU1XWuYCRtTJDV7in",
  "key26": "4dqTut4D8Gs2i5zSK3V9bMZFyL5xaXqagNqoawBpQMEcLRCEfvruoGHBQYtKcYmSe5QujpntADFmdZ2fw49CgBzm",
  "key27": "2V8KJxX71hnBKihmp6HjEMWccNN16poQYMtrgagK38heYa6NRCsuPo2rDixVqtiMZrKq7Qz2KDxnKFk9ShDBW5v6",
  "key28": "4u6JnmKiwYBzBP8bcTtaAy6SkmfMcLpskAr944dUvc2sMP3tVwztm85gfaAfsU3ZPcAHXX5otp543mmTrVYTJmUk",
  "key29": "58xuRyEBtDYt7GVuuGaC1UJUDfHqCPLM12od7ZVc3UfjyZLeZywmBVP96gGGnLkzCueqz1yavapusgUBR8PXYEN5",
  "key30": "5Kc1mH9mMbznLD75AfTmEW97MqJzNKJ7H2UuCy2aphyh88g3L2cBfgYa9azEiQfc5wikhtwettMr5HeY2SE5TG6x",
  "key31": "5T8ivaG2U3xAmxxUGri75avmVC7rADVuCYPtq13yVTryFKG6pL1f9mr5amJe1zNSVQsvt6zRf4SCguFBupqDhKMj",
  "key32": "2AyMoQP8ehXs3MD39naZFXe7rQJSHUZEqG1ybX8BDgWFC9p7jY4tmmyntDXvrJkTd1WZwjNC2YnzxVB4h1VeAoqL",
  "key33": "46aZprXF1KQ7ghdjQUDaVGQ1aE2q3m5gbixZe4HvdRWYujG6q4f3hCusa2biUJoMGxUFLz8SyiFShyaGxsvZkAF2",
  "key34": "4jJa4WjwMYgQp18Px9uh3NjoV2z1LhdHipHvdRGgaPGYDhmmE6FDVgK9Xj1cTsptxXeJBHMBrWQh5JzBbXXDRBRG",
  "key35": "5CGMt7ZWvg9ZQopVSxaLf9ow68G9VucuLRNgZ7EPFXLmNkVbYRDJTxet1yXMzZXyX8RTQjRHZLzRX2TgUEbV71BZ",
  "key36": "2EYhfHLhEJSDhFjgn1oVovBWYEV7c9TeDHB4aQhmwute15p2G7n9pejwqQGceRUUXZhUhwdZugJ343nV8vfnhXLt",
  "key37": "5CWwLq5E21A2bZLxikz6jxq8CVXDY42Du5PpmNBx3kF2WCFn6NYPKoPEaxTp5FH4z3JdBkb2SqAehX85fLR9GiYU",
  "key38": "4pbDJDerJFzcVuxevov5ebgjse943HiptxtJMLznbeGdY9x9DHpxP92hwJpJX182AcMYsTH7FzMoGfqAcG9nAqrx",
  "key39": "5b4sbYtGnboca2UAdFzpBKpqK5kr6Hty3tDYsnDxnbTkqGw92h2cciV8NMMGxDwo7DTtE7Fqf7Dp8czwP4Q63jRP",
  "key40": "5ChVe3ctTBTTPJMPbxwTSUKAfFGDHrfPAQdM3kaGduMbRaPFwYXjq7PPKAEm1ToXFGwvaPrJSgxyhhoPZ1F3jsHD",
  "key41": "43vttX95JFRbdm9dXmKL9AVcm5yEeyJLPmq8fSj587NWeCnb49jDSJeKKww38k8xUtNbDpbX7yBLq67z7CzHa1QY"
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
