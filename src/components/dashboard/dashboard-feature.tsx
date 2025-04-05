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
    "H3tqeSnqd71c9euz87XSLhstdLanbJfgB9j1VaCK4MqK5XRxu4148zVfKwsUnq7UEJ52jmzdPBypF2hp4gwaMK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gsX7c3N4xR7ju3Zpy6J8d1EmPodNaSLmJHGrQnxnoNLS91wxuv4txgnwx31qnQEApMXouBmqLaMYpGani4f5A4W",
  "key1": "4FTXizUPWS1zP9e5QsnhEWvnXUouRQyzQR39n6GUETpXZMtSMEMeBZyi755U6cQJFsSKNcGXiHUL1WvxTLfEWsbM",
  "key2": "hN6s6PbHJXsaojqGA3bXfp4kDPkqTFsLVrCkJkSPUrKryhzKcYBSdbAnGQyaVq9ucFYnHG9Tn8Mf7qwS1CQMyu5",
  "key3": "JWFxRQptf8o6Rt2DeVLQHiF523zgHmzQh6E9MVr2U89QA7KxwQrk8xaUybXPfcmMPPzA5TXHg9TR4znSUPaHe7q",
  "key4": "2wh11HARKtBVxocEWghuMAQG4hNaqEpgomTp7tY1ySpXP3DkVx3z8UvwtoqPqjF78cjGwUaRhPhxKQf2GfEhxvC8",
  "key5": "4tgwU8L9gFiDdnMwbkZqgu2menzmahS2C9RB4q6VpBWeMKBUd5uDtb7hxmrHxoyp8ZXFFo29X5PttxeG4G7DAwhU",
  "key6": "47LR8RZgfYvyE6Js8FqJG6uX5JWhXiBivFWgiygpEeQD91syaQwknRULVRQFf4bVuCxt6vKBxK2PtqJjFExT8ziJ",
  "key7": "31TzmjpZT3NhbyP26HYCt9biegNuN6H1i99uq2czFxQymVSJrWBcj8eUUwyJ5n2SGS7AuVKJ6drBFeyGegZx3k9d",
  "key8": "3zesv5vFESaRqgVXRTHneYJK8SZUtpDLbHepUmBM8iSq1GmhLeoPWVsBdeeYX3xB14CJsv6dB5t67CuKFqVgJyqs",
  "key9": "wa4Pa8x8BusGJWaCLFRdFFmdA9tYG92wt56rwwvmiAzx1cc5RQX5HDErBTWv4guJAp4B7yQXrzAbwCNzPPgmKRe",
  "key10": "5DPLyyKMx3nEjeeVGH977qVTHDBWA4Ppe6ueYDTmEGaFoyJ4SWtochb4bcBuocHai8F716nqtHiCJTRwtJLThdES",
  "key11": "27YWPrSAYBcBkyrJAHBq3ip2a1CgPAhNgtNo3NnV3YDFA4aZ33EEoTgDtK6jyJMnrbbH41hJh2HGz4adSLmFfVC8",
  "key12": "4nENswPAXna88Bs4nERD3L3TB5cJnr8eDFoDJJsaxkZGoL3FEr67r5ejtkZgyyK7TxVLor34NiRvazHKARqJYBrs",
  "key13": "n3rfehKzkSm8Q8j3BFrwBap8yF9EYspe84fZasp9TJJd4kpuL325wu9S2ANAZnPi1jdGGsLiBimzEhW71siLR9d",
  "key14": "5YckbgjcDQefbvs4xpp2zfBSjeGsshmXHns1RPYNtF5UuPxiQJosSK5WGf9d8QE6x8nuLe7pCntv1E48TPyU6uVz",
  "key15": "3moJHVQBZwnwFDGeAgYTauw7gv6hh52BY35r9CbSG6PeJ7pXF4tU1K3G4gavHnL2PKGSQvj752QaFHZiBdLeVbgC",
  "key16": "4TWXi9Xd8WiXpEsGQXPmsAgZvf5MRo731zM8bRjTzsecVy58fjrK9UxPgv4GnMnvME8PtWMhz2XEQ3ReGpN9EPk5",
  "key17": "3ETPcN9LaLKgmMVb8dq1og2n9dPicnkXyVVoAnaZyf6Nt7etefDeUkmzcvDqBmoCxcnQ7PqTGQgSxs49BrS6jXxD",
  "key18": "1hbu76oxGDm9CFdyCwoRcecBiuzh3czVXG4Xhu9HjhGtPdvY2NBCtR4FY8DcFa5MMEbovk6cS9rH5QBNNvabNze",
  "key19": "mEZ7puErLRXWQ444Pi6uqTnMZH4zWdJjyopMdGS7aCvpFyCinwao3iUjyoGD2QwhCYsNTRYF5JGdcU7WkEizycq",
  "key20": "4wuZu28AaAAoeUhP3GC1iRaZ8DPncpX7WPimDKDp6DjEUhwXHdABLqsJ6iXtp2E7EjtMp73WVLzqJyeQqe27nTH1",
  "key21": "aPNzVDrKVAuxQW7mQCaoWy2ECnqUyGwfyudbe5Xy4bjsugTi5NJhnGUjYadjLv7fyQWfyhr9EGubn13L3A8iYAr",
  "key22": "3vFDRmEfBniinp4v1dhkxKUqpqJC11WdpmjW3nsQHbp78ERftfEj3RFT71s4PQCnoLzPyCySqDWCBVBEdEV4HKrP",
  "key23": "4uwHcXpv5KzSMr3io5NU8kRg16vGF8jAoXhdPaNNZJqZQs6XtE7KxcWsL3SAHKj3E1zXLnKwY1pD5ahN6Q6w9ZDh",
  "key24": "67RBV2GtEgtn6QLVmppKAyFmg91y3ngW2zqkEECvFqdNEWg4Q2tpqLPRT9k61enUMvX2zK8xHXWTKaj8S2msdwa5",
  "key25": "omPm45ApPT1BkNWeawA7Z147KQiitngfKUcDo69wyML8FjmrVGrwuQqkTCqekJoJBjfpuFQmsWAssRmPayjYY2f",
  "key26": "2PcpswSM2Vuv5YZdy8aVqS2Php5oRBx2BnP8a2RZnhHxZrbBGVrfetJYhup7vFnvV2fj9i69MjsMQGQGvaKLBNaw",
  "key27": "2vki9CdM3UXbhUzh8ixSGVQQLkwzpNQtURcV2DRmpDiy5YFfFnU6oZrNo1njpemed3yF8gitM2Bz39SVZjDD1WmK",
  "key28": "33HbmZpefbsADzmgCcMDniQza3NhB6RDJ1wj3aeGGfKUZ15rf4eXnVxsxZsX8smG3LxCowayzaBMMTW6iwb9XH7e",
  "key29": "kfH1yxAE6dfn2TSiVm6UWnxiyWqWVNxg54zbyjHPiajL1DGkayUkhXxcrJHC9K7e9oBJrtCjBu6oVs1o3pePb9D",
  "key30": "y9ydSVkfSEHyYGTqxpDugBbSf5r9BTfudJG9hj6bBiBe3psPhaKY2tXwGZ1fSiQZNqWRRMp5tpTCRQQPPoaEeJQ",
  "key31": "5KvNVWR7WGy1ZtMNEveArMiK68VrxX25wMcMr7UMMFZR6X1QjHraGgDBuR63xZTwuqhwaZgvwVU4JvrAdqcgw5QC",
  "key32": "xNNLB8F1CdtGd2eoHZqPZNV783EEChiAM2rnkNEB5NHVhAKgD7R7kRFxh7nLRtHA2Xvc6exJ8YJQ2BhHegUPQYR",
  "key33": "2K4s5SnYaagJV1cHFvncxdroZkJbXgcVZ9katLgyuo87RMiQ5c14ypxzJ1CM7SGxGVUZHRt7K38yDHSXDQecXHP2",
  "key34": "4G9KMkcvPyhxJrrdpp3fcVtRYNTvd7eGxwPaWM51VueeTUSRR9mbVtdgP8LbbbU55YVndnsacEGhWjn25VxXeGdW",
  "key35": "4ZUYfzqmwtcwdKFgTSMZjewN3qYDovbjm391Lmvi9obLxxoAkcPjeeYV3eSHNQ3LtHhkCF5PitUcinVrdD7sbmD7",
  "key36": "J9APVy1Qmgu1zAw9zw6FHtHz5573FL2Rmw4ZbmSvaxELTvwwa51hC2NAVyCGZfwAoJQkdoaCCyJ9KB6JaMgNCyn"
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
