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
    "3gGtcJ6WLDscphZsNPtUo1WWzGzERRK14CfaRMnxRZzN9vAgkk7ucrWcCRGDWZBbUZgq8etrdqAuS5sLCmEfhFLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M4JNey9yremFfJpVbiov6HXwh6zyk9gSYqb1BkdzH4bd5aKB9cTz73RuY9xhfda6Un62wryxRiayLkVEpKV5HqX",
  "key1": "4mYbJCsMncbnHeLZCUZZvghFB95qDcgYntqKPDBRHLhK6iBpLD3sugPM36yZLGv2SzDRKDj839cnqBMW6bjcCxM7",
  "key2": "2yakUjnnrt5id6mKKC1zW7TFyzyBbLTUsYrjBDuLqB2zat8ZGg9CbaYSkt69FbJm9hkyK3ivdVfeJWkDc1PyMQqS",
  "key3": "3q6HZxABspJ2D1VfrKbc87ht9eDNeQ8s1xVeMNbPfHejKrp8CaCMa37wEbqihGKF1PJwfa3QyY4qrJeiPGBQrnyG",
  "key4": "4okXMqxcUTnQyTER7JcE8mHuCh8PuHmeTRxy1ytEL79skndKF922fTQeSWs5bzmVa8Yz4qDQTnws9Ww5neSLf6xD",
  "key5": "2oh591vhZPKWDAQHdqW7iDdmWgeVnRPd3KXK95X2F9ti6j2xUrTqguDfVjD7ZBWSdJeA1qgQ8CyPZ1bAjQ2Jp6Dm",
  "key6": "2pUK16BkeMKf5uy38ioftwRPv8WAeFRfCEEizF7PDAUrvSkJSVwQxdWaVCGebe4RoczstRTLuCPqS1sXmkanhJfH",
  "key7": "SyGnj1i86AV3UTDKZ31nG5Lc283JMozV9G7qqmmP7Q5EZcGKge8xcbgEgVQou5Gn1wM6W3KQyrVyhJdKeRTPdtG",
  "key8": "wCR1LCZJm8Wo7YWcTEu22LTb27WZnXLowNBQpjqyCU21EvS6nUy5MwqYKQCo7nwnQCsGhUh6DJ4bZEjBQGWj9Mr",
  "key9": "4QNnCntD6bHTQrzp4iygZFWKUdpAU3Rph6qX2RmetQYr8pCw71vfQfX5PqBQ99f5STFtyWFGqK9C58udGmhcrKBM",
  "key10": "2tRyihsgVDyGTrfmKT2KUR5qYU42HzxKDKq9ZrxGFfn9s4f41886dzgfE26e1SZDrTdDnt7noGqyFwe76mnEZcy6",
  "key11": "3VJBLe1SzX79MLSz6PHUq6962KgQq5CcgWfWbyG4tKzYt5qTPXyAZuzSsqyiryKe18scojnDGqaMyZcu6FGEQhPJ",
  "key12": "c4rvo9uGvVuS7QBURMqLSzyuMBb2ZzyirEkvhPevTKLcBeru9DsB4uUDKM5mcaQs4nJUo3PzL9GsSeVJVVPzCgd",
  "key13": "5EFvwr7u9fBUHU2GoFuNZ5n5fcUMP9Zswu7aWScS12GZQM5xWKyZnnkS3i1L2jC3DBHwtQKLsEGgFtdUpvsgt7b9",
  "key14": "3GHTWH291XNyeNKiPDb9AAAorU4zDzq3y75cP8kuCJ9Y7TTAaUpz2FhpLVpBCKC6VXZweAa4HPgX4BfUkBTv4P7U",
  "key15": "4CnNSJGX22hYSCLQ8xg3ddwJPqHmXVQMP1DCZ3V68cRbMCRhrZQcLinFqsdZcp14kHJUtBSsacabpRirU68iqWDz",
  "key16": "3cHNA4YSnVk3PfeXBnm4pKnDMVGnREfMhfDeKoDWgHj9beJ2Gj7sP37UfNrdLkPABw7k4GiSFwtb3T2492waztog",
  "key17": "5VZAfJtDESdBgHx3JcRe5trcxf1sE8jSq91JoBd4x6rP4D5vSwtC9X8BqNFA4v2fCg6QL3XEf4dXP5sFtXoMnYmt",
  "key18": "5HmXvx2KWseECHqpDQWVtx371wc8Pkfo4LJKh3cDaYnJrmkgoup1aRWJePhEEvgbhhspEJvbDZrPTuLiLJp6weHH",
  "key19": "4pC19qGoxMjLW4JTjKk6Wjo6VkvcpRraCydCGNVTgnrdTQedZGSfZSi7ZtntS8hNrb1R6qV6mNFiCL7cSD2RCMWy",
  "key20": "3BMdKYJ529rrjyWmDsZaisKGWAEkejVVMYfo4ySFirtDzJSAsjqb3Mz2Gxnr6ZFMbQbQ9MUPUTYtywbvPa6YEdMN",
  "key21": "7uHYpwqgHaHPvtUjGTwgukNjkZYQQ2kfBaPYFe4goewk51VDBXXriYffMrGVeAYCyVczefg669kVTpRZjXeGfhU",
  "key22": "m7vJrs6PWinKV97mdLZGejkdbPRshgjBb3U5tyogePsFLsHoa4X7mKTPKgNQzFr1nRiSUpERR3BydGks7bREdjw",
  "key23": "5axqfuS7y1cmi4AH8SBso9kCsAQZeah7UtHExiQs8cJUPS3q67ZUeoahCuRnhLgVtNEgUAPS3YFgKFs3GNxCGSDD",
  "key24": "4EZ76dZx3wbQAWrHNnou1UuukobkuJ6FgZQp4ChUuTs8aQYn3GUMFktgVW8TLP91Hm18tRaJamHqBya2ZBvTZJu3",
  "key25": "2ovu7GQvziRcDnrRbqsTmksVCaEjzUS8sXrGtZU7WPq8SVQ7eZHeWz3uQFpYe4f9rNXeoRqSRmgAt6RTPtDx8Bev",
  "key26": "3yB8ZmDxAaUMjtwkvHZgw1PGK6Yg9TdLUjYfBx5tCFEgnMN7m7SKkfsVfZEruHad1MxiFZeUNk2ZJxdtDUe31hvj",
  "key27": "4hXbbnmeLzjZAGMe4tEMohT7ETANVm9vbaUYqi6qY9Ve2RTzAgDNiwhybTzVj99gqmX7Bm7n4nAkyuvz5MyMNzvc",
  "key28": "4AnNFVycrzHnCSt8JiX7J9Jo5b1wkstdqxaJWxe6RbG3qD6w23EkKeE4LBZzVkwJnbikmgTCNS8G1RoUwQvgRGjg",
  "key29": "5RToNs5d8y5nnM2fRmxEgHB8jfVRtHsrH3QAZpN2rEL6m8CJJSvctrcSzAWgU6SQxCyQaoJQiVBYpWd5s6oJZP88",
  "key30": "3jj8Z5fLr5Brt3FT8vM11Aq6DM1ueeUjT3reqDdzBmzJoQN6Fmsa7ZKWfVGbtrwQX4BFCuJ7VW5TpFx5M7Na1xCt",
  "key31": "4tMqJsF7kPP7hmr3VcNodXXcJ1MmAT7dWwWSY5ZMvZ4S1dywgGwxcGpqMdCmAYxHUqVfMbzzionxpb4n6Zm8G994",
  "key32": "4b7HuQcagpBm965P86MJHKutbpyC24ke5w3hPnBhvYUf2DMsEP6ro2KyuQMbcUpfkzANi3eZAQ3AtXBh3APniPzf",
  "key33": "Jawg1yUv6qCRfM9izA1UWKFyeM6dzWmVp7ksZu9UPYsS3Uwz5PBGxGEsDQsqEVssmkBRB76Xc8GMGcrSa4rJBzH",
  "key34": "YtRnfHD2gRtHHfRAtmg9bWGy45dagsHMbNh1fpvYFV7fk6chbPcY7nxnRkfsauxzmaV4QMEcx5xgDCBjegZuhsw",
  "key35": "3WS53Y4woVfwwg4sDbLHfRMqb1TeTo2eYm9s4yRPbf8kgtm66D4bY1FgTxk4wV7R6cEGqrVXEwNXTGuLDRcXpNTR",
  "key36": "5qdcFfUAMKLqt7weHJMG1jB8s3zK2bjvc8BNaYn3V8aEMyeAwF2vgfTS3tW4rUDksEwsJbemWUH3QpRwqbtt7MXL",
  "key37": "65RsDw7nh1zXMiGG8VvFiaAKsTXAFQNaYACeSogUYv8NSx8VuG9yBw3mejaAVbtu7HBHUTR6eUq4c6K15NWDwgpT",
  "key38": "4DtP6Z4rr92zmCsk3JsTJRAGv86BR2jnYntwF8vPkTNvBvzeQ9qQbtKbG7LcghS52tstByvC1zDuUnJ17ZcVbw7w",
  "key39": "c89QXQGEZ6H3KFDicRS9N6UHy6z929Q4FjcEq6zDZ3iswpbRtD6W66DTJ7sJqBRDvAQ9MCoLBjdaPfgYKRNba3k",
  "key40": "3ivcYhUuSbHnqa7yTq1op7S4R8DKJKRJUUMUHGxsN4oRb2f4qc2pCq4dke7zNzAW8EuYKKzpAddmhn4oExXjs5H8"
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
