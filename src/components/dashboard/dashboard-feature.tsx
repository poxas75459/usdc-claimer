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
    "qwuib4pkL72YSESteELvf36jQ2NmtSFBXCGM7ktbrZzAYv6Ak9eHPt9Y6x2hgodox42qsUJ5urcq5ohsxcVUKXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bsKChRfTLX6iKPXa7n9KMAuovqWuHqxBi6nrLsKeGckoQjQnpYwpgh6J3Lr6ZZUjHsapyhW2oYb4Nsrv4bYM1Vq",
  "key1": "5B7ZAFy8K8n4vBF9vX1DiHgGKq3qP1XV4uXhFM1Cf1VEbG1JsBgpVKy41sqzvYRjWUPyPLmtinj22AaJkp61cYpw",
  "key2": "2YinzpUHtKyRSE4WnZ64JDZcypg6sNrUqyduUfyJd38cvkrvxhDnAAjCuaNGEXeBYAsihbX5HzjafHqse8gMGn4k",
  "key3": "2wNHWEUdHosy9hsr3aybfQFZrepXiKRrjxerRS19kMNA1SEehkF8314YiobiQ5zgyyUrA2Kv9s8jcpBrcjM2fH1o",
  "key4": "iohQ5WM9tkgeEcxYcQ3nWRuDjKjSKmAhwKe8jHjAcKvSXPDfyY2GFjyLjqszH2PCVLLEqXHue9jPu2MoZAuYXi5",
  "key5": "2RrM4G5YTYjfCbmQHkNJK4MW7wbakKByCFxRafgEE35WGPrPf45fbNSyTQS7FqNvbw1uH8cEfXNJxPdra73Arvzk",
  "key6": "HCY9KKS1zeCwqjyCmfjXkYEr8oAc5pvHDQNduTevAnNhK9DQ39MV22JqPqHETHnkYHrz3en9RsT7arCU3juThKp",
  "key7": "42vpEiXzxhfh5aSTgD2ZxryDMEPnKoeiFtByMRgLcu1jrRW49fFUR5vm3fA3D3xyXXtawvbwvsseWbExga99ZMTv",
  "key8": "WNqbuxSxYAVkhob4YgV3Bs4BccMAZNPy9WaLNtyZfJT2o9m2mGDAeQQwct5qnbceMVZasePmAsDZCyAvFBHbuw1",
  "key9": "3JNb6A9rXbdXHhzaQRkx8ddG7LfKRiRD4snxm8Gkfw57cKwAmn8WrQxMm5JBbu7QNs9a5aPL2GcvEmh7QvVqZ12Z",
  "key10": "26ugPQeJuCUQW9XkPDiBkcSPpXVcgkMquVcoJPuVR8CdQu1f2qXU9iMzJpuyaARNY9d3xY3WWnJ7V3NM4Nv3XBme",
  "key11": "5Nvg39dN86tPE7etG8BwtprkA9WWMJFVta9Wtbzy4jb4SAX7Tz2e87dxzWGfghyeSBXCafofffh2ZjRtEiBUNnGb",
  "key12": "4Un5JLcTHW55v5QfUKgG5M2wgwKvYKMoQbkpBndkmeKkWiunYqwBwjRs23MuGsm1XfMGZh9cCtFnHb7zHeU4zeTc",
  "key13": "21LJZf52T9VtLocrSL6eRXNnA8jvDA4GAVHqrFCqWbKurNgb2ccTvPqMX1LorhFrs5AgX626CeeMY6KrN7FwFJmP",
  "key14": "2LVkBVbMejFSN8Mfdfk4ABZyxeDeoRKZHNn48Bz7PBaQrYAVnge9YXtR7WjcMofjkTXXUXPJyD6MEsnDb7UgKSKc",
  "key15": "56M9Foi7bhrhXvE5eBcWsgzV1f752hCn7JfQP6MPfZcCG3ihDoMM9sihVcEM1HEcswwhXwe1re9KDjSEF4htjiGp",
  "key16": "2GdhgDpip12nT2eKoxr64a32NQw6Af2XZduQ41deENvL6JcjtozUTazGbCRVervVYMmP65fCYFDXaZg8nTWrJm2i",
  "key17": "5UPyc8wHBSo37YvpEVATxe7VGaf19QKDpfU4DzgyJUWcNBtCw1dVgeAkuiP7q1ozLieYDZtiS6KMzYhCB5uSbfMu",
  "key18": "FvVdUmQxAPu8fZMNJZBXWRLZtBV3aPkntXRcAAahfEE6hU8d5BYFcSGhefYbbGMh5bkKCxyWiEzE4gjML8fw6TQ",
  "key19": "14ef42oD7JamY4AojgWt7bKni6bxuKrMnr5jvrVFHUcFGRp2M3MjWqZ8r4MSnE8N1vwQ9jQFAyse435U79KZivp",
  "key20": "59VViGzop5XUn1qoY6MdKcyo1s31UBJkHHhQFWckvNXzD3rLSGf7EAGbUVzooCz4CQ1spdsD7LSG2UkKG6H3dKTp",
  "key21": "4qSkYQeXRzesX7aduzBBF6wjVRVB8gSBze1eDVwSQ1Ag9EcXNRxyEwMPgPdVx7vNGRSXzo983bFJoregwmw1VnBv",
  "key22": "3Dhnp2VqFTqNjhhybHgWVxMoD8mBJNx96nQ9fc81yeTSswS9gik9vc68xuenSCKvQJ7Yt6948FDEGrybb5z3g5d7",
  "key23": "2bRaJfcRy7LYtcvBTEJbHv6hg4ccLJVr7ZCe2YcP9peQQrTHR3q3dWBVonXF8J4yRxo5U84oUcNUDTMZopr9LEAG",
  "key24": "2y9dKWg1bD2ajisi8mshAeyxnRHjS51c6Z2NHt3MDM2kAEQVA16odSewCUspTvV8TyyUn9yjh2KD2gkEUhdQ7JcH",
  "key25": "4EssfAQHb9VpwVAbyZ5fkANTdYXqjWEmFdBB5MkAskptw9r9biqq4KAfbLPATEgPMMSvbgGmuUAsnAbrK67Bs8KJ",
  "key26": "5QkX5qVJVk7oF7aQ2X6MYrLYMRcpTcvHuzdy44NzXkAaWH6oANmfB4zCxSuGeQxP1QqGKrps9u1gkbb6X6ETLpra",
  "key27": "3HL2d3LyNFuchUeYhw9xg8oSRepGiL8cgDh6heyNggwWMXcomNQA5Lub4cHiYw5roik8BXYN6bKNuYkqktHpyAPu",
  "key28": "5zSEjXDAfFZ9FXyd1WDbwzpmnZ8qCCDyY6WD9FYpgYMu5WD4z2TFqxa3cnBqQ9swBYpZVHE4umVTc6kjLwkRWMKf",
  "key29": "5zmF77ZebNM2ZhZFdyTWFu2XWkTnYUF6ZSrJMydP5RU7v1QKcsZ3sMFR1YSTEDVePiBfdv7iqFYStAe7ToaekhYV",
  "key30": "5voGMf9apVgxL3sm16eUKnDFkX7AU32wGUfhKpWjRZWvDCL8RFyzwVGETHzdG3rEJBKKDBRCtwwUt7wvHi26Fccj",
  "key31": "2VakSVJy2EbwPNC96mjPR6uPbFkZHKPYU96bzQR85XKYV7NUgvYpRSEtjUk2mfQdjGHtxGVDsPnruhjVa1z9KzpP",
  "key32": "66y9odgYy2nswbdtGUp8G1qaFxDQYfFMf844AzC9M6m7KXqtEs6tujUC5V4eac8exYoGpmCDKBFytrZn2rKskP6R",
  "key33": "5MPE4nX5Zh3o5ywpFq63KEfJoi965FRXpkzHSdxqAHouFu68zyspLy1Ht8rRxxWbVy1SvGawCuRKBM6XPxmnif4B",
  "key34": "3MXHN1rc5AhzYN1nywhRXh4Lhf7RkrnaAD8KkiCQTgtAdi6jWrb6J6MFTsN5GkDekYBZM4REuN1YLA6GjrQ4qGPJ",
  "key35": "53x362kCe9m6VbFaF8vQ8vdDaC5J7rDU7u7Qoo2E58bNctPxwrKfJPLRBrff1YEFxGZhVuXozZZtNc63cKtR4Tp2",
  "key36": "2HfNuhvzp6kJLLyAwFvDHmf8LgU1uyQN2DxM5RdpUwsHJYyC9cfindzNKybLLUgwvYG7gi76zQreHqTuffzZZf7A",
  "key37": "3a9cHjrprWk76VKwzDJwUTMKHYs6G6BXESv7MWibq4iat8sKqc3io7vhUXoswL3tYwcjBQBPrzeVn6KvsrS4NpsY",
  "key38": "4xx8oLDPX3Sv9Xj8pb9Kmr342q63gWE8bbi2LJsf9CH4YBhJmW1cQfH5JrBMwJZ7iCFMufBWNAs5iaxFAh9o5VJd",
  "key39": "2Q4ETSYLSRkxDd1ZiPjFHVq2Y7TXzLP7pmKdzQ61433Rtt7xmB5JYk9WBnzpLKWpH4QQzJbrRN37oQQhUU2TcLpM",
  "key40": "3jSUmStKPvsXDXNeQmQTBwSw3Pua12H65tcgNfEB61QgKxDBni1UMotbiYBzbUBwVem1YrQFRP5Kx1HBZdvsdWyN",
  "key41": "5LBeDD8JDL3rBTHPJeRq8H81XLG2c4QVj2aYiLWLVEjvTv1R5rNK5NXCWPrrgXvUukr76r1cwyBiEqg5Tf5Qhrxr",
  "key42": "2QMhHhAriu8CRr4Wqn9MXxUHpbt67qmaf6XnTjbuj5j7w1iqryGSd7fAHvFZJ6s958kmQUpokMPxSwPTd5ZXhuMg",
  "key43": "2MrTF5uTyi2PPsms9rgyMsJnSf6rMYpVhvXaypwUgML8sVPBVM1CPuRWSAURC48KwBkhxBea4g7pzhBScBL1oedR",
  "key44": "4yqnMmY5Ubu3TyQPsQv4ymcxsKypx1xxh9mtsvtHC7S8QJgLK1KJ3272mfEakSkDDR83d4cDH3yCYwAsPNVtm9pT",
  "key45": "4pEFFa31PERm6VnZg4d3R2yfBaNq4GXKvvQ1Q5HBPPCekFbosTZcyZV38ngUvpV37ZZbh43oQE4PobRza5SZPBAZ",
  "key46": "3TLnamFEjQiRMtozEbZGmURn5qWYpBwgPGTo3bGnxJetneVNtG2aUjDkcTru1yTRpTQ8UsPdgY3nQ3ri3imcHMSF"
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
