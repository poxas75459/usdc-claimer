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
    "2yLBceJWL8Rkidf5YNqLYMMr4u2FrpXUqRLzpssmhGAug34dhwtPGad4dnrqTcq6AWXd5Zoo7CSYwHMSPUa12zKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wgqNCCXFKi6yHVraHhhA39vRVTX64xmSa3i5mcqMyFkr95KcBsU678bBTT1fKaUo1RsDrtaCxXZ5G8Eae2qE37f",
  "key1": "3WaVRTtWFfmhGfg1mVHXa8edcpirgtuMPMtmHuLF3fHfZGPsMrNaXRUVKMBh4FARj5AsXZTZgb3BwPYFy13kKbj3",
  "key2": "3JRt4CfEt7FF2QoHzRqsyyy7FqyjEe1SWR6GRsSZs1856TY6UxswmqcWFc85BakQWWgxMUgs53DT8LNqaXnm5Uj9",
  "key3": "3vRvftJAJenc9eq3J6WZDfm34F7tNjcGCGuPKjY1Nziy4wN8KFm1wH3Da3MCUWL4xdtxpjgRnxqQL6235W2fscpr",
  "key4": "4gNX2JfThHkRBNHeZYBMt8AxXjjSHFb5yW5Em6erhYMD9hXW9J47to9p37iAYaUHfmy7jzZFEsnTB396qWVKaXJ3",
  "key5": "2kvRx44ifJwuNPRvmB8Sn8PQtfn8QVwXPqpbpTZQqEk25XCrxbXBRf6fCQX9zCRGsAt5cGRmBEQYWQpsJqxZj9uc",
  "key6": "4qPxDBfwgvrBuUK6RCmsewQ5d1xJxaztEU6uHWzPrzvnyc7NQh6GBj3vkzfqzsvbUG7dsftn81WzxwUThKHjfa53",
  "key7": "3nYBj4VWzJ2XBoecxgF36frRThd1A6VjLeXREbKcUVjcvk9a2SEWQbUiswiA3Pbqwf6wnXDDuEMMhyBT2syXKgxh",
  "key8": "2TrwW9Xc4GfJnZx1Hi2L38ryUDDdHjBaqyYDet8186u5K8mZGNL9FcsHaPfpaZWMxtfmewPaeogL4QSYH2mTunBU",
  "key9": "3qR3xrJoPEnk8sPBvrHxxxJFMsgnoMznTiTKFeiVM281fSAYuHBy1e5xoStyFJBHYjrTyR5eL8afu7bWDibJcCw8",
  "key10": "59QG3v9JuF1u5KcfqoXE7LxevzJwwHqzesq5PJdnUnyXmsE3iYfGBM8kgguZ8gnitG2x8RJ7BM2DSw5Jasnmx7Qn",
  "key11": "5N6wsuT8vFAE7EkJeEZKtZds1BHLSEigQNhgPNAs2uETEoNxnvCfToX6bTmmSGMZ3XZ99iuvcvxYmi2QzgTq1hJN",
  "key12": "b9iYgVdcMQ4zrmap2MLKKaNah987Vswr5BbC27FmHj9CS2fpenu9quPHoA3qtj3kACWm8sAH3fkVJJH5ZK9F77h",
  "key13": "3rLxdeDy1VifBA4ekdcyUQ3Pe94kAEkEVQSabVnRrSJgSkyuVquF48UCP6r2TxYCcDF7eF2VukHfKnsaem4We5aS",
  "key14": "27TgNPH5DAP9cxFwR14ye9H26pyJENudBWvF2Z9733U8MdVRgmX92YyJfntkZaNpz7b8hJio2t3jjvAdcT21Huci",
  "key15": "491SGyKGkVHKAPHzx2tqqK1EMJUyZzY7B37q2qSAEM6zoRTVTerScdyvjHZzAxie3B93DzDWw5Yzik713Ra31rhp",
  "key16": "5jMzqeVE6A8nxKxgEbLxd3B5HQkk8i46ymBQEFmnwBoegPxVzkKa8oaQyf7dYLiknuN8FRbE4zRZsPJnXfqqn5r5",
  "key17": "pxPNKywPtDuHrbJy2a8xDNb6kvsHh3ThRFM84mSxT1nRD68Z5JRtf5gDGG534qPYxn1Ne6YrvvowGS1LV9uf4AW",
  "key18": "7HD5VeC4MgMYCXjCkVxGc5iqBjcG7sxRVJhw8Y6fVqhqYLhwB9fuSz8gdtFg3u3yVN6B63T2uRFWysKGuDixRT7",
  "key19": "GGDyofZcugZpGJ11PtmPw3bYyx7acSkinS5uXKvVfBmVzJDjJSXwjqVth4s5hSxjD1meTkiPsMYy4PjkpcoZcam",
  "key20": "ZBUpFxhBkkqYte5zAZxAj525mnJ8dwFvzwaDVVJCSmzV7vintbJZfQD4x5AspJodWUGbqud7v8AxU5q9XJAZhr3",
  "key21": "3M1gA5pZKYVkf17TvYGVtjCB7LrQGJRfsss8wQ1dwWftr5hHt7iiHgXYDTV3srqM1deiyXeK3jGa6CrHBP4NMFwA",
  "key22": "2pSoYJG99WuDGqFQTS8ufwrbQnx72mxekYKKoeU7enMmk9hN66qKN8mu5nhoxnSocFCReufq9JYtV8Z91H7Uzonc",
  "key23": "ESwRSJjNAuMf7JvvLuHsX8musRFbhqj7jCabVqtvY4AGQA6WG48cG4EuAueZs6hkLmhPfkU4ZwT8TCqJvEiWUcf",
  "key24": "32pPYqUFKHK12uyVVyviqtXLvvHFawgWBRHUZJHS1i8ck5Qyj8kmLNrTC1f3f573zFoA8i1JEg7fudJHaK8TahK6",
  "key25": "2DPWyQKNwdMQ3WXAc5bVKMaWr1Sp8V55t36j1f46R76E4UHmf16kuqTvWkTvhRrBExwUQMPPppgqDbHQirNGRrHk",
  "key26": "2tJA6bfL8mwM6DBbHXmtPWePaNtrsPjkFSPXngyPkWnrxyNWteFFPxrZQ5tq4aJaXmcoxuLLtGWtXK34zJkj2i2m",
  "key27": "5Dz2Z6ktyjcnK7z8wfie28NNKSyttn6C1apUQPhwqvYxTXLc2ATAf953AbWU3dPZ34YaRHT8iV2ickCvWyzbxsUE",
  "key28": "5DV3UGfn4FfQw4cx4eTAprKfPuVMiEwzNk8svNaYu251AMXzbuCk6BVinnYrUVhwhe53ougzRMGWiJTZaC6kDek1",
  "key29": "5cH25Y6MdcGm38DaeFfmxviz55oHDVgohEWcx5ohqxYBRQaiE41w7mxRp99mmeGKURy4z7r7cAgMq6nDbGDLQZC4",
  "key30": "4pRGTLmktzDTKqJLmPesY13UzFxNoP5VPBeQKmB6f7BAfcwbbJPZrWAEkLx3Di9d1RxRe8Y28Xrq6xScFudTKeC1",
  "key31": "4JiGAPdbA8MJQwDvV7F8CNYA4X4NnF6H4Ca8bgFMrcmr9jBhLyTkTdVLboweFY2H8yr2dw7PbFhh3YQMTgHyGcZM",
  "key32": "eSxvF1UrYnJmVtUkP576fvosrPKKo7XmLZ9L8GGavd7jb9Xf5T3yTXKdCbd1v7jhror6WbEVjuxc3kTYbeSL9H4",
  "key33": "5Z1Zik79gTsirb5KJYzyUHPyUPcQXLiHxubNA2KhqPSfKuxstaokyZCkqYkgLsP7F2ubJcbwGxLout1D5XF8qMn2",
  "key34": "36LNuSCJYR76W5ncedNitrC2FRTYX6Bsirfhk5Ms3PwjRB2MuDD7XjS8Tn45zZBeYioQ7mq7TdcU3ZSz7yUb4CVK",
  "key35": "2N4cd55iKkrY8Hcy2gjobWHq1Mt7jS8FP1DNBZptc7JXH7jtMF5fwyUPYGhK6wfSTm69fT7sCyXv6jsxv7hAFUP8",
  "key36": "2sWD7viXAUbbbEhKT171NEki4hU28afFPPa9CJwVoXUTZ61PYpwbQPSnik8jJtJZSHy5tHNi3CqVB1pRF1MX1tbY",
  "key37": "64AVRuh9QC4HUNSftVcwWSTKHbgxebwV1CpcbXAYFcRs944ruVQaVBCeCJ2mxRGkgmXGyizY2mvhuckncCMd92fQ"
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
