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
    "4ikJSdfSP1s9xtU96RGnAVdLwPFGEL8fiaKn9WVQPRnP1tFF58wmpa33dS77tCwfKkiA92TdZ44gJA8QTSU6er4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Weu2huifMgxFfYs2vWyc7MHD4UxCjBMiaE6oudSqipncR5LugJ94QqPDBex6pZQ5riLcCQLb5vJYxycQLYpegRd",
  "key1": "66X3deBgSFaHisJoaUX4CYDmcYosz5D1Wr7wkmZQzYSbamKr6Ywtg47n6WVWQKe4o9cuGSHkWoByqE6DLRWhQWPn",
  "key2": "4bzajvS3E95zKUiEs9Dtjvh8UQEkkZZtoyHVPofx1oQmaAMHeVABGzwF3iqZt4tpKPNqQfvt1NV2t9eSLbWrsy8i",
  "key3": "5RFkqMDrjFSGSzW5igenuHr8JqNjhEVXC1jLcrBJhDWuKyT6NXsVLZCiue89EFwEkgcJ6zGtpjg8fZsQL4vzWGew",
  "key4": "5HF8rFScHXJXwFWX9HhjqNTt7M5JeEjZNGnX4zVPuyBAQen3nQHrokzzyfecoUsxSm2vqE8LNPXCNNwRZzDfHpSU",
  "key5": "5J9DBDDpbaTE5bYCihGvoRVgbTBj6XYVgKoANKr1FFmty99npk4TuRzoQ5LruFTYis2GEY14mQkNMYMw7ZvaxWbj",
  "key6": "5XGTgEoqzHfmHqiSRSnRFrxvXjfZ4Kdz1qWKMKAFtBt8n3PeLkzNGLVahD2EzqUpJbCvKJhiERJ6ZhseD8YYuHCw",
  "key7": "5cwd3WofLHxzqQBVaS2KdVk9cjRijrYrL62A7DBYiVPYWWP6GXXBagyRuKspHQeiQtiXfF6PEiv46RTC8aHj9McL",
  "key8": "3sJqEUYAvR2pavPJCKcBPpY1vMu1AMSwxGq6UkYVjsaLhHPo3mZuJBWEfiQokG5LKC96cTTsMaiJ2ar1ui9F54xw",
  "key9": "313muocnWxrLSHQSRHcshxSgDHrunMKuwWYXHesxto6tDCStKdRDEqJindvF4xGE5vTqQSUgfubhErQ5ucy7GUfk",
  "key10": "39RY1Ntnqhn7gkmieaPorzCJsCvzGUnA4txfUVM4BjCS98DS1QVzH9NHX3MdPgU4oAXJpDmTqXqf9TVSHnvpeSEG",
  "key11": "A63kZDDMLDuzJQg8BvMC8ip3pHP8SeLCfiYAYN6qP81zN9nmjMFF5CLJzyicnQdyHu5aZH8P97rT4LZGKhHL5G4",
  "key12": "3gkPPvN8WQC5DZQtkXpzxMULrewvYsDTAoYPpDWTvnrXJQLwPdvjBRq6n4FV17GgQ4Ndw5PFgRTwZADTM6WhfVt6",
  "key13": "DUaa4ULdaLdHjW8XfmgVy6SVFhfew2MmZfZf23nCssVg8GpEE6qVznXESMVH8ypQj2BNeZiN5WQ3q7Lywz3KJ8f",
  "key14": "3qrv8FNLVYvyYScWVXvbD6HFGbM9XxpqYn2CJ5sZyMhCMRAFBn7nM6S5x9jQ2Q4MXhGEuGTW5phEtYRwoa2ckafF",
  "key15": "2txdhsjwwoJgDmSKB9r3Xe1wjNFdLHDjLaQXPkfNmUe5rtLGMChqrhrsst9XgJMq4By8LJ41n2gYkfcEjeQwq1L",
  "key16": "4VWp2RyCh11yp3rkZHZTLf6PuaTBZECzPa4z2FCPUsFSN52Z3QApzXmjGoARAFQWttqZjXYNNKuEPbAzBY2xMppr",
  "key17": "4qv8avgbJ3d8b4MD4Bx1WBxoApjBNYCwgsUJTWRoy9diwL2hHYYNumX3muGayPdqfYeWuMo1sRCxS4bVY12SwX4Q",
  "key18": "8rY6iCZ7zL1MGtWKoWLN3EtytvbLAzNCfDAe2NMQWyndsnZTN7jqK6uTtGvsipj3TqjW1RBaZQwnSD1yz7es7PS",
  "key19": "3Z869JiHtkHBbL17ny8LczzHxJ8XYraV3MVRtbg21TWDNp8mBknLUUkYZbxhMLjL2zNLPEXJKc43EferhxLdGYS2",
  "key20": "z2fU4J7Udt85kZhbvqRdb1jozY2fL4N37D2xzxMbsaVdjL63PWrpcJKsNpEtxd4nstDQrY9jCkbzhiUcNjY6VF7",
  "key21": "4AEoSjJo5obL7sTZKhTDqGXY6QjDkv2YjGtwXjaWDCJRbKNi3x3gQ9Z197nrSVNm2HJb1ZsyJXh7Qi7ThA1STyAv",
  "key22": "3QrWdeA3TQhggYbgUhzdgjRJK7SdLJoMD3a5xnmb8NWrkEYRBL7QaxP51BeVpqfdPkpCj5vCSEM1p4BHx3n5EJuX",
  "key23": "51nKj4tjCSfWgwHQ1sv1g4gSjku6mx71XPrjq5KvKRLVCEZpYfryiPvDUapTfWvZ7BV5FD2R4SQQk4cZEYGtsEsD",
  "key24": "3PVY7YVDJG3npB9diEWAAzd6ebVC5jh4NaXT4ACEk812wHTVRvKMZjuSZtNtrPegeWtrLTvyKe2LttEYSTcCWN1J",
  "key25": "T5MBKVnPAEVmc61Zm94bB76cKLvn2oziZaiW2WTZZGXQtvBctrBuyQReENciQM6yyx7pGZpPQByCbwqyh65zi4W",
  "key26": "2v1zEBtcQHWyjBLXsiUjiEpXSmQ3M7z14kBEB9i3XAzBsRZAzn3MJWBunTVML7oTmYK5DC5WEFKbKAJdAf8F9WW8",
  "key27": "2xQDQqdwvJm6mkT1mec8w5vDTfPxW4Msht1Ft97JancSFZjvkL83MAXYSU17ifQXnMcozmmG4yXgfrX642mfTQgY",
  "key28": "63YJWnQYq3urD2oi5Xozu37SofmZzYwawgxwdycpShdrERZHM6F4TSfmES2A2Whr4D7Rs6k8QeHcXeRBJs8T8TbN",
  "key29": "jFR6ygV8unp43ib5jD1yVCJmPevFzGPwnWawdCGiuypedcc35SCidEE1HLAZAi4BjgupQStpDmukH9NCQe5j74x",
  "key30": "3TR2nFZpdFzp8JtpBmf6sgqnqgUWFzafSuqPUVsaDAdboPtYmWQ5jM6yg86ZPWevzERpKEqs3pQqTMaWtKtFwQgY",
  "key31": "efdZyHsyudaxjk62rirZLL78FfH1BudUrh91u8ceuYWc6NhDxLVLSRBRpD6szQDaJzKx9UXzpogD7KeGyYt4kVg",
  "key32": "5WCKPcKkgy9H6aSTiLwXAJWJJoHX2Lv1jnkgmLgs8vG97JigyqXDydAmAQsRQB61sLnSmfzmNT1fyeNguvKNT8jk",
  "key33": "2tfvPJTcVtkTae24F4h7CtiLmmogxR3r8a6grQsTzfxAS4EiDdJrYW8RZwmTVscFJs6fa63QYgmuiXFkCcWikY5F",
  "key34": "5CiAv6KaScGzd3rKjMmoFvgstcaSky8qRaBFMDdwpJWFoDUN9NAKPNc9Qx73nsS4reanxRYkUJKQPj1wTFhKxRwa",
  "key35": "51X15jvcZrNue3GDCMpLnw8JRAeTYScBh8pNJc3pTrdpYo2Wjsn1GFK6HiA7RyPzwdHbeTsuS1f2agGNajYcinAQ",
  "key36": "4stFL5GTsRv4PNBswEVXvJ9FsqNg75JCzgjCYiyauUwwRLzTnpVSDzKyE1ob2rNsHzv5MQpDTAt46LrHUbzfTHq7",
  "key37": "5g5yh1AeUspWVJyDhDoM6iiw8c7HfeTaPE6nb9j6cbK33hiHjcifw1onKGaMdXaAESG9mFYTYdhBr3ooMDr9GNeS",
  "key38": "5v46KXUmkjJo3phJNwJRCMrBCYMnrx6rDj1WPLi68EZMXoMTpqjGcTDgdih4w3WeqxZqQt4A74kDx7gD8JvSSzmQ",
  "key39": "3wYA7Yw1Vv7UjLD7g3Hx3obtbNQ5V6BrULxKCMSHTKMdGrVZbLso2iM1smLd5gSATFGry7DWG9qTQkF8QEwuNLYa",
  "key40": "4sXf7vCnrzUs6a7cKkKRxWiLqWMfiPeorgQwKAMADEvGULUXqoQSVNLHDJQxiUXKkcgsDYFbwEPxYshXgkq76qXL",
  "key41": "54jmgVAKNpppEhH8168tAM5uZsS7B4CcFP12zSVtKhMV2Nym1rvutGfs3o471pECSCsTcmEpuBEGvR2t8zwrwS9T",
  "key42": "2QU4NZFpwZaPS8SfsXW4irS6gd2wu9Tds4fJuHPBn3awvBZeHye84jWL3aUduE3EFApxCgLCcUz8B8p1MJEPmGQU",
  "key43": "5vN97rJgTaA16mFEpi4eGJ1qhwKSgbqeHB9Na4o1cg3fFEYu3tK7b8Qtr8KV61VNkcpZey3UkzXsNasv8cGQQnsG",
  "key44": "2QLKKKkdFxjsRr2bVJ6rf9iMcoUN6vQ8zhzEU1KLm4bDndjZtxrE19JBRSiCdNSF4GA1TAqnSXzmDRVDNqRBzHbB",
  "key45": "2k4hWnrsbcH1Lpt4QLbhbHEoy3m71DzZKC9UQR8juwQ6ejCSxrJA2eZe2tabses7KMt9mictoMeL9PFJpRRuz2sC",
  "key46": "5uaXSUGvguNCDgfkYUcxjkfrYXpfVo4BBccBczjs9cCn2KdRTmb3WUDD8cU4Jt6P9GpR9ymSwv46Ke5sM3Vnoxk",
  "key47": "382m5UiuLNEmfDJYnFdCeotkAEUNBymquBXVcPNtoSX1C9vQsjD7b4EVYgFXs5z8W64FVLyaS1hy791QUFkohCbo",
  "key48": "3MyBQ7tSxX1dXqS262Abx2noEKuuSoH32SJNSnJL8b3Dvvpv3tLkMUEadFJ8sS9K1FWhBKcjqeKNdGFxVthRS99K"
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
