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
    "32THbDDsxF9oJx8yYFWQqkaoHp8YXV1SiQqoqGiyeAQF6C1vyPtsG7fJwMw8m7zcbwFveB4JyMfoCZ8Z5XZWpm4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pcE6YQYocMTrrj3NhVBQGtSy7wXHsUezsC23NdxWQaYEHhUh3eiaXocNYXZiahFzg1TVz6AFqK37XDcmeGxhjLR",
  "key1": "2j8JrGGvu4M67uDJ1KQWE8HVvAGg9f41DYp6AyJxnyT4QBK2BPMgqWefzzm94PtsStrYSyPsSbyC594JnB16RmQg",
  "key2": "4pKHa4W56RKS8pmc37LSGFy9EkLr1xAbvYpZCyEyETumB4A3WtApfnPW1BXoZMZUB5XK56rRi8uBPrMunV3UuTwe",
  "key3": "4pEc7F8EhLKHJiZ2YiNEQDBRvmXBiQ6xJzzS1fFxQwiwGTxfYcqNVSXvm7kZXw5i6yygTGju6LeFtRZACndy28Cq",
  "key4": "2ZnXwzYPmyqsuzLWz3HbwgCqSTNTfZjka2EFUhZgtTob46Z1tr7RDM23c2jupNubutXBQBzc81ihit5GXezDHpTQ",
  "key5": "vC4aXMkL1pSuDgC8QRjA4qxwkC3kgXdaG5v4BY4heYKvShiNvUWf7UqeK3PPRF9DrTHbxDSdr8b3kjc3psKfhSp",
  "key6": "4yELTNnhyXJjGJaqhrkC9m7cpJWc3wxdctPzPWguUEqgJcxmbkJ77S2M2cQJeCxQQRX1P6tTRbry1QSfUoXQDMDQ",
  "key7": "2mJLW87J2H7UqAtNoXvpiPkbH6k92EiCvVRVUkRgDuzBXQkMEYHUz75LZpm9bTG565yNV9Ey1pQGxNWviKHfpJa7",
  "key8": "5nRxQe3DQ6dpSxe9PY8Bq7oVTfKiqUDn525VMpXG5BF8Xi8RzwCmaK9HXbfH1KvwyCtcPsqYdeam9s4HEEZVWAhw",
  "key9": "pjNF2RQjTxNZGw5VeHvgVwK6cc365u7pqGPqwftxFSWsnbpm7DWsGS4C5YUyfXJBpH2eEKTCeKgpMnHh9QRteG2",
  "key10": "2jzrKAyusDfkTcbfMaWFspk73ALJCEjodFhwg1VgWDz5Fg6aVtNMkkH28qLg7Y6CpmHmds6Vzi5gXGLnyfBJnRkk",
  "key11": "4GSJFDqreenxC3qhPrENBADQRmMJMBHKjEFY2gsqceQK5TDC2tPRAJiNdfz9RagFLjqt6i1szAg9p1QqHrWdipfq",
  "key12": "62JXz2mKArF6b4iQrcXbJ1C3MyGCbx8DNBH3KYnaZUCLu6wyjNpqiVdgiDEHcnxyZ6tGSb1mHLo4HeohmSi9qs17",
  "key13": "5UhKqUzMGRT2MekovWF5Veah7ZC9BG3PMXCMRr2g2ccESSvBtA5XbWee8aF6wGkhoRJ6j4MohFDvU9jVaBePwmdr",
  "key14": "4ZvtUf41MMUYeF8gUY1zncdBgNpNbKoPSw6LzgYzadb3WUm3WpV7uPsqi75Q4TFqFhh64W6gLq6gtvFqSWh62v8Z",
  "key15": "2KmhWhyh9EDLM79FyrBeQhphFj7ZiJ9WXVur8k1LN594P4ukcioPezKbku4r42GJDk36pruFpGFfZ9aUS2qSkMXg",
  "key16": "4E89QLrbmEaMH8oJa5xtnWy6r3jKGSEpYMmHsQJDqAtdgBSDC6qbnJ6AbZN77h9mQbfn3sgQL5xZLarGZpXitfcq",
  "key17": "ZuH3YW7XJqCDf9s1SZHeZAgsDhkDkFBjBnzeQ9wY7p2GDeTWfWWRvppjgW3qM8uLtrjHCEHpr8BJBAkGC5RQ6hh",
  "key18": "4s323WFcUbqB2EVA5tszpDqNbQc6khKnBPiTQD8kCKx9cxB3fHrGXsN7TktSN7nnRyB2VHn5aatH3XdzVQDrNHVt",
  "key19": "sLnaki536YJsnDYz9A2zqMnDA8i14g63K7WWXxUxHyM5FcBigbKAiuabuxNEri4EkWTZsWyuXytbhE3vHWifbsv",
  "key20": "3kWn6pjxvUY7nq7Fdn1ayNknWirDEN2QMiyHVaPN3LLukoTJbZ9kWaWtr4j6FaaUdUwzCKS2Bfg717NH55jbtX6x",
  "key21": "4sdFJwb8ZzmPazzdwkQaJrSxTRrbG3Q9FRtfuAWvpt4CzBU3XCYf9EBL8SvJuo7LXExyqT4BQZCnr9i9uTcXPNVi",
  "key22": "559hfp8YYdBUs38Unmra5K2FP8W8E3Dk3Uidumo7ARrvmduK28v9bCZAMpgyNouzGnQovVNqyNtk99i7GALm9x2o",
  "key23": "2fSoWXHc9PkZRrRetLxxCP2aqKX5z47gWA23hpL84qvpa1d7Fv2BZtwesAvS8kgybBFFGNHmBfob7TmaHRRYdknS",
  "key24": "616u2d8XHCnEbDPXSgkpXEYLUd5GbzqF9fhRmBK9j1oN8BGB8w37LaGKaAfJEX2VVjHeW1KEnK83FNhHcik3nq8q",
  "key25": "3zUtNddGzCdtBQECSLyBUapwhEuaYrwsTcuEoRzwbRMMPUyNPZRDgvZ2aukNZAfpFneTRqs9W2NaXD5jNv18fWC4",
  "key26": "4fDjZLYR2ahJdNsrBkFcfk9Cxmee7igGackH2GUporfcYEbJvDZDknPsyVorr5jxNDVRy5diTf6ud1zMrZid9x9q",
  "key27": "5ULrB69paYYKAgGTKfAEnN3okGZqZtRXp9vFLvyj5NsJcifxcMtaEmv8WYrQdu1yg8NqGJPuCaPS3nwri8yJWgcq",
  "key28": "4gREbcC6eko5UZBvZZMnt2fQbFZRXSXWegsphSZETrYqgfcS8FzkJJmt6EedXq1LcPFwzsZpEki7ghUGUdb42B6Y",
  "key29": "3PY7Tf7HL6nkwirQD4t5DnBx8AH7U1S5PNpBm8mMgCfQqkh7nHYsdGx2XwZtpDC59AmCRMUgANn8MQpqzsrigMsB",
  "key30": "44zyT9drGJhGFRYTfowjVv3xvBmK7iE8CYyA6FdP9KXJ9EnFDubzJFky3g4EaZoRNqpqhR8MChqJK1qSS9yWCuHJ",
  "key31": "3zR2wgSuwYJa4Eh3VMDc1C5ubQapXyo3RsaTKGosif14QmpymT29NCZJHWpGQPQPntdj72p66DtHG3HEdYiCdc5C",
  "key32": "isBTH76omdbLRcbFhTR6c6WqgXpH2Wg43qpSRBWnJU8MirsV8S48TtB6qmM1Zh7CeK6EoRSrQGJsAPn65FNbdq3",
  "key33": "4CPLBujwBRr8MGaPECzA9zrihLjibsH9ydLDRj6PBeZxspZszeKTXntzUcLqckgZpm55KpkwxHp32ZqWySTft7RH",
  "key34": "4pgvzb5S8Yiotx1R6ykoFAaeYra37mB3ztqu6CeZYEtAqUqGYidbxf1zKwxXUWNojJJYpiykiW3fkivH36jg534h",
  "key35": "5rjXHPMQfpyK54ycNFsBfs4jAYprmAeopAxU6iLBFwGEcsewXUK8XDvsQ6duih2Agp77QZpej6jpWQXCiC4GxSTG",
  "key36": "vm2efo8jxGsGpqMh1cezxFovGGqXKZtnDaRkXnYfgvTYo5Yi8okrh2AhmZCAPHxqJCE3WhFRFjUCwSkL72T3Uoe",
  "key37": "7bgR7cvD8qLrcxVpRthtEziEKeAXLj4KiAmdo5YM7Ab226fidJzT4QA1tg8RV3JB4rq1pVMQp2wXcWAY3xzCLoh",
  "key38": "ARDxWUmN6JHPD9xT8VCA3Ms3L6MjqMbmLr9JjhrnKupjMtbZpUFtW16UHY1xPYTmxpH7DV3fSjD7b6BK9GcK2te",
  "key39": "5LreojzKC67QNjVMqVBQ2bt2rZCUZL8hA84viowc4Sbo8wG8BseTkM2CE4N2rcZZ6FKiV9KXwWaZX8cdkCu25pPa",
  "key40": "463cFsg2xatXwTwU421dWRyaYiWZsJQTfywMuRJpvzHVj5NJu9ZrAzsTCX8UWgSznyUtNwtJDDum2hU7wKZeVmGE",
  "key41": "4UisCr99Hc8enn838hJKvE3a7UtGXjjstnmbBqTfUfTUs4NkiyU7rqn2u7tRXoxnLe4j18GSHZo93ojbeMQWUzqh",
  "key42": "5XUXTMtH11mcVtY7ao24Af4fCaAEHZc4T8oE8XQjV7fpeZ2jEmYS3XjhPHfjpcVw8NKtmcZ7NpKk194bMbbziFk3",
  "key43": "tm6TC8PGeHyPt6ZPYJFXmi1aBHhzoV3o1zJbhnWxB6fzxtZp4LoiCMrWWR2vPWA4FEyveL7GNwsKvUMyFiFpwmz",
  "key44": "4ahfVAC6sMCqccrWwR7v5WfRTWzfXSbeoMwWEJa6BTGRkba9QKCVGown1Vh4YAexbXUD7jgJZUxFY73m7VcD48gK",
  "key45": "syihLCW66pFCyTZuioCbfu6Z1ZFi39c2yZf9WEkx3WnxVBw3ZiTuU72tKwHdvKzQZb69ung1GSBDVU36K1k1QWc",
  "key46": "3jHLvCJnWhGd62GYkgpkKNQRo8UaFVMYKQacDDfnJZhn3dSKfxNKr8sU2yPGYpFh6vuy4qXgrweekhx3D9jn4kS",
  "key47": "3GbifiXPmV8xcUWjCZb17abx5Hdmo3BbzhFcniK6Rh2jNHqFMvoDitNjK2qp3RTHC15ePYmQMcP3nDfn3TeXjBN8"
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
