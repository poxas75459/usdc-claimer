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
    "882VPfWGMPbYo2qkeFzHnYeacooMQT9g4QGvDDTGt6oUEUaFCkNVUnYVcx8veoXHoxa3zicH4AgYveRwCiAqnEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ixUMC9vPfCYxyqCSNZsgdxZAfa625i7xs9kwzWpcRqphnKaFEDAFCUVkreZ8MjFnJCccPB3seTASwZ6EUSBNNaP",
  "key1": "3Wd5Ez9p7KCNHPfmVtqjAEnJpXBvFDAwbmH53K6cYMDqVxiAEir61TPY1WeDjo2JbYzCYjF8VfoMNckc1iUhXJV1",
  "key2": "5WdmwXk9XupTUpe63TUDqcj8CV63VWo9jSAdex5qZmvCkvqHtWFyS3kzX6SmNQvC2oVtgqHzaP3otX7pCkwJqU92",
  "key3": "3HzLDa74pkuUwpzBgoWfxEAh45tWyJ9c2MA1WQymdRD5DdBW6FEPhR626mKfdiUXADc6rAzsmWcFQ16UKYHkVno2",
  "key4": "5Q7mnwexvjKovxvLYUBsSXc5MuCuEdCTiWKdYsVREh5ivdXySstyxmz4jLEf6kNfBJbmSq6vep8QBeg3R1JTS64u",
  "key5": "2CkSFdgXTFM2N3Q56QhVYZQNrDLjYDyNwdpzPoGDtmvZmqirTLsCnwfQnKsXzMVuqZ9U43mT2Z8TMm1jsZBTBERw",
  "key6": "5SPvrNBkgxSWeSpB7DhtinmyfUEzLe2L7DzAq9F7KCTWVttvEbyM3kyWeSP7RaSUhzYCVjk7yS2g5SiJCFECiEXd",
  "key7": "z8T9kpEkm3qzc4BEBe4CAAVaUptZxQoLu2UBFznBxVs9UasTU5XntxC7Nzd1M8zno2BpBXt22XDThwc2UPxzHNK",
  "key8": "dKEz6n839L3wPqw5exkzXcv7Pm21XffTGHKQhh7D9NCdBb1XRH9wYpcioHY8L3F6HTpVamv8McSoWBfaQFfcmwu",
  "key9": "4n8UxwxHkA39UjJUrqRbqfLVKT8o8hvNLtFcfGWuoRV76f2tUHSqh6WoH9gykgjgfuXJ1kyVPdms7uRCdMGAE2o3",
  "key10": "5GVot3MA6uTDrsN6oyRhbgXxRtNG9YGeLNwNVWS9qsrVfHmJCUtCgAUvbrC4j8wNnEzMG12GgKdtjXMWytxZ81ty",
  "key11": "TtpMK9qEpA6QmoG3GFgjYkrNaPWgJSiNofa8f6CByrArv8mqrMH7kNqHASnY79SWeYYynrCoUfCCms2MeLVagxu",
  "key12": "39kbrZbZKCDHBfV9WAXmU7GmwRjpTTy4aerKMdJ4Pz9XQPax1Ju6AoF2NG45ERyLqttJCU1CYpLw5ecCzmUpjeew",
  "key13": "2829c1NaZmsJQYDESub1TtWcSzKq1scM46afEtpj8GtG2EMzqof5LncTR1bpF5JXUmjcobyRLjwEEeBHg25wZbNn",
  "key14": "3wgakWkSc32N17YFWqBEdm1hkvPSKhQ8Eg1Ak22qdJ2vVY7RVTtfDRKZRHgYyK1SbeBvhqbRFTRfhHfxqBZZn7Tc",
  "key15": "5sxrWepLqhGxLpMPDhkcCV54DfhPeZGe2JNmVHwYPUs1FSR3B6cUdtWSGGUnSytbAefsMTZK2K389yW8uSxySWYc",
  "key16": "ie4hDnaynmWx7ZFZV7Jdvxtdm6oyptQgxSevTfBfKwjxeNka9T5wxQXM6ggG49bFeZJav7eVYwb1rfcAuz5ZBqA",
  "key17": "2DQPu1HmxjCjYTpWX5TQPVaBoTwgBAmQh6gBWgeJKBis6BjGuK8e94SWKx9Qmd1PhWaRzTzAhTt9WmEGFucRPN54",
  "key18": "5TDakvacBKV3yq3oHsf46XGeTpUpdHPNT6UaePF4pL7VFKPShLdn7Mj34wj5i8vvvTNbmXtPG9cGszYG9z4AVVFN",
  "key19": "5MkduXNkrWMCg7XsE2JY8JH7AXK83U6jVy79Wc9SXTLjURHrN1CwmVgWhY3cfJKgGVZ8mqHXwwUq34LKJSFTHPDx",
  "key20": "4EyPcywEAtF9ZV2dcBU1sjrECPU6TXUc8eCAvHzHgF9wAEpD9vnWiFSCEwWeJ5yQjJdqRbVmHDnLoD98mM4Hnce",
  "key21": "66Z1gpM7XYEgovNdn1RutvoGGCjSBjqnrpgnCoaSJewjjsEuBrwASppSfZx2RhWiceQ5vMPoNom24oqyi18PJkEf",
  "key22": "54YKTVNexmzLS3WRB8um1xQRovs7faiqiqaaMcNdkqJ6HmVYS5Y1tkFvKcwxTFM1UmgGxCg6G3xCnzPGFX8GS6UP",
  "key23": "3PVPRSxY29pb3UtL8xmsxJak5JHCUqLJicp6AMK4WfqdV61vqKETwzHUbTWe9fh8j965rEkDgJg4qdVhRpbgTRWU",
  "key24": "2217xF9R7ya7g1YvWr5TnXcajgEmYsB8GDtjMSNGHRZeoids3rHbEwL7SQd3Hz7jokohpKHuf4SWzSdtgLL2gd64",
  "key25": "5BtJ7h96UXH8KdPKLQhsmMAyMP996j2KPDMSsjRovN6WvwP9MWy1NuSMtPBmQPds4u7yQZ3zaqQFjudKhFnNBqZE",
  "key26": "4o8jiJKJ6mQrEQeGLJewYsmoTFpmD7vDe2ryZttC9X5fExRBxyFz8eKFAtsBZhsTThW1kWnWyRnShekykqqD7SAY",
  "key27": "5srLBBihJTZuFzNJgnemKiydoxVTsBNoWsQ17WdyGNv2MRcsDVDvwH51vovRFaonRn1cWR67RZcYopD7wqAi92TU",
  "key28": "JgGbTXzQTme58f1iC6tpBJAcwQMsXWR5fugFfg8yescHnLTonSm3gtyj9sCse3L1K46AzhCsJiPtarLG3G9x6wb",
  "key29": "28ZNmKwAkTSejbX8Ldpywth9SsSJ2Mo1EYW4owQyrFtr9PMFmNwCvqbwFYAQdcnSYHwWTw185wJBgjG4B8SJBstj",
  "key30": "62BapzKqXdCRRBH5Sdan5Y1QH87oeQpq1NkMrMYdJ8T9BDQbFxNgeZtWeN1Rbxx58KByT5pk9A3aXs9WKfUrFpjp",
  "key31": "232aPnsrj8N7PLMMp8NAzWXwWUUbCuTvFeCQ9KzUA1Su8oKP4TzN7ZB6DLYEa3BKLfivutS7ng5ivUFiYbyA57dT",
  "key32": "5ES95KquYHdsgfQuxHk4GEKAENprtTX5w8ksuG5V5Zxo4VXb5aBLb6vLsQZGKqgBegbQFePc1jAS4As9KJB5rkkq",
  "key33": "3toppvMUNSo7UEjc5JYAfFfLK2PLY5joQ5cDreH6LQS32vQahbRNHgLqFzBnYku6SsYLU1iB7PjYif5JHSfxSGnZ",
  "key34": "4suVGqmkDbEyh5vtx8TaxFJYKAkYUgdvpXFyW56CPNibL2JHH2PanXZ33HW7nZoqHcr1yrVbpja1bqcEH6sVTrsq",
  "key35": "2gzBmFxezCXWRf1gPNyVtsN53kzMXTg9kq6dznVv3ncuRTBFUWw1xdrreRR9FRQmBRDMDWKKgqmrXx4A23JSCBri",
  "key36": "3w457yusqHWACe1nFCZcEHhFDYSidhNpyJD9gXLa6k5JCBPLxALJEJny7wXMq6jnThgoyK4dX4xQRoHkqhXNt1Ma",
  "key37": "cCSUdXHzpotyYJaqrsAD99fuPR4NZrjjBVnD8AhfXNwYyUZ6kvTd6MXfapBPUc7qwxAXSBoUAcmMjcAt3YFrgMn",
  "key38": "5xiLP8RspfrE7e9Fp4JMqJEsgKGFQh7b3eehqQybLmrN9eY4V3JL1pmepziu2LEUfhZ7uUwPRFv6NAU5Kjg1RrEB",
  "key39": "4DLisnfo8iLujXmRNJpK2KwU23X6EhrzqkCnXM6nJ5zg2V2nbYtkkGKAcikhWuX9KyZnzZCkPfsKqc9ktBVrSgc6",
  "key40": "48haopTjAykZBKUa1WPp9pp39YMfzzaMBVcv4tWS2e4WQT4ctutHEx6nr5ASd9j4Q9NmwNT2LUuevYnWFnL9vHxn",
  "key41": "4QvZZWAFSHLeeNTyhaCer8L6xBBQHUn37UPLXgDLY4NNVFVxaMngRGXkEYYnVx68drNhc6gVnTQPhWZAhECNnPM2",
  "key42": "2vAFKYUPMPYkHn2HmSwGq92BzDjcM8bDfsCvM6g4hLoEGnJNXFixQmhaWwwg7AWhN89Hs1hs4YssWDMmYDTcWJiC"
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
