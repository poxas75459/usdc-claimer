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
    "4EizEojky7GekFkotMQNrGj24FXGAipnvRbDHXR4Cqfeso7j9SBXZz7Q63FhbZkMcYBqxa6Hc3gX9Em72zwC8u7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53bY2mgoNW2xW814tTdBLBL2prCEX3KJcAr7SY5WShYqHjibhS81Jz3q7ABByLj4jPrW4EZXw1wZsknaSTEiC7Ns",
  "key1": "4ctWvK5apVpxTogLEbBCWNntfkxkYVQ69eyMHJpzHGKViVJKgRWdwjKQTXQA6jaKTkDDPQX6BCmdtjGepSLC6Y4H",
  "key2": "4TuRUjzsKJ3rVTANEHMnTiirtrYhLYDTp1xsdef72wx2jhtPHy7HTjBSPgJoh6qifVW9z2BJH37F12wAcXigxhAr",
  "key3": "4Mt7WVbF6acB6rRv4SVNvQ7DDg37votUnneFUGS3kHSZU2rvsN9HtfDQgt4YRqHULrpWq81xzt36HTU6zpAoj584",
  "key4": "2b1apGhgmr5oSQUrjYcphAd7YccVYJ7bdkMvbCHyWSBBfnBtNGzf1wdWt3tib6NtJFJ2JZFZ87FaNZdtQqHgWP6b",
  "key5": "4oStXddTXd2EkYSf5Ps568rQ7De9Du34eyV4dv9Pqw66sWoDz5uMT3TUPEFcToAWNW7aiMzWkaDvzh8t6cM3YgzZ",
  "key6": "16pgreSApyhPdRyw9NskM8oqbKhWk9yQfxMPL9HrbGRPbU5A68u8Q2XfNh9NduiUD2mShLjfAg7YgUb8EHiCuhi",
  "key7": "5sXseGcFQN2NKJLvUCs7Xh5JHdxQiHcCxFiYJVHgMVVebirc3oC1V6wBibds58d4gVuGibKa1G16LB9rhsCb7qGj",
  "key8": "5EA4XhK1jUoDBGDdxuMqDDWqBbptoRpQCRgb2Yn1aYVGrdtap8wtenYDTGBA6dZVWdyCPvykrPVK7YEjPnMnwQFh",
  "key9": "67KQimz2dqohH4Nh6wy8abJYK5L4vM6X4MN4dTrvXYzdxcihTvdg9pHweCEBkbKjz8MPEZDGRHA3wqkiJ7VHqzEy",
  "key10": "23LrukmQ5dx7QHVoRsiBZ9X4Kd5s7d2fMYY1u2ZSX4J4pcPL5WQJuU1BZyBJjUUVzidcyC7aWkhr3EZRXKw7yUcs",
  "key11": "4R16eNUCgJr2UXJd1QofPRfQa19HiXAD8PYE7P7ZQHqeE5noqUQA74onox575yVFgTZrVBmV8Z6NjJqzn3pBWsZ1",
  "key12": "2xYMiDnBCbAKmhYgoBjwgyrFwLDMFoYatu1EreC3Zbt4K4gcKs5uSF8EGL5j8L7TyH9zj4bAEJmiw71ZzisPYp5u",
  "key13": "5aCb5oXk5hySXwo1SJ6VancoJV8UA2FZ2erHLuGjGGfuGiJAdQ8RsimBmj795WxG28ZerFUPYGqEwb3Mo1bwK1Si",
  "key14": "4Kw1QWV9n3Pxi52iUSWoFUrYpjYmDCmj7prYMjYMDD4DjGy3WSa2Y3gz8sRigXUeyWSf32s8ZSo6iBxpaj7pBuog",
  "key15": "3r5BAnD8QQEw1TE9153zv3hJtJrfzPtVXm5zbMp74qhchDnccPgtzfhAHBiRRwiKVFw25jnNr1ggoWb2y8EUcsPY",
  "key16": "3BJdXhb8J6PUQWhdFPrVGbCsDaj8DxgUo8b2U3EYpePZXLcudwYqjxP1x5Ynu2WaX2XQQoh7BdGaSBtfc6cx6vvf",
  "key17": "4NDL9rC27oX4J3NuNqXQgrHBWCNuzTX1rSkpPa5Z1NzLKSrfKcgrF8zMhtAoisorvZ7RzsU5xs1fqG9CBtvrMWBU",
  "key18": "3G4GonDdLJyhTyddxQ46AbJvXTgdECxUgrrDH4PuwtHtZkd4xbFfShcHKZHrwW2iwhRnktXdPpZ8MW5T8su8v3rB",
  "key19": "4f6XVYeCLR9TXi2fPgHKz3DrRbUBzsotWG36TPSBuPaazswov9vJ2EQUp9TYk19AwwShXL5QPscVGDeK6QH9sZng",
  "key20": "5CbuLoFBEYS9jgYDTzBLSjF4QxWkXbS4KcBURrMjauoDgsa6eg2s5aRSr4eJsTtVxP43fEE1N5PH5259ASSpv2at",
  "key21": "2gLH2gpCqZhVcLWaoL5C7Yer54dLh1LcWh8jygo4n9GRP8seKALaFReHM2evLuknyZi5P9wcDuh3h2Q3cunGa9DZ",
  "key22": "3MZeGQkCvFATSwM55Nsq41rxFpLP3whzm4d2umnaiBjhCqzem4GRAF97dAmD2mjw4k6DW4xe9dFUkr9537hLURQD",
  "key23": "4BMwL4uMJUQPgATrxyuJEghhec7B5rXYQveaYPLXv9MDKuy6mvXyxevSkcRKNEoQRpi2M2RYoQiKTvJvoCJFaHPS",
  "key24": "qG1SuH3WQAy8h2xmw5kvrKF4ceeL1EVMWZA9AA4QVscEid2jVyFhQiGYcLRicEGj1Tu6qYDH3BJMVpUjqAJnu6Z",
  "key25": "3F5AVYCTsYQCQQWBZzTfhcgadCPQBDK8t6uUDxBbQ77URfd2dR4ysRGh69yUCy9LSf2cYPm8RPBTR79KpR94y5Py",
  "key26": "2zqnVojrfP8yJgA1NT5yE3r7Y8exvTcbCS8T7zCeYcnQdNkzYWET1BimBE5zzi3kp1VVZgsWEhzufEV39PqMuvbi",
  "key27": "WBY9gSZpXoYoN91owndjSrfmn55tToaQhqp9BPmQe6sxtBHocAvWLf7wPEWwtvbDZVdB7VnfKs2xxvk1XkCiZ4z"
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
