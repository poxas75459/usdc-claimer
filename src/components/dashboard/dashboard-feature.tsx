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
    "54uxz23uaKGFnj5VciyzXxPovfqY7pVogXLqDtgF1syA2F8X91pEuX5kBXFjJHMxrZA148uvqMSnzXSTrf4sdWB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "231vbUEXJsTD1APCVhBnhqrcfU1MppnHxM3v7edEeQKt3rgvGnrpzVwFYZwJACdZf9rtueMnAjQKEyNyaqHgq6zL",
  "key1": "38HgNkgnVVt8jpfpkvz4AqPk6EZfjqNwaCn9FtJquLRDtNq7nUJ3Q5MiW9nHbPuecijjHtFmwVWoHqV33vpeUQCT",
  "key2": "4asWM9DhcLVJS3MEcb5X5ir8iijZBzxoHhZ9fvz3NTZCy6XALEuEe6U8YSA96BBEJLYmLRqUkmBC4WW9h4Qpw3Y4",
  "key3": "3Af9c5FoEA1q4FchTKMV2dmjcT1uMJxWMuhZYQydR8PCFAhXUHpqJCH9beEBt3XgsrXaPfup4wmc2pfqwfbmTVp7",
  "key4": "543jAPuuXKCB75Ehbu2iB5PJFKut17L4MMtrArb5pVPhjt2eAx1T4C4mqyEbWXeMixArdHKVjskwrBNbeSsU37e8",
  "key5": "3k4LMPh57dpku9pZcNdYJPKQSV97Gj7nX7csnUemYb4y6eRjQ1iH4Moxk2K8GEehfFUNbaF8f6RMLBia7Biwpi57",
  "key6": "3n1JSmKRdaDCujW7TE8CMrKixkGpwDG2TvXAhRZyhXY5Wt2fhKzsfkTBve3CFEHvrJfnbHVMp5w3TNDo5g87AEyw",
  "key7": "5edeps3yNQQnuSgxngayhErUDYw1ALWHH6HxgcaeXnLdtBgR2MrU1jEFTtToY6spwQLhWLTwEgiaYdMip1NSqPTH",
  "key8": "4rds6iWqdEyWduJY6GMe6fG2iMkct6d72i8wxxTXGsLauA9hrfZ7XmLaoKzRkkppzPXLpT2q5Dr5MNfSSQ67oj8x",
  "key9": "23nD4uKLR34H4avMCVBcWUmcJEe8r3d6Uegsc6GFcLkJbJKxz7dUNTaeRHEGUmSz3MDgVpcefKFV7CZ4Y9XxQn1Z",
  "key10": "5D22wE8F1vwTZmQkiFAoctKUHQd5hMuckooBZPBLsEeTq1XK1FJ4cfzzVVFbC7qb8uJdDRzFQwbmKE1aDs47Svup",
  "key11": "4zHdSkLmbhJCPR95fPHT17Xfm4uHnDjKAecqdQB1EQjv6p96qzEHgSUsdB39CjMdqFy3sWEA6Z7p6tPQ4rkrS5DA",
  "key12": "4nxjcuszFax1Ayy5twijiCuPNYkLgeTqESZ1ymH3yPVRfRshrp4jkWgLduXwZzKsGxR4221fZqtbgpE6ZTZPQQK9",
  "key13": "5N1HS2Upyf8vvFqeiv8jGYXXds3dE5DmNAiqwL5qu8tmzNrANwBMhYswKLWwhscsjnrNBEyyHJV2vJ7v9mZK1k1z",
  "key14": "2Desywci16Y9o9kTyvQWZsgHD4NQ3SpNiWyCKt5MQtVKmgNXDACtKb2ugQNDKWWMrDsnZgxr4oiCYayE3WVbN22s",
  "key15": "3KPVY7eGfS8g8PhrJo3oCHc4Rqsccc8KoUJsYfp8MfZSV8jKUarDBFgZc85p5Q9em4xwo2VwNsunJNLrfAPFeVLk",
  "key16": "5NbCHsazroSdACBpXoWV5h9qtW2YZudpLuWAwTJSqhNzxBA8kGnNhr7xH1r3SHV32CdHaog7uKvCzEm1jtpeWz85",
  "key17": "4XQEwi83WdGVLbSurM5pP6fN5eAno8pd3JmSTchC69sYLgkVJTrWe8m8wUnCufHFDTjWR2WJDkuEqhRgb1tyepXB",
  "key18": "2YyHnjK6P9EhowGv8U36mNjckWqCiboSF6BjaGg2M9aTF8Rs7fSNyys1YqVEjspLHwaEeNAobeWJvm7GPftL7s3c",
  "key19": "5zEn5eyeg23dqicncirsqZT4Ta6awPW9fqiEanvxCmJAUzLUCVKo1xB7dbecKqPBiwGpRDrqEHXtxFXcr1pLPtB5",
  "key20": "3EpqCQDHYW3w2u6n6RfBsjF9VpBUw7r3TXRDoEFiPUmGx1WzG1A3AP8AAqEcE77sXatdP1MYyKwQ59rns9CkjtKP",
  "key21": "4YE7J3g4XcuEN124toiGRuV26Zh6oePW7VgyST1kL552oDM5WqtKv5Ab7DhWW5o5beQVjirhNVmuP27Jm3emPcDJ",
  "key22": "2orAuxFCggbZ58w3wUs3VfG8rJGyCwbp2JcuTqZ9hfCnEde9WSCkMKyKmZWgVXShpTYX8YFfRDVbfgzmqmQxmN3k",
  "key23": "2RdfbeFFNb3bdEzD7qZ8MFvdgGQ8oBfeyPfeQNT8DnUPmw4exxc9vzAHpkhEQt8zqZkXHMyAZ1WpYk5747e7xh4C",
  "key24": "57138uTV46H5QeXFZnaVFo442zospgmoBQaV1RT83ys5CcufRnpCWWtzNNh6B6YLS2SKLpgWebPkdjAzBMLCBLKo",
  "key25": "2LYPZxqAXjX48GyJTVg38DKuiFyeWwxWLTjThCMQN28aqLYwxAinrQbGmtpTQgBEsKDdSYUik46FMjsRPDueKHR1",
  "key26": "2rPcsvnV6rxgrD8tAzpk7DLrqjUA5ki73K4LXtYf3rF6x71Km8oGphvz9iE3yUByUEbB2CiiPs39FXiekYtzpqoB",
  "key27": "28oM9uwxersq4V7fFx9cCgL5XN3zvLWkQ2ikBLLyyiYr86ipev12yae8jrT5zWpQHz8G5C2zapi8pgDoN8vfPrih",
  "key28": "4ALBUhVWrxPkrDAxC81TRAcWTPZuj9ccrYJjHtKLLDkCk6kRkA733nCjyAgHtpYNGuojpxX4o8MbM64pBtCXnBdo",
  "key29": "4DrLxkbNXSnSMgwMZdfkUKKNDDCQ6udjJj4E8bRCaUtq5TXU8YwU3FqyiuHZJVnuhZ5CpdF564gCkj5KvkcDQRfH",
  "key30": "3SEwcZkMhi5XKgS55bp2GcnPYhxuqUE21NVVXCohrXVvC7KHYfyeytJyESMxp8XK2RjPsCg5KVJ3VeM2mHpS1tG6",
  "key31": "5PZVV2eJGeCjVMo3LUBbEVUAAWgxGRVpsQ9rSLy59ibajtyFwnKSMUQZpVoYYKkUroQHBS2hkADpeHzyzSdjHk1D",
  "key32": "EVorNTX1FC6SAf2GuTwsZEDhXVyBz5ZWopYQF5bGQ1rRjKS5gcHGupKCnEJJJrN9mvxCCbwk4ymdsbd2jkHurkL",
  "key33": "44MF1afcUSbwHAiKjYjDkaStLyugnE5SmZcre3HE4RcyB6JBdQadkfpRpnaFqswhLjQiQKDQmDUpDKWeQXiYfwvT"
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
