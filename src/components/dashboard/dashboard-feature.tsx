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
    "5roZJEojS8AEyXvVtJWV7Y4pKdtNksafuah22izBWzjYqSuo5mQGqtRVEDEf9cEhZn8Yx4pcNozDpW216cp2kASJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZYribKyUL7RGBUdBNbFrA68SfNCZFip2t9P9M5c2kx9PgP25Q4ERzqKHjNyYaAWueQtjBK3vjkikmEHfaULELeV",
  "key1": "5uUpJAfFPfc9RTc6c643Pbw2WKU5qqoTBQnWgemrKUsgYDnhHGMUhdSnQREaARv9xkm5xegmMVXbW2dscqxJoDA",
  "key2": "4PNNS4gEbUXYaX87azRrRBVvyvd8BNfLX5RDTfMdCgTqkW5P1rCTb3tn3ZpY8V5GDQzjyXUetRQbHNXyNAvNVTHK",
  "key3": "ypCy7sfJizL87uMNYJcws8eXebveBaucr9WLDWAs4UZxQQnE4gtXrCZsanjtNWr3rShs33e8qYynYzb6o4PU65N",
  "key4": "5NqWxxsaCJa8rg4U9G4PwwP5dxs8P1j9cGRnijgxoiwuVyhgCHVYoYm93MjGNYKf1gFcM4Bw1NR7psntUqruy9dL",
  "key5": "4Rqw8uE6D76ga1rQxxqeDhK1jejjPhjo3FK7aQQDvV7rf9BqXyX43zR8R7N7PRE7YUyG3T7nNVAHuWULSReTAC5u",
  "key6": "43G68Rfo7S7vjWxyubQEeHeWoT99FJVhv8NCNChLYx4VyhW9ySnqNg3hFVUeyu716ggKBowqGZ6wJHoDjWXXRgW9",
  "key7": "eWB1jXuVrGRyh98oomDmv3yj54JiE8URmDgYjy3XpQA3jqFrpmhTAxz5vRSeZQoPtVhSoEJ7QJcu6TfZqvFTm7P",
  "key8": "2ZZGrt4kYhTdtT98EY8kbFVnJLL1FrVt6kbXSpUfC5sSpBeR2WxnUntJXW4BCCmZyWTz4DAFaajPBn2JrSMorRxG",
  "key9": "51QDzezn8UjTDtzKKRBkZb3gXXGB5dTbQvYwfRR3AhYKoCo5jha99ShpMQGqMsAEZbYh78TX7GyjGJBPT5s9FzCd",
  "key10": "2aMPEmaY7h989FcxEogtLvtLiUX9EG5Xman4Kk9uLpWtjMiDNCXBhN4H6TfirxDG8CyrMZ7xPc9AUd3duME5oEKb",
  "key11": "62m8kdy6uxr88djXUeisZVLYWui2bi1CvbR2UCh54tW6LRJLRwrjXyN5Rjn8xUPBAvVW27wmSEbUjpZmYGSTJuE6",
  "key12": "2377p7Q3zjaFNCocLHgCrYt5rcN4VGE9GeS9WN5GDehfMnaW74yG7Rgau53ub1ZR6EhJaF9Dm4QYXeBT1UucgHjR",
  "key13": "5EWUc6reRc7QW9E8osmFQSXdFjHQbvwtoPRvtqhf6uq5eaGPhdcdj4fpF7CaTUXB3dKhMc22AJBUq7cegjeXPZuK",
  "key14": "22Sufpzuuqr27hXa8KaA4Nk3TbVERiKj6C3Ap8RW9nwBwCHZ22d8UCeqRhuhhvVgJ4wNzwVsPQQk8qDjAgHTmNfe",
  "key15": "gWjvdXjxHhaUsJdQC9gF5KzogMgezmpEX3DLfK8bRGSq8JwxgxGzsKfLbs5sEbASDkUBNKgxmmwDxx5b3stN3Ns",
  "key16": "3iUHmsr1q9SYKusbt42AtapAkke76iboFgBp1Z1wMcbLCXSAnHkrJkcwMhHhjBuzMT1VmsuJdqfGAe8PAEAfiY1r",
  "key17": "5QmRJ7GH3A1qGyKawHCqMWHwSNbCtvGLkdwJUwwBcyXGaetmgQFr3a1eNyEXvSB8kCfGpcPg296J3d1YnRACyMpX",
  "key18": "6izDzkma8ZhXZTXVqG3gTY4rhSmCQYwuzHhnEnzejbKahJeTZ9kS3sMKg2m4CjKnS2K2vRV65ab1unUc6RyM2cM",
  "key19": "1bLCsiyedeRKHx83sHoPobYqPQYEsZ4D36RVzeHt4PctFUh3nuARJCqU23Us5sBYJCMrUKVEf2s9PukLGE3FuUp",
  "key20": "246Hhgd3nYkxSC4oFvBmj2sCHFYL44apV8ckDq9ojQMgVo9gTGaRTcqbXqby7w5F1svSYURSc8VH1BzAFQRN3ifu",
  "key21": "2t8NpZYthSFBNbZkNRSU3U5Xh7FDACdJcCQ3FoCdrPvMuK1NyqTZDrRmppfuukLH6Lp5yyDdsXfTt8cB9UYb1nB2",
  "key22": "2rp1sAwi6bNPe82TmCPaDdeEyVu6LjvQBhXnzihVwZgRqq9tjymKVki6iU7DbAMqN6jCuVkoawzbJBm411g9zgM4",
  "key23": "4izkWCEPNvoW4Av2tgJvPtQJVNY27YYK6Ea7uPa6QvBi4HNs517CSQbr2MoTh5BWFheXa5NFvdnLQPmS3SE5pwrR",
  "key24": "5u6zTSR9SYY2MuYdAAeRPzukCip4Jt92vHEipJ1B7tNZQscSteUfARzBZvGRa1QSLPVzQ6hVa947JDSRyMx2rSsK",
  "key25": "J54yiTNefu4GSPfThpW6jb5jv6889hWrcjfQ64QcreS769b72NDABBJSHqVZNLGvqzPtcpucRUHGbDhk5uPpJLx",
  "key26": "62Qpg2E6As6aWqC6fbie3feS8QrwMn6cZcZTiG9o8ycB1BZG7m4GfneTK4zg9QfHjDed7ppGDhQzYmJb9A28am34",
  "key27": "5NgrBc2jKhXWDE6nWgtVhFLdjpRdPgWvG11FRvRG9M8udiJsdrAE1c66C1HaoiV1jmFToF3XDfo68DbdrcDpGmEm",
  "key28": "4b2yhE9S7gABZVQtSbqUAf9pdu2Ny1jLT2oib1e2Buyu7qpCJRCJmELRCtuA8Rz4t4WbMe58tSe6fvqvtxtqoUdB",
  "key29": "LRDYS1qzRuefPGsaHxFhfkXt9vpSycNGUd1tH6dm5MtrHJ1WBSErZ3hWjkYUbRLBrxTg2JuycwdRKabWKuS1cvs",
  "key30": "55UnuwZxTG8qkqmHGpeNRp4nTQMSqLHBS9VBhSDuKMVpEKSeaKQQMe72E7CfF3XpYUnLEpi7ZyStGwbXoExR4An3",
  "key31": "2yKA3637r1TDCApu18RuiwsggCrmfQuNfg7oNgsjppoFFG38HStb5j7obMX1C6WkGVGwtDGmUpbWvWWrwhjc57ue",
  "key32": "2Xx3tQXwqUgDX32ctkftfpEK5FmLj8YM6AWatS8Ej776opUFm2CYca2RwVbtGLm8cshKNyG5GGrxBTe5Dwqd57mS",
  "key33": "2JQLd5yJem4PA3VhjiwfSNke2MYthabY7keVo1dJVuGiUxysvJFWHeA5TrHQXQKxmidjJPTmQo72nFVe1ZXstiXo",
  "key34": "4QMYginEipD9MYHrPxx3CiM2UWZHHAUTBWoiATmDdU2LUGsBpXgdoov1kdaCSzNra6gTRhHHuu4Ha3yRX82wtKy2",
  "key35": "v4Gq9CRwmi5jUf8FrkZm7LA4md97sWng6UuGjCDj2X2tCodmxsxfk29FTN5Ht4Gh7HoRGZp4d4wuFmf7C4AYufr",
  "key36": "4sYiAQMYw878YuwDxyNgiU5M8tujeKPKQ7nUJpCjbKEJ9oNoHwy5RGPDpiwkEErXSRXRHAPB8MAE6xaHZAzxgPBB",
  "key37": "53Sbn9P32Y5PXSJin9B8krjQF2yTcKZQzxrt9633hwAwvaPXL9gqpJuZqeo7nS2E94pvmgvC8K2fU6tscYAx9sgq",
  "key38": "3kB9P8Y1cgYrp2eJ23T52Q8oZdXN9rcETmNpYVu67yfp3vqD9yzLr7AaR3ftbssW8cDiFF2e88vVKyBtJY5pQbAs",
  "key39": "2kJXSWMmYsT5a6FEgcnLW2nqLCzeLBarHMbnm2otgXsiCrs8tCQWz2Cez975gnHy31C2nLEMqmWY5y46gd39EZFD",
  "key40": "SNbDh7HRqNmSneWxKbqUvmLsgBWrpHiDF3eW2RYFUpLGGsiJPgP8miGX4SysuCuhiUZiPpqAPUgYjSJAU8XvQmK",
  "key41": "57Z8jtqQ1hL2sGQRqd1KG2f5kSkjG856RnBDuJdB5WtgyYYnhjBUue98VfTduwuCYD7htakvegURS5yk1uYhbaCB",
  "key42": "3iLZUN23B5PwxhwarrmxfonYvcXDNvvS28tJsrq7NWjc231byLf7ZXViFA4GuWDo9rrrGjmyhJKgaQxBk1Q3PwpG",
  "key43": "3NLb33VfqaWFwFY4RjwzPszQBfCwPsiupoN1tnemBnYqhMz48nt1WL9PFdrLw1mTo8s79DWNyH3JCzsSAWSsxiwt",
  "key44": "4x9gjnCnGYUuPG6WeRieGsBGqtSVZX19gjTPmQxaePA3hpeEni8psRkT3NQ3bc2ikD7SKderQYb1FgBBwhLmUshn",
  "key45": "64HQ6kx5J2B5mdXaHY8JJzvYSYzrziKpUdrwQuQuV9dzMP8KujiLeKN4ZBULqDNX3nxPu2wg5qbGKQRWKcrCg9qL"
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
