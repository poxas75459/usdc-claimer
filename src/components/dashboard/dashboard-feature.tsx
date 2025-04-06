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
    "36JesZmYnYPQFroYXbDUkQbVpg3msYcBGVAZAXu6KDtRSNbXbEEKLnV3d4xCySUKngjDCBQQUqttRMPPi16gyLDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46QJccuhumG8VtNvwyworu5aWhko7ka8wg8xMD3ZXt4CfdYZ7FNtUvAC92YTRHoykGmzFnBDGXNH2zFjRpkDBo8f",
  "key1": "36RCMPi3u7GnMhgqju6YYBoynKAs9NWhHdVJVThRYVG9YsRT9kRSfyrbMP1Yw7JUpmQgsGSxWtGTNYaZtVkjqQa1",
  "key2": "5VnacmXcoZzY3LwDoWiYACL1wkdTAUg5KLxygUeEmYoX2W3MaapePjHvtRrD3wBhSXYTQfsvB6FKHfN4qb7z1rst",
  "key3": "2FSMDwgyEHRxPtkef5BmJ1RvkfbUCNhow7tC3FMuwfo8VeYrt3SQgV46LF4BQzwzaJ3n1cQwttic6Rze6QQiqoS3",
  "key4": "PDnAzrYDVBKEs92DNbvpd2koFm73XpBnWVyCmYGubKrquBtFvpGePKHuL8uJJRQhMckTxTzyJSAiRzc1wWwSdeq",
  "key5": "4z245GeqBJVt53rifXRMYEz144gDZtW8BgCu6CLrwtu2U1RSiyP86y2qizpwgfYSetopatxKDdwLi743tzPCqgGs",
  "key6": "3i14oqenYxtafNtyTMfNLsb9oPJyo7RmYsVQQqgr3eBiezmTEak55MfgssFetxzThiGwEsfyk53TZJL2FgDUvZhe",
  "key7": "3arUuyHL65bz8rLBvXEGEMzMpBHsAiC4J3wrb8m1TYL6sP52syxuPrMgN2vGTAmycAJyjhD17cc1fu5C8YgQ6mQ8",
  "key8": "2SivsJZn64HYLk64EwVAxr4ZtLaecEL8yCMoiLBvkyJq1ppbSxcDRub4Rz73Ra3rgCfHMJSYdzgwqkMmvCte3XCF",
  "key9": "5ZKAJbgqByXYfaXJhVigxTenyh2Tdyk97KkRh3ZiXsnTm679wnFBadP8c3pgjSiBwrG4mj6tpCRhCRdrkX7H83sy",
  "key10": "3x3XzigY5x4zpZBGPD6Sc3AZk7yQoSQwG8eUN5Z9WyG7Us5NcWYn4Mvd5qDbESxXtTbPKB6M9ysR23fz9zmu4U3A",
  "key11": "2c7vjdbMQJF6WCKCApBwko5fid7wWy7Rq9w8jnDFWWLguiR1FTgKUrnkeU9LWtb9Fww6K3P7Uktmrp2qRprcDPUe",
  "key12": "2FRsnhpYv3s6N64xUEKtMmeUAKtmKAmzSANnCCMR7ceQgdAu17z4gfgomt9M5f9Te14gtt4Vo7xtSGjn4j18Zp6X",
  "key13": "355Bfa9jTQh2xw7SFgT8bGExbtd8p9ANGP1hZnrNNzwZrHDDFGfm7qTQJYjwx2hpUPgjjxJVhvQRQTFvDjzLjHQp",
  "key14": "4HkpifVJoNkuz5ZqzanmBF4E7kKt77n8g2eUDQdvDioUxWQzCwawnCHSRZZKMDkjqxAqj1YnBg6pfuL2NEdjCHnS",
  "key15": "SMjNe5BcEka9YZ4vfHwKzXPASAES64tNCA5J9i2LetxcQCRF7i5BHp4uLkU6fs1zPkufM7nL1GUp9NYCZswKmh3",
  "key16": "2gKC6icwmgLbMXDDUYE6tNdzxW7hKpUwdifQpCGtGWS7aHXf4wqQFdD5fxcttXunCtofB2V7Kv5RgUhYErLinxFZ",
  "key17": "36zmAEjMtmX8j6DGSocJHhj8VYxtdGyUVXQPwD8s1FZDFpopRi8s3TkmufPktGY7KwBgSETV6pcXEFC355TJV8pK",
  "key18": "65fUy6fjtxx8qgDz5zceHmskQ3azkXLqaqU8Yrscj2PSdo3QGtbQ8o35NqzNCFY6mHTPYSeDxqEKimDon1dFAACX",
  "key19": "3fRGwgP3pT65JvYmhc6v8UqDGt4MrVXbEeTBffmyZ3nQGQYXNEossRnZWnHqwH3AqEd88fReRMVEjGVEjeM2LTLq",
  "key20": "2D8tgoCLzfARTNBc1dXArmEMSURvaKCpbNumturamNCJW1eMcVoFz8EmWkqbabNodqiPJ6eGhEFm4WhpPmBDyTAB",
  "key21": "yBPnsQiqB8eG21dYCJbavfEXYfGKm7ktmqzF2JEAXhhZ7CeX1WHppG7RtqnJk7wTPe5f1Afn87EPAJyKpFkFDe8",
  "key22": "2hgdnzn26PfC8EabRz4vnEwfcoCpHkzTCcsUekwyv2j17xbb7srQC8SymD7fmyc9VoMUbVbmmMiQQgj51dL7ZE5w",
  "key23": "5STTKHQXSfnp42m8eST34h4yDGnrzZocGVnaBpyX7PLLi56ugumyuJrw4yDMGKowbY2RffP4chBCHAQFEgFaKdQR",
  "key24": "2LRXG6fkyJZASJHTQfTNMTMqK8fsURgd5bKR9ffotNujrjsLWhRzeqBhzhcy1mLH3apAXU2qgZSpbefdag2dxdpW",
  "key25": "5FRdm8k6zUVHvzemAjv9XECGXgk2JJQK8kXr163JqoatzL9dQuceYrp1AnXpTnEJsnEDY4WdG8mS4Nk72LssieMq",
  "key26": "3w6QqtCGvVruxcfm5wZ7WojFBwJLY71oBNZAdbir3BsJgjcC5sJN3NAwYdEsuGZ7S4FRe3f4rjcDGPZHtuHQu4kK",
  "key27": "5zm1K1Ja4Dc9sf7WExbtVd4ygJoTQob4wEgSvHRcDYNe3EyNQBGUk6VZHHunGuh7TZ1JuSfNHsRUtZodKFveZAv7",
  "key28": "2WteGbqEcGCAKE2HVTq7bfvVPbXWjdGheXTSbtB7KKCbTcHrL2tsiDgf7uVctsAgaoRkN1brnoizG9nvKcRj5RkF",
  "key29": "2Qeeh1ZThicQRSQF4crPJ96YjeRkxWi2rybjScrVmZVKbx1iwG6fvSj9b4CGZvEibYDgsb6GBN1VzHxcX33QAicR",
  "key30": "4W4WnDD1fzY8jTL1PqyZA7R1SuDpmM4UMd1BfdTnhPeBJ8SVdc24PELJ2NpVe5JS1F6MnDf2fa1bf7bwa75BKi2q",
  "key31": "2M5qHqS7gg9yDJKSj4BmGZvCZbS8AwZXAfMFbqWyHqzrcPssMCw4RvQ6HJxsiS7gHs3uJ1NfzW7Ni9k1xxL21kDr",
  "key32": "3hyNfpdoVbRnJn6Nj9waPMu4SCkZLNAzAg9BTWgbWuovxXjCdL8wW2WdY1Tw6mUQ7uCdgFBXuA5M66kYPvdEctKh",
  "key33": "4MFzCWzaTZAtrXSj23jb92WXA3TJ2j8WS11xie9zmSsvCGWCt7WcuQFZfeJNe495C3SzKLcv9quXXf6bPSuBP2H7",
  "key34": "4qph1xAgxgTJJJ7vPcvwZAkUCoqTWn3UDLHrpmuy4Gr8wGnUZxViuKd1TVXY16FexpdgjagiivJQinU6rvLxkxFw",
  "key35": "3y2S5y52Ye1WwG2rXkMFueDbQGd1z8hGxoT12bidiEfK63QPaybQYwATrQ5iFkeMMfShVxHxL8EaqTv62MMz8A49",
  "key36": "4JGGsSADt28Bp3qDok1YEDeQGVduEVBG6dQkTfwcABDATice9mum82LpwhLtjxmPSyMLnMNa4TLCFj8KiGdMGHJ4",
  "key37": "4kYeMjZTMnv7BYoii7QbuJqSZcuQarFyo38oimKxj7ihhQezsNvZDxfar4yaRj7BDoQncpXZaphCp8NZQFzktrn5",
  "key38": "5RjMWt2wSoPJta9paSfTnqv3JuQ3BAMSewy8R3Wa2KD4qUZENQEpoLNPnToBFap38NYZZcfFRFZgKHneXHRrETXP",
  "key39": "2Q1BUWy3GoSRLEHNkBjnoYQwhM3s8JdtUeAfEeP7jPWwKjQUKRmbmaUcG5MaGx8upXS8rrcGw2iaDqjZKdMmJq54",
  "key40": "4y6TwUQVf4GRbk2FZ3hWvn296H6UwesvmefBLzJPk7rNePw7Lp3QrZ9ipBjR9z5tSYdfCPNFVeRQqtuHUNxmqow4",
  "key41": "2rbkbnAgrmk2AubNqcZQHFPgey2svF967eZPWiTFCkpVzFspmkxcYnHtzeaQrUEtgDnqSUrvuEVn7ohKiVMCDWbT"
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
