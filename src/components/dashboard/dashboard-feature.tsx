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
    "5d1vkhYd8dTrNWWpMhU19HBjNAcMioKN4GgtTtXmit3VwJpLfqGdcBwi27mJvib5E7iMAAzaZfaqAjP3vTWX1Hwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F4xkpgKec7eqnfi7RBvgLQxVAK3Pp4sV9FyrWYxFkT8RVUSuZKFfqqFRHUthtNvYiF66wZg9LzwRPp96naGnRoR",
  "key1": "4CLrrGsjGr1eqKbLQZ3GDBj9hnV3bNUyTVJT44L8zK6uYruhrvmxL6b6dYp1JFen7xdEWrRVuUtbzhrDHrktYecA",
  "key2": "3R58RfZ2imGd3XvoTnSGY1t7UV423vpJpRCLQLZn6qWSJf2YH1dMfQYNAUH13Xv9M5r4awF7KqeqcNPkgJDQqWBD",
  "key3": "3FiidHCEknSCQ17BVCA6dWQ3ZgP24FB8QLHoBkGqTAM7swNFYg8E5fJkktMYeJToLbWbYVD7XL1a1Tf9En4hAW8",
  "key4": "3iQPEiEtpYxu4NEqgCXf1FmMuv4f4Q4mgqjvAyDwoxGYQDXooVC6sgjSgsoKabFrtKfYxtqELkuWUpPrzpKnktUn",
  "key5": "21wfDAENZq9k2z6eNZCgDEgRx82ZPZNMAhhdXtZNck7wDP3z1n8eA7eGfHbKf7LGFLCR17pR4NgX5fLwVAF3f8Tc",
  "key6": "52mkdeCmx82wdSExHPEw6yMsQyKyQrKJRcFaF3jvunq5twcPaYTrFx6Qxg6VA2Rzs1DSZAAwyBNAtxotK5Mpr4PN",
  "key7": "aFLUQSaANbQbqiyzuzyxVeFeknNFDNtbv4Ziuenc1UCEznmfBy9atU79eMrnPryJrARugz8ZLHmxz35FskZZ8vE",
  "key8": "2wHJGfkiFVQq2bgy2HA32enArXpw1FXv5G2F3TWw5U5SfRyRPG1Q4tu31QazhDwC9ZbsFte1fBtXioNkzHzSBSCd",
  "key9": "4ebFZHe7g3hgSXVZEj75Gbixxt1Z53jBek7DmZ3eDyDM5mmmW9KYZFe7JXQWPJuLhSLHDesFWMEczznqoVf1LMRS",
  "key10": "3NbuJ8mEPhbKi5XLuswitymTiq55sAfTEt2FV3qHwrUzSzuQKMeFVAYkMSaBHZTzoV9PXTUedL4RjeKuA7FJwpp",
  "key11": "31N7A29RQzvPEbz52amsXsyPFc2hkXbci4HgrAR4Sj8zixBqqgNYEdMHg4FbEdSDm5T1cuLvGR7sxydJVgTRP8F3",
  "key12": "311QEp27JJ4yyCcbz3Sj8j2nhrZsVcKBjbxgjzLbkZDucvkRDG3sX6Ga3RbWE8Bv6czq4FpfUc3525gLD5bWUNmS",
  "key13": "21xLbWtod1fmjVGfNwLuGni5sdJzrBUP7yvaozeAGqmamktQjLHCpKupnGWDUpb1hRmRb9yX7k6N79B4RDUz5H3R",
  "key14": "aPfgNy9xKuZydohHH9T4DCo9hVVvM2UhiMudr2wQkkHGGdV8cqdtXr1ZVRBTRokQPHm2ktV9VWXXNXMq1268oNq",
  "key15": "2GtcL69CWoRnMBvaNv9HASbQJfSFe4h1DVmCnAyDbpYEebKJm4knfJyQqrAm9huJ4wqTWaiGNFazi72F6VgR2c4d",
  "key16": "3w3mACLDEFqoi5FqyiEY4nVHxApDLfkAimaFZ4L533TvTcHThE5f9YMNDL5fA1ns17UraUBLG21rPG73tErspY3u",
  "key17": "4aaxS7td6tqVYhn9hMF3Np4gK5CLXxHJemTUabp1JKGDTkJn7Z7peXk4NqhWkzjKZwWwDnDhUJWrmRzKSizBypVT",
  "key18": "5HPYKKmGw5TC5CziwR2xrGjQDk4fEZx23fsYahjYH1wdrabszUiAXrakMa2SPgJ1AYv1NUVZhydE7jbNaLmJRpvm",
  "key19": "3VP1cyBvmKotbREotM8i523xpWHzAAxoYrSHYPwSAMYc1hkVQNAmFrnfGHEifJbMowTaVjcJWBv8eLezYus631u7",
  "key20": "2ExpYKoHHQ4h9GqagApwG9ernJgZduCLMitg1R8QJRBNsdoXFmnEaYMWiDkP31jkUeVveEz8eq4jF3hacbZoFyz",
  "key21": "4CoBfbgstb1P413DQTm5tzKsVMqW3CQENdMBiM79NCfEuE2Kx8ACf5xR6VLWps8UvMvqi7JeRkiPhjnZBpuoP3GP",
  "key22": "cBCvicFCC2Nxku4Ab3uPxAQPbTHgP5QUtYKdJdBmBpzRBC2UEx2NzQgAZ47ePW5ybjgLChEKbURryo6PCGCyike",
  "key23": "3s2z3k6zf5Lx13e5rLwyuVN7ZWuZj7zTEdjx8jnaMKPuTaez8uFBucU5ByTfRumEL5EXzUT5Vkit7ieJxHZmDWz9",
  "key24": "ELHgGtGs9Mf5en7Yk2c46kkAokD8LjHQ3oRLmurUYXg6jhdWL2o9DtHMRtyKU68GGWzPy6x9xdTH4xcCuGAL5vu",
  "key25": "4CYVaC8eHAzes5jDh3JmPVDsijeo1Dxettr8nuXQjDcEkkmEAjcfy5yLnQTPSKwj9eDUGeboV886U3paUBqZ4uf8",
  "key26": "46VfzeMaRDPPzdFsrvN21eB9PnuUJnrC5dzqsrqyaSYG6bkMA3JgX5yGwfQkGVuxXiK7ipkZ8JQcEjDMETy5tWef",
  "key27": "2DaJaUoL9pZnxkA3L7JRLvJvQsMoGvrJvDuESCTtReUoJyBbPabYrnxutB1HrGCefTHcUMVAGECGmdz4DJ5aZArZ",
  "key28": "ufQWGYjSjSj3jkq8X8uAqH69QLV1QJ1vJCwGv1muXpiF95W8pTom9dz6BYozC6C5J7zEahNGM7t4Pe81yg4bJv1",
  "key29": "5LJGCaqdsZ8KyWdDprw2KW3uWhj4cEybYSXY1o4YUiJz4xvMHTE33XjGNZBXdQfHbhfBHggSnMeP3uFErFKoAfnu",
  "key30": "38t485gwTVoRgrKz8Np481AsCiKCwRE2DAdcbKaCJYCCwNcDSAhP9E3cQcDRjDt6hTq6rxgEW1GmZMbtnSTmPJwz",
  "key31": "5CVGWjAnCjdjwiH72q1SuDMgsn1ysswK9KAE9Z1EBLmgUWHziWsGhtufgcMRixKbqv39GqScvzoSdgNVnScBDNe6"
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
