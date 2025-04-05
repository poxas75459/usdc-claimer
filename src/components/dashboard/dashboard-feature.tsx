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
    "ZLfiNGbze2ABZZzFiBp5JZ1PNix44Pn9PYigmxvmv84eTrhdMxge2m87aM4we8Mx4ofT7kvk6e4QMMGDBS52UHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tsrx2H5JBgbwtWeKNhs9eU6pEXB7u3VETxLheRcLFRRZrJzdmemq74kfXZy73BhEjxTieU84K3qpvPXJNDjdUEU",
  "key1": "3vxWVZEsJMToFVqjvwZrcxWHtCAZoe18rGsRkWFcbsFESepW3SsHMecgGxNdZgCcHDwQTMue861ckafCG5AUftou",
  "key2": "3dBRS3MXxeCN3PKQRu8Gzhdy6rbBQ69r1y7qQbFb9Kpv3EeXXFNuh6qUSzZdZ4iHFVLtKsKtSrwRgjJCMZrbWUxP",
  "key3": "4QuaH9ECgb976tK16ysE7PS1gNaU89T6krjgrYj8KwGafWgYqrLT89mGBwMb6pREyaJcu8YSkrAeBdvycRShKGXZ",
  "key4": "WbGhvctPRT8QJMr1B4j7zvMXdwXBcQo1hgRsca3UGQLVRy3ef2GgFbyfJYDRvtBzDo2vXcjAdcawV7if8nfApdF",
  "key5": "2VmaFMZjvaCnhF4wYhfJU9SKiuXfuYY5QLSm8u37xNq1Q32k5x7Jhq9xenMrZCQ3uCD8EDCh92UUuqqaYDaCfkPh",
  "key6": "4Ca4rAyy95p8eGiT7bExZXamP2hwsM69kVmamzEUoxT4wVh6aHw4ckqNk77Dwcd1hj6rwYFry9hRjqzuSzgV4sX6",
  "key7": "vQL28mwGHYiCAgQzN6WJ6Sb6foZFG8inFtCBSA5dV4z4HX3tiEpwn55ADAFhc4eoEq4JqJV7iUn2rnUbCnkFZMr",
  "key8": "3h9JL285qiEDHTtzMAu983e1gTD8eThF7VnjjxA3ExkwyBqH7xrwhFBb3AnSPUAthzJamqr21zzv18akxvZjDcsG",
  "key9": "3McZnjuCAjqihUAgWEa1c8S4RFE1ks3HN7s9QUNoGNy8kXCfNogM8UqAv22M6cVEetEgjbQ6S2vZZ6UxDhmiuLEH",
  "key10": "Am4QkNXpyVLtNA3cAehdaw8HMBhUCYGDVvoZQcjFKuGYd71noC6a5ekp5hYCVcu7DwWNSsc7CXfdAZLGQdrLjet",
  "key11": "215kzQuxGuV7gHXDmw7B1byaQVUpLGnsDiTJQqfFZ832kC2DaZgSVfTEuptg9cd9UTDWoo5ykUCesg9ogooQswyh",
  "key12": "42vQdwjbz3sJBZviZ8D6ZZ28x7KRhkD7y7qQFXqz5jy4yjGJEJMh4ccxDQ25Zye32bzxHLK6FcBuobNgCeveDFtq",
  "key13": "vS9RpwKVf2hnA68rywaTK35dJ287nhEKdWryhfh5ZqPpvBVycPFahCkXu75NXKihmrsu6LKgxgR5ApGAMyd2Utb",
  "key14": "2Ly1RxZ3kp4a7voPzQjLRDcCLwbwUH3Hry7q8nfviGomeXzz3xhU6b5uRpS8s3UmSmy7apk9ZsPm6jKLNggS8d5B",
  "key15": "38axbzUX8KzbPsv3XZ16v53CRQL4tTjeWTLbeAop6dD5UTxHiNAk8woDxAw9PPJBK1XA3hM96Ni8PyGqSbiRzdbi",
  "key16": "2bwpvWqhKrUqn76GBki8Qiv9s7H7oTSz6BF4pxBMvbVjkL4wodqmUgo8T2vx19uWwLCjQc139z3uaLDEUFF4To9S",
  "key17": "KLLPeuJZ9MiKfHXSixmLknnQ1RfjWaCoKqUUoDTukWLbeY8uZQPWJv5soJTseRXbexdVgjwwDbfB84sVVKk55xM",
  "key18": "3BhusfiqsRapFKSFd3F4UXUoKhp8PZQDdtdDMo2934nX1Z2a3S4xZzjmrqwdPxqsEyn7cGof3j59n1ar3SGYgHMW",
  "key19": "5c2QCub7aQRmXeSuYj7aqdbMgEiSkWwRkTWAPgeM2HTnyi5tTB97VBngVxVWZmGApnLkJWfS8sHnp4vh5nDsCXAE",
  "key20": "2cDFbZuEqjWfAqChW34XVXCVufnMzbey1NtUkN5ar7uK9Nqfqeop55yz8vjg3MuqthdSG168z2ho9eceHSjPFxTN",
  "key21": "Y3Aiv4cAgdVZuygwHmp32GQTLcqWEcUUJWGkwT9jLXbYJKCKeKT2rCa5ZM87Fit9igFGom6Jk9zAhmDQjCfDjU8",
  "key22": "4rP79yLYWSRKzYYV1mpKWkmYNrtk8GHWy65xXMZts3Wy4Mdbu6ZLC1mRrr6dZ98DjpTqgNjuoj6sVDrULJb39cuN",
  "key23": "2Ku4gby2rtMUVj5VRvZPqF2NoRaV3NznHCBPnb2KxC3jPEqoQgrqNmWXFZX8ZkLU7w4DRtiHa1QLFFNni1tc4b3x",
  "key24": "4VdD7gaKHsgxtr1LSh4XigygSpbLikgUZpNdpgV3chwm3jRtxvhgThJKg2g3nBue3hUgLwX4vbhwzDDSboN4hWER",
  "key25": "3YXPQveT5HVz29mK419prekwgDzTmzUNcBtCdUSGX1r3KXWVeZdG5BaYtzGKnHQNg1McJpPWS2eFnSoeh9NeEDKa",
  "key26": "3yd1guQUWSau3YfELZCrUt1uRVAGbrxv4jXwDevhqRkNPvw3MzXWdq5febZWf5S3Fi7QSbT91eUYmLABe8B5P9GZ",
  "key27": "5oHu56W8EMF9UTLEXtJRFbcVeKXShaGE5AG6QGino7pY4ZXaRjojqT9MtLZK3HK5me5VRo3GLLi6aggCz3o29gXC",
  "key28": "AF5QvYrsUETndCDuyhwsfgSLvWuUes5JHy7gDTQWAs4kDSGSizEKsJLLuVyFLyVWgZCjUMGjf13juoKrsZqs4uh"
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
