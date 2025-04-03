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
    "2cim9xBgDQpKmUwg4Cy6xUaZu3Xo29G7cmDr1pyCLPmojUXBkzhCP4mxM8VDsudiaggbi9kdscoi8JtWCNJqiyqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QAdVvSwJX4yRas1NWQuFMhfBrz2izAtsXxGo9D1Hwh4W1jPzonji3RRz8w3TxmRbcRDJETA4PXAsFtDCzegKLbP",
  "key1": "4TqRPWJ2JYkZFTPYUQBeZpiYy9LQKEJsRBedR8u5CkYU2WcE6bLV8YLRUPgv3qRDygdKDum8NFHTdTdfX4vq2FCg",
  "key2": "2b7YBViVr5HnimP8US9dy4FvM8fXR59qNyoD6CBLL8v5zYpT15PpTwQFDJP1VqRQxxgqjV35n6ys8WVBERaTwYJq",
  "key3": "5ynHzMykHxP5npph47y12NoKJS13EMPYV8tbz96JbHvF7392sXZfBi59HNK4k9qNncSmZmHidp8PEDsnULfdkvD1",
  "key4": "5ckNWCCdqQPvCHrtVdUYS11853fZKxJMoNLE9jsEpTXRxcZVgfo8crs7J3iJnLfdn6QPir1UzQkV51pr4CSBHda8",
  "key5": "4oMtMbTXZaHNjFzBcXCyzacSEniKeVWz7887BGQzKwLcNuqimYHHQMeMmvCUsZKshHJ6DKasA71cndptJddYRwJ8",
  "key6": "21YR9ezFXzX15PQyx7pyqqGBkykaUo9F8BRfbpfZBPnZGDpGKUJShpQe9meWWzKEiuo6W1aR5gN8XLd2GtRzmgXs",
  "key7": "PEZ5NSZt8NJZctD6Aa9HKUiXAdhzdAfKZXBgAFMT9CagyH5zawuyErButszK5os3n3XPZnM1otgMVZMfNgaziPg",
  "key8": "5qoRawQXcNrUohhAjRXV59KK5NKnL5vfUrHqcJm2QjKaGXePjwkBo8mh7NtJqSZwyHMpVmi6i5Hftc46sdqHBuQ2",
  "key9": "5YFWvNwhk1c4DQp8xdrToTiEdtC9FHodz41s2NU9wx1PhK23Zj5zp13JcqmRoDBLmkSaMqH7wU5kwaugHUPGGns3",
  "key10": "EtJwbPwPJ5Qv9Ta3YNuXVtBz19u1UQkkkjpk58QmFaCBdDtkJuSAgo6LJcb4obAV3bJMN7uZjTAMWi1Q7MXcuE1",
  "key11": "5RRgMYS1SBve626TVp76CppekZk2vKGeJ4hyF8i4bZmLir9pXwGca33p14foxy3hAGMYjT6gjAifDWKaFSWrWB3T",
  "key12": "3BWSrDr5aDF54C4ZzCMqCHMvXvmCwNXfGyknVXYbGjU9S7en9bpJUXN288bZTXd4NQMNhaxfTYtPaoDT2uDESXo3",
  "key13": "3H6ectfteZu2Wfin4eUMkFh65AcdWKFsjHgyxCeQPxVtWBkxk1mqqLFK2DpfKqNLb8c7fNj2dWXYj8H5yM9GZHG9",
  "key14": "kYdUBLATC7Eq9e8WqLPPq5DipXYKEAFfoi1yt9x644qzPvw3MAhy6bHRXPUegyZ734vMkYny1NESMKM6YvQGbB1",
  "key15": "ipVnduedd2L58oaY8fXYDuhVN5Te8KPXPYXBdMzD8SMjLy4zua8yKrPCH9et2juyXQwS3GTVMeJrFpzhzaYwJmZ",
  "key16": "CfEpicX1pBWLZ6H3agJ3AK19suwaZojMz5SzYdKL5mqhCFNqFaS8yS5M9buLwa3gTRfFqGcLpJRMYDxzsdsYUs3",
  "key17": "22N5KUsjNdExFyaa2iLoddDZLDwQZAdhDTxzUpJUh1oE4TE6AvAFgoABZTVhEKRsZnwCo98yyp1vESfHF8LS8Vo4",
  "key18": "4V99Vrp9mQqWDYVdUjGUe2MvX2tehD5e7odt4o98ZAAfcCkhV4nnZMQbLFQWDHh4urifQoDJrwuXJ8tZ1Zr2qLJN",
  "key19": "5aBoie65hN9aGJNxse8uKnJTQ9sRKaqHsGHTr76vUFzuze6HJ4MBRPdCT4VBsdxy4sPfJqf4fkNv2Xa32H8o67ny",
  "key20": "hHnHrnq1Vn3H5PeQAfKXWd5YCv8z1fNeKLvCpMTyYHMnS9SR65uQQoTJ9emgscSgsFaEQHgejaK3U1ujx93CPj6",
  "key21": "5NinSFu1Kmtp1ckcVWGsHtoWTCUPE1rK2Ht6sw1a1NNHYVYPHURggmBo7FGQQe2tdFFqtWAFqptiYM4kmNoSWhF3",
  "key22": "2a5gMGEJgutxEhrXGtEAmdHY4WdADsMJB2iUn8UVxzF1GS3PAPLpvajXSARQGyeUdXgoRTtcoL1eNEqfVQLdmXRM",
  "key23": "4s4SFQZEiA1uwJFFtHM8kzJpiZ7MsxAAXboZ2h6hbWgCbkch7FpktnXZqPQLbh4UJPzbMdQtTFsDHUc2cFWrSHMx",
  "key24": "48ZToNs8ELdvfsRgis7apu8oFfYiUdQirFwNsxqmgJ2gCASPc7qvDv8i97mFhg4onWDLt2ZHN4cwKiMQ9EjEcT1n",
  "key25": "2aKZBL7efV7Zz9KN6Aebxg6qFvDTy6nwAHhGtroGG28QCAdtToBmSN7kFUfpdHuobG5SyCU4iUA9ZWhzHxhGtFx",
  "key26": "2vb82Q2f1y7xfrGnV1JUW6KeEs5fXjNXB7eA5RcBXfGwLugk6u5YoiYzMSfrjEB6i1jstryLxJfZ5EChSwmpVvyS",
  "key27": "2nPFixrFfEnyauk2ERYa5Hr1rXHjC4NxMbf8EcvE8rU6VVcZPRreARgusSBZniXhBT8TDghF4gpCe6r3iPZbNBUd",
  "key28": "3ks9zpWznAxUpnYVhpSXXMZLkUQVmJL1qsCRFx7EdpjpGqbchFaCmUmCZJwXtiCYc66VuvVJdWuERMXJZGL3NCq8",
  "key29": "uYgYNGUpZWyxnNSu1gra73h7F7v1LJck2qbR57kJ7TQCe6U1xY3wGhyCVby7YBWh7zkDPg39QEauYePQTgp3j1U",
  "key30": "41TMj19Hd8AVnoiS5r6yBjrL8o6yp5btcVZiwLWwMugA5x8YcaDvdwwyM3Y3LTfZVQiU3CZTxwX7h2JS8rKp6Lap",
  "key31": "3DwFPwrHpq2Ldo2hPuL1fX97m5vJpp8oggfWGVu4iMdXRweuG6fYCXVASrbuTFWEqZ5rhiw4RK2ZtPhh5Ay6Ctdr",
  "key32": "623WRKahvbQ9QeWWSz4GJwfenZ8k2519PGy2GUHj9z3ZwrfGuHECB7z764pMUkFY3UyGjEUeWWVyFXxiAUBbaGnY"
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
