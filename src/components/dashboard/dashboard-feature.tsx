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
    "3eRcMyaC4FCtnULozuaJkfjBgEWedqF7gerHmHyd4MtFbxz7wXd98r2sRoYX5Y4yQTa7D9ewTCfcMW6ZK4g9qkXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yr31ZnDo4k3uaSFq8hBRb7A8axNeUVzTrqBHq93N5LtRuRsSfE9AZJ1iKMNN5U4v1cxTK5nVKKU7GBawa6bunZe",
  "key1": "5sGjp2vQTFn7mFqvo7WEeiCYL7YmMibLXQJcdnkGEYiYBB75FyekSYJYPBMopy4H3HM9XEL1yGnw456BZTMoMoF6",
  "key2": "PoCPzRMxTJBNAQGL9k6N46drdQiw6LXuPserZiBPz561zaDoXmiq8hjXBphuuHLkZ6J46DhUAaTbPCW4WJqP8hC",
  "key3": "2iep3BN9pgx4rVazhJiK16vBXEEb3dPwzYtKKXoXSPaWH3zXLNnwLH7kyj4oGaKRW6g5bWYw5e7h94P7Z3fMg27s",
  "key4": "5kYbK5c1ed1UNW6zY9Ecqz8EERaikPUP5nEpfm5CkNZNr6Sqrv23gUwWqP6C15FmYFnJz2nUYTpTHR5UHwXmygjA",
  "key5": "4WDPSFomu1A8ygiR8R6pMXBB4kAddHGezHFeSo7NnWN6PoKTSX9tjdegsgrpaV9yKLeWDuhQsVbkiqzjUjE8X7KV",
  "key6": "65DrtqdAZ5HyxWHfbm9fUTk35qC7d1ZkRwAjHyv9fU624f9xpqLhAsAAb2GYkNTTTMVJCtUS2qR2ZeKWJFPptXvv",
  "key7": "3DjDzjctHxXPfGj6ZttQWbVrLBDbp6diSho2SRJ5H4iuhjsi6a6RVqRtPJPivpQn7tredp5yNzqwRg6B8kjgkhpY",
  "key8": "2Pn462UGztH4qnfGKCiCn3ip412N1xkYKjDFdY1JVwbtuKWKJRceqawyE7ZT1L2CxqFHst4yGniML4R74tzG3wmA",
  "key9": "2Dfo7gas5hjj76pgeQrFJeYShd9Eay7HnyWBy9u8gWeQtq1kYZwgg4ArMnS6KMDDUQMN9Vvz8rczjPKncffT4w2h",
  "key10": "GSkQeASE6n5TWsvD2UxofZngASPL9HXvBksSvJExYwYyLq6sPBUdpJX6obmcGKhiJfB18koWD6whquLJpRjP6Uu",
  "key11": "3Yf3t8uKPrim1H3gUYMXo4hCFnQ6SBsD8nbFdwJvyeMtXRrMCmDBhav9Qv5H39Ay99jA28KaMbd9ofrwyU7BfARg",
  "key12": "4kgdw3881TaMVBF99oPKyi46n9Bcxwb7psd6CqfQUNfCMmq71HCYHYUxUCQnAS5ozGLp5FU5JrPeEGr8uifx3MRB",
  "key13": "3NGbdiYhsWVNZrj7pqi9BgKTGyiv9nWEbDDc2MBVQzYA66RHouN2dxXVnvkBh5CCuFhdDyeHKuGUYxHcKpMDmfGi",
  "key14": "3po8ANCjsBz49e5oSj1oCMXgwWYxdG8GLbtYn7uoMTqPi5emCqfb5ZAQaPFkbXbo1em7SxTDhBK7zsQNPQWbYq57",
  "key15": "UGYV8Vd2p7og3Mz6D5TSyi3EbwdxxU7uteQ3vbdUtz2fhh9afdxUYpccEoDFXXJNCTV6TUuAwRwDLYtz2KXTJY1",
  "key16": "taSXAbYfd2rcCg37kEPDJwptRvwpSsi3UjnJps8qq2cmYJfYincBz4igeUsZSHPEC2tYPZQHSy5fSycBBpKg6CV",
  "key17": "3uwV7bvV1QExacTtzM3EKyvTziW9ianzedaQhxHNFkjCMgSKLUgLFCxwsnRrc5dT8MpPzq8ZWsQszZv3AZ6VQBz5",
  "key18": "43b2XWh9QEDPfMGJdfuyWwj8kSResHPu2NgataNopFUjcsZR4FPJW59FFaZwD4HNEPyoPeZk7RopLX83yPbcaJtv",
  "key19": "4itQC9QCwxQ67xzc3bfmvqkedcdsijssAjZk8zajynhfGwZbieZTGm6pJN49R6hHjsHR2AjTYoypGh5JsRWx8Qfo",
  "key20": "3DYWt91BjfQ51i4KPMdzmADxavoch3Vh1owZRDZGpFYRbeu3rsABeWdzhWdiLLyZUu4aBk8t7Qxv6qrPaoukxDet",
  "key21": "46EBev3EEnpkW9G5aNtuPFKxDgzmhqkF3FRueDqADb33t4C6EhYQQVRppvbgm9tdpMKFinmmqbvNcuk1dwFCtdd6",
  "key22": "m36aHDhwGvQqLQtybBoCmKvtaVj51F5w92MdeW8ZgVYhebLzAQUX1PZaKgW7FH5bA9pXKh3X3G3Qmg5QHgq5wKi",
  "key23": "uqBj3hoKa3cKzwTEncf9btGiuH7MHCghJ7UfVPCNmCt7TvDjcnsZjQa5cG9b43971kkJ3tMiKhydmuNExDHgrD2",
  "key24": "2yBZyfjG4Npdk4wzBUcow1yK6zXAVe87BXbZ6YDfUr4fVaAMai5kLrp716QLSbjS5S3h1f277cq2nzrpafNtdsKK",
  "key25": "5eXGJfeEHQiS1AAZS1VodKXXr15mYi7fZuAqm8Lm3sAnN3tjigfnWRfM8y5kRioLM1LthjdUErjXPi6jmyE24Uqd",
  "key26": "4T9gqxz7eJwZj9hMbNiBj9UyjyJHJtNRe8g95TNjZhNRV1bBJp25uNtkKXgzv7WMJD5PJ6TTRwP8JvbzoGnatHPB",
  "key27": "5MuCVyCSJvcUSXgqDYrzEbPa3QBou5ZCsGkEdNFGP55L1nVumMVe1fscDoum2trUTYKN8axwsFhWkzrotk6mcmbU",
  "key28": "35GohdLCsppAPqp7JaKnmSCRZHpNfW7LzXpgf1oH2ob4NxdmkQPdbaMYmcHkZG9N7d9XbHM7mr8HmvEx8Mwj8vv3",
  "key29": "5bjU1QCsDW1aNsGXVff8CY4krr9BJpDdbGSz2BBECNStSZJdqToPWVs51yRBNB23DmiXFjngwTiNAHuzHVmdojB9",
  "key30": "2VMivX4gEJLUwMEwpjo7rayYytPtUWQcMq3KMyt3BBs6naFstsRkHVxXnt2CWKHrrA5QnRtGnHBaVXtKjeqsmkVU",
  "key31": "H9y1RWpACPLQQimU93nikE9axEuFhYMgowUD4m4mRuBpBhFK6iGY42gtZjFSvVxLgzLZ6V55MJtqFumZ8CydY8q",
  "key32": "63ZTonDahTLHKW1hCgWkDT3feABEuZLJmDwEkXUCr7L4ubkL88SmTpZZFPGhsipDrKvvyErSRG5dbBD2Rhtqd92T"
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
