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
    "mi5UAiAWPNzjXBqgwRbYC182izpb5ZxiEh3dQTtQgeGFfH6hpPKhxLUYQm6Cc1165SyagbdQJGbq6mvKvx8hQSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MNUkhDjWJCp9Scjv2phQ9C2MVcVigUvsj9qiHQTwMVuVWNcAfwFFAg5e2bvnpqP9R5Hmk8KbW6JPg7KQbpFPJbr",
  "key1": "3rRS4foPHFtdzFePvuwrHXTBf7N7SpYQ249LFwELKosRZztsYmzjPw8QsxXe6hqAwGL1z6ZkCdAzXzEABTvf5jq7",
  "key2": "36BW4WoVfsuFVgV4pNWPKmZvcuVRgMkUpHcDPY2zuQymsq7QFiEDkMkPQb1QMbMGjMtpKo7LnW4SJdVu43rfs5Fw",
  "key3": "3EXP1DGCdW32bu4Cw5LKQkZptx3EvaxsqrG1TWKkpGV5APo3V1C1LLLq34qZtmrsM6qsvbonscyRcPvcLjz3Zp56",
  "key4": "58r5k1VQP1xbcFXMe3dG1fRKN2mPsSGHgWgDbrf6g5GrjkQHzpftuCRhMQq5z84KDGwL46G8r58569ZKGkZ6QLQg",
  "key5": "vmAFzusF4KwsisUU32qTGzwFDb6VSgm7jqGYxQ1zqf3UujxqJdaaNBX96upzi6TqLA3tx5Lf1R7chYV9E6uwM2h",
  "key6": "W2ZqCmqFtSHAQ3MM7JEtL3ub5FrGdpBcDVNFFg4wXorDxQ6pHVtMttqTM8A3coAWWpSUtL8K1dwtCzywnijuyNB",
  "key7": "MrcVdzxnGUqLamDrpx8vwFVvysW7pYNAeJsUSrL9rG8SPfVYFgS3pSZRNTgdoDAS7Q2L1HyUkUGpBfSVR2sJyjd",
  "key8": "3JEJhjEk5hJsYjqR98CWp8kkTehi22oMhrYh5eqWKaYWJfZqdzbQf7UUukfTBfk424cp2Q5CHNEJdc2hpkd8C3YR",
  "key9": "mzQ1MdPjYAiiaGnqmqiL3UuUBgMGKipugG5kP9P7CFWqBuSAi7EgSpqeoNCuNHJju66kKEoT2zLqwhyT9VrcNSC",
  "key10": "3qm4NpeFDSibeieJhgkt8hbGHJ28VsJ8YE5GrSqQqPiph7YGHuMxrSGgngktYNjBLtVbX8DpCqy6RQyHFPh4iH1W",
  "key11": "5MPxkz2FwMXPNyR84B4QqSabcbZK9s2x8MSkVMnw5pN3PEQRrgtx44UXQgsDoQDKq9DNjR1VDmJSCeKwdNDjeVRx",
  "key12": "b8LkBiuVjF9CP3hevBZmpyV6HgtQeuhoG7wYFRXtbu9TUVvubSMLWKEbmJnWKCTxZz8WL2TrbKKVwBPfSRNHkSh",
  "key13": "35A9C9tR3Gr8B316D5YyPMa4cR3hEGqwYS219rtj2oc2B3XC5QV173X6oTzFQtiGMbrHpmLgnyc1TqVgrsV3Ngr1",
  "key14": "8ncTfoxaMiFsT8dB81SKnjc2ABfBXwyEvVLp5AZWxvmcGDLG1RDzHZkY7xANoJDijn1TUxzoEAiw2VVYNWTa6Qg",
  "key15": "eS5TMoUgkgkQQFd83wC7kdTKSzPK95QArZZDa8LX5pNTFPpJXpEHehivQX64ME5HCYXAQLfwd4yESZEVf2C3Wkk",
  "key16": "8K8mjzwMF4fZGugwpk4HCBUUcXPTRAWktT4o76cUtQ17craQ4bGRdZJUQFa6NcQJZsLNbQkr3cGsC9aJoUroSWa",
  "key17": "3jQC6gJZeuNQCnMvq4Npcw3EtLNfNRudK19iN2RPDkEtUN8QPbE4uZ7LnwrGBLTbhtcZr6B6JNvK3QW6HRJ46tBF",
  "key18": "2nYiTDJ47no8fg3GvWPVKEEUyHnpK8mhQ9VDqvnMPcbp82g3mCECydCANDCUs2YEPnjx63oZnutDXvBXERbKqPe9",
  "key19": "4wcZS9BY41kCijJQaHC1eMyJGjBPPFezX46ytooNWhh16FFdCca7LqH8Q4MdqZBVbvxVuU4qmoPURkZaNL7f4qTA",
  "key20": "FbEB9fwRTsSNcCQjb4DUB17LEtsAhts1BZehxdYZtNJYMquQjXYNAxegKX7yEw7sQERyAmB2XFoLo5iAtQMVfHH",
  "key21": "4iR6XwWaMM1Wwg8qZ83Q82VuhvsELxVTL4YY6BTD2TcDU2GJZFgKF25KkMapaxip9ktQqGy13P284AprPZmPbuJY",
  "key22": "F2EBFoDHC62f32Zk3HK8qZweqvWTFBffLZVg13GrKGQPQ6WrQXmBWkCW6agTiQ6hAhRUSedRmdF6ebx7dMNxY5P",
  "key23": "4yHhF8r1rbUiJeReR75LmLbdqAViMnd9TFZeAkYWW7XjmuBZ595nH3arYvs32hRHYwugegxhXsvGfq9LXAs84RdZ",
  "key24": "2oYVhxMZLytNxENCHDw5qXn11kZ7iWWVMaWZG6QcFwJ4Kf3HUm5s42WTHNrRn4177Q8VyUi2DBRE8pewmRKGDKDs",
  "key25": "4fjaa6vQMs1DnKe1jqTJoWHh83yWqnPKgYGrQoUmporiDfyB7xBwhjMnFN2gTeGd9ZuS59jyC5YmpCouVdH2BGXp",
  "key26": "2f3GB8XEi9zrwHAirYqMEjVskPSWpoXXKdBdLrffHHVywdsfhJUPzSbGYtvV1aM8UPoAB89ecgF7A32RCrdjFdwx",
  "key27": "2CN4y4SSKpmZbXetSnD9FosQNyaTJzdXXWxW1QwxY9gUgnRZ2FnDjaW9daxL91eC4J6VnwJ6Ua4v9FDAPsYhMVcv",
  "key28": "4wAJSs8RQrAyc74e71AGJgyuzJsSczWCYJXCdwsdV8GrHPao574ZcFexTY6ehWTaLsXkUEBSqRPavzpGsZuHKpsf",
  "key29": "3sSY3ybj6bYi6XAw9M3pHnjp7sRsbsci755geGZ2ufJ5uq6X9Gdz21LVDd3wtCKdPc3PZmkDRGRpzSaVAhpFoJ6p",
  "key30": "2tHrDHdkiBz1YK4oVoYP95SJwaYN8pFG94JYPnXh2gdm4psT4vnhJhUmeAaaqUZJHSBYfBecJrQ7dfXngouFxSfn",
  "key31": "4zuTVs65xTohgJ8NrmbacZRa7Ecn31jjjyWT5NgSRjUk8jZsUTumUnNyC3z5f7fZUKy9FRtbm7MhMZ5PgKVxfPZ9",
  "key32": "41ndFGS4i2gUQpadrgSJj8gMPhbbSJ1osZek1YLC5FU1pQsATRpMo8gYgSu31XgGw8xJTcRiUFNcJ67cbi9mVxnF",
  "key33": "AZoV98vejrQQZMmLU3zrftMzuyZj2TPHiUGyYsQQzBqFxjJW1YeFr4nDuYtNtkS9j2Exo3WshyjAM2DSDB5km25"
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
