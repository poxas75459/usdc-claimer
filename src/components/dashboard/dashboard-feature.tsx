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
    "62wuajhNwYgcyBUHJPKJykHaokyT7ePartsYWbvb6cYixEgdfAQcU7Zz6raTWydcvh6nTEZ2xNeHPeLvAVfYneE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J6KgQoXBWACW1XGYHFg3sMs7NQnCZAqFzNaPP6NLH99KNLcnpp84YDppMmnugzfJBhfq72hGNj6vo8mFaAfrRhB",
  "key1": "5YtxhRQrkJpSXWT6crQwgn2jVbue1cj4c8dobSFvwPDn6ZQYpeeXP83hBXUApGgagm6ZUNXp4GvBRW1bVpt6u3ow",
  "key2": "3rtubnZUMm9TFjyPFzsMncS8DayVu9kcbfwyJ2aWYf39g2LcSeQMAByYT6z4LHM8bz5AwgP8Vd2Uz7Tsj96Cwxyi",
  "key3": "3mfvvwvV3FdhfHYRGF6GrNGJFVw3aQ5rxJGyJZ9NVaArYYdz4j1i4kNmXtad4UsUZdjFtyWbitxcop9gQPGFGaVh",
  "key4": "5ms7njfMwAiLxPKRxGbzecbYR5WPdnJAdAb8PAyfPdt5hLNzSrc1H26dQrbi7KGPyuZnBpfpbjBuNfxH9ZNfQN4o",
  "key5": "4nRMo72wLNxKSziYSGa14hdkZydej3yYXi2HGvKLFqUJSnj6k9bg7SpREziNqh8rcHjsvf9aRYdfTrMbmAYKSLcA",
  "key6": "4Tn7zXB1jRviMpK996tjddriUXNt16NBk57sQmoNSD5sm5mSLuedZ7ETvf499qEgAeuLZWYLt87HwkvrbQj61DAW",
  "key7": "24Qy9wGPcKY8ohneR9AcfJTrQrZxLTAz5Uq3SJM8RAsDixeoKaJfwxcrpNbGKnQDHo9S9bksAQQuN1zvatz4XMzD",
  "key8": "5LFKkerW9UneCzzHQgTseDxSGrCv9xUkCFzZK56o8QJQUziTbNWRzJ9hV6vDGZvvg1K3hGaZpwXXNwWJhXvCbh9",
  "key9": "4CbGUz2Z2gTwR2NrG9JaX2znEqg5jwdCkWhp7dgukYkNbhY84Fk2zeF5Dksh2BWhvgwRAw3hbS8wJGr2XeKG3in8",
  "key10": "2UgHFn5wLYBeEPsEWcUKXyzSEA1DdGGRmJ8xaGN67h94udUUXSSRApCYLurXSpBvWwM1CWeUNeiZMwAQpXwrasYy",
  "key11": "315UzxYRQ4L8jvtwcTJBRYUhRNw7R3ts7vYu5rXkhJwc9rx4cUefgW9CRyJusHqKVSd5VZiaY8ow2x4ZhTJvehT",
  "key12": "3knAiCeorCWCjp8AxHspe2cT35fNiyJRfS5tn63tG8Ka2E7ZNpL1szUEGPFnwCs9n8ybtXhZGmXpx5RZK59vqhbp",
  "key13": "2rVP8TCWfaYU4L35vGEHZTMhLgWk6PyMFj2CuZ8bewuWkZb1E2tiPUMDQTSGG6tWW9JoFrkDJFsfb8ZrjhwURzgo",
  "key14": "3HqjtGtttq5nETtYwE6Dc6SE2yPrWSdEbJmGCBBud7qYuMEZpur5x57UfSJ8zF7Xt4p1MeZg9YJhXfz7q2xp2TQP",
  "key15": "3KrkCCHhs8ULyZ1S44FjiATTHF3s4YfBNcBPju7x5CcNomXaeShEMR1PC5V2PDLeHQ6CV19n7STJUnPbdxRDfG4n",
  "key16": "rr1GeoJtFjgn4pKTkJuj8aaQyD5cioUeKq3Csv2rcfsBLzAp1n3rjCEohFPkhzeStFqUUX7zPzUj1bP7vy8GeLG",
  "key17": "3R8XfW8hEkMq7oDH419r9phRxw3gRD36VyQwTtimAZr3HujPgxjbTHeQXAt2NS93wWuMTJcvdsoaaPDZmsoBJvRm",
  "key18": "3enJFhDphtLVHJjnQS47rt7WTS4fz2LFGpn8NbjFU9Yo73FjsMdofQ9UXErLmtV8iMCF1hLRqK4TRmVdR6T5ZbFA",
  "key19": "5614vq5cyhNFpBiiB3giMkWnmc1o8h5pyDuskt2BTHHrzZJoqbKJW6JAjxt5nbCZCgR6JAQ2cywix1nWABLn8EqW",
  "key20": "3hgha6pcj7A65U48RKRWWX5eb79Jq8kso7hts7i97Nom7uzmkWKBaV9YrY17N3TPMcVendwCtP4QY2QM43LfS8tU",
  "key21": "SUoKsDnFV9Z4mF2t95LnahQQuTT977G3A1RmHpMUjGCgqAFCB7GSJxkkUsUFcsmvQJFQYEPZhXpinV8ZvnY2Qbk",
  "key22": "4jJdF5dN9pHB9K8cA3WwKe8a1WXVVJyMADMtADt4x4Mgp6LL7KSGUaBvSG55zXbADQY6JGk8oxywenYawEGWLJW5",
  "key23": "2gwxtWb1eXD9j4vxWvQ7eL8ZyzENEHCp5QNArcDpnGAX2kKf7RAQ9jYvaFduuu1kXewrNTHtmRMUM1fY728iDcFH",
  "key24": "SPGRUH7h75MMm5nYFK4EiJt6wjgbi3AdRwpbi17wTTVKSip8VwRzTUEoSfYXZwFaBricNCJyr94C9ePDspQYGPk",
  "key25": "2hsoaTuv4dE4x3T3WWMQXTaQaff2M5CicUQmac1HP3gGu4jUJH1HYxUPji8G4TFKJrEZ5jQufZs8WAvd4Xrfgotk",
  "key26": "5okYrZdYm5EjM5BFUt43vzY8efHr9wVT7brrT91Cre2AfZ1FMvBU4914uXAtMEtD7BpckqSQUR2tMjCqPr1d2aXy",
  "key27": "4iv1MjRQk7FWGHfGmTNicHm8sjt6TQCiP1NtwfPxpQKtBBzRYkqJCXNc89Jc5fS6W2Uc2bbkUoLt7jaceLviAsJU",
  "key28": "3KyCUoNDhgMEUE7tQmcZcYmNW1gNeDojwstiHoMsDKpQD9WrAz2VzhZ619xKGiY6zoPp3BzF8B567HFnFcJksPD5",
  "key29": "4j2vPsiFG13WNbSfGKh2bh3JU7Ly6iXwBwU2xv6f9VhmpEM54pJSJVXfMg9CqP1TU2qUR4WyNSnspQmaVdZkpwKg",
  "key30": "4hTwBU9EeqSpCL4gvWqjPzNfAfZGoMY36RgQgKYodgtQFoKxNnHcrQ3vn4V6qrFPKXEoCAWxT5s8BcHw9BAe5CEo"
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
