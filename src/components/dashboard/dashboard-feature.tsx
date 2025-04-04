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
    "5u5jxGDZHuA9moczaeYXpHDEpUbkN2Q45RC2zxY1EXY4QDs34EXNUBVmTG4djWi8RHbfXNnQewpT8S3LHd7fEr5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rDiZasMqX4zMufe7Er5LDTBkmrE1UzUTpwhLa2odB2bDrito8CDBd9QQYkzvP4qfzb325uTjXavpSKgiysvkkFB",
  "key1": "3AtWGaMWAUEf7PcwQhGmSYHgjQAAhpGFaGrhRe66z5xxrQ4TneZSpGmT2ZYfJJffzZZ6nw5VR5obxBo3q479Dqhb",
  "key2": "XGa96fixLLcC64CBS5uFwnJvQc6U2VaoN88PsNzoWeP8HQD1kZUZTM94acpgmU5i14opJijnWPDCSfy6gw5UFhx",
  "key3": "3YiJjUtEg2kKUphjdbqxS9djKKrwP3hapJqudXH4cVuPZntEhNJcJXJPRgq6KygChmnJYFpPPC5vCZnXhvAj1hjN",
  "key4": "fMJB4iQs3AXbT19HtJnbjVoAxnGcNxxdGDyXdpLGjTSRsdoiypyTzr3ZsrAwd28zkhcrqsG1rTFsb6W48PPXo3T",
  "key5": "5xgj6qMgXKdChYU4Rzh4vcEvYi3NrwVtviHux8dNB6HzfaPgo6kKZkcLvGFufSjKKcMjwpcPuSNR2XtuwfvTT5Zn",
  "key6": "3VEhKrudsV5WDtbrm4nKDoF3E2gj2QXLd68SsYjfEBNrTLEtvMBr3wXpSD7UdQPigZzgLYMfzsCq5UEKh5oy7JVQ",
  "key7": "46ePaknHBfHDFcRLJGDCqvzeCoKt6PFAhLigJfMahq7Ctcc4qoESvX8JNggdpTpBL6M5AXjk38crPHgPJWfiprz6",
  "key8": "p98mRr1oCWiphDaF3orpsHhCS47xuqNHjfs36rhE577GEXEu4FbJ7SMZobBDrmomGAQ9bYVBupXDfQs3KMdww6w",
  "key9": "4HUAqoLamkGatxPt3KPXXGo9TimVzgx2K9mPb7g92HHBd3S2vCgmfBhFhs16X5gVNskZDPQzmYxwT2cG6LEYGMNu",
  "key10": "4yttQm39TkFGvJfZB2KrEGQPNokRA5tTQc1THYfRMd68am8Ztdx8GPdtVZuhBuJSzoqreBUS9ZpDQbG9H5XDb1k9",
  "key11": "4rR2bHUzHdsZGQSz9CMAFW1y7cfJCLbTtPB3urFoewE4srBJsEFQCouSsArTvfeDfRHYrPM2inTnXhFKMxmnUt8U",
  "key12": "5pBrYUugXM5J1uKQVDMWL2quQjqKuRLLLGx5o5ucH5qi1f81c9N1roU56fLP74tx4dnuLjDNJDbc3JdfpcDQBKEJ",
  "key13": "5ULcKyaG1jeHcDKgZ761hrs8KszvAQgDYrzosyRMHpaKrojd1dkiAgqMY65NwM2hs371m1wpKWqjwS3677cg2EyA",
  "key14": "z8ihBnPZV6eCJ3Dgzj91bfeC4cbpBT69dAjfnmmhahXvrywiqAwL2gFhiNXwXky4oaMCumaUQoepGGjp8qhxkah",
  "key15": "2xMmk85EPkFqKQrueFwzcXaS4tPsPC1esfu4abdVRCrqLbBmGdLxVMSGSBJMe4zEyWAN5FB2T7BEWDshEeRpmmnQ",
  "key16": "fubRff8geQgywkjeNPSYVRxtpDfDXVKws6WaCM6dWC4SoUnHqp3iZM8qsvHMn4W2qJVPv8F1mgEQRQpyiBCwtxs",
  "key17": "2NazSMt7vR4Nni3kW3H2BvVy2uw4BDWFL6H58yYDK8vMUdSpFeXbDHC6o85hYQ7pPo8vDwrofo6p3jdz4JABquFj",
  "key18": "63xUFHp4YUGsLuUKkoCJcrwNWYnLwEA9znJ5rcDSUcKX4tnM16ejBm7XffCLc642WbAFuBQF7suKTfLPU3K5dv2M",
  "key19": "4gn6F91fmnfPnY4mRsxGFomfzjsyGVQNgwxpq1paknvskyekWfrKGmYJoEkhx7JGGrimH8PjanMNuwizFGKrfG7B",
  "key20": "54KLv61LxxDGLDfV3CcGKGxTXRYK28pdQBCQnjdB2yVfFN54C9AMvbQ5HFfstxkcPV29HcR895onFHomeVRSWmqE",
  "key21": "4kLPY7ZHvNug8A37A4XQ2FuhqZs1tMiFKdQCqxdJsGqW7yVJWougjqfNnykRBELprvEZESkV7GAdFqDD5W1HbqAA",
  "key22": "2XJ7e9FQKMGNEyKf9CSQ9DRwac9mRrHMoMzPaAudpt2oiMCh5T7FECqj9hrXU2SUeiHTPGrjXx5PHbtz3bD3LLua",
  "key23": "ZvmARB1D8WK88ZipqaDwCw8NHyzggkkTzMa5dpHUx15MKWLTezQ3sCRSqqVL3AuBDtSn7hRr6Cz65CgZgdnM4Nk",
  "key24": "4U59Gei5Vo6PcZDV5QbdYxqqLxRP6ZdFo3wgJcFsiw13msqeieN4QDNMzF5bbs8xRuNCzXm3voghuJXri55TsfTK",
  "key25": "8R5r2YfRKShFsDuwQsDthyzNr5evg8wR3bNooF1BbeZ4uzWEC2D2Rmz9kKJRrpJvNXH5nsNKnVMTQffu8LBwZag",
  "key26": "3w3BG6cGmHXGRBkE65jiG3xRoaBtEhCWbBFdrrktb34WCUS3GTz3YN5kWF5Yeq9YdSgxsegYHNYxicpV1jUX9BV7",
  "key27": "4FTPYvzfqvkJ55zP1CPdnL5jJfAXMB7adRU9Yk58F5N2toJ3wyZM9E9gAX93c9rToiWNiVXyVnenMpxjQZhjoLF3",
  "key28": "49JeFX49GdhqzUK1DLJnEeLswiQif2p4AwB83sUpUuyYmLdQBd2PJcLXiKJdCSVHYZDG7iFMDbdQauAwM4RK9EJi",
  "key29": "2DfdS6Aof6J1ywy5dpYwSq3MVw935QJLUxDxQAaqmkT8sYRDsAvkgUxJMReVQsbSbBdBSL2rqdj9CSjeWsURLhsB",
  "key30": "cN9wymriUSdVamHBiJwf5qAcGZk9dPyrtU97VnunpazmVYfujhCSmg8Ykxz6Hw7B5iFMbhqoTkKeT7jCn7GVcPT",
  "key31": "2b2BvbbC88yoW8Hx4AEEgpkAVQHKLDDkBDqhzSequGYM2emH5DagADRLLZTE9x6mYcjzRroF3LJHWdwm98455yF8",
  "key32": "3QW1zqQmi4wPX2mYWX9yRryiC3XaAHsMkN9pNYu7rr4QX8YEvjV35dBBbBkcqQ5pEriTE17gTzmZj9etmYPZJj2P",
  "key33": "3yrj5Ju7ddQ8yFBQCN3QyxQBoUeXjY6rnaXjzXYgAc7xcMNB3FFuErywoPfqBpt9mFtYmFU44JbWrvSNQng7N2mB",
  "key34": "67jbCEnWn9C8rWPo3sCqwcdmMAfdPTaVbfERb5QXfRbt92nGRGSQmMLknPwnwEVLyfJYQSSiRDzfqSibHwdFwboQ",
  "key35": "Q4RgvGPq6tePj8BwmookEM1SwFsGTiGMU3AUUJrjSTUrF2rdeBAW8qy7yoM4Embw5cLoUvcqz1cVy8mThUqy3zL",
  "key36": "35vKYMeSZTMnES3u7RDUQxLenqqrqga51iSYJ8F5afFFbRvdS3bBszJKPj6SEfFFj7eYek5unFzcpiZAb7mQJc9S",
  "key37": "4hwUiJyn13w3ZFPUD3Bik4Lpn6sX8gQcMSy7aTmrVphuuP8uFQkiJvfw485YVRLHXT6UM8ZXzbazZkhc7ekfkZ2D",
  "key38": "4TkQw3Nd2tNc3cTLCAFk5ppy84s3diysfnP3dgpSMjuhCowYvnjQ7hb9d1NqJh3oTvKcJhCrtBZTq6m7vo4z8wv5",
  "key39": "3Ykx6f8DxZ8L3sqeKkib8RKduEvXJyWHMhcaE7VBPdF7TamfNRGD7sGy7gkZG4iZ4xg9mWqzTLPTsGbNJDXrsq86",
  "key40": "5swBXqpKXXJY5hYR5uzKY2KQiDMYnV6RvfZZgBr5omugifSXsFb4FJRXM1Y5cTFz6tEAt8EwXEy1d3qVMTu4Yndi",
  "key41": "2KUXNea64aDdjCBewN3h4qUmp296cgBYTuX3e1SXuxFPjPxwacSwKWVDksD1qUNSRsVZd6NB669nBEZcHrP9L7yL",
  "key42": "2DojicsVZvv5BonWCPpHP8oRZz4ywERuAYbxQM4hjymoA49E1sMk4LE4PnxsMCHFxqJM441qyH7XBe11BRb6Smns",
  "key43": "2paBvstwHKdtLJ6RBGyW4mu2Z5mE7QXDTAmAT7VMJ97ZnW55Q2Dh5N4NFsvw14fRakX2U4raPWpY54bL1jVoKQEF"
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
