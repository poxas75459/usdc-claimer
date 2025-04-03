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
    "w135U4zKohkZLchLH69x26X3ZAdKzLfEM4xwVkPBW7YLYFezs12cpKjFGiRaaGq7tsc5ZF9arLnXFZqsfPL557B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b9j7Zooo1DFmWeUPXR3rEQrJ3QX1aN9frKKstmzXcz19ot2ftSEjrtUAePNmt488jiktwdZUuf7VKVTE99W2rTr",
  "key1": "3wP8Uham14LDnPg7UYEjc9ditArzWVdfatz7eysZSHxpRXu4TpN6iKLtDWQxqkWhUhGrgprE4avEGQanc1Ph5R12",
  "key2": "4Zaq3jRchjeiUbwt2kEabxPriH7B1MiYuoTe2TQiFdzDYP6Tv6DqTHDs5HZuryRBTbuDHYtJiiXX8SokVscxBSiq",
  "key3": "5NNzDnjUqJWaoHVSgfsBtFeuwF6iJXQZYvQz4F4vjzaYMn5zENCvJyFFW8asS2sFkSotZD9wcThfN8jDnXpu2er2",
  "key4": "5RMp42oPdKovbPH4Y7U3BuzcJe9gPdMCtmgUJMjkFThroP672kFQkfdj5nBmnpRaHP82dEKStPzK78AQjkYKMqMn",
  "key5": "3W3rXHYM6m5wzAFeFv17qz1mbGYFL7wsThGh5KdST4gXpPV9DjVknhCLNRgQpox5xfUyXDtsniLaA3huEfcLQRr6",
  "key6": "4SYNeYgGVFZYQcx7nUGKZLnfEJRdrXZdEDvEdQFoJtRXy7iUjaykHhKestS6VgA7a5Fz728dGS2hrwCsD2sBvF5V",
  "key7": "mqN6PQnUHaVi7TTw4ha6XrxPXXTwV1n42JJTQZnpBaQVrov7VV8raQNgf33HdYHws6XUpjr8G3Dc9J5xBhfNp5A",
  "key8": "5fxaTeEzPmX7XdNJYvijUZaSzkJRRSB3c2KeQCsUNM1g9ZxWwjQhEEzGheDDj2MNHHUrCUdMC7L83NLTadUYihaW",
  "key9": "66RFGe8eHvipKFJjLHYnkK69q6eTNXzWdSMPBuL2JxDoZQXmj1LEo4CDdqY2VSXmJQYV8uYXVXotPSXALKCYTdRS",
  "key10": "2giuMQidHGQ5ZVHtxeFdTMnw7KjKuXVRQV9Bkpb6qNVDqdWDYwgZNN2qewi3AchCaUA4g7Ru2k1KFVXrypX2oqnA",
  "key11": "4DnjHF2oXcig6Gtrvq8iQJZw5odRNdYhT9XrRPkdqbbjoKdRp6StGjcfMPuL5eMFNemmxuEzhn6t2t5ohEMXHuct",
  "key12": "42c2f9PQDPZXqtvMmKqE3SBeqr7erGtLgZvv4hi7RWA3ANbKQhGbRsnBdbS35kjHF8xZ6MWCZmtq3ktA12etQDsb",
  "key13": "3nBxyLUL7vfygoBqVUxRym23n1YHhfyGjAfTNz9NZsp9gJfAQ2Rzc1Ffz15YbqSPabmZeNbeb26du8vjmospx4q",
  "key14": "24QCVdFHyUz5RMTVp3Q7UZXDUkaUEr8ZJCj8wntjJLBpCS8jiEkNXZUPGcz4ygQXstKDRKFfgsPWUa7B15RWp6x5",
  "key15": "5rqd38xee7G1AEexfHyEDdJaF1tSrMyB18E4xU9Xgf9H7LRk5bGSnUtSVmMDupP7KW5niWpcZc9mgFrRKqiiCxKv",
  "key16": "5GqyZ5ddVsmwvu1tjHCsZYFqXuqGmwxgxxq5nPyzHydVhLmvtZJXCiRw8mUNhofytbU6RidvTjuihd1y6QtyKMFg",
  "key17": "2LGkw9XwuidXXrnDBcbPibxVDQVFnTY5DJz4ubGpDMsUAnswqXedxZQZSdHpgUAhbwCu9zYZ5nQGcCUqTjHfvZca",
  "key18": "26Wc6ms8DKJpnUsCcCLcfk4NoKCn99u9K2eiEoS13yevz43EFegbkCkmAgqsbxqUBTo3AgxGfcJDQgAGFL8Rvhg5",
  "key19": "gbScu8LVPvN8sPz61kXs56jGUWKFDBc9jrQN7NfkXR6LxEAgEf55hnvFQ6NENjwF2R1nUBEURnE8FUcrgHYF4xU",
  "key20": "aHHfZSQPaLk41vhcHxbetvj9rw94wE5Lxdj5kuiU6EcL7y5yqXhN7CDXVy7GPu3ZmPr5kZkF454WFGePJ8o2CKt",
  "key21": "5yTdsrsvq4PVRVdtSyBmsQ6b9Gw37nMyBdbUNX5ayPCbkqxrgB1WsbUjWNtcZWtWg9Cm4P9KHKEWJvs21ikM3poW",
  "key22": "MiND6zjhpRZz1FVhhYWMbTBdWfRhgQdA4nQBpaVPq2uQhBtRtqD3X2y68hhVZSVL35KwxmaAwuFFnhz5dcsfWqY",
  "key23": "4CjajyWQnt1v612vZdTrNzTL5MC12RJRcpn7RsrTi4jYpMefr7U1TN3D29Zf6NALc5GxUcR72YMmFMp1abuM2iZV",
  "key24": "5tdumQ4csNMKCP3qY4PUMn7GmWJLHeB2LARzF27SeRPpJZPbWJbubFNMYEBgtfu7Ns7ZwZoTVzNZzPva4ysnYQXK",
  "key25": "2yYRo5EKbz5Aa8YKovtS6fMQcRCwpxp8iyn7qHyYiFDVtpAEFCMvmebHZFtHXPzutYLj1rnc6ED86LGFmy7envCB",
  "key26": "2ybjKUc6UoiR1w5S3veGraeL2nUsfKxL1RjWrAkrJ5QmJQ3fv8xSWmdvL72Uq9vAu8HcVyNYvc7zQygGnbnKNBR8",
  "key27": "3U7LobNxJRcQJkMvZbezRvCKwK61Y4wnVBfddNpcCnVbb1UBRMu3ptYv1DFxiWzWxT7b7wEWQDD3fNHTZmY2xdav",
  "key28": "54kznLP4r2bJLDG29z4wjnngK5MJfEmxJjuzLppKDF2Vtt3y7Rqu7EaVrdeE9jtRE9vpzXXh49rx9eKbvFftokVF",
  "key29": "C3T8neE94arzcQHH7i1hLvFCLavC2KGHTHHrB5innztozkXD9c2KjQ4LKaKDoHNmcoDwC9LZWWxkgsmhwkJ6SSm",
  "key30": "HGs4mXLgU99ynaF48VZrBfJXJ7bLHpSnsvUrqCQQMYxeDUtteBH7gdKXbj24hyToaHF73JJJ32usPVJzcNue1jj",
  "key31": "5Nupwb3ivuPG7xV4hKDYFYXu3FdybUitqqreEDAyrCcH7WeckRYZLqsP7XDZSUpw4o98eyXPtg1aMnhh8o7xznB2",
  "key32": "2DR23J5J5tS2eCrBcLJuU3Ebj4Y1LLkPpz9iubLFxfwd1RFats9GdDTn549zXU8vqu1GSHRw811TUi6UnwEywjq6",
  "key33": "4fuJvS8TACaMUqKcu8cWm9TchcNLfvbQWbSjYExwzSTSb3tbWJHXyr16PXvC5S1LhXty2rn2CdZofzzpqh5mnnUr",
  "key34": "4RJJWqg2LmmQWS7UAsyDBfY5UCZEdj1CX1qB6L87eu6Zcce4vxtqswRH5LcUFtXdnQsvrPpgrtb4JhszhF7pyxWR",
  "key35": "2Gfzadczk2tRurCBs1vFbgDZs5n21iZL9QYpRUiCBC8XqnZqBmHzozFTzCnrrwevuFhsfKJxyYc1QJNZPbmby5hN",
  "key36": "3L9FAZ7a3kNF32crRNBRJ1DEhbZpy5bqnUW58vZxKbp6k5AStRQ9jDreuR28wz7Mgyq4pY6xVNws8ZDd9oXLPyUR",
  "key37": "5ZFLwQAYiouwCo2un96ziivcQBpQHbjvXjZmvHaG7X51nE2gdSAq9qVmdqmZwQLg2zQGataEKce9UWnjm56TA2hd",
  "key38": "66gqNnnH8SszkNHCj8ohbSwjwyXhzg6BZfr4aM7tGXK9ts2LriY48iLrJjkEvBKe2HCioT4aSWjcX4FYvoyjjpgE",
  "key39": "2PwmhMwfxY4xTNBeGpwXgpxgq3VhBE4Ahs1EcrX5CrE5LWVM8vVRTLrwrpejD4kLbvyXt7z4HeELQ1uBHttAKsMm"
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
