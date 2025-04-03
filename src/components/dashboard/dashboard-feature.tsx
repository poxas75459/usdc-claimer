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
    "RAxei2i2anPCR31DDQsYaauAeDkfEVqqdn2SapCHe7qhR7hknjG12DmajNDtaoGz9PxC9JgBiuX9EkvMNgLjBBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HfpPY69ZtxKf72UyLf9EpK3ApW3ihg7ByWHk4FCNK2SyuneKrPHS2LfnWUiP5iZ9JdfzSerhAtzgDmxmtZMQpwu",
  "key1": "4q7QqCEG5TqimCw5zmfDw6rujf1ngz2pdgq5gdqMxak4SSEMdadcQexc9J9P24hx3coGodGLLeuyeKjo8Srtcz9D",
  "key2": "31EZKLbsJivsH1qfGZ2vWWaxivhP2xBjTVBoKVQSjr69n9GCuqLbXBCgxuZcSjiktnnimsKB6izq5VHDYX3XcSjT",
  "key3": "5w9Wq7D5HEkLiQdCZLGeXkXdFWrhpRRQrKxwPb69eAdRK6CwFgqjAPPwz4rkBuozcrcd78qHWAuE2caJzM6dour",
  "key4": "4YdhaP1d7iWph3hkAfRxSx1hf37VhdTrVXh9fMW23pcB9SerHRMvwoR1jNmkLreNdH8NFhuRkQt3bMZPEq4Vcx16",
  "key5": "4JEH5q8yxBGhZ7zULEWbHD3dyTc1Z7NX9ULtdjaDUYcP4ongVnWXm8jAjNaMKJBbZuaZUwsNEkYfscMaxpF5eYB9",
  "key6": "zzfMfQYAsmpPz95ApLfhj6Re4pkm9kVRZKaH43Tkb5LofCasK1XkV5GjWqW3mPiee9iZS1vsTKqAdPq7jwWUh8Y",
  "key7": "3Ld8BYerxz4iLEJYzB7ZvKQp6kWcagb1chkfLPBCwUw1E7ZPH7KmW3S1EbaMxTzgeS4Fe9WUn32rDfzxA4uMjpUx",
  "key8": "rD2PqDAx7Va73QbAesMjZ1dhNCAqaJsdKNB31txyKA9BcFGp4q8pyAK633RBsNNEPVDeVNjxLexwQcXMvyvmUG5",
  "key9": "3xdEKAkrxACUKzAfAXr3UJeaN4wjuNWqbf5dKB6z1nggkv2VCsGKPMZoKCdjwLDW4tJPgMDFGa7hCSGgjuXXWVz1",
  "key10": "66XQDK7bBbxFMvMQLUqdoHrEusgztn53tEWw5B8mzLmXuzbj1BzntfiCzogZMxgFb11iEaxahtBEt9kLa5xtWs4K",
  "key11": "5LkDo9CWhFCQFmNmwj7N9H3AGKe29HFKNpEqxqLNbmLWdAeTrpdBjUnj4J1rS2hLcJVUngEwLxZUDmYX7ooKk7yr",
  "key12": "2zYU9nqwpzeVJCfgtjZjzkhLrjA8jtBHyVGhgsQWVmzBYBRgrkxHsy9EGmtrGsK2dMPAg3TcKfbvJwdxJANmNpXF",
  "key13": "37iww6AhmkJYSvXQ9whXDEYzJVrzahKXWiwMA34fdEmZ3ji15DUcp4HJDjbZAgVzqAUU4NAX3WD8gFiPTSXEzULR",
  "key14": "gb9xN5sEeggUTytq1ykD7VvBXNbYEVx2c7afmZKVtMGGHLom1kPMiBNaYiFhXKjEmyfRKBdqKXFHJUBrb167nZi",
  "key15": "2A7hk9vNDv9VXkB491HHdV5uBdfEyjfEiqtatSbHmJh9ucjVtu1oc6VwokDgspUWa7f6L3nGYMMSztounHgAdjr8",
  "key16": "2wcxuVPFCP91PYAnmNm3H5hQQDh7drm9pYqCzUdofhQF6YXdaJ3pmu8dKjdiJHe4AnGrVn6renLPH1nMLf9U5dVQ",
  "key17": "65UCZY5vKXdWMYyEqsb36S3exD1LLzWvJuzhKbq5pZfsfmaPfQerzPjRr8JS2bWx21wocgAgShtCQnLNMT6xiGBb",
  "key18": "3eEgz8cZC2BzpXBzsMP126tY15DAsWBfU2PfWYW5Z9KcUxKcDhC6YViWFii3zeQa6pB3ewNAZeyBwx2rJDD7YohL",
  "key19": "3m3h48ttD7LqYm1J14TVXSHjSUNnDnzo8QAv5mTbRtKGyEgLbSfPBKsBYohGjNM9NGqmFHwh2rZ3BprdhUot4q5D",
  "key20": "5oko6BLybPkG99SYZbbowr9aqiUvfPPCc1kvaLSuJusfp7MUJVK6mLQEv6GbEsdmm3gJgh6owoxRJuXRFYAxbyeR",
  "key21": "5QzLCDixfxEiQaUXuDtDemW2M6pd8WQKiYdM6WUjQSRz6kigXzTrG166D28TLP2CKFjyJXEUuyGZmY3teMdTehej",
  "key22": "5rmDbngiw8cfaCMtHh44ZyNgHW3to8YnENC8WzXndfopEpHgnvMZj3Suh3ndK7eoJRTkxSCmdGTyuvKbm7D8BXMj",
  "key23": "3kare4RNi157kuYxVLoAZZEPKT5LNytkdTXg1HBGCZaj6EL3gZDaBc951Q5qPSBfha5GPbpCGQ3dhXBoC6HKxXBn",
  "key24": "PwqeTWHkH75cSapiyqegGSE4JVSVnY7KFAM1aEw2DsZZBtTqrJ7ZVRFYvi7TPmjWuq9DMerspwwg7pArhRjFvUP",
  "key25": "iFzMZthJVEKPkYQqVJkbQ9JA2N3RmddtS8SM8ZupUsSmsmM9uAE5UDp7voQPTmzzpM3Ah8S5ZuFSMg9yNcH5DQm",
  "key26": "3rUB6AWyZ9pGHfhbJZ9ontJ56FWQrgpt1HhVfsvGckLNznMfS8e3T6KQcy5z9MNAGZeQAMFJEtSpdqeT9pEax2Ep",
  "key27": "4vsvnrwWPEKcFPxaY6mk1SyZhMBypPEM4FMaWrssqj7DRJeN3MTEcXwzmpkcHaqYCRFpYcQUuk1tCvuaeQUZ6Q7X",
  "key28": "5fAvWPkL9QaGSmcysF7zvbmFc69a2YPRDxA4Mf8xnoztSfKaqLSPzEQnr7ogvLsGr4WgZaJfZgtx9YE43pF7sFf6",
  "key29": "3bgcaWzebp6XmBKpH4tmQGxSD64sm5Mpg3QZcdMSVLrhePob5Je85sSzFdHYbuakxxvwi48KTom2t1a3zGHFVUWN",
  "key30": "MPG4YUAFBxP3zrViZPptp2nvcubiHDp5sHyVM8AAwgArXEDUrGxEsbDnD4MG6SCjwK92TTvRNkgPCCNng6uAszG",
  "key31": "5HKSWUDCEof1huJ1i2W4t7ZXnHob5K9T5W55xFTGDJBekEUGq4rhfNhZXu4LihJ8Tv8TijSYFLLntPodBBjwJN5m",
  "key32": "5XX1gVs4Lq14ZiQ41rWC2Tth8ewnFfbwNeNypKStuTahNRKDstWopWgGwyHhsC3h6MiYCXj2RzXcqWMFZiQgcwkq"
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
