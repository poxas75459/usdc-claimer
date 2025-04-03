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
    "4Tvxc772zEhPy62A9ych1232cTqvDpkgMavo4rimgZ9V23ZyPom3H9iDAmyFCHoa6RaSABJi46BxStSkbS74kCYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K9isiDMJkGztsoBMdqeZSL8QXqJHnd2WvVp6tbCYXx5Sk2uGVovfkb54RYemzS2uCLfvmshhVtFNDZMGLqv2fd7",
  "key1": "5PPgcFTd1F7nadRG5k7UpH33DHF4PTdvaug6xGAgwh61MxcY4935L7SZHseiCCH5BA4fuTc9BAwKRAG8GecZGKeZ",
  "key2": "NXWDKCssRQuEjdZ76eF3CQFGKhRhhdQBvtuENK7sXrLc8pQGWNZuhFfJor7KieQna3JenFtadc9n6YMi9BaDkYP",
  "key3": "4HyrsJsQ2eNhMBiN1oiiwvJu1PM4JcKT6H5GeNrPCmdYtinC4pNTEywsMET5iqrj5WseKH94ZGFzVGY36nb7Cb11",
  "key4": "5XiJFSoFkSpnP1ovo2EHdLzKNHUFWctdyB4skbPpJDiDcu81wC9dDYd9VPqMZrAhRR1AhwjMHavZ4XCNCJLSeCDm",
  "key5": "63M7qq9HNazmf7CVvow9NCzicWh2oBXEGf8aUxY8kzcdyrBa9WASNsEvcpWAKdLGY2iBPRKTzUd46paGpj6syqXP",
  "key6": "5F9sKGcs3PTDrgBXjby6piAApKvheAQdJ7DmkC7uCkPeoArpXf6CVD58xHqvJzTPfSmeAkTKaYYySFwD2y724Crn",
  "key7": "GKc1HCi9bhxcVJC5VHQa5YdMddSwrQnDMpudy3y8D5xo9Ja4ZMtAuARuNaiq2DyNNNEM7qhK9SBHfT6rzBgtXwb",
  "key8": "2aaQtmC3K91emxfZT4j9EPw6dyXVgBkgJkHoDotrkgMZDs8xVU77RP6ao4Dfsq1gpEZH9Aymrvq9M7P7AqeCcUvK",
  "key9": "2iF311SYUir4myiSMXWaAkURzeGRZssQu929mADEz2etakfSjgpWFcQeDcjjx6xR9qny4Si5bnSmPjMBv3BYNuYN",
  "key10": "455AfadQ3Lkg7U5tAU1eifjqBufA8xUG7Vjd1qtVPAXd9kQRkrCyPKwAuce53GNJ4Wgh8paS1AaxcMs4GAMDTWyS",
  "key11": "4Zdc8CxN4Rh4rEGWAr4ZbYDJpHUaDSKZTVQdGgyPDQtbmngZoKoHvWCuDbDYDbMzjpnwfswgAX5HqPD6ABKPcW7a",
  "key12": "2qe3fgunm6upcoGtTy6Ypejk33zUmiJTqqTNyMJg9djRkMG75cuESUR776pSuuYN6xTFLHieAv7FkVTaCDUAzTfT",
  "key13": "2GirD8CpjwgmrwWy7rYVef6zfAn3UGjLqdqBR5DcGsPkUnfdisveHUTZa2r3BHCqJouFSoyaKLUm3qfLXgTP1hnW",
  "key14": "33EsoYKfNS11rmzMRwLqBKRWqXQyoTQbnHD6YWaxtJ7Y2RKgvGFDofCGtfS4aoq2g86KEDotGCgXDGmuNRD7NEKR",
  "key15": "4KbzZ8RRE2pAezs69ePSVPtDreKhmVpYBhQ5pj1v75wHQv7Z85t95tCwQAxZsfQdN4sVCwPucR5HFfxdomdzqRxN",
  "key16": "4SCPvhW4M4uzS3pZ1R4WWpQ5y6yR9UGknUFTsstTq2aQLMejEkzy8XvU643ZNWiUeFNuBEn8RdQuzYtaPqpGUy2T",
  "key17": "RwAJfuRRZftzej1eYs56Kw28wkDSvJMp8gTPh27JepJ9PkYn4rK8Uu3yVUrFYjBj2tBPg3yRFwUPGGWHtdf4d9f",
  "key18": "2H4gKCRW6Z9ZtmkjLJEWfkYH4vHSUf1oZAMnPFEMeKtg1ytFKaFM5T4qsqSw1bbgj8YTcgrEg5bCf8biwfbeJvAw",
  "key19": "3SBhHXZLMFV9z7r4X34vM7gh94R43Sx5UMw2VdFXwin3ku6iv9Q62zkwCzeeMpsM3qzcnVvdSVXRdiuE5cMxc5D1",
  "key20": "2o4YJ9kx9u8vQM6BtC5SLURfWChkgWLpjuCx46dAQuBnDwVATkRzwKWnTBSNumr6GL55ZraeUGxfHcCqP63riotd",
  "key21": "5nixgj5CsYKJDGdtgFiNcKXXitBbPqtHNG4RBStuQyULSEQMmmNpDmDhyTVm5BKaNG4v9sfo4N5ATtf6USNjBqH2",
  "key22": "2Ver75BrQjgHAuE5QgdesJR5H3qHZBvCo7TekPkgtm1aKTeeE5FfFNuCZTUHQz7BEMVVS4ohvRDZ76B9bVH8J898",
  "key23": "3AYAHYijDFssNUk1MLMLGNsBRFR2ZsG36vZeFZga44x3h15qsX1FpUfes4bwEwgfN9oDK66tRnuz6ka9jHSv1WDm",
  "key24": "3ztv9tV9obEsxKEw16VFMfyUnP1bQCCeLEGkJ3yakPwakoaGjMTmT5QjGwthJPVxer9ZK3S5kSnbknw6MEYnGEpi",
  "key25": "3TFCuBPysAydUQFUXpryrbbzamM2SeSKtvcfgQu5onkeF4DnLukbbBiPjqovhA8HWhd2dGAT3QKwDVZ4j5jpYyb7",
  "key26": "47x9EGeT7EJq7fPX55isnzuBqNQC7vedNNW5YS76tkZfRT5zTXmqa5mtbYDfTaQrxJJXUuCbPZB2WvRhRC38btWV",
  "key27": "3fg6mSy6U7dh6cjjpq59rUGTiB7snJtmHJQqRC4jBdiGzhz4pLaSitmmC5F2eaxkdepkjcDrFuiWiSdgRuBknKKB",
  "key28": "4fGUjoUwH7KaZWfDQpGuwfabeWcsgswSqT4zQj9CXcKz4QCkTNzFzVm2MTNe4D3HPbb7EAdfzhCYCiZUfKwr5PDW",
  "key29": "3EsJiVgVbQbw9NAiPvhnQVfcr7b3m6vEwD7z4e5NJBGN6bKjQAu2EAFYuTxeVifJ8L9jrBPgnd2T4Q58NbVozjVL",
  "key30": "e2UoP7qSf9NsK2uFAthfPFnCTa5dSmTdDSBZs32sXGPdfgt3SWsPUnc4EBAcip4EMCvj53h5qmdFZ3EJX6BDn7b",
  "key31": "3YTKXq8eZpS1P1DixheMVcnmMN3QJsZd7CxF8BqRhhzjLyS3e48qvQ7XnFdrwkDgo1gtVcWvasWaDAwUP5rD9V3Z",
  "key32": "5iNAYs4FCDB4A7miG14v6JXY7KAuymgJ5pTRdof9ZngBSB6x27hjxgY8gqY9KjPegHZHmk9fAskJcdj75q2PNhWo",
  "key33": "3dMcmWBueHBfpdbqnMRQ6VPfGWvdUJgXkktWYoNmEgRMQbwscKbuUVvKua5gSw6td6SiagnKG58JdcVKXxDumEwR",
  "key34": "4q1XBBL1tZc8NXJXfr2qKfFC4ysUsbQW2zgsCihCa5jaordLbXJj9qj4GsCMycnTLAbJByLFrTB5n9aAVuUEv2aj",
  "key35": "2QJp8geuiSAaps6LM5J3kuC4fVAHSk1DFnLDwatrFgzELS3VTpomBcjPLmXVbDZEzhJnNnHXTM5o7qq5tk21iVBW",
  "key36": "4M1g6LGtF5WzGwoU8qRBjAfncdd4KJVqTKuUF9LPGVY3iBiRB2LAtq2imBsB817PGyYXkyi3Tu6h4b2ZwbXcbjv1",
  "key37": "iXEXPbCT2uGSgyBNMLNoBKeApR9nfptnxCb3CmrhZKVtdPS5vsmf2J9WVZLrG7xLGRr9S3g2b4ktpgCNqo5XALL",
  "key38": "26ZUc1LKA9ASviYxkbU6e8iEMpi5qC9Bzi2eTMUNUn3DkYBAYZ5CkdPFGwep7MEWMYUFpfRG7Gme4EPSV6rWYED7",
  "key39": "36pHXmf2cpvcM5iiHhCv6B8f5BxYRryh29mp5unJtLmGcywdog4VHaLXgJtVFfMnqoD4f3vZvsAJXZgw1SeA1s5a",
  "key40": "25mk6UkSG39MrmZuwUAHwLMJGbEu2qo4SiCtpDmEuGMn9F2u1KZ2C1VKo6wxqqK4A5fSsGC7sWkNWmN7uKhJg2id",
  "key41": "5VyJn5KD92q9YzGxP4yibS4bASnnraDuu8NusW8SAHFhYQjX1sBwKy11HQWczChTs6uBXJpwUo6qpyrioZx5a7N7",
  "key42": "4KpTkazUwKMzCcBcZ6kLwiPHALJGexVsA6Ma1aR1KFDiFu2zVdBVmX1sK7kqu9DBR4ymheYaZ1TrMEEcwdyFwwN7",
  "key43": "4YhqrLZXt3hfjUQg2D8HFAyqMA1jQZWDM1YdzK8QFW4qzPsqs4iw3qakJHj9fWzmsLRD1jsFm7GGScbVeozbyd5s",
  "key44": "MG1XmW8dTesSTk9DHxDjJMKWikbZ7eZZbuaSwRPohuDUSKvLU7VJfBDmZvJwGWuvVtQSRNoBNeKTnJHDu7bkY1o",
  "key45": "384iZAY5xn9PeHyYQYGMuiyBq13aVKuf7RVUrxFApzHRJ8A49JLFn9vpPzjtdVnPXHGXTD2Wd5CiJUK4rNRErfnN",
  "key46": "27FA48iPaoSoj5dEVQN87YqyBBbJ1dRAvi1mRGhtYnn8EFbg95WVz9YNWtidKQhVwGKwtzaLbfgKqT4j7737sbTJ",
  "key47": "BckUG8jPBUcNZopvaE96DCEs3saCXN3gKEyky6tR51HXYard3rFmPAK8aKNBZnAiJ4QVpbeyg8D1j3eFwPxW1Ut"
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
