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
    "3guZZKxZvRwmWBivgQNMEvXDEGJCtRWnN2Eaqa9qRiPj9Q6ECwV5ph3JXDw83aYAqdZTgi8jDb1mJoV4Gz2UYc8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AdBinZqoaqqeNX9iU9LzRpcanDgoK7HVoF1erJQjWTbiULDLvg1oZpyry66ofKMugiHsarf8fxUsaCN2AyDBELB",
  "key1": "4dMv7LyQ9Lhdbwzw4F4xma6WrBdhVRX2S4JhY9xLzj2CDrRoqT4ykNrvLw8t63VHne2WT6ZiVKFYjM4qpmyi1uZs",
  "key2": "1kHwLTq9B2fW44EhLvt6XUdPr75o8S2SDnCCjU2KoGhma1C831CzMgQQfGvQeofnmsALLDABfP31se165okbYsu",
  "key3": "4pBj6W7nFzLmtoHi2VVU9REVMwZivRCUKL3FY6tuDtRVFBTEpgrfM2nCSHEvKw4uDe1raKSLgt4V42FyYxNWDGTX",
  "key4": "3gEMk5JquxyWifSBZN7npWpkmE6dA8zCDTarsiHYBsdJx7o2BRz4muD7MpmGZWsTMDSixUL54KnWSDvxnkFv8ssd",
  "key5": "4XNEWFJ3HwTvu9AMNPtSGEihvkzgYrtA3WsyA6pBDcn2m4UqmVrWHqATJvXsCZLP8W4PJ8VgkdKPJ21Gy3tFaXLL",
  "key6": "vGLRNarAkwRXHkCNGTLr1yNQNJWpasMs5z4Ui5vVi23mh4GxrNa61bof2u29JwCfWgCDpBstvqdP9xKwToyNFak",
  "key7": "4kphGuTxzzp5NQNAYn62agdaqi2b1gEZg4Y9NmZu4uvdE7F2KGns1uFdMjZnZNoMSSYgC58B9qfqbnfbHjZBmiv4",
  "key8": "3JKyNfu4nGLVe52ZHbmMVmw8vvLRyww1CS79oR9RnsDMKTa74kTBMVMt3ucB4zSnsAy5kPJkwC2kSTxxiWgmKMLb",
  "key9": "3o3oBGxorz3esTttnxGLjP4Q17hrq7n3dG3ioMWVfySLEGMoTCHNxxEatAEdJk136Te4RKFaZWgQMUHs89W38Tqu",
  "key10": "4MA3AhQ2eDUFzutrS63igv7F62enE66tMKyyUPVLwGAaZDc5jnAQW8mfBUxFPDEigCT66BvRj8Vd1oggQMXXDckz",
  "key11": "4Z7JchizjpWFLAigaYoV5xyeLQYCM9ykBUCcZHGp7nEqaWnz8uKbvrxVaAqou31RDmc8AtCivfpkCVsV2SFstBJq",
  "key12": "kqV4RHvfWwHEpeQmrq4pKkPcwtxFWJL6aCXmuQZX898CW91qjFZe28Ua4iFm8PFvaLFQLsVaX2bwAMRMNSKJu8j",
  "key13": "3ZSJMNQgMvHJfUB2AKVf3HFk1GmZderLFk5yyctR8FaFm3HgeZ4z6NaKQdcfPcp4tevfJWRcv2JgDjuTGhy3nRE2",
  "key14": "2WztBGxxjAEqKaGBmnofqZ6AgkTqkkFMQwxorsM25mNsf42x3c2E1MQJQkxDYK9Vv1Ys12sDmvxT6Gf4Csq6Z4cZ",
  "key15": "3JJi89xoYsp8JLniEHtLsHvGK1QWAnvK1exTECPWqDaXamTnWv8HWrpveoPZm65f6YBd5DPCQ1sUvcP7oKt8ZGnH",
  "key16": "66oFLWs5GdMxA1dwvpiWz2cQvf1QfdvVUYrC5n9rUMDsxhshZSeWaQqRYbbiokMn4GDADxdnSbfDETfdMFWVUv2i",
  "key17": "5u273cmGZ2Z7mku3LmzgCzsLyMrEXJ5QdVXcFFd8Q3uZ5RVrnX6XeRwKc5QVuM684CpPetmvH2HauxdFxyxXYHB9",
  "key18": "A375kgRaczGivBu8ZftuFajVhFFpNunUJYfbwWXZT5zjP4LPDhBurhUz9S9Xxz71MTKeN6Fpi7rM9RdXge4VbFC",
  "key19": "377jU2LjGBVni3yTgQ4ZkGwwYn9p8eyHCSC1muKUoNGSjPuvkdQn4V1CBcT3JAaJWgSaVG881TAFhzSa8zivWXU6",
  "key20": "2nSd6VBkVwy1e64KjvbAE9idMBvypDRo762Usgtvjt6FBoZfZVCfhpSgJxaqD66oWqkEh4PnCbwqRjePMh9dx12J",
  "key21": "2D4beWvQpuMvS5JMYLUzxM1fSbVGgQhUxGw31o2jGmQZqRJEPA1v2xuWwyhw3RM9NRJLdXy71b3nqWJtXKVPAL98",
  "key22": "5tQeDPaeEDa61X3LmbgDJjbUQNMwsi6EZuvTJqoQHmyaRrq8qmUcpubQa1u8Qw5nUx9NgP4CLRZzSTB8eRYA5GZa",
  "key23": "5yoMEg7JQ2HWpUqP8J2pyF5SBDcmo2LB39kZQEH7UUisHFSWHsSXMD491rnLgEQQvhNqqTfqYFHSHMATzZYWSEhU",
  "key24": "5KXgR4iQXoaAYgXYGXsp6KNwkmVjJhk1QxSAy8TBUZEk7ktVg3bPbVQpXHZ4cd9T56HAF1NNSDuSE8UtaBkH2Kjj",
  "key25": "AwSmdHZ7jxCRsdJ6y5JpqHTCPjNYRcUR9xEmg5haNDLLjTH3M1YATnJtLnArag8rpqLaWYhJ13uiTZYp6TxcMwH",
  "key26": "3w51CRFNPXAD5mvWz8eY39NsGVmXZH27jkmv3DJNMRYy53CnnUyfrn4Y37aNJswsUgBBfVA1d5UNjzfAtee26FLH",
  "key27": "2ubmyE4RwhtB1NsFBxe9txsxpm7KATNxwp3WrK83omcXUpTbSShhtMjJLqcoMt3v7jzZkhDBdwE64kXPfcTCF7b6",
  "key28": "2rXaD9vzgzkk6CFeAtc8VBnoiTUHG4ixvMZoN5kq9LwGngvmYnndfDH139yHot9gPqiw4bAzoifTw4szuLq2Db6i",
  "key29": "XMQWVeQ5NwGvYdtp9aJ6UAjgpjEqYfLtAa6hcE4xspZAskH2rk4srnNPG7hdkBAi2T7Hvrq3yCEofsy1MmZVcqz",
  "key30": "5LDpPgDk2KeZJgG3gkrioiQs8QUVprZXYrQ4uAmCQSP58nM4H6T75FsnhkyGR5S1Cx9kzVEjXaoBDPown61SAnfD",
  "key31": "MD5jr84LZgvKf6SG2xcRw84d9cbAw9z6rDxXTSXfaMGv5yUdVAQwWHenGkL7cHcfe9F2LBegxRnpFUUQ22wqJdW",
  "key32": "2yR5mqtT1ifabDwM73iHtqpmrq1qRtH9ZYMibB1hQsFntaTw7TMMRSrBcMeZMyXyomcuUktk8N2btxamzr174zWk",
  "key33": "aLCqANKJ9RS8JGvd7x2czQ6FRPvL67ixGwhCZK2vtTqLuUSj9y89e3PeQ2bjpGqz2ziCxZk1iLYxGbNPAKYsvcm",
  "key34": "4WAerE1h8jZa7Zx9QzEUvXcPnUpGi1eaHx3rzbXZic8aFNjmbsmZaEFgT6nGuiaAHZBQWdZ2m8KWfzs2gseqUe7z",
  "key35": "245mgeRLZAVujos3YPvu9P5wiwCHzuThrMcBgPL2Hs5jfUHAgukVUMywmMrhzAAXPMjoRDdPycZUdjP7DViT5yLk",
  "key36": "wSsWshSxbYSeNJUjeq5PyDKgZ92qwpRPwzkG4pWXcDKeLT462B7djoJuiwF82bLfSc8repwxh49EBHYcfjxkVdF",
  "key37": "2GPLzpCxRP7qJcKXupsRrRmR3HvyvuUD4aTWXVVhKeGXiWkAzK14r1ZwiKj3JG28EyswFUBPeHrSekZRsrdDtZjG",
  "key38": "62WAuJKed5kt5CBrdf75wRAFnww5aLB3NnxK84U49MqAGG8u5vQEj2aKbaXqwGB2XBJr9xysk38xq5HhcgSCLPa",
  "key39": "3jfD6c83NAeaxk88gp8GYQk9e6VTf1r457ULEtQt7kE8wsbJ643PfmDJbb5J3FXW575WVCnixaJw7v5SkJZRqXkR",
  "key40": "2T6VyAEon1ztZoxJ9c8aehiWbDVxQGAQbLAzmjPR1VzQ6WDhyaiXo4By3Fgbd4KWWg5yZFPBC1eDmgUDjC4Z4jnE",
  "key41": "2f47wV2aUHQTwjHaPbixCMp2VXADAymXRiEYmXpZWk4oJtRytjYGUcpbuEUdTDiYvQ2mJ4gAxCf1p8TTaozJ3CmY",
  "key42": "4wrSkS7Gwa7T9YS6LZwNEh6UiEGyAybdKW2AsEr6kPGEgP9XaKXvC6vUb1RNkg2VS4g6cjnnyJqS7BM8wc12TK87",
  "key43": "78v7j3uiYYHVtR1q1fJYhZZ12ZxnSUw5WWgs1RL5pNTBLgHbXeW7FJig7eRpse3AQTxf3BMtPBB6VHWerMdAar6",
  "key44": "2AW8pWBVnTN1qCMkjiGY63a9HptuEzmZ4n64LN8jQmpgiNkdGo77mg3tpN2Mfi6Au6WnzFok83WLwTEktB1BDsim",
  "key45": "4KJV9ogvh5xX64MWFriNU2mRaGE4UKJsHWe4RUqtkNz9uX6Yep2Nv8gCfei6feZJxtZQMmmitzjg5Jin2hRTQhWX",
  "key46": "qAjT8jsRZ5t3cVLmocSKKd4T6uS1oL1u983AY9Xg6vvrDVEHDLWbYqndBgR5TGM8cP1zXyYNosxR652nieNQn1E",
  "key47": "5hYfYhi8pEcccXAL5eY626eXYXLwbdNx5SV1DzGVdMvUpyJg7jMJpXkj6heyWvXEyieyRJYuinQyp5gGK5QYkNtx",
  "key48": "4Dq9ai6jjXagJMJhMjb4Ff4zp4f4ocJCYKD6AiNWuyJcLYpg5XQbmFypJ6yJmcjw6k7NeihaTtBjqCcF9Vixy8ZG",
  "key49": "m3EHwt5jeuPhqzvzD3pJq4FdJpAApm2oeoWbPNbhsLSvHo46NcPoiCnwic3MY5Fz967uLoSWDVf5EFetDPbKY93"
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
