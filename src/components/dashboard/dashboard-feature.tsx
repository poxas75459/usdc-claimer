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
    "24Pud1WDu9WGVBJjoqp1RWHCxmY41hEB1ngt2BkanjPJk62roiX4cb6B5GPYqisBKGvdRPM9GzpvSGMu68z1hLRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XgQb65Zv3PLxok89hz5DyBNbq6wWqPfGKXtDCyU6UseymqTTTV4GRBTJcqqUnXqHkZYxwCkmGZBcD9z5JxmVsoC",
  "key1": "v9V314gvg4voffJ3CRki9eo8ugmcZ6qYazjVh5HNYUZz2QhisGedboyz8TqSwUybucJgMFwjimEv1kLM6PTQHLG",
  "key2": "2Z3k583cZ4KKPgSmh862N4HfZHbjConQk8QWhqSWMvRyhCKBaAz2PqCjSWuNaNLMmyCvV5jcbberEnCX3DmfX5Uo",
  "key3": "3hSp1HMKkkPLrUkA5wV7e56woah3DHEhPbXmjrpkcBJviYuNpBRHX5XNsxwCvCvJ2LkZFxhL745QCZtuuNpRe6q5",
  "key4": "2h1JJPeRXXcqUrntFpiiMDhKoHMvSq85z2XNuiERNbcXnD7eHRh24i39QYwwnXg2UwCkL21N4UwhcFH5sCTT5o3D",
  "key5": "4hMogzFCjC5FhAQC6xaJuLi9WwCRZ6RguuCNXzV1tuYPLh22kwpagimmaZNh5eUUJcNtGVMfksRsiaQ7obVaWMFB",
  "key6": "a9rmiGX6Vg1gYyztX8aPxCmGvBrDQenAinxJW4d8sHStTxfBgY3kUCS73chxRhTRxjoStyDf77zFqzxDT9o9QYd",
  "key7": "mYiHAo3f7EkB2pWsTE7422sEuQA4FSc2SZTN6UnASRrMVzp8XLfKjc2FTgA4JjPjhUZEfXeak3tLUemxvKkJRUQ",
  "key8": "2NmkE6WMZHDEUZoDNodU3uVidy3xxAjETYKyx16v7xx9L4zh2xWSTAh1rjfwfMKKcMxtHuzYvTbHDismpt817Chg",
  "key9": "3yY27MWXiVNw9ckBiYbu4GKLWmoVKwqqaXCBptsPUNeZUVLYvATvxZVuKhBU3fe6yP5NeRE7n4bL8kYqxi1QQG3z",
  "key10": "4Dzhjy6Y5JFKHNpX7GzDWx8fYTYDLcjxjyTxCTevTmYXgCKHYWMuR51WCUXEQyGEsBqBjLSisyzKbV4Q5KaqYv6s",
  "key11": "2fR7McHvRAQKUvUZhn3dH3PnuX2fcE7hqqWDDBLdS9pSPVLWpuQ4fHmV99UDX36RBLwF7yoofDi4jGXXp54ocxf3",
  "key12": "4Kjh3mFNCRm9dmLwYuDWRPCdgkFdAZxz1yocirSnH433Jz7gXEtbCMhNrifuCJk1cDcpNy4xGuFntbGAb2YE3gy3",
  "key13": "j711LYSzypWbKirAJVCL48k7n7Jx1wHNicLVpYbpbEuLiKuNsYM55JModt883vdeSPUamcrKvXzRCJSZvNuqK1f",
  "key14": "4UvHcvTsQsyUCq2wcdnDL6J63Abg2zQv8SoDzkXNgaXi2eNBbViMMkMdn6upXLZNGrJXbD7VveM3SPWJt8vvUq6d",
  "key15": "4J9QNc14cnFm2kZSazN7jt31d3zaXYMZ9BcY2EpMSvHcc9uuUBqHx573aYd8McKvXKCKM726X958sG1GbfjLS4qS",
  "key16": "46YCmUXYYevZxoavHAx8RT4cke78nqPY4jz72AZHSS2tc1qVzctmYcDsimShAShcjKdV4Kjo4QvvzX1RAazhr5vR",
  "key17": "5hzT7H5z9ZFXJs1aakgb22nbHR3D2CxPw49RxVNtQdpjFZDohUrFvHbsMiNrqy4pFot4Nkv3nbfWyapF9jmoooEK",
  "key18": "4vLvwKw8YAZWHyEnP9mNT8YqyTDP7XLYvXb2cLDH6duFT3HHtpwqnHcAi6etKhR36LBQ242C8xu6VHa8RLvfRvrm",
  "key19": "3QABwh444McbretLTkL9yNPk5QnWrrz7cpGEtxak8fByai8HVgwKTYbKEf6FQwPMZywNRe4rUMgZdXK5RePQcKir",
  "key20": "A995Yp7o9BV2ZzyuFdx3SLouTsvuJQ2ETQkZ6ExJHAgq2tugn8iTvJDkG9oH8DoemffbzgFz9KQZPPKTmQi2dp7",
  "key21": "wmzuijdP98XQ8GZ8uGtqMP5TECsDaBrpQpM5jXkyFmpf37k3guXpVBW2A6QTNJ11x8PuehTTsZ34U7xBjcTyszv",
  "key22": "3UtBcAXdGA4GRzb4XQUT8qeFc11knwW7odaEWo9nE3N6UCkmmbKA2DV3q5Wq3cs9v98UsATyMZnN1ejxM8GjT6tK",
  "key23": "fhujQYjBsUonjAds71smxVp9uqyJRM7SEE7zHN9Cvp3b7CkW2Smz6989rtEvKuPf752f4VJYKGyCEsmUrf2Sjsn",
  "key24": "24xdr6SB3WkZaYRcKsxyaFaJszQL6B74LG8kCsXCxH1iWMghPBnV4FXeT8KhPfwCsE777VHp6SVhbzbr1oa6U3GC",
  "key25": "5p7sCYuWo9N9o6kCFzMvn9fLEwGxjAW8J6CRQqm1ky9mgeVCS7zhbaGeohDermJVenrz1ty1oAd95jsdYBmFPmMU",
  "key26": "3RgdjFHG4KkiAyxsnLqKtPaL7pgPdnutgHcnjmp6Vg6t4HVan4Wq3WACDqtS41XPdRkaSxTFuUCD9pSzUQigzehS",
  "key27": "2Kaypmbry71ktTXd1LvErJ67aAwfhjxxhSCQKdZqexokqeDmtt9JtPKDUdAtPmvMRjpGaNo2wEPJW9Rk4q5At43v",
  "key28": "4rHKxnRetjMZrJK5gtm44B2Bgsyt9w8EJi71WEvT3sWA2pu1KiJkfSdYWUmhPLu3sUb4JAtFZkoAZqPV4jjbAHK1",
  "key29": "4iL7j976LqK3Uw2nUPRRejovS8CWae9xijfFFU8EH26TggACzm8oTemWgixwxMEBvDQjy4nFG86sX4sFEbzqZVXB",
  "key30": "2D1HxynvwtMpFuawFwRDPjVL27D17UpjJb2vj9otpVxF8P7t1eJPy1HUGwdV49mtAgMYsPMGgFDePkVmz6PuhGJo",
  "key31": "KsuVAGCtq4v9pEy3ZA2erL6oUB3VWnTXrvD2Zq7eRp8uiJ8VwYSKSZgSHP9X8eZSomeKqKaXgSrWU7epHH42o18",
  "key32": "2KWQJfUE6UzyDwKKYgoPdag6RC7qFR6rzkNgozBWUJWmF84hUvkhSUtN2nsoBzwAgddJooY53BS9ECU2Bh5CQLUn",
  "key33": "3aDVbkxQ8Mosz5Fj8P6DadQUwD5RTMQupo17LgpajvHC8hcbp1P6qqyfKW8wzi8m4p78Bt6Bj35qLooft37Yt6my",
  "key34": "5FaMyn6BoTi4LXKMHeV5qgYB1vNhz7r91vXBPCThnnURDQYfAJrdebLMK5vaxxYBGrmN8q9xHBQgSGDhMac5WPdP",
  "key35": "22AE5XgtgyMpdkphtFUCRuiGxRYMnhCzBGaMJ9T4WdCvkXS61CMmpyC9v9MQoeKgtPyfxrjXd9RGUmGhn5mzr2kd",
  "key36": "4zJLz5ytV6MB4s4G4oCMgmhKPFD3PFRJF9ebAhQ7QSVkAwscYunZ13GL5E8fJ9CXWMq7CFxuKyoWHD8rFF7zUETB",
  "key37": "5fFis4WeX1acTcYYd1j8Xwc777G46Gr8PaHSeF4JNWhFfm7FZKMrvstLEFpHZuSHuKoK4Ysh5iTnAhCjFqBdBTFv",
  "key38": "4Pu4q5gcRDqDhegMbZukVDZR1Exg3JVRFaGgEATQZruFRVM7J9Q72dBQtxY4drkMJGpuWUDzjTzNyBA9AbgVhuy3",
  "key39": "dR34STXpqd5o9h7jLcABNbtg9KroiX8Ur6q4JeLQXLyBSgdqCygAmQoEEzTa2vNYWkQ2nfwLZXFx6vyx1Vem71w",
  "key40": "4h3yNS9q5oweHc3RkSESJHTiiABKm2kxA1vnDJKDGJMBWqWmfgdRXnBmSnm4HyeonbfGQAuedjynFQwBBqf1APmQ",
  "key41": "5rF6MkRmqn35BgmnHMehTRgWxHniAftdXi1rqo9MM8hRJMPnKSn1C9UYHgT1PLaoyWdPsNg913Pw83ea1p2bWny1",
  "key42": "2MnbLpdN1GFkVH9Rzz2Ld3AzUSAdyhJ3vbmDJDB6vqbSgNiZ4DuvcJYPYeMZiTFcrmR4PWhNnyBDwKS3CrMpfC5B"
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
