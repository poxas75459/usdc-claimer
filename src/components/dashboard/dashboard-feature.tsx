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
    "2pFeNJSZeUF51jfXT5m9zUPrkyemhvxJ4zoEgVZ1xtLhQ6LDRbSFzgo77CP9yCqu3wasv4EZhmTZwfvnHRxy4uES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pwALvFvfAFwSKX5qqaoqgvSfDdKuQSTwR1SBLqvXQT7KxEm5FPd7MguUQfyLkUzQypx4eWbJGdDYVr7NaYzwgCG",
  "key1": "2ndAVr9aF9XGxTHn94K5FZ4kun8dopCFSmRhNWtvoEaofgPSMukYjcDMzgKt9maAGHZFqGoSSf1xLiX23UYCfjLv",
  "key2": "34mm3gTASgNCXNnrVe84ejLaXKwBfarhhyjAh2Utb43g1pTBo2XPzDgvvQxmdar3mDXr8aaY4M46J96UKEJcjpeh",
  "key3": "2PeYH52NH99uBEpqJjVDaXAcTZZSKjrnQbwPvBAUptzJs2LeVpLysw1CYHsSFUTb1jaUokVBkqiZEtqxTLNb3rnV",
  "key4": "4KRPDCPWNnfrbKFon3xoHdCLYLgUwXWTkwCgX6Jrj2i9cSuHdfgiEfx3TwvTyrUEWguxEdwSu9CgptV5i9V7KbJr",
  "key5": "3PifwEEEe4DLDvAhDW1aLeEP6CZSPKvvMkJzEcmUvTca2F6xAeGf73iAJ7Gyeq7Sb7dEAL5ceq584bifc7xESXuS",
  "key6": "2E9Vf6q62ZhSHYmzQdHhv1G5i4zUobjJnk83DNdAk4BP7nduVAHQmPrbMcHXA5uarQi3sahdMk58mXduPNazCKG3",
  "key7": "2vPsbicTAhqUrkaJE3yF5cjWzPxTervE6rcjWHRLdAyu8GJ3Z1KNdNpGvPQdL4s7iQGnVWV3xjqMXUNBJCjkb2tJ",
  "key8": "21ZYHY2nZemYqxwvDfKs5hCnpBpv4E9gYRScsGuFTKWgfHi8sEaTaFrYshNsWehZ6oyh2Suvpb3bd3zXBnECW7Ni",
  "key9": "4LiVRF2FdsyDhKZzUzRDqbL2Rc2XcMA1Pfq5Z5bQTs28MWbFqYjiVSHvYoRy9yeARyZFnjbkaXUhvZ3Z8wxue7Ud",
  "key10": "377Cz6NVFkMgXREK8rAD1cUioEKQMxfbFhQbuVZfpAsCH2oZsWpZCkcz2918aNPWUWoyCXZXKXAhrFnNkY5SGtmk",
  "key11": "5Yui7rpe4aWAVNh5NvHg3GPeZaqZBiBmTid8uV7FU7cEeBpP7fHihfuT4iYQf3hJJcpVorqY6sF1GCnXnpRWgGsZ",
  "key12": "2mFW1Amy5ncP1KcNe71t9Vtfn8HamPR7NaW1UZkd4CAiWtxNxnAsh7GPop3HXbJCxufyNjjwYUfn29F83ruDMgTp",
  "key13": "5JfYVC1mBpfWubVMwMm4WcWw5JdH9xczPGCfyJtyXknB7Xsd52o8xMuVLWJK9Mw277bgDC5sPL9udeM2AxcZDRPm",
  "key14": "5z5Z9rUAxcCLghq4gozbVLmDSZr2pNLH7Adv272Qa72YqTUoHbpf2kVUhkQ2Rx3GUU3fjTP1SPJQYMVNiDa29TnK",
  "key15": "4AfA2uYcgz77qcGmqdKe9Yvet4Rqhf9evW3AbtqZRA3ahmpv1muWYNz1EhfUZmYJ7N3hCMr4gSZa2BMLHnPcU15A",
  "key16": "4s2zs14EfEUR4Hy46dxCe9BSR36HUnxPrqfPC75KuJBef5qxHHwY39D6o6qBckYxoZqaKpDt7gEbRqdeD7JcUjmS",
  "key17": "5hQ36ZLZ426XLSBoPv9bktuepabLe22QoZd5C61peDa49kypesQSS7PEfnsgLxU81zuBVNVMtNzDyoeyv62aKkKQ",
  "key18": "3UzwpZgPFzCSsuxktcvbVDfczByZyjMPXCpuvkRpZNgg2bfJY4oambx24FjBPXraukFtkkTqsS5XC8cmnF6NfRs",
  "key19": "rv35sL2emB2fTfkJtTS2opYmWfjw9YRmesqmfz1ZABw45LY2k4bnCjwasT7tkLyXgLsYtMLDe6Swtx3SS3gJhGb",
  "key20": "TefnnzKL8fa3CSnWr9eBRp4ehX24juTuYFrMj9XHvrdJ2AkoCnTDVHhMH6AAe1avtHzPMzB2RU9W4fePid2kGSM",
  "key21": "59Vmh2oHuTUeKDUPRrqw3F6q7U3HKocHWgtemsqqjGJJ8AufYMHTKbiuvQqHP5Ta4T1tx6haKaVDfPjmsq9VbTkX",
  "key22": "5u6CTS73iyMYvTGuXEWbnAckeuZueN4BE3yU6TRsQtpFiL4RVYDRBMmCxATef6wKtDVpubG61VyQxeEw3f6yT5Eb",
  "key23": "MXHdfMkmh2NC5Jkb99nNntoi9yRqkqdZDLbzkXNYCKA6jTNh1QoUhtTVw5c9Fie2vnGiDm1NUh22A4ZeGrEp52z",
  "key24": "21R3spuzNXiaYvVUtFGKrSRDgx7CT4AzmnKdDJ2CqKLJ1UbfrdSZeSTcuvjFsW4s8oHWHx7AcyxV7LuQj5sdDmGv",
  "key25": "67ewoYvoerYxGccrpmDhw62d7qRauBk1upCgAw2cvRdiQa5TWkhUUTY1Hsaefv3PDnRQQeMtiTpodBuLVEaqeAG4",
  "key26": "4PDC5Uf7eWWFuphQMWCjHLWrHXXm9rfAbR1FWdpN9kjwhkBFDKaqa4an8ohevULowpg8yBaSPKmTsJD4t6kppuTk",
  "key27": "x158MFNrUMaHdAfFr6yuci6PxKgSVZGfV7P6A1KWs9LFVey1GWrzA9ByeZC3fTGkVsafGw58U8Ygd6XuWD5AkyP",
  "key28": "51j6BXyo8TGah6Gi9tawvi1SNox2RHkqMtefG2NDQaL9JNGhA4tQC13YFUchbz5BkPaRZx2E7TZNKwdU8uSGv2UG",
  "key29": "2MLtRSvvvi2RBYsQKLz1FJQrU7Ahuj2sk6b1LTBsR4U25eWG2yDGHPCqvPQD5U5F1K3MMjicGciMxe7ty58wHAjR",
  "key30": "4x3aCMEiUCYxsvgEeghDVLLerghEAZ9Tg4sqkpijNQzey3AR2SBN13fr33sB2doHiJvxC5fCSZSZvKE6m2KpFCBk",
  "key31": "5HNmNb4PH9ZagV8DDUpGQ8FNnZRQe8H4DHtZqh7JmjgeTEwheip2ETMDE7NhrzBmKoGD7nWmyT57gUuLUjWA1xFN",
  "key32": "2Z3hLLRFVwqzGv1SthEDmTvGwbSqWMFW9NXzzu6N5qQG2JCYxaUTPXBGekCsTzh89Sz3HFanbN8D5XmdJBx8udSp",
  "key33": "2AboWfNbZV48YkEgiZMia3vhEwTeeP2reuoU3C1i7P2e9cXpU5iMpTihAPyg7hdWfBF3oCf5XhrpYtTHQk9Vtc3P",
  "key34": "4VXeFvLb534GVUUvKSup7FDAwp4tFBHWc9JT5DWtNiKt7unVq8g83cizgv8qUXmMo8PCYWN9JHFMCpkhbm2SHFu4",
  "key35": "5xYQMMu1JjuH2YVqQSAHQjGtW6wCUyzP3mJn8ki6zPQH5dZzywMud4pUdXU3Hmq7dM7Ck9SY5kXpEheiFXJCM91j",
  "key36": "fqUoqLxw64uXtN46keMpDJKKnFmNvZta7WaRTWLziaFwvZA6Pprms7Ah6TcfPPPUKSxrmfGcsMguHWREbgqT2ku",
  "key37": "5Wk9PNjgNE55BmJrNfVjwjocs94HNSGCdDeeZhCikxz1jgGkR2LScTjt7yqGa4sysffaW6errn4EMXc5dfqpBkts",
  "key38": "3KNQrsGybamsQ2wKWFziKxmqv5DkBGinK1Q4PiXLYpyfcxahsvw4KXuy3hFLqe5mu6hKgLdGGYAyet5TqbpSeiX5",
  "key39": "2URrGs2QzzoBXjBPS8HDUuYuzWhnXnNcWcFYJKPRnun5R2Dpn2EJZYUAFgDU6gMPqEYcWToE61s3tjTSPeYt3BeR",
  "key40": "FkmPJjBRMhErg9SxtJnADbRHqXuyw5mW4C7ESZwqwGxjMjkdWoX1RfbpsYGkfCiZvXo2Pix7wkXNVXVjXWjipA1",
  "key41": "2w8XbEdN1wvdHAVwmuzBBDqo9VMyDxrDnbNFZqM1ZCKMznxmgNW1aREWmJAA3qdsuySJiF1TSqwfxHpTfmoUEWmS",
  "key42": "5akQ4zfzdApqTWxhawVvq8yE2aptGr8UksGuSu57a1ETjSiX91KJqjRn5vtgKdrLjCSNaB3CiSy5mWmpdx68kwv2",
  "key43": "2xLLk7jxLF3EMmWu2wC9quf6gjL3jtrLQyGiZ6zCcE1dtW98ZXf7Lr1BQRnRSqsF9LTyXGX6v4SMrUvPQdAL8QyB",
  "key44": "4AELcBsnB8ZP4iko7TJ7VzS8mFiuMfryGy6GmJZGb4AR8ncJaygp1nMbmH1VECpkdT13hYjWK2viW7KPf3iKno5a",
  "key45": "5wJ7YNf3RTVzTEJ6SiZCxr419GSPnpazKcW4rqqbvHwN1Aknfovh66VibkxZdLePfkQoVHeSqx2ZsfmmpQQMAdzs"
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
