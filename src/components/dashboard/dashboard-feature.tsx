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
    "2jLtECgMEH2vLjC827wtV3W3gacwSNspP6n4tBKhk8hfw9YTY1FzDGJCRYvMsEk5jcbrhewcDZHSpLBVUQ7rWJXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FZSzhfepbHonokv9BERWVUa9JJUJPe5GyroffZFjvDF4A5tWxjzLQAnbEzpQwKysURv96PSQ4fbk8eEUMgPVSVY",
  "key1": "46XDaGqh6DZ7VSebnXB7zaMF53rd1UzPtEJYKDwMNmPsBVynxqye6RJLkwEhP6mq4SSvRHx5s6rtyj5vfpqQ7UNN",
  "key2": "or35MPSiPxAc5tR2kchsrGWxSgfLzzrF4ZJ1z2Vhvoc8WDsXATKfh26PdSbDi7weCpmRgnCqpDUe9fArKRUKhLx",
  "key3": "4RdWJVwnTbwZx1EP2QbzNJDghd7heFqsEGqs1azreT3B4gLPeNYHmTEfqbnB7PUPaTea7bhjuvMKx51YnCPHRbj7",
  "key4": "5ToWJRdPbJLkLU5okDvYiseCfXH1qoY4VgheF6AE4hiAF3iygyvGjomuaa2Jw6c19GTUdRacHZ86YFvaJMUEcx32",
  "key5": "94gDqXPZDLQNvruYtHNE5H2uGVrb4x4LZNReNBz71BsPjQYXCTUBHGDBJudJ2GNaJhHpWHUamjFjSZJwF3unLS3",
  "key6": "5ULwEfCCvdrBgf3TvuvNuUSU6AUdnkUxhRaEQ2B25o57VGWtr8r5QNkMQYeSUj7mr5HGUe43LizyasLtFTh8zeT9",
  "key7": "3wDT198yQof1KfEwUh1RhrVMtnMeVGFJGYfdXMCtXEEgC7RPBo7a3NDh8L9fZSCZVjVgweodYYihJfLK4E2HVYcd",
  "key8": "A2nvu7oEs4t44JCBCmo78PCbzPcyzJXpUzXj3Wqvno1g5PSYYpqQP5FhNjQSjuHvLaqGhWpnGrCoRBQ3LA8Rykq",
  "key9": "LBiV71XYshoRw6k17W9zJjFY4XekKyRWEmSaHs8kHUtQUvYYZU8qfNnm2UgdqnVDqiJnAxo6fAuWTWb8x6DkR1n",
  "key10": "pT5hwvJhkPtVfSnFLunYkWTzjJDwRxskQor4uVPhUJjBkkURd5GjfSu9v9NqA6hiKHBNmVw1waeJfCfq2hAbcs5",
  "key11": "5kHUCtucUaYavB66wMGEobnW8jUvQ377vw3iZZ67DZLhfXTw1HrPWHyHfjCMqECib5mnuMZcvaTVFHM8vfrGKMwG",
  "key12": "2YptpLkJb7vtUdLWs6CnuphKHgi9QazayQYJurAJKhKnQtRwuMzf6FiHcGG8SuY9CJBkinCfnjrgMjzbdCz8vpNL",
  "key13": "yMswY4H8HowYLnEaCDsYQ917aqMbJ6yboHgCUmZq3JQHvrkwt43ekcHQjM2ncBM81YEEu9TLgWUBRUZcvQMjiuZ",
  "key14": "5CNjErX8oesWr4iFR7xTAAxLdrZ3T3eydGUs74NsLNV9grF2x2PtARnjTUEWTTJGXpXkxK6rYte44c335TLJt4nM",
  "key15": "3nKd7AvfHDkKXhUBhCDXnJM2iFQrbDZDAUWrikjHFoRpHR6zh1XJPWotMaEHt4Hjc7aWQZeNGqHMjtjy3q1FxaZi",
  "key16": "3A9CmbkkS8YGUXictgE5uKp8nrJwBQFdAR4LwApCMNV2KBGZrb1jo9ZuxufVB6VZwQUh1N27JUpEFmzEa64HK1Qn",
  "key17": "5W2as2B5J6WWG9hazKg6VXcgMMDvhcy5Gk4JJWtrXCLpAWF9dZtvAwS6oupvRvkir1RCzAadwtx3Xw774VVw8SM3",
  "key18": "3VLZyMwz7KbwuEgzXkLJqVvCbbSQQHzkdjFxYhnkV3bWq2QfCRcgz9kkJvtBbupNmdhk9ZuhWmo6wg5rWXh14Cud",
  "key19": "4wPXXERMXmPZE1FPAorszeSVBzocXsA1Rs5geeNXMDfbxH2dThESSotqkHYiDRCsSxH91hGtHZvJGHCFt7YkHcnv",
  "key20": "GvqmMSaGbYqehVBxHSCuUtQ5zNu41DnBQtF6QZ8AKpBmmxCs5Wx1DoaFSvhZL4Ukans6jz2rNVjntxDRiKQwudE",
  "key21": "5TvCmhVV4EG7WZXTGnco335bMZKtyHxrwAXpYpuKDoPy4zeDe1fv6cgMU4svarsxpYTKGy8Lv1xXyntU2EsjQTXN",
  "key22": "4HYRqzseEySgDLUBkmUqTQCjRnnoDsQoby2bNjXKBrHHJzhLQTVPWkDeSaZUCs2fxCqQrByNXYG6xH94tvFCzgmM",
  "key23": "5wCT4HpropindbL2TkDqwY2zDs1psZarscMNK3KwFNoAfqeL4ymLGZdawyxUNsaAAc4G7sD66vuJD9Pw3o25govp",
  "key24": "XGH17kCNhgVN519uoBnYHLFiTDenyt2qwqMYzmePVcWC9gffLwrZynyscGrLRznp6NXx7QVjShzi6mw6CvHgqGb",
  "key25": "57Y9Pg959rw6PJKiXaXvw7quLsygFqPyoKVnjUee5CDtZxfRykcHQuzrNiHcpfBBprPAM1VhSmQWsDFEqFuEVY5y",
  "key26": "2uQErq5VkNwNWb64MPu79RMH5SGNnpadacttUgRDe8Z4nWFuYK8noJaHvKcGZVNE7uYfEqJnZo6Z4wbk6LH3z3Sz",
  "key27": "99N95agNYsvFFYjPv1khH9gG2nDvuewSqjm4jPkLMtZWja3vH7wMJj1q5e6RZoympN1tmhjcDbsusGrJGFZPMJZ",
  "key28": "36T4yHFiBEB7GuJjRtQBShuq65i5bmF8g5RyvH6dmoTZsT2h7ZKQjoSwBJkqTW9wXitHpiSxxnd7ULxtJefgY9hm",
  "key29": "4SrbKyS4s7WULvfU5aUkbitaW9wwPq8ChbJvgUbPHK59w7bDhEVtpn8UUBvLQyvyqcJEJVGurhYdcL81LCBb8sPn",
  "key30": "2BtKXBu84TcLffsqUuqY7qPFUXfbjYC6XWEJWVsw3MN7Hcdx2Yf7VhTrGZ2kAeQN4A6vmmkPB26JWAus72AQ7arr",
  "key31": "3GktKpbno6X6b6XQvdZjBQYpxsQAYA1vrSe12Kb7VmZ8mj6uUnj87QmWC8xwah2SeDsEfVzu8ceymkVBgiEtEJUe",
  "key32": "5mGmUnLuwRs1kfCTsJ1NY1tgXeLBYXYSmyz78uZRwnkSQEb1GFyXyZ1u1cwPrDpeMB6Ak5kNEgxYAy5cq21ttgcq",
  "key33": "5zMdeYXvF2vwPLZ3WqAba5NarkpHskfy4zuQMfo5gYNS9wWQpNZo2r879nSXTuJ8RYLKDDLPJAcqHgZ9efEm7Ftf",
  "key34": "35peU98kcBgDLAjWDNRAnqoAiQWQT5S51aEau6geqYBqLrpbwvgoCmXetG1hfYUgJnyGZKc8UdAegaQaLYkUc85A",
  "key35": "3WmpdXAdHDjJ5zjMycFXFcmPX8HsqZeUqR2jokWNVnwKp5DDejKRQ78kccQyrKHicjy8zDzQhSYViF2aP2fGA5tx",
  "key36": "2s9rzx8VnNf7gTbKUEHb4XYppsmQieDgL4L2y3ey94w3MCUUUGDZVmaR7pRqhsWB4a7xphY3qKnH5pCnEjG4AfxX",
  "key37": "5TCrBMk4mkG9dRLjYjeu3teC4rsBDpCasSCcad99odF8DTYAurQa8ULBuf1cGsChNvmwvqYux8ZVW4mRDGDcEoxu",
  "key38": "2N3grznp43Ji8EH5LPEDdZQFKB2CN4mVHsPos5wVLw8GfsTDXUwQRBFR5BmagV2s7AtBwxAYUqwkRBpTqPcSAb3",
  "key39": "25Ug319QXMehV1e6vReJHRJaDKCLs6CToqQBcXcxSJHuPnu3ipiPvsfFSAgvLYYd47DpHsTMXHUtZJFQTAQgmWCc",
  "key40": "2giufB16p6MsoG1WiHLwJwJB3F6Z5k953Upn9Vep6RRd4iVUxLzt8THi21zb4PezJrdJt2r16hmxaEGbDBsS8boi",
  "key41": "3uF7UAvweVUWoQqX8BLxYxud4pdDjhmrDH6tyXqYmdu9iGj7M6J2M9vcWjKQ4vrgFn5PssrB2GzcN54RB3nZ8v1p",
  "key42": "3Yp2VBEZVBvippNxzGW661R6kUfsQTfoPTx5AAXFcJJrw7EuUBGTYnPUPqFd8QTJ8N6ctDqkr2CXFTdFTP5BgGgf",
  "key43": "4oGYNc9E9nx3u8QdoYgm6VDK5vDxcmRSLbmXTVQSJdfcsA1N854gprrn8gzDYTYLQGo31iMvhTMMa1a4QiUsRvZF"
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
