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
    "3oXwWEnDTveRk2AQAbDP8WyPByZ2XFDcDeV7bBHozLuEJYf9ZLdEbCDkYy9cTD13batubA7dLbbmFNCkZB8qmsh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PqZaHstPY3YUEkBAzcUM96v32tGnS3DeiEjSg4KTcJ6JgNqpwCK9NtvDb5XzTT4EVEzvDhStR3frCFCeaE3bPre",
  "key1": "5pJ624owGsyeVDJy4RFT38zgu4C9qoLdQmScexkMP4V8YMoEX9Mn2ES1btSdKq2FW2LQQtztyYVJX6soiSsWchfj",
  "key2": "4pPYh1s4v63oyMGo8woQ24oCh9wpZfeVqr9gAvkbPMbQaQTC3CM6mAX1FEAMrz8MeCJsuPrfYXGSKoxFY1totmeq",
  "key3": "2XXcLPWHyLHZKxUrP9MhGN1McsGMtWbyqGN1hWifiVHVW8wdWmy7NX72R5WFq5nQMuhFKG6tQbWXi59fp6d7185P",
  "key4": "LPTDwuw5Yj4t92unzszQKXUj2FitcHmdDaPvtrJJrWCML9C7iinDmRN3SnBtchpxTr8LzxD5D9Df6cGeAn2R5rR",
  "key5": "MEi1qQMD43LfPGwrVFHxAKW2dbeKURg8zxPMtEReUfPuAN2TDxgb3PM8TQXL6XBpGdUPrKySwLByfKQww7gRAYD",
  "key6": "4LYRk5thg6AYkvYRtMhAX5p9q4nW3Djss3Qq7QYDYUm48J1nepJy675PJWxZd4giE1BnD4HPdVFn3wXEQ72C2q4S",
  "key7": "2tKuiDSYTc3qP9GCztRZmJxerJa1euDtheqpj3UDSRP1VVTdfv4QRLcLiyst9iUEuueHZvH47EyKKfqGxqASSKs3",
  "key8": "383NseRm1VPQFtvTn6E5g1H3yuERnTvwMrJ8GUULGKWg3HoptX4BnB4AZkRpwvUE5cGGtxNeFAD8SQv3RgkrRJkh",
  "key9": "31vdwyg594F6A3852KCJApTLN2BQGRmS2oPswpVgKR74wSThcboYtxB8znT51vo8C8qEZ55BK5CGUEn7snnGNLDW",
  "key10": "2F9qbUUAoGfWnfA4CyRmcMu9YGn3A2bAEzyQGLjobQZxRwFfwPwqGRGrMstyemCF5qCyQWEaQSPaBSEYLuihnMuk",
  "key11": "2UCv2FnZULTHoFuxYyTkfGEcsAmQknKu3HfdXUE86hSQPEaEVq7oV24bGwDgMxoANUjnvQHBvM7v26gYJc5pZEJX",
  "key12": "2JcG7fzCXrtUyaxehmy6wb9ZMZ5dBt88PqEuKXZ2pViE71UDVLVADKWV2S5UEeMCwhfDFi2GRsVzCBNFJpqZnnfJ",
  "key13": "3iW1eEHF9CCT8gQ2RcjmaS6gRSYPEiwMbCEgddmy6nyEb3x1rwJms3fep8vDwgn352hmT4QTNy8fcc2UeJSPC6W5",
  "key14": "5ACkVuTjFqc8Z2RyM84k87BFu2kabbN6S4esm3ai4X3CnN6K26aLJkka7JjZrE1Kp1wNNJyNYqM4Bk1xa2ae3Xob",
  "key15": "3Y8gQkeKrGF3Ua3wxKS7n4ZefqZrYgng8SuW4cKMaYjK97AAHkbM4MzxW1x8DTfNDv9j6eRmXcUbCHLNi64pVaXL",
  "key16": "TyKhj4Zen8LZWfaoHgijwXz7MVQ2fDWvyqdJL1171vjzZnFV37DsBaeLh1NicB7y5BuzUDyHL6jM5gZdMizM7EA",
  "key17": "4rF1suJjaVWUUUQAjELa9HwWmUSJ4N6fD7hDAkdcJRVfWPJWVLBudUjtZUTn5zr4EK9ZjvvBdBvRTWQSwsSwqTsK",
  "key18": "2AZT42sgAyTB757uHCrn7jjL7fQCbaq9BGtkaKGbzr6HGmi4B3Ne88oybPi29VeGH6swmiHXRU6vfnF41XCVT85v",
  "key19": "5NvT232qmQHTYdUp4jaRnrW9M7w9tqbHhQxAxfhzdMqq8FyMToGwh4iwJ2xA9dSPJG7s4HnUKoPfLn4ips2az92r",
  "key20": "5uGDpQaoFLbbDATEovbB6bvgcETG5waEB1v2CUKVZTQcNjaVi2dyCK6MEWQ3Z2VK1HK8SkXpkQ6RsMFaoMRpmXBg",
  "key21": "4VmeBLgwmLJZU6YjiFUYXDLUbrryh7HduNf9ih66Nk3SAgxRYyTwcYRoCFd4SnqDxBjc1LULUzYF2fq5PFjaA7Ht",
  "key22": "5DBXu2PSyk4srkH8rahLWjtCKJnkpvgx21zifyEBhgbBHsgcETSrfXB2S6mHYeg5mCaHrwTFWUUKL9Jfx32y5nx1",
  "key23": "2TpvbSyrnRvSGouW48aciCCgxtcNoYbkFHjJRyV7ZoBGvEWesMgdNZ2TmPnrJoWK2TghCPNGw3KKxFWSkLT5eLND",
  "key24": "KxpNrQTPNrCBcTKomA7pkU1iWYqmCmKkAhZPNnYecikhmMqGE3LFWMixrwqQPyToiyWqhVASdHxhWgEAmyoyC9J",
  "key25": "4PTfkv28JVn6fMMJuG7eHZkNJmanZNe3bTjhCMdJ34AE3nLbwdmt9oPmfZE7B73UupBfGYyiwQFSZSqCa11Azsvj",
  "key26": "3wnsEnCc5PUPLAGWN4yoArPfCsA21L6S8dguqmGhD4sTks1xtcgrZ7ivPWjzsPKFcnem6mGdn7Dfov8oqp1BQaqB",
  "key27": "4FjPsmJFFAyH5Pj8HvZts69kcnhmSM7WkjUvhyvmSjQ7zoHuiranHoQYP76N6FbTqPdcX75s8GtGT2UF4rQLcmfp",
  "key28": "5kkrKs1EKkUEmnmwkjw3PBTtVPdY7Rpoz9hKKfaNb8Uaos1MwoyDsYiAJtNxo29yJ4v8eBCHhMgGZYBGwrRGP54E",
  "key29": "4327fDb7edBboZCZbXMtbEN1VqyDkXDkz1xqkLYw7mdWFRaGdgAdhJKcfWVRvvo9AQhJDAXLadq5mk3VoGbsxD6H",
  "key30": "45z2TiBXqfjDhd8hC8D22TEukkrmEckQETJgPvudvWCNXqdAU3kwSCLikLvWjSf7AUE627jrqwrES8nrbCicX2wa",
  "key31": "5XGS6ZrzfVTKmSXpiFQYCrvCVUNW88FtjdoyRPdiRoBMH1nd1rhQrJWJQeKSHw7VxvU1unsJwZYdL47A1tXoWRvT",
  "key32": "5gTSjud77HwwuBHw2DCJL7S6FatFB5bE1Mzx9PNQHY6EkNYBJt4w6biBQ3nYsizDYv6JDvJbMaV6z8Tpxd3YDozL",
  "key33": "4zzDyX8xShPZmJpxBnaEBQLnT4zPVik3GhaUifVYy36eK14znL8MXfCKa9FzniPPxyxfm5LStb1NjkDCRE4suQnz",
  "key34": "3tiy5PCu98Ku4qEJqrhreF9uWZH3kbagLVgLwyX8PLjrvK2vUS6FLL3ys4sBspB1Mx1xMFfdvEWrxWmFvuZvnmFL",
  "key35": "3eCdARk9jYZGVYWKqNrwbYiCr67zfwrBEMbQZzL4XrEqYTDqozqSWMZJ74thNXRKDEbeo1Wxve8vK6iwBfQRjgN6",
  "key36": "2KY522xQcB1wDmivDZ2ppcuxyq4ps8EMYm7WdSfx3LyyJLX8J7ziaM7qqmsXVMoUPT8MsxZAgf9uJ899ubyE7GZR",
  "key37": "2GgJj2pm1ERTtaeu32NFrYqZhBcq1NAeUonTd5zykF7tm8EKpszyTAC2yEsGMxsrDofcQYHWDvtMFXoKebLWaEUi",
  "key38": "32cTo3ewRGk6B2pHfacjC1esAacwr1YFFKC82nydHeoP3HFtoNinqXLmNjY5fjmTFE2fgKzSvu4d5ExQYAkc1wpq",
  "key39": "3c3vAUwrDKcDBAY1qXVKa5UEJ4P7irKgZKLnL8XBPvH9MafbVfSzJPHHFtq4znkHvjWynoHJX2XEBQDho1Z1t3HP",
  "key40": "51ugUbun1iHHwGENBwjtevHLffFU5ktvhDb1Mi7VkGmvbkD3anEJbK6FbNhERey6e3wYvW5oQmTQeCndZVf2YauF",
  "key41": "2D3ytZMEhzd5JwJyzh1hyEr6ygDtEnZGE6epXnJNpPoBZ4XPCBMLeYg5B3Xsiopp1fnahQnbBCioGtREtnNpXdp6",
  "key42": "3978CU7vtewKC4VLfezJZ82tA6qF8PgQAJiFG2UUicdPLeAuehqSyjS3S6pCMipjfsVVHAgopHkQG5fsSBD6TbRk",
  "key43": "66CoGj2SUafeENcywmFbA5sHJgMvdmtR8hfaYQtcE1PCH644jeGoxdPBTtzdnGCv4JSVGvY3BckU1j71fWVVvnr",
  "key44": "48hgrhJEHX8Gr4m8e1Ed56RJNvZn4oNrHjtAK8PcbENWk4Bn15NM6KeFGTtxs8VNf5Bh8RMXkjhmKXF3nYePWSYL",
  "key45": "3LtsjkSyYwHC2d6gkxYTQrUxHZA32qrtE3huJtGJwzK4tGi5FV1zBaqncjxXtUSBKH7mbGA4AJtAsMTrEVDrrysc",
  "key46": "63jo9cWoNcYo1uoymATyvQwXM5drbZEjjJCDmUQZgsHPveyxor4ms92gJsgzXUnUo6QXkp1osBqekanHhEHsV5Hk",
  "key47": "2WUtLeoCMYC9FTAH4MUFsLGSJRgr4cKX1RVuf5JUW2vR8fqJJZ2Yay4sRgtbxEyGbQ3RjkU455HJXCx87ZSR4JsT",
  "key48": "3rUQpo95KjqyJiV4JWHRsYNXCpWnUSnSu4dgtMg56PKBCTzunj48kornX7gNteB4rCwZUEfQzePVLHnWLPcWubY4",
  "key49": "5hLgzC2cTNRvG3LwovrMKBCn72nsMpEXXS6uo7YXno7SW1aR2SfwURvTz4XmH7AqumNTMGzM4Nv9CnLXNjz8B3hD"
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
