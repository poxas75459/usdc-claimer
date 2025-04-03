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
    "2BEut6vddno6srJEk7VXFrLFPjZsEG3Fsph6k5NoE2cvFyg7X5wQM593jQkJm1dSmYndQt2jD9HLwxqsyVkzNU4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MXJsRhbLweLYeiCZNuc2tfrUzXXFQtw3FuVixQdKuJ89x8BEt9sqj1mbXpKDQsEKnYVH6XjxUxotEoTeu4wSJpn",
  "key1": "r8MTKH3TmoKA2hi7iQTLG4mY1rWjn8vUnE92piPsS3TbX2NZ8AGq9MXj7gknQ6p7Lj9Hu7YMSiuAwTWkzr1xCbq",
  "key2": "vcRFcL4S6DBEhKJSoVsdkvmsfx1Yu51VEdVux2bYhPQQjsg2XEYUxW5Htzbi6SqAyApN7wYBzPabJUmqXdMuwHC",
  "key3": "2mHJKPwLpDQRuFK7SAgNin1vG57Ucf2gPZNiibeN4zHiTBBMCX3KdgRoRWnGjda2qVNVJ1FS2AKvNRvv8PSMtwrq",
  "key4": "4Q8TmU8zf5DsX5e3DV3GEZ2H4rDQr7GDiV41UhsvgZP9JWGDqK5QN8fxhaA1zuTk2WGQr1FAZEAsEce2ihBkeA9M",
  "key5": "2X7dw3Z71JewzSEcyegrmhtjfRDvXGbX3KB1FdS9nHFu83fMFMdXFJTZAPqtpDtFXwrEQNd139Rd7APMEMguw56r",
  "key6": "4dG9f7cpUu7YDDhjfPEatbJ9TxEs7n24hcqEPYGiAPn2X2WEFFMKEtFLKGSYc3Q64y4Tkj6iRNMZnw23SfK4AdaQ",
  "key7": "5dcdKvi8zmTScDmq79f8iK9XK2H5wb1RegcmH1o5WZ77myqPdwZH9Li9GpUzKDg4wPCUebidzB5ZekUswEiKJYZa",
  "key8": "4APbAbaaRT9X8jVvGu5nBM9RYk3dptAfuEmuR9hvUXt862HTuSTPjdHQHyrP5pK6RkfWd2Pzr1c5qeuPq8DrKcJf",
  "key9": "oTzmdurNPeBBqpho8VmBeKhrcHkn2BpvFLJ4ZdVkKKftHgrqgTefQVFnQ2HQda6yvZsDkAB5oM2BbYPrhD7nciv",
  "key10": "57VnGGBBD6xZkaefK1eG2ZRnWP4vyjp1L3DmUeR8foAhpXADg8NeiN5eVXGjdyNZesRGtnA5R8Uw84RZpFDeHC3H",
  "key11": "51AJ7UCKisiAPpfCRcVaCLuK6iQLYJcZTJYBLdDqd9TAe6hn7iuKoyb3Z4V2fReB62vjbgw8nvX4m2846SnpJQbb",
  "key12": "5qkyDQ5Bt7k28DQ17zUoo9mTzmfQ7QuRPgED87rvM4iSEkubb2ArFb5CBGTHfD9CwUDCnphUu4C8CzPMRQxdWJBS",
  "key13": "4BLXPNjJSzZGtq5thkQBYk6zny9M28rBX2vGdBu9Hzq5HwRofqBmNL2xc8u7g37o6fDeEiq1mqaomgt1hLBStqJ9",
  "key14": "5d2MH9MkDvLyuTTYKdGbmL4WxC7ekbbfDrNmGrsq4pJN2H8kfsD9NkLxqavP8L5RzEPuD3QKfcnmBwVTZeky4tka",
  "key15": "3MTk8zPFYcsnWwVoVNGLzB5bkNmFW7pLwSMuDk4bbeZCyaPmuQrRrqWinaCmXf5ouDSYCBnMGiRHgg1R49MeRSqp",
  "key16": "4QaLnPJz8j121gVPBByD8ZdnptUzpd5fvQ5A9ANbRKVLKVx3mDyesXJm5pAfSxAPAVEEfdanJwEo6PZmpFkKhGer",
  "key17": "5LUHGmabGz2fg5es3tpBiWUbMvUHjJeTenkKAaxYvHZ8DovFENQiQG4KPwwWJWDGQ3z2JuPdiu9ZHgMVDEdFGvyW",
  "key18": "5R2aZdoMf1ZrC2WwVcXyZctLYb5xWiAzWKUK34NftxKZ3ZLn5wZ9ZFT6oRWnAVAPEBnRmVpryrgyhnbFBLbDCEwa",
  "key19": "2AJQahy7kRGoQru8nR7QNo9hFRAKnBFnkpkXU1pP6ngnfYEgCjzMauuGtoB4cSKS3erMus35fD8dzSJDh5hTwNCA",
  "key20": "2791UbnmAecthHE59r3DXSpymXziK15P7j6E15yZg2YvfuosUxoP3JG2gpdHgNgizzYvueMmF9ikzgZYxUnj5YXV",
  "key21": "5kV4sgLJhUgjbvQYmoku15Cw1DNPQz4uRpfxqkfioaXhihoihDzYMHhXenAJahBAf2iLGcjxymGZWQExxq43GvTZ",
  "key22": "5i7PKAHMcFtF4JKFESerNn8rdxV9x4Kh3dAx2XQfeVSfBmxpA5GpG3UqPygNrDhvq4Cy2DJkxA91eqV4km8MyAV",
  "key23": "3dPm8ZGSuU9dscyztzEhvKQzUWaAJ8zGcE8ReRH4Z1gtvoFXzw2LFkPmjxmwcUdaYVW5uQbxPyy33aSubRxuMJKr",
  "key24": "2pp5VFVsC2AvHwfyB3L4k7ggSFrQQ7xZaXFY2ZZsBfe2qTPV28iwYGvQ3PvuRXpqSvDTxDUpBSt5oaAkJCaC8prS",
  "key25": "9WPHHwHQCmCGpd6HYUSjcWpLWRecbRP8Lpjm3fMJw1EQZ1wtLFQSihe7ZRpthXbFYuucueTcK8B7Qtpf8b7woLK",
  "key26": "2CiRNFMhe5Wugww2XuAFTznByZthVfLXJozpEFgVNPT6VoNKMHUcyUNeXJdj1CH7eb2tbYUzSjPe1E9U5HryDTrT",
  "key27": "5DjKkqEZsEK96nmss4H3voUQNyj84A5FVGp5foeNswxe1jdJqmbKmXawQXjWuNzRwmjpss3u7wXez2GwpNx1a36D",
  "key28": "5kRdRzDq7Gx4EMj2dfjSHksUFkd7h36c5pyTfRGoPYmb1gd4LwDwSLN62nZfb9woXD2erJzF15cQWa3ekZx3qtQx",
  "key29": "2jMpSt6uC4QfNEX7Lidmb3TZ8JGrhBC9rsKoKqmhjAPdS5xuuoBiHzq5fkx8ykXZuY6nVWRWTBf4fFrjDv6EncU2",
  "key30": "65L7bsebXop9jZvHFK1MXqFr1r8FDdKX6wFQVtJrjqU3vCM1GzVJ54NWmqi8XHjHeBEyKrBaRxosB4VRsPs5zeWc",
  "key31": "65uCxziv81hSpm1T4Ro5LFmzRyVddyDRA6VxKawKqcYeCjer8W4gnrLZTMWKiSjQzfRiYgtdLudjyfRQwN2QUEgb",
  "key32": "5ooEpicK9qJgfMjTbHzbmNffmdJ849fFTq9oNxKW8vU9ir9JxpMRmE9Yqz34PBveEkjbnKwiey4h6VtJeNRinPNq",
  "key33": "3HDtGW5VWtbAkDSgE36y7DZ8RnumDJuSxgCyE7zSC1p8jrR6GpRTf39qCUyA2j3PyzMcbHivjGjxs1EYBsxnnhzT",
  "key34": "2PRQmpAEPPKLxw8JALrWqbinSM2GHfBBkGHEtSdE4MPxrrAVBVEmXgYSKB1tTj4bayWrpcL4PXL5eZZFo8X8HCBu",
  "key35": "33Eizqgk1WL6TGcb31khfqz4NhbnsMzM4aobxRFMAivzAtHd7RTtYZtYqSscZUA7Wj6SAMfnXpeTih7Xc5rTUqsX",
  "key36": "5RE6RSo5cDe2RhcVAdbkEE4nfum18bfjvMikbdEJ6D9zXbhkyckRsQ8zHPUfkeHrESWPv9hr7zXbbneoAtZJsRSj",
  "key37": "6275YH5UwPFPnkghdYUzWJ4bNBFDXAx8UWg7g2aipQi9dzVfvem7TpoSgUW36mZpH5ADjLD3BHThLpZiTPLG8GoP",
  "key38": "3oAGqNw3jESs5ahphxHZu3HMiaeKV1eRj6CGSfujzxQFumcCBuR3ph7FRDMJBcUBEd1N8o4QkcGAqnjNQWP7UWEB",
  "key39": "2mdVRmFaKfd8rScTk1hp83wc4ap8XLNKU2RCL3f9WDpSsKPaWdm3iWuPZgZBMunfDA8rgnvCtj5Y686Dq4YhNvW6",
  "key40": "2BhrjieGS4pW58PsnnS56nGKza5QuHV6yxnPL2NG7enGo99CtS5PFFvHqy1S72UjEFCvYQ2vkucn9MhGaazJCVp",
  "key41": "5phXy14zEWrSon7aumqRsPhxAwb5EQrSMwKMNyZzqrT4x6HrsvpXni95dh5UPrjSzqMQwt76vQR6ryD8Fo3mmWTw",
  "key42": "4iD85rycUaJjKTh7n9e1XC2PWqdoLhF9QNtW9Do7LaXVYpgr5H8Xw8x4RkUvQgbvuMF3qXR8kcZXb3YRA3aaQSqW",
  "key43": "2JRcuXe9SZPuDXChe9An2wyGKHWaqSbtjc5gdeTp6xmN7m6dD9qK1jgp2r3R7NEmryUuHYxFkVfFYaGWHYBhisYy",
  "key44": "3iNUJVwsKpBmc5EFApcfittdwUqX6d7SDcLztWVwoLksYBK2hwTTmZdscPCzjfybe3ZXRxvZ5mUjpLUBZDKxiJKA",
  "key45": "ngmAMqiMFnNTpvoXJcm1ZdRQJgDcYA19smzY5ZcTnMtb2YiFwq4VLGsj15FmwRjCELYfK3j26XcnkzncWw4UmQU",
  "key46": "3iFhyUdfGyf3SDuNmDq54qpEZWBbERvbWA3zdiFv4CkJdfhwoHDiyed7jeMargtLYaD1b7Hxyua6SLvZuiiyakzc"
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
