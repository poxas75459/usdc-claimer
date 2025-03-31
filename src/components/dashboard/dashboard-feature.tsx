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
    "4VCUHgE4RR7ayqiapx3c4i6vppWYYfzv5rR5Fyh282NcbXVYumWCvgRaiwbKWDhFxfgdAydMCNqy1DYLbrs3PnD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56x2GqscqpsSctKmMZgwrDTVH2mST67uekH831Wa7n3JwwSVnGBqJAqrpGezoEWMFpH7MtM43n9AC7d5okc3QMEv",
  "key1": "5ZacU2w7kJRhbopeK3fWW9PraztrLUQUouJnLkfhwJU46dqWmzvsbBNfitgtGSvC3YfF5pJpNxErLBujcnQ1HvTU",
  "key2": "4Yt72z8pmrUcifC464iWsrY7JVFBMhjWxDd638RB2oooFQ6PpCewGpBUDbovurgMDVyHydcLM5Sx8pjhoyCUZeFi",
  "key3": "3QCwDVjog46buEKPrVARcSJkLZZwj4wvK27TttFWRitqBBaKtGigAncXaGVwA2yDgB8jExwx5aFfAesZDMZYMqTo",
  "key4": "5a5p9UBgwjvXhQPavRKgRV7PpmcfpVSmdpeotSAEyA4Ji5NEevEWYyfcbUpJ7MekRxFMQCbPW2ao6Gkuk7p2hHHz",
  "key5": "4UHUkvrxAh8WSazendQSVwYMNZSLU9nCaJhHmPASjDf11PrhJ7ec5ahhE3A5ZvRZ2yphm9wB3qRAYMGS1tht4TLH",
  "key6": "3hWeaM2LfNqCxhr3kK29NAiTqFU1tq3qraSzwZGcNS3pvmSAVUZQ1nJ642q3d7rPwKdPJEoecQDchs2bhQ5FBHWE",
  "key7": "2eM7sLKY1BijsbQDoN6ib5zLd5g6Q9PhAwiw8cCFBsKtXAQRR2AkSzgKCMcCdpiWvPrXvdbTEZqt1U8kNvEsmcEg",
  "key8": "3tc8Zbtp7BpLJEhTSvdRPibfAhN51ztQdaRjFAo9FTUnvt8n4k7DqbV2zSfJQUQ9dLtSx5G1SE6AwULHrXj94c2r",
  "key9": "4HauzS7NjNmZNCNjCS8DqU4KdjCzN4z6yUSqAJu4et6XYrKaVHCZwfhkwPLVfqUHNpHtxUM8bU3p5c6dstAxyHig",
  "key10": "3hxRTAibqNVK4nKcFdEwu2vj6nFt4ygmJHLujbVsMGLBLjtxu7f2EXEE2fS4jRNgkGmeWMBhSC4xGpT6tAqtxKN5",
  "key11": "3eV9RKx229Rvrb3Ys6dh8PMAQqrsaFtgY8JwwegWYaisjGxuLAD36ZNc1LbrM3RNdpRiiG1k2p69Wya7vcmDQYde",
  "key12": "4xTT4qNKxvYz49kxs7bxW2bspWBBZ27D95KrwsYmmwFjsA5DpGw4k2M8tLxL7KXX5tkqeb4WLLkSrUZ8QHHSgwb8",
  "key13": "4LEKhFL1phqmQ5v1pKGC3PJbe9UbcgPJwsjdX6WDXruqVUYYN9mmbCYErSG2NUAHPEFL2ibCXUbzRcGisBd7m8Ey",
  "key14": "3iUdKjLqsqctYESWcSQVs3si9tLWQZVaihBGuWq1ytWj5rfWin1cAbTv51aHTF95KpDPSTLGyY3BCGuKH1B3mNAo",
  "key15": "3bq6fMtydrqC7LYCHMyMMphC5Xa5R2Sd6MPhTFdN9YsPf8TjNqv3JyDxQfvS4RwBcPzDRntu9vchjVXejQwDeWxo",
  "key16": "2DRyq6AzhXyMSpVeJuL4qSFd6aYBBRPpthxMr2hs76GDdknC5XX48pDZK1qrURjVQHGV3mv5Ax7AucTxQnFNgAiT",
  "key17": "WfQqVH11vx5BW9g5dEPSaGDzDSse3AGvHZrsbkrxWMY95kwJ9qZs9v9ZGcXHU2Ur7eabxruxDNxenrQR6kq8wds",
  "key18": "3ozGAqpGVkDB4oym564eSXxUej53D7kuDJi9pX2axLeq84uDhiTRcYj3D5p72EwnGG1YTXSYHRZhLVtEQcoLwAEW",
  "key19": "5UhKr3CZjSnbvHwaDtD9aMAdgM1YqtDVHskbLRDSMKcsqJbtG4AhLU17Q1fAajqj3KkwN7TNbR6k3n4J9KuUgE4i",
  "key20": "4roqNpFsVq9PsUtsPqC7uXBbTXsXkuiuagsoMG1eXsfgV8wpnwW5EdFn1TGqXyYZXF6iAAZ8Sjtik9vHitWwioJf",
  "key21": "PHr64Vkw25dkuicwJEoHPxGY7gXj8ZaqNH2oAxj1D2CU6rzXjVQadqoSE3j7iySZMaPY5zCnRhnSTujFPz8feqq",
  "key22": "Yie1iMznJYypBqsi6Ectv7Xzj3G7bySbEcBf3ZG4em231jLhz8UpEmqUFZAJEUyqZ2JBu5n9yP66FjgAGDqrNqN",
  "key23": "42zT63HEV2SGNpefH71HH4DP8hMa2i5wFLmmWr3n4aF2qds1ukexwq5dh7bCWjZDH3cwgAcdwNgyzburn8ym7V3W",
  "key24": "5Uhv4u68gB1qVNXzs7sFECFvLojwb4rPJ9PpF2UKfvtxoLKCCapX5mPaQmPt2Dc2Dfn7hY8yBwh9VjbmM7ukTVFq",
  "key25": "2sDVrbsM9bohi42jdKwwvAKVQhbPR7ysbLiVpbxud9dS9ymg2ByToYy9VgGRHokCHtKuLGGtPfR6m9VCJC1enyFg",
  "key26": "HMjXdfGvMvznJLrcNHCvSPMefu8r3yWRWH8XFnQEgLbTgTqT7ovSazvmFarwqJRL9d83WrmJhhjaLhP5XvHTACn",
  "key27": "3yZEJ6pcJqR8WAK7oxCa1MV7182jRYp4KdvWYFwEgPT496XjM23kmF6Q5DBW83ACJDuTgVaiCUsYoehcd4MKzGjb",
  "key28": "5BVHkQCtcZ9ut8fhP8MR3BWKfe7aeywgapXgB26VzDVecf2ar1hDPkDrKjDCfr15iKiGnG7RdawtARhS8gdRKaon",
  "key29": "4PFFWexcjffyhk2VtKuSV9zSpPhFWSyBK2dZp4Nh7wMDmKEWyTmi1Wa1LY56pkaRrbzzp3LsnpE5yRuJ8ZPexDCL",
  "key30": "2PdNVXr7gRDRc44WZ1ST2BhKniM4x8txiUQzkuuQTSoT9LSYfbChDXCtqRYohQPJLLUTmQdHTNFCUCX7eSUnyBXP",
  "key31": "22e5Zp5w8wLEh2LgdWMuDBvzAyw2jgC5WPDubzXgrk3fusXrSUH91gkxvBBpiXsjbsvWW5EuzpUJRMsTW8ibVATd",
  "key32": "kkqzkPk6i5CJYUs8cpavZiSkABVVGUCi2ZNf4bRk9An9tnTYDzGuZPh4nHAQ6n2bScFQ6Yxg3yu9T8zALPMA5Hg",
  "key33": "5dEmfWjLZ9eGLURuRi4eVYxVKoT8AaXB5gM1HAUJfJYtKDkKEzKfqhHsk1jNst3Tt8jsgSC3zcSsfgUTxrkEveYs",
  "key34": "2HvZpLo92rzsw3f9jP8j8Ln5wkFqB7FivLXDvfa6wB4nfpCGfVwvhtZf54hvsYESavtFpsxREddgAz7mATB3izuY",
  "key35": "2dJUoKs7EVi5AfpuAur513MRApbBGpjxHMx63PVnn8Ld6vPy9QwT7zim88P7hnbiM9tGicuNaNnTP3Qb5wGkJass",
  "key36": "3yHsKn2LbcXghWRkhrxjuBhi1iMG6B1P97gnxUHZwaNNU6dJ2JWbFg8jFyMhQcTPWbDTe18n4JhkZV1V2VJ1bLMx",
  "key37": "3uY8esqRsNk5CQCpMWQ2rudcEsAMcsbP2HQiRsbnS2cRMAHEsB2hEzBeaX4QpW59GRBXVHbjMfWgSq4yYoCY4MjY",
  "key38": "3zSpforS4s2Ra4ryoNUshBnSP43skKiA4P39DZqCrJkNbjZPJaDpUCXVzeSrykdYkjnG7zmxmEoADvRrnUZVK6un",
  "key39": "WBiwmyj5EVRYSA2GpgDovTi152L2oyEMYMyPFpAL8agWYYmbrBJEggP4bP4JcVFon75h7UfzP5xdnamNdwUr241",
  "key40": "4ciJwEK9oqBiEPmygD4HKwPuAqBnccxg7yTUvtqn1acpm9F4av9Yrtke3E7Fdzjo233jcKSGaU6vrwuLxrC5HaYb",
  "key41": "635VefNFRSvcpVQq64H2j4m5J69E3LcvivM49CPAUcJ54UcCrSSEufDtaXXKqmsSMGVHxWss6Vz1UuywstZFbYqp",
  "key42": "GhDXtXrWUYyLkfXiPBraMpf2NaBN9kkWDdPkdz9jGH3VBxYejZ5zqHt8f6726ugurw2FZxnXq85VrHdWamaZgCD",
  "key43": "2cJMyc49SYuLFN5eNzYGw7waD8daBjAWeyebp2H5PAnaScSxFTHJRLmKaULaWE1YbrQi1pp5W3zFVSq9JNncSwqR",
  "key44": "3UEBRzMk716nihJJ5X3utekUYCAHDDZ88v2cZEaj3RP98AsoqG5KvT7gbAE8TFgXcuevhFvHVMmM6XfJSRiVW9Rx",
  "key45": "4ESoLf6HotH2qQXAGF1vjZG33zLzX4JpzbXbeBMG5PEHQfowj93WZuZqAQfMRahTGZd9cVUbPy7avQ4Qr99bLoYm"
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
