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
    "34PDuAxVSoZPZ8MXmCJxt7iP9kH7ghgKiBzoC8Zeacy85xNfWtcbjvBSb5LCgMqYTvvCquR68gu6pgRntNNUxK9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EAKzrubUZbTLfxQ8YGXZayTS3owis33PMtRHfRnq31w1x4VntHD5BbEzejfXfxvrjip2MGDXei2mMBSb7tyzujZ",
  "key1": "NfnKtEssiHFwnGuEyEpu58e2SGH2skfWYsmUauXcbDpQHT2z4KteiQSyy3yZgbBff545bsA4yvD3MiqohezXad3",
  "key2": "67A4w3AcD9JwGWbbmfgQaHevUPXL826zV9g3coY7FWfMqeP9Z1nE1HVBxKYyfLMDhiJmS4v8HccsptDrziZBaupj",
  "key3": "x4hSaPpKMRqHG6tUB4aWXD8jKLyWbgNWyvGiJVTSdXJ2gtyPXkUQK5QfAKDMayNwKNhxr55ho4xppm54wMTyWXy",
  "key4": "3Q7k69vvSA9jbgQYBGNY9Nw7XAnFM74NY4APfrqgXSBmakY7i52HdfGd4ETXVP7JTeMv4McZJuH5XvVwka4eyQiK",
  "key5": "5uTWHhTZrjhyJKCheyVbXm5GuxbY4bDbLhpLQvpss5W64DUJDgxAvepe3pdTGrubvukj3cUR2UF7D9a5vreNgYG4",
  "key6": "2be9q8ZqGxtZX261nFw9rSFCgut3Uvhs42HdTsY8LTo2ws8ErsRCptRappFa8qdeN351tJkkY46NRyWBPzjLApTB",
  "key7": "5ULe6rxqhxgveMN42U1No1DbUSxwqKkhonaLoq18Rn9CuiSaLjBtgiPEEczMWim9zN1sEbf13KS43eTyvBJzq7P1",
  "key8": "4DhSUj8WnMvFWwts6iwbBpQqnGH4Aa4fYt94UPKqcwbt6dnansDDwcWns6HN66pVkNJaGSduyjxqDEXtv3rwdb4s",
  "key9": "2NqPLxmB71D1VgcVY85EcVnhyFyJJR4QrEMrMUNj96f3gro9zosm9AwhiCnk7gAReyTbqnJBHxsLqJ5Wd91hQQnn",
  "key10": "4iFDW4bojqJ4QQ9vZYxokKFMQ13u4kMZx6M3d7MMdR6E5dYEcBHXf2G8fsXHZyj2MeB7hbsZgGCcGYXYRGMMWo4G",
  "key11": "2AHGC8LFM9VHDKyedgoL9K9kSAovrShsQSRskbwvzFYoKJ35vjYen3st9TFGE3v6ywHQsNuVg2BqfpXufbBic5bn",
  "key12": "2XW19BzqHM74jvTSUbXNh5UV22GbrcmMzHhamSQUtoHFDvieLyRtjp9yeu2HhGyN2tF4pDSvKTNKJoa6oqFmMnus",
  "key13": "3NG81dU9z1Eg6htbw9hxH71HrbAcRG2y5kqDZWyJGoPpTKYBxpYjeumxpkyDGAoH7npocKwyWvt3K4BbudKR81Ex",
  "key14": "4yn5XeVXw6iTAqLk7eeTFf3Ut6Q6ntWtpZuCuNSt3QawU4to2mLNsbhoVeaZHnjM7WzWk9ZJkX2u3uFyjjWkFqrm",
  "key15": "2xGJigjPHPqAnZnNLr9ZUYyUjsidyW2nL2jnbk4qzT52WpmCezKadMsbofQ96u8cqmG8xiMoLKGmLVi6fTJ6D6x7",
  "key16": "461Rb7eHGC8GVxsCedmPztqWG1qoctUSm69yAbVVjFirrEn5x1TxTB5z6aHdpvxw4GPiyspKsBNbM7p8XMB37Mcs",
  "key17": "2E3kLc8VHdA5TB41Ytn9BXrvAYsRmV8Jon8N8R6YksnqNbQbdsAwehjdkM6fF1XHzbco6QR8Myf6zbLr2oSC1mq4",
  "key18": "49tyy2U3jejU7RGenCa7tgQp4y1VuRZsJ3cShGhhFWYU3EbcYtTtLeCfvVepxY3GAkKe9eEC9D8m5bmnDytJjS65",
  "key19": "5tg3bduabk1Q2KKYHfodRa1JByqi5r8w2KbK8FEDJpfqQYsJ1DSobHf3d6rjBFARs8MZRzwZ7s8aNdBDYYThk89w",
  "key20": "3nPCRWe5jDP44iYsRdzSTLqufardFqZRtzrhS1rAavvyyJLWD6hk5MGtv3KYyY9RAndsWUEjSJeoW8WSWWQZnUbN",
  "key21": "2tZwahufnAWRULzUFtCb6uYa6WeqXmv8aBsB9XpFPYTnQ8vJZyzkNT9y4G9qvPyoaGpV6RRwf4BdiFASh8Mn6jzD",
  "key22": "56JCZRPoNkETFfZiivroUFc2HCX7Gvio3WVTdkbCPyVXijifFNcMtrkw6yVgQ1KSCnxixNAbHJ88GjQXR9kct2Gk",
  "key23": "64pLe4rtzNsNzUnKv5kRAaj8q4W5cKxTy332EnuS5CYFTG42f54cBfp4aonv6UcqfRr3rT9Y8wo2w338fjDit3F6",
  "key24": "321BMrG99fRBvHu3mUjpX56swMi1qnkCpbeGPnjmkLEeRzXtz3iavoDYieoCfwiyPgxYgm4aQQWAns1Lphzz5ppm",
  "key25": "3TbUwPMF6HGEC8MyUadNStXyrcSphGBjpBMRBTTxemsL68JGBxenMjURwXd36ihpXcv31U43pmYaeQmTcV2QkPnb",
  "key26": "3567dN3QTBWFAhACF6pJEq8oZrbJdJWzgddimDkNHC9swfhZb1FdeR27gEAt9acfJsqXXUxVk9Vqa2HLhVp1F3fr",
  "key27": "5XoTD4SNDhHBHxNjTQi2xzprsHb7eeEHfFJ6areZps5MLLhq1E5VHQEWTFVSCLQFbAjnvRLRhzr8kTTp76VPP5Yh",
  "key28": "QbsRVxDp9ZGRQbuR9sBzB7uCLin42ebsHJ292i7nLrPhmJj5gtcdTJu2dtHRBGv1CGQX86SoWnFcEkEDFRn5NXT",
  "key29": "3T2oYcFZD6iNGR3ZxsgijXQAUwJWxWaC9GY3AAn1qmWu6bRyDyi3oMEKNxvMcmshYWegiXRYE6i4HrrV4MzW8otL",
  "key30": "5gAcQ977GJcRhv1nxX9SZPWrmjvVwNeNtb1kDmUjWcS8C9bYGEsdRfQN8u38uacTPjsoUdg4e6mzFMptpAZAkKjD",
  "key31": "64oHrjTMUuzfT3e8JFzQaaVk1cZCNP8VFch6mDigngzxWhbWH16AyySYshbQ7uuHobf5BRRxtmJm4FNE2qr96WZn",
  "key32": "5AfZT3XMQ9LptxQ8BRUdpQd6RBsYJWXJ6mdtNNjXTf5R8RA5poj7qLKqStjBwzp7btamvD49LRaR2inya6QtHJCF",
  "key33": "58Xe2Ct6tNyhNvL5cXMJ7gboJFG6GZp6q1Q6rA8M2P2kYu7o4s7NPv42hcgwK4tvigR19YkukGhxn5KQ2RiHojLH",
  "key34": "4erE8UQNoBv72o8a6PBbWmHMSC6hm1o5kNrzxDpSJiuMYFZU4uu4h6hRGSehyEVjLvN1RhAdL9QqeQuogvfpM9V"
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
