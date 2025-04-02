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
    "gq9rcmTqzVmEZMPicchBeBJJYw59KnJYyLqz6kmJerVGuV5o1CToKmL9BgzrMEL14dexozaxotUhngxh2LjoW2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61RPB2jVzqEs92LHQ6B5UxTFGWt6UppUFb4tAdRfbk45kRautssWJWfdnpNZxd3iuCQoq6RQaV8SDceKAvuMq5GC",
  "key1": "Gb9KBP4uPpNaL5DVCQkdguXgAAva92qGSmK2zxXZytdCZPL4UtjXoD2iKStLYoBvMC8X6YqcgFCm4X24YKnQnmf",
  "key2": "hDBQ4LTS7Y4vY9iPPL49g2RKDi8xTiTGExBrRrRApGMjAXpxPdiUihv5Q87x65mg2wWkVNRemWcba4iXVajdZ27",
  "key3": "4jnpFUzkPXv2ovuBj7SJ22JMvM9ms25cfDrep8edeDdyyDxYcnFfHLHvoCM4Jtg96MrvxEN2ijs1R4qhFfUmxEvY",
  "key4": "292x4SEsfwUGeehgqUGBarheeY75kBarkVS8pMdo34wNhDLtAfcytLZ8tSBzqBMdff8b5HkzvPJ1aNUtjJDo9v27",
  "key5": "924WD9DWvn7gChnrb2iq3Dik3VxZg5iuFbt7CRSsgJcSXyJo2aGz2fB2yfRsGaYjixAdKmceqwLGPyFKVVSXohE",
  "key6": "4fiSfsYRCPFD3H8vg1hj9yWHonmM4F9rxnubJPMkkm87sjXPQEBZcyP3RLwyTxPbkLQ61HW2MiAbTkVJvFLKHfGG",
  "key7": "5wQPEnkLVRJ7kuj2Kv8u9HDJHPSFzeAaAGRrx5aMMEFou5KkWc7v3BSDa8MKKLYRBKsFKBLUHUnxFw7EgWG4CEVr",
  "key8": "4CaThNV8BhSyN7DRE9ntNXZEjFpmRvvT6LXB4rGCSTjiki4yxw1MJuNP5jT21y5rsdfVjzsCA8mYf2tsPxTRGAXb",
  "key9": "3iVs6qEqh62S4tC8FFQMxGFZuvjyk2uvUMfjkr7UpmorWPzuE4tmruPd3e1uibpZ76HA94dmafRymfgDnC2h1DVj",
  "key10": "4JyUJgn8gdHMndwQUAA2mtDaPq51uPfLJcNPmYdH47yEVmZQxUv2uA5q2zGzppLD2mRwXrzihdSPzDPP7DVrAMGG",
  "key11": "3eDHbgFyqSQcrXv1dj9qBh5WYG2pbM98dfx1X36yp5ayaHFZ5ThgkMDwAv42msh96qxpwNGFfCaPNUyDc6KZiySu",
  "key12": "7pp1uEhA6WnXX49GhTwDEidhJn29BwzD1qfmnqY1G9uFojdiUFWMZmvoLHFgWzuGDzF9x6KqfQh8mgZK6KgCkTV",
  "key13": "5NLddr5E9QFfYnW6EQgACvzukknws5brCNfuVCiRyCMvt2Y3KXJuQ6zzZKgdTS2Fzbqh3xPvDDmxB4ytG6N8tNmy",
  "key14": "67kVagL48tywRRtxK82ERKKDFhfRuG6ADiVHiwXqnivzekXwVQF4opxMJLAtWB8QX3MNoeynLp7yY21p6PvgJe4e",
  "key15": "LoNGx3bPgzAQWtif8o44caFnFVB17wa4iJ44kDEW1pF6UHMNyjLtgsvJgSeQP5AZWZMw7Q1wRCgwa4aT5p3ZhKv",
  "key16": "4PNnfZUYJMfMFRoc6aBP2DuUd7iT44xeCzSKyjQunX3e9NBiX3QnxBDgrANomqAHfciUUWqUxzjwKd4epkMxHrbb",
  "key17": "5KoMaiZmchYd8A1bfvPQwenjVXpCqNMGqdB7n5BT9cPEpeQyZaLg1LbqiNVgdvnRAwgVwXEW6rzzzvpyyS5AX6VF",
  "key18": "34aBvTvUeD45SXCVh8HVuFRfNRE5Pr75kyeSfXRrrxk1z1D3BoTS8BTuRf7oMwLc4WfUNLN2wNpigZn4QBDdJCGH",
  "key19": "hWaV7atyJvmwQJJvuXjinEZVuXNswNcRxXf2QKFgWogMf7JUXyJtV8uyQ3GQmJnVVGhy1hHQNVt4FbETFXm5R75",
  "key20": "2S6msBTzQpf3ocADGgPeL3ZBwQFkQprpWJqag1KukQbytD1KNdG1uoEj4iVxADXWJcQCvx4ageUfqbAipbCwViFk",
  "key21": "4L87XAcE9vMnu1GcktCo9n6nEgKotDidLBzkok8GvTaFgkoTxU5wTDUNX85fcUPQbdJzovB5NtzB6FbeET14ACsP",
  "key22": "4DogMXDRKjJyxJgqMWCKzsBpaQrDARXueaprrreVTGdNeHm46SxNRC5uaz5R3jhBzNH865Nwk8gw99tpnKyaRLkn",
  "key23": "3tARyWDK4kdBAHnYBkDkcVxwYkRahicaaa3pEHdwpRUuUFHiWpa9vbzEF4dPmtqts29q24BxY28FfBjYYweSUKHz",
  "key24": "2vNDYj9VWwZhMYAQkKnhQq4GFGQL18QyuYy7jWhYDyEm1WqT3sm2bgNApnSAW9VHKLSsoSxhQ7wZktsmHZBm9L43",
  "key25": "f4oc7eKnpcP4ETz8e1c9LhWCkgmGaybLTVxrD7yRnFgQ6ksabxGPrtwRu6a5APt46YFLce5UZhtBeofeX6qDn6K",
  "key26": "2inektyAuRiuygD9esPc9d9CvcRzAgw4AB1ZMLrZA9TsxqLdZGpT9VbC8fBnddjVPsHZhSLQYtdHd7p3F2wuZT6T",
  "key27": "5c11xwCzjXfQAaKYfXMKLARMiTCcVDg2iTssunmuFph4HVsxnhFHvtFyXgY9aqgYbm66aU6Y6k7rTRjD8vAYVXTT",
  "key28": "3mYQ3XPdEd1euxqGziUgKenRUkhy6cC3Ydn745jApWP1nDsknGZMorNsMmH1X5NKi4vb1wnVxjgSmghr2UV2R1BG",
  "key29": "5sH2mEDouZsrKauuE1ARZ23YkAjMnmaGbbj8wE96HvtU4de3KAEv5m2xrd83Six81xiBMriEm4qRbzLD11arQkoH",
  "key30": "4UpkgN66RxGfFPkoBUh4wcLyEPDSZBx3o8RJkiJUFtMKQ2hEPfbeRPycZaRMFfxpB8cu8UWAd7SdrWaGHiUNmEQD",
  "key31": "4Rb5NNvgtku9mfJcavWcHr9CTqvK4q9ATee62EpXMFh2ToPZADbZry8V5L2Y6NHxzN8b938LTnhXrKdRsKCXbgRx",
  "key32": "Ms54aDe9qK5EBFvwQKN71xhWh3qC2TVSQPG7uuH7pEkMqsn3T7fgm3L2cJYBVc4n9HveAgMtze5W7Jn964MxxZv",
  "key33": "44TqquzAjQmMrB85ykYRYR3Yvf8KjtYpSc7QpdK3r24X7EdfS5DpxpbQAH1btVNG4EwDdo9Sktha2L1A75Ecx4ji",
  "key34": "4YAtjtETyjpos72tPEmnfEcWZjAv1FjdSjE5GYdW1oTSAh56yFXaGPxb1gkHvGFxx6zzmvP7NGdAjn6goyhAG385",
  "key35": "5jTbNGs1RXVJkXQQL6zdHapVU83WPSsd9WujjmoA4BpL7WKWw6KEZL77CwMb7jzDYfyPaYjmC559y2qBUQZYWoz6",
  "key36": "4Y7Svw3Cg9AfJ5opEdF7F9zJ9pQdXM6o7X3HpBjy3JdPs1f5wWfFtwFnZM1J5tWafoxbbXZLygzcxjaoFAEanAAS",
  "key37": "3oeYdZSo5X8MSJewo1VJMdX15k7a8CkV9ewh4dSmFThPv6m5kBsXrKyrKBLG6AoMeQryroaXQQHqGQZNtThtJttc",
  "key38": "M7QxN6rpnfb79CH8qGms6UPJKDoxb5EF9he85Ab976Fz3etwbwWjJnkj4ruxThKZ67z4kdfUm1V7pUWFa4ucxw5",
  "key39": "3W5DbjN5PCjmnWrGyCDsHdT7VER7MrYYs3FhnuoNwUFMWfP3nyzPNkTMRKHmDb8E9qXiZpF3KYqrkbnnJVTTvmdV",
  "key40": "M8q77ZhcJLL2C4HG7ZSQjBay1jSDC3q74BwFnvbeNMg49vMxWbLRTo7wVETKuEerSbsVTaD96itpRpkfLv7Zy7M",
  "key41": "5dJEta9rsbCE6Yi6MbKGLaPaXx4aftaCmbxeE2ynA7XfyrJxpLwYdG7h1LdJoB5t1cejzFWRJJ2uRXJFu6xN56ce",
  "key42": "2fvbZPKM6dSFR6Y9MUBXh1fhw2U21qgU7r4EGUtFAYrq28GgioPUfrzTydYpwMmsCcNbJpY1ECN3KqWd96wcx1x5",
  "key43": "2zkk2mf8MhWvw3ZcL9pCdHoQsVAMmpqCV5j3b18sAQBpmcJGRMm2TYRcXiTaW5NEEB2k53b7uHhLczbT2LybNkjx",
  "key44": "4rHEYMpmNz6K3WdFhoXMbowHFFeicjEuAQg7x5AjvtKNekximTytesDHmrojSm3awnxUaZdhgpApBZvsLA71vyJ7",
  "key45": "3CHWRvPfZhJYWMbo2zbbqFMzi7Y2fRvZjX5CnGkX8sMvtLJVTHWQinEuhxaMwJTXccgKFkh1RjvLQN9VW3JH9vc5",
  "key46": "2P9ZaBCNgZLwdqZGkvoqgkBxXmFanMfwgM3Szav2qgSvSY7QMK7fAw3uYcCPkzZGgcVFQhJFaBzoj9qsRUKrRqCM"
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
