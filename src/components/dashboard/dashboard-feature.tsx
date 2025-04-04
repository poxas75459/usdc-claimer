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
    "3DcAErm2joX1FWeRMaJk1EE7TYiX7GYnGehqzuSrUX2RnG1xjwDJAxR5LY33N3uyzL9npMZe9DZi8fC3Vt2bWezd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EghSmjxb82dKZxodAon5g8WWGbRoNweUgJD57z3cMNtaEPpkq8pDR6Rk8rEE43EbC2isYfYtir7PAZAuhkzZ3m4",
  "key1": "2BDqEXcMK2Z5GwMLn3BvNyEK7epyyMZs4xQw2NJ5kw2M6oeJDYzgtpBTxPMc2mKQWSgeNBx7pKpVnJejJnZne7Z7",
  "key2": "Z2CuPWeUzhXw4u3d9sH19oaTC8j8z5bRWTyh8hBEUNKtsys4AhFwhfWaxaajcMGvK5jev4c2pLcLP8ARELpjLtK",
  "key3": "Yef3xXsUQBybEHs7tKc8sWhNL2cfjUtevsyqsAJzE3fRLUu148nPnwcq4HRWUcaWcxMUww5VXBsq9mAv3WEzm74",
  "key4": "oV5wsTmkCBJw5FeR3iSmjPQgc115YkDCSZ7C5qQMn1CY32nsYJEGj4jT9W9ReBVnadZk4TewspJXDZPTsUeqHBe",
  "key5": "YkNL4U68tJgDSJmqxxxcgeWSeyHqPWbWU2Joo9LEG6pLpFNcu9dJLmM3cWqN5nxGNYcujBpUvYgF5FafVwj4D55",
  "key6": "35GQeuZ8eKn1RqF3uhgc2o3gt8y8pgDPaskrL9fyWYTKPgVoWU5pFYqYqiwYvDaJ4tWzYnarhBuM3xu3CAebUhPk",
  "key7": "D7d3CxRSayMvoQdDbSx7A3JCWdsX5YqxVY5uXA1haVauNz1dnJNi9icbMytyQgppMVV2ax8zv6wzf71JVWVd27s",
  "key8": "2aqTRSSH4W2viL1g9YCmXiSYsNkAjszwEFTDqBEkLzwuAMouamWYYtwkGwq8BNAPPWGMbKNQaK6fDjkwcd5nYJJe",
  "key9": "5PMzXRW3XvhacwoL4P3nYcY22kWXsV57KWwEXtmk29BvAEAbcZLYVMDG8aY1GofzChtTX9tbAjdrzn4EtXMJ2NrE",
  "key10": "2VJyKBk2GGx9po8yknJAFGpfaSc6QZNvTdsVqkNkdYJP4gv3P2UXA4ZHoNhh3PK19d3Yi9yPHEGbRqeFwJNV4q2d",
  "key11": "tvMrxfGbPQEUKwzMWByYgvHwQdXGGNwHYJEh3CPHMGiTWFbqYaFLVASwTjqpmgyHehrV2KrXyZL4ve5TcHysbyp",
  "key12": "2Z9ZWsPCfXqbryUyPv8PBzKEjQRwyvgJFozZMmLUVwC6PQpETbB2LNGyYWeZGXGrhb8zYdTd1TES86TALLhppr9w",
  "key13": "DVKqNiPu2AiV88LKd8fwWNRGbZZT8AZPzyDAiD8PjgqCw1ymuREZrtND8uVmeH3xd1c8AWY8Fr1nwFYSiziL4Do",
  "key14": "3zSPuv33jPd88t3yfPG5o8aktibWeV5ksJcZ1X37GCLEyZuqSdKjrVrKaLVkiQBLEeu8ZGftudeqTQcywupfvn4e",
  "key15": "3pQUfq3V5CKteLeYAKjKxAacN2jFBVwtucjqRhMZnWmB5esq23f27izgup3uBHiG3834w8M3ioTC7zadUfa4Mrer",
  "key16": "39kF387quirJx4ntCCi78NuJScm1u5c8KjpGH7WosUsXA4vqyBtjaH3Ec1RTwLjwYB82yZ6BR2kdm4bU8Rj2kwze",
  "key17": "67AkeCYPhCVHsZAFpXxxdJqC4RYZgfQ4PDZVbwWBwpBgpuGihNi1GCY68fd3LsTURbzScd7ftFCYyf86yCAC411P",
  "key18": "e4oiZ72mczrCqkLnswvHzB6JnxADcy1oe379DQnQmGxy2PhJgZdmdVJtN5ddTq5VPztzt4Bnqgqw4D7XCHeHU3M",
  "key19": "2aVVjCT5ZYK71nXgo7773yEEXuSYaHTdAyBjTCYHkTGZgG8kngnkHxYQu32PaStzWaMRnkF38M3TDLcT9gquipoG",
  "key20": "4uLJDF8ctcqWsVqfaje4YYU7YTUKxkjfqTnKEuAeQsp83wDktCACVbfnK9WeCj7focmyD478n8FfMh3qDLWx76Ca",
  "key21": "3SVZdQREz86TzNJbR4nLvc4DyHmB3yssMW7Fz6qr7mzkYrqeoQnzYGXmsSciF4v31dBoCeyV1pskqpQ78JuFNvtY",
  "key22": "s9DqFTK49kFvNg5UTLnLCsFASnaWdcWE1S51giHoAjRwf5g793qNC2StNUhLR6qyTzBNP914QZjZgjVABNYHed6",
  "key23": "59TngNnxwo1txTThDFJM9SbHna7wFiGeCQ5drCa4q5CwWULxuyGWg6jE5wPWWgmoPJBARC7hsZT15qz9smSzbnrj",
  "key24": "2MDXqfhzRufm2nFSuP3w8LpmY45ynnsgfTayNS6Fq8sXH2H73z5mEG1a1gKQ7ComAe5TD6ZaWhEM7YSeaTmAeQyW",
  "key25": "dukTcDQ34faJ7TpxJ71Nu2wk6TxAfrwaavgDbvsibF9eLsd6FEjQw6AmG6juwJvCeBN5QYjXbB3p1bQRjeNRXTd",
  "key26": "iHJAh13Yyik6CokgA998bkkorxHbsZg3sRSLrUHKSJV7tD8gMR2fj1kyHKutLrEtCtzhZwbqLM8BSgFw4ykZPZM",
  "key27": "2omZmXpsaK4d7qhuDoVt7VxkH3caJ5McnpkVpqzC6sfcEbUxPZKDcDv5sKbi7wYGqgELemUUh2k8ergz4wkb8CnH",
  "key28": "4v4bWmVx46zvhhvQcrxPFAhwTagHizorEpHdXhJN5A8Sk4Kw6dzkeSctCiZeFmBu4tJmyWiJH2eHPQCc9562GGqG",
  "key29": "3g7tr9Pe2QXFJxCefZZT4ogQTakYKdsfBavUqpWfXTegWBr68epzejJwtdTonEukUtUaEBw6Ysf4dce9ZL44r26Q",
  "key30": "4w7L6GQHoDPUM24fuDHCHbo9YC1wngbE2qx3ADteNfHbWfBouzSz8kQz9NL69fNtYCD73rvcUQfCNSLiXs3D6vj6",
  "key31": "2rharjB5buM2KfX2o5j9pLFLosBi8jWrkHoZk1ecACGifr2vfR8BMkuLVCtkgDVzKZY4AwyEyBjgLwCGsv2Xub6Q",
  "key32": "3QvWLBdoiTDhGsFBn7cMZMLVqF7AYmygk5J82Px6L9KVct2etVndj4xmxHJABpaspnjKBtt7xxzC2p91H2vdfWPm",
  "key33": "57PSQcVzofr3Efc82L6wtmKqRsDUSV4GTXTaCM7bAc4oFwAPQdAZwod3qvduM6PZgK3V2nrdQw5StRybvnWuBp7p",
  "key34": "5JzGB4WkKkcpHrjKzykKAUTw1H9zFbZJ9msw8fnkDXdjTq558xodBy3ZkdWM2BFaZRWfaAwiofLjFPHD8YzEPx1W",
  "key35": "YSBrmpXRa7YDqGDFHpfGr3AJjZ4MKiz2BUN3L1K6G7n331VMuJWx3s9PkK3WehHjvcdHsLjsGC5e9NQ3JzHSsyw",
  "key36": "2oUqyuqpHsVf5s8xYT5nDKJFcr2qGb6TWqwa5yaEaFjBBUwHD1yjzQcUqKTm3STYAhNqUEUHLx4gT8SkCF2iVb4v",
  "key37": "2a7BPQgTvDxiqBu1TdrSewxsFWbvxVx5PtxtYngCWUjPuqTGssoCWpHS9y88eJE8f1hQ1jZrZCMcZDJ2GzpZmtFQ",
  "key38": "2iupdhu28nS75JviSpq4u6SZPFeWk9LKpnGsJJbDzGLn7D2pkxSvSqNGgAHABvUk5kJdTYevieLAobHFpZCdydrL",
  "key39": "4L2oHWiUdk1ztj6FHDQtjp9BqaFUgVcZGVWR9yfT2WEXWcQmywghWUyPp22ojkX4zGnoS7NqjCrXVmgSsXNmvHwj",
  "key40": "4DWFpKrwzmyoppgqGsEfeEZ7JTkUc7MKZacdHndhWBpCaTaLevjisnU4gB6ab1BC4rZmkQnaBcRY582CGneDiPyF",
  "key41": "248NywmR84LS4kSafmfk2c3jUnjfrwyw1bcEUK1Lp24nqz2XgHGFm2tS9H7F5cTgbCpinCV6Mvxh9xVQS2W4iVbK",
  "key42": "45iwJLoBZStsAMbXMvhLbctoxaSYewCm4xjj4caopmbgJmKjKNCkHbvFKXREusQwFLFjQzvWXoqqTcDQx3x3SEnK",
  "key43": "PgXwKofuw971s6QsQfh6byvBX4vUfLwtjqgeB3vRH496Tu99WJJiCN1XVqUuLbw9W5dnhc5pEBbLHp8NNTj3YKS",
  "key44": "2A5AE4r1SRd8Vv1GMdDCKpasuH4XgDjwFWUoU6RWjAVn3rGCgrJj3PzRgbF6ReE5deuGNXVd6V45agiGzbYwx8nJ",
  "key45": "5Eu2FQaddkr7jdNaR1x5PcQNW4HbFZP93HkccuBaqAxw77YXV5155vQQAp6ZXedojyPAAehp5TRWvK24LD72WNE",
  "key46": "op4xmK7MdQdqksWbDtvyw5FEd224M7rGtaAmcYxNxdePKogEvvQKMTuxXfjuFNxvyTKQAAwW3EUXjCan7JSMjnk"
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
