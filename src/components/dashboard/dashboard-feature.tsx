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
    "2iWuKtSbLy4jmG488wqcQ5kPJ29w6XCZ9TEvuhHWMY7fuXQvMf5CvyccDinYb1Xro7YwHqDFjBnEVCHBnVnYG2KD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26EfeeHmSB6tnUfL2Qdz9bAfkjRzWYpXj8CQHK5D5XmY4FQNxbi4kCABvJrs1gBMM828es5MGUhjDuAwEyxn4ZdG",
  "key1": "4hFX3iQoc111BkdurB6MGuhBDAgJ1TZJCwZNJnVAB3559QqXuXoJmiMdRZpA1nsbQutwWBZZeD1FHhyBDFXsNsbU",
  "key2": "3gCXyMwepXVBRNqQpyHAs1uhB1JMUpgBXQHCNGqDeYhz21SczZa4D7xnXkf5WXEJeYxkFu7RVGvCWhrfJ3AoinHg",
  "key3": "sy4HTA5jSkWPnV57pKCqwscqU3AqqmzxSwQGVMAjiLkoGAg3KBGBjK3ryks5Db1ihHgHAc9ZWJUvnsZSiQ9A6WX",
  "key4": "2R1xbMqVQ38hGx5s9hygtUGrUpNNev2u21FdAWV1darRqBeisgduvsqC4eBox7jBXr9iyXiAhEkJWtATEoPEJ6fh",
  "key5": "4ykz2GHMnj5HexzWr8ZwkYXyUPrYkYaoQhgvfBvMEAad817AwBqFWUt5Kz5jPCttZBkrUaRLtnnvZwUtuKhExMiW",
  "key6": "34ExCR1TwhJXCjoKYLFrF1jTFsHdLPJrfaG7JPhzgS5WiFjWTMaMWgffsk4CeHtuoQSPh5fAFCMHBstw2Jx3d74x",
  "key7": "4LQQyaFPZ8diRyfCNnf3NS23xNNK62hD6G869GF4HsJMCZRZaHrfLAUpTSb5cpWAAxVDCXDjrKhcR9xt2ETeHrpi",
  "key8": "26z5dWnsoHsPJiEc9aUVoSHFn2aAsxHu2V97UvCNiGd5xcD5ZWGDWAWpRSWbF15sUgBzdmLHyuPoUafkQwAJLpkj",
  "key9": "4tqB9z7uKUNFe46L28nBatjt81KHWmjjEWtMzk5Wgczs1xNW7wE3GKgHNniUGK9XK6KgrFHn33TFCaSVFRbtfCLm",
  "key10": "5Jcn79DZrLFAiWPEfrYfjfFKE4XhndGjuaQyqxVn2ktQQPq4xqs5VMvyUFnoCTLu1Y6uP2ATcn5NdRQqDtTyGDof",
  "key11": "5D7L5vxy415xq7Vs3Hw7PPU7tkGWDJso47SWwsuB2nRJCvRnJHr1vYrT9TWVGLJix1kG44RZp5dftViW1UnuWzY1",
  "key12": "4z8BukPfhJynaR43CYfap3TZQuK1pWMqbpbktdSoHktDbMmyYYsGJL3WFDiXF9UfWCPS52xXVj8sycc2Qd4khqeH",
  "key13": "5U6F12c7uPbCKQSy6ZrVq97wiQAQ6iDdHdMc48XW7DSEPfACVbkS9xsLLybf5WQ6qpJTqhQKKQFuT7nthBLuMzgE",
  "key14": "4iXR9p9zMNdSWsJRmv6yHf8A4GEgkSLfAzzzxxFHGPNC5xPXYMB6edmZRRYvbwSpSuz6RWMcdwefd7V5HgUz5c1Y",
  "key15": "24K8FdUpuHuV3PZUJR22bKeFEbK5R2hCRsTnNrK7JFJpD87KpBFwLn191M6qhuaR3JJeLpnAYHp1WAUzZMdSHRHt",
  "key16": "3ocLLws9ghMAb1dMK2QEtd9EXQhU9DGagBmbwaSDCSAe3gkbyG9LwfYU5qtnuTAU144rASw6ita1qcE3gfjAL2rH",
  "key17": "2aasR6sEUnZKjnxWK7YTWB8hV1k8dNsmWctzPwSsByAxmTFPjQbjGjxBDkMcqxao9KwUPuTRMQBZMbQku3y9M1Th",
  "key18": "4Eicr6sGzBLAaEGtA15mYfXGxFGw3wyUu3u6eGujwd57fm7M8sBJELQUAid91CfV3Zp2Yt81ETPxzzQ6u7xTPd9w",
  "key19": "5zLWAstHqWaX5WHHaWxYXSQNtJ6Tdh4WkyrZHcqiHZZP9mT4uTB43YnKGceUfutdeBMDoAukdxNaT23BdH1hzg5s",
  "key20": "2QZaEkbXT5aNkyk5RoUTcVZxFdzLbZGs2bpePZ5ge87Fx2XQdvPCMJwfc3qTTHs2HoeNifqUc7SGnvmU8bCB8wZG",
  "key21": "4YE25vp3qmtyv1vTRA93edP2wSbyfgCVsgBH2bfYmggwptvHRt5YoF9bzfUXi1kgTucUp68Rdt5yQ5CyGvaw7CEh",
  "key22": "4vjjLQUUqithZmfPW9cov8B4VyrxaXaWBsEq7SBYNRB6nu9e1UcbyMGEfsxZ7abfNiTzarzPuo24gvbwL88yyHhc",
  "key23": "3dM5gCA8PrrByufHHnccR2ueS4sTQuWWkndL69fWaDQHrjw96WDmU5CZywdaRYWqmmk87nyP4ZUba1T3egACyFu1",
  "key24": "34uGhgmrnCg7nF7ryzdYrK8uSZXbucGzWK15UPuDhybsxFJf2CutK24dCFShPstLhwXBFYr1XrHQ7A1qmpzffF6W",
  "key25": "rrK4FFR2Mr4Jwd4g1zHgqg69eDZ1Emhv7qxcjeRHSFTkqdApasV3ufa3scGMeT1jsEutDDmFFp5ULjppZmRMycv",
  "key26": "3NE5FuLEEvKAkFALvsuSjfMPTkQbRUbikd7wYoo2aP2h3VyUCj4Q1yyKS2R1phmbVr2bge9v5UUBcY9jcTRQtPZs",
  "key27": "5DTV9XenKGRBDaTwbRQiPk52mNBtAyjsbUdn26RqDFSqVhHPmPmTb6xTaigTAfPRtrzGYrkkG5zSvqFa7u3LBNcf",
  "key28": "zWVfX4jtQD9k85ZpDbN86q4BBA4vESF4tG9GAyvDrKpWLP68pd37YZCdsqcNKQSVKL8pw4LANaRa2EkczdoqpTr",
  "key29": "2ijbTCKuTaNrqotdvWkjbW7Ti5gFHwHMAuC4VBaJef6rJRjA9LZUopKvxPwA9SyjpLYrjwnvDaoiJusBheC1Xxdf",
  "key30": "3cYFCjQeMBEZQLoTMwMFWfefh2RTS7pbvvuhqQJNhUTrDRyJnZjycui6cvi16zc87phb9wknyeFWB4qU6Q9JBgFi",
  "key31": "3aTqGG6G2SS3WZNNnEWHkrseD4feGVpF7Mkh87YWx7PgTMUSqrPtPqopSwTQf6ry4Af7wSC6vFw5jNoARipYNzYV",
  "key32": "3Pvtj89c53hPDCFkqKMtJfFYq3AtXMyqX98RzYFTwL7RLpwgmE3qEkYYTNMCU5zHw7SSGAyNVrDsqHqcu1aXCPLs",
  "key33": "2Vprqbpzt9UiirKGtxjBDHE3hQyP9JTnDAe6sM2Pq8A2xYd7sKk9ZJidFPAUw7HPz3tewKmeWKNpQHhw7P2jdF98",
  "key34": "46keqrQ56QEnPCrq6rZ1eeyq32vKx2tUQYzHCtnYfdrkj7VLpxc1XJmt9sXgiwHwXCeCJKpz3ce4DuZAs4fQnkhb",
  "key35": "xzCSdKi4oNkU9WEKJojNbBP6J37MMGGr7FBTEiFeHknVSgVP4hmnD9VngmFLNXrYAuXjkAD9QaprgGvwePip8oT",
  "key36": "4eS1H3MT3fGmBuKLk8Yd2Pv4jLGCsXWXLd3Ksm3y7zc4MfNCqyHCyuCJJLhZyK6mZMZ3gc3NqkM5JCNFqACWkFJx"
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
