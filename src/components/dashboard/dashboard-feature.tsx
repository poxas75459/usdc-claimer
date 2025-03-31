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
    "2UUKmQTSP1hvyDK2rv6SVxCqHGWXtywFGi13oh9rX3ZG684asKVoQPyQrDWYLiEkgnTDx4MYHa5uTgFTeSdwRKfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3emcaHdGEfDwH24mBDMdFw7WePbsARATVQZASiPoAwWiHCLGz1qbe1nyHKBTaLCgCvYBpik23b6hwdkL1uYuodV6",
  "key1": "2UuCvmQai71YNk8HNG34pMuR8jii3BWW1TLPngwMGnUEC6WneQ48uS7KcPtXf1fGp3VGGDTzn8fqemSHFW7vF2TR",
  "key2": "5gQvqKi1ePSBpqyge7HLA9jGtQXe4yv9u1zLHJnA8uXxuMfa3VvY3iJfr7rLqMx2kSG6ZdjNjBAdk5QJXg8qY6bs",
  "key3": "tyQKzSyL8xfpkJ4HRf4UxETHrgkyAGbRXm5cXZwgbGjYzRzL7VLusQ96Ue6nZUj8fvKb8rmMDAU63ZCAqXWc4hv",
  "key4": "d41awywxZgJrLu5Jwp6u6c8q8WgCknNWaHfTETzesJznzaC9U2w4UmvNxC8QcSkGnWcP8YJKSg4Lg63qSUWJNCY",
  "key5": "36z6rq1ZvCUsa92PFQh57e1i7bYfGHsPCfFVXwEs1W4jkyXjHVGKEybVhghBjQ1LRwYktBBuKwngVfKPhkPpHg5c",
  "key6": "4dmkWhcxp9uBAyUTDem4W19pYjo2W1PmRHj56S2nr3HH7GKpB53xFqkoxaL4s96os2o2HhSUZ2n5TAKzWT9UEQQi",
  "key7": "5SVu5gFebBBvzko8Tki6w6i8iGQBZKJ5o4MvpfFAvQnFjn3eZtbTehXngj34n1hzaSaTcBjM8zWQc1QzJryABLi3",
  "key8": "5PqAhdaJkwN2abSHHJjCcqgFV6wyVQDYhS7KXk443aysQm7yfyULKTWCe31Ueusq8CtBA69eEVYCHTtn7adc4Ygr",
  "key9": "4cmKShtTJ9o4HraFyGf3x3PksdSA2w1oyt9BGZ8TBw2ZfNKvhEFZuLvEms9NA35RmoQLLuEudRdYwVCX3DUigyYp",
  "key10": "5Tizpt5mPHUhX9QT2mnRXFuW9mZUDpvcwyewZc9TUtjFo4BZoRkK25yHPYo9XnyaxVzzowLmNpMSU2hcGQq7WFtU",
  "key11": "4sAt5kgj4BYRSrFFaA1iXaUtBY4RsUDf7B6cWKi7w8KdPwqt4Kqy5ZdtgD82QGmgUysyKSkEatpw3t2GsHG2wSE1",
  "key12": "VCmmCByWETdHS3gSxAqHN323oZYFfhAkN9WXeC8QJipSukX3wD2fY8cX5pdjttQ1pUorB8ggEKT83Pvu27cVR7s",
  "key13": "2naHVnHeFgJ9Lob7Ug9vG9YBthZLfMTwx5QrcQoKg51aFN4ZhEwunAQB9WbbQptXQ4aZqc2axXXY7az5qTPJ8mTf",
  "key14": "grhzyZqxwJoBPBXCpry6Rj34GABEzdH8ewuceqNo5sXzvDdCRNbuKwrPpfmoYH992DjwStTHofjm4DK4GR41T3j",
  "key15": "1Srb7e1jzJFMMRYdyd137xpPgYar93AftWh99jU4Wix9VrYiHtRy72iaJZtrwizPndyRihXc6n2DSk4V2sWpBY2",
  "key16": "54RbN2FZMBLQrpvsD2CQKikBbncdA8CU5g11wg3fNWyxo6KPiikBq753MyuuQmyseV6fZadGLiwN9aE5aPpNtKQ2",
  "key17": "2eNsNEC52nTnq3f5Ry94uYMcab2fATJuYFM6NwgodySRnsA4jbaCusq1FjDTEx4wjVeBM9Ji3Q6owhjdUndtURCi",
  "key18": "53WsCNQzfjK8Eh3E1StGCemNEY9W2oPgbH85Lau58tNoBL3mgcrUkZt1gz39ecJDx7AqV3AXY7g589UckiSDRztK",
  "key19": "2DfKQqUiguWZMksd3Pd1AqfvxdaaEeiWcnmjctS9e9GHmEbusNKBvPZM9gi8edkQ64375YCmvu6ADcYCbcsAfiMQ",
  "key20": "5ZTbHHSL4vYdsUxqnBKx52ARFStXVBdsp7Fp15a7KrE6JtL8UvwuMABNccaav6r5yMb4DJeRAt6WRyduoaCchtnv",
  "key21": "4e7kF9tzejV7BzLyQRFH9BP9xtzSc7W8dCE2jeFfXNEhUh4WxFJo2WZ6aDFTYvnLdEddbNan49S17Ln6BCx3goo9",
  "key22": "5QqQLBoBy6qtvHaXX4iT3Dfzcj2PVFnjWHhYzpLyVnSKy8oZvi9vdsg3nLyeePjSzqRsiMBaRjjVu2ByMCX8faD2",
  "key23": "5Tb8SknBVtFYNTo87deZQdPYqWDUUGosC97HbcDfz24Z4azUuRFiitGdExMNyVK32TdTZLK5uUeznaTaRQ5MhNd4",
  "key24": "5DHBWmDMTWmPr4sQy5hMDGPRHe5AokEGMPJ5urhX8AcCevdhR9svvtPp71LxF7Uixp9WETeiPQL4FrmiSHEjyPNm"
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
