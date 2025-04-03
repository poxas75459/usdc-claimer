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
    "2CU6DQDUEAbsqCQEUS4bjG4SUbsZtuusYN31dMDc17HhWvhSyU8Czof8T3nUmxk68RxDwzZiQCUshjz3q3bzFQoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g7pYCau5bGn9aJ12oaD7b3P5RkZ2euToxJJgcgNn9XuCT3yYc8ZRT9xsU4N6bxfA11pArbRPKztko9bave4RA8m",
  "key1": "jDy3MAque6YC2YjcMigCjqs4E1K1VZ4mkhHgEWece7Sp4AWQ25dhevBJ6gXY32x33w8N3B3WeNUYd6LbsxLGJFb",
  "key2": "3bHmkZ2PLvtjcyNrwAiZZ1kzowF3iGZA7nVWvnASTd5ARsyJvSWJQUJ6SdyTJT473qXCvomKUTKfU4WqT44VYe4J",
  "key3": "2mqajE54AnVNeq6m3URoaNtCwdPaU23UKQpsctsxvDD8cCmFd4cw6SpgHFKzSBQmonfk9u8Pe1o55rQEramuXyHv",
  "key4": "4W3EqkknYMNg86fbz8YiTTmyH8qMvb11UG5EYca86W7ZmoVSN1bfJpKHVDA84mYqnWqXTve5DY62sKAsuykzhTwV",
  "key5": "5913HP5haZFq6CpW3WCDbMk97n7JcZjozDRJ8JPtA3VdMKuq47Dvyq1FTfFDHpchqbZ4UdrQQBd68abyBndE97UD",
  "key6": "4t8txTyCSPqycLnnoHGMQr9TvRJS6BtmqTFkoShoMNAkVvkqVUSPYApJ1FMH1htA88X8CkWb8oF2VSNk211nzstR",
  "key7": "4WuMdq6JnSqdEknVAy2CBRLdzjkEMxZRhCCWqYGeM6UD98SXJfDBcwrcQDWi7jxpui7SiAo2z9kfKwDmfpwmfh39",
  "key8": "LYJETsrc89JFntMAb1Y3tR6PaSAyQVcQfxZs3jueAtN2rwHDbfPhv5epUj114wKP7rZYMvLYwt9qbQt98sv8K3g",
  "key9": "5KJuQoLCzVe7AtLPe5BKmHj2dPioG7NqctTuau3wiu86dnypZBj2KWTZLqUfEnsWfTKdsHB2BHyWJyh3e1opvcuJ",
  "key10": "47nNSvS7xaFppXePMeNRkeaFkWcZAPJgwoyfMXc51B46YUJAJPzm6Wo9GDWcy1GkwcURbL9zdpTFqBTKuooLUuT5",
  "key11": "2gHGxEhRtqVoj1rjnzqtLcAG1G4majgzkYJcJeqARvpQjThbe9hnzX3u14prkYyRTdttTsSvnAuwBCvL5dNr4pUw",
  "key12": "2GFJYeVphWxsw7jcgqHDK8ju88vURAEJ4RYjpjjgbq6U9tFrX1WRXtUdqCTeRZR3kM4tGKs6qFKH7TAvmuDQhbyo",
  "key13": "3Krs1rkS7jEvYQAFeux57tccQi3YBV2U6J7BxoQz6o1x5DWo4H4b8NbbYUYmftpE6CFLGGTtcD15KqLNkidRZqNS",
  "key14": "4ZopwtQPmM3G8Rp97pmWMCDr6tBBy6Fahmzm3wmQSKVcV2rpqgEDVoCZ43ZdtTGaj6cSuDRjNLUvgN3wi6rbwVUG",
  "key15": "3ma4no56UA165KDUiqLyAdRawmJjh9jN2Wvk91WKwVxLsYXeHY8sngR2orwAs2HQFf9RVvTZ23QiZP588QpdQoFV",
  "key16": "4Wu1iegURNDWR8PZqcDpYhxtgBekmYgpZfUMEoXeENGEksRCTb569jMny4j53LesH9BAqL1VLDmYVkA4sg4kJfq8",
  "key17": "58euicZVGMVFDQM2FXXYNvyJtPspe1KKSTNDEdQMAZFxLCtGRagdBpEpFEujCa2cw4YJf2bPjXxSjoEsNcyaDY3Q",
  "key18": "4Pb3WzA1aDzSYb68RqS3RyDDT8t8FKvUKMjXtH1Hb2TptM5vcAAn1KfqkF1goEmgjXVpcFFP6cGHdE6EDkK4VMGU",
  "key19": "sqLrtxnziNNJxMhQfXp8XtiiWtgwxbafziHpkjRnJT7D8DdPu9As1Pnkz5Gg4RkL9a3WYk7DWDBY5PTezo7dDTe",
  "key20": "3pnw4xb4C8oRHjLWqbj4s1yHgqgX4E55pPJ9xZZt1UMN3qu7kXPtPb4zUaUGdja9xik1FkRNNDAPKvAeAta4ZG75",
  "key21": "628dqsYszpCsWRYHdVtq2tKBk2kXVPp2KMFkpx5iBVVKnwf3omNWhXRT3Hntqt9ZVayHF7qKWDQgAbMcwXJEmaDs",
  "key22": "vEtjNTWcjwAjHF84VrbpdHmyY49MFLvwQ3Gk9jqDf1EidKYLn8LRLa42UtKzLV7ncD2UAd3unpkoe5fFCz5gNzX",
  "key23": "5qEK73KHGDcxRfq7jWErsVvNGveE5ivbGTuSXKRduT8pH3PeogoLTcBGqcv6EmHnAF6vjLWdsmSB6FhQDeku34gX",
  "key24": "2WN3WcvZZgzVuhDscPV9zwiPxs56N4oMpkqvXUSE4FTotuDPPJ8DV792AnDQ1Vr4KtywSYHHDWvW8HoUj4YJsVb1",
  "key25": "8fezRzTQ7b8kdLS2hQ4KMmuJ1xNbXi7zeEJ8ZC73nTS4j4Gazq8w61zNSFcdoNzeFjrDm51eGbUA9naT4PXD81D",
  "key26": "ENZ8ubrUrWupSVh4mz4qz6jeMv7D8cZzuRDbVKywHQ95AVmD3f6bPWrCMQRmkzweA5aZJ9xSVZWRq5mjbN84YvC",
  "key27": "3J9Wjju8Twr2TkSTRjjHTmi99SRyfPc72dJ8EjGn6XfQExMJzmcLApqaJ7U7zUxcXi53otJbKaQR7anNoSN5Hgys",
  "key28": "FKvuNB7zJ2zdN3jZZKmJMzjSW7BdNKwHADQJnGsrArWA3LWErnt4ReRgtpndah8iAfU5YZD6mcEMKBXsrrfLySm",
  "key29": "4xjV5AF5AjGZsTcWWkFQngoyWZdcoRnpgAw9hCUuEnx5MCEhtZHKD8zndAbARRgJ1UAEfDDpbAdocMT4Fp7ho4M8",
  "key30": "i2hRwxp8QUUrJvF2VDndDGT5XUxvAQVuyYDKuggabTPvDZRdw3aD42zEGqRcjhrL3UHcRLZ4dcctuMTVvg9cJZk",
  "key31": "4Ryt1XYT6K6etB8UDUou5vxB6LCeeeiYReQhrwUS736SWRrGnadUCLgHqVXPGn96jJj5wSJMxm5nQ2FmAmfizTr4",
  "key32": "3EL4NSrJHSasa27TLWtD8ZDWiRtawAehG4NdbdLWH5xttmi9PFTWhqv7yUS1to6zcM96vwLwiWDDp6sBnTSJm8mG",
  "key33": "3KXjqZNkP9wV8PMnyXbcLAMG1PpeGrdcwYqsfcSBHh2ULdGMtLc3qLCU9ackoRLM7K42LQ3jftnuE8w46FDucpmh",
  "key34": "2quggz5E3c3pJX7Zh61r51iyGqNEkVSqPFTxLtQ7bR1xcFcuLTgPP8YoHsUHPnmFo95xTdoLrjX6FiVhRDxJt3CM",
  "key35": "2WSpjgvXSqtvH8tZxXTMPcoaMjsqPuNtBWeA34M6sSZmVYXXtkzXgF2eS8Hzbv1tuXA8mpnUhqGawvkfuLjbdW5t",
  "key36": "3BQ6Tayr2RZY1RR6yj8nSjKeKns9X6UHeZkDAYsXi6U4FjrczGUgJFXVkf5cKVkSeAHHJh6SGJBTcgdT1sy43mbo",
  "key37": "2zRP247YqsEQmJsQGtPa9XoVFHVXE5eLga3s8Wq1RvB3SUdXE9hJLqgXsfi8m3XbEei2BxvLwz6BhmUWhTGS778v",
  "key38": "3Pzg41BgaGq7kK1kaUjJ7yfshcmDJW5haH8NagZUpUAQCEe8CbA1ygN3F129RVBStwSJwP26TCqqWiXTA8ifsMiZ",
  "key39": "9HJ7qaRs9awMw6uvB4sCQsjJs58UZjzAVAi1mcBPAD8EBo214BEhQY3gBQ1fBy5ADc3L61Bc82AuG9qSPoqjm1L",
  "key40": "3mpseJpX6pTB1G8SfuBbGKriiswLKjqMMMyaLBSPg87QS65jKe13XNTvgReWrCHuhMLGx4g6C8G6DXNNJSVTTMD7",
  "key41": "3B5C7UkYYEQ2ZwHMZGSLSFHAmzKTuhdaS5vwDy9NG7AZETPMcc25SgdewYUG6NNLQfFjXYDaE8z6y4Evt6GxcqEy",
  "key42": "2LjbvHfV2yD6wMo596xWJbZZjKNYv6x25Ai9s6aSrMfEMjrKvaEP6NzfjS7vpLUhnusAcartdfUVCiDNxCm7hLZq",
  "key43": "GJZsTAajc4LTaWwtBvwMamtVKNfYzEP8zeAVbiaHtXPLwyySRZpKYp5aA9V8haeQCjW65JZ6D7gdguiyLgVuF2T"
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
