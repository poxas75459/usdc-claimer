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
    "56ZN2aKuqkxcxTAzS2kxqiXdDMH4Ny9g8bsBNbioGXqBBTywbjyRzCFzdPpzUGkBV524RNDyqYeXnpd2pL5TNe6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pxHSFUa6fY1LV6eTsAtHUYGYvqYkBB5H4m6E5ytiAeAWDbfH2FYW9TySapb8inn5dh5RFa7TznkPUPPHaiFqPnd",
  "key1": "5WNvdQjESLVpzAzWvwecE7rSiPRSfGKryR3VXGBb95S4AyKsU5j5JZ8XcJbTstmuTa1TqPJ4Zu3nTpdyfvdd2KdV",
  "key2": "5vPXFcKgKNUw6kHJrjvAo9RtByGLQQSefiueMahz5PFWiihRfBBdnHL8FyymdDGYviVwunFLunPrdQawF7shTRkY",
  "key3": "4ceoPZ83Fgz7NQbSGH6qKgc1oYfniLm2Fx7ajt485iW4HeYUgvrrNVYEkne4JedqoLeyceBH5KgrFBwoUjQxTuAe",
  "key4": "U3NStumcPYBvzYnUtd2VX7NwiWsHy6yxeszbUEs2yRLaJzmvDjNWEZGhXM3PZ3ho56SuWzBc778JzRjGebH8jZX",
  "key5": "5NKdk3Mzf2XFbVYUCEgn3nAgi2XTsQidPUQW4UCEJhBVZJXCGj9Xb3iSjTW7NJRbcRGjcuvrNznfuUWQh4WBNdMV",
  "key6": "2a7dLmpSiXpRsJTUSywsqcubwa1E4sNmiviN5Y37Kd1RFJUe3qiZrDp9ckvw9jH3JykTNV6AuMVTW88y8vJ4r85j",
  "key7": "vZRS9zB8oRffEdVvrizDzc2T5uApuE7hq7mQGZkzmXaMRsmT6Z1xyYTvCregQ7uiqvSywBAPE71TXHSbS3HKESF",
  "key8": "4nmZc3LyjabTjkAm5vpDAAU8LXpMjMLM4P6gwHnPNoSKDxxMiigYvAHFepuauveAAvpRpvSxxgAZP185cVFDWybi",
  "key9": "2tkrEea3bHNznSQeWpuEmP3vRJenqLTNvAWtVmktHKDuC21QV75qmTun8jAV6Hgdg4ksGFuAaKjrCaqkDJBxX6Mh",
  "key10": "AoRPjGjvh9FKVeNK5VK8xp7Wd3SBFDg4XZCnjXZDNDvx7RJazUrfrqNhjKpwFMsiaxzBtxt4okjJetx3f6ZmCvE",
  "key11": "44GtgMAWcGtuF6GQZxCdvjvLaHnkJdTqMBErzzBWJSiWu52jMBJhXxM957QW5hHLDKjkcaG3q25DoKxKu1SmpTjp",
  "key12": "M6ZLEW2cLmeSLGJ92j8oyPipD62mrDQx3veJQ485uQ3sme3qsKzVMJAmSJ6dyToHN91igngasxyiugGyM8pjhhs",
  "key13": "2upeSc47ybdPrZ5kqbgdAQtbYy34j8voYHcFTGpCQLNXmxvpG6GYMRmRhmqPsuNQxaYJS3jpSoNQBivowyHSBJjF",
  "key14": "5TcfcxnVULPwVDvvmdpepn6qVxTQfWYJmbTkHYR6J9qNL44NzPtmd1k5q9Y1uRRCb7TnzLMPM5e7WS4mJ4xHtc8X",
  "key15": "5Etbw3dw7xvCQxEYPaA3kaCDn7xow1auygYzKLFhy613zsvSdqJRscbcascyPygCaa8MriFAeV8n6rLVD2aTjKb2",
  "key16": "29bBynjcLSQ2eysfrEfyH9PLKPjdmADjy2MBiokiksK71G3rhbz4ifLNFaXiHKTPdVHz1JJXo8xt1ywBAzQrt3Bz",
  "key17": "3AdhYqgg8B9uqqxirkbxDc7WNqvbmzJNzh8QX8nVwJpWspKuk5nFuPU3mjt651GMdRuAMapdbb2W6Ejs7aAs29pJ",
  "key18": "58UFaqP62sPed8E2pCSUUBy8GLkWwXU4j7g5UdmG1GqRv7Xiv1CkqbZvRbSbD8ZpdSVRAWPin2DffiAX4q1CrFGw",
  "key19": "3imPqLNUbq3VuxxkQuhpgMAC4yjFpjtyKiqmdc1oJFwBW5N1hWr5nKK8xP4MpfH3DUaePZbQeKaMW7NboEhNkkSK",
  "key20": "hc6A7q7DysWt2LfUWtBEt6NqtYKZsNF44mFYW1y6Kwgsr7uMdvzGsPGcrogS8kyVHgDoLSMjZVotCQdqrkLL5gj",
  "key21": "4svpQw3DFKoLbyTS5EDbseeJquDQGSsB5rhh6xTMxwHxb5NrePaKnoeq6kFfpWPfE47uL79DmBZvQvdqXhrX1vJD",
  "key22": "4yuEQk6N4ahu3QWh68DqxvM36RY1kkTW6PhAV1GTtWVsfSAGa9knCkF1c8harZUMg82zaxF1V249kSitsTRMoaFB",
  "key23": "3e1wsBsnEYL4dafGNfEizekbEr6SFZ2qRQ2ssE5NeF5zkPRN9gzqw9hLc4hkwinrgDUqnEucacWa8XhKUk4Ty8uT",
  "key24": "5qEE4Eo9r5viPoHy8Yi1VRDkYZm2q6SvAvTK25Wvf8woRHRgpbtHqP62poukr2rLceDQvw82SoLWTNxZfDJYMK5v",
  "key25": "W7G4jCQoZbFzaYBDgCxUJX1m3XdwMvcFB15aSbCMzgAcscLYLgiMz7dhYjQpQUFWngkrNKuM4KDRNzRVKCmfVFg",
  "key26": "2XUtHckfcbC4KRQ5bPNRBryRBD3eqff6QhqQtgqhguEgTEGxz1Lsvf1VvCQFVdvEkiFbtPgvuK9tSGxTU5sHqECV",
  "key27": "P7ZbWX79GfhBic55zbefNcGi2MqrBi56q5CEr7tiUcmix4NdZ6gXrH97SxdUKx1uRbYDpq67Fo4U8rhCUqc1cJE",
  "key28": "44myApyBeV2C8XR4v5eqhsXTtMQC7jBwEvGyXRsPJXRgDLcqK9ymLqekz8ZFKihG9YP8nmpqd5KuvkTAGjnM4dKp",
  "key29": "3AiBGoxzw5rcwtLjBzPKo58eGy5E8JXD41pJp2XvPis2fEmUEb27qvrsfqgRGUBVnjrRTNFeSY8Uy2RqA3t3wpB8",
  "key30": "5jDF2mP9jvs3wJDRH45FU8d5eRsrc89gVrAgNubcFKPiyjn5ARGi23BSMog5jmPbsQC4QWDtkKq81oxaBGtMBqc2",
  "key31": "grCJgVpmgqGfwcSTG7ZEWu89dAwdhpjP3VUKTLqGJBJFm1zowryxvimYHCAAfkUnR3b3QkAKBuSndw99gHWFvF1",
  "key32": "4234ETwKmYN2GZBvK4qxK1AnsX8Ypyz8VExPBE9Fmg9gZWgXokAqM4sfSbn2kwgLq8edg7HTMPZuZkshm5vTxeR8",
  "key33": "33KYLW4x62iAKWiN6YBiN5iyP2jvAoeAVkgtar2gjmHFad5tR6d73cM5TMiaiPry3QWn44Pp4d7QC3ZqKa9knGdw",
  "key34": "3Hd5iuc5cExY3Uk5Z6dyV3RToqg8hCFiUmLGL9oxGXC9LS5UWRLsqpyfZ3HfGnJtYsCdgANt7Bsk2G9itXup8dH6",
  "key35": "2Wgt32v28pxS8FTxbmrKqeSkzRAsjQP1patpcpNZdiZnzd2rJhNCxbHcvnQxucySw5gpsXGb1sLGzV57gFGFMyRo",
  "key36": "3EbzXHfG6b4ZjKLkJKbJMNhYa2ETSaU6EUzCAfUxnpQTBou8JFMdL94iAr275suCQFgtU1RgxAbcg9W3A7QCGGSu",
  "key37": "2hbBu27TyzSj1St87Bzfgg6S4pzHr5hM43DvfTvD7bxSQpxGNKV4r3CdDJhBXCCF7dU9rNC21BQzNVDrHCKfG7vq",
  "key38": "2ymEhaJcpMq72P8RpqmpvMUWFygGGtzD6aFjcyq9PVHLGVtbVv2VsCqVx6wppAA5t2HGhMCRAzm9mkVYpta31Qwm",
  "key39": "36RzqBEruNcHfRJai6LnuK2x1Y4ib4Z4osSBfiQcgdWBEUV6wox9VeuqqrhC3oQ62ynuiwKAgekqGFxPD8J2qWnp",
  "key40": "5efCFZAApbfjVVKXD2YbPxV5tFH3CmF71mSP8hrwxVJXHk39QuY1wrg6TLA2dffnEzCDaRbeTDMqyGrijeST2mse",
  "key41": "5GZS57JvXcKAWAAuEwpVVFqHgzKBso7Tp6REtn7dbSfUzpu2ojzfb84ZJXn58U5QfrS1ig2zmcvp42hzQ6KA9WDC",
  "key42": "5wT7WTjkY9yui71Jc8TqFsDMUcvgNuvfgKD17sWKszreXddXQgUsoKmVdLzWYPdE1tC3ti1iyUGSNPYeg21rWx9b"
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
