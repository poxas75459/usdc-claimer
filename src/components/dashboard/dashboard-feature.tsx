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
    "whK71g2PtmcEMLswHbKfE5cPKSDwkeKbNsZok4vy4PRgjMpvBCZpgsrpR3aMHsUZ4arFYBRFXybNjqhMpmH656U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QCPzkTGxqfk5Vtc7MMXVdGr1eb9knbKnGKwoKr8rhHACb6cAoxo1aSzeemKQb5UL9BxNNcc5RkcWEYarohydxBN",
  "key1": "2kQT7KshDSNt65i6kuvxymj5177YdkzbH8KNTcNjw6PcsdkXBvRfvMWNSxtU9zmW7waVHPSFZL9ezrBNMRAS3HpD",
  "key2": "rFSsnUMDdwQE22EoFHnvLH6nBmEifFLs7DeTdTGiivnS9MijX7CStdbUgkT6tE3psSFQL7AgXVcrjKMkW6pdZNJ",
  "key3": "43q5BHCQGGgjPCXPsu7copKP9tzdKSUWiEYpqRcbkhgVGtQ64Yyhy5afG9SptBjn7kvadauHEn5dBPqrdZgVgabb",
  "key4": "2y3SKHYLsn9Wek2YHE7x5UXkMgn2t2SehAk2xXE5rNHWhMmKoGs7yeQt6p4gVGiWY1WpQbiFN8EEYx8eSx7AdJBR",
  "key5": "4tFU5AyjiTZj1meqoPzTJJiQGkqAqenSiPWGmonQnyxR1SxVCxR2f67RF7wdqnBzuoAKi9bRP3HTgo1JRuSHn9uD",
  "key6": "2xwYHYe1AAyrq1yUqYXne6bcMt51TGzJ7Z8NN8dvVBN4H1ipmqwgBtqAibnTi5PX6bu5PiSd4hDqrW9ZDfNUbA6A",
  "key7": "XJtZXkEmSxjaeAuFyJBviro1HSpbcZpFKntYpFxwFDUQtu9QYQN7nSVY9MusJRE7SesVfh7QCr7E4wkVGjeEHpC",
  "key8": "5nyAeX72Km9uZBUzYMopWZapgdmpNCvz4y3BzYBnhcaC1niJ8r2wfYDjtRqUqzdW7Sfh7KkdSUA4y2RQXT1PJowf",
  "key9": "HDtoKAuNt8CvKFeitSmd1jxMzrNknNy7YK5sh45fR3bsTEbEndDRtq8PJsh8ZZbDq4PXsQh7QgXMYQ9bKT8hC6L",
  "key10": "o3jEp8KEoK6WSAgxNSxn3Tdpf1fhM84yPauWmaptoeZAGQUTqxobZbJWu8xNQV78i8VhC8r6MbfSiE1PikKsuVU",
  "key11": "53g7oa8q6vnQfJJmxMX3pu8gNtNm43Q8Eze1r9AEhytACLouMihVm5KNH4oPsKxUTtYhu4aTuejdgqrgWU9aQd7k",
  "key12": "5fUB7Qo3voWL9Vy2ZDGPvmKs1bM9WrMXJisHyBqjYfiHsQiXrkgzgY9qjfn7jPpMrHwZPpxNBN3Td3sxbqPR6wD1",
  "key13": "3DEf1vsyUDR1LF5gqX4JqNdaJ9CrkCky2qMBaSVn18CFHY4RiHuRZqfncMsVSYjaPCHBBXjE2rJPAn4rog4vi83L",
  "key14": "4gBiXUwL6QnZ4cTUmRzritVU18RbekYyTbj7BfVPpyGHRyPqUJYL6pKoLKf3mrzp89sayuHzHDdvFYMtLgGnRjR3",
  "key15": "3GQFWexjFT7BUCd9pAqYgdsgrNqWoXEgEMPN2SPtcgzXs9Xn8YyajLtaDUiR1EDixvteqq4MHAKNHy942mK5HH9a",
  "key16": "3KVQ56cMKADTzqJ275MJzHhhbfcTmC6GUccvMX11f9UhYynLKeqeqa7rS2K6VshbhEV3ycTtZUuyJFYzN3ypZwFC",
  "key17": "4NWZ9XLjWpznpms6k4J8qWLvHN99jJgML2kFVkueUXiu3W4G62Dozpqe5xDx2WUkgJebrNxdDDnPLd2Qm8VfunJq",
  "key18": "r5L2vaYa4ofVZREP49K5Rdssw8mWQMMH5SZgJ3pC38PtzFZGRabyF7GjuchwKjHYbAtyXBEmLn6aED32egBrK3v",
  "key19": "3J934mLjFDqT7RrvWKcXcHw3bECWBTY5B5Nb81RRcEFE6qigr8XCRsVnWnbAQ1bsLqURyQNWPJGqAVoNpZiLHkoy",
  "key20": "5cH4mi1AfetB5TrupEzWswRJaLo8CF3emrWQfusX7qdFrpzj8ydrNhG7qf6pxK8Wo3C7JrBE1nVk2TDThzmdbTZn",
  "key21": "5yb1NUgUkop8pbwvJEUjp4tbJ3gWqJShCQMkWnGeBGjU9A2tzAHZF2ftz3RNptuE1LA4TVkYuHQMNx35mMAKV63Y",
  "key22": "2LcxxgPCb9FDJShHzEWZHBE6XeeCZwcs1E79NgWBm8kmYUACoEXNg6MZY769ydfipu3cWC6FHnVf2QSGGyf7iwbB",
  "key23": "5XmhbvKbFt3Z8gsqXqGMgzYqGU13FTq6PFCxTPwsMFeruQ1tJ2R4BR53WzcC8p87P2jFayvUM68VhaJNykxwyLHu",
  "key24": "bRjuZ7GCt8kyu3RBG8rzxbYWtCn28fewcZrDWAdbLENAR4GrkUX8azqYoU5NM7VhvxPPAAdWRE7pqAufDz4FaWZ",
  "key25": "4w4N3Sf41Ph61Y8eTjswzSCjCSx24V1Vg4uvvqrvoCDJg1cPM7RV8fBvEqSjQb4qABt4W3oDyVUXpe6y6ddnXJ8a"
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
