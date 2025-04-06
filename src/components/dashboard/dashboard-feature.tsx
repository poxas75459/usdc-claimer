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
    "4NNtVbr3EQoYfvNi4fvu56oWjnBGJE8gmURBmpWPByeDq19zNnucudKpcvAYV6y6ZxWNKeLpXPna18FLB3qJjy8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32WNm2YSX8r1mX9xSovDUm7iccSBNebCNLBH6n3u2KvzmUzYre61q4e4vdXaPDeVd2uPkSyHM1E4z21XCHDgfzGA",
  "key1": "2jz4h1woJX71pNSGezh6jXu4WQ2q3HrvpoXovJzMyxrrPypKe3HJHWcFPth4QyDLCfqhqL8fkFQ3mPcEE188dQms",
  "key2": "46vhyzAsuoahMAEG4wSaeja19ABEjSeD4ZCuFZuyZY2y76rdFd3JJdkbeZ4sqYeKC1D62fbfXL9P6U2BpM2ZHNTZ",
  "key3": "yfp8vVLjmzsTaJZh2hTnUTRL2ewL1StBaW6b4qTswqTfkAUAMgoc9YWebEHtNCSVoba9MsDu7md1zK4aTUTF1XQ",
  "key4": "4zeNvgQxiJ2Zyid4Xm5Qeu1wuM5gwDDqvrAPGHE6KA5s87A271T69W7FgFQKzPz8E49PECXW35hwLG14aNBHvo1J",
  "key5": "Sc2cr9eAiXKJwLymadTCLGQ8Rk7TZE4h97vkTaTZbua7i7Dv6KhhGQ7uSodFQ2us9e3Z4U3nZe6FNBpDAAer3Ny",
  "key6": "C7pGLoKCpkdKNLE1jeDA1sSDrACWRK1jMtAiuDN6k27rAULFcZQ5Zv6z43afYWJ2FJad67hRYHACXrH3AtaVTqF",
  "key7": "Uc676NZ5gqi39g9DXHRk6kfJqYRBtufxUSbH19NP53yLv3Znke71G1oXLNH4hCjT7bfYXLmnSi14Gm3tHBrfgYF",
  "key8": "EoYhAjuo61mAVSakz6BcaNKXs17RDTtiXJSEU1hsCKUeBD8xatAGFoUkHsyFmtp6Ki4wFyvsGAZEbALKrMpMdAR",
  "key9": "2kX7ksxmFFXwbaoEnRaoYtbQ3hgjjtGr9KRqr19NHYHwFfrworLzixFoJ8uySuHp5XuGZKWp4vErJMyntpowxDkh",
  "key10": "3PsZ6BJgXvReMWwDukzPEV5ZVjAWkwZiPyyEMx44kft2JWgQvzZU54mTT6bzhHZhEKFYHBidrXrT9u58HpcgyZvi",
  "key11": "vY8jrvGPuiMcfK7Ydh5EAr4TvkKJB3f3cZZcMSiJTTbjjXvpG8QwdPrwhVFKGyQS8dpT4h3kEshUciik7vqhxgG",
  "key12": "X19tDPfFMUvR3XyBYDnuHtHi5rtTiCFncp9eS26Eg4bzRFuD8eTZeJZLDAARiTBz2fg5E6rcQiECJZBfxrwhxbc",
  "key13": "4SVet4hJqeaCrWzrf9YWrwtVSxKg5RNk8aQxfKr9xgyPrmujbizbkWud2iuTybgjkvmFHtiUc44AMfRf4tuvZTR5",
  "key14": "5LehVBjcByHtqucjihD4mKaqMr3E6ZVA6xSgu3G4s9x5PXpf4phAnJ6xT9BbVCLPt5jr1hk8yyzjZcbGkMnpizXu",
  "key15": "Xv5Nmtm5j1zDtiJYBuoEgRfpi2a2yfALS7ynH1WH8wb2RZx5AHNHbuc5AxDrTfRuhD2qt6qvbsYg8SQ2QiVz4eR",
  "key16": "2PyCoPTASzryNPUezN78nb122bF7cBrPVb4qQozMMdhNE64PXW1WvoTZbGkXu3WKzhRHYjxDQbM6Ue6bw3korP68",
  "key17": "4ohA86rr3bki77Wna7ytf5C1LkRkvmGsuFQHkNAGJLVFDd91JPmSd1XDyk1AtawWhMmHQkQ228wiLyJ59g7XpiMV",
  "key18": "2AeT8ZfH1PHXNmNPciAEmgzGqnqtgGdb9RgDmasde7J28B8SdmnV365cWHTzbp1AR9Sfb23JJrrj99U5ZqthYCE6",
  "key19": "2QdXTgFEy6JCfjmA9EpDRZKH4AzJ7UXbUeXq46QCqHKUm4e9QYiaC568dcANh3vrDLCCNuQRxfuohSkXsBAafZ83",
  "key20": "4XRkZavnGXCJEhfdjFUYPFvMhHZKXPZwL5Li5NdwPPtH2RjYbRAbpbHCsu1ZNuRTNCeMsJKasiqURcWuCEzeBpSC",
  "key21": "38uMfywrhUCVgzLZfBaoJgCB2gczKLT5ZyW5BwBMm9rzdNY37LA78X8ZfgKCWHK2GFsnhdrvdbQUZMdAXDVSaN1G",
  "key22": "5CpbtoxdDiqwiPrPFEbcs4GUFCaXdLnKQ1ack91xmr2fYfSXpM7cFh1j5jtqsi47nQwXdK65vVpDbXT7YqHFW8bp",
  "key23": "45juMg45mgGuoCLMwaCLcH5pWiDt2ngkH7NWizCrzkmcEL65EAjbZ4m6m4KMGtpAjuqRqGegCti2enREDun4UXrt",
  "key24": "3RFwyEBF7s2R8z3Y5KD5BK9nUh2Q5NDQe9dzXsYQnpqWpSnK9Ho3zjpFbHNu9UShYCrg7xXg9u1KdkA5ruppvx7w",
  "key25": "VXo93bU34WwGGzvCrSLayFLJF6oNCraKEGv49qKyvpAuLbZD7FHDdMRWn4tNFe6BxgrMxeQQkXxBgYHaZW4NU7v",
  "key26": "LA5dwxY6chDR1fQkiFXPDi7Lamiax24XRYvr2tAUVeUpymy6nQLWBiX3an6eDeo9K9PwTWk3e9qY8qAL1bTP6wS",
  "key27": "2GSzUmvEux8GFWneGKgvgyAcuD3GAXZ1G2z45mTJSPSK8q1gAgqRW9u52NmfxqseNEcEy45XJFVGbDTR99rMNeWX",
  "key28": "5m9zYrBeQghooZg3o4yMcs4HVwXC5HvNnpe8T1QkpstMLmHtPPVUGme5WNwou4zDbMsw7xTkNeFVcQNS3stUzdp2",
  "key29": "2kMNdDiyXCPKvSFUYfCjgT5T9P95yoraVm9wLnDULGJwo7RXtnwJtkdXpd7PM53BznApqisnCM3mGoZq2bMVy8ox",
  "key30": "3GNC1zc8PuryFite49zKHoReoAFQBwCMPm8M3FjbLNmZgJpQZR2fdjCJ2J9w6Kc7EVGJNosSDNX7WG6H4Dja8n78",
  "key31": "4aK6xqdhN2HgCtYsEVu4uZNDAcJSeApoEnVt6FBAYqZqyEBr1kz2hHjtkJkjJF1aHiTazf2k7btHqj2N2XD5vNCa",
  "key32": "5H1MpPAqfJtiLmU5jy7BGbTCyCgujhn3HxdN9qZC9aF2RGeZxZfoVcWNwzA9gdrqQeXv65iZ8KNS7mANPdQ68wV",
  "key33": "5zLQvmcYqp6zzZLseTqu43c5E7Dcj3TZjWegU2QmVZ11ymNd5Pj4xkLR7MXnPoW5aRjuxBFoZeHo63P7DaiyjZN4",
  "key34": "2Duqx8pZjyHLuDTfxdB7MNfxMaXZPeWuJKYa5XN33Fngxqi3QmMbRzEzPkjQ8QCfrSpVSRLtRjtyUdqdVjM8TtHu",
  "key35": "4hezQrRZ2eQirGMB1JwofVrvR4iwRNHVP1WtDYuQe5eV7PZJeV186dWZuXQXo9heS1eFssm8f3se8ED3B8va4Kvy",
  "key36": "3aMWxm9BP1NgSSkAU1wk2ijofg5Jgp8NKz2m9ZzbWaZz8jf6sduFaiMTTm5hQPaK2anzUEKRdWHqimYTRRvZxLJx",
  "key37": "2vf5xQxomF73qCWu3QKB9KeGS9VBzJmHMXYDFC47pZHNVyJToQ8Mw7s9GbbHiFtV3MzyaLEY4RRbfZhBtTw695Fs",
  "key38": "49ji4u7o3eFqB5CV2qysYL6mSH6RsfojPD7vis2798sNFaisW5ezNZCAEUPSN8MjjvbmocPu8syJknk9ve5tt8zT",
  "key39": "3hPF3rgdPZXWdUGtiPBJaZMgs9VqVmsgXHiRatAFMcd96ZMHFfEZZp26S8o3m1dN9wa1Yqji2rXiwmq9hVRxm5KW",
  "key40": "4YBLBYG3Vb4mu6whJQNqm9KLCrrfqF16314Pw1VyswiNxMaravx4ERQBEEokt9vJaDUvAfD72rCdkdaAxgfrkGfK",
  "key41": "3AtTKoSWsshviG8xm7oMsxRv8oaTNRZD1VuCiqs42WAwiEqJkpT4Kj7hU8QEKMuVj442jbZh3XwAtJsaFHVBUzFo",
  "key42": "3fDDoCZocwciAwML8EPSLGQYTLt6Q2mp4J9DAE8UyRPxzgKiKFQQyXuzA1vKr5x1mxtCMZUoarar51hje4vJAvCL",
  "key43": "3Ksp35b6c4emxhkT1rWycRVzNoJEg3EU3j43p9DhV9e2ZUrUhK2c7MMsvQBoiw2bGuzgoCbZ68hq7YPJTwot1WwU",
  "key44": "3kA9mmKRJu51WzuXxaZYJy94XrY3UdfBMtGuRaSGwkb3Vdszd1SEwtMFcycWKxc1WdvHfKDXnzg581PSaPcCrTPe"
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
