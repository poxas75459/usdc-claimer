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
    "5mms8udhfNVYewhotHZFNPXjN9KtCK2YBtcz2LXd5ddbRWj1cxkHN7YQGTmrLpbNw8z3cpXDdkUB45w3qHSLLsQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RoUa5bEf2DwdqN44yLQd2Qb8MmEUyCfd55joSq2cQeFYsKtH6sZTXKS1ZMt5ERVtCXsci522opJr54P2QZvYgou",
  "key1": "3sLQgweshAWc2PtPRWBqje6sgTZDGGH4aFKEamh1FgRXSpXKgxQ5xj5Y9Q6LBC6aiy2szJZV4ZkBKPC6uQYT5EbG",
  "key2": "3wSf6dwXQSc2Fh8XBmzNWgb4nQpRD7NMqCnscouYMbD6SxJNGdGbnsug2MiAK4idS9KEpZ7chHRC8mo6DZB9wxjW",
  "key3": "54WCb39oQ5f3xNu9aqDJPqReKJmc47Gp8pkQonnA47UjKoD5LtgSDm2yMTNFF11d8KBKAnGP3xW9UJ38qhtfspuy",
  "key4": "4XUWocogT6uGn1mjiwNrVS5VsnBvDLH4qaVz5uZK7tqo8FCC6VNHa9c9gUCfF8BrhHvmSmWiwWbEHBzCMeTQr8Fe",
  "key5": "26ffCVAa8tYM6RaDkkikW99VH64deu1RQswE8G1KPSNkdggab2vDeFrdxTDhtteZjXyZwBf8gftETLbfDxu5dyeR",
  "key6": "2jZrQcQ9PxSViGKwamhXx8YryVH1Bb7YWb5cY35RgPjkHNY1t1dSgf3qMaUDqSN3U8HPspcg8qv9m1fahk7xWyXs",
  "key7": "2czM7kJSNzP6TzQZt9kQQgZ8uz2B8iBRH4rNtrMrmzwS1ZZDUs5iKw7T8zDNS9knA25mg5uXQYcQ1HofY9iJV1f",
  "key8": "4AoL64rsA4pSH4HRiAHfXDf5gkjAuTwZPpaeNniuPcC9oJ19ij1r7whWMvv4aiGmEaXne8LCoUKkHswDVJLhm8Nm",
  "key9": "5YFsWBEBLkyakhaxzyxUG9RGNM54bRvRXc1otycgndTiPVCPhdJZB65DMjA3DPqzzYBS6iHrdCun7FpuNgdmx4J9",
  "key10": "4TEqGdg8ghSPD8xQw7yzhmNv2FYSv6eH4VT8W8ha37RF7zKC8LGXhWxaikrChZn2oqAWc4Kt1JDuquJ71F7UzG7j",
  "key11": "3LBt1ibRLABWyaA4wY3yKePiVj3cXoPCCQtSZFJZ3UPmvh9yQ1oakxu2DWi9J8PgoYBkaQocgqcvt5wPfFDxSEFE",
  "key12": "2fYyX7zSwL71d863JtViUSNPwiAY8dsY3TntsBrP1PiviTFcMa2xSxmD7LqezQhHUUMmmXNzzs9xchB2XfEQ21uM",
  "key13": "4G5EkBvkDz89BwvzYDEzNQSMkf3RVEisyfpwrRirhhkrCcGQDEkYqr1j8Aa5FZC4Xc6WoRsPvrUXTz3AVytt3yN4",
  "key14": "5Zdjb1phAPZyP4WNCxdUamK4eY58qz3qzybz2QWWtbxsoRFAbR3gsTLvkN3iJ2RHvLt55dSCFGNPs1oAFSuow7bq",
  "key15": "3BfKCZeL3mZ9jFDEhfTMWvb3qtqwVEfNxtxN5or3yEiDDEtqW3s8FeqJZwbZfZTEFtSaF72qDA9f7svvjhkcqADk",
  "key16": "GnAieLwinBkrM5gibY5f5ggDdZwzdVnfHuVzbofPZTzdRBdVXnTJgFAbHBbkL8hcrxqEo9G15DBH7aq94BCjBPW",
  "key17": "3vcioAAMzbPpVmSykt75Nzr4ETSzwPGBHZCyJT64MrqM7m5UaA1utTfussbem4umazG3SV142ybtfxNVfETUxDQo",
  "key18": "4Wd2jT7UBCWjaqkXZrtt34m6Ux4SmQjDFMr93HJkXX2K14HSLGWek159ANkR7RuqwmjuAYKUXLeffEzQ1r1ayeiG",
  "key19": "5xpCi7cNmVoucRTsNxMoF7kkx9FkqAqryrW2F5w8aWVmz8xMKDLnPWw79rKsDGQSnFhn59hT47DcfgM7bFFvV1nX",
  "key20": "NVsWDQiXZ7SKomzmNgwUp7mBHd96FTTJb6oRtghNmeYBSvNM2YEdiib2icrUmmVFzL1vUWrMSy4o5gnFfj3bJ8Q",
  "key21": "2yhLg8TvpX8XkGsFtfDYzQebZiN7Ajkz6igYmr87jSQJr1asB5dF2yGStDRFRkJar255GQuTiwKueCseFAMibdQA",
  "key22": "5xbD3k2iL3cC9qH7d1PQs65dahDYwD8oYP1rJHWCHNjsqgs4sUcoZkv4eZr47iTGRV9n1NcHSx7PU1vG11jjXYGR",
  "key23": "nHeCfFQbnwHKVJFAhn6LLqhFoWCX7Q1uNmEw7KxFuDkLhzkR5EMPeDHfEM1H6z9BRaM7Gxgf8aYkUXFhAPF13yW",
  "key24": "57xgcxWXHLoEFHevDUuqpgiDREgsEk2CLpaJR4TTsuv4Mv65ExefkC1c9qbBoyRFsJuBV64YG6PLKYMBYqSdMBMo",
  "key25": "2q7xnU5nANKTDkDraUWCMSVEPQE3VdqCxeeZBVN7Ppz3Ub6mnAetiisG8JEY8ujHiNPdFLABJQxVCXgzUV32Exuh",
  "key26": "4QA9h4UR5FDRCnHu9RPP6t4JvVRvWW2vvuiENqtNsk5XvCMiB4fVByjKnZxXbwG1Ln8ensfax7iofCpRdqdfTMSX",
  "key27": "uUghErixFvNzMrMBo3eWnx6cMSN2Bpj3GXEJhbCheVhebieGHkEqd1zX8KeXNw6hMEVvCfeQRkL5aUk5nKGnhiC",
  "key28": "3XjsYdrMfZV2cuszV3MQMb5j2mdoJ9hzJ4kciJSNX9tYVJJunJ5D9r8NePj49yCSqRPJ9vzG7o9WXdx5MMN6wB2q",
  "key29": "BHz8458s71cFdofCJU12JmGxA1hGG494isqUkLWUaCKeB7XkFYjwAz7dwGkf7SUwwVjbi6Fyj7xDXdewna9Aa9s",
  "key30": "BG8BjtaMDnnZcacSzAmT4ZcvUL6zRq8JY1XHAfhgQxEtLM51mtgsVi9VkcKAUBxqKe55fKWXvXzik4vxxsPKhV3",
  "key31": "4URjDTbso1CQLrWuQYMfXvwAZjHQ89vot2buVzJqi1ScSR7rEZiGG6YFhSxkWLVpeJWqVK4s1Bm7QQVMs3c6FBWm",
  "key32": "3xKomo4rhDoys1v94o6SpS17uvzzzeEbsFAUK5Uhc4xb7fwX7SdcQSGFTujLxMKwNkxD37aEPTFWxGHBofFyXLVk",
  "key33": "5fTWVu3N2km9bAPmLMLm7wS36PUjXv3Mwzq9EjG6xoFVriCPSCHsng7SvHJv5VSxLEzu8u9gmdRk5AfvnKP2GmUR",
  "key34": "5WhnY5KLse1wYXhegnaijb32zgArpLa3YLCN3g7ZjWr8daSifoVNuuhHrSnX8xjM3UmmwfRCTU9xngtsxkFvJjLU",
  "key35": "54dpNkzAEvWgJwkXWwp68SwGmuVwDRwEB1PZ8p1HdK3J86mBYWv2pJ3R3L5Fjy3zUxRE52BFbNvUKU26YcyzYaPA",
  "key36": "3w4UVt6e6QBagZAxWdiXiCfTpRxhU8LHcGRSpunkHVwrD2MohhbDCh551rLuNf4rRKY8MzLyGpnuBBEsZz5KBsXK",
  "key37": "21brdgK2uqSp1Lu2BFh85aKqWTaVcL4gazBWYtTKgxG2K533UFsVfmPKDNYprvbz19MfBDbpM8gp6SHbrzWiSwF9",
  "key38": "ZxFdWnkse1MgYfjQ6hrGMVo56QrAbTDsUeReBNeWQ6AK1xBcidWnYx5mmMgiQFBkBRXwesYcGdvUotM2ht5pZii",
  "key39": "5XpJeiPwk2nPwKmF987prVmWsiq5CkBFMFLifkQFva4yLshMQTYKSsGLDx5hZc59jJRgyueZRrCnmVGU71jn48PA",
  "key40": "39v6WskvJpPrJXHysSKim1yuEJuMiT7ha72K7GXx9NDezC7wMx5Q9vjtbgkfmxGzsq9qyXMySU5yw3nQVfZQbE3B",
  "key41": "5XcBGo8w7k4encB7QNZUouJjtUo2vMG4CB2x9Xe2DimP6qY1ZRmjw1G89gA2yxXTo2sdyZxBgj3C4qG6d9GcF5mc",
  "key42": "48ECStrThxwZ9HwYMpWthZhXF8A3hhSomNLZRksdg1nf8ZMebfwDPUQ1V1HHgZ79Eog5a3yePNu614qqaQ6hSj7k",
  "key43": "4pNoXJmAAeS3PqwCLoAyJxyF96zaJu1Nw9zbM8Qqe4GEdhoq1MPy8v4cixt6Y1NvwiQXyUH6D4fC55ZKfgcBWntU",
  "key44": "5KfKPhxN9WJ8hx4daKtc8Sr7wMQVq4zsoecWhxvDf4V9wR7zo3tmr1g4hMCRUMqndCoQYcVYXdauckgDpBVj3JgF",
  "key45": "3eCvbbMfV4PJK1vseWABjYQuUtDHwnvFEvx9f5JFwJ2MthBcX3n2y8RmpCvzvqAAgVzLAYRdycFTkAfnV3CjrxoC",
  "key46": "2rWkuEbPmRSAZxKQdSHZ93o3NkpyhZMAtQuD19viF81eVqD4jtfeC5fCt7WUtBXzBa9Zpp4ZPJJ3HA75UoCyRn2A",
  "key47": "2CuTvG54f8S9QAn3WPqzMdowZpuNh2oMfLk3A8WkJinE2iyUyf7p17XByUQcGZpUfNV43pcTGhBD1tz7kHuLsU9o",
  "key48": "4ndWZvMLRvFeyrdpgpxR1QzVMBwBcEULa4CH5S5Pf5LviRDr8m2MxeAb6wJEKhaBqwD2TMnYZK75UK4fnYnwD2pp"
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
