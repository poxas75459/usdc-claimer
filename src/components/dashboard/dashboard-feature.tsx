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
    "cotk9DKPEcQHZNh2PeHWBb55iKkYcnFyhZgXWJtSjrshYV2ZD3Ejudh955Q1tC8qs68NwkcppD7DZwnehD1w1DN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CH8uhqgw1j5DySP6cEuvtVeTMPDXzaYhq1iNrUFVPwEDYehqSep6sh9GXDKUbofq32zbaSn3Z1p99p6dqnsu7hp",
  "key1": "44JAVcamrY8YPYcgAMVJWnw3shD4h1jdezTEXD2RTwLLqB3KeLbSvgSSEhfJmWZ3fMgYdd787wQVXDk8D58y9LRo",
  "key2": "3P6mvvVJvBwnrfRRmDSJoZYnYcWZNaj6BNaMZnrGdNxyHaygNeDoqKpRXyYC58WtAm3hQCmYqiiBF4C6QpjSN8Uw",
  "key3": "5B8xyutLTU7RNbog43BZWCo3cWEdwyQSU2qJtJrqkcdWRp22SywNojKZWGKqwdhYgUkSjbqiJigYncPW9462mEsW",
  "key4": "3PDWjoMx8d5zqafja1cmYbHrbESoNwZEuKF1gZ75F8Vj5V4Ax42TEoYBNg63LmJdmkaUN4Vi2gwY8y9S81WLwPwV",
  "key5": "4HbxAQqonzqEoXZBq1e4T5cJd2JEM9RP22JxWR68tfsuXbaUmw6hs6BiGZqLFrkUP9rxmAPkXb8cNA674f429heb",
  "key6": "56HA9wL9zYzFyMUJFZ7HaMm5Htq7AF74RtsYzfArkGhGrxgJN653wpi5LeDzM6gRbUEJSbgp4DEw9RNGTCeeboem",
  "key7": "2fHaVaNubo43fcDSjzwS7yaMkzZU1rPwT637sWcvmKqzD2CYwRVi7Fnjuo3VQwDvyxoVPGz2Wiu4ZhsFmvz1KvZS",
  "key8": "36jVAm9p1Gbtt5Yr8hz8C2uoJERJdnuUAC8bAsfHBoCwgzYKhKb8PyU7xoHV8zX2iCUfGW8YHcehPVzJkGciKXgz",
  "key9": "w96zLc98v7k4RHNDrTH3MEW7M8j9uYp9aFPGUxtM7XfKy7JQuxWHGaAkTTXixsodPY3tTrXuYVjDntGE5NLv3xS",
  "key10": "2SAdf9goCPrfN4X6ZjiAi3xX2BQKG6fb9z4UWkzbrTQg36xY62mRcNCLgQvQ6HASyuxBiWFKvGpGQaAxJGXPrbMx",
  "key11": "29SbKX3egARqjbQkuJGcT6AejyehZSy5HDNeoNeCmLf89Vz4D9mUCPUme1tM6LBSzCAQDnorxnC131ZmcC9u4gJT",
  "key12": "29CgL9GrcbiTmD2iXVJXrmEt4eRDZo3Xib27qJB2EEanB5QtSvFh1iqtjWVFJhJ6AmoyThbDhta1LbTEsKgKxDgm",
  "key13": "4gY6NokGHcHsiTMb5gBsv9Vzv4xoNYiTC1mXt4QwiB915uAXYeqX2ZSsuUzwYn3oqNKevozap1ayp7NyY4nVkCYn",
  "key14": "avSCVYZhnPEvGD88jXAf19hhkiiRBe419PHxmCJst3ntgsZFf8mUTDy4Q1gp4R7Zj45d7jAofVun4kmC1fepSMm",
  "key15": "4XPe42ExG1CF5STf2tbJBe9Wv7wjTJdZgWoBgWNf6c9bhYpsGtDD9WHpRy8Ky3GZk1TYdxmCdJSMk7RXVTYCGc2C",
  "key16": "rA3nUNs14gAcCKwuv53h3PY2o1aMx2w4cyq19APvyBd4RSGDJiyo8r1Ur9u9eepURrzzoHoKk98WsDY9mDzqASP",
  "key17": "5ftLsbLpKEJEW45SVhvgLuvKAsnXiioKvWhM5C1GfcjmU9NngdDN4NyEgHG2jrwA93sJ1Z14WuJN1e5gPxmzVUYf",
  "key18": "3q9RwjhWYtxCzfG4hKznqzrMDrbzP6PnAoxfuXS4zMbqCtGfBnjiXHQYWWs9xMsiaybHqTh5Vjn744npSfjXTLgM",
  "key19": "5Yk878kfrS7J9A7PTUjUCbmQt85rpdU6SunXFTj5H6CYkqQ39dzWUJf9nrB7H4ko1FCg7A7wXpK8m5DUvv2MSED3",
  "key20": "2cbdeqP6koeiA8aKBhVHE3N7hH7ds2JMn3AnZeZcFF78KxYpvmepR7K25foEX9ama9TqAdasTbJfoiiFZANuBt6A",
  "key21": "3L9ThJash5CTPgM3KA22n3pxt8xUEhP3gQRSqCPeZvnPVr4GHGpdCMuWiyoAJx5LBmS4SNGgjFHKVYdGpxZg3pu5",
  "key22": "3ogTP9UgafzBa1GEmFrFCWdQ8a6vuou4TQHraGXX2w9VGLcDUGrdoRz67zxx4CLMq6Uw8GDBnTT2wEFDYtgDBed1",
  "key23": "4HKiFd7TW8FXzhsRuwnoLPQTcymrDoYq1dPZcL7r54zb6acMpoKZzZkEzcaDNhExhsApNQEv4bEPDtsVYcQ5uaNy",
  "key24": "2jVej2DrF92dsUMZPHcLQDvraLRoqERANy8YsMKtzZWfnsWMwreopAVQMiPZfi88BgHbCJpkqDCDzTd37d1oghUe",
  "key25": "5cmy2Js2gZtCkuYVH8SJFYwDRRLJ6aazNhXtKfosZD2UwPakATAQoZf9mU498XKN3ABVqS4suc1wE4ddexUzNpFT",
  "key26": "TzSUGtuYKmsm4bck1d9XrR8Ro4YGnByEVvL1GTY72ew3FgEEjT5tBbhCXTRFf1xWCMVgTcjZkscEM2rD3Sfue7J",
  "key27": "5GnRxWGpJCsSbqw9ne6sRVK4FsNoeGC8XkmACwDybDbfefYjwHZLU6Yba3q2xMDEfuZcdjMSWCVijepGN7iGymvf",
  "key28": "46G3KhgZAuzdASamtxFgnzx8U1RkcWX3XHKrN5ESxjxtG8ryMCf3VPKbi7BwbQebrWs4EwbmuA3vqckkLFxibfVr",
  "key29": "z8tHxPTYqFmdCpjrXEQq6oTqMp3Uw63VrxrgDN6nteCzxvCc33jgiRmrmgY76XrwUwrAnJKAZFefwdSmPy8cGnZ",
  "key30": "2rPBcvB82VAo2PaTXVf3GT6s2LFgNoXwdNeasXUq2TUdZuYkiD4cu9TLNCSHJ3bHwpJBtHy2E6JyAmP5SGS963aE",
  "key31": "621QUjkW27m1oPvn8V6HFMZjzx2M1hRykN4cqaQVQ5syBm75yDp8UeL9yWA1ANEGWs5VV6UxivJGNM38qp4c2uUL",
  "key32": "5uBchAN5p5V8QqaMXwHwx8kGxwCBaa2U493pTBq2LNsPwiP4nX1AbdeKTArdoKzX1DRunGr215Cb6ofMSNqhkHGd",
  "key33": "4w8P2E2z9pXgFFi4SS6BWBXcV4KLQwfzoHDQWUa5X5BAPgHz7JEqJ5zo7MuZQuJktw85ku9LJF1iapfnptRJKzN7"
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
