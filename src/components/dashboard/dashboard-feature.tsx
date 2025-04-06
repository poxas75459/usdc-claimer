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
    "4VF2s4Z93Wa5GCNmX5nrTFSydoFzwswepjVxNJqrAz4tQ8Dh8GdWbCBa1c2jvGBKjqYyi7UdPXNAnGsfvWbADKhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sp8FsDs5JwG8G2YA7Qu1gf1H5rgfW7ZrhypnKbXbg5spnQ5WGYwR8s6V3XU64AU5X155pc5jPPGG14US4cVjKQK",
  "key1": "2QcMVzcDcYpYqJXnRN2b24r2awZxhAvvPaPA6Ff2WfRNXA7KbyM6dDZm3rz2DmxsxsZmTjEDk5xDtqpfHQQ1BeLw",
  "key2": "3Pb7zH4q5Z8PyXnEHXCXZcXWADChVnjtQZfReLBRCHhypkZZjCB2asKqSyNf9EJsTeME7ZbYXK94zoyv664mLPsk",
  "key3": "W6gwjos9BgJ6EL5VxfmkYj8v36CBk29of66kJ17Bv1VWBt9ermG9A3VfssJRxoFTeLCnWT8413LRrJQ5dbEcUEo",
  "key4": "2jTXHgPTiCitLZdSbB4YgeqvvpktNG22LLnu9qCuC6STYLytbvkWMsWGxUv3qu2TeEKkkcF6HJNdAMPM3PTmKE7q",
  "key5": "5cocDmcPqh5oBXL3tLCrGBfWsLWRUteyLWrwg6DRe6YPHFiYEUgJdjwLV5uxpTWKhEgg6yBoc6JGf7RSbinU3dja",
  "key6": "5R9xzL1ZB5TddeRKFeX4jCUuSpLCo3nmH3j3PGiUQkzAZAsvfaxaUfCvKGwBx4emXVeVWANwwVVTc565agps8orE",
  "key7": "56CFqtUeAp2gthJE12xnQypJug8Zd8PtRTZRKSWgTniTUedzpyQh2g3po415zXzRWmKn47jZ3TwKVQ7X8GjXJ6Go",
  "key8": "u5VAtJc6gevA6H4Ku5kjy3h71rnA6QqpxD4KaLgvMVmRuLHbHQp3K2KaJg3bLbvVPemP1mkoqmPDQShQn3ifmjb",
  "key9": "4seQB1yNj2bwPJvwEg15JfoUM2oA7EfDs3ZJEoXAWDAXyTNSHja3s3uSBjaLbgffmPTWuSrDzYYVaR3nSrMQNQ7m",
  "key10": "5VDkRkT2oCGCcxrFbG1yym7cztMGRK7csw9ggXQhUNtWxyWrcQstQuRTGRFgYMfUMjVv6hv9H32gnCeSjzcscc47",
  "key11": "4JLQdoxvc1egAqDiJ2MepUrdaKSdcz9kFDtBVYSrNULufRUgfDRKVM2Fcpx9ohXNoXhb1qjPissTXjy6KbqL7FJJ",
  "key12": "3AWtcq66atEKF1FR6BE9ndkofN5hcWWyFbQq11KCo4MqspT9oQ1Ga7ypo5iQRwKBJPjBSV7QfC8GyNU8QBZ4FeJ2",
  "key13": "5YLSybz9o32XzehxQUZp4X2G5o5VSzBCFpXnJMxwAU9otwkRPe5bVFbajPmTKiEusmGAo6LMoKh9bkeuZfKbXz5Y",
  "key14": "4kz9YCf4swZYdSwusKowuke5XQe35i3DNLkJAYkozS7x5EzGJZ4ND2NE2zy9nzKKMySbuBW3nMMay5dDwosDtE6m",
  "key15": "4ERobwu94Uau3B7rGi8s1UvMQruoV9TpKRJA1d5iEtmeoeeT1UTBemyUULXCWFVJeDUjMAP2ZMDmFukcgf4DtrnX",
  "key16": "4Q7ZKMq3aNVtCE7FmRJB3AeSpBzjGUDa9kCWs1Dw38JaLHkePnCkacphMGpjhT5wAnyQhNdGD2aNyzZ9PBRD4VVm",
  "key17": "4QH96hLikc9x36gEwkoZHihc1riK9CgZnUkFVLcsHwKMPDCB2uiHEhHJasPKujmhvAbH5NDkdVMxoHb6MjbwNaM7",
  "key18": "YyfxRxVpQweFGdLQSRoTPpy95ymbqZV9mcTziAchUea67G7zY9y4fYJ2VoRHeJhLUaUyjeefSB9aUF2hYpHJ7M4",
  "key19": "ahm52S2sfv6os5UsWfNWoUhNaGquux4gAaQYVGttjKCxGJNvc1Wf9nSWEBn39RPjrnHZgSixXQEPq6n73EQK2AE",
  "key20": "4EwtcmMpFEdGByegc3fx7mjoinS1ZQGPKp92Xaoc5VEjRz5UDtmt3gF5KJgPU9ALi1ZCxHYJFHdSwNmX7og7oi4L",
  "key21": "2NiESauojdUMM39BESiizAZ2qpHWBTM6dRdacDS6A9XGbEC8iPjGNSwWK8HR2FqAZtZbzhJVNQ3sGvdEQuim45UL",
  "key22": "46Zkj62E8Y2ho5g12kc3wWTVonq1QUsB6Yx2Udydqv6No7CdrnGmfovSYaZq2Mw85ULUn25e5MkZwvSubwfgetjK",
  "key23": "1efBAyDMUXUNyf9MUJm4EaSUaEs5dDq4mPbuSezmYfiboFpbcDTsmSQb7WZQhB7CqnbMSLMi69MFWXxL2Zsu6Jr",
  "key24": "349h6xT6SDgXUzKbP3qYxJvymM94XNyEE3A7DERXAfmjbS4ddGsZ1KhtQiyHkveSGFdch2GANYfzdJco6xveiQjB",
  "key25": "4EHAWXy9Qp7SwUyhY7ZmEnm55d28CUm551FJWimcYRKXHSWM8j8TgewqjPuxqmNHqpmDaUWLWzmteGEDVxzY6fd7",
  "key26": "W721WbCyaEidTD38qVQ4kK3w6wYZsvdKdVpqniGYR5nXS5WsmHWd9EN3hghWCXvC34WKgi5NVFv9oc9sNbCp9ek",
  "key27": "2imZdFBngL9sghW9U8SBpmqLSWqAeMEm1gpvaV4m82uWV6FUGLTsw73nhaAgoi3FrzMLqfZjeXJRZn4rfqijwNDG",
  "key28": "qcGG3R819tNPJTmxJxHWUL4jsaEvGLXwwYJoRQyuV8BioVocPFw8Qijz1bJ7ZwQJAgbcbSeDV339Ypb8TpmT9mx",
  "key29": "DqCnibevmEx9ufcizekVhy4tTtpGUd39zvMxSMpMxXYY6tnXuhNkmSP363r6zXLJreEw8P9nUtGbGbDy9tcFFrJ",
  "key30": "2ggBPoKv6QWeGDSpubQUtsefGyyS2PtnzSxnK6v4GrwHxjCdwQ4nXDN8GfJxoyUzcdiv7EJhs8cbKMgH6QxF4im9",
  "key31": "Nev52qBZRBPjSig2qPRHvrh7f2LyC9NthUK9fvXGSSVyqVyYJu2XcFYKY1aLe7FsMZ3TNVnai5yUyQMyCnhTbkf",
  "key32": "4osvJSaGSiVdbmomNxJkeuvzWGD8KsD4XFk2LJLxgj1rJzvEc5tu5Ken4p6rPQ5vnhGCUJnf3nNcL4sVSNYV7eQJ",
  "key33": "4WQ1j7vvgiabh6qGxMLYgutkRCh6vbrKBvprwku4edCtVLabu8crDkzTZT3wVWibR1Crv367v7dNpZwUPEnyHYfZ",
  "key34": "5ZE27ndvhSyy31WS3qioigYidXU76XNmXy4bGCVcFgiDWKPSDRByo1zuu4CH4RYH1dKp3eRhZFiRKpXBdVRBdZ3d",
  "key35": "46MQj6JmotQqMvWJheAkRVc8zgiBQ1w38aQbxFH8nbA5wEgNbxbGZvSrFp1ydrGNCmngUpxrXL3LvKqBDetgykWS",
  "key36": "32oFE4gF8TRJcWkGXGVAifY4UkYGZtVnBckzztxE8kED6nGRfQ8cJRp93Rsk7coBpCZZ1VX6twRBnYWhs46dWJPt",
  "key37": "2vgE3HNecJHdCCbncbtVTk1o7ZRL67Fr1CiCibf6gf26GTTmAdUhkZ2JCruk9wsNWiPFLTAZ4TMg6sqnPfbiKnv9",
  "key38": "4FKbuMp1SX2GXFNspvh1RqNRLcuMswVjfhmYDZhyJy2A4CfZ9PmT3on5wjeMrd7JVNsmhjApCVDuvnsxQxnSLMD9",
  "key39": "47YBaKqfK5oxvtTxqkphNZFzPMQ6wQduQXpVXp5Q959C3f4h46gFhjJCYtVcJYJN6QK6T58aU5Dgtu6C4VL6nTig"
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
