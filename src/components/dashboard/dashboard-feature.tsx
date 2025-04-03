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
    "2cTWgBYSYeNBMifr8Xc19NFrtmBtWvQBMGX2hm7pCgENombtRjFVaVVUYVxMsjLAHutNhEj8cVsiWgyqmKWPmHYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5srMrh3Qv7j9NByeq5RFnq7CuVfFtBHdJnuR9dyD64cwYRfyHd4thuzzTeUPQzyagBvVYCJEDDXXHyVfkiRKDd3k",
  "key1": "4oVR7g8JUFWMigfDfgvoZZPwCWaYyLJ79SosTEwQbya8WppobrbXRg6vpu1nDmFUqHobJXi5gpr5tKUjm6cm7eAW",
  "key2": "41K4J6XJxaXcf2faJYtSfmdYTvppghLF9Kv5bGnxbjXyn2pzNPWSTCdpZqvztyNvjX6pBtEAmAYbiZftA92t8f9Z",
  "key3": "2NgKQ7qbsbwm7CPjS25kQ47v5gPPxwUQfBKLsPApfdUARmok1ms7zPBynA6P4Rhfqi5LcmdZ5WKuP57dCiKj7jbU",
  "key4": "5oeLvAhRcotcja35W3FpSFYPKrBu2ANdeUz3TfE9Rjau4utFvNzCw2ddQHC4ZE72cuqV7L2WrfWQQxjryivXHyif",
  "key5": "2VurU3G6e4ivKVXGQiqFMKA7aYJsJtDwfh7e4ngy9mkYd4XFPfW6MakvAuJgEjnZkW8GNDS7m8u2ooVFNPBf4m2E",
  "key6": "iGbd695ppmj74khnGzweRyZcFLZiAteHmgV5SHcwgYiFxcm1B7vwRXHXsXqKjycdzazf2vmg9cuKAgghHM4hZLy",
  "key7": "4NVoYG5AJ3F5Dvtq4U9XjepEVYsrUUnr3o8Hdjk3oh39AUVpuEH8fhucztxWP2jGTHa8SR1KBYyuCDs98k9qSRcQ",
  "key8": "3jtqokYCNbkZoPZj3EefhtfbXZui8QWn6w1HN4Zk1JXCybYFZDBATWa4556xny3D6jNNvYCKcbzyKxQLsRnR9xh5",
  "key9": "4TMFkxd1YWpAkctT8fWzAFGU2SPTdE7a2wQPD8g1zvqLpgdshCS42QYuUaRfsQgoyHkPxiNmfNqbfJ8VpsGJAQMo",
  "key10": "5z2RSRdQAbBfybMUJYjsqKHPgCUMVA4FUtPKycctUmebDptTFKcrD7RE4fp7Z5t7GhBX99ufPeyDUZUgyuCGEuA",
  "key11": "2n5p3gXvKLZX9wpgbmd7y8jGL6F9VMAmubtaAvaC93gsecxfwA2ZhdeFKiiHw85FBttkPGC8mQjkXjUAdjYgpnPB",
  "key12": "3hb8P9EiJV6NxBAGLESaj5U93eigRh2HPzgZJbWRcahh33s2cgGhP6S2famC6hi8tHiqgp7PaSVbyMNL5oiAskXG",
  "key13": "2A2Lg9sp7RN1toUMsKysksKZ17vS6YrBFx5eWEj9ATNudNxpCFsMh5BzzRbKLeHkJkakBgYGRuM2y5FLzTmM7e1b",
  "key14": "5PxDHj1qJuiPzbcT83H8xuxhGNTsCdN9LK6mYPfkBR1X6knVVfQ9144bXGuRasjrMQSrc3QsaivZbnHbHXboQYQB",
  "key15": "izP5sqc4X3KAUzBNYNoJu327ULdnRdMRKKdaN8SXvYXU9rVqT5CBoq8iaK7aA8VjrLCEVEQyixJ5R5xjXZSJ4Gs",
  "key16": "57JWifJQUTqmJfP9sd6dGUk2SM73wto3g9DPny9fwmr1nE88rj4TkCe1mq2JeyDZt1Hi3YEmRWh7zewVE2nWrHYe",
  "key17": "62QLJPNaxaUaQfEUXp7ZLE6q3M1cxZd2dd8mCJDvxcdFeSHH8TFymXHxponTrBadMnP2wXifz9JTGtoCe9rDa1gc",
  "key18": "4qkLeQ1fSYdUbC6V4KGhVMAFif8DbcHDftPVMXYFaq7HRV8fjp39gg6QGyuoKtfswX1hcmiXXQ6koNfGy4LfdTLS",
  "key19": "2msi5DLBMXQEsViiHFJnoQMBPeeCrdEQA58eVrnhEnYmkGcMEq9A8sbuGTpebrhCSirkKiNBXrQVbmdvSa5B9JHY",
  "key20": "miZ78CpaWsi9vhgdKFtzd1d1LQGcCde6VKMLPLPE1ysPWBEGVS9mmMNymNbLTopd7XUSmT8Ka8TTNxPBujwCcPK",
  "key21": "5AjADAoPCaciiJJCtyGvwcoGg1mCUJF7QKtgewyxKDgQjV6GQNdcqjSRi9EjRvXRQSZj5cGGqgQNXcChpd6D6x1i",
  "key22": "4hvcZdPU4htJjXP4B2nhJcBF9Jt98tiS1f1sWsYSAV84dZCc4TQq1Ecq1QvSvEyF8UjZp6i4FrZ7HC56hn8py2Z7",
  "key23": "31jX6UkwGrFi7HWF9oP63J2HUaHZ4Uj5YUQ1VjcZ1jkQCbQ2VQfMMKc8YpvF6mSmCoi1xG53AAbCq4uk1fsL7GcG",
  "key24": "3aiEPxKYmbxckdg1kwr8uZrynpMCNyG5Q9zD6Q3k1zBpU5kLTRpgiVrzecf4RxRAZSECm554PxFSkQ3jAxLXjW1H",
  "key25": "368v6gTNZKj7BWYoLEeMqJHqVM5V8Y2G9fYhxq93tMQHc5o5ZMTpELo1JKF8iYN3FDajotrSVxMVnnEed4zMU4NR",
  "key26": "2Se3GxCtnCoQzP5rAS5uz3TYp3FgpwKJDxekVSn4C7ezfWnhnbEXTz8w4EDLFtsEHpUep3rMAPZQQRrj6aHUmJnK",
  "key27": "4hvFMNbRURDRbP5b2mpvCxoawq9rtRSy5WTRwzSTGzEKcHJRDd9djyEqVjzS5Hp3chL5Wu3gwJ5SK8UVHeXAUq5",
  "key28": "67ZkDRB3GhzmnNHqMytJ49HYoaT1S4vAnecii6oA4hUJPzR7F4iRmMBajf9jVxNaN6Rq4yegpAwyzwV6sRNXsF6H",
  "key29": "5uJUjFoN7JucWDiXN5or81SSTEa8UxQUiMwXMwY6YTxrrmxcL2TMTorHUn8ck9he4YS1Dd6Pfhz1M2zyMWKLihxX",
  "key30": "5tCq5mCMxutMmzrr5sSPp5G6WbDae5tEQnoyhgWpgHr6yocjaSYXuvxPXnToJTRKMdhm4cRN8WgynVEh342MyXwb",
  "key31": "3w9MDJweQ99rzHAkdWtN94tJaKsyhnhJbvyggftXjm2HXTTG4fSSAEghYxVCc4f2eH6sAArigqxokLxhgboptkQi",
  "key32": "2zpHH9YbU2iqrE1iDuu4KuwGnFbmrKZ3gAB21byP4rzaUBoAoRYHkc8tn2xi4sriZq2h7F1ZicPhykZJ7PfADyew",
  "key33": "5xgiewduGxg5RQqL8HGNKdD1LgQA11QgFfQU8yLFj4gcTYhxgPFMyD96Tn36rxdudZXi7D9PeHsQEgZxC6TZ227d",
  "key34": "2SRXCL3Umx89o7LFfjCZNveba8Cg9YM1cFTJ6kdVL1DUALdcMnVxACMoXqFg5G4GB9qUjyExpgiy9rnUXmwc3eU8",
  "key35": "5rzokLfeddMg6qVHUboSH6rfxXYbg3fRH2sdcpddjfKjV8tVFTkaa9ZY39XNJYTQih2XxibnGRANMCQsurFgjqUU",
  "key36": "5QvGL3kLeKA7gtMuxq1TDdNVL9H66XQNxbP37QmusVM81Vv4spu3ahMgMReoCcS4MujM7pUMSUk2cdGqEfiEC7xk",
  "key37": "5sGJ9UEb3xXXDRy3rpPi9oAvaj2aeFV5SskThJnhQePtx1ShLqAebZTcUDBzuv4tB2bDKWuBCXc7hfjqLNK5xbWz",
  "key38": "5rCmPiM4BvitzsmMW6ivoapBiKEeMybkYW6sLHHLhAuHs6spYqD62gsuohc8dWn17WTYb7S6YYJS6kM98jMZDtc6",
  "key39": "eLQeQoqZNsNrtBesYbEaxiWw6E5R4E4heurxtG7sb2BybhGHwWUVBBK4gVNdkGpAobZANcNh2oGdrTT3z8ratAf",
  "key40": "52t9epRpEyFvW8WWAP5QRNnBwr5tx1DYLbh1pAC9yusthSvc49ndbhdQq1692i3qWZ6WNkem4qkHbqYvxguK8MAS",
  "key41": "5gLVEVGChdXs15rw3Eoabc4YcUjqdUusCzTYueYvaujwjcXdbxc4UWNAovFGv2DneokqwGdHcWZic6qHNmvmqvTZ",
  "key42": "gJvxygaMrFRiWDqQEQFjw7RyozKSpHxQsGghgwdNTRG5coQiQgrgoHF7pAVZ8izmMbdXW1Jz16sSg7VULcSPuGu",
  "key43": "5SWVMwW7tq3y4wSaaV7YW8R5c5oXDDGH6UucJ6BkLRWvh3qcX7FVuP8ja4AvMnd1bXwTyZLyq6UwhRRk5CutbeWp",
  "key44": "4vFDStQATDuPJbX71yUkEfav2yNKDgVAecFjvCQc1UfwRj74t2CzCXza7WirudGHZSs43XgiGMef3omMvMu2YYdF",
  "key45": "4itEbrc1CvsfG6DoRHoWtwfejVcuh6za48aSFTfFnAo2s2AVDGToRuyd6qHycy5degdRQxLLxCn9ULPLDqoEviis",
  "key46": "4YkqDZrCQUMUHAdSUWNtY6J6vcSX3uygqaSvyWk2rzvqzpVUXHjYreSguhcAe1TfxCTs4WfSPfx33Geva8SsDbnw",
  "key47": "4xwNc6qxM7rzqFzZadZvZ9XRpbKvBwVpY3Z2p7CX1gtiJhuSCRKRAUm9LsSbw9ZS7EsaKBFVf3He49p8AMZFRxaG",
  "key48": "vbmo2iK6wyHT7BzAiQJX2hUt86rUDPf1m5hXoepXZy8BpS3LWtDFHzWD4YDG2WSFkLZ1v2ZDzJEYXBnTSCePxZp",
  "key49": "55B8c15fh6bRE1zyLifJdhRmRHsUtemJcTr2RjTebAhAuPywmj24sbKstsaWQbfkAEmE3TGudj999ZbeWxtSG2Pu"
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
