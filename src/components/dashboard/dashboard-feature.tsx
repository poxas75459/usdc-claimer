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
    "3jCxqUMUuHQgjWPB1PJktSqDedwhC2XY2ZnZHYUAwY921HSijAVPB1rrvmd1RFFpVRdYripzGN9CLxB4FXnG3dGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q17AFLiviiRE2K1ZgnpBzuTXN2d7DMeFcew9EzswugiNfyyqJkj78wnHfeYCuStKGK1LcD8QhFaj4JGjoK555Qq",
  "key1": "4DFm79YmvAwenAShmqTFBBVZs5U8FbCYxb2DCD71acYnH6uT5uT1QN8qDVUM4mWCQU5cox1QETJDfBCA3qo2kEvv",
  "key2": "3t1izMsKPgUt8cnCE2cU1Dm5urm3az79uotPhycXuSRFheHNpMrVGsc3jGFadvqgaacJRdyGPmeCgZp5PL321yNw",
  "key3": "4kuMJo1H6Zct46XGA6BFEzdjJJecfr7KcCjzJBMXGzqs9ccGTfm3byw7R2rQGAS6jBCNDfddtG58K8CBtgjXJzbj",
  "key4": "2Lug69cRKCGonKynHyWXZEK5kmnrXai7keh2VeDxANvTwY4yf475bSrUUvYMqC5CTkhfifpyQdSfgjonqRG8YcJS",
  "key5": "4iSM8Wp5i5tR7UWC5sZc5o1abhWpAsZn3bYhNuKtNA8doqJX2H4Nn51cWPYLF8NexA7N18mxohewQ4jdtqv6X7di",
  "key6": "Sv9jWLJ4sWjhnvqM3BhKNjh7kb5qdKs4it4tDEaqAnpmidp73GFTdMdtap6sbp4zZ2LbpS6j2pAJeThLr2iHaB6",
  "key7": "4haA2ef3hVvGbDE9256vmZXMKu532w2yaaYEE1ibZmK8MWaFhZDrEaPqGUFkwuxctg3emKKVjGqKpb27KM7W4B5R",
  "key8": "4EfaHpVGJdX7i39wEZFfEuJJccUTw3TLJoUiTk6oc35qB4VYsCR4K7ctVQFkRfhREaG1QE8sRrKicjGDmthG2Jmz",
  "key9": "SwPQGiyVyycHwLFauWEmk6CXv44W1MZtkoHe3G7kNbmHYWkZ7JzxaN6sDbj7JKfyQcDbhP2C26K9emYPq1tBdmq",
  "key10": "2WZEzkWLk6C6E7QocTBmdxbyxtxQpwVPhSffehd3xkGe3JWfNPawphFxXcYBM52ADxp1cWTDZNbwPGiR9Bet9dn",
  "key11": "43KxekRCyXKcCfdweLV2ZCxUi9PD8DR6v6cz62GFiKUtqNv2DpQgQCS8a294eEhV7MRCfBZLx5Srb4pPkuQ4ejt9",
  "key12": "27kCna1AGXX3MUSwxAz5NUJSYt89bUSjbHVo7rBih5Sj29ehL2VvqJhMiahevPzsiRRKieUnUsY8SkDrCdyZvmok",
  "key13": "3WttLGVwVkD46oQRWbDbp1Dm7Nwoi8V46pcShcKYsfZ3XQ9qkNqJNWZeQC89kEzgEU5vUqCjnULF5X5TapkuLVpu",
  "key14": "5bTMsK1BUV72cqMqmje8PTHP8FQWtH4na4GoJ9rrNMEQ56RA1Xy8yEXTwhg9D9L5QbtmzcvcWpTBhsbbnAmitKa8",
  "key15": "4VHZMzt9L2JCuS2XD5RUACqx8q4W1ezyCxRe2iLdWgey4cSkDD6CPnTEfp5N631fC4byCNTW99umkYEsJYSvqwJP",
  "key16": "XBDFub3ciFaeSdmZKaVKALuGAGfsG3n4gTZa1TqCmYLaUfZCKwGsdRoZhauz3kUTimvxtkxTADWbcYXY6rqumor",
  "key17": "EmxVMxzYn6bZhNPDui5arUF3B5LYDRcipQsEqmYjaxRWdWV4CAwWa6WdD9Z7BiRFQkU6XkWBLMvE4yE2wQsVD4c",
  "key18": "2fPT1jnhNX2HwMmTtgQDkWpai4R3zT8VDj3HwCrprgEkhLw1tVPYAqiCZFGiaSX2TzAtXpkrj7TDNZTpuf6eMike",
  "key19": "35B2WdXBLgWdSSz2o8Mk3uAnQaDmru9HU5Kg2npebFFGSyoBoircH4XKQR3YHXZz4JjTHnTipXZ8HccKpYMwKT2m",
  "key20": "26jEpC3cnvCyRSHoFAVFcNsouxqoVy8i6qcHzmC144vhMSvuHkUi3LxkU8koLiCuNC75DC9tVUhfSYDkisQScfRL",
  "key21": "2ypuLPDd2w29kpnZjdnHRFyczxnXd8oEMaLFrwMtCuBB8NcYHKCYg8Xg72cRVzbGyhWBqVcxuGc2bzbxnwa8q1YU",
  "key22": "126N49yVHCmkB5Ne9ETgPatX2Z6jmsrd7C4CppNXp276gCKmz7jvVtYn5rY5xrByPkhP3KHwKmqaWbor3vgSBjvU",
  "key23": "5Crn1CQaKNA8BAnrstMeuZq3GmRekbAXsbBhPEj64kGWvFpJpjKN8Sk9YQr4vVZ4LWXNiQv2NJuVqYzp4gJvXUSM",
  "key24": "nYkkmC3dYSvhPTyGF72nkEAfF61JF8i6P244c9FuKH92qy2T59fnXWdDnpVNCom35fg2VWczs21DqwrZhHBB79V",
  "key25": "4X1PdB2jdzzy6pwUvy7rj3sXgwaKAT2abBz7uFTH9zdRmjRcmduyuRWPe6m5WZAcSQvr9RoLa4Xq8Aib4EZhmU9d",
  "key26": "4ySDsDSAvMbC5EZyM2PAHLygevX5pgDJQfJKDjReGa6ZmTgipdgWXqDcWQxXkoxcK52jpA7JZTuKwrqW1WcvDmkD",
  "key27": "3ub3UNT1Poy5JuxVK8xEQJcGX4AAN7CL22xgAHV1thusNHDBB7pwNG6PgKo2zr9CvEGrn6QzckQyTeAKr1d9GauE",
  "key28": "3cG3t5okz7Ek24znLGaQNASLc5QKHrGq3XcpgN1Jz37wZHeWM3fh58xqZHSxRaDwWhKJVTYDJLMBg2muiYGZAuWg",
  "key29": "icJyMPfEi4Wb5jLSZ5G951hGVAGqbP6w4TsPJaScZsmAAFRg6Buv2nBBCgLLbgNxEnRYaVPK4iDvT2PAtWMbEwq",
  "key30": "3B4PFEXut1EAReUF4VFBrg31qcSQaYGpGc2cJs1AHmMpoSMQoZtXRPSbWnfvAb1R3gMAKCZtbZBrAmsSHPedcMML",
  "key31": "mBEki8dBHXc2SYPj4RDfUaL4XC2RjsQDxaxsSENah8dZ5g3cfd7ewG44dyJMAET2cNm5bjCnf3s6YP6rLSRaL8L",
  "key32": "5o6G6D4Kx1m5FwWJtG3qWqkbt8n4mRL4bd7t93NZdNTtm4BHvC1jdphLJvHjHdvNNgFv5Ms2uduRQXcX9bfhVRj9",
  "key33": "2XQGobEBmmTT2vw4hhVLdJxatFt7SbrfNbbpxRTFLwJLnBx5vpYvdqqitRcouLGQJvc6FYhZZ7gnUpaqNxj6ZMUa",
  "key34": "2TJjPGy7Euehc4Y5gTGvH6o1irLVdvrYq4cDKSQ2B9E5XujM7t429Fmz6ngDVX9HS9LUtZqW3tzTjA2RAcaofXN9",
  "key35": "298Cnf7mrfupzyNcjLqcsVjNMRr9EG2ChZS7yKYp84rrYwSirV5amuvFZatoZjopsDU22p8xGJbFb7P23X5PbFxw"
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
