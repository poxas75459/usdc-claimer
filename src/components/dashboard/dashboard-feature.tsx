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
    "2uLNarCWXvQo2MgtA7xdnqThYSbsDafADGV9XQkfoLyZSa2adPwwxZTKwhjSFvT1JDJa3wDxrg3SWJgoNfnuT7w3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ttc2dgJJ1oCcs9YEadGvxdEMFpLLDdH9zuzz89fr42mzAboLw9jM9KyJbhRcTph6beZX6uwzd5ajuT87Zkeu5Gh",
  "key1": "48hwffxjubNyvSXUuTcLjuiXCPh9B7C9Qkn1Q3krxppjXLdbSLGFLYw3c2i2aCjp1VyB4d8orgcpu4YyYvUDi4jD",
  "key2": "3qAzgNE3MJjHNaALMYYeNsoaJ3VcBTpNgrKGUro2t7MYM3xEDziMm8Yo1V9zRkGxyffQPYNDpUUcdR5zKdMp4q58",
  "key3": "5fhrZEz1QmPe6uuKd3Vijvp9iRXhkF6RTSQ5yVkrASDtjjBU7D69L3bwGSeuB95JmbfVNXtUmaxtgLpgqvjK9Wi7",
  "key4": "34Ez2izmwDYQZfkgaMb4Nx72SMcA9944LWVYvPXWm8nt3bt2n7M8EtTtPNg4fiECTxS9H6c9MsgjPcWSFqBq1TP5",
  "key5": "5HmzgfFsUkUWJxkecY6vnFfP4RQvHXs9LoPn1Vrs3ooxd3xLvva3RSWq8poe9xNU4GKUq9ofcg914cmP7NukunsT",
  "key6": "3dCPwSFMaGMGCCMMcbzekSkpppC9v3TFP1hDmLQR7ScEWQSKoSTfse5NbGT15bJtxiTLn3W6nAyoJAwdQ2PPmJjZ",
  "key7": "dgMyMRFMD46ZRk3Q8JNcTuA6Qu51CV2WDXQCMfzAQfRfcYMRJKg5Wpt9biAoeUG1AJqyYrb9eHVCZ2AFuHhdn6V",
  "key8": "5jGEMc18vmRTWmA32i6yn87RhDuvETFmd435FEpsCWDsxHufgtnEpy86pNLTs3bRb4N2ppj55xkRBoX5wp4w44Rr",
  "key9": "3xzKEERE68iTzKJYKRuxJNH5iSuacyd1nZhCpq4akHxH6utb615AfDbk6hRUvs4e9Kkc2vzo9pu3s1AiHkqoW8xw",
  "key10": "5kDgN8PUoJJVXwdmEnGJrY1hvAsTye8brzCBzbYnfTttpeqfKvowsF5dBfFnQy2Q5GdHuB5S7mq85EuJSRPiz6nS",
  "key11": "5swHRkNyhHJSdLi7w7jibTXtzp7MNMp7jEZpttMmvufjbXGGAFwZZJ6SAHHHvoTBYpTon5fD1i85XQ8cE52Tyy9n",
  "key12": "4Zqr1J6xPhAx6gkNogFZpeMKXPe6AEsdSn8PV2iM3ctXy38V9xrrWGTAZyVNquYXHH54jEkz3BXwvNJ6pEtVMYR8",
  "key13": "5WpdeY3yXKanze4XcJtQE8yEMGhRFve5DP9Y1TtX5WgDErwDZ8XfBLv5EscX94vNmjbsMReGD9fiZGvHj4J27iCE",
  "key14": "3ThuiMrtTTk34xvgUTKknyDosZkc7KEeJG5F8eo4GZU9Kc12vjftmwiokqhNzMXhSvXqbsUMLtemP4obzQfB7xgN",
  "key15": "PoSXoy2AaKx4YxwFmb5MNXvQ1MdCFSEXkvtSGgnQsTQTPuHcyTq4EnyDHoChFmuzdp8Mn2sCruVTCYVFM3ytHms",
  "key16": "5VgU2BkLQrWzRtUUCFHsStKEJBwQHMtkMqMB73w1fvQZcWmLXmPBbM26GSpdWSGJtmQJkusVMtcmZz6gDcvo4Czd",
  "key17": "hSFQk7K573iKWGRUDLrPqDaVZCEWNqDMQVXJcYUz1Gn6XomH9CNYxqd1p4QfanyWvsJTE1zYnQ1WnQ1i6koCFWb",
  "key18": "5xrpmdVcNnG8us6GqGpDGoNaKK1us5Wb4S7WuzmYwZ3WifdRqpWvj9KrWCJvptBhBsJVLRS3j3MCvZwG4Tua83P9",
  "key19": "grGP6x3P628iCKijk4ziHWzhJgh8f5acVV3UT2fPyUA1judLujQc1v4bYsmranC54ybGE7bfW7Ed58k3gLwx51f",
  "key20": "Hu7GFh7eXDiVgWPFcKxN6PcmcFV6BLR8zUBdgVeFXvvQG5ksEp1s3qSamDkLw2aPxChEzwjV4CbajcweuUuxWmY",
  "key21": "V9vYQ82W33U7jqDmgFSB3ewiWEUodtgjQHQn2hERVaLdWv6QJ2rMvG7yZfmsj5JmHrpc8xRc4QG96BVwLVSn422",
  "key22": "Rjht2H8TmRHCkjMnK4m5P9Lqkmqt29tTqTG31rKfAkKvXcY6exkKdrDNWhStP8dB4En1CChW91Gj5R7cbZ2tqsr",
  "key23": "5qFafDacvSBRptdLPmBdb8W3oJ6BqEkoiQMsKAQKdPPaqZnd7GGAHKQJUGpSXafnCN81CtiKzmbVC5AapJFe5B3o",
  "key24": "2brRiaSaoTydquarWwAWspEEAVtq49xzjwYUDh9AHMgZj1EsrdqWon9J2qBCPHvgYvvY2me1BqkrpbKyAVzupAg6",
  "key25": "4v49ZWi8MLQp5M3C88Vz3jPwJW8Aa2dAtRnJrA8QS96AET4aK2niBKjmdpYeAXrqt7j3G6B21jWWhWbkNA891WZn",
  "key26": "4c78LHK2Q9Zk4zcdAWBKzdnUKpZu3jCpsSXbU26UM8Nj3WVBo6vcLMHtF2aWB4saaCVCQvU9Ykk2xrEir85TwsPw",
  "key27": "3RTuA312MqRxxCu2hFgYtLRKUeAJaqtyuKFpa2Yz9XQ43BQZDpTe4rkdQKe436KSADArV4T7uo1SoGXCwWS2LkDs",
  "key28": "5HM5ymUoV42xYJjh3owpNVrTRkYkGQcZ5LyUjT9f4eG28GL9AAwEiWjFpi3DA3xGqcb2K7LxhwbVNRE47JNC78Nx",
  "key29": "2JXAsavVPQWT6FvsPgbswUM4uMnYW9DQT9HCWiuJnLZopHb6B4Yd15BsnJH2nbkyLP3WtoJpZkFGr5rerJM4CNCD",
  "key30": "5zBRfZ4bDMVM8uHqswKG7pGwiRLY35Jzv4u8iLzdWbtp6wDxdnTjrYx43qbCfkvAqmqYQsN2ewSELaXwpxmNTT1S",
  "key31": "4bAqMDnVtFxdEoqC26Uvnzmyqcy6CL8wo8VFGrH7uvF6bUHwuL7dUerKPokBTiJrurXY8rgwYMyQ2QV2627s43eT",
  "key32": "4KeBwGzVoFcb5P74ktrc5XSVtPt72Fh1uDF73HgHwkPgaMN6RdmD66RBozEFWjYQ3X43xv5BAH1nAKPev5YRgDzz",
  "key33": "5ouk99LGWiGQ2wgzHbJ6SdGp1w53tSQNykXTYmAiLnVJ7izwPRoYF66yhBSggdca1Mdr2iiC22HyhwiMcgQEv7SF",
  "key34": "2RbMy9DYeXhnLFCV5wyE3qmRSjes6zU9CjzKuebcBk7xdHYD81zpBqYXHoFkktBc9d7FSCi6pzsKg8cXaiVvTLQe"
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
