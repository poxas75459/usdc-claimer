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
    "2JLRvDUucPzbXxiBNtFv2YnBvyP9oBUN8mi6oTiSZEPcv86cKKL2QpBfVmEdi9pSxA5zGQoyd3eGgyCxubLG1MFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vtLwv1y8T9aa3nb5mkpiwXcsKaUVbZa8a9TF4PgVuiuTBhyxHyVsouFBV2rXJ95oHodHB4YFXMUruSDTLUnQnhL",
  "key1": "2mpf32UA4zLNLJzmbg4qCMfm9pi8YWckQDFGbxi1NqefNF6hebk7xyfHqq7aEghFJ22E8kXQLqNmcZ7oEZoALo11",
  "key2": "3NmiG6HEg4vXe6y7m1ynaNX4A4UoRkrf9QaXzRUwr2p4MEp2nLaEjXr1tAtGAKgYimDi3qVwK4dGG7oa4unEWVqn",
  "key3": "43jskFhYwTyzs4hjV2MgNfxpuBE43c4aRnX9qGhf2a23PT1JNCdPGCR3zjptD2n2zszA5TT977UMiHSdBMfmoMEp",
  "key4": "5wV7769MixXcnXPRAe4bQDHQkuhxpeR8Gpai9Y3G3i1vXFqzPdDMvVJ6645cgbAVkkhHYGRd18uv3w4dcMgaSdEY",
  "key5": "5ZDUgS4oEcSXDz1pQysM4ynHNHDTU7ipnG7eU1i7CxhVZ6GznG2xwDw9iwGK6TXZvB1rtisZn7yAXza9LvKTGDEX",
  "key6": "2dAQr9Mm5sLESbLsenZTDE2x5LRJFwRJk833Rqvq641A8MvvGc2TFZWK7y1gScxs3GfAb9whuitHSdnpmuA72dj3",
  "key7": "3MihJfwyE8VkAd7tCB5rPPM5LZ3LqZLKCaHQ4yTFASNA4j9ymn3ANC3jo1WToAdK2mmjtWW8jGVcNTdk3jn1oD1A",
  "key8": "5Za34b6VGpWeVYpho4i282yJ3hokVbX3Ny6WqDq6SdXvQfA7FBNuMSG2VLSiP1BM8woZiDgxQmyzZj7NdAVhiMz3",
  "key9": "3xuSDoUrg5MhKwNagVAyCcsrVSsGnunJf8DntUFcrE5HKF3jYgKteaEFDfmvDCqbyHoDwgLmSLSAVKNa7tumNtJ9",
  "key10": "36A9eeLn7vesMkgj9SBqcHTHGEvZbz5WZbvhLXHwk2RumnY6owM6d9TA8cY5sEKPE8QtGQ7eKnRVSxmGboJfaMez",
  "key11": "8sV5Mu5c6gzdzozULMnAAAWnaoCNeVEGzSoyKNHvavkj6bRrA5iQeF4t3bNF2CWRKcGriHcyyhSWiwZMWeHyVX1",
  "key12": "3A1RHbC5wSKYrijgdA7NBrqAAF5cUHZz1T7YGPGJYKX7d7EbsUe6kpauEKSxbo687nErN32jwa8aDiHVWtrKuCXX",
  "key13": "m8a2iVJQ3rv9ykDpqSnbDnhz7NewrLWpaTb5gEAbetbc8ZbzyW146t1H5UwQPsZRgbV3t9gmcrpuQjM3j25sv3b",
  "key14": "4k392ac86Tg92XdMTZKcUjAAS2tJqG5qSh3faFbU7KRhqtshaKmyDcFxkzEWeQEM46k17pMwGESrdg5xVAaMi8DA",
  "key15": "35aDaMos9VX2hrYCW77PPvCHwX4arR8hSoWxFwYb9HLVLB8nXzFvNcrErwWH69EwZHabk7gRhjRNBNJy4BahQQj7",
  "key16": "3JmD1X1HyVjSZjwiQ5hdjLfC2Jcp3YgnHTBdh9gC3aahLyu52JRMKtbDX7W33JWfAY1GgNCyVEFEaAJJ4C3W9wEB",
  "key17": "2D1XZtpnnF4XUKARx9qWCFaAM3DMTjScePAYE1bBYAeDXXoGBfgK8enNDuP736J8togCXUdqvu8jX2jXo6QEFrWa",
  "key18": "2noekcnjHtH8h8Q5k5AaQca53gHHNXqEc2VxtWJQESd9ZMvFdz5uXLPQt8r8ehj41NV5TEYpTp87cy2Zsp3TAear",
  "key19": "4vcZkY1fmhWSGX6jcAsodYwMbzt9BB3EVyZBeM3g2eou9pg7UjzYAS77L3q9YKfkJXq132pDuVihRH39TJrjoBpB",
  "key20": "62EJMzMCMgXEHkh2zLhrWSrB7XJy34pFakMqz4qUdU3fW6YNV3AFtEBEFVqsh3UaBSY8MYdGBZ5CJgwYWevapxSj",
  "key21": "4R4VYw2dWVoHjBnYfUViQoiD3XaXXYfvSnReURwpDsQyyijrYfY3bayGxaDazm5yWMdd51yRmfLvYJxfQcHvFzKp",
  "key22": "31Hqy3VM4jFm3GrwVN5d2PKb9Pwe1D89vfkartPqzDwpcpTWhjVKoLP4H7oG3WgmhUx6u9FtKo1VvRJquBm357iy",
  "key23": "zSYZfp2rzftmWpPWBSkf4VvH59vKWddBr5qouWExZ94HCni9rnETm2w6ESNXqjWoxRU9nAEgr4YVyiDbG8mmdqY",
  "key24": "48DgEdmZh9YfDi2qGasARs7oXvtf21u2wK876h9Maafha8asr9sziUrVGaiWDcGNSyad734PwGd22npkNi41AiSH",
  "key25": "66fwz6qGE29HxzYpSPK2VEnSZzE32NWjLfhwSpLuHtupRZZMLQuwdQzcdkPdgMgNq2XoJ7tsPWW3XX1nRgUYjjBw",
  "key26": "3o56cfTohbNbXxTEuZAFMmnkSNB2AGqZ8mCa3YrTytSv86jdTJBqfcAbNoYZij3zJ4BGLa3asWTAuipWuxLbTv63",
  "key27": "2ouR9fLBxk284yw2Wih8RCQ54j9bpnXkTjMQbzk6NEW1iR5AcBE9ERGjPSGvw6eFm6gX33UWgMnK5QbupzLr7VVp",
  "key28": "2SPp9672vGCrqigwwz2cBZBeR3U415agspsKFh5s54qzKN4gZGrBYTi17D5GcAAcMbnHyny9ZLG8syKgHLoLakVv",
  "key29": "3qVEUoLWKxzmCfyRC8sDiEF52v15RFBtJVpPyPerE26qJsxscAmjRQ2Gk5jt5ATg47rnPmjpDSQiavV5Dez11UDm",
  "key30": "Eafr53KV6cFKcMSMxdCNMCnh2TnY6MpWiBp8S3U73APNzwFyLUDhUYgyodnXqxgaKwjR78Qz8SWJUd4CMcoJiKv",
  "key31": "LazRe5aJb7z2JL753rRPbaQhvruK7qWUPsEnWYjWUCrRZAZjX8rGypTk1q5cRAWcihjURkV8eof1S3PMankr2f1",
  "key32": "4eR2Qjb5VbFVpMsEHMdR5EqrVXZEzBNVdCK7tWoLgE8PMkycgAs1u6j6mmz3HqQT1ZAmXrE9MD4R8eLmJ8URfi3g",
  "key33": "DnyaTwKZs1GniXoJkuu26vsyzjpEYY7Ljp2ftwbgsZLVE18D5j25KQqMWnUL6PbJParSvcKWgTKkMXojbAyN3je",
  "key34": "34V1P1FEnphzC1fMHPwUvN7iSeCF6YuZPSzMKzfpG5B6M6PFMA6Rqn4VfEm7h4GCj38kwfoZzSZCFthGmPrsXSMH",
  "key35": "4gM3TBysNEaJW5Ty5DCxH8FLSXLfZSojSkYVq4oh5jD67NQ7inNNqt17jDHSwwJm23TDszGhbyC4rJ7z4T6UxZA1",
  "key36": "65NVFJucYwU8DsMopu3uZweSMKsJxx9dS9QbmFyBQMzyWY3GsJv4GuFgSpMgw8X91s2fm1anvjCQhzHFkbbTx5iQ",
  "key37": "2GijNCD5sTjEMbYhTifPxruv2JsyFwMKj6LUYrgcRkG288VCUQu6TTSWMRD6Ht4BuHkSvM9sMhwd6esgfjHPNL7k",
  "key38": "5AG9wfpzV5VF8qEUjtLMqMjZKNKfGk8rx9CwbNTj2R7bR2P4RNnWZBVY89hSJiDx8DJPHH4J7D762H1eSbW62HDq",
  "key39": "5R5JsC9fDoCfSyP6uYkfPenVf3YacZZvehbEScTfKT6a3CEqH481HCDXADPbUrQ1qSewSf4p4Au4CyxqgL3msd83",
  "key40": "HVq7NBJiCz2o3FM2sz1zQpksrZxET9nkjCvqcHktRbPMaEPo44dy2NBJdmTXzoPozm87pGBgDy5SZDg53NE4d7m",
  "key41": "4pMstLwXuRg1JYCxTUj1ugtAymjeYb5rya79G1CkqQizepHXjb3vSx8WtxPFvWbPnoha8G8R3et9yFBr3muKtjGr",
  "key42": "438J7BSsV9ebXYDNSjNcHQmD4Yf7Wp2A6jszPxJPht9EFDSe8T2z6WaLTWRm3yJZsCj8UsGNxWAVwRy62J5EtQQU",
  "key43": "3bzW4t7C4tLFZw2VUn6dm4brSmMDBJQfbRR1bc1cBkfr6eBkXKgQWLThv2P6dwqTDJB3HT6HQW6TwTAJp8uFNb7h",
  "key44": "2V7y5ozeXLK2b3MnPpFMaZmPYvveftPK4c86Veo472m9TRUvKd75dobAhKtq7sLKon8qvkGf7LWSJrCRPLnE7No6"
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
