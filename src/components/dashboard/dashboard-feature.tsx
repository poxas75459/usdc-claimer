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
    "2ffLqJEaEyYQzxJ4PGSco3ahJpUjQjgxJbadEViu3GdZc2AmkVeCWP9LT2BBNoemfhH5xE1Ye6JRrEj2j87GQS4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45PdVFD6ecoMwAdAx7gRpb4Esx7vUiDvWWJtSZNx3GmuyYanuBCMJh8AthhyL7TW1EH2N2rJX8Goq6ExxX6SxMJ7",
  "key1": "YvtKiQwcVwLF7gWS5xsjS6mtRdnZMR1sqWW5QTPmVix6C5f78C7kMDEeak3WED1GkFi4mg4yGUUAV247pGYJeve",
  "key2": "3xwkjx3Wod8eA9ssJU9Aqc2u7K15LidE7KuHiWLGALhjcMKc1aWJadzKDoj9iZVCkZWuH4w7rKgNHPbiPE6TRNoq",
  "key3": "27gy3GeRNCcgtRnBdMkyQHibhhP167bgzEBhLPaDLNfsjdeTHBctXt8GDahm2RgZ1AeretoXAhi58JFAxtg5M5gA",
  "key4": "2qzKB3Qx5nMemsNvomL9wexe1CY8WY22nVik5TfEkk4rjXF8Bs4jQXay1PTD35Ao3Cjz8TTqtvMA1wocxVBv28Yt",
  "key5": "5TfKeJETxc13RULHyQuvox9WeWjtr83t1BMPCaoas42XdekrpFRqWAs6fJvWHEgVisR9djuNtdrcAyRCZUMxBd4L",
  "key6": "3QRwMMbufnwxRx4Q9KRUPX6oUZmRJbhzbYLX1EdG5EPaSMgd9NZeXztJWgMMofLsDXX3LQpZJywiNMDeC2E8jCmw",
  "key7": "4oggBR4b3CBY7XQKpNLdUwmjwJyKqqXt7zzte8nHzNh5MYL9cUngiAKcXessaF6vJWS7faqgn36CbKJ43boti6Sd",
  "key8": "41KEUddfDsN5fWTgc7S8TeibyKPpfYZts4CXWVT8RmizsbsKd5RsMcpZTmouTifSo2pm3bEcdKHBZcan9XSaViAD",
  "key9": "2ik6LgNKjBWDsag2A3RY8Tq8xz1j5UHCNzrxvkeFJMXx7mGryCuPGZS3BdmHpeVmhqVz2VnHUKnUzuDGbeWmSrY9",
  "key10": "36mZAvHnyqzob3KoRNcLg4kwKFwAPtzH5mPNePupeEsSxVNCvQ49uR7huwsh7jgLZRh8LTVci3dhG2Fd1dXfUkdJ",
  "key11": "4ZvBDDFHpHyHHT8SpJC7pKSnKoxBQ5tck2XJd9FUtWv7vG4WCzeFXduez3FbYZ6tBuzeZU9L1Xjpw2RSeQhJjoH2",
  "key12": "21ZvsFi9sbdAW2VD4fdY2CqbgGmhxeTPJRn4UpEB64VvYE2pykRZrp1G3ZVWEMjRTuQRWiBqq4PLLiCjBiwtDQPv",
  "key13": "3gzf8rwS7putZffNQXEEv5Xo1qbcCfPfehtpDJhvS9jSR92BrEtFWvUqjr3G5joWQKfsr6nuBXttNisJAfmpPBfc",
  "key14": "MATEaUhdVvmkfNAACnK39NochGG4o38LC42KTavYY7ubBrXkoAcLSJctJ8SDWA7T21b9rTwtgDh4Z9CJJXWCpKa",
  "key15": "2Urfts2wtUKisejnXaXLvsJeRfowfLfjMDcVQoCFXtaNCKo8pFBLot3qhbEYyjJsN4r1uTN8P7ySok981j6CAxaa",
  "key16": "2qh1tPFRqrTC437aSS2RKhxSs41FfRGFiGbh7p8u9xhGD3T6D2RnEUYVpkVL37m6vvUsW8irssy3dKCqwjwGCB8o",
  "key17": "2js6LASCorS8HReop6tAKVcGSaFWbak6s84QJx6JsaHuhhPBNQczxACLq2GpTAtpPFi6SVySwVNfzQ9E41aPPw9E",
  "key18": "2QFmrjNB9nAcVs1myzThptBg4wcc1TrbKdRxxu8HD5D7CzictfNeMbUjKAcYG6dm181jWc3F3Fs2PMpFKFEHYBMb",
  "key19": "2XX3Wr4ekbPNkY9BCn4CLRJGn7YBD5LeTzw5jnLqb7bP2FtrfGoGzvnf5kDe4NyxGRYF5tYFNDehyEqTkjLFyAS1",
  "key20": "a8j5GFBWeVvs8nWdK6fvSpkqHazKYXa1K1y5z5BGC2uCxE1HwMdPbva25rWjfSKU2Ud9XsQ1frdg4D67HvN7zwm",
  "key21": "2Z2WAW2jpDKr1dYJfnPs3EtzjegBsjoFkj3Hep4q9YfNcF44cqhrfJDpCGZpSsnbzuu74XknjFFjDjSNUKTCcxPL",
  "key22": "RdLWcndQqVtzzTTZktGQKsyp6DLPhk8G1yiAieaM6dG2NoBNK8R2mDNEt937QYoboN6vGmsTnAbecSLFip2boyz",
  "key23": "6gPXMtAV2dncZt1E9rF7C3tqh7cktq1NWNgM2ZZgC3M2YsCoZqES4nWD6SNmWYGHuXviSSJFvJFLaD2jRekGA9a",
  "key24": "4sDDBD64HpHM61rUVagYsSQDw8g6ozNLVKw4Q1A44w3cyshVXNMojD2SK72Nf6viD5YroucYU2SRb4RkqcxBAgJJ"
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
