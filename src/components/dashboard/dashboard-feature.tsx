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
    "2ukREAv9pdW32BvgYfuUuDJGZ7c1FXzrmYDDcbCnbf9uL6wXt1nkdQAwaHWCPxZkAVe5uvbFhYGdtiTFvUaSVE7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62bs1WnDaJfBHjDDoXz6xFStoXjADQXTjYyaTANCC4AhFvTwhMv3PukEEWtYbbb6zKXAoun3jwuufn8uo7UVbJLm",
  "key1": "2F5Bn2Q2hwMQ5ZBrazsHex1nxqoETzo5JnU8TZ54fNT5DantdktpY2tyZA5xnjpAtFj8u5ev37zsuBSfhbGaQkVj",
  "key2": "2XJacH3FR78wLVj1FqYYcLLEeqG1Ct5wHrP2Roe6FzXRx65ktXhgDZrYRNozKx5Vo4TCSXgguVGY5K1tHehikJh7",
  "key3": "2qC67ZLGYRXLLZAkSu1U91679rtKav4oygsg9pgmPsZ7oeCicdazRyLdtpeHsMvEzRjKfcSPyKD8CaYB4UK45hyL",
  "key4": "5eHrFfx84wv56NjR4p98jnbrK4H2uXDuuDJrn9BScsEFxPn8StxY2GUdQ13Lpng32HW8pBUsbG2pL7Ez64wevdtG",
  "key5": "65BnWzQjQ7PvXceWKtmDaWimQQNcBq27tDgZWdZndhrSQKs5Gf7WjRr9bUWwUyNv6PW9jfcrHLv5ubsLymaTAt3p",
  "key6": "2sEnnsQmQXkjcZfRQioy78rPDyMd3LAstQ4TWkgQ661mTR87uzrHKgTgMkr6roYPd3ur8X1LgXv9K7Z8J6yCgwif",
  "key7": "kibt1PPX1aGS4dctfWDQSnSmQdDkNnZ2fsN46EBGqXu3CUeVGV9EE2pDjAuLki4R7bSie2U3B99btGdHuSSxW7C",
  "key8": "25BewmzpEHxBvTuELaQ7HPrMDSUTpQ22i6pTTeBbLxMDzH4xLk4NyrZZyjeKKLKFFzarEBLLDrcGUocKgkwgyQL9",
  "key9": "3k1rK8a2WBDyJgpf6UvaH1eYCQ9Exiay2s4Mw8oRDb9qbW4W4Mgmec7gSefyBDQGTX5pGeGVzGx6i3QghWGKtHxc",
  "key10": "3CK5nbY836GF5ytvzxsnu4VYrGstNeY5z2iFskVBJ65sjQ1oTGnpsepX1hP4oU6oWxoKAoD4CuHejz6KZ16UYN5J",
  "key11": "9XEETr7AbvzdYDzwFtJ3dnRgMMrw5o5Jso6BW1DPZSsTPTWYmjVYu5bF3JjMDw1qGd2D1LzdzNuSkdpjNZxaXv3",
  "key12": "3WM4mjiv7rSnCpfKMBGSAN7qX7ZFAyiFUWmvvrycbbMMY8Jqm4iDGE28M7D6GjgNfv5zz9B4n9WTwcHpGMn7vpF4",
  "key13": "DwTQCiBpc9Vp1H1VYBVqSUbvySebHk1G5RtHw9hfkbZHRXhKM6gnj8MYL4bvNV3GNBC1Kx62V9BvBP4RmQYdnAM",
  "key14": "3H9T2kPdKnL2U8L3iSLkiooRXNB3E8fCNURSiqBYjCfLs1bmRecy3qghtwSrDJMUAy1b5RTmRA3uLS7keqe5L85L",
  "key15": "HVP2LZW6bkcesTkpgpVTXSiLoujUgAHHvveKonyAYiG62TseZBDiCiBLo18PZrdJVYy3QF7PJiJk82g5Rje892A",
  "key16": "8ecYQSTPLhPpF67Lgv53g4KWvm9tHga1epHcwvgn1HjiKyntdbapjQJgJu6rXR8hRDLxNiwHpTRS8x8VNwxScd4",
  "key17": "4RHdiirAkwVt1VLSp5urfszMsVzjbGMVdWhW9r58Z5uWCgdGgk8BofhfZfnJTsnZSEqRf8aXz1k8mrePYDSQJgsW",
  "key18": "37YFfnThktXVVdr4Y4xF5b29wYs2gVRvzPJ9Tf6yJFBnW8gtvsFFe45Se8Ba3LUkD3jQJ5JJmun5QDY5nTo2MLvr",
  "key19": "4Lf564Urzkb7TcDe38U1iCJgo4HP3WTACE4paWABhjXRez2VxivmHbYsZ4NfoX7JHDJVg7CkimSpjnMjDgPuNGcR",
  "key20": "5sJwKTQw9f6sB9xvFmQgtDdDgzkgYdtoNx1SBEuJ4YAjbabpaTQJ3waCPfM1E25MRGasvSKp4s3RmkJAWbCzUQXW",
  "key21": "U3YUBd3Xk9A8oknm3oBDgsNKKZhrBLVgmkeTBS263rU1wT7bKXER9QgzAJRkF4PiecUbR172PCitfwEXykAgDEq",
  "key22": "2vr9ba5ggoMP1MWTHx58QCDiv2KKVYGYhDyzMXAMCbWbAiTxsV3EMhijVbMAfarZTxyNANTF47GPbNVxcBL8WnwR",
  "key23": "5fC2gCs6LokmfPSNSihSudYC6U5J4ao73oesjRxJ1FiaLKqkKLBLYG15mWqADQAuSz5xgp2rcc8BLbxatPraMLFT",
  "key24": "44nzeTGj5pFCjChVbJ5hTnqwbZpspKBEZ1jwhrQbiAtYDpdoAGnm9ESZmGqUCyGzKvwWgxRjBJs4wrdukcGZEXcE",
  "key25": "4wtDbdM2PuZQqxxy9H7bmccEAjTXt3r1MKGHXytBgSVkHEm5hcdSMr1ekudfWHhAUmTLvEoAnEcfC3N7taCmTusm",
  "key26": "WNybohYNp8inxxYpYeK8Q6c3GsaaGfVQdA6LkX8GgRyBAEEmpLue2mnBQFkfeWDpjeoSma1sRLbL9LzqYnQBuzS",
  "key27": "5oZTCKcVErmsKptXv4WmDgnee12ZrzTEkLEERG2VZkdJa5XJLqBhYVzWt3Hs6uiWp2B6tpBD18QkTKccq4ML1ikn",
  "key28": "4wR4QBz5pCHEn9QX2aLecPe574jp7nnLNQtF8sb6SAVk3hnkQ8B2UUQ5RbqrhqhmHJPyRwGDXKxXMUgq7rBVYfr1",
  "key29": "4D1bLM3nufUiEGG3hU9CaiLPyjf2cLV6hShLW3uKkdoBTwXd5aqJVvfCptAButuMknCaP2838DFgDbe5qPdfPQNH",
  "key30": "2DcGbbrH3MEsd37UMjzCZcnpzJ8az1i8HVX8jb4PPc9nbTYnyYwRBmu8GkfuXTJ3uyTs86nhUzRyoRzfTyw31qe2",
  "key31": "5MQgULEer81WrDtd14zmaVcht3eKM7LtX3J6tV6WxHfrGJy6Ft1PuUqqH2GMwKHiYcDfHZGbGK8vjz2hSd3QEA6W",
  "key32": "5iefxYLEkiejbd72mGhkoPPRiobSEuSBCubhJ12cScAqetKBpNoE6C1m3cEMFuaw8UscseRtNUyX2hvsuekfHzSJ",
  "key33": "5vEQ811UjEkC8zXhrTXk9qBHuSCmz67AbR7nqaj7rH2udmHfLiF5YJTmJegVW1WaQwXKoxJorEhS9bF4ZFNF5y6U",
  "key34": "5bHQF71o9gR5bLALfZzV3iLrNe8apGPLPyrQeGisjiH1AtoiUtryeHXiRgVmBHFcDFi9S63RzKMt6ZZ4GHg665xx",
  "key35": "5CPwbpUdsvGA4P9kvakJ2nEsDGBKm5rue5G1QA8oe9zWQvCouWvjMpbaxt1UYbudC9i2kZHSpyYc4NCptVmkBjV5",
  "key36": "5fffYzKFy2haQq6HkBYTg9QfmxA5v8VyCxDKWxSLYUmdaNgCPLikNS66GNzXgtHNHQfqHqaqca6q234LwtyMHif1",
  "key37": "4WLeZxsibnoiUyAHvCfgGfJZyVbW1XAhhsFPXd3faxpu8DE9CFoJf2285o5U89LW8bBRWCSVKBGjUW1YisQ7ZvHU",
  "key38": "2X4mCDtspXwweX7kdgcKk2KzgJ89GYws2tGZWx5GCxyQkzBZQToXvUpktBN1v6Bn7PbVGCxpGA2KHEYJAGmbWaGS",
  "key39": "5kPDiwWa4YodPQeoE4xHKk7oe1qfoAHAYYgGHi5wDgbcnxNx2kjzxZiH74UePPe6EatU4xQ3EQXkVDVCgYdeVUQX",
  "key40": "3uuHMDKqtANRzxC1YcNogWN57ptEbLoqE4VZumhum3CAXQSncAhT2FmdUNiyY96LCq4eq6PePKnKFeubd9noiuiJ",
  "key41": "3aJUcXKDaWfPSH4Gty1dCZxih45R8nXKshU3oY5hMgPubVsJQCmcm7LJgA751ao8XrysMjFFef5Pn9srH4CX9DYp",
  "key42": "JdHU9JRy7HQLZCuhj9N5pRYjWU6p7ZxxB6mQxypJxzyVxa46gSxPBwGJjvYzfSKECuydSrsQJ9CSqHWSbTPhHSd"
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
