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
    "5X7KvHBAwRfQxfuDWYJYoCKGy5mZCBoPKY3bvaANffZ2vKNRcjZrFXBKVpdumXwFk1kXyZysZTEbu3SRkgB3pEMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MWpZ8nCsm14s1Y1C8m2iuQe86Ys2SPGA7md46e51UWHrCDFZhLSPUcFtuL3hxnSCgE4RMkqVnA1BC4vfsy8Zk6a",
  "key1": "1dsycPtjamA6HoWuRLdNaXJkgBsGSJnuwRrSJn5wbuH7PvXxUerDufsM7ALaULc4qV3ws8ra75hgDxPKkoJ4rvd",
  "key2": "2aENVBAn4jsbuxd51UJZFw4iz7on1zJyYwEcREpzuXkwMaqCLtwz6V3srEVbmHdAFNZQmo72RqarnE6rxT5Efjj7",
  "key3": "H3quRCZUEet6kmMQFh7sPYmh5TPStqjxBGbZtZYWHH45rDEhUijcuXTdrgM9muesz8yGDquNLrcsfiQT4Fo8XTk",
  "key4": "4gnfrTzmQFkdPjt7yc1Z5nzyg6WsaFY1cNqsaBGudL9EEhK91VsHaHK7AkfJ8tmf3ocdJvgmpS7fCkUwMCJXJEvd",
  "key5": "vvTRbN9hprdHd3WGdrxwphfrvYSavrdioYpiotSeWS4zRisGSUkxn94xscA4FKjH6JGsfSHb62mD43fvG2XsNfL",
  "key6": "2tEYy55ycmSg4SL526ZMGqvTt5tc34UH1JPdDqz49DGtGuBB618EjCEMeJ49Bpko19GATo7qePT9jc8vZJX2HwW1",
  "key7": "5FHr6uBt9dyXCQpzYetwFKTS8Pm6Y4iTdZLFSwdFzy1DpPcsYupjBokhQztHh78RuqdpE8EtwFmNYMHhCpjTQRg",
  "key8": "3KBv3EeRKimHXPfNfmkuULLP5e9pgjqhsWUhVDcrVwvz8yY1TAtp69v2te12NWoMd4YZaVcLtFbEipUqMbYUiXPu",
  "key9": "w3g1RcfVing2Mmgfq6A3cZmH6ywE3yojkmEkrcXyfkHpcE73Ro3cVRyuhv5L3wyjjkiQYiL4h6mKtSDyoU3zbPD",
  "key10": "3KN9XW5Pkj4o5gwZhQQ5mAwuYfzB7DiEhfybtQfwAsy5Gh7RHYbsBgRuJ2vjFffdxmQrTEmUEQoQLn7mRnmjitBb",
  "key11": "647odqi1UZ1ZCz1XgoTySJLy2foVaTHd9DZ5QGKzwQ9oYbQAbwThAiaGp6pJWziZ275zyippioWe8vMKhd5kUa3E",
  "key12": "4ZMYq17UdzieyXofH5xthCaWYKJNFjXJugzihcYHye2LEHax129DFgnk1jj7LLhMkDaeNHVgBTUwE9ovY5j4MVbv",
  "key13": "2PeimWkLcHzj5aTRMCUur5mDMA7nN9zkLbTFWBPr2pSZgb33AABb4UXuaPBYbEW3ueTwCskSXY5rqrG73pP7Lpco",
  "key14": "wqvgd6eTM9o3b2rh1RyxF3hHywKhkKcMhruT2JrWthupPxSqs91RTSCXbQxVeM4deyAFPWmvUH2kgGCoVFCihCU",
  "key15": "3TD5V87i8DJn3TgPqqrKXnMqVLJ1VmohN4aHm6DcyVQoesR7FeShuVFEoa1nG2AMWEM2CFsuyaXmGfjjXJc9NwKa",
  "key16": "GYHrfnQtp7FbixmY8vvRyqn7erm2rVvZjFGVuUhNLnykwUqzujafrmUEMesKmkMSpxSPXTHVgAEurpLahRkqQ7Y",
  "key17": "5BpydUshWeyEYVRkf6SQFnJNpURa26Eud8wFgVSnaazxSVcXzejTAqUiXnAvBEbzspvjBT23GhH19SEgP5RjZQg2",
  "key18": "4gF4Rpk5MJiG3Zxhb16iKkhrXUBMVB42uZEr2sokKrqPAn7Hts2EHWjzptNj9QcSjiGJCWLSz1utmusqEqwdBVmc",
  "key19": "4WrZerMsJqXF8HjgEevKRJRui7FGagUiHzpJA9D2e7nb7AwftVVjquoGbfT6MtN8QanBYxosh4Eb1g8bsTTGN48B",
  "key20": "5JXEs873W17W8RQodf4mxzoU42NUnFAauesntBsbVFmrfCnEZZaZsL463xbLTpodian9j14ACRj9Dr6DVyPmmEpb",
  "key21": "4Z7LmXNYsbo9F9abfAkBU4Nk2TmcGbGH1Qb8xZJUjRVDcogy3qMKy7No3tJz1Tah8Qm8XVG222b9YPg11KEGopzJ",
  "key22": "5CNwc4VVAj3e2ppbMJJqyBHMQeJD17T7CsyoZnX5P8bijP61n5CNHUCtusk9ezD46BhoEtNqpbtczgPSbTEpCU1G",
  "key23": "2j39EM65zkttXXtystYkZ7vxFk8PyLBsH4Xbq1ZvUVEE9qYJyvUPqUdB7Auch31GxCq7oc2B3UqAZVLhL6mt2L1",
  "key24": "4jASRzkPXuEwsoeVFuvw8Zu7hxqca8LKWE2apn9z67f91RoBFVSyTu62KpDJuX41fpk4LZPQrhZorPs9gLu6CJei",
  "key25": "3CKNmQzzNzQBCxkr7hqgSigVD4XCEGMuTZqM2V3LLRF45hi5AUQDtyfVZuxK8E93q7aQe3XJ6ctYunhGrquYBfMz",
  "key26": "56vhMFn1JQJLWFgAeeQHLmn2E8ZRh5vxXfsQMEBTHYHddfe1Tpi49XuGGUzQZHn8xezqQuXVfVGjpUanXRjcX4AQ",
  "key27": "5bNW61rmMyJC6GbUPR9VWqNZkKauJvDGPR9utzBUL6SNeZ3D9UdeqgKT8BFQkryj6njrzCPeDGv7tC15RUgua8eS",
  "key28": "26RWwkXkc4JQki3bfHVoCHfxzxSXnjJFrknizuzT81GYtcaeEAeTQ1GNNs73KbKXaWCLieCAUveeeGif4SzCg7BH",
  "key29": "3tPgv7s9PnSV1A8mLEWt4rzgdbPKTggnWtyg4h4QMVKorgAM3VBjevmhUNpTCSAQiYuuChFKt4NriB7AqJZKuJ3Q",
  "key30": "4dyAdh8kFJqY9TVPSqasvcAtxZyPxSK39GLbvv4sM6WTZm4W43vHafuRCodG5VY4hv9Ts8rV6CwkGFpcLbuLp9u8",
  "key31": "2ZTBSAfef6p4Rsb2D93veNsTR9kDyDGvCFw9y4FfkQQNWg5UUTtpMUvRfW54E511aKBBPFfgLHzjuYXvsXVFGa4b",
  "key32": "3JwZGHX37eqTENigJS8ep8hC8MM5QXK5NXkcKdXBmh7AAaDsJ1kaFDfuS5hVydQXDTafZK2rvLyr5bbfScZzTNuJ",
  "key33": "4Zen7xB6rL9N9VzFz9ufJ3pthiecRWhgkxvjL2e6hN1WXcbBq8zZmSUkJLigdUV2B5vPRLw15M7sSvcVsphXJ35M",
  "key34": "2xQu3GfpPnHs6iB5E25ymshywubMiF2YSFF7fzRtfMd41LKCztpyTCywrXgLUADvmFHwKhPeFpSXgRn3qCChFMH6",
  "key35": "wgg8BxKYwnZGJ9yYVFggibHaDTihF3uLtGHAxvYwW4wPYPVzfasawaHNQpURzxk1rTm7BJLGJQ43MmyzHiTQbGe",
  "key36": "2sUXCHV7HLhZTZjurcwraXksBZrJbVNrJVC3FSTNY66GkTvyPBHkTF3ZGBGXpF33D9vvDvxsJzgAC424NuA6Hwat",
  "key37": "4AVigNbESpNNFDrqDUhHpd2VszxAr7LLPrUZ5CtkRNVGBgRiK7quGjfNYVci3h7a4GQWrWkRLY3HLQtpjYYmjhKr",
  "key38": "2uFYmGLkp3tU6smL2MqjSd4R53YdiUBAvGUsw6FbpXzUCNVdWju2fDEvMWR8BSR8XQfdHSAg1AgekmN1xQjPXqhP",
  "key39": "5cjkBmtMwi3K92LuwXXVLZgh6bh6ujoJ9pdAzxvYCpY1pUu248AASP1wU9bCoo6E6z9QP1D1EvuXbA36arxnLmkx",
  "key40": "5wLHH3q9rGM97rCAaMFyrre9hFUNQYG6PaBxZjV1etBcqJ9LuFX7FPfW9bLkpMTQzDkKbZUnx483Zy8Gi1ivrRZn",
  "key41": "3oULLr8c8g3Y8jEZb3t9BcEd6FNoYC5FEcMKcbTGvbvBqDizrDQ77t1Cnuy5tRxYxbZnGomVnuz3kJUijZ7Vse8b",
  "key42": "2ZfCeYg2T6rDuDg7HuyXpq6JBqJmAauq9F3U57FRi7sjKc6CPdKqyUKZqgmGbj9ryHXPv4nrWYK7T56Nvrb5b4uP",
  "key43": "3wGrkEVx6B5QsqwL7UiDq4QRK2xa5gNfks3PZ7LBUp8ScqJmwKkJTFLr8xSkpQzEpGKEvrQx7TaqPxWpZNeJadrX",
  "key44": "5LmBKiMjoRN4cCDHuEfePmGmtd2NNDU2hr98ZA6vwgpGV7VnPSf9x79mhWSVGRGVfFKCqd2tLV69MZUj5q6CvUeN",
  "key45": "2bXTvwoQFGpzAG6fYKS57pYRbPfguShYzYo7pEfXJxEVeHfuyhUgZkMf1FjZzBuo9gLycM2iwaBBunsNsm8qPLAW"
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
