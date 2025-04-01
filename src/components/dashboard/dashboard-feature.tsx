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
    "31VRKEWQXjQ84TZANczMWSTxryBJaRfHfgECoSRLrdNSvvXB2J4i3vMT6z7iuhMZp4KoWZtXtZdVJSbwA5a8xXX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zj8MvRWQ54BMa7UyNbKSrUAzNAYPmLMsh8kQXbiXoxNug92qfETV1Jek53Vgdyka8FiDeCHiq5uhCsX1SucfESZ",
  "key1": "5rSeYnQZj5JrnW1o1tWBWfHd1zvArD6wxd132q2y3JwNtAj1fuXoyFNeVzEsaGh4BzaYyUcjgbSxJTyjpRac3mx",
  "key2": "3WQtT44tjVQsmtd6f3BgxYXcttMUz4GmG6bKib5XQQzbwkxN6RdMeGfKmiYitwdjM4ekpkKKy2rE1BCAQoGXtLK2",
  "key3": "2bB9kJrQrSREcHC4gWvHoxHtXYUoPFV7KRqXRNES2XfaFst8cCxbiypN8EAVujcaunqvGzFXvuB5jhEbeTxxkacR",
  "key4": "5Mzyo5a1kUQa7LbCm9HTpbcwGqSssmXHntJU7Ggdx9ZpnmZoDpRZWzTzQQfGhMXT3ukjiWmqhMbobWWhhyXsCp5n",
  "key5": "3E7pbxHfFxWMq1TJGGcaqLvKQWLskhrkU611QabMZr4numWUPfMiuqsq3VAC2HmUmqii6WpxpKpkjRScsuyWtxfM",
  "key6": "3r9HBx1oQ9QKgPwNniBFfTe7mBPQscsZDWJpkBvBwQtJ3u46LK3y6f9vr8QYPJZ1AbCvVfoCcUAeErDeLLHuigWE",
  "key7": "5TKsbJQCK4P9iJ1Pv1xYot47LSU4Csst4afh9d4U88rhUMgcifaxK6F8wrMu9WJrfDW8RNUcjYToz5KtkNHuVa4F",
  "key8": "5cUTkD86K7obDEzL6BjLC5iR31Wnss7mzUHWE29r57N3zBF6FBtz33vn4toFqvMpLi6zbRzTzU34Jf4FjxART5GW",
  "key9": "yzZ8cJGZdwRqB9bY8fmrLYcQAV9Mgkt9YRk8zpn7w45pixkVrXSNvimrXynWZj2Fiv8CyNAe5kwAuATxa9CQSJ4",
  "key10": "3E7SE7HWP6nxKbErnPMgfMdjeMqZBNYPaWDcqkkrW3P1KJSrVCQCrXNM5hpvvJMzr7uvzHmSXk4JEpWetKKLyfWf",
  "key11": "tdu41nGv1e7csH8YU3AGAk8veW5Foprq9DzqxFSHySjU3DkXZEUnS3LP1jEpjU3EhXEUX9vF9rL3PxTT4NvRa16",
  "key12": "3m6LPaN6KokR3rJKHhc6TdPxHZKEELytSm8faH6uHw7amtFNHpsGhjias4V995yPttMucPwbNmhMZnEwHT56g9xs",
  "key13": "2PWXtvi66jCsMKpQPW1MfkrFTaCYxC7v8b4QqP52KChxcieiHMmuG4jY9b7AvC7RvMRWMjjURmK5kHu1hefBE9bZ",
  "key14": "2r1fGS65MoMRhcGRVBTVDy3AenuqWkr6RbAXnXJ42N9c2mgdtotkWL5UZvBkjZWj9b6Q7oFUihxXcHCvnVojmYyA",
  "key15": "46xXw62gTzFyzPWmJHCbXGGBKY1nHJff8BJBaExDmCTMvwxce2XqyvK9Gt5LSmFP6cEXwm3nDAWALG6eEAt18ifY",
  "key16": "hy686p3Ht2QT3h7y9j9qY3gPYG3U51spJUfKGg7eu6SkoaRPdNN4W3Z5CZR27xg2TuZp66FubXdcJHoLAt9oPKa",
  "key17": "3vUXNBPCjCVikHcn86yeEB7vEsuh1Q5EZ2vGiPUzdtuoNxpUJPtxW1kUfxN5w368xKfbwKwfx9W999uCi84GD6iE",
  "key18": "4qqkQwNiTMwqK6biTiHdAiL2NXARy8MUcpALa6Vp5ntY38w8WXRNLmXwkgsnwx4LxaPvdgTHxMYkvbAmmrftpuFB",
  "key19": "5kfBthsu5wTvZ4pPK8T7qgUAvivJtSJRSRH645fhETf9gtSBNPCE6mberxCXstH6HnD4P13da7weW1kDiY4RbjK5",
  "key20": "2AfvnLtm1du6CaQEXP6u4PkzQbEYBYMBN5ojGzuaDBjGKFUtcHHEJifdFaLAiXkDaandbhyRVCkwx8cjfDNNfASW",
  "key21": "V3eDSnHFgjh4nn4R7ReaSQDoNCkpw7VwyktiijLMRPcTbMQ5aG2KfUZc5gxDSYaNbMoYbZtxZFF6PZvw9BCw3xq",
  "key22": "2Kvar5HmpxUMiAjQGTVCUyS5HEmzzwEPt6SbWym1X2jeUjQeiLBpLBXzE5QLoG4doq7C6hYA4LRkQijn2TQ7LSiz",
  "key23": "4LCQJpS66YYnfREZBbkBVc3Da1t3p4uYb1jAaUnpCq7Uwm3hGjRrJFjWR8h5qEUhJR6kXSgjabZKkGXX9CT7Uoxb",
  "key24": "xhnQbajQtZ4Ahz4x9ekGoaJuX1xyeHxqkEfMsTzxyMZ43YzcUyFuTcNAsf2EEbSFhyfAXz4gUXDiK3R2yYFrLmk",
  "key25": "5ww7y5GnurAAtkvhw8BevR3GwY2sMukVaBYPPKTZ8tj4XmrTSYW5VPDpEDiCJqu2anbvtyPJQ37L4gUamhopXWZ9",
  "key26": "63xq9aGe9s7tKhT5hCgDfgkrrJVk6dfks6ojz1cH867jmvMJ9QAXpCfjEpGBoGFEh35TcAYNr3DAp8y7eEAokhGy",
  "key27": "dp2VMqYpUFK7k56VHSrAHpD3WEH2sQecU8SLbmZVNs6BmVTEMz2NFSWyiJxYaUd9snn7xQ3f1XF77P9AnkhYQsQ",
  "key28": "2rr4eGJH5ffy6zkTh8GF3DQvpS7FV4HLqRpLaSzeyXzAbwfRDzC7qeADMoaW565KnNLCT5wSVo15jD2deAMYn6Ak",
  "key29": "3LYowFpnHRDYPw8P8XjSYUv11qYEBAkxjfXqZRFLueHqcBqgyEgze25VbFfaPAGZABwZa2v3qxcB8cNimiL1B3zR",
  "key30": "24CPgQ299eLuNaF2Z3nsmgCWWZMEufT5szQg5ovWuJVaWiukqwB85AJ8rB3ehPoLtNpFD9Vn9MkFakZXBMJqyyq4",
  "key31": "29esG8PxgUoXxW4JSB4wd3qKzcMo6sWxTJwYAqzDyS6naFMqaaYAXepuiiJUGisyaTByJmDRXzuXPPTQZvMLEVfM",
  "key32": "2DuNKVDLTmuMZV7nFQL3kqe9xKpBNmAT63768bagdrTCXqmThe8CsHiWbUWsB4srag68iFhLcUv4bwiCuAxoZ8cK",
  "key33": "3fCP6SaqNtyu7VLWAdL78jP9z3bF8P9Mnz8mZRfQcZCLnsf7EBaYcV2roYxUBaWDUsMsWtdRaNZuCCR5HsBAdusW",
  "key34": "3ZLYqj7yW9nZAeCY1M6EBnT8bzZ1MRoKx4TGhPXScsBs7ErztF2FrmLNjP68rPZ3K5aRQsLKunTAxNAs5sU8y2Pw",
  "key35": "5TuKx45q95f8EVf2zUHsjadqPoX5qfGD4ZuPY8gKF6iavuc5Qo1z1VbEnAE2JAxphRuLz4fPPke1pW7S5a1qkKK",
  "key36": "4e21kmZxLnzAWahWXnHx3UgFzkoFQkABY5tQEohV4zqSkrygxy3XWHwtVP3KtfVToDBJ5F7pad116gWsGerzv9DP",
  "key37": "4MxekPYtTvowdY59eL8pmpJm9bykyr3fXfabP5VZNXkN58iawu9T6ks4NF9fTuvuwy2s9zfMW1VDPuSxfaWoqwh5",
  "key38": "2L5mb1bFZB64o8scF4DK58zZQ47yuAU6JyLFmjuWmMKkM2E6o1ZoVy7f6fFbUxU1ZN1h9B3yYiTJ6ce6u2BE873Z",
  "key39": "2XB2Dfe17sSBKp9Lo3ZKo9Hrn6oRP3kLHZ6tUUA8EFZMTXNfDF1cYtEenc1uFwuqYH1koDTKnhaMo2eB35ePynLQ",
  "key40": "2b7e9Bi8EGhtuA1XQVvkmbewT7aJNE2LtbxiM96PkNGJkvZQuj3qPNsDztAvz5qHnxh3c7fUHfGxVdd9b8NnpDAY",
  "key41": "4rAo5tU1hGvxYAKNCoiVS7KkbBbESaZEE1aJ5Y96wsBnDF6CjfZcj1WKDjweBv9iWjHjEV7REVWzoS8gDpPyhAa2"
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
