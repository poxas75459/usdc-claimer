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
    "3rXhh5nr8SZzWUXfpxcoxidKsD64KS8iWFrSL4dYECetA55aap5ttHtCQcSwZVHApC5RukuP21qhzgsMn3gAJm7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K7MMDDnMjdJqnhcxgk7L6xQCLvNwjZSZGhsM3NCPECKnWX6EYJs73sBLiutguYzQd3XEW5NjaspKGYTo3WU6A6C",
  "key1": "5CyGMjEzXWCU8g4PqBUjrfVqTjk9UQKY5tcr7Y5yXLhnVpzDLJcJquDLTmrqfbijqseEerghRfT1GHmbCg6oYNJc",
  "key2": "534w5aFFSmHLB3rvnpuCUXoyPJUXJ2rx46wBfRjEoSFjt3gJj1avAd45MswcDdXKsKrTED8XKAbpkMw81EPdi1oi",
  "key3": "QamyBx48XKZkfB9vghbZE5m5cFmRn1CLNbp2MjxDLMctS8w6fEEmCr1ovrzm3RaRj4hLDoqSLi1b1qBbXTf7Dan",
  "key4": "55aKBGHDzUd1eLzJUs6cJ8ZSj4EFqSoxh4G86NdCcZAP5z3pUcYNRfva7xufgJhUwdqqYNjt3NCx1gtqjfbpCgJA",
  "key5": "2GtnZtAo2CUmsdXikhUg3Acf4coTMsneBcee5kHNJWju6aEUPa3YYT9FarNxBK8vA4vdgg4foFiWmro9M2FpVV4w",
  "key6": "54gzDRoZyPhn4LhhaDNM1PbeGUi7At2BuKAYQDuZxheNTAjJTUABet26vqzA9eEyUX8YiVnUBvs4svm91kyScT2p",
  "key7": "WXypSPKPeLw24eRxKeKhbURrFZiHmbDJWcN8KoZRsDsyTZcsXhETtkyzV4EKGU3RJgtKXuhYNt5EZ7RJyzGx4Nx",
  "key8": "n6bc8ugQZgV621RwbbtWpwLLJk5VP4xRtL4QF1R6jXhL9N7BDe97qsBDasMpGsvFtah3oYdRLhtXrZhmN784GKq",
  "key9": "2xWuRjuCHuhPbxJawXH3ZBfXr5NhTg7Vd94a1YDAE4Kd5pRK4RiSLwdwcTRegfEkeSwj1YfyBDcgrz2MaX3EePYK",
  "key10": "5mNbrgGZN3HvMxPLRsebciCMeaayZrDbVwm5cVukY3SCt4rBiRtZT1mT9M8W84uBg6GooNcJLiatHHiD2xyVpNZ5",
  "key11": "4UTSFmViaj57VyQ76f1Zgn5WvrBYZDaiiLdMjc8gRLDE6cns3Zi8K2V3hgiRiKjc7MmoBXBhiFdyKcncQSHqT2m5",
  "key12": "5sZaAyngi62yNw1F1TqmTJEwef1srGTwbz3joKkmyfHufYwLVMjB67MkZtchuzfU6XyvL8pL866E4V1nAg859kbZ",
  "key13": "2Sw6rSwwkA9vtN4GYoqo1gMxLb29hGffyu9eEgnCxdjfWZxfGsx7KieZCkEmV1BXBtAkhsFZ2QYzR6WyzEvgJE86",
  "key14": "2jRXozheSwXt9G5CqwsFdRBjS7zVfz7UkHmStSWJ1e65Gg8sDnZunurkgckvt1T6JV51u3LUWkkmgPyCuxfgqJJY",
  "key15": "4JnVvD5SqHovjHZ8ocFc5q1PXxMhbgffFi6skbxEQBx2e2K4jqeH69KaFs2nL4DrzGBAQJwXx4eYdS9xib5p3rx9",
  "key16": "5DCcN8pAZk5yzzd1neEYsudhqj3RQc53MCePYhqoS8R5KnH4AV2obP535VBLP51jjU2w3hH3sxYiDyfzaDvTpKcd",
  "key17": "3i8wBcL8NW3uQRs2V5Rd7poFfX4is7j9WSJ2VYJeNCVGPtZHxECpJMfzkfhJjjK3qsVumgNNUwoX4GKCuhqENJRZ",
  "key18": "2PzHx2VFqmUjAYHmiggDtrhhdNPDAtUZ99mLStcKGBd8Qzigj1qq34BoTrYfxgfuAiPuCBSDGQ3V9K9RfEM9jGr",
  "key19": "3rB6f35zh9wn1p3gs65rh2GVYDiKW5NSHxG7w1YToueRFSeCTS2Qh9Jtd1CqYqqxdL4B7DmnmQeYZJv7eivV5F2p",
  "key20": "2dEVzVKXUpF3cSPE3mLDAPz3h8oqM136P77UXAmKNtz3mT1R7BUk6CzBtG8LFTskwK7DcNJo7kuSaBha8yxSHAqZ",
  "key21": "4Wr6U3hdwo5ynh3XpDeEqwa9NoyUZEpqhq987irKw2xK9aLSrzre5ghXXcsHUUmrM8f6jNiBZ7YdWJMUPK63QN3n",
  "key22": "3ExGB5rfoNQXJArJeTgjiLKa9Kyo43XvjiU3tXgCxxE2QxXvrJoD56aXPAxrusRsksK6a4f95emu8y7g6gLHT24o",
  "key23": "2NHpKKhn3a62FKMDJaQErprhF8Nrh776FyCinzsgD1r5CHzFRmGweNZLG3ou5wbdti6dXcFbtxZNEcTSSp5cMzcu",
  "key24": "3726uWMHVKhcH9uN1aTAFmxYJxWwkZvNKdRkSRthXrQQdVF57CgdzpRgAHA8FNVo3NnpdgQssnaoZHaaCAsMVCP1",
  "key25": "4sidvcYR9gYDE1GYxsMKqs6FdV47rrzFayRVxED1VmK6mYeVJiMPcmTdMiEcuRtKfWiW1c4Rc8oURKtFqWJXAY7S",
  "key26": "5N4NH51Z6dPUjmFConbPqhFyxCiTYA9PzqBgjqVcHbS7du3tcNCBKJng6T8Qx4wHx8SWqkd51pW9mKEzkmRPDQCA",
  "key27": "5AbGaaedTraCiDcVzVXx9WcPmvWNjHefFK6Ycp13ohqYGNhyoMiMxS2vBD5BZu9PhQNSSSdMkjV5aY6zQRPWeQaV",
  "key28": "2dgqAaTKfjnkc546vij2Du3L2L1shNxQMEzEC9pqgKXd4v3pcCPkJCi4N6ZQmfoj1P1vNWqqF7d7kMeaPED6DdAV",
  "key29": "fMf4tQWme6WKmGVxwm48mcXReC7vRdZKfavrUessfBLJWQniJf4PLxNpX8owytF5vGRpMqfV3tUcHy3tq82gR4d",
  "key30": "BTqSA8gC4bmcQ4PQeKRYsjGY6eCVg8hHjbxFquSe6w3du5bXaU3vJK3y4EY3vh2a1ZYfLc2VBt7hQSuoKgQYqvr",
  "key31": "5rjEuz3KFXmYtWjfi1Z2fJYhScmR9Ay5GWTcCDN3W1vy19npaMDWcH7BgLWrvfiF3UKkf8rVNWtk4ZRQkdUNcsSq",
  "key32": "5NfbvZu3SJRaqn7gbL3q2j3fchsb78xuMe55taNXZcahdDrUjeYZRA3PgvSTyHaBiRDpfUAK2PkKKVSB7eKDDW5j",
  "key33": "4QqfeyN8nz5Z1aqiVxMopRuskgRp8yeftoCcStkp3jPnS48r3wXpAaoWSamd4Y3qMFpnXwETdwrrMUTuUtmHhMKN",
  "key34": "56PaeaXRfvMSjCnA3sFgHYi22jbw1cqDUbixApWSoJMzvqBd4EVsdjKrNouUQMvVeDCGa4pvAnZXwndmRSrbiDKJ",
  "key35": "MMrf7wgSSmCmAAQRR3vxnWgXU5rig77oGtrMY6LZ1UhHQ8z24oEXPyENYkgmvLR2wevCjn3TURbqDXr6oPwkVRL",
  "key36": "5PnF96b2VVJDkVLxgwndYGwe2v83e3kednAdsz9S9pQRHhGJCRnBQrNhZi8E6VuXxHse3FdzVREk87SR5fyDpyF4",
  "key37": "fJeDmhm5f8NMkJG8ruLNZmhdvT4Csz8ZEV8kyA7eEXJMQPRQrTtpxVZQhRsnRyNWahSiDouqUpjJAvwDU1LPZ3Z",
  "key38": "3Kb1ZTrndPpW6U5KbwYexnTjzE6gGfBwZ3HPrH8N4t8pVbPF8kkifRe32DSX5nuEABthWeEdK3VqEdHRoXTzdgUe",
  "key39": "28hi4MJjdDkQ7yGTmhd9F6TBCWXErMnVJY7jELPhVTwQiczQXMu141YW4xqUCCWv9TFSoMUVBWYRoDkSnfwuXYFS",
  "key40": "4BtEeQQYbygFXawv9GUiBrhDypSwgbHXAvonfur648taZzJ6CC4bpVotbsS5UR1HdDjGvR1gpz1XdEWwEb3Y8DFH",
  "key41": "4auvjeQH93pLf4S8QFR2TonJ5t1Zw2gzCnHg46WnYsAUxXsU5gQYKZHJEFE9Ly5jJFqyovQ5Hfh5diTf26EvkMkk",
  "key42": "4aon8QigZY1aar5gz7GLHYYH8q2ECjEnxJvzWrjfiq9ae5WVRw7X5D2outkLaR48wN9kD7SsRgjxJqt2FFKmaewP",
  "key43": "66XPoZiBJfTKvSN2QxNpTUgfsvPV5phmPeFsfFrK6TzXF5RmyUAWXnp4dLtRFb6ekL62EYRrrSdKyvBCPm97y2K6",
  "key44": "2sUhHgtrUfV5ECpRxNkUAbTAFbxTxVYcXtVzPDtNKR43cC2HH2yKdpghLQ9mE33CtzWKhb4hxCchkA8UvecEQdBX",
  "key45": "5TbfTmrmMmSHDzDtHL8VwnTjBy5KAHCjgpTGP2ng5ZPf7Pyts3S3TrmymWvT7nZmmCfWivEPqpYy5R8VVki3K4zn",
  "key46": "3Xp6FwwBZKaYWJs9gwmWTCZYk64T3sDj8qBcP9hhvXY1cqXik5GHmbQw4ErmPsRbqatc5UPUmoMmaDWpBGgsttje",
  "key47": "ecPFEyzcBFkFm3f4sNinHuc4LENLDfqsrHdxs1cn3KLAKLdD2bT6EexisgtiUyNkwLRho8jGad6km9SVnnBAa2w"
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
