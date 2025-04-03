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
    "35aa3BchQDs9BfwZuUJHYcqQv37PF7t43fEKm2xiegUYV9iHfU2qtubB1gDfRXkqFupjViAYd4U9AN1ZPb92Dc3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51L1RG7jzcveM3PodL4FA9gDfYoAur9YWGL3ZBTwbYqGUiVou2x9s12yiQ9NdkhxBFJn3iH11ushnaaWcUyUZShS",
  "key1": "3pZfd7gMASe8swMRyf6NJ73poT4mYgZUsfPTPcNn6j3V1qhesCn7SzquzAZDKEqBqAeYTdyPgsBmFNNKVYFu7Pim",
  "key2": "533iZUjsx5DYdAQbxfJorRdPe8VnwjjV9Ecoj2g9dNx6do5F4JCu9HvNK1semqGjdixRM4qu1SyuQY3E9HBu8ZjM",
  "key3": "4CcuBTrftmqLKoh8CiNtb5158vHusEcXGebPubFJ7FxhxZak2n4PLctCwpazYTFK8fMR3nBihkD192HEyw5zrNzK",
  "key4": "5NC1vvv3kdbPHkVYUKBtPJe3uRPx3jCCYiVuUHWD8MceJiYNk1f5hYzUkZQb8RagAr49mavkpTHJtY1Rm8Y1KHqh",
  "key5": "4MD4VxTH9gHVicSqkfpG7DJfETbWJF6SWoK7E63E9QvQxY4SUKcLkZhdbAUk4F37z7hrqVhcgMmvWCRrpUrWzan4",
  "key6": "5BmaSYxMrC8tgokpccG6gRd4FYUPHzF4GHmMAU8KuvvWs6gNacw2aLZ4Xwdaeuk6W7fcE4rdeGEELbxDwtb3BFNR",
  "key7": "JFpukHEZstc7ebsN6A67nQD8oss3VhVJiXb2oPgKFw9HufYzTQFLnmc7Tf8L5hAFpTvvGNBhjhLbGvt1W5HZirJ",
  "key8": "358zKu2tAqhR5MnrbhLdwyAL7Nq9KcMDZMoNVSEXKnzNTMkxNpWh5BK5gmHZ1k49QXaoQxEQLtYKrQALhW1XfiXi",
  "key9": "Kjq4Nizcp4gJ75LehGcj7SSYYXbBDWAi1Qc2yMkjBz4F5izFTCDJoEKPpbJrssacqTq54o7HhQj5pacNtgWnvmE",
  "key10": "2yw9gWnC8qUAhAtgLu3S5AoBuR74ty7hDZvkbzCEp4Ad6Bxg4xq54E7BCJgxDvHPmdYHd2S4Uy6GiJjahtvweeg6",
  "key11": "5EkxREapZZV5cGnHjm56agLyXdbwCDLUCoAwDJgMwBT485FNJzaafSxGrwhDovfef1NkLgir1HqL8rzybV5QArLy",
  "key12": "2S5JsMR2WpaCxDvFarq1FbGov3K1thWGs4gFubfeBxCSZ7bpGqStbHh3LkwKXbX9hB8ZU6SyebAGjG5mGh9Ed7su",
  "key13": "4iG3VcsiAe7WxXyoj8i78y3KXSga2wxJZyMTWoHyKVXu7nFdXiHiFQoGbp2dgquuW2NDKZC9NQVrKWWX7KSkHqe4",
  "key14": "3MtTeUw4aEQ8mEQ7dCpJvXkmnWZwgonXng1GYeN1bp92NVmi5wFUuNRWY6q92yE61NSNCwwhCR9XLtRqjg48EBue",
  "key15": "gYFkkdt8LAwvdvH7ChKxYNHGUJZfiJcV2KGrVuZHYwXsaWfU6ATEn62m3C8iGTUNJtsRzT5Ug5EE8PrKunDCGsx",
  "key16": "5cAuuEUx4Fce3LAcF1L2EBPjpFGoGaVRoVkFVUaBZNFgzaRCTo7BEX4ak9STW1atE9f9Pmdtaw6S7xKW8a9gAWN3",
  "key17": "2FaUuUcH3j6UX4Ayph8eSUWQRf9xRKV95AJTfNgXS87gmF2ebso7kkKcEzTHibYvKgpvMFYEM8r3wGxb4qY2GETJ",
  "key18": "6XWr33stXN365bXLBnPrQ1sRttN9gDUW124sU7iAaC9YX3rMWUHq2xS4gQ1j12vVdXW6dodB2KQwuRZGJKnJRV9",
  "key19": "37mY52ShjDNatjTmQkY7RfbBdM63fTehnVaFUdg3wh3TSrHhtQRwvBmbDwcgcjGk8QMH5rDcuguPD15urwNV2QMu",
  "key20": "3VH5trW81cdznmER57scYinfYzHe5aZaQ1kzbu5vF5TS8mRwXPGyhaJeQaVNBmcSwsNxcsvUqTfcFDZzmPdf8UT",
  "key21": "WdbEbr55vhRWZ2k31KsiwPcEb1qydyWZoEFQ1ZKj2ghmwz4VEQZT5cCcXXn73NAJsXZfqVKgid3GBg3AqrqAPZp",
  "key22": "3Hy83Su2VZqXx9JUHW3yjpzwDr36T4q1HBEPzpjPcDBNtFd2zTM9XkJAUyYq3MbwM9YYz7vnQyu9yafjGRWrNkCT",
  "key23": "S7hj5LEA3KaFiBgMzpFYAu5AvrHgehVQh2BAPZsvWuRSUqHqGD9TvSiWbBQhkrK7DrYSyea5CcqFCvHbkxpvZ6b",
  "key24": "3bjbBD7WRuzoUfGKNjwyGtTBRc8HA2mpC6Qyw5Pj58yTcWQiGUeiLnjFeBeR3F7pAwToFuMp9q9T6B6xKS9qgUTt",
  "key25": "5ER2jPecsMvSaFyUCDEWCbL32TqvveWjfnWyCz4h5CBag7KNwQUcuDqLU3bS1vfqsx3EqX4eT42UfgDTMWeWnPHh",
  "key26": "5drNib86UnsKZnVFSX7Fh1dC4T6QtNrT9WagWqDirnoNx2R6YAU6GFxwjw9pucGA1qobLsDpP2P9N6y3BvF2DwLF",
  "key27": "5QxbBa3KXpdk38wwXHt91CBxz6rvuUsQbVXgq51KeXtQCwtaMVTTjcW3w815rVpyWdoA6UKfsrria6LbJFZojkGK",
  "key28": "5DRHFW4xJdPAJgXkcPT9YKADsrgczDhHbmKgHM9PFxrT3GwkimwKaQdmMYQt2ueQWcE45zkr8vdeq3MKbEBrAG6n",
  "key29": "4ip7uauAKemiygcyHhocJGAMMuULsSUu5DEGixZYqouCZhh9L48To3V9w3j8avP7WupjJhr6ZiT4PyXZK5ZXzVSz",
  "key30": "4XqZsj8eqUqhNcndbkiE9xUFGMxnyGZefyTWbeCym9g3rVDW4KFLZxTnT1hSy3V4wErUdXMP1xReJVKs6BHCB2we"
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
