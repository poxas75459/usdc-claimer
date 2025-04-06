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
    "2T4H14DnPKaWWELKwLRr8FstrMwnKTZv3YcWBVtdH6r14CdM2suEczEoixVgpye1RXsVSgUrxtpHbQfNe33XwARe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oAPtQfpRdxoW89awGXpAiXrLFTU6U86DsLuckqVfHpgNUTjVYeDtF3jNUQ2NZgk618ttL77MtgY4oyDVeHWQN4x",
  "key1": "5scuym72NojocffTKpdScdBaxun9UT6M27kjoq56uXMeYnSor9uxLAN9wUdwuTCF3ciDpMYphpsrMWw6tmBRZFzV",
  "key2": "3GhYtrQh5HBCdLWe6weE6mubbd6RgRqtxsFdyDabMrV9C8F8C6xrXEZJyhUCp3HA8xXyUE6dTNvLx7YEFpGHcuky",
  "key3": "3JB9SYFvHn6oBA1B48ayyp1oYvZopFvFzbdeZVbQbtdJVXv9Sx3i4AWVUnsNjepN4gEcL8A4m9GzL29TznqoPDPS",
  "key4": "4c9ytFEv51BNdNG1TvvN1A3zZiechNcqeusSRbV41s6We3EioX1ezmwTbsPaWBKRzRejyjJuydf558y1fRXJFbWb",
  "key5": "5A1y7Ft4EB747AiezqaUv2x5mroAP1ekaF3HF23jDcLDTaPY3AF53AMJd7svRnAKSarymtdaoLuk23vMzp3Re2FE",
  "key6": "5WVjr4euuEDzqpATd2qNZkqE5jhqqjHXf3AdMxcX9HAq1N9w9j2LhV2MTQgFx7tmuJ8pPBCjHRpnqNF7H33NLq2A",
  "key7": "4hBEmo1HGAWcjeUmq4wiRYpYhQzTD4NnfyscUJGJ6ZfuKvtW33ezPqxdpPvLe17AYguthbC4Y27mdAHZ3YxzGycT",
  "key8": "3Ei8b42M4SGS13iFN5HPYoKy3HuCs2msBVKogo7jFtDERV9BbhvAU6BtoiCQ6YTKEH83S2r1pkc2fwG29ER5hFvj",
  "key9": "5jC74a8Y4BFPwgoNcQ6hM2PzamDkNfN9XX9NYdVwCgtUFqdch6EWsfb2XwRiGfS2uN8YfsJf5nPBmbcSW73MBN2d",
  "key10": "Q6ja5Wwt3bca1F1DcQb5bY6oYWLD24NUhdLuxFA2wTxpbRCR5YU4Ndy1eFedmar11HVDsivv9cVT3PyUJMGcJxg",
  "key11": "55DpEXBPeJ7eocxaLnWvzM4TJTozTGuWiuRvMZdRnyHQjCdQrLkvY1DLd8r8q3GHB6oif2dKhBaAksKcwoCKBuXG",
  "key12": "4TGuSaRgDjcYwMZWqmSGfsZLq25kyuvtRB95R4XD1S1ADEFe6RbYu89PLUn1guRqrf4is4ePUmxLdMyr2FqbHx7c",
  "key13": "2bwtXZtKwtQJkHBPn2ZJ5ZwPFQxovvt8nNUcLHNncAEpjHtZ8L1Wg7E8nGqWVPdNTniy45yu4VByg68P1yBT4AvM",
  "key14": "2qie5UdsBsuxqJwtXpHKuWHERtJ6oLZs38bVR77imYCmYyt4ThbWtPyTR43SvTwXhRzb8TifAaZuvVvLLLEmPe7M",
  "key15": "4HCtjRy8Km6gnqo51drp8drJNicvUpEAUAttesPrcyTiDGrsVywQef9eBceY8yKrQ5T6TN5bk2DTV3mqbeV96qdb",
  "key16": "3hsaLV5mhKJ7EomerujXgemoADDN5xrPfZm1qYSYqDZDDetZpFwRyXss1QsDgRSpLXHR4aUHxQLpAVs5aLunSbFq",
  "key17": "3ezjiXhVkS5zRqQR5JHihg7QpTtCW1FZnZquRYh4fkqPKxUPymxMGzgnVAms5hvTACdsVpojdEjq6vcGsh21tqWT",
  "key18": "56b4nKWFu5RrHFzP4pm3h7Yn3B2doHBAfU4WhftsrDVVg67ncmxckeNBRX8zH1r3T9RnEViu8ReKQnTRJF5DdCCa",
  "key19": "2oc1KRvQmFoTWHtmGEeiytG1tkScgxAMG9FX9Z2qYB2wdRaE1yJEDk7hcDSVW6izdfzcRLFagq23EDCz6HhTcin5",
  "key20": "4nskDZi94e8TXPr7MmG941WwQVZT1vTCZGmxR4jiSa5DbydjhQJUASQJ26oPFif5zEHG8uFbK6v9ZRpLb6Tk8SFU",
  "key21": "YvfzRjtUfQ8n5toMHxf7kV33LKWWtLdngBnzAwT2XykCSKw3dufYn8pc8egSGvZ96F25a9KW9RQhR5rjRpsjEZu",
  "key22": "41jK9CqSjyET7nDQRuc619JH6Gq7kkhsoh4nWrmFG4vUrFWovaauZ128okwSYJxWG6VRxEPh9BhFLCxyVuvKhUaL",
  "key23": "YjPb8PeS3WixUd8ec5vc8QZ22gQvEEJCqMEfvPFqxwnqrHBvg8v5o7odG5dYCJPnbTJuB6HF9XLYFsqqUystHpY",
  "key24": "2zGtsDhbQYpASyNB9JGPUujnRup1c2KJsdzBtq3Uyh39ENnVTzf3j6wem2Tyow3DashmE6xuqogdeN5XXX7DYX8i",
  "key25": "VhcTYm8tgr9T2iJBjFAhirujnynJjjtLhLcK9L29VdaLbJaePEQUea7mowt2WkbPc4W92VSsqBKJWQMHCTyeNZg",
  "key26": "3PsSV5UDjq2A3AXSUfufvFxgNAnUtDQ1vQNuxPbb3tumh9BqFcZ7RZHbnrsR5Ky3bCWqsKjavZZPsseEgEGfSi6r",
  "key27": "pwt8g27VMM5UVYWbaJ2ixVTS46sYfNMHLdD1bNrooMhhe7qtKAWaUZvjKqXEwLVuZS4Dy2YL8wdatkS1XeUw8Un",
  "key28": "4qiH9NmHBEXo9ArRfvqikUVSZ9Tueu5WEPyPKwauQyPCSK5iPjtH3P1gkqVJ7bubWXyC78EcUN9HbSjicg6J4Yxk",
  "key29": "4LjxK1fA86pVY7LYngViS5AJn4pWS1ArxSfRoUJudvFAf6ALt5U4wrxrhBvPqLuSrEtsfGCiaqibFW9AEPeyHJmt",
  "key30": "5YcUpWa7YgMAztUg16VPxBGB12r7D5n4ReFATS2BqfLGbicUmFmzUaEXm4xqEcPavNeVehhR7z228T5semawAYiC",
  "key31": "2GoevMXwYCxThPx9p6fRF6atdmLAmsdYMtMNVfWpp1oCYCGwKZi6F1rMzVx5aCJtMVxo92XXSZYAzy332xaMAuEU",
  "key32": "5UsV92Zh15dYyr8Vrq8UZjqKyriuYMnFm3CVcZgCewJf4eVu2EjhZLcg19uiRZE24gog1ZRRGbVS2o3kefDhQMCb",
  "key33": "5am272hvamZWkDQMvpshTZeZLHa1UkMGme56MWibHCe22qgTytZmYANwwWhmw3ndYmaeMxJvRb7Xh1uMHcj5RMVf",
  "key34": "3tHNnSXSwQ2ADvs2JeDwFvHv9R6pq8Tap5xB6PvuBh8eNJP68dJNenJ4bCPD5UVYQiDfsHj5H25FS8kMAUBnhTJX",
  "key35": "2i9XMsXHFtcqSXdyW9ukwofwX1cpXjQLymanxuqow7rpW48j9yNAmMrzZdfBP7LFihPcLYZ1JfJAjt8VjV1jv545",
  "key36": "38z5sznmLxhRUmpKZ7d4UrYfDwCS9Ff338CnVMWmq2bTzoqaLP6XudVeLAop1vVyyDbhtpCFqbvnS1fnaoTczRta",
  "key37": "3QC5dnRdbrvYQGbNw3RD7kzryihAWpf6zAJyGsbkTaDoHwKBcv9DWA9ipqPWChiTXJwvcLEvJcA9ghxzda7QpRvc",
  "key38": "5b2mURTXdCRcDL2bn8n9YC75nGiPkikU87HkYrsEGtegfTztcrRVzd4ZYv1VUaTdsfZgUkWZjnjmkjiULroi426c",
  "key39": "363JnSU5mLB2U7UrLFNkZakRiqj44dJbiK3PrF5mTA8NPegaXgLqMPKWqsrA4J1UKtg4C1CmNJoKxm2nsrTywnoC",
  "key40": "25PndY7VDmuAkQywqirSvU3f2A9ExCx11CXGcHSAJS5WTJ2oa2STJe9CGKy7ptEhMCpPs2emfqKFeQBawxDqQQXb",
  "key41": "2QiNMgW8TSvDbY9xaih1UYwUHpQnLDQ87CdckpKBTqowMwNJedvpU6KVMe2FLfFxtawkBT4rgmyJBDwFaLLmc8bR",
  "key42": "Mx8NKfKDLfYKWA9krQr8xeUeHHkYdHM1eefbnoq5JS5QVfGgn7FhQ46xVvaM5BMssky5McvDfacASKA6G9xyBqp",
  "key43": "Tgjh9Spad9DzHB6yZSYJut2xJ3a1Xr1eqDBciGpPiGjoUqaLcde4GFxXA3bnYHU52u4dwEtAnkx5eMS5K54Ex9T",
  "key44": "kNZPwbRhtzZhcrRaKqBcEZA4zX1jucBZaaSfeHGybc6ahBe1FGmPXrRZKQgJ4SLjLkxYsfWHyrTdS3mkCk238zv",
  "key45": "2ZTNHR5u82tNX9uQjvw2To99jYaaAMftLumNskSEiMopRS5S5wUvmxKArKsXRhpFS4Zz7BqgKcRwB8ckHqNzPDT6",
  "key46": "5g14iiJ5ieMZMS6dVLSjrRJYiRx4dqwb5SpXmaZpdrEcJqfk1nPBACFFS1JyhcsWd1oK4rcCGyY4LFBt5nTy38qL",
  "key47": "3B8kzK8g4TqcTAdCeyt3mXB1TMLah3H3sBiHfXiu6ZS84A6XZDZiRFVa4AMGAwVTKzgjYRkxN4N6e2jTgMfTkXKB",
  "key48": "3EaFc2BptpGd1wucshDvDyLMcMr9Nae9sHhSqWo7FjbDkxgCDpaU1MG5xt7e3GBjSDbBei8jAgZChhZH9EJFpGMU"
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
