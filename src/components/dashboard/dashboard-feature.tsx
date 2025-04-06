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
    "DFRrZVwGcR2tjXP7inDmvXoyPet5vh4VNiVvcrKhfFsmz1Wkmtf9zn27ySE6pQdN2GirB2UWsVoW872PCY9yLxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tacUMwfNJmbGZGbx9G5AwczefjaRVhBxAnGSuuRvoj8Z3SLJDzar9Xvu92iRKG4WnJpoEYeRrAE52bgmrJpUnFJ",
  "key1": "3MBeTLTX3HJra9sJMgWKNiqoCMoWGj6PC1182KdVrfoW3WpAwA4UkXjiDbJWLH4WkFg5qi1nWMHeuK4cUmtB4kc5",
  "key2": "akZwYb82bdNRqFiJWFWQkVt8vo5hDNDztedsgAFdoPmvmoSsMCFfzpJ3fgCdQgH8X42T954Wc5GbcsPoZ6csoPQ",
  "key3": "3sGJRX9XWjSY1FqzNYZWVKURexeR2h3UksXrNb3MM7kf1t6bqpGXwdsqAwVe83sbfSTY5iuSN5oP9cEhzgxrA3np",
  "key4": "SUS63ReEZ2jFd7kJzC7JRKdnnx6becFszRnfVyEMrZbpDystErT1GRbyjbRgQo6Pfy5Ymi5FYfSzyxGV9uLc2ew",
  "key5": "5mAGPRDvZkeZwB4DG9uXdbN5k6H4Ta1kTQfHVgVqfvfmbkuiHm9oeRwzgz6cnYetWF1ARyHi29rV7vAqUfcWfNu1",
  "key6": "HGTuFF1FEqywEwSo68ZzX8KPDbFrSXykAYBaRJQoX3sSvf8b7jmcgbqXRgcXdkygzYRUVi67Er6A3zMruuch5Lr",
  "key7": "CTUQTc11xRzGjfDpt9s6xvk83oT61nCvmAc5GRVGKQLyhxZ73BUGc7pMdkQJhdM4u9ms2Awey2fvxWtirPJXsSo",
  "key8": "5iu4E5oiXA7PtibmxT9ncpznQZKEc1JjhKzJM6bcpMgPBX21CQhAKadgju5tEeywd4ADLAANoEiik3U7JYeA1q4r",
  "key9": "2zzuKn6p93UaqGWNbZ9eStj31E9FtEqzypA1NUaqvQHctB2wvXUvByCQfRqZmNBKQKABuBXb79zvjNs8ryVYNRQA",
  "key10": "5oC8Houwbat8nXpj4GjXVEymHV2QLMRfDfdL2yPxkWfHFB8BA8Vmo9aGu11mNm2v6CHACqt2WSyp3r18GBq6Sk4X",
  "key11": "38sud3PwWKNeRKwDgaccpir7K7sZWz8B7MJqcJGJJBzy2D9jPVRit9WqDKLjEqG69rG4w6dLBymMybkbRJjBimGa",
  "key12": "2bEvfnyo8MDRTK5zFByWRy81BU4rTPGrJapY8NgmRifis6x52fPwf3R6DFxZUmkW7TM8KzisYTtuJted8NGLEvxY",
  "key13": "62FGY7pTPUoVoAF3yLTaWQBdR6xbJQKYZvFyQRcaVgdCJMCi653wNcYeeLtMw7cBxVEKKE5Q3iPiuiW9iX86fctk",
  "key14": "5BWttpAQVeUAgo8qrkyht6PgVy5XeUhUBorbBVo79y1M7HuH9rVAatxWEEhYfy1X3Nhm7i9LRVfYS8GDVQoB8Y2b",
  "key15": "4jGTQUWBQJpoDuRPCFfyEi7MZkAHVsYTBddAaXWWW7WdAniSsccNUV22bFbjWEg9Ms3WEwgCdCd74dDBbTKdjk91",
  "key16": "53fPENAo18gs25LKtzqQDi6uTPVx5Eq9mthizRPnNYdZ9NgUkAZB5kGuWgBPkEZgSikxnyn4HkF8fTesxATK2fa7",
  "key17": "4ViDRUBZeKr5gviThAqu3uVqab6BSjykzUsom9cc4EyBW9R1Q66HpCB97mJoNPQ5zne81ei1aRURGGXJjDGaNhXi",
  "key18": "2yoXdtfNgFP28SzowUtyCigPgNjyZ7tiRHbjv2nh4wKD79kyZhx3fFd4yDXXMYB4sRHbMiKyoWXD2fXErWBtnheH",
  "key19": "5Dqvxmqek7MX1mk7H5yaRLNTswZKjC9hvkoiijZXzLWo4dLWzznAFgCxV89Q5az29QYU1LnBeETajqQmRU73WPW2",
  "key20": "5qxZEUA3czasCq1PpkSBdqUrhVN3dqzBEDfnoK5SBeqPiGsd8xsVffxkGnRwwnrtFptZbGzbaLpnQDHyB3Ddeaxo",
  "key21": "znLrSiUuuLhspizPVsm1k6kEPVeBwpU5myFtbwn3JPEzvyc8ucjUHqpYSaWon84PPuZWCB3ZJTUSBRNmJD8dZsF",
  "key22": "2p7RtUHx9nvFtNgTWsLbRxQGWvLJaZ89ftcgoWSb9bavUmBwYUmB9Z5atZDNUZVznBUw6LvwfEmAcoY7pf7r8TQa",
  "key23": "8Ry5uqs9zuRqrcFWZbMq6q7ozcaWU9w9x8CM5rVtiJKKdCmgo1P9XcDUmh4y15xC5D8ZWUkvew68TRDvUR3XTvi",
  "key24": "4AbbCJWMHAtgp32HohW9iigrGR7VyhZUZdpKY1Nz63bK2QAQj9ZUmB17cTLt32nXkNbbQ5Ry8C1RrkZbSchXFBbz",
  "key25": "61m1HMLTGdRZfWKABBwExZJrXmrJLEXMwF2LtLBmFvZaWeQrLxqM5M9694YNokFB3BpShxE1VzckkHLqi5fJbgms",
  "key26": "4W7yFVXv5mkShCxxqep12z8rGuPiuJbXwVQ4rjrvuXkNz1PJErBX5HDL83tvFZzcPkQB941xdL3D4UPmdyhW26kw",
  "key27": "4nDN6zoa7VLQge1fNmvzy5AoJocqjiwienxhVPjJenTwVHFm1Usej2qx2k94Vz1QWqqZ1y5MJNLjEeobD7zueGKs",
  "key28": "XtKKA94Cgx6yann3tTsDB7Yo8rfk2csDpTHKvH1FPj9rm9ZV4BNPtcGQXwHJWJxAxmeNHtAYdkRho8NLZDkarCP",
  "key29": "4rgysujc3m3idwXDprdrbnrxAScw1uQ1rWvn8ErpAr3wNHEi1JLFpL138GNpJFhy54VEdmsjv2qeYvXXqw1cDprw",
  "key30": "4yc7gYb8tK921MQbNtsPJcwuAzyNeZKJSodkkiFU4GEWVFPvcuL3bmQpNqqZFEe815tqbs9T5Myg9UXktmNjBK11",
  "key31": "4pKFsDUdp5AMhfkNhFd9dVmCBHd8u2c6T2TfEUr8GXFd5KiBYxDCMjaZkbbMExZ8VMCz26Rd5qbMETyLNXXuCHNf",
  "key32": "67b5Ds6PAADxA1WFNvhXPxuhnKjFKEFDg4uAMeKXejMDC7cMxbpU5Ydpx61K7u1BfeLMjC7fQ9dPKP2agix6c2AF",
  "key33": "4qLwh8yJ1m1SYotYP77exd8QUt9B4rKo7NTdT281NNgYaH6XkcdhHefgYpyTuPJsUCUCoq7kb3FCpmgZoUiyXkqK",
  "key34": "4QT5N26TDG8RJegygEKzjV27cCMRMgBtNaEkfGSWquiy6Y7tvy6VDXwF6XskcarT3vD6bBbsGZwGxywXoN7yCwiq",
  "key35": "AYMerW9yfNf8c7XUoNMu99WHfWGnNhPZVWajAzueSMwZm7q3cBRV6tKR26WDnmhcub427sBnWcM6FJQNsAamNMA",
  "key36": "hvnWpJXDYsEhjd7KzXgFPGFLrpXj1jQ6U8M6Z9nYETGg3bxvYbAv9ttLSVrGeJumeP4fDL4xs5sgXFbywPmDSYA",
  "key37": "5bBYybD1X3bZo35uM2yEcyQ2AA28vbpovGVGr1Txfi4JUAbmpgxrU6J9DaKED4CNibecxpYRTZwx5Wof7wqxtzwe",
  "key38": "5K1vi66vAWorubEpSffKksgHjngFNAoRgQUV2PoyH9KKg2SV92JEn2U1o4upj7e83kmz4yr6tp2xLTm1gj1hPPYf",
  "key39": "61AnEXBbN2Cpq7DXYAz5xZcuGxMPgoCnC8mNryNGbXafEncesMNceC7DL1kPypB3nwWe16pxzvkSkm7X5fPTjXjp",
  "key40": "8ixxqGyTtR17uUHJRduFwLYt3iR1afuoPPc2S3w9g1gGPLd3nZUQnwHQ58HFLVpvZHjLJxy2FocoJv5PC7hRhjM",
  "key41": "wXARdipNnawYARFyDEQbepu3wXh6xemAwiTQaqiktE1Ya2nN1t6cpBtQsbb2M55yAiEtoY96mSFHuzQsDRKjceH",
  "key42": "2SNc1jS39FPeLRWKi8Yz1fJcuMLEEJZiujcmvBxFcAxLTbK76itEiTLowkeRrRyvyodqTeGNa4TwhUV7B2aS9tAr",
  "key43": "5K81NsVDYPffCgUqpqUc1xPmgn5iYqEZQNiTVALWQkQpNthqKVfqCToHR1K7nks6A8UNRRyWycw74wkPf7R8ywTB",
  "key44": "3MB5JsjunhBjvDFNv1KjYMNeZUvEY4woWH193MBgBAAHdxnYQAizSKYJ99ZaPCYuj22TVx9jfQSqaG3UXsxefYD7",
  "key45": "3h9w9hBa1eHeBuJz9cwsTMW3mrWhU8nTaDD2tkFjTWqRTPQiXvcgfZMaNmpVPJYbqNYU2cy5JpCJQA5pthfpcxgH"
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
