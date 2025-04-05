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
    "5xQHcYyPffcFdVVHhbzsaEWChYw8JnjgoHxShmNEcCSCdWQyyj7VSz3wesqm9mpPQRMGPK7EZFW4e1KsHJZXTGzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vg896iwwidWF5eFtC4VbXckqmYjYLK6Abz6dikji6xRP7ViAdAen13RvRaopF9eYcr1Q3RgBNdUbifTtm284LUQ",
  "key1": "3wVcGxAjaA5m2pSXqDBdwMcxjzmAyBxf97jDCH5M1duKHzb4CwBwy7Ntih2vNqzCLrdnXupL9dyTWChWHkx32Whh",
  "key2": "4MXsicPr1i7QRPpiZXUaEXTkok8nCR88bdUcFSbuB9QCTpCgQ8Leh3RJ4Pu1Ky2p53PozFr2waXtBAssL9ueEsKJ",
  "key3": "49wbZgMW7kNKbuMNnJ8aHwy68eMNdSsNDqzWHyqbGG6smyUoLCaZZij646RqKu61grh3NLnba9vuVU1wwpQ4yQwa",
  "key4": "2goASMXxEwBDTf28cawm4bPBPTq3rbbXd4UH9xVYVKqaa8bfKF4jWs9KZEX2QBhQsdJAkWamNqZfPb9ddADqQyVp",
  "key5": "27ffsGpZz3ha3nMrxhwZYY1oApvQcuwYABjmaH2FN1JHeRNDkaZa9BogyRX3QTYaC4hsh3GbDDas2bGwT8SKez8J",
  "key6": "5sGcTzrzJXr5ysjxhdCNqEBFV61fJJiwkimKwAppdKfqMoo2eepjJTTF2RakmpVjBD9fxiFC7kW5bi8vG7Yqtp15",
  "key7": "2ZtKJpSVtFCv1GtGBfbSfm6QpG8NzkzjCAqt8YvTZAsd5GzKAWsEN8bbBeTUmmJQ769ULZ3jDqSJeBejdYcGG8nx",
  "key8": "3BD688imjbsu9EmWVvx3FfEQGjP39TuCYBAMWpmpTs6hMKYhVCpMJLEmWuoYE52VQtRz8N3XdaQvjeRUnsZ5Comw",
  "key9": "5vAcNDmti2rrpRZ1ntNFUNUv1G9NeaNcnYeyDMb9KiGtaEedvssjf71Um5HKxDP2JBXMJSGvHhrvLq6iZmw9PwMo",
  "key10": "5SXrSdegTThm4BLzqQN8Xh4zd8rJCnA1JBs8QcdnLLNzJggKMXWztYDWPuF2Qzp24S3fUCvSAG1frvEZfHAzk3uK",
  "key11": "22wzMSEBwgJoydK1n5bcz6BUHGF6t2DXToHvPyPWQHUhwtpXEM8QjFxbtGz1Jf9NbpqEYBhYf82SejMSz6VkBFcS",
  "key12": "tVbmFbb28ZcpxCcuuzLPgUg6EdzvJd9dSEQ8taucv6Jp2GAGK9wyYmHJzr2nvxbsnoaQtv3o7F2GL32iVjD8ZXC",
  "key13": "53UUyENKqxPf1jmW2GCzeG6rnwYiCKazNBFksagzwVg3KRbBUFnLMuYzX1PEG5Gy9NUTttEuuBh48odv77uwqhJj",
  "key14": "jFNJ1vBpJVbdFALzZ6peAqtQgJ3fue2F2y5UweNP2XRnJPViwuyM96JvvtYppFTZVo87Xgkismo2t9hXwnATPBB",
  "key15": "4mrGm6qevfmg8v8znHKSQ4eNZ212fS8u26fjdpdDc6pEz1VcdXm8ZqU7QRDSmZn5xsiZfU8ak7PWTaBVFJBdwWx4",
  "key16": "35DmiR2HMiKxZh2KhCojshdmcmH9R28vpJjkqkquWW2ShEksaMX5PcAF3q5xZgg5KgCdAwccQ8ijDTcyng3EwxHZ",
  "key17": "3GGDCmmkYWzye5HJAdHjTja6BkULA8ES52MMd5VPrRtiayBi2bvbGpZuYCexjLj5Fj8AaezNaMgzJErKwvxAsVaJ",
  "key18": "tRQ41Uf9GbrRkhTiz84bn6n9HL6dYhLhUqXznKd6BEmmRYmYunLNRBhVsRKkFEBq4PZpoenaDP4ieEzjxuVazPL",
  "key19": "4ykNPu49vtFdvAXpAYkXvsmnzZzf7FFLppazgC2XgyPDAjZShYoqnMDpYmcQRF54mfErFeWvwVE5p7fGuwtSfD9k",
  "key20": "4ecQBzornZVMLhXTjsP9FjWGPJVWhYJX5vYLzMntUuiW2mjKsH3bvcD5enL87CaGuSSC9HkTJYMVA5CeH1RMtT2c",
  "key21": "4Nru4TkVWXGXxr8HQCxY6KFuNcthjDTEv6HZxMcqCmAJ8agcA8XtqYmhyiJ6gy3fts6N2Ah69mgW7hLrDfrZiLe9",
  "key22": "41hE1yDB2B1NLF6o5HwEWYdFaRnmduJzPNVcxFJ7NPZXxrpaqFNShMxcg8Fuar7VrXYgfmnncUDV9bPRFCFywSCn",
  "key23": "5FGXW9NQdSHkaZDmBH8i7PnBuuPmRtUxc9JFYSQfJSmYC2zrwCN5JgHNQbaR3ZFnAWCDJ9KjBFB8saqbvior25z5",
  "key24": "a6wKuDSSYV6dtUjy1sALpEXrjF7Mjid1jdRcbnWfcRxcC7RVoAefC3o5LRyByk1PaQZnamoBmhbtV22qopd1FLZ",
  "key25": "yNgQhEnMWNR5bSmebcrEzykyGiQxGKQjnTAXrMt1C4KBwTj1R4ET5kTF561piGXBMLY4SCwq1cpCpUuX3c7Xrko",
  "key26": "4zE4ExxntyRX8kpknCq99bDLM6ofaZSci21j88GAgp2bgb9heTs42Xt46mku5c5NQCavNUqKAXPWFoKK1JoUMMnu",
  "key27": "3MVFAMJapdJfVbwNAAMEuRKVJcABSqQc5LSw31Tu2GhYpDno44DaVLZ6pa2KyVKheut5NNypVKtvXGxRwyAKv7wM",
  "key28": "3vrYXTFddkSNDEBzDYxGar6XPW9CPzsT3HBnoi5SJmtSaAZLLHZ6eJyGj2BajRxk6WmoNSsPwwDF1b6kXvwJiFoj",
  "key29": "tR31VaMvjXoZFg6iy1DFfkLyobsKoWs1N2f1srtYh1EH5tjpuqfSQG5MKM4xtFQUYiAXDyNaCTUuB8EwLvqBWD7",
  "key30": "4SmZeNXJTcAgoEivextriMPEWPCKnvau7WqV3DjZGHnryT1MjtBbv6wg6n1a9JRgofYkoq6apEbv14JTbEnKofmH",
  "key31": "ATJDzoYCiy5V1D3GJ3N2e2cmEpT8wPQnVM6FZ6Ewnimt6hEFwwU3Bb8dEHWypeUS3hNBP9MqaYJhnFEdQr9ZQNz",
  "key32": "4iZF5VQVVTpJMEwSVAmXHMDMz64RH1s3Ltf6gUTqKxeQNvryp6AaCTQbKwa1bkAmrRRSi1UzpAfLCXdUVo3cuzUK",
  "key33": "55wx2mPP2SVvVyqsFLoXW7nqRfDJRx53eNwo8orzFweiCLHkJeQgk9h42aC6S2EkBKfe6gRHHXiUN7pFyRew9Ear",
  "key34": "4eECrXFJGhYsV67jNg8tKo5QJM2T326VK2n9WGgiWvhb9SXAtw8VAPNCF9aNuakknAeBo21komhD53aurgLYVhu3",
  "key35": "3zFYN34wL7eL1cuTFR87EvAcANfSx2VJkp1Z6ADwryWaPnwU5wf8DRZzk74v6FtPGoKfAK9KXUVY9XG9JW11H8u4",
  "key36": "3WAYTv5Bp3ptvZiKkWEAW1XQK33qkT1srWDcZGjbXvwxYW9bGo4vkKeZ9kP1kuYcymgh8Mo8b2hTD6jrrgVEMpLD",
  "key37": "5XZvP3n2ZXtmvtBxtEUPWXrEfo7y2L1CVrfrCcqNove64hgVVyySRF554r5zYL5zkyzFDsKvvNkj11hnvAaKZEdx",
  "key38": "5zAud33TxUz2YJFPnvWB6d1QmwW7dgYp2tmuh7R2JvcXcrPmHSvZgCVuWG5ZWJ4xckJZW6YSSyhDATsqBqgRUaRe",
  "key39": "3DQ5YizRMfu5KqrYTSPYtbTj3U9D6WU6jvNW6aSiLK4wTNVWYg5JvFnzep21dfQ84AntmPibvzmwrSmrCtb116xm",
  "key40": "46Phs7Lptz86UnJFgFh5c5FeKnZaDJ5e9TgQQhGaMXs4oQEPH5v71ksCze16b34dSbvkhAZwBpQs1eevzrsLaiaN",
  "key41": "5TPXAkeYSrAi5kLD6mYMQRE52LBATEWyp6Nu7MGpFPd9HWS63uU7uQaWE3CcLcfKYxdhrZkAiP4v74qhw2VPySMb",
  "key42": "2bgvTpE1uSJZh9r3tc9cfC7fPvukeN5X22BVwqLwsPMHkFX5h4THC7FD73eTnBkeSyqFnPiJMm9Nw5rzk21Hhj7C",
  "key43": "6v7stGvLquyr8iWQhJvsKf4P1nnQ3E4ehHumVSumpKZSR8rJQm7wyk3jaDtUcsgS9y2RufdoKNpMcBgq7thPtzG",
  "key44": "3q68KkEN68Z8sEFWWWtHCkeWzopQ5mt7uSZLsMdwAaqsxWKZC7gHzYVn2w7hqTMwp9C9krHH2TxMK21UhQan66vU",
  "key45": "3zVeVWEP4WLX4UQFLKyJcsXfCKmgTL91z9jGhJB8otXaVu1YGmb9LjwJzmfWTH2QNHDkhYjhqX2PmC8iGv3awdpC",
  "key46": "5UfkR2ehs6UHRx2ZT1Aa8V7fZkwc7crnRrGwsRCxqKxFwcj1fv8r7LCFVyPxcffrE1zHSga8NNwSytnsYtPxZM5k",
  "key47": "3LFzMBbkd6c1cwP4h3XGBpEARW5Y16tuwFTKcfUi7GSvDQbZsFMDQ5z8MVdkEoNmA2NzgDXo52LaG9ALAb4FMFcw",
  "key48": "RpdS91tWdqJ89V4hxuQ4fyuJEpujSMJDh8YbkCZ5w4RueoqXHvhsEhaw4Ms64yqko4GhWngmQiwnWRqu92Z8vaD",
  "key49": "nMzCyuq5krGWWLZeBcHR5ceBrm4LiBvkZUwUYkRmS5jWTBrDQvFdMgpLUnCoZi8LLBG5o9bVtLrJQHfDifRp8eC"
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
