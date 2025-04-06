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
    "dfpFgMfgRN4CcPLsy9k7GQ11M2TmMeib6rr7Z41PjQKEEn27SijcoNZ8TTXy9XcoSk4E7SMHWGrPNB9Mbm28cji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wavGDyfTXy4kQFpqsNnqRvaUhuHWsmWeJQUBkapKV1UL5UqX7Du1wyLoQv2k7h1J8yrptn2cGZcwhNr5Gw3Nmy4",
  "key1": "cHLbQHbkfLFiYL8dqK8iTn7WLJgox5ZsP41AUqRu9Sq55a5iZzUKL1js7FTRVACi7pxmaUtKsieovmrfZCUoYYZ",
  "key2": "qJzhcv5cBqYM5r9G5e9m8pYc2FWgqg61EBaj7BBQPjn2rCT62vfS18W9uZY8ejG5PTVZ7P91AqZ718J5imwspuS",
  "key3": "3adfVCtN5SLhBZ4dCxTenwPPFeMDM6RF9mahxKfjEkrcArbDa8yahy2TLtHfaxzjucz9Uw82EFFTDDCPTSbcADyo",
  "key4": "2wPpXCJZQDgYN3f9rpWELbeKMnQub7G8KzDbwG947aHV9PhvejAB5dbrpPjZKYh58eyWFgheqwD3ggUJ3MmL6i8H",
  "key5": "3RtQBnv7EdUyh61t5pVZCDvGJBUZDaW7AqUfKeZTs3vT1xT1xz6A4nE7iy5CxVnxxj9bG2ZfqdfSn9vLKbvQREZo",
  "key6": "5MXr4ufMeiFyXsZyWk1eFwx9NxBnzf7DJG6hXF1JUvtJFRQTdABZytzDKbAjDvigXn5fEr1oDTSCbivjThkBh1Bn",
  "key7": "34Nx4cYTeZn6MBxAvegUKMuit4QpW5cwHDhJQyncRvng8HyKyzkZZ4E5CvEAwdVJJY2KruTMt9stWayi8HwggxjS",
  "key8": "ZCAMMoUuzmPFrdok87hstVNMsenmR1xiHx4jLdwpuseV1KpF4Yr2zyWNowkYTmF2ygf6UHvtQN8McneGiAQ5wPz",
  "key9": "2rB4e5sNPzntPwRNbrPS1Zo4ffRKh1HhyVaDmDhuKLykrqpd971VJSPHzkru1q3QBw72EpwhaFWjUhGqgWMFKzbp",
  "key10": "2CcGsJ7zUzcKwx3vNGDbRRg8hKossn72iXRWGA1eNqeASfNELXuxGtw96EnqDTdgCvydq7dcE2zpGb1YxHfg9DuX",
  "key11": "3QeFHBmhQw4wWCv9BNtoPDPnnfXVcQA4mGAgJn484PGiRV2NtJkLUj4ENyJBdM5Wyj7yhuuJR7rDoaeL5jMYJwT8",
  "key12": "39zvNEWxQBNQa97aYUBx9vXMp6DVU6KkYaaHDzi6nfX98PTM9GyFTZ56MgboMueUCkc7MjrHnTxYjUARZXgfeEvf",
  "key13": "uzYMoesoot6iHFu6QHaR9QYySAgSz2RxnKFtnLR87ddB1Y8cw8YvZ3hCNAyAAQd5syuHj55rjQkcueNuaNHmXfP",
  "key14": "KteqYQEuJn4nQZfijmBx4HL5WutowSk5WenT5gsGRnJxLYDNPjDE6cSb19qW6bahUiygsJZK68w7K6AT7U9Dzwh",
  "key15": "4ye9NgStqkq3pNuqo4wdnb11EftXWiV4xSXv26jvKpUipj9f5w4vGBFFQ6uCsrRPWHUmskycJqmCtmiRe4gZwVVr",
  "key16": "MvEQY7WzYzMeAALu8aoeSVZnm2YQajKPsL78pfEeEiX5RM7umpzs3b92AskZLM9P16sv433Hf1nuTrXgHBnSLsD",
  "key17": "2nYoVDr21YgB4wk78bVEyDNa3DtQaRCEdKnYvkxwvrKgPPJNh7Y9P7hurCBGkk21xCAFWifxEyFYnyjRfGo3ndkK",
  "key18": "5qNThDPVbmoWozJbEPAp9ZQxKuE8D7HkwJfADsRFGF71D5gLkWmAsTFm4f839vDYMR6jz5gr4NA2EMDCN2b11id8",
  "key19": "3K11KgN1VSSX6iZXQEVCHvVNG59Bn9HbE6QMbb4tcLKok1ryhGrmAVViDH4wQkC11GX1TKroDQu39ZsqLPvbDsZZ",
  "key20": "3Yk6p2U9rsZDJH3Yg7eAaB3oCsiVJD1kRd3t6G9VaeGinWTVhmtNP4wgx9q9AxQB7zYbVXKwzg7GYN8mBwC2es1b",
  "key21": "vt87KwvLZKjWCC25duwENRTJasHvRbEC3u5gxmXVDhMkavHcrTtxn5aoq6g5hQmFEfvJHT67k8T4NjUKzDCeFEy",
  "key22": "2yMpBbT74SWbj8h8VVoChSbRy1Kz8dtcs982BbpLfZAVjEZFRGpEALijc7ZxkEtmEzQy5VeZeTxhBoieZHDt8QjT",
  "key23": "53UPSEvJrPt9aM8wWbYncj1Jy7qvyx69HTtQCHXyKzv8Bkrtjegw7WsoqhYyDhNMvbrnpeXaAc4wZQGGf9AgBBzf",
  "key24": "21PHD2QbbJ6VgbHGgYEkcdiWekRKqJ3TpqyfhKNUEctBx5DR2vd9fdfen4RXNNBv8zxko4xRCsS24PcfUA3vnU4D",
  "key25": "L8pf6xDyz8nQyqAMfxN8JQe2hzADSEZy8qyrWA2XxVWZLPokuGCivBt5ma1htQKvihk8RX8HRGodckkhSbpLuZr",
  "key26": "32mGm2Ez2JNY8TzvFJer3JPaYgdJgkkDcWfR5DdLiDbcPZK7TZQGQWZNCspWiEj2ZMeV6QyUiJWmKugtx66kp1V5",
  "key27": "5Rdo5ZuV39B6rhK1uTZkemKkb82g8bDe15DMfZCXNMA7NVZUsZxqPBnm1NzqttvdgzE75uRhZLnQj8s86Uij1U7L",
  "key28": "6yYK7x3kdAYFfBZ6fk1yKzakU29HRQBnooSkZXs4BVnWY7XpKj1UrqWNWBYzZEzwtfqoQQAeZPD4z88aytdENio",
  "key29": "5ZEVzxuxv8UZ5Bt1dZiZ8nQCtDPeGZqnxeZcMdWjWd2Q6MN41fCuVHhD5kSqyAGdU57ZmuR6YiqNBS6ePwLpr63Z",
  "key30": "673q4K82r5CRExAzoDBb1nL9mwmj8W1Djhz4djX4ua1nnPN8hXprkR7EYLP4EjUhAgA7p4NzV5pcmcZAmMSS7T1h",
  "key31": "4ucuRryLgmrjHxdLEZz2Sb6dqYyKLfvdavpxUQeSso7GSHygn65ryKyqB4omY5YRTSz3AP8FzcLqAZkTti4An1kF",
  "key32": "Vogbpm6df2uSzcYqJxU5GEmFZsNQY38i7ziR1FQ6QtDkkW7Bg3YKKKBUXn5i7HgwtbTpttT8Dudw5qau9Cj4iux"
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
