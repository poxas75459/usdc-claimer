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
    "4GTe8Ze5S3HUmUDNBJbJ5tfmTvYWSn5fND2NNVQzpjnE2XYrpdhADFVjTtQM8nTjCU2rGWHjhxZ1p91FLEPUyKHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MZvRdkci1fWU8a4sJuNT3Dfgnz6gUYP1LfT8KXo6Le4ZsXcrAYPiE9hqyBM5xJJsd7MpFzbe82eeZc4Wbwuy7Qp",
  "key1": "2Ryv96LwhVgUrVKVsd1VfAvFNwQrqxsG4r86eyW1vwv4E2hcbZc3gdEbvynmmuDgDCqMwighTxF7fm8KyqwgVM8",
  "key2": "4hRDViBfV6hxZbBURPQhkGuFbbcLNruP5uA6iY2zB7ifweqLWNiSHtA6YySvY1QZjzr3vm3ULotQXrnXAHbUHabK",
  "key3": "2inbGZmBpy3FmWopGmfSsnXXj4wBmB2L8Vku9zjbXikg2Zi77mgb8stYBk2Z4WFBhVezXm2mZbzNrEwDnafZFccB",
  "key4": "3oiM8QLfHVQTFGQ6fCTg8xyGCNyJ71PUCXto9Ztjj3uEuR2D6BprLopUFzYngZbRXLPqvVdfSSuacyU3uoAaALiE",
  "key5": "sk7xsaF8rX6XsFfBQzxn5XJVqbJEtpeBPUGDG8U5p2szKgt6g9jozh89Jo9ANZz3yqAkmctnbKKpmFrS4ExY8bk",
  "key6": "3ezQAihVUpvHQaPoHAonprSFYJo1FrShrGfZZQmNwBYPAbbkSJBiGXFAS64WXzzZgi1HQ3bqJa7ACbGo3MPaHGkx",
  "key7": "v7ide7rUacW5ctAdPymBq2cZCsFjsPq6DTssKTMBZWKBjZn8np1F5LrEZRHHWgyZ62ViVxCJBMG8pngZdbzxyYT",
  "key8": "2FhkrmKcnYPTc5N9oGyUSssR51RKnZkRTYbmSJXtY2JSbHytmCUSDUXsRmUEw9LBGATZ95uYMYecF3ArbuxdxH1h",
  "key9": "pJrptppVP8jH2sVAQxyAYjDryFzYZAuyUBt3vgvZ2L26yNZefEuFmR45afZPs5eMRyUJXFAGRQLv1PuW7bX2G6G",
  "key10": "etLHwXJmkmUz7KA6teBFvJR6qgGgoSbDBfycV3WfdPrBYnGKChiSjPkCfkg4m9Pa81TBzTM9bXy9QB84edR399V",
  "key11": "481fkTFwW3DUuqwmgqojrwiBjW2gD6L6YCQDYv3qoMAiyfFpe7EUinbpchJnEJiwgRqhCB617QcnKiGju2jAYAUi",
  "key12": "2htnS8rpun6hF3ee1VrMLwRdK79235dvdmU2TL7KqMHMhvW3Fcx4MH13qr2UvE8ugo5LWC1c3qfPc1qAVM5hSGV3",
  "key13": "219vPgwynU1fXBFtf8BQvyfAVAAx4EbrEx7EtTsQsD59JrShnkNkSrCcvGyWG5PkeH85CbqdtSt2qQnFhgWomUzD",
  "key14": "4GVCKQfFMPRBE4cx5omqpBbw8NPHK3rJyfaNffjuh5NynUf28caCf7hMk7bb2RoBaZcrch1p9dc7bkSStpNd3SUb",
  "key15": "2aTeuZjMGcfKz16uM5PYzJW5b8LeaDkV84uztaUirbYzNMmF6HDHHZpnc9w8QyR8VZ5wHnAYf3EnDB8aRtSP7Q1d",
  "key16": "5U1kdzpvzz36UZPFjJfgEaz8qeUCsJb68ALhraBWPDugJYJMhfpyq2SBRBmdQhVEAdxf9T1mAkF4dFUGLoYncuUp",
  "key17": "5Z83LVQKavFNiCrPL7yXMg17SFsVCpNbTFH33L368KGErATMDJXvEk1YU84QMwKtae8G84w6BocmusK49Dnw5GtK",
  "key18": "38QJSMbemZQRD7kXBobxBzJKvZu85XfHfTodApTxXCq3VjGV5niUGyo6Dc6JHyNJrpuZRoMjCXjJJLefSey1PBUR",
  "key19": "3DMDQKY3mTymruo2hs2jjeNNWryyqhCLtHeaUopdkpn6cTcLe1ab5d13YbQFw3QihyJkqPnTGZanrTbXTygrQfut",
  "key20": "5CAyC1LL2opgWpsFRXiH3VD5hQR1N5b2R8co7PnXEwh8y3g4cjLDir7R7X7uig72CDqm7K6XiAe45qtANXS9WDmM",
  "key21": "3irDeni5WiQXRCQh9ieQSfezsjCpB87BFpws7RznKiEu3X2QHCx23YzV6LccGr4YyK1A4Pg9KiJn1wm9eAFZdau3",
  "key22": "28Ss7Z5p5Gn5g3kG4XRkCUJxJZe775i5MXv7uitzU3WUvrc4r8AbNZCb9oKLbsgcPcokoUHtaLmRfChHDCf54WX5",
  "key23": "2mMEcCHdAuqhAvvcrST5bvU8LqMSQhpoh8gWXbYL3ZmdnPZ6Px3ntTJy4HUMvzajUwwXZ4pCxbVhQxdzaKuEWWog",
  "key24": "227s75eYUVyDt477mPR95KNvdVQAWkJNTY2F7hSwxQ8GCcSCCbaGBK3iQyZqyvPYCPMoS32EnCAezEWEkpATLv9H",
  "key25": "25nxHeRT3bhR9bBcrkPgRC8277uD8dkgxADLcBRucqH7TjAKf4M7DzdKGbvdFvk5krbkeQQSKi5GQKn3WJUMi4Mg",
  "key26": "626Y2pDftS61vxhEL7HLUvLg3E2J6NsMNMKVQhKgQ5WtF9XbZF5ZTAXkpzRRTJCAMc7uPHL4LgwWb2Kx1E9m7W4J",
  "key27": "4a9K6XJKXAbg4WrnaF8etE56em3gVFcfyTvYUYo9TqzFQAqniFt5Bz8VSdhT7PWV93UJxoBjZ2ooGb2nLq8BpD8s",
  "key28": "53wwHoitR72pgFZnJB68k4P1MifrUniYANWmKyAn16HP8tYWrUnbMnkZvEA9UZxWUmWCNVAPY3HabxQwgwGr4Tia",
  "key29": "5vvwqVkoqUeqcM8y4ebieAkEFb7XRbFj1t4KLbYWstEwxVTjXt86hq5TUNsyierXJEQjVk8Kgv6LnBP6kPt8T9f8",
  "key30": "2cvfx155rFBTt5qHWzhzkA1PmjDSeNDgzXdYwEqTjD93SmA1wvjpKrxYfVd8FS9KsU85Uh7eBxiLZgLMryDgejSa",
  "key31": "2ep2FKQ2g6Pyb9WwWZiKRhEBWUXR9PjsazjX3vSgFFTqAAvDX3rfMHBJNF4i9zM1ys7vJrKUPq2ojEwHnaiLKnuX",
  "key32": "aBSkpor1R625t3Mb5Bb8XMYzEaubiNiaiE7vvRoh3AqcDatkkEbtNi63Li1PxhtbzP5t6i1fNEyC6EfczAGYmu2",
  "key33": "2BsCMxrkZ9C5C3S7HYaNiWFoNn758An3iQxnvCadiuzt9PV4TsfPzqrsqH4uvigRwd9JHiuUMQmjv55ehEZfWRY5",
  "key34": "43q699tSZBmsUGtNqFhjB3v9u7nfdy8ms764V69to9WSyzTr31qdK2TcJWaNSZAqkvn396BUDn9tXJnpZRLdH51M",
  "key35": "3JzhCs3kW1NTf1R1t8GRBLdvqTqZtHATkvuSTZzBtoxJAMjaYoKM1a996KNNJ7NzgUTzz7FaemUkMkCoptupEkLQ",
  "key36": "4AfM5CxhNssFFiTpQ36TiXwhbPacQkB2UuHuzXbxFdnSsWP1MRrhfxavQztWg2pLiS6V6f1cLxyRoBS2KZirU4rB",
  "key37": "2UL6SEbcqtK4t1WaRUgf9ADcy1ZdY4vsPgfBsk8WJy9tovPQQ3kD9E1UKkKrudXwseHuanAFe5bsmyh8LTjcxcS5",
  "key38": "4ftfADRbY5VRy9pavHCgXGVeHqGoAuzxCwraD6UCqn7kURDvvJQEftezH514592to9fQPcn3AnwibfwhvTijzZ5U",
  "key39": "3uuMfmrL2XQAKTsrjDbW45vEb1WyfYw6NHtGNBfThU248dmVkRNQVEic4ffMMhzfnC9NMfRWpdWZepQ7vw1ejgEG",
  "key40": "41JpP1km1C62w3dELeeeKjT9dJVHDbscVH7GzYYV5qv48J9PayahCe86HAsZ3UyuhkH92F5Up6phrSrDmvCHJwB",
  "key41": "5qLHbBbKcLv1A5rd85jkPtqR7yEsSW8Hcz8ffG89b6QwkG2qyTcBTb4HDrkRCWqn1WRt7NHw45wHP3tcywjvWSUo",
  "key42": "63MjwicfybEAKQ7akBaBfZMJjDQwqyQqnMe7og9vbGo59cPCuAzoGH4aM5vaY7jfFDzzT9XEd4rc4ysnudeVmpax",
  "key43": "2wT9hBZm9fxmAKHLUTQSavwP4EzFcJC9Gp9omYdb7Xvh86ZUUS4tQcoVHibATHkg1tYtxJwtFiAYRWnQPj7JTRRM"
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
