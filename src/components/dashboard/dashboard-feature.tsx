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
    "5GiQ8ogyCLdC6RvGpNtKwH46oZPYwCVyjSkmvWHUWp1jZtpY768vrNtCvN54x8xskqvtX1BMLgCT5xVANubB4XW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dzZabLmnAwwd242xSCoRzZtzcdq9Dn43B9yYA7aFd6C9Susvo53hSXiVtZZ5xMgtfRfCYXoDJuU69B8QEtp8AyH",
  "key1": "2eesS6GZkau8SWKywXa3oCzgR6dAzBjEMp5pvWKnwjqsiyoQtJqs8cz49a2sY2FedgmcSz3dVn4kvh9cG9UP7NtN",
  "key2": "2yXYANeCnYNyjXdfR547vf6U8f9ngxf4JXmz5JXCPWfBnnNB4cLSnA4FnXoKvTq2Nbzvct6bzXPh2ZdiEc9bqRvu",
  "key3": "SL42cYK7bFerZGJmor3JMhUALQc3kd3nJXm4Pgtt72UABeNQZn54qX4Yb9jpw9Yx5RuTwGYQ1vX3A5bARRrvVgW",
  "key4": "m4pc8bCD4fyBCaSAwxsMArr66A58McscBeaqwxq4oF3cF4ibvaNmSKFyThjYKVVjqwzDeTdtJQLHoyPiSVSdsuw",
  "key5": "5k2ZxPeXMbQsMV761hpgahDoGHAZ7V1TgQPmnTi7D7trSjQDgrNhTEE2y8NtM7hSQg7piXyhNtYaeouFkBaQBkVx",
  "key6": "2ShudjzpSUnhZfkpbwyEDu8EP8tWxLcovwsuzpi5SrZdEvbngWj43cNrqAVTbS3uYvpEVZThqnCKnu7YgLPo3hyi",
  "key7": "2Gyx2EosmJ8TWm3og6XWBh5rBoCUzxvPWZy9oYzrFFbdmLbLUdQZqKhBNhH9jup3ZWmeHsyA9QPTFvhpbqkcxtu3",
  "key8": "4TbsAbMatcnQzftHnGziJVcxN5xBubkRPcQdYs1MYKQAwTZWgWW4HHPzjmdvX832ZdYEaQCghcwqDB97SmoVYyMy",
  "key9": "5KR7VZui4KTT5fKXktY64vV4EV851r4cnYm35sEupAuquoRtwujEvFSRyoXWxmR4yrcZ5pEzUZtz4wqg9jg1Fo2Z",
  "key10": "36PwLmrsMeY1qSgtJyPzkKFZ4UMXsCHd2FqU3KK6MTzkKwGgyM2NCq3sCf1hYqSUCVqshkmgnKtWNGGwjg4hLDPZ",
  "key11": "66wvPwcfcueYMTkkAUpnCS8vfk8dWcwZzcvaKWhK1cnHtkq5VU3NpEUxzhCuUEkkKsb8TbbcAGtP5tsX9yfmTeBp",
  "key12": "2KzCNt8jSjznnfW4r5CULkE1wchFBvUD47t3V1AZNCqmV4GZMMPnfg1CxP2PN6PcdiqK6pKuWYYDt1QTE4vvpEY2",
  "key13": "2o8bHazQu3WmtEbiBme9pSM1Wqo3mdEGWGC2WRepnkVK1aFeNq1TzDpmoGs8F68zvhjkLCEBy4C6zWmFLc1yoVw",
  "key14": "5WSYkM1VA2cieWUTBUMJKoajLdANag9eCzHrw5LqL2gGLDvePLGB8KfDavg7AGZbEb4Uh2dNLXmPS4poWNu4vdxB",
  "key15": "2Z77qWeBTnPrs7FyK7BdXmxHQKJUZfZopdXHDAKbobLLoziGtoyVYuAhah9iuVjmr7443utt9fSdHGXsJeJoB214",
  "key16": "2SNp4WTHGCUtbjyjNSRi5aXgfFvEML7XKdpu9vwwBUZFPnApXBpCveTW1NU18eLu8pvpyb8zhKJJXAZUf7vBn5R8",
  "key17": "2RxyESEykFXVj3eqp6XFWhPHnUhXZPSpDwfvfzhjNon47H9Asg4drom5TeZqK5c33U3eiFSTzyV9sFg7WkRsGmjP",
  "key18": "4UQUMQQR9NRTax741aREqTXpM2hyUj8kb8tmhX44DT8VNWdqBAmjmzjebExq7jV7nQVYLfCQxTx82Br8hYfEguaD",
  "key19": "447K6qgn2cgfggpbUGyXyDCbZtXTrYoZVoRq86aV9hXZa79UHsM22wZAbEUWi1Toe3zyeYmfsX21YY1yUXzsovaD",
  "key20": "46bnCk6cmCibUKZ16ZEZKtqKa4hzhTsEi9YH8oEitADVR28rrcAGdUTmeD1uWaBr8XTKYyyR1PHVm8hbAFsdSaNs",
  "key21": "2am4z25ELGV6LWDFV5GXqzyiobxedw7ReSyifCJWKnF6yzQFFjqjaVkZXxfaHif5tHR4nhbLverXrnW1oH3hLpqp",
  "key22": "2ymB51PGt4TjZpDn7CnxXSWdFkASAJ71BFbzeBhrjvdnKkYqn8HiiQm445KkWHm2FDpLdhwE88GHhMd6gS9D4H1A",
  "key23": "4rYpuGPnDovBUhp8i7CjvGpT9CvkigeA6c4kp64DimvdfsjxTHMjuc1RnFEWo2fD1crW1CpAfpk3ZDpSeHXai443",
  "key24": "4b2gFKFGUXa3rDKrCiTwCgTVSzk6NCCGULvQuEHxJVCbMVoTVp1xug2BuxH9uP9CpJ4qGHraYJ6pJxtFD96sXBGt",
  "key25": "3jtAWvr1S2PkZRD5Qgw5Bo82YwtTA8kwSXv9UXdbJrJ6nXadkjMLFtq6QaCdmz2kwjJ7iZGW9i7kNdUuhQFwPEtd",
  "key26": "47rwJ3D8EzdAXfHWJ1pFaak7PfCv8bJTxEpvJPc1tCoKoRzhounrRYL79EMRbjkVSsCsLPkhvtG6Mxk16XvSxFjx",
  "key27": "3tYhVhwDG7e9pH9BEb9zKXauq9NQKCWyPoyTuMwQUKJwH7w6jxbXYvK1HiRRP5nti1iXnXFUbaiGK5ttHcqd3pAZ",
  "key28": "5bxPGff5GCUg9313WKuE6PnYS5f1RHudGBMpCf4MEWwUZDrGRKZh8CrGKHUBmJKW6H9VFtMQpdsesAnNDhK8jyZ6",
  "key29": "3sA1G5YZbdQK45xdm8REcBTBCX2aNnuEsJmormZsGJYqSQtWSAiDKvRrNS4QBGhCReQnxJzCtehJKdSc7U1CAsbL"
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
