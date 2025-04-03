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
    "3CZouPuypUTT3jiZ9ceRfpNBAUGrrvDAy89DYgHTcJhTDW9fcRZ3ZmKuQugioUdym64kE3WQfZraWuBBjnmuM9WT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cy49Z7q8LSfht2tdQ2irYkwe5dqSfNLPP67cmyiVbZczDL9Ek5K5VyuVdGJFCfWuNEcpGcAEBvXTa8Nb3V1AHvt",
  "key1": "5mzq86EnJm4Y4bguHrnrJBScNvnGN799yFaKsdmXJenA3B2yBJFA3mBAdjkj1zPP94MDJ6MamarGMzEFZ1SHt1vQ",
  "key2": "VUUYnca9MNdqgFwm2jRoUrRugJzBLxfKiKiaPyDWm56FmN8BZWkD8gahCqxwtiihSkVTSQoztXdrWz1x1wsiAUN",
  "key3": "4dDgFZfbXFYqieNRuMbpVYCH55HVrGS9VrgjnW2fyGtBq5Xc1EKDUueJ7WyKUBbRZ8s1BAYUPSP1uVDM3N4d5qsk",
  "key4": "2Li7fYWUsaaWTRv2nuYP1napTd8garjB6SXw1kDGRpv6YBytA1zo3BLya7u5FUJvFEnonfh7fEACB1sFXFLu7m8T",
  "key5": "Xfuy9eYFHxxhkfoaMqgbCLgFgrAJ3bUWvvyCcTJj4CVneKQ465WVkgC3d95JNLURdamQrtq1L5ZnDHFK4MqnM6G",
  "key6": "5doaPF26cpUbRHrqijfYBBFw9m6cDuDeUuSS8Aose5YxNUV9wyyPQo8Q91dTgQR9j472WbTDBfzLjeG5DAz2Bgrp",
  "key7": "38TKaujkYsz4nQgYL4suzVTPzQqc4nGLzEiD6Kazja3zQDTGy3w77ru6LmBE4hNQfgYPr5n99WKNKWmqrngHTC88",
  "key8": "38QMALh1eFsjVqUrcNYP99oLKkacZ9okP9ui3V8rJRwGt9ZrzQ6JEMLduWm7UDKsxwh8hA9MdxoFSTb6ZQUTjxQr",
  "key9": "2PqvyucLgSPyoz1qjobe6yvs997ssMNpE7EtyQkme2vDYVywUvc58xhaSXRXaU9v2sjuCNwmrdjqbdjBaXtgmAGe",
  "key10": "4V6kqtvahxX1q15SMHw3hJPw6SodXxb4UceyEvTT5a2hnS766jqtRFeCvEbfyiGkVViCYgDzsKA7Sznr3TvBQpxQ",
  "key11": "3Qww7Wo7Tq96cGUHTywGDCaTAamDGnVgCqnZWaB4LqmArWVwSHcwZEgQak1w4chGHcFLB8bnfvA6iaMF9CGv1Prh",
  "key12": "5LS6AYZSDvS2dBbrTV8JN6DVEGfJpgGgpSqAqBDpnycGp1nAtTUHPWpVMnZMEqTbjJZyeM5nEfH3PwSSoJh4CkDs",
  "key13": "3j7wYx7GLkL2aqvPp2qHyrLwdRHVsmZw4nGRt5Kg1GHLY63eVbkNbzumKM55GNwcSexSmoSzbCTYdxrfWh6jYuLb",
  "key14": "3mLhgf24zyfzXqUbXdee6Cn3DY6Zb6b9nuUbFfY6xix5ESgDBxKnEsGMjUWPs39TZUDdQ7XVYnu4mvU5uc48Kcy9",
  "key15": "3kGQYUSB5vVs7fvTpakrkUT7ouRpLd7ChLwa72eZ9rFXXwzrqJEb3oqw1n1zfiS15SaseMrZjsE9JRgNVyvuHSai",
  "key16": "4L4S6F5o1URWFfkChNuRpVcCAS73mJ5oteTfJVdX1MJtpQwni69xPNea5G2mHNUHN4ZqEFhqXopwhLE7wpyi6wVq",
  "key17": "2nDzEFnUdmFFMjEwmj2H7ZxweHVySxv9Pbq78bjwJg9EBSAK3f8Qpruz6JV8g2984xAh2oK1ZJiv6dsUDUz1z6Ds",
  "key18": "24ZKvWA6a4SyzsuvY6rCMtiPDmfTeEZGAoViiMJaCuW2aHmyg5k5uKRegAfGHk5qoyKR6wJRpbn5vPakPzxUPZN5",
  "key19": "4i5EGUmz3sbq3JnuxU9oKfEy7dJVaU7LEffa94f2P6NtNEyGnDFw5jhKRfAo2NaDrLaKgWxpBNGedTs2TDrmZatE",
  "key20": "5SvqeVWwR4w8DXcXCWGFUP7GwdwyMFq5B7tbjc1BK9Yk5XrbpVcQ5HEz3vv42dzL7XDJpR9gkGgmJ6583ayHwJmW",
  "key21": "4Lm4qoQmhpg8TaxwryUjukgvnwTGU7uX3qrV7Hb4hnstgTr9ZF9EtLhPB4kceTyi6Z4ozu9aC7EG1gmGQFK6a7AX",
  "key22": "4P9Fj7ziPqFsXiCNwz9CECaNrKYwYsnmYj85NCMKBpnNN2tVcMSCPqLu4asjWgyo29fcZdx59EmmWL8dR7rMpFUv",
  "key23": "2rx6bikbFXWVtwU7LD9poEK4AYyAKgD8KC4XNULzdudAfGqgp6NChYqwsS3LX7cEfJAHE5KKyjvSwPWmxfVE4Q3g",
  "key24": "3CP9bxAq2kUg1dzpSpwkcVW8toPCMVBTQw1W1zUkKhd4yDGngqMjHyhS6hN753BLfdhaqQcEhji67DnGUmErzFDV",
  "key25": "3u86d1e2eHdbTgTgMQUqJ8KFcFL6h3E6tbzFGPCDc5EPFUCPq1kAVP9bGCzkVVAEjLpBL4mwQfNnrqqZUQrMF2Bu",
  "key26": "4k9UAuGjDHBNDVzxo2UWiu5YTj5Q7GyEaYXyMS6fbGJ5HUqSwRZofGmwy9STSNhjXb2i5k6ZW8i9eW3LeNXTrKSD",
  "key27": "4kzFakoUGdTM6AaAkHnnv6TQYh2CXZfHB8YJpFnQh9jSpVPJ8DhL1KD8EvAn7ebERShHNDJN36esznt2K1rDDRF4",
  "key28": "5kBqVHi1Kj24qcsTT9gb944skS6mCVzfDfYnKcZW5m1k5nsQTsFvtC5YTpKTRkbKGWFE5xJZU2T17Z1WYk8ZBn7x",
  "key29": "2kgsKNHu9QLedgbuScLvca6xwrDcdkaUarKCezx4YRWsyCwXAWywxntVqeW3Mh7MGQrXdSqiQBKjRMJdtzy5AvRc",
  "key30": "38p2GkrUgPmWEJ48TUcxKMP4i8sTPc2AJPQwmk8iYgLZjzt3p8eRZqEmbfQCYq6xxY7dWn3fyeC1HAcLKgmpH4He",
  "key31": "4BZmWpovnTnQesmS9K2uNFBeVtbK4AU9qkX4mNBo9ZWCtcS2JoWmUEpzSDDQhhWczBKq2CrVtoE9BajMiBLJZFfU",
  "key32": "2C5k6EPhi5naVXRQdPoPuGL6kL15NCkNhKcvW8ywKuwJLTuifzG3ZhXP5SdeUSNKqFx4RYrmHGTNyn85cRv2k9Wh",
  "key33": "43rJFSK3h6ibUASMHzoKEWLSCXxLx399oTC1MGAY6UyFRo8XnotXgqZBYbEmfVYeYMfCqpmPQpevSjVTSq2fdt3D",
  "key34": "MixzaoHXNgHFv28ZY86kiMdWp7J4P628w8zFpcKTEMhMw2Y6yQkJnXc5VXSy4gYpct13LMbtffh6sHmmQbVgWjo",
  "key35": "5Rj1nHFXXSYBUcdWmfPxPWotmypDeBsdpBJvVZEiUnYMs8zDSpMCAnDUikhQr25yyjGCaSLUnhc21eJJxgSbiN5E",
  "key36": "KkRUq9mFktcmEZKvHrrzkM1dp2PW923gXgQGr4yEkbHrezMrEUdfSiWR8WUcH9HjAmmtTaBZFbV6gwEPWJQcuxW",
  "key37": "sHmbs4zdUJUApgd34gBidFgrLhAfLGpDYKWY3KPruKZwbcS6jFRzG6bX7aAxgdaCPRVasFwzaspG5PXra2iEZPC",
  "key38": "262ThgWc8bMf8iW9gChjPYniCiGpirW1NnvuWNLa8b7ymx4VYQcKyJ9GyCnQgagqFQ8YG1jUtSDwruQ2VjsGY5oW",
  "key39": "53oKHh4DUDxXdjL4u62mCQ8vtaYsPDKYC7yoEvUPiLcPcKS8AoDX4bUJAf1z41Hwz94PZcME8FTw7vDy5pJ849oJ",
  "key40": "4VHSbpq5CSUCpeGPqZoMkdqERbMixbzy5Ruc1iAQ9JmJWkAUibWKLKNCxgANBQDWXmtwGFDYFWXqaDvyh5fFhpJi",
  "key41": "5BY1KNJkb8BUdtvJ97ZMiFMWFhc9pakow3p8YyFWP7xRdztBBLH8nrUAz7paoidVEdm9chK2Tek991KffZ1t9HRm",
  "key42": "5HeQxzv8LEzVpH3uqXHcWT6R5nTVDx7otZSkd3zz2mEmYX8r17N4mLF1XsvEwugrzNBwSAxkSDvot8tgFXXXAztL",
  "key43": "3HFJYnYf5SBZGLEfsX73kYD2ox4HJGwFkXfuWy6XhHMdSbaF7iHUQE32LmjZXYtN5AGqDntrUZADAy5TMrH6Cj5w",
  "key44": "3DWkfZufCP7qfgW1m65s9jujMvYe2eWiKuxLUDdQo3rTq1yNaVTwAgwvUnDY4Aj13UxW4et2nsCLoWC88N5aMaTJ",
  "key45": "rNLWi12LN21iCw8i2KdnTzjGExaJKWSGDiQG2QUu45VxAAxe2fugQwC5ggenkYS6sKGkW3AKBy7yduUJcCNfm3s",
  "key46": "2ve3yoSXdGvPijA4Nj2rqJw7ivmmt73FKBvbvLp53wejDF9yqReaYPAkeiua9JkJnsMx2bjL7aoUXYwZjrc3EpTp",
  "key47": "4WiaHKxNFx8kqC66Jj9wnR9u4GWdhFSMxUjwCLTEtAa4J6zFBKym9FEsc3UpuLHrG7kyGQhNc96s1uqLoAp2JZ18",
  "key48": "4c5qPQAG4DyMVACbZjjyujXqV7UVHHgmdh16gUD1nbW25D4U3q3FfpgCxY8jFMtFBj8ZdDgdzBCUg7UEdTv5GvX"
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
