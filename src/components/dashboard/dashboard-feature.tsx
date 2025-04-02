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
    "2pFdDVGTcDL29vbnoshwDb5fMN5fuq1bEXFmm7vF5GfUoPd9f77HK6vSGybUMZmWKum6ANurSwZhZRhpeA33N2Rh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jot8yXv9F5KS8d4G144zF54Vf1xEUgCXH7kThsTthDmNPpA4pobavSvFj79WvoamXBy1U9u9A9XxU41UgFDJAdG",
  "key1": "2brLjJ9htJkaJx2QijvxfinQyXKKs2fpdPA9kQQgdYytuHyiKfz9CERLx32nxYi29XAQhiiiVEjgj7qkt3zQZBbq",
  "key2": "2dGc3wefYHFqcyrUoEQKCf3uRnXas4uWut3ewuDBAucPEnB1usgNVgBQmRFDnPMZ5Ljypv6vSMR2i7mtgcwajED8",
  "key3": "5hHCa1qqoGbdVVoKoPjtmgpRu8p2eBskaZVgSayax5aB4VYHxzJeZ7Rt6v11K2TsE2FTia7XMAjtpn8PsknfsG8N",
  "key4": "MgePrVwUX8RbbyptMPmP3kzyJedPW7TMxLYF1Fp77RyXXw3n4pco11sG4fpZnAX8s6idwhgfo6dpS5KbYc9QqNh",
  "key5": "5m2Qv2X8EsDDdQojfdwwW2VbUmwzwkf4bNSinoH7LwZ8quuhhAZEbUtkTrr75Y8qzhaY8d9Q1R3XFn9XdE1ydyqr",
  "key6": "2i27xMJRyCTwCCvq3FZtDV6Rk9pk5KR7qKxvmSNnn9w5cjKMm1ddccUpYHNauo4TuruDbytMKAvibHjun3UZx6Jr",
  "key7": "KNozBaib36GzHUn6Na3pdScpXSz3d2XkfXqeNrJu4WitySHgGRSQ48hPkwVwKUqgLfoStMaWMEbLcJkvZsuaMDo",
  "key8": "ZSYP5SAXxoW12My7vH1LLoFDX2rhkrWWJxdmRUmCE1NS4wkqQUEcfVgobqrKmRZp5s4wGa3JekJJ4iYTN4QQ6Pm",
  "key9": "4K9g4aMi7D4KtkM8xe2w82z2e9YnyMo7kuwwWhGdBPK5X14hDLnzJBNnEcQRsfAzJ78JpfoQRMDMm6o6zU6iesD5",
  "key10": "29wn743t7etw6LigNno35UQri5KctBbkNBhw89u1pRcWMvvCnY3st2U5drjYRz3rtFaLsPv9Mx4Vm16RjXH2tcmU",
  "key11": "3us95BxQXVCMLMoN2oz17oJgz2JVV1j2sVfWCv3uLdK2kWQBn9qN3KqUznZoeubrGyEume1dW83tVQJ2Mi6F5PCh",
  "key12": "5UxMj9vWL29QcZW8nmR9jXpmZfoJArZejQLM3rF39PjULe56RWeiXc3EtQDK4m7LojvYeHXnYtBsmJd9KSyTAmtp",
  "key13": "4p9DAbh6U1s9JsDKiearHHbbAbaCj599t2F6a2ogCKmLQYUDdznzuX1gAiWj9V9iaEauX7zaM87rmpwHd5Y272S4",
  "key14": "34wbkG7binYrumktXnT5K2tAz9jy8zRUjBwKA79w66SYmWcvkiLYhCuXz51H7QTKYbq3dYos31jZ6KLkKC1xkax7",
  "key15": "4Q8R1oN22QJRALWpAitUcfZD4NossYMBWFw1Mzt8bcJZkmubmcpBZJ4EJP9BqMwAVsUMhDdU8wr6WSiiKm45YMgZ",
  "key16": "3Scw4om7UVp84nPwmYkhL2BWZE8AmhfZcgGLCGUaQJaFSZuZWLwu1gzAMnUtiFfUWMP6PtVX8wtnp2Dqazey1A4j",
  "key17": "51qDRanBaou638wTLq29Dgm8nmV9w5okTEKdUmD2MuqCfjm5H57s3XmHM7Zt7tJvLziedtiz4GnKWRpGBoapKVNz",
  "key18": "3jYWUt47nSSS8kcqqcmyJtvgYSNArboGdjS21P2zJ84yjg5EHuodG2TAdmi7hhYRcfRFaFzRZ3xkqNbLNAfrJsaP",
  "key19": "4nP6EomPcH9R5P3b1Y9tYwMCcAWotxaUZyT8nWJGMocZw1fqbipjh9fiDax2jCdWTPENZ6ezt6HJ1vJf7emas6pc",
  "key20": "2G2hTYh3rpZcFAXVwzj1QX5heUHueCdrtLjHLWgKCJ6THu5kBvcPRRANcnmbUeAPgz5rEZk36dYjNHCvTTtBBLv4",
  "key21": "4ZXP4nzRYgbrGpMU12JQNkHTJoK9kmry7wc1yNMW5KnekuUp25Ukt1PCFxjfrvmmFBfsRrBXsHCDbGA9J6Tbo78Z",
  "key22": "4rYKTtW2FcPKqSXPBdLFd4ctFEnP31ZvSdFJM6ZLEjWmbKEhexodtzit6JeAPumfPF1ro2vzAKpd7Q9ZwXMSwBLA",
  "key23": "2unzTUghyTjtSRNrzfwMfDJuDrZVVAK487qULqj9otk3fyM1wcFNqFg9RYbpqXb65S2rZzS3d6hdNuHUV7EGcmjm",
  "key24": "TWnK4Qh8L8DEAhEiJSofzyHtjekbxKy4AoBK1Tzm1x1XoM9rdamauiohSxkju1TM2BQFuBQL51D1ei5g66BEgmN",
  "key25": "5R6GDDC6PvKVDVeRgrC6JNxihaX9obGqSsmkjtPfyMjgAbcLBMHtWEjLJd3SYJJaW8eSJjD6MJ9ervxUhTdJZgyX",
  "key26": "57pKSgHZcNk8XsHuMp1DiU8jA5XfujsawKHB1BE6qEA7aVEnvFaGVtU1a1gRKxnJY726zRgV2qP4dCzdegY9cQ1S",
  "key27": "4i2Po2dmxYfidZJQA3WxGQp9Tt6EGoge54T6aXXY57eAZTe11rf6mRKJxkEpbmC16JGZQZMwvskn16egRYpNeVG",
  "key28": "LbivJjDZH2rEhCgKnCXSu7Kr91bv6n2oiuQE4pCfs8u86ybDFWufCnKr3tzSYeyyFGDEhDomzsmZJTm4m144W4H",
  "key29": "bDrVaCZ5TGWKNvHPFyqKJV3iKGG3T9NKfDrP1y5Tsp22DGGoHyBsWyWAiEjF1wVyw7LB1WngYutNCyZX2FEYAJs",
  "key30": "4uyjW1R7eZQkRKkQvyH6owMnpXNnSAPJZmgnZbM5jJq7kZBzqpfwZJZYPeSjxWiUc7eJmV9uqfvw8y8ouuXHWjYw",
  "key31": "2JaNEieZjNKRNFyTWQHWQd9SYHRFbAjHZiA7Yjdzp8mzfQZz2LCvFurmVYN6ge86eArRD1JU6FdqtXMbFLKW2TDf",
  "key32": "5pXDFrMqT3iCRCRKveAtYCKHmkmMxQHcH697jo5jbmqDTwXFqGn6NsMTpEH4DAJJVqGAkkp9w6H5sKNZkAGEU5m7",
  "key33": "9AeJQXysmF2xbX7gxfdX69s5vxLbV76hAyhFr8gyN7s6HRezX4N3qUxzmvwPexZb3K2jgapMiptenwEZtoMSSbt",
  "key34": "5KbFpxzc4wJ1XsKzhVHh1eVF8HyaBHG6Zu59HXNvNa4tszi46GNVkhR9GhNdvAowCVFjNHDupWiBaGXWJTNPFReP",
  "key35": "4focg9X9bEbsRnqiS5oMXG5wq95EpZnZcyjCnEpDEErLYqDK1p8WYVsrF5LFZR8gZrcgHBZUivj5HKonoXLgxqJr",
  "key36": "5G4h2xGMwkQmq6iNHtToKcpU12f1QEcKdGsWZ3KEndYC8XF1duJG85Cq3n8jEbxuWzvyvWg4yH56iYDXqBEW9oiX",
  "key37": "4EDHVG2Uk1F4ao8bmrDufhdXcUFFpDwpm7zXp8jaGPix6MoeZXhK2fwK1tqM4puGHmuGJKELVQh9TvGgB5ixiE2p",
  "key38": "31nVRMA7G2WFmonTygi4JDG5qvVrPsxzpo1Foui7eFKyios81gcWQoaQZmK1eanTobKgkKhEfgf8YEgPKsmidYZg",
  "key39": "DygFupuwXS3uN797DBLz63c9D5HfKM2un2kiaTCD5pbxBGxRWTVDAqJyAEdiuKw5WaWtFeD73F7GGJKZ7SbgCPW",
  "key40": "2Y9BbwjQnj7z1JyhYWYV6PsQbzQbwERPcJjBuMJHgL98MHddSBksDW4ogkoPaGjusytwuJ712aRNb8XEgRHDCJPg",
  "key41": "62bmGzqbF586i3fnQvZRTW7mp4UcAecGqa2dtDTvZc9NKKjFq8k43PsNazFxqY5NoQCBHRqYtNz8j4jmik9sLzEy",
  "key42": "376MyVPGeh25QTV2kRYxvuLN3FqCyKtMCEijoUJQTx4UPc2NrH6TjPJawM2Vnnsx9cdeFfreVs2JhhggrSiZTx47",
  "key43": "5yGDAES1SSjprk7GQKySt5cz5cHjxXSdJPYD2onhvvSSjXew5rpAwiuawjyKTCEkek5D7UpWzQ4jWk72T9PMJLx",
  "key44": "5CyFVGop7enpAsEukEw1k2NNKYP892NT8hAwa1eXt3NC8NPdSoUAP9HBRrSRLdFSeEnRej5NvEE7ByJo1HsZJLj8",
  "key45": "36SH9cbQ1DiXZ3WHxQx4PR6RYX9TpZoWswLEwQpVv21Xm48uLXUaCw19nqRsZCA2GrRzAVeUSAf2krQworveD2yk"
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
