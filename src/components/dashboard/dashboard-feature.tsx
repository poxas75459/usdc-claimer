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
    "6frT7FZF66XAGFKwetfLwgUxcWfVTxzs82nLr4wUqrmsxdEbXYbpCGnTvycVzMV3rG2eCNTgbPJsiP6owaUpANz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rrP9cYdC1ezLxxNiHhHaZkXvrWbEF4fWt7wJBBLamLxchi5h8oPvooFU332ZiczcxyQ8NoaXeqmXHQPFeYd3gyg",
  "key1": "3Kd452cyU7bS7NGpnQkau8S4nZfHUYhF83KRwyCsuDZtNMuDNNB4zq2FsEMDspECJoX7tBNUXTcGueXmS2ZyvWL6",
  "key2": "4uJ67gXvyhER3CMgvo22SMwYWZLFRZihV3SgJDcBxV3CjNzpDeNWusbx5towB3SzwtxpwQDouoDKwos3tk8URhMe",
  "key3": "5QAjpSD6t4VpQn3qSD65iApyWkdY2VpQyTJcQZc2aQS2N9mbNXRPT7ZV68nVeKMxcGaDKuBGnqgGLd3M9xwTx8Bv",
  "key4": "h2DNomCEsxZXZYMCf39XeqjKht1gBVXi8xyUJPuyMWzemFJCLXCw2YWXJhbqvvJqi9CbmrYXiZhAGMuFRRsRKGU",
  "key5": "zHwKwpwAbzkYgZn68RrgcdS847K6UGxw5FXZzz2t26c1gj2UNrvSipyK69GTDbJhbm21Px11rsFRchnxn3S4tGQ",
  "key6": "4Sr4nCDVjcTVc5XrAc9A5djCgmq8qzFqGf8CHW8ea6SNdg9QjbnaDCRQidCnnxbaKn3RtZ4sqFEYoaJ2mgrqWu12",
  "key7": "4isTZNQ14d3wqRoRAzUxFu8tovtPR2rquep2xvEFEg3FhzzNi5fPWMnEUmv1DoVTKmYa8qPXropDMPpMQkhtaCaa",
  "key8": "4fpLUHTvH5Ni744EjB7cnDAfecrsD9BWrJgkbEEVN7Xbh6QfKonyZubm88dA5XR4mPBXSawxV5mTEoxyrqjbWVro",
  "key9": "4KpC8YW2m6NeHpLZTuHRZhgPCYcFgUfkFZNwiqjRQaHtZWAYKfV9wFWibb5STEQhE5f3H8rB1HDF7BrymwRQWgrj",
  "key10": "7g6HnjvFq5Zik6BDt7L5Ctz8er5YHUdh6VJmCZ3vdWLvuooMqgbHpLkpfHz3JkirSTeXBfQNAq9UVwcKb6FKR7A",
  "key11": "Xk8XvCrPZg6cfjJn1fehf8hLdzAXEu1Eb2qxRvV23dRAn6v4QK49KYk5qSVkCbv7G5dePa9mPhAvpHh3AF3mBuK",
  "key12": "KbCLK9yXLNfCD1GbEj3qrEoHj7DC2eZc5q28SRCX7i3gvA8UWt9c3nqsezveUq1ZutEK7eDETZbmxcEETM6w7Rs",
  "key13": "FMhh6qEB6HAWTCShKZa65WXrf4GGHoVkhZ94jup7wjDbF9gGMHZoNHNuHUsCDemRuBwF23G7ftz1dA6TzJkzMVu",
  "key14": "4JsbbLEQ7YE2cC9rgtHDr4CgWWFhLaQh9QyBWMrNCHfcDQTUj8L1YVg3W6sg1kjJ8cGnR7fR7VP7gLQUdeqtHS9h",
  "key15": "oUvgaq5SMoL5APAvQ38XLv7pSeMR59aJ3YAQgoBoeDHz5LD3ZD3DwEMkqHViRpLDCqYdjAjKdyPCHK1GseUWUAK",
  "key16": "3GwQUL2j2f2u7nYEbTUBrufCjBUmPP95htq55u9DLQyzAAQfvKrj8AviCwQyV2TzSYEU92P4FSdDSAVCeqG94ZqZ",
  "key17": "5hknU49Bya8jvCLkwRnYEdhPTiXNGFNSa4wKmVYxvHxkuDwRYpd19s9rpm3fyhKFUBkrdEH7ihVBS5WHPWUer6YB",
  "key18": "5xRwY9ARvaH6hx3ZckNcnpthmcFuLyGgLyz3piAdtush6i3qw2PJG6DnuLZNbcXqX3Yr3qSqkYZF6tumt1HfyRDC",
  "key19": "2qxBKjtjRJiUtkUUGUxNphUdDaETwkVdoAZSbBTmp4MpkGJYqWx8MvG5xnQNuKLuEDzMfzeZ7sDnD7mMuAUJj3HB",
  "key20": "Xj4RkG1SyBk3iziJPF4mrqJFk9ocrpFz9yXXEiVTkq7SpF3QAmKg6zpgrznc4ACbECoPyRcQu8yuPx9i9F1Lmu4",
  "key21": "589g77SgHYf3SVsZA1QLizVwe4PP5wcx5yZvSgpBaq6jibpFoXNzYw7nQLwdRhcMk8j2spD9uAJEQXhp615cPiYp",
  "key22": "KwGFzyWDgUp8BRskxnhzzkEn6YiZ6ymuSxLUhvLGS1Zt5QQkaFe9fLKUPig1kgSfHe2EHTPeH57d6BENGvNVeHa",
  "key23": "5cnQ7S4yr3UzGbzPtshixWKC8Z59jHEaX99Qf3xeqFHkPiuR6Tads1Y3G9gnzaeJoGFk4HxyKYnc6QRGk9zbBM6z",
  "key24": "4iz3JaGmtbqdea6bRZhd2Ps3abeW1SESXpZyxgQHrGGX1pmbuX6AxardSc4w7U58RXyq3vv2v7Ge2dSQRC5yKvQ4",
  "key25": "5ocvbHjBMy6sP8rtkS63CPaUHNn5R7r6U6irhDY6Sw8QFZxeB4gECUp6afpN92T9KZePMxrT5HRkMTQ85jK2pr7y",
  "key26": "3LzXJE14zbNjq7immgnJ4p8uWVxV7b6tYm7dmE7Vr2AdN6BiddA4aLb44EhtCFmTJbyJ2uNdjBJLcftTcfJfwsBV",
  "key27": "4RyMHvW51NZ2iDcnTEEfwipSmPaBtUuJGChMeWvZU4F8VsCUuuHJd4SW3aWoFDvgYUc5GZmy9Br7gg9phsKGQMMf",
  "key28": "466PMSowTDBGLkVL8u8V6ACoEu12NDZJ8D2nSEiMKbzaR69SyYdexWhdmGGBJczT4gyB67T6cGBuASDFxMXS3snC",
  "key29": "5DHXz6ZwZc8ZesWD3jUrfULHVXYXSxF3QWHXiJGy5j9KPYY632g4b8g64jA8NLu2Skb8HXs4FyHJuAgucdeXPJ1t",
  "key30": "tEcmFVT7zh1yjPuHUF71Ct8Lr1LjgsMRb39qtUHBsx52GMnXf3KC8Rr6PC8vRHLoAysoaHtZiSi9zWqS8gigqvB",
  "key31": "4GMJYAZ6BSqpeZG1gdHTQTETwcZNAUEocGT7vXJi3kAWzjUEtFc4nhRmbDmmCq49TYJjWBvLhYv8hWD8ZrepGLUE",
  "key32": "3AsvZ6f7TRgtu2P18d2GvtSXQoAsm6Ubwaq1Pnh4gdosARA7jqUDcxdqa3F89hvTGxDYDK4VoJkEFfd4bWGfiVPm",
  "key33": "3m7BX2pk8fLbKRFVNVQPhU3PYmh7EcanMtqYMSJuoLy4S3QyMRAj2bjUxgH6UgBoKwkEFsdszzNcc8pHjAdUKrcC",
  "key34": "4qG3KbrjCwEQUTKqMACoojxSyHqmCzMXYCGMrsHpw3gyUZbLMkX9bjNgva3DJXKdAGkDJkPiq39BRHQ8w25Q7bUD",
  "key35": "4QZ9tbkt8EugH9HFDxNB3jna8GCLq39rTh7TGz9rY2Lkehe3kzYb7QxbchmTJe3rAn1QYWSvTJ4GJDo3Hv6m1MVN",
  "key36": "4qfs9GiW8mmuaw6Wok7u2otXeAczT38MfWRZrbHQRorJqnu5bVWR5pkguebTN6qhjWsyvQfBuhjReoNAN5CWBFGz",
  "key37": "2m6bGcvwovo3JBQFw82pPa25hudStcZGtBmoFtapc48bYb2PhcShjT8wiie1bxSSYy96rfWKbF95Nt7SgxPV4vnn",
  "key38": "28npXfVi8pTFraaHBj3sPHY1e1QwTo7ay5uDcQW9wG7JQ56Z9kx8LWtbifCkhw7w6aYQzVYzdeMvJojTHoQaWjZi"
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
