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
    "4b4rquJG6UjEBMgLYASypVyAhfKyu8Bijqx9dcgpqmXo17JFgaKqogbj7AEXqGFqk6BeG4rY3CstXYZWwpYMjHGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N2gDp1zQBJtPjRYF6jm3szjihTvE6wiKbwzbRyzjWC4G1vJLUY7ryGzybB915PdUx3QgYJdPXNPm9kYZLQiFcTZ",
  "key1": "d8j4dQ2kHG2nEKyf3jeS9ndvtGKxBicjSowbyGfKme6bNjeK3edqYgyFu6ShFhwhNJY2omRaSig7TAD6MwhdPn7",
  "key2": "WkdTXsHd6DfvrXF5iuw2eH8NU2ef4qVsRzr1Dp5nF5Y1q7LnJkA22Mqj5WwD9WfBe6FGTzBymLmvAZN6kt94nar",
  "key3": "2MNd9dTgbbJtYy7X9NsHSukvtctF2LAX6R2LoDuUY5CRPXgAJGy7UXSFwvo28gW8skYCocNNVZDyY5R3Mq833Czf",
  "key4": "FtBeBg46aP7GRm3psDWmv7kXo2c9Yoz7wy1tdoWn3ijGuozRxq6BNEYN7u6gw3C8cULr4DgN6VpdfFJ7oHE5Cd2",
  "key5": "3ZQGkLnBVnj3WdHLo1fE23pbkh66f7pCXxpWzzjoYviv8AofxSMbbfxFiVU5pMKhjAPkjQk8CZtz4wes5MPiMYPB",
  "key6": "rSWGDmFAGj21ujfkCPrifaSqhcBZ7YMNbTvgFP8E7uaaoGKVyLP5ZMN4iFyPbuMr2iprcFr1qKLf6vtWTdNdbDC",
  "key7": "4krwq5LVZwxKRDabYMWh6DjHgSUeGbz7fKbC2nbcH3Jm1i1qdjvoufPkudWqh79EqvU9NTaRQEco8wC1D1aoSSu5",
  "key8": "2ueKasbue6JPDPJQanLDGJnLLLj8V8d4f6GJGbCqz6UMBeaics5U9eapnKK3stwqaBa9DjCuvtgN2ibTB98NgXrL",
  "key9": "4kjSCavtWJpYQFp5G96R4MAVm6swsbPv9kZu6ff8w45s9b3PK6kiimp5D32RUDh3HApGe7wg1RkK3gcN4hd4Z6jD",
  "key10": "3WRdMBj9N8FpNguC7ViHGT64VNPzBEgUzA46HWCvPMKyGw5QXZwbBXPtpqDVm81osnCMsoNT9iTNjDU26oG23GxW",
  "key11": "2Z7wtup4m16tYYJya2QiAQ5J41wvS5wN7kRAyrzUXz2G9V4nL3uD9d3XmWEQ3k9St8itNgzLNzRfRNjuaKkAj5aB",
  "key12": "2W3yPCXCeRbE32ekHouv3rFu7VxskE7JBagtAqtGYscioF9NFddrbKvhQ8XiN7YTyajwzCkmuoDtsfeQ61JtbMxR",
  "key13": "5imeyN9LnmbsoYWoksMZkBu9eGwEeVTVNRkNL3EWAP64Js7uvexQ4mS1t7xnxWxtRXsgSJg3obkRs7KmBjcVtiWB",
  "key14": "3h9NwQvaqjdrncNBzPHvZ6UwhV9gDZBnf8vLX9S4iuqK3KcECKSgmusr4GMpGjN5L9MCEY43f5xWffY8URPUcNNR",
  "key15": "4Saxz1QCo4A9HJooQb4KZbQoNv5ipJHxjFCVrhaviS22D1ZZy1QVUo55zqettYZxKzMByQwmbqkfixizkjcN29ue",
  "key16": "26usoRydc6JdqC3NMnVEdcrx3auWUMkQ7XYNuCFZUGCXs16bQThtazc7tLuYkBLbmR22qgnJYibHjh9zKKjByfHg",
  "key17": "5YEHV73hPoLEYMHi7WsBra7Y3hY2BBxQPeUP77nnaqFthXjtkK2MNvRuoyJHsLLM8XSV5f9w1awy8SBNVYaYyjSb",
  "key18": "26bi2MVv834zbQdxBcbGcEbeEZmaQ6pyvmCcwiutu2mKWWYA8Qdn4AWhumzcf9koSAn3vuCCMR8d4SSaoEkxgWnv",
  "key19": "2sMS2pLoDiNdQx4DaGY4E5qriqjpXKiRDKyXsK7f59LckRjFY1vBNNYE4QLesZZpWnhmtRsuiA5v3LjZphknjKGr",
  "key20": "4qdZX49DsHPfoENhmishrMDKqmR3K5iyYVxjaEVA2KomCYQzDu2ELxC6nmEueQgVbGDyw7wPnhh95vUXcfzX6UPV",
  "key21": "4coVm4nd9TBfkwAhr45r8t3748nJ2YGTjngaSGC7J9U7saywrseYSxc16BcAe6N6iN55H19BefUpJs41kAVQrLfv",
  "key22": "3Cg77VkwtW5DfySvyfqJsqJ8xGRfLGqj8E9mYTuHT1PPuZS4Ec7B9EdrsNw5wbk7hrXTbGfSTBKJYH943U2yygh4",
  "key23": "4qK4MT2A4UvPR9cTKmjSPXU5wzkBA3VXCuo3qvmtwAm7KxcJK7WZ8vvf3UYYEBTA6hi5aTUiCcwJayVqpG2HMQjK",
  "key24": "8RPAmuZaoBZiBSWFvbXXLZx4hDShVjvFKrs59vM1CmE5cGtT1Cs5fDR3nK87uNjtwVttEXbHtzJ5YXbZCP2yMPP",
  "key25": "f4YSApe8s3FJwvNAo1fFCSnQBsHfJNL247HsHLoo3WriYGeuukymcrKSgPKCaF1xZ8rVq3y1ZUdHsCaU7NMhVFu",
  "key26": "2oEoa7QZGPowYwGje23Kvd7zCC9Ubg2BGhqJq4HsPSmknMgQvmFzw5LcZWjEohrLY2eGwDNiqqyQXSxzzPGnhgpj",
  "key27": "YbbHU22nZ5pK3qxcfvFettz1F3ESdZ68e3y98VFRsPJLdcohGkXtetgVRTT3wUU7WXE9yDX7ToQA84THbMkdpL7",
  "key28": "2MEQEU4HmG11mXHT4nPpoZWFkVBk339RvAtvWPgRRgzaN9EgTSm1v2cG1Eb55yKacDYQjhMZ83GxuydmwLT8DEhT",
  "key29": "28SwCsLrCzbJCprpLxE2YwmCtgdeeF4ApSnzyTQ1G7egc6m3BAPDL2hSQuNzF8RLmFPDbM9nfSJuV8SbVNsthTBm",
  "key30": "2CmxZDRjMfKStsccpXs89teFg3x6BrLyeRgWvfH4AkddAWzcW8LUvCcrDXoP7MkQy7zxTwky7Y8psLmQh8e6oCb",
  "key31": "YckaAY9KfgRxTAwgJyqzjvRpJ2SwXJ7WLuMDjVRbzWLFEx1dDR6mtYGVEdgAGVQcw1irYAi3jLBb7nzUEQkgADo",
  "key32": "5QqcAsxZjegPFQs1Ra3SadEoibD7z8UfmiqqN249AETyexzPyN99m4axsnBzSxaXb1cHQKKPJ7EuQ7KCwSGzMUXA",
  "key33": "39sKEPWffkY34DtH4jfHFCJJZPA6qSXrBkPR4zXhQ5jqcFz4xcn7M4LFcvCdDtyWxso5HR7UC25xxiuynJem7x8i",
  "key34": "5BKLDgrkCRuEQkmF8GThDjbbhV7aAt8N8Tnhr7HZAK2TFhvYNF6JJMMEyHfJMCUsszGQNvYnjjxrBhQGMTJzy8Hy",
  "key35": "BeAGjyLjf3t5WaLZWTHxdjf94XcBYkMM1npFw8kZ9DeADLoHAy8AaUPVYaYWRUFYVWSKvTi12qXKQjXQzucdTrZ",
  "key36": "3Uo1oDNkfDaNF3miYryb5eFGsrgcMwnra5KVMdb1S5BWdFr7ZpTnBgH5V6g2ZdXhbQgv8UNkRmZtFyXGH4BTZTVs",
  "key37": "3QPFaxfcXhjcVD6yKsGMe65WEQGgC1NswwEtV9yarBA1u4142fYFUWxgeUouxBsUGEmmqpaTWoZh9Ksg9d2Qbz2D",
  "key38": "2DwC8anb8Eq2DinsXwYawFfzx58eez6masRnGqYoQsRhYayuayM7X41VDEgWnvG1KvJXiFTt3tTo8Dod8WjKu5DE",
  "key39": "2Swav2FHdhG5g6YXMCeKjwED94Ngm2Qob5WMkLxcDJJBKYkRYaRKu4vV2DgMLrxyRp5JeMTEbT51d8UCdXTfUeyu",
  "key40": "3Xxu9Tt56gRz1Ynqwek4b6H7tfm7TreWAQrBhjivTvvFEmDnq3ZNcVmFsVXFzut6wSmZcsjbfX3mrDDmtpVUtaih",
  "key41": "2qVweaKKq1zkjZsBGJ8cT5vHN2cgeHXEy3pG1r5JwZHS4uCbv4kMBZyvCDQu7Bk3noLvZPJ7bE7ZCtnqKGFSy73o"
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
