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
    "4igMBwKkyAaKAiZEaQtQNehZoYsdJ1LRhqBqPSK7jaaJL5Y2YtygxMD7gzGo7StGkKnyR1hhibSRx3P7L5Y2ekXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g5UD4JcmTHCiHxPTg55TSBiGinYQ93GWaN2zS2CUgkH3MzMe2TUmGFzJhL2MMDCiV9HMWaBFk5RoYmMhc5QAdkF",
  "key1": "5uGXehagjbLFHCL9rKj8xTsAGfQTaRNyx8Lg8XGzW2NwdDcYAKLRBTJV7GP6hysSCYwZ1ncxBegoHAYe8AwoN6a2",
  "key2": "qJtBmjnerY9tHkrE3HWMEbrGV78ydSioCMKRsj2sbAvWXrK5nsRhwWbt8K4JVSvXefHYdRYbHM6LdHZ46R6isxM",
  "key3": "ETtZSzWrfGyHp6ctzm2KDLQ37GegkRyHM3axyjDRnEUyZcRYsytXDLmzqj9NWFqNj6Ts9LRpHmDaewvJ7LH1CDD",
  "key4": "4q2M27D1oFBTZhAsXNLCryNcEWpVjDMoxXmiH6acKDvxh5FSK3PYMyuc2GGgnMLXtTaGetzUPjdteWJK6E544FtU",
  "key5": "4ZarEzErAP2mVMNd9e1chJjEL8z3BPnRydvsWfihFUY7Q4SFhPyrKL6yGaPM6K5AEhcndAn2z8fdZZDru4Yxxquo",
  "key6": "2EmPkrrgaDU6jjwzBtgMV5aEfd8NDFah9Zg5Kkpi13XRDj4x1W5E5hhfVt7xsxuuCePhjcmo8yoiws8KufFt3z8y",
  "key7": "3v7CVz5uoULYsMaegS881Cp8dKLjSmKew8nT3CKGSgh69nJPywBDNJhNSy19x3Vpu3wo2u93mLTUjR2XfaAGtK5s",
  "key8": "3WgeHk7y9gEKRpRdkvEDTYhEn9uK6ECLUnfqyNx5rU18qfg6udwSbmZFuzeU6TzXcAbTM27FE8s96j8eAt3DF6aD",
  "key9": "2fkd53CcFR7D3n5wREEv2jv6ErsbNQDAbmUU6zA8bXr1fJ4MSz15eSnRr5xQ3EcAMjG67KcYLBTnfPW7wk7LHUrK",
  "key10": "2EGkpKC67FbeJvrZjo91jQL5viMxdAXNWUhQsfUdguZrYdHyQruUqMQLu3G2DgbQLefQ2XAunoF11Tz1uhmLiNtQ",
  "key11": "4NcUp8bqtULDF9FCNRG65HpPRWuZcbEk7QE7fWaELgJXAtucpE9kK7EYc6ZBpLt7FSRfSpxYrhPgjtCMahhQ4gJH",
  "key12": "5YyATBM777TwTTXapSPdGJpMRBbvziT7x6vm4veq2uVcBKiNoe25XCACPQZa8vfFX1DPos1RRZt5rBPddUrWKFyG",
  "key13": "nJX7FwjmH9nUmvJmkSGa3t5HpfxqUBpWDjCUpeeCcKWXxgRNK4fjAK7PUQdPp8JXgRcTAzbUT5MMe5MZHtwSVoR",
  "key14": "5aBzQRX7V5qG4FtKT9wbufX6sRazFeJgwwRChW6NJ5tDc8cPWUueJE3gGDMJNAM4sdB5SyEeWP9vCsZ7KWQv8gkh",
  "key15": "5hojoYRPQqJXrzuwuAjzUJqkcbr6RXG8TPYknsywMAThwBrNoxWu2ewkfSRHxFTvSjk1f4i8Yr7oTX1Q8jfVvv97",
  "key16": "2jwhBrgxRPExHyZy75spZpDW7Mnxp5mkH1GDU9cyGdiyJEefgstjp6DtH6ftfvHx7pt1jMVtUojKT5jEgXXTC5aq",
  "key17": "KgdArbwT5s2zaudcDPN9aZNBAw5kpsZ45Ui8ChJk32c5kBv93Sw6D8UCEFXHN7Pyoas2C5P2GNETQJsA5HzCxVF",
  "key18": "3bdbv8DFMZjYyJSTPKN1wSU5pJfLPUJzYXPFv7pJFw6vmEUbBvVtzxufJsLVC9ofXc54V6598tcGeG1Y2h4KZa73",
  "key19": "5WqHvYLQeU3v3jEbCmCUs5J8cvceizkbTo2G9jXmevxHTaoQchv4NTSftdbSpJsPNzspConY6XyjDDcZ7URvXJYV",
  "key20": "3NbPbjz5H3DmjNn5Et8fRHhDBp36d93dmEykL1oGnWvCLrmU6ZhV2BVfdLzqtzhYEZ5Nh8G5YY3eDMptTuJQWxku",
  "key21": "3o8oRZzqQtyavGdZG3iVu1DiyLV6zpdbk9WYTs4d2o17mfqw8AAH8gZAsq9MZd4SthQogWhznKjQBthSmeyxB8qt",
  "key22": "4QtZrUPsEax66QCuY3R843DGV3f3ZL4PNjCRVxbzJhsFgU42wCW7eZm1ZAozHMCreDBkre2T2CCCg1zdJpWCz1rD",
  "key23": "xpznJ2iK8efJiSDdHFx9DBQFevqzxnk5GMRT9AaGC5tEHavJvdBofQbnzoua6E28nFQvZHMr1BYUsodQAAPGUbR",
  "key24": "4qEJs5wFNSX9rKvrkbtJWFNYm4GKgjYfDYDPBgcgnVF495s9dVm6tTzbL2PBSLqcWxTduV2bsgW4SJSiysjvj17v",
  "key25": "5Tjq7TeUgkBcAYxriFqora4ZUfPTDqzEhZGHkx6QVL7DcUPWpz5sAPvD1mKdwAjGLMfDVgpxtAWTegiw6UNzLM4f",
  "key26": "4dmVC8HQkCRoTq216DJtByNrYYoeHow69Z3PWeLK9RCoTLN7pxgiN5RwyiGH3M3xDi7Y2EmrZsRNt8XtTdFcaZpi",
  "key27": "2emARCm7fGJh5sY4B8tj7VCTJZdy1ceXRNGnpRyghAtqDG9AJBCd3fi7wC5gTif8TqaQX11RwrZBTSYsQq5ddrGR",
  "key28": "3BsqaQiEhjmWbQzmCfxQgTbEcwCpxeDgT8ZGjNeezczJJYHy3jVU33a8G6PfjNje18CzgKQDeEQp7pyf8ZLxb1mh",
  "key29": "3AQTAfhW4NyZa3CZrw5kdzCp8Uf1nMBp7deXDgTP3VjTGKgjh5bo77JCknRJdBguxmpg4PkNNLy58btkUnkuxSnJ",
  "key30": "2JRwYhPmoVLwqDvxYh8BGpUcJkj4sc6oeVxPDZ4dTwAnjUn9GdKTH2SMCnbBoKzy2f78SqWThaVoVhSmBRbE9Nc8",
  "key31": "2muQRzqqkhpgXvqy42RfXYgfTMzHPpzEpunx59y7KYRFLUdBx2kskDg5e26yzborJW8yikvJ2vZM1keXHYxBpkcZ",
  "key32": "5s5oviKiomyKedTh6GENZcJ4zaMF7RTpJDwQ6iP6p7EBL4nPKbnekfPkPgT7jaMkLFN6ci9R5MD3HKRBaBWHuFKP",
  "key33": "49Mxa7n8TfqtzntdcuCj8pcZnwsPrRFVfzJin6UohB64Lk3FJU13mbMWjX2UTSvERFvgmoAX7rYqoF97KvVu3Edn"
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
