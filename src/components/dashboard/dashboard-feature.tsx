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
    "4guy8Uzvnzb7ovs2v74NmxLxpLHHB5EDswvrbEFrzqHuMnhXjXhrvyM6e6ZaTGhoYiTRcUcXNvp3tAqnApBWd2b9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AroZB9TeSao2LkuGL98erhWc6rRkKQ6MCqBABQBUSEWLcNaysVKi2jZvnRZCynJ4MzFnwHfR2eUquPW8Fr2ydps",
  "key1": "ho2kBrsbR2btotJVCBZwSJVF52uZCcN7okLWkghX6YoYSEtp62o44igwnT4Dxm9VRZz4tAKXcv7QK8MDB6AJMGo",
  "key2": "2zH7QpkRPBre6wVTn2Kv8CMPPA6EiUKWEiedv6RQdU58vPhXpLJzasx6YNmPUpdSJys8PnxF9VdKoT7dAN7svKJN",
  "key3": "ymJ9CBeZ6VDjBfbYvyUyDWyv7cUBq4B3f7QpTMTVfWDpAmCP262xLGiJxzpUwBxMwukNnMzGhpjsRf8vEQZFT2K",
  "key4": "d7FFRnLW4pq4AQWqfxMSDjfC55v9DCWVDL7sTcQ4fLGAUFwBtnWL6J3XaeX9qmCuWo4TmT7kLhQoq4YYJS8bn2x",
  "key5": "285NMxr2SPQoV8YiqtwqJRFGToWLY8nvxbkxTCQ8WMJ1ix5mX1yXqYHcDnXzqYtjDZKEhaLEKuC4qrWLzNgtN8cj",
  "key6": "31xc4kJMGmFhiSeEJHY3M6SR9knKvM28vNqkVXaWSarQXeHmszc1ph7kxoaa7EFMPGFi2XpSdbeCC7sqNoKCukUZ",
  "key7": "2HjEu9vYWikVL3UHBcU9ocJVW5e4uR6JFgUer8awnnMgM2tttGdYDE2njRxCC9fgeA3FdkxejwtiSyBWCuUshyGJ",
  "key8": "66nM1kB1WuwFiGxtD8n6mKWNFVEY1MfAhodUVWvdbiJyXsto43Yg2JSEMXw5aSVyX3aWYN2veeARzTczdWL1CMKR",
  "key9": "2jgGzmrPCf5jkLLFufoDQHxF7oDX5QM43x6JL9XijcCzrdxdCVnyL7iwkGdspLBKKVbXPXqoEQxzneKHePN8RB3F",
  "key10": "4jfoz9WfPwJF6xomHfg1fK2XYNGUrXCWbUWJGttANWJcoNcT95QD6xXHaYWWok77r6xnF2Ygcyo1hwgQNLTkfkMZ",
  "key11": "4YC4yxwWKtjKqX2thS4rnp6CpuMCTLjGtdGWA6SMZ2SRhcMHycabVsWi9Do9T4ueVMZEj47tNcaHXW43qCbxEnSe",
  "key12": "4DTDJFXbimep7gujbJvz7sM5niyWivp3XuZSsgNet2YexPVzA5PUKExM5h4RFAwfT8zDnEuH4Ry4oXbCrk6B8Zh7",
  "key13": "22ZxHVdhXXw7qYLTyv4wCi9FevSgbpxhPZrm9FCLARvwW8o7PMRRwos1HtjNnSBxRbYnRdGF1bqrbSsUXf6G1ieL",
  "key14": "2ZywbZzbgVAirRxFiz5o5MWJgfbf4FLgdwSYNx93TpyZGL3ekgXGyXRii3vZmxuGTmkZ43xBEC5GbjcZR8yB3iEq",
  "key15": "4LwBkgMRiVpxjZyEcctDhbQ4affvt3fGTo8rkkH2gbkAar3Zg4NkcHJhFe9QMPvCReJyKs9Ujg7xK5dhyGWR1qR",
  "key16": "5Pv97APTj6tUzPpyXvBhVD9ZHmNn1uxft2b6X2Art3otBKxcbDxgz6Q8arFpoCecGppMrpCMiTinZQ6yBZDnWwUS",
  "key17": "4y72RMbHw9nHt6XrRziGk4hmEoRVcAcU2X7XLLDiAu4USfEgVFq7uQagTiyBgja5AwaHAHoVXa3ZVjxqV5sQw79q",
  "key18": "rHWLKTsi6Ee5jgfseqDGMFSdjsrcuEDkU9bf8UvGiDBQTACNLGZa3Uuu23e5ghewotzjyqC1gzjfZMwZ274YRox",
  "key19": "4ssEjjG5DKTjYJGYspCEXCf3ASSLEakSa2d9XipAS4KugJ9xE3dJKT5qn227DhYtKXyvDsNPvjXRZXLYaEEsVioU",
  "key20": "2iQdNGWPqsRLTrixUXbcDxiuRk9XjBVauoGV3yQHFXqJ1Y2eP9XcYtUm6N7yrMtLDMXYjCFYUMvsqwFeYMG2LsSU",
  "key21": "5vz9gGUi9frtvNkMXDF6vH8yQqUUnfFKdgkM312FFyjDZzfukAXdP9KP3xDYuPakXwa4fd3HYsaZx55YuT1ubpNP",
  "key22": "4iXLmchxFL3XcTCUv4fKcBu9cjHV1cKj1PdadfbL5Z2AHWGkMQSWVctXcvKBpPEBWAHtPwx9wpTh774s7qZfroDz",
  "key23": "CQeBWp99N289zDmujGFktk3T6emyEDmThFKcwT6uSQXMtN7KRAJsiasbiXdcDmbZvAfzW2U7G6c4a46UbSDp6z6",
  "key24": "5vfHy4pR6UxJ4c87fPbgNbTUj24T176R58QCu5EEcWgthF7xiQ99u55JXGk6WSLubYuM42iZYn2zsF3Gq3wupdLP",
  "key25": "4Sb62YyoeHFdChyYTeoSQjGsrgWfad5oRTMJWiV5k8XcunhwE1CDzg4feYsaY4rKhMzcsWZjAWHRUYwYkWwFENNP",
  "key26": "4oZ3aDqM77bFM38QTu4xdonGitF1fWnDVuYN4mMMUxN4rbzP41fdzaLw44vjhhNYRP5ciXtXtoR5gSwjfZTi3GRk",
  "key27": "3WrxQtU2NGdyH2ev5xjFMq9dE5r1u3TLatSEJQH154gMK1kqLDYde4dPZqNS3WMPWpEWndu6EtdQdWXrWG6GuYut",
  "key28": "2aCN6tjoNCrx2kmqs4TnZMmyCEKhuu2As6EauwBgHuNHb6eeBndmzREGNQSVsP5DD6ykQfsohLAwhadQeNsy3aoi",
  "key29": "27v8eDvc6L5shdpSoUhXCAnjjsNh1uaYzvTn9VXqYccKCsKHiR7xCmHdRKEd8ZQZpyA1TbQGsFuYVswiRqt16kg1",
  "key30": "3fVuskLCPSTyzhoJEvAWhrU5Yv76dioxe14yW8QhgoFabzw12XfTtTt95C2LGANj3oewNDAeGQd8wTbS5Xa66pzk",
  "key31": "cCYenj9SnHx9NVnFc7vMyE24kg6Rb8Zu69P2YejC2a4KwpRHSjT3Bq8NqYCoQ1AmqQ2FnjtzY1h7Q3163jrwxM7",
  "key32": "5ooGYezdU98ULQ2KvH9cU6JAT4NUCUfAUtn9Fxv9XgmC4NNXrEf52fnu6t2AA55Z1M99sjnr7DZW2DqXMohWhEY8",
  "key33": "5fGr4pDpSEewQbSNjzBWrXoBgihM2QmWzVHYJLWdVsmBdBL8HdHjLgzjYPAD8P4neTQuNovjoJF6FJ57h67GuQKA",
  "key34": "2TDs8dfAeFzPMvSHzwuKzGNwqQXidwnQmP6sHEDAKEhDiURTnaHPytc854kihTAtWM5rs3eDP1VgmqKM27F9b8Sx",
  "key35": "5S4LPN1n8qo4SZMtxMaqCNayb5ibmYuNi1etQb4nM3yfr4LuadMzqwD394DJ81u32eKc8C2NhrzzrBXYS85e5AQK",
  "key36": "4D5Yd5RHn1dgUAxUJ284tLPjKsrUfxQad2o5MaS1jXs2Cckn6zCPw8jLFy5KheToqCctvWgj3bzCSUrz7YeRCzV2",
  "key37": "2uedETwSgGeyHwQ3mT1qL3F7ykf9tTo58HR2nRGVTgdpXn5aqTHQLcXyW6ZFBc4Bf14oEWbN62HatC2s6diiQWcU",
  "key38": "2j4n1fZFBABZCfR7EmYxnCtx7cfXZiqrAf7shbTe4KDEye5WDWqfTNv1kZzPPkj4aDTxHBeMnGVqzDUePNLYsFLL",
  "key39": "5qhP2rzgha29N9PV8jDxJVFuyhkjDLgRJeDp4PppQiJRnQxiPN8kDZUS3eev2VnH7MBUJ7oLnxFWF4e79s5nkn6w"
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
