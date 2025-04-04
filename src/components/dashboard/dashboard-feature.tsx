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
    "2PYX4tEhBBKtongo1gK7LCAoZAJfYqJtyhE5xNhTLRgUtE1hqBXqjzFiHiYFXJuALyGbSa4HHVNcefTrUWYDNVib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bK3q43Lt336QrSm2YczKc3QHRJsnBk8D7mjDEmB1PepsBKArqC8ziWyFfWf9rwmG3kEzXY2gvn2vRMki3QgLvsW",
  "key1": "5Kot9Gcq76a3Z2G5Zz4wKPDqeHMViwvtgFKZLmErKyrT6SSEXLA6ytDv4SannDBxSMGRHFspUBM3V323S3fenDML",
  "key2": "5LT2WTEotrBDSkkRv8AoGzREHrbSpszEcHeAvgXtFAHoNYhySjadRNuPnLWusvLHzFTRkfqz4qVFd21DcEC9tGFo",
  "key3": "yPighE4raTqKnu3gfbmziKoE3QBDwWQ4WJ7k6RkPpuchqfPsyaxYej71iGVAPD8dkYXPGfQzg1i8PaYrbYEtRqs",
  "key4": "4aQogn4nM858te4kWDTDfEd6jwz9wbHzLLqMyKaDCE6PNnmCmzLUdot5jDiUgj7jE2dQxqQrHfYRBbZ4xui7c8UP",
  "key5": "3acPfHk7DyrfvPtzPM78skDURh3SqLyNEff96fZB9LbEwojAc1QHAABdhZrHoxrr3SmBi216M5QP2KsMvxAhD38F",
  "key6": "2QyrzNuCY7wVbELXhp23zR2UerEoSU4RePkVB9PYwmP7YBcHqRCuEVUFoogUNAQjdpYHn2qEoQrtqVUbAgwfvViB",
  "key7": "t9osazHKa4yJz7HuX4YuraptP5XMXtN6vbKWkJnXaCC17RQmVRTSGV68ZXDscMumieE5PGcuofRxcpmAqWvLURN",
  "key8": "35LkeW5ADWctg15s5nu5m4sM5HefQQmWXHGNe3q8tg7WbjsdNmMEqwmHqsorYDevVCBdfELy9umZ83qCqUrPgF1U",
  "key9": "4GGg4eqa3TeZjP8UjXasXX5fuVxvpZhWMN6eheTLqwCLqQELyKzZfUMuTPbEWyfpFku4xoSdNJk2kpsm3nLuvege",
  "key10": "5XojEFWaaMDYUQwxmL4Kg7gLFrHeD8TFMDB4FDW5HNZuKLn3qYZwc7Mk9uybSxDhqcHAZV8pYEHRy9sGeVHAWue",
  "key11": "2ttgp2g5QW6McV3TfqvLqqPesxrbx9ZWHAymF5EmnqPF3L1xPgtfWtMvzyX415Tp9ASdqmFstjSH57yGCx6qoWDH",
  "key12": "5X9dWVbEz7VuihPm5jU6mBnkrQHVCqQnyAfWSpTHqojyyjpRFde8pH51HWwJub5kn6cCyKhvqx6fZxneusb2St9q",
  "key13": "3bAbYV49ccgEHwg2THYqc2v5Q1A1qe5sozzF4YqRZBNQR3yJGhy24KrdPRN73GNL7mWxT9KyKjoNc7MdGS58SvxP",
  "key14": "4tth6HKWGAjUrEZL6wpi1fh2YT51EAn5U55LvN9vhwQiQJiZrcwVxXWCSgScNDsNuCfNXnaMjrTPa5w7xHRqq14A",
  "key15": "5Jeb66V1HVeNcgk6xNZMnT213YSSZfDVCqqKLXKCiGwCFF7qwAN7n8UWrqyVNLBHnRFWipenQrQv8Sc18AzNF6e6",
  "key16": "4Tdri83mRKs4hMjTu9x4RvFjHG2zH7nPpS46vf7esGdMqaYA5GvDDH9gAe57NPnrVniAWJsGUmwZRrpm71RjRabn",
  "key17": "3Sn6LzDsEUm1RLGztWuoktd6PRxZATUntqm6daXbCKkHUkPqL71EjKUK7K3DC64Snfc9CQLJPN6aaRtUG1hCcV87",
  "key18": "3A8BjfEk4Nmsi4wdGfbQ1r3ie4Zc5WeChbf6HgsUYn5A7NTkS9fvqD9SScRrkGAgMQa7i8sXhLc2DzMLgvbUFMn8",
  "key19": "5om22YZ8eNoVLhgWsTmv2DveRV7ApcgQV8QFijiQxi4RJGT8YKpq2d2y9z6FuEKxRBtAieDWq61cR2kU1FQnkR9N",
  "key20": "hPS2R2bimk6kqQPS6pssJ6KzN2AGM9EGojmYbxKzrANPjSYFrQeyeawTq5NNbcDSUEc9UP7fUkJfgxLkWF6zUBr",
  "key21": "35bmBRj5St96A3K4LF7j13q2PTQD8uYncvzPmSg5b3HZuB3jrD1xU4TtdsVbphPJVwUAKo4743epc3k4Wohrd6PZ",
  "key22": "RYAk5cSDUak5Ag2isxnRrn8GkFy2kzdsNpUEtEivirWvMa27AkR8EczmKq8RhH3xEpqNEBUPbgXVMz5A5XAdsx7",
  "key23": "4Yz5kykEJCfiVXWscwvRn81DZDHXVijwsVqq9rjUMWAL7WfeUdRzrDa99DGxdawvtMt8Qd1FK4X4tsz1cPg64wxY",
  "key24": "2uazyjmoEQcimjNQxW6pFRk7bqkcpUsmX3AzJ36eoWXuVWQhJUStTt8qJvd9toB7PNX616LVcmNTNpEu7r7iLTsC",
  "key25": "2aMnF1uFfLaZ3ATSXE1njuBidMtWKQ1GqBR6wVECmiJbJmigEZGHesNPbkRKueGytvhbU1sJ4WY64fLTQo6Mp6s8",
  "key26": "Ppc5jJQKL4egwWUicg6ZEnQCCSeAAMTGZAMVRgw5eodakKppPbfMr1snJ59nTw6yYeDqF6YAyyowzBfWQAqACrs",
  "key27": "2rmJ2zbFMzFaVmD2bPQBc3PBaWGf7TNnff7p87iGK15WF7LEBCbieNaMcukjhyB2RbkNYF7a2W8gUr1pqUiJ36hr",
  "key28": "4b7cmg1dTzE1mFs9knoW1x14GRHNTP5KEH5w1X1iNMqG7LQDA5yWpxSRiANY9Dr9P3RFLonCf62W3aJBcBe8P3rT",
  "key29": "4mzA64LHf9P6oSXoCKAB6c8h2GCJSBr8aX1MkGa2gvXjeWTNqkoiVZZyzTqbKSnF7aaqCXcTC7HJmXJzjoMf7Wr2",
  "key30": "5oBuWnqQRVvy7bAsSkSSV3vvAhVF1WvTefYhW1rYBAGzepjwLAgTrput6QVTh3UKkBgu6trUfQNEgXrj3UfWh1fd",
  "key31": "39nmZ9ErWojCQY1Mis859Mhvsob1v1hKgzfFRmM5RbN5Q2EiQQMgnt9WjwZvi6oMK3n1rw1jWR9w4ovS6BkUoY8D",
  "key32": "t6NFEbNCbfErqwUR1dCsRS8NFpKXcrUU4dJhXzUSaY8FNb1GHAenvTLKWFju9X3xyWoY8ViNdqhfNRGWMs6etk6",
  "key33": "T3EJZdF2J4efTTKuMmh5UHEN58ecfd8PWHz25ksHqN3eDpmtKpZzpiCuCKvdgabXC6fttxU6Xj44xGy4CagsHYJ",
  "key34": "4n77yY3WnSBNLWpPAZP3ur378mmj8PkLdEBZ9TGLiFyiVWghjbfaussdXtSv96KYHrkYETHiX459Sy3GTjESctzs",
  "key35": "2JUTKCYzFHu5TegKX5QwYcBez52xZnpWbXazUUrGm6N6J9bU4CVZAoch57FMQ3N374CNRYuzeACxz8KQrn9FBchM",
  "key36": "66seX5h89reDKBRATktjm9B7kwDui22tZtapgiZFamKeMPm5trjyG2cW9f9CbQzqEDrJfKkGjYk27hq7J8AE4nJs",
  "key37": "5wfTNVQQTgMtjV8QGvq72DuJDrVNeiuSp6GYWyScryAYjEr57z94Dj9MWGnmrxeJvdNN5ajAY9tMVvXJmR7EPp69"
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
