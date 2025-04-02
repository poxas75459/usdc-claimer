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
    "4ETH5dJtmnML1rRAfQxLa8DsMDyQDv2egzYFf1YbCkrjKi3bZkhxDRFCZLUZD2d8umCmEPeNfYwvczVPWD67pSV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cHQ6MWh3T856QjfaTH68tH1bpgz7ZdsEpj2KbcZjQYGtd18C2SMcE5vsyBg6dhUCXk85PGKQ84DSX6SwVqn672X",
  "key1": "3TeA6oM2uQi7arrY1UYY76Jh3aXGyJXAcWPVj8UUpPgUG7Ei8adQBUqfmYaK8Yuub9RkXpAiir1UfTE13jqyjA6M",
  "key2": "mpZVrXqXDHnPbRgM2c9Kbuq4S7cdiby85LrEAQYdU26uvWk7VxRfovtGNz6Zf3JxpboSPHnvviZkomtHo2BsYfx",
  "key3": "5wwQfLHH2n6KbRqxTscqE43VKAWQHVXukFLBj7HJoV7WBWmAYpT54VdEBwGtTbX4EvpER4jWFEzTAdXm1NuHTZ2o",
  "key4": "4piXKNcRoUKDBdjCJSXkkqtXkMnu7kt7uoYADwiTbXMVKexEvA61kXSnZwS6ZzeE9XrFan6ZrYvZQ2wKWDDvWBg5",
  "key5": "5TftV29ey9NBj3G25WZeAzUygnBNb5zJmr7sKjXg6iip96jxJ9JqYPyVisVLMXUw8T65VSQxZkJTBfAFrVY6xfGZ",
  "key6": "4bXgF7fvEmqFRLu6rW3iZS6ebY9u3ZsfMTCDe17kXxcqAtv55FBsYzNnNaCpPfytJxmyMRZVgK3LkFM12JFKu3cy",
  "key7": "4b8CmffgRe5eUf38r9mmprhZksPP3pfXZPhM1wcdC1hfdw8ghdEx8U9WD1y7aivsX73SeQoBdho3xRm8XMyRbZ4a",
  "key8": "2G39a3dnCPswe32BzCtnxUQDLV4YhqGhZNmBk9NybWy9XM9BemPbRW7UkVUfvvDaxiqavzbER6FPzvoU9x6ApvkN",
  "key9": "39WE71qvCGo2uKW4ugh9NKRcXqUdfB91zdaH7JAwKq9y8ekFfKD766gwtG51r1pvygQAQfEHaLyZaHWtnEJ3Zdvs",
  "key10": "4fTsrme7udQuSWJcMwCBaTRiY89dEmMLVoY62LPHGD58NweaMszchTWdFtbo3Gwn4nWTeZHnRJx7LijeWpk39wb3",
  "key11": "hrEKTuu97zbWX7tdTm9CD2a56D5oQY9kXcGMKU8uh1YtqC7MTPCmSSfoAAPUnBKrrNS69kmK7z1UQWMmtMfj8DA",
  "key12": "4HW98LcKJiJBU9Nu33UDBsEyvHky3xpvaWfsp4aDL6c9bDVAm5rgqyWaKwJzTxjLH12iDkQ6ws528YCozKd8metE",
  "key13": "3QiHXLJVTrG54Wb7QX57RrudtSKHjKsXxANvi1MX3MoLzTBqnwsR3zqTsj6H5R2FmDdi8TXjcwNCnshNvXc9ZhxE",
  "key14": "54R1Z6M6TX8171EUEpxyz9k6YR9zLJrxn5RcdFi3xDFCwpj2p7hsJceKP3vbQ37GVSdHEshAJWPzP1CEzfsLoM8H",
  "key15": "3WjRL9AhxvTqSseYd8ALLsj9BXHPvnRCP7dZurDZDPmd5ew4NFE25e14XfT2ysNpEYihXyfoHoSrD69Pg8mHqUye",
  "key16": "3wiSQkqVS73oJP7Mxtd6BccKpE3g4ZCnAdg6i5A8Zpm3Zu7xuHm2g1RKviFpAnv4iFAjWSaTeUnwC1nKHWvrbQJs",
  "key17": "47DtYUqCb5mbm5orXoN4CWMePZ6nuufwxdiyQiBpznXTYgZm4fqgZ2UNzykL9fDDrQ6jjsR6hqoWa6wg4F4gtKXt",
  "key18": "2KZFoSEJ4X2hBhzEHfUrCBE2sT8iNoM4BpEzhpY9h7nDEbDv7N1uegC8cJMnMk4HNU8EP7jLNYG8uCaZFXyFx6Cr",
  "key19": "2f9y5XhsiNHG7N3NkBayqNMF6muyJqqgtBCdLsDEpGcHQ1Zgza5Xba1ipARQkwdLXhTbXjixyZMdoQx8EpAktkHD",
  "key20": "2YgPZojbn6s4Sprf22xpD6c8FgNUJyjAkTuvCZDBAb2Ym34QxT6rxxS5fYcJK9nn6gMyCzdnHmXmTxK8UHe5EgSP",
  "key21": "2BbYcbpHyzaCPuXjWbd5YwxScrHtHrRwQctajuKVSCViNgMhHNZoZ4f2tpjKKqshpj7BnpBCHTcKcqZpVyBWLx1S",
  "key22": "5uVjeiETXMaVz5okwT1FKuhQFVxpjwzDp2t71mFi1xWTuyPrurM1xSTuMXHsD24rxbwXVSe9uNRkLorKgsNxLXXo",
  "key23": "34udtxKHUohu8KghhUokVU65xWp9Ut7X2uhwmhtdwBkAAZmNGSnjrK4EifPBzswheKGd7fXdJKGwUYBMCs2kyrfE",
  "key24": "4jAz1HXG93woacTsDAUbApb3PMpLzT4yvKta5PsDqXk7RgpFZPXjh896fWzPBZFuLYfH2a52Lg4fh9KB3n3Sgjfy",
  "key25": "2dkrmjmeKujxkBvfWaQh1oN1VMvZUhGFjkfjYoAAtYJThhxvYsKgy9PKESuHZmce1Sxb9wsmjJFUZyLbuX34F56f",
  "key26": "3PBNoyycxfeNPqsxFYGfvMJ3bKc8e16PiA7ZSJLgLXto1cJqswGsL3QbHuTUBReAz28HY49vz8ij8MzhkJCXabbE",
  "key27": "2sz3k6WkwytJyoAZsrsxNT84hQn2M8jUFdrXcagbDwY2W7CawjcFXXwhKBTFjga49PAwv6LgCj9bA738Edu78BhG"
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
