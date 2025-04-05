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
    "2Wxr8uvQxpiumbgZsfeNH3Q5CsFsBajC5SkcUX39TrNjbkwB7fDPWb6mk2UKSm6ahcDqXMytABxeVP5wK6oCJvZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GoqD9UejpXGUYNzyHSAm1SaDS5avVojaVAvYUKSwVT1BqyhTQ6NpTiiWwSrX6my4bD3JfeY35m7K7DBYRGURoPk",
  "key1": "2YPi9toYT9szCYTHBHmQXyUXvb3DouoYgpAjP4UwUZHis1wmqprE1xsJzbBhJ5MsomC7C2qsyp2S1RvnSWL1qGjz",
  "key2": "4HiZfGMngTymTxBx1P4Hjh12UZ7e5XNyiKQ2Xifox6z4MXmBzF5xM8rNV8TWBAwAGRqhx6TEZko99YsrCsQ5hHoY",
  "key3": "3KoMfGqsRWvsWgRNshsQU3KsCYncfC41Cibh9Py5jQ2psZw6mMBjNRYcd9YebsL7UvfKSJ3wuLGWPFaRj3ERASxo",
  "key4": "3tmuEcofJAnq8KyRw8sU4V4iqcptVFqCYTUAwUkh615YKgFCwPbnFZ8oVYvtxmgwUdSptnccNP4SsFrQwEumRMRk",
  "key5": "2W7ehK8cQjYAaFCba8mZ9JES5MWeyVhQ7wiif3r2CeWeQNTR9NDnFMkYbayJMyiByRCMMHosAA1FsXmnjCbMtyrc",
  "key6": "2UiipJLQG3sL8XyH9eiCwzwqnyKmbQuafe7Kt4iwQxifUsDbMbdLPZgXeGwFg5SQFwifi6JJDUj8WyMADyVD7dcz",
  "key7": "3Dh4v3Fv8Msg9PvNarP18TmWtJ8YvDroi5JXiNtxzwgw4S1AvkbJQ5pU51T7WtNNJiK22kNYsGhAtD27vX1c2vJ3",
  "key8": "5BpLD1BsjcqwNun36rBZJJRBi1ZHW4czVjtgnSZ5XoTEUEqfawBG9Fr1awi1U54Yce6NFC9acjini5o3w1Ycwb4i",
  "key9": "52TceyGEy25qZGpToTeAyqXiWuiwSjY7aD4AJCzwJJsskDkv5fV5KKEnVqCCByxsepCYQxcxVbGZBwwK738Sxn4x",
  "key10": "2Ex9STTa8Tpux9oEbjDsEryYvVCPPwo6LLVAs1DmuwUgBeniV7g5uDy5wS6Meu8xwcritNGkkv4oBd6FF5naG8yR",
  "key11": "4wkCUprrJeJAxrEuDHsYAvp5fusdLxeGo3j3oY7fgN4fdfMyrMjfm7MqhTE8Qrqiow38279eyVRRp9fejepFTp1s",
  "key12": "4w6kTbeA2g15dSkkX3Tg31rbWu3YX24tRyZa1pXuLrndrudFJxJJmAcZn76nwqeor9VuMQ7TpS8X1Js1TCnsYiWd",
  "key13": "4QqT2JUt6KqG35JD5pSfv1D4R6Gr8kVK6oMJwihMyJf4eKqwJir8vR1AsH7MycMYkPeX38NYW8hMT39SMfB82cYy",
  "key14": "5NXg28HvZcxWKb8ZZW1YB5NRn7YLmu5xVtaL5tY8rpCfdQpBB5zwowX2eWk9E5NiGYAtvUQabB8qtKw9Wax423Ey",
  "key15": "28xHWtNGWSUNPjnok2VvfJSJvumCSR3WNYen2My5ca1tVpkV4qD7sSJ7EQYznvi3e3yjQmpt8yQHxGwYaXdkRU7w",
  "key16": "5LT92nMpiCXC7Av6MvQAgZKM6KJo3SJAF5txQpuxHCJjgrGJhS6GEcK9Npcq3XWy8HqYKqNxh9vQQMgh9eJLbKf2",
  "key17": "dof4e1Rwaba4pxA2uAEGpWWixwPAQzZRbyJw2u3C9Spdjx6mwVrqczbaExFebuSWGS6Q2XT6kwZNAPvvx9wZTaW",
  "key18": "31kyZrkz9vQttq5JnYyxbkzzQ9p4LaccTrE8KWwQu1ArUyJrYSSNPwfABQbm1Z4BXtGTMpJoEq9NprzDf5TfcKY1",
  "key19": "3XmD3ejzyBftaCJ69SU92JTCM5jmFvNP8P6bxMevGSXB6aBjJnesZfTNz2dfrdNVNmPpxbQ5Evd9yPQDbr1dhB3s",
  "key20": "2KFKSp3iVGQkhkWpEysVb2nKF3G49iHCyDCtXwPe3rjMukxLJKmdoonXMXPTohSKsGjsuBaJrmVJMs87VUE9qyut",
  "key21": "hMDmkzVeM19jNTprR7AJTbhKBCiVXZsDpsmMxgDKCAznxtknZpMiFPeW1mhuQ8EAmsn4fgUG69M5eifVvBzgbAT",
  "key22": "23Qh9TU7N4XwTtZ9G7SMU2MZ6VAjyfGZqd4BKXVAomwXfSpxebj4Rmect5RtF8v4NTZRefMGUxa4ms873oxwZR3t",
  "key23": "67dribzjhbEww4apj5bnCMyVVG11RiHrSNXjsVmtfVgG6ec6DYoS4zin84pHMhGQxvUQVW1bttQZtYLEeoUubXA1",
  "key24": "5yi8ihdzHp5QCxHJdvZ2rAafT3oWvVduMQ5Swkt1g6HwP4UbNdLRbQDHb6qiHL7UwRbJaHQsaFhUvfZ5KUfUmC3v",
  "key25": "25p1iTECHqxmV2xGPC1dMYR337sSYNiiqMMhwL9pugvTcmCiXCFQDTDynqyd7qT52nYDf4uc1U133MkUBsddb1ns",
  "key26": "qG4E229mAD27zokKDfJYuDX7Q64jjeVA2fRfUv8XnbWtkMaEwZDnpeRPvBRygo3AeaXAGwfzK9fwZ9UuRtQUaN6",
  "key27": "2cXWBwRzTeUSyD7NVgHZwJeRJVw8Hq8C3Jv4uWj9Pz3xVW5fUUvxQPPD3iirkvf7aVw7wBTRpeVjTba926YVz4ig",
  "key28": "3MSDYqCtYFdw6yH7E6rLizPyW3RFZKJ8j2ehizgwuMCUfvchjrkZ5J7Y9vKgsxxhWnRuT1sjnPzkDJEdQFQcEHxS",
  "key29": "5Fx92LRmSPdmGJfE3gmuMHHMZD8qf8yVunZWLw1NSuZmK6NJXrrn3WscNX7a2e5YQDChbVer9MV8LDwTnwpE4Cwc",
  "key30": "hb2EaqrFLgkpdkarJgFBo3HdDSdEgTLsYmdMvEwzfBc86kuJ26nkLEcTyr3ev4fCh8geXoAbzuSr3aHk6XYTQic",
  "key31": "4MCDA53DQUog59DAy7MhG4CtDSH1ce2ez9ePjrR4gbzkmGj4AHEY3f2XcvzLMZiZpTNCu5pCT192n2PC6sKxRdaX",
  "key32": "2m75y57B8BjMMQ24ELAeLQ96LZR4QhUTpq6oGE49xJUAtvd83zQHPKdodNwomk99Gwidda2ESDVYespWUV3gHz6z",
  "key33": "5wWu7HiXb6VDimt1htxBdQGYxha6KJVswdQjktjYUb9sG36sHsQgFKjC9bKeXHaq9DTNA8uoUYf55yRKNby6VhYF",
  "key34": "2JiSj21hzppbUHBggjq3NHum5WgJoWEg9YwELgjqP9dDg14KTwFBEii3oFJB2XzQq7pJbRntZfTxBbRAVAXTgVxK",
  "key35": "TXy1h9k3MF5dJ3epNDBLVPXwr4ZKZG7QJ342WT4uKbLqW8xCpb7AsvkXf5TovB5LFENrEYfrFdLQuLp9woUTJX4",
  "key36": "2j8WKWHAFPt3iVXnjAKPmF98zS8c6qWNSoKopq6BbmL8XQT3DBwQQgKPcwLQHHtfTH6jzuTNNehkyh4nJcwT24qU",
  "key37": "BBzeV7Cq5eFnyeub3AFJyz5YATDXYVVssfam8Cxhn8GbNsJdkxqLzinXhVSQrMFNY6JpH2eFRmnWXRTYUE9K24k",
  "key38": "3BmALDd6d51wjyY54RTeqckvmcRv5AeMkTLmyGSNxNYRHGy8fPVMDY2s8NGyzLYi6G7EzYxENtsgebH6UQ8bxqpt",
  "key39": "2ACzHDAPPWF1vZEPAitQhC9wm2aWzR5RdZJsJw5jq8h1qEoEiX5Fwm7ukdYT8ojGsDuSDALwyCkbV1Jr1YWurVYJ",
  "key40": "4EknVn1zbxW8R5TZ1npRCH9ibgTEKT639vStWg3vDHEqu3JbSvEP55d3tvDXYF7WtcyLXE28p7HAgByqptMJxUwk",
  "key41": "5zUbsPvtDjauRtXfMBaoX2MMYMyDo7afvpYuohCbQvAGQw6EXzZhy48BhnFFvfMwFtENVcdce8qD5zDYTmJ9rYhj",
  "key42": "3Fexf9gZBfB4Zu6MU9xsFE49XLjUEiKtFKPTK6em2eCYpDNSQNq2dbYmPzecTS3Aj3YJwA2uC39wGwQwAbFBNN9r"
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
