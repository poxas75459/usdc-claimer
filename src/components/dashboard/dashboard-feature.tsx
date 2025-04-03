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
    "2GDVqasJHd4JkDKUBjha712KyQqsYzSx7quKeXHKcRPhvqdNYcMm6S1GXpXLpe2voxh778v8emH5FXg4kZXtwDcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dBh9s1SEN2GRpJbYjfuGfwFazWYmC44sMSr6vF7fwZjLNKVwHxaRMAaPH2JkkJWDkwpdfeUA1imhf9EL7re2cj7",
  "key1": "4ytzvnVPA3rwujpTcLkPkKG4Zy7Q6JcASTxsmK2QNjFDfi771aSJn1aZo17uffpp8Lq573gMgDrGTnGRgz6e7xn5",
  "key2": "5YmPC4anBE6RsDMapK67ERj61Si5PMb9onJAJXcLfg53QKTWBYy3mn1QLKtegSEV1k1xcdpdAQr7HmGwxtsR3mDC",
  "key3": "2Ruz9pvZ5xpDFQqXtfZmZ3Tnf6nbkiiqcez5edmwhyktdqd4UDopv3Rqiwi6WicBNeawSYQBQZyLTjjtrdqJ6KwR",
  "key4": "2Xyqcb9vaz9xuGyuDG3LMWFCMfPmtwbRkeXobmsdifcBA6x1xegKinhwRfXTtskBJ8yGM1CYh2V9aBfCccibkBtw",
  "key5": "4KTzR5dRakwp2CTGktVhJ9BShc2zuxbrpJvFHDRikbo6xjZ8wHcycGJqoj5eE2H4WSPXbzduPWc33h835uNSfnzK",
  "key6": "4CyXKojQfGukPfjiwur26nahHcf4H2rSJ1xpowKzJQLX7FmiQjKa62YUYs7KV1q2smRiihb6iVXh35GwyBffoBpa",
  "key7": "3GiuiEEWaSvdEgnhF4gWAd5hqTWgwNaAPbyvZKv5vTYpRZU4F8hgJm8eX4zY1CgkJwj5EQsJw9SPCcxxUmGopy9A",
  "key8": "DGkk96jhXeBnGjRp57z7cu85iFq6NxneeC2ZHL8F3NpQgMUcQPpDEa6pEHD2YTDtcD4tsuoEQrk1UoNSJtePEzM",
  "key9": "5juUFzu9o8qHmggiqbZKv4hoxHmhc9QskcnEpDQHrKEn8n9pGHNiDSMNfhwSLR49bHXEmAWE7D3reLzXHuHn8kAf",
  "key10": "4qEffj8YB53buEFiFCGfTLTRj83h9sPdPXZ3z4pi2NG97X2JUEfp8AnzNQU4aUH5giHSbPtqH4AhLha9W5Hxoafo",
  "key11": "54EgJo4XuozGTNJUHvNsp2BMY3zK42qJ6YMykMzSnrbGJP4BNTfDRiYQxHFipLPNWTgyGLENjsZT76Zcxrf3LsqL",
  "key12": "5nRh4KpdA4b4UkYW5xGb9iwmxZpGZCUQkSFPsaoijfADEZ1K2murc3ffbwuC1LLcxoAL8KkAuZMzhdihqs8gqFFn",
  "key13": "5y8zDoSiJuBx6yecRsQ5fEsHzftY3v5Mo7zsUVNs78RawEQPeA8SdE875QMmd1Mg7Mzos6JrdjyUZfhf6r2cVrB6",
  "key14": "2AbNc1kfx7u7v4EtbbkeD7k8KGzYnAjSf4daC4ZsWYsjMo6yqDimEZT2sKeCyzyA763L2xpQYzqRKbhpqk82PAqw",
  "key15": "2oWd5NXN4eGWZFb5UYEuE2WnRBsmHxWM4s55f8jeEFq7cU2mtKJ9AnRpUcvqiHZpVAer6FKvTfQuvpFeoEuA6upb",
  "key16": "2bVB7DyfjD3QUUZEXbrkZsVBFg9yrpy5iiHC9rCvcamMRrU1cb2SfZimLPqkwshtJAwba17UJV6H9STzBtR2b1JM",
  "key17": "5cc2XP4x4R3oh2XVxBsmad8juC7DBXYdbiXhoJt29BeXrRZNd3LDm9W9rMqu2gYi8joeate3Fz24ZeUXJ4fkckLe",
  "key18": "63t5A9UF8ZcT2Dr7NwaWwsxaTJe6o2GSjTRuZZqLWgkMhz3Vy6FLNwEZmU1sVYTjLSfeRKZNxVVjf7mPxD7nxqKG",
  "key19": "5d1HFNsGdUAuLYijtZy8nYjMq86KaT9yBvdFRhPeAuXGpQmkVFExRfCQJME2iLZqc8ELERUj1BVgj6HwctzfYUhy",
  "key20": "2nsGXpFiYiMJQ5xuJeTNhpDh7ogcNLMFwgfXKFsdB3wTrcS2Ee8yhrMEQRMeKyXCjrEH4uN3rCq8DDYw9DCvyX6S",
  "key21": "5dYzAsX2Wb7mua42KzGCTyMEo7rv7p4XC8jTUZSaT5NUAatPjiLuhPWC2AHduWgnxUe5YzrimANDrbhHL9ifo2cJ",
  "key22": "3oKnZMMVBavZoU2xbc4ja1URKQbhZckVutV8f297zq1AJkXx8QV3UCLibHW4WYAM4crqR5dTu5PN9YyrnWhGvAXr",
  "key23": "4TrEsx31pVSydKE1KMHFB8P8UdriANT3Jf5f2NGP7V37smQd2LDZWgptTYSe6BHDCrh7roTwKB12Sqyq81YdPcF7",
  "key24": "5YFyRcCT9ARBpkKEnyFfm6sW7YVsBSyLmMQ7towxuetYrgfyykVoeeV8tTod6F7iKWmQc248yQeCKihUTHp8ijCW",
  "key25": "6H7pGrtfMY6uB4Lq3K8EBFWWnSoHx1kkkuWSLBhyt1LUNeFTCsUDXWJFB4uhKdx9oGuGD4pLmE9AmYYi73ThZf4",
  "key26": "4kJFUKzmgX4JETP2RQJzG7XE82JvM8QiY1qC5qbpfYFnkq35nvUV7ASQDrCKrDNMA1PD5jLt9Zs3KDGdFaXMHzPy",
  "key27": "q9afnoZVJWWCTgyNT34zmgnTzeoxrPHPkbiJG9BWRBCErHESGR8ixhbhKPgSMFqP5S5kb2ux5Fjs8CcxfzyY2D8",
  "key28": "5oZruSAqCWTzugTfamMhShGarVU6Hx38zxCPxoGaETSrXxw2knshXgzwjE57JCE1f2tNtGEjW6hkwJVuRJLcGeLg",
  "key29": "3sBM7itsoVNAJstTPvg3EKBTKdcGGMgAC2PgfvT1rrTnXxe7qhAXabnx32P2Q3nS1Wopi5w3tFBUwtTQCVt8dBHY",
  "key30": "2RLGND7LzZkgFUM8Hnv9hXxKZcBaFh7XnkS9Lxb1kinokmtD3c3adJToMKpMjvxtgUFVc9KW3McXnwSdTiL2dbBJ",
  "key31": "4nFizgpwwApj5dP4Saa6BEodpe7HpEHgh7MSHixxzgza73RZCXXpMgDgSGHQtvCM5nxLrtrrYUzv9BNqPJQUhbQa",
  "key32": "4VjjcqutYKJFGL2rLmH9jD2hvRpwrGpqCWeME21Q5bwuUoj3CJqkWsN8LoMDaRzT5VH1eHcdDQdZF99HbRVDtB1Z",
  "key33": "2hHaJqEGkJvfvgp9X9AXjysvi5YWDjb8fym9GJTmerDN8wekdpawLoNJUkWp1a2RtQnH3gmQ3BEc6wBzjyrvkGXe",
  "key34": "4xnruTcwQQVX3AuT5s4zsJcy2JYe6tyxr33Q8CRXW2MwN8FszMAwGZU1NR5v4DH2Ryb2WDYKJV4X87dYXvxtaEiW",
  "key35": "5oDVosEDnBXikNkC3CAnmhLJobP419D8nAUN2c2fznU8xBNKPvD58LTEBxTCRMhdC1wzpF6WaSnkRxrCxwg2K7Gm",
  "key36": "3Akicr3Mvg2iC4qhV3DTTaJihyzNWSc8Ca7qe5B5qeHPUfZkLoCKJq2mFEiE1g6u5ZLCGe4snGBK1xAsDgYfVHWE",
  "key37": "Ac63XcdKEwj6TChmAcs5oYyBwmGhqsQZ5AgShfLp7NdgZvNMqHpYQsgsu2nJW8jqeTXEk1kT23ZnpgCpVXDUGqt",
  "key38": "kUsYpkpAuAC3rseLKTxyctq2A39Qscwe4Jykbxu4epLBSsZLD5ZHwQ6jj16u9fP6n4Lt2VU5KvVsq2NepbcSwcA"
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
