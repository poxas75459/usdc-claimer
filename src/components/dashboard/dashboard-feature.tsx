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
    "4jkEqgZGfcMApvPdpC4NDmdhUsz4N9QAnwN385cikD8KW1HbwNMkbz4rYGNxVFRHu7peyYMuSHSK76MT5RtHA7SD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BvJ816gF4tuhpA7fu5rgHdHb7pRAXfRg6JcHZtU3cLqVGb1FT9ajvte7EkbtD4fSE6kXH97ML6V9U666LnGAyhb",
  "key1": "3LAu11TfGRHRvteY3U5K2DWbRXcTeGxWwosSs3qi4HwmDNhHC6g5vij3CJ3wVSq9qTgGPnYYJ6EETtM1jSKCksfh",
  "key2": "3wUJAWvmA6x4cYNRUJBysiwpAgbpe8CQiqSGxs8D15NYJFumLBsyMc9nSaZV4zxau18YMkapu4e7JcV9ZbckdChN",
  "key3": "4ieYLqRx1Dw3qFqhSbRdSSSsJKBJiJZdcWb9YrH4WQtE27F3o2hnmshWnk1asZYZRuvf3rqxxqGFwMr7r4dEzXf",
  "key4": "4bSrJyoe1XNbLiGohXZuDp8ypAmEgeyzvfFEQzZME9YEe87E992CtYF2KCh5eWzqFfTuxmnXH66J1L6kRcRqBB5H",
  "key5": "5fdRCvWh3c2zyecBAvLnqXatt3spVd8oZ8hb3cpcounaAWAU2qSJ96WiXKiDz3PHym2tpTLgotMCunVUCSHvtgB1",
  "key6": "hSPbgfW6giwGWVAYuFkwAqz12XijD9EneFmzSPpXESviodBBGTeXSu284ZgQJLGd3cf3UZWvCzZHzau6h522nE8",
  "key7": "5e4312Ha5mJkA29Gk8kxvCc2M7gveSj7Hkho8unaUKMGrxntA1Nmbif4KtN8aFcstSUvF2g9J9mtUz7zB2ji34jd",
  "key8": "MGTsRRiBndc3Xv77JVfJaLQjtNKUJh4mGArSP2dZhyqNLSd5qKu4Ly7Pf8z1DE29FAW6RsckvwaEZ4HByLbXvyz",
  "key9": "5iqMvavGpuYSZrdGzu4DGPhw62bWvegFDVUkgBLYZMM2mto34zhFSTXmxPmYeucKVVGDmg6pUdntnFyPAPZT5Ayv",
  "key10": "51osbv6x6gFtUmuXDcAUHmwJwB8bf4jhNqHXqhEBApzUs9GJgRaqxtkaAwbGVgDzdY7AYhF7tVfFwDbvSAW58ho9",
  "key11": "2KXXMJxWxwqzcJ3xr1hodzpmYP5B5JQNjgkhE9MjAJGSpJVVFCFrbj4K5dPgSQiTX5R3k69EUQvKpxaojdCKwaWt",
  "key12": "rTsc2ToubeYQ1ummEg6piavHDVJrna4ECHXXXcCioR2QZZSMXJPq1FbPbDyxv2d72fp1vrcftCeLWADHFAcPjLq",
  "key13": "4vjPp4r4KsnsVosT3EpypSPCNCcPJihrbCqCjLZMcvfGRxunqTiCtCkM86Cg5ue3XspJNF4c3yQdcfimJL5jcPAv",
  "key14": "kgtiv8qXiqbqkusNnWJKacmGYiuEcTj1MsXPP65WaEqjbw1ZoTZgnNCxmvoi16BwwjdMnGC46PphKdqZ3qwtxzL",
  "key15": "4RnACH7uusGAZ1iEqxwstzWEsbm8XYDJSn6bRdHbg2jqA4aYRG4tEmFcRpi64jh5ewhKdftNh2qEwUGe6NN6n7VD",
  "key16": "34BMgRGjTPh2ZMaAC7q9Y8q4iqj9eF4KTDj4JDbytC5fZepY8iz1QeeJA3rHa5nMWK3nbFkb4TqP15N7KyrzqoRM",
  "key17": "2u46ZT4Cmmzkq51Z6gZdTayWsc5u9g8objZYV7ugSCyaMAehg5LBdutWDE62aSjUF56FUkG8YpK6aj8SGUQi94KN",
  "key18": "3wptgnD1AuxjzB2cXBiYP2YHBw7qu3mFFotNUwAXadvDXY96RRuc6nTwdaHGbDCDevrTRJChfUBMsBZXQd3EacTr",
  "key19": "4QuPcP7mNz48XnuohWbSRJKDtN3m6sgbccinSaWHb8jeKYfhcf3fEsGKwnowK1PMUM5QByyt4afPN5J5rWcarQwL",
  "key20": "5KrP79uY3UaxWJvUjEwknzfD65SNM6QFMoHT9cThhiB3tugz1fdA6qLgaEMGe4nV57wGUikfxkkg4dsDetetvQv7",
  "key21": "2a5gpVEMLgZDTJiHZUYmYW563tNW9NCwuCGcEnnjCZ1Qmfu72FAMpNQeKznTtTWVb7VQP5yjLGCoV28TCGzTWrtJ",
  "key22": "VZXRqz7ngj95JnVvhLS8JhyYhaXn38cmEhT7PPE95V9qHfYq5i9ir1eiGLSaFPQJL1wJKLEYts6MAmR9BmydCLw",
  "key23": "2qcqg8Qhxzp3qtHMriKcpZd7t5SfhK88v4fj6ejcqk7b7AwJtoDYXo6WN2pnteUV33xfhpG6LjVfNtw4sg7Ri6xb",
  "key24": "4vXZ5NmULetimptaRAMS8eEDxf4PYPtWFkmCYJDqQbVMbosZD2HkkPzf96S6GvsGAaBNPimGKEcjH7iiRXc1xvgR",
  "key25": "3iNTBSe7hjPKcVWR2SCH7Y45goeb2kz4dVMMjw1GYrHmrfNoLcuuFTcRHYTgCQ2g2Z6dMvYvbuhhmEtz2tNhxYsB",
  "key26": "v6k1XUuxs1wmJhUtZ1Hyd8Trkc4YUymhc5nCtoSFKJeG4kbLwfL5skHnZBFAbpU97c8jstYcUyiynemJ4tGFiWV",
  "key27": "3RCRgW5Gct516pU4yFKmK614RUqf8r5YemJ9vHU86pFQ7r1MPgrD9wMGpe1VyuKicCLJHtdXdhTCVqwcRZ7G2zMY"
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
