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
    "2gA8sWjQTsE4F3TbC92Twvx2E2vkAdb2cu4axNfX3PnXUutQPPkAsoUSud5eLyTZE8E47QiAVjpfu8sNpw35z53E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qWZqabQVxXpTtweTGyP8YWJeefdMY2QJiQeX5AVn8m8DsqEovbXDr9Uba5vN88cQszwK2bVjX4kiDvaupzCdL8F",
  "key1": "3z8EtgnW3rEFgb4TMq6xeQTKxYRwpdUBX2GyUy3oNabjhj1aZf8CNyaq3rtxt6zzY1DJZdfr8WSACMeN6uQyTjmF",
  "key2": "2b4ZseLYhVyw8pvFMn7aKTyrnYMjBma8yH43wEBGa5GAgpJAEhz76Dnw83Nu7bShEhjEFC57KJwUweMUtqJAeDh7",
  "key3": "2TqdwBMW6JgVuafQmGcMvqc5Vb1VVzeuSE8ZMc4xSDwFSeE9Kdiw4seJPozrM6ZguQDcNqtx4KEyWNpM957ki49K",
  "key4": "WXNu2ANmKGbZTvNK7ay3xDXxY1UY24chAQiMGDxgq29aiYAr5HWVFzZxcgjSfVQnJQcNH4CZyWXQ1mJLJJgSXnm",
  "key5": "2xzn4S6Wt1YKtHtgde9qi2WPBXowRiytm6VCosRGUPsujWePjcFqAZ3CwUAaa5yy2ZRdD9mnwL6k2rWpV3u6q1WT",
  "key6": "3u2qymfGpb4YfyrsL4PjTeGsfmJTxjXDJJ2oBbniFuibwSjoPsNmF9wJtJ3TeSPF8zYtX3JUMWbbjXfSJzAk3sQZ",
  "key7": "3aXMnuFp5ewPueCdk3R3x2vsmAXEPP4hcYVBBSLjW7asJBFxfSnU3JfgbkiBW2CwLyb7XvKebGUYdqbpT8xE5a7b",
  "key8": "3HFDkVPAo6aty1f1XvEM7a5idpiUCvAXVmdL623b8TFuVhwAdoHLRWSckrwXiBtyh3fsH3ZYF4F4EBgTKYxUociE",
  "key9": "3dnymyKW28BQZoueGyCGwBmcAo2Kix3gRewuZ47nzMQibx71pQnYvry6gHgeYNqK4qq746r9sxtkgwTRJy43Azmp",
  "key10": "5o4a5Bycwd1SghmaqaYVPcFTRaeQwevP3t2vyygYh5Yfqa1tY8QYFdFeUu3AhcXM7yrzLXWpAjv84wDwWmb9Trtm",
  "key11": "5mo3p33DDW9pXHUjcQ8Ef1Gk8EfytT71wXGLgjiEQMN5BycdMJCcJ765kfodzyEggHx3YiwKofkBwYFBbGR5XUeY",
  "key12": "3ZtkMYYoUJZRW987qVhyZggq9pngTbWKp2uPCULk6VY31VdAb2kWFHtAmTpASrx4SV8jHrboF7KLCzZb1nJtK8zE",
  "key13": "w4JvmabHYj7GWCUxYJGEQXg8mg2pmfiJtYg7NnypbUVGEtiWLREaBuWEzdFqaMhnCUCiL5DCqN6bGRBmFVBubpr",
  "key14": "4GwvnJHbrT7GV8pJQvRyaH9U4gEMqf5dRX8DcGZCvYWDdQdmvtPvaqWjeu4fBB8oshincCKJfBVZJnhKR1fQFcWU",
  "key15": "2xh1bUqM9a3tjSu6SfCx65q933qNx7T8K1oRahvSAQF3XSxmJGJwcAwk8q2eK1fzXThVG9orQfY2W8ztpTNQuwiU",
  "key16": "2TbjHLbLrs349aawfk82HGGxr88THrxFZPYGw4yPG91wq5ejsKCniuBVjJ6RWa6EDeKpz3C2g2dzuRy1cKYU1LUD",
  "key17": "5uLuJqKuwfvTY4RjghV9GgLBir9Zu8PKYcFEoozYF12QfLVCDiCDwXLEUMxs3fBmLeEDFK5DrPmb3uD5cHVDeErK",
  "key18": "2pMe5B8K2JgvM3gMeyvNgQZyk5zaaTZXyPQEgpUChZPWecYJHRrauvQ8SecrAb1Xm3bzaMpWD9rAp3o6BaWS949u",
  "key19": "reB5DZfhmVQEjypG3SsfjVnEt4Q7F75USGfaNcySrawz1YJiqBxkwQUXU9LCcTBVoALLs1GwjfhqGjCdu4Rq7pk",
  "key20": "2FYRBECeBSAcBG9KkUbpZeig9WQkjNWTJUPGnCuL6UtnvcTEeLbxA4yX6BXENTY4taJJ4d3kYPkiJu121ZP4joA8",
  "key21": "2GafVxzgsuqNimPCxt7EVRPqCH8XukKdjcTqsj911fFndpGKQW1wN5JRSLPsesGDWM3eq3armVXKSqmSQhLHonrw",
  "key22": "62zcYULeAqJ2R9SDBJW7ghFgcYnnbGyf3PiocKTtBib7mNJ5wnpz2wAsmEL4FHhnGZoYHAsoXuhGzrUWKe9imUdS",
  "key23": "2FCr9VnVuUAwgzF3LsLT4zdGPkGTcrFiuL5BDpLeCtGGp4eHrYsQanWhT3LfwgfFXYxMmWTRQ8BNVEjg1eZt43Eu",
  "key24": "BJixFxRbUe2Ei1DK8xtawuyac8Q1g4oZbpfbCaaVpfJUnr1RnjjiCZPGJepmwTyooftVQn91sy2eziEkMk7Fi2F",
  "key25": "36A3kMnyP3stQEtj9zerahT3PLDZ4L9LLsP688UyZdvQT4wDqFXQMtMRWmd8dUg8SR9nt7n7Mxm59AC4vGT2rSAU",
  "key26": "2jPdi4dHKZpqVCr19p2KtPJzw7bXGaf1pvghhv2keqkfQLKVbQVrKPksu9apyyEDjx5jKg8znWktt6ujxzY41NiD",
  "key27": "2ovThgUfmfAVpJUovxvPEcd3bgWbyV3GvPq13WMQMhq6tccUSjaoX1z18rMGrCMVspTLFVnCvYTPMBMp2JcG1uhB",
  "key28": "4ebFkaa7yTwBDFEDK2NqmfvrRz7DyWK3ezWDdGV22bxXqCtdyabpEi2ENfJRK8HdMn62Mm28fnxUVj7DrinhATzj",
  "key29": "4pyy2WRZbzGCgaRB9rQhKumnXs4KXtpxNbkS132PnAKHmkjD6HVnVFjJvDZHNBiWJBxr96KwxSEKYcgfCNDJDsU",
  "key30": "GzWqbLxeCHRaWWCF6Mkw64PTmMtaTrvyXHVyynz4TkcfuchkRMYQgfKhCprtZ7ByN7QRzLnYmXyiKZo4ig3C42S",
  "key31": "4EnTbAgpjJn2sWqRN3gC8fwg1FH84ZE5nKZhtyk8eL1JSpEqDcneL6ei61RSSYHiCjMkqKKsvmx3uLhWeVusmoVA",
  "key32": "3DeKGiwzUKUua2YCfGZ6j9nTYM7Hrqk5GPd32ymkcdgeKxEVz8W9PfHxDRTbqq2kCcwWw5qa2c3tA1cYU8mbg7Uj",
  "key33": "6LnLqdpSFxfZ4oBejZr2CUtGgphQgD1wUQZUtyinK96J8PriVvorSwGPMbHCdpKPTBmrkrNx1xsgzxgaBF2MNhi",
  "key34": "5QtXLfYEToYSioHjsgEvw4oeD9xcsfqxM31395ZbbjdrmMFdtSF4TGh2QmdBGArbcywQ577w3KajeRe2mRj1V7ki",
  "key35": "5EL7vDcbvCgE6MwYdvz7rd1XLCTQDtrhMudaixeCx97p3G2T8q5LRcgmYH4wVEQ59aE1LvS1dzgKPRt4U4pKguDw",
  "key36": "5mJ7wdep92h61rzyRPJcMj3AVcMf94hSbByeNdTccc25zZifqxXcUfJF7YU8eA81WraKrZ8stJzXFhdjMK4kQBcr",
  "key37": "Vp1EGo33e7CrzS5SZ7ZdMyA9M7wpA86Sg5gM1woh3uU99277xwhDPgWNMB2FnZeSzrVCk9uJZQQBWMZxWpAcD8J",
  "key38": "2PfJfFwzuAVSwuNK9k2de9uhEeGCzQNJTiJ2bduL8vDmC2Fhi3TpDTqHxSVFgJECQ6h29pVVywah2Sv7Fknzpfny",
  "key39": "4o2QcZNXokqtJADyYA8wa4TgiCq4yVwLsqKUavPsQDSD4TgDK5SwJrTrgJMLrwXQm5MBcUyUtBTTmddt5iBU34MU",
  "key40": "4kFpydL7BNKe5e13Qxe5SL6gMAjtDhowuNSvk56NcDbq1rvikMdHsjw9XXx6Exa581nCtRgZYBuxx7reL2NqD4mA",
  "key41": "2zeM85TRGp1o67ipuuCDutUaJDSQannZx81x8zrrQRgwZfuJmTJzQvCmXf2mUubgLxzuNWchNSjTDfS5VoBhJrYu",
  "key42": "2woGMuMaS478TiUAhU3VzMMggGY4mPU5rCLJSuotfTq6rcJUWsQEiE71X4PtVeqGw5LwGNUpNTiFYCxwGWeSDzSB",
  "key43": "4nu4bGrESJFTmVsQv1UpskjW7wVgqbhP4ZwydPwehSBkx5UxVBfmVGwGpveQDCYP8JQvjnUfCWjxXf5iGwSh9F5n",
  "key44": "56e5pDfwrkhJwvhjcRFMvFiq3SnNqi2YxsxmraUzAbsiZki42ArJEBXfsbzJc6gRjgkJW6Q6czMc9XBrgaoGBBCU",
  "key45": "4izdam6o45DWMvJuF5DznR21hSxQNnssGRTVBq7VQT754wz7raB9jBip3w8U2ukkGapX1qc1VytgPFXt49sbTLhk",
  "key46": "48Dadvxa5xF2KqNxdCkGtDMY5BnCb5LGMWGkRnATXMXNdDh3io1LMGMGayzLBjTMt3duaXDrRgkFXXjZuuHk1bE6",
  "key47": "3pdJrfpWaxUzJ3Hit7jCg6izFmSTtMnVULjijS7zoYq3rtD4e3R75t6tFB8Weojw9TfH8jF1FUbL4wQt54xCFVkB"
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
