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
    "66HiCgNG3mhSqt37u7N4gmud7quA3RNHeR4ZZuMDNUWQBLPBXBWkSXVPDbZ4RdhM41heHyfCkxEc4aBQCq462dvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nSTdK4sXGDjhcrXx3U2bM9NMCmKy8d9cGFsW6JoJMDYzHGRXNf81hHutFXqrF2qLn4NRuNX9U7qFELyPggAo86m",
  "key1": "3r1irgbQB3MddRJFebvj7EJa8Zp3czBew2xEstHt46kCWXtxZcGhLUy3Q5ESmHAMoDMz1yyyE2w8k4ZgVctPJ6S7",
  "key2": "2m7L58aSP6vi6rSTgWbrq6NLER2Xqy5TsqogXrHgYTGG48mPEzY4LKPPJk9o3xRzbZVJ36CxYd5eauyzfdq7nsp5",
  "key3": "4XBWPAMsf7nmFRWeCfFm5NyHaD6oABaqGa29anXEYUVYyfuGtyJJ9L8qAJqDAtXw4PgoYHALcaWVe936iKUDH4FS",
  "key4": "wiJzj9RdUcMLtx9cvbMY8UBEZh3cEmGBHukcYFGaSFupHGnt7xoE99WZUzPzLu62t8PXLy3zUtJ8JiM73sF3DbQ",
  "key5": "2jNhe67oNxDaEYep62j8jQHPpM61vdjnab2huDjQdwNhs8NbP4Sikg9ZQfxHNPPusYZAEGHreDihY5S6uPabiS9e",
  "key6": "PErFhYtvkDZ1TQiQD7JcGFvTXGmYbvByUQaAo9xiNjUSxXjxBovKqV9QxuBqHZZFkZ8C8n1wGPGnFHSf7r6Kxgq",
  "key7": "3HuX6cqsjuLXwhMqLHFS4BYFfm434SVHTmnpoaCitmahs3AGbTGjbWKbsKAcfuvkvRHuCNustK3eUmEVe5SjUX6e",
  "key8": "4GfdHSVowZX2ff6wzU9NB7GA9bioULztGmkbzseG1tYXVVNFzY23SdskEQgCgRfokLNMxuhSqQH4HftHFjzjefFb",
  "key9": "5GnkfJrsa28CXGtvpEnoN7HdNsmg4utzfuCsyMkXMjk5eGK3B8j5NUXt7mEhWRtagQExWdxFeAmMzDNm28zcieFu",
  "key10": "2GcV5xm8QTY9JNHyTjPP5r3jy6DWbsfcDH5k7vKRe7NJJLkFidLqwoUuKV84FGKs47aQKVaoGnv9c4Xt5XTW3pbv",
  "key11": "2Tb7GZbynaffzEPuYQokqEkZBvpbrAuG4G7Ruvpa7RGvPmdLYDy9GQhhv3CWh6RSYVWxfWBoL7CjSzkLMT931b3P",
  "key12": "2UNrNsk6dKwh4KwpxTKakQoXepQrSbXNbJNLJY9R3PZaZDQWXooT3Zo8Lx8qLpo8TWNzpzyMnpQio3RDFT4kBZzy",
  "key13": "3cx7k6JjhaRt3MgqTYYcGdjYhfZT4tAHLNVQtEauHmfh79yD4g8u5uWqQJ1B1Ku3HK6jfW2cyitXRATdnG9JsdiD",
  "key14": "HH4NRR2znxmq71NReaJoeucwqk29dnBVqQKRHWWaEFj2VajjPWaAWXvywL5MkhHzMRuE1qgXTMexG8bbDApPsS5",
  "key15": "5q1z2iNejvbg8UoP6WpZyUHtPtN22E6YCVvV86bGiKqe1pxAqZNZDrLwNmc28FQp9j1TpTAkeuWzj47ZReGDVr1r",
  "key16": "2fn3h5GJshXYBVag3xzebtZSSW5aUDgvqbixRzDroMSMyiun3EP1JKJksUyopE6sjd4KBAC8oQH7N94gvwNgEhTB",
  "key17": "w7VQCEg8o7K9tm8fwa7xxjTVL7Zr7PpUukCZtdY1NkEiCwkt2tbYbXCsN6nemVVzZsWzL3XghnjoD196hkgsVhT",
  "key18": "3jYEN225LSjNR6TrP9B3Tx2cBB9brdu5e7G9sPbjNV5WjUsYifzgA9awKNGFU92NiSP78GNMwDGBkePYuLkocQNw",
  "key19": "YRAsowTjDi9Wjm2hud5Jg8EoC6K2gF9RHRM5nKt2Fr6oZYLt2AzQ7HndeRbG4GEwFnw9xPjhHnou7ZQ6iAwoJBA",
  "key20": "p9NGdyUNg9eLhh7ixi24tspsgp8yiGGaRHnvQGxTFYCoqYbU14ThHCDbzfdn4ciEz8vSbKY91zqRsgyX9WtULAy",
  "key21": "sKCKz4LXZAnfdjEwBGy4CzSSnCY2XAj4wXZAdtK3sXvn4fHBcATWN3nymhqcvB3Losx1EHborebsD3ZUYhAxe71",
  "key22": "2HtWLpdyjMYrYDPScqRmvhkBhWcozSAjK6KRGEiTC8qeAKv6Ne5UWM6yKjf4m86WpeieF2p47F9WCYzqcGTAkZvv",
  "key23": "351dA1V1giCYGbJNWZmAqbZyMSUFH4XR76MUZ7YuPmQJz4AMaVKfjPhxmC1344Myi7kvZTt69mZ1M25MHCA7wGAH",
  "key24": "2gwfKMUbuzs8ho1KHiptnjn4iej1DVfUL24MbopUoqErUNQBjYfwvzTgf1K4bf2KmfA1pqFMJ7oetT4JnP2XqMxQ",
  "key25": "3DAXKpXXus6U25ebCTomLR2acKNkeedPZQKhkDVFHWVjF8HWWbWdhdUa8gMw3FAqwiYvFdiefVL92ixKRmQcBy48",
  "key26": "4cqbiBkL8HMXWuYHrmEh3YmJXniFHfa4SvC8MGZ86PW4H9JydCRYwtTDphHEFqrA7RKuECUzbeACZJWz2qw2AMHV",
  "key27": "7N11rhgg8Zzwh9VavvCsyKwiRyb8bouL1r4g6FuJojyzB837sCZgmdAxzNLgmD15TgwznXvwVuxmkd3Q5ESHHQX",
  "key28": "33og91EUtnKkurR1hyjPTCPmwJy7uietpS8rEpZSC3M3aG3BpPhMumKiqfCJ5BbvyJUzUVtsZcvNuNz69St2rLA7",
  "key29": "4rK5qScq83fQcsCg4r769f63X4FpsgaoSJE1cDVNj8LXPF4pbEXRFmqJezrxYqX9w2VNbjoToAq199yX73Rz5egr",
  "key30": "3M9QyAJoJUWx9eE3yHtrZV5iZeCt11e4YiTbsP7DqJb2hzzW1osXanRcweG94365r6LLxW3mPkJoL7oGMzpFkoss",
  "key31": "2mLdiPSyfMpUYgQkC5QFBvhZqncUtNa71tBs3XE76ACdi1MFu6cssU55JCYvHxDMNxAeZELqG6SiYHtjFPguCh25",
  "key32": "wTyBcDLQWmYfD9E3WzPSz7TJSPbhYEozcE84ZW2a4ePvj2pjNQSzSArbFrxJMk8VsjUAtVkaXSfv9wyhs9ygJJH",
  "key33": "5QUY2CShKr38ieMBBXPsnNecN2vGV88oVJiW5qKdCLLhMrMUivUJBimqfhfyC5DQjAeWTonatwXZwngnQ4JigvGC",
  "key34": "4ThPnRQQdq1LgKMXDBPRmKcwKooRPNtN17Gg7WMYtBCSYBmUxvJZzPUGcprvSvE2Ng9ADb8vyo5G8dzYb3FprF1G",
  "key35": "3kyfd6aG13QwYb26BVqTi7HyhyvYBtBJGB8wNbbx7vLaE3AszbpmnJFgZB5v4h5WrHQ5231RkJmG5jNabqEyWSBz",
  "key36": "23XKcnCPrvrhuDhVi93sNY7tW4oCXYFHQBZd6woYh2g3icjYnpFGscocDy81BhfjgM9uhePyJz2HMd7w1tWUK28A",
  "key37": "ganG9Zqutey8cw42yF7JKZhKNd8TEDFbKcHfqX1tCpFBZvt11hbDdWd8qpoMbKQUmzeCzEBfL2YFhtfMsiXEV4Z"
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
