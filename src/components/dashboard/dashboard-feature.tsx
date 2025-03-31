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
    "2aAX4YFZdPp92AivW7pYHiirMqqKSfy1uf1DW1dLSTfQAG3gYpiadmtGxRTX27LXuF3R8FgQJK8VEjKU3EcPmr8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61SD3YcEXCMT8Dgh5NPz1iFbcsQ9PBbAGo9zMZMY2cjpSYvRQp1mZ1p7PhkCaoaYTdZHT54MvGErGDQFB4267xma",
  "key1": "64HeMPjrWpw5V54ooaoK9h5cKTKTn37iweVCGi4sx1h1E2et4Fn8GVyuUAiFrpd3J3BzDN6ifUbdabLQvwZSt84S",
  "key2": "QBQg1td6GYn4n64VCXTB7Ffrj1yD3LUgAh16dmx5Mmca9BD6iHdCLj679ofYcKA6kLjxmL2rFsar4ynE2bpYzzB",
  "key3": "2nHHeoWeZeUVYW7YESZ8PcRKDiVTRu2RFP4hcC9Rw14ANJGHeTFcfhqhpoGW7cjyq5L6shfDz5svyoksNxqgCPNp",
  "key4": "3cQt7zG6L7dRw6eT3j4mHeMQr48iyLFSqirqeF4KTfGD124DKcL1xiPVpBZNejQ23WWv5KUB5JQVCTyiM5doapDk",
  "key5": "475pWstrN3nBxVvQUZsVrgCFze5s1X9zrkpZBw2C3kii7HEXp71Thiqf9UFVTyQCbE5FSVavwuw3YXzuRie7ofhL",
  "key6": "qCfvCKsXRsftmYMZoeQpdq4Ge9QbnNG5GoxEiM69TvXW4QfS8KD6FfqsRnrfcBKBBshwG9JDn5ZfUbNdszn1dX6",
  "key7": "291L5x3xFBkjPcCTKzAcPj327VtJhWKxhthC7WaTqgTNMefPPpEpuESTfQyvWN3CtuqHapmHxGWorBkUvwPrMfW4",
  "key8": "2FCDDPFtrHJ24ppbBhp9ShMxsZ6BwNiG2h6WCPvCebsieExevuMYbiXz5E3s81cWX5ug2kzJp8XogA3jCdqAEuaP",
  "key9": "2F9D8xxf2ySZSncFThErfCPF2rbv493rcGjH4DyU1D7dqXGJL6ygyk89o3XPn894hPsMk6Hv2n7nY7doVAWCPFgJ",
  "key10": "3Fo4jFrJtAiM6f7zcwgfYRmuUE5zh9cWDHTixuVHGnLzwE5XTyGoZyRYGpY4xPpGKJYGoFSmz2fqMBbQWzKp4hn6",
  "key11": "3kZGSA5cYLJxGc8o8EgWZMhUupdm6rnGhtoLZeHfEbHGKojzKEnjcDVKEStMCYPenuj54vdCcYBJnLhmGEerfAUK",
  "key12": "y5sKC8AEgooGeQcNG3239bk4axWSvMMqLM1ZC6pTTu7YcZAG5TF2U7kHGpTbD8MAaMroKvcaJjZHBWsfEzPVGPN",
  "key13": "2nz4L4fcGetPNdQ3oQGLa8bGnX3XbiwkZfsXfDxk7DjeFvSVcRzLXe8zK281LDbAsw73a5E6hJ3Y7qP9dFfJj7PZ",
  "key14": "662UTEKtdH3ay7tyt5WXaUgehL3PwXt1i49esSwGyLbW3u6iPhr8YUznUnoe8yhU1YqDhhygmPera7ae5pQa9ouY",
  "key15": "4WpoXan14pyMdhuFXjxT3xxYDMtY9vwChjWx9CkkrUQLqdGqAQvGuMpeVph5qPX5pL85M7bCiEuGxLxGoqYLDQTz",
  "key16": "5LQsRXZQu528LNRWdGPLY6QkbVcE9fiQRjRnAkndqaQwHjqhEQc2uvbeFknYQkWRJqNeQ9FMx6BDgdNTyz7qNdWh",
  "key17": "5WZdxUCFkChugQ717RJFMkPu73Bs1Yjso9P38Z68jWiHiLTYYrqpLv4xviW3qsTycRtQ7yCEq3MiG5oHDYYQDcVK",
  "key18": "3K3cFtNywrNwRzF7hy7QK4Sdc2nycPVfWsUzM6rdw4psDtaGRj6fNyJ2hSAFnzQWepr3tToFQXbthBHEPboP6miJ",
  "key19": "5gU8opJTRpLxURbewnopTVdgcC6b1X9EXTbL2PYN1zW7rMGc2YzC6VJ6FgJav1eqzEi2JfCZGwY28ZASC3eqM26k",
  "key20": "5bW7xLHvr39UrDTJsQFc4gMGydcnHj9JhJUtcprsS6Ww7d8X3mMgsSYK3x8V8zkvYApZnqPTUsyPG3aTgXp9PzxN",
  "key21": "5ZTDteKE5nbL1znNd2ik3To5KUABSjibNJ1oqa41QG2PhKshVBqx7kFHYwZCmkyi3uuwJHTnpRRFGAEESq1cWQBi",
  "key22": "1jHR7MaK9TUENfaV12NwnSw861zxh5TNYoqN7rYUaVCnL8RNzUz7LsZuXXdz1iahqCG3XAd8FVfiGqSwmY4sQar",
  "key23": "EiyhXo1A4WUYuzVkJRLSHcARGqroGKHqsGzVNb3EkjwwcntKHpYpxnt9nLhYxfrm23jrqvgyoXpwtE9ri1pUJse",
  "key24": "eLDhDDTcNc9xb4D5J6vJFgC2bh3SX2rK2DHc9k13FYbjdBGvEF6CUvRu9jmooHb3R2FHGS3GEhgMydWMFr79Kjy",
  "key25": "5mw6PTLnqKdgumvwkp25kVEKN9rWy1DswkRWam2Bah2U8HzbmSYsks7xG2FLoDHgXpGqo7MNpUDw78eS7SenqP8R",
  "key26": "igPar1YMXpixRQrHgCgVHsqoRqV93BndhKWdkihiu56fuBk1nvGn1YiEfvN7mQykxeNjeFAjtDoG9uzbCmanzwQ",
  "key27": "3BwQey9XRR1EQfXmVBLy9P9LZsFYU5T5Vtjt4t5VbGjSbaRadsan5U47N7mA8TB4RXzh4j2po7TWnd7mfaEjBpvW",
  "key28": "2CX1vZ2fCg8PVQiLDUZ6Y7f9AAGCJpsATL6k1x3EBWaSZNuRpECtVWcmx5trtWJvTu9E7ZteoiAEpNXcDJ9y7M8r",
  "key29": "4ctiSB9D8jL7jFAGTkh4pSh4AW685YmwFU1YR3uVt77ueM2qpyQF5C5cq25C7JHj1C5Ufwpk6nLQJ2yHmA1Bz1sP",
  "key30": "9FN2iGUVfWvV1RbprnDQ3NqfAq4TNVuX1Psq2rpxduFEBKTVzDgZSgvVJjhu5LV2LjeMTeNC8AJEownZFZ4sfn9",
  "key31": "5rVcabVWemVtCP2pTuKQqM9KHbr345u7SUSBxzgyBEHW8BWVdKMChq1tM59Ut5BL5qLDvrTPYbpRsZwxzzm4vmyb",
  "key32": "4jRryK9QgxtXJ5JqHisTutvqoSyM2PWmtJqhPWzAHriR4yVRUs7FVbbhdScU51933ScrSwQVDyVAfrAxELmgEmSB"
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
