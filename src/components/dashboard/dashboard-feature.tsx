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
    "49iJy7XNXXasfDkDb6hjKGemqTSWknRDPK41H6HxPAHjmdw9X2FmFK1iTEEQfitMpPUHACVhTJ2Sx46J8tYLBJ1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fsn4vp97pP1YZhQSKJf5y4VUFcR46sVuR45adVDesA8wwn4g2HnPZnt1TZu5iRRiG3UTiBvTqzxWfowWN9sYABi",
  "key1": "4n6ZmXZ53xC7UFvSBAmwdj5ebaoPUeXQZkPwEX27LZ1niJtuLWRNkVhxwRD3aetTqgiBJ9688DdYZwnJkgGGsUUL",
  "key2": "39bNRAWcGUufYHo9afSXrnZnkQgWyoFS61pt1Vfc8P5nZweEJVRDbsDLvyCQKgZzfyVMc1Y7pXxdoJEYh2d4zEDP",
  "key3": "7fMdMBWkHhn3pzC9zsmL6C4RnWBk939PeQZ8v2fRAs7LBspUwuZ2FFjREMSUxkf2CX3ED6qT1UszuVRdkMzJVzi",
  "key4": "3E57DXLCUFADEKARcG8ZohJZsF91EA38XUR4q57RGBcH6AMggtvf4buRrTsdxGTcu7sst7ixnjANXU24Csw2pWeS",
  "key5": "3QBy5UsMT8hSFDxaBPrUZNBCrnrXLGopwbVWAx1DBeeTf6EEJqEPMFi4yWD1qMDD4J7RiPkEGi3TrbS5kQyJYXdY",
  "key6": "38JX6VWpWAk5b42DKvbnLp8aNEgAwYVaGEfganAEWA6zJX9AXEXNXw2L8ZgwuWvFqpBG71uSTkV2zJ6fUNAvK8iT",
  "key7": "4hVGf6edrwgXAxJjxtgM8DaHwhoLEuM8SCZmh5ZXQLorceEYBA9ztPGjqv88R999cYGeXZ4gwEmTnZQd5JpbHNW7",
  "key8": "DmPi6SWEz7Q1uyDPL5hMPQuV8AmvEBujrirmdHi2pucFbLvxZoX4WzeyrrgKexr4hVCXPen7KTAzpToKX3Ua992",
  "key9": "k8N3DPBv3W2fC6GQsfDV6L1RmxH7zMV6cb8P4hiSqbyWEJ3WCFJM2BCdwLdyxicavSvJMv3dM5bnVE4HvoFkYni",
  "key10": "4STJtS5v3HV4e4DLT782C7KGStXkzgFJjNe4eVVYaG8KquVevhpLbDooma8KAWBonMEm8Qb3c7KVejbunMk8DR6f",
  "key11": "65S5KQV16UgeDhtmN1pfgJN16phx3ekQw7BPf6fQCN8tpFeeF2xfvuRF97LeVkcUVUA26rKySTy9u8TdtSJwvtVo",
  "key12": "3YXuJyGaEz9c9k1W1j2PCpaA68x1jshk2SbJYUVibTuLWZ2wJB1AGnBYWkUcdmVhLsA1pAX3Fkn4thw2qxadsWEz",
  "key13": "vBNaNCnyspzJpmdpLGhXM4VQWSxKRPNgGSPcf6wBdG4PcsVkU5fkRJQpBv12vMU5rBKBCgpgYgxgVTUD2vSg8Qv",
  "key14": "K2D6KRnTdEBMf1TGvGW6YJFnFR3R2XotdHitsuNJiLFvdYTF6nwsKnFF3bwmtrS4Giuv3hrmW7JEZryR8oLEQAe",
  "key15": "hThmz7trGLvJMcWdAvUiuBhNRZQLFzWpGKQeEmNLaHTbMJyM9p3xVzbj7sLxFuf1wkdiwPxQ7aEMHhiChLkjvVN",
  "key16": "5wcJj1mrkUBmEfmuYdoUu7foZPn6XddPTAPTQoMrizm9fNRhNno6f7VkRMs3NMk7AExJgv8sM3XgNQAQ1kKvFNuX",
  "key17": "3Eev3GNDG25RcjwDDDWGtVWLskRN8YkpBFe7jfKETBJLxBqJ2bv7SJ4yXV3R5eNKpuWVuDvAWdt36rTVQc2fKohX",
  "key18": "5EzoZmNZtj1Ph96F28iQENHAK4N97zWUEUibxtdpEsBhFSM9Bwph1dskTyfbrUkvRXM3WukfNANu4vvvgy5mfjhM",
  "key19": "37TXBuvRcpBKJeoK8Ehe6Gtb2uuRbjLBDMQcfbM6mw8URnoro4HzSFym7bPJxGa7bRHJAKvjCndt4Pgv9RB2k3gG",
  "key20": "5ea7zLH3vdwbpSQs683aezMSnyTXKR5YGJVbPkwWatugQtyXbCzM2YNfGK4L7zJHtxJYLYfh9Vhm6LaEhJoaWgb4",
  "key21": "2CmNrDdVMGqyLoCgHQpCAzai3s3SrHRkzMz1DzjWDBswtrzM99K673nEVnvwiGKbk3v7xZkbAsrbJimke978Fwxn",
  "key22": "3ayeq4JGfgZnqiaz7jxYNtEtRKAXoBSeuCwNNibEkLv5i4czw7LVNd36i16xrcd3K98UXBWdbR587vDyMoXx6qUR",
  "key23": "2stgtWHB5gAC1xSvxrdBGGswCY3C8BiYquxNxHsEYkAVvzjjaQGCqsX2yg8A6Tnkvycc6aBTzThzDCFTzqAyE4ix",
  "key24": "cUjpB6Exr4uiXwKj4AAN4AqJStRiKhhB8tMTYFJSXfCDF6RGEHkMERpyvtj4739ezcUuXBQeHzT9jE7cFjxp5MB",
  "key25": "3KMGMADwE74RY6DpA8p2QbnTgHoTSuxj1MTVLgEZ7ZFBB8Eaa4EvQ3vow24mMXrs8XtLswMeRiZx3Z6qauGFyq52",
  "key26": "3MhKADucTgaH9852UkSKJM16FiUBtnzWzwSVf7ybRC2Jizp6vYPXm1ebkMLzzdEgiMZ5ujjWm15recRfgPBAsJJf",
  "key27": "3X2Ycrjw7f9CY2gLjF7gy4GvGxPtqL6yck5dcnCPcj97y5RCqCtBTFJaiqyXZFsdvKT8PAdmTXb84CA2uaTxcQAN",
  "key28": "3RDf4Kurzph5AeUoxxnFXovppSegd1Ua88R7zqBC67hWjw8kct1kVX8UM9ymnsoFQmfw4RCjtsSbta2Rm1kWCim6",
  "key29": "2Y72w2J5eoVgc4USGPe8UHErUpKdPpTUgFxZ3SyxFGhYTCT1CSjfB99ZvYqyffSfhdJDfp8C3nRm6SSNQxxUsZDD",
  "key30": "UPWk62U9uoECvBHyhqeVAVq5Fk8pENP3biUYJycGMpCLA3Pxm4Hiw7yvX2RdRz7GE8U6xzgeCjLQKfUhZiU66he",
  "key31": "33zYu1GQiZUZgKtfu55TYVYo8Wavy3RKAtAhsewUz51UZj2FKjkGEmx1s51ZfS7uYWqxtMvYnm5VFj6gy3Ky7A2z",
  "key32": "4jqJf9XK8kKuLp2PfcfysYNknfGJZXMsSoqM2hAoq4kjrq3ZgZjGzv2MWWkHqbeC4a3jYXY2dAK6KLKtf4JmETM6",
  "key33": "42e3d2ppEWKEyHXh7oZ3SaZyFJwqxs581YF1Xg4CbyA3sv3NyQfPa5Y7FT4136fzJffDjUKS7QDhSkXwzvYbyiZF",
  "key34": "BoQ3diBhNgk2DMnUco8DvYrPRwDKJPkJqWYBkRSBwH5Phhnqjv5DS4HdGFUvMqquVV3tMUowHf962BT9bmVsB8H",
  "key35": "iYoFmvY9uuLVRResWUiPXqGrC48u3w54V8PVcKCj79nkaR5xn9o5e1Ya5mEWEhT4rrnS1FAkbjFp41pWniZEuy6",
  "key36": "3peQcpnjWhoCNHGnrgrdFNJsBh2v9j8UcV1fmAsmdUK5CYP83YUkzQ1QHaFAsGy75varfJmHyhKCaURnpVRUWuhc",
  "key37": "3BFLsUBRaoosDA2Kz2ACC4jpirgYKj8HdW1g1N6kceXYYjZVqCLTGnGjieiDHmQ6aasrRUtBppiMxCqTqpSsyV3c",
  "key38": "3GifzNnYxcgaVfe3xKVBjKNcNDbiUS78ixjdtxd5jHpAKByrw6KkDPQLsR23zN4JWim937PWmoQ49ndwje479NZw",
  "key39": "3amzADgq59k77t68aovm7NcqXzwdgrfgYyGaKRmYHTiGoJUcnPm4rikGzdrHCcUpj8eFJvJBUNEGMNoUbjtfY6Ln",
  "key40": "2R2S2WhT6mbbVko6nC2yzNqQjLqZboyuXcpQMZ2pyZmJ7hvkSSdGPG1GsGA11hr5zA8vjZU7ZRVQ2UxgRjNRDwTa",
  "key41": "4hMe1VDVk67PPQTX1a1zQJynaHPVJA34CTBHFG6kGWMshbgRu3CMdAzMEAuArRh5tyeaPrdcg39q5ujdaUpo6XfE",
  "key42": "66MYNwep6F2JfbTko1XVaGq9VP4eoGCBTf4ANE6Rd7C6TBaVhX5vUU2zbfQ2QHh7qj2wCRAZsYu4sSEiFnwErMrY",
  "key43": "3P1HUh3XfBXRMHUHjHzV5aHYZJjPT6TCnGzm7h7UyHEE2ZPouj4i4QmAqxGcJ5xVnxRQDYDoey3RKphEHQaonFDw"
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
