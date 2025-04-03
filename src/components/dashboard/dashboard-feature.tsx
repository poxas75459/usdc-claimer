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
    "57ss1MWyB2L5eTaE9f2BPn2C3hmnL9djEBJP84kMz5THSXW3AbzaFeAp3AQ2GzBAHf9BMVab7iq3KVUpriuBR3VH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QcPvPDVPEjNBppV3KmcXUESi2wLjDFNoJJHEHXGNzKc3TcVbr4iKEyGXWGq9k7CcC6GquWi1rFdBYxAGKwrhCFt",
  "key1": "2wdS7uC3RThdmKmgxDFrjYt8TNEsKbvnMyR1wdEsMjtMAXHVR13m55B2Qx1aPTMmoMSqdeYzCNjQFLxHpPuKc45s",
  "key2": "2pgrSATZjjmXYt114acN9qw8kf5hT2UrnS7cpTwYqanMKxaWAH9v82wjHzd2PX6QTsvfAXV6ckF6zUqNo2Pk3joe",
  "key3": "4yp7mAZfJ6Y9MMs1T4P29xwZ7vfp8j8xFAPCBGNourDaf1fgUwbcCjT3PB3cEwxkgxXTwK9VvF67WQr5RC2LPQBe",
  "key4": "2ivrNwWWxJHatqoRyXExprKc5CVTAw8BNEKKugsLCHDxq4WL9c3953bLEMKbhKygr8PvkPkzbQC6ZVmM4RNCjpWo",
  "key5": "LureAvH3UHignSVbNrUfZ1fmKpsju884R72MXMctMcgxv5YALYKWmcWUGkX1JAPygZ5RTzHGGQpSeHE4mz6VQxP",
  "key6": "4UWx3GpVeRK653AtsTTdWLSrcxhVAP5Hxeam6Uv2UgCwsZ5kSM6SwHuQFeEHEik4C3WPncAXHv3t8Qeo6aaRFtYs",
  "key7": "2tNwY2x2p5FqvPYyaorSbTLd9DMxqR6QGv4Sq16z5x7WaorgwZuXjxwXprrDk7B4CuN3wSWFaA1PonGswzEZMknk",
  "key8": "3ASWHBToBf7V8eKLp5suyMj6isig16sWSUARtsLdDty4tnGCcERgvboP8r8Pof1xuxmby84CECSiu1rnBeWvMGm2",
  "key9": "3hGMzp5uG7hGP5T4oPF9U7Ywx1r8ARG1fVyS4SyAYDJQTiLswT5oZZBtbfJrUgFgrEbtgjLStkjwb9Af9BKnRftH",
  "key10": "4RPBodwHbqfnQSNURoybeajeYrPX1y4KvJNyYBsow3HdVKj2K7nk6P79VehzsfzgFLYgLLpyvibtyiNKD8Yhy3bn",
  "key11": "5byupVZvxvQHeY96NnVizVPzYqbwGCpVzP78JGEEAgjjR8pbBgbvTtqKbSWCmWg18kQmr4amksuNQBaMhv17ErHk",
  "key12": "5tzP2Pa6LJK19Cs7c6pn2WZFYBnUEVvm83EoRELkK77TpGStsdWPqr4V9BY6hVHy6jawuLTf2M36D41Ec5p3ArBm",
  "key13": "4Eq637St75FHndoeCDdRqnDNr1QnuWC2qtNWB5pu68b9qr7G6bb5cEwmNMDMKYEWYGKepk9kHhnokQGQ2ymsbvey",
  "key14": "5DEw1MGp6axJnDgVSrS4WSfyKSnGjV7EPR7Jx4RRZLqJug77EqneSSLHowkQ5jMuUSaWNFyXr2zwt9WAYWUwMU61",
  "key15": "C5CX5XcHHb6mEiVNwodySsANEuH3etJifJU8DLwC2pErysnqtnrBXqFU4zdDtfu25i9GCTECeaZvwdzDfhavNL3",
  "key16": "PnB85QVzMVmEPFR8rhQmstYTpaxj66MUBrefmKDG42LYwRrXBuTwd9GZQ1BJ2DQrdMXtpYiJC5RTB2RYgriG3W7",
  "key17": "34yknRwy5HP5K3tACrcLxTpqGt55jNg4PCT4YNGWMiYRVmBfhDP63DkKLyQNYmZHRrfZg8AsTjWErr9AAZWse5WC",
  "key18": "5MbGMUGtXJyX2L8Xa1T49zp4d1pN1Br4inh5kKbiGiCfpt6ETUuypSR2y8uMGzVsTHeWhZgkg9nKjkvDfeWzJf7M",
  "key19": "2r2eWX9nWigoczDXGdLuCb7FheNyiF4TarjCaxfHzdocW2QCY87JEdjkJBcbAocrwAEZbj2Gdoh2BQtNaPsv8ZYL",
  "key20": "5Yg7rj2N7Kgrae6VGNbYJDL9TavYH68muUiTq6XPjoyVnzQDfH2FTMrxkFF4Qk4usJYxFyLifFbpJdz8Q4U9H5Zn",
  "key21": "GMWpoGsN67a4ArMqD25r1UaY9krY4xKRzEZhMcmbPbyiXmgb5D425g8mqLZFXKnRSQR9Nrq68mZVh2AYrRZyxkB",
  "key22": "2zsUocyqorTPyQZneYsyMfYaGVTCw59UAjFPWyTVQ3jjyESkicsSEb3neZek9sVdF44LWJEmgeeNJfyDLoFoLftA",
  "key23": "2yewaZccELqmd7PK52Fu8zK85QF27B9eneoFAUJ2wujnPzsQDSU2NAzYu2Go7mHU7zCarmyTTSkFfxToxwrArfyp",
  "key24": "3t1TQ6Nk32M4DchrtvwG2wyXhAAtRKvqHRzkdM2Tpod2a96H9D9hSHCtwoDigtQLKbxubJ3BxUrUAduiL1EGnp3G",
  "key25": "5bKTg6ZiFjCDCnERigbNoJjcZTge5iVkMrm6LQ8MRubn9z1kZtL9oXZPykZNGeeWxt4f41Uuw7CW5DDS4KEx8KFg",
  "key26": "123JhxjoPhih5gLo4ajYN7BMdWrjdACebc1j75ppcbzdcLyt2ppKTghVTsGK86YvccguZ82sXa68bC1dxRY5q3M3",
  "key27": "4ApKNmqE1w5egkd3Kf4Jq5phLn5BgLAAbj2dRBgnNgv4gUKF7LKF2mnSn6PASFuzhvKBDs4YRr6sGQo21rckQnMn",
  "key28": "4qmZDRdVsP2xznjT3yM1freV9ayfnVFK66LSFFmCxcMNL5eGARb1aT95HsFjvq7e2ho31wvoAQCDy5No2ByzoeoZ",
  "key29": "HPTuGdBJ8A653cqvPLVsg5dts83iWmQMQ9mnkYTchLL8F9muJYnEzGomMkdY3vYQtypMtNhBQ2YnEwf8zSFqPyY",
  "key30": "3DEtpFMYP1eHtURtrdvDPvepE1oG6Tj731z1LBPtssUszkRYZq8ut7hUEUBxQwTWtP5E8d9Lffz12pSZGyScJk37",
  "key31": "2j5RyaBp1b72UyjBVpr7hdRE9Yf3KJWNF8RJCRqisZ7bEEXrqM14AeEQTmfpzpGWeroTaqNdwQsA6xNWScEfRJ8V",
  "key32": "5WZyojRp6JaBF89Zp7mtWQRxAUVEoKp2GYKjuWtVQppnqcEvLLFU7cPHwT1CWn1Ndo2nCb45FwSUH6w6ve2YR3VJ",
  "key33": "2mvkfLXddQ4sRDDM5EbXdmqx94JQ2EMv4q7EQjLcxRTwuuM7oBKnhTU4vS8kwUsQaoC5S4hguTh3WKdrGr8KEyBS",
  "key34": "3f8jqNnRtE2CfypwmbHYcSuu6PkB2ZzFQn6dQzGpQLQHhnDSFPRJ4UAB5eDy4T2k2wk4fg8vq1AaPT1u1BfPBYRJ",
  "key35": "4nYDBsucekxACWVN4u5QaMMyazt9iFmxzJpRsqcWJmjw15PxBuvyvawZefaU5uVkYaFUcKqepUAkxsvqTon6mVnG"
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
