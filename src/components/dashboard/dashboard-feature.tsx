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
    "3P6kEBki7dhdT52Pg8TsvP5u1ziB31Xses96JarKMdvPowj3bzFNNsjC86dZzg2EWkT5vfnP5t9K6drUbNDZdHCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LyrXcUbSYq464EkvjcGWnFn9DZq56oGcSZ5k66A79YsU4zcundyWWhQNi2rkM85F7KDS2N19xp2qPJBZ9KzRKRS",
  "key1": "4nYPuQVJT73AnxPJsDKgNUqnxAX1pRQmxAXLgcgdgxPJ1SFXcNxhzxz9eQ2sp7w6EPutLs21jq7j82oSM9YJzJEH",
  "key2": "5gdiaYqo58kMhXpCcd9UQDex9QNr1XUE2WDKyPNzaLXYy1iWbm86Csc4D8cMherSKLfLjnSo6pqaDDuT6BcsMKER",
  "key3": "3BFhbfQFJDWMYtBHboWwhch8viLWAUdzoEG1A3EDnJC5PLuDJaj2LqKD7aTKL1FnE4hbEGiKFJvT8JkFHJwf1G2e",
  "key4": "5zpbvZH4K5XwLQ9SGsvZ8SeDq7PnwUNBHSKKj94XZ1RthcWfgWYD9drH7Cnewwdm1eDYTeckUr6fYhmWEtMnms3Q",
  "key5": "4CD5QeE5HAGVsh3rFPsyXRioxtZmCUwiYHjkFtoRnS13UfwqkxcqNaVENb7JekR93QtWsLZPcSVqiMyLvt62bXKv",
  "key6": "3z7dwQQ3FUamSRQRJAh9TUJQuwEaq6tQZSpLo9KWgU29kmJPa8jwkDRJTepp9tttdbByBegywmvM6FAnLgiFnW2Z",
  "key7": "ByLbWtHteCi7C4sXJGsxw32gkByHwJT9k3TVa1ryGxV9UmqHUQS9Loa49He3yfDyvPXiDAJ6nve9mkoNf9coiky",
  "key8": "5C9t832qPe1c65MresA1qdjb6ixf6pUAHkd5Qw9ixffVKRpCq8vrbkTJJd1qmDiQ31eVk5kmF3md8tEhjyf3LcoQ",
  "key9": "3hm45tKfydfcXq4tbaQH8MSutxKWwkixkCqYXZfah3oqUeMeAKxywtDY8wjwkYad8MWGBXCEZbXWRN3dAn4WigcS",
  "key10": "e1mJbXPvQ6GnRREk2FASog168ibF7vUnyXscCQ4DbcomC6BfiiYSN8372dKT8SrDDU5zUd2FQDtrSSTuMVMRbwx",
  "key11": "RcfU1mhrGzwoPX4UAgMYcCXegr798zMLLJHNJ6SShnq4az5wg5JEbiUfa5dmE3MWqNpZp3ZvPuP5z1xY3s8X1cN",
  "key12": "5dTckayUEhDwpfHnt7RaJhzoEnNHz9FV41wpXNWW4gsBkiQ2Si5RYYgzRMYfr5QMfjgqUrLDttJYTsCjVzi4F9FB",
  "key13": "4jTZRBqCKjtCJrFR85zJwjnovc29sYiPSQUPZkdVnj6ABpKGABTkYEYThNsu9BsbFThcWbU3NcmWiaqnM4H15gMM",
  "key14": "3seUrUZwPCRK1iiQcVQSmpsyf9iFwA7wBH6tMdHS3qwi7GmEenjw9LKu34bCFrhjaQjiVMqhocZWo65r4g8fyUcz",
  "key15": "5SHQ5yjYQJgqvsi4dhFsgdoFj3cCtVAV1S3joLSadDaHMhNRFLxVASY468jGTu4he8gEg3vzEEuQwrAiawB1UXZi",
  "key16": "4y6q4sAv4cUqHKTv8PTFGE8cMTv7k4aaNDoFYwxJoKZM5zxsnZbrTrc22NYdSMPfebhaMvFwArj614CaAeKMuEnF",
  "key17": "5SnU4rboNCx3CHdAqBSw8r4u7q2gtwNt97SvY8m6JHPxrdPc3a3SU2SeGSVQRXZUr6Ri7nc6QeYNMkdfUGrFcq82",
  "key18": "3sywWpPJUwoxvnotp3jQFca9hDCPyMecVeQ6Bg6Z19ay8KJD4xnvVtjrHarwYMwPdQ33S2jcSz5vFDRYSovrViAt",
  "key19": "21uAs4hP5KRpr9sHcUtLoo2bM7Wm7Bfh8RSrNwv5WveTwUVmgCcRFMAe3jCq4VTRKV8zTwqqJniPXz3wV6oFfJLN",
  "key20": "61nvmepidAuk4QNo5EEWhFYXtFKHmrdyuACr3Ce8Lxm4mohaxwya9ZCfMit9g34azdmu29Ez9MXskSsar5pWKXAw",
  "key21": "2MSghiB11N6pRazzk5cQAd7NuYYSanMLpNZsV6sHbN23tuEjLPvhswKaPnZaeR1KNwNUToGvWcVV5BguQs3Zp5h6",
  "key22": "32DTDCejcPkCQTAcDnkJV9RixHwkpPERdtmTNnZWeYibeJoQ5Wqnia8RXjkaKDy5Z9e7BjTwT2dQW2J8CoJAYsi",
  "key23": "uirQfAEBAL6eYFezkk2Q37ajKAAMiz7MzaayjDJnidYthqwbyFF9qRybKmU3ep2Se8XsdWdCUFWyovjnibSgoES",
  "key24": "5ySZabXQuXBAS64oq1yadZFby3K2yXfmqB4JxhFMmtb16VKvAkGmdU3Rb8FVuCQr2csubJDUE7iTtDwEcJkEDEes",
  "key25": "2cCHitqqMxGKkEYyeFugTmkNWL34J3pyuBFZmNLkRDPaHDkCNfCyyhTuSySWb9k8TeSJBaQvqnN28scoxwgTaJpz",
  "key26": "svZXZAyYi8ACPors9m5UEp9NqxZvF3Fsa5kWLt2tJggpLUxPLGpwtzAukiPRjfmHBzLLQ1PWAkEzvHBQ5Ya5EPu",
  "key27": "4zpQd7T9qKoWCfqevnJnH9n3cENEb48Xh2XKxescvPHQwWFeJwNGNUYShcPhULCi3gW4rortjGtEZrohsVD3fvkq",
  "key28": "2buL59b5gbZ5xynVqcMRZgNS6DHmJYEm4pbyTyaRBapcwQdJHxqfpZLiTWQsGN6nv4KjbVd9jJfrWvnqKb1jNgnw",
  "key29": "45aqmbhdAHyoVjjwV3q7KPcRskTg9PjoV8NJnTAdF7USJUax7u6Ja1Lrx3GaBmANM5xRcae7vKCoAkyh5CozrktQ",
  "key30": "3QkEyP8SvDe6eJuFd9GJYWJerekAFSe7Dg8SmnJP3pHnkj8eHe6Uq2DKyAKZTKCgxLL1eYsrCVgVtSKGNn1ZaGkv",
  "key31": "2w7RZ5ab8rkBekvDE5P6ZbFL1K513ZZxHPQXc88id9QUyJ1AoizfBchcv6Y4iospUr7CyDK3NVSxjgwaweNpU23P",
  "key32": "5xZ2PGgvMSY5pXqHCQF6r8xcFCc9iQXqswPFBaGHQvU4Vz4FY1ELsimkkFRKmru6Wsvw2KTgVLwWnvksesj7EFuo",
  "key33": "2XcgwzupMCwrLwSbmFuUuj9cRF6Cef3d8RipbxgfYYhrskRs7p6cWc2r4tWZ2Cheu73tqKhorbyEmVChWjpKMvWP",
  "key34": "z54W1Ept6F2QSAWH2GcECkqa7RuRFs9kT4hmbeTBtChu17G8DGnvt1h4vqovCpC3akgrQ5HYbpD32ywpNskVUBL",
  "key35": "5LuQubg1LHdvsQXrdEMvmgbWBS2igCqnVY4pYUDwrdZYTxAiW5HJWmAtdURb8CpsmD9xVkZynvbetAs1y47TXZ8C",
  "key36": "2YPGs6vArBfCDGU6kDc57EXH2Jb43PvdTCpuWU2Gm8MWRZucthWAMRiNoBBcvAoZt6tvkzUisruCKWFD7Uc2s51v",
  "key37": "5WMLX874bpbt75v7LZ8hBy2Hp3CNK2CHvcqMdLqUj8JjLZrDZYBrvG1pDpjW2RuRh6YXmUcMrHmqprb4Y4nJnGjG",
  "key38": "XLBgcdhDAmii3yGY7cYZhcMqocxNEfxxCyWdSM6CCiTNrCRZdLdVyr2t1G1ezQ3f26JU1dR6xXMUAPLpJv8DbZf"
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
