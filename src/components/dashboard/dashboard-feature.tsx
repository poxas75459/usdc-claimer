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
    "5N7uRmfLYLatDjJvHBKrRYNzaaWtaKMDF654eC2NdAQtsqNFNirrvBD9oKVKAwaHZ5bENvsKWBKaNDYjBfPXauAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bcR2cJdDD2aa55QP5krGsA7apUTMFQAFi9CG7nZQ9zDCeXjtq17bZh4qR43fF1d87xP7HVDGK9wit7r475ijPty",
  "key1": "2nL6sHHYi59TmMCfVVSeFsSeQBUNBd9dMhftmKoL4WU2KGjChq72TnmMWKcbQDpZGgjvqd9PGVT443TLN7YV3LQi",
  "key2": "5NBkWFEPwzLL9jXq9DqwpxXPtPvyx3QivoNRzqXAgoFkTez8eiWwEv9SGQTjkpcPMFTMs2NbCPiSFvjphaNR6B56",
  "key3": "2v4tK5n235kjgBS9ga8de6gEi9mXvTKnL7x76mwXXgXogyizLpXauwyFiMLbyyEpoF8NxWAArKG5anVRg9xUDCmd",
  "key4": "4wQCGkuST8kSRv4a2JDaXwfR3RQG1MZSBJCM6RAosBLZuv3ARGkEGCTa5GMyHjTRiMdv4WRRRphmb1wYRkHHEGGb",
  "key5": "6sFP79DcysLDiabL73wXsPH9SE3uPDvhDhBkmnBWNLMjUC1xoSeUccLAiJuka4eLCAYicd1G6bzZoC31uTNC7Vg",
  "key6": "BeTF1HzByrsBAasNdMTiijeegf9vJNx9B7ZnsEmEpSzP2Vw8MB3mYfBchECgCnr5MYHacBpRezT7q4oJvourdao",
  "key7": "5ajLtWwduQfDgB4VaXH3FT3y23BMSBE827ASanMCrLzwq3CWB5B17dzDphQikznWkggjfMsgHs7w5PSapJaLKFpG",
  "key8": "3PjCWyAA82Udz2z4PhrwLXtHAeFbNXHTVM5MP6Rmiq8Qrxv3HfCuHNZyTeSipQNjd9iJHwYaQrfkiUV2k3T1mprR",
  "key9": "5m8QcmYdvJyrStmvKCKKz3ovX3gRmTZ5KEFQhAVkoRBrz4ghriNbEuF1NoC3K8ahpSAxSv1SAqKvJtuJ95xccfW7",
  "key10": "4SRXtZ6as2pL8f6ytnUqQZ1uQEzN1kWxRjGezkLmSF6tycE59tKNUn1nXEJrfS732w81uZNfggDeVrpszGzajTDq",
  "key11": "4tZ1aoyBbf4K2iUrSqezVTe8qsCrMsNvYnVQwygfNQwhsVg8B6BVgoMb9hPXT9PRaRLrxcjvyigWxKjzfu8Zkaf4",
  "key12": "4ULA4pYM8mp6TaxcNYdXVLYULkGyiWSQFJSUQgpizAYw9i7teikGhZtqVYDnD6R5zM3ohuSirXRCQqf4L9TrmsBf",
  "key13": "5g5cerP5YMwPartkVrRGchZpzaef1HE94uunEEDEdSiPVHptSmGviSkHJCPd8ymm1Uh2msAGteobzznwE3GX2JbM",
  "key14": "516nYSSE83r2gKDxLwDVnTDsSo9qEn8579cQpMWVg7vDN77sjo8Fq1NFhEDkYYaKtjcgfuokpm2ECBRKdZQydA48",
  "key15": "4sviM61uVtGJXBTQ2JEN6iCjGqesRopefysBG9oGpz3k5ip3H8UCcFwj5cQ8koXfyHm5quuk6iDA8AJs7W3Ky5Hy",
  "key16": "7wN9pWyiTgi2oGod83eXv4eVnz2fAgiMrpXzyD2Mrhgv8VftyJJASzrjo4ZfoQNG8aFsZg3hfMM163iqUdB9You",
  "key17": "GJuTrUAgmbFuzSAU5c9eRLCiRu3kTmi1i6132nYXF57ZK5EZ5DqYzr3ETEqcv5Pa3Ut3pJRVZhY7nk5UZt8ZRC5",
  "key18": "5J3dbz4DHT1ZW1mAkXCJkr3FcwHZpzMsS5FSkNSNuk6phDNdUMhwBywydQd4QVfYsHaiNh8679XZhBjpPYNxoAws",
  "key19": "5Ne8dwcN51PVPQJ7YFE1qpZV3ESoLjYRn41gMqFmAUpZqZGCwEoJzpcyKPaoqnr7UAif7EV6X5H9pXUsDLte9xEA",
  "key20": "576QfeAuJHGKvQnMK4mYnw4czCsvPMyMAxpgwWe1kbPNbhMuJ1jveDpMCeiqpB6GpVv2giqMPVuYWgr3eXctFzpS",
  "key21": "2cHfi5yPARJUEWr7E9E8trFCSXcFTuwGamSkCqKzYxifWAenogWV9NsWu3Ta3V2AvSVF6JHX4mz6Qa9tCRLAsh4N",
  "key22": "5pzhJp2mQ5jg3ULpFruM5gGkPPyh7XgWqYUqdAHzKrxwEC8VESTp73YLmtGXZtkAVBit5rzYBHzUBXN2uUyYBtXA",
  "key23": "4anCCZ2CtgTrSERN4yU8t6sxYtcmXUpVevtHzwQTUC7Pns1iLceo53ZuCmb2NMaisho8kYAQWECLiMPDi6qsqd3L",
  "key24": "63WhdtCxbRRRLd21ECYFMgfKKmkfuqzRSVykis4tcsdf3MejZ7jbH1vmw8NiwcG6G6Fod2WWEPLaRisALqXL1ast",
  "key25": "wrM5m6bHdkndPzEdphynvuAiCW4eXpdYb4z2dXmqDueaYQP6fK7oQbiPK5xjnqpLU4bcFpDGkJrmwcZm6cU8B9p",
  "key26": "5Pfgz2RwVGzbFMzSeDq2L75oXD45WkALEEtDve34S2MHLPaFwWHHJjSYFoYxUCWcxUYSShLX85Nu7uGA21uHFSCS",
  "key27": "5zrG3541r1j6ZeVxp5B5mdKtnjhG1e2eWH4zc1L7f7DUHzcFF7b3KvgMReqT3yWci5dEFyA4YTivdMR3twMEk43X",
  "key28": "2S5xkd7Z9b1MJD4JRkzGpfuA7CH1bLVePpYLf36TjbawhTmrzoPXn4x3BMeR85HSppaqQuMwq9xTR2AR9xmSPxaH",
  "key29": "3eLNZE3gs794YFxVzL4rxgutRhn52vfwNYdZBhTweaUoPtiTnC72XjS2o94GJyX98pEuFDukToAVpYLq3oJjg8WA",
  "key30": "4TonRTQw7ymRAyAyRT2izYNUD1MyEn9ZucTymQLpXj7sA7Rub4wUA2WtrE3o5V7XkBhtPudAhD9SwFuZbfoMx25p",
  "key31": "33CQiRfft4TCwLDERdSXHCBh6MpoqRnj3Sa8N4atzbgYQVNxP1kaN3a6ktFcbZt3BoGggNmW6E57WfG4sNvTyT6o",
  "key32": "3sWCsa6oXdkrSXGCitcCG19HPQgb14k5118aqRg2LCuWajhCkh26QXueXb876NYTRqYY6sWotwNB1zm5EnTvLw9y",
  "key33": "21ZkBPQ91JwbhdmQBzeWzWtRa3RaNcqFSzoSu6Eoo7zSdRr33H2PgeAsyRhcZz5pJpXyXppj2wyPhAsY5b5mmnHF",
  "key34": "5D9U3T2WcuuarBJnFK9fbdRFH5z94oMF7oXJ27bVH18CtzP3tu2dhLR5v4c3AZVXte6nU7Q8UaxUfy7VFbRiD96g",
  "key35": "42SVEojtMsybC6YXAo4mFoxWJMJqMgdY9zUT2ibT2kux3V46MEkxjp3swAiGqBNaDnc2eLA8RDYCTXEP13tji6pG"
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
