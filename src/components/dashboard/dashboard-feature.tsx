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
    "5yVRaKsPyKZtAAytasKguRu1YZzEyYCt1UPYZ67nrSsDoQ1VaTjRpdUwpnKLPhssHYLDsjQcbVqRjUK1eWGgpJ4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wkM182Ys5dvYy7yhJ5MExXPuVJ9SEVGpKtvLJ28WPqJ7remjrtyuqbgPpXRMsd7fZ1sZ2vLKr4b7tJBUYyx9z3H",
  "key1": "5FojZWPtyEgu5KTVxG8S9czJh6xbvdX7SuqxioZsRf2zwAsWrGAiJKFHSv6SF7EdTspq4zE9C8UbZyAuyaPBEdeC",
  "key2": "2HvJwqHCC1JRHvx9RRgprmwmmuuKw5RcVwxP47rcgn7sfmPaN9iTnnczRWRpYt8siagzhig5b7MesmRATtjbGG9",
  "key3": "3wrZgvbCBgySuY3G77oytHqohgYZuH9fxc1X5vSKhADnqgbZZpo9NYaZhWoBsgZtKuWbzev3LvQeazpPSZ559CVg",
  "key4": "2FP27FVoZ1amz9Pj1opEYNruFdsSTPrvT793uiipP1bYDWpGvtF2vUQS7YceNJobMtu9d5mDWeWDsvb2XaAw7Rcm",
  "key5": "2SpnYLC73nxixKero5BVbGK2ArkTHBkXnsUc11MUMG8uchpdgvZ7sky1P6X93xxvwkPyCLBrvmtneg1hJ4k9pRTU",
  "key6": "2vpvHaTXGedBe3jsqubEXXvTUu5VEzgLJR8r8oWYFYn1PhbLPsMDgdCK9Wa3w68DXVB4WDeS9XFqznqHSfsR2X1R",
  "key7": "5tEMSwk5e2p56xQXcAsGPvqk1ihwWhHtkouh12u4jjZbJPsrErWKiZnAhSQF4zkhjPVp5wzkY8PZCX2zyjTWTZDE",
  "key8": "54DEzAdx4VXnEHEpfcWGhb4tnrY1GwP9GNqsKEUy7Xo1W47zUmc8UNWdqTyRpxB72KcSGGYfgJR9aq6oshykeKjg",
  "key9": "5oF6RFvaxqmahve5dRUwozGJNpAVdEqwfGNNwMNBHKJPxzdsCBToFXnBsCPnbhKpHUvhyiVa3N17o494mY1BCaob",
  "key10": "2AwwVEM2RF4pqTdsdn5FCtTKaxDvnKZ4uTwvcgraVhrK7Apie2no7JBKKyrqHr8FjqEpfF3qDZfg6wypwk6TPYYJ",
  "key11": "czy6HQutW3oMkymoKfKVbw6m41TFx1b6rtETrPjZyaYfCmXJqQ8vfcgb3y2zjHr5HLQqY12HTrKWtXsCHNLH3q7",
  "key12": "63yDMVMNRqez8rE4N6PAattQgmPYaUVUDFSs2JQbMaaCqKCNQB19UtrrgiMD6LhtjY9GpEJY79YxsesdSTRb53JH",
  "key13": "5GbhzG7t4RiJZv4TheZ4nWRJNR8if2FvcKTgCbCorjY6zoXUG4vwc5bgK6zuLMsy1ezvqPP3Z4R1yZ4YiqVa6NMd",
  "key14": "3ojf4K415ifvRXVkyNvReZRTsyaqzgGwFeqfQPcUm2oxwTmoRY4etoxVwUPM4eDSySJXgCafADKEKBdxZ6hKpq8t",
  "key15": "3ErFUo5uDjJYyTLxPTaWYcy5Y9ABUwUdqQpTC4nnwn95D3MsUiPr6LcqGHurwiaKhchLBkyt6xkniwXdkfM1XjtZ",
  "key16": "QsKdEUfqrPccSNDYo5KWjA72V56zMrynQacUG6XtrYCEuukzuw69553CMMWYGNmGz2EZRxKQw8MZm7rRVdeS8kY",
  "key17": "4L74Bu1ZaXrMcZ3eCXZCz2cdfEPCG2GMmdKMvG1EidhDGiDExkzaKQrqayyGgBqQ5uz9CZUUGJvFGg3FuwRWtwLK",
  "key18": "559enhuLg8od3DC8qqNRAqpmTxkwYDoZZXvoZwtvFxUVe47unradiBwW9FSuVDvsvYXbxNvbiGfuFToLXN9LgBQM",
  "key19": "sFkzFXwG3GLdfr6hjLrpPFc2NCZA6PY3xyDEa7oJPh69fkVJQgWhAx97n5ZKPNpLKm3UGWykvJhYVwEK7bw4fSq",
  "key20": "yYumiRGQAoeAPp3CQj7P5EK3u9g4kUxNCAb7W2CjBLsoWkirA5J4UXqanNfSQbJMTrpZSGTkZsn29MafoefoSnk",
  "key21": "44ct5AmPs5YMfbAS1ywiARkjJVT7CVyMVeiSVuNK6ek67LdqzRZE4iSmbyhLwyM4fz4QyYACUdPGrbvFwtoQwDFe",
  "key22": "3QYGA1tepJn3pwbnShwYHrrPPYTDWML9zQfM39m9qShWrmjqmx57uUpJ4K3fWGBeKa95s5trS4WR2XcrJ1fTZ5hW",
  "key23": "4HGkbUx7PWLNhAiqHj49PnYP7A8vzdyy7X943FvvvAAED6h6P5JaMqJxC2Aqfm4D3M4hkp7xH9wXpbfwNNuUY9xE",
  "key24": "pTRjrzFZ3XbQywfpC12Jz444j6Wt2DhDyPwS9FQv9z7yEorfLrgXV1Cbhody1tJF3X1vh4aGU7jhoLyJJfyjjMv",
  "key25": "4TUthi6hgt8k7oy12BEY9YjWNdbXFQtp2QBkicgfjhMzMePd146XHKHJga4sngMWhef342tjP1drVjYiXs1o3dCw",
  "key26": "2BXvePXJp3cKtCfazQsCqxJfHV4DVWqLu9eLymuoXFU61xfAKNaQU7hK57KZtkzgmYr7NeJpZucf6uHP8ibuyLZq",
  "key27": "59sbvMhouzFqH1XisD3xKsw4TeV9k7sXFgRwUmioqL5CTRpNPuNEjiSybYPzZRHvojAjRciGC4L8uqUrzyK8Fyud",
  "key28": "5XVNeeonLTf6XA6cY8bU4xCctiANwXzvvZcXB3ntSTm7WmqLTs84HdsiWu9DN47utdJMMmWDetKZPtcfvTG5MeuC",
  "key29": "2nnN9uVLLAzwyY9hoqNTRg1b97bUNWipDZZnANZo34bpM81EKznfkidcHBb2z3tgiSQQGX1j8no76h1V1ELgYL4X",
  "key30": "oS4haLTBxQDR1aLfNxsqfMyb5KTwSRYyHTES9AFyEcPGKJWgo569kFe7DqE24fZv2MUSoSx84ccxR85wjfPS5ei",
  "key31": "2zCoYs32XsBWJ8hxXXzApoREr5o36rHSBYk3XYfWZzsDA4KoUwfcEispLMJMzuLKMk1miThtbk3KUcScyFMghSqD",
  "key32": "2f4889Tmi4cVzxxLRCau7JenycWNRvcQd7EEh1hnEZWv8aGMTpBRyfUDbYFoK4DEVyULCxHovB7ZZa1iLZjoxD76",
  "key33": "PSZd53XQHu5RMWgG27hdhruBNByWXaUGaW78wQQWwFJVRsE3aekVxDpHywEhN79FrSkQbxHLHGfpP5yKniu3gKZ",
  "key34": "3ak6a1WzXwc443CQT9tqqjyxmGRcVV7aLCWq6Ata4VtS5HNpWpM1Z2EVtjB4YcuRJw2iPN9PpKYDAirRzCjrPnzd",
  "key35": "3zvN37QCREEQZBF2v9DZt3E6dKVTby8NQ8QBGttqnsBw6PVNrCK5ySoFaDkZHuZmQmj9hoQNcgcQChQPqZGkwqmx",
  "key36": "5svbxfnYY9bNqVkeaxvSomkV41LApdP9JG3ZsDX7k4CxifDJrBtcWsqYA2SDUULq8STTgpyzgMv8NART5uM3cMX3",
  "key37": "4jwWMuzyKgjvXp9GvwG54VQQRE57PGUNEoxdoTXwkRwhJLVKCD5rNpQ4kkzAQbSF2i49LWULbG72kpe3U9TkjLMP",
  "key38": "gbM6dEzmEAugka2vxtdzRTX6PaQrSqFC2YxeNmo75JsKo7shexA7LkLxUnBJY6jioVhZRRx97iLKoNcqpxJdVu7",
  "key39": "48ALLibVwkTxkaD5cy9D7KZEHppAL4UCds87dbgXnDLtpT4V7ZPFu6ko6L1Br4EjJnJMorVdUVVSuFF4Ja1u4ZTS",
  "key40": "3GuBqHSfpaJue8K1LTMFozHFyXWZymmZBEEmTmWbPpW2tv9Lj75LQ9XHr15UgrpSxVH46gBccXrorCcUqJudptWn"
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
