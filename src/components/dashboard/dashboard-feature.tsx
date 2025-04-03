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
    "aUaezZrH92BKjzD55L8Ft3J4YFx7KiuMwdmZaWrdHLudjEKPFGbHrUea1FCSNViYsifUhyz3ivrcGNdRAwXZW7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gnVtUBow4LMkEm1fQQT4tGA21t6CQgaNyyjuyK9asoBrTa1ec7wJ2Fsm21WMVALs6K52imHuebbgfzHVUP5SVTV",
  "key1": "3pp5ETwtMJuARmE9qJPfXaTRwnGPfE3YUKX8c3ZqTNRkbc8Kfze6HfC3d9bFxE9SN3NUpUZqfQbb5pbGWJEo5R5u",
  "key2": "2vJghcpG2HAtSCWjwMxNGGgm73qzc3SEPjxWjVCva9TRLuSCf7RWGzyjygsfGXVZ5j3j5fCvTZDRPUwgXjmxfMRY",
  "key3": "3MjbJSDc8WoZ8TvhpZ1iksCVLixL2wzXt35n6BL7WQAzhygtNEoZVbaydaP3LQPCgxLNbE4fTfcWH3ZUJ7xUbWG3",
  "key4": "CSxPffpPpX7E6UKusWeuV1YaEdD2hC9JRecZYHXLtxmDnkdDUX732zEZnppwufmWtqDoUP17cLGuzwpfXhQXFEi",
  "key5": "4xY8HqY1rLHmcyHJDbkGFbHqgPguH2v3oopXzWVAvCemWW622uGKJw27SbexfaJeKfMbkZJsqxVi7crFTCKCgtxt",
  "key6": "59qUiZBa9Cs9tkF8ekVbTZK3RRRT2ggtmtfb3ffXLtLvjn2fnwzs9mLMoMwphC2XjmryaPfpUv2W87Dyavba6JLg",
  "key7": "432CJxnvUR68CDuj5qDEySZMM3fnWf5bp75GQUKpNnYJW9iDhPKRHeHxsnEkdMgcKanuWN1KkaK4JMmCntAsddER",
  "key8": "2jcYySMHcqPArT94J29AqWkq9bf39mYuXddjdDdabEwyxd5ToNNaac5arTggU1zRkBu2qFXnAiS6nBkpRnzTzGuT",
  "key9": "CCpCDfGTDjiBjfoYpWSx4ugCamJCYSVtbPH7xqwwKMqyRBrZZLRsNQ3FZ1umkFd22xTD6FWEutNn7GqUWR4sdqJ",
  "key10": "duZro88L1SykfHQVKWpHziCSnzxAijNBx3xqyiUg31WR9WvvdDnV9ybkrAufRGkyYmNT6ouropSdwXBKckvnHAC",
  "key11": "MqSbbJMVX26jAZLAJ9iCN1udTP1Z68Vxwa1nVYEaDvoHSQTiWSWfJQbd4DpQ6tmfBmpNHCW8Qk5haN68iHpLhBF",
  "key12": "4N3UXCoY8MKZibVrStsuYbLGH8BPPh3aLKQJUYy9fouf8b3Sm3uiznFSS9tL5GrtJeTeZuRyrJSq3Xf6qVUEBqNm",
  "key13": "5WkHZz15Gg3VVVq1jPvdtzY82oT8kJnKD6CXQSxNzrQQuFixj5HQC2ZMkqFaG4QMaMonYacMFzjEj3CLjTHWsKY5",
  "key14": "5Hncok64ithAhraVJviUjsB4DqXhyRVBZVQjRfMpaR2s7NHzKxd3Qq2XoKqgaUeASrfZVdkcbwu2fQiBjs8XQFgg",
  "key15": "3AfcHjM2XNVotcmQHRPAPbTsDbFT6CD8Y8PoLhiDtZvt6FT7vFJuzcxXhP13W5EP6s7KsCezGnr9uTbcEZXdwJau",
  "key16": "MnSBNTjo9drkquparoJyi9p62Jw5QJ1Sag6Y6jSHNXPoJ9UckYWtApv2RfkUKdhtXQdL7Y7wHKN1D5RYgPoUJyn",
  "key17": "4t7CtFPC3vtAUfyHR1fpBqA49uqXoAQqiF5kiN5hxXgidvSKpnsQjt9aHnC78EurFuwEJ2BKYgcjtWDKFqAHYVsM",
  "key18": "29H3koWp7qqb1yQXTZja5H2gXDEE6Z43JkX51Smwd1ob9Hju8FUP7JvfRtshNDK5tmBLHzoRgN9j3q68BDL846EE",
  "key19": "xgKUYf8jTc3dwzGk5PQoCTJ3puszXsraXNtdKhfzRVSvHdtZAMx4pVBC4nPTiAvw5XUr9W5mhZmt4vVviL4BJao",
  "key20": "41tVFtgyuyLXrkLV85ygPCJ89gzuW6buP7irdvR2w2MsNb5d2P9G8x9r8g2EQ6q1zDzaWaGTXVwWMb1BdLq5CnuK",
  "key21": "5QFk8x8pBmPY393vykYcX2iiRJNCpwnNcTSuXGAGV9aJcsEmPS5tLXE9svz64j6Ts6u8aFZDJVPKB1rJ9GpuMpi9",
  "key22": "2cbaySt5ySGKtP9xuanhmcCpjeviTA2WKdf8qZQkiWaiTf3iaN2bfnS9uLbALiEWNorHvWUxbVzmGt2CbNVoUdCZ",
  "key23": "4yWwEjeWYsvRWzx22QHBABb68XPv4VHLEbcsS1c4nwqYVD6WF1W5skXNWbkG5hhnihUogyQ7uD3B6SZU4qAPVaW5",
  "key24": "2HErMaRaSrZ2RjHekMccmwazd5FwDGBLLEVtCqmJ2Poc5VKfT6ABxcb27GWtrh6TbLCHdwf9dMDVUGJVfAaxpoHJ",
  "key25": "2NpFv5FgsGbnBfSMiujHatrAm9mkdZfQ6pbrUH8EC5yANWtXDUH9RuoNXhMaZYQij6pQHYXRJeABisCrwy6NUcMC",
  "key26": "5xw7DRDFCU5eE97E1wuRB21SHWGGfwNhSzE2fTzNbav3Du8XtdvZR3B9mD2wpCmkmZCibi29CHwEctC8mCbExsUy",
  "key27": "43xwXpcsPRbjMgnjep34ecZQYmxJ7oeZU8jWuo6j7zWjTVCUry7eMJNDz8xaRgcoadnfND9kK1y7hpS5inYTKisg",
  "key28": "3jiwApWYdsaJrfKUNWuZ5NkUTrrGhjN4sfCR9LsoruMgHRxxuKDaUwr1McZyiGZBf42bn8HwyGdvLS3iy7JAwbmc",
  "key29": "Q6H1X13B5dWFriTyGJyqxtHCKp8ZEDdN6SKraJQkMRU2zzdjpWNCX8FgUyreWXLEHS5qeauZRZEwuaRtN884Ehi",
  "key30": "39NjUSNNSQQiHNvQRNjdWdNLKRYFyYbq9u4c4WcEzLcVnnQDX9RMCYKENpZysnufUZyhwoFADi1qLb8DyJ5M6CAi",
  "key31": "3hMxAM9Fyvjc4RoJnXc7xFCHHHQWMeJSJRghqZuHLK4QivczqtiuJGWqWvvZ3YRwEKRnfQPYVyB2FWYYv8rbgGmN",
  "key32": "4wkGChx3Ui1b3jRVKLTdXnAmKk7gxyqpYcufxpog78nAjQsPWSPxPCG4pairDVwXPGjNfjktzEvLUjHS8WWauU9c",
  "key33": "6ph9esq668Ae3xSCuKaWwKAFjzbHjHgQJY7QaJnTgkP1HLyRVkNqWLQdQzwTiSv3P6LNFHAE9FMUYh9nMcBpWYU",
  "key34": "5HWtag8wLcBzaawHHsDdULnwZjMXerYjE5wuE9GW4xHPdUAAqRKTay3xWSpEAvQTm7quYGtxbGdxAz43pffuDZ21",
  "key35": "55aZ9g9SvT2aTHTJAuXRvkHmRszfzgUcSA6HKYbgv142c6erQEWPXLFFGeS2rX3dHmVfFZwDWsZJ1zezgqefuj2V",
  "key36": "2nSXMmWKZfhrRy9zZJGH6aiB4kzFFD9kZMYPebxmH2TgkYTigSDwccnwd34pnQsEkgNyetPqCqH9CS5Jmi4xMRmM",
  "key37": "CsCutJyMPdcbbdsB5rmeeiyw6irNmcgwVJNU75zesHM3gjNWWDShL9ArcDQMUxrqegsQk2Xw1RQKmtKsFinsVAc",
  "key38": "2dAfVz7ZF1C1EHVMDzPvQujAqMiPrFbnrF5JzP4YeYH2iWfBWQSknfRwWPBFrX9r9oVUy2zzE8n1HSYrK8pNWzL4",
  "key39": "3zK77NxutkAKQKwbj2VsFWFx3Jx75bMeKDnVzfywoEbjGLjYHr5oPfPH3H1sCnvT38w9kskeEtPLmeKeidNGQJvC",
  "key40": "5dWPTxy2jNZJ8wF8sb1YwsAgZbgGhnJEMq3hTUWxLpukdKVw1omhvBgwG9kgsFuop7U7GnKkoKkR1nVQazBTtawU",
  "key41": "aCsQnj5UqSPUjMMB5kZRFzAbM7aWARwXJQEcWGpnmDAnpPnVZsikrjTX8xzDKWqhzwHtd8ZiCrySamx9kdn6x5y"
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
