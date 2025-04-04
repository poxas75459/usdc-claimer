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
    "3ji1Y7ed3H86DkNrtGw2GkMrt4CB8Ckoks8SEZjpoyrvHve4zUhBNToEiksowrmWDjShFvA21PwhCncb1997Kfi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Ap8qx5bKiVW6TxfeL9d3s3aArCBitompH9QgX1pJfr9R5bSz6A62xgGEnohmhY1fQFSQXhXfCKZCwT2wNJkRCv",
  "key1": "3N3Aq2YuHkH3JSMEk1kfXtRwvddSGgWU97zRaJbAK6TvMZyYnE66JwUtifiFvoRTk8apqwUWswVhRnfGAW3uRowT",
  "key2": "4jATonFrN1cerq7BEWjQseZzWP6C78qQe9G2dRdbHbiTAmy3Q1JZD9WbHew35oSeouHoNRMfhX493ujhP2hTgyB8",
  "key3": "3kqLeDtprCvnexYC4kMm4qZSrZ42Bnv8BgpxXrfugwiRMhc1THmFi3KGQH6xhFZDsMKAvjDhXojfiF4rmCPaAth5",
  "key4": "5ys33YsxAZEQbnU23DSXX7GSeUp2TubrirnFVgsdeHSeKKpmsHSHcgcZe1sPhN2ARfAPZ312fLGaXcyP8pUpo3um",
  "key5": "2GmUPPjyRhavbjdmAt37KJgsj5MCU84oFYedwvKT9zvnUAtr9CZDeWzjHTGk2AjgKXjMVhLNMKKjs9DkpV3CGy2",
  "key6": "446zNKCkfckdTWJthkHgZ8dVCSAKhk6QdbtXi7fk3EB6bd8yUxekJNweBTTwAxRRARdQaAoY1UVhBNnfME8hQaNm",
  "key7": "3TV5BQDGbj9NSJB6JHYorsPNUddnWJcjnrEfK382Ve2VaUmMVR67kZU6QZesjSXuxmT1PyWUhYtKanZ7YyGp2EcD",
  "key8": "5xaPbPehxgRxeXiXFWv5EWhRrwHnUEW2qv2JVCH7NxeyV8CmtzRBC9NrkHpVqgTu28udK4oxJXs7Bg8Ek8nNtXTD",
  "key9": "25LWCmMij8FUYMEZVyunrHjkYxB8w8rh41ZwBYKj6J8MQaXsgDhAc63M4ACr2jcwBKCgFZVKhSLnzmgR14gqjeUp",
  "key10": "3yvT3fnHm3xCmkhJdUiB47v1xdQCirdnxqSu1eCoy54xucbeYbrhRgpr1HyB6HDPuC4g7qnXoJd5UzGxQHUYPikF",
  "key11": "311TdvKbiPfXqtWBuGWMgkUyLd8wvpNVzEbtCoNb9VrDAsXqFMphyWFHJDk5fnSZHVnZFkAPdrBsxNXyR5dboY5L",
  "key12": "QUjXhLWVeM6pidc1rhWrMRPvr8qrF6avQsyf4farsXGJjaHpCX521YmySWDYs8Fsjd65A8vX4YSx6Z8emUsDsYP",
  "key13": "GrQeeh6QDpwTcWgnZBASfNY7BhtZ12h5ubc6rsX1tZkSGzQHMWgc1xLLAzBKvjRLoCoiZKvXebxoY1osLqsUrQs",
  "key14": "3jG9CrnzRaWTgdo9GJmYpJcrESeJDMpGveBaNHdVYTgXyDdEo6sEmwz8qt3WBtdcZZ6GSh4LdMJe5FCrmooka4Yw",
  "key15": "4GSY3v14AMbNkgoxocTFtaPw5ejeFqkLnLHTYjynQL3cZe5rCoAATqM2Eodvwqg33W2yRNBJ4cskVbrPQXNPwMqx",
  "key16": "58qZ7DJKkQhAAC8TSUpmj1C9iKkaJsFTbdoM71vomYJAynfUwrv5mxGcf12qSmmoQeZfgDtiHRXcRkW5765xqpaW",
  "key17": "3M1pMyitwLuh4HYAmFSo3YPLrz1EoPZawcc5f9HRE3nLaUYLMXc4URDbsodReCnWVDoinRdKvYvWjSmkNcgN6u5S",
  "key18": "3hJjHiqdbU5Fini3wXFnxYsFGDWj1FWWRJ5ShiLqATqndSefNN14VsKcFY45jjcW3P2jbGhCr6gHtkxwXv92LWfp",
  "key19": "4HXomisHXrefNDmMvWp7cLwWmpy6zkMh4jqGDWaqAeUCEwANfKSZSy8i37QVoLWMiBBR2BtoRH58GEd1AUZ1YKF2",
  "key20": "4WdLjxegqbUVEwZKfrhVfrXyvqmaom9r2GkvAvrK4csgvDnkVZaSLS3WKw4ef66Pf8TnUuNup5DiQrRTZfKGgmi1",
  "key21": "3kVHz2PAQoXSUR1rTNM3T5NWWuEuiPu3h9wFG4F8oaD1cLEpZfYszaJF5nj3rWANiNuMoeQx8kcsjvvDrABa7J7U",
  "key22": "4fGTsPhUREVF4SvpX6QBgCUC98yrGfie2VyAV2n58TRzvVxQq5CE7pFNkBQu8Hs9Xz8dBW689q67g8NQsHuC6CDb",
  "key23": "3T9Wrak4NQju8eRpYj2My6uSPwSE4PbqkuBjyH9sFTju6hjwzddDsF8H6a1hY3HZxQyzSjxHn3oico4kcJ6A1yVv",
  "key24": "2WXunhPRBEA85HTqkVmNbtcQgcY7ZVSNy4EhjsH3rWznafCEj3cvirBmndLzGApf8x9Kr2dPfyC3NupCTesCS2L8",
  "key25": "5L8SCr4fRP5bgywutBpqfvKzLA2Ds4oMRaWUP5XhCUMKL6YDwjdWavXMv8jf4CRcMfqmq6uKLD6k9FAfoZ37LFdY",
  "key26": "2kebrZ3X2a5CZ8qEyL6Z8anMHqbCoKsoABL3zTJFU4dTwYnygqULd2kSgAt9N5jpvMrLZAZzNgj1w8YqLdXEb4ob",
  "key27": "64anPf9koBCSDjRjS1FHczfuGLyS8u7o2FspT1xsmQPhWTBoiWYnt1Rj9J9apmLQVjXHzDgWn4fQGmkej154HEWi",
  "key28": "2bUNLuKxKeQVsCBJKB3Q5npKWaT1YnRbiv6CMBtuXouJFyR38Nt56uEJF8uZdBuvgPQmdp5pzYFrBNND6d9pN6RZ",
  "key29": "64pSCKCGcC2dj3iWtr6X2Hnn2FNK2Y9qvcV6QP6PDN14KrQZVASiphQtcNYEN8i5P8T9B3jZW5EghnJxxxUpiQWe",
  "key30": "5Wj5dUnc1pNFEcVAn9Q6EUooVTJzdAzQe3y6qRfYWcYM9LfW6HSAPy49qeon625HpBz5w1a8tYhkH9NZTq7DcuU2",
  "key31": "4Vp9tZ6vUwFi12h76HQrkNZ5UrgwCH2G3ueG2hvTgYHSvxgDxrmXRwdHfmrsRaHQRQn7vzJJJprrfV6QdQk5carK",
  "key32": "JxVVnxNW6ZACTFFbLAYyeXWZFk2vh7zBK9i3Uj2gridWG1sYThkLuSm3xXavSmRqTHgFpNFAd6zsV9gR1b58n9D",
  "key33": "YcAH4FxE8UajpqoG4SLfbp7YjcPoi8mSzExxpmu7Tbo3yhUZSNWcGACGAXqS5UnTy5wD4MV5AoD9p1bqQjnob6f"
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
