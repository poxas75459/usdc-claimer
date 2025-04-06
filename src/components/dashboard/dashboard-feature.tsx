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
    "3rz4yACwAKPa7J2iRoLeNQ4eUZo6KgYmHoBDAJv2q9d16QP5pLe1dPhN2ehcbyWPX8H7qZHvfETeqvFfbDTGCDqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y2ryhtBiwbsYAf6eTwZHYGzrEBPbUhghnLHdVnhrjC9r8kaeLxNuNzPoWtz2hmbF5LMRSpMcqrw3DBiaTWVUwEC",
  "key1": "4SZdHFWrbF7EU9Wfaf6V1oi255ARYwZkuND36ay8Rupnf4QLg5ijxGkLSfuB3pfi8Y1m6YdKsDFCDCKFft6ZvUP5",
  "key2": "2xMHTtBgEXbFfPxN2UyMjPYS8ND6N3kKhV6DiGy1cfXQKtL45Bth2A2xMLotctQynYizQZNVNbkV3CKtY4UDXKXV",
  "key3": "v7kasg6doMNX4z1SRWV7pMotNGwgXDteK2YArzRgcZsPuYX6FApoQ1q5B95aX3g2T21FBXa7qpuF2DMpewdPWe8",
  "key4": "61oEPc5wRJHQ4ALEDJCRSrzccEJDdAPwLpXYJ6wHo9v8abGjSLfn3fEFx4E3pxzcaA12VSLG1VyEnXTmj9gcEHjy",
  "key5": "2ndvBNYt88ArrUJFT9MofPRRJQTyASzpttxDqHBRvurBhySZnsKBGrKVRZGfyvFGiUy5QUVe6PpWgJ9ifs7Kijp4",
  "key6": "ChdRYGWuEzwafqJufZ6MThMXPkCwsKKZfrrRUq2XnbGtCBdyF9p4GD6LVAyRuZXSn15j8qtVB4MvQKNKmxMXg7Z",
  "key7": "3AhAUuhGGmfTsnpFbWYzRZ24jJZMAknHvpjk8JwznHPGZSmDjQGg6pNz2TFCJAgcdjdNJ9NtKfnEb6L5VhU1ausB",
  "key8": "qPAhteAj3cNumbEdLvkY4L2yCxZntwpRA2BLBhkPkURMT8vNKKFqyX71jcjfK2y9VDBCseAXKH5qZnbLaKoCChh",
  "key9": "2jiytetVPR9RaxuEaBJ4cstMEW45NqSJ3VffiZwwqiJBzpuxwogURRE1wTNDpHeYqDt8VX2WHdXVmnqjnVezu91R",
  "key10": "5SkbTNc9ZVhL595xhDSJJNhaW15NrpmzwTEReE1vdokKUU8wzL9UuMMmKYDxrngFFwhbu164FDU2WWYhwJNqQHuN",
  "key11": "3AZZ2otsWV9ieWYka9cKmom9hPafXKfonzg9pKQto2iG3gS1RyAk9XmU3Eh3MmdKz3syvA9B1e5ASxisvV4gQwca",
  "key12": "5tKgb1ezaYESPDfnyKDosQi6t8mHuxUfmwZqZFNGhG3z75A225BYrJSQoyiFf7jLqj6FYAKUJwJSrsT4nrNLHYvX",
  "key13": "5FSnJJHZx5HQTLhp1yK7winioXVk8hQqmWLfqk75FYKX6FxBvjwnTNyWNHhdVQNhUqt76ckVohux9F2Tdpj3wFmN",
  "key14": "LnAjEEpiXkq17GCmWuxtxVPHoFxNDs1JnQU9SGuDuECJzFyywjnhp1ct9cK7yhh189FGUmyn9jTv6CGAXaFx1VX",
  "key15": "vhaA5ycWVmosUjt7noai1ZGR9pGDnPoShSK2js9ZsmN83vRsCkF3ShT84tfoDWrQjr7S7ERdxpKD7sRNum6LcYz",
  "key16": "3NZ9FyzhYTfXCjYi8y6VjxaJARaRB6haN8qKs4bHjfe6DUcXE25d4FZQKUJQdCmLPespUWpxQCAY9Zzq88vo7eUA",
  "key17": "4ZfCVwP4cEiQtbockgS5vjAkSqYPEhtpY2CJ7QJu9ZeTSxWPYPVhMXJtrpyJLDBrCLDmoXtRmftEhKYFq5wSMWBD",
  "key18": "W6uVraC5aWXJuymwUqQ19Wh18F9n2LCqiG9QTt6pcXwbNRDFcR9fdbMWE2PEnMPDBUgegTUJ2ZHemrMb3YMKPhu",
  "key19": "4wzNdD9jru6YG1ygyKtiTXNT1SmoxhQdQyABaudJhmLwAcYN3kLdizaBWytBRxkSzfyyuiLvhWQHmHRuqoeWa1Eg",
  "key20": "3fR1DqYKpQ1GxjWoYQUR3VmTcZwrSjt5zBbaXSNoHC59SLWZb2wwnawz7pzFpivQ6f68To9hxxdx4QU3uWUp4jhy",
  "key21": "49SXQvfpyoyeH5c6JPduBT2Cfvmc9QhWLSqhUaxSysNTGqzQcG5MHKybYHyc5eqLwLejRNUYhj92GgXzVocqomR",
  "key22": "3SswsEfJSLmsXw1toiH3eTC6cvme4nnzkF6GdaUzvoxzdanHujgyaop92DdCeg2YcK4Pgs37KG92UWfvKRaCmpWB",
  "key23": "1Szc1RXbyyY8zvxSmBsajszx7ekHHvkBq1UB1A7eJr9sY5k538aZNB1XxuJ5Qo5HAkK16j6349FGSkJQGx78UAJ",
  "key24": "5K8zG1eeJtRNj6sHeDXs3zjrpx2JQrSk8grHDe1q3gMgRHEdbjnmJCbjywXtiZkGHZfD8QjXimWiLspP5XRaDH5",
  "key25": "4DZBQT2hCzjWex4PuUq8d9HdbP9keMtxkmtRXFa9F6dghdm3TfwZ4WNzoPYMUS3GDd4w2avHa8UUSLfmv6c5wz85",
  "key26": "5KbY2mqCsWT5z5riD7qAeWbafcGbtvWdzmgnNPGrUKvThrYU4qZ5rDd571V1y2JaPk57oLJh2yf2SZc1iUpB8Gar",
  "key27": "5HvfJ2vn45PdyKa6Cof7oCCV9cmFsdpbFYgDZRqF1FCi8qpVeyVtrUDkbF1mAqsVMHMTKttCnucTt2U3PFpEDqMF",
  "key28": "2iZNKaQA4Z3QCsSd3B7Tpoq2jB9psk1RywxpoGXfEvwzGNRKtisASeGPYuG64DtA5J3G4FrRmdTLVbsnac6bz6JX",
  "key29": "2J3nnJ4oNAY626L2BweUgkYZ9xVVnzfT2UgNU29F1MPRLeLPyZ9MaYDmJmULQQUrCxAK5s4Tyx6tKK7QyQZ7NuxS",
  "key30": "3VkeV4pXN2wUEzRz8ct1Sjr165rQ1waix7qqey3LSdExMxPYan3uZyDzD1qEpCNijh49NdkUwioEE8Y7fyraHEcz",
  "key31": "3LMZa598RpRg6e4nY5cdUs4XwzBs1KdAjd3qw6qsmaSf77Rcu23mowbCiLcUG5FKXJHN4cL2dGMqKVog6onWTNKp",
  "key32": "387d1NY8UC1n9wMB9Ga9yADhrwKJFrKd6CM6fMmA1VQRTnbzP2W3rBnYaaR9RjTrB1adtmENeyuK1GqFppLZz3Z1",
  "key33": "3JxV3bVKncdSYMq3P5fNhDeKNBe7bouNaHG4hetGy1XVB14WPo9ggy7yxJysw43gjvodv5VczKu4BFNckGCw8H5H",
  "key34": "3m9E3Tx4Hc5h1z8kbqKrPvS6yNrwHNfaa4AicPz7oq8eCzk7RJbS6Hk3YASHrmAcX3Zy84MoKGaRrR4LaAZNoTC6",
  "key35": "4SGuTCwGKHhHrkuKaLK7hXH83LTffAiYvCdqab54oY5cfpAu2ML8VTUUFNHP9L9wjyWGZoexepcB5j1ZyGu8MyvS",
  "key36": "rvT5BC4dR1ErUY2tnvErA2mNsC962MfwajbBmdMrxNrM77e6j8upDiZzxkr2e5AEBPud9nQAv17qRRRL6sQdujN",
  "key37": "4fEzH19PYsMtW8vKaTZx3AazNfmiVozW6FaKTf2J6kDmE5mG4EAnz4qbzLQhADuCRRtr8f7BkmSJURzxZVE9BEwd",
  "key38": "SFZD8zh7MvNMe7gHUm8p3KDZbbieiYE8qVkDuk77qd25t98jT8FKThoiwJX5qFXEuQBAK6ahdV6jEDEzJibZZ6r",
  "key39": "5mwsgkqYuPRoNdi9cvcwzx9jRNovvwCgG6ZcK4xREjSeYEg82tzV7MouJM3cf51evh1j3VjuxijkeRmeKZfTproz",
  "key40": "5itYcq6webZq45Hxujec7BuEUrS4k2vHL9hG5ujzjmrAbGhS4Njktp5rVQySYXWEpgDLQwEmt5xSBTGgNBC6g8Q6"
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
