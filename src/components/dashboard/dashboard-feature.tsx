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
    "MgVqU2oB5SWNQwPfSXUBkPP8u5NknNsxDSdCwDwtUVfrBAPqavs3EfnLaJF2rudHHQ1RMZ1BdwfRCBgoKXtoqkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3baen9H9G6bWp5K2VitFDCR91dQjmwKNDkym32oXtLUTgedHPP4pgGZCy74jY66suwVc7fiTyjUML6aGqvhx51L1",
  "key1": "gLHxMmLQAeq1RmVuSzVWaid1FKdNNR2bzJCxazY334Crytj9nyWTQCE6qwrLaGtCHA4ALnzT17v2FizypVEhoLX",
  "key2": "57zXuyoU33S3g8zvPW7VZKZtJeuZRWwBagozhopH9aHMn4AZFhGJ6Z8JdPK2Nrx4nbsqwhGK7hoUErDAuvP1bxhr",
  "key3": "Nas9cnJcdZVosWxNCiHdaBJEHqJoKaWzsM8Ad8aGJw3V76YBREozxGv4vGaC9wVQDTte8bK6wVoLXaXRVGR84EE",
  "key4": "494AsykcMAK4fmV7yrRufp6PLMrF4mTCf66ZGnQSYwjaBtE9BFs4o67qVX55dav2zEM5Gt51V8kiVVuPNkLzSvzv",
  "key5": "hHaqkwsF4XLgNbfwrMRpBDBcfWecTveKrtQQvQF6jWQvDHbA7vTcLepBWw9PrHYNnJP1MPEgMoaJuKYG6TT85gH",
  "key6": "3JrDpdiUR8jBhsLWqYEoFSTFS26AZFcwvwyzXyfw8Gucp6HafJ27AhqEuLWGhJnAuTUJRceuKbvYiUJPXnx6rLCg",
  "key7": "4kuUwXfTY2kTqpY8VRRqkyU6B6N7Zjnny8BxS7Zr1ZvCAR3fjwFGyzKyENDTX46okUurYg8vK6jhFootwcXqRbfW",
  "key8": "2gBckZaLdMNne4CpWBkubLDnnnrvNiyMEZFmHhVTbjJBTfmFGpiv2ydDP2tSU3v3Ti9kf56qZKiVaGTE8PHATeBx",
  "key9": "5vWMM5kgQWMmJbBymAA3Yye8DGRjvYj48eHLeeMnyhohcJFw3jmmQrW96gZt1TgyN1F7eA3LUUTzGQMELZZofyR1",
  "key10": "3oqFcUnoTPJv8rdDV9oyy6HwDhDjycwGLWi7jmobjAFBprv5M6AsQGFiyea3Es1apAHjhY5xTQbVhcngat4psYhd",
  "key11": "2jc1oJvP1NT6JusuxHtqSgYEerBab8VFce24ZVaEMEYUxhiEFU6CyZnHiWt6T5Y2wXBkTu2s969cgTRqsEnbNAq6",
  "key12": "3LVRiY9wZu3PwXiT7nkqvoZy1VRfmwThisXM3e3NhpPLqjE1ZBtaa2jiejFTpW5TUxEHLwBv165v5c3t38jKLgiz",
  "key13": "2MzWUcqjsd3exxvH9GtWPEVDBZFWZPD5qtqfgj4stASUa4zvBMapKCwdQmdJ7jwyGy7yLDJeANrzU9NmwshGnhRc",
  "key14": "3VwvxtvwRLEk3YeHuaYaAXrh6RcMdJHZSNwuB7YTDHN5V7BFB5g7wtg7HtzGceBD5ZHDWE4ptfNq1sG4LUsqecHJ",
  "key15": "4cxdWgtGDHuK7Y2V336Y5V9cJfH9PZwUkV5449kd1XMUNpxAMVHhBFZN2nr2pEo3pndFnQctdcgQFGopyn1cgZnx",
  "key16": "298QmFz5UqrYz2wcTKZrpephVSNcM3qnJ4iS4v4SCP11CD7BkwnwtLkrXhWpvze9zYB62LV5HHJ5hT3Aa1Jb95Xk",
  "key17": "2nyCpjfeXJLhbE1titoFRLaGF3AAsqTUSyMvcds2DAK5GHbetxYWndrpyZ6muZocWiADcbAaKvXWBzNkBL2H1mmd",
  "key18": "4DCeQmHj7AbN81RC2ArXK3fmqxKHJhWYZBE9usDa5iPHWzYEwyS4XWaXfaFUfT35Mz9KEaDKuPTA7XUhFsEmBm6c",
  "key19": "632Sc5t3ptnz3YxyGEXk45Zqs4s5nXnChgRfFD45nuAPx8TaWgCJBCx2zBZR5eqzzgJGkz8CWmfrZHSwMRH4whTK",
  "key20": "5j8w4gFme9ySnfRuJNpawA29CLmLiQ6s1DcQcCGzQd1dKQa5uvsq9RUzT6QJ9F5eof4kgJkspH1e1yPFzjzqtt8N",
  "key21": "3AgL4MBKWMd5qs2CoQuJa6yGcmYWm8bQv9Gvbueq1HTrSW94dWT3CER66EUUjyob1WBED645gzpm9RwdrdxTnEAq",
  "key22": "62JVCWpzojuGxziJqxaXcdpiCqVfnxskR26gKz5KSC5UnW7yz1XXt9Z125X2c5gXmZ32PDd5oN93qvPwHEjrAU8b",
  "key23": "rsuDtsDDUS5eUeJowsqNW21mmE7fpMwsJG1RuBUM1FkMu83Kn8ijrzQ5ptwZgwG7mSnvX7EDeQTxqKWyHSHEbfF",
  "key24": "3qknk6f7G75HEwDKHEFiN7zgUww6hm2NTnoQ9NCs56cK5PSEbsWhMHBLMaQkQsfAMdPERhEvEYKfEJPEAb7Rzokg",
  "key25": "27BSkuwfQtRHYLk8vguQHjKvGXJGUKjUUjo8tzX9myQz4xHMkBUbfhQZeoTHt46qr8g8eNPgdwc4YNzt55HNiLK4",
  "key26": "45EJpMeuNRPWzkwXUWQPXPQFLHkCDk7v4a7JDssXwWZFCHPKY2UmDCJu1HgD8qFUmHncigjqgCgqVa4zQGacifsY",
  "key27": "5sTPVU8Jaog4V6ZRoHLTDbPyy2GvNqBo3ZUBAw3U3uboX3LNb6d1gdGtChNsdTQ3GKjnN1WFtb5gCwZRRk2gEjkj",
  "key28": "32UXLzDv7Kgmq6cK74hgRiuyxVyfQXN7zdqAEcvTj1Ly2Jj5QmVLE9TLmLKL1mWhRZsaxzyCrGpC9FPk2gQXmSff",
  "key29": "3LX2kXcT7MefXYk9pwuEZLPJuQ8quXTqTwCmCXVckETR9YrKif593BtWJqnk4H4qRtLEmXZk5jFbfLbWsYjbK6Md",
  "key30": "2R6uhFL8PQwsqKRPC8fC7DFtz8f7GAaxmwzyhiF1cX2gfAHAf2tzkto8a24n5LsGJxQyoT4vCjaDDg1LveQ629En",
  "key31": "29aZhx2zeoNgPZtu6ozwgjHpg33uAywpnRDjHTHyy5AX3YBVF7BvqyeuULeC5kh14KXNMnXHncYDiuz6P5awBYit",
  "key32": "661XFHyjULtirkKMHPAbMeRK5Kj9o3yAYqejgs8UzFBYL3EJNWcReiJAtPG5dw1VAebqSAkgAd7Gpay1G23WcK1F",
  "key33": "4W1EbFjK5HhrDHSKK5FBumj5TH8QPZhtW119ktRgefcbf8dK3Y81AyWSaeNjfn2Y1GF2Lenmppnv2gW7cPFLi8xj",
  "key34": "4EDddbCnPmFDbL7oxKYFqTg6VUePCdBxJGNRh4zN66tYvw1sTFjoRyXLaYpADXdxSEsfLvTk5dNVuvjug9huAciL",
  "key35": "3J8pLaEpBqgCfCQLjVM5CXBRmFwe9bevU9GVRhsk1YeTzFF238izQztBNHfmEUsWpRzC5zDpW8n9R1UiiMHywYDU",
  "key36": "w2cnaumkvtRRRGUHXHsBTo7347LfsSpbBGzB9GrNUV5NBkEJfAS7Q1LaroeuntwFkWGdwzpwCqDDEf8nnn1stoK",
  "key37": "3efqbmiEowaKgGEH8R4fycpV7yh8vBr7kWUXboDSUyY8Qr5zzxCsPRkXKFi7uXGC1t1WwCBu8XCukYs1jUdSyAA6",
  "key38": "sTpTYUNkKjPfHsxtXAVFgSANZM8TU8yk4WdACcb7sb6A5vhSpCVEYTzRa2Us3aX26arRbf7tFzpyt5gUb4K8Nmg"
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
