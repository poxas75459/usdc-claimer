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
    "4vfeuDgbsQLiaxRqXqghKVHLxruRo3d2g6fUKZ7ZteXWHVoVgEqaMd4WXDSkTmXtFHTaXsBo8eUvTn5fWbWfpsUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25thSiML9kLfg5cxo4TaZ7E3htkAXbCjsds3e4AQhsPtrMqA9o3noM1xQ3qQPjF3Rjnbkg5gci16CF8vzGrUsPdv",
  "key1": "tR8FUkcgi3Rfn1M3MnNiu5ZsXJq67kvVcp768dkPVdb1WfSzSZTrYBcLCpuqSzfA92JZv3Hng9ssvYcogXJMXNB",
  "key2": "3hNjVrn1cViUgds1KwUGSwqSgQrVUCrTWcSgoByazZDLASsweQMRzLj4uq6qA3Kf1CwenHnQWMQWt8Fi1axAVw7N",
  "key3": "4dNu7zQ8gWWtupt8bdWutz7YgukXJEFEVhBRoN9hMw7nQUy1rpJWZfewhUikbTguFKM2oajapRVLrA4PrEmJNJ3z",
  "key4": "scM8MvxHjmAT2DA94oHnFumMigwuj6zmxvkXd4nhSixMr3yStsTd6mKGh14xPzeVVdvCGRRgp9j4a9JoNiTXLfQ",
  "key5": "4fRGzkjHTXqAgrSPjMofNgaBWx3DzTDwqdmYY64v8c3C9XQ5KbYA4TVmMsBJVy43rQEzG8WDCmPfeewge89L5TYG",
  "key6": "5JAKWNTcYRjbWpE5ja3x5wfwLGdvV1iifzTTQjnP8DFTfpAXjQqbhjen4g8aQpLAf81SeV4sxo9549J5YdQ4yN5g",
  "key7": "2GEmeKxyMjWHikub7RgvTPbA2CQ7SEY2vPKQLFFg3fBpkRiaZ7gwcuQXYMVgWfh5MyHLe1gxPhyEB1JzeAk73KxG",
  "key8": "49JgbLvs471pbL4B3TkUrk8sn72X76fgGacHzzrLYFH6uroQ4beX4vEw38DHjSNpZRmX3geGM319c58sCBCggNLz",
  "key9": "4wdDDZasJuQV7c5PrYncTf1zAML32cTHjyLgeWvsyTZ7mQLSfin2nhVh4ajFs5WkNFjgySPQeNc5sp77SFT5A93m",
  "key10": "DNAm4nYuhxy3xrYEjYMNC7wGfxaQKmuaA5x3giFajcBFFGcvqAeLfBxEbFHorJuPZnN6qNWRpmVG1UenM4MuFe8",
  "key11": "5WUq8UzJWb18BPJ6nvnRkDVryKuc5xJUm19TxTjoms1djwwdJiRJifKqzg6PSmmTRZYuViimeAaZsRpn2j4pxYdf",
  "key12": "4gBofaqb7jPELjPFtSHvSGUxX8Atb516goBJSfpCsYhQHQEhUYu5ue8js9SboVvFpiczJqS287DbQg2P5CqPdo3",
  "key13": "BarsDHebYn4cGpod6jnwKXg8Ad6NxtDwWuUEAkKk3LkSkCw4PZFF66BrfqRSWdUsMk4rJC5UyfyBuUuxM9LnHq4",
  "key14": "4TDeRA6VT9h7EVybXKkehjq8fySmPW7JwMK9HYQRKciQCa6mhcx4xCtr36MG28BBF4vm6iboVxPTMs9hGkkCXHc4",
  "key15": "558JRrM7jkiXUMLYTVwaJjfQ3twdNxfbobcdDes76mtYdjyozdrMqB8yWmxpPjswvAfqpdsNgn9f6DHKpxo44mgo",
  "key16": "3EiXpZvf6FFAWTLTGbEm6eeWNHtPZv5pB48XmqmRUpkQrchaogwKJe6zsZF965SLBvHTzPv7vzNt5VmQizWWfVN7",
  "key17": "3k5VVeMLh5sN7FKqPoBLF4q6iSCaV8FYkFdtH6fZHashbeN2Bc1jTJMMCKpEowhCxvvFEumuZ5DpgQkG86BmE85w",
  "key18": "QRVscpXWWHpn8D7ZLvKvaU2p3P9eny1WSnc3SF89PHf7QzxMH2Ng8gYt1WmTjSN1CeGuf5ctvVGDLZUjdosm7JE",
  "key19": "3L49DAVZMXUZRtpjEZKaR3pnRD3ytCmtJvSmWdM57mPDxRNYRif4xnEXvx3AuvrVPYhZWznmoftF2QGH4tEDRhoP",
  "key20": "x4zFW4Y6xvDqackxJYZwknp5LkC6Z42CdRyYUwEtvqYDs6Ngp5WVNwXcKz34vHLv2hQkN4rMMANwEatmhehhXCj",
  "key21": "k5Tw4uZJuVZR8RX59cZ4vdG7LAhqZnZ537L4pd5oNcy6LuopisXkyCDDgoFpv79o5vahT5pvTrCodm6VLsCFPcp",
  "key22": "2niMrUc6HPfGtys1sz1YadZ1AGnSZQGfNWcPLgBcKbarkroL7gmYRFgDzMsAgznJqEZXs8uPUmGtBFtms1cFRgD6",
  "key23": "4QLdENzGxRqytDNX7ga9b4Vd3aj81tDAeKbBQnB5NfzMZeaxQm1Pf3znw1sTXEUFT3odaymYt6TbsjU355uqcKwQ",
  "key24": "3EhnyAQXGK3vR4yZvmZgjZgD6DuBVxXTQU7JKmdVNBQnXsXx5CD8vLdzmH4ApwBoDSYPFRNF3zdW6qGCxSARkdyF",
  "key25": "4Z7GnqGmkhJn6ZUdEgLZ9nBZMhZegd9U74vH8BkTLGmfU9z7aFBExRcXYZYfkCUZH7wWArpsMtAhoSh6p7Xpgefz",
  "key26": "4vRJqQVYAZzPxyNWX4iCui8vqBE8npru4Awe6LGwU3rEE1fxwt8HpfTv1CNi8PbVFCg9xHTdSxs6iCGB4D5DwbsZ",
  "key27": "5jwN76oAzhj8AGoWDmSS6gJCuovdPYxtVhwzU6qqdqxv5viNgZ7PThGHaaqpjkHNNsxaoR7bdGEf2gigDwmk1nEH",
  "key28": "2xtQpMFWPutWDy51PeMhXVJoAvTqRArVASHYnoe1q5hQpwckGnMeMrMp8xVHFJHSkRkMR4dVDyw4BBZTp6KP5uup",
  "key29": "33XTBc89yYEoucYhBoFjmV5J7SRWvexFVmqQVdCPbdWrhgurRvUaoTAq5SUvZknZXwRHkFPA75YKUDXcb3RqB12x",
  "key30": "4qQL3Tdxyz9ESNa6RqYLtmbFSGHKa25NeN7wZYF96jvdKF69vfvci1MsE3663EZUiyVtB4pZSBjFkqfpZcEznFfp",
  "key31": "347K22bm95mKK92XAkjzTKeM7CkqV6JDEGfj7g3spj79qvdfM5PP7bUEfz59nkE77UqSeNo6rt4TAe433oR6uTK",
  "key32": "3WVHHkLDPfY9B9xfiyzm11DL2wTj6K9Svm5Vyac44yN4EDXYST1Du6miTd65Xfgo4dPc9A7iiV5hoU91BELfo1Rh",
  "key33": "5Tjb8RweAAeWbiRPr1fF9CPgsDHJLzHs3YUJqTKe5okBfAEqH5Uh1AVMV96YDuW4AHBTBbJb6j3Q3ZFpVLFxjNNj",
  "key34": "2j4CQp8f5ex5D7sw4wHQoEpKPDwbpGL83esiuPSeUPnVmQTQnTzRNj9RMCUDhHmw1LXgek7EZGMk7sGq4teuu6VT",
  "key35": "2JR6CfMDRfYbPtWypLvWjH7tjmPJxnWXb7DEs8U3X472Fa7wEh1wTWgtatmqQ1q1DxvpJmFLg7RsZ5aT3z7XbdrB",
  "key36": "3J114ZxHu4CKUG9aUwZfQopuAhNzKftZV7iUT3KsEjQVnQD35Ltg8BtcQ4fngXedABYyzGK7ZrBXGv3xuzZtr55J",
  "key37": "3JkJMJpCZDokmfG86VyCom9pj7ywdX8m1UJFaWce8NYjYSV8GjnxMhj9aEtvGgwWQ86GT1aH6xmsN1mofjGhrQZx",
  "key38": "NVXLvUFjSu6TxTdfP5rftNjUEBHLCDWyz3s7JihgvRLux3qaBCe47XPs8p6PoweokvCZHewGid3GDnd6FBUUnh5",
  "key39": "2iKQDAUhU22unopJc6c28z7fsuUCPCuTmWBH9mcLRN1MqLhD8RGpDSw5Cfx6WRGAfywbb9TdhqoWfQ1pE8ePWCLQ",
  "key40": "3TXqueNGp3MDQh2ccrpKEvFjT1aGhVsaX9or8oV5o72j15tJErLK1GLk844yQPMh6nrpzU6opEFhJ1afv4xmEJ7i",
  "key41": "5YSrStyDHsF95YrjC852see6PDxpjYi15rU92PA7QXHfT7ruP3D69y6WtiRQkHjXkYtdFB8ixv88A7vz9WvcHdp6",
  "key42": "3ie3nWeXkSk1AiJvaAfzDEScwT5TJ9DT5trzKC2JFQRSjgJm5P53VMhCcLkCoRFgCtCHCuN8AXNjqU635UkXxZ3t",
  "key43": "gPfuEfyGw3gDT2cvJ4Q3BE9hon3r256uuuKDNzwtubZ8Qt4cbyMxyU2HRJQC2RKvpPsHtqjERt8Cq96b1wdXVkP",
  "key44": "5M3jyfFLWC63sZLTTBggWpjAQ6446SMSEMbwAAeNASk4359StCJoznsmTRKRkQYDaZ2M1E9bK92L2n1s9Va187PS",
  "key45": "5FFuyMMVCEEjStSQaPAEVfkNBbTF3GYTjwJz6mkFocvpeXgmEsZ6kzqyp1czSdHgAPK9gqnpfSNV51mJAn3K9RaY",
  "key46": "4DSasap72g8tBFNF6mo3rLW9twMrrGMiqQaZDCpyqzkfSGHH8PmCXsJ5w7C5uZeKCgiYpoRr5xMp1oRnhS9TTec8"
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
