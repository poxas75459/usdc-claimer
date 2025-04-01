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
    "GHc4GztnxMuMKkkSEoDq7GihBNNz8avuCAe6hWPhRB7EHZjRy9B4bagWc36WQ4VBcJTqw9gukABHomQfKZtXv56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51AkB1A6HNyRxujJiJnRBq5AX3nVAz7jSwW15PYQF1Em6eW82L5ZsNoVuYKnFcJKaqFkxm2z4mSbnT7vejwp6vft",
  "key1": "2kK2P7bNskZqiSHdySLkY1obgQKDZ1yDNgrbVxAEjc8nWGYuMT7dBN4S5DE3bL28pBrNcKjqgUm5EWiZH1wC8dNA",
  "key2": "32XHEgC5DBXwDrppvk3q6KgBFbjH2XcWMrLaC6MqLYSrPdGwbKJdusp7wtfiN7d68DQ29D2XXo4J1c8MWzQ7mMRh",
  "key3": "4JQvnw5Hy5z92ukbvBv2g9xrKkBrxJdKnt49CJnsk1KQ86LfKLGw2oKDQVRhxgXw9dZAfHTAxX23muY7Z3Swq31z",
  "key4": "4zdn81EirgDdNnbWBXv9hW3dFrhpKo5fYMzXQWUTm1ZK4iNuh6uVsKU7sE3vmRMnBD2QycX9oXNN4k8jen8aF2cy",
  "key5": "2SkChg8vpXzPgv7puxN3PJW2aWmqaWhpTE4bjRD5nZ1QroDoivdJeEZinZrdR9zS8fsSobLYF17FpDdre9krYHP",
  "key6": "62p5xVzH3hGWR1QYXyrhyXKu4tnjzGha2kA98H9GBnCyDYWioLFNoBWiYVHmgPNGFi2BEwNv8gkz2AdaCoaW8b3g",
  "key7": "2QjkTzfbSEsPJuPiMAAzr8BmTG1CvVEAZXbU8ALpAYufxG13aMH9B3YTvXsU8KfAXYqsaMwDjFnPmYcRxJ2MEKBv",
  "key8": "4MhU3rnrGZYjaPkSptjhWgWBU1M3btycyNdHpKMPQt53ZaJo5tHhW8hBNrfTKwyqf1hq71rRYxCQsnjd4Nerqxru",
  "key9": "4oKUTtqrtpYzGFwcVf9tfcvanJHezdyFynzfrcWN5w4Mft6bhzYMojCL7PPCacb5m7pqKJxYc9YZhPtgxSRnTLUT",
  "key10": "3tjPtNBaDxTcyzvt7STcJBGUwK9Li7u4MmXZRPhFW2RmMK9oEUToRLoL1Yt5Fij4w5ooTJrVbw8esdS7v8itj9Up",
  "key11": "4MuixM8pxmksxY6DGVUL34ighApF5cNAC2pQUfkfgrewTNEosgQCjJERzEPZuCuiCDuoLni8yZWCJPouRrDT1iLu",
  "key12": "5TMxNqfp3GAzYHMWshp8nB2zoCtmTzowTUEWCBfptEHzMe41sFTqy4HmyJvoWb2eRUFzTMmfU9HsNfRmb8eJubw2",
  "key13": "5miXdQ9r1rTZLcm9tDvtoRss9MKrpPn1p4wTuCQ2KJkQ7t6gdbPf5JvX5tsEuL5uhwtGTvz7FLLH44xzMiTXd79j",
  "key14": "3JRB6zKJhBomvn7KhfY6AUQnMc7G9RcHXNYXSeyR2WHorzHN2mfiGKszbFkNSgHANYjAhNJVva9Eh3PWnEuNA2Xh",
  "key15": "5UDQBHKZmAGPyhFBTCY6J2fgrgvqRTNXmpQxx2iPoHaoudTsqHLtJWJ7ni5eZHoJeu6j3LAGpeeoMVvKyu7ort3g",
  "key16": "2v7evWqTfBGURUarP1i7xy5uCy9NGwF3Ux4Sp4JLuHz6AymBKBqASZ5VSDSC38mbZFHMbdfYH7HJK19tMfR1MxRW",
  "key17": "GvdLRhNVXidJwGDATtm8M56cwAfRMpHyURJ8og9JfQzUhiRKc5CLb5Zx9isfjx2hJfgVTcFFQ2A8nbYTRVXrLbQ",
  "key18": "643yo14XsaMwLXqtMFwiwr9BGei2hAQ7qwMkFHxgaZuuyAKNHqztmeodg45wPFGKMBoJHBb24atiWpSfceAPrS18",
  "key19": "5kzN4VWpTXm61Nw8DFWXoAgDiJGbZTrKBxjTztXGTBAdWh5Y5ZAfWJ1xDcTRWvYtrnkZh6cM46uTMEiXdTEhntpx",
  "key20": "3bqUzJft3b8gYsuh2DHzFVFxvh8Sz3Jkb3W2zv8KT6AUj8XrG3VVAPnny7cvFsMXsMnBnE7DYBNBnc4fibLqti8m",
  "key21": "2ybcJrNpcPG5nGdgMtYAzj889AbbqvjUYuatJZokMaBKyHSAbyxVkaoPASSQugq44YQtH25VScRqtqnexZufE4c7",
  "key22": "Efg5PZEpvddqUpqdSQBMnNNTLf4SfUk1GLkAc5w3MqSCqpizbzh55SfZnfgxoQj5LpF3bUUBdBRyDDWGTR7Vbhf",
  "key23": "4toRx4MhGp8gbjFWuMqmyeqmNZdbmmqRarPJMqnCgLABUK3NhXjbRZVwewEqi31i6i5JqcxN58PfdvG5XvEk5ngQ",
  "key24": "48TF4gGNYHMbhwUFiwQoB68AVGysXWNrcwxctVNn5xiYumzjGFhCJjPmYRxrMyNNAcRRY2FfQjCbJZEv6fkSNtTk",
  "key25": "KzPudppmhBJqF9e6S1ss492CCmowPf8t7MikXNA4RyWfiAn6ySJHPFjYaJQpWhJHtK9PJmayHCsUtkb7BDfPSqt",
  "key26": "4iL3RgvUUVbHK1RzpZYZR7oV6chvDD9gPREdk6ryuPQTShrvW7Pb3XhBfKRC2S5eE9qVn9dsVda19EESzUbegWFT",
  "key27": "4fjybpp2gTiYcetw3A476vBtc34SMDiK3waEiH2QL4nGfTndDpqRhSsgUzmt8c3P933JXSYmCYxSdVc12dVpippK",
  "key28": "4T2eJuTmGTe7Uipc5krrqgv4sYaWVf8cRhYQBQMvoxvvDxNncpgicCV7BskfNwaLZje3YdvSPm6vHHZYCs2qyYCK",
  "key29": "2VM9ntaUjT6nn4xwBVFahRx4Qb9msM7vhUvXE2QWzer3Z6oAqyCBM4LQxvhXjWCQfWXeqn5mD6izD7tqCWD4DqJw",
  "key30": "5fuA5iBfiKALAL8HFie5tCZUf7RvJeTMjqjuM8oTaaUQW5omp9DmtJbajMcuoNYyBuzqrWcBFryVGUkMhMgGjMDd",
  "key31": "DTsoTBBqRX9hQb4iAnkVpQasyPfGqXPhPvDPtJG5U7vUrmKArkyVWmjpAEWNoUAuxusA7pRnG7ia1H2vDFMKyqJ",
  "key32": "9yqxMnx7ZgxAfHWjbBrKSwmNw9eLaepnq3VHATNoZcQQwV9yKi8KGdu8BQ37NXdCtWKJfDZhb8wmTRN4CnSD8ef",
  "key33": "3uwCNqaALuFMAzYaY59EwcsNJk5ivAmTbaBeBWbJQdfNaM25nTuBg9SrKQzn9p5PzBndn17i1EuB8P1RRVwc1oUs",
  "key34": "45n883A5KzkTPMgMZn2E2NreYxAYAbPMJgSXmD8N6cNNZXwA5TWYn5H6Tczg4cswia8WeZWVc7w2T7QxsxjBRsee",
  "key35": "tXPrEq8FDxzy5QweFaXQqYkgzWd6emwW45on6YZ44BazU5Qbq5rGhmXuryCHFiXERdzojS3fRQe1hjFtLdd7Mho",
  "key36": "31hkDJ9Z3BspdR2ndqV94LNvv5ityCeLWTgD7pbKYBp7PJsu5spCGeKPzj7oAginjVrV1smqvxReg5HZd7n86fG9",
  "key37": "4PNYanzKZ3Ka9XwgHmrajmU6yjiHQYn6uBTLrKQ8oLWtpe3epzN7W2oUt8LkRRL3wqUzANnV3hYcqP9a9rLgN61E",
  "key38": "4W3s5d3Z3925721g19WemjEZSkxwJy6Cu4uwWYxqS42t7zJNSs7MexyRtpYBcwsbskBpqMkG3VwjczRYhwKcfLjd",
  "key39": "2vFSnKhoJzimSVf7r1DGoSjthpCQ9wJU3dnfoy2ojJ5inHop2HuHBLdMxpc6x2PpTMwgdCnSEwiq3RNEx1nLn8Vu",
  "key40": "3eh86c5A1bTnAesh6y2uX2zFMA2yHFFZm8ctDFiJ9LuaQY8kR1kCB48W3qCTmsGGg83FDS7ZAeE7cP6kMkvxXae4"
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
