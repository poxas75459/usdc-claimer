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
    "2PTcXtA65jTBDUjfU5GbS7xHLi2FDbbQYDUDk3wviBYfXBFpg5GuTtPeE2zVf7qVQZx8acyeUe9zSp4AFuXyeF3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cFePNdvwT1Ks3zh8ekSk98NeQdfbM4c4nB3FYibtANPGtaepAnsJBzK2LG2jD18riPgoe6DqvX9ZYpZx2KfMstt",
  "key1": "2jJBJw9MR1sRsSLum5G7zx2adQjSjwtYuMEoy3B9F9dEG85tcGbbqpzXkmX7pxcjmBxdsa1uRw73ghdZow7w5e6i",
  "key2": "3ZtDznf8aM4FDsnwm3FA68uhH83rMS2sD2upgLZe9g6AMXUrzkqv1pF2YE2iqov2kQw9tDtpfuZEM3domMtG6sGr",
  "key3": "43Jno1gnyjFNFjrJXkHLpmbrpHbki829KrRYcdMJid4SKK9W94yWyRPTK6TXrRPiFcR5AELaDz5gBHfENLEMqSmz",
  "key4": "52fcGCii2Fin4XEnj3sZ9xoe7VCbSNrRB6KDA1xxyoopsEr8ViVNCSL1zbXuREsUVEcfDoJuZfz5CrvAyr88XkMc",
  "key5": "43FHsWH3F2TkcAc5MnfT5u92mFxMgfwFLHr6uRQ3UCKBQgfy7gzfW5m5jN5SMWTKHjf3B4ryKH28Xk9vZJjeYwcb",
  "key6": "22ZzLZBhdwd83NrG3WEfhAEy3Vxd3CC2xuhxWiJM6ULpkwuh8neNczHzmSpQuUDYr85uxC1RbBcdGxSw6VaoMvs6",
  "key7": "5M9oZHyocppwfubKdrD9UuAxRxzXwtr7MGECRoDxmoRbzvbvCobGkPpSFdWmn85hftTzUkWVHQZ9sQVBAzEVF8G8",
  "key8": "41FThCwJv3LQpYsWtuBNGy9CYLTKV9sqMuqNEugGgjXKz5Ku49eJYkBjh6tSWc3TxgS8khBW2F7hL1S8JaoE294x",
  "key9": "3voKeL9zvfLsfCykYyDhnS8dBTrRVv41oazkD7meMmf561Vz12TgBLuNNj4mYi76jkBtFKeSjqQcAehpK99RZatC",
  "key10": "3F1LU64jLj9RNy7YpaBNr3f7eWHxNww3KNDoGyHCHvTmjDjtkrhyaDsryFwi8qrFGc7FkonJzyTVoKtDUYf9Nwvx",
  "key11": "5ZZF9PHZDbRhgXWe7VkAmSXWPWh4eNNX4meJeTHouZX25c3ZMKAKx2ssKVLnd3D6sSavUYrV3MzWkEaSZUvJ1sH3",
  "key12": "3cGdq1342HH61VgH9sn4vj9LruKehMAEAVD1wygbqHQskHosGQadUgb9oxJ6xtKdZNqTkL1asDMYioNjSqJMcXsz",
  "key13": "3bUCc9pBzDLALa6RdQeagt3q8gi3VPzN1Ap2VhNxsgbkw8m3HoKWfxoQoHXMLpHwFrKVQSHNhc8L8Qj9sVYJbVmF",
  "key14": "V2esSBtjsVcuWgtMPYm73jN3r5kMbhqPHeCNP3Yojexs52NS7NbhpbuwU2AKPLbEQ4aPeoeEUB2RH3W596Pk1j2",
  "key15": "2o4TdP8Uk8MqY82G68mwCW8crox13CPLBjj7sWerR9WRtBf4BKwktU1gAqZRTHroKDUeS5YZK4rpSGvRDvK1MwQ5",
  "key16": "2pxYrJAkndsNW1nRnw5GsW5rH4Z2sXVTP1o5aGgY755Dnbmbn3fBLTrVX2pY8ssevy7GgJNKZjn9zLSZxXMTXCzi",
  "key17": "5Gc37cej7W7rEX8u8MQZSaHXZWdGgPZdXQPxNf7bVo3xNLmXQgWPiDCtYDSdR4NW3zc6Aw2LFZLxvTQfEcA2Grd7",
  "key18": "kLHgpcKutKZnwRWNCw8LNDWJt7mgtbFoHQwj34cdeV6TZTgC14pLJWLuvgdkqrASpxp7dPeowAvF5PdrmUVCWpd",
  "key19": "5PqzfSykQN3xiiUHDzF3JJvAozULFsc5gnRQNJcuzvqpHv6CWUq3sC1NfJsBde2GwwsM6HVg9xVDpe1EUtdjn9PB",
  "key20": "35QNneDhNdj78gGMEvY8zbXi2RK9DvyuBeHeuTSd4zpBsJwVesHGXKhpWrHX2QY5Af3GPqNtE83eM3NCsd9DPG2r",
  "key21": "3BLFwTqqb8qSjtLNLprPesp856wgqnyCJuELX8h7akXfZMBZpmtNyYeweFKqejpqV7UtNPKv9nRfikSM8RruFf3j",
  "key22": "4CDdM7RqMvotmqjqSTUt87D3MZqTw15sPXnBF9hoGEecoXkxuP9dbNHJ21L1J833Z9jhnW43YyhbXjKkggPxdigd",
  "key23": "5d8FU1APTbPfzw8QAtkJFD9cmZKjEjhjDXV2WdqRQvWLsz3N5oyyBehukNeZVaoGDqasZpwSM4regMkeQyn7RePj",
  "key24": "5ivpFvY4RUFyJzojY8cMf1qZ5ab8u75q82qieFD6xBgzh2noXgoRJTKX1hqvCmB81uReFGS37BYANN4dKzucNG9X",
  "key25": "5WyS5QKHqY2mimUBpzXUmggN5DXUDabzosbF37tV2zy3SBrtHega1fWqaAXrMsxxMCMAMx8EJvyedeiz3qhQmvFb",
  "key26": "3zgf4Q1jvyNnLiCmgh41qYuMWGMfmUxN5hQjWivHFf7X9DmQgtXKfKL8fmsWEreMxVqZpkc84AbjoofC1J4WYQ7e",
  "key27": "WzURUvGLHxbVbNixv8TBh9T5sBScSu52BgxjPvQikLmRWx8umxeMupvPMGcBH6etyTy4KqjkCwzZcUETJPBvQ2d",
  "key28": "3cr4ANHkSvWmR4fNzkbu1BwEhXpd7Ujg65YwznynSinzTxcKvPYnBXGnF3JKpjbAD3pKdGYuWbYtB4FnkNTwNu19",
  "key29": "4XKHsWd84LTXcyLq3WdLadrg6VngWexa9RAULrKZS6vdduW26qAUxfDWjzrdikgnoRVsRcHCNBtRM269QRb7tMxT",
  "key30": "9h3WyC4r79gjwHs1EnwxRZZUdJ8xpcdz9Jrn9hHH7TEkLY6R7R51F91ji4Ze5S9JeEkp6G6Ba4TrwXGikEHKgJp",
  "key31": "5ofhUeHCMoJKmnyQLdCEGAJ4qpM7mZMsUnRGgaagbixQQConAXGgnuC1VJJcvyL76eEmqNnTsurZFj1R4yFCvTF7",
  "key32": "br84dwEyYQhv3GUKffMaCqroQ4xcWb8MYgnFiNLmGswNyQu6Amu64vcfYZw2NCsB9B3YksWvbjAYYDb8ZV3JHkP",
  "key33": "5RCZXdF9tK1dEothvQgjWvAK6ZgbthwCWEiecM4ZaEW95PrCGMBaZqh1eK92QCeeVK59wSe5cPFaz3HRQ8VforDV",
  "key34": "51SCUwWXgnQuvyyzujCVepawJBXHLzktVjsvHwhdCDmJwftF3gtSYDe9KVDXhG3REedS6yECnq4D9di6RVfJPjM9",
  "key35": "3nd4LkXJHUYjQhPK4CpXm6eHrKu4VgnotrR9EE8NPZ8QAYjJjxWGYNNpXB1xM2wJfuzMAcvR3TEUTtpTou1dHECz"
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
