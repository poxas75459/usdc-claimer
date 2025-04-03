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
    "2iMAhd92g1Vfsywhg2u37GjFLmGURhNiPPUuyphAueUYfhmqu1SgNGHFMFfh8gDje2paAEZPxWqT6Kjn8BtzSSra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hrEYgRmhXKerXJ3ZE4ptkY3rKTA4MbA13A4SnWyRJ63KGPc8hvaUcLXQTNoYo1k9uAYBgZX52t3BRmnoAFJCCru",
  "key1": "23fiQCWYQzNFdJBEekCrfXSBvCegGpQ8uprwxEfbdML6vxXDxgVZFz8gZCLCc9TsXm8o1XSdiXKzUt4DDouXuNC4",
  "key2": "3iNVLKYHfEgoJPEjBUREr2JvuyMjCanbSTXvYPszzD84VS44YB18x71BvCS2xGFwqhcyBZhtVJ4vbZyyER5Ctkgd",
  "key3": "5Pfn6SJKwHag1p7EDW4WrDk7Ly3qQTtQnmG6eM5oQWfiJgM3KPEkX99jMRvPxfXqJF2pC8GVTHKzg1s9XnVhj5Jv",
  "key4": "2GFiAxt4Pdme8q6akWMzo1SWNfX2GuHn1UYEWr1vZuvwMr7b43DqsrZaMjzYT1kDeM9hWrmXiUf8Gn8Lf8PtSoj8",
  "key5": "2VZ9XcbWycunHBYdfTVLnm3er2mEdjQWd7qiJPG7GqUYBqR2pBbV6SsF8G6nQjNpCJ9bK17aktVPmPaKBaBGjNX",
  "key6": "4YioACqr2ocwwXBU9jxCcesXKEkWLHthsTq44W3GfeU6otLuZJ4CsZZXfdYWpBXEntMkYzNJTRtwSmFX1JNYa885",
  "key7": "5Y5tW3MH4iiuQq3rqKdRXz4MPm3kpd2cnuMzWupaB5oqkUvh8KeqfER8UyQNtg37q8A9iCZy1ZcB4V6kGdj5G38",
  "key8": "5TipgcJdmjYh92FhpgVizHfZa29f6Z6oH1ZYXxmuKyCjivGVdSFL7YXp8ye4tew33HHLW24ApGyAPnXuYLZwWAeG",
  "key9": "59pWuc1xD4bFYUeiJq1E9Dydhf9GrVKimVAwkEiCvkZ1Q96KmjJW2mFHf34FZSsytgXMGgBpNQ2Mk8qiG38eCi4e",
  "key10": "4kg6WR1CcfHWL8mvRgLaWzy7nxRcfTwh6QyJr5Wp7yn6mMbVtM2qfJEjetfhkJ2vW8vB37aYHstMdjsDDAnis6dW",
  "key11": "ZaS54kmizspnAyFFkd94kUCrzqGU8y3DkRu9PPyHHNQm16F5WEzFA8HjyFs41AsGZmPzE12QRZMXAX6KVXXV7Y3",
  "key12": "2MZSjQU3wwaVbsTQsBrnYWf8PhQN9BW9WNY6aEcixQR8KbfGomY7e9hP88Kc8Udx3zHtMheVFA55tFhR9qXSnYBF",
  "key13": "2qUu3rEtdnJ5zGHboboUoQ22myuATDE3Q3peLESNaD1KBHCcSq4VoTJKi81RknaQnYJUzWV8wDoPkfNwWFfNmQ1D",
  "key14": "4DVSANTz44Bu8T3cuz1W6F4g5xq5VQ8iAQXVbTkka3dxddngjYDNJiYVNokDN95qSHnzrfCPnPVqRox52F1sPHVi",
  "key15": "4qTycUBkafH5kxSdfKaGGEXc7UkJPs36uqtjScXkfLstuAXTTVBw8DpF4vib8yMKxLLiEbR3JQ26thoWJKUFxZMy",
  "key16": "5o9DfFyx8ThVJfkcR44SxHCzvfyqrcmTzntcQAoG4W42kaEZZo9zZvimuwNL3exKG7JvRGYCz93V6rxWY5k3kUBX",
  "key17": "2oVwnzZUbx3xW3TGH7XaRUZqTR6aZ5bHmKE6QKWFSCbncTvdkxtoYnXYF5SJY1Y3Z9tP5ZgcUthwBTPcpGS5bnEr",
  "key18": "3aqe7iaCH7UNb48LWw3uubdvKKuixukK7n389Pg1EDrE2zVsDdXFFVVKQFJnR2qLrpWcrFfTTv41BrWmYMc6SLKJ",
  "key19": "3RS1ubL95X1DtDrQkiSjiZ5qqc91bJ9hna7SZxVYyoirJuFypZnynZoYgKhkRPcKAznuBg1PeSqqB2Zzo4fRMZxk",
  "key20": "EY3kSKvsHYBEiH5ZkhR5t1JFepqNByRVw3Rgzz2mgkyVWSu3xSy8mUkLKVcaXic2LHDaa56T1ZtR7dHyEpDtAzc",
  "key21": "39bhTcQXa6imbtdpbWDhSseEf6tsjCRb1P8jQnrCDw8iYKBVBrveRw6FHAmoajAGgpGhxWd6WkUF7CMxCvXxwVkS",
  "key22": "2TJL4p1wVmXQZq2fW8j1XwsQfWaad4au4HvvmX3R8fRDZVWgoTiKNXKjp8XC8jzUqzutVYNQj3tbJQ9cvY5RNKEK",
  "key23": "26yScMF63VFcnZ8jyAnuHawAq51vugWZNZ5GQwD9Kri258mFz5tk5a738ihezHpLasok4Kv2WM9fvTFK4TyESJMy",
  "key24": "3GhfdZFgTfZCzFQ9HL25cqMYbqHXhoTaJvBmbEKUvjeFEFKhw23HtQYjhBRpc2FtRiMAjBApXA6XtgS2Eiojo9M",
  "key25": "4DoafmeoWFpQXsY8cpNhxmPZ3RKn1JAS57d7cpNN3sAmdJP3WuEEnpUDDko92Yg4AdzuU7wGW84bUAtLG1TCyP8W",
  "key26": "54a9XrCdQDdShTH8HmcivixeqGzozTrTba761w5WeFDxKtGcrBUhWz9qqdGdcoNG7FKUAEDjc45wnUmNzQ4nMAic",
  "key27": "1YRi2ev7sUeVxaZuUKoRtL5McSTCJmBrs7sNywTMjsLrM7UCSWaXYxxyQcsAvaASPXLJyoUZLiVA6FFUAqAp2Bx",
  "key28": "2ZW5NyGxXh2n3Hwk8FrxttH2epQwpoxtLUs9LCQgwfiuw2GZx6kromdgnMaC1QpGr9bxqty1js7MU79W2oCEFW8i",
  "key29": "422YdaBmMGC8UaAS7PQr5JTjDyi9JePCqHVGDnYBu5ZhiFjo78nKk6amuFksDMREWRSTiewmeMMaB8Quut89AxHq",
  "key30": "4BAycRuhGiTXp1sQHJDJSx2DQ3mnuvtHW3TFynDPed5FhiPz4K6uh2Ne2f2sqaEWtHmvdkPGT1gisxd4nvAQNyzU",
  "key31": "5jXBXKT8shupyeHguyyNCSEQRUpAk9h2cK45hLJhcCA6DPneTPY7tV1toraCjhJShpxz12KTergCFDVaRPZvGKdC",
  "key32": "WqZVy3WMF84UzBawzEsJWi994ukeNVZEv4Z59ca897PjST2JdtHbegGtp8TKrjViyertT2dsm1zpgaikPfjDhNn",
  "key33": "2cKwR7AVdDzzrqWwSdzjq45EpCkgPLSN7jnPeXgMmy5KkuXav43TmWsBTpq9rEnHTAh3RSEXHbMeEDw9o4kzh2PH",
  "key34": "4q2RZqEtWoVjz8HkRQaNyutVEoszNwEYLxQ8u2EEHrzMpyfLiWosUbUVoH5TTEZpUkkZnKz6LBn3u4rMXAwCpUwe",
  "key35": "aRehUJbEjjqFx3dpuoo1EhfWDHcUcZFtniARTzRjh1vMJ1z3syDpfj5C7w9gH8QZAs77YFVTwwuyB6yQ6s6dVVK",
  "key36": "4SYGf1Z5P45wV6xqEjFZmkoAxFnTG4fmvwfNeAKoM8yYEHv7Ef4JyEpD5R1PEd517ECGPYohcHWLE9sTum4AWSgb",
  "key37": "4qQW7HPYut9qo2QHAYSjBimSmaXjdYYDETa7h5sSviRNWNBdCPHSkY1yN3RjwVBsQbFrdmcEzaZrN9NN5FjewnQy",
  "key38": "659nSqnc3ebTpWMTPp1mGHWCvLjdNGMnon9PfjXu7QAvH7eEGSoA7hjyJnUf8mrPhrKCWTe7N2hFkxJunrHCVd7Z"
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
