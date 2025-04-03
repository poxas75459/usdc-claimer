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
    "5D6jCHn3EeowYSip2UkjrjhwyCeknAJi94t1Lafq2fdHQ4qiY5JiGcrgxrZ1M9H4eE9dcnDAzQhhv3ZXxEQY2K3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NEwQ3v4mMqw5mr5Pc3YngLxp6SkYfyJZmjWnXurKUSGF3P67YeZTo8GWT4mq9nwPAJQUkD7bWw4wuQbsTaRHSNq",
  "key1": "djxpwUJQoh5dpdQg9QooFuC5KvtJTczpa5gbBMPxmTjmobWwKEsh3ygASoUBMhvGgBnMXPVq5Pw8akbo9u4oZ2C",
  "key2": "37AnfzQAwTB77K1CnPfYRpkuBhKohwUvgisoMhRPnx45mxDgb2enqqmdaxHLLin9dGiThrAp3XDoJsukKihubNVN",
  "key3": "WXRKRJpV1oBU4TFXwzBd7pNnReDxAxtc5kdbNZAT8AqWq3VjRHH5PujBaefwFaB63XBQvVk6qJmw4tf83mFu5ou",
  "key4": "3bFtaqkKo55B6vH3bYvU2sSqCJkVKSLxT2PFcdax9UyYRX9sWBQH3qAodKC3v6DSQ4Sw2oQiHgp9xzscXkc6JmMG",
  "key5": "JLfBzpDD2Y3HjHyAhNKfWNdfmG6vwWFYtXqrDEU2wGmiyqnhx9x8ssQpcWpCpXL3QEBdgf5LpgsbhQnhb4xqnDJ",
  "key6": "3LRcPWh5YpU4ALFAov3BMMV6zpgfNHMuQ346rC2HM1Bh64zchRsGWjvzEDQsYaZENQvUo3sCyhcFU3djkxnksMZu",
  "key7": "SD8E8rQkMkSWrkGkR9LWtn52cjSSUnDHpm55myoejfW9NStYxArHAHidoEkYM7jATeTUpgoH1RfFE2BvBtjWaLe",
  "key8": "344KsTh7n6GB6zf8JycMDWFz1sJPySSJHmWNBcYNpThqkpFL8RHBLoj97vDBjNFbysQGYF3oSut8vdNhJAVs3Ghv",
  "key9": "4QbT5sRLBzKwG3AjdLDg6tF9kfpaxyHdvBBHNApveZnYHQspHzQRirvknpgBkFuQitcc5o4JtrPuLnWiXsnUUZTm",
  "key10": "4461rX1Am3s5QGT1s1KRrJCgseTzmru1sW2n23C9qeAtvjd8Wx5V9ujiTP8LEFF8dnioVuVPdfx7m35BTxTdXuvR",
  "key11": "tEEqAgAxfiTzLNZTHt6Wd7qLoYRfaqYwwbpKsELWoaGrN6x21KSGGYny2dQygdyDhH7YcYFzeiXKr5iWy1FKwkM",
  "key12": "5DjdUJsfq4YXjKBgWQWgaiav6ZrALHV6gDX7kwaMcW3zt8f3uPEsNWDwnReKpzPhBaZzamuHb3FU2VM1xE6JjhLx",
  "key13": "4x4J9ZR73sEHYHPZ2Gjhphiyjwgvw3yXu3mPeVxF7mD7thHP3qDK9ncGKDYXfcDU5CDVBBeoGRYvC4XZnmMNQSq1",
  "key14": "5idvtvo4hqhgxmvDEBuBafEEswBgGjans8osFkwTnNs4PckMuKqtpeoqYhakExmC4mqoJ7rnxkHotbtpTFnDnSDd",
  "key15": "TwbseMutrf57V2G4gZgoPG99NDyP9E7FUS9MDjj4EruKr7V8XszkT3Y3PiA5sivuRwq4hSu726YyGYAXoPt2LvU",
  "key16": "wEtHh8yXG27A4jXkBUuzoMu7cc3p6adP3rAAALbCwxEF3XmTVcvtewkWFfqZuTz2wGrVWU6wEYkJfhi8ckhgQTK",
  "key17": "3gBr82XdYURKKrb2u1KG6q3LgJWm7eVFuWa8n4AZYWs11kjTiuyin5ymtG7fRnewfZAYYFt3JUkvVAWdxmYWCP9A",
  "key18": "EdjBZwCLrMiJWcBQcF1tCHmhqgqHiTYcxasqBcQAEexjrvXNcghCcAjb3yPK8fJRRioDurSUDGuFiXACFRo8mfF",
  "key19": "4Hx91aKpJgdo1E1bbr7MWWThKof8bZcw4irP3nyPuZbbigyQdBANr6F4jum929WmwDnV4uPrFXqV8xGFeq1vTEu9",
  "key20": "5w6U4BsfpKTZLCYSWsQYoRggLmnWckUCaZchp5wavuKw8zPiAYYZR9f69j9ojskRc1n3sak9Xjep3D3sKKUyLPTy",
  "key21": "MQjcbXuFZ6LtP6ZYspiHwUpq9KTWpqCun27roQkLM6gWRkwXUGvorrLz2coJQ1Jytmmj1iaTc9mZRcE6dt6jYD9",
  "key22": "5MPr24US93GHYsBbQMzkNqhd3cnhbc15dDsysmssphz83DxdjcS9tZZN54mQx9beoJ55YXgQj7dB23NsGX1utpus",
  "key23": "2aqCbvAf9r1VpAAZqAfqfTePtwrv57YYqCH49PQCCKSkUWhBiS4F184FFLpvVZLgufwLjxGw1jYP1HE33xibrcCp",
  "key24": "4qb2RHjaJm4DsiVKnYyYsE3gmQMaXDDqefi8NmT84keRQTTYhtojbwzze78MCVJmpSvrtr8YB5m9CL9p2vC6tH8F",
  "key25": "61hdopbbZmHNbb3dioCBZUJKLmKw4Bsu2AwjXbrawy56FaJmXihrody6vqPxeNQgNkRdCRmWNHHJxzLp7DZzkSjp",
  "key26": "5VxHcoR9LbxLdJ1or9WdUbPF9Y7yLYjTwrPttYu2aYDHcjQvFLyYZ7kxhNVgHhUrnAkvxg1BWnAsPdbY2x1V2QY8",
  "key27": "5Lu6F44TCbVhYnqfSms95gVUqVT4DsgPLHkuuQVoSCX6peKqz3gNrCJjxAzpsK9XEqWW32fr6jhWcYmoPivxJ8zk",
  "key28": "HfLfJSGAvWTMXiW32xnwYRWz7pQCYWmBMyHw34KTAAQhMHRtcnui7Xw1PpdQggaTMQyTFcTXeyq8osGx7depQ1M",
  "key29": "bDPNVYfoQWM5ULKU3MEVScGZNzCYn6fRrSQ1SBFovBetHJwHGf9L4yX1v3fmMy89RF5ScQ49WpKGg4JffdC2H6V",
  "key30": "3QvrfCdyVfYAX15zXRKnQnLqfU2dVucoATkyYnHzzCAcbKS8YiB1kMNaBAYKSUeZeiVLT45sxinqFvUuLfXAkn28",
  "key31": "2dQ5aZcXUGMXB3N3SBM9pAFKmwP6K1H5VgNKKUuPCK3nCw4kLjoJMe3ATiTzuVcrpBKSc6miYSbWwz4QtCDXS2JU",
  "key32": "pu798hrkv3ndqjsPNcJCNhg1byEAMbciSQHNrtc789Tc3kYPdR5JCeTfxEoJeU9fuFqo9QNNmhtVr3VMkaLfvMz",
  "key33": "2nJWNnBknu174r9iHCV5UpviQUHn557u945jBZCc513QJ2BpMGdf9v2stWUK61ZJTW6ZCBUGKETypRkU63qtj1sz",
  "key34": "2cA72QW3Nb5CMMPoPgbzM2Y8vCHqMKmkWCPiK9S7BWzhuXeDpi9fPiUReouseYu7kv8xu2tKYqCRhaHkG3gRt5Nx",
  "key35": "5AWmUQBwr73g99Xbr8zK4GKqhhT5Sz8pCqk9L1dPFE8ncCuSn8LhbHHPM6ffYmViFmfMm1Bg49TqShFdgBKZav3G",
  "key36": "9vPdk9rz5o19KzfUEB6yQ3a2eUti5scpWsWMg3oc7YnQGKF8Divs289eT2AHRUrret5h5bnvCNC7wj7g4kbDBGB",
  "key37": "5qqDgHNa1JcbzjnJUaCXuNuZAhxVZyucTUSDZKWc1YNnFohdyFsc3pr3Jqd1fDqaiaQu2LDGYBti9qPTtXP6zG2Y",
  "key38": "2M8vL4FJwd2BGWShL6mcN9zXbCXSR6qqLp5wBx8MzBi7UpUg7W5G6hXMJiWBJjA3QqofC6tteM1FDEppNV46nvf6",
  "key39": "21mzKX2cms9fZToywCWw7u7bytsMU9ADUHYbkRt84N61w37Liuuf52rwyFkiBCor5cyM6fjX67aQCtBToHhXjjCp",
  "key40": "26QkSgW11cHWE91Wyyro7rvJcLKgrYtt6YV7LenLPoh3dyoop3rJMi9MJruopvB8oDtDSmULqNd7a9HUGACo1QP9",
  "key41": "3oqJzGBPSze9aVfZTc8baQu5EXRQfKUzjVKycQSpjBYR6KYPWGqDJuBVw115kkjPDvbAydgzex4rwnLTTvqzNjhX",
  "key42": "ht3y8TMqt6yRBVZ9Pi4sdku1DRKHufK6apB6dsUsdmvYVhoga4GkiVXYKeASoZxirAD2YpKyU1hUKCys5SPUq7N",
  "key43": "5hx4vtN2QHYH7iS41Un8okpmSrFNYRqXDE285eeU1LJhuH8Qgs2bgfgD7KmDt9JXzjUtk5Nf4iUHe3nPz8qcbGpD",
  "key44": "3y71nePoTmUQvGa48WXbNkdiwvKngUvBtjton3JvUvqttp54icEeCBLvh7dcuy2VXnSdsH2e8EsgcjjU6zyizbTW"
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
