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
    "38UaCuQNanqcuHWqwVEUgJc1FX5SZhcRHKfVBPyrS7iHMic8ppYj853wXws1qwFfdB7yEuZQiiE341YD6ExD9URD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pVLuf9Vnw5czLbQHkWp2LM7AtYobGtWdu9Jc2NyYLNz58yX8BLTvrma2qEu4wb5BJmRqSBv4uq5xHDxvGf5y4dA",
  "key1": "WX8zC9X3UcLDPBxGwLvVeEDUwmw38vJavk6NaPPzyf4FzqgueSfoFzTTjJfKHjLmmuQHay7swp32ViANW6B6Ad4",
  "key2": "4dM2mKheSUqNdjfXX8kwu37iareRtNWKU6AKd7LfxMWmj5AyB7FzQntGry5XP8pHrgJo52wJZKrTGBbWApUoPoRh",
  "key3": "4rqyieHYd9axpjpUfydfjH6Xsu7fpae8tBRuX1TzAw3WW9U8SC6iJhzyMMEXmaupiCHtXd8rr1augMma8ebYB9wU",
  "key4": "VqFkeQGwk2hVYDatxrPLwWsaXDv2cZnF6F1RkGNmqiUccigDHKszjvbRTzGxzBq7y6XgLsdDW3a8r28Z4VFL4Zh",
  "key5": "2tgXyYgYUjfbBSesXusX4NKn1E6TcSjLzTAiUH2UDCoGHYDo1m5dRmaYkkiKL3dGneD6wj1X2N87Jrizsh7wcCit",
  "key6": "2FTYP2Pt17NHx5d4aRP179MeaXHNMsq3MHhb44y47UzWJ68RvcseWBfez9LtDVdTTmwLCSgBpVxdEKZcMf6c6sPS",
  "key7": "4M48w691wcioKknsBFFLSjQ914UhSj2oRV3c4Uvntcs2JoxZTEYegwowiQpXDokAqRniFXU4kSGiUezPZ6ohrNa8",
  "key8": "5TRv4zkDA58MhnebBLSixnDoDNCQ3SBa7QkF597qTfpDWwixkJLKC5wJQZWKNBdrtp8X4hFwrvesJuY5nyptnXuV",
  "key9": "2SDpi8qN5EZUtg95Qfkm4W3d9mVUJ9eykFsiYZtXRWCFXNjSibXyJhx8FqdJ6kRvyWD5WSqbrD8pYdEGsDnHmitb",
  "key10": "WumTSvSPELZ9FDAwfx5MxpqwU5sLErWbzb7uzhUqN9UWxoUadSndy4uVoAxwrPbZavdnpvZw86ntvFsPoEXjQgU",
  "key11": "3ytwhXjCb2EV4Mg4LAfGoayoHCf1EdjAE9tk8hzMyaCFLmi5eSPsCnbHWTTD6WWZijZYhxRfL42nGuCXb9isAsUU",
  "key12": "5ewrizwa5ESw7dmUm8XujxpsHxfn1kzD6dtB1X9T7hkwo8yTnvuHoXXxENV6Ty1WtBh9tyQc5LWJKSHWD3RM9orM",
  "key13": "62XnsD9kzTDarG3jhvY7VXWbkYbLse1qWj8UB8WJJAYEq3EQjpiPrMdhWSwKRk6GrvpKeMULfQ45Q8dvfUe1Paoy",
  "key14": "2KTsKDanEBvk56HuRkgyDprawG5KiyoSNnb2iXRZqNZgD4aXZBgT8xu6Mt6G3BhrbcvEXg9pXbbhubCRgNCmpDSZ",
  "key15": "5q6k9GisrLAdZRWQx4PDCBj6JLDNBqehPa3vLbLE4RgpqpmfFVntaK4NRKLdVPAnSnJGaZwjwxvq7VHrZvNeegPS",
  "key16": "5me41U9a37t2hia22pPJVEPDSb1ByLErPGM5kubhgZSUbYf4v2WZkpTxoLainscyoF3NJMZM3MxWgVLrNgTjeyMm",
  "key17": "5KT1kUyJMB9dDJbntiLpz4gPwHRWE9hRAXnPai8kFfFTq9snu7RrAefcqcTEKQXpYTqVo3t5aMrhJmsctYPWXh7N",
  "key18": "22iQCc9z775KNyS4jNYE24njFULNcCWYKgLYyvpJWYZ2FXXW7kVMduFzzfpektUMUvB4w7vmEERXSLWG24f7h8DT",
  "key19": "3zUrwz3AoM9K84hkFJTS681ZcH7TZcagJedLnhpGsZTe5kUgiisFdMGH1mKz1s8mJpC6PsSnjQ8dvWtja9yi33Po",
  "key20": "A3jzLga1Ubw9A7hTSqU34utAzzj1aJPP5yGxyAUFyXZ2APaLAADA24p7gy99SUBMg9x8m8q4WSL8ngzuvENdnHx",
  "key21": "4boPEbNHLYJLiFF4w9LdYHgeTpDxdH7VyufAycnEzvFyMC6ytZv7QU2xS77SJin1Mda6Kwx4PywdMgsFQZ9MgGmt",
  "key22": "4T4pk3FToCBu4gou9ccWFwG5DDWn7d2wQHQuq5xRp2hALbiQjdCpRiggJ3iDbiDG36BB2VsyAbGtxx6zZabrWHmP",
  "key23": "57sUfmRNub3Kf7PFykNKeWRKQ6RustMyopLhCtSeCX8XsE98uR6ofE3SxftNxvLA8i2grx41KGsnFQecBfELci3b",
  "key24": "4UfnadfgcQpNwNs4qxb2jsc75BhmTCjCpgAGMZLVnhx4D4hL9pVzwmUf46ZrKdUGVJ3jaPrXPnZXqyPhB893nWGr",
  "key25": "33cTGMywiDZHrwef4BiJy3sdFyYi64UocXiwm2zx7yk9TkpKWTuvQPqp64yPy6cmk8269XZ6ZMaDuh9DLBCJXFGo",
  "key26": "365rwqhAv2RVtseW8cY9nzwnGHd2w2qgDzbNZeux3EbpUMf5286jHBiJHzg5bfwHh1ERew2FgSxDskzLGnwBSgbn",
  "key27": "3EnSTYqfvGBqoTviYb59kHmo4zPmTbwZJsod61R82phdFCeoCio412KYayNTAmzRQoyKzCMtypHiduwWBcnpBjmX",
  "key28": "4NsDENagGEECifALwR8eCL1TkpRR1ZePaam7RBSZFr8JUMK1nqKNEWdGnEW6QusqFsRz3jHMSBiQkdvJC57wEBpE",
  "key29": "22BFuzYZCt64ddGokW5xLRUH9nM6MoFDeuNCMA2rG72fbq25jjbV2Woq8fayaiJms2v65qK7RVnTFdt7ZqvnmVEC",
  "key30": "3EfcFVxqMh9n6p6N4CiQjnCHV9wc6MKhvFQYucQERcAQTPcWuowTA1CgFXpTyXKVddBjxE497RCzjoBbwoCP8xk4",
  "key31": "bMa5J79HRQC24H4nkoZny59LrT9TDThygvjnb7tLSMWrK6ptxzuKLURSoim3LbSXnKCiZP1eVGjxLYe2amzUQXK",
  "key32": "3Ppf4EXfSDBXTiJJLFe1tXixFiPppyhkX4aG8aZ3g6Fj6wT1XFPw2WAALD185WxmxtqDqAEsAD73eJFcsSPHvoCn",
  "key33": "R2VvS5TfGsRrUpfaEYZhX859mLrmAB5tpPEfpzQsxy2cXx3bx9PcxAnNjFDNpFhA4ypbJtDJYpyTCY9TSQbE28u",
  "key34": "5UwE2fLsw8rbtVskm2PxvRLZ1VNA3xMvCKrUUrZ79mFP6hHjzoawzwE7SV8vkPxfxrwwdYkULgiTi5sd6sG2GHv",
  "key35": "3pGHhTJWnqKcEAYyyToSvw4xpkLwKiK7idgZJqbBDma5EBySNju1twVQrLKrghBHFT5re2tbjQHP3yLxDF1ff6G4"
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
