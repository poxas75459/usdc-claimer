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
    "2ybVijaGZh92o2gbLTtgNPnrB3UoDriFsm9S2naKdwKdfWdZufQaMDWbeCpsLmSru1mqW2g8FmseYPwUWGR3FWSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CRiNrh3Vem7beRTh9NMNA4ca54MDp1NumRH32XBRuUCUsyusfAmKcsWQ3b1DeVGe8jnEYiFZv8StY1XtHuXsbS9",
  "key1": "2Mcfs3TWbvPA5RFYc1eMgrciTyxk3xqgtRKG9QopPJzonrqut9CqL2Sm3F35zq6bBNjsAqVP4YK9YaYcGCcg3gQV",
  "key2": "3dxdQtuxSHPbL2CCMAJgh68Npn5aEhiGQwCtpgKC2kPEbaZshUSou4AdwicFdwkJBoDt8gqAs57991Rh74LkPsMp",
  "key3": "3WocChYJ4HwRDccNpkNwGA8PYqX6GSTKwEzS8nSS5ESgdPRMCF3a9FTpRxj1CvgcAc8kqtnLfQTZswi5fnGsDF4X",
  "key4": "2DpTQ91ZmFKdx5ZDWybpBKopChTn9pEvG4gUtX7qVgRbsjnEztpbeWeaQQMurpYvsW7L6eZK9Eazvv4VPRc72jrw",
  "key5": "XHkRQsjgS86QUczan72r8PkqdvnZiUBsLhYfU3mvbEfSdifAeb3U9rtFtRAA6o83zPko9KJV4KvpiedMwUeWUTw",
  "key6": "oTKYSsdFFi16vtfk1UTfBDsXHDcT5f6TajK2u6sWFuGPAYTxnCUpXGdUzNSUPzSSrgJ2YsYWHUGtuyHViz4Jsrs",
  "key7": "58t83fsfQvGMVzQLUrR1KQqdwUwHkJLTDPydPmypnSdNBHUuEPd4APL4xTmNHmRWmNY9vQC8iBoFX7gCbeNDAFJ6",
  "key8": "3GH9qmcoC3zvwq3JEgbVaZaHmYtxg51JmbHTd6N4T1iSCbmFCqAbN9Seboy1VBGnkZ73BxPaLBYbZohrgRJvkvu",
  "key9": "5f1hHAZp3wM5DdXWqzmAHEnijdL6bC6rLGB5fCU9aQdL5uG44K3fCeiceJiMnwUPXZ5z2YrrpS71xHME6eqsHXpT",
  "key10": "4VUUFcrmD6ZCxWF99Luh2ai4qZZRNvRU1CwVLuXpJcAyJkhV9kmLaBZG2fmaDGVKGcWEucvKr2cHz8iAqAqHa3gy",
  "key11": "CK9tCLX4T1pb7uBB8KFvB6hkaVrJoiZjW7CMsTtgNCGh73F6rjDi7HyfQMhUVQc3BVgRNnm5mnwMWkzGcmu3RqR",
  "key12": "UJY18wxRmnqEuzJTE5iRDeHR5X34mMBZkSiHvNJmJj2dvAMmH5iBhfbbjVZWGacF7sQB8BC29H1hvWVXHFwDzu8",
  "key13": "26rRkvJv2QWpDocNp74RsULxo7h785XPjFH8gS1faTurK5gUmim4qhDmBLETSCR2g3PSt1RTQWnc9j9NJZ9ou563",
  "key14": "4zdTwVUSSwtcbKKCCrjdnS1LFmyQcPk3MfEjP4r7UfA9bhTzFZAT4muTWCRZ1aaQ3PP9eBvqT4M65zXbgcRhDYY4",
  "key15": "sxJH15cVuvqjD9p3Q1q4MCWsMCgiSqL8gJB3Fu7DKugAPpGqwizfZwjErvieiWPj6yWzMaoPLtLoGPT61rQSaey",
  "key16": "UAa3PNZF8dbjysutDvRnEC1tAJy19r4Wo99hCZz1Si64graN8NVB3YzcxSJcGn61aGqxLZRGeqnWXWb89R8UttR",
  "key17": "2amemLqW6mzJnoH7J5DFaFLhCPhVuP9eBYQeGyBTJov4Dk6ExhQrDcfoL4XG6b6wqqh1wThyS3xKx7sQHZkheyZ4",
  "key18": "5k45zBrBTvHmJjfTJ5KzUf4pe2PRvnP6VeKFohbvF2oRJS897Db7n6zXEctigF9HPe27ELZxHUQjWctPMpzuMCWq",
  "key19": "2KpznQaA5zLbdiQRaQhBoJoaHfqDyHY3pNWKgNBejypHsLVDWnLbNVodyyeSa7aC5d3drsgbzJG37TUTjQ3oQKy5",
  "key20": "uEXFxvoZJxsWafq5RN7mumHHkFAUhkQaexxVZUp61dec7AqjqFsNGND5AuVyEQpK8ADoAoyEM7WTLYEa2TyUcHq",
  "key21": "mDzkbz1qW37sfJXmR7iUpAR2rinZBHQ1cYG5UTdenAbqA8x5Hny4n3KXoh1E9E9PBLYxh5Cyboa51adqp6DXrWq",
  "key22": "4uH5evkNemxyYTvcsUfWYPvgbViyUAX4k87urXyWKEtobQjmstvt888NcfX9t8z1cPxUUZ18TwXWmbC8r6q5fTQ7",
  "key23": "627UewNynbpJQKM7Zk9sTfQcaDe43NZnoKr8p75WEZEbGP91YZo6mrw5yATrE9WGNWDU6PsBhxgC9GrfDgHeLCsX",
  "key24": "4pYdwrxQXK79ohWGXcBqLs5AVrgBEVwY2GiA2vmMTemN8E37T7LbFtpgrs9HqqvP3Q27uQSfXSfV84ERFXymGcuh",
  "key25": "5CWhTktiyYNipfrabYb5nESPpmnbXf2AbwNjKWimz6d8qqNX8CRk9zULdaqfGSitE2vh7AXoETaRfCuPdQj5qSkn",
  "key26": "4rz8BZX78atMhpwWcanKarKgUXFUw4B3WVtXcaMPPchTF3DkYE8jfM6TxLtZH5H25yPtvNnukt21GdToZ3dFQoxw",
  "key27": "4B6ciy5krb3F6FfE81z6hNMMtj5BzVDpSkVfrLxeb8PB61cGkgJBSHnd1W2ViT3hNGbvS3cHDGBBRoVZqCqL3tPA"
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
