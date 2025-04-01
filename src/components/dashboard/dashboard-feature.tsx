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
    "4qze5KvUbco2mfSzkemCbAVdoZzSMjqy96P6iCMbNq2BnvLZ1ee4Wv8iBSwS9WbvnMRjF859bBzY6wv8pzN3WgMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kA1W4MSBbKn17fdh2RSoUN1SvfR2uHJEJy24gMLooYM1P4HtsKyswjF8CicjdHmE6nZzkSnmWwKKW3DSXW14V27",
  "key1": "hp8uZWUvLmAjYC4u3p5UR2JmwsjJ7ZK54ajhDjFhS6xZGeJtXeCNz9NMNEUmj7hKEFjY1ghFnBTEAZc5y13R48v",
  "key2": "66wJkaiKgjWdsWWN3PjEKZzog9Trx9ewU4G1p99eWryQSCx16RyCtu1mx4VcGskAQrkdii4vsvCCbz1aH67uEfri",
  "key3": "26ph1dTXURT8eT1E18EV4nMJYp9iN2U3pVFkngkqLZrd8F3PcpCwDt17A3oe4qZEYkaNyGJKQr55oxGbGgFasjBz",
  "key4": "fXQreuxkm85yj4Pib2Z8FMYkCFPTwkeGBuW6uQWNZjEzhVNDDWZVTkKhYJ9RNxHK6iMr9wEX89LiYERzikfHKrN",
  "key5": "5wjHgVoeHAG5z8XVVLSha9gpYiszgmkzMide9PjUhqbAFUap5mgFf6VwS9b8WykKjHQkk6HYYYsvtzNPxv4devDX",
  "key6": "2UrDW88rjpMnkhaUkag5t39RBePVsCw6akBTF7truj2yjmFEVigp9PUkA1U6rPJmCYY8DHLu6ktRh6F6NadKpmUJ",
  "key7": "23FDCsGmgrA4bQd16fA4yPpGFiB2uphYDAgRWRhC18a4oDXd6ZVCCtJBKnQ8x5Lruj3KRrfgreNRQLnyR8FLn4v3",
  "key8": "5y2bVV4HJqM42FvXEqSmhJzJKBH56SNJT4GL3wuuGGQ6GA9EcE9UvR6uFkbUXfc7YaqVuH7pRxP1yR4DR1u7k39o",
  "key9": "8wWUtykFJNKo3AKgKNnHr98kwXxCuGGfVVBn2VtoH2mgjgP4NNz1kmWnfcNt6neXtLBhTMBjT4SeW6HMghVB8s9",
  "key10": "3mi34rv5k5pnaQviC6Tx334uEsNt1cJWN5uHoGhE389zwRf8XAP75WVVUfnqP89xkNcED6aZHFQQAJxkLihb8m32",
  "key11": "42pq8YyE1Pwmp79y2X2e5aEeXa1Yv6s7bRZrDADHyet9Ywt3d5da75CwCPfxbNFoMhPep5PXobSVcUgjs8jSp9DN",
  "key12": "3ghwsByyGFdEbdyw2YyuS6xb2AFoYKH2H2om5tE9iqffB5PXHD4D6LtXdPBH7uKgQ3jFiShefbUJjZ9vTHBdpqdv",
  "key13": "46yXiJogygH95KDMAHvBdCKdjD2FG1cLK48o88BbsmxCjrH986QRA1TDpZtfyoiV8KUPVs5DveAea42SsSCfhLs7",
  "key14": "2a3A98FVam6kXqp5cwy9q837kuedB5bwvX2LjdrmDEsTLfGWSMxc1u8aWVJTDz2XT48q8NnJQ3wz2QCWnrkcjGDj",
  "key15": "5SstbsjcEsttbtJ576boxS7z55V7jcW2ZdEfGMvSPcevzLXNasARzr1wmBLH4NAVAh1LFJUP5E71oiBcXtcL5paB",
  "key16": "1CsB41oxXzxRNkqJR2nAW4T6ptf5LZYXkQKsaYMB3EfEP8USqCtPQZLqyaLP7ynMksbN8kE7FJ3JXD5FJwFaggM",
  "key17": "22bg7y87tvtwvRUVqJameGzxaQUBM6iZGtb93VkoUXPNQQqLWdamZaasBExQdjAqfgpuHpR5Pbc2HVahsK1x9quz",
  "key18": "5JcLxMBjkP4xS1X346TMZYYXXcp2g8YnqD9EdvGB4xJKyBTrCzuRvtSppC98Ziku4JGNKfT2GYitiw23t9Gz9JaM",
  "key19": "5CgWRtXqQHtQEEJfzhNn7CTmYQMxzCkXQT9xZfGgm7fM5PJbvg7km4td4qaw5VLaxWxkdm452C8nhWWykTzH1SwS",
  "key20": "5QpbNTRnVgKTNyMRRS7H8rqqaruBSHLhw7UHpHExgtcBJ5zT663HkvFDY6ys6jW5oQ4PL4ZjfV5uPBZC8TxvveN1",
  "key21": "3VwYZuB7BUEgV2ZQ6z2vm5BwdgxA8zFhBFar9QZAyP61otsEHvq6gmBPeP8f43dgWBGaCaQEUhvugRKGh1NpB2uX",
  "key22": "5cxSKbBZa3WcPz4cf2C5izEptgXMN9J8x3grsCMZyuqDxUXEv5oqquwgHTAoCwJWH1RVgFLR4ET6jXGaf3tWKtYc",
  "key23": "37SFS4NRt9fEybtpMHbAATVoZ3b5Gj1sCquuaurBU9txVHBuPBmopU1uCGJBBy4wzvFNR3fHJnZXo6WCiQQruTMn",
  "key24": "3R6roasNgtp9jbQFCpATz88eUwWf5gYovtgTnzoey4WYwM3367M9ZgBrtLZwRFsk2KxyVzkyehz7w3331iMzAyto",
  "key25": "2aAC21wTb14myjdBsuqJCULdLEjG6LWFS15yJEeuKabywgoy9GC54ix3Yt9A74MBVJx7tKAgdmtE4vPEMv8P983E",
  "key26": "gLALLRRsyXniSPAztytTERNUq8h8azTvQnf7ojrD9KPPkxcESm8oXWXkfRE7ATLUj5Cc5dezBtxmt3AHDJdRroR",
  "key27": "3a6Ka9ZoFPm1bxLd8gzrEG25QfwxAB3DUrD8hMyRbdYkougAR9UfgdTaQ4U6g2raJzDmcwMLJoTThLRZaA8miC6n",
  "key28": "ZwAJ2PbSKNqhmnzAJTrKcxn4qDd5hF5C63cSqAQJ9dy7ELNPbVFvzXzLG5Cs581JEqQdfpWGVucUMa1KsvhjvHK",
  "key29": "3iXVSxnoK9ZFhKmscchSis5aGCfdywcH2Kvb3NKBV7imAZEvUhNqYg1UXngP5sQYfDbVe2rt4YGuY9uuJY1hNTWA",
  "key30": "3bJkAbEEe5atbnsy5ML8tbPN3UN1f8ruDhj6aULEoSazKB4qz1Lh427aNKySoXPYn4zw2rBPyxgPNywaHsZxFoen",
  "key31": "jgSDvZB3UCk4i3xsbo6MsL5hn4YgHngMxGZgQ8MNN4GqJtNDcayi774ydEAJw5CFRmpu4zEt42s3QkCjqauhQiW",
  "key32": "5RyWPk2xgwqq98E2htyPYpvQJeyihdeEfgoSe8dug5B13mnLLw4Ao2HvYkqaGM1jmgGzJxujzvTFZ2nC57aH515R",
  "key33": "7HjL4wdC2nubKJY8P4HgfjmxDq5mNhjK5feHQaskHZCRMJj8NbFSQ1JhcwE8R9BVnRkpJxH1hXefyuuvqrDyhoG",
  "key34": "24jNd2H8zqDHgnTM9CBiRiGowt7SyMDQrYwu7Ju6yPq3q6Tw6djnrTgNdigLbAyYSSDLg6fnpKfpmpF2WPVEuVYX",
  "key35": "363szNBrsDreSguo5Y4JRc4fKbkbd7mhKjTVnpdyCwTAQPgF572vtFf7M74gXjike9Ug2DG2PLpHJFtNSmt9pEk9"
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
