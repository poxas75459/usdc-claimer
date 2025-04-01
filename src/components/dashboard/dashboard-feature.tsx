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
    "42ocFAacb5s3cjkNSET1PzTKyzTBVttAmxfEqVWCSjgYb8YZzDnrHebVAwu7DzRzmLE2v85esxdnhMihxyRmGVZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BPRqUKvLYwuvgDVmaeUP7Lz61RAVVerwqrjTUHDFnDn9gM14dfg4ScDsy9mM9riVYSLVxdiZPTukLazkgdsfx68",
  "key1": "4j5kP6ADr5HnuayQ9TGK5jZgWT8gU2tKv8Y37WQPcDnofMzUZZQP1EqdDmWFYAQZCf4YwPaJgqoZXeh2zCwMucur",
  "key2": "3a4gAWTRDu92up1hV2ikNXjffUVsMryYJNKC7K9pJUdXhP6j7DvaNFagA1PpGE9BpUXMWdnDDXDJvYD9DRj4mA2E",
  "key3": "4cLB51Euxj94N1zZn6m3Ad9UTo56EeB84iHaHPZrg8Tm2fFScB3TKHgYWPNTMrDZD6yh3FVXpuY5o1T47qGP6xpp",
  "key4": "4No1EDUaNXYxoFmhbA3EMxLLn3qE4KLSsB6vyaiygfwBcrL62vJpQoerA3dZ2K2Mq3R3ybQgWA2Z2u5bRmQMnASA",
  "key5": "LMUC9u2VGFXMTrfyxQENUq6HuAJzbC9QVnhVp51HoPC6TmyJMxZZd8ETW9tv2z6CNrhG3mLkH89fRBeFgTr6b9y",
  "key6": "5uKkDNBBV8pH9ohNCouZV9vq4Gb5wzJprdZ6UtEfE4JPzjJbjkgp259NxRPhkegnuoTdcgyZjpDP7utZaXGuNwE",
  "key7": "UvFJ3dhgB1QqzweerWXANue4ByPcMabN5CV1sXsf2moPjVUhScapY5AKDknG7o3DQoSeCWZDftmvF3zQUekN1UV",
  "key8": "cnEvpPe75nkopQWDanY9WsdL5M9ANYgMVrRqoFKzQvQSu3AffJaoczuznAYwbEvg4iSc8chRD1y4rccfD4ASXAS",
  "key9": "5vB2upyJALv4vWaQddEWieZUbE2MUiVL6miMLHbNw2YLXKXPVSkbgXA21XCk38sgJEDTi3ENouwBkwr2tJ3uKCBP",
  "key10": "5e9byKVcPqFy9ezmUKH7fNRXnkFrzsvCVphsvVfuX75Y8fnnMqmXFD53UkgwyvkWvCAyAxsQQUDK1oHN5j6Dv1u5",
  "key11": "2UdAH9MaqJZeZDK1GuKg1CahCXe5RY74jFPK6nQBeg55GE8UAjswz8MhCr2AbzongstGL6csoV5png7Tfs7Kc9LT",
  "key12": "42rsNbQiErsCnbTfu22aKHVPikpGMcaACTbzfxevNAJzivwx81JYHZSvKUuFdaT5QonBjr8sqTJoqLNWEiG435Jh",
  "key13": "8XhLhqTNpJmHHFBRBpc446kKxTcSzPLeSeg7J65cq7xoafd2mK8cB8m84AnKV39WNyYzbmfph8B8ZVvVWWnpCtg",
  "key14": "4PQKkzhni1ErnixSBuqYBeAdJDir4nvNaLrCiA8cD7xaSgM7DXfVXEDeMby7oug43QKwbMEpxxj7ypYiBBjVkyrY",
  "key15": "3VcpTDxDdd7N2r5TtJet7YerR1FXdnG9MqgHbG2ApywvTLpFbRujqQSxua2HqvcpHbhju1YgZopDxf5ZCrEUec1C",
  "key16": "5Zhs7BMw5p1k7i7iPXbSkXGwQg4eGVXdUyRMCBN4Pooobr5pEjbK5F949fXt4N4Nz2jdGiL5v8TwL3ywczYThRWT",
  "key17": "3hWDDSZB66MVeFBunezpEfZzi52RykDQNe5gufYqU7auWxVPNsw9J1cDKZtHEFNNJ8XThB57CPndjW2mssPspUNq",
  "key18": "7wakvCRmEo5cZAhKKFsrrhgYexwuDhfzjp9UmpdEmrcQnzK9WtBpwzwBRgHuaMbAXu6jF5ePwqF2tmC9o16hA8D",
  "key19": "4NqmLPi11rjgbLbdw3ZaSgmAuyjMhWnw9GAxrA1gbpu5fmmJCRjcVRS45zn8Zhadhz3D4FG41d2iVwi6ULjcs1v4",
  "key20": "4BBSzWeESMjkPiaQ1LFkYQVLsD4LQjiAjQQRmeqvkDZy76yHRt898o8y4hkEJeSj7kwi1YNbs6EmwQzCzWjLdQ3G",
  "key21": "Y8h3BJuAhYjA8PVDZndYhAfdQygN6nHrh5m3hN8GfHjdR2nb1GUpRYn8L7xrRXCqoPAmcpDkrGfNXPwJVEbven2",
  "key22": "AYyjRBd2BCMAmSVHhVJQH4SQfoCJ1s7kR9aWfLf3jJsU8Vc4hnPynGARD515pC1ktZW44G6CmadxERdmtFc6mQk",
  "key23": "54YccExoYJsH6XeXftN79DDJGGTEjyBA2PyVn4K8FEkT83TEkMovnb6NeVRM19Qu1fP5F2Ndt7U88bRGMXa3W81m",
  "key24": "aXjWQsCxM8dfsVDZFUJfrrjWk5jGkendXUNZhWR5JRnUec3MF9Kd9N93NfkbAmA3fyv8c6bVGCZfmfy92d43BaT",
  "key25": "rHdJ5goYpYrAtSexeUVv95MfUp72KxVFj3tExhHZCokMXHeP9D5oFPKy9sryRNYgugi8LzkBrYhgbJAFHmm7aLq",
  "key26": "4ExuNWtnYNaCdKVb77R5faUgctaBMX48EEpVjBbH771QqxQFQXia2pGxKrCTBFfD8PhZN5ZusiqVuLhYJkb6MUwU",
  "key27": "2ARDyPbhEx5CpdzuCkbFUmB3RURAhNuowzcpcwDZW9AkUuusJWjmkJTUKxfQL9PQfxN6kvdjfq18b4XUcZQg51PM",
  "key28": "3XVpgqCqYVJ6L6FLax2gZZFtJxReVgE53gEsKyRqqhECLRXQdro1oLgoQ9U8ae9bnBeVHjNhmjEhYf1xk6vSp12P",
  "key29": "5kvaaj7pQ4tf7P7EeK87RpRCcWHU5W78zZr8YviustxMLUWGjnCmkaXrJeQYCT1vVZXyeHq8nFyhSb1KDAYomoXr",
  "key30": "mGLZxaPBuHV7ftRAKHL2MvEMLsCbCYWwh66WFRP7SGrJAwQZgn2u24k57uYTcQ1RXdcJ5WWfVVprwxEwBrdhh1S",
  "key31": "3Cz2Jd3dZJ2Rnta9tYovrZGeA6vwghGvoZWXEjitgoik8eojLf7bjgABxRuLMoGMiGz53gpLewqgtrXjFarv7N8H",
  "key32": "3MT7jxwL9yh62bwXXbaoEpaZgWrXYVDXpqyJsm6AJf3hpXGUaGKEFqD3Csns3Y72RNpuKDvDbmUAf8VhqgYTqr2N",
  "key33": "JdNWcCVb9k9c9nvwS7iTcXiTkE3P4VPfmxUW748yd75fkHqWbwPopZNS9Qsb1vmaStqELaSrioAxJoFcCdN1L1c",
  "key34": "5tX4FpLajTsjk3uEkUYuwB4uoVPMMJGjdT3FMyAV1kEixfXQ44o5BBXjFNxoeg441XVuBqR8sKYz38CYU4xmCo1T",
  "key35": "2v2xJj3b2kLRowyyhwivYhv2NtAYBmHv7pyiVSG5SVHL8otJPvFcmnwxuZBBHonU7QrAFLYPgJhLFy7rjRVkcdvW",
  "key36": "2Gfy4PWKmUQffwqufdbdmwXKJTrxEz6j7PGpwob4J5z9n7JpoMqxwe3x2JD57LqjwSTqoENTW7QJRcsiPTTGuuoz",
  "key37": "53hdHPh2LHs2BtYDA6Df81qsVXV82V9QpPaNihTCj1THZ3r3atXnobcMkpwvL2NHY3Ln1RmAaY584TgRxDR47yah",
  "key38": "StT4FsYnDrr9u6mzLBnoRCR4feTuLYuVtTkjF1ogj6JpmKM4yowfcNJ6ifE4Ms5Ew1jJ3UdtcXwCTZKaAdhatcf",
  "key39": "3irW9YfThXQAPrSTNgi6ve4uF6DFZL2wUY8PNiGdzNgiVv3oEy5sbHGTWKJeZjvitYwbjceeha7DQpEo7eEyRne2",
  "key40": "5pbyUJuZbLcXWKExV8ThKHrLvguhGm5yDzTJsYzKoFjYK1WheUQBRaU6N4khGRqeB7WrUeTv3X5d7THG24obD1RH",
  "key41": "5doTLBEHnKEvEpRswdLnqJtzyc3bdSCwYKK4bvNu7vsfbfuesDa1RsfhwWtPxEF5PJGGzEMrS1fCAsfmn1n3u263",
  "key42": "3GD6R6kUJ4irAi26kD382RaU15uFJeBAXaZW9dwm2GUd2SPp6C7d1yCyfRK9owuJvEZWdPraXSwec6LRfB6Ytz9h",
  "key43": "2Ysr7BdLt2D21T2DkD9RVshBZqFz8FDXZzzkTUZNefsouD4UZWGjsSVVMmUGzJRxQsGnNn4MmA8vAemgVfAkEfJ",
  "key44": "2SSTNPZwPXgCg6hwdLDZgbCxwWmM8E436CnSuUE5t5Xj6vCCjMsRQDCzFbEZSv2FN7rESDMPV59ao2fixZXn6Scf",
  "key45": "2sDDetExqjDkqPfkQL63EpXpH6vNNFykCSTZ8TidXahenmThizzhnbiH4FvWmh8crfn5vr8GgGEZsoAn6Rj6Ajw2",
  "key46": "rPWeEjBLJSDSm4kgYsToSJREkTkxQ1cVBYPLd7DaCv8PZJUFsWcYhVy9AkmXXZhiXQtCh2eNpmvtBCD6Lp4zXgw",
  "key47": "2mqJibJxSYNkHNpPsWQYMWjzk8DteTQm9bdZoYyYYCiUHf5U3UGmgZXWnPGjtk1C4tK2rR42MTrVHAzror1rrtW1"
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
