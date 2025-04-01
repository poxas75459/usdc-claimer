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
    "dvgepdahbtk1TvVUZzAqqHeP9iWKJp2QUf3BNoaYvE4LLBZZQR2sk5bBRoVgeq1CcSvdY2YCPxZ7oEon5dur2fN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51U1wMGV59Rt4cgcMDN5QogwuRQ6VchcuPzFSPVcqLAoWzRCtGNyv5wWTKgLYuBdb76cQc9dUdsozEBCKgUBBVzQ",
  "key1": "4aLP781MUC6Ph5WhAjyjnHAYyo7YGxPgQSyHR9hiXQ2CCfjiEHE2sABLaSPYMqpb9cMkrtusu9bG51GPsZXETnzD",
  "key2": "2bJyV5gYXqewFdAPmJgNaBxRFsb8eXLPGYBgjNxjtPrZDzqiMDyrd9aVqHLF3KxvNCWREfZceAn52bpMoBR5P7WN",
  "key3": "4bf3WAg6mCLuibhSkG5v7UzbEdsfbZdRSv8Yiz7D6yxJL88fWYQCr4BCvPppYZJ7eGLqvnvyBUywPBUY8eLLE4nn",
  "key4": "3wU2YD37FhMsKgoKXBmyBeh31ngdwMkqCG9QK1CmMgbpK2rafK38FMngYx2vMo6icrJiY22P8WvW65c5GRZc48pg",
  "key5": "2rtWBW4FbGU24QYpEZKMW9KxGaN9YGDhHyUY2JAH3uSLcx5Ld9zBVXMTGp1RfnBuCnNX2ZSG7mhcq3XzKktaMXZs",
  "key6": "5i4g6JjaSrTAHyLSHuBLHaX3vgmsjZAkHQ9DbD95mJFHXQ7yUCkEN64qZG4J668ft8MJdZNWMxfyytMMRo58KZag",
  "key7": "5MLmgxjgxKhNV7HrDLMpqJPHB8t8t8BkxUrvgNyRfbu8xXUkJcsJkH5VtdQKQf836k6EbTteyqQQAcMqpE4XyYDr",
  "key8": "2JuCJCL4k2x7DDToQ9VZokGU133mCwcNoiPBRA5Syio1DjptC5p6eSyrUrhfjK8nRLK5YpNBAqwKepGXUcdaGyvJ",
  "key9": "5Lrmhrwt6FadFx7F4bUnydquAnxHh9RCga2W5iTTpLDVe93fsnzPc8bqcn5kqQG87S4MC5jNGPeZG3ZjmiCqHcMn",
  "key10": "4KQ1fwGTLEprEqjZEs4KHYgGRGT1bF94ewrPdB3iEYRTUXYtGVeekJQKFwHsKPDJaFkHzMLWKLjDViVSW5XReT6R",
  "key11": "4S2zwVh2outgknAbBhGGPUZPZ8qqS158rsQVoiN7JnpzPL7EzxCFHcBNJmCCC31fozZ2mH5VCCgwAMNsuCPiNU2m",
  "key12": "5M5nhoFQyBQrBESmWVgjc1v4PW446UhaZPsDRpXHyCciEQyzEgAZZCRpV8bsigGdTLUZdJnC5dhdHt9k5VhjS8m3",
  "key13": "rU2MJTHwzDBYh7xdaQqd6MateGYKnmubhrRyeADtMvtRxuMNpyiD4TUfVoAKMYWYMiK1VmoDYpauJQhHQDnFRa2",
  "key14": "2GfzStHdzGtCJs9SrTprf1kbuFRA1mSKgRvwR5qzxidMHdRkdNHcB5eutTumU4tGkFse1wVwRxKi6RJkDvqqJw4c",
  "key15": "auVLabUwNX95gngSuR6aBvzPiCxKcJtfH5s8pXAR7Hju47ZNZtR4zhXuwYzJwEfPWjjzSwukDhw7Hu2qa99VTbk",
  "key16": "45dnk1U7QWbrMk5cy3oPomUDX4WV52xLwM9Ck6eUXvKv7VASFFN6rJHBhVNxZbia5QChfMCfBTK1MqVtDiXDXaUv",
  "key17": "x43kKKvbNWYAqygGWBJuZGpoc8iQmaPAoxus8m8n4PTqNyWpk5J6i2NLmSpRno1D1hGJCFpvQcnXp5oHFMocS88",
  "key18": "yKhh8LvF8Mam8cwnqF6pcsbJ4Q5jeKoWJ2hXVP6P6Ytb6drB2pxY4XKxWtiafpk6MDzo3S2swdVi9kSYN1QfW5e",
  "key19": "5sQDZEvp7bin8TXK59dvrRdCUXJEfA66F4McySWwBtuuhDFzLu64eXXtJz5wW3PUNr7QpNX9E8J2RMPMYGop7bSB",
  "key20": "2yVSQfG8VPrShcUAYqUhv3Mam9T6azxhhuHegXPR8iMgXqAKdovcuAsGbiZAwSgbFArNbihcDaA3SNjQm1DELDeJ",
  "key21": "5Mr2t6BU2R9sBxbKGakNMo2qhhmL726uRMz5vkr7PEzm2VXY334a2RDo6JwsLCRk4MbYWKxdnsE1ZyNQp7SzS5JZ",
  "key22": "3E4Y5TwKjik3xLuNAz6hjbDRRWszr7AFQ1Z7oDqzv8L3KUAoJKZzDVhooJGok2ta7am199gBMjU7eSNeYvsrk2qH",
  "key23": "49BzRDt4bo19HxbPybqc4HJERebrrEX2nCpQ2Fgsq4QhnLdbwjLDSgXMi5XhXybsxb3aTjW2xkEmHa28yZ2uxQxH",
  "key24": "4hASKJVYyaT7gwm7KL6ro9w6BrCDapae8S1oBPdKyyW9GxynqSqfhNekrbkzSRKniVuXztafXMCAe8GcVi9TQoMt",
  "key25": "dQNc3TbkoDVM1pQht4rfjC7zbhStMsifp4vDVuS4ehr7736aHFBMyLXhBrCZXkcB2qLwZkrzkWX8f4z7abai1DA",
  "key26": "3bXc8Xxhfduou1piWndBFcjhbkChQ5mcBwE7F9X61DrLMw2VF51ig23Jvm3btphDMEy9vzQCezvwHFjj5SivoNTD"
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
