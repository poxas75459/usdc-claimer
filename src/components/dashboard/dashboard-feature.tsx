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
    "5JV81T1KrvR54XS8bDDtKKK8QkQEkbVLPXM5gsd7EJRfw2XZNWDKe6sygQcC9StWAyJp5xSuTvsksFid15AfLM1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j1YahHfoZbdYrd8zJ8S75M1YFY8GzAmTo5uNTr6guiZFJoSKCPpDpjGQX74UYL4MGWoPDa55kr18643wi6wzeWg",
  "key1": "MfeXd9dJ7hHnYjAqZ5G6iczcAAV3tfXugueNaoJCSjBcfRJfj5J7X8qpfxeuuCNtESgpECqYUg834DUi97rE52M",
  "key2": "463XYnPWQfNrdmvNSiHsEKgvqrZUGBjzKqq4SntBVcvA5wtx7w6oiE2ogjTFuyhaDiESuphUbrZuB3sCQ9QdfzLw",
  "key3": "2dGLewpjjGGfjS6eyXcnu3ZQvkB9fHuiAWDNnV2NEm9QGXgr33MM8Fagcc7mJPAa5WMNfsqxckJTbiMag2zLsa1v",
  "key4": "67pEzrPSDpYejS2N5ReJsc2VtZnoKgBTCEAiJfq2f6dYasJbnGmKBhRL1Go191dkj4YJaKFuxhVnkug6xXMejBZe",
  "key5": "5tZofA6FrCAjJw8x5swyNQgKe4GDTQWMKQF7ZsdbpqqjUmW1su6cq2TrNJKY1fAr8FKk5cWZwS56MvEJMW79DWoT",
  "key6": "vU9y9TKbXNWo4tDrDoFLmMjGEkphQm43UkeLtHY8k6BCsgsBGSQpmELG7RTr3mfzQKwCZwgyTSc1ytMTmU5HnGj",
  "key7": "5ZKbSssaaGkwKNoij8unDzDhr2TxKe4JHj4ypu94f8TT5XpafCDyQjrxa1SdXCEfbmFUMVmhsSQQ6mobRJXKQYUW",
  "key8": "4nZ6odwp54F3LgnMkVS1dYCFmfzhYbf6o6LfYPRTPmzRg5fXEAP5yPBjuRf5mw3BmcqZqv8u67SdmzfTHeTwGKks",
  "key9": "27G32VV4GfDL4a9pfhFjnFa18fXjtKCcqfyQdnqHih1YPa45NyKMMr6ETD7kZmHiX6wv8f9wSn5Jy8jZRejBL2rg",
  "key10": "46yz6ZjMxeyBHwuYLEYSMi1ioNHGtFZexEtCxYomnd69WMELtKVShm29ijrWEXXmoxJnhX6cJ2xae9mw1b6mBzrQ",
  "key11": "5tL6Ngr7KDYwmjjeaYmhwzjLbqsQDV7f8hC7GbHPUkSAqWUhKuqa8yti7cdoxXUS1uGEjSNFrxwCyUHoyLEXvnAB",
  "key12": "387ZWsWHoZEpyAbmTsR5k1mRvwXRNLdwG3uWzVAULj2ncejeLZxp5szRmNR7T9UNztMvYhukx8rDBS8ZbjySuDXw",
  "key13": "sBGtnHQRAMuNJt1hRPdUs8AAjo8L1U3jXgKA7xZs3sT4K43xss3oWGDPCFWzozqikPH2Ypi33xrTChLqgQC8dRu",
  "key14": "2WhQArVbcGMHTS29oxfqJqMy3johaaASzRb4xp7ig6LGuGsTXGAx9ectV9ChrNzViWE1bGE5T6hhfr5VcoMJFjZ9",
  "key15": "5GPEdRBozRBse63AozwDZVFLGkcLbqB7y5p78Fob9xQADnP1eE72yLLriJucD7nS5WXgv7Kuqh4ZCrofX5VndMp8",
  "key16": "2ukHUA6SrejLX8tmWQBKgknFB69Lpvu97vEu3p5hrAKvnexpn6sYwHtaji3pVMesLgSQXQSef39byVDMmFTdSZzT",
  "key17": "3ZpySQSw9UriWAVSggvK5guzYJZCCYsxWKZ3KsP6CCeTiuXkHorbFpkqdMYTJX4TkTYTE5pvfRpM4MJNwKNhp8yJ",
  "key18": "XTc9nNqVfBrCPG1m33MjauKy4GWam22Ni1WEaB6Seu5HnCpdN1mvrjxC8zfbfpzXbbWxRW6M8u16TMS32MpV4y3",
  "key19": "5LiL62icZ7nHAC6W2LNn6sUEAMaYnFSG46GLWmk3TaFr35LL9m8J44kUC7ucDrtG85x5BEY4U5XeJPNPSz972jcm",
  "key20": "4PdwzG25WkoAoMLyuNkTb3dy8KPB7dRwHjquBk33funUHKsQ1M7STNoPxZG8Ci4fMJYGvbfWekRQf24yGHewFnyP",
  "key21": "4TEaAXR2QvJ9Vhg6qnxSFhSC9mDMiJU9BSHnQreRHpVmHJamJMVedrzfSA5HEZwZdXxoB49yPb1W8L6RNqsoWvmc",
  "key22": "4q8RyKTM4J366MuCG2HbSnkSKBPNRy1VFvt9wHzigXhHzgFQkWAFmNZhXaqXe7MhiyWXAabL7bysidaRFbRThLkx",
  "key23": "23FaKBbsQPhSjJLuh2PyLaL9G16t6QtLSYyHuc4xn5PNp17reJ2KwnTtBhZBKyuso5yTjEyaXU4nR4wiRgqTYRDi",
  "key24": "3aTJp2H4Xb35TErxu5P3miCpi7P9MhuZCiaYYgif5ZzT6HGnw3djuXN6QJxKsq78KYZAJQqboTSkBpBvKmyz4LvP",
  "key25": "62hxzH3N4rsSgKHo6LHgetmhU7yEiUFKL8zxZXgqyZJBPXFQHWxKLFpn5VH5xZFYLnKdAUBFjRg3NqTqk9kQRiUj",
  "key26": "2CTPU5TYWKdVEh8VajgbYMKfRBbFpTAQZQGwvM2wqLCrMtdeRyVsPm6tLSeRWJhHStCMNTvgkec762QqqPNkgX2b"
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
