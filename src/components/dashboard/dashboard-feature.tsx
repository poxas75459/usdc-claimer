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
    "4yDRBMoD2LtvCpGDKPtF2jmksQLQKTUa91RK39vKJQdbJxpVeADqyA7Za3tXMYXAUs614EHm9RMs968RD1afY5zq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BC5PfrEcgPNwV6TYtG1fyewkvCHRaZEpMXEb6NhqTP84T2jnmmFwfdcFqPeycR2waTkiUz42stWebftyusXnFHo",
  "key1": "4LFGe46TJuvhQgpiE3jEievTaJ3Y4dNV39N8Z7SzpxbQ3JaR1JyjSFJy12DkAkn7JJQP7gNDbkaDrBJgSfAYrQzw",
  "key2": "4XhUcUcjNxpsg992whNXQxg2ozz7qVhAPd8MpqRydU367smxg9b4eGK881Qrp4DGXMtwtPYTH4AXnrD7TzFuo5Nr",
  "key3": "G7QkRk7gouK624ZHtknm5DkNDXbbXS2d6yacxagc4FRCXLwL5873VQPk5nymGH1oVcgyGCioiE99RV13PwoeuwJ",
  "key4": "3M18FGhePSXLAtkzLxsoZce7wYZe77q19woGGt1RzsFM2XWkmfaLZ7hQ9cmziu8UcuLFcU5xryUzEGtu9fWr7RAb",
  "key5": "3x99eAbBSZQmz9e2jVNkbn3FCAVYD68F1axWfFE3pP8Je3potyvaS45zqbvvooafB3WvaxSUCqBiaw3sXHVLcD9o",
  "key6": "3uxMxAA4i9aneAJEfwXxCbiinVaZcB1DKyzFhZHgEFH4SyXunRZLa6YTGzBP6tBBU5pq8pegtBXs47Ggv4boUtqi",
  "key7": "2zU23AZP8CNYDfF52LBBrRa4QC1XHjnGDggwPg8gJGMM9UUp3ZGnHo5Wc9D67STsfABaJ7WjKMT51e2mnYtPUtsY",
  "key8": "5j42NBZNtr5LT9Yj6Eb2Rt6dhW9fsEM7REndPgQLqzfk9bmPUYLC7NQacEZDW3wqWr2q3kGuAXh4VHbGvnhqZgzs",
  "key9": "4HaXHyijuZLYBnQg8379P9FwoqhKwf8V4AKijUeWuCNDSp473o87FLhTVsizsMYABMFdCjNifEp1D8yhMaCyyS2x",
  "key10": "4qMCMqC9ib77L2TWptKYPCw96P1vNBEaqXudRVMXJTx4QugdmWn69JaBRYDNWrDXnyBM5ovtv7QwfgbynKmGCK7c",
  "key11": "LWQxHQeyU1P8Bc7y2QP3NLAwnjTbCiVpUFrxukY4tt2HKGLS4PRK2SDbQ5yJq4uFmnfR67HYbTHpiBYYZeb236y",
  "key12": "4Eoy7x1Pk2SHA9AD1uFiPtZ6gjTXnn8SK6BzVK9YfhgvjkWsBhsN42SzTGz22uUCG8ZJM6e7iPS8maN7Q9N3effC",
  "key13": "4CLpsS1A3vPRzzjJps1oSSgrWiBkhaqvPgf331snEY1xLShKUm8KUKiQ8fTRFzhX9LUaorFfZjFwdwz61RHTMzgg",
  "key14": "oPDy1yy7UjwG6hFzLU5UdUmQGZx7Jdw2vZP4BrJoVUuvvyFXrfduTG2XyoJ5ZG16qa4iMMssPmCZBBjYnzszcGE",
  "key15": "4W4xcuDb4zjPPRUocXzsmu6QatiHZqqRf96y5mXyrXNrsHxJf5kigdLMtyV8u2BhkYkkatBthFMr6KkayGeWkRbq",
  "key16": "3DQjrHnGzFg15iH1EjFAvhVr58uwAykVR7QXLNBBGJCXsrYUyCCf7mQHjxDAnVxTQBMYWqUywgdU1Vt4yBVZ5QbD",
  "key17": "3wN7e1xAw1AfRa5Ztq2rLGt29HwkftYsJBUgrC834igWTTqrbjv2c5Ex7UGb6a1upUbsMWnUEMij4Kz2nhkRREk3",
  "key18": "4RDTojChdmwjsRftHwvu6urV52dceZzhEEmSj25BsEQGztpyyfyju6FH2o3dPU6HUNABY9N2zcoyWJ8Peni9Qr2U",
  "key19": "5qP3YJkhUs2PXzKPQ8AJmVT52KPPt19FjhbweV6cxYSGsNBL2FuTjWNQCn21qEYZeJobkoZBSpM2aZcHLLkP6whM",
  "key20": "54Gqw35PbxRHxEYKKEAMo2dsmHHJAPJg43jgCM3eroqa1ehrP3LADeYXMJkzh8djDJVrLTsZ8eMTvCLeV1XvuzGA",
  "key21": "3dYGT2wAWxRwCWXESvupUcQTABypE2FWR1S2W6N9DsMV2kkEZzeHq4xcrGfxkcRgCW6bwx2z38gBQe5T7d6DRpCF",
  "key22": "39HYCNWwiBDc9TxfSFTbsGMjgQQBgTbwNg6H9EXPi72xWfpM1cz3o95C5fgxfwoxEpe4m8Z1QakTxSH749JTKzPX",
  "key23": "4E4KWMEiHmipMgLAxwUcqF3W5KdnnxiCuiehTYSs6RfUL8a6tJooEK7NKXZk6pScPAeGRwxrGhEdP7XSDjBrJM6t",
  "key24": "2D1K4wBZtEUpbptxZdaLQi4FdKDVwGTQUhWjpNkgHsxT7YJmMiFAFSWh7LfBNfkQSFWfkXWCcWVtRESt1Atgf7YX",
  "key25": "2cypcmyHJZ51jebsxm2nnwAGSidHPYJ7bPr4k41qgkGcm9Wau6rxbe533yRuHtUTxyCHB4UDbJGSUYmSyURWqHdz",
  "key26": "22HcEjSX4LvxsyPALATkyqxbi47HMpJs2v4oosSFVMZ1WAcMxDEGEVjN2xEep44DzE4q1Cj54X5KH1jGc4yyHzLf",
  "key27": "3v2zweLS3Xe6Ltx5KKTpceMiyMqcYTRmeStnNTrWa1KJ4ZnyDrsuqHKj2PioUiYZCz3XKpQimMPzkFEiKVjuXDf5",
  "key28": "44jDgntCEBqRcGGJ6MD5eXc24vWy21kNSgdyktTXTVyZezuNheXHUh5drQdqVfQyeGDqjHQqEG6xxTUma94i575T",
  "key29": "61xd5La4C6QtCympNMU7mEEcLDXqCVd8bFgj3HPh9iQi3Sxge8cdoMycxwz65abaLhQ721cFtEuHTntF158CmXEE"
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
