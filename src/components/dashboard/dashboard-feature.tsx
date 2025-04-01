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
    "h83VFkE5r8Z98bkhFYVbjt6wE9LbivB9zt3RWi7rXGuMtm8B8kUbxzRjsxeKErNUip9vP3ru18pzy8zrTJpvByc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3grLB8gjpaW9vqDpKs7ZayhyJeX5X2o1Tq4SofFSYuYHebDy4d6s58odtEqMRbgwPy7fP84LgJYtwKyqwRAAGo1q",
  "key1": "3rPe2gg4LffTLM7iPZ4ycQrkuqcTCxeLDVqBnfmoDfGpkoBzrX7jSp3Nf8XXT18DCzgvxV1z1NLUmuhhoThcw24Y",
  "key2": "3mLEk3cza7AZ6GTtERcv6qo31DTmwUquExL6Zao8xUzmEfKCdrgdAe1GmtpJb9AcRCb8kXBFJxtRu5Gq9PmvHfqe",
  "key3": "2MJmYjrUW5ZCABV2xDyeaDfUegh39c6Ks8Ukfyn1UvRMvMhce1wqgm9nfHWxKMWLVR4X6rRoNsqZCj3CtWeLZ627",
  "key4": "3q14Tr7Jv6k5iWFewsc7CekYg2eVsgAzpAAAZYuw1LMiHHE3tNxGbL9TJNnBKiTosY3XvztkA3Mc1jGHxb8SP8ij",
  "key5": "aM582F6CXNPLt6EotVJXSEpw7DT3dL9w4i7TKYxrNcD8W7tdMxezZ97crFgzKNjHAb82RRWV2ogkiS4SBWrKKvt",
  "key6": "3STuAbWqSt2P3wkftfN3HZj2ZNj68WgZLKazmsk6GxxDLFyu6ZPKyE2XdVhYwiQJXnqzbwvewtJ8GoHMPmsN8fkQ",
  "key7": "5jDXzdtjLdzecXe5c1RxxrcicGrqUs49rFA45CwjUuDzS9jDimZ62m27C25NMGa4sbG2yTPgLC6MohSbWHrJsKf8",
  "key8": "4AMKoT1D8dC67upg3bc2yGiAkziUDcZjaVEdreXgqc3w8i8AAaa31JYiKUvC3E4NKFsZDz18EVFCMUDWTP8UZYKy",
  "key9": "sReDUVq11EtFB7t26j8prtG6XdFNLjqBNR3fSuBwTtMwxjHdaBoLqA6QqKVAmDzTAw4uEVmds4hN6Vf6awmB96L",
  "key10": "2S5AvVawCPCnyUbwzq6kNiTeMySWHniVZuHRydm55WGmfkLiTsrtBCT72MxUpLGHkDv1W49K2t4xEJnwJZ2pxFom",
  "key11": "2cmGky1FpwzRfJNNheLerYQ9iyDjanUawyPiG5PffnMic7W6eYAoKK9FygVUuuGACcgh5fc5cZEuAbqNhJU7d7QZ",
  "key12": "4ZYqnZG5ZP4FfCVTVnT9fQ71DDiETBJE9c3wgySf653ekwQBZuGRMFNxgkBEQC2DmugnB6beL7A9hcWA6hp8Aj2t",
  "key13": "EhbKS8pS6HYUAYNyhwtQRimix4UEmmnGH9mPyR9Ey6gphcgQFKp3HpzT9b4uEZmzbx7jZ7AjYsaeUb6xcZkyXaZ",
  "key14": "3WS6di97Jzibw5WyNoevUtJ5wDk8tnETkGac6jpQ6WDBRw6BHz7q2x6D8ipCXbvh4AXbQHkzSkcwJprmDmT1CTxE",
  "key15": "3dGwtzpDJd7e6g5iZwsCPcYJishQqhFMXCyW6WPLXPb1v1GpsVdxxCU1z3CkteAMzqyKmUfxVMXuGf6DrfWoKA3D",
  "key16": "2zUUWHjSxFiZRXsXtJjJRmifeRteSqmJ4k7PXixJrW3ZiuTs4E1cU94DLA8Pgee8qL7Rzr1w28iq9XcbWZf6M8wg",
  "key17": "5u35N2hnaUcXBZWQ6mYLSY8afmZeZyKXu5JydPZoN6hezGqZ9irkktAzKhuJgY76bPPAb4En3jxKKNqeZXtJN3Vi",
  "key18": "36f3GkR4BQMMhhUe86tqc54n7ZyQoeLvT2zQFJt7XqiswV3J86yfHX8SLpVQudLZogVpmZaFRVtVfKeZwCKe3Mu6",
  "key19": "XXVaEFs7kGZXka2hKkYH2aFfdrmi2asy6LMKUiUVdSgWxNeFu3mjzu63Eqzb3ejTUfsARkuPV21FvwELFMRvXDg",
  "key20": "VqkSbSj3cHPFxCByP3FssYuUsMkMSHxqEPfAFyrQ94XirHoXDCWqmBfBvtQEMs4173FcFEAu8jW64fWyBoP9PKq",
  "key21": "MiZoG1gz3BErxQ7JixYGKMCVVoSgghuKXrQqeD1jMtf1NJ2wguAB3PXs4PKUyHdKZ3PyjFH3srDCZumuW5NVY1F",
  "key22": "eoKLLH56G4S1anARRBNQ3A7qgVYtkjURnBR28mHLijjbUViMJ9YPN4bMNrneDtDb8cb9R1QR1TLAmELkWx7onFV",
  "key23": "dzLy2RruyFadRY77c8k9Yx5GM3wsUgutDUmzMksmoiKXGF9EsqZYN2JJVbQWKpL9De8Lk4BpUYxGA6PnXZNM1Tn",
  "key24": "57d3K96M5HBAWuE4ujcv22VFhG8tSxFrrtqrXLgRvXQdB2Csot73JcqEspZA4CZiL7ActD7TASdBoY1DEJ6p3idf",
  "key25": "3K5nGHFrcrhBbWyY91UvLbdERhAsvdtgWhrLeCKDwZaBSgmm68f1e6Yfpzx66mctubnQTozfBTPN96JzAQb6ZHFX",
  "key26": "3qwZvZgQxxaNNviaDUkZdHhooX4TFXLfGHXBjArq8RLH3XaktAqS3KgEaNRq6LE1XJ7KWk9Vm518W4eX6VQpHVh7",
  "key27": "p2S9f8ZfizqtiPY7sve65juLZq3m64mFH8mb1PzMa2TMRpNRqqSLof7nSjvYEvm69vEkGFNPEaoTXyxSvUhXyAV",
  "key28": "4xQugTJAYjB2WLD5GMP6H25AMbkvzCc7GaLNjUsNfT5QoHsxC7ZEmd6SYy98hgjcYZemuZcC45YAnSdWcuQMv7Cr",
  "key29": "38aAhnHHFKUh95RHtH2Ap7YoUtB86BZ2e7rZgBLfQnsh4KwHfxjwjmRzKv6qpSZHTLqoZ4ciD77H7bqZsj6pi4jz",
  "key30": "5RGvhuRh8URKCq6hTLs1UkUiHbH3J5ZXnd8riAfipV8gtsVD6yRUpxViJx7LLfT65YezzF8Ycub8gPgijy8BcmNA",
  "key31": "CxNV6LDaL74hcMGHChyb5F8u5ZZspGRUKGfDEbJqU6tpLnp2jrxTeDFqyhGQCoQoFgFNTkJV7cv4ktDstuva8qp",
  "key32": "4Q83CPoaLqcVgcXpUnQ7TFhGYmuxqVPLZUXLGxhhWQAMrMHw4b3NJKiM3yUXqRS8D7F6CaMBuCiMAm2onvQDskhq",
  "key33": "3sYbKs9tUbVTWdhWY7TDyorukdE3WyJC5Zy7HM1bVYDaDtFiLsSex5pLevSuedZghpDtbgUiLEvVwkP4crXz7sDr",
  "key34": "3ZArBa3wjXaWnJKF6tM89myRtjbMEueZhG2fHZrVSs3GEoYzVMVTXDoGtYMFwBaubrQexGKSNMypT4vVmpjzFmy3",
  "key35": "4WKeT2duynsmxY5hjNnpR8jmg19PoiqBcuhTha3fDGhzaqj5Fjv6XfhyZb2zf5wJcGt71z7DjAEMpYwk9CjUMTCA",
  "key36": "4SNCeqq1eJBMj7fkKF6NgmdqPzw9XPLk4ZHcFLL2MqTweakgPuf6abgDC5cYChYmLDdQvUHYYZAju9AXByDNTT8Z",
  "key37": "5FjYaRFEYRW6m3Qw1AUEcuXib6oMwertD8AoFcDfHgTQ87fFLFWngJ3ZPatg43AZuV2tRjy7NE2FPDTSYgNmpnFB",
  "key38": "2D8Wf2FQoGmrwQ9WAwamqWNoSXbVmw7TcFs6dqnWcatRGkbpCD8wr48Kk1k7aSzH9dCHGepnzZYBuG82676PyiD6",
  "key39": "cEqHtDxwK5hf7rCSo29A1iaZBpXosBqNxZnVRmb74o5dqnxyTs7LYv22exD4kMu1a31cfY1vibttuwEH45zNqQo",
  "key40": "2P1r8HmtFPjRtBS5UsDVRgDnGBnj5WhskQ9M8WsVctVCbVquh8vXHcEwoE68GwNCKRXiQMLfXWQJUyvHDMcVM3Bs",
  "key41": "5yLHrbftLi2TRWvp5QWdVz56jXAk4w5L3t45rCJgJUT3wYqm32FubxfRTdQi8MNM3h86znz9HHdk8XZaqaTw7Q7x",
  "key42": "bQjBHLaAJs7P6dZDLYf9MHQm3FBizdpTSWaXmMNT5MFtqSYbjc3N1yFtt3iQhM8eYcvtFaeJjBSfyoWvDMmPV4G",
  "key43": "4FZFztB6qgW7GxPyk1GjKomWJ6m4h1AmPV8bPWVkiDpc2PWHhfYTdP3n4a5vaWs8g65NzT6HxAY2XSWxRfHsj77P",
  "key44": "5gEkAAaznwD2aex7TennA7BmQ55gJYf51MnX9mQ5z7hi5B8GZ36xNbbRxKGbW1TwQqp571cSdbVLVAw6JAw9ZMpw"
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
