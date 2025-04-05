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
    "2KLzeLg6Y1AwNvXSXqjdEussqGfQ5cttZRBM9uCjRn8MKgX36GrmZD9DDesHks4SXXvhtdriWizRjbe3JCaoJ9SN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gVjVbM1K69wd6ermtgfc4XB2NpAfPtYyFrHcoBWJvKoC4yLK6kcrpPXd9FeCvswiYbPzxG2zRsvW89e8LMxdcVk",
  "key1": "416qsshDdHCXBm73VrsiAcYkV9ZkrFUqmExxb1SxbGLojCzMWYyVoY4jqbg13AtFExH8S5fQPAp2jLTrM382XGR9",
  "key2": "2V3c8nDHRtMbEjfJifRwpVJDMtwAYvaUCWFpw8oZU4UhE36h7s59C9bWUWKXShEvrvjNJUnK8XgarVtVFoftBHpq",
  "key3": "2qAhptDQDN1CmUf4FLiNHutNqmmxxd3V76PKFcraazCzkwxJR4NFzg1Ba6nGrHGAtKiTQAugNDUxzcn1aetkuBTB",
  "key4": "3dqsp9xJXLppUd47e8YwXBmbnrjLbZ9KZdSWk6qzTtSNDbEfXTAiDEckFDqiE1WxVZnPeC3mrZZFFbCtUSbdNCtR",
  "key5": "2Trj2QezVjaDbs2uM6k5tvd3W6MZqTDS66b9PMMxtBMqKyGNRAt673cUWofUnPxioMU5thz7TSAivvqGEsNDfrFw",
  "key6": "2bTdKdhLLTop9uiK4NZz2sQxZ7VvJWsdv2ENXU3usZuvC2gs5jVrUE8PdCjFmjcLREV1aP1HSQs16geqWTpgkWsP",
  "key7": "Bi1AP4u6YBfzcwCdpNjDhATgybZnM91L1yLcu1xjXsFp789cGTNKFZCrYoDannzUqde4tiZMobQSFqEwKACEPED",
  "key8": "4iUme6TwgrdGRYvbsS6FaiEhz8vwJZ8qLNEMoXLPJAn8KVoybPoMtV6gH3cfbjquF23fSsMCNU89qWXUXWvR6Z5e",
  "key9": "2TPy3Wqnysyvij59Emffcvz5MpaD32TV2e59yxRpsdfihfUQj7GS8C5uEjm9hDNK1o1bRUE3c1BLtNuTrddsXnuM",
  "key10": "3teCCYB6Te5DmsuqaYJLM6cmLNZzfrUGbn2RrGzg5EMBJ7ZjJ3cyPejpsqME44eLqPRqFTmqYjoJyaaQA5aQEM5o",
  "key11": "4tReg4Y6jLrBeSpRndx6MEHyquF1cAMkegnuecqXFK6GGw7i7qPP4USrzsG66UyxNRm8CH1nyJ1zvs33ZRoLLtQy",
  "key12": "2tA82nPuYLDjquwoBAoaWSHxyvjr3B4uJLNXnUa6AMB1JLbj4owwTyAbHURCniBQ4E5s1R3VTHJuG9jDW21kqdvx",
  "key13": "3x4ioiW78wKrdB28B6esZSCmasohpze8FxE3mjJDRECYPu4tRxpfm1tRAh2R9YwwjdAjdXHKUF9wD18C5c5iYwne",
  "key14": "2ipAxAzJNFiFAywJbwoTBWfy9vmCTPqePgMiipsDLxoueAmkDg5BiWaof9KmRY7cyAVh53xLE16cfGaGCGZzB8NV",
  "key15": "FBicD6HCqG9BHVSsVVCanUASPANDx24dgow3vsSVpDsAFv3STMUcgDM4wcn8HA1rZjvttFWcXDHSB6gDeGGHqKG",
  "key16": "27dfRChhtkqJaKDXyrLt27RZLZmF9YvHcKw1CRYzEdRfy7ZJWCzcdNe72akAwYoBuFxGuG7WfPuJCnrdWRSzhcCN",
  "key17": "48BNWRUe5trqbR4BhwBT9JpmYBQHepw4VKXeRZgp28Z9KNUARwHVV67cbGKEc1G2aHSoCKa9BJ9xBaBkRHKD7uwV",
  "key18": "3jVpqP5bDapRBC6at1AA2LNQWDfzUTQX1zXFfBbwRyEWZE9MkQUWoEsLrTm8C27sZ7PejameXvKdUL3vuzCTVTm",
  "key19": "2qTdRvuCmtjwywg4kcVMkBMM4si12FxMbdXENVj64qcwwPofLsmN2sMtHY28V8dhow8EFygx4TDtNQLRrQfhHApo",
  "key20": "5gHrQFmebChSGUjDKDjGmA6rXeJe9T9qxKAfnpVkvejEErrDFKs9PHXqsUqKtJN54CEPJcna4CPnwfkFQoZ8hLx2",
  "key21": "4iu2LmyuFvwWcc3eiYnHbpt9VSA3T4jyF8BdbPaf2yP5K4tbDk3gEyW8iKoUSu9kG2Be7ZP7WMtdnyEHGv8KZRQA",
  "key22": "3nbAkym2nYGrsRr5qQFCnU8UYhJN2ZLYjdWGXoj5jzkn44y3HvVZckpi9p85a8TVfRMzoyVfd329Qrcp4hdAPVER",
  "key23": "muAtM5ZnWYedxMSE5cn3FCUNk1tpGjBVfpf8oEktjWSQ44S3yMBTSX47yXf7F2nFvKacGyGHUmjUiSotzHFwj6x",
  "key24": "4WQhcRuwqNgbezxjWzjuw7iUT5fCQFGbwaBh8Dir2aNZDatLjpnfrkTDVViep6mhsC1EeqV9KedXFW93dvEpQYWL",
  "key25": "2fbpvfEgQtt2aUf97JCKiaghSCAyW4WV7upqxa9P5RmUwohxuB9cNzPjJTUM3ERY5u4Ctave8xp5B6qf22QkYRWx",
  "key26": "r3isFuD3gJPKygTxfTuFt5wMc7V3yzMxihwm4dmDP6Xm5go5RYEHvcs7Gk9qmpsqKTxTRkSoKXE6GRNcXUJixoQ",
  "key27": "2VgRDJVkkG3TZ25BsawaUzY2NB2jPWbCcuftWQWoJHer2icpzn8VArxiddKuZvuTibKS41cE8bUwBknaBYjHnjhH",
  "key28": "nRDVTEmxa7jc56DkQtX8Z8YEbF7vSEXv31GXcwEwFBhgshDo4rMwfXQVQ3Ju3XGr1v2B7mSZ7ZyG3HmUAA7CvJq",
  "key29": "3wqsscfaBiMBavunr671szr7mHp44uuCDb1mX7tAw2sXUWo8AWCyVbPYVuf1vQmCqKNkKbizERquKJYWtFQ56hDu",
  "key30": "2UDGL9E3qJi2B6HEHscHH44KqWuEyTxHXxXFjQp1RPJ7zByDLCtFGfsiBTRo5p3LrUt6cFLPKhRhjqVj3CsZGt4n",
  "key31": "5aa9nGDKDY1kPkNdydrY8y3EUsSjRx98dtF21Tw1RgWkejB7P5rNYhSmoQRyxFQv4pfS2sY2Y4Qw9yGFgg7631qK",
  "key32": "287wuafH295vs9yZ2C9zVxFXihrZ5WshmdKMfhb5pQCN9tEZsD416DJhGSJxrEEeoCbmpNQcLKw5ajo611BMzs76",
  "key33": "66iNxTCSqLD1XPsr9rBeiKjw3Z9EDEkkgrgBW6bTLgAYFVEiEWkFrENi7mtUG8ygeBLGoCC413tH5Bef4tqrEQCx",
  "key34": "3WYggiFeZuL7UbfrCtpaExfKgqdhmxeaW5rk58gfcM5yeNoi9Bsv9xqA3sRsx8gBqC526KEdN7aKcq1XdM27SmAU",
  "key35": "2aoEobSAsMq8p2PF5nR4VcCowd3QcQz8as8A2zkFqdW2DBMRnW8FjehamdV3V6M78xDgb2aH4gS5FQ7i8gyxYGrv",
  "key36": "2yYbuoBKE2NhamfbdkoNaVjNTB83HsBgKxTfPcvFjgmtXVSSv8Fi5EJ8EkKn1LqztU2PMFXhXQ92yYXpp81b3Nce",
  "key37": "LgmhmSheAnvQGArYAkwJkLfWvMWzdKjYxvPMtsMqrKRkDukpSSoJ57UvXMyYLL3dM4j47gk3A6zLxcxUSHt5efL",
  "key38": "3Yag44sXs6ziAjZ862em9HATrJgoerRezuspC5T6BKGcfPzHjuduqW1G932fH86JgTpQHxYVLsgNY8YSMJMQ3U83",
  "key39": "376VraMRdJDTedsFTJ4WiEjd5rKDVnAFDEpviPozZm4K7QZejgLfpbhWmxtWfeDtvTkZhcnxJBTeP2P2y2FDMKDt",
  "key40": "66Hy7d93zZyJfDTJWyuFjDF42dykktsAUrGtzo1Q31BNNgNmEVg8r5zazLT8XFiCYyHvgPYCp3xLE7fNrTLS31cj"
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
