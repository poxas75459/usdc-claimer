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
    "4QAKdsi59AQaVqF51ULJb5QpJZESPKbQTejjaJjcVme2TG6xxu4AKxwpB5PPypj7KMFbnbuk5W3wbb4Rd5Z9qpK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g78ix1Tm8UwQpGfYvaH75FqsKd1zx5f2s2t2oHS4biEYNmyrxNA8iDdraWGq8m92Jm2TXEjjeGhC5KMph8GddBR",
  "key1": "4UuJ2VVV4Daf2MTGyiccxJXyF9dzDGogMi6WZjXnnCsH8Rt5ock7ZF6femZCNbWfNKXwxKbByhcfDG8eysCGawk6",
  "key2": "djwT53bxYhRT64H4QzH3nv2RoWiFj9me3eYKVDbSuW22zmtreB5Cpm6y68g46A17QYwWSva42C7Y7AEV4qxq77J",
  "key3": "FdkNEHRgPuBGRPGdJSGAYBc9Hwwsp7X49T42T1n1eCgr5zJYcZNfx5CC7gYPRBzitbMyQRmYE6sjbrKUb2ScHfQ",
  "key4": "4jetUA3Kf8W2kFR7jjez8RArJTXmR7crJysWwoaAcubUzoQQhTccjUxecakGC7ydoguH95udnwq4sGi8r37Grxp3",
  "key5": "eiyguw4zv4rsftRizA52wxnys2w3o4eRD2GgpEAmJnAhGm6WnyC3WtZ3xhBvueEFtU8hUJiwHjjrH5UBWA3SJHV",
  "key6": "56oMgRF9cSev7TwW117KQJNbRTDzF13KpEkct8eRuQd942TyjMwDP9TNCiswwrXHiB3zhJRKK815X4GJ7c7dS8vU",
  "key7": "4efPB5Qs3gRUtMMuYuNyppf6fUJsPf7K38Yai9SyKvxMjvA4DV7qtBsaqt5nHjn2ijPAWHjcAZtnvsP29uumengr",
  "key8": "2dnmH5moS5hUFe17xZvs1ZVkiiekqynt8t9CzEy2VqhguqqaK6wWWN6WL7m3vj3fDqQWkbeTPrH8bNrKRqemwPmt",
  "key9": "4KBcEzzXQuG6iUvwnvyxQ89dtYMsco3HZirs3z21eXHnw7snC1GLfBRWqw8UsPgPkeGZLodG8zfh7ciJLNezaj3T",
  "key10": "4cotEvupYTWn8JtxLqY88YRqwrRPSzu3kdvHhQvm72RRvmJRENi43hDJM1hPdNKsBYfvcg8Lti2YCz31NEkU7ZGG",
  "key11": "4ZgBWsYLiK6FT67e6EXZti8B9X3PKJ4HyMTj4dXSs75ASJXQqXSDZP7BD8oYiMQS4TG5scDCn419d1QkB68Ndx2W",
  "key12": "5ERV7xHwYZ6cgSkWkMJ8uppYaGepivbgjnzMHGKB2bscCeDwQVCFLV4pYLHwkkdNbV3bX7RXS1tZkLopixqmMqZ9",
  "key13": "EE6rpdbTuWa2rjgUw9fEXUGTXcZRezRjqifrWt9adMjmRoAoiwUUPQDCBaMaBsQtqBB6EVZxnxQpkzYVY6oD7ve",
  "key14": "oSs9gCKnmNyLxMWMQ4ftZyyrfzUSDTf1Z8V2T1bsEok1oHTzArzGjJL58S7SaJ1kEqEgRp2Ci5MZDgfkG8caKxN",
  "key15": "5HtH2Zt2yMLyFSUqaD4oSigQ4weGdTyz1Vi5dxvEPibSwSv4wHYQkSmufAQ3nkyELYERnVmwr44Nu9tCRKntzNu5",
  "key16": "3NiUz51fqHzctkBhJMYbbgBjutSnpoFKnjdJP5WGqbYQw2Pqpdnz1Z478EZQNozeESjQkm8HZAxXTN9hvXYWFmqG",
  "key17": "4csaLeNxMVdF97qWbyJAcv88c2sexbDgkYNP8h9w7QfTBf91D8Qfd5zbo5e3ZUa4sxKVR69o3SvssQ25tk2ChiG7",
  "key18": "4UEcHVppP2KoPnhCwxt6FTYyE1suTPLDVqVxmytNxphKtfHgKCpbSwP3SW6Cwy4EjpxthQunF7UoiFo1JXsSM1Lb",
  "key19": "3Cg9ycED943wB3wcCe2uLGEFStjjDcKKTxHqohD5c4bHgtcm8VnBYB4KnGAKthf7fWDFL2u4ADTHeGM3rpuQhKVT",
  "key20": "43pjC93cdWoSmKAWargPivFWTwjWdUe1SBxAXn5cagXay6dEDKx5QMKf6S7QPG8znUY1rxbv51RWBRbFGyJxxQzB",
  "key21": "5wPW6k6yPmEx49xfyE6giMvXrVW1k1rBDkPrgjqhh3bp7mpTeQ7P7twQC7xWoJNPnLhR2tfYNx98fABEzGyJT4JN",
  "key22": "2tuEHoQunsTsCxvFbnS7cso2MsjzDyz8HYruTRKShs8EEqk4sgtMj3WyMLVpWXu2pdj9vdHMYX7G3BSAzkpvFz3Y",
  "key23": "4jzQoYd2wLan1Byc4rTmiD5aXgQvg4syZT88RHghxtRBcoKESgrR8svaKNm42nPhLCyQEMazQa1AThzdnT5F5QkP",
  "key24": "3iekwTeTETi1WjP1AhSfGhJPXef2kRGhTvqrgCjWKKKPiXpjejhLskzFFHFzoqBFNRz7B2EiARQVSmRDwjPAoqav",
  "key25": "rwYcRPwhoffTbmcBHXDmMzFsWedKXbyuXNP3aPseNH5h1ZWN4gqnAiH4gDjBdRz8J7agWvrtUkksZ9m7d3W2LWE",
  "key26": "5gYraK36hLkuKKtbM9tVXwfdLzkXkMABNQhMsZwHDEcvocrHo5sxqY4WfA5JQt82aLQJXjt91rszUsEJDqbJS94L"
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
