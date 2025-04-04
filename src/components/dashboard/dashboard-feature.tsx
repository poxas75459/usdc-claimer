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
    "4Xp6nX4fpeJhdiEjT1GU3hfcTPfKJ2MkkiBJL2PfHPGtxecVfiANSndHwVuABPYfyCB15rezGntKsaSm9NqfFuhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yvyP7qifS5YWLwgANjUNYzjubZAJ7bEP3R6Ys7zaMQwfBuEoT7dTGt5oNs1FRfnzqSCKr3NdbVUHS9xnwo9FMwh",
  "key1": "4TqaLnX7ua1vjdKwo987QGBbr1g9s5uzzgwAJCQScaBhdhuUxwqC36moHjXoYH3cjkFuwoCf4HPwxCou34m8wpeC",
  "key2": "2s6qRpVf5dZoK6U4zszuTVLva33o3CJQyzJMCEy5gjAtvjMWTWVt7aomAnbwz6J1rjcd7ESCXyAj9jkqvVkpBjy9",
  "key3": "267tAuA5wueZASZw3CzHD65nBtYKepDrSPCSjaobShTNZAt9Wb7m4BJGPzMBFL2LXodibnWKy6uqWx3A1SV3A3YN",
  "key4": "2zXyYZwb92mgdQSkELrxnMwoMSaSGHXyjJkzzrRso3KWzSWG3T3SETVsZt78M4gF4MDmsfcjMPJhWhqux6nWSeko",
  "key5": "4fPMuEg3enu92nbyMQAcnvwdMAba1UNexqPUNKdg5smkysQXpifc7Ks9ZmLv936L5UaJXZtnxpqTXZx2DPuGxMXw",
  "key6": "2H5qd2jw5ZDAQ3CJfmNiG7wRAxzwFCtNBeZcsic5LuUxoT96FhK8ex852ngnS249PXV72CN3yqg8Cec4WeFuzZeU",
  "key7": "4X6Z6yiCcnTtS3whuxLUea72RQsYgYXj1xinvZYbQND3HXaTQCos9uJ6D5ZVHiJ1W4y1pv4xbZotq8NuBbgobRVD",
  "key8": "2RLxjiaUi5XjR2Qxw94ePrDNXcLxYggZ7uR1UNdRRAgvaDnKYHqB4Au34K3bBtp43jpDXxQ52aXZeAJW9E4ACDZN",
  "key9": "C8k9SsBavrhXPRKnuDagBzgi4JU8yJJzcX6XmnPHtMFi55gTn4ZmXDDd8HDbGzjT89ywMh9tftbyt9J4i5gVMpm",
  "key10": "3DVYPmXj6bCWXobVyK7544UhVs7eGGX88qZNGkn7awhduydZAqsGJFVMLnFfQvpSQ1CQYsV1CJKXTtHwyTUnYTzT",
  "key11": "4wxvNrzXbT6rjPRxHpr8TmtPqn31Y2qDuK8zaDtTHJULvFTBuzrSctWgpHDV6e2DaegW4mxBid9mvPLmjvvzNb25",
  "key12": "3vy6ok2gdGQh2s18chvYKL9rCV5AVnTJpnTVGWPfpn48Kch27K8Br5hdFzmn7ekVV7bKaak1qCRCyfxgJE3YLEMG",
  "key13": "ALhm6XFjDdoighchEyvDHtGULTr3YsyazubMGJohTT68ZdeDho7jVEXwPD5caWN7XxbigXUhBhbsc556VcAnGH3",
  "key14": "nvbRYgdmDAk446Ghvwa3u2e8jsi3YkSykA8NJvvYw18mhj3QaQaygMsqA1Mf6W2583EAzncptfYe8G1WLTimqa8",
  "key15": "3eGugDe9GZqziC8vnmSVZ5kitcKUQfMj63f1y1Z4L4c3KhX6LzyGSHaV3XpLjeDesTJpqWZMcJerQ2DMnykRDxMd",
  "key16": "518myzC5aW4eQfjeQwxcsLajZEWv15GYrs4kVFDd7WwdfWKGPXGGXmsHFDpMpPx5ziqVPWPuV7Y4tpy2TZDq5Bti",
  "key17": "r8YwWK8J2oe9ZccPF7PYJfzd1hDcwwiJfAQfccH1d5oefFmXb6gn2cSH1NT3f57MvCK5DPvqQvthCTVVaux9s2o",
  "key18": "3ZUT4an51jNpNbekhN7k5A8PNmti9T241jcRWAMoCAtvAz1cEHJ5XU8gEpwUYm8dDiRiULHwpwRpF9VSBjmgnvVj",
  "key19": "3dnWNWasmRkaPyXfrSx6DTR4ZcjQotGgbioD2s6tcaScMy7M4gu487LiFHgsH9ChNs6k3jqLw4gQPaawL6KSAL9k",
  "key20": "3LVAFW9P1a5eQn57BomXu57MKJwfFzxf97TUudzfrcLRv6sSen5btnkyjmJND5T2xTGRmFAfPpbokNogUfHd73C5",
  "key21": "5bU8CrCGQf5ZB7trEfs3KoXGLmHThAFk3yCJLYborjWUxvrC8Vm1SRNuR4coauaornt38KjSBGYxTj46UANCT8dj",
  "key22": "2pwUxnzDarbHmQo6cxk4kNJT1SoTSf5mgxYfWFUEyYFUXWdQjHCKR2VVgw82ENar9vw3pxzCT3py5pRL9jN8qB8L",
  "key23": "D52uAoGCBY7G79C8HUSBgtbdQBjYNzB6DBrtQogNqHAyBAj5dbHpA4CfgyNGUMoDMmcusLk3BP6oXDARMzT9RMF",
  "key24": "2n4Ni8dthn6nsieF16pY5aJcR8XqgxFE7zm6XVf1aP1aXpgh5k1qDw9hi1ufyviX4GbrvGLQTYSz1etzZ3L4h9Nh",
  "key25": "SGKFuAa1gzzPMuHRp1etNi678L4xim4keioH2dYNu2nci6oJvdw3ZKihNQhaXn8CvuBBgeA61npzMqV98a76Jur",
  "key26": "24d4MBM1zTURnjFctstiY3eiETHUeTEPEtYB9dh7wxV3z1wRGwn9qbe7aGyBa9er4QKc8mbxzNyD1BvAKWKbAVHB",
  "key27": "D3x3Mgwguq8m28oqKp7ppgijHEDQdvjdTupnzk5oAqeJpJWdMdnXfNjTuQMJ1BSV2jwU1giM5Cz8oqBahqen1uq",
  "key28": "5eQiBqGwAEX9wWnbk8MyNZCSkcdR91HpwLxZeZYDeXNWXyDLwFS1mLAWrRMzz1wtyJ3AgaTfudrZw3HHxCRfQX6z",
  "key29": "2ENaxYuGrj7Bb8B4Ev2Jm9KCssz7tuMrsHG4szyZbbBUqrWDRgbknwbxau3mcxepckF4hKaYwPqfVPsLJCc3SKwa",
  "key30": "3VA4gADhfNxqPmE5tmsNDaadPD4fRbbL7hp9vDZPLaS4pVUzsoLSRvP51DLcZDPcQcouoN4fA5CnyNTymBCAHLEV",
  "key31": "4U2pYQWFNq56GbGw6t7tLVroPZcFDJkjhSr52AV2pmBHmzzx78t1Jpmv2dLxWvtqa6DANfE4eaAnjC2LSyEQmQRy",
  "key32": "3pe8TXZJJjtnNJuCY2VqKMqmcAV9yb1GekoAYe41upCS4wDGBK3FBHgaNs4yn5iFwESn1oKxPTZkq5NcbpP3HeLs",
  "key33": "3KEw4E5t21bLUsr7sdgK2bgREP6Jk4xLvdhpN84Z8kuBkdMSxbCKgqsy6BVaBxjkgXJYD26bV93h49sL324GPGkX",
  "key34": "8uaHU4KjTUvaHFB1X8TeHEBbyTTQTZPzevPrdaWzcT6A5qNXESqAjWyk5g4BNvV9JVW7526LCxRVvKUFtt1qFLM",
  "key35": "59qZyodRrMduLgH7cNHTG6NcxGZzjHgXkWGsaG15EoRFwtEWefMTFA911QbDWHUHQJvmboB6PQUpVpCoEgzSZJRq",
  "key36": "28xjg7VcnBX9JKFt5DNTeKEEtRFNVaezMBgzY4NesEfKjgxxyT7yrJZdrTiCUzH52TtkkN3ojiH2GFfMzPXFwyU9",
  "key37": "611qKswnMuvNR1VBSdJ1DppTjFhe4TQQTo7CCkqcRW3ZoN8VkBuEHo2kEaAuq65eajfEBUsx5duDCewfwiHuVC61",
  "key38": "47dy6neDdqqY4BT43383Jhd3LVTvpGrYoHDiQAgUwBu3uuhHPH9AoW3dRfU5rpYebmGpDt2che7sJFfbRLU361LD",
  "key39": "owBCioADPaURTKKi4LWk36sMeLDHsPHp1yftUc1wvM4gJahPvNJ8Ps9Tt6Erv36xAqhH8tTEYH3VsBkeNufYnst",
  "key40": "TfgkpcuPUq9N6Ws4JPoiQbgw7nv962j9NG4KPbgkKHnKx2ET8QHQTMWyifhVp1yoQBzbbRRXp2sQYGjP5B1RMzK",
  "key41": "3SDiufrTmYnc59MLVBVo2LWrqT4bghcoAaervwsV51VhVaAGpEC8RVi68BFdM3BYpNjhP7rDsyB11NyuizabHsPb",
  "key42": "449W82kAsWr4xcA1RLPSxUdFYoBGbdbqEafRCHR2aUHUY4suBTghQdUe63FjJfbhGc91n1pXZHjHYbe6ffSsUXmi",
  "key43": "2S48pvJkPmxDAHNyt3adJAACSVXbRkxsZrNHPPPE7ngXVUfjEh3nByopH1zDoCPmNtG2ne5JS9fAhbfDXpbhY4a3",
  "key44": "65Mt614ooo7wd5LJMb8zMxw8DiK78GXsm2e5DcfM9W9hUyPj1DSXdafjZnw1JbkwFzR2ZieeVyowSMUqNLe7SotP"
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
