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
    "4rkF1k8h8jeRrE7J3s4TTDiTcp6iWm8UBGbd3jEXf8tXsqkqEW6ZD17MzdBuUiQbQFexXV7bJXt6fhssHsqGVpzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58gEpeBuiizjC5dbUBzKDD6rkHnvmc5CzT8C2GkVYukU4BqthsLpkZSybTjwbqTNnw935FmyMtpfFmW1DSjSS1Vz",
  "key1": "2YiLAikBxVwKTZWcy2VL4vNy8TWxqxkSUZ7XhHyiGADfs4aAaLCj5euL9Ge5E9vF77XbgHevywa5XsWhTMrqTMu9",
  "key2": "2ND1NWaFw8ku2ytVVBCmZwjoizeb37bBhL9RGHWRt8g1UGepZvcpLAGCjtsV2GCTwrDd22gUqGggpbB5JQpDEKjX",
  "key3": "2dfxHmUsZNTTHGTSzzGyXwRZopDTRn9TjaLmyEL3Ms8F5sGEDK29Uz5LbVJa7FTPYbXrA3jHdbyEcA42TkJrsiZg",
  "key4": "qVXuf9LrURhA2k54gGo4ucDnxeoegoiP4EruapGVRfu5Rmh9XXsBvWHYQCZKicuQ6LAKsPrHF4QKArin9oL6P25",
  "key5": "5uzzStduhuYVauhqamyjo3uYRnkRixnkXcpcXGBtvtzSLwwhJPw78kxpKKy72yWk8SMsv33buZJptf5mZFNyAYR3",
  "key6": "4WthJMNNVb8PRVSDp1vGv2yCJ99UsJVVvadNCvKp6CUxshpCdyGBLTKZBL1LLpZCU4XvoKWJd7JbCbC3BTZstbdU",
  "key7": "4cwQ7sMJKiN8HqTkBD4W8C7DGJrQ1n13YWd7SVQJnGkdQ31aMosssxAnwFv6FKFGTG6Mndp7qxGABSQGgEP93aZM",
  "key8": "VxoGfoF3vozJvSYk5RksSJta3ZYQh5cmRfQiaCuA8m7n5PVwQo84WNTRGSQ5JqqQjAsxfmv9g7VR5zbB6peY7n5",
  "key9": "41W1EbenYMpT7GDnDnLm3enBQtYmevXgGNuY9uTKbtuNrEN4oiThc5N6HuiMgJzZtsYmqgjZNSSyzxdL5oN8zXf7",
  "key10": "3uv9ccP6zBrZhcKrHAM43S581R7pEZKb4J4ohUdM5gZSU3VsYtNVYd3Hz5yE7JoNmFjbJ24wCCXTXQrsMSV1Cdce",
  "key11": "4ayCCmARsEuwbsRYTQbuQfrnx3VPu2agei87nz2W1uznbcDt1Bj1V8qTMDbZDDxMbkAMVXrDoE1xGj9uCx2pvZyi",
  "key12": "vNXNczSywPufFMVaKnynaba6ZevMop7ktF7HfS8SJqNwBmEmRNwyaHpMkwZ8dC7rnikG6PaAzsmeJmPBAqUKeBq",
  "key13": "3sWExFtsFsSs7CcvGUxkX9C4KTGsJ9ToqqdmYYuMJSBupycfduvRWJTek6NSczq9hmhycdwV3w6hSN9kBE4AfL43",
  "key14": "35EAWjwB6tQkNu36y3TxyyS2a29tDRQavSZMW28ieL4vp444AhWqkxKBJNFn1rgXKs3gFy3jMosMdMDzGA2r7cMt",
  "key15": "2LyJ8nWLnyssMwzKjXj6xNkU2XM6RXfMgazS9PwVZcscB628eY6M1Nu4fKEW21pceusGeGufpc5yM6zQjB9zyocq",
  "key16": "5TSmAsd8yGu6G63is8wMevjaHzHsgtgpMNaRbwo3a7fx2pMAadWgAjAUySEb8BYzm5tVyyZA2nt4UVYGaCVibwhp",
  "key17": "4RmhPwrXisfBuzFk7mdCQZtwACDhxAaNcr7EA9d92pMyXPYWKEm67PQjnyXcnd8fdYb7Js8WSDQTCVt14eb1RDdF",
  "key18": "2BErW9C26KUQesRxrLfVnyNyXfHZYCDWPYC7UxEpi18b9utZ3ShKvmFVLj6v3SEv4yqANWMGkP2nn8F8ekvhfomS",
  "key19": "61ibUXbNQBgTkbHvBohGvmfk66wCJKvdQZ9ExdW7GQMxWnLQKWqjmiccEiYpcgKcqGvn5AKGxyDMfVUdxDGbf4U7",
  "key20": "4Kw6Mn6fsjr2ioLuavbULgHgDghPNWYaYrNjmi87ES5CcKNGNxU16sLS9uuPq8mKwHZRSUJxvTm5q1LzMiXJdMtx",
  "key21": "5cD7WZ7ef6Tg4v8bbMNU4LxFNGndosZVYPQRxGYHETU1iAVqRhCWUdbfzXriohHUYjXDEuhXw5RPQWmX8LfeWisA",
  "key22": "2z2pf8PBkVHEdecC79P8z4otpsHxgtEwYbHspUVQG5UVUdKdwEh6LgTReWnH4fawsrJDHYX4Rdmfzn9SZJgFZrkv",
  "key23": "3gEvTaaeVbpoqqLSNc3aAFTAyvGUZ4ReUZGwizNYLEjE21bWVBdFVqSx8Qe6rs3iDBZ8Q6w6NnQtVfqgkaSM9fhB",
  "key24": "61VSQw1fTSL3KBdn3icJYSAtivzvTu5rLjnE8t9RjFiuxn9VSkajXftjmUCh8Dazj7wvHbpXxAVWdkveGAH1wPP4",
  "key25": "5LRunxUftxig6FfZbJc39GhzMdvYHVxoQ1WwHsRndwyPb4smpMqq4RWpLD8F369t1E2uqX3P83RaXwHUSLMe8T6N",
  "key26": "fKb7vjjC1Nmiq7XoejhX6PRLN7nTvFVi679oBmdPnRqXtAKAEExRSCfCacNyVszYULNvCbqcsTFSvFrquzGvzwX",
  "key27": "LitbGi5E81B1sH872un55wvTvHfahQDnAzufDvNPM1AmiRqaUxRyod14fmuwvNveWBrBAgr6ezbBSbwrLNwabp4",
  "key28": "4N667CWz6WZemBEq9AsNxZ9FohBUMRpyrcjzyEUMQEQXPAi7PJUQwkj4EFEmopiVCC3ts6jTygPm5wnL2oVHebJJ",
  "key29": "4Vh63HykqmkX79kEwmyiQ54WBjBzWmctx5HdjDomySKAR12MFca4iSXAhcfmuoK4QaDhh3kWHQoZkWWqra7kiZzh",
  "key30": "4NUptLm57fFxowZBxQAkNkw79HbWRhwBAYpNk99fENyXeLXnnaD51zxGG4swTSNzs86Mqf7Lw5JUDaBmZp73ph2X",
  "key31": "2j5q3Wrey1qQ6RPPTYRgssEhQaUvV2m5Amm6uu51M6FysZNcorUpf1q9zhQqE4z7UBNSAM7b2us2PUbbpQrfUid5",
  "key32": "295wmM9dhCXQFCjF7dm4XyQNBSV74dXenYuHUBxer5s1GXW8BK616Pd1ZkxHMbYkTheDA4Mf6wkm1eozZC8CZ7ZC",
  "key33": "32qMmMF7MWFzsBs4jvemq1SPS8Em2Wrs78TKSzf2j6k39hww47fcB6nTPvePYUp8CTauWrgGfb9pgRVyx3EyeY2U",
  "key34": "3yuYdJ41GXwgjK9Sa4SxNJpUwcbSwAwSHBWQfBvvZRr3VuXZm7xw83hLbin16fcveEQb6EoN9hhFSXX6y2PVdWaU",
  "key35": "5dU2R5orCQc9eyfoyTfmDuwfcyy1SKy11ZsPs3uT8DaauXazJs4JDSUxgFaceq4bds4pEKLhiSSriNx1rk9EQo7Y",
  "key36": "Sgvnxjma422XAowzAXrnjTgXKWPcs4qui4ju2pZG5AHZNv41n8X2Ar324pb1F54i8VPc2ifabsRbG6mxMjRocpz",
  "key37": "4gcfHSvVhufUtwFx1tXmNtkZAcYJ2QDWX4i5yU9WvLZfjMWiBDE5qLAbWw4pkMjXU9mDXjKEGpwRvE1GBSgpMLA9",
  "key38": "4PgsrVHxkHvw1yXkNtQ4jRKrrybLFhCpNgYuEDmnbspHor9hfM8cPjXoqn1MzzhVu8rRzDhJYN8PGTFHtJZ3FAA2",
  "key39": "3vuvTvFa1j9n2CQzAocJkuX8qFuk9auGZeE3dgoKGowQMHaNfEoTy2zwt5igjZNJxDH3zwrCniQ8o9hKef4LjvT3",
  "key40": "2yjga2GiXAv8StjAhXfewqWsz1h9UqV9oE55VddCoYgRruYSRRa1tAydRFNhif6tF6Zc7UwGex1ipwsUTR6ZRkHB"
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
