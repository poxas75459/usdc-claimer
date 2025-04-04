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
    "2XWdp4fk9KvwBNre5NnZaTvMk1Ycr2cgaszN4nJDBkaZPLB4hvCCEgeeAsCB2zurYAZWzginWQMGyvftr6hmiYsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i83FCt7nwn9GrzjfpBLLRRf4RnjGxVpw3gTZWE9bXVwNyJXtHfxdr8wj29vneRsFqkkEKMMei2E8WoasWauBzAP",
  "key1": "3xCtaXAeYHRsuQjbFqzSoSkaZZmuCspCkE6mBP2Y1eMFWKgAkfGdHs9W39q4orueVRKjLLZttki8ps8jRyUdMEPT",
  "key2": "3wjreXDyd2UG49khwnYHynuYAHTSVU1ky71jqkh5zHx5Yi6VvZgfpjhk9Mohd4UhvVQFVN5Z3yp2Y6GZj2kDTb4n",
  "key3": "5KPrxbCzPu9yJ9B1okvxF51VzVsZmc9NxUXxNmfKvVMjHxKPHcao7WjQXDZqygHdvnXdxEdZU1KLVX782ar2ofwG",
  "key4": "4bvZyxLy3b7L4fhMesybAmcf2vqykAXro8Deqg3CzWTT6Bv2tY6DjxHrX7ndRuFdssv8nMSrs4smZbfBNbvVQjPF",
  "key5": "2q6W3vfVdzkKaf1UMSazELZxifdxdNwmkn1dbYdaXmC9BJ5CVRuB8wvhXruqyvUcQeTt8qAYTeX8tgLuUujju2gb",
  "key6": "WMU3fZTgs9Anb5WBBgLmEtTx1PZ9SAzWbsEUKVMfskiG12KeCRnff5uqd45Wd47bwGiv9MKGQgLixdjn4PjUChA",
  "key7": "9JK2ZBgHQgMtiA4FNzKFgt34cprhddfb5G2MthhqnFbLhnG7NoxypeHoyWYo1huBYUjez7Wgk3SXYD4StLLdfLe",
  "key8": "3r1FRwz1kUMXXiySfJiZ99cbpvynAAQjECxKMCgW2N6aKoHHqydJHz8r1thKh5NzfPdZ2qK3FfY1MHhrZj1fSDao",
  "key9": "5qFXD24a6NFELva3FnWSqt9XxXK13P7SjvBFtEDZpg6zHuwt6ZLTGLkDo9JLmLjaaejNbSWnXL2A7pBXMiCrxV3Y",
  "key10": "4j9vnnTWqCehwJx3SwBKTXW9mKv77CLNKS82TYU2CgT1tyNoC4tznmeEC64uNJbvvncAgCVUh2GyeqR6V3YC5TfE",
  "key11": "5LDMGSVYAMACwnuzDUjyXagCzsE5cTe7eCHwexEfFUHpLdUNb4DpaTP78cRGFy4WvgMaEucAs4vsXUWrGQJb3taJ",
  "key12": "3TrK94snfJJWLN452csRBFxTUeBvWMSpEzFyEW2rkWwUSgVEbQvBV5ZvtbJWJtJtxcKnRs2kGEFdbmQbJnvM4ZTX",
  "key13": "4sDPz9FS5RhPQim1y2WLf1LkaMPmvpnLWTeyt1W429oSiMezQsTsGcvNiNdFdk7PR8YE3Munxhqp3gBCMxxNRhWb",
  "key14": "4QB9EcDJ6ZXCBJNkAhun2QGFc5rUYwYNbZBcM6npFrU39UXtqGhGe3RUy4z2zk8GDq2fdG7qo9nCAaxEJs2AbV8t",
  "key15": "doSW4NhZHtY29zcxz89GfQy7NbXLMM1t5box6KyX4quh8ChFY7SRGBoE3Bm7dE3bcSEg9A7L5gY8z2Sa15mnbpF",
  "key16": "4KD6hjKL9DZ6C9PHzCsBYpq6HvwSoMxGvVyRktgde1yW3J3BFTiLernKkbReJwbP4jaQ5jcioxTk3qy6BppGqSjD",
  "key17": "2a1xeKLrvd2SZcTRE9BwQLVS9K41xBZraXVRxehUonuMAaMiqPTBYLyvqdCPfqGJEpFiNYNjjYZ2wjciiYbnqZNV",
  "key18": "2cc7WMEgrU1BUck8YpNHGxdrVxLNBWV7ZMkUfriugkrK8AzP1LyTz6wJVzZWJ1zxjDNxeeAo3c7K1GTUErxRbTMo",
  "key19": "K5RY7wCyVsShwzAnX4RoY646T1xr19Kh1mKCCq42P7bnZ6fvrrn19N9viDLKuX6RybcYFFa5pDnAd4wsZxuBUY7",
  "key20": "2tsYZc4Ndko8wau43Za6YeUYfhwQHGXHeE5hZiYjBGGo3dSS7mnrChPHm8pw4L7DQsTFWyCetG6iK7Uc6XRLo5zA",
  "key21": "37TW3yScLvvGeeu6q23o4ZtEikRQgHcEj1hFrC6YaSGsq4h4shNDRNMwSRBL2RNHEJK3d1j9LBi7KDMvmDEwkwdw",
  "key22": "2aMVubkm2jz9kU6uBbz8chKD6pCtsW298SDQv297brNaTHJ6RGtxVAtdPyXHsNdPKVJ1NYhzSdxK1EQAF9YPnsBr",
  "key23": "2KXK4gouh1MXZ4QygYuvDQDGJ7E99TEuMJegRa2aFJ1LQnHtn3XBxF4oQ4QLJ1RmzMJFtgRNLeBbXWX63Ym6ozJ6",
  "key24": "4yWNnW6VrzjMcC2eYWbGQJRPJJDeQFposxsm5azyr16DF9FrHRyTqdoe5XuqudRuJafLdRbpNQvxWX2yPRiCxQG5",
  "key25": "2ZBXYAQAaRURUfbw1X6kBFvJdHV6odmgAxLR5mugeRo6QosLpMp1fxb3rtNhgQYBFMk9UBRWVQpSrUkxyJwrTy4T",
  "key26": "4a2AXj7ZekFoF7ZUbvsJomVMLGvvGMGtZNXQ1juYmMBi4mnY8vhbcdMAmiR7u2wakE3xnc5wHuMykqHYgv7NhjbE",
  "key27": "2iYeVuMRNWvw9ZRZ3wRSYEG9GKAL6LDyz6Th2SeYoq3gUARPaFhvHa1sm7njDZA8hPpGmdcqPNGzJmjz4royN9EP",
  "key28": "o5LpXrfK7q6DtDf35JTtbr5hSwJzKvwSv8uVhtQkVAga7PcsojRs86k8n9QnVsoofjehTP7wiLFLHyDPrVayJni",
  "key29": "57Cjq8599JEQR2uRKLhgSYqDz89CQCDe1n8WFtaNB2ePsfXo5vuPi9MqzZhD723Ughtv3v5HmfJQFfPw1brhQry6",
  "key30": "JpEVY6xa1qXBtLvVArVQchpkzqUEuhKypnhQZz2UjqfAbz9seH6outTqQaTqfch6Jfk3YvvrxZWVHtpNsLkSKyS",
  "key31": "5W3F8UsQZy9BXUrhnuKXpYNs5NBhh3EhQwrkELxqzzKvkjj3ti36Qj5E7n8me3zX57bvSti1iZbQtCFD8ur3577z",
  "key32": "2R8jr5e9ivgDizeaHWdkkHrjdF8qroaU2sZR7AbSx15S3jufArBwkd3uxJr8qWUCwdzyUk2Zmvy2KFNf2fMVLHMP",
  "key33": "8dx5e7stzDypJwyY8Z46bVAgABSfrHLbt31rG2JnzfrnBy8K5tagpAgSWiXefF5jyN8grTZbBWA535hSvQ7iqXD",
  "key34": "424aA5ZnW1WB81TrfjXNFaL2sp5ri6R3MNTGtXw7QunfWZgJtYTqr28gmABwCWMVWf5k4QkDH9gxCtDpAJXdAcPQ",
  "key35": "2ZRqgBdLTq8fUEyM69suNAKEWcobcBjEeZaANBoaTQA1XrpdMRfqKxtA1HdtMFnKHhYCnU2W5vUhcfVv85aY1Xvk",
  "key36": "44261nqccdvL1szZkirVBLSbRKpMxXPTUvLUqVdHxA4fkbd3Dyrp7kZwtgK1iqxmaimugMSyJFX9Ngu6iqe4Xi2P",
  "key37": "4VjwF8AxnzSyXYEc3wk8hAriQitzovMnLouABKDG4nma9vagfzfLZDHVG7KreJEc1usPGsbM7rmCqAKT7DWvaMvV",
  "key38": "e6Y7uXU9NKrQkGGgPmQqEhxwUDLuKEV8wxJyLmqeJtveoCBUcjEbuC9dARicHUz5LFVQuAgbMv5xsXQJvqBJrH5",
  "key39": "xo8vStAYndycnACt6LLV5x4cfSYR8Y5GzmyAUK6LKkzjwpeAhRPyJdC2BSFEGVYFEHL9UXNwQgTYptWQf5mu6gi",
  "key40": "3deLNuw8ofpxX9H9LJWgAN8qEHtxf28dSuve85vNg5mqtmrGZjp6zvePy9eokbWAveSM6rAPnECbPLm83cGkexfP",
  "key41": "3tbW5a4i9xssZq3CiPMvaJBG58ZZ7xVodpuRMNEg2gdjgFFdKWixmTZq72DmvoRxePs2159YfG8mUXKgb9GHuXtN",
  "key42": "55ZvQzJoq5CSJCX42uF245rqSk4s5gxVHibvRdo3gugLRZ2MLGt5ubt7iqNjtxTFFWETYcWxYng15nD2FYDXVxPV",
  "key43": "4yBdm9Yyhvw5AWqppNLfHTSP9JQGVM4jiUEfo8ptBxJmgFr83EarkN4MCFC2HwGb3innosLXDWLoKHkJBij9YTbm"
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
