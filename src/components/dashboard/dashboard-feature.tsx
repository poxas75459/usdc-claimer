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
    "3SPNe1LYjDSPs36QovXzaWwcDSuTTgzRNpH5qdfs361xL7nMT11igQWxGQPmWxp69ZHW3Qvt5S5Zr7i9mGZcfyKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SNEa7JwmrnZCgrdLKSrdWGaKd243NcqTgkz4wn5DBRYqT8NcGFStRhJMUmBJ6Lf6UePfULFMRWofBAE4ZtRH7Zg",
  "key1": "5NJyBtwjvAUmdza5P73LT7WnJnGpjvogHzENst599c4ZPWVTYM395LW6dERrvXKdFd3aDvaAMXdz1CJAh2NEgB4n",
  "key2": "ZZGe2GsBcjCjmqJnmxxjyE6qkj4THMoGCKcyPqN3MQQTeUbf4JyLCgFLzqVUHoPMMv4aTEWSZhoALSvBD4K89nv",
  "key3": "5qEdg1Wrzhi1mqu1DooHTsNSrF42UEMDeA3HkwqXbHurEFXhVVu262a9svreUkSQws4HNnt3wAzZhL66rCxjuwbu",
  "key4": "Nvt1Jv467htEVppawACtryX6mYpNfUMmKMyGt44HesymBnegNokePYZ7zUYmoXjsZEaHMngnmFiqwS6p4f4vBkS",
  "key5": "2oZkJ8jz8roAqjojmXz3rPay6Zq9MwJF7f5tvKgWWRwzuCU9a6hpsPPqFCqXza9YmjgDcBY4qYECFkQV6NJRVdMC",
  "key6": "3vQob83D9HqNXUpfKhFbo4Cx6Pa5VY2vE61jMMLJ5edYtLSL32uAapzBMUbVvNwTwXKLXCkjpxrYtV4uPrEntLD3",
  "key7": "2vGf81dh2U5678MWydqERemZBonF6kV8GRK5zzxA9qifZQw6RCBYa7srR1upLWgzaunjxWGacxm7T5FGt6A8SQtp",
  "key8": "ajqcGUvQ8XiZf8Sh3PmbFsfAdbTG9TToo9uVdWrV4425YpdLYVYPBfJYiBXvSXhhbNQfWtEzJcjX6F8ASdU3CU9",
  "key9": "3G2Jf4YRnkmaN5qEX24XmQS53YL17tfCWQbAjWEiXD4Vxa4ad1TXPtA7gTdvETs3quA2n9ymCkNYWG16KH88Dk9M",
  "key10": "5hYfeWBnMc8kWnzMvyu8LfXKC8EudR3VcrCGGGyR9qUsMTqYAehFFT5FqVK1XLoVxHR3ifsnnxJYSjfMddYLbBk1",
  "key11": "367B1DugaxzawL8YyQjrCoBsQCTTCiWWbZejyTGnZU4A5Ftu5Kf25EqyGamsqYou73v6noaYVBRaX4bBpTn2ZTii",
  "key12": "4kAnncH8gXvJJ7QRAXEFWxgRVppWzXcCtFMpVYEmorVRNLod6u8bH7jfXGonUefay9HXMVvNTFzdY4LRsKcJqJyC",
  "key13": "444ZxuCPSmR97pv5bH8SspjBdu3rprSf7AUtSpqjdC2TVm7DnQAezem43PBUyuPf2k5jU23zUNJALi9R7LZoNMz7",
  "key14": "46ajFHvZKJZyLN3wby6HssQ8c2KhU4VgAfmwLZpErWmAnCQErLqfiUKH9FX6yZR73ih1qkA8YRdxHf2QkMpJ7gjN",
  "key15": "6285TjZjhXpg8v5wDgeDZgQJDQ9dhAfWtLB1Xj4NVHHB3rRheG5ZwrofX9uFPkQ1Bxo4hddYTLQzKiz3ZZUCS4U",
  "key16": "2C49JW8ZtmcaACScpEHTTa42jnnqn5Ua4Dt9fK1wdvp2v7Z7GpydDBGUKcSKpHjzhJLnNFe9c9U3kvjWN5FNRcHx",
  "key17": "2p36k33ZNUaKCbLLiq1KnxUnjQ7US9HtZzakEfmTR264C4Hm9yfknwSkePSXYBtJcvnNd8SZVAjB6adJCjYh61BW",
  "key18": "4F8ppmoU47cqrz4wKmqDK3bg551wBJFJqw6Dr76B1gr8hQ2eSGpBtzJzhjPajbDJy9FUyddVzJTeojXraLkL2AwS",
  "key19": "3JmpP8ZZYGwmr88RvdTPyE6AwscuSbK4U2jcnrbG84KSFCNmCh7a2aawwsjN4SkXeACSEmQLMmWDgK6nwE3B7rkp",
  "key20": "KsVv559WXJLQ3ZtCUbmY74AwEGaoEqhixGp4XjqKsvArmqKpu4r4taGiJHK6qhDPQCq89buehAATshTwyGd8y3A",
  "key21": "31FBBRzC5YmBEWBBxwE7M9YsbVPzGnVatu7Qyax9gWPAqTuuq16nNRZtzAYEG2sC5WPJgM3wC6k7SqSkiEWwQX5Y",
  "key22": "1fY2zxqBJyR69ADjMikJsaSbw1Ywm1m4bpygARTpojy58jeRT4LRRiZGpP1rd8id4B7G8rwoCqLPmRJNZeccbor",
  "key23": "v9MJrtGQu9XDo8KXpPVdkKyphYBXDE6xuujRTktddJXJnrN76C1psk1w7WjrZjBVt6Rgs48LYtTCphKenw2Lv4J",
  "key24": "37UfPj3prbcMbPNRniLGhaZakGUWePoKFscHZDZbp48HiLAoLuWrffCzd8KgxHwMmXCa5Lnv5Vr4Zfh9ai5ddfWc",
  "key25": "29TTBiWgT2BnTS6U7xoL84MgWRoB9ca1Ei9i49usyuuLabTrfKp8srcErZik3W7uTNSosKjqXZLBehfjm2LGLFu7",
  "key26": "Byr4R4FKHYWDuowkk5HLbPSg1sVGm3FtF2VUhYr9VN6TcMcDRX9b8cvnvwtfCxt1PnZ7GNEzSW8SUUHCjDT9t8q",
  "key27": "2yAsRcJpsxjjzRWr4zEXsGcRBS8cbHdCTFQGG4HjdBPsToBCMhunfJhNqWwviGD7BE4JKB8ib69uujBkuJiBUvvd",
  "key28": "5QXmg6WYgqscJoJo9boxHiftHLCvUbmCj8swwt85cpwpYP5AuQ7Z4cS78B3tji4NNPuzdV8BqTbNF1psRnCup4xL",
  "key29": "4hRaFF1exAC5KuccybDXvbELLEGVKqq6KBRo6CWn8QbzHzzBd2Em9G18VVJFULQYE6sWwB6j4BwScqaucndvvGzj",
  "key30": "3p6TtfvRw96vxNdr1a5ZWQzWHaZNbwcXGo7qF4vhaiqByP89L6uiwXmvhUPMwWdufmMm1ux2vvvWFpTRz29gNwPP",
  "key31": "2PR5M1ERdHD9QpABdW9Ve1WGNhTrGhk3QEMs3agvxvzL8JCs125WFc1bi6ThgWp7DnWgUGtSqn5DptGuzX94JKa6",
  "key32": "57VFVhqRpVpNdQmSGcQ9Y31QnSitVYMcHd9zurdS3NsZDbtSEbGnqGrPHuEqAWyTPQcRzSwrVE5gs2DPgZ86YJ4h",
  "key33": "51YbNPRNjmwBFjjRbRXsWpCbqidg2QtFh5krwtVDLBWZxcrVoDWE89bCp2jJNZijZPyanprTxUF3TdidaHNRKBnF",
  "key34": "4XFmdz9zkYFERFsnY8t71kKaP56jyhDDWvDfpcS7QmWPW3vcJWg2598DUGkCRU9rJyyE3f1PoCZ8ZfrgAepcjJ2T",
  "key35": "38kYpwr9HXrNiHwQHjxAaWxnxVSc3i9cdwYV2zPt92r4YdysBSRB3pexkg3rLmjMW2Yy2tASoQBRkdhMLBSBqFqu",
  "key36": "LUGkoGgtB66bm3WBJFnuPg6TS5k2AE4Y6wY7DQUQvvMAgjMbxg3o7kvsFjQ9ByBuh6nJ4XWCtLu9gKC258bVPXv",
  "key37": "4vqxw2UE6FHs5eBrxjxMhzds4jMXw3WCFNh7f6gSsKE4xMp2MutcYkxbGazn9aF665BGdvn6kzHXZpKtAcfn9Tzv",
  "key38": "2sT1MSeaWT7hYpwHruENNs9D8s4DuvyhTDFZWkg9mnEk2GuEtgsspMrGPP7gXRnodEgb19Kx2iC4iDYpRTWMbJxB",
  "key39": "5n1baTvbdJC1ieEuLiBLSCWZCUTnGbaFvc4nRtU5Bf6EUZoopjsSZgLEUGhUaqLHnfNRjeJCbTqmWxqxepLQFvdS",
  "key40": "3PnHpQft2GR1ZeKdYsYW2b7YkXwKf1miDfHfeApxUd81ZPi8bbHSNGT5eYStrxZxCYaS7x6eF436qg8mXNFzKr3G",
  "key41": "2HMpWQroxVpHyA1TzGJMRQEX7mafaPoWW8LvrAwCd7u1Z9EhVR9eFqAUzxvCUbLCSzFdQ19F3WbaYwB7PXrWvCc4",
  "key42": "3sgHcjBrBepqir7CoocHntCf4s33QHQ4JfKw8FDrL3dWj36E9KYmhnqcQEPBYuan61XH2BHu5R8P5MXTwLVN4bvE",
  "key43": "4MAUAEgrsYe2wUH23yr35n6ayXRAwNF4YLwGc9pAv2JYhkswxjezwn7i6KFNM5Ts9sBqj1QQ1dAvJygmnz2rcx6i",
  "key44": "3WVUa3akrXQHRUPTqoKHssLBiLN7ZK8UWwMxid7m3CDqmGzxAX9yt7s5bUzneDd7Rh7FrnE9ap1i6Hnrgk5DjaJE"
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
