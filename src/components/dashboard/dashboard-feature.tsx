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
    "3AtXZqE4DL6sqcsQLuxWHvmBPnHh43XfcyVU1wSnMi6MtQvnMvfzWjnwn1T5sAxXMLtdf7kmHgoj5qaaW6xELppV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3upA6pMhsJ8Dz8JaYJuWJ2ftR6YHWvauBp6yFgoq494TR6gnrJmKHbju2ZnFu44TKNpkHfLNZda3VTDzU5WygpsQ",
  "key1": "4swv1cn5nXm7HohR6i9oXyB1B5cHYeNLL8AJJmnYb1nssTLX4YGHs2NyNAmPdpQuLPFvmC3eQVjqpgUooMgdUjN9",
  "key2": "4SjvkMDFyeWi32gf1mVYDB5Mc1LuppdNaK21R2vjZmZ5Aq2agEjo84xQRtCABKsUXt2RJuRGnTx96dSwFKh1Ndmq",
  "key3": "3FAfgRASnChL3Uh9V8s1iqSfM114a5JdAbNwxnvBduceaKR4pNjXpVbTZMeRTdqb7QgnPab4xETb2tLVPWCfjNLR",
  "key4": "2CHPg7EowauZhXz1qnDb8W52HJN1zx44tTyAdCAXgRxtUtLWVWZRdo4m2yPTbdfVamLsUAf3M4qM4QM1LowKFrHu",
  "key5": "5khsatRKufyp7KzEtYqPVVKAm7EChwaW75suMsQAUUSF9LeX72qBy28dyYECWYZs9rSHmiQMmx1SoLekmqk9kbNQ",
  "key6": "3ZBbSHL33nRonABNACbwaz5SQTX53rbThTB6n7LZgEzoGq8qp3GTd4FsxZR6m936Q3x2cQKhySUTVwRxutnJ4iDi",
  "key7": "3jj3jq2AhxvUYyZ31n6z1BTpC9ibQoiotaStXMvTKFNSTbym9HWXQ4sVSz963Sx32UcjALLdzPCbzYGCkuEb1vSG",
  "key8": "2K7D6CWm6U9j9ipgiYK1Pbs2H2zQSURhgDQgF4jQC6Mpq5XALdRxSTZDCDQhsijQDJLwowxko4VHXYX25hLfGNcL",
  "key9": "RQZo5SyfsH9j6UCTRZR3VhtJ641fAPiTAM7tuS8u7Wa6RMM8AJF31ZWRemExYytmvnusGA3JjfdtK7SEQG9Eeeg",
  "key10": "35haBjAKMr4HqBJN9vm5w6gBfdEMxctsFEzMDiuVg4ZNFXTzWnPvZiX9TQmxC9bTPXgNDvxPsYPM4LJBybtShihs",
  "key11": "2YA9YD8WpDBYF3nDEaNBYLy6KhVaB7VrTyXCFenvj3jHjAjirk8fbjbhi3vcHjPDWuWCQZUoDBYdDUbp1TszLNfc",
  "key12": "25WKhVx18YNYQAptQQfGvvt69zgzDYshY1RSW3VJgzk4Pcjg2SnbqWbq9sDGPrQxXT1LmeVQm5iXbnBE9QdrhebR",
  "key13": "3Da6Qo4LN1EdPnYdWssEHd3PxA7hVmWJf4QacVn4UU6Jsz45Eug31GPQByCENyrkKmcKVYVggyu95hLn6A7HhMzv",
  "key14": "3d2PvjWA6AZfM8r4FQc7k2fAdWEhxgWFNdMmAFxm8QUPMtZquNYmtQskzdB8HsAkVbX5gQPJiEc2NntRFnguJ7UW",
  "key15": "345pvj6uHmWP2hHNZiYh812gGVGkSg67Qg4jvDKYmCHAcgst9aj2yMtyQ9kn2uM5fcWw2J74JtUs5ZaJfQtaHTUb",
  "key16": "4kS7o2wbWk5vpiQhrRAqsFjTRhoJfGqYnywbRNipqvDBheFieKbxX1XNJBCPJd4uJBp1Jyk9LSMbSjw3CTGZHr4d",
  "key17": "5cwE2mYTBNmHaBoedZSYedBEbKJbB7gH1iSUv8tbymXG3apZLYMTjD737aZZ6XHBKgZCegQczH2yGAsiz8yGPY2R",
  "key18": "5hofA6edeHVXAJZS184qRHmJFrEbbwiKraS23ZcYA3gNgBkjCPg7iF4LtKGmNR62fFBNt22AWwcX5PwECPdAium6",
  "key19": "4ZU8b2kZ2zdu921ybmv43FJKgorsCZY1G4Ax3yGLAuZzkHRMds17p7w2H5As2Fv5L7ZujpVzYeafpHBJ5DR9eBCW",
  "key20": "5LDx1KYY5iwWfhegL6TGwcmhPjvrdad59VPadM5ceeSHHAMnLHbKHSGgcg9zsZfe4j4q6qnSGNWZRJzTurFrGd4d",
  "key21": "Sbo4cZGvtCbEq54XyvpfqK9MpoXV3n8Y2idtvM1NxQmX89tdn4no5Br6FYrP3p5QMTioDxAU3ZGoF1onWNMzCZA",
  "key22": "5WPi1iC3x6nzJJY8KxrpKxmPUjGPNGE8Ww1xnSoanG2aRrQSkdKEH4Kfg7Nku489TVFir7FgkteqvfbXbk3LgWNj",
  "key23": "5yZx8ZtiMYmBei23Mw1F57zymWr9N9w4zDa8qYo4CytBwhHCFCAt5uHraCatgyAT4jeFbUGAdy2UvZbrytFMxbw2",
  "key24": "58Ez1H9XZyEJqQfVz2FfZfvWYfHNV78RDwZY2GWETFUpku8YPmJyf9LqVW7uVrJWmqNmhchL5rMUK1L9P74qd3x4",
  "key25": "291oE7vSRf8Mq92qgH6Gr6n6WyK9Q3FwRdxi17yxvFn7xNn8DhWoB9Tnbvs9PucAcA3zd5ZXN88UHKcSLUkfqMZ6",
  "key26": "413hQyM6LbnWa68Cwo3Fntf5uugML2Q6WJSwg78fJiAik4LwzaNRU9HPffSttjxg5uzmjbrTtoNuWf1DG5FF3Min",
  "key27": "59ZMwtNErwHnYyowpDcx1pZ82cZrCNvApQHvUDUaCN7pStQvN7Uq6DmohStYUf7ZFoPLivXpT249AK6iH4pDr2BJ",
  "key28": "2uVBfhF5davg7ahwZ1PeaJPWjEKAkLUArMRvad42pkV8jz9Z3GpYEM8Hprrj5UR4r3q4WXgyjyFSTtyAnRExhwko",
  "key29": "3S3PCeKMWjjo4ZxKVhr1K6nZeUpYJF5Hpn51fWTvS8KMEG9JuNe6NiHSSsBtqTtqUPr8cGMPw5L79XZnt8MLGk2w",
  "key30": "5L4LngNkWmSHn9MA9epf3dYd6HSjGEcwWvtnVP1zRqN6v64i4CLSsHe3mGqbUAAB4euVuSeShQASSSKzx5tAK9EY",
  "key31": "xFXh9QL1qZQwHx5nh7Pqa1S3Ux7tbHB4mjvWDW7Y6dum9Zi9WWfXfQ6T7NZWWeAvGEVmPMxEE8HsfCeMxureqMp",
  "key32": "DbapsrDeCMvwPWhFkDp89p51p9uWCdzUGfnvxjrogU69qs3GhVG1sdMHLRsEVdvyBQ6eAhTR1t3zrvp3AD142uh",
  "key33": "2q5r478frcSDRvTU8cACCZpBnT47nAN4L2MX1xkz47eVqEHvy9ayWEYbuYgFgr8zKNy4GtKTTfes8376tYT8YVtf",
  "key34": "5yC2xfgDNUCxpDVxRyVLi2VVkA6AQneqKP42hZquQTdLMZ329jYLy2UHpU9Gcwqy4cGSBYnsdJZrLZwoXbgXL1ue",
  "key35": "5m73pRRYiVd2yFQAvfdWeWxCABB9KYDZvhb5gJHxjrWsqjFZAB63Mx2HVbueY1kTYhjuE3gks9q6fV51tqB2njUb",
  "key36": "3NgLFFimtd3bLQWFdFpGrqzoqMVLYHzHiXGYE93CeA5Q7ixVditDvwvc3xasgBFphMqkSyz7Tu96Jh6b3KGNofu5",
  "key37": "4ybRg4gZiAZA9t9EvqYDJT3M1Sd7HnvLUoDD8mdJzKG4v932yHB1G2rw8TrjEvK9tQVetyyToqcLqvgijDNvvUUY",
  "key38": "5NfoJxrXuG6pDbL4QkfwrBsXpHKwfwfnt2NxgbJfcDSTY3idSe1tjcbT2JgLiX8Fo9RPNKgrDs4n5EtHqvz821Nm"
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
