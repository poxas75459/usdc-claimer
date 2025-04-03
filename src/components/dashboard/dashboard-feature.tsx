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
    "26ZVJ9ufubqV9B2SQtrWjQXuXHyKfxUtxYs9XBG8g1dbXj9uxvtpWo1PPDg8psoGpMTmKrvhY1BDPJDY7Wa2AVR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VEKHdmF6LYabWNSgXCGToV6FwjdXJASjQ4ATn7vtGJb3tv7weMxZCKM77BqPeB5HC5WUseJU5oFnueVPDXt3j9k",
  "key1": "64M3rDtBeQgAnwCD5rwCUMs4Q6iRso4phnLFYao9VBKNf7E4JkTYEW9wKCqjnQxc9zxkCJQrmCA9s29NCXWqAipD",
  "key2": "UjQf1KWBYSPfnw23oKC8imH4a4kwMSBVdYJrPZ1KetwchGFvWynkHPSf8vPzgz55VzZoQap8FrzXVsq1JxVXeLx",
  "key3": "2hSp5MD3MFkFfEDRbFSJpXq2MWiPk3yLwLuCfWKfGBTKrc544WKusCdacRTeRbuvGgKqFgNrKW2fzULYBoj7RcUR",
  "key4": "21ULv2Evpbku3Zdjqo7GpAKKp3girkgLhTefYC5TkXzKAbq6zvKMPp5ED4NyRBdG6GxvR3JV6Hz14oYP7yyc8jb1",
  "key5": "4UHf55CmypdtEibh3NLPWGnVqZKLb1uBGJYPGhicFfMXUnh5rj9t6jWtx8kJSgdP3Xpkdtb97vip5y145zf8Vn1v",
  "key6": "MWCTdxZaLsMeLkBExXSmGjxBpKuoTddoi1XUC5KQm43RqTrkMV18pzn5go138sKx6cX4oPiqEZHMyvuZcbknBzq",
  "key7": "XRajoxRCdpduDQZTteHQzuWVFfaWu9dAniGN5RLMm4rn2xkbeNRmNRasvYW8xhQGSfJwRNsTNjEFEwQtd4oSC3b",
  "key8": "jnR3psLAEr3FDpKp4kSJjZWzpkygiag4rU29apq28uG763G1TiBEfUHSMCVWL7hEBWEb4JQYudC7pxsZjxrS5gd",
  "key9": "2btQcs9wiADJzqynrbMxcmsri3Dwb9ByFL6bdtK7MCtePDCrFzmu54yBnz8uimxrWdDyZTshMHRbfHrP3YSBdUPg",
  "key10": "5hArpba59VTD4RhHVfmayNFnfGujGLvDwNNfwGdmLVcfzMaUXDcyHGq9QMGetyGEyi8rp5MCtSMvk9FSP4K969S2",
  "key11": "o6tFN1rwCztCzDA7AykPVzdsYri6RY2suyKTkf7YK1QLPmi98RyLUmJgppijCRGHnxhQR3MwDK2WBVZfQNkTZDT",
  "key12": "2kFEyiHMSziK3Hz54VFFuuFiDkPSwvcK4k5515gdf5wZKvRFkbE2ycy5fPNW3Ez85zUehbfnRznCRGuAFfYyogd6",
  "key13": "2V8seYZs33nCycxFhXENWyQTspR2y4UtuzMy6wG9VEAqyqGrjJCHi51iMwCEbso2NtQPo34MrQYT8NAzbuFendyg",
  "key14": "5awr3YFX4XHfmzgECwVnoSfG6HzCuCqXwaFXM2GaRkBCvcnSR3TeCCr9UoJbkGxD1WKbmibGec2ZNQFMEMhWaGmT",
  "key15": "3qjuHT7BsCu6PFdCLDuy8qsKwMaGfGLn1kYUr9eYeyvXfb1KSpPWSmyhhWD5j5Gs31ZDi9vqmTqfxbkPv2MkshXJ",
  "key16": "21VkuEHdr84TXbPQk6wMuMjRzPXLcoM8qBno3S6sziRb7ifeBKRzMfLQDs1d5voUNmvEmZFTFm7UdZoc2N6KEs7h",
  "key17": "4Wyho9cmW2a8TEJFrPMqt2a7Hq28LZmJEa5oxNp5yMJNSp7xrjTzt3f5HySoQRmrs1cq5acgunaboFXkPbZoLThm",
  "key18": "419qDByFbcYDyrP6KdqU5ZrdJBiLBsWpuey82uXiQuT6ofHVwdk1izqBPNfJz9AkczhA8qGuPszjLuYGvXi4f96x",
  "key19": "2Yzr9Hz1WFpZn1dFFz6QTQZyTf6WqKvqFUBVe4wu31uwkkEChY4CDgxK5tBumY1jpAZVV7H3Hb4pmtrhnNY2gZRQ",
  "key20": "23cYoZjEgsc2sQMEA8iZt6ckHzWVeLqyt7Ukt65yUo7FtDJuF1Up7LivrLKR9B3duL2BKp9KJnoKhf5uzenA7cNr",
  "key21": "5FYCJoTMfMxDeyJHubjBp1p9XzyG9udUgYFyvov1mAyTqUMRETqhHsSmH7esrx7RbdeRXn24uyztD5TDQRjagnQx",
  "key22": "5ZUEE68HmaZ2zUT3DKonoeXLMX1EQZVQ2B4dU2eTP65eckgnFvDuwAodyWVXbtPNnGhuDwsVXCLYbGyiQFZugNeo",
  "key23": "e9FeapJkH2zzsbjS4ZttQZMbPZJweWmeKvdpHEtjphFCLT2oAgPxAtYqxFoV7PivYKMjkqH3BDjp5zMdME9mpHu",
  "key24": "5ccFrD1aMJjT3kj8oiCbV3tGZCbUjFjkDQ2gAcjtPvJmTxPBSm7LPzVdBfUMrbtsbHZCMrfEghcjSKFgpmNHAFEM",
  "key25": "4y5MZja9ZddH3MGZP78NPz49oAX69oKk4nT2Xm6qJ2zh4w22sJG9j77bPx36EB1aNPhScLx7fy4xaxUAdLm2hwiM",
  "key26": "4okgVxPUBy4t9ZQuvfTo1fK7EXYQGBpZzTNJaqjPdFeCLrv7STyjzN896K7MyNU97JhJXtLtVKnz3kdLNkXQTpBC",
  "key27": "4jJn4QyC4FHg7UYXzQqsgQUEAX6Mf6XzpVoXvwmDE5j2tmWbJqDKJHeDJnFRa7cdhP3A6K3cqeFu6ep447PF1ghw",
  "key28": "juazDZYPJfFAWmDEVbbY7yAySodhUSCEZkN5zoC9W58Puim4qmX31DdeFWmnixduqwfY68GpaTYGhJTkTVGAgpW",
  "key29": "3ka16xPER5xizNkfzMp4Xz1W6FiWJWrSEB3bQvZyHqT4SBHxKR5mn2SUKBTh38ciJbyqGFYqzc8Lh49xtaWSVeMk",
  "key30": "5HpfhGrdMYnduMywpRH6rfjSFDDQhnRNZgxkYDhGkHJGkrSFBDRynmos1rEoVhgzJX9xEkd1UVuzfXMHWp83qqYJ",
  "key31": "5NLSjZ2YRMzxHT1Mu4aDxN91jsiYgUZM6crM7YGAFKrDuJfDtr5c3fGdemGP1heAcx7CYcvDv6CuhzayAoRLCeFQ",
  "key32": "3cttzyWn13tJQR93AkrvEBfQVD8jiyedQN4j2zU2Lxz2vLo96rRTA3kSYZ7iptNh1mBsB853qocsAmjUoK7tAgbh",
  "key33": "2P8TMHEuz9FHrwWKcUzpRKWbG3gCLF1b6YX3v137CS2GdZnhKwEf9b9BPh2YGCvPCRbYA7y8zfak92pwBYxVVk7r",
  "key34": "VbmSAXLx1h3SgfK2nAamS8233x132ysd2kfbwQigZwwi6mzJvb5TYcpnmp99SdYiSgSrpqzF8jXqMVtHoxQ4UAF",
  "key35": "4xd8hkUmiVkZJ3a7CWN4Q4tXHzYPKnmfgBEr74VgNYESdF1rcMFxprHfqapNU1fXg9dzb9cL1bCfeRhwQkYPTf3J",
  "key36": "3P1t5EYSuejsRtFQgUDQ5MatwEzRMQnzZ3Mkcj4BYCCdWePd7UXqkztURLmhxYhzgHPFGeawf1oA3pgU9BHbBwAH",
  "key37": "vte8vxgsm39XspajcLLuPkrXrZLZ6r8Qkv2k8ZsRYQdAHu78xTmhV7SAQu55zTxgKzRT9BwGTQF6bB7m9XyvRpw",
  "key38": "3y5E8ronMyceQcGrJWzLtS8yVpcSwePBx1iBshGSvRsN8phNtZMhVfHL6cwE9ZdPSDj6zuTUnxNWdhAoJVPLVHj2",
  "key39": "2qzdyu8esCCbrE9DRLxMFgYZtb2Tz84jZe74ZcsHB1NsL7jcYzYsQWtJWTSFBkRhCMQR6qHqr9dDRkGnLVdsqRq5",
  "key40": "4GrwfkPYvrnEN47qF5nmBihWowPJ4M8uRK3iRmJ2NAcWmRmyFaCSVc2fJJZug1AUZGZcWCF7MATc8pn93jnBSEGD",
  "key41": "5dhi8ukaENa7N7grNirjBusDFfpH1HnweGhUZYxW97pD3NeEtYCqy2ianoTbo7ddnWM5YTByhgk4szbGUj7juJ3J",
  "key42": "DnbXy5tGdQk8nvRkwMAo9hrQZ2pGU2DgcicNyNCRowEhm3F4tiZjZ6cw3hRNo73nY6iVmaTBhSmEMoTfB1oXG8K",
  "key43": "2T9TyqnievAhQXkzfuXJ7CZxixvgJn3aobbHsTry8wYEqURbcYNXf5haSAe9tFZ1t3aMNv51ved7r2cKNHJjko2D",
  "key44": "4FQqvMoVwPgLR6bEnYow9T5MffoCe4yYqWsWHgFHqqEKZWtnMWmWch9W92ZzeDALcPFHrHk9ym8CCNiGbF5uoDB5",
  "key45": "A18BU2TQTypL2KH3BUKAhkMVpKTZRxY9ES8E5cQEai9pRrraUmMYfjKt3R6LW28h62oCdGc5AwWfVhqdDiV8PrX"
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
