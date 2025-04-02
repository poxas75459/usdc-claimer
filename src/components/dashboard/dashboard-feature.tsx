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
    "38wVKwjGVoBRwcHFuiKGh3XPTMDHYGdHC2wC1peCuQsCoybNFJtNvYarUT5hoYAVPuuX2EP9tcJkv8VTA6C11JaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n8nG1xRi3iZff1ztzFLu5xfpdzudiWHZTLd7prnQsenDupFFmpUH15aCLfkF6wAJ11Jthm1r4XSi7qjJ2DybLMz",
  "key1": "4t6ZEBZjLwWwFSLwbcvS7DadSZ7jmBrgUJzDMDdXN4qPKUmCQeXdYFfiYfnNsT581Ewf7VvRndRGs32NXTsBY5ys",
  "key2": "4r1N5PtGQgsgxbeiVgejSZdJDKeJzt57UkyYvnoVo735TDWvY6ixzSZMaRiQrPsZfX5SrZXygex4p8CUi8A7kC4o",
  "key3": "4uec6zVzvnxsjoT8pqdVwp4sG9PWBwXtjq6za1N6y76tMWdBZAPud2Dt5uq3zHhx6htL7hiZKbqdzxn5Sj9UUWe8",
  "key4": "5BdPubgPaZZGrC9t7VxnAY4L6ACevAPycm7pPbinQH8m2BiJAZWgXUSxTR2sEYrY8GFu1j5gzEzFxbbmcMrGEdpg",
  "key5": "2w5HUrSE4E43gbHGKkQL7A2sEc8MdSq5cF97hnAAHYyQdPx3ZPe6dJxvnd8E7hTtJDbDWvKdxoKr7SgNauerwRdV",
  "key6": "5FRr57Zbwyswjed7DyV398aBfuqebeYQJHQttJqGca2oPohyWfnVY1JHRWyxmd42F6xiPjkSiuDfvbkvmKwCZzBS",
  "key7": "2gaMfmq4Bgfq2TdFAxcmidkTg6YmshvK7eJtzH8nzpSbH9vqUAj1xMevptMJ8g8Hc6abnYqshT6Uhya3VxWknRw7",
  "key8": "4BSQZoD1shLU8vnZbws7jU3DJfYuecdnSUG6G3oZ4bLrPPKzGAq5qRywWiNGR65pycYZn7XEKvcBf5tgKSc9cwnb",
  "key9": "22fX2yEkPPEgWAGMCekoZD5o8riv5hSKAL35E8bhS5Jc8vSUzcr1Zxf9pSEr5tr293QyPiXGF4SoiLVGD6GSNzdj",
  "key10": "2SBLAiej8mgH6NJ1Sj5jdBPz12Cvfw6jy7dd1QTyd4DnJeMPMKtvNKzto1T8ye3PxLr3fHy82p8s3HbT6qpDtNvH",
  "key11": "G1oLwDoW4wCnnDRmW2m4DCFyeCUM4h6JFVSKGpjFVqzyAQCDUDqjKSPd3a2pyNBUrw1LG7zcyRYo67ZJNU5HZgf",
  "key12": "22PxCp4SXWrfu1WP3T5VwV586EGTXTfK4YDT5jd7ChAmcSYFeXzpdFtHN6xuYQ2aYZerWkMC6TBQSrVrTLH3FDwv",
  "key13": "5TZJy6or6o4dYiG56oQV3gvV4EkC3QfBo3ZdAfF7JEyVGgW8TFfUg9o4eMx6DAuqMvWXpPj7o8UTcpAaiMcgdjhR",
  "key14": "4GchTM8X3gMhDD735S2DMvTHNCUAkFPpYMMA84cBEH2dHums9QEM92mrP3RkkjecFHj358wueGjhazGerHau1rTd",
  "key15": "u4oEw4FxweCUMBGJH7gpH27azGC1hD5BQ9kojWhPjoXYwgpUdkqoMfZktPbdAyXj1S4yqbGTrf9ch2NWm3rAYMs",
  "key16": "5McEsDp9XDdQV6YDnDmNiNqPjhgoaLcvrXA131MRpkshJzdVh3MDUXeDq6GCKrD2K7Kw3t3h8jAYPSWE1mzbsyDL",
  "key17": "SnuYAtr796FPN2sX4qmL58pMVxjzi1pSnF3g9dBoiUaXihwE7tUpEmqukbPRDUMjhb73bDxKpHVQXQ9LZaas9re",
  "key18": "2pHHuV6tjMBQpZTecy42F22FqfEFdgPf9VxZA8DeRjjNGjwnpJ8L4F7iak9g4jXU34Mw1QHbNvfjuqqnrRcFAfMH",
  "key19": "r5J4sQZZYvVQaa9iUxXdCcrcRxVQ41F1jH2VGs82nvKXvJFKTUiYJytD4BdEzASTqvFQ5CUW6VG1fYiqNQuSDs5",
  "key20": "3yP74bExyzMDvYeywv1rkXDF7hNeNpQgAv7XvxbLLAFxCJLtdGAhEBHF3G8DHdxauqcPekXY6jfi3pyiN6mt5tKV",
  "key21": "55TFhhrYxnz5y8SyePHj7wFY5qoTYAtBJFXm3cwqv4DLo7dCUf95uFSWGQZ6Ksi5CKCajPvFqTiUH8vVV9Sf94DQ",
  "key22": "E5GPWKE2xB8JoToaA6F1TJrkVr6VkQQg8teeEWuaRbX5WpDYrG26TX6P45cfCkgaiWL8QXxDSeZFJfPc9KgRyWG",
  "key23": "5fNpzEHQZqyFRaXYFU78EHcxT72sj6LX7vV4Fuu4ZgY7RV9vDTxRyn6YuP1hSyY45L6TbYeVH9oZvEe5fVoCpYVy",
  "key24": "47L2X3hax6R6k6jvaGA7c6ojQj4bjoeKZYKBg91q3LXjKAk45jBebDnUMWSW5Zz91EdGUZPp99qJyaQThN9xtzC6",
  "key25": "2yeiMBJTwCYyDKm4VAEEcRMtudrH49hZJoz8DxDf6tJ2Xfbr8qrHijENoeNwB5DwZwTUfUuchnfLqH1WF2LcVWiK",
  "key26": "2GzmND2MS59QSP6cDFnKJ2D4tup7C8WkiqMucAwkCQDipd9ZbmjiFCs6Q41J6uEZZKuZgESRaU6T67dzQJH7aEss",
  "key27": "Vrj4Ubxtsphzmikd2t1nuSbqWuTm8MENZrnnPfy4CzJAiSZx1THeTUepXoQrsBTWrrXmVXzWhyQRSXpq1EzTL7u",
  "key28": "3dmrRabNHgD1kQrzJyv6idrqZXDWxnH1mP4JGk79KXUySDz7VfgQCqhApqyRmvYP2VbffJAube27eMm2vLiWAAxd",
  "key29": "3Lz9A29fwqW83wY6yENtm8YvdKhzwX8oh1PtDtZxt7y15927Kick7ssAaxinJUab7eA83XkW6ks3kinh2c3P1vvv",
  "key30": "3x4V2PMnsqQi7hj9fLTLufpUXjvL8NYdc4mnMS93u7p3FUXhCdW7TkAV5wGjD3PauJEBVW3aYsRuufzzUqPFXvm9",
  "key31": "2qea6XzrmEaq4o5EGyrE7nrKULYSP8nta3fuJhDs8nwWJPB4zBSN4rSD7ABPH4ur3Y4uDhPFuHJhbUPiUiAeTYB3",
  "key32": "5pgUkHdEqeYn3WZknbeMx3gzoqVhXmQACTxDaA9S23YafxRJEuH2SoUxHRyrUvn1mLTSKpdZ6N2VeW7q84m8kYNa",
  "key33": "3YSatG9sUCb9rBy6Mpyo7djkfZ165wBSxsfwXrnnXMXo4fV6CQuUS6WU9AbxK7HFQShEcDTZj1Fb6d79xdfZBbFR",
  "key34": "4Y2LYH3j7Y1t2ktfsV5YEQJkXk2yYK3n1P69E56XQeX42vX4KaJSaDznWPQVeCf6uof2k12mKoftp4HqCXx3crN",
  "key35": "4fAwh2tJtrLzSGC8Pydz2nY2mDtyPnazXC9bDqtiD4V6AKSGFnRJeScwmoh1PDdw4Y5JpWxyuYXzY3Et1NK4xQs",
  "key36": "3CXwTsGHUR323sWLEu58Fq2j5tPCZQQ3eE1Gdb5dJehMwp6z6XDgxZDm6ZtJkQ5AypyCffLZvLCfFg2eTpocw9Vx",
  "key37": "3zLD1LfvMMwxqPqjJivGwSwqky7gmDSWPBAbdQXycDAYjVeAB6tZ1RHiparix4BRGuMy9Qri3EeRncaqV9o5ZDjN",
  "key38": "jQsgAaKeeQCmWBKNTkyLEPXf7ep7YwJ7sin3F3wUUZoPDT6JANaYD6Sk1VTVDg9MxZ3MyLkGYJdeqSxFNjxUKoj",
  "key39": "3KpHbXh4D8cUbcXyf6cL8EWE6DFhP6vUALyfx1APHTwbDYqpdBxye2TMaxciCqKDAmjhyLJKj87yTeAJwtmASn4D"
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
