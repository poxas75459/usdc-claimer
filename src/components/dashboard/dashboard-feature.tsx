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
    "34Nr7YieDzsjUu4vGSVP4P55SVNke5g34mvqi4udjbRJaPnKspDDYRcCfkSb7oNdBVor2JapovrsGtxQEZvm9edr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "js3FJNRa8Fo1vEmCrxVEmjqHz6eZSieXNmzTe1RY5svAUQpqpYGYjzyB1r4tbnPEyWEwT7V47wFmdxNJnHAMghr",
  "key1": "2XhQHa1agDS1NNm15ho9hRoi4zQVxdKyVMBEsp4EnCK14au2yu8zomhBVuA6QAbtwtjw9qUWWvdT7KzNWuBg41T8",
  "key2": "42mXkFY69TEVSUbdndEkz99kzFUA5eB9L582rTXqzC4sZFH4gQrRn9MfYDFypNF57wB6dAfpjVLsWp24ztZu4i2m",
  "key3": "4v3Xpu6vtg9yDSDHy82VA8UviTYGAF9n7EQWvKnwWQvwvwCZuMj6XzY3VnasHGAkpJ6JdqVLSq33VZfvFp32hr71",
  "key4": "3RmoYBJaoy46v5VAW4KrJx4NpRhcMcFZi7a4qbFTPaxW56bqxvAWnHR7T1deqKPW9MqDwkhCPgMVzboWsThAf8Rc",
  "key5": "6ASsEoizBFe7FiFEk413ZTgd2Dapp1dVY1oXCPU6Lgz96WA2Z492MfUGEgbrfdu3tnVtk44jrPNv4Db5Sqnyohj",
  "key6": "Y7hsMzZWYm1kEGqvMD5hz1APK1j3EyGa3pWZv3bPBqTHSPU3cmU7KhodG4a1jEc36qmcom8QA8yQBunhDrYzVET",
  "key7": "5BMCRBFwKyrXjKuth6QgkpoKehc6nHw4dxz1TeN3g3AAEEfLTBmV2mMzwp1PGWA86RwZH4sc2auwZDDU7Zy34hFW",
  "key8": "EK9ET3zqBSkk4WPqGxr86DRpmvK7zS5Q3SDVq82PArbD4syaGU1JEPiwX4bEyqigcRxe28v9wr9fBzEvirBhNLX",
  "key9": "mBRfigpF5FeqiVeaTWwNBc7CzZSzKkW4nHw9bwb4DghRbay4sqB6gYVVSZxzVZ4DpSCuwULHF4mzDfJYHtrh2D6",
  "key10": "5Nrm8bPcH8yeiLaRcJ228G3isSm1sxNfRBdBHKSckc9BAKS61Ef3mCqyJHCSxeZMC4RHm4JaPQdQtnouwx2XpiRm",
  "key11": "38Evby1JijHi5uoiyMKZz1e4v5ZW9fvSh1dhnqPKntihpZHktKhkYFVJ66FMhjpZZ6R67mzwM5r9oKWzcmfAtBkC",
  "key12": "2KYaHUVe1hzjP3xNmCv7ozZNjmZDUQQiiVHTQmd8jLJKiSEXSj16wiWcb6D3SZHjWu4QmTnkr4W4MkrR6VJdh47M",
  "key13": "fpkKsLfZJKZQotqA1jaxLVUCisvFyyCJMkLNvEw4QyEAfu7V1JSuSp73TmzU9DXKj9ooFfHwBxVajAwniHXTtuX",
  "key14": "5bLmp9jdas9aqev9vzWPaLw36ej9PYbw67kQQgwvPTFj5fMvw96h87wd5n83jjtYx1DecRWw2e7iN3dixaXUy3e7",
  "key15": "4eSyc63eCfDkgC96V8eyLudfrHzyRtnm1FqJGEMFFn4jDzH4H9PsGfpVFQ4crt9ozKKTxF3fWBf3XF5me9VWCn3n",
  "key16": "4Ym9h4fkftS1iq1e2UfRhU9wyenSVWgo7d9zSQdj8Rv1KkoyhZAb1knAxsK7HH2qPpGiKQ8UKNPaXq7GrMkEAkLn",
  "key17": "Sm326uj6XAvEbaaAeDETcUJioAyxjyPTFZD3iD1RTrWdv4EWAWFuGmR1yH381yeZCZf9sv7ume45v5JnuFNSczZ",
  "key18": "3WVaGCZKdQgkE7tfUQjvTp7pKTDvVpSQGLnuLkGRvu4tDENVM9fPJszryhngbtgoRGTLko9WWnCAMMV7DVjxYK3J",
  "key19": "2KuajYLzRCRoyeyXAzdpVUgvp7FUn7cdwSsWPLXASTu2ZPyPao5eMjNDVKjA8zKjRXz8kYP6vyo27nRQnkfg3PyB",
  "key20": "3Ecbw7C7uR4tUmdb1Yf8KHGGZXSes5R4zZMzUdNQnHQ2DKTjmP74EEKQkGRG97BokST948XXu3zcP9FTqR5diiRR",
  "key21": "2jHauwckhFzxErhpTJZeuZqwTtQ4C2stxMB8qmhH8EnLmK5cZGrT7rDJsAWkTdbDCiRrACoZzg4WZyJ8dwr8G3uX",
  "key22": "22bz8SPgT8m2173QodsvhBNRedhoMwvdd9cQsTDhDvYGc1BbKiHxuzsJcB7pwMqEWnYyH8SYAVUXQTmpQmaaEQzr",
  "key23": "4p6KiHhZRX5Z2BNtsSTkbEy5jRmR4Gr68FpVCwbtXVAYRcGbYiHXURS9L4dL4ratbnYJmpLECk7WC4NFt59DREyn",
  "key24": "4CWrSuUdqjd9r8Tt5bXA9cPhUrW7yzUsNPsSFff6B4C6WDkAHPSHxQFM2wR44EjvyZeBvt8r8uqa5sS8dyvmea6K",
  "key25": "2wCexXgRrVKWC2LsKruKf86cs8XfZyyMV92GSdq9JxiPW7jLE8dgM85uiDfGQwGTYwvosoEhZx2TiMd2pcFEYpCH",
  "key26": "4KYqeFGu5PNsrzTW2STJNZgk1WoWucpfPaKvX9nwnoj62ejmk4Ad6Pk2FuDGY2iS8sHTjLcAfgQk79j41YBL5d1Z",
  "key27": "4FknJ3W6koTM1t15bZiMM3pvAxqHUKE8ZDMymx7wGmH7ZU8Fao2B9EYk29F8Znmh7aWLmo5zEd9nm5EwvmKgfm6A",
  "key28": "32AThq4uQ8rU58BXG14NzpyJCsXBFQkabdanbQeM1fND2cJywpZvSrGvPbUEh2txPmU5qmGq3kVdW7Zcx5NuWbRY",
  "key29": "TWXUsgui2CCRcD8GTgFsNjGRfUH2NRmUQFaH5LmdbcikVYs1UUcHJsy2kPR2u5UCEpTnAtNs4zE4LTx3mgQCcZH",
  "key30": "26CYU5U4jaoyrhqsHjMACYxfMEchML9AQMoJHdiDhB8d4BCNRkqyTdTRA2iJ2vM7JuzhPwGQJ8xc9UcGfys5fbgw",
  "key31": "3Gnhono6KKscAEvJPFdod4BPXYzhAyYCgbwci6QQ4XHPaEcNs5mLWz4VVyEPafNVaJStDYqaUi96uMFx73skhkNS",
  "key32": "2wj3E5FAagVR6GoPy3c4fbEYj1CjV5ER8FuqjK3cSBPYda9N3cHPgkhGDd1FzkKYg81u32bhsHpt539UdY1sCtYd",
  "key33": "2L64ge21RWTLxwvT38ctQX2GSw7SVesrBBAMoiK41rqhcmCDVGnn7y5MhVhyrRftqsrCCDFDMcEVL6zK7451SS7P",
  "key34": "37P9T7U59o3WszA623KgZgENNGLU8EqVdRCoKLqkCALkmuCcLsjE5QTAmSesHZ8KH63QDSwoxhG9fyvAxgBwUedT",
  "key35": "4MoUVRRRhEMLdk7qFJyDQQEmbxsn3APxd9dvAjzzoGV53udBdSrNpxL2LL1afYqL9Bj2Ab85gNCx24dSb5yHVyyM",
  "key36": "4tmT3Xvav2TGQyNagweettXnAGZXJykCExr3jbD6Ci8YrgrDV72j96yD2MiboP5bxFxohg4sCASDtfLdrSBpjprN",
  "key37": "4tUHr9SmXo87VRUVaxkaP7nVVrXRMU6yKJ2yRVohp8EiTJEpBpbzbFaCPkF25RuQkDTJvRVXCmtKYdur8qUaierc",
  "key38": "DtW6NwCkYeTgiqWSDgZBeJaHj3qZLKz1aT6RcVRSreSvPA4SxrGUcSkMtF1aPS158Hm1K7pvVqpZKf9yn9j5hpg",
  "key39": "stuJJtduLgmweQqg4E1sz6kZg8UaxVXu8dHnQzcDrRUR5ir7ujghEUCkAUibaH6RREPjDXDnrvyDv78QJR9uzqy",
  "key40": "wdPvtsVPVVk99rfwRcaZU6wwUiD5jZnK3a4wRuJbqWk9njaaBEZDSBnpEEzprVwhTPNYDsntWv3uchU5GDWo1km",
  "key41": "3FFsqLUG9X8BdLMUionheEsyy1BBo5hWCN6uASop96kmsu3SJpnUzycHobqpBndQsa8svvptkXPCGB5wWPPiD3fE",
  "key42": "2T2D64Y7FHnwMzwZ1UmfbyV7WXmxESBVNEvGJ2UEKXnJxTJycntJFvjv2x2DoQVR8GwQSxpewPKgp2eJr7NBiFma",
  "key43": "4Lu7oFJBYwEC3d51mMQwZhB6D8sSCKuHRYQPFbvx5KxfNYwc1c1xgQpKbjy6yKdV4gRg7ZZdEtktuzWf4kqGd9D2",
  "key44": "2Ay5WZXJwMpBUL51JirGq1DWFkg7XmVsczsrYUf9K2cTBT8xK2Km5pkrTAHHqT1rKpFtxRtL3DagwLZiP2Lb3j63",
  "key45": "56X85xPiyQbeJd3wGvUuEKp4TVGDir4tQRxvu9PSh7gRv4x79kUnzdomm1C3ukXoVz7M5wKT2qJxhHZwU6F8jFuj",
  "key46": "2JWz6t9jrkKFpgZrWw37vynbJaxF9zr2U7JNMCqMXrp4kQUqvfF3JnTZFzVp6q5WGERe9HoLL1GHTzUojcENU8q8",
  "key47": "4DVcSRkMmNetD1RQSctjCFMXos227STmzCPZ21ki6Wn3dagxfURdieW3j8YZruMZUbQuaxomgD5tegtP6bpHtCm2"
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
