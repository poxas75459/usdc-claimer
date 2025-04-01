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
    "npjK9dGQouA8NWdZnGb1wzBjzsYmsqwMmbaBDC9h7UNe1Ty8g6LPrTt4oxfZTktGWtyRU8rmDXw6z8zDfUbZNWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63jhsXyzzMGisYakmrB7Sd2dkn5C1ANwoHX5w6iB8WmUavAoLssV28WJssqYhEo7dgCMwb4e1ZfeYSm5VK6XAf2R",
  "key1": "4nWanRVAnvgcKSqnkddnKGuRVwhghkgZJzjEN82KpVtHurVuFfq1P8suL1u6HGKUHtQ366sVx9dmHRMiujrGEnup",
  "key2": "X1E95CUSK3pEW5bBsjw637ZBT42jhRTTMuLtgUgVxjpd3k6rCuUdYrpXNck5CRC2cqEqkgasiWfHFAKtn5714EC",
  "key3": "62UaHET99JtRWC74tEKWcufbQUoJvbZqwLczgwhjgZBzY3LQzuPwz4Hf7Wck3tcH8FTxA65kRhk6RZzuiAhvi9gq",
  "key4": "2egeoY5c349UD1XLZiHE3hx1AiaLjbCxD2WFHosCTsmG9z4GyLFxyAAR7XiZLpn6HURjDjoEkk4L5j8rY5Hvtujj",
  "key5": "26TkJMyubcaciGmxroqYZtJ1eWicnNKaCZegBo4DuNQSVj15Uv8cDi6dHTCza65hV6aaQDdMSSNznRFtPt9AgLRu",
  "key6": "uKHLbUXxhaWKqhbr7TLAHywTQMJ7CQVJW1CvdEE42LGXwmRMpq9eNmXP7GvmzSKnBfTKkw3Qx5T6bDApPhTXg77",
  "key7": "2AXTRE5SVuaT3WE4xgzCaGZy9kSnjVnMmg2ZBExkkf5Hz55JVQRkuN2L5fg13FxRLetyNFk3UqkULAE51Wb9ogpH",
  "key8": "4csegwp3YyrqpAybVQq13tygZEGkzd1mSjco3yMckV8h5bDSZREnn4tdHgGPphVmTr4RY7Gkqr2N63C7pxGCqmiM",
  "key9": "Rw97uVmKKyMzc1y5oCbn8W995aV5VSbTHbPth3SC8QRpb658RPUDCVtVAvFXmbTh1PNonj8djU1X136xFktfW3n",
  "key10": "nLypgMec7HWittUfbCPw4rmZrrKVWEVZo3svFxY6yksAXCpMfsbceoscRyDjn3M4EhWva82XegfiHNcgc7NnmZi",
  "key11": "F3tv2xb1mKxzs3Q2WxnT14iUW82P3mRpRyjw4iCBHzPHZ3dVWiCUrDxjrriuvwzSMF2b2ujMisEKh2xybo7QfRd",
  "key12": "4mZQwTxaqR2VVpzh9pLuvoAXKu6Sq42EzqSYhvpeCqC21GSo7C1Q1S1yrkz4CWAwbK6w3h5dRisidXvSo6rztDuK",
  "key13": "3xBwsPZF14mvLT54afrZvKLWGkorVoxn41sJSDUQ3A2fde8Gk3JrG7ZZ3TdhgiyMuehEUfAmtY55Xec4DsAg5y5Q",
  "key14": "2LapPyqCBKPtyVYxKpQH3zpbF2uXrPc3wWAnYyJswqtRx8m6RASqTrgBf8xB5y2UzSspoRqqL69gai6rrYP9mDqL",
  "key15": "57VThS9fCczfoqw7MMq94F7DTLRxrPRK8P2mXNwM28e9ToT2i6mMAzbkwodr8mcBCA9YWWBVeQBaqUfprzTU2tz9",
  "key16": "464RRUWWUQyeGyCbUYwr4QD6rXhmH9HzbTwsnjHvRWNM8MkPJdfY7rSL8EgYk2EbcvCQHyR4PxTQhE3be2MpG74k",
  "key17": "4sd7rYLKXpRgyntzoiubbxVGru4Db4T8kxtUF9n998yTmMQQ9BhA2PnMc3vDL5DmiW5mP6uYjr2JmfAee1DeMLcH",
  "key18": "w1Fd8d5r9mn3BTr8SJAiwkjX3oqXbrTxFQTGZv75kK4MrpMQswGDfZkh8FMytzEyQsuhWfDnA4yWViknR9VTy8E",
  "key19": "2C7i1iL9WXaPZtD2oD6sArmd6ZvQTSSkHa8oEi1PjVFvBP3q6jo232st18k9pGfB6F3y3Z3U2ixwR6rVfjukERDZ",
  "key20": "49bNGQvDmSPgGprMXVgTqwLZWmiKSbvZfc617wN7PdQZtCdUE7RrehG5Qoyi5RnuBv7fyf9UKNBFcSjQzeP4o12t",
  "key21": "3Vdf8mfNAUmVB15jwiBv8T21muieGffJbpv6L5Ek2WDRs9t8S72ywCToxnThbyTob6Dr2dhHtrqtNP9BZ6fNwB3g",
  "key22": "4DZosD718NpfFmaRuqaoCQz62b2vo5hRpgEYFYSkNQoSGRQ2paomh8qh4P7nBHYuvsnE2rbcjxdA5MAqQ1ESq6bu",
  "key23": "2Ym3YRHaHUUYTEkiTwEACHCFkG9vUFzmRi7fsMJZdnizcvb3CS2MaYyCJ7zuVQsweajfDJ1qGqHkQ9yr2Ry5HxuF",
  "key24": "28r8aTbCDocCF4LZvf3PAU6VaHRNCiq34t2PtMxjGkr9ezG7dk8X7PMGM66reMCNNgBv5x5Stkmbd75sceVMF1pp",
  "key25": "2ajDSHRWJHkSyc9GCUqKXskA5Ubd57EmAgzEXJFGfJfxULDMUAMJyk7dbChhWHwaAZB8X4gP8RSu7bwuJuszgQkR",
  "key26": "3ZxJq9zLVpdc4YggvLJABmjdk8eMQYRFCT9NVZQdWkFKPmDTHSNZ9CckrXfRcAdsRw4TxUttNyQnqGBH1Zk7XyiQ",
  "key27": "5wcngYqT56Je96FRTZE2Ny8pXbqjRvLiFWaekYFrFgn3K6LD1DP83RBApomkvjELmWZfxhxXehBpwRudk6kn7ZkU",
  "key28": "2EnMF7b12M9obXZtYDfHM8hBBCY6Q9GiSyFoSk9rbMjhP5SoPerpWTNMVPpwzZZhc9vuT6Gy7CLyvrWxrTCSK9ki",
  "key29": "3Z2HgvMTjujAhi3ea9v1K4Sr47fa8sZvY2P3wDkgnKeWYkcm3Ax7jnPU3HZCydRhZDEQhcNy6u8QeFyVeiyoN8iS",
  "key30": "5tWcV7sDjx8PYirBtKJ8FoR9DncbzXQq9EujbehqDdcAYK8YCz51bPAgibGhTLbHFQdXmawF99Hwe2XUkFRGWDiX",
  "key31": "5Z7VgkdMwqBKLTTYLYrKPM2KVWxXGpaPRhe1QW7cjhZtPh16qxTApPJh2bJxnURCSHESaWoAGhAcGKj9B6pcspHw",
  "key32": "Bt5oGskPzhZiq3vpBFzEo3xU6jEC6HTA39Fbz1UEiqtnXcCrizXSCu4ZZC1Uh8CktiGtrCLtiW33BhsKo2AXRHA"
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
