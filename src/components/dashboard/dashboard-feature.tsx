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
    "3RMMrFAK81bPmGg6zwBJCvYErReFxJaSYG5BSZ8K7H34JueZd6HCyw167jLiVBf46aYn5aczMaMjnCyWz41H9GDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HqYU2My4d7rsHbnkwHh2du3YbohTiFwt9PQA6cjwTfrJjRZ8usPnjR8a5SeJ1qywV3FJPy7AJTdRV8SgLkfTjyf",
  "key1": "2tkHSX8TVK41SkH5EB1P8T35SgGy73B7DACkHvVH7eJZHwVz95tWeAq5sEKhq6dPvULXQtAbUZLqsEW3y9SwmPyW",
  "key2": "4infyWaWAbeQLMs8bJqx5D3Fheh4aA7txzdSc2mVXSPLh2Av8FrnhyBdyXz5SdseRaNAv6GmjRzSurWrrCRV3yEp",
  "key3": "3sY1wLQswKa9DUoWUZ68qhP4BizRFu895sptyphJ9Jrqo5EEnRoE4ovcBEGhpy8ihTwuu5ew3FaQmiYhSSah2gud",
  "key4": "2bUY5gTmim9Hxp5scdQJLSskLBLWBArxm7H673GZaWVeMZq1posMGNdkUtkzxkjc1CrDEikXqvcye4YF4i8qmdWc",
  "key5": "3tQBhPvk1ZQUdiTvBAjqjA7PXpWkFNDB7GKpFZ8E77gGwRjhiPLivvJsGMoh7kkZ2NJ6Jtybaf54a6vvdSzwVpAr",
  "key6": "4rrNFPiXzZFGzULYcce5CWMpNM6dE4Rp3pHb7GzPzLDg63h4z7C33e35oRVD6urcbPgVpziybxbLksY7KACujBAf",
  "key7": "5tizSR2v8SE1Y3BR7pADGAdG4NKapkrL3JA6exgF2eZLfsWYZbAKVCLaVtoh4Johqqo45tGy6WthwS9QyK1Ctve5",
  "key8": "5b1pZnR6q8VVxP8sDw84rzafFjkpTnP2CPdyM5uxcKNsJL3GKnJPKuGgzms2gLZJj3uU9ijhqtGKRVMRdWSSDfPi",
  "key9": "s1Q618FneJuMnjuEz6XKjTjtWWBusbWbfPUTuGU4Hso2NjGyKnHPWoy8GVbXdLdW2kyRpkZXpxYKWoq6p6YjuLo",
  "key10": "42ZkDNxBXqVibXFShqVhuE8PyuLc5fw1DwijZ1MaR5LYK3L1fA4A58XnUY8fBkyMQp4Qji2AEzgpLt3kWDGibCaT",
  "key11": "HwW9V9z9oiegjf8pwsZk4iywLbLFU8pht5sN7Jtecs5iykVTMwhuCDPby4xaumWQJzsfgcBoGaQyESCaa9NZbur",
  "key12": "23VMMcFrBJwxUx4BzmRhgiJEbb5AWFaUpsrPDYMse8FGbaHxNEgkJykAhrx9cHVMwsWJTKQ323LdaaxnBct36qwT",
  "key13": "2MScNQrob347mJkuMQXaheu4dhVWWvFqryuxxPrnP5mnsbx7vHUc9MKieMPfNPzQpD1iEDjV12NEaDTuKBdqTUi2",
  "key14": "5fbkhCtTSPKmWjkwReg9A96pMb5P1A3a3nPEHuAhMeSMhkJcgBYsYsk3SAhADX1wrT2bgYPUHSKZQYNVq4gjbLp3",
  "key15": "2AnwHdznLn93WAdVzut8ZmC7auaNN78WgMgUJHbRZiPErtFesb6WBuV9R97oArXzsXPPgKx3AVdGv2QY79ZeGwur",
  "key16": "2jfEs4qXjPDbE6H6oUoBHTf4zMZyNwWL4qxkzA1q9TL4VVLwtMAg6sgtLYFDPhfFoxi7kz2zeuYAReSqWFVAobV7",
  "key17": "5PJGeETVFcTRh14PTMFvqAcSn8nc4qrNnxJh8SvqfmQimuzHsUp6AZCRvDzabZ62j2tyyqbgmQvUo7fpYmPESkdE",
  "key18": "2DcYTrQZaXQhRPPKFV3HHWcs36r4cYCGQmDDhMJYXJZRPWsTquYbgX6mUmxwz8iKQsbFYcH4SVzJK9SBHrraqEjo",
  "key19": "Xscrz58vyN4mghEmcgbxqeRkPJgxQJY2BsJ9LLtdhNFNo3z1S85DpEDV3aJ2zx2herhhayEhUihiomQ21pD6SPs",
  "key20": "4rvcXtYbriHVhVwkEqaWYKtFP7zbt7obzBjZ9WKQmevGq2kD8uxW5NZa9Lo2o7uRX9JgzRdkh6BEB45yLGsAhVcq",
  "key21": "4dBmNm5trkcu8aeyToxGeD378pdyY2f83ER5jqj6D1tUSi5b8DLi5ZueXkdxK1QnufYuU1ycTrFqR45VZ5Ei2QNY",
  "key22": "u5g1JULsyJzy3XZKtc9KfyaENW33k7FUF4YZv8GVMcxqzyyU1aytQs6nSAVrdNTjhNGkmyBYRuWBx4SBBF9va5u",
  "key23": "38nzUv8RewCNNWtWgMGjzt7ztQse4d2G74UoWT1ozgf2ztLrgP9MxcFSuwqL9Gbuon854U4ao7Zmwu5rbQk8Mo1m",
  "key24": "4BD4SPhp8ckauMLsbyHnVNXVf8niFXox3U4Ls22ZBzaaWBvzfrJd5vsqQYe8qdTmiAVX4PvmymYEq3F4PS8uJPXP",
  "key25": "4CmET3GB4nkdVScHzA1kTauoMvoDvFFxfj1Gjoj4dScBz7Hke785JP5h39dLQ7YDrKfe5pFDdXZNkZWrpVr2orwS",
  "key26": "whsb2Y6VhawaDyundsy58crJmUSNWh6u2kkQr6rYz2TMveVATwKXAk2hWc7xnTmr27AtoYCM5Qac4C5P1gMWLVT",
  "key27": "2dy2Pkdi16QYyN8L5gBCNx5ymuQrC4LjdbLKCMULk8EX1Qi59TkNYCPobMME7t814MqopkCM6zgHirargvhX95ir",
  "key28": "v4jRHzAaKkqyYFNC7NzcUFzjwymn1gfTNm3EGtWjVJR4hX82AfRLDf6Z5WWHiHFGEnSgy2Jpa5TgokiUG4auort",
  "key29": "5zZMPRcSWyxBmmmCJw84FcU5iW9yBgoa1mxwq2PE6qEvPCrFbt3tmPu7RhyGWgbQ9HDVo2uER5FmzVei6s7RNBg9",
  "key30": "5wnZT32MdVYmiLhRVexdjW5of3fHLAUwz2WSznZT3RJzpd4e8CrFB9HP8DsaLJe5v8i2eiDV3sdAe78Yd4buvGd4",
  "key31": "2uJwhiBWq6SPrU6TSdY5m96qiUWbMa3LfKeDboF1pt4RKDP21TQAZZ3BPcCZwwrQREwYp4jGMQz2fxoDtahnr9c6",
  "key32": "4Yy9A8Ca9X3SsQMqtPiURxJHTmKxD8XekecVwLrDeSHuMASVaW87mxjNrUcAVKhJhPvCMkzJFFcSMQrfDMHqYxsz",
  "key33": "3JKfCMiLHy4uvyDV8LxgdYiejPHehoSMcS89jEyECkMunERGf36FHrrjmymehkop7RsZ4kiVRUqR1Wj47rqPBahg",
  "key34": "uDK4oR5nuWab6q52Ucrrij3ucJQ7EUnEPbacDtkJuNb26BKvtSF4ynPRBFUdTCaiQYjD6eqe4v2NKRi1qcBxqFJ",
  "key35": "4WonLAVoBkpHosdN6tfzZbnzkTvfBcrh6HvZt2zDHEcbRWpfefNroRTnCrrR2YSuiXZoCojr63TBVjDqn6oJJhJs",
  "key36": "57fuNrQawVPoX6mZfJr3MGJq71Y7PfPy2rjySEGrXmRm5m3S4RbwKDg31j88G7oRRn2Nx5qE4dY9yczghsUwnskW",
  "key37": "3VBVmdURe4DTjzERDfFRavJTv3PEvnJQMyGTkciJG7MP5YoJMxqABwZMFk1Pp4P5ZyLvmVjxrDL4vWnf8Gs1Z9wK",
  "key38": "2zrW2WzcnSYQ1QL3Zb1SYPc1EhDfbFWG3GP3LzNP7V1MPiSq2uqhe2x8d3ywGspRXuYgsJXKrggtsamW1NqgJEKi",
  "key39": "ku9edMHqns7o85uYxwSengTutbXC5arBQMFGy7JdsFGRZmjZ7KLBmo1xqZDUpNepKKvsrkkU5vys1Qoda4D4ziP",
  "key40": "57iTErQDDYGEGyy6daEaxAcf6haoRmVSc94QVnbfdjvyFxiurcAgqaAdh5XQy61JUZVQrpKqEvtGzdB9GdHrn4hT",
  "key41": "5rK3oZW1yVFHXciYTVe7xbfrQvJq1NJs1Ct4tBpwnirnHwHbdTL2b7ACDznFomP2emLavRenRU5zN4r7iJZZLoDg",
  "key42": "5zmmaEmsBdiDa2JRWk7Nuxo4RsfFKQzCXkTjrmLwENQpUteKzRiyvffuHdzfVvb6d7hFgp6q59MrnXHHSekKzy5s",
  "key43": "4i7kSMCn67iv95jd3vk4yeiaNkNoBoKWFHdKvhU1A6xeeFwikvDTQorEL3FYK2ed83DaUQA43fYRiPvWfg3RkbY7",
  "key44": "9wVQdDU8x51oFFAaSWtyYkJRzSyFpnkLBkZkjTMqvHFN4DWwppgk9AjJG7jJbSjndk11mrmiFDz56VgEZXM9L76",
  "key45": "4F3188bNhCYaEjFZNNwLSjxeBZCAy97dZKpWSRbTJmnijvUGXJ2qu7v6YxyqWYVWtm4E2oRW7BdGg9TCzbY5Essg",
  "key46": "2AMJbKwYWb7zB4NoMaWNocZ814LrnDxifsPBVVEimttWfVHW8U87KVtppL72n9ajGQsKuF1gG1CJzYqJViq9iZ68"
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
