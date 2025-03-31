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
    "RFkgwL4evXJfDyeSPJK56JKzFtXDFjDi1UjHfG49Sf9wQnpkCLcGAdijciYpTq2T1nPioksKHQM1DebjAT2REMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kb5NFkpWhxNP5rx5v7BT5S6htw7LPTqzAdKAApkPhQHMrXygtauPJRL3wNnHPEwv3LXgVszwFA8uKpbtUXdosJC",
  "key1": "2RuhokxfHAbS3P7ANf4E1L973BQNTZkB3kJMeViwcYrC51231vLexEVYHKhuVQj5HoTvuJdixCBHRUnDvi1QsqMH",
  "key2": "3CgFf3NN4q2uhdw6HbCMibHbFRC5koKTHoA1j7sztMUXWDwiXoEWgrNMuygcmP7zJuTi1tHNuPsKPhSjRQz9gZah",
  "key3": "2NJ57guP6o6N6qnADn7jZkZvHZguDpxxsc1ixdxnJLowmvrXEgQKS86sDiV9cHC1CtoESDYKYUkT8Hhg4VNtKDdj",
  "key4": "665ZTsX8ipejPafA7qQZxofVrmTDkWHFNix2TwzXw6q9QA4jaQYRamcYeShktfN5LAPL1SSgDCqwfRqpLsPgN3cu",
  "key5": "3zx5YrDyaGCzfc8nsdvQhgq81c1HXFwduZwAK2aMEFAyEN81KDSdqrNV5AKi4nR46WguCLCkphnTG9YJJciN1oFv",
  "key6": "3AB76V6ckQnMXAHZKeZPio4gvqbae31svoGTmaX9E8zRkF35fU2MVycDMToT128bPi1gs6YsgX8tWdcnGsTQw4sv",
  "key7": "3B5mghmfVZw98WRhc6ytTiAnDtedDx5qVLvqDGsHU4Aak13rekaDocFrFmox6hFS93VYXdVu3YHgbSzm4XPDtiAQ",
  "key8": "5bsRe52uVEwbJbEHfSDP55zM54967wLneoS8mqdpZ329dBJiEcDQUCry22q26LuXigs5jEdGMowGz9rKBoyFmsAJ",
  "key9": "2Woa37btVkWa5RRGg7ZNaKhSCgAZAy6oabQCph2moXggy7tNJsW4e3v4r9vuAZpWHQN3E1KaGvAXH78WU715Gvgz",
  "key10": "4Tgy2psYKqDchD9nSUTRwJ8sJ1gyJumVS7bedseuf6kjC9H8GYtFHyZyzrxxKursdksQHyY4XJRgMnuD72PvYwDJ",
  "key11": "66pwarKjFyPZurjxjrviyaSJPMg45AmyTYtcrRd78uNXzwPmLzReK7mAiMuRHyTegm2THAkjngF7rETqX734XSCE",
  "key12": "63wFviCKFT22Pu7b6Xeg7EEAqSrxGZWKKYH39vD6MsE8jJR4fApGM2rdHLogTyUwgh9Pqwr5KRqpg4mj7vmqNnnF",
  "key13": "5fmtXJpRzXc62KDAbv41kko6PPvkoqc493Bhbzxz2ZYUNngeoZSbGNi4zh4nYyt4z5F98az5LtvcTKUfciehuS7z",
  "key14": "mZ4EPzSt1JK3FVMncm8bu4zqQhPPdn2vzP2oqNMhbbcWNYhzVsVhcyiHa22xFyS1Ry9SUTUePSb1iXE4wPjS1j9",
  "key15": "T5vvxFqJK1L5kAUdmTsanXWsxsGuWc51dbxqZ5QMVTkbTBVsr3wxGs4x2FPh1JxYP3F8nTTheaDJZXGUaScto3b",
  "key16": "DJifgcvtFDTuYK2UHweRLSTgwTKFyMxoAocK6hNmPj3rbm7xXb3hGjmLPdVSUk2pP3tBmaaEEPyQN6HUeUNdndc",
  "key17": "38vdoja8wr18x1NjTnieox4bmq7kqp4rw1RYrZmHZTAbaJDJnsshhCcek9ixzNZERqTcz7ufkffReUnQ74NvUs5n",
  "key18": "5qjaJpdsPCqocR34vXnduVmuF8EPbv1Xq4LCiNoRf6oGPYMRY6BNeCFuXURqk8stCmxGQ5mi472Qdjtrme6w6Qf8",
  "key19": "22KjjooNMBrAbz69keSbg2U5BBiVHea41xFi7gkRaTHXQDFnKFEroV2GrGeEEcp8p8p5xYzLCBgRNMsw3EwzcdJ4",
  "key20": "3dd7hLQSFbTm6GLDbtbJqDLNZEXoBdeTRhtUfAAxJCvRR8gQpTJhbXbGkSgDRTqtEDUE7vbRRyGAyM65xQxaxdaH",
  "key21": "5ESfJdLAvNgwnE4irYfbfVf1oaqZYAJwyLiHNfDgwgHvyD8BE8H2TBaxH55vN794AfAt2H24YoUXWLG6S5Hi7Fpq",
  "key22": "3GKDTTtg5ZZHHC77EvxpxhNeqhNcomJgwLUneZMcMoZoF3PpFV8aJhhr45X3p9r5NWvCjpXqThManccMDb9HHdfU",
  "key23": "3U1eYv9syitYSvT2tB7TezyzmffEDYNvcBDkvo1Be1mXzYBCT6RQgVbpTG4HUKX9sJ8DvzyaeEwKniZNs2urEanh",
  "key24": "3G5PUzmnARBnu6P8HgqESJLpDHVyC6hRJqxpDwsEbmV4dfP4xMap9npUrjQWFgJk4rRNgheoX5Hu6yXvH9UxSpSV",
  "key25": "3wTzsaHRaWoW8dLTeUw3VJapnFHNysp9uaUv6Jz26CyiC6bxpUZU5LvdiESVZX41ETA62baB9HrCb8oLWdymVQzV",
  "key26": "5MxG3iKYu41wQAdvgSrBQz1CtoCGLXTi5rjW8k7eRhqE3GdFvtoq3SL4LxBaoiLCwgFHaEbUYTKdUzmafGwupuNT",
  "key27": "3gfQgUvtsvixCy4aKrvH6M9bCk8jxv882iDmuTFAq7dvksdgB4HSXCm1eAnV8msLXuCdV9z4anC5epeQjVqEhp99",
  "key28": "3FUg9SkRZVC5zrxRvSHHoHYpGFQ9Pqq8g3QwVbp8cAjcBYcgvjvZ9bW5MbsDqLLQGdVQBPK5oJTwmUVBDgqtHSnx",
  "key29": "4wUVxWt8w76AR1aHmcezTYj8Wfoi91CAhZ35HnqKU9TPgLeZKsMgSH3C7GgdYBvCkXJPiNiZEARQ3SighnkDrCg",
  "key30": "3EyWXxZCGYp2hfCBBA4mWM38qEm7Jzyhk8jHfw8Yyo5Wc2brbue3PYBUZ4UHtqDDpUDFkhGg8mHVUFCE5oHgWa1m",
  "key31": "MLJHe8wBPxPEYJfFiievUgfJwFwahJT8TuU6siWAQJrNoiwUrZqFj5Kd2NxPqFPat3aAyDsE5RsdmbrmbQwD9Qw",
  "key32": "8CeL1kVoD6nXa3QQcpME2fHFDrHTVGAQxFnTzt5c6oS4WcAow9h8sreYr9n5PdxQ9rmDBg3LmEmoDuBnPphyCwh",
  "key33": "u1ZxtMGZ3nk7VjLhk2dU8UJeGNWEtxVVMPBeu8EE6sgaTKSzugzj3UHaUTAAEgriA4aT5gNMrxVRynnhSjCtA4W",
  "key34": "2WjBEkaWaCkgbBLx99vbCEk1ZKbasiZwXCz382fCFTw2mxaL1qzyGbi5sbvYqpqMgCEUqaf6aiaGDpChct7rBCmt"
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
