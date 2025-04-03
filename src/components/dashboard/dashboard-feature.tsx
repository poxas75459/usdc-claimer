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
    "3PTgyhzWVFcKmbiDs5NLw7oGLmK29cFWfxJNNGhVx3k5mBuACUXVLUTh5TN2kYExuN2Us5TH4QB2E6dPTP1Xn5Wp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DnVTo4aqutcCdvoSwtEEA9au7kdWGVyzskEk17rfwWuHQnaT6UenExvn42poJfy8yUUA44fSU5ziwbVQU3qxu4Q",
  "key1": "4MUwg1RfFmJAedfM5fQJWhxJ3sXFQCQ7bZj9ZjytfoKkkztRu7KBnuNWBykDNzia2s16SzDvM4bWg2FgYa4sLvqu",
  "key2": "B6AFnumQexLSmA1N9u988QGPd4MrwHYGhNAXjWBwS5qnQrBM9LQkNKj11KxNLDkHmfrw4qr5WEdL4DkHkUAv85M",
  "key3": "2oxKX2AGsPvYUj58RMLzBkPVEJuMWM9fVVsfFJjssXqA9i5UqdvYkSkJhF4w7p5EKVNVfuh79bC7KxjfVEsLkpV5",
  "key4": "ZdnQN4RC1d6uCkGDknzQYaZcT7pHgd5n3n6sPrrK5joBsnEGJY6CDTe3xft1FzYLrvruvGswHgBCgixWkWLyJTT",
  "key5": "3Mtbq6weKHKmQgwmYaodrQx49bfi48uY2fJQMVv2UKJdrWqdqDmcbWfLcAkEt9GgGaeYoYEMp8DYZTffC1KRA2CC",
  "key6": "2UdwdBiCPfSiUjiJcbgk1Ef3Lvq1nFbJECsj4EiQUhhbaTHAP9BqezUSHobnqCd2he9j5MB4aNVd58AjAJHU415T",
  "key7": "3uiXU6kd9mSscxCEeEtUwhjfQcgMH4iMfV2D98C8cnhJvsacQjcHhw5QJ2p4qsK79rBukQd5HUUxZMDjTgMFdPxt",
  "key8": "88aJzkKvAquQTF8e4cssD35YFhooe93dsfnnTYCKLXUNc1YTF4efJRZe22EutUW7dLwP8sDcWvCmdVBbRtGX3Wv",
  "key9": "3HtLfZdVTewCfW4ihNWD9hUuxKyh5b4fLFUuTbS7PGBfWnXJHEAtiBgrQo9KW9T4LHCQsm3Ak2k32GtyX4MJspa8",
  "key10": "zPCcBM5gpJ8BmAADFmp452Xdj5crVZjed7FEn3vtKdGd43vYpS5YTYmhQBpLCkNRqunETwjHp6SNYChzXwHs9iM",
  "key11": "5qt7J2NgvoVJKBgMGpK5ouMc2CitQnQTP942Q5UV6DYE7W49zh9rUF7qYNqnNHiMBr1K6cmMYPNMEaxgsuK74mCU",
  "key12": "5KbGzMVxuZsBG8HjHJedTnjYqND5GSKyuctnbZnamfZvPZDhCr5YXtc8nxzix99DZ1mhAV4Uaft2etoKTmbPwZz6",
  "key13": "35BS8C3gdM6RH3cz3eKRji1EGRy8kakBoLsJ7prQLSbTbvRty3rizSNWMBQKSVUmy62kerABCre7zg4gmRGzFjpJ",
  "key14": "VBw8m2gpzVGgNxv6teGYBDiKpCRdnxCKvYX4wtkh138jjHZ78sidphoEZnpe8nuSvunn7DvQa3NB7aqUWkDXrLC",
  "key15": "5t6vAMtboEBXoY3m2b1wVqKqk3r3sYVtxdKfm7QGkEbETBMZ4WpHZD7rLWhLx2jfgnhSpxV6z88BWtbXNgU1PjVL",
  "key16": "5PmxppbLNbgQx367ZcXonkKEpCxYijC1djNDYkwWv4V81LjREcbzd2XQba5ZvYpbSNpa8eycCQLQruGMYszNudBJ",
  "key17": "u8hnSumThqHMGAXL6hArvnU95h5Xo7R4q3BdJBFUMvYMGtC3DmP4acdQamL11hFmsdo6moJkzECjsBmN7UzrqVA",
  "key18": "4LaxNcz2kMbZRDJWU9XE9nmJSteUY3Kctv7ncxiiEBmMAfjsRUTNk4QvHeVfmQYxippnp9brXumFWuUicSoUbCQ7",
  "key19": "JvCUh9VrPctokXpAjdSNF54NDpwpPhiRUVwmEVCp9QsssZW9dae5F8UMvKV1gevVZo6ehnN51xCAv8a9tCp6Fyt",
  "key20": "3FZbUQrwVHMtUYDnv3j1r2shnKSY8shWUnQ3G443w9sZQUtbPJHnW6f6BJgRaDhptm9jTGWTiYVhLWgUv8foaNmJ",
  "key21": "2LXLQ4PyWWym6RtFbBBBtSNmDcRQrcKXXAZRWPmwpNHxMhriiKSS5azvpjuY3bn6pkS9S33L2HJQbTRaoe1XeYH9",
  "key22": "VKMMnjbcaHuatn3Sm14jtsJfvhPyvLWYLF3VrHmJeQqfARyscw5v3ZWYyps2BQ9fXmhjNZWFXfaBUtuQjH7bywZ",
  "key23": "2xyWzoxRAcUh26AtQuSQjRdXSvDvzoQuRrDJbST8DtRX3Po6ECPfnaS979b7GcRLx1f7ZNcgA1T4hWH6fkuk9UZ1",
  "key24": "4kWgJFrgkZYTs9QFtb1DhnFNyMYtpRHQpVxwtPr7YiqrhwZEY7wMdE8UGu9kqrmYteVgeh6oFJMc6ETg2ybw2zQJ",
  "key25": "5NjKfo23JYU5ScqvVLsyvv6SHXCBjPBhBoVxKUTaAGd5prhSMkCJhWHYdsRF6n8o9wnbYX12cNkuJ1WGJabyH8Lx",
  "key26": "2jaoKD2x385kxwCWYtdjUgf5ZSm8tLp4oJFJkJHAkFtm8MZjraPD1nFug8yaK8bjB7SQKGHbNkYTwizLxUThorV9",
  "key27": "49YxLVZsUNBC1cN33QCQ6X1z4RocJpvT6ixA6F9uvfrbBb4gcTXoRMW4adhwx83NMfKHKvsRi12rV4WZcjsFgcRL",
  "key28": "4mbxfzuM8w8FW3ZevaNumwvdNjnQXZHgeRSPEpDbFU4GTYHp6GT4dACNPE1rB3bMHhJb26ncyDq4rUfMQTHkg8cJ",
  "key29": "NnAsyL4PbKqkgQwZcgGHZQbAeZx3djjbmmWvZPtoDJVHb3SDJpeoeHWog6aGqkSBmocD7C3oesbMifbSBRBctPM",
  "key30": "3pDMWBddYzLm4amsN3Achecg5UjRgBouQbLdzYdcuXpMaYLJNxc3ZVqjMnbDbhUs9drW4eFvWdGjVLEQ78ftGKGP",
  "key31": "4t2XwUEWk32ZW9NkUBQo5cAFkYGVodN8eQ9Si49kQVTJcMx6RjPBSEzwJZu5dkefQQzfDx2Mmbf3AUTatuv3KrDb",
  "key32": "29SzvQGxeKFTqAnpTpNNybRmwkv9MQFH3as5tDzM4c6SbMyLAie45DHqCY9AVDK2jyPswQbVYGUmniiUJ2cRS9pv",
  "key33": "3tvd3MskPGxSWyn9jSpaZv1g727YiQxydNmncRwGGwxjGd88zPNG99WdcYz6HeMzirpMsqsJ1LGWC9BjB2LEwSpK",
  "key34": "3LiTjBMbWNENrujqCYYx9zFHXLLFPrhbWzEbHmHjyuPpMfU6rY5xg9eEsGykXv9rZwA3B9au3PLgTDyU5hcoFd9Q",
  "key35": "3EmMLk5XXGSb5JP6obkQ2YpTVtx63ePbUF2dvoHhGeTsG3y3aYstmF1QKFPa5VYuNXxcR57Y2mMQtTZv2geWCd2m",
  "key36": "5H7emv6ixetB6i9TUS5Z5GVoUiZFr3eqVavn59nzJ1Q8Et8UeKyE6Z5YaLDy8RPE4fCG6sjAGeZ9h4yQvXZ92PMM",
  "key37": "4ktUvW2A2V8HQ7WUPANdHWxguv4ySwiQrN7ZJ1qZS9ttiYWETwLHghvDJ8LifSTzJmtBveZeEYLqAdxQYAimonVJ",
  "key38": "3i8XN9FfyBMZwxyugFdKNCz631P6J21Qti3KSmQ1dCgbJS8yA9EMkHxq9oDspbema4zLecdLbkV2WmJtnt94V88B",
  "key39": "54yCJLfJUA7nUZ36jE5AW9vZQFESvhoGp13Xge4DRr1GyxSFgii9bPNZeeM6BQpUvijxEG2oP2fX65ew5uRRfm61",
  "key40": "DDivGZ8K1nVynqtQFhFJvp1zCBtKQ9rPnHsPxjRswkpb7vZ94LDmBM9qv8JW6sqnqJTsqPvwTDjD9gTSBKdGZZj",
  "key41": "3fK9mEvGqP7fDUZoKFejEN1jsd8dkZhQUJg2JRRsGpm2CuyHvCe2Y7t4Gu2jmL8UPC4z9W4X6DXJiQzL6XyidYpv",
  "key42": "4upsUcvp3EQZc196TkmHyG8zWmD2mtV2XQcvrNpT7M85LwbatNyywEqS7uHx5kSek1FAXA4du2GPNGFwnCKPEger",
  "key43": "4RwxomJN9wcWSt9WKQs6rg529Z3UShfakxD6WjERfKofvTG8mPo6pTMANrbo3VqSKupNfk1tGKfiuebUWMEEv6So",
  "key44": "3EvkWvEqp6iuZj8FKtRtE71KvENubUiSq6QHAyfbUVfzVsRp6k4UT1iGSUAQ2TtmwgqpC6urcqfKAA55QFMifYdS",
  "key45": "2Cpar6WAgaskFb8eT6U49qbNwBBzm9mKtneH8cdANPeeKk4RDzuwX1b8m2xN9aLXyTreSe9NENAcesaBy7k2AMwd",
  "key46": "5Gdo6yoY5r1YBmfkcVdiBqYxXYXhUoQEdRgA6Ndb6jP2hUZu8wNXqycYDtbfyAKUTDZURC2CRPUKiUJXBCqB4mq6",
  "key47": "CznzZf7WehSPBrM2zYiKbgNge5rqTETGxCiMrZcqHG1kGJf2hVmeDcHkhMPFseZCEju9dbcGSYTpy7bKCNmxsJk",
  "key48": "4KvAq54meaaLrAWJ9fGThceXdqaZtTNiLehVLVGCbd9rL156vdZjuxrwsnitpaGHWBbWvU74S8Qkufx4MaFhRC7u"
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
