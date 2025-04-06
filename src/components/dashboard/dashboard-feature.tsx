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
    "5AwxHroeodujWAU51CpqHe9pjjov4hdSuYCUs5wTSzLjp9swgeWs1sNJGuEn6keoQ29xpFFuhRQiwugCiyNTiTJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BUTLWjkkPBttdahZ99itt4tENraU3urTcqJMSakraRYk7BurCYNmYnnDwByxuAe5gjb6m6HccJhDrA6upVQW1MJ",
  "key1": "5ryRQUa687sLqrfYEWV2SvmZLZvFAYV87srad1VXhK1hsnxv52CjTuxcgUqdMqLCZXTkAGH4Z4Bht2pp463xHXQT",
  "key2": "5cGftrxJVwA6B4KLa7hanpDBSDsqtYKtdW31wN2MogE2bgJdQWX6e4RPGHURttXQdW89AW185aVFMvsTTdseB76u",
  "key3": "3x72zsDqmhHmCTD72SCfxnZE5hjFSjnTap9xsafYfYsb7PaySfAtFh1GbV13Gajr1Ruv93gV9YpXGr9gnwjivhNn",
  "key4": "3ro3qmfL2omgMSUjSJx5Vyb8Aa1qyhunQuebRUH7EUuKGRa3YbvWyMwBbpUWaBEmp4Gfx7VikhGDHWL2DfuyRijN",
  "key5": "5zbpvG8Td974ZKSENgRFpPBNa2NyCjEpbrTd5dUtfhcyT4vMMU8HA6oZxA5ujAo5M2BHmv3fyLPfXucX1qiBN7PV",
  "key6": "3WbWngRTV6YwAZicfraaocYhjEWKKLaaSaoczsvrcVuTGeQyysydt8GticuPFWohJ97UrZ5DCNA1NQtyeXJ4qmLh",
  "key7": "3XLGKTTczNLcBt9YbrjgL5tW9neqBaoeBX31BVUn6MYGDujBMe3uqgWSgtfE4JSp6xAfyBjxUedbXK8FFL2yvwtE",
  "key8": "4y1gXrq7yVCsnLPQFz7FZCp583Gk8TNxMN1pzoBZA4gmvcr1nf2cikV472MqX32kFspFtAxzoS9rTuvnoDG5Q4Md",
  "key9": "5mRhgTKPz2V2NNXAzePCXLqN3tSf2CB8D9zSA6XdMKDXPKDgxChqoqhwkvixg17Yv3qgj5FxSrsMZchTpuC49D6y",
  "key10": "5Ut1v71YFv323npKQuBpnT9faaG9UceaUaLNrP4H1fVWSrezn7QDLrJSBtYzfU3BJX1ZFSP1AbSYNqwqVUP9mtEv",
  "key11": "3yveJANhhZfVG1SpYF83rUthf97tCpyskeiVJDcAeUiEhcWoC6knS3gy3dtxJLBLB2T8LYcDCD5bRvwH5Xd48GNC",
  "key12": "2SNg2AWG3NcaML8pyznSvbUE4tpYv9JxhfCbnnGTpLXwbPbXANSZBUbBN5SCxMWNYyrxRxWNoBPTG5fWLi24i5Aj",
  "key13": "3hjzhczadHDYLrchmNq1pi4fVYETfrt7kuDtEBZim6ALhrBLdE2u5pLfVfhAoUsK8jpSKtW2ZczSmEbJf6hrM6a5",
  "key14": "4CK6Dkqnapx9X4h9U8vfj2ck6PhN11qdvExEptRK5QEHAkoKfrrdhAi7gzruA1TaFpYGA43GGg7tLy464K7jd5Ed",
  "key15": "4c5z9GV7Echxdv5x6ZapPaSYo2oRsCNdvaVXBAX8RmPhNp3XmL2WeXhexJByjx5UQqo5nqLpdCFJLWLq7WXdKkoo",
  "key16": "EjgAhx18QhTnRLg5xykXn1jFVj5UugEU9jYKh1jWCkv5Ge1WWnsvdmr1QautBPD8ihJwC9YPgDpEZMHgDNcDsNc",
  "key17": "opiy6qyAzYps1nw2B5wmbYs2NpsUReTVh8uerXAQFbPiTwsYbJioDudch8k3Y5gpeerhXoWuk2SW8vhUVyfcjcC",
  "key18": "2QV1h5tzpMK1ULY3mbFvvF7bmFvJWpdkPQUC4PHKQg7qzpcAcdt3SqR7b3YNbEJ7Hap2eXgAHJKXZe8cZQg7rMaB",
  "key19": "4mGZSiyrSJQ6HoKwDNGhDDXtmgdPW5oXL8ZraoCCByVfZYHhAVCU7kQhejf1yW1fMkViqN7A9q2pHL6nkjwjNdah",
  "key20": "bByaFgbrEMujy1bLmFvR9ayQMQ74151WtJkUnnHsSWZxg69VGen983eQoHJaLAn4ZSEQen5mv16ymazsarVPpzH",
  "key21": "EZMuswcbhCHLmXySNqmez8fn73yojk4krLW1fX4i1Y6Eg3ZU2ZBgukHeiZSVAf1kMee4D8b2ahz6cYs9yhrwxGF",
  "key22": "4cNzA6H2KRAST4DaeTtEUXC9w87NwSySU9romEBDcRpD8uz2Y3Roc6KZgEDJk7MnBHavswjTwkVXyXfxWBn3poei",
  "key23": "ie2ka68ZJxgdYMnVdJUreBdytvxynJeCZteM6UhDcDESJYL4EkVbtoCSDeQnN2esDXortxEFAwhXpsPkAfmyec4",
  "key24": "jac4R3dzAJe35w7ix9qEMXLVBNgqxS1cpurGTYyRNK41AsH1tdL9axYni1V1rYtjDNuQLtgcGDs1BK63GnL3mFR",
  "key25": "48AKi5DLtwoaeSQRszJw4Dbegjv6pDpchhWW537ZNARhaQhkTBv7TbsC6YoSZjK3afMecVUq5YezawENxQ9xV3Lz",
  "key26": "5DyJ6bz3t3VXFKc2FfvnZNH3YbC8i8vTyRo64MsFTLE2c8kHxVsCdhMZSwxTK3hYETRZbHQ7t2FmZV2eXaFapKF8",
  "key27": "5s6HYD8RAphCYUzR296kh24ebJQEBDi9wppCqcpVt4jBLoCvav7k9WojepN4h63EVX2WRnJsEu5s6VTxgfEnjVC",
  "key28": "52ooqwtDeUe5Ge5AZtwh2SFwxWFhCAw1VXsEdmaXFVTu6FGUzKCyLXwEgSeASfmd4aTD6geNSkYZtnrGcXSHpUv5",
  "key29": "2tmgp94WVEzEHnPs5H2FX9ZnARU5EHhVM38TGSaDxyGGgugssKZBA3n35fjhZ6ZCcnTeHjny7ZN3pj9r1ZGvkgJH",
  "key30": "5vt2JRpFPQHdRTMkfWimGHvub4zaN9ZPDk1xeCzQCasDZb6Ubtec8TnnHjmHRUgAX7q9iDBQg9U79D63TQ18vuYR",
  "key31": "Qsc6MBSZ8thaumjUmWEy81mGW1dYvuVL2jdALzVqtRyFRuiyNJiFgVYP6k9LB8kkjwHu7hmqQHk9Qc1VKPaaSqt",
  "key32": "LMiB44Pc6dbPUx4Wowc2RR3nxjFckz3sxpKWrKrQGsKqb9QBhyS1RpjksHgshkt6yBf19B2hBfP3bpPsPvXFUx3",
  "key33": "38L7m77s5LxKKvLdb7PEBSEFjxyGxjCnHHQBxJq2w3TqCXVnJueo62dN8hmXsfFTUpDM2zAw3HeR75V4god5u4Sk",
  "key34": "56Jdc1p7CTTQF6XFTdS32nxfcqzhtGbTEVYS6aB6JNffH6qGsLK76jgv13rmKYmGQkTmRNdeTiSNjQv8xq1k6NVb",
  "key35": "4xwC8mhYH7Zk1toX9ciWLRhRJGapo4FEgctzM9jLXGretccEQDH5dffvzAkn5x3Ra5vdiZBvMXp488nHpZUXNEgw",
  "key36": "9ZqCpZc1fyDZdcdBTGrqEonJeZWhNeFoo94MXJ5bEETnd7hXTxa6BWUPNvZBg39KNKfCfshNVJ6QgWgqu4Fcxe6",
  "key37": "3G88sCjFqVBKKAP7Apui9VnEZvU2UtxzXKRt2o32NBLKSYDYyNYWhwb6ryxHgtaQhDih96KrdTS6w8P3rNGZqkWE",
  "key38": "64oNUxzgopTz9gvuqqwzokbaEaTHxwJfTcRC9EF5RKYs5qSD1WKF4dLBPev498YTykG3XWN4pdWYfgvoRKk2ptLa",
  "key39": "Sg76ovMDT5t91aPDJPohQsapwvn1DsWtDpjKHGFizYbwZHPLeRGVxa2NnSNHozGH3tpqw8x3ySr4Sk68fMMhdoB",
  "key40": "MqWrYng2FMRaxbqnZBWzDuXJkMo5smQWoZq39J2euXbCugNfty6jRyPPDbqUL4Kbhvxve7pR48Z6Ku24aYWpifb",
  "key41": "4sUcoF2eXuPm2Wq84zg6BsSmMtek3JCJ7NXXQ7fGuoAN9srBdjgY8e13rp6ynFwPb8rGZvV8wvGvdpp2dhwu8zSm",
  "key42": "3rBqhCxAzBzvzJKV6GNgKsKXweJhqvMcFBM1p5E1YdotzPuRBy3pQT8VspnCu7pgGMg4MoS35fpz9EbSYsFH35Ew",
  "key43": "5LhfvABJeTyq2zLQAWZfzZ1kuSdAK1WojUBMwUuCcL2kJNSfv41oaatbGnuZ9vGX9kuHxQsn6A8cqAbTvppMxLYr",
  "key44": "pDR34EDsppygyj55Qm2qZN3Dog3Ryo4z6qULLBtz1r9jq7D7fAvZD3XTqGJj4mVpVbsYasqdcPcmZZ6E5LTB3N5",
  "key45": "45zH6bsv2raX1PiRhpUA8oJCPZimkewEfXt4Dgn5SSsWA324tbj1bKagfti9qpr5snSqkDFj5ntsKhtvEcF7G4D7",
  "key46": "4Et6dAqxQayB9FERvtYd2w1HQtLxkPnQDirCa9CNSf4cQLjeUCnrjcWhKByizwK1YYhwP1Nh9x3WzbphgF1Q4jiA",
  "key47": "4TiHxCy9wn9UHyAvS1ynid94ReyNCHkfmcHa346B1H5SPQnQXA2FiZVTgqpHYXXCQS43TKSNHMgCCQmWJuUXdNP5",
  "key48": "5dAebtvRB94SaE4SYi8XHVw9JJA4Kra4AK38i7UpMQKeAqAR9rLqBcrFR1a8hJaiR8gFQv74jY5VsnT7uTrSrLw7"
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
