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
    "EEKhzyJHxDciZXb8AgbpSDHZPzzgXAQuZNwP9Srk9k2aDKpTDCUBW8wn3Z9vAwnyxJJGAv9kSBp25jhoV1qPS81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pvoEbMDr97JNwMJ7SdmGu9zSodWNUfSWp3mVpugvPukAwfacwgvSQPowvoR1ry7fAVRnAa5uKaMUVXnLGGaimjo",
  "key1": "2Xc8Bqy5fid9o1Cu7nJCsZyZih2kFhCyQSdPrvg2UDTJCFGPeTyWYnww1FaT1LM2imkF8kXiGa4LJRKQeogAQET2",
  "key2": "4Yc9qGE34zvWjsfCUCQ8pHvMtvNNCvrUSRp5WJKzWdgLotbKcbDqVsfRs7CjcFDenstTPfU9R5MJXrwc2qV1pEPi",
  "key3": "2Th5y5pvmoaSAFUtXehwGU9aPwNavUso7s1pBvLmnkYDinBWrM9gVHzZ82jXDHisbkMgQN3nhcSq18SxbVzm7TRS",
  "key4": "4QLfFREiwEsGE6ukJVK7McQaYCQFrYX1qCmdM7T3UdiyiQabKyitY1wZ6X6XWYh3uoAc5Z7X7VdEVw3DnqWYHo2d",
  "key5": "3LdaNTrou6kc6N5RdbHc2DyHeLERqPgmMEFKsN18rSC2AD3S1DjD3yiT3UGAGdm5kQs8oRhGawXtAAKLQ8cVNWxg",
  "key6": "2HMhnhY9UgJqY5kajPmJoXm8fyt86d53avhZaLKPygyuwQKSvenfDSusWjs9WktaT6LHAX8UEXVRFYtmi1ph2Sie",
  "key7": "2sRh28oasN5ZTT5zmy3btyzHwWeMaTT5PSFCvZ9fWcsDfUMd4eUW8UDv58PQWjYnsc8DmdowruCaFGvLMQvxZuSb",
  "key8": "4YKHUC8QkZC32pVtWhfKMN15GESSUXF1bAiqHBJqRU5WfsDDGLQa4onqGsu7uA4hKnyPr6kVgJ9X3t9kBs8EdPgU",
  "key9": "9XbqJ6H6Pjj91GeEBdTJwWYoHdGowWpqwmpYNJdLPpcoo93TAK3TBjXRmNocncS2f4DWY5hJPC7hTc6ezu8PzeE",
  "key10": "4zn99iQmLHtrD6ni1Yb1ekypSbex3GFAeAzZ7z8xwdEHxtey3yjM7p9sD8XAFfmp8XKFDeuAeJiXcu1cekKssTWJ",
  "key11": "nQGCweGyavWVWxxZKoAsNYLM7Ae6SKS6aHkrW4Aw5itrzMAAJU1KDw997piGiA6gnPd3rPADhYJS56ggvuQUgX7",
  "key12": "4PM8cz4AAB9GTrbZTsf1FvbRnRXcjx5LLxVuTjnXzgZdJXHy218EsnwaVwzCbPceh2VGzHDFWjUggGgb7ekU9F6x",
  "key13": "2UFsT2jZbevQi6G4BUzrpQD7ssDo84wgpEweWqVep3aMtyeHKYQMyLEqGic6f9S3DJCT1NvQt51Uvg688Jc8kxHV",
  "key14": "5bwvkNy4Kx5CP4w6JH6CzYYzmfejvNnWeTda3CFTCvGfVLQJyWah6yHtKJZaac1cjeAHNbeXwb4PgEuMVoyyVWLq",
  "key15": "4254YAvbTSdz4wbzm4VLP2KHovYHNcfreRcgdUbdiSbwm9HH6efVkzPGKqh229pKS1csvYhXX6ioYXpXTUJ7gfwC",
  "key16": "4WrQHvomhidwYGQfP1TmB3Pnddgb95QSBhvKtcbNstaKMAXuyoLgCbhmb4tU9du3CkLHgSe3grQQNcLV1Snw7YXr",
  "key17": "2fehpAiS4Y83TmYyiMmAnXeXBshWd2TAb6BzGLevx6UfMopZTGWR2Py5q7d8GUtHvbjeAKRBKg6zGo6jimmJFhSm",
  "key18": "216D6JJE2J2i4nPe6QbAGi8aKmyVXpd1kY57ZZTpCZfkeZSvh7igN6mWjgx3N2Ynio5M9AJcKoGq9qaCSzTKjYTY",
  "key19": "3kpqJRgRUTSkaUPbBWkVLVHBqGQvX8fJVwiCL5T5TTBmdufHaaRVQgjYsUdFFVes7qQoVugzEzcKjQ5PPHUrKLGR",
  "key20": "2CJNbuMRbmaX4WkfK7XosavaNPHaeR4yUPU7CEJw3Ltyr9rHQtm9iZoLAZRDvLYE9E7KQVv4mK7UJnuzevKnrnWW",
  "key21": "5LZkVGbD4YStCYRJun8DEkg7qM9H2DmhNw7J9fJdDsgFFZy8MQo67qC5Jn1DskbgrymBYJE9MQ7ZD3qJuDe8r6Rn",
  "key22": "34dFYaPCC7DZfxSSATYUhcdyFReFTCpieeDH9ncUTou4oKp9RYKH9J5U88uJsf5ipBciZjfTjFZDvTNCXaummAcv",
  "key23": "QpStt5Nr6qrp1TLWJKxio9pUpZkREoUxz5FbCBxBP1xHhpKQ4GPMaD2wSg9DwCa6dE6RsX6wtyLSN28aUWYf1rL",
  "key24": "5XJRvaxotCvXMM7CdV7q8rm54VrPWm1KwDBVftfACbB7hRN2tWuqVxB94q4vAKCmvGkGU9TXjULEo5rhgytfRKM2",
  "key25": "bJkjxCfLuek4SzZQ7VwDvgpMZc8thrPFkTyhvQo6rrGfrsByJf9RiwKGKHwGX2MNVk96frqvnFoDMzDRxUgSKXG",
  "key26": "3p6epPkGAx3LyPqdP6uVbjiJeoSMYf9UCHaaDtcx726ME51DvzTT8QP3t4xGAddCKDtpKTXgnHeT9SK8Ao2huNB5",
  "key27": "3yu8kf6RB1oVJEwkcGYRxoX6fdoKyj1AspLjMNp85cKdeg35snGcgceoMGZEiEuBvqw8F5rtCPwPEwqKEYjbJhwo",
  "key28": "2nmiVd7xaBXxCsafFZcyVqHy7FaerDe4QkypRhFgT4wdPcg9e17y4M36jbTWmLdRp2Q7ahCTEcj3So8Zg2Qpimhm",
  "key29": "5skvUGCdL21GA1Xk5SRwEKdqEQrpkQeRsArhzCgfyNbqRfmrJApwSFK9VeakQt1wTLrgbQ6aBR7JyMd7FjDL4FhU",
  "key30": "5uQBt4LhuKcE2auEx377uz2CGnofbRjuxnToEDF6ftKaJddrodSXCqVgazo84VmA9JMV2now9GL6YvUKPMimB7Th"
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
