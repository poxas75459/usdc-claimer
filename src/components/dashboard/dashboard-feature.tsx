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
    "4myRVdViaHggt8iUjxpUy3YVu19LsLoUYm4VGdxkFLgqMwn26EMWHM98jpTzyrkV4auHAHwuCQbA9jhvjVx8i7es"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C3gr8ZshUWGLMKRjZz9CEvJKo426K7rVcJ97jvd9xbmc9PTiSBjM6eq6Ta1QA4LCVkiCuHmwAzpYwtP4YcuRSUn",
  "key1": "53DM3iaQzwmLHKQYCXvQUEUbKYVe5Btedku1pZeSELXqFFoSQVVvgS7Wdjii5iuo2v2GVFWJ25p457QppYks4cBq",
  "key2": "4ML4F85PdhFLzrC9Nw737CHSYBUQYLBtrfcbeHny6K1uaJHnn8wYiMEKLWroW9TqjXwyPUN5wQJ53kGHdHGKnVk1",
  "key3": "2wCtbYLVNpK8jB9Rhtx9ME6aLfo11qya73m7vPTTXi5ym2JAbVQ9qZSogU5feRMxNDd2qWx2rtuthnbg2aesqp92",
  "key4": "3h1aKw77hvfZue3NHcXnRtdUFrtBKKWv2j52s3DjbVg7uv2MVyKRbVnuBa7wDAgxJAoeD1nmXuWanRVVXdHTWEYC",
  "key5": "3ApB986CN663FgpQmjMgceX1kiC3CX79pxs97W46f7tUNLZbSbdchB9tjdLNNWEcgNcKJTCb3tLvWaCFdhrBhGJU",
  "key6": "ggej3vSQcc1iorKAPk38jec52FNNaiqLabVrnsQqgsSyZoAEZ3Ks6LewHQmJ22oWKhHM14xwAunocvtyJ7WWJxJ",
  "key7": "414xsWXjmioEBDiUz3REVuVotiyZUvr5nVKxzFQyGXC8iqJoWfmRXXy5j37yMvKLfpbt3vbGv1CdFXaEuCzND3v2",
  "key8": "sTPVRuQK1Jv85UemaK4gm9tqj2cy2eepJUzoQcNGuhrWKpEajxjb78At7iCsbdYbi9BcjeQHG4zpY22Uf3fKsUN",
  "key9": "5d6FN6j574vjURxLaLMk7YoXNWwezDqZZvLn8SFhtPthcnySpNQYZ4Vequ2LiFKXHF7XvFMZa1dD2q4QBjkB1g9",
  "key10": "SKSxm9G5BCPBMEnBQ5dSxg5B3aZkc6qXV3S5SmEyHSkNouvZZkQ4kDgGg6e7Hj6ZccBwc9HkmUXxXxDhjWbrynK",
  "key11": "4v9se9DJbsGRgAzAzPJmVYooADAVYKwNarxWUCoF5v5ZwxqTR6MsiKTos7CsUuyjdXYtmxugJjdgfBYLFb6LJL9y",
  "key12": "3C2iKw5FiGZuRBffa4okJ47ma8cCVECNy5WjtJuWa4MFAwCdUsW6F8ip9tKYHBNg4eaSzgkGYSoUAXhi1LazaQRu",
  "key13": "5N6MXf2onXGKJ1Z1BBJjdwpS9VairQDGbQanP7eBPrs9qRD1pgqgfvNiqiRvisB4tQbjsVfCUeznCmjfEkeAM27j",
  "key14": "3M5HsFwzcBBZBUZZub1kFwzEC3WN1tmo4hj8xvjFL4d3FYRRfVcVnBxqQdBUDoHRhxspwvZhtxHCNDUKCm8Bu4C8",
  "key15": "iPmuwyBqCXjnHeVLycw1qKz9XbT5ciZdGuvCiYvmnk3F9dWBAnzRVywTrrL5TseR4Aqvpp5VAmSMxCTGCTrK2Uy",
  "key16": "EvXxNjreutmGDFSUhci6AwVibuuL82SXJFvvpN139L3DWVRDwC3L6gGskiE3Tvu8xGwBi6HVLR7SVMsCw6rrP9w",
  "key17": "LP3noYwsXyfs1gpsVLvSEBTeD4CN9o4HcsU6bkycZBkhwkxoSAtFbvSW5DmspaFxMmzRMFQEoPa2SCixeYG46Hw",
  "key18": "5QcC5wqDC9g8SVS8DRPxoP2SeeBgvf8hAbG6fR9LqopPXDcRd9jVTXcPXm2Td6PoYumc8hgnMR41eaUsnfkYYzz",
  "key19": "58YqFgWnhiPuZKR3HMNFEvqohuzLAKzcW2MYZPtcTsQDcinAMHeKZH8EpissYf1thSyJJBuDCFuzNyotH9H6uBFb",
  "key20": "2BUk6V651utUdMjyNzaVbFELeKgwptpCJBuBLPc4medQX7CqdVw3U51j6txvpNPFBehQY4mSHznBMToPmi569wYF",
  "key21": "3oosWhHkKHad6k8g5ChsiCj15Htf9nyZXyBrj7VzmPe15VVDJxACQSuWovbcY7Cc3ZDZWDaMEQej6s79EE8ZDRjw",
  "key22": "o4FYuBD4GRLaE1ExGbT2TaJyDNqZPeq9Zmtp56HsjkAvpbYHAm1nwW1AMSmQVCc1rjLCbw1g9uFJoTwE479dgqk",
  "key23": "3ffLdi18QVcbhAPqF4tjdBUMiTJuXaNFFoMMMomJ94EXg428HeqmmF5fGS7dXZSLs9pexesNKkevtvqbycmmZcU7",
  "key24": "YA8RDTnAZwU768AuxX4Gh2f44BqHY71Zag8EvthyyU2Vm8fuQM2Cmy18KQaYzonxsD3QViha7zyGCZWZauCzoVL",
  "key25": "PMNUphSfoWc8aFiAU5A8UBQye1F5n4BmDaBoRZou6Ap3KNmmc8zfvZibn56oVStzeyNioTEjY1ojBEgUuLkBLE8",
  "key26": "2sCjhv1KvmSh5HKQFgRPkTsD1y5N7oEsNcsqc98T8EWmKzuJbFS7Gf1osfckGxfrdvMrtAH83zi1x1bcjqu2B4CU",
  "key27": "4KpndJtp4fbxLL2NNWQBof6jUXYMpPRmZA2XgCtpV3iQNXnePVU2C2PZ2PVhpt6sDotrQc9nnjewJqyyrhrc21KY",
  "key28": "62akhzZFcPVJkWBA6QSoHwoFWrNbK9cYGgWGibvUnCGeZiucpadtoKANjNop42Zz7psNvpxqyn5KwLfXsi681eWz",
  "key29": "2anPMaPn3SNusHM36YtMChwWEbmhZUHWG3XQcCdghsxH2SZF9UyxDY68hZmNL118ezkPF7jQQ1ahPi1yi5hmQevz",
  "key30": "3A6zZTGR4e2JyiYVRU4EUEVymYr2r5j3yA8cV4bmJ4F2gdCjU9FhQY2UbFZ5ffYgZYp4iA89uYWNKoiHkX6e32A2",
  "key31": "3A1ZkTssnfKhufHboqRwLfzGFGKcgEgiu22RhayVqQAfZgoh7BvBnPTLLoCxor4R3g6kyh5KtZjWxXogM4EVCWBU",
  "key32": "2c5yDLsQfLCGDWXTtNJzqEBsxwTGfst1axoHtnGVgDcCwSVT6qEo2GW4gWDqg8EfvUAbiFZ4wSMtnKXPy9aQfEUk",
  "key33": "3KvH6enMQ31RJVVEmX44sD3Y9pkP1UPJ7npty6nVDErnge7Hg59qMFxWe2FB1qbzyn2v3mCoVMHGuY8asASkJNkF",
  "key34": "2j9G3xSY7cAgUvMCECmfPtkYAQpZcFJQCWEWagK51YAwVvSD3MwcgVbwsqsJ9rBA9JnLaxKumPk18K3rcx5zGCuG",
  "key35": "PFJkd6pKgDiT3CyCf5WExpHaf7rGFuSfJTXfMuz7wELqGGHLWdMBgYE3AUtYfWUBKjZbJqWtG5jNker68g4moJ7",
  "key36": "qPY4YaFwkmsCCBCnBd8fJ7fgSNf1DEKnVumPL6LA3EkADA6uhY9YhvesrhSSRQUpWQGs7phpEuNbzHg8bXZhDUK",
  "key37": "VR4idt2Kq2NDCrFYaNAVWM5otnH2he5pwFvsV7d6YuAyYSktVo5BK43TcWVsFNHZxXWs3EoQmGFZRzrnDNupL4C",
  "key38": "Mn3sBdofFAa68ZjEFbx22i55Y3Hy4w956oNJfhhuHenHTjvVBMFaTLnCYPPqFv5wZ9T4tuQ7bQjZ8HEnjsrxMMZ",
  "key39": "3G3xirECHYbL4RTTZcvbMWzxbPwdTz5CbFdzHCktEHdVTXTL3cQJsvrboS2f5AYccJ2GUywPWk4noKf1vtshaAA4",
  "key40": "42ejR9BS2na176nbU3mQcady6179dVBcMMrceVJLmD6kNtLtmdFthJYbdkkdXrFrtwVqrtxSYt3qkGwFey1Y5N6z",
  "key41": "34WU4CbGXXudMSH5wYXK3B9needQiY78dNCnvUxEoou2UxvSecxsHY3j3AwFDFVanNrvVKsJELnRDpdYjgQP3pWY",
  "key42": "3nB4VwVXbUK59h1yWN3hEaAMFmS76XkKZkTjo8wfiqfnD8jRNf7vhtBbXxDzBoMVnYvoM2hrRo1QWFbbEMEWCmZw",
  "key43": "2vBKjWvVFNC2wvxpJ3snCzj5qNiccodBAfAsUa74fHQzr67y2ZWafNGiiYgnTqfBp8BqNAPpH6erSiLW6JfasqHQ",
  "key44": "3wA1qBDP88iE8bja5KSkjgdk9pYCZiZxgerYFGYespC5mqdt134rfAySg3sHRtoEwKRa6mRrKJvRXbM5kdEzKAvv",
  "key45": "5D6jY5L9nMRoJAuF7W4N5BCBd5kfix6eA5cqYLNzJAK6zhX5MG1MNFbk4ygkyqL1EZgSVYkt4B7eUeSdckXB1o68",
  "key46": "SMdXrBBpy9iiML7uX1kiBHHkSyC6TiRo7eWZUgzNtpYuC4DkiM33GoqjokPfcFVD9Gxqo4aHEGNgdcCYiSvgugF",
  "key47": "2y7eQAYoxo5xPy9cNn7DrBQYR28RPp3jPw82kutvNiNQPsKjKg29XKKLmzSW1dGWvMMJKBc4cGt1ET3yZFkAPmqF"
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
