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
    "42bSnifuYUk3pX9ykm2wonns25UabXnzEWJQSMpU1GpQyref73EuPDcnLwre1e1vD4jbLjb7jzDZa9sDNAyC5TFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "655E9Uzwh43iEVtXRFBo4jwHV77R24QGLYiTjgmwz7vVpU2f28NHCja32Crn6azEYwSWQfq2GcmnJNnmQyisdc45",
  "key1": "3QsHshzxHyVi9N2GyuC2GimwBCRr1Ck9xcDMMb4v5YjqDeYtyNuKj5ctCPYjtQHsXNu5rred9QCB9UKZiz2ASzWN",
  "key2": "2VrQq6CGnLwt98rvG5D7Tj9GooPAaaAmcwTpb6huKz5kNpQtDdsd63fwZ9iEBzAyN6qpNpjGYe5fwWfCVxJxZwN1",
  "key3": "4RKCq9Udvsg4gJYgXTvmCQgzhwqTci8aZck2pBpBRRtUW1xoMYStYeH41v6ZTf255636A66Dh9QkzPHdWNgCQqzx",
  "key4": "39XAkwfsk1AXuPsp35hWDAKH9gEniH2XfbEXSk6qKfkxv16bPgJ5woPvG7Ly1LKhTbqJjU2KS8AaUHJ7UPQDa8wk",
  "key5": "5WSKTuSrrPnwgYaYSJnEYpUqoe7kt9opiEoTPYhkmfd9oTJDNxUc9SPn9L7mfTBRkaEz8WcaXBypZdkLeaVJfnkt",
  "key6": "Sem1RY8hKHaBtGTcf2RKuwiWWU2obSXKykxsYvyPcYthXirXBu7fZs7aAV8sHSX8boxoi5dqTmQxtuDoYyzCvY8",
  "key7": "5YkzyeBuDwvd74RwKtiULcXBaMDejW8v2i19VTbniPgw1jme61YNotKRTUAUbv5gwXDJQLBkpv1b7gs5sQyQS6eg",
  "key8": "5ffgt69YAxt1uyVGSUFJnABW8pVWK2hEw3TGZZRhT1BQd2XE62cY29UDT65qbiRRnviJ9dDeFCoYUAbDmNS3t9Kj",
  "key9": "331qRniEBVASF1Vx3FrUKAeQzK8gWQuwVa3wBdYGdbLNPRi9Z5uD4hX3fV4mKWmv8twqtTftTdcryirrbniMXNDf",
  "key10": "4EDEX5VKBnvS6oLoxpdifAesdcw4Jwqq7YvJdh92g5Sy3avAWTbH6Z7PvWkpbVbGQuM1QE9zTW7rMTXwfmZNoViN",
  "key11": "KeDrADQg29hT1yiAW1q8arTTbZDsAvpL9QoSV2ChLfjN2Ur9Btn9oGbdZmA3X9GcBZ5sWWRexkLi1ZCaLyc1oBj",
  "key12": "3oLwid8KbrFdDhAzJRyThsANhHKaX4dRkDSYS9b2xtrUA5bA4q9LF2mfBscvfuadBvEQP8ZRba3UfpJYXcUMgzWB",
  "key13": "2qV7Gy1GrEcK84Nx2fGyW4jmZQCbGPZL9ze89UqmodfdabtH4vLrWXJX6VPdiXhNnNfDJskPwjhmoAuvekhJEiXN",
  "key14": "28peAHpWHJyzwz86cWtQ8RmHy79vRvj2i9XL45b5pf1B5jXtj8qpnwi2rUt47S7zh64kNHxCHvGB8pvqRK7BDxVU",
  "key15": "5E3aUEpTxVeBzoczy92TgpAJ7n8KpuuJt8TbgUu2PvF4ZhiVzPqG1i8oNs8A6g3adhrNMEpeVWYU1pXyuicL8n9R",
  "key16": "2yYvZQBHJVVz83fxm112pUQ15cjhmpt8PWZjgJGvrv81magfpDEm8NUSQCi7darKnnwD6eqGbXV4E6ymjFMzZk7T",
  "key17": "232S9ApAXzW6R8c68tbWSmwwmyc9zwzsKzzuycVvVxmDkgQFsikqVtrDYEEuwJGW5dgVxxbVoDqKN258wqUguyLV",
  "key18": "2rH68TW2WDhp7KNDwRkb69yP2uK4HU1YSym4F5YZLEdbA453Rv2sH6qhGRHe8od1zzrYaFKwLYJBxVmaDhX8M9MT",
  "key19": "64Tcb5BsxidDRWXGnNgcU3xbw9qf1upPE4VEGdPcbNEDaKoNUAKGvutHRXwYxuvheVYQ7KB1sAguZoF8DwYf4F4J",
  "key20": "1P5CrhEAMJG1a5CFJLYoMcodULFuL4EYtZQnmpbkXf6h1nvdrbykkDnXeXkpLfVJCJVSvtdF9VjcdVkwKTSJ7u",
  "key21": "2WEH2MK6BR3PQfGuV1kAysQTcpge1gfHHaNxWEWqgwaZzkfRTX2doSGFejGra5JhYmWQmJ71KiXixHMPbZKr1aFx",
  "key22": "31dCzhvHsXR12h7gqwRpdU835DTfSMNsiayHuGraZZcrGucmdWcX7h2fvAHXS3pf4ym3ftmfPrCYHxLS8Fw9vnrt",
  "key23": "4qSweKEikLqQzN1mcnRfRS6R5oNGKGHYCc9FsEu7beb8Nez51EHaQzPWqQh5btQmNMdc16HTojuACQQCNZsKtwPY",
  "key24": "4GAZvHHn2GELQDG5rNuAKrMbzKUTmRFyxDpPEFcZ5HFVttB7td1JQFkdFRMfAmojMdNTU5eezYEnxQA55owDzGiN",
  "key25": "5bZuEy9BrZfDsKnufFn6nktkbjURhQkmhJ9ScMtd6ocvWHWU1gA4MW7BqcQKTKR1FSzLRTC69GNS5i9JpkbeLkz2",
  "key26": "5khnqQXy3HPgBT9ShGHHZWzkTdcZANokKBVPSiB1dWCrCWj4SQnx1Ra1VkhUcizWRk3bRmg4xhnJxK2rV1bHMxLM",
  "key27": "5BMYSFbunFF2bMNstUr42ymtVghxngPCVLeRJTcuWY5Czvaz2tXYUKJJxy2caQKouTwPiCrMYYNdKCCcnFcLB6us",
  "key28": "8ZJAaeL1YqRGyWC6bYaL62hy26HCixKzo3un5LhQb2xzGytid6SSUdHA8sgb61HX8BiNmBmoGgGwFB9p7RFm8k5"
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
