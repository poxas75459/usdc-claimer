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
    "2FFKQk4N7nYUEao84sGrYSqVH2CAJrs531MkQ5g6m7Y5PjtzQrgksG6pFzx1n2HQUeddJPoutxa6RuKr39SPiYJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N6cwj76xDT8JJxixk9Kmg7kUkBRzf1oEGg99sSazGgtnJvramoBWxYqjUoMVsGMu7Xf9spNh39bhRRveHWx4Ko3",
  "key1": "2vM65oiTUVhzPzMZJ2jh93ieZ97uNuigMv1EF6qbrnERiiKz3s2Y62D96za2Jt5MNugo66EmjAyJqHRKe822A9rD",
  "key2": "cTjyh1qBV2vcDFfb89NXvtAJXsHNKtCV19zjxN9dJPVQ6eyX6naXP8qBcZC2Gc9aAEXoqPKhSzn7LoFp8EwNYX6",
  "key3": "5Up97JYpihrLF6MnkePQ3CtdU87DQccSouxH6KaHA9FncM3bwDgmzufuv73wSh61c8BhVvY5rPMzFXJ5mWUZ6hwJ",
  "key4": "2gWqqdywXQ3NfisEJiyJ4aXRyGLEqPeBZ7pPN1YqvNAFFrHba2ZWuSQ3mP5deV8a71jVKqiVYchu9MZAGhFQ4QQV",
  "key5": "44i8TVqdQbqXSvbUBRdHxi6piVgC7vdEK7f9hpapXN9c7sCeZxgsf4x7wu9QAwJxZFgUvz7EWheutafVZWC23bcT",
  "key6": "2b2eRMG1WD63Yc9HZVb9KTb6SsieKJqaXQrr2re9axuALwwNBziLR3598qPm1NHGdNWT2MB5PZDEAdBdDeLowyJk",
  "key7": "45joFRzQ54Mch6NfxckURJBhdVmKAjzPLkrE5YCknSybEYyZFzAqRH1UFCheoPZbtLjtHnmPytewwZ9QGzNc7ENu",
  "key8": "3XJgYCPRNRJugTMKNkY6gwZ6bnbFnqiUzQHwzEUdnUkGYHw5FJBKWeSG8KvTiqmpBcJiZm5L3yNs3t6YM4LfXwU6",
  "key9": "4u5qMoryaA9qKhchiZWqD321Laq17XWP2G83VLETYVCsCdvUgXBynFdmH9auVdtSsfxfrpdHS5ta1BpEHRSsewDF",
  "key10": "4BpxjVEZCuXHF9ZhvjPzn6CqNDc9C3nTS9QcSHC4C1v7Dg7uqtjVYXk7S2SZAoE6XWuKjfGRgt6GioWh2X6FxnWr",
  "key11": "4eZSyep3YmZZT4EXdtrYAizGCRtDf1ZGHbF3NCgFZoPoitYxpFpV9BQDN1YCX75vYDu4j85odMFU3jaQUUBu3CbZ",
  "key12": "kUKictEJDHBAm9gWY7kk3Q5ybWTXqtzFEiefxAXKSQCCxM6uqHptezitWinyVoG2S6kKhid2SmzDbEnXf25AJnh",
  "key13": "m2bimuD37zTF5kK9wXwpTzRU6NsZHHf7DBgcyijcGbNqsHshcphrnkZmVTK4apx5nTvfTRX2ky2iYCpQxLPyHn4",
  "key14": "2YTcku8nSe74btazrjqEvA3PQMydfcpzMmJkU7qqTR9ZT4DPieDiD1siNi9h6GHsnG8BX3Gct4EY2fdH3RFEUEts",
  "key15": "3oSeWPtZkk9j6KvHXNiRxzH5aaaZJZev2LmAKrN7y38yGsASJ7RFQZU8iqVQrAyjbB2om39xZ43HyuUhmE3TsfKD",
  "key16": "2KH7h16iFzQhfFNWQ4fRfbskCf7kyoXEvGFkoWbTsGzZc28YxH6o9tbs4ghDsqG2UhgmiYp8pCWEtfmaTS17QZUp",
  "key17": "2tT271N9Bc4PMqCjoEmRg63aAKpBMXhGjEbSQMe9wJ76dbbNftKq5Q9AGWFj7k8m2eYc9BfnsRBMHgF1xT1k8r17",
  "key18": "KhVqrADKXpx7wWf5fQNg2fbvuuZcK7rVwUciaWsFUcC5uHdAXmsWZJzE1WJrAsJvqtb41fLqg74q6yKL5k7T6R6",
  "key19": "4cJLPCKWNidPM9yZaKChjCdYZJ8m3wDZJ41wMRNsEgne2kzLxbXn2QfnCZ4WfXvGHMagQPSKDHmFqEj2qFiDP1qt",
  "key20": "3Dj3TybdgKsvbjWsnSykFpQsfB4NDTQuL5rbAsd9HzcQ7fw6n392ubFx9LryXbFEM7ug7Vp66L4VPCXHhEFQdvpw",
  "key21": "5jEYasFq4T1QhUukW5aYNK1Z9sDixQvCFbXjby4ZycL2ra8ftn9bGUrvvhhwm19Ra4TU7jFMRAB5iWDr9TozeQcj",
  "key22": "4uMQ7HkvrzwFZW2nZA5McAvmf2HUYx4GKV3fh5U6tUsxEQqAL2amXbgkdk4SYgp4CSm9Pux4Bp5AzmRjqiqbyKK5",
  "key23": "bogFWuTzrjKeZh8DL5fxNSP1x2AJxw66kaHKaiGmmsryyvtzndwYEzkgeynkXqnpRr4esaUtfS81cc6MMYJzNqC",
  "key24": "5g3NKeoZBetsufPr5H7hVjeFkA7d31DoySyZuXRNKDBwdEdoZPEChmwMdkvtEDULeDA7KGhxYrzrCWXez6zs6bsy",
  "key25": "5A6a3yqCqmyawZGo4Du5Wai1NbQxoq3paXTNicWtcqaSKuweJNjag3Ldzj6kGx6w4r2mmC4Gm1xZCczLWxNHn1HT",
  "key26": "pbfGFWtJk1MXrRwxUnWFT9TsNiaSEKpE59puERj2qZya5bApGqW7P4RT5i5Utca9uHFWDYYNQymT5MVqJegfTEc",
  "key27": "2PMUGmT3VyTx1QHULYRP6wP8HVQwkg2PmCZua6cQM24VWTJHbUhkMXE2EEnujenHiY9Kds8FzWMKV6rLKHyvzBK3",
  "key28": "63rgyhiHbCHx4wKon8ohyknbeMWwRgTJZpF7yyDmhbBP6tZjS8zkr6MAFbdoXs3NuTU2hb39Bhh6R7hvQ9J3tpRt",
  "key29": "NftAVnvgqLLVppZwTFGzH7JpJHyzoAoyka2c6kHTi4ijuCVe9C4axiA48rRKBoWn12UhGGQvcE7pkxJHgP7TCyY",
  "key30": "5U8nY74uPF1KHAY4gFKswcQxX156ZJvJYDFN5zt7tuXjRdzEPE1mwWTYSyHGUvDECbsBXvfH8HNN4SQdWfRfYGrX",
  "key31": "4torMQRkBUmA5DkUj97uBySTLUx5PZXhxoBYpDSKYj3aTDdz8pPkjLqwaGg7URoAmMTiVtVVdUWQWjv5mTHyNTDT"
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
