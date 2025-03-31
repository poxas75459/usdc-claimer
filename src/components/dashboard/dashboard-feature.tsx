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
    "2NfLWWmm8gWR4B1Zuv3b5DoQTX9AfCgZykBJhNy4wwBSEZSUMjVwcZgk7mh9KoRDV71GBWC1XWsBK7Q99VotN3DW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6v3yjVHVHr8tXZr3vjvb3DNmNCvXVnYWa1RJmfupHbrrv2padC8e8vTUZgM3tmKajfnXLZGjCHkJiKssvtURfrz",
  "key1": "51AWMznxgpQ2hRKfuRDTveKUJaH5KbQrv9QzoQaPqW1y6necHuEBoSEEPiHaufB56WYZV7TG6gHR1ySLkN1EJPZp",
  "key2": "5p4tK1bw78vK3Ridin6Kh2JYgviRz3YgTpDsUSQu2K8tFZ2VkxPiNdeHMkAjR93jFzuwvrnMiSg4ovoWuLgKsdzf",
  "key3": "4idWRhLjBdmM1bTwmrFq5irB7b3Ja4xB7DeimobfDwXBsqYfJJh9A3gzsHxY3zjxNNZfV8cUXEep8YYRXzqbiDXv",
  "key4": "2fYVNRYPeVSdZWpwYW2NCqCA3KBkXQhKViHWjfMKGFdtd5cMNYV7xYmB4hHTh1F9bNgi7wTdmwca6BvBWQ8tM3Sg",
  "key5": "28ykMFvGdZocHGAZhavcupKdCn5An1cbRPfQCsVfr15cM71tyGG86Yn9WKqGx27pM6iVv7FcogrpWLUbYMEswnLX",
  "key6": "LGmkRhqzUfDMSG5JNKhUCrTVNXDPxVf9JejgVYJKraZB4qDkX9LCexoUguhWhVBoAVGJ46RpEL4QgNXEFFy8BXr",
  "key7": "kV1dQBYHp29KKbeqFGD6Y2ue2q3yRGud6p5Ryg8GWgUJBN3x273VM2c7763bgnq5jZoFekg3xt78mmk7aF5VCep",
  "key8": "uoTDdSmMMxqS8gqRHx5WivErn1pzkLMp9VdibXyNTC5WX5UCnpa4BzfXe8g7jHx5tihwiPJck2VVxjQXhHwdpN8",
  "key9": "oQRskMm3xGJ8AVsQ4kT1AdctfLwKjhFyJEK6N87uMwdqJAtcTz1aRm77A9vXFvtWH4jKPWMc3kiHRReagMWM758",
  "key10": "4dCofbHnjZQJx6fYz8ZrCdtra52YoujYTgaAiidHMmhWDQFokbZfgqgVKef4F2QRvW4bWnvjExMswM1S6UwAJQ7M",
  "key11": "ASVru4Ybccg5yTJoDjCrQeXtodzurGWidMyfD88QtJ6j4qcn7tPYEMPKkWj6jKnyzvij3cHeJwGNBgRRH2pJB7u",
  "key12": "X81tV2BL5n3pFRHqFD5fQwmCz2f6mvNRTyK1SShS1DTMgEH5inRhpgbATN18CX4Ni8GBfkeGGpTysQQenm1Zh7M",
  "key13": "2hADNnyb4spHRVCj3RCvSfKoYNw761AXWf5LAXmAuCr2T9wUkYuNNhw9jrVH2CjwZnitz8qhqHtmnnwZryF5tBXg",
  "key14": "2kBfUaxBJgbkwHMxQHnAhyhLxrBatzF7jgBzmvB8YXCofVnMpxYStk1RJ7ZyCQEwke3xdYGfKd7XBkrA1ZoYkfsb",
  "key15": "5KckJpxJMhpoQ2zNv17iiZQh41HF9okPrVrWbEjc4UPnp3cNqfTMDMKdFF83LkFKvCU4uzKcWp9UQLo6EFWXdbnB",
  "key16": "62a6r97rYq1ks4ro59vr6ubivBzX26ZZQApnqoaUhfwtdY1m4UnBxiCwrv1693yTaYWkbGCdhwnmRXYGBuMSvbtt",
  "key17": "2XAKGHeNd6UgGFtq4z1ZVB5YhjJqRfCwKHeTJkvaRhFJfPsJMizZXMX9dF6ihfQtYwcfqCchB8XjQxGfXYQ9trR7",
  "key18": "2bYYw949vhg4MohjS8wPsbfwby1gvXjPzooMTLQM1viT7ghYFWxTpPnwnxMW5CcbN9B9gEW9xVXC8T528Um5peZ2",
  "key19": "5LvjS8qS2gCGXGmzCz6axUmtsJfWgUAXUqF14hVBTFYSKkZb81WvySf9wsGwimNdggod3t4LaGDd5Vas6PDhHSGz",
  "key20": "5ikJvWNe4YVxr2nCTtdc1EFmLJ8Eh4sJqiudxeiDscPAdCLMkbLhNv6pmVvHDDfaKybUp59r2wKoWoL8N3AGgJdp",
  "key21": "2vm2rG1Kmhg5AYWox2y5sgDP4Y5hHSzpP7XYAySCLevx4KP59S2dBtjdLptKU9Pn8dWCD1xhtu6xY9jyMf5n4PKm",
  "key22": "55pVqKEpCawaZ2vFChm86WBNLSi4KDGDwQ2qqW8j3aGf8xcuw3puknBVjUYgV6FAaWa4m3NXTENHVoM1r75HnNvx",
  "key23": "62k5QmwYaCb4hZFAYkmoVH5MX7E6YfqYLZ65pUCtCPNqHdph2M4x3t8ZACvNL63MgB5nYDEkxJJ4HkkrYNpaSbje",
  "key24": "4hrDp3a3Zp9p27CZxwxAC5rhqCAkc9axu5wzsRb86G9w3SkdmrrJsF8EwV3vsjFdx1hz4m4KuDkavsUKtY2WKH5h",
  "key25": "5WdT3TmNLaddRihGKyKC2Uon9nRPPnHyFNsHBNyCy198jTXuiYqxrsmbtdYmM48TZuxmtRX3rGmT1CeEirSExKyb",
  "key26": "2NHS68EA2DaZ8hMHCixMA6fsMYDAVL1BYCa3PXvotbFPAq4bSeT5AgmgccuREgpXECY7ves46PGGbo5Yiuk5UyKY",
  "key27": "injJixT2R6DAj47gkc2wYNrwSv5UFWwXd7y9Xu6eDjBLCDj28Xmi74avEBXxXW5kqea7EY2YkZVvxZyMRevH16Q",
  "key28": "3krqxsH7PXWzfBjgfMH2x4G4LWFmLPxZz9q4Ji6KLppZY9tPR4uCmCZfCwur589XoxN6eBzwbcYdLZHgbMNJzCsx",
  "key29": "3K5qKx82SzmSHDBu6M6udhkdcvvxk9snnUfiTKHqRLLj4GMDDVF57kgS1ECHH2ArLSXSVx1LgFmVzwcQFRaV4ZXi",
  "key30": "5TTKwC37xWTQxdD1nx1kj8LTM7kZzQo9f23w3GKhDkHi6ynLv3ZHwCJXQEWRjA116Z4KMSbE3sKvMQQ5tZKuntUN",
  "key31": "5HTFWtdioSYFyNJruCPRMYiuCfu26WFdJn8RGetmQ1KYkG6UQ5ucfkU4PiUgjqasAagkyMc3NxQ997RyDrDRFANX",
  "key32": "3G6daxKmbUypnqN7XZMsxvttZMzsamDGnRP2typE65S6SAsFJxNtMXmKyYGY1C4KUfNPg9puhiMdh9zsSoruQ8kU",
  "key33": "5JWU1aY6dPx6jgdytAd7k3Vr7xZ2wyPxDX3yfwHmQTs4HTfv4TqdvmcDLxrCJ2FGAygf1VkDkAevGHQ8micKUiQZ",
  "key34": "5sgShH97oof5ipVcG3CTi4DdDAhUMKB88rkzVpYomoVp89j5G4h8jGT42dFcuqRqMytcZqKzs6kpP1EFEFUyvKEr",
  "key35": "rWKMDtPUVCqr5pSnJTcE5Bg3eg5WEbxySk1k53U1UEqgGgBah7mswnmh9R9e4jdoXjU91fLjVd7dzFWyQSrxWGV",
  "key36": "2GdA4bR2n3z91dbBNCveupKsodaimE6rf3uJkgF6VEvy6att4EC8bJgC1ponTDX3CigMY6JEdpfvuZHysUapN1sn",
  "key37": "5k5WAK3B4PBxj4fkofxmX9zk3x5gu2XLkLQXhkTEbE9Qn9F6KHZSgrFd9czBkWctSmwhm1KqhVY191FZYB8eKQ9x",
  "key38": "Saf3m3vxSZ5kDRrpvyfaxNQynasKWEfHprJmRjkQQFn5nQE2qzfEDeEo9rYtKkijSTvmEJQMGWFaRNHRSU7dbGK",
  "key39": "ZW7mkAd6C9be93s2vvX5fbk2RCH5dHSeGzWuCU3odeVhR5sc8a8zxHRBGSm8ave3LKPgLqUL5DTkdcYNN4iaCrj",
  "key40": "65WxofHVsBTVcwyq8cCMRpTPonPiHcdYX1bKU9eVA94ndzCgVREAJE7fSMaonVcLrFW4SaKxwFPJwzNQHHbP1oMG"
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
