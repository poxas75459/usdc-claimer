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
    "3AskZmnWDdbgGGKYB5i8jCS4T3rmvEfDru16Fm7a172UXnzvj741ghP7kpQjmxYnebKvSLvWE8oyz8oZNSAt5aKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZmNVxuGoFi9WX3gJxV6XejELzU1AS5q6Nj42VofkNtRq1Ko2MKCqtP2TijC28pgZ1nKR2qoprxZw8iD5pWE6DGw",
  "key1": "HM5yXBix9EG2uu9qBZBKUSXrTTYtMv8VVjqQm4JxgkCy1cwafabTvxc8X7fzyWF6rDGH6L5YMrvYDN5jst3i74v",
  "key2": "2wSx1SSnJhGatoyMPExjZa6q4eZZUyV736jyFkmyi82xGuyE6xm7nhAR74k5Z4TvJm6NSXDP77sdRjuTHosoAvwT",
  "key3": "3NivsUYTexzuXFSkBK6PLBLzejxNdwDpriqMbwaoEtXZCRhFbm9CbN6hPDu8eohcWo2aBPEFTKxQba5JEa7vp45N",
  "key4": "5dprqN9XZYpHNHBqJH9htRrnxjxzFj65oScVikvhduxTiNp9FaEvDw6vYbBmSxUeihNA66vinxCTQ3LhnDjW2TBj",
  "key5": "4a5Z3CedMZK68K7iUit3SZT99kwNFssKoGiFT5es7466eVMHiSjPM3Cc4KhPQeqfPavojKJkQXEv1JYJunSdW3mr",
  "key6": "4hA3B6EcLjusS3eYHukHGQ6v889dyi4oz9QVDu44Nqd7EHNU46oxmWFcjgcBuFStG78y5NV86JFrSkEAD1uEXYqV",
  "key7": "4xKssbTxxmKiZyHePqCaWVXXukA7YaiR2J2m4gtjrMZbujRj6svVAxHHnxEznwDCwfWDQwEvYWQyhxzFkNYHGZuP",
  "key8": "U87oDLrCxhMah9Xxm9Yqr48EYSRYgNWMtGnHXURiQorkHPefd7aCyq6oCA3MzbzP4r3gtK2uTLWanNpxhZAbNYc",
  "key9": "5rUCawK5nJoEtSziYXfZ4pgHf15uc3YG4uYa3u4bRmDVVuiYLyZ5HsKTHUkhZ3cBSmVyjZhsGgAjgAXXtg7mQQ1x",
  "key10": "eiAo1qwPirdqL8CV77ZyRMYjdJuETivk52gqb38K49YicASwYNYcPU6hPE7iFsLQpg5uazRArfP6V795j7xB1kF",
  "key11": "Xb5PHCVbvyURA9ivFhuVgQc8FvPSRaW8fPbFCUnZ2eyPN1i8pUssaadGrm2JxgbzDKsgoNNEGfKyhEHhtiajdN6",
  "key12": "2qvTQPnvhbw2wfAviv8mWcjXPMHqKaWZ3SuoMpxXZaf8ubnzpzTLWJ35oCzpy8NcShU5GAoztfkACopfQ6tTaP7N",
  "key13": "4mjgci7vyTgRomroTFqoJUD1G8ZHhCxQ4ASZW8VyY1tRaZviNoQsf5RUrmtnTbQNzxiWTkdwAAowLmSfVj2h4qdY",
  "key14": "63hajPqXn3b7dGo2NZUjKzYRLE9eEKBuCSDQe9PHLKZKYyJFvT6e1Ph4Dtre8nr4qfZRyX2iGjHL27ieVAySoF5r",
  "key15": "2r1CdvVCrXCCd3c7ri8dW3xZFt2iz37GSnAsh1xuB9oi32Wcob1PbdoZwHjDkaDpDksye8t2rBYvuJ2fMNZDZm6S",
  "key16": "3qyxBy2Ar4QB8Fsk1pEJbxpeUcDG62eGCkG5ndFBjWiYHYnzYAYdz5PwaetYSYTEUHmasy29C2pEiZMoDW5PYXYy",
  "key17": "36QqRpx6ZBcePMHnDS43KBgLHjyDnrLFnj3fsEyzC5NxURvukmRE3bTZPVbFfhdjYC7B61XvhNSMwiCabub9Q47G",
  "key18": "4zRWCvC51D4YDh9PWmeo8a3SyPciRR2X81TvBDPiWcv4iMwc6C7Q3GupuAE7aAiaAhzWSsyhDX4BtNambJuKoDzq",
  "key19": "3GFmoGFMtY7y5X64gyFY4rEFfkKpk7H1RbEQjmBB3bekgRvfUqupCcLHC4hysdtRGqW55r7LL4uoTTDzmhPHaSyQ",
  "key20": "ti9sxgSHiJk2DTPTm2nNK3xk3ypUWuR1n2nrVRCp1H9KXES8e7b7GcA1Ha7RrycCXnynKvQ3xP4Efbvf6Ef5CNE",
  "key21": "3Xv6pfhvX3XgEP4QZ5ZnuJocDTmHdGdDzvqJ4gZtmZR9fKdDoudvPGA8DNgV3hzcjiahGhr2X9SWJkXCmMzQ5fyB",
  "key22": "41ydrMnvN6qQt4kBRxKj7SApzyS39NhLqAccQsMotJXamZbLpdSmRkL3PTd6U5bHUU4FRdZpCvXd5nZmQtrEo3v2",
  "key23": "3hEecxpfxaT95CV3w5zrqbHpeZcVcsoTGQeBXeoGdXG3QyDPDbojHAstSDbt6ZtGUWEJVkA4oX2zEmB2cVCL8KHN",
  "key24": "2Xo8PPEJipSNJED7vFhUkgBJfJLeTrJivDNYYJA73EibekEkyRQWTGZPrbSHscDGTMSiGWS3ArSzkAakAmeqxqDW",
  "key25": "5vEkyQSwR1jXMzyhYWJsiVxUYucxegDoeX8wuZFWwysvxsaQhUEm8KqGJHHq8eF8oEbJoyLAzZU41qwdgBe83JRS",
  "key26": "2Gb1vR7x7aRVzDWqc31ogZaHv4FKkNPfhHGz9upRLirjtsNxRxjVhE3S7xWEf3Koz8EU9C4wm5re44yjF3iCcMH5",
  "key27": "57ep8zb4MMMU6vxgTEuMLMDPn4eujcHWMCvms7sdx5BqC1XJnPYadyZQXfivFdLzZqGXwR8mx7gEZHNycaBjFDRv",
  "key28": "4JqUQmBTPwJRK3gAhP1fs4nmWgmvqBxbPUGwsBy4hRLMK2bpxXAT7WFdVKwPWeSjMCnRhBpSL3fJE9S5ysa6MHE3",
  "key29": "Q3BUSNwvXuPbuSKjYfL2eTxYDpnmWBbm216QJK6eJvyuYzWkWpyQZ9puAwxZCFryTdFEbQcjSckDrX7krcmNvMy",
  "key30": "2RfYDmK9cP6HCfUS1rZ9oCFfceANcjoheyhFfhZCev8hhHV3H5HCxkZUHFa9HURt685FRGrv2siZEeFWETVfzB6U",
  "key31": "388frwMNx3peQ3y34ajcsDbPjUQp4fv62yXhaVTCxhHJ62ajP2uvAR24QB3STjdm6MzEe1ERsMkwgBDyPUAm9vPZ",
  "key32": "qbcouAugZKvNVmg9MMFxUMU6Re5rZjZJYmZr5kYVAzZN94VyZ3GRRouvfv8oAji7LUhZvFLJqYphqHrsBoJc7m1",
  "key33": "56k5Ay4PTq8KDXQtUiSmoGbBT6ZqQhLShEnnBR5WcZ22DguuFH6cWGxJG1Qigpj4tY31mdJya7tK54w4EQ9xaPY1",
  "key34": "53ZywYrnLW3eh5Gss7jujWx2MozuJ7WFFsoWe1svkeqNwQgiEceucGDM8UQuVfE4caiDHYyQYXKgwCkHHpNsCjbV",
  "key35": "4tYpjAu9VaojtHTxoV5PSGvj4xQEh2dLUW6VVuv5bTUUpHrU3GZ784PgLsswTWZjtRN1xVaTxKmtSvxK58v2oZRR",
  "key36": "5n4hb8vxUtZjDRkq8k3refnNzfANgFb9KuKtPuu99HDVbG9GLyYtECeBZUL33MxMPw7EjKXCETww5UbayNR33Wdq",
  "key37": "5SQL2gtn7hK2wRkVSvVxjrKiLyvZr35DExJucmJNdELovAvfH54xkoLLFv9WsudEm1TSis3LPqS8G47WaAdMxGuW",
  "key38": "2ze3hefvqAJ9W5kPiPZWjxExewxZSmxkE4U8ePV2FjQPExN4rQmu3c1USr7MveAZbQGmVTmneiyeh9ksjs49yuR7",
  "key39": "4RWScgsejtgt71HXrdd94Px8rTyEFnKg3axnG2VbcjfeFtsf1N9MT2vo3jYQf4PS6y41LZw8LbisFKjJnEUExsLR",
  "key40": "4w7zMHU4RMjtHGa87THUfeGg4k4gAYUBstvAwwYsSim3uWzfiJMawPnsneGC5KeANka6A1WyD7UMrdXUdohkerTA",
  "key41": "2WpbKdRzRZ8NXBAhGHHj7kYgtcwucZEjbvR2feti22wFoj2RED1hKTohGUXwgFKLBv3c1ox2N2CZM41WbfXnZbX5",
  "key42": "38mhpM5U7dDk67bWCEXvfKtnk8jw8rcK5tgK1ZFAtn6ds5CawK6syJUVKj5t1s1RQrsszzCxieSpcdkMYiZ6bAZ8",
  "key43": "3oEkRTWVp4s8aMTN1qpVWF9nVZNaDpmtgeqWwzs6deGhGtDzg8h2MN4EWEvAkk2BSaxHAHhL2Q4fuULb3g6ZmLQB"
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
