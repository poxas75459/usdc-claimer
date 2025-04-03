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
    "4TYMJ626gGyQHZGK4Eei1wKi3aaGgcSSayTX9ezUUbioxwTML4NH8QAjLTr7bhx8bysPR118RpNfHt6kgGLqZ2Gg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ahcb5UeKh1UpQ6VpPBbjfnBEw9xGwH73tG6CKvTvnft9mK5rwH8LZbimGepFyJnpNm2XXka17R2ibwfnidYMo1G",
  "key1": "5S2GCkRq4b4wrspMBXLNthDHbbxL7E4amkocxwMUAFvjxsgfpJq8Hqp6QJhLRaYDVNTdCFCsQtSD8PdNkjb8V1jS",
  "key2": "3eDstRz6tUDzM27TgnvzP79Md24jgxWZf1jn3t5J3GP9rHssL4q85v471U94YbsbsAgFXpVb6NNyVNVqPvmiLq4f",
  "key3": "2xg8tsgNd4wP3uubenpj8cre4aDz238LUpJaa8dYgRncy46R38Qiftbsfjo3oyRZXA116HPHuN35cTwXYa76Zb1W",
  "key4": "2wEhv3w3ma7FacwH7crSEPgsKZUN5ujLJGBbSWVDtF933EaZSDhc6U3U1TLTU87B45VbR9JqBSZvyd6Q8gUTPsbu",
  "key5": "2GddvReFUJ4DZfgR3kgC8kW2maQcYugcqyynnDnJMEDHB5pEZh7NCYzAu5SwvwmHWDz3cwWjk5stS6g6LiLp6zk7",
  "key6": "qDKgtFFdX8m5D8Wx14KN64TMUqeVgbRJECRwXXRvBVPjMtJmKpxzhabo9YSK41T8USggMaEyvx2oEAzQW9PXjxd",
  "key7": "21LByckHgyJA5JWq5ovP4V5obzkMzEYrAuhL6H4ePoZohXyUoBmmXMFU3TP3RAf4c5W7adY9GfDqZXMBy6kxyYsR",
  "key8": "UQMEqmSFf7NsHi2nCXT2V1uRVHJ3utFKETkxxQzZHE3vXWfPEfHxFcmbFDvp3Tycors45w1Rt2JhNGrwaBs2sLx",
  "key9": "4aPDz4rw7EdCtykTRTfXtcW5kEo22BJLT7jxaUFEkmr6ZuNX6VWCSYBnPuUoTvkC3V6LKk8XnyydqfM3CEvf81iR",
  "key10": "2hULzhogJ23KuEUDSAmNzhGcGJYV5ygQ9takySE8gNCbrseMEN5BveUVT8iTFHecrF4A5xADjoexHedFRNwGq81a",
  "key11": "231GHHWGVofwKEvFLm39ZVwTB2p3kywYWD25v5HLV16v95n2wQdU4CUQJLHLkvvYSbPz3T43VzFiBguW5SQsuYxZ",
  "key12": "5QDb48uadxvWucUn4D46MCCnpizUzR7TDAxCK3jqsbrWXaYc4F3LoputZkB5yUaqVsS3iQThGT7emGpwLG9QMQf9",
  "key13": "2wNGGMG4fXKTqThR2h74y3U27D26eYdhgwpyrM1mXbZeubYABi1q4NDxDGYibMT48XoGqHYcXKaaX1mxrv9j33Zx",
  "key14": "2H9CsExvZ6awMK4XyUkbe8BX49hJdWo6uWo8YFP2TA7ZQv17LRZdU9unx8P43TLuYqrxQZxB95zWp1NpYreXpavZ",
  "key15": "NrT1z1TiPnnjz8XzhvKqTntSZNwcENgdfxGyFKMAtLyYvShFiHDvQ3My73aCqJs3sEAo3Yw2GM55UfBCAuDGSkP",
  "key16": "4SZoubWP4qm6iyFR1RRzCRgdgGYnrj9xnD7tBAhPMLWEKdYwWnBCuAtf1Jvk9aKUkCNkALNJu2Y29Kn3NoXJqxmC",
  "key17": "FRfNYn7VQJtWXeRm8JnokveTuPJb5YAwdTLutw9ujybjssbYQQJCoxU5E2hjMRuTze4ysYtfNRadPdNMS6UbLFE",
  "key18": "4vbGE4oB8S6RH5dsAsCJbgRi1dYNNgTcq1NTe9a4Jczb4jMeYD1w5zhW4gy6NHhHjjEL7JBTBEfQwBkk6M35q6Dy",
  "key19": "4N2dTAYJg6xvbq7PjeRjQB4ArkLMzCkg7Yjpp3FKtVFQ5yYQ97SeeSTGvdQ5ytr8nYDhnDd3jzRyG6kqKERjiim4",
  "key20": "3yymMvs4SG28geQp3ss8uXnzGaYZ5VCKUVihg3tmrwjJzyb5AvenPjcQjWoJ1ypFa3r3ZtgdtBdJApcy3kFtXzKw",
  "key21": "56GxHHr6Br9jqQ4gR9ruR3VsUTeEwRCJCVhALEVX5NnfLPewB4DNga95N5dNmgby8jQPXr9UqyRHSyn9NU2m7QoN",
  "key22": "2DpP1GChfUTLefxhbrDgDuH6JqpfTnj9ZXHwook4VKZb7gy8utUj84fKvXS1m3B8XHr9hsMEuWiSEDpd2ZpGNaZD",
  "key23": "EJRctZAv9B6i6jQtKxM18X2XkRLJgd6nhbAfwqBkBHZk3E7pPYZRAKxmJYUnxzmKp1XE1hmb3tesn1waedQtM3C",
  "key24": "2BKyX6RmFqTQLb8ki2pRWhSdw5FBir7Pdji1123c9T7xjf6uxWYfHs4a4npx8DofgBGwFLrrSLPkJCPiAjuoCXT5",
  "key25": "46Jikt75FkeyDbgVXfJepn9uG7rHGZjpxKDb1KDRip2jhiH1yChBKLVzwhCYiDLU3EEzw826kYWEb52XkBBeggrw",
  "key26": "5Kt37wMorV2fat1768xUmDiCK5iRrYgbbcmYAnytfCCCy2jiv2oPgA4JFuNhquHZxgKmZxG3P2ytwALsUcLYX28v"
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
