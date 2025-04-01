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
    "4dNxpDNeY9Q8Vj3N1cHhUhfirk7FKyTwaCUmtvqFYJSyXrVJHouesMJN7b52Nrvbybvi1VZ7ZqxoUtkFiWt6kXiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32tBY9AHe2nWmcj6VjNvsLsgTigs6JzKioStjVZ4Vh4qRvD9Vk8EaX7UbgNxnV9tZjBfNhpd6QPLtK3s8ms5SeEx",
  "key1": "48YEydyTf6inozJS72nTDwre6nb44d4TGKo5r858sNY15EcDwMQftDTMpSy2d8j7RxDVfk8u3CeHBcS52thXVAUh",
  "key2": "uL2GXLjeFnZ7fGrAWE7hKLv8cQJbky2R6VdSFL3Tx6NijTV2UX8up6mSpqfj8ZARpAD2vHWw5p5g7Hh8584yPwy",
  "key3": "5ZEofLZvAw5T5zaXRsPujZn5SV2HCYJ59x7ayasQHF3Ggr13esMvq34gcRuAcHnytvCnLSDfLweGvyR9oG5B1bMc",
  "key4": "3DQrwydJuPEoSyYj8ZygVAXbxp8seRN9R9jZxTAcg1PGp2q4Wsqoh8YRHNLC3nbp5uQitsLVgaFKjGd6H1tbC9fd",
  "key5": "2uPUgsUvyetAqUpMeSUnH9sSvBvGArdP9KgJ4qyD7SJ2yutPg5FgmbgBEUcDJVGJcDBfTrmjjriwieMVxPJXWM5U",
  "key6": "59WgYhm9aptRWRP4DvvSyz9kimmuuDA43kHziKkzTUgmT9Th8ARFoexx1TsZbUqvGbnyV5G55Dw9MeowFNHsePpV",
  "key7": "1HgUAusKe5213Xdav3jEUxphKfLEndoRo1cq7QEgBYTNZrXp8FqLmUXcm5drDNPPM7nYick6L4PP83GdQPynL6G",
  "key8": "5AwDXJP4W8KCLM1L9ULaujwcuVu32MqzyJijFiLLAx9oALyQeZtXpicHv69AxGFUbZrK9Zd15hPg4qyKYLymYdcQ",
  "key9": "ZU7DbdxrTgp9adaFdExeHSyW5foTJ6hpfED5oaxuGcoGpnuE1ygERupAt6SZHPpXAAfsf7Kyq4sqvGATgTKaDNg",
  "key10": "2k8faDC9sEDpKLfjJvrYfQYJSQ3idUYj3QjDXcCWXCpMxv9Y757AEsaQi6prWum6wsTUaTxyVRC6NuFoZTZtmoFJ",
  "key11": "4ZsoBqKgjHfv9omfRHVBDk94VDvJT2p7Eu9GbriDxFf7MKmwkiTFQN9VJku5g1KSxmtPWGzYg83LqimXriHxQiwZ",
  "key12": "gYxYAGMewguw9hx3sp2xFLmhMpcB1zPbKwdEt88tz64vKByAjhcxWexZUgvevXKuSekSQ89f9PFE8bmj5EbFXnj",
  "key13": "dW2GBUaC1P5cE4UxFtbeuHtuyQtvTLogdyi6v1uuoSVY8xb4p5MjKDapHeLVw3S5Xy8WqMxPBmHPF57ebBqaJYq",
  "key14": "27A9yYi7tXhWMPKX1uSRtL6Z6efYvVcFJhwxruA5Niq4KFShBSjCgJyYDeTq92TfwXShpBCAZU59kHpLAQV9fLBA",
  "key15": "5umVHdYKjPQaCfH6TvPebkAY5egRaAwFkfdB4A2HkzwVmieMt1HN48ZMzW9HroUJu9ypoWoumps66ujquY81iYU9",
  "key16": "2gGiVgsSUHnMT1RtfcLsTm68yz9SeDb2SYfLTRYCxXZM1NutE7ZvdvEPLztrZPtWG3GggqF2AfhcnoPX6aVxt6Sb",
  "key17": "2wKi4HWZDa964QYVgEkDBE5RjZzMdpyXQ9Q5zVy1G5iwmX1gneio6YgCWGv9ELJQK1HTFbSuiqaAXQjE3JCdN32",
  "key18": "4ygTMAjyQyyRumBAYFMeZBhvLf5gQ6Ls9FXxb8ak9LMxVNJi7eNZ2nuqkvABgYVxCkuhjLdDVdfBY6Yfmxcxf1dw",
  "key19": "4CgWBhf1mKcvTLi2hCCXS7rj7YifXLigMK5GNktcyJZwyMv79K11CMGPECavhSE3ezAzxh2SPLSu98VJKCYHNxWY",
  "key20": "bcve7N9DVzNpTrSXUQokVjYWRjrAg9LsS3SRh6jnN4JWTnF7CSvUEcHAYZGLbqfkTu1UQYLAkATF9KUt9XgcVGh",
  "key21": "DGp2FkJYYRwcHb8eMZ9DnteN2nhgnB9Nfxmdcd85BRwjPXXW7uNfNXU6Pg56N6Akw2EXqotmzxG93QoPViytavE",
  "key22": "57rrvQyVD5nnofiSS5ACCAJWzTNJGFM7iUvU5ZL5wyvEqdB72n89n435iQ2yqjNzTwzA8Y5C898TFZfmpgR9cejU",
  "key23": "4mthgySqWH2Yba1dhuDWpE5dbdAoouzYdigpjyPQDQ41Dhim94tjxNDDx23NfSpXMDUZD1a25Fuh7P62VW7xZWmw",
  "key24": "oDUpfBefKoaDUt2Qc35Cs64ydtK7ohpsjtzXTWx7sxkXPXPBamqhKF7wfTNQTHhkbw61b8q3CH6quAsPSnBHuSj",
  "key25": "3gEAzZw23RZyuiSZzFBKLtnVjMwfxFeF6vyJDzZLGzBWnbPW7DPTSonKjAQNNfMVUeWib7gVhRG2XWgvNnNhA4SV",
  "key26": "5gA7YJf64PZMGJTPTEVRvt79JcXoc3f8b2UmFtqotKEAvGB25vk68g19md59Ebzh7esFjuqzNjWL97qvrQYQDaXN",
  "key27": "5JpoGgkPc2BtytsiMhhZHyhngxvpMP7mRZ56TXZ159U6kcTNR1k8JA5neML1zDfCzPbTEQQDmBPeTJS2Up3CQbj8",
  "key28": "3aE324q577UD8nSRTDqUYN6jPjQjTErjk75EQxEUPKwrrubChj71RE9JFVjmAHv8WHeMTZusCWvcNMeeBQg6pZGY",
  "key29": "57VV1kKR3FXtBJSJw7Jqr2GBUsjf4W8GB2V3VCjaYxrjosVhhYn1fRSHAtgvRAtEEZjSgAth9aw7S4i65DqUnYzA",
  "key30": "4QijizdMPacWx1bjdZhNmQVkc8a4yN6RYeSycXGHD2Ax4XGSnUTgjLVQdYbb3eoeTtQzRCjFaaZ5hMM4EEEQuHJo",
  "key31": "62JuiP8UDkikzgJe1WLqyTmC2fM9PRXmLLf3vQce5rVaFjenKwTvY7X6SNHWdjH5ZcjBZgwnto9JEPx4MDvmNe9M",
  "key32": "5vTtL2Z91gHNfN5Au6ATDSHXEyHzLmKCWygFewj4GSfisLvjKMcjSGjcVnCAi6xzxP2PcHR4yBok7jc6oA4WwrR9",
  "key33": "44MPcCMxZgJcNo3tQwSVEFgt6SvA6zmiycU4BAW2qqpSgn11Ck3L2ddnBnkr1AAt3ca7tf7xt62GVGq1Bsqptzrw",
  "key34": "4Nz4Lwob1tCczajyeNytfxzcJtz2tUd46Bs8UQHdxNZAXYJ9qcRknz5cx4oW4AZ7TcHWyJu4TRuYKAuYJJo1djJ8",
  "key35": "5jfo56oK43kjdcQRSYimmom722YRwYN93fnKEZCpEAUp1ywDqAAKV9W59HJ2t6ytn9GothV2tWG9jb1ktvi1wgm3",
  "key36": "34bFqBmeYDxxVbxYsq9qFkE6M8frNw986dVEU98Zb7Mbuu9LJzKGjtNm2KnMgMa8U15Z5kP9nLtCSQJ2SNBBg2Lo",
  "key37": "2HqXboFJ91hgceKLWRKK4WnRZsUE7Rnj5LZK5KC9ZDHF3ZqciPpwQaVFf6yeSq3czYN7pNaKutT7eiDFnsNTy7cv",
  "key38": "M2CoXQsVUUvwg8Tzm96195x8FnPhLdnijXatrD6MJhrzVSPe1fFHbodFPKkpD7HY7LuCNWybU8QqnnsdgcagsGr",
  "key39": "sPYrojeF12x5fyn6bN63F1ewzsC3NGvKQzvNKGmDYFZjPUs1rEy1rUQZtykUAd6A8FQoo5ss2ZRFakE3Txa3ErJ",
  "key40": "2MpZST1gsNxNhD5UuUjEBEWm23vkdx9LvR868RcaNveymGLgFSe2m8FV48ydRmPk78ajxVxT8ZapT2gNdTaFzbjz",
  "key41": "42CsMKGHjqsxAgDhz9XCLVoiuw3tDMjmLrLYyjcccR6ubBf3xzvz2WEHvhPeKKDUuC4Dgs7BXZSKnBZxoFktop24",
  "key42": "36GZ6tvUpSexWj4UGTWKRuoVcMD12seHtbS8JQrNBSeuurTT6JcCHZgZxBzoy9p6wQ4jC8wTk4pXv5ZTSHrdT8wY",
  "key43": "2UzQZcfR347ZUz8SfNKwD8UbimxW6judDPZSc6ANZ9S5GrwZpbMNk6u9ovyHhM2t98Bz8QKAnnkdzTp9Lnbmx9Bm",
  "key44": "5QARNdEE26kwPZ5JKifTDTzrNnmLKR1WBpLhcwWZZQhW6njWZ2AyJeambF2EV76w8hGjTNy5saCqW5Dnee9Vz2mu"
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
