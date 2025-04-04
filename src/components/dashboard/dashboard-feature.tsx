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
    "aDBTT3J3cAKAUePR55stWpM43caRZuTe559UwYRD14HLK23DCfhUi4QMp17o542Y2GLWoRKDtH1RcNxJm168VSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VJnqi1z6GqWv1Vg5JRoZ6Rc4ExXsR46W88hxWTZUswH6QSR2RUZzAH96VY79uKkwjGKSe8fWpDrJxB5wixna2n6",
  "key1": "2BMS5xMLoUfeLrvdM91r17VDfXRjGRNXTeL39QhN7QoPS55By74fr9E3MxwnwWE7PgHgn5yum7EmUqT3DWbCiTJo",
  "key2": "61JC3FCN9yjU7bSYUPT4uLDg4rgu8QgVHumtUG9FxvVfravnPKv5cUp955TuJNFLojDhRRKxztSd25QvKEbPE4Bt",
  "key3": "8vb5FgPrSC2QCFPMTsuP2wQb4Ng6GL9VwsjM8baQPSawEq2A44AjTr736XDqaDtDWnYpsWSgXKnfd7kUj1msieW",
  "key4": "5UE3cTghM2gxMqWwAkGK1fxwtg7EKoPmdetvoSr443MyJpkCdbPrdEQyFbAkeEqkV7DZZGXMVvMTafTc39VZeosh",
  "key5": "4ZUo5j91LNuvb67UCLUStKi8Uz6nTTU1EvBncrPfBhzBnAiCTP2uMoVTyuPumfVRm29yniwkMJM4USzg2xPoPgXW",
  "key6": "QH5PsvkqiV3nNbn55DmoXBXavqwgzcmiGkeyr9vppnJj8DHQ7Zma5CZiV7Mr7Pra4stuuY6GUYtDcoR1kohLmCb",
  "key7": "4Ww2xrvuMrvKvHgiFeQibChjk2n9i8Z4XDAcQnAvQ4N8ia5Sg12kZdYBDTRCoW6Esgk18UtiAEL1SXJjPqFP6M7W",
  "key8": "4nst2GSsZ7CJaN7uXQesV98RgucMZxUwUFbRshzq3B5NstaGLUuZvR6yeGtA7ymj4YnGPby6YgxbT3rLq2FF7kw3",
  "key9": "4qJy4KPAx9VmJtqosVurnEsbTgbb8fPQoCXonnjbDdfzQyAzmaS1STT4kcdN2TwWceW1YBR7E6BMRZ1wJKV2Mhp5",
  "key10": "4RRifdRtGU9o6stWGLanUKe3Cka5VZDh7ydADGLHh24VoSk2f3PJYakhKH3sk49UnvWnbXMgemxjJQd5EsFZAHwZ",
  "key11": "55EZTCpTZnBPbJeZHPN2FgiQCkEBWvobZMiFwGDwjQbY2iNgE7ssd4xaWXJd3Wh49Es1AEJpysEfjTFGGc3DrEff",
  "key12": "5rzJXg1dmDhVQjVdmHpW38wGYrm6Mvyu2BWJeuVtzgSdt8677iyjjAo3FZCeUhjfFS6ppLaubCwvsPkEnpvv5AKy",
  "key13": "tq7yJpxx2qEWW72QueV26V77e3uqKeC4z8HYapcLk2PFzik8DE9tszBAid2rSdXK3LZEfRrSTSCs6SyFKMPjpon",
  "key14": "4RwQ8TrcbVajZudPtCgfvxMKxBbQy2oG4Z3cDwjXkrFCchmkahabxuMxa8JCWjhtHfE1fefi456TaXTDbg6afiLt",
  "key15": "3bBmGBpfAhWKUKTGxRCjzPTSyGkDEuYtPoDfN9Eva32nv7ZqSoK4gKbrW2xif2srowACVpoW1Z6gii8LGq7RwKQX",
  "key16": "5Vs1woNvapV2hz38WrS4yfWjD8ptvqFTBALPt32igdDWT1npCnA83SjP1vBTodSGCH1ZGuv5o4tXateCdSHatYZU",
  "key17": "5EAaMxftRprRvpNaa4zbX8RvukMMh1ECDHJ4SNDnjEG1u7z8CudBxHCjP9XbBk6QDeCycMwFBRixY4tCN663HZyU",
  "key18": "4GJsX3EvWykzJKkuMowhiGyq12KnjDVWkpsjRyk1AkPY1Z42fpV1eHCRBNbxeSE2CvrGCUgc9SYmUobWgKENLBMu",
  "key19": "4UwKfTvQmezNic225tZe27NmmMmwmZfFE4U5xbFeMV9RFRg8Lc4fYDjnEmifm2PE2yzbCu16e8HiLvHV6uFTUBaq",
  "key20": "qkNPPZELxswoc3ZRz8omJ86tP3MWtTAwsy153DoJygHyeCp6BXifpQkvBFjnhqcbfxx2N2WuJGRcda8LGyEGvBC",
  "key21": "2rd1sX5X3kszqo4oXRQ3KDDQfCDNJtHsqfTdS9rK4i6LrFpGcKw9h5xcqZzS6PtypoVBr3t41pbKcmHgxKJ2JDPh",
  "key22": "39YXFqwk4tZnWGJFDVCgq6nKN4RhCCbSAGc8kDYcVaMKHiBNLhD3mcs55ET7ubfBRHwZkwfCW7jMyPLicdcXLYuN",
  "key23": "2FJRs8b42A6ZX1At6ySPbBbwrjesUBz1u7nX36dyrT8pH3ojAFGCw7j8dNxgsBtYHPVWMx9mSc6osMGLcUjaif44",
  "key24": "TzReTxaFyQFbNyay5b6FdCGfyYqDf99rxdeaRoP6ctHYyzsXFYadWp6MGWubkhT7HhocMuaDs31vvigZ31iAq5P",
  "key25": "zpB4zanmgxW7erbsmvY1ZhjWeTaccy6RKkLVPCvP8gjzC2q8Ktqx2XtLpNuoMrX4t2YLV3VoWwodnrsfWWujAev",
  "key26": "4kpj8SmNChRnwo4iBb8awh1XzXgYqZAHmjfi3PB3RCVMDbF6PSbXpaw76EpurLuKeHnyRgpsm1ZDcTGrraefx9DE",
  "key27": "24aHji8oRLqc13cZBn8eJ5ow1hHqq9atn2rRcAQJhLJNDC5niBSRKdnXc6ie3B4fo7nqBN1uotdsiJ96XhcQ7vxn",
  "key28": "496KqnRY8KqatohvJTEGgZRSuJpjfgG5rhCTQyE8GisCUvognXphGCBXiAEckwAzUXehibkQKcDQgbUUTNGsqkar",
  "key29": "5cmfAqwtnPrqZX44LtWkzf1YLuz4S6TqK2wQpUdyppCYUSrSYHiDquz1xzU4yRCw55Usbbv7unmEtrJrNfYwuxma",
  "key30": "26mcfyLiZCD1kHj7YYrquVQcy4QgnJMWDQQLJFi7JFYyzW739MrCaVVypJjo8wfN38yLg9BArwyZumYBP4BzMQV1",
  "key31": "5168EKrqmd5Jze3mmXNQswUsXK2PnRY4xs7mfk55DnaZKsdRaxLy8j5pYYWAyNqz7mMY8Rt1iPz8qkuhm5to5bJA"
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
