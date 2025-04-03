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
    "3JwFmXqGMZ18kr8ZWJcZAVo6PfJDgv2Tq15GhAVREyiqfvEKiRxxErSh2EbYxgcZZYSxxbmkR8YpJdDa77UmUvk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cRxk6n2AyhqQMfC9tN2fi4knMRKkegEiyFm79u43ufB52UcshL2qn8goKKWz4TegXtLVTMyHih979rh1pbgoi7p",
  "key1": "22NvJwgXoasRLArA68BCXU4adcq8t8T44VN46TWkGy58ess2pYEfurW8wxGm8cPDQPMDSpoT8QsxEu81DdNecRzw",
  "key2": "4gDcaNaYYsefUrviuMWoSw3yqbJaGkCJXFEXz1u91xWrcmYYZDweAhDCEc56zG1cjy7Xd6MZ7DDL7XQDykbQVaaW",
  "key3": "2ZgE7PghPV1ym1JXci8QoBqPk8DchvggkSEqAZXQinVwGqeS4zJudkAFU2yHZ9PyahcXR71zfmcruLTmeDA6KHUA",
  "key4": "gT3km1j6Zog3He9AQVXo6KvuVYFGrFs9EHx9jhpqvGAn27YumkJjRPv7g2eG8rpBdDEw7Z9WEiQCrPGDSZU2gjd",
  "key5": "4pzPQEu4Si7B8qfvyzBEp6nhtuxZSZ4A2fd7Cn5uFGWHWHegx8FKNgM697LtmcwJspnRu8MEYePH3BnZsKYcpuwX",
  "key6": "2MzdbqkirdGCdXDRPL6HSvoDbrLAi71AnBMp9xZGtbo1nfq5LcgVucnrLCQYdw2MePbquWKUneSgkNhR3hvAhLEa",
  "key7": "32k5XDPh6ZeAqevf59Pv5uaVjJ5cu8taHfocBqYak7EVWrHtjorM1834ZjmfHQ63vkc9WZuY7TJocBGTwzZYSPDe",
  "key8": "1japQvdq39SqoWfmva9jWg9Koa18fakiK7NEzmcr1KBVpMf5HzGjM8jAPNGZnemg9fw56S5difRUwkHvestJGYy",
  "key9": "22gRc2JwTh5Y25KdZM1ijNRPxfKkPvbTDy7TkGWUzW3GZ4W9QWFvKTWmaJvSBetajD5CerDsoQepuYwKeywN4nbk",
  "key10": "2cgXEddLJhfGZ75WTQcvUu63ULbTN4iwAty6axWjj1KQioSAi1wXTwe512CMppAgNZywBDNVQGJVFWyKcsx8EspU",
  "key11": "2DQdFceFeMiUytVbBG3zxTbJT4avrRrP4NmHMwTVsDGqvx9iVWTW9q7HfLPD2f1vvFAfaz36JRrZoxgCdSmj92h4",
  "key12": "5G7sEMXUsHoN7Wsy51Po4qb7DPYdxhaCxU5foSmgvebCY2qNwjRcpwMg68QtiCCHz1iUJtjjyfnQqby8NzbUWKq8",
  "key13": "3V2G2NWD9KNgkSC2mJWYp8WQ7D8NqQTyg4JF8cnsWY7ZPFCgrDZz9SXq8qeGJ7YD24NsApJQfMCNeTeTdqxaRJXk",
  "key14": "2f1PiNhw7JvV6HSFm61cTxycW3wa6Vqnb46LVyS7T82nWDiaHjp3cBtLWYryJx8dPaXDpUcxrmr8x3erN7vPARt5",
  "key15": "5ys6u81oCLJah1sQvKQmuAQPuzpJGRF36iTD1qLebAaBcqdJHPCBh6RcmMfL9iC2gXGTTUJeCKN94yDd5tnEeVVm",
  "key16": "PFrkaBYFXEM8bXKgvCGifWUvp2WtZmKGMd5d1BpuinRd1cjXKfmrhUCe2caDzvpjFiv2BfLThJ1aizA4LQGawRL",
  "key17": "4Jo54aRnFzdXVoh7UgCRixV2524L8G14ZjG6gYrKcH5cuUuFvshTDhgW8pPVRe4UpzukSCwb1DT9B7iC5CvCvMVe",
  "key18": "3JXX3kEiF2JtMZ5GiXdpopEYnjp4fLfuJZcpt7jUSHF4HJ2H5oN2HoKmFvp8hhfmfk54VXdpJSUo4C2chynEP1VN",
  "key19": "4EGT4qvg9JiwAp8ZRb3x8voXd1nHY5MEVaLrseUenmTxXAhZHGgKjt6QuBQQEUzCCTF5krcPGrwjmJftaY8oxSNU",
  "key20": "TeFLL95VaGhi6XqYYm9nbRL4SR6F2up1n28xVFjMGRXB3Cn9TsUyFCNyapKFzyMbAWSoMBUutnF3ZE8py4cP9Dw",
  "key21": "tqCb6zGipYxZCP8Apg3Y3Qx8QXx3S3SSSVXUutmgsQDTy579EMrr2qpcJxKMsysMcLkKZAGSUQcQF3K6ahMvLVZ",
  "key22": "2he9caBb2HNSsGwif5Jk8Tci3fsLkH92mfYarU8uqQuT41BKe4RaXXYdzJ18UqpgaUEQ7tEP1VxVvvemRCCUn7Hw",
  "key23": "x388dwJj9RNEdFodSGVL9vwjD9Z1a5BErKnzoCPbppVNUmbHdP3NXbr233U3Lpkb4K3zT7NZv9tpUqeRRDQsj7z",
  "key24": "3jqeqJbbxv8TfSL3gtsh7Co9gzd8zBDiN3LVUNmVQFq2sLqQ5nY1bCJrBUPYZZcyxVbmHM8EExh4q1KQTPMZc8n",
  "key25": "3ZA8x82TpDzR9C7RoTXBB79tK46h3FCWxsEcuVRWLcjswXdDHTraqpghxSwzSmMB46rE2apFVfFK8co5G22Nb3Pn",
  "key26": "EphBKGJhNA91Heap7TZ88fbFkQjJgjBmh5XYJCaYmHye1jtMntQAt7X6VP9DecsMYqLSLSTQfDgy1tL2zFZCi4Z",
  "key27": "3wgsjCqyLUktSGckXwehDTmLyQMT8XUKqrbccz1yAwdJa7MsRqbNeUUjkB5CX6jGNTPk8rdkoz9iPgfEV22jABwK",
  "key28": "4mZdq7g8QTGrguNswwMGBj9A3nswsF3c2ucTKpDo7QH3DRzZnis3tX3xJQVCS7orTgBSvGXt13HBePDwyhbPdnAK",
  "key29": "2XpCAnizGBJPGxxpE1HyDCGsp8yn8Yv9xd5E8w824cZ7U7csWWwdNz4H48VCjoJYjpzNnHnBjwmGgNHpDScpQPez",
  "key30": "3vprLgE6hspmBXEFUw1dXafF2T77eorhq1o2kZWPafMDAe5H1t9HgRg8r6peXqtEjSRBPUKkCJSMz9R6CvsMPHnx",
  "key31": "2KYxcN6zSwAcWckmbzgNtHYcGsfJgmLNH4RQGhLbG43syoDqLuSaxNUuJgp5q14VV3RinBfAHo9GE3Mhyfx1NwEY",
  "key32": "2gM3VVr2JsrN1byrheoc8aFfK4g1rpcY2P9qE2SexqJfqsFLT3Et3pcwz5z6ueY5NMkKXoajXgkb46dLheD69rfo",
  "key33": "XnHV441g7eFz1r6onBv9TW7foBgnxnfxM1VbtH8tDAwSqXQs9mi5K47HVkpTaiUKyvBtX1Xtp1qYrEjwyZVX4yX",
  "key34": "4GLhc5cis1vi3ASzRAxg2gLappPSpVWe4ThTM5Yo5jB28ScQoU2apUE59qgwCViUSD1jz81ixV779Xxi1DQSsZ6S",
  "key35": "wYqak1YbMGHiufcAi7ECZNMUSWeWEQn8LGjWYgp8W7qHs7FzXMME2oGdZowZQp8xJRoytbpR3byHJv52gxbZrcz",
  "key36": "5kGczkvWXsAwuD9NDeUe9STrNuukBwfpRCcBYkmRLi8WWwCo7VuqgkYpLVbFsKJQTDwVA3qu3nsjNw5iYzrnpCpu",
  "key37": "5nCCyFMnPq7K5gL3h6JqBAixHSSJ2RgQp4TXctaQKNk5qfW6QqVAZDhqYohSGfMSwYYdnhTB4Sp3RZi9PT7DybU4",
  "key38": "5VL3Vyp8vZqYGRoM95CDeDrWMnM7kR96n3KpQcYLWJmQVoueE6Eb7AwrNe94eYvQ5DyErpgWp6YfxenSqSRAmjGR",
  "key39": "3JNaVhYie8pFHoeFX283qYRhaYnS7J9DKBD81LwSJRym9UvVcMEa1uub9ZQ7XrLvwxSUqoGF6eNc5qzjFzTDzH2E",
  "key40": "7PtZvxdfDRVZkZi3LX1d52uGcqF2LVgFiXEE1xDrFcmp8HGwwj6krqC4zN5nkDQGcqWP87ZHSKEVf7khuMmaShH"
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
