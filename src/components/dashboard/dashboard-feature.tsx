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
    "2k37WGJYWVLXxYLQf5AQCvCWcBHzpk3G8aNf9axeJ8zbyBySjjqSyfRHzQLQWtnhv3tjXogJAyDy5WCa3KK2SANq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CL2YmofuURW4NfLpNBKZhJSC4m63VhWE3TZfRwSt3vLUcwJQbLSMAcCSvnRvdj1fv7npnRnb6Es2LETkMEs3VUR",
  "key1": "rRaoQmitAQhY6F83Tyj7FGh8po8QRKKKApxtsmk1TD1YdY79CU8qQY9cZ6Zb6pJEiLsECmkTyuEn8SBAh5yeAQH",
  "key2": "3sgbwV9hwCDhJSRmNhzir8RUJw1tUv3PM7yYqc7RKDZRvJmfWT7eneEq7GFM6pDGeNEmv5YPrG6c2CPBY74CniWD",
  "key3": "2RVkMzGCEaStgUQ5EZXiRCGgBuK4ERJx8md7u4tMnHbvD6M1eeoygQHb35Uif5rzy1SiHN3PkfjZksrzb1XMkV9K",
  "key4": "2jTP9Dw7481Hhd1MJCVdiFf8R7LvTs42m8R32HFgJXJYk77on5hSK27Q1nyf9ffxtU4m2yovWGQVP1VUNXNptWwZ",
  "key5": "2NC7qpsuR3o3rbFSNQgmMVqf9WQz7yDn3xRM2oT8NHbscTh4qCoK23i7WeYSs8dtXBT9xtW3sc8HdodR1VJNLR3r",
  "key6": "5UqLTGsCzww2eBY2DFfPSNWrr5EiJYZaFKBUbT685zbg1fSkqRUWbrQYY9ErQtjzt7Th1n3NEZSX16NEMG1LSL81",
  "key7": "4H57GwxQzZTjEj5DdyMxHv4eugB32U1E93edKFT9LQi3Qu5RHgFihjrgWbcfzALSANStL9emNC6KpfNcPUYEH8WG",
  "key8": "47TfyoLNhpbZt9pPPkEys7mBFJwSZiEmRTQDfjtvog6quKfw5k4crNL8QDttVrVuvdsqa687E8RW3N6xYeLQuadK",
  "key9": "3fNZ9t3Td1eKvMHgeVoV9LH5VakatgUtdZdGY253QQWMxK6q1cPJfVMFQiu8V61Qz3JpyQ3EsfiJFZAih7X3VSo",
  "key10": "3ejZ9ZH7ig8v2WxKwwiSnz5pAnVWr444ySc9Wi7WMfb7SUzvS2weHrSb91z2zoPzJCS1qg5zAy4iYyQVtf6Z69Yy",
  "key11": "5L4vEYFNnA4XPHjvDWVp75DK76Q3ZFK4xzkRMzBFLqn11oexwsRMrPCAd3vyWEQLMUQ22sEyxo6dtzfAwqA8BZR1",
  "key12": "2U268vgZEYgMS1EGjLFvsRPuR3QmNX8TY3n5W5YjhhEM1mjtjc65wecKa1tHBSmGn9U5BWFNhnP1aYRPAHz1oJQP",
  "key13": "2zMyYpcU9uRjNXbv8tcxHrHGisFG4UGsv66Y31mA3wgizvkDZRaUDi6jt5S9GDzSeAZft71ys24SoWZDaUJjTQJe",
  "key14": "4E7HR6iivsdk7hqsZNTcVm15BKHVKzmcJzbX11JDnnge2NHWU3duZnurwUu47G5TDW5NLjo8q8dyjHgCYJ9THntZ",
  "key15": "5X6bPXFNYpmHr1TJDn9cnAGmLgq31i3Mm7787cjNvfAZJz24iVTj1vukcbFe4Ph19J5nFAuN4q2NDH5YeFKgEaYo",
  "key16": "2XhUp1TpS6QCj27H4Cdb2fQ4of2BeeexrtB5a4AeoAgeSPcbNXk1rhpwfHAFZc65kXcusoApuNZ9uaTDUXTFtQm7",
  "key17": "5GNBiH4jgfvRCjjew9foTmZyZz9NXqvAnbwgEJ7gUC5k2C423iZJmdF7MBHtVJmTskoyHgHdW4H1LQahZu3E8uoW",
  "key18": "4Vxf6r748nYyEGjP8qHvZDRZ958sBSAHcYrPkp54ZXY77GZZgz13rHTxyRu7XGgE4W2ZXoM4g9wLet5obR7wq5Ui",
  "key19": "3aexVNciqg95S3RyBSyrJJ1ib6WqBF5Xk1Z3h14xVAspvDrBbgNCqTYuF6XiXutsSenrYf7BeqhPKzM3hvs38NTc",
  "key20": "AkZXFXAvTAuo5w7iyXG1QKLbQEeV4B5zXhfbEYiy5zfwK9nFSq34haxBN87BB79QZYubMPmFdDh97iqj1mKi57y",
  "key21": "5RvmdTQs86XzvKvgnXwjT3zn2nnv7FUN381DJjqgGfrhFmVhnsZuQhD8ee8XAr4q6UqhXkYQ6iPkyXr744XTm7uq",
  "key22": "3ifu52UumbTJqgoy5jeaTo5qXhJ1hxxjZzKpTMz9QdkpLE4o5he59o9u4ivYBTYrYAGr3T8U3yPjWiPXdUTSqUUh",
  "key23": "5nxcAUiHqKc7uzi5pyTzDMXrTd9fbADQdaMyKTGpNbWYfu17VCSg3yfKDozJm1S8bDFYFfeGwZ1ZgrHHLwm2FFEt",
  "key24": "3yX2eETacqwT19Sm9deHFQcDUU9kP5GDLa8W6otaPNhxArLrfNfUdhgSaGZVxUuhaXsw7KioyFrzBYYd3rzGxSXk",
  "key25": "5gakPDo7GRJUwPGh5SmZvekhY2e1RD3Rn69PYPEHsb8Juruno3nWGKUcoZp8GjAZyo4eJP2LuMidKvSDRA8XcRsc",
  "key26": "355pfA75RPR9n6KkrJt1cimXCKH1NV7py4ZG5sh1o5c2txLRsJzWzFNn5z6dAtAHWgaFLGHqgcNA6WaUwd1jEAjX",
  "key27": "3rm8DFwRunKrWAQa7JKvieeKvx6viMvvRvQ1ri4E8LPeEnS6dzMV23zn3YhcCjYdwQzseogeYaKNQ64q2hZLAnsq",
  "key28": "duyUiaKwKuuEb5niGVXMMUsXrZQEZE1xbUYo7Ex9fNBRLfHKAvnp9sV2MXxS8VFde2cwM989qraMaTCzKYsBnFv",
  "key29": "MvC9d8Xuqw6ZEwUhAk28vnGJLUsmy5wtN5FidEa8tTMh5om7U2DKhojoPeS3P7Tgi4VhdAzmfFXhMhCK6QXyEKq",
  "key30": "39Em9UwTiHkz6s1iHEEW5aHHSZoUvc2LdbBfuBCcDY5Fa7eosCiLBYQJGiZdLCwnEARi2BFNFh8VE2EtxrNDnS2g",
  "key31": "5x6aNy7b4fygYyfZdjsEpjNKzjuTFvmLArihTCpwfM2fygkfKpCv9Rix4D97mwhmmEnJaoRBTsGYqqaRmgvUdfWo"
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
