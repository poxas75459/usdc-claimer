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
    "GzsrLq5k7yXDXgUJv1fTaeSc6pfJ4BssUdTBsWerejRKvKkGSWXz97wi69C9CZQaankWqC2Q9mf6QDK3gUTgozq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55SR8rAAJ8i9TRpPBdm74s9DX1p4HcxX4rVm2CvEWsRykX8mCv2Bkeh31okojceReDQXapBXEcbkxq2vQgP2BfYK",
  "key1": "4PjdtknHk3X4PixX4fe9YzmLwCDQVWWdNDiyx9gZwfMix6RLTvsnvmmuyjoV9TDHMFDFDHpsfGrCLDjiaC2jhYLB",
  "key2": "37M3LDNyUw3hPjwNS7xMLmu96DnRT3GxMTpDUY58p5qTZZu219q13Z2oRaQ2vvrqXuPfMsVpQJKqo8ts2RgHeRe",
  "key3": "5PjpULdfqNqM3fkNvkbC1Wh6gFDN4P9ubMXQ3Kd9MrARTQgsq2QcvKduPQYgLXNxzDidT88QiRRH2UWu3r4H22LL",
  "key4": "5XSy6FFJi9EuXRMiMZo4eHNjkyygkVgdRZ4UdW6UU9o7S4EEsraMuxyKJ7wXQHHFVqSqVDmCwVTGYwwGJEtxp1Xn",
  "key5": "3MwZNfJ78Vs1WxaRfSTVXmwTRMMUcanZrCSRDB7JWnYzmwhQ4cuTp2WhsiWZDHimqZifJKU2njVqAHfp3rQDYDRx",
  "key6": "6193NUYZnaBfCfuX3szJNiobTj7cJBdqghT6xU3uPjJEA97W2ifgXDhEXRe2uPgpJBu8oMeUX8Wbm42TgHwz4yhN",
  "key7": "U2WPMLrgBmSZrfPFwo81bLs5JzcKvLgxRhKyPX4qj3Fnet4m9qTjgm2jHKdniEDoQML1AA2TFXjTrXGQrWCWMSk",
  "key8": "5bNsygx3LUMzoohY9RbDt1p4pRKfFCpnouXiXBVAsk48JBWCRkWK3hFiaUcSh5A27oQUNggpitL6nwgKtDLMyrdj",
  "key9": "VgqjRAso7Ls6vpmTYNcszeGxZjVEiLMv31j4qkMRtD1e5B29PjaVv6KfZ5QB9HjiAru2i2vdJXuDvkT9TuZuJyq",
  "key10": "2kQ6dsDM2WX9Vp5uwB1srzF9sbc1aHzR2E79TyTv862nQPZtH2ieb5uLUFme5Y8D5HyRNDCoLD2NwKZ8DcKcL4oL",
  "key11": "5dZC2zmyGrmZpmwTWeyjMwe2j6jrnKKu7UYJLo9rsp8b3yMzf2d6LW3ddcg4iUtSrVqAmZbjUiKSzqBuyvSgzuLZ",
  "key12": "4zYVNWJQ1zWmDG2vV2wHSnWHLP25ZX3DSRsBnyi6kPAEvaS28VHebowCLPFbhYCUFp6mE7qJJHo2iqmccNaVsJ3a",
  "key13": "2jtCzMHXQ3GHf2aHe3XCGHP7pmMu5gRd4uKWELGcFc6f9BzGZorXLfmJJfXEc87Zkdu2fTxPsbJVfZupurvB5XE8",
  "key14": "2bFqxMmMyDUCNrdurdFMe1YfzA9Zwn5HHFF2xekLknKjChMtz7p9AUvQfbkskxBgGegzGdECzhW8JsrHRGgeJmrF",
  "key15": "5ntxwa4Vj1EvN23uahvL8A6J8awgGviJrrtnKsbZFPFL4yToMHXdGZ9AbzXta2pAgQnAs3FGMn8VvffXKqgnx3n5",
  "key16": "43KJHycMi9Yg6XUmDdBodMogFjcBwNrRQSaymfbxoim1fU62gLbD6ppJga3wZW8zLVvbwnqvU9PaQWm3WFZzyDHG",
  "key17": "3VN8f9cLp7AjQz5ykNmW1YTj14qd3HjRPy4eo7pZDXeLNN6SyMZxyGQPw4Wnrq1XnU5qew25Ut6YEyPsn33KGGJk",
  "key18": "3w38ooSopE3FokZryzDVKsRFVqFTC3yfoP9QHWvusLtF2PtiCEEfoTyvpne4JhEG3Zjvac7wWoPqprDim2qGrfMi",
  "key19": "4y8Zjq4MhHSHerbjzw1aFNXp6g8d7LnvCyxUoDcXp6DjUNih2RivyCa6gt1UgfTP8UC5eZJBHwg4EGFn5DjW15Pm",
  "key20": "2REHKjRdrPTJwubZrYJRoS5pP5AVzqKHDp7mUfCNgjr9xjZZD9wPhsVTmT6UyoAQ2mZNFEqqvnWgQgf2hnape8jf",
  "key21": "5ynhtZYSK3J95uLYbcBLBkh1s3qUYWDfyfk24JwdrMxfAAaJ8u4sQBygx6hbPaYhm9JDbg2vBWaMavmzidiSxQc2",
  "key22": "cac2RfBh9fDKgDxkh5LQ2CRFkLjX8qTBWJwx6jzfLjigVYbN5g5podQtg3JFcXaSXbLe9Br7Rs2Bjksps1c9uVf",
  "key23": "4FwKVjFHt1rCrJk9EpaQTnScBi8ZXNPLaR2321UFim2oKFEEcTgwgU64Ta3kFBwDs6T5Za97ei4j61fZGg4cFpfE",
  "key24": "2U17vdnjNMuUJ8UdMHxW51QLngrEsVMACydjzAq8Q4PfKR2xtEWELnmJrzLjJjZuMu1DARSM7trjXrtGACJDkczo",
  "key25": "38cvqFxxgdR5aKynjrfNKUxXth3nP138bMa5LoZsM3nmJ6NnAduThJ9B84asezgfYiq6GrEGoEFrVADXLoe9wsy",
  "key26": "5eqFm2ci13SPw2HyiYN3w6zd17TVEj19x21cFWujvcxtKD3Yk4MdLEeNKVUAuuyqCQQcec4zdzwtzvNqZ6xizxBs",
  "key27": "5xtAy3JdhpCZ8JqPwh3ijo3DsKbh9FRqrxLSxGakKFc87eqZtgaheBXUeSvEM75ymraKMJJa4T5hW5FiGQsyQE5R",
  "key28": "2bDeqryC6kj5QFbu98DHZmnRprcodBJD9ywksVJtAxAq8UpYqQG4NHcnJwxVPZ7ymW3Z6cdjwzfMnNtfVysNxgQN",
  "key29": "4VVRyHHviN9FSeoBoNtx9mEpVeFimVHJkMK5bA8GiFibJ2AhpSAWRJiaRA7Sbb3X9anSpErYsMdu3a5yckzcDunD",
  "key30": "5Pq12e2FCc5MGVmum12VLoQnYyv56mMzcbCQwwkhLAbN5rfDjqJWJ4pANcEcy5punbsrby9yNNnMZ7pHZXwaySJc",
  "key31": "p79wQfftN9amincBhdeL9QegNfznGxDpRHfYdCV5BhGNg3z7d9zs1Q5Cwrcz7bMXYZuFkRsGh1MnXX5NwcmdUtz",
  "key32": "yPUTa5E8BcyjQxczFLqwnR47D1uZbaaf9PZALeX1ZtPcydageRRELj5ALRPJNKbLHrsvBZVAKZ8HatGndWdQ2px",
  "key33": "5gDkpSHTjc8fra7U9Pjq9FQkgiraNQJg5DjVYEjkndvuZ9ojq2VfwVztvaRdWpbphgY4mzTMdz6fLzBvdpEKxzVs",
  "key34": "LRZKjaGhdhutaXbVKgLQyUKDcHBnUn1W8hMastZGp4YX3MV72JfuBaQsUsci5Awvr6AHmWVdyz4sQeSuJgxLsw8",
  "key35": "ne4j2MdcQtK1dcAjb6GbV2NGAL2ZZWFCq6YZ5CucQC1EPezF565D2UbugjtZJT8xyCw8eV5hzK4KyKgvR8ZTHuA",
  "key36": "4o29FQjQPBSGxZBobN73UC98ksG4JfD5JcGJwWdFnjZL8CAQvy2WMnTyknUXhA5YuJGHUPrwLXhKGvnh6HBGum5L",
  "key37": "cjM8KeMRq5ocURiKujgbtwxtWZvJeoF7SnnGAzKiHVzCk6MZGcUDrsJqyCBrRmvajkeBpGycvv54VXBqhD7FYzJ",
  "key38": "66L8J7WYNZPCfBXPq9y7H8Q5WEYKa9fRWdCjwSVdGDRba1j7U9drpUEq969sNqUjBWf7Chafe8zRMDp6zEu3ubk9",
  "key39": "AmwMNxZXYMScP9rzG8U5ggPpwH8L28ffn9VGi8XmnSeRJoxSDW4pSWNrfbMhbwwYSP66qaf6j8f1muCnTUcxxVG"
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
