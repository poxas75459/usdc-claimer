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
    "66M7si4hNXqbHYpwPTAAWbCv7EqxJA4Fd7N95sH2yLEKtmo58MTEVgybFWpTXX6CNJYFCu2uT7mezcVT8JqjDkck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3baeNNQXM4ie6oz7QXUx29sANG7JGE3UdXMeppy5TK339gnZgZ4p6WRDosBNcxQsweXQiQovUTSYiJm9uN21wREB",
  "key1": "3ACnFoRTbkK85svncopww1hCytiweL6BxFK9Udqk1EFdrX1YNNsaGJ2aw4Na5xZMLEPyWLr6HPJfhbenWVrYwray",
  "key2": "4ZMAPkGLWt9ipZ6mw5mqL4kjrHeqdv6ritDTaRPDi9x1Dj5WCL63B7bpmRQzsTrNiQMnk7vcHJq7VUmJUotwHquL",
  "key3": "29tPTz88664QXtd8VzDUGuYBMn7bkttJg1pasZYEHJ6nZ78qMubXnesL3V7z6ziYqALQeoU3Ayv9esCKsYPum1N7",
  "key4": "3BvrGiJUdjW1PV5pxk48v36tR3Vgne3vY4J55HyghEkSwSZ5Y6u6MvHcLaTwebWyKs9PRctxTMsMPG9DZ7sguMXj",
  "key5": "2Vy57Sw8FxnXs15fThfoc4PrzQAEXUufWperaVfhGnv8ZpLzvzxKwnhdJnBkYtwseGzVSfiDxsvJfH8Ywd4x4bZq",
  "key6": "4LuetrkY1N2iziVDFMXXMTiQXbjmXg5cQEauKiuiMEJVfxEHhYXeqANVWUVvBTnvtfgDkinJG3mCP9EUbvW8Ym9G",
  "key7": "5ijr6q92jLE4nq4W83o9Am2sWn7StUzRHP6HPt83d9V1tWdiHR7i1VNqB5D52WyqTyAgDXxFUCNXtMwSpsD4o2GV",
  "key8": "5naKbecmRsx8gmFuu9X9YNc7ctMXuju8TohATo4qjFPobTdKkFF4R9jyMbYmnW31o1o9ZWvgfJCvQdziSzH74kq",
  "key9": "4YM6jzyQxtAK82u1dY3UBT5tp4hLES1pQ8mSv1EaLjMmSwYfRWCkUd9Ks7a6fy6fEvDuJTJRochXm7Eq7fku3ExE",
  "key10": "wbqk3mkwYHxZUQThz1rx2866m8UMSj3W9Z5HM9U19qLM2vWcNLbR4M41f9QSUmvTpDkYhLGH8mcSJ8JPZ3VUU5W",
  "key11": "4Vkh6FBfQk8Ws5XQW6zrZg81ob3oeqeWjohyFsnMtGEHfMoth8rDvSts7baQskUt2aKemfPJZYywmLzKA1k9kPAR",
  "key12": "U6LZd37VsLceqUDzYp5Nfxg6ShfA52UFZyejfn1GcKLF6BkQzQoCpCZnqEssinma1GR3aBSKTmPcCpxnF3X49rv",
  "key13": "7CaeDY5B7ddu9itxM9hdmPDdvQyqKstayx2sf53kVWzRfYwPuaaaSUFGArbHmC1dQjrPHU1L64XLncWp8zsBh8p",
  "key14": "2XvLLVpbp64bXLPdA8LNcwZAxWxsdDamptoujY71FuVxBXAge4YEmnPTkxxeL3hr3hi3GESHDCdSaQPnXzevW1Um",
  "key15": "3qBnqU6nLvpBSvPqkQJSuTcEhks2fzunj7JWmb1bYyLfQf4PF3FmXbpXjCnYz6CKM82ybJnjYbYPvcArRYrPFg41",
  "key16": "2naSMyY2ykmUYbX5FcjkaUho79vGSMiSxPx4wY1RGCovY4hVdfhmTcJiyL5KzjVCoPKqGvjC79x36aZXjpBqmBUS",
  "key17": "5nkoeKNURvv5shxpHvj57s39w4aoWCCJiYLo2FcdYGaDxbWQLKQrQTwB7TSJ7u5DkG8ZYTiurT6rft74iT3xiCQ6",
  "key18": "5ACUW9CNaiQ92CxwYwzJ8DsT6qSH1r9HSELbqBD2dpB5cBQLNxsaP6fWZBp8DjuxXHTJEtPyrpCtBtH2mVUqry9e",
  "key19": "MYLb8GXmNfayhmkD6DJ6phEAvukhkm7QYc4zW4WJekmdeHj7XEjxNohtRPRxbZm61dzoN1JP4kt8qHufdFMJTws",
  "key20": "3ucxUnQHjHWVSA5SsDiDTVUvMNfn2UbDBK7R1MpRQxhLtnfk336NTd4yKWbfjkjK9kbfugEVNKFfqWCVYFLWW63f",
  "key21": "4yo9ARUFmFmWFo2w2PyJp6urnJS5Evp7817rXYMjG9ndWVX6KNpXcWpDD6SDFVbCmdWd62iBnaR7QQL4mCFsGcZQ",
  "key22": "A5EUfJ4ZPd5CS7fKtMrLkGDmxn3ZSoLmob69DkStkoJAPQMJqXJX1BWFc3XPx9fdcAHddFH5nqBism1ysW8WDXe",
  "key23": "27zCGHBccCqJcHRPdVMbyBrRu4AaQVVWepVQwDu8yLwSwecDJYUUbvHfffoaAmiiqhxFoF7NoFkbjWrhPhzrxV6C",
  "key24": "hbuNkxGtL5joYrbbQobZz2vATgbqLh4D2LT6eyz1FqznnLRx7X1FtmXrqnPsS7cNZV61av6WyAJamZCofwafdYH",
  "key25": "4i98qrQ9hLf3SHCSp2wsMDWtaW7aVPkBZaocj7caBZqMhn6x2r1qNw4mPKMH753gvcfxoq8mcYYDoUHeyMBYu8SL",
  "key26": "QNzA78BAXXgHinfFGapwKnHwCVeo4rhzRV883xGPex5BzSEsm7hcxeAj5Gi5k7jzKYbxcnVdeHcM5V7oMWq6xy7",
  "key27": "4LBbbSz1nUoXNeYbwizfcgwwy88fuc7g91gGHBEmqj49nfr4P8HxfasM8TUvucSU3iiWx3B8AxHDUNhBfvAy4tPg",
  "key28": "5xWCbkdU8GdPh1c61XAj9hkAvGNhbiWvgyKnAXhppvsnWazDZR9TTFCyWm3wzi7VwkZP3tNbGdPTNhfj8XvRweQJ",
  "key29": "zShFksGjh21k9CxLNbz9487cFNSCxrgjVDYP2benbfP6ZZ5MCzHW73pLTAKnHqGsodDNmHg7jsEV4x9Xh9ANojc",
  "key30": "3seh4kyQLnmcKuQdELRKWAH6e5jbiDJuJa7HgYhSn9Zr6rav7G7eUYaq5NuBRCH78x6gRUyrdte1yUjf8vzhT8tQ",
  "key31": "2aVooxFhJ6ay34gM7hxHFZHGXPxCrcNsD9GwRombXC831GsL436gsEsYv1RS5V57ZbCvjwjYrH2ShwxcFi1Si4A6",
  "key32": "auMW7cut1UHdysQ1VvHLvguTTby2gVfTW1pEJT8enJDntZ9kpcaQpG6it1XPqQvSyogbp9mmmwTVjBr1X6cazSo",
  "key33": "Pz6ZZUc8myJxt1mAwrrXGckqbesmp1WkbJprACR7FjpWpPozkemGQgqVvGr91EjvEwTf3wT2KrFLjhTgpnEBAvv",
  "key34": "44SrmwzLirPqUGA46ZduXE1xqTQMGswg7TAqxc9HK3XnZ6vMN8tMtcwvfYbXzAZGmNKgSaYqdFCtYJz21MXAygsb",
  "key35": "gYXgfjSvJoN8zr54qcoEvg4bsuWqnfGtMfVeg9Gs9VSSZR1iZ5J1UM2TGcURrAZ8QUiXNtKCRaYvvJ8PYEo3Fzp",
  "key36": "65WUarjLcrTyytisQnxCdTArzBvYbwf26wGFmt275VxY2mqpg1TPkNTW7gpXK4KLWgpNUMZNAWH5zqVmipLxD6kd",
  "key37": "3LQzJWwTtsvWDDycEVpjzZ3Jmj9qzXFmhHL599R2j18YyyPAP6oGsYgKuY9aRaHxuZYhUhVfJaqRN3XKAMoxHWWT",
  "key38": "28Y6i8UZzYCCxVn7FpGA3VTVG4BY1Myde5jXQDRYFJz4mc83oW4Ljp4tAF7QPReqBueqRa4ZYC6Zs2CoFN22AXP8",
  "key39": "3cAMjKXm5V8bKGGEyJ3v87wmtdKJQFQ6s99ThWL26dMJ9Wy4mScG3UQ8DXB4XDXaqcsuRR66twQ97MHBujcusHQi",
  "key40": "4xk6DEuTSu5JtxEzdGpxwHqrqbsFtCaA3M1j275wC6W28t81eXEQD9pPRsGSASodqGiuYFdZaptHhBrsoM8p5EKX",
  "key41": "33Le66xkvHxXAkyKhNr65EHQtw9rA6mj7RgWMWQQKHR4UqE8WmrG9LbCArm8TJTw3rawdajtRNtngAiaR4V5fSBj",
  "key42": "29JvxDPWpMK1mEZELo7WNm6F2djpQ8t1ofcy2PgQdV4FSUmYA1a745WNo6epti5KSwVAkhTqN6HfqKfo2CrioLMr",
  "key43": "4qWLjoFtj55ddVaAyAGiNYdY5ySWuU7bXSMHKaoJG5JAFtTk7JaKmbVSMN82To3WPkCBFuBHnLqaFaQxHwyD1hxa",
  "key44": "2GMmgEyRPvx7w8RMg57CJu3JNBUdsfEypZACTrdLbfQgKsotky27jxvtzrsyAj59f7K68EQkUr49VKzjxv6rXutx",
  "key45": "4qxNxu9pvLSGvY2ZY8CjXdnXggpD32sfNrZgLqVp8tq54GTJWGErFg7XEEHzTcVCShHxyDfnD17FgAgNsoiRFn4c"
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
