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
    "jood5Q6RM5pzxkV2mMc1Kxogt1fEGKM3fKrZzjmALn5KGCCevgnL5veVqBkCH2EEMARenSN7CQBZLW6cHeM4osM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u4h21eR3d3yCctSbP8yYa7V3ucwM8CRavNnKrYB4qiYQtAho77EMj9ivfLoeLq7pojmPCoxpeqEpZza71tw11kd",
  "key1": "2Xkq1eExXLsJPuYuCtMCttmBe44ranhbsuah1Yiq17wZgQR7NGsyMuvs6ET7vhBusbbvB7tCA9SXs4pdm5jQTFGn",
  "key2": "45ZWVQrd1KxmH17GSezFX698mCknjVmHdKAj7QX114ktL71Jpy3TeQDTkV13GyaWByucavVwTy2AZtMXGPcDsq7F",
  "key3": "62HUe14PrtJambMXMzZCFGSvX2zNoC9Yh7vK5EpWiBfgmkPVFY7CPvZEVNiEuDybXDL2YEvky4XnYhuwUkhoQCHc",
  "key4": "5UDG7RDvRZcahNmDdUDK5BeuZUzSHUi5NE1ZDjanJULUA7QpB5h1QSFywhrLjaCbE1txNi4tt3NgftYpBanm6DaZ",
  "key5": "4YtAzBBrXfce2sV9TKXsGT8vWzUnkxba2GSYCg92UXrJLmEKDrsJF1R6r3MnYxyAqUqKNGPutvcVz3NBeBsz8gku",
  "key6": "5UzthikWDYtJFQWDo6385oBzkuq6qaWLrhYaZ6M8mPhPW5cPTfKK1SQqdkQkZF3EYXED9w1CvvZyvf89ZitWjUH7",
  "key7": "4BgtRG8YzHfdQp52gwv9YDhQqrGrpCi6k1LyWLSY94GuW7WaBejGS5mF4eHtxvVK6uqBCAyvSaotXyL69ufsZgE9",
  "key8": "2oSnKzbhamaVhKHRD3AFXx516aSE1A2v3iFWyZ3GSB3de3nUUErnSzpgkxMEizDUmQuRKKZCgyaHf5oBgbsuymJV",
  "key9": "4zu5xcCPCrib5v1BTHHsasnw4i9FFNvwZDJPVLMt16FYVbP3FvG3rQT3Zk4qzVmzSaNfwcbF7VJgJXopEVHy6nCu",
  "key10": "2cWPgu7q4KTAnM67k6zyKHyVHXhCCNDiMUSWYb4x5fDsqW89r67obHGEUgfdvbcTNw1D9QP5n4QbdfjRgEcFkCHr",
  "key11": "5TnzsFcLkvxQ4UMiRYrfyHKzBskxhpacehQzpBvWGhDW5p812qjNCgLJ57TbKpn21puLdR94trFaMSCUQtursTYc",
  "key12": "4YCUPi8jutUrHTWM7ndRsu2TXyfmxqVJLofH1uSGzsDBwsvAT91XSeNd5HVXWh2JFKKexNXgjoZRojZ1AitYvRLY",
  "key13": "4dn511Mrknc8jGpimJA3QxHyUDvvZk4jzFa7yuc7BfbivexpWryPn24krD7k2jW7qeWec1JfRMgPm1mfGhK6zbgq",
  "key14": "3TUHBJFrPVpeNdHTGDGfWCdBcR2RyZdxccn1CMyRMder9sC7w1vkRYoFshf2tFrExmXAUf9d4ePFtNaNXcmrQMmv",
  "key15": "RFH4rpxoHwf78eorpoFkDEkxhWDUb2i3Tpwcy82H3A6QigENmWYKL4DZcCsgTSWdEyGV2VF9nhAEMBgHaVTDRNb",
  "key16": "3oisUnToye9YmiSJEheAM6jTM5RLACxj3ZCwJqtc6C2u5oGWGfJTKzE3oFNpF4E2r6KbJEB6bc7h7EZNBCD7k4jP",
  "key17": "4gBAKU9Rf4Y1cUbqtXkopD8DT6ws6DsnZ1hqrqxjg9hLCbQGPsAEK4ShaEELYxW3TRkjVhK9tryEnqpC9KjQYr9x",
  "key18": "4BpK1tCZm753xn3Xp3uArXCy2naHpaXXm9SXz3cNF48uvUNJkchh8YV6z76KnM7eqEPJBBnGNRTkVwhGM4E2eV38",
  "key19": "5FnsRzzsBjrfDmDvN58KwuAwz599TP6YPedRyUchyk7H8S5xsY4mKG9Y83aC6mi13W6yP9FB6NnLGj2y6hsojXy2",
  "key20": "5kv2KXgwTkfPCS4GwYGWqxxifNvS3VxmHGECu2QQrNLK3FYPU4GvGw6af8QnvfzScQnDGAez1U6A5RnSeoB3wEqx",
  "key21": "2L74QRNN4nX7oL2YHor46JepttmUboKiMREUw7dVo4EwZBvqowEvtTz1HRGdWyKng1L4yKbRdeNbvfANM2wCG4zU",
  "key22": "2wzGXrQey2pEMbmEWBENtmMJNXFajaKEjtza7GcrBU63Wo9M3bpNr277DrrBSm1ZzXJMtnsTArkyKN9px9U3XPf5",
  "key23": "3f5aZb5LxXyTGyBGfzPzdCeTf5GzCDDSa94nB9TjxNS8RDAaVr5TeJuFd8V8kNVdSyvHQjvxZEuvWSxojn5PCysz",
  "key24": "4BvuuvpHsq2Drv8mQ1stKJ1brXJdXtgxQKbCA9VHQyHGLZa4uTVybNRJWPkdveGhqPQhiVNGQQrLTDxXi9EGYUa1",
  "key25": "2yigMTwLotAghp2ErLBvRZ4nWMB7Qm9m44AooQJzZjAeRs3XC4svYPaZiPXjmYKKGY6H2MwZ66yZcw8rMUYRFd4k",
  "key26": "3zsL9DRprJp5uRkfvP8FgLPXrgkpB7sfRNvjroFiMmWdZAcwHNuxgYKERyE9JVb7r5gByQ4E372RqG28xurzzQ8P",
  "key27": "5wuraBgYJ7mg3MsNQwWyTCsWmqsvGmqTNDxLkXiYfNeavRmefQi7TTVhKDKLF3kvLWw4PXSUCCbBR2wrkGKCausc",
  "key28": "gvhNj2CPZ86QE5fsfamrsLFBQkojhBJm79VdMR1AaWdWCZFTgKVYwvj3sSHpdAJYYbULmpKLyiC2KFxUTx1nmxn",
  "key29": "29bd8g24anmQahagyTboZpDYX8scjNSjf3mKvvGmnn8fV1FgYLNhYgkWJo2bbEwjFSzQ4neBFrPb747sqpehyoCk",
  "key30": "4Ax9hKqzEw1Brr7XzZAyjRyYaeMy6C3318wt2krZPvqKrJW98TdhMbz9FU5duUvBfpk8M8fiQxE46vPFQBbGuSfG",
  "key31": "28VMqjTnCMWnq1hy8N7n7YqHXxG5HPYkrobRCsCLQykoEwMwh7unEj2wEdaexTsCqFq1MgAG93gC8hMja3vGRhxu",
  "key32": "3LEnMCYLSvo7e7KtankZAEegTRQjpVetTSGczSkAabGdZoVSN1EkTVpmT21tHQ4vMPmmWaH8uoC52mkezRFHYkRX",
  "key33": "4FvZNgQhSFugmjBmfBrSwEHuJSVeN1DG9ehCpxZQrCK9ht4b483GUJCftnFJgQVHpeENtQVombtHbThzHquAhNPB",
  "key34": "2gtZ33AaBvuh8HGFzUkzTdBdQbTka5UdqwtuKXDQfDVDnKDKRmysAtYvhXTQr41ngkwWjunAtjWMm7d2Sqkmh2xP",
  "key35": "5wjLsvvxdYJarLngfqcQmustPtopFJNVz3u3dGABBq8VfEkTx1dHDKP4pMVSmJQaNBfS3KcM5MTZ3fP2V3KT2izf",
  "key36": "2uckwEU4d7gnhYCKDfzVGQMpQ72TLBLo58cNyBAVAnp5vUT2xUWQ8dkdXs8LnF5vF1g7nD2QYP3cnAaWW24UurRu",
  "key37": "3RGqVoEUqWz7cCbapVS6YfySNXDXr7BD5KYjj9hXf74ArhzTUFUbfpfJujksVkTEW1ajX9rTn49AuxTaQ1gBXzsP",
  "key38": "3q3h6qd6wZzbxdqHrRQmyqsgtMnp9smssHUHoo84UQVqBEAsDuUcACQzun3cxA28nP4SfDqBnxZ7oBqJRDEkkTPv",
  "key39": "4Lvw3ssUWDsxnH9kh2DEZiDA7wTNLLSWU13PGh69PYvr7RP8hcQD47g5DVD5PK3Z3a41VM9351Mqt8pXHkLErEEt",
  "key40": "2fRTUuN6NH3DbrvbPss5ozYttqfcNt2JePgviDxd8zGchR9B281fAttdQJTDr2THztQZc2CaoyW6nhxoGnqzQhvS",
  "key41": "6gHbzPneSYuw2TVYdAEEb3nS7TTyJZTHLbTn656yYGbDV9zgD76VxGn22sXKrxsa9W9aGqKyTcnThxo79xF8FAJ",
  "key42": "4i4ENLL8Ej8gnmLGGkLD4QARKJ1fN6T62LsCaZ7Fk5KRCaPXD1zHSFGQ4ZFVTmMqdoT9d251Rm8AfXffpX6BGN6y",
  "key43": "SsRg76jKXyUmt3z8pnVzCLvgh5veYp7DYwyYETLMo9S1hQg5aqcVAgJZVK3gJX3pTPZCMvsrSq7frEp5H7e9qJx",
  "key44": "DxQF4U41vcvAjfUCFHKtbGdx9MuT2VGcmLcZUTtNct6NgdKZrCnYizSP2tL3tVARVNZvEseDTmuxYjJh36XexSU",
  "key45": "31SftzSzV7uoRCfrGWyejgRzQ9SxgENumiUEg33dB4JTS9zdDUYWgKAHYw8T9aSYRr5Zj32oKsp9jDeJAWyq2HJD",
  "key46": "2M5Ef7fTAMdSLPSGMctxMiiP9x1MVt85qxNDEyjoNbxNh9XmYyUos8wL86VSd8irD4zjT1yjnxmuwY5GoWVJ9hKA",
  "key47": "3yZ5Vs2Se4vuWbm38MfURvnVpJvsvuPB79Wbx9XpGq5z6cK4mXtA4SScB39WfvY2JvWfCW7BUfNMvtG2GjeJN9Uq",
  "key48": "WJ1bqTwgqfpWA2rjRAVJCcFJnhJoX6ZaLFCLiV3Y9kC9QP7YMdmxh7yPV8XtafAq53M6NKxsEmh2tVQ22wkdaTJ",
  "key49": "2gy79jJQA9GA71EZqjiRBeYepMafma2M18BnKd29Hh2MsuMSffDcXf4ZkoJuwHm9AnbNZE2Qe5LWAGjizkHmoZe3"
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
