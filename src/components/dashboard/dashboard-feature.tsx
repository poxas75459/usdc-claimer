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
    "PJD7FqCp6inhSRTQfAfraciwXR6sb5UE96WGHtaLg2VgQtoKBxTtyCnF8s9PgJhz4KKKMYUKevgCXvgazKdj1J7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qgEXsvT3qzEDLoGrF87oW2Qg5L6oDqsLb19PvhsPxunSWgUhcNnFdiAowchTj7KsJBBaTNma296BuggWfZqoNm",
  "key1": "X5aQigz8HiKpCy2Xyb99n1yGwLBi1qoUgNGMT5rxJkriEU5VnWMtqQHLjQej8VAW8vFd3X1ubPdPyss54Q4B21Q",
  "key2": "5zgJDUZbRZca1WmcyiBssrkirAcjUcvX6YoJKJUambpKjRFbc4nbcKN4pVJZ1rHWVTyM5TADC5j2Jgnd74LEco1T",
  "key3": "3tCW4LMDYb2oTkV3Za4iTa39vifuCoHd6zLwbKwUKxSxdw9pHE8UHCvaWCu9RQCvxw2vumkuZDyVGPiH2w63bc2D",
  "key4": "XMB4tcDgj1ks8x35QbzYH2aSiqx6zwb6W33aJxTnYsvqJdPrVHpgC4w9rN4FiJq14RLDsyn8xihaDbD8gjLR4Zu",
  "key5": "39T7Pm6KWgWUC614PCuZhPMuvpc95Cgpto1GLfmLkhMcMcto27icY2vNVCuGzc9aUHrY8DXczgK2zpDBYVZD54gB",
  "key6": "5BTAtzeXDSSnecE8zEcE1p3fcW746upcFJ8dxdundA7cEwGrr3yMsF1ywKZnFQ3hq1r4KYo8nfYvJvTiwmZ5xcW3",
  "key7": "2c3zyf39e4YVWitartGGmev5F7JDSaefwjuiVZShbA2NJiRXkMjGFDUnro7YA7MtVjdWVE8GSLBaNK4skLG7Pvzd",
  "key8": "5K1d5SWVX16uzPrUkp16Qg8Tqc6QcJY7q8yPftmsHy61kQKFk4yadAFB4vVxys6EGoNGUxpTz4MmUohkUjr96Ue7",
  "key9": "35Mz9n3LkjCd6JvcFzugMRkADJ6RU2evJuayJRhmgGwEGQqpajcJRD9YnLhwRyg453VAhxD4HpJfX7FXv35rEKF1",
  "key10": "4PG6jKHGoJrUnwpjTEUBTh3tGZw3URqZr2SPXTAtPDTXW1VcXtNuNntwNnodWrn4x2y8gzK4HxyJxA5D3DGEoq2w",
  "key11": "2Ua9VWcrtUrJns8rsgrfnoeNEqurhsHg2CYjyLVkahPAcnQNCqzSb54nkTU6qRvRHewSxEArsJqkBT44hZHpop1g",
  "key12": "3LhJX8ZF5fQnX1FmMe7g9zihTTvXhT7bNhRpcknNsKyHz74ehJBKToEuyCHp61rMfKw1SDXXSb7dTzZEqcNtdBjd",
  "key13": "2z83814t7iEhng9JpxXiwvxfZeuqw4uLoXy6VZPJQSs1aEFqvEFtfGpaahPC9mhTH9nrTCnxFbqS3AMsWr3ygqsB",
  "key14": "4yyZTtLm4pixNjhCatexjsRgk4tMn5NW7zsU784EPa8DgD2znfC1MWDCvUUHSCapMftUT4H4Ee2qjkpLRS6xEwA2",
  "key15": "562rq7JSwBWvY5VbjaTLYri3u99oyUTvxhxcrp7WKqs79u3JG5tebM8mDnZ6rYhVi8Nd5boCLrdE5JpF38KDfeAK",
  "key16": "4SuxVxY3kGVHPydztkwFyYLUjsjXigw9NvjvptC6SvTnKRHi2k6fPm6qF8x5pg4CHLssEuLmoKDiyTe9d14i7jrd",
  "key17": "458nVP2U6kT1ruDFqy1n8RjUEaH7eMGw1Sx2vsPHTFHQ1MzG4rQKFUvewCXCWYQyurx3MiNMQwHuPfEZcs1MraAo",
  "key18": "5YR5wbbz5C2MF1n2fdohwiuATLYyTikvtpZg8eAxq5NXq51bPXDK8cBDPWchiFJCjYUydu4V5PxMmVTJybt5tWTw",
  "key19": "3iTd1mJga4ewHrs9ezq2g2mbBWP9pxiNbKeDq6d7UyijK5Gzj6BVnYvHSP7jx879CVUdgLp2LNpZyzSu3s36FW3m",
  "key20": "PkA3vieEoggeJNgLJD9aqKW4hXANEKv9ZKqsdXKkBv9kcaLe6MzwAhtGi4qELvMK6FqCQWRxM7UpsYis6aAsNPy",
  "key21": "38rRDjVUkHTufQjkR3vCkqZgB2mVYABgmEkDr8E6FSboZPUgRopSMiHKZdfDcxwHzhBRRbhNiuArdaXWbrkZixXL",
  "key22": "3V1P8mmfdPkC38GPLVAaSb3bKmDkxHp9bNCkNk5bQbCSfWybE4jgPUM1bBcUpEWA6EWC17vDwwFHyxNnTvbBsKum",
  "key23": "3wjdNB8en4NjvadSjAG5Q1ixku7U7bSEX2PkRjVHzR9PGceASeJEQN91xqH6gaKzP8JFFrWHEWB53wNBPFeRQDda",
  "key24": "2YRhJZ8TMX2DFPSYjdurBESPxdAhWdiaAt6mPnEqMbh5sgFMcFXJf82jjtSyC5BC8M8PKviiccQBmEM69XLQs6Rt",
  "key25": "2wkYFAZsryDrVNwVGUAxFLJp1Betw9iXr5TNwWAuFgoyuuT52AkAoPj8uxTXSjuZazQdz2UKJtQRbMCX1KgbCxtQ",
  "key26": "3FkeGxpAynRhTgxGeWZEECvTvPaBY5yoYyKsWFrR1Vzn7EGhpNUzaKAbr88urwJCnBiZjmXEhFDeiLD4GtoCPbXT",
  "key27": "3iAprsaKUkCc699vvLvCC7FKZt3qKViiiWA4XxpTqHWasXCYhwTUn2Tv4K4KxkbBYWTXZrG7gNEr6FcJ2Ln1SkzS",
  "key28": "5LB43bDnwEwt2zmJW2pL7piDY4ckctATVEZBTJumYaRFisiadELFVENVVSruXmgu1mhog2KpyD21PT7i3fycNwkJ",
  "key29": "7piYm8PJVwF12s1HmX7HpyCeGCw7DyRPvpJ5ZaMmAwYrVgrsHzrXDnrtCDeDB8tLADRAeiLaBpQsRHKkSmAU7qs",
  "key30": "4in3H7Ess6rXwFtrpCfh2FBjkCSHntdap4XHMcpBZK8djpFeNdchTz1Bhqzs5ju6LrkrAqJoBRUAXMFUy9CYTdRD",
  "key31": "2rq9GMPMEtJfEJA6cbRNdnbvhZWgQ8p1XkxhdFR4N7STtcPh6wAiVpVVmAWobiX5xCGaBLJxzQyAPNkRjCicssni",
  "key32": "4cPN47KTQpGG8SHoSR4rm39qAnVe3Lu5EyyWveWh6Yi6ySiUmASh6ufqKqiTyBVxzQdzvQEXa5xat6Vn45DTZKwb",
  "key33": "5LbZQf2dUbyKcdAA4vk1Stq57Hg9cdUYHiYVsR71t3UYQXx8axuqu63KxDJwiguJVz1DzXdqHBsxDqMvyZZd2NqA",
  "key34": "4pSqYVKYMsDxkstcWnxbZ5FSu7fFShVH5sHNA7SekjSA3CTA9nBezBkAxZJpj9rZ7LcQntBisYKNUeoaPNB88HuD",
  "key35": "3ZNP6KTCW4yo7rJeqcdyekUpfy8cPpg1JEvNk1wdUfuhJFVEJjmEye7KswvrGpM8yExyh7HXAhLVwjxGmypEWTTx",
  "key36": "4XEUAHSA9uM4i3CUzmoa3CPaRhTms6xQYFzNzWL7H2JdyeR4EqWp5p6Ney7ef45Hbkt9cppvdmup4cbdR6NWC93j",
  "key37": "UGCQe7E7pWXw9GfkhX8KzQ5nVNGAvbuJGxCyhdzQinwVhccPrc98XNTvQAaht7bWZqFr6gm7vq5jRj7kQaRTqjd",
  "key38": "66DfqZyuvjmdEr2MGumgvxqZMzxA7ow1RuARjUxZDmwKQESVmpVEMVNWY1osAUzJ72jtoSkP9dJvzvcJZEXuoMKu",
  "key39": "3FF4d6mGVZhkME8CqTTEi9yiwnuZtT77b7EfSUH7qjRuTXCKAsXGxqk3wUxD64ZndQZqVUyPqWPQFruj9VGs1zaV",
  "key40": "3hgbZ6hB5tr9GeNmKVbrny53KCHLjmZjkoQAxTkqV5m8fa1CPh8vRVpGwHLA64C5Lozd5kDrNT2bp8F1rYRaWbGn",
  "key41": "2nYdeyzgEHfUDynVHt6iENN3ZiqLBSX3oypKvuA8d9w6B8ZN4XpW1uaGrQjiV1Gnxbxo8qWLxygRu1LuYVkQ1mD1",
  "key42": "48sG7oB37kRQgAQDDRMDuRqQWdEgfmQB6V8n8bvWgrSvDgNddbuhkYw2Y921b6xjowuCZfxiBJ8GTpvjMViaWncp",
  "key43": "5a4Z8WRucV8ix1GZnfKciqJCHDVRjH68QRkh9iTnzECQdSGYT4FzF9LccV7E5o4xpcpZYjEbMCdidURrFbn4QpjK",
  "key44": "4YYbaKFzfkhPb6jxqqKGBrquVNxjDSYGLrMH5PsdoGmQ1thjhw4PHSJfKPQoTzS4n1BXp4VZy8veh37jVt77w1TN",
  "key45": "4UWz4ppro44yLX4UohHUDpSMYEePEutSnrH4jRtxAYsy9zhc86Gaz2bT6oGxPUQtEZUmyyqgqHMukzCayd5gitrQ",
  "key46": "4m46UM26hW5hX7Wx9ANjZFgbCdb3y99GcJKcE7cA5wGMsyMG941RFMxdZCCgd6mMDXxyGz4HTbrn9cfiR28wnU6w"
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
