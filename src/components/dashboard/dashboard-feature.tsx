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
    "57chpUWKnDrvwh2KA7jMFoTfYqJkZcgBVzmP5AC5TsrWP26hG2Fssfjsakg2bVZANm5mEcqdxfAe5nyuAXN1mqdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yZKVFCR4j4UoGQ3ejo61KUnJjphEEnnsDmbU9XG612nWUdMQUwfxszTR5xdbng1Pr3EtqWn5akNcZL8L6dTKsTP",
  "key1": "eWTX4LJ7kD2RVqG11wCKDfW1VkyKb9tsx4Te1bbCA6ayaRpYt4yoVB6z88FyiEkWwcFPg9bCgSdNLx9Tk9dsyKK",
  "key2": "3VBpdF8XG1kABavxYh4vEcyTNfnc3BuiDuwzaFWkfjXcxd7YYLoE1sMrGBFNSy8fAiHk3tK45uCF3oHXTJAuRNvD",
  "key3": "424BNedyTJYzYDrKPUJcyi85VzHWasFKesTCNhLj4L1NQBq1cVPAbKtJPb9nY2HFQ7Lnq4puGL4J9hiYAQphJEo3",
  "key4": "4MGhs3VXg6c5HgBLFjoxJoMSS8eowcb3KshjTX6y18bU4CnkktJwAtmjXacsWnZuppqWLxhJXvwcoE8VSum6JX8f",
  "key5": "Fmv7euryVBEq5R9DS3xRe2TAzCKHxXknba7wa6XEtU42iczES3xgT1t8Wa5AMR2fes8TCnB7vkq8mYpA4ieLz9x",
  "key6": "2KmvrM3WQqjNZwLNAzJ6Pqovt9wdzoSRFbg6zs47HXCUmQYuEtpeqCUEp8imkT1Yz43Mqvmi3tMWHnMkXaJbtrxF",
  "key7": "12DixWsWGu2UzruSwpPkjTTL4RhwveMcq4imMhJgEQit5UGEbSsNk7hDjpcmDz2j4vSq9uRZnCn6EyJWfdcsZyg",
  "key8": "B3X92heq7rBmA7BBZdSXsWooQgoAUumBfjBT4R5YWpBdnTMgV6R61VhQ4t8Gma1SahPx83ThLf8qX9KMjFvYEmj",
  "key9": "3biH88KSmzkfK5vm9N6deDEPcvXXjN79zTcZ4WoiMKWbSuB5v4WCEuFQ43YNRKXqfoZYZ6KNjF7t6MLWHqFig7QU",
  "key10": "4EMZ57F5CETYy5mcfDkxRgCZCjuNh91Wg4igYY3otjDgXsNGy3erfX84W5qabkm8gxcBFwn6EConTVAtSituW9HP",
  "key11": "LJuCDpmgvBhTQTLZSgxS7vpuA28x1PpgZasp8Vvs89A2jeSYFpaSJQzwh9jPnEvSWpPiukMNthUA8SbioypCMQw",
  "key12": "5AeR2BcLEcLXmgS3TWwZj552m7W3VHTXTYXRP2v3BBNiM8u3PGHmBkrFr9dGmrhe75XNpPC4bfFCLFzjxPTUB17K",
  "key13": "28FA13HxJfVrBzQj8QVrvKS5rt67tBoKP2jDYnj7UCX5YSzhkedfd37pDwXqv7BJ5K2AefLTMQbwTJG9mbKKps1B",
  "key14": "2LASsYnccbrmrjPWvVmEMmqR3R2kQHeDP8PAsHxtfYetjG1ASo7m2nGCSBM7vn5qQV9KqLbHXojDVjHrX6HRQc1J",
  "key15": "56Sd28Ui31vHWHhUsASo4RW6g25NpTXrpHbmgUDb93muiSpc1e338vbGzYQq3vLcdG7FWuzX4fXUQKvEq2Bc6jtL",
  "key16": "5URN793MK8tymwFwYKL5F3Rok5Bgj9vVCs57xuuwSJe8yXmgMkKL3BvEh7iS79uSinJunfcanexu2ENTyxZWEcKs",
  "key17": "612nvWvTrDVbFn1ysqtAJVnGFnG41S5etJYurcQ6E6pEYweJameuL5yk412vteUprMnboXe3CQXau1763VE8qceF",
  "key18": "2znmkK3W1B95mu3w7xjV5PGZhQCHwy2Jkqkz6JWQparRDEQfWCXqRf9rCMvcf5boR5qyY2AGDvjS26nysJykWw4q",
  "key19": "2fRWQYD8ZcUXQewJFzEW74suXYAW1qqLrA4PtyzWYgSqpqwDmLW5UrV19bwVQjFsa3ywg8SoE5GAGzut78zLY1i5",
  "key20": "55Z9cqeBiu6snUh6FH7vyGNZ3P2ve45vRJMRKk8oJdcqWsvcVHCthaGK2kg1RB1E9jDrUcAE2Suhu54GWG6Ssueg",
  "key21": "31GgMG94m8ZayPKtkMvv4oQjshVaop9hxAofkegvyBMb4a1hJ3x66pEsVzqK5rHs8Qzm8ySSjEtbdTV3rDfFc4sw",
  "key22": "2K1sr77saJqBAfWZxQYfHe25HvUWFgew6arbryYhQmrz74Rqeo4TvfrsZEr5YX58dgnLf4BW3xPWx18FgZenagyh",
  "key23": "5rEBENKWXuueabNuRrwqDspYdkHKPtF2T8zWsYqDTLrkN1FQgr49ufY5qnTQxt3ac1bunxxWLQpfrcBZSaPSwz8M",
  "key24": "445Ao6Sv8o4vboK65MpC3vF6VBdk5bVuCDgA543AZUezsDqAPo1NGNGvQUULMfJARWsF34ukBCnazEfM4Y8BdHio",
  "key25": "2GTKgM7UDapoDJ2P83k6LHHo7UHnGNEPrmdcDGhu8M2Br9Pr7hKejuQHrqPDA9Z4GGS55Hw4Agd5VEpxhz59vcjE",
  "key26": "2v2mwB37pRGvud6BoTKVNveJkrS9L6WDcvhFtVevC5oBjd2YXNFFXqpRisnFp59f6MkaWPayHe2uZtv5cqdpBD9p",
  "key27": "3xxoZ2eiDSvMYYqa1PUbKCtKsVtUumehXuHjsuEJ8Jz2aaX9ErMYX3hhWdMALfvAxKWFNz1JbXiS2CH6zX6gd2P",
  "key28": "5QAwT9K4EeLqVav8rWyF5aBDX8o2tHHfkj2NvUKCwhP42zDRGT2GUCa41mfSgEJtKmUdbHoJy5gduCx3xDtBqxsZ",
  "key29": "5Cpw6VNyhA3te3Gb4YMzm5eTjVxevFK31VShCerSkqrchB84Cwtk98YzRYf9pUrkZK4YgBTFEANhQ3vVyiGg1fvx",
  "key30": "4CvsJL3jPUpuiq6paFSyTFTswTrCtwayNPAXUrBnH4suqWYCmtk9y5TRnXt5CsyDDjb4qZL95PWJWofC7fwK4gSX",
  "key31": "38SKGLKCc3d4R9e4xemwxBAvo7W5Y2i1oXhocspPX8inGXocE2Bqu4pKVeKQiga6hu3SFzMVo39yUdEmthHWSVPX",
  "key32": "2q462DAv7rjNd8Soo8eKadHYzXduxuqiR47JqTB69b549K7DgFNed1xyW5m91DkqdKcFV7eqpaZKMWjcSMTZe5AJ",
  "key33": "4G6GB4v9idBjYWKgsC6D2PSKiD1wirVmEZtynSLtBS5R7WQfnFePEjpaeCfyZj6H99sA5tTftMLk9tLent5kU6Rr",
  "key34": "5vBAx8k1JQ7u7bWz8Fc4SewhBBGLbRoPYyeDiVBWdMA8Q3ixT2tLCMyNMTFuj8egaozoA1ET6pLCpm6wR2NcTQ4H",
  "key35": "56x1VA7v1dNyGrR1BfWFLSiueaKobMABN9tUXFQ8jLwAbjwE7LGPkTAvi18fp2dhmRyZZ5rZAG2kAtZkjkuxSpAZ",
  "key36": "5o64WVXExFvQeu5kj6WBZdzTdRJtNit8CU2rDeB7jFpCgWXJkGsHyMoX2okKUJynopwmBMnhS4Zg6eLwmrvBeBMM"
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
