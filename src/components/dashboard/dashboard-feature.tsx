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
    "4CyGNkMacHsy49SGC6kukM9JVqxRiAp3stXAstrRQZpm38q7wVnNDkMZRmPcygtujffdy4ehfxKipf2RRXxR9obM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2otu1V42VcinwGcECZbzoBdidcajq5E6SnGhDrNjrigoiGCPZTGSLkRbkDFUiKGWWS2ZwDiq9ZEiXieT23kYcdss",
  "key1": "3rSuAZF21FME93sFikxBwLHMPtvSZh8GkA96HJDY1NwxTXMd5AuJfGihJMTMeSYpsJFgefwX59XZffyraNvntzQx",
  "key2": "3gMGE7vQDZ5UnZ4FLfvSPTK2ubFyHW2Kr3No5fydsbCRjm5bmRyVz1HfnLDektmPtRmWa7Xrw6CzeCuc2UYN8faL",
  "key3": "51Q41mbpYXB2ytrHStWD8uX76ZssfJe4XQhghTxVmAKcWMiSaVRLQGnTPdy85GwJjhPgz74D8VnmJ1hyoXC5wkxX",
  "key4": "4vvJytVKcByR4Xpx49oBzpBzyJJ4bRzuYawbH4uABcVTMRNnopCpVNwrWPp9PvPKbQHmMDFg7USsmjyo7Q75YVGG",
  "key5": "22JHHGqoQ1DpXDPMHW6wrTPEZ6ReQNyc6vW1QAFT6Nd8EWGYbYC1qdJYeQAtMA48FpobVX8vYfwAiYoe6MPhuKmg",
  "key6": "52DdkTtBYjmFM2iBMsNWHFHWpN4vtgR6BKxodzo2K8dKAmYdBe4LMQ96BvUMAWjHLgh5b18nugWz2xxLbMTAu55z",
  "key7": "4sDmvM7qvbowC3mrJ1wtPhKL2AKoMnNBC2R7KddK7wJwhaKPC2hTDwrwHgehQLKbVvmJem6GypUfUtrbRSWqL4pG",
  "key8": "424nHMdFL12ZWqcy5QyM19mju5fTYzVL7FKZdWEu7DHsqLDU7QRk9pqAh5Y9vh3Xebf8hgfdXVgErfa1VqpBxfEp",
  "key9": "5eM4MDeVndvp77xiJjhe2NnUa31EkLUmq23D1p8qvzSJriQfjNkoBB5Bj3UDNWwjv5W3Tb3J9LUM7oyrfXP7mxSA",
  "key10": "3ZKYxyp8Q1EBQ2hTDv5JhtqXJBMEJfciPvDWShjsimxjLomdLPhnDqC65JjKj9nSQTdi1A1kGvHdR82JPW45uUFZ",
  "key11": "23LHX6r7GkQPk7CwanXZHnvNhqUnMx9CkRCtf75TrJUpQFGYNmcqHFj8CUoCHCX74RZg6MftPfJ9GdemUrie5sjK",
  "key12": "TAdBCwGcJXdsHruwJYF77TSME1eL14RCnrgVR7AxH1DHiVaRUygquu1NTBMSsKsKbMwxeigS4QxEbQPxpkXmfEh",
  "key13": "3FenSwtfQwiP4kDqYY5BY7maea18YmBe4hkYFqLzMcQBhr9voDKa9UX1ajPAFMLy6aLdU2oRoqGTXC3DsS7b56Cd",
  "key14": "Xf3p3SF2yuAuutj1A8YMyZ1fSdDAF1JyPssG2XRE1E7ZD4Khv6Wju3nj9CeyyMtMkjq1i2mw3WYq9xLsMaRUUUb",
  "key15": "5dXij19YyyFUKdrz7diwtXXeyQbUC4TUMoo7ZDrMfyqKUibnRVHfX5SC4wqyHGRsjTFqeCEbnfh4RBWvjFMFz9rP",
  "key16": "3FAEL6BVWns8QrrQF75pgdNHhjntYy6TSaabYfMCWYMhxy4XptC4zxk6BkH1VtzpAjnjWVyqeJtXFFWqyJjP1UXq",
  "key17": "qSKzSCKEV5PkUDrfU334YBj1NKoh83SADUUAfDqvPZ6NrgT34RK6ExzAUbQNadDriw9Hkvy8neKAkj5KpgC4cPq",
  "key18": "3ioZvzm4CtdxgCFgJEwNLdKgWFciNs4roV68g52yZ4xMP6uAvyFCr5yjhw6SYmNytXEpYjqWstrFQHqiHuGXnfA1",
  "key19": "3xtzj7kATMt5Jf27tV12MoYxWcete3wXFe6J1g9J2qMFRRXXBBFrZtqyoWeYyB5AbQDDMU8ELe6FkjLDCY97TTSk",
  "key20": "2rGbBy9HL4PVxEpXw2sUydW7LEcTW6NntVjWw6jGUZNQEhrcZTBsbC3vimXPoiWqyPtcPohgfsLK3zz9hosMSwgp",
  "key21": "7LU4z7cSSTARNi6MPkr62x13W9VpG2yjy5v7NmSWMsspUe2xVJnPQK89yc2negUZWDfqxSRmwEV2scwMCTxyE1s",
  "key22": "2KixLGiWijBbS15dZKAvqLc2nxwqtqSWBJP3fJWs1zFT71QHwk8b682SKAg1RbhZJZ2a2nKE4zkBq3nEPWJtv3US",
  "key23": "5Gkd9ynDDsKfQcrnZGHxqUDomsuSc3vBQammnEc8oYhB36utiA7EpXr863xZ66Vap3QgczSx2nkvdk3wZm1KCRbT",
  "key24": "3gwPUNv91aG8HCezBmoMQb8ppeSwh3ixZQRyW1PqhUSYTqimaCFPHzmhcx2iZYW52fE2qMjuV6y2NENFzG3wYnvn",
  "key25": "2nJKTVVAA6QYTb5fy1neYbMRahdCFiz1DBp46H7J9cmGk9WCWD8vQncGCFmZiuyRFWvLFkMjF9cNeKc6Br54XJPo",
  "key26": "t8XJ17BNQhj25wkHaUU4ogyqRVhorpbVzPmJxA3dDN4VDN8CNSmDS1vw8yJwH5NiLqhpx6bPMkdi94hkGd4YS1S",
  "key27": "4rRqv2vK46QQsbYbCBrAhL4BzCGDmqqrDNhY14qz5ku4H8mWJyZ96KoE1BEpVmwpUZzQS2ZJiBDZTwPN5tPHuAKa",
  "key28": "ndcx7LMwBZxp7WAqUjpTN9FrBhqLFwk9KLMusVGUNcagMyn7uxuW4JeMhXWCbSCo6hTkitogFg7wrL1pDHmWWkm",
  "key29": "2PE9v4opHy9qXCgpiz6j5nxJobzTE9vGA1vDov7CzBRKgpYLLumAqHbpLW6t7SyHEZzuhkvjKzzR8i2bdiaq4bGP",
  "key30": "iygb48GxP3em9nviZAAd9GtMMtJPZ21a6RyvMSpease6JTkfTHfUZpBBLLzdXVUiaJWxC2ZWHgRaFY8EG98iQVh",
  "key31": "2QXvNtmPrdAayCU8v9D7u1cRoRPubCLve96rTfpp9M4K27TgRs6GDogJ1zeccHVommf7n7j2CPdKWiZJxXQ6vCZ8",
  "key32": "x8vQLh7oQpazaSzAhqZ1bJxTu6djKKRtcv233pofJZ57K29WLXm8g5emd848EpABG1TGGMTa9n3u4Lccwq6HKHk",
  "key33": "kHMqaXjTazR5LWVCRhExx6LRdf4cC7QYMZdzTzJH1jpfonBPNDfmr6txPTdCX1wysQXVDTrEo754y4pRxegffuW",
  "key34": "4MHRgz7r5EK2pKFegPfQ9opYVje2nZXsvBAt9JUMDYVFQTbKUcQBxM1HTp8nmTpJbBs6XtLqCSKpqgCzsJrsp4iA",
  "key35": "367foCZ7NnKAKMQWFQvugCx5Q7Ni3LqpY7wz41MTr4EMsvQwCXMAf9kD52m5snJoNRFwxqh6HtCeqevfpXDbnY2U",
  "key36": "4J55zGWq5fvjC2ns4PjhvpGfGyaUavjBxCej4R9tQtqoQqCSvFFuxfqsBP6WjHutpPrEMcszyr1wMZyfwdJQNR3N",
  "key37": "39dJvzYpv6N3ESNzBu1uFmphfXig8tJeP6SkCKfkG3Wywv8GRXZ7qr2Y3dLcKFjBHgRgtLGvnx4xHrKbAu6PedN4",
  "key38": "3b4K9YxH2vQxrxw5K9y58yywfJp5cozEmTLKnreCFpqkkEw5V9P6mEHGCv1k8w7teUMiepGFMXQd4bSJ5WXfiyzi",
  "key39": "5u2c5HhtPjwTsdqp8L9P7YcdYEXvGboUDLLjgNHbRZUUVMpjsxsXD3mou4cqygXLrfNGXAct1y8LwDeJNVJYVvCc",
  "key40": "5U8mkmzSVkAWej3sLygwJ4DNaK8s5Y8YPe9mM7yKHJ8xByc1hyP9kVKfLp8X3CgNHoMQad1ThjzdQQCSJpdNuSoF",
  "key41": "44N6u1V7xvXCWBNSYQ9UJooJXtZ1b7nALHLRzsg2sKSMUdftq78REzt6pXPr69vnfh4oAFRyDcSjFt3MSUy5hnZo",
  "key42": "ebm4dYspy2dRnCJv6Kwj9ZtUCCStwbwS8p4PFg3Pq7b7tjE7E4ABercs7pBvmLwXift3vAULBTQRw5YX3WswRWa",
  "key43": "66xQUT4u1wNchREkMiYG6y8dTTxiCtYrbYWkFYSNizFq1h3c2JUMrjVqCgHcVSXmVJgbceKN7mKbFXBQaZPXEgzj",
  "key44": "4J9uHL7escwXkiVH77X75oWHcQvZXNfLLobwmfsVwsYZiA9T19BRTNzvp46zPyukskat5z5fyGDeVRwBr7UpQHMH"
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
