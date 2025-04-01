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
    "P5ppwL7EvQwxXGK2avAHimZLdyMqgKYhAGbM796nyP3aiZfXtuoyjF8fcx3qgWcdgodC5AxBA8FjZCX4W8z9J1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RkLDT8rwx2Rh9YyX8AVYj6CbwHBy9LQ7F49okgHa84Z7WRX1JW9a33HfwYLB27DX9iZeFKvEjdZNiYyVv9SJy8S",
  "key1": "5dsQHF7vS2qKhetDwbeTx3X54sGakbLZftTzEJkLtCkFwMvtf9h37bFymHVnB83eyZ43wN5trxqz17us3YbwjQQY",
  "key2": "jZ5ssedL1N4tvkbD4vchGCC1VQX6JBmzFUoiyHWsY4wd5s7ApoHuxb5aocBBsxqcajuRJeNoxLrMskQ3p4ArpZA",
  "key3": "3FJgYmAGJSNqrwXXRxHmgQDDyZXBMmHPAaX8B1AcPf36KA69iDaaNXy95CLEwMBkQWJEQWfq6hvyB3PZy8ikhATa",
  "key4": "3xtyrE1p1wsnHiy16EyzvcjmBsRgN3D8Wdc71Wfd8ifuBT4LkXnJrQZqYs6z1WWVtCQF3ZFa2ngbckoHKPdngjD2",
  "key5": "4h5RiwgC4VdT6AQPVCvQaw8W4zqNWeG929BmggK2qXCN3m6DVrJf3NbhUPSTja5pgNLcBh1Zuz1p35T2gNNdxhc8",
  "key6": "51DjACakHXAVHMFpynKdmxgFVjZGkPQhUzH236n9kjWHcEMKNe1UYWM8w3SsVZ6Fyc8atDimKdkokCtdgkhcLfnb",
  "key7": "5CTFU92yzU7YfqwWGkjuK9ciJC8DasCmgPocukkWVSfAXZ2ShyTEwG3Xzrh6LDK4nmjZFF66gcb2ZkPxTZTtqFjJ",
  "key8": "gSs8dAYZvi8HAGrXtUwazhcc6eWARNVDAc48BYbktoH57T1VXkEhcAxrD8YNtjVwTDnLjZNksWAU7SDjDPgWESW",
  "key9": "25cnUA5AA8NL7mg6VAPd41D3FoixXfERMxBVeVyDEu7E7fw67wAJgZqu5a158fhpTLtSTQd24QRbAk7VVDcUMvyJ",
  "key10": "3euZrhhbgeK2e2eYGy2Hrbt61mpM2e5CQbGUVwfG9kVpfT2LtgCGMKuQPuDboQMe8UBXoxydBS6udaykmaSok8th",
  "key11": "AuqjYrTVyHyKJ9c5wsVRTk6gARRSGfyxwQNobqKywdg2gvK27vBTScbR1AUTmkJ92Nni8AffZ9zY7pNabZnh5hN",
  "key12": "R2PGemsHVBjT8CreKsm8cJe3R4eSR9XYFjJJzCd4WmHyK519Ns73x5vRYqbATndWVrsVMgSBzb4chDRWAzXP5LC",
  "key13": "5Cy9szp5pYBZtJWMXPYFptQjPEX3zrWCN3RUK44cKRkjLx5NfbKDc3T7JUm4vcWnVTBX2sBRFJEc49GPYaoCXJqv",
  "key14": "3WKL12oZHqVaKsqULUzeMVAEHcWidpLPsPLZp236f5EqSpMKgNB69YrxtRyYduVUUynYnyWLx3swWWN1o6mSJ4wa",
  "key15": "5cEHE1uveefCBdSxcMcsAHbvercNUTqycgVpB6XZEaCHG2bMCXJah564G5X5L7BdaN7benoB3Yug6aa6h9eNL3hn",
  "key16": "5TRzfnMvdL2JJTx2gY4tTp71RsQ5rcdngZmFu7kQFaLhPt4dc7a9eFcwn2CSMPPWsRXxk3PtaAEXsEkoGZXg2bpB",
  "key17": "2mfoxTF5Mm16Hv8V7X8CG9VzKcXuRS7CF1uyR77eUvv9kUvTMawksSuLNrJzsukZXqR9HDFdhgMRmq7B5mowLCrD",
  "key18": "3Etb34k2TpRzgicYeCWooJGCTi57QF2KzxPKoUS6AEJLtBUi7vUsLfwHMSKFPu6BN8XRq1i2qqps7i2mJFfzspEz",
  "key19": "8wohHnX9CaXh38DHEQF8JrAsayyqjGvGykLLE4WVbF3x9KEfQMY2vndbHU1EvdTTso2Sa9mRY22Y29JUve3hamJ",
  "key20": "4PPrfippGsfeo6XYj2ARZGZtXeq78YWmzVQu1mB3sa95H7EEGeKyTdRMdyCbfTceMCRv5JDbaBdiPLu5dvcSzuqj",
  "key21": "3jJKQq7iaRo7Wu9YBF2x62fw1c25R2LwF62nZxigzXbVT8vbK4dphqsStgRMTPfaYsK6ZM5dxBr1JPMFbBSB4Wxv",
  "key22": "uiakb3koVkXAWmKgLtJuffidC1dm2nXRA4BcLLzXdSseSMMt8p5dnsyMruVdGnZDdp7u5QqBk2iepfURAJ7aW6G",
  "key23": "2vWdze8YELX6txu3hUjeTkiYvvxqRZ9he8gVZiKpzYt4yz8U4REfqX7cqCNtiHZGB33PhoBabvj2K31N3zZUVdKF",
  "key24": "gZgKqHY9MgRGPTVTU8qbXKcwXcmPiRGLkNHgx3m3j8T8UniAq4hcDUVSBAErZpnDN58SHB7fMofK1YPnSDVwgCk",
  "key25": "5oa7haKmQTf1YXruLMJHPGLCMW87ewp8uRzABKregizaGfHdRRHfWQQwfXgcnij8S3PcA8Fgwo4YYnVsmsEQSrCd",
  "key26": "58EHUMZnQtJnLHhmyrZNWLWSaGNxNauQJB3kLU8UasaRxkix7vDC42dmWMMRMk5Jjh844i1u2kc79jPpfyk2oddC",
  "key27": "43nj9adhzqU9WWNGER9ZGXwbJzsupbq9eUeSXp63gdZSwKLguCz7HLvwyHPjQ6xC7bLocKer7LnWQYAKcvcGdzMU",
  "key28": "3mMSr6E9XEWyKaL7zWNtz6EWBQRajj5oEnguS5HzDvaWFF4NX7xr9kDXTZywPNYw4wsrCfjhjHzR9tCewTmo15LL",
  "key29": "47jsbPAjF6mHYUcSy8RUVbWb3bb7vESA62b8VtAcsKCAAZsdCLKG37sBgR6HeZNoXQWy4jr7tveucYC6SZauUECv",
  "key30": "5S2n2eXRvjjyqTuezvBo3wkhwJGNyHTG8EnFgoQVEHYUDqVh6shZzC4LBKDZWTckQTkxeiKbfUkVKccMQien9pEq",
  "key31": "5msPhh98LnF8W4aHxZodttHsJJZJJH4PSLsxyXcMDZdvJxmkLL52CbPurTjU7mWHfsUVn8eD6sdAcfjosLAnsSbE",
  "key32": "JRKLmziYWDkhctCzJCHiJVDUApLfz2XpmUtNcArkktwr1Hud2NhRoDULmphqkFRMoWniMy9GuosvgXxNdPudjn8",
  "key33": "3bzXArAu9F8qzGgDzubWGMvZkf6CAe3cxqEyr1HiEaXDtxxKgJvbdQmpeWr16MMvT5FDAogdrBisf74Gj1jWEgPK",
  "key34": "4mS8PLZwedsWwx2QruBmybtFbX5bnF3QUgcQYpc5PamQ1JuYkLQLXxNAy1388Pi3xi8YUBxjByfUtmne8XLFeXh2",
  "key35": "2uLCroMHQZoowmtHwbFtqf6xx9xSMhjWaMPXBQdau84sfz7zSPAJC7zFV28BAycEMxYaDnY6c7zjUutTFWNDLYn9",
  "key36": "3UjY5dx4J9w2ZdEdShhS4ReUnP4o6YVhb7wVqbWxf9EqRNVE1SqwWhkCmhUpF7b5yFViyMpSyNG6rbVFWatM5WGS",
  "key37": "31LCAjid42czURLCtdGGhPNhvUtDj4YtfFwmprpzzAQ9inzbHHgLzbio4kwVVwNA1haZTyLizGMvCx6wiahhcfPq",
  "key38": "2koCV5XNLq7Jgo8jQFYmnAXh6YwUcCrDyUD3ETZX9RvLQ3MHcqCzv3VrCb8Uwh5dGoePKmEp79MBvXbDu7VYyyMF",
  "key39": "5r1z9KFhzUhzbaAJWRzy5cpWfhfUHwFArFGiojSmYmujHpdfAiHnu69tYG9PC884oe3AQzLsESuJKJhBJDcHFcvv",
  "key40": "4o4byjYaVgeJMysmM5ARSY8woN8m5RLN6SVHV4ykbUHPx3jQEfq7xPWcbEe65ET8jdRFMc6qfRzoKwCAj8c8EVQs",
  "key41": "3rYbHdXkuKLUC8LH2hKp8v3DPvm4nbf9FTyDe9NDej8vnGbzNCDDkaaGrYC3JbCeB4aWmwHJNTuJwpDtHKz6pqZ1",
  "key42": "2SnPei2NhkTu58ujXmwbasRUcAwqsbEhK25CyJ3zEBApKz3GWKn2nFzHYdctVqa1cHsxnCBTcUenxqjePhZogTnz",
  "key43": "kszZSDnN5wnUcqWuK8iqqfKzEPGinbspavjya6hQLG39Ssr1DgSgCRSsC6otDCHQjreATK73DtEKpYGgTpBxA7Z",
  "key44": "5jbzQiBXaf4XVo4WQcLwAE6ozWWoyegk4hMi9jwBKQVzcxakDNn8dXvajbz1u7CVR3obgoKn5wSEozkUs6EkqTqj",
  "key45": "YK8Hq4Pff6WHegq67u6Xw8PpgHJDHx6hT6GPpULacYRe3DDuPeCBeHWKXMCKv3VrMmKy8TraWTDFhGx2Me5iQLq",
  "key46": "4aPiHP9Mi1t3hRX8yhwMBneLjVkA59gNMC8cyUS1SvWvZkspkz5g3PztnxQXQwEtadyFWn9znfCVtbtP4dSHFEQe",
  "key47": "5gPMdhcMvuwYgjzJdrvoyJWoecUQ59X96wpnS3NzyF5P4i44iXQhL98ai3BpV4YcoSpmSzYyqr7U9ya2L6MUBqEh",
  "key48": "bTZg9A4QAsy8fxW7ifZtLerhjmAxj4tRnhJBAFUiYTAPZqd3pB4b2h8XiZNKDVWmtPbN2yDVhbyHWCX3YSsDpHS"
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
