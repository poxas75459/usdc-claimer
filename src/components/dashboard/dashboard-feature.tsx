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
    "3qjeFw3sdNMKhiGfQuDP9Cpi6RzdHb8HJEMJ6Nem7Wrpoam9J6k5kt3ACU4jur3rirPHZSpwCLxYEJCyixFcxst5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qAkjeBPstHXVBYjS8sBNXQXBhmVCNSRXjvYH5isKf9mnsDxALYsAjd5ji8LbiJ7iuXeBTDrbycYZbY7phFGX6Re",
  "key1": "3F1qJS4UqHEbbT5Gwv4ucg2SCF6D99cCopgMXWi9ab9dZcrBNtTVrG97jLNXYxhx58s51shZHxrKkXFab1usFKKz",
  "key2": "ztNqueBsgtm1MnCrzagpUDZfQcjCRbKyTRGHsGZs4Srk9NgjXtE7yovpvEMxK1cUMwNU8HZige1E2pimKoPFJoF",
  "key3": "tu1h8HgeaKvtbtpxM4DcxggiXsKSs4WRKDNjxb9mFgjMfdaNBRLUo6GxuaJshEmovz6ir1p4SmjBcu6R8szc85i",
  "key4": "5BdG9QT1eVP9k3KMMwsW1pRXHL9fUx2vDnKtgUXpuyg1f8kk9NncWU7jRrTmbo94CHgqNuHqWy5Giigw32QD1G3U",
  "key5": "2LNRch6NhpXqXC4kEnxihgoFSu4AR9Nk47GyXGKVfkS1EJArxW4fqaAv76hxsytPrFukUhnuPXKHGo3d2dsjFWJS",
  "key6": "66sHQRsKt1R9WRWhByshh6Qhu2rDUN898VTA1K98HtCiyuc4jpqRZhiZYTUoFhzSjmFmgdZjTK7kgPktKdW5Sktg",
  "key7": "mfosoCyFxUd3jdwMRpf2378V2cUkfDgvnLSejLZkZ994SQvsBu48PyAoGhkMQobcF9WL82dmN6pY1zjxC6Z6Xcr",
  "key8": "54Dv83Epf8NufZsamjb1kLFGcX2rz8y7gZ6hZ7LkVzy3G3VM7hcKTCorU83E5VrpcokXd1RTbedrFwA7GcBnweiM",
  "key9": "55S5ktPm1SfAUehftfQzyARvPxJnGQ53Ns49Rop31VJzkfh4iMtCyAeLt7vhw3CtNrwhv6Sx9ioEKewsF9HupUza",
  "key10": "5GvRN4MpebWomsXvF3Rc5AjW9FiPM1oSDVrckiNarXiiowDZoBtC3u2WNi3kLLKHhvf9SxTtmEKkqSmt5SMtj3Up",
  "key11": "4nDYnhmKKAMymwHqRVuguQtZ6R627yyj3Pt9aiiT8PZgp9CdaYuMLyRGu69JkY5uxNmtF7ebFxEShp6qjDSZVii8",
  "key12": "5vsn56UbaPoDuehoXqboXECGBng9PARUGZQ3AFWSVi8CoewcWN6jRK7tn9H1KsyY6rz3ui6Z4nNw7NYNfEyA6svz",
  "key13": "3r1iWsez14prDY3mLfA2hYt2mB1owTSQa2KYcMbvosLVszffSqRQKWchQNSdKokvZCsWBKovcKkmhB7eAuAiGTZS",
  "key14": "4HuEAF2XMM1aSLYzxhjSkzSLi8riQKJ2n9mj2ww633yZu9d8ND7fLLtbEMNir5U9GF6PJQJDUDbvVsvwE2DmY5Ut",
  "key15": "3pyEPNq79ShnU1wR7LcmWbmXfPNuAmhMvojLuehRPFNBnPKzMaDVqUMWZH7bX5WouiYpUVULGzABfaSGDBZFVnsa",
  "key16": "5W3WqHSaN16YXkhvwhkazj167nyu5Hs7f1eV2jr5kX7EssKgarWh7ySrR3oTH4EebzCib7hoifBPj3RVnFYWkYyj",
  "key17": "5LBuavok4atw25Uss8SYxvqCWY14eP35hvr2WuvNAbKxymVR84r8HjFAU2GkWFew7da9eskVFM2ruVaFoYk7j9iU",
  "key18": "4ZtyetH3xcToEc6wDgmbGZSDnGNQYz93epos7o6WwDNr2XPAVrdEcApkh7J7VKP1aFtU2AG5E7ziJyBWTaX7eh8T",
  "key19": "5bKMFrvGNcLtfJePrQN4ga3AktJyfojrTG8SLL3xeYFPEdnag9BcWZaaBuvtUwmvQEPqNvE822WdjuahkT7Fa2K1",
  "key20": "3duuU8mnfmHR1p4xExGY7fdtEEBJKyqRStxLA6if39ufFC973QKr15vZb953JQbKPicPcvomhVC9nsEH2p7uvxjQ",
  "key21": "53TvJjwMTa4cY41CrarayqHZ877SDVt9TZ7e7UyTmUd3RR68X9tyxzDvxaUKnhay6wQdSWgs6Lm8bqh2dUiGjemd",
  "key22": "51KAQh9hi3CUegXHbZwdWXSnHYatuyNYruh5UfwYHjoRzJxGyGkw43BHGx2UcsrdsCiSH4jKcVncwVbg7YotPx4n",
  "key23": "xewkNg44gBGezPaVAmjPKJxjAopJk29kvi1rRiqJCBEmA58kpPNLjC76BqLzUNA5NAKdwo3ineQ8A9aUj6KbkAY",
  "key24": "3mKhvTCaf82PXMMbur2by5uvLN1NyeiGbTn3vm9iXbs5ZHHxjM2XYeJtmMXVdrP39xJUj6ufFiUc4nP6UUdNfyTE",
  "key25": "BMYxS5Kd12wJtHvhGotoMht9LvkUeKjnxn2nNwA6fBPgHkN1RcTH8PhrtYfSi4eqSVQkQvVL2148iSWooAZVzwY",
  "key26": "8ezvtZD5cMskwFFEx9DjJsBg9GLyEHKQ18axiqECN8xBkReUUeUwTP5VPn8hC7bKDbFsgmJ3zkVZWXUq2Zn1siS",
  "key27": "51z1cH2wY8yvRYjq1dBpquwmG8iNjQg3SMhr3MGdrLGzmhMwb6Cb5XTqwm9FMtVDJUFtavaoWm1Lz5d8BLd7QFw7",
  "key28": "4us54BqK65rK6MVzmLZrVam7UbVRhTBJPs77n4CgdNYVexsxHekMtKFiJPFS585JoRucXAmWTs88Eb76GFD5mqae",
  "key29": "5aBaYYoSixT1DjfHXBe1uuFej4HmkemmHVpZyhzXLLbuyAfwA2sBKjzri2Kvnz4FZBMfYDMfNAQmQJAdcvAR3Bqn",
  "key30": "2qDu5GmYGV6nBQj41WhhxyNm6eYeCocfBapNGE4K2yZg46TTWFcVSzz2WPp5N5CqNkw1czD76DDkXz3wQ8UVjQ5U",
  "key31": "5ybBMk6nSpzYQr7umi8KVnS897usrTV9SdycS6uo9ZnSHuuZ42UBtpdDpzDdNVMej6uwGWvA4SHvc8SZkXDZAFa8",
  "key32": "5Q1mzEG3kysA9ioFK7Aaei3tMQFWeac98bcMUDsKUqiqRwQN1HtYRLiiDwKiByV9uvN8e1KeQURVoExfzL6VawWX",
  "key33": "5j5m4tbTJJqjzs1iqF2dDBN1639LZ4XNeuqPKCJ5SsdS4xBHaYdHY4DQrQ6JFA67iQynEZzvW85rX6wvoqv2s4u5",
  "key34": "tprpn6g8vn6BkczbLRS44YPo6A7F6fvVXLut2W538jCK8wnNwd1pWHPeUMrSZ2Qy8u7M9ikLRRkpK5x16HTyxr5",
  "key35": "5XgmTeTH5wz7NrGs3bmJmNCknhYjfgBvFFfaLQMK2P2fsuet5HqaQAd9hi3Tc9aL1Npva1V8HJfFnt8PPXB1dKsq",
  "key36": "5UnW5cLqB9Dwpdyk7ibYw2mJS3UF4ooUD3JMVoBd4JbUBMewj8UsSzeHfCj1wYfDMbriWqmLpGEC3x8HT6sZyA1u",
  "key37": "4TbjJhmrRLVR7PTVK2yPrWmYh1fWNed1py8Cj3hC5LonLUhGWPyEm8nuTmVmyqJ3tWVkN78kb8JhDcTTFNkXRwPK"
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
