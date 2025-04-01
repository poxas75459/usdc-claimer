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
    "M6Q5wfNMZmsFiFyYMs1wbPq3Re3k7ycfn5Mfrse9hkDiDNmfYdSFhRUs1T741soL2rYryMYAbHwVauNCHj5sVJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H98z76DiqMv2nbDayLToBscgs4nZ6jo9B8JsZYkHoahAZdWJy4yPzhu2bcKVKWQeAaSXud2vw9myisRgS5ThWYC",
  "key1": "66EiTKuJ6AS3bzqWr2iGxHanGM2yvDCgFFzBUHibgqLMru4xsDs1mijhhpwPp1BeLu1wmWkUnc9apJ2jfWe4aczs",
  "key2": "4TjkkeXhsiBsMAJppvrMNJEWJsYfiWM4EvTgveGe3eGKKRuVX9JikacqLAjmyaayLM92ZqmJyEXu3ZwzfKxUhQKY",
  "key3": "5GmkRRzhvdTHb5U9sW4ZEXjc4vG2GMQvkgTG5g7nURh8MBP3anEfgVFkkewY1SGgLVp93bhg9xQCZ9MaFpgt7TFP",
  "key4": "3cXoJSXDhJKk6kChLFbMsBB18XzuoL9D5kgEJ719x9gMpGJ7VSvwvbhiQxBw8rdiLv7EpzVDYJv5Lh8ZFc6LKzHz",
  "key5": "3erHvxLBezfrUr4Ewyz9XtD2jeFuFa49e9SvS16m7nWNdPJW3LPoeMa1pPogQpUsLaauqWpVbsyd2SPqnmTqL3yU",
  "key6": "Mddc2m9d2Kh1HgWdaeEeskAtTTxgQ7qoXgQgUmD798ugc1cHT8UZU8AfWXhnaVp1V22T7AyJCxSnJBA3sq5VTWL",
  "key7": "4uZiMwti6L3WdWzgzpWPZy1t5oTixPnFcxSBZYjau6tXxS3nnUVVMkR5i2FDAEPyHG2zjDJ9QXpSJxrN4W554hHq",
  "key8": "4kk3sRhoQVhT9dNdKR4fzAgFxXsNsu46u46HNhZ6TEERZPK1mjXnv8jZDDPUBbxdTQa62XG6kBq72CCQwYM3FDee",
  "key9": "2USRutYJ7sSqBMWiBKLJJQUrjS2QitsLnAvN6X6C68RHU4onC88NHk8nRBgLEi87k6F9V7TcTC2tWqKEXLqz4hEG",
  "key10": "5CWypz33M27TYwUbMyMh3WZV7QxFNcmpmag3BSVMBGe6iZmeuGrhMHqH2CmJptyBHs28HWJACB9PFXWLXd96oPXN",
  "key11": "5cWVoguWAhqQeCSubmr8p9BTkqTFTcDx8D2c3ovConHasFkf5V1WuCtFNKvbhZqXSLJWVTtZ7VPeLUhbGUHf7bbU",
  "key12": "5Zk6iWZ81RwSVcZeo5gf32aaHsEuHsqCkAad1mDdrar3DSQRouEEELC8jdKNPqor6YxHRJnE7xpQspcLQecBqnhZ",
  "key13": "2xEsBz2EMvjzoiCNkuDV5o9A1tM8GVNsXXCmr6qo4ezsGAnBsY8engritNWATznEuirPoPHoTuWTNKqQFeMktMtF",
  "key14": "5517hScGJe9oxEnz39Vixg7sEkTXfMvDUvqWqJBmHyovZTGnd3MTQbv1nuAcMsozxBDrj61y6RCKxSgC7YUmva9e",
  "key15": "3shbCAYs3GwABUWZkSxk6XyACfJpxEU6gNxuTCbNDpt3rCsGJod3cc4yA53DRspKP3B7HcMwURwcUyJoux4bXbRX",
  "key16": "UxvVFoCeC3bsubcPs7CkCaMMifARZmbiJ69jiMta1Ys4CKL4v3XeFbS1GfeBt679f7hqqcsrQrWPSqQa5cDNXqT",
  "key17": "3q2DbAYrfafd7bZjDrqiye8kBXbhdeaUp4b3xhqFhAPJRDKjcKvgnir2kbz7WPTkwvcEQUjictQCnogZYUACU9td",
  "key18": "36VArnBTdhww3CqFRB4QWnRwtouyHJW7XwkUDgGGqhwiHMP2qJA8JrBha6dVFMJNaJWghGLLPQbzNE99T7QztbWc",
  "key19": "2mohyP894997uB3ZodXnv5UNrPksCccrr5Bq1LCKZbeGbXhV1RYHNPVsX8p7Y8EnyCRdJStFPevyFpKgM4uWL38m",
  "key20": "279i5rZkz6SK4ZMPweLcusvibE8vneTSbGkQ6hQjVWG91gYHehKLLC6x8GcRrYvhhAyfm5kpKz9UQHgMArMiKWmS",
  "key21": "4qKacDg18QEMQGixvJRHj1AdWFgHG9fPjnyAnnCaZNYyD6szVWxqjihts2e3dvzHD3aAJjrg1xKqX7an6HBGDUXG",
  "key22": "5eFHMPtraGkoGett6wBd3mW7DhWwr93kkTdws1wMhKYphyP9Do4329XiNCWwFGUyusmLTW7LjiLh8oV6NCT6XDHp",
  "key23": "5hgEqQJFx5wLdRgFiK2283VwYy25wL4Hk4YXYjiWegT6jbPLWftkVKh2gMdDhAvwYadDuc8GGZQe3EMfJ8USzN7w",
  "key24": "252bFo1fFDqG8FkeX9Y9MEuit3B2rU5vhsjF2AhYtvBth2dbbUsLrtv1aiaEjXuxDmbpVQ4vLVC6vcXDRftN4Eqj",
  "key25": "3WyQcGHyfs7w93dgS3KFgfKDdueP7eWApbeirXB2buPWFZeoQhnsouvvqeXUt8rxfECPJQbgsqwFoH5cssqUn2w3",
  "key26": "5q479Sg5S4uqnnFy7QYSfpzVCCUn3aRwNDmDVv4wp4moTuZ1o89x5pQ18f3Ky6Axj6zYUJpBDfkN31WUVRgQKDGZ",
  "key27": "3mGmfWrx8zTPZWQRPaYB5JSG4anyChUfsZ87t5wMB8pkHVffEbG8jL4t4bJEGR2D6YadPZkxYzM9M3u8GWATpNoq",
  "key28": "5UGBRS3kmhXurHeh4rjrctnFeb8VpUcxDDYdB3cLN229y2w1CyUQcgJSpWo5srvUvNpJzyB3AH1JLY4dqwW9HGPm",
  "key29": "63TvoRSSv8aUg5YCNyau48aZFvhNY2t7PE7m744LMxcSTTD7YPZYwZjxEKpq2b8JdFZfwYjDr8ZcC1nHLLgRoUet",
  "key30": "gBoGgV4mPy2tPgFGFqVenRu9FFSryvwASEUG5XUjxTckvyLC96rBfng9FvJ4rzcV8FVXc1BimwN6hMYCyGS42ty",
  "key31": "5goavsRBwPLgtDed97Jbn36iaRbY1Z9KgzoV4Sx4RW8aPbjrL1ehNLLxyNpuvNTsDRd64YQusc91PCNpSAoxQ7J1",
  "key32": "4w93H8kRr4BpWnFRtqG8mXZj9PoyKNmvnnvH9uZhCYFZ3rsTwDdqMMGqMPshFn68JzEsb4YFpZYeABsqhmGw9Srv",
  "key33": "5hVLLpitm1ZVsdPyeoG4XKGC9q429Ti4mMBNCSbAKwtMq4wAdQdEZbKy5b2H8oBrbEYTSAhkRuRnQqwV2k551WQs",
  "key34": "2SjYD9oQzYCb4NopKZpU4yUuCdr9qGzeRJsCJ7hhhj6B1jJFC3N6JwD1WNnSn5JgMVuKTZkPCbWkLedVBuhCBpPK",
  "key35": "5SCFwxyCr2RUHL3w6cvzFKkrJmN51Z5bUx84dHUMnuQWjtztLZB9kPcVCFXqbieAJrmWVVXThQdiTseiTXcjp5Hx",
  "key36": "3gZxXVWxnv1C7jy45eT4BxhF7EeAdy7kMi1b2dfftKmb4DMyb6fRZvLUC79ESrwhBTbmqrDkEwrCNtcSUuvg7E2n",
  "key37": "61dVsAS6hjw6WuAgELdEgP7eTNUaRzTMDjDmjYRx5L9BBWhxXL1LRYJdfKGL6Rw3Sg9xA8cFrQWTtbFWbDncH6As",
  "key38": "4P2xNQzhAuWm8anNhFn16QcHFzkRRETUunJTcjTsJRWm6rzZtd3MvpdTbyBx4MBmAZivnpmZXJBTdDv91WhQ74w4",
  "key39": "5y7qb9AkcZtpihSRpoTkVGyhLVnkGnQfu1YEdaxaKaqsMDKTe6FnedSN91kK5EQesvw2j2X9hBeyy5LaZHEr3ibC"
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
