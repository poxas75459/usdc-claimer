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
    "2WppwQzaHASDhWopz1v5Xq53qsb7tjnYXMu1hbtvXH2hjNhqw5itCeq57yXfqS9yNTxB2VHbnii2tdVU61AaJh8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zMYzfdyUtybpGhKUqHzYSvnMGDiKKevKW2sks6rxakoMzHFoTmSibjrndh3RyKyAut2yMGeui96Z3MaJfGkFrsn",
  "key1": "5ZgQV69nRpU4NL6MtGcvtxtWuChwQJJtSvfb9qCVPKh5S1uTVarpiaJjToV9BcpWwUHhSomEv1kU2kJmWsCvBrc5",
  "key2": "2EXo5WKACr3c5eqShtFmaHNHY7HKeJv2BqDutSMWS9naMzzM3Yb6SASYi4RRq28215S2yPk8bU358B1P3u2Y4z5v",
  "key3": "2yLDPALdwwiFHyQXN9eZw2nE4nnmPWfxDPfBdFpcaqeRL6bQ3wjzEwkdftdPBNrwDwVSV6Lvyt7xf3Sg2exc3jLv",
  "key4": "4aNetjtcRn25wPStJnEoN425cKWLnoj87wyU6ZLf48Vs1htTYwPxeupQsJUTNR3JViuqmf4xhNRwyqm1nfZVm6gi",
  "key5": "32X5qbsiRGLjBx9j1zpmvKPpgvDwuUMFRQWDP9SYytT2rrzbMQxM7Gmo9FCBRrenyMpa7KuRCFbnvV6jjtwY11pp",
  "key6": "3BsamdHL47WoJw57m1foRvCxt7XWrgjuHpm1msFtMSg5XxeZfUYXtmvpoqy1f7heQgtWMQEaixvLDsKiggAU6K5q",
  "key7": "47ttrzyVnoiWngwj2B6F67r6Bs5FXV7gsNgNdJd7PpobyFfoQ1bjTVQCBvv155eXRMGSf52WcnpeSnH4TQg8qgVh",
  "key8": "2C7gS4CyDzMPfDrE14SubERapxR7PSSh4H94abLmMnXMTu23jMc6edJii6B6qaAMPEjqhWRzVViNFYuxWjgN9wZu",
  "key9": "2xP15nDkE9GEgu7bSwzNgebnN7TBD3SXomtVhvirWvCpZKaRtsRz5yUv1zx5nLhLZQB5ufyutRtUZfKkoDkYyJQB",
  "key10": "cWy1WXF5zut5GdwWRao8zCY91vYsxwsuHjX35CBXHHA6C5bSETNQi3jDKozPZ63jDM3zXrb4yVKFKajrSoVqLNY",
  "key11": "5iUptZAXFj6ZDXybhGbrMWYpAYs16fH7GoSRaX7Uc82frqqFzfrVZ2knZVP188fVGGPjuvA1w1P9kxmW1pLjr9U2",
  "key12": "5LkHB8RHtH1cGPQXskEMzU1G8kicJz9UrnYfg6NEhKxnvsYLeyC8CFCvvXLngow6hd5hKr82Zy9UacjvBEV4WKp",
  "key13": "Z9Y84tg6tGz9ycixtmVs5qEk4g6bZrbChQrCrvLXvU3Vny2fcQZ14DmHPCiVFzRitmaJYzUo6zVKhTDQgLj2Uir",
  "key14": "47ayNRyJQhjoKSQo1j63rFCfV4TGHhg2MLstmp5r2PKzkZ4egHc8agjGV3CXH5ynv4325jRiLQuEjaaBsNQ6WWCX",
  "key15": "5r8LD6yVaZcsQdFXkyLaeQT5Jr9LceiZkkASjEDu3EUxzDhtcZncTGkkVkWtnEkma1GBRoHksmYhCuVkxw3Wo8ho",
  "key16": "4KbRe8ZVgrWomyoVB63M8QEMTgbSYbcnEDAZiWSSFgAV2Hag6PguRLKYU3dKEmiAi4dogCcwagy75uN3AtDBvGTD",
  "key17": "2Xd4BKyt5EEX9RYxHpgLMxzUEtHdW7XzHB8EEJFUjeLqGJSgp3dXzd3j9hvSGXmUW6b9bjjAByiMsMF3gSyokX1Z",
  "key18": "2NSEZhQ8s7yaeM5FoKJMDs9DCAHeR2jW1QySMQDnYsg9fJaBfuxvEneAhaXTAo7qCGtXuTXfUMWjBKjWMV6Q6EPM",
  "key19": "4dHUmVo39LYayoqWijUj6AuNhPLGyBfUub5Ti4dUPRsgHWQdgyJN1Rc4sM5pZUmtgqCNfwqpvMWfcW2Evk6U8G7L",
  "key20": "5RPwyySqrXuJNhcEGoJWbJj9qk9XRH2ZZMU6Y8Xh6p7KPSiBuLgC91xtvSA5CjxwqSE8YUyNta5EErGZF7uXCqyr",
  "key21": "37gDrRERfq4Qw2sJBiRpkcSNJYiRUT4PErZiAJuQJoxzjkYdxEUGP9GW14X1BBJsCe35GhoT3CcdZwQsTZdxqxpa",
  "key22": "3uZMZFF9njgYgUrSiLkspurjXt6QkBc7hAxMfVPvNrat6TVdbthx5GqCxnMvF3usYucDbDgrLPStammcF9Xuc1pu",
  "key23": "4kivKBTCzNim1nQv4jisVzbHvo18AuUNQT1R4KHvkQQ7FB7T49Yo3cQwHKeNbGaiQZ8GUyJki3nLYnkTPjrGxVB2",
  "key24": "2isfz7wMWb3twhLxF6CZpUSyBkcsvu8bGvECpGH18oPf8BBcfs1jufukWFNmoiFRzkR7uw2w1GRLZW8bepKcS4X4",
  "key25": "N6HiZ3gQrhMVyq551bKsNBt5AvgiGTpsxZpapTZbaJLuTLtpFhfpxGbQXKwznLNNNiw4FNE2yL7yFBHnjCMksKa",
  "key26": "4Lu9SqhV6GWuWztTH1cUSAofoiTD23dCgWUjfyxBgiFvaM4ZmSix2XEqjeMd6HMcf2PLoGG45DkieeWJFAtbjkCS",
  "key27": "3g8QUkbd9h4BehQFJeAXgvpGwbsbZE8pxzcw1kfXjZBKwNYDBB1cauNGd2RTtLe3M3GaF2MJCkJNeJhf7X4bbMxb",
  "key28": "2VuARCfHHX6wYHdcUjk8VKwemPuVXgjroYYg59YcX9QhwwFvqVKwew5ASYXj2kYTmu74JUxRgfvQtisS1CA5dwpJ",
  "key29": "wmEtssShDvBUyHxXxU2R4hRVfP8CYbxaFmeZVC1CAevcMUxgExt2kwQ8uwhmvHta86g3AgSX1JN3d23Z3hE1kmd",
  "key30": "4KbhWQtsHd3U3hYDoAo5akepWE9uUBpdDneT3vefGKeBxZmZdnQ6ySwPjTXf4MChrveeMY4BQCKWn1NQwkXiRAyT",
  "key31": "5vSWV3oYFsxaQMRWKNetu5GMjiVjXfbmofZwAPsNToFpb68wXGdK18gEWvCjcmMe1CVZgjc4QijJMzMdkV1wxVzk",
  "key32": "3XY1r81Tc1YkQPBroDdBY4CWUVARvCQy6huuPko6FXybfS2wNmzWA4s4qj8xWaRJwVAPGkPwR5m6Th6p86TeG5tH",
  "key33": "4RRTfQxcw9thXMPweTCkWva9EW4GC8W9PvXkvni8hZ7aa3JxspgfspRevFhuq8spr69QpsNJiw29b2KDvMsurDV5",
  "key34": "4WnpqNg3ounKCyjV2sod1sdks72DDKgmNnwSSVxARsMz4BaTv7o96Tu64RgozuEJebA6N7sdL1Tdygvd9dQWUcVE",
  "key35": "2itNcXp9shjzEmj2EswtcP3pkruP7uUNBX8KmfvbiiFHwJd2wXkx1VR9PPLP2Qcin1AJZVDKdSMHyStbx2b4W6Y5",
  "key36": "uhw3EQda8QX2gjz2b5RMb2CFsyZLzyNBCaRxzFMV7RH3jmhhWCRuyz2qagyiPZqBsHSMkuyh43GsuKBidbidBqh"
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
