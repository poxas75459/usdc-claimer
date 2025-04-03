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
    "3CvdA3PrShJN5fV7EgHLFVZTLGW2XsuN6pr5rWRhnZNruj268GRGWdfVp5BAi996x8PyCYYRwzJSWKB86oZjVxPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fgzfaQrJA4WM9CWHdwCR5UHaEiDdYDtRsd27eLARqviMKPRUoiFFbo2Y6XSzj5MwQsHuvrVNMwAtjMVMYR7qzK9",
  "key1": "3spEKj9V21xGM2YTSEs5W5dBitW8ATugWtpH168rp2L7WhqydHqGGEvoabqnkA9A5m5AevHwKCjqU5YxCFUN786W",
  "key2": "4jk7mPLknZNSKzCJqSXhZofsrS5WZvwKW5aCszuD83f9nrz4T7mKzstBC4hCds3SNY2aXdT8erW3tgLwpsnkYJZe",
  "key3": "3So9AAgx3okTmHYP2gr7z1dTQvHhkb4HN57i9f5aFu7eRDb8QRSLaX1AjegvZyyznCxrNBttoZdZ5XX56H1Xpo8k",
  "key4": "2EE8F4KtqitkFmm7vExdbzRmQnY3UuoQEhimMAux3mqYMUDTkZphmU9WPppotjc4rXbtP5mGnEfsxaNDQuNfULqJ",
  "key5": "3zWKcUqFgfdCnxWsDPkanYaTR6H5TsbN3qtRXvWcmE9jekfJoh6UbU9GXcabjpMTkWQEApZhDfEjQj42g5Wjoq35",
  "key6": "2C4yE7JvoG7bgycoXPUGu9GVmvKLAvy63fEnkF46PJ5u1MzChK9oL9mNQM8t6htm3qS2jXuZM2pZctTZa2mG6htU",
  "key7": "53eYG4UQciuFXx9eUx5oH1LDdwzv2RHTSHrp5XJm4qEgPBGEi6hoEaGuzrdGoD1rnKg2rf1B8tj1AgH1CwouYcwB",
  "key8": "54YMuaUz1hAVxtsJheWXDBH7cnnaLXL5Lu9PGUrxZAtWruE8PsbMZ4hfvH5swmmAkoYBSDnveFKTMu9GRwmWf36u",
  "key9": "4SvZ3CzmtwnvicuNg8JBdgw47zXtFSdmQfPvSybVQcFZaSTheabLAxTTwqoDBUyciE2fogZ6S7aUgg6pmwjzXj4w",
  "key10": "hNKS2jxgtfNKELGpSM6AzRbS2Nh4zMC2xYCFuBMk1Thx1dh6Q3F7YKEZec9HEmrUmbGBaJstJupcfig8JrbCTke",
  "key11": "2Y7zQTVa3kHstJ1fNueDHBNdfpYBZkTuDKaLqN3UV557bNFZ3BGMA44xkQzWQhmyVmPBthJiWD8EhcKxwA1vuGPC",
  "key12": "XmnWrgDMKDao8yvX1jNbvrfYYS5t9avSvwGEgNraQq57qvPC1hG72QHTNm11f6jcMBn73Ju2o3JUGA6Y1Qmz2uu",
  "key13": "46XZT1W3598eyiHBMkpNaPYW6atsfUGFkFiKYiHvNpxLZDjuhRPichpEbsDxFcsjUz5npLuCViiccn5fkRJ11Fhf",
  "key14": "5BFv2ypj3wDWJojXEqqbjRsocoaxzEC2BaCDtpnxfjxNJ6oZrqb6TMiP2GijzqrLbLGKqs9mYs5XTmQSu1s1P7jt",
  "key15": "4ntHUwLVe7Ttfnypy3yTo87Ye5PpPrXoeSxJfS5nEJviDTZzA8qFE7TD3vTPfCoFNCbGRTbeu7REr6cK8DFa9bcX",
  "key16": "2erQ3YAFNB4CHVSonJgpr7z9JQqRVGzPER2eosPxKfhHydYVm8NmTphnGTbn8wobWY963J1TJ15h9izoySiX6KB6",
  "key17": "5M9swBCVykKN21cdRKoes5nsNyujpBSRWiSjpTBuitfz7re3dmCUqoNv1uF5kd9daCyNjHADzRTnW6DvS3sFoE35",
  "key18": "VCp6DP7BYFiRMGb6thpDEA93aDE3z9JzD5tk5cfh2QoQB4wyECKYqawcXDjEgjfXWoYWbMW8ABpvhpbZ6Qddqmv",
  "key19": "3TzYUzAM3ZEkK4goaHo9JAYumujHKedwUGyGfoMQh3zQWXLD4VSbpk8BgTY9ZDx9CExs7Ern3pgBgvd576pYTuoy",
  "key20": "5gZbwJjn3XSYWcKUg1a2R7jTreyygjZMWhU2Pqb1fnJzaR4JmnqBgp2v2nWEZFFjyDcPYAcsnn3X6kg83yt1PV3M",
  "key21": "4KFMUGAYiWDsFF53D53j2nefvJbDLjFqJGsS7i2NN8pPEGXt89wHgHsA69nwLegbo8s2dQKuwn3ySTaAaTJBkwjW",
  "key22": "4fypzM5PKgyPDd1f8MhMxmUuX8RsK1Wvoxyo8xQLawbjpSaUwGxeejbJv8f1G3rG7hT8pJvzT1YHgcv4z2xqwK1k",
  "key23": "4qMzD2bwpLQThaeY1FPdZFTA48YcPcVvYd8jm388aGJLCDMzJ6CVjMzMyZL8oDHxNJNBppcTcvorEoPyT3xBhMLr",
  "key24": "4qNpVY2L5DvAZczogEBXCXteggNLV1zPVa7nxfaJrRVJVcrNYNNKQv1EMFywHCu2nbFPPWfi74tBDaDKzh2fKCAr",
  "key25": "2avJvB7ha7K4vRJHskZjsNXmMWdSL7SGFW448RPWHbec6qdMPVZjxAJ3kBxiheEvGF4XmjJvpsGDq5kLnjmQrHsG",
  "key26": "4s2EgWB2YK1RvAyhDZJQfuDsCVce5XDtmM4f8k7jQrVYjw33fGeTTzcUtzmzg7RHzm2HjZAQp1qrZEHLGBBfiNaN",
  "key27": "LVJxrF1scDUX4YveAKojzGyDi7j8azvHViRm8yJCk7sFve7rfRXtoiTS5T4z28tED3KuN1UQXrY4kafaMYX2BbB",
  "key28": "2KGtL7t1MSBVNjveVFkNW9R1V2imHz36CcBqDCWbNA71RoGKUCt8vazYG58NUkS8nVCvyzJAVowDGNxt9HyG496N",
  "key29": "5P2uN4tJxNxJR9x9pdDYa6Pitfh48LGQZ4HrvLhGKrC5HAaPEqLQHsheqCePJLoAbprj4vKstXbF9hNF8o8V1Xet",
  "key30": "3Zp8tr3ovQbuiLTspSxesdV4VK4SiM3khBdhtSz5WiiQ4hHHtmgkLVAp1RY5tav5UvxJSfByVFiMV6rmjKjcEUyt",
  "key31": "4Asc4SSFAKMGVpByDARaQLnmgPunYG7eR2vboW2vPxEMaaqpyNvPmURDBmkfoKSCkCmqZgE2AfpNkJxUQWAHDBrj",
  "key32": "4Wux3TgYcc3Mt616BLdjTQJukdKDSwQC4u8AXff2waQAEdVJKXdjd2hZJfFAV2R3w3P3Za3T1jQHWcGDpP7KRr7i",
  "key33": "3qnhkfnN7YAot8wDDVUbkKmxz3RPxcrguNQtUUY1wQvfrrEsLP1za7dR9tqM74e8ActXygez4ByoTaoEZdKH6HLd",
  "key34": "2qHhr1CJ7vR4LL88E3p8qEji61bkGjTC24cJf2vNf2tnxXSvgr7kx8jjaQDrRdFuiPsqGnpBxzSaaubiw6uvrpSe",
  "key35": "j1gQmmzeTgUuHczau8Pbr9J8mXYnsdnDoXeLKUdE4d8rYiWVi8McCVoMU4VBLX5Crfbfei12iDad5FUGFHqGxF9",
  "key36": "4mFNPChLP7m9PbikUdzUsbnnzE7oKwizrW91n6CPeYe3sJ7N5eKsxVKvVR2HyHVHRiDHpayXwZxQ9xZL9S8RXS3G",
  "key37": "61AHKCEPXX3gvTARb9ypygB1s9wCFVAJRKZtMndQprP9eKYo7BoznAVKRc2eZrcSbwuA2pfHx5j8ar4NTArjVqQr",
  "key38": "23E7MeGCftDLmHsXaZKYkcwNpwE95F6WTm1GZTNcrLkCyDgDdAzTWfNwk9t1CCEEb1HMNmBUB6uLr7JamwQTxqDA",
  "key39": "2bPVeENSDTPQBkovvcmMLmtgnhcvomUTJapR5on2dhUWevKgiB9AJyo71wRXohBLHufP7xoHogSXR6NWisLnpBrW",
  "key40": "5y8eiwuh4H6NSe1PnY9FqhQC4TzvVNHwwvAFX42X8Q4UxwnkA2dNY6f7yzP4ybdabkPh2DgyUjmJZA6V5MHCxRew",
  "key41": "3HjgUMtbc5LxsntQcFswse8AqxK1TSkp8HxsNFy7BMTEd4bbvb3zRNE4PM8LkD5FozzAFtcWwEJ3HARi6EtJnsTc",
  "key42": "5UV9nCr1fkVonXVW5RTeCqdrcEqMT4GmopRRVSNSc8ikN9nw28mzCwTA4m6df5f593d1wQ8eJrxV9xTg3vwTn5QC",
  "key43": "3j4umLE1jBdP4UYRE8kti6MmpcYrSELCN1wAJstJy14NztmzdETfY6TX1Mm15oikmHED6uBu5MUbCXkyUCT5v4MW",
  "key44": "QgFYRLiMm5zDJTFaynMevLdP9ZCLzbXmHXVxBci99NAZfQQwiegURBJ4S9vuLK88mQXmAfZbLnQA2EnU2UxAag7",
  "key45": "5gH3yjZDSvwtXTYBKVhMXvHWLYo3YAdM4n3F6Rm11QuXp1ePfAuvckRNn1XWF6sf4xMSvWySu94kDwnJvndFEYcR",
  "key46": "WU4uVaeY7nRxUuJ5nnPB9tu8woyYU6qtZLhNUEttQeW8b5LT3sNBa95E8azkoR4h12WphHVSAVzvdcJPyJKz93P",
  "key47": "36iYd8417Lm9mNmCeat25uXe6pqYBhWhEYaZj4NQtnYYTU6BTS9RbdJ8frNunA14E17D8eBAQ5s9gQxFvqMU1aax",
  "key48": "5yATcz17qeX7KKygBvkshquLsvqLAYJmEP1S4UKxJvK9MFX8qbRQBxw6Mum65ahwxAb1943ApyvhTVoigYYBFnJr"
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
