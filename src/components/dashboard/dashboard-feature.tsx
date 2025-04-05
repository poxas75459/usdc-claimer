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
    "ws7dHWD1BfcfNV6crGfKXh4p32e55WUg96LwwCq4m7bUzTRaryfaMKY32z1UAay9wx2iKCQNdavweUW2dUcd5QL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uCDza6ExzrZZ5uSRLaZZgj2bUZ61AUhC5epHGLpwYyw5izLoS2NSQeCSQNfQUgd26yHvuDn39WH9n1oZzufrxBE",
  "key1": "33ZhnTc7meNkynkoHfLECjcdgfZakNvevpRKpcUm3VYFNBrykKXpDYjESr3AsGxLhdfvRJyHsVfaNhN53q9T9Umf",
  "key2": "3MruUy88iSAwBAqRCn6WHfuBiNGLyErTzh5Nz4juNUUy6ajg9jXx11TAFP7Pvw63ehczfwLcKEMQQLmb8QfrvWni",
  "key3": "QNUXq4nyG4C5gGggg7YKFb5pHH8E5BjQx1QYDWyBJg4U3b4MTLkZwnp5KuaioAsXv66K29XxmU6xEt5128nXiy7",
  "key4": "21L8fSmrTm9KSVPhqfmqjxQQF5rJgMtxRqdk7XDSsp3zZedmQQXfJ5qF8rNzggWfkvkozJo68FXQJQyB6FjE7K1b",
  "key5": "tYoav2RkRK5pVivJG5JgWTWhhWeP1Awz7iUQf2HcJSHapbu3cScMnwNDgF9pmPvBnpciBDkwph1jUs1k94Sp9xo",
  "key6": "3isVKVRoZcaXQYHSoPNvmE7Y16hdBZxgyLjH6FFeNiy9zf139gNWLMYppquSdMwJNAtUCBBjwkNA9qjZJNTBZN2d",
  "key7": "4jhz8uAYkRFN72ps5CNGU8RSKxT498YzkzU91XLi2dx6mt1g7ERdwQ8ztQuny61FdU5FMr18DfmVHDvoy6Mj2Nzd",
  "key8": "43CXzdy1fXGaqbXeAK5WVEyLdMR7V88TXwtitdfXobPgmi24yjEDrqPQQS7yiCJNEudJNqJMVRUH7jo4XTskBFVc",
  "key9": "BAWoD3qtYZFzUUhN2J877BEBaz73EHbHDqxFy2xvhjaPgq5rXcn4BmhbPmqT2mMhz1GFvf6mpqP3hzmCGmRm7og",
  "key10": "wZHToGMLt16YqVh77gRAbDhT4rkuZnUb2Yx2GUvcwNdG1mQmVu4CUqwqxyC4gbjrDmQ2iw6oAxRVyjHRSZRV7ZY",
  "key11": "3EaWPnVJteAb5osxMmxVYwkNjRmvgFAwkAT6HHRvrsD6vwbV3hizumdJua8MirybvfaVn6Y4pbTm4o8XyfA56rvn",
  "key12": "2z4bjaDuU2SaiSXe9HDgPuFgT5twz5PGj6BNANcRxWYsD7tfijoZGXcTtbhTdrW3zfYACCG4D4hWuirVDe8CBhsF",
  "key13": "2cWmovXMyJD5tNV8Yx9joU6maafAqyiAi3B8zWSjc6nAwqg4pVFTz8bLT3SJT1YW5Lq8RDWxgNk8vFEJqLWswoZ",
  "key14": "213yK5zUzsjbLYPsz1NbW1hejCEwo623qtbEAvnz8E9WpRR9LPeEfB4HE6KECJaPd2o1fZUpA5e1bnPETUEVUo7Z",
  "key15": "2Sp41PvYvZa7oHjc2yrLm6ZfkmhzQXThTG2q6wwmqSyGM1ih3yHs7SEKvswrNWGoXCjaBsCVSKhJY38P7BsYpr8U",
  "key16": "53dm2MWTrTqEb574ceTD1o48CMwebsyh2DVi2VytY8PhHTDBxqazr2pxieS3rFbapQwuTdsSE2WyGPq5BPe8Py4b",
  "key17": "5GuB4ieJtSnJJ7ve8pAHKSM9WWZ21sGq789CPvAhk49eYBXS7JwQaoYS2BqV7JpFStTxxAqgU22ybgfYJbKuTQyt",
  "key18": "deCr6uDgqv25QjHKxemNKN1p9FroT1ss35jRZNGmKZNLcUbfirYqYHk1KPwA7TzxxuvFm2TC1YP12DbDGzXZKdC",
  "key19": "3eG342AjPZKHzb1CidVtqRtBbzes34JMwCjtvAimD1Pboxtv3ZBL9w3LRqy3QPC7Gz77onKSUivRKbb7CCS3dVmn",
  "key20": "3yR9yqAiqRH3YCUADipkkZnhEpsbbjDa64B8YHuAUQBnAoZSK6k8hAB4xCQ9h4nYmcJaU44k9PNoz5k6oo35Po3G",
  "key21": "2Hwq5N9NitG6W1xDumyebsfKVz5nt82QTH4zghSrBmc9nZTMJMXA8FjQMpYBzfUi3Lg3cpZ9k3aAz6TV121ZS3bp",
  "key22": "4cngzSkEzNjCL14zA4xUzA8zkCjRxPAZgGDB5JmJ5PkYs8wGgNtct5b1JtrdGVYVQdTCKcNGq9763jR8f4ZHBvb3",
  "key23": "5v5nM3JJtpr6V9SQHHax2AFrU9sUFUaxp8QMM1umePFEKjis5DpDexkoufEiHgWUrXVMzaGiYJKYWG1AKkQeuiJi",
  "key24": "5zK4MfDH8tcq1mdNkbwUCizno1r3AR9b8Ec3Yqko6BzAZCibiWKj6qwssqKahu53MhtPoCpL4dqri2MvUDpecNVZ",
  "key25": "333kdcbGfKezgSTycNmZG3iP7tQKDwEwtXi6koJWPcJ2ewxddevAVrn97sSfGp2SedTBiPWi3HkSd4t8XHJaAFTf",
  "key26": "2Vh4Y6bUX97LPgagKdZpAVwRUBUARXNoc2ar3FFwyuci1tFcY4DovbSamGKc7yEzrALgwLFYLxrQVWwkd6PkHDDe",
  "key27": "2Gge2X5zxjiRJjrJGcMJZAJbnccYkLFAmexYai195MuXSRLyXi47HL6totwsytjkL8t5R8iF44HscVcaV4WvXj5J",
  "key28": "ED2xkVDHYwpCws5MpuNmRKfCcJRecwRPJi8ahhbRaz4Tf44vqnCqHnZsSkgvZRsCWUrhHB5afigmNWCoRvFNgTc",
  "key29": "4CiedBNfN1Q9wdxrp3Dmcttcg5myEsqjTSEhG4ndRW9V52UT2CvrnGQMTUa7WcJiizB4W2C53js1qwoj2zKtp58T",
  "key30": "3oja2TqKbvFd93bYRtwUhjvhfyCpKfWN9g9jZr1zSsKmeHH7nxn6nEGc2e1122UECoocoFzsAiThsTaygrEPFN89"
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
