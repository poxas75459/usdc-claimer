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
    "29e6EXfw7geRcUf5ungy3BhNJnKFJ3Y2yPCpoivQZJhRcBZ7XyXzu95p7rVkxPCygPbHhWYnSXrRZ9H8sxDeHSLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33eDc6PcD7oQ9zrFxAnsk9LyTdrJGAreY2xzBJX5wYDqEj5Pf6HXXoEGhauXi6gz6QSPVGYJdR76PBvfNxzxic6B",
  "key1": "44bRNiaL9EWtvY3YUY5NHywzAQAZXmBVWM3GJnq9bcbjQgvZrJKWP34iCLaw4d3y7uvYTUUk7RJ6LQinQ7u8kTFA",
  "key2": "2NE5tcd3Wa7r74onhJF6QzAHqbjmo6tyuMNBhzF1RH5JEMwxFMMBA653wJ7xc8cf9oRuNdiyQ8sBYKWMezygKUpX",
  "key3": "M9GJ3biRLXEDG8YLqeAkUmYfo7abnNp2Av8o5CwUHe1evePsuFkGUmHadZviebN6ao7rFshX3oW5Mum12iCExXa",
  "key4": "otEWRcpv3ajfqHswstkFH1vznTZugWbwtdoaKHoCsgWcRhtyp9WCwh5RFKhSaQHmjKHcje38fZYRBxh1yXEpu9D",
  "key5": "fpAC9pCwfY45hS7dRUN7bpMR8BAa6f2m9soJezBWKL7RFE9sj1JLiWsfCZeiNXXz8cZ5HfV7hTTvCbYGfWMrg6x",
  "key6": "NmX83nN3vUcumFBU4euWdrEsufts1xv59EmPtF2GLe6j9BzAYttPNLFwaUhxrVhLSto2ASYohQeEctsseZp9U19",
  "key7": "5KLrAnHX4jixaeTh3146T8BCJyuZQMqK3oSRNK8RupxWkMj9rwLFtVmTegJik7fJ7FaJB2dfkQ5VLjvwrkms5HWs",
  "key8": "4FDvxu2ZMVnDpKZDNketvkJ2UazSnKamn1Y6xXRwbTYUsx4qqM6XahgffzvbbeftVFrAdwSrV2fCUBM9yovkz6Xi",
  "key9": "zWinvmyY5UfAurtVDVQSuy12o8LvU682MKggFXnhcBFJTuPM5hEg6Nr7jDtRCVT6BLPZRdkB236v7oDaHSFhZKz",
  "key10": "5HQwCeqYHsTcXvKSQ8yR8WNcUjpzt6EPYEduxowi8w5mW8rtGegrx3e81yAbiDndK8542jSs8pxgW5P97ZdU1Amm",
  "key11": "4VhX5oPfNbtKDSDxj3GDT83AALjGKgVXs9SpZFC5JuDAPhiEg262FWCZjjkbfvLzU4MC9QrvmrtjATwZ4GWrQAQf",
  "key12": "4gPQTj8uN93LVqVxffLekFiv2ScGTYd8VCyNSUvMWvD5XLEhaB8Xk1jX13nfZeYkuqmucXYAanpkKGjUW8NK5CLs",
  "key13": "43nrvfbcPp9tJ8GFhtG7gqEKdmAit6Ye6GdMTPR147vWn17XgEQtRqjZCN2bnSvrV4yRmggRE96uL8KcrF36yu6",
  "key14": "4ytpb58sMwLbwRgyoUJ94utQX7YWv24ZyznMHKeoKJaNjmY6xbGkPyPvPkzXSByYKAC3RtQuT4oCNwicBDa7MwMr",
  "key15": "22rth4Z3fqAh7kCCM8oaQB53U8RWE7nTQbw61HR82EMQRiLWKNqdzRcvV6TqmepqcDcMn1FebWppzXx4aeLYVBv4",
  "key16": "5NSJsAKKHa4bK7nQJZK1CkaRFyiNwbQtxsgXj8NYmJ6bgwNHRgXKGgQxqdvca1ku3SYtxUGoeSE1nQjQJf75Zm5H",
  "key17": "s4Ao1baeRQvxLuASi24JT6E88oZRozzQhjRqHzK4WLn3K1PFY9UdVejYMPxUTetkqKW58qgwSNffUR9meNdZhHM",
  "key18": "4isdADGAzvRA8aQc4fve9Tzh4CKsKzu5FLwMGVMYuYW3dChfLzhk5SmBvpcvxrdU2WtQKFjWtcjz3uWX4CAxW1DY",
  "key19": "4zXC2YbrPJs3vP9b49peZd3JJeSHwFfkdteSdwx6U72wxbNuDmPWyXjzdaDmqW5fPg2YNiYBU1SMgs6j95tf7qTT",
  "key20": "3ncGj7XBVk8bMQmGV3R5wLXsnM1M1W2hQc8J5vPg7BdviynTmbMK3TmKXe5fNvcuBvtZCFAVaGkTZST7FZmFRR82",
  "key21": "2g7X8gyH7ocpsHMLBqb7kCovXa2VvbWzarCSXVqe1zi6iATZCXwkqxg267qqAY68XanQ2dzUr5ZNK7YG8T3znT1G",
  "key22": "4s4kddjyse3HJnoWYkaPVZqhEi7C5vcmGQt9g3D2HbXb4uRnioGwVh9TynvLHjmK1osijcUNCewCiBq8VBQUDx7o",
  "key23": "2HZTCuMLytXUUBDNzEjGAcX3HYvzqmxnxe1xu3ecbH8jDquLaa4djH5cLZCcLGTdvynLRDK3rdJsiQ6PM9qQKCqj",
  "key24": "WrfHWofJW1p3U2bZjnYAos3wJYMUUNztQWmbEKQSaBmsjcFhrVhWraBHxobnbqBJTsvha6WTDGnnwwHoqfekdDF",
  "key25": "5GfkufJv1Y6ic1fgsngqrVAAk4em3YL83R1qcKuB7q7fdwq5rRAonjenoCRu41r41fZhAMVnrm76tyKeRZ7wKmu3",
  "key26": "2CWeCLH2z5VCETZRbqJY2zCDQyXX1ACYdpNdxkjM4ib11t9XSACdwZTSjaiMokDWJksbX7JhnAh27jh3s1z1rPo4",
  "key27": "4YaSAqgWBwwFLAxDrQRRWGeGq79Exzvgaj1rqcdtgkm6Pz4bV3KnVDXjbogZHMo89ctRVtc8YEeBJWdNK6RmQuuA",
  "key28": "4LTEYs5VmYn1JEMGZfo5A9HrK1yoVBpfL3YJKfXr9KXsVhs29wTy2uigFb9VJaeGiHXAj3HBCENT8s7VLr5jN6fr",
  "key29": "3mJdBFxumsYJJzmq5zeWw2uTnh32kWpPHxqQHvQYsG3NnAMuNUbqusLwUeUZVYs4VP84LKrPfyFJRejL5fALUEsH",
  "key30": "4W49SfWvsVUsjGDv8Aq8ihRBAZhPN9FnbK6FWS6YJ8QDKZiY39CGyN1EJ8Akt1QE9EnEPbfFshBuh54AfzYTsujP",
  "key31": "2XGj1jZuHpdXwSPsJ6iGPWQBZ9pHHbrKicUfpw9hnqr86vui1bFS4ptDKmXQj3yaAUbKVygieBDPvykBX5WX26He",
  "key32": "3qYCroat6dmJaw9p5DjeTLorwUQAiyeTyqAN3TrGBjHSmVG9zJmy8Qwm1Rng7VNCbwE4txxp3WxMc9svwQJ4Hbz8",
  "key33": "3zLfK6h2uib49krMoYPR1DS8qBoWdJPYsoafpkv6a8LSHw2Sno4JCV4s8MBg1yjrkjB31wnGb3cmCpg3LuvCyj58",
  "key34": "2c2SX2cuDneUYaPFUQrhRYyy5KWMkAmEnvCHyirbfT21UQpgNr4GLDQ7aRNrZDyL8L6HqUHsb62972k6h8q7vTBd",
  "key35": "5HyvhawZXwvRsJD11R8TRhHocc2sPW7wxWR6L8F5EjKjgVM84kiVu1y8dYjVQ5kJJJcKCU42fA4YH9DHrgBN9YdX",
  "key36": "4hvkDMSRggkuQAyvN7PfATygvjYRbRYTbcVCxYokpoXdLjxVFNzsLdFw2s3XBzQfbsbq3WCNvShRdcEw3Z1cyqSZ",
  "key37": "5LaRhTFf3DFJKxBerwgt93vN6ShnHLiDwt2QQbJgxv2Ev5Veu9nzYMHZgtV6gHKttXNrsqGsgqT3UpZXHxARkCJW",
  "key38": "4NK3afXbD74CdbfmRktfzUK3LtDNKzpRewJwVjmKhf43Q994QAKBAqUgJTexMuUvLUQdtXvPv9cKfpHw78Cz9u6Y",
  "key39": "32Uw13QE6A4JHqY2JwEeL4Wg3yh7x7qmpZ4K7oDrhgiqFY8Ka4Qfvhw5GbSnNzfFAv1WeLwEHhBX1QQbMJLre1bw",
  "key40": "3TBpyU3RwGLrtpyVa2UVgbtoFusodYB8vZ5s2o79QHYVPWbEvhwo786HQtPhiRpFVGrjuLnyQrEW3JzshDYtcgTG",
  "key41": "55uLgEXuWj8CHHZYGH7psYUH3x8vNXyW5TtinuBvqWZzXVAWpkhDcESuTxvuz1GK8zVCWbmVztTd4hLdAD3foyAz",
  "key42": "5oExU1PX6Fx49fk3Nsjs1HLg3MwZcLHwfn3RqLu1zadcdktwUNcU6XXLLH6kXCqiaH7gYn6Dz4B36aPZM8jZmkEZ",
  "key43": "3HitNF1cLATo48eRFRvNLtiM7C92bRGhZfxeLx1Q8TwWfCgiTrHz1fzJyeQUFfjVKL5LihhLYxVuffcB2ze1cAWu",
  "key44": "5fre8So8Y1pAwXKTKX3a6Fz51MkAeisug3TZeS2Xm4n5Ge5ZZNbn8WcFbZZuQLZtthrYFEWg5TS2Mdks5hVkGSnN"
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
