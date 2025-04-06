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
    "PFyDYkDPb91SCLTYaxjLSAxYaetZYzGaULktGee6dUfsWLW34riEpiFvkpxqRP1UbDrZ3mUy2Z5mvGwCob2A3s7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HA8LxKK8yifWcPFwjSdZZ8oiR2UhzqJ3AzUvVDBvgN2TSiB3GpvxR2kFkH1u51wn9LktiC7Q2mnWmcbMyePX22A",
  "key1": "3YaSFLuriSSDNYuuLsVcMzzxzXrCn3Svv9gDV8ucbDYiezGFsDvHm1j1eAey7y6XbzAbTNQ94ud3ghdjRTVbwnd3",
  "key2": "5Tuj7zrR1Ycu6gBqL4adkdRwa9oAZC4DkZYMeD23i75GXagLujzRdqi6QyZxk7Re1M5WmDZFFwjNFVKSDbSwSakJ",
  "key3": "2qoAGDB3vnX1oyyy2jAnVCJFw2EbjZWXxHMk7tDPN79tPbtyWP12uGGHpydkaeZxpBefre8YSGu8Pn36See49fvo",
  "key4": "4wZ26CGM6QjgV6jv3XyPp324WCyQZbj2qJu8CxB9RJNuuwfG7myrWZExGHc4FzS4iafxxn1o7dVEs6kJqQXB9xZr",
  "key5": "2ri8dKLXf48k25hQY4ArATQAYbYP9tYtmwjiy68bywJWpi5LtY2Y4i4wy6h3FDC9s9kXVaJZLS8pJQtjbh7UvV66",
  "key6": "4HRCcqNMFTm5TK6FPqPKxZM2RevVK6P1thkU98FHKYCzPtzNHpBMpYN6EyXFi3CoqdahHASitzzvL8mcD4iTAaEY",
  "key7": "5owce2fjQvzvcMXrRYks6HUzXeptnG5XS1WGBbxQ9N1rPgqfP3abXytmCv8HrF32vsms5jHuTKH1kNGSDpaXrn4c",
  "key8": "3yzGjsL5KBBnVPFMLumiL92gwvtJxbHUgMW1mywHf8WVSAWT7Zcn8xAmFERLfTaT5n2Y1kpMBkyg7DJs2EnLbUPG",
  "key9": "4Dv8fx2j4HgZUJ4ceU2MSsMrf4yXoNdsWELeNK2TBkhJqVa7xWc5xPbkjAAcQvUFAf3q4owFNhx7YF2xc6wbPmgV",
  "key10": "4p1Re1RgFFfxzkiN8NDrMgriwcca7uo8AJ6zqtbbQZy8A6B8GsKyTeXqYwUL8Rr1WdgVNTFvnJW87BsKfNAB8m2U",
  "key11": "4Zns7qBE3QjqA2GXepUmhUBneZmoKA4FMKRHRCqYni7XQEggZUHVv7d2qzgUniuY3yLetDcZNqtfx1KUAd8yPxCp",
  "key12": "JKJwrWabuaSj7uhZR7XTo6Lu9rhNU82Lz4QmuGpJwgSf8MgxHJ7iWXrYHHtrfn7UdmgYMKMvhfaLYrtpWAiF1hZ",
  "key13": "5V8CpP7yXQtKGeLEcJkEGqg6umYi6bSsbSEtFTxhtyTghXaprS7M3G3Ja8fgL5XuaFVk8ZQxTUYTFXC9BFaMVurY",
  "key14": "3V1cEmZKcctZPK13GweHFgvAdwL6UVm5mqWK19iB8KymnCPh1tAF73V4PqgfrXiumTWEQaQFwERwEr7JnPbdQzpq",
  "key15": "4YRVR31qy6L3gZ3yunwPijegPxLfhAuqo7o7dDnvAg5bdvd69F6LYC62mzH3FEbAwDQVNBjvgKUWibRViS3M7FXp",
  "key16": "62eRGUH7AaF49Z7KBsqsoFj57Cmb6y4QFgn3FxKxqQVXtwWwe8hauLxbCL5KtThzM6KjSHhmTW4hjodV8wA4vPw7",
  "key17": "53QwVELj2LwCBJWVzUbZ4VMeCBYJwGw1VAkY9nqsDRhEhGtrWbAH2tnmAzpexPRzv9YMWajqTKhKUt6Negmhdfx7",
  "key18": "5Y51ev7MruLK77xWtxC5aMwYmykL9heRUhoKj9MukH3mGDUwaYaYXkQDLSJdKTiDRsuJ8qWkypd8Z6To56kJ4Q2s",
  "key19": "52gKXWcFX6SGz4FFj2UrYwXifJQ7eiLDvtaZFbb3DViio2fmzEKiLVidUr5uNAGhrCcDRnG2gdYD33iqZbiWuFjY",
  "key20": "2DzJZcvTFMW7hB3BEZSw9Nxjpyzxh7zsk3eWRdP2ttBrCsSqoRiJWQyx27ztFdvK6CMvcPennay2DXm4bunuXo1T",
  "key21": "3QrAmKyc8qhbGVgwLhD1g9VqSo4HaJJJdV4E2xEUGADwnctYV82WYarwBsRsZFsY5wB1YhHJYf2qFpvf44K1aCW3",
  "key22": "3XHwqnvJjTmS8xffHtZoke2HNiGzduVvfrZALepGChaanBwbgQeLyv1rdrz4Fz7KaVpUPhYJ74umGKWbdGCHaY9t",
  "key23": "2FWFqX6J3w8e3s6r8mxCRTH9TUwdtTrpbvUuLjHTbGxKxSjPVrWB3ZCEjoa2QL7z1RW5WtG6wVoaBs4FsBDp4T7q",
  "key24": "5FitvqT2DdrCbjv3rfcB2evX2RGyDsw37LsByuNi4bgVWhYKvY3w3GVd7KssSXzvrikxytMxDcpwxcf73zQiKbEC",
  "key25": "3jTSTqQEFFtozJ7VCJC88mTxL5vBkSLfQ3BQkcMorNDT8daE4gnfR3c5ZEcftZVq8gVjmorn3o1d7p1r8d3GaSjF",
  "key26": "38cqPJe7k6ZRMcbS2pzWSz8srGjqGUN3aS45TwCKrVUnekky6sygtsWYvFrHh91kbtNy6xPp14wNZ4zP1ethJgeR",
  "key27": "3uMon4GrKeZSo1yTwZatw7CKGiVj2zjMYYXBXJUABVTTPEsShfYa9mbxkxNooiqG1DnVKGyiyeRLPLcuBG9gRkNg",
  "key28": "3VN4poDyuqv7aUkMuffbhQnUZXukrPPZ8nvhRa6W1ECk8Lz2Qgv1ffWV6QRk6bwEabPpEN73emawfqvvoP1AeGGB",
  "key29": "4o7q7hiAPHPvuR83sDdRp51hbsnDZco6ibBEDRvXj3bf48RGkFyu6hPEmZR2QucSSwSnVUx43kN9hXVUytqKf9cg",
  "key30": "487f5WaUnvwFKfFoHYZscGBoM2X4JoE4kNcKY4awRMQaktTd9mF3Qo46aYNE9LsXevvYrvESY4VybijysLED6MZr",
  "key31": "5UED84fdQnVZfCTkTSvo1uFBQ3NJH8MYWCVEztCiijVxivmC5aW7KsRJCFfRcxxTGtd2mVE49WqkFQB6Z4ZnSWbU",
  "key32": "8vGxUYNtznHNQfHiWSdd7HRbfouzRY817GLeWv4wybLP55hFZAVwkyu7s24pUmeXQvsN2SC7CsD7nyNrTpFRRXR",
  "key33": "4CKfQSG3BMDXz5LfFq98qTZJH7fBXeTBhMrFy3DTWsf7VnxfM89UinCDP5Wbgyw6SZQj8otYnJ1HQnKRwveXzZ8R",
  "key34": "43hNkw4BAP4o7uCJ8roMdLkuy6YT4bYWmzTch95hbEae6T2rsWryBL7rMwsdCirELecQ2nEp9K4qpxPjrqZ3ReQk",
  "key35": "3GsHCy6YNxYJ1wXPUg1acovDhjejKERjX36Hz6YdHEVvAnTV1jVDKEEJtZQtvbV4VNf9gmjmpgCAAueUiyjNNR1z",
  "key36": "67oxU4AMR964E5neCPonczXjddopp5VaXHU7YQvCMtsYzmSHRKSSAu2VKuuJyxvrYqYeFb67RXK67NgMXX1ptwJh",
  "key37": "4boxLCRaVCiExM67e1bWoL2YSYAqMBd7Bso37RXLzEVSYAV2KgFrVakvJRBzVk3Ku6XA47FY38PisLnQRgCEyDuv",
  "key38": "JSjy5r6WAEiXxYTCQwHKhEHtp29PfDrBBCKQNcALvE3RrsUqw4v8CbfgmeQVdoMQbpbSnPcmua6SZn5Ecaf6J9t",
  "key39": "4Y9qRxdqmBdcBgduk8TJBG65wvHXRh7V2CymkGj4M5toJkMF4HfX1bvHiDkjwWkK42YqaiEPhLLnqU9UxdYNsDFT",
  "key40": "zGAkLyqN8QqFMUdUqsuXiCZeEhehpmFCQCbMSmg1ZzZhkfXv2cEN5igvmMnZJDLaRnQqUBZ2ZyiTPjKHqt8t6wy",
  "key41": "3t1QhokHsddXdd23nFDahZQ6Jz42FcaGc3aSL5yA5XtSzPSzDpEJwCuWj3PHUU6hnbyqaE47SDWHXUEs4TbHCVj6",
  "key42": "XF6rTieMw9FhqTgpo2sxVQJCpyUeQrAe3wSdxMYEtMYRGk5CVzfj5gAgV3Chh2wChdzcaYYi7jtHUwqbbJiSo52",
  "key43": "3YETqFpgbQ4YcM7aGQQqniYhVJHLMbqh25dwLT6deHjeHoocuXFYHy1JxM3Zr4Cx68VEhpFwjtHNrL6ZsA93evwp",
  "key44": "5NBC81tcbndjTwqrsBNqKHNej7F8Pzjy3DjNAMepbGUemL6KfdSkpY3BSvqnzTFcApFHwBRBSJRgtUju6yPgXQP4",
  "key45": "EspiEAy874tCHEzMurdPWPBZPngkzrXQzcySmbzJGy6JQLd2decmYiNghBe3fPcUXPhRVW6WfT2UabyqVZTQ9pe",
  "key46": "53xGVAbob3zw4G4qyehQySt2LR9g95b5CdkmLVNE2vgQnpwZirga3e4HgT5zLT6DSVUFcS4GueL6oCE2SwVniJA7",
  "key47": "3YRdsNMYprVYcJNubRwQv5rDLyu8JUKdQwHTaKx4tXvKLSkK8mZZYK2CUohPogMZpYCn2cirNMqSxE1VzAzpcNKS",
  "key48": "3WNtHP6GnHT9j7n3dqMYysAwJheUXymiTxzXTVjWmyCHmu82JVj5WM3w8Vz8xJHpEEbWBcPsDcRJvLHMxSvzmVDg"
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
