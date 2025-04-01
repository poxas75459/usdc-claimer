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
    "661MttbisYyt6HSvBQHqNVVB84JUAb2cPEMHE2S7xT1Yp2rnpddnWVXWkdD4oEGaJVZDMUcWuWCYS4JGtY7mSSPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vNG1ykqnuPKNFSmdUqjeP4QuhxdmDJcRzLAfDbzDwSWJGiE8FmKKhz1uBENpjtLHdCG3vWdmaQMN5YtbW3qSkMb",
  "key1": "3cDnKfnwFs9jj3NXhZAkPHzJWnBjJY7nKN25NGnUghtevUEKtm41SsoyttLTLgk7XbyQ82Fuahn6RgVC1iiY8Gjq",
  "key2": "2s2H1CR7r4h8Sp9AcDzQVo5sM3XLnGroa4AktSGjbKgaeFv6ci1KRqE7kqvHhkfr5r6F8eEStLsKAnVxRu1xVqKg",
  "key3": "37guee5F5G5HnGG2LPAVVvKWZLFFTGwunqEbk3FmL1eXaYs6A6NiQRctusz7zSTa62mqqW4UV3UQ7NDdkzJQV5qm",
  "key4": "4SeePqJcdkybzQpsU6Db5yfMohUhRwTDnuLpT4DBVsDFrfuzR9ytYM5vrxGyneCqNo4UmCWrMf342sMLmM6SJ9U",
  "key5": "5V16HRFqqwwUtNSHSmcUfdpi8o5Z2KUR6FZ5AwK5PMiw5YCCN6cAZ7pX4Mjsk9TUzCEh8Szgca6Fb6gJU2wUJrYz",
  "key6": "4R1TFAxA6er9Cy6Cr9Ua8Yqp9XsvD29BeCNJ4vFoo3iF4JEakFVhXyPC3jfqMEGZbTVbA5oGL9vZXYU6nS2nZc5F",
  "key7": "4NCcurc3J6DkdVvcsNgHgAyZREXMJof8E4neHS4yh2YUymKPogewE5eDRef2Nx6a2r8sCjYvMCVqcw8V5sm9NquT",
  "key8": "4HtxboS5LR5SATxe6s4vQw3Yyegp3BxhLrxKewU3SBpLPe7FXYpd88Mnn7TtN4Tu9YizoYTCVBcZFk9JCPTt4NUi",
  "key9": "3i94AfeYgQg7B1z78grVPixBdrBNc77tpP9j8JkLkkcmZAR9ZMg7QF12RX2fSkg1Le4YLTTADNWJdMDxBNQi5YjZ",
  "key10": "4A1q19DgPoPN7wJAN7NFfkp2FH1eKTWD6XYyWannsxr9cYQcvFhKeVbnxTumSmzxi6mYuEjKKFgXNHPku84C4hmw",
  "key11": "4nfAHrP5nzuHwVP1g22A4vUTZ5qDEBoLBaGhmXtg5YzShfQq9QySkPaKVozz4dHXQbNd1MJTFoHohGGhpusj42FW",
  "key12": "3vQJ311QJKgBtJzXMfABZXjnirsb8noR2B6CmkQrX2Ndy1xosdjQ8Zk4CJY6xPTGCCypXKhT914xoFaTgCnTV5Tu",
  "key13": "gYgP4Nt43X4YuyscGiZtHPzeWiSDYhCPYU2rPcREKEXj91QFMKgGAsa8KMCb8gurh6QZAcRYPhfGRyGKWU98DFf",
  "key14": "LXjUiufYTEimt15t3sMZFMtb9Tzh3RBGtFTeFb1oTYgT3kVe9GsXgXqs2VEkzF9XEVR2vygmqB9hVo96cik4Bp6",
  "key15": "5EMQQ1VLnWJuEfVDrhR9JYPo47HT8iTZYqo89gjJv9PcCw5esxpMp1JZiWAE9kpWiFe6scE7EZqoEsvSxuPvzEzD",
  "key16": "2DQzFXQYXos377Fd7HVakoB6ab252PiXswfaXMxcJRiD9jU2gdrpNnk9cUn44sdGi69ovveXqsxxzFsPZvuTcM85",
  "key17": "4E6QBknMLcihrkEugFEZcoHM6zsRpSs75WyYn43YaAA7Q6x8rKtx7JLHFxvrCVVEQP1tJFoxzkqQvpXb92cASzTZ",
  "key18": "3zMiDCiQ7MGNH4YJ3u5jHhHiDmCM1YoBga42UJidffWkzxpHPpTnjG4f1GntoYQ7F7sFu6NefwoaKxkzxmoQRzvS",
  "key19": "5n5RDshHQH8XJtKzVuZaA5c7trqxqFxfncYFvznt41WcN6SHEvxRjDbdbCT82AoBBsSM6yZLZ2VJhcM1tyxUHYav",
  "key20": "1zYC2imhWg4etDmkPFQxxi6TA7Z8ZqRyejraMru5oYg6iku3APNHhjS8vf4VcytQENJ5YYqJThBeFVuof2P3vzf",
  "key21": "4LobTyCdr8gbqvYCpBLN3wtqsQ217xyJ2iYUDNqSy4CUczFqs3mPwbAGU4Csk2PSu1KR9tSY26XFmS9m2xK189yJ",
  "key22": "5mcufwo8shWhTmvwjGmS9Uq8NhdPz5PgNX6osH8XP6bJeHyy48wcuxQ2fdsYjrcD95F5xmTeddnRtCwJnDvZZMqs",
  "key23": "3Gzfo5NrjDQxHZgLyG13xSFxM5E4KqxtZtb7ybitoSnKGh2rNb6QzUx42Zyj1yPNdfnQ1cvfBSvrVbLjzdnbEjfh",
  "key24": "2QLqFGvuEjtt9G656k1eHX77ABqGPTEqtzxz9evoni5fyteUvtBezXe4P1DVTXFURVG9wNh8YEgY3i8pdvq9ojBz",
  "key25": "2Sfgpd9e4h8dDEF2XQXp8CwfXxzDkM22xFaSc8nLpAXNsXq6pWMjAg9mzMEADKtp3ZM5G3jvR2irWAY9AgUK531W",
  "key26": "4GG4aSV67YUQZEogfaDShmrKpcAeD4ShWNHJGfXzPuGcVhZ3QTG2WQRmZPVScnchNQ53Mjie1QPxxGTVCzhyKuHh",
  "key27": "3iVhYP78pLNyjzyaAHHgHHKduebrny6HRaayk59Hbt7MNJhSqWWATKmAPDpeBskdKpAq6zTP6JC9k3jovToyNZcd",
  "key28": "4RKyRTi76NFSag6WMcM5mo2MC2KgY1bu27pmqCnzbYupqXpW4ryobDtmQeUno7JZi55RvGGgch62T15Ykba4jkxV",
  "key29": "3GLMR4n8dQeKtt6yvMvzGvqmTBqZaJPgz4vnMh73DD7xc18TycLjWPmKGPve8ectwNvCkyprT2EvDf2Aucj6Y3Yg",
  "key30": "2KWk6yay46FjY2tmr3opJ7e9t1DQ54Emhp7BJf7fhr3rEWZ9GFEFTtVgVPzSciaRvWG9veQLBwd5MGRnvFzwxPeR",
  "key31": "2XcSQLXQc7X2GstXG4VyrYnEMHvhYMii9TLuSBfvCqvk9qRAsWZt4LtWHUzGjNe86774E5pHovVtv8tipkm1W4WM",
  "key32": "3XVo7tnH3YAd6jDzRevJZkR5SuLSEob1tUinp3JQx3sL5f7vQDMq25XjViBGod1i4X1kFuJQ7oEpfmSNw7VhBLi4",
  "key33": "2D7YTdeKcU8uxjr5eN2bF1TFG7UfRqR5RgJmQYXjPtW5HWSsoHQ7PnGyH93sVm3BYLNqcv43AsVYP9DkchTijC9T",
  "key34": "2sLtc2dEYoCwjaujF3Fbq8FomZZntpb8YyYN2udPDMq2aVxFxFK1vsjrgjPW36Rjhk3w3bas4rAUFDwsEciNun4r",
  "key35": "4ni2RQSDytPLr2tHQvZhdN8Uorcq29f9VTWunQcvdTNMu1KU4wEtxLr9nNWX8yBYbSJoS7hXwhrT9govRFEnoSzk",
  "key36": "4pE1Rob2me5s1UgVkeBxegZHdiCUY2jjvqdfyQru7EFibjptpSz5BTZEbt8xBnHcr7tbFmx6rucmEMW6qSEKVp5q",
  "key37": "496Qt3hLSBWWwZDTzRtv7QQZc2RqwoRbiyyPG7bCjA3BXwVdb1659A3PPdNi5tGJFm7U9zetWSht2RAQkkqXe4vF",
  "key38": "5P9Rqz8WA4YS83Q2pChZJ5p8aNzgVGKmAowjkciacK67htTDieZBaogWVoMdCYePqSnyFW4FMbmsDD2Q5KdXYLtw",
  "key39": "43Agv2NHrU1pfecPQne2FwsyfhSQ8TioFnM2qun58cppqHjEMNvh8XfYNzEnkdCNW1LK193R2aj1DnfE1mui5ArR",
  "key40": "FzZ4S17M89aUSwD25vQJofWxfKD9yAfGvpWuFXRkm6zGzDn474fpZjCo6TBFXejbbvaXM5Gqt7Pd5U2ZbeVQ7tj",
  "key41": "5JqXn3GbzhdVJF1C1GmZPABcrF9H5XneyH2aQvqPsDyrbhEaoNJXvqpaME9EkDcESSsxNdSMykxrB87X3d2DDWDU",
  "key42": "27n2ZzWZE3Cv99GSHsf5iSZgdZ99CsJhQtp5j3V93QPPYJD3XJHgYhhVYLCspEStNDAn36eKF9twCxAEttc7HnFW",
  "key43": "eytRb1R2ccNd1G1ZLn93SHdwiSQNDF7ELxixagboWRbT18gpJHn4F9fxc6aXSxN3wXjY63W1eNfmWHjxwXD3r8D",
  "key44": "4gLhE9SC1DAaX1CJDWT26qKiEwEcorWGgQi9N2uDUNjNME8jg8nxtGfwUVF8ggaFuDVk62pBkcfgeNVeB5kEe7iK",
  "key45": "rXuqLaLSrbPm4MYPLRToVr7yvu4uBksrdUajMbjqv7nj4jHPcMyiCjAf5WiD3Zxn3xJ9XJbfn5pq9CHvF735kj2",
  "key46": "5sa7kptfk7xJqzctL7J9eDyLgKHEZYojQvn4QMf62QEtDoRAELBLdYLdXw8hDChQwzfmsUhtFLv8DxRF8NTXMuGC",
  "key47": "537gRmjSGfvZtUyFWUVv8UENWZBqV4tGGFxB9exZEJwGWnRKdAYoYpAySRpRcJL9gvG5pgJMBJohkzWDdrQEBXiN",
  "key48": "5QxRmXjqnxAVGGaTVzhFtciLfWSPssZ8kid3wxxvAZVh8wkqzGuKqjNu1iuAVxqLd4vRdqUeE5nHsq5tujKGL2nf",
  "key49": "24hJ7zQwRZpBdvSspHS1H5oeVV1MFJCpvUqaGbu4TuggvkDUavceYwTqU8kG1c2Fdn9KihsLWY1CW2C8iEuon8B7"
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
