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
    "544KMBzPFVjJ1FuMLApL6qzv24wtfCWBHHm2zf6GyPT1tG3KnN4f8dQnALjvrAgf39jpMxZ7e9yjbgB2RvrneZgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bBTkaGzwvpXztGGQsJTkzUggF6oD9B7DbjTn3kYsdRsDLfJjSxvq6b31416hHTtDVgQ8bZ4BP59sJz7SuT4P2KU",
  "key1": "37rcTAEq4Zvg9kg3sF4xsqbpgUHUPKubuo6fdWdTYUvkamEpkbYmCZMiqJvWGWLguv7LBkGQUyb7E89SwzeqMcxL",
  "key2": "8XDJoimgwPmUKumHHDvfNBUHJaBzkFQGC4C4FWxhCEZ1kLo87SPpvVP8simdY4kYmqcGUq8U5pssDEcpsTEntSh",
  "key3": "3Uhnix2Y2tDpRU17uZ4HWAYET54M7Ep4NyGzr9SB5vb1xmHg69cZNDf3yyBk4aGmgLsaQEYZYbBCgCDnfWxo4VLp",
  "key4": "2xi1cxWnvTrDWcuNgLqizmzTGjQxC7MhwjEP9rwuCZQ4yQUNkLNz9KGaPXiqVipPqAhMx1X6SbYbnV1Es9v9JK1h",
  "key5": "2EYvmNGWYEqRmDrhENSXRnBzhA6gT2vFrk1RacKm2WCMWg4Ck4ar3aiRd4pvhhCXB9DWoZ747PdcTLQRDxpTGrwz",
  "key6": "2pPCPMEHGxsW69d2MV4fr43nmfFNevEJ5Lgs1M1N5R8NrcoJxHk996ivbQgHRHznxiThFHbETD6ftpEKAyFAt6iv",
  "key7": "4BTCXxHGmZvtXCftFWnTi9jjqTPS69wTyfGr66qCgStFMznTeF8miFAAedughFrFjeGquuocJxq2U7eGr45GQTUL",
  "key8": "bhPg2nWpNo2qEjGRbZ696cFC5DqytNeWWAJhZ1szUN3NrUADskzdF59XN4JxE2LqhEC4nSncrLtg8C2F7Dxni4z",
  "key9": "4JEC5Grxw5nUWpwoFVoP6dERzYRWJWE2vUA976xP9Kk9pzG3cdmow8Hjd24NJ138ZCaDkVz7A5HL83hmunbVGQup",
  "key10": "53mpiRqYXRnWWnnXxuKiEUj2RQJNRHmcxRdmvTiajAq9KYrH4grwWi2YMynTAfJrj8frkb7h9TS5fkpYQpi6vomF",
  "key11": "47ZtLewcWmUnycKZcejeBkADnuhdbfbERJACf6ZhJskkTrFm2uRrPJUSfV5sBaWRja57KhUFK18Gb9noi69JhvYq",
  "key12": "TADx5sqqWEc5kXsXk6YtkVrgyoeNhFdqXcaERtho6KhbeESWQGEzoAzusVP1Q7TFnfck4bNw1zB9ebqUAm4Wd9B",
  "key13": "5r2hwzMMQyG8GHGDaetbZAF1SZz9KXazGR5KL3LA27pn8JTb5hjRtpzDzQzKtboPZ6yEmnr7X4d5ACrHucv3KvaX",
  "key14": "5yNEF7Z41VxHLSYY26tqU5qyKfa3uvxXWBuspn1ZFvx7DEQjUWrCw2WX2DCwRqLcyCwHeocMtNNytuT4UJ6sTwjJ",
  "key15": "67JDUQjL7adSP8tnztovmEZaB67xmEWphTMPthCmVU8diBhNqXvyy3VxDdNB7eSN2r2E2QddEbR28CsDyos7voYv",
  "key16": "2kxGUYW4UNmcJ28u8hDNSKsUHnfCxzGahdZVyyCo8uKWj3hQrtpyfJgMRRwLADEH3TsDSYrX1WKhvgt4sNiyxQXZ",
  "key17": "5fRWLgXguxJuDMYRVxzXpeLz6Yg25L4dEBUH2TcY4WEVnPsxbVGQE4mikwssfTBemBgXRAmHYAF9Un7BncWYmWp",
  "key18": "5d4nL643TmmB6oZRTuCrNbwfRyxw4zsAptj8q3pyyjMMtNPFYE23ShQbHFyoFcxfE3w8cLkB2kXzip9iT54pETN8",
  "key19": "3e6ooHFzrPNRWWmfi6vABnPhDaDactZEyAkYsMW2wSxaZSSkY9yDp19rBhSmHo3X2oEwa4k6sqY29D1USuiPf3Zk",
  "key20": "5JnEkyEPKzY27g4vmxQcrfwCKr6zTiGz6xDT9LA7uEpbTu9HKkpzu8v3JsVYU6hW5bhhVw39gYQzgYs2MMnKAfPW",
  "key21": "58yoT9beeGEZj8JWv6PLVCCjs3gFTmixGB8Qgz5TG6rUcAL28owdRy11kDbMeVaKVMULUhBuASLDMpHXkbPkFUm9",
  "key22": "4Gn4myf7XGfDuzQuc4nCfoisMKDKBmbTrBXmaMAc1VqejD68MmDvHiKcqfpXGWocmRNH9hY8De1hqhca3UiwBYpc",
  "key23": "bZFj39JvzCUjQBGUpmEm96y4jLzpA26LZb21VNDZY2KCt5cZctp5z8YDcKfRPGK62Ye7ujkgmkCMuNTwQSSHEP7",
  "key24": "3orcZ8wk8a5zmDZHCTwysxkV4QLV3VYPqJMK2CKsiYDSHeXQy7GQKTQEiZ69dsMUosLVTapRrTe3in52eQE7BTGU",
  "key25": "3DK4YW4BWvUsqUUCR3QbHiLsVkFMQMW4uVNnFwXTyPBeHMzeRi2tXR6cd1iJokzgjq2xU1n6GBiTwwaF1449iav4",
  "key26": "5m76v5D9L1n9pwwz4DBWsdAcFnYqhJkuzki2YsvQQZqWhUffn5k5W6qzZtQSi777LvUu2Xt1kPnKFgUdz8myhugM",
  "key27": "2U8nLKK68g6E7gH8zZ6Eg6j9YsD5NJcAumBoQL6Z5SrDwcK46bUzYCbazAyKXBnwmpuU4KEZiThZyRqGGozxcK7m",
  "key28": "3cRScBYjJTfvbzJCVuF3sx4g3WswUPreQpWn8dCQ2uUAs2d5h2WMMPcC6DWEJ5dw3fPFvVykYTdqQCQMB5jwgKmt",
  "key29": "4gzsM268us7DdwW7c28aKPKSkoA1bujgzbX8Q7pxZTDVv5qQ9WizntKUxHj7CEtUMyGvJgJumrcc2L79Hh8euNWq",
  "key30": "3uSWKHvvQi231muxGBzufhCYVe8ArjHJMAN6ecazzZcue2ev1py2v7YmbPGdwE7ZgfJdagVEuK1bmZdVViVKWx5R",
  "key31": "3B2RMb5EojWrXpmZzHyGksHFmok24araqp6WKudzD2DfHSPFiKNoy7XfjToP9ijX4gaxFpCQWMLmZxcPrMQHrcMi",
  "key32": "2RjV8XUXXXJfMmCH4EMGpdTxWAx95PH2QnPpDN9bpfgbbddVdg4Lbr5X91ETTTw6xYWx6y8UtyT1P9bXqd73h7Sj",
  "key33": "5wv9gytEwyvVur1FjRGmyFDk24ELZUNcKmqXiehpBQeF5XM2xriJgWJdwkxz3CakkY2S6woUGggepaDkLd9Sz5V"
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
