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
    "4i5TusxXQr8VPoMWh9MGjwQWDa1cXdULd7d2hvAq4fC6iLkrCGevr276vAGZ6WRdDVfQZdB2Tymv6AqpErGY3VVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "474x8aPHotTn9TrnnEMssagBWy7WngLCaXaNCZn5YRVYmn657FGetpeZ3P8LDUGneYaDysgmphzB5xfUuyNrifHV",
  "key1": "3mJJgcQsmuuxT6rPM583ZWC81TdENbW48HvXeUbMwXEaStGmK1gtMeSJYS77NjF8p2oVbcAuYTq6WiDXA7UgfSCs",
  "key2": "4XVs5ioVV8EnKMzoJJfx2Y1sQxpt8LaQwEBxGQDSyxUN2Dd7HPWpvhBFEkP4EoLuA8g4pqvJsbuoWNVWkQcRrZU9",
  "key3": "4dewoCKuyvqY4wENyUxLTKZMExKaAHQdVnUEz7ZTqDjtN4RJJxRNhVgCF1LQarhGospHoHYS7DXCvDAGmSHnt8zx",
  "key4": "4yeSenUAAiXNB4Trf9BwVNziec1XHALbsM8DJvcJHUEnYDaZ55ZMPPiUXHYSszweFKe9LdiREVgSC5dDXTsee5W7",
  "key5": "5ihrcXAMcFvgTS7jejnQfY51JGxnXA9RKTqgSTFa56W7NfFBfcfZConbKVzpDXraC38JuzrYayudsghsyrnYYbDt",
  "key6": "wKXRywPbKgtwsDPT1EHPn6gBfZA2tcYG3jdiRXTmoeTHsGj8aTsg8rgixECagLdv5DzYbJ4jfEsuHdntQet1dd9",
  "key7": "3hP45ApMM6tZBxkiRWKiHcf2A9ihf2g2D9S5LgHoGQmmHwQBg6b6KeeNXU9MhoN78kXD9CECaG94rBL7T2oLB4Uz",
  "key8": "33smoz1Rpfym1WZWDBXsGiLuewztJNubvT7korYUf4Jjb1NLQTfH3YHGr3EjH3QCZgydUZ5F7Re8a8vUv4d3PZbh",
  "key9": "5urYvoGiUFRRE98gxueTCnmWm9JFtFDqdJQc6JEYh6a124gzYqt8Tz67ZH2dZH8U8hdz4HVKtETLit8xdGbVG7wf",
  "key10": "5MseBeCh78yumGPhQ9A8py9raZCPpk6xWCmYCo7Ryz5B93E5jvePmASVoMpZ91XiBFMM3hn4toCqH531w7qQ79aV",
  "key11": "YBGe7vVbdqYC7jLRp2V34mLooXnUeUM3mwbrkuWzWoHrft31UXobjDr4ARVRjP6DzT24BhArTLkMsecGNE9FXR8",
  "key12": "575hershtGR4k7TRXgroi49dTVjPuwtt1nWgdLP1XdcsMuQn8tgxanKcr5SPJLZbAUxRtbZvcfyhuSc8RRYxbfMF",
  "key13": "3K7FvvoqVzraZmSmaaSGArtRBQ78pwnR9PCoAY8BAKzf8gv5HzrombeDj9edUeSJwZKDHUppnsXXGPZZwMg5v2YT",
  "key14": "53t9hatibcdNdBTXHVhhhZFEfkKkGuQT9nSzRnWH5Z97XKtFsUBAZpb6CEytH1nnCd638QcwMHFhypvVgE2L1UU2",
  "key15": "4XdYjLyCnqdr7pkLihUdee1FmcMqm5DtQqq8arimvx47qKBdshdnBJVRhxP5DbhQvshPm4qrUezx2RUjmzY553Wa",
  "key16": "3fKUEU6r9uBtDFVBYHojQ4LJvQiDXQHgFia6jYR8rc7Z9UtJ3AVKF8gJRy72ovYQ1aXUbxKEvrQzoQrp86HwGmNN",
  "key17": "KALem6BmM9dfkMMdUyoDmcaPbHgfdDg8Hq88xbFtAkaZxpBrpVAF7TgWMwerNEVzqaacVWnPZBgaHCMWkuMhPVJ",
  "key18": "5BnFGZYf1f7tqftQN3hN8EPuEmFytLpFehZ2axykbpMd5WEax5jQbkNPzGYpFC7sEBhQhx1EwvJiNj6Cx7UTQdXE",
  "key19": "Fg3FhUZxTyDKkrkEGU9zxLYbqn6ZcfP4vw8Z3bd67mZLLqVLbgPmE8do8JMCpfibCBQVoQnvdv6iSg2TUUMMc26",
  "key20": "4TscZSxpPeGDCk1tpYUCr59wQ7qwUhfsKbhNZHhUsK3FiorSFCTtZjVAoie96DLu5coJh42e8ph28Ro8TSJypg74",
  "key21": "3cRH1edLwNfVWscf1VcWwBPERaLBDc4qP94qYf9jkVMCKHtK1yMwzbBFPycPHXaiZFkwzf25kesKs2yhZocGrReB",
  "key22": "4jeCmwEuL3cZgtZg5eZrnTKcRTCBMjoED2ErmQtzQHcnCAyas74cHXRuCiBzoNqJ9DfJy1EvZXtEjrgaZVAc5mga",
  "key23": "22fP1cbdG7RJ2489jNkkt3WiiXKrZLwtQ8mMqpPHBNCRCseroJggDwCvaLHYTejsMGUeoWqfK9hsXnSZr7MUehSg",
  "key24": "2k5FgiwJyYZynyX19gpPjkTzuMJqjXgzaJYahZwL8qNqR4Nh1XfkakFnQWxxJ5SZEvUznspsmcw6hpPTMzjrNN1q",
  "key25": "3R7Pq9CCsqu29UQrYeM63S21Y7yAPnYdyBfpEjdK8UwioPhcppEyoLLj45L1EXzHDv7Yz4ftP6fe8DJYXQAfW9P5",
  "key26": "4x7iXECEBSkpc6EFUHFAA7GtUhAwPJ2Aj3KfpYv4sseHgRL6K4JDLLpfXYNmpBrw7dG25sD5feAjakyE1s1M7MhC",
  "key27": "4YXPyoQ6yKU4dDxecqSDA44gheuVioc5WyTHYdsZt8MmMBgY7nmPxPgKjuwzBV5d8qvnJt1uXpBnVCy7rw2hByCv",
  "key28": "5KiWeMWrRJH3ognnXLUd6mDLBJGHwLmVFYcttQYyonzBpGVVPzVdA1dXtJA18AWUoQXdfC8qvHbqbCuTwfgy7bNe",
  "key29": "52GiN5LqKwbyn1yd8hDyP2idh1fNAXcjb6cAtydZwrVa5UNEaPishPtQE8KwdYWCnsWn6R4K7enW2fSUbGABCu1W",
  "key30": "3xvtB5fJGUE31ShFGiZTD6sW3NGpQmdpqmbH1xkCCjRwGGPxWizBgSby64JFeAunKZa1KEAoQptD5pxKfHvDWMFX",
  "key31": "45mmVVmCNpY5KhMa2v7koUMdoAqjERYxRPUyjDVfjMtku3YrZDAjYUJeVzB4oy2xLAUrM7j2MzcvGrmt1x3ATXRU",
  "key32": "3tCLiAxxho5LdEPJyPk7PKfQhfQv6x3pSas3K2G6gzdGbhQFzhAHhjLUHmTBWbsE94T94cnF2TKBCVfkFPxwfAEp",
  "key33": "YZEo5iPvhFfVUhtMTxKyu1X67TFiV9V7zoMJnWxFPt69VQer5to6X4fRPjmeStnqBuCAzEydPJhLwYnDGj515U5",
  "key34": "61K1GHjE5RSARKdP63mZbDgaNxjkEwwWC7Uamn3HzsXvDWx8xsQFa2p2Py7FJxwMXymZBeGDFHAABXUFVu3TSvxD",
  "key35": "5oJeyGzwgA9AkDr3mnx8JMHjdB5ieDYMcANwsj2krwD2FRvLK6RKhyYhmMDth2RXHeFvxWhMe8b62yL4kAF8LYRg",
  "key36": "5QDhxs3RoPHwQVotkb6yyUx5b8EVPBEstdjFDhKV8zv5LtB9bBkoJjEh22baM6ocKeG64TQ6yJ9qiWh5H1CqMPaH",
  "key37": "iJNg6ZVqEWK5rJJ7f8EQzPhSCsmsqrQvDuyMd2SHa5xTRyygLp3thByj5jeW3QbVGHCZJQgmAppNJZJoNRm8wVg",
  "key38": "2EcriM3X3pcsVGJQTqctnQ2PU4Nzm2FGvMpgJ8kDAdFVmendsHUwk96ULkn8zHvddvm3rk55SXUJyhz5hNNZkVve",
  "key39": "5aQhkvZvKPpEyjudutYtMrXnr5fNmTWyHAeh3Y3G4L22kfrQc9RuQuoZtLfP2inAZZWjoTRggK4iqretaJyeoFXF",
  "key40": "36kEhDuePswEHn9gRUcWp9cJCPztsoTbJFG6dVYELCHcQQ3hVWQoWmcUBJbBRBTFpiSGkwYa8r7rhGAToibXL6uq"
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
