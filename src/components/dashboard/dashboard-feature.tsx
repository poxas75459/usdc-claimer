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
    "3rMMXKyyEdqaAhGD8r1PDn6z96RojguwCwVcf9fjEACNFbQCKkueNjhC21tu2SZMmvohct8zsCZg1eBQn1PT7gy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M91yVpZhCkEwR3qCS4L3RZoVC8ovH2VGcqQnU1T5q7w1SK9xa5sV1PfMqBxH6ZuosmJiqxsLzjcdRTEGW3h1yzT",
  "key1": "25n3hSpeezkbnuu1NYL9KtSGTPQwyMbzqUthwoQ3QBabCPjgKzdFr9befuSXABJvXAkvsDXRxrQ5Q93fBRGFq9dp",
  "key2": "tKCv6JcHgLgTgMLZ6QUommxvYSA6g6XPSXNRTdaLSfmwjgGTKLeAct9AU8ieBcwczphbACseRVx1k3zjdDPHYam",
  "key3": "41gaGe3cLUvVPTCbesj6kx1wmCVt1XniPv51bP8HFQc6cUc7HxW1GedDX3kDbMotgkdHBPk2rpGcqPoNnGE4V6vj",
  "key4": "6XLy3jQU6z9wKToxu2kXYti5EXFq3Q5ZsqFcsxrQVXxnWH68fAQipDUZ6izju2yFxfYGtugHjVX1PMqTgmWjzqj",
  "key5": "3o7MZqfYKxvno6ZYAX9FbhrZ5KAVhdZgtWTRmL7YwVU5afaECRn2cUC6DnKUatEnr9zyZLvrvbGCx6bKquJwbZwB",
  "key6": "2zwebh2G6TCquajXvR9ZSDVrqL2XUpvwh5iY6SJKgagMCZbLGFLAdV9i9qebg5QWRTzeLrvXEN3iJh3AhKDgHBeb",
  "key7": "3x1Kuuv8EBvhra2qRQs2n83Srw9TG4wP6XHd1MnH5R8ErxsJRhBJCrxy4ze8eHV51ThAbdMM76pdFmJPhknGz7Mz",
  "key8": "3XDw9HGVe2PKP5iQjqAUkuQrGijmQH8CGWdsR9C9zJG8FpZaSzPd2Hy6pZnN9meAETTX2Xz7MkvNL5mfHL9iEaBL",
  "key9": "287JTn8GhHhDVKrwUZgRxKoZ56VpZZ2g4Dpp8wrj9P5a1s1gNykzb8nViQ2decngZvHhVxomFVNySTo6QCLkMFAn",
  "key10": "3Uz5JaHkrYA5kdp24pHuPr17BDqDyhRsxFeiJHi9ZEY57QTjXTps6Njqitqq8W9zUhCNZzMmPDS7dEEbxQFNz5AA",
  "key11": "5BmYkBMRCwGgHRp5bKH4R8nuFqDS2uYtDritNQQPBaMmFocCVttqyph1CRUYWddFhy3FLzr4yFovYPQfxxBVwakx",
  "key12": "3aNBoXogqrEnsoCZKPk7ZfsqutUyfHe6Zm3dCg3c29W519CLr7KnFHuNf811AzcZMAuHmytYZQyhJ9DZohoW9esp",
  "key13": "5R3FYLXH2iohATTpm8RyEdrhC2xpquhNHDaFgVSaJ56t3Ce8NEA9N7K9RJVcGJYN5YueXEC2WhiZzf3Gvki6ts6V",
  "key14": "3DJVKmKrPCjE8kNyfJjfK3Wq87EYxwmtDHnNT7jECH6acWvUWjRmCzV69EsYw7Z647ajsjH4FX2fWPhJ2nooURjJ",
  "key15": "59feCMzY1ERpFXvvmqJgeKH7ZxgKCuZ3soXrdjowHJV7KsQkdpyi6E6yUVgehWfGM6LA6UsmvXHCzqnJXvVcwpi8",
  "key16": "4wZW6SH7ABMkX98eyGhbJZu253zjqNHd1JKCzHVHzE1kvB7tiPmfRpFDsoKMtPce2N9kBVxZVFKDs6Ac2CntC3eq",
  "key17": "5h82C9hHpGLMn45TSYzcfk6PznjLcUqUc4Fkvo7cqMqeqPHAfJACYLZJnaRqoKhy9oetSR2p4nprdeVJiP8iDw4k",
  "key18": "4nP9y76k5DF9nRi3QParptFsFe7PkbehoaHcm1wv3MYsLRSu7EaymUHWVSQ2z8GLFCiCtCt2VMar92GVrxakALGL",
  "key19": "59ft6bk7ieuaGFQ4kLdeLwi7jJtE456kPm3TWcy7WQi1eJVytvMF95YrgF9j9xmkX4FmWyc5Rbj9wamQUDyM4Ufz",
  "key20": "36UwQpyasFHuRGrce9PvcZtgiAR2vW9686QiAHdjNVPtLkpPDNT2PhT88cYFCrian7nKU1XpmihQ1q9JDt7yPkcJ",
  "key21": "5fDqCa54HHp35stdpLcuXFcPYD7Q8mY6DYuJmTzt7ZZEoAx9xLe9X7xzDyMF2ptkyBahmQokYJxrmyFtEdksLXVi",
  "key22": "5Y3VonHnVwmgwVESdNs8XdTZmGseg3z9oBf6u5sXdGswQukQg6mVj1xvN2vBHHpRyk3DeUWCdvRLinY8Mh7zRFPn",
  "key23": "qJdYpRN7aRmZ5PPqMw861aaBftSA92Ati5DN6B8cA5keyEuJbQBVJbLdq5S4BBUHH5jsv1JqtrT6dybWYpapZu5",
  "key24": "4rVe7pMs8r2FzoVXjog7djQqp1MWVY7HQrVMVXKx3EPGDeWHN4A3Gv5pDzrVqM18jUqjZL7F2eYMnzpKhnmJiu8u",
  "key25": "5Hjw2trWjGQ2cnojXeAXvhegDJYG5gZMXhu26ka2qFtTkdzFiGd5tudfXG3WiBwqnTEcbzo6dzyeNHyCwCtKbUAG",
  "key26": "4cDcuazR9guHJ1ewkvE685p8UYycEXQZoi7uZrB2A8wXfsc7C4tjNZNomoNbCAsAihdRCnNVL3qRp4M34aoPdYBe",
  "key27": "51oB57TUv6jxXQkcPoVButheDw6dQAFHmvY5m7JftfeU8HJHobNyE5S9xkNm4wu6AKrB8kuNHcnkJvujSW9xGMDc",
  "key28": "3yxrdZ3ixRDPMbZjCTyfKG2NwW6AM1gvqwjGMrkrvWvLTMXRUvFooVG3osZZhmgM1NJpPwJ2x8UtdBoK1hRagUd3",
  "key29": "64fzEJ51xvYa8rLxg21e4qZ4qRXgfYP1p3oTVxzycX8LDSLUCcAudPQpienXJRMTtymZCBVabx1xB91kLdLfUqXn",
  "key30": "3NiZQYjbQNAxvTe4tmhY2J8KwMfSbDeZXvPLcwTk2sezL8iZbM7RAxrtde9Zi83ppjRm54VZiDcXQKrvwLTJYayb",
  "key31": "5fMSRGg4a2CbHLvpL7WYxbXKesdhNrLrfRLJcopza5FZooZLAmh2pMoAG84VG82n4H5RztuBKtYcjfVDvspjoJ7c",
  "key32": "62SCuNjPNUNMSbMUNwQ9mD81EhcTkb3jCZHvYMv24AxAwZDDFLWbivgM6E8upvjaNfqcrTfpwh8bQPqTn8qxuYwy",
  "key33": "2ZkceG3jjd3AqsJL2NRkVT9wkBJAWUsSWRoaZsPuNu638avq61s5xup14vewAazUU6uTCtsH3VmjgTVi71wxTrYm",
  "key34": "WaVmADxBsRCezKD2az2XEpxyzYTJ3p9bKFkBYTb5zYp545NuCNBLrJD9pRhK2fKKdNvv31jDjgk8v9voHeP5cpM"
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
