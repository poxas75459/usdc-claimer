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
    "5QkF9vDq4STTjh6csfaAihrXi2E9ns3KJtWYyiCLoYF9bJfy4j3sFw9u3ahwbnSZb58yxj86ZcdeiQH8gQUxZ6vv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ti8NuJUQ3dvk8fK1vqQCwrtE4vXT79at2sDAaWpcsGkWhWyTmrW5AidBYmS7q769jgQkFC9FS4sQLZ2FX4xsDSD",
  "key1": "4w9A3qorPfLkN9eEiXNx59pbX4F48uidewY8eHni3vh1f8uoeANnaJX4U6Q1nJk2vXbhwtrytPbGrde6qr7BtsQN",
  "key2": "4couMuaeiGpuLY1magXV6aWueqrvo6iM6aXesZc2Xnik2bKZ3tmKnFc8L1EyS1awJYMeEBYEouFb1pVahTyDpH9m",
  "key3": "3iDzFiZ9BJobHCz4j8NfK6SEt6mdZsDWR6HJKQYSG9kWLbSspXG3mUqQ2T25FFtCfrjv42C2KjmHR1pjrn5U5rbu",
  "key4": "3VjkX61doj8DuUZ4NecGKGwudigcdGjifaifwK8RionVpzuYMuVkNoo9xw3fCeaaqXG2K96gTVx9iBoui9dRZJj7",
  "key5": "4skcJVtc82hTvNfFJYWh4pRWrdMf3kMJqbzWrhj86k1ADo9TwYTMZ9pyaLQAYmsCmGokR4DEbAn6tb5FXdL7aCV",
  "key6": "4N3cGhUotVzxajANPqGva7GUA8r8owyD1RZTooFxh3Era8wvYJMWfAtjhwJuVKpucPVCtJ5LYCBvKbS5dzXjTjik",
  "key7": "42b9fsz63Qzpw4GZmxJJJHkpR6JZfWuswAnpRGz9PF7syF3piKVaUL47GtybvEDCq5LykSCHi9RwnFp59B296GT9",
  "key8": "5bi4uJEBy1Wutg9QsUeVsoH3igZGd43SF4QYJNSaU1Sb73VKpYcD2XeNpZq6A1RS9XsLP2RtW2xkLYpjExai896z",
  "key9": "3YCYgK4hPa8sQ74oECFnW4hVmNSJuhXpegCofmLE4sCEARNPiJRmEByqA84xqfxjShs824tAQaUzWsRMDFsu2KgK",
  "key10": "27EtqLhs9HNa3qkBjMj7C4Tic1hYT2Rcsr9Xqoz6TDBz2y4t8iQMx87x5J5Z69dZhfiWGx7yFzGkfRV4BHk2MmiP",
  "key11": "4NXTzihkyAURGZEABbGiAAsjhNZCMwK7TUyUPSw9yGj51WsogrUjKPVhoNCJbFt1rY5vxWMWTDZ6vuWnrd1gV6bq",
  "key12": "5gj8MGZBNn9wR4gbHVh7KCs9ifjh2inxpyWEZDX1CJ5xRcUxUd8Qt59ZFqnww5eHSNucGHp5Ptg3fZbpkKm7afPG",
  "key13": "59AgXfEoq1tEw1HYqFtvnt22wYcYUgc1B2eibZTKP4K3freLudDnNhMbsxKJP3ZuQHgP6HPB3Haj99mozPPG3Ji3",
  "key14": "3BWgySX8mJsDLmtsWUyAhWghTuZsTFPGhpv3hFjydo9nwMdgHWjM1tNVtfSWF6izh9Z9f3P3XbihGyXxgyaWzTpZ",
  "key15": "6FfmRaWBrFtyUS1nfpJUAKVs16EPLQrZEj5qDnQXJ5b1xJ17yPVRna3o5j58qHgkiEN1CVrds9vg2GD3dxLZ9KL",
  "key16": "5wYBGRSTquZf8PPtcXVAn6mG96oDx8yeHen2c9L9NVzpeTpRasdgV2DqY8LRXxVjubM8p6ChoHooMr8g3Y4v8Bg7",
  "key17": "2KLEpwRz1Yd4ftkXzzF76xWEHiZEZwhrHViHmbxSj7fJnYsPaoXtqYsounPLj35q6Bv4t7fafw2Jc14Eg9Hzku9C",
  "key18": "4CUAJFocyKx4g17P1EwgsnsnMV2qo5cLbnXEMp46B2Bue2ppqcD399kH5yBLM2cfYo2SMNk67CTFCkPzytbGkBDb",
  "key19": "2efnj8zt7qAX5jybVrX66vLPdj4iDmoEpoHqqBGjf2vMPABhsga7KifPFx4r3mssMGUGuDgwf3BpZTMUnEKsZghM",
  "key20": "34d9MpHmKYcpkgF3ngdsR18ns4qJwMEUGexGemVeLTh16dCnx5UJdKXQzmM1F8vkHm5dGRQoCy2RWyBjC23VheeR",
  "key21": "35jT5HXBzJq439ZJtvCPZJ4zB9AQDyeozVhj9QMF9B7isr9W449KXGNL5rndHKFRSFLNLAGUELtAN2px9zv8Wb8b",
  "key22": "4VR9aa3kSBBPFUVEtrVcxR5chSmCPEcTCxuewoqwNukcpUzcj2Hk1Ypajv1tLiECCYjdtpyzG9MSoXnXVtxC3nYG",
  "key23": "3z3zFSXPVGXWybsSTcxhgGLkqJCK1mWmeNubqBPKEkdZSVbgYRUn3TsVSGJ4Y6s5Y8EDzF7rVVYY4QvDsKDLNjTm",
  "key24": "4PMvgU7yGmpnUHuN8uHa61fGspcs6r84BsYzgL6vMMh9R2jyXCfkJzzvVDgHqWggVNmvum3BD6Xik3Cs4T7JDhXR",
  "key25": "nnUgJTavFXaVHDv5Ghb1yfyDUFw8uJFvzkUL1uDWvwdpQxLjfT1psCQtMPvqncYNFsSB5QSuo5mAQRd5txArQyH",
  "key26": "3LYKPXkqfSGEDdwihQ1D3wUcZF9rYhs6qGSrGuDP511x3xRSN6g2rG12wpGwwkNv77d5iRn3KJX2WZNKfJNui3CU",
  "key27": "szg4HuRvpMD53M7XkPRFPm6Yg5xXVvgw7GC42X43MzhdxqxmQrQFu6dfBtcj7i1oW8JcGTdHDcXz8E66VUbhPfY",
  "key28": "4pct7CGia1HbzUDegWkH4kdfeAZRdWKd5QKt1y1XxfLMhhvjtbbFtwEsbfYekvhjmz9cNcuUjDnpviBULW6cfFY7",
  "key29": "2R78v1zt1jcYnUsh2gmW95GbNWgEkWKTSnLUYLCPdjpytYhBbw77j29K9AtjJsXNyii61wD4CZ8nDF2rNMXB5kY6",
  "key30": "3moxRY5PUPeDxVzzeYByFpjK7Wy2LyCQXh2kSmQWAchcSnvbyyBVcfAjUQZpMyuH2GmntaKp8nEXrr4vy27yeZTd",
  "key31": "3ysvmsJjLhBXqcPhEQ1JUHYnbv58xwe6JtQEhp6BYQWeEYZk7bjkyorSecktWuHz8BHitWZ1mvuygXwNbhphx6br",
  "key32": "4oBQX7wYDfdzKMG4iUV8VgVmnvgfd6UEVY7FXyPr8KZJee15jby9RuCiTo8sREn913oRzEzTfHNwhD6kPqXSB3Zb",
  "key33": "4cW5eNVvqSD8f7w3Nqvi9JXyo6gLzyeXe5o56WUX1ysZiWJnkPty24gsvo2HiBTr9qHi4jC4VmDkrSMsy6xDj75H",
  "key34": "2aFoJFv1Pj9ukbUWfqijD4zXjRLVtDZ2UjfBWj6LaPmUKwFXbHbB3XfqTRvCimHRGkSfgTBpGKws718W5b6qNCer",
  "key35": "2uXjiTmaiHCZ79XTnxb5fBrRPzcFGLToboBD9VHw4W5NUjMq3wDuXn66sewPfcYv8tjUdmJfjZFHV34m7yYi3WB4",
  "key36": "34babk94SxALfn3bNjY6WhmfSKdYqMNKcy7j2c7eVxaKstbDPhdPfA95V2pWz4gHsRmUK3owt4N9PrDoWcQWzYFB",
  "key37": "3mV876GjnTfQUPq1NVp5RSjkvcvLTasgaPtHiEwSkrTWa6bMFJcnVGZu48UapeQD5YTKTxd3ge1ZiWuEQ4zrdQfz",
  "key38": "bsmk6XQAjW4QiRxUS2QoWqvyW3YdGWYmXLhTfZXhkef2HMib63vrQYtm17LgENr2oBJfR2PPMo234jroQozc6LG",
  "key39": "2oenB2XHAsMx7VF3AJTaxtb2Zp98nk4yeKULQ4NKrJWvJKHcYjZFG5ftwsjBs2zz3vafQURhHChxAhNRXFh5Ec8D",
  "key40": "3sbNtH26JV4BwemY8TPwp2swBBwzQnDpikJToEi1sy2zFJ5zG1EsjiWiHXLPvzZfj72825iaTtoG1AfdVtMn9KLK",
  "key41": "5EykFHTp42gaqDTXVQDPna6z2K3FEnVZ8wddmnoiAXMVtms97yT3M6Azy9pHQpve3TgLZ4qAkEWZZqwNLewj9EVM",
  "key42": "3RFeCGJ3nRLNgD2BmzTgBQVfzPnuvf1SXnUCbFtSshr2AhEUJ9qof8QWnGVzhkdCjF47msm2m4xT8FPFpKnyaRSQ",
  "key43": "1vEtH3b9eE84vrrjXRt95qMAgmUFpDxTfj3bpujC8iERBUD9m1BWeTX34Dczzcy6z3zKwfXacxnatXaaM8kYNNj",
  "key44": "3GMJufYL5EbLUH4Yhct8mZCXo29HEHTDQhwqvKndEYP5t2LXnMWphJm5HzWMLBQ6KjdcFJB9gf8ipq2joqvzDNjg"
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
