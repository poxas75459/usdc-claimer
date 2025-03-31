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
    "2ANK11WLUbqAuNKo1WTvosj1UzDT8bQ1qaNefsmUAubPMWHfM2rPZUG5vDtpg7RpzgM5i4DUByqAPnPbdLBioW1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UQLARQnrMNwwae2UPtnFjmHnzJDeY67U3npETnhaVDGXaUtVywH4RFhNn3uocRdK7GFpwNfBF8fpveJeNGb89ME",
  "key1": "5kvddoqf2AeU6Gdr9iCTot3wSqaoSgafMhHp1kULCxJ9jCmVZcWbA3ytSwWhU1r6gcJCSc99vQMwwNtFp7mq9NAZ",
  "key2": "3rRBHcsEfApFtMiRxGxDJchxH3aAcTnsN75AsrouyNaEu4NeRTYGqXxMyL4MQAqTuGP6ecYqJVbbGZJubbTdBh1R",
  "key3": "37iw7zP44iQxTnFgpmf6wFZK9ZNeL29TdspcCHpvUAhEYG23bCzyN5UCK8mEFCJ6LsoHy3oCH2vvapYcvLMBXuAc",
  "key4": "3EuVyMGSp2Dqrv49KD7hL926CdfBsBdaf3ZDHksagDnrKZsSFvfj14SqvbUZZBgCMBXeeSyFvWDv2TdaKEduFXWC",
  "key5": "3Zr99xozsmHtmt6bPtFKuiJyD16BLhdxdVRjWojWgGWZbxtAvCFYnZXp1n6dz4weoKZULEsieUSFGoFVeB3iG7sp",
  "key6": "4aR6WnroeNfoKJtvQVHQ24KF5k3o7bEXAqkegZKZhMoamDXiPKPs2JCDAqRNQZwekaEWK7XjGNUU6TcBvFTUhCir",
  "key7": "vf6s9qjYTJZ73t1ksUHhZJ4vZ9vRTaXffDQwqPwAA3yJeQpospFqMBjCHNt29TFFjew7SL6ZwqrmhFP8oREaWav",
  "key8": "2sSLkhVNBbexHS1cg33fDT5N3phWcapgDmJ4BpuvCFXS239QGKTzhXknXVC5nfYt29UhPQVvbb4hsDRyRAKaUkxf",
  "key9": "RPRSE2b1JhQQSsS3KEvkGPNZRrqd444P22m9r2BVy6hmG2t5Wuc33RpkvYsr4rqFfXFECzJCYu9Gx3gzf479xpn",
  "key10": "2deqwSLnfg6xARjnGFzNxjLyFiS1h483ijAeoRFpeS2qGj8Z2r1xgUooJLA44Qt4m4hGnho7fqF8XgbrchEgxDzR",
  "key11": "264vm2YVMGQpgpefSGASGkL1qtZZxTjpXSYWu9uPBji3X1vmX7ucSBoNWgxsu5xhoTch1MnJvVk8VWWypXXyff8m",
  "key12": "3sdYTZaXwqL9LFyv7FkTAEGbiWQ7JcYnhJw4VGhkNbkYcNeTEBwR1oyWBJQUJfpBEi859PCooqQpjmzzgjm9D14D",
  "key13": "58EjUdnBMEe6WoAWLUveeJV3obUeM9pNDzYJhTtemdFo1CQ7yctJaTmxePDUjjwntCFS8VpZZfJ2hGx7Kv7MG76J",
  "key14": "5ihpyVaea5cGyJ8GATqMsbBDcmfuFGDVkhTUAHEXysHbPdvMZ2nLhW9Er9Zh1DjprwVNH2VZ2Cz6rGPkoVZZdLjG",
  "key15": "xr5B4wT8xg9vW4ZcRLUkwnE8mPdG9T5Yh8P43uQ9G5TQGuDYexaVhqNBEAkTmN8ErXajTyehXev15nUqPSqgVvE",
  "key16": "4FMfEThsEm6bXzTusZ3G8zHAnsT23c4fthsB8tVskKRdpgUSnNpdRHjMVtEMifeAfhGzgFatQ7e9z1fwopt3jvGb",
  "key17": "3hRAucZjtYPKf96mKWzhKW8ZUMMoa3eZPV44B8snvoksjY1o9rBCcqnCtMfncA3yGb4f5raBhUcTrjprMs6ZrMC6",
  "key18": "5Sym1xATNN5x4dihZiuCvR5MJMjxf5fdoVutXu6QLQh9KGBjjvdijMVTYGsPTdhvH1Sj4sfLv1a7EHapVJNAFFkE",
  "key19": "4qFKgBvCP1Er4D1Q15nwY2K5u86pPEDqBj3jxu9sa35Fpw8ufpUD4hVxJJkCcmjztiA2hjxL9iU2brL1hmrmFu7F",
  "key20": "2FxMP3Zn8Mgt5AgfkTH3WSDsR1AgShBMSKrVZ2JZftTLhod4eBBZi5gVAAHFAjUMkc2PHP6bpFpKDQ7fCUeDV9bj",
  "key21": "jWWR8jzocYW3997esb7cm9D8Bj5AX2oSTCYtFRrvhjbA63q4Q31Rf4ZhhkRbBuNF8bjFqMYS7TAcTFi6w7qmwzF",
  "key22": "4d87NXdQr9VdJEtCDbrcb7bMTh4Y8MGeWi1ihSBcx1ZTZciCrPpR58UjUcSq2PTYhV49heLpxiRHYQi313Et5DLe",
  "key23": "4D54z6WaYdN8JGxGGbH5dMpk15pgSRNUNbJscBFpsGy2unYwJ2yvvpVPuUpMq8h2KAwLP2f61BBN9bkqTES4zyf6",
  "key24": "3RJzPtKJ8c8XwfPZopQGB6LXrSgqDzqhiEirmhEap1w9gPCgUz1YUuoG8KkgtESBRvENYpt7qemaKR4wv3SeeYd",
  "key25": "4Twxp4juc63hRzp7xdQMTff4bYDgGcndqfz6hVBpDK6P1ukDyC4z5h4aTCRKSgJDhsrtJ6ByvTA54UjhMvLdPbVQ",
  "key26": "2PYL5C11MkLru1kwnmEKfArkGagMFjsqvYUMNc7ujHtDYoP7Zj6nkNpoNAPXRBauind7efHhwYBjarsFTgSt6bL6",
  "key27": "3xXUScoAsf7AFJHpc7aBZthyebkeqLjkPeDsK2sMJGeJAwvPvyYTzTVtJxJSqJkD7Eys9tHnKWFVqXog4u7tBowf",
  "key28": "23virGsMyf3tnjUbU3CWt7Zp5yTfFtCcUTQpno2x1kqquqbjC7PrLjQP7H5Q7tgbLduFGbUScHz7ByaBPy9zqtw5",
  "key29": "2uQgfJYt4xYBsBxGBCt5Xp7hJPrvSZuNHiMAowt9SLmndivBVjk7yi15u28EziAVjbBqVezSeaVRiAJJcDSNugfq",
  "key30": "vAgWKza5RwtYZP4Yc1J8ZJd1j48zpMN18sAnL5C2UVpFs9UR6u43rvsvZA9jA1BSfoFqrXmL7Cs7vF1h6WumCXY",
  "key31": "241v1jprHoQj6v1RjkwDCsLMYSstCqVstnAP6MCgD8nYkt87scTpMSLWi9VuxhURqUdWYKrsMK7rRqkQxhYsd9AC",
  "key32": "vxcuf34cgZ7q8rVvbveKH3XCns1fbonhjG242Uvv982gtAUGZKuYBVgaLuF188GCmtJVKtJ8qpZ6oMPivDrEncQ",
  "key33": "2mRtFmUNB8qjx4Xs9ZTzx8MJKGyd6xPGm67wW8bp3n6ByStBhuMMJCBDkJnAJc8D3anMQPSkrYH3qgKTu8dNFpXc",
  "key34": "2BVyDJHeqodCLsirByEjsWqXwgd1giUqLtMRkovuwHzBZP4194axqEqtkW68HDr4Q5DhCeKNr5UGqRspvJ4FfRoe",
  "key35": "4kVG82SLGPuAtHhXs48bRXABr7pNzToLx7Aqey3Td4gkaUYQQ49PPzh4TpKF1dTMEA5E5WrDtm4Q6F78Ckmz7M3a"
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
