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
    "4cdLY8US5vt4drRZMAG3Covu9NXQNjZR85uGbL7rSLfKbaK3vWhMXohPyUhsFiuVqJpMBn2tge5zokodquwJrfTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ckx2WqCEPFtuU8MKiyoiSbpYQM84YAF6sakkEPzyopi5nDQ2rDm1mah6jmkr7N2rMXKgT56pXKWiQ4JyyDZKzg1",
  "key1": "3JejTmrHmz3Tc3mUPLuFd6YtgvGmoPQv2ZAFqZXTqtC929NwQ4EHpby2widpsHRW3c7kSd2fZqok1zYLi7TzxVYE",
  "key2": "3BCjyhGadkdxvkqMNa5E7dEavM6wifN2bwYctMv2WAdJ8Zb3FmHA4A9D2M4TNhNUqjrtrnuGLNoeTFZq3GrN37XH",
  "key3": "4LXvuAN3VKh62iKHVn2Gz8616sULuTH43Vv7ozgdVXZCdKKGGFgorhfu8Mm1HZwNZB3pdXzoiRar5gvMnZvgiv9i",
  "key4": "67V7Eo8iKCWBTsqYJk5i2acnyfWhCkx8kJa5hB9eCsUsN4UHvM6u6QHv53ZVc5GFF5sjzpESeqZsjMSLNiqC5WEm",
  "key5": "4mC5h75hqskpSnAvznD85xvu5KNum4c4Lv7WKiKvmckfq3LzUG49qLXHTvqUVW1S7ES1jrTsowPdn1yb1edtvNEP",
  "key6": "612B28PnfF7nDFuv3o4sBdSBodQarTdyMNbkw24GwAeWFuuttQw5KSsdTYuDMtMA8acpd4B7k9cnoX3vWv2mp4AR",
  "key7": "5acKnrN1cdZxvQV8YSsFnW3vZbrbhV8889SMwspLEq1Cxw2caudd2u43WfQTfmxvrj44rZMnJiPf7o191GQdhJvj",
  "key8": "4T1yeKNXd63YjuYT8AypFVBeRcfu9gFjBzerpYCWB4KzwMVbMYLnkCVjAQKEyA2xUjvGANWjMVnyQS7NiQe9ucxp",
  "key9": "5kLpC4K8tACcMJTrGc7yEoqWEF2VqXBwGXPGsBbYapYpuhZWanBmWA2yoXQUWF6uWmYeQ3m3FPSFjZt2WvX31gRA",
  "key10": "5bHx6fAxaHaao7vDCwV6M3ExtoFfm7SF3HgEGr7KTcD4aXiYGJn9VgwKn1RPQxwFLybPea1CdpefAkXt2uvcwpgK",
  "key11": "4yqVRKWvTgnCJix3d2vY2nD7WedPjvRLgfhjWKUj7BiVcQzjJjj7cGXhcDV1XCXE1f7AfNJkw7JsPwm33zosb5Qz",
  "key12": "2PVqRLf15BuN3nFbKifZ8Qy5x6bkLJy8n8RtUXZjPL4YDFpu9qAqSEkv5pDquEx23vGobf9w5VqQAkGFcyN8CAAR",
  "key13": "3nU5TpbosgLLLMVJ3Ewa5Hmyo8ZW9eGxaH4HxJRoAEMRHJs8utEpGo7L2JbjoaLCQkt7fzpuAceNj1Yc1zFxpy92",
  "key14": "4JVpdufRmA2SZhNaBzX9LXBUMRdSfKwjANRcAqT3f3DCq8grNhf9usCbasHDVLG5ESEXupKeZeaNGVaPXQnBLVoY",
  "key15": "5RqPMr7x9QjNLXP2ae8z6Bpsr9ReeeWtBTPCrTfW7xKTcdVEzqT8VhiUkqnmyWk6xDuceyr4rthgK9gE7fy8tMKD",
  "key16": "5yeFJHeJ5baa69VUKeJmPJde8zQM3NfPQayUauW1ybwZez6kWZJzhEESh1RM5531fyXt9EinbQnMRintAdezzygb",
  "key17": "3BBq4oXnjna4zzqxfsgpPvnpCw68dBm7qh7A2pndi54faoR92pR3dDVjKe5sEXvjf2J27nj1YsQPVnkg3ytcbwYC",
  "key18": "Ji2LUr6qnuroVsUi9e4jZXnq56t1QrAQuTaygXT8MPqy6KqSuAU36PdmrqWotMnGtTeiZZDt1dYWrKJHKMCnnfq",
  "key19": "4ThvewJEZkMtYdwdGRADu9imxGPe4SrHusEwzJ8Z1vjyGny2tAA7h3nEAgE6HRs9cALTF7PqGMa4VtUvEsPJCVKV",
  "key20": "4qX3HbtpFoAgvDPFtRtgiRgwyQ47mvxBvgL5czPQJwRWreRuGsUzqwnWuCw2pvSXgUEha7oDRW6DnFmLeSQnRkL3",
  "key21": "5W4TVEDHBSxk4PaLBwWneKRaLWW4t89DNmBAtoMjzVpEXTEeWeGLUtkmCaUHqa1HAPgQLUQwCL8CRWRJDiSy2PFR",
  "key22": "5p7t3q6D2sNAhRzFtQakvyKKPPjGY1VA1Gn2nFdSgzKKrbzFw66i2MZWVXzBphiWResTkTjDDQrS1tjzN1PdLpqD",
  "key23": "qY6AzfXFn22ccvuJXpWBZ3ahe9XkT2PtHPwf8QMoUMuxCFtyPH1L3wGXBSEHQX6yx6zG9UDF8ubvt3e2GsMnYii",
  "key24": "54sEZTfiWCB1kHoRUsWkoXQt9LQNqswNvWbx7ccQ86cnHqkeWMHvwVkVGEep2Z3Z2SKrV4UDN49cS7YRBvY6v2TL",
  "key25": "5GZYugJKhVTH6sycB2M5PFiFYkpqy6tvkoxj9MHBfBS5g4e5dMZtu7LSgPTg78dPFegrucdanMoxujRg6tZNkPJq",
  "key26": "2Qoop8AE3YvuwJdRPBii5oYDaMbsdfp9xBtEjQRLVqYyQEV9rbQpcNcRGPmQmvDwdFGmrBgChokzF2cD8EYrzdNV",
  "key27": "vjGNEW7dWAD7Z6Z4meXeCzMXtaBjpD3KVXGKgLPq4bGq7UZWGCdH4nRtEEQUH1jVNyetj3qWWfxNcviriJSjvg6",
  "key28": "57peduRBc1GBtfZyEa5YHhbrv4YJuSzYU28qbhKNtXeMMThzS4xhg681tY712BLbvTw85XmyUkkN1x7TH47kcA3T",
  "key29": "22zVqHrtL9FWpwnr3Guo2ehaBaoPXBESfstCi5bDfZoE8tEbEvPq6jQzVVjie9zVicAGvDYKXqysdA91x8ePcvKZ",
  "key30": "3iFJ2vSY35FT3ZHvVzhzjWtT6uMvx2RRQSVUqcu2VBLkkAPPWsqp6G3L6h9cfb6XwaqJGik7TV5tVK2MW3aGcMLa",
  "key31": "39JQ3ZKLoFDMgBnySGvCYFRaHbJbZSqJGvTGoJQnD7XFw3R3gnSsXv8r8Xef11AT6vFbyRxW8pcDy6p528oLPuTM",
  "key32": "3DVLKfZbZthY1aW42TkSYKApwdK1pM3VZxqWnB72HUpYRgehdJdRhNLjDxmkmbNSyxbPU26j3aE9wp1m149hVUvX",
  "key33": "5guiSiHQrheFUHvKqZY3fqZmz7YVrK5mxXzYbBU9kqMS2h9yZ5DSdwpPJ6zBepqAmUDSvwGruzBuG6Gipz92F6du",
  "key34": "4ULezYMykYeXSakp1KVLp1EaMuiFtUoA2Dpa6fH5nhCF3XK5dLtwHsM5fBSQtWs3TTyk5y7WAdjnpZC2s3CbFkte",
  "key35": "2EkofXqMsjkuN6uByk9k6qGsedYx4VDL3waWqPytKmXwwYTEctHAxHMQ5rApggqQ7eGH2M4m1khqaXHKHARkUfMT",
  "key36": "3Ne24xtF2ATfhPfQf1EPCma3PkvRSgnWeGG6g5v5WwniH91ojVoCMLN37YTGDyxQjjpzc8vF8NAaKxzMf5dr7RZb",
  "key37": "2ix9ahnmYk5rokoFAr9r3wyttKKaQNkH5QRBAKgqw1CCR5VyXdxFnJcayMws8kqp1UufTY9KgsqLMY33BLKJuXv",
  "key38": "3eEbekU4i1keCmJp935vEjLMcckNKt4fFNBydaYNSoup9c4gh2u47t63MP9X7cCg41VSQh92YShMAurSqgn1V4KA",
  "key39": "2XG8Ro84sGg79CwhPXN9DgYq6fdhjAcJT5hpPCFoCLWhVYNxRJVzWBC7LqQH4ExgYpqnnQHEGQv5AyXnKd1v52za",
  "key40": "3bHGZ8wxFyqW1Aumg7byDmqDv3jWy6hdKedYFaJyDrBTMbo3qGmdP6GdMjbYWWUpzwixp4WzcZakxKS4nzA83tgE",
  "key41": "62u4RzwT3ScWiFTBEFWvu1kYsJ3DNFjHCVqeqbj3eqWJskDmvKKrPrnnHQVavgFG8emZYd6QPADwFfUnpgHF1SZ2",
  "key42": "4jCKdos5janTMK9VwkkxcRddk6oi5KDdTGy5aLiipVYoP1wT4cpREC5miMe2nzmP2T14Ht49Y73MnN4LjdLqzioq",
  "key43": "3MSSYGFwub1mLMyKAshoodCgQ2LE31dRDzcCesmcLDkNHYJMnqWwnrAFGvnzB6WnCHMDbFgkmMgVmELexNQSKB1D",
  "key44": "A94CLahcL3wvp1i3kXpDxvHGgPLCtLX2CecoS27a6FCdTcnC3bN3R6UemtuANpLoDAqa7FY1amW5freBWMazygR",
  "key45": "2kUetrKmJJxbNvZRVfZXfDtzw8CCv9GKcWuGRMyQF7Ufzot5A7Js4M2rUZHHJ8rj749TA7euny1BKUW6yJynTCD2",
  "key46": "2nZ7GpVmARQWkcRsaDLsQHHAtHwfA8Z4fKnjv3TnYsmUN7YbigU8ziFim8wjfnnpz9RCPzVo3LBMkzoWKMthr49z",
  "key47": "3pMfi9cPjTLQ5tco6M3unamCYjCF8xV7PRUhCmZt4AzrSgoJbiCdCk7G798UhKizMSsc459LX8hR2742zJKA8rPy",
  "key48": "3ARsdnhJCqCxmGRabk7aSdXVoqGup8U6moXGqmwo41CCKmBzxw9XgrosxkRzQuxfByJN9w6osgRVDfwj8jrpk28L"
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
