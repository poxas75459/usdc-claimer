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
    "3RWPFgYfbafj1WLvKPTd76YnbeRK1u4MS6FS5ofejiMVkMthSSbJ72ScVApeaVefetqE8QDXbk9PuqUAiuaa2guY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NCuczzPYTuaq6fRfr6DpHZ2PDrvh1qWULWRp2f1BhtqMF221Tu9rTHdjerp32869azwc7mhaYYKm4F3T1WbitK1",
  "key1": "5SuWUpnCDvbmCHPbGSBfU8o6dfkBJjqsnHcD35pDBs23ZRECPQCoevoFwHv2kRTzd1QH92CYfZUxbm5UCSjbZxQj",
  "key2": "2dNeVTMFEMiikRCBwNMkNfeA6aFoi55K5WqoLu2iMaNzTp87VKXXFvWKrqJWM3iaDzu3eaC6rKif7TnC56qbypSg",
  "key3": "r9g81Z1LN7BRSKqFhGY6BwoKu72DoZGizTnr7F2RLa9LLDEsgghfm7FQ6pAupTy1RvnsKCafuu9LmhNoqMzCHVv",
  "key4": "4ZhHvfMzC3Ver35k38w3iNStem66QcmTjnsaUaoAwbMPUEEpqePGZnDvwDoxfp25P8af9GCsZTxMk8VCBVmeuGwi",
  "key5": "5JbUvubwCCVndgm9Y9WccUCuW42h333teUMC62JHZTfQYb4NvBNDUQBAnYSunRe1zDJKS2zgYKk5W4xYjBGieZXd",
  "key6": "rSWeLYB1nTnuiDYAEKQcM7y5XzfGXzeUEkJSFEUfa7o9pCTaT4gp5FWJaEfZBxgq4rvqVav9iJyWHtq4Bc2SNgZ",
  "key7": "2VMsJiKDAzVjFG3sJtUKmCkcAnjgGNK2eE8BQQcPcThNyZt7khtiaR82miv7QFqAjrJru1X9MQUzHjFKsEfMPRBm",
  "key8": "23xvZPCtQ6JxcQi9CaqVwF9Md77L6TAVDNUHvEZG9aU8h84udVF3n7xPcBs8KCaYN4RtsRocef979wLYeCA2iXSR",
  "key9": "2xqVoCG8HC3gnvT6iW51DXB5PUY21A4Qw5YexXv19hn22yP7Mug7WpnCYVLyAMaQpEY4fRP3zRVCMiggTgBL7V4a",
  "key10": "W4B2jEMWNDA8L7AgJZ2MJsw6sFAQc258VwX49oR7JJEeEYbs7RZomSBNSd6fpoNHQMYUWbbMcXjV9KLqvdSLpoW",
  "key11": "3rH8TTkREt4RgrH2d2mdMzHk9PC3x7K5JjAVed3oiLPH4Aa8LjU6J8PtEstKMeGng6RJXsppH39MhgoY4w8na5ao",
  "key12": "4nGmdbKhaiFBq2ZzqVUZLa7iHEkTswgLyPhUjGx2Mg4Hb1UsKTrKXxeRqe4gDDavCogYXSSBJNFDxapsHf9ktu94",
  "key13": "4fyaBmyQLCWX6NTAciz6hqEvrsDGjANEeKkWa95eQPLcKe6nrCw99tQ6uAxwCt1Jg4gjqf3do81Tshma3s5C25ih",
  "key14": "2FtMJ3NLALoUBFGewVwLGHf3oDAcg355D39AGfMFbdqXegarUpr3V3wdoDPWPyAa5YSkEkkAYfrW32BUMjaVc8Vq",
  "key15": "4LzHE8n4KGzUPKypW88qCErfPBicMe2qxquqxpMeHASn7G7gBUPcAVrCZ1ziuqzu3NhstvcxYocambJtcPnFjVss",
  "key16": "3i3nhxaSsmrcSdop97PrP1X3RTuKSiNB74yfHZaPbB6yE7CND4Kr9YENnXGjUCiqJiXuF8uJuea15QFUHkAUEBpU",
  "key17": "3cNzS5MvGf4SsxsvcEApnJUoAYor1c8QHfTornZeUgaPbmjjMF2qCzLVDYNNJfYbRim8T5c1PfqcwERhQpffJ6Vk",
  "key18": "5r3GDcWHaHwyzaaj4zJbEtUnhtaduafu6oqHgsFP9zN6xtT7k9CmmTfW2dn5GENyRQ3iod4mAGTdyaMzDFz89YsD",
  "key19": "27SKxxqmp29FtUggotRVnrQZPPmpeTCrwTr57LFKWYN7R1PNbxKkgnierFyWf7jAWH5wn9WQukABsbvHscSGmW3x",
  "key20": "22DHYkBkpRj9QhYdKkSpfXyDt4ic2ERApY3VV5BtbHzus9s4SXBvctyDoggnfX26rViGJpamiwvk8ic8djheVVm8",
  "key21": "4kA3waSBGpfiXJSntAS9d7KGjidSqCRJDSUsSpyWTfi9uHuQo2kyRbW31C418UadHxcNFpiARxTUo3Ybnm4KejWA",
  "key22": "2SqvRi1ogJPq2dmUroQUwbWZAzwDNAk2UZrCumWLrBu2fiUWG8SfGQ6yjH2NDBRkHMjV7ac5Cq5619BXzJ7dkQHj",
  "key23": "3r6bqHkWT9mApmudBaFEy4b216CaLaeB1SAG5vSWJuZoHdNrRMqVPF8RY4FfpFrW68mxdtjQ3fqeXeXBBjzbFZjZ",
  "key24": "NJ3K9Q98BUy4Gowtiqius6NRTYnSgGLJpjcuZaY63z6mjfPJpcU5ssuFgzCGNFPB5XJdyRxE9rPLzd1cpS18mn1",
  "key25": "3QopkMSf7bkx6gDwG4eHovVDCucSZe6sqgyTBDpcFkxwJg7JxttiMQnm8P2mbo7xCuaewpJZDFmcQfdrYG9bQNTY",
  "key26": "2H6khUPuQ79m1iuC68e1tE5CNPmcB8337WFDgoahkxsQHVxyKipoKFyWUFEDnTktcaqoL9rD7BynbAcy5wwTWZVE",
  "key27": "5KAPoj7wmSbY36Jbcit547gpApS14sTp22Yr7TDRy2sH8wNVn7Z7gdU5Xm5MJERKZLUggZ4t1Pz7ccPU5aC91ypH",
  "key28": "7GxHqRV297wYXC5pz3wqTJCPVLuYyFDeBTMun76AcXtDnGZSjRQkqrz25ySNVD3ExTBrsJRJppzrY8KGquX3twM",
  "key29": "3ph3mCSqMY5YsbfkeMAEk6741w9QfZ9rwrxKRH2xkdMERX2QxgHeiC8rkMsSXJeppYvRhiJMX3hGx8kHyJuFbF6s",
  "key30": "61fxcHjunVeSqb3HVytvtt4p5LuWoQdKQT6WJtPQop5qG1K9wkKe6qoBn5euKkkpGk6PihDRyS2a7YcwPGphEvSD",
  "key31": "5P8A2XhDEM479hsA3whyAUmdcTPDamYBK32r5FyopM91vPzaXvqohUG2SdapiK3BEaTCY8rQXK1TBvogf3LJBG1x",
  "key32": "3U8wynE5NmsY7HBfn25QaEiampMmsZtjQYpkc83Khrnio64wWvGscmXkwwC44DwDKwKwmVU2uA94AjWpPE6C5NRT",
  "key33": "57jZg5qLFcG9r3XarsXNYpzbj6TYVrt1JSaktW35ZgFP9Lj39rL3Uhmga6ZX8QZoKnoJdkMhFr7xvzGrkDXF1GPo",
  "key34": "448jjhuLWjiqoByQJeC5mmTZ1ZdekvZh7Fn2ADMzME3JwfmVTu2wt4CRamotTw4vhDRTHmHCTEWxqWpCKB3XAVMX",
  "key35": "3UaoSveqNnK5urkywsS7V1Row9Zu2U11oYaro4NZFGnRKJ4KTJJyxL1iZpEBFodtWpjzaAuoBNhQ5XAcff9TvVZx",
  "key36": "zk18btUgR258us7AvEirXtSoRbgnLBKrVJiQLDuDJ2wN5fQ2B6qjvhK1ryHmpjHGzkCH4eDJnEGv8PdoTQyytpi",
  "key37": "3CGn5SPF72TEBLu5Simknm3N8GeRsowocvnBgbvgLpg4n4jzWYN28oebwP3rGTHLsHfZamFgKHm5tB7MKCHASVCG",
  "key38": "65KRgdboUBh8rAzD3uDuEdafbLDXpyKmCiU2iqoUQSniaZCedyimL7JJuneuSeQeNx4GWT1W6yYBU2H4HdmXiz36",
  "key39": "3NWmhTnXoabmcKzjC85DEaEvQJ4yXTVaYfCijcdaj994XvxaYKXrLHr695i3LhztXiEGznoQ3nJxjSqVgkvbxEQm",
  "key40": "91ScM9cUvLFTjyQAALfRnLjNx53fnobwGiK4LbLGpaXoaMM1g95PoALz43RE4o8dZtL1veGjAD9DuWtzn8uiSk7",
  "key41": "5Q2GwUoReDZwcFnGpkvgQ2urUemiLpWNtWjaRYHrEXtjpYjEVZAc5dd1enJ8LdbZJjYkTzM3TSi8xtSuvqeaos9f"
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
