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
    "2LfVwXkLJbqvau3M8zYNiBnzR7V8UeESCuc4h2tRjSZqUzFMqufvrxb4ZvZf9xr6XLAoagiLtWqZPxZNsvrTVePb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zNxP6kxQTau2KcXv444az6kYR8UdY2fg2KkhH32dzsG2mqRR85LoCvE6417F43Q3o9xfhD24RRBumEugYAKoWB9",
  "key1": "4n2EgEoXgMn3KDAGSrvJxgC6utSdZvLn9823xXDHCPMWKYXAS37ekkn6hWsC7yRteZMW9n1Kf5nkK4TAhaHkE257",
  "key2": "5bMpEwbkkphcDFXcx86rbcxxCJqhV6ZrCjQeiUxzNHHpLfT9rUs2Hp9TvnyRpu3LaaMFfAo5yvWR3x4Fg1vY5K8E",
  "key3": "2qx8htrXYirgZqyYYbiXQAoEgiF3wctmoMsnypTbXcQdNKjBFBd6n3oEw9RjoPqLKQPbVam4C8mKbKBQZqkp1qJF",
  "key4": "5dFRkRwH7cbcae4ZJHvtFagR6oPuXMAB9sr8ctFj2vQPnZteCvBDJua7XUcjqZzr5xn8otMAkfWTvqtuR4Q8ZS67",
  "key5": "42R4zaEjsPVABjAUaW654Gi7CxSoEq97zrHWvqNZQtrL15fAbsYiZxnVNhWRUq1fvxEMyst5ycHrDZYAwjyWoCQ5",
  "key6": "Gkh1XfCzmuLCCkKeVdVoKWkUWLD5edyxNXWdtUbih6qVbFMHiNMMG3QsHpi2fA4Sfwwc1dunagdRBk1UWXE5sen",
  "key7": "4AFhPjxKpXqymewZLaKejLpaEKQ3h8LcDGM3tW8kyToETPrpJRjQvBeFJccfmm6ST6neeyBkyVJstugBNGH9kzL9",
  "key8": "2kBArAq7eFovnsBoqroNZn8dUPrsiXDNr4NBeZJqp3S7HJzB1ps9kETvPSwfNUu8sqw6ScEpMz8sChvRhTwnmiQw",
  "key9": "3cA2TA8QeSyGTxyaPutpH8yu95XRbh5ry9FbXZP1tNpHgSG9Az9gaCuGK6ZaDdR6VYtWGvnzbce7h3uixKaiZj4N",
  "key10": "3eFQtRHEhbUMLscboA7yP2wBMxmQLnszHhJw8kBahwbmHUSzsa9poY4ZrB1oQyYh9zWPW4nu1rMQcP1NPKtbN3YW",
  "key11": "2hWacBgpUXQ27aFTt6pfeeFeDcKqqVfwAAy9TnTEhS11qY5FtyggBn2nhzCkMu6rTkmiKwawmmwo79LN7zgu5QJf",
  "key12": "45y8SzJtVU6jW9BEQtk2eVeKmJ43bXGBNUdgPD3KxhgJpbQG9CkNzmcR36etAgS8LzeZxY4d2HrdD44jGU4Rzegc",
  "key13": "UZvBtP3piAkLR96tYm5qAT2DrgQCodBuAAK5PdqAqzGHQGtLpLeMkFv5KUZDyHWCMJmRYu5xoYyhaJUe53DdFeA",
  "key14": "4tcER3SCa56SXzA15Lh9ufwEUyXibvYNZCMa14a8UBg2v7CLRDS6zqAG2qkhyJhHbmNCekQxYHe64a7XHXYYr4hQ",
  "key15": "39Aj6asR7tRy1A86i1SvaZkYqzwtDhpqWDSy6FpCUTVaTXaoW525uBmoq67nVmH4ti7dZCm3Fiv14PAmzLNS6XjX",
  "key16": "3dxybpTF6SbYNY8gscFHfW984Gzd7W5zfaKStXfe6k33AWENZtyWk6ipuG9ccJDvmhSPzWsYp4XcqMDzcvTK9GKH",
  "key17": "3MEDC67RhbgCob4dhvg9R5ELpT8dDGaNgYCfNvw6SWYusYA9ZvA8crr2hJAss3WYm6xSUbzbdHFCDsLBHHUxb3dc",
  "key18": "3szJF5F25P6R6vppD9x9ok2BYrA6jezVQvR9r6iJWL1djbBud4WXzxWfe7mK8BNppYsxGEQThzNmMm2i8B7mXpKz",
  "key19": "2qpA44ySjHQ8FQLW5PvvKV2aYAuUtTPmpaQEpJomW5Gq7GX98NWiXghwQTxhTcZF4SeE4UkWyDBi79dvaacA74VM",
  "key20": "mrPGZfnTQiQR4ccpPXbZK9C9XM2apkmajUhMaj9S9RaTZhXrZPCf7RNzDxDGEoudBmbh9Pc8HePPG7Yb2iP2ve3",
  "key21": "PGr2HZznKfP5JPRQedYfnXyWRcZgKVhexx7p2M7jx3BBt6YsGxnDxFsAfenMQUtaNzbE9yPVaFmoKwiW6jU1DYL",
  "key22": "2QtLqyghsynb8esRDk7tBN4gJy9Wg21Nvoxio8XqnrBu221HXvu79ztn2xZvqKgUwNMtWmsurRwj9uDVqy4qmWCQ",
  "key23": "2pebtfEMauH9hbDD5pjdo9mJr3GoYvgDoGJHtjuSREFT31KobxsmvzmfGRqWDpDPh2i3fgmefdZDTHKiWGxWnHzy",
  "key24": "3vwA1RDfrz32XeD1SkegSXmRN3VfTyUUcNMfGD5dxJNbG8LxJmwtFWPwqjB7GEGQm3ZGBzdJjat9NCijEcsGMxTM",
  "key25": "2gwBwU5HpXbuvgnugawUK6fG182kLxrnnfJipj8tcHyNDSEVUeQBFq9ADjxL34hog5m8B9S1e5fACMUMefnhDJby",
  "key26": "37XgsNALUc5ErbFN11SkvvCfneqsveiS6ESru6NgdcRMaxoVLyRwiVd7CmqFMjpYT24qDvVeopKHGSXFECjdwmh4",
  "key27": "3H6dT4uV6rLyP2EXhu4qtbFut2eWHZkJZ2GbzXXeBaeSPRxVDYRTkDJqTcqV9bowGaK8NhVjswSQXvRTjn99uYVB",
  "key28": "4PuLCtma2S6rwoJMPXGVg6vSehyHDZjfvcaCy4DTyxBtwGN3omvsHX23ESrnVWmWdm3xdq4R4NHB1XximuYxwgXp",
  "key29": "4YMNvHNLnHjMBTckpg9yuK7tnGZSwnQsjp7Dnu2WL6NXuvGuPgqWv5VnvGtKzRrrEEtpZkXVmenH36wVC65atZAy",
  "key30": "3WZNgurzEbT8V47TPrJzo4vyAE3pJasQT9DFYMKiK2kXzpXPNcHjbBp3mFp7RVLckTWNDZSZY28wFJFD9hLicZuZ",
  "key31": "23dzyQWfeWL3T188cMaG1ifR8bBw1ocnDfxRcByLFXR1wWNAkEBbhz3xtxwh3TDwFFXGk85bScg5Jm5PXi2x62rs",
  "key32": "2tV6P655LyUeTW3mUDZCaLuDBUC5uCaWHTS15PzSh5o6BnY3xtr84LWDDJDQFiC2B4YSdwj9N9tFRGYZoVbibBSv",
  "key33": "3YG8ExE8zvJeQ5rMDXbHEXNXQwCPZirSGy1hm1vMg1321eBQVJdo7aUDFbhdL8MTWvtpozHLpEPjjyGBHruEGpXR",
  "key34": "4SW8hZtZL1tNnumaJPRLzcKC6Ph5tiUWknDEicNZ15rKZhKK4hxZYuzTUwa96g1b6zp3SzCqCH5TkbFbfhJ6ofQd",
  "key35": "fSH5qNYmR7VDdhJtigR3baNddoP1F3yy5U5VeYXYKQoGGDFdcU2KrKLv24njH5hR5CNRzbc5EsNnzywNmHFcWe6",
  "key36": "3zjdTNB9X9UvViGLrVj1y8TA5WCCeGtitUkrTsK8Wx4yWPzmqha6w3wNBu8QB9AqGcteCcZtAyxx6qCM2U5m34S2",
  "key37": "5GPbmFNZFFXu8iffPR8Db7ukHJvhXE5C4Rz3biSpWoyLJwr5iNa2TfFqhRkbGKbfzCmhJdJE8nx95PoG1JbzVhjz",
  "key38": "3PpLMrizTgwEgoJNZ8iLPsBwSEhVJZ3MmqBCGbKnWYBWbNYGkMMMH7um5mGcKsudWjYU5J7M8qW2rLpWQVAqakDb",
  "key39": "5hAjvycryxtR9LZorcmXM36FXdk3785kbE5Z2JKjhbFE7qTMJbaseyyBGuNLMdkztBrsEvhL7VzScfXEkvcyMytm",
  "key40": "26gdnCa56Eu671rK54Fg5hfLKtVH6XDvvRBAbP8N4NDqn8YQrWe4ZHuF2y5RJvkgw2KgxUFHvCpgQsJjjcmpa6cC",
  "key41": "3HSPmqDbMMUUsCH9afc9D23wC93ULg1bLNX4QvgkiN4DTX6rtnXMmfV644RF73Mgf3Qkxe33zb7tTMdNVWeLtS42",
  "key42": "4S14SJEZ3mWST1hkDsfBy9j4cFpqzEiF7CdJvViLSsw1V1L5Zr21jbgdqyQbooGUpTqqZpjtDh8uiPXj1K7EanWG",
  "key43": "5Rw6DfY65H9zVu7RevPpapTmh21CMy3eYxSE6SiMziNFUPgyMU3vygvobcoKXVKmRCy1W4o465jJsEiLFNcFZaEr",
  "key44": "32WowyhZyJ4XN7dKbmGzK2GY1JhnrGTgx2jY7yGWkZzsNcFzm4ZyUW4qw96EgJ2pa9aLoLE2gLz3cdQMAxjCoNwg",
  "key45": "4wpz4FEPtTuPTwY5CYgP8s1vZTdAyqpkDxbzr1NVRWj79S4yDjbHFdHSh4y9ZScUfi7Dz4RnVwzyLZtEfaXGQgX3",
  "key46": "Dp7CHfmKys4mvW2d27jDm3TwqpGYAYqxm97XwKJyqqPyR6awPiKTovnX58M9Hukv4UJUMi8NkeTJmriQGXXNQVX",
  "key47": "5CQGp257m5ozq9ty7GGYRiUYF24KYDkVrPULjbS2tnMy4n1QG5rKnWCGV6Ffj5vNyvJJUp98Raw6HDAMgjADZBqY"
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
