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
    "zY5SBLCwRXGXW2PmbkB55TmR7rRjkUw9uhVVP9uVUM7A91fggxXa5AhLvKoQi5ZqxABLNvDDgEyiUMw2AxDqEyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rpnHDc8K6w4zhn2QpqtF5Kv61nhJ6W1B8LR8Bzt72qgXFtL3UXKJvMRusTVgxJi3i9mnQHhfQJGVvcYmXBYJVjg",
  "key1": "4SqPMDvoSrweFyoZggnTxbiiH2BJS6tKVqvjKVkzTi8orMCJyGqv2QiucdNZ9JT96qwNioQUMo2RtZuQDzuQEjGe",
  "key2": "3QGrpxHgtybK2tVGGGLDYeD3WhqCt76NgfRxgcu2SSsYwYQXATB1CcMmu7rxo43LYcN36obRRnfQYxcgfMzM6EQX",
  "key3": "Y2dZfQaSZkLHLhb1Fi4oTJi2kDLWEY1XCcGev9PQ8kpQVXDm2rqQ4j7KNe2qJXbQ3ujJaT3dsFC1F4xjNGaFNae",
  "key4": "5ESEgrmSvwhTP4ET9kELiECX2y4ts5KYJryLRnwTx3DN4SWsy4nyrsb2XtpLeASm3d976ksejSmxJEDSgmreBjnR",
  "key5": "4tEBYMtC4zufUZUevCMWLwryaCRYTWVLFm3Et1xDZHyxV7W6zvswLDHuKR9sLynEP7A7zbhT3o8BxF8TqURT5cNx",
  "key6": "5JnPvNRRSoszqqBCQ88G4rZXRk213bLpPobLpTYP4boGmqVvgsGFdKSW8Tw4D85rVHXXp4b3ANr5bZ6CJv1BzsFE",
  "key7": "3UVxcJxid8p3MbCrh7cpMnFYap8p3p3kyZCqqwR86xXt9PwGxS66m95GNWRNz1D9aNVsDMHgLuCjcE4gszb1aMrc",
  "key8": "jbC3ELv2vAyhr2Eei9rNNpLyU5nYYVT8wWXfRyneubhFB4k6yXzd3Nfw9UaQCaLrNKqH5dWtgkVt5sA2LkpovZZ",
  "key9": "58BAMS5hR5ww1K9pe26CuGptAYVVfoEkNgeb97ZExyhqg16nYxiKq51CRNU5qFBbydX7ibrSEdEER6Le9kr2ECo",
  "key10": "5vs3de5LX5Za7cD2aEW1JbF8ewi63T1VepZWytFzQ9zqWBaNVtu7tziE6APwY9dn6n6AgLtQBELkG6Fp3vC6dydA",
  "key11": "2DqKcRoNyGGoXZGUD68BcXajNL1R1jZhk7XNBXjLtyMW6aQUfZq6Uja1FsNsSAG6dcEwRFvB265MbW2XEXihNr6B",
  "key12": "Ho4nH8WAhWvmKWQcPpcD1JRsjHfD7mHaDdooZQLZwyYRVgBGRA5rNnY16DTerbk73YM5L85qxBnDZ2Wcg6upYxP",
  "key13": "33nwPNhWakrBah7AJCTbivbeKgB6729ED4LGSWRzTwvw2D1cehD8fmFi1wbhxbjtWzQV4UXHokLBX8s8o55MBcmn",
  "key14": "61fyeHgLuaYDXyoVLw4CZg4Z7J4VTaSCSidKmEhjewG3TTXcsTLtfsKoRxXgPRACA5gXkvjoZmT4igau345ggAuW",
  "key15": "4sAUDxKVNMGtuhpUk5eYNCGQp4VpnEDT3xiZzfUL3sCYZgYca5QYykX99ehmZ7B3nRCk2gX5JRoKR6XY5Mofgs7K",
  "key16": "49HLrmagJBkumxfGKjve7G1vxtKoRtA16egzoqX2xCs5ZTbqktcNmxH9H7KpLUMmDzaXTPQfwjAkhe9vPqqEg53m",
  "key17": "5Vr4QjN54qBuf4zxE98EHfRzWubfHKYtEbb7vcYUSpt1PNrTxwmaxdwkgqoxws5sLJTp18CjoYu4w5DSujS69Zmv",
  "key18": "4DUpfGxwzQAbw4NAzmVKiLyjU1Nci9z31wepyc6FdEU8u5JnChM7LAMcARzdJ3Gd9vTiriQH8VTiqbxxALq3MZqM",
  "key19": "4G5fApEEdA98UEcp3ghfQUBGKw1xMdhdaiE3XV74kUUuaYvFuVFQj4ibKvgmdZfHimgiANiqR9LV6u7C7SSzz2at",
  "key20": "Mcudy327459sk6M37XUAUFqSb1hTYjEKeqR6qUqoZwwBRP4fALYKmNkkod3VvsY8cGp22vjCsSEQs8nijttgkAV",
  "key21": "3BUKNtsbmVQreneQdUv97iPZtptjSxyJhGro5qzjNNTDXFBYiKwpyyy2sgjse6HVqohUY8FFvi1NigpDeZBWy5Bw",
  "key22": "34MftZeyipxFz42CAM7XpUMk6TU2QUqJ1qGZ2vcDcg5Ne1ZFXddRbSepUjwFiz8d1XyhAzqNhoJnZYGTsiQdSktn",
  "key23": "4Xohih2Mqo7ZN9iZfDSr6foDARw2hBW1f8zNmnwEUodvuNDJnEkCz1H2LEbnEgU1iyMCR42PNhLVUktPjVfvPHgC",
  "key24": "5bhXxFs5ERR4h8ZCRXjkokpKD3CKwbC3x7teTdNBT3s3qyMDx5mAdzANti5t4NwsBd8pEsQSA79LWgTJmfbaskUJ",
  "key25": "4TySPast2Kqahj6nY4gF8Aheg1xLFKTAWJXYJqpbAd3Rzt3csBopAxeLmfmyYxKWhCgte8GhGXspbWEMzLgD7EMA",
  "key26": "397hmDBbVRmYcSvFU3Re7urPBiefJSxcP75ML9kBsqdRKq8bX2b51zPhAn44HE2ySgh4sJ9JsrCtBDRGbWiVn56F",
  "key27": "8F4uuwSs3A8RmPa6anxE8H5MgtY9uCWBPLWhSguhKwy8kHaDtczn43W34KXBCUJvjzzJ7jWhEvrAtoJBaqjuEsG",
  "key28": "92MP868aKamcdegBVWtXQZZHhAkXB1AymfJvWRVp1qLS5f1CJ8abFxpuxKJ94ty9gebkrT5att9uUYaWvF8P4wy",
  "key29": "b1fgPH2Ff7TzrdNxV3T63x8jF6fgDJQYqGb29nfBuhxmAXQY4J6jVMbsVmyZ6GUtL9cDeicxPcdnP76FUMejjvt",
  "key30": "5TbADxwbTEAUdHbz1n6dbpbThCNAjqiRJHdGVkWUnNqmZRkebhNLBGD87F3RTQB5nMx2QQYzpB5mCe2spK5Qr8wh",
  "key31": "5XEjdEogsT4ntbrmsk5x4pcsMKf3kfdcBnBpX7txqKWbjHmrzVcrG6xduGhSS7n6rBs9CsRM1oHDg7gABNvGqm44",
  "key32": "56EvEcGn6rhvZEpknjUfTqv3kPBHaxGkDTUGcFJf19ojSeaiWrhT7MDS2aVfYiM4WQrrJAZ5zsSG4qRve6hgZHHZ",
  "key33": "3i16cosfyeeFDkmpfUKDpnvszLSAnvWMVL7XitjZvU2uCDfvDtzdQ7ECrVW8tUiF6g6buoytKBCFH6FbzD6FyPtU"
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
