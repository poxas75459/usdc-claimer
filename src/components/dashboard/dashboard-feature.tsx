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
    "61dXcZRxDQmHgPVTBzCwrtyHDbvJP3xz3jm6VKy5JmQQex2iDpVTa2JbmonvL4sq17371asHzCUNzzuypLS9b7Fx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59smAXy5vMjyXRt4MgQJyUdsHFuRt9KMkrupi8c6chj3mWT1oJ25mKFbHEBowK1jvrNJCoiV5JLBjURtug2n8A4Y",
  "key1": "3tQw4XNxM7P3UrPyDcMtwfE7KbjgnL1CcwmGVVLVsadUZuKbTUKUF9qa9eP1vZuYFC8kTe1RJdkwXTu56fH4YUDG",
  "key2": "46Kkc8v8dwbNCdWsQeTG1Q84dd2P9SbiPBHunwgApF4Cs2iuYKCfdfZ4GgprtL7CACmpKKq9XJcckUdTK7Fcsuqf",
  "key3": "8ZUQQLKKM2aKq1YtPVLWujvaY7nG8BUggmrrKTZ1knYyDDFtz7osHhjjDzVVcPZ5PBU1A31dDHGu7TgFYvLwmxH",
  "key4": "2Eq6UtX95kPf3aBStDsKMVjfTtdkACoYD46Hn1FjuHYqnZRAqTmGk5CPqYd6u14QVns6qQEwi25micr96PD2YJVM",
  "key5": "36K5rEyaLAUGaiuHRywPFCDZDDQee8zvVifgV29uw6ZjSAZPG7LbXj77TYWEBedn8htYxD4Am4BAmBUVy68XPJ3V",
  "key6": "62qcSgQbHiEKxGHKPL3vCXoMZQRXwjiXszR6QuNkosLn3AhduMZSpRnyQv2myqghVDThqkYnFx1pbXwcLzyJL5pY",
  "key7": "58VnPYPPyfprgZAkc2oGVcxFBE5WyvFV4ZnzrutLBDurPJTWcM5aXJ88FBTyk3KmdjP6mHTbvCQ6PMYbTQKgoxLK",
  "key8": "3tMHTkwi8kokHYQyQfYHnZcVb5qVrcNyazFSYpu5r38YRQNUVEmTHzUdjveu3nDwJyjfhMgKBQhNM8dWTuq9MqoC",
  "key9": "4irD69NSkCj4ze58NPNLr6aC4hy4kPVEHqxQtZyLSuWV5QiTZGMJBvpnbJcZmM9CgZkvaAebcCVgC3y52wJjSVxW",
  "key10": "kH3XbMaGFAhDT842ducPGRyectEFENGNrLXF6CXtAnzeMJpZ5mmAEXCYHCxCm62B9ThF9qxvRC6LbKLJqsJZWXd",
  "key11": "2wYk4nKHvaMHoQu7Jq3kcKTCXvB7EpcLig2T8oUCajcBNMvezjfvGNksNyX8qvN7VKBXxdMgLs2PRswY8aruoaRh",
  "key12": "SFK5tCBzQsm7agQtsCJ66Hemz1qKNnhiEBESKMHH28K4463WrJKudBxHWaRdGbfCuLdEJszzUuHMUE4WmVPyJ4k",
  "key13": "49mkSAw1RtuMXTgSLEgejs5CbsVhER9AvSeN36JpxWx6KXLAaPzKdJDdYD9r8zqntXkswPRLwTZLDzWEhMoBjbG2",
  "key14": "3HxbVrQYBQxo8AhZpiSjc5ditUyDG5QCZ9Dh6ciK6q7c2dJFztCF6FYj9S6Mn8a4r6Z1WwzXw378Bp6DbLcGUTZJ",
  "key15": "4mjxdUNuEToA4pRft6rUgh577kNU1ggmSfUffkyJR92rhSau14sMAMhqdfU3Uky7gEATLsNqoNw3wwyvTnGBbWmQ",
  "key16": "LkUs4nD1FgZzHL99JPRZhro3nyX1wrMzx6Q4divL1L7YHK3SHCPCYj2bYChmnoNHvvC9p1kJVcqQTqL8M7oiJBi",
  "key17": "Hg4QcfiMzYb1z3zH4NizkCFPvoTwqBA1G1JTjwz6xbv8d94NVJYhPkVxZanaFQm9UKRdvhJa4CrYUeF38v4eUPy",
  "key18": "4u8AdwNZxdP22ApKN57fHfjAnYYE33zwka6UHBdYSuP33U5tCg2jj4Sn8AEUPKeyLrK85xFQs7tEazEAXqiYcZXw",
  "key19": "38bvBeYEX7poy939Vbvb4qCXsZ9Lr9v2AW9nZy6ZJzt4poZSYHzNNGBGDdXN1aECxMScT4KMsSUz8vBtfgDEj9Ej",
  "key20": "5HQZwFntkixbdmpyzgrYoTnb5eV2hB1fJp7Hp9SXG1AEBHtrRhZbuYhNi5WMXJTLZPoqvSyfBHiyBCsKjEtB5JCj",
  "key21": "3dnLJRDh7ZJJMxXhZn8Xbcd51Nr3VoLEp6P6GGWohrgduTCw3FgixTqUjvEcYTScvGW4RrKzUuSUthrwGKo3M1kk",
  "key22": "2sQAdmcpo4adyZMYL5nJBcXMQJV2MKUntDHEFSMSscWVP9MijDJ1KYk7U52KbrwbSKYi3HGAd7S1YpgA3TkPDnEf",
  "key23": "ZsETiF9ewsZs8qNCErn9MxGYjq3dy2SoyGDeaBNPUVwrGz3TQkwSFPtWjKQaxTHe35vErLuQTJhr4gZNqGTez3K",
  "key24": "57kuiRGCGbMmMYaWiUSSecVzXLebbK6Kth53H686cXpbX9AKcXcnbMNHYPHqfAtxKWGx6Js6s2qEXV4x8CGK87Kr",
  "key25": "j64iUXyzPuow4UShuAyu5F1E2QaLQTXYeM22BDFd9kueEJ25ZhMHE7oxA5ryMUANvR482iNRkL63ZtKQnapMkmW"
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
