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
    "2q34JNAxSTjM7xnN79XiMGjeDLeFDxSmizUJkHe387rw9TVeTQWoznBX7Wp47S3SQcpdGsQuLH5NgiKkHiMbp472"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mWDfEG4X8x7udyDkvifHYExMLLRXGbr8sQ1RT2WxvKGFS3RJxo8FoTqtpcphdC4jqJyjQVnqgMRbjcUk4Nhw1WA",
  "key1": "4p7y3ZRHvvF1c5oBBrrQvaNeQteZgGUpYono73FfEhRa5zhLsv9HJyzaV3FjYBvoNHSY6CfbBX8bK3jcqHS7Qink",
  "key2": "3k2Gz9P3HNw7HwGs5fZ53xNzFk9zQWTGgPW9umcffyxfHLNVhU4VVhRUFqGWjaJoLjc1K3Xvr7r7hEoEeFZjGx2D",
  "key3": "4PaEHHkNfcPzvbYnazBFA8oT2oaiSqhD9g3yMKBhg9ngV9ybporZRszcn2ps1JdgizoXKwCsrXrZn7awDHZptGGP",
  "key4": "5isThwKK6USPdvr1BLiZv9nkbw5Dmq7dxeN4xjW4mYGzpZcKx7i66pE6DmPCcR3cxjrBv7MttC2hdgPPpNhskk48",
  "key5": "5PYi1cyUWqxTA3Myi7BTAsp3J9FbibJpNxxTrQzrbjn116DPQLZG72J3tb2iMLH3PvZVNUft3MMS5LqUgrra6pxE",
  "key6": "2Ga6rcweHyssmcmQgbwSfPzanip588CUXpTpAPiZMZkhs2m3AmDLiH3AXKRDD4PkMS6wevkLz9hNRCGaRAkQnBdN",
  "key7": "5F64b2MexwwxMwAeTiN87p7UPci52tiT1F4Vk3m8payJoPYfNDCo1pmBwBem2MN5fYBVraLMdBG331ByVHsX7sEm",
  "key8": "hnqp5oPwpVZGWvRFjJdP1u8169hSnY39vRS7c3koMqd4SzpbbkXfz9kzQCa7j2Bjg1RbcY3p3QVExSH8746xRGX",
  "key9": "4pEsvHrQSg9B3ruYwEnpVWJbGGLdzMeehddYpTptZgRkgVvDWURroTWuzp4xUojiCRNwb7oXjAvHsnihdcSWQjCj",
  "key10": "2gBLhU7zvAUy6zsaWjYxK7GJqyqF6W1bXQsbazEGJwC7aAagvyuxv9hrqSt5hXqiTBKBcPPcwgw3XE1Eok5iNgSL",
  "key11": "4xLNC1qTz9wCkkUEXCRBrgPHYDDB4wGDwuWrkjhFoF1dsj8C7P67veU2CD7ZfHE13rANnoqL7jA4YP6XKNvpEKpJ",
  "key12": "VGepWt1f34nXK6vBRd9YG9ZZZ6DLLsHzqYASe2SroqptyMosUmCXk1A9jKeQy3FpTJ86nAgPQgsT3PRWbJnQiJF",
  "key13": "4tR7qDd6Kz3gGvJfMdceVuAFa9dp5BMqnd56a1QH7psd7hHceuE8c2Berg5VnUD4SRWJjz38rCJ1HQXPTGgFiQhn",
  "key14": "3rUDGS2346QHP6woSZMP9s7ixVxKZAYckXcFM2z7w8aJgCkAExunooUGaLRebjjrf9z8FiVtDyMFTWrqhbvVYqzS",
  "key15": "49Uc7Dr3ShuhVWknt3x7J3FXnpW84cgYA7i91WGuizaKd1r88Wtx8fdTjm92J3syabxXNrZVgX1oBqyQS7nvNSvx",
  "key16": "3xfFrnFUqJ1Fe1ZcKZ7GjznwNuf7Kt1ayyZ6rpudsMDMiWL3qiTwDJMcXgadQjkUJaTwWxmq44iGT4gJDuZhn9ED",
  "key17": "5QdhXPEDfbFfRfKDUJy8Joi5Cq1iaHKNSsSs43ZiWjFqjwMUihE8LDDVNkdLdDy14Pr7CYvYkuJhKD9NcSqojDSU",
  "key18": "2VA9CMpKb8WiRCXUskAYisyqyhmZBiwDZkbs4YGXHJcutGSetskXagS3LQ6Z87Pz5ndCU8pq7GtqMXhnaZ2ZBoeQ",
  "key19": "uLXB3JSCpZuAujCtUxoAFtq8L9JXnM1MUo222146nKtNe2Su7Bt9ahjT7z3GGUWXJp4nNsWP9eyTGQcbGaP8wEG",
  "key20": "465FqCKTrKDmUAj1cNXkXY2ictQthfgRwn1m2UUaCCBBqeHebU1Da9Bc9GA9hptcCvaDAXwEfs7VhDifT3RVWhkA",
  "key21": "4dhAzgZaaAyPNnQUfjSSWAJ5CJecSiqak8qkUNx4u4Srin8dBpcaVpbojpB32mprD8Ba9yPHA77hzVv7FuPhsTmh",
  "key22": "3nNT9XfDCFEoKQTEQUmU3Mw5MYHyztuP74ZX7ai7B3uccM2VqcAUeYF86Ru6xNpcEGuLHQdYPHamqwgQaWQqME4D",
  "key23": "2xBitLtb1HZo6etScqtd385Tgs8prX8c6BAwG5aB8QRfHHsbh21xqhmBZWkcsjMap77dkESKwhpj7dvWTTX8uqbK",
  "key24": "3jjVBwud7Mj9scs2RyVhq6i4LbQW9PHkJKXArkSTJssM4YCYCYwxPwGuRZj2PSAR9TCVQarMLkXKhZxfBg6ReiL2",
  "key25": "4jmp6fUyinXKR29VYL8WoWBZE4UUhrXqYbd61eTZt6z2Tx1QapzbAeuNnXFB8QYaHmg5e7Mc1DcQVfijS4YCHtJ9",
  "key26": "3LPVocPFMUJVZhN2gJ1M5JZsDtwTa88HzkuwEy1phtCKAAP3Cgptyk2iAFBkZoNNZLdAUknfUjcdMUZDBdKoMane",
  "key27": "8yup9uYvazi2ThBMSCEeTAMvJEDoBxqs1UpUdVxTWqnVGogAvyANgKx8Mhg7LUuAxSUYux8XjRQtWWAH2BzyjVo",
  "key28": "5xTXimFzaBDJfbhfi2RTarpRRm2ab5PQS87mr3m8uTH3MTyCzAfjfG1i3rvoKjHT4jfHQR1U7Uqp97DihDTwkksA",
  "key29": "22UU4qkiLYxaKPtRBhpkSCQPrQ2aU9j5aQoGhRCBdxJCuPGMifbbEXeT6GkK2voBAnzUN3XSBLFftKfFrfejMT9e",
  "key30": "4ch1bUNMK1Woh75thsBEH5iVYbY6iu7xZgUDpbAChhSLaD9xkJTkn8AnxcJzdy4NH9ieur7jnKR9niAuixzi3tgd",
  "key31": "c12TyL5eh4uHg8RpNAbHdAfjE8GknNmVhPXm7u269EXjaNyt2bpKVdaabD4XqKG2dsyHi8YxZA5Uqfh9Jg1n7XL",
  "key32": "35xGrLE7TeietFib9nM3pHDSHTPHg7W69X1rBpNLCm9U7bFtb23cHDEH3NVaHGoYNL1eVf2AMSXvBbLQ2m53pd6a",
  "key33": "hNFpQoC6uzNF2uJrCRd1Z7Z3wrzLbETD5KYcyWSiEM4bSpqxDgJfWUvgExS4WvXD4ZyUJkepowdqam4uKpZMktw",
  "key34": "2qc9QqypCoWZitVRi3KCFJ8RKYvjDTwaARbYCbPVcdECSpaqWFy7wReNT38nMVtAYaaGRnzTDxpeeuiJqwcXQYWU",
  "key35": "5X8LnWUALCYDD8wmCEFTEfqUMw6QaDGf4UXzEhZi1hSt9YciQ1szaQdVA49rPasdwU6ML1WizQD4tQpLrSzwcymr",
  "key36": "EMkY6uHJvxHkPcSKEKC5bnbB3eqfXUtWTiqTuYnQcmyGYLiydzdwD52GSFQAG5KmdoPkCV166yjaUAVgorzWLXL",
  "key37": "27bqxwZWgCHPr5XHJX9TMRFAE146xmstET1GkX9J6YWXm5CXaqdfjW3SHiBBCbwjUJwRJgT78mjRd9bBWhpbmnim",
  "key38": "4dSvmJNEBwvcAeUguWZDFBxj4j5hNfhfUVYs3GEx4PsHvnxeL6vf25qLSgdZ9AhAqzo3AethTr146HXgZahvUag4",
  "key39": "2Z6YxzkoZ2GpNsuTFjSRcbMRt66N2XCHUVnh6BTbnpzKpswTyk1Qi6XNtuoUd2iyLsTbVRutFAEGnwFHTdu8UzjD",
  "key40": "5bBo37zDF2fPXAd9cfpV6jiuQkZ9NqbhDvRhga4GBQmioBkoLikM1sVwcJ5P8jR8cnTFYBuN8hjfDn4m9HZ9NgT4",
  "key41": "32WtuKkT6VdoTbUexNokveQoHhoEPCbRVsp6TJJX3ARc1gTjTohC8wBBXGuZrUVawndXVUPvKuyW4E3UkP98swV2",
  "key42": "5hUbM214BeDLNPBbGvDZRxER6tXyfMXyccRY7FAhTzrXmzrdwHos7FYu6yusJR5QRjZwdd1KixaiJWwzLri1H5cG"
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
