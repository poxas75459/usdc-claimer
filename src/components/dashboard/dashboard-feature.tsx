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
    "uKA1coqVhTbEwirF7ney7WW4pAVayicjgcMM39s1UrtW6esmkdNe2QvBCjHE1JEJvcCzWmGkG8mkB9ECABx2ow4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iFitgcAuwumQgQK2Vydt1C89N2snWP9unKVnxL4meBEW97RnFNzfMJLBwuJv1H2mrcJ15yb82JWZN9Ar58hX8Xn",
  "key1": "4exJsYejqKrVYdRuj6HZ1cwSpVQ9RgU91g8F4H7LGjqtc2RWsYUnnRwawmv19esy12F337G6s7Abc7ksmW4UWx6h",
  "key2": "5FJTEAoF1t44WUn3Uf3sDaDYoL2Kxgepx3LwXVL8NNu4S7rcCrGcxTdiGApToBaPhQ47P7hkKgtRsDSAenGLfydV",
  "key3": "2G7zv6o9oLUA6wAYYt7hEiTaucEAmagndavqdXqHsyv9w5KQBB1MbwBS8oPjXFndjwbwo1wXMcbVeLZsbAkqE24M",
  "key4": "1uowJbohLwgmKpfXnrRmKMZYMJ2q6fxBpZRLQRD5rq9QDJYFhkEPX3AK1hGSh2cpb5iHbfuMuuPh97Nfg6tGgcY",
  "key5": "4kXsSDfC1sT1Fp94hN4dmhkzqYZw5AY822wprU4a3hzwi9wkf1DzBGJJsLF8kKeFnEEuopjDoX4Kp7iJobfQb85Z",
  "key6": "2T94CWZu6gjhKMavRCgJrEX5PWtUz1NxkZ5Zq2ad5KQcL1P5VLj4Mq1LgpGmQw9Jwm4BGAD6LXxVztQQgdSgBAaj",
  "key7": "5CJ962Xm1hmYqtCz9x3Nka2KDHwbSmJMNh7xKv29qGNLfCRLZ9aRJL2ZENrdrvLuJ3DYh4VfSkK2sfXspUnHED5K",
  "key8": "5ZVzkNmdfeX3VP3GYXBj4RU88HqmfH8QdThabJ48kccbLuqqo3QqGB113dbxo1KcFv45pgxZRGEQ62ktWDChtrXW",
  "key9": "2qNQjLMB1FPnQ2vY9uvP76KAxxDACjwhh7ZaMDD78r3zFZnEMnPDQH56pSt7URWZpU7FxatGH3vtdRdeP8Ld69bC",
  "key10": "bEo3fkGQEnaRuiNssXKPbZa9Wks3CeaUdwc6V9oHumKv3edAZSE6a8WNmX9SzZ4h8mqbARbj1Z11ahQS7XRmLjV",
  "key11": "5LBQz6fypwGRJanDi2T1yR66bdVG7Sc5c1RgprWycizq2LdVpeGSwKBRKHjjyRZAziAGePeBfN2UTtmfwofunQwV",
  "key12": "3j82QPM4pknFiM7dWVnSKJ3zwVFXLwSSRK7pXDez4wWfcv8Nj2pXnAagabPpsoH89fY7TgrNfcyCW6TiUsJpgX2X",
  "key13": "5Y6Zkwk2QCyTutjEjKBC1V4F3hdXZgK1N91JjJLYdPmQa7h6VvXMVpNHfwAZYrJtktWtNu8pTyidw1wuo5USQsMf",
  "key14": "5zi34KZZsZtFm4z8t4JSfNmie6JfmwC69Ky2R3schMhNJxyFPU6uCBY3QUr7eh4i2XNXipjnaJDHkoKPhBzQfzWE",
  "key15": "5vMRaQpbMVMeJvQGFNpv3DC2LyFFWg38bpj6pSDh4GiXyUu2zet5CQCd7W5cDzHD9HC3XZBrxMpgHsDFjMYCqSBp",
  "key16": "3SWkcGB637PHkKRcN3rrRjvmPe5PXkmM8oLNeQ49UjZrDvfCT9uS2ZemEgMP96K3KxqUz2Ltf6dZHYtJRBBN8Ysn",
  "key17": "4TfZHfi2HHxfYuBUcUKgRJQgEyTeNzRnMKgvAxf1XAQKQUh2iQpvxrNwx8UhAcf167inz91eeA68YusrceS3mhSj",
  "key18": "5Dt36SZuYRsozbjJacRkGH8h5qjxgnaGGH9wsRKkuTUUv7t96ciNGDouJrEgYa7kgjui3GhV7w4U8eTjq7v5i412",
  "key19": "5mJivgZ9csFX9gyq6yWqJWU1hJbMYzSG3vqggyjtAWCZTn3eP1w96W2DYMdf4ARNfkfBhV1x77ssZXbj8cgBCGd8",
  "key20": "5SgJk1YWkRDZ8jD4X1YLJuUa5wDgzUJRXfQNnP8T7KLtnqKSwxXbgcJm284SaQsQM9z2p3j4HxhAvYAtpYJe9TKm",
  "key21": "FQzzSe6CFQBuuQWe2Uy2ZGCKruyCgW18b5SAiNS37jC2Nm414TNsRzXSXvEeyj446wTQxoCc8YfJn8pV8s96daT",
  "key22": "3kvJv7jmRR6yEG2Nsxcs4J1o1yeBvDitZRV3JZ5kYiSGUZyV4qZ8DS1tQv2YJBnmqFZcaAh9mmwZVrm1xLnvfHMp",
  "key23": "3strUkFp2NVK4oLKWB1qmf5Er6taQNB28JmRPdotgavp5dn1rZ1JJv3DkR2wCaR4vFhhbC6mGwLXtTvgMjcfZ7H9",
  "key24": "3yKgbg5H8dW9GJuTabZ7kFHtumM84jxMyzhGutoVU2MtjXUGqPCB7tT3FXzBNegdoXJtHTWK66fAtoQAt1KYhKMf",
  "key25": "4ppMUhxpHWSRWbt4iyn7p2pmd1Eanyvmm6cJkNJ3nsnCmz4yY97zUa3XKKUhBbVXMJioMStT8tkk9k6f2GBPY89F",
  "key26": "4j1FwZAh7yprVMvbqEVby626jTJ5DHBJauj5L5dPLPzS9XRdJAe6Zq12bRDnwChpNFeSQARxTGvcwDgZnPEQE82n",
  "key27": "57BndS2Cjf5oLZ8Fr6hPVkNA78RFA7PN64pj7kd3tcoFubyhiiZCimVcrFos5Vy2RPnFDv1G8Ci8AxwYxGGRBJwz",
  "key28": "kfmCqaGWpNndu6AFfS1ZjsR3HYwUJNUQoSt7y7rMG7X1KV5Yzej3Ew4iccrANHqhS3yg4qCx5Jn3G56Ka9PW4xg",
  "key29": "vVfbfVq22A9Gs261yNiNuTbt6qzUdzKnR8aNwnRt6divKpSXQkNwUgeGimkj2YEvPwNrks45T4vP77XanTNdocG",
  "key30": "3T9fkwryyxW5pSCNSs5bGb8ErYiAm6PFcTPYfYKgcxSvDiMC5Qifmw4TSN8XcVjphDHJRQmRFsnEzt2A1c8gpn5q",
  "key31": "jZiZSbd8mHjyS6JmDMLGzpphi7oyZEw6TVKBTvCbv3HTkDsgiMUkWVDT4oyXCTNYZ5AypFyqujyzM21L2b94oWo",
  "key32": "56rzVkvYHnMwZa2Z9U1qYVbScFBNitqXJPaK9kkWjut5QWTmZvdWvg7xP6YFfDtVfjAypTqUqmN4oMeTvbVrEYUj",
  "key33": "3qNgzipB93Kh4viMeUCDepSmUkKbWbZDyQefnXBnZT349889V4z4EiMTHCQdrezRFRxUkTn1ajHZxGi4r4fntLsj",
  "key34": "GcFpZ8ZEYBFH373xUoJNVGDDJzouJH9P4BKwTV8aB7MTHMmcTRQs9Mp7iGWEfVvEDEwSNCg3N1iLapffAnzL1EB",
  "key35": "35ptd5yhLhzJNkEeBKodwvs6ttmXbtSFRYb7DT9dF1ampjWUgrEZbcRiG2KgS5FySxkChQAgLrZGUR1fLq2oKwyu",
  "key36": "4u1oSdRXL2F67X6N4zxurBgjyBWYqNUW3ZQs9neoYGRVm29WRCJ7y4TuTxdPqdSxpZTxRfPhS4ZxG1A6VA9Gbxpk",
  "key37": "5XgphgBiPgG41iNtCLK4LmzwJU7oWD5Wn8QBEMbbNjhvZEufEg3NxgRW3ghgDhJ6Pm4Zr7zV4AhwUFRtuJmURuyx",
  "key38": "17vatWf5piYL2SSNShzFhPctDExnZvZtTwioQarr6o1LisUDcBNCQTLCuJdJEnqYEhCdFF29BCdXQn9bUwf4hef",
  "key39": "2FFumaZkxEGuoCzievA7jKRUVBeNFQJsfE21A2G9Dnoef7q5KWRNxgr92p8Fs7F4nPHT2e6aX164LuTyR95jfmex",
  "key40": "3aQkGqqTG3azfo5uK72V2W79t7TY29SQwRQgLJ35Fp9pkhvVj7hRDrRG2NPPrkbaVZaE5hK1b9Dc1coVUhPQQoRc",
  "key41": "kJMqnj2jo4Wb4GCkwh9GwxoPFLVnpZykL52zW5caFcxA6dex8xgh96EV17bjN1rjFm7P2L8E4ScWUWDnKhUbdkv",
  "key42": "24FpK61ypMBtVHcFGYYRNuJkg9mYVgKcveDd2ZRTKoMFBBu8Cq4U2stCF7cxUEnV7gKd682SNZXgc7qW4ydb72dR",
  "key43": "kQ4dLjZMM3Pk33PEgShoks8MsPDdeMbZwdHZHMoRA9kaisnnjucB1qisj5cvccFmPFgZ3dydTJjNprv3LQtw5EH",
  "key44": "2r2mBfZuvr11Ad1RFLyzz3xiBGy5yPr3L9yC2CDv1maXHfTm3tnQAeFbMswtTSQ2pRwSPB8ZRB1Xm2Cn429LwaAS",
  "key45": "wEQkWKxDLcZ7cucdi8dkDDySedn8HL6Jz5Q3rEHiKW4ADP9G93NokBH58UZQHmuTeVKAFCbbyfnE72aHp92KcDm",
  "key46": "TrxiaW15YwLLKYLn9tsggNche4Bx3oR5ofeRY2iQ2uWMmqYzVacjsqGKfb7Cuogu7Nawdr6NC3ws1WPqQTRcwwb"
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
