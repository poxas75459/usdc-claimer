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
    "3BdtU5ycekpfY8Zoi7cPR4HeJEEDkamsbeYGiujLDdFbDoLiywscHzLeT84gcjhyHxpXmpH7aDmZf4YAtMkR9Pyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nw71Bg5XyQEppoyRXjDg7NqY4MVTmEJ4tZ4NWGmrH4EhVLtGbiiTQkp2H5a6Hio28pZPRQwyuYa5JfRiArpkMDc",
  "key1": "3wZGkD5iBFkeLa5SAuLS21ReaAvYdGhuakGvbCmS122Wr2ddsiSBjHwAYrJ6v5uiXH9TFgGVDH9TDjfL3CWrAfhQ",
  "key2": "2Qz1KfhLA6RoHnPb48nr4XCyfbPywJCp9M8DdiXZocQsZD2evXTTmmgYrowYUPut6Dwn3CUWyJsyjmXXjYkiC7VP",
  "key3": "5TK9SsBdfhxQej4Rd1DU4q8WbhDdJUdBTrADt7b1SSogfW5S64paeYokJ8GZuKck8eA8FHHCFgomKog6MqCX3S7v",
  "key4": "4G8nz56Hs3XYDHuLNHM4HnDB7pJCJ84bj6SRBT4uaJ2cxxYKLfeJ9gGQNkpn5X3ZncTCzguo3WmnN8uwDZGFfxJ3",
  "key5": "3JnUua27khhkqQkyxVUDStuBxERxvuB1iJAK8Y7DkCpo2T9ncg6CQwWd53Q7woCaw9qbfcPX9teTMStyt15zFgV7",
  "key6": "5zaAAjyZvp7NxRqjQZcexVzJrGCnH5JJNt8DZ1u1hsdMhtCCs2JXRBBBXEJE787H1187xfNnVw5kPgtvzhze5Eow",
  "key7": "EfGGPECnpSvhcDpeVdCvga2AnDG4MTahJanf9GVF3FQSsJftyRRrau9kcEZhJwhf4F9UPnf9yMx8t8St1SwGbk1",
  "key8": "5toBd3bmytpvTbedRLJZAccBsQxucXMJR3sMY9kDvn676iqZZUoRPDWPFjj3a79BTu35FRwDcJR5ac8JgCU337rh",
  "key9": "5njFcut3UsKAqVZA3u6DipCcVkrS4kxJZk8M2fgGYaYmyCDysQEks5XeevBBiY9kWte3nb7ohDbNpMfnt6TCstUJ",
  "key10": "Qq3nyj5DvFJC1vT66AaNNGksH11UNnKF8RDDtQaYBJ2U9Xa4xUcwQy6xkJDCcwVBZAoGRw4MszLQbp9dmuV1Sg2",
  "key11": "3SQP8hANuN87SqouZgW7ajD9TkDcjyCra7PgVhQxNGmdX6vM6xC5bGyt8Eyn9kJFd1tv4JxhcB7iFGHs1V8RsaF2",
  "key12": "4zFp2cwe47N86cJ9QFVeksQpe8x9nqfENHuEaau4XcF9RfjKHG9LWrExo52XmWcbtEZs3BQG91zoeZPc8a59FP2k",
  "key13": "5E6pt9VzmSz5W5imyTxdL5ZhKpRMsVcLftJavFpXaUXSrA69AjBBYphjgJrJFMbiFfLCyL6pUmfFmoAXcQUUhSaG",
  "key14": "hpAntRurrycmRgd4NpD1js6yrxPMgTy5j5iHeSGUDBBtsJjhn6iJfDfqsMZxoq4yWSLdXMxrbFygpdhu77tw6GC",
  "key15": "5bttYg6ytA4gHZSK9ZVmq2UsRmokXnW6wT9bcb7Av8BN51zpRAJtW8THfv2dsnmPUDDiJ8yLBSx9unp5kBicrKRV",
  "key16": "64riQVh73SoZdaeuaT6JagY398JkYovPhW9AyWYgfq26mUeQCZ3rswfCjJbEtn9GY8M95bwjYc5pWw15AzrUjYSG",
  "key17": "64rcdoPwcBH4hxnQAmP5x1W4Ua2WCxnbEm4jRZfUeUEKEhaExmRZPsSX8uQSJYWSE5rc4QB9N2s4PZixkDnJGSHR",
  "key18": "56hPubbtycs46UjiX4RUXaqaTHPmUfWEFvnqv5qsGZBywgDBAeNoUUWMdv9T3G4Z1uJyhZe3rMHveiZR7q4MUvsy",
  "key19": "2exjxFFnM9LGNntozQQERomJheNsgvumrdz2GTtpsRySnjVTc7x9S4wQRjsBgM8pVUNzGmQ2oKNVxshJ76sdprxw",
  "key20": "4jTzoUhHN6kynkNe9s21NX37p5D2W4dqBAve247QK4TAzMSztwtfgTMoMqjuHFCmxL68evN69HtDaEiyujF8pyJ9",
  "key21": "5yWdZ7PPGJfDWcQJMSWeqMaRAWvCLrSHWKJS5g2VAv5SPQBQ7nGUi8NrxVn66f1FJVvnzLS3sfYMKuvb1Jy1ASFi",
  "key22": "2cfm6rWek1G6hQj5LHSy2d5Qc8kXnuEc1kL1P8DftVdjSbo4Pha4tKZmqsGiz9Q9XpsCqb7LZqTVY3f9y5cfUtLo",
  "key23": "2Hb5AEG4kQ9rJsiJzqPBDdiD9351BNFpQDWBvxKmnX3TBzDQb49kmshMn2ufHH1RcNHec8Mytas6NvmUjodGVdwP",
  "key24": "3RCXHCn6mdB1nPkxVsNgCZYcuo5zJ2ji4QsC322zXxpBcYVBsTTH7ngWeEs3VUtYawYjDQ8s9tngELP7vpWFFHbD",
  "key25": "5RCu4AAcuMJeRYud8jAip3ptBcwiw1NYKFK6QSXKjDAqxetVZepPPdXqpSQhry1VhNUCobWLNUdXYPitsrdcRiQG",
  "key26": "4cC5SPjye9sJhpcoYPgKg3EWYS7b29s7Su2tqhp7S8FrNPireySRo5R9qBAygBYrXsKvVVy67J1wKYBo5LK6FTQD",
  "key27": "3sHduCcW6Q2nm94AY4rU1BjWqWcN8oBNiiuhy7PjGvVsvbTf3Jg47RxNbJ6PKvViVbid2Amt1fXx2oub5MgFn8Qx",
  "key28": "23dZGTkomH1d2bnvW36ARmecn5jJ4eYaE4owoym3fCWB6dEJnJMLP5DsSpnPE1vRJzLQ9xjKuqCGYKFDFVFq6CBR",
  "key29": "124MHnY8mQ3KJJZXuDnBtmeKCN6Rx1MutLm5sSkXdp4VxG8S1D8pbdfBtrZMQfesb7B9KviV4XhFjiw1Sznzemjs",
  "key30": "3FApYTMnSMboXU2fRaei3KfvnUX1KC97bbpYcV6GesQnc6ssXgWmKuDDbEius8wqVFAuYXJn2wVoDDMG6SE1rsfF",
  "key31": "2LTotLXingjBYyS6buPVuo16CKSw3tYW6vZUaLWsopvFC3htiLBSBJTEPTZ93wrEGmtn9MvoHbLnWVo4skmn2m3p",
  "key32": "WJdBa2ihDXXu6qSbtHrDYKVxqJ4SQDg69t8t8RRY7wzDaKX7oGDBSf6TCUp5EtE6kAJZX7YpDPVcpqVa7mp6RFP"
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
