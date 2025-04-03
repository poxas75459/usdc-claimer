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
    "2MoQfUx8EF4GPuTyQ2qeKNqkVDPKk8v1W19rksdoDAjoPTXY4gGwm6e8KMQuzJi3L8RucnxnbXcmhx5YiXG9kQZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nacsMyrF13jAohLE6xQrhS6CpFSg44aN3doQASiumvdD1vR7xWRSgZu8Az2dbJXUCU1ndKqie6QTp86w4LSHr8P",
  "key1": "5LLJ9cPfc3bP8gaRsvnLPC6Aq7dv5u6FYFZ9kPgxMNif6VXd43itBek2hXty6PRDu23qU6nUzaVHSRcU6JFw69Uk",
  "key2": "4gfnHPejGgs2GNyE2gZAnk5LJ3EkSYjaixoVzt1ATfKV8CJEi8B2Ynk83rrNrRRSSYL5oU1R1Tey2UBZ9yDhTaMF",
  "key3": "5rQeTKfTxgpBfjoqxEKFdzmEM1zkRieNDGL6n3RSAFpcd9UihdyP7S32ZJzV23KpfF7tEFcUCKNR43xcUwR3pLiQ",
  "key4": "hVWAJRwS2vFDeUxJq3SMtw3hN8UgCysSuQDY9sG9wrPjiSFScu4wsaqEqCcZEPYv9SUMS3tN5de7GaKcAP2sn6p",
  "key5": "41CFmKTLtvMTzc5EcBvzqyKwMz1krGafeusSAuSh5PNJ4NEQQVwWTN79YY9KVntNQWYnR7CwPT9YKCLYx7ezNFcR",
  "key6": "Ft6v8d5tnHLdgz6DmuMQHT3rAfCb1paJLDFAeSdGgcUewVmGsoaJfQQ2yKbdSAr9iRxQDv83HfECqd64qAgv1xS",
  "key7": "26KofPqs2cohk4Ho9fejs8FsG71Wwtv1nPQKXCxw9b8PaJGbnC8SRtFTQzpY59XbnV4zoKYUAzJPyufGDcttqNW6",
  "key8": "5cWGCE3taTftWty7Q8wR5krB2kgJwuhd6JxirG4WtLatcLSgGsPp8M2Jg8ULMCmRfks1Sxw9wt5t13aBSzcPteka",
  "key9": "5PuTbfnERNWkzdcNszJXfZbHuuRAGpPW5KXG5C8Vd3GhmWi2sPZQjVsHAoNa58Y5ovTqwZHA5zSkHQFzJmcNveVZ",
  "key10": "3uv7JaqN9D4XuX2P2Wf56GAhq8qLfsQGFJHj2A2rDSZPTn4Vt3xafcNMB3BwLWp2wiXTC6vF8YtdemYMSjRcDVMk",
  "key11": "ZfKG37FDT9S2uBYJG24uZvtQmcKu6qLXtuhP7LDj78No7dpwfrEpVZSZjDKwY7ncvMBCZYPZZS96biTMtpKmqaD",
  "key12": "3KSoyJjL9R1YRTBevkAhuSVTm5Z4RqTnNANuic24PaVj5JbyoqPnkRzf3muLpgYGJgNpDcn7c16jLBTQnHEyTmPh",
  "key13": "5U91z3Br8AKRAvw1ggKi47inxDqDQ9ELdUFYydVZ4mqFBUFLSaZ2szN9gYKsXSPGUdowDdqU6AGMQ4q9BeWdoMZ2",
  "key14": "2zqbSj3CAnuCpUjGkkEMPXtzzqPtGy25XAxWqvdTMuWhTstusjV4A2NmQTxWETQMXtA7zCe1YmrsXtL6miSsMZPc",
  "key15": "4GBuqX69vJdACeNWdTfW1ebsesMW7nt6Z3Ui5HfTK5ehGtSiAPCPwn1YAn7uXPdEzp5SueQBkkE2joy43DgX5Tsk",
  "key16": "3PvCqLYRa8bbwRRfWkQDER92D39KY9vutCWV58Ed63SmF5fpP3vmFPxynhP2ckiw83fZiMqMYBKDSZMQhg3MNTtZ",
  "key17": "3NR7ciMgewgsYEtRVmbBto5sbhuTAXZGr1z5bdQsDi5NSJHApCeEGC4MdahZ73VVJBd5qNGVMtKXL5bRbHgi4rFh",
  "key18": "4z2CRgjGpua7bPUVhTGVRjLDVWyHfRq5fEC6kn5CzmGaRYrZGRZuKekyQ99GX1YLazjWnQp7HANrhnURFhAw2mwa",
  "key19": "Vm9f7eeCWpZZ4MbLvKnD6J7U6cqBZX7KU59nX4NypWqvvE9N58HmP6TpQjXpfoS248X5ee46VGEd2KvH8bDPih6",
  "key20": "5RrYQ2LjNWog8uEnDefs49NUTsCn46g9Be83QBTfybhATVDrv6JzHuV6UDtMqHMEwyFH35Ec1t1pFYgMn18ygkRm",
  "key21": "2S2FDQgYpsVLdpFk9oSzGLrZdpvbyFjc7gyZ3rCBuEU3a3jDt4tKmRJvggGhzmBs2acSYuAVLndimurgxEtSMitG",
  "key22": "3rDn67KuQMJMiaD5NKFLCzhqbdzLjkiA1jfCkcHUFc1zKkbRt5i6KJPvbJL3X5UWHPXWuyi3PqJus7AVYTp7vPFi",
  "key23": "TjmpYx6b1otkueyBthaQXbMv1zUfNzAQ6FSKQH196EwKqhizubCrLFn5RStKvqA5PFA8eZY2bHdaeTdnbF9J133",
  "key24": "f95T5JMLazpqtxLYka9zxABKqab8rK5MVMwyr1HfEJcshjhCePptC1kqMZyWPf4GHCs1CYLt2dqDzu5VKTvVjU2",
  "key25": "DFP9fgLwNo2ZnH1HyMJGAVs8ECnp5H9uPHUSkkrH1ShThTBRPV67G5NuwJ8qZ6QFR33ENh57g5GoBsAFLuYcCjJ",
  "key26": "4pRXkB9f2zFiTsYuJHTgX32fKPvow2FoKV1PYaeAjS37UHmrDaAC7wHfmdidnvXtHfts91D9uWP3nx3RyZBWShc8",
  "key27": "2Yp8QGL8uddYpDtUHBUMNgeNju8kxnjd3vzhysPLATSwvXiywQPDwG4sCTYuE5VoBvrYoGcZkiaFv3grikJshH3G",
  "key28": "4w3EGKTn4P1f7yRehFLNoLJ8Ag1JGo7YMwsXio3F58MsChSmJ1y52erjnNRTigRkYgDrY3Jd3QdrJHkC7ZjEhYCg",
  "key29": "46B9h8yvjaskMja9aDnqS5geetvDhgWdYYzyBVxFknFtyZDfDXkiJoSZEzoCoyh35H2vNaE2m1pMZsD5xqzB5CQ7",
  "key30": "5yYbAft3nD7DzcsQ1NYewY9WStVYrZ5G6yhJHBQgANCJ4mhdMqVXvbLCpsm3jLuTfM3BiP2TTrkWZuaJhzDADKgE",
  "key31": "636mUR2XJgWcNha9UTN9GixVpEMEsYzyxBTez8i9gQiRrSZXxs9NQ9RrwgUq2R3fPeRw7CfxTHvUaD7AZJUwWaPY",
  "key32": "2ipaFwhdgk14osdG7hWs9cAEBeh5rLsotGV3ZDHmPy1p8Smc6S2Y5tT9trazjTFAhTSjxMA9Pq78bfQqqMEKkPd1",
  "key33": "SNZWziFtpFKYWUfgdHSGNBE71zsPdqMiRQE253bx2racT2vCCAnVnhP3LKiEZiuEwEYMTvYV5DLm143zF8NkrQR",
  "key34": "2TjRfubb23kEENj3DLBwtNouVk8mykoee9UgnhC8tQuaosy3Vb1vFGKTuRcVUb2bioAXSfJWtyoY6ExBXEhHhKvA",
  "key35": "5gLaLmF2wPsVFggvdnornRNMkLkhmrXuTER4XHBrNooRDQCeLk5T9FLUxm32wrrRZz4KR16TqyHE5ANhijZjvVuc",
  "key36": "3taMugiv1KH8Y2hEzq3h1kefHapxiGJhLRYCb2zbNh6y6L1gS4Ux7mcDujsiaCkHYfVSftCuXqtGBLM4G37U3maZ"
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
