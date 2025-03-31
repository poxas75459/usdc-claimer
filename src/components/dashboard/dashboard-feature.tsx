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
    "Unwdu5Z7YGrmNWExkGy3A3DxZGwqqnFBaqmKaF8655JXLdqeHrDkk4WzXFMN4ozJVwqGER43qScYFvihTjar1sY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yrtLWbJdWwaRUzTCbUDFRX52QJEyg5YHqchwVEWrdtDZaBwxm93voNxqrVPrXhwzWSMUwJrx5qpdLbWxkBLQyMg",
  "key1": "4Vd2EqZs7UoEzTHQe8SrTJ3mu5zVxMdm5BkamiwgHhg7gptg13fzHLuC2fHpJFmXwYcthxVXm8cN4thxVoQyBz4T",
  "key2": "3CDcDd6ha4mkXyNi857uJ3bdC9nWUEF2HkpgaANrcBS5CffP2q4MzqVm8tw9js7tdCUDSnFvNvPaTrjrgaygcmqn",
  "key3": "31awxsxBJA1wPuvZZtdJtz1QCtWCK4ThaioDiDk1tX3J8VpCyqanxUYF8mSABeLuH6oekmtbn4gv4gQwc61RHrvV",
  "key4": "2JEMm5FLrzpyJTWxrJMHGUjhYzG43omXghDcK7AEtEycgrn9KF3V8QKFGyK5qgobc3B7KtpknKnp7mrNmnQeBVxa",
  "key5": "27bmRRdPBafdJNZeKwQaU2H7D7pCYF9JKDTDaDYwop2rqzv1tkfqxcvjXUmPTBjRxasAPbBmro45ksraAAR6YVML",
  "key6": "3TUUDgmznBwHKBFB1t5ZH89dDY4cj2EXFCsgffvnbmYt12JmpRQz97hPjN71Czg9uc1Wud9UTVmuov8ebizt1cCh",
  "key7": "2Ui9vVk4nXVnnsfve8rELxuHsMXjNqn5h3E4AQDvrqyYKqfZxYC27YXLBze3MNRGwBLYFceDxrHykp9nyg5iTWXB",
  "key8": "2v1bYdPcCc9Li8goANU4n5q5NdW8WoZ41adHD9gAmoj42r5iLDAXEEDbGmWoj297pgcUtCRD9GRTggQgX9Hj9ZGA",
  "key9": "32yYngMj7w6w8MBogxKqtEpuBMbZ4pYY7CGkohENZMqXkUSUeFVad6QDCDdxCU6NqugrnE57xR23K6pWUWR5dBnL",
  "key10": "2WUsN6rqtLVmPVVeeLBsfAhfHY8q1MLkc5NTbxy1R9SL8L7K7gkY1Ez1cSnN55rX2KPpfj2GEHKL534YZ1chy75W",
  "key11": "2zKD5wKk7LR4LGTzW7ZgdeVmqphCVSV36ss6t5QWSBjtc3tKhrfMDCc998BGRJjg8FNdLbT7uEzAaigaWVF1KMqW",
  "key12": "4tRBamevThLhF7Ny76Vwi9ePgo3BgnfSubpPi1nMEaaf1bywuNth29VLtitKKTrA6kU5kPKTQFhAAmN5Q9rraCx9",
  "key13": "4DoNR1RZ16YXBdPX21ayq7GhrKT756Q81iC6pc2BA3iZ2pr1zPbHGapJ3fz3HKnJFvaF3MM8Aj7LxLs8r4Sq9A1z",
  "key14": "4eGS3EjFbhkdhPAdQhmGbuBgSuSKSb6tEFqs2kGNzLUaYkmJMUaeNJJjk8BxDvXLiambkSR6bJ28r7xDfCMMshEi",
  "key15": "44EVhKk76w3stSqorFuFwxqKkZR7ScneqZNVLe79x7isA52tu6TfTM6Sn4N8DaAKUNf7wPbWuRcG36qqL733B3xb",
  "key16": "4acxX4Gf5gUBKmxjTjriUcy5RKdPrkRtwpdKXcBzLED6rQckxskY4Cy9b4DUdYpB7MnH9CkoKxBT3efc3ZMy9xXz",
  "key17": "awE39w9jofgjkvjx9aV1DjzjWPjaEwuVYiQQh5Djr2foWEWptiTEChFYTdyAS3a6DNorWRMiqvtG4GT4emde6n4",
  "key18": "63PqGWEPeang3zZMjuThqNK5SdaxC4r4DAWsHZLY4x4V2gywtS7W8k2a6z8XqkQEDumNHYXFzhKNzQVuKKJkm9x4",
  "key19": "5iyx7ZJcYzmXgTrauCJGpakuiasCJSuzH2tyB3a5RiPfV9UkKu3JkbZ7KGW7BiD6cDYad82DNwMVd9t2DrvUUq8Z",
  "key20": "2ciH3mDNrPEvRSsvYVqmaNZMSCTAgPvmmTFo8AmzbpzzaFmdFqYvoGSzzs4cCJQv95nb46EgzDkyLD7g4Lbhudsk",
  "key21": "66po1Fqm7jE3woUUjtHCxFts3asBHQ5HnWGrhB1qD4AYDUdQjcga4S68a2zLVmmkyYkGwK3BgQTjLgDMrj4H2T5q",
  "key22": "DnwFqbPxf4j8aqbTFkQnxnmawo2S2Jwge4EZFm9DCwJSw1bvkUEDNHSc7JPVZysprfAqWofGzUf6oKp6iniPnEi",
  "key23": "2SbCZJyahEuNMWsgw6JCFjH9bDn7UjHsk2bvGGywqMRsKY4krw7CkrFyfrwShXoJd8dMHPog7A5miBkAD9yY3GxT",
  "key24": "499vS8vp92iiQ1sqjpdafcaRyA5uBFZ2eZhXcBgbqT99579fGSQyz95J1jXfrjuntSbb1rrs3ZnqKG7fUQwvhQuQ",
  "key25": "46U7W1tiYSSh1PYWua1SQiwsckmVfjce5pVuM4C4uo5vVvNK4uN6jvkp7cCsSkAav8ifEjNHdXfzxYZr43CWexPs",
  "key26": "3J3ybtzb7ER3zP8f2gxH5xoJApJKGjuyU9mVKK3sCZms6SMDfv4q7z5dURb3NQrdVKyMWjozZEfw8fVf5Kbc211K",
  "key27": "4Qerk9FYWS5N5dmXAd78B19Ghoxn9X4CahXMbQgDdSG3a3E678Si6aUgG5eQJcRWFkHvS8x54oY1gt2xLYiDvksP",
  "key28": "4E6dZ9EAA2Roq3kGpDSyuRF8grwxkawfQeKsEJQScoSZNH7KcmM9qMXKNTYwnjCtVf6U9uKHoSvdWDPnMogyb5Eb",
  "key29": "4iKjpacYyXmTTtfgDGPaB7qaFcVwEH1NVCj3RkutoufMUqWFc93MgxD6mE3w17YF3VDS8Ujvy2x29Htzhu72xn5f",
  "key30": "5RAvGGDP7U1CGYSf87LJv294bhW9CeXfY9bAK4QYt1Tv6BG2zheq9P5Ew4MggJ7Se5oZ1LacUw8dDTb61uepVeXV",
  "key31": "3TeKP34bCqXRydUAm1M87LjnpMnkgReVhPYkPMvyFBBYanHEuupDDK2AeNCXgwZ5akY4N3tHALsgtWJLdYiV3Bug",
  "key32": "3euAvWxUqusJ3tS9Ntk7VuSyP7i2uxAFYQaARPKjRLjEoLG2K3svG3j2yMphyNvYSHmLrsMGHDNbdD1EM2evUpui",
  "key33": "4ePbu2C6G9YYSoANvnLhrNLqtcPWBVFzCGUw8TP4hq2TFtaRPgGCE13wxdSqQDyX3iS9oGhdcV3hWeTszcDSJ9Mk",
  "key34": "4wS3UEVsdw5Yy7JnWfowEfzeYrsSbhznaADE1xx5An3no3h1Wsr3pJqvQYYW83zbteXNiYF83g6ifuVMLpjsen4J",
  "key35": "2PzUJmJ766HPssirwuudcnXufBp4yf7utw6zVUMxuembPvhSW5YoKSYpjs8LDfYBfAY8ToGufENwXYiRFJscFj3g",
  "key36": "5iaD4seNSZVC2gXtC1xed4Bwo5E3CG8afsQsQaSEQsfgPzecYkAi6KzGqaxcnnqcXsEmNwznmGzxs5iJar5L5VJ5",
  "key37": "36ofk6QdoCGuch8hM6e8SE1W2MaQrRaw3q28C2SPyjMrVmu2qLviXWBpCnV6T7V69J9Qjr7b3C4q12L1VsacSPHz",
  "key38": "d3Af1GMseoTBarWPFAGfp9gVowqvyEziVFzS4YYp6z2EzM3CR8yFCc3NMbpyKZiBYM7jUeDe3EBTEHwHynW624H",
  "key39": "4UNLssSE2PXxaMQwyboXs4S3yPAC4twRfGwfz9MPnNycvHcovNs9wB7UdfLYrnd791fTCEZFicMDzZHLKx5uaUb5",
  "key40": "4b8VngAoYdKYud2eXS5TFyq8qEDdKjcEnj3gdvVbkd68yFEiFr2LdbkGUzjNhsWDMSiA26FzDV4zWLxFZ6Nsdhc2",
  "key41": "AvcWzZTJtzwkBhzATKEVM3AwZM4VVEY1jH3b9wwAGuVuCLvZ8EnnRqcw97cuMNPEQQgFT4z9Fe74WNPFuPUa2dN",
  "key42": "5NXKe5F1wirFMoegUCEBWgocrhoZFvDEf8RGvaJALXH7SRfhcNuZ32ieP5aSyG3WrjYaE5WPfD96NeEj1mKJZveF",
  "key43": "55xifSCZRZy39mQFcW4FPKrUMeyNfPbSnsEZ3eLYUujhjB1LHLmo1Rqc1KPN4Trx9Tec1RWMWmh3RgUeUuBXyzA9",
  "key44": "3EDUaNCyBPjEWkV5aAMRHarokU8NtmjubRVNftk1NLX64pb2o835fJ2GoXDJa6MWmx6hmBNaLj5281gvg1vz3JM9",
  "key45": "27DyTMqy3avxJ2kNL1BmCUFgCgAjAUFYeDEiaM97fUWqdTTQXcyt6XAGVho9hZnXPg2HiU1SFZjXLotFMG9ivCBf",
  "key46": "3499YCUkCL89AqNeWkJgFx444Rmn5htLfQPrWBBM7GXtV9VMtimgo3bQX64oxooGrD27UVZ1snt4eFP6pvFLPbcc",
  "key47": "2aKXAhqCgEtvJJTWQVjSHJrk8mLEAXSGDb4pKKJHzVqVwwpiaEqcx3g1nMZr43XeSPYNMG8hr49ZJdK2BJBGgdBe",
  "key48": "4qLimZ3MGPHqcnnRhdSWKBmvaxEstLg1caNFMGbjDBJtNp6nitdfG1nxcy7TTGtwAuTucCdBcvZHxSPwNnbvKnX9"
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
