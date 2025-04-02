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
    "4eGcXZwJxrHVTW1ztYztFsoutuxy6p8JGoc4Wh6b7YpD9BjERxCfTAbdCduG6EvRtb4YjE9p7D4Lb2yypvcRfjAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TsxpfHz4gYSSbZPzMWobrKTdQJdHkp7rsauDbsM5A7WqnxzFVq4peDwFRRaBiLFugJAiuDgb9LbQUq8YTFkCSRU",
  "key1": "3wR2mwZgBhLUud8Nz8sPoSUBosRRjEyxK6PWuGDN3sixJRwUYiojn5am99gE2js1xZ7yUFpHJf6LphzeLh21WQQX",
  "key2": "5HAXWEtbrbaxdU9PooEXrNdQ3fDBEfXNb7Ypnieu9DMUvoqirdr72H5Be7PSZghB1qEDPMxwt9khcCWT75uWFNmD",
  "key3": "M1Tj1gjiDKCeDZnTNuejWzDDdSF5WYoNDaomgrWwX8Ss4SHmSJ6YasVZF8xRb57raVs8VTc2CZQ5dg5YLhMc4DK",
  "key4": "gPTAo9s6GEeAiPT6dWa1yGUpS88U9rEn2AmLZfGXwdEYJJ6VE5mCZfNXAEQKs8oBAgGKAckV9uru1mij7zonWRg",
  "key5": "oNs5CN72KX9fmqhCBgGe2Di45gzfSUTN5X186Z7Y4N9c7GaHizXDpqteeCHHG9dnRvewNxcda8S5wpf8ogQESDw",
  "key6": "4TKLWMt8MSSaLRZxxptapevPnWtntTgmbnRxNSVBAdUxxaLnywAGefhLGUijUwBLQ4svN7Reot8C5T7LjxqLPkMo",
  "key7": "2TNo7hfPUBjQLHw46CRYVL2gwcJmm9Cbh5VzhRcxQfrkYsr8uPvYsg9bT7ayNsJa5fBDx4k8y9gkuJdoYskGv9ns",
  "key8": "4kmFgTuHtkPN8gTDGHpN4iMP9n6D97NR8pFjKQL2efz5YRnzeNqq6E7wBtQbdRktc5ikg8KEqnFFtfG5GpcHLrac",
  "key9": "2LM5DtGQ5NRoU3RAcgoMhYsakAcaTdA9ymKjQekkVgrumxNtmbd1omKSWFpvBT35U94SX7ATbFRw3WtX8whgeQAB",
  "key10": "5bSm7PkhCMrzuCiWoumYwgQcR8q9kxSiPBXkCAEH3AoKLB8aWzFRywmrC9MbeUPLJT8sMkGNYpzwqt6XCfsprpw4",
  "key11": "5ZhLEHd4ch3no7bUwAUWCWMPArE5QJnD2mRDboEFvVkfSL2Cfa5JSn5BovnEh2k9tFJF3Tq6pKkE5Jyod3WgWZqv",
  "key12": "5jVzmdbruuKbzDe6jHEfUtmNGXdsBSAGqbZs1KtAhMMfzCei965FjhBPqtZVFh2gTYt9oYAgpiKwy8Kbn2sFvARA",
  "key13": "39aXKiCeHEhzHwVG7BibabostMeQuYsCfiGAUEJQ2pHF79Sa7qxG4ADEMdMBXjrCqs4CVSwttNL69Se1mGvE4PrK",
  "key14": "3U6m27gNSAptezN2WnwAuoTafugUxgtKnbxEhChQ99QV4BpRqoQFkDru5RPLTchxgKLEkX4EUXjp2KWSPvu1NyVj",
  "key15": "3R3HkH2gHXyooXsFZTviUksqhurGbSYb6oE2ZRrEPQGGCQHSqmnQMGiLbBw7aVLeR926VxVxPAJfLvKKNYwPd8wN",
  "key16": "56t1dP3vz6dSehb7qzGRFaGykftB3fsxFut3jV1W5jyw1QReeaXduAMerPaCf8vQvw1mnXPyzZukW4UTjXrWKiAe",
  "key17": "3PBTp6GwQjwZY15UJxroWS3q1mJBH814DKsMo55o8gHqgAgBfY8ZQw72uBkxUTExc2wxqrq2wrq8bk1geQzSCuoo",
  "key18": "52SRVDcfMz55CL7hAWqq3hy4kKUWrwWZSQM9HYX1o3UeAmMbL4rBygFCNpGXrdiPBaQSUqtWJSvfWbrqJb4k3U4T",
  "key19": "4Lnw4fEUxVmDH7m8tPfP9RqWP186qRqewFxzJ1kqDmh9uuiEE1j4NNBJkQdwonJVRfeLCMGyzVgVLAzMsh6aWjw5",
  "key20": "49wY233fYeZCiSQaCdYkfbjmavtGRfa4qUoto4X3WLbFK9jZ3MdWdJ1FKHHNK8iiJ9szvYxPbJdE2x3QCLAguBv9",
  "key21": "tRsjet5tLSbMmoNEp3XJ3cmyCymKMq8FebbRsGVdPRqnCHxsC94S1x4CxDazcTWWeFPx1XBuifJvzWBdRSjHgvJ",
  "key22": "3GLuHa93kZEgrBx49uskb3QCErpDS6qdMYHB9XhJsgYBj3TYdtHcaCrVCvzuq4ERKuMB44ZjcXL8TqPe6oUSRWMg",
  "key23": "4S6DuvwT3rWxT8kgMKUwkSGwrgVbcaaZ7tyw94AtCuqCRVGXiAe8kDySjNyZ5bSAizGF9yJaBxjfXedE979BWPVH",
  "key24": "2geZY7QnDHbEAusdthhM7583jdZHcj5CgWQC89vie71dzSkj8GbyAuZXYeUvsYbjHhHTZBgwT4P7FZdWYjKwHwfy",
  "key25": "3sy5N4orMRPrwLcnYZx9ajGoCoC67BNeuGeHEDVPMQKURB11ZvpgCxAnqqUNLjomYagTFKs8wBd8KrnGMf8UFdCH",
  "key26": "46LD5a5BoHTJcFd9or3jvMy8vD3W6FeSjXNA3zvGf13C3t5zB2cATJMRKoTcU8u3oEAtaEFWf4Cnwm2AfEnbAtbc",
  "key27": "3xLgsW6kJk6KLQrTYBMDVK31xGN5ywtVhq7SzxfviKSdeug7ozSX4M72db7RRjyiR5cVycFDoYpRL13wBZC4ppb5",
  "key28": "2qLJZ33AZvHjmR8etft9HUjY8ZijD6HLz4AKLihitjVDKXBug1XrGj6GHV497g4C8Y9C2iWwftoN3fhE2TgeZfed",
  "key29": "5Na7DbLKikpUJKnHz3gVrwdVpZ8j3FKHCP2MuEuf1QYqSkWHjkRE9o8c8uW4CkYBP1HpCjDdy5LEuc9qtUdA7Kaa",
  "key30": "2HF5HshmmBdWnJhFKTNChvjMeyxSDw3pTzeXoaVhDBvfVxcYpz7kBC2CSUGDXBsaKUGpDkNXTetFCNjAxojz5Wyq",
  "key31": "3j5SY2Ry7uVPJhqPK7DvNm7ETyHqbZDqTgXoEPPJXpzTcj6MKHkcGFB3CKHMw93vcGyQifoz6nswsgoeQs3BEw1d",
  "key32": "3vpbam17uRu4EVQdzH9Viw5kq83mTZNfNMrXm37CopmmWjKvyuyQw8qtkRFbZmPVG8fn4v5QLujCQRQqSrtskKo1",
  "key33": "cPwv6ap3HUnmj53N8uWgLdkTNYrEXjSA78jtuXk8MLYcv9Dgim6UpLUz38u19aA767dPkT1VuPs1CqpYahHRwNs",
  "key34": "2DYHYNiWdfSGkZFKiSsaHvdFdtBAUxJEDaVKCFkpXSZR1HkdeELMLEC6ioK2RmaxVEQMJ5PgVkuQEfMtfPxfbzzq"
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
