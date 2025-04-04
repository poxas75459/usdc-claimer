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
    "eNu5E7yrSTrjVFgxYMqyo4CZH47hi7dBU5XvXaDiMKeLZCrJQuJ34CxkRFEYcGUZezXYvdJnUa34cnPG5jTTW1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DCucn2Y92oRAmcKMnbL7wWditP2Xk6zM8CJhHZrRmS75QaH4YQjfo6CCNyjNk1bRE4rDzU4Kc7MvEBkbrHNE5ok",
  "key1": "5U52whQrod6ZWjQaT17btmRuWpJmvvKhJGshUrLqKj8wBS1xFBcTRxWAaYDbcsWKGP15Tpiymd4WBjVwvdmMjnWT",
  "key2": "5DipJfKYwhWU6ENfJoy1kE3pePhvbUBSiJ4jmwxknnBi6wJRQfUsj9TMZnRn8WTv4zoPCY3dKFRrPPiZ2J2rtvza",
  "key3": "55JJYYRuqmqRHNr3HcSAk1mDajSyVypbR7F1K3ec38SC6AVqyD8WhtXcHvAqoW923rUNiDsHwjZWG1iCWrsNugft",
  "key4": "3p3BbjF4DNRq74vKVGEWMP5Ly7834n6JZx4hA4Hz75PmEramcvv8ZoGdRXJy5WgQUeaPDx4d7kjHgd6RHcihjc4G",
  "key5": "2KM9SZx3oSGo5mkfqNrtmNoJWNcaGjooconakbfThLPJUqB41CCRx6E5qCJk2JvQUVUhphGtBCqM4suxJ94qnVYD",
  "key6": "2f1CvcNybb3x3heCDRZuRXdQuLrexk1KvrBru3QZEZr7Q53dmnDEjwLssGrcdUEYqA2HbR4oVTJgHwabn1eFqfbC",
  "key7": "3VVawGU8jqzm7vcRnCc57qFVLXvgJF1KFdQ1yjc5Xkg9UkkK96tmDLwHHv31YDQD3WH2Lu51h143PasZDnMhEqW6",
  "key8": "613ojC8sCArgx3VURHce97kSeJXpaE4hj5ZA3yVJawTb89prtR5ZUFG2wW3N7FxAHKjtNDkcA8WBd37d8kdhLJ8c",
  "key9": "3VLCGLN56W749Jufg977aBosUPpsVhozsvkRcuEAdoXZ1AgfYnbuiWF6aeNLxm56fnFMTu21s6xmS6TLbqHQBzuQ",
  "key10": "xtBVfLswhXi4n236pJJoQLa7iUgQ7j1JcdQ7WvTyr2piaWUfUUGhUEsBCQiWZB1prwW9ccNBRswj9qtCMu7NAtE",
  "key11": "4Hojhvd28jTCmdhtzCp43RVq7bqqCxSr2qUtkgP7MUNuuvc6iTMqK8pF5NQb9sMVrjYGEinyRPy6S1XCirv7Hh5M",
  "key12": "6wrhCQ8RGV7HVAqmbjU8t7FdNmKS8aj24Nv2rLzCNK7ed1PG9QdPrTyYSZuVY2rTvbppZZYr6viniZxX35xRo5b",
  "key13": "3T8V7e7hsGjisUPhacJbfGKGNaxUmdK3GeBePmaAo3iVAKXFjcoR3mJnzE89twg6RH2V4PyvLqsdBnjEhqLQmv4d",
  "key14": "3PY4zoGww3oLtad37nJovXsm5vdFYvin1j4L2UqBpQRLSQY6kM73tkjyxmFueHZxpGfWDw2m6vwuLj5z6sCvAV3S",
  "key15": "5ZAo1VCHdB4Mth1iaU796hVCcWHo4TL4xyPFvLzKAkbnM8CfVNG7tSn5XRhoHX8SaTj4cSZHMnQRjVSx2N6rwZR1",
  "key16": "4bPytdvyRuvyH8UGFhMqV7tUeqhmGBGvYHXwdKpCkTPq3bSn4PTZvMv2EkTu6rzKeZdwmCiyGPUNPScQqcrNUfrt",
  "key17": "21WQbdV4ZN8vQPDRyFN5Rzgp4eLftb3XFuuv8S7usZ13T4bxVwuoXdLy1ncdWC83vXWhMJxmQg1pXAR9GaQ4Ji2H",
  "key18": "3vF1Bw1csMkhCpGGV1UmUGDvdbKiUQmM53NmcBUzBDR2gdYvg84zcKLq8Z3cbs9mDk417U6ekrixfTjiLBNZBLzL",
  "key19": "4yTEHXtnpRZTXDQijYLYgFCKrAvkxxU2eqTaNoU47e1B8dN9bjwTjQPumCKAt2VW59dzcAUoNB5kpmKDjdeLqae2",
  "key20": "437XrqEx4Y2rJ29r3hMAPoHAyVBV5rWrCJsBagQ26oQ1RZXzRkcD3CpdyyQFMXmTnhTS67AgzmRH1dWai1wsyCpE",
  "key21": "Y3hV9EGV6hsRjckMXiXQGPNaVscrvgZvLdPuGkp2oZ4QdgjjzF1KFvG4ojaF7hAALZJwJgabejsPrqKnB7nY49g",
  "key22": "3ihyniSHGE74zMrbGiVFUjYXfwvtEvVuZmWRT8Rhq9sgPXhdnypdzW3Wq9LZNHbsRF2vsGk5R5MpAxfNZosuicje",
  "key23": "2hbtovvqAwJb1sGKU9Jix6LWfMBwvqmqgvTEpmjuFpZ7y44VQBgDoeeB1b4JbQKfN8VNvX1MjMFkPvMsdMBN4P2",
  "key24": "4nq9U57gbSLqm8viiFwB2vkX7ALXmEdgCAJ2stVLUFkzPNqRb1fKqWyvvTrUHALhQ1fVyk3ieF4a5XUk5iWvH7q8",
  "key25": "dv5yTWkFea7cBHazTSp9CAjCi2oKxpsxAiWQYrusM11LHUuXFVBFQFvyC6vTZvj8aWyQAHKu4eCDue7fzb9xAP7",
  "key26": "2kCMgWm5sZxuWz6EGoc2zAoPiDt4TJ8b4KRFidHqaSfiN7RrPKFpg1H3gT2QiL1niFMRBBTm1qdEFyB4eLyU31Xq",
  "key27": "wo4fNvgbrSjuZhzqbJp9oJc22uEqi1pjDBCHbgt1vnoq3kpsW1ipZ8gG4kUkUek6chaDMBaZfsEmbnLokcM1xm1",
  "key28": "W4NqR7nLxxafSQHtiM2M8o8WY1Nb3EWKyDFQ995tf38fNaKpwkDvw2kpwf2agWXAquB93KjfhdiG1XuZ6RWwb2B",
  "key29": "3tNK77bUa2DXDGpEZA1HfU4MoRCrTdmHeAAhwv38iyrfcJjbMYnYt51pTFnj2NCbevupgzoQTDWdZgEE2TPJd6oq",
  "key30": "27opes61kJaiw4fQGgiQ42PLJee2ehqrWXRZcZHYmD7FT7DUsjKRsq8wvLkKBW8MFHbK5H7MsNZov6U9w4nn4zmp",
  "key31": "22FkmQACH9pAD2RM3H2h4riJCbz5TGwcQsH1Dgh3LZUtvSFXsM3PP5b3rNYmmoxE5AJw5SkVM3hd2RQmnu84wG6w",
  "key32": "3C4LVX9J3pqAuhX52QFyN6GQV4fpWJK7jHcuDWMRibiLMyNpjUKMCxHgARnHcwvGsCZ5zrKQ7D8arCxyj712ygPX",
  "key33": "5ZMVsbfh5euwVpLe3KsuAvNtGjXhHd1DGSXD21QXPLnHhRLhjZkwFT7gEmvnXuVnM9d1eM3cRUp2D9iwowkemgad"
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
