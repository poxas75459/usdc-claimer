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
    "49P8yymgtJEPjRiPGokQfLE7fxxhjopH26QMQoiAJeWFNMZFybr9CwJm7UBQTvnT2Giq4BoRGcsT6pU4pezReqFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "91YgMpUL6J92nAEjxJV4iSwo2s1bmWvTagaAfxNQ3FGhZAreKHatmsLWRyBP6fmUEG8YUDBzRqVZs376AGnhDfK",
  "key1": "Ywzn7ce9trQDqWaXDjN5H3mJaJZouPgwanJgCaifHZ47gzctRmMHyhXXKWAd1GC8RJnbJVaANELy9qv3LJojqkP",
  "key2": "R5tCi9Eah7Z474KkkAh17fihrDLBbD4RuiMjSGgzrrjozC2oRY95mZa8JeZM8mfqBLfuxjGH2K6zC5WBMjmoJ1D",
  "key3": "4joURfP2jc5cF3FzF5HSTRPgNeSEVJpnXtxoFKMQkQfy3LxAhnRgPXUFN8X9FWvy3mFyAGR1AFt5HvoScF37QCj2",
  "key4": "ZpzwMN2EX6VZJbRZyfStRseoGn4WwSwVDpjMcYPFBpcce5dw2gmnVnd7sXSC5wy6ugz7SHND4WwunZnm5rKnSDZ",
  "key5": "5xPUKZQ8zP9oy8WeA7oE9a1u4JozhkhVzcaz2iSNe3qywHZoFYy29Rbm5UjtZkA2v6rNqjbiKRrmnNvE7SqvZ94w",
  "key6": "5MAobAZ7zsVKaC8igU46vz3ek1TcwCv25XMbU1Ei3ntMrs1w7vnV61VDQqNVoragpTJSRTL5Z3aaAjjyCeUVjTWb",
  "key7": "4chTHC7ZefJwwX7JNxc336UfE6BgZh3ph3G37zq5kA8HJeuYa5NxZQxMm93zJjwMbJpexHWfd2p8jCPcaTwDc2ar",
  "key8": "4nbCb6s4EoEUAjcR2GHmVtsHC4j4GkfocWN2n64zsnpzzW4aABLkXmxikLXpTQ2HfWkBNwVaCquW73r6S2gABE79",
  "key9": "4y9awy9JHE5bomiRtcaMzyEntNfu3Y9mimNAuBw33RX56YKcQ7YPABKd1xudRn6wiMRs1vtGKu2y3vdWaznff3As",
  "key10": "3y51HRpNomT2L1cebNnw5XmanKZ4gs65dVugPz9NkvpJt6HDW8KzVoCSj3GjeFZe7McSQTrxH9GGWwveU38FuGSH",
  "key11": "4aa33VpDksn3oM6DDjxRXsUp4Uhme2deBzByq8PfXwe1g5cEy527vsK3MfGohcbtMBW33bQRohgV3MCU89eSp8fC",
  "key12": "4LFhP3amJA4NwfWNK7s7te15ZZPHiBxuRBRrf4DwGm9yy5RW9zPN4s428WyiujTRvmJmpxZbrnDUnURrFqcyr5mZ",
  "key13": "41LVH3Ln7nBfdnLfWeTMT9n191VixxC6L4oUT7yfQQ5nKkwzEjwFYLwCrqGTzJ1U9CpVUQrtUqmRv1tVvvbyR28Z",
  "key14": "5GUJ3tF2h79pXSXaaRHYGLyGLaSPq2paBUK1dpGHzE5eTuWF9GWGtgMeVywtiet4ndTzdKtrWjqeaJWwKRgHqQwv",
  "key15": "4UnfFibYhmuX53LnuXPEVVwLmLN8Epvyx9miRyDagoVCzonU9pTQDDq29v2r2AqYup4iG74mXF4Aqbair5hLAXbx",
  "key16": "5p5XJwNKDsgcqabDUAdhM5ANn6EZxAw5ergzcsmyyQLHTkbWcrwrq7spGX3Mc6Q5hFgxPnQmytVYzB47f1d3x1Dv",
  "key17": "5aDPpVAW6C3evoKi5YCSLDKgah8KtmhPeYJp4K2UwiTcPTbz5B1c4ujUi6fkGF23cgbVNUw2ShLhBEynF6Yg9Umt",
  "key18": "o7sBHUpJenw2uBpdUMqM7xz2rBXChZc8zgikBjHrsZdLAn44VbWuGoHe4qBkxqELizyzKCRypYpKsLbH6DGNA3t",
  "key19": "31EF5NNcvQetTErHAVneoHUFKNq6nvV2sTBa1rcZioAACBSv2k1T77UgKwSMHbwp66M5JL7Fje8jGwhQvK5QBKFG",
  "key20": "5RVfvc1jBUvLpDcYydjLfp3GAmZbF6GiL5DtvaWDzQyYPUFq26J8ky1FxnxETeTh7C4jgtWfoz7Pfu6uKTdvNqA6",
  "key21": "3UtGtsAhWFj4YhqH24Md5hJgKE8y2ggh7arBkWpBSGbm3M9UZtQb1pQYv1vCfPBYe71cjbCQETgb2oukuhtqqkhF",
  "key22": "3SFnDZBAX7sYD1zXq1T4ir6ndXfWJ8a3EGwvzZ9FvTZer3noTKoaDViqeYMXi1DTkxd2rsNgMjCfmT4dydruEnAK",
  "key23": "3zHS9ayMHXDcWpMQFkcAEDYzam9kDziL5jhHYDseXmNvQjJUTnDBMw2Ltdr9JtoUgKMpv9Sk6VjCbb4aTRQ552Tn",
  "key24": "4k78jGSCXYbZ4PFf9R5TrwxNv8eEeB3HJmg7S4b39xovXRtCtCEk4KWCCWorqgjxFVWxWcdBCcwsgNwTHr8JwLx8",
  "key25": "4TntcMjLPG3hzraCSm52bRtQEzHMHaqTb4nBYYUHrFHJf3RYLWCdBXnYXwPzhr29qLZ5fPJfiucqYYSpeSDcfEhz",
  "key26": "3Q1WGzvgXjYpkDmcQBeKmwTLGBANQGxLKHxqXMpnM3GBK8BuixmRNRD8T5ZsPjv5eRcRq6Pp92JezHM8tV6dPRhK",
  "key27": "2FptD6SYRdhCNn7rryMeEstJtFzhXisCexE33PyGVTC2YqKWRR8dgZKWWbRfC1UFioYnB4a3zjkhfJWvLo1cZMF7",
  "key28": "5ComGTuHbhpPGynW547eRFBH1NW85mykWd4GYAR88actTpUxf8TEgr8USZadJ2QqmxuSB14kFCwayYyvrow6G9aN",
  "key29": "4nDLfjQNosRbNNDBpDgev2ZNpK3TA1Kaj5PcefBopC5dBvMXTpzjHXqB7KYt9aPA74Cjj7V3FuEmhAbvCVTmf21u"
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
