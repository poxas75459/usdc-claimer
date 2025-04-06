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
    "52otRb9kBp2jF8kipEssnusWdY1vQsRbqJ67pG9Ph5YsfJ1QYNFe7udPkZF9shQkR9ghrxbjxNemcKvjRknSk11a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x5uSEWq86EgfWcHzjiAeafXBHmvvvzWiSxZNcFmZh6fBBkomYw7d3nyk9Fkvz2sMPsaXzkeZVV83mdEJs8EcLuG",
  "key1": "36rWAYk9hSM73BqDyApB4e5MfU23FVqtwVYUAXaYEL67feLm5aN5J4Q1YBbyru9TSZvGCEiPGJh6zFcrubgW7QLx",
  "key2": "67UabGJdJPQrgfTFYhWaBAPZeBWTndaHj7GQt5it9Xncy5KFV7XGPSWv5v7MsNZGN8RWEAEdBekY3yHdQQRPi1GY",
  "key3": "5mdBsRokJZy45tHjQ44zNs9R1FdDjBJ3v1qe14KKoprQej1yu3tA9kFQaBHburEAq8UhhxfgmaJMCrUZEVbFyEm9",
  "key4": "3RdjS7Vi36mgJJ9qCMTPeUdu99WRvPXSP6DmuRsqziPCHoTgzv43toiyvHL41tsigY5juRRsN31KPYYS4vSZ68Qw",
  "key5": "4XnYuzAfQmpnA4GjRiw2vdyuS41t8TdKGafwgzRaqqsFrTXBkWRfe37HiDj9MNX99fa1HxF5THW73a8MVJVQT5E1",
  "key6": "55yySpB66yQZQBbEdGHRBfwWo9LvRSjMKB2BoY2yDPnA6GJkujm4hfSEtwUtudna4J77YAvvBeW6sSwTcgdJpFpp",
  "key7": "2uUDY99vEievjVufH4qM7qGSHce6sNYFXqTwKtdwTsFQzAeaaVkYnL2vhmrtq1dR5FyJdtRAuZXVugt2xfffx9Vu",
  "key8": "3qWCzgcgJLyfm79w6TDdxZsp1WbSULBAD7wouYMt4EhrojKPqET6XvfNdRc1GQytHC1KkuPPGyWaU5n5PxYJx6ot",
  "key9": "5Er47RfrEBqZzp8fmM9tGRRF2mzJiY5Q3Tphx41Wh9NJ6nGqj8eZ9opf2iZvDkrmzqScuR6TXBwwXkU8cUKAXQYU",
  "key10": "538a3EemafZrM2wWwBZgKHJCHndxVXvuQkaEiHHpn56DqsQNyWegnMF98UDn5QxR3cLbMGyGeeKerVLujUBSFNNg",
  "key11": "5of1SHv1FvGEPCVQjBBPZacV8LxC7qiozSX7EnqJw37yEPDc4EipFYioEdHANY8bx8QAewaswdFFtRoKSq7rwVxL",
  "key12": "sCuiw7pY15g95hn2Uu9buS3vnXeHDbMDiJvQrvZNHaCzKsxP6FVVFFhWPuBgY7Gj9mHgdV1soX7j2GBLwBuoT1K",
  "key13": "42ZFRk8wdQkphDUqrbH7kr6fxTUrjZ74b1C31ZQ6ybhiBp1hFpstSSLVG2KycaEsfcUFGcnxwB14mjwvLksFrwwR",
  "key14": "ty7pFv8NQP51qqFKaCZRqL2czrEgZ3eVuK4mS85ghR6nsPsLhdfEWmd9P8Vyaqe8jdrsR5St3krusfkoFU8PiA3",
  "key15": "jX6NHMSvZvogCbCegUAbDRsGEknHdEpGB4D5Uv6yU2tM2oGBxbnANx5EyxNiPX3B6dvTCUWEWjkgYg9qu5yCGcN",
  "key16": "5ZrfgtEajprX6hLG8YpArixWKuhxrH29vGjz5zdt7iXvB1iij9fA4Pg7YTmzMy6JqQrZJguPfKUmwfqq1mNrWFY1",
  "key17": "5jcofUiQ8scNULN6jUyYfgs2qMNyqqa2yDXZpApvLseuzHcQKCCzvq6Zzj92dy2U4iWGJPRzbdJaQmJQSGDFYvXz",
  "key18": "5uLCpoBha9BikNgKoLrk2qq5BXpVughs3mWsVgFtJNNeRdoWTWgB7NAts7c1medAE5Z7tHBuTheJyGAdpK3WB6Vr",
  "key19": "2FMoWEwKS17JMgqhk3DpvFrhJ7YRTZcGyxS3JW28Fv4GyaLngri559xWwLRnvXdMTmM3vcau5tJwm6ZbQ1LTLELN",
  "key20": "VwiQSxHCWxpVXCCQENFEiWDwWJsGyMhAvsrhfNYKRKsATkZ9VKgE1rKX7vqHX6PTZB22mPQvpzMT4fhMe49qyRa",
  "key21": "5EDRNzn3sFHiP7tAcKdryoYVVi6nHruC1MBeAn7RA74ceXQYTDnLZiSrajv83HX2qP44r47ot2MgD2xd3Qhi7Vg",
  "key22": "2oguQCLuaPJvtupCTtrR4EgTaAhdNgqDGW6sypGN2D7Ppqw9Gc2dB8mkAzFtBqqqQQqKSyJRKKU47yktzMZQQGy9",
  "key23": "366PJzTyDEmQ42UXfFQq4qPLY3rt29GQrM2yZ3fmg776YDVour3Uke9N22ippNmC6cHMEcfNSbBRirEVkDXTq8uG",
  "key24": "5TxNN85nyehtyEN4rE3TyNkRMhpgtDTsq862CLQxZ6hpCbVJp7FH9SNMwXmbGqJzxF7hVPGwxoDTYzhgRceR9sqx",
  "key25": "NcAUsVJULeqP3HVrhdaQDMBjsgBVVbKJMmsRdDQN5i4eGWvTW3gDn2Kjwbau6TwpcRm7DQR3oubBjQ8xWt1u7oY",
  "key26": "49vKDzgm1rHRk5FbMchv21huSxXwxfbiXXiUB5e3MTeSjayU6kfpCxUsDCvjisj4q7FCkiUZW8yeuR4KDKTczFzg",
  "key27": "2yC9ddgytENv2PbNcqZj4sWstFqHpFj4Kbxfb4zzK6aYVWJ4A9AUNQVR3bSmjMVFdPKZTvLQExS9eoGCKdBPj17i",
  "key28": "59yBMvGUu4Sh5Rs7DHJhBzBGjwkaihwgGQfLjkBT5USve922NWk2tuxrUFdATauAK9V3Kz2VQ3GS2F7Ks2yHK2M4",
  "key29": "4B5ddJuSwSbH8vZqHoVnd6DELGnuUxWSgyQy29GXeAycJ8qyxUKPTpHRJ33eSrYNcZGsCVzFqXcAGLgrJK5eTfgr",
  "key30": "5tRX1oWdxrp54JwhEdPMHVeEFhDEaqX6jnzckeXh9aPKmDrnZLprEDie7XNRwvnANL6Q4KULBP7P4pDN3shi14Vv",
  "key31": "xXjxtP7UYCXSE86L3vm8ysCL56wKf1UGzkzde8m23JbT9kKZdkLFYbKdY4rddoBMFbjMJkuL4vhZETVKBwZDgR5",
  "key32": "2i4YdsxcueDzZkNkeFfUVgCuFBkL4rzBpT9etna8UKyMmLgHNeoEqQKnRAWrjPzCbxTQXC8KrGf6UCZbJbycdKjg",
  "key33": "3DYS4JW6ZpRCxEZ3Az5z7YSUe4DNDaccqKM4iRC4Vc9kCyDGUNtoW9yLafgSaXpDuCR9EChHWKqe52o93XorJUHU",
  "key34": "59ZFRoJd5Awnkd25JC4XHz23ST5XhgYcLn677gQ1r7D4KKPkq5a3ajRf6tcu354JtyxKqZ4NcVU6fpcogDq8BX6w",
  "key35": "2iLGaj9iZ3UNevPqCM1P49B94xNhjcjmeZLjcjPMjeb4exyjX2WrYc2F7bFe89K9youQBiX1R6Ytb8nMdCbx7a5h",
  "key36": "486hzwgBCPRa572FBpneD8poWRDaE8mG4mH8gnKxpYEWbnimJgw5yGBJecVUmP7D5yUPAaqhfnuHPLUJn1ZDfZRz",
  "key37": "5yiBwp2FNLYdEFRbmk1NpgZ4YRR4zcTy9frj4nEoHtSuqMBBqvzWbmKLfkfd7ETTS5q8bMt8Xo2uE29bTvoUFsJt",
  "key38": "3XW36M2KTF3GGCHTLtpuURmJViqhLCJjYLbDszUeCUPd5DQSbH9tCshU8UfKLKhAQ2EtkUHK5tWZLxmXM72bfTCh",
  "key39": "59qTHLqoFuGLZ9hhArCbFVEgDkDnAT54mnWdUxMXJeREqTkStzL347tLaAqhCTJfhV9gkcC7FzaWT3Ko35f225ug",
  "key40": "4Zub4CJcmBTPrRRFXuywN3AQUUZBtNCLM32XK4jLFA6g6cAk5pnrCd2quDwb3TLvSXd58saHCjoGfNSLNE3eDWuH",
  "key41": "5s9hGFncbX7aa9dEguCo6TzHchNiPDvxcnn6zE4xhuYjqd5DeqZecwBkS9Kr4AgUA2cfSoaA823B1n59AjZQguSP"
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
