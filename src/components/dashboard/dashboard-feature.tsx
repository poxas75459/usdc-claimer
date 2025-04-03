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
    "3Hu8bcgXNYVBYaUbJFqT25J3TwFSFKdhvWBTvLQE1b5AcZPef7QES2xxZeM1uD2uiYVRUWvGS4b8zk2PBkzizMEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kdk7b7rMz45XeWQwJFppysW61aE9KE5SitDgYpiEUqrnji1EQXSjPVCSSKeb45XHyMDQmJAXQ8cWfnFU3V73Vv7",
  "key1": "2RoGM82GGnyBENVPpUAoY1HmyKJdB9mx16uXwCBGB1keynAXbejkJEr2tEn8uYUMagTYbzpGANC3mJUwSeZAfTiz",
  "key2": "64DzSS9MzKvFiWeesWFJ51PHBwR2tGAi7fwYRNGDz97Kc3HVgS5hMDNAUJixRpVxpkPRoYmxVNpqDr9qCThSft1J",
  "key3": "4R7LfJYq5aqUkxu9V6kT6i6GSRaowXRBnMLFM1yaNTdtpfDF3k6pJxrKeH4GZiJZw9ormaQpXESVZZ56FKbrNTpG",
  "key4": "5CvTzmNxCSoemVwWcvciQVFVAKoLNVe1fkCZTYtFuWZeEzG98Ex3fmCZGXt8AruRcZHz9q8p8qjfWsKnX1oT5MdZ",
  "key5": "59myv8otovpFCjCBv8CcvRS4E3D4demR6rqHQXqvGZWs9pNFFYAPVeZGjae5uLtP2EKUArekfSURLa8aRgrZiGUm",
  "key6": "3mDjNRH5hVAPixdzEVNMJG7xAqCdSZvqN12twcbBy7DDM3ZGrBsJPevbrbkZ3Po91EbpkzDusoDygoSkQYXgEBGB",
  "key7": "3ZmzX1xVLEMkh57ZHbgMYVQWsMmQxrNq9rPcqGxxZZVzUyBug9bvhvQtAojZTBrKdcgyiEUdPEr9yfjVf4nZ48nh",
  "key8": "4YBHKntTpFYmLaxxDijF7s4inPF4yKLR7YcHHw1YL7udrvzkseYrA2xNSTwFZB9wcHUKCn2X7FcPaUJtJJRNY3K",
  "key9": "X2PRYCbKgrd41voNrFfdcXCb5z9hKeH3ixnKbfP3TtRuUyhR1FVzUFSfenCypa7ZXdztN8hdDkBLHVorHJ9ueZ8",
  "key10": "2F2eDqzsrNh2UCT9evrYugtEC7Zx59t7j1XhbSQCScqxy76k7yPpTVz5oX6d9EYrFD38iDsJj3yasRQbu6nkPMwC",
  "key11": "4yMQg4qtvxVPw6xnJNAj945pcMfWkMaa2ndQ4qvc7TTGWnbi123U5bUqPZXUF7dC5B5EtzQ7tSTUj73ANAz7FDXk",
  "key12": "4kap17LffgM12Ko75awuFDVdvNwZw6GnyzA3Xpos5E1KqxguD52TFok3BXDd9UZyNSEMQH64kpjpiDAFqcThtVgj",
  "key13": "3PRgbyvM3DZW3mneE1mYe8GYxFWxCs5sGQxHN7tWZcmqJEBqNtKJNCD8632UGAsoATw7uZQDpehohEHNydMiR6Bo",
  "key14": "5MiopWUHudaAEkHiHcnGhBKe64c5Wc4vTvgxjCD8dYxrqdHn7NJbBR6ujRBnoGw9yxyL6Jsg9czuSYBGpQTzEoP6",
  "key15": "XTsJfxEdozpuXg9tbDHV6M512EES8Bnb9kTE1BRWJWgcbnAjgYivZWHGq24mXd7VR2YcPrqhgv58oWtJetS7KXq",
  "key16": "67a286w4a4KwDa7AnKiyu6F98Ygzywa24AKRXXhDdrUo9AADFCG94s4MAgud3rj3vBu3D6n4vRDtnBBBES7tFL2o",
  "key17": "4WkUGQnkbLUnZheX7tw6igMwH4GRFvsrKFugPdudMDUkhr7ckogjjitFqms3fCytqs9FsNScpkztr4QjRS29sQtc",
  "key18": "3epvPCNHTnPyhd1UuAhuJCSKPgKPdEkPKEg8t7CFqmYcZvvRUaCSvYkGqnnhK8iCmwigWBm8kKeG4dwWjdxcDvkQ",
  "key19": "5nNJYipK1ujRnfiDVG4smdz6DKQvacEgGrVntC7se2es8nEjgmnLMfV7WcZGsdCQJha7FqcuTvGTXXVTjFDS1eMw",
  "key20": "3EshhLNZaHNCEnvpEYYx7H4hLv9YCar8V6h5SE1RNhMQ6K4DayCNye8UFAdUEpv2UvrZcFpBxCt49D845jY7Gvau",
  "key21": "4fWybrZSvnYLGpqh46FiMS5dCrTZ5ddvHhHs4qcYJreo9BagurHYZTsK8hN95Dyty126C297LmF1zg5tFVxK4Bpe",
  "key22": "4rEFpDQsry42cMDaxnLMWksqWQqfZQ1kNJfyyeDpdb9Tng79A1d5Rz46FCoPRcbV3wYs9KuZgNj1bQ81qPFpzvrS",
  "key23": "21KahHu2wZkLVQHQnRVetVAstdzkjwFnajXeDdWGHTnbyseAyY3LBhP5NLaX15FMHAsGpiyKmwt4qxiKvxMWiBq5",
  "key24": "3M4u2TiVCY4dMzbzYbkiJLpgdtQrAZA5uYUXhv2Fswu4ySAVpjPQ7kJNLjE2tRjPPvXjJtXBzfAQ7cSszTFChJNk",
  "key25": "2U6f78LJHQRRLbQ6huRpHfgW44p4gJJ1YbHkSU4mfTCPXEDYJX3xVjKs7HK5UMHS6yLDjzhBkCj9PBDZRa3Pn4SB",
  "key26": "t4wCrDEJBi7gkdC7t23k1rpUnvGKdu7GrdYrKbUJ8fHysNpR5bcmboTrGEiDaqV4Qw1ZgybJ8VCJkUhBcLycZEb",
  "key27": "2zXnnY1v8ozVB5yBJndmVmCJLKvJr1TzfANqMxvvY1uvbWC5cdztKAufGZyiM7rMdPpYUoaTbumhYAB9wtwXFLny",
  "key28": "ytrUYka1PEHMXjcf7AhaHmFhHzM1JP9uZS6RHz4uXpjGq9tJ2fQNHRnytH3WcXQ9iVJ1JawZbQR1ejDPXbSgdmN",
  "key29": "ndy7zuj5pkd7oP5c2Dwvrg6QB74ri2MkLbnofPcz8bq86d2asvfGMAinNdrmxwRm6XYWJdmQh5stDEAEw6wXFhs",
  "key30": "17V8tqWGo7PxQ9QFJAqhmCbVa85nYvCb75N8a5rt5BRFf834VMh1xkRGVqASwZZ6WZWnykQgm1VCteZ7fnN5rsy",
  "key31": "FLxcW4w9w9MbeVkRFyUb23f3r3dEy89mPsQHqQTJ2wY9dGPome2zs8Zs82F9SiUbzW8EkwauX3pdVoyXufoSyRf",
  "key32": "8Gfrh7isC4MDDjYcuMHuJviHo9KVYSJu5S2wx2ofVQbMXcUSkkgvfjSNArPqxpKviC1U9Y2CQkiAsXmiVota5ie",
  "key33": "P3sKD6vvK5gR2Zsfhvn5RtznzZj5A6u4n5QoFMDiC58FTzPjfzF73wHh8uZgAJAyfRZNAxNfKpQkiFxYjzWKwSi",
  "key34": "AteZcUNJo6iytxbR17PTHSA3FAbXUgqaQx68jKDvhLeF6MiisGubsZjNstLaT2XJvPSFKgX5f3vDvwbTWMKTm9z",
  "key35": "5eVFDHxsGor5DmEuDYzf7Mddi1gMD5CssbpKfSWVKgDXsAGmUag6KeLbNBgfGrEaPQ852KKrMJWyBPp2uhe6a6Mc",
  "key36": "3sgizdd4SuqQe47tNKyH7sk3sQX9CBo6uRwxxVsvW8hNdxZjq8hEemZiTi2APZk1AJmCRNPPbPL9jyTNpas5uhHV",
  "key37": "3iwLpq5hCtLXoXi5AUTZnRDvF8TZiKKRbK2bHohKq9e9fGJXmwHww55ZDCFMqhttTECxa3NvveqdfiinpGTxAVNa",
  "key38": "3Rsqw6vAxM6jvhH9MKKt8V4NG4F3t2nFshv7kd2sgsbqhsWRsG5u945dMXR8JdGP1g7piLsJRPiKUNCsH51xdjK8",
  "key39": "2BSw6oEZaibmiD2CzQpDfbWN11c6jkgtKiJdGuz4hDfiywo1GSbXBX4Uf8auUAWeQhnbL3NCmk5mtYZCV2cJZ4yT"
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
